// Planning model behind the personal route finder on the career chart after 10th.
// These weights are assumptions made for planning conversations. They are not official
// rules, cut-offs or predictions, and every real rule must be checked on the official source.

export type SubjectKey = 'maths' | 'science' | 'social' | 'lang' | 'hands' | 'creative';
export type InterestKey = 'build' | 'health' | 'money' | 'write' | 'tech' | 'create' | 'outdoors';

export const SUBJECTS: { key: SubjectKey; label: string; hint: string }[] = [
  { key: 'maths', label: 'Maths', hint: 'Solving problems with numbers and steps' },
  { key: 'science', label: 'Science', hint: 'Physics, Chemistry and Biology topics' },
  { key: 'social', label: 'Social science', hint: 'History, civics, geography and economics' },
  { key: 'lang', label: 'Languages and English', hint: 'Reading, writing and speaking' },
  { key: 'hands', label: 'Hands-on and practical work', hint: 'Making, fixing, lab work and working with tools' },
  { key: 'creative', label: 'Drawing, design and creative work', hint: 'Art, design, media and ideas' },
];

export const INTERESTS: { key: InterestKey; label: string }[] = [
  { key: 'build', label: 'Building, fixing and how machines work' },
  { key: 'health', label: 'Helping people, health and the human body' },
  { key: 'money', label: 'Business, money and markets' },
  { key: 'write', label: 'Writing, speaking, law and working with people' },
  { key: 'tech', label: 'Computers, apps and games' },
  { key: 'create', label: 'Design, art, media and making content' },
  { key: 'outdoors', label: 'Farming, nature, sports and uniformed services' },
];

export const MARKS_BANDS = ['Below 40%', '40% to 50%', '50% to 60%', '60% to 70%', '70% to 80%', '80% to 90%', '90% and above'];

export const MONEY_OPTIONS = [
  { key: 'tight', label: 'Money is tight. I need low cost and earlier earning.' },
  { key: 'moderate', label: 'Money is limited but manageable.' },
  { key: 'flexible', label: 'Money is not the main limit.' },
];
export const PRESSURE_OPTIONS = [
  { key: 'low', label: 'I would rather avoid long competitive exam preparation.' },
  { key: 'medium', label: 'I can handle some exam preparation.' },
  { key: 'high', label: 'I am willing to prepare hard for a big entrance exam.' },
];
export const EARLY_OPTIONS = [
  { key: 'yes', label: 'Yes, earning early matters a lot.' },
  { key: 'either', label: 'It matters a little.' },
  { key: 'no', label: 'No, I can study for longer.' },
];
export const LEANING_OPTIONS = [
  { key: '', label: 'My child has not said, or I have not asked yet' },
  { key: 'science', label: 'Science' },
  { key: 'commerce', label: 'Commerce' },
  { key: 'arts', label: 'Arts and Humanities' },
  { key: 'diploma', label: 'A technical route such as diploma or ITI' },
  { key: 'open', label: 'Flexible, skill-first or open school routes' },
];

export type RouteModel = {
  /** Subject weights, summing to 1. */
  w: Record<SubjectKey, number>;
  /** Interest affinity: 1 strong, 0.5 some, 0 none. */
  aff: Record<InterestKey, number>;
  /** Planning level of marks (index in MARKS_BANDS) at which seats and staying power feel comfortable. */
  need: number;
  /** Extra cost beyond school fees, such as coaching, entrance preparation and hostel: 0 low, 1 medium, 2 high. */
  cost: 0 | 1 | 2;
  /** Entrance-exam pressure: 0 none, 1 light, 2 moderate, 3 heavy. */
  pressure: 0 | 1 | 2 | 3;
  /** Column in the doors table used for the optionality score. */
  doorCol: string;
  pressureNote: string;
  costNote: string;
  family: 'science' | 'commerce' | 'arts' | 'vocational' | 'open';
};

const W = (maths: number, science: number, social: number, lang: number, hands: number, creative: number) => ({ maths, science, social, lang, hands, creative });
const A = (build: number, health: number, money: number, write: number, tech: number, create: number, outdoors: number) => ({ build, health, money, write, tech, create, outdoors });

export const ROUTE_MODEL: Record<string, RouteModel> = {
  'science-pcm': { w: W(0.4, 0.3, 0, 0.05, 0.15, 0.1), aff: A(1, 0, 0.3, 0, 1, 0.3, 0.3), need: 4, cost: 2, pressure: 3, doorCol: 'PCM', family: 'science',
    pressureNote: 'Engineering entrance tests such as JEE Main and state tests are heavy and need steady preparation over two years.',
    costNote: 'Coaching, books and a possible move to a hostel city add cost. Government and state college seats cost far less than private ones.' },
  'science-pcb': { w: W(0.05, 0.45, 0.05, 0.15, 0.2, 0.1), aff: A(0, 1, 0, 0.2, 0, 0, 0.5), need: 4, cost: 2, pressure: 3, doorCol: 'PCB', family: 'science',
    pressureNote: 'NEET UG is a very large gate with a small opening, so a second plan is part of the route.',
    costNote: 'Coaching and preparation are costly, and private medical seats are far more costly than government ones.' },
  'science-pcmb': { w: W(0.3, 0.4, 0, 0.1, 0.1, 0.1), aff: A(0.7, 0.7, 0, 0, 0.6, 0, 0.3), need: 5, cost: 2, pressure: 3, doorCol: 'PCMB', family: 'science',
    pressureNote: 'Two heavy entrance tracks at once, so the preparation load is the largest of all routes.',
    costNote: 'The same cost as science, with more coaching hours.' },
  'commerce-maths': { w: W(0.35, 0.05, 0.15, 0.2, 0.05, 0.2), aff: A(0, 0, 1, 0.3, 0.5, 0.2, 0), need: 3, cost: 1, pressure: 2, doorCol: 'Commerce', family: 'commerce',
    pressureNote: 'CUET, integrated management tests and professional courses such as CA each need preparation, but most can be taken from any stream.',
    costNote: 'Moderate. Professional exams add coaching and fee costs over several years.' },
  'commerce-nomaths': { w: W(0.1, 0, 0.25, 0.3, 0.05, 0.3), aff: A(0, 0, 1, 0.5, 0.2, 0.3, 0), need: 2, cost: 1, pressure: 1, doorCol: 'Commerce', family: 'commerce',
    pressureNote: 'Lighter than science. Preparation is mostly for CUET and professional courses, and starts after Class 12.',
    costNote: 'Moderate. Many degree seats in government colleges are low cost.' },
  arts: { w: W(0.05, 0, 0.35, 0.35, 0.05, 0.2), aff: A(0, 0.3, 0.2, 1, 0.1, 1, 0.3), need: 2, cost: 0, pressure: 2, doorCol: 'Arts', family: 'arts',
    pressureNote: 'Light at first. Law, design and some central university seats need entrance tests such as CLAT, CUET or design tests.',
    costNote: 'Low to moderate. A portfolio or entrance coaching adds cost for law and design.' },
  diploma: { w: W(0.2, 0.2, 0, 0.1, 0.4, 0.1), aff: A(1, 0, 0.1, 0, 0.7, 0.3, 0.3), need: 2, cost: 1, pressure: 1, doorCol: 'Diploma', family: 'vocational',
    pressureNote: 'A state entrance or merit process. Lighter than engineering entrance tests.',
    costNote: 'Government polytechnics cost far less than private ones. Check AICTE approval before paying.' },
  iti: { w: W(0.1, 0.1, 0, 0.1, 0.6, 0.1), aff: A(1, 0, 0, 0, 0.2, 0.2, 0.5), need: 1, cost: 0, pressure: 0, doorCol: 'ITI', family: 'vocational',
    pressureNote: 'Little entrance pressure. Seats and trades differ by state.',
    costNote: 'Low in government ITIs.' },
  'open-school': { w: W(0.15, 0.15, 0.15, 0.2, 0.15, 0.2), aff: A(0.2, 0.2, 0.5, 0.5, 0.5, 0.7, 0.2), need: 0, cost: 0, pressure: 0, doorCol: 'Arts', family: 'open',
    pressureNote: 'No entrance pressure. The pressure is self-discipline.',
    costNote: 'Low. It suits students who also need to work or train.' },
  'skill-first': { w: W(0.1, 0.1, 0.1, 0.25, 0.2, 0.25), aff: A(0.3, 0, 0.5, 0.3, 1, 1, 0.2), need: 0, cost: 0, pressure: 0, doorCol: 'Arts', family: 'open',
    pressureNote: 'No entrance pressure. The pressure is building real proof.',
    costNote: 'Free to low if you choose carefully.' },
};

export const FAMILY_LABELS: Record<string, string> = {
  science: 'Science',
  commerce: 'Commerce',
  arts: 'Arts and Humanities',
  vocational: 'Vocational (diploma and ITI)',
  open: 'Flexible and skill-first',
};

export const PRESSURE_LABELS = ['None', 'Light', 'Moderate', 'Heavy'];
export const COST_LABELS = ['Low', 'Medium', 'High'];

export const PARENT_QUESTIONS = [
  'Which subject do you enjoy most, and which one do you avoid when you can?',
  'Which one of these routes can you picture yourself doing on a normal Tuesday in two years?',
  'What worries you most about each route we are considering?',
  'If the entrance exam for a route goes badly, what would you do next?',
  'Which person working in each field could we both talk to this month?',
  'What would you like me to do, and not do, while you decide?',
];

export const SENSITIVE_NOTE =
  'This tool compares routes using what you enter. It does not know your school, board, state or exact marks rules, and it cannot predict results or jobs. A counsellor or school can add what it cannot see.';
