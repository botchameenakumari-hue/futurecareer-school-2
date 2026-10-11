import fs from 'node:fs';

const component = fs.readFileSync('src/components/EducationPaybackPlanner.astro', 'utf8');
const page = fs.readFileSync('src/pages/tools/education-cost-payback-planner.astro', 'utf8');
for (const [label, text, needles] of [
  ['planner component', component, ['Direct education cost', 'Opportunity cost', 'Nothing is saved or sent', 'data-epp-result="total-payback"']],
  ['planner page', page, ['EducationPaybackPlanner', 'stress test', 'private browser']],
]) for (const needle of needles) if (!text.toLowerCase().includes(needle.toLowerCase())) throw new Error(`${label} missing ${needle}`);
console.log('education payback planner contract passed');
