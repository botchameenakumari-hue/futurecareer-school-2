import fs from 'node:fs';

const source = fs.readFileSync('src/components/ResumeEvidenceBuilder.astro', 'utf8');
const page = fs.readFileSync('src/pages/tools/resume-skills-evidence-builder.astro', 'utf8');
const tracker = fs.readFileSync('src/components/SkillPortfolioTracker.astro', 'utf8');
const html = fs.readFileSync('dist/tools/resume-skills-evidence-builder/index.html', 'utf8');
const required = ['fcs-resume-evidence-builder-v1', "field('context'", "field('action'", "field('outcome'", "field('proof'", 'does not upload'];
const missing = required.filter((text) => !source.includes(text));
if (missing.length || !page.includes('ResumeEvidenceBuilder') || !tracker.includes('/tools/resume-skills-evidence-builder/')) {
  throw new Error(`Resume evidence builder contract failed. Missing: ${missing.join(', ') || 'page or tracker link'}.`);
}
for (const text of ['Resume Skills Evidence Builder', 'truthful resume bullet', 'does not upload']) {
  if (!html.includes(text)) throw new Error(`Resume evidence builder output is missing: ${text}`);
}
console.log('Resume evidence builder contract passed: fields, privacy copy, tracker link and built output are present.');
