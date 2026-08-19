import { LIVE_INDEXABLE_ROUTES } from './site';

export type DirectoryItem = {
  href: string;
  title: string;
  description: string;
  note?: string;
};

export type ServiceBrowseItem = DirectoryItem & {
  category: 'guidance' | 'assessment' | 'resources';
  audiences: string[];
  need: string;
  keywords: string;
};

export type CareerResourceItem = {
  title: string;
  desc: string;
  audience: string[];
  topic: string;
  type: string;
  readTime: string;
  tags: string[];
};

const trimSlash = (path: string) => path.replace(/\/$/, '');
const withSlash = (path: string) => `${trimSlash(path)}/`;

const titleFromSlug = (slug: string) =>
  slug
    .split('-')
    .filter(Boolean)
    .map((word) => {
      if (word.toLowerCase() === 'nri') return 'NRI';
      if (word.toLowerCase() === 'upsc') return 'UPSC';
      if (word.toLowerCase() === 'ca') return 'CA';
      if (word.toLowerCase() === 'mba') return 'MBA';
      if (word.toLowerCase() === 'it') return 'IT';
      if (word.toLowerCase() === 'pcb') return 'PCB';
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');

const titleFromPath = (path: string) => titleFromSlug(trimSlash(path).split('/').pop() ?? path);
const wordsFromPath = (path: string) => trimSlash(path).split('/').pop()?.replaceAll('-', ' ') ?? '';

const indexablePaths = LIVE_INDEXABLE_ROUTES.map((route) => trimSlash(route.path));

const servicePaths = indexablePaths.filter((path) => path.startsWith('/services/') && path !== '/services');
const serviceBrowsePaths = servicePaths.filter((path) => !path.startsWith('/services/assessments/'));
const guidancePaths = servicePaths.filter((path) =>
  path.startsWith('/services/career-counselling-and-career-guidance/') &&
  path !== '/services/career-counselling-and-career-guidance'
);
const assessmentPaths = servicePaths.filter((path) => path.startsWith('/services/assessments/'));
const locationPaths = guidancePaths.filter((path) =>
  path.startsWith('/services/career-counselling-and-career-guidance/locations/') &&
  path !== '/services/career-counselling-and-career-guidance/locations'
);
const resourcePaths = indexablePaths.filter((path) => path.startsWith('/career-resources/') && path !== '/career-resources');

const inferAudiences = (path: string) => {
  const text = wordsFromPath(path).toLowerCase();
  const audiences = new Set<string>();
  if (/parent|child|teenager|class|10th|11|12|student|school|college|stream|board|neet|upsc|ca|dropout|backlog|cgpa|tier/.test(text)) {
    audiences.add('students');
  }
  if (/parent|child|teenager|class|10th|11|12|stream|board/.test(text)) audiences.add('parents');
  if (/graduate|fresher|mba|bcom|college|tier|backlog|cgpa|placement/.test(text)) audiences.add('graduates');
  if (/professional|career changer|it|working|women/.test(text)) audiences.add('professionals');
  if (/job|placement|aptitude|reasoning/.test(text)) audiences.add('job-seekers');
  if (audiences.size === 0) audiences.add('everyone');
  return Array.from(audiences);
};

const inferNeed = (path: string) => {
  const text = wordsFromPath(path).toLowerCase();
  if (/online|near me|location|visakhapatnam|rajkot|city/.test(text)) return 'online-local';
  if (/10th|12th|stream|board|school/.test(text)) return 'after-10th-12th';
  if (/aptitude|reasoning|placement|job/.test(text)) return 'aptitude-reasoning';
  if (/personality|psychometric|myers|big 5/.test(text)) return 'personality-work-style';
  if (/assessment|test|quiz/.test(text)) return 'free-assessment';
  return 'decision-clarity';
};

const inferServiceDescription = (path: string) => {
  const title = titleFromPath(path);
  const text = wordsFromPath(path).toLowerCase();
  if (path.startsWith('/services/assessments/')) {
    return `${title} for people who want a structured free signal before choosing a path, course, skill, or next career move.`;
  }
  if (text.includes('location') || text.includes('visakhapatnam') || text.includes('rajkot')) {
    return `${title} for people who want local search relevance while still getting practical online career guidance across India.`;
  }
  if (text.includes('fees') || text.includes('benefits')) {
    return `${title} for comparing the decision, cost, usefulness, and next step before choosing paid career support.`;
  }
  if (text.includes('subscription')) {
    return `${title} for an honest answer on recurring billing versus a one-time package, and which one actually fits ongoing support.`;
  }
  return `${title} for people who need clearer decisions, stronger skill direction, and a practical next step before more time or money goes into the wrong path.`;
};

const serviceBrowseFromPath = (path: string): ServiceBrowseItem => ({
  href: withSlash(path),
  title: titleFromPath(path),
  description: inferServiceDescription(path),
  category: path.startsWith('/services/assessments/') ? 'assessment' : 'guidance',
  audiences: inferAudiences(path),
  need: inferNeed(path),
  keywords: wordsFromPath(path),
});

const directoryFromPath = (path: string): DirectoryItem => ({
  href: withSlash(path),
  title: titleFromPath(path),
  description: inferServiceDescription(path),
});

const mergeByHref = <T extends { href: string }>(curated: T[], generated: T[]) => {
  const seen = new Set(curated.map((item) => trimSlash(item.href)));
  return [...curated, ...generated.filter((item) => !seen.has(trimSlash(item.href)))];
};

export const completeServiceBrowseItems = (curated: ServiceBrowseItem[]) =>
  mergeByHref(curated, serviceBrowsePaths.map(serviceBrowseFromPath));

export const completeGuidanceDirectoryItems = (curated: DirectoryItem[]) =>
  mergeByHref(curated, guidancePaths.map(directoryFromPath));

export const completeAssessmentDirectoryItems = (curated: DirectoryItem[]) =>
  mergeByHref(curated, assessmentPaths.map(directoryFromPath));

export const completeLocationDirectoryItems = (curated: DirectoryItem[]) =>
  mergeByHref(curated, locationPaths.map(directoryFromPath));

const inferResourceTopic = (path: string) => {
  const text = wordsFromPath(path).toLowerCase();
  if (/ai|prompt|automate/.test(text)) return 'ai-future';
  if (/salary|income|freelancer|raise|negotiation|quit|side/.test(text)) return 'salary';
  if (/linkedin|portfolio|resume|github|brand/.test(text)) return 'portfolio';
  if (/roadmap|skill|course|design|marketing|development|copywriting|sales|modelling|analytics/.test(text)) return 'skills';
  if (/assessment|quiz|check|profile|thinker/.test(text)) return 'assessments';
  return 'career-planning';
};

const inferResourceType = (path: string) => {
  const text = wordsFromPath(path).toLowerCase();
  if (/roadmap/.test(text)) return 'roadmap';
  if (/assessment|quiz|check/.test(text)) return 'assessment';
  if (/number|builder/.test(text)) return 'tool';
  if (/plan|checklist/.test(text)) return 'checklist';
  return 'guide';
};

const inferResourceAudience = (path: string) => {
  const text = wordsFromPath(path).toLowerCase();
  const audiences = new Set<string>(['student', 'graduate']);
  if (/professional|employee|salary|raise|freelancer|linkedin|ai|side income|quit/.test(text)) audiences.add('professional');
  return Array.from(audiences);
};

const resourceFromPath = (path: string): CareerResourceItem => {
  const title = titleFromPath(path);
  return {
    title,
    desc: `${title} with practical filters, examples, and next steps for making a clearer career or skill decision.`,
    audience: inferResourceAudience(path),
    topic: inferResourceTopic(path),
    type: inferResourceType(path),
    readTime: '8 min',
    tags: title.split(' ').slice(0, 3),
  };
};

export const completeCareerResources = (curated: CareerResourceItem[], hrefByTitle: Record<string, string>) => {
  const existingHrefs = new Set(Object.values(hrefByTitle).map(trimSlash));
  const generated = resourcePaths
    .filter((path) => !existingHrefs.has(path))
    .map(resourceFromPath);
  return [...curated, ...generated];
};

export const completeCareerResourceHrefByTitle = (
  hrefByTitle: Record<string, string>,
  resources: CareerResourceItem[]
) => {
  const next = { ...hrefByTitle };
  for (const path of resourcePaths) {
    const generated = resourceFromPath(path);
    if (resources.some((resource) => resource.title === generated.title) && !next[generated.title]) {
      next[generated.title] = withSlash(path);
    }
  }
  return next;
};
