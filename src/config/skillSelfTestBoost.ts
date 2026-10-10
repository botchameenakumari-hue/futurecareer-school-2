// Round 3 additions: how to talk about each area (interview and CV lines, or
// questions to ask a counsellor), plus the week-by-week plan labels.
// General guidance only: no statistics, norms or outcome claims.
import type { SkillTestId } from './skillSelfTests';

export type Talk = { q: string; a: string; line: string };

export const TALK_TITLES: Record<SkillTestId, { strong: string; weak: string; intro: string; mode?: 'interview' | 'ask' }> = {
  'confused-after-10th': {
    strong: 'Use your strongest area when you talk to a counsellor or teacher',
    weak: 'Questions to ask about your lowest area',
    intro: 'Bring these to a school counsellor, teacher or someone working in a field you are considering. Specific questions get specific answers.',
    mode: 'ask',
  },
  communication: {
    strong: 'How to show this strength in an interview or on your CV',
    weak: 'How to answer if you are asked about your weakest area',
    intro: 'Interviewers ask about communication directly and indirectly. Prepare one real example for each area so you are not building the answer on the spot.',
  },
  'soft-skills': {
    strong: 'How to show this strength in an interview or on your CV',
    weak: 'How to answer if you are asked about your weakest area',
    intro: 'Soft skills are judged by examples. Prepare one real example for each area, with what you did and what happened as a result.',
  },
};

export const TALK: Record<SkillTestId, Record<string, Talk>> = {
  'confused-after-10th': {
    self: { q: 'What do my marks, activities and the way I work suggest about which routes might suit me?', a: 'Bring your report card, two activities you enjoy, and one thing people ask you to help with.', line: 'Ask for an honest view of what you might be good at, and what to try next to test it.' },
    options: { q: 'What does each route involve, what does it lead to, and where can I check the entry rules myself?', a: 'Ask for official sources, not only opinions, and ask for the name of one person who works in the field.', line: 'Note down each route\'s entry rule, duration, cost and the jobs it leads to.' },
    pressure: { q: 'How can I talk to my family about a choice they may not agree with?', a: 'Bring facts on both routes, your reasons, and a request for the family\'s reasons too. Ask whether the counsellor can join a family conversation.', line: 'Write down the family\'s concerns and your answers to each before the talk.' },
    process: { q: 'How should I compare these options, and when should I decide?', a: 'Ask for four points to compare and agree a decision date and a review date.', line: 'Score each option on the four points and note what would make you change your mind.' },
    action: { q: 'What are the next three steps I can take this month?', a: 'Ask for three steps with a date against each, and book the next meeting before you leave.', line: 'Keep the list where you can see it and tick off each step.' },
  },
  communication: {
    listen: { q: 'Tell me about a time you had to understand a difficult instruction or an upset person.', a: 'Describe the situation, what you did to make sure you understood (repeating back, asking questions), and what happened.', line: 'Checked understanding by repeating back instructions, which reduced mistakes in [task].' },
    speak: { q: 'Tell me about a time you had to explain something complex to someone.', a: 'Name the audience, how you simplified it (example, order, check-in) and how you knew they understood.', line: 'Explained [topic] to [audience] using [example], and they were able to [result].' },
    write: { q: 'Tell me about a document, email or report you wrote that made a difference.', a: 'Say who it was for, what you put first, and what it led to. Offer a short sample if asked.', line: 'Wrote [document] for [reader], leading with the decision needed, which resulted in [outcome].' },
    feedback: { q: 'Tell me about a time you received criticism or disagreed with someone.', a: 'Describe the feedback, how you listened and checked it, what you changed and what improved. For disagreement, show that you kept it about the work.', line: 'Acted on feedback to change [thing], which improved [result].' },
    present: { q: 'Tell me about a presentation or talk you gave.', a: 'Describe the audience, how you prepared (structure, practice), how you handled nerves or questions, and the result.', line: 'Presented [topic] to [audience] of [size], using [structure], and received [feedback or result].' },
  },
  'soft-skills': {
    lead: { q: 'Tell me about a time you led a group or took the initiative.', a: 'Describe the goal, how you shared out the work, how you kept people informed, and the outcome. Include what you would do differently.', line: 'Led a team of [number] to [goal], dividing tasks by strengths, and delivered [result].' },
    team: { q: 'Tell me about a time you worked with someone difficult or very different from you.', a: 'Describe the difference, what you did to find common ground, and the result. Avoid blaming the other person.', line: 'Worked with [type of person] by [action], and the team achieved [result].' },
    adapt: { q: 'Tell me about a time things changed suddenly or you had to learn something quickly.', a: 'Describe the change, how you learned or adjusted (steps and timeline), and what you delivered.', line: 'Learned [skill or tool] in [time] to meet [need], and delivered [result].' },
    own: { q: 'Tell me about a time you were responsible for something that went wrong or was at risk of being late.', a: 'Describe what you owned, when you noticed the problem, whom you told and when, and what you did to fix it.', line: 'Took ownership of [task] and flagged a risk early, which allowed [result].' },
    solve: { q: 'Tell me about a problem you solved when no one told you how.', a: 'Describe the problem, the options you considered, how you chose, and what you learned.', line: 'Solved [problem] by [approach], resulting in [outcome].' },
  },
};
