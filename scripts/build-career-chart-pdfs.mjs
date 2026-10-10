// Builds the downloadable career chart PDFs from src/config/careerChartAfter10th.mjs.
// Run: node scripts/build-career-chart-pdfs.mjs   (needs Playwright + Chromium; no network used)
// Output: public/downloads/career-charts/*.pdf
import { chromium } from 'playwright';
import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CHART_META, OFFICIAL_LINKS, ROUTES, ROUTE_FAMILIES, TIMELINE, TIMELINE_NOTE,
  FLOW, CHECKPOINTS, GATES, MISTAKES, PDF_FILES,
} from '../src/config/careerChartAfter10th.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = resolve(root, 'public/downloads/career-charts');
mkdirSync(outDir, { recursive: true });

const famColor = Object.fromEntries(ROUTE_FAMILIES.map((f) => [f.id, f.color]));
const famLabel = Object.fromEntries(ROUTE_FAMILIES.map((f) => [f.id, f.label]));
const routeById = Object.fromEntries(ROUTES.map((r) => [r.id, r]));
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const yrs = (r) => (r[0] === r[1] ? `${r[0]} yrs` : `${r[0]}–${r[1]} yrs`);

const css = `
@page { size: A4; margin: 14mm 13mm 18mm; }
* { box-sizing: border-box; }
body { font-family: 'Inter', 'Noto Sans', Arial, sans-serif; color: #17202e; font-size: 10.2px; line-height: 1.5; margin: 0; }
h1 { font-size: 24px; line-height: 1.2; margin: 0 0 4px; color: #0b1f3a; }
h2 { font-size: 14px; margin: 18px 0 7px; color: #0b1f3a; border-bottom: 2px solid #0f9d8a; padding-bottom: 3px; break-after: avoid; }
h3 { font-size: 11.6px; margin: 0 0 3px; color: #0b1f3a; }
p { margin: 0 0 5px; }
.brand { display:flex; justify-content:space-between; align-items:flex-end; border-bottom: 3px solid #0b1f3a; padding-bottom: 8px; margin-bottom: 10px; }
.wordmark { font-weight: 800; font-size: 12px; letter-spacing: .04em; color:#0f9d8a; text-transform: uppercase; }
.sub { color:#4b5a6d; font-size: 11px; margin-top: 2px; }
.stamp { text-align:right; font-size: 9px; color:#4b5a6d; }
.lead { font-size: 11px; margin: 6px 0 4px; }
.card { border: 1px solid #d5dce6; border-left-width: 5px; border-radius: 6px; padding: 8px 10px; margin: 0 0 8px; break-inside: avoid; background:#fff; }
.card .tag { display:inline-block; font-size: 8.5px; font-weight: 800; letter-spacing:.06em; text-transform: uppercase; color:#fff; padding: 1px 6px; border-radius: 9px; margin-bottom: 3px; }
.grid2 { display:grid; grid-template-columns: 1fr 1fr; gap: 0 14px; }
.lbl { font-weight: 800; font-size: 8.6px; letter-spacing:.06em; text-transform: uppercase; color:#4b5a6d; margin-top: 4px; }
ul { margin: 2px 0 3px; padding-left: 14px; } li { margin: 0 0 1.5px; }
.closes { color:#8a2b2b; }
table { width:100%; border-collapse: collapse; font-size: 9.2px; }
th { background:#0b1f3a; color:#fff; text-align:left; padding: 4px 6px; font-size: 8.6px; letter-spacing:.04em; text-transform: uppercase; }
td { border-bottom: 1px solid #dfe5ee; padding: 4px 6px; vertical-align: top; }
tr { break-inside: avoid; }
.swatch { display:inline-block; width:8px; height:8px; border-radius:2px; margin-right:5px; }
.flow { margin: 4px 0 6px; }
.fnode { border: 2px solid #0b1f3a; border-radius: 7px; padding: 5px 9px; background:#eef3fa; font-weight:700; display:inline-block; max-width: 100%; }
.fopts { margin: 0 0 0 16px; padding-left: 12px; border-left: 2px solid #9fb0c7; }
.fopt { margin: 7px 0 0; position: relative; }
.fopt::before { content:''; position:absolute; left:-12px; top:11px; width:12px; border-top: 2px solid #9fb0c7; }
.farrow { font-weight: 700; color:#0f6b5e; margin-right: 6px; }
.fterm { display:inline-block; color:#fff; border-radius: 7px; padding: 3px 9px; font-weight: 700; }
.fterm small { font-weight: 400; opacity:.92; margin-left: 5px; }
.bars { margin: 6px 0; break-inside: avoid; }
.flow-wrap { font-size: 11px; }
.plan { break-inside: avoid; }
.brow { display:flex; align-items:center; margin: 0 0 5px; break-inside: avoid; }
.blab { width: 150px; font-weight:700; font-size: 9.3px; padding-right: 8px; }
.btrack { flex:1; position:relative; height: 16px; background: repeating-linear-gradient(90deg, #f3f6fa 0, #f3f6fa calc(12.5% - 1px), #d9e0ea calc(12.5% - 1px), #d9e0ea 12.5%); border-radius: 3px; }
.bfill { position:absolute; left:0; top:0; height:100%; border-radius: 3px; }
.bext { position:absolute; top:4px; height:8px; opacity:.38; border-radius: 0 3px 3px 0; }
.bval { width: 150px; font-size: 8.6px; color:#4b5a6d; padding-left: 8px; }
.axis { display:flex; margin-left:150px; margin-right:150px; font-size:8px; color:#6b7788; justify-content: space-between; }
.note { background:#fff8e1; border:1px solid #ecd48a; border-radius:6px; padding:6px 9px; font-size: 9.4px; margin: 8px 0; break-inside: avoid; }
.chk { display:grid; grid-template-columns: repeat(2, 1fr); gap: 6px 10px; }
.chk div { border: 1px solid #d5dce6; border-radius: 6px; padding: 6px 8px; break-inside: avoid; }
.num { display:inline-block; width:16px; height:16px; line-height:16px; text-align:center; border-radius:50%; background:#0f9d8a; color:#fff; font-weight:800; font-size: 9px; margin-right: 5px; }
.fill { border-bottom: 1px solid #9fb0c7; height: 17px; margin-bottom: 2px; }
.cta { background:#0b1f3a; color:#fff; border-radius:8px; padding: 10px 14px; margin-top: 12px; break-inside: avoid; }
.cta a, .cta strong { color:#7ff0dc; }
a { color:#0f6b5e; text-decoration: none; }
.small { font-size: 8.8px; color:#4b5a6d; }
`;

function brandHeader(title, subtitle) {
  return `<div class="brand"><div><div class="wordmark">Future Career School</div><h1>${esc(title)}</h1><div class="sub">${esc(subtitle)}</div></div>
  <div class="stamp">Last checked ${esc(CHART_META.lastChecked)}<br>${esc(CHART_META.siteUrl.replace('https://', ''))}</div></div>`;
}

function flowNode(id, depth = 0) {
  if (FLOW.terminals[id]) {
    const r = routeById[FLOW.terminals[id]];
    return `<span class="fterm" style="background:${famColor[r.family]}">${esc(r.label)}<small>${esc(yrs(r.yearsToWork))} to work</small></span>`;
  }
  const n = FLOW.nodes[id];
  const opts = n.options
    .map((o) => `<div class="fopt"><span class="farrow">${esc(o.label)} →</span> ${flowNode(o.to, depth + 1)}</div>`)
    .join('');
  return `<div class="flow"><span class="fnode">${esc(n.question)}</span><div class="fopts">${opts}</div></div>`;
}

function barsHtml(rows) {
  const max = 8;
  const axis = [0, 1, 2, 3, 4, 5, 6, 7, 8].map((n) => `<span>${n}</span>`).join('');
  const body = rows
    .map((t) => {
      const c = famColor[t.family];
      const w = (t.from / max) * 100;
      const ext = t.to > t.from ? `<div class="bext" style="left:${w}%;width:${((t.to - t.from) / max) * 100}%;background:${c}"></div>` : '';
      const val = t.to > t.from ? `${t.from} to ${t.to} yrs` : `${t.from} yrs`;
      return `<div class="brow"><div class="blab">${esc(t.label)}</div><div class="btrack"><div class="bfill" style="width:${w}%;background:${c}"></div>${ext}</div><div class="bval"><strong>${val}</strong><br>${esc(t.note)}</div></div>`;
    })
    .join('');
  return `<div class="bars">${body}<div class="axis">${axis}</div></div><p class="small">${esc(TIMELINE_NOTE)}</p>`;
}

function routeCard(r) {
  const c = famColor[r.family];
  const opens = r.opens.map((x) => `<li>${esc(x)}</li>`).join('');
  const closes = r.closes.length ? `<div class="lbl closes">What it closes</div><ul class="closes">${r.closes.map((x) => `<li>${esc(x)}</li>`).join('')}</ul>` : '';
  return `<div class="card" style="border-left-color:${c}">
    <span class="tag" style="background:${c}">${esc(famLabel[r.family])}</span>
    <h3>${esc(r.label)} <span class="small">· ${esc(r.length)} · about ${esc(yrs(r.yearsToWork))} to first full-time work</span></h3>
    <p class="small">${esc(r.short)}</p>
    <div class="grid2"><div>
      <div class="lbl">Entry</div><p>${esc(r.gate)}</p>
      <div class="lbl">Best for</div><p>${esc(r.bestFor)}</p>
      <div class="lbl">Watch out</div><p>${esc(r.watchOut)}</p>
    </div><div>
      <div class="lbl">What it keeps open</div><ul>${opens}</ul>
      ${closes}
      <div class="lbl">First move this month</div><p>${esc(r.firstMove)}</p>
    </div></div></div>`;
}

function checksHtml() {
  const cp = CHECKPOINTS.map((c, i) => `<div><strong><span class="num">${i + 1}</span>${esc(c.title)}</strong><br>${esc(c.body)}</div>`).join('');
  const gt = GATES.map((c, i) => `<div><strong><span class="num">${i + 1}</span>${esc(c.title)}</strong><br>${esc(c.body)}</div>`).join('');
  return `<h2>Test every route you shortlist: the 4 checkpoints</h2><div class="chk">${cp}</div>
  <h2>Then pass the 3 gates before money or years are locked in</h2><div class="chk">${gt}</div>`;
}

function planHtml() {
  const lines = ['Route I am leaning toward:', 'Second route I would accept:', 'Subjects or trade I need for it:', 'The exam or entry rule I verified, and where:', 'One small real task I will finish this month:', 'The person I will ask for feedback:']
    .map((l) => `<div class="small">${esc(l)}</div><div class="fill"></div>`).join('');
  return `<div class="plan"><h2>Your one-page plan (write it, do not just read it)</h2>${lines}</div>`;
}

function linksHtml(filterFamilies) {
  const rows = OFFICIAL_LINKS.map((l) => `<tr><td><strong>${esc(l.label)}</strong></td><td>${esc(l.use)}</td><td><a href="${l.url}">${esc(l.url.replace('https://', ''))}</a></td></tr>`).join('');
  return `<h2>Verify on the official source before you pay</h2><table><thead><tr><th>Source</th><th>Use it for</th><th>Link</th></tr></thead><tbody>${rows}</tbody></table>`;
}

function ctaHtml() {
  return `<div class="note"><strong>Read this first:</strong> ${esc(CHART_META.disclaimer)}</div>
  <div class="cta"><strong>The route is the base layer. The skill portfolio on top raises your ceiling.</strong><br>
  Find your strongest direction with the free Class 10 and below career assessment: <a href="${CHART_META.testUrl}">${esc(CHART_META.testUrl.replace('https://', ''))}</a><br>
  Personal help for you and your family: <a href="${CHART_META.guidanceUrl}">${esc(CHART_META.guidanceUrl.replace('https://', ''))}</a> · WhatsApp message from the site.<br>
  Full guide with explanations: <a href="${CHART_META.pageUrl}">${esc(CHART_META.pageUrl.replace('https://', ''))}</a></div>`;
}

function overallBody() {
  const rows = ROUTES.map((r) => `<tr><td><span class="swatch" style="background:${famColor[r.family]}"></span><strong>${esc(r.label)}</strong><br><span class="small">${esc(r.length)}</span></td>
    <td>${esc(r.opens.slice(0, 3).join('; '))}</td><td class="closes">${esc(r.closes.length ? r.closes.join('; ') : 'Nothing by itself')}</td><td><strong>${esc(yrs(r.yearsToWork))}</strong></td></tr>`).join('');
  return `${brandHeader('Career Chart After 10th: All Routes', 'Every route open after Class 10 in India, on a few pages you can print and keep')}
  <p class="lead">Start at the top question. Follow the arrows to a first lean, then test that route with the checks on the last pages. Your route sets which doors open; the skill you build on top decides how high your income can go.</p>
  <h2>Step 1 · Follow the decision flow</h2><div class="flow-wrap">${flowNode(FLOW.start)}</div>
  <p class="small">${esc(FLOW.note)}</p>
  <div class="note"><strong>Colour key:</strong> ${ROUTE_FAMILIES.map((f) => `<span class="swatch" style="background:${f.color}"></span>${esc(f.label)} (${esc(f.note)})`).join(' &nbsp; ')}<br><strong>Years to work</strong> counts from the day Class 10 ends to the earliest standard full-time start. It shows time, not pay.</div>
  <h2 style="break-before: page">Step 2 · How long until first full-time work</h2>${barsHtml(TIMELINE)}
  <h2>Step 3 · The chart: every route at a glance</h2>
  <table><thead><tr><th>Route</th><th>What it keeps open</th><th>What it closes</th><th>Years to work</th></tr></thead><tbody>${rows}</tbody></table>
  <h2>Step 4 · Route cards: entry, fit, watch-outs and a first move</h2>
  ${ROUTES.map(routeCard).join('')}
  <h2>Five mistakes to avoid</h2><ul>${MISTAKES.map((m) => `<li><strong>${esc(m.title)}.</strong> ${esc(m.body)}</li>`).join('')}</ul>
  ${checksHtml()}${planHtml()}${linksHtml()}${ctaHtml()}`;
}

const STREAM_INTRO = {
  science: 'Science is the widest technical and medical gateway, and also the hardest to reverse: Maths and Biology can only be dropped, never added later. Pick the combination for the work you want to do, not for the label.',
  commerce: 'Commerce leads to business, accounting, finance and analytics. The Maths decision is the one to take slowly, because it decides how many quantitative doors stay open.',
  arts: 'Arts and humanities lead to law, psychology, design, media, teaching and civil services. They reward visible work: a degree with no portfolio or writing is the main risk.',
  'diploma-iti': 'Diploma, ITI and open schooling start earning or technical learning sooner. They work when the institute is verified and when skills keep being added after the certificate.',
};

function streamBody(pdf) {
  const routes = ROUTES.filter((r) => pdf.families.includes(r.family));
  const key = pdf.id;
  const tl = TIMELINE.filter((t) => pdf.families.includes(t.family) || (key === 'science' && t.label.includes('B.Tech')) || (key === 'commerce' && t.label.includes('3-year')));
  const fams = pdf.families.map((f) => famLabel[f]).join(' and ');
  return `${brandHeader(pdf.title, `${fams}: routes, what each opens and closes, and your next move`)}
  <p class="lead">${esc(STREAM_INTRO[key])}</p>
  <h2>The routes in this chart</h2>
  ${routes.map(routeCard).join('')}
  <h2>Time to first full-time work</h2>${barsHtml(tl.length ? tl : TIMELINE.slice(0, 3))}
  <h2>Five mistakes to avoid</h2><ul>${MISTAKES.map((m) => `<li><strong>${esc(m.title)}.</strong> ${esc(m.body)}</li>`).join('')}</ul>
  ${checksHtml()}${planHtml()}${linksHtml()}${ctaHtml()}
  <p class="small">Compare with the other routes in <a href="${CHART_META.pageUrl}">the full career chart after 10th</a>.</p>`;
}

const footer = `<div style="font-size:8px;width:100%;padding:0 13mm;color:#6b7788;display:flex;justify-content:space-between;font-family:Inter,Arial,sans-serif">
<span>Future Career School · futurecareerschool.com · Last checked ${CHART_META.lastChecked}</span><span>Page <span class="pageNumber"></span> of <span class="totalPages"></span></span></div>`;

const meta = {};
const browser = await chromium.launch({ executablePath: process.env.CHROMIUM_PATH || undefined });
const page = await browser.newPage();
for (const pdf of PDF_FILES) {
  const body = pdf.overall ? overallBody() : streamBody(pdf);
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${esc(pdf.title)}</title><style>${css}</style></head><body>${body}</body></html>`;
  await page.setContent(html, { waitUntil: 'load' });
  const out = resolve(outDir, pdf.file);
  await page.pdf({ path: out, format: 'A4', printBackground: true, displayHeaderFooter: true, headerTemplate: '<span></span>', footerTemplate: footer, margin: { top: '14mm', bottom: '18mm', left: '13mm', right: '13mm' } });
  let pages = null;
  try { pages = Number(/Pages:\s+(\d+)/.exec(execFileSync('pdfinfo', [out]).toString())[1]); } catch {}
  meta[pdf.file] = { pages, kb: Math.round(statSync(out).size / 1024) };
  console.log('wrote', pdf.file, meta[pdf.file]);
}
await browser.close();
writeFileSync(resolve(root, 'src/config/careerChartPdfMeta.json'), JSON.stringify(meta, null, 2) + '\n');
