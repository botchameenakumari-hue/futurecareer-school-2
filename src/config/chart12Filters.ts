// Filterable attributes for each row of the career chart after 12th. One entry per row of
// chartRows, in the same order, matched by the start of the route name so a reorder is caught.
// Levels are indicative planning bands, not statistics. Confirm rules on official sites.

export type Eligibility = 'yes' | 'check' | 'no';
export const STREAMS = ['PCM', 'PCB', 'PCMB', 'Commerce', 'Arts'] as const;
export type StreamKey = (typeof STREAMS)[number];
export type Need = 'required' | 'helps' | 'no';
export type ExamTag = 'jee' | 'neet' | 'cuet' | 'law' | 'design' | 'nda' | 'state' | 'none';

export type RowFilter = {
  match: string;
  /** Eligibility by Class 12 stream. */
  streams: Record<StreamKey, Eligibility>;
  maths: Need;
  biology: Need;
  exams: ExamTag[];
  /** Standard length in years [min, max]; null where it varies too much to state. */
  years: [number, number] | null;
  /** Extra cost bands (0 low, 1 medium, 2 high, 3 very high) as [cheapest, dearest] depending on government or private seat. */
  cost: [number, number];
  portfolio: Need;
  /** 0 rare, 1 possible, 2 common. */
  employment: 0 | 1 | 2;
  freelance: 0 | 1 | 2;
  government: 0 | 1 | 2;
  overseas: 0 | 1 | 2;
  /** How much of the daily work AI tools are changing: 0 low, 1 medium, 2 high. */
  ai: 0 | 1 | 2;
  /** 0 rarely remote, 1 partly remote, 2 often remote. */
  wfh: 0 | 1 | 2;
  notes: { cost: string; overseas: string; ai: string; wfh: string };
};

const S = (pcm: Eligibility, pcb: Eligibility, pcmb: Eligibility, com: Eligibility, arts: Eligibility): Record<StreamKey, Eligibility> => ({ PCM: pcm, PCB: pcb, PCMB: pcmb, Commerce: com, Arts: arts });
const ANY = S('yes', 'yes', 'yes', 'yes', 'yes');

export const ROW_FILTERS: RowFilter[] = [
  { match: 'B.Tech', streams: S('yes', 'no', 'yes', 'no', 'no'), maths: 'required', biology: 'no', exams: ['jee', 'state'], years: [4, 4], cost: [1, 3], portfolio: 'helps', employment: 2, freelance: 1, government: 2, overseas: 2, ai: 2, wfh: 1,
    notes: { cost: 'Government and state seats cost far less than private ones. Hostel and coaching add to it.', overseas: 'Strong for tech roles, subject to visa and licence rules in each country.', ai: 'Routine coding and testing work is changing fast, so AI skills matter more than ever.', wfh: 'Software roles are often remote or hybrid. Core electronics and hardware work is less so.' } },
  { match: 'BCA', streams: S('yes', 'check', 'yes', 'check', 'check'), maths: 'helps', biology: 'no', exams: ['cuet', 'state'], years: [3, 4], cost: [0, 2], portfolio: 'helps', employment: 2, freelance: 2, government: 1, overseas: 2, ai: 2, wfh: 2,
    notes: { cost: 'Usually cheaper than B.Tech. Fees differ widely between colleges.', overseas: 'Skills travel well, but employers abroad look at proof of work and sometimes a further degree.', ai: 'Routine coding and data cleaning are changing fast. Proof of real projects matters more.', wfh: 'Many roles can be remote or hybrid.' } },
  { match: 'BBA', streams: ANY, maths: 'helps', biology: 'no', exams: ['cuet', 'state'], years: [3, 5], cost: [1, 3], portfolio: 'no', employment: 2, freelance: 1, government: 1, overseas: 1, ai: 2, wfh: 1,
    notes: { cost: 'Integrated management programmes at top institutes are costly. Many university BBAs are moderate.', overseas: 'Depends on the college brand and a later postgraduate degree.', ai: 'Reporting, research and marketing tasks are changing, so analytics and AI skills help.', wfh: 'Mixed. Many roles are hybrid.' } },
  { match: 'B.Com', streams: ANY, maths: 'no', biology: 'no', exams: ['cuet', 'state'], years: [3, 7], cost: [0, 2], portfolio: 'helps', employment: 2, freelance: 1, government: 2, overseas: 1, ai: 2, wfh: 1,
    notes: { cost: 'Degree seats can be low cost. CA, CS and CMA add fees and coaching over several years.', overseas: 'Some qualifications are recognised abroad with extra steps. Check each country.', ai: 'Routine bookkeeping and data entry are being automated, so advisory and analysis skills matter more.', wfh: 'Many accounting and finance tasks can be hybrid or remote.' } },
  { match: 'Integrated law', streams: ANY, maths: 'no', biology: 'no', exams: ['law', 'cuet'], years: [5, 5], cost: [1, 3], portfolio: 'no', employment: 1, freelance: 1, government: 2, overseas: 0, ai: 1, wfh: 1,
    notes: { cost: 'National law university fees are high. Other universities vary.', overseas: 'Law is local, so practising abroad usually needs extra qualification in that country.', ai: 'Research and drafting tools are changing the work. Judgement, advocacy and client trust remain central.', wfh: 'Mixed. Court work is in person; research and drafting can be remote.' } },
  { match: 'Design', streams: ANY, maths: 'no', biology: 'no', exams: ['design'], years: [4, 4], cost: [1, 3], portfolio: 'required', employment: 2, freelance: 2, government: 1, overseas: 1, ai: 2, wfh: 2,
    notes: { cost: 'Private design schools are costly. Government institutes cost far less but are very competitive.', overseas: 'A strong portfolio travels well. Visa rules decide the rest.', ai: 'Image and layout tools are changing the work fast. Taste, research and client skills matter more.', wfh: 'Many design roles can be remote or hybrid.' } },
  { match: 'MBBS', streams: S('no', 'yes', 'yes', 'no', 'no'), maths: 'no', biology: 'required', exams: ['neet'], years: [4, 5.5], cost: [1, 3], portfolio: 'no', employment: 2, freelance: 0, government: 2, overseas: 1, ai: 1, wfh: 0,
    notes: { cost: 'Government seats are low cost, but very few. Private seats can cost many times more.', overseas: 'Practising abroad needs that country\'s licensing exams and training.', ai: 'Tools assist with images and records, but care is hands-on and regulated.', wfh: 'Rarely remote, apart from some consultation and records work.' } },
  { match: 'BSc Nursing', streams: S('check', 'yes', 'yes', 'no', 'no'), maths: 'no', biology: 'required', exams: ['state'], years: [4, 4], cost: [0, 2], portfolio: 'no', employment: 2, freelance: 0, government: 2, overseas: 1, ai: 0, wfh: 0,
    notes: { cost: 'Government seats are low cost. Private colleges vary widely.', overseas: 'Demand exists in many countries, but each needs its own licence and language test.', ai: 'Care work is hands-on, so it is less exposed than desk work.', wfh: 'Rarely remote.' } },
  { match: 'Defence', streams: S('yes', 'check', 'yes', 'check', 'check'), maths: 'required', biology: 'no', exams: ['nda'], years: null, cost: [0, 0], portfolio: 'no', employment: 2, freelance: 0, government: 2, overseas: 0, ai: 0, wfh: 0,
    notes: { cost: 'Training is paid. The cost is mainly preparation time.', overseas: 'A career in service is in India.', ai: 'Technology is changing defence, but roles are hands-on and rule-bound.', wfh: 'Not applicable.' } },
  { match: 'Teacher', streams: ANY, maths: 'no', biology: 'no', exams: ['state'], years: [4, 4], cost: [0, 1], portfolio: 'no', employment: 2, freelance: 2, government: 2, overseas: 0, ai: 1, wfh: 1,
    notes: { cost: 'Usually low to moderate.', overseas: 'Teaching abroad usually needs local certification.', ai: 'Tools help with planning and practice. Relationship and classroom skills stay central.', wfh: 'Online teaching and tutoring are possible beside or instead of classroom work.' } },
  { match: 'Skill-first', streams: ANY, maths: 'no', biology: 'no', exams: ['none'], years: [0.5, 3], cost: [0, 1], portfolio: 'required', employment: 1, freelance: 2, government: 1, overseas: 1, ai: 1, wfh: 2,
    notes: { cost: 'Free to low if you choose carefully and avoid paid certificate piles.', overseas: 'Depends entirely on the proof of skill you build.', ai: 'Digital skills are changing fast; trades are less exposed. Choose the skill with that in mind.', wfh: 'Digital and creative skills are often remote. Trades are not.' } },
];

export const EXAM_LABELS: Record<ExamTag, string> = {
  jee: 'JEE Main, JEE Advanced and engineering tests',
  neet: 'NEET UG (medical)',
  cuet: 'CUET UG or college tests',
  law: 'CLAT, AILET and law tests',
  design: 'Design tests (UCEED, NID, NIFT)',
  nda: 'UPSC NDA with SSB and medical',
  state: 'State counselling and university tests',
  none: 'No national entrance test',
};
export const COST_BANDS = ['Low', 'Medium', 'High', 'Very high'];
export const LEVEL3 = ['Rare', 'Possible', 'Common'];
export const AI3 = ['Low', 'Medium', 'High'];
export const WFH3 = ['Rarely remote', 'Partly remote', 'Often remote'];
export const OVERSEAS3 = ['Low', 'Medium', 'High'];
