// Exam Stress Self-Assessment: a self-rating of everyday exam coping habits.
// Everyday habit guidance only. Not a medical or mental-health assessment.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

type Core = { d: string; text: string; tip: string; reverse?: boolean };

const CORE: Record<string, Core[]> = {
  prep: [
    {
      d: 'prep',
      text: 'I have a written plan that spreads my syllabus across the days left before the exam.',
      tip: 'Count the days left, write chapter names against dates in one notebook page, and keep the last three or four days free for revision and a buffer for lost days.',
    },
    {
      d: 'prep',
      text: 'I know which chapters I am strong in and which ones need more time.',
      tip: 'Attempt five past questions from each chapter, mark the chapter green, amber or red, and give your next week to the red ones before you touch the green ones.',
    },
    {
      d: 'prep',
      text: 'I have attempted earlier question papers or mock tests with a timer, without opening my books.',
      tip: 'This weekend, pick one past paper, set a timer for the real duration, finish it without notes and check it only afterwards. Do one more every week.',
    },
    {
      d: 'prep',
      text: 'I feel I will never be ready however much I study.',
      reverse: true,
      tip: 'Write what is left as a count: chapters, papers, days. A finite list is easier to carry than a vague fear. Cut it to what can be finished in the days you have and drop the rest on purpose.',
    },
    {
      d: 'prep',
      text: 'I revise by testing myself from memory, not only by reading my notes again.',
      tip: 'After each page or topic, close the book and write three key points from memory. Check them, and write only the missed ones on a small revision card.',
    },
  ],
  thoughts: [
    {
      d: 'thoughts',
      text: 'When I have a bad mock test or class test, I can look at it, learn from it and still finish my day.',
      tip: 'After a bad test, give yourself twenty minutes: list the three types of mistake you made, pick one to fix, then do something ordinary like a meal or a walk before you study again.',
    },
    {
      d: 'thoughts',
      text: 'I judge my day by whether I met my study targets, not only by marks.',
      tip: 'Set two or three small targets each morning, such as one chapter and one set of questions, and tick them at night. Marks come later, but targets are in your hands today.',
    },
    {
      d: 'thoughts',
      text: 'I keep going back over mistakes from earlier exams and cannot stop replaying them.',
      reverse: true,
      tip: 'Write the mistake once with one fix next to it, for example reading the question twice or watching the clock. Then close the page. When the thought returns, tell yourself the fix is already written.',
    },
    {
      d: 'thoughts',
      text: 'When a worrying thought about the exam comes up, I write it down and note what I can actually do about it.',
      tip: 'Keep a small notebook. Draw a line down the page: worries on the left, one action you can take this week on the right. If there is no action, mark it as not in your control and move on.',
    },
    {
      d: 'thoughts',
      text: 'I feel that one bad paper or one bad result will ruin my whole future.',
      reverse: true,
      tip: 'Write down two other routes that stay open if this exam goes badly, such as a repeat attempt, a related course or a different entry exam. Talk to a teacher or counsellor to check them. Knowing a next step exists lowers the weight of one paper.',
    },
  ],
  body: [
    {
      d: 'body',
      text: 'On most days in exam weeks I go to bed and wake up at roughly the same time.',
      tip: 'Choose a sleep and wake time you can keep for the next fourteen days, set a phone alarm thirty minutes before bedtime to put books away, and keep the wake time even after a bad night.',
    },
    {
      d: 'body',
      text: 'I eat proper meals at regular times even on heavy study days.',
      tip: 'Fix three meal times and keep a simple option ready, such as roti with sabzi or dal, curd rice, eggs or fruit. Eat away from your desk and phone for at least ten minutes.',
    },
    {
      d: 'body',
      text: 'I stay awake most of the night before an exam to cover more topics.',
      reverse: true,
      tip: 'Decide a closing time for the night before, make a one-page sheet of formulas, dates or headings, read it once and sleep. A tired mind misreads questions that you actually know.',
    },
    {
      d: 'body',
      text: 'I rely on a lot of tea, coffee or energy drinks to get through study hours.',
      reverse: true,
      tip: 'For one week, cap yourself at your usual one or two cups, not after afternoon, and replace the rest with water, a short walk or washing your face. Notice how your evenings and sleep feel.',
    },
    {
      d: 'body',
      text: 'I move my body, even with a short walk or stretching, on most days and take short breaks between study blocks.',
      tip: 'Use a study block of forty to fifty minutes followed by a five to ten minute break away from the screen. Add a twenty minute walk at the same time every day, since a fixed time is easier to keep.',
    },
  ],
  paper: [
    {
      d: 'paper',
      text: 'In the exam I read the whole paper first and decide how much time each section gets.',
      tip: 'Practise this in every mock: spend the first five minutes reading, write the time budget next to each section, and note the finish time for each on the margin of the paper.',
    },
    {
      d: 'paper',
      text: 'If I am stuck on a question, I mark it and move on, then come back to it later.',
      tip: 'Set a rule before the exam: if a question has not moved in two or three minutes, put a small tick next to it and go on. Practise the rule in timed papers until it is automatic.',
    },
    {
      d: 'paper',
      text: 'I go blank or freeze in the exam hall and I do not know what to do when it happens.',
      reverse: true,
      tip: 'Make a thirty second reset and use it in every practice paper: put the pen down, breathe out slowly for longer than you breathe in, read the question again, then write any one line you know about it. Having a script helps more than hoping it will not happen.',
    },
    {
      d: 'paper',
      text: 'I prepare admit card, stationery, travel and my route the evening before every paper.',
      tip: 'Make a checklist on a card and keep it in your bag: admit card, ID, pens, geometry box or calculator if allowed, water. Check the centre address and travel time the evening before.',
    },
    {
      d: 'paper',
      text: 'After a paper is over, I stop discussing the answers and start preparing for the next one.',
      tip: 'Agree a rule with your friends: no answer comparing until the last paper is done. After each paper, spend ten minutes noting one thing to fix, and begin the next subject.',
    },
  ],
  support: [
    {
      d: 'support',
      text: 'I have at least one person I can tell honestly how my preparation is going.',
      tip: 'Choose one person, a friend, sibling, teacher or cousin, and agree a fixed short chat each week. Say how many chapters you finished and how you are feeling, in plain words.',
    },
    {
      d: 'support',
      text: 'I can tell my family what kind of help I need, such as quiet time, meals on time or no comparisons.',
      tip: 'Write down two or three things that would help at home, such as a quiet hour or no questions about results during meals, and share them at one calm moment, not in the middle of an argument.',
    },
    {
      d: 'support',
      text: 'When I am stuck on a topic, I ask a teacher, senior or study partner soon instead of waiting.',
      tip: 'Keep a list of doubts through the week, and take the whole list to one teacher, senior or study partner at a fixed time. Do not carry a doubt for more than a few days.',
    },
    {
      d: 'support',
      text: 'I keep my worries to myself because I do not want others to think I cannot cope.',
      reverse: true,
      tip: 'Tell one trusted person one specific worry this week, for example that you are not sleeping before mocks. Saying it aloud usually makes it smaller, and they may help with something practical.',
    },
    {
      d: 'support',
      text: 'At least once a week I spend time with friends or family doing something that has nothing to do with exams.',
      tip: 'Put one fixed slot in your weekly timetable for a meal, a game, a film or a visit, and treat it like a class you do not miss. Rest planned in advance feels less guilty.',
    },
  ],
};

const ORDER = ['prep', 'thoughts', 'body', 'paper', 'support'];
const CORE_LIST: Core[] = [];
for (let i = 0; i < 5; i++) for (const k of ORDER) CORE_LIST.push(CORE[k][i]);

export const bundle: SkillTestBundle = {
  test: {
    id: 'exam-stress-self-assessment',
    slug: 'exam-stress-self-assessment',
    pageUrl: '/services/assessments/exam-stress-self-assessment/',
    breadcrumbName: 'Exam Stress Self-Assessment',
    metaTitle: 'Exam Stress Self-Assessment | Free Exam Anxiety Test',
    metaDescription:
      'Free exam stress self-assessment: 41 to 42 questions and five scores for preparation, worry, sleep and food, the exam hall and support. Instant result, no sign-up.',
    h1Lead: 'Exam Stress',
    h1Accent: 'Self-Assessment',
    eyebrow: 'Free exam stress test with a habit plan',
    heroSub:
      'Wondering how stressed you are about exams? This free self-assessment looks at five everyday areas, preparation, worry and self-talk, sleep and food, handling the exam itself, and getting support, and shows which habit to work on first. It is a habit check, not a medical or mental-health assessment.',
    stats: [
      { value: '41-42', label: 'questions' },
      { value: '5', label: 'coping areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five exam coping areas from your own ratings',
      'About 6 minutes, with advice for your exam stage',
      'A two-week routine for your lowest area',
    ],
    reportTitle: 'Exam Stress Self-Assessment Report',
    reportFile: 'future-career-school-exam-stress-self-assessment.pdf',
    reportKicker: 'EXAM STRESS REPORT',
    resultKicker: 'Your exam coping result',
    scoreLabel: 'Overall exam coping habits',
    bands: {
      high: 'Your habits here are working well for you.',
      mid: 'Some habits are in place, with gaps worth closing.',
      low: 'This is where small changes can help you most.',
    },
    domainsHeading: 'Five areas of exam coping this self-assessment covers',
    domainsIntro:
      'Exam pressure shows up in different places for different people. A higher score in an area means healthier everyday habits there. Your lowest area is the best place to start.',
    domains: [
      {
        key: 'prep',
        name: 'Preparation and confidence',
        short: 'Having a plan and knowing where you stand',
        strong: 'You have a plan for the time you have, you know your strong and weak topics, and you practise under exam conditions.',
        weak: 'Your preparation feels like one large cloud. You are not sure where you stand, and you have little practice under timed conditions.',
        plan: [
          'Write the full list of chapters, mark each one green, amber or red after a quick set of questions, and plan the red ones first.',
          'Attempt one past paper under a timer this week and check it afterwards, noting the type of mistakes, not only the marks.',
          'Keep the last few days before the exam free for revision, so a lost day does not break your plan.',
        ],
        next: {
          href: '/services/assessments/study-habits-self-assessment/',
          label: 'Take the study habits self-assessment',
        },
      },
      {
        key: 'thoughts',
        name: 'Worry and self-talk',
        short: 'How you talk to yourself about exams and results',
        strong: 'You can look at a poor result, learn from it and carry on, and you do not treat one exam as the verdict on your life.',
        weak: 'Worry about results or letting others down takes over your thinking, or you replay mistakes and treat one exam as a final verdict.',
        plan: [
          'Keep a worry notebook: worries on the left, one action you can take this week on the right.',
          'After any bad test, spend twenty minutes writing three mistakes and one fix, then stop and do something ordinary.',
          'Write two other routes that stay open if this exam does not go well, and check them with a teacher or counsellor.',
        ],
      },
      {
        key: 'body',
        name: 'Sleep, food and body',
        short: 'Looking after the body that carries you through exams',
        strong: 'You keep a regular sleep time, eat proper meals, take breaks and move your body even during heavy study weeks.',
        weak: 'Sleep, meals and breaks are the first things you give up in exam weeks, and you may lean on tea, coffee or late nights to keep going.',
        plan: [
          'Fix a bedtime and wake time you can keep for two weeks, and put books away thirty minutes before bed.',
          'Set three meal times and keep a simple, quick meal ready so you do not skip them.',
          'Add a twenty minute walk or stretch at a fixed time every day, and a short break after each study block.',
        ],
      },
      {
        key: 'paper',
        name: 'Handling the exam itself',
        short: 'Time, nerves and routine in the exam hall',
        strong: 'You plan the paper, manage time by section, move on when stuck and have a routine for exam mornings.',
        weak: 'In the paper you rush, get stuck on one question for too long or freeze, and the days around the exam feel disorganised.',
        plan: [
          'In every mock, read the paper first, write a time budget for each section and keep to it.',
          'Practise a thirty second reset for when you freeze: pen down, slow breath out, reread the question, write one line.',
          'Make an exam-day checklist card and prepare your bag and route the evening before each paper.',
        ],
      },
      {
        key: 'support',
        name: 'Talking and getting support',
        short: 'Sharing the load with people around you',
        strong: 'You have people you can be honest with, you ask for help early, and you make room for rest and company.',
        weak: 'You carry exam worries alone, wait too long to ask for help, or find that home or friends add to the pressure.',
        plan: [
          'Choose one person and agree a short weekly chat about how preparation and your mood are going.',
          'Tell your family two practical things that would help, such as a quiet hour or no result questions at meals.',
          'If you ever feel unable to cope, speak to a doctor, a counsellor or someone you trust, and you can call Tele-MANAS on 14416, a free national helpline.',
        ],
      },
    ],
    questions: CORE_LIST.map((q) => (q.reverse ? { d: q.d, text: q.text, reverse: true } : { d: q.d, text: q.text })),
    readingTitle: 'How to read your exam stress result',
    readingSections: [
      {
        title: 'A higher score means healthier habits',
        body: [
          'Every statement is worded so that agreeing describes a healthy habit, such as a study plan, regular sleep or telling someone how you feel. Statements about worry habits are reversed, so saying they are not true for you raises your score. A higher score is therefore better news.',
          'A lower score is not a verdict about you. It points to a habit you can change, usually with a small step that you repeat for a couple of weeks.',
        ],
      },
      {
        title: 'Some stress around exams is normal',
        body: [
          'Feeling nervous before an important exam is common and can even help you stay alert. This self-assessment does not try to remove stress. It looks at whether your daily habits give you enough support to carry it.',
        ],
      },
      {
        title: 'Start with your lowest area',
        body: [
          'Take the fourteen day routine for your lowest area and do only that for two weeks. Then retake the self-assessment and compare area by area. Changing one habit at a time works better than trying to fix everything before the exam.',
          'Your exam stage matters. Board exams, entrance preparation, university semesters and repeat attempts for government jobs create different pressures, so your report adds advice for the stage you pick.',
        ],
      },
      {
        title: 'When a self-rating is not enough',
        body: [
          'A tool like this can only describe your habits. If your worry is heavy, lasts for weeks, or stops you from sleeping, eating or studying, talk to a doctor, a school or college counsellor, or someone you trust. This page cannot tell you what is happening, and it does not try to.',
        ],
      },
    ],
    limits: [
      'This is not a medical or mental-health assessment. It does not diagnose anything, and it cannot say whether you have any health condition.',
      'It is a self-rating of everyday exam habits and shows only how you describe yourself today. A different day or a different exam week may give a different result.',
      'If you feel unable to cope, or have thoughts of harming yourself, please speak to a doctor, a counsellor or someone you trust. You can call Tele-MANAS on 14416, a free national helpline.',
      'Scores are not compared with other people, so there is no pass mark. A high score does not predict an exam result, and a low score does not predict one either.',
      'Advice here is general habit guidance. Exam rules, schedules and options differ by board, university and exam, so check official sources for your own exam.',
    ],
    faqs: [
      {
        q: 'Is this exam stress test free?',
        a: 'Yes. The test is free, takes about six minutes and needs no sign-up. You get area scores, advice for your exam stage and a downloadable report.',
      },
      {
        q: 'Is this a medical or mental-health test for exam anxiety?',
        a: 'No. It is not a medical or mental-health assessment and does not diagnose anxiety, stress disorders or any other condition. It looks at everyday habits such as planning, sleep, food and asking for support. If you feel unable to cope, or have thoughts of harming yourself, speak to a doctor, a counsellor or someone you trust, and you can call Tele-MANAS on 14416, a free national helpline.',
      },
      {
        q: 'How is the score worked out?',
        a: 'Statements are rated from 1 to 5 and the ones about worry habits are reversed, so a higher score always means a healthier habit. In the situation questions each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
      },
      {
        q: 'What is a good score on an exam stress test?',
        a: 'There is no pass mark. Scores are only against your own answers and are not compared with anyone else. Use them to see which of the five areas has the most room for a small change.',
      },
      {
        q: 'How can I tell how stressed I am about exams?',
        a: 'This test does not measure stress as a number. It shows how well your habits are set up to handle exam pressure. Signs to notice yourself include poor sleep for many days, skipping meals, avoiding books, or feeling dread every day. If these continue, talk to someone you trust or a counsellor.',
      },
      {
        q: 'Can Class 10, Class 12, college and government exam students use it?',
        a: 'Yes. You choose your stage, whether board exams, entrance preparation, university semester exams, or government and competitive exams, and the advice in your report changes to fit.',
      },
      {
        q: 'What is the difference between this and a study habits test?',
        a: 'This test looks at how you cope around exams, including worry, sleep, food and support. A study habits test looks at how you plan, focus and revise. The two work well together.',
      },
      {
        q: 'What should I do if my score is low?',
        a: 'A low area score points to one habit to work on, not to something wrong with you. Follow the fourteen day routine for that area, retake the test after a few weeks and see what has moved. If worry feels heavy, talk to a counsellor or someone you trust.',
      },
    ],
    related: [
      {
        href: '/services/assessments/study-habits-self-assessment/',
        title: 'Study Habits Self-Assessment',
        description: 'How you plan, focus and revise, scored by area.',
      },
      {
        href: '/services/assessments/confused-about-career-after-10th-test/',
        title: 'Confused About Career After 10th Test',
        description: 'Find out what is really holding up your decision after Class 10.',
      },
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'Five everyday work skills rated from your own answers.',
      },
      {
        href: '/services/assessments/communication-skills-assessment/',
        title: 'Communication Skills Assessment',
        description: 'Listening, speaking, writing, feedback and presenting, scored separately.',
      },
      {
        href: '/blog/parents/how-to-support-child-during-career-confusion/',
        title: 'How to Support Your Child During Career Confusion',
        description: 'A guide for parents on helping without adding pressure.',
      },
      {
        href: '/blog/stream-selection/which-stream-to-choose-in-11th/',
        title: 'Which Stream to Choose in 11th',
        description: 'How to compare Science, Commerce and Arts calmly.',
      },
      {
        href: '/blog/government-jobs/government-exam-preparation-while-working-india/',
        title: 'Government Exam Preparation While Working',
        description: 'Fitting long exam preparation around a job.',
      },
    ],
    breadcrumbDescription: 'Free exam stress self-assessment with five habit scores and a two-week plan.',
    webAppDescription:
      'A free original 41-to-42-question exam stress self-assessment covering preparation and confidence, worry and self-talk, sleep, food and body, handling the exam itself, and talking and getting support, with five scores, an overall score, a habit plan and a downloadable report. It is not a medical or mental-health assessment.',
    indexDescription: 'Free exam stress test: five habit scores for preparation, worry, sleep, exam day and support. Not a medical assessment.',
    indexNote: 'For board, entrance, college and government exam students',
  },

  depth: {
    stageHeading: 'Which exam are you facing?',
    stageNote:
      'Pressure looks different for a board exam, an entrance exam, university semesters and repeat attempts for government jobs, so your report adjusts the advice to your stage.',
    stages: [
      {
        key: 'board',
        label: 'Class 10 or 12 board exams',
        description: 'CBSE, ICSE or a State board',
        title: 'Keep board pressure in proportion',
        body: 'Board results are talked about by family, neighbours and school, so the pressure often comes from outside. The most useful work is a steady timetable, regular papers and a clear talk at home about what happens after the result.',
        actions: [
          'Write a timetable that works backwards from each paper date and keep one revision day in every week.',
          'Practise full papers with the exact time limit and the presentation expected by your board.',
          'Talk to your parents before the exams about what the plan is after results, so one result does not feel like the end of every option.',
        ],
      },
      {
        key: 'entrance',
        label: 'JEE, NEET, CUET or similar entrance preparation',
        description: 'Long preparation with mock tests',
        title: 'Make a long preparation sustainable',
        body: 'Entrance preparation can run for months or years, with frequent mock tests that make every week feel like a result. The aim is a routine you can keep, rest built into it, and a Plan B that you have talked over.',
        actions: [
          'After each mock, spend a fixed hour sorting mistakes into concept, speed and carelessness before looking at the score again.',
          'Plan one lighter half-day each week and keep it, so your routine lasts the whole preparation.',
          'Write a Plan B with your family, such as another entrance, a related course or a repeat attempt, and read it when a mock goes badly.',
        ],
      },
      {
        key: 'college',
        label: 'University semester and internal exams',
        description: 'Back-to-back papers, internals and backlogs',
        title: 'Handle papers that come one after another',
        body: 'Semester exams often bring several papers in a short window, plus internal marks and attendance during the term. Stress usually builds when everything is left to the last weeks.',
        actions: [
          'Mark all exam dates on one page and allot revision days to each paper based on how hard it is for you, not equally.',
          'Start internal assignments and lab records early so they do not collide with exam preparation.',
          'Meet the subject teacher or class mentor about any weak subject or backlog early in the semester.',
        ],
      },
      {
        key: 'govt',
        label: 'Government and competitive exams',
        description: 'Often with repeat attempts and a job alongside',
        title: 'Plan for the long run, including second and third attempts',
        body: 'Government exam preparation can span several attempts and may run alongside a job or family duties. The pressure often comes from time passing and from comparison with others. A fixed routine, a shared limit with your family and honest review of each attempt help.',
        actions: [
          'Fix study hours that fit your work and family duties, and protect sleep rather than adding late-night hours.',
          'After an attempt, write what cost you marks or time in each section and change only two things for the next one.',
          'Agree with your family how long and how many attempts you will go on, and a fallback you are comfortable with.',
        ],
      },
    ],
    tips: CORE_LIST.map((q) => q.tip),
    strongTip: 'This is a healthy habit. Keep it going through the heaviest weeks of the exam period.',
    domains: {
      prep: {
        why: 'Much exam worry comes from not knowing where you stand. A plan with dates, a clear list of strong and weak topics and some timed practice turn a large fear into a list of tasks you can finish.',
        roles: [
          'Board exams, where every subject has a fixed paper date and syllabus',
          'Entrance and government exams, where long preparation needs a plan that survives bad weeks',
          'University semesters, where several papers fall close together',
        ],
        routine: [
          'Days 1 to 3: List every chapter of your subjects, mark each green, amber or red after a few questions, and write the list on one page.',
          'Days 4 to 7: Put the red chapters into a dated plan, with the last days before the exam kept free for revision.',
          'Days 8 to 11: Attempt one past paper under a timer without notes and sort the mistakes into concept, speed and carelessness.',
          'Days 12 to 14: Revise by closing the book and writing key points from memory, then update the plan for the next two weeks.',
        ],
        mistakes: [
          'Studying only the chapters you already like, because they feel comfortable',
          'Planning for every hour of the day, so that one missed hour breaks the whole plan',
          'Reading notes again and again without testing yourself',
        ],
        proof: [
          'A dated plan on paper that you have followed for a full week',
          'A record of timed papers with the type of mistakes noted',
          'A green, amber, red list that has changed over the weeks',
        ],
        askOthers: 'Can you look at my plan and tell me which chapters I may be giving too little time?',
        talkingPoints: [
          'You know which topics are strong and which need work',
          'You practise under timed conditions and learn from mistakes',
          'You have kept room in your plan for revision and lost days',
        ],
        midStep: 'Do one timed past paper this week and write the three most common types of mistake on a card to read before the next one.',
      },
      thoughts: {
        why: 'The way you talk to yourself about marks, results and family hopes affects how you feel and how well you study. Worry that is written down and turned into an action is easier to handle than worry that circles in your head.',
        roles: [
          'The days after a bad mock test or class test',
          'The weeks before results, when family and neighbours ask questions',
          'Repeat attempts, where memories of an earlier result come back',
        ],
        routine: [
          'Days 1 to 3: Start a worry notebook with two columns: the worry, and one action you can take this week.',
          'Days 4 to 7: Set two or three small daily targets and tick them at night. Judge the day by the ticks.',
          'Days 8 to 11: After any test, write three mistakes and one fix in twenty minutes, then close the notebook.',
          'Days 12 to 14: Write down two other routes that would stay open if this exam goes badly, and check them with one teacher or counsellor.',
        ],
        mistakes: [
          'Treating one test or one paper as proof of how your whole future will go',
          'Replaying past mistakes at night instead of writing one fix and stopping',
          'Comparing your worst day with someone else\'s best-looking day',
        ],
        proof: [
          'A worry notebook with actions next to the worries',
          'A short list of other routes you have checked with a teacher or counsellor',
          'A week of ticked daily targets',
        ],
        askOthers: 'When I talk about my exam, do I sound more worried than the situation needs, or is the worry fair?',
        talkingPoints: [
          'You separate what you can act on from what you cannot control',
          'You learn from a poor result without punishing yourself',
          'You know that other routes stay open',
        ],
        midStep: 'Pick one worry that keeps returning and write down the one action you can take about it this week, then do it.',
      },
      body: {
        why: 'Sleep, meals, movement and breaks are often the first things given up in exam weeks. A body that is rested and fed usually makes it easier to concentrate and to stay calm in the hall.',
        roles: [
          'Pre-board and board weeks, when late nights are common',
          'Long entrance preparation, where an unsustainable routine wears you down',
          'Studying after a day of work for government exams',
        ],
        routine: [
          'Days 1 to 3: Choose a sleep and wake time you can keep, and set an alarm to put books away thirty minutes before bed.',
          'Days 4 to 7: Fix three meal times and keep a simple meal ready, eating away from your desk and phone.',
          'Days 8 to 11: Add a twenty minute walk or stretch at a fixed time and a five to ten minute break after each study block.',
          'Days 12 to 14: Cut back tea, coffee or energy drinks to your usual amount and not after afternoon, and plan a normal sleep for the night before your next paper.',
        ],
        mistakes: [
          'Staying up the whole night before a paper to cover more',
          'Skipping breakfast or lunch to save study time',
          'Using more and more tea, coffee or energy drinks to keep going',
        ],
        proof: [
          'A week in which you kept your sleep time on most days',
          'A simple meal plan you followed during a study week',
          'A daily walk or stretch noted in your timetable',
        ],
        askOthers: 'Do you notice me skipping meals, looking tired or short-tempered when exams are close?',
        talkingPoints: [
          'You protect sleep and meals during exam weeks',
          'You take planned breaks instead of pushing through',
          'You keep a fixed routine for the night before a paper',
        ],
        midStep: 'Keep one fixed bedtime and wake time for the next seven days, even on weekends, and notice how your mornings feel.',
      },
      paper: {
        why: 'Marks are also lost by poor time use, by staying too long on one question, or by arriving flustered. A routine for the paper and a plan for the moment you freeze can be practised long before the real exam.',
        roles: [
          'Board exams with a fixed time per paper and a set answer style',
          'Entrance exams with many questions and tight time per question',
          'Semester exams where several papers follow each other in a few days',
        ],
        routine: [
          'Days 1 to 3: Make an exam-day checklist card and a time budget for each section of your next paper.',
          'Days 4 to 7: Do one timed paper using the budget, and mark questions to skip with a tick when you are stuck for two or three minutes.',
          'Days 8 to 11: Practise a thirty second reset: pen down, slow breath out, reread the question, write one line you know.',
          'Days 12 to 14: Do a full dress rehearsal: pack the bag, plan the route and time, and sleep at your normal time the night before.',
        ],
        mistakes: [
          'Starting to write before reading the whole paper',
          'Spending too long on one hard question and rushing the rest',
          'Discussing answers outside the hall and then losing focus for the next paper',
        ],
        proof: [
          'A mock paper where you finished all sections within the time',
          'A checklist card you used before a paper',
          'A note on what you did when you got stuck, and how it went',
        ],
        askOthers: 'In my last mock, where did I lose time or marks, and what would you change?',
        talkingPoints: [
          'You plan the paper and keep to a time budget',
          'You have a way to reset if you get stuck or freeze',
          'You stay away from answer comparing until the exams are over',
        ],
        midStep: 'In your next mock, write the time you will finish each section on the first page before you begin and check yourself against it.',
      },
      support: {
        why: 'Carrying exam worry alone can make it feel heavier. Telling one trusted person, asking about doubts early and keeping some time for rest and company make a long preparation easier to bear.',
        roles: [
          'Home, where hopes and comparisons can add to the pressure',
          'School, college or coaching, where teachers and seniors can answer doubts',
          'Repeat attempts, where you may feel you have let others down',
        ],
        routine: [
          'Days 1 to 3: Choose one person to talk to weekly and fix a time for a short check-in.',
          'Days 4 to 7: Tell your family two practical things that would help, such as a quiet hour or no result questions at meals.',
          'Days 8 to 11: Collect your doubts in a list and take them to a teacher, senior or study partner in one session.',
          'Days 12 to 14: Plan one weekly slot for something that has nothing to do with exams, and keep it.',
        ],
        mistakes: [
          'Hiding worries because you do not want to seem weak',
          'Waiting for weeks before asking about a doubt',
          'Giving up all meetings with friends and family until the exam is over',
        ],
        proof: [
          'A weekly check-in that you have kept for two weeks',
          'A list of doubts cleared with a teacher or senior',
          'A weekly slot for rest and company that you protected',
        ],
        askOthers: 'Can I tell you honestly how my preparation is going once a week, and can you tell me if you see me getting worn out?',
        talkingPoints: [
          'You ask for help early instead of waiting',
          'You can tell people what kind of support helps you',
          'You make room for rest as part of your plan',
        ],
        midStep: 'Message one person today and ask for a fifteen minute talk this week about how your preparation is going.',
      },
    },
    thirtyDay: [
      'Week 1: Do the first half of the fourteen day routine for your lowest area and write one line each night on what you tried.',
      'Week 2: Finish the routine and tell one trusted person what you changed and how it felt.',
      'Week 3: Move to your second-lowest area and use two steps from its routine.',
      'Week 4: Retake the self-assessment, compare each area, and choose one habit to keep through your exam weeks.',
    ],
  },

  extras: [
    // Board
    x(
      ['board'],
      'prep',
      'I know the syllabus, marking scheme and sample paper of my board for each subject.',
      'Download the latest syllabus and sample paper from your board\'s official website and note the marks for each section, so you spend time where the marks are.',
    ),
    x(
      ['board'],
      'thoughts',
      'I feel that my family\'s respect for me depends on my board marks.',
      'Ask one family member what they hope for beyond the marks. Often they are worried about your safety and future, and hearing this changes how the marks feel. Share your own targets so they know what you are working towards.',
      true,
    ),
    x(
      ['board'],
      'body',
      'I keep my sleep time steady in pre-board and board weeks even when classmates stay up late.',
      'Tell your friends your sleep time and stick to it. Late-night study groups often cover little and leave you tired for the next day\'s paper.',
    ),
    x(
      ['board'],
      'paper',
      'I practise writing full answers within the time limit, including diagrams, steps and neat presentation.',
      'Write at least one full paper per subject by hand in the real time, then ask a teacher to check how your answers look, since presentation affects marks in many boards.',
    ),
    x(
      ['board'],
      'support',
      'My parents and I have talked about what the plan is after the board results.',
      'Sit with your parents once before the exams and write two or three options, such as the stream, a college or a re-exam route, so that the result is a choice between options, not the end of them.',
    ),
    // Entrance
    x(
      ['entrance'],
      'prep',
      'After each mock test I study the kind of mistakes I made, not only my score.',
      'Make a mistake log with three columns: concept gap, speed, carelessness. Spend the first hour after each mock on it, and plan the week from the biggest column.',
    ),
    x(
      ['entrance'],
      'thoughts',
      'One bad mock test makes me doubt whether I should continue my preparation at all.',
      'Write down your last four or five mock results and notice the pattern, not just the last one. Decide any big question like continuing or changing plans only after talking to a teacher or mentor, never on the evening of a bad mock.',
      true,
    ),
    x(
      ['entrance'],
      'body',
      'My weekly schedule has a lighter half-day or a full break that I actually take.',
      'Mark one half-day as a fixed rest slot in your timetable for the next month, with no mock tests or solving. A routine you can keep for many months matters more than a few heroic weeks.',
    ),
    x(
      ['entrance'],
      'paper',
      'I have decided in advance how I will choose questions in the paper and when I will skip.',
      'In your next three mocks, try one strategy: a first pass for easy questions, a second pass for medium ones, and skip the rest. Keep the one that works for you and use it every time.',
    ),
    x(
      ['entrance'],
      'support',
      'I have a Plan B that I have discussed with my family, so the exam does not feel like all or nothing.',
      'Write a short Plan B with your family, for example another entrance exam, a related course or one more attempt, and read it once a month. Having it written lowers the pressure on each mock.',
    ),
    // College
    x(
      ['college'],
      'prep',
      'I leave most of my study for the last few days before semester exams and then panic.',
      'Pick three days now to cover each subject\'s units at a first pass level. Even a short first pass spread over the term makes the last week about revision, not first reading.',
      true,
    ),
    x(
      ['college'],
      'prep',
      'When papers fall close together, I give more revision days to the harder subjects instead of splitting time equally.',
      'Rank your subjects from hardest to easiest for you and allot days in that proportion. Put the hardest paper\'s revision first, and a lighter subject close to its paper.',
    ),
    x(
      ['college'],
      'thoughts',
      'A backlog or low marks in one subject makes me feel I am behind everyone else.',
      'Write down what the backlog needs, such as which paper, which attempt and which dates, and the next step. Talk to your class mentor, since the rules for backlogs are usually clear once you ask.',
      true,
    ),
    x(
      ['college'],
      'body',
      'In semester exam weeks I skip meals or live on snacks and tea.',
      'Before the first paper, arrange two proper meals a day with your hostel mess, canteen or home, and keep fruit or nuts for the study hours. Tea can stay, but not as a meal.',
      true,
    ),
    x(
      ['college'],
      'support',
      'I talk to my class teacher, mentor or a senior about a weak subject early in the semester.',
      'Within the next week, meet the teacher of your weakest subject and ask what the important topics are and where students usually lose marks. Ask a senior for old question papers and tips.',
    ),
    // Govt
    x(
      ['govt'],
      'prep',
      'My study hours fit around my job or other duties, and I can keep them most days.',
      'Count the hours that are really free on a weekday and on a weekend, and plan only about three-quarters of them. A plan you can keep beats a plan that breaks in the first week.',
    ),
    x(
      ['govt'],
      'thoughts',
      'After a failed attempt, I can look at what went wrong without blaming myself for everything.',
      'Within two weeks of a result, write three things that cost marks or time and two things that went well. Change only two things in the next attempt, instead of rebuilding everything.',
    ),
    x(
      ['govt'],
      'thoughts',
      'I feel guilty whenever I rest, because other aspirants are studying.',
      'Treat your rest as part of the plan: put a fixed rest slot in the week and tell yourself it is part of the schedule. Long preparation depends on steady energy, not on the number of hours others claim.',
      true,
    ),
    x(
      ['govt'],
      'body',
      'I protect my sleep even when I study after a day at work.',
      'Set a hard stop for evening study, a fixed time you will be in bed, and plan the next day\'s topic before you stop so you do not lie awake thinking about it.',
    ),
    x(
      ['govt'],
      'paper',
      'I know which sections cost me time or marks in my last attempt and have a plan for them.',
      'Take your last paper or your latest mock and mark the time spent against the marks gained in each section. Set a time limit for the weakest section and practise it separately for two weeks.',
    ),
    x(
      ['govt'],
      'support',
      'My family and I have agreed how long and how many attempts I will go on, and a fallback we are comfortable with.',
      'Choose a calm time and ask your family what limits and fallback options they can accept. Write it down together. A shared plan can ease the feeling of unspoken pressure.',
    ),
  ],

  stageAdvice: {
    board: {
      prep: sa(
        'Board exams come with a fixed syllabus, a date sheet and a lot of voices telling you what to study.',
        'Work backwards from each paper date and give every subject a revision day in each week until the exams.',
        'Use your board\'s sample papers and last years\' papers to see how questions are asked, and practise those instead of collecting more guides.',
      ),
      thoughts: sa(
        'Board results are discussed by family, neighbours and school, so worry often comes from what others may say.',
        'Write down what you think is a fair target for yourself and share it with your parents before the exams.',
        'When someone compares you with a cousin or a topper, answer with your own plan for the next week and leave it there.',
      ),
      body: sa(
        'Pre-board and board weeks often mean late nights, tuition and few meals at normal times.',
        'Keep the same sleep time through the whole exam period and set the night before each paper as an early night.',
        'Eat home-cooked meals at fixed times and carry water and a light snack for long exam days.',
      ),
      paper: sa(
        'Board papers reward complete, well-presented answers and good time use across long papers.',
        'Practise writing full papers by hand, with diagrams and steps shown, in the exact time of your board paper.',
        'Plan the last fifteen minutes for rechecking, and rehearse that in your practice papers.',
      ),
      support: sa(
        'Parents often worry because they care, and they may not know how to help without adding pressure.',
        'Tell your parents one thing that would help, such as quiet study time or no result talk at meals.',
        'Take a doubt list to your subject teacher every week, since schools often have extra classes before boards.',
      ),
    },
    entrance: {
      prep: sa(
        'Entrance preparation is long, with coaching schedules, mock tests and a very large syllabus.',
        'Split your syllabus into months, with a revision cycle built in, and refresh the plan every two or three weeks using your mock mistakes.',
        'Keep a mistake log across mocks and revise from it before each new test.',
      ),
      thoughts: sa(
        'Frequent mock tests and ranks can make each week feel like a result.',
        'Look at the trend across several mocks, not the last one, and judge progress by the mistake log.',
        'Limit rank talk with friends to a short fixed time, since daily comparison tends to drain energy.',
      ),
      body: sa(
        'Long preparation can wear you down through poor sleep, lack of movement and long sitting hours.',
        'Use short breaks every forty to fifty minutes and walk or stretch daily at a fixed time.',
        'Keep one lighter half-day each week and a full break after a major exam date, so that the routine lasts.',
      ),
      paper: sa(
        'Entrance papers are long with tight time per question, so strategy matters as much as knowledge.',
        'Practise the same order of attempting sections across many mocks, and time each section.',
        'Rehearse your reset for freezing in mocks too, not only on the final day.',
      ),
      support: sa(
        'You may be living away from home or in a coaching centre, with less time for friends and family.',
        'Fix a regular call with someone at home and talk about more than marks.',
        'Find one study partner or senior at the centre with whom you can speak honestly about the pressure.',
      ),
    },
    college: {
      prep: sa(
        'Semester exams can bring several papers in a short window, along with internal marks and lab work.',
        'Make a single calendar of all exam dates, assignments and viva dates for the semester.',
        'Revise each unit briefly every week during the term, so the exam period is about revision, not first reading.',
      ),
      thoughts: sa(
        'A backlog or a low internal mark can make you feel behind, even though the rules for clearing it are usually clear.',
        'Find the written rules for backlogs and repeat papers in your university and note the dates, so the worry becomes a plan.',
        'Talk about it with your mentor or a senior who has cleared a backlog.',
      ),
      body: sa(
        'Exam weeks in hostels or at home can mean irregular meals, caffeine and late-night study groups.',
        'Arrange two proper meals a day before the first paper and keep fruit or nuts for study hours.',
        'Skip the all-night group session before a paper and use that time for a final one-page revision and sleep.',
      ),
      paper: sa(
        'University papers may weigh long answers, numericals and definitions differently in different subjects.',
        'Look at three previous papers of each subject to see how marks are divided and how long answers should be.',
        'Between papers, use the gap for the next subject and avoid long chats about the previous paper.',
      ),
      support: sa(
        'Class sizes are large and teachers may not notice who is struggling unless you tell them.',
        'Go to one teacher\'s office hours or ask a classmate to study with you before the exam week.',
        'Tell a friend or roommate how you are managing, and look out for them in the same way.',
      ),
    },
    govt: {
      prep: sa(
        'Government and competitive exams need a long syllabus covered over months, often with a job or family duties alongside.',
        'Work out weekly hours that are really free, cover a few subjects at a time and set a monthly revision day.',
        'After each attempt, review the pattern of the paper and adjust the plan, instead of starting from the beginning.',
      ),
      thoughts: sa(
        'Second and third attempts bring memories of the earlier result, and time passing can feel heavy.',
        'Write what you did differently this time, since each attempt gives you information you did not have before.',
        'Set a review date for each attempt and decide your next step then, rather than at 2 a.m. in a worry.',
      ),
      body: sa(
        'Studying after a day at work, or in shifts, can cut into sleep and meals for long stretches.',
        'Choose a stop time for evening study and protect it, even when the syllabus feels too large.',
        'Eat a proper dinner before study, not after midnight, and keep a short walk in your day.',
      ),
      paper: sa(
        'Government exams often have a prelims, a mains and an interview, each with a different style and time pressure.',
        'Practise the exact pattern of the stage you are preparing for, with sectional time limits.',
        'Plan travel to the exam centre the day before, since centres can be far and in a different city.',
      ),
      support: sa(
        'Friends and relatives may ask when you will get a job, and you may feel you are behind others.',
        'Prepare one calm sentence to answer these questions, and share your real plan with one person who understands.',
        'Join a study group where people share notes and methods, and not only ranks or cut-offs.',
      ),
    },
  },

  scenarios: [
    // prep
    sc('prep', 'Your exam is five weeks away and the syllabus feels huge. You have not started a plan. What do you do tonight?', [
      o('Start with the first chapter and study as much as you can each day', 33, 'Starting is good, but without a plan you may reach the exam with some chapters unread. Count the days and chapters first, then place them on dates.'),
      o('Wait until you feel calmer, then make a plan over the weekend', 0, 'Waiting for a calm mood often postpones the plan for weeks. Even a rough list tonight, with dates, usually makes you feel calmer than waiting does.'),
      o('Ask your friends what they are studying and copy their order', 67, 'Knowing what others do can help, but their strengths and weak topics differ from yours. Use it as an idea, then adjust the plan for your own gaps.'),
      o('List all chapters, mark strong and weak ones, then put them on a dated calendar with revision days kept free', 100, 'This is the strongest start. A dated list turns the syllabus into tasks, and the free revision days protect you if some days are lost.'),
    ]),
    sc('prep', 'You have a mock paper tomorrow morning. Your notes are not complete. What do you do?', [
      o('Sit the mock honestly, then use the results to decide what to fix', 100, 'A mock is meant to show gaps. Taking it in full, and then spending time on the mistakes, is more useful than delaying until you feel ready.'),
      o('Skip it and use the day to finish your notes', 33, 'Finishing notes feels productive, but you lose the chance to see what you do not know. Take the mock and complete the notes for the gaps it shows.'),
      o('Study until late to complete the notes, then take the mock tired', 0, 'A mock taken after a short night usually gives a misleading result and adds stress. Stop at your fixed time and sleep, then fix the gaps afterwards.'),
      o('Take the mock but keep your notes open to feel safer', 67, 'Open notes protect you from a low score, but they also hide what you cannot recall. Try the next one without them, even if the first result is lower.'),
    ]),
    // thoughts
    sc('thoughts', 'You score much lower than you expected in a class test, two weeks before the exam. What is your first move?', [
      o('Decide that you are not good enough for this exam and think about leaving it', 0, 'One test, two weeks out, is not enough to decide this. Look at the mistakes first and talk to a teacher before making any large decision.'),
      o('Spend twenty minutes listing the types of mistake, pick one to fix, and then return to your plan', 100, 'This keeps the test as information. A short review with one fix gets you moving again, and the plan carries on.'),
      o('Ignore the result and do not look at the paper again', 33, 'Avoiding it spares you the discomfort, but you lose useful information. Look at it once with a time limit, then move on.'),
      o('Study double hours for the next few days to make up for it', 67, 'Extra effort is understandable, but a few exhausting days often lead to a poor week. Add one focused hour on the mistake type instead of doubling everything.'),
    ]),
    sc('thoughts', 'At night you keep thinking about how your parents will react if you do badly. What helps most?', [
      o('Tell yourself to stop thinking about it and try harder to sleep', 33, 'Pushing a thought away often makes it louder. Write it down and decide on one thing you can do tomorrow about it.'),
      o('Write the worry on paper, add one action for tomorrow, such as speaking to your parents, then go back to bed', 100, 'Putting the thought on paper with an action gives your mind permission to rest. Speaking to your parents about it in daytime usually helps more than guessing.'),
      o('Open your phone and scroll until you fall asleep', 0, 'Scrolling delays the worry, but it often cuts sleep and brings the same thought back in the morning. Keep a notebook by your bed instead.'),
      o('Study through the night so that you feel you have done enough', 67, 'This tries to solve the worry with effort, which is understandable. A tired mind will do less well the next day, so write the action and rest.'),
    ]),
    // body
    sc('body', 'It is the night before an important paper and you feel you have not revised the last two chapters. What do you do?', [
      o('Revise the key points of those chapters on one page, then sleep at your usual time', 100, 'A short revision sheet with sleep gives you the best chance to read the questions well tomorrow. Whatever remains cannot be fixed by a very late night.'),
      o('Stay up all night to read everything once', 0, 'A whole night without sleep makes you more likely to misread questions and forget what you studied. A fixed stop time protects what you already know.'),
      o('Sleep early and do not look at the chapters at all', 33, 'Sleep is good, but ten or fifteen minutes with a one-page summary can calm your mind. Do a short review first, then sleep.'),
      o('Study until 2 a.m. and then sleep for a few hours', 67, 'A few hours of sleep is better than none, but a fixed earlier stop is better. Decide your stop time now and keep it.'),
    ]),
    sc('body', 'Your studies are heavy this week and you notice you are skipping lunch and drinking more tea. What do you do?', [
      o('Keep going, because you can eat after the exams', 0, 'Skipping meals for days often makes it harder to concentrate and sleep. Eating takes only a few minutes and helps you study better.'),
      o('Set fixed meal times, keep a simple meal ready and take a short walk after lunch', 100, 'A fixed routine removes the daily decision. A short walk after eating also gives your mind a break from the books.'),
      o('Eat a big meal late at night when you have time', 33, 'It is better than skipping, but a heavy late meal can disturb sleep. Spread your eating across the day with lighter, regular meals.'),
      o('Switch to coffee or an energy drink so you do not feel hungry', 67, 'This hides hunger for a short time but can affect sleep. Keep tea or coffee to a small amount and have something simple to eat alongside.'),
    ]),
    // paper
    sc('paper', 'Ten minutes into the paper you find you cannot recall the answer to the first question and your mind feels blank. What do you do?', [
      o('Keep staring at the question until the answer comes', 0, 'Staring usually uses up minutes and raises panic. Move on after two or three minutes and come back later.'),
      o('Leave the question, take a slow breath, read the next question and answer the easiest first', 67, 'This is a useful move. Add a note on the first question and come back to it, since other answers often help you recall.'),
      o('Put the pen down, breathe out slowly, reread the question, write any one line you know, then move on if still stuck', 100, 'A short reset followed by a first line is a good way to restart your thinking. Practise it in mocks so that it feels natural in the hall.'),
      o('Look at what others are writing to calm down', 33, 'Looking around does not help and may be treated as a breach of rules. Stay with your own paper and use your reset steps.'),
    ]),
    sc('paper', 'The first paper went badly and the second paper is tomorrow. Your friends are outside comparing answers. What do you do?', [
      o('Join them to find out how bad it was, then study', 33, 'Comparing answers rarely changes marks and often adds worry. Leave quickly, since you cannot change the paper that is over.'),
      o('Go home, note one thing to fix from the paper, and start preparing tomorrow\'s subject', 100, 'This keeps your focus on the paper you can still affect. Writing one lesson is enough, and you can look at the rest after the exams.'),
      o('Call your parents and tell them it went badly', 67, 'Sharing can help, but doing it right away may add to worry for both of you. Tell them in a calm way later in the day, with your plan for the next paper.'),
      o('Decide that the whole exam is spoiled and study less', 0, 'One paper does not decide the whole exam. Keep working on the remaining papers with your usual plan.'),
    ]),
    // support
    sc('support', 'You feel very worried about the exam, but your friends say they are fine. What do you do?', [
      o('Say nothing so that they do not think you are weak', 0, 'Keeping worry quiet can make it feel heavier. Telling one person often shows you are not alone.'),
      o('Tell one friend or family member that you are worried, and ask to study together or talk once a week', 100, 'Sharing with one trusted person is a good first step, and a regular time makes it a habit. They may feel the same.'),
      o('Post about it on social media to see who responds', 33, 'Posting may get quick replies, but it is a poor way to get steady support. Choose one person you trust and speak directly.'),
      o('Tell your teacher only if the worry gets much worse', 67, 'A teacher is a good person to tell, but waiting until it gets worse can leave you carrying it longer than needed. Speak early about smaller things.'),
    ]),
    sc('support', 'Your relatives keep asking about your target marks or rank. It makes you tense. What do you do?', [
      o('Answer with a big number to impress them', 0, 'A big number only raises the pressure on you. A modest honest answer keeps the pressure lower.'),
      o('Prepare one calm sentence such as that you are following your plan and will share news after results, and ask your parents to help redirect the talk', 100, 'A ready sentence takes the pressure out of the moment. Asking your parents to support you at such times is also reasonable.'),
      o('Avoid all relatives until the exam is over', 67, 'Avoiding the questions for a while is fine, but cutting off everyone can leave you lonely. Keep contact with the people who help.'),
      o('Argue with them and tell them to stop asking', 33, 'It is understandable to feel angry, but an argument adds tension at a time you need calm. A short calm line works better.'),
    ]),
    // stage-specific
    {
      ...sc('thoughts', 'It is two weeks before your board exams. A relative says your whole future depends on your marks. How do you take it?', [
        o('Believe it and study until midnight each day', 0, 'Marks matter, but a whole future depends on many things, including the choices you make after the result. Study at a steady pace and keep your sleep.'),
        o('Note the concern, then check with a teacher or counsellor what options exist after different outcomes', 100, 'Looking up what happens after different results turns a fear into facts. It often shows that more routes stay open than you feared.'),
        o('Tell them they are wrong and refuse to talk to them again', 33, 'Anger is understandable, but you can set a limit without cutting people off. A short calm reply and a change of topic is enough.'),
        o('Stop thinking about results completely and study only by mood', 67, 'Taking your mind off results is helpful, but studying only by mood leaves gaps. Keep a simple timetable and let the mood come and go.'),
      ]),
      stages: ['board'],
    },
    {
      ...sc('prep', 'Three weeks before your entrance exam, your mock marks have not improved for a month. What is the best response?', [
        o('Switch to a different set of books and a new coaching plan immediately', 33, 'A change can help, but changing everything this close to the exam is risky. First find the pattern in your mistakes and change one or two things.'),
        o('Analyse the last four or five mocks to find your main type of mistake, fix that, and keep the rest of your plan', 100, 'This uses the evidence in your own papers. Fixing the largest source of lost marks is usually worth more than adding more hours.'),
        o('Add two more hours of study daily', 67, 'More time can help, but if the cause is a type of mistake or poor time use, the extra hours may not change the score. Find the cause first.'),
        o('Stop giving mocks for a week so that you are not discouraged', 0, 'Avoiding mocks protects your mood for a few days but removes your best information. Continue them and spend more time reviewing each one.'),
      ]),
      stages: ['entrance'],
    },
    {
      ...sc('prep', 'Your semester has four papers in six days, one of which you find very difficult. How do you plan?', [
        o('Spend the first days on the difficult paper and leave the easiest for the last', 67, 'Giving more time to the hardest paper is sensible, but if it comes late in the schedule, you should revise it again nearer the date. Order by paper dates too.'),
        o('Split the time equally between all four papers', 33, 'Equal time looks fair but does not match your needs. Give more days to the difficult paper and fewer to the ones you know.'),
        o('Plan by date: revise each paper in the days before it, give the difficult one the most days and keep a short revision slot for it again before the paper', 100, 'This respects both the paper dates and your own difficulty. A second short revision before the paper helps recall.'),
        o('Study whichever subject you feel like each day', 0, 'Studying by mood tends to leave the hard subject for later and later. Fix the order on paper and keep to it.'),
      ]),
      stages: ['college'],
    },
    {
      ...sc('thoughts', 'Your result for a government exam you attempted for the second time was not selected. You have a job. What do you do first?', [
        o('Decide you are not meant for government jobs and stop completely that week', 33, 'Stopping is a valid decision if you reach it after thought, but not in the first week of disappointment. Give yourself time and talk it through.'),
        o('Take a few days off, then write what cost marks in each section and decide with your family whether and how to go on', 100, 'A short rest and an honest review give you the information to decide. Including your family means the decision is shared.'),
        o('Start the next attempt preparation the next morning without any break', 67, 'Determination is good, but without a review you may repeat the same plan. Take a short rest and look at what happened first.'),
        o('Avoid talking about it with anyone and focus on work', 0, 'Keeping it hidden can make the disappointment heavier. Tell one person you trust and plan a time to review the attempt.'),
      ]),
      stages: ['govt'],
    },
  ],

  phrases: {
    prep: [
      '"I have counted the days and chapters, and this is my plan with dates."',
      '"Which of these topics do you think I should give more time to?"',
      '"I will attempt this paper under a timer and check it afterwards."',
    ],
    thoughts: [
      '"This is one test. What is the one thing I can fix from it?"',
      '"I am worried about this, and the one thing I can do today is..."',
      '"If this exam does not go as planned, I still have these other routes."',
    ],
    body: [
      '"I am going to sleep now so that I can read the paper properly tomorrow."',
      '"Give me ten minutes for a meal and a walk, and then I will study again."',
      '"I will have my tea after lunch and not after four in the afternoon."',
    ],
    paper: [
      '"I will read the whole paper first and write the time for each section."',
      '"I will tick this question and come back to it after the others."',
      '"I will talk about the answers after the last paper, not today."',
    ],
    support: [
      '"Can I tell you how my preparation is going once a week?"',
      '"It would help me if we could keep result questions away from meal times."',
      '"I have a doubt on this topic. Could you give me fifteen minutes this week?"',
    ],
  },

  stagePlan: {
    board: [
      'Write each paper date and work backwards to a timetable with one revision day every week.',
      'Practise at least one full handwritten paper per subject in the exact time and check it with a teacher.',
      'Talk to your parents about the plan after the results and share two things that would help at home.',
      'Fix a sleep time for the exam period and prepare your bag, admit card and route the evening before each paper.',
    ],
    entrance: [
      'Split your syllabus across the months left, with revision cycles, and update it after every few mocks.',
      'Keep a mistake log with concept gaps, speed and carelessness, and review it before each new mock.',
      'Fix one lighter half-day each week and a daily walk, and protect both.',
      'Write a Plan B with your family and read it whenever a mock result shakes you.',
    ],
    college: [
      'Put all exam, assignment, lab and viva dates on one calendar at the start of the semester.',
      'Revise a little each week during the term, so the exam period is mostly revision.',
      'Meet your teacher or mentor about the weakest subject and any backlog early, and note the rules and dates.',
      'In exam weeks, fix two proper meals and a sleep time, and avoid all-night sessions before a paper.',
    ],
    govt: [
      'List the free hours you really have around work and family, and plan about three-quarters of them.',
      'After every attempt or mock, write what cost marks or time and change only two things.',
      'Agree with your family how long and how many attempts you will go on and a fallback you can accept.',
      'Protect your sleep and a weekly rest slot, and find a study group that shares methods, not only ranks.',
    ],
  },

  talk: {
    prep: {
      q: 'Looking at my plan and my mock results, which topics should I give more time to in the weeks left?',
      a: 'Bring your dated plan and your last paper. Ask for the two topics that cost the most marks and for the order to revise them in, then change your plan the same day.',
      line: 'Noted the topics to prioritise: [topic 1], [topic 2], and the dates I will revise them: [dates].',
    },
    thoughts: {
      q: 'I keep worrying about [result or family expectation]. How do other students handle it, and what are my options if it does not go well?',
      a: 'Ask for two or three concrete options, such as a repeat attempt, a related course or another entry route. Write them in your worry notebook next to the worry.',
      line: 'If the result is not what I hoped for, my options are: [option 1], [option 2], and the date by which I will decide: [date].',
    },
    body: {
      q: 'What routine for sleep, meals and breaks do students you know follow during exam weeks, and what do you suggest for me?',
      a: 'Ask for specifics such as bedtime, meal times and break length. Pick two that fit your day and try them for a week.',
      line: 'My exam week routine: sleep at [time], meals at [times], break every [minutes] minutes, walk at [time].',
    },
    paper: {
      q: 'In your experience, where do students lose time or marks in this paper, and how can I plan the hall time better?',
      a: 'Ask for a time budget per section and one common mistake. Use both in your next timed paper and check whether they worked.',
      line: 'Time budget for [exam]: [section 1] [minutes], [section 2] [minutes], rechecking [minutes]. Skip rule: [rule].',
    },
    support: {
      q: 'Can I come to you with doubts and with how I am feeling about the exam once a week? Who else would you suggest I speak to?',
      a: 'Fix a weekly slot with the person and ask them to suggest one more person, such as a counsellor or a senior. Keep your doubt list ready before each talk.',
      line: 'Weekly check-in with [name] on [day and time]. Doubts to bring: [list]. Another person I can talk to: [name].',
    },
  },

  talkTitles: {
    strong: 'Use your strongest area when you talk to a teacher, mentor or counsellor',
    weak: 'Questions to ask about your lowest area',
    intro: 'Bring these to a teacher, class mentor, school or college counsellor, or a senior who has been through the same exam. Specific questions get specific answers.',
    mode: 'ask',
  },
};
