import fs from 'node:fs';

const page = fs.readFileSync('src/pages/tools/career-route-finder.astro', 'utf8');
const component = fs.readFileSync('src/components/CareerRouteFinder.astro', 'utf8');
for (const [label, source, needles] of [
  ['page', page, ['CareerRouteFinder', 'CAREER_ROUTE_RECORDS', 'career-route-catalogue-2026', 'not a live job or salary database']],
  ['component', component, ['crf-form', 'crf-data', 'browser', 'suitableStages', 'route.entryRoutes', 'crf-compare', 'data-compare', 'Compare this route', 'Scalability', 'scalabilityWhy', 'Not so scalable']],
]) {
  for (const needle of needles) if (!source.includes(needle)) throw new Error(`Career route finder ${label} is missing ${needle}.`);
}
console.log('Career route finder contract passed: editorial catalogue, stage/category filters, private browser interaction and limits are present.');
