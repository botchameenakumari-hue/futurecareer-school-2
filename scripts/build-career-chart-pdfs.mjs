// Builds the downloadable career chart PDFs from src/config/careerChartAfter10th.mjs.
// Run: node scripts/build-career-chart-pdfs.mjs   (needs Playwright + Chromium; no network used)
// Output: public/downloads/career-charts/*.pdf
import { css, esc, brandHeader as shellHeader, renderPdfs } from './lib/pdf-shell.mjs';
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
const yrs = (r) => (r[0] === r[1] ? `${r[0]} yrs` : `${r[0]}–${r[1]} yrs`);


function brandHeader(title, subtitle) {
  return shellHeader(title, subtitle, CHART_META.lastChecked, CHART_META.siteUrl);
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

const items = PDF_FILES.map((pdf) => ({ title: pdf.title, out: resolve(outDir, pdf.file), body: pdf.overall ? overallBody() : streamBody(pdf), file: pdf.file }));
await renderPdfs(items, CHART_META.lastChecked);
const meta = {};
for (const it of items) {
  let pages = null;
  try { pages = Number(/Pages:\s+(\d+)/.exec(execFileSync('pdfinfo', [it.out]).toString())[1]); } catch {}
  meta[it.file] = { pages, kb: Math.round(statSync(it.out).size / 1024) };
  console.log('wrote', it.file, meta[it.file]);
}
writeFileSync(resolve(root, 'src/config/careerChartPdfMeta.json'), JSON.stringify(meta, null, 2) + '\n');
