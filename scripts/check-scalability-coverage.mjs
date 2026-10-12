import fs from 'node:fs';

const files = [
  'src/config/scalability.mjs',
  'src/components/CareerRouteFinder.astro',
  'src/components/SkillSelfTestPage.astro',
  'src/components/AssessmentReportTools.astro',
  'src/pages/career-skills-compass.astro',
  'src/pages/career-landing.html',
  'src/pages/student-career-dashboard.html',
  'src/pages/intermediate-career-dashboard.html',
  'src/pages/school-career-dashboard.html',
  'src/pages/parents-career-dashboard.html',
  'src/pages/university-career-dashboard.html',
];

for (const file of files) {
  const source = fs.readFileSync(file, 'utf8');
  if (!source.toLowerCase().includes('scalab')) throw new Error(`${file} is missing scalability coverage.`);
}

const riskFiles = files.filter((file) => file.includes('dashboard') || file.endsWith('CareerRouteFinder.astro') || file.endsWith('career-landing.html') || file.endsWith('AssessmentReportTools.astro'));
for (const file of riskFiles) {
  const source = fs.readFileSync(file, 'utf8').toLowerCase();
  for (const [label, pattern] of [['competition or crowding', /competition|crowd/], ['saturation or rank gating', /saturat|rank-gated/]]) {
    if (!pattern.test(source)) throw new Error(`${file} is missing scalability risk coverage: ${label}.`);
  }
}

const rule = fs.readFileSync('src/config/scalability.mjs', 'utf8');
for (const needle of ['Scalable', 'Scalable with a business layer', 'Not so scalable', 'pays well late']) {
  if (!rule.includes(needle)) throw new Error(`Scalability rule is missing ${needle}.`);
}

console.log(`Scalability coverage contract passed: ${files.length} shared surfaces include scale, competition and saturation guidance.`);
