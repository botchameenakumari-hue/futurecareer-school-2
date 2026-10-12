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

const dataContracts = [
  {
    file: 'src/config/courseEligibilityFinder.ts',
    label: 'course eligibility records',
    pattern: /scale:\s*'(?:high|mid|low)'[\s\S]*?why:\s*'(?:\\'|[^']){30,}'[\s\S]*?grow:\s*'(?:\\'|[^']){20,}'/g,
    minimum: 15,
  },
  {
    file: 'src/config/careerTargets.ts',
    label: 'career target records',
    pattern: /scale:\s*'(?:high|mid|low)'[\s\S]*?why:\s*'(?:\\'|[^']){30,}'[\s\S]*?grow:\s*'(?:\\'|[^']){20,}'/g,
    minimum: 19,
  },
  {
    file: 'src/config/careerChartAfter12th.mjs',
    label: 'Class 12 route records',
    pattern: /scale:\s*'(?:high|mid|low)'[\s\S]*?why:\s*'(?:\\'|[^']){30,}'[\s\S]*?grow:\s*'(?:\\'|[^']){20,}'/g,
    minimum: 20,
  },
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

for (const contract of dataContracts) {
  const source = fs.readFileSync(contract.file, 'utf8');
  const matches = source.match(contract.pattern) || [];
  if (matches.length < contract.minimum) {
    throw new Error(`${contract.file} exposes ${matches.length} ${contract.label} with a complete scalability reason and growth move; expected at least ${contract.minimum}.`);
  }
}

const finder = fs.readFileSync('src/components/CareerRouteFinder.astro', 'utf8');
for (const needle of ['scalabilityWhy', 'scalabilityTip', 'Scalability reason', 'Growth move']) {
  if (!finder.includes(needle)) throw new Error(`Career route finder is missing ${needle}.`);
}

const blogCta = fs.readFileSync('src/components/BlogBottomCta.astro', 'utf8');
if (!blogCta.includes("import ScalabilityLens from './ScalabilityLens.astro';") || !blogCta.includes('showScalabilityLens')) {
  throw new Error('Legacy blog CTA is missing shared scalability-lens coverage.');
}
const blogLayout = fs.readFileSync('src/layouts/BlogPostLayout.astro', 'utf8');
if (!blogLayout.includes('showScalabilityLens={false}')) {
  throw new Error('Blog post layout must disable duplicate CTA scalability-lens coverage.');
}

const rule = fs.readFileSync('src/config/scalability.mjs', 'utf8');
for (const needle of ['Scalable', 'Scalable with a business layer', 'Not so scalable', 'pays well late']) {
  if (!rule.includes(needle)) throw new Error(`Scalability rule is missing ${needle}.`);
}

console.log(`Scalability coverage contract passed: ${files.length} shared surfaces include scale, competition and saturation guidance.`);
