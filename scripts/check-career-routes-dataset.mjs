import fs from 'node:fs';

const page = fs.readFileSync('src/pages/datasets/career-routes-after-12th-2026.astro', 'utf8');
const json = fs.readFileSync('src/pages/data/career-routes-after-12th-2026.json.ts', 'utf8');
const csv = fs.readFileSync('src/pages/data/career-routes-after-12th-2026.csv.ts', 'utf8');
for (const [label, text, needles] of [
  ['dataset page', page, ['Download CSV', 'Download JSON', 'editorial planning bands']],
  ['JSON endpoint', json, ['chartRows', 'ROW_FILTERS', 'provenance', 'editoriallyReviewedOn']],
  ['CSV endpoint', csv, ['text/csv', 'ROW_FILTERS', 'editorially_reviewed_on', 'Editorially reviewed:']],
]) {
  for (const needle of needles) if (!text.includes(needle)) throw new Error(`${label} missing ${needle}`);
}
for (const [label, text] of [['JSON endpoint', json], ['CSV endpoint', csv]]) {
  if (/verifiedOn|verified_on|Verified:|last_checked/.test(text)) throw new Error(`${label} contains verification metadata with an unsupported certainty label`);
}
console.log('career routes dataset contract passed');
