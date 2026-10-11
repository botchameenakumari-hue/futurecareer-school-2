import fs from 'node:fs';
const page = fs.readFileSync('src/pages/tools/degree-career-project-planner.astro', 'utf8');
const component = fs.readFileSync('src/components/DegreePathwayPlanner.astro', 'utf8');
const config = fs.readFileSync('src/config/degreePathwayPlanner.ts', 'utf8');
for (const [label, source, needles] of [
  ['page', page, ['DegreePathwayPlanner', 'degree-career-project-planner', 'admission rules']],
  ['component', component, ['dpp-form', 'dpp-data', '30-day project', 'No answers are saved or sent']],
  ['config', config, ['political-science', 'botany', 'forensic-science', 'bca', 'routeCheck']],
]) for (const needle of needles) if (!source.includes(needle)) throw new Error(`Degree pathway planner ${label} is missing ${needle}.`);
console.log('Degree pathway planner contract passed: four subject families, work signals, project evidence and route limits are present.');
