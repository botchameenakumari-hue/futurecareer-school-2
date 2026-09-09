import { build } from 'esbuild';

const result = await build({
  entryPoints: ['src/scripts/coachingDecisionUI.ts'],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  write: false,
});

const module = { exports: {} };
new Function('module', 'exports', result.outputFiles[0].text)(module, module.exports);

const interests = [
  'people', 'systems', 'numbers', 'creative', 'practical', 'nature', 'service',
  'active', 'language', 'independent', 'collaborative', 'structured', 'flexible',
  'earning', 'stability', 'impact', 'mobility', 'analytical', 'verbal', 'hands-on',
  'empathetic', 'visual', 'organised',
];
const skillSearches = ['visual design', 'data interpretation', 'active listening', 'sustainability awareness', 'programming logic'];
const interestCounts = Object.fromEntries(interests.map((interest) => [interest, module.exports.careerLibraryMatches('', 'all', interest, 'all').length]));
const skillCounts = Object.fromEntries(skillSearches.map((skill) => [skill, module.exports.careerLibraryMatches(skill, 'all', 'all', 'all').length]));
const missingInterests = interests.filter((interest) => !interestCounts[interest]);
const missingSkills = skillSearches.filter((skill) => !skillCounts[skill]);

if (missingInterests.length || missingSkills.length) {
  console.error(JSON.stringify({ missingInterests, missingSkills, interestCounts, skillCounts }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ interests: interestCounts, skillSearches: skillCounts }));
