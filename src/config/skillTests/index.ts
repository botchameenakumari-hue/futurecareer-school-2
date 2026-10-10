// Registry of self-rating tests built as bundles (see types.ts). Each entry
// gets its own page under /services/assessments/<slug>/, a sitemap route and a
// card on the assessments index.
import type { SkillTestBundle } from './types';
import { bundle as burnoutSelfAssessment } from './burnout-self-assessment';
import { bundle as careerReadinessSelfAssessment } from './career-readiness-self-assessment';
import { bundle as decisionMakingSkillsAssessment } from './decision-making-skills-assessment';
import { bundle as examStressSelfAssessment } from './exam-stress-self-assessment';
import { bundle as internshipReadinessSelfAssessment } from './internship-readiness-self-assessment';
import { bundle as interviewReadinessSelfAssessment } from './interview-readiness-self-assessment';
import { bundle as jobFitSelfAssessment } from './job-fit-self-assessment';
import { bundle as leadershipSkillsSelfAssessment } from './leadership-skills-self-assessment';
import { bundle as promotionReadinessAssessment } from './promotion-readiness-assessment';
import { bundle as resilienceAndGrowthMindsetAssessment } from './resilience-and-growth-mindset-assessment';
import { bundle as studyHabitsSelfAssessment } from './study-habits-self-assessment';
import { bundle as timeManagementSelfAssessment } from './time-management-self-assessment';

export const SKILL_TEST_BUNDLES: SkillTestBundle[] = [
  burnoutSelfAssessment,
  careerReadinessSelfAssessment,
  decisionMakingSkillsAssessment,
  examStressSelfAssessment,
  internshipReadinessSelfAssessment,
  interviewReadinessSelfAssessment,
  jobFitSelfAssessment,
  leadershipSkillsSelfAssessment,
  promotionReadinessAssessment,
  resilienceAndGrowthMindsetAssessment,
  studyHabitsSelfAssessment,
  timeManagementSelfAssessment,
];
