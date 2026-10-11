// Plan companion for the standalone assessment pages (interest, personality, aptitude, readiness
// and stage assessments). The self-rating tests already carry these sections in SkillSelfTestPage.
// Every entry names the kind of result, the stage, one proof project from the project library and
// the next assessments. Nothing here states a statistic or an outcome.
import { PROJECTS } from './skillProjects';

export type CompanionKind = 'interest' | 'personality' | 'aptitude' | 'skills' | 'stage';
export type Aud = 'school' | 'college' | 'early' | 'experienced';
export type Next = { href: string; title: string; why: string };

type Entry = { title: string; kind: CompanionKind; aud: Aud; projectId: string; skill: string; next: Next[] };

const T = (s: string) => `/services/assessments/${s}/`;

export const COMPANION: Record<string, Entry> = {
  'riasec-holland-code-career-test': { title: 'RIASEC Holland Code Career Test', kind: 'interest', aud: 'college', projectId: 'proof-1', skill: 'proof', next: [
    { href: T('career-readiness-self-assessment'), title: 'Career Readiness Self-Assessment', why: 'Moves from what interests you to whether you are ready to act on it.' },
    { href: T('big-5-personality-test-careers'), title: 'Big 5 Personality Test for Careers', why: 'Adds how you tend to work to what you like doing.' } ] },
  'big-5-personality-test-careers': { title: 'Big 5 Personality Test for Careers', kind: 'personality', aud: 'college', projectId: 'english_write-1', skill: 'english_write', next: [
    { href: T('riasec-holland-code-career-test'), title: 'RIASEC Holland Code Career Test', why: 'Adds your interests to your work-style pattern.' },
    { href: T('decision-making-skills-assessment'), title: 'Decision-Making Skills Assessment', why: 'Shows how your pattern plays out when you have to choose.' } ] },
  'myers-briggs-career-test': { title: 'Career Preference Type Test', kind: 'personality', aud: 'college', projectId: 'english_speak-1', skill: 'english_speak', next: [
    { href: T('big-5-personality-test-careers'), title: 'Big 5 Personality Test for Careers', why: 'Compares your preference pairs with five continuous traits.' },
    { href: T('communication-skills-assessment'), title: 'Communication Skills Assessment', why: 'Checks how your preferences show up in conversation.' } ] },
  'disc-personality-test-careers': { title: 'DISC Personality Test for Careers', kind: 'personality', aud: 'early', projectId: 'english_speak-1', skill: 'english_speak', next: [
    { href: T('communication-skills-assessment'), title: 'Communication Skills Assessment', why: 'Looks at listening, speaking and feedback beyond your style blend.' },
    { href: T('leadership-skills-self-assessment'), title: 'Leadership Skills Self-Assessment', why: 'Shows how your style holds up when you lead others.' } ] },
  'enneagram-personality-test-careers': { title: 'Enneagram Personality Test for Careers', kind: 'personality', aud: 'college', projectId: 'english_write-1', skill: 'english_write', next: [
    { href: T('big-5-personality-test-careers'), title: 'Big 5 Personality Test for Careers', why: 'Adds a trait-based view to your motivation pattern.' },
    { href: T('resilience-and-growth-mindset-assessment'), title: 'Resilience and Growth Mindset Assessment', why: 'Checks how you recover when your pattern is under pressure.' } ] },
  'emotional-intelligence-test-careers': { title: 'Emotional Intelligence Test for Careers', kind: 'skills', aud: 'early', projectId: 'english_speak-1', skill: 'english_speak', next: [
    { href: T('soft-skills-self-assessment'), title: 'Soft Skills Self-Assessment', why: 'Looks at the wider set of people skills around emotional skills.' },
    { href: T('burnout-self-assessment'), title: 'Burnout Self-Assessment', why: 'Checks whether your pace is sustainable.' } ] },
  'entrepreneurial-aptitude-test': { title: 'Entrepreneurial Aptitude Test', kind: 'skills', aud: 'early', projectId: 'sales-1', skill: 'sales', next: [
    { href: T('decision-making-skills-assessment'), title: 'Decision-Making Skills Assessment', why: 'Checks the choices a founder makes under uncertainty.' },
    { href: T('leadership-skills-self-assessment'), title: 'Leadership Skills Self-Assessment', why: 'Looks at leading people, not only building a product.' } ] },
  'vark-learning-style-test': { title: 'VARK Learning Style Test', kind: 'skills', aud: 'school', projectId: 'ai_use-1', skill: 'ai_use', next: [
    { href: T('study-habits-self-assessment'), title: 'Study Habits Self-Assessment', why: 'Turns your learning channels into a weekly routine.' },
    { href: T('time-management-self-assessment'), title: 'Time Management Self-Assessment', why: 'Checks whether your time supports how you learn.' } ] },
  'numerical-reasoning-test': { title: 'Numerical Reasoning Test', kind: 'aptitude', aud: 'college', projectId: 'automate-1', skill: 'automate', next: [
    { href: T('verbal-reasoning-test'), title: 'Verbal Reasoning Test', why: 'Compares your number reasoning with reading and language reasoning.' },
    { href: T('placement-aptitude-test'), title: 'Placement Aptitude Test', why: 'Tests the mix of skills used in placement rounds.' } ] },
  'verbal-reasoning-test': { title: 'Verbal Reasoning Test', kind: 'aptitude', aud: 'college', projectId: 'english_write-1', skill: 'english_write', next: [
    { href: T('numerical-reasoning-test'), title: 'Numerical Reasoning Test', why: 'Compares your language reasoning with number reasoning.' },
    { href: T('placement-aptitude-test'), title: 'Placement Aptitude Test', why: 'Tests the mix of skills used in placement rounds.' } ] },
  'placement-aptitude-test': { title: 'Placement Aptitude Test', kind: 'aptitude', aud: 'early', projectId: 'ai_use-1', skill: 'ai_use', next: [
    { href: T('interview-readiness-self-assessment'), title: 'Interview Readiness Self-Assessment', why: 'Moves from the written round to the interview.' },
    { href: T('job-fit-self-assessment'), title: 'Job Fit Self-Assessment', why: 'Checks whether the roles you are targeting fit you.' } ] },
  'class-10-and-below': { title: 'Class 10 and Below Career Assessment', kind: 'stage', aud: 'school', projectId: 'ai_use-1', skill: 'ai_use', next: [
    { href: T('stream-selector-test-after-10th'), title: 'Stream Selector Test After 10th', why: 'Turns your profile into a stream comparison.' },
    { href: '/blog/stream-selection/career-chart-after-10th/#finder', title: 'Class 10 Route Finder', why: 'Adds marks range, money and exam pressure to the comparison.' } ] },
  'class-11-to-12': { title: 'Class 11 and 12 Career Assessment', kind: 'stage', aud: 'school', projectId: 'proof-1', skill: 'proof', next: [
    { href: T('stream-selector-test-after-12th'), title: 'Stream Selector Test After 12th', why: 'Turns your profile into a degree direction.' },
    { href: '/blog/career-options/career-chart-after-12th/#route-filter', title: 'Class 12 Career Chart Filters', why: 'Filters routes by subjects, exam, cost and length.' } ] },
  'graduates-and-early-professionals': { title: 'Graduates and Early Professionals Career Assessment', kind: 'stage', aud: 'early', projectId: 'proof-1', skill: 'proof', next: [
    { href: T('career-readiness-self-assessment'), title: 'Career Readiness Self-Assessment', why: 'Checks how ready you are to act on the direction.' },
    { href: T('interview-readiness-self-assessment'), title: 'Interview Readiness Self-Assessment', why: 'Prepares you for the next round of selection.' } ] },
  'working-professionals-and-career-changers': { title: 'Working Professionals and Career Changers Assessment', kind: 'stage', aud: 'experienced', projectId: 'automate-1', skill: 'automate', next: [
    { href: T('job-fit-self-assessment'), title: 'Job Fit Self-Assessment', why: 'Checks whether a target role fits you.' },
    { href: T('promotion-readiness-assessment'), title: 'Promotion Readiness Assessment', why: 'Checks readiness if you are growing in your current field.' } ] },
  'career-aptitude-test-after-10th': { title: 'Career Aptitude Test After 10th', kind: 'stage', aud: 'school', projectId: 'ai_use-1', skill: 'ai_use', next: [
    { href: T('stream-selector-test-after-10th'), title: 'Stream Selector Test After 10th', why: 'Turns your strengths into a stream comparison.' },
    { href: T('study-habits-self-assessment'), title: 'Study Habits Self-Assessment', why: 'Checks whether your routine supports the stream you lean towards.' } ] },
  'career-aptitude-test-after-12th': { title: 'Career Aptitude Test After 12th', kind: 'stage', aud: 'school', projectId: 'proof-1', skill: 'proof', next: [
    { href: T('stream-selector-test-after-12th'), title: 'Stream Selector Test After 12th', why: 'Turns your strengths into a degree direction.' },
    { href: '/blog/career-options/career-chart-after-12th/#route-filter', title: 'Class 12 Career Chart Filters', why: 'Filters routes by subjects, exam, cost and length.' } ] },
  'stream-selector-test-after-10th': { title: 'Stream Selector Test After 10th', kind: 'stage', aud: 'school', projectId: 'ai_use-1', skill: 'ai_use', next: [
    { href: '/blog/stream-selection/career-chart-after-10th/#finder', title: 'Class 10 Route Finder', why: 'Adds marks range, money and exam pressure to your stream result.' },
    { href: T('confused-about-career-after-10th-test'), title: 'Confused About Career After 10th Test', why: 'Shows where your uncertainty comes from.' } ] },
  'stream-selector-test-after-12th': { title: 'Stream Selector Test After 12th', kind: 'stage', aud: 'school', projectId: 'proof-1', skill: 'proof', next: [
    { href: '/blog/career-options/career-chart-after-12th/#route-filter', title: 'Class 12 Career Chart Filters', why: 'Filters routes by subjects, exam, cost and length.' },
    { href: T('career-aptitude-test-after-12th'), title: 'Career Aptitude Test After 12th', why: 'Adds your strengths to your stream result.' } ] },
};

export function companionFor(slug: string) {
  const e = COMPANION[slug];
  if (!e) return null;
  const project = PROJECTS.find((p) => p.id === e.projectId);
  if (!project) return null;
  return { slug, ...e, project };
}
