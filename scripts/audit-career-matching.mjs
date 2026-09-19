import { build } from 'esbuild';
import fs from 'node:fs';

const result = await build({
  entryPoints: ['src/scripts/coachingDecisionUI.ts'],
  bundle: true,
  platform: 'node',
  format: 'cjs',
  write: false,
});

const module = { exports: {} };
new Function('module', 'exports', result.outputFiles[0].text)(module, module.exports);

// Keep the rendered control vocabulary and the matching vocabulary in lock
// step. This catches the easy-to-miss failure where a button renders but its
// value is absent from one of the family/cue maps and therefore has no effect.
const workspaceMarkup = fs.readFileSync('src/components/workspace/HierarchyWorkspace.astro', 'utf8');
const workspaceScript = fs.readFileSync('src/scripts/coachingWorkspace.ts', 'utf8');
const visibleSignals = [...workspaceMarkup.matchAll(/data-career-interest="([^"]+)"/g)].map(([, value]) => value);
const dynamicSignals = [...workspaceScript.matchAll(/data-career-interest="([^"]+)"/g)].map(([, value]) => value);
const lensSignals = [...workspaceMarkup.matchAll(/data-career-lens="([^"]+)"/g)]
  .flatMap(([, value]) => value.split(',').map((signal) => signal.trim()).filter(Boolean));
const controlSignals = [...new Set([...visibleSignals, ...dynamicSignals, ...lensSignals])];
const familySection = fs.readFileSync('src/scripts/coachingDecisionUI.ts', 'utf8').split('const careerInterestFamilies:')[1]?.split('};\n\nfunction careerFamilyLabel')[0] ?? '';
const cueSection = fs.readFileSync('src/scripts/coachingDecisionUI.ts', 'utf8').split('const interestRoleCues:')[1]?.split('};\n\nexport function interestRelevanceScore')[0] ?? '';
const familyKeys = [...familySection.matchAll(/^\s*['"]?([\w-]+)['"]?\s*:/gm)].map(([, key]) => key);
const cueKeys = [...cueSection.matchAll(/^\s*['"]?([\w-]+)['"]?\s*:/gm)].map(([, key]) => key);
const unwiredSignals = controlSignals.filter((signal) => !familyKeys.includes(signal) || !cueKeys.includes(signal));

const interests = [
  'people', 'systems', 'numbers', 'creative', 'practical', 'nature', 'service',
  'active', 'language', 'independent', 'collaborative', 'structured', 'flexible',
  'people-facing', 'hands-on-setting', 'predictable-routine', 'remote-friendly', 'outdoor-field', 'project-based',
  'earning', 'stability', 'impact', 'mobility', 'analytical', 'verbal', 'hands-on',
  'empathetic', 'visual', 'organised',
  'quick-income', 'lower-cost', 'flexible-time', 'local-access',
];
const skillSearches = ['visual design', 'data interpretation', 'active listening', 'sustainability awareness', 'programming logic'];
const categories = [
  'Technology & Data', 'Engineering & Built Environment', 'Health & Life Sciences',
  'Commerce, Finance & Economics', 'Business, Marketing & Operations', 'Design, Media & Creative Arts',
  'Law, Government & Public Service', 'Education, Psychology & Social Impact',
  'Science, Research & Environment', 'Hospitality, Travel, Sports & Events',
  'Agriculture, Food & Rural Careers', 'Skilled Trades & Applied Careers',
  'Languages, International & Emerging Routes', 'Future-ready & Cross-functional',
];
const interestCounts = Object.fromEntries(interests.map((interest) => [interest, module.exports.careerLibraryMatches('', 'all', interest, 'all').length]));
const skillCounts = Object.fromEntries(skillSearches.map((skill) => [skill, module.exports.careerLibraryMatches(skill, 'all', 'all', 'all').length]));
const categoryCounts = Object.fromEntries(categories.map((category) => [category, module.exports.careerLibraryMatches('', category, 'all', 'all').length]));
const missingInterests = interests.filter((interest) => !interestCounts[interest]);
const missingSkills = skillSearches.filter((skill) => !skillCounts[skill]);
const missingCategories = categories.filter((category) => !categoryCounts[category]);
const catalogueCount = module.exports.careerLibraryMatches('', 'all', 'all', 'all').length;
// A preference must be useful as a filter as well as being present in the
// catalogue. A count equal to the complete catalogue means the button is
// effectively decorative and would fail the learner's expectation that the
// shortlist changes.
const overbroadInterests = interests.filter((interest) => interestCounts[interest] >= catalogueCount);
const multiSelections = {
  systemsAndNumbers: module.exports.careerLibraryMatches('', 'all', 'systems,numbers', 'all').length,
  independentAndFlexible: module.exports.careerLibraryMatches('', 'all', 'independent,flexible', 'all').length,
  practicalAndLocal: module.exports.careerLibraryMatches('', 'all', 'practical,local-access', 'all').length,
};
const invalidMultiSelections = Object.entries(multiSelections)
  .filter(([, count]) => !count || count >= catalogueCount)
  .map(([name]) => name);
const rankingChecks = Object.fromEntries(Object.entries({ systemsAndNumbers: 'systems,numbers', independentAndFlexible: 'independent,flexible', practicalAndLocal: 'practical,local-access' }).map(([name, selection]) => {
  const guides = module.exports.careerLibraryMatches('', 'all', selection, 'all');
  const scores = guides.slice(0, 12).map((guide) => selection.split(',').reduce((total, interest) => total + module.exports.careerInterestMatchScore(guide, interest), 0));
  return [name, { first: scores[0], last: scores[scores.length - 1], nonIncreasing: scores.every((score, index) => index === 0 || score <= scores[index - 1]) }];
}));
const invalidRankings = Object.entries(rankingChecks).filter(([, result]) => !result.nonIncreasing).map(([name]) => name);
const stages = ['after-10th', 'after-12th-maths', 'after-12th-biology', 'after-12th-commerce', 'after-12th-humanities', 'college', 'working'];
const stageCounts = Object.fromEntries(stages.map((stage) => [stage, module.exports.careerLibraryMatches('', 'all', 'all', stage).length]));
const ineffectiveStages = stages.filter((stage) => !stageCounts[stage] || stageCounts[stage] >= catalogueCount);

if (missingInterests.length || missingSkills.length || missingCategories.length || overbroadInterests.length || invalidMultiSelections.length || invalidRankings.length || unwiredSignals.length || ineffectiveStages.length) {
  console.error(JSON.stringify({ missingInterests, missingSkills, missingCategories, overbroadInterests, unwiredSignals, invalidMultiSelections, invalidRankings, ineffectiveStages, catalogueCount, multiSelections, rankingChecks, stageCounts, interestCounts, skillCounts, categoryCounts }, null, 2));
  process.exit(1);
}

console.log(JSON.stringify({ catalogueCount, controlSignals, interests: interestCounts, skillSearches: skillCounts, categories: categoryCounts, stages: stageCounts, multiSelections, rankingChecks }));
