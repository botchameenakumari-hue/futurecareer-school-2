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
sharp.concurrency(8);

const DIST = 'dist';
const OUT = 'public/images/blog/generated';
const force = process.argv.includes('--force');
const mobileOnly = process.argv.includes('--mobile-only');
const desktopOnly = process.argv.includes('--desktop-only');
const socialOnly = process.argv.includes('--social-only');
const allServicePages = process.argv.includes('--all-service-pages');
const assessmentServicePages = process.argv.includes('--assessment-service-pages');
const auditCsv = process.argv.find((arg) => arg.startsWith('--audit-csv='))?.slice('--audit-csv='.length);
const auditRoutes = new Set();
if (auditCsv) {
  try {
    const csv = await readFile(auditCsv, 'utf8');
    for (const line of csv.split(/\r?\n/).slice(1)) {
      const match = line.match(/^"?([^",]+)"?,/);
      if (match?.[1]?.startsWith('/')) auditRoutes.add(match[1]);
    }
  } catch { /* The audit list is optional for ordinary blog generation. */ }
}
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
const clean = (s) => s.replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\bundefined\b/gi, '').replace(/\s+/g, ' ').trim();
const words = (s) => clean(s).replace(/[“”‘’]/g, '').split(/\s+/).filter(Boolean);
function wrap(s, max, maxLines = 4) {
  const out = []; let line = '';
  const tokens = words(s).flatMap((word) => word.length > max
    ? word.split(/(?=[/–—-])|(?<=[/–—-])/g).filter(Boolean)
    : [word]);
  for (const word of tokens) {
    if ((line + ' ' + word).trim().length > max && line) { out.push(line); line = word; }
    else line = (line + ' ' + word).trim();
  }
  if (line) out.push(line);
  return out.slice(0, maxLines);
}
function textBlock(s, x, y, size, max, fill, weight = 500, lineHeight = 1.18, anchor = 'start', maxLines = 4) {
  return wrap(s, max, maxLines).map((line, i) => `<text x="${x}" y="${y + i * size * lineHeight}" font-family="Georgia,serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(line)}</text>`).join('');
}
function compact(s, maxWords = 8) {
  const list = words(s);
  return list.length > maxWords ? `${list.slice(0, maxWords).join(' ')}…` : list.join(' ');
}
function sans(s, x, y, size, fill, weight = 600, anchor = 'start') {
  return `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" letter-spacing="0.5">${esc(s)}</text>`;
}
function decisionStrip(w, p, y) {
  const left = w <= 1000 ? 62 : 84;
  const gap = w <= 1000 ? 22 : 36;
  const width = (w - left * 2 - gap * 2) / 3;
  const labels = ['01  CONTEXT', '02  OPTIONS', '03  TEST'];
  return `<g>${labels.map((label, i) => { const x = left + i * (width + gap); return `<rect x="${x}" y="${y - 28}" width="${width}" height="48" rx="4" fill="#fffaf0" opacity=".84" stroke="${p[3]}" stroke-width="2"/>${sans(label, x + 18, y + 4, w <= 1000 ? 17 : 19, p[1], 700)}`; }).join('')}</g>`;
}
function hash(s) { let n = 0; for (const c of s) n = (n * 31 + c.charCodeAt(0)) >>> 0; return n; }
function shell(body, p, title, label, w = 1600, h = 1000, bodyY = 280) {
  const m = w <= 1000 ? 62 : 84;
  const size = w <= 1000 ? 54 : 60;
  const max = w <= 1000 ? 22 : 46;
  const titleLines = wrap(title, max, 5);
  const titleBottom = 158 + Math.max(0, titleLines.length - 1) * size * 1.12 + size;
  const shift = Math.max(0, titleBottom + 28 - bodyY);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="${p[0]}"/><path d="M0 92H${w}" stroke="${p[4]}" stroke-width="7"/><path d="M${m} 72h112" stroke="${p[2]}" stroke-width="12"/><path d="M${w - m - 96} 72h96" stroke="${p[3]}" stroke-width="12"/>${sans(label.toUpperCase(), m, 54, w <= 1000 ? 21 : 24, p[1], 700)}${textBlock(title, m, 158, size, max, p[1], 700, 1.12, 'start', 5)}<g transform="translate(0 ${shift})">${body}</g><path d="M${m} ${h - 64}H${w - m}" stroke="${p[3]}" stroke-width="2"/><text x="${w - m}" y="${h - 28}" font-family="Arial,sans-serif" font-size="16" fill="${p[1]}" text-anchor="end">FUTURE CAREER SCHOOL · EDITORIAL GUIDE</text></svg>`;
}
function brief(s, maxWords = 24) {
  const value = clean(s || '').replace(/\s+/g, ' ').trim();
  if (!value) return 'Use the page evidence to choose the next practical test.';
  const sentences = value.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [value];
  let out = '';
  for (const sentence of sentences) {
    const next = `${out} ${sentence.trim()}`.trim();
    if (words(next).length > maxWords && out) break;
    out = next;
  }
  return out || `${words(value).slice(0, maxWords).join(' ')}.`;
}
function posterShell(body, p, title, label, w = 1000, h = 1500, bodyY = 300) {
  const m = w <= 900 ? 58 : 70;
  const titleSize = w <= 900 ? 48 : 54;
  const titleMax = w <= 900 ? 22 : 28;
  const posterTitle = compact(title, 10);
  const titleLines = wrap(posterTitle, titleMax, 3);
  const titleBottom = 150 + Math.max(0, titleLines.length - 1) * titleSize * 1.08 + titleSize;
  const shift = Math.max(0, titleBottom + 24 - bodyY);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="${p[0]}"/><path d="M0 88H${w}" stroke="${p[4]}" stroke-width="6"/><path d="M${m} 66h96M${w - m - 82} 66h82" stroke="${p[2]}" stroke-width="10"/>${sans(label.toUpperCase(), m, 48, w <= 900 ? 17 : 19, p[1], 700)}${textBlock(posterTitle, m, 145, titleSize, titleMax, p[1], 700, 1.08, 'start', 3)}<g transform="translate(0 ${shift})">${body}</g><path d="M${m} ${h - 54}H${w - m}" stroke="${p[3]}" stroke-width="2"/><text x="${w - m}" y="${h - 24}" font-family="Arial,sans-serif" font-size="12" fill="${p[1]}" text-anchor="end">FUTURE CAREER SCHOOL · EDITORIAL GUIDE</text></svg>`;
}
function posterCard(x, y, w, h, n, heading, detail, p, accent, size = 34) {
  return `<path d="M${x} ${y + 7}L${x + w - 12} ${y}L${x + w} ${y + h - 7}L${x + 12} ${y + h}Z" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><path d="M${x + 26} ${y + 34}h48" stroke="${accent}" stroke-width="9"/>${sans(String(n).padStart(2, '0'), x + 26, y + 76, 17, p[2], 700)}${textBlock(heading, x + 26, y + 122, size + 2, 19, p[1], 700, 1.1, 'start', 2)}${textBlock(detail, x + 26, y + 182, size, Math.max(18, Math.floor(w / 19)), p[1], 500, 1.16, 'start', 4)}`;
}
function card(x, y, w, h, n, heading, detail, p, accent) {
  const s = n % 2 ? 12 : -10;
  return `<path d="M${x} ${y + 8}L${x + w - 18} ${y}L${x + w} ${y + h - 12}L${x + 18} ${y + h}Z" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><path d="M${x + 30} ${y + 38}h54" stroke="${accent}" stroke-width="10" transform="rotate(${s} ${x + 56} ${y + 38})"/>${sans(String(n).padStart(2, '0'), x + 30, y + 86, 19, p[2], 700)}${textBlock(heading, x + 30, y + 135, 32, 26, p[1], 700, 1.2, 'start', 2)}${textBlock(detail, x + 30, y + 235, 25, 44, p[1], 500, 1.2, 'start', 12)}`;
}
function heroLegacy(title, category, p) {
  const lines = wrap(title, 27, 6);
  const titleSize = lines.length >= 5 ? 48 : lines.length === 4 ? 56 : 68;
  const subtitleY = Math.max(470, 260 + Math.max(0, lines.length - 2) * (titleSize * 1.08) + 96);
  const path = `M116 690 C280 610 420 745 590 660 S880 560 1030 650 S1260 690 1430 570`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="844" viewBox="0 0 1500 844"><defs><filter id="paper" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 0 .8 0 0 0 0 0 .035 0"/></filter></defs><rect width="1500" height="844" fill="${p[0]}"/><rect width="1500" height="844" filter="url(#paper)" opacity=".55"/><path d="M0 112H1500" stroke="${p[4]}" stroke-width="10"/><path d="${path}" fill="none" stroke="${p[2]}" stroke-width="12" stroke-linecap="round"/><path d="M1420 570l-32 -18m32 18l-14 31" stroke="${p[2]}" stroke-width="9" fill="none"/><path d="M118 690h64m340-29h62m360-10h62" stroke="${p[1]}" stroke-width="18" stroke-linecap="square"/><path d="M1040 150l250 8-18 198-250-10z" fill="${p[3]}" opacity=".65" transform="rotate(5 1140 245)"/><path d="M1090 190l245 10-18 190-245-10z" fill="${p[2]}" opacity=".82" transform="rotate(-6 1210 280)"/>${sans(category.replaceAll('-', ' ').toUpperCase(), 84, 78, 20, p[1], 700)}${textBlock(title, 84, 260, 68, 29, p[1], 700, 1.08)}${sans('A decision map for clearer next steps', 88, subtitleY, 28, p[1], 500)}<path d="M84 744H1416" stroke="${p[3]}" stroke-width="2"/></svg>`;
}
function hero(title, category, p) {
  const lines = wrap(title, 27, 6);
  const titleSize = lines.length >= 5 ? 48 : lines.length === 4 ? 56 : 68;
  const subtitleY = Math.max(470, 260 + Math.max(0, lines.length - 2) * (titleSize * 1.08) + 96);
  const path = `M116 690 C280 610 420 745 590 660 S880 560 1030 650 S1260 690 1430 570`;
  const background = `<rect width="1500" height="844" fill="${p[0]}"/><path d="M0 112H1500" stroke="${p[4]}" stroke-width="10"/><path d="${path}" fill="none" stroke="${p[2]}" stroke-width="12" stroke-linecap="round"/><path d="M1420 570l-32 -18m32 18l-14 31" stroke="${p[2]}" stroke-width="9" fill="none"/><path d="M1040 150l250 8-18 198-250-10z" fill="${p[3]}" opacity=".65" transform="rotate(5 1140 245)"/><path d="M1090 190l245 10-18 190-245-10z" fill="${p[2]}" opacity=".82" transform="rotate(-6 1210 280)"/>`;
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1500" height="844" viewBox="0 0 1500 844">${background}${sans(category.replaceAll('-', ' ').toUpperCase(), 84, 78, 20, p[1], 700)}${textBlock(title, 84, 260, titleSize, 27, p[1], 700, 1.08, 'start', 6)}${sans('A decision map for clearer next steps', 88, subtitleY, 28, p[1], 500)}${decisionStrip(1500, p, 690)}<path d="M84 744H1416" stroke="${p[3]}" stroke-width="2"/></svg>`;
}
function posterVisuals(title, category, headings, bullets, p, w = 1000, h = 1500) {
  const hs = headings.length ? headings : ['What this choice involves', 'Evidence to gather', 'Skills to build', 'A next step to test'];
  const bs = bullets.length ? bullets : hs;
  const scale = w / 1000;
  const x = 70 * scale;
  const gap = 24 * scale;
  const cardW = (w - (x * 2) - gap) / 2;
  const cardH = 360 * scale;
  const summaryHeadings = ['The decision in plain language', 'The evidence to check', 'Where the trade-off sits', 'The next move to test'];
  const summaryDetails = [
    `Name the decision, constraint, and outcome. ${brief(bs[0] || hs[0], 18)}`,
    `Treat it as a claim to verify. ${brief(bs[1] || hs[1], 18)}`,
    `Compare fit, cost, time, and fallback. ${brief(bs[2] || hs[2], 18)}`,
    `Run one small test before committing. ${brief(bs[3] || hs[3], 18)}`,
  ];
  const gridCard = (heading, detail, i, accent) => posterCard(x + (i % 2) * (cardW + gap), 300 * scale + Math.floor(i / 2) * (cardH + gap), cardW, cardH, i + 1, heading, detail, p, accent, 31 * scale);
  const summaryBody = summaryHeadings.map((heading, i) => gridCard(heading, summaryDetails[i], i, [p[2], p[3], p[4], p[1]][i])).join('');
  const summary = posterShell(summaryBody, p, title, 'At a glance', w, h, 300 * scale);
  const matrixLabels = ['What it asks of you', 'What to verify', 'What changes the choice', 'What to test next'];
  const matrixDetails = [
    `Time, cost, prerequisite, or uncertainty. ${brief(hs[0], 15)}`,
    `Check source, cost, eligibility, and outcomes. ${brief(bs[1] || hs[1], 15)}`,
    `Change route when the evidence changes the fit. ${brief(hs[2], 15)}`,
    `Test the next step with a small, reversible action. ${brief(hs[3], 15)}`,
  ];
  const matrixBody = matrixLabels.map((heading, i) => gridCard(heading, matrixDetails[i], i, [p[2], p[3], p[4], p[1]][i])).join('');
  const matrix = posterShell(matrixBody, p, title, 'Compare the routes', w, h, 300 * scale);
  const chainLabels = ['Start with the question', 'Map the available routes', 'Check the evidence', 'Run a small test', 'Review the result'];
  const chainBody = chainLabels.map((label, i) => {
    const y = 300 * scale + i * 205 * scale;
    const cx = 122 * scale;
    const source = [hs[0], hs[1], bs[1] || hs[2], hs[3], bs[4] || 'the result and fallback'][i];
    return `<circle cx="${cx}" cy="${y + 52 * scale}" r="42" fill="${[p[2], p[3], p[4], p[1], p[2]][i]}"/><text x="${cx}" y="${y + 62 * scale}" font-family="Arial,sans-serif" font-size="24" font-weight="700" fill="#fffaf0" text-anchor="middle">${i + 1}</text>${textBlock(label, 200 * scale, y + 42 * scale, 30 * scale, 27, p[1], 700, 1.1, 'start', 2)}${textBlock(brief(source, 13), 200 * scale, y + 105 * scale, 23 * scale, 48, p[1], 500, 1.18, 'start', 3)}${i < 4 ? `<path d="M${cx} ${y + 100 * scale}v${105 * scale}" stroke="${p[2]}" stroke-width="7"/><path d="M${cx - 14 * scale} ${y + 185 * scale}l${14 * scale} 18 ${14 * scale} -18" fill="none" stroke="${p[2]}" stroke-width="7"/>` : ''}`;
  }).join('');
  const chain = posterShell(chainBody, p, title, 'From question to evidence', w, h, 300 * scale);
  const checklistBody = bs.slice(0, 5).map((b, i) => {
    const y = 320 * scale + i * 175 * scale;
    return `<rect x="${x}" y="${y}" width="34" height="34" rx="5" fill="none" stroke="${p[2]}" stroke-width="5"/><path d="M${x + 8} ${y + 17}l9 9 18-23" fill="none" stroke="${p[3]}" stroke-width="5"/>${textBlock(brief(b, 18), x + 66 * scale, y + 28 * scale, 28 * scale, 45, p[1], 600, 1.16, 'start', 3)}`;
  }).join('');
  const checklist = posterShell(checklistBody, p, title, 'Five questions before you commit', w, h, 300 * scale);
  const proofLabels = ['SOURCE', 'EXAMPLE', 'TEST', 'REFLECT'];
  const proofBody = bs.slice(0, 4).map((b, i) => gridCard(proofLabels[i], brief(b, 20), i, [p[2], p[3], p[4], p[1]][i])).join('');
  const proof = posterShell(proofBody, p, title, 'What makes the choice stronger', w, h, 300 * scale);
  return [posterShell(`<path d="M130 1040L260 870l110 70 150-250 120 110 180-220" fill="none" stroke="${p[2]}" stroke-width="12" stroke-linecap="round"/><path d="M800 610l-30-18m30 18l-13 32" stroke="${p[2]}" stroke-width="10" fill="none"/>${decisionStrip(w, p, 1180)}`, p, title, category.replaceAll('-', ' '), w, h, 300 * scale), summary, matrix, chain, checklist, proof];
}
function buildVisuals(title, category, headings, bullets, p) {
  return posterVisuals(title, category, headings, bullets, p, 1000, 1500);
}
function mobileHeroLegacy(title, category, p) {
  const titleLines = wrap(title, 22);
  const subtitleY = Math.max(470, 240 + Math.max(0, titleLines.length - 2) * 54 + 86);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1100" viewBox="0 0 900 1100"><defs><filter id="paper" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency=".8" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="1 0 0 0 0 0 1 0 0 0 0 .8 0 0 0 0 0 0 .035 0"/></filter></defs><rect width="900" height="1100" fill="${p[0]}"/><rect width="900" height="1100" filter="url(#paper)" opacity=".55"/><path d="M0 112H900" stroke="${p[4]}" stroke-width="10"/><path d="M62 72h82M742 72h96" stroke="${p[2]}" stroke-width="12"/>${sans(category.replaceAll('-', ' ').toUpperCase(), 62, 78, 18, p[1], 700)}${textBlock(title, 62, 240, 50, 22, p[1], 700, 1.08)}${sans('A decision map for clearer next steps', 66, subtitleY, 24, p[1], 500)}<path d="M120 820 C280 700 420 920 580 780 S730 700 810 880" fill="none" stroke="${p[2]}" stroke-width="13" stroke-linecap="round"/><path d="M810 880l-27-12m27 12l-10 28" stroke="${p[2]}" stroke-width="8" fill="none"/><path d="M120 820h45m275-40h44m230 0h44" stroke="${p[1]}" stroke-width="16"/><path d="M62 1018H838" stroke="${p[3]}" stroke-width="2"/></svg>`;
}
function mobileHero(title, category, p) {
  const titleLines = wrap(title, 19, 7);
  const titleSize = titleLines.length >= 6 ? 38 : titleLines.length >= 4 ? 44 : 50;
  const subtitleY = Math.max(520, 240 + Math.max(0, titleLines.length - 2) * (titleSize * 1.08) + 98);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="900" height="1100" viewBox="0 0 900 1100"><rect width="900" height="1100" fill="${p[0]}"/><path d="M0 112H900" stroke="${p[4]}" stroke-width="10"/><path d="M62 72h82M742 72h96" stroke="${p[2]}" stroke-width="12"/>${sans(category.replaceAll('-', ' ').toUpperCase(), 62, 54, 18, p[1], 700)}${textBlock(title, 62, 240, titleSize, 19, p[1], 700, 1.08, 'start', 7)}${sans('A decision map for clearer next steps', 66, subtitleY, 24, p[1], 500)}${decisionStrip(900, p, 690)}<path d="M120 820 C280 700 420 920 580 780 S730 700 810 880" fill="none" stroke="${p[2]}" stroke-width="13" stroke-linecap="round"/><path d="M810 880l-27-12m27 12l-10 28" stroke="${p[2]}" stroke-width="8" fill="none"/><path d="M62 1018H838" stroke="${p[3]}" stroke-width="2"/></svg>`;
}
function buildMobileVisuals(title, headings, bullets, p) {
  return posterVisuals(title, 'career guide', headings, bullets, p, 900, 1350);
}
async function walk(dir) { const out = []; for (const e of await readdir(dir, { withFileTypes: true })) { const p = join(dir, e.name); if (e.isDirectory()) out.push(...await walk(p)); else if (e.name === 'index.html') out.push(p); } return out; }
const shardIndex = Number(process.argv.find((arg) => arg.startsWith('--shard='))?.slice('--shard='.length) ?? 0);
const shardCount = Number(process.argv.find((arg) => arg.startsWith('--shards='))?.slice('--shards='.length) ?? 1);
const allFiles = await walk(DIST);
const files = allFiles.filter((_, index) => index % shardCount === shardIndex);
let generated = 0;
for (const file of files) {
  const route = '/' + file.slice(DIST.length + 1).replaceAll('\\', '/').replace(/index\.html$/, '');
  const isBlogRoute = /^\/blog\/[^/]+\/[^/]+\/$/.test(route);
  const isServiceRoute = route.startsWith('/services/');
  const isOtherGuideRoute = route.startsWith('/career-resources/') || route.startsWith('/career-skills-compass/');
  if (assessmentServicePages && (isBlogRoute || !route.startsWith('/services/assessments/'))) continue;
  if (!isBlogRoute && !(allServicePages && (isServiceRoute || isOtherGuideRoute)) && !auditRoutes.has(route)) continue;
  const html = await readFile(file, 'utf8');
  const srcs = [...html.matchAll(/<img\b[^>]*src="(\/images\/[^"?#]+)/g)].map(m => m[1]).filter(s => !s.includes('/authors/'));
  const unique = [...new Set(srcs)];
  const hasGeneratedPack = unique.some(s => s.includes('/images/blog/generated/'));
  // With --force this is an explicit visual refresh: rebuild every article's
  // pack, including older pages that still contain the former photo/chart set.
  if (!force && unique.length && unique.slice(1).some(s => !GENERIC.has(s))) continue;
  const segments = route.split('/').filter(Boolean);
  const slug = segments.at(-1);
  const category = isBlogRoute ? segments.slice(1, -1).join('-') : segments.slice(0, -1).join('-');
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
    if (!desktopOnly && !socialOnly) await sharp(Buffer.from(mobileVisuals[i])).webp({ quality: 80, effort: 4 }).toFile(join(dir, `${slug}-${names[i]}-mobile.webp`));
    if (i === 0 && (!mobileOnly || socialOnly)) await sharp(Buffer.from(svg)).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82, mozjpeg: true }).toFile(join(dir, `${slug}-social.jpg`));
  }
  generated += 1;
}
console.log(`Generated editorial packs for ${generated} blog pages.`);
