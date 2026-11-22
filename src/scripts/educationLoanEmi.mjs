// Maths and input checks for the education loan EMI calculator. Pure functions with no DOM access,
// so the on-screen result, the print view and the PDF all come from the same numbers, and the same
// file can be run in Node against an independent script (see the staging note).
//
// Model, month by month (a month is the unit banks use for an EMI):
//   1. Money is paid out in one go, every year or every semester, at the START of a month. Equal parts.
//   2. During the course and the moratorium, interest for a month = rate / 12 x the amount paid out so far
//      (simple interest, as in the IBA model scheme). The optional "monthly" setting also charges interest
//      on the unpaid interest, which some lenders do.
//   3. What you pay before the EMIs start depends on the treatment you pick:
//        pay_all     interest paid every month through the course and the moratorium
//        pay_study   interest paid every month in the course only, the moratorium interest is added to the loan
//        capitalise  nothing paid, all interest is added to the loan when the EMIs start
//   4. EMI = B x i x (1+i)^n / ((1+i)^n - 1), with B the balance when EMIs start, i = rate / 12 and n the
//      number of monthly EMIs. At 0% rate, EMI = B / n. The first EMI is paid at the end of the first
//      month after the moratorium.

export const TOOL_PATH = '/tools/education-loan-emi-calculator/';
export const TOOL_URL = 'futurecareerschool.com/tools/education-loan-emi-calculator/';
export const CHECKED_ON = '17 November 2026';

export const LIMITS = {
  amountMax: 1000000000, // Rs 100 crore
  rateMax: 40,
  courseMax: 12,
  moratoriumMax: 60,
  tenureMin: 0.25,
  tenureMax: 30,
  tenureScheme: 15,
  feeMax: 1000000000,
  salaryMax: 100000000,
};

export const TREATMENTS = {
  pay_all: {
    label: 'Pay the interest every month, through the course and the moratorium',
    short: 'Pay interest all the way',
    detail: 'You pay only the interest each month. The loan balance stays at what was paid out.',
  },
  pay_study: {
    label: 'Pay the interest during the course only',
    short: 'Pay interest in the course only',
    detail: 'You pay the interest while you study. Interest in the moratorium months is added to the loan.',
  },
  capitalise: {
    label: 'Pay nothing until the EMIs start',
    short: 'Pay nothing until EMIs start',
    detail: 'No payment before the EMIs. All the interest is added to the loan when the EMIs start.',
  },
};
export const TREATMENT_ORDER = ['pay_all', 'pay_study', 'capitalise'];

export const PAYOUTS = {
  once: { label: 'All at the start', interval: 0 },
  year: { label: 'Equal parts, each year', interval: 12 },
  semester: { label: 'Equal parts, each semester', interval: 6 },
};

export const ACCRUALS = {
  simple: 'Simple interest, added to the loan once when the EMIs start',
  monthly: 'Added to the loan every month, so unpaid interest earns interest',
};

/** Reads a typed amount: allows commas, spaces, a rupee sign or Rs. Returns { ok, empty, value }. */
export function parseNumber(text) {
  const raw = String(text == null ? '' : text).trim();
  if (!raw) return { ok: false, empty: true, value: NaN };
  const cleaned = raw.replace(/[₹,\s]/g, '').replace(/^rs\.?/i, '').replace(/^inr/i, '');
  if (!cleaned || !/^[-+]?(\d+\.?\d*|\.\d+)$/.test(cleaned)) return { ok: false, empty: false, value: NaN };
  const value = Number(cleaned);
  if (!Number.isFinite(value)) return { ok: false, empty: false, value: NaN };
  return { ok: true, empty: false, value };
}

export function fmtNum(n) {
  const v = Math.round(Number.isFinite(n) ? n : 0);
  return (v < 0 ? '-' : '') + new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(Math.abs(v));
}
export const fmtRs = (n, sym = '₹') => (Math.round(n) < 0 ? '-' : '') + sym + fmtNum(Math.abs(n));
export const fmtRsPlain = (n) => (Math.round(n) < 0 ? '-' : '') + 'Rs ' + fmtNum(Math.abs(n));
export const fmtPct = (n, d = 1) => (Number.isFinite(n) ? n.toFixed(d) : '0.0') + '%';

/** "Rs 10,00,000 is 10 lakh" style hint for a typed amount. */
export function amountWords(n) {
  if (!Number.isFinite(n) || n <= 0) return '';
  if (n >= 10000000) return trimZero((n / 10000000).toFixed(2)) + ' crore';
  if (n >= 100000) return trimZero((n / 100000).toFixed(2)) + ' lakh';
  if (n >= 1000) return trimZero((n / 1000).toFixed(2)) + ' thousand';
  return '';
}
function trimZero(s) { return s.replace(/\.?0+$/, ''); }

export function monthsText(m) {
  const months = Math.max(0, Math.round(m));
  const y = Math.floor(months / 12);
  const r = months % 12;
  const parts = [];
  if (y) parts.push(y + (y === 1 ? ' year' : ' years'));
  if (r) parts.push(r + (r === 1 ? ' month' : ' months'));
  return parts.length ? parts.join(' ') : '0 months';
}

export const SHARED_FIELDS = ['courseYears', 'payout', 'salary'];

export function defaultValues() {
  return {
    label: '',
    amount: '1000000',
    rate: '9.5',
    moratoriumMonths: '12',
    tenureYears: '10',
    treatment: 'capitalise',
    accrual: 'simple',
    fee: '0',
    insurance: '0',
  };
}
export function defaultShared() {
  return { courseYears: '4', payout: 'year', salary: '' };
}

/**
 * Checks the typed values for one offer plus the shared fields.
 * raw = text as typed. Returns { errors: { field: message }, values } where values holds numbers.
 */
export function validate(raw, shared) {
  const errors = {};
  const v = { treatment: TREATMENTS[raw.treatment] ? raw.treatment : 'capitalise', accrual: ACCRUALS[raw.accrual] ? raw.accrual : 'simple', payout: PAYOUTS[shared.payout] ? shared.payout : 'year', label: String(raw.label || '').slice(0, 60) };
  const need = (key, src, { name, min, max, maxText, minText, whole, allowEmpty }) => {
    const p = parseNumber(src[key]);
    if (p.empty) {
      if (allowEmpty) return 0;
      errors[key] = 'Enter the ' + name.toLowerCase() + '.';
      return NaN;
    }
    if (!p.ok) { errors[key] = name + ': use numbers only. Commas are fine.'; return NaN; }
    if (p.value < 0) { errors[key] = name + ' cannot be negative.'; return NaN; }
    if (min != null && p.value < min) { errors[key] = minText || name + ' must be at least ' + min + '.'; return NaN; }
    if (max != null && p.value > max) { errors[key] = name + ' must be ' + (maxText || fmtNum(max)) + ' or less.'; return NaN; }
    if (whole && Math.abs(p.value - Math.round(p.value)) > 1e-9) { errors[key] = name + ': use whole months, for example 12.'; return NaN; }
    return p.value;
  };
  v.amount = need('amount', raw, { name: 'Loan amount', min: 1, minText: 'The loan amount must be more than 0.', max: LIMITS.amountMax, maxText: 'Rs 100 crore' });
  v.rate = need('rate', raw, { name: 'Interest rate', min: 0, max: LIMITS.rateMax, maxText: '40%' });
  v.moratoriumMonths = need('moratoriumMonths', raw, { name: 'Moratorium', min: 0, max: LIMITS.moratoriumMax, maxText: '60 months', whole: true });
  v.tenureYears = need('tenureYears', raw, { name: 'Repayment period', min: LIMITS.tenureMin, minText: 'The repayment period must be at least 0.25 years (3 months).', max: LIMITS.tenureMax, maxText: '30 years' });
  v.fee = need('fee', raw, { name: 'Processing fee', min: 0, max: LIMITS.feeMax, maxText: 'Rs 100 crore', allowEmpty: true });
  v.insurance = need('insurance', raw, { name: 'Insurance cost', min: 0, max: LIMITS.feeMax, maxText: 'Rs 100 crore', allowEmpty: true });
  v.courseYears = need('courseYears', shared, { name: 'Course length', min: 0, max: LIMITS.courseMax, maxText: '12 years' });
  v.salary = need('salary', shared, { name: 'Salary', min: 0, max: LIMITS.salaryMax, maxText: 'Rs 10 crore a month', allowEmpty: true });
  return { errors, values: v };
}

/** Equal payouts at the start of months. Returns [{ monthIndex (0 = start of month 1), amount }]. */
export function payoutPlan(amount, courseMonths, payout) {
  const interval = PAYOUTS[payout] ? PAYOUTS[payout].interval : 0;
  const count = interval && courseMonths > 0 ? Math.max(1, Math.ceil(courseMonths / interval)) : 1;
  const plan = [];
  for (let k = 0; k < count; k++) plan.push({ monthIndex: interval ? k * interval : 0, amount: amount / count });
  return plan;
}

export function emiFor(balance, annualRatePct, months) {
  if (!(balance > 0) || !(months > 0)) return 0;
  const i = annualRatePct / 12 / 100;
  if (i === 0) return balance / months;
  const f = Math.pow(1 + i, months);
  return (balance * i * f) / (f - 1);
}

/**
 * Full month-by-month run for one offer. v = numbers from validate(), treatment may be overridden.
 */
export function calcOffer(v, treatmentOverride) {
  const treatment = treatmentOverride || v.treatment;
  const i = v.rate / 12 / 100;
  const courseMonths = Math.round(v.courseYears * 12);
  const moratorium = Math.round(v.moratoriumMonths);
  const pre = courseMonths + moratorium;
  const tenure = Math.max(1, Math.round(v.tenureYears * 12));
  const plan = payoutPlan(v.amount, courseMonths, v.payout);
  const payoutAt = new Map(plan.map((p) => [p.monthIndex, p.amount]));
  const monthly = v.accrual === 'monthly';

  let principal = 0; // paid out so far
  let acc = 0; // unpaid interest not yet added to the loan (simple mode keeps it aside)
  let interestPaidPre = 0;
  let interestAccrued = 0; // all interest charged before the EMIs start
  let interestCourse = 0;
  let interestMoratorium = 0;
  const paidInterestByMonth = [];
  const years = [];
  const yr = (m) => {
    const idx = Math.ceil(m / 12) - 1;
    while (years.length <= idx) years.push({ year: years.length + 1, disbursed: 0, interestCharged: 0, interestPaid: 0, interestAdded: 0, principalRepaid: 0, youPay: 0, balanceEnd: 0, emiMonths: 0, phase: '' });
    return years[idx];
  };

  for (let m = 1; m <= pre; m++) {
    const y = yr(m);
    if (payoutAt.has(m - 1)) { principal += payoutAt.get(m - 1); y.disbursed += payoutAt.get(m - 1); }
    const base = monthly ? principal + acc : principal;
    const interest = base * i;
    interestAccrued += interest;
    if (m <= courseMonths) interestCourse += interest; else interestMoratorium += interest;
    y.interestCharged += interest;
    const pays = treatment === 'pay_all' || (treatment === 'pay_study' && m <= courseMonths);
    if (pays) {
      interestPaidPre += interest; y.interestPaid += interest; y.youPay += interest;
      paidInterestByMonth[m] = interest;
    } else {
      acc += interest; y.interestAdded += interest;
      paidInterestByMonth[m] = 0;
    }
    y.balanceEnd = principal + acc;
  }
  principal = v.amount; // with no course and no moratorium the loop above never runs, so everything is paid out here
  const balanceAtStart = principal + acc;
  const capitalised = acc;
  const emi = emiFor(balanceAtStart, v.rate, tenure);
  let bal = balanceAtStart;
  let emiInterest = 0;
  let totalEmiPaid = 0;
  for (let k = 1; k <= tenure; k++) {
    const m = pre + k;
    const y = yr(m);
    const interest = bal * i;
    const principalPart = k === tenure ? bal : emi - interest; // the last month clears any tiny rounding left
    const payment = k === tenure ? bal + interest : emi;
    bal -= principalPart;
    emiInterest += interest;
    totalEmiPaid += payment;
    y.interestCharged += interest; y.interestPaid += interest; y.principalRepaid += principalPart; y.youPay += payment; y.emiMonths += 1;
    y.balanceEnd = Math.max(0, bal);
    paidInterestByMonth[m] = interest;
  }
  years.forEach((y, idx) => {
    const first = idx * 12 + 1; const last = (idx + 1) * 12;
    const parts = [];
    if (first <= courseMonths) parts.push('Course');
    if (last > courseMonths && first <= pre) parts.push(moratorium ? 'Moratorium' : '');
    if (last > pre) parts.push('EMIs');
    y.phase = parts.filter(Boolean).join(' then ');
  });

  const totalInterest = interestAccrued + emiInterest;
  const totalToLender = v.amount + totalInterest;
  const fees = (v.fee || 0) + (v.insurance || 0);
  // Tax view: interest actually paid in the first 96 months after the first month you pay interest.
  let first = 0;
  for (let m = 1; m < paidInterestByMonth.length; m++) { if (paidInterestByMonth[m] > 0.000001) { first = m; break; } }
  let taxInterest = 0;
  if (first) for (let m = first; m < first + 96 && m < paidInterestByMonth.length; m++) taxInterest += paidInterestByMonth[m] || 0;
  const emiStartMonth = pre + 1;
  const preMonths = pre;
  return {
    treatment, courseMonths, moratorium, preMonths, tenure, plan,
    amount: v.amount, rate: v.rate,
    emi, balanceAtStart, capitalised, interestAccrued, interestCourse, interestMoratorium, interestPaidPre, emiInterest,
    totalInterest, totalToLender, fees, totalCost: totalToLender + fees,
    avgPaidPerPreMonth: preMonths && interestPaidPre ? interestPaidPre / preMonths : 0,
    emiShare: v.salary > 0 ? (emi / v.salary) * 100 : null,
    salaryLeft: v.salary > 0 ? v.salary - emi : null,
    totalEmiPaid,
    taxInterest, taxFirstMonth: first, emiStartMonth,
    totalMonths: pre + tenure,
    interestShareOfLoan: (totalInterest / v.amount) * 100,
    years,
  };
}
/** Runs the three treatments with the same other inputs, and the saving of each against the chosen one. */
export function compareTreatments(v) {
  const chosen = calcOffer(v);
  const rows = TREATMENT_ORDER.map((key) => {
    const r = key === v.treatment ? chosen : calcOffer(v, key);
    return { key, label: TREATMENTS[key].short, selected: key === v.treatment, result: r, saving: chosen.totalInterest - r.totalInterest, extraBefore: r.interestPaidPre - chosen.interestPaidPre };
  });
  return { chosen, rows };
}

/** What the "how much cheaper" line says, as numbers: paying interest all the way against the chosen treatment. */
export function savingFacts(v) {
  const { chosen, rows } = compareTreatments(v);
  const best = rows[0]; // pay_all
  const none = rows[2];
  return {
    chosenKey: v.treatment,
    savingVsChosen: chosen.totalInterest - best.result.totalInterest,
    savingVsNothing: none.result.totalInterest - best.result.totalInterest,
    cashBeforeEmi: best.result.interestPaidPre,
    months: best.result.preMonths,
    perMonth: best.result.avgPaidPerPreMonth,
    emiPayAll: best.result.emi,
    emiNothing: none.result.emi,
    balancePayAll: best.result.balanceAtStart,
    balanceNothing: none.result.balanceAtStart,
  };
}

/** Plain sentence for the comparison, used on screen, in print and in the PDF. */
export function savingSentence(v, sym = 'Rs ') {
  const f = savingFacts(v);
  const money = (n) => sym + fmtNum(n);
  if (f.months === 0 || f.savingVsNothing < 0.5) return 'There is no course or moratorium time before the EMIs, so the three choices cost the same.';
  const base = 'Paying the interest every month through the course and the moratorium cuts the total interest by ' + money(f.savingVsNothing) + ' compared with paying nothing until the EMIs start. It costs you about ' + money(f.perMonth) + ' a month for ' + monthsText(f.months) + ' (' + money(f.cashBeforeEmi) + ' in all) before the first EMI, and the EMI falls from ' + money(f.emiNothing) + ' to ' + money(f.emiPayAll) + '.';
  return base;
}

export function summaryLine(r) {
  return 'EMI ' + fmtRsPlain(r.emi) + ' a month for ' + monthsText(r.tenure) + ', starting after ' + monthsText(r.preMonths) + '. Total interest ' + fmtRsPlain(r.totalInterest) + '.';
}

export function shareNote(r) {
  if (r.emiShare == null) return '';
  const left = r.salaryLeft;
  if (left < 0) return 'The EMI is more than the salary you entered, so it could not be paid from that salary.';
  return 'The EMI is ' + fmtPct(r.emiShare) + ' of that salary and leaves ' + fmtRsPlain(left) + ' a month before rent, food and other costs.';
}
