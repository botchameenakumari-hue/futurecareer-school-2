// Audits the rendered site (dist/) against the visual-system rules.
// Usage: pnpm build && node scripts/audit-images.mjs [--strict] [--scope=blog|services|all]
// Without --strict it only reports. With --strict it exits 1 when any rule fails.
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const strict = process.argv.includes('--strict');
const scope = (process.argv.find((a) => a.startsWith('--scope=')) || '--scope=all').split('=')[1];
const dist = 'dist';
const pub = 'public';

const walk = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const f = join(dir, n);
    return statSync(f).isDirectory() ? walk(f) : n === 'index.html' ? [f] : [];
  });

const sizeCache = new Map();
function imageSize(src) {
  if (sizeCache.has(src)) return sizeCache.get(src);
  const file = join(pub, src);
  let out = null;
  if (existsSync(file)) {
    const b = readFileSync(file);
    try {
      if (src.endsWith('.webp') && b.toString('ascii', 0, 4) === 'RIFF') {
        const t = b.toString('ascii', 12, 16);
        if (t === 'VP8 ') out = { w: b.readUInt16LE(26) & 0x3fff, h: b.readUInt16LE(28) & 0x3fff };
        else if (t === 'VP8L') { const v = b.readUInt32LE(21); out = { w: (v & 0x3fff) + 1, h: ((v >> 14) & 0x3fff) + 1 }; }
        else if (t === 'VP8X') out = { w: (b.readUIntLE(24, 3)) + 1, h: (b.readUIntLE(27, 3)) + 1 };
      } else if (src.endsWith('.png')) out = { w: b.readUInt32BE(16), h: b.readUInt32BE(20) };
      else if (/\.jpe?g$/.test(src)) {
        let i = 2;
        while (i < b.length) {
          if (b[i] !== 0xff) { i++; continue; }
          const m = b[i + 1];
          if (m >= 0xc0 && m <= 0xc3) { out = { h: b.readUInt16BE(i + 5), w: b.readUInt16BE(i + 7) }; break; }
          i += 2 + b.readUInt16BE(i + 2);
        }
      } else if (src.endsWith('.svg')) {
        const m = b.toString('utf8', 0, 600).match(/viewBox="[\d.\s-]*?([\d.]+)\s+([\d.]+)"/);
        if (m) out = { w: +m[1], h: +m[2] };
      }
    } catch { /* ignore */ }
    out = out ? { ...out, bytes: b.length, exists: true } : { exists: true, bytes: b.length };
  } else out = { exists: false };
  sizeCache.set(src, out);
  return out;
}

const attr = (tag, name) => (tag.match(new RegExp(`\\s${name}="([^"]*)"`)) || [])[1];
const rules = new Map();
const fail = (rule, route, msg) => {
  if (!rules.has(rule)) rules.set(rule, []);
  rules.get(rule).push(`${route} ${msg}`);
};

let pages = 0;
for (const file of walk(dist)) {
  const route = '/' + file.slice(dist.length + 1).replace(/index\.html$/, '');
  const isBlog = /^\/blog\/[^/]+\/[^/]+\/$/.test(route);
  const isService = route.startsWith('/services/');
  if (scope === 'blog' && !isBlog) continue;
  if (scope === 'services' && !isService) continue;
  const html = readFileSync(file, 'utf8');
  if (html.startsWith('<!doctype html><title>Redirecting')) continue;
  pages += 1;
  const body = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '');
  if (/const path = Astro\.|Astro\.url|\{`\/images|\$\{[a-z]+\[0\]\}/.test(body)) fail('component code printed on the page', route, '');
  const imgs = [...body.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]).filter((t) => /src="\/images\//.test(t) && !/\/images\/authors\//.test(t));
  const og = (html.match(/property="og:image" content="([^"]*)"/) || [])[1] || '';
  if (isBlog && (og.endsWith('.svg') || !og)) fail('og:image is the generic SVG or missing', route, og);
  let articleVisuals = 0;
  for (const tag of imgs) {
    const src = attr(tag, 'src');
    const info = imageSize(src);
    if (!info.exists) fail('image file missing', route, src);
    if (/\/images\/blog\/category\//.test(src)) fail('generic category image used', route, src);
    if (/\/images\/blog\/page-cards\//.test(src)) fail('auto-generated page-card image used', route, src);
    if (/\/images\/blog\/page-context\//.test(src)) fail('page-context image used', route, src);
    if (isService && /career-guidance-editorial|at-a-glance/.test(src)) fail('generic blog image on a service page', route, src);
    if (!attr(tag, 'alt') || attr(tag, 'alt').length < 25) fail('alt missing or too short', route, src);
    if (!attr(tag, 'title')) fail('title attribute missing', route, src);
    const w = Number(attr(tag, 'width')); const h = Number(attr(tag, 'height'));
    if (!w || !h) fail('width/height missing', route, src);
    else if (info.w && Math.abs(w / h - info.w / info.h) > 0.05) fail('width/height ratio differs from file', route, `${src} attr ${w}x${h} file ${info.w}x${info.h}`);
    if (info.bytes > 250000) fail('image over 250 KB', route, `${src} ${Math.round(info.bytes / 1024)} KB`);
    if (/\/visual-\d/.test(src)) fail('non-meaningful filename (visual-N)', route, src);
    const after = body.slice(body.indexOf(tag) + tag.length, body.indexOf(tag) + tag.length + 600);
    const isFigure = /^\s*<figcaption/.test(after) || /^[^<]*<\/picture>\s*<figcaption/.test(after);
    if (/article-visual|article-cover/.test(body.slice(Math.max(0, body.indexOf(tag) - 300), body.indexOf(tag)))) {
      articleVisuals += 1;
      if (!isFigure) fail('explanatory image has no caption', route, src);
    }
  }
  if (isBlog) {
    if (imgs.length < 6) fail('blog page has fewer than hero + 5 images', route, `${imgs.length} images`);
    const spread = [...body.matchAll(/<img\b[^>]*src="\/images\/blog\/[^"]*"/g)].map((m) => m.index / body.length);
    if (spread.length >= 3 && Math.min(...spread) > 0.8) fail('all images clustered after the article', route, '');
  }
}
console.log(`Image audit (${scope}): ${pages} pages checked`);
let total = 0;
for (const [rule, list] of [...rules].sort((a, b) => b[1].length - a[1].length)) {
  total += list.length;
  console.log(`\n${rule}: ${list.length}`);
  for (const l of list.slice(0, 4)) console.log('  ' + l);
}
console.log(`\n${total} issue(s)`);
if (strict && total) process.exit(1);
