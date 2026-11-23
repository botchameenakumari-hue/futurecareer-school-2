// Logic for the "marks needed to reach a target percentage" calculator. It has no DOM access, so the
// same results feed the screen, the print view and the PDF, and every number can be tested on its own.
//
// EXACTNESS: every typed number is read as an exact decimal fraction (BigInt numerator and denominator),
// so 0.1 + 0.2 is exactly 0.3 and "needed marks" are never off by a floating point crumb. Numbers are
// only rounded when they are turned into text, and the rounding rule is stated next to each result:
//   - a percentage you stand at today is rounded half up to 2 decimal places;
//   - marks you still NEED are rounded UP (ceiling), so the figure shown is always enough.
//
// HONESTY RULE: no board, university or college rule is built in. The only rule names on the page are
// the ones the person types in. The sources section of the page says which official notices were read.

export const CHECKED_ON = '22 November 2026';
export const MAX_MARKS = 1000000;
export const MAX_COUNT = 100000;
export const MAX_ROWS = 12;
export const MAX_BOARD_ROWS = 10;
export const MAX_AVG_ROWS = 20;

const ZERO = BigInt(0);
const ONE = BigInt(1);
const TEN = BigInt(10);
const HUNDRED = BigInt(100);

// ---------- exact fractions ----------
const absBig = (a) => (a < ZERO ? -a : a);
function gcd(a, b) {
  a = absBig(a);
  b = absBig(b);
  while (b !== ZERO) {
    const t = a % b;
    a = b;
    b = t;
  }
  return a;
}
export function q(n, d = ONE) {
  if (d === ZERO) throw new Error('Division by zero');
  if (d < ZERO) {
    n = -n;
    d = -d;
  }
  const g = gcd(n, d) || ONE;
  return { n: n / g, d: d / g };
}
const Q = (x) => q(BigInt(x));
export const add = (a, b) => q(a.n * b.d + b.n * a.d, a.d * b.d);
export const sub = (a, b) => q(a.n * b.d - b.n * a.d, a.d * b.d);
export const mul = (a, b) => q(a.n * b.n, a.d * b.d);
export const div = (a, b) => q(a.n * b.d, a.d * b.n);
export const cmp = (a, b) => {
  const l = a.n * b.d;
  const r = b.n * a.d;
  return l < r ? -1 : l > r ? 1 : 0;
};
const isZero = (a) => a.n === ZERO;
const isNeg = (a) => a.n < ZERO;
const isInt = (a) => a.d === ONE;
const minQ = (a, b) => (cmp(a, b) <= 0 ? a : b);
const maxQ = (a, b) => (cmp(a, b) >= 0 ? a : b);
const Q100 = q(HUNDRED);

function scaledRound(qv, dp, mode) {
  const scale = TEN ** BigInt(dp);
  const neg = qv.n < ZERO;
  const abs = { n: absBig(qv.n), d: qv.d };
  let m = mode;
  if (neg && mode === 'ceil') m = 'floor';
  else if (neg && mode === 'floor') m = 'ceil';
  const top = abs.n * scale;
  let quo = top / abs.d;
  const rem = top % abs.d;
  if (m === 'half') {
    if (rem * BigInt(2) >= abs.d) quo += ONE;
  } else if (m === 'ceil') {
    if (rem > ZERO) quo += ONE;
  }
  return neg ? -quo : quo;
}

/** An exact fraction as plain text with at most dp decimals, trailing zeros trimmed. mode: half | ceil | floor. */
export function fmt(qv, dp = 2, mode = 'half') {
  const s = scaledRound(qv, dp, mode);
  const neg = s < ZERO;
  let digits = absBig(s).toString();
  if (dp > 0) {
    while (digits.length <= dp) digits = '0' + digits;
    let whole = digits.slice(0, digits.length - dp);
    let frac = digits.slice(digits.length - dp).replace(/0+$/, '');
    digits = frac ? whole + '.' + frac : whole;
  }
  if (digits === '0') return '0';
  return (neg ? '-' : '') + digits;
}
const pc = (v) => fmt(v, 2, 'half');
const pcUp = (v) => fmt(v, 2, 'ceil');
const n4 = (v) => fmt(v, 4, 'half');
const nExact = (v) => fmt(v, 6, 'half');
const ceilInt = (qv) => scaledRound(qv, 0, 'ceil');
const floorInt = (qv) => scaledRound(qv, 0, 'floor');

// ---------- reading what a person typed ----------
const DIGIT_MAPS = [
  [0x0c66, 0x0c6f], // Telugu digits
  [0x0966, 0x096f], // Devanagari digits
];
function asciiDigits(text) {
  let out = '';
  for (const ch of text) {
    const c = ch.codePointAt(0);
    let done = false;
    for (const [lo, hi] of DIGIT_MAPS) {
      if (c >= lo && c <= hi) {
        out += String(c - lo);
        done = true;
        break;
      }
    }
    out += done ? '' : ch;
  }
  return out;
}

export const isBlank = (v) => v === null || v === undefined || String(v).trim() === '';

/**
 * Reads "78", " 78,5 ", ".5", "75%" (when percent is allowed) and Telugu or Devanagari digits.
 * Rejects empty text, words, 1e3, Infinity and more than one decimal mark. Returns an exact fraction.
 */
export function parseNumber(raw, opts = {}) {
  if (isBlank(raw)) return { ok: false, error: 'empty' };
  let text = asciiDigits(String(raw)).trim();
  if (opts.percent) text = text.replace(/\s*%$/, '');
  text = text.replace(/−/g, '-');
  if (!/^[+-]?(\d+([.,]\d*)?|[.,]\d+)$/.test(text)) return { ok: false, error: 'not-a-number' };
  const unsigned = text.replace(/^[+-]/, '');
  if (unsigned.replace(/[.,]/, '').length > 15) return { ok: false, error: 'too-large' };
  const neg = text.startsWith('-');
  const parts = unsigned.replace(',', '.').split('.');
  const whole = parts[0] || '0';
  const frac = parts[1] || '';
  let n = BigInt(whole + frac);
  if (neg) n = -n;
  return { ok: true, value: q(n, TEN ** BigInt(frac.length)) };
}

function readMarks(raw, what) {
  const p = parseNumber(raw);
  if (!p.ok) return p.error === 'empty' ? { ok: false, error: what + '-empty' } : { ok: false, error: what + '-' + p.error };
  if (isNeg(p.value)) return { ok: false, error: what + '-negative' };
  if (cmp(p.value, Q(MAX_MARKS)) > 0) return { ok: false, error: what + '-too-large' };
  return { ok: true, value: p.value };
}

function readWhole(raw, what, min, max) {
  const p = parseNumber(raw);
  if (!p.ok) return { ok: false, error: what + '-' + (p.error === 'empty' ? 'empty' : p.error) };
  if (isNeg(p.value)) return { ok: false, error: what + '-negative' };
  if (!isInt(p.value)) return { ok: false, error: what + '-not-whole' };
  if (cmp(p.value, Q(min)) < 0 || cmp(p.value, Q(max)) > 0) return { ok: false, error: what + '-range' };
  return { ok: true, value: p.value };
}

const label = (name, i) => {
  const t = String(name == null ? '' : name).replace(/\s+/g, ' ').trim().slice(0, 60);
  return t || 'Part ' + (i + 1);
};
const labelSubject = (name, i) => {
  const t = String(name == null ? '' : name).replace(/\s+/g, ' ').trim().slice(0, 60);
  return t || 'Subject ' + (i + 1);
};
const shown = (v) => String(v == null ? '' : v).trim().slice(0, 20);

// ---------- 1. marks needed in the part still to come ----------
/**
 * target: percent. mode: 'weights' (percent weights that add to 100) or 'addup' (the out-of marks are the weights).
 * rows: [{ name, got, max, weight }]. A row with no "got" is still to come. pass: optional percent of the
 * remaining part that must be reached to pass it.
 */
export function marksNeeded({ target, mode, rows, pass }) {
  const anyTyped = rows.some((r) => !isBlank(r.got) || !isBlank(r.max));
  if (isBlank(target) && !anyTyped) return { ok: false, error: 'nothing-yet' };
  const t = parseNumber(target, { percent: true });
  if (!t.ok) return { ok: false, error: 'target-' + t.error };
  if (isNeg(t.value)) return { ok: false, error: 'target-negative' };
  if (cmp(t.value, Q100) > 0) return { ok: false, error: 'target-above-100' };
  const weighted = mode !== 'addup';

  const used = [];
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (isBlank(r.got) && isBlank(r.max)) {
      // A weight with nothing else means the row is still expected (weights mode), so ask for its out-of marks.
      if (weighted && !isBlank(r.weight)) return { ok: false, error: 'row-max-empty', row: i + 1, field: 'max' };
      continue;
    }
    const max = readMarks(r.max, 'max');
    if (!max.ok) return { ok: false, error: 'row-' + max.error, row: i + 1, field: 'max' };
    if (isZero(max.value)) return { ok: false, error: 'row-max-zero', row: i + 1, field: 'max' };
    let got = null;
    if (!isBlank(r.got)) {
      const g = readMarks(r.got, 'got');
      if (!g.ok) return { ok: false, error: 'row-' + g.error, row: i + 1, field: 'got' };
      if (cmp(g.value, max.value) > 0) return { ok: false, error: 'row-got-above-max', row: i + 1, field: 'got' };
      got = g.value;
    }
    let weight;
    if (weighted) {
      const w = parseNumber(r.weight, { percent: true });
      if (!w.ok) return { ok: false, error: 'row-weight-' + w.error, row: i + 1, field: 'weight' };
      if (isNeg(w.value) || isZero(w.value) || cmp(w.value, Q100) > 0) return { ok: false, error: 'row-weight-range', row: i + 1, field: 'weight' };
      weight = w.value;
    } else {
      weight = max.value;
    }
    used.push({ i, name: label(r.name, i), got, max: max.value, weight, gotText: shown(r.got), maxText: shown(r.max), weightText: weighted ? shown(r.weight) : shown(r.max) });
  }
  if (!used.length) return { ok: false, error: 'no-rows' };

  let total = Q(0);
  used.forEach((u) => { total = add(total, u.weight); });
  if (weighted && cmp(total, Q100) !== 0) return { ok: false, error: 'weights-sum', sum: nExact(total) };
  if (isZero(total)) return { ok: false, error: 'no-rows' };

  let passFraction = Q(0);
  let passText = '';
  if (!isBlank(pass)) {
    const p = parseNumber(pass, { percent: true });
    if (!p.ok) return { ok: false, error: 'pass-' + p.error };
    if (isNeg(p.value) || cmp(p.value, Q100) > 0) return { ok: false, error: 'pass-range' };
    passFraction = div(p.value, Q100);
    passText = fmt(p.value, 4);
  }

  // Each part counts weight / total of the overall percentage.
  let D = Q(0); // points already earned, out of 100
  let T = Q(0); // share of the overall still to come, as a fraction
  used.forEach((u) => {
    u.share = div(u.weight, total); // fraction of overall
    if (u.got !== null) {
      u.points = mul(Q100, mul(u.share, div(u.got, u.max)));
      u.pointsText = n4(u.points);
      D = add(D, u.points);
    } else {
      T = add(T, u.share);
    }
  });
  const todo = used.filter((u) => u.got === null);
  const done = used.filter((u) => u.got !== null);
  const highest = add(D, mul(Q100, T));
  const steps = [];
  steps.push(weighted
    ? 'Each part counts for its weight out of ' + nExact(total) + ' percent of the overall result.'
    : 'Marks simply add up, so each part counts for its out-of marks over the total of ' + nExact(total) + ' marks.');
  done.forEach((u) => {
    steps.push(u.name + ': ' + nExact(u.got) + ' out of ' + nExact(u.max) + ' is ' + n4(mul(div(u.got, u.max), Q100)) + ' percent of that part. It counts for ' + n4(mul(u.share, Q100)) + ' percent of the overall, so it adds ' + n4(u.points) + ' points.');
  });
  todo.forEach((u) => {
    steps.push(u.name + ': still to come, out of ' + nExact(u.max) + '. It is worth ' + n4(mul(u.share, Q100)) + ' points of the overall if you score full marks.');
  });

  const base = {
    ok: true,
    target: fmt(t.value, 4),
    mode: weighted ? 'weights' : 'addup',
    parts: used,
    earned: pc(D),
    highest: pc(highest),
    lowest: pc(D),
    passText,
    steps,
  };

  if (!todo.length) {
    const met = cmp(D, t.value) >= 0;
    steps.push('Everything is entered: ' + n4(D) + ' points earned out of 100, so your overall is ' + pc(D) + ' percent.');
    steps.push(met ? 'That is ' + (cmp(D, t.value) === 0 ? 'exactly on' : 'above') + ' your target of ' + fmt(t.value, 4) + ' percent.' : 'That is ' + pc(sub(t.value, D)) + ' points short of your target of ' + fmt(t.value, 4) + ' percent (shortfall rounded half up).');
    return { ...base, status: 'all-done', overall: pc(D), met, shortfall: met ? '0' : pc(sub(t.value, D)) };
  }

  const needPoints = sub(t.value, D);
  steps.push('Points still to find: target ' + fmt(t.value, 4) + ' minus ' + n4(D) + ' earned = ' + n4(needPoints) + '.');
  steps.push('The parts still to come are worth ' + n4(mul(Q100, T)) + ' points in all, so the best you can reach is ' + n4(highest) + ' percent.');
  const xTarget = div(needPoints, mul(Q100, T)); // fraction of each remaining part
  if (cmp(xTarget, Q(1)) > 0) {
    steps.push('You would need ' + pcUp(mul(Q100, xTarget)) + ' percent of the remaining parts, which is more than the full 100 percent. The target cannot be reached.');
    return { ...base, status: 'not-possible', overall: null, neededPercentOfRemaining: pcUp(mul(Q100, xTarget)) };
  }
  let x = maxQ(xTarget, Q(0));
  let passBinds = false;
  if (cmp(passFraction, x) > 0) {
    x = passFraction;
    passBinds = true;
  }
  const alreadyMet = cmp(xTarget, Q(0)) <= 0;
  steps.push(alreadyMet
    ? 'Even 0 in the remaining parts keeps you at ' + n4(D) + ' percent, which already reaches the target.'
    : 'Share of each remaining part you need: ' + n4(needPoints) + ' divided by ' + n4(mul(Q100, T)) + ' = about ' + n4(xTarget) + ', which is ' + pcUp(mul(Q100, xTarget)) + ' percent of each part when rounded up. The marks below are worked from the exact share, not the rounded one.');
  if (passBinds) steps.push('You also asked for a pass mark of ' + passText + ' percent in the remaining part. That is higher than the target needs, so the pass mark sets the figure.');
  const allWhole = todo.every((u) => isInt(u.max));
  let wholeOverall = null;
  todo.forEach((u) => {
    u.neededPct = pcUp(mul(Q100, x));
    const marks = mul(x, u.max);
    u.neededMarks = pcUp(marks);
    u.neededWhole = isInt(u.max) ? String(ceilInt(marks)) : null;
    steps.push(u.name + ': exact share x ' + nExact(u.max) + ' marks = ' + nExact(marks) + ' marks, so you need at least ' + u.neededMarks + (u.neededWhole !== null && u.neededWhole !== u.neededMarks ? ' (' + u.neededWhole + ' in whole marks)' : '') + ' out of ' + nExact(u.max) + '.');
  });
  const exactOverall = add(D, mul(Q100, mul(T, x)));
  steps.push('Scoring exactly that gives ' + pc(exactOverall) + ' percent overall.');
  if (allWhole) {
    let w = D;
    todo.forEach((u) => { w = add(w, mul(Q100, mul(u.share, div(Q(BigInt(u.neededWhole)), u.max)))); });
    wholeOverall = pc(w);
    steps.push('Scoring those whole marks gives ' + wholeOverall + ' percent overall.');
  }
  return {
    ...base,
    status: alreadyMet && !passBinds ? 'already-met' : 'needed',
    alreadyMet,
    passBinds,
    overall: pc(exactOverall),
    wholeOverall,
    neededPercentOfRemaining: pcUp(mul(Q100, x)),
  };
}

// ---------- 2. overall percentage across subjects, and where to improve ----------
export function overallPercent({ rows }) {
  const used = [];
  let anyWeight = false;
  let anyNoWeight = false;
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (isBlank(r.got) && isBlank(r.max) && isBlank(r.weight)) continue;
    const max = readMarks(r.max, 'max');
    if (!max.ok) return { ok: false, error: 'row-' + max.error, row: i + 1, field: 'max' };
    if (isZero(max.value)) return { ok: false, error: 'row-max-zero', row: i + 1, field: 'max' };
    const got = readMarks(r.got, 'got');
    if (!got.ok) return { ok: false, error: 'row-' + got.error, row: i + 1, field: 'got' };
    if (cmp(got.value, max.value) > 0) return { ok: false, error: 'row-got-above-max', row: i + 1, field: 'got' };
    let weight = null;
    if (!isBlank(r.weight)) {
      const w = parseNumber(r.weight);
      if (!w.ok) return { ok: false, error: 'row-weight-' + w.error, row: i + 1, field: 'weight' };
      if (isNeg(w.value) || isZero(w.value) || cmp(w.value, Q(MAX_MARKS)) > 0) return { ok: false, error: 'row-weight-range', row: i + 1, field: 'weight' };
      weight = w.value;
      anyWeight = true;
    } else anyNoWeight = true;
    used.push({ i, name: labelSubject(r.name, i), got: got.value, max: max.value, weight, gotText: shown(r.got), maxText: shown(r.max), weightText: weight ? shown(r.weight) : '' });
  }
  if (!used.length) return { ok: false, error: 'nothing-yet' };
  if (anyWeight && anyNoWeight) {
    const first = used.find((u) => u.weight === null);
    return { ok: false, error: 'weights-mixed', row: first.i + 1, field: 'weight' };
  }
  const method = anyWeight ? 'weighted' : 'total';
  used.forEach((u) => { u.w = method === 'weighted' ? u.weight : u.max; });
  let sumW = Q(0);
  let sumGot = Q(0);
  let sumMax = Q(0);
  used.forEach((u) => {
    sumW = add(sumW, u.w);
    sumGot = add(sumGot, u.got);
    sumMax = add(sumMax, u.max);
  });
  let overall = Q(0);
  used.forEach((u) => {
    u.pct = mul(Q100, div(u.got, u.max));
    u.pctText = pc(u.pct);
    u.share = div(u.w, sumW);
    overall = add(overall, mul(u.share, u.pct));
    u.perMark = mul(Q100, div(u.share, u.max)); // points of overall per extra mark
    const room = sub(Q100, u.pct);
    u.gainPlus10 = mul(u.share, minQ(Q(10), room));
    u.gainFull = mul(u.share, room);
    u.room = sub(u.max, u.got);
  });
  const ranked = used.slice().sort((a, b) => {
    const c = cmp(b.gainPlus10, a.gainPlus10);
    if (c) return c;
    const d = cmp(b.gainFull, a.gainFull);
    return d || a.i - b.i;
  });
  const topGain = ranked[0].gainPlus10;
  const best = isZero(topGain) ? [] : ranked.filter((u) => cmp(u.gainPlus10, topGain) === 0);
  const steps = [];
  if (method === 'total') {
    steps.push('No weights typed, so marks simply add up: total marks scored over total marks available.');
    steps.push('Marks scored: ' + used.map((u) => nExact(u.got)).join(' + ') + ' = ' + nExact(sumGot));
    steps.push('Marks available: ' + used.map((u) => nExact(u.max)).join(' + ') + ' = ' + nExact(sumMax));
    steps.push('Divide and multiply by 100: ' + nExact(sumGot) + ' / ' + nExact(sumMax) + ' x 100 = ' + n4(overall));
  } else {
    steps.push('Weights typed, so each subject percentage counts in proportion to its weight.');
    used.forEach((u) => steps.push(u.name + ': ' + nExact(u.got) + ' out of ' + nExact(u.max) + ' is ' + n4(u.pct) + ' percent, weight ' + nExact(u.weight) + ' out of ' + nExact(sumW) + ' (' + n4(mul(u.share, Q100)) + ' percent of the result).'));
    steps.push('Add each percentage times its share: ' + n4(overall) + ' percent.');
  }
  steps.push('Rounded half up to 2 decimal places: ' + pc(overall) + ' percent.');
  if (!best.length) steps.push('Every subject is already at full marks, so nothing can be gained.');
  else {
    steps.push('To compare subjects, each one is raised by 10 points of its own percentage (stopping at full marks) and the rise in the overall percentage is worked out.');
    best.forEach((u) => steps.push(u.name + ': a 10 point rise in this subject lifts the overall by ' + n4(u.gainPlus10) + ' points.'));
  }
  const gainOne = (u) => pc(u.gainPlus10);
  return {
    ok: true,
    method,
    overall: pc(overall),
    sumGot: nExact(sumGot),
    sumMax: nExact(sumMax),
    parts: used,
    ranked,
    best: best.map((u) => ({ name: u.name, gain: gainOne(u), newOverall: pc(minQ(Q100, add(overall, u.gainPlus10))) })),
    steps,
    rows: ranked.map((u, k) => ({
      rank: k + 1,
      name: u.name,
      pct: pc(u.pct),
      share: pc(mul(u.share, Q100)),
      room: nExact(u.room),
      perMark: n4(u.perMark),
      gainPlus10: pc(u.gainPlus10),
      gainFull: pc(u.gainFull),
    })),
  };
}

// ---------- 3. attendance ----------
const TARGET_TABLE = [60, 65, 70, 75, 80, 85, 90];

function attendanceFor(a, h, P) {
  // a, h integers (fractions), P a fraction of 100 (for example 75)
  const pct = mul(Q100, div(a, h));
  const meets = cmp(mul(Q100, a), mul(P, h)) >= 0;
  if (!meets) {
    if (cmp(P, Q100) >= 0) return { meets, pct, kind: 'impossible' };
    const more = ceilInt(div(sub(mul(P, h), mul(Q100, a)), sub(Q100, P)));
    const mq = q(more);
    return { meets, pct, kind: 'attend', more: more.toString(), after: mul(Q100, div(add(a, mq), add(h, mq))), afterHeld: add(h, mq) };
  }
  const miss = floorInt(div(sub(mul(Q100, a), mul(P, h)), P));
  const mq = q(miss);
  return { meets, pct, kind: 'miss', miss: miss.toString(), after: mul(Q100, div(a, add(h, mq))), afterHeld: add(h, mq) };
}

export function attendance({ attended, held, target, total }) {
  if (isBlank(attended) && isBlank(held)) return { ok: false, error: 'nothing-yet' };
  const a = readWhole(attended, 'attended', 0, MAX_COUNT);
  if (!a.ok) return { ok: false, error: a.error, field: 'attended' };
  const h = readWhole(held, 'held', 1, MAX_COUNT);
  if (!h.ok) return { ok: false, error: h.error, field: 'held' };
  if (cmp(a.value, h.value) > 0) return { ok: false, error: 'attended-above-held', field: 'attended' };
  const t = parseNumber(target, { percent: true });
  if (!t.ok) return { ok: false, error: 'target-' + t.error, field: 'target' };
  if (isNeg(t.value) || isZero(t.value) || cmp(t.value, Q100) > 0) return { ok: false, error: 'att-target-range', field: 'target' };
  let T = null;
  if (!isBlank(total)) {
    const tt = readWhole(total, 'total', 1, MAX_COUNT);
    if (!tt.ok) return { ok: false, error: tt.error, field: 'total' };
    if (cmp(tt.value, h.value) < 0) return { ok: false, error: 'total-below-held', field: 'total' };
    T = tt.value;
  }
  const P = t.value;
  const main = attendanceFor(a.value, h.value, P);
  const missed = sub(h.value, a.value);
  const steps = [];
  steps.push('Classes attended so far: ' + a.value.n + ' out of ' + h.value.n + ' held, so ' + missed.n + ' missed.');
  steps.push('Attendance now: ' + a.value.n + ' / ' + h.value.n + ' x 100 = ' + n4(main.pct) + ' percent, shown as ' + pc(main.pct) + '.');
  steps.push('Target: ' + fmt(P, 4) + ' percent. ' + (main.meets ? 'You are at or above it.' : 'You are below it.'));
  const res = { ok: true, attended: a.value.n.toString(), held: h.value.n.toString(), missed: missed.n.toString(), target: fmt(P, 4), now: pc(main.pct), meets: main.meets, kind: main.kind, total: T ? T.n.toString() : '' };
  if (main.kind === 'impossible') {
    steps.push('A target of 100 percent cannot be reached again once a class has been missed.');
  } else if (main.kind === 'attend') {
    res.more = main.more;
    res.after = pc(main.after);
    steps.push('You need x more classes, all attended, so that (' + a.value.n + ' + x) / (' + h.value.n + ' + x) is at least ' + fmt(P, 4) + ' percent.');
    steps.push('Rearranged: x is at least (' + fmt(P, 4) + ' x ' + h.value.n + ' - 100 x ' + a.value.n + ') / (100 - ' + fmt(P, 4) + '), rounded up to a whole class: x = ' + main.more + '.');
    steps.push('Check: (' + a.value.n + ' + ' + main.more + ') / (' + h.value.n + ' + ' + main.more + ') x 100 = ' + pc(main.after) + ' percent.');
  } else {
    res.miss = main.miss;
    res.after = pc(main.after);
    steps.push('You can miss m of the next classes, with m as large as possible so that ' + a.value.n + ' / (' + h.value.n + ' + m) is still at least ' + fmt(P, 4) + ' percent.');
    steps.push('Rearranged: m is at most (100 x ' + a.value.n + ' - ' + fmt(P, 4) + ' x ' + h.value.n + ') / ' + fmt(P, 4) + ', rounded down to a whole class: m = ' + main.miss + '.');
    steps.push('Check: ' + a.value.n + ' / (' + h.value.n + ' + ' + main.miss + ') x 100 = ' + pc(main.after) + ' percent.');
  }
  if (T) {
    const remaining = sub(T, h.value);
    const need = maxQ(Q(0), sub(q(ceilInt(div(mul(P, T), Q100))), a.value));
    const finishBest = mul(Q100, div(add(a.value, remaining), T));
    res.term = { total: T.n.toString(), remaining: remaining.n.toString(), requiredAttended: ceilInt(div(mul(P, T), Q100)).toString(), needMore: need.n.toString(), possible: cmp(need, remaining) <= 0, canMiss: cmp(need, remaining) <= 0 ? sub(remaining, need).n.toString() : '0', bestFinish: pc(finishBest) };
    steps.push('Whole term: ' + T.n + ' classes in all, ' + remaining.n + ' still to come.');
    steps.push('To finish at ' + fmt(P, 4) + ' percent you must attend at least ' + fmt(P, 4) + ' / 100 x ' + T.n + ' = ' + nExact(div(mul(P, T), Q100)) + ', so ' + res.term.requiredAttended + ' classes in all (rounded up).');
    if (res.term.possible) steps.push('You have ' + a.value.n + ', so you need ' + res.term.needMore + ' more of the ' + remaining.n + ' left, and you can miss at most ' + res.term.canMiss + '.');
    else steps.push('You would need ' + res.term.needMore + ' more but only ' + remaining.n + ' classes are left. Even if you attend every one, you finish at ' + res.term.bestFinish + ' percent.');
  }
  // the same answer for other targets
  res.table = TARGET_TABLE.map((tp) => {
    const r = attendanceFor(a.value, h.value, Q(tp));
    return { target: String(tp), text: r.kind === 'attend' ? 'Attend the next ' + r.more + ' in a row' : r.kind === 'miss' ? 'Can miss ' + r.miss : 'Not possible' };
  });
  res.steps = steps;
  return res;
}

// ---------- 4. board exams: best N subjects ----------
export function boardBest({ count, rows }) {
  const c = readWhole(count, 'count', 1, MAX_BOARD_ROWS);
  if (!c.ok) return { ok: false, error: c.error, field: 'count' };
  const used = [];
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (isBlank(r.got) && isBlank(r.name) && !r.must) continue;
    if (isBlank(r.got)) return { ok: false, error: 'row-got-empty', row: i + 1, field: 'got' };
    const max = readMarks(isBlank(r.max) ? '' : r.max, 'max');
    if (!max.ok) return { ok: false, error: 'row-' + max.error, row: i + 1, field: 'max' };
    if (isZero(max.value)) return { ok: false, error: 'row-max-zero', row: i + 1, field: 'max' };
    const got = readMarks(r.got, 'got');
    if (!got.ok) return { ok: false, error: 'row-' + got.error, row: i + 1, field: 'got' };
    if (cmp(got.value, max.value) > 0) return { ok: false, error: 'row-got-above-max', row: i + 1, field: 'got' };
    used.push({ i, name: labelSubject(r.name, i), got: got.value, max: max.value, must: !!r.must, pct: mul(Q100, div(got.value, max.value)), gotText: shown(r.got), maxText: shown(r.max) });
  }
  if (!used.length) return { ok: false, error: 'nothing-yet' };
  const N = Number(c.value.n);
  if (used.length < N) return { ok: false, error: 'few-subjects', need: N, have: used.length, field: 'count' };
  const must = used.filter((u) => u.must);
  if (must.length > N) return { ok: false, error: 'too-many-must', must: must.length, need: N, field: 'count' };
  const rest = used.filter((u) => !u.must).sort((a, b) => cmp(b.pct, a.pct) || a.i - b.i);
  const chosen = must.concat(rest.slice(0, N - must.length)).sort((a, b) => a.i - b.i);
  const chosenSet = new Set(chosen.map((u) => u.i));
  used.forEach((u) => { u.counted = chosenSet.has(u.i); });
  const sum = (list, key) => list.reduce((acc, u) => add(acc, u[key]), Q(0));
  const gotC = sum(chosen, 'got');
  const maxC = sum(chosen, 'max');
  const pctC = mul(Q100, div(gotC, maxC));
  const gotA = sum(used, 'got');
  const maxA = sum(used, 'max');
  const pctA = mul(Q100, div(gotA, maxA));
  const steps = [];
  steps.push('Subjects entered: ' + used.length + '. Subjects that count: ' + N + (must.length ? ', of which ' + must.length + ' you marked as must count.' : '.'));
  steps.push('Subjects you marked as must count are taken first. The rest are ranked by their percentage of their own maximum, highest first, and the best are added until ' + N + ' are counted. If two tie, the one listed first is taken.');
  steps.push('Counted: ' + chosen.map((u) => u.name + ' ' + nExact(u.got) + '/' + nExact(u.max)).join(', ') + '.');
  steps.push('Marks scored in the counted subjects: ' + nExact(gotC) + '. Marks available in them: ' + nExact(maxC) + '.');
  steps.push('Percentage of the counted subjects: ' + nExact(gotC) + ' / ' + nExact(maxC) + ' x 100 = ' + n4(pctC) + ', rounded half up: ' + pc(pctC) + ' percent.');
  const left = used.filter((u) => !u.counted);
  if (left.length) steps.push('Left out: ' + left.map((u) => u.name + ' ' + nExact(u.got) + '/' + nExact(u.max)).join(', ') + '.');
  steps.push('For comparison, all ' + used.length + ' subjects together give ' + pc(pctA) + ' percent.');
  return {
    ok: true,
    count: N,
    mustCount: must.length,
    percent: pc(pctC),
    gotCounted: nExact(gotC),
    maxCounted: nExact(maxC),
    percentAll: pc(pctA),
    parts: used.map((u) => ({ name: u.name, got: nExact(u.got), max: nExact(u.max), pct: pc(u.pct), counted: u.counted, must: u.must })),
    steps,
  };
}

// ---------- 5. average and weighted average ----------
export function averageCalc({ rows, targetAvg, moreTests }) {
  const used = [];
  let anyWeight = false;
  let anyNoWeight = false;
  for (let i = 0; i < rows.length; i++) {
    const r = rows[i];
    if (isBlank(r.value) && isBlank(r.weight)) continue;
    const v = readMarks(r.value, 'value');
    if (!v.ok) return { ok: false, error: 'row-' + v.error, row: i + 1, field: 'value' };
    let weight = null;
    if (!isBlank(r.weight)) {
      const w = parseNumber(r.weight);
      if (!w.ok) return { ok: false, error: 'row-weight-' + w.error, row: i + 1, field: 'weight' };
      if (isNeg(w.value) || isZero(w.value) || cmp(w.value, Q(MAX_MARKS)) > 0) return { ok: false, error: 'row-weight-range', row: i + 1, field: 'weight' };
      weight = w.value;
      anyWeight = true;
    } else anyNoWeight = true;
    used.push({ i, name: label(r.name, i), value: v.value, weight, valueText: shown(r.value), weightText: weight ? shown(r.weight) : '' });
  }
  if (!used.length) return { ok: false, error: 'nothing-yet' };
  if (anyWeight && anyNoWeight) {
    const first = used.find((u) => u.weight === null);
    return { ok: false, error: 'weights-mixed', row: first.i + 1, field: 'weight' };
  }
  const n = used.length;
  const sum = used.reduce((acc, u) => add(acc, u.value), Q(0));
  const avg = div(sum, Q(n));
  const steps = [];
  steps.push('Add the ' + n + ' value' + (n === 1 ? '' : 's') + ': ' + used.map((u) => nExact(u.value)).join(' + ') + ' = ' + nExact(sum));
  steps.push('Divide by ' + n + ': ' + nExact(sum) + ' / ' + n + ' = ' + n4(avg) + ', rounded half up to 2 decimal places: ' + pc(avg));
  const res = { ok: true, n, sum: nExact(sum), average: pc(avg), parts: used, weighted: anyWeight };
  if (anyWeight) {
    const sw = used.reduce((acc, u) => add(acc, u.weight), Q(0));
    const swv = used.reduce((acc, u) => add(acc, mul(u.weight, u.value)), Q(0));
    const wavg = div(swv, sw);
    steps.push('Weighted: multiply each value by its weight and add: ' + used.map((u) => nExact(u.value) + ' x ' + nExact(u.weight)).join(' + ') + ' = ' + nExact(swv));
    steps.push('Divide by the total weight ' + nExact(sw) + ': ' + nExact(swv) + ' / ' + nExact(sw) + ' = ' + n4(wavg) + ', rounded half up: ' + pc(wavg));
    res.weightSum = nExact(sw);
    res.weightedSum = nExact(swv);
    res.weightedAverage = pc(wavg);
  }
  if (!isBlank(targetAvg) || !isBlank(moreTests)) {
    if (anyWeight) return { ok: false, error: 'need-with-weights' };
    const t = readMarks(targetAvg, 'avgtarget');
    if (!t.ok) return { ok: false, error: t.error, field: 'target' };
    const r = readWhole(moreTests, 'more', 1, 100);
    if (!r.ok) return { ok: false, error: r.error, field: 'more' };
    const rq = r.value;
    const allTests = add(Q(n), rq);
    const needSum = sub(mul(t.value, allTests), sum);
    const needAvg = div(needSum, rq);
    steps.push('Target average ' + nExact(t.value) + ' over all ' + allTests.n + ' tests (' + n + ' done and ' + rq.n + ' to come) means a total of ' + nExact(t.value) + ' x ' + allTests.n + ' = ' + nExact(mul(t.value, allTests)) + '.');
    steps.push('You have ' + nExact(sum) + ', so the remaining tests must add up to ' + nExact(needSum) + '.');
    if (isNeg(needAvg) || isZero(needAvg)) {
      steps.push('That is 0 or less, so you already reach the target average even with 0 in the remaining tests.');
      res.need = { status: 'already', target: nExact(t.value), more: rq.n.toString() };
    } else {
      steps.push('Divide by ' + rq.n + ': ' + nExact(needSum) + ' / ' + rq.n + ' = ' + n4(needAvg) + ', so you need an average of at least ' + pcUp(needAvg) + ' in each remaining test (rounded up).');
      res.need = { status: 'needed', target: nExact(t.value), more: rq.n.toString(), average: pcUp(needAvg), total: pcUp(needSum) };
    }
  }
  res.steps = steps;
  return res;
}

// ---------- messages ----------
export const ERROR_TEXT = {
  empty: 'Type a number first.',
  'not-a-number': 'Use digits only, with a dot or comma for decimals (for example 78.5).',
  'too-large': 'That number is too long. Use a smaller number.',
  'target-empty': 'Type your target percentage.',
  'target-not-a-number': 'The target must be a number such as 75 or 72.5.',
  'target-too-large': 'The target number is too long. A target is at most 100.',
  'target-negative': 'The target cannot be negative.',
  'target-above-100': 'A target above 100 percent cannot be reached. Type 100 or less.',
  'row-max-empty': 'Type the out-of (maximum) marks for this part.',
  'row-max-not-a-number': 'The out-of marks must be a number such as 100.',
  'row-max-too-large': 'The out-of marks are too large. Use at most 1,000,000.',
  'row-max-negative': 'The out-of marks cannot be negative.',
  'row-max-zero': 'The out-of marks must be more than 0.',
  'row-got-empty': 'Type the marks you scored in this subject.',
  'row-got-not-a-number': 'The marks you scored must be a number such as 42.5.',
  'row-got-too-large': 'The marks are too large. Use at most 1,000,000.',
  'row-got-negative': 'Marks cannot be negative.',
  'row-got-above-max': 'The marks you scored are more than the out-of marks. Check both boxes.',
  'row-weight-empty': 'Type the weight for this part.',
  'row-weight-not-a-number': 'The weight must be a number such as 30.',
  'row-weight-too-large': 'The weight is too long. Use a smaller number.',
  'row-weight-range': 'The weight must be more than 0 (and not more than 100 for percent weights).',
  'weights-sum': 'The weights must add up to exactly 100. They add up to',
  'weights-mixed': 'Type a weight for every subject, or leave every weight box empty.',
  'no-rows': 'Fill in at least one part with its out-of marks.',
  'pass-not-a-number': 'The pass mark must be a number from 0 to 100, or empty.',
  'pass-too-large': 'The pass mark is too long. Use 0 to 100.',
  'pass-range': 'The pass mark must be between 0 and 100 percent.',
  'attended-empty': 'Type how many classes you attended.',
  'attended-not-a-number': 'Use whole numbers only, for example 45.',
  'attended-too-large': 'That number is too long. Use a smaller number.',
  'attended-negative': 'Classes attended cannot be negative.',
  'attended-not-whole': 'Use whole numbers. If your college counts half days, double both numbers.',
  'attended-range': 'Use a number up to 100,000.',
  'attended-above-held': 'You cannot have attended more classes than were held. Check both boxes.',
  'held-empty': 'Type how many classes have been held so far.',
  'held-not-a-number': 'Use whole numbers only, for example 60.',
  'held-too-large': 'That number is too long. Use a smaller number.',
  'held-negative': 'Classes held cannot be negative.',
  'held-not-whole': 'Use whole numbers. If your college counts half days, double both numbers.',
  'held-range': 'Classes held must be at least 1 and at most 100,000.',
  'total-empty': 'Type the number of classes in the whole term, or leave the box empty.',
  'total-not-a-number': 'Use whole numbers only.',
  'total-too-large': 'That number is too long. Use a smaller number.',
  'total-negative': 'The total cannot be negative.',
  'total-not-whole': 'Use whole numbers only.',
  'total-range': 'The total must be between 1 and 100,000.',
  'total-below-held': 'The total for the term cannot be less than the classes already held.',
  'att-target-range': 'The attendance target must be more than 0 and at most 100.',
  'count-empty': 'Type how many subjects count.',
  'count-not-a-number': 'Use a whole number from 1 to 10.',
  'count-too-large': 'Use a whole number from 1 to 10.',
  'count-negative': 'Use a whole number from 1 to 10.',
  'count-not-whole': 'Use a whole number from 1 to 10.',
  'count-range': 'Use a whole number from 1 to 10.',
  'few-subjects': 'You asked for more subjects to count than you entered.',
  'too-many-must': 'More subjects are marked must count than the number that count.',
  'row-value-empty': 'Type a value for this row.',
  'row-value-not-a-number': 'The value must be a number such as 62.5.',
  'row-value-too-large': 'The value is too large. Use at most 1,000,000.',
  'row-value-negative': 'Marks cannot be negative here.',
  'avgtarget-empty': 'Type the average you are aiming for.',
  'avgtarget-not-a-number': 'The target average must be a number.',
  'avgtarget-too-large': 'The target average is too large.',
  'avgtarget-negative': 'The target average cannot be negative.',
  'more-empty': 'Type how many more tests are still to come.',
  'more-not-a-number': 'Use a whole number from 1 to 100.',
  'more-too-large': 'Use a whole number from 1 to 100.',
  'more-negative': 'Use a whole number from 1 to 100.',
  'more-not-whole': 'Use a whole number from 1 to 100.',
  'more-range': 'Use a whole number from 1 to 100.',
  'need-with-weights': 'To find the average you still need, remove the weights. That calculation treats every test as equal.',
};
