export const SITE_NAME = 'Future Career School';
export const SITE_URL = 'https://futurecareerschool.com';
export const SITE_ALTERNATE_URLS = ['https://futurecareerschool.in'];
export const DEFAULT_OG_IMAGE_PATH = '/og-image.svg';
export const DEFAULT_OG_IMAGE_URL = `${SITE_URL}${DEFAULT_OG_IMAGE_PATH}`;

export const CONTACT = {
  email: 'hello@futurecareerschool.com',
  phoneE164: '+917815927259',
  phoneDisplay: '+91 78159 27259',
  whatsappNumber: '917815927259',
};

export const WHATSAPP_BASE_URL = `https://wa.me/${CONTACT.whatsappNumber}`;
export const WHATSAPP_BOOKING_URL = `${WHATSAPP_BASE_URL}?text=Hi%2C%20I%27d%20like%20to%20get%20career%20guidance`;

export type IndexableRoute = {
  path: string;
  changefreq: 'weekly' | 'monthly';
  priority: string;
};

export const LIVE_INDEXABLE_ROUTES: IndexableRoute[] = [
  {
    path: '/',
    changefreq: 'weekly',
    priority: '1.0',
  },
  {
    path: '/services',
    changefreq: 'weekly',
    priority: '0.95',
  },
  {
    path: '/services/career-counselling-and-career-guidance',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: '/services/career-counselling-and-career-guidance/career-guidance',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/career-counselling-and-career-guidance/career-coach-near-me',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/career-counselling-and-career-guidance/career-counselling',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/career-counselling-and-career-guidance/career-counselling-online',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/career-counselling-and-career-guidance/locations',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/services/career-counselling-and-career-guidance/locations/career-counselling-in-visakhapatnam',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/services/career-counselling-and-career-guidance/locations/career-counselling-in-rajkot',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/services/career-counselling-and-career-guidance/student-career-guidance',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/career-counselling-and-career-guidance/career-guidance-after-12th',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/career-counselling-and-career-guidance/career-guidance-after-12th-online',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/career-counselling-and-career-guidance/career-guidance-online',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/career-counselling-and-career-guidance/working-professional-career-guidance',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/assessments',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: '/services/assessments/class-10-and-below',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/assessments/class-11-to-12',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/assessments/graduates-and-early-professionals',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/assessments/stream-selector-test-after-10th',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/assessments/career-aptitude-test-after-10th',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/assessments/stream-selector-test-after-12th',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/services/assessments/career-aptitude-test-after-12th',
    changefreq: 'monthly',
    priority: '0.85',
  },
  {
    path: '/career-resources',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: '/career-resources/biology-check-thinking-style',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/biology-check-self-assessment',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/how-to-pick-the-right-online-course',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/skill-sampling-try-before-you-commit',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/t-shaped-skill-stack-builder',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/freedom-number-how-much-do-you-actually-need-to-earn',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/the-4-checkpoint-career-protocol-explained',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/3-career-profiles-which-type-are-you',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/career-profile-quiz-perfect-plan-passion-or-empire-builder',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/are-you-a-people-thinker-or-systems-thinker',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/what-to-do-when-your-passion-doesnt-pay',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/multiplier-skill-guide-one-addition-that-doubles-value',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/tarzan-rule-the-exact-moment-to-quit-your-job',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/night-shift-plan-learn-7pm-11pm-without-burning-out',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/how-to-ai-proof-your-career',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/ai-multiplier-skills-for-the-next-decade',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/side-income-while-employed-7-legit-options',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/career-change-without-starting-over',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/creating-a-portfolio-without-work-experience',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/personal-brand-without-posting-every-day',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/resume-that-gets-shortlisted-in-india',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/prompt-engineering-for-non-technical-professionals',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/using-ai-tools-without-getting-replaced',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/tech-leverage-automate-80-percent-of-your-work-reclaim-4-hours',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/linkedin-profile-optimization-the-full-guide',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/arts-and-humanities-careers-that-pay-well-today',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/new-jobs-ai-will-create-not-just-replace',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/github-for-non-developers-build-a-portfolio-without-code',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/from-employee-to-freelancer-the-real-roadmap',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/how-indian-freelancers-make-1-5-lakh-month',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/digital-marketing-career-roadmap',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/data-science-analytics-career-roadmap',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/ux-ui-design-career-roadmap',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/web-development-career-roadmap',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/video-editing-content-creation-roadmap',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/copywriting-career-roadmap',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/graphic-design-career-roadmap',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/ai-prompt-engineering-roadmap',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/how-to-ask-for-a-salary-raise-with-scripts',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/salary-negotiation-what-to-say-and-what-never-to-say',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/sales-career-roadmap-from-rep-to-revenue-leader',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/financial-modelling-career-roadmap',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/career-resources/high-income-skills-for-the-next-decade',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/skill-finder',
    changefreq: 'weekly',
    priority: '0.9',
  },
  {
    path: '/blog',
    changefreq: 'weekly',
    priority: '0.85',
  },
  {
    path: '/blog/ai-future',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/blog/ai-future/best-career-paths-for-the-next-10-years',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/ai-future/artificial-intelligence-career-paths',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/ai-future/top-careers-for-the-future',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/career-options',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/blog/career-options/best-career-options-with-high-salary',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/career-options/bba-career-options',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/career-options/bca-career-options',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/career-options/career-options-after-12th-commerce',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/career-options/career-options-after-12th-science',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/career-options/career-options-after-12th-pcb',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/career-options/pcm-career-options',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/career-options/career-options-in-commerce',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/career-options/career-options-in-arts',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/career-options/pcb-career-options-without-neet',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/career-guidance',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/blog/career-guidance/how-to-choose-a-career-after-12th',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/blog/stream-selection',
    changefreq: 'weekly',
    priority: '0.8',
  },
  {
    path: '/blog/stream-selection/career-options-after-10th',
    changefreq: 'monthly',
    priority: '0.8',
  },
  {
    path: '/about',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/locations',
    changefreq: 'monthly',
    priority: '0.7',
  },
  {
    path: '/contact',
    changefreq: 'monthly',
    priority: '0.75',
  },
  {
    path: '/about/shivanshi-sehgal',
    changefreq: 'monthly',
    priority: '0.5',
  },
  {
    path: '/about/allu-vagdevi',
    changefreq: 'monthly',
    priority: '0.5',
  },
];
