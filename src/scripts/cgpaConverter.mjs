// Logic for the CGPA to percentage calculator. It has no DOM access, so the same results feed the
// screen, the print view and the PDF, and the numbers can be tested on their own.
//
// HONESTY RULE: no university or board is named for a formula unless its official notice was opened
// and read. Only the CBSE factor is named, and only as "indicative", with the plain note that the
// circular text could not be opened. Everything else is generic arithmetic or the person's own rule.

export const MAX_SEMESTERS = 12;
export const MAX_CREDITS = 200;
export const CHECKED_ON = '22 November 2026';

/**
 * percentage = factor x (CGPA - shift) + add. scaleMax is the top of the grade scale.
 * sourceStatus: 'indicative' (named source, text not opened), 'generic' (arithmetic only),
 * 'proportion' (plain share of the top grade), 'custom' (typed by the person).
 */
export const RULES = [
  {
    id: 'cbse',
    label: 'CBSE indicative factor: CGPA x 9.5 (Class 10, 10 point scale)',
    short: 'CBSE indicative factor (circular 24/2010, text not opened)',
    scaleMax: 10,
    factor: 9.5,
    shift: 0,
    add: 0,
    sourceStatus: 'indicative',
  },
  {
    id: 'times10',
    label: 'Generic rule: CGPA x 10 (10 point scale)',
    short: 'Generic CGPA x 10 rule (no board or university named)',
    scaleMax: 10,
    factor: 10,
    shift: 0,
    add: 0,
    sourceStatus: 'generic',
  },
  {
    id: 'gpa4',
    label: '4.0 scale as a plain proportion (GPA / 4 x 100)',
    short: 'Plain proportion of a 4.0 scale (not an official conversion)',
    scaleMax: 4,
    factor: 25,
    shift: 0,
    add: 0,
    sourceStatus: 'proportion',
  },
];

export const ruleById = (id) => RULES.find((r) => r.id === id) || null;

/** Reads what a person typed. Accepts "8.5", " 8,5 ", ".5". Rejects empty, text, 1e3 and Infinity. */
export function parseNumber(raw) {
  if (raw === null || raw === undefined) return { ok: false, error: 'empty' };
  const text = String(raw).trim().replace(',', '.');
  if (!text) return { ok: false, error: 'empty' };
  if (!/^[+-]?(\d+\.?\d*|\.\d+)$/.test(text)) return { ok: false, error: 'not-a-number' };
  const n = Number(text);
  if (!Number.isFinite(n)) return { ok: false, error: 'not-a-number' };
  return { ok: true, value: n };
}

/** Round half up to dp places, without the binary floating point surprises (1.005 -> 1.01). */
export function roundHalfUp(value, dp = 2) {
  if (!Number.isFinite(value)) return NaN;
  const sign = value < 0 ? -1 : 1;
  const shifted = Number(Math.abs(value).toFixed(10) + 'e' + dp);
  const r = sign * Number(Math.round(shifted) + 'e-' + dp);
  return r === 0 ? 0 : r;
}

/** Round up to dp places, for a minimum you still need, so the figure shown is always enough. A tiny tolerance stops 6.000000000000001 from becoming 6.01. */
export function roundUp(value, dp = 2) {
  if (!Number.isFinite(value)) return NaN;
  const k = 10 ** dp;
  const r = Math.ceil(value * k - 1e-7) / k;
  return r === 0 ? 0 : r;
}

const num = (n) => String(roundHalfUp(n, 6));

/** Builds a rule from what the person typed: percentage = multiplier x (CGPA - subtract) + add. */
export function makeCustomRule(multiplierRaw, subtractRaw, addRaw, scaleRaw, name) {
  const m = parseNumber(multiplierRaw);
  if (!m.ok) return { ok: false, error: 'multiplier-' + m.error };
  if (m.value <= 0 || m.value > 100) return { ok: false, error: 'multiplier-range' };
  const blank = (v) => v === '' || v === null || v === undefined || String(v).trim() === '';
  let s = 0;
  if (!blank(subtractRaw)) {
    const p = parseNumber(subtractRaw);
    if (!p.ok) return { ok: false, error: 'subtract-' + p.error };
    s = p.value;
  }
  let a = 0;
  if (!blank(addRaw)) {
    const p = parseNumber(addRaw);
    if (!p.ok) return { ok: false, error: 'add-' + p.error };
    a = p.value;
  }
  let top = 10;
  if (!blank(scaleRaw)) {
    const p = parseNumber(scaleRaw);
    if (!p.ok) return { ok: false, error: 'scale-' + p.error };
    top = p.value;
  }
  if (top <= 0 || top > 100) return { ok: false, error: 'scale-range' };
  if (s < 0 || s > top) return { ok: false, error: 'subtract-range' };
  if (a < -100 || a > 100) return { ok: false, error: 'add-range' };
  const label = String(name || '').trim().slice(0, 120);
  return {
    ok: true,
    rule: {
      id: 'custom',
      label: 'My rule: ' + formulaText({ factor: m.value, shift: s, add: a }),
      short: label ? 'My rule, copied from: ' + label : 'My own rule, typed in by the person using this sheet',
      scaleMax: top,
      factor: m.value,
      shift: s,
      add: a,
      sourceStatus: 'custom',
    },
  };
}

/** The formula as plain text, for the screen, the print view and the PDF. */
export function formulaText(rule) {
  const base = rule.shift ? '(CGPA - ' + num(rule.shift) + ')' : 'CGPA';
  const add = rule.add ? (rule.add > 0 ? ' + ' : ' - ') + num(Math.abs(rule.add)) : '';
  return 'Percentage = ' + base + ' x ' + num(rule.factor) + add;
}

/** CGPA to percentage by one rule. Returns the working so the page can show every step. */
export function cgpaToPercent(cgpaRaw, rule, dp = 2) {
  const p = parseNumber(cgpaRaw);
  if (!p.ok) return { ok: false, error: p.error };
  const cgpa = p.value;
  if (cgpa < 0) return { ok: false, error: 'negative' };
  if (cgpa > rule.scaleMax) return { ok: false, error: 'above-scale' };
  const inner = cgpa - rule.shift;
  const raw = rule.factor * inner + rule.add;
  if (raw < 0) return { ok: false, error: 'below-formula-range', raw };
  if (raw > 100 + 1e-9) return { ok: false, error: 'above-100', raw };
  const percent = roundHalfUp(raw, dp);
  const steps = [];
  if (rule.shift) steps.push('CGPA minus ' + num(rule.shift) + ': ' + num(cgpa) + ' - ' + num(rule.shift) + ' = ' + num(inner));
  steps.push((rule.shift ? 'Multiply ' + num(inner) : 'Multiply ' + num(cgpa)) + ' by ' + num(rule.factor) + ': ' + num(inner * rule.factor));
  if (rule.add) steps.push((rule.add > 0 ? 'Add ' : 'Subtract ') + num(Math.abs(rule.add)) + ': ' + num(raw));
  steps.push('Round to ' + dp + ' decimal places (half up): ' + percent + ' percent');
  return { ok: true, cgpa, raw, percent, steps };
}

/** Percentage to CGPA by the same rule (the inverse). */
export function percentToCgpa(percentRaw, rule, dp = 2) {
  const p = parseNumber(percentRaw);
  if (!p.ok) return { ok: false, error: p.error };
  const pct = p.value;
  if (pct < 0) return { ok: false, error: 'negative' };
  if (pct > 100) return { ok: false, error: 'above-100' };
  const afterAdd = pct - rule.add;
  const raw = afterAdd / rule.factor + rule.shift;
  if (raw > rule.scaleMax + 1e-9) return { ok: false, error: 'above-scale', raw };
  if (raw < -1e-9) return { ok: false, error: 'below-scale', raw };
  const cgpa = roundHalfUp(raw, dp);
  const steps = [];
  if (rule.add) steps.push((rule.add > 0 ? 'Subtract ' : 'Add ') + num(Math.abs(rule.add)) + ' from the percentage: ' + num(pct) + (rule.add > 0 ? ' - ' : ' + ') + num(Math.abs(rule.add)) + ' = ' + num(afterAdd));
  steps.push('Divide ' + num(afterAdd) + ' by ' + num(rule.factor) + ': ' + num(afterAdd / rule.factor));
  if (rule.shift) steps.push('Add ' + num(rule.shift) + ': ' + num(raw));
  steps.push('Round to ' + dp + ' decimal places (half up): CGPA ' + cgpa);
  return { ok: true, percent: pct, raw, cgpa, steps };
}

/** SGPA list to CGPA, weighted by credits: CGPA = sum(SGPA x credits) / sum(credits). */
export function sgpaToCgpa(rows, scaleMax = 10, dp = 2) {
  const used = [];
  let sumProduct = 0;
  let sumCredits = 0;
  const empty = (v) => v === '' || v === null || v === undefined || String(v).trim() === '';
  for (let i = 0; i < rows.length; i++) {
    if (empty(rows[i].sgpa) && empty(rows[i].credits)) continue;
    const s = parseNumber(rows[i].sgpa);
    const c = parseNumber(rows[i].credits);
    if (!s.ok || !c.ok) return { ok: false, error: 'bad-row', row: i + 1 };
    if (s.value < 0 || s.value > scaleMax) return { ok: false, error: 'sgpa-range', row: i + 1 };
    if (c.value <= 0 || c.value > MAX_CREDITS) return { ok: false, error: 'credit-range', row: i + 1 };
    used.push({ row: i + 1, sgpa: s.value, credits: c.value, product: s.value * c.value });
    sumProduct += s.value * c.value;
    sumCredits += c.value;
  }
  if (!used.length) return { ok: false, error: 'no-rows' };
  const raw = sumProduct / sumCredits;
  const cgpa = roundHalfUp(raw, dp);
  const steps = used.map((u) => 'Semester ' + u.row + ': ' + num(u.sgpa) + ' x ' + num(u.credits) + ' credits = ' + num(u.product));
  steps.push('Add them up: ' + num(sumProduct) + ' grade points over ' + num(sumCredits) + ' credits');
  steps.push('Divide ' + num(sumProduct) + ' by ' + num(sumCredits) + ': ' + num(raw));
  steps.push('Round to ' + dp + ' decimal places (half up): CGPA ' + cgpa);
  return { ok: true, used, sumProduct, sumCredits, raw, cgpa, steps };
}

/**
 * What average do I need in the credits still to come to reach a target percentage?
 * needed = (target CGPA x all credits - points so far) / credits left, where the target CGPA
 * is the inverse of the chosen rule.
 */
export function cgpaNeededForTarget(targetPercentRaw, rule, doneCgpaRaw, doneCreditsRaw, leftCreditsRaw, dp = 2) {
  const t = percentToCgpa(targetPercentRaw, rule, 6);
  if (!t.ok) return { ok: false, error: 'target-' + t.error };
  const d = parseNumber(doneCgpaRaw);
  const dc = parseNumber(doneCreditsRaw);
  const lc = parseNumber(leftCreditsRaw);
  if (!d.ok || !dc.ok || !lc.ok) return { ok: false, error: 'bad-input' };
  if (d.value < 0 || d.value > rule.scaleMax) return { ok: false, error: 'done-range' };
  const cap = MAX_CREDITS * MAX_SEMESTERS;
  if (dc.value < 0 || dc.value > cap) return { ok: false, error: 'credit-range' };
  if (lc.value <= 0 || lc.value > cap) return { ok: false, error: 'credit-range' };
  const targetCgpa = t.raw;
  const total = dc.value + lc.value;
  const pointsNeeded = targetCgpa * total;
  const pointsHave = d.value * dc.value;
  const needed = (pointsNeeded - pointsHave) / lc.value;
  const steps = [
    'CGPA that gives ' + num(t.percent) + ' percent by this rule: ' + num(targetCgpa),
    'Grade points needed over all ' + num(total) + ' credits: ' + num(targetCgpa) + ' x ' + num(total) + ' = ' + num(pointsNeeded),
    'Grade points you already have: ' + num(d.value) + ' x ' + num(dc.value) + ' = ' + num(pointsHave),
    'Grade points still to earn: ' + num(pointsNeeded - pointsHave) + ' over ' + num(lc.value) + ' credits',
  ];
  if (needed > rule.scaleMax + 1e-9) {
    steps.push('Average needed in the remaining credits: ' + num(needed) + ', which is above the top of the scale (' + num(rule.scaleMax) + ')');
    return { ok: true, reachable: false, needed: roundUp(needed, dp), targetCgpa, steps };
  }
  if (needed <= 0) {
    steps.push('Your grade points so far already cover the target, so no minimum is needed in the remaining credits.');
    return { ok: true, reachable: true, alreadyMet: true, needed: 0, targetCgpa, steps };
  }
  steps.push('Average needed in the remaining credits (rounded up to ' + dp + ' places, so it is always enough): ' + roundUp(needed, dp));
  return { ok: true, reachable: true, needed: roundUp(needed, dp), targetCgpa, steps };
}

export const ERROR_TEXT = {
  empty: 'Type a number first.',
  'not-a-number': 'Use digits only, with a dot or comma for decimals (for example 8.5).',
  negative: 'A negative number is not possible here.',
  'above-scale': 'That is above the top of the scale for this rule.',
  'below-scale': 'That percentage is below what this rule can give.',
  'above-100': 'That gives more than 100 percent, which is not possible. Check the number or the rule.',
  'below-formula-range': 'This rule gives less than 0 for such a low CGPA, so it does not apply. Use your university notice.',
  'bad-row': 'Check this semester: SGPA and credits must both be numbers.',
  'sgpa-range': 'SGPA must be between 0 and the top of the scale.',
  'credit-range': 'Credits must be more than 0 and not more than the limit shown.',
  'no-rows': 'Add at least one semester with an SGPA and credits.',
  'bad-input': 'Fill every box with a number.',
  'done-range': 'Your CGPA so far must be between 0 and the top of the scale.',
};
