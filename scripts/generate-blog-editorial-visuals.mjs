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
const heroOnly = process.argv.includes('--hero-only');
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
const clean = (s) => String(s ?? '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/\b(?:undefined|tbd|lorem|gate|checkpoint|leverage|cohort|heuristic|reader|user|visitor|buyer)\b/gi, '').replace(/[“”‘’]/g, '').replace(/\s+/g, ' ').trim();
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
  return wrap(s, max, maxLines).map((line, i) => `<text x="${x}" y="${y + i * size * lineHeight}" font-family="Arial,Helvetica,sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}">${esc(line)}</text>`).join('');
}
function compact(s, maxWords = 8) {
  const value = clean(s || '').replace(/\.\.\.|…/g, '').trim();
  if (!value) return '';
  const sentences = value.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [];
  const first = sentences.find((sentence) => words(sentence).length <= maxWords);
  if (first) return first.trim();
  return words(sentences[0] || value).slice(0, maxWords).join(' ').replace(/[,:;/-]+$/, '');
}
function sans(s, x, y, size, fill, weight = 600, anchor = 'start') {
  return `<text x="${x}" y="${y}" font-family="Arial,sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}" text-anchor="${anchor}" letter-spacing="0.5">${esc(s)}</text>`;
}
function hash(s) { let n = 0; for (const c of s) n = (n * 31 + c.charCodeAt(0)) >>> 0; return n; }
function posterShell(body, p, title, label, w = 1000, h = 1500, bodyY = 300) {
  const m = w <= 900 ? 58 : 70;
  const titleSize = w <= 900 ? 48 : 54;
  const titleMax = w <= 900 ? 24 : 32;
  const posterTitle = compact(title, 14);
  const titleLines = wrap(posterTitle, titleMax, 3);
  const titleBottom = 150 + Math.max(0, titleLines.length - 1) * titleSize * 1.08 + titleSize;
  const shift = Math.max(0, titleBottom + 30 - bodyY);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}"><rect width="${w}" height="${h}" fill="${p[0]}"/><path d="M0 88H${w}" stroke="${p[4]}" stroke-width="6"/><path d="M${m} 66h96M${w - m - 82} 66h82" stroke="${p[2]}" stroke-width="10"/>${sans(label.toUpperCase(), m, 48, w <= 900 ? 30 : 32, p[1], 700)}${textBlock(posterTitle, m, 145, titleSize, titleMax, p[1], 700, 1.08, 'start', 2)}<g transform="translate(0 ${shift})">${body}</g></svg>`;
}
function posterCard(x, y, w, h, n, heading, detail, p, accent, size = 34) {
  const headingSize = Math.max(44, size + 2);
  const bodySize = Math.max(32, size);
  return `<path d="M${x} ${y + 7}L${x + w - 12} ${y}L${x + w} ${y + h - 7}L${x + 12} ${y + h}Z" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><path d="M${x + 26} ${y + 34}h48" stroke="${accent}" stroke-width="9"/>${sans(String(n).padStart(2, '0'), x + 26, y + 82, 30, p[2], 700)}${textBlock(heading, x + 26, y + 145, headingSize, 15, p[1], 700, 1.08, 'start', 2)}${textBlock(detail, x + 26, y + 250, bodySize, Math.max(18, Math.floor(w / 20)), p[1], 500, 1.14, 'start', 2)}`;
}
function matrixCell(x, y, w, h, heading, detail, p, accent) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><path d="M${x + 24} ${y + 32}h54" stroke="${accent}" stroke-width="9"/>${textBlock(compact(heading, 2), x + 24, y + 104, 44, 17, p[1], 700, 1.06, 'start', 2)}${textBlock(compact(detail, 3), x + 24, y + 205, 32, 20, p[1], 500, 1.12, 'start', 2)}`;
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
function posterVisuals(title, category, headings, bullets, p, w = 1000, h = 1500, topic = title) {
  const hs = (headings.length ? headings : ['What this choice involves', 'Evidence to gather', 'Skills to build', 'A next step to test']).map((v) => compact(v, 4));
  const bs = (bullets.length ? bullets : hs).map((v) => compact(v, 7)).filter(Boolean);
  while (bs.length < 7) bs.push(compact(hs[bs.length % hs.length] || title, 7) || 'See the page details.');
  const scale = w / 1000;
  const x = 70 * scale;
  const gap = 24 * scale;
  const cardW = (w - (x * 2) - gap) / 2;
  const cardH = 390 * scale;
  const topicLabel = compact(topic, 4) || compact(title, 4);
  const gridCard = (heading, detail, i, accent) => posterCard(x + (i % 2) * (cardW + gap), 300 * scale + Math.floor(i / 2) * (cardH + gap), cardW, cardH, i + 1, heading, detail, p, accent, 34 * scale);
  const answer = compact(bs[0] || title, 14) || compact(title, 8);
  const summaryHeadings = ['The short answer', hs[0], hs[1], hs[2]];
  const summaryDetails = [compact(answer, 4), compact(bs[1 % bs.length], 4), compact(bs[2 % bs.length], 4), compact(bs[3 % bs.length], 4)];
  const summaryBody = summaryHeadings.map((heading, i) => gridCard(heading, summaryDetails[i], i, [p[2], p[3], p[4], p[1]][i])).join('');
  const summary = posterShell(summaryBody, p, '', `${topicLabel} summary`, w, h, 300 * scale);

  const tableX = x;
  const tableY = 300 * scale;
  const tableGap = 18 * scale;
  const tableW = cardW;
  const tableH = 286 * scale;
  const leftHead = hs[0] || 'Do this now';
  const rightHead = hs[1] || 'Avoid this';
  const rowLabels = [hs[2] || 'First step', hs[3] || 'Next check', bs[4] || 'Final test'].map((v) => compact(v, 2));
  const rowFacts = [bs[1 % bs.length], bs[2 % bs.length], bs[3 % bs.length]].map((v) => compact(v, 3));
  const matrixBody = [
    matrixCell(tableX, tableY, tableW, tableH, leftHead, rowLabels[0], p, p[2]),
    matrixCell(tableX + tableW + gap, tableY, tableW, tableH, rightHead, rowFacts[0], p, p[3]),
    matrixCell(tableX, tableY + tableH + tableGap, tableW, tableH, rowLabels[1], rowFacts[1], p, p[4]),
    matrixCell(tableX + tableW + gap, tableY + tableH + tableGap, tableW, tableH, rowLabels[2], rowFacts[2], p, p[1]),
    matrixCell(tableX, tableY + (tableH + tableGap) * 2, tableW, tableH, compact(bs[4] || hs[0], 2), compact(bs[5] || rowFacts[0], 3), p, p[2]),
    matrixCell(tableX + tableW + gap, tableY + (tableH + tableGap) * 2, tableW, tableH, compact(bs[6] || hs[1], 2), compact(bs[0] || rowFacts[1], 3), p, p[3]),
  ].join('');
  const matrix = posterShell(matrixBody, p, '', `${topicLabel} comparison`, w, h, tableY);

  const chainLabels = hs.slice(0, 4);
  const chainBody = chainLabels.map((label, i) => {
    const y = 300 * scale + i * 235 * scale;
    const cx = 122 * scale;
    const source = bs[i % bs.length];
    return `<circle cx="${cx}" cy="${y + 52 * scale}" r="42" fill="${[p[2], p[3], p[4], p[1]][i]}"/><text x="${cx}" y="${y + 62 * scale}" font-family="Arial,Helvetica,sans-serif" font-size="30" font-weight="700" fill="#fffaf0" text-anchor="middle">${i + 1}</text>${textBlock(compact(label, 3), 200 * scale, y + 42 * scale, Math.max(44, 44 * scale), 18, p[1], 700, 1.08, 'start', 2)}${textBlock(compact(source, 5), 200 * scale, y + 150 * scale, Math.max(32, 36 * scale), 30, p[1], 500, 1.14, 'start', 2)}${i < 3 ? `<path d="M${cx} ${y + 100 * scale}v${135 * scale}" stroke="${p[2]}" stroke-width="7"/><path d="M${cx - 14 * scale} ${y + 225 * scale}l${14 * scale} 18 ${14 * scale} -18" fill="none" stroke="${p[2]}" stroke-width="7"/>` : ''}`;
  }).join('');
  const chain = posterShell(chainBody, p, '', `${topicLabel} steps`, w, h, 300 * scale);
  const checklistBody = bs.slice(0, 5).map((b, i) => {
    const y = 320 * scale + i * 175 * scale;
    return `<rect x="${x}" y="${y}" width="34" height="34" rx="5" fill="none" stroke="${p[2]}" stroke-width="5"/><path d="M${x + 8} ${y + 17}l9 9 18-23" fill="none" stroke="${p[3]}" stroke-width="5"/>${textBlock(compact(b, 6), x + 66 * scale, y + 34 * scale, Math.max(32, 36 * scale), 36, p[1], 600, 1.16, 'start', 2)}`;
  }).join('');
  const checklist = posterShell(checklistBody, p, '', 'Check before you decide', w, h, 300 * scale);
  const proofLabels = ['What to check', 'Who to ask', 'What it costs', 'What to test'];
  const proofBody = bs.slice(0, 3).map((b, i) => gridCard(proofLabels[i], compact(b, 7), i, [p[2], p[3], p[4]][i])).join('');
  const proof = posterShell(proofBody, p, '', `${topicLabel} evidence`, w, h, 300 * scale);
  const heroLabel = topicLabel;
  const chipLeft = 70 * scale;
  const chipGap = 18 * scale;
  const chipWidth = (w - chipLeft * 2 - chipGap * 2) / 3;
  const chipY = 430 * scale;
  const heroChips = hs.slice(0, 3).map((item, i) => { const chipX = chipLeft + i * (chipWidth + chipGap); return `<rect x="${chipX}" y="${chipY}" width="${chipWidth}" height="${64 * scale}" rx="6" fill="#fffaf0" opacity=".9"/><text x="${chipX + 20 * scale}" y="${chipY + 42 * scale}" font-family="Arial,Helvetica,sans-serif" font-size="30" font-weight="700" fill="${p[1]}">${esc(compact(item, 2))}</text>`; }).join('');
  return [posterShell(`<path d="M130 1260L260 1060l110 70 150-330 120 110 180-350" fill="none" stroke="${p[2]}" stroke-width="12" stroke-linecap="round"/><circle cx="260" cy="1060" r="18" fill="${p[2]}"/><circle cx="520" cy="800" r="18" fill="${p[3]}"/><circle cx="800" cy="550" r="18" fill="${p[4]}"/>${heroChips}`, p, answer, compact(title, 4), w, h, 300 * scale), summary, matrix, chain, checklist, proof];
}
function buildVisuals(title, category, headings, bullets, p, topic) {
  return posterVisuals(title, category, headings, bullets, p, 1000, 1500, topic);
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
function buildMobileVisuals(title, headings, bullets, p, topic) {
  return posterVisuals(title, 'career guide', headings, bullets, p, 900, 1350, topic);
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
  const topic = slug.replaceAll('-', ' ');
  const headings = [...html.matchAll(/<h[23]\b[^>]*>([\s\S]*?)<\/h[23]>/gi)].map(m => clean(m[1])).filter(Boolean).slice(0, 6);
  const listFacts = [...html.matchAll(/<li\b[^>]*>([\s\S]*?)<\/li>/gi)].map(m => clean(m[1]).replace(/^['"]+|['"]+$/g, '').trim()).filter(s => s.length > 28 && /[A-Za-z]{3}/.test(s));
  const paragraphFacts = [...html.matchAll(/<p\b[^>]*>([\s\S]*?)<\/p>/gi)].map(m => clean(m[1])).filter(s => s.length > 24 && !/^read more|^share this/i.test(s));
  const bullets = [...new Set([...listFacts, ...paragraphFacts])].slice(0, 8);
  const p = palettes[hash(slug) % palettes.length];
  const dir = join(OUT, String(hash(`${category}/${slug}`)).padStart(10, '0')); await mkdir(dir, { recursive: true });
  const names = ['hero', 'summary', 'matrix', 'chain', 'checklist', 'proof'];
  const desktopVisuals = buildVisuals(title, category, headings, bullets, p, topic);
  const mobileVisuals = buildMobileVisuals(title, headings, bullets, p, topic);
  for (const [i, svg] of desktopVisuals.entries()) {
    if (heroOnly && i !== 0) continue;
    const path = join(dir, `${slug}-${names[i]}.webp`);
    if (!mobileOnly && !socialOnly) await sharp(Buffer.from(svg)).webp({ quality: 82, effort: 4 }).toFile(path);
    if (!desktopOnly && !socialOnly) await sharp(Buffer.from(mobileVisuals[i])).webp({ quality: 80, effort: 4 }).toFile(join(dir, `${slug}-${names[i]}-mobile.webp`));
    if (i === 0 && (!mobileOnly || socialOnly)) await sharp(Buffer.from(svg)).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82, mozjpeg: true }).toFile(join(dir, `${slug}-social.jpg`));
  }
  generated += 1;
}
console.log(`Generated editorial packs for ${generated} blog pages.`);
