import { SKILL_EVIDENCE_DATASET_META, SKILL_EVIDENCE_RECORDS } from '../../config/skillEvidenceDataset';

const csv = (value: unknown) => '"' + String(value ?? '').replace(/"/g, '""') + '"';
export const GET = () => {
  const header = ['id', 'skill', 'level', 'title', 'outcome', 'hours', 'steps', 'proof', 'school_example', 'college_example', 'early_example', 'experienced_example'];
  const rows = SKILL_EVIDENCE_RECORDS.map((record) => [record.id, record.skill, record.level, record.title, record.outcome, record.hours, record.steps.join('; '), record.proof.join('; '), record.audienceExamples.school, record.audienceExamples.college, record.audienceExamples.early, record.audienceExamples.experienced]);
  const body = ['# Editorial dataset: authored project prompts; no participant results or employment claims.', `# Version: ${SKILL_EVIDENCE_DATASET_META.version}`, header, ...rows].map((row) => Array.isArray(row) ? row.map(csv).join(',') : row).join('\n') + '\n';
  return new Response(body, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
};
