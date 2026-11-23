// The printable and PDF version of the education loan EMI result. One document model feeds the print view
// and the PDF, so both show the same numbers as the screen. jsPDF is passed in by the caller after a
// dynamic import on click, so it is never loaded with the page.
import { createUnicodeText, flattenTexts, isUnicodeLine, needsUnicode, prepareUnicodeText } from './pdfUnicodeText.mjs';
import {
  ACCRUALS, CHECKED_ON, PAYOUTS, TOOL_URL, TREATMENTS, TREATMENT_ORDER, compareTreatments, fmtPct, fmtRsPlain, monthsText, savingSentence, shareNote,
} from './educationLoanEmi.mjs';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export function todayLabel(d = new Date()) {
  return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
}

export const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export const SCHEDULE_HEAD = ['Year', 'Stage', 'Paid out to you', 'Interest charged', 'You pay', 'Principal repaid', 'Owed at year end'];

export function scheduleRows(result) {
  return result.years.map((y) => [
    'Year ' + y.year,
    y.phase,
    y.disbursed > 0 ? fmtRsPlain(y.disbursed) : '-',
    fmtRsPlain(y.interestCharged),
    y.youPay > 0 ? fmtRsPlain(y.youPay) : '-',
    y.principalRepaid > 0 ? fmtRsPlain(y.principalRepaid) : '-',
    fmtRsPlain(y.balanceEnd),
  ]);
}

function inputRows(offer, shared) {
  const v = offer.values;
  const rows = [];
  if (v.label) rows.push(['Offer name or note', v.label]);
  rows.push(['Loan amount', fmtRsPlain(v.amount)]);
  rows.push(['Interest rate', v.rate + '% a year']);
  rows.push(['Course length', monthsText(Math.round(v.courseYears * 12))]);
  rows.push(['Money paid out', PAYOUTS[v.payout].label]);
  rows.push(['Moratorium after the course', monthsText(v.moratoriumMonths)]);
  rows.push(['Repayment period', monthsText(Math.round(v.tenureYears * 12))]);
  rows.push(['Interest before EMIs', TREATMENTS[v.treatment].label]);
  rows.push(['Unpaid interest', ACCRUALS[v.accrual]]);
  rows.push(['Processing fee', fmtRsPlain(v.fee)]);
  rows.push(['Insurance', fmtRsPlain(v.insurance)]);
  if (v.salary > 0) rows.push(['Starting in-hand salary a month', fmtRsPlain(v.salary)]);
  return rows;
}

function resultRows(r) {
  return [
    ['EMI each month', fmtRsPlain(r.emi) + ' for ' + monthsText(r.tenure)],
    ['First EMI', 'After ' + monthsText(r.preMonths) + ' (course plus moratorium)'],
    ['Interest charged before the EMIs', fmtRsPlain(r.interestAccrued) + ' (course ' + fmtRsPlain(r.interestCourse) + ', moratorium ' + fmtRsPlain(r.interestMoratorium) + '; you pay ' + fmtRsPlain(r.interestPaidPre) + ', added to loan ' + fmtRsPlain(r.capitalised) + ')'],
    ['Loan balance when EMIs start', fmtRsPlain(r.balanceAtStart)],
    ['Total interest', fmtRsPlain(r.totalInterest) + ' (' + fmtPct(r.interestShareOfLoan) + ' of the amount paid out)'],
    ['Total payable to the lender', fmtRsPlain(r.totalToLender)],
    ['Processing fee and insurance', fmtRsPlain(r.fees)],
    ['Total cost with fees', fmtRsPlain(r.totalCost)],
  ];
}

/** state = { offers: [{ name, raw, values, result }], shared, date } */
export function buildDoc(state) {
  const blocks = [];
  const two = state.offers.length > 1;
  blocks.push({
    t: 'title',
    text: two ? 'Education loan EMI estimate: two offers' : 'Education loan EMI estimate',
    sub: 'An estimate from the numbers you typed, made in your browser on ' + state.date + '. It is not a bank quote. Banks round and charge differently, so use the sanction letter for the real figures.',
  });
  state.offers.forEach((offer, idx) => {
    const tag = two ? 'Offer ' + offer.name : 'Your loan';
    blocks.push({ t: 'h', text: tag + ': inputs' });
    blocks.push({ t: 'meta', rows: inputRows(offer, state.shared) });
    blocks.push({ t: 'h', text: tag + ': result' });
    blocks.push({ t: 'meta', rows: resultRows(offer.result) });
    if (offer.result.emiShare != null) blocks.push({ t: 'p', text: shareNote(offer.result) });
    const cmp = compareTreatments(offer.values);
    blocks.push({ t: 'h', text: tag + ': what each way of treating the interest does' });
    blocks.push({
      t: 'table',
      head: ['Choice', 'You pay before EMIs', 'Balance at EMI start', 'EMI', 'Total interest', 'Total payable'],
      widths: [0.28, 0.14, 0.15, 0.13, 0.15, 0.15],
      align: ['l', 'r', 'r', 'r', 'r', 'r'],
      rows: cmp.rows.map((row) => [
        (row.selected ? 'Your choice: ' : '') + TREATMENTS[row.key].short,
        fmtRsPlain(row.result.interestPaidPre), fmtRsPlain(row.result.balanceAtStart), fmtRsPlain(row.result.emi), fmtRsPlain(row.result.totalInterest), fmtRsPlain(row.result.totalToLender),
      ]),
    });
    blocks.push({ t: 'p', text: savingSentence(offer.values, 'Rs ') });
    blocks.push({ t: 'h', text: tag + ': year by year' });
    blocks.push({ t: 'table', head: SCHEDULE_HEAD, widths: [0.09, 0.2, 0.14, 0.14, 0.14, 0.14, 0.15], align: ['l', 'l', 'r', 'r', 'r', 'r', 'r'], rows: scheduleRows(offer.result) });
    blocks.push({ t: 'note', text: 'Rounded to the nearest rupee, so a column can differ from its total by a rupee or two. Interest is worked month by month. Interest you pay before the EMIs start counts in "You pay".' });
    if (two && idx === 0 && state.offers.length > 1) blocks.push({ t: 'pagebreak' });
  });
  if (two) {
    const [a, b] = state.offers;
    const rowOf = (label, fa, fb, fn, lowerBetter) => {
      const va = fn(a.result), vb = fn(b.result);
      const diff = va - vb;
      return [label, fa(va), fb(vb), Math.abs(diff) < 0.5 ? 'Same' : fmtRsPlain(Math.abs(diff)) + (lowerBetter ? (diff < 0 ? ' lower in A' : ' lower in B') : '')];
    };
    const m = (x) => fmtRsPlain(x);
    blocks.push({ t: 'h', text: 'Offers side by side' });
    blocks.push({
      t: 'table',
      head: ['', 'Offer A', 'Offer B', 'Difference'],
      widths: [0.34, 0.22, 0.22, 0.22],
      align: ['l', 'r', 'r', 'l'],
      rows: [
        rowOf('EMI each month', m, m, (r) => r.emi, true),
        rowOf('Interest charged before EMIs', m, m, (r) => r.interestAccrued, true),
        rowOf('Balance when EMIs start', m, m, (r) => r.balanceAtStart, true),
        rowOf('Total interest', m, m, (r) => r.totalInterest, true),
        rowOf('Total payable to the lender', m, m, (r) => r.totalToLender, true),
        rowOf('Processing fee and insurance', m, m, (r) => r.fees, true),
        rowOf('Total cost with fees', m, m, (r) => r.totalCost, true),
        ['Months until the loan is cleared', monthsText(a.result.totalMonths), monthsText(b.result.totalMonths), ''],
      ],
    });
    blocks.push({ t: 'p', text: 'A lower total is not always better. A longer repayment period gives a lower EMI but more interest, and a lender with a higher fee can still cost less overall. Compare the sanction letters line by line.' });
  }
  blocks.push({ t: 'h', text: 'Rules to check before you rely on this' });
  blocks.push({
    t: 'list',
    title: 'Checked ' + CHECKED_ON,
    items: [
      'Moratorium and tenure: PM-Vidyalaxmi counts the moratorium as the course period plus one year and allows repayment up to 15 years after it. Other lenders differ, so use your sanction letter.',
      'Interest help: PM-Vidyalaxmi and the central interest subsidy have income limits, a list of institutions and a seat cap. Check eligibility on the official PM-Vidyalaxmi and Vidya Lakshmi pages.',
      'Tax: under the Income-tax Act 2025, section 129 (earlier section 80E) allows a deduction for education loan interest only if you choose the old tax regime. It is not allowed in the new regime. Check the current text or ask a tax professional.',
      'General information, not financial advice. Get the loan terms in writing.',
    ],
  });
  return { blocks, texts: flattenTexts(state.offers.map((o) => o.values.label)) };
}

export function modelToHtml(model) {
  const out = [];
  model.blocks.forEach((b) => {
    if (b.t === 'title') out.push('<div class="emi-doc-brand">FUTURECAREERSCHOOL</div><h2 class="emi-doc-title">' + esc(b.text) + '</h2>' + (b.sub ? '<p class="emi-doc-sub">' + esc(b.sub) + '</p>' : ''));
    else if (b.t === 'h') out.push('<h3 class="emi-doc-h">' + esc(b.text) + '</h3>');
    else if (b.t === 'p') out.push('<p class="emi-doc-p">' + esc(b.text) + '</p>');
    else if (b.t === 'note') out.push('<p class="emi-doc-note">' + esc(b.text) + '</p>');
    else if (b.t === 'meta') out.push('<table class="emi-doc-meta"><tbody>' + b.rows.map((r) => '<tr><th scope="row">' + esc(r[0]) + '</th><td>' + esc(r[1]) + '</td></tr>').join('') + '</tbody></table>');
    else if (b.t === 'list') out.push('<p class="emi-doc-listtitle">' + esc(b.title) + '</p><ul class="emi-doc-list">' + b.items.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul>');
    else if (b.t === 'pagebreak') out.push('<div class="emi-doc-break"></div>');
    else if (b.t === 'table') {
      out.push('<table class="emi-doc-table"><thead><tr>' + b.head.map((h, i) => '<th scope="col" class="' + (b.align[i] === 'r' ? 'r' : '') + '">' + esc(h) + '</th>').join('') + '</tr></thead><tbody>' +
        b.rows.map((row) => '<tr>' + row.map((c, i) => '<td class="' + (b.align[i] === 'r' ? 'r' : '') + '">' + esc(c) + '</td>').join('') + '</tr>').join('') + '</tbody></table>');
    }
  });
  return out.join('');
}

// ---------- PDF ----------

export function hasUnsupportedText(model) {
  return model.texts.some((t) => needsUnicode(t));
}
export function prepareUnicodePdf(model) {
  return prepareUnicodeText(model.texts);
}

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
  const put = (l, x, baseline, size, style, c) => {
    if (isImg(l)) uni.draw(l, x, baseline, size, style, c);
    else pdf.text(l, x, baseline);
  };
  const M = 14;
  const CW = 210 - M * 2;
  const BOTTOM = 297 - 18;
  const TEAL = [11, 118, 109];
  const INK = [28, 32, 38];
  const GREY = [96, 104, 112];
  const RULE = [150, 158, 166];
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
      need(30);
      font(8.5, 'bold'); color(TEAL); pdf.text('FUTURECAREERSCHOOL', M, y + 3); y += 7;
      font(19, 'bold'); color(INK); pdf.text(pdfText(b.text), M, y + 7); y += 11;
      if (b.sub) paragraph(b.sub, 10, 'normal', GREY, 5, M, CW);
      y += 2; rule(M, M + CW, y, TEAL, 0.6); y += 4;
    } else if (b.t === 'pagebreak') {
      pdf.addPage(); y = M;
    } else if (b.t === 'h') {
      need(30);
      y += 3;
      const ls = wrap(b.text, CW, 12, 'bold');
      color(TEAL); font(12, 'bold');
      ls.forEach((l) => { if (l) put(l, M, y + 4, 12, 'bold', TEAL); y += isImg(l) ? 7.5 : 6.5; });
      rule(M, M + CW, y, [200, 206, 210], 0.2); y += 2.5;
    } else if (b.t === 'p') {
      paragraph(b.text, 10, 'normal', INK, 5, M, CW); y += 1.5;
    } else if (b.t === 'meta') {
      b.rows.forEach((r) => {
        const label = pdfText(r[0]) + ':';
        font(9.5, 'bold');
        const valueX = M + 58;
        const val = wrap(r[1] || '', M + CW - valueX, 9.5, 'normal');
        const rows = Math.max(1, val.length);
        const step = val.some(isImg) ? 6.2 : 4.8;
        need(rows * step + 1.5);
        font(9.5, 'bold'); color(INK); pdf.text(label, M, y + 3.6);
        font(9.5, 'normal'); color(INK);
        val.forEach((l, i) => { if (l) put(l, valueX, y + 3.6 + i * step, 9.5, 'normal', INK); });
        y += rows * step + 1.2;
      });
      y += 1.5;
    } else if (b.t === 'list') {
      need(14);
      font(9.5, 'bold'); color(GREY); pdf.text(pdfText(b.title), M, y + 3.5); y += 6;
      b.items.forEach((item) => {
        const ls = wrap(item, CW - 6, 9.5, 'normal');
        ls.forEach((l, i) => { need(4.8); if (i === 0) { font(9.5, 'normal'); color(INK); pdf.text('-', M + 1, y + 3.6); } if (l) put(l, M + 6, y + 3.6, 9.5, 'normal', INK); y += isImg(l) ? 6.2 : 4.8; });
        y += 0.8;
      });
      y += 1;
    } else if (b.t === 'table') {
      const widths = b.widths.map((w) => w * CW);
      const pad = 1.5;
      const size = b.head.length >= 7 ? 8 : 8.8;
      const drawRow = (cells, header, minH) => {
        const wrapped = cells.map((c, i) => wrap(c, widths[i] - pad * 2, size, header ? 'bold' : 'normal'));
        const lh = 4;
        const h = Math.max(minH, Math.max(...wrapped.map((w) => Math.max(1, w.length))) * lh + pad * 2);
        if (y + h > BOTTOM) { pdf.addPage(); y = M; if (!header) drawRow(b.head, true, 7); }
        let x = M;
        cells.forEach((c, i) => {
          if (header) { pdf.setFillColor(226, 240, 238); pdf.rect(x, y, widths[i], h, 'F'); }
          pdf.setDrawColor(150, 158, 166); pdf.setLineWidth(0.2); pdf.rect(x, y, widths[i], h);
          color(INK); font(size, header ? 'bold' : 'normal');
          wrapped[i].forEach((l, j) => {
            if (!l) return;
            const base = y + pad + 2.9 + j * lh;
            if (isImg(l)) put(l, x + pad, base, size, header ? 'bold' : 'normal', INK);
            else if (b.align[i] === 'r') pdf.text(l, x + widths[i] - pad, base, { align: 'right' });
            else pdf.text(l, x + pad, base);
          });
          x += widths[i];
        });
        y += h;
      };
      need(8 + 9);
      drawRow(b.head, true, 7);
      b.rows.forEach((row) => drawRow(row, false, 6.5));
      y += 3;
    } else if (b.t === 'note') {
      y += 1;
      paragraph(b.text, 8.5, 'italic', GREY, 4.2, M, CW);
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
