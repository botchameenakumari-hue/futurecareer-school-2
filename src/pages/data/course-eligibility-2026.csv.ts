import { COURSE_ELIGIBILITY_RECORDS, COURSE_FINDER_META } from '../../config/courseEligibilityFinder';

const csv = (value: unknown) => '"' + String(value ?? '').replace(/"/g, '""') + '"';

export const GET = () => {
  const header = ['id', 'course', 'duration', 'entrance_route', 'pcm_fit', 'pcb_fit', 'pcmb_fit', 'commerce_fit', 'arts_fit', 'required_subjects', 'alternative_subjects', 'subject_rule', 'explanation', 'official_sources', 'record_status', 'editorially_reviewed_on'];
  const rows = COURSE_ELIGIBILITY_RECORDS.map((record) => [
    record.id,
    record.course,
    record.duration,
    record.exam,
    record.fit.PCM,
    record.fit.PCB,
    record.fit.PCMB,
    record.fit.Commerce,
    record.fit.Arts,
    record.requiredSubjects.join('; '),
    record.anyOfSubjects?.join('; ') || '',
    record.subjectRule,
    record.explanation,
    record.sources.map((source) => `${source.label}: ${source.url}`).join(' | '),
    COURSE_FINDER_META.recordStatus,
    COURSE_FINDER_META.editoriallyReviewedOn,
  ]);
  const body = [
    '# Editorial dataset: compiled from official starting pages; not survey data.',
    '# Version: ' + COURSE_FINDER_META.year,
    '# Editorially reviewed on: ' + COURSE_FINDER_META.editoriallyReviewedOn,
    '# Record status: ' + COURSE_FINDER_META.recordStatus,
    '# Source review method: ' + COURSE_FINDER_META.sourceReview.method,
    '# Source review limitation: ' + COURSE_FINDER_META.sourceReview.doesNotConfirm,
    '# Verification gap: ' + COURSE_FINDER_META.verificationGap,
    '# Verification queue: /data/course-eligibility-verification-queue-2026.csv',
    header,
    ...rows,
  ].map((row) => Array.isArray(row) ? row.map(csv).join(',') : row).join('\n') + '\n';
  return new Response(body, { headers: { 'Content-Type': 'text/csv; charset=utf-8' } });
};
