import fs from 'node:fs';
const component = fs.readFileSync('src/components/CareerDatabaseVerificationWorkbench.astro', 'utf8');
const page = fs.readFileSync('src/pages/tools/career-database-verification-workbench.astro', 'utf8');
for (const [label, text, needles] of [
  ['component', component, ['cdw-form', 'localStorage', 'Export review JSON', 'not a verified record', 'data-cdw-field', 'data-cdw-detail', 'complete-for-human-review', 'valid source URL', 'source-mapped-not-verified', 'Primary-source starting points']],
  ['page', page, ['CAREER_DATABASE_VERIFICATION_QUEUE', 'CareerDatabaseVerificationWorkbench', 'does not publish or verify records automatically']],
]) for (const needle of needles) if (!text.includes(needle)) throw new Error(`career database workbench ${label} missing ${needle}`);
console.log('career database workbench contract passed: browser-local review drafts, field checklist and export are present');
