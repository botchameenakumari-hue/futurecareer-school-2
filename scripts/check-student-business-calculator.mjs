import fs from 'node:fs';
const page = fs.readFileSync('src/pages/tools/student-business-idea-feasibility-calculator.astro', 'utf8');
const component = fs.readFileSync('src/components/StudentBusinessFeasibilityCalculator.astro', 'utf8');
for (const [label, source, needles] of [
  ['page', page, ['StudentBusinessFeasibilityCalculator', 'student-business-idea-feasibility-calculator', 'dated plan to test the idea with real buyers']],
  ['component', component, ['data-sbf="price"', 'data-sbf="variable"', 'data-sbf="days"', 'value="14"', 'Your ${days}-day test:', 'breakEven', 'browser', 'does not estimate demand']],
]) for (const needle of needles) if (!source.includes(needle)) throw new Error(`Student business calculator ${label} is missing ${needle}.`);
console.log('Student business calculator contract passed: user-entered unit economics, break-even view, privacy note and 14-day test plan are present.');
