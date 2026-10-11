import fs from 'node:fs';

const targets = fs.readFileSync('src/config/careerTargets.ts', 'utf8');
const projects = fs.readFileSync('src/config/skillProjects.ts', 'utf8');
const page = fs.readFileSync('src/components/SkillPortfolioTracker.astro', 'utf8');

for (const [label, source, required] of [
  ['career-target methodology', targets, ['CAREER_TARGET_METHOD', 'editoriallyReviewedOn', 'not been validated']],
  ['project-library methodology', projects, ['PROJECT_LIBRARY_METHOD', 'editoriallyReviewedOn', 'not been validated']],
  ['tracker disclosure', page, ['How the comparison is made', 'self-reported', 'careerMethod', 'projectMethod']],
]) {
  for (const token of required) {
    if (!source.includes(token)) throw new Error(`${label} is missing ${token}`);
  }
}

console.log('Tracker methodology contract passed: target and project models disclose provenance, date and limits.');
