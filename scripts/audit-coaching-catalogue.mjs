import { build } from 'esbuild';
import fs from 'node:fs';

const result = await build({ entryPoints: ['src/data/coachingPlaybooks.ts'], bundle: true, platform: 'node', format: 'cjs', write: false });
const module = { exports: {} };
new Function('module', 'exports', result.outputFiles[0].text)(module, module.exports);
const presetsBuild = await build({ entryPoints: ['src/data/coachingPresets.ts'], bundle: true, platform: 'node', format: 'cjs', write: false });
const presetsModule = { exports: {} };
new Function('module', 'exports', presetsBuild.outputFiles[0].text)(presetsModule, presetsModule.exports);
const skills = presetsModule.exports.skillPresets ?? [];
const actions = presetsModule.exports.actionPresets ?? [];
const packs = module.exports.skillPacks ?? [];
const validStages = new Set(['Decide', 'Start', 'Build', 'Publish or apply', 'Connect', 'Evaluate']);
const skillGaps = skills.filter((skill) => !skill.starterTask || !skill.evidenceHint || !skill.estimatedMinutes || !skill.recommendedStages?.length || !skill.relatedCareerGroups?.length || !Array.isArray(skill.progression) || skill.progression.length < 3 || skill.progression.some((level) => !level.level || !level.example || !level.advice)).map((skill) => skill.key);
const actionGaps = actions.filter((action) => !validStages.has(action.milestone) || !action.estimatedMinutes || !action.evidenceHint).map((action) => action.key);
const packGaps = packs.filter((pack) => !pack.skillKeys.length || !module.exports.skillPackItems(pack).length).map((pack) => pack.key);
const requiredTimeVariants = ['starter-career-test', 'one-week-practical-test', 'four-week-portfolio-project', 'deep-portfolio-project'];
const missingTimeVariants = requiredTimeVariants.filter((key) => !actions.some((action) => action.key === key));
const requiredFoundationSkills = ['internet-search', 'security-and-privacy-basics', 'web-literacy', 'project-habits-and-finishing-things', 'high-agency', 'project-management', 'selling-and-persuasion'];
const requiredActionKeys = ['two-hour-role-task', 'build-break-explain-lab', 'deep-work-routine', 'source-and-ai-check', 'money-safety-check'];
const missingFoundationSkills = requiredFoundationSkills.filter((key) => !skills.some((skill) => skill.key === key));
const missingActionPresets = requiredActionKeys.filter((key) => !actions.some((action) => action.key === key));
const decisionUiSource = fs.readFileSync('src/scripts/coachingDecisionUI.ts', 'utf8').toLowerCase();
const missingPlainLanguageMeanings = requiredFoundationSkills.filter((key) => {
  const skill = skills.find((item) => item.key === key);
  return !skill || !decisionUiSource.includes(`'${skill.title.toLowerCase()}'`);
});
if (skillGaps.length || actionGaps.length || packGaps.length || missingTimeVariants.length || missingFoundationSkills.length || missingActionPresets.length || missingPlainLanguageMeanings.length) {
  console.error(JSON.stringify({ skillGaps, actionGaps, packGaps, missingTimeVariants, missingFoundationSkills, missingActionPresets, missingPlainLanguageMeanings }, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({ skills: skills.length, actions: actions.length, skillPacks: packs.length, skillProgressionLevels: 3, requiredFoundationSkills, requiredActionKeys, gaps: 0 }));
