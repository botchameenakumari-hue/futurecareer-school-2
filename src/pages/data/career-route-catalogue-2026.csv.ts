import { CAREER_CATALOGUE_META, CAREER_ROUTE_RECORDS } from '../../config/careerRouteDataset';

const quote = (value: unknown) => `"${String(value ?? '').replaceAll('"', '""')}"`;
const columns = ['key', 'title', 'category', 'featured', 'route_summary', 'entry_requirements', 'work_environment', 'next_step', 'tags', 'outlook', 'daily_work', 'entry_routes', 'foundation_skills', 'specialist_skills', 'future_skills', 'work_styles', 'watch_outs', 'starter_tests', 'adjacent_roles', 'subject_routes', 'suitable_stages', 'work_setting', 'route_length', 'regulated', 'career_group', 'data_confidence', 'progression', 'editorially_reviewed_on'];
const values = CAREER_ROUTE_RECORDS.map((record) => [
  record.key, record.title, record.category, record.featured, record.routeSummary, record.entryRequirements,
  record.workEnvironment, record.nextStep, record.tags.join(' | '), record.outlook, record.dailyWork.join(' | '),
  record.entryRoutes.join(' | '), record.foundationSkills.join(' | '), record.specialistSkills.join(' | '),
  record.futureSkills.join(' | '), record.workStyles.join(' | '), record.watchOuts.join(' | '),
  record.starterTests.join(' | '), record.adjacentRoles.join(' | '), record.subjectRoutes.join(' | '),
  record.suitableStages.join(' | '), record.workSetting, record.routeLength, record.regulated,
  record.careerGroup, record.dataConfidence, CAREER_CATALOGUE_META.editoriallyReviewedOn,
  record.progression.map((step) => `${step.level}: ${step.example} — ${step.advice}`).join(' | '),
]);

export const GET = () => new Response([
  '# Dataset: Future Career School editorial career route catalogue',
  `# Version: ${CAREER_CATALOGUE_META.version}`,
  `# Provenance: ${CAREER_CATALOGUE_META.provenance}`,
  `# Editorially reviewed: ${CAREER_CATALOGUE_META.editoriallyReviewedOn}`,
  columns.map(quote).join(','),
  ...values.map((row) => row.map(quote).join(',')),
].join('\n') + '\n', {
  headers: { 'Content-Type': 'text/csv; charset=utf-8' },
});
