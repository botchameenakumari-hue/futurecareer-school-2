// @ts-nocheck
// Logic for the student mentoring form and report tool. It has no DOM access, so the same
// document model feeds the on-screen preview, the print view and the PDF download, and the
// three always match. Entries are plain objects kept in the browser by the component.

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
    no: String(no),
    date: today,
    goal: '',
    progress: '',
    obstacles: '',
    actions: Array.from({ length: ACTION_ROWS }, blankAction),
    followDate: '',
    followHow: '',
    option: '',
    mark: 'unchecked',
    risk: '',
    useful: '',
    unclear: '',
    clarity: 'unset',
  };
}

export function blankReport() {
  return { period: '', focus: '', observations: '', next: '' };
}

export function normaliseDraft(raw, fallbackNo = 1) {
  const base = blankDraft(fallbackNo);
  const d = Object.assign(base, raw && typeof raw === 'object' ? raw : {});
  const acts = Array.isArray(d.actions) ? d.actions : [];
  d.actions = Array.from({ length: ACTION_ROWS }, (_, i) => Object.assign(blankAction(), acts[i] || {}));
  if (!ROLES[d.role]) d.role = 'teacher';
  if (!CLARITY[d.clarity]) d.clarity = 'unset';
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

export function recordModel(draft, today = todayISO()) {
  const d = draft;
  const rows = d.actions.map((a, i) => [String(i + 1), a.t, a.due ? fmtDate(a.due) : '', a.t ? STATUS[a.status] || '' : '']);
  const blocks = [
    { t: 'title', text: 'Mentoring session record', sub: 'Session ' + (d.no || '') + (d.date ? ', ' + fmtDate(d.date) : '') },
    {
      t: 'meta',
      rows: [
        ['Filled in by', ROLES[d.role]],
        ['Initials', d.initials || 'Not given'],
        ['Session number', d.no || ''],
        ['Session date', fmtDate(d.date)],
      ],
    },
    { t: 'h', text: '1. Goal of this session' },
    { t: 'field', label: 'What did we want to get out of this session?', text: d.goal, lines: 3 },
    { t: 'h', text: '2. Progress since the last session' },
    { t: 'field', label: 'What changed, what was finished, what was not?', text: d.progress, lines: 3 },
    { t: 'h', text: '3. Obstacles' },
    { t: 'field', label: 'What is getting in the way?', text: d.obstacles, lines: 3 },
    { t: 'h', text: '4. Agreed actions with dates' },
    { t: 'table', head: ['No.', 'Action', 'Due date', 'Status'], widths: [0.08, 0.56, 0.17, 0.19], rows },
    { t: 'h', text: '5. Follow-up' },
    {
      t: 'meta',
      rows: [['Next session or check date', d.followDate ? fmtDate(d.followDate) : '']],
    },
    { t: 'field', label: 'How will progress be checked?', text: d.followHow, lines: 2 },
    { t: 'h', text: '6. Option or route suggested (optional)' },
    {
      t: 'meta',
      rows: [
        ['Option suggested', d.option],
        ['Growth mark', d.option ? markLabel(d.mark, DEFAULT_SCALE) : ''],
        ['Risk to remember', d.risk],
      ],
    },
    { t: 'h', text: '7. Student feedback on the session (optional)' },
    { t: 'field', label: 'What was most useful?', text: d.useful, lines: 2 },
    { t: 'field', label: 'What was unclear or did not fit?', text: d.unclear, lines: 2 },
    { t: 'meta', rows: [['How clear was the advice?', d.clarity === 'unset' ? '' : CLARITY[d.clarity]]] },
    { t: 'sign', labels: ['Mentor initials and date', 'Student initials and date'] },
    { t: 'note', text: NOTE_LIMITS },
  ];
  return { kind: 'record', fileName: 'mentoring-session-record.pdf', blocks };
}

export function reportModel(state, today = todayISO(), scale = DEFAULT_SCALE) {
  const sessions = sortSessions(state.sessions || []);
  const r = state.report || blankReport();
  const first = sessions.length ? sessions[0].date : '';
  const last = sessions.length ? sessions[sessions.length - 1].date : '';
  const roleKey = sessions.length ? sessions[sessions.length - 1].role : (state.draft && state.draft.role) || 'teacher';
  const initials = (sessions.find((s) => s.initials) || {}).initials || '';

  const blocks = [];
  blocks.push({ t: 'title', text: 'Mentoring report', sub: r.period || 'Summary of recorded sessions' });
  blocks.push({
    t: 'meta',
    rows: [
      ['Prepared by', ROLES[roleKey] || ROLES.teacher],
      ['Initials', initials || 'Not given'],
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

  blocks.push({ t: 'h', text: '4. Options suggested and growth check' });
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

  blocks.push({ t: 'h', text: '5. Student feedback' });
  const rated = sessions.filter((s) => s.clarity && s.clarity !== 'unset');
  const useful = sessions.filter((s) => s.useful && s.useful.trim());
  const unclear = sessions.filter((s) => s.unclear && s.unclear.trim());
  if (rated.length || useful.length || unclear.length) {
    if (rated.length) {
      const c = (k) => rated.filter((s) => s.clarity === k).length;
      blocks.push({ t: 'p', text: 'Clarity of advice, as recorded: ' + c('clear') + ' very clear, ' + c('mostly') + ' mostly clear, ' + c('unclear') + ' unclear.' });
    }
    if (useful.length) blocks.push({ t: 'list', title: 'Most useful', items: useful.map((s) => 'Session ' + (s.no || '') + ': ' + s.useful) });
    if (unclear.length) blocks.push({ t: 'list', title: 'Unclear or did not fit', items: unclear.map((s) => 'Session ' + (s.no || '') + ': ' + s.unclear) });
  } else {
    blocks.push({ t: 'p', text: 'No student feedback has been recorded.' });
  }

  blocks.push({ t: 'h', text: '6. Mentor observations' });
  blocks.push({ t: 'field', label: 'What stood out across these sessions?', text: r.observations, lines: 3 });

  blocks.push({ t: 'h', text: '7. Next steps and follow-up' });
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
  blocks.push({ t: 'sign', labels: ['Mentor initials and date', 'Student initials and date'] });
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
    } else if (b.t === 'sign') {
      out.push('<div class="smr-sign">' + b.labels.map((l) => '<p><span class="smr-sign-line"></span>' + esc(l) + '</p>').join('') + '</div>');
    } else if (b.t === 'note') {
      out.push('<p class="smr-doc-note">' + esc(b.text) + '</p>');
    }
  });
  return out.join('');
}

// ---------- PDF ----------

const NON_LATIN = /[^\u0000-ɏ‐-‧₹ ]/;

export function hasUnsupportedText(model) {
  return NON_LATIN.test(JSON.stringify(model));
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
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\x20-\x7E\n]/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\r/g, '');
}

export function buildPdf(JsPDF, model) {
  const pdf = new JsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
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
    const out = [];
    pdfText(text).split('\n').forEach((part) => {
      if (!part.trim()) { out.push(''); return; }
      pdf.splitTextToSize(part.trim(), width).forEach((l) => out.push(l));
    });
    return out;
  };
  const need = (h) => { if (y + h > BOTTOM) { pdf.addPage(); y = M; } };
  const rule = (x1, x2, yy, c, w) => { pdf.setDrawColor(c[0], c[1], c[2]); pdf.setLineWidth(w || 0.25); pdf.line(x1, yy, x2, yy); };

  const paragraph = (text, size, style, c, lh, x, width) => {
    const ls = wrap(text, width || CW, size, style);
    color(c);
    font(size, style);
    ls.forEach((l) => { need(lh); if (l) pdf.text(l, x == null ? M : x, y + lh * 0.75); y += lh; });
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
        const val = wrap(r[1] || '', CW - 52, 10, 'normal');
        const rows = Math.max(1, val.length);
        need(rows * 5 + 2);
        font(10, 'bold'); color(INK); pdf.text(pdfText(r[0]) + (/[?:]$/.test(r[0]) ? '' : ':'), M, y + 3.8);
        font(10, 'normal'); color(INK);
        if (val.length && val.join('').trim()) val.forEach((l, i) => { if (l) pdf.text(l, M + 52, y + 3.8 + i * 5); });
        else rule(M + 52, M + CW, y + 4.2, RULE, 0.2);
        y += rows * 5 + 1.5;
      });
      y += 1.5;
    } else if (b.t === 'h') {
      need(34);
      y += 3;
      font(12, 'bold'); color(TEAL); pdf.text(pdfText(b.text), M, y + 4); y += 6.5;
      rule(M, M + CW, y, [200, 206, 210], 0.2); y += 2.5;
    } else if (b.t === 'p') {
      paragraph(b.text, 10, 'normal', INK, 5, M, CW); y += 1.5;
    } else if (b.t === 'field') {
      need(14);
      font(9.5, 'bold'); color(GREY); pdf.text(pdfText(b.label), M, y + 3.5); y += 6;
      if (b.text && b.text.trim()) { paragraph(b.text, 10, 'normal', INK, 5, M, CW); y += 1.5; }
      else { for (let i = 0; i < (b.lines || 2); i++) { need(8); rule(M, M + CW, y + 6, RULE, 0.2); y += 8; } y += 1; }
    } else if (b.t === 'list') {
      need(12);
      font(9.5, 'bold'); color(GREY); pdf.text(pdfText(b.title), M, y + 3.5); y += 6;
      b.items.forEach((item) => {
        const ls = wrap(item, CW - 6, 10, 'normal');
        color(INK); font(10, 'normal');
        ls.forEach((l, i) => { need(5); if (i === 0) pdf.text('-', M + 1, y + 3.8); if (l) pdf.text(l, M + 6, y + 3.8); y += 5; });
        y += 0.8;
      });
      y += 1;
    } else if (b.t === 'table') {
      const widths = b.widths.map((w) => w * CW);
      const pad = 1.6;
      const lh = 4.4;
      const drawRow = (cells, header, minH) => {
        const wrapped = cells.map((c, i) => wrap(c, widths[i] - pad * 2, header ? 9 : 9.5, header ? 'bold' : 'normal'));
        const h = Math.max(minH, Math.max(...wrapped.map((w) => Math.max(1, w.length))) * lh + pad * 2);
        if (y + h > BOTTOM) { pdf.addPage(); y = M; if (!header) drawRow(b.head, true, 8); }
        let x = M;
        cells.forEach((c, i) => {
          if (header) { pdf.setFillColor(226, 240, 238); pdf.rect(x, y, widths[i], h, 'F'); }
          pdf.setDrawColor(150, 158, 166); pdf.setLineWidth(0.2); pdf.rect(x, y, widths[i], h);
          color(INK); font(header ? 9 : 9.5, header ? 'bold' : 'normal');
          wrapped[i].forEach((l, j) => { if (l) pdf.text(l, x + pad, y + pad + 3 + j * lh); });
          x += widths[i];
        });
        y += h;
      };
      need(8 + 9);
      drawRow(b.head, true, 8);
      b.rows.forEach((row) => drawRow(row, false, 9));
      y += 3;
    } else if (b.t === 'sign') {
      need(22);
      y += 8;
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
