import type { SkillTestBundle } from './types';
import type { DomainDepth, TestDepth } from '../skillSelfTestDepth';
import type { StageAdvice } from './types';
import { o, sa, sc } from './types';

const domainSeeds = [
  ['listen', 'Listening and understanding', 'Checking what another person means before responding', 'You give people room to explain, check your understanding and notice what is not being said.', 'You reply before you understand, or assume another person means what you would have meant.', 'Ask one clarifying question before giving your view in the next three conversations.'],
  ['speak', 'Clear and respectful expression', 'Saying what you mean without making the other person guess', 'You make your point clearly while leaving room for a different view.', 'You hint, over-explain or become blunt when the conversation matters.', 'Lead with the point, one reason and one request in your next difficult conversation.'],
  ['empathy', 'Perspective and empathy', 'Taking another person’s context seriously without losing your own boundaries', 'You can recognise another person’s feeling or constraint without automatically agreeing with everything.', 'You dismiss a different reaction or absorb other people’s feelings until you cannot think clearly.', 'Before replying, name what the other person may be worried about and ask if you have it right.'],
  ['conflict', 'Repairing disagreement', 'Handling tension, feedback and misunderstandings', 'You address a problem early, keep it about the situation and help the relationship recover.', 'You avoid the issue, become personal or treat one disagreement as proof the relationship is over.', 'Describe the observable event, its effect and the next request instead of judging the person.'],
  ['boundaries', 'Boundaries and reciprocity', 'Being supportive without saying yes to everything', 'You can offer help, ask for help and say no or not yet without disappearing or over-apologising.', 'You agree resentfully, withdraw without explanation or expect others to read your limits.', 'Give one clear yes, no or later answer with a reason and an alternative where possible.'],
] as const;

const domains = domainSeeds.map(([key, name, short, strong, weak, plan]) => ({
  key, name, short, strong, weak, plan: [plan, 'Write one sentence about what happened and what you would repeat or change.', 'Ask the other person whether your interpretation was accurate.'],
}));

const questions = [
  ['listen', 'I let someone finish explaining before I start preparing my reply.'],
  ['speak', 'I can state what I need in one or two clear sentences.'],
  ['empathy', 'I try to understand what pressure or context may be shaping another person’s reaction.'],
  ['conflict', 'When there is tension, I address the issue before resentment grows.'],
  ['boundaries', 'I can say no to a request without disappearing or becoming hostile.'],
  ['listen', 'I check my understanding when an instruction or message could mean more than one thing.'],
  ['speak', 'I soften my message so much that people cannot tell what I am asking for.', true],
  ['empathy', 'I assume that someone who reacts differently is being difficult.', true],
  ['conflict', 'When I receive feedback, I ask what specific action should change.'],
  ['boundaries', 'I offer help with a limit on what I can realistically do.'],
  ['listen', 'I can notice when my attention has drifted and bring it back to the person speaking.'],
  ['speak', 'I can disagree without making the other person feel that I am judging their character.'],
  ['empathy', 'I can acknowledge someone’s feeling without pretending I agree with every conclusion.'],
  ['conflict', 'After an argument, I can return to the conversation and repair what I contributed.'],
  ['boundaries', 'I ask for help directly instead of hoping someone notices that I am overloaded.'],
  ['listen', 'I remember the important detail another person told me and use it later.'],
  ['speak', 'I send messages whose purpose and next step are clear to the reader.'],
  ['empathy', 'I change my response when I learn that my first interpretation was wrong.'],
  ['conflict', 'I keep a disagreement about the event or task rather than collecting old complaints.'],
  ['boundaries', 'I can protect my time while still showing that the relationship matters.'],
  ['listen', 'I ask an open question when I want to understand rather than asking only questions that prove my view.'],
  ['speak', 'I can give a difficult message respectfully instead of avoiding it for weeks.'],
  ['empathy', 'I notice when a quieter person has not had a fair chance to contribute.'],
  ['conflict', 'I can apologise for my part without turning the apology into an explanation of why the other person is also wrong.'],
  ['boundaries', 'I tell people when I will reply or deliver something instead of leaving them guessing.'],
].map(([d, text, reverse]) => ({ d: String(d), text: String(text), ...(reverse ? { reverse: true } : {}) }));

const depth: TestDepth = {
  stageHeading: 'Where will you use these social skills first?',
  stageNote: 'The same habit can look different with classmates, colleagues or family. Choose the setting that will make your next practice useful.',
  stages: [
    { key: 'student', label: 'School, college or student groups', description: 'Classmates, friends, clubs, projects and family conversations', title: 'Practise with people who know you already', body: 'Student relationships give you frequent low-stakes chances to listen, speak clearly, repair tension and set limits. Use one real group task rather than trying to sound socially perfect.', actions: ['Choose one conversation this week where you will ask a question before giving advice.', 'In your next group task, write down the agreed next step so nobody has to guess.', 'After a disagreement, return to the person within a day and name one part you want to repair.'] },
    { key: 'fresher', label: 'Internship or first job', description: 'New colleagues, managers, interviews and unfamiliar expectations', title: 'Make your intentions visible', body: 'New workplaces reward people who close communication loops. Say what you understood, what you will do and when you will return, then ask when the context is unclear.', actions: ['Repeat one important instruction in your own words before starting.', 'Send one short update before somebody has to chase you.', 'Ask a colleague for one piece of feedback on how you communicate.'] },
    { key: 'professional', label: 'Work, leadership or career change', description: 'Clients, teammates, managers, family decisions and boundaries', title: 'Combine candour with care', body: 'At work, social skill is not constant friendliness. It is making expectations, disagreement and limits clear while preserving enough trust to work together again.', actions: ['Use event, effect and request for one difficult conversation.', 'Name one boundary before you feel resentful.', 'After a meeting, check whether the quietest relevant person has been heard.'] },
  ],
  tips: questions.map((q) => `Start with one small ${q.d} practice this week: notice the moment, choose a clearer response and write what changed.`),
  strongTip: 'Keep using this as a deliberate strength, especially when the conversation becomes harder.',
  domains: Object.fromEntries(domains.map((d) => [d.key, {
    why: `This area affects how other people experience working, studying and making decisions with you. It is a set of behaviours, not a fixed personality label.`,
    roles: [d.name, 'Team, family and community conversations'],
    routine: [`Days 1–3: Notice one real interaction where this area mattered.`, `Days 4–7: Practise the specific move: ${d.plan[0]}`, `Days 8–11: Ask one trusted person what they noticed.`, `Days 12–14: Repeat the move in a different setting and compare.`],
    mistakes: ['Treating confidence, quietness or friendliness as the same thing as social skill', 'Trying to win the conversation instead of making the next step clearer'],
    proof: ['A short reflection describing the situation, your action and what changed', 'A message, agreement or repaired conversation that shows the habit in use'],
    askOthers: `When do you find it easiest or hardest to experience me as a good ${d.name.toLowerCase()} partner?`,
    talkingPoints: [`I am practising ${d.name.toLowerCase()} through a specific behaviour`, 'I can describe what I changed and what I learned'],
    midStep: d.plan[0],
  }])),
  thirtyDay: ['Choose one social-skill area to practise for a week.', 'Use the habit in three real conversations and write one line after each.', 'Ask one person for specific feedback, not a general rating.', 'Retake or review the assessment after 30 days and compare examples, not just scores.'],
};

const stageAdvice: Record<string, Record<string, StageAdvice>> = {};
for (const stage of depth.stages) {
  stageAdvice[stage.key] = Object.fromEntries(domains.map((d) => [d.key, sa(`In ${stage.label.toLowerCase()}, ${d.name.toLowerCase()} is most useful when it changes a real interaction.`, d.plan[0], 'Write down what the other person said or did, then check whether your interpretation was fair.')]));
}

export const bundle: SkillTestBundle = {
  test: {
    id: 'social-skills-self-assessment', slug: 'social-skills-self-assessment', pageUrl: '/services/assessments/social-skills-self-assessment/',
    breadcrumbName: 'Social Skills Self-Assessment', metaTitle: 'Social Skills Self-Assessment | Free Social Skills Test',
    metaDescription: 'Free social skills self-assessment with 25 questions, five practical areas, an instant result and a 30-day practice plan.',
    h1Lead: 'Social Skills', h1Accent: 'Self-Assessment', eyebrow: 'Listen, speak, repair and set boundaries with more intention',
    heroSub: 'Social skill is not being the loudest or most agreeable person in a room. Rate what you actually do across listening, clear expression, empathy, conflict repair and boundaries, then choose one behaviour to practise in a real conversation.',
    stats: [{ value: '25', label: 'questions' }, { value: '5', label: 'social areas' }, { value: 'Free', label: 'PDF report' }], main: 'picker',
    mainChecks: ['Five practical social-skill areas scored from your own ratings', 'About 6 minutes, no sign-up', 'A weakest-area practice plan and evidence prompt'], reportTitle: 'Social Skills Report', reportFile: 'future-career-school-social-skills-report.pdf', reportKicker: 'SOCIAL SKILLS REPORT', resultKicker: 'Your social skills result', scoreLabel: 'Overall social-skill habits',
    bands: { high: 'A relative strength in your answers.', mid: 'Developing, with a useful next practice.', low: 'The first area to practise in real situations.' }, domainsHeading: 'Five social-skill areas this assessment covers', domainsIntro: 'Social skills are behaviours you can notice and practise. The result compares your own areas; it is not a norm, diagnosis or judgement of your worth.', domains,
    questions, readingTitle: 'How to use your social-skills result', readingSections: [{ title: 'Use the lowest area as a practice question', body: ['A lower score is not a permanent weakness. It is a prompt to notice one behaviour in a real conversation and try a different response.', 'If two areas are close, choose the one connected to a conversation you can have this week. Concrete practice teaches more than another label.'] }, { title: 'Social skill is not people-pleasing', body: ['Listening and empathy do not require agreement with everything another person says. Clear boundaries and respectful disagreement are part of a useful relationship.', 'This assessment is a self-rating. Ask someone you trust whether your example matches how they experience you.'] }],
    limits: ['This is a self-rating tool, so other people may experience your behaviour differently.', 'It is not a clinical, psychological, personality or communication-ability diagnosis.', 'Scores are not percentiles, pass marks or hiring predictions.', 'It cannot tell you whether a relationship is safe or whether another person will respond well.', 'Use the report to choose practice and conversation, not to label yourself or someone else.'],
    faqs: [{ q: 'What does this social skills test measure?', a: 'It asks about listening, clear expression, perspective and empathy, repairing disagreement, and boundaries and reciprocity. It shows how you describe your own habits.' }, { q: 'Is this a personality test?', a: 'No. It is a self-rating of selected behaviours. Quiet and outgoing people can both practise social skill, and a score does not define a personality type.' }, { q: 'How can I improve my social skills after the result?', a: 'Choose the lowest area, use its small practice in three real conversations, ask one person for specific feedback, and keep examples of what changed.' }, { q: 'Is the social skills assessment free?', a: 'Yes. It is free, needs no sign-up and includes an instant result and downloadable report.' }, { q: 'Can students and working professionals take it?', a: 'Yes. Choose the setting that matches where you want to practise first: student groups, a first job, or professional and career-change conversations.' }],
    related: [{ href: '/services/assessments/soft-skills-self-assessment/', title: 'Soft Skills Self-Assessment', description: 'A broader view of leadership, teamwork, adaptability, ownership and problem solving.' }, { href: '/services/assessments/leadership-skills-self-assessment/', title: 'Leadership Skills Self-Assessment', description: 'A deeper assessment of leadership habits.' }, { href: '/services/assessments/communication-skills-assessment/', title: 'Communication Skills Assessment', description: 'A closer look at speaking, listening, writing and feedback.' }, { href: '/services/assessments/life-skills-self-assessment/', title: 'Life Skills Self-Assessment', description: 'Practical self-management, organisation and digital judgement.' }],
    breadcrumbDescription: 'Free social skills self-assessment with five practical scores and a practice plan.', webAppDescription: 'A free original 25-question social skills self-assessment covering listening, expression, empathy, conflict repair, and boundaries, with five scores and a practice plan.', indexDescription: 'Five-area self-rating of listening, expression, empathy, conflict repair and boundaries.', indexNote: 'Free, about 6 minutes, PDF report',
  },
  depth,
  extras: [],
  stageAdvice,
  scenarios: [
    sc('listen', 'A teammate explains a problem but their description is unclear. What do you do first?', [o('Ask one question to clarify the situation before suggesting a fix.', 100, 'You make understanding the first step.'), o('Suggest a solution based on the part you recognised.', 55, 'A quick idea may help, but check the missing context first.'), o('Wait silently and hope they explain it better.', 25, 'A gentle clarifying question is more useful than guessing.'), o('Tell them they are not explaining it well.', 10, 'Describe what is unclear and ask for the next detail instead.')]),
    sc('speak', 'You need to change an agreement with someone. Which opening is most useful?', [o('State what changed, what you need now and the date you can meet.', 100, 'A clear message gives the other person something they can respond to.'), o('Give a long background first and mention the request near the end.', 45, 'Context helps, but the request should not be hidden.'), o('Say “it may be difficult” and wait for them to guess.', 20, 'Hints leave both people uncertain.'), o('Send a one-word cancellation.', 10, 'Briefness without the next step creates avoidable work.')]),
    sc('empathy', 'A friend reacts more strongly than you expected to a small mistake. What is your first move?', [o('Ask what the situation meant to them before defending your intention.', 100, 'You make room for context without assuming guilt.'), o('Explain immediately that you did not mean harm.', 45, 'Intention matters, but understanding the effect comes first.'), o('Tell them they are overreacting.', 10, 'That closes the conversation before you know what happened.'), o('Agree to everything even though you do not understand.', 25, 'Care does not require pretending to agree.')]),
    sc('conflict', 'A disagreement is repeating in a group. What is the most repair-oriented next step?', [o('Name the concrete issue, its effect and the decision or request needed.', 100, 'You turn a personal loop into a solvable conversation.'), o('Wait for the tension to disappear on its own.', 25, 'Time can help, but silence often leaves the problem intact.'), o('List every old example that proves your point.', 10, 'A long case usually makes repair harder.'), o('Leave the group without explaining why.', 15, 'A boundary may be needed, but unexplained withdrawal leaves others guessing.')]),
    sc('boundaries', 'Someone asks for help when your deadline is already full. What do you say?', [o('Say what you can or cannot do and offer a realistic alternative if you have one.', 100, 'A clear limit protects both the task and the relationship.'), o('Say yes and hope you can manage later.', 30, 'Agreeing without capacity often creates a larger problem.'), o('Ignore the message until the deadline passes.', 10, 'Silence does not make the limit clear.'), o('Refuse sharply so they do not ask again.', 20, 'A limit can be firm without making the person the enemy.')]),
  ],
  phrases: Object.fromEntries(domains.map((d) => [d.key, ['I want to make sure I understood you.', 'Here is what I can do, and here is what I cannot do today.', 'Can we agree on the next step and when we will check it?']])),
  stagePlan: { student: ['Choose one group conversation where you will ask before advising.', 'Write the agreed task and owner after one group discussion.', 'Practise one clear boundary with a friend or family member.', 'Ask someone what they noticed and record one change.'], fresher: ['Repeat one important instruction in your own words.', 'Send one concise progress update before being chased.', 'Ask a colleague for one specific communication improvement.', 'Use event, effect and request in one difficult conversation.'], professional: ['Choose one relationship where expectations are unclear.', 'State one request and one limit without over-explaining.', 'Repair one small misunderstanding within a day.', 'Review what the other person did, not only how you felt.'] },
  talk: Object.fromEntries(domains.map((d) => [d.key, { q: `Tell me about a time you used ${d.name.toLowerCase()} in a difficult situation.`, a: 'Describe the situation, the specific behaviour you used, what the other person did next and what you would improve.', line: `Used ${d.name.toLowerCase()} by [specific action] in [situation], which led to [observable next step].` }])),
  talkTitles: { strong: 'How to show this social skill with an example', weak: 'How to discuss the area you are practising', intro: 'Social skills are shown through real examples. Prepare one true situation for your strongest and lowest areas.', mode: 'interview' },
};
