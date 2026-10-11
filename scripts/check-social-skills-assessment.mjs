import { readFile } from 'node:fs/promises';

const source = await readFile('src/config/skillTests/social-skills-self-assessment.ts', 'utf8');
const page = await readFile('src/pages/services/assessments/social-skills-self-assessment/index.astro', 'utf8');
for (const needle of ['social-skills-self-assessment', '25', 'listen', 'speak', 'empathy', 'conflict', 'boundaries', 'not a clinical', 'stagePlan']) {
  if (!source.includes(needle) && !page.includes(needle)) throw new Error(`Social-skills assessment is missing: ${needle}`);
}
if ((source.match(/\['(listen|speak|empathy|conflict|boundaries)'/g) || []).length < 25) throw new Error('Social-skills assessment has fewer than 25 scored statements.');
console.log('Social-skills assessment contract passed: five domains, 25 statements, stage advice and limits are present.');
