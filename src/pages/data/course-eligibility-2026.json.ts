import { COURSE_ELIGIBILITY_RECORDS, COURSE_FINDER_META } from '../../config/courseEligibilityFinder';

export const GET = () => new Response(JSON.stringify({
  dataset: 'Future Career School editorial course eligibility and entrance routes',
  version: COURSE_FINDER_META.year,
  editoriallyReviewedOn: COURSE_FINDER_META.editoriallyReviewedOn,
  recordStatus: COURSE_FINDER_META.recordStatus,
  sourceReview: COURSE_FINDER_META.sourceReview,
  verificationGap: COURSE_FINDER_META.verificationGap,
  verificationQueue: '/data/course-eligibility-verification-queue-2026.json',
  provenance: 'Compiled editorial data from the linked official starting pages; not survey data and not an admission decision.',
  records: COURSE_ELIGIBILITY_RECORDS,
}, null, 2), {
  headers: { 'Content-Type': 'application/json; charset=utf-8' },
});
