export type CourseStream = 'PCM' | 'PCB' | 'PCMB' | 'Commerce' | 'Arts';
export type CourseSubject = 'Physics' | 'Chemistry' | 'Maths' | 'Biology' | 'English' | 'Computer Science' | 'Economics' | 'Accountancy' | 'Business Studies';
export type CourseFit = 'open' | 'conditional' | 'usually-closed';

export type FinderSource = {
  label: string;
  url: string;
};

export type CourseEligibilityRecord = {
  id: string;
  course: string;
  duration: string;
  exam: string;
  /** Exact searchable exam tags; the prose exam field may also describe non-exam routes. */
  examTags: string[];
  fit: Record<CourseStream, CourseFit>;
  requiredSubjects: CourseSubject[];
  anyOfSubjects?: CourseSubject[];
  subjectRule: string;
  explanation: string;
  sources: FinderSource[];
};

export const COURSE_FINDER_META = {
  editoriallyReviewedOn: '11 October 2026',
  year: '2026 admission cycle',
  recordStatus: 'source-mapped-not-independently-verified',
  sourceReview: {
    reviewedOn: '11 October 2026',
    method: 'The official authority or admissions starting page linked for each route was opened during editorial review and checked for the relevant current-cycle document or route context.',
    confirms: 'The linked authority and starting point are identifiable and the route can be checked from an official source.',
    doesNotConfirm: 'It does not verify one institute, state, category, marks, age, domicile or year-specific admission outcome for every student.',
  },
  verificationGap: 'Official starting pages are linked, but each exact institute, state, category, marks, age, domicile and year-specific rule still requires human checking before an admission claim.',
  disclaimer:
    'This is a first-pass course and exam screen, not an admission decision. University, state, category, age, marks, domicile and year-specific rules can change the result. Open the source and the institute notice before applying.',
};

const SOURCE = {
  jee: { label: 'JEE Main information bulletin (NTA)', url: 'https://jeemain.nta.nic.in/information-bulletin/' },
  neet: { label: 'NEET UG documents (NTA)', url: 'https://neet.nta.nic.in/documents/' },
  cuet: { label: 'CUET UG information bulletin (NTA)', url: 'https://cuet.nta.nic.in/documents/page/3/' },
  clat: { label: 'CLAT UG eligibility (Consortium of NLUs)', url: 'https://clat2026.consortiumofnlus.ac.in/clat-2026/ug-eligibility.html' },
  uceed: { label: 'UCEED BDes eligibility (IIT Bombay)', url: 'https://www.uceed.iitb.ac.in/2026/eligibility-admission.html' },
  nid: { label: 'NID admissions', url: 'https://admissions.nid.edu/' },
  nift: { label: 'NIFT admissions (official institute page)', url: 'https://www.nift.ac.in/admissions' },
  nchm: { label: 'NCHMCT hospitality course and admissions information', url: 'https://www.nchm.nic.in/node/156' },
  icai: { label: 'ICAI student services', url: 'https://www.icai.org/' },
  ncet: { label: 'NCET (NTA)', url: 'https://exams.nta.ac.in/NCET/' },
  dgt: { label: 'DGT Craftsmen Training Scheme', url: 'https://dgt.gov.in/en/CTS' },
  knruhsNursing: { label: 'KNRUHS Telangana B.Sc. Nursing admission notice', url: 'https://www.knruhs.telangana.gov.in/wp-content/uploads/notifications/20260916054022_KNRUHS-BSC-NURSING-ADMISSIONS-UNDER-CONVENER-QUOTA-FOR-THE-AY-2026-27-NOTIFICATION-FOR-REGISTRATION-OF-CANDIDATES-FOR-ADMISSION-INTO-BSC-NURSING-COURSE.pdf' },
} as const;

const all = { PCM: 'open', PCB: 'open', PCMB: 'open', Commerce: 'open', Arts: 'open' } as const;

export const COURSE_ELIGIBILITY_RECORDS: CourseEligibilityRecord[] = [
  {
    id: 'btech-be',
    course: 'B.E. / B.Tech',
    duration: 'Usually 4 years',
    exam: 'JEE Main, state or university engineering test',
    examTags: ['JEE Main'],
    fit: { PCM: 'open', PCB: 'usually-closed', PCMB: 'open', Commerce: 'usually-closed', Arts: 'usually-closed' },
    requiredSubjects: ['Physics', 'Chemistry', 'Maths'],
    subjectRule: 'Physics, Chemistry and Maths are the usual qualifying subjects; branch and institute rules still vary.',
    explanation: 'A broad engineering label is not one single rule. Check the exact branch and counselling bulletin.',
    sources: [SOURCE.jee],
  },
  {
    id: 'architecture-planning',
    course: 'B.Arch. / B.Plan',
    duration: 'Usually 5 years for B.Arch.; B.Plan varies',
    exam: 'JEE Main Paper 2, NATA or a state/university route',
    examTags: ['JEE Main Paper 2', 'NATA'],
    fit: { PCM: 'open', PCB: 'usually-closed', PCMB: 'open', Commerce: 'usually-closed', Arts: 'usually-closed' },
    requiredSubjects: ['Maths'],
    subjectRule: 'Maths is a key eligibility gate for the common architecture routes; confirm the current Council of Architecture and institute rule.',
    explanation: 'The entrance paper and qualifying subjects are separate checks. A design portfolio alone does not replace the academic gate.',
    sources: [SOURCE.jee, { label: 'Council of Architecture', url: 'https://coa.gov.in/' }],
  },
  {
    id: 'medical-ug',
    course: 'MBBS / BDS / AYUSH undergraduate routes',
    duration: 'Usually 4.5 to 5.5 years plus internship, depending on course',
    exam: 'NEET UG',
    examTags: ['NEET UG'],
    fit: { PCM: 'usually-closed', PCB: 'open', PCMB: 'open', Commerce: 'usually-closed', Arts: 'usually-closed' },
    requiredSubjects: ['Physics', 'Chemistry', 'Biology', 'English'],
    subjectRule: 'Physics, Chemistry, Biology/Biotechnology and English are the usual Class 12 subject gate for NEET-linked medical routes.',
    explanation: 'NEET qualification is only one gate; counselling, marks, category and the exact regulated course still apply.',
    sources: [SOURCE.neet],
  },
  {
    id: 'nursing-allied',
    course: 'B.Sc. Nursing and selected allied-health degrees',
    duration: 'Usually 4 years',
    exam: 'State, university or institute route; some admissions use NEET',
    examTags: ['NEET UG'],
    fit: { PCM: 'conditional', PCB: 'open', PCMB: 'open', Commerce: 'usually-closed', Arts: 'usually-closed' },
    requiredSubjects: ['Physics', 'Chemistry', 'Biology'],
    subjectRule: 'Biology is commonly required, but the entrance and minimum-mark rule belongs to the state or institution.',
    explanation: 'Do not use the MBBS rule as a proxy for every allied-health course. Open the target college notice.',
    sources: [SOURCE.neet],
  },
  {
    id: 'bsc-nursing-telangana-state',
    course: 'B.Sc. Nursing — Telangana state route',
    duration: 'Usually 4 years',
    exam: 'TG-EAPCET 2026 (Telangana state competent-authority route)',
    examTags: ['TG-EAPCET'],
    fit: { PCM: 'usually-closed', PCB: 'open', PCMB: 'open', Commerce: 'usually-closed', Arts: 'usually-closed' },
    requiredSubjects: ['Physics', 'Chemistry', 'Biology', 'English'],
    subjectRule: 'The 2026-27 Telangana state notice uses TG-EAPCET qualification and requires the stated PCB, English, marks, age and local-status conditions; read the current notice before applying.',
    explanation: 'This is a state-specific exception to the broad nursing record above. Andhra Pradesh and other states may use a different entrance route.',
    sources: [SOURCE.knruhsNursing],
  },
  {
    id: 'bca-computer',
    course: 'BCA / B.Sc. Computer Science and related computing degrees',
    duration: 'Usually 3 to 4 years',
    exam: 'CUET UG, state or university route',
    examTags: ['CUET UG'],
    fit: { PCM: 'open', PCB: 'conditional', PCMB: 'open', Commerce: 'conditional', Arts: 'conditional' },
    requiredSubjects: [],
    anyOfSubjects: ['Maths', 'Computer Science'],
    subjectRule: 'Some colleges require Maths; others accept Computer Science or broader subject combinations.',
    explanation: 'This is intentionally conditional because the same course name can have different subject rules across universities.',
    sources: [SOURCE.cuet],
  },
  {
    id: 'bcom-finance',
    course: 'B.Com. / finance and accounting degrees',
    duration: 'Usually 3 to 4 years',
    exam: 'CUET UG, state or university route',
    examTags: ['CUET UG'],
    fit: all,
    requiredSubjects: [],
    subjectRule: 'Many programmes accept any stream; honours, economics and institution-specific combinations can add subject requirements.',
    explanation: 'Commerce is helpful but not the only entry route. Check the exact programme and CUET subject combination.',
    sources: [SOURCE.cuet, SOURCE.icai],
  },
  {
    id: 'business-management',
    course: 'BBA / BMS / integrated management',
    duration: 'Usually 3 to 5 years',
    exam: 'CUET UG, IPMAT/JIPMAT, state or university route',
    examTags: ['CUET UG', 'IPMAT', 'JIPMAT'],
    fit: all,
    requiredSubjects: [],
    subjectRule: 'Many programmes accept any stream; Maths, aptitude and minimum-mark rules differ by institute.',
    explanation: '“Any stream” does not mean every management programme has the same aptitude or subject requirement.',
    sources: [SOURCE.cuet],
  },
  {
    id: 'integrated-law',
    course: 'Five-year integrated law',
    duration: 'Usually 5 years',
    exam: 'CLAT, AILET, CUET or university test',
    examTags: ['CLAT', 'AILET', 'CUET UG'],
    fit: all,
    requiredSubjects: [],
    subjectRule: 'The CLAT 2026 UG rule accepts 10+2 or equivalent with the stated minimum marks; each university can add its own conditions.',
    explanation: 'Use the consortium rule for CLAT and the individual university notice for the final admission condition.',
    sources: [SOURCE.clat, SOURCE.cuet],
  },
  {
    id: 'design',
    course: 'B.Des. / fashion and communication design',
    duration: 'Usually 4 years',
    exam: 'UCEED, NID DAT, NIFT or institute route',
    examTags: ['UCEED', 'NID DAT', 'NIFT'],
    fit: all,
    requiredSubjects: [],
    subjectRule: 'Design institutes differ: UCEED 2026 allows several streams for participating institutes, but institute and age/year rules still apply.',
    explanation: 'A portfolio helps, but it does not override the qualifying-exam, age or institute-specific rule.',
    sources: [SOURCE.uceed, SOURCE.nid, SOURCE.nift],
  },
  {
    id: 'agriculture',
    course: 'Agriculture and allied sciences',
    duration: 'Usually 4 years',
    exam: 'CUET (ICAR-UG), state or university route',
    examTags: ['CUET (ICAR-UG)'],
    fit: { PCM: 'conditional', PCB: 'conditional', PCMB: 'open', Commerce: 'usually-closed', Arts: 'usually-closed' },
    requiredSubjects: ['Physics', 'Chemistry'],
    anyOfSubjects: ['Maths', 'Biology'],
    subjectRule: 'Science subjects are commonly required; the exact combination depends on the programme and counselling authority.',
    explanation: 'Agriculture is not one uniform admission rule. Verify the ICAR or university subject mapping before choosing a form.',
    sources: [SOURCE.cuet, { label: 'ICAR', url: 'https://www.icar.gov.in/' }],
  },
  {
    id: 'teacher-education',
    course: 'Integrated teacher education (ITEP and related routes)',
    duration: 'Usually 4 years',
    exam: 'NCET or institute route, where applicable',
    examTags: ['NCET'],
    fit: all,
    requiredSubjects: [],
    subjectRule: 'Subject combinations are programme-specific; the institute’s current notice controls eligibility.',
    explanation: 'Do not assume every teaching degree is open immediately after Class 12 or uses NCET.',
    sources: [SOURCE.ncet],
  },
  {
    id: 'hospitality',
    course: 'B.Sc. Hospitality and Hotel Administration',
    duration: 'Usually 3 years',
    exam: 'NCHM JEE or the institute’s published route',
    examTags: ['NCHM JEE'],
    fit: all,
    requiredSubjects: ['English'],
    subjectRule: 'The NCHMCT route requires 10+2 or equivalent with English as a subject; verify the current admission notice.',
    explanation: 'Hospitality is open to many streams, but English and the current counselling rule still matter.',
    sources: [SOURCE.nchm],
  },
  {
    id: 'ca-foundation',
    course: 'CA Foundation alongside a degree route',
    duration: 'Varies by attempts and later stages',
    exam: 'ICAI Foundation examination',
    examTags: ['ICAI Foundation'],
    fit: all,
    requiredSubjects: [],
    subjectRule: 'The qualification and registration conditions are set by ICAI and can change; commerce is useful but not the only possible background.',
    explanation: 'CA is an examination pathway, not a three-year college degree. Read the current ICAI registration notice.',
    sources: [SOURCE.icai],
  },
  {
    id: 'iti-skill',
    course: 'ITI and other skill-first technical routes',
    duration: 'Often 6 months to 2 years',
    exam: 'Institute or state admission route',
    examTags: [],
    fit: all,
    requiredSubjects: [],
    subjectRule: 'Trade eligibility varies from Class 8/10/12 and can include Maths or Science for particular trades.',
    explanation: 'This is a route family, not one qualification. Use the DGT or state notice for the exact trade.',
    sources: [SOURCE.dgt],
  },
];

export const COURSE_FINDER_STREAMS: CourseStream[] = ['PCM', 'PCB', 'PCMB', 'Commerce', 'Arts'];
export const COURSE_FINDER_SUBJECTS: CourseSubject[] = ['Physics', 'Chemistry', 'Maths', 'Biology', 'English', 'Computer Science', 'Economics', 'Accountancy', 'Business Studies'];

export const COURSE_FINDER_REQUIRED_VERIFICATION_FIELDS = [
  'exact_institute_or_authority',
  'eligibility_and_marks',
  'subject_combination',
  'entrance_route_and_year',
  'age_category_and_domicile',
  'source_url_and_last_verified_date',
  'named_verifier_and_correction_path',
] as const;

// This is an unpublished work queue. It makes the remaining evidence work explicit;
// it must not be presented as proof that any course record has been verified.
export const COURSE_FINDER_VERIFICATION_QUEUE = COURSE_ELIGIBILITY_RECORDS.map((record) => ({
  id: record.id,
  course: record.course,
  status: 'not-started' as const,
  owner: 'Future Career School editorial team',
  requiredFields: COURSE_FINDER_REQUIRED_VERIFICATION_FIELDS,
  note: 'Source-mapped editorial record only. Human review of the exact authority or institute notice is required before publication claims.',
}));
