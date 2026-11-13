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
function buildVisuals(title, category, headings, bullets, p) {
  const hs = headings.length ? headings : ['What this choice involves', 'Evidence to gather', 'Skills to build', 'A next step to test'];
  const bs = bullets.length ? bullets : hs;
  const summaryHeadings = ['The decision in plain language', 'The evidence to check', 'Where the trade-off sits', 'The next move to test'];
  const summaryDetails = [
    `Start by naming the decision, the constraint, and the outcome you want. ${bs[0] || hs[0]}`,
    `Treat this as a claim to verify, not a promise. ${bs[1] || hs[1]}`,
    `Compare the attractive route with its cost, fit, and fallback. ${bs[2] || hs[2]}`,
    `Turn the idea into one small test before committing more time or money. ${bs[3] || hs[3]}`,
  ];
  const summary = shell(`<g>${summaryHeadings.map((h, i) => card(84 + (i % 2) * 726, 280 + Math.floor(i / 2) * 650, 640, 620, i + 1, h, summaryDetails[i], p, [p[2], p[3], p[4], p[1]][i])).join('')}</g>`, p, 'The decision in plain language', 'At a glance', 1600, 1900, 280);
  const comparisonLabels = ['What it asks of you', 'What to verify', 'What changes the choice', 'What to test next'];
  const matrixDetails = [
    `Name the time, cost, prerequisite, or uncertainty that ${hs[0] || 'this route'} creates for you.`,
    `Verify the claim against the page evidence: ${bs[1] || hs[1] || 'check the source, cost, and eligibility.'}`,
    `Let the trade-off change the route when ${hs[2] || 'the evidence'} does not support the default choice.`,
    `Run one small test connected to ${hs[3] || 'the next step'} before committing more resources.`,
  ];
  const matrix = shell(`<g>${comparisonLabels.map((label, i) => `<rect x="${84 + i * 365}" y="330" width="320" height="520" rx="16" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/>${sans(String(i + 1).padStart(2, '0'), 116 + i * 365, 390, 22, p[2], 700)}${textBlock(label, 116 + i * 365, 458, 33, 11, p[1], 700, 1.15, 'start', 3)}${textBlock(matrixDetails[i], 116 + i * 365, 590, 27, 14, p[1], 500, 1.2, 'start', 9)}<path d="M${116 + i * 365} 815h250" stroke="${p[4]}" stroke-width="6"/>`).join('')}</g>`, p, 'Compare the decision', 'Compare the routes', 1600, 1400, 280);
  const chainLabels = ['Context', 'Options', 'Evidence', 'Small test', 'Review'];
  const chain = shell(`<g>${chainLabels.map((label, i) => { const x = 110 + i * 292; return `<circle cx="${x}" cy="500" r="56" fill="${[p[2], p[3], p[4], p[1], p[2]][i]}"/><text x="${x}" y="510" font-family="Arial,sans-serif" font-size="28" font-weight="700" fill="#fffaf0" text-anchor="middle">${i + 1}</text>${textBlock(label, x, 640, 32, 12, p[1], 700, 1.15, 'middle')}${i < 4 ? `<path d="M${x + 70} 500H${x + 220}" stroke="${p[2]}" stroke-width="10" stroke-linecap="round"/><path d="M${x + 205} 480l25 20-25 20" fill="none" stroke="${p[2]}" stroke-width="10"/>` : ''}`; }).join('')}</g>`, p, 'From question to evidence', 'From question to evidence', 1600, 1200, 280);
  const checklist = shell(`<g>${bs.slice(0, 5).map((b, i) => { const y = 305 + i * 100; return `<rect x="110" y="${y - 34}" width="38" height="38" rx="7" fill="none" stroke="${p[2]}" stroke-width="6"/><path d="M118 ${y - 17}l10 10 20-25" fill="none" stroke="${p[3]}" stroke-width="6"/>${textBlock(b, 190, y, 34, 44, p[1], 600)}`; }).join('')}</g>`, p, 'Questions before you commit', 'Five questions before you commit', 1600, 1250, 280);
  const proof = shell(`<g>${bs.slice(0, 4).map((b, i) => { const y = 300 + i * 270; return `<path d="M110 ${y}h1380l-24 230H110z" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/>${sans(['SOURCE', 'EXAMPLE', 'TEST', 'REFLECT'][i], 150, y + 52, 20, p[2], 700)}${textBlock(b, 150, y + 112, 28, 82, p[1], 700, 1.18, 'start', 6)}`; }).join('')}</g>`, p, 'What makes the choice stronger', 'What makes the decision stronger', 1600, 1450, 280);
  return [hero(title, category, p), summary, matrix, chain, checklist, proof];
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
  const hs = headings.length ? headings : ['What this choice involves', 'Evidence to gather', 'Skills to build', 'A next step to test'];
  const bs = bullets.length ? bullets : hs;
  const stackedTitles = {
    'At a glance': 'The decision in plain language',
    'Compare the routes': 'Compare the decision',
    'From question to evidence': 'From question to evidence',
    'Five questions before you commit': 'Questions before you commit',
    'What makes the decision stronger': 'What makes the choice stronger',
  };
  const stacked = (items, label, h, fn) => shell(`<g>${items.slice(0, 5).map((item, i) => fn(item, i)).join('')}</g>`, p, stackedTitles[label] || label, label, 900, h, 360);
  // Mobile artwork is displayed at roughly 358px on a 390px viewport. Use
  // larger source type and more vertical room so explanatory text remains
  // comfortable to read without pinch-zooming after the image is scaled.
  const mobileCard = (heading, detail, i) => { const x = 70; const y = 360 + i * 920; const accent = [p[2], p[3], p[4], p[1], p[2]][i]; return `<path d="M${x} ${y + 8}L${x + 742} ${y}L${x + 760} ${y + 888}L${x + 18} ${y + 900}Z" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><path d="M${x + 30} ${y + 42}h58" stroke="${accent}" stroke-width="12"/>${sans(String(i + 1).padStart(2, '0'), x + 30, y + 92, 21, p[2], 700)}${textBlock(heading, x + 30, y + 160, words(heading).length > 9 ? 44 : 50, 20, p[1], 700, 1.12, 'start', 3)}${textBlock(detail, x + 30, y + 320, 38, 36, p[1], 500, 1.2, 'start', 12)}`; };
  const summaryHeadings = ['The decision in plain language', 'The evidence to check', 'Where the trade-off sits', 'The next move to test'];
  const summaryDetails = [
    `Start by naming the decision, the constraint, and the outcome you want. ${bs[0] || hs[0]}`,
    `Treat this as a claim to verify, not a promise. ${bs[1] || hs[1]}`,
    `Compare the attractive route with its cost, fit, and fallback. ${bs[2] || hs[2]}`,
    `Turn the idea into one small test before committing more time or money. ${bs[3] || hs[3]}`,
  ];
  const summary = stacked(summaryHeadings.map((heading, i) => `${heading}|||${summaryDetails[i]}`), 'At a glance', 5200, (item, i) => { const [heading, detail] = item.split('|||'); return mobileCard(heading, detail, i); });
  const mobileComparisonLabels = ['What it asks of you', 'What to verify', 'What changes the choice', 'What to test next'];
  const matrixDetails = [
    `Name the time, cost, prerequisite, or uncertainty that ${hs[0] || 'this route'} creates for you.`,
    `Verify the claim against the page evidence: ${bs[1] || hs[1] || 'check the source, cost, and eligibility.'}`,
    `Let the trade-off change the route when ${hs[2] || 'the evidence'} does not support the default choice.`,
    `Run one small test connected to ${hs[3] || 'the next step'} before committing more resources.`,
  ];
  const matrix = stacked(mobileComparisonLabels, 'Compare the routes', 4600, (label, i) => `<rect x="70" y="${360 + i * 840}" width="760" height="800" rx="16" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/>${sans(String(i + 1).padStart(2, '0'), 108, 435 + i * 840, 23, p[2], 700)}${textBlock(label, 108, 530 + i * 840, 44, 20, p[1], 700, 1.15, 'start', 3)}${textBlock(matrixDetails[i] || 'Check the evidence, cost, and next test.', 108, 710 + i * 840, 38, 34, p[1], 500, 1.2, 'start', 10)}<path d="M108 ${1140 + i * 840}h600" stroke="${p[4]}" stroke-width="6"/>`);
  // Keep the label and connector in separate vertical bands. The earlier
  // 220px step made longer headings collide with the arrow on narrow screens.
  // Leave a full line-height buffer after the maximum four-line label before
  // the next connector, so unusually long headings cannot collide with it.
  const chainStages = ['Start with the question', 'Map the available routes', 'Check the evidence', 'Run a small test', 'Review the result'];
  const chain = stacked(chainStages, 'From question to evidence', 3300, (h, i) => { const y = 400 + i * 520; const source = hs[i] || bs[i] || ['the decision context', 'the realistic options', 'the evidence and trade-offs', 'the next small experiment', 'the result and fallback'][i]; return `<circle cx="450" cy="${y}" r="56" fill="${[p[2], p[3], p[4], p[1], p[2]][i]}"/><text x="450" y="${y + 10}" font-family="Arial,sans-serif" font-size="28" font-weight="700" fill="#fffaf0" text-anchor="middle">${i + 1}</text>${textBlock(h, 450, y + 130, 44, 21, p[1], 700, 1.15, 'middle', 2)}${textBlock(compact(source, 8), 450, y + 265, 30, 28, p[1], 500, 1.2, 'middle', 2)}${i < 4 ? `<path d="M450 ${y + 350}v90" stroke="${p[2]}" stroke-width="9"/><path d="M432 ${y + 415}l18 24 18-24" fill="none" stroke="${p[2]}" stroke-width="9"/>` : ''}`; });
  const checklist = stacked(bs, 'Five questions before you commit', 1950, (b, i) => { const y = 390 + i * 270; return `<rect x="90" y="${y - 44}" width="48" height="48" rx="7" fill="none" stroke="${p[2]}" stroke-width="6"/><path d="M98 ${y - 20}l11 11 22-27" fill="none" stroke="${p[3]}" stroke-width="6"/>${textBlock(b, 165, y, 42, 18, p[1], 600, 1.2, 'start', 6)}`; });
  const proof = stacked(bs.slice(0, 4), 'What makes the decision stronger', 3800, (b, i) => { const x = 70; const y = 380 + i * 700; return `<path d="M${x} ${y}h760l-24 650H${x}z" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/>${sans(['SOURCE', 'EXAMPLE', 'TEST', 'REFLECT'][i], x + 34, y + 62, 20, p[2], 700)}${textBlock(b, x + 34, y + 145, 34, 34, p[1], 700, 1.18, 'start', 10)}`; });
  return [mobileHero(title, 'career guide', p), summary, matrix, chain, checklist, proof];
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
  if (assessmentServicePages && (isBlogRoute || !route.startsWith('/services/assessments/'))) continue;
  if (!isBlogRoute && !(allServicePages && isServiceRoute) && !auditRoutes.has(route)) continue;
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
