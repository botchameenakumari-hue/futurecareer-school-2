// Doors table shared by the career chart after 10th page and the route finder.
// yes = the standard rule keeps the door open, no = the standard rule closes it, check = depends on the course or state.
export type DoorCell = 'yes' | 'no' | 'check';
export type DoorRow = { door: string; cells: DoorCell[]; note: string; scale: 'high' | 'mid' | 'low'; why: string };
export const DOOR_COLS = ['PCM', 'PCB', 'PCMB', 'Commerce', 'Arts', 'Diploma', 'ITI'];
export const DOORS: DoorRow[] = [
  { door: 'B.Tech / B.E. degree', cells: ['yes', 'no', 'yes', 'no', 'no', 'check', 'no'], note: 'Needs Maths in Class 12. A diploma can lead to second-year lateral entry; verify the state and college.', scale: 'mid', why: 'Crowded as a degree alone; scales with product, automation or AI skills.' },
  { door: 'MBBS, BDS and NEET medical seats', cells: ['no', 'yes', 'yes', 'no', 'no', 'no', 'no'], note: 'Needs Biology in Class 12 with NEET UG.', scale: 'low', why: 'Competition at several levels (NEET, postgraduate seats, practice) with few seats; effort alone may not lead to a seat.' },
  { door: 'CA, CMA, CS professional courses', cells: ['yes', 'yes', 'yes', 'yes', 'yes', 'check', 'check'], note: 'Open to every stream after Class 12; commerce subjects make the first exams easier.', scale: 'mid', why: 'A practice can grow into advisory work, but the exam ladder is long and crowded.' },
  { door: 'Law (integrated 5-year)', cells: ['yes', 'yes', 'yes', 'yes', 'yes', 'check', 'check'], note: 'Entry tests such as CLAT and CUET take students from any stream after Class 12.', scale: 'low', why: 'Entrance competition, then a slow climb where few reach the top.' },
  { door: 'Design degrees', cells: ['yes', 'yes', 'yes', 'yes', 'yes', 'check', 'check'], note: 'Design entrance tests usually accept any stream; the portfolio carries the weight.', scale: 'high', why: 'Portfolio and skill decide pay; freelance and studio paths are open.' },
  { door: 'BBA, B.Com, BMS', cells: ['yes', 'yes', 'yes', 'yes', 'yes', 'check', 'check'], note: 'Most accept any stream; some want Maths or Accountancy. Check each college.', scale: 'low', why: 'A general degree is crowded; it grows only with a domain skill or a venture.' },
  { door: 'BCA and computing degrees', cells: ['yes', 'check', 'yes', 'check', 'check', 'check', 'no'], note: 'Many colleges ask for Maths or Computer subjects in Class 12. Read the rule on each admission page.', scale: 'high', why: 'Skills sell directly as software, data and automation work.' },
  { door: 'NDA (Air Force and Navy wings)', cells: ['yes', 'no', 'yes', 'no', 'no', 'no', 'no'], note: 'Needs Physics and Maths in Class 12. The Army wing accepts other streams; check the current notice.', scale: 'low', why: 'A very small intake and strict standards; most applicants do not get in.' },
  { door: 'Civil services and many government exams', cells: ['yes', 'yes', 'yes', 'yes', 'yes', 'check', 'check'], note: 'These ask for a degree in any subject, so no stream closes them. Diploma and ITI holders need to add a degree first.', scale: 'low', why: 'Very large numbers for few posts, with repeated attempts; keep a parallel skill.' },
];
