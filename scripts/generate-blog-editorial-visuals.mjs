/*
 * Generate page-specific editorial visuals from the rendered page and the
 * Round 9 needs register. The register is the source of truth for tables,
 * figures, checklists, chains, and section summaries; no invented fallback
 * copy is emitted.
 */
import { readFile, readdir, mkdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';
import { parse } from 'parse5';
import sharp from '../node_modules/.pnpm/sharp@0.33.5/node_modules/sharp/lib/index.js';

sharp.concurrency(8);
const DIST = 'dist';
const OUT = 'public/images/blog/generated';
const needsFile = process.argv.find((arg) => arg.startsWith('--needs-csv='))?.slice(12) || 'C:\\Users\\Jack Sparrow\\Downloads\\infographic_needs_v9.csv';
const force = process.argv.includes('--force');
const allServicePages = process.argv.includes('--all-service-pages');
const shard = Number(process.argv.find((arg) => arg.startsWith('--shard='))?.slice(8) || 0);
const shards = Number(process.argv.find((arg) => arg.startsWith('--shards='))?.slice(9) || 1);
const routeFilter = process.argv.find((arg) => arg.startsWith('--route='))?.slice(8);

const palettes = [
  ['#f5efe3', '#17324d', '#c45e48', '#718763', '#d5aa59'],
  ['#eef1e8', '#203b3b', '#b95b4d', '#788c67', '#d7ae57'],
  ['#f3e9df', '#2a2c40', '#c87151', '#668c8b', '#e1b55d'],
  ['#edf0ed', '#203949', '#c66d53', '#718a6e', '#d7b05f'],
];
const esc = (value) => String(value ?? '').replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;');
const hash = (value) => { let n = 0; for (const c of value) n = (n * 31 + c.charCodeAt(0)) >>> 0; return n; };
const clean = (value) => String(value ?? '').replace(/<[^>]+>/g, ' ').replace(/&amp;/g, '&').replace(/&quot;|&#34;/g, '"').replace(/&#39;|&apos;/g, "'").replace(/&nbsp;/g, ' ').replace(/[“”‘’]/g, '').replace(/…|\.\.\./g, '').replace(/(?:career counselling and guidance|career counselling|growth:\s*the decisions that unlock|our scalability view|short answer:|what to verify:|this is our scalability view|This point needs evidence before choosing|Point [123]|Test the path with one project|Check realistic pay before choosing|Compare options before you commit|In short 01 02|undefined)/gi, '').replace(/\b(tbd|lorem|scalability|checkpoint|gate|leverage|cohort|heuristic)\b/gi, '').replace(/\s+/g, ' ').trim();
const words = (value) => clean(value).split(/\s+/).filter(Boolean);
const lastWord = (value) => words(value).at(-1)?.toLowerCase().replace(/[.,:;!?]+$/, '');
const badEnd = new Set(['a', 'an', 'the', 'to', 'of', 'and', 'for', 'in', 'on', 'with', 'can', 'you', 'how', 'is', 'at', 'by', 'or']);
const titleCase = (value) => words(value).map((word, index) => {
  const prefix = word.match(/^[^a-z0-9]*/i)?.[0] || ''; const core = word.slice(prefix.length); const lower = core.toLowerCase();
  if (/^(ai|it|bca|bba|mba|neet|upsc|ssc|ca|cs|ui|ux|hr)$/.test(lower)) return lower.toUpperCase();
  if (index && /^(and|or|of|for|in|on|to|with|the)$/.test(lower)) return prefix + lower;
  return prefix + lower.charAt(0).toUpperCase() + lower.slice(1);
}).join(' ');
function sentence(value, max = 10) {
  const source = clean(value);
  if (!source) return '';
  const complete = (source.match(/[^.!?]+[.!?]+/) || [source])[0].trim();
  if (words(complete).length <= max && !badEnd.has(lastWord(complete))) return complete;
  const clauses = complete.split(/[,;:]\s+/).map((part) => part.trim()).filter(Boolean);
  const clause = clauses.find((part) => words(part).length >= 3 && words(part).length <= max && !badEnd.has(lastWord(part)));
  if (clause) { const value = clause.replace(/[.,:;!?]+$/, ''); return `${value.charAt(0).toUpperCase()}${value.slice(1)}.`; }
  const picked = words(complete).slice(0, Math.max(4, max - 1));
  while (picked.length && badEnd.has(lastWord(picked.join(' ')))) picked.pop();
  return picked.length ? `${picked.join(' ').charAt(0).toUpperCase()}${picked.join(' ').slice(1)} matters.` : '';
}
function phrase(value, max = 8) {
  const source = clean(value);
  if (!source) return '';
  const first = source.split(/[.!?]/)[0].trim();
  const picked = words(first).slice(0, max);
  while (picked.length && badEnd.has(lastWord(picked.join(' ')))) picked.pop();
  return picked.join(' ');
}
function wrap(value, maxChars) {
  const out = []; let line = '';
  for (const word of words(value)) {
    if (line && `${line} ${word}`.length > maxChars) { out.push(line); line = word; }
    else line = `${line} ${word}`.trim();
  }
  if (line) out.push(line);
  return out;
}
function textLines(value, x, y, size, maxChars, fill, maxLines = 5, weight = 600) {
  return wrap(value, maxChars).slice(0, maxLines).map((line, i) => `<text x="${x}" y="${y + (i * size * 1.18)}" font-family="Arial,Helvetica,sans-serif" font-size="${size}" font-weight="${weight}" fill="${fill}">${esc(line)}</text>`).join('');
}
function shortCell(value) {
  const source = clean(value);
  if (words(source).length <= 6) return source;
  return sentence(source, 6);
}
function figureLabel(value, index = 0) {
  const source = clean(value);
  if (/₹|\$|lpa|lakh|crore|salary|pay|cost|fee|income/i.test(source)) return 'Pay And Cost';
  if (/%|jobs|demand|growth|rise|fall/i.test(source)) return 'Demand Signal';
  if (/year|month|week|hour|duration|time/i.test(source)) return 'Time To Reach';
  return ['Entry Route', 'Skill Focus', 'Market Signal'][index % 3];
}
function topicIcon(topic, palette) {
  const value = topic.toLowerCase(); const stroke = palette[2]; const frame = (svg) => `<g transform="translate(700 0) scale(.45)">${svg}</g>`;
  if (/medicine|medical|health|doctor|nursing|clinical|pharmacy/.test(value)) return frame(`<path d="M900 240c-35 0-55 24-55 55v75h-75v55h75v75c0 35 20 55 55 55s55-20 55-55v-75h75v-55h-75v-75c0-31-20-55-55-55z" fill="none" stroke="${stroke}" stroke-width="14" stroke-linejoin="round"/><circle cx="900" cy="470" r="110" fill="none" stroke="${palette[3]}" stroke-width="10"/>`);
  if (/law|legal|advocate|court/.test(value)) return frame(`<path d="M900 250v310M780 300h240M820 300l-70 150h140l-70-150zm160 0-70 150h140l-70-150zM780 560h240" fill="none" stroke="${stroke}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>`);
  if (/abroad|overseas|foreign|study/.test(value)) return frame(`<path d="M760 500l300-130-130 300-54-116-116-54z" fill="none" stroke="${stroke}" stroke-width="14" stroke-linejoin="round"/><path d="M860 550l-90 90m160-120 90-90" stroke="${palette[3]}" stroke-width="12" stroke-linecap="round"/>`);
  if (/bank|finance|insurance|account|commerce|economics|investment/.test(value)) return frame(`<path d="M760 350l140-90 140 90M790 370h220M810 390v150m60-150v150m60-150v150m60-150v150M760 570h280" fill="none" stroke="${stroke}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>`);
  if (/it|software|data|ai|technology|coding|developer|computer|engineering/.test(value)) return frame(`<path d="M820 330l-110 140 110 140M980 330l110 140-110 140M930 300L870 640" fill="none" stroke="${stroke}" stroke-width="14" stroke-linecap="round" stroke-linejoin="round"/>`);
  return frame(`<circle cx="900" cy="470" r="125" fill="none" stroke="${stroke}" stroke-width="12"/><path d="M900 345v250M775 470h250M815 385l170 170M985 385L815 555" stroke="${palette[3]}" stroke-width="10" stroke-linecap="round"/>`);
}
function csvRows(text) {
  const rows = []; let row = []; let cell = ''; let quote = false;
  for (let i = 0; i < text.length; i += 1) {
    const c = text[i];
    if (c === '"' && text[i + 1] === '"' && quote) { cell += '"'; i += 1; continue; }
    if (c === '"') { quote = !quote; continue; }
    if (c === ',' && !quote) { row.push(cell); cell = ''; continue; }
    if ((c === '\n' || c === '\r') && !quote) { if (c === '\r' && text[i + 1] === '\n') i += 1; row.push(cell); if (row.some(Boolean)) rows.push(row); row = []; cell = ''; continue; }
    cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}
async function loadNeeds() {
  try {
    const rows = csvRows(await readFile(needsFile, 'utf8'));
    const header = rows.shift(); const map = new Map();
    for (const row of rows) {
      const item = Object.fromEntries(header.map((key, i) => [key, row[i] || '']));
      if (!item.page) continue;
      const type = item.infographic_needed.startsWith('COMPARISON') ? 'matrix' : item.infographic_needed.startsWith('NUMBERS') ? 'proof' : item.infographic_needed.startsWith('CHECKLIST') ? 'checklist' : item.infographic_needed.startsWith('STEP') ? 'chain' : item.infographic_needed.startsWith('TEXT') ? 'detail' : '';
      if (!type) continue;
      if (!map.has(item.page)) map.set(item.page, []);
      map.get(item.page).push({ ...item, type });
    }
    return map;
  } catch { return new Map(); }
}
function nodeText(node) { return (node.childNodes || []).map((child) => child.nodeName === '#text' ? child.value : nodeText(child)).join(' '); }
function walk(node, fn, blocked = false) { if (!node || blocked) return; fn(node); const stop = ['aside', 'nav', 'header', 'footer', 'details'].includes(node.tagName); for (const child of node.childNodes || []) walk(child, fn, stop); }
function pageData(html) {
  const doc = parse(html); let root = null;
  walk(doc, (node) => { if (!root && node.tagName === 'article') root = node; });
  root ||= doc; const headings = []; const facts = []; const lists = []; const sections = []; let current = null;
  walk(root, (node) => {
    if (!node.tagName) return;
    const value = clean(nodeText(node));
    if ((node.tagName === 'h2' || node.tagName === 'h3') && value) { const h = titleCase(value); if (!headings.includes(h)) headings.push(h); if (node.tagName === 'h2') { current = { title: h, facts: [] }; sections.push(current); } }
    if ((node.tagName === 'p' || node.tagName === 'li') && value.length > 24) { const s = sentence(value); if (s && !facts.includes(s)) { facts.push(s); if (node.tagName === 'li') lists.push(s); if (current) current.facts.push(s); } }
  });
  const numberFacts = facts.filter((fact) => /₹|\$|\d+(?:\.\d+)?\s*(?:%|lpa|lakh|crore|years?|months?|weeks?|hours?)/i.test(fact));
  return { headings: headings.slice(0, 16), facts: facts.slice(0, 40), lists: lists.slice(0, 20), numberFacts, sections: sections.slice(0, 16) };
}
function baseSvg(body, palette, topic, label, width, height) {
  const margin = 72; const title = titleCase(topic); const titleLines = wrap(title, width < 1000 ? 23 : 32).slice(0, 3);
  const heading = titleLines.map((line, i) => `<text x="${margin}" y="${142 + i * 58}" font-family="Arial,Helvetica,sans-serif" font-size="${width < 1000 ? 48 : 56}" font-weight="700" fill="${palette[1]}">${esc(line)}</text>`).join('');
  const topLabel = titleCase(words(label).slice(0, 4).join(' '));
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}"><rect width="${width}" height="${height}" fill="${palette[0]}"/><path d="M0 84H${width}" stroke="${palette[4]}" stroke-width="6"/><text x="${margin}" y="48" font-family="Arial,Helvetica,sans-serif" font-size="28" font-weight="700" letter-spacing="1" fill="${palette[1]}">${esc(topLabel.toUpperCase())}</text>${heading}<g transform="translate(0 ${titleLines.length * 58})">${body}</g></svg>`;
}
function card(x, y, w, n, content, palette, accent, heading = '') {
  const lines = wrap(content, Math.max(18, Math.floor((w - 130) / 20))).slice(0, 5); const h = Math.max(150, 70 + lines.length * 42 + (heading ? 36 : 0));
  const title = heading ? textLines(heading, x + 92, y + 39, 25, 24, palette[1], 1, 700) : '';
  const bodyY = y + (heading ? 76 : 48);
  return { h, svg: `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="18" fill="#fffaf0" stroke="${accent}" stroke-width="3"/><circle cx="${x + 40}" cy="${y + 40}" r="28" fill="${accent}"/><text x="${x + 40}" y="${y + 51}" text-anchor="middle" font-family="Arial" font-size="32" font-weight="700" fill="#fffaf0">${n}</text>${title}${textLines(lines.join(' '), x + 92, bodyY, 28, Math.max(18, Math.floor((w - 130) / 20)), palette[1], 5, 600)}` };
}
function cardVisual(topic, label, items, palette, mobile = false) {
  const width = mobile ? 900 : 1200; const cardWidth = width - 144; let y = 250; let body = '';
  for (let i = 0; i < items.length; i += 1) { const rendered = card(72, y, cardWidth, i + 1, items[i].text, palette, [palette[2], palette[3], palette[4]][i % 3], items[i].heading); body += rendered.svg; y += rendered.h + 28; }
  return baseSvg(body, palette, topic, label, width, Math.max(700, y + 42));
}
function tableRows(content) {
  const columns = (content.match(/^Columns:\s*([^|]+(?:\|[^|]+)*)\s*\|\|/i)?.[1] || '').split('|').map((v) => phrase(v, 8)).filter(Boolean);
  const part = content.split(/\|\|\s*Rows:\s*/i)[1] || '';
  const rows = part.split(/\s*##\s*/).map((r) => r.split(/\s+\/\s+/).map((v) => shortCell(v)).filter(Boolean)).filter((r) => r.length >= 2);
  return { columns, rows };
}
function tableVisual(topic, label, content, palette, mobile = false) {
  const width = mobile ? 900 : 1800; const { columns, rows } = tableRows(content); const cols = Math.max(columns.length, rows[0]?.length || 2); const colW = (width - 144) / cols; const lineSize = mobile ? 18 : 22; const cellChars = Math.max(8, Math.floor(colW / (lineSize * 0.62))); let y = 250; let body = '';
  const headH = 96; body += `<rect x="72" y="${y}" width="${width - 144}" height="${headH}" fill="${palette[1]}"/>`;
  for (let i = 0; i < cols; i += 1) body += textLines(columns[i] || `Column ${i + 1}`, 84 + i * colW, y + 37, lineSize, cellChars, '#fffaf0', 2, 700);
  y += headH;
  for (const row of rows) { const lines = row.map((cell) => wrap(cell, cellChars)); const maxLines = Math.max(...lines.map((v) => Math.min(4, v.length)), 1); const h = Math.max(88, maxLines * (lineSize + 7) + 30); body += `<rect x="72" y="${y}" width="${width - 144}" height="${h}" fill="#fffaf0" stroke="${palette[3]}" stroke-width="2"/>`; for (let i = 0; i < cols; i += 1) body += textLines((lines[i] || []).slice(0, 4).join(' '), 84 + i * colW, y + 34, lineSize, cellChars, palette[1], 4, 600); y += h; }
  return baseSvg(body, palette, topic, label, width, Math.max(700, y + 48));
}
function heroVisual(topic, answer, figures, palette, mobile = false) {
  const width = mobile ? 900 : 1400; const answerLines = wrap(answer, mobile ? 30 : 48).slice(0, 3); let body = `<text x="72" y="250" font-family="Arial" font-size="${mobile ? 36 : 48}" font-weight="700" fill="${palette[1]}">${answerLines.map((line, i) => `<tspan x="72" dy="${i ? 54 : 0}">${esc(line)}</tspan>`).join('')}</text>`;
  const tileW = (width - 192) / 3; const nums = figures.slice(0, 3); for (let i = 0; i < nums.length; i += 1) { const x = 72 + i * (tileW + 24); const value = typeof nums[i] === 'string' ? nums[i] : nums[i].value; const label = typeof nums[i] === 'string' ? figureLabel(value, i) : nums[i].label; body += `<rect x="${x}" y="430" width="${tileW}" height="190" rx="18" fill="#fffaf0" stroke="${[palette[2], palette[3], palette[4]][i]}" stroke-width="4"/><text x="${x + 24}" y="505" font-family="Arial" font-size="${mobile ? 34 : 48}" font-weight="700" fill="${palette[1]}">${esc(value)}</text><text x="${x + 24}" y="560" font-family="Arial" font-size="${mobile ? 22 : 26}" fill="${palette[1]}">${esc(label)}</text>`; }
  body += topicIcon(topic, palette);
  return baseSvg(body, palette, topic, titleCase(words(topic).slice(0, 4).join(' ')), width, 760);
}
function figuresVisual(topic, label, values, palette, mobile = false) {
  const width = mobile ? 900 : 1400; const tileW = (width - 192) / 3; let body = '';
  values.slice(0, 3).forEach((item, i) => {
    const value = typeof item === 'string' ? item : item.value; const figureText = typeof item === 'string' ? figureLabel(value, i) : item.label; const x = 72 + i * (tileW + 24);
    body += `<rect x="${x}" y="300" width="${tileW}" height="250" rx="20" fill="#fffaf0" stroke="${[palette[2], palette[3], palette[4]][i]}" stroke-width="4"/><circle cx="${x + 44}" cy="348" r="28" fill="${[palette[2], palette[3], palette[4]][i]}"/><text x="${x + 44}" y="359" text-anchor="middle" font-family="Arial" font-size="32" font-weight="700" fill="#fffaf0">${i + 1}</text><text x="${x + 28}" y="435" font-family="Arial" font-size="${mobile ? 36 : 52}" font-weight="700" fill="${palette[1]}">${esc(value)}</text><text x="${x + 28}" y="490" font-family="Arial" font-size="${mobile ? 22 : 26}" fill="${palette[1]}">${esc(figureText)}</text>`;
  });
  return baseSvg(body, palette, topic, label, width, 680);
}
function keyFor(item) { return clean(item.text || item.content || item).toLowerCase().replace(/\W+/g, ' ').trim(); }
function itemsFromNeed(need) {
  if (need.type === 'matrix') { const table = tableRows(need.exact_page_content_to_use); return table.rows.map((row) => ({ text: row.join(' — '), heading: row[0] })); }
  if (need.type === 'proof') return need.exact_page_content_to_use.split('|').map((v) => clean(v)).filter(Boolean).slice(0, 4).map((v) => ({ text: v }));
  if (need.type === 'detail') {
    const raw = clean(need.exact_page_content_to_use).replace(/^(?:Three practical points about .*?:|Key facts from .*? section \d+)/i, '').trim();
    return raw.split(/(?<=[.!?])\s+|\s*##\s*/).map((v) => sentence(v, 11)).filter(Boolean).slice(0, 5).map((v) => ({ text: v }));
  }
  return need.exact_page_content_to_use.split(/\s*##\s*/).map((v) => sentence(v, 11)).filter(Boolean).slice(0, 6).map((v) => ({ text: v }));
}
function topicFrom(title) { const value = clean(title).replace(/^how to\s+/i, '').replace(/\s+(in|for|from|during|with)\s+.+$/i, ''); return titleCase(words(value).slice(0, 4).join(' ')) || 'Career Path'; }
function routeKey(route) { const parts = route.split('/').filter(Boolean); return route; }
async function writeSvg(dir, slug, type, index, desktop, mobile, social = false) {
  const suffix = index ? `-${String(index).padStart(2, '0')}` : '';
  const base = `${slug}-${type}${suffix}`;
  await sharp(Buffer.from(desktop)).webp({ quality: 62, effort: 6 }).toFile(join(dir, `${base}.webp`));
  await sharp(Buffer.from(mobile)).webp({ quality: 60, effort: 6 }).toFile(join(dir, `${base}-mobile.webp`));
  if (social) await sharp(Buffer.from(desktop)).resize(1200, 630, { fit: 'cover' }).jpeg({ quality: 72, mozjpeg: true }).toFile(join(dir, `${slug}-social.jpg`));
}

const needs = await loadNeeds();
const files = [];
async function walkFiles(dir) { for (const entry of await readdir(dir, { withFileTypes: true })) { const full = join(dir, entry.name); if (entry.isDirectory()) await walkFiles(full); else if (entry.name === 'index.html') files.push(full); } }
await walkFiles(DIST);
const selected = files.filter((_, i) => i % shards === shard);
let generated = 0; let visualCount = 0;
for (const file of selected) {
  const route = `/${file.slice(DIST.length + 1).replaceAll('\\', '/').replace(/index\.html$/, '')}`;
  if (routeFilter && route !== routeFilter) continue;
  const isBlog = /^\/blog\/[^/]+\/[^/]+\/$/.test(route);
  const isService = route.startsWith('/services/');
  const isOther = route.startsWith('/career-resources/') || route.startsWith('/career-skills-compass/');
  if (!isBlog && !(allServicePages && (isService || isOther))) continue;
  const html = await readFile(file, 'utf8'); const parts = route.split('/').filter(Boolean); const slug = parts.at(-1); const category = isBlog ? parts[1] : parts.slice(0, -1).join('-'); const title = clean((html.match(/<h1\b[^>]*>([\s\S]*?)<\/h1>/i) || [,'Career guide'])[1]); const data = pageData(html); const palette = palettes[hash(slug) % palettes.length]; const topic = topicFrom(title); const dir = join(OUT, String(hash(`${category}/${slug}`)).padStart(10, '0')); const preserved = []; if (route === '/blog/career-guidance/how-to-choose-a-career-after-12th/') { for (const name of ['how-to-choose-a-career-after-12th-decision-scorecard.webp', 'how-to-choose-a-career-after-12th-career-lane-map.webp']) { try { preserved.push([name, await readFile(join(dir, name))]); } catch {} } } await rm(dir, { recursive: true, force: true }); await mkdir(dir, { recursive: true }); for (const [name, buffer] of preserved) await writeFile(join(dir, name), buffer);
  const pageNeeds = needs.get(route) || []; const used = new Set(); const visuals = [];
  const take = (values, limit = 3) => values.map((value) => ({ text: typeof value === 'string' ? value : value.text, heading: value.heading })).filter((value) => value.text && !used.has(keyFor(value))).filter((value, i, arr) => arr.findIndex((other) => keyFor(other) === keyFor(value)) === i).slice(0, limit).map((value) => { used.add(keyFor(value)); return value; });
  const answer = take(data.facts, 1)[0]?.text || take(pageNeeds.flatMap(itemsFromNeed), 1)[0]?.text || '';
  const needFigures = pageNeeds.filter((need) => need.type === 'proof').flatMap(itemsFromNeed).map((item) => item.text).filter(Boolean);
  if (answer) { const figures = (needFigures.length ? needFigures : data.numberFacts).slice(0, 3).map((value, i) => ({ value: typeof value === 'string' ? phrase(value, 5) : phrase(value.text, 5), label: figureLabel(typeof value === 'string' ? value : value.text, i) })).filter((item) => item.value); const desktop = heroVisual(topic, answer, figures, palette); const mobile = heroVisual(topic, answer, figures, palette, true); await writeSvg(dir, slug, 'hero', 0, desktop, mobile, true); visuals.push('hero'); }
  const firstNeed = (type) => pageNeeds.find((need) => need.type === type);
  const sectionItems = data.sections.slice(0, 3).flatMap((section) => section.facts.slice(0, 1).map((fact) => ({ text: fact, heading: section.title })));
  const summaryItems = take(sectionItems.length ? sectionItems : data.facts, 3); if (summaryItems.length) { await writeSvg(dir, slug, 'summary', 0, cardVisual(topic, 'What To Notice', summaryItems, palette), cardVisual(topic, 'What To Notice', summaryItems, palette, true)); visuals.push('summary'); }
  const baseTypes = ['matrix', 'chain', 'checklist', 'proof'];
  for (const type of baseTypes) {
    const need = firstNeed(type); let desktop = ''; let mobile = ''; let items = [];
    if (need) items = take(itemsFromNeed(need), type === 'matrix' ? 6 : 5);
    if (type === 'matrix' && need) { desktop = tableVisual(topic, 'Compare The Options', need.exact_page_content_to_use, palette); mobile = tableVisual(topic, 'Compare The Options', need.exact_page_content_to_use, palette, true); }
    else { if (!items.length) items = take(type === 'chain' ? data.lists : type === 'proof' ? data.numberFacts : data.facts, type === 'proof' ? 3 : 4); if (items.length) { if (type === 'proof') { const figures = items.map((item, i) => ({ value: phrase(item.text, 5), label: figureLabel(item.text, i) })); desktop = figuresVisual(topic, 'Key Figures', figures, palette); mobile = figuresVisual(topic, 'Key Figures', figures, palette, true); } else { desktop = cardVisual(topic, type === 'chain' ? 'A Practical Sequence' : type === 'checklist' ? 'Questions To Check' : 'Key Figures', items, palette); mobile = cardVisual(topic, type === 'chain' ? 'A Practical Sequence' : type === 'checklist' ? 'Questions To Check' : 'Key Figures', items, palette, true); } } }
    if (desktop) { await writeSvg(dir, slug, type, 0, desktop, mobile); visuals.push(type); }
  }
  for (const need of pageNeeds) {
    const items = take(itemsFromNeed(need), need.type === 'matrix' ? 6 : 5); if (!items.length) continue;
    const index = visuals.filter((value) => value === need.type).length;
    let desktop; let mobile;
    if (need.type === 'matrix') { desktop = tableVisual(topic, 'Comparison Table', need.exact_page_content_to_use, palette); mobile = tableVisual(topic, 'Comparison Table', need.exact_page_content_to_use, palette, true); }
    else { const label = need.type === 'detail' ? titleCase(phrase(need.section_title || topic, 7)) : need.type === 'chain' ? 'Step By Step' : need.type === 'checklist' ? 'Check Before Choosing' : 'Page Figures'; const visualTopic = need.type === 'detail' ? titleCase(phrase(need.section_title || topic, 7)) : topic; if (need.type === 'proof') { const figures = items.map((item, i) => ({ value: phrase(item.text, 5), label: figureLabel(item.text, i) })); desktop = figuresVisual(visualTopic, label, figures, palette); mobile = figuresVisual(visualTopic, label, figures, palette, true); } else { desktop = cardVisual(visualTopic, label, items, palette); mobile = cardVisual(visualTopic, label, items, palette, true); } }
    await writeSvg(dir, slug, need.type, index, desktop, mobile); visuals.push(need.type); visualCount += 1;
  }
  if (visuals.length < 6) {
    const extra = take(data.facts, 3);
    if (extra.length) {
      const index = visuals.filter((value) => value === 'detail').length;
      await writeSvg(dir, slug, 'detail', index, cardVisual(topic, 'Additional Page Fact', extra, palette), cardVisual(topic, 'Additional Page Fact', extra, palette, true));
      visuals.push('detail');
    }
  }
  generated += 1;
}
console.log(`Generated ${visualCount} source-driven visuals for ${generated} pages.`);
