export type BofuComparisonRow = {
  left: string;
  right: string;
};

export const BOFU_INTERNAL_LINKS = {
  parentGuidance: '/services/career-counselling-and-career-guidance/',
  guidanceLocations: '/services/career-counselling-and-career-guidance/locations/',
  visakhapatnamCounselling:
    '/services/career-counselling-and-career-guidance/locations/career-counselling-in-visakhapatnam/',
  rajkotCounselling:
    '/services/career-counselling-and-career-guidance/locations/career-counselling-in-rajkot/',
  assessments: '/services/assessments/',
  careerGuidance: '/services/career-counselling-and-career-guidance/career-guidance/',
  careerCounselling:
    '/services/career-counselling-and-career-guidance/career-counselling/',
  careerCounsellingOnline:
    '/services/career-counselling-and-career-guidance/career-counselling-online/',
  virtualCareerCounselling:
    '/services/career-counselling-and-career-guidance/virtual-career-counselling/',
  careerCounsellingSession:
    '/services/career-counselling-and-career-guidance/career-counselling-session/',
  careerCounsellingConsultation:
    '/services/career-counselling-and-career-guidance/career-counselling-consultation/',
  careerGuidanceOnline:
    '/services/career-counselling-and-career-guidance/career-guidance-online/',
  careerCoachNearMe:
    '/services/career-counselling-and-career-guidance/career-coach-near-me/',
  after12th: '/services/career-counselling-and-career-guidance/career-guidance-after-12th/',
  after12thOnline:
    '/services/career-counselling-and-career-guidance/career-guidance-after-12th-online/',
  counsellingFor12thStudents:
    '/services/career-counselling-and-career-guidance/career-counselling-for-12th-students/',
  students: '/services/career-counselling-and-career-guidance/student-career-guidance/',
  workingProfessionals:
    '/services/career-counselling-and-career-guidance/working-professional-career-guidance/',
  nriStudents:
    '/services/career-counselling-and-career-guidance/career-counselling-for-nri-students/',
} as const;

export const BOFU_PUBLIC_LINKS = {
  parentGuidance: 'https://futurecareerschool.com/services/career-counselling-and-career-guidance/',
  guidanceLocations:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/locations/',
  visakhapatnamCounselling:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/locations/career-counselling-in-visakhapatnam/',
  rajkotCounselling:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/locations/career-counselling-in-rajkot/',
  assessments: 'https://futurecareerschool.com/services/assessments/',
  careerGuidance:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance/',
  careerCounselling:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-counselling/',
  careerCounsellingOnline:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-counselling-online/',
  virtualCareerCounselling:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/virtual-career-counselling/',
  careerCounsellingSession:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-counselling-session/',
  careerCounsellingConsultation:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-counselling-consultation/',
  careerGuidanceOnline:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance-online/',
  careerCoachNearMe:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-coach-near-me/',
  after12th:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance-after-12th/',
  after12thOnline:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance-after-12th-online/',
  counsellingFor12thStudents:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-counselling-for-12th-students/',
  students:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/student-career-guidance/',
  workingProfessionals:
    'https://futurecareerschool.com/services/career-counselling-and-career-guidance/working-professional-career-guidance/',
} as const;

export const BOFU_PAYMENT_LINKS = {
  students: 'https://rzp.io/rzp/ApMfIAtW',
  studentContinuousGuidance: 'https://rzp.io/rzp/Z2vwx1Y',
  workingProfessionals: 'https://rzp.io/rzp/n7u0omdt',
} as const;

export const BOFU_PLAN_LINKS = {
  parentGuidance: `${BOFU_INTERNAL_LINKS.parentGuidance}#plans`,
  careerGuidance: `${BOFU_INTERNAL_LINKS.careerGuidance}#plans`,
  careerCounselling: `${BOFU_INTERNAL_LINKS.careerCounselling}#plans`,
  careerCounsellingOnline: `${BOFU_INTERNAL_LINKS.careerCounsellingOnline}#plans`,
  virtualCareerCounselling: `${BOFU_INTERNAL_LINKS.virtualCareerCounselling}#plans`,
  careerCounsellingSession: `${BOFU_INTERNAL_LINKS.careerCounsellingSession}#plans`,
  careerCounsellingConsultation: `${BOFU_INTERNAL_LINKS.careerCounsellingConsultation}#plans`,
  careerGuidanceOnline: `${BOFU_INTERNAL_LINKS.careerGuidanceOnline}#plans`,
  careerCoachNearMe: `${BOFU_INTERNAL_LINKS.careerCoachNearMe}#plans`,
  after12th: `${BOFU_INTERNAL_LINKS.after12th}#plans`,
  after12thOnline: `${BOFU_INTERNAL_LINKS.after12thOnline}#plans`,
  students: `${BOFU_INTERNAL_LINKS.students}#plans`,
  workingProfessionals: `${BOFU_INTERNAL_LINKS.workingProfessionals}#plans`,
} as const;

export const BOFU_ASSESSMENT_LINKS = {
  hub: '/services/assessments/',
  class10AndBelow: '/services/assessments/class-10-and-below/',
  class11To12: '/services/assessments/class-11-to-12/',
  graduatesAndEarlyProfessionals: '/services/assessments/graduates-and-early-professionals/',
  workingProfessionalsAndCareerChangers:
    '/services/assessments/working-professionals-and-career-changers/',
  careerAptitudeAfter10th: '/services/assessments/career-aptitude-test-after-10th/',
  streamSelectorAfter10th: '/services/assessments/stream-selector-test-after-10th/',
  careerAptitudeAfter12th: '/services/assessments/career-aptitude-test-after-12th/',
  streamSelectorAfter12th: '/services/assessments/stream-selector-test-after-12th/',
} as const;

export type BofuAudience = 'student' | 'professional' | 'mixed';

export const BOFU_COMPARISON_LIBRARY: BofuComparisonRow[] = [
  {
    left: 'Generic advice that still leaves you unclear',
    right: 'High-leverage decision support around path, skill, and risk',
  },
  {
    left: 'Degree-first direction with weak skill edge',
    right: 'Skill-first direction with proof of work and stronger market value',
  },
  {
    left: 'Low-growth paths that delay real earning progress',
    right: 'Stronger skill choices aimed at achieving earlier financial freedom',
  },
  {
    left: 'Paid outdated impractical assessments with weak practical value',
    right: 'Free updated practical AI-powered career and skill assessments',
  },
  {
    left: 'Generic low-paying path advice that limits growth',
    right: 'Higher-value skill direction with clearer income-growth logic',
  },
  {
    left: 'Random upskilling that compounds slowly',
    right: 'Clearer skill direction tied to growth and income upside',
  },
];

// Broad BOFU parent pages can show the full library by default.
// Narrower BOFU child pages should pass only the rows that genuinely fit the keyword.
export const DEFAULT_BOFU_COMPARISON_ROWS = BOFU_COMPARISON_LIBRARY;
