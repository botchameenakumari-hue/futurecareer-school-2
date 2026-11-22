// Logic for the CTC to in-hand salary calculator. It has no DOM access, so the same numbers feed the
// on-screen result, the print view, the PDF and the tests. All money is in rupees per year unless a
// name ends in Month.
//
// Rules encoded here were checked on 17 November 2026 for the tax year 2026-27 (Income-tax Act, 2025,
// in force from 1 April 2026). The page lists the source of every rule. Where a rule changes by employer
// or by state, the person can edit the assumption.

export const CHECKED_ON = '17 November 2026';
export const TAX_YEAR = '2026-27';
export const TOOL_URL = 'futurecareerschool.com/tools/ctc-to-in-hand-salary-calculator/';

export const RULES = {
  newRegime: {
    // [upper limit of the slab, rate]. Section 202(1) of the Income-tax Act, 2025.
    slabs: [[400000, 0], [800000, 0.05], [1200000, 0.1], [1600000, 0.15], [2000000, 0.2], [2400000, 0.25], [Infinity, 0.3]],
    standardDeduction: 75000,
    rebateIncomeLimit: 1200000,
    rebateMax: 60000,
    employerNpsPct: 0.14,
    maxSurcharge: 0.25,
  },
  oldRegime: {
    slabs: [[250000, 0], [500000, 0.05], [1000000, 0.2], [Infinity, 0.3]],
    standardDeduction: 50000,
    rebateIncomeLimit: 500000,
    rebateMax: 12500,
    employerNpsPct: 0.1,
    maxSurcharge: 0.37,
  },
  // Surcharge applies when total income is ABOVE the threshold.
  surchargeTiers: [[5000000, 0.1], [10000000, 0.15], [20000000, 0.25], [50000000, 0.37]],
  cess: 0.04,
  limits: { section80c: 150000, npsExtra: 50000, healthSelf: 25000, healthParents: 50000, homeLoanInterest: 200000, ptCap: 2500 },
  epf: { employeeRate: 0.12, employerRate: 0.12, ceilingNow: 25000, ceilingBefore: 15000 },
  gratuityPct: 15 / 26 / 12, // 15 days of wages for every year, a month counted as 26 days
  hraMetroPct: 0.5,
  hraOtherPct: 0.4,
  employerRetirementCap: 750000,
};

// ---------- Professional tax ----------
// Each state: basis 'month' (slabs on the monthly gross) or 'half' (slabs on half-yearly income).
// slabs are [upper limit inclusive, tax for that period]; the last slab has an upper limit of Infinity.
// febExtra: extra rupees taken in February (Karnataka and Maharashtra), so the year totals Rs 2,500.
export const STATES = {
  none: { label: 'No professional tax where I work', basis: 'month', slabs: [[Infinity, 0]], status: 'Choose this if your state or city does not charge it.' },
  ap: { label: 'Andhra Pradesh', basis: 'month', slabs: [[15000, 0], [20000, 150], [Infinity, 200]], status: 'Same schedule as Telangana (secondary sources for Andhra Pradesh).' },
  ts: { label: 'Telangana', basis: 'month', slabs: [[15000, 0], [20000, 150], [Infinity, 200]], status: 'Official Telangana Commercial Taxes schedule.' },
  ka: { label: 'Karnataka', basis: 'month', slabs: [[24999.99, 0], [Infinity, 200]], febExtra: 100, status: 'From 1 April 2025: Rs 200 a month and Rs 300 in February for gross pay of Rs 25,000 and above.' },
  mh: { label: 'Maharashtra (men)', basis: 'month', slabs: [[7500, 0], [10000, 175], [Infinity, 200]], febExtra: 100, febFrom: 10000, status: 'Rs 200 a month and Rs 300 in February above Rs 10,000.' },
  mhw: { label: 'Maharashtra (women)', basis: 'month', slabs: [[25000, 0], [Infinity, 200]], febExtra: 100, status: 'Women pay nothing up to Rs 25,000 a month. Sources differ on this threshold, so check your payslip.' },
  tn: { label: 'Tamil Nadu (Chennai slabs)', basis: 'half', slabs: [[21000, 0], [30000, 180], [45000, 425], [60000, 930], [75000, 1025], [Infinity, 1250]], status: 'Paid twice a year. Lower slabs are the Greater Chennai Corporation slabs from October 2024; other local bodies may differ.' },
  wb: { label: 'West Bengal', basis: 'month', slabs: [[10000, 0], [15000, 110], [25000, 130], [40000, 150], [Infinity, 200]], status: 'Secondary sources only; the state portal could not be read.' },
  gj: { label: 'Gujarat', basis: 'month', slabs: [[12000, 0], [Infinity, 200]], status: 'Official Gujarat Commercial Tax schedule effective 1 April 2022.' },
  kl: { label: 'Kerala', basis: 'half', slabs: [[11999.99, 0], [17999.99, 320], [29999.99, 450], [44999.99, 600], [99999.99, 750], [124999.99, 1000], [Infinity, 1250]], status: 'Paid twice a year. Rs 1,250 per half year at the top is confirmed; lower slabs differ between sources.' },
  other: { label: 'Another state (I will type the yearly amount)', basis: 'custom', slabs: [[Infinity, 0]], status: 'Type the professional tax for the whole year from your payslip.' },
};

/** Professional tax for a year. Returns { annual, perMonth, note }. perMonth is the regular monthly cut. */
export function professionalTax(stateKey, monthlyGross, halfYearIncome, customAnnual = 0) {
  const st = STATES[stateKey] || STATES.none;
  if (st.basis === 'custom') {
    const annual = Math.min(Math.max(0, customAnnual), RULES.limits.ptCap);
    return { annual, perMonth: annual / 12, febExtra: 0, spread: true };
  }
  const base = Math.round(st.basis === 'half' ? halfYearIncome : monthlyGross);
  let amount = 0;
  for (const [upTo, tax] of st.slabs) { if (base <= upTo) { amount = tax; break; } }
  if (st.basis === 'half') return { annual: amount * 2, perMonth: (amount * 2) / 12, febExtra: 0, spread: true };
  const feb = amount > 0 && (!st.febFrom || base > st.febFrom) ? st.febExtra || 0 : 0;
  return { annual: amount * 12 + feb, perMonth: amount, febExtra: feb, spread: false };
}

// ---------- Income tax ----------
export const round10 = (n) => Math.floor((Math.max(0, n) + 5) / 10) * 10; // last digit 5 or more rounds up (section 516)
const money = (n) => Math.round(n * 100) / 100;

function slabRows(income, slabs) {
  const rows = [];
  let low = 0;
  for (const [up, rate] of slabs) {
    if (income > low) {
      const amount = Math.min(income, up) - low;
      rows.push({ from: low, to: up, rate, amount, tax: amount * rate });
    }
    low = up;
    if (income <= up) break;
  }
  return rows;
}
const slabTaxOnly = (income, slabs) => slabRows(income, slabs).reduce((s, r) => s + r.tax, 0);

function surchargeRateFor(income, regime) {
  let rate = 0;
  for (const [limit, r] of RULES.surchargeTiers) if (income > limit) rate = r;
  return Math.min(rate, regime === 'new' ? RULES.newRegime.maxSurcharge : RULES.oldRegime.maxSurcharge);
}
function surchargeTierBounds(income, regime) {
  // threshold of the tier the income sits in, and the rate of the tier just below it
  let threshold = 0;
  let prevRate = 0;
  let current = 0;
  for (const [limit, r] of RULES.surchargeTiers) {
    if (income > limit) { prevRate = current; current = Math.min(r, regime === 'new' ? RULES.newRegime.maxSurcharge : RULES.oldRegime.maxSurcharge); threshold = limit; }
  }
  return { threshold, prevRate };
}

/**
 * Tax on a taxable income for one regime. Steps are returned so the page can show every line.
 * Order: round the income, slab tax, rebate, surcharge with marginal relief, 4% cess, round the tax.
 */
export function computeTax(taxableIncome, regime) {
  const rule = regime === 'new' ? RULES.newRegime : RULES.oldRegime;
  const income = round10(taxableIncome);
  const rows = slabRows(income, rule.slabs);
  const slabTax = rows.reduce((s, r) => s + r.tax, 0);

  let rebate = 0;
  let rebateNote = '';
  if (regime === 'new') {
    if (income <= rule.rebateIncomeLimit) {
      rebate = Math.min(slabTax, rule.rebateMax);
      rebateNote = rebate > 0 ? 'Income is within Rs 12 lakh, so the rebate (up to Rs 60,000) cancels the tax.' : '';
    } else {
      const excess = income - rule.rebateIncomeLimit;
      if (slabTax > excess) {
        rebate = slabTax - excess;
        rebateNote = 'Income is just above Rs 12 lakh: the tax is limited to the amount above Rs 12 lakh (marginal relief).';
      }
    }
  } else if (income <= rule.rebateIncomeLimit) {
    rebate = Math.min(slabTax, rule.rebateMax);
    rebateNote = rebate > 0 ? 'Income is within Rs 5 lakh, so the rebate (up to Rs 12,500) cancels the tax.' : '';
  }
  const afterRebate = slabTax - rebate;

  let surchargeRate = surchargeRateFor(income, regime);
  let surcharge = afterRebate * surchargeRate;
  let relief = 0;
  let surchargeNote = '';
  if (surchargeRate > 0) {
    const { threshold, prevRate } = surchargeTierBounds(income, regime);
    const taxAtThreshold = slabTaxOnly(threshold, rule.slabs) * (1 + prevRate);
    const limit = taxAtThreshold + (income - threshold);
    if (afterRebate + surcharge > limit) {
      relief = afterRebate + surcharge - limit;
      surcharge -= relief;
      surchargeNote = 'Marginal relief: tax plus surcharge cannot rise by more than the income above Rs ' + threshold.toLocaleString('en-IN') + '.';
    }
  }
  const beforeCess = afterRebate + surcharge;
  const cess = beforeCess * RULES.cess;
  const total = round10(beforeCess + cess);
  return { regime, income, rows, slabTax: money(slabTax), rebate: money(rebate), rebateNote, afterRebate: money(afterRebate), surchargeRate, surcharge: money(surcharge), relief: money(relief), surchargeNote, beforeCess: money(beforeCess), cess: money(cess), total };
}

// ---------- Inputs ----------
export function defaultInputs() {
  return {
    label: '',
    ctc: 1200000,
    variable: 0, // annual variable pay at target, inside the CTC
    payoutPct: 100, // share of the variable pay actually paid out
    joiningBonus: 0, // paid once, in the first year
    joiningInCtc: false,
    basicPct: 50, // % of fixed CTC
    hraPct: 40, // % of basic
    pfBase: 'ceiling', // 'ceiling' or 'actual'
    pfCeiling: RULES.epf.ceilingNow,
    employerPfInCtc: true,
    gratuityInCtc: true,
    gratuityPct: Math.round(RULES.gratuityPct * 100 * 100) / 100, // 4.81
    employerNpsPct: 0,
    insurance: 0, // employer-paid insurance inside the CTC, per year
    otherEmployerCost: 0, // other employer costs inside the CTC that never reach you, per year
    otherDeductionMonth: 0, // other cuts from your pay, per month (for example your share of health insurance)
    state: 'ts',
    customPt: 0,
    regime: 'new',
    rentMonth: 0,
    metro: false,
    other80c: 0,
    health80d: 0,
    parents80d: 0,
    npsExtra: 0,
    homeLoan: 0,
    otherOldDeductions: 0,
  };
}

const MAXIMUM = 1e10;
/** Cleans typed values and says what it changed. Never throws. */
export function sanitize(raw) {
  const d = defaultInputs();
  const out = Object.assign({}, d);
  const notes = [];
  const num = (key, { min = 0, max = MAXIMUM, name, empty = 'zero' }) => {
    const blank = !raw || raw[key] === undefined || raw[key] === null || String(raw[key]).trim() === '';
    let v;
    if (blank) {
      v = empty === 'default' ? d[key] : 0;
      if (empty === 'default' && raw && raw[key] !== undefined) notes.push(name + ' was empty, so ' + String(d[key]) + ' is used.');
      if (!raw || raw[key] === undefined) v = d[key];
    } else {
      v = Number(String(raw[key]).replace(/,/g, ''));
      if (!Number.isFinite(v)) { notes.push(name + ' was not a number, so ' + String(empty === 'default' ? d[key] : 0) + ' is used.'); v = empty === 'default' ? d[key] : 0; }
    }
    if (v < min) { notes.push(name + ' cannot be below ' + min + ', so ' + min + ' is used.'); v = min; }
    if (v > max) { notes.push(name + ' is above ' + max.toLocaleString('en-IN') + ', so that limit is used.'); v = max; }
    out[key] = v;
  };
  num('ctc', { name: 'Annual CTC' });
  num('variable', { name: 'Variable pay' });
  num('payoutPct', { max: 300, name: 'Variable payout %', empty: 'default' });
  num('joiningBonus', { name: 'Joining bonus' });
  num('basicPct', { min: 1, max: 100, name: 'Basic %', empty: 'default' });
  num('hraPct', { max: 100, name: 'HRA % of basic', empty: 'default' });
  num('pfCeiling', { min: 1, max: 1000000, name: 'PF wage ceiling', empty: 'default' });
  num('gratuityPct', { max: 20, name: 'Gratuity %', empty: 'default' });
  num('employerNpsPct', { max: 50, name: 'Employer NPS %' });
  num('insurance', { name: 'Insurance' });
  num('otherEmployerCost', { name: 'Other employer cost' });
  num('otherDeductionMonth', { name: 'Other monthly deduction' });
  num('customPt', { name: 'Professional tax' });
  num('rentMonth', { name: 'Rent' });
  num('other80c', { name: 'Other 80C investments' });
  num('health80d', { name: 'Health insurance (self and family)' });
  num('parents80d', { name: 'Health insurance (parents)' });
  num('npsExtra', { name: 'NPS (your own extra contribution)' });
  num('homeLoan', { name: 'Home loan interest' });
  num('otherOldDeductions', { name: 'Other old regime deductions' });
  out.label = String((raw && raw.label) || '').slice(0, 60);
  out.pfBase = raw && raw.pfBase === 'actual' ? 'actual' : 'ceiling';
  out.regime = raw && raw.regime === 'old' ? 'old' : 'new';
  out.state = raw && STATES[raw.state] ? raw.state : d.state;
  ['joiningInCtc', 'employerPfInCtc', 'gratuityInCtc', 'metro'].forEach((k) => { out[k] = raw && raw[k] !== undefined ? raw[k] === true || raw[k] === 'true' || raw[k] === 'yes' : d[k]; });
  return { inputs: out, notes };
}

// ---------- The salary structure and take-home ----------
function taxableFor(structure, inp, regime, withVariable) {
  const { grossCash, basic, hra, employeePf, nps, variablePaid, joiningBonus, pt } = structure;
  const rule = regime === 'new' ? RULES.newRegime : RULES.oldRegime;
  const extra = withVariable ? variablePaid + joiningBonus : 0;
  const npsLimit = rule.employerNpsPct * basic;
  const npsExcess = Math.max(0, nps - npsLimit);
  const salary = grossCash + extra + npsExcess;
  const std = Math.min(rule.standardDeduction, salary);
  const lines = [];
  lines.push(['Cash salary for the year (basic, HRA, special allowance)', grossCash]);
  if (withVariable && variablePaid > 0) lines.push(['Variable pay paid out', variablePaid]);
  if (withVariable && joiningBonus > 0) lines.push(['Joining bonus', joiningBonus]);
  if (npsExcess > 0) lines.push(['Employer NPS above the ' + Math.round(rule.employerNpsPct * 100) + '% limit', npsExcess]);
  const gross = salary;
  lines.push(['Standard deduction', -std]);
  let deductions = std;
  let hraExempt = 0;
  const oldLines = [];
  if (regime === 'old') {
    const ptDed = pt.annual;
    deductions += ptDed; oldLines.push(['Professional tax', -ptDed]);
    const rentYear = inp.rentMonth * 12;
    hraExempt = Math.max(0, Math.min(hra, rentYear - 0.1 * basic, (inp.metro ? RULES.hraMetroPct : RULES.hraOtherPct) * basic));
    if (hraExempt > 0) { deductions += hraExempt; oldLines.push(['HRA exemption (lowest of three limits)', -hraExempt]); }
    const c80 = Math.min(RULES.limits.section80c, employeePf + inp.other80c);
    if (c80 > 0) { deductions += c80; oldLines.push(['Section 80C (your PF plus other investments, up to Rs 1,50,000)', -c80]); }
    const d80 = Math.min(inp.health80d, RULES.limits.healthSelf) + Math.min(inp.parents80d, RULES.limits.healthParents);
    if (d80 > 0) { deductions += d80; oldLines.push(['Health insurance premium (80D)', -d80]); }
    const n1b = Math.min(inp.npsExtra, RULES.limits.npsExtra);
    if (n1b > 0) { deductions += n1b; oldLines.push(['Your own extra NPS (up to Rs 50,000)', -n1b]); }
    const hl = Math.min(inp.homeLoan, RULES.limits.homeLoanInterest);
    if (hl > 0) { deductions += hl; oldLines.push(['Home loan interest, self-occupied (up to Rs 2,00,000)', -hl]); }
    if (inp.otherOldDeductions > 0) { deductions += inp.otherOldDeductions; oldLines.push(['Other deductions you can claim', -inp.otherOldDeductions]); }
  }
  const taxable = Math.max(0, gross - deductions);
  return { gross, std, lines: lines.concat(oldLines), deductions, taxable, hraExempt, npsExcess };
}

/** Full calculation for one offer. Never throws; returns { ok:false, reason } if the offer cannot work. */
export function computeOffer(rawInputs) {
  const { inputs: inp, notes } = sanitize(rawInputs);
  const warnings = [];
  if (!(inp.ctc > 0)) return { ok: false, reason: 'Enter an annual CTC above zero.', inputs: inp, notes };
  const variableTarget = Math.min(inp.variable, inp.ctc);
  if (inp.variable > inp.ctc) warnings.push('Variable pay is more than the CTC, so it is limited to the CTC.');
  const joiningInside = inp.joiningInCtc ? Math.min(inp.joiningBonus, Math.max(0, inp.ctc - variableTarget)) : 0;
  const fixedCtc = inp.ctc - variableTarget - joiningInside;
  if (!(fixedCtc > 0)) return { ok: false, reason: 'Variable pay and joining bonus use up the whole CTC, so no fixed pay is left.', inputs: inp, notes };

  const basic = (inp.basicPct / 100) * fixedCtc;
  const pfWageMonth = inp.pfBase === 'actual' ? basic / 12 : Math.min(basic / 12, inp.pfCeiling);
  const employeePf = RULES.epf.employeeRate * pfWageMonth * 12;
  const employerPf = RULES.epf.employerRate * pfWageMonth * 12;
  const gratuity = inp.gratuityInCtc ? (inp.gratuityPct / 100) * basic : 0;
  const nps = (inp.employerNpsPct / 100) * basic;
  const insurance = inp.insurance;
  const otherEmployer = inp.otherEmployerCost;
  const employerPfInside = inp.employerPfInCtc ? employerPf : 0;
  const insideTotal = employerPfInside + gratuity + nps + insurance + otherEmployer;
  const grossCash = fixedCtc - insideTotal;
  if (grossCash < basic - 0.5) {
    return { ok: false, reason: 'With these choices the cash pay would be lower than the basic pay. Lower the basic %, or the employer items inside the CTC.', inputs: inp, notes };
  }
  const hra = Math.min((inp.hraPct / 100) * basic, grossCash - basic);
  const special = grossCash - basic - hra;
  const variablePaid = (variableTarget * inp.payoutPct) / 100;
  const joiningBonus = inp.joiningInCtc ? joiningInside : inp.joiningBonus; // paid once, inside the CTC or on top of it
  const monthlyGross = grossCash / 12;
  const pt = professionalTax(inp.state, monthlyGross, (grossCash + variablePaid + joiningBonus) / 2, inp.customPt);

  const structure = { grossCash, basic, hra, employeePf, nps, variablePaid, joiningBonus, pt };
  const fixedOnly = taxableFor(structure, inp, inp.regime, false);
  const all = taxableFor(structure, inp, inp.regime, true);
  const taxFixed = computeTax(fixedOnly.taxable, inp.regime);
  const taxAll = computeTax(all.taxable, inp.regime);
  const taxOnExtras = Math.max(0, taxAll.total - taxFixed.total);

  const otherDed = inp.otherDeductionMonth * 12;
  const monthlyTds = taxFixed.total / 12;
  const monthlyInHand = monthlyGross - employeePf / 12 - pt.perMonth - inp.otherDeductionMonth - monthlyTds;
  const extrasNet = variablePaid + joiningBonus - taxOnExtras;
  const annualTakeHome = grossCash + variablePaid + joiningBonus - employeePf - pt.annual - otherDed - taxAll.total;

  // Where the money goes. Rows add up to the total value of the offer.
  const unpaidVariable = variableTarget - variablePaid;
  const totalValue = inp.ctc + (inp.joiningInCtc ? 0 : joiningBonus) + (inp.employerPfInCtc ? 0 : employerPf);
  const rows = [
    ['In your bank account (take-home)', annualTakeHome],
    ['Income tax (TDS)', taxAll.total],
    ['Your PF share', employeePf],
    ['Professional tax', pt.annual],
    ['Other cuts from your pay', otherDed],
    ['Employer PF share', employerPf],
    ['Gratuity set aside', gratuity],
    ['Employer NPS', nps],
    ['Employer-paid insurance', insurance],
    ['Other employer costs', otherEmployer],
    ['Variable pay not paid out', Math.max(0, unpaidVariable)],
    ['Extra variable pay above target', -Math.max(0, -unpaidVariable)],
  ];
  const rowsTotal = rows.reduce((s, r) => s + r[1], 0);
  const reconcileDiff = money(rowsTotal - totalValue);

  // Warnings
  if (inp.basicPct < 50) warnings.push('Basic is below 50% of fixed pay. Under the labour codes, allowances above 50% of total pay are added back to wages, so PF and gratuity can be higher than this estimate and cash pay lower. Ask HR.');
  if (employerPf + nps > RULES.employerRetirementCap) warnings.push('Employer PF plus NPS is above Rs 7.5 lakh a year. The excess is taxable, and this estimate does not add it.');
  if (inp.pfBase === 'ceiling' && basic / 12 > inp.pfCeiling && inp.pfCeiling < RULES.epf.ceilingNow) warnings.push('You set the PF ceiling below the current Rs 25,000 limit. The ceiling rose from Rs 15,000 to Rs 25,000 on 17 September 2026, so check with HR which one your payslip uses.');
  if (inp.regime === 'new' && (inp.rentMonth > 0 || inp.other80c > 0 || inp.health80d > 0 || inp.parents80d > 0 || inp.npsExtra > 0 || inp.homeLoan > 0 || inp.otherOldDeductions > 0)) warnings.push('You entered old-regime deductions, but the new regime does not allow them, so they are ignored.');
  if (monthlyInHand < 0) warnings.push('The cuts are larger than the pay in a regular month. Check the amounts you typed.');
  if (inp.regime === 'old' && inp.rentMonth > 0 && all.hraExempt === 0) warnings.push('No HRA exemption applies: the rent is too low compared with 10% of basic, or your HRA is zero.');

  return {
    ok: true, inputs: inp, notes, warnings,
    structure: { fixedCtc, basic, hra, special, grossCash, variableTarget, variablePaid, joiningBonus, joiningInside },
    employer: { employerPf, employerPfInside, gratuity, nps, insurance, otherEmployer, insideTotal },
    pf: { wageMonth: pfWageMonth, employeePf, employerPf },
    pt,
    taxFixed, taxAll, taxOnExtras, taxableFixed: fixedOnly, taxableAll: all,
    monthlyGross, monthlyTds, monthlyInHand, annualTakeHome, averageMonthly: annualTakeHome / 12, extrasNet,
    reconcile: { rows, totalValue, diff: reconcileDiff },
  };
}

// ---------- "Same CTC, one change at a time" ----------
export function whatIf(rawInputs) {
  const base = computeOffer(rawInputs);
  if (!base.ok) return { base, rows: [] };
  const inp = base.inputs;
  const list = [];
  const add = (label, change) => {
    const alt = computeOffer(Object.assign({}, inp, change));
    if (alt.ok) list.push({ label, monthly: alt.monthlyInHand, annual: alt.annualTakeHome, dMonthly: alt.monthlyInHand - base.monthlyInHand, dAnnual: alt.annualTakeHome - base.annualTakeHome });
  };
  if (inp.pfBase === 'ceiling') add('PF on the full basic pay instead of the ceiling', { pfBase: 'actual' });
  else add('PF on the ceiling (Rs ' + inp.pfCeiling.toLocaleString('en-IN') + ') instead of the full basic pay', { pfBase: 'ceiling' });
  [40, 50, 60].filter((p) => Math.abs(p - inp.basicPct) > 0.001).forEach((p) => add('Basic pay at ' + p + '% of fixed pay', { basicPct: p }));
  if (inp.variable > 0) {
    [100, 50, 0].filter((p) => Math.abs(p - inp.payoutPct) > 0.001).forEach((p) => add('Variable pay paid out at ' + p + '%', { payoutPct: p }));
  }
  if (inp.gratuityInCtc) add('Gratuity not counted inside the CTC', { gratuityInCtc: false });
  else add('Gratuity counted inside the CTC', { gratuityInCtc: true });
  add(inp.regime === 'new' ? 'Old tax regime with the deductions you entered' : 'New tax regime', { regime: inp.regime === 'new' ? 'old' : 'new' });
  return { base, rows: list };
}

// ---------- Two offers side by side ----------
export function compareOffers(a, b) {
  const ra = computeOffer(a);
  const rb = computeOffer(b);
  if (!ra.ok || !rb.ok) return { ra, rb, ok: false };
  const rows = [
    ['Annual CTC', ra.inputs.ctc, rb.inputs.ctc],
    ['Monthly in-hand (regular month)', ra.monthlyInHand, rb.monthlyInHand],
    ['Average per month over the year', ra.averageMonthly, rb.averageMonthly],
    ['Annual take-home', ra.annualTakeHome, rb.annualTakeHome],
    ['Fixed pay inside the CTC', ra.structure.fixedCtc, rb.structure.fixedCtc],
    ['Variable pay paid out', ra.structure.variablePaid, rb.structure.variablePaid],
    ['Income tax for the year', ra.taxAll.total, rb.taxAll.total],
    ['Your PF share', ra.pf.employeePf, rb.pf.employeePf],
    ['Professional tax', ra.pt.annual, rb.pt.annual],
    ['Inside the CTC but not in the bank (employer PF, gratuity, NPS, insurance, other)', ra.employer.insideTotal, rb.employer.insideTotal],
  ];
  return { ra, rb, ok: true, rows };
}

// ---------- Formatting ----------
export function inr(n, { sign = false } = {}) {
  const v = Math.round(Number.isFinite(n) ? n : 0);
  const s = Math.abs(v).toLocaleString('en-IN');
  if (v < 0) return '-Rs ' + s;
  return (sign && v > 0 ? '+' : '') + 'Rs ' + s;
}
export function lakh(n) {
  const v = n / 100000;
  return 'Rs ' + (Math.round(v * 100) / 100).toLocaleString('en-IN', { maximumFractionDigits: 2 }) + ' lakh';
}
