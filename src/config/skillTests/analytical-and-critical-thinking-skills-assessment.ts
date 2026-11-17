// Analytical and Critical Thinking Skills Assessment: a bundle for the shared self-rating test page.
// General guidance only: no statistics, norms, pay figures or outcome claims.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

const BASE = '/services/assessments/analytical-and-critical-thinking-skills-assessment/';

// Each core statement carries its own tip (shown when the answer is low) and
// take-it-further step (shown when the answer is in the middle), so the three
// lists below can never drift out of order.
type Q = { d: string; text: string; reverse?: boolean; tip: string; up: string };

const Q_LIST: Q[] = [
  // Round 1
  {
    d: 'frame',
    text: 'Before I start on a problem, I can say in one sentence what question I am trying to answer.',
    tip: 'Before your next task, write “I am trying to find out…” and finish it in under twenty words. If you cannot, the question is not clear yet, and that is the first thing to fix.',
    up: 'Read your sentence to one person and ask them to say it back in their own words. Where their version differs from yours, rewrite the sentence before you begin.',
  },
  {
    d: 'evidence',
    text: 'When I read a claim, I look for what it is based on, not only who said it.',
    tip: 'Pick one claim you read today and write what it rests on: a study, a count, one person’s story or only an opinion. If you cannot find any basis, mark it as unchecked.',
    up: 'For three claims this week, write the basis next to each and rate it strong, weak or missing. Ask a friend whether they would rate any of them differently.',
  },
  {
    d: 'structure',
    text: 'When a problem feels messy, I split it into smaller parts before I try to solve it.',
    tip: 'Take one messy problem and write three smaller questions that together would answer it. Work on the smallest one first.',
    up: 'After splitting the problem, mark the part that would change the answer the most and start there. At the end, check whether your split left anything out.',
  },
  {
    d: 'bias',
    text: 'I look for at least one piece of evidence that could show my first view is wrong.',
    tip: 'Next time you form a quick opinion, write one fact that would prove you wrong and spend ten minutes looking for it. Finding nothing is a useful result too.',
    up: 'Before you search, write what you expect to find if you are right and what you expect if you are wrong. Then compare both lists with what you actually found.',
  },
  {
    d: 'data',
    text: 'When I see a percentage, I ask what number it is a percentage of.',
    tip: 'The next time you see a percentage, find the actual count behind it. Ten percent of ten people and ten percent of ten thousand people are very different things.',
    up: 'For one percentage in the news, write the base number, the period it covers and who was counted. Then say whether the figure still looks as strong.',
  },
  // Round 2
  {
    d: 'frame',
    text: 'I ask what a useful answer would look like, and who will use it, before I begin.',
    tip: 'Before you start, write who will use your work and what they will do with it. A one-line answer for a busy person needs different work from a detailed note for a team.',
    up: 'Ask the person who will use the work one question: what would make this useful to you? Write the answer at the top of your page and check your work against it before you hand it in.',
  },
  {
    d: 'evidence',
    text: 'If many people repeat a claim, I take that as a sign that it is probably true.',
    reverse: true,
    tip: 'Many copies of a claim can all come from one source. Pick a claim you have seen several times this week, find who said it first and what they based it on, and count how many separate sources there really are.',
    up: 'Choose one popular claim from this week and trace it back to its first source. Write whether it survived, and share what you found with the person who passed it on to you.',
  },
  {
    d: 'structure',
    text: 'I list possible reasons for a problem and test the most likely ones first.',
    tip: 'When something goes wrong, write three possible reasons before you act. Check the cheapest one first, then the next.',
    up: 'Next to each reason, write what you would see if it were true and how long it would take to check. Rank them by how likely and how easy they are, and keep the list to compare with what you find.',
  },
  {
    d: 'bias',
    text: 'I can name an assumption I am making in a current decision or argument.',
    tip: 'Finish this sentence about something you are working on now: “This only works if…”. Each ending is an assumption you can check.',
    up: 'List three assumptions and mark the one that would hurt most if it were wrong. Find a quick way to check that one this week.',
  },
  {
    d: 'data',
    text: 'I do a rough check of a number, such as whether its size or unit is sensible, before I trust it.',
    tip: 'Before you use a number, ask whether it is the right size. If a fee, count or time looks ten times too big or too small, check the unit and the decimal point.',
    up: 'Make a rough guess yourself before you calculate or look something up, then compare the two. When they are far apart, find out which one is wrong and why.',
  },
  // Round 3
  {
    d: 'frame',
    text: 'I notice when a question is too broad and narrow it to something I can actually check.',
    tip: 'Take a broad question such as “Is online learning good?” and add a group, a place and a time, for example “Did online classes help my class do better in last term’s tests?”.',
    up: 'Write three narrower versions of your broad question and choose the one you could answer with information you can really get this month. Keep the other two for later.',
  },
  {
    d: 'evidence',
    text: 'When two sources disagree, I look at how each one counted or measured before I pick one.',
    tip: 'When two sources give different numbers, write down how each one counted, the date and who collected it. Often the gap comes from what was counted, not from one source being false.',
    up: 'Find one more source for the same figure and note whether its way of counting matches either of the first two. Write one sentence saying which figure suits your question and why.',
  },
  {
    d: 'structure',
    text: 'I draw a simple table, list or diagram to see how the parts of a problem connect.',
    tip: 'Next time you are stuck, draw the parts on paper with arrows between the ones that affect each other. Seeing the connections often shows what you were missing.',
    up: 'Show your diagram to someone and ask which link they doubt the most. Test that link first, then redraw the diagram with what you learn.',
  },
  {
    d: 'bias',
    text: 'I find reasons to dismiss evidence that goes against what I already believe.',
    reverse: true,
    tip: 'When a fact goes against your view, do not answer it straight away. Write it down, wait a day, then state it in your own words as fairly as you can.',
    up: 'Keep a small list of facts that went against your view and what you did about each one. Look for the ones you dismissed quickly and give those a second look.',
  },
  {
    d: 'data',
    text: 'I look at the axis, the sample size and the time period before I trust a chart.',
    tip: 'For any chart, check three things before you read its message: where the axis starts, how many cases it covers and which dates it shows. A cut axis or a short period can make a small change look big.',
    up: 'Redraw one chart you saw with its axis starting at zero, or describe what it would look like. Note whether the story changes.',
  },
  // Round 4
  {
    d: 'frame',
    text: 'I start collecting information or doing calculations before I know what I am looking for.',
    reverse: true,
    tip: 'Stop before you open a file or a search page. Write the question and the two or three facts that would answer it, then collect only those.',
    up: 'Set a ten-minute limit on collecting, then write what you have learned and what is still missing. Use that note to decide what to look for next.',
  },
  {
    d: 'evidence',
    text: 'I can tell the difference between an opinion, one person’s story and evidence from many cases.',
    tip: 'Sort three things you read this week into three piles: opinion, one person’s story and a count across many cases. Notice which pile you trust most, and why.',
    up: 'Take an argument you find convincing and check whether it rests on a story or an opinion with no wider evidence. Look for one count or study that supports or weakens it.',
  },
  {
    d: 'structure',
    text: 'I jump to a solution as soon as I see a familiar pattern, without checking that it fits.',
    reverse: true,
    tip: 'When a problem looks familiar, write one way it differs from the earlier one before you reuse the old answer. Test the answer on a small case first.',
    up: 'Keep a note of the times a familiar answer did not fit and what the difference was. Read it before your next similar problem.',
  },
  {
    d: 'bias',
    text: 'When someone disagrees with me, I try to state their view fairly before I answer it.',
    tip: 'Before you reply to a different view, say it back the way the other person would, and ask “Is that right?”. Reply only after they say yes.',
    up: 'Add the strongest reason the other person has for their view, not the weakest. Then say what you agree with in it before you give your answer.',
  },
  {
    d: 'data',
    text: 'I accept an average as the full picture without asking how the numbers are spread.',
    reverse: true,
    tip: 'When you see an average, ask for the highest, the lowest and the middle value. A few very large values can pull an average far above what most people have.',
    up: 'Write five numbers of your own where an average hides the spread, such as marks, expenses or travel times. Say aloud what the average hides in each.',
  },
  // Round 5
  {
    d: 'frame',
    text: 'When instructions leave the purpose unclear, I ask about it before I begin.',
    tip: 'Keep one polite question ready: “What will this be used for?”. Asking early takes a minute and can save hours of redoing.',
    up: 'After you ask, repeat the purpose back in one sentence and check that it is right. Note the questions that saved you work and ask them first next time.',
  },
  {
    d: 'evidence',
    text: 'I ask whether two things that happened together are linked by cause, or whether another reason could explain both.',
    tip: 'When two things go together, write at least two other explanations, such as a third factor or the cause running the other way. For example, students who attend coaching may also study more hours at home.',
    up: 'For one claim of cause you read this week, write the other explanations and what evidence would separate them. Say which test you would need, such as comparing similar groups.',
  },
  {
    d: 'structure',
    text: 'I can explain my reasoning in order: the point, the evidence and what follows from it.',
    tip: 'Before you explain a conclusion, write it as three lines: the point, the best evidence for it and what you suggest doing. Speak from those lines.',
    up: 'Practise the three lines aloud to someone and ask them to say the main point back. If they miss it, move your point to the first line.',
  },
  {
    d: 'bias',
    text: 'I change my conclusion when better evidence appears, without feeling that I have lost.',
    tip: 'Practise saying “That changes what I think” once this week when a fact calls for it. Changing a conclusion after new facts is a sign of careful thinking.',
    up: 'Keep a short note each time you change your view and what caused it. Look for what usually persuades you, and whether you ever change too easily.',
  },
  {
    d: 'data',
    text: 'Before I compare two numbers, I check that they were measured the same way, such as the same period, group or unit.',
    tip: 'Before comparing, write down the period, group and unit for both numbers. A month of thirty days against a month of twenty-eight, or rupees against lakhs, can mislead.',
    up: 'Rewrite the two figures on the same base, such as per person or per month, and see whether the comparison still holds.',
  },
];

export const bundle: SkillTestBundle = {
  test: {
    id: 'analytical-and-critical-thinking-skills-assessment',
    slug: 'analytical-and-critical-thinking-skills-assessment',
    pageUrl: BASE,
    breadcrumbName: 'Analytical and Critical Thinking Skills Assessment',
    metaTitle: 'Analytical Skills Assessment | Free Critical Thinking Test',
    metaDescription:
      'Free analytical skills assessment with 42 questions on framing, evidence, structure, bias checks and data sense. Instant scores and a plan for your stage.',
    h1Lead: 'Analytical and Critical Thinking',
    h1Accent: 'Skills Assessment',
    eyebrow: 'Framing, evidence, structure, bias checks and data sense in one report',
    heroSub:
      'This free analytical skills assessment rates the thinking habits you actually use: how you frame a question, weigh evidence, break a problem apart, check your own bias and read numbers. It is a thinking skills assessment of habits, not a timed puzzle, so it shows which one habit to practise first. It works for students, freshers and working professionals.',
    stats: [
      { value: '42', label: 'questions' },
      { value: '5', label: 'thinking areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five thinking areas scored from your own ratings and real situations',
      'About 8 minutes, no sign-up',
      'Advice for your stage and a four-step plan',
    ],
    reportTitle: 'Analytical Thinking Report',
    reportFile: 'future-career-school-analytical-thinking-report.pdf',
    reportKicker: 'ANALYTICAL THINKING REPORT',
    resultKicker: 'Your analytical thinking result',
    scoreLabel: 'Overall analytical and critical thinking habits',
    bands: {
      high: 'A relative strength.',
      mid: 'Developing, with room to grow.',
      low: 'This habit needs the most practice.',
    },
    domainsHeading: 'Five thinking habits this assessment covers',
    domainsIntro:
      'Thinking goes wrong in different places for different people. Some answer the wrong question well, some believe too quickly, some cannot organise a messy problem, some defend their first view and some are fooled by numbers. Your lowest area is the best place to start.',
    domains: [
      {
        key: 'frame',
        name: 'Framing the question',
        short: 'Knowing what you are trying to answer before you start',
        strong: 'You pin down the question, its limits and what a useful answer looks like before you collect anything.',
        weak: 'You begin searching, calculating or arguing before the question is clear, so effort goes to the wrong thing.',
        plan: [
          'Before each task this week, write “I am trying to find out…” in one sentence and read it to someone else.',
          'Ask who will use your work and what they will do with it, and write the answer at the top of your page.',
          'When a question is broad, rewrite it with a group, a place and a time so that you could actually check it.',
        ],
      },
      {
        key: 'evidence',
        name: 'Weighing evidence and sources',
        short: 'Telling a claim from proof, and a strong source from a weak one',
        strong: 'You ask what a claim rests on, compare sources and keep opinion, stories and counted evidence apart.',
        weak: 'You accept claims that sound confident, share things you have not traced and mix up what happened together with what caused it.',
        plan: [
          'For three claims this week, write what each one is based on and rate the basis strong, weak or missing.',
          'Trace one forwarded message back to its first source before you share or believe it.',
          'When two sources disagree, write how each one counted and when, before you pick one.',
        ],
      },
      {
        key: 'structure',
        name: 'Breaking problems into parts',
        short: 'Turning a messy problem into pieces you can check one by one',
        strong: 'You split problems into parts, test likely reasons in order and explain your thinking in a clear sequence.',
        weak: 'You try to solve the whole tangle at once, jump to a familiar answer or explain your reasoning in the order you thought of it.',
        plan: [
          'Take one messy problem and write three smaller questions that together would answer it.',
          'List three possible reasons for a problem and check the cheapest one first.',
          'Explain one conclusion in three lines: the point, the best evidence and what you suggest doing.',
        ],
      },
      {
        key: 'bias',
        name: 'Checking your own thinking',
        short: 'Spotting assumptions, bias and wishful reading in your own reasoning',
        strong: 'You name your assumptions, look for evidence against your view and change your mind when the facts change.',
        weak: 'You defend your first view, dismiss facts that disagree with it and treat a change of mind as losing.',
        plan: [
          'Finish the sentence “This only works if…” for something you are working on and check the weakest ending.',
          'Next time you hold a strong opinion, spend ten minutes looking for one fact that would prove it wrong.',
          'State a different view back to the person who holds it and ask whether you have it right before you reply.',
        ],
      },
      {
        key: 'data',
        name: 'Data sense',
        short: 'Reading numbers, charts and percentages without being fooled',
        strong: 'You ask what a number is a share of, check units and charts, and compare figures only when they were measured the same way.',
        weak: 'You trust percentages, averages and charts at face value, so a well-presented number can lead you to the wrong conclusion.',
        plan: [
          'For one percentage you see this week, find the actual count, the period and who was counted.',
          'Make a rough guess of a number before you calculate it, then compare the two.',
          'Before comparing two figures, write the period, group and unit of each and put them on the same base.',
        ],
      },
    ],
    questions: Q_LIST.map(({ d, text, reverse }) => (reverse ? { d, text, reverse } : { d, text })),
    readingTitle: 'How to read your analytical thinking result',
    readingSections: [
      {
        title: 'Analytical and critical thinking are habits, not a talent',
        body: [
          'Analytical thinking is taking a problem apart: framing it, splitting it into parts and reading the numbers in it. Critical thinking is questioning what you are told and what you believe: weighing the evidence and checking your own bias.',
          'Each statement describes something you do, such as asking what a percentage is a share of or writing down an assumption. That makes these habits trainable. A low area means a habit you have not set up yet, not a limit on how well you can think.',
        ],
      },
      {
        title: 'This is not a reasoning test',
        body: [
          'A numerical or verbal reasoning test asks you to solve set puzzles against a clock. This self-rating asks what you do when a question is vague, a claim is unchecked or a chart looks convincing. A person can score well on timed puzzles and still skip these habits, and the other way round.',
          'If you are preparing for a placement or recruitment test, use the reasoning tests for timed practice and use this page to see which thinking habit is holding your answers back.',
        ],
      },
      {
        title: 'Where these habits show up in study and work',
        body: [
          'Job descriptions often ask for analytical or problem-solving skills, and interviewers usually ask for an example instead of a claim. One true story, such as how you checked a figure or changed your mind, is more convincing than the phrase on a CV.',
          'Some people also turn these habits into paid work, for example checking figures, summarising research or preparing simple reports for small businesses. Demand, pay and the time it takes vary a great deal, and nothing on this page promises income or a job.',
        ],
      },
      {
        title: 'Check the result against real examples',
        body: [
          'Thinking habits are easy to rate too kindly or too harshly, because they happen inside your head. For your lowest and highest areas, write one real situation from the last month and what you did in it.',
          'If your example does not match your score, trust the example. Retake the assessment after four weeks of practice and compare examples as well as scores.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool. It shows how you describe your own thinking habits, not how well you perform in a timed or supervised test.',
      'It is not a certificate, an official assessment, an aptitude test or an intelligence test, and no employer, board or exam body uses it.',
      'Scores come only from your answers and are not compared with other people, so there is no pass mark and no ideal number.',
      'It does not predict marks, exam results, selection in a placement test, job performance or income. It points to which thinking habit to practise next.',
      'Self-ratings can be too kind or too harsh, so check your result against real examples and one honest opinion from someone who has seen your work.',
    ],
    faqs: [
      {
        q: 'What is an analytical skills assessment, and what does this one measure?',
        a: 'It is a way to see how you handle problems that need careful thinking. This analytical skills assessment covers five habits: framing the question, weighing evidence, breaking a problem into parts, checking your own thinking and reading numbers sensibly. It rates what you do, not how fast you can solve puzzles.',
      },
      {
        q: 'Is this an analytical skills assessment test like the ones used in hiring?',
        a: 'No. Hiring tests are usually timed and use set puzzles, graphs or passages, and each employer sets its own. This analytical skills assessment test is untimed and asks about habits and real situations, so you can find out what to practise before you sit a timed test.',
      },
      {
        q: 'Is this a thinking skills assessment I can put on my CV?',
        a: 'It is a free thinking skills assessment for your own use, and it does not give a certificate or a grade that anyone recognises. What you can put on a CV is a real example, such as how you checked a figure before sharing it. Use the report to choose which example to build.',
      },
      {
        q: 'Is this one of the 21st century skills assessment tools?',
        a: 'It covers one part of the skills usually grouped as 21st century skills, which is critical thinking and analysis. Those lists usually also include communication, collaboration and creativity, and schools or employers may use their own tools for them. This is a free self-rating tool and not an official framework, and the soft skills assessment on this site covers some of the other areas.',
      },
      {
        q: 'What is the difference between analytical thinking and critical thinking?',
        a: 'Analytical thinking is breaking a problem into parts and working through them, including reading data. Critical thinking is questioning claims and your own assumptions before you accept them. This test scores both, because real problems need both.',
      },
      {
        q: 'How is the score worked out?',
        a: 'You rate each statement from 1 (not true) to 5 (very true). A statement that describes a weak habit, such as dismissing evidence that goes against your view, is scored the other way round. Each situation option is worth 0 to 100 points, an area score is the average of everything asked about that area, and the overall score is the average of your five areas.',
      },
      {
        q: 'What is a good score on this test?',
        a: 'There is no pass mark, so a good score here means that your five areas are fairly even and your answers in the situations agree with how you rate yourself. A lower area is where one small habit will help most. Retake the test after about four weeks of practice to see whether it moved.',
      },
      {
        q: 'How can I improve my analytical and critical thinking skills?',
        a: 'Work on your lowest area first, with one small habit at a time. If framing is the weak spot, write one sentence that says what you are trying to find out before every task, and if data sense is weak, find the real count behind every percentage you see this week. Your report gives four steps for your stage, and retaking the test after a few weeks shows whether the area moved.',
      },
      {
        q: 'How is this different from the decision-making, numerical reasoning and verbal reasoning tests?',
        a: 'The decision-making assessment is about choosing between options and acting on the choice. The numerical and verbal reasoning tests are about solving timed questions. This assessment is about how you think before and around those choices: what you ask, what you trust and how you check yourself.',
      },
      {
        q: 'Is the test free, and do I need to sign up?',
        a: 'Yes, it is free with no sign-up, and the 42 questions take about 8 minutes. You see your five scores straight away and can keep a copy as a PDF.',
      },
    ],
    related: [
      {
        href: '/services/assessments/decision-making-skills-assessment/',
        title: 'Decision-Making Skills Assessment',
        description: 'Defining a decision, checking facts, comparing options, handling risk and acting on the choice.',
      },
      {
        href: '/services/assessments/numerical-reasoning-test/',
        title: 'Numerical Reasoning Test',
        description: 'Timed practice with numbers and data for placement and recruitment tests.',
      },
      {
        href: '/services/assessments/verbal-reasoning-test/',
        title: 'Verbal Reasoning Test',
        description: 'Timed practice with passages and arguments for placement and recruitment tests.',
      },
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'Leadership, teamwork, adaptability, ownership and problem solving in one report.',
      },
      {
        href: '/blog/skills/how-to-develop-analytical-skills-india/',
        title: 'How to Develop Analytical Skills',
        description: 'Practical ways to build analytical habits for study and work in India.',
      },
      {
        href: '/blog/skills/how-to-improve-problem-solving-and-critical-thinking-skills-india/',
        title: 'How to Improve Problem-Solving and Critical Thinking Skills',
        description: 'Exercises and everyday habits for thinking more carefully.',
      },
      {
        href: '/blog/skills/21st-century-skills-examples-for-students-india/',
        title: '21st Century Skills Examples for Students',
        description: 'What the commonly listed 21st century skills look like in practice.',
      },
    ],
    breadcrumbDescription: 'Free analytical and critical thinking skills assessment with five area scores and a four-step plan.',
    webAppDescription:
      'A free original 42-question analytical and critical thinking skills assessment covering framing the question, weighing evidence, breaking problems into parts, checking your own thinking and data sense, with five scores, an overall score, stage-based advice and a downloadable report.',
    indexDescription:
      'Free analytical skills assessment: 42 questions, five scores for framing, evidence, structure, bias checks and data sense.',
    indexNote: 'Free, about 8 minutes, PDF report',
  },

  depth: {
    stageHeading: 'Which of these describes you best?',
    stageNote:
      'You use these habits on different material at each stage, such as exam questions, work reports or business decisions, so your report adjusts its advice to match.',
    stages: [
      {
        key: 'student',
        label: 'School or college student',
        description: 'Class 8 to 12, a degree, diploma or professional course, with exams, projects and case questions',
        title: 'Practise on the questions and sources you already meet',
        body: 'Students meet vague questions, many sources and charts every week, so there is plenty of material to practise on. The aim is to make a small check a habit before you write, not to read more.',
        actions: [
          'Before each assignment or long answer, write in one line what the question is asking and underline the action words.',
          'Keep a source list for every project, and find a second source for the two facts you rely on most.',
          'After each test, sort your lost marks into three groups: did not understand the question, wrong method, and careless slip.',
        ],
      },
      {
        key: 'fresher',
        label: 'Internship, first job or job seeker',
        description: 'Starting out, handling reports, spreadsheets and instructions, or preparing for interviews and tests',
        title: 'Confirm the question and check the numbers before you send anything',
        body: 'In a first job, most of your work is judged on whether it answers what was really asked and whether the numbers hold up. Early habits of confirming the task and checking figures protect your name when you have little else to show.',
        actions: [
          'Confirm in one line what the finished result should look like before you start a task.',
          'Check every figure you did not calculate yourself against its source before you use it.',
          'When something goes wrong, list at least three possible causes before you change anything.',
        ],
      },
      {
        key: 'professional',
        label: 'Experienced professional or career changer',
        description: 'Reviewing other people’s analysis, recommendations and results, or moving into a role that asks for analysis',
        title: 'Question the recommendation and your own experience',
        body: 'With experience, people bring you conclusions to approve, and your own past cases start to feel like proof. The useful habit is asking what a recommendation rests on and where your experience may not fit the new case.',
        actions: [
          'Ask what decision an analysis is meant to support before you discuss its findings.',
          'Ask what evidence backs a recommendation and what would show that it is not working.',
          'Review one project you are attached to as if you had just taken it over.',
        ],
      },
    ],
    tips: Q_LIST.map((q) => q.tip),
    tipsUp: Q_LIST.map((q) => q.up),
    strongTip: 'This habit already works for you. Keep using it, and note what makes it easy so that you can copy it in your weaker areas.',
    domains: {
      frame: {
        why: 'Much wasted effort comes from answering the wrong question well. A clear question tells you what to collect, what to ignore and when you are done. It also lets other people check whether you are solving what they need.',
        roles: [
          'Any reporting or research task where the request arrives in a vague form',
          'Business analysis, operations and project coordination roles (Scalable with a business layer: a job is the entry, and consulting is the layer that can grow, though entry-level posts are crowded)',
          'Students handling projects, case questions and open assignments',
        ],
        routine: [
          'Days 1 to 3: Before each task, write one sentence beginning “I am trying to find out…” and read it to someone.',
          'Days 4 to 7: Add who will use the answer and what they will do with it, and write both at the top of your page.',
          'Days 8 to 11: Take one broad question and rewrite it three times, each narrower, until you could check it this month.',
          'Days 12 to 14: Ask one question about purpose on an unclear task, and note how it changed your work.',
        ],
        mistakes: [
          'Collecting everything first and hoping the question will appear',
          'Taking a broad topic as if it were a question',
          'Not asking what the answer will be used for, then redoing the work',
        ],
        proof: [
          'Two task notes where your one-line question changed what you did',
          'A broad question rewritten into a narrow one, with the reason for each change',
          'A message in which you confirmed the purpose of a task before starting it',
        ],
        askOthers: 'When I bring you a task or a problem, do I make the question clear first, or do I start before we both know what it is?',
        talkingPoints: [
          'You state the question before you start work on it',
          'You ask who will use the result and what for',
          'You can show a case where a clearer question saved effort',
        ],
        midStep: 'Keep a note at the top of every task page with two lines: the question, and who will use the answer.',
      },
      evidence: {
        why: 'Most of what you read, hear and forward is a claim, and many claims have no real basis. Asking what a statement rests on protects you from believing the wrong thing, and it makes your own arguments stronger. It also keeps you from mixing up things that happen together with things that cause each other.',
        roles: [
          'Audit and compliance roles where facts must hold up (Scalable with a business layer: a job is the entry, and an advisory practice is the layer that can grow)',
          'Content and editing work where facts must hold up (Scalable with a business layer: a job or freelance work is the entry, and a publication or service you run is the layer that can grow)',
          'Research posts in universities and institutes (Not so scalable: they depend on a few seats, funding and a long ladder, so keep a second skill running beside them)',
          'Purchasing, operations and teaching roles that compare vendors, courses or options (Scalable with a business layer: a job is the entry, and consulting or a training business is the layer that can grow)',
          'Freelance fact-checking, research summaries and claim reviews for clients (Scalable with a business layer: you trade hours at first, so plan who pays, how they find and trust you, and how the work repeats)',
        ],
        routine: [
          'Days 1 to 3: For one claim a day, write what it is based on and rate the basis strong, weak or missing.',
          'Days 4 to 7: Trace one forwarded message or news item to its first source and note whether it held up.',
          'Days 8 to 11: When two sources disagree, write how each one counted, when, and who collected the figures.',
          'Days 12 to 14: For one claim of cause, write two other explanations and what would separate them.',
        ],
        mistakes: [
          'Trusting a claim because the speaker sounds sure or well known',
          'Treating one person’s story as proof for everyone',
          'Reading a link between two things as proof that one caused the other',
        ],
        proof: [
          'A short log of claims you checked and what you found',
          'An example where you traced a figure to its source and corrected a mistake',
          'A note on two sources that disagreed and how you resolved it',
        ],
        askOthers: 'When I share a fact or argue a point, do I show where it comes from, and do I ever accept things too quickly?',
        talkingPoints: [
          'You check where a claim comes from before you use it',
          'You can separate opinion, a single story and counted evidence',
          'You give an example of a time a check changed your answer',
        ],
        midStep: 'Add a source line to every fact you use in your notes, and mark each one official, expert, news or opinion.',
      },
      structure: {
        why: 'A messy problem feels heavy because it is one lump. Splitting it into parts gives you a first small step and shows which part matters most. It also makes your reasoning easy for other people to follow and to correct.',
        roles: [
          'Analysis, operations, engineering and support roles where faults must be traced (Scalable with a business layer: a job is the entry, and a service or consulting practice is the layer that can grow)',
          'Consulting-style, planning and project roles that break large goals into parts (Scalable with a business layer, though many people compete for the same posts)',
          'Students facing long case questions, practicals and projects',
        ],
        routine: [
          'Days 1 to 3: Split one messy problem into three smaller questions and answer the smallest first.',
          'Days 4 to 7: When something goes wrong, list three possible causes and check the cheapest first.',
          'Days 8 to 11: Draw a simple diagram of a problem, with arrows between the parts that affect each other.',
          'Days 12 to 14: Explain one conclusion aloud in three lines: the point, the best evidence and what you suggest.',
        ],
        mistakes: [
          'Starting on the solution before listing what could be wrong',
          'Changing several things at once, so you cannot tell what worked',
          'Explaining in the order you thought of things instead of the order that helps the listener',
        ],
        proof: [
          'A problem you split into parts, with the parts written down',
          'A list of possible causes with a note on which one turned out to be true',
          'A short explanation you gave in point, evidence and next step order',
        ],
        askOthers: 'When I explain a problem or my answer to you, is it clear what the main point is and how I got there?',
        talkingPoints: [
          'You split a problem before you try to solve it',
          'You test the likely causes in order, cheapest first',
          'You explain the point first and the support after it',
        ],
        midStep: 'Use the same three-line format for every explanation this week: the point, the best evidence, and what to do next.',
      },
      bias: {
        why: 'Everyone reads facts in the way that suits what they already think. Looking for evidence against your own view and naming your assumptions is the quickest way to catch an error before someone else does. People who can say “I was wrong, and here is the corrected view” are easier to trust.',
        roles: [
          'Review, audit, quality and editing roles (Scalable with a business layer: a job is the entry, and an advisory or editing service is the layer that can grow)',
          'Leadership and mentoring roles where you must hear views that differ from yours (Scalable with a business layer: a team lead role can grow into coaching or consulting)',
          'Anyone preparing for interviews and group discussions where a good counter-point may arrive',
        ],
        routine: [
          'Days 1 to 3: Finish “This only works if…” for one thing you are working on and note the weakest ending.',
          'Days 4 to 7: Look for one fact against a strong opinion of yours and spend ten minutes searching for it.',
          'Days 8 to 11: State one disagreeing view back to its holder and ask whether you have it right before replying.',
          'Days 12 to 14: Write down one time you changed your view this fortnight, and what caused it.',
        ],
        mistakes: [
          'Searching only for facts that support your first view',
          'Calling every opposing fact an exception',
          'Treating a change of mind as losing instead of correcting an error',
        ],
        proof: [
          'A list of assumptions you named and the ones you checked',
          'An example where evidence against your view changed your decision',
          'A situation where you restated another person’s view accurately before answering',
        ],
        askOthers: 'When you disagree with me, do I listen to your reason and change my view when it is good, or do I defend my first answer?',
        talkingPoints: [
          'You name your assumptions out loud',
          'You look for what would prove you wrong',
          'You can describe a time you changed your conclusion and why',
        ],
        midStep: 'Before any decision this week, write what you expect to find if you are right, and what you expect if you are wrong.',
      },
      data: {
        why: 'Numbers look exact, so a poorly chosen percentage, average or chart can mislead people who do not ask how it was made. Small checks on the base, the unit and the period catch many errors. These checks are basic arithmetic and common sense, and they do not need advanced statistics.',
        roles: [
          'Data analysis and reporting roles (Scalable when you add proof of work and clear communication, though entry-level posts are crowded)',
          'Finance, accounts, sales and operations roles where figures are reviewed every month (Scalable with a business layer: a job is the entry, and consulting or a practice is the layer that can grow)',
          'Freelance spreadsheet cleaning, figure checking and simple reports for local businesses (Scalable with a business layer: you trade hours at first, so plan who pays, how they find and trust you, and how the work repeats)',
        ],
        routine: [
          'Days 1 to 3: For each percentage you see, find the real count it comes from and the period it covers.',
          'Days 4 to 7: Make a rough guess of a number before you calculate it and compare the two.',
          'Days 8 to 11: For each chart you meet, check where the axis starts, the number of cases and the dates.',
          'Days 12 to 14: Put two figures on the same base, such as per person or per month, before you compare them.',
        ],
        mistakes: [
          'Reading a percentage without knowing how many people it covers',
          'Taking an average as the whole picture when a few values are very large or very small',
          'Comparing numbers measured over different periods, groups or units',
        ],
        proof: [
          'A short note on a figure you checked and the error you found in it',
          'A comparison you rewrote on the same base, with the before and after',
          'A spreadsheet checklist you use for units, duplicates, blanks and totals',
        ],
        askOthers: 'When I use a number in my work, do I show where it comes from and what it does not tell us?',
        talkingPoints: [
          'You ask what a number is a share of',
          'You check units, periods and groups before you compare',
          'You say what a figure cannot tell us, not only what it shows',
        ],
        midStep: 'Keep a four-line checklist for any figure you use: the base, the period, the unit and a rough size check.',
      },
    },
    thirtyDay: [
      'Choose your lowest area and use its first practice step on one real task this week.',
      'Use the habit in three real situations and write one line after each about what it changed.',
      'Ask one person who has seen your work whether your example matches how you think.',
      'Retake the assessment after 30 days and compare your examples as well as your scores.',
    ],
  },

  extras: [
    // Student
    { ...x(['student'], 'frame', 'When an exam or assignment question has several parts, I mark what each part asks for before I write.', 'Underline the action words, such as explain, compare, list or evaluate, and note the marks for each part. Plan your answer to match them.'), up: 'After a test, check your answers against the action words and marks. Count the parts where you wrote more or less than the question asked for.' },
    { ...x(['student'], 'evidence', 'For projects, I use more than the first search result and note where each fact came from.', 'Make a source list while you work: the link or book, the date and the fact you took from it. For your two most important facts, find a second source.'), up: 'Rate each source as official, expert, news or personal opinion. Try to back each main point with at least one official or expert source.' },
    { ...x(['student'], 'structure', 'When I get a long case question or project brief, I break it into steps on paper before I write.', 'Write three or four steps in the margin, such as what is given, what is asked and which method fits. Then follow them in order.'), up: 'After writing, check each step against your answer and mark any step you skipped. Compare your steps with a model answer or a classmate’s plan.' },
    { ...x(['student'], 'bias', 'When I lose marks in a test, I put it down to bad luck without checking why I made the mistake.', 'List the three questions where you lost the most marks and write the real reason for each: did not know, misread, wrong method or rushed. Fix the most common reason first.', true), up: 'Keep a mistake log across two tests. Check whether the same reason repeats and plan one practice habit aimed at it.' },
    { ...x(['student'], 'data', 'When a project uses survey or chart data, I check how many people were asked and who they were.', 'Before using a survey result, find out how many people were asked, who they were and how they were chosen. A survey of fifty friends cannot speak for a whole city.'), up: 'Write one sentence about what the survey can and cannot show, and put it next to the result in your project.' },
    // Fresher
    { ...x(['fresher'], 'frame', 'When my manager gives me a task, I confirm what the finished result should look like before I start.', 'Reply with one line: “So the finished result is X, by Y time. Is that right?”. It takes a minute and avoids rework.'), up: 'Show a rough sample of the result early and ask whether it is what they meant. Save the answers so that you learn what each person expects.' },
    { ...x(['fresher'], 'evidence', 'I check a number in a report against its source before I use it in my own work.', 'Open the source file or system and compare the figure you plan to use. Note the date and where it came from beside it.'), up: 'Keep a short note of the figures you checked and any that differed from the report. Tell the owner of the report about an error politely, with the details.' },
    { ...x(['fresher'], 'structure', 'When something at work goes wrong, I list the possible causes before I change anything.', 'Write three possible causes and check the easiest one first. Changing several things at once makes it impossible to know what worked.'), up: 'Record each cause you checked and the result. The next time the same problem appears, start from your list.' },
    { ...x(['fresher'], 'bias', 'In interviews or group discussions, I keep to my first answer even when someone makes a good point against it.', 'When someone makes a good point, say “That is a fair point” and explain how it changes your answer, or why it does not. Both show that you are listening.', true), up: 'In a mock interview, ask a friend to challenge your answer. Practise one reply that gives credit to the point and still states your view.' },
    { ...x(['fresher'], 'data', 'I check my spreadsheets for mistakes, such as wrong units, empty cells or repeated rows, before I send them.', 'Before sending a file, sort each column to spot odd values and check the totals by a second method, such as adding a small sample by hand.'), up: 'Make a short checklist for your sheets: units, duplicates, blanks and totals. Run it every time and add any new kind of mistake you find.' },
    // Professional
    { ...x(['professional'], 'frame', 'In meetings, I ask what decision an analysis or report is meant to support.', 'Ask at the start: “What will we decide with this?”. Reports and charts built without a decision in mind tend to answer the wrong question.'), up: 'After the meeting, write the decision and the evidence that matters most in two lines and send them. Check whether others agree with your summary.' },
    { ...x(['professional'], 'evidence', 'When a senior person, vendor or consultant makes a recommendation, I ask what evidence supports it.', 'Ask politely: “What is this based on, and what would show it is not working?”. A good recommendation can answer both.'), up: 'Ask for one example where the approach did not work and what was different there. Compare it with your own situation before you decide.' },
    { ...x(['professional'], 'structure', 'When a team problem is complex, I help split it into parts with a clear owner for each.', 'Draw the problem as three or four parts on a page or whiteboard, and name who will check each one and by when.'), up: 'At the next meeting, review which parts were answered, which stayed unclear and whether the split missed anything. Adjust owners and dates.' },
    { ...x(['professional'], 'bias', 'I decide how to handle a new situation mostly by how a similar one went last time.', 'Before you rely on the last case, write two ways the new situation differs and one way it is the same. Decide only after that.', true), up: 'Keep a record of decisions where past experience did not fit and what differed. Read it before the next similar choice.' },
    { ...x(['professional'], 'data', 'When someone shows a before-and-after result, I ask what else changed in that period.', 'Ask: “What else was different between the two periods, such as season, staff or prices?”. List at least two before you give the change credit.'), up: 'Ask whether a comparison group exists that did not get the change. If not, say plainly that the result is a possible effect and not proof.' },
  ],

  stageAdvice: {
    student: {
      frame: sa('As a student, many questions arrive in exam wording or as a broad project title, and the marks go to the part you actually answered.', 'Underline the action word and the number of marks in each question, and plan your answer to match them.', 'Turn each project title into a narrow question with a group, a place and a time before you start collecting.'),
      evidence: sa('As a student, the first search result and a classmate’s notes feel like enough, and forwarded messages spread fast in class groups.', 'Keep a source list for every project and find a second source for the two facts you rely on most.', 'Before you forward a message in a class group, trace it to its first source and say what you found.'),
      structure: sa('As a student, long case questions and projects feel heavy until they are split into steps.', 'Write three or four steps in the margin before you start a long answer, and follow them in order.', 'After writing, tick each step against your answer and note the one you skipped most often.'),
      bias: sa('As a student, it is easy to blame a lost mark on bad luck, or to study only what you already know well.', 'After each test, write the real reason for your three biggest lost marks and fix the most common reason first.', 'Ask a classmate to challenge one of your answers and state their view back to them before you reply.'),
      data: sa('As a student, charts and surveys in textbooks and projects are often taken at face value, and coaching adverts quote percentages with no base.', 'For each survey or percentage you use, note how many people it covers and who they were.', 'Redraw one chart you are using with its axis starting at zero and note whether the message changes.'),
    },
    fresher: {
      frame: sa('In a first job, instructions are often short and the real need is not stated, so work gets redone.', 'Reply to each new task with one line saying what the finished result will look like, and ask if it is right.', 'Ask what the result will be used for, and keep the answer at the top of your task note.'),
      evidence: sa('In a first job, figures in old reports and emails look official, so it is easy to reuse them unchecked.', 'Compare any figure you did not calculate yourself with its source before you use it.', 'When two files give different numbers, note how each was counted and ask the owner which fits the question.'),
      structure: sa('In a first job, problems arrive without a method, and the pressure is to fix them fast.', 'When something goes wrong, list three possible causes and check the cheapest first.', 'Send updates in three lines: the point, the evidence and what you will do next.'),
      bias: sa('In a first job and in interviews, you may defend your first answer to look confident.', 'When someone gives a good point, say how it changes your answer or why it does not, before you continue.', 'Name one assumption in each piece of work you submit and say how you checked it.'),
      data: sa('In a first job, spreadsheets and dashboards pass through many hands, and small mistakes in units or rows spread quickly.', 'Run a short checklist before you send any file: units, duplicates, blanks and totals.', 'Make a rough guess of a total before you calculate it and look into any big gap.'),
    },
    professional: {
      frame: sa('For experienced professionals, people bring analysis that was built without a clear decision in mind.', 'Ask what decision the analysis is meant to support before you discuss its findings.', 'Write the decision and the key evidence in two lines after the meeting and send them round.'),
      evidence: sa('For experienced professionals, vendors, consultants and senior people bring recommendations with confidence and little evidence.', 'Ask what a recommendation is based on and what would show it is not working.', 'Ask for one case where the approach failed and compare that case with your own.'),
      structure: sa('For experienced professionals, team problems are tangled with several owners and many opinions.', 'Split the problem into three or four parts and give each part one owner and one date.', 'Rank the possible causes by how likely and how cheap to check, and test in that order.'),
      bias: sa('For experienced professionals, past successes start to feel like proof, and projects you have backed are hard to question.', 'Review one project you are attached to as if you had just taken it over, and write what you would do from today.', 'Before a decision, write what you would expect to see if you are wrong and look for it.'),
      data: sa('For experienced professionals, before-and-after results and averages are presented to support decisions.', 'Ask what else changed between the two periods before you credit a change.', 'Ask for the spread behind any average, such as the highest, lowest and middle values.'),
    },
  },

  scenarios: [
    sc('frame', 'A senior tells you, “Find out why sales dropped.” You have a sheet with six months of figures. What do you do first?', [
      o('Chart total sales by month to see where the drop sits, and then narrow the question once you can see it', 67, 'A first chart is a fair start, but a total can hide where the drop sits. Narrow the question with the senior first, then chart the part that matters.'),
      o('List every possible reason, from price changes to weather and competitors, and write a short note on each one so that nothing is missed', 33, 'Many reasons without a clear question spread your effort thin. Agree what exactly dropped and when, then test the likely reasons in order.'),
      o('Send the whole sheet back and ask them what they can see in it', 17, 'This hands the thinking back and shows the question is still unclear. Ask two focused questions about the product, place and period instead.'),
      o('Ask which product, place and period they mean, and what they will do with the answer', 100, 'You turn a loose request into a question you can answer, and you learn how the answer will be used. Write the agreed question at the top of your sheet.'),
    ]),
    sc('frame', 'You are asked to give a short talk on “Social media and young people”. How do you begin?', [
      o('Decide one specific question, such as how reels affect study time in your class, and then look for material', 100, 'A narrow, checkable question tells you what to collect and what to leave out. Write it in one line and test whether you could answer it in your time.'),
      o('Collect as many articles as you can for a while and see which theme appears most often, then choose your question', 50, 'Reading widely can help, but without a question the pile grows and the talk becomes a list. Set a limit and write the question after the first hour.'),
      o('Start on the slides first, so that the talk looks good and you have a structure to fill', 33, 'Good slides cannot fix a talk with no clear question. Decide what you are trying to show before you open the design.'),
      o('Copy the outline of a popular talk on the same topic', 17, 'A copied outline answers the other person’s question, not yours. Use it only to see how a question can be narrowed.'),
    ]),
    sc('evidence', 'A post shared by many classmates says a new study proves that a certain food improves exam marks. What do you do?', [
      o('Search whether other news sites carry the same story, and trust it if several of them do', 50, 'Several sites repeating a story can all be copying one source. Find the original study instead of counting repeats.'),
      o('Find the study itself and check who was studied, how many people and who paid for it', 100, 'Tracing the claim to its source shows whether it is strong enough to believe. Write down what you found before you tell anyone.'),
      o('Ignore it, since forwarded messages are almost always false', 33, 'Doubt is healthy, but rejecting everything without a check is also a shortcut. Spend five minutes on the source and then decide.'),
      o('Share it with friends because it does no harm', 17, 'Sharing unchecked claims spreads them, and a false one can change what people do. Check the source first and share only what holds up.'),
    ]),
    sc('evidence', 'Two articles give different figures for the number of people employed in the same sector. What do you do?', [
      o('Trust the one from the better-known website, because a large organisation is more likely to have checked its numbers carefully', 50, 'A well-known name helps, but it does not tell you how the figure was counted. Check the method on both before you rely on either.'),
      o('Take the average of the two so that neither source is favoured', 33, 'An average of two differently counted figures has no clear meaning. Understand the difference first.'),
      o('Find how each figure was counted, the date and the source, then choose the one that fits your question', 100, 'Different definitions and dates often explain a gap between two honest figures. Note the difference in one line in your work.'),
      o('Use the one that supports your point', 17, 'Choosing the figure that suits you is a way of deciding first and checking never. Decide what would count as evidence before you look.'),
    ]),
    sc('structure', 'A family shop’s monthly profit has fallen for three months, and everyone gives a different reason. How do you sort it out?', [
      o('Go with the explanation of the most experienced person in the family, since they have run the shop for years and know the customers best', 50, 'Experience is useful, but it is still one view. Treat it as one reason to test, not as the answer.'),
      o('Wait another month to see whether it fixes itself', 33, 'Waiting can give more data, but without a list of reasons you will not know what to look for. Write the reasons now and decide what to track.'),
      o('Split profit into sales and costs, find what changed in each, and test the most likely reason first', 100, 'Breaking the problem into parts shows where the change sits before you pick a cause. Keep a short note of each reason and what you found.'),
      o('Change several things at once so that something is bound to work', 17, 'If profit improves, you will not know what worked, and if it falls you will not know what hurt. Change one thing at a time where you can.'),
    ]),
    sc('structure', 'You must explain a conclusion to a group in two minutes. How do you organise it?', [
      o('Tell the story in the order you worked it out, so that the group can see how careful the work was before you give the conclusion', 50, 'Your path feels natural to you but makes people wait for the point. Move the conclusion to the start and keep the story for questions.'),
      o('Show all the data you collected so that they can decide for themselves', 33, 'A pile of data hides your point and takes the group’s time. Choose the evidence that best supports your conclusion and keep the rest ready.'),
      o('State the conclusion first, then the two or three strongest reasons, then what you suggest doing', 100, 'Starting with the point lets people follow the reasons and respond to them. Practise it aloud once before you speak.'),
      o('Begin with long background and hope the conclusion becomes obvious', 17, 'Background that comes before the point loses people. Give one line of context and then the conclusion.'),
    ]),
    sc('bias', 'You are sure your approach is right. A teammate shows a case where it failed. What do you do?', [
      o('Drop your approach at once and switch to your teammate’s, since one real failure is stronger evidence than your own belief', 50, 'One failure is a reason to look, not always a reason to quit. Check how much the case resembles yours before you change course.'),
      o('Explain why that case was a special exception and carry on', 33, 'Every opposing case can be called an exception, which leaves your view unchecked. Look at what the case shares with yours before you decide.'),
      o('Ask for the details, check whether that case is like yours, and say what it changes', 100, 'You treat the case as evidence without either ignoring it or giving up your view at once. Write down what would make the cases similar or different.'),
      o('Point out the failures of your teammate’s own approach', 17, 'This turns a chance to check your idea into an argument about who is right. Deal with the case first and compare approaches afterwards.'),
    ]),
    sc('bias', 'Your first answer to a puzzle, test question or forecast matches what you hoped for. What do you do?', [
      o('Ask a friend to check it and tell them which answer you were hoping for, so that they know what to look at', 50, 'A second check is good, but telling them your hoped-for answer nudges them towards it. Ask for a check without saying what you expect.'),
      o('Collect a few more facts that support it so that you can defend it', 33, 'Searching only for support will usually find it, and that proves little. Include a search for facts against it.'),
      o('Accept it, since a result that matches your hope is probably right', 17, 'Hope makes an answer feel right, and feeling right is not evidence. Check it the way you would check an answer you disliked.'),
      o('Spend a few minutes looking for what would prove it wrong, and test that first', 100, 'A result you like needs a check as much as one you dislike. Write down what would prove you wrong before you look.'),
    ]),
    sc('data', 'A college brochure says, “92% of students placed.” What do you ask first?', [
      o('How many students that covers, whether it counts everyone or only those who sat for placements, and what “placed” means', 100, 'A percentage means little without the base and the definition. Ask for the numbers, the year and the meaning of “placed” in writing before you decide.'),
      o('Which batch and year the figure comes from, and whether it is the same for every course', 67, 'The batch and year are good questions. Add who was counted and what “placed” means, because a small or selected group can give a high percentage.'),
      o('Whether the college is well known and has good reviews online, since a good name suggests honest figures', 33, 'A good name is not the same as a clear count. Ask for the numbers behind the percentage, whatever the reviews say.'),
      o('Nothing, since a high percentage means good results', 17, 'A high percentage can come from a small, chosen group or a loose definition. Ask what it is a percentage of.'),
    ]),
    sc('data', 'A notice says the average marks of a class is 70, but many students feel that they did badly. What do you do?', [
      o('Compare only your own mark with the average to see whether you are above or below it', 50, 'That is a start, but one number can still hide how many students scored far below or above it. Look at the middle value and the range too.'),
      o('Assume the notice is wrong, because so many students say they did badly that the average cannot be 70', 33, 'Feelings are a reason to check, not proof of an error. Ask for the spread and then compare.'),
      o('Ask for the range and the middle value, since a few very high marks can lift an average', 100, 'The spread behind an average often tells you more than the average itself. Compare your own mark with the middle value and the range.'),
      o('Accept 70 as a fair summary of the class', 17, 'An average can be the same for very different sets of marks. Ask how the marks are spread before you decide what it means.'),
    ]),
    { ...sc('evidence', 'For a project you find a blog post that answers your question neatly but names no source. What do you do?', [
      o('Use it, and state in your project that the information comes from a blog with no named source, so that the teacher can judge it', 67, 'Naming the blog is honest, but the claim may still be wrong. Look for one other source before you rely on it.'),
      o('Use it as a lead, find the original or a second reliable source, and cite that', 100, 'A neat answer with no source is a starting point, not evidence. Citing the original keeps your project solid if a teacher asks.'),
      o('Drop the topic because the blog has no source', 33, 'A missing source is a reason to look, not to give up the topic. Search for the facts the blog mentions.'),
      o('Copy the points because it answers the question so well', 17, 'Copying unchecked points puts the blog’s mistakes in your work, and it may count as copying. Use it only as a lead.'),
    ]), stages: ['student'] },
    { ...sc('frame', 'An exam question says, “Discuss the effects of urbanisation.” How do you begin your answer?', [
      o('Begin with a full definition and the history of urbanisation, then list the effects as they come to mind, so that the examiner sees how much you know', 50, 'A short definition can help, but a long one uses time and marks. Define in one line and move to the effects.'),
      o('Write everything you know about urbanisation as quickly as you can', 33, 'Writing all you know may miss what the question asks. Pick the points that answer the question and leave out the rest.'),
      o('Skip it and return only if there is time left', 17, 'Skipping hard questions leaves marks behind. Spend a minute breaking it into parts and write what you can.'),
      o('Note what is asked, such as effects and for whom, plan three points with examples, and then write', 100, 'A minute of planning matches your answer to the question and the marks. Keep the plan in the margin and tick each point as you write it.'),
    ]), stages: ['student'] },
    { ...sc('data', 'Your sheet shows a monthly total that does not match the total in the report you were given. What do you do?', [
      o('Trace both totals back to their sources, find the difference, and tell your manager what you found and which you used', 100, 'Finding the cause of a mismatch is part of the job, and telling your manager builds trust. Keep a note of the difference for the next report.'),
      o('Use the report total because it came from your manager and has probably been reviewed by someone senior', 50, 'The report may be right, but you do not know until you check. Look at why the two differ before you choose.'),
      o('Use your own total because you calculated it yourself', 33, 'Your own total can contain a mistake too. Compare the two methods before you decide which is right.'),
      o('Round both numbers until they look the same', 17, 'Rounding hides a real gap and can pass a mistake on to others. Find the cause and then report it.'),
    ]), stages: ['fresher'] },
    { ...sc('bias', 'In a group discussion for a job, you realise halfway that one of your points was wrong. What do you do?', [
      o('Quietly stop repeating the point and build on what others say, so that the discussion keeps its flow', 50, 'This avoids a bigger scene, but it leaves the wrong point standing. A brief correction is stronger.'),
      o('Keep to your point and support it more firmly, since changing your view in front of observers may look weak', 33, 'Defending an error may look confident for a moment but costs credibility later. Correct it and continue.'),
      o('Say so briefly, give the corrected point and carry on', 100, 'Correcting yourself calmly shows careful thinking, and observers often notice it. Keep the correction short and move on.'),
      o('Say that the group misunderstood what you meant', 17, 'Blaming others for your point rarely convinces anyone. State the corrected point clearly instead.'),
    ]), stages: ['fresher'] },
    { ...sc('evidence', 'A vendor presents a case study showing large gains at another company and asks you to sign. What do you do?', [
      o('Ask how the results were measured, what else changed in that time, and whether you can speak to that company', 100, 'A case study is evidence only when you know how it was measured and what else changed. Write the vendor’s answers down and compare them with your situation.'),
      o('Ask for a free trial first, before you sign anything', 67, 'A trial is a sensible step, but decide in advance what result would count as success. Otherwise any outcome can be explained as a win.'),
      o('Compare the price and contract terms with two other vendors, and choose the one that costs the least for what is promised', 33, 'Price matters, but it does not tell you whether the product works. Ask for evidence from each vendor.'),
      o('Sign, because other companies have', 17, 'Other companies’ choices are not proof that it suits you. Ask what their results rested on.'),
    ]), stages: ['professional'] },
    { ...sc('bias', 'A project you backed is going badly, but you have already put months into it. What do you do?', [
      o('Give it another month, because stopping now would waste everything already put into it', 50, 'A fixed extra period can be sensible, but not because of what has been spent. Set a clear test for what progress in that month would look like.'),
      o('Ask the people most involved in the project what they think, since they understand the work best', 33, 'The people closest to the project are often the least willing to question it. Include one person who doubted it.'),
      o('Stop talking about the project and hope that it recovers', 17, 'Silence leaves problems to grow. Review the facts and share your findings.'),
      o('Review the evidence as if you had just taken the project over, and decide what you would do from today', 100, 'Past effort is spent whatever you decide, so the useful question is what to do next. Write down what you would do as a new owner.'),
    ]), stages: ['professional'] },
  ],

  phrases: {
    frame: [
      'What decision will this help us make?',
      'Let me say the question back to check that I have it right.',
      'Which part of this would you like me to look at first?',
    ],
    evidence: [
      'Where does this number come from?',
      'Is that one example, or does it hold across many cases?',
      'What would we expect to see if this were not true?',
    ],
    structure: [
      'Let me split this into three parts.',
      'My main point is this, and here are the two reasons behind it.',
      'Which reason is the most likely, and how can we check it cheaply?',
    ],
    bias: [
      'Here is what I am assuming, so tell me if it is wrong.',
      'What would change my mind on this?',
      'I think I was wrong about that, and here is the corrected view.',
    ],
    data: [
      'What is this a percentage of?',
      'Were both numbers measured in the same way and over the same period?',
      'Does that figure look sensible for the size of what we are counting?',
    ],
  },

  stagePlan: {
    student: [
      'This week, take one question from homework or a project and write in one sentence what it is asking before you start.',
      'For your next project, note the source of every fact you use and find a second source for the two most important ones.',
      'After your next test, sort each lost mark into three groups: did not understand the question, wrong method, or careless slip. Act on the biggest group.',
      'Pick one chart or percentage from the news and write what it does not tell you, then compare notes with a friend.',
    ],
    fresher: [
      'Before each task this week, write what the finished result should look like and confirm it in one line with your manager or senior.',
      'Before you send any sheet or report, check its totals against the source and look for wrong units and repeated rows.',
      'When something goes wrong, list at least three possible causes before you change anything, and note which one was true.',
      'Keep one short note each week: a decision you made, the evidence you had and what you would check next time. Use it for interview examples.',
    ],
    professional: [
      'In your next meeting, ask what decision the analysis is meant to support before you discuss the findings.',
      'For one recommendation you receive this week, ask what evidence supports it and what would show it is wrong.',
      'Pick one project you are attached to and review it as if you had just taken it over. Write what you would do from today.',
      'Present your next conclusion in this order: the point, the strongest reasons, the main doubt and the next step. Ask for feedback on clarity.',
    ],
  },

  talk: {
    frame: {
      q: 'Tell me about a time you were given an unclear task. How did you find out what was needed?',
      a: 'Describe what was unclear, the question you asked, how the answer changed your plan and what the other person said about the result.',
      line: 'Clarified [unclear request] by asking [question], which changed the work to [result].',
    },
    evidence: {
      q: 'Tell me about a time you checked a claim or a figure before you relied on it.',
      a: 'Say where the claim came from, how you checked it, what you found and what you did differently because of it. If the claim held up, say that too.',
      line: 'Checked [claim or figure] against [source], found [result], and acted by [action].',
    },
    structure: {
      q: 'How would you approach a problem you have not seen before?',
      a: 'Say the question first, then split it into two or three parts, say which part you would check first and why, and finish with what you would still want to confirm.',
      line: 'Split [problem] into [parts], checked [first part] first, and found [result].',
    },
    bias: {
      q: 'Tell me about a time you changed your mind or found a mistake in your own work.',
      a: 'Describe what you first believed, what evidence changed it, how you told others and what you do differently now. Keep it honest and short.',
      line: 'Changed my view on [topic] after [evidence], and corrected [work] by [action].',
    },
    data: {
      q: 'Tell me about a time you used numbers or data to reach a conclusion.',
      a: 'Describe the question, where the data came from, one check you made on its quality, what it showed and what you did next. Do not claim more certainty than the data can give.',
      line: 'Used [data source] to answer [question], checked [quality point], and concluded [result] with [limit].',
    },
  },

  talkTitles: {
    strong: 'How to show this thinking habit in an interview or on your CV',
    weak: 'How to answer if you are asked about the area you are still building',
    intro: 'Interviewers rarely ask whether you are analytical. They ask for an example, so prepare one true situation for each area, with what you did and what changed.',
    mode: 'interview',
  },
};
