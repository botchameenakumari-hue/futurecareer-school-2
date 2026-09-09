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
const duplicateKeys = [];
const gaps = [];

for (const preset of presets) {
  if (keys.has(preset.key)) duplicateKeys.push(preset.key);
  keys.add(preset.key);
  const guide = module.exports.careerGuideFor(preset.key);
  if (!guide || requiredArrays.some(([field, minimum]) => !Array.isArray(guide[field]) || guide[field].length < minimum) || !Array.isArray(guide.progression) || guide.progression.length < 3 || guide.progression.some((level) => !level.level || !level.example || !level.advice) || !['Builders', 'Analysers', 'Communicators', 'Healers', 'Makers'].includes(guide.careerGroup) || typeof guide.regulated !== 'boolean') {
    gaps.push(preset.key);
  } else {
    const tags = new Set((guide.tags ?? []).map((tag) => String(tag).toLowerCase()));
    const skills = [...guide.foundationSkills, ...guide.specialistSkills, ...guide.futureSkills];
    if (skills.some((skill) => !tags.has(String(skill).toLowerCase()))) gaps.push(`${preset.key}:skill-tags`);
  }
}

if (duplicateKeys.length || gaps.length) {
  console.error(JSON.stringify({ duplicateKeys, enrichmentGaps: gaps }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({
  routes: presets.length,
  uniqueKeys: keys.size,
  families: Object.fromEntries([...presets.reduce((counts, preset) => counts.set(preset.category, (counts.get(preset.category) ?? 0) + 1), new Map())].sort()),
  careerProgressionLevels: 3,
  enrichmentGaps: 0,
}));
