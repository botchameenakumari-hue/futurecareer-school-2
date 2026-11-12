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
function wrap(s, max, maxLines = 4) {
  const out = []; let line = '';
  for (const word of words(s)) {
    if ((line + ' ' + word).trim().length > max && line) { out.push(line); line = word; }
    else line = (line + ' ' + word).trim();
  }
  if (line) out.push(line);
  return out.slice(0, maxLines);
}
function textBlock(s, x, y, size, max, fill, weight = 500, lineHeight = 1.18, anchor = 'start', maxLines = 4) {
  return wrap(s, max, maxLines).map((line, i) => `<text x="${x}" y="${y + i * size * lineHeight}" font-family="Georgia,serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(line)}</text>`).join('');
}
function sans(s, x, y, size, fill, weight = 600, anchor = 'start') {
  return `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" letter-spacing="0.5">${esc(s)}</text>`;
}
function hash(s) { let n = 0; for (const c of s) n = (n * 31 + c.charCodeAt(0)) >>> 0; return n; }
function shell(body, p, title, label, w = 1600, h = 1000) {
  const m = w <= 1000 ? 62 : 84;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="${p[0]}"/><path d="M0 92H${w}" stroke="${p[4]}" stroke-width="7"/><path d="M${m} 72h112" stroke="${p[2]}" stroke-width="12"/><path d="M${w - m - 96} 72h96" stroke="${p[3]}" stroke-width="12"/>${sans(label.toUpperCase(), m, 78, w <= 1000 ? 18 : 20, p[1], 700)}${textBlock(title, m, 158, w <= 1000 ? 48 : 54, w <= 1000 ? 22 : 46, p[1], 700)}${body}<path d="M${m} ${h - 64}H${w - m}" stroke="${p[3]}" stroke-width="2"/><text x="${w - m}" y="${h - 28}" font-family="Arial,sans-serif" font-size="16" fill="${p[1]}" text-anchor="end">FUTURE CAREER SCHOOL · EDITORIAL GUIDE</text></svg>`;
}
function card(x, y, w, h, n, heading, p, accent) {
  const s = n % 2 ? 12 : -10;
  return `<path d="M${x} ${y + 8}L${x + w - 18} ${y}L${x + w} ${y + h - 12}L${x + 18} ${y + h}Z" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><path d="M${x + 30} ${y + 38}h54" stroke="${accent}" stroke-width="10" transform="rotate(${s} ${x + 56} ${y + 38})"/>${sans(String(n).padStart(2, '0'), x + 30, y + 86, 17, p[2], 700)}${textBlock(heading, x + 30, y + 135, 27, 26, p[1], 700, 1.2)}`;
}
function hero(title, category, p) {
  const lines = wrap(title, 30);
  const subtitleY = Math.max(470, 260 + Math.max(0, lines.length - 2) * 74 + 92);
  const path = `M116 690 C280 610 420 745 590 660 S880 560 1030 650 S1260 690 1430 570`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="844" viewBox="0 0 1500 844"><defs><filter id="paper" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 .8 0 0 0 0 0 .035 0"/></filter></defs><rect width="1500" height="844" fill="${p[0]}"/><rect width="1500" height="844" filter="url(#paper)" opacity=".55"/><path d="M0 112H1500" stroke="${p[4]}" stroke-width="10"/><path d="${path}" fill="none" stroke="${p[2]}" stroke-width="12" stroke-linecap="round"/><path d="M1420 570l-32 -18m32 18l-14 31" stroke="${p[2]}" stroke-width="9" fill="none"/><path d="M118 690h64m340-29h62m360-10h62" stroke="${p[1]}" stroke-width="18" stroke-linecap="square"/><path d="M1040 150l250 8-18 198-250-10z" fill="${p[3]}" opacity=".65" transform="rotate(5 1140 245)"/><path d="M1090 190l245 10-18 190-245-10z" fill="${p[2]}" opacity=".82" transform="rotate(-6 1210 280)"/>${sans(category.replaceAll('-', ' ').toUpperCase(), 84, 78, 20, p[1], 700)}${textBlock(title, 84, 260, 68, 29, p[1], 700, 1.08)}${sans('A decision map for clearer next steps', 88, subtitleY, 28, p[1], 500)}<path d="M84 744H1416" stroke="${p[3]}" stroke-width="2"/></svg>`;
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
  const titleLines = wrap(title, 22);
  const subtitleY = Math.max(470, 240 + Math.max(0, titleLines.length - 2) * 54 + 86);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1100" viewBox="0 0 900 1100"><defs><filter id="paper" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 .8 0 0 0 0 0 0 .035 0"/></filter></defs><rect width="900" height="1100" fill="${p[0]}"/><rect width="900" height="1100" filter="url(#paper)" opacity=".55"/><path d="M0 112H900" stroke="${p[4]}" stroke-width="10"/><path d="M62 72h82M742 72h96" stroke="${p[2]}" stroke-width="12"/>${sans(category.replaceAll('-', ' ').toUpperCase(), 62, 78, 18, p[1], 700)}${textBlock(title, 62, 240, 50, 22, p[1], 700, 1.08)}${sans('A decision map for clearer next steps', 66, subtitleY, 24, p[1], 500)}<path d="M120 820 C280 700 420 920 580 780 S730 700 810 880" fill="none" stroke="${p[2]}" stroke-width="13" stroke-linecap="round"/><path d="M810 880l-27-12m27 12l-10 28" stroke="${p[2]}" stroke-width="8" fill="none"/><path d="M120 820h45m275-40h44m230 0h44" stroke="${p[1]}" stroke-width="16"/><path d="M62 1018H838" stroke="${p[3]}" stroke-width="2"/></svg>`;
}
function buildMobileVisuals(title, headings, bullets, p) {
  const hs = headings.length ? headings : ['What this choice involves', 'Evidence to gather', 'Skills to build', 'A next step to test'];
  const bs = bullets.length ? bullets : hs;
  const stacked = (items, label, h, fn) => shell(`<g>${items.slice(0, 5).map((item, i) => fn(item, i)).join('')}</g>`, p, title, label, 900, h);
  // Mobile artwork is displayed at roughly 358px on a 390px viewport. Use
  // larger source type and more vertical room so explanatory text remains
  // comfortable to read without pinch-zooming after the image is scaled.
  const mobileCard = (heading, i) => { const x = 70; const y = 380 + i * 320; const accent = [p[2], p[3], p[4], p[1], p[2]][i]; return `<path d="M${x} ${y + 8}L${x + 742} ${y}L${x + 760} ${y + 288}L${x + 18} ${y + 300}Z" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><path d="M${x + 30} ${y + 42}h58" stroke="${accent}" stroke-width="12"/>${sans(String(i + 1).padStart(2, '0'), x + 30, y + 90, 18, p[2], 700)}${textBlock(heading, x + 30, y + 150, 40, 24, p[1], 700, 1.12)}`; };
  const summary = stacked(hs, 'At a glance', 2140, mobileCard);
  const matrix = stacked(hs, 'Compare the routes', 2500, (h, i) => `<rect x="70" y="${380 + i * 390}" width="760" height="350" rx="16" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/>${sans(String(i + 1).padStart(2, '0'), 108, 450 + i * 390, 20, p[2], 700)}${textBlock(h, 108, 525 + i * 390, 38, 22, p[1], 700, 1.15)}<path d="M108 ${680 + i * 390}h600" stroke="${p[4]}" stroke-width="6"/>`);
  // Keep the label and connector in separate vertical bands. The earlier
  // 220px step made longer headings collide with the arrow on narrow screens.
  // Leave a full line-height buffer after the maximum four-line label before
  // the next connector, so unusually long headings cannot collide with it.
  const chain = stacked(hs, 'From question to evidence', 2400, (h, i) => { const y = 400 + i * 360; return `<circle cx="450" cy="${y}" r="52" fill="${[p[2], p[3], p[4], p[1], p[2]][i]}"/><text x="450" y="${y + 10}" font-family="Arial,sans-serif" font-size="26" font-weight="700" fill="#fffaf0" text-anchor="middle">${i + 1}</text>${textBlock(h, 450, y + 120, 38, 20, p[1], 700, 1.15, 'middle')}${i < 4 ? `<path d="M450 ${y + 270}v55" stroke="${p[2]}" stroke-width="9"/><path d="M432 ${y + 300}l18 24 18-24" fill="none" stroke="${p[2]}" stroke-width="9"/>` : ''}`; });
  const checklist = stacked(bs, 'Five questions before you commit', 1700, (b, i) => { const y = 390 + i * 230; return `<rect x="90" y="${y - 40}" width="44" height="44" rx="7" fill="none" stroke="${p[2]}" stroke-width="6"/><path d="M98 ${y - 20}l11 11 22-27" fill="none" stroke="${p[3]}" stroke-width="6"/>${textBlock(b, 165, y, 38, 24, p[1], 600)}`; });
  const proof = stacked(bs.slice(0, 4), 'What makes the decision stronger', 1780, (b, i) => { const x = 70 + (i % 2) * 400; const y = 380 + Math.floor(i / 2) * 390; return `<path d="M${x} ${y}h360l-24 350H${x}z" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/>${sans(['SOURCE', 'EXAMPLE', 'TEST', 'REFLECT'][i], x + 34, y + 58, 18, p[2], 700)}${textBlock(b, x + 34, y + 135, 32, 15, p[1], 700, 1.18, 'start', 6)}`; });
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
