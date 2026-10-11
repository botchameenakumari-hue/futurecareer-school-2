import fs from 'node:fs';
import path from 'node:path';

const root = 'src/pages/services/assessments';
const ignored = new Set(['[slug]', 'aptitude', 'psychometric', 'skill-portfolio-tracker']);
const landingOnly = new Set([
  'career-aptitude-test-online',
  'career-test-online',
  'free-job-career-test',
  'job-aptitude-test',
  'job-career-aptitude-test',
]);

const entries = fs.readdirSync(root, { withFileTypes: true })
  .filter((entry) => entry.isDirectory() && !ignored.has(entry.name))
  .map((entry) => {
    const file = path.join(root, entry.name, 'index.astro');
    const source = fs.readFileSync(file, 'utf8');
    return { slug: entry.name, companion: source.includes('AssessmentReportTools'), selfTest: source.includes('SkillSelfTestPage') };
  });

const missing = entries.filter((entry) => !entry.companion && !entry.selfTest && !landingOnly.has(entry.slug));
const misclassifiedLanding = entries.filter((entry) => landingOnly.has(entry.slug) && (entry.companion || entry.selfTest));
if (missing.length || misclassifiedLanding.length) {
  throw new Error(`Assessment coverage mismatch. Missing: ${missing.map((entry) => entry.slug).join(', ') || 'none'}; landing pages with result tooling: ${misclassifiedLanding.map((entry) => entry.slug).join(', ') || 'none'}.`);
}

const companionCount = entries.filter((entry) => entry.companion).length;
const selfTestCount = entries.filter((entry) => entry.selfTest).length;
const landingCount = entries.filter((entry) => landingOnly.has(entry.slug)).length;
if (companionCount !== 19 || selfTestCount !== 17 || landingCount !== 5) {
  throw new Error(`Unexpected assessment coverage counts: companion=${companionCount}, self-test=${selfTestCount}, landing=${landingCount}.`);
}

console.log(`Assessment coverage contract passed: ${companionCount} companion routes, ${selfTestCount} shared self-test routes, ${landingCount} landing-only routes; no uncovered result route.`);
