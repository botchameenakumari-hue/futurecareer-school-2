// Builds the study timetable PDF (A4 landscape) in the browser. Loaded only when the PDF button is pressed.
// Plain English stays real, selectable PDF text. Telugu, Hindi and other non-Latin names are drawn through
// pdfUnicodeText.mjs as pictures so the letters keep their shape.
import { createUnicodeText, flattenTexts, isUnicodeLine, needsUnicode, prepareUnicodeText } from './pdfUnicodeText.mjs';
import { weeksOf, fmtDate, fmtDateLong, fmtTime, fmtHours } from './studyTimetableEngine.mjs';
import { PALETTE, gridRange, weekLabel, dayEntries, slotLine, settingsLines, subjectName, kindText, colorOf, DAY_KIND_LABEL, WELLBEING_TEXT } from './studyTimetableRender.mjs';

export function planTexts(plan) {
  return flattenTexts([plan.subjects.map((s) => s.name), plan.input.blocks.map((b) => b.label), plan.slots.map((s) => s.note)]);
}
export function planHasUnicode(plan) { return planTexts(plan).some((t) => needsUnicode(t)); }
export function preparePlanFonts(plan) { return prepareUnicodeText(planTexts(plan)); }

function pdfText(value) {
  return String(value == null ? '' : value)
    .replace(/₹/g, 'Rs. ').replace(/[‐-―−]/g, '-').replace(/[‘’]/g, "'").replace(/[“”]/g, '"').replace(/[•·]/g, '-').replace(/…/g, '...')
    .replace(/ /g, ' ').replace(/[^\x20-\x7E\n -ÿ]/g, '?').replace(/[ \t]+/g, ' ').replace(/\r/g, '');
}
const rgb = (hex) => [parseInt(hex.slice(1, 3), 16), parseInt(hex.slice(3, 5), 16), parseInt(hex.slice(5, 7), 16)];

export async function makeTimetablePdf(plan, unicodeReady) {
  const mod = await import('jspdf');
  const pdf = new mod.jsPDF({ unit: 'mm', format: 'a4', orientation: 'landscape' });
  const uni = unicodeReady ? createUnicodeText(pdf) : null;
  const PW = 297; const PH = 210; const M = 10;
  const INK = [20, 24, 31]; const GREY = [75, 84, 96]; const TEAL = [11, 92, 83];
  const color = (c) => pdf.setTextColor(c[0], c[1], c[2]);
  const font = (size, style) => { pdf.setFont('helvetica', style || 'normal'); pdf.setFontSize(size); };
  const isImg = (l) => uni && isUnicodeLine(l);

  /** Wraps text to a width. Lines may be browser-drawn lines (images) when the text needs it. */
  function wrap(text, width, size, style) {
    font(size, style);
    const viaBrowser = uni && uni.wrap(text, width, size, style);
    if (viaBrowser) return viaBrowser;
    const out = [];
    pdfText(text).split('\n').forEach((part) => { if (!part.trim()) out.push(''); else pdf.splitTextToSize(part.trim(), width).forEach((l) => out.push(l)); });
    return out;
  }
  function put(line, x, baseline, size, style, c) {
    color(c); font(size, style);
    if (isImg(line)) uni.draw(line, x, baseline, size, style, c);
    else if (line) pdf.text(line, x, baseline);
  }
  /** Draws wrapped text inside a box, cutting at maxLines. Returns lines drawn. */
  function block(text, x, y, width, size, style, c, lineH, maxLines) {
    let lines = wrap(text, width, size, style);
    if (maxLines != null && lines.length > maxLines) {
      lines = lines.slice(0, Math.max(0, maxLines));
    }
    lines.forEach((l, i) => put(l, x, y + lineH * (i + 0.8), size, style, c));
    return lines.length;
  }
  const lineH = (size, extra) => size * 0.3528 * 1.25 + (extra || 0);

  const rect = (x, y, w, h, fill, stroke, lw) => {
    if (fill) pdf.setFillColor(fill[0], fill[1], fill[2]);
    if (stroke) { pdf.setDrawColor(stroke[0], stroke[1], stroke[2]); pdf.setLineWidth(lw || 0.2); }
    pdf.rect(x, y, w, h, fill && stroke ? 'FD' : fill ? 'F' : 'S');
  };
  const hline = (x1, x2, y, c, w) => { pdf.setDrawColor(c[0], c[1], c[2]); pdf.setLineWidth(w || 0.2); pdf.line(x1, y, x2, y); };

  const sm = plan.summary;

  // ---------- page 1: summary ----------
  let y = M;
  font(8.5, 'bold'); color(TEAL); pdf.text('FUTURECAREERSCHOOL', M, y + 3); y += 6;
  font(22, 'bold'); color(INK); pdf.text('Study timetable', M, y + 7); y += 11;
  settingsLines(plan).forEach((l) => { y += block(l, M, y, PW - 2 * M, 10, 'normal', INK, lineH(10, 0.6)) * lineH(10, 0.6); });
  y += 1.5; hline(M, PW - M, y, TEAL, 0.5); y += 4;
  font(12, 'bold'); color(TEAL); pdf.text('Hours for each subject', M, y + 4); y += 7;

  const cols = [
    ['Subject', 62], ['Exam', 24], ['Conf. / weight', 26], ['Planned', 22], ['Study', 22], ['Spaced rev.', 24], ['Final rev.', 22], ['Mock+review', 25], ['Share', 18],
  ];
  const xs = []; let cx = M; cols.forEach((c) => { xs.push(cx); cx += c[1]; });
  const tableW = cx - M;
  rect(M, y, tableW, 7, [223, 238, 237], [125, 135, 145], 0.25);
  font(8, 'bold'); color(INK);
  cols.forEach((c, i) => pdf.text(c[0], xs[i] + 1.5, y + 4.7));
  y += 7;
  const rowsOut = sm.perSubject.map((p) => [p.name, fmtDate(p.examDate, true), p.confidence + ' / ' + p.weight, fmtHours(p.total), fmtHours(p.learn), fmtHours(p.revise), fmtHours(p.final), fmtHours(p.mock + p.review), Math.round(p.share * 100) + '%', p]);
  rowsOut.push(['All subjects', '', '', fmtHours(sm.totalMin), fmtHours(sm.perSubject.reduce((a, p) => a + p.learn, 0)), fmtHours(sm.perSubject.reduce((a, p) => a + p.revise, 0)), fmtHours(sm.perSubject.reduce((a, p) => a + p.final, 0)), fmtHours(sm.perSubject.reduce((a, p) => a + p.mock + p.review, 0)), '100%', null]);
  rowsOut.forEach((r, ri) => {
    const nameLines = wrap(r[0], cols[0][1] - 9, 9, ri === rowsOut.length - 1 ? 'bold' : 'normal');
    const h = Math.max(7, nameLines.length * lineH(9, 0.4) + 2.4);
    rect(M, y, tableW, h, ri === rowsOut.length - 1 ? [238, 241, 244] : null, [125, 135, 145], 0.2);
    if (r[9]) { const c = colorOf(plan, r[9].id); rect(xs[0] + 1.5, y + 2.2, 3, 3, rgb(c.bg), rgb(c.edge), 0.35); }
    nameLines.forEach((l, i) => put(l, xs[0] + (r[9] ? 6 : 1.5), y + 1.2 + lineH(9, 0.4) * (i + 0.8), 9, ri === rowsOut.length - 1 ? 'bold' : 'normal', INK));
    font(9, 'normal'); color(INK);
    for (let i = 1; i < cols.length; i++) pdf.text(String(r[i]), xs[i] + 1.5, y + 4.7);
    y += h;
  });
  y += 4;
  font(10, 'normal'); color(INK);
  pdf.text(sm.sessions + ' sessions, ' + fmtHours(sm.totalMin) + ' in all. Conf. is how confident you are (1 to 5). Weight is how much the subject counts (1 to 5).', M, y + 3); y += 8;
  const careLines = wrap(WELLBEING_TEXT, PW - 2 * M, 9.5, 'normal');
  rect(M, y, PW - 2 * M, careLines.length * lineH(9.5, 0.5) + 5, [232, 246, 244], [11, 92, 83], 0.3);
  careLines.forEach((l, i) => put(l, M + 3, y + 2.5 + lineH(9.5, 0.5) * (i + 0.8), 9.5, 'normal', INK));
  y += careLines.length * lineH(9.5, 0.5) + 8;
  const notes = (plan.warnings || []).concat(plan.notes || []);
  if (notes.length) {
    font(10, 'bold'); color(INK); pdf.text('Notes about this plan', M, y + 3); y += 6;
    notes.forEach((n) => { y += block('- ' + n, M, y, PW - 2 * M, 9, 'normal', INK, lineH(9, 0.5)) * lineH(9, 0.5); });
  }

  // ---------- one grid page per week ----------
  const range = gridRange(plan);
  const weeks = weeksOf(plan);
  weeks.forEach((w) => {
    pdf.addPage();
    font(14, 'bold'); color(TEAL); pdf.text(weekLabel(plan, w.index), M, M + 5);
    const top = M + 9;
    const axisW = 11;
    const colW = (PW - 2 * M - axisW) / 7;
    const headH = 9.5;
    const legendH = 8;
    const bodyH = PH - M - 6 - legendH - top - headH;
    const k = bodyH / range.span;
    const bodyTop = top + headH;
    // axis hours
    font(6.5, 'normal'); color(GREY);
    for (let m = range.start; m <= range.end; m += 60) {
      const yy = bodyTop + (m - range.start) * k;
      pdf.text(fmtTime(m), M + 0.5, yy + 1.2);
    }
    w.dates.forEach((date, i) => {
      const x = M + axisW + i * colW;
      const day = plan.days.find((d) => d.date === date);
      const tag = !day ? 'Not in plan' : day.kind === 'exam' ? 'Exam: ' + day.exams.map((id) => subjectName(plan, id)).join(', ') : DAY_KIND_LABEL[day.kind];
      rect(x, top, colW, headH, [238, 241, 244], [125, 135, 145], 0.2);
      font(8, 'bold'); color(INK); pdf.text(fmtDate(date, true), x + 1.2, top + 3.6);
      block(tag, x + 1.2, top + 4.1, colW - 2.4, 6, 'normal', GREY, lineH(6, 0.1), 1);
      let bg = null;
      if (!day) bg = [241, 242, 244]; else if (day.kind === 'rest') bg = [238, 246, 238]; else if (day.kind === 'catchup') bg = [250, 244, 224];
      rect(x, bodyTop, colW, bodyH, bg, [181, 188, 195], 0.2);
      for (let m = range.start + 60; m < range.end; m += 60) hline(x, x + colW, bodyTop + (m - range.start) * k, [217, 221, 225], 0.15);
      if (!day) return;
      plan.input.blocks.filter((b) => b.days[day.dow]).forEach((b) => {
        const s0 = Math.max(b.start, range.start); const e0 = Math.min(b.end, range.end);
        if (e0 <= s0) return;
        const by = bodyTop + (s0 - range.start) * k; const bh = (e0 - s0) * k;
        rect(x + 0.4, by, colW - 0.8, bh, [221, 225, 229], [154, 164, 173], 0.2);
        pdf.saveGraphicsState(); pdf.rect(x + 0.4, by, colW - 0.8, bh, 'n'); pdf.clip(); pdf.discardPath();
        block(b.label, x + 1.2, by + 0.4, colW - 2.4, 6, 'normal', [43, 51, 64], lineH(6, 0.1), Math.max(1, Math.floor((bh - 0.6) / lineH(6, 0.1))));
        pdf.restoreGraphicsState();
      });
      if (day.kind === 'rest' || day.kind === 'catchup') {
        font(9, 'bold'); color([43, 74, 53]);
        const label = day.kind === 'rest' ? 'Rest day' : 'Catch-up day';
        pdf.text(label, x + colW / 2, bodyTop + 7, { align: 'center' });
      }
      plan.slots.filter((s) => s.date === date).forEach((s) => {
        const c = colorOf(plan, s.subjectId);
        const sy = bodyTop + (s.start - range.start) * k; const sh = (s.end - s.start) * k;
        rect(x + 0.4, sy, colW - 0.8, sh, rgb(c.bg), rgb(c.edge), s.kind === 'mock' ? 0.5 : 0.25);
        pdf.setFillColor(...rgb(c.edge)); pdf.rect(x + 0.4, sy, 1, sh, 'F');
        if (s.kind === 'revise') { pdf.setLineDashPattern([0.8, 0.8], 0); pdf.setDrawColor(...rgb(c.edge)); pdf.setLineWidth(0.25); pdf.rect(x + 0.4, sy, colW - 0.8, sh, 'S'); pdf.setLineDashPattern([], 0); }
        pdf.saveGraphicsState(); pdf.rect(x + 0.4, sy, colW - 0.8, sh, 'n'); pdf.clip(); pdf.discardPath();
        const tw = colW - 3.4;
        const maxL = Math.max(1, Math.floor((sh - 0.5) / lineH(6.5, 0.05)));
        let yy = sy + 0.5; let used = 0;
        const name = (s.done ? 'Done: ' : '') + subjectName(plan, s.subjectId);
        const nf = sh < 5 ? 5.8 : 6.8;
        used = block(name, x + 2, yy - (sh < 5 ? 0.3 : 0), tw, nf, 'bold', INK, lineH(nf, 0.05), Math.min(maxL, 2));
        yy += used * lineH(nf, 0.05);
        if (maxL - used >= 1 && sh > 7) { const kk = block(kindText(s), x + 2, yy, tw, 6, 'normal', INK, lineH(6, 0.05), 1); yy += kk * lineH(6, 0.05); }
        if (sh > 11) block(fmtTime(s.start) + ' to ' + fmtTime(s.end), x + 2, yy, tw, 6, 'normal', GREY, lineH(6, 0.05), 1);
        pdf.restoreGraphicsState();
      });
    });
    // legend
    let lx = M; const ly = PH - M - 6 - legendH + 2;
    plan.subjects.forEach((s) => {
      const c = PALETTE[s.colorIndex % PALETTE.length];
      const lines = wrap(s.name, 40, 7.5, 'normal');
      const w1 = 40;
      if (lx + 6 + Math.min(w1, 38) > PW - M) { lx = M; }
      rect(lx, ly, 3.4, 3.4, rgb(c.bg), rgb(c.edge), 0.4);
      put(lines[0] || '', lx + 4.8, ly + 2.7, 7.5, 'normal', INK);
      font(7.5, 'normal');
      const width = isImg(lines[0]) ? uni.measure(lines[0].slice(1), 7.5, 'normal') : pdf.getTextWidth(lines[0] || '');
      lx += 6 + width + 4;
    });
    rect(lx, ly, 3.4, 3.4, [221, 225, 229], [154, 164, 173], 0.3);
    font(7.5, 'normal'); color(INK); pdf.text('Fixed block (school, meals, sport)', lx + 4.8, ly + 2.7);
  });

  // ---------- day by day ----------
  pdf.addPage();
  const colW2 = (PW - 2 * M - 8) / 2;
  const bottom = PH - M - 6;
  const startY = M + 9;
  let col = 0; let cy = startY;
  const heading = () => { font(14, 'bold'); color(TEAL); pdf.text('Day by day', M, M + 5); };
  heading();
  const x0 = () => M + col * (colW2 + 8);
  const newColumn = () => { if (col === 0) { col = 1; cy = startY; } else { pdf.addPage(); col = 0; cy = startY; heading(); } };
  dayEntries(plan).forEach((d) => {
    const head = d.label + '  ' + d.kindLabel + (d.total ? '  ' + Math.floor(d.total / 60) + ' h ' + (d.total % 60) + ' min planned' : '');
    const lh = lineH(8.5, 0.7);
    const noteLines = d.note ? wrap(d.note, colW2, 8, 'normal') : [];
    const slotLines = d.slots.map((s) => wrap(slotLine(plan, s), colW2 - 8, 8.5, 'normal'));
    const need = 6 + noteLines.length * lineH(8, 0.5) + slotLines.reduce((t, l) => t + l.length * lh + 0.6, 0) + 2;
    if (cy + need > bottom) newColumn();
    const x = x0();
    font(9.5, 'bold'); color(INK); pdf.text(pdf.splitTextToSize(pdfText(head), colW2)[0], x, cy + 3.6);
    cy += 5.2;
    noteLines.forEach((l) => { put(l, x, cy + lineH(8, 0.5) * 0.8, 8, 'normal', GREY); cy += lineH(8, 0.5); });
    d.slots.forEach((s, i) => {
      const ls = slotLines[i];
      rect(x, cy + 0.6, 3.2, 3.2, null, INK, 0.3);
      if (s.done) { pdf.setDrawColor(11, 92, 83); pdf.setLineWidth(0.5); pdf.line(x + 0.6, cy + 2.2, x + 1.4, cy + 3.2); pdf.line(x + 1.4, cy + 3.2, x + 2.8, cy + 0.9); }
      ls.forEach((l, j) => put(l, x + 5, cy + lh * (j + 0.75), 8.5, 'normal', INK));
      cy += ls.length * lh + 0.6;
    });
    cy += 2;
    hline(x, x + colW2, cy - 1, [201, 207, 213], 0.15);
  });

  // footers
  const pages = pdf.getNumberOfPages();
  for (let p = 1; p <= pages; p++) {
    pdf.setPage(p);
    font(7.5, 'normal'); color(GREY);
    pdf.text('futurecareerschool.com. Made in your browser, nothing is uploaded. Check official notices for exam dates.', M, PH - M + 1);
    pdf.text('Page ' + p + ' of ' + pages, PW - M, PH - M + 1, { align: 'right' });
  }
  return { pdf, fileName: 'study-timetable-' + plan.days[0].date + '.pdf' };
}
