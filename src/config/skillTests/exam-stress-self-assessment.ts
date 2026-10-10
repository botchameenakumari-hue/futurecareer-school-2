// Exam Stress Self-Assessment: a self-rating of everyday exam coping habits.
// Everyday habit guidance only. Not a medical or mental-health assessment.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

type Core = { d: string; text: string; tip: string; up: string; reverse?: boolean };

const CORE: Record<string, Core[]> = {
  prep: [
    {
      d: 'prep',
      text: 'I have a written plan that spreads my syllabus across the days left before the exam.',
      tip: 'Count the days left, write chapter names against dates in one notebook page, and keep the last three or four days empty for revision and for any day that goes wrong.',
      up: 'Review the plan every Sunday evening for ten minutes: tick what was done, move what was missed into the empty days, and show the page to one person at home or a friend.',
    },
    {
      d: 'prep',
      text: 'I know which chapters I am strong in and which ones need more time.',
      tip: 'Attempt five past questions from each chapter, mark the chapter green, amber or red, and give your next week to the red ones before you touch the green ones.',
      up: 'Redo the green, amber, red list every Sunday with five fresh questions per chapter, and ask a teacher which two chapters they would move up your red list.',
    },
    {
      d: 'prep',
      text: 'I have attempted earlier question papers or mock tests with a timer, without opening my books.',
      tip: 'This weekend, pick one past paper, set a timer for the real duration, finish it without notes and check it only afterwards. Do one more every week.',
      up: 'Fix one weekly slot at the real exam hour for a timed paper, and keep a table of date, score and the section where time ran out, so you can see whether your slow section is improving.',
    },
    {
      d: 'prep',
      text: 'I feel I will never be ready however much I study.',
      reverse: true,
      tip: 'Write what is left as a count: chapters, papers, days. A finite list is easier to carry than a vague fear. Cut it to what can be finished in the days you have and drop the rest on purpose.',
      up: 'When the thought of never being ready shows up, open your count page and update or cross off one item within five minutes, so the thought meets a number instead of staying a feeling.',
    },
    {
      d: 'prep',
      text: 'I mostly revise by reading my notes again and again, without testing myself.',
      reverse: true,
      tip: 'After each topic, close the book and write three key points from memory. Check them against the notes, and copy only the missed ones onto a small revision card. If you cannot write anything, that is the topic to study again.',
      up: 'When you start a second read of the same page, close the book, set a ten minute timer and write what you remember. Ask a friend to quiz you on one chapter each week.',
    },
  ],
  thoughts: [
    {
      d: 'thoughts',
      text: 'After a bad mock or class test, I sit down and go through what exactly went wrong.',
      tip: 'After a bad test, give yourself twenty minutes with a timer: list the three types of mistake you made and pick one to fix this week. Then do something ordinary like a meal or a walk before you study again.',
      up: 'Keep a mistake page across tests and read the last three entries together every Sunday. If one type of mistake repeats, plan a fix for that type before the next test.',
    },
    {
      d: 'thoughts',
      text: 'I judge my day by whether I met my study targets, not only by marks.',
      tip: 'Set two or three small targets each morning, such as one chapter and one set of questions, and tick them at night. A day with all ticks is a good day, whatever the next test says.',
      up: 'On Sunday night, count the days that had all ticks this week and move the target you skipped most to the first slot of tomorrow morning.',
    },
    {
      d: 'thoughts',
      text: 'I keep replaying my mistakes from earlier exams in my head.',
      reverse: true,
      tip: 'Write the mistake once with one fix next to it, for example reading the question twice or watching the clock. Then close the page. When the thought returns, tell yourself the fix is already written.',
      up: 'When a replay starts, open the fix you wrote for that mistake, read it aloud once and begin a ten minute study task straight away, so the replay has a next step.',
    },
    {
      d: 'thoughts',
      text: 'When a worry about the exam comes up, I ask myself what I can actually do about it this week.',
      tip: 'Keep a small notebook. Draw a line down the page: worries on the left, one action you can take this week on the right. If there is no action, mark it as not in your control and move on.',
      up: 'Every Sunday, read last week\'s worry page: tick the actions you did, and for each one you did not do, book a time for it or write not in my control beside it.',
    },
    {
      d: 'thoughts',
      text: 'I feel that one bad paper or one bad result will ruin my whole future.',
      reverse: true,
      tip: 'Write down two other routes that stay open if this exam goes badly, such as a repeat attempt, a related course or a different entry exam. Talk to a teacher or counsellor to check them. Knowing a next step exists lowers the weight of one paper.',
      up: 'When the thought of one result ruining everything comes, read your list of other routes once and add one detail to it, such as a date, a course page or a teacher to ask.',
    },
  ],
  body: [
    {
      d: 'body',
      text: 'On most days in exam weeks I go to bed and wake up at roughly the same time.',
      tip: 'Choose a sleep and wake time you can keep for the next fourteen days, set a phone alarm thirty minutes before bedtime to put books away, and keep the wake time even after a bad night.',
      up: 'Keep a tick chart of bedtime and wake time for two weeks, mark any day you slip by more than an hour and write the reason. Then fix the reason that repeats most.',
    },
    {
      d: 'body',
      text: 'I eat proper meals at regular times even on heavy study days.',
      tip: 'Fix three meal times and keep a simple option ready, such as roti with sabzi, dal rice, curd rice, idli, eggs or fruit, whatever is easy at your place. Eat away from your desk and phone for at least ten minutes.',
      up: 'Set your three meal times as phone alarms for exam weeks, and get tomorrow\'s easy meal option ready the evening before so a heavy study day does not decide your meals.',
    },
    {
      d: 'body',
      text: 'I stay awake most of the night before an exam to cover more topics.',
      reverse: true,
      tip: 'Decide a closing time for the night before, make a one-page sheet of formulas, dates or headings, read it once and sleep. A tired mind can misread questions you actually know.',
      up: 'Two nights before a paper, write the time you will stop and tell a family member or roommate. When the urge to go on comes at that time, close the book and start your sleep routine.',
    },
    {
      d: 'body',
      text: 'I rely on a lot of tea, coffee or energy drinks to get through study hours.',
      reverse: true,
      tip: 'For one week, keep to the cups you normally have, none after the afternoon, and when you want one more, drink water, wash your face or walk for five minutes instead. Notice how your evenings and sleep feel.',
      up: 'Note your cups in a notebook for one week, with the time of the last one. When you reach for an extra cup, drink water and wait ten minutes first, and ask a friend to remind you of your stop time.',
    },
    {
      d: 'body',
      text: 'On most days in exam weeks I move my body, even if it is only a short walk or some stretching.',
      tip: 'Add a twenty minute walk or stretch at the same time every day, such as right after dinner, since a fixed time is easier to keep. Between study blocks of forty to fifty minutes, take a five to ten minute break away from your phone.',
      up: 'Stretch the walk by five minutes or end it with a few simple stretches, and tick it in your timetable. Ask a friend or sibling to join you twice a week.',
    },
  ],
  paper: [
    {
      d: 'paper',
      text: 'In the exam I read the whole paper first and decide how much time each section gets.',
      tip: 'Practise this in every mock: spend the first five minutes reading, write the time budget next to each section, and note the finish time for each on the margin of the paper.',
      up: 'In the middle of each mock, check the time at the end of every section against your budget. Afterwards, change the budget for the section that ran over.',
    },
    {
      d: 'paper',
      text: 'If I am stuck on a question, I mark it and move on, then come back to it later.',
      tip: 'Set a rule before the exam: if a question has not moved in two or three minutes, put a small tick next to it and go on. Practise the rule in timed papers until it is automatic.',
      up: 'After each mock, count how many ticked questions you went back to and solved. If you rarely return to them, fix a time for it, such as the last fifteen minutes.',
    },
    {
      d: 'paper',
      text: 'If I go blank in the exam hall, I do not know what to do to get going again.',
      reverse: true,
      tip: 'Make a thirty second reset and use it in every practice paper: put the pen down, breathe out slowly for longer than you breathe in, read the question again, then write any one line you know about it. Having a script helps more than hoping it will not happen.',
      up: 'When you feel a blank starting in a mock, do the thirty second reset at once instead of pushing on, and note how long it took to get going again. Shorten the steps if it was slow.',
    },
    {
      d: 'paper',
      text: 'The evening before every paper, I pack my admit card and stationery and check how I will reach the centre.',
      tip: 'Make a checklist on a card and keep it in your bag: admit card, ID, pens, geometry box or calculator if allowed, water. Check the centre address and travel time the evening before.',
      up: 'Pack the bag the evening before using your card and tick each item, then ask someone at home to check your admit card too. After each paper, add anything you wished you had carried.',
    },
    {
      d: 'paper',
      text: 'I wait until all my exams are over before comparing answers with friends.',
      tip: 'Agree a rule with your friends: no answer comparing until the last paper is done. After each paper, spend ten minutes noting one thing to fix, and begin the next subject.',
      up: 'When friends start comparing answers, use one fixed line such as I will check after the last paper, and walk away. Spend those minutes on the next subject\'s one-page sheet.',
    },
  ],
  support: [
    {
      d: 'support',
      text: 'I have at least one person I can tell honestly how my preparation is going.',
      tip: 'Choose one person, a friend, sibling, teacher or cousin, and agree a fixed short chat each week. Say how many chapters you finished and how you are feeling, in plain words.',
      up: 'Make the weekly chat specific: share chapters done, mocks attempted and hours slept, and ask the person one question. Note one thing they said that you will try.',
    },
    {
      d: 'support',
      text: 'I can tell my family what kind of help I need, such as quiet time, meals on time or no comparisons.',
      tip: 'Write down two or three things that would help at home, such as a quiet hour or no questions about results during meals, and share them at one calm moment, not in the middle of an argument.',
      up: 'After a week, ask your family how your requests worked and what is still hard. Adjust one request and thank them for one thing they did, so the arrangement stays friendly.',
    },
    {
      d: 'support',
      text: 'When I am stuck on a topic, I ask a teacher, senior or study partner soon instead of waiting.',
      tip: 'Keep a list of doubts through the week, and take the whole list to one teacher, senior or study partner at a fixed time. Do not carry a doubt for more than a few days.',
      up: 'Set a three day limit for any doubt: if it is still open then, it goes on the list and to the teacher or partner that week. Write the answer you got beside the doubt.',
    },
    {
      d: 'support',
      text: 'I keep my worries to myself because I do not want others to think I cannot cope.',
      reverse: true,
      tip: 'Tell one trusted person one specific worry this week, for example that you are not sleeping before mocks. Saying it aloud often makes it lighter, and the person may help with something practical, like a quieter room or a doubt session.',
      up: 'The next time you say all fine and it is not true, add one honest sentence, such as preparation is slow this week. Say it to the same trusted person once a week.',
    },
    {
      d: 'support',
      text: 'At least once a week I spend time with friends or family doing something that has nothing to do with exams.',
      tip: 'Put one fixed slot in your weekly timetable for a family meal, a game of cricket or carrom, a film or a visit to a relative, and treat it like a class you do not miss. Rest that is planned in advance feels less guilty.',
      up: 'Decide the exact hours of your rest slot, switch off study group notifications in it and plan what you will do. Move it only if an exam is the next day.',
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
    metaTitle: 'Exam Stress Self-Assessment | Free Exam Stress Test',
    metaDescription:
      'Free exam stress self-assessment: 41 to 42 questions and five scores for preparation, worry, sleep and food, the exam hall and support. Instant result, no sign-up.',
    h1Lead: 'Exam Stress',
    h1Accent: 'Self-Assessment',
    eyebrow: 'Free exam stress test with a habit plan',
    heroSub:
      'Want to know how well your everyday habits are holding up under exam pressure? This free self-assessment looks at five areas, preparation, worry and self-talk, sleep and food, handling the exam itself, and getting support, and shows which habit to work on first. It is a habit check, not a medical or mental-health assessment.',
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
          'Most statements describe a healthy habit, such as a study plan, regular sleep or telling someone how you feel. Some describe an unwanted habit instead, such as staying awake all night before a paper or keeping worries to yourself. For those, saying they are not true for you raises your score, so a higher score always means healthier habits.',
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
          'A tool like this can only describe your habits. If your worry feels heavy, lasts for weeks, or stops you from sleeping, eating or studying, talk to a doctor, a school or college counsellor, or someone you trust. You do not need a low score, or any score, to ask for help, and asking early is never an overreaction. This page cannot tell you what is happening, and it does not try to.',
        ],
      },
    ],
    limits: [
      'This is not a medical or mental-health assessment. It does not diagnose anything, and it cannot say whether you have any health condition.',
      'It is a self-rating of everyday exam habits and shows only how you describe yourself today. A different day or a different exam week may give a different result.',
      'If you feel unable to cope, or have thoughts of harming yourself, please speak to a doctor, a counsellor or someone you trust. You can call Tele-MANAS on 14416, a free national helpline.',
      'Scores are not compared with other people, so there is no pass mark. A high score does not predict an exam result, and a low score does not predict one either. A high score also does not mean you should never ask for help.',
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
        a: 'Statements are rated from 1 to 5. The ones that describe an unwanted habit are reversed, so a higher score always means a healthier habit. In the situation questions each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
      },
      {
        q: 'What is a good score on an exam stress test?',
        a: 'There is no pass mark. Scores are only against your own answers and are not compared with anyone else. Use them to see which of the five areas has the most room for a small change.',
      },
      {
        q: 'Is it normal to feel stressed before exams, and when should I talk to someone?',
        a: 'Yes, feeling nervous before an important exam is common, and a little of it can keep you alert. You can talk to a teacher, a counsellor, a doctor or someone you trust at any time, and you do not have to wait until things feel unbearable. It is a good idea to do it sooner if worry is stopping you from sleeping, eating or studying for more than a couple of weeks. This test does not measure stress as a number. It shows how well your habits are set up to handle the pressure.',
      },
      {
        q: 'Can Class 10, Class 12, college and government exam students use it?',
        a: 'Yes. You choose your stage, whether Class 10 or 12 board exams, entrance preparation such as JEE, NEET or CUET, university semester exams, or government and competitive exams, and the advice in your report changes to fit.',
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
        href: '/services/assessments/time-management-self-assessment/',
        title: 'Time Management Self-Assessment',
        description: 'How you plan, prioritise and protect your hours, scored by area.',
      },
      {
        href: '/services/assessments/confused-about-career-after-10th-test/',
        title: 'Confused About Career After 10th Test',
        description: 'Find out what is really holding up your decision after Class 10.',
      },
      {
        href: '/services/assessments/study-habits-self-assessment/',
        title: 'Study Habits Self-Assessment',
        description: 'How you plan, focus and revise, scored by area.',
      },
      {
        href: '/services/assessments/resilience-and-growth-mindset-assessment/',
        title: 'Resilience and Growth Mindset Assessment',
        description: 'How you respond to setbacks and learn from them, scored by area.',
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
        body: 'Board results are talked about by family, neighbours and school, so a lot of the pressure can come from outside. The most useful work is a steady timetable, regular papers and a clear talk at home about what happens after the result.',
        actions: [
          'Write a timetable that works backwards from each paper date and keep one revision day in every week.',
          'Practise full papers with the exact time limit, writing answers the way your board expects, with steps and diagrams.',
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
          'Agree with your family how long you will go on and a fallback you are comfortable with, after checking the attempt and age limits in each official notification.',
        ],
      },
    ],
    tips: CORE_LIST.map((q) => q.tip),
    tipsUp: CORE_LIST.map((q) => q.up),
    strongTip: 'This is a healthy habit. Keep it going through the heaviest weeks of the exam period.',
    domains: {
      prep: {
        why: 'A lot of exam worry can come from not knowing where you stand. If you cannot say which five chapters are weakest, every chapter feels like a threat. A plan with dates, a green, amber and red list of topics and some timed practice turn a large fear into tasks you can finish one by one.',
        roles: [
          'Board exams, where every subject has a fixed paper date and syllabus',
          'Entrance and government exams, where long preparation needs a plan that survives bad weeks',
          'University semesters, where several papers fall close together',
        ],
        routine: [
          'Days 1 to 3: List every chapter of your subjects, mark each green, amber or red after five questions from it, and write the list on one page. Done when every chapter has a colour.',
          'Days 4 to 7: Put the red chapters into a dated plan, with the last days before the exam kept free for revision. Done when you can say what you will study on each of the next seven days.',
          'Days 8 to 11: Attempt one past paper under a timer without notes and sort each lost mark into concept, speed or carelessness. Done when you have three counts written at the top of the paper.',
          'Days 12 to 14: Revise two red chapters by closing the book and writing key points from memory, then update the plan for the next two weeks. Done when each chapter has a revision card with only the points you missed.',
        ],
        mistakes: [
          'Studying only the chapters you already like, because finishing them feels good, while the red chapters stay untouched until the last week',
          'Writing a timetable from five in the morning to eleven at night, so that one missed hour makes you give up the whole plan',
          'Highlighting and re-reading notes three times and calling it revision, without ever closing the book to check what you remember',
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
        why: 'The way you talk to yourself about marks, results and family hopes affects how you feel and how well you study. A student who thinks "one bad test means I am finished" may avoid looking at the paper and so learn nothing from it. Worry that is written down with one action beside it is easier to handle than worry that circles in your head at night.',
        roles: [
          'The days after a bad mock test or class test',
          'The weeks before results, when family and neighbours ask questions',
          'Repeat attempts, where memories of an earlier result come back',
        ],
        routine: [
          'Days 1 to 3: Start a worry notebook with two columns: the worry, and one action you can take this week. Done when at least three worries each have an action or a note saying not in my control.',
          'Days 4 to 7: Each morning write two or three small targets, such as one chapter and ten questions, and tick them at night. Done when you have four days of ticks to look at.',
          'Days 8 to 11: After any test, set a twenty minute timer, write three mistakes and one fix, then close the notebook and do something ordinary. Done when the timer ends and the page is closed.',
          'Days 12 to 14: Write down two other routes that would stay open if this exam goes badly, and check them with one teacher, counsellor or senior. Done when each route has a name, an entry condition and a date.',
        ],
        mistakes: [
          'Telling yourself after one weak mock that you are not a person who can clear this exam',
          'Lying in bed replaying a silly mistake from the last paper instead of writing one fix on paper and stopping',
          'Comparing your worst day with the marks or study hours another student posts in a group chat',
        ],
        proof: [
          'A worry notebook with actions next to the worries',
          'A short list of other routes you have checked with a teacher or counsellor',
          'A week of ticked daily targets',
        ],
        askOthers: 'When I talk about my exam, does my worry sound like it is taking over, and what would you do in my place?',
        talkingPoints: [
          'You separate what you can act on from what you cannot control',
          'You learn from a poor result without punishing yourself',
          'You know that other routes stay open',
        ],
        midStep: 'Pick one worry that keeps returning and write down the one action you can take about it this week, then do it.',
      },
      body: {
        why: 'Sleep, meals, movement and breaks are often the first things given up in exam weeks. A student who skips lunch and sleeps four hours may feel busy but often reads the same page three times. A body that is rested and fed usually finds it easier to concentrate and to stay calm in the hall.',
        roles: [
          'Pre-board and board weeks, when late nights are common',
          'Long entrance preparation, where an unsustainable routine wears you down',
          'Studying after a day of work for government exams',
        ],
        routine: [
          'Days 1 to 3: Choose a sleep and wake time you can keep, and set an alarm to put books away thirty minutes before bed. Done when you have slept and woken within half an hour of those times on three days.',
          'Days 4 to 7: Fix three meal times and keep a simple meal ready, eating for at least ten minutes away from your desk and phone. Done when you have not skipped a meal for four days.',
          'Days 8 to 11: Add a twenty minute walk or stretch at a fixed time and a five to ten minute break after each study block. Done when the walk is ticked in your timetable on three days out of four.',
          'Days 12 to 14: Keep tea, coffee or energy drinks to your usual amount and none after the afternoon, and write down your plan for the night before your next paper. Done when the plan names a closing time and a one-page revision sheet.',
        ],
        mistakes: [
          'Staying up the whole night before a paper to read one more chapter, then misreading the questions in the morning',
          'Skipping breakfast or lunch to save thirty minutes, then feeling dull and headachy by the afternoon',
          'Adding a fourth and fifth cup of tea or an energy drink at night to keep going, then not being able to sleep',
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
        why: 'Marks are also lost by poor time use, by staying too long on one question, or by arriving flustered. A student may know the answers to the last section but never reach it because the first hard question took twenty minutes. A routine for the paper and a plan for the moment you freeze can be practised long before the real exam.',
        roles: [
          'Board exams with a fixed time per paper and a set answer style',
          'Entrance exams with many questions and tight time per question',
          'Semester exams where several papers follow each other in a few days',
        ],
        routine: [
          'Days 1 to 3: Make an exam-day checklist card and a time budget for each section of your next paper. Done when the card is in your bag and the budget is written on a past paper.',
          'Days 4 to 7: Do one timed paper using the budget, and put a tick beside any question where you are stuck for two or three minutes. Done when you have written the finish time of each section on the paper.',
          'Days 8 to 11: Practise a thirty second reset in two timed papers: pen down, slow breath out, reread the question, write one line you know. Done when you have used it at least once on purpose in each paper.',
          'Days 12 to 14: Do a full dress rehearsal for one paper: pack the bag the evening before, work out the route and travel time, and sleep at your normal time. Done when you reach the venue, or the same time on the clock at home, calmly and early.',
        ],
        mistakes: [
          'Starting to write the first answer in the first minute, without reading the rest of the paper',
          'Spending too long on one hard question and rushing the rest',
          'Standing outside the hall comparing answers, then walking into the next paper worried about marks already lost',
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
        why: 'Carrying exam worry alone can make it feel heavier. A student who tells a cousin "I am not sleeping before mocks" may get a practical answer, like a quieter room or a shared study hour. Telling one trusted person, asking about doubts early and keeping some time for rest and company make a long preparation easier to bear.',
        roles: [
          'Home, where hopes and comparisons can add to the pressure',
          'School, college or coaching, where teachers and seniors can answer doubts',
          'Repeat attempts, where you may feel you have let others down',
        ],
        routine: [
          'Days 1 to 3: Choose one person to talk to weekly and fix a day and time for a short check-in. Done when the person has said yes and the slot is in both your diaries.',
          'Days 4 to 7: Tell your family two practical things that would help, such as a quiet hour or no result questions at meals. Done when they have said what they will do about each.',
          'Days 8 to 11: Collect your doubts in a list and take them to a teacher, senior or study partner in one session. Done when each doubt on the list is ticked off or has a date for follow-up.',
          'Days 12 to 14: Plan one weekly slot of at least an hour for something that has nothing to do with exams, and keep it. Done when you have taken that slot once without studying during it.',
        ],
        mistakes: [
          'Saying "all fine" when someone asks, because you do not want to seem weak',
          'Carrying a doubt on one chapter for weeks, hoping it will not come in the paper',
          'Cutting off friends and family completely until the exam is over, and then feeling alone and low on energy',
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
    { ...x(
      ['board'],
      'prep',
      'I know the syllabus, marking scheme and sample paper of my board for each subject.',
      'Download the latest syllabus and sample paper from your board\'s official website, or ask your school for them, and note the marks for each section so you spend time where the marks are.',
    ), up: 'Make a one-page sheet for each subject with the marks per section and the chapters they come from, then ask a teacher to confirm it matches the current syllabus and your sample paper.' },
    { ...x(
      ['board'],
      'thoughts',
      'I feel that my family\'s respect for me depends on my board marks.',
      'Ask one family member what they are hoping for beyond the marks, and listen to the answer. Then tell them your own target and what you are doing about it, so the talk is about a plan and not only about a number.',
      true,
    ), up: 'When the thought that your family\'s respect depends on marks arrives, write one thing they have said or done that shows otherwise, and share your plan with the family member you trust most.' },
    { ...x(
      ['board'],
      'body',
      'I keep my sleep time steady in pre-board and board weeks even when classmates stay up late.',
      'Tell your friends your sleep time and stick to it. If a late-night group session leaves you tired for the next day\'s paper, offer to meet in the afternoon instead.',
    ), up: 'Tell one friend and one family member your fixed sleep time. When plans change, message the friend, and note in a diary any night you slipped and what caused it.' },
    { ...x(
      ['board'],
      'paper',
      'I practise writing full answers within the time limit, including diagrams, steps and neat presentation.',
      'Write at least one full paper per subject by hand in the real time, then ask a subject teacher to read it as a marker would and tell you where the answers could be clearer, shorter or better laid out.',
    ), up: 'Once a week, compare one of your answers with the marking scheme or a model answer and mark where steps or diagrams were missing. Do this for a different subject each time.' },
    { ...x(
      ['board'],
      'support',
      'My parents and I have talked about what the plan is after the board results.',
      'Sit with your parents once before the exams and write two or three options, such as the stream, a college or a repeat or supplementary exam if your board allows it (check its official rules), so that the result is a choice between options, not the end of them.',
    ), up: 'Return to the written options with your parents a few weeks before the exams, update them with anything new, and fix a date for the next talk.' },
    // Entrance
    { ...x(
      ['entrance'],
      'prep',
      'After each mock test I study the kind of mistakes I made, not only my score.',
      'Make a mistake log with three columns: concept gap, speed, carelessness. Spend the first hour after each mock on it, and plan the week from the biggest column.',
    ), up: 'Review the mistake log every Sunday for ten minutes, see which column grew and set one fix for the week, such as a timed set for the speed column. Check it again after the next mock.' },
    { ...x(
      ['entrance'],
      'thoughts',
      'One bad mock test makes me doubt whether I should continue my preparation at all.',
      'Write down your last four or five mock results and notice the pattern, not just the last one. Decide any big question like continuing or changing plans only after talking to a teacher or mentor, never on the evening of a bad mock.',
      true,
    ), up: 'On the evening after a bad mock, write the decision you are tempted to make and the date you will talk to your mentor about it. Read your last results page and decide only after that date.' },
    { ...x(
      ['entrance'],
      'body',
      'My weekly schedule has a lighter half-day or a full break that I actually take.',
      'Mark one half-day as a fixed rest slot in your timetable for the next month, with no mock tests or solving. A routine you can keep for many months matters more than a few heroic weeks.',
    ), up: 'Plan the rest half-day the day before, such as a film, a visit or a match, and tell someone at home. If you studied during it, note why and protect the next one.' },
    { ...x(
      ['entrance'],
      'paper',
      'I have decided in advance how I will choose questions in the paper and when I will skip.',
      'In your next three mocks, try one strategy: a first pass for easy questions, a second pass for medium ones, and skip the rest. Check your exam\'s marking scheme for negative marking before deciding how much to guess, and keep the strategy that works for you.',
    ), up: 'After each mock, note how many questions you skipped, how many you went back to and what the skipped ones were worth. Adjust your first-pass limit from that.' },
    { ...x(
      ['entrance'],
      'support',
      'I have a Plan B that I have discussed with my family, so the exam does not feel like all or nothing.',
      'Write a short Plan B with your family, for example another entrance exam, a related course or one more attempt where the rules allow it, and read it once a month. Having it written lowers the pressure on each mock.',
    ), up: 'Look at your Plan B list after every second mock and ask a family member or mentor one question about it. Add the dates or application steps for the first option.' },
    // College
    { ...x(
      ['college'],
      'prep',
      'I leave most of my study for the last few days before semester exams.',
      'This week, give one evening to each subject and read through its units once, noting what you do not follow. A first pass spread over the term means the last week is for revision, not for reading the syllabus for the first time.',
      true,
    ), up: 'Put a fixed weekly slot for one subject on your timetable, such as Sunday afternoon, and tick it. When the urge to postpone comes, do the first twenty minutes and then decide.' },
    { ...x(
      ['college'],
      'prep',
      'When papers fall close together, I give more revision days to the harder subjects instead of splitting time equally.',
      'Rank your subjects from hardest to easiest for you and allot days in that proportion. Put the hardest paper\'s revision first, and a lighter subject close to its paper.',
    ), up: 'After the first revision days for a hard subject, test yourself with ten past questions to see if the days were enough. Move a day from an easy subject if not.' },
    { ...x(
      ['college'],
      'thoughts',
      'A backlog or low marks in one subject makes me feel I am behind everyone else.',
      'Write down what the backlog needs, such as which paper, which attempt and which dates, and the next step. Talk to your class mentor or the exam section, because the backlog rules differ between universities and are best read in your own university\'s notice.',
      true,
    ), up: 'When the feeling of being behind comes, open your backlog page and do the next step on it, even if it is only a message or a form. Ask a senior how they cleared theirs.' },
    { ...x(
      ['college'],
      'body',
      'In semester exam weeks I skip proper meals and live on snacks and tea.',
      'Before the first paper, arrange two proper meals a day with your hostel mess, canteen or home, and keep fruit or roasted chana for the study hours. Tea can stay, but not as a meal.',
      true,
    ), up: 'Keep fruit or roasted chana in your bag. When you notice by afternoon that you have skipped a meal, make a proper meal your next break, with a friend if possible.' },
    { ...x(
      ['college'],
      'support',
      'I talk to my class teacher, mentor or a senior about a weak subject early in the semester.',
      'Within the next week, meet the teacher of your weakest subject and ask what the important topics are and where students usually lose marks. Ask a senior for old question papers and tips.',
    ), up: 'Book the meeting with your teacher or mentor now and take a list of three questions. Afterwards, write the answer you got and what you will do about it.' },
    { ...x(
      ['college'],
      'paper',
      'I have looked at previous papers of each subject to see how marks are divided across units and question types.',
      'Collect three previous papers per subject from the department, library or a senior. Mark which units come up often and how long the answers are expected to be, then plan your revision around that pattern and not around the whole book equally.',
    ), up: 'After studying the previous papers, write a one-page table of units against marks and show it to a senior or teacher to check that it matches what they have seen.' },
    // Govt
    { ...x(
      ['govt'],
      'prep',
      'My study hours fit around my job or other duties, and I can keep them most days.',
      'Count the hours that are really free on a weekday and on a weekend, and plan only about three-quarters of them. A plan you can keep beats a plan that breaks in the first week.',
    ), up: 'Track the hours you actually study for two weeks and compare them with your plan. If you missed it repeatedly, cut the plan to the lower number, then add back thirty minutes.' },
    { ...x(
      ['govt'],
      'thoughts',
      'After a failed attempt, I can look at what went wrong without blaming myself for everything.',
      'Within two weeks of a result, write three things that cost marks or time and two things that went well. Change only two things in the next attempt, instead of rebuilding everything.',
    ), up: 'Share your list of what cost marks with a friend who attempted the same exam, or a mentor, and ask what they would change. Put the two changes in your timetable with dates.' },
    { ...x(
      ['govt'],
      'thoughts',
      'I feel guilty whenever I rest, because other aspirants are studying.',
      'Treat your rest as part of the plan: put a fixed rest slot in the week and tell yourself it is part of the schedule. Long preparation depends on steady energy, not on the number of hours others claim.',
      true,
    ), up: 'When guilt comes during rest, check whether the day\'s study blocks are done. If they are, tell yourself this is planned rest. If not, shift a study block, not the rest.' },
    { ...x(
      ['govt'],
      'body',
      'I protect my sleep even when I study after a day at work.',
      'Set a hard stop for evening study, a fixed time you will be in bed, and plan the next day\'s topic before you stop so you do not lie awake thinking about it.',
    ), up: 'Check your sleep record weekly. If the stop time slipped on more than two days, start study thirty minutes earlier, and keep the next day\'s topic note on your desk so stopping is easier.' },
    { ...x(
      ['govt'],
      'paper',
      'I know which sections cost me time or marks in my last attempt and have a plan for them.',
      'Take your last paper or your latest mock and mark the time spent against the marks gained in each section. Set a time limit for the weakest section and practise it separately for two weeks.',
    ), up: 'Redo the weakest section of one paper under a timer every week, writing down the time and score each time. After two weeks, see whether the time limit still fits.' },
    { ...x(
      ['govt'],
      'support',
      'My family and I have agreed how long and how many attempts I will go on, and a fallback we are comfortable with.',
      'Choose a calm time and ask your family what limits and fallback options they can accept. Check the attempt and age limits in the official notification of your exam, and write the plan down together. A shared plan can ease the feeling of unspoken pressure.',
    ), up: 'Review the agreement with your family every few months and after each attempt, confirm that the limit and fallback still work, and note any change in the official notification.' },
  ],

  stageAdvice: {
    board: {
      prep: sa(
        'Board exams come with a fixed syllabus, a date sheet and a lot of voices telling you what to study.',
        'Work backwards from each paper date and give every subject a revision day in each week until the exams.',
        'Use your board\'s sample papers and earlier years\' papers to see how questions are asked, and practise those instead of collecting more guides.',
      ),
      thoughts: sa(
        'Board results are discussed by family, neighbours and school, so worry often comes from what others may say.',
        'Write down what you think is a fair target for yourself and share it with your parents before the exams.',
        'When someone compares you with a cousin or a topper, answer with your own plan for the next week and leave it there.',
      ),
      body: sa(
        'Pre-board and board weeks often mean late nights, tuition and few meals at normal times.',
        'Keep the same sleep time through the whole exam period and set the night before each paper as an early night.',
        'Eat regular meals at fixed times, whether at home, in a hostel mess or from a tiffin, and carry water and a light snack for long exam days.',
      ),
      paper: sa(
        'Board papers reward complete, well-presented answers and good time use across long papers.',
        'Practise writing full papers by hand, with diagrams and steps shown, in the exact time of your board paper.',
        'Keep a few minutes at the end for rechecking, and rehearse that in your practice papers.',
      ),
      support: sa(
        'Parents often worry because they care, and they may not know how to help without adding pressure.',
        'Tell your parents one thing that would help, such as quiet study time or no result talk at meals.',
        'Take a doubt list to your subject teacher every week, since many schools hold extra classes or doubt sessions before boards.',
      ),
    },
    entrance: {
      prep: sa(
        'Entrance preparation is long, with a large syllabus and frequent mock tests, whether you follow a coaching schedule or study on your own.',
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
        'You may be living away from home, in a hostel or paying guest room, or studying alone at home for months, with little time for friends and family.',
        'Fix a regular call with someone at home and talk about more than marks.',
        'Find one study partner or senior, in person or on a call, with whom you can speak honestly about the pressure.',
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
        'Arrange proper meals through the day before the first paper, from the mess, canteen or home, and keep fruit or roasted chana for study hours.',
        'Skip the all-night group session before a paper and use that time for a final one-page revision and sleep.',
      ),
      paper: sa(
        'University papers may weigh long answers, numericals and definitions differently in different subjects.',
        'Look at three previous papers of each subject to see how marks are divided and how long answers should be.',
        'Between papers, use the gap for the next subject and avoid long chats about the previous paper.',
      ),
      support: sa(
        'Class sizes are large and teachers may not notice who is struggling unless you tell them.',
        'Ask your weakest subject\'s teacher for ten minutes after class, or ask a classmate to study with you, before the exam week starts.',
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
        'Many government exams have stages such as a preliminary test, a main exam or an interview, each with a different style and time pressure.',
        'Practise the exact pattern of the stage you are preparing for, with sectional time limits.',
        'Check the exam centre address and travel time the day before, since centres can be far from where you live.',
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
      o('Begin with the first chapter tonight and study long hours every day, planning to make a proper timetable after a couple of weeks', 33, 'Starting is a good instinct, but two weeks without a plan can leave the last chapters for the final days. Spend thirty minutes tonight counting chapters and days, then write each chapter against a date.'),
      o('Spend this week collecting the best notes, guides and video playlists for every chapter, and make the plan once you have everything', 0, 'Collecting feels like progress, but the plan is what tells you which material you will actually use. Tonight, write the chapter list and the days left on one page, even roughly, and choose material only for the chapters you will study first.'),
      o('Ask a friend who did well last year for the timetable they followed, and follow the same order', 67, 'A topper\'s timetable is a useful sample of how long things take. It was built around their gaps, though, so move your weak chapters earlier and keep the rest.'),
      o('Count the chapters and days, then write a dated plan with revision days kept free', 100, 'Dates turn the syllabus into tasks you can finish. Keep the last three or four days empty so that lost days do not break the plan, and look at it again after one week.'),
    ]),
    sc('prep', 'You have a mock paper tomorrow morning. Your notes are not complete. What do you do?', [
      o('Ask your teacher if you can sit the next mock instead, so that you can finish your notes and take it fully prepared', 33, 'Wanting to be prepared is natural, but a mock is where gaps show up. Sit this one, and spend the evening afterwards on the topics where marks were lost.'),
      o('Sit the mock as it is, then spend the evening on the topics it shows you missed', 100, 'A mock exists to show what you do not know, and incomplete notes are one of those things. Write down the lost topics straight after and fix the biggest one first.'),
      o('Sit the mock with your notes beside you for questions you cannot recall, and mark those questions clearly', 67, 'Marking the questions you needed notes for is a smart half-step. Next time, try one section without notes, since only that tells you what you can actually recall in the hall.'),
      o('Stay up late to complete the notes tonight so that you can sit the mock feeling fully prepared', 0, 'A short night usually brings a poor mock and a misleading score. Set a stopping time now, sleep, and treat the gaps in the notes as the list of things to learn next.'),
    ]),
    // thoughts
    sc('thoughts', 'You score much lower than you expected in a class test, two weeks before the exam. What is your first move?', [
      o('Take it as a sign you are not ready and start thinking about writing the exam next year instead', 0, 'One test two weeks out is too little to decide a year. Go through the paper, ask your teacher where the marks went, and take any big decision only after that.'),
      o('Ask a friend who scored well to show you how they answered the questions you lost marks on, and copy their method', 67, 'Seeing a better answer is useful. Pair it with your own review: write three mistakes you made, so that you fix your habit and not only that one answer.'),
      o('Put the paper away for now and look at it after the exam, since there is little time left to dwell on it', 33, 'Protecting your time is reasonable, but the paper holds the cheapest lessons you will get before the exam. Give it twenty minutes with a timer, then close it.'),
      o('Spend twenty minutes sorting the mistakes into types, choose one to fix this week, then return to your plan', 100, 'You treated the test as information, which is what keeps one low score from spreading into a week of doubt. Put the chosen fix at the top of tomorrow\'s targets so it actually happens.'),
    ]),
    sc('thoughts', 'At night you keep thinking about how your parents will react if you do badly. What helps most?', [
      o('Remind yourself that you must score well to make your parents proud, and use that feeling to keep studying', 33, 'Fear can push you for a few days, but it also tires you and makes mistakes feel heavier. Turn it into one honest talk with your parents about what they really expect.'),
      o('Write the worry on paper with one action for tomorrow, such as telling your parents your target, then go to sleep', 100, 'Writing it down with an action gives the worry a place to stay till morning. Do the action in daylight, because a calm talk usually shows that your parents want less than you imagine.'),
      o('Get up, tidy your desk and plan tomorrow\'s hours so that your mind has something to hold on to', 67, 'A plan for tomorrow does steady the mind. The worry itself is still unspoken, so add one line about what you will say to your parents and when.'),
      o('Scroll through toppers\' routines and motivational videos until you feel inspired enough to sleep', 0, 'Other people\'s routines can leave you comparing, and the screen pushes sleep later while the worry stays where it was. Keep a notebook beside the bed and write the worry and one action there instead.'),
    ]),
    // body
    sc('body', 'It is the night before an important paper and you feel you have not revised the last two chapters. What do you do?', [
      o('Study through the night, since those two chapters could carry many marks, and rest after the paper', 0, 'Marks from two chapters are lost if a sleepless mind misreads the questions on the whole paper. Pick a closing time now and let the rest go.'),
      o('Sleep early and trust that what you studied earlier will come back in the hall', 33, 'Rest is right, but you can use twenty minutes first. Skim the headings and key formulas of those chapters once, which is enough to make them feel less strange.'),
      o('Make a one-page sheet of the key points from those chapters, read it once and sleep at your usual time', 100, 'A sheet gives you a quick, calm last look, and sleep protects everything else you know. Pack your bag before you sleep so that nothing else is left for the morning.'),
      o('Study until midnight, then sleep for six hours so that you are not too tired in the morning', 67, 'Six hours is far better than none, but an earlier cut-off would be better still. Decide the time today, and set an alarm that tells you to close the books.'),
    ]),
    sc('body', 'Your studies are heavy this week and you notice you are skipping lunch and drinking more tea. What do you do?', [
      o('Skip lunch on heavy days to gain study time, and eat a big dinner when the day\'s work is done', 0, 'Long gaps without food tend to bring a dull, sleepy afternoon, which costs more study time than lunch takes. Pick a lunch hour and guard it, even if it lasts only fifteen minutes.'),
      o('Fix three meal times, keep something simple ready, and eat for ten minutes away from your books', 100, 'A fixed time takes away the daily decision, and eating away from the desk gives your mind a short rest too. Tell someone at home your meal times so that they ask you if you miss one.'),
      o('Eat lunch at your desk with a book open, so that the meal happens and no study time is lost', 67, 'The meal does happen, which is the main thing. Without a break, though, you barely notice what you eat and your mind gets no rest, so sit away from the desk for even ten minutes, with a plate of curd rice or roti and sabzi.'),
      o('Have tea and biscuits or an energy drink at your desk so that you do not lose study time', 33, 'It gives quick energy and keeps the clock moving, but it does not feed you for long hours and can disturb sleep. Keep tea as a drink, not as a meal.'),
    ]),
    // paper
    sc('paper', 'Ten minutes into the paper you find you cannot recall the answer to the first question and your mind feels blank. What do you do?', [
      o('Close your eyes and try hard to picture the page in your notes where this topic appears, until the answer comes back', 33, 'Picturing the page can help for a few seconds, but it can also eat many minutes while panic grows. Give it a short try, then move to a question you can do.'),
      o('Keep trying to recall that one answer for as long as it takes, since you do not want to leave the first question blank', 0, 'Each minute spent staring raises panic and uses time from questions you can answer. Set a two minute limit, tick the question and go on.'),
      o('Pen down, a slow breath out, reread the question, write one line you know, then move on if still stuck', 100, 'A fixed reset gives your mind something to do besides panic, and the first line often starts the recall. Practise it in the next two mocks so that it comes naturally in the hall.'),
      o('Move straight to the easiest question on the paper and come back to the first one if time is left', 67, 'Starting with an easy question is a sound way to settle yourself. Tick the skipped question so you do return to it, and take one slow breath before you start the next, since moving on in a hurry can carry the panic with you.'),
    ]),
    sc('paper', 'The first paper went badly and the second paper is tomorrow. Your friends are outside comparing answers. What do you do?', [
      o('Stay with your friends and compare answers so that you know your likely marks, then study with that figure in mind', 0, 'Comparing answers feels like it removes uncertainty, but it often creates false worry, since you can be wrong or they can, and you cannot change the paper now. Walk away at the first mention of answers.'),
      o('Go home, write down one thing to fix from the paper, and start on tomorrow\'s subject', 100, 'You have put your attention on the paper you can still influence. Keep the written fix on a card for after the exams, and set a time to begin tomorrow\'s revision.'),
      o('Call a parent or sibling as soon as you get home and tell them honestly that it went badly, then start on the next subject', 67, 'Telling someone close can lighten the weight. Keep the call short and say what you are doing next, so that the talk does not turn into an hour of worry.'),
      o('Sit down tonight and go through the whole bad paper question by question to find exactly where the marks went, before opening tomorrow\'s subject', 33, 'Reviewing is useful, but not the night before another paper, when it only eats the hours and the calm you need. Write one line on what to fix, keep the detailed review for after the last exam, and revise tomorrow\'s subject now.'),
    ]),
    // support
    sc('support', 'You feel very worried about the exam, but your friends say they are fine. What do you do?', [
      o('Keep it to yourself, because you do not want friends to think you cannot cope', 0, 'Hiding it makes it feel heavier and you may find the others are also pretending. Choose one friend or family member and say one honest sentence.'),
      o('Post in a group chat or on social media asking if anyone else feels worried, and see who replies', 33, 'You may get quick replies, but a post rarely gives steady support and many people will read it. Pick one person and speak to them directly.'),
      o('Tell your teacher if the worry stays for another few days, and ask how other students in previous years managed', 67, 'Teachers have seen many students in your position, so this works. Do not wait for days, though, because a small word early costs less than a bigger one later.'),
      o('Tell one trusted person you are worried and ask if you can study together once a week', 100, 'One honest conversation and a fixed weekly time turn a private worry into something shared. If the worry does not ease, or it starts to affect your sleep, eating or studying, speak to a school or college counsellor or a doctor without waiting.'),
    ]),
    sc('support', 'Your relatives keep asking about your target marks or rank. It makes you tense. What do you do?', [
      o('Give one short, friendly answer such as "I am following my plan and will tell you after the results", and repeat it each time', 100, 'A short, ready answer lets you end the topic without a fight. If the questions continue, ask your parents to change the subject for you.'),
      o('Stay in your room whenever relatives visit, so that nobody gets a chance to ask', 67, 'Avoiding the questions for a few days is fine, but staying away from everyone can leave you lonely. Join for tea or a meal, and have your one sentence ready.'),
      o('Tell them firmly that you will not discuss exams at all and leave the room whenever it comes up', 33, 'Wanting to protect your time is fair, but walking out adds tension at home and the questions usually come back at the next visit. A short, friendly line does the same job with less cost.'),
      o('Give them a high target so that they feel happy and stop asking for now', 0, 'A high number only raises the pressure on you, since the question returns later with a larger expectation. A modest honest answer keeps your load lower.'),
    ]),
    // stage-specific
    {
      ...sc('thoughts', 'It is two weeks before your board exams. A relative says your whole future depends on your marks. How do you take it?', [
        o('Take it seriously, add two more hours to each day and cut down on sleep and meals to be safe', 0, 'Marks matter, but your future depends on many choices, including what you do after the result. Keep a steady timetable with sleep, since tired study earns less.'),
        o('Listen, thank them for their concern, then ask a teacher or counsellor what options exist after different results', 100, 'Finding out the options after different results turns a vague fear into facts. Write two or three of them on a page and show it to your parents.'),
        o('Explain why marks are not everything, and that there are many paths after the boards, so that they stop saying this', 33, 'You may well be right, but arguing with a relative rarely changes them and costs you an evening. Answer in one line, and put the energy into finding out the real options from your teacher.'),
        o('Smile, say nothing and carry on with your timetable, trying not to think about results', 67, 'Staying steady is a good response. The fear may still sit there unspoken, so spend ten minutes asking a teacher what happens after a weaker result.'),
      ]),
      stages: ['board'],
    },
    {
      ...sc('prep', 'Three weeks before your entrance exam, your mock marks have not improved for a month. What is the best response?', [
        o('Change your books and study plan completely, since a month without progress means the present method is not working', 33, 'A fresh start feels strong, but three weeks is too short to learn a new system. Find the pattern first and change only one or two things.'),
        o('Look at your last four or five mocks for your main type of mistake, fix that, and keep the rest of your plan', 100, 'The answer is already inside your papers. Count how many marks went to concepts, speed and carelessness, and give the largest count your next week.'),
        o('Add an extra hour daily for questions from your weakest chapters, and review the plan again after the next mock', 67, 'Targeted extra time can help. Before you add the hour, check whether the lost marks come from those chapters at all, or from speed and silly errors.'),
        o('Skip mocks for a week to protect your confidence', 0, 'A break from mocks calms the mind for a few days but removes your best information. Keep them, and spend more time reviewing each one than writing it.'),
      ]),
      stages: ['entrance'],
    },
    {
      ...sc('prep', 'Your semester has four papers in six days, one of which you find very difficult. How do you plan?', [
        o('Start your revision with the difficult subject and finish it first, then go through the others in the order of their dates', 67, 'Giving the hardest subject first is sensible, but if its paper comes late you may forget it. Plan a second short revision just before its date.'),
        o('Divide the days equally among the four papers so that nothing is left out, in the order of the dates', 33, 'Equal time feels fair but does not match your needs. Take a day from the subject you know best and give it to the difficult one.'),
        o('Work backwards from each paper date, give the difficult subject the extra days, and look at it again briefly before its paper', 100, 'This respects both the dates and your own difficulty. Write it as a table of days and subjects, and stick it where you study.'),
        o('Revise your strongest subjects first to build confidence and leave the difficult one for the last two days', 0, 'Easy wins feel good, but the difficult subject then gets the least time and the most panic. Give it the first block of days and a short second look before its paper.'),
      ]),
      stages: ['college'],
    },
    {
      ...sc('thoughts', 'Your result for a government exam you attempted for the second time was not selected. You have a job. What do you do first?', [
        o('Start preparing for the next attempt tomorrow morning, because time is passing and you cannot waste any of it', 67, 'The determination is useful, but without a review you may repeat the same plan. Spend a weekend on what happened first, then restart.'),
        o('Decide in this first week that government jobs are not for you and stop preparing completely', 33, 'Stopping can be a sound decision, but not one to take in the first week of disappointment. Give yourself some days and talk it over before deciding.'),
        o('Take a few days off, then write what cost marks in each section and decide with your family whether and how to continue', 100, 'A short rest and an honest review give you the facts to decide on. Involving your family means the decision, and the support after it, is shared.'),
        o('Say nothing to friends or relatives about it, and put your attention on work so that you do not have to answer questions', 0, 'Keeping the result hidden tends to make the disappointment heavier. Tell one person you trust and fix a day to review the attempt.'),
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
