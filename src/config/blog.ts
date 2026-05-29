export type BlogCategory = {
  slug: string;
  title: string;
  description: string;
  primaryIntents: string[];
  exampleSlugs: string[];
  primaryCtaHref?: string;
  secondaryCtaHref?: string;
};

// Category-first silos (search intent), not audience-first.
// Audience guidance lives inside posts to avoid duplicate "doorway" content.
export const BLOG_CATEGORIES: BlogCategory[] = [
  {
    slug: 'career-guidance',
    title: 'Career Guidance',
    description:
      'Decision frameworks for students, graduates, and professionals: clarity, trade-offs, and what to do next.',
    primaryIntents: [
      'career guidance',
      'career counselling',
      'which career should I choose',
      'career confusion',
      'stream selection advice',
    ],
    exampleSlugs: [
      'how-to-choose-a-career',
      'career-decision-framework',
      'how-to-choose-a-stream-after-10th',
      'how-to-choose-a-course-after-12th',
    ],
    primaryCtaHref: '/services/career-counselling-and-career-guidance',
    secondaryCtaHref: '/services',
  },
  {
    slug: 'career-options',
    title: 'Career Options',
    description:
      'Role guides and career paths: what the job is, what to learn, how to start, and common mistakes.',
    primaryIntents: [
      'career options after 10th',
      'career options after 12th',
      'career options after graduation',
      'how to become',
      'career in',
    ],
    exampleSlugs: [
      'how-to-become-a-data-analyst',
      'how-to-become-a-ui-ux-designer',
      'how-to-become-a-digital-marketer',
      'how-to-become-a-software-developer',
    ],
    primaryCtaHref: '/skill-finder',
    secondaryCtaHref: '/career-resources',
  },
  {
    slug: 'stream-selection',
    title: 'Stream Selection',
    description:
      'Choosing MPC/BiPC/Commerce/Humanities with real-world outcomes: degrees, careers, and skill paths.',
    primaryIntents: [
      'which stream should I choose',
      'science vs commerce vs arts',
      'what after 10th',
      'MPC or BiPC',
    ],
    exampleSlugs: [
      'science-vs-commerce-vs-humanities',
      'what-to-do-after-10th',
      'how-to-choose-mpc-or-bipc',
      'best-career-options-after-10th',
    ],
    primaryCtaHref: '/services/career-counselling-and-career-guidance',
    secondaryCtaHref: '/services/assessments',
  },
  {
    slug: 'college-degrees',
    title: 'College and Degrees',
    description:
      'Degree decisions, college planning, and outcome-based thinking: choosing paths that match your constraints.',
    primaryIntents: [
      'which degree should I choose',
      'best courses after 12th',
      'college vs skill route',
      'gap year decision',
    ],
    exampleSlugs: [
      'how-to-choose-a-degree',
      'college-vs-skills-what-to-do',
      'how-to-pick-a-college',
      'when-a-gap-year-makes-sense',
    ],
    primaryCtaHref: '/career-resources?topic=career-planning',
    secondaryCtaHref: '/services/career-counselling-and-career-guidance',
  },
  {
    slug: 'skills',
    title: 'Skills',
    description:
      'What to learn and why: skill selection, skill stacks, learning plans, and proof-of-work thinking.',
    primaryIntents: [
      'best skills to learn',
      'high income skills',
      'skills that pay well',
      'skills for students',
      'skills for working professionals',
    ],
    exampleSlugs: [
      'how-to-choose-a-skill',
      'high-income-skills-list',
      'skills-that-pay-well',
      't-shaped-skill-stack-explained',
    ],
    primaryCtaHref: '/skill-finder',
    secondaryCtaHref: '/career-resources?topic=skills&type=roadmap',
  },
  {
    slug: 'skill-roadmaps',
    title: 'Skill Roadmaps',
    description:
      'Roadmaps for specific skills: what to learn first, what to build, and how to get a first role or client.',
    primaryIntents: [
      'roadmap',
      'learn step by step',
      'beginner roadmap',
      'portfolio roadmap',
    ],
    exampleSlugs: [
      'data-analytics-roadmap',
      'digital-marketing-roadmap',
      'ui-ux-roadmap',
      'b2b-sales-roadmap',
    ],
    primaryCtaHref: '/career-resources?topic=skills&type=roadmap',
    secondaryCtaHref: '/skill-finder',
  },
  {
    slug: 'portfolio-proof-of-work',
    title: 'Portfolio and Proof of Work',
    description:
      'How to build proof: portfolios, projects, case studies, and credibility without waiting for permission.',
    primaryIntents: [
      'how to build a portfolio',
      'portfolio with no experience',
      'projects for resume',
      'case study examples',
    ],
    exampleSlugs: [
      'portfolio-with-no-experience',
      'projects-that-get-you-hired',
      'how-to-write-a-case-study',
      'proof-of-work-checklist',
    ],
    primaryCtaHref: '/career-resources?topic=portfolio',
    secondaryCtaHref: '/services/career-counselling-and-career-guidance',
  },
  {
    slug: 'job-search',
    title: 'Job Search',
    description:
      'Job search strategy: targeting, applications, referrals, interviews, and converting effort into offers.',
    primaryIntents: [
      'how to get a job',
      'job search strategy',
      'apply for jobs effectively',
      'get hired with no experience',
    ],
    exampleSlugs: [
      'job-search-strategy',
      'how-to-get-a-job-with-no-experience',
      'how-to-use-referrals',
      'how-to-choose-a-target-role',
    ],
    primaryCtaHref: '/career-resources?topic=job-search',
    secondaryCtaHref: '/services/career-counselling-and-career-guidance',
  },
  {
    slug: 'resume',
    title: 'Resume',
    description:
      'Resume writing that works in the real market: structure, ATS basics, and role-specific proof.',
    primaryIntents: ['resume format', 'resume for freshers', 'ATS resume', 'resume mistakes'],
    exampleSlugs: [
      'resume-for-freshers',
      'ats-resume-checklist',
      'resume-project-section',
      'resume-mistakes-to-avoid',
    ],
    primaryCtaHref: '/career-resources?topic=job-search',
    secondaryCtaHref: '/services/career-counselling-and-career-guidance',
  },
  {
    slug: 'interviews',
    title: 'Interviews',
    description:
      'Interview preparation for real outcomes: clarity, stories, proof, and calm execution.',
    primaryIntents: [
      'interview preparation',
      'common interview questions',
      'tell me about yourself',
      'technical interview prep',
    ],
    exampleSlugs: [
      'interview-prep-plan',
      'tell-me-about-yourself-structure',
      'common-interview-mistakes',
      'how-to-present-projects-in-interviews',
    ],
    primaryCtaHref: '/career-resources?topic=job-search',
    secondaryCtaHref: '/services',
  },
  {
    slug: 'linkedin-networking',
    title: 'LinkedIn and Networking',
    description:
      'Networking that feels natural: profiles, outreach scripts, referrals, and relationship building.',
    primaryIntents: [
      'linkedin profile',
      'linkedin optimization',
      'how to network for jobs',
      'how to get referrals',
    ],
    exampleSlugs: [
      'linkedin-profile-checklist',
      'how-to-ask-for-referrals',
      'networking-without-being-salesy',
      'cold-message-template',
    ],
    primaryCtaHref: '/career-resources?topic=job-search',
    secondaryCtaHref: '/services/career-counselling-and-career-guidance',
  },
  {
    slug: 'internships',
    title: 'Internships',
    description:
      'Internships for students and freshers: finding roles, building proof, and converting into full-time offers.',
    primaryIntents: [
      'how to get an internship',
      'internships for students',
      'internship resume',
      'internship interview',
    ],
    exampleSlugs: [
      'how-to-get-an-internship-with-no-experience',
      'internship-portfolio-ideas',
      'internship-resume-template',
      'how-to-convert-internship-to-job',
    ],
    primaryCtaHref: '/career-resources?topic=job-search',
    secondaryCtaHref: '/skill-finder',
  },
  {
    slug: 'salary-growth',
    title: 'Salary Growth',
    description:
      'Income strategy: leverage, switching, positioning, and moving from effort to outcomes.',
    primaryIntents: [
      'how to increase salary',
      'switch jobs for higher pay',
      'salary growth plan',
      'career growth strategy',
    ],
    exampleSlugs: [
      'how-to-increase-salary-with-skills',
      'switching-jobs-for-higher-salary',
      'salary-plateau-what-to-do',
      'role-upgrade-strategy',
    ],
    primaryCtaHref: '/services/career-counselling-and-career-guidance',
    secondaryCtaHref: '/career-resources?topic=salary',
  },
  {
    slug: 'negotiation',
    title: 'Negotiation',
    description:
      'Negotiation tactics that respect the market: positioning, conversation structure, and offer handling.',
    primaryIntents: [
      'salary negotiation',
      'how to negotiate salary',
      'counter offer email',
      'how to ask for a raise',
    ],
    exampleSlugs: [
      'salary-negotiation-script',
      'raise-conversation-structure',
      'how-to-counter-offer',
      'negotiation-mistakes',
    ],
    primaryCtaHref: '/career-resources?topic=salary',
    secondaryCtaHref: '/services/career-counselling-and-career-guidance',
  },
  {
    slug: 'career-change',
    title: 'Career Change',
    description:
      'Switching fields safely: planning, timelines, risk control, and building a bridge to the next role.',
    primaryIntents: [
      'how to change career',
      'career change without quitting job',
      'switch career',
      'career transition plan',
    ],
    exampleSlugs: [
      'career-change-plan',
      'switch-career-without-quitting',
      'how-to-choose-a-new-field',
      'career-change-mistakes',
    ],
    primaryCtaHref: '/services/career-counselling-and-career-guidance',
    secondaryCtaHref: '/services/assessments',
  },
  {
    slug: 'assessments',
    title: 'Assessments',
    description:
      'How to use tests properly: what psychometrics can and cannot do, and how to interpret results for action.',
    primaryIntents: [
      'career assessment test',
      'career aptitude test',
      'psychometric test',
      'career interest test',
    ],
    exampleSlugs: [
      'career-aptitude-test-vs-psychometric-test',
      'how-to-interpret-psychometric-results',
      'career-interest-test-explained',
      'common-myths-about-aptitude',
    ],
    primaryCtaHref: '/services/assessments',
    secondaryCtaHref: '/services/career-counselling-and-career-guidance',
  },
  {
    slug: 'ai-future',
    title: 'AI and the Future of Work',
    description:
      'Practical AI-aware career planning: automation risk, skill positioning, and staying valuable.',
    primaryIntents: [
      'future proof skills',
      'jobs safe from automation',
      'AI will replace my job',
      'AI career advice',
    ],
    exampleSlugs: [
      'future-proof-skills',
      'automation-risk-checklist',
      'how-to-use-ai-to-learn-faster',
      'careers-in-the-ai-era',
    ],
    primaryCtaHref: '/skill-finder',
    secondaryCtaHref: '/services/assessments',
  },
  {
    slug: 'freelancing-business',
    title: 'Freelancing and Business',
    description:
      'Client acquisition basics: packaging skills, pricing thinking, and building income without a degree dependency.',
    primaryIntents: [
      'how to start freelancing',
      'how to get freelance clients',
      'freelance portfolio',
      'how to price services',
    ],
    exampleSlugs: [
      'how-to-start-freelancing',
      'how-to-get-first-client',
      'freelance-pricing-basics',
      'freelance-portfolio-structure',
    ],
    primaryCtaHref: '/career-resources?topic=coaching',
    secondaryCtaHref: '/services/career-counselling-and-career-guidance',
  },
  {
    slug: 'parents',
    title: 'Parents',
    description:
      'How parents can support better decisions without pressure: practical guidance, not fights.',
    primaryIntents: [
      'career guidance for my child',
      'which stream is best for my child',
      'parents career counselling',
      'how to support career decisions',
    ],
    exampleSlugs: [
      'how-parents-can-help-with-career-decisions',
      'stream-selection-parent-guide',
      'how-to-talk-about-careers-at-home',
      'reducing-pressure-while-staying-serious',
    ],
    primaryCtaHref: '/services/career-counselling-and-career-guidance',
    secondaryCtaHref: '/services/assessments',
  },
  {
    slug: 'study-abroad',
    title: 'Study Abroad',
    description:
      'Outcome-first study abroad planning: choosing country/program, ROI thinking, and skill alignment.',
    primaryIntents: [
      'study abroad guidance',
      'MS vs MBA decision',
      'study abroad ROI',
      'choose country for masters',
    ],
    exampleSlugs: [
      'study-abroad-decision-framework',
      'ms-vs-mba-how-to-decide',
      'choosing-country-for-study-abroad',
      'study-abroad-roi-checklist',
    ],
    primaryCtaHref: '/services/career-counselling-and-career-guidance',
    secondaryCtaHref: '/career-resources?topic=international',
  },
  {
    slug: 'mental-models',
    title: 'Mental Models',
    description:
      'Clear thinking for career decisions: trade-offs, risk control, and choosing what matters.',
    primaryIntents: [
      'how to make decisions',
      'career decision',
      'how to choose between options',
      'how to stay consistent',
    ],
    exampleSlugs: [
      'trade-offs-career-decisions',
      'risk-control-for-career-changes',
      'how-to-choose-between-two-careers',
      'how-to-build-discipline-for-learning',
    ],
    primaryCtaHref: '/services/career-counselling-and-career-guidance',
    secondaryCtaHref: '/services',
  },
  {
    slug: 'productivity-learning',
    title: 'Learning Systems',
    description:
      'Learning and consistency: systems that help you stick to a roadmap even with school, college, or a job.',
    primaryIntents: [
      'how to learn faster',
      'how to stay consistent',
      'study plan',
      'learning system',
    ],
    exampleSlugs: [
      'how-to-build-a-learning-plan',
      'weekly-learning-schedule',
      'how-to-learn-with-a-full-time-job',
      'skill-building-consistency',
    ],
    primaryCtaHref: '/career-resources?topic=skills',
    secondaryCtaHref: '/skill-finder',
  },
  {
    slug: 'industry-guides',
    title: 'Industry Guides',
    description:
      'Industry overviews: what roles exist, what skills matter, and how to enter without guessing.',
    primaryIntents: [
      'career in IT',
      'career in pharma',
      'career in finance',
      'career in marketing',
    ],
    exampleSlugs: [
      'careers-in-it',
      'careers-in-pharma',
      'careers-in-finance',
      'careers-in-marketing',
    ],
    primaryCtaHref: '/skill-finder',
    secondaryCtaHref: '/career-resources',
  },
];

export const BLOG_BASE_PATH = '/blog';

export function getBlogCategory(slug: string): BlogCategory | undefined {
  return BLOG_CATEGORIES.find((c) => c.slug === slug);
}

export type BlogPublishedPost = {
  categorySlug: string;
  slug: string;
  title: string;
  description: string;
  publishedAtISO: string;
  readTimeMinutes: number;
};

export const BLOG_PUBLISHED_POSTS: BlogPublishedPost[] = [
  {
    categorySlug: 'ai-future',
    slug: 'best-career-paths-for-the-next-10-years',
    title: 'Best career paths for the next 10 years — what the data actually says',
    description:
      'Best career paths for the next 10 years span AI, cybersecurity, healthcare, clean energy, and FinTech. WEF 2025 data, India salary ranges, and what to do next.',
    publishedAtISO: '2026-05-24',
    readTimeMinutes: 22,
  },
  {
    categorySlug: 'ai-future',
    slug: 'artificial-intelligence-career-paths',
    title: 'Artificial intelligence career paths: the real map, not the hype',
    description:
      'Artificial intelligence career paths run from ML engineering to AI product, governance, and non-coding roles. See which path fits, what to learn, and how to actually get in.',
    publishedAtISO: '2026-05-23',
    readTimeMinutes: 30,
  },
  {
    categorySlug: 'ai-future',
    slug: 'top-careers-for-the-future',
    title: 'Top careers for the future: what is actually rising and why',
    description:
      'Top careers for the future usually sit where AI, cybersecurity, healthcare, clean energy, and business systems are creating real demand. See which paths fit and what to build next.',
    publishedAtISO: '2026-05-13',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'bca-career-options',
    title: 'BCA career options: real paths after the degree, not just coding hype',
    description:
      'BCA career options include software development, web development, QA, tech support, data roles, and MCA-led specialisation. See what fits and what to do next.',
    publishedAtISO: '2026-05-13',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'bba-career-options',
    title: 'BBA career options: real paths after the degree, not just the MBA default',
    description:
      'BBA career options include marketing, sales, HR, operations, business analysis, and entrepreneurship. See what fits and whether MBA is worth it.',
    publishedAtISO: '2026-05-13',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'best-career-options-with-high-salary',
    title: 'Best career options with high salary: what actually pays',
    description:
      'Best career options with high salary usually combine scarce skill, leverage, regulation, or revenue ownership. See which paths fit and what to avoid.',
    publishedAtISO: '2026-05-13',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'pcb-career-options-without-neet',
    title: 'PCB career options without NEET: real paths beyond MBBS pressure',
    description:
      'PCB career options without NEET include nursing, physiotherapy, pharmacy, biotech, life sciences, and health-adjacent paths. See what fits next.',
    publishedAtISO: '2026-05-13',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-in-arts',
    title: 'Career options in arts: real paths beyond the weak-stream myth',
    description:
      'Career options in arts include law, psychology, design, media, policy, languages, and business-facing creative roles. See what fits and what to do next.',
    publishedAtISO: '2026-05-13',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'stream-selection',
    slug: 'career-options-after-10th',
    title: 'Career options after 10th: the real paths beyond science pressure',
    description:
      'A practical guide to science, commerce, humanities, diploma, and ITI routes after 10th with fit checks and next steps.',
    publishedAtISO: '2026-05-13',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-after-12th-pcb',
    title: 'Career options after 12th PCB: real paths beyond NEET and MBBS',
    description:
      'A practical guide to PCB careers across MBBS, nursing, physiotherapy, pharmacy, biotech, and non-MBBS health paths.',
    publishedAtISO: '2026-05-12',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'pcm-career-options',
    title: 'PCM career options: real paths after 12th, not just engineering',
    description:
      'A practical guide to PCM paths across engineering, software, research, architecture, and quant roles with fit and reality checks.',
    publishedAtISO: '2026-05-12',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-after-12th-science',
    title: 'Career options after 12th science: real paths beyond JEE and NEET',
    description:
      'A practical guide to science careers after 12th across engineering, medicine, research, biotech, data, and hybrid paths.',
    publishedAtISO: '2026-05-12',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-after-12th-commerce',
    title: 'Career options after 12th commerce: the real tracks, not just the usual list',
    description:
      'Career options after 12th commerce span professional exams, corporate degrees, and skill-first paths. Here is what each track actually looks like — income, timeline, and AI risk included.',
    publishedAtISO: '2026-05-10',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-in-commerce',
    title: 'Career options in commerce: 18 real paths and how to choose one',
    description:
      'A practical guide to commerce careers across CA, finance, banking, analytics, sales, marketing, and ownership paths.',
    publishedAtISO: '2026-05-10',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-guidance',
    slug: 'how-to-choose-a-career-after-12th',
    title: 'How to Choose a Career After 12th: Real Plan',
    description:
      'A practical career choice guide with a decision scorecard, career-lane map, college ROI filter, skill-first logic, and clear next steps.',
    publishedAtISO: '2026-04-25',
    readTimeMinutes: 22,
  },
];

export function getBlogPostsByCategory(categorySlug: string): BlogPublishedPost[] {
  return BLOG_PUBLISHED_POSTS.filter((post) => post.categorySlug === categorySlug);
}
