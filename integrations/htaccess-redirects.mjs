// Turns every static "redirect stub" page Astro emits (meta-refresh + noindex)
// into a real one-hop 301 in dist/.htaccess, and rewrites the hand-written
// assessment rules in public/.htaccess so they point straight at the final live
// page instead of at another stub.
//
// Why: the stubs are served with HTTP 200, so Search Console files them under
// "Excluded by noindex tag", and every hand-written rule that pointed at a stub
// created a redirect chain (301 -> 200 stub -> meta refresh). Real 301s remove
// both problems. Stubs stay in dist as a fallback for hosts that ignore
// .htaccess.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const SITE = 'https://futurecareerschool.com';
const BEGIN = '# BEGIN generated stub redirects';
const END = '# END generated stub redirects';

const withSlash = (p) => (p.endsWith('/') ? p : `${p}/`);
const toPath = (url) => {
  try {
    return withSlash(new URL(url, SITE).pathname);
  } catch {
    return null;
  }
};

function collectStubs(distDir) {
  const stubs = new Map();
  const walk = (dir) => {
    for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
      const full = path.join(dir, entry.name);
      if (entry.isDirectory()) {
        walk(full);
      } else if (entry.name === 'index.html') {
        const html = fs.readFileSync(full, 'utf8');
        const match = html.match(/http-equiv="refresh"[^>]*content="\d+;\s*url=([^"]+)"/i);
        if (!match) continue;
        const from = '/' + path.relative(distDir, path.dirname(full)).split(path.sep).join('/');
        const target = toPath(match[1]);
        if (from !== '/' && target) stubs.set(withSlash(from), target);
      }
    }
  };
  walk(distDir);
  return stubs;
}

function resolveFinal(start, stubs) {
  const seen = new Set([start]);
  let current = stubs.get(start);
  while (current && stubs.has(current)) {
    if (seen.has(current)) return null;
    seen.add(current);
    current = stubs.get(current);
  }
  return current ?? null;
}

export default function htaccessRedirects() {
  return {
    name: 'htaccess-redirects',
    hooks: {
      'astro:build:done': ({ dir }) => {
        const distDir = fileURLToPath(dir);
        const htaccessPath = path.join(distDir, '.htaccess');
        if (!fs.existsSync(htaccessPath)) return;

        const stubs = collectStubs(distDir);
        const livePages = new Set();
        const walkLive = (d) => {
          for (const entry of fs.readdirSync(d, { withFileTypes: true })) {
            const full = path.join(d, entry.name);
            if (entry.isDirectory()) walkLive(full);
            else if (entry.name === 'index.html') {
              const rel = '/' + path.relative(distDir, path.dirname(full)).split(path.sep).join('/');
              const key = withSlash(rel === '/.' ? '/' : rel);
              if (!stubs.has(key)) livePages.add(key);
            }
          }
        };
        walkLive(distDir);

        const handled = new Set();
        const ruleLine = /^RewriteRule \^(services\/assessments\/[^\s]*?)\/\?\$ (\S+) \[R=301,L\]$/;
        const lines = fs.readFileSync(htaccessPath, 'utf8').split('\n');
        const out = [];
        for (const line of lines) {
          const m = line.match(ruleLine);
          if (!m) {
            out.push(line);
            continue;
          }
          const from = withSlash(`/${m[1]}`);
          // A live page wins over a legacy rule: never redirect a page that exists.
          if (livePages.has(from)) continue;
          const target = toPath(m[2]);
          const final = target && (stubs.has(target) ? resolveFinal(target, stubs) : target);
          if (!final || final === from) {
            out.push(line);
            continue;
          }
          handled.add(from);
          out.push(`RewriteRule ^${m[1]}/?$ ${final} [R=301,L]`);
        }

        const generated = [BEGIN];
        for (const [from, target] of [...stubs].sort(([a], [b]) => a.localeCompare(b))) {
          if (handled.has(from) || livePages.has(from) || from === '/404/') continue;
          const final = resolveFinal(from, stubs);
          if (!final || final === from) continue;
          const pattern = from.replace(/^\//, '').replace(/\/$/, '');
          generated.push(`RewriteRule ^${pattern}/?$ ${final} [R=301,L]`);
        }
        generated.push(END);

        const cleaned = out.join('\n').replace(new RegExp(`${BEGIN}[\\s\\S]*?${END}\\n?`), '');
        fs.writeFileSync(htaccessPath, `${cleaned.trimEnd()}\n\n${generated.join('\n')}\n`);
        console.log(`[htaccess-redirects] ${generated.length - 2} stub redirects written to .htaccess`);
      },
    },
  };
}
