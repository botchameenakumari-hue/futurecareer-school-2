import fs from 'node:fs';

const config = fs.readFileSync('src/config/researchRegistry.ts', 'utf8');
const page = fs.readFileSync('src/pages/research-and-datasets.astro', 'utf8');
const endpoint = fs.readFileSync('src/pages/data/research-registry-2026.json.ts', 'utf8');
const methodologyPage = fs.readFileSync('src/pages/datasets/assessment-methodology-2026.astro', 'utf8');
const methodologyJson = fs.readFileSync('src/pages/data/assessment-methodology-2026.json.ts', 'utf8');
for (const [label, text, needles] of [
  ['registry config', config, ['RESEARCH_REPORT_REGISTRY', 'PLANNED_DATASET_REGISTRY', 'PUBLISHED_EDITORIAL_DATASETS']],
  ['registry page', page, ['Published editorial datasets', 'Not published', 'first-party responses', 'data and research policy']],
  ['registry endpoint', endpoint, ['researchReports', 'plannedDatasets', 'publishedEditorialDatasets']],
]) for (const needle of needles) if (!text.includes(needle)) throw new Error(`${label} missing ${needle}`);
for (const [label, text, needles] of [
  ['assessment methodology page', methodologyPage, ['Download CSV', 'no participant answers', 'not psychological research']],
  ['assessment methodology JSON', methodologyJson, ['participantDataIncluded: false', 'ASSESSMENT_METHODOLOGY_RECORDS']],
]) for (const needle of needles) if (!text.includes(needle)) throw new Error(`${label} missing ${needle}`);
console.log('research registry contract passed');
