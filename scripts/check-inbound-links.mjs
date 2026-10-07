// Fails the build check when an indexable blog, resource or service page has too few
// internal links pointing at it. Pages with very few inbound links are the ones Google
// tends to crawl but not index.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const dist = 'dist';
const MIN_INBOUND = 2;
const WARN_BELOW = 4;

const walk = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const full = join(dir, name);
    return statSync(full).isDirectory() ? walk(full) : name === 'index.html' ? [full] : [];
  });

const files = walk(dist);
const inbound = new Map();
const checked = [];

for (const file of files) {
  const html = readFileSync(file, 'utf8');
  if (html.startsWith('<!doctype html><title>Redirecting')) continue;
  const route = '/' + relative(dist, file).replace(/index\.html$/, '').replace(/\\/g, '/');
  const normal = route === '//' ? '/' : route;
  if (/^\/(blog\/[^/]+\/[^/]+|career-resources\/[^/]+|services\/career-counselling-and-career-guidance\/.+)\/$/.test(normal)) {
    if (!/name="robots" content="[^"]*noindex/.test(html)) checked.push(normal);
  }
  const body = html.replace(/<(nav|footer)[\s\S]*?<\/\1>/g, '');
  for (const match of new Set([...body.matchAll(/href="(\/[^"#?]*)"/g)].map((m) => m[1]))) {
    if (match === normal) continue;
    if (!inbound.has(match)) inbound.set(match, new Set());
    inbound.get(match).add(normal);
  }
}

const low = checked
  .map((route) => [route, inbound.get(route)?.size ?? 0])
  .filter(([, count]) => count < WARN_BELOW)
  .sort((a, b) => a[1] - b[1]);
const failing = low.filter(([, count]) => count < MIN_INBOUND);

console.log(`Inbound link check: ${checked.length} pages, ${low.length} with fewer than ${WARN_BELOW} inbound links.`);
for (const [route, count] of low.slice(0, 15)) console.log(`  ${count}  ${route}`);
if (failing.length) {
  console.error(`FAIL: ${failing.length} page(s) have fewer than ${MIN_INBOUND} inbound internal links.`);
  process.exit(1);
}
