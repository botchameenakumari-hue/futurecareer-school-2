import type { SkillTestBundle } from './types';
import { o, sa, sc } from './types';

const BASE = 'https://futurecareerschool.com/services/assessments/';
const stages = ['school', 'college', 'adult'];
const domains = [
  {
    key: 'self',
    name: 'Self-management',
    short: 'Making choices, handling emotions and keeping yourself steady',
    strong: 'You notice what you need, pause before reacting and choose actions that protect your time, health and longer-term goals.',
    weak: 'You react in the moment, lose track of what matters or let a difficult feeling decide what you do next.',
    plan: ['Write down one recurring situation that throws you off and the first sign that it is happening.', 'Use a ten-minute pause before one non-urgent decision each day, then write the choice and the reason.', 'Tell a trusted person one small boundary you are going to practise this week.'],
  },
  {
    key: 'daily',
    name: 'Everyday organisation',
    short: 'Planning money, time, tasks and practical responsibilities',
    strong: 'You keep basic commitments visible, plan around limits and ask for help before a practical problem becomes urgent.',
    weak: 'Dates, money or everyday tasks stay in your head until they become stressful, and you often solve them at the last minute.',
    plan: ['Put every important date and payment due in one list or calendar today.', 'Plan tomorrow around three must-do tasks, one useful small task and a realistic stopping time.', 'Review the week with someone you trust and adjust one routine that repeatedly fails.'],
  },
  {
    key: 'people',
    name: 'People and boundaries',
    short: 'Communicating clearly, asking for help and saying no safely',
    strong: 'You listen, explain what you need, respect differences and set boundaries without turning every disagreement into a fight.',
    weak: 'You avoid important conversations, agree when you mean no or expect people to understand needs you have not said aloud.',
    plan: ['Use one clear sentence to ask for what you need instead of hinting.', 'Practise one respectful no that includes an alternative date or option.', 'After a disagreement, write what you know, what you assumed and one question to ask.'],
  },
  {
    key: 'solve',
    name: 'Problem solving and safety',
    short: 'Breaking problems down, checking information and choosing a safe next step',
    strong: 'You define the problem, check trustworthy information, compare options and know when a problem needs an adult or professional.',
    weak: 'You jump to the first answer, trust forwarded advice without checking it or keep a problem private when help would make it safer.',
    plan: ['For one current problem, write the facts, the unknowns and three possible next steps.', 'Check one important claim against an official or primary source before acting on it.', 'Name one person or service you would contact if the problem became urgent, and save the details.'],
  },
  {
    key: 'digital',
    name: 'Digital and civic judgement',
    short: 'Using information, technology and shared spaces responsibly',
    strong: 'You protect private information, pause before sharing, recognise uncertainty and contribute responsibly to groups and communities.',
    weak: 'You share quickly, accept online claims without checking or forget that digital actions can affect your safety and other people.',
    plan: ['Review one privacy setting and remove one account detail you do not need to share.', 'Before forwarding anything important, check the source, date and whether another reliable source agrees.', 'Do one small shared-space action this week, such as returning a borrowed item, reporting a hazard or helping a group finish a task.'],
  },
];

const questions = [
  ['self', 'When I feel upset, I can pause long enough to choose what to do next.'],
  ['daily', 'I keep important dates, tasks and payments in a place I check.'],
  ['people', 'I can say what I need without expecting another person to guess.'],
  ['solve', 'When a problem is unclear, I separate what I know from what I am assuming.'],
  ['digital', 'Before sharing a claim online, I check where it came from and when it was published.'],
  ['self', 'I make a quick choice when I am stressed and regret it later.', true],
  ['daily', 'I promise more than I can realistically finish.', true],
  ['people', 'I agree to things because I am worried that saying no will upset someone.', true],
  ['solve', 'I ask a trusted person or qualified service for help when a problem is beyond my knowledge.'],
  ['digital', 'I use the same password or easily guessed details for several accounts.', true],
  ['self', 'I know one habit that helps me recover when a day goes badly.'],
  ['daily', 'I can plan a week while leaving room for travel, rest and unexpected work.'],
  ['people', 'I can disagree with an idea while still treating the person respectfully.'],
  ['solve', 'I compare at least two options before making an important practical decision.'],
  ['digital', 'I ask permission before posting another person\'s photo, message or personal information.'],
  ['self', 'I can explain why I chose something instead of saying only that I felt like it.'],
  ['daily', 'I know what I can afford before I agree to a purchase or subscription.'],
  ['people', 'When I make a mistake that affects someone else, I tell them and say what I will do next.'],
  ['solve', 'I know the difference between general information and advice that should come from a qualified professional.'],
  ['digital', 'I can put my phone or notifications away when a task needs my full attention.'],
  ['self', 'I change one part of my plan when evidence shows that the first approach is not working.'],
  ['daily', 'I can break a large responsibility into the first small action and a date.'],
  ['people', 'I listen to understand the other person before I prepare my reply.'],
  ['solve', 'I write down what would make me stop, ask for help or choose a safer option.'],
  ['digital', 'I correct or withdraw something I shared when I learn that it was wrong.'],
].map(([d, text, reverse]) => ({ d: d as string, text: text as string, ...(reverse ? { reverse: true } : {}) }));

const testDomains = domains.map(({ key, name, short, strong, weak, plan }) => ({ key, name, short, strong, weak, plan }));
const stageAdvice = Object.fromEntries(
  stages.map((stage) => [
    stage,
    Object.fromEntries(domains.map(({ key, name }) => [
      key,
      sa(
        `${stage === 'school' ? 'At school' : stage === 'college' ? 'In college or training' : 'In adult life and work'}, your ${name.toLowerCase()} habits affect small decisions every day.`,
        `Choose one real situation this week where you can practise ${name.toLowerCase()} without waiting for a perfect opportunity.`,
        `Write what happened, what you chose and what you would repeat next time.`,
      ),
    ])),
  ]),
);

const depthDomains = Object.fromEntries(
  domains.map(({ key, name, short, plan }) => [
    key,
    {
      why: `${name} is easier to improve when it is treated as a set of visible habits, not as a personality label. ${short} gives you a starting point for practice, not a judgement about your future.`,
      roles: ['School, college, work and family decisions', 'Any route where you need to manage yourself and other people responsibly'],
      routine: [`Days 1 to 3: Notice one real example of ${name.toLowerCase()} and write what happened.`, `Days 4 to 7: Practise the first step: ${plan[0]}`, `Days 8 to 11: Ask one trusted person what they notice about this area.`, `Days 12 to 14: Repeat the habit in a different situation and record the difference.`],
      mistakes: ['Treating one difficult day as proof of a fixed weakness', 'Trying to improve five areas at once instead of practising one visible habit'],
      proof: ['A dated example of the habit in action', 'A short note showing what changed after practice'],
      askOthers: `When do you see me use ${name.toLowerCase()} well, and what could I do more reliably?`,
      talkingPoints: [`You can describe a real example of ${name.toLowerCase()}`, 'You can name the next habit you are practising'],
      midStep: plan[0],
    },
  ]),
);

const phrases = Object.fromEntries(domains.map(({ key, name }) => [key, [
  `"The situation was [situation], so I [action] and the result was [result]."`,
  `"One habit I am practising is ${name.toLowerCase()}: [specific habit]."`,
  `"I would check [source/person] before deciding, because [reason]."`,
]]));

const talk = Object.fromEntries(domains.map(({ key, name }) => [key, {
  q: `Tell me about a time you used ${name.toLowerCase()} to handle a real situation.`,
  a: 'Describe the situation, the choice you made, what information or people you used, and what you learned.',
  line: `Used ${name.toLowerCase()} to handle [situation] by [action], leading to [result or learning].`,
}]));

const stagePlan = {
  school: ['This week: choose one home or school responsibility and write what finished looks like.', 'Next two weeks: use one calendar, checklist or boundary in a real situation.', 'Before the month ends: ask a trusted adult what habit they see you using well and which one needs practice.', 'After a month: retake the assessment and keep one example from each area.'],
  college: ['This week: put deadlines, money commitments and one personal goal in one visible list.', 'Next two weeks: practise one clear request, one checked source and one focused phone-free block.', 'Before the month ends: use a small project or shared responsibility as evidence of your strongest area.', 'After a month: retake the assessment and choose one habit to carry into study or work.'],
  adult: ['This week: review one practical routine, one boundary and one digital safety setting.', 'Next two weeks: flag one risk early, check one important claim and finish one responsibility by its agreed date.', 'Before the month ends: ask a colleague, friend or family member for one specific observation.', 'After a month: retake the assessment and turn the lowest area into one repeatable weekly habit.'],
};

export const bundle: SkillTestBundle = {
  test: {
    id: 'life-skills-self-assessment',
    slug: 'life-skills-self-assessment',
    pageUrl: `${BASE}life-skills-self-assessment/`,
    breadcrumbName: 'Life Skills Self-Assessment',
    metaTitle: 'Life Skills Self-Assessment | Free Life Skills Test',
    metaDescription: 'Free life skills self-assessment with 25 questions and five practical scores for self-management, organisation, communication, problem solving and digital judgement.',
    h1Lead: 'Life Skills',
    h1Accent: 'Self-Assessment',
    eyebrow: 'Five practical habits for handling everyday decisions',
    heroSub: 'Life skills are not a vague list of things a person should know. They are visible habits: managing yourself, handling everyday responsibilities, communicating clearly, checking information and acting safely online. Rate what you actually do and get a practical first routine for the area that needs attention.',
    stats: [{ value: '25', label: 'questions' }, { value: '5', label: 'life-skill areas' }, { value: 'Free', label: 'PDF report' }],
    main: 'picker',
    mainChecks: ['Five practical areas scored from your own answers', 'About 6 minutes, no sign-up', 'A 14-day routine for your lowest area'],
    reportTitle: 'Life Skills Report',
    reportFile: 'future-career-school-life-skills-report.pdf',
    reportKicker: 'LIFE SKILLS REPORT',
    resultKicker: 'Your life skills result',
    scoreLabel: 'Overall life skills',
    bands: { high: 'A relative strength.', mid: 'Developing, with room to grow.', low: 'This area needs the most practice.' },
    domainsHeading: 'Five practical areas this self-assessment covers',
    domainsIntro: 'The scores show how your own habits compare with one another. They do not compare you with other people and do not predict success, admission, income or wellbeing.',
    domains: testDomains,
    questions,
    readingTitle: 'How to read your life skills result',
    readingSections: [
      { title: 'A lower score is a practice target, not a label', body: ['Life skills grow through repeated choices in ordinary situations. Start with the lowest area because a small change there may make other responsibilities easier, then retake the assessment after a few weeks.'] },
      { title: 'Use real examples', body: ['Your answers describe how you see your habits. Check them against a dated example, a simple log or feedback from someone who knows you. A score becomes useful when it leads to a behaviour you can observe.'] },
      { title: 'Know when a person should help', body: ['This tool cannot handle an emergency, a serious health concern, financial advice or a safety risk. Contact a trusted adult, qualified professional or appropriate local service when the situation needs more than general guidance.'] },
    ],
    limits: ['This is an original self-rating tool for reflection, not a validated psychological, clinical, financial or safety assessment.', 'Scores come only from your answers and are not compared with other people. There is no pass mark.', 'It does not predict academic results, employability, income, relationships or future success.', 'Some questions concern sensitive situations. Skip the tool and ask a trusted person or qualified service for help if you are unsafe or in immediate danger.'],
    faqs: [
      { q: 'What are life skills?', a: 'They are practical habits used in everyday decisions, such as managing yourself, organising responsibilities, communicating, solving problems and using digital information safely. This assessment turns those broad ideas into five areas you can practise.' },
      { q: 'Is this a life skills test for students?', a: 'Yes. School students, college students and adults can choose the stage that best matches their situation. The result stays a self-reflection tool rather than a judgement about maturity or ability.' },
      { q: 'What is a good life skills score?', a: 'There is no pass mark and no comparison group. Use the lowest area as the first practice target and keep a real example of what you did differently.' },
      { q: 'Is this a psychological or clinical assessment?', a: 'No. It is an original self-rating worksheet for everyday habits. It cannot diagnose a condition or replace qualified advice.' },
      { q: 'How can I improve my life skills?', a: 'Choose one lowest area, practise its 14-day routine, ask one trusted person for feedback and retake the assessment later. Small repeated actions are more useful than collecting another label.' },
      { q: 'Is the life skills assessment free?', a: 'Yes. It is free, needs no sign-up and provides an instant result with a downloadable PDF report.' },
    ],
    related: [
      { href: '/services/assessments/soft-skills-self-assessment/', title: 'Soft Skills Self-Assessment', description: 'Leadership, teamwork and social skills, adaptability, ownership and problem solving.' },
      { href: '/services/assessments/decision-making-skills-assessment/', title: 'Decision-Making Skills Assessment', description: 'A deeper assessment of how you define, compare and commit to decisions.' },
      { href: '/services/assessments/time-management-self-assessment/', title: 'Time Management Self-Assessment', description: 'Priorities, planning, starting, focus and boundaries across study and work.' },
      { href: '/services/assessments/skill-portfolio-tracker/', title: 'Skill Portfolio Tracker', description: 'Turn practice into dated evidence and small proof projects.' },
    ],
    breadcrumbDescription: 'Free life skills self-assessment with five practical habit scores and a 14-day routine.',
    webAppDescription: 'A free original 25-question life skills self-assessment covering self-management, everyday organisation, people and boundaries, problem solving and safety, and digital and civic judgement.',
    indexDescription: 'Free life skills test: 25 questions, five practical scores and a 14-day routine for the area to practise first.',
    indexNote: 'Free, about 6 minutes, PDF report',
  },
  depth: {
    stageHeading: 'Which situation fits you best?',
    stageNote: 'The same life skill looks different at school, in college and in adult work or family life, so the report adjusts its examples.',
    stages: [
      { key: 'school', label: 'School student', description: 'Class 8 to 12, school and home responsibilities', title: 'Practise life skills in ordinary school and home decisions', body: 'School projects, deadlines, friendships, screen time and family responsibilities are useful places to practise these habits safely.', actions: ['Choose one school or home responsibility and write the date and finished result.', 'Ask a trusted adult before acting on an important online or practical claim.', 'Practise one clear request or respectful boundary this week.'] },
      { key: 'college', label: 'College or training', description: 'Degree, diploma, coaching, internship or shared accommodation', title: 'Use real deadlines, money and shared work as practice', body: 'College and training bring more independent decisions. Use calendars, source checks, group work and small budgets as visible practice.', actions: ['Put deadlines and payments in one list.', 'Use one focused phone-free block for a task that matters.', 'Ask a senior or mentor for feedback on one habit.'] },
      { key: 'adult', label: 'Adult life and work', description: 'Working, changing careers, managing a household or supporting family', title: 'Make practical habits visible before pressure builds', body: 'Work, money, digital accounts, health and family responsibilities can compete for attention. Small routines reduce last-minute decisions.', actions: ['Review one routine, boundary and digital safety setting.', 'Flag one risk early with a clear alternative.', 'Ask someone who relies on you what would make your communication easier.'] },
    ],
    tips: questions.map(() => 'Use the example in your result, try it in one real situation and write down what happened.'),
    strongTip: 'This is already a relative strength. Keep one dated example so you can see the habit in practice.',
    domains: depthDomains,
    thirtyDay: ['Week 1: practise the first half of the lowest-area routine.', 'Week 2: finish the routine and ask one trusted person for feedback.', 'Week 3: practise the second-lowest area in a different setting.', 'Week 4: retake the assessment and keep the strongest real example from each area.'],
  },
  extras: [],
  stageAdvice,
  scenarios: [
    sc('solve', 'A message says you must pay immediately to avoid losing an account. What do you do?', [o('Pay quickly so the problem does not get worse', 0, 'Urgency is a reason to pause, not proof that the message is genuine. Open the official app or website yourself and check through a known contact route.'), o('Forward it to a friend and ask whether it looks real', 33, 'A second view may help, but a friend cannot verify the account. Check the official source and do not use the message link.'), o('Open the official site separately, check the account and report the message if it is suspicious', 100, 'You separated the claim from the source and checked safely. Keep using a known app or address for important account actions.'), o('Ignore it forever without checking whether the account has a real notice', 50, 'Avoiding the link is safe, but an important notice could still exist. Check through the official route when you have time.',)]),
    sc('people', 'A friend asks you to agree to a plan that makes you uncomfortable.', [o('Agree now and complain later', 0, 'Agreeing without meaning it usually makes the boundary harder later. Say what you are comfortable with before deciding.'), o('Say no without any explanation and stop replying', 50, 'A clear no can be enough, especially for safety. If the relationship is safe, one short reason or alternative can avoid confusion.'), o('Say what you are not comfortable with and offer a safe alternative if you want to', 100, 'You protected your boundary and kept the choice clear. A person who respects you can respond to a clear boundary.'), o('Ask several people to decide for you', 33, 'Other views can help, but your safety and comfort still matter. Ask for advice, then make your own choice.',)]),
    sc('daily', 'Three important tasks and an unexpected responsibility arrive on the same day.', [o('Start with whichever task feels easiest', 33, 'Starting can help, but the easiest task may not be the most time-sensitive. List dates and effort first.'), o('Try to do everything at once', 0, 'Switching hides the real priorities and increases the chance that all four tasks suffer. Make the trade-offs visible.'), o('List the deadlines, choose the first two actions and tell someone early if one date is at risk', 100, 'You made the work visible and gave others a chance to adjust. Keep a short review point so the plan stays true.'), o('Wait until someone reminds you what matters most', 17, 'Another person may help prioritise, but waiting can remove your choices. Bring them a list and ask one focused question.',)]),
    sc('self', 'You receive criticism and feel angry immediately.', [o('Reply at once to prove the criticism is unfair', 17, 'A fast defence may turn useful information into a fight. Pause and ask what specific example they mean.'), o('Say nothing and avoid the person', 33, 'Space can help, but avoidance leaves the useful part unclear. Return when you can ask one calm question.'), o('Pause, ask for one concrete example and decide what to use after you have cooled down', 100, 'You protected the conversation and gave yourself time to judge the feedback. Keep the example, even if you disagree with the conclusion.'), o('Accept all of it as true because the other person sounds confident', 50, 'Listening is useful, but confidence is not proof. Separate the example from the person\'s interpretation.',)]),
    sc('digital', 'You discover that a post you shared contains an incorrect claim.', [o('Delete it silently and hope nobody noticed', 33, 'Removing it helps, but people who acted on it may still need a correction. Say clearly what was wrong when practical.'), o('Leave it because deleting it would be embarrassing', 0, 'Embarrassment is not a reason to leave false information active. Correct it and check the source before sharing again.'), o('Correct or withdraw it, name the reliable source and avoid overstating what is still uncertain', 100, 'You repaired the information and showed how you checked it. That is responsible digital judgement.'), o('Argue that everyone shares things that turn out to be wrong', 17, 'Mistakes are common, but that does not make leaving one uncorrected responsible. Focus on repairing this one.',)]),
  ],
  phrases,
  stagePlan,
  talk,
  talkTitles: { strong: 'How to show this habit in an interview or review', weak: 'How to talk about an area you are practising', intro: 'Life skills are best shown with ordinary examples: what happened, what you chose, what changed and what you learned.', mode: 'interview' },
};
