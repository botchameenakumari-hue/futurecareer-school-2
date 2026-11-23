// @ts-nocheck
// Logic for the student mentoring form and report tool. It has no DOM access, so the same
// document model feeds the on-screen preview, the print view and the PDF download, and the
// three always match. Entries are plain objects kept in the browser by the component.
import { createUnicodeText, flattenTexts, isUnicodeLine, needsUnicode, prepareUnicodeText } from './pdfUnicodeText.mjs';

export const STORAGE_KEY = 'fcs-student-mentoring-v1';
export const MAX_SESSIONS = 24;
export const ACTION_ROWS = 4;
export const TOOL_URL = 'futurecareerschool.com/tools/student-mentoring-form-and-report/';

export const ROLES = {
  teacher: 'Teacher or school mentor',
  college: 'College mentor or faculty',
  senior: 'Senior student mentoring a junior',
  student: 'Student keeping a personal record',
};
export const STATUS = { open: 'Open', done: 'Done', moved: 'Moved to a new date', dropped: 'Dropped' };
export const CLARITY = { unset: 'Not recorded', clear: 'Very clear', mostly: 'Mostly clear', unclear: 'Unclear' };
export const LISTENED = { unset: 'Not recorded', yes: 'Yes, I was listened to', mostly: 'Mostly', no: 'Not really' };
export const NEXTSTEP = { unset: 'Not recorded', yes: 'Yes, I know my next step', some: 'Partly', no: 'Not yet' };
export const MODES = { unset: 'Not recorded', inperson: 'In person', online: 'Online', phone: 'Phone call', group: 'Small group' };
export const OVERALL = { unset: 'Not recorded', good: 'Good progress', some: 'Some progress', little: 'Little progress so far' };
export const EXAMPLE_NOTE = 'This is a made-up example for a fictional student. Press Clear all saved data before you record real sessions.';

export const DEFAULT_SCALE = {
  labels: { high: 'Scalable', mid: 'Scalable with a business layer', low: 'Not so scalable' },
  tips: {
    high: 'Build proof of work, take paid projects, then specialise or form a small agency.',
    mid: 'Plan the business layer from the start: consulting, a studio or practice, or a product.',
    low: 'Plan a second route and keep a skill running that can grow on its own.',
  },
};

export const NOT_CHECKED_TIP = 'Not marked yet. Mark it as Scalable, Scalable with a business layer or Not so scalable before acting on it.';

const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export function todayISO(d = new Date()) {
  const p = (n) => String(n).padStart(2, '0');
  return d.getFullYear() + '-' + p(d.getMonth() + 1) + '-' + p(d.getDate());
}

export function fmtDate(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso || ''));
  if (!m) return '';
  return Number(m[3]) + ' ' + MONTHS[Number(m[2]) - 1] + ' ' + m[1];
}

export function blankAction() {
  return { t: '', due: '', status: 'open' };
}

export function blankDraft(no = 1, today = todayISO()) {
  return {
    role: 'teacher',
    initials: '',
    classYear: '',
    mode: 'unset',
    minutes: '',
    no: String(no),
    date: today,
    goal: '',
    progress: '',
    obstacles: '',
    strengths: '',
    support: '',
    actions: Array.from({ length: ACTION_ROWS }, blankAction),
    followDate: '',
    followHow: '',
    option: '',
    mark: 'unchecked',
    risk: '',
    useful: '',
    unclear: '',
    clarity: 'unset',
    listened: 'unset',
    nextstep: 'unset',
  };
}

export function blankReport() {
  return { period: '', focus: '', observations: '', overall: 'unset', support: '', next: '' };
}

export function normaliseDraft(raw, fallbackNo = 1) {
  const base = blankDraft(fallbackNo);
  const d = Object.assign(base, raw && typeof raw === 'object' ? raw : {});
  const acts = Array.isArray(d.actions) ? d.actions : [];
  d.actions = Array.from({ length: ACTION_ROWS }, (_, i) => Object.assign(blankAction(), acts[i] || {}));
  if (!ROLES[d.role]) d.role = 'teacher';
  if (!CLARITY[d.clarity]) d.clarity = 'unset';
  if (!LISTENED[d.listened]) d.listened = 'unset';
  if (!NEXTSTEP[d.nextstep]) d.nextstep = 'unset';
  if (!MODES[d.mode]) d.mode = 'unset';
  if (!['unchecked', 'high', 'mid', 'low'].includes(d.mark)) d.mark = 'unchecked';
  return d;
}

export function nextSessionNo(sessions) {
  const top = sessions.reduce((max, s) => Math.max(max, parseInt(s.no, 10) || 0), 0);
  return Math.max(top, sessions.length) + 1;
}

const markLabel = (key, scale) => (scale.labels[key] || 'Not yet checked');
const markTip = (key, scale) => (scale.tips[key] || NOT_CHECKED_TIP);

const sortSessions = (sessions) =>
  sessions.slice().sort((a, b) => String(a.date || '').localeCompare(String(b.date || '')) || (parseInt(a.no, 10) || 0) - (parseInt(b.no, 10) || 0));

// ---------- document models ----------
// Block types: title, meta, h, p, field, list, table, sign, note.

const NOTE_LIMITS =
  'This document records what was typed into it. It is not an assessment, a score or a prediction. Check any course, exam or fee on its official source before acting.';

export function recordModel(draft, today = todayISO(), example = false) {
  const d = draft;
  const blankForm = !d.goal && !d.progress && !d.obstacles;
  const rows = d.actions.map((a, i) => [String(i + 1), a.t, a.due ? fmtDate(a.due) : '', a.t ? STATUS[a.status] || '' : '']);
  const choice = (label, map, value) => ({ t: 'choices', label, options: Object.keys(map).filter((k) => k !== 'unset').map((k) => map[k]), value: value && value !== 'unset' ? map[value] : '' });
  const blocks = [
    { t: 'title', text: 'Mentoring session record', sub: example ? 'Made-up example for a fictional student' : 'Session ' + (d.no || '') + (d.date ? ', ' + fmtDate(d.date) : '') },
    {
      t: 'meta',
      rows: [
        ['Filled in by', ROLES[d.role]],
        ['Student initials', d.initials || (blankForm ? '' : 'Not given')],
        ['Class, year or course', d.classYear],
        ['Session number', d.no || ''],
        ['Session date', fmtDate(d.date)],
        ['Time taken, in minutes', d.minutes],
      ],
    },
    choice('How the session was held', MODES, d.mode),
    { t: 'h', text: '1. Goal of this session' },
    { t: 'field', label: 'What did we want to get out of this session?', text: d.goal, lines: 3 },
    { t: 'h', text: '2. Progress since the last session' },
    { t: 'field', label: 'What changed, what was finished, what was not?', text: d.progress, lines: 3 },
    { t: 'h', text: '3. Obstacles' },
    { t: 'field', label: 'What is getting in the way?', text: d.obstacles, lines: 3 },
    { t: 'h', text: '4. What went well and strengths seen' },
    { t: 'field', label: 'What did the student do well? Name the evidence.', text: d.strengths, lines: 2 },
    { t: 'h', text: '5. Agreed actions with dates' },
    { t: 'table', head: ['No.', 'Action', 'Due date', 'Status'], widths: [0.08, 0.56, 0.17, 0.19], rows },
    { t: 'h', text: '6. Follow-up' },
    {
      t: 'meta',
      rows: [['Next session or check date', d.followDate ? fmtDate(d.followDate) : '']],
    },
    { t: 'field', label: 'How will progress be checked?', text: d.followHow, lines: 2 },
    { t: 'h', text: '7. Option or route suggested (optional)' },
    {
      t: 'meta',
      rows: [
        ['Option suggested', d.option],
        ['Growth mark', d.option ? markLabel(d.mark, DEFAULT_SCALE) : ''],
        ['Risk to remember', d.risk],
      ],
    },
    { t: 'h', text: '8. Extra support or referral (optional)' },
    { t: 'field', label: 'Does the student need a counsellor, a teacher, the family or another adult to know or help? Say who and why, without private details.', text: d.support, lines: 2 },
    { t: 'h', text: '9. Student feedback on the session (optional)' },
    { t: 'field', label: 'What was most useful?', text: d.useful, lines: 2 },
    { t: 'field', label: 'What was unclear or did not fit?', text: d.unclear, lines: 2 },
    choice('How clear was the advice?', CLARITY, d.clarity),
    choice('Did I feel listened to?', LISTENED, d.listened),
    choice('Do I know my next step?', NEXTSTEP, d.nextstep),
    { t: 'sign', labels: ['Mentor initials and date', 'Student initials and date', 'Parent or guardian, if informed'] },
    { t: 'note', text: NOTE_LIMITS },
  ];
  return { kind: 'record', fileName: 'mentoring-session-record.pdf', blocks };
}

export function reportModel(state, today = todayISO(), scale = DEFAULT_SCALE) {
  const sessions = sortSessions(state.sessions || []);
  const r = Object.assign(blankReport(), state.report || {});
  const example = !!state.example;
  const first = sessions.length ? sessions[0].date : '';
  const last = sessions.length ? sessions[sessions.length - 1].date : '';
  const roleKey = sessions.length ? sessions[sessions.length - 1].role : (state.draft && state.draft.role) || 'teacher';
  const initials = (sessions.find((s) => s.initials) || {}).initials || '';
  const classYear = (sessions.find((s) => s.classYear) || {}).classYear || '';

  const blocks = [];
  blocks.push({ t: 'title', text: 'Mentoring report', sub: example ? 'Made-up example for a fictional student' : r.period || 'Summary of recorded sessions' });
  blocks.push({
    t: 'meta',
    rows: [
      ['Prepared by', ROLES[roleKey] || ROLES.teacher],
      ['Student initials', initials || 'Not given'],
      ['Class, year or course', classYear],
      ['Period', r.period || ''],
      ['Sessions recorded', String(sessions.length)],
      ['Dates covered', sessions.length ? (first === last ? fmtDate(first) : fmtDate(first) + ' to ' + fmtDate(last)) : ''],
      ['Report date', fmtDate(today)],
    ],
  });

  blocks.push({ t: 'h', text: '1. Focus of the mentoring' });
  blocks.push({ t: 'field', label: 'What was the mentoring about?', text: r.focus, lines: 3 });

  blocks.push({ t: 'h', text: '2. Sessions at a glance' });
  if (sessions.length) {
    const held = Object.keys(MODES).filter((k) => k !== 'unset').map((k) => [MODES[k], sessions.filter((x) => x.mode === k).length]).filter((x) => x[1] > 0);
    if (held.length) blocks.push({ t: 'p', text: 'How the sessions were held: ' + held.map((x) => x[1] + ' ' + x[0].toLowerCase()).join(', ') + '.' });
    blocks.push({
      t: 'table',
      head: ['No.', 'Date', 'Goal', 'Progress', 'Obstacles'],
      widths: [0.07, 0.15, 0.26, 0.26, 0.26],
      rows: sessions.map((s) => [s.no || '', fmtDate(s.date), s.goal, s.progress, s.obstacles]),
    });
  } else {
    blocks.push({ t: 'p', text: 'No sessions have been saved yet. Save a session record to the log and it will appear here.' });
  }

  blocks.push({ t: 'h', text: '3. Agreed actions' });
  const actions = [];
  sessions.forEach((s) => (s.actions || []).forEach((a) => { if (a && a.t && a.t.trim()) actions.push({ s, a }); }));
  if (actions.length) {
    const count = (k) => actions.filter((x) => x.a.status === k).length;
    const overdue = actions.filter((x) => x.a.status === 'open' && x.a.due && x.a.due < today).length;
    let line = actions.length + (actions.length === 1 ? ' action was' : ' actions were') + ' agreed: ' + count('done') + ' done, ' + count('open') + ' open, ' + count('moved') + ' moved to a new date and ' + count('dropped') + ' dropped.';
    if (overdue) line += ' ' + overdue + (overdue === 1 ? ' open action is' : ' open actions are') + ' past its date.';
    blocks.push({ t: 'p', text: line });
    blocks.push({
      t: 'table',
      head: ['Session', 'Action', 'Due date', 'Status'],
      widths: [0.12, 0.5, 0.18, 0.2],
      rows: actions.map((x) => [x.s.no || '', x.a.t, x.a.due ? fmtDate(x.a.due) : 'No date', STATUS[x.a.status] || '']),
    });
  } else {
    blocks.push({ t: 'p', text: 'No actions have been recorded yet.' });
  }

  blocks.push({ t: 'h', text: '4. Strengths and what went well' });
  const strong = sessions.filter((s) => s.strengths && s.strengths.trim());
  if (strong.length) blocks.push({ t: 'list', title: 'Strengths seen, with evidence', items: strong.map((s) => 'Session ' + (s.no || '') + ': ' + s.strengths) });
  else blocks.push({ t: 'p', text: 'No strengths have been recorded yet.' });

  blocks.push({ t: 'h', text: '5. Options suggested and growth check' });
  const options = sessions.filter((s) => s.option && s.option.trim());
  if (options.length) {
    blocks.push({
      t: 'table',
      head: ['Session', 'Option suggested', 'Growth mark', 'Risk to remember', 'Next growth step'],
      widths: [0.1, 0.2, 0.17, 0.25, 0.28],
      rows: options.map((s) => [s.no || '', s.option, markLabel(s.mark, scale), s.risk, markTip(s.mark, scale)]),
    });
  } else {
    blocks.push({ t: 'p', text: 'No option or route was suggested in the recorded sessions.' });
  }

  blocks.push({ t: 'h', text: '6. Extra support or referrals' });
  const support = sessions.filter((s) => s.support && s.support.trim());
  if (support.length) blocks.push({ t: 'list', title: 'Support or referral noted', items: support.map((s) => 'Session ' + (s.no || '') + ': ' + s.support) });
  else blocks.push({ t: 'p', text: 'No extra support or referral was recorded.' });

  blocks.push({ t: 'h', text: '7. Student feedback' });
  const rated = sessions.filter((s) => s.clarity && s.clarity !== 'unset');
  const heard = sessions.filter((s) => s.listened && s.listened !== 'unset');
  const stepKnown = sessions.filter((s) => s.nextstep && s.nextstep !== 'unset');
  const useful = sessions.filter((s) => s.useful && s.useful.trim());
  const unclear = sessions.filter((s) => s.unclear && s.unclear.trim());
  if (rated.length || heard.length || stepKnown.length || useful.length || unclear.length) {
    if (rated.length) {
      const c = (k) => rated.filter((s) => s.clarity === k).length;
      blocks.push({ t: 'p', text: 'Clarity of advice, as recorded: ' + c('clear') + ' very clear, ' + c('mostly') + ' mostly clear, ' + c('unclear') + ' unclear.' });
    }
    if (heard.length) {
      const c = (k) => heard.filter((s) => s.listened === k).length;
      blocks.push({ t: 'p', text: 'Felt listened to, as recorded: ' + c('yes') + ' yes, ' + c('mostly') + ' mostly, ' + c('no') + ' not really.' });
    }
    if (stepKnown.length) {
      const c = (k) => stepKnown.filter((s) => s.nextstep === k).length;
      blocks.push({ t: 'p', text: 'Knew the next step, as recorded: ' + c('yes') + ' yes, ' + c('some') + ' partly, ' + c('no') + ' not yet.' });
    }
    if (useful.length) blocks.push({ t: 'list', title: 'Most useful', items: useful.map((s) => 'Session ' + (s.no || '') + ': ' + s.useful) });
    if (unclear.length) blocks.push({ t: 'list', title: 'Unclear or did not fit', items: unclear.map((s) => 'Session ' + (s.no || '') + ': ' + s.unclear) });
  } else {
    blocks.push({ t: 'p', text: 'No student feedback has been recorded.' });
  }

  blocks.push({ t: 'h', text: '8. Mentor observations and overall progress' });
  blocks.push({ t: 'meta', rows: [['Overall progress', r.overall && r.overall !== 'unset' ? OVERALL[r.overall] : '']] });
  blocks.push({ t: 'field', label: 'What stood out across these sessions?', text: r.observations, lines: 3 });

  blocks.push({ t: 'h', text: '9. Next steps and follow-up' });
  const dated = sessions.filter((s) => s.followDate);
  let follow = null;
  if (dated.length) {
    const upcoming = dated.filter((s) => s.followDate >= today).sort((a, b) => a.followDate.localeCompare(b.followDate));
    follow = upcoming.length ? upcoming[0] : dated.sort((a, b) => a.followDate.localeCompare(b.followDate))[dated.length - 1];
  }
  blocks.push({
    t: 'meta',
    rows: [
      ['Latest follow-up date', follow ? fmtDate(follow.followDate) : ''],
      ['How progress will be checked', follow ? follow.followHow : ''],
    ],
  });
  blocks.push({ t: 'field', label: 'Recommended next steps', text: r.next, lines: 3 });
  blocks.push({ t: 'field', label: 'Support needed from the school, college or family', text: r.support, lines: 2 });
  blocks.push({ t: 'sign', labels: ['Mentor initials and date', 'Student initials and date', 'Parent or guardian, if informed'] });
  blocks.push({ t: 'note', text: NOTE_LIMITS });
  return { kind: 'report', fileName: 'mentoring-report.pdf', blocks };
}

// ---------- HTML rendering (screen preview and print) ----------

export const esc = (v) =>
  String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function modelToHtml(model) {
  const out = [];
  model.blocks.forEach((b) => {
    if (b.t === 'title') {
      out.push('<header class="smr-doc-head"><p class="smr-doc-brand">FutureCareerSchool</p><h3 class="smr-doc-title">' + esc(b.text) + '</h3>' + (b.sub ? '<p class="smr-doc-sub">' + esc(b.sub) + '</p>' : '') + '</header>');
    } else if (b.t === 'meta') {
      out.push('<dl class="smr-meta">' + b.rows.map((r) => '<div><dt>' + esc(r[0]) + '</dt><dd>' + (r[1] ? esc(r[1]) : '<span class="smr-blank-line"></span>') + '</dd></div>').join('') + '</dl>');
    } else if (b.t === 'h') {
      out.push('<h4 class="smr-doc-h">' + esc(b.text) + '</h4>');
    } else if (b.t === 'p') {
      out.push('<p class="smr-doc-p">' + esc(b.text) + '</p>');
    } else if (b.t === 'field') {
      const body = b.text && b.text.trim() ? '<p class="smr-doc-p smr-pre">' + esc(b.text) + '</p>' : Array.from({ length: b.lines || 2 }, () => '<span class="smr-rule"></span>').join('');
      out.push('<div class="smr-field"><b>' + esc(b.label) + '</b>' + body + '</div>');
    } else if (b.t === 'list') {
      out.push('<div class="smr-field"><b>' + esc(b.title) + '</b><ul>' + b.items.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul></div>');
    } else if (b.t === 'table') {
      out.push(
        '<div class="smr-tablewrap"><table class="smr-table"><colgroup>' + b.widths.map((w) => '<col style="width:' + (w * 100).toFixed(1) + '%">').join('') + '</colgroup><thead><tr>' + b.head.map((h) => '<th scope="col">' + esc(h) + '</th>').join('') + '</tr></thead><tbody>' +
          b.rows.map((row) => '<tr>' + row.map((cell, i) => '<td data-label="' + esc(b.head[i]) + '"' + (cell ? '' : ' class="smr-empty"') + '>' + (cell ? esc(cell) : '&nbsp;') + '</td>').join('') + '</tr>').join('') +
          '</tbody></table></div>'
      );
    } else if (b.t === 'choices') {
      const body = b.value ? '<p class="smr-doc-p">' + esc(b.value) + '</p>' : '<p class="smr-doc-p smr-choices">' + b.options.map((o) => '<span class="smr-choice"><span class="smr-box-sq" aria-hidden="true"></span>' + esc(o) + '</span>').join('') + '</p>';
      out.push('<div class="smr-field"><b>' + esc(b.label) + '</b>' + body + '</div>');
    } else if (b.t === 'sign') {
      out.push('<div class="smr-sign">' + b.labels.map((l) => '<p><span class="smr-sign-line"></span>' + esc(l) + '</p>').join('') + '</div>');
    } else if (b.t === 'note') {
      out.push('<p class="smr-doc-note">' + esc(b.text) + '</p>');
    }
  });
  return out.join('');
}

// ---------- PDF ----------

// Text the standard PDF font cannot draw (Telugu, Hindi and so on) is drawn by the browser and
// added as images. See pdfUnicodeText.mjs.
/** Plain text of a record or report model, for pasting into WhatsApp or a message. Empty fields are left out. */
export function modelToText(model) {
  const out = [];
  model.blocks.forEach((b) => {
    if (b.t === 'title') { out.push('*' + b.text + '*'); if (b.sub) out.push(b.sub); }
    else if (b.t === 'meta') b.rows.forEach((r) => { if (r[1]) out.push(r[0] + ': ' + r[1]); });
    else if (b.t === 'h') out.push('', '*' + b.text + '*');
    else if (b.t === 'p') out.push(b.text);
    else if (b.t === 'field') { if (b.text && b.text.trim()) out.push(b.label + ': ' + b.text.trim()); }
    else if (b.t === 'list') { if (b.items.length) { out.push('', '*' + b.title + '*'); b.items.forEach((i) => out.push('• ' + i)); } }
    else if (b.t === 'table') b.rows.forEach((row) => { const cells = row.map((cell, i) => { if (!cell) return ''; const text = String(cell).replace(/[\s.]+$/, ''); return i === 0 && b.head[0] === 'No.' ? 'Session ' + text : b.head[i] + ': ' + text; }).filter(Boolean); if (cells.length) out.push('• ' + cells.join('; ')); });
    else if (b.t === 'choices') { if (b.value) out.push(b.label + ': ' + b.value); }
  });
  out.push('', 'Made with the free tool at https://' + TOOL_URL);
  return out.join('\n');
}

export function hasUnsupportedText(model) {
  return flattenTexts(model).some((text) => needsUnicode(text));
}

/** Loads the Telugu or Hindi font on demand. Call before buildPdf and pass the answer in. */
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
    .replace(/ /g, ' ')
    .replace(/[^\x20-\x7E\n\u00A0-\u00FF]/g, '?')
    .replace(/[ \t]+/g, ' ')
    .replace(/\r/g, '');
}

export function buildPdf(JsPDF, model, unicodeReady = false) {
  const pdf = new JsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  const uni = unicodeReady ? createUnicodeText(pdf) : null;
  const isImg = (l) => uni && isUnicodeLine(l);
  // Lines from the browser are drawn as images, plain English stays real text.
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

  // Small bold label above a field. A long label wraps instead of running off the page.
  const label = (text) => {
    font(9.5, 'bold'); color(GREY);
    const ls = pdf.splitTextToSize(pdfText(text), CW);
    need(ls.length * 4.6 + 8);
    ls.forEach((l) => { pdf.text(l, M, y + 3.5); y += 4.6; });
    y += 1.4;
  };

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
      font(20, 'bold'); color(INK); pdf.text(pdfText(b.text), M, y + 7); y += 11;
      if (b.sub) { paragraph(b.sub, 11, 'normal', GREY, 5.5, M, CW); }
      y += 2; rule(M, M + CW, y, TEAL, 0.6); y += 5;
    } else if (b.t === 'meta') {
      b.rows.forEach((r) => {
        // A long label (for example "How progress will be checked") pushes the value to the right instead of running into it.
        const label = pdfText(r[0]) + (/[?:]$/.test(r[0]) ? '' : ':');
        font(10, 'bold');
        const valueX = Math.max(M + 52, M + pdf.getTextWidth(label) + 3);
        const val = wrap(r[1] || '', M + CW - valueX, 10, 'normal');
        const rows = Math.max(1, val.length);
        const step = val.some(isImg) ? 6.2 : 5;
        need(rows * step + 2);
        font(10, 'bold'); color(INK); pdf.text(label, M, y + 3.8);
        font(10, 'normal'); color(INK);
        if (val.length && val.join('').replace(/\uE000/g, '').trim()) val.forEach((l, i) => { if (l) put(l, valueX, y + 3.8 + i * step, 10, 'normal', INK); });
        else rule(valueX, M + CW, y + 4.2, RULE, 0.2);
        y += rows * step + 1;
      });
      y += 1.5;
    } else if (b.t === 'h') {
      need(34);
      y += 1.5;
      font(12, 'bold'); color(TEAL); pdf.text(pdfText(b.text), M, y + 4); y += 6.5;
      rule(M, M + CW, y, [200, 206, 210], 0.2); y += 2.5;
    } else if (b.t === 'p') {
      paragraph(b.text, 10, 'normal', INK, 5, M, CW); y += 1.5;
    } else if (b.t === 'field') {
      need(14);
      label(b.label);
      if (b.text && b.text.trim()) { paragraph(b.text, 10, 'normal', INK, 5, M, CW); y += 1.5; }
      else { for (let i = 0; i < (b.lines || 2); i++) { need(7); rule(M, M + CW, y + 5.5, RULE, 0.2); y += 7; } y += 1; }
    } else if (b.t === 'list') {
      need(12);
      label(b.title);
      b.items.forEach((item) => {
        const ls = wrap(item, CW - 6, 10, 'normal');
        color(INK); font(10, 'normal');
        const step = ls.some(isImg) ? 6.2 : 5;
        ls.forEach((l, i) => { need(step); if (i === 0) { font(10, 'normal'); color(INK); pdf.text('-', M + 1, y + 3.8); } if (l) put(l, M + 6, y + 3.8, 10, 'normal', INK); y += step; });
        y += 0.8;
      });
      y += 1;
    } else if (b.t === 'table') {
      const widths = b.widths.map((w) => w * CW);
      const pad = 1.6;
      const drawRow = (cells, header, minH) => {
        const wrapped = cells.map((c, i) => wrap(c, widths[i] - pad * 2, header ? 9 : 9.5, header ? 'bold' : 'normal'));
        const lh = wrapped.some((w) => w.some(isImg)) ? 5.4 : 4.4;
        const h = Math.max(minH, Math.max(...wrapped.map((w) => Math.max(1, w.length))) * lh + pad * 2);
        if (y + h > BOTTOM) { pdf.addPage(); y = M; if (!header) drawRow(b.head, true, 8); }
        let x = M;
        cells.forEach((c, i) => {
          if (header) { pdf.setFillColor(226, 240, 238); pdf.rect(x, y, widths[i], h, 'F'); }
          pdf.setDrawColor(150, 158, 166); pdf.setLineWidth(0.2); pdf.rect(x, y, widths[i], h);
          color(INK); font(header ? 9 : 9.5, header ? 'bold' : 'normal');
          wrapped[i].forEach((l, j) => { if (l) put(l, x + pad, y + pad + 3 + j * lh, header ? 9 : 9.5, header ? 'bold' : 'normal', INK); });
          x += widths[i];
        });
        y += h;
      };
      need(8 + 9);
      drawRow(b.head, true, 8);
      b.rows.forEach((row) => drawRow(row, false, 9));
      y += 3;
    } else if (b.t === 'choices') {
      need(14);
      label(b.label);
      if (b.value) { paragraph(b.value, 10, 'normal', INK, 5, M, CW); y += 1.5; }
      else {
        // Tick boxes for a paper copy, wrapped onto a new line when a row is full.
        font(10, 'normal'); color(INK);
        let x = M;
        b.options.forEach((o) => {
          const label = pdfText(o);
          const w = 3.2 + 2 + pdf.getTextWidth(label) + 7;
          if (x + w > M + CW) { x = M; y += 6; need(6); }
          pdf.setDrawColor(INK[0], INK[1], INK[2]); pdf.setLineWidth(0.3); pdf.rect(x, y + 0.6, 3.4, 3.4);
          pdf.text(label, x + 5.4, y + 3.6);
          x += w;
        });
        y += 8;
      }
    } else if (b.t === 'sign') {
      need(20);
      y += 6;
      const gap = 8;
      const w = (CW - gap * (b.labels.length - 1)) / b.labels.length;
      b.labels.forEach((l, i) => {
        const x = M + i * (w + gap);
        rule(x, x + w, y, INK, 0.3);
        font(8.5, 'normal'); color(GREY); pdf.text(pdfText(l), x, y + 4.5);
      });
      y += 8;
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

// ---------- made-up example (a fictional student, no figures, fees or pay) ----------

const exSession = (no, date, fields) => Object.assign(blankDraft(no, date), { id: 'example-' + no, role: 'teacher', initials: 'AB', classYear: 'Class 11', no: String(no), date }, fields);

export function exampleState() {
  const sessions = [
    exSession(1, '2026-08-12', {
      mode: 'inperson', minutes: '30',
      goal: 'Understand how AB chooses between science with computers and commerce, and agree what to find out first.',
      progress: 'First session. AB brought the Class 10 marksheet and a list of three options.',
      obstacles: 'The family prefers a safe government route. AB has not seen what daily work in computing looks like.',
      strengths: 'Explains maths clearly to classmates. Built a small quiz app for the school club.',
      actions: [
        { t: 'Read the official subject combination page of the board', due: '2026-08-26', status: 'done' },
        { t: 'Talk to one person who works in computing and note three questions answered', due: '2026-09-09', status: 'done' },
        blankAction(), blankAction(),
      ],
      followDate: '2026-09-16', followHow: 'AB brings the notes and we review them together.',
      option: 'Computer science after Class 12', mark: 'high', risk: 'Entry roles are crowded, so built work matters more than a certificate.',
      useful: 'Seeing all three options on one page.', unclear: 'Which exams to check first.', clarity: 'mostly', listened: 'yes', nextstep: 'some',
    }),
    exSession(2, '2026-09-16', {
      mode: 'online', minutes: '25',
      goal: 'Review what AB learned from the conversation and decide what to test next.',
      progress: 'AB spoke to a cousin who works in software and learned that real projects matter more than marks alone.',
      obstacles: 'Exam revision leaves little time. Family worry about fees has not been discussed yet.',
      strengths: 'Followed through on both actions and wrote clear notes.',
      actions: [
        { t: 'Make one small app and show it to the club teacher', due: '2026-10-21', status: 'done' },
        { t: 'List the fee and eligibility facts for two colleges from their official sites', due: '2026-10-21', status: 'moved' },
        { t: 'Ask the family one question about what worries them most', due: '2026-10-07', status: 'open' },
        blankAction(),
      ],
      followDate: '2026-10-21', followHow: 'Look at the app together and read the fee notes.',
      option: 'Commerce with a digital marketing skill', mark: 'high', risk: 'Easy to enter, so a niche and a small portfolio are needed.',
      useful: 'The advice to build something small first.', unclear: '', clarity: 'clear', listened: 'yes', nextstep: 'yes',
      support: 'Suggest a short talk with the school counsellor about exam worry.',
    }),
    exSession(3, '2026-10-21', {
      mode: 'inperson', minutes: '30',
      goal: 'Look at the app and the fee notes, then agree one next step before subject choices are confirmed.',
      progress: 'The app is finished and the club teacher gave feedback. The fee facts for one college are done and the second is still open.',
      obstacles: 'Time for revision. AB is still unsure whether enjoying a project means enjoying the daily work.',
      strengths: 'Finished a real project and asked for feedback. Explains choices calmly.',
      actions: [
        { t: 'Finish the fee and eligibility notes for the second college', due: '2026-11-04', status: 'open' },
        { t: 'Write one page on what AB enjoyed and disliked while building the app', due: '2026-11-11', status: 'done' },
        blankAction(), blankAction(),
      ],
      followDate: '2026-12-02', followHow: 'AB shares the page and the second fee note.',
      option: 'Government exam route after a degree', mark: 'low', risk: 'Few seats and many attempts, so a second skill is needed.',
      useful: 'Writing down what I enjoyed.', unclear: '', clarity: 'clear', listened: 'mostly', nextstep: 'yes',
    }),
  ];
  return {
    example: true,
    sessions,
    editingId: null,
    draft: blankDraft(4),
    report: {
      period: 'Term 2, August to October',
      focus: 'Choosing between science with computers and commerce, using real evidence and a small project.',
      observations: 'AB follows through on actions and learns most by trying something small. The family worry about fees still needs a calm talk.',
      overall: 'good',
      support: 'A short family conversation about fees, with the college fee notes on the table.',
      next: 'Finish the second college fee note, then choose two options to test through the next term.',
    },
  };
}
