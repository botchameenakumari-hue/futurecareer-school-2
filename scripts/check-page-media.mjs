// Fails when page media is broken in the finished build. Cheap rules only; run by `pnpm verify`.
//  1. No component code printed as page text.
//  2. No local image reference points to a file that does not exist.
//  3. On /services/ pages the hero/context figures sit near the top, not after the content.
//  4. The old browser-side relocation scripts are gone.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const dist = 'dist';
const walk = (dir) => readdirSync(dir).flatMap((n) => { const f = join(dir, n); return statSync(f).isDirectory() ? walk(f) : n === 'index.html' ? [f] : []; });
const problems = [];
let pages = 0;
for (const file of walk(dist)) {
  const html = readFileSync(file, 'utf8');
  if (html.startsWith('<!doctype html><title>Redirecting')) continue;
  pages += 1;
  const route = '/' + file.slice(dist.length + 1).replace(/index\.html$/, '');
  const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '');
  if (/const path = Astro\.|Astro\.url\.|\{`\/images\//.test(text)) problems.push(`${route} prints component code as page text`);
  if (/data-blog-fallback-group[\s\S]{0,40}$/.test(html.slice(-200)) || html.includes("document.querySelector('[data-blog-fallback-group]')")) problems.push(`${route} still uses the browser relocation script`);
  for (const m of text.matchAll(/<img\b[^>]*\ssrc="(\/(?:images|blog)\/[^"]+)"/g)) {
    if (!existsSync(join('public', m[1]))) problems.push(`${route} references missing file ${m[1]}`);
  }
  if (route.startsWith('/services/')) {
    const i = html.search(/class="bofu-(image|context-visual)/);
    if (i > 0 && i / html.length > 0.6) problems.push(`${route} service media sits at ${Math.round((i / html.length) * 100)}% of the page (should be right after the hero)`);
  }
}
console.log(`Page media check: ${pages} pages`);
if (problems.length) {
  console.error(problems.slice(0, 40).join('\n'));
  console.error(`FAIL: ${problems.length} problem(s)`);
  process.exit(1);
}
