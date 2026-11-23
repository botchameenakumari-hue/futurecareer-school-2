// Result sheet for the marks calculator. One document model feeds the screen preview, the print view and
// the PDF, so the three always match. No DOM access except in the PDF helpers.
import { createUnicodeText, flattenTexts, isUnicodeLine, needsUnicode, prepareUnicodeText } from './pdfUnicodeText.mjs';
import { ERROR_TEXT } from './marksTarget.mjs';

export const TOOL_URL = 'futurecareerschool.com/tools/marks-needed-to-reach-target-percentage/';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export function longDate(d = new Date()) {
  return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
}

export const LIMITS_TEXT =
  'This sheet is a calculation from numbers you typed. It is not a mark sheet, a certificate or an official result. Rules such as pass marks, grace marks, rounding and attendance limits come from your school, college or board, so check its official notice.';

export const TAB_TITLES = {
  need: 'Marks needed for a target percentage',
  overall: 'Overall percentage across subjects',
  att: 'Attendance: classes to attend or miss',
  board: 'Board exams: percentage of the best subjects',
  avg: 'Average and weighted average',
};
const FILE_NAMES = {
  need: 'marks-needed-for-target-percentage.pdf',
  overall: 'overall-percentage-across-subjects.pdf',
  att: 'attendance-percentage-sheet.pdf',
  board: 'board-best-subjects-percentage.pdf',
  avg: 'average-marks-sheet.pdf',
};

/** Plain-language error line for a failed calculation. */
export function errorLine(res) {
  if (!res || res.ok) return '';
  const base = ERROR_TEXT[res.error] || 'Check the numbers you typed.';
  const where = res.row ? 'Row ' + res.row + ': ' : '';
  if (res.error === 'weights-sum') return base + ' ' + res.sum + '.';
  if (res.error === 'few-subjects') return base + ' You asked for ' + res.need + ' and entered ' + res.have + '.';
  if (res.error === 'too-many-must') return base + ' ' + res.must + ' marked, ' + res.need + ' count.';
  return where + base;
}

function needBlocks(res) {
  const b = [];
  const modeText = res.mode === 'weights' ? 'Percent weights that add up to 100' : 'Marks simply add up (the out-of marks are the weights)';
  b.push({ t: 'meta', rows: [['Target overall percentage', res.target + '%'], ['How the parts combine', modeText]].concat(res.passText ? [['Pass mark in the remaining part', res.passText + '%']] : []) });
  b.push({
    t: 'table',
    head: ['Part', 'Marks scored', 'Out of', 'Weight', 'Points earned'],
    widths: [0.32, 0.17, 0.15, 0.16, 0.2],
    rows: res.parts.map((u) => [u.name, u.got === null ? 'To come' : u.gotText, u.maxText, res.mode === 'weights' ? u.weightText + '%' : u.maxText + ' marks', u.got === null ? '-' : u.pointsText]),
  });
  b.push({ t: 'h', text: 'Result' });
  if (res.status === 'all-done') {
    b.push({ t: 'meta', rows: [['Your overall percentage', res.overall + '%'], ['Against the target', res.met ? 'Target reached' : 'Short by ' + res.shortfall + ' points']] });
  } else if (res.status === 'not-possible') {
    b.push({ t: 'meta', rows: [['Can the target be reached?', 'No. The highest you can reach is ' + res.highest + '%'], ['Lowest you will end at', res.lowest + '% (0 in everything still to come)'], ['What the target would need', res.neededPercentOfRemaining + '% of the remaining parts, which is above 100%']] });
  } else {
    const rows = [];
    res.parts.filter((u) => u.got === null).forEach((u) => {
      rows.push(['Marks needed in ' + u.name, 'At least ' + u.neededMarks + ' out of ' + u.maxText + (u.neededWhole !== null && u.neededWhole !== u.neededMarks ? ' (' + u.neededWhole + ' in whole marks)' : '') + ', which is ' + u.neededPct + '% of that part']);
    });
    if (res.alreadyMet && !res.passBinds) rows.unshift(['Target', 'Already reached: even 0 in the remaining parts keeps you at ' + res.lowest + '%']);
    rows.push(['Overall if you score exactly that', res.overall + '%']);
    if (res.wholeOverall) rows.push(['Overall if you score the whole marks', res.wholeOverall + '%']);
    rows.push(['Lowest you could end at', res.lowest + '%'], ['Highest you could reach', res.highest + '%']);
    b.push({ t: 'meta', rows });
  }
  b.push({ t: 'list', title: 'Working', items: res.steps });
  b.push({ t: 'note', text: 'Marks you still need are rounded up, so the figure shown is always enough. Your school or college may add rules, for example a minimum in each part, so check its notice.' });
  return b;
}

function overallBlocks(res) {
  const b = [];
  b.push({
    t: 'table',
    head: res.method === 'weighted' ? ['Subject', 'Marks scored', 'Out of', 'Percent', 'Weight'] : ['Subject', 'Marks scored', 'Out of', 'Percent'],
    widths: res.method === 'weighted' ? [0.34, 0.17, 0.15, 0.17, 0.17] : [0.4, 0.2, 0.2, 0.2],
    rows: res.parts.slice().sort((a, c) => a.i - c.i).map((u) => {
      const row = [u.name, u.gotText, u.maxText, u.pctText + '%'];
      if (res.method === 'weighted') row.push(u.weightText);
      return row;
    }),
  });
  b.push({ t: 'h', text: 'Result' });
  const rows = [['Overall percentage', res.overall + '%'], ['Method', res.method === 'weighted' ? 'Weighted average of the subject percentages' : 'Total marks scored over total marks available (' + res.sumGot + ' of ' + res.sumMax + ')']];
  if (res.best.length) rows.push(['Biggest gain from 10 more points', res.best.map((x) => x.name + ' (overall +' + x.gain + ' points, to ' + x.newOverall + '%)').join('; ')]);
  else rows.push(['Biggest gain', 'Every subject is at full marks']);
  b.push({ t: 'meta', rows });
  b.push({
    t: 'table',
    head: ['Subject', 'Counts for', 'Marks available', 'Gain from +10 points', 'Gain at full marks'],
    widths: [0.3, 0.14, 0.18, 0.19, 0.19],
    rows: res.rows.map((r) => [r.name, r.share + '%', r.room, '+' + r.gainPlus10, '+' + r.gainFull]),
  });
  b.push({ t: 'p', text: 'Gains are in percentage points of the overall result. A +10 points rise means 10 more percent in that subject, stopping at full marks. The table is sorted with the biggest gain first.' });
  b.push({ t: 'list', title: 'Working', items: res.steps });
  return b;
}

function attBlocks(res) {
  const b = [];
  b.push({ t: 'meta', rows: [['Classes attended', res.attended], ['Classes held so far', res.held], ['Classes missed so far', res.missed], ['Attendance now', res.now + '%'], ['Target', res.target + '%']].concat(res.total ? [['Classes in the whole term', res.total]] : []) });
  b.push({ t: 'h', text: 'Result' });
  const rows = [];
  if (res.kind === 'attend') {
    rows.push(['What to do', 'Attend the next ' + res.more + ' classes in a row, without missing any'], ['Attendance after that', res.after + '%']);
  } else if (res.kind === 'miss') {
    rows.push(['What you can do', 'You can miss up to ' + res.miss + ' of the next classes and stay at or above the target'], ['Attendance if you miss that many', res.after + '%']);
  } else rows.push(['Result', 'A target of 100% cannot be reached again after a class is missed']);
  if (res.term) {
    if (res.term.possible) rows.push(['In the whole term', 'Attend at least ' + res.term.requiredAttended + ' classes in all, so ' + res.term.needMore + ' more of the ' + res.term.remaining + ' left. You can miss at most ' + res.term.canMiss + '.']);
    else rows.push(['In the whole term', 'Not possible. You need ' + res.term.needMore + ' more but only ' + res.term.remaining + ' classes are left. Attending all of them gives ' + res.term.bestFinish + '%.']);
  }
  b.push({ t: 'meta', rows });
  b.push({
    t: 'table',
    head: ['If the target were', 'What it would mean for you'],
    widths: [0.3, 0.7],
    rows: res.table.map((r) => [r.target + '%', r.text]),
  });
  b.push({ t: 'list', title: 'Working', items: res.steps });
  b.push({ t: 'note', text: 'Use the same unit your school or college uses, such as classes or days. Condonation (allowed relaxation) rules differ by institution, so ask yours in writing.' });
  return b;
}

function boardBlocks(res) {
  const b = [];
  b.push({ t: 'meta', rows: [['Subjects that count', String(res.count) + (res.mustCount ? ' (' + res.mustCount + ' marked must count)' : '')]] });
  b.push({
    t: 'table',
    head: ['Subject', 'Marks scored', 'Out of', 'Percent', 'Counted?'],
    widths: [0.34, 0.17, 0.14, 0.15, 0.2],
    rows: res.parts.map((u) => [u.name, u.got, u.max, u.pct + '%', u.counted ? (u.must ? 'Yes, must count' : 'Yes') : 'No']),
  });
  b.push({ t: 'h', text: 'Result' });
  b.push({ t: 'meta', rows: [['Percentage of the counted subjects', res.percent + '%'], ['Marks counted', res.gotCounted + ' out of ' + res.maxCounted], ['All subjects together, for comparison', res.percentAll + '%']] });
  b.push({ t: 'list', title: 'Working', items: res.steps });
  b.push({ t: 'note', text: 'The college, employer or board that asks for your percentage decides which subjects count. Match the number that count and the must count boxes to its notice.' });
  return b;
}

function avgBlocks(res) {
  const b = [];
  b.push({
    t: 'table',
    head: res.weighted ? ['Item', 'Value', 'Weight'] : ['Item', 'Value'],
    widths: res.weighted ? [0.5, 0.25, 0.25] : [0.65, 0.35],
    rows: res.parts.map((u) => (res.weighted ? [u.name, u.valueText, u.weightText] : [u.name, u.valueText])),
  });
  b.push({ t: 'h', text: 'Result' });
  const rows = [['How many values', String(res.n)], ['Total', res.sum], ['Average', res.average]];
  if (res.weighted) rows.push(['Weighted average', res.weightedAverage]);
  if (res.need) {
    if (res.need.status === 'already') rows.push(['Target average ' + res.need.target, 'Already reached, even with 0 in the ' + res.need.more + ' remaining tests']);
    else rows.push(['Target average ' + res.need.target, 'Average of at least ' + res.need.average + ' needed in each of the ' + res.need.more + ' remaining tests (they must add up to ' + res.need.total + ')']);
  }
  b.push({ t: 'meta', rows });
  b.push({ t: 'list', title: 'Working', items: res.steps });
  b.push({ t: 'note', text: 'The needed average assumes every test has the same maximum marks. If the maximum marks differ, use the overall percentage tab.' });
  return b;
}

/**
 * ctx: { tab, res, today }. The sheet shows the tab that is open, and a result only when it is valid.
 */
export function sheetModel(ctx) {
  const { tab, res, today } = ctx;
  const blocks = [];
  blocks.push({ t: 'title', text: TAB_TITLES[tab], sub: 'Made on ' + longDate(today) });
  let any = false;
  if (res && res.ok) {
    any = true;
    if (tab === 'need') needBlocks(res).forEach((x) => blocks.push(x));
    else if (tab === 'overall') overallBlocks(res).forEach((x) => blocks.push(x));
    else if (tab === 'att') attBlocks(res).forEach((x) => blocks.push(x));
    else if (tab === 'board') boardBlocks(res).forEach((x) => blocks.push(x));
    else if (tab === 'avg') avgBlocks(res).forEach((x) => blocks.push(x));
  } else if (res && res.error && res.error !== 'nothing-yet') {
    blocks.push({ t: 'p', text: 'No result yet. ' + errorLine(res) });
  } else {
    blocks.push({ t: 'p', text: 'No result yet. Enter your numbers in the calculator and the working appears here.' });
  }
  blocks.push({ t: 'h', text: 'Limits' });
  blocks.push({ t: 'note', text: LIMITS_TEXT });
  return { kind: 'sheet', tab, fileName: FILE_NAMES[tab], blocks, any };
}

export const esc = (v) =>
  String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function modelToHtml(model) {
  const out = [];
  model.blocks.forEach((b) => {
    if (b.t === 'title') {
      out.push('<header class="mt-doc-head"><p class="mt-doc-brand">FutureCareerSchool</p><h3 class="mt-doc-title">' + esc(b.text) + '</h3>' + (b.sub ? '<p class="mt-doc-sub">' + esc(b.sub) + '</p>' : '') + '</header>');
    } else if (b.t === 'meta') {
      out.push('<dl class="mt-meta">' + b.rows.map((r) => '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>').join('') + '</dl>');
    } else if (b.t === 'h') {
      out.push('<h4 class="mt-doc-h">' + esc(b.text) + '</h4>');
    } else if (b.t === 'p') {
      out.push('<p class="mt-doc-p">' + esc(b.text) + '</p>');
    } else if (b.t === 'list') {
      out.push('<div class="mt-field"><b>' + esc(b.title) + '</b><ol>' + b.items.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ol></div>');
    } else if (b.t === 'table') {
      out.push(
        '<div class="mt-tablewrap"><table class="mt-table"><thead><tr>' + b.head.map((h) => '<th scope="col">' + esc(h) + '</th>').join('') + '</tr></thead><tbody>' +
          b.rows.map((row) => '<tr>' + row.map((cell, i) => '<td data-label="' + esc(b.head[i]) + '">' + esc(cell) + '</td>').join('') + '</tr>').join('') +
          '</tbody></table></div>'
      );
    } else if (b.t === 'note') {
      out.push('<p class="mt-doc-note">' + esc(b.text) + '</p>');
    }
  });
  return out.join('');
}

// ---------- PDF ----------
export function hasUnsupportedText(model) {
  return flattenTexts(model).some((text) => needsUnicode(text));
}
export function prepareUnicodePdf(model) {
  return prepareUnicodeText(flattenTexts(model));
}

export function pdfText(value) {
  return String(value == null ? '' : value)
    .replace(/₹/g, 'Rs. ')
    .replace(/[‐-―−]/g, '-')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[•·]/g, '-')
    .replace(/…/g, '...')
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
  const put = (l, x, baseline, size, style, c) => {
    if (isImg(l)) uni.draw(l, x, baseline, size, style, c);
    else pdf.text(l, x, baseline);
  };
  const M = 16;
  const CW = 210 - M * 2;
  const BOTTOM = 297 - 18;
  const TEAL = [11, 118, 109];
  const INK = [28, 32, 38];
  const GREY = [96, 104, 112];
  let y = M;
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
  const need = (h) => { if (y + h > BOTTOM) { pdf.addPage(); y = M; } };
  const rule = (x1, x2, yy, c, w) => { pdf.setDrawColor(c[0], c[1], c[2]); pdf.setLineWidth(w || 0.25); pdf.line(x1, yy, x2, yy); };
  const paragraph = (text, size, style, c, baseLh, x, width) => {
    const ls = wrap(text, width || CW, size, style);
    const lh = ls.some(isImg) ? baseLh * 1.25 : baseLh;
    color(c); font(size, style);
    ls.forEach((l) => { need(lh); if (l) put(l, x == null ? M : x, y + lh * 0.75, size, style, c); y += lh; });
  };

  model.blocks.forEach((b) => {
    if (b.t === 'title') {
      need(26);
      font(8.5, 'bold'); color(TEAL); pdf.text('FUTURECAREERSCHOOL', M, y + 3); y += 7;
      const tl = wrap(b.text, CW, 17, 'bold');
      font(17, 'bold'); color(INK);
      tl.forEach((l) => { need(8); if (l) put(l, M, y + 6.5, 17, 'bold', INK); y += 8; });
      if (b.sub) paragraph(b.sub, 11, 'normal', GREY, 5.5, M, CW);
      y += 2; rule(M, M + CW, y, TEAL, 0.6); y += 5;
    } else if (b.t === 'meta') {
      b.rows.forEach((r) => {
        font(10, 'bold');
        const labelLines = wrap(r[0] + ':', 54, 10, 'bold');
        const valueX = M + 58;
        const val = wrap(r[1] || '', M + CW - valueX, 10, 'normal');
        const rows = Math.max(1, val.length, labelLines.length);
        const step = (val.some(isImg) || labelLines.some(isImg)) ? 6.2 : 5;
        need(rows * step + 2);
        labelLines.forEach((l, i) => { if (l) { font(10, 'bold'); color(INK); put(l, M, y + 3.8 + i * step, 10, 'bold', INK); } });
        val.forEach((l, i) => { if (l) { font(10, 'normal'); color(INK); put(l, valueX, y + 3.8 + i * step, 10, 'normal', INK); } });
        y += rows * step + 1.5;
      });
      y += 1.5;
    } else if (b.t === 'h') {
      need(34); y += 3;
      font(12, 'bold'); color(TEAL); pdf.text(pdfText(b.text), M, y + 4); y += 6.5;
      rule(M, M + CW, y, [200, 206, 210], 0.2); y += 2.5;
    } else if (b.t === 'p') {
      paragraph(b.text, 10, 'normal', INK, 5, M, CW); y += 1.5;
    } else if (b.t === 'list') {
      need(12);
      font(9.5, 'bold'); color(GREY); pdf.text(pdfText(b.title), M, y + 3.5); y += 6;
      b.items.forEach((item, n) => {
        const ls = wrap(item, CW - 8, 10, 'normal');
        const step = ls.some(isImg) ? 6.2 : 5;
        ls.forEach((l, i) => { need(step); if (i === 0) { font(10, 'normal'); color(INK); pdf.text((n + 1) + '.', M + 1, y + 3.8); } if (l) put(l, M + 8, y + 3.8, 10, 'normal', INK); y += step; });
        y += 0.8;
      });
      y += 1;
    } else if (b.t === 'table') {
      const widths = b.widths.map((w) => w * CW);
      const pad = 1.6;
      const size = 9;
      const drawRow = (cells, header) => {
        const wrapped = cells.map((c, i) => wrap(String(c), widths[i] - pad * 2, size, header ? 'bold' : 'normal'));
        const lh = wrapped.some((ls) => ls.some(isImg)) ? 5.4 : 4.2;
        const lines = Math.max(1, ...wrapped.map((ls) => ls.length));
        const h = lines * lh + pad * 2;
        if (y + h > BOTTOM) { pdf.addPage(); y = M; if (!header) drawRow(b.head, true); }
        let x = M;
        cells.forEach((c, i) => {
          if (header) { pdf.setFillColor(226, 240, 238); pdf.rect(x, y, widths[i], h, 'F'); }
          pdf.setDrawColor(150, 158, 166); pdf.setLineWidth(0.2); pdf.rect(x, y, widths[i], h);
          color(INK); font(size, header ? 'bold' : 'normal');
          wrapped[i].forEach((l, k) => { if (l) put(l, x + pad, y + pad + lh * 0.78 + k * lh, size, header ? 'bold' : 'normal', INK); });
          x += widths[i];
        });
        y += h;
      };
      need(18);
      drawRow(b.head, true);
      b.rows.forEach((row) => drawRow(row, false));
      y += 3;
    } else if (b.t === 'note') {
      y += 2;
      paragraph(b.text, 9, 'italic', GREY, 4.4, M, CW);
    }
  });

  const total = pdf.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    pdf.setPage(i);
    font(8, 'normal'); color(GREY);
    pdf.text(TOOL_URL, M, 297 - 9);
    pdf.text('Page ' + i + ' of ' + total, 210 - M, 297 - 9, { align: 'right' });
  }
  return pdf;
}
