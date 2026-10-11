import {
  COURSE_FINDER_META,
  COURSE_FINDER_REQUIRED_VERIFICATION_FIELDS,
  COURSE_FINDER_VERIFICATION_QUEUE,
} from '../../config/courseEligibilityFinder';

const csv = (value: unknown) => '"' + String(value ?? '').replace(/"/g, '""') + '"';

export const GET = () => {
  const header = ['id', 'course', 'status', 'owner', 'required_fields', 'note'];
  const rows = COURSE_FINDER_VERIFICATION_QUEUE.map((record) => [
    record.id,
    record.course,
    record.status,
    record.owner,
    COURSE_FINDER_REQUIRED_VERIFICATION_FIELDS.join('; '),
    record.note,
  ]);
  const body = [
    '# Verification queue only: not verified admission data.',
    '# Version: ' + COURSE_FINDER_META.year,
    '# Record status: ' + COURSE_FINDER_META.recordStatus,
    header,
    ...rows,
  ].map((row) => Array.isArray(row) ? row.map(csv).join(',') : row).join('\n') + '\n';
  return new Response(body, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
};
