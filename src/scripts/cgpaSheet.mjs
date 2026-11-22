// Result sheet for the CGPA to percentage calculator. One document model feeds the screen preview,
// the print view and the PDF, so the three always match. No DOM access except in the PDF helpers.
import { createUnicodeText, flattenTexts, isUnicodeLine, needsUnicode, prepareUnicodeText } from './pdfUnicodeText.mjs';
import { formulaText, CHECKED_ON } from './cgpaConverter.mjs';

export const TOOL_URL = 'futurecareerschool.com/tools/cgpa-to-percentage-calculator/';
export const CBSE_URL = 'https://www.cbse.gov.in/circulars/cir24-2010.pdf';

const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
export function longDate(d = new Date()) {
  return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
}

export const SOURCE_TEXT = {
  indicative:
    'CBSE circular 24/2010 (' + CBSE_URL + '). Its listing reads "Subject wise indicative percentage of marks = 9.5 x GP of ..." and was seen on ' + CHECKED_ON + '. The circular text could not be opened, so open it and read the exact wording before you rely on the factor 9.5.',
  generic: 'Plain arithmetic used by many institutions. It is not the rule of any one board or university, so check the notice your own university publishes.',
  proportion: 'A plain share of the top grade, not an official conversion. Foreign universities and credential evaluators apply their own rules.',
  custom: 'Typed in by the person who made this sheet. Copy the formula from your university\'s own notice and keep the notice with this sheet.',
};

export const WARNING_TEXT =
  'For job, abroad or higher study applications, use the wording on your university certificate or ask your university for its official conversion. This sheet is a calculation from numbers you typed. It is not a certificate and it does not replace your university\'s rule.';


/**
 * ctx: { rule, today, ruleNote, c2p, p2c, sg, need }
 * c2p: { input, res }   p2c: { input, res }   sg: { rows, top, res }   need: { inputs, res }
 * A section appears only when its result is valid.
 */
export function sheetModel(ctx) {
  const { rule, today } = ctx;
  const blocks = [];
  blocks.push({ t: 'title', text: 'CGPA and percentage result sheet', sub: 'Made on ' + longDate(today) });
  const sourceStatus = rule.sourceStatus;
  blocks.push({
    t: 'meta',
    rows: [
      ['Rule used', rule.label],
      ['Formula', formulaText(rule)],
      ['Top of the grade scale', String(rule.scaleMax)],
      ['Rounding', 'Half up, 2 decimal places'],
    ].concat(sourceStatus === 'custom' && ctx.ruleNote && String(ctx.ruleNote).trim() ? [['Rule copied from', String(ctx.ruleNote).trim()]] : []),
  });
  let any = false;
  if (ctx.c2p && ctx.c2p.res && ctx.c2p.res.ok) {
    any = true;
    blocks.push({ t: 'h', text: 'CGPA to percentage' });
    blocks.push({ t: 'meta', rows: [['CGPA entered', String(ctx.c2p.res.cgpa)], ['Percentage by this rule', ctx.c2p.res.percent + ' percent']] });
    blocks.push({ t: 'list', title: 'Working', items: ctx.c2p.res.steps });
  }
  if (ctx.p2c && ctx.p2c.res && ctx.p2c.res.ok) {
    any = true;
    blocks.push({ t: 'h', text: 'Percentage to CGPA' });
    blocks.push({ t: 'meta', rows: [['Percentage entered', ctx.p2c.res.percent + ' percent'], ['CGPA by this rule', String(ctx.p2c.res.cgpa)]] });
    blocks.push({ t: 'list', title: 'Working', items: ctx.p2c.res.steps });
  }
  if (ctx.sg && ctx.sg.res && ctx.sg.res.ok) {
    any = true;
    const r = ctx.sg.res;
    blocks.push({ t: 'h', text: 'SGPA list to CGPA, weighted by credits' });
    blocks.push({
      t: 'table',
      head: ['Semester', 'SGPA', 'Credits', 'SGPA x credits'],
      widths: [0.25, 0.25, 0.25, 0.25],
      rows: r.used.map((u) => [String(u.row), String(u.sgpa), String(u.credits), String(Math.round(u.product * 1e6) / 1e6)]),
    });
    blocks.push({ t: 'meta', rows: [['CGPA from these semesters', String(r.cgpa)]] });
    if (ctx.sg.pct && ctx.sg.pct.ok) blocks.push({ t: 'meta', rows: [['Percentage by the rule above', ctx.sg.pct.percent + ' percent']] });
    blocks.push({ t: 'list', title: 'Working', items: r.steps });
  }
  if (ctx.need && ctx.need.res && ctx.need.res.ok) {
    any = true;
    const r = ctx.need.res;
    const i = ctx.need.inputs;
    blocks.push({ t: 'h', text: 'CGPA needed for a target percentage' });
    blocks.push({
      t: 'meta',
      rows: [
        ['Target percentage', i.target + ' percent'],
        ['CGPA so far, over credits done', i.done + ' over ' + i.doneCredits + ' credits'],
        ['Credits still to come', String(i.leftCredits)],
        ['Average needed in those credits', r.reachable ? String(r.needed) : 'Not reachable (above the top of the scale)'],
      ],
    });
    blocks.push({ t: 'list', title: 'Working', items: r.steps });
  }
  if (!any) blocks.push({ t: 'p', text: 'No result yet. Enter your numbers in the calculator and the working appears here.' });
  blocks.push({ t: 'h', text: 'Rule source and limits' });
  const src = SOURCE_TEXT[sourceStatus] || '';
  blocks.push({ t: 'p', text: src });
  blocks.push({ t: 'note', text: WARNING_TEXT });
  return { kind: 'sheet', fileName: 'cgpa-percentage-result-sheet.pdf', blocks, any };
}

export const esc = (v) =>
  String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function modelToHtml(model) {
  const out = [];
  model.blocks.forEach((b) => {
    if (b.t === 'title') {
      out.push('<header class="cg-doc-head"><p class="cg-doc-brand">FutureCareerSchool</p><h3 class="cg-doc-title">' + esc(b.text) + '</h3>' + (b.sub ? '<p class="cg-doc-sub">' + esc(b.sub) + '</p>' : '') + '</header>');
    } else if (b.t === 'meta') {
      out.push('<dl class="cg-meta">' + b.rows.map((r) => '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>').join('') + '</dl>');
    } else if (b.t === 'h') {
      out.push('<h4 class="cg-doc-h">' + esc(b.text) + '</h4>');
    } else if (b.t === 'p') {
      out.push('<p class="cg-doc-p">' + esc(b.text) + '</p>');
    } else if (b.t === 'list') {
      out.push('<div class="cg-field"><b>' + esc(b.title) + '</b><ol>' + b.items.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ol></div>');
    } else if (b.t === 'table') {
      out.push(
        '<div class="cg-tablewrap"><table class="cg-table"><thead><tr>' + b.head.map((h) => '<th scope="col">' + esc(h) + '</th>').join('') + '</tr></thead><tbody>' +
          b.rows.map((row) => '<tr>' + row.map((cell, i) => '<td data-label="' + esc(b.head[i]) + '">' + esc(cell) + '</td>').join('') + '</tr>').join('') +
          '</tbody></table></div>'
      );
    } else if (b.t === 'note') {
      out.push('<p class="cg-doc-note">' + esc(b.text) + '</p>');
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
      font(20, 'bold'); color(INK); pdf.text(pdfText(b.text), M, y + 7); y += 11;
      if (b.sub) paragraph(b.sub, 11, 'normal', GREY, 5.5, M, CW);
      y += 2; rule(M, M + CW, y, TEAL, 0.6); y += 5;
    } else if (b.t === 'meta') {
      b.rows.forEach((r) => {
        const label = pdfText(r[0]) + ':';
        font(10, 'bold');
        const valueX = Math.max(M + 56, M + pdf.getTextWidth(label) + 3);
        const val = wrap(r[1] || '', M + CW - valueX, 10, 'normal');
        const rows = Math.max(1, val.length);
        const step = val.some(isImg) ? 6.2 : 5;
        need(rows * step + 2);
        font(10, 'bold'); color(INK); pdf.text(label, M, y + 3.8);
        font(10, 'normal'); color(INK);
        val.forEach((l, i) => { if (l) put(l, valueX, y + 3.8 + i * step, 10, 'normal', INK); });
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
      const drawRow = (cells, header) => {
        const h = 4.4 + pad * 2;
        if (y + h > BOTTOM) { pdf.addPage(); y = M; if (!header) drawRow(b.head, true); }
        let x = M;
        cells.forEach((c, i) => {
          if (header) { pdf.setFillColor(226, 240, 238); pdf.rect(x, y, widths[i], h, 'F'); }
          pdf.setDrawColor(150, 158, 166); pdf.setLineWidth(0.2); pdf.rect(x, y, widths[i], h);
          color(INK); font(header ? 9 : 9.5, header ? 'bold' : 'normal');
          pdf.text(pdfText(c), x + pad, y + pad + 3);
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
