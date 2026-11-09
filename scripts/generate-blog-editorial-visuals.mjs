/*
 * Build page-specific editorial visuals for blog routes that still have only
 * the category hero and the neutral fallback pack. The artwork is deliberately
 * typographic and diagrammatic: it uses the article's own title and headings,
 * not invented claims, people, logos, or stock-photo prompts.
 *
 * Run after `pnpm build`; the generated WebPs are then committed and used by
 * integrations/place-page-media.mjs on the next build.
 */
import { readdir, readFile, mkdir } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import sharp from '../node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/index.js';

const DIST = 'dist';
const OUT = 'public/images/blog/generated';
const force = process.argv.includes('--force');
const mobileOnly = process.argv.includes('--mobile-only');
const socialOnly = process.argv.includes('--social-only');
const GENERIC = new Set([
  '/images/blog/system/career-visual-system-summary.webp',
  '/images/blog/system/career-visual-system-matrix.webp',
  '/images/blog/system/career-visual-system-chain.webp',
  '/images/blog/system/career-visual-system-checklist.webp',
  '/images/blog/system/career-visual-system-proof.webp',
]);

const palettes = [
  ['#f4ecd9', '#17324d', '#d46f4d', '#718a5a', '#e8c46b'],
  ['#eef0e7', '#223c39', '#c65d49', '#7c8b62', '#d8ae58'],
  ['#f6eadf', '#2b2840', '#d27855', '#6e8b8b', '#e2b65c'],
  ['#eaf0ef', '#203747', '#c56b54', '#708b68', '#dfb866'],
  ['#f5efe3', '#3a3044', '#c86550', '#78928a', '#d4aa62'],
];

const esc = (s) => String(s).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const clean = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ').trim();
const words = (s) => clean(s).replace(/[“”‘’]/g, '').split(/\s+/).filter(Boolean);
function wrap(s, max) {
  const out = []; let line = '';
  for (const word of words(s)) {
    if ((line + ' ' + word).trim().length > max && line) { out.push(line); line = word; }
    else line = (line + ' ' + word).trim();
  }
  if (line) out.push(line);
  return out.slice(0, 4);
}
function textBlock(s, x, y, size, max, fill, weight = 500, lineHeight = 1.18, anchor = 'start') {
  return wrap(s, max).map((line, i) => `<text x="${x}" y="${y + i * size * lineHeight}" font-family="Georgia,serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(line)}</text>`).join('');
}
function sans(s, x, y, size, fill, weight = 600, anchor = 'start') {
  return `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" letter-spacing="0.5">${esc(s)}</text>`;
}
function hash(s) { let n = 0; for (const c of s) n = (n * 31 + c.charCodeAt(0)) >>> 0; return n; }
function shell(body, p, title, label, w = 1600, h = 1000) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="${p[0]}"/><path d="M0 80H${w}" stroke="${p[4]}" stroke-width="8"/><circle cx="${w - 92}" cy="76" r="28" fill="${p[2]}"/><circle cx="${w - 148}" cy="76" r="18" fill="${p[3]}"/>${sans(label.toUpperCase(), w <= 1000 ? 62 : 84, 78, w <= 1000 ? 18 : 20, p[1], 700)}${textBlock(title, w <= 1000 ? 62 : 84, 158, w <= 1000 ? 48 : 54, w <= 1000 ? 22 : 46, p[1], 700)}${body}<path d="M${w <= 1000 ? 62 : 84} ${h - 64}H${w - (w <= 1000 ? 62 : 84)}" stroke="${p[3]}" stroke-width="2"/><text x="${w - (w <= 1000 ? 62 : 84)}" y="${h - 28}" font-family="Arial,sans-serif" font-size="16" fill="${p[1]}" text-anchor="end">FUTURE CAREER SCHOOL · EDITORIAL GUIDE</text></svg>`;
}
function card(x, y, w, h, n, heading, p, accent) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><circle cx="${x + 42}" cy="${y + 42}" r="22" fill="${accent}"/>${sans(String(n).padStart(2, '0'), x + 42, y + 49, 17, '#fffaf0', 700, 'middle')}${textBlock(heading, x + 30, y + 112, 27, 26, p[1], 700, 1.2)}`;
}
function hero(title, category, p) {
  const lines = wrap(title, 30);
  const path = `M120 650 C360 470 520 780 760 600 S1180 430 1470 610`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="844" viewBox="0 0 1500 844"><rect width="1500" height="844" fill="${p[0]}"/><path d="M0 112H1500" stroke="${p[4]}" stroke-width="10"/><path d="${path}" fill="none" stroke="${p[2]}" stroke-width="16" stroke-linecap="round"/><path d="${path}" fill="none" stroke="${p[3]}" stroke-width="3" stroke-dasharray="3 22" stroke-linecap="round"/><circle cx="120" cy="650" r="26" fill="${p[1]}"/><circle cx="760" cy="600" r="26" fill="${p[1]}"/><circle cx="1470" cy="610" r="26" fill="${p[1]}"/><rect x="1010" y="150" width="260" height="190" rx="28" fill="${p[3]}" opacity=".28" transform="rotate(-7 1140 245)"/><rect x="1080" y="185" width="260" height="190" rx="28" fill="${p[2]}" opacity=".82" transform="rotate(8 1210 280)"/>${sans(category.replaceAll('-', ' ').toUpperCase(), 84, 78, 20, p[1], 700)}${textBlock(title, 84, 260, 68, 29, p[1], 700, 1.08)}${sans('A decision map for clearer next steps', 88, 470, 28, p[1], 500)}<path d="M84 744H1416" stroke="${p[3]}" stroke-width="2"/></svg>`;
}
function buildVisuals(title, category, headings, bullets, p) {
  const hs = headings.length ? headings : ['What this choice involves', 'Evidence to gather', 'Skills to build', 'A next step to test'];
  const bs = bullets.length ? bullets : hs;
  const summary = shell(`<g>${hs.slice(0, 4).map((h, i) => card(84 + (i % 2) * 726, 290 + Math.floor(i / 2) * 270, 640, 210, i + 1, h, p, [p[2], p[3], p[4], p[1]][i])).join('')}</g>`, p, title, 'At a glance');
  const matrix = shell(`<g>${hs.slice(0, 4).map((h, i) => `<rect x="${84 + i * 365}" y="330" width="320" height="430" rx="16" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/>${sans(String(i + 1).padStart(2, '0'), 116 + i * 365, 390, 20, p[2], 700)}${textBlock(h, 116 + i * 365, 458, 28, 10, p[1], 700, 1.15)}<path d="M${116 + i * 365} 625h250" stroke="${p[4]}" stroke-width="6"/><path d="M${116 + i * 365} 670h190" stroke="${p[3]}" stroke-width="6"/>`).join('')}</g>`, p, title, 'Compare the routes');
  const chain = shell(`<g>${hs.slice(0, 5).map((h, i) => { const x = 110 + i * 292; return `<circle cx="${x}" cy="500" r="56" fill="${[p[2], p[3], p[4], p[1], p[2]][i]}"/><text x="${x}" y="510" font-family="Arial,sans-serif" font-size="26" font-weight="700" fill="#fffaf0" text-anchor="middle">${i + 1}</text>${textBlock(h, x, 640, 25, 12, p[1], 700, 1.15, 'middle')}${i < 4 ? `<path d="M${x + 70} 500H${x + 220}" stroke="${p[2]}" stroke-width="10" stroke-linecap="round"/><path d="M${x + 205} 480l25 20-25 20" fill="none" stroke="${p[2]}" stroke-width="10"/>` : ''}`; }).join('')}</g>`, p, title, 'From question to evidence');
  const checklist = shell(`<g>${bs.slice(0, 5).map((b, i) => { const y = 305 + i * 100; return `<rect x="110" y="${y - 34}" width="34" height="34" rx="7" fill="none" stroke="${p[2]}" stroke-width="6"/><path d="M118 ${y - 17}l10 10 20-25" fill="none" stroke="${p[3]}" stroke-width="6"/>${textBlock(b, 190, y, 28, 54, p[1], 600)}`; }).join('')}</g>`, p, title, 'Five questions before you commit');
  const proof = shell(`<g>${bs.slice(0, 4).map((b, i) => `<path d="M${110 + (i % 2) * 730} ${320 + Math.floor(i / 2) * 245}h590l-34 170H${110 + (i % 2) * 730}z" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/>${sans(['SOURCE', 'EXAMPLE', 'TEST', 'REFLECT'][i], 150 + (i % 2) * 730, 370 + Math.floor(i / 2) * 245, 18, p[2], 700)}${textBlock(b, 150 + (i % 2) * 730, 430 + Math.floor(i / 2) * 245, 28, 24, p[1], 700, 1.15)}`).join('')}</g>`, p, title, 'What makes the decision stronger');
  return [hero(title, category, p), summary, matrix, chain, checklist, proof];
}
function mobileHero(title, category, p) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1100" viewBox="0 0 900 1100"><rect width="900" height="1100" fill="${p[0]}"/><path d="M0 112H900" stroke="${p[4]}" stroke-width="10"/><circle cx="790" cy="76" r="28" fill="${p[2]}"/><circle cx="732" cy="76" r="18" fill="${p[3]}"/>${sans(category.replaceAll('-', ' ').toUpperCase(), 62, 78, 18, p[1], 700)}${textBlock(title, 62, 240, 50, 22, p[1], 700, 1.08)}${sans('A decision map for clearer next steps', 66, 470, 24, p[1], 500)}<path d="M160 820 C300 670 470 930 620 760 S770 690 790 900" fill="none" stroke="${p[2]}" stroke-width="15" stroke-linecap="round"/><circle cx="160" cy="820" r="24" fill="${p[1]}"/><circle cx="620" cy="760" r="24" fill="${p[1]}"/><circle cx="790" cy="900" r="24" fill="${p[1]}"/><path d="M62 1018H838" stroke="${p[3]}" stroke-width="2"/></svg>`;
}
function buildMobileVisuals(title, headings, bullets, p) {
  const hs = headings.length ? headings : ['What this choice involves', 'Evidence to gather', 'Skills to build', 'A next step to test'];
  const bs = bullets.length ? bullets : hs;
  const stacked = (items, label, h, fn) => shell(`<g>${items.slice(0, 5).map((item, i) => fn(item, i)).join('')}</g>`, p, title, label, 900, h);
  const mobileCard = (heading, i) => { const x = 70; const y = 380 + i * 255; const accent = [p[2], p[3], p[4], p[1], p[2]][i]; return `<rect x="${x}" y="${y}" width="760" height="240" rx="18" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><circle cx="${x + 42}" cy="${y + 42}" r="22" fill="${accent}"/>${sans(String(i + 1).padStart(2, '0'), x + 42, y + 49, 17, '#fffaf0', 700, 'middle')}${textBlock(heading, x + 30, y + 112, 32, 28, p[1], 700, 1.12)}`; };
  const summary = stacked(hs, 'At a glance', 1780, mobileCard);
  const matrix = stacked(hs, 'Compare the routes', 1600, (h, i) => `<rect x="70" y="${380 + i * 255}" width="760" height="205" rx="16" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/>${sans(String(i + 1).padStart(2, '0'), 108, 440 + i * 255, 20, p[2], 700)}${textBlock(h, 108, 500 + i * 255, 30, 27, p[1], 700, 1.15)}<path d="M108 ${545 + i * 255}h600" stroke="${p[4]}" stroke-width="6"/>`);
  const chain = stacked(hs, 'From question to evidence', 1580, (h, i) => { const y = 380 + i * 220; return `<circle cx="450" cy="${y}" r="48" fill="${[p[2], p[3], p[4], p[1], p[2]][i]}"/><text x="450" y="${y + 9}" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="#fffaf0" text-anchor="middle">${i + 1}</text>${textBlock(h, 450, y + 102, 28, 24, p[1], 700, 1.15, 'middle')}${i < 4 ? `<path d="M450 ${y + 60}v95" stroke="${p[2]}" stroke-width="9"/><path d="M432 ${y + 138}l18 24 18-24" fill="none" stroke="${p[2]}" stroke-width="9"/>` : ''}`; });
  const checklist = stacked(bs, 'Five questions before you commit', 1480, (b, i) => { const y = 390 + i * 190; return `<rect x="90" y="${y - 34}" width="38" height="38" rx="7" fill="none" stroke="${p[2]}" stroke-width="6"/><path d="M98 ${y - 17}l11 11 22-27" fill="none" stroke="${p[3]}" stroke-width="6"/>${textBlock(b, 165, y, 29, 31, p[1], 600)}`; });
  const proof = stacked(bs, 'What makes the decision stronger', 1480, (b, i) => { const x = 70 + (i % 2) * 400; const y = 380 + Math.floor(i / 2) * 310; return `<path d="M${x} ${y}h360l-24 230H${x}z" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/>${sans(['SOURCE', 'EXAMPLE', 'TEST', 'REFLECT'][i], x + 34, y + 55, 18, p[2], 700)}${textBlock(b, x + 34, y + 120, 27, 19, p[1], 700, 1.15)}`; });
  return [mobileHero(title, 'career guide', p), summary, matrix, chain, checklist, proof];
}
async function walk(dir) { const out = []; for (const e of await readdir(dir, { withFileTypes: true })) { const p = join(dir, e.name); if (e.isDirectory()) out.push(...await walk(p)); else if (e.name === 'index.html') out.push(p); } return out; }
const files = await walk(DIST); let generated = 0;
for (const file of files) {
  const route = '/' + file.slice(DIST.length + 1).replaceAll('\\', '/').replace(/index\.html$/, '');
  if (!/^\/blog\/[^/]+\/[^/]+\/$/.test(route)) continue;
  const html = await readFile(file, 'utf8');
  const srcs = [...html.matchAll(/<img\b[^>]*src="(\/images\/[^"?#]+)/g)].map(m => m[1]).filter(s => !s.includes('/authors/'));
  const unique = [...new Set(srcs)];
  const hasGeneratedPack = unique.some(s => s.includes('/images/blog/generated/'));
  if ((!force || !hasGeneratedPack) && unique.length && unique.slice(1).some(s => !GENERIC.has(s))) continue;
  const [, category, slug] = route.match(/^\/blog\/([^/]+)\/([^/]+)\/$/);
  const title = clean((html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [,'Career decision guide'])[1]);
  const headings = [...html.matchAll(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/gi)].map(m => clean(m[1])).filter(Boolean).slice(0, 6);
  const bullets = [...html.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map(m => clean(m[1])).filter(s => s.length > 15).slice(0, 6);
  const p = palettes[hash(slug) % palettes.length];
  const dir = join(OUT, String(hash(`${category}/${slug}`)).padStart(10, '0')); await mkdir(dir, { recursive: true });
  const names = ['hero', 'summary', 'matrix', 'chain', 'checklist', 'proof'];
  const desktopVisuals = buildVisuals(title, category, headings, bullets, p);
  const mobileVisuals = buildMobileVisuals(title, headings, bullets, p);
  for (const [i, svg] of desktopVisuals.entries()) {
    const path = join(dir, `${slug}-${names[i]}.webp`);
    if (!mobileOnly && !socialOnly) await sharp(Buffer.from(svg)).webp({ quality: 82, effort: 4 }).toFile(path);
    if (!socialOnly) await sharp(Buffer.from(mobileVisuals[i])).webp({ quality: 80, effort: 4 }).toFile(join(dir, `${slug}-${names[i]}-mobile.webp`));
    if (i === 0 && (!mobileOnly || socialOnly)) await sharp(Buffer.from(svg)).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82, mozjpeg: true }).toFile(join(dir, `${slug}-social.jpg`));
  }
  generated += 1;
}
console.log(`Generated editorial packs for ${generated} blog pages.`);
