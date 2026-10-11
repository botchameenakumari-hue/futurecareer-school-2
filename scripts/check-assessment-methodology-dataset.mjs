import fs from 'node:fs';

const config = fs.readFileSync('src/config/assessmentMethodologyDataset.ts', 'utf8');
const page = fs.readFileSync('src/pages/datasets/assessment-methodology-2026.astro', 'utf8');
const json = fs.readFileSync('src/pages/data/assessment-methodology-2026.json.ts', 'utf8');
const csv = fs.readFileSync('src/pages/data/assessment-methodology-2026.csv.ts', 'utf8');
const registry = fs.readFileSync('src/config/researchRegistry.ts', 'utf8');
for (const [label, text, needles] of [
  ['config', config, ['SKILL_TEST_BUNDLES', 'ASSESSMENT_METHODOLOGY_RECORDS', 'participant answers', 'validation results']],
  ['page', page, ['Download CSV', 'Download JSON', 'no participant answers', 'not psychological research']],
  ['JSON', json, ['participantDataIncluded: false', 'ASSESSMENT_METHODOLOGY_RECORDS']],
  ['CSV', csv, ['no participant data', 'ASSESSMENT_METHODOLOGY_RECORDS']],
  ['registry', registry, ['Assessment methodology and domain map 2026']],
]) for (const needle of needles) if (!text.includes(needle)) throw new Error(`assessment methodology ${label} missing ${needle}`);
console.log('assessment methodology dataset contract passed: authored structure only, no participant data');
