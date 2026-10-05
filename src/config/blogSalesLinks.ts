// Picks the most relevant service (sales) page for the bottom call to action of a
// blog post. A topic-matched service page converts better than a generic one, so
// the first matching rule wins; when nothing fits, the post shows the guidance
// pricing directly instead.
export type BlogSalesTarget = {
  href: string;
  label: string;
};

export type BlogPlansAudience = 'student' | 'professional' | 'mixed';

const BASE = '/services/career-counselling-and-career-guidance/';
const page = (slug: string, label: string): BlogSalesTarget => ({ href: `${BASE}${slug}/`, label });

// Slug rules are checked first (most specific), then the category default.
const SLUG_RULES: Array<[RegExp, BlogSalesTarget]> = [
  [/upsc|ias\b|civil-services/, page('career-counselling-for-upsc-aspirants', 'Get Career Counselling for UPSC Aspirants')],
  [/neet|mbbs|bds\b|nursing|paramedical|pharm/, page('career-counselling-for-neet-aspirants', 'Get Career Counselling for NEET and Medical Careers')],
  [/\bpcb\b|biotech|bioinformatics|life-science|biology/, page('career-counselling-for-pcb-students', 'Get Career Counselling for PCB Students')],
  [/\bpcm\b|\bjee\b|cuet-vs-jee/, page('career-counselling-for-pcm-students', 'Get Career Counselling for PCM Students')],
  [/\bca\b|\bcma\b|\bcfa\b|chartered/, page('career-counselling-for-ca-aspirants', 'Get Career Counselling for CA Aspirants')],
  [/\b10th\b|class-10|after-10/, page('career-counselling-after-10th', 'Get Career Counselling After 10th')],
  [/\b11th\b|class-11/, page('career-counselling-for-11th-class-students', 'Get Career Counselling for Class 11 Students')],
  [/12th|class-12|after-12/, page('career-counselling-after-12th', 'Get Career Counselling After 12th')],
  [/commerce|bcom|b-com/, page('career-counselling-for-commerce-students', 'Get Career Counselling for Commerce Students')],
  [/\bmba\b|pgdm|\bcat\b|iim/, page('career-counselling-for-mba-students', 'Get Career Counselling for MBA Students')],
  [/after-btech|btech|b-tech|engineering|electrical|\becee?\b|mechanical|civil-eng/, page('career-counselling-for-engineering-students', 'Get Career Counselling for Engineering Students')],
  [/study-abroad|abroad|\bms-in|return-to-india/, page('career-counselling-for-study-abroad', 'Get Career Counselling for Studying Abroad')],
  [/parent|my-child/, page('career-counselling-for-parents', 'Get Career Counselling for Parents')],
  [/gap-year/, page('career-guidance-after-gap-year', 'Get Career Guidance After a Gap Year')],
  [/drop-year|dropout/, page('career-counselling-for-dropouts', 'Get Career Counselling After a Drop Year')],
  [/humanities|arts-student|ba-|history|psychology|english-literature/, page('career-counselling-for-arts-students', 'Get Career Counselling for Arts Students')],
  [/government|sarkari|ssc|bank-|banking|psu|state-vs-central/, page('career-counselling-for-government-jobs', 'Get Career Counselling for Government Jobs')],
  [/layoff|laid-off/, page('career-coaching-for-layoff-recovery', 'Get Career Coaching After a Layoff')],
  [/career-change|career-switch|switch-from|switching|pivot|transition/, page('career-coaching-for-career-change', 'Get Career Coaching for a Career Change')],
  [/women|returning-to-work|career-break/, page('career-coaching-for-women', 'Get Career Coaching for Women')],
  [/freelanc|consult|solopreneur|entrepreneur|start-a-business|starting-a-business/, page('career-coaching-for-entrepreneurs', 'Get Career Coaching for Entrepreneurs')],
  [/fresher|first-job|internship|campus|placement/, page('career-coaching-for-freshers', 'Get Career Coaching for Freshers')],
  [/software|devops|developer|cyber|it-jobs|it-career|it-professional|it-industry|service-company|product-company|machine-learning/, page('career-coaching-for-it-professionals', 'Get Career Coaching for IT Professionals')],
  [/mid-career|promotion|salary-negotiation|negotiat|30-year|leadership/, page('career-coaching-for-mid-career-professionals', 'Get Career Coaching for Mid-Career Professionals')],
];

const CATEGORY_DEFAULTS: Record<string, BlogSalesTarget | null> = {
  'stream-selection': page('career-counselling-for-students', 'Get Career Counselling for Students'),
  parents: page('career-counselling-for-parents', 'Get Career Counselling for Parents'),
  'college-degrees': page('career-counselling-for-college-students', 'Get Career Counselling for College Students'),
  'medical-careers': page('career-counselling-for-pcb-students', 'Get Career Counselling for PCB Students'),
  'government-jobs': page('career-counselling-for-government-jobs', 'Get Career Counselling for Government Jobs'),
  'career-change': page('career-coaching-for-career-change', 'Get Career Coaching for a Career Change'),
  'study-abroad': page('career-counselling-for-study-abroad', 'Get Career Counselling for Studying Abroad'),
  'freelancing-business': page('career-coaching-for-entrepreneurs', 'Get Career Coaching for Entrepreneurs'),
  'job-search': page('career-coaching-for-freshers', 'Get Career Coaching for Freshers'),
  resume: page('career-coaching-for-freshers', 'Get Career Coaching for Freshers'),
  interviews: page('career-coaching-for-freshers', 'Get Career Coaching for Freshers'),
  'linkedin-networking': page('career-coaching-for-professionals', 'Get Career Coaching for Professionals'),
  'ai-future': page('career-coaching-for-professionals', 'Get Career Coaching for Professionals'),
  skills: page('career-coaching-for-professionals', 'Get Career Coaching for Professionals'),
  'skill-roadmaps': page('career-coaching-for-professionals', 'Get Career Coaching for Professionals'),
  'portfolio-proof-of-work': page('career-coaching-for-professionals', 'Get Career Coaching for Professionals'),
  // Broad categories with no single matching service page: show pricing directly.
  'career-options': null,
  'career-guidance': null,
};

const PLANS_AUDIENCE: Record<string, BlogPlansAudience> = {
  'stream-selection': 'student',
  parents: 'student',
  'college-degrees': 'student',
  'medical-careers': 'student',
  'career-change': 'professional',
  'freelancing-business': 'professional',
  'ai-future': 'professional',
  skills: 'professional',
  'skill-roadmaps': 'professional',
};

export function resolveBlogSalesTarget(category: string, slug: string, override?: BlogSalesTarget): BlogSalesTarget | null {
  if (override) return override;
  for (const [pattern, target] of SLUG_RULES) {
    if (pattern.test(slug)) return target;
  }
  return CATEGORY_DEFAULTS[category] ?? null;
}

export function getBlogPlansAudience(category: string): BlogPlansAudience {
  return PLANS_AUDIENCE[category] ?? 'mixed';
}
