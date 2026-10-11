import { CAREER_CATALOGUE_META, CAREER_DATABASE_REQUIRED_FIELDS, CAREER_DATABASE_VERIFICATION_QUEUE } from '../../config/careerRouteDataset';

const csv = (value: unknown) => '"' + String(value ?? '').replace(/"/g, '""') + '"';
export const GET = () => {
  const header = ['key', 'title', 'status', 'owner', 'review_cadence', 'required_fields', 'note'];
  const rows = CAREER_DATABASE_VERIFICATION_QUEUE.map((record) => [record.key, record.title, record.status, record.owner, record.reviewCadence, CAREER_DATABASE_REQUIRED_FIELDS.join('; '), record.note]);
  const body = ['# Verification queue only: not a verified career database.', `# Version: ${CAREER_CATALOGUE_META.version}`, header, ...rows].map((row) => Array.isArray(row) ? row.map(csv).join(',') : row).join('\n') + '\n';
  return new Response(body, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
};
