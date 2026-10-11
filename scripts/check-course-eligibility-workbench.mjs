import fs from 'node:fs';
const component = fs.readFileSync('src/components/CourseEligibilityVerificationWorkbench.astro', 'utf8');
const page = fs.readFileSync('src/pages/tools/course-eligibility-verification-workbench.astro', 'utf8');
for (const [label, text, needles] of [
  ['component', component, ['cvw-form', 'localStorage', 'Export review JSON', 'not verified admission data', 'data-cvw-field', 'data-cvw-detail', 'complete-for-human-review', 'valid source URL']],
  ['page', page, ['COURSE_FINDER_VERIFICATION_QUEUE', 'CourseEligibilityVerificationWorkbench', 'does not verify sources']],
]) for (const needle of needles) if (!text.includes(needle)) throw new Error(`course eligibility workbench ${label} missing ${needle}`);
console.log('course eligibility verification workbench contract passed');
