// Builds the downloadable career chart after 12th PDFs from src/config/careerChartAfter12th.mjs.
// Run: CHROMIUM_PATH=/opt/pw-browsers/chromium node scripts/build-career-chart-after-12th-pdfs.mjs
// Output: public/downloads/career-charts/career-chart-after-12th-*.pdf and src/config/careerChart12PdfMeta.json
import { esc, brandHeader as shellHeader, renderPdfs } from './lib/pdf-shell.mjs';
import { mkdirSync, writeFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  CHART12_META as META, boardColumns, chartRows, scienceCards, commerceCards, artsCards,
  oddsBars, payBars, costRows, dateCards, resultPlans, PDF12_FILES,
} from '../src/config/careerChartAfter12th.mjs';
import { CHECKPOINTS, GATES } from '../src/config/careerChartAfter10th.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const outDir = resolve(root, 'public/downloads/career-charts');
mkdirSync(outDir, { recursive: true });


const header = (t, s) => shellHeader(t, s, META.lastChecked);
const ul = (items) => `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join('')}</ul>`;
const colors = { teal: '#0f9d8a', gold: '#b8860b', violet: '#6b46c1', blue: '#1f6feb', amber: '#b5651d' };

const columns = (cols) => `<div class="grid2">${cols.map((c) => `<div class="card" style="border-left-color:${colors[c.tone] || '#0f9d8a'}"><h3>${esc(c.head)} <span class="small">· ${esc(c.sub)}</span></h3>${ul(c.routes)}</div>`).join('')}</div>`;

const chartTable = (rows) => `<table><thead><tr><th>Route</th><th>Who can apply</th><th>Entry gate</th><th>Length</th><th>Pay signal</th><th>The catch</th></tr></thead><tbody>${rows
  .map((r) => `<tr><td><strong>${esc(r.route)}</strong></td><td>${esc(r.who)}</td><td>${esc(r.gate)}</td><td>${esc(r.length)}</td><td>${esc(r.money)}</td><td class="closes">${esc(r.catch)}</td></tr>`).join('')}</tbody></table>`;

const bars = (rows, withDetail) => `<div class="bars">${rows
  .map((b) => `<div class="brow"><div class="blab" style="width:190px">${esc(b.label)}</div><div class="btrack"><div class="bfill" style="width:${Math.max(b.pct, 2)}%;background:${colors[b.tone] || '#0f9d8a'}"></div></div><div class="bval" style="width:${withDetail ? 230 : 70}px"><strong>${esc(b.value)}</strong>${withDetail && b.detail ? `<br>${esc(b.detail)}` : ''}</div></div>`).join('')}</div>`;

const costTable = () => `<table><thead><tr><th>Seat</th><th>Fee</th><th>The maths</th><th>Budget rule (fee ÷ 0.10)</th></tr></thead><tbody>${costRows
  .map((r) => `<tr><td><strong>${esc(r.seat)}</strong></td><td>${esc(r.fee)}</td><td>${esc(r.math)}</td><td>${esc(r.budget)}</td></tr>`).join('')}</tbody></table>
  <p class="small">The budget rule is a strict planning heuristic: keep the total education cost near 10% of the money you can commit, and protect the rest as runway.</p>`;

const dates = (cards) => `<div class="grid2">${cards.map((d) => `<div class="card"><span class="tag" style="background:#0f9d8a">${esc(d.label)}</span><h3>${esc(d.title)}</h3><p>${esc(d.body)}</p></div>`).join('')}</div>`;

const plans = () => `<div class="grid2">${resultPlans.map((r) => `<div class="card" style="border-left-color:${colors[r.tone] || '#0f9d8a'}"><h3>${esc(r.title)}</h3>${ul(r.items)}</div>`).join('')}</div>`;

const checks = () => `<h2>Test every shortlisted route: 4 checkpoints, then 3 gates</h2><div class="chk">${[...CHECKPOINTS, ...GATES].map((c, i) => `<div><strong><span class="num">${i + 1}</span>${esc(c.title)}</strong><br>${esc(c.body)}</div>`).join('')}</div>`;

const plan = () => `<div class="plan"><h2>Your one-page plan</h2>${['Three routes I shortlisted:', 'The entry gate and date I verified, and where:', 'My second route if the exam goes badly:', 'One small real task I will finish this month:', 'Two people inside the route I will ask:']
  .map((l) => `<div class="small">${esc(l)}</div><div class="fill"></div>`).join('')}</div>`;

const cta = () => `<div class="note"><strong>Read this first:</strong> ${esc(META.disclaimer)}</div>
<div class="cta"><strong>The route is the base layer. The skill portfolio on top raises your ceiling.</strong><br>
Check your fit with the free career assessments: <a href="${META.testUrl}">${esc(META.testUrl.replace('https://', ''))}</a><br>
Personal help for you and your family: <a href="${META.guidanceUrl}">${esc(META.guidanceUrl.replace('https://', ''))}</a> · WhatsApp message from the site.<br>
Full guide with explanations: <a href="${META.pageUrl}">${esc(META.pageUrl.replace('https://', ''))}</a></div>`;

const pick = (rows, needles) => rows.filter((r) => needles.some((n) => r.route.toLowerCase().includes(n)));
const cardList = (cards) => cards.map((c) => `<div class="card"><h3>${esc(c.label ? `${c.label}: ${c.title}` : c.title)}</h3>${c.body ? `<p>${esc(c.body)}</p>` : ul(c.items)}</div>`).join('');

const sciNeedles = ['b.tech', 'bca', 'mbbs', 'nursing', 'defence', 'design'];
const comNeedles = ['bba', 'b.com', 'integrated law', 'design', 'bca'];
const artNeedles = ['integrated law', 'design', 'teacher', 'bba'];

const bodies = {
  overall: () => `${header('Career Chart After 12th: All Routes', 'Science, commerce and arts: entry gate, length, pay signal and the catch for each route')}
    <p class="lead">Compare three routes at a time. Read the entry gate and the catch before you read the pay. Pay figures are fresher averages from public profiles and vary widely by college and skill.</p>
    <h2>The chart at a glance</h2>${columns(boardColumns)}
    <h2>The full chart, row by row</h2>${chartTable(chartRows)}
    <h2>Seats against applicants</h2>${bars(oddsBars, true)}
    <h2>What the first year pays</h2>${bars(payBars.map((b) => ({ ...b, tone: 'teal' })), false)}
    <h2>What the seat costs</h2>${costTable()}
    <h2>Exam dates to note</h2>${dates(dateCards)}
    <h2>Read the chart by your exam result</h2>${plans()}
    ${checks()}${plan()}${cta()}`,
  science: () => `${header('Career Chart After 12th: Science', 'PCM, PCB and PCMB routes, seat odds, fee maths and a second plan')}
    <p class="lead">Science keeps the most doors open and has the scarcest seats. Write a second route before results, not after.</p>
    <h2>PCM and PCB at a glance</h2>${columns(boardColumns.filter((c) => c.head.startsWith('Science')))}
    <h2>How to read each science combination</h2>${cardList(scienceCards)}
    <h2>Science routes row by row</h2>${chartTable(pick(chartRows, sciNeedles))}
    <h2>Seats against applicants</h2>${bars(oddsBars, true)}
    <h2>What the seat costs</h2>${costTable()}
    <h2>Exam dates to note</h2>${dates(dateCards.filter((d) => /Engineering|Not announced/.test(d.label)))}
    <h2>Read the chart by your exam result</h2>${plans()}
    ${checks()}${plan()}${cta()}`,
  commerce: () => `${header('Career Chart After 12th: Commerce', 'With and without Maths: BBA, B.Com, CA, law and design routes')}
    <p class="lead">Commerce keeps business, finance, law and design open. Maths decides how many quantitative doors stay open.</p>
    <h2>Commerce at a glance</h2>${columns(boardColumns.filter((c) => c.head === 'Commerce'))}
    <h2>With and without Maths</h2>${cardList(commerceCards)}
    <h2>Commerce routes row by row</h2>${chartTable(pick(chartRows, comNeedles).concat(pick(chartRows, ['ca, cs'])))}
    <h2>What the first year pays</h2>${bars(payBars.map((b) => ({ ...b, tone: 'teal' })), false)}
    <h2>Exam dates to note</h2>${dates(dateCards.filter((d) => /Commerce|Law|Not announced/.test(d.label)))}
    ${checks()}${plan()}${cta()}`,
  arts: () => `${header('Career Chart After 12th: Arts and Humanities', 'Law, psychology, media, design and teaching, and the proof of work that pays')}
    <p class="lead">Arts is not the fallback stream. The risk is finishing the degree with nothing to show.</p>
    <h2>Arts at a glance</h2>${columns(boardColumns.filter((c) => c.head.startsWith('Arts')))}
    <h2>Three arts lanes</h2>${cardList(artsCards)}
    <h2>Arts-friendly routes row by row</h2>${chartTable(pick(chartRows, artNeedles))}
    <h2>Exam dates to note</h2>${dates(dateCards.filter((d) => /Law|Not announced/.test(d.label)))}
    ${checks()}${plan()}${cta()}`,
};

const items = PDF12_FILES.map((f) => ({ title: f.title, out: resolve(outDir, f.file), body: bodies[f.id](), file: f.file }));
await renderPdfs(items, META.lastChecked);
const meta = {};
for (const it of items) {
  let pages = null;
  try { pages = Number(/Pages:\s+(\d+)/.exec(execFileSync('pdfinfo', [it.out]).toString())[1]); } catch {}
  meta[it.file] = { pages, kb: Math.round(statSync(it.out).size / 1024) };
  console.log('wrote', it.file, meta[it.file]);
}
writeFileSync(resolve(root, 'src/config/careerChart12PdfMeta.json'), JSON.stringify(meta, null, 2) + '\n');
