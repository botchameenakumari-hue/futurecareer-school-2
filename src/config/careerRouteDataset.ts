import { careerGuideFor, guidedCareerPresets } from '../data/coachingPlaybooks';

export const CAREER_CATALOGUE_META = {
  version: 'October 2026',
  editoriallyReviewedOn: '2026-10-11',
  sourcePage: 'https://futurecareerschool.com/career-skills-compass/',
  provenance: 'Snapshot of Future Career School’s own editorial career catalogue and coaching guidance. It is not an official occupation register, labour-market survey, salary database or qualification ruling.',
  disclaimer: 'Use this catalogue to explore role families and create evidence. Confirm current education, licensing, hiring and salary information from the relevant official or employer source before making a decision.',
  owner: 'Future Career School editorial team',
  reviewCadence: 'Quarterly for active records; immediately when a source correction is received',
  recordStatus: 'editorial-only',
  publicationGate: 'A definitive career database cannot be published until each material field has a named verifier, primary source, last-verified date, review cadence and correction path.',
};

export const CAREER_DATABASE_REQUIRED_FIELDS = ['eligibility', 'entryRoutes', 'costs', 'regulation', 'aiImpact', 'sources', 'lastVerified', 'verifier'] as const;

// Starting points only. These links identify an authoritative body or notice to inspect;
// they do not verify any route record or prove that every required field is covered.
export const CAREER_DATABASE_SOURCE_MAP: Record<string, { status: 'source-mapped-not-verified'; sources: { authority: string; url: string; coverage: string }[]; limits: string }> = {
  architect: { status: 'source-mapped-not-verified', sources: [{ authority: 'Council of Architecture', url: 'https://coa.gov.in/index1.php?lang=1&level=2&lid=133&sublinkid=119', coverage: 'Registration and recognized-qualification starting point' }], limits: 'Check current CoA rules, institution recognition and the full route before publication.' },
  'clinical-psychologist': { status: 'source-mapped-not-verified', sources: [{ authority: 'Rehabilitation Council of India', url: 'https://rehabcouncil.nic.in/categories-u-s-19/', coverage: 'Regulated category and register starting point' }, { authority: 'Rehabilitation Council of India', url: 'https://rehabcouncil.nic.in/regular-mode/', coverage: 'Recognized regular-mode qualification starting point' }], limits: 'Check the current recognized-programme list, registration rules and route-specific requirements before publication.' },
  'chartered-accountant': { status: 'source-mapped-not-verified', sources: [{ authority: 'Institute of Chartered Accountants of India', url: 'https://www.icai.org/post/faqs-provisional-admission-to-foundation-course', coverage: 'Foundation-course eligibility starting point' }], limits: 'Check current ICAI course, examination, registration and direct-entry notices before publication.' },
  'civil-services-officer': { status: 'source-mapped-not-verified', sources: [{ authority: 'Union Public Service Commission', url: 'https://www.upsc.gov.in/examinations/active-exams', coverage: 'Current examination notices starting point' }, { authority: 'Union Public Service Commission', url: 'https://www.upsc.gov.in/examinations/Civil%20Services%20%28Main%29%20Examination%2C%202026', coverage: 'Civil Services examination notice starting point' }], limits: 'A notice is not a complete career route; check the applicable year, stages, eligibility and service allocation rules before publication.' },
};

export const CAREER_ROUTE_RECORDS = guidedCareerPresets.map((preset) => {
  const guide = careerGuideFor(preset.key);
  return {
    key: preset.key,
    title: preset.title,
    category: preset.category,
    featured: preset.featured,
    routeSummary: preset.routeSummary,
    entryRequirements: preset.entryRequirements,
    workEnvironment: preset.workEnvironment,
    nextStep: preset.nextStep,
    tags: preset.tags,
    summary: guide?.summary ?? '',
    outlook: guide?.outlook ?? 'uncertain',
    dailyWork: guide?.dailyWork ?? [],
    entryRoutes: guide?.entryRoutes ?? [],
    foundationSkills: guide?.foundationSkills ?? [],
    specialistSkills: guide?.specialistSkills ?? [],
    futureSkills: guide?.futureSkills ?? [],
    workStyles: guide?.workStyles ?? [],
    watchOuts: guide?.watchOuts ?? [],
    starterTests: guide?.starterTests ?? [],
    adjacentRoles: guide?.adjacentRoles ?? [],
    subjectRoutes: guide?.subjectRoutes ?? [],
    suitableStages: guide?.suitableStages ?? [],
    workSetting: guide?.workSetting ?? '',
    routeLength: guide?.routeLength ?? '',
    regulated: guide?.regulated ?? false,
    careerGroup: guide?.careerGroup ?? 'Builders',
    dataConfidence: guide?.dataConfidence ?? 'exploratory',
    progression: guide?.progression ?? [],
  };
});

// Stable work queue only; these records have not been independently verified.
export const CAREER_DATABASE_PRIORITY_KEYS = [...CAREER_ROUTE_RECORDS]
  .sort((left, right) => Number(right.featured) - Number(left.featured) || left.title.localeCompare(right.title))
  .slice(0, 50)
  .map((record) => record.key);

export const CAREER_DATABASE_VERIFICATION_QUEUE = CAREER_DATABASE_PRIORITY_KEYS.map((key) => {
  const record = CAREER_ROUTE_RECORDS.find((candidate) => candidate.key === key);
  return {
    key,
    title: record?.title ?? key,
    status: 'not-started',
    owner: CAREER_CATALOGUE_META.owner,
    reviewCadence: CAREER_CATALOGUE_META.reviewCadence,
    requiredFields: CAREER_DATABASE_REQUIRED_FIELDS,
    note: 'Editorial route selected for verification; this record is not yet an independently verified database entry.',
    sourceHints: CAREER_DATABASE_SOURCE_MAP[key] ?? null,
  };
});

export const CAREER_DATABASE_READINESS = {
  published: false,
  status: 'verification-queue',
  priorityCount: CAREER_DATABASE_PRIORITY_KEYS.length,
  priorityKeys: CAREER_DATABASE_PRIORITY_KEYS,
  verificationQueue: CAREER_DATABASE_VERIFICATION_QUEUE,
  priorityRule: 'Featured routes first, then title order; this queue is not a verification claim.',
  requiredFields: CAREER_DATABASE_REQUIRED_FIELDS,
};
