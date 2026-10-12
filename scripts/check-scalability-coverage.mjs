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

const toolPerspectiveFiles = [
  'bipc-pcb-course-finder',
  'career-change-runway-calculator',
  'career-database-verification-workbench',
  'career-decision-journal',
  'career-experiment-planner',
  'career-optionality-calculator',
  'career-route-finder',
  'commerce-without-maths-course-finder',
  'course-cost-planner',
  'course-entrance-exam-finder',
  'course-eligibility-verification-workbench',
  'course-provider-comparison',
  'degree-career-project-planner',
  'education-cost-payback-planner',
  'informational-interview-planner',
  'internship-readiness-planner',
  'mpc-pcm-course-finder',
  'pcb-career-options-without-neet',
  'portfolio-quality-checker',
  'resume-skills-evidence-builder',
  'scholarship-application-planner',
  'skill-to-service-mapper',
  'student-business-idea-feasibility-calculator',
  'student-parent-career-intake',
  'study-abroad-readiness-planner',
].map((slug) => `src/pages/tools/${slug}.astro`);

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

for (const file of toolPerspectiveFiles) {
  const source = fs.readFileSync(file, 'utf8');
  if (!source.includes('BusinessPerspectiveNote')) throw new Error(`${file} is missing the business-perspective note.`);
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
for (const file of ['src/pages/blog/index.astro', 'src/pages/blog/[category]/index.astro']) {
  if (!fs.readFileSync(file, 'utf8').includes('BusinessPerspectiveNote')) {
    throw new Error(`${file} is missing shared business-perspective coverage.`);
  }
}

const assessmentLanding = fs.readFileSync('src/pages/services/assessments/[slug]/index.astro', 'utf8');
if (!assessmentLanding.includes('BaseLayout')) {
  throw new Error('Dynamic assessment landing pages must use the shared BaseLayout business-perspective coverage.');
}
const assessmentHub = fs.readFileSync('src/pages/services/assessments/index.astro', 'utf8');
if (!assessmentHub.includes('BaseLayout')) {
  throw new Error('Assessment hub must use the shared BaseLayout business-perspective coverage.');
}
const baseLayout = fs.readFileSync('src/layouts/BaseLayout.astro', 'utf8');
if (!baseLayout.includes('isCareerGuidanceService') || !baseLayout.includes('isAssessmentService') || !baseLayout.includes('BusinessPerspectiveNote serviceBanner') || baseLayout.includes("!Astro.url.pathname.includes('/locations/')")) {
  throw new Error('Career-guidance and assessment service pages, including location pages, are missing shared business-perspective coverage.');
}
const resourceLayout = fs.readFileSync('src/layouts/CareerResourceLayout.astro', 'utf8');
if (!resourceLayout.includes('BusinessPerspectiveNote')) {
  throw new Error('Career resource pages are missing shared business-perspective coverage.');
}

const rule = fs.readFileSync('src/config/scalability.mjs', 'utf8');
for (const needle of ['Scalable', 'Scalable with a business layer', 'Not so scalable', 'pays well late']) {
  if (!rule.includes(needle)) throw new Error(`Scalability rule is missing ${needle}.`);
}

const renderedPerspective = /Business and growth perspective|Our scalability view|Scalability lens/;
const renderedHtml = (dir) => {
  if (!fs.existsSync(dir)) return [];
  const found = [];
  const visit = (current) => {
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = `${current}/${entry.name}`;
      if (entry.isDirectory()) visit(full);
      else if (entry.isFile() && entry.name.endsWith('.html')) found.push(full);
    }
  };
  visit(dir);
  return found;
};
for (const [label, dir] of [
  ['career-guidance service output', 'dist/services/career-counselling-and-career-guidance'],
  ['assessment output', 'dist/services/assessments'],
  ['tool output', 'dist/tools'],
  ['blog output', 'dist/blog'],
  ['career-resource output', 'dist/career-resources'],
]) {
  const missing = renderedHtml(dir).filter((file) => {
    const html = fs.readFileSync(file, 'utf8');
    return !/noindex/i.test(html) && !renderedPerspective.test(html);
  });
  if (missing.length) throw new Error(`${label} has rendered pages without business/scalability perspective: ${missing.slice(0, 5).join(', ')}`);
}

console.log(`Scalability coverage contract passed: source contracts and rendered career, assessment, tool, blog and resource surfaces include business/scalability guidance.`);
