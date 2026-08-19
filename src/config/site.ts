import { ASSESSMENT_PAGE_ROUTE_CONFIG } from './assessmentPages';
import { discoverRoutes } from './discoverRoutes';
import { BLOG_CATEGORIES, BLOG_PUBLISHED_POSTS } from './blog';

export const SITE_NAME = 'Future Career School';
export const SITE_URL = 'https://futurecareerschool.com';
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

// Blog posts/categories and the BOFU career-counselling child pages are the
// two highest-churn parts of the site (new ones are added constantly). They
// are discovered from the filesystem instead of hand-listed here, so a new
// page becomes indexable just by existing as a file — nobody has to remember
// to add it to this array. See src/config/discoverRoutes.ts.
//
// Sitemap `priority`/`changefreq` are known to carry very little weight with
// Google in practice, so the values below are a simple, defensible heuristic
// rather than a hand-tuned figure per page.
// Blog category hub pages are rendered by a single dynamic template
// (src/pages/blog/[category]/index.astro) driven by BLOG_CATEGORIES, not by
// one file per category — so they can't be found by walking the filesystem.
// A category is only indexable once it has at least one real published post
// (same "no empty category pages" rule the template itself enforces via
// `hasLivePosts`), which BLOG_PUBLISHED_POSTS already tracks precisely.
const indexableBlogCategorySlugs = new Set(
  BLOG_CATEGORIES.filter((category) =>
    BLOG_PUBLISHED_POSTS.some((post) => post.categorySlug === category.slug),
  ).map((category) => category.slug),
);

const BLOG_ROUTES: IndexableRoute[] = [
  { path: '/blog', changefreq: 'weekly', priority: '0.85' },
  ...[...indexableBlogCategorySlugs].map((slug) => ({
    path: `/blog/${slug}`,
    changefreq: 'weekly' as const,
    priority: '0.8',
  })),
  ...BLOG_PUBLISHED_POSTS.map((post) => ({
    path: `/blog/${post.categorySlug}/${post.slug}`,
    changefreq: 'monthly' as const,
    priority: '0.8',
  })),
];

const BOFU_COUNSELLING_CHILD_ROUTES: IndexableRoute[] = discoverRoutes(
  'services/career-counselling-and-career-guidance',
)
  .filter((path) => path !== '/services/career-counselling-and-career-guidance')
  .map((path) => ({
    path,
    changefreq: 'monthly',
    priority: path.includes('/locations') ? '0.8' : '0.85',
  }));

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
  ...BOFU_COUNSELLING_CHILD_ROUTES,
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
    path: '/services/assessments/working-professionals-and-career-changers',
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
    path: '/services/assessments/placement-aptitude-test',
    changefreq: 'monthly',
    priority: '0.88',
  },
  {
    path: '/services/assessments/numerical-reasoning-test',
    changefreq: 'monthly',
    priority: '0.88',
  },
  {
    path: '/services/assessments/verbal-reasoning-test',
    changefreq: 'monthly',
    priority: '0.88',
  },
  {
    path: '/services/assessments/myers-briggs-career-test',
    changefreq: 'monthly',
    priority: '0.88',
  },
  {
    path: '/services/assessments/big-5-personality-test-careers',
    changefreq: 'monthly',
    priority: '0.88',
  },
  ...ASSESSMENT_PAGE_ROUTE_CONFIG,
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
    path: '/career-skills-compass',
    changefreq: 'weekly',
    priority: '0.9',
  },
  ...BLOG_ROUTES,
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
