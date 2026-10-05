// Fails the build when an internal URL would cause a redirect or point at a page
// that should not be linked:
//  1. internal links / canonical / JSON-LD URLs without the trailing slash
//     (Apache redirects them, and Search Console reports "Page with redirect")
//  2. internal links to redirect stub pages (meta refresh) or to missing pages
//  3. sitemap URLs that are stubs or noindex
import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';

const dist = path.join(process.cwd(), 'dist');
const SITE = 'https://futurecareerschool.com';
const FILE = /\.(?:svg|png|jpe?g|webp|gif|ico|xml|txt|pdf|css|js|mjs|json|woff2?|ttf|map|html|md|csv)$/i;

async function walk(dir) {
  const out = [];
  for (const e of await readdir(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) out.push(...(await walk(p)));
    else out.push(p);
  }
  return out;
}

const files = await walk(dist);
const htmlFiles = files.filter((f) => f.endsWith('.html'));
const pages = new Map(); // url -> {stub, noindex}
for (const f of htmlFiles) {
  const rel = '/' + path.relative(dist, path.dirname(f)).split(path.sep).join('/');
  const url = rel === '/.' ? '/' : rel.endsWith('/') ? rel : rel + '/';
  const html = await readFile(f, 'utf8');
  pages.set(url, {
    stub: /http-equiv="refresh"/i.test(html),
    noindex: /<meta[^>]*name="robots"[^>]*noindex/i.test(html),
    html,
  });
}

const problems = new Map();
const add = (kind, from, value) => {
  const key = `${kind}: ${value}`;
  if (!problems.has(key)) problems.set(key, new Set());
  problems.get(key).add(from);
};

const ATTR = /(?:href|action)\s*=\s*["'](\/[A-Za-z0-9_\-/]*)(?=["'?#])/g;
const ABS = new RegExp(`${SITE.replace(/\./g, '\\.')}(/[A-Za-z0-9_\\-/]*)(?=["'<\\s\\\\,)?#]|$)`, 'g');

for (const [url, { html }] of pages) {
  const body = html.replace(/<script\b[^>]*type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, (m) => m);
  for (const m of body.matchAll(ATTR)) {
    const p = m[1];
    if (p === '/' || FILE.test(p)) continue;
    if (!p.endsWith('/')) add('no trailing slash', url, p);
    else if (pages.get(p)?.stub) add('links to redirect stub', url, p);
    else if (!pages.has(p)) add('links to missing page', url, p);
  }
  for (const m of body.matchAll(ABS)) {
    const p = m[1];
    if (!p || p === '/' || FILE.test(p)) continue;
    if (!p.endsWith('/')) add('absolute URL without trailing slash', url, SITE + p);
  }
}

for (const name of ['sitemap.xml', 'llms.txt', 'rss.xml']) {
  const f = path.join(dist, name);
  let t;
  try {
    t = await readFile(f, 'utf8');
  } catch {
    continue;
  }
  for (const m of t.matchAll(ABS)) {
    const p = m[1];
    if (!p || p === '/' || FILE.test(p)) continue;
    if (!p.endsWith('/')) add(`${name} URL without trailing slash`, name, SITE + p);
    else if (name === 'sitemap.xml' && (pages.get(p)?.stub || pages.get(p)?.noindex)) add('sitemap lists a stub/noindex page', name, p);
  }
}

if (problems.size) {
  console.error(`Internal URL check found ${problems.size} problem(s):`);
  for (const [k, from] of [...problems].slice(0, 60)) {
    console.error(`  ${k}  (on ${[...from].slice(0, 3).join(', ')}${from.size > 3 ? `, +${from.size - 3} more` : ''})`);
  }
  process.exit(1);
}
console.log(`Internal URL check passed across ${pages.size} pages.`);
