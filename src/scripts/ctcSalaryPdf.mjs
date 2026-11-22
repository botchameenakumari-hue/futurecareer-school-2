// PDF for the CTC to in-hand salary calculator. jsPDF is loaded by the page only when the download
// button is pressed and passed in as JsPDF. Plain English is real, selectable text. Telugu, Hindi and
// other lines the standard font cannot draw (for example an offer name) go through pdfUnicodeText.mjs.
import { createUnicodeText, flattenTexts, isUnicodeLine, needsUnicode, prepareUnicodeText } from './pdfUnicodeText.mjs';
import { TOOL_URL } from './ctcSalary.mjs';

export function hasUnsupportedText(model) {
  return flattenTexts(model.blocks).some((text) => needsUnicode(text));
}

export function prepareUnicodePdf(model) {
  return prepareUnicodeText(flattenTexts(model.blocks));
}

export function pdfText(value) {
  return String(value == null ? '' : value)
    .replace(/₹/g, 'Rs. ')
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
  const put = (l, x, baseline, size, style, c, align) => {
    if (isImg(l)) uni.draw(l, x, baseline, size, style, c, align);
    else if (align === 'right') pdf.text(l, x, baseline, { align: 'right' });
    else pdf.text(l, x, baseline);
  };
  const M = 15;
  const CW = 210 - M * 2;
  const BOTTOM = 297 - 18;
  const TEAL = [11, 118, 109];
  const INK = [28, 32, 38];
  const GREY = [90, 98, 106];
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
    color(c);
    font(size, style);
    ls.forEach((l) => { need(lh); if (l) put(l, x == null ? M : x, y + lh * 0.75, size, style, c); y += lh; });
  };

  model.blocks.forEach((b) => {
    if (b.t === 'title') {
      need(26);
      font(8.5, 'bold'); color(TEAL); pdf.text('FUTURECAREERSCHOOL', M, y + 3); y += 7;
      font(19, 'bold'); color(INK); pdf.text(pdfText(b.text), M, y + 7); y += 11;
      if (b.sub) paragraph(b.sub, 10, 'normal', GREY, 5, M, CW);
      y += 1.5; rule(M, M + CW, y, TEAL, 0.6); y += 4;
    } else if (b.t === 'meta') {
      b.rows.forEach((r) => {
        const labelLines = wrap(r[0] + ':', 52, 9.5, 'bold');
        const valueX = M + 54;
        const val = wrap(r[1] || '', M + CW - valueX, 9.5, 'normal');
        const rows = Math.max(1, val.length, labelLines.length);
        const step = val.some(isImg) || labelLines.some(isImg) ? 6 : 4.8;
        need(rows * step + 2);
        color(INK); font(9.5, 'bold');
        labelLines.forEach((l, i) => { if (l) put(l, M, y + 3.6 + i * step, 9.5, 'bold', INK); });
        font(9.5, 'normal');
        val.forEach((l, i) => { if (l) put(l, valueX, y + 3.6 + i * step, 9.5, 'normal', INK); });
        y += rows * step + 1.2;
      });
      y += 1;
    } else if (b.t === 'h') {
      need(30);
      y += 3;
      const ls = wrap(b.text, CW, 11.5, 'bold');
      color(TEAL); font(11.5, 'bold');
      ls.forEach((l, i) => { if (l) put(l, M, y + 4 + i * 5.2, 11.5, 'bold', TEAL); });
      y += ls.length * 5.2 + 1.5;
      rule(M, M + CW, y, [200, 206, 210], 0.2); y += 2.5;
    } else if (b.t === 'p') {
      paragraph(b.text, 9.5, 'normal', INK, 4.8, M, CW); y += 1.5;
    } else if (b.t === 'stats') {
      const gap = 3;
      const w = (CW - gap) / 2;
      const h = 23;
      for (let i = 0; i < b.items.length; i += 2) {
        need(h + 3);
        [0, 1].forEach((k) => {
          const it = b.items[i + k];
          if (!it) return;
          const x = M + k * (w + gap);
          pdf.setDrawColor(150, 158, 166); pdf.setLineWidth(0.2);
          if (i === 0 && k === 0) { pdf.setFillColor(226, 240, 238); pdf.rect(x, y, w, h, 'FD'); } else pdf.rect(x, y, w, h);
          const lab = wrap(it.label, w - 5, 8, 'normal');
          color(GREY); font(8, 'normal');
          put(lab[0] || '', x + 2.5, y + 4.6, 8, 'normal', GREY);
          font(15, 'bold'); color(INK);
          pdf.text(pdfText(it.value), x + 2.5, y + 12);
          const sub = wrap(it.sub, w - 5, 7.5, 'normal').slice(0, 2);
          color(GREY); font(7.5, 'normal');
          sub.forEach((l, j) => { if (l) put(l, x + 2.5, y + 16.4 + j * 3.3, 7.5, 'normal', GREY); });
        });
        y += h + 3;
      }
    } else if (b.t === 'list') {
      need(12);
      font(9, 'bold'); color(GREY); pdf.text(pdfText(b.title), M, y + 3.5); y += 6;
      b.items.forEach((item) => {
        const ls = wrap(item, CW - 6, 9.5, 'normal');
        color(INK); font(9.5, 'normal');
        const step = ls.some(isImg) ? 6 : 4.8;
        ls.forEach((l, i) => { need(step); if (i === 0) { font(9.5, 'normal'); color(INK); pdf.text('-', M + 1, y + 3.6); } if (l) put(l, M + 6, y + 3.6, 9.5, 'normal', INK); y += step; });
        y += 0.8;
      });
      y += 1;
    } else if (b.t === 'table') {
      const widths = b.widths.map((w) => w * CW);
      const pad = 1.5;
      const drawRow = (cells, header, strong, minH) => {
        const size = header ? 8.5 : 9;
        const style = header || strong ? 'bold' : 'normal';
        const wrapped = cells.map((c, i) => wrap(c, widths[i] - pad * 2, size, style));
        const lh = wrapped.some((w) => w.some(isImg)) ? 5.2 : 4.1;
        const h = Math.max(minH, Math.max(...wrapped.map((w) => Math.max(1, w.length))) * lh + pad * 2);
        if (y + h > BOTTOM) { pdf.addPage(); y = M; if (!header) drawRow(b.head, true, false, 7); }
        let x = M;
        cells.forEach((c, i) => {
          if (header) { pdf.setFillColor(226, 240, 238); pdf.rect(x, y, widths[i], h, 'F'); }
          else if (strong) { pdf.setFillColor(244, 247, 247); pdf.rect(x, y, widths[i], h, 'F'); }
          pdf.setDrawColor(150, 158, 166); pdf.setLineWidth(0.2); pdf.rect(x, y, widths[i], h);
          color(INK); font(size, style);
          const right = b.align && b.align[i] === 'r';
          wrapped[i].forEach((l, j) => { if (l) put(l, right ? x + widths[i] - pad : x + pad, y + pad + 2.9 + j * lh, size, style, INK, right ? 'right' : undefined); });
          x += widths[i];
        });
        y += h;
      };
      need(8 + 9);
      drawRow(b.head, true, false, 7);
      b.rows.forEach((row) => {
        const cells = Array.isArray(row) ? row : row.cells;
        drawRow(cells, false, !Array.isArray(row) && row.strong, 7);
      });
      y += 3;
    } else if (b.t === 'note') {
      y += 2;
      paragraph(b.text, 8, 'italic', GREY, 4, M, CW);
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
