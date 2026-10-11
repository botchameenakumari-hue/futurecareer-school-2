// Per-test report data: the follow-on assessment, the default skill for the first proof
// project, and the page links used in the report sources. Shared by every self-rating test.
export type NextAssessment = { href: string; title: string; why: string };

const T = (slug: string) => `/services/assessments/${slug}/`;

export const TEST_NEXT: Record<string, NextAssessment[]> = {
  'confused-after-10th': [
    { href: T('stream-selector-test-after-10th'), title: 'Stream Selector Test After 10th', why: 'Moves from what confuses you to which stream fits your pattern.' },
    { href: T('study-habits-self-assessment'), title: 'Study Habits Self-Assessment', why: 'Checks whether your study routine can support the stream you lean towards.' },
  ],
  communication: [
    { href: T('soft-skills-self-assessment'), title: 'Soft Skills Self-Assessment', why: 'Looks at the wider set of people skills around communication.' },
    { href: T('interview-readiness-self-assessment'), title: 'Interview Readiness Self-Assessment', why: 'Tests how your communication shows up under interview pressure.' },
  ],
  'soft-skills': [
    { href: T('communication-skills-assessment'), title: 'Communication Skills Assessment', why: 'Goes deeper on speaking, listening and writing.' },
    { href: T('leadership-skills-self-assessment'), title: 'Leadership Skills Self-Assessment', why: 'Shows how your people skills hold up when you lead others.' },
  ],
  'study-habits-self-assessment': [
    { href: T('time-management-self-assessment'), title: 'Time Management Self-Assessment', why: 'Checks the planning habits that sit behind your study routine.' },
    { href: T('exam-stress-self-assessment'), title: 'Exam Stress Self-Assessment', why: 'Checks how you handle pressure around tests.' },
  ],
  'time-management-self-assessment': [
    { href: T('study-habits-self-assessment'), title: 'Study Habits Self-Assessment', why: 'Looks at how you learn once your time is planned.' },
    { href: T('burnout-self-assessment'), title: 'Burnout Self-Assessment', why: 'Checks whether your pace is sustainable.' },
  ],
  'exam-stress-self-assessment': [
    { href: T('study-habits-self-assessment'), title: 'Study Habits Self-Assessment', why: 'Builds the preparation habits that lower exam pressure.' },
    { href: T('resilience-and-growth-mindset-assessment'), title: 'Resilience and Growth Mindset Assessment', why: 'Looks at how you recover from setbacks.' },
  ],
  'resilience-and-growth-mindset-assessment': [
    { href: T('decision-making-skills-assessment'), title: 'Decision-Making Skills Assessment', why: 'Looks at how you choose under uncertainty.' },
    { href: T('burnout-self-assessment'), title: 'Burnout Self-Assessment', why: 'Checks whether your load is sustainable.' },
  ],
  'decision-making-skills-assessment': [
    { href: T('career-readiness-self-assessment'), title: 'Career Readiness Self-Assessment', why: 'Applies your decision habits to your next career step.' },
    { href: T('job-fit-self-assessment'), title: 'Job Fit Self-Assessment', why: 'Checks how well a role fits you.' },
  ],
  'interview-readiness-self-assessment': [
    { href: T('communication-skills-assessment'), title: 'Communication Skills Assessment', why: 'Strengthens the speaking and listening behind interviews.' },
    { href: T('job-fit-self-assessment'), title: 'Job Fit Self-Assessment', why: 'Checks whether the roles you are applying for suit you.' },
  ],
  'internship-readiness-self-assessment': [
    { href: T('interview-readiness-self-assessment'), title: 'Interview Readiness Self-Assessment', why: 'Prepares you for selection conversations.' },
    { href: T('career-readiness-self-assessment'), title: 'Career Readiness Self-Assessment', why: 'Looks at the wider picture after the internship.' },
  ],
  'burnout-self-assessment': [
    { href: T('time-management-self-assessment'), title: 'Time Management Self-Assessment', why: 'Helps you protect time and set limits.' },
    { href: T('resilience-and-growth-mindset-assessment'), title: 'Resilience and Growth Mindset Assessment', why: 'Looks at recovery and how you respond to pressure.' },
  ],
  'leadership-skills-self-assessment': [
    { href: T('promotion-readiness-assessment'), title: 'Promotion Readiness Assessment', why: 'Checks how ready you are for the next level.' },
    { href: T('decision-making-skills-assessment'), title: 'Decision-Making Skills Assessment', why: 'Looks at the judgement leaders use every day.' },
  ],
  'promotion-readiness-assessment': [
    { href: T('leadership-skills-self-assessment'), title: 'Leadership Skills Self-Assessment', why: 'Tests the leadership side of readiness.' },
    { href: T('job-fit-self-assessment'), title: 'Job Fit Self-Assessment', why: 'Checks whether the next role suits you.' },
  ],
  'job-fit-self-assessment': [
    { href: T('career-readiness-self-assessment'), title: 'Career Readiness Self-Assessment', why: 'Checks how ready you are to move.' },
    { href: T('riasec-holland-code-career-test'), title: 'RIASEC Holland Code Career Test', why: 'Looks at the kinds of work that suit your interests.' },
  ],
  'career-readiness-self-assessment': [
    { href: T('internship-readiness-self-assessment'), title: 'Internship Readiness Self-Assessment', why: 'Checks readiness for hands-on experience.' },
    { href: T('interview-readiness-self-assessment'), title: 'Interview Readiness Self-Assessment', why: 'Prepares you for the selection stage.' },
  ],
};

// First skill suggested for the proof project before the person rates their nine skills.
export const TEST_FOCUS_SKILL: Record<string, string> = {
  'confused-after-10th': 'proof',
  communication: 'english_write',
  'soft-skills': 'english_speak',
  'study-habits-self-assessment': 'ai_use',
  'time-management-self-assessment': 'automate',
  'exam-stress-self-assessment': 'ai_use',
  'resilience-and-growth-mindset-assessment': 'proof',
  'decision-making-skills-assessment': 'ai_use',
  'interview-readiness-self-assessment': 'english_speak',
  'internship-readiness-self-assessment': 'proof',
  'burnout-self-assessment': 'ai_use',
  'leadership-skills-self-assessment': 'sales',
  'promotion-readiness-assessment': 'proof',
  'job-fit-self-assessment': 'marketing',
  'career-readiness-self-assessment': 'proof',
};

export const TRACKER_PATH = '/services/assessments/skill-portfolio-tracker/';
export const REPORT_VERSION_TEXT = '2.0 (October 2026)';
