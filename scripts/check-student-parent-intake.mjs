import fs from 'node:fs';

const source = fs.readFileSync('src/components/StudentParentCareerIntake.astro', 'utf8');
const page = fs.readFileSync('src/pages/tools/student-parent-career-intake.astro', 'utf8');
const chart = fs.readFileSync('src/pages/blog/career-options/career-chart-after-12th/index.astro', 'utf8');
const html = fs.readFileSync('dist/tools/student-parent-career-intake/index.html', 'utf8');

const required = [
  'fcs-student-parent-intake-v1',
  'studentGoal',
  'studentQuestion',
  'parentConcern',
  'evidence',
  'nextStep',
  'localStorage',
  'window.print',
];
const missing = required.filter((text) => !source.includes(text));
if (!page.includes('StudentParentCareerIntake') || !chart.includes('/tools/student-parent-career-intake/') || missing.length) {
  throw new Error(`Student-parent intake contract failed. Missing: ${missing.join(', ') || 'page or discoverability link'}.`);
}
for (const text of ['Student–Parent Career Guidance Intake', 'Private by design', 'does not upload your answers']) {
  if (!html.includes(text)) throw new Error(`Student-parent intake output is missing: ${text}`);
}

console.log('Student-parent intake contract passed: local worksheet, routing, discoverability and built output are present.');
