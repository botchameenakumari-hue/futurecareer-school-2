// Target careers for the skill portfolio tracker. Each lists how much of each of the nine
// skills the work tends to ask for, from 1 (light) to 5 (central). These are rough emphasis
// levels for comparing yourself with a direction, not hiring requirements: employers differ.
export type SkillKey = 'ai_use' | 'ai_build' | 'automate' | 'code' | 'english_write' | 'english_speak' | 'marketing' | 'sales' | 'proof';
export const SKILL_KEYS: SkillKey[] = ['ai_use', 'ai_build', 'automate', 'code', 'english_write', 'english_speak', 'marketing', 'sales', 'proof'];
export const CAREER_TARGET_METHOD = {
  version: 'Career target model 1.0',
  editoriallyReviewedOn: '11 October 2026',
  source: 'Future Career School editorial model',
  purpose: 'Directional comparison between a learner’s self-rating and the kinds of work commonly present in a broad career direction.',
  limits: [
    'The 1–5 values are editorial emphasis bands, not hiring requirements, eligibility rules, salary data or a prediction of employability.',
    'Employers, roles and routes vary. A target gap must be checked against current job descriptions, course rules and supervised practice.',
    'The model has not been validated against hiring outcomes or a representative labour-market sample.'
  ],
} as const;
export type CareerTarget = {
  id: string;
  name: string;
  family: string;
  /** Emphasis for each skill in SKILL_KEYS order. */
  need: number[];
  /** What a first piece of proof usually looks like in this field. */
  proof: string;
  /** Typical first move. */
  first: string;
};

export const CAREER_TARGETS: CareerTarget[] = [
  { id: 'software', name: 'Software developer', family: 'Technology', need: [4, 4, 3, 5, 3, 3, 1, 1, 5], proof: 'Three projects on GitHub, one used by another person.', first: 'Build one small project every week for a month.' },
  { id: 'data', name: 'Data analyst', family: 'Technology', need: [4, 3, 4, 4, 4, 3, 1, 1, 4], proof: 'Two dashboards or analyses on real data with a written insight.', first: 'Clean and chart a public data set and write what it shows.' },
  { id: 'automation', name: 'Automation and no-code consultant', family: 'Technology', need: [5, 4, 5, 3, 4, 4, 3, 4, 5], proof: 'Three automations with time saved and one client reference.', first: 'Automate one repeated task for yourself, then for one small business.' },
  { id: 'digital-marketing', name: 'Digital marketer', family: 'Marketing and sales', need: [5, 2, 4, 1, 5, 3, 5, 3, 5], proof: 'A campaign report with numbers for a real page or business.', first: 'Run a four-week content test and record every number.' },
  { id: 'content', name: 'Content writer or creator', family: 'Marketing and sales', need: [5, 2, 3, 1, 5, 4, 4, 2, 5], proof: 'Ten published pieces and one that brought enquiries.', first: 'Publish one piece a week on one topic for eight weeks.' },
  { id: 'sales', name: 'Sales or business development', family: 'Marketing and sales', need: [4, 1, 3, 1, 4, 5, 4, 5, 3], proof: 'An outreach log, a tested offer and a first closed sale.', first: 'Send ten polite messages and log every reply.' },
  { id: 'design', name: 'UI, UX or graphic designer', family: 'Creative', need: [4, 3, 2, 2, 3, 3, 3, 2, 5], proof: 'A portfolio of three case studies showing problem, process and result.', first: 'Redesign one real screen or poster and explain each choice.' },
  { id: 'teaching', name: 'Teacher, trainer or coach', family: 'Education', need: [5, 2, 3, 1, 4, 5, 3, 2, 4], proof: 'A recorded session and written feedback from learners.', first: 'Teach one topic to a small group and collect feedback.' },
  { id: 'finance', name: 'Accounts and finance professional', family: 'Business', need: [4, 2, 4, 2, 4, 3, 1, 2, 3], proof: 'A clean model or report built for a real small business.', first: 'Build a monthly accounts sheet for a shop or club.' },
  { id: 'hr', name: 'HR and people operations', family: 'Business', need: [4, 1, 3, 1, 4, 5, 2, 3, 3], proof: 'A process document and a small hiring or training project.', first: 'Design a simple onboarding checklist and test it with one team.' },
  { id: 'operations', name: 'Operations or project manager', family: 'Business', need: [4, 2, 5, 2, 4, 4, 1, 3, 4], proof: 'A process improved with before and after numbers.', first: 'Map one process and remove one step with a measurable gain.' },
  { id: 'customer', name: 'Customer success or support', family: 'Business', need: [4, 1, 4, 1, 5, 5, 2, 3, 3], proof: 'A knowledge-base article set and a measured improvement in replies.', first: 'Write five help articles for a real product.' },
  { id: 'founder', name: 'Small business owner or founder', family: 'Business', need: [4, 3, 4, 2, 4, 5, 5, 5, 5], proof: 'A first paying customer and a repeat customer.', first: 'Offer one clear service to five people and record the answers.' },
  { id: 'freelance', name: 'Freelancer in a craft skill', family: 'Business', need: [4, 3, 4, 2, 5, 4, 4, 4, 5], proof: 'A portfolio of three pieces and a testimonial.', first: 'Do one task for a small business for a testimonial.' },
  { id: 'health', name: 'Healthcare professional', family: 'Healthcare', need: [3, 1, 2, 1, 4, 5, 1, 2, 3], proof: 'A record of supervised practice, certificates and patient communication training.', first: 'Practise explaining one procedure in simple English.' },
  { id: 'government', name: 'Government and civil service roles', family: 'Public sector', need: [4, 1, 2, 1, 5, 5, 1, 1, 3], proof: 'Mock tests, answer writing and a skill to fall back on.', first: 'Write one answer a day and keep a parallel skill running.' },
  { id: 'law', name: 'Lawyer or legal professional', family: 'Law', need: [4, 1, 2, 1, 5, 5, 2, 3, 4], proof: 'Writing samples, moot or internship work and a clear specialisation.', first: 'Write a two-page summary of a real judgment.' },
  { id: 'media', name: 'Journalist or media professional', family: 'Media', need: [4, 2, 3, 1, 5, 5, 4, 2, 5], proof: 'A portfolio of published stories or videos.', first: 'Publish one reported piece with sources.' },
  { id: 'engineer', name: 'Core engineer', family: 'Engineering', need: [4, 3, 3, 3, 4, 3, 1, 2, 4], proof: 'A project report, a prototype and a working demo.', first: 'Build one working prototype and document it.' },
  { id: 'research', name: 'Researcher or scientist', family: 'Science', need: [5, 3, 3, 4, 5, 4, 1, 1, 4], proof: 'A short research note, a data analysis and a presentation.', first: 'Replicate one small published result and write it up.' },
];
export const careerById = (id: string) => CAREER_TARGETS.find((c) => c.id === id);
