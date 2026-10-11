// Pure scoring logic for the route finder on the career chart after 10th.
// No imports so it can run in the browser and in node tests.

export type FinderInputs = {
  mode: 'student' | 'parent';
  marks: number; // index in the marks bands, or -1 when not sure
  conf: Record<string, number>; // 1 to 5 per subject
  interests: string[];
  money: 'tight' | 'moderate' | 'flexible';
  pressure: 'low' | 'medium' | 'high';
  early: 'yes' | 'either' | 'no';
  leaning: string;
};

type Model = Record<string, any>;
type Route = { id: string; family: string; label: string; yearsToWork: number[] };
type Doors = { cells: string[] }[];

export type RouteScore = {
  id: string;
  label: string;
  family: string;
  fit: number;
  parts: { subject: number; interest: number; marks: number; money: number; pressure: number };
  optionality: number;
  balanced: number;
  note: string[];
};

const clamp = (n: number, lo = 0, hi = 100) => Math.max(lo, Math.min(hi, n));
export const WEIGHTS = { subject: 0.35, interest: 0.25, marks: 0.15, money: 0.1, pressure: 0.15 };

export function optionalityOf(doorCol: string, cols: string[], doors: Doors): number {
  const ci = cols.indexOf(doorCol);
  if (ci < 0 || !doors.length) return 0;
  let pts = 0;
  doors.forEach((d) => { const c = d.cells[ci]; pts += c === 'yes' ? 1 : c === 'check' ? 0.5 : 0; });
  return Math.round((pts / doors.length) * 100);
}

const familyOfLeaning = (l: string) => (l === 'science' ? 'science' : l === 'commerce' ? 'commerce' : l === 'arts' ? 'arts' : l === 'diploma' ? 'vocational' : l === 'open' ? 'open' : '');

export function scoreRoutes(inp: FinderInputs, routes: Route[], model: Model, cols: string[], doors: Doors): RouteScore[] {
  const out: RouteScore[] = routes.filter((r) => model[r.id]).map((r) => {
    const m = model[r.id];
    // Subject fit: weighted average of confidence (1 to 5) turned into 0 to 100.
    let sw = 0, sv = 0;
    Object.keys(m.w).forEach((k) => { const c = inp.conf[k] || 3; sw += m.w[k]; sv += m.w[k] * ((c - 1) / 4) * 100; });
    const subject = sw ? sv / sw : 50;
    // Interest fit: mean affinity over chosen interests, neutral when none chosen.
    const chosen = inp.interests.filter((k) => k in m.aff);
    const interest = chosen.length ? (chosen.reduce((a, k) => a + m.aff[k], 0) / chosen.length) * 100 : 50;
    // Marks comfort: full when marks reach the planning level, lower below it.
    const marks = inp.marks < 0 ? 70 : inp.marks >= m.need ? 100 : clamp(100 - 22 * (m.need - inp.marks), 25);
    // Money and time to earn.
    const maxYears = r.yearsToWork[1];
    const costBase = inp.money === 'tight' ? 45 : inp.money === 'moderate' ? 18 : 0;
    let money = 100 - costBase * (m.cost / 2);
    const yearsPen = inp.early === 'yes' ? 14 : inp.early === 'either' ? 5 : 0;
    money -= (yearsPen * Math.max(0, maxYears - 3)) / 2;
    money = clamp(money, 15);
    // Exam pressure tolerance.
    const tol = inp.pressure === 'low' ? 1 : inp.pressure === 'medium' ? 2 : 3;
    const pressure = clamp(100 - 35 * Math.max(0, m.pressure - tol), 20);
    let fit = subject * WEIGHTS.subject + interest * WEIGHTS.interest + marks * WEIGHTS.marks + money * WEIGHTS.money + pressure * WEIGHTS.pressure;
    const note: string[] = [];
    if (inp.mode === 'parent' && inp.leaning && familyOfLeaning(inp.leaning) === m.family) { fit = Math.min(100, fit + 5); note.push('Matches what your child says they lean towards (+5).'); }
    const optionality = optionalityOf(m.doorCol, cols, doors);
    const f = Math.round(fit);
    return { id: r.id, label: r.label, family: m.family, fit: f, parts: { subject: Math.round(subject), interest: Math.round(interest), marks: Math.round(marks), money: Math.round(money), pressure: Math.round(pressure) }, optionality, balanced: Math.round(f * 0.75 + optionality * 0.25), note };
  });
  return out.sort((a, b) => b.fit - a.fit || b.optionality - a.optionality || a.id.localeCompare(b.id));
}

export function leadStrength(sorted: RouteScore[], answered: number): { label: string; text: string } {
  if (sorted.length < 2) return { label: 'Not enough routes', text: '' };
  const gap = sorted[0].fit - sorted[1].fit;
  if (answered < 4) return { label: 'Low confidence', text: 'You have answered few questions, so treat this as a rough first view.' };
  if (gap >= 8) return { label: 'Clear lead', text: 'The top route is ahead of the next by ' + gap + ' points on your answers.' };
  if (gap >= 4) return { label: 'Close call', text: 'The top two routes are within ' + gap + ' points, so test both before you choose.' };
  return { label: 'Too close to call', text: 'The top routes are within ' + gap + ' points. Run an experiment on each.' };
}

export function familyCompare(scores: RouteScore[], routes: Route[], model: Model) {
  const fams: Record<string, { best: RouteScore; opt: number[]; n: number }> = {};
  scores.forEach((s) => { const f = s.family; if (!fams[f]) fams[f] = { best: s, opt: [], n: 0 }; if (s.fit > fams[f].best.fit) fams[f].best = s; fams[f].opt.push(s.optionality); fams[f].n++; });
  return Object.keys(fams).map((f) => {
    const b = fams[f].best, m = model[b.id], r = routes.find((x) => x.id === b.id)!;
    return { family: f, bestRoute: b.label, fit: b.fit, optionality: Math.round(fams[f].opt.reduce((a, c) => a + c, 0) / fams[f].n), pressure: m.pressure, cost: m.cost, years: r.yearsToWork };
  }).sort((a, b) => b.fit - a.fit);
}

// Re-run the model with small changes and report which ones change the top route.
export function whatCouldChange(inp: FinderInputs, routes: Route[], model: Model, cols: string[], doors: Doors, subjects: { key: string; label: string }[]) {
  const base = scoreRoutes(inp, routes, model, cols, doors);
  const topId = base[0].id;
  const out: string[] = [];
  const test = (change: (i: FinderInputs) => FinderInputs, text: (newTop: string) => string) => {
    const next = scoreRoutes(change(JSON.parse(JSON.stringify(inp))), routes, model, cols, doors);
    if (next[0].id !== topId) out.push(text(next[0].label));
  };
  subjects.forEach((s) => {
    const c = inp.conf[s.key] || 3;
    if (c < 5) test((i) => { i.conf[s.key] = Math.min(5, c + 2); return i; }, (t) => 'If your confidence in ' + s.label + ' rose from ' + c + ' to ' + Math.min(5, c + 2) + ' after practice, ' + t + ' would move to first.');
    if (c > 1) test((i) => { i.conf[s.key] = Math.max(1, c - 2); return i; }, (t) => 'If your confidence in ' + s.label + ' were lower, at ' + Math.max(1, c - 2) + ', ' + t + ' would move to first.');
  });
  if (inp.marks >= 0) {
    if (inp.marks < 6) test((i) => { i.marks = inp.marks + 1; return i; }, (t) => 'If your marks range were one band higher, ' + t + ' would move to first.');
    if (inp.marks > 0) test((i) => { i.marks = inp.marks - 1; return i; }, (t) => 'If your marks range were one band lower, ' + t + ' would move to first.');
  }
  (['low', 'medium', 'high'] as const).forEach((p) => { if (p !== inp.pressure) test((i) => { i.pressure = p; return i; }, (t) => 'If you were ' + (p === 'low' ? 'unwilling' : p === 'high' ? 'ready' : 'moderately willing') + ' to prepare for entrance exams, ' + t + ' would move to first.'); });
  (['tight', 'moderate', 'flexible'] as const).forEach((mo) => { if (mo !== inp.money) test((i) => { i.money = mo; return i; }, (t) => 'If money were ' + (mo === 'tight' ? 'tight' : mo === 'flexible' ? 'not a limit' : 'limited but manageable') + ', ' + t + ' would move to first.'); });
  (['yes', 'either', 'no'] as const).forEach((e) => { if (e !== inp.early) test((i) => { i.early = e; return i; }, (t) => 'If earning early ' + (e === 'yes' ? 'mattered a lot' : e === 'no' ? 'did not matter' : 'mattered a little') + ', ' + t + ' would move to first.'); });
  return out.slice(0, 6);
}

export function experimentPlan(route: { label: string; firstMove: string; bestFor?: string; watchOut?: string }, isParent: boolean) {
  const who = isParent ? 'your child' : 'you';
  return [
    { week: 'Week 1', task: route.firstMove, measure: 'Write three things ' + who + ' liked and three ' + who + ' did not.' },
    { week: 'Week 2', task: 'Speak to two people who study or work on this route and ask what a normal week looks like. Read the official admission or eligibility rule for it.', measure: 'Write the rule and one fact that surprised ' + who + '.' },
    { week: 'Week 3', task: 'Try one real piece of the daily work: solve one chapter of the main subject, make one small project, or shadow someone for a day.', measure: 'Rate how it felt from 1 to 5 and how long ' + who + ' stayed interested.' },
    { week: 'Week 4', task: 'Compare this route with your second choice on cost, years to earn, exam pressure and the doors it keeps open. Talk it through with ' + (isParent ? 'your child and a teacher' : 'a parent and a teacher') + '.', measure: 'Decide: continue, change to the second route, or run one more experiment.' },
  ];
}
