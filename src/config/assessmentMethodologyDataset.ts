import { SKILL_TEST_BUNDLES } from './skillTests';

export const ASSESSMENT_METHODOLOGY_META = {
  version: 'October 2026',
  sourcePage: 'https://futurecareerschool.com/services/assessments/',
  owner: 'Future Career School editorial team',
  provenance: 'Snapshot of the school’s authored self-assessment bundles. It describes content structure only; it contains no participant answers, scores, norms or validation results.',
  disclaimer: 'These are non-clinical self-reflection tools. Question counts and domain labels describe the current product, not a validated psychological, academic or hiring instrument.',
};

export const ASSESSMENT_METHODOLOGY_RECORDS = SKILL_TEST_BUNDLES.map(({ test, depth, stageAdvice }) => ({
  id: test.id,
  title: test.breadcrumbName,
  url: test.pageUrl,
  questionCount: test.questions.length,
  domainCount: test.domains.length,
  domains: test.domains.map((domain) => domain.name),
  stages: depth.stages.map((stage) => stage.key),
  hasScenarios: true,
  hasStageAdvice: Object.keys(stageAdvice ?? {}).length > 0,
  hasPracticePlan: depth.thirtyDay.length > 0,
  limitCount: test.limits.length,
  limits: test.limits,
}));
