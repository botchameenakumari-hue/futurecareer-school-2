import { CAREER_TARGET_METHOD, CAREER_TARGETS, SKILL_KEYS } from './careerTargets';

export const CAREER_TARGET_DATASET_META = {
  version: 'October 2026',
  sourcePage: 'https://futurecareerschool.com/services/assessments/skill-portfolio-tracker/',
  owner: 'Future Career School editorial team',
  provenance: CAREER_TARGET_METHOD.source,
  purpose: CAREER_TARGET_METHOD.purpose,
  limits: CAREER_TARGET_METHOD.limits,
};

export const CAREER_TARGET_RECORDS = CAREER_TARGETS.map((target) => ({
  id: target.id,
  name: target.name,
  family: target.family,
  skillKeys: SKILL_KEYS,
  skillEmphasis: target.need,
  firstProof: target.proof,
  firstMove: target.first,
}));
