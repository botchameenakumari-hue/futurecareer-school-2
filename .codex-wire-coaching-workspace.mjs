import { readFileSync, writeFileSync } from 'node:fs';

const root = process.cwd();
const replacementText = readFileSync(`${root}/.codex-coaching-workspace-replacements.txt`, 'utf8');

function block(name) {
  const marker = `===${name}===`;
  const start = replacementText.indexOf(marker);
  if (start < 0) throw new Error(`Missing replacement block ${name}`);
  const contentStart = replacementText.indexOf('\n', start) + 1;
  const next = replacementText.indexOf('\n===', contentStart);
  return replacementText.slice(contentStart, next < 0 ? replacementText.length : next).trimEnd() + '\n\n';
}

function replaceExact(source, before, after, label) {
  if (!source.includes(before)) throw new Error(`Could not find ${label}`);
  return source.replace(before, after);
}

function replaceBetween(source, startMarker, endMarker, replacement, label) {
  const start = source.indexOf(startMarker);
  const end = source.indexOf(endMarker, start + startMarker.length);
  if (start < 0 || end < 0) throw new Error(`Could not find ${label}`);
  return source.slice(0, start) + replacement + source.slice(end);
}

const workspacePath = `${root}/src/scripts/coachingWorkspace.ts`;
let workspace = readFileSync(workspacePath, 'utf8');
workspace = workspace.replace(/\r\n/g, '\n');
workspace = replaceExact(
  workspace,
  "import { actionPresets, careerCategories, careerPresets, skillCategories, skillPresets } from '../data/coachingPresets';\n",
  block('IMPORTS').trimEnd() + '\n',
  'coaching imports',
);
workspace = replaceExact(workspace, 'let bound = false;\n', "let bound = false;\nlet selectedCareerGuideKey = '';\nlet selectedSkillPackKey = '';\n", 'guided selection state');
workspace = replaceBetween(workspace, 'function levelBars', 'function sessionHtml', block('RENDERERS'), 'career renderer');
workspace = replaceBetween(workspace, 'function renderSkillLists', 'function renderSessionLists', block('SKILL_LISTS'), 'skill list renderer');
workspace = replaceBetween(workspace, 'function renderDecisionSummary', 'function renderTimeline', block('DECISION_SUMMARY'), 'decision summary');
workspace = replaceBetween(workspace, 'const recommendedSkillKeys', 'function availableAlternativeFocus', block('PRESETS'), 'preset controls');
workspace = replaceBetween(workspace, 'function updateCareerFocusControl', 'function openCareerDialog', block('FOCUS_CONTROL'), 'career focus control');
workspace = replaceBetween(workspace, 'function openCareerDialog', 'function openSessionDialog', block('DIALOGS'), 'career and skill dialogs');
workspace = replaceBetween(workspace, 'async function handleCareerSubmit', 'async function handleSkillSubmit', block('CAREER_SUBMIT'), 'career submit');
workspace = replaceBetween(workspace, 'async function handleSkillSubmit', 'async function handleEvidenceSubmit', block('SKILL_SUBMITS'), 'skill submits');
const bindStart = workspace.indexOf('function bindEvents()');
if (bindStart < 0) throw new Error('Could not find event bindings');
workspace = workspace.slice(0, bindStart) + block('BIND_EVENTS').trimEnd() + '\n';
workspace = workspace.replaceAll('Â·', '/').replaceAll('âœ“', '&check;');
writeFileSync(workspacePath, workspace, 'utf8');

const componentPath = `${root}/src/components/workspace/HierarchyWorkspace.astro`;
let component = readFileSync(componentPath, 'utf8');
component = replaceExact(component, '<div id="career-option-status" class="form-status"></div>      <div id="career-option-status" class="form-status"></div>', '<div id="career-option-status" class="form-status"></div>', 'duplicate career status');
writeFileSync(componentPath, component, 'utf8');

const playbookPath = `${root}/src/data/coachingPlaybooks.ts`;
let playbook = readFileSync(playbookPath, 'utf8');
playbook = replaceExact(playbook, "'root-cause-analysis', 'customer-communication', 'reliability'", "'root-cause-analysis', 'client-communication', 'reliability'", 'trade skill key');
writeFileSync(playbookPath, playbook, 'utf8');

const decisionUiPath = `${root}/src/scripts/coachingDecisionUI.ts`;
let decisionUi = readFileSync(decisionUiPath, 'utf8');
decisionUi = decisionUi.replaceAll('Â·', '/');
writeFileSync(decisionUiPath, decisionUi, 'utf8');

console.log('Coaching workspace behavior wired successfully.');
