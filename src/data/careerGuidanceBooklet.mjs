// Logic and data for the career guidance booklet builder (after 10th and after 12th).
//
// No routes, rules or facts are invented here. Every route, entry rule, exam name, length, risk and
// growth mark is read from the existing verified chart data:
//   src/config/careerChartAfter12th.mjs  (chartRows)
//   src/config/careerChartAfter10th.mjs  (ROUTES, OFFICIAL_LINKS, CHECKPOINTS, GATES, FLOW)
//   src/config/scalability.mjs           (SCALE, ROUTE_SCALE, SCALE_RULE, PAY_CAUTION)
// What this file adds is only the choosing logic: which stream can reach which chart row (read from
// the chart's own "who" text), and how the student's answers reorder the list. The reordering rules are
// explained on the page. Nothing here sends anything anywhere.

import { chartRows, CHART12_META } from '../config/careerChartAfter12th.mjs';
import { ROUTES as ROUTES10, OFFICIAL_LINKS as OFFICIAL10, CHECKPOINTS, GATES } from '../config/careerChartAfter10th.mjs';
import { SCALE, ROUTE_SCALE, SCALE_TIPS, SCALE_RULE, PAY_CAUTION } from '../config/scalability.mjs';

export const CHECKED_ON = '17 November 2026';
export const CHART_LAST_CHECKED = CHART12_META.lastChecked;
export { SCALE, SCALE_TIPS, SCALE_RULE, PAY_CAUTION };
export const PAY_LINE = 'Pay differs by city, employer, skill and year, and this booklet gives no pay figures. Check current job listings (for example on LinkedIn, Naukri or Indeed) and ask people working in the role before you decide.';

// ---------- answer options (shown in the form, printed in the booklet) ----------

export const STREAMS12 = [
  { id: 'pcm', label: 'Science with Maths (PCM)' },
  { id: 'pcb', label: 'Science with Biology (PCB)' },
  { id: 'pcmb', label: 'Science with both (PCMB)' },
  { id: 'cm', label: 'Commerce with Maths' },
  { id: 'cn', label: 'Commerce without Maths' },
  { id: 'arts', label: 'Arts or Humanities' },
];

export const MARKS = [
  { id: 'unknown', label: 'Not out yet, or not sure' },
  { id: 'under50', label: 'Below 50 percent' },
  { id: '50to60', label: '50 to 60 percent' },
  { id: '60to75', label: '60 to 75 percent' },
  { id: '75to90', label: '75 to 90 percent' },
  { id: 'over90', label: 'Above 90 percent' },
];

// "top" is the upper end of the band in rupees, used only to show an illustration of the money check.
export const BUDGETS = [
  { id: 'unknown', label: 'Not decided yet', top: 0 },
  { id: 'u3', label: 'Up to Rs 3 lakh', top: 300000 },
  { id: '3to10', label: 'Rs 3 lakh to Rs 10 lakh', top: 1000000 },
  { id: '10to25', label: 'Rs 10 lakh to Rs 25 lakh', top: 2500000 },
  { id: 'o25', label: 'More than Rs 25 lakh', top: 2500000 },
];

export const CITIES = [
  { id: 'unknown', label: 'Not sure' },
  { id: 'metro', label: 'Large city' },
  { id: 'mid', label: 'Mid-size city or town' },
  { id: 'small', label: 'Small town or village' },
  { id: 'move', label: 'Happy to move for study' },
];

export const PRIORITIES12 = [
  { id: 'balanced', label: 'No single priority (balanced list)' },
  { id: 'earn', label: 'Start earning sooner' },
  { id: 'stable', label: 'Steady pay and security' },
  { id: 'growth', label: 'Room to grow, consult or build my own work' },
  { id: 'exams', label: 'Fewer exam hurdles' },
];

export const PRIORITIES10 = [
  { id: 'balanced', label: 'No single priority (balanced list)' },
  { id: 'earn', label: 'Start earning sooner' },
  { id: 'growth', label: 'Room to grow, consult or build my own work' },
  { id: 'doors', label: 'Keep the most doors open later' },
];

// Interests and the earning question come from the decision flow of the career chart after 10th.
export const INTERESTS10 = [
  { id: 'mathsphysics', label: 'Maths and Physics', routes: ['science-pcm'] },
  { id: 'biology', label: 'Biology and living things', routes: ['science-pcb'] },
  { id: 'mathsbio', label: 'Both Maths and Biology', routes: ['science-pcmb'] },
  { id: 'money', label: 'Money, markets and business', routes: ['commerce-maths', 'commerce-nomaths'] },
  { id: 'people', label: 'People, language, society or design', routes: ['arts'] },
  { id: 'hands', label: 'Using tools and fixing things by hand', routes: ['iti'] },
  { id: 'machines', label: 'Drawings, circuits, machines and systems', routes: ['diploma'] },
];

export const EARN10 = [
  { id: 'later', label: 'Not that soon' },
  { id: 'soon', label: 'Yes, within about 1 to 3 years' },
  { id: 'noschool', label: 'I cannot attend regular school' },
];

export const MATHS10 = [
  { id: 'unsure', label: 'Not sure' },
  { id: 'yes', label: 'Yes' },
  { id: 'no', label: 'No, I would struggle' },
];

const labelOf = (list, id) => (list.find((x) => x.id === id) || {}).label || '';
export const labelFor = { stream12: (id) => labelOf(STREAMS12, id), marks: (id) => labelOf(MARKS, id), budget: (id) => labelOf(BUDGETS, id), city: (id) => labelOf(CITIES, id), pri12: (id) => labelOf(PRIORITIES12, id), pri10: (id) => labelOf(PRIORITIES10, id), earn10: (id) => labelOf(EARN10, id), maths10: (id) => labelOf(MATHS10, id) };

// ---------- official sites (no dates or fees are stated from them) ----------

export const OFFICIAL = {
  nta: { label: 'National Testing Agency (NTA)', url: 'https://nta.ac.in/', supports: 'Notices, eligibility and dates for national tests such as JEE Main and NEET UG.' },
  cuet: { label: 'CUET UG', url: 'https://cuet.nta.nic.in/', supports: 'CUET UG notices, syllabus and information bulletin.' },
  josaa: { label: 'JoSAA counselling', url: 'https://josaa.nic.in/', supports: 'Seat matrix, opening and closing ranks and counselling notices for IITs, NITs and similar institutes.' },
  clat: { label: 'Consortium of NLUs (CLAT)', url: 'https://consortiumofnlus.ac.in/', supports: 'CLAT notices and eligibility for integrated law at the participating NLUs.' },
  icai: { label: 'ICAI', url: 'https://www.icai.org/', supports: 'CA Foundation registration and exam rules from the Institute of Chartered Accountants of India.' },
  upsc: { label: 'UPSC', url: 'https://upsc.gov.in/', supports: 'Examination notices such as the NDA exam.' },
  nchm: { label: 'NCHM JEE', url: 'https://nchmjee.nta.nic.in/', supports: 'The hotel management entrance exam and the institutes that use it.' },
  aicte: { label: 'AICTE', url: 'https://www.aicte-india.org/', supports: 'Approval resources, to check that a diploma or engineering institute is approved before you pay.' },
  dgt: { label: 'DGT Craftsmen Training Scheme (ITI)', url: 'https://dgt.gov.in/en/CTS', supports: 'How the ITI network works. The page lists 14,643 ITIs and 169 NSQF-compliant trades.' },
  nats: { label: 'NATS apprenticeship training', url: 'https://nats.education.gov.in/about-us.php', supports: 'Learn-while-working training for graduate, diploma and vocational certificate holders.' },
  nios: { label: 'NIOS open schooling', url: 'https://www.nios.ac.in/', supports: 'Open-school Secondary and Senior Secondary courses and the current prospectus.' },
};

const GATE_LINKS12 = [
  [/JEE Main|JEE Advanced|JoSAA/, ['nta']],
  [/JEE Advanced|JoSAA/, ['josaa']],
  [/NEET/, ['nta']],
  [/CUET/, ['cuet']],
  [/CLAT|AILET/, ['clat']],
  [/CA Foundation/, ['icai']],
  [/UPSC|NDA exam/, ['upsc']],
  [/NCHM/, ['nchm']],
  [/NCET|JIPMAT/, ['nta']],
];

// ---------- after 12th: which stream can reach which chart row ----------
// Read from the "who" text of each chart row. "open" means the chart says that stream can enter.
// "check" means the chart says to check college by college, or only one part of the row fits.
// A stream that is not listed is one the chart does not open that row to.
// gate: 0 no national entrance test, 1 CUET, state or college tests, 2 a national exam with its own rank
// or a multi-stage selection. It is read from the chart's "gate" text.
// yearsLow: the shorter end of the length written in the chart, or null when the chart gives no fixed length.
const ALL = { pcm: 'open', pcb: 'open', pcmb: 'open', cm: 'open', cn: 'open', arts: 'open' };
const MAP12 = [
  { key: 'BCA, BSc', id: 'computing', streams: { pcm: 'open', pcmb: 'open', cm: 'open', pcb: 'check', cn: 'check', arts: 'check' }, gate: 1, yearsLow: 3, streamNote: 'The chart says most colleges want Maths or Computer Science in 12th, so check each college.' },
  { key: 'Design:', id: 'design', streams: ALL, gate: 2, yearsLow: 4 },
  { key: 'Skill-first', id: 'skill-first', streams: ALL, gate: 0, yearsLow: 1 },
  { key: 'B.Tech / BE', id: 'btech', streams: { pcm: 'open', pcmb: 'open' }, gate: 2, yearsLow: 4 },
  { key: 'B.Com or BA Economics', id: 'ca', streams: ALL, gate: 2, yearsLow: null },
  { key: 'Teacher education', id: 'teacher', streams: ALL, gate: 2, yearsLow: 4, streamNote: 'The chart says the subject you can teach depends on your stream.' },
  { key: 'Architecture', id: 'arch', streams: { pcm: 'open', pcmb: 'open' }, gate: 2, yearsLow: 5 },
  { key: 'Psychology', id: 'psych', streams: ALL, gate: 1, yearsLow: 3, streamNote: 'The chart says any stream in most colleges, so check your college.' },
  { key: 'Media', id: 'media', streams: ALL, gate: 1, yearsLow: 3 },
  { key: 'Agriculture', id: 'agri', streams: { pcm: 'open', pcb: 'open', pcmb: 'open' }, gate: 2, yearsLow: 4, streamNote: 'The chart says check each college.' },
  { key: 'BBA, BMS', id: 'bba', streams: ALL, gate: 1, yearsLow: 3 },
  { key: 'BSc Nursing', id: 'health', streams: { pcb: 'open', pcmb: 'open', pcm: 'check' }, gate: 1, yearsLow: 4, streamNote: 'The chart says PCB for nursing and physiotherapy, and PCB or PCM for B.Pharm only.' },
  { key: 'Hotel management', id: 'hotel', streams: ALL, gate: 1, yearsLow: 3 },
  { key: 'Integrated law', id: 'law', streams: ALL, gate: 2, yearsLow: 5 },
  { key: 'MBBS, BDS', id: 'mbbs', streams: { pcb: 'open', pcmb: 'open' }, gate: 2, yearsLow: 5.5 },
  { key: 'Defence: NDA', id: 'nda', streams: { pcm: 'open', pcmb: 'open', pcb: 'check', cm: 'check', cn: 'check', arts: 'check' }, gate: 2, yearsLow: null, streamNote: 'The chart says the Army wing is open to any stream, and the Navy and Air Force wings need Physics and Maths.' },
  { key: 'BSc, BS or integrated MSc', id: 'science', streams: { pcm: 'open', pcb: 'open', pcmb: 'open' }, gate: 1, yearsLow: 3 },
  { key: 'Government jobs', id: 'govt', streams: ALL, gate: 2, yearsLow: null },
  { key: 'Aviation', id: 'aviation', streams: { pcm: 'open', pcmb: 'open', pcb: 'check', cm: 'check', cn: 'check', arts: 'check' }, gate: 2, yearsLow: 2, streamNote: 'The chart says pilot training needs Physics and Maths in 12th. Maintenance follows diploma or degree routes.' },
  { key: 'Merchant navy', id: 'navy', streams: { pcm: 'open', pcmb: 'open' }, gate: 2, yearsLow: 3 },
];

export const ROUTES12 = MAP12.map((m, order) => {
  const row = chartRows.find((r) => r.route.startsWith(m.key));
  if (!row) throw new Error('Career chart row not found for ' + m.key);
  const money = row.money || '';
  const hasNumber = /[0-9₹]/.test(money);
  const costly = /costly|expensive|very high/i.test(money + ' ' + row.catch + ' ' + row.why);
  const stable = /stable|steadily/i.test(money);
  const links = [];
  GATE_LINKS12.forEach(([re, ids]) => { if (re.test(row.gate.replace('NCHM JEE', 'NCHM'))) ids.forEach((i) => { if (!links.includes(i)) links.push(i); }); });
  return {
    id: m.id, order, route: row.route, who: row.who, gate: row.gate, length: row.length,
    catch: row.catch, scale: row.scale, why: row.why, grow: row.grow,
    money: hasNumber ? '' : money, hasPayFigure: hasNumber,
    streams: m.streams, gateLevel: m.gate, yearsLow: m.yearsLow, streamNote: m.streamNote || '',
    costly, stable, links,
  };
});

const SCALE_RANK = { high: 0, mid: 1, low: 2 };

// Text from the chart is shown without en or em dashes, and without seat, registration or vacancy figures.
// Those figures belong to the chart page, which names their sources and dates. The booklet points to
// official sites instead of repeating numbers it cannot source on its own page.
export function clean(value) {
  if (Array.isArray(value)) return value.map(clean);
  if (typeof value !== 'string') return value;
  return value
    .replace(/\s*\((?:over|roughly)[^)]*\)/g, '')
    .replace(/\s*NDA II 2026 had only 394 vacancies\./g, '')
    .replace(/\s*[\u2013\u2014]\s*/g, ' to ')
    .replace(/₹/g, 'Rs ')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

function sorter12(priority) {
  const yearsKey = (r) => (r.yearsLow == null ? 99 : r.yearsLow);
  const by = {
    earn: (a, b) => yearsKey(a) - yearsKey(b) || SCALE_RANK[a.scale] - SCALE_RANK[b.scale],
    stable: (a, b) => (b.stable ? 1 : 0) - (a.stable ? 1 : 0) || SCALE_RANK[a.scale] - SCALE_RANK[b.scale],
    growth: (a, b) => SCALE_RANK[a.scale] - SCALE_RANK[b.scale],
    exams: (a, b) => a.gateLevel - b.gateLevel || SCALE_RANK[a.scale] - SCALE_RANK[b.scale],
    balanced: (a, b) => SCALE_RANK[a.scale] - SCALE_RANK[b.scale] || a.gateLevel - b.gateLevel,
  };
  const f = by[priority] || by.balanced;
  return (a, b) => f(a, b) || a.order - b.order;
}

export const SHORTLIST_SIZE = 5;

/** How many of the shortlist should be routes that do not hang on one national rank. */
export function safetyCount(marks) {
  return marks === 'unknown' || marks === 'under50' || marks === '50to60' ? 2 : 1;
}

export function blankAnswers(stage) {
  return stage === 'after10'
    ? { name: '', worry: '', earn: 'later', interests: [], maths: 'unsure', marks: 'unknown', budget: 'unknown', city: 'unknown', priority: 'balanced', pinned: '' }
    : { name: '', worry: '', stream: '', marks: 'unknown', budget: 'unknown', city: 'unknown', priority: 'balanced', pinned: '' };
}

const oneOf = (list, id, fallback) => (list.some((x) => x.id === id) ? id : fallback);
const cut = (s, n) => String(s == null ? '' : s).replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F]/g, '').slice(0, n);

export function cleanAnswers(stage, raw) {
  const a = Object.assign(blankAnswers(stage), raw && typeof raw === 'object' ? raw : {});
  a.name = cut(a.name, 40);
  a.worry = cut(a.worry, 240);
  a.marks = oneOf(MARKS, a.marks, 'unknown');
  a.budget = oneOf(BUDGETS, a.budget, 'unknown');
  a.city = oneOf(CITIES, a.city, 'unknown');
  if (stage === 'after10') {
    a.earn = oneOf(EARN10, a.earn, 'later');
    a.maths = oneOf(MATHS10, a.maths, 'unsure');
    a.priority = oneOf(PRIORITIES10, a.priority, 'balanced');
    const picked = Array.isArray(a.interests) ? a.interests : [];
    a.interests = INTERESTS10.map((i) => i.id).filter((id) => picked.includes(id)).slice(0, 3);
    a.pinned = ROUTES10.some((r) => r.id === a.pinned) ? a.pinned : '';
  } else {
    a.stream = oneOf(STREAMS12, a.stream, '');
    a.priority = oneOf(PRIORITIES12, a.priority, 'balanced');
    a.pinned = ROUTES12.some((r) => r.id === a.pinned) ? a.pinned : '';
  }
  return a;
}

/** Routes the chosen stream can enter, for the "route already in mind" list. */
export function routesForStream12(stream) {
  return ROUTES12.filter((r) => r.streams[stream]);
}

export function routeOptions10() {
  return ROUTES10.map((r) => ({ id: r.id, label: r.label }));
}

function budgetIllustration(budgetId) {
  const b = BUDGETS.find((x) => x.id === budgetId);
  if (!b || !b.top) return null;
  return { band: b.label, top: b.top, tenth: Math.round(b.top / 10), fifth: Math.round(b.top / 5), atLeast: b.id === 'o25' };
}

export function inr(n) {
  const s = String(Math.round(n));
  if (s.length <= 3) return 'Rs ' + s;
  const last = s.slice(-3);
  const rest = s.slice(0, -3).replace(/\B(?=(\d{2})+(?!\d))/g, ',');
  return 'Rs ' + rest + ',' + last;
}

// ---------- plan builders ----------

function card12(r, extra) {
  return Object.assign({
    id: r.id, title: clean(r.route), scale: r.scale, scaleLabel: SCALE[r.scale].label,
    why: clean(r.why), risk: clean(r.catch), grow: clean(r.grow), who: clean(r.who), gate: clean(r.gate), length: clean(r.length),
    pay: clean(r.money), payNote: r.hasPayFigure ? 'An entry pay figure, with its source, is on the career chart page.' : '',
    costly: r.costly, links: r.links.map((k) => OFFICIAL[k]), streamNote: clean(r.streamNote), fit: '',
  }, extra || {});
}

export function plan12(rawAnswers) {
  const a = cleanAnswers('after12', rawAnswers);
  if (!a.stream) return { ready: false, answers: a };
  const reach = routesForStream12(a.stream);
  const sort = sorter12(a.priority);
  const open = reach.filter((r) => r.streams[a.stream] === 'open').sort(sort);
  const check = reach.filter((r) => r.streams[a.stream] === 'check').sort(sort);
  const pool = open.concat(check);

  let top = open.slice(0, SHORTLIST_SIZE);
  const reasons = {};
  const pinned = a.pinned ? pool.find((r) => r.id === a.pinned) : null;
  if (pinned && !top.includes(pinned)) { top.pop(); top.push(pinned); }
  if (pinned) reasons[pinned.id] = 'Your pick: the route you or your family already have in mind.';

  // Safety net: keep enough routes that do not hang on one national rank.
  const need = safetyCount(a.marks);
  const safe = (r) => r.gateLevel <= 1;
  const rest = open.filter((r) => !top.includes(r) && safe(r));
  let count = top.filter(safe).length;
  while (count < need && rest.length) {
    const drop = top.slice().reverse().find((r) => !safe(r) && r !== pinned);
    if (!drop) break;
    const add = rest.shift();
    top[top.indexOf(drop)] = add;
    reasons[add.id] = 'Added as a Plan B route: it does not depend on one national rank.';
    count += 1;
  }
  top = top.slice().sort((x, y) => (x === pinned ? -1 : y === pinned ? 1 : sort(x, y)));

  const shortlist = top.map((r) => card12(r, { fit: r.streams[a.stream] === 'check' ? 'Check college by college' : 'Open to your stream', reason: reasons[r.id] || '' }));
  const topIds = top.map((r) => r.id);
  const others = open.filter((r) => !topIds.includes(r.id)).map((r) => card12(r, { fit: 'Open to your stream' }));
  const checks = check.filter((r) => !topIds.includes(r.id)).map((r) => card12(r, { fit: 'Check college by college' }));
  const costly = shortlist.filter((c) => c.costly);
  return {
    stage: 'after12', ready: true, answers: a, streamLabel: labelFor.stream12(a.stream),
    shortlist, others, checks, costly, safetyNeeded: need, safetyCount: top.filter(safe).length,
    money: budgetIllustration(a.budget),
  };
}

// ----- after 10th -----

const ROUTE10 = Object.fromEntries(ROUTES10.map((r, i) => [r.id, Object.assign({ order: i }, r)]));
const LINKS10 = {
  'science-pcm': ['nta', 'aicte'], 'science-pcb': ['nta'], 'science-pcmb': ['nta'],
  'commerce-maths': ['icai'], 'commerce-nomaths': ['icai'], arts: ['clat', 'cuet'],
  diploma: ['aicte', 'nats'], iti: ['dgt', 'nats'], 'open-school': ['nios'], 'skill-first': [],
};

function card10(r, extra) {
  const s = ROUTE_SCALE[r.id];
  return Object.assign({
    id: r.id, title: clean(r.label), subjects: clean(r.short), scale: s.scale, scaleLabel: SCALE[s.scale].label,
    why: clean(s.note), grow: clean(s.grow), risk: clean(r.watchOut), gate: clean(r.gate), length: clean(r.length),
    opens: clean(r.opens), closes: clean(r.closes), bestFor: clean(r.bestFor), firstMove: clean(r.firstMove),
    yearsToWork: r.yearsToWork, links: (LINKS10[r.id] || []).map((k) => OFFICIAL[k]), fit: '', reason: '',
  }, extra || {});
}

function sorter10(priority) {
  const by = {
    earn: (a, b) => a.yearsToWork[0] - b.yearsToWork[0],
    growth: (a, b) => SCALE_RANK[ROUTE_SCALE[a.id].scale] - SCALE_RANK[ROUTE_SCALE[b.id].scale],
    doors: (a, b) => a.closes.length - b.closes.length || b.opens.length - a.opens.length,
    balanced: (a, b) => SCALE_RANK[ROUTE_SCALE[a.id].scale] - SCALE_RANK[ROUTE_SCALE[b.id].scale],
  };
  const f = by[priority] || by.balanced;
  return (a, b) => f(a, b) || a.order - b.order;
}

export function plan10(rawAnswers) {
  const a = cleanAnswers('after10', rawAnswers);
  const reasonFor = {};
  const strong = [];
  const add = (id, why) => { if (!ROUTE10[id]) return; if (!strong.includes(id)) strong.push(id); if (why && !reasonFor[id]) reasonFor[id] = why; };

  a.interests.forEach((iid) => {
    const it = INTERESTS10.find((i) => i.id === iid);
    it.routes.forEach((rid) => {
      if (iid === 'money') {
        if (rid === 'commerce-maths' && a.maths === 'no') return;
        if (rid === 'commerce-nomaths' && a.maths === 'yes') return;
      }
      add(rid, 'Matches what you enjoy: ' + it.label.toLowerCase() + '.');
    });
  });
  if (a.earn === 'soon') { add('iti', 'Your family needs you earning within about 1 to 3 years.'); add('diploma', 'Your family needs you earning within about 1 to 3 years.'); }
  if (a.earn === 'noschool') add('open-school', 'You said you cannot attend regular school.');

  const ready = strong.length > 0 || a.earn !== 'later';
  if (!ready) return { ready: false, answers: a };

  const sort = sorter10(a.priority);
  let main = strong.map((id) => ROUTE10[id]).sort(sort);
  if (a.earn === 'noschool') main = [ROUTE10['open-school']].concat(main.filter((r) => r.id !== 'open-school'));
  const pinned = a.pinned && ROUTE10[a.pinned] ? ROUTE10[a.pinned] : null;
  if (pinned) {
    main = [pinned].concat(main.filter((r) => r.id !== pinned.id));
    reasonFor[pinned.id] = 'Your pick: the route you or your family already have in mind.';
  }
  main = main.filter((r) => r.id !== 'skill-first').slice(0, 5);
  const addOn = ROUTE10['skill-first'];
  const shortlist = main.map((r) => card10(r, { fit: 'Fits your answers', reason: reasonFor[r.id] || '' }));
  const mainIds = main.map((r) => r.id);
  const others = ROUTES10.filter((r) => !mainIds.includes(r.id) && r.id !== 'skill-first').sort(sort).map((r) => card10(r, { fit: 'Other route to know about' }));
  return {
    stage: 'after10', ready: true, answers: a, shortlist,
    addOn: card10(addOn, { fit: 'Add beside any route', reason: 'The skill layer that raises the ceiling of whichever route you pick.' }),
    others, money: budgetIllustration(a.budget),
  };
}

// ---------- shared booklet content ----------

export const PRIORITY_NOTE12 = {
  balanced: 'Routes are ordered by growth mark first, then by fewer exam hurdles.',
  earn: 'Routes are ordered by the shorter end of the length in the chart. Routes with no fixed length, such as exam-based posts, come after routes with a stated length.',
  stable: 'Routes whose chart text says stable or steady pay come first, then the rest by growth mark. Stable pay does not mean easy entry, so read the risk on each card.',
  growth: 'Routes are ordered by growth mark: Scalable first, then Scalable with a business layer, then Not so scalable.',
  exams: 'Routes are ordered by how many exam hurdles the chart lists: no national test first, then CUET or college tests, then national exams with their own rank.',
};
export const PRIORITY_NOTE10 = {
  balanced: 'Routes that match your answers are ordered by growth mark.',
  earn: 'Routes are ordered by how soon the standard path reaches full-time work, from the chart after 10th.',
  growth: 'Routes are ordered by growth mark: Scalable first, then Scalable with a business layer, then Not so scalable.',
  doors: 'Routes are ordered by how few doors each one closes, from the chart after 10th.',
};

/** Checks that apply to every route, shown once. No dates or fees are stated. */
export function generalChecks(stage, answers) {
  const out = [];
  if (stage === 'after12') {
    out.push('Open the official site for the route and read the current notice for eligibility, minimum marks, dates and fees. Do not rely on this booklet for any of them.');
    if (answers.marks === 'unknown') out.push('Your marks are not out yet. When they are, check last year\'s closing marks or rank for your category on the official counselling site.');
    else out.push('Check last year\'s closing marks or rank for your category on the official counselling site, and compare them with your own marks.');
  } else {
    out.push('Check the rule for your own state, board and school on the official site or with the school office before you count on a seat.');
    if (answers.marks === 'unknown' || answers.marks === 'under50' || answers.marks === '50to60') out.push('Ask what minimum marks the school or institute set last year for the group or trade you want.');
    else out.push('Ask the school or institute whether it sets a minimum in Maths and Science for the group you want.');
  }
  out.push('Write the total fee from the official fee page, and ask whether hostel, exam and material costs are in it.');
  return out;
}

/** Checks specific to one route card. */
export function checksFor(stage, card, answers) {
  const out = [];
  if (stage === 'after12') {
    out.push('Entry route in the chart: ' + card.gate + '.');
    out.push('Who can enter, in the chart: ' + card.who + '.');
    if (card.costly) out.push('The chart marks this route as costly. Get the full fee list in writing before you apply.');
  } else {
    out.push('Entry in the chart: ' + card.gate);
  }
  return out;
}

export function questionsFor(stage, plan) {
  const a = plan.answers;
  const first = plan.shortlist[0] ? plan.shortlist[0].title : 'the first route';
  const parents = [
    'If we choose ' + first + ', what is the most we can spend in total, and for how many years can we support it?',
    'Which part of this choice is mine to decide, and which part is the family\'s to decide?',
    'If the first plan does not work, what is the second plan we all accept?',
  ];
  if (a.city === 'small' || a.city === 'move') parents.push('Can I live away from home for study, and what would hostel or rent add to the cost?');
  if (a.city === 'metro' || a.city === 'mid') parents.push('Is it better to study in our city, or is a seat in another city worth the extra cost?');
  const teachers = [
    stage === 'after12'
      ? 'From what you have seen, what did students from my subject mix do after school, and what did they find hard?'
      : 'Which subject groups does our school offer, and what did last year\'s students with my marks and interests choose?',
    'Which subject or skill do you think I should strengthen before I decide?',
    'Where can I see the real work of someone in this field?',
  ];
  const counsellors = [
    'Which of the routes on my shortlist do you think is crowded, and what separates people who do well in it?',
    'How should I judge a college or institute: approval, fees in writing, and what its students did afterwards?',
    'What small real task can I try before I commit?',
    'What do you charge, and what exactly do I get? Ask for it in writing before you pay.',
  ];
  return { parents, teachers, counsellors };
}

export function plan30(stage, plan) {
  const a = plan.answers;
  const names = plan.shortlist.slice(0, 3).map((c) => c.title);
  const list = names.length ? names.join('; ') : 'your top routes';
  const cutoff = stage === 'after12'
    ? (a.marks === 'unknown' ? 'When your marks are out, look up last year\'s closing marks or rank for your category on the official site for each route.' : 'Look up last year\'s closing marks or rank for your category on the official site for each route and compare with your marks.')
    : 'Ask the school or institute for last year\'s admission minimums for each route.';
  const move = a.city === 'small' || a.city === 'move' ? ' Note the hostel or rent cost for any seat in another city.' : '';
  return [
    { when: 'Days 1 to 7', title: 'Narrow the list', items: [
      'Read each card on your shortlist: ' + list + '.',
      'Cross out any route you would not try even if everyone approved. Write why.',
      'Fill the Route comparison worksheet with your three best routes.',
    ] },
    { when: 'Days 8 to 14', title: 'Check the rules', items: [
      'Open the official site for each route and write down eligibility, the entry exam and the application window in your own words.',
      cutoff,
      'Write the total fee for each route from the official fee page, and note whether the fee list is complete.' + move,
    ] },
    { when: 'Days 15 to 21', title: 'Talk to people', items: [
      'Ask the parent, teacher and counsellor questions from the booklet and write the answers down.',
      'Find one person who does this work and ask what their first year was like.',
    ] },
    { when: 'Days 22 to 30', title: 'Try it and decide', items: [
      'Do one small real task from your top route and note what you liked and what was hard.',
      'Say your choice and your second plan out loud to a parent or teacher.',
      'Write one next step with a date, and a review date.',
    ] },
  ];
}

export { CHECKPOINTS, GATES };
