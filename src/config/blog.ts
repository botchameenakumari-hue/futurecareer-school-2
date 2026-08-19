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
    slug: 'government-jobs',
    title: 'Government Jobs',
    description:
      'Government and PSU career decisions: exam prep trade-offs, sector comparisons, and what to do after an attempt fails.',
    primaryIntents: [
      'government vs private job',
      'banking sector career',
      'SSC vs bank exams',
      'PSU jobs after engineering',
      'UPSC alternatives',
    ],
    exampleSlugs: [
      'govt-vs-private-job-india',
      'government-job-vs-startup-job-stability-india',
      'banking-sector-career-india',
      'psu-jobs-after-engineering-india',
      'defence-services-career-india',
    ],
    primaryCtaHref: '/services/career-counselling-and-career-guidance',
    secondaryCtaHref: '/services',
  },
  {
    slug: 'career-change',
    title: 'Career Change',
    description:
      'Mid-career pivots and switches: changing tracks, changing industries, or rebuilding after a setback, with real timelines and trade-offs.',
    primaryIntents: [
      'career change after 5 years',
      'mid career change',
      'switching careers at 30',
      'second career at 40',
      'career plateau',
    ],
    exampleSlugs: [
      'career-change-after-5-years-india',
      'second-career-at-40-india',
      'career-plateau-how-to-break-through-india',
      'rebuild-career-after-layoff-india',
    ],
    primaryCtaHref: '/services/career-counselling-and-career-guidance',
    secondaryCtaHref: '/services',
  },
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
    primaryCtaHref: '/career-skills-compass',
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
    primaryCtaHref: '/career-skills-compass',
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
    secondaryCtaHref: '/career-skills-compass',
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
    secondaryCtaHref: '/career-skills-compass',
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
    primaryCtaHref: '/services/career-counselling-and-career-guidance',
    secondaryCtaHref: '/services/assessments',
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
    primaryCtaHref: '/career-skills-compass',
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
    secondaryCtaHref: '/career-skills-compass',
  },
  {
    slug: 'medical-careers',
    title: 'Medical and Healthcare Careers',
    description:
      'Non-clinical and allied health career paths in India: nursing, physiotherapy, pharmacy, medical coding, clinical research, public health, and health-tech, with real degrees, costs, and next steps.',
    primaryIntents: [
      'career options in medical field other than doctor',
      'medical careers without MBBS',
      'allied health careers India',
      'paramedical career options',
      'healthcare jobs other than doctor',
    ],
    exampleSlugs: [
      'career-options-in-medical-field-other-than-doctor-india',
      'medical-coding-career-india',
      'how-to-become-a-clinical-research-associate-india',
      'nursing-vs-physiotherapy-which-is-better',
    ],
    primaryCtaHref: '/services/career-counselling-and-career-guidance',
    secondaryCtaHref: '/career-resources',
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
    primaryCtaHref: '/career-skills-compass',
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
    categorySlug: 'college-degrees',
    slug: 'bba-vs-bcom-india-which-to-choose-after-12th',
    title: 'BBA vs BCom India: Which to Choose After 12th, Decided by Career Direction',
    description:
      'BBA vs BCom India which to choose after 12th: compare fees, colleges, the CA/CMA/CS funnel, campus placements, and MBA-readiness so you pick by career direction, not brand names.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'career-options',
    slug: 'how-to-become-an-animator-india',
    title: 'Animation Career India: How to Become an Animator, Track by Track',
    description:
      'An animation career India guide built around the real decision: which specialization to pick (2D, 3D, motion graphics, VFX, or game animation), the right software stack, and honest pay by track.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-dentistry-a-good-career-in-india',
    title: 'Is Dentistry a Good Career in India? NEET Cutoff, Oversupply, Real Pay',
    description:
      'Is dentistry a good career in India? The honest NEET-BDS-vs-MBBS cutoff gap, the real dental college oversupply, MDS competition, and what BDS graduates actually earn.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-doctor-a-good-career-in-india',
    title: 'Is Doctor a Good Career in India? NEET Cutoff, MBBS Cost, Real Timeline',
    description:
      'Is doctor a good career in India? The honest NEET-UG cutoff math, the government-vs-private MBBS fee gap, the real 10-year timeline to a specialist income, and resident-doctor reality.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-food-technology-a-good-career-in-india',
    title: 'Is Food Technology a Good Career in India? Pay, FSSAI, Verdict',
    description:
      'Is food technology a good career in India? Real BTech vs BSc routes, FSSAI and FMCG QA pay, the honest fallback-branch reality, and who this actually fits.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-agriculture-a-good-career-in-india',
    title: 'Is Agriculture a Good Career in India? Degree Path vs Farming Reality',
    description:
      'Is agriculture a good career in India? ICAR routes, govt and agri-MBA pay bands, agritech roles, and why a degree-holder career and land-owning farming are not the same bet.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'hotel-management-career-india-scope-and-salary',
    title: 'Hotel Management Career India: Real Scope, Salary, and the Grind Nobody Mentions',
    description:
      'Hotel management career India scope and salary: what front office, F&B, housekeeping, and sales actually involve, IHM vs diploma entry, the honest early-career hours, and real GM-level pay.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-hotel-management-a-good-career-in-india',
    title: 'Is Hotel Management a Good Career in India? Pay, Hours, Verdict',
    description:
      'Is hotel management a good career in India? Real pay ceiling, attrition data, AI risk, and who this shift-heavy path actually fits — the 2026 verdict.',
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'how-to-get-into-event-management-india',
    title: 'Event Management Career India: How to Get Into Event Management, Segment by Segment',
    description:
      'How to get into event management in India: the real entry routes, what each event segment pays, and how to build proof without a company behind you.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-event-management-a-good-career-in-india',
    title: 'Is Event Management a Good Career in India? Pay, Burnout, Verdict',
    description:
      'Is event management a good career in India? Real pay bands, event-day burnout, freelance income risk, and who this logistics-heavy path actually fits — the honest verdict.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'digital-marketing-career-for-commerce-students-india',
    title: 'Digital Marketing Career for Commerce Students India: Why BCom Fits Better Than You Think',
    description:
      'Digital marketing career for commerce students India: why BCom/BBA numbers skills transfer into campaign ROI, what to learn beyond the degree, and how your entry compares to mass-comm and BA graduates.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'career-options',
    slug: 'digital-marketing-career-path-india-role-progression',
    title: 'Digital Marketing Career Path India: The Real Role Ladder, Executive to CMO',
    description:
      'The digital marketing career path in India, role by role: executive, specialist, manager, and head of marketing/CMO, with real salary jumps and how to pick your specialization.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'career-options',
    slug: 'how-to-become-a-teacher-trainer-india',
    title: 'How to Become a Teacher Trainer in India: A Real Career Path Guide',
    description:
      'How to become a teacher trainer in India: the classroom experience you need first, the B.Ed/M.Ed and certification route, where these roles actually exist, and realistic pay.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'career-options',
    slug: 'how-to-become-an-operations-manager-india-career-path',
    title: 'How to Become an Operations Manager in India: The Real Career Path',
    description:
      'How to become an operations manager in India: what the role actually involves, the two real entry routes, which industries hire the most, the skills that get you promoted, and honest salary progression.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'career-options',
    slug: 'sales-career-growth-path-india',
    title: 'Sales Career Growth Path India: How to Grow in Sales Instead of Getting Stuck at Target',
    description:
      'Sales career growth path India: the real role ladder from SDR to VP Sales, what separates people who get promoted from those who plateau, honest base-vs-variable pay by level, and which sectors offer the strongest growth.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'career-options',
    slug: 'e-commerce-operations-career-india-how-to-get-into-ecommerce-ops',
    title: 'E-commerce Operations Career India: How to Get Into Ecommerce Ops',
    description:
      'E-commerce operations career India, mapped role by role: inventory and warehouse work, marketplace and seller ops, catalog management, D2C fulfilment, who hires, and honest salary progression.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'career-options',
    slug: 'devops-roadmap-india',
    title: 'DevOps Roadmap India: How to Become a DevOps Engineer Starting From Linux, Not Kubernetes',
    description:
      'A DevOps roadmap India guide built on real pipeline mechanics: Linux and networking first, then CI/CD, Terraform, Docker, Kubernetes, observability, and the honest DevOps vs SRE split.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'career-options',
    slug: 'video-editing-career-india-how-to-become-a-video-editor',
    title: 'Video Editing Career India: How to Become a Video Editor, Role by Role',
    description:
      'A video editing career India guide built on real post-production workflow, software (Premiere, DaVinci, After Effects), employer types, and honest pay by lane, not generic software tutorials.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'career-options',
    slug: 'project-manager-career-india-pmp-certification-worth-it',
    title: 'Project Manager Career India: Is a PMP Certification Worth It?',
    description:
      'Project manager career India, PMP certification worth it or not: what PMs actually do, which industries hire them, real PMP eligibility and cost, and CAPM/PRINCE2 alternatives.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'career-options',
    slug: 'teaching-vs-corporate-career-india-which-to-choose',
    title: 'Teaching vs Corporate Career India: Which to Choose, Decided Honestly',
    description:
      'Teaching vs corporate career India which to choose: real income trajectories, job security, academic calendar vs corporate hours, and the honest re-entry difficulty if you leave corporate and want to switch back.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'career-options',
    slug: 'how-to-become-a-data-scientist-india',
    title: 'How to Become a Data Scientist in India: The Statistics-First Roadmap',
    description:
      'A data scientist roadmap India guide built on statistics, SQL, A/B testing, and stakeholder communication, not model deployment. See how this path differs from machine learning engineering.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'career-options',
    slug: 'how-to-become-a-business-analyst-entry-level-india',
    title: 'How to Become a Business Analyst Entry-Level in India: What Actually Gets You Hired',
    description:
      'How to become a business analyst entry-level in India: which degrees actually matter, which certification to skip until later, how to build proof with no BA job history, and how BA interviews really run.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'career-options',
    slug: 'how-to-become-a-product-manager-without-tech-background-india',
    title: 'How to Become a Product Manager Without a Tech Background in India',
    description:
      'How to become a product manager without a tech background in India: which non-technical strengths actually transfer, the technical literacy you need (not coding), and 3 real entry routes.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'career-options',
    slug: 'cybersecurity-roadmap-india',
    title: 'Cybersecurity Roadmap India: How to Become a Cybersecurity Professional Without Wasting a Year on the Wrong Cert',
    description:
      'A cybersecurity roadmap India guide: networking-first vs bootcamp entry, SOC analyst, pentest, GRC, and cloud tracks, and the honest Security+/CEH/OSCP/CISSP order.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'how-to-become-an-independent-consultant-india',
    title: 'How to Become an Independent Consultant in India: The Readiness Test',
    description:
      'How to become an independent consultant in India: the expertise depth, network, and runway check before you leave a stable paycheck for retainer clients.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'gig-economy-india-explained-career-implications',
    title: 'Gig Economy in India Explained: What It Means for Your Career',
    description:
      'Gig economy India explained: what it actually includes, how big it has grown, what the Code on Social Security changes for gig workers, and where knowledge-work freelancing fits on the spectrum.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'creator-economy-india-career-opportunities',
    title: 'Creator Economy India Overview: The Career Opportunities Beyond Being a Creator',
    description:
      'A creator economy India overview built around career opportunities: market size, the jobs it has created beyond posting content, who is hiring, and where the industry is realistically headed.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'family-business-vs-job-vs-startup-india',
    title: 'Family Business vs Job vs Startup in India: Which Should You Actually Choose',
    description:
      'Family business vs job vs startup India which to choose: the real trade-offs in autonomy, proving yourself, generational conflict, and financial risk across all three paths, so you decide by fit, not guilt.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'consulting-as-a-career-india-how-to-get-into-consulting',
    title: 'Consulting as a Career in India: How to Get into Consulting',
    description:
      'Consulting as a career India how to get into consulting: entry routes through MBA vs direct hire, target firms, case-solving skills, real pay bands, and the travel-and-hours trade-off before you commit.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'how-to-become-a-solopreneur-india',
    title: 'How to Become a Solopreneur in India: Build a Business, Not a Second Job',
    description:
      'How to become a solopreneur in India without just renaming your freelance hustle: the mindset shift, the three business models that actually scale solo, and the systems that keep you from burning out.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'content-creator-income-india',
    title: 'Content Creator Income in India: How Creators Actually Make Money',
    description:
      'Content creator income in India: the six real ways creators make money, honest earnings by audience size, and why most sustainable creators diversify instead of betting on one stream.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'how-to-start-freelancing',
    title: 'How to Start Freelancing in India: The Playbook Before You Quit Your Job',
    description:
      'How to start freelancing in India without quitting blind: pick a sellable skill, build minimal proof, price your first projects, find real clients, and build the money runway first.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'freelancing-vs-job-india-which-is-better',
    title: 'Freelancing vs Job India: Which Is Better for You, Not in General',
    description:
      'Freelancing vs job India which is better, decided honestly: income variance, health insurance and financial planning gaps, skill growth patterns, isolation vs team learning, and who is actually suited to each.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'digital-marketing-freelancing-india-how-to-start',
    title: 'Digital Marketing Freelancing India: How to Start Without an Agency Job First',
    description:
      'Digital marketing freelancing India how to start: which sub-skill to package first, how to land your first paying client, and whether to charge retainer, project, or performance-based.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'how-to-monetize-your-skills-online-india',
    title: 'How to Monetize Your Skills Online in India: The Decision Map Most Guides Skip',
    description:
      'How to monetize your skills online in India: compare service, product, teaching, and audience-based income models side by side, and pick the one that actually fits your skill and situation.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'starting-a-business-vs-job-india-which-is-better',
    title: 'Starting a Business vs Job in India: Which Is Better for You',
    description:
      'Starting a business vs job India which is better: real startup failure rates, the capital you actually need, founder mindset vs employee mindset, and why business is not freelancing with a bigger name.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'foreign-degree-vs-india-degree-value-job-market',
    title: 'Foreign Degree vs India Degree Value in Job Market: Where the Premium Is Real',
    description:
      'Foreign degree vs India degree value in job market, sector by sector: where a foreign degree genuinely pays off, where it barely moves the needle, and how skills-first hiring is changing the calculation.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'scholarships-for-study-abroad-india',
    title: 'Scholarships for Study Abroad India: What Is Realistic, and How to Actually Compete',
    description:
      'Scholarships for study abroad India, mapped honestly: government-funded awards like Fulbright, Chevening, and DAAD, university merit aid, and private scholarships, plus the real acceptance odds and how to build a genuinely competitive application.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'nri-return-to-india-career-challenges',
    title: 'NRI Return to India Career Challenges: The Real Adjustment After Years Abroad',
    description:
      'NRI return to India career challenges after years abroad: rebuilding a professional network, resetting salary expectations, moving kids and a spouse, and untangling RNOR tax status.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'education-loan-for-study-abroad-india',
    title: 'Education Loan for Study Abroad India: Secured vs Unsecured, and Who Actually Lends',
    description:
      'Education loan for study abroad India compared: secured vs unsecured loans, public-sector bank vs NBFC vs international lenders like Prodigy Finance, moratorium mechanics, and how your university choice decides who will fund you.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'mba-abroad-vs-mba-in-india',
    title: 'MBA Abroad vs MBA in India: The Real Cost and Visa Math',
    description:
      'MBA abroad vs MBA in India compared on real IIM and international fees, break-even time, post-study work visa reality, and honest cases for each path.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'ms-in-computer-science-vs-mba-india',
    title: 'MS in Computer Science vs MBA: Which Should Indian Engineers Actually Pursue?',
    description:
      'MS in Computer Science vs MBA for Indian engineers: real cost and duration, where each path leads, which background fits which, and honest cases for going deeper technical vs pivoting to business.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'opt-after-ms-in-usa-for-indian-students',
    title: 'OPT after MS in USA for Indian students: the rules that decide your timeline',
    description:
      'OPT after MS in USA for Indian students: 12-month OPT vs 24-month STEM extension, filing windows, the 90/150-day unemployment limit, E-Verify rules, and the real H1B bridge timeline.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'return-to-india-after-ms-abroad',
    title: 'Return to India after MS abroad: the practical playbook for timing, jobs, and money',
    description:
      'Return to India after MS abroad, done right: time your move around OPT and visa windows, target Indian employers before you land, and set real salary and relocation expectations.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'stay-abroad-vs-return-to-india-after-studies',
    title: 'Stay Abroad vs Return to India After Studies: A Real Decision Framework',
    description:
      'Stay abroad vs return to India after studies, weighed honestly: salary and career trajectory, visa uncertainty, family, identity, and life-stage timing, without a right-answer script.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'canada-vs-germany-for-masters-india',
    title: 'Canada vs Germany for Masters India: The Real Cost, Visa, and Job-Market Math',
    description:
      'Canada vs Germany for masters India compared on real cost, PGWP vs job-seeker visa mechanics, PR timelines, and which country actually hires for your field.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'uk-vs-australia-for-masters-india',
    title: 'UK vs Australia for Masters India: The Real Cost, Visa, and Job-Market Trade-Off',
    description:
      'UK vs Australia for masters India compared on real cost, the 1-year vs 2-year duration trade-off, Graduate Route vs the 485 visa, and which country hires for your field.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'is-ms-in-usa-worth-it-india',
    title: 'Is MS in USA Worth It for Indian Students? The Real ROI Math',
    description:
      'Is MS in USA worth it India: real total cost by university tier, post-MS salary and OPT earning window, honest H1B lottery odds, and a clear-headed comparison against staying in India.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'ai-future',
    slug: 'ai-changing-digital-marketing-careers-india',
    title: 'How AI Is Changing Digital Marketing Careers in India',
    description:
      'How AI is changing digital marketing careers in India: what AI now automates, which skills pay more, and how to build a career that AI cannot easily copy.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'ai-future',
    slug: 'software-developer-career-future-with-ai-india',
    title: 'Software developer career future with AI in India: what actually changes at your desk',
    description:
      'Software developer career future with AI in India: how Copilot-style tools changed daily coding work, which skills now matter more, and the honest junior vs senior split.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'portfolio-proof-of-work',
    slug: 'portfolio-building-for-freshers-india',
    title: 'Portfolio building for freshers India: what actually belongs in it',
    description:
      'Portfolio building for freshers India: what to include by field, how to build genuine pieces from coursework, where to host them, and the mistakes that cost interviews.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-guidance',
    slug: 'how-to-plan-your-career-path-after-graduation-india',
    title: 'How to Plan Your Career Path After Graduation in India: Direction Over a Fixed Plan',
    description:
      'How to plan your career path after graduation India: honest self-assessment, a flexible 3-5 year direction, and judging your first job by what it teaches you, not just the salary.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'job-search',
    slug: 'how-to-get-a-job-without-experience-india',
    title: 'How to Get a Job Without Experience in India: Breaking the Catch-22',
    description:
      'How to get a job without experience in India, whether you are a fresh graduate or switching fields entirely: what counts as experience, how to frame the gap, and how to get useful before you get paid.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'job-search',
    slug: 'gap-year-after-graduation-india',
    title: 'Gap Year After Graduation India: When It Helps and When It Quietly Costs You',
    description:
      'A gap year after graduation India can be built well or wasted. See honest reasons people take one, how to use the time without hurting your resume, and a decision framework before you commit.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'job-search',
    slug: 'how-to-stand-out-as-a-fresher-india',
    title: 'How to Stand Out as a Fresher in India — Proof Before Polish',
    description:
      'How to stand out as a fresher in India: build real proof of skill before you apply, pick one specific story instead of a generic pitch, and know what recruiters actually notice first.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'job-search',
    slug: 'skills-needed-for-first-job-india',
    title: 'Skills Needed for First Job in India — The Foundational Skills Nobody Tests You On',
    description:
      'Skills needed for first job in India go beyond your degree: clear communication, email etiquette, basic Excel, and time management. See how recruiters actually check for these, even in technical interviews.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'job-search',
    slug: 'best-companies-for-freshers-to-work-at-india',
    title: 'Best Companies for Freshers to Work at in India: A Filter, Not a List',
    description:
      'Best companies for freshers to work at in India are not a fixed ranking. Use a 4-signal filter, real research steps, and red flags to judge any offer before you sign it.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'interviews',
    slug: 'interview-preparation-for-freshers-india',
    title: 'Interview preparation for freshers in India: what to do when you have no work history',
    description:
      'Interview preparation for freshers in India means building answers around academic projects and internships, not apologising for missing experience. HR round, technical round, GD, and calm execution, covered.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'job-search',
    slug: 'first-job-after-graduation-india',
    title: 'First Job After Graduation in India: The Real Numbers Behind Where Offers Come From',
    description:
      'First job after graduation India: the real channel math behind campus, off-campus portals, and referrals, realistic application-to-offer ratios, and what to do in your early days once you get hired.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'linkedin-networking',
    slug: 'linkedin-profile-tips-for-freshers-india',
    title: 'LinkedIn profile tips for freshers India: the profile that actually gets found',
    description:
      'LinkedIn profile tips for freshers India: a headline that is not "Student at X," an about section built without work experience, and how to use Open to Work without looking desperate.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'resume',
    slug: 'resume-tips-for-freshers-india',
    title: 'Resume tips for freshers India: build one with zero work experience',
    description:
      'Resume tips for freshers India who have no job history yet: what to lead with instead, ATS formatting rules that actually matter, and the mistakes that get fresher resumes rejected.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'resume',
    slug: 'good-career-objective-for-resume',
    title: 'Good Career Objective for Resume: Real Examples That Actually Get Read',
    description: 'A good career objective for resume writing, with real examples for freshers, experienced professionals, career switchers, and specific fields, plus the formula and mistakes to avoid.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'rbi-and-sbi-career-growth-india',
    title: 'RBI and SBI career growth India: the regulator ladder vs the commercial bank ladder',
    description:
      'RBI and SBI career growth India compared: RBI Grade B vs Assistant, SBI PO vs Clerk, pay, promotion speed, and why a central bank job and a commercial bank job are not the same career at all.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'is-government-exam-coaching-worth-it-india',
    title: 'Is government exam coaching worth it in India? An honest cost-vs-value breakdown',
    description:
      'Is government exam coaching worth it in India: real coaching fees and relocation costs, what CCPA penalties reveal about fake success claims, and a framework for deciding for your situation.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'what-to-do-after-failed-upsc-attempts-india',
    title: 'What to do after failed UPSC attempts in India: an honest recovery plan',
    description:
      'What to do after failed UPSC attempts in India: the real attempt-limit rules, how to process sunk cost, and where your prep skills genuinely transfer next.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'what-to-do-after-bank-exam-failure-india',
    title: 'What to do after bank exam failure in India: the honest re-attempt math',
    description:
      'What to do after bank exam failure in India: since IBPS and SBI run yearly with no attempt cap, the real question is which stage you failed at and whether to re-attempt, pivot to SSC, or move into BFSI.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'psu-jobs-after-engineering-india',
    title: 'PSU jobs after engineering India: GATE route, PSU-only exams, and the Maharatna gap',
    description:
      'PSU jobs after engineering India run through two doors: GATE-based recruitment and each PSU\'s own written exam. Maharatna vs Navratna vs Miniratna pay, perks, and career ladder compared.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'defence-services-career-india',
    title: 'Defence services career India: entry routes, ranks, pay, and the trade-offs no recruiter mentions',
    description:
      'Defence services career India: compare NDA, CDS, Technical Entry, and Agnipath routes, officer vs other-ranks paths, 7th CPC pay, and the honest family trade-offs.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'ssc-vs-bank-exams-which-to-prepare-india',
    title: 'SSC vs bank exams: which to prepare for in India, when you can only pick one',
    description:
      'SSC vs bank exams which to prepare India: compare SSC CGL/CHSL and IBPS/SBI PO on syllabus overlap, real competition, pay, and career ceiling before you commit a year.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'state-vs-central-government-jobs-india',
    title: 'State vs central government jobs India: the honest trade-off before you pick a track',
    description:
      'State vs central government jobs India compared on real pay commission gaps, State PSC vs UPSC/SSC competition, transfer reality, and prestige — so you pick by fit, not headlines.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'ai-future',
    slug: 'ai-and-human-skills-needed-india',
    title: "AI and Human Skills Needed in India: What's Rising and What's Falling",
    description:
      "AI and human skills needed in India, based on WEF and India labour data: which skills are rising fastest, which are declining, and what it means for your next move.",
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'ai-future',
    slug: 'jobs-ai-cannot-replace-india',
    title: 'Jobs AI Cannot Replace in India: 15 Roles With the Strongest Evidence Right Now',
    description:
      'Jobs AI cannot replace in India, named role by role: nurses, electricians, therapists, early-years teachers, and licensed accountability roles, backed by current shortage and demand data.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'ai-future',
    slug: 'data-analyst-vs-ai-engineer-career-india',
    title: 'Data analyst vs AI engineer career India: the real entry-barrier gap',
    description:
      'Data analyst vs AI engineer career India compared on entry barrier, daily work, salary ceiling, and a realistic path from one role into the other.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'ai-future',
    slug: 'machine-learning-vs-data-science-career-path-india',
    title: 'Machine learning vs data science career path India: the honest head-to-head',
    description:
      'Machine learning vs data science career path India compared on daily work, math and stats depth, tools, salary bands, and career ceiling, plus a fit test for which one to pick.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'ai-future',
    slug: 'generative-ai-career-path-india',
    title: 'Generative AI Career Path India: The Roles This New Field Actually Created',
    description:
      'A generative AI career path in India means LLM app development, RAG and fine-tuning work, GenAI product roles, safety evaluation, or creative-AI work, not classical machine learning. See the real roles and how to enter.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'ai-future',
    slug: 'careers-that-will-survive-ai-india',
    title: 'Careers that will survive AI in India: the four kinds of work automation cannot easily take',
    description:
      'Careers that will survive AI in India share four traits: physical dexterity, deep human trust, legal accountability, or genuine creative judgment. See which categories hold up and which only look safe.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'ai-future',
    slug: 'ai-impact-on-it-jobs-india',
    title: "AI impact on IT jobs India: what is actually shrinking and what is not",
    description:
      "AI impact on IT jobs India is real but uneven: entry-level testing, L1 support, and routine coding are shrinking, while AI oversight, systems design, and architecture roles are gaining ground. See what this means for your next move.",
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'ai-future',
    slug: 'what-to-do-if-your-job-is-replaced-by-ai-india',
    title: 'What to Do If Your Job Is Replaced by AI in India: The Real Recovery Plan',
    description:
      'What to do if your job is replaced by AI in India: financial triage first, an honest skill audit, then a real decision between staying in your field or changing it, with realistic timelines.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'ai-future',
    slug: 'how-to-use-ai-at-work-effectively-india',
    title: 'How to Use AI at Work Effectively in India: Leverage Without the Trap',
    description:
      'How to use AI at work effectively in India: draft and analyse faster, protect company data, stay transparent with your manager, and avoid over-trusting the output.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'ai-future',
    slug: 'ai-tools-for-career-growth-india',
    title: 'AI tools for career growth India: what actually moves the needle',
    description:
      'AI tools for career growth India, by category, not brand hype: resume and interview prep, faster learning, market research, writing polish, and proof of work, plus the honest limits.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'ai-future',
    slug: 'prompt-engineering-career-india',
    title: 'Prompt engineering career India: is the job title worth chasing in 2026?',
    description:
      'Prompt engineering career India: the standalone job title is shrinking while the skill spreads into AI, product, and content roles. Here is the honest picture, and how to actually build it.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'ai-future',
    slug: 'skills-to-work-with-ai-instead-of-being-replaced',
    title: 'Skills to work with AI instead of being replaced by it: the 4 layers that actually matter',
    description:
      'Skills to work with AI instead of being replaced by it: AI literacy, judgment, domain expertise, and communication are the four layers that keep you valuable, whatever role you are in.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 16,
  },
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
    slug: 'pcb-career-options-with-salary',
    title: 'PCB career options with salary: what each path actually pays in India',
    description:
      'PCB career options with salary compared: real MBBS, nursing, physiotherapy, pharmacy, biotech, and allied-health pay - entry level, govt vs private, and true ceilings.',
    publishedAtISO: '2026-08-04',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'pcb-career-options-other-than-medical',
    title: 'Career options for PCB students other than medical: the non-health path map',
    description:
      'Career options for PCB students other than medical span engineering bridge routes, data science, non-clinical biotech research, IT, forensic science, agriculture, and more.',
    publishedAtISO: '2026-08-04',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-after-bsc-for-pcb-students',
    title: 'Best career after BSc for PCB students: the complete options chart',
    description:
      'Best career after BSc for PCB students, in one chart: MSc routes by subject, NET/JRF research, ICAR/DRDO/CSIR jobs, private-sector roles, and the honest salary reality.',
    publishedAtISO: '2026-08-04',
    readTimeMinutes: 20,
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
    slug: 'career-options-in-pcb-with-computer-science',
    title: 'Career options in PCB with Computer Science: what the combination really unlocks',
    description:
      'Career options in PCB with Computer Science: bioinformatics, health informatics, and data-in-healthcare roles it really unlocks, and the JEE/BTech eligibility limits it does not remove.',
    publishedAtISO: '2026-08-04',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-for-pcb-with-psychology',
    title: 'Career options for PCB with psychology: psychiatrist or psychologist, mapped honestly',
    description:
      'Career options for PCB with psychology split into two real routes - psychiatry (MBBS/NEET) and psychology (BA/BSc/RCI). Eligibility, cost, timeline, and pay compared.',
    publishedAtISO: '2026-08-04',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'mht-cet-pcb-career-options',
    title: 'MHT-CET PCB career options: the courses CET actually admits you to',
    description:
      'MHT-CET PCB career options include B.Pharm, Pharm.D, agriculture, and biotech degrees. See what CET actually admits you to, real cutoffs, and what NEET covers instead.',
    publishedAtISO: '2026-08-04',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-options',
    slug: 'pcb-career-options-without-maths',
    title: "Career options with PCB without Maths: what's blocked and what's wide open",
    description:
      'Career options with PCB without Maths: which exams and degrees are blocked, which stay open, and the honest bridge routes into data-adjacent work.',
    publishedAtISO: '2026-08-04',
    readTimeMinutes: 20,
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
    slug: 'first-job-vs-higher-studies-india',
    title: 'First Job vs Higher Studies India: The Real Cost, Timing, and Trade-Off Math',
    description:
      'First job vs higher studies India comes down to opportunity cost, career fit, and money, not prestige. Real MBA/MS costs, admissions data, and a hybrid work-then-study path.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-guidance',
    slug: 'how-to-choose-a-career-after-12th',
    title: 'How to Choose a Career After 12th: Real Plan',
    description:
      'A practical career choice guide with a decision scorecard, career-lane map, college ROI filter, skill-first logic, and clear next steps.',
    publishedAtISO: '2026-04-25',
    readTimeMinutes: 24,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-after-12th-for-girls-in-india',
    title: 'Career options after 12th for girls in India: the real map, not the safe list',
    description:
      'Career options after 12th for girls in India span every stream, plus scholarships, safety-aware college choices, and family-negotiation tactics most guides skip.',
    publishedAtISO: '2026-07-04',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-after-btech-other-than-software',
    title: 'Career after B.Tech other than software: 12 real paths that pay',
    description:
      'Career after B.Tech other than software spans GATE-PSU jobs, UPSC ESE, MBA, product management, data analytics, and patent law. See what fits and what it pays.',
    publishedAtISO: '2026-07-04',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-guidance',
    slug: 'what-to-do-after-12th-confused',
    title: 'What to Do After 12th If You Are Confused: Break the Freeze in 4 Weeks',
    description:
      'What to do after 12th confused: why the freeze happens, the 3-exit protocol to break it, and a 30-day plan to choose a direction without wasting a year.',
    publishedAtISO: '2026-07-04',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-guidance',
    slug: 'best-career-for-my-child-after-12th-india',
    title: "Best Career for My Child After 12th India: A Parent's Decision Filter, Not a Job List",
    description:
      'Best career for my child after 12th India is not one job title — it is a fit, cost, demand, and AI-risk filter. Real exam odds, salary data, and a family-conversation script inside.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'stream-selection',
    slug: 'which-stream-to-choose-in-11th',
    title: 'Which stream to choose in 11th for good career: a fit-first decision guide',
    description:
      'Which stream to choose in 11th for good career depends on fit, not fame. Compare Science, Commerce, and Arts on real income, workload, and NEP subject flexibility.',
    publishedAtISO: '2026-07-04',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-after-12th-maths-without-engineering',
    title: 'Career after 12th maths without engineering: 12 real paths that actually work',
    description:
      'Career after 12th maths without engineering spans actuarial science, statistics, CA, economics, architecture, quant finance, and defense routes. See what fits, what it pays, and how to start.',
    publishedAtISO: '2026-07-04',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'best-courses-after-12th-for-high-salary-india',
    title: 'Best Courses After 12th for High Salary in India: A Degree-by-Degree Ranking',
    description:
      'Best courses after 12th for high salary India, compared as full degrees: BTech CS, BA LLB, CA, BBA, BCA, BHM, nursing, BArch, and BDes on fees, duration, entrance exams, and real salary ranges.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'best-diploma-courses-after-12th',
    title: 'Best diploma courses after 12th: 15 real options, real pay, real trade-offs',
    description:
      'Best diploma courses after 12th span engineering, paramedical, design, and digital tracks. Real fees, salary ranges, lateral-entry rules, and how to pick one without wasting a year.',
    publishedAtISO: '2026-07-04',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'should-i-take-drop-year-after-12th',
    title: 'Should I take drop year after 12th? A clear-headed answer, not a guilt trip',
    description:
      'Should I take drop year after 12th depends on whether you have a real plan or just fear. See the real NEET/JEE data, mental-health reality, costs, and a 4-week test to decide.',
    publishedAtISO: '2026-07-04',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'career-without-degree-after-12th-india',
    title: 'Career without degree after 12th India: 14 real paths, real pay, real risk',
    description:
      'A career without degree after 12th India is realistic in tech, trades, sales, and government roles — if you pick proof over hope. Real salary data, ITI to CS routes, and the honest trade-offs.',
    publishedAtISO: '2026-07-04',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'stream-selection',
    slug: 'cuet-vs-jee-which-is-better-for-career',
    title: 'CUET vs JEE which is better for career: an honest, exam-by-exam answer',
    description:
      'CUET vs JEE which is better for career depends on whether you want engineering or a wider degree path. Compare difficulty, cost, seats, salary data, and a 4-week decision test.',
    publishedAtISO: '2026-07-04',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-change',
    slug: 'career-switch-from-it-to-management-india',
    title: 'Career switch from IT to management India: the real map, not the MBA-only pitch',
    description:
      'Career switch from IT to management India: the real lanes (PM, delivery, product, business analysis), what each pays, whether you need an MBA, and a 90-day plan to test it before you quit.',
    publishedAtISO: '2026-07-04',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-software-engineering-a-good-career-in-india',
    title: 'Is software engineering a good career in India? The honest answer',
    description:
      'Is software engineering a good career in India right now? Yes, with conditions: AI is squeezing entry-level roles, service-company pay is flat, and proof of work decides who wins.',
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-after-mechanical-engineering-in-india',
    title: 'Career after mechanical engineering in India: 13 real paths, real pay',
    description:
      'Career after mechanical engineering in India spans GATE-PSU jobs, EV and robotics roles, design engineering, ESE, MBA, M.Tech, and data-analytics pivots. See what fits and what it pays.',
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'best-mba-specialization-for-engineers',
    title: 'Best MBA specialization for engineers: what actually pays off, not what sounds safe',
    description:
      'The best MBA specialization for engineers depends on your branch, work style, and timeline. Compare operations, business analytics, product management, finance, and tech-strategy tracks with real salary data.',
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-after-electrical-engineering-in-india',
    title: 'Career after electrical engineering in India: 12 real paths, real pay',
    description:
      'Career after electrical engineering in India spans GATE-PSU jobs, DISCOM and railway posts, EPC and switchgear roles, renewable energy, EV power electronics, VLSI pivots, ESE, and M.Tech. See what fits.',
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-for-non-cs-engineers',
    title: 'Career options for non-CS engineers: the real map across every branch',
    description:
      'Career options for non-CS engineers span GATE-PSU jobs, VLSI, BIM, data analytics, MBA, product roles, and core-branch growth. See what fits your branch and what it pays.',
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'data-science-vs-software-engineering-career-india',
    title: 'Data science vs software engineering career India: the honest 2026 comparison',
    description:
      'Data science vs software engineering career India compared on real pay, entry difficulty, degree needs, AI risk, and who actually wins each lane in 2026.',
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-data-science-a-good-career-in-india',
    title: 'Is Data Science a Good Career in India? The Honest 2026 Verdict',
    description:
      'Is data science a good career in India? Real salaries, the 280-applicants-per-opening problem, and who should actually choose it in 2026.',
    publishedAtISO: '2026-08-07',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-digital-marketing-a-good-career-in-india',
    title: 'Is Digital Marketing a Good Career in India? The Honest Answer',
    description:
      'Is digital marketing a good career in India? Real salaries, the course-mill saturation problem, the GEO/AI shift, and who should actually choose it.',
    publishedAtISO: '2026-08-07',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-marketing-a-good-career',
    title: 'Is Marketing a Good Career? Brand, Product, and Research Routes',
    description:
      'Is marketing a good career? Real brand management, product marketing, and market research pay in India, the MBA-marketing route, and who this actually fits.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-options',
    slug: 'good-careers',
    title: 'Good Careers: The 5-Axis Test for What Actually Makes One Good',
    description:
      'Good careers are not one ranked list. Use the 5-Axis Good-Career Test — pay, security, growth, AI-resilience, and life fit — to judge any career honestly.',
    publishedAtISO: '2026-08-09',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'how-to-get-product-manager-job-after-engineering',
    title: 'How to get a product manager job after engineering: the real playbook',
    description:
      'How to get a product manager job after engineering: the internal-transfer shortcut, the APM route, the skill gap you actually need to close, and a portfolio plan that gets interviews.',
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-after-civil-engineering-in-india',
    title: 'Career after B.Tech civil engineering India: 12 real paths, real pay',
    description:
      'Career after B.Tech civil engineering India spans GATE-PSU jobs, UPSC ESE, structural design, BIM, real estate, site engineering, and M.Tech. See what fits and what it pays.',
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-change',
    slug: 'how-to-switch-from-service-company-to-product-company',
    title: 'How to switch from service company to product company: the real roadmap',
    description:
      'How to switch from service company to product company: the DSA and system design gap, resume rewrite, timing by experience level, and a proof plan that gets you shortlisted.',
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-service-company-job-worth-it-for-freshers',
    title: 'Is a service company job worth it for freshers? The honest answer',
    description:
      'Is a service company job worth it for freshers? Yes, as a 1-3 year runway, not a ceiling. Real TCS/Infosys pay, bench policy, and what actually gets you out.',
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'tier-2-college-student-career-options-india',
    title: 'Tier 2 college student career options India: the real gap, and how to close it',
    description:
      'Tier 2 college student career options India: real placement-gap data, off-campus and GATE-PSU routes, and a skill plan that closes the brand gap without needing a metro degree.',
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'skills',
    slug: 'best-skills-for-engineers-who-dont-want-to-code',
    title: "Best skills for engineers who don't want to code: the real skill map",
    description:
      "Best skills for engineers who don't want to code span product thinking, business analysis, technical communication, and client-facing skill stacks. See what to build and what it pays.",
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'stream-selection',
    slug: 'engineering-vs-other-streams-which-is-better-career-india',
    title: 'Engineering vs other streams which is better career India: an honest comparison',
    description:
      'Engineering vs other streams which is better career India depends on fit, not fame. Compare real pay, seat competition, AI risk, and skill demands across engineering, commerce, arts, medicine, and design.',
    publishedAtISO: '2026-07-05',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-after-bcom-in-india',
    title: 'Career after BCom in India: 12 real paths once the degree is actually done',
    description:
      'Career after BCom in India spans CA/CS/CMA direct entry, MBA, MCom, bank PO exams, SSC CGL, and skill-first analytics or marketing roles. Real salary data and what to pick next.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'best-courses-after-bcom-for-high-salary',
    title: 'Best courses after BCom for high salary: ranked by real cost-to-income math',
    description:
      'Best courses after BCom for high salary, ranked by real fees, duration, and pay: CA, CMA, CS, MBA, CFA, ACCA, US CPA, and analytics certifications compared.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'best-postgraduate-courses-for-science-students-india',
    title: 'Best postgraduate courses for science students India: the full map by subject',
    description:
      'Best postgraduate courses for science students India, mapped by Physics, Chemistry, Biology, Maths, and Computer Science: MSc, PhD, MBA, GATE, CSIR-NET, and certifications.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'best-mba-specializations-india',
    title: 'Best MBA specializations in India: how to actually choose one, not just rank one',
    description:
      'The best MBA specializations in India depend on your background and goals. Compare finance, marketing, HR, operations, analytics, international business, and entrepreneurship with real salary data.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'lateral-entry-mba-india',
    title: 'Lateral entry MBA India: what it actually means, and who it is for',
    description:
      'Lateral entry MBA India usually means direct admission into MBA year 2 for PGDM holders or working professionals, not the BTech diploma route. Real eligibility, colleges, and risks.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'best-courses-after-ba-for-good-salary-india',
    title: 'Best courses after BA for good salary India: 8 paths ranked by real ROI',
    description:
      'Best courses after BA for good salary India, ranked by real cost, time, and pay: MBA, law via CLAT-PG, MA Economics, public policy, journalism, digital marketing, data analytics, and UX design.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-ca-a-good-career-in-india',
    title: 'Is CA a good career in India? The honest verdict, not the family-function version',
    description:
      'Is CA a good career in India? Yes, if you can survive a 5-15% pass rate and 3 years on Rs 4,000-20,000 a month. Real articleship life, Big 4 vs practice pay, and AI risk inside.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-in-finance-vs-accounting-india',
    title: 'Career in finance vs accounting India: the honest head-to-head',
    description:
      'Career in finance vs accounting India compared on real pay, entry exams, day-to-day work, and AI risk for analysts, investment bankers, CAs, and auditors.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'mba-after-bcom-worth-it-in-india',
    title: 'MBA after BCom worth it in India? The real ROI math by tier',
    description:
      'MBA after BCom worth it in India depends on institute tier. Real IIM vs tier-2 vs tier-3 fees, salaries, ROI payback, CAT reality, and who should skip it.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-after-bcom-other-than-ca-and-mba',
    title: 'Career after BCom other than CA and MBA: 11 paths that actually pay',
    description:
      'Career after BCom other than CA and MBA spans bank PO, SSC CGL, business analyst, digital marketing, MCom plus NET, and UPSC, with real salary data.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'skills',
    slug: 'best-skills-for-commerce-students-to-learn',
    title: 'Best skills for commerce students to learn: the stack that actually pays',
    description:
      'The best skills for commerce students to learn are Excel and financial modelling, GST and accounting software, data analytics, digital marketing, and business communication. See real costs, timelines, and pay.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-in-investment-banking-india-how-to-start',
    title: 'Career in investment banking India: how to start without an IIM tag',
    description:
      'A career in investment banking India how to start guide: real entry routes, bulge bracket vs boutique pay, actual work hours, and a roadmap for people not already at a top IIM.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-investment-banking-a-good-career',
    title: 'Is Investment Banking a Good Career? Real Pay, Hours, AI Risk, Verdict',
    description:
      'Is investment banking a good career in India? Real analyst-to-MD pay, the 70-100 hour week most brochures skip, AI cutting junior grunt work, and who should choose it.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 22,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-microbiology-a-good-career',
    title: 'Is Microbiology a Good Career? Real Pay, the PhD Trap, Verdict',
    description:
      'Is microbiology a good career in India? Real pay by sector, why the NET-JRF/PhD research route is far more competitive than it looks, and the faster industry paths that actually pay.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-radiology-a-good-career',
    title: 'Is Radiology a Good Career? Real Pay, the AI Question, Verdict',
    description: 'Radiologist vs radiology technician are two very different careers under one search term. Real salary data, NEET-PG seat competition, and an honest look at AI replacing radiologists.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-web-development-a-good-career',
    title: 'Is Web Development a Good Career in 2026? Pay, AI Risk, Verdict',
    description: 'Is web development a good career with AI writing code now? Real India salary data by stack and experience, which web-dev roles AI is actually replacing, and an honest verdict.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-bams-a-good-career-option',
    title: 'Is BAMS a Good Career Option? Real Pay, Scope, and Verdict',
    description: 'Is BAMS a good career option in India? Real income data for private practice, PG routes, government scope, and how BAMS compares honestly against MBBS and other allied paths.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-bioinformatics-a-good-career',
    title: 'Is Bioinformatics a Good Career? Real Pay, AI Overlap, Verdict',
    description: 'Is bioinformatics a good career in India? Real salary data across research, industry, and pharma roles, the honest AI/automation overlap question, and a clear verdict framework.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-logistics-a-good-career',
    title: 'Is Logistics a Good Career in India? Real Pay, Growth, Verdict',
    description: 'Is logistics a good career in India? Real salary data across operations, supply chain, and management roles, honest automation risk, and how far this field can genuinely scale.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-supply-chain-management-a-good-career',
    title: 'Is Supply Chain Management a Good Career in India? Real Pay, Verdict',
    description: 'Is supply chain management a good career in India? A function-by-function verdict across procurement, logistics, inventory, demand planning, and vendor management, with real automation risk and pay ceiling by function.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-merchant-navy-a-good-career',
    title: 'Is Merchant Navy a Good Career? Real Pay, Life at Sea, Verdict',
    description: 'Is merchant navy a good career in India? Real salary data by rank, the honest lifestyle trade-offs of months at sea, entry routes, and an honest verdict framework.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-marine-engineering-a-good-career',
    title: 'Is Marine Engineering a Good Career? Pay, COC Exams, Verdict',
    description: 'Is marine engineering a good career? Real pay by rank, the actual COC exam ladder from 4th Engineer to Chief Engineer, the placement-scam risk, and shore-based paths after sea time.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-product-management-a-good-career',
    title: 'Is Product Management a Good Career? Real Pay, Entry Routes, Verdict',
    description: 'Is product management a good career in India? Real salary data by experience, the honest entry-route problem nobody talks about, AI impact on the role, and a clear verdict.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'financial-analyst-career-path-india',
    title: 'Financial analyst career path India: the calmer, real route to good pay',
    description:
      'The financial analyst career path in India runs from junior analyst to senior analyst to manager in FP&A, equity research, corporate finance, or credit analysis. Real salary, skills, and the honest ladder.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'parents',
    slug: 'how-to-guide-child-in-career-selection-india',
    title: 'How to guide child in career selection India: a parent\'s process, not a pitch',
    description:
      'How to guide child in career selection India: use timing, open questions, assessments as one input, and a family scorecard instead of pressure or a pre-decided answer.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-engineering-still-a-good-career-in-india',
    title: 'Is engineering still a good career in India? The honest verdict',
    description:
      'Is engineering still a good career in India? Yes, for the right branch, college tier, and skill plan. Real placement data, branch-wise pay, AI risk, and a decision test before you commit four years.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'safe-career-options-for-girls-in-india',
    title: 'Safe career options for girls in India: the 4 kinds of "safe" that actually matter',
    description:
      'Safe career options for girls in India means four different things - legal workplace protection, income stability, physical/commute safety, and family approval. See real data on each before you choose.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'education-loan-worth-it-india-private-college',
    title: 'Education loan worth it India private college: the real math before you sign',
    description:
      'Education loan worth it India private college depends on placement data, interest cost, and your skill plan - not the campus brochure. Real rates, ROI math, and a decision test inside.',
    publishedAtISO: '2026-07-06',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'private-college-vs-government-college-career-outcomes-india',
    title: 'Private college vs government college career outcomes India: what the data says',
    description:
      'Private college vs government college career outcomes in India depend on the field, not the label. Real placement, salary, and hiring data across engineering, medicine, law, and management.',
    publishedAtISO: '2026-07-07',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'parents',
    slug: 'how-to-support-child-during-career-confusion',
    title: 'How to support child during career confusion: the support ladder',
    description:
      'How to support child during career confusion: notice the signs, name the feeling, normalize the stage, and navigate with them — a research-backed emotional support approach, not a decision script.',
    publishedAtISO: '2026-07-07',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'parents',
    slug: 'signs-of-career-confusion-in-teenager-india',
    title: 'Signs of career confusion in teenager India: the 4-signal recognition check',
    description:
      'Signs of career confusion in teenager India: a research-backed way to tell normal teenage uncertainty apart from real confusion, using four behavioral signals and a simple checklist.',
    publishedAtISO: '2026-07-07',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-for-average-students-india',
    title: 'Career options for average students in India: real paths, not a consolation list',
    description:
      'Career options for average students in India span government exams with no percentage cutoff, skill-first tech and digital roles, diploma and trade routes, and business paths - each with real income data and no marks-shaming.',
    publishedAtISO: '2026-07-07',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'how-to-read-college-placement-report-india',
    title: 'How to read a college placement report India: the 7-signal decoding framework',
    description:
      'How to read a college placement report India: decode median vs average, spot small-sample tricks, tell CTC from in-hand, and verify claims before you trust a single number.',
    publishedAtISO: '2026-07-07',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'parents',
    slug: 'expensive-coaching-vs-skill-building-which-is-better-for-child',
    title: 'Expensive coaching vs skill building which is better for child: the real cost-and-odds math',
    description:
      'Expensive coaching vs skill building which is better for child: real Kota fee data, JEE/NEET odds, skill-course costs, and a family decision filter for where the money should go.',
    publishedAtISO: '2026-07-07',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'parents',
    slug: 'how-much-to-spend-on-child-education-india',
    title: 'How much to spend on child education India: a stage-by-stage budget map',
    description:
      'How much to spend on child education India depends on stage, not one number. Real fee data, inflation rates, and income-percentage benchmarks for a budget that lasts to college.',
    publishedAtISO: '2026-07-07',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'how-to-compare-colleges-for-career-outcome-india',
    title: 'How to compare colleges for career outcome India: the 8-column scorecard',
    description:
      'How to compare colleges for career outcome India: a real side-by-side scorecard covering placement consistency, recruiter quality, faculty ratio, dropout rate, and fee-to-outcome math.',
    publishedAtISO: '2026-07-07',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'best-careers-for-introverts-in-india',
    title: 'Best careers for introverts in India: the fit test, not just a job list',
    description:
      'Best careers for introverts in India go beyond a generic job list - the real filter is energy pattern, deep-work capacity, and proof style. Real research, real roles, real salary data.',
    publishedAtISO: '2026-07-07',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-for-creative-people-india',
    title: 'Career options for creative people in India: the aptitude test before the job list',
    description:
      'Career options for creative people in India, tested against real creative-aptitude research, current Indian design and content salary data, and the neuroscience that debunks the right-brain myth.',
    publishedAtISO: '2026-07-07',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'best-career-for-analytical-thinkers-india',
    title: 'Best career for analytical thinkers in India: not the same as being good at maths',
    description:
      'Best career for analytical thinkers in India, tested against real reasoning research and current Indian salary data across data, strategy, research, and systems roles - not a maths list.',
    publishedAtISO: '2026-07-10',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'careers-for-people-who-love-to-teach-india',
    title: 'Careers for people who love to teach in India: the honest map beyond the classroom',
    description:
      'Careers for people who love to teach in India go beyond the classroom - real pay data across teaching, coaching, corporate training, and edtech, tested against real teaching-aptitude research.',
    publishedAtISO: '2026-07-10',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-for-multitaskers-india',
    title: "Career options for multitaskers in India: the science says you're a juggler, not a multitasker",
    description:
      "Career options for multitaskers in India, tested against real task-switching research and current salary data across operations, events, hospital roles, startups, and executive assistant work.",
    publishedAtISO: '2026-07-10',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'best-career-if-you-like-numbers-india',
    title: 'Best career if you like numbers in India: the 4 number instincts test',
    description:
      'Best career if you like numbers in India depends on your number instinct, not one job title. Real 2026 Indian pay data across 5 numbers-heavy career lanes.',
    publishedAtISO: '2026-07-10',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-for-people-good-at-communication-india',
    title: 'Career options for people good at communication in India - the 4 currencies before you pick a lane',
    description:
      'Career options for people good at communication in India go beyond sales and teaching - real PR, HR, journalism, and diplomacy pay data, tested against the 4 Communication Currencies framework.',
    publishedAtISO: '2026-07-10',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-guidance',
    slug: 'how-to-find-the-right-career-for-me-india',
    title: 'How to Find the Right Career for Me: The 4 Fit Signals That Beat a Quiz',
    description:
      'How to find the right career for me: use the 4 Fit Signals - attention, feedback, friction, and market proof - instead of trusting a one-time personality quiz result.',
    publishedAtISO: '2026-07-10',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-guidance',
    slug: 'factors-to-consider-when-choosing-a-career',
    title: 'Which Factor Is Important While Choosing a Career? The 8 That Actually Decide It',
    description:
      'Which factor is important while choosing a career: compare pay, passion, stability, growth, market demand, and family pressure honestly, then weigh what matters for you.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'career-guidance',
    slug: 'should-you-choose-a-career-for-money',
    title: 'Should People Choose Careers That Are Monetarily Rewarding? The Honest Verdict',
    description:
      'Should people choose careers that are monetarily rewarding? Income-happiness research, burnout data, and survivorship bias say the honest answer is not a simple yes or no.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 14,
  },
  {
    categorySlug: 'career-guidance',
    slug: 'what-career-should-i-choose',
    title: 'What Career Should I Choose? The 5-Step Decision Ladder That Actually Ends the Indecision',
    description:
      'What career should I choose: a 5-step decision ladder - real shortlist, hard-constraint cut, weighted scoring, one cheap test, decide-by date - instead of waiting to feel certain.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'career-guidance',
    slug: 'how-to-choose-a-career-as-a-teenager',
    title: 'How to Choose a Career as a Teenager: The 3-Window Plan Before Any Work History',
    description:
      'How to choose a career as a teenager, without a resume yet: the 3-Window Plan for stream choice, family permission, peer pressure, and exam-result anxiety.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'career-options',
    slug: 'careers-for-people-who-dont-like-desk-jobs-india',
    title: "Career for people who don't like desk jobs in India: the 4 Movement Signals before you pick a lane",
    description:
      "Career for people who don't like desk jobs in India, tested against real pay data across fitness, culinary, construction, defence, and logistics - and the 4 Movement Signals framework, not a police-or-chef list.",
    publishedAtISO: '2026-07-10',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'upsc-alternative-careers-for-humanities-students-india',
    title: 'UPSC alternative careers for humanities students India: 9 real paths that pay',
    description:
      'UPSC alternative careers for humanities students India include state PSC, policy research, journalism, teaching, HR, law, and development-sector roles. Real odds, real pay, and a way to test a path before you quit prep.',
    publishedAtISO: '2026-07-14',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'careers-for-people-who-want-to-help-others-india',
    title: 'Career for people who want to help others in India - the 4 Care Signals before you pick a track',
    description:
      'Career for people who want to help others in India, tested against real pay data across nursing, counselling, social work, public health, and NGOs - and the 4 Care Signals framework, not a doctor-or-NGO list.',
    publishedAtISO: '2026-07-10',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'journalism-vs-content-writing-career-india',
    title: 'Journalism vs content writing career India: the honest comparison',
    description:
      'Journalism vs content writing career India compared on real pay, entry path, job security, gig risk, and how AI is reshaping each field differently in 2026.',
    publishedAtISO: '2026-07-14',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-journalism-a-good-career-india',
    title: 'Is journalism a good career in India? The honest read on pay and risk',
    description:
      'Is journalism a good career in India? Real pay across print, TV, and digital, the press-freedom risk field reporters carry, and who genuinely fits this path in 2026.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'medical-careers',
    slug: 'career-options-in-medical-field-other-than-doctor-india',
    title: 'Career options in medical field other than doctor India: 12 real paths that pay',
    description:
      'Career options in medical field other than doctor India span nursing, physiotherapy, pharmacy, medical coding, clinical research, and public health. Real degrees, salaries, and next steps.',
    publishedAtISO: '2026-07-14',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-after-mbbs-other-than-clinical-practice-india',
    title: 'Career after MBBS other than clinical practice India: 10 real paths that pay',
    description:
      'Career after MBBS other than clinical practice India spans healthcare management, medical writing, medical affairs, clinical research, public health, health-tech, and insurance. Real salary data inside.',
    publishedAtISO: '2026-07-14',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-in-psychology-india-salary-scope',
    title: 'Career in psychology India salary scope: 6 real tracks, RCI rules, and honest pay data',
    description:
      'Career in psychology India salary scope spans six tracks - clinical, counselling, HR, research, UX, and analytics. Real RCI rules and pay data, not hype.',
    publishedAtISO: '2026-07-14',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'best-paying-jobs-for-humanities-students-india',
    title: 'Best paying jobs for humanities students India: ranked by real pay, not prestige',
    description:
      'Best paying jobs for humanities students India, ranked by actual salary progression: law, UX writing, policy consulting, HR and L&D, corporate communications, psychology, and media management.',
    publishedAtISO: '2026-07-14',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-in-public-relations-india',
    title: "Career in public relations India: real pay, real entry routes, and what's changing",
    description:
      'A career in public relations India spans agency and in-house paths, real salary bands by experience and city, and how digital and influencer PR are reshaping entry-level work.',
    publishedAtISO: '2026-07-14',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'ux-writing-career-path-india',
    title: 'UX writing career path India: the real route, not the generic pivot advice',
    description:
      'The UX writing career path India runs through content writing, design, or product roles into a portfolio-first product job. Real salary data, skills, tools, and a step-by-step entry plan.',
    publishedAtISO: '2026-07-14',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-after-ba-history-india',
    title: 'Career after BA history India: 9 real paths beyond UPSC and the classroom',
    description:
      'Career after BA history India spans archives, museums, archaeology, civil services, teaching, law, and heritage tourism. Real eligibility, pay, and exams inside.',
    publishedAtISO: '2026-07-14',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-in-social-media-management-india',
    title: 'Career in social media management India: 3 real lanes, real pay, and what AI changed',
    description:
      'Career in social media management India spans agency, in-house, and freelance lanes with different pay and AI risk. Real salary data and a portfolio plan.',
    publishedAtISO: '2026-07-14',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'content-writing-vs-copywriting-career-india',
    title: 'Career in content writing vs copywriting India: the honest pay-and-fit comparison',
    description:
      'Career in content writing vs copywriting India compared on real pay, entry path, freelance vs in-house patterns, and how AI is squeezing each differently in 2026.',
    publishedAtISO: '2026-07-14',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-in-research-for-humanities-students-india',
    title: 'Career in research for humanities students India: 5 real paths, real pay',
    description:
      'A career in research for humanities students India spans academia, policy think tanks, market research, UX research, and NGO/social-sector research. Real stipends, salaries, and entry routes.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'medical-careers',
    slug: 'best-paramedical-courses-scope-in-india',
    title: 'Best paramedical courses scope in India: 10 specializations, real pay, real rules',
    description:
      'The best paramedical courses in India span lab technology, radiography, OT technology, dialysis, optometry, and respiratory therapy. Real NCAHP rules, salaries, and entrance routes for 2026.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'medical-careers',
    slug: 'clinical-research-career-path-india',
    title: 'Clinical research career path India: the CRC-to-manager ladder, not just the CRA job',
    description:
      'The clinical research career path India runs from CRC to CRA to clinical project manager, open to life sciences, pharmacy, nursing, and MBBS graduates. Real salary, CDSCO rules, and ICH-GCP certification inside.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'medical-careers',
    slug: 'career-in-pharmacy-india-scope-future',
    title: 'Career in pharmacy India scope and future: 6 real paths, PCI rules, and honest pay data',
    description:
      'A career in pharmacy in India runs from D.Pharm and B.Pharm to Pharm.D, retail, hospital, QA/QC, regulatory affairs, and pharmacovigilance. Real PCI rules, salaries, and future demand signals inside.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'medical-careers',
    slug: 'medical-coding-career-india',
    title: 'Medical coding career scope salary India: the real ladder, not just the CPC pitch',
    description:
      'Medical coding career scope salary India runs from Rs 2.5-4.5 LPA at entry to Rs 12-20 LPA for auditors and specialty coders. No MBBS needed, CPC and CCS certification explained, and how AI is changing entry-level roles.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'medical-careers',
    slug: 'physiotherapy-career-scope-salary-india',
    title: 'Physiotherapy career scope salary India: the real progression, not the brochure version',
    description:
      'Physiotherapy career scope salary India, mapped honestly: BPT/MPT structure, sports/neuro/ortho/pediatric tracks, clinic vs hospital vs sports-team pay, and the home-healthcare shift.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'medical-careers',
    slug: 'career-after-bsc-nursing-india-scope',
    title: 'Career after BSc nursing India scope: 9 real paths from ward to abroad',
    description:
      'Career after BSc nursing India scope spans ICU nursing, OT nursing, nurse educator (M.Sc route), nursing administration, community health, and Gulf/UK/US nursing abroad. Real INC/NNMC rules and salary data.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-after-ba-english-literature-india',
    title: 'Career after BA English literature India: 9 real paths beyond content writing and NET',
    description:
      'Career after BA English literature India spans publishing, editing, academia, civil services, law, translation, and ELT abroad. Real salary, exams, and next steps inside.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'hr-career-path-in-india-salary-growth',
    title: 'HR career path in India: the real salary growth ladder, not just job titles',
    description:
      'The HR career path in India salary growth story runs from recruiter to HRBP to HR manager to CHRO, but specialisation changes the math. Real pay data by level, branch, and certification.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-hr-a-good-career-in-india',
    title: 'Is HR a Good Career in India? Pay, AI Risk, Verdict',
    description:
      'Is HR a good career in India? Real pay by entry route, ATS/AI risk by task, growth ceiling data, and who this people-facing path fits — the 2026 verdict.',
    publishedAtISO: '2026-08-15',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-veterinary-a-good-career',
    title: 'Is Veterinary a Good Career? NEET Seats, Real Pay, and the Honest Verdict',
    description:
      'Is veterinary a good career in India? Real NEET seat math, VCI licensing, government vs private vs own-clinic pay, and who this animal-first path genuinely fits.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-optometry-a-good-career',
    title: 'Is Optometry a Good Career? Pay, Licensing Reality, and the Verdict',
    description:
      'Is optometry a good career in India? Real entry pay across retail, hospitals, and own practice, the new licensing shift, and who this eye-care path fits.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-options-after-ma-in-india',
    title: 'Career options after MA in India: the 4 real doors once the degree is done',
    description:
      'Career options after MA in India span academia via NET-JRF-PhD, civil services, teaching, and corporate roles. Real pay, exam odds, and a decision test for each door.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-change',
    slug: 'career-change-after-5-years-india',
    title: 'Career change after 5 years India: the inflection point nobody warns you about',
    description:
      "Career change after 5 years India hits a real structural moment — too senior for entry roles, not senior enough to lead. Here's how to test the move before you commit.",
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'career-change',
    slug: 'it-to-non-it-career-switch-india',
    title: 'IT to non-IT career switch India: 7 real doors, and what each one actually costs you',
    description:
      'IT to non-IT career switch India: teaching, government exams, HR/L&D, consulting, entrepreneurship, and non-IT finance compared on real entry routes, pay resets, and timelines.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-change',
    slug: 'career-change-at-30-india',
    title: 'Career change at 30 India: what is actually different from switching in your 20s',
    description:
      'Career change at 30 India means EMIs, marriage timing, and family pressure enter the decision. A realistic runway and risk framework for switching at this specific age.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'career-change',
    slug: 'rebuild-career-after-layoff-india',
    title: 'Rebuild career after layoff India: the real restart plan, not the pep talk',
    description:
      'Rebuild career after layoff India: the money math, resume gap answer, and same-field-vs-pivot decision before you touch a job board or send one application.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'medical-careers',
    slug: 'health-information-management-career-india',
    title: 'Health information management career India: the EHR-to-analytics map, not just coding',
    description:
      'A health information management career in India spans EHR/EMR administration, health data analytics, HIM compliance, and hospital informatics. Real roles, degrees, salary, and ABDM/DPDP context inside.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-change',
    slug: 'second-career-at-40-india',
    title: 'Second career at 40 India: the real playbook for building something new without starting from zero',
    description:
      'Second career at 40 India means leveraging 15+ years of expertise into consulting, mentoring, a business, or advisory work, not starting over. Real lanes, pay data, age-bias workarounds, and a financial-safety plan.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-change',
    slug: 'sales-to-marketing-career-switch-india',
    title: 'Sales to marketing career switch India: the 4 real lanes, and what each one costs you',
    description:
      'Sales to marketing career switch India: which lane fits (sales enablement, customer marketing, product marketing, growth), the skills to build first, real pay data, and how to pitch it internally vs externally.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-change',
    slug: 'career-switch-tips-for-it-professionals-india',
    title: 'Career switch tips for IT professionals India: check the bond, the counter-offer, and the interview gap first',
    description:
      'Career switch tips for IT professionals India: audit your notice period and bond clause, handle counter-offers, prep for lateral interviews, and pick the right switch type for your situation.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-guidance',
    slug: 'how-to-get-promoted-faster-india',
    title: 'How to get promoted faster in India: what actually moves the decision',
    description:
      'How to get promoted faster in India: the sponsor gap, calibration timing, scope expansion, and how to tell if your promotion is delayed on purpose or genuinely not ready.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-change',
    slug: 'switch-to-remote-work-career-india',
    title: 'How to switch to a remote-work career in India: the skills, scams, and paperwork nobody explains',
    description:
      'How to switch to a remote-work career in India: which skills convert fastest, how to spot fake job posts, and the tax and payment rules nobody explains.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-change',
    slug: 'career-plateau-how-to-break-through-india',
    title: 'Career plateau: how to break through in India — the 3-Layer Plateau Check',
    description:
      "Career plateau how to break through in India: run the 3-Layer Plateau Check to find out if it's you, your manager, or the company, then fix the right one.",
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-change',
    slug: 'skills-needed-for-career-change-india',
    title: 'Skills needed for career change India: the 3-Gap Audit before you commit',
    description:
      'Skills needed for career change India: how to separate transferable from role-specific skills, audit yourself against real job descriptions, and build proof before you have the job.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-change',
    slug: 'mid-career-strategies-india',
    title: 'Mid-career strategies in India: the 5 decisions that shape your next decade',
    description:
      'Mid-career strategies in India: specialize or diversify, build visibility, pick a track, time a sabbatical, and get the money math right — one clear framework, not five separate guesses.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'skills',
    slug: 'best-courses-for-working-professionals-india',
    title: 'Best courses for working professionals India: the ROI checklist before you enroll',
    description:
      'Best courses for working professionals India: how to verify curriculum currency, instructor credibility, and placement claims before you enroll.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'skills',
    slug: 'best-skills-for-high-salary-in-india',
    title: 'Best skills for high salary in India: the ranked list, ranked by proof, not hype',
    description:
      'The best skills for high salary in India right now are AI/ML literacy, cloud engineering, cybersecurity, data analytics, product management, and specialist digital marketing. Real salary bands and how to pick one.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'skills',
    slug: 'high-income-skills-without-a-degree-india',
    title: 'High-income skills without a degree India: 6 lanes that actually pay',
    description:
      'High-income skills without a degree India: sales, bootcamp coding, design, video and content, digital marketing execution, and trades. Real pay, honest degree bias, and how proof of work replaces the certificate.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'skills',
    slug: 'digital-marketing-vs-data-analytics-career-india',
    title: 'Digital marketing vs data analytics career India: the honest fit-first comparison',
    description:
      'Digital marketing vs data analytics career India compared on real daily work, personality fit, entry barrier, salary, and growth ceiling — plus where the two actually overlap.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'skills',
    slug: 'how-long-does-it-take-to-learn-digital-marketing-india',
    title: 'How long does it take to learn digital marketing in India: the honest, channel-by-channel timeline',
    description:
      'How long does it take to learn digital marketing in India depends on which channel you mean — SEO, paid ads, social, content, or email. Real timelines for basics vs interview-ready, per channel.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'skill-roadmaps',
    slug: 'product-manager-skills-roadmap-india',
    title: 'Product manager skills roadmap India: what actually gets you hired',
    description:
      'Product manager skills roadmap India: the 6 core skills, 3 real entry paths, certifications worth doing, and a realistic sequence to get interview-ready.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'skill-roadmaps',
    slug: 'ux-design-career-path-india',
    title: 'UX design career path India: the real map, not the visual-polish myth',
    description:
      'UX design career path India: research, wireframing, prototyping, and testing, not just visuals. Real tools, portfolio rules, and entry paths inside.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'skill-roadmaps',
    slug: 'full-stack-developer-roadmap-india',
    title: 'Full-stack developer roadmap India: the build order that actually gets you hired',
    description:
      'A realistic full-stack developer roadmap India: what full stack means today, the right learning order, which stack to pick, proof-of-work projects, and full stack vs specializing.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'skill-roadmaps',
    slug: 'machine-learning-roadmap-india',
    title: 'Machine learning roadmap India: the math, tools, and portfolio order that actually gets you hired',
    description:
      'A machine learning roadmap India guide with honest math prerequisites, Python and ML tools, engineer vs data scientist paths, and the portfolio order that gets interviews.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-change',
    slug: 'upskilling-for-career-change-india',
    title: 'Upskilling for career change in India: the execution plan, not the skill list',
    description:
      'Upskilling for a career change in India comes down to execution: pick the right learning format, study while employed without burning out, and turn course completion into interview proof.',
    publishedAtISO: '2026-07-16',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'skills',
    slug: 'python-vs-java-which-to-learn-first-india',
    title: 'Python vs Java: which to learn first in India — the honest verdict by career path',
    description:
      'Python vs Java which to learn first in India depends on your target role: Python wins for AI, data science, and scripting; Java wins for Android and enterprise backend. See the real comparison.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'skills',
    slug: 'content-marketing-vs-seo-career-india',
    title: 'Content marketing vs SEO career India: two jobs hiding under one job title',
    description:
      'Content marketing vs SEO career India compared on real daily work, personality fit, entry barrier, salary, and freelance demand — plus the overlap role that actually pays best.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'skill-roadmaps',
    slug: 'cloud-computing-career-skills-india',
    title: 'Cloud computing career skills India: the honest roadmap from zero to hired',
    description:
      'Cloud computing career skills India: real role paths (cloud engineer, DevOps, architect, security), an honest AWS vs Azure vs GCP comparison, certification costs, and a learning sequence.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'skills',
    slug: 'graphic-design-vs-ui-ux-design-career-india',
    title: 'Graphic design vs UI/UX design career India: the honest fit-first comparison',
    description:
      'Graphic design vs UI/UX design career India compared on real daily work, skill overlap, salary, freelance viability, and growth ceiling — plus how to test your fit before you commit.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'supply-chain-management-career-india',
    title: 'Supply chain management career India: the real entry map, not the LinkedIn hype',
    description:
      'Supply chain management career India spans procurement, logistics, inventory, and demand planning. Real entry paths, salary data, and which certifications actually matter.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'skills',
    slug: 'which-programming-language-to-learn-first-india',
    title: 'Which programming language to learn first in India: choose by goal',
    description:
      'Which programming language to learn first in India depends on your goal: web dev, data/AI, mobile, enterprise, or systems. Use this decision framework, not a ranking chart.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'skills',
    slug: 'business-analyst-vs-data-analyst-career-india',
    title: 'Business analyst vs data analyst career India: the honest fit-first comparison',
    description:
      'Business analyst vs data analyst career India compared on real daily work, required tools, entry qualifications, salary bands, and which senior roles each path actually opens up.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'is-executive-mba-worth-it-in-india',
    title: 'Is an executive MBA worth it in India? Only for one specific profile',
    description:
      'Executive MBA worth it India comes down to one filter: are you leading already, or trying to switch fields? Real EMBA format, fees, sponsorship data, and who should pick a regular MBA instead.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'is-iim-worth-the-cost-india',
    title: 'Is IIM worth the cost in India? The real fee-to-placement math',
    description:
      'Is IIM worth the cost in India? Real fees and placements by IIM tier, CAT odds, the true 2-year opportunity cost, and honest cases where even an IIM is not the right move.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'mba-salary-growth-over-time-india',
    title: 'MBA Salary Growth Over Time in India: The Real Curve, Tier by Tier',
    description:
      'MBA salary growth over time in India is steep early, then splits hard by tier. Real 0-15 year data, and whether the MBA premium survives non-MBA competition.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'mba-without-work-experience-india',
    title: 'MBA without work experience India: who takes freshers, who does not',
    description:
      'MBA without work experience India is normal at IIMs, FMS, and XLRI BM/HRM, but ISB and XLRI GM want 2-3 years first. Real fresher data, IPM alternatives, and an honest wait-or-go test.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'mba-finance-vs-marketing-india',
    title: 'MBA finance vs marketing India: the honest head-to-head before you pick',
    description:
      'MBA finance vs marketing India compared on real fit, placement packages, recruiter patterns, and career ceiling — CFO track vs CMO track — so you choose with data, not a coin toss.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'msc-vs-mba-india',
    title: 'MSc vs MBA India: the real fork for science graduates, not two versions of the same choice',
    description:
      'MSc vs MBA India is a fork between depth and generalism, not a ranking. See what MSc in Physics, Chemistry, Biotech, or Data Science actually leads to versus an MBA, with real salary and exam data.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'distance-mba-worth-it-india',
    title: 'Distance MBA India worth it? The honest answer depends on who is asking',
    description:
      'Distance MBA India worth it comes down to one filter: are you already employed, or chasing a first job? UGC-DEB verification, real university list, fees, and honest employer reality inside.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'mba-vs-professional-certification-india',
    title: 'MBA vs professional certification India: what actually pays off, tier by tier',
    description:
      'MBA vs professional certification India compared on real cost, time, and employer signal, plus which career tracks PMP, CFA, and analytics certifications actually unlock.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'college-degrees',
    slug: 'phd-vs-industry-job-india',
    title: 'PhD vs industry job India: the real 5-year money and career math',
    description:
      'PhD vs industry job India compared on real CSIR-UGC stipends, faculty job odds, opportunity cost, and which industry roles actually pay for a PhD versus which ones do not.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'college-degrees',
    slug: '1-year-mba-india-worth-it',
    title: '1-year MBA India worth it? The real trade-off vs the 2-year format',
    description:
      '1-year MBA India worth it depends on your work experience and money math. ISB PGP, IIM-A PGPX, and XLRI GMP fees, eligibility, and the real opportunity-cost comparison against a 2-year MBA.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'government-jobs-after-engineering-india',
    title: 'Government jobs after engineering India: the complete route map',
    description:
      'Government jobs after engineering India run through GATE-PSU, UPSC ESE, SSC JE, RRB JE/SSE, state PSC, and defence entries. Real cutoffs, pay, and prep timelines for each.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'career-options-after-upsc-cse-india',
    title: 'Career options after UPSC CSE India: the real map once you clear it',
    description:
      'Career options after UPSC CSE India span IAS, IPS, IFS, IRS, and other Group A services. See how rank and DAF preference decide your service, cadre, and career trajectory.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'banking-sector-career-india',
    title: 'Banking sector career India: PSU vs private, the real ladder, and what each track pays',
    description:
      'A banking sector career in India runs through IBPS or SBI exams for public banks, or direct hiring for private banks. Real pay data, the clerk-to-GM ladder, and specialization tracks inside.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'govt-vs-private-job-india',
    title: 'Government job vs private job India: the honest trade-off, not the salary chart',
    description:
      'Government job vs private job India comes down to security versus speed. Real 7th CPC pay data, UPSC prep-years odds, pension rules, and how the calculus shifts by field.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'government-job-vs-startup-job-stability-india',
    title: 'Government job vs startup job stability India: what the failure and layoff data actually says',
    description:
      'Government job vs startup job stability India compared on real numbers: startup failure rates, funding-winter layoff data, ESOP payout reality, and a risk-fit test before you choose either.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'government-exam-preparation-while-working-india',
    title: 'Government exam preparation while working in India: the realistic plan',
    description:
      'Government exam preparation while working India: real weekly study-hour math, when to quit vs stay, leave strategy, notice-period timing, and honest odds vs full-time prep.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'government-jobs',
    slug: 'bank-job-vs-it-job-india',
    title: 'Bank job vs IT job India: the honest trade-off between security and ceiling',
    description:
      'Bank job vs IT job India comes down to security versus pay ceiling. Real IBPS PO and software engineer salary data, 2025 IT layoff numbers, and who genuinely fits each path.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'job-search',
    slug: 'salary-negotiation-for-freshers-india',
    title: 'Salary Negotiation for Freshers India: How Much Room You Actually Have',
    description:
      'Salary negotiation for freshers India: how much room really exists in an entry-level offer, how to find a fair range, and scripts that do not sound pushy or ungrateful.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'job-search',
    slug: 'campus-vs-off-campus-placement-india',
    title: 'Campus vs off-campus placement India: the honest head-to-head before you pick a lane',
    description:
      'Campus vs off-campus placement India compared on real placement-rate data, tier-wise campus quality, and when off-campus is the smarter route even for tier-1 students.',
    publishedAtISO: '2026-07-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'job-search',
    slug: 'internship-vs-full-time-job-india',
    title: 'Internship vs full-time job India: when the internship is the real offer',
    description:
      'Internship vs full-time job India compared on real PPO conversion rates, stipend norms, and how to tell a skill-building internship apart from an unpaid dead end.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'gre-vs-gmat-which-to-take-india',
    title: 'GRE vs GMAT which to take India: match the exam to the program, not the other way round',
    description:
      'GRE vs GMAT which to take India: which programs need which exam, how GMAT Focus and the current GRE actually differ, and a fit test for verbal-strong vs quant-strong test-takers.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'study-abroad',
    slug: 'study-abroad-benefits-india',
    title: 'Study Abroad Benefits India — What You Actually Gain, and What You Don\'t',
    description:
      'Study abroad benefits India, honestly assessed: real gains in exposure, access, and skills, real costs in money and distance, and why the outcome depends on what you do with it.',
    publishedAtISO: '2026-07-20',
    readTimeMinutes: 15,
  },
  {
    categorySlug: 'career-options',
    slug: 'ca-vs-cma-vs-cfa-india-which-is-better',
    title: 'CA vs CMA vs CFA India: Which Is Better Depends on Which Job You Actually Want',
    description:
      'CA vs CMA vs CFA India which is better: real pass rates, cost, duration, and what each credential actually leads to, audit and tax vs corporate finance vs investment analysis, decided by fit.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'freelancing-business',
    slug: 'best-freelance-skills-in-demand-india',
    title: 'Best freelance skills in demand India: ranked by demand vs real competition',
    description:
      'Best freelance skills in demand India, ranked honestly: writing, design, dev, digital marketing, video editing, virtual assistance, and data analytics compared on demand AND competition.',
    publishedAtISO: '2026-07-21',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'career-options',
    slug: 'btech-biotechnology-career-options',
    title: 'BTech Biotechnology Career Options: The Real Placement Story',
    description:
      'BTech biotechnology career options explained: the JEE admission route, honest placement data vs CSE, bioprocess engineering roles, and real paths after graduation.',
    publishedAtISO: '2026-08-05',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-biotechnology-a-good-career',
    title: 'Is Biotechnology a Good Career in India? The Honest Verdict on Pay and Placements',
    description:
      'Is biotechnology a good career in India? Real salaries, placement data vs engineering, who this path fits, and the fix for degree-alone drift.',
    publishedAtISO: '2026-08-05',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-options',
    slug: 'biotechnology-career-options',
    title: 'Biotechnology career options in India: the real sector map',
    description:
      'Biotechnology career options span pharma, agri, industrial, food, and bioinformatics roles. See the real sector map, degree ladder, and who actually hires.',
    publishedAtISO: '2026-08-05',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'biotechnology-careers-salary',
    title: 'Biotechnology careers salary: the full role list and what each one pays',
    description:
      'Biotechnology careers salary in India: research, QC/QA, regulatory, bioinformatics, sales, academia, and ICAR/CSIR/DBT scientist pay - entry level to experienced.',
    publishedAtISO: '2026-08-05',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'bsc-biotechnology-career-options',
    title: 'BSc Biotechnology Career Options: The MSc-vs-Job Fork, Decided Honestly',
    description:
      'BSc biotechnology career options after your degree: MSc specialisations, JAM/CUET-PG/GAT-B exams, real BSc-level jobs and pay, and the honest ceiling without a master’s.',
    publishedAtISO: '2026-08-05',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-options',
    slug: 'msc-biotechnology-career-options',
    title: 'MSc Biotechnology Career Options — The Real Fork Between a PhD and an Industry Role',
    description:
      'MSc biotechnology career options, decided honestly: CSIR-NET/GATE/DBT-BET for a funded PhD, DBT/ICMR/ICAR scientist routes, and the industry roles your MSc unlocks that a BSc cannot.',
    publishedAtISO: '2026-08-05',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-options',
    slug: 'plant-and-agricultural-biotechnology-careers',
    title: 'Plant Biotechnology Careers vs Agricultural Biotechnology Careers in India',
    description:
      'Plant biotechnology careers and agricultural biotechnology careers are not the same job hunt. Real roles at Mahyco, Bayer Crop Science, Syngenta, the ICAR/ASRB route, and real pay.',
    publishedAtISO: '2026-08-05',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'biotechnology-career-scope-and-future',
    title: "Career scope in biotechnology: what's actually growing through 2030",
    description:
      "Biotechnology's career scope in India is shifting fast. See which sub-sectors are hiring, which are slowing, and what drives demand through 2030.",
    publishedAtISO: '2026-08-07',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'career-options',
    slug: 'biotechnology-career-path',
    title: 'Biotechnology career path: the real 10-15 year roadmap, role by role',
    description:
      'Career path in biotechnology, mapped year by year: real designations from entry to team lead, three named tracks, and the skills that unlock each stage.',
    publishedAtISO: '2026-08-07',
    readTimeMinutes: 17,
  },
  {
    categorySlug: 'career-options',
    slug: 'biotechnology-career-objective-and-goals',
    title: 'Career Objective for Biotechnology: Resume Examples & Real Goals',
    description:
      'Real career objective examples for a biotechnology resume — fresher, MSc, bioinformatics, and career-switcher — plus how to set real career goals in biotech.',
    publishedAtISO: '2026-08-07',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'career-in-biotechnology-after-12th',
    title: 'Career in Biotechnology After 12th: The Stream, Degree, and Test-It-First Checklist',
    description:
      'Career in biotechnology after 12th: which stream (PCB, PCM, or PCMB) actually qualifies, BSc vs BTech, CUET/JEE prep, and how to test real interest before you commit.',
    publishedAtISO: '2026-08-07',
    readTimeMinutes: 16,
  },
  {
    categorySlug: 'career-options',
    slug: 'biotechnology-careers-abroad',
    title: 'Biotechnology Career Abroad: USA, Canada, and Australia, Decided Honestly',
    description:
      'Biotechnology career abroad, decided honestly: the real USA, Canada, Australia visa-to-job route, real costs, OPT/PGWP/485 odds, and when India wins instead.',
    publishedAtISO: '2026-08-07',
    readTimeMinutes: 22,
  },
  {
    categorySlug: 'career-options',
    slug: 'biotechnology-careers-in-medical-field',
    title: 'Biotechnology Careers in the Medical Field: The Real Job Map',
    description:
      'Biotechnology careers in the medical field span pharma R&D, clinical trials, diagnostics, and regulatory affairs - not an MBBS path. Real roles, degrees, and pay inside.',
    publishedAtISO: '2026-08-07',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-cybersecurity-a-good-career-in-india',
    title: 'Is Cybersecurity a Good Career in India? Salaries, AI Risk, Verdict',
    description:
      'Is cybersecurity a good career in India? Real salaries from SOC analyst to CISO, the AI-driven entry-level squeeze, and who should actually choose it in 2026.',
    publishedAtISO: '2026-08-09',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-mechanical-engineering-a-good-career-in-india',
    title: 'Is Mechanical Engineering a Good Career in India? Pay, EV Boom, the Real Catch',
    description:
      'Is mechanical engineering a good career in India? Real entry pay, EV and robotics growth, AI risk by task, and who should actually pick this branch over CS in 2026.',
    publishedAtISO: '2026-08-09',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-civil-engineering-a-good-career-in-india',
    title: 'Is Civil Engineering a Good Career in India? Pay and Real Catch',
    description:
      'Is civil engineering a good career in India? Real pay, infrastructure growth, BIM demand, and who should pick this branch in 2026.',
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-electrical-engineering-a-good-career-in-india',
    title: 'Is Electrical Engineering a Good Career in India? Pay, GATE Reality, the Real Catch',
    description:
      'Is electrical engineering a good career in India? Real pay across GATE-PSU, EV power electronics, and VLSI, GATE-EE cutoffs, AI risk, and who should pick this branch in 2026.',
    publishedAtISO: '2026-08-15',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-pharmacy-a-good-career-in-india',
    title: 'Is Pharmacy a Good Career in India? Pay, Oversupply, Verdict',
    description:
      'Is pharmacy a good career in India? Real pay behind the brochure, the seat-vacancy oversupply paradox, AI risk from e-pharmacy, and who this fits — the 2026 verdict.',
    publishedAtISO: '2026-08-15',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-physiotherapy-a-good-career-in-india',
    title: 'Is Physiotherapy a Good Career in India? Pay, Burnout, Verdict',
    description:
      'Is physiotherapy a good career in India? Real pay ceiling, the physiotherapist\'s own injury data, AI risk by task, and who this hands-on path actually fits — the 2026 verdict.',
    publishedAtISO: '2026-08-15',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-nursing-a-good-career-in-india',
    title: 'Is Nursing a Good Career in India? Pay, Shifts, Verdict',
    description:
      'Is nursing a good career in India? Real pay across ANM, GNM, and BSc entry routes, the honest shift and burnout reality, abroad pay gaps, AI risk, and who this path actually fits — the 2026 verdict.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-medical-coding-a-good-career-in-india',
    title: 'Is Medical Coding a Good Career in India? Night Shifts, AI Risk, Verdict',
    description:
      'Is medical coding a good career in India? Real pay, the night-shift and screen-strain reality nobody advertises, AI risk on entry-level coding, and who this desk-based path fits.',
    publishedAtISO: '2026-08-15',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-psychology-a-good-career-in-india',
    title: 'Is Psychology a Good Career in India? The Honest Verdict',
    description:
      'Is psychology a good career in India? Real salaries, the RCI licensing wall, the CBSE counsellor mandate, AI risk, and who should actually choose it in 2026.',
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-aeronautical-engineering-a-good-career-in-india',
    title: 'Is Aeronautical Engineering a Good Career in India? Pay, AME Confusion, the Real Catch',
    description:
      'Is aeronautical engineering a good career in India? Real pay, the AME/pilot confusion cleared up, HAL hiring reality, and who should pick this branch.',
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-aerospace-engineering-a-good-career-in-india',
    title: 'Is Aerospace Engineering a Good Career in India? ISRO, Private Space, and the Real Pay Math',
    description:
      'Is aerospace engineering a good career in India? ISRO pay, IIST and IIT routes, the Skyroot/Agnikul/Pixxel private-space boom, and who should actually pick this branch.',
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-architecture-a-good-career-in-india',
    title: 'Is Architecture a Good Career in India? NATA, COA Licensing, and the Real Pay Math',
    description:
      'Is architecture a good career in India? Real junior-architect pay, mandatory COA registration, NATA vs JEE, AI risk, and who should actually choose it in 2026.',
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 23,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-chemical-engineering-a-good-career-in-india',
    title: 'Is Chemical Engineering a Good Career in India? Pay, PLI Boom, the Real Catch',
    description:
      'Is chemical engineering a good career in India? Real entry pay, the PLI-driven pharma boom, AI risk, and who should pick this branch in 2026.',
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-data-analyst-a-good-career-in-india',
    title: 'Is Data Analyst a Good Career in India? Pay, Entry Bar, and the Bootcamp Flood',
    description:
      'Is data analyst a good career in India? Real entry-level pay, the lowest coding bar in the data field, and the bootcamp-flooded market explained honestly.',
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-data-analytics-a-good-career-in-india',
    title: 'Is Data Analytics a Good Career in India? Beyond the Analyst Title',
    description:
      'Is data analytics a good career in India? The field spans data analyst, BI analyst, analytics consultant, and business analytics manager roles. Real demand, certifications, and pay by role.',
    publishedAtISO: '2026-08-15',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-data-engineer-a-good-career',
    title: 'Is Data Engineer a Good Career? The Honest 2026 Verdict for India',
    description:
      'Is data engineer a good career? Real India salaries, why the AI boom is growing demand for this role, and who should actually choose it in 2026.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-fashion-designing-a-good-career-in-india',
    title: 'Is Fashion Designing a Good Career in India? NIFT, Real Pay, and the AI Question',
    description:
      "Is fashion designing a good career in India? Real NIFT vs private-college pay gaps, the oversupply problem, and the AI risk that's actually low, for 2026.",
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 22,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-forensic-science-a-good-career',
    title: 'Is Forensic Science a Good Career in India? Real Pay, NFSU, and the BNSS Demand Surge',
    description:
      'Is forensic science a good career in India? Real FSL pay, the BNSS-driven lab shortage, NFSU entry, and where digital forensics pays 30-40% more, for 2026.',
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-graphic-design-a-good-career-in-india',
    title: 'Is Graphic Design a Good Career in India? Real Pay and the AI Question',
    description:
      "Is graphic design a good career in India? Real entry pay by city, the no-licence oversupply trap, and which design tasks AI is actually automating, for 2026.",
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-biomedical-engineering-a-good-career',
    title: 'Is Biomedical Engineering a Good Career in India? Real Pay and the Biotech Mix-Up',
    description:
      "Is biomedical engineering a good career in India? Real BTech/MTech pay, device-industry and hospital roles, and how it differs from biotechnology.",
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-business-analyst-a-good-career-in-india',
    title: 'Is Business Analyst a Good Career in India? MBA-or-Not, Domain Tracks, Real Pay',
    description:
      'Is business analyst a good career in India? Real MBA vs no-MBA entry math, domain-specific pay bands, the BA-to-product-manager route, and the honest stakeholder-skill test before you commit.',
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-interior-design-a-good-career-in-india',
    title: 'Is Interior Design a Good Career in India? Pay, No-Licence Reality, Freelance Math',
    description:
      'Is interior design a good career in India? Real entry pay, the no-licensing-body truth, diploma vs degree, and the freelance income math for 2026.',
    publishedAtISO: '2026-08-10',
    readTimeMinutes: 22,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-ui-ux-design-a-good-career-in-india',
    title: 'Is UI/UX Design a Good Career in India? The Pay, Saturation, and AI Verdict',
    description:
      'Is UI/UX design a good career in India? Real entry pay, the bootcamp oversupply crunch at junior level, and which design tasks AI already automates, for 2026.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-automobile-engineering-a-good-career',
    title: 'Is Automobile Engineering a Good Career? Pay, the EV Risk, Verdict',
    description:
      'Is automobile engineering a good career in India? Real pay data, the EV transition that is making 90-100% of ICE powertrain skills obsolete, and who should still choose it.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-law-a-good-career-in-india',
    title: 'Is Law a Good Career in India? Most LLB Grads Never See a Courtroom',
    description:
      'Is law a good career in India? Real CLAT/LLB economics, judiciary pay, corporate counsel, LPO, and policy routes — the field beyond litigation, honestly assessed for 2026.',
    publishedAtISO: '2026-08-15',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-lawyer-a-good-career-in-india',
    title: 'Is Lawyer a Good Career in India? The First 5 Years Decide Everything',
    description:
      'Is being a lawyer a good career in India? Real chamber-junior pay, the AIBE and Bar Council gate, litigation vs corporate practice, and the Senior Advocate track, honestly assessed for 2026.',
    publishedAtISO: '2026-08-15',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-trading-a-good-career-in-india',
    title: "Is Trading a Good Career in India? What SEBI's Own Loss Data Shows",
    description:
      "Is trading a good career in India? Real SEBI F&O loss data (91-93% of traders lose money), the two very different trading careers, capital math, and honest safer paths for 2026.",
    publishedAtISO: '2026-08-15',
    readTimeMinutes: 19,
  },
  {
    categorySlug: 'career-options',
    slug: 'good-career-options-in-india',
    title: 'Good career options in India: 13 real paths, real pay, honest catches',
    description:
      'Good career options in India: engineering, medicine, law, commerce, government, design, teaching, and trades, compared on real pay, demand, and catches.',
    publishedAtISO: '2026-08-15',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-cs-a-good-career',
    title: "Is CS a Good Career in India? What the JEE Cutoff Doesn't Tell You",
    description:
      'Is CS a good career in India? Real JEE/GATE cutoffs, CS vs IT vs AI branch differences, and the career map beyond software engineer, honestly assessed for 2026.',
    publishedAtISO: '2026-08-15',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-pilot-a-good-career-in-india',
    title: "Is Pilot a Good Career in India? What DGCA's Own Numbers Show",
    description:
      "Is pilot a good career in India? Real CPL cost (Rs 45-70L+), DGCA licensing steps, why 1 in 3 trained pilots once sat jobless, and honest safer paths for 2026.",
    publishedAtISO: '2026-08-15',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-devops-a-good-career',
    title: 'Is DevOps a Good Career? Real Pay, On-Call Reality, Verdict',
    description:
      'Is DevOps a good career? Real fresher-to-lead pay in India, the on-call and burnout side nobody markets, AI risk on toil work, and who should actually choose it.',
    publishedAtISO: '2026-08-16',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-software-testing-a-good-career',
    title: 'Is Software Testing a Good Career? Real Pay, AI Risk, Verdict',
    description:
      'Is software testing a good career? Real manual, automation, and SDET pay in India, AI\'s biggest entry-level tech risk, and who should choose it.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 21,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-video-editing-a-good-career',
    title: 'Is Video Editing a Good Career? Real Pay, AI Risk, Verdict',
    description:
      'Is video editing a good career? Real fresher-to-senior pay in India, the AI auto-cut risk, the 30-day-course saturation problem, and who this path genuinely fits.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 20,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-sales-a-good-career',
    title: 'Is Sales a Good Career? The Honest Verdict Before You Choose It',
    description:
      'Is sales a good career? Real fresher pay across FMCG, SaaS, BFSI, and pharma, the uncapped-upside vs high-attrition trade-off, AI risk, and who this path genuinely fits.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 18,
  },
  {
    categorySlug: 'career-options',
    slug: 'is-salesforce-a-good-career',
    title: 'Is Salesforce a Good Career? The Honest Verdict on Admin, Dev, and Consultant Tracks',
    description:
      'Is Salesforce a good career? Real Admin, Developer, and Consultant pay in India, the Trailhead-to-job-ready path, certification ROI, and where Agentforce genuinely changes the risk.',
    publishedAtISO: '2026-08-17',
    readTimeMinutes: 19,
  },
];
