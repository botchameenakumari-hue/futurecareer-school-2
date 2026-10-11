import { ASSESSMENT_METHODOLOGY_META, ASSESSMENT_METHODOLOGY_RECORDS } from '../../config/assessmentMethodologyDataset';

const csv = (value: unknown) => '"' + String(value ?? '').replace(/"/g, '""') + '"';
export const GET = () => {
  const header = ['id', 'title', 'url', 'question_count', 'domain_count', 'domains', 'stages', 'has_scenarios', 'has_stage_advice', 'has_practice_plan', 'limit_count', 'limits'];
  const rows = ASSESSMENT_METHODOLOGY_RECORDS.map((record) => [record.id, record.title, record.url, record.questionCount, record.domainCount, record.domains.join('; '), record.stages.join('; '), record.hasScenarios, record.hasStageAdvice, record.hasPracticePlan, record.limitCount, record.limits.join('; ')]);
  const body = ['# Editorial dataset: structure only; no participant data, scores, norms or validation results.', `# Version: ${ASSESSMENT_METHODOLOGY_META.version}`, header, ...rows].map((row) => Array.isArray(row) ? row.map(csv).join(',') : row).join('\n') + '\n';
  return new Response(body, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
};
