import { build } from 'esbuild';

const result = await build({
  entryPoints: ['src/data/coachingPlaybooks.ts'],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  write: false,
});

const module = { exports: {} };
new Function('module', 'exports', result.outputFiles[0].text)(module, module.exports);

const presets = module.exports.guidedCareerPresets ?? [];
const requiredArrays = [
  ['interestTags', 3],
  ['dailyWork', 3],
  ['entryRoutes', 1],
  ['foundationSkills', 3],
  ['specialistSkills', 3],
  ['futureSkills', 3],
  ['starterTests', 1],
  ['questionsToAsk', 1],
  ['evidenceExamples', 1],
];
const keys = new Set();
const identities = new Set();
const duplicateKeys = [];
const duplicateIdentities = [];
const gaps = [];
const requiredHighUpsideTitles = [
  'Quantitative Analyst', 'AI Product Manager', 'Enterprise Solutions Architect',
  'Enterprise Sales Engineer', 'Chip Design Engineer', 'Patent and Intellectual Property Attorney',
  'Energy Storage Engineer', 'Private Equity Analyst', 'Venture Capital Analyst',
  'Anesthesiologist', 'Interventional Radiologist',
  'MLOps and AI Platform Engineer', 'Cybersecurity Architect', 'Semiconductor Process Engineer',
  'Power Electronics Engineer', 'Green Hydrogen Project Engineer', 'Renewable Energy Project Finance Analyst',
  'Climate Finance and Carbon Markets Specialist', 'Space Systems Engineer', 'Drone Systems and Autonomy Engineer',
  'Biomanufacturing Process Engineer', 'Technology Transfer and Licensing Specialist',
  'Fractional CFO and Business Finance Advisor', 'E-commerce Brand Operator',
  'Export Market Development Consultant', 'Industrial AI Transformation Consultant', 'Data Centre Infrastructure Architect',
];

for (const preset of presets) {
  if (keys.has(preset.key)) duplicateKeys.push(preset.key);
  keys.add(preset.key);
  const identity = `${String(preset.title).trim().toLowerCase()}::${String(preset.category).trim().toLowerCase()}`;
  if (identities.has(identity)) duplicateIdentities.push(identity);
  identities.add(identity);
  const guide = module.exports.careerGuideFor(preset.key);
  if (!guide || requiredArrays.some(([field, minimum]) => !Array.isArray(guide[field]) || guide[field].length < minimum) || !Array.isArray(guide.progression) || guide.progression.length < 3 || guide.progression.some((level) => !level.level || !level.example || !level.advice) || !['Builders', 'Analysers', 'Communicators', 'Healers', 'Makers'].includes(guide.careerGroup) || typeof guide.regulated !== 'boolean' || !Number.isInteger(guide.earningPotential) || guide.earningPotential < 1 || guide.earningPotential > 5) {
    gaps.push(preset.key);
  } else {
    const tags = new Set((guide.tags ?? []).map((tag) => String(tag).toLowerCase()));
    const skills = [...guide.foundationSkills, ...guide.specialistSkills, ...guide.futureSkills];
    if (skills.some((skill) => !tags.has(String(skill).toLowerCase()))) gaps.push(`${preset.key}:skill-tags`);
  }
}

const suspiciousSources = presets.flatMap((preset) => {
  const guide = module.exports.careerGuideFor(preset.key);
  const source = String(guide?.marketEvidence?.source ?? '').toLowerCase();
  const title = String(guide?.title ?? '').toLowerCase();
  const renewableRole = /renewable|solar|wind|clean energy|energy transition/.test(title);
  return source.includes('renewable energy and jobs') && !renewableRole
    ? [`${preset.key}: unrelated renewable-energy source`]
    : [];
});

const catalogueSizeIsCredible = presets.length > 400 && presets.length < 700;
const missingHighUpsideTitles = requiredHighUpsideTitles.filter((title) => !presets.some((preset) => preset.title === title));
const medicalClassificationGaps = ['Anesthesiologist', 'Interventional Radiologist'].flatMap((title) => {
  const guide = presets.find((preset) => preset.title === title);
  return guide && guide.regulated && guide.careerGroup === 'Healers' ? [] : [title];
});

if (duplicateKeys.length || duplicateIdentities.length || gaps.length || suspiciousSources.length || missingHighUpsideTitles.length || medicalClassificationGaps.length || !catalogueSizeIsCredible) {
  console.error(JSON.stringify({
    routeCount: presets.length,
    credibleRouteCount: catalogueSizeIsCredible,
    duplicateKeys,
    duplicateIdentities,
    unrelatedSources: suspiciousSources,
    enrichmentGaps: gaps,
    missingHighUpsideTitles,
    medicalClassificationGaps,
  }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  routes: presets.length,
  uniqueKeys: keys.size,
  families: Object.fromEntries([...presets.reduce((counts, preset) => counts.set(preset.category, (counts.get(preset.category) ?? 0) + 1), new Map())].sort()),
  careerProgressionLevels: 3,
  highUpsideRoutesVerified: requiredHighUpsideTitles.length,
  enrichmentGaps: 0,
}));
