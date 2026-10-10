// A complete self-rating test in one object, for tests added after the first
// three. The shared page (SkillSelfTestPage.astro) accepts either a testId from
// the older registries or one of these bundles.
import type { SkillTest } from '../skillSelfTests';
import type { TestDepth } from '../skillSelfTestDepth';
import type { ExtraQuestion, StageAdvice } from '../skillSelfTestExtras';
import type { Scenario, ScenarioOption } from '../skillSelfTestScenarios';
import type { Talk } from '../skillSelfTestBoost';

export type SkillTestBundle = {
  test: SkillTest;
  depth: TestDepth;
  /** Statements asked only at certain stages. */
  extras: ExtraQuestion[];
  /** stage key -> domain key -> advice */
  stageAdvice: Record<string, Record<string, StageAdvice>>;
  /** Real-life situations with four scored options each. */
  scenarios: Scenario[];
  /** domain key -> 3 phrases or sentence starters */
  phrases: Record<string, string[]>;
  /** stage key -> exactly 4 ordered steps */
  stagePlan: Record<string, string[]>;
  /** domain key -> how to talk about this area */
  talk: Record<string, Talk>;
  /** mode 'interview': q = a question you may be asked, a = how to answer, line = CV line. mode 'ask': q = a question to ask someone, a = how to use it, line = a note to keep. */
  talkTitles: { strong: string; weak: string; intro: string; mode: 'interview' | 'ask' };
};

export type { ExtraQuestion, StageAdvice, Scenario, ScenarioOption, Talk };

export const x = (stages: string[], d: string, text: string, tip: string, reverse = false): ExtraQuestion =>
  reverse ? { d, text, stages, tip, reverse } : { d, text, stages, tip };
export const sa = (situation: string, a1: string, a2: string): StageAdvice => ({ situation, actions: [a1, a2] });
export const o = (t: string, s: number, a: string): ScenarioOption => ({ t, s, a });
export const sc = (d: string, text: string, opts: ScenarioOption[]): Scenario => ({ d, text, opts });
