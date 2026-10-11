import fs from 'node:fs';

const source = fs.readFileSync('src/config/skillTests/life-skills-self-assessment.ts', 'utf8');
const page = fs.readFileSync('src/pages/services/assessments/life-skills-self-assessment/index.astro', 'utf8');
const htmlPath = 'dist/services/assessments/life-skills-self-assessment/index.html';
const html = fs.readFileSync(htmlPath, 'utf8');

const requiredSource = [
  'life-skills-self-assessment',
  "value: '25'",
  'Self-management',
  'Everyday organisation',
  'People and boundaries',
  'Problem solving and safety',
  'Digital and civic judgement',
  'stageAdvice',
  'scenarios:',
  'reportFile:',
];
const missingSource = requiredSource.filter((text) => !source.includes(text));
const requiredHtml = [
  'Life Skills Self-Assessment | Free Life Skills Test',
  '25 questions',
  'Self-management',
  'Digital and civic judgement',
  'This is an original self-rating tool',
  'sst-data',
];
const missingHtml = requiredHtml.filter((text) => !html.includes(text));

if (page.includes('SkillSelfTestPage') === false || missingSource.length || missingHtml.length) {
  throw new Error(`Life-skills assessment contract failed. Missing source: ${missingSource.join(', ') || 'none'}; missing output: ${missingHtml.join(', ') || 'none'}.`);
}

console.log('Life-skills assessment contract passed: distinct 25-question source and built route are present.');
