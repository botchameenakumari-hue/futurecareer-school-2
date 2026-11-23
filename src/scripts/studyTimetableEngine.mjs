// Study timetable engine. No DOM, no browser APIs: the page, the print view, the PDF and the unit tests all use it.
//
// How a plan is made (the same text is shown on the page):
// 1. Every day from the start date to the last exam gets a kind: study, exam, rest, catch-up or mock-test day.
// 2. Free time on each day is the waking window (wake-up to bedtime) minus your fixed blocks. Sleep is never used.
// 3. Each subject gets a priority: (6 - confidence) + importance. Time is shared in that proportion among the
//    subjects whose exam is still ahead, using a running "owed time" balance, so weak and heavy subjects get more.
// 4. After each study session, short revision passes are placed on the gaps you choose (1, 3 and 7 days by default).
// 5. In the last days before a subject's exam, its sessions become final revision.
// All times are minutes after midnight. Dates are ISO strings (YYYY-MM-DD) and day numbers are whole UTC days.

export const LIMITS = {
  maxSubjects: 12,
  maxBlocks: 14,
  maxDays: 120,
  maxDayHours: 10,
  softDayHours: 8,
  sleepFloor: 6,
  minSlot: 15,
  nameMax: 40,
  labelMax: 30,
  noteMax: 80,
};

export const DOW_LONG = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
export const DOW_SHORT = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
export const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const DAY_KINDS = ['study', 'exam', 'rest', 'catchup', 'mock'];

export const KIND_LABEL = {
  learn: 'Study',
  revise: 'Spaced revision',
  final: 'Final revision',
  mock: 'Mock test',
  review: 'Mock review',
};

// ---------- small helpers ----------

export function parseTime(value) {
  const m = /^(\d{1,2}):(\d{2})$/.exec(String(value == null ? '' : value).trim());
  if (!m) return null;
  const h = Number(m[1]);
  const mi = Number(m[2]);
  if (h > 23 || mi > 59) return null;
  return h * 60 + mi;
}

export function fmtTime(min) {
  const m = Math.max(0, Math.round(min));
  return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
}

export function isoToNum(iso) {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(String(iso == null ? '' : iso).trim());
  if (!m) return null;
  const y = Number(m[1]);
  const mo = Number(m[2]);
  const d = Number(m[3]);
  const t = Date.UTC(y, mo - 1, d);
  const back = new Date(t);
  if (back.getUTCFullYear() !== y || back.getUTCMonth() !== mo - 1 || back.getUTCDate() !== d) return null;
  if (y < 2000 || y > 2100) return null;
  return Math.round(t / 86400000);
}

export function numToIso(n) {
  const dt = new Date(n * 86400000);
  return dt.getUTCFullYear() + '-' + String(dt.getUTCMonth() + 1).padStart(2, '0') + '-' + String(dt.getUTCDate()).padStart(2, '0');
}

/** Monday = 0 ... Sunday = 6 */
export function dowOfNum(n) {
  return ((new Date(n * 86400000).getUTCDay() + 6) % 7);
}

export function fmtDate(iso, withDow) {
  const n = isoToNum(iso);
  if (n == null) return String(iso);
  const dt = new Date(n * 86400000);
  return (withDow ? DOW_SHORT[dowOfNum(n)] + ' ' : '') + dt.getUTCDate() + ' ' + MONTH_SHORT[dt.getUTCMonth()];
}

export function fmtDateLong(iso) {
  const n = isoToNum(iso);
  if (n == null) return String(iso);
  const dt = new Date(n * 86400000);
  return DOW_LONG[dowOfNum(n)] + ' ' + dt.getUTCDate() + ' ' + MONTH_SHORT[dt.getUTCMonth()] + ' ' + dt.getUTCFullYear();
}

export function fmtHours(min) {
  const h = min / 60;
  const r = Math.round(h * 10) / 10;
  return (Number.isInteger(r) ? String(r) : r.toFixed(1)) + ' h';
}

export function fmtDuration(min) {
  const h = Math.floor(min / 60);
  const m = Math.round(min % 60);
  if (h && m) return h + ' h ' + m + ' min';
  if (h) return h + ' h';
  return m + ' min';
}

const round5 = (n) => Math.round(n / 5) * 5;
const floor5 = (n) => Math.floor(n / 5) * 5;
const ceil5 = (n) => Math.ceil(n / 5) * 5;

/** Reads a number the way a person types it: "2", "2.5", "2,5". Returns NaN when it is not a plain number. */
export function parseNumber(value) {
  if (typeof value === 'number') return Number.isFinite(value) ? value : NaN;
  const s = String(value == null ? '' : value).trim().replace(',', '.');
  if (!/^-?\d+(\.\d+)?$/.test(s)) return NaN;
  return Number(s);
}

/** "1, 3, 7" or "1-3-7" or [1,3,7]. Returns { gaps, error }. Empty means no spaced revision. */
export function parseGaps(value) {
  if (Array.isArray(value)) value = value.join(',');
  let s = String(value == null ? '' : value).trim();
  if (!s) return { gaps: [], error: null };
  s = s.replace(/(\d)\s*-\s*(?=\d)/g, '$1,');
  if (/-/.test(s)) return { gaps: [], error: 'Revision gaps must be whole numbers of days from 1 to 30, such as 1, 3, 7.' };
  const tokens = s.split(/[\s,;/]+/).filter(Boolean);
  const out = [];
  for (const t of tokens) {
    if (!/^\d+$/.test(t)) return { gaps: [], error: 'Revision gaps must be whole numbers of days from 1 to 30, such as 1, 3, 7.' };
    const n = Number(t);
    if (n < 1 || n > 30) return { gaps: [], error: 'Each revision gap must be from 1 to 30 days.' };
    if (!out.includes(n)) out.push(n);
  }
  out.sort((a, b) => a - b);
  if (out.length > 4) return { gaps: [], error: 'Use at most four revision gaps, for example 1, 3, 7, 14.' };
  return { gaps: out, error: null };
}

function cleanText(value, max) {
  return String(value == null ? '' : value).replace(/[\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, max === Infinity ? undefined : max + 1);
}

function subtract(window, cuts) {
  let out = [[window[0], window[1]]];
  for (const [cs, ce] of cuts) {
    const next = [];
    for (const [a, b] of out) {
      if (ce <= a || cs >= b) { next.push([a, b]); continue; }
      if (cs > a) next.push([a, cs]);
      if (ce < b) next.push([ce, b]);
    }
    out = next;
  }
  return out;
}

// ---------- input checking ----------

export const DEFAULT_INPUT = {
  subjects: [],
  startDate: '',
  examDate: '',
  wake: '06:00',
  bed: '22:00',
  sleepMin: 8,
  hoursWeekday: 3,
  hoursWeekend: 5,
  focus: 'morning',
  blocks: [],
  sessionMin: 50,
  breakMin: 10,
  gaps: '1, 3, 7',
  restDay: 6,
  mockDay: 5,
  mockMin: 120,
  examDayHours: 2,
  examDayFrom: '15:00',
};

/**
 * Checks the raw form values. Returns { ok, errors: [{field, msg}], warnings: [string], input }.
 * input holds clean numbers and is only present when ok is true.
 */
export function normalizeInput(raw) {
  const errors = [];
  const warnings = [];
  const err = (field, msg) => errors.push({ field, msg });
  const r = Object.assign({}, DEFAULT_INPUT, raw || {});

  // subjects
  const subjects = [];
  const rows = Array.isArray(r.subjects) ? r.subjects : [];
  rows.forEach((row, i) => {
    const name = cleanText(row && row.name, LIMITS.nameMax);
    const blankRow = !name;
    if (blankRow) return;
    const idx = i + 1;
    if (name.length > LIMITS.nameMax) { err('subject-' + i + '-name', 'Subject ' + idx + ': keep the name to ' + LIMITS.nameMax + ' characters or fewer.'); return; }
    const conf = parseNumber(row.confidence == null || row.confidence === '' ? 3 : row.confidence);
    const weight = parseNumber(row.weight == null || row.weight === '' ? 3 : row.weight);
    if (!Number.isInteger(conf) || conf < 1 || conf > 5) err('subject-' + i + '-confidence', name + ': choose a confidence from 1 to 5.');
    if (!Number.isInteger(weight) || weight < 1 || weight > 5) err('subject-' + i + '-weight', name + ': choose an importance from 1 to 5.');
    const own = String(row.examDate == null ? '' : row.examDate).trim();
    let ownNum = null;
    if (own) {
      ownNum = isoToNum(own);
      if (ownNum == null) err('subject-' + i + '-exam', name + ': that exam date is not a real date.');
    }
    subjects.push({ id: String(row.id || 's' + (subjects.length + 1)), name, confidence: conf, weight, examOwn: ownNum, row: i });
  });
  if (!subjects.length) err('subject-0-name', 'Add at least one subject name.');
  if (subjects.length > LIMITS.maxSubjects) err('subject-0-name', 'The planner handles up to ' + LIMITS.maxSubjects + ' subjects. Remove some or make two plans.');
  const seen = {};
  subjects.forEach((s) => {
    const k = s.name.toLowerCase();
    if (seen[k]) warnings.push('Two subjects are called "' + s.name + '". Rename one so the timetable is clear.');
    seen[k] = true;
  });
  // keep ids unique and stable
  subjects.forEach((s, i) => { s.id = 's' + (i + 1); });

  // dates
  const startNum = isoToNum(r.startDate);
  if (startNum == null) err('startDate', 'Choose a start date.');
  let globalNum = null;
  if (String(r.examDate || '').trim()) {
    globalNum = isoToNum(r.examDate);
    if (globalNum == null) err('examDate', 'The last exam date is not a real date.');
  }
  subjects.forEach((s) => {
    s.examNum = s.examOwn != null ? s.examOwn : globalNum;
    if (s.examNum == null && !errors.some((e) => e.field === 'subject-' + s.row + '-exam' || e.field === 'examDate')) {
      err('examDate', 'Add an exam date for ' + s.name + ', or one last exam date that applies to every subject.');
    }
  });
  let lastNum = null;
  if (startNum != null) {
    subjects.forEach((s) => {
      if (s.examNum != null && s.examNum <= startNum) {
        err(s.examOwn != null ? 'subject-' + s.row + '-exam' : 'examDate', s.name + ': the exam date must be after the start date, so there is at least one day to study.');
      }
    });
    const nums = subjects.map((s) => s.examNum).filter((n) => n != null);
    if (nums.length) lastNum = Math.max.apply(null, nums);
    if (lastNum != null && lastNum - startNum + 1 > LIMITS.maxDays && !errors.length) {
      err('examDate', 'The plan would run for ' + (lastNum - startNum + 1) + ' days. The planner covers up to ' + LIMITS.maxDays + ' days. Move the start date later and make a second plan after this one.');
    }
  }

  // sleep and day window
  const wake = parseTime(r.wake);
  const bed = parseTime(r.bed);
  if (wake == null) err('wake', 'Enter a wake-up time.');
  if (bed == null) err('bed', 'Enter a bedtime.');
  const sleepMin = parseNumber(r.sleepMin);
  if (!Number.isFinite(sleepMin) || sleepMin < LIMITS.sleepFloor || sleepMin > 10) err('sleepMin', 'Choose a minimum sleep from ' + LIMITS.sleepFloor + ' to 10 hours.');
  if (wake != null && bed != null) {
    if (bed <= wake) err('bed', 'Bedtime must be later than your wake-up time on the same day, and before midnight. The planner does not schedule study after midnight.');
    else if (Number.isFinite(sleepMin)) {
      const sleepHours = (1440 - bed + wake) / 60;
      if (sleepHours + 1e-9 < sleepMin) {
        const fixBed = fmtTime(1440 - Math.ceil(sleepMin * 60) + wake);
        err('bed', 'Your sleep window is ' + fmtDuration(Math.round(sleepHours * 60)) + ', below your minimum of ' + sleepMin + ' hours. Move bedtime to ' + fixBed + ' or earlier, wake up later, or lower the minimum (the lowest allowed is ' + LIMITS.sleepFloor + ' hours).');
      }
    }
  }
  if (Number.isFinite(sleepMin) && sleepMin < 7) warnings.push('A minimum of ' + sleepMin + ' hours of sleep is low for a student. Short sleep makes it harder to remember what you study.');

  // hours
  const hw = parseNumber(r.hoursWeekday);
  const he = parseNumber(r.hoursWeekend);
  const checkHours = (v, field, label) => {
    if (!Number.isFinite(v)) { err(field, label + ': enter a number of hours, for example 3 or 2.5.'); return; }
    if (v < 0) err(field, label + ' cannot be negative.');
    else if (v > LIMITS.maxDayHours) err(field, label + ': the planner allows at most ' + LIMITS.maxDayHours + ' hours of study in a day.');
    else if (v > LIMITS.softDayHours) warnings.push(label + ' is set above ' + LIMITS.softDayHours + ' hours. Check that meals, breaks, exercise and sleep still fit, and lower it if you feel worn out.');
  };
  checkHours(hw, 'hoursWeekday', 'Weekday study hours');
  checkHours(he, 'hoursWeekend', 'Weekend study hours');
  if (Number.isFinite(hw) && Number.isFinite(he) && hw <= 0 && he <= 0) err('hoursWeekday', 'Both study-hour boxes are zero, so there is nothing to plan. Add study hours for weekdays, weekends or both.');

  // session style
  const sessionMin = parseNumber(r.sessionMin);
  if (!Number.isFinite(sessionMin) || sessionMin < 25 || sessionMin > 120) err('sessionMin', 'Choose a session length from 25 to 120 minutes.');
  const breakMin = parseNumber(r.breakMin);
  if (!Number.isFinite(breakMin) || breakMin < 5 || breakMin > 30) err('breakMin', 'Choose a break length from 5 to 30 minutes.');
  const gaps = parseGaps(r.gaps);
  if (gaps.error) err('gaps', gaps.error);
  const restDay = parseNumber(r.restDay);
  const mockDay = parseNumber(r.mockDay);
  if (!Number.isInteger(restDay) || restDay < -1 || restDay > 6) err('restDay', 'Choose a rest day or None.');
  if (!Number.isInteger(mockDay) || mockDay < -1 || mockDay > 6) err('mockDay', 'Choose a mock-test day or None.');
  if (Number.isInteger(restDay) && Number.isInteger(mockDay) && restDay >= 0 && restDay === mockDay) err('mockDay', 'The rest day and the mock-test day cannot be the same day. Change one of them.');
  const mockMin = parseNumber(r.mockMin);
  if (!Number.isFinite(mockMin) || mockMin < 45 || mockMin > 180) err('mockMin', 'Choose a mock-test length from 45 to 180 minutes.');
  const examDayHours = parseNumber(r.examDayHours);
  if (!Number.isFinite(examDayHours) || examDayHours < 0 || examDayHours > 6) err('examDayHours', 'Exam-day study hours must be a number from 0 to 6.');
  const examDayFrom = parseTime(r.examDayFrom);
  if (examDayFrom == null) err('examDayFrom', 'Enter the time you start studying on an exam day.');
  const focus = r.focus === 'evening' ? 'evening' : 'morning';

  // fixed blocks
  const blocks = [];
  const brows = Array.isArray(r.blocks) ? r.blocks : [];
  if (brows.length > LIMITS.maxBlocks) err('block-0-label', 'Use up to ' + LIMITS.maxBlocks + ' fixed blocks. Merge some of them.');
  brows.forEach((b, i) => {
    const label = cleanText(b && b.label, LIMITS.labelMax);
    const hasAny = label || (b && (b.start || b.end));
    if (!hasAny) return;
    const shown = label || 'Block ' + (i + 1);
    if (label.length > LIMITS.labelMax) { err('block-' + i + '-label', shown + ': keep the label to ' + LIMITS.labelMax + ' characters or fewer.'); return; }
    const s = parseTime(b.start);
    const e = parseTime(b.end);
    if (s == null || e == null) { err('block-' + i + '-start', shown + ': enter a start time and an end time.'); return; }
    if (e <= s) { err('block-' + i + '-end', shown + ': the end time must be after the start time. If something runs past midnight, split it into two blocks.'); return; }
    const days = Array.isArray(b.days) ? b.days.slice(0, 7).map(Boolean) : [];
    while (days.length < 7) days.push(false);
    if (!days.some(Boolean)) { err('block-' + i + '-days', shown + ': tick at least one day.'); return; }
    blocks.push({ label: label || 'Busy', start: s, end: e, days });
  });

  if (errors.length) return { ok: false, errors, warnings };
  return {
    ok: true,
    errors: [],
    warnings,
    input: {
      subjects: subjects.map((s) => ({ id: s.id, name: s.name, confidence: s.confidence, weight: s.weight, examNum: s.examNum, examOwn: s.examOwn != null })),
      startNum,
      lastNum,
      wake,
      bed,
      sleepMin,
      hoursWeekday: hw,
      hoursWeekend: he,
      capWeekday: round5(hw * 60),
      capWeekend: round5(he * 60),
      focus,
      blocks,
      sessionMin: round5(sessionMin),
      breakMin: round5(breakMin),
      gaps: gaps.gaps,
      restDay,
      mockDay,
      mockMin: round5(mockMin),
      examDayCap: round5(examDayHours * 60),
      examDayFrom,
    },
  };
}

// ---------- day layout ----------

/** Free windows for one weekday: the waking window minus the fixed blocks, snapped to 5 minutes. */
export function freeWindows(input, dow) {
  const cuts = input.blocks.filter((b) => b.days[dow]).map((b) => [b.start, b.end]).sort((a, b) => a[0] - b[0]);
  return subtract([input.wake, input.bed], cuts)
    .map(([a, b]) => [ceil5(a), floor5(b)])
    .filter(([a, b]) => b - a >= LIMITS.minSlot);
}

function sumLen(list) { return list.reduce((t, [a, b]) => t + (b - a), 0); }

/** Free intervals on a day after the sessions already placed (each padded by the break). */
function openIntervals(windows, placed, breakMin) {
  const cuts = placed.map((p) => [p.start - breakMin, p.end + breakMin]).sort((a, b) => a[0] - b[0]);
  const out = [];
  windows.forEach((w) => subtract(w, cuts).forEach((x) => { if (x[1] - x[0] >= LIMITS.minSlot) out.push(x); }));
  return out;
}

function buildDays(input) {
  const { startNum, lastNum } = input;
  const len = lastNum - startNum + 1;
  const examSubjects = {};
  input.subjects.forEach((s) => { (examSubjects[s.examNum] = examSubjects[s.examNum] || []).push(s.id); });
  const days = [];
  for (let n = startNum; n <= lastNum; n++) {
    const dow = dowOfNum(n);
    days.push({
      num: n,
      date: numToIso(n),
      dow,
      index: n - startNum,
      kind: 'study',
      exams: examSubjects[n] || [],
      windows: freeWindows(input, dow),
      cap: dow >= 5 ? input.capWeekend : input.capWeekday,
    });
  }
  const notes = [];
  // exam days
  days.forEach((d) => {
    if (d.exams.length) {
      d.kind = 'exam';
      d.windows = d.windows.map(([a, b]) => [Math.max(a, ceil5(input.examDayFrom)), b]).filter(([a, b]) => b - a >= LIMITS.minSlot);
      d.cap = Math.min(d.cap, input.examDayCap);
    }
  });
  // rest days (plans of 8 days or more)
  if (input.restDay >= 0) {
    if (len >= 8) days.forEach((d) => { if (d.kind === 'study' && d.dow === input.restDay) d.kind = 'rest'; });
    else notes.push('The plan is shorter than 8 days, so it has no rest day. Take your breaks inside each day instead.');
  }
  // catch-up (buffer) days: one for every 14 days, at least one from 10 days up
  const catchCount = len >= 10 ? Math.max(1, Math.floor(len / 14)) : 0;
  const eligible = (d) => d.kind === 'study' && d.dow !== input.mockDay && d.index >= 3 && d.num < lastNum - 1;
  for (let j = 1; j <= catchCount; j++) {
    const target = Math.round((len * j) / (catchCount + 1));
    let best = null;
    days.forEach((d) => {
      if (!eligible(d)) return;
      const dist = Math.abs(d.index - target);
      if (!best || dist < best.dist) best = { d, dist };
    });
    if (best) best.d.kind = 'catchup';
  }
  // mock-test days: weekly, from day 8, and only in plans of 14 days or more
  if (input.mockDay >= 0 && len >= 14) {
    days.forEach((d) => { if (d.kind === 'study' && d.dow === input.mockDay && d.index >= 7 && d.num < lastNum - 1) d.kind = 'mock'; });
  }
  // rest and catch-up days carry no planned study
  days.forEach((d) => { if (d.kind === 'rest' || d.kind === 'catchup') d.cap = 0; });
  days.forEach((d) => { d.freeMin = sumLen(d.windows); d.cap = Math.min(d.cap, d.freeMin); });
  return { days, notes };
}

// ---------- the planner ----------

function finalDaysFor(windowDays) {
  if (windowDays >= 8) return Math.min(7, Math.max(2, Math.floor(windowDays * 0.2)));
  if (windowDays >= 4) return 1;
  return 0;
}

/**
 * Makes the plan. raw is the form values. Returns { ok:false, errors, warnings } or
 * { ok:true, plan, warnings } where plan = { input, subjects, days, slots, summary, notes }.
 */
export function planTimetable(raw) {
  const checked = normalizeInput(raw);
  if (!checked.ok) return checked;
  const input = checked.input;
  const warnings = checked.warnings.slice();
  const L = input.sessionMin;
  const B = input.breakMin;
  const { days, notes } = buildDays(input);
  const dayByNum = {};
  days.forEach((d) => { dayByNum[d.num] = d; });

  // time that exists before each exam
  const problems = [];
  input.subjects.forEach((s) => {
    const before = days.filter((d) => d.num < s.examNum).reduce((t, d) => t + d.cap, 0);
    s.capBefore = before;
    if (before < LIMITS.minSlot) problems.push({ field: s.examOwn ? 'examDate' : 'examDate', msg: s.name + ': there is no free study time before its exam. Move the start date earlier, add study hours, free up a fixed block, or change the rest day.' });
  });
  const totalCap = days.reduce((t, d) => t + d.cap, 0);
  if (!problems.length && totalCap < input.subjects.length * 30) {
    problems.push({ field: 'hoursWeekday', msg: 'There is only ' + fmtDuration(totalCap) + ' of free study time for ' + input.subjects.length + ' subjects, less than 30 minutes each. Add study hours, free up a fixed block, or choose a later exam date.' });
  }
  if (problems.length) return { ok: false, errors: problems, warnings };

  // subjects
  const subj = input.subjects.map((s, i) => {
    const windowDays = s.examNum - input.startNum;
    const finalDays = finalDaysFor(windowDays);
    return {
      id: s.id, name: s.name, confidence: s.confidence, weight: s.weight, examNum: s.examNum, examDate: numToIso(s.examNum), examOwn: s.examOwn,
      colorIndex: i,
      priority: (6 - s.confidence) + s.weight,
      finalDays,
      learnEnd: s.examNum - finalDays,
      ent: 0, done: 0, mocks: 0, capBefore: s.capBefore,
    };
  });
  const subjById = {};
  subj.forEach((s) => { subjById[s.id] = s; });

  const studyDays = new Set(days.filter((d) => d.cap > 0).map((d) => d.num));
  const nextStudyDay = (n) => { for (let k = n; k <= input.lastNum; k++) if (studyDays.has(k)) return k; return null; };

  const slots = [];
  const events = []; // spaced revision still to do: { sid, due, minutes, srcs: [{date, gap}] }
  let absorbed = 0;
  let droppedRevision = 0;
  let unplaced = 0;
  const shortDays = [];
  const mockSkips = [];

  days.forEach((day) => {
    if (day.cap <= 0) return;
    const elig = subj.filter((s) => s.examNum > day.num);
    if (!elig.length) return;
    const windows = day.windows;
    const placed = [];
    const capMin = day.cap;

    // owed time grows by priority among subjects still in play; exams within a week count double
    const boost = (s) => (s.examNum - day.num <= 7 ? 2 : 1);
    const sumP = elig.reduce((t, s) => t + s.priority * boost(s), 0);
    elig.forEach((s) => { s.ent += (capMin * s.priority * boost(s)) / sumP; });

    const place = (dur, sid, kind, extra) => {
      let open = openIntervals(windows, placed, B);
      let fit = open.filter(([a, b]) => b - a >= dur);
      let use = dur;
      if (!fit.length) {
        const longest = open.reduce((m, [a, b]) => Math.max(m, b - a), 0);
        use = floor5(Math.min(dur, longest));
        if (use < LIMITS.minSlot) return null;
        fit = open.filter(([a, b]) => b - a >= use);
      }
      let start;
      if (input.focus === 'evening') {
        const pick = fit.reduce((m, x) => (x[1] > m[1] ? x : m), fit[0]);
        start = pick[1] - use;
      } else {
        const pick = fit.reduce((m, x) => (x[0] < m[0] ? x : m), fit[0]);
        start = pick[0];
      }
      const slot = Object.assign({ date: day.date, start, end: start + use, subjectId: sid, kind, done: false, note: '' }, extra || {});
      placed.push(slot);
      slots.push(slot);
      subjById[sid].done += use;
      return slot;
    };

    let remaining = capMin;

    // mock test and its review go in first because the test needs one unbroken stretch
    if (day.kind === 'mock') {
      const choices = elig.filter((s) => s.examNum - day.num >= 2);
      if (choices.length) {
        const pick = choices.reduce((m, s) => ((s.priority / (1 + s.mocks)) > (m.priority / (1 + m.mocks)) ? s : m), choices[0]);
        const reviewMin = Math.max(LIMITS.minSlot, round5(input.mockMin / 3));
        const want = Math.min(input.mockMin, remaining - reviewMin);
        if (want >= 45) {
          const open = openIntervals(windows, placed, B);
          const longest = open.reduce((m, [a, b]) => Math.max(m, b - a), 0);
          const dur = floor5(Math.min(want, longest));
          if (dur >= 45) {
            const slot = place(dur, pick.id, 'mock');
            if (slot) {
              pick.mocks += 1;
              remaining -= (slot.end - slot.start);
              const rv = place(Math.min(reviewMin, remaining), pick.id, 'review');
              if (rv) remaining -= (rv.end - rv.start);
            }
          } else mockSkips.push(day.date);
        } else mockSkips.push(day.date);
      }
    }

    // spaced revision due today (or late), limited to about half of what is left
    const revChunks = [];
    for (let i = events.length - 1; i >= 0; i--) {
      const ev = events[i];
      const s = subjById[ev.sid];
      if (day.num >= s.learnEnd) { events.splice(i, 1); absorbed += 1; }
    }
    const due = events.filter((ev) => ev.due <= day.num && subjById[ev.sid].examNum > day.num)
      .sort((a, b) => (a.due - b.due) || (subjById[a.sid].examNum - subjById[b.sid].examNum));
    let revMinutes = 0;
    const revBudget = Math.floor(remaining / 2);
    due.forEach((ev) => {
      const fitsBudget = revMinutes + ev.minutes <= Math.max(revBudget, revChunks.length ? 0 : ev.minutes);
      if (fitsBudget && revMinutes + ev.minutes <= remaining) { revChunks.push(ev); revMinutes += ev.minutes; }
    });
    remaining -= revMinutes;
    revChunks.forEach((ev) => { subjById[ev.sid].done += ev.minutes; }); // reserved so the picks below see them

    // new study or final revision, chosen by owed time
    const learnBlocks = [];
    const today = {};
    while (remaining >= LIMITS.minSlot) {
      const dur = Math.min(L, floor5(remaining));
      if (dur < LIMITS.minSlot) break;
      let pool = elig.filter((s) => (today[s.id] || 0) < 2);
      if (!pool.length) pool = elig;
      const pick = pool.reduce((m, s) => ((s.ent - s.done) > (m.ent - m.done) ? s : m), pool[0]);
      today[pick.id] = (today[pick.id] || 0) + 1;
      learnBlocks.push({ sid: pick.id, dur, kind: day.num >= pick.learnEnd ? 'final' : 'learn' });
      pick.done += dur; // reserve it so the next pick sees it
      remaining -= dur;
    }
    // undo the reservation, place() adds the real minutes
    learnBlocks.forEach((b) => { subjById[b.sid].done -= b.dur; });
    revChunks.forEach((ev) => { subjById[ev.sid].done -= ev.minutes; });
    // spread a subject so it does not sit in two sessions in a row when another is available
    const ordered = [];
    const left = learnBlocks.slice();
    while (left.length) {
      const last = ordered.length ? ordered[ordered.length - 1].sid : null;
      let i = left.findIndex((b) => b.sid !== last);
      if (i < 0) i = 0;
      ordered.push(left.splice(i, 1)[0]);
    }
    const toPlace = ordered.map((b) => ({ type: 'learn', b })).concat(revChunks.map((ev) => ({ type: 'rev', ev })));
    if (input.focus === 'evening') toPlace.reverse();
    const learnPlaced = {};
    toPlace.forEach((item) => {
      if (item.type === 'learn') {
        const slot = place(item.b.dur, item.b.sid, item.b.kind);
        if (!slot) { unplaced += 1; return; }
        if (slot.kind === 'learn') learnPlaced[slot.subjectId] = (learnPlaced[slot.subjectId] || 0) + (slot.end - slot.start);
      } else {
        const ev = item.ev;
        const slot = place(ev.minutes, ev.sid, 'revise', { srcs: ev.srcs });
        if (slot) events.splice(events.indexOf(ev), 1);
      }
    });
    const planned = placed.reduce((t, p) => t + (p.end - p.start), 0);
    if (planned < capMin * 0.8 && capMin - planned >= 30) shortDays.push(day.date);

    // schedule spaced revision for what was studied today
    Object.keys(learnPlaced).forEach((sid) => {
      const s = subjById[sid];
      const src = learnPlaced[sid];
      const minutes = Math.min(45, Math.max(LIMITS.minSlot, round5(src * 0.25)));
      input.gaps.forEach((g) => {
        const dueNum = nextStudyDay(day.num + g);
        if (dueNum == null || dueNum >= s.examNum) { droppedRevision += 1; return; }
        if (dueNum >= s.learnEnd) { absorbed += 1; return; }
        const same = events.find((ev) => ev.sid === sid && ev.due === dueNum && ev.minutes + minutes <= L);
        if (same) { same.minutes += minutes; same.srcs.push({ date: day.date, gap: g }); }
        else events.push({ sid, due: dueNum, minutes, srcs: [{ date: day.date, gap: g }] });
      });
    });
  });

  // order, number and total
  slots.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : a.start - b.start));
  slots.forEach((s, i) => { s.id = 'x' + (i + 1); });
  const plan = { input, subjects: subj.map((s) => ({ id: s.id, name: s.name, confidence: s.confidence, weight: s.weight, examDate: s.examDate, examOwn: s.examOwn, colorIndex: s.colorIndex, priority: s.priority, finalDays: s.finalDays })), days: days.map((d) => ({ date: d.date, dow: d.dow, kind: d.kind, exams: d.exams, windows: d.windows, cap: d.cap })), slots, notes: notes.slice(), counters: { absorbed, droppedRevision, unplaced } };
  plan.summary = summarise(plan);

  // honest warnings
  const requested = days.reduce((t, d) => t + d.cap, 0);
  const plannedTotal = slots.reduce((t, s) => t + (s.end - s.start), 0);
  if (requested > 0 && plannedTotal < requested * 0.85) {
    warnings.push('You asked for ' + fmtHours(requested) + ' of study but your free gaps, session length and breaks leave room for ' + fmtHours(plannedTotal) + '. Shorter sessions or fewer fixed blocks would use more of your time.');
  }
  plan.summary.perSubject.forEach((s) => {
    if (s.sessions === 0) warnings.push(s.name + ' got no session. There is not enough free time before its exam. Add study hours or free up a fixed block.');
    else if (s.sessions < 3) warnings.push(s.name + ' has only ' + s.sessions + ' session' + (s.sessions === 1 ? '' : 's') + '. That is thin. Add study hours, shorten the sessions or move the exam date if you can.');
  });
  if (mockSkips.length) warnings.push('A mock test could not fit on ' + mockSkips.map((d) => fmtDate(d, true)).join(', ') + ' because no free stretch was long enough. Shorten the mock test or free up that day.');
  if (shortDays.length > 3) warnings.push('On ' + shortDays.length + ' days the fixed blocks and breaks leave less study time than you asked for.');
  plan.warnings = warnings;
  return { ok: true, plan, warnings };
}

export function summarise(plan) {
  const subjById = {};
  plan.subjects.forEach((s) => { subjById[s.id] = s; });
  const per = plan.subjects.map((s) => ({ id: s.id, name: s.name, examDate: s.examDate, confidence: s.confidence, weight: s.weight, priority: s.priority, learn: 0, revise: 0, final: 0, mock: 0, review: 0, total: 0, done: 0, sessions: 0, doneSessions: 0 }));
  const perById = {};
  per.forEach((p) => { perById[p.id] = p; });
  let total = 0;
  let done = 0;
  plan.slots.forEach((sl) => {
    const p = perById[sl.subjectId];
    if (!p) return;
    const m = sl.end - sl.start;
    p[sl.kind] += m;
    p.total += m;
    p.sessions += 1;
    total += m;
    if (sl.done) { p.done += m; p.doneSessions += 1; done += m; }
  });
  const sumPriority = per.reduce((t, p) => t + p.priority, 0);
  per.forEach((p) => { p.share = total ? p.total / total : 0; p.targetShare = sumPriority ? p.priority / sumPriority : 0; });
  const sessions = plan.slots.length;
  const doneSessions = plan.slots.filter((s) => s.done).length;
  const kinds = {};
  plan.days.forEach((d) => { kinds[d.kind] = (kinds[d.kind] || 0) + 1; });
  return { totalMin: total, doneMin: done, sessions, doneSessions, perSubject: per, dayKinds: kinds, days: plan.days.length };
}

// ---------- editing helpers (pure) ----------

export function findSlot(plan, id) { return plan.slots.find((s) => s.id === id) || null; }

function windowsForDate(plan, date) {
  const d = plan.days.find((x) => x.date === date);
  return d || null;
}

/** Free start times (minutes) for moving a slot to a date. The slot itself is ignored. */
export function validStarts(plan, slotId, date, step) {
  const slot = findSlot(plan, slotId);
  const day = windowsForDate(plan, date);
  if (!slot || !day) return [];
  if (day.kind === 'rest') return [];
  const subj = plan.subjects.find((s) => s.id === slot.subjectId);
  if (subj && date >= subj.examDate) return [];
  const dur = slot.end - slot.start;
  const others = plan.slots.filter((s) => s.date === date && s.id !== slotId);
  const open = openIntervals(day.windows, others, plan.input.breakMin);
  const starts = [];
  const st = step || 15;
  open.forEach(([a, b]) => {
    if (b - a < dur) return;
    const last = b - dur;
    starts.push(a);
    for (let t = (Math.floor(a / st) + 1) * st; t < last; t += st) starts.push(t);
    if (last !== a) starts.push(last);
  });
  return Array.from(new Set(starts)).sort((x, y) => x - y);
}

/** Moves a slot. start may be omitted to use the first free time. Returns { ok, msg }. */
export function moveSlot(plan, slotId, date, start) {
  const slot = findSlot(plan, slotId);
  if (!slot) return { ok: false, msg: 'That session was not found.' };
  const day = windowsForDate(plan, date);
  if (!day) return { ok: false, msg: 'That date is outside your plan.' };
  if (day.kind === 'rest') return { ok: false, msg: 'That is your rest day. Choose another day, or change the rest day and make the timetable again.' };
  const subj = plan.subjects.find((s) => s.id === slot.subjectId);
  if (subj && date >= subj.examDate) return { ok: false, msg: subj.name + ' has its exam on ' + fmtDate(subj.examDate, true) + ', so a session cannot go on or after that day.' };
  const options = validStarts(plan, slotId, date, 5);
  if (!options.length) return { ok: false, msg: 'There is no free gap of ' + fmtDuration(slot.end - slot.start) + ' on ' + fmtDate(date, true) + ' that avoids your fixed blocks and keeps your breaks.' };
  let pick = options[0];
  if (start != null) {
    if (!options.includes(start)) {
      pick = options.reduce((m, t) => (Math.abs(t - start) < Math.abs(m - start) ? t : m), options[0]);
    } else pick = start;
  }
  const dur = slot.end - slot.start;
  slot.date = date;
  slot.start = pick;
  slot.end = pick + dur;
  sortSlots(plan);
  const dayTotal = plan.slots.filter((s) => s.date === date).reduce((t, s) => t + (s.end - s.start), 0);
  const warn = dayTotal > day.cap && day.cap > 0 ? fmtDate(date, true) + ' now has ' + fmtHours(dayTotal) + ' of study, more than the ' + fmtHours(day.cap) + ' you set for that day.' : (day.cap === 0 ? fmtDate(date, true) + ' is a ' + (day.kind === 'catchup' ? 'catch-up' : day.kind) + ' day with no study planned, so this adds to it.' : '');
  return { ok: true, msg: 'Moved to ' + fmtDate(date, true) + ' at ' + fmtTime(pick) + '.', warn };
}

export function setSlotSubject(plan, slotId, subjectId) {
  const slot = findSlot(plan, slotId);
  const subj = plan.subjects.find((s) => s.id === subjectId);
  if (!slot || !subj) return { ok: false, msg: 'Choose a subject from the list.' };
  if (slot.date >= subj.examDate) return { ok: false, msg: subj.name + ' has its exam on ' + fmtDate(subj.examDate, true) + ', so it cannot be studied on or after that day.' };
  slot.subjectId = subjectId;
  return { ok: true, msg: 'Changed to ' + subj.name + '.' };
}

export function deleteSlot(plan, slotId) {
  const i = plan.slots.findIndex((s) => s.id === slotId);
  if (i < 0) return false;
  plan.slots.splice(i, 1);
  return true;
}

export function sortSlots(plan) {
  plan.slots.sort((a, b) => (a.date < b.date ? -1 : a.date > b.date ? 1 : a.start - b.start));
}

export function refreshSummary(plan) {
  plan.summary = summarise(plan);
  return plan.summary;
}

/**
 * Self-check used by the unit tests and by the page before it shows a plan.
 * Returns a list of problems (empty when the plan is sound).
 */
export function verifyPlan(plan, options) {
  const ignoreCap = !!(options && options.ignoreCap);
  const issues = [];
  const input = plan.input;
  const dayMap = {};
  plan.days.forEach((d) => { dayMap[d.date] = d; });
  const byDate = {};
  plan.slots.forEach((s) => { (byDate[s.date] = byDate[s.date] || []).push(s); });
  Object.keys(byDate).forEach((date) => {
    const day = dayMap[date];
    if (!day) { issues.push('slot on a date outside the plan: ' + date); return; }
    const list = byDate[date].slice().sort((a, b) => a.start - b.start);
    const dow = day.dow;
    const fixed = input.blocks.filter((b) => b.days[dow]);
    let total = 0;
    list.forEach((s, i) => {
      const m = s.end - s.start;
      total += m;
      if (!(m >= LIMITS.minSlot)) issues.push(date + ' ' + fmtTime(s.start) + ': slot shorter than ' + LIMITS.minSlot + ' minutes');
      if (s.start < input.wake || s.end > input.bed) issues.push(date + ' ' + fmtTime(s.start) + ': slot outside the waking window (sleep)');
      fixed.forEach((b) => { if (s.start < b.end && s.end > b.start) issues.push(date + ' ' + fmtTime(s.start) + '-' + fmtTime(s.end) + ' clashes with ' + b.label); });
      if (i > 0) {
        const prev = list[i - 1];
        if (s.start < prev.end) issues.push(date + ': overlap ' + fmtTime(prev.start) + '-' + fmtTime(prev.end) + ' and ' + fmtTime(s.start) + '-' + fmtTime(s.end));
      }
      const subj = plan.subjects.find((x) => x.id === s.subjectId);
      if (!subj) issues.push(date + ': unknown subject');
      else if (date >= subj.examDate) issues.push(date + ': ' + subj.name + ' session on or after its exam date ' + subj.examDate);
    });
    if (day.kind === 'rest' || day.kind === 'catchup') issues.push(date + ': session on a ' + day.kind + ' day');
    const cap = day.cap;
    if (!ignoreCap && total > cap) issues.push(date + ': ' + total + ' minutes planned, above the ' + cap + ' minute daily cap');
    if (day.kind === 'exam') list.forEach((s) => { if (s.start < input.examDayFrom) issues.push(date + ': exam-day session before ' + fmtTime(input.examDayFrom)); });
  });
  // hours add up
  const sum = plan.slots.reduce((t, s) => t + (s.end - s.start), 0);
  const sm = summarise(plan);
  const perSum = sm.perSubject.reduce((t, p) => t + p.total, 0);
  if (sum !== sm.totalMin || sum !== perSum) issues.push('hours do not add up: slots ' + sum + ', summary ' + sm.totalMin + ', per subject ' + perSum);
  return issues;
}

/** Weeks (Monday to Sunday) that cover the plan: [{ index, dates: [iso x7], inPlan: [bool x7] }] */
export function weeksOf(plan) {
  const first = isoToNum(plan.days[0].date);
  const last = isoToNum(plan.days[plan.days.length - 1].date);
  const mondayNum = first - dowOfNum(first);
  const weeks = [];
  for (let n = mondayNum, i = 0; n <= last; n += 7, i++) {
    const dates = [];
    const inPlan = [];
    for (let k = 0; k < 7; k++) { dates.push(numToIso(n + k)); inPlan.push(n + k >= first && n + k <= last); }
    weeks.push({ index: i, dates, inPlan });
  }
  return weeks;
}
