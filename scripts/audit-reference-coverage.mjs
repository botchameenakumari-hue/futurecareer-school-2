import fs from 'node:fs';
import path from 'node:path';
import { build } from 'esbuild';

const root = process.cwd();
const referencePages = path.join(path.parse(root).root, 'future-skill-school (11)', 'future-skill-school', 'src', 'pages');
const referenceFiles = fs.existsSync(referencePages)
  ? fs.readdirSync(referencePages).filter((name) => name.endsWith('-dashboard.html')).sort()
  : [];

const playbookResult = await build({ entryPoints: ['src/data/coachingPlaybooks.ts'], bundle: true, platform: 'node', format: 'cjs', write: false });
const playbookModule = { exports: {} };
new Function('module', 'exports', playbookResult.outputFiles[0].text)(playbookModule, playbookModule.exports);
const presetResult = await build({ entryPoints: ['src/data/coachingPresets.ts'], bundle: true, platform: 'node', format: 'cjs', write: false });
const presetModule = { exports: {} };
new Function('module', 'exports', presetResult.outputFiles[0].text)(presetModule, presetModule.exports);
const careerTitles = (playbookModule.exports.guidedCareerPresets ?? []).map((item) => item.title);
const skillTitles = (presetModule.exports.skillPresets ?? []).map((item) => item.title);
const normalise = (value) => String(value).toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const has = (list, concept) => {
  const needle = normalise(concept);
  return list.some((value) => normalise(value).includes(needle) || needle.includes(normalise(value)));
};

// These are explicit, reusable concepts found in the six reference dashboards.
// They are intentionally reviewed as concepts, not blindly copied from prose.
const referenceSkills = [
  'Computer and phone literacy', 'Typing fluency', 'Online research', 'Source checking',
  'Spreadsheet fundamentals', 'Clear speaking', 'Clear writing', 'Note-taking',
  'Basic AI usage', 'Online safety', 'Logical thinking', 'School-level mathematics',
  'Reading documentation', 'Project completion', 'Git and version control',
  'Data literacy', 'Cloud literacy', 'API literacy', 'Financial literacy',
  'Negotiation', 'Persuasion', 'Networking', 'Personal branding',
  'Asynchronous communication', 'Resilience and handling rejection',
];
const referenceCareers = [
  'Software Engineer', 'Data Analyst', 'Data Engineer', 'AI and Machine Learning',
  'Cloud and DevOps', 'Cybersecurity', 'Product Management', 'UX and Product Design',
  'AI Automation', 'Technical Writing', 'Digital Marketing', 'B2B Sales',
  'Financial Analyst', 'Business Analyst', 'Strategy and Consulting',
  'Renewable Energy', 'Healthcare Technology', 'Bioinformatics', 'Instructional Design',
  'Legal Technology', 'Supply Chain Technology', 'Semiconductor', 'Robotics',
  'Research', 'Public Policy', 'Entrepreneurship', 'Nursing', 'Medicine', 'Teaching',
];

const htmlText = referenceFiles.map((file) => fs.readFileSync(path.join(referencePages, file), 'utf8')).join('\n').toLowerCase();
const skills = referenceSkills.map((concept) => ({ concept, inReference: htmlText.includes(normalise(concept)), inCatalogue: has(skillTitles, concept) }));
const careers = referenceCareers.map((concept) => ({ concept, inReference: htmlText.includes(normalise(concept)), inCatalogue: has(careerTitles, concept) }));
const output = {
  referenceFiles,
  referenceFileCount: referenceFiles.length,
  currentCareerRoutes: careerTitles.length,
  currentSkills: skillTitles.length,
  skills,
  careers,
  unmatchedSkills: skills.filter((item) => item.inReference && !item.inCatalogue).map((item) => item.concept),
  unmatchedCareers: careers.filter((item) => item.inReference && !item.inCatalogue).map((item) => item.concept),
};
console.log(JSON.stringify(output));
