// The four full-depth assessments. Each one bundles several of the narrower
// single-purpose tests (interest, aptitude, stream or role fit, learning style,
// thinking style) into one free report, so every narrower test page points
// visitors here whenever the stage matches.
export type MainAssessmentId = 'class10' | 'class1112' | 'graduates' | 'professionals';

export type MainAssessment = {
  id: MainAssessmentId;
  href: string;
  name: string;
  shortName: string;
  audience: string;
  questions: number;
  minutes: string;
  headline: string;
  covers: string[];
  topbar: string;
};

export const MAIN_ASSESSMENTS: Record<MainAssessmentId, MainAssessment> = {
  class10: {
    id: 'class10',
    href: '/services/assessments/class-10-and-below/',
    name: 'Class 10 and Below Assessment',
    shortName: 'Class 10 Career Assessment',
    audience: 'Class 8 to 10 students',
    questions: 25,
    minutes: '15',
    headline: '6 tests in one: stream, interests, aptitude, learning style and more',
    covers: [
      'Your best-fit stream, with PCM, PCB, Commerce and Humanities compared side by side',
      'Your 6 career interest scores (RIASEC) and the careers that fit them',
      'Numerical, verbal and logical aptitude, scored and explained',
      'Your 8 intelligences, your thinking style and how you learn best',
      'Your AI-readiness signal and a 6-month exploration plan',
    ],
    topbar:
      'This is one slice of the picture. The full assessment adds your interests, aptitude, thinking style, learning style and a 6-month plan.',
  },
  class1112: {
    id: 'class1112',
    href: '/services/assessments/class-11-to-12/',
    name: 'Class 11 and 12 Assessment',
    shortName: 'Class 11 and 12 Career Assessment',
    audience: 'Class 11 and 12 students, all streams',
    questions: 25,
    minutes: '18',
    headline: '6 tests in one: career interests, aptitude, college fit and more',
    covers: [
      'Your 6 career interest scores (RIASEC) and matching careers',
      'Numerical, verbal and logical aptitude, scored and explained',
      'Realistic college targets and an entrance-exam readiness profile',
      'Your 8 intelligences, thinking style and learning style',
      'A college entrance roadmap and a free 3-phase skill roadmap',
    ],
    topbar:
      'This is one slice of the picture. The full assessment adds college targets, entrance readiness, interests, aptitude and a skill roadmap.',
  },
  graduates: {
    id: 'graduates',
    href: '/services/assessments/graduates-and-early-professionals/',
    name: 'Graduates and Early Professionals Assessment',
    shortName: 'Graduate Career Assessment',
    audience: 'Graduates, freshers and early professionals (0 to 3 years)',
    questions: 26,
    minutes: '15',
    headline: '6 tests in one: role fit, aptitude, work values, skill readiness and more',
    covers: [
      'Your role and domain guide, based on your interest evidence',
      'Professional aptitude signals and your 8 intelligence signals',
      'Work values and a check on whether your career direction is real',
      'A 12-month skill roadmap and 3 job-search routes to test',
      'Your AI-era work strategy and a 3-year income trajectory',
    ],
    topbar:
      'This is one slice of the picture. The full assessment adds role fit, work values, skill gaps, a 12-month roadmap and your next 30 days.',
  },
  professionals: {
    id: 'professionals',
    href: '/services/assessments/working-professionals-and-career-changers/',
    name: 'Working Professionals and Career Changers Assessment',
    shortName: 'Working Professional Assessment',
    audience: 'Working professionals and career changers',
    questions: 32,
    minutes: '20',
    headline: '6 dimensions: pivot readiness, income leverage, leadership, AI risk and more',
    covers: [
      'Pivot feasibility: can you move now, and which 3 moves are realistic',
      'Income leverage and three paths to higher pay',
      'Leadership potential and remote-work readiness',
      'AI and automation risk, plus where AI can give you hours back',
      'A skill gap analysis with a 30-day and 90-day action plan',
    ],
    topbar:
      'This is one slice of the picture. The full assessment scores six career dimensions and ends with a 30-day and 90-day plan.',
  },
};

export const MAIN_ASSESSMENT_ORDER: MainAssessmentId[] = [
  'class10',
  'class1112',
  'graduates',
  'professionals',
];
