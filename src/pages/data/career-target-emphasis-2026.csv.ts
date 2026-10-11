import { CAREER_TARGET_DATASET_META, CAREER_TARGET_RECORDS } from '../../config/careerTargetDataset';

const csv = (value: unknown) => '"' + String(value ?? '').replace(/"/g, '""') + '"';
export const GET = () => {
  const header = ['id', 'name', 'family', 'skill_keys', 'skill_emphasis_1_to_5', 'first_proof', 'first_move'];
  const rows = CAREER_TARGET_RECORDS.map((record) => [record.id, record.name, record.family, record.skillKeys.join('; '), record.skillEmphasis.join('; '), record.firstProof, record.firstMove]);
  const body = ['# Editorial model: directional skill-emphasis bands; not hiring requirements or labour-market data.', `# Version: ${CAREER_TARGET_DATASET_META.version}`, header, ...rows].map((row) => Array.isArray(row) ? row.map(csv).join(',') : row).join('\n') + '\n';
  return new Response(body, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
};
