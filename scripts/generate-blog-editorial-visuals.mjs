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
import { parse } from 'parse5';
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
const routeFilter = process.argv.find((arg) => arg.startsWith('--route='))?.slice('--route='.length);
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
const clean = (s) => String(s ?? '')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&amp;/g, '&').replace(/&#39;|&apos;/g, "'").replace(/&quot;/g, '"').replace(/&nbsp;/g, ' ')
  .replace(/career counselling and guidance|career counselling|growth:\s*the decisions that unlock|our scalability view|short answer:|what to verify:|\bscalability\b|\bcheckpoint\b|\bgate\b|\bundefined\b|\btbd\b|\blorem\b|\bleverage\b|\bcohort\b|\bheuristic\b|\breader\b|\bvisitor\b|\bbuyer\b/gi, '')
  .replace(/[“”‘’]/g, '').replace(/\.\.\.|…/g, '').replace(/\s+/g, ' ').replace(/^['"]+|['"]+$/g, '').trim();
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
  const value = clean(s || '').trim();
  if (!value) return '';
  const sentences = value.match(/[^.!?]+[.!?]+|[^.!?]+$/g) || [];
  const first = sentences.find((sentence) => words(sentence).length <= maxWords);
  if (first) return first.trim();
  const lastWords = new Set(['a', 'an', 'the', 'to', 'of', 'and', 'for', 'in', 'on', 'with', 'can', 'you', 'how', 'is', 'at', 'by', 'or']);
  const source = sentences[0] || value;
  const sourceWords = words(source);
  const clause = source.split(/[,;:]\s+/).map((part) => part.trim().replace(/^(?:and|but|or|so|then)\s+/i, '')).find((part) => {
    const last = words(part).at(-1)?.toLowerCase().replace(/[,:;.!?]+$/, '');
    return words(part).length >= 4 && words(part).length <= maxWords && !lastWords.has(last) && /\b(?:is|are|was|were|can|will|has|have|do|does|run|build|make|show|help|need|matter|work|change|include|lead|start|choose|compare|use|create|grow|pay|cost|take|remain|become|fit|give|mean|depend)\b/i.test(part);
  });
  if (clause) {
    const value = clause.replace(/[,:;.!?/-]+$/, '').trim();
    return `${value.charAt(0).toUpperCase()}${value.slice(1)}.`;
  }
  if (/most exposed|exposed categories/i.test(source)) return `${phrase(source.split(',')[0], 4, 'This work')} is highly exposed.`;
  if (/gaining ground/i.test(source)) return `${phrase(source.split(',')[0], 4, 'These roles')} are gaining ground.`;
  if (/headcount numbers.*do not|headcount.*economics/i.test(source)) return 'Headcount alone cannot predict the shift.';
  if (/roughly three decades/i.test(source)) return 'India IT services grew around headcount.';
  if (/client billing/i.test(source)) return 'Client billing once followed headcount.';
  if (/not disappearing overnight/i.test(source)) return 'L1 support changes gradually over time.';
  if (/watch out/i.test(source)) return 'The page flags a practical risk.';
  if (/core shift/i.test(source)) return 'The work is moving toward judgment.';
  if (/best for/i.test(source)) return 'This route suits people who enjoy the work.';
  if (/\b(?:ai|automation)\b/i.test(source)) return 'AI changes some tasks, not every role.';
  if (/\b(?:cost|fee|budget|price|money)\b/i.test(source)) return 'Check the cost before committing.';
  if (/\b(?:test|project|proof|portfolio)\b/i.test(source)) return 'Test the path with one project.';
  if (/\b(?:compare|option|choice|path)\b/i.test(source)) return 'Compare options before you commit.';
  if (/\b(?:salary|pay|income)\b/i.test(source)) return 'Check realistic pay before choosing.';
  const out = sourceWords.slice(0, Math.max(3, maxWords - 3));
  while (out.length && lastWords.has(out.at(-1).toLowerCase().replace(/[,:;.!?]+$/, ''))) out.pop();
  return 'This point needs evidence before choosing.';
}
function phrase(s, maxWords = 5, fallback = 'Practical next step') {
  const blocked = new Set(['a', 'an', 'the', 'to', 'of', 'and', 'for', 'in', 'on', 'with', 'can', 'you', 'how', 'is', 'at', 'by', 'or', 'that', 'which']);
  const selected = words(s).filter((word) => !blocked.has(word.toLowerCase().replace(/[,:;.!?]+$/, ''))).slice(0, maxWords);
  while (selected.length && blocked.has(selected.at(-1).toLowerCase().replace(/[,:;.!?]+$/, ''))) selected.pop();
  return selected.join(' ').replace(/[,:;.!?]+$/, '') || fallback;
}
function titleCase(s) {
  return words(s).map((word, i) => {
    const lower = word.toLowerCase();
    if (/^(ai|it|bca|bba|mba|neet|upsc|ssc|ca|cs|ui|ux|hr|mba)$/.test(lower)) return lower.toUpperCase();
    if (i > 0 && /^(and|or|of|for|in|on|to|with|the)$/.test(lower)) return lower;
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  }).join(' ');
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
  return `<path d="M${x} ${y + 7}L${x + w - 12} ${y}L${x + w} ${y + h - 7}L${x + 12} ${y + h}Z" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><path d="M${x + 26} ${y + 34}h48" stroke="${accent}" stroke-width="9"/>${sans(String(n).padStart(2, '0'), x + 26, y + 82, 30, p[2], 700)}${textBlock(heading, x + 26, y + 145, headingSize, 15, p[1], 700, 1.08, 'start', 2)}${textBlock(detail, x + 26, y + 250, bodySize, Math.max(18, Math.floor(w / 20)), p[1], 500, 1.14, 'start', 3)}`;
}
function matrixCell(x, y, w, h, heading, detail, p, accent) {
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="5" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><path d="M${x + 24} ${y + 32}h54" stroke="${accent}" stroke-width="9"/>${textBlock(compact(heading, 2), x + 24, y + 104, 44, 17, p[1], 700, 1.06, 'start', 2)}${textBlock(compact(detail, 3), x + 24, y + 205, 32, 20, p[1], 500, 1.12, 'start', 2)}`;
}
function topicDrawing(topic, p, scale) {
  const t = topic.toLowerCase();
  if (/salary|pay|cost|fee|money|budget/.test(t)) return `<rect x="110" y="930" width="780" height="190" rx="18" fill="${p[3]}" opacity=".36"/><path d="M190 1030h620M240 980h110m55 0h110m55 0h110" stroke="${p[1]}" stroke-width="22" stroke-linecap="round"/><circle cx="260" cy="980" r="38" fill="${p[2]}"/><path d="M260 958v45m-18-30c0-15 36-15 36 0s-36 15-36 30 36 15 36 0" fill="none" stroke="#fffaf0" stroke-width="7"/>`;
  if (/stream|subject|school|college|degree|course/.test(t)) return `<path d="M140 1080h720M230 1080V860h150v220m120 0V760h150v320m120 0V650h150v430" fill="none" stroke="${p[1]}" stroke-width="18"/><circle cx="305" cy="820" r="26" fill="${p[2]}"/><circle cx="500" cy="720" r="26" fill="${p[3]}"/><circle cx="695" cy="610" r="26" fill="${p[4]}"/>`;
  if (/ai|technology|it|digital|software/.test(t)) return `<rect x="130" y="840" width="740" height="280" rx="28" fill="${p[3]}" opacity=".32"/><rect x="240" y="900" width="520" height="150" rx="10" fill="#fffaf0" stroke="${p[1]}" stroke-width="12"/><path d="M320 975h80m50 0h80m50 0h80M500 840v60M500 1050v70" stroke="${p[2]}" stroke-width="15" stroke-linecap="round"/><circle cx="500" cy="975" r="30" fill="${p[2]}"/>`;
  return `<circle cx="500" cy="970" r="180" fill="${p[3]}" opacity=".34"/><path d="M500 750v440M280 970h440M350 820l300 300M650 820L350 1120" stroke="${p[1]}" stroke-width="15"/><circle cx="500" cy="970" r="44" fill="${p[2]}"/><circle cx="350" cy="820" r="25" fill="${p[4]}"/><circle cx="650" cy="820" r="25" fill="${p[4]}"/>`;
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
function posterVisuals(title, category, headings, bullets, p, w = 1000, h = 1500, topic = title, tableRows = []) {
  const dataTableRows = tableRows;
  const hs = (headings.length ? headings : ['Choice fit', 'Evidence to gather', 'Skills to build', 'Next practical step']).map((v) => phrase(v, 4));
  const bs = [...new Set((bullets.length ? bullets : hs).map((v) => compact(v, 9)).filter((v) => v && words(v).length >= 5 && /[.!?]$/.test(v) && !/^L1\s+is\s+worth/i.test(v)))];
  const fillers = ['Check the evidence before choosing.', 'Compare cost and time before committing.', 'Test the work with a small project.', 'Build proof before making a larger bet.'];
  for (const filler of fillers) if (bs.length < 7 && !bs.includes(filler)) bs.push(filler);
  while (bs.length < 7) bs.push('Check the evidence before choosing.');
  const scale = w / 1000;
  const x = 70 * scale;
  const gap = 24 * scale;
  const cardW = (w - (x * 2) - gap) / 2;
  const cardH = 390 * scale;
  const topicLabel = titleCase(words(topic).slice(0, 5).join(' ') || words(title).slice(0, 5).join(' '));
  const gridCard = (heading, detail, i, accent) => posterCard(x + (i % 2) * (cardW + gap), 300 * scale + Math.floor(i / 2) * (cardH + gap), cardW, cardH, i + 1, heading, detail, p, accent, 34 * scale);
  const answer = compact(bs[0] || title, 14) || 'Compare fit, proof and cost before you commit.';
  const summaryDetails = [bs[0], bs[1], bs[2]].map((v, i) => compact(v || hs[i] || title, 9));
  const summaryBody = summaryDetails.map((detail, i) => gridCard(`Point ${i + 1}`, detail, i, [p[2], p[3], p[4]][i])).join('');
  const summary = posterShell(summaryBody, p, 'In short', topicLabel, w, h, 300 * scale);

  const tableX = x;
  const tableY = 300 * scale;
  const tableGap = 18 * scale;
  const tableW = cardW;
  const tableH = 286 * scale;
  const matrixRows = dataTableRows.length ? dataTableRows.slice(0, 3).map((row) => row.slice(0, 3).map((cell) => phrase(cell, 5, 'Compare first'))) : [['Decision lens', 'Article signal', 'Practical response'], [phrase(hs[0], 4, 'Fit and context'), phrase(bs[0], 4, 'Check the evidence'), phrase(bs[1], 4, 'Build useful proof')], [phrase(hs[1], 4, 'Cost and time'), phrase(bs[2], 4, 'Compare the options'), phrase(bs[3], 4, 'Test one small project')]];
  const colW = (w - x * 2) / 3;
  const matrixBody = `<rect x="${x}" y="${tableY}" width="${w - x * 2}" height="${tableH * 3}" fill="#fffaf0" stroke="${p[1]}" stroke-width="4"/>${[1, 2].map((i) => `<path d="M${x} ${tableY + tableH * i}H${w - x}" stroke="${p[1]}" stroke-width="3"/>`).join('')}${[1, 2].map((i) => `<path d="M${x + colW * i} ${tableY}V${tableY + tableH * 3}" stroke="${p[1]}" stroke-width="3"/>`).join('')}${matrixRows.map((row, r) => row.map((cell, c) => textBlock(phrase(cell, 6, 'Compare first'), x + c * colW + 20, tableY + r * tableH + 82, 34, 12, r === 0 ? p[2] : p[1], r === 0 || c === 0 ? 700 : 500, 1.08, 'start', 3)).join('')).join('')}`;
  const matrix = posterShell(matrixBody, p, 'Compare options', topicLabel, w, h, tableY);

  const chainLabels = hs.slice(0, 4);
  const chainBody = chainLabels.map((label, i) => {
    const y = 300 * scale + i * 235 * scale;
    const cx = 122 * scale;
    const source = bs[i % bs.length];
    return `<circle cx="${cx}" cy="${y + 52 * scale}" r="42" fill="${[p[2], p[3], p[4], p[1]][i]}"/><text x="${cx}" y="${y + 62 * scale}" font-family="Arial,Helvetica,sans-serif" font-size="30" font-weight="700" fill="#fffaf0" text-anchor="middle">${i + 1}</text>${textBlock(phrase(label, 4, `Step ${i + 1}`), 200 * scale, y + 42 * scale, Math.max(44, 44 * scale), 18, p[1], 700, 1.08, 'start', 2)}${textBlock(compact(source, 9), 200 * scale, y + 150 * scale, Math.max(32, 36 * scale), 30, p[1], 500, 1.14, 'start', 2)}${i < 3 ? `<path d="M${cx} ${y + 100 * scale}v${135 * scale}" stroke="${p[2]}" stroke-width="7"/><path d="M${cx - 14 * scale} ${y + 225 * scale}l${14 * scale} 18 ${14 * scale} -18" fill="none" stroke="${p[2]}" stroke-width="7"/>` : ''}`;
  }).join('');
  const chain = posterShell(chainBody, p, '', `${topicLabel} steps`, w, h, 300 * scale);
  const checklistItems = [];
  const checklistKeys = new Set();
  for (const item of bs) {
    const text = compact(item, 6);
    const key = clean(text).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
    if (text && !checklistKeys.has(key)) { checklistKeys.add(key); checklistItems.push(text); }
    if (checklistItems.length === 5) break;
  }
  const checklistBody = checklistItems.map((b, i) => {
    const y = 320 * scale + i * 175 * scale;
    return `<rect x="${x}" y="${y}" width="34" height="34" rx="5" fill="none" stroke="${p[2]}" stroke-width="5"/><path d="M${x + 8} ${y + 17}l9 9 18-23" fill="none" stroke="${p[3]}" stroke-width="5"/>${textBlock(compact(b, 6), x + 66 * scale, y + 34 * scale, Math.max(32, 36 * scale), 36, p[1], 600, 1.16, 'start', 2)}`;
  }).join('');
  const checklist = posterShell(checklistBody, p, `Before you choose ${phrase(topicLabel, 3)}`, topicLabel, w, h, 300 * scale);
  const proofLabels = [phrase(hs[0] || 'Fit evidence', 3), phrase(hs[1] || 'Cost evidence', 3), phrase(hs[2] || 'Time evidence', 3), phrase(hs[3] || 'Proof evidence', 3)];
  const proofBody = bs.slice(0, 3).map((b, i) => gridCard(proofLabels[i], compact(b, 7), i, [p[2], p[3], p[4]][i])).join('');
  const proof = posterShell(proofBody, p, '', `${topicLabel} evidence`, w, h, 300 * scale);
  const heroLabel = topicLabel;
  const chipLeft = 70 * scale;
  const chipGap = 18 * scale;
  const chipWidth = (w - chipLeft * 2 - chipGap * 2) / 3;
  const chipY = 430 * scale;
  const heroChips = hs.slice(0, 3).map((item, i) => { const chipX = chipLeft + i * (chipWidth + chipGap); return `<rect x="${chipX}" y="${chipY}" width="${chipWidth}" height="${100 * scale}" rx="10" fill="#fffaf0" opacity=".9"/>${textBlock(titleCase(phrase(item, 4)), chipX + 20 * scale, chipY + 42 * scale, 30, 16, p[1], 700, 1.1, 'start', 2)}`; }).join('');
  const heroFooter = `<path d="M${x + 40} 1260H${w - x - 40}" stroke="${p[1]}" stroke-width="4"/><circle cx="${x + 120}" cy="1260" r="24" fill="${p[2]}"/><circle cx="${w / 2}" cy="1260" r="24" fill="${p[3]}"/><circle cx="${w - x - 120}" cy="1260" r="24" fill="${p[4]}"/>${sans('FIT', x + 120, 1330, 28, p[1], 700, 'middle')}${sans('PROOF', w / 2, 1330, 28, p[1], 700, 'middle')}${sans('CHOICE', w - x - 120, 1330, 28, p[1], 700, 'middle')}`;
  return [posterShell(`${topicDrawing(topic, p, scale)}${heroChips}${heroFooter}`, p, topicLabel, answer, w, h, 300 * scale), summary, matrix, chain, checklist, proof];
}
function buildVisuals(title, category, headings, bullets, p, topic, tableRows = []) {
  return posterVisuals(title, category, headings, bullets, p, 1000, 1500, topic, tableRows);
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
function buildMobileVisuals(title, headings, bullets, p, topic, tableRows = []) {
  return posterVisuals(title, 'career guide', headings, bullets, p, 900, 1350, topic, tableRows);
}
async function walk(dir) { const out = []; for (const e of await readdir(dir, { withFileTypes: true })) { const p = join(dir, e.name); if (e.isDirectory()) out.push(...await walk(p)); else if (e.name === 'index.html') out.push(p); } return out; }
function nodeText(node) {
  if (!node) return '';
  if (node.nodeName === '#text') return node.value || '';
  return (node.childNodes || []).map(nodeText).join(' ');
}
function hasClass(node, name) {
  return (node.attrs || []).some((attr) => attr.name === 'class' && attr.value.split(/\s+/).includes(name));
}
function walkArticle(node, fn, blocked = false) {
  if (!node || blocked) return;
  fn(node);
  const stop = ['aside', 'nav', 'header', 'footer', 'details'].includes(node.tagName);
  for (const child of node.childNodes || []) walkArticle(child, fn, stop);
}
function articleData(html) {
  const doc = parse(html);
  let root = null;
  walkArticle(doc, (node) => { if (!root && node.tagName === 'article' && hasClass(node, 'post-body')) root = node; });
  if (!root) walkArticle(doc, (node) => { if (!root && node.tagName === 'main') root = node; });
  root ||= doc;
  const headings = []; const facts = []; const sections = []; const tableRows = []; let current = null;
  walkArticle(root, (node) => {
    if (node.nodeName === '#text') return;
    const value = clean(nodeText(node));
    if (!value) return;
    if (node.tagName === 'h2' || node.tagName === 'h3') {
      const heading = compact(value, 8);
      if (heading && !headings.includes(heading)) headings.push(heading);
      if (node.tagName === 'h2') { current = { title: heading, facts: [], words: 0, hasList: false, hasTable: false }; sections.push(current); }
    }
    if (node.tagName === 'p' && value.length > 28) {
      const fact = compact(value, 9);
      if (fact) { facts.push(fact); if (current) { current.facts.push(fact); current.words += words(value).length; } }
    }
    if (node.tagName === 'li' && value.length > 12) {
      const fact = compact(value, 9);
      if (fact) { facts.push(fact); if (current) { current.facts.push(fact); current.words += words(value).length; current.hasList = true; } }
    }
    if (node.tagName === 'table' && current) current.hasTable = true;
    if (node.tagName === 'tr' && tableRows.length < 6) {
      const cells = (node.childNodes || []).filter((child) => child.tagName === 'th' || child.tagName === 'td').map((cell) => phrase(nodeText(cell), 6, 'Compare first'));
      if (cells.length >= 2) tableRows.push(cells);
    }
  });
  const unique = (items) => [...new Set(items.filter(Boolean))];
  const numbers = unique(facts.filter((value) => /₹|rs\.?|inr|\d+(?:\.\d+)?\s*(?:%|years?|months?|weeks?|lakh|crore|hours?)/i.test(value)));
  const textHeavy = sections.filter((section) => section.words > 220 && !section.hasList && !section.hasTable).map((section) => ({ ...section, facts: unique(section.facts).slice(0, 3) }));
  return { headings: unique(headings).slice(0, 8), facts: unique(facts).slice(0, 24), numbers, tableRows: tableRows.slice(0, 3), textHeavy };
}
const shardIndex = Number(process.argv.find((arg) => arg.startsWith('--shard='))?.slice('--shard='.length) ?? 0);
const shardCount = Number(process.argv.find((arg) => arg.startsWith('--shards='))?.slice('--shards='.length) ?? 1);
const allFiles = await walk(DIST);
const files = allFiles.filter((_, index) => index % shardCount === shardIndex);
let generated = 0;
let detailCount = 0;
for (const file of files) {
  const route = '/' + file.slice(DIST.length + 1).replaceAll('\\', '/').replace(/index\.html$/, '');
  if (routeFilter && route !== routeFilter) continue;
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
  const extracted = articleData(html);
  const headings = extracted.headings;
  const bullets = extracted.facts;
  const p = palettes[hash(slug) % palettes.length];
  const dir = join(OUT, String(hash(`${category}/${slug}`)).padStart(10, '0')); await mkdir(dir, { recursive: true });
  const names = ['hero', 'summary', 'matrix', 'chain', 'checklist', 'proof'];
  const desktopVisuals = buildVisuals(title, category, headings, bullets, p, topic, extracted.tableRows);
  const mobileVisuals = buildMobileVisuals(title, headings, bullets, p, topic, extracted.tableRows);
  for (const [i, svg] of desktopVisuals.entries()) {
    if (heroOnly && i !== 0) continue;
    const path = join(dir, `${slug}-${names[i]}.webp`);
    if (!mobileOnly && !socialOnly) await sharp(Buffer.from(svg)).webp({ quality: 82, effort: 4 }).toFile(path);
    if (!desktopOnly && !socialOnly) await sharp(Buffer.from(mobileVisuals[i])).webp({ quality: 80, effort: 4 }).toFile(join(dir, `${slug}-${names[i]}-mobile.webp`));
    if (i === 0 && (!mobileOnly || socialOnly)) await sharp(Buffer.from(svg)).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 82, mozjpeg: true }).toFile(join(dir, `${slug}-social.jpg`));
  }
  if (!heroOnly && !socialOnly) {
    const details = extracted.textHeavy;
    for (let i = 0; i < details.length; i += 1) {
      const detailTitle = compact(details[i].title, 6) || topic;
      const body = details[i].facts.map((fact, n) => `<rect x="70" y="${220 + n * 130}" width="860" height="98" rx="10" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><circle cx="118" cy="${269 + n * 130}" r="22" fill="${[p[2], p[3], p[4]][n]}"/><text x="118" y="278" font-family="Arial" font-size="24" font-weight="700" fill="#fffaf0" text-anchor="middle">${n + 1}</text>${textBlock(fact, 166, 278 + n * 130, 32, 31, p[1], 600, 1.14, 'start', 2)}`).join('');
      const detailSvg = posterShell(body, p, topic, detailTitle, 1000, 667, 180);
      const mobileBody = details[i].facts.map((fact, n) => `<rect x="58" y="${180 + n * 116}" width="784" height="88" rx="10" fill="#fffaf0" stroke="${p[3]}" stroke-width="3"/><circle cx="102" cy="${224 + n * 116}" r="20" fill="${[p[2], p[3], p[4]][n]}"/><text x="102" y="232" font-family="Arial" font-size="22" font-weight="700" fill="#fffaf0" text-anchor="middle">${n + 1}</text>${textBlock(fact, 146, 232 + n * 116, 32, 28, p[1], 600, 1.14, 'start', 2)}`).join('');
      const mobileSvg = posterShell(mobileBody, p, topic, detailTitle, 900, 600, 150);
      await sharp(Buffer.from(detailSvg)).webp({ quality: 80, effort: 5 }).toFile(join(dir, `${slug}-detail-${String(i + 1).padStart(2, '0')}.webp`));
      await sharp(Buffer.from(mobileSvg)).webp({ quality: 80, effort: 5 }).toFile(join(dir, `${slug}-detail-${String(i + 1).padStart(2, '0')}-mobile.webp`));
      detailCount += 1;
    }
  }
  generated += 1;
}
console.log(`Generated editorial packs for ${generated} blog pages.`);
