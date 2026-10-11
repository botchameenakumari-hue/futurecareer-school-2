import { readFile } from 'node:fs/promises';

const files = {
  page: 'src/pages/datasets/course-eligibility-2026.astro',
  json: 'src/pages/data/course-eligibility-2026.json.ts',
  csv: 'src/pages/data/course-eligibility-2026.csv.ts',
};
const source = {};
for (const [key, file] of Object.entries(files)) source[key] = await readFile(file, 'utf8');

const class10Files = {
  page: 'src/pages/datasets/career-routes-after-10th-2026.astro',
  json: 'src/pages/data/career-routes-after-10th-2026.json.ts',
  csv: 'src/pages/data/career-routes-after-10th-2026.csv.ts',
};
const class10 = {};
for (const [key, file] of Object.entries(class10Files)) class10[key] = await readFile(file, 'utf8');
for (const needle of ['Class 10 route map', 'Download CSV', 'Download JSON', 'not official classifications', 'editorial review date']) {
  if (!class10.page.toLowerCase().includes(needle.toLowerCase())) throw new Error(`Class 10 editorial dataset page is missing: ${needle}`);
}
for (const [key, needles] of Object.entries({ json: ['ROUTES', 'editoriallyReviewedOn', 'provenance'], csv: ['ROUTES', 'Editorially reviewed:', 'text/csv'] })) {
  for (const needle of needles) if (!class10[key].includes(needle)) throw new Error(`Class 10 ${key} endpoint is missing: ${needle}`);
}

for (const needle of ['Dataset', 'Download CSV', 'Download JSON', 'survey data', 'editorial review date']) {
  if (!source.page.toLowerCase().includes(needle.toLowerCase())) throw new Error(`Editorial dataset page is missing: ${needle}`);
}
for (const [key, needles] of Object.entries({ json: ['COURSE_ELIGIBILITY_RECORDS', 'editoriallyReviewedOn', 'provenance'], csv: ['COURSE_ELIGIBILITY_RECORDS', 'editoriallyReviewedOn', 'editorially_reviewed_on', 'text/csv'] })) {
  for (const needle of needles) if (!source[key].includes(needle)) throw new Error(`${key} dataset endpoint is missing: ${needle}`);
}
const skillPage = await readFile('src/pages/datasets/skill-evidence-library-2026.astro', 'utf8');
const skillJson = await readFile('src/pages/data/skill-evidence-library-2026.json.ts', 'utf8');
const skillCsv = await readFile('src/pages/data/skill-evidence-library-2026.csv.ts', 'utf8');
for (const [label, text, needles] of [
  ['skill dataset page', skillPage, ['Download CSV', 'not participant results', 'not a validated predictor']],
  ['skill dataset JSON', skillJson, ['SKILL_EVIDENCE_RECORDS', 'participantDataIncluded: false']],
  ['skill dataset CSV', skillCsv, ['authored project prompts', 'SKILL_EVIDENCE_RECORDS']],
]) for (const needle of needles) if (!text.toLowerCase().includes(needle.toLowerCase())) throw new Error(`${label} is missing: ${needle}`);
const targetPage = await readFile('src/pages/datasets/career-target-emphasis-2026.astro', 'utf8');
const targetJson = await readFile('src/pages/data/career-target-emphasis-2026.json.ts', 'utf8');
const targetCsv = await readFile('src/pages/data/career-target-emphasis-2026.csv.ts', 'utf8');
for (const [label, text, needles] of [
  ['career target dataset page', targetPage, ['Download CSV', 'not hiring requirements', 'labour-market data']],
  ['career target dataset JSON', targetJson, ['CAREER_TARGET_RECORDS', 'participantDataIncluded: false']],
  ['career target dataset CSV', targetCsv, ['directional skill-emphasis bands', 'CAREER_TARGET_RECORDS']],
]) for (const needle of needles) if (!text.toLowerCase().includes(needle.toLowerCase())) throw new Error(`${label} is missing: ${needle}`);
console.log('Editorial dataset contract passed: documented JSON and CSV downloads with provenance and dated review metadata.');
