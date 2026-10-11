import { PROJECTS, PROJECT_LIBRARY_METHOD } from './skillProjects';

export const SKILL_EVIDENCE_DATASET_META = {
  version: 'October 2026',
  sourcePage: 'https://futurecareerschool.com/services/assessments/skill-portfolio-tracker/',
  owner: 'Future Career School editorial team',
  provenance: PROJECT_LIBRARY_METHOD.source,
  purpose: PROJECT_LIBRARY_METHOD.purpose,
  limits: PROJECT_LIBRARY_METHOD.limits,
};

export const SKILL_EVIDENCE_RECORDS = PROJECTS.map((project) => ({
  id: project.id,
  skill: project.skill,
  level: project.level,
  title: project.title,
  outcome: project.outcome,
  hours: project.hours,
  steps: project.steps,
  proof: project.proof,
  audienceExamples: project.examples,
}));
