// Builds the combined Life Skills Workbook PDF from the same data and answers that are on screen.
// jsPDF standard fonts cover Latin-1 only. Text in Telugu, Hindi and other scripts is drawn by the
// browser and added as images (see pdfUnicodeText.mjs). If that is not possible, those letters are
// replaced with "?" and reported back.
import { createUnicodeText } from './pdfUnicodeText.mjs';

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

/** One plain line on where to begin, tied to the ratings the person gave. Skills not yet rated are not counted. */
export function startWith(skills, rating, ratingLabels) {
  const rated = skills
    .map((skill) => ({ skill, value: Number(rating && rating[skill.id]) || 0 }))
    .filter((item) => item.value > 0);
  if (!rated.length) return 'Rate each skill honestly in its card. The skill you rate lowest is a good one to start with.';
  const lowest = Math.min(...rated.map((item) => item.value));
  if (lowest >= 4) return 'All your ratings are 4 or 5. Pick the skill with the least real evidence behind it, and ask someone you trust for honest feedback.';
  const names = rated.filter((item) => item.value === lowest).slice(0, 2).map((item) => item.skill.name);
  const label = String((ratingLabels && ratingLabels[lowest]) || '').replace(/^\d\s*/, '');
  return 'Start with ' + names.join(' and ') + ', which you rated ' + lowest + (label ? ' (' + label + ')' : '') + '. Do the 7-day practice first, then rate it again.';
}

/** The next 7-day step to do: a practice already begun, else the skill named by startWith. Null when every chosen practice is finished. */
export function nextPractice(skills, state) {
  const doneCount = (skill) => ((state.days && state.days[skill.id]) || []).filter(Boolean).length;
  const open = skills.filter((skill) => doneCount(skill) < skill.activity.days.length);
  if (!open.length) return null;
  const begun = open.find((skill) => doneCount(skill) > 0);
  let pick = begun;
  if (!pick) {
    const rated = open.filter((skill) => Number(state.rating && state.rating[skill.id]) > 0);
    pick = rated.length
      ? rated.reduce((a, b) => (Number(state.rating[b.id]) < Number(state.rating[a.id]) ? b : a))
      : open[0];
  }
  const days = (state.days && state.days[pick.id]) || [];
  let index = pick.activity.days.findIndex((_, i) => !days[i]);
  if (index < 0) index = 0;
  return { skill: pick, dayNumber: index + 1, text: pick.activity.days[index], done: doneCount(pick), total: pick.activity.days.length };
}

export function practiceLine(next) {
  if (!next) return 'Every chosen 7-day practice is ticked. Rate each skill again under "After the 7 days".';
  return 'Next practice step: ' + next.skill.name + ', Day ' + next.dayNumber + ' of ' + next.total + '. ' + next.text;
}

export function practiceWhatsApp(next) {
  if (!next) return 'I finished my 7-day life skills practice. Free workbook: https://futurecareerschool.com/tools/life-skills-workbook-pdf/';
  return 'My life skills practice: ' + next.skill.name + ' (' + next.skill.activity.title + '), Day ' + next.dayNumber + ' of ' + next.total + '. ' + next.text + ' Free workbook, nothing is uploaded: https://futurecareerschool.com/tools/life-skills-workbook-pdf/';
}

export function createLifeSkillsPdf(PdfDocument, skills, state, meta) {
  const pdf = new PdfDocument({ unit: 'mm', format: 'a4', compress: true });
  const uni = meta.unicodeReady ? createUnicodeText(pdf) : null;
  let y = MARGIN;
  let lossy = false;
  let drawnAsImages = false;

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
    const style = bold ? 'bold' : italic ? 'italic' : 'normal';
    const imageLines = uni ? uni.wrap(value, CONTENT_W - indent, size, style) : null;
    pdf.setFont('helvetica', style);
    pdf.setFontSize(size);
    pdf.setTextColor(color[0], color[1], color[2]);
    const lines = imageLines || pdf.splitTextToSize(safe(value), CONTENT_W - indent);
    const step = lineHeight(size) * (imageLines ? 1.25 : 1);
    if (imageLines) drawnAsImages = true;
    lines.forEach((line) => {
      ensure(step);
      if (imageLines) uni.draw(line, MARGIN + indent, y + step * 0.75, size, style, color);
      else pdf.text(line, MARGIN + indent, y + step * 0.75);
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

  write('Name (optional): ____________________    Class or year: ______________    Date started: ______________', { size: 9.5, gap: 3 });
  write('Skills in this workbook', { size: 11.5, bold: true, color: [11, 118, 109], gap: 1 });
  write(skills.map((skill, index) => (skill.number || index + 1) + '. ' + skill.name).join('   '), { size: 10, gap: 3 });
  write('How to use it: read the notes, answer the three questions in your own words, rate yourself honestly and tick each day of the 7-day practice as you finish it. A self-rating is your own view, not a test result.', { size: 9.5, gap: 2.5 });
  write('Where to start: ' + startWith(skills, state.rating, meta.ratingLabels), { size: 9.5, gap: 2.5 });
  write(practiceLine(nextPractice(skills, state)), { size: 9.5, gap: 2.5 });
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

    sectionLabel('After the 7 days');
    const rating2 = Number((state.rating2 && state.rating2[skill.id]) || 0);
    write('My rating after the 7 days: ' + (meta.ratingLabels[rating2] || meta.ratingLabels[0]), { gap: 2 });
    write('One thing I will keep doing, and one real moment when I used this skill', { bold: true, gap: 1 });
    const keepText = String((state.keep && state.keep[skill.id]) || '').trim();
    if (keepText) write(keepText, { indent: 4, gap: 3 });
    else ruledLines(3);

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

  return { pdf, lossy, drawnAsImages };
}
