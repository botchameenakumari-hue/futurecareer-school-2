// @ts-nocheck
// Document model, HTML preview and PDF builder for the career guidance booklet (after 10th and after 12th).
// One model feeds the on-screen preview, the print view and the PDF, so the three always match.
// The choosing logic and the route data live in src/data/careerGuidanceBooklet.mjs.
import {
  SCALE, SCALE_RULE, PAY_LINE, CHECKED_ON, CHART_LAST_CHECKED, OFFICIAL, labelFor, inr, checksFor, generalChecks, questionsFor, plan30,
  PRIORITY_NOTE12, PRIORITY_NOTE10, plan12, plan10, blankAnswers, SHORTLIST_SIZE,
  nextSteps, whatsappSummary, STATE_SITES, STATE_SITES_NOTE, stateSiteLine,
} from '../data/careerGuidanceBooklet.mjs';
import { createUnicodeText, flattenTexts, isUnicodeLine, needsUnicode, prepareUnicodeText } from './pdfUnicodeText.mjs';

export const STORAGE_PREFIX = 'fcs-career-guidance-booklet-v1-';
export const PAGE_URL = {
  after12: 'futurecareerschool.com/tools/career-guidance-after-12th-pdf/',
  after10: 'futurecareerschool.com/tools/career-guidance-after-10th-pdf/',
};
export const CHART_URL = { after12: 'futurecareerschool.com/blog/career-options/career-chart-after-12th/', after10: 'futurecareerschool.com/blog/stream-selection/career-chart-after-10th/' };
const STAGE_NAME = { after12: 'after 12th', after10: 'after 10th' };
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const fmtToday = (d = new Date()) => d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();

const NOTE_LIMITS =
  'This booklet is built from the answers you chose and from the FutureCareerSchool career chart. It is not a test, a score or a prediction, and it does not know your fees, dates or cut-offs. Check every rule, date and fee on the official site before you act.';

const MARK_KEY = [
  [SCALE.high.label, 'Skills and proof of work can grow your income and reach, so you are not limited by one employer or one exam.'],
  [SCALE.mid.label, 'A job or degree is the way in. Growth needs a business layer on top: consulting, a studio, a practice or a product.'],
  [SCALE.low.label, 'Growth is capped by seats, hours or one employer, and few reach the top. Write a second route and keep a skill growing beside it.'],
];

function bullets(items) { return items.filter(Boolean); }

function cardBlock(stage, c, answers, index) {
  const rows = [];
  if (c.reason) rows.push(['Why it is here', c.reason]);
  rows.push(['Why this mark', c.why]);
  rows.push(['Risk to read first', c.risk]);
  rows.push(['Basic sales and marketing step', c.grow]);
  if (stage === 'after12') {
    rows.push(['Length', c.length]);
    if (c.pay) rows.push(['Pay', c.pay + '. Pay varies by city, employer and skill.']);
    else if (c.payNote) rows.push(['Pay', c.payNote + ' See ' + CHART_URL.after12 + '.']);
    if (c.streamNote) rows.push(['Stream note', c.streamNote]);
  } else {
    rows.push(['Subjects', c.subjects]);
    rows.push(['Length', c.length]);
    rows.push(['Best for', c.bestFor]);
    rows.push(['First move', c.firstMove]);
  }
  const lists = [];
  if (stage === 'after10') {
    lists.push({ title: 'What it opens', items: c.opens });
    if (c.closes.length) lists.push({ title: 'What it closes', items: c.closes });
  }
  lists.push({ title: 'Checks to do', items: checksFor(stage, c, answers) });
  if (c.links.length) lists.push({ title: 'Official sites to open', items: c.links.map((l) => l.label + ': ' + l.url.replace(/^https:\/\//, '')) });
  return { t: 'card', n: index + 1, title: c.title, mark: c.scaleLabel, scale: c.scale, sub: c.fit, rows, lists };
}

function compactTable(items, withFit) {
  return {
    t: 'table', head: ['Route', 'Growth mark', 'Entry route in the chart'], widths: [0.34, 0.24, 0.42],
    rows: items.map((c) => [c.title, c.scaleLabel, c.gate]),
  };
}

function moneyBlocks(plan, stage) {
  const out = [{ t: 'h', text: 'Money check before you pay' }];
  out.push({ t: 'p', text: 'Our strongest suggestion: keep a course or degree fee near a tenth of the family education budget, and treat spending above roughly a fifth as a caution that needs course-specific evidence. This does not apply to very cheap online learning.' });
  const m = plan.money;
  if (m) {
    out.push({ t: 'p', text: 'An illustration, not a real fee: your budget band is ' + m.band + '. Taking ' + (m.atLeast ? 'Rs 25 lakh, the bottom of that band' : 'the top of the band') + ', a tenth is ' + inr(m.tenth) + ' and a fifth is ' + inr(m.fifth) + ' for the main course. Keep the rest for tools, practice and a reserve.' });
  } else {
    out.push({ t: 'p', text: 'You have not picked a budget band yet. Work out the family education budget with your parents, then take a tenth and a fifth of it.' });
  }
  if (plan.costly && plan.costly.length) {
    out.push({ t: 'list', title: 'Routes on your shortlist that the chart marks as costly', items: plan.costly.map((c) => c.title) });
  }
  out.push({ t: 'meta', rows: [['Total fee for my top route', ''], ['Family education budget', ''], ['Fee divided by budget', '']] });
  return out;
}

function worksheetBlocks(stage, routeNames) {
  const rows = [0, 1, 2].map((i) => [routeNames[i] || '', '', '', '']);
  const rows2 = [0, 1, 2].map((i) => [routeNames[i] || '', '', '', '']);
  return [
    { t: 'h', text: 'Route comparison worksheet' },
    { t: 'p', text: 'Fill in one row per route, using the official site for every fact. Leave a box empty if you have not found the answer yet.' },
    { t: 'table', head: ['Route', 'Total fee (from the official page)', 'Years', 'Entry exam or test, and the notice date I read'], widths: [0.26, 0.26, 0.12, 0.36], rows },
    { t: 'table', head: ['Route', 'Growth mark I gave it', 'What worries me', 'My second plan if it fails'], widths: [0.26, 0.2, 0.27, 0.27], rows: rows2 },
    { t: 'field', label: 'Which route would I try even if nobody approved? Why?', text: '', lines: 2 },
    { t: 'field', label: 'Which route do I want only because someone else wants it?', text: '', lines: 2 },
  ];
}

function questionBlocks(stage, plan) {
  const q = questionsFor(stage, plan);
  return [
    { t: 'h', text: 'Questions to ask' },
    { t: 'list', title: 'Ask your parents or family', items: q.parents },
    { t: 'list', title: 'Ask a teacher', items: q.teachers },
    { t: 'list', title: 'Ask a counsellor, mentor or someone who does the work', items: q.counsellors },
    { t: 'field', label: 'Answers and notes', text: '', lines: 3 },
  ];
}

function planBlocks(stage, plan) {
  const out = [{ t: 'h', text: '30-day plan' }, { t: 'p', text: 'Tick each step when it is done. The steps are described by what you finish, not by hours. If a step takes longer, carry it into the next block.' }];
  plan30(stage, plan).forEach((b) => {
    out.push({ t: 'list', title: b.when + ': ' + b.title, items: b.items.map((i) => '[ ] ' + i) });
  });
  return out;
}

function decisionBlocks() {
  return [
    { t: 'h', text: 'My decision', keep: 85 },
    { t: 'field', label: 'The route I choose for now', text: '', lines: 1 },
    { t: 'field', label: 'My second plan', text: '', lines: 1 },
    { t: 'field', label: 'One next step, with a date', text: '', lines: 1 },
    { t: 'field', label: 'Review date, and who I will review it with', text: '', lines: 1 },
    { t: 'sign', labels: ['Student, initials and date', 'Parent or teacher, initials and date'] },
  ];
}

function sourceBlocks(stage, plan) {
  const ids = new Set();
  const links = [];
  const take = (l) => { if (l && !ids.has(l.url)) { ids.add(l.url); links.push(l); } };
  if (plan && plan.shortlist) plan.shortlist.concat(plan.others || [], plan.checks || [], plan.addOn ? [plan.addOn] : []).forEach((c) => c.links.forEach(take));
  const out = [{ t: 'h', text: 'Where the facts come from' }];
  out.push({ t: 'p', text: 'Routes, entry rules, lengths and risks come from the FutureCareerSchool career chart ' + STAGE_NAME[stage] + ', last checked ' + CHART_LAST_CHECKED + ' (' + CHART_URL[stage] + '). Growth marks follow the FutureCareerSchool scalability rating. The official sites below were opened on ' + CHECKED_ON + '.' });
  if (links.length) out.push({ t: 'list', title: 'Official sites for the routes in this booklet', items: links.map((l) => l.label + ' (' + l.url.replace(/^https:\/\//, '') + '): ' + l.supports) });
  out.push({ t: 'p', text: PAY_LINE });
  out.push({ t: 'note', text: NOTE_LIMITS });
  return out;
}

function stateSiteBlocks() {
  return [
    { t: 'list', title: 'If you study in Andhra Pradesh or Telangana, also open', items: STATE_SITES.map(stateSiteLine) },
    { t: 'p', text: STATE_SITES_NOTE },
  ];
}

function markKeyBlock() {
  return [
    { t: 'h', text: 'How to read the growth marks' },
    { t: 'table', head: ['Mark', 'What it means'], widths: [0.3, 0.7], rows: MARK_KEY },
  ];
}

// ---------- the personal booklet ----------

export function bookletModel(stage, answers, today = fmtToday()) {
  const plan = stage === 'after10' ? plan10(answers) : plan12(answers);
  if (!plan.ready) return null;
  const a = plan.answers;
  const blocks = [];
  blocks.push({ t: 'title', text: 'Career guidance booklet', sub: 'Class ' + (stage === 'after10' ? '10' : '12') + ' pass: routes to compare, checks to make and a plan for 30 days' });
  const meta = [['Made for', a.name || ''], ['Made on', today]];
  if (stage === 'after12') meta.push(['Stream', plan.streamLabel]);
  else {
    meta.push(['Need to earn soon', labelFor.earn10(a.earn)]);
    meta.push(['What I enjoy', a.interests.length ? interestLabels(a.interests) : 'None picked']);
    meta.push(['Maths for two more years', labelFor.maths10(a.maths)]);
  }
  meta.push([stage === 'after10' ? 'Class 10 marks' : 'Class 12 marks', labelFor.marks(a.marks)]);
  meta.push(['Family education budget', labelFor.budget(a.budget)]);
  meta.push(['Where I live', labelFor.city(a.city)]);
  meta.push(['What matters most', (stage === 'after10' ? labelFor.pri10 : labelFor.pri12)(a.priority)]);
  blocks.push({ t: 'meta', rows: meta });
  if (a.worry && a.worry.trim()) blocks.push({ t: 'field', label: 'What worries me most', text: a.worry, lines: 2 });

  blocks.push({ t: 'h', text: 'Your next three steps' });
  blocks.push({ t: 'list', title: 'Start here, before you read the rest', items: nextSteps(stage, plan).map((st) => '[ ] By ' + st.by + ': ' + st.text) });

  blocks.push({ t: 'h', text: 'How to use this booklet' });
  blocks.push({ t: 'p', text: 'Read the shortlist, check each route on the official site, talk to people and finish the worksheet. Use the 30-day plan to turn it into one choice and a second plan.' });
  blocks.push({ t: 'p', text: 'Every route has a growth mark and the risk beside it. A mark describes a route, not you.' });
  blocks.push.apply(blocks, markKeyBlock());

  blocks.push({ t: 'h', text: 'Your shortlist' });
  blocks.push({ t: 'p', text: (stage === 'after10' ? PRIORITY_NOTE10 : PRIORITY_NOTE12)[a.priority] });
  if (stage === 'after12') {
    blocks.push({ t: 'p', text: 'Plan B check: your shortlist keeps at least ' + plan.safetyNeeded + (plan.safetyNeeded === 1 ? ' route that does' : ' routes that do') + ' not depend on one national rank. It holds ' + plan.safetyCount + '.' });
    if (plan.shortlist.some((c) => /^A well-known route/.test(c.reason || ''))) blocks.push({ t: 'p', text: 'A route marked as well known for your stream stays on the list even when its growth mark would rank it lower, so that you can read its risk.' });
  }
  blocks.push({ t: 'list', title: 'Checks for every route', items: generalChecks(stage, a) });
  if (stage === 'after12') blocks.push.apply(blocks, stateSiteBlocks());
  plan.shortlist.forEach((c, i) => blocks.push(cardBlock(stage, c, a, i)));
  if (stage === 'after10' && plan.addOn) {
    blocks.push({ t: 'h', text: 'Add this beside any route' });
    blocks.push(cardBlock(stage, plan.addOn, a, 0));
  }

  if (plan.others.length) {
    blocks.push({ t: 'h', text: stage === 'after12' ? 'Other routes open to your stream' : 'Other routes to know about' });
    blocks.push(compactTable(plan.others));
  }
  if (plan.checks && plan.checks.length) {
    blocks.push({ t: 'h', text: 'Routes to check college by college' });
    blocks.push({ t: 'p', text: 'The chart says these routes may be open to your stream in some colleges only, or only in part. Check each college.' });
    blocks.push(compactTable(plan.checks));
  }

  blocks.push.apply(blocks, moneyBlocks(plan, stage));
  blocks.push({ t: 'pagebreak' });
  blocks.push.apply(blocks, worksheetBlocks(stage, plan.shortlist.map((c) => c.title)));
  blocks.push.apply(blocks, questionBlocks(stage, plan));
  blocks.push.apply(blocks, planBlocks(stage, plan));
  blocks.push.apply(blocks, decisionBlocks());
  blocks.push.apply(blocks, sourceBlocks(stage, plan));
  return { kind: 'booklet', stage, fileName: 'career-guidance-booklet-' + STAGE_NAME[stage].replace(' ', '-') + '.pdf', blocks };
}

function interestLabels(ids) {
  return ids.map((id) => ({ mathsphysics: 'Maths and Physics', biology: 'Biology and living things', mathsbio: 'Both Maths and Biology', money: 'Money, markets and business', people: 'People, language, society or design', hands: 'Using tools and fixing things by hand', machines: 'Drawings, circuits, machines and systems' }[id] || id)).join('; ');
}

/** Short result for the screen and for WhatsApp: the routes, three dated steps and a plain-text version. */
export function quickResult(stage, answers, now = new Date()) {
  const plan = stage === 'after10' ? plan10(answers) : plan12(answers);
  if (!plan.ready) return null;
  return {
    routes: plan.shortlist.map((c) => ({ title: c.title, mark: c.scaleLabel, scale: c.scale, note: c.reason || '' })),
    steps: nextSteps(stage, plan, now),
    text: whatsappSummary(stage, plan, 'https://' + PAGE_URL[stage], now),
  };
}

// ---------- the blank worksheet (no personal inputs) ----------

export function blankModel(stage) {
  const stub = { answers: blankAnswers(stage), shortlist: [], others: [], checks: [] };
  const blocks = [];
  blocks.push({ t: 'title', text: 'Career guidance worksheet (blank)', sub: 'Class ' + (stage === 'after10' ? '10' : '12') + ' pass: fill it in by hand' });
  blocks.push({ t: 'meta', rows: stage === 'after10'
    ? [['Made for', ''], ['Date', ''], ['Class 10 marks', ''], ['What I enjoy', ''], ['Need to earn within 1 to 3 years?', ''], ['Family education budget', ''], ['Where I live', ''], ['What matters most to me', '']]
    : [['Made for', ''], ['Date', ''], ['Class 12 marks', ''], ['Stream I studied', ''], ['Family education budget', ''], ['Where I live', ''], ['What matters most to me', '']] });
  blocks.push({ t: 'field', label: 'What worries me most', text: '', lines: 2 });
  blocks.push.apply(blocks, markKeyBlock());
  blocks.push({ t: 'h', text: 'My shortlist of routes' });
  blocks.push({ t: 'p', text: 'Write up to five routes. Look each one up in the FutureCareerSchool career chart ' + STAGE_NAME[stage] + ' for its growth mark and risk, then check the rules on the official site.' });
  const rows = Array.from({ length: SHORTLIST_SIZE }, () => ['', '', '', '']);
  blocks.push({ t: 'table', head: ['Route', 'Growth mark', 'Risk to read first', 'Entry route'], widths: [0.26, 0.2, 0.28, 0.26], rows });
  blocks.push.apply(blocks, moneyBlocks({ money: null, costly: [] }, stage));
  blocks.push({ t: 'pagebreak' });
  blocks.push.apply(blocks, worksheetBlocks(stage, []));
  blocks.push.apply(blocks, questionBlocks(stage, { answers: stubAnswers(stage), shortlist: [] }));
  blocks.push.apply(blocks, planBlocks(stage, { answers: stubAnswers(stage), shortlist: [] }));
  blocks.push.apply(blocks, decisionBlocks());
  blocks.push({ t: 'h', text: 'Where the facts come from' });
  blocks.push({ t: 'p', text: 'Use the FutureCareerSchool career chart ' + STAGE_NAME[stage] + ' (' + CHART_URL[stage] + ') for routes, entry rules and risks, and the official site of each exam or college for dates, fees and eligibility. These official sites were opened on ' + CHECKED_ON + '.' });
  const ids = stage === 'after10' ? ['nios', 'dgt', 'nats', 'aicte', 'nta', 'icai'] : ['nta', 'cuet', 'josaa', 'clat', 'icai', 'upsc', 'nchm'];
  blocks.push({ t: 'list', title: 'Official sites', items: ids.map((k) => OFFICIAL[k].label + ' (' + OFFICIAL[k].url.replace(/^https:\/\//, '') + '): ' + OFFICIAL[k].supports) });
  if (stage === 'after12') blocks.push.apply(blocks, stateSiteBlocks());
  blocks.push({ t: 'p', text: PAY_LINE });
  blocks.push({ t: 'note', text: 'This worksheet holds no personal answers and is not a test or a score. Check every rule, date and fee on the official site before you act.' });
  return { kind: 'blank', stage, fileName: 'career-guidance-worksheet-' + STAGE_NAME[stage].replace(' ', '-') + '-blank.pdf', blocks };
}
function stubAnswers(stage) { return Object.assign(blankAnswers(stage), { stream: stage === 'after12' ? '' : undefined }); }

// ---------- HTML rendering (screen preview and print) ----------

export const esc = (v) =>
  String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function modelToHtml(model) {
  const out = [];
  model.blocks.forEach((b) => {
    if (b.t === 'title') {
      out.push('<header class="cgb-doc-head"><p class="cgb-doc-brand">FutureCareerSchool</p><h3 class="cgb-doc-title">' + esc(b.text) + '</h3>' + (b.sub ? '<p class="cgb-doc-sub">' + esc(b.sub) + '</p>' : '') + '</header>');
    } else if (b.t === 'meta') {
      out.push('<dl class="cgb-meta">' + b.rows.map((r) => '<div><dt>' + esc(r[0]) + '</dt><dd>' + (r[1] ? esc(r[1]) : '<span class="cgb-blank-line"></span>') + '</dd></div>').join('') + '</dl>');
    } else if (b.t === 'h') {
      out.push('<h4 class="cgb-doc-h">' + esc(b.text) + '</h4>');
    } else if (b.t === 'p') {
      out.push('<p class="cgb-doc-p">' + esc(b.text) + '</p>');
    } else if (b.t === 'field') {
      const body = b.text && b.text.trim() ? '<p class="cgb-doc-p cgb-pre">' + esc(b.text) + '</p>' : Array.from({ length: b.lines || 2 }, () => '<span class="cgb-rule"></span>').join('');
      out.push('<div class="cgb-field"><b>' + esc(b.label) + '</b>' + body + '</div>');
    } else if (b.t === 'list') {
      out.push('<div class="cgb-field"><b>' + esc(b.title) + '</b><ul>' + b.items.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul></div>');
    } else if (b.t === 'card') {
      out.push(
        '<section class="cgb-card cgb-card--' + esc(b.scale) + '"><h5 class="cgb-card-title"><span class="cgb-card-n">' + b.n + '</span> ' + esc(b.title) + '</h5>' +
          '<p class="cgb-card-mark"><span class="cgb-badge">' + esc(b.mark) + '</span>' + (b.sub ? ' <span class="cgb-card-sub">' + esc(b.sub) + '</span>' : '') + '</p>' +
          '<dl class="cgb-card-rows">' + b.rows.map((r) => '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>').join('') + '</dl>' +
          b.lists.map((l) => '<div class="cgb-field"><b>' + esc(l.title) + '</b><ul>' + l.items.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul></div>').join('') + '</section>'
      );
    } else if (b.t === 'table') {
      out.push(
        '<div class="cgb-tablewrap"><table class="cgb-table"><colgroup>' + b.widths.map((w) => '<col style="width:' + (w * 100).toFixed(1) + '%">').join('') + '</colgroup><thead><tr>' + b.head.map((h) => '<th scope="col">' + esc(h) + '</th>').join('') + '</tr></thead><tbody>' +
          b.rows.map((row) => '<tr>' + row.map((cell, i) => '<td data-label="' + esc(b.head[i]) + '"' + (cell ? '' : ' class="cgb-empty"') + '>' + (cell ? esc(cell) : '&nbsp;') + '</td>').join('') + '</tr>').join('') +
          '</tbody></table></div>'
      );
    } else if (b.t === 'sign') {
      out.push('<div class="cgb-sign">' + b.labels.map((l) => '<p><span class="cgb-sign-line"></span>' + esc(l) + '</p>').join('') + '</div>');
    } else if (b.t === 'note') {
      out.push('<p class="cgb-doc-note">' + esc(b.text) + '</p>');
    } else if (b.t === 'pagebreak') {
      out.push('<div class="cgb-pagebreak" aria-hidden="true"></div>');
    }
  });
  return out.join('');
}

// ---------- PDF ----------

export function hasUnsupportedText(model) { return flattenTexts(model).some((t) => needsUnicode(t)); }
export function prepareUnicodePdf(model) { return prepareUnicodeText(flattenTexts(model)); }

export function pdfText(value) {
  return String(value == null ? '' : value)
    .replace(/₹/g, 'Rs ')
    .replace(/[‐-―−]/g, '-')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[•·]/g, '-')
    .replace(/…/g, '...')
    .replace(/ /g, ' ')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\x20-\x7E\n]/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\r/g, '');
}

export function buildPdf(JsPDF, model, unicodeReady = false) {
  const pdf = new JsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  const uni = unicodeReady ? createUnicodeText(pdf) : null;
  const isImg = (l) => uni && isUnicodeLine(l);
  const put = (l, x, baseline, size, style, c) => { if (isImg(l)) uni.draw(l, x, baseline, size, style, c); else pdf.text(l, x, baseline); };
  const M = 16;
  const CW = 210 - M * 2;
  const TOP = 20;
  const BOTTOM = 297 - 18;
  const TEAL = [11, 98, 90];
  const INK = [20, 24, 30];
  const GREY = [84, 92, 100];
  const RULE = [130, 138, 146];
  let y = M;
  let started = false;

  const color = (c) => pdf.setTextColor(c[0], c[1], c[2]);
  const font = (size, style) => { pdf.setFont('helvetica', style || 'normal'); pdf.setFontSize(size); };
  const wrap = (text, width, size, style) => {
    font(size, style);
    const viaBrowser = uni && uni.wrap(text, width, size, style);
    if (viaBrowser) return viaBrowser;
    const out = [];
    pdfText(text).split('\n').forEach((part) => {
      if (!part.trim()) { out.push(''); return; }
      pdf.splitTextToSize(part.trim(), width).forEach((l) => out.push(l));
    });
    return out;
  };
  const newPage = () => { pdf.addPage(); y = TOP; };
  const need = (h) => { if (y + h > BOTTOM) newPage(); };
  const rule = (x1, x2, yy, c, w) => { pdf.setDrawColor(c[0], c[1], c[2]); pdf.setLineWidth(w || 0.25); pdf.line(x1, yy, x2, yy); };

  const paragraph = (text, size, style, c, lh0, x, width) => {
    const ls = wrap(text, width || CW, size, style);
    const lh = ls.some(isImg) ? lh0 * 1.25 : lh0;
    color(c); font(size, style);
    ls.forEach((l) => { need(lh); if (l) put(l, x == null ? M : x, y + lh * 0.75, size, style, c); y += lh; });
  };
  const labelled = (label, text, x0, width) => {
    // bold label on its own line, then the wrapped text
    need(11);
    font(9, 'bold'); color(GREY); pdf.text(pdfText(label).toUpperCase(), x0, y + 3.2); y += 4.4;
    paragraph(text, 9.5, 'normal', INK, 4.6, x0, width);
    y += 1;
  };
  const listItems = (items, x0, width) => {
    items.forEach((item) => {
      const ls = wrap(item, width - 5, 9.5, 'normal');
      const step = ls.some(isImg) ? 5.9 : 4.7;
      ls.forEach((l, i) => { need(step); if (i === 0) { font(9.5, 'normal'); color(INK); pdf.text('-', x0 + 0.5, y + 3.6); } if (l) put(l, x0 + 5, y + 3.6, 9.5, 'normal', INK); y += step; });
      y += 0.6;
    });
  };

  model.blocks.forEach((b) => {
    if (b.t === 'title') {
      need(30);
      font(8.5, 'bold'); color(TEAL); pdf.text('FUTURECAREERSCHOOL', M, y + 3); y += 7;
      font(21, 'bold'); color(INK); pdf.text(pdfText(b.text), M, y + 7); y += 11.5;
      if (b.sub) paragraph(b.sub, 11, 'normal', GREY, 5.5, M, CW);
      y += 2; rule(M, M + CW, y, TEAL, 0.7); y += 5;
    } else if (b.t === 'meta') {
      b.rows.forEach((r) => {
        const label = pdfText(r[0]) + (/[?:]$/.test(r[0]) ? '' : ':');
        font(10, 'bold');
        const valueX = Math.min(M + 92, Math.max(M + 50, M + pdf.getTextWidth(label) + 3));
        const val = wrap(r[1] || '', M + CW - valueX, 10, 'normal');
        const lblLines = pdf.splitTextToSize(label, valueX - M - 3);
        const rows = Math.max(1, val.length, lblLines.length);
        const step = val.some(isImg) ? 6.2 : 5;
        need(rows * step + 2);
        font(10, 'bold'); color(INK); lblLines.forEach((l, i) => pdf.text(l, M, y + 3.8 + i * step));
        font(10, 'normal'); color(INK);
        if (val.length && val.join('').replace(//g, '').trim()) val.forEach((l, i) => { if (l) put(l, valueX, y + 3.8 + i * step, 10, 'normal', INK); });
        else rule(valueX, M + CW, y + 4.2, RULE, 0.2);
        y += rows * step + 1.5;
      });
      y += 1.5;
    } else if (b.t === 'h') {
      need(b.keep || 30);
      y += 3;
      font(12.5, 'bold'); color(TEAL); pdf.text(pdfText(b.text), M, y + 4); y += 6.5;
      rule(M, M + CW, y, [170, 178, 184], 0.25); y += 2.5;
    } else if (b.t === 'p') {
      paragraph(b.text, 10, 'normal', INK, 5, M, CW); y += 1.5;
    } else if (b.t === 'field') {
      need(14);
      font(9.5, 'bold'); color(GREY); pdf.text(pdfText(b.label), M, y + 3.5); y += 6;
      if (b.text && b.text.trim()) { paragraph(b.text, 10, 'normal', INK, 5, M, CW); y += 1.5; }
      else { for (let i = 0; i < (b.lines || 2); i++) { need(8); rule(M, M + CW, y + 6, RULE, 0.2); y += 8; } y += 1; }
    } else if (b.t === 'list') {
      need(14);
      font(9.5, 'bold'); color(GREY); pdf.text(pdfText(b.title), M, y + 3.5); y += 6;
      listItems(b.items, M, CW);
      y += 1;
    } else if (b.t === 'card') {
      need(46);
      y += 2;
      rule(M, M + CW, y, TEAL, 0.5); y += 1.5;
      const titleLines = wrap(b.n + '. ' + b.title, CW, 12, 'bold');
      color(INK); font(12, 'bold');
      titleLines.forEach((l) => { need(6); if (l) put(l, M, y + 4.6, 12, 'bold', INK); y += 6; });
      need(8);
      font(9.5, 'bold'); color(TEAL);
      pdf.text('Growth mark: ' + pdfText(b.mark), M, y + 3.6);
      y += 5;
      if (b.sub) { font(9, 'normal'); color(GREY); pdf.text(pdfText(b.sub), M, y + 3.4); y += 5; }
      y += 0.5;
      b.rows.forEach((r) => labelled(r[0], r[1], M, CW));
      b.lists.forEach((l) => {
        need(14);
        font(9, 'bold'); color(GREY); pdf.text(pdfText(l.title).toUpperCase(), M, y + 3.2); y += 4.4;
        listItems(l.items, M, CW);
        y += 0.5;
      });
      y += 2;
    } else if (b.t === 'table') {
      const widths = b.widths.map((w) => w * CW);
      const pad = 1.6;
      const drawRow = (cells, header, minH) => {
        const wrapped = cells.map((c, i) => wrap(c, widths[i] - pad * 2, header ? 9 : 9.5, header ? 'bold' : 'normal'));
        const lh = wrapped.some((w) => w.some(isImg)) ? 5.4 : 4.4;
        const h = Math.max(minH, Math.max(...wrapped.map((w) => Math.max(1, w.length))) * lh + pad * 2);
        if (y + h > BOTTOM) { newPage(); if (!header) drawRow(b.head, true, 8); }
        let x = M;
        cells.forEach((c, i) => {
          if (header) { pdf.setFillColor(232, 236, 238); pdf.rect(x, y, widths[i], h, 'F'); }
          pdf.setDrawColor(130, 138, 146); pdf.setLineWidth(0.2); pdf.rect(x, y, widths[i], h);
          color(INK); font(header ? 9 : 9.5, header ? 'bold' : 'normal');
          wrapped[i].forEach((l, j) => { if (l) put(l, x + pad, y + pad + 3 + j * lh, header ? 9 : 9.5, header ? 'bold' : 'normal', INK); });
          x += widths[i];
        });
        y += h;
      };
      need(8 + 12);
      drawRow(b.head, true, 8);
      b.rows.forEach((row) => drawRow(row, false, row.every((c) => !c) || row.some((c) => !c) ? 11 : 9));
      y += 3;
    } else if (b.t === 'sign') {
      need(24);
      y += 9;
      const w = (CW - 12) / 2;
      b.labels.forEach((l, i) => {
        const x = M + i * (w + 12);
        rule(x, x + w, y, INK, 0.3);
        font(9, 'normal'); color(GREY); pdf.text(pdfText(l), x, y + 4.5);
      });
      y += 10;
    } else if (b.t === 'note') {
      y += 2;
      paragraph(b.text, 8.5, 'italic', GREY, 4.2, M, CW);
    } else if (b.t === 'pagebreak') {
      if (y > TOP + 4) newPage();
    }
    started = true;
  });

  const total = pdf.getNumberOfPages();
  const tool = model.stage === 'after10' ? PAGE_URL.after10 : PAGE_URL.after12;
  const running = (model.kind === 'blank' ? 'Career guidance worksheet ' : 'Career guidance booklet ') + STAGE_NAME[model.stage];
  for (let i = 1; i <= total; i++) {
    pdf.setPage(i);
    font(8, 'normal'); color(GREY);
    if (i > 1) { pdf.text(running, M, 11); pdf.text('FutureCareerSchool', 210 - M, 11, { align: 'right' }); rule(M, M + CW, 13, [190, 196, 202], 0.2); }
    rule(M, M + CW, 297 - 13, [190, 196, 202], 0.2);
    pdf.text(tool, M, 297 - 9);
    pdf.text('Page ' + i + ' of ' + total, 210 - M, 297 - 9, { align: 'right' });
  }
  return pdf;
}
