import fs from 'node:fs';

const page = fs.readFileSync('src/pages/datasets/career-route-catalogue-2026.astro', 'utf8');
const config = fs.readFileSync('src/config/careerRouteDataset.ts', 'utf8');
const json = fs.readFileSync('src/pages/data/career-route-catalogue-2026.json.ts', 'utf8');
const csv = fs.readFileSync('src/pages/data/career-route-catalogue-2026.csv.ts', 'utf8');
for (const [label, text, needles] of [
  ['dataset page', page, ['Download CSV', 'Download JSON', 'not an official occupation register']],
  ['catalogue config', config, ['guidedCareerPresets', 'CAREER_ROUTE_RECORDS', 'provenance', 'owner', 'reviewCadence', 'recordStatus', 'publicationGate', 'editoriallyReviewedOn', 'CAREER_DATABASE_REQUIRED_FIELDS', 'CAREER_DATABASE_PRIORITY_KEYS']],
  ['JSON endpoint', json, ['recordCount', 'CAREER_ROUTE_RECORDS', 'editoriallyReviewedOn']],
  ['CSV endpoint', csv, ['text/csv', 'progression', 'CAREER_ROUTE_RECORDS', 'editorially_reviewed_on', 'Editorially reviewed:']],
]) for (const needle of needles) if (!text.includes(needle)) throw new Error(`${label} missing ${needle}`);
for (const [label, text] of [['catalogue config', config], ['JSON endpoint', json], ['CSV endpoint', csv]]) {
  if (/verifiedOn|verified_on|Verified:|last_checked/.test(text)) throw new Error(`${label} contains verification metadata with an unsupported certainty label`);
}
console.log('career route catalogue dataset contract passed');
