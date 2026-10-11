import {
  COURSE_FINDER_META,
  COURSE_FINDER_REQUIRED_VERIFICATION_FIELDS,
  COURSE_FINDER_VERIFICATION_QUEUE,
} from '../../config/courseEligibilityFinder';

export const GET = () => new Response(JSON.stringify({
  dataset: 'Future Career School course eligibility verification queue',
  version: COURSE_FINDER_META.year,
  status: 'not-published',
  recordStatus: COURSE_FINDER_META.recordStatus,
  owner: 'Future Career School editorial team',
  requiredFields: COURSE_FINDER_REQUIRED_VERIFICATION_FIELDS,
  note: 'This is a work queue, not verified admission data. Every record remains source-mapped editorial content until the required fields are checked by a named human reviewer.',
  records: COURSE_FINDER_VERIFICATION_QUEUE,
}, null, 2), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
