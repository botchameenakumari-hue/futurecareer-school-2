// Browser side of the study timetable maker: the form, the saved state in this browser, the grid, the editor,
// the print view and the PDF button. Planning itself lives in studyTimetableEngine.mjs.
import * as E from './studyTimetableEngine.mjs';
import * as R from './studyTimetableRender.mjs';

const KEY = 'fcs-study-timetable-v1';
const DAY_OPTIONS = E.DOW_LONG.map((n, i) => [String(i), n]).concat([['-1', 'None']]);

const pad = (n) => String(n).padStart(2, '0');
function todayIso() { const d = new Date(); return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
const addDays = (iso, n) => E.numToIso(E.isoToNum(iso) + n);
const clone = (x) => JSON.parse(JSON.stringify(x));

const blankSubject = () => ({ name: '', confidence: 3, weight: 3, examDate: '' });
const blankBlock = (label, start, end, days) => ({ label: label || '', start: start || '', end: end || '', days: days || [false, false, false, false, false, false, false] });
const weekdays = [true, true, true, true, true, false, false];
const everyDay = [true, true, true, true, true, true, true];

export function defaultRaw() {
  return {
    subjects: [blankSubject(), blankSubject(), blankSubject()],
    startDate: todayIso(), examDate: '',
    wake: '06:00', bed: '22:00', sleepMin: 8, hoursWeekday: 3, hoursWeekend: 5, focus: 'morning',
    blocks: [blankBlock('School', '08:30', '15:30', weekdays), blankBlock('Evening meal', '20:00', '20:45', everyDay), blankBlock('Play or exercise', '17:30', '18:15', everyDay)],
    sessionMin: 50, breakMin: 10, gaps: '1, 3, 7', restDay: 6, mockDay: 5, mockMin: 120, examDayHours: 2, examDayFrom: '15:00',
  };
}

export function exampleRaw() {
  const raw = defaultRaw();
  const t = todayIso();
  raw.subjects = [
    { name: 'Maths', confidence: 2, weight: 5, examDate: '' },
    { name: 'Science', confidence: 3, weight: 4, examDate: '' },
    { name: 'English', confidence: 4, weight: 3, examDate: '' },
    { name: 'Social Science', confidence: 3, weight: 3, examDate: '' },
    { name: 'Telugu', confidence: 4, weight: 2, examDate: '' },
  ];
  raw.startDate = t;
  raw.examDate = addDays(t, 35);
  return raw;
}

function planLooksValid(plan) {
  try {
    if (!plan || typeof plan !== 'object') return false;
    if (!Array.isArray(plan.days) || !plan.days.length || plan.days.length > E.LIMITS.maxDays + 2) return false;
    if (!Array.isArray(plan.slots) || plan.slots.length > 4000 || !Array.isArray(plan.subjects) || !plan.subjects.length) return false;
    const inp = plan.input;
    if (!inp || !Array.isArray(inp.blocks) || !Array.isArray(inp.gaps)) return false;
    for (const k of ['wake', 'bed', 'sleepMin', 'capWeekday', 'capWeekend', 'sessionMin', 'breakMin', 'restDay', 'mockDay', 'mockMin', 'examDayCap', 'examDayFrom']) if (!Number.isFinite(inp[k])) return false;
    if (!inp.blocks.every((b) => b && typeof b.label === 'string' && Number.isFinite(b.start) && Number.isFinite(b.end) && Array.isArray(b.days))) return false;
    if (!plan.days.every((d) => E.DAY_KINDS.includes(d.kind) && Number.isFinite(d.cap) && Array.isArray(d.exams))) return false;
    if (!plan.subjects.every((s) => Number.isInteger(s.colorIndex) && Number.isFinite(s.confidence) && Number.isFinite(s.weight) && Number.isFinite(s.priority))) return false;
    const ids = new Set(plan.subjects.map((s) => s.id));
    if (!plan.days.every((d) => E.isoToNum(d.date) != null && Number.isInteger(d.dow) && Array.isArray(d.windows))) return false;
    if (!plan.slots.every((s) => s && typeof s.id === 'string' && E.isoToNum(s.date) != null && Number.isInteger(s.start) && Number.isInteger(s.end) && s.end > s.start && s.end <= 1440 && ids.has(s.subjectId) && typeof s.kind === 'string' && E.KIND_LABEL[s.kind])) return false;
    return plan.subjects.every((s) => typeof s.name === 'string' && typeof s.examDate === 'string');
  } catch (e) { return false; }
}

export function initTimetable(root) {
  if (!root) return;
  const $ = (sel) => root.querySelector(sel);
  const $$ = (sel) => Array.from(root.querySelectorAll(sel));
  const els = {
    form: $('#stm-form'), subjects: $('#stm-subjects'), blocks: $('#stm-blocks'), errors: $('#stm-errors'), replace: $('#stm-replace'),
    results: $('#stm-results'), resultsTitle: $('#stm-results-title'), summary: $('#stm-summary'), warnings: $('#stm-warnings'),
    progressText: $('#stm-progress-text'), progress: $('#stm-progress'), hours: $('#stm-hours'), weekLabel: $('#stm-week-label'), weekSelect: $('#stm-week-select'),
    prev: $('#stm-prev'), next: $('#stm-next'), today: $('#stm-today'), showAll: $('#stm-showall'), grid: $('#stm-grid'), legend: $('#stm-legend'), days: $('#stm-days'),
    status: $('#stm-status'), saved: $('#stm-saved'), exampleFlag: $('#stm-example-flag'), editor: $('#stm-editor'), hintHours: $('#stm-hint-hours'), sleepLine: $('#stm-sleep-line'),
    pdfBtn: $('#stm-pdf'), printBtn: $('#stm-print-btn'), make: $('#stm-make'),
  };

  const st = { raw: defaultRaw(), plan: null, week: 0, showAll: false, example: false };
  let storageOk = true;
  try { localStorage.setItem(KEY + '-probe', '1'); localStorage.removeItem(KEY + '-probe'); } catch (e) { storageOk = false; }

  // ---------- saved state ----------
  function persist() {
    if (!storageOk) return;
    try { localStorage.setItem(KEY, JSON.stringify({ v: 1, raw: st.raw, plan: st.plan, week: st.week, example: st.example })); } catch (e) { storageOk = false; }
  }
  let persistTimer = 0;
  const persistSoon = () => { clearTimeout(persistTimer); persistTimer = setTimeout(persist, 250); };

  function load() {
    if (!storageOk) return false;
    try {
      const data = JSON.parse(localStorage.getItem(KEY) || 'null');
      if (!data || typeof data !== 'object' || data.v !== 1) return false;
      if (data.raw && typeof data.raw === 'object') st.raw = Object.assign(defaultRaw(), data.raw);
      if (!Array.isArray(st.raw.subjects) || !st.raw.subjects.length) st.raw.subjects = [blankSubject()];
      if (!Array.isArray(st.raw.blocks)) st.raw.blocks = [];
      st.raw.subjects = st.raw.subjects.slice(0, E.LIMITS.maxSubjects);
      st.raw.blocks = st.raw.blocks.slice(0, E.LIMITS.maxBlocks);
      if (planLooksValid(data.plan)) { st.plan = data.plan; E.refreshSummary(st.plan); }
      st.week = Number.isInteger(data.week) ? data.week : 0;
      st.example = data.example === true;
      return true;
    } catch (e) { return false; }
  }

  const say = (text) => { els.status.textContent = text; };

  // ---------- form ----------
  const opt = (value, label, selected) => '<option value="' + R.esc(value) + '"' + (String(selected) === String(value) ? ' selected' : '') + '>' + R.esc(label) + '</option>';
  const confOptions = (sel) => [[1, '1: find it hard'], [2, '2'], [3, '3: okay'], [4, '4'], [5, '5: comfortable']].map((o) => opt(o[0], o[1], sel)).join('');
  const weightOptions = (sel) => [[1, '1: small'], [2, '2'], [3, '3: medium'], [4, '4'], [5, '5: very big']].map((o) => opt(o[0], o[1], sel)).join('');

  function renderSubjects() {
    els.subjects.innerHTML = st.raw.subjects.map((s, i) => {
      const n = i + 1;
      const f = (id, label, control) => '<div class="stm-f"><label for="' + id + '">' + label + ' <span class="stm-sr">(subject ' + n + ')</span></label>' + control + '</div>';
      return '<div class="stm-row" role="group" aria-label="Subject ' + n + '">' +
        f('stm-subject-' + i + '-name', 'Subject name', '<input id="stm-subject-' + i + '-name" type="text" maxlength="' + E.LIMITS.nameMax + '" autocomplete="off" placeholder="For example Maths" value="' + R.esc(s.name) + '" />') +
        f('stm-subject-' + i + '-confidence', 'How confident are you?', '<select id="stm-subject-' + i + '-confidence">' + confOptions(s.confidence) + '</select>') +
        f('stm-subject-' + i + '-weight', 'How much does it count?', '<select id="stm-subject-' + i + '-weight">' + weightOptions(s.weight) + '</select>') +
        f('stm-subject-' + i + '-exam', 'Own exam date, if different', '<input id="stm-subject-' + i + '-exam" type="date" value="' + R.esc(s.examDate || '') + '" />') +
        '<button type="button" class="stm-mini stm-remove" data-remove-subject="' + i + '" aria-label="Remove subject ' + n + '">Remove</button></div>';
    }).join('');
    $('#stm-add-subject').disabled = st.raw.subjects.length >= E.LIMITS.maxSubjects;
  }

  function renderBlocks() {
    els.blocks.innerHTML = st.raw.blocks.length ? st.raw.blocks.map((b, i) => {
      const n = i + 1;
      const days = E.DOW_LONG.map((name, d) => '<label class="stm-dchk"><input type="checkbox" data-d="' + d + '"' + (b.days && b.days[d] ? ' checked' : '') + ' /><span aria-hidden="true">' + name.slice(0, 1) + '</span><span class="stm-sr">' + name + '</span></label>').join('');
      const f = (id, label, control) => '<div class="stm-f"><label for="' + id + '">' + label + ' <span class="stm-sr">(block ' + n + ')</span></label>' + control + '</div>';
      return '<div class="stm-brow" role="group" aria-label="Fixed block ' + n + '">' +
        f('stm-block-' + i + '-label', 'What is it?', '<input id="stm-block-' + i + '-label" type="text" maxlength="' + E.LIMITS.labelMax + '" autocomplete="off" placeholder="For example Tuition" value="' + R.esc(b.label) + '" />') +
        '<div class="stm-times">' + f('stm-block-' + i + '-start', 'From', '<input id="stm-block-' + i + '-start" type="time" step="300" value="' + R.esc(b.start) + '" />') +
        f('stm-block-' + i + '-end', 'To', '<input id="stm-block-' + i + '-end" type="time" step="300" value="' + R.esc(b.end) + '" />') + '</div>' +
        '<fieldset class="stm-days" id="stm-block-' + i + '-days" tabindex="-1"><legend>Days <span class="stm-sr">(block ' + n + ')</span></legend><div class="stm-dchks">' + days + '</div></fieldset>' +
        '<button type="button" class="stm-mini stm-remove" data-remove-block="' + i + '" aria-label="Remove fixed block ' + n + '">Remove</button></div>';
    }).join('') : '<p class="stm-hint">No fixed blocks yet. Add school, tuition, meals or sport so the planner keeps clear of them.</p>';
    $('#stm-add-block').disabled = st.raw.blocks.length >= E.LIMITS.maxBlocks;
  }

  function fillSimple() {
    const set = (id, v) => { const el = byId(id); if (el) el.value = v == null ? '' : v; };
    set('stm-startDate', st.raw.startDate); set('stm-examDate', st.raw.examDate);
    set('stm-wake', st.raw.wake); set('stm-bed', st.raw.bed); set('stm-sleepMin', st.raw.sleepMin);
    set('stm-hoursWeekday', st.raw.hoursWeekday); set('stm-hoursWeekend', st.raw.hoursWeekend); set('stm-focus', st.raw.focus);
    set('stm-sessionMin', st.raw.sessionMin); set('stm-breakMin', st.raw.breakMin); set('stm-gaps', st.raw.gaps);
    set('stm-restDay', st.raw.restDay); set('stm-mockDay', st.raw.mockDay); set('stm-mockMin', st.raw.mockMin);
    set('stm-examDayHours', st.raw.examDayHours); set('stm-examDayFrom', st.raw.examDayFrom);
  }
  function byId(id) { return document.getElementById(id); }

  function fillSelects() {
    const fill = (id, html) => { const el = byId(id); if (el && !el.options.length) el.innerHTML = html; };
    fill('stm-sleepMin', [6, 7, 8, 9, 10].map((n) => opt(n, n + ' hours', 8)).join(''));
    fill('stm-sessionMin', [25, 30, 45, 50, 60, 90].map((n) => opt(n, n + ' minutes', 50)).join(''));
    fill('stm-breakMin', [5, 10, 15, 20, 30].map((n) => opt(n, n + ' minutes', 10)).join(''));
    fill('stm-restDay', DAY_OPTIONS.map((o) => opt(o[0], o[1], 6)).join(''));
    fill('stm-mockDay', DAY_OPTIONS.map((o) => opt(o[0], o[1], 5)).join(''));
    fill('stm-mockMin', [60, 90, 120, 150, 180].map((n) => opt(n, n + ' minutes', 120)).join(''));
    fill('stm-focus', opt('morning', 'Morning person', 'morning') + opt('evening', 'Evening person', 'morning'));
  }

  function readRaw() {
    const v = (id) => { const el = byId(id); return el ? el.value : ''; };
    const subjects = st.raw.subjects.map((s, i) => ({ name: v('stm-subject-' + i + '-name'), confidence: v('stm-subject-' + i + '-confidence'), weight: v('stm-subject-' + i + '-weight'), examDate: v('stm-subject-' + i + '-exam') }));
    const blocks = st.raw.blocks.map((b, i) => {
      const row = els.blocks.querySelectorAll('.stm-brow')[i];
      const days = [0, 1, 2, 3, 4, 5, 6].map((d) => { const c = row && row.querySelector('input[data-d="' + d + '"]'); return !!(c && c.checked); });
      return { label: v('stm-block-' + i + '-label'), start: v('stm-block-' + i + '-start'), end: v('stm-block-' + i + '-end'), days };
    });
    st.raw = {
      subjects, blocks,
      startDate: v('stm-startDate'), examDate: v('stm-examDate'), wake: v('stm-wake'), bed: v('stm-bed'), sleepMin: v('stm-sleepMin'),
      hoursWeekday: v('stm-hoursWeekday'), hoursWeekend: v('stm-hoursWeekend'), focus: v('stm-focus'),
      sessionMin: v('stm-sessionMin'), breakMin: v('stm-breakMin'), gaps: v('stm-gaps'), restDay: v('stm-restDay'), mockDay: v('stm-mockDay'), mockMin: v('stm-mockMin'),
      examDayHours: v('stm-examDayHours'), examDayFrom: v('stm-examDayFrom'),
    };
    return st.raw;
  }

  function renderForm() { fillSelects(); renderSubjects(); renderBlocks(); fillSimple(); updateHints(); }

  function updateHints() {
    const raw = readRawQuiet();
    const hw = E.parseNumber(raw.hoursWeekday); const he = E.parseNumber(raw.hoursWeekend);
    const notes = [];
    if (hw > E.LIMITS.softDayHours || he > E.LIMITS.softDayHours) notes.push('That is a long study day. Check that meals, breaks, exercise and sleep still fit, and lower it if you feel worn out.');
    if (hw > E.LIMITS.maxDayHours || he > E.LIMITS.maxDayHours) notes.push('The planner allows at most ' + E.LIMITS.maxDayHours + ' hours of study in a day.');
    els.hintHours.textContent = notes.join(' ');
    const wake = E.parseTime(raw.wake); const bed = E.parseTime(raw.bed); const min = E.parseNumber(raw.sleepMin);
    if (wake != null && bed != null && bed > wake) {
      const sleep = 1440 - bed + wake;
      const short = Number.isFinite(min) && sleep + 1e-9 < min * 60;
      els.sleepLine.textContent = 'Sleep window: ' + E.fmtDuration(sleep) + (short ? '. That is below your minimum of ' + min + ' hours. Move bedtime earlier or wake up later.' : '. No study is planned in this time.');
    } else els.sleepLine.textContent = 'Bedtime must be later than your wake-up time on the same day, and before midnight.';
  }
  function readRawQuiet() { const keep = st.raw; const r = readRaw(); st.raw = keep; return r; }

  // ---------- making the plan ----------
  const hasChanges = () => !!(st.plan && (st.plan.edited || st.plan.slots.some((s) => s.done || s.note)));

  function showErrors(errors) {
    clearInvalid();
    els.errors.hidden = false;
    els.errors.innerHTML = '<p><b>Please fix this before the timetable can be made:</b></p><ul>' + errors.map((e) => '<li><a href="#stm-' + R.esc(e.field) + '" data-field="' + R.esc(e.field) + '">' + R.esc(e.msg) + '</a></li>').join('') + '</ul>';
    errors.forEach((e) => { const el = fieldEl(e.field); if (el) { el.setAttribute('aria-invalid', 'true'); el.setAttribute('aria-describedby', 'stm-errors'); } });
    els.errors.focus();
    els.errors.scrollIntoView({ block: 'nearest' });
  }
  function fieldEl(field) {
    const el = byId('stm-' + field);
    if (!el) return null;
    if (el.tagName === 'FIELDSET') return el.querySelector('input') || el;
    return el;
  }
  function clearInvalid() {
    $$('[aria-invalid]').forEach((el) => { el.removeAttribute('aria-invalid'); if (el.getAttribute('aria-describedby') === 'stm-errors') el.removeAttribute('aria-describedby'); });
    els.errors.hidden = true; els.errors.innerHTML = '';
  }

  let making = false;
  function make(force) {
    if (making) return;
    readRaw();
    if (hasChanges() && !force) { els.replace.hidden = false; $('#stm-replace-yes').focus(); return; }
    making = true;
    els.replace.hidden = true;
    try {
      const res = E.planTimetable(st.raw);
      if (!res.ok) { showErrors(res.errors); say('The timetable could not be made. ' + res.errors.length + (res.errors.length === 1 ? ' thing needs' : ' things need') + ' fixing.'); return; }
      clearInvalid();
      const issues = E.verifyPlan(res.plan);
      if (issues.length) { console.error('Timetable self-check failed', issues); showErrors([{ field: 'startDate', msg: 'The planner could not build a safe timetable from these settings. Try different hours or fewer fixed blocks.' }]); return; }
      st.plan = res.plan;
      st.example = false;
      const t = todayIso();
      const weeks = E.weeksOf(st.plan);
      const found = weeks.findIndex((w) => w.dates.includes(t) && w.inPlan[w.dates.indexOf(t)]);
      st.week = found >= 0 ? found : 0;
      st.showAll = false;
      renderResults();
      persist();
      say('Your timetable is ready: ' + st.plan.summary.sessions + ' sessions over ' + st.plan.days.length + ' days.');
      els.resultsTitle.focus();
      els.results.scrollIntoView({ block: 'start' });
    } catch (err) {
      console.error('Unable to make the timetable:', err);
      showErrors([{ field: 'startDate', msg: 'Something went wrong while making the timetable. Check your entries and try again.' }]);
    } finally { making = false; }
  }

  // ---------- results ----------
  function renderResults() {
    const plan = st.plan;
    if (!plan) { els.results.hidden = true; document.body.removeAttribute('data-stm-has-plan'); return; }
    els.results.hidden = false;
    const weeks = E.weeksOf(plan);
    st.week = Math.max(0, Math.min(st.week, weeks.length - 1));
    const sm = plan.summary;
    els.summary.textContent = R.settingsLines(plan)[0] + ' ' + sm.sessions + ' sessions, ' + E.fmtHours(sm.totalMin) + ' of study in all.';
    const notes = (plan.warnings || []).concat(plan.notes || []);
    els.warnings.innerHTML = notes.length ? '<ul>' + notes.map((n) => '<li>' + R.esc(n) + '</li>').join('') + '</ul>' : '';
    els.warnings.hidden = !notes.length;
    renderProgress();
    els.hours.innerHTML = R.hoursTableHtml(plan);
    els.weekSelect.innerHTML = weeks.map((w) => opt(w.index, R.weekLabel(plan, w.index), st.week)).join('');
    els.weekLabel.textContent = R.weekLabel(plan, st.week);
    els.prev.disabled = st.week <= 0; els.next.disabled = st.week >= weeks.length - 1;
    const t = todayIso();
    els.today.hidden = !plan.days.some((d) => d.date === t);
    els.grid.innerHTML = R.gridHtml(plan, st.week, {});
    const range = R.gridRange(plan);
    els.grid.style.setProperty('--ppm', '1.15px');
    els.grid.dataset.span = String(range.span); els.grid.dataset.start = String(range.start);
    els.legend.innerHTML = R.legendHtml(plan);
    const dates = st.showAll ? null : weeks[st.week].dates.filter((d, i) => weeks[st.week].inPlan[i]);
    els.days.innerHTML = R.dayListHtml(plan, dates, {});
    els.showAll.textContent = st.showAll ? 'Show only this week' : 'Show every day of the plan';
    els.showAll.setAttribute('aria-pressed', st.showAll ? 'true' : 'false');
    els.exampleFlag.hidden = !st.example;
    document.body.setAttribute('data-stm-has-plan', '1');
    schedulePrint();
  }

  function renderProgress() {
    const sm = st.plan.summary;
    const pct = sm.sessions ? Math.round((sm.doneSessions / sm.sessions) * 100) : 0;
    els.progressText.textContent = sm.doneSessions + ' of ' + sm.sessions + ' sessions done (' + pct + '%), ' + E.fmtHours(sm.doneMin) + ' of ' + E.fmtHours(sm.totalMin) + '.';
    els.progress.value = pct;
    els.progress.setAttribute('aria-valuetext', pct + ' percent done');
  }

  // ---------- print view ----------
  let printTimer = 0;
  function buildPrint() {
    let box = document.getElementById('stm-print');
    if (!st.plan) { if (box) box.remove(); return; }
    if (!box) { box = document.createElement('div'); box.id = 'stm-print'; box.setAttribute('aria-hidden', 'true'); document.body.appendChild(box); }
    box.innerHTML = R.printHtml(st.plan);
  }
  function schedulePrint() { clearTimeout(printTimer); printTimer = setTimeout(buildPrint, 300); }
  window.addEventListener('beforeprint', () => { if (st.plan) { clearTimeout(printTimer); buildPrint(); } });

  // ---------- editing ----------
  const focusSlot = (id) => {
    const el = root.querySelector('.stm-g-slot[data-id="' + id + '"]') || root.querySelector('[data-edit="' + id + '"]');
    if (el) el.focus();
  };
  function afterEdit(msg, focusId) {
    st.plan.edited = true;
    E.sortSlots(st.plan); E.refreshSummary(st.plan);
    // slots may have moved to another week
    renderResults();
    persist();
    if (msg) say(msg);
    if (focusId) focusSlot(focusId);
  }

  let editing = null; let opener = null;
  function fillEditorTimes(date, keep) {
    const startSel = byId('stm-ed-start');
    const slot = E.findSlot(st.plan, editing);
    const starts = E.validStarts(st.plan, editing, date, 15);
    if (slot && slot.date === date && !starts.includes(slot.start)) starts.push(slot.start);
    starts.sort((a, b) => a - b);
    const dur = slot.end - slot.start;
    startSel.innerHTML = starts.length ? starts.map((m) => opt(m, E.fmtTime(m) + ' to ' + E.fmtTime(m + dur), keep != null ? keep : slot.start)).join('') : '<option value="">No free gap that day</option>';
    byId('stm-ed-save').disabled = !starts.length;
    byId('stm-ed-hint').textContent = starts.length ? '' : 'No free gap of ' + E.fmtDuration(dur) + ' on that day that avoids your fixed blocks and keeps your breaks. Choose another day.';
  }
  function openEditor(id, from) {
    const slot = E.findSlot(st.plan, id);
    if (!slot) return;
    editing = id; opener = from || null;
    const plan = st.plan;
    byId('stm-ed-subject').innerHTML = plan.subjects.map((s) => opt(s.id, s.name, slot.subjectId)).join('');
    byId('stm-ed-done').checked = !!slot.done;
    byId('stm-ed-note').value = slot.note || '';
    byId('stm-ed-day').innerHTML = plan.days.filter((d) => d.kind !== 'rest' || d.date === slot.date).map((d) => opt(d.date, E.fmtDate(d.date, true) + ' (' + (R.DAY_KIND_LABEL[d.kind] || '').toLowerCase() + ')', slot.date)).join('');
    byId('stm-ed-title').textContent = R.subjectName(plan, slot.subjectId) + ': ' + R.kindText(slot);
    byId('stm-ed-error').textContent = '';
    fillEditorTimes(slot.date, slot.start);
    if (typeof els.editor.showModal === 'function') els.editor.showModal(); else els.editor.setAttribute('open', '');
    byId('stm-ed-subject').focus();
  }
  function closeEditor() {
    if (els.editor.open) els.editor.close();
    const o = opener; opener = null;
    if (o && document.contains(o)) o.focus();
  }
  function saveEditor(e) {
    e.preventDefault();
    const plan = st.plan; const id = editing; const slot = E.findSlot(plan, id);
    if (!slot) { closeEditor(); return; }
    const err = byId('stm-ed-error');
    const backup = clone(slot);
    const subj = E.setSlotSubject(plan, id, byId('stm-ed-subject').value);
    if (!subj.ok) { err.textContent = subj.msg; return; }
    slot.done = byId('stm-ed-done').checked;
    slot.note = String(byId('stm-ed-note').value || '').replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, E.LIMITS.noteMax);
    const date = byId('stm-ed-day').value; const start = Number(byId('stm-ed-start').value);
    let msg = 'Session saved.';
    if (date !== backup.date || start !== backup.start) {
      const mv = E.moveSlot(plan, id, date, Number.isFinite(start) ? start : undefined);
      if (!mv.ok) { Object.assign(slot, backup); err.textContent = mv.msg; return; }
      msg = mv.msg + (mv.warn ? ' ' + mv.warn : '');
    }
    closeEditor();
    afterEdit(msg, id);
  }
  function deleteFromEditor() {
    const id = editing;
    if (!id) return;
    E.deleteSlot(st.plan, id);
    opener = null;
    closeEditor();
    afterEdit('Session deleted.', null);
    els.resultsTitle.focus();
  }

  function toggleDone(id, checked) {
    const slot = E.findSlot(st.plan, id);
    if (!slot) return;
    slot.done = !!checked;
    E.refreshSummary(st.plan);
    renderResults();
    persist();
    const box = root.querySelector('[data-done="' + id + '"]');
    if (box) box.focus();
    say(checked ? 'Marked done. ' + els.progressText.textContent : 'Marked not done. ' + els.progressText.textContent);
  }

  // ---------- drag and drop between days ----------
  let dragId = null;
  els.grid.addEventListener('dragstart', (e) => {
    const b = e.target.closest && e.target.closest('.stm-g-slot');
    if (!b) return;
    dragId = b.getAttribute('data-id');
    try { e.dataTransfer.setData('text/plain', dragId); e.dataTransfer.effectAllowed = 'move'; } catch (x) {}
    b.classList.add('is-dragging');
  });
  els.grid.addEventListener('dragend', () => { dragId = null; $$('.is-dragging').forEach((n) => n.classList.remove('is-dragging')); $$('.is-over').forEach((n) => n.classList.remove('is-over')); });
  els.grid.addEventListener('dragover', (e) => { const body = e.target.closest && e.target.closest('.stm-g-body'); if (body && dragId) { e.preventDefault(); body.classList.add('is-over'); } });
  els.grid.addEventListener('dragleave', (e) => { const body = e.target.closest && e.target.closest('.stm-g-body'); if (body) body.classList.remove('is-over'); });
  els.grid.addEventListener('drop', (e) => {
    const body = e.target.closest && e.target.closest('.stm-g-body');
    if (!body || !dragId) return;
    e.preventDefault();
    const id = dragId; dragId = null;
    body.classList.remove('is-over');
    const rect = body.getBoundingClientRect();
    const span = Number(els.grid.dataset.span) || 960; const g0 = Number(els.grid.dataset.start) || 0;
    const minutes = g0 + ((e.clientY - rect.top) / Math.max(1, rect.height)) * span;
    const res = E.moveSlot(st.plan, id, body.getAttribute('data-date'), Math.round(minutes / 5) * 5);
    if (!res.ok) { say(res.msg); return; }
    afterEdit(res.msg + (res.warn ? ' ' + res.warn : ''), id);
  });

  // ---------- clicks and changes ----------
  root.addEventListener('click', (e) => {
    const t = e.target;
    const link = t.closest('a[data-field]');
    if (link) { e.preventDefault(); const el = fieldEl(link.getAttribute('data-field')); if (el) { el.focus(); el.scrollIntoView({ block: 'center' }); } return; }
    const rs = t.closest('[data-remove-subject]');
    if (rs) {
      readRaw();
      const i = Number(rs.getAttribute('data-remove-subject'));
      st.raw.subjects.splice(i, 1);
      if (!st.raw.subjects.length) st.raw.subjects.push(blankSubject());
      renderSubjects(); persistSoon();
      const next = byId('stm-subject-' + Math.min(i, st.raw.subjects.length - 1) + '-name'); if (next) next.focus();
      return;
    }
    const rb = t.closest('[data-remove-block]');
    if (rb) {
      readRaw();
      const i = Number(rb.getAttribute('data-remove-block'));
      st.raw.blocks.splice(i, 1);
      renderBlocks(); persistSoon();
      const next = byId('stm-block-' + Math.min(i, st.raw.blocks.length - 1) + '-label'); (next || $('#stm-add-block')).focus();
      return;
    }
    const id = t.id || (t.closest('button') && t.closest('button').id) || '';
    if (id === 'stm-add-subject') {
      readRaw();
      if (st.raw.subjects.length < E.LIMITS.maxSubjects) st.raw.subjects.push(blankSubject());
      renderSubjects(); persistSoon();
      byId('stm-subject-' + (st.raw.subjects.length - 1) + '-name').focus();
    } else if (id === 'stm-add-block') {
      readRaw();
      if (st.raw.blocks.length < E.LIMITS.maxBlocks) st.raw.blocks.push(blankBlock('', '', '', everyDay.slice()));
      renderBlocks(); persistSoon();
      byId('stm-block-' + (st.raw.blocks.length - 1) + '-label').focus();
    } else if (id === 'stm-example') {
      st.raw = exampleRaw(); st.plan = null; renderForm(); make(true); st.example = true; if (st.plan) { renderResults(); persist(); }
    } else if (id === 'stm-clear') {
      clearAll();
    } else if (id === 'stm-replace-yes') {
      make(true);
    } else if (id === 'stm-replace-no') {
      els.replace.hidden = true; if (els.resultsTitle && !els.results.hidden) els.resultsTitle.focus();
    } else if (id === 'stm-pdf') {
      downloadPdf();
    } else if (id === 'stm-print-btn') {
      printPlan();
    } else if (id === 'stm-prev') {
      st.week = Math.max(0, st.week - 1); renderResults(); persistSoon(); els.weekLabel.focus();
    } else if (id === 'stm-next') {
      st.week += 1; renderResults(); persistSoon(); els.weekLabel.focus();
    } else if (id === 'stm-today') {
      const tt = todayIso(); const weeks = E.weeksOf(st.plan); const k = weeks.findIndex((w) => w.dates.includes(tt)); if (k >= 0) { st.week = k; renderResults(); persistSoon(); els.weekLabel.focus(); }
    } else if (id === 'stm-showall') {
      st.showAll = !st.showAll; renderResults(); $('#stm-showall').focus();
    } else if (id === 'stm-ed-cancel') {
      closeEditor();
    } else if (id === 'stm-ed-delete') {
      deleteFromEditor();
    }
    const slotBtn = t.closest('.stm-g-slot');
    if (slotBtn) { openEditor(slotBtn.getAttribute('data-id'), slotBtn); return; }
    const editBtn = t.closest('[data-edit]');
    if (editBtn) openEditor(editBtn.getAttribute('data-edit'), editBtn);
  });

  root.addEventListener('change', (e) => {
    const t = e.target;
    if (t.matches && t.matches('[data-done]')) { toggleDone(t.getAttribute('data-done'), t.checked); return; }
    if (t.id === 'stm-week-select') { st.week = Number(t.value) || 0; renderResults(); persistSoon(); $('#stm-week-select').focus(); return; }
    if (t.id === 'stm-ed-day') { fillEditorTimes(t.value, null); return; }
    if (t.closest('#stm-form')) { readRaw(); persistSoon(); updateHints(); }
  });
  root.addEventListener('input', (e) => { if (e.target.closest && e.target.closest('#stm-form')) { readRaw(); persistSoon(); updateHints(); } });

  els.form.addEventListener('submit', (e) => { e.preventDefault(); make(false); });
  byId('stm-ed-form').addEventListener('submit', saveEditor);
  els.editor.addEventListener('cancel', () => { opener = opener; });
  els.editor.addEventListener('close', () => { const o = opener; opener = null; if (o && document.contains(o)) o.focus(); });

  function clearAll() {
    try { localStorage.removeItem(KEY); } catch (e) {}
    st.raw = defaultRaw(); st.plan = null; st.week = 0; st.example = false; st.showAll = false;
    renderForm(); clearInvalid(); els.replace.hidden = true; renderResults(); buildPrint();
    els.saved.textContent = '';
    say('Your data was cleared from this browser.');
    byId('stm-subject-0-name').focus();
  }

  // ---------- PDF and print ----------
  let pdfBusy = false;
  async function downloadPdf() {
    if (pdfBusy || !st.plan) return;
    pdfBusy = true;
    els.pdfBtn.setAttribute('aria-busy', 'true');
    try {
      say('Preparing the PDF...');
      const mod = await import('./studyTimetablePdf.mjs');
      const needsFont = mod.planHasUnicode(st.plan);
      let ready = false;
      if (needsFont) {
        say('Loading a font for your Telugu, Hindi or other text...');
        ready = await mod.preparePlanFonts(st.plan);
        if (!ready) { say('This device could not draw some of your text into the PDF. Use Print and choose Save as PDF instead, which keeps every script.'); return; }
      }
      const out = await mod.makeTimetablePdf(st.plan, ready);
      out.pdf.save(out.fileName);
      say(needsFont
        ? 'PDF downloaded. Text in Telugu, Hindi or other scripts is drawn as pictures so the letters keep their shape, so that text cannot be selected or copied from the PDF. It was made in this browser and not uploaded.'
        : 'PDF downloaded. It was made in this browser and not uploaded.');
    } catch (err) {
      console.error('Unable to create the timetable PDF:', err);
      say('The PDF could not be made. Use Print and choose Save as PDF instead.');
    } finally { pdfBusy = false; els.pdfBtn.removeAttribute('aria-busy'); }
  }
  function printPlan() {
    if (!st.plan) return;
    clearTimeout(printTimer);
    buildPrint();
    document.body.setAttribute('data-stm-has-plan', '1');
    window.print();
  }

  // ---------- start ----------
  const restored = load();
  renderForm();
  if (restored && st.plan) {
    try { renderResults(); } catch (e) { console.error('Saved timetable could not be shown:', e); st.plan = null; els.results.hidden = true; document.body.removeAttribute('data-stm-has-plan'); persist(); }
  }
  if (restored && st.plan) {
    els.saved.textContent = st.example ? '' : 'Your saved timetable was loaded from this browser. Press Clear my data to remove it.';
  } else if (restored) {
    els.saved.textContent = 'Your last entries were loaded from this browser. Press Clear my data to remove them.';
  }
  if (!storageOk) els.saved.textContent = 'This browser is not keeping data (private mode or storage turned off), so your timetable will be lost when you close the page. Download the PDF to keep it.';
  root.dataset.ready = '1';
}
