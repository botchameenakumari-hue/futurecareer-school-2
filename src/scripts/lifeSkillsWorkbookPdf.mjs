// Builds the combined Life Skills Workbook PDF from the same data and answers that are on screen.
// jsPDF standard fonts cover Latin-1 only, so other scripts are replaced with "?" and reported back.

const PAGE_W = 210;
const PAGE_H = 297;
const MARGIN = 16;
const CONTENT_W = PAGE_W - MARGIN * 2;
const FOOTER_SPACE = 12;

export function pdfSafe(value) {
  const original = String(value == null ? '' : value);
  let lossy = false;
  const cleaned = original
    .replace(/[\u2018\u2019\u201A]/g, "'")
    .replace(/[\u201C\u201D\u201E]/g, '"')
    .replace(/[\u2013\u2014]/g, '-')
    .replace(/\u2026/g, '...')
    .replace(/\u20B9/g, 'Rs ')
    .replace(/\r\n?/g, '\n')
    .replace(/\t/g, ' ')
    .replace(/[^\n\x20-\x7E\u00A0-\u00FF]/g, () => {
      lossy = true;
      return '?';
    });
  return { text: cleaned, lossy };
}

export function createLifeSkillsPdf(PdfDocument, skills, state, meta) {
  const pdf = new PdfDocument({ unit: 'mm', format: 'a4', compress: true });
  let y = MARGIN;
  let lossy = false;

  const safe = (value) => {
    const result = pdfSafe(value);
    if (result.lossy) lossy = true;
    return result.text;
  };
  const newPage = () => {
    pdf.addPage();
    y = MARGIN;
  };
  const ensure = (height) => {
    if (y + height > PAGE_H - MARGIN - FOOTER_SPACE) newPage();
  };
  const lineHeight = (size) => size * 0.3528 * 1.38;

  function write(value, options = {}) {
    const { size = 10.5, bold = false, color = [30, 30, 30], indent = 0, gap = 1.6, italic = false } = options;
    const text = safe(value);
    pdf.setFont('helvetica', bold ? 'bold' : italic ? 'italic' : 'normal');
    pdf.setFontSize(size);
    pdf.setTextColor(color[0], color[1], color[2]);
    const lines = pdf.splitTextToSize(text, CONTENT_W - indent);
    const step = lineHeight(size);
    lines.forEach((line) => {
      ensure(step);
      pdf.text(line, MARGIN + indent, y + step * 0.75);
      y += step;
    });
    y += gap;
  }

  function sectionLabel(text) {
    ensure(26);
    y += 1.5;
    write(text, { size: 11.5, bold: true, color: [11, 118, 109], gap: 1.2 });
  }

  function ruledLines(count) {
    for (let i = 0; i < count; i += 1) {
      ensure(7);
      y += 6;
      pdf.setDrawColor(170, 170, 170);
      pdf.setLineWidth(0.2);
      pdf.line(MARGIN + 4, y, PAGE_W - MARGIN, y);
    }
    y += 2;
  }

  function checkbox(x, top, checked) {
    pdf.setDrawColor(60, 60, 60);
    pdf.setLineWidth(0.3);
    pdf.rect(x, top, 3.6, 3.6);
    if (checked) {
      pdf.setLineWidth(0.6);
      pdf.line(x + 0.7, top + 1.9, x + 1.5, top + 2.9);
      pdf.line(x + 1.5, top + 2.9, x + 3.0, top + 0.8);
    }
  }

  // Cover block
  pdf.setFillColor(11, 118, 109);
  pdf.rect(0, 0, PAGE_W, 34, 'F');
  pdf.setFont('helvetica', 'bold');
  pdf.setFontSize(21);
  pdf.setTextColor(255, 255, 255);
  pdf.text('Life Skills Workbook', MARGIN, 17);
  pdf.setFont('helvetica', 'normal');
  pdf.setFontSize(10.5);
  pdf.text('Based on the ten core life skills named by the World Health Organization', MARGIN, 25);
  pdf.setFontSize(9);
  pdf.text('FutureCareerSchool.com  |  Made in the browser on ' + safe(meta.dateText), MARGIN, 30.5);
  y = 42;

  write('Skills in this workbook', { size: 11.5, bold: true, color: [11, 118, 109], gap: 1 });
  write(skills.map((skill, index) => (skill.number || index + 1) + '. ' + skill.name).join('   '), { size: 10, gap: 3 });
  write('How to use it: read the notes, answer the three questions in your own words, rate yourself honestly and tick each day of the 7-day practice as you finish it. A self-rating is your own view, not a test result.', { size: 9.5, gap: 2.5 });
  write('This workbook is for personal reflection. It is not medical advice. If stress or low mood is heavy or lasts for weeks, talk to a doctor, a counsellor or a trusted adult.', { size: 9.5, gap: 2.5 });
  write('Source for the list: ' + meta.sourceLabel + '. WHO describes life skills as "' + meta.definition + '." Source link: ' + meta.sourceUrl, { size: 8.5, color: [90, 90, 90], gap: 2 });
  write('Your answers stay on your device. This file was created in your browser and nothing was uploaded.', { size: 8.5, color: [90, 90, 90], gap: 2 });

  skills.forEach((skill, index) => {
    y += 4;
    ensure(95);
    const answers = (state.answers && state.answers[skill.id]) || [];
    const days = (state.days && state.days[skill.id]) || [];
    const rating = Number((state.rating && state.rating[skill.id]) || 0);

    pdf.setFillColor(232, 244, 242);
    pdf.rect(MARGIN - 2, y - 2, CONTENT_W + 4, 11, 'F');
    write((skill.number || index + 1) + '. ' + skill.name, { size: 16, bold: true, color: [8, 80, 74], gap: 4 });
    y += 1;

    write('What it means', { size: 11.5, bold: true, color: [11, 118, 109], gap: 1 });
    write(skill.definition, { gap: 2.5 });

    sectionLabel('Why it matters in study and work in India');
    skill.why.forEach((paragraph) => write(paragraph, { gap: 2 }));

    sectionLabel('My rating today (1 to 5)');
    write(meta.ratingLabels[rating] || meta.ratingLabels[0], { gap: 2 });

    sectionLabel('Reflection questions');
    skill.questions.forEach((question, qIndex) => {
      ensure(24);
      write('Q' + (qIndex + 1) + '. ' + question, { bold: true, gap: 1 });
      const answer = String(answers[qIndex] || '').trim();
      if (answer) write(answer, { indent: 4, gap: 3 });
      else ruledLines(3);
    });

    sectionLabel('7-day practice: ' + skill.activity.title);
    write(skill.activity.intro, { gap: 2 });
    skill.activity.days.forEach((dayText, dIndex) => {
      const text = safe('Day ' + (dIndex + 1) + '. ' + dayText);
      pdf.setFont('helvetica', 'normal');
      pdf.setFontSize(10.5);
      const lines = pdf.splitTextToSize(text, CONTENT_W - 8);
      const step = lineHeight(10.5);
      ensure(step * Math.min(lines.length, 2) + 1);
      checkbox(MARGIN, y + 0.6, Boolean(days[dIndex]));
      pdf.setTextColor(30, 30, 30);
      lines.forEach((line) => {
        ensure(step);
        pdf.text(line, MARGIN + 7, y + step * 0.75);
        y += step;
      });
      y += 1.6;
    });

    sectionLabel('Questions and answers');
    skill.qa.forEach((item) => {
      ensure(18);
      write('Q. ' + item.q, { bold: true, gap: 0.8 });
      write('A. ' + item.a, { indent: 4, gap: 2.5 });
    });
  });

  const total = pdf.getNumberOfPages();
  for (let page = 1; page <= total; page += 1) {
    pdf.setPage(page);
    pdf.setDrawColor(200, 200, 200);
    pdf.setLineWidth(0.2);
    pdf.line(MARGIN, PAGE_H - 12, PAGE_W - MARGIN, PAGE_H - 12);
    pdf.setFont('helvetica', 'normal');
    pdf.setFontSize(8);
    pdf.setTextColor(110, 110, 110);
    pdf.text('FutureCareerSchool.com  |  Life skills workbook  |  Reflection only, not medical advice', MARGIN, PAGE_H - 7.5);
    pdf.text('Page ' + page + ' of ' + total, PAGE_W - MARGIN, PAGE_H - 7.5, { align: 'right' });
  }

  return { pdf, lossy };
}
