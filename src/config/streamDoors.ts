// Doors table shared by the career chart after 10th page and the route finder.
// yes = the standard rule keeps the door open, no = the standard rule closes it, check = depends on the course or state.
export type DoorCell = 'yes' | 'no' | 'check';
export type DoorRow = { door: string; cells: DoorCell[]; note: string };
export const DOOR_COLS = ['PCM', 'PCB', 'PCMB', 'Commerce', 'Arts', 'Diploma', 'ITI'];
export const DOORS: DoorRow[] = [
  { door: 'B.Tech / B.E. degree', cells: ['yes', 'no', 'yes', 'no', 'no', 'check', 'no'], note: 'Needs Maths in Class 12. A diploma can lead to second-year lateral entry; verify the state and college.' },
  { door: 'MBBS, BDS and NEET medical seats', cells: ['no', 'yes', 'yes', 'no', 'no', 'no', 'no'], note: 'Needs Biology in Class 12 with NEET UG.' },
  { door: 'CA, CMA, CS professional courses', cells: ['yes', 'yes', 'yes', 'yes', 'yes', 'check', 'check'], note: 'Open to every stream after Class 12; commerce subjects make the first exams easier.' },
  { door: 'Law (integrated 5-year)', cells: ['yes', 'yes', 'yes', 'yes', 'yes', 'check', 'check'], note: 'Entry tests such as CLAT and CUET take students from any stream after Class 12.' },
  { door: 'Design degrees', cells: ['yes', 'yes', 'yes', 'yes', 'yes', 'check', 'check'], note: 'Design entrance tests usually accept any stream; the portfolio carries the weight.' },
  { door: 'BBA, B.Com, BMS', cells: ['yes', 'yes', 'yes', 'yes', 'yes', 'check', 'check'], note: 'Most accept any stream; some want Maths or Accountancy. Check each college.' },
  { door: 'BCA and computing degrees', cells: ['yes', 'check', 'yes', 'check', 'check', 'check', 'no'], note: 'Many colleges ask for Maths or Computer subjects in Class 12. Read the rule on each admission page.' },
  { door: 'NDA (Air Force and Navy wings)', cells: ['yes', 'no', 'yes', 'no', 'no', 'no', 'no'], note: 'Needs Physics and Maths in Class 12. The Army wing accepts other streams; check the current notice.' },
  { door: 'Civil services and many government exams', cells: ['yes', 'yes', 'yes', 'yes', 'yes', 'check', 'check'], note: 'These ask for a degree in any subject, so no stream closes them. Diploma and ITI holders need to add a degree first.' },
];
