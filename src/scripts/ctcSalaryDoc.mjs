// Builds the result document for the CTC to in-hand salary calculator. One model feeds the
// on-screen result, the print view and the PDF, so the three always match.
import { CHECKED_ON, TAX_YEAR, RULES, STATES, computeOffer, whatIf, compareOffers, inr, lakh } from './ctcSalary.mjs';

export function esc(value) {
  return String(value == null ? '' : value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
}

const pct = (n) => (Math.round(n * 10) / 10).toLocaleString('en-IN') + '%';
const perMonth = (n) => inr(n / 12);

function slabLabel(row, first) {
  if (first) return 'Up to ' + inr(row.to);
  if (!Number.isFinite(row.to)) return 'Above ' + inr(row.from);
  return inr(row.from + 1) + ' to ' + inr(row.to);
}

function offerName(inp, index, two) {
  const given = String(inp.label || '').trim();
  if (given) return given;
  return two ? 'Offer ' + (index === 0 ? 'A' : 'B') : 'Your offer';
}

function offerBlocks(r, name, view, heading) {
  const b = [];
  const inp = r.inputs;
  const s = r.structure;
  b.push({ t: 'h', text: heading });
  const share = r.reconcile.totalValue > 0 ? (r.annualTakeHome / r.reconcile.totalValue) * 100 : 0;
  b.push({
    t: 'stats',
    items: view === 'year'
      ? [
          { label: 'Annual take-home', value: inr(r.annualTakeHome), sub: 'Everything that reaches your bank in a year, including variable pay and bonus paid out' },
          { label: 'Monthly in-hand', value: inr(r.monthlyInHand), sub: 'A regular month, from fixed pay only' },
          { label: 'Average per month', value: inr(r.averageMonthly), sub: 'Annual take-home divided by 12' },
          { label: 'Share of the offer that reaches you', value: pct(share), sub: 'Take-home divided by the total value of the offer' },
        ]
      : [
          { label: 'Monthly in-hand', value: inr(r.monthlyInHand), sub: 'A regular month, from fixed pay only' },
          { label: 'Average per month', value: inr(r.averageMonthly), sub: 'Annual take-home divided by 12, so variable pay and bonus are spread out' },
          { label: 'Annual take-home', value: inr(r.annualTakeHome), sub: 'Everything that reaches your bank in a year' },
          { label: 'Share of the offer that reaches you', value: pct(share), sub: 'Take-home divided by the total value of the offer' },
        ],
  });
  if (r.warnings.length) b.push({ t: 'list', title: 'Check these', items: r.warnings });
  if (r.notes.length) b.push({ t: 'list', title: 'Changed while reading your entries', items: r.notes });

  // Every cut from pay
  b.push({ t: 'h', text: 'Every cut from your pay, month and year' });
  const pfLabel = 'Your PF share (12% of ' + inr(r.pf.wageMonth) + ' a month' + (inp.pfBase === 'ceiling' && s.basic / 12 > inp.pfCeiling ? ', the wage ceiling' : ', your basic pay') + ')';
  const st = STATES[inp.state] || STATES.none;
  const ptLabel = 'Professional tax (' + st.label + ')' + (r.pt.febExtra ? ', Rs ' + (r.pt.perMonth + r.pt.febExtra) + ' in February' : '') + (r.pt.spread && inp.state !== 'none' ? ', paid twice a year, shown spread over 12 months' : '');
  const fixedYear = s.grossCash - r.pf.employeePf - r.pt.annual - r.taxFixed.total - inp.otherDeductionMonth * 12;
  const rows = [
    ['Basic pay', perMonth(s.basic), inr(s.basic)],
    ['House rent allowance (HRA)', perMonth(s.hra), inr(s.hra)],
    ['Special allowance (the rest of the cash pay)', perMonth(s.special), inr(s.special)],
    { strong: true, cells: ['Gross cash salary from fixed pay', perMonth(s.grossCash), inr(s.grossCash)] },
    ['Less: ' + pfLabel, '-' + inr(r.pf.employeePf / 12), '-' + inr(r.pf.employeePf)],
    ['Less: ' + ptLabel, '-' + inr(r.pt.perMonth), '-' + inr(r.pt.annual)],
    ['Less: income tax (TDS) on fixed pay (' + (inp.regime === 'new' ? 'new' : 'old') + ' regime)', '-' + inr(r.monthlyTds), '-' + inr(r.taxFixed.total)],
  ];
  if (inp.otherDeductionMonth > 0) rows.push(['Less: other cuts you entered', '-' + inr(inp.otherDeductionMonth), '-' + inr(inp.otherDeductionMonth * 12)]);
  rows.push({ strong: true, cells: ['In-hand from fixed pay', inr(r.monthlyInHand), inr(fixedYear)] });
  if (s.variablePaid > 0) rows.push(['Add: variable pay paid out (' + Math.round(inp.payoutPct) + '% of ' + inr(s.variableTarget) + ')', 'not monthly', inr(s.variablePaid)]);
  if (s.joiningBonus > 0) rows.push(['Add: joining bonus (first year only)', 'not monthly', inr(s.joiningBonus)]);
  if (r.taxOnExtras > 0) rows.push(['Less: extra income tax caused by variable pay and bonus', 'not monthly', '-' + inr(r.taxOnExtras)]);
  rows.push({ strong: true, cells: ['Annual take-home', inr(r.averageMonthly) + ' average', inr(r.annualTakeHome)] });
  b.push({ t: 'table', head: ['Item', 'Per month', 'Per year'], widths: [0.52, 0.24, 0.24], align: ['l', 'r', 'r'], rows });
  if (r.pt.febExtra) b.push({ t: 'p', text: 'The Rs ' + r.pt.febExtra + ' extra professional tax in February is counted in the yearly column, so a February payslip is a little lower than a regular month.' });

  // Inside CTC, never in the bank
  b.push({ t: 'h', text: 'Inside the CTC but never in your bank account' });
  const e = r.employer;
  const inside = [
    ['Employer PF share (12% of ' + inr(r.pf.wageMonth) + ' a month)' + (inp.employerPfInCtc ? '' : ', paid on top of the CTC you entered'), inr(e.employerPf), inp.employerPfInCtc ? 'It is saved in your PF account. You can withdraw it only under the PF rules.' : 'Not part of the CTC you typed, so it is added to the total value.'],
    ['Gratuity set aside (' + (Math.round(inp.gratuityPct * 100) / 100) + '% of basic)', inr(e.gratuity), inp.gratuityInCtc ? 'Paid when you leave, usually only after 5 years with the employer.' : 'Not counted inside this CTC.'],
  ];
  if (e.nps > 0) inside.push(['Employer NPS (' + inp.employerNpsPct + '% of basic)', inr(e.nps), 'Goes into your NPS account. Locked until retirement age.']);
  if (e.insurance > 0) inside.push(['Employer-paid insurance', inr(e.insurance), 'Cover for you, not cash.']);
  if (e.otherEmployer > 0) inside.push(['Other employer costs', inr(e.otherEmployer), 'Money the employer spends that you never receive.']);
  if (s.variableTarget - s.variablePaid > 0) inside.push(['Variable pay not paid out', inr(s.variableTarget - s.variablePaid), 'Counted in the CTC at target, but the payout is lower in this estimate.']);
  b.push({ t: 'table', head: ['Part of the offer', 'Per year', 'What happens to it'], widths: [0.4, 0.2, 0.4], align: ['l', 'r', 'l'], rows: inside, stack: true });

  // Where every rupee goes
  b.push({ t: 'h', text: 'Where the whole offer goes' });
  const total = r.reconcile.totalValue;
  const goes = r.reconcile.rows.filter((x) => Math.abs(x[1]) > 0.5).map((x) => [x[0], inr(x[1]), total > 0 ? pct((x[1] / total) * 100) : '0%']);
  goes.push({ strong: true, cells: ['Total value of the offer', inr(total), '100%'] });
  b.push({ t: 'table', head: ['Part', 'Per year', 'Share'], widths: [0.56, 0.24, 0.2], align: ['l', 'r', 'r'], rows: goes });

  // Tax step by step
  b.push({ t: 'h', text: 'Income tax, step by step (' + (inp.regime === 'new' ? 'new regime' : 'old regime') + ', tax year ' + TAX_YEAR + ')' });
  const lines = r.taxableAll.lines.map((l) => [l[0], l[1] < 0 ? '-' + inr(-l[1]) : inr(l[1])]);
  lines.push({ strong: true, cells: ['Taxable income, rounded to the nearest Rs 10', inr(r.taxAll.income)] });
  b.push({ t: 'table', head: ['Taxable income', 'Per year'], widths: [0.72, 0.28], align: ['l', 'r'], rows: lines });
  const tx = r.taxAll;
  const slabRows = tx.rows.map((row, i) => [slabLabel(row, i === 0), pct(row.rate * 100), inr(row.amount), inr(row.tax)]);
  slabRows.push({ strong: true, cells: ['Tax from the slabs', '', inr(tx.income), inr(tx.slabTax)] });
  if (tx.rebate > 0) slabRows.push(['Less: rebate', '', '', '-' + inr(tx.rebate)]);
  if (tx.surcharge > 0 || tx.relief > 0) slabRows.push(['Add: surcharge at ' + pct(tx.surchargeRate * 100) + (tx.relief > 0 ? ' (after marginal relief of ' + inr(tx.relief) + ')' : ''), '', '', inr(tx.surcharge)]);
  slabRows.push(['Add: health and education cess at 4%', '', '', inr(tx.cess)]);
  slabRows.push({ strong: true, cells: ['Total income tax for the year, rounded to Rs 10', '', '', inr(tx.total)] });
  b.push({ t: 'table', head: ['Slab', 'Rate', 'Income in the slab', 'Tax'], widths: [0.37, 0.12, 0.27, 0.24], align: ['l', 'r', 'r', 'r'], rows: slabRows, stack: true });
  const taxNotes = [];
  if (tx.rebateNote) taxNotes.push(tx.rebateNote);
  if (tx.surchargeNote) taxNotes.push(tx.surchargeNote);
  taxNotes.push('Monthly TDS is built from the tax on fixed pay only: ' + inr(r.taxFixed.total) + ' divided by 12 is ' + inr(r.monthlyTds) + '.' + (r.taxOnExtras > 0 ? ' The extra ' + inr(r.taxOnExtras) + ' caused by variable pay and bonus is taken when they are paid.' : ''));
  b.push({ t: 'p', text: taxNotes.join(' ') });
  return b;
}

function whatIfBlocks(inputs, view) {
  const w = whatIf(inputs);
  if (!w.base.ok || !w.rows.length) return [];
  const year = view === 'year';
  const base = year ? w.base.annualTakeHome : w.base.monthlyInHand;
  const rows = [{ strong: true, cells: ['Your offer as entered', inr(base), 'start here'] }];
  w.rows.forEach((x) => {
    const val = year ? x.annual : x.monthly;
    const d = year ? x.dAnnual : x.dMonthly;
    rows.push([x.label, inr(val), Math.abs(d) < 1 ? 'no change' : inr(d, { sign: true })]);
  });
  return [
    { t: 'h', text: 'Same CTC, one change at a time' },
    { t: 'p', text: 'The CTC stays at ' + inr(w.base.inputs.ctc) + '. Each row changes one thing and shows what reaches you ' + (year ? 'in a year' : 'in a regular month') + '. A higher basic or PF on the full basic lowers cash now and builds savings.' },
    { t: 'table', head: ['What changes', year ? 'Take-home a year' : 'In-hand a month', 'Against your offer'], widths: [0.5, 0.25, 0.25], align: ['l', 'r', 'r'], rows, stack: true },
  ];
}

function compareBlocks(ra, rb, nameA, nameB, view) {
  const c = compareOffers(ra.inputs, rb.inputs);
  if (!c.ok) return [];
  const b = [];
  const year = view === 'year';
  const diffM = rb.monthlyInHand - ra.monthlyInHand;
  const diffY = rb.annualTakeHome - ra.annualTakeHome;
  const diffCtc = rb.inputs.ctc - ra.inputs.ctc;
  const hasVariable = ra.structure.variableTarget > 0 || rb.structure.variableTarget > 0;
  const diffAvg = rb.averageMonthly - ra.averageMonthly;
  // With variable pay in either offer, a regular month leaves it out, so compare the yearly picture instead.
  const main = year ? diffY : hasVariable ? diffAvg : diffM;
  const unit = year ? 'a year' : hasVariable ? 'a month on average over the year' : 'every regular month';
  let sentence;
  if (Math.abs(main) < 1) sentence = nameB + ' and ' + nameA + ' put about the same ' + (year ? 'take-home in your bank over a year' : hasVariable ? 'average pay in your bank each month' : 'in-hand pay in your bank each month') + '.';
  else sentence = (main > 0 ? nameB : nameA) + ' puts ' + inr(Math.abs(main)) + ' more in your bank ' + unit + ' than ' + (main > 0 ? nameA : nameB) + '.';
  if (Math.abs(diffCtc) >= 1) {
    const higher = diffCtc > 0 ? nameB : nameA;
    const lowerNet = (diffCtc > 0 && main < 0) || (diffCtc < 0 && main > 0);
    sentence += ' ' + higher + ' has the higher CTC, by ' + inr(Math.abs(diffCtc)) + '.' + (lowerNet ? ' The higher CTC is not the higher pay in your bank, which is why the CTC alone is not enough to compare.' : '');
  }
  b.push({ t: 'h', text: 'Side by side: ' + nameA + ' and ' + nameB });
  b.push({ t: 'p', text: sentence });
  const order = year ? [0, 3, 1, 2, 4, 5, 6, 7, 8, 9] : [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const rows = order.map((i) => {
    const [label, va, vb] = c.rows[i];
    const strong = i === 1 || i === 3;
    const cells = [label, inr(va), inr(vb), Math.abs(vb - va) < 1 ? 'same' : inr(vb - va, { sign: true })];
    return strong ? { strong: true, cells } : cells;
  });
  b.push({ t: 'table', head: ['', nameA, nameB, 'Difference (' + nameB + ' minus ' + nameA + ')'], widths: [0.34, 0.2, 0.2, 0.26], align: ['l', 'r', 'r', 'r'], rows, stack: true });
  const mixed = [];
  [[ra, nameA], [rb, nameB]].forEach(([r, n]) => { if (r.structure.variableTarget > 0) mixed.push(n + ' has ' + inr(r.structure.variableTarget) + ' of variable pay inside its CTC, and the monthly figure leaves it out.'); });
  if (mixed.length) b.push({ t: 'p', text: mixed.join(' ') });
  return b;
}

/**
 * state: { offers: [inputsA, inputsB | null], view: 'month' | 'year' }
 * Returns { ok, fileName, blocks, results } or { ok:false, reason }.
 */
export function resultModel(state, generated) {
  const two = !!state.offers[1];
  const view = state.view === 'year' ? 'year' : 'month';
  const results = state.offers.filter(Boolean).map((o) => computeOffer(o));
  const failed = results.findIndex((r) => !r.ok);
  if (failed >= 0) return { ok: false, reason: (two ? (failed === 0 ? 'Offer A: ' : 'Offer B: ') : '') + results[failed].reason, results };
  const names = results.map((r, i) => offerName(r.inputs, i, two));
  const blocks = [];
  blocks.push({ t: 'title', text: 'CTC to in-hand salary estimate', sub: 'Tax year ' + TAX_YEAR + ' rules, checked ' + CHECKED_ON + '. An estimate, not tax advice.' });
  blocks.push({
    t: 'meta',
    rows: results.map((r, i) => [names[i], 'CTC ' + inr(r.inputs.ctc) + ' (' + lakh(r.inputs.ctc) + '), ' + (r.inputs.regime === 'new' ? 'new tax regime' : 'old tax regime') + ', ' + (STATES[r.inputs.state] || STATES.none).label]).concat(generated ? [['Made on', generated]] : []),
  });
  if (two) blocks.push(...compareBlocks(results[0], results[1], names[0], names[1], view));
  results.forEach((r, i) => blocks.push(...offerBlocks(r, names[i], view, two ? names[i] + ': the details' : 'Your result')));
  blocks.push(...whatIfBlocks(results[0].inputs, view));
  if (two) blocks.push(...whatIfBlocks(results[1].inputs, view).map((blk) => (blk.t === 'h' ? { t: 'h', text: blk.text + ' (' + names[1] + ')' } : blk)));
  blocks.push({
    t: 'note',
    text: 'This is an estimate from the rules in force for tax year ' + TAX_YEAR + ' (Income-tax Act, 2025), checked on ' + CHECKED_ON + '. Payslips differ by employer, by how TDS is spread over the year, and by what each employer counts in basic pay. Professional tax, PF and labour-code rules change, so check the official notice. It is general information, not tax advice. Nothing you typed was sent anywhere.',
  });
  const fileName = 'ctc-to-in-hand-salary-estimate.pdf';
  return { ok: true, fileName, blocks, results, names, two, view };
}

// ---------- HTML for the screen and for print ----------
function cellClass(align, i) { return align && align[i] === 'r' ? ' class="ctc-num"' : ''; }

export function modelToHtml(model) {
  const out = [];
  model.blocks.forEach((b) => {
    if (b.t === 'title') {
      out.push('<div class="ctc-doc-head"><p class="ctc-doc-brand">FUTURECAREERSCHOOL</p><h3 class="ctc-doc-title">' + esc(b.text) + '</h3>' + (b.sub ? '<p class="ctc-doc-sub">' + esc(b.sub) + '</p>' : '') + '</div>');
    } else if (b.t === 'meta') {
      out.push('<dl class="ctc-meta">' + b.rows.map((r) => '<div><dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd></div>').join('') + '</dl>');
    } else if (b.t === 'h') {
      out.push('<h4 class="ctc-doc-h">' + esc(b.text) + '</h4>');
    } else if (b.t === 'p') {
      out.push('<p class="ctc-doc-p">' + esc(b.text) + '</p>');
    } else if (b.t === 'stats') {
      out.push('<div class="ctc-stats">' + b.items.map((it, i) => '<div class="ctc-stat' + (i === 0 ? ' ctc-stat--main' : '') + '"><span class="ctc-stat-label">' + esc(it.label) + '</span><strong class="ctc-stat-value">' + esc(it.value) + '</strong><span class="ctc-stat-sub">' + esc(it.sub) + '</span></div>').join('') + '</div>');
    } else if (b.t === 'list') {
      out.push('<div class="ctc-doc-list"><p class="ctc-doc-listtitle">' + esc(b.title) + '</p><ul>' + b.items.map((x) => '<li>' + esc(x) + '</li>').join('') + '</ul></div>');
    } else if (b.t === 'table') {
      const head = b.head.map((h, i) => '<th scope="col"' + cellClass(b.align, i) + '>' + esc(h) + '</th>').join('');
      const body = b.rows.map((row) => {
        const cells = Array.isArray(row) ? row : row.cells;
        const strong = !Array.isArray(row) && row.strong;
        return '<tr' + (strong ? ' class="ctc-strong"' : '') + '>' + cells.map((c, i) => (i === 0 ? '<th scope="row"' : '<td') + ' data-label="' + esc(b.head[i] || '') + '"' + cellClass(b.align, i) + (c === '' ? ' data-empty="1"' : '') + '>' + esc(c) + (i === 0 ? '</th>' : '</td>')).join('') + '</tr>';
      }).join('');
      const cols = b.widths ? '<colgroup>' + b.widths.map((w) => '<col style="width:' + Math.round(w * 100) + '%">').join('') + '</colgroup>' : '';
      out.push('<div class="ctc-tablewrap"><table class="ctc-table' + (b.stack ? ' ctc-stack' : '') + '">' + cols + '<thead><tr>' + head + '</tr></thead><tbody>' + body + '</tbody></table></div>');
    } else if (b.t === 'note') {
      out.push('<p class="ctc-doc-note">' + esc(b.text) + '</p>');
    }
  });
  return out.join('');
}
