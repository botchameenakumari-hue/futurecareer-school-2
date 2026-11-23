// Builds the HTML for the weekly grid, the day-by-day list and the hours table from a plan.
// Used by the page and by the print view, so what you see is what prints. No DOM access here.
import { KIND_LABEL, DOW_SHORT, fmtTime, fmtDate, fmtDateLong, fmtHours, fmtDuration, isoToNum, numToIso, weeksOf } from './studyTimetableEngine.mjs';

export const PALETTE = [
  { bg: '#cfe3ff', edge: '#3d74c2' }, { bg: '#ffd9b0', edge: '#b86d12' }, { bg: '#cfeec0', edge: '#3f8f2b' }, { bg: '#ffcfe4', edge: '#b83a75' },
  { bg: '#e0d0ff', edge: '#7048c0' }, { bg: '#fff1a8', edge: '#9c8200' }, { bg: '#bfece6', edge: '#1f8075' }, { bg: '#ffc9c9', edge: '#b03a3a' },
  { bg: '#dbe6a8', edge: '#6b7a14' }, { bg: '#d3d3f2', edge: '#5252a8' }, { bg: '#f2d2b6', edge: '#946029' }, { bg: '#c3dfe0', edge: '#37787c' },
];

export const DAY_KIND_LABEL = { study: 'Study day', exam: 'Exam day', rest: 'Rest day', catchup: 'Catch-up day', mock: 'Mock-test day' };

export function esc(value) {
  return String(value == null ? '' : value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

export const colorOf = (plan, subjectId) => {
  const s = plan.subjects.find((x) => x.id === subjectId);
  return PALETTE[((s ? s.colorIndex : 0) % PALETTE.length + PALETTE.length) % PALETTE.length];
};

export const subjectName = (plan, id) => { const s = plan.subjects.find((x) => x.id === id); return s ? s.name : 'Unknown subject'; };

export function kindText(slot) { return KIND_LABEL[slot.kind] || slot.kind; }

/** One plain-text line for a session, used for the list, screen readers and the PDF. */
export function slotLine(plan, slot) {
  let detail = kindText(slot);
  if (slot.kind === 'revise' && slot.srcs && slot.srcs.length) detail += ', covers study from ' + slot.srcs.map((s) => fmtDate(s.date, false)).join(' and ');
  if (slot.note) detail += ', ' + slot.note;
  return fmtTime(slot.start) + ' to ' + fmtTime(slot.end) + '  ' + subjectName(plan, slot.subjectId) + ' (' + detail + ')';
}

/** Plain structure for the day-by-day plan: one entry per date. */
export function dayEntries(plan) {
  return plan.days.map((d) => {
    const slots = plan.slots.filter((s) => s.date === d.date).sort((a, b) => a.start - b.start);
    const total = slots.reduce((t, s) => t + (s.end - s.start), 0);
    const examNames = (d.exams || []).map((id) => subjectName(plan, id));
    let note = '';
    if (d.kind === 'rest') note = 'Rest day. Nothing is planned. Sleep, play, see family, take a walk.';
    else if (d.kind === 'catchup') note = 'Catch-up day. Nothing new is planned. Use it for anything you missed, or rest.';
    else if (d.kind === 'exam') note = 'Exam: ' + examNames.join(', ') + '.' + (slots.length ? '' : ' No study is planned.');
    else if (!slots.length) note = 'No study is planned on this day.';
    return { date: d.date, dow: d.dow, kind: d.kind, label: fmtDate(d.date, true), longLabel: fmtDateLong(d.date), kindLabel: DAY_KIND_LABEL[d.kind] || '', slots, total, note };
  });
}

// ---------- weekly grid ----------

export function gridRange(plan) {
  const start = Math.floor(plan.input.wake / 60) * 60;
  const end = Math.ceil(plan.input.bed / 60) * 60;
  return { start, end, span: end - start };
}

/**
 * The weekly grid for one week. opts.print draws plain boxes instead of buttons.
 * Columns are Monday to Sunday. Days outside the plan are left empty.
 */
export function gridHtml(plan, weekIndex, opts) {
  const print = !!(opts && opts.print);
  const weeks = weeksOf(plan);
  const week = weeks[Math.max(0, Math.min(weekIndex, weeks.length - 1))];
  const { start: g0, end: g1, span } = gridRange(plan);
  const input = plan.input;
  const hours = [];
  for (let m = g0; m <= g1; m += 60) hours.push(m);
  let html = '<div class="stm-grid" style="--span:' + span + '">';
  html += '<div class="stm-g-axis" aria-hidden="true"><div class="stm-g-head stm-g-head--blank">&nbsp;</div><div class="stm-g-axisbody">' +
    hours.map((m) => '<span class="stm-g-hour" style="--m:' + (m - g0) + '">' + fmtTime(m) + '</span>').join('') + '</div></div>';
  week.dates.forEach((date, k) => {
    const day = plan.days.find((d) => d.date === date);
    const head = fmtDate(date, true);
    if (!day) {
      html += '<div class="stm-g-col stm-g-col--off"><div class="stm-g-head"><b>' + esc(head) + '</b><span>Not in plan</span></div><div class="stm-g-body" data-date="' + date + '"></div></div>';
      return;
    }
    const exams = (day.exams || []).map((id) => subjectName(plan, id));
    const tag = day.kind === 'exam' ? 'Exam: ' + exams.join(', ') : DAY_KIND_LABEL[day.kind];
    html += '<div class="stm-g-col stm-g-col--' + day.kind + '"><div class="stm-g-head"><b>' + esc(head) + '</b><span>' + esc(tag) + '</span></div>';
    html += '<div class="stm-g-body" data-date="' + date + '" role="group" aria-label="' + esc(fmtDateLong(date) + ', ' + DAY_KIND_LABEL[day.kind]) + '">';
    // hour lines
    html += hours.slice(1, -1).map((m) => '<i class="stm-g-line" style="--m:' + (m - g0) + '"></i>').join('');
    // fixed blocks
    input.blocks.filter((b) => b.days[day.dow]).forEach((b) => {
      const top = Math.max(b.start, g0) - g0;
      const bottom = Math.min(b.end, g1) - g0;
      if (bottom <= top) return;
      html += '<div class="stm-g-fixed" style="--m:' + top + ';--len:' + (bottom - top) + '"><span>' + esc(b.label) + '</span></div>';
    });
    if (day.kind === 'rest') html += '<div class="stm-g-overlay"><span>Rest day</span></div>';
    if (day.kind === 'catchup') html += '<div class="stm-g-overlay"><span>Catch-up day</span></div>';
    plan.slots.filter((s) => s.date === date).forEach((s) => {
      const c = colorOf(plan, s.subjectId);
      const len = s.end - s.start;
      const name = subjectName(plan, s.subjectId);
      const label = name + ', ' + kindText(s) + ', ' + fmtDateLong(date) + ' ' + fmtTime(s.start) + ' to ' + fmtTime(s.end) + (s.done ? ', done' : ', not done');
      const inner = '<span class="stm-t-name">' + (s.done ? '<em class="stm-t-done">Done: </em>' : '') + esc(name) + '</span><span class="stm-t-kind">' + esc(kindText(s)) + '</span><span class="stm-t-time">' + fmtTime(s.start) + ' to ' + fmtTime(s.end) + '</span>';
      const style = '--m:' + (s.start - g0) + ';--len:' + len + ';--bg:' + c.bg + ';--edge:' + c.edge;
      const cls = 'stm-g-slot stm-k-' + s.kind + (s.done ? ' is-done' : '') + (len <= 30 ? ' is-short' : '');
      if (print) html += '<div class="' + cls + '" style="' + style + '">' + inner + '</div>';
      else html += '<button type="button" class="' + cls + '" style="' + style + '" data-id="' + esc(s.id) + '" draggable="true" aria-label="' + esc(label + '. Press to edit.') + '">' + inner + '</button>';
    });
    html += '</div></div>';
  });
  html += '</div>';
  return html;
}

export function weekLabel(plan, weekIndex) {
  const weeks = weeksOf(plan);
  const w = weeks[Math.max(0, Math.min(weekIndex, weeks.length - 1))];
  const dates = w.dates.filter((d, i) => w.inPlan[i]);
  return 'Week ' + (w.index + 1) + ' of ' + weeks.length + ': ' + fmtDate(dates[0], false) + ' to ' + fmtDate(dates[dates.length - 1], false);
}

export function legendHtml(plan) {
  return plan.subjects.map((s) => {
    const c = PALETTE[s.colorIndex % PALETTE.length];
    return '<li><i style="background:' + c.bg + ';border-color:' + c.edge + '"></i>' + esc(s.name) + '</li>';
  }).join('') + '<li><i class="stm-sw-fixed"></i>Fixed block (school, meals, sport)</li>';
}

// ---------- day by day ----------

/** Day list for the given dates (all dates when omitted). Checkboxes mark sessions done. */
export function dayListHtml(plan, dates, opts) {
  const print = !!(opts && opts.print);
  const want = dates ? new Set(dates) : null;
  return dayEntries(plan).filter((d) => !want || want.has(d.date)).map((d) => {
    let html = '<article class="stm-day stm-day--' + d.kind + '"><h4><span class="stm-day-date">' + esc(d.label) + '</span> <span class="stm-badge stm-badge--' + d.kind + '">' + esc(d.kindLabel) + '</span>' +
      (d.total ? ' <span class="stm-day-sum">' + esc(fmtDuration(d.total)) + ' planned</span>' : '') + '</h4>';
    if (d.note) html += '<p class="stm-day-note">' + esc(d.note) + '</p>';
    if (d.slots.length) {
      html += '<ul class="stm-slots">';
      d.slots.forEach((s) => {
        const c = colorOf(plan, s.subjectId);
        const text = slotLine(plan, s);
        if (print) {
          html += '<li class="stm-slot-row' + (s.done ? ' is-done' : '') + '"><span class="stm-tick" aria-hidden="true">' + (s.done ? '&#10003;' : '') + '</span><i class="stm-dot" style="background:' + c.bg + ';border-color:' + c.edge + '"></i><span class="stm-slot-text">' + esc(text) + '</span></li>';
        } else {
          html += '<li class="stm-slot-row' + (s.done ? ' is-done' : '') + '"><label class="stm-chk"><input type="checkbox" data-done="' + esc(s.id) + '"' + (s.done ? ' checked' : '') + ' /><i class="stm-dot" style="background:' + c.bg + ';border-color:' + c.edge + '"></i><span class="stm-slot-text">' + esc(text) + '</span></label><button type="button" class="stm-mini" data-edit="' + esc(s.id) + '" aria-label="Edit ' + esc(subjectName(plan, s.subjectId) + ' on ' + d.label + ' at ' + fmtTime(s.start)) + '">Edit</button></li>';
        }
      });
      html += '</ul>';
    }
    return html + '</article>';
  }).join('');
}

// ---------- hours table ----------

export function hoursTableHtml(plan, opts) {
  const print = !!(opts && opts.print);
  const rows = plan.summary.perSubject.map((p) => {
    const c = colorOf(plan, p.id);
    const pct = (n) => Math.round(n * 100) + '%';
    return '<tr><th scope="row" data-label="Subject"><i class="stm-dot" style="background:' + c.bg + ';border-color:' + c.edge + '"></i>' + esc(p.name) + '</th>' +
      '<td data-label="Exam">' + esc(fmtDate(p.examDate, true)) + '</td>' +
      '<td data-label="Confidence and importance">' + p.confidence + ' and ' + p.weight + '</td>' +
      '<td data-label="Planned time"><b>' + esc(fmtHours(p.total)) + '</b></td>' +
      '<td data-label="Study">' + esc(fmtHours(p.learn)) + '</td>' +
      '<td data-label="Spaced revision">' + esc(fmtHours(p.revise)) + '</td>' +
      '<td data-label="Final revision">' + esc(fmtHours(p.final)) + '</td>' +
      '<td data-label="Mock tests and review">' + esc(fmtHours(p.mock + p.review)) + '</td>' +
      '<td data-label="Share of all study time">' + pct(p.share) + '</td>' +
      (print ? '' : '<td data-label="Done so far">' + esc(fmtHours(p.done)) + ' of ' + esc(fmtHours(p.total)) + '</td>') + '</tr>';
  }).join('');
  const t = plan.summary;
  return '<table class="stm-table"><caption class="stm-sr">Planned study time for each subject</caption><thead><tr><th scope="col">Subject</th><th scope="col">Exam</th><th scope="col">Confidence and importance</th><th scope="col">Planned time</th><th scope="col">Study</th><th scope="col">Spaced revision</th><th scope="col">Final revision</th><th scope="col">Mock tests and review</th><th scope="col">Share of all study time</th>' +
    (print ? '' : '<th scope="col">Done so far</th>') + '</tr></thead><tbody>' + rows + '</tbody><tfoot><tr><th scope="row" data-label="Subject">All subjects</th><td data-label="Exam"></td><td data-label="Confidence and importance"></td><td data-label="Planned time"><b>' + esc(fmtHours(t.totalMin)) + '</b></td><td data-label="Study">' + esc(fmtHours(t.perSubject.reduce((a, p) => a + p.learn, 0))) + '</td><td data-label="Spaced revision">' + esc(fmtHours(t.perSubject.reduce((a, p) => a + p.revise, 0))) + '</td><td data-label="Final revision">' + esc(fmtHours(t.perSubject.reduce((a, p) => a + p.final, 0))) + '</td><td data-label="Mock tests and review">' + esc(fmtHours(t.perSubject.reduce((a, p) => a + p.mock + p.review, 0))) + '</td><td data-label="Share of all study time">100%</td>' +
    (print ? '' : '<td data-label="Done so far">' + esc(fmtHours(t.doneMin)) + ' of ' + esc(fmtHours(t.totalMin)) + '</td>') + '</tr></tfoot></table>';
}

/** Settings lines shown on the printout and the first page of the PDF. */
export function settingsLines(plan) {
  const i = plan.input;
  const dow = (n) => (n >= 0 ? DOW_SHORT[n] : 'none');
  return [
    'Plan: ' + fmtDateLong(plan.days[0].date) + ' to ' + fmtDateLong(plan.days[plan.days.length - 1].date) + ' (' + plan.days.length + ' days).',
    'Study hours a day: weekdays ' + fmtHours(i.capWeekday) + ', weekends ' + fmtHours(i.capWeekend) + '. Waking time ' + fmtTime(i.wake) + ' to ' + fmtTime(i.bed) + ', so at least ' + i.sleepMin + ' hours of sleep.',
    'Sessions of ' + i.sessionMin + ' minutes with ' + i.breakMin + ' minute breaks. Spaced revision on day ' + (i.gaps.length ? i.gaps.join(', ') : 'none') + '.',
    'Rest day: ' + dow(i.restDay) + '. Mock-test day: ' + dow(i.mockDay) + (i.mockDay >= 0 ? ' (' + i.mockMin + ' minutes)' : '') + '.',
  ];
}

export const WELLBEING_TEXT = 'Study time is not the only thing that counts, so keep your sleep, meals, movement and time with people you like. If exam worry feels too big, talk to someone you trust, and Tele-MANAS (14416) is a free national mental health helpline run by the health ministry. This is not medical advice; talk to a doctor or counsellor.';

/** The full printout: summary page, one grid per week, then the day-by-day plan. */
export function printHtml(plan) {
  const weeks = weeksOf(plan);
  const sm = plan.summary;
  let html = '<section class="stm-pgsec stm-pg-first"><p class="stm-p-brand">FUTURECAREERSCHOOL</p><p class="stm-p-title">Study timetable</p><ul class="stm-p-lines">' + settingsLines(plan).map((l) => '<li>' + esc(l) + '</li>').join('') + '</ul>';
  html += '<h2>Hours for each subject</h2>' + hoursTableHtml(plan, { print: true });
  html += '<p class="stm-p-count">' + sm.sessions + ' sessions, ' + esc(fmtHours(sm.totalMin)) + ' in all.</p>';
  html += '<p class="stm-p-care">' + esc(WELLBEING_TEXT) + '</p></section>';
  weeks.forEach((w) => {
    html += '<section class="stm-pgsec"><h2>' + esc(weekLabel(plan, w.index)) + '</h2>' + gridHtml(plan, w.index, { print: true }) + '<ul class="stm-legend stm-legend--print">' + legendHtml(plan) + '</ul></section>';
  });
  html += '<section class="stm-pgsec stm-pg-days"><h2>Day by day</h2><div class="stm-p-cols">' + dayListHtml(plan, null, { print: true }) + '</div></section>';
  return html;
}

// ---------- plain text for WhatsApp ----------

/**
 * The next few days of the plan as plain text, starting today (or the first day of the plan when it has not begun).
 * Returns an empty string when the plan is already over. Sessions already ticked done are marked.
 */
export function planText(plan, todayIso, howMany = 4) {
  const entries = dayEntries(plan);
  const from = entries.findIndex((d) => d.date >= todayIso);
  if (from < 0) return '';
  const lines = ['My study plan (FutureCareerSchool)', ''];
  entries.slice(from, from + howMany).forEach((d) => {
    lines.push(d.label + (d.date === todayIso ? ' (today)' : '') + ': ' + d.kindLabel + (d.total ? ', ' + fmtDuration(d.total) + ' planned' : ''));
    if (d.slots.length) d.slots.forEach((sl) => lines.push((sl.done ? '[x] ' : '[ ] ') + slotLine(plan, sl).replace(/\s{2,}/g, ' ')));
    else if (d.note) lines.push(d.note);
    lines.push('');
  });
  lines.push('Made with https://futurecareerschool.com/tools/study-timetable-maker/');
  return lines.join('\n');
}
