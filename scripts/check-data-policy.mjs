import fs from 'node:fs';

const page = fs.readFileSync('src/pages/data-policy.astro', 'utf8');
const catalogue = fs.readFileSync('src/config/careerRouteDataset.ts', 'utf8');
const registry = fs.readFileSync('src/pages/research-and-datasets.astro', 'utf8');
const careerCatalogue = JSON.parse(fs.readFileSync('dist/data/career-route-catalogue-2026.json', 'utf8'));
const queueEndpoint = fs.readFileSync('src/pages/data/career-database-verification-queue-2026.json.ts', 'utf8');
const workbench = fs.readFileSync('src/components/CareerDatabaseVerificationWorkbench.astro', 'utf8');
const workbenchPage = fs.readFileSync('src/pages/tools/career-database-verification-workbench.astro', 'utf8');
for (const needle of ['Editorial datasets are not survey research', 'No research claim without first-party evidence', 'parent or guardian', 'private by design', 'minimum sample']) {
  if (!page.toLowerCase().includes(needle.toLowerCase())) throw new Error(`data policy missing ${needle}`);
}
for (const needle of ["recordStatus: 'editorial-only'", "published: false", "status: 'verification-queue'", "'lastVerified'", "'verifier'"]) {
  if (!catalogue.includes(needle)) throw new Error(`career database readiness missing ${needle}`);
}
for (const needle of ['CAREER_CATALOGUE_META.recordStatus', 'CAREER_DATABASE_READINESS.priorityCount', 'verification queue']) {
  if (!registry.includes(needle)) throw new Error(`public career database gate missing ${needle}`);
}
if (careerCatalogue.recordCount !== 612 || careerCatalogue.databaseReadiness?.published !== false || careerCatalogue.databaseReadiness?.priorityKeys?.length !== 50) {
  throw new Error('built career catalogue readiness metadata is incomplete or incorrectly published');
}
for (const needle of ['CAREER_DATABASE_VERIFICATION_QUEUE', 'not-published', 'requiredFields']) if (!queueEndpoint.includes(needle)) throw new Error(`career verification queue missing ${needle}`);
for (const needle of ['localStorage', 'Export review JSON', 'not a verified record', 'data-cdw-field']) if (!workbench.includes(needle)) throw new Error(`career verification workbench missing ${needle}`);
for (const needle of ['CareerDatabaseVerificationWorkbench', 'does not publish or verify records automatically']) if (!workbenchPage.includes(needle)) throw new Error(`career verification workbench page missing ${needle}`);
console.log('data policy contract passed');
