// Shared content and renderers for the career counselling form tool.
// One data model feeds the on-screen form, the printable sheet and the PDF,
// so the three always say the same thing.
import { createUnicodeText, isUnicodeLine, needsUnicode, prepareUnicodeText } from './pdfUnicodeText.mjs';

export type FormMode = 'general' | 'it';

export interface Prompt {
  key: string;
  label: string;
  hint: string;
  rows: number;
}

export interface OptionRow {
  name: string;
  mark: string;
  worry: string;
}

export interface FormData {
  mode: FormMode;
  stage: string;
  values: Record<string, string>;
  options: OptionRow[];
  /** True while the form holds the made-up example, so every copy says so. */
  example?: boolean;
}

export const MARKS: Record<string, string> = {
  unsure: 'Not rated yet',
  scalable: 'Scalable',
  business: 'Scalable with a business layer',
  notso: 'Not so scalable',
};

export const MODE_LABEL: Record<FormMode, string> = {
  general: 'General career counselling form',
  it: 'IT and tech career counselling form',
};

export const STAGES: Record<FormMode, Array<[string, string]>> = {
  general: [
    ['school', 'In school (Class 9 to 12)'],
    ['college', 'In college or finishing a degree'],
    ['early', 'Working, in the first few years'],
    ['experienced', 'Working for many years in one field'],
    ['change', 'Changing direction or returning to work'],
  ],
  it: [
    ['student-it', 'Student or fresher in computing'],
    ['early-it', 'Early in an IT role (up to about 3 years)'],
    ['mid-it', 'Mid-career in IT (about 4 to 10 years)'],
    ['senior-it', 'Senior or lead role in IT (10 years or more)'],
    ['gap-it', 'Between jobs, laid off or returning after a break'],
    ['into-it', 'Moving into IT from another field'],
  ],
};

export const STAGE_QUESTION: Record<FormMode, string> = {
  general: 'Which situation fits best?',
  it: 'Which stage fits best?',
};

export const PROMPTS: Record<FormMode, Prompt[]> = {
  general: [
    { key: 'goal', rows: 3, label: 'What decision or question do I want help with?', hint: 'For example: which course to take, whether to change fields, or how to restart after a break. One decision is easier to work on than five.' },
    { key: 'now', rows: 3, label: 'Where am I now?', hint: 'Study or work, for how long, what is going well and what is not. Facts first, feelings second.' },
    { key: 'subjects', rows: 2, label: 'My subjects, results and activities', hint: 'What I study or studied, which subjects I like and which I find hard, results in words or numbers if I want to share them, and what I do outside class.' },
    { key: 'strengths', rows: 3, label: 'What am I good at, with a reason I can show?', hint: 'Something others ask me to help with, or something I finished. Leave out claims I cannot show.' },
    { key: 'energy', rows: 3, label: 'Which tasks give me energy and which drain me?', hint: 'Think of real tasks from the last few months, not job titles.' },
    { key: 'family', rows: 2, label: 'What does my family hope for or worry about?', hint: 'One or two lines in their words, not mine. Leave it blank if the topic is private.' },
    { key: 'constraints', rows: 3, label: 'What limits my choices right now?', hint: 'Money, time, place, family duties, exam dates or rules. Skip anything private that I would rather not write down.' },
    { key: 'evidence', rows: 3, label: 'What evidence can I bring?', hint: 'Marksheets, project files, work samples, feedback, certificates, or results of any test I have taken. Bring copies, not originals.' },
    { key: 'gaps', rows: 2, label: 'What evidence am I missing?', hint: 'Something I believe but have not tested yet, such as whether I would enjoy the daily work.' },
    { key: 'questions', rows: 3, label: 'My top three questions for the counsellor', hint: 'For example: What should I test first? What is the main risk in my favourite option? How would someone in this route find their first paying client or employer?' },
    { key: 'outcome', rows: 2, label: 'What would make this session worth my time?', hint: 'The one thing I want to leave with, for example a shortlist of two options and a next step.' },
  ],
  it: [
    { key: 'goal', rows: 3, label: 'What career decision do I want help with?', hint: 'For example: service company to product company, testing to data, engineer to manager, starting consulting, or recovering after a layoff.' },
    { key: 'now', rows: 3, label: 'My current role, stack and situation', hint: 'Role, main tools or languages, years in each, type of employer, and what the work is like now.' },
    { key: 'target', rows: 2, label: 'Where do I want to be in the next one to two years?', hint: 'The role, the kind of employer, the city or remote work, and what would count as a good move for me.' },
    { key: 'strengths', rows: 3, label: 'Where is my work visibly strong?', hint: 'Systems I built or fixed, incidents I handled, reviews I gave, people I helped. Describe only what I can show without sharing confidential details.' },
    { key: 'energy', rows: 3, label: 'Which work gives me energy and which drains me?', hint: 'For example: building, debugging, design, client calls, documentation, on-call duty, estimating or mentoring.' },
    { key: 'constraints', rows: 3, label: 'What limits my moves right now?', hint: 'Notice period, loans or EMIs, savings runway, visa or relocation limits, family duties, and the hours I can really spend on learning each week.' },
    { key: 'evidence', rows: 3, label: 'What proof can I show?', hint: 'Public repositories, shipped features, dashboards, certificates with a project behind them, performance feedback, talks or write-ups. Remove client and employer secrets.' },
    { key: 'gaps', rows: 2, label: 'What proof am I missing?', hint: 'A skill I list but have not used in real work, or a role I want but have never tested with a small project.' },
    { key: 'jobsearch', rows: 3, label: 'Interviews and job search so far', hint: 'Roles I applied for, rounds I cleared, where I got stuck and any feedback I received. Leave it blank if I am not searching yet.' },
    { key: 'questions', rows: 3, label: 'My top three questions for the counsellor', hint: 'For example: Which gap should I close first? Is my target role crowded at entry level? How would I find my first paying client?' },
    { key: 'outcome', rows: 2, label: 'What would make this session worth my time?', hint: 'The one thing I want to leave with, for example one target role, one gap to close and a date to review.' },
  ],
};

export const OPTIONS_HEADING = 'Options I am already weighing';
export const OPTIONS_HINT = 'Name up to three options. For each one, pick a growth mark (Scalable, Scalable with a business layer, or Not so scalable) and write the main risk. Leave the mark as Not rated yet if you want the counsellor to help you rate it.';

export const AFTER_SESSION: Array<{ heading: string; hint?: string; lines: number }> = [
  { heading: 'What the counsellor said, in my own words', lines: 5 },
  { heading: 'What we agreed is the real question', lines: 2 },
  { heading: 'Strengths and interests the counsellor noticed, and the evidence for each', hint: 'Write the evidence beside each one. A strength with no evidence is only a guess.', lines: 3 },
  { heading: 'Evidence I will collect before the next decision', hint: 'One official page, one conversation, one small project or one cost check.', lines: 4 },
  { heading: 'Tests, courses or people the counsellor suggested I look at', hint: 'Check each one on its official source before you pay or apply.', lines: 3 },
  { heading: 'Questions I still need answered', lines: 2 },
  { heading: 'One next step and the date I will do it', lines: 2 },
  { heading: 'Review date', hint: 'When I will look at the evidence and decide whether to continue, compare or pause.', lines: 1 },
];

export function stageLabel(mode: FormMode, stage: string): string {
  const found = STAGES[mode].find(([value]) => value === stage);
  return found ? found[1] : STAGES[mode][0][1];
}

export function markLabel(mark: string): string {
  return MARKS[mark] || MARKS.unsure;
}

/** Short text the person can copy and send to a counsellor to ask for a session. */
export function requestNote(data: FormData): string {
  const v = data.values;
  const goal = (v.goal || '').trim() || '[write the decision you want help with]';
  const evidence = (v.evidence || '').trim() || '[list what you can bring]';
  const situation = stageLabel(data.mode, data.stage);
  const lead = data.mode === 'it'
    ? 'Hello, I work in or around IT and I would like to book a career counselling session.'
    : 'Hello, I would like to book a career counselling session.';
  return [
    lead,
    'My situation: ' + situation + '.',
    'The decision I want help with: ' + goal,
    'I will bring: ' + evidence,
    'Please tell me how long the session runs, how it is held, what you would like me to prepare, and the fee before I confirm. Thank you.',
  ].join('\n\n');
}

/** Sheet model shared by the print view and the PDF. */
export interface SheetBlock {
  heading: string;
  hint?: string;
  body?: string;
  lines: number;
  table?: { head: string[]; rows: string[][] };
  newPage?: boolean;
  /** Signature lines drawn at the end of the page. */
  sign?: string[];
}

export interface SheetModel {
  title: string;
  subtitle: string;
  /** Lines to write by hand under the title, for example date and name. */
  handLines: string[];
  blocks: SheetBlock[];
}

export function sheetModel(data: FormData, blank: boolean): SheetModel {
  const prompts = PROMPTS[data.mode];
  const title = data.mode === 'it' ? 'IT Career Counselling Form' : 'Career Counselling Form';
  const subtitle = data.example
    ? 'Made-up example for a fictional person. Not a real client and not a real report.'
    : blank
      ? 'Blank copy. Fill it in before the session and bring it with you.'
      : 'Prepared by me for my own career counselling session.';
  const handLines = blank
    ? [
        'Date: ____________________    Name (optional): ______________________',
        (data.mode === 'it' ? 'Current role and years: ________________' : 'Class, year or role: ________________') + '    Phone or email (optional): ________________',
      ]
    : ['Prepared on ' + new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' }) + '    Name (optional): ______________________'];
  const blocks: SheetBlock[] = [];
  blocks.push({
    heading: STAGE_QUESTION[data.mode],
    body: blank ? '' : stageLabel(data.mode, data.stage),
    lines: blank ? 1 : 0,
    hint: blank ? STAGES[data.mode].map(([, label]) => label).join(' / ') : undefined,
  });
  prompts.forEach((prompt) => {
    const value = blank ? '' : (data.values[prompt.key] || '').trim();
    blocks.push({ heading: prompt.label, hint: prompt.hint, body: value, lines: value ? 0 : prompt.rows });
  });
  const optionRows = [0, 1, 2].map((i) => {
    const o = data.options[i] || { name: '', mark: 'unsure', worry: '' };
    if (blank) return ['', '', ''];
    return [o.name.trim(), o.mark === 'unsure' && !o.name.trim() ? '' : markLabel(o.mark), o.worry.trim()];
  });
  blocks.push({
    heading: OPTIONS_HEADING,
    hint: OPTIONS_HINT,
    lines: 0,
    table: { head: ['Option', 'Growth mark', 'Main risk or worry'], rows: optionRows },
  });
  if (!blank) {
    blocks.push({ heading: 'Booking note I can send to a counsellor', body: requestNote(data), lines: 0 });
  }
  AFTER_SESSION.forEach((item, index) => {
    blocks.push({ heading: item.heading, hint: item.hint, lines: item.lines, newPage: index === 0 });
  });
  blocks.push({
    heading: 'Options after the session, each with a growth mark and a risk',
    hint: 'Mark each option Scalable, Scalable with a business layer, or Not so scalable.',
    lines: 0,
    table: { head: ['Option', 'Growth mark', 'Main risk'], rows: [['', '', ''], ['', '', ''], ['', '', '']] },
  });
  blocks.push({
    heading: 'Signatures',
    hint: 'Counselling gives guidance, not a promise of a result, a seat or a job. A parent or guardian signs only if the student is under 18.',
    lines: 0,
    sign: ['Counsellor name and date', 'My initials and date', 'Parent or guardian, if under 18'],
  });
  return { title, subtitle, handLines, blocks };
}

const esc = (value: unknown) => String(value == null ? '' : value).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));

/** HTML for the print view (a plain black on white sheet). */
export function sheetHtml(data: FormData, blank: boolean): string {
  const model = sheetModel(data, blank);
  const head = '<p class="ccs-title">' + esc(model.title) + '</p><p class="ccs-sub">' + esc(model.subtitle) + '</p>' + model.handLines.map((line) => '<p class="ccs-meta">' + esc(line).replace(/    /g, ' &nbsp; ') + '</p>').join('');
  const body = model.blocks.map((block) => {
    let html = (block.newPage ? '<h2 class="ccs-part ccs-newpage">After the session</h2>' : '') + '<section class="ccs-block"><h2>' + esc(block.heading) + '</h2>';
    if (block.hint) html += '<p class="ccs-hint">' + esc(block.hint) + '</p>';
    if (block.body) html += '<p class="ccs-answer">' + esc(block.body).replace(/\n/g, '<br>') + '</p>';
    if (block.table) {
      html += '<table class="ccs-table"><thead><tr>' + block.table.head.map((h) => '<th scope="col">' + esc(h) + '</th>').join('') + '</tr></thead><tbody>' +
        block.table.rows.map((row) => '<tr>' + row.map((cell, i) => '<td data-label="' + esc(block.table!.head[i]) + '">' + (esc(cell) || '&nbsp;') + '</td>').join('') + '</tr>').join('') + '</tbody></table>';
    }
    for (let i = 0; i < block.lines; i += 1) html += '<div class="ccs-line"></div>';
    if (block.sign) html += '<div class="ccs-sign">' + block.sign.map((label) => '<p><span class="ccs-sign-line"></span>' + esc(label) + '</p>').join('') + '</div>';
    return html + '</section>';
  }).join('');
  return head + body + '<p class="ccs-foot">futurecareerschool.com/tools/career-counselling-form/ . Your own preparation. It is not a test, a diagnosis or advice.</p>';
}

/** Replace characters the standard PDF font cannot draw. */
export function pdfText(value: string): string {
  return String(value == null ? '' : value)
    .replace(/₹/g, 'Rs. ')
    .replace(/[\u2012\u2013\u2014\u2212]/g, '-')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[•·∙]/g, '-')
    .replace(/…/g, '...')
    .replace(/[    ]/g, ' ')
    .replace(/\r\n?/g, '\n');
}

/** Every text the person typed, which the PDF may need to draw. */
export function userTexts(data: FormData): string[] {
  return [
    ...Object.values(data.values),
    ...data.options.flatMap((o) => [o.name, o.worry]),
  ].filter((t) => typeof t === 'string' && t.trim() !== '');
}

/** True when any entry holds a character the standard PDF font cannot draw (for example Telugu or Hindi). */
export function hasUnsupportedText(data: FormData): boolean {
  return userTexts(data).some((t) => needsUnicode(t));
}

/** Loads the Telugu or Hindi font on demand. Call before buildPdf and pass the answer in. */
export function prepareUnicodePdf(data: FormData): Promise<boolean> {
  return prepareUnicodeText(userTexts(data));
}

type JsPdfCtor = new (options?: any) => any;

/** Builds the PDF. Pass the jsPDF class so the library is loaded only on click. */
export function buildPdf(PdfDocument: JsPdfCtor, data: FormData, blank: boolean, unicodeReady = false): any {
  const model = sheetModel(data, blank);
  const pdf = new PdfDocument({ unit: 'mm', format: 'a4', compress: true });
  const uni = unicodeReady ? createUnicodeText(pdf) : null;
  const W = 210;
  const H = 297;
  const M = 16;
  const CW = W - M * 2;
  const bottom = H - 18;
  let y = M;
  const ink = [24, 28, 38] as const;
  const soft = [95, 104, 118] as const;
  const accent = [11, 118, 109] as const;
  const rule = [160, 168, 178] as const;

  const setText = (size: number, style: 'normal' | 'bold' | 'italic', color: readonly number[]) => {
    pdf.setFont('helvetica', style);
    pdf.setFontSize(size);
    pdf.setTextColor(color[0], color[1], color[2]);
  };
  const wrap = (text: string, width: number, size: number, style: 'normal' | 'bold' | 'italic'): string[] => {
    setText(size, style, ink);
    return (uni && uni.wrap(text, width, size, style)) || pdf.splitTextToSize(pdfText(text), width);
  };
  // Lines from the browser (Telugu, Hindi and so on) are drawn as images, plain English stays real text.
  const put = (line: string, x: number, baseline: number, size: number, style: 'normal' | 'bold' | 'italic', color: readonly number[]) => {
    if (uni && isUnicodeLine(line)) uni.draw(line, x, baseline, size, style, color);
    else pdf.text(line, x, baseline);
  };
  const ensure = (height: number) => {
    if (y + height > bottom) { pdf.addPage(); y = M; }
  };
  const writeLines = (lines: string[], size: number, style: 'normal' | 'bold' | 'italic', color: readonly number[], baseGap: number) => {
    const gap = lines.some((line) => uni && isUnicodeLine(line)) ? baseGap * 1.25 : baseGap;
    setText(size, style, color);
    lines.forEach((line) => {
      ensure(gap);
      put(line, M, y + gap * 0.72, size, style, color);
      y += gap;
    });
  };
  const ruled = (count: number) => {
    pdf.setDrawColor(rule[0], rule[1], rule[2]);
    pdf.setLineWidth(0.2);
    for (let i = 0; i < count; i += 1) {
      ensure(7);
      y += 7;
      pdf.line(M, y, W - M, y);
    }
    y += 2;
  };

  // Header band
  pdf.setFillColor(11, 118, 109);
  pdf.rect(0, 0, W, 5, 'F');
  y = 14;
  setText(20, 'bold', ink);
  pdf.text(pdfText(model.title), M, y + 6);
  y += 11;
  writeLines(wrap(model.subtitle, CW, 10, 'normal'), 10, 'normal', soft, 5);
  writeLines(model.handLines, 9.5, 'normal', ink, 7);
  y += 2;

  model.blocks.forEach((block) => {
    if (block.newPage) { pdf.addPage(); y = M; setText(14, 'bold', accent); pdf.text('After the session', M, y + 5); y += 10; }
    const headingLines = wrap(block.heading, CW, 11, 'bold');
    const hintLines = block.hint ? wrap(block.hint, CW, 8.5, 'italic') : [];
    ensure(headingLines.length * 5.2 + hintLines.length * 4.2 + 14 + (block.table ? 6.5 + block.table.rows.length * 11 + 4 : 0));
    writeLines(headingLines, 11, 'bold', accent, 5.2);
    if (hintLines.length) writeLines(hintLines, 8.5, 'italic', soft, 4.2);
    y += 1;
    if (block.body) {
      const bodyLines = wrap(block.body, CW, 10, 'normal');
      writeLines(bodyLines, 10, 'normal', ink, 5);
      y += 1;
    }
    if (block.table) {
      const colW = [CW * 0.34, CW * 0.26, CW * 0.4];
      // Keep a short table on one page: header and every row, so it never splits.
      ensure(6.5 + block.table.rows.length * 11 + 4);
      pdf.setDrawColor(rule[0], rule[1], rule[2]);
      pdf.setLineWidth(0.25);
      let x = M;
      ensure(8);
      pdf.setFillColor(232, 240, 239);
      pdf.rect(M, y, CW, 6.5, 'F');
      setText(9, 'bold', ink);
      block.table.head.forEach((h, i) => { pdf.text(pdfText(h), x + 1.5, y + 4.5); x += colW[i]; });
      y += 6.5;
      block.table.rows.forEach((row) => {
        const cells = row.map((cell, i) => wrap(cell, colW[i] - 3, 9.5, 'normal'));
        const lineStep = cells.some((c: string[]) => c.some((line) => uni && isUnicodeLine(line))) ? 5.4 : 4.4;
        const rowH = Math.max(11, Math.max(...cells.map((c: string[]) => c.length)) * lineStep + 3);
        ensure(rowH);
        let cx = M;
        setText(9.5, 'normal', ink);
        cells.forEach((lines: string[], i: number) => {
          pdf.rect(cx, y, colW[i], rowH);
          lines.forEach((line, li) => put(line, cx + 1.5, y + 4.6 + li * lineStep, 9.5, 'normal', ink));
          cx += colW[i];
        });
        y += rowH;
      });
      y += 3;
    }
    if (block.lines) ruled(block.lines);
    if (block.sign) {
      ensure(24);
      y += 12;
      const gap = 8;
      const w = (CW - gap * (block.sign.length - 1)) / block.sign.length;
      pdf.setDrawColor(ink[0], ink[1], ink[2]);
      pdf.setLineWidth(0.3);
      block.sign.forEach((label, i) => {
        const x = M + i * (w + gap);
        pdf.line(x, y, x + w, y);
        setText(8.5, 'normal', soft);
        pdf.text(pdfText(label), x, y + 4.2);
      });
      y += 8;
    }
    y += 2;
  });

  // Footer on every page
  const total = pdf.getNumberOfPages();
  for (let page = 1; page <= total; page += 1) {
    pdf.setPage(page);
    setText(8, 'normal', soft);
    pdf.text('futurecareerschool.com/tools/career-counselling-form/  |  Your own preparation. Not a test, a diagnosis or advice.', M, H - 9);
    pdf.text('Page ' + page + ' of ' + total, W - M, H - 9, { align: 'right' });
  }
  return pdf;
}


// ---------- made-up examples ----------
// Both examples describe a fictional person. They hold no figures, no fees and no pay.

export const EXAMPLE_NOTE = 'This is a made-up example for a fictional person. Press Clear my answers before you write your own.';

export const EXAMPLES: Record<FormMode, FormData> = {
  general: {
    mode: 'general',
    stage: 'school',
    example: true,
    values: {
      goal: 'After Class 12, should I study computer science or commerce with a digital skill? I need to choose before admissions open.',
      now: 'Class 12, maths, physics and chemistry. Maths is my best subject and chemistry my weakest.',
      subjects: 'I like maths and computer science. Chemistry practicals are hard for me. I run the quiz club in school.',
      strengths: 'Explaining maths to friends. I built a small quiz app for the club and my classmates used it.',
      energy: 'Energy: building the quiz app and solving puzzles. Drain: chapters that need memory only, and writing practical files.',
      family: 'My parents want a safe degree that leads to a job. They worry about fees and about me living far from home.',
      constraints: 'The family can pay for a local government or aided college. I cannot move to another city in the first year. Entrance exam dates must be checked.',
      evidence: 'Class 12 marksheet, the link to the quiz app, and a note from the club teacher about my work.',
      gaps: 'I have only tried coding for a few weeks. I do not know what the daily work in data or software looks like.',
      questions: '1. What should I test first?\n2. What is the main risk in a computer science degree from a local college?\n3. How would someone in data work find a first paying client or employer?',
      outcome: 'A shortlist of two options and one small thing to test.',
    },
    options: [
      { name: 'BCA or B.Sc computer science, then software or data roles', mark: 'scalable', worry: 'Entry roles are crowded, so I need built work and not only a degree.' },
      { name: 'B.Com with a digital marketing skill', mark: 'scalable', worry: 'Easy to enter, so I need a niche and a small portfolio.' },
      { name: 'Degree, then a government exam', mark: 'notso', worry: 'Few seats and many attempts. I would need a second skill.' },
    ],
  },
  it: {
    mode: 'it',
    stage: 'early-it',
    example: true,
    values: {
      goal: 'Should I move from application support in a service company to data engineering, or stay and aim for a lead role?',
      now: 'Application support engineer in a service company. Mostly SQL, Linux and ticket work. The work is steady but I am not building anything.',
      target: 'A data engineering role in a product team, in my own city or remote.',
      strengths: 'I wrote SQL scripts that removed a weekly manual report, and my team still uses them. I explain incidents clearly to clients.',
      energy: 'Energy: automating repeated work and debugging data problems. Drain: night shifts and ticket queues.',
      constraints: 'Notice period, an education loan EMI and a small savings cushion. I can study only on weekends and some evenings.',
      evidence: 'The script repository with client names removed, a short write-up of the report automation, and my manager\'s feedback note.',
      gaps: 'I have not used a cloud data tool in real work, and I have no finished data pipeline to show.',
      jobsearch: 'Not searching yet. I want to know what proof to build first.',
      questions: '1. Which gap should I close first?\n2. Is data engineering crowded at entry level?\n3. How would I find my first paying client for small data work?',
      outcome: 'One target role, one gap to close and a date to review.',
    },
    options: [
      { name: 'Data engineering in a product team', mark: 'scalable', worry: 'Tied to tools, so I need a pipeline I built and can show.' },
      { name: 'Stay and aim for a support team lead', mark: 'notso', worry: 'Few seats, and the skills may not move with me.' },
      { name: 'Small paid data projects beside my job', mark: 'business', worry: 'Clients must find and trust me first, and my employer rules may limit it.' },
    ],
  },
};

export const EXAMPLE_AFTER: Record<FormMode, Array<[string, string]>> = {
  general: [
    ['What we agreed is the real question', 'Do I enjoy building software for weeks, and not only for one weekend?'],
    ['Evidence I will collect before the next decision', 'Build one small app and show it to my club teacher. Read the fee and eligibility pages of two colleges on their official sites.'],
    ['One next step and the date I will do it', 'Start the small app and show it to my teacher by the date I write here.'],
    ['Review date', 'End of next month: look at the app, the feedback and the fee pages, then choose or compare again.'],
  ],
  it: [
    ['What we agreed is the real question', 'Can I show one finished data pipeline that a hiring team can read?'],
    ['Evidence I will collect before the next decision', 'Build one small pipeline with public data, write what it does in a page, and ask two data engineers what they would check first.'],
    ['One next step and the date I will do it', 'Choose the public data set and write the plan by the date I write here.'],
    ['Review date', 'End of next month: look at the pipeline and the feedback, then decide whether to apply or to build a second one.'],
  ],
};

// ---------- invitation letter ----------

export type LetterKind = 'speaker' | 'parents';

export interface LetterFields {
  kind: LetterKind;
  institution: string;
  audience: string;
  topic: string;
  date: string;
  time: string;
  venue: string;
  duration: string;
  contact: string;
  replyBy: string;
}

export const LETTER_KINDS: Record<LetterKind, string> = {
  speaker: 'Invite a counsellor to speak at our school or college',
  parents: 'Invite parents and students to a counselling session',
};

export function blankLetter(): LetterFields {
  return { kind: 'speaker', institution: '', audience: '', topic: '', date: '', time: '', venue: '', duration: '', contact: '', replyBy: '' };
}

const fill = (value: string, placeholder: string) => (value || '').trim() || '[' + placeholder + ']';

/** Plain text letter. Anything left empty stays as a [square bracket] placeholder, so it is easy to spot. */
export function letterText(f: LetterFields): string {
  const inst = fill(f.institution, 'name of school or college');
  const audience = fill(f.audience, 'who the session is for, for example Class 12 students');
  const topic = fill(f.topic, 'topic, for example choosing a course after Class 12');
  const details = [
    'Topic: ' + topic,
    'Date: ' + fill(f.date, 'date'),
    'Time: ' + fill(f.time, 'start time'),
    'Venue: ' + fill(f.venue, 'room or hall and address'),
    'Duration: ' + fill(f.duration, 'how long the session should run'),
    'For: ' + audience,
  ].join('\n');
  const contact = fill(f.contact, 'contact person, phone or email');
  const replyBy = fill(f.replyBy, 'reply-by date');
  if (f.kind === 'parents') {
    return [
      'Date: [date of this letter]',
      'Subject: Invitation to a career counselling session for ' + audience,
      'Dear Parents and Students,',
      inst + ' is holding a career counselling session. It is meant to help students and families think through study and career choices with a counsellor.',
      details,
      'Students may bring their latest marksheet and a short list of questions. Please confirm whether you will attend by ' + replyBy + '. For any query, contact ' + contact + '.',
      'Yours sincerely,\n[Name and designation]\n' + inst,
    ].join('\n\n');
  }
  return [
    'Date: [date of this letter]',
    'To,\n[Name of the counsellor or organisation]\n[Address or email]',
    'Subject: Invitation to conduct a career counselling session at ' + inst,
    'Respected Sir or Madam,',
    inst + ' invites you to conduct a career counselling session for ' + audience + '.',
    details,
    'Please tell us by ' + replyBy + ' whether you can attend, what room set-up you need, and whether any fee or travel cost applies. For any query, contact ' + contact + '.',
    'Thank you for your time.',
    'Yours sincerely,\n[Name and designation]\n' + inst,
  ].join('\n\n');
}

/** Print view of the letter. */
export function letterHtml(f: LetterFields): string {
  return '<p class="ccs-title">Invitation letter</p>' + letterText(f).split('\n\n').map((block) => '<p class="ccs-letter">' + esc(block).replace(/\n/g, '<br>') + '</p>').join('');
}
