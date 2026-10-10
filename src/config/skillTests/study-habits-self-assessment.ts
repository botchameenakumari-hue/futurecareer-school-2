// Study Habits Self-Assessment: a complete self-rating test bundle.
// General guidance only. Scores come only from the person's own ratings.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

const SLUG = 'study-habits-self-assessment';

export const bundle: SkillTestBundle = {
  test: {
    id: SLUG,
    slug: SLUG,
    pageUrl: `/services/assessments/${SLUG}/`,
    breadcrumbName: 'Study Habits Self-Assessment',
    metaTitle: 'Study Habits Self-Assessment | Free Study Habits Test',
    metaDescription:
      'Free study habits test: 40 questions and five scores for planning, focus, how you learn, revision and rest. Instant result with a two-week plan.',
    h1Lead: 'Study Habits',
    h1Accent: 'Self-Assessment',
    eyebrow: 'Planning, focus, learning method, revision and rest in one report',
    heroSub:
      'Many students work hard and still feel they are not studying the right way. This free self-assessment turns "how good are my study habits" into five concrete areas: planning, focus, how you learn, revision and rest. It shows which one to fix first, whether you are in school, preparing for an entrance or government exam, in college, or studying alongside a job.',
    stats: [
      { value: '40', label: 'questions' },
      { value: '5', label: 'habit areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five study habit areas from your own ratings',
      'About 8 minutes',
      'Where to fix first, with a two-week plan for your stage',
    ],
    reportTitle: 'Study Habits Report',
    reportFile: 'future-career-school-study-habits-report.pdf',
    reportKicker: 'STUDY HABITS REPORT',
    resultKicker: 'Your study habits result',
    scoreLabel: 'Overall study habits',
    bands: {
      high: 'A relative strength.',
      mid: 'Working, with room to improve.',
      low: 'This habit needs the most attention.',
    },
    domainsHeading: 'Five study habit areas this self-assessment covers',
    domainsIntro:
      'Hours of study matter less than how those hours are planned, protected, used and revisited. Each statement belongs to one of these areas, and your lowest area is the one to fix first.',
    domains: [
      {
        key: 'plan',
        name: 'Planning your study',
        short: 'Knowing what to study, when and for how long',
        strong: 'You know what you will study each day, you plan backwards from dates, and you do not leave hard topics for the last minute.',
        weak: 'You often decide what to study only after sitting down, or plans exist in your head and fall apart when the week gets busy.',
        plan: [
          'On Sunday, write the next seven days on one page: subject, topic and the time slot for each study block. Keep the page where you study.',
          'List every test, submission or exam date for the next two months and work backwards to decide when each topic must be finished.',
          'Put your hardest subject in your first study block of the day, not the last, for the whole two weeks.',
        ],
      },
      {
        key: 'focus',
        name: 'Focus and distractions',
        short: 'Staying with one task without drifting away',
        strong: 'You can stay with one topic for a full session, and you have set up your place and phone so that distractions are hard to reach.',
        weak: 'Phone, messages, videos or noise pull you away many times in a session, so long hours of sitting give you little real study.',
        plan: [
          'For the next two weeks, put your phone in another room or in a bag during study blocks. Keep it on silent and check it only at breaks.',
          'Study in short focused blocks of about 25 to 40 minutes with one clear task each, then take a five-minute break away from screens.',
          'Choose one fixed study spot and keep only the material for the current task on the table.',
        ],
      },
      {
        key: 'method',
        name: 'How you learn',
        short: 'Understanding, recalling and practising, not just reading',
        strong: 'You study actively: you explain topics in your own words, solve problems yourself and look for the reason behind a rule.',
        weak: 'You mostly read, highlight or copy, and you memorise without understanding, so topics feel known until a question is asked in a new way.',
        plan: [
          'After each topic, close the book and explain it aloud or on paper in your own words. Open the book only to check what you missed.',
          'For every hour of reading, spend at least as long solving questions or writing answers yourself before looking at solutions.',
          'When something does not make sense, write the exact doubt in one line and settle it the same day with a teacher, a friend or a different book.',
        ],
      },
      {
        key: 'revise',
        name: 'Revision and self-testing',
        short: 'Coming back to topics and checking what you remember',
        strong: 'You return to topics at spaced intervals, test yourself before looking at answers, and learn from the mistakes you make.',
        weak: 'You revise only near the exam, or you re-read until the page looks familiar without checking whether you can recall it.',
        plan: [
          'Book three short revision slots in each week: one for what you studied the previous day, one for the previous week and one for last month.',
          'Take one timed test or past paper section each week without notes, and mark it honestly the same day.',
          'Start a mistake notebook with the question, your wrong step and the correct step, and read it before every test.',
        ],
      },
      {
        key: 'care',
        name: 'Sleep, breaks and study conditions',
        short: 'Resting enough to keep studying well',
        strong: 'You sleep at fairly regular times, take real breaks, eat on time and study in a place that is comfortable enough to last.',
        weak: 'Late nights, skipped meals, long sessions without a break or a poor study spot leave you tired, so the hours you put in give less back.',
        plan: [
          'Fix one wake-up time and one lights-out time for the next two weeks and protect them on all days except real emergencies.',
          'At the end of every study block, stand up, drink water and move around for five minutes before sitting again.',
          'Fix your study spot: use light from above or from the side, keep your back supported and keep the screen or book at a comfortable height.',
        ],
      },
    ],
    questions: [
      { d: 'plan', text: 'I have a written weekly plan that says which subject or topic I will study on which day.' },
      { d: 'focus', text: 'I keep my phone out of reach while I study.' },
      { d: 'method', text: 'After studying a topic, I can explain it in my own words without looking at the book.' },
      { d: 'revise', text: 'I go back to each topic a few days after first studying it, to check what I still remember.' },
      { d: 'care', text: 'I go to sleep and wake up at fairly regular times on most days.' },
      { d: 'plan', text: 'I start each study session knowing exactly what I want to finish by the end of it.' },
      { d: 'focus', text: 'I can stay with one topic for a full study session without switching to something else.' },
      { d: 'method', text: 'I solve problems or write answers myself instead of only reading solved examples.' },
      { d: 'revise', text: 'I test myself with questions, past papers or sample tests before I look at the answers.' },
      { d: 'care', text: 'During long study sessions, I get up from my desk for a short break.' },
      { d: 'plan', text: 'I often sit down to study without having decided what I am going to study.', reverse: true },
      { d: 'focus', text: 'I check messages, reels or videos several times during a study session.', reverse: true },
      { d: 'method', text: 'I mostly study by reading or highlighting the same pages again and again.', reverse: true },
      { d: 'revise', text: 'I only start serious revision in the last few days before an exam.', reverse: true },
      { d: 'care', text: 'I stay up late studying on most nights.', reverse: true },
      { d: 'plan', text: 'I plan my study backwards from the dates of my upcoming tests and exams.' },
      { d: 'focus', text: 'I have a fixed place to study where I am rarely interrupted.' },
      { d: 'method', text: 'When I do not understand something, I find out the reason that day instead of just memorising it.' },
      { d: 'revise', text: 'I keep a written record of the mistakes I make in tests and practice.' },
      { d: 'care', text: 'I eat my meals on time on study days instead of skipping them.' },
      { d: 'plan', text: 'I keep putting off my most difficult subject until there is very little time left.', reverse: true },
      { d: 'focus', text: 'I can study a difficult topic with no video, music or social media running in the background.' },
      { d: 'method', text: 'I learn formulas, dates or definitions by rote without knowing why they work.', reverse: true },
      { d: 'revise', text: 'I feel I know a topic because it looks familiar, even when I have not tried to recall it.', reverse: true },
      { d: 'care', text: 'I study at a table or desk where I can sit comfortably.' },
    ],
    readingTitle: 'How to read your study habits result',
    readingSections: [
      {
        title: 'Habits are things you do, not how clever you are',
        body: [
          'Every statement describes something you do, such as writing a weekly plan or testing yourself before checking the answer. Because they are actions, they can be changed. A lower score means a habit you have not set up yet, not a limit on what you can learn.',
          'Rate what you do in an ordinary week, not in the week before an exam and not what you plan to do from Monday. Honest ratings show the real gap, and the advice is built from that gap.',
        ],
      },
      {
        title: 'Why these five areas',
        body: [
          'Planning decides what you study, focus decides how much of the time is real study, and method decides whether the study turns into understanding. Revision decides whether you still remember it later, and rest decides whether you can keep going for months.',
          'A weak area is often hidden by a strong one. A student with good planning and poor revision can study every day and still feel unprepared before a test. This is why the report shows five scores and not one.',
        ],
      },
      {
        title: 'Fix one area at a time',
        body: [
          'Start with your lowest area and run its two-week routine before touching the others. Changing five habits at once usually fades by the end of the first week.',
          'Your stage matters too. A Class 10 student with school and tuition, a JEE or NEET aspirant balancing coaching and self-study, a college student facing internal assessments and a working adult with evening hours need different fixes for the same habit. The report adjusts the advice to the stage you choose.',
        ],
      },
      {
        title: 'Retake after a few weeks',
        body: [
          'Retake the self-assessment after you have followed the routine for a few weeks and compare area by area. Compare with your own earlier scores only. A change in the area you worked on is a useful sign, though your own record of tests and finished plans is a better check.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool and shows how you describe your own habits. It does not measure intelligence, ability or how well you will do in an exam.',
      'There is no pass mark. Scores are not compared with other people, only with your own answers and your own earlier results.',
      'It is not a medical or mental-health assessment. If you feel unable to cope with study pressure, are not sleeping or eating properly for a long time, or have thoughts of harming yourself, please speak to a doctor, a counsellor or someone you trust. You can call Tele-MANAS on 14416, the free national helpline.',
      'It does not know your syllabus, board, exam pattern or subjects, so use the advice to shape your routine and check specifics with your teacher or mentor.',
    ],
    faqs: [
      {
        q: 'What is a study habits test?',
        a: 'It is a way to rate the things you actually do when you study: how you plan, whether you stay focused, how you learn a topic, how you revise and whether you rest well. This one gives a score for each of the five areas from your own ratings and shows where to start.',
      },
      {
        q: 'Is this study habits assessment free?',
        a: 'Yes. You can take it, see your result and download the report without paying or signing up.',
      },
      {
        q: 'How good are my study habits? What is a good score?',
        a: 'There is no pass mark. Scores are only against your own answers, not against other students. A higher score in an area means that habit is already working for you, and your lowest area is simply the best place to begin.',
      },
      {
        q: 'How do I know if I am studying the right way?',
        a: 'Look at the method and revision scores first. If you mostly read and highlight, and rarely explain, practise or test yourself, long hours may give less than they should. The report shows which habits to change and gives a two-week routine for the weakest one.',
      },
      {
        q: 'How is the score worked out?',
        a: 'Statements are rated from 1 to 5 and the ones worded as an unwanted habit are reversed. In the situation questions, each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
      },
      {
        q: 'Can school students, college students and working adults use it?',
        a: 'Yes. You choose your stage, Class 6 to 10, Class 11 and 12 with entrance preparation, college, or exam preparation and upskilling alongside work. A few extra questions and the advice change with the stage, because a board-exam timetable, a coaching schedule, a semester and a working day all need different routines.',
      },
      {
        q: 'How can I improve my study habits?',
        a: 'Pick one habit area and change it for two weeks before touching the rest. The report picks your lowest area and gives a 14-day routine for it, such as keeping the phone in another room during study blocks or explaining each topic aloud before checking the book.',
      },
      {
        q: 'How long does the study habits test take?',
        a: 'It takes about eight minutes. You rate statements about what you do when you study and answer a few short situation questions. You can read your result straight away and download the report.',
      },
      {
        q: 'Is this a medical or mental-health test for stress?',
        a: 'No. It looks only at everyday study habits and does not diagnose anything. If study pressure feels too heavy, you cannot sleep or eat properly for a long time, or you have thoughts of harming yourself, please talk to a doctor, a counsellor or someone you trust, and you can call Tele-MANAS on 14416, the free national helpline.',
      },
      {
        q: 'How is this different from a learning style test?',
        a: 'A learning style test asks how you prefer to take in information. This one asks what you do before, during and after a study session. The two work together: your preferences can shape how you practise, while the habits decide whether the practice happens.',
      },
    ],
    related: [
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'Leadership, teamwork, adaptability, ownership and problem solving, scored separately.',
      },
      {
        href: '/services/assessments/communication-skills-assessment/',
        title: 'Communication Skills Assessment',
        description: 'Listening, speaking, writing, feedback and presenting, scored separately.',
      },
      {
        href: '/services/assessments/confused-about-career-after-10th-test/',
        title: 'Confused About Career After 10th Test',
        description: 'Find out which of five areas is behind your confusion after Class 10.',
      },
      {
        href: '/services/assessments/vark-learning-style-test/',
        title: 'VARK Learning Style Test',
        description: 'See how you prefer to take in information and what that means for studying.',
      },
      {
        href: '/blog/government-jobs/government-exam-preparation-while-working-india/',
        title: 'Government Exam Preparation While Working',
        description: 'A realistic plan for exam preparation around a full working day.',
      },
      {
        href: '/career-resources/night-shift-plan-learn-7pm-11pm-without-burning-out/',
        title: 'Night Shift Plan: Learn 7pm to 11pm Without Burning Out',
        description: 'How to use limited evening hours to learn without wearing yourself out.',
      },
      {
        href: '/blog/college-degrees/should-i-take-drop-year-after-12th/',
        title: 'Should I Take a Drop Year After 12th?',
        description: 'A clear-headed look at the decision many entrance aspirants face.',
      },
    ],
    breadcrumbDescription: 'Free study habits self-assessment with planning, focus, learning method, revision and rest scores.',
    webAppDescription:
      'A free original 40-question study habits self-assessment covering planning, focus and distractions, how you learn, revision and self-testing, and sleep, breaks and study conditions, with five scores, an overall score, stage-specific advice, a two-week routine and a downloadable report.',
    indexDescription:
      'Free study habits test: 40 questions, five scores for planning, focus, learning method, revision and rest, plus a two-week plan.',
    indexNote: 'For students from Class 6 to college and for adults preparing for exams or upskilling.',
  },

  depth: {
    stageHeading: 'Which of these describes you best?',
    stageNote:
      'Good study habits look different in each stage, so your report changes the extra questions and advice to match your timetable.',
    stages: [
      {
        key: 'school',
        label: 'School student',
        description: 'Class 6 to 10',
        title: 'Build a routine around the school day and the board-exam timetable',
        body: 'Your day is already shaped by school hours, homework and perhaps tuition. The aim is a small, steady routine that fits the rest of the day and that grows as unit tests and board exams come closer.',
        actions: [
          'Write a weekly timetable that starts after school and homework, and add the dates of unit tests and term exams as they are announced.',
          'Study new topics on the day they are taught, for about 20 minutes, while the class is still fresh in your mind.',
          'Switch off screens and keep homework, tuition and revision in separate blocks so that none of them eats into sleep.',
        ],
      },
      {
        key: 'senior',
        label: 'Class 11 to 12 and entrance preparation',
        description: 'Boards plus JEE, NEET, CUET or similar entrance exams',
        title: 'Balance coaching or school with your own self-study',
        body: 'With classes, board syllabus and entrance preparation running together, the risk is that every hour is spent attending and none is spent absorbing. Self-study is where coaching or school content turns into your own understanding.',
        actions: [
          'For each hour of class or lecture, plan some time the same day to solve questions on that topic yourself.',
          'Take a timed mock or sectional test regularly, and spend more time analysing the mistakes than taking the test.',
          'Give each week a clear split: board syllabus, entrance syllabus and one block for revision, so that neither side is left until the end.',
        ],
      },
      {
        key: 'college',
        label: 'College student',
        description: 'Degree, diploma or professional course',
        title: 'Work with the semester and internal-assessment rhythm',
        body: 'College gives you free time and few daily checks, then packs the pressure into internals, assignments, lab work and end-semester exams. Habits that spread work across the semester prevent the last-month rush.',
        actions: [
          'At the start of the semester, copy all internal, assignment, lab and exam dates into one calendar and mark a start date two weeks before each.',
          'Review each day\'s lecture notes for ten minutes that evening, and clear doubts with the teacher within the week.',
          'Keep one fixed weekly slot for self-study that is not used for assignments, so that exam topics are not studied from scratch in the final weeks.',
        ],
      },
      {
        key: 'adult',
        label: 'Exam preparation or upskilling alongside work',
        description: 'Competitive exam, government job preparation or learning while employed',
        title: 'Make limited hours count',
        body: 'With a job or other duties, you have fewer and more tired hours. Short, planned, active sessions, with one longer weekend block, give more than long plans that collapse on busy days.',
        actions: [
          'Choose two or three fixed weekday windows, even 45 minutes, and protect them as you would a work meeting. Add a longer block on the weekend.',
          'Use commute or break time only for light revision such as flashcards or recalling a topic, and keep new or hard topics for your fresh window.',
          'Plan a lighter study day each week on purpose, so that a missed day does not make you drop the whole routine.',
        ],
      },
    ],
    tips: [
      'On Sunday evening, write seven days on one page with the subject and topic for each study block. Fill in the next day every night so the plan stays alive.',
      'Before you study, put the phone in another room or a bag and keep it on silent. Check it only at break time for the next two weeks.',
      'After each topic, close the book and speak your explanation aloud for two minutes, as if teaching a friend. Open the book only to fix what you missed.',
      'Add three revision slots to your week: for yesterday\'s topics, last week\'s topics and last month\'s topics. Ten to fifteen minutes each is enough to start.',
      'Choose a fixed lights-out time and a wake-up time for this week and set an alarm for the lights-out time, not just for waking.',
      'Write on a sticky note: "By the end I will finish ..." before each session. A named target makes the session shorter and clearer.',
      'Study in blocks of 25 to 40 minutes with one task each. When your mind drifts, note the thought on paper and come back to the task.',
      'For every topic you read, solve at least a few questions from memory first and only then check the solutions. Increase the number each week.',
      'Take a short test on the topic without notes, mark it yourself and write the score. Doing this before you check the answers shows what you really know.',
      'Set a timer for a break every 40 to 50 minutes. Stand up, drink water and walk for five minutes away from your desk and phone.',
      'Stop the session when you sit down without a topic. Take five minutes at the end of every day to write the topic for tomorrow\'s first block.',
      'Turn on do-not-disturb and log out of social apps on your study device. If you must use the phone for study, use a single study app or notes only.',
      'After reading a page, close the book and write the three key points from memory. If you can only copy lines, you are reading, not learning.',
      'Count back from the exam date and pick a date for your first full revision round, leaving time for a second one. Treat that date as a deadline for finishing all new topics.',
      'Move your study time earlier in the evening and set a hard stop. A fixed finish time, and a short wind-down without screens, helps protect sleep.',
      'Open a calendar and mark every test and submission date for the next two months. Then write the date by which each topic must be done, a week earlier.',
      'Choose one study spot, even a corner, and keep only today\'s material on the table. Tell your family the hours you will be there so interruptions are fewer.',
      'When a rule does not make sense, write the doubt in one line and ask a teacher or friend within a day. Ask for the reason, not only the answer.',
      'Keep a small notebook where each entry has the question, your wrong step and the right step. Add to it after every test and read it once a week and the night before the next test.',
      'Write fixed meal times on your timetable and keep a water bottle on your desk. Many students find that long study on an empty stomach makes them slow and distracted.',
      'Put your hardest subject first in the day for the next two weeks, when you have the most energy. Start with 30 minutes and add 10 each week.',
      'Try your hardest topic for 25 minutes in silence or with soft music that has no lyrics, with the screen off. Use videos only when you are learning from them, pausing to note points.',
      'For each formula or definition, ask "where does this come from?" and write one line. If it takes too long, ask your teacher to show a quick derivation.',
      'At the end of every revision, close the notes and try to write out the topic from memory. Familiar-looking pages are not proof that you can recall them.',
      'Sit at a table with a straight back, light from the side or above, and the book or screen at eye level. If your neck or back hurts, change the setup first.',
    ],
    strongTip: 'This habit is already working for you. Keep doing it and use it to support your weaker areas.',
    domains: {
      plan: {
        why: 'A plan decides what is studied before tiredness and mood decide it. Even a rough weekly plan moves your time from choosing to doing, and shows early if the syllabus will not fit in the days left. It also makes sure the hard topics get a slot instead of being pushed to the last week.',
        roles: [
          'Anywhere a syllabus has to be covered by a date, such as boards, entrance exams, semester exams and competitive exams',
          'Work and projects where several deadlines run together and the order of tasks decides the result',
          'Self-paced courses and certifications where nobody sets your deadlines for you',
        ],
        routine: [
          'Days 1 to 3: List every subject and the dates of the next three tests or exams, and write the topics left in each.',
          'Days 4 to 7: Build a one-page weekly plan with a topic for each study block and keep it where you study.',
          'Days 8 to 11: Tick off each block at the end of the day and move undone topics to the next free slot, not to the end of the list.',
          'Days 12 to 14: Review what got done, cut what was too much and set next week\'s plan with blocks you actually finished.',
        ],
        mistakes: [
          'Planning more hours than the day really has, so that the plan is broken by Wednesday',
          'Planning only the subjects you like and leaving the hard ones without a slot',
          'Never checking the plan against the days actually left before the exam',
        ],
        proof: [
          'A weekly plan page with ticks showing what you finished',
          'A list of exam dates with the date each topic was finished by',
          'A note of how long each topic really took, used to make the next plan',
        ],
        askOthers: 'Is my weekly plan realistic for the time I have, and which subject or topic is it missing?',
        talkingPoints: [
          'You plan backwards from test and exam dates',
          'You review what was done each week and adjust the plan',
          'You give hard topics fixed slots early, not at the end',
        ],
        midStep: 'Add a "must finish by" date for every topic on your list, set one week before the test, and check it every Sunday.',
      },
      focus: {
        why: 'Concentration is the part of study that is easiest to lose and hardest to see. A session with constant phone checks can look long and still produce little, so protecting focus is often the fastest way to get more from the same hours.',
        roles: [
          'Any study that needs deep thinking, such as maths, coding, law, accounts and writing',
          'Work that needs long uninterrupted attention, such as analysis, design and writing',
          'Exam halls, where you must hold attention on one paper for a few hours',
        ],
        routine: [
          'Days 1 to 3: Put the phone in another room during every study block and note how many times you wanted to check it.',
          'Days 4 to 7: Use blocks of 25 minutes with a five-minute break, and stay on one task for each block.',
          'Days 8 to 11: Increase the block to 35 or 40 minutes, and keep a notepad for stray thoughts to handle at the break.',
          'Days 12 to 14: Fix one study spot and tell the people at home your study times so interruptions drop.',
        ],
        mistakes: [
          'Keeping the phone beside you "just for the clock"',
          'Switching subjects every time a topic becomes hard',
          'Studying in a noisy or shared space without telling anyone your study hours',
        ],
        proof: [
          'A study log showing blocks completed without checking the phone',
          'A page where each block has one task and the work finished in it',
          'A fixed study spot and time that people at home know about',
        ],
        askOthers: 'When you see me study, do I look settled or do I keep picking things up? What distracts me most?',
        talkingPoints: [
          'You set up your phone and place to protect study time',
          'You work in short blocks with one task each',
          'You stay on a hard topic a little longer before switching',
        ],
        midStep: 'Choose the one distraction that costs you the most, such as one app or one noisy hour, and remove it from your study time completely for two weeks.',
      },
      method: {
        why: 'Reading feels like progress because it is easy and the page looks familiar. Learning that lasts comes from explaining, solving and asking why, which is harder but pays back in tests where questions are twisted.',
        roles: [
          'Subjects built on concepts and problems, such as maths, physics, accounts, programming and law',
          'Exams that test application, such as entrance tests, case questions and descriptive papers',
          'Skill courses and upskilling where you must be able to do the task, not only recognise it',
        ],
        routine: [
          'Days 1 to 3: After each topic, close the book and explain it aloud in two minutes. Note the points you missed.',
          'Days 4 to 7: For every topic, solve questions yourself first, before reading solved examples.',
          'Days 8 to 11: Pick the three rote items you carry and write the reason behind each one in a line.',
          'Days 12 to 14: Teach one topic to a friend or family member and ask them to question you.',
        ],
        mistakes: [
          'Counting pages read as progress',
          'Looking at the solution after a minute of struggle, so the thinking never happens',
          'Memorising answers to likely questions without knowing how to build them',
        ],
        proof: [
          'A set of questions solved without help, with the score on first attempt',
          'Short written explanations of topics in your own words',
          'A record of questions you got wrong and later solved correctly',
        ],
        askOthers: 'If I explain this topic to you, where do I sound unsure, and what question could trip me up?',
        talkingPoints: [
          'You check understanding by explaining and practising',
          'You find the reason behind a rule instead of memorising it',
          'You practise questions on a topic before checking solutions',
        ],
        midStep: 'Convert one reading session a day into a practice session: close the book and answer five questions on what you just read.',
      },
      revise: {
        why: 'Memory fades unless a topic is brought back, and the act of recalling it is what strengthens it. Spaced revision and self-testing show you what you really know while there is still time to fix it. Re-reading alone cannot do this, because a familiar page feels like knowledge even when you cannot answer a question.',
        roles: [
          'Exams with large syllabi, such as boards, JEE, NEET, UPSC and bank exams',
          'Professional courses and certifications where earlier topics are needed in later papers',
          'Semester exams where the final paper covers months of content',
        ],
        routine: [
          'Days 1 to 3: Mark which topics you studied in the last month and book a ten-minute revision for each.',
          'Days 4 to 7: Take one timed test on a mix of topics without notes and mark it the same day.',
          'Days 8 to 11: Start a mistake notebook with five entries and read it before bed.',
          'Days 12 to 14: Revise old topics again, and move topics you got right to a longer gap and those you missed to a shorter gap.',
        ],
        mistakes: [
          'Re-reading notes and calling it revision',
          'Taking a test and never going back to the questions you got wrong',
          'Revising only the topics you enjoy and skipping the ones you fear',
        ],
        proof: [
          'A revision calendar showing when each topic was revised',
          'A mistake notebook with the same mistake not repeating in later tests',
          'A set of timed test scores written down week by week',
        ],
        askOthers: 'Which topics from earlier months do I seem to have forgotten, and can you quiz me on them?',
        talkingPoints: [
          'You revise on a schedule and test yourself',
          'You track and fix your repeated mistakes',
          'You use past papers under time to check your preparation',
        ],
        midStep: 'Choose one topic you studied a month ago and test yourself on it without notes this week. Whatever you miss goes into your next revision slot.',
      },
      care: {
        why: 'Study depends on a body and mind that can keep going. Regular sleep, real breaks and a comfortable place do not take time away from study; they make the hours you study more useful. This is everyday habit guidance, not medical advice.',
        roles: [
          'Long preparation periods such as boards, entrance exams and competitive exams that run for many months',
          'Combining study with school, a job or family duties where energy is the limiting resource',
          'Exam weeks, when sleep and routine are easiest to lose',
        ],
        routine: [
          'Days 1 to 3: Fix a lights-out time and a wake-up time, and keep screens off for the last 30 minutes before bed.',
          'Days 4 to 7: Add a five-minute break after every study block, away from your desk and phone.',
          'Days 8 to 11: Fix meal and water times on study days and keep a bottle on your desk.',
          'Days 12 to 14: Adjust your seat, light and table so that you can sit comfortably, and note how the sessions feel.',
        ],
        mistakes: [
          'Giving up sleep before a test, then finding that you cannot recall what you studied',
          'Using breaks for the phone, which does not rest your mind or eyes',
          'Skipping meals and water on study days and then feeling slow by evening',
        ],
        proof: [
          'A week of regular sleep and wake-up times noted down',
          'A study log showing breaks taken and sessions finished',
          'A study spot set up with good light and a comfortable seat',
        ],
        askOthers: 'Do I look tired when I study? Which part of my routine would you change first for my health?',
        talkingPoints: [
          'You protect sleep and take breaks on purpose',
          'You set up a place that supports long study',
          'You plan meals, water and movement into study days',
        ],
        midStep: 'Hold your lights-out time steady for two weeks, even on weekends, and note any change in how awake you feel in your first study block.',
      },
    },
    thirtyDay: [
      'Week 1: Do the first half of your lowest-area routine and write one line each day on what you tried and what got in the way.',
      'Week 2: Finish that routine and ask one teacher, friend or family member to look at your weekly plan or test results and give one suggestion.',
      'Week 3: Move to your second-lowest area and add two steps from its list, while continuing the first habit.',
      'Week 4: Retake the self-assessment, compare each area with your first result and write down which two habits you will keep for the next month.',
    ],
  },

  extras: [
    // School (Class 6 to 10)
    x(['school'], 'plan', 'I have decided which day I will start revising for my next unit test or term exam.', 'Ask your class teacher for the exam schedule and write each date in your notebook. Count back two weeks and mark the day you start revising.'),
    x(['school'], 'focus', 'I finish my homework in a fixed time slot after school instead of spreading it across the evening.', 'Choose a start time right after a snack and set a finish time. If homework takes longer, note which subject slowed you and ask the teacher about it next day.'),
    x(['school'], 'method', 'I study a new topic from the textbook on the same day it was taught in class.', 'Spend 15 to 20 minutes the same evening going over the day\'s lesson, even if only to read it again and underline what is unclear. Ask about the unclear part next day.'),
    x(['school'], 'care', 'I stay up late on school nights to finish homework or tuition work.', 'List the next day\'s homework and tuition work before dinner and start with the longest task. If it still runs past bedtime on most days, tell your teacher or parents so the load can be looked at.', true),
    // Class 11 to 12 and entrance preparation
    x(['senior'], 'plan', 'I split my week between the board syllabus and my entrance preparation instead of leaving one of them for later.', 'Draw a weekly grid with board work, entrance work and revision blocks. Check on Sunday that each of the three got its share.'),
    x(['senior'], 'method', 'After each coaching or school class, I solve questions on that topic by myself the same day.', 'Keep 45 to 60 minutes after class for solving questions from the same topic without looking at the lecture notes. Mark the ones you could not do for next day\'s doubt session.'),
    x(['senior'], 'revise', 'After every mock test, I go through each wrong answer and find out why it went wrong.', 'Sort your wrong answers into three groups: did not know, knew but made a slip, and ran out of time. Fix the first group by studying, the second by slowing down and the third by practising speed.'),
    x(['senior'], 'care', 'I feel I have to study all day with no time to rest.', 'Plan one free evening and one real break in each day, such as a walk or a meal with family, and treat them as part of the schedule. Tired long hours often give less than rested short ones.', true),
    // College
    x(['college'], 'plan', 'At the start of the semester, I note all internal, assignment, lab and exam dates in one place.', 'Spend 30 minutes in the first week copying the dates from the academic calendar and the syllabus into your phone calendar, and set a reminder two weeks before each.'),
    x(['college'], 'method', 'I review each day\'s lecture notes the same evening, even for ten minutes.', 'Open the day\'s notes after dinner, write three key points and one doubt, and ask your teacher or a friend about the doubt within the week.'),
    x(['college'], 'revise', 'I begin studying for end-semester exams only after the internals and assignments are over.', 'Reserve one weekly slot for older topics throughout the semester so that the end-semester syllabus is not new to you when you start.', true),
    x(['college'], 'focus', 'I keep a fixed time for self-study each week that is separate from assignments and lab records.', 'Book two evenings a week for self-study of current subjects and protect them from group plans and club work, as you would a lab slot.'),
    // Adult
    x(['adult'], 'plan', 'I have fixed study windows on workdays that I protect, even if they are short.', 'Pick two weekday windows of 45 to 60 minutes, such as early morning or after dinner, and tell your family and friends you are not available then.'),
    x(['adult'], 'method', 'I use the freshest part of my day for new or hard topics.', 'Put new topics in the first window of the day when you have the most energy, and use the late or tired slot for flashcards, short quizzes or notes you have already made.'),
    x(['adult'], 'revise', 'I use travel or break time at work for quick revision such as recalling a topic or going through flashcards.', 'Keep a small set of cards or one-page notes on your phone for the commute. Close them and recall the answer first, then check.'),
    x(['adult'], 'care', 'When work is heavy, I drop my whole study routine instead of keeping a shorter version.', 'Define a minimum version of your routine, such as 20 minutes of revision, so that a heavy work week does not stop the habit.', true),
  ],

  stageAdvice: {
    school: {
      plan: sa(
        'In Class 6 to 10 your day is already shaped by school, homework and perhaps tuition, so your plan only needs to fill the gaps and prepare for each test date.',
        'Make a weekly timetable that lists the subjects for each evening, and add the date of each unit test as soon as the school announces it.',
        'For Class 9 and 10, split the board syllabus into chapters and give each chapter a finish date at least a month before the pre-board exams.',
      ),
      focus: sa(
        'At school age, the phone, the television and noise at home are common distractions, and a short study block with full attention is worth more than a long one with half.',
        'Ask your family to keep the television low during your 45-minute study block and keep the phone with a parent until you finish.',
        'Study at a table, not on the bed, and keep only the book and notebook of the current subject in front of you.',
      ),
      method: sa(
        'School tests are set from the textbook, in whichever language you study it, so how you work through each chapter matters more than how many times you read it.',
        'After each chapter, close your textbook and write the main points in your own words in your mother tongue or in English, and then check them.',
        'Solve the in-text and end-of-chapter questions yourself before looking at the guide or class notes, and mark the ones you got wrong.',
      ),
      revise: sa(
        'Between unit tests, term exams and boards, school students have many natural points to revise, and many of them go unused.',
        'On Saturday, spend 30 minutes going over the chapters taught that week without looking at your notes first, then check them.',
        'Solve the previous year\'s or sample papers for your board, CBSE, ICSE or State, under time, starting a few weeks before the exam.',
      ),
      care: sa(
        'Growing students need regular sleep and meals, and school mornings leave little room for late-night study.',
        'Fix a bedtime that lets you get ready for school without rushing and do not study on a phone or tablet in the last half hour.',
        'Take a proper break to play or move after school before you start homework, as it helps you settle in to study.',
      ),
    },
    senior: {
      plan: sa(
        'In Class 11 and 12 with an entrance exam, you carry school, board subjects and entrance syllabus together, so planning decides which part gets neglected.',
        'Build a weekly plan with three kinds of blocks, board subjects, entrance topics and revision, and check on Sunday that all three got time.',
        'Write down the dates of mocks, school exams and the entrance exam, and mark the board practicals and board exams too, so that you can see where two things fall close together.',
      ),
      focus: sa(
        'Between coaching, school and long hours at the desk, the risk is sitting for many hours with a mind that is elsewhere.',
        'Count only the hours you sat with the phone away, and aim to increase that number each week instead of the total hours.',
        'Mute coaching and school group chats during study blocks and read the messages in one fixed window each evening.',
      ),
      method: sa(
        'Coaching can supply notes and shortcuts, but entrance exams test whether you can apply a concept to a new question.',
        'For every chapter from class, solve problems from a different source than the coaching material so that you meet unfamiliar framing.',
        'Build the concept first from your board textbook (NCERT or your State board\'s) and then use coaching material to practise questions on it.',
      ),
      revise: sa(
        'With such a large syllabus, entrance preparation is mostly a question of what you still remember a month later.',
        'Revise each chapter again a week, a month and three months after you finish it, and use short question sets, not re-reading.',
        'Keep an error log from every mock and sectional test and review it every weekend before you attempt the next mock.',
      ),
      care: sa(
        'Long preparation can lead to skipped sleep and meals, and tiredness often shows up as slow, careless mistakes in mocks.',
        'Keep a fixed sleep time even in the weeks before a mock or board exam, and plan your revision so that the night before is light.',
        'Take at least one half-day off a week for family, sport or a walk, and see it as part of the plan.',
      ),
    },
    college: {
      plan: sa(
        'In college, the semester has long quiet stretches and short heavy periods around internals, assignments and exams, so planning means spreading the load.',
        'On the first week of the semester, mark every internal, assignment, lab and exam date in one calendar and add a start date two weeks before each.',
        'Divide each subject\'s syllabus by the number of weeks left, and aim to finish each unit a week before the internal test on it.',
      ),
      focus: sa(
        'Free periods, hostel or home life, clubs and social media make it easy for study hours to be taken from you without notice.',
        'Choose a library, a classroom or a quiet corner of your hostel or home as your study place and go there for two fixed blocks each day.',
        'Mute class and club groups during the block and check them after, and tell friends the hours when you do not answer.',
      ),
      method: sa(
        'Many college papers ask for explanations, applications or case answers, so reading the notes once before the exam falls short.',
        'For each unit, write three questions an examiner could ask and answer them from memory, then compare with your notes and textbook.',
        'For problem-based subjects, solve the previous year\'s university papers, not just the examples in class, to see how questions are framed.',
      ),
      revise: sa(
        'Semester exams cover months of content, and internals can fall on top of each other, so revision cannot be left to the study leave.',
        'After each internal, mark the topics you lost marks on and put them into your revision slots, as they usually reappear in the end-semester paper.',
        'Use the study leave for past papers under time, not for first-time reading, by finishing the syllabus a week before.',
      ),
      care: sa(
        'Irregular schedules, late nights and skipped meals are common in college, and they build up before exams.',
        'Keep your wake-up time within an hour of the same time on class and non-class days, so that your body clock does not shift.',
        'Eat a proper meal before study blocks instead of snacks, and walk for ten minutes between blocks.',
      ),
    },
    adult: {
      plan: sa(
        'Studying alongside a job leaves you with a few tired hours, so the plan has to be small, fixed and flexible on bad days.',
        'Choose two weekday windows of 45 to 60 minutes and one longer weekend block, and write the topic for each in the week\'s plan.',
        'Work backwards from your exam or course date, split the syllabus by the number of study blocks you actually have, and trim the plan if it does not fit.',
      ),
      focus: sa(
        'After a workday you are tired, and the phone and household demands pull strongest in the same evening window.',
        'Start the evening window with a 5-minute reset such as washing your face, then put the phone in another room for the first 40 minutes.',
        'Tell your family the hours you are studying and ask for them to be protected, as you would a work meeting.',
      ),
      method: sa(
        'Time is scarce, so passive reading tends to give less from each hour than solving and recalling.',
        'Use your fresh window for solving questions and new topics, and keep video lectures at normal speed with pauses to note and recall key points.',
        'For a skill course, build a small project or practice set every week instead of finishing videos back to back.',
      ),
      revise: sa(
        'Gaps from busy work weeks mean forgetting is likely, so revision has to be built into the routine and not left for the end.',
        'Start each weekend block with 30 minutes of recall of last week\'s topics, closing your notes first.',
        'Use commute and break time for flashcards or one-page summaries, and take a full-length mock test once every two or three weeks.',
      ),
      care: sa(
        'Cutting sleep for study on top of a full workday can leave you less able to study and work well the next day.',
        'Set a firm stop time for evening study and keep a short wind-down before sleep, with no screens in the last 30 minutes.',
        'Plan one lighter day a week without study and treat it as part of the plan, so that the habit lasts for months.',
      ),
    },
  },

  scenarios: [
    // plan
    sc('plan', 'Your unit test is in ten days and you have not made a plan. What do you do tonight?', [
      o('Start with the subject you enjoy most to build momentum, and decide the next day\'s subject each evening as you go', 33, 'Momentum is useful, but choosing day by day lets the chapters you dislike slide to the last days. Tonight, spend 15 minutes listing every chapter and give each one a day, with the hard ones earlier.'),
      o('List every chapter, count the days left and give each chapter a day, keeping the last two days for revision', 100, 'Dates on chapters show you tonight whether the syllabus fits in ten days, and the two spare days absorb a bad day. Tick each chapter off and move leftovers into the spare days, not to the end of the list.'),
      o('Ask your teacher or a classmate who scores well which chapters matter most, and study only those since ten days is short', 0, 'Hints are worth having, but skipping chapters is a gamble because questions can come from anywhere in the syllabus. Cover every chapter once on your list and give the hinted ones extra time.'),
      o('Study as many hours as you can every day until the test, going through the book from the first page', 67, 'Steady long hours cover ground, but going page by page often leaves the last chapters rushed. Add a topic list with a day against each so that your hours reach the whole syllabus.'),
    ]),
    sc('plan', 'You made a weekly plan, but by Wednesday you are two days behind. What is the best response?', [
      o('Stop following the plan this week, since it was clearly too ambitious, and study what feels right until the test is closer', 0, 'Without a plan you lose the one record that showed you the gap, and the hard topics tend to be the ones that drift. Rebuild a smaller plan tonight instead of working without one.'),
      o('Spend ten minutes tonight redoing the rest of the week: drop the least important topic, move the missed ones into free slots', 100, 'Plans slip for everyone, so the useful skill is quick re-planning. Writing down why you fell behind, for example topics that took twice as long, makes next week\'s plan more honest.'),
      o('Add an extra hour each evening for the rest of the week so that everything is caught up by Sunday as planned', 33, 'Catching up by adding hours usually costs sleep, and tired hours give less. Keep your usual hours and decide which two topics are really needed before the test.'),
      o('Keep the plan as written and use Saturday to catch up, since changing a plan every few days is itself a distraction', 67, 'Holding steady avoids panic, and a catch-up day is a fair idea if the missed topics really fit into it. Count the hours of the two missed days against Saturday tonight, and move whatever does not fit.'),
    ]),
    // focus
    sc('focus', 'You are halfway through a study block when your phone buzzes with a group message. What do you do?', [
      o('Take a quick look in case it is important, reply in a line if needed and go straight back to the topic', 33, 'A quick look rarely stays quick, and it takes several minutes to get back to where your thinking was. Put the phone out of reach before the next block and read messages at the break.'),
      o('Leave the phone alone, finish the block and read the message at the break', 100, 'Keeping the block whole is what protects your thinking, since almost no message needs an answer within minutes. Do the same for the next two weeks and see how many blocks you finish.'),
      o('Reply fully since it may be about homework or tomorrow\'s class, then switch to an easier subject because your flow is broken anyway', 0, 'A message can matter, but answering fully and then changing subjects leaves two half-finished topics and teaches you that a buzz can end a session. Silence the phone before you start, and tell friends the hours when you will reply.'),
      o('Turn the phone face down but keep it on the desk, and carry on while ignoring the buzz as well as you can', 67, 'Turning it over helps, yet part of your attention keeps waiting for the next buzz. Moving it to a bag or another room removes that waiting.'),
    ]),
    sc('focus', 'You have an hour to study but you keep losing interest after ten minutes. What do you try first?', [
      o('Put on a video lecture or a study playlist in the background so that something keeps you company while you read', 33, 'Background video splits your attention and feels like study while giving you less. Use a video only when you are learning from it, pausing to note the points.'),
      o('Split the hour into two 25-minute blocks with one clear task each and a short break between', 100, 'A small, named target is easier to hold than a whole hour. Add two or three minutes to each block every week as your attention improves.'),
      o('Sit through the full hour without a break, because stopping when bored builds the habit of quitting', 67, 'Sitting through shows determination, but quality usually falls as the hour goes on. A planned five-minute break often gives you a better second half.'),
      o('Close the books for now and try again in the evening, when you will feel more like studying than you do at this moment', 0, 'Waiting for the mood teaches your mind that the first wave of boredom can end a session. Start a 10-minute task right now and let the interest follow once you begin.'),
    ]),
    // method
    sc('method', 'You have finished reading a chapter and feel you understand it. What is the best next step?', [
      o('Move on to the next chapter, since the syllabus is long and you already understood this one while reading', 0, 'Understanding while reading often fades once the book is closed, and the gaps show up only in the test. Spend five minutes recalling this chapter before moving on.'),
      o('Read the chapter a second time to be sure, because most marks come from knowing the textbook well', 33, 'A second reading mostly makes the page look familiar, which is not the same as knowing it. Use the same time to try recalling it without the book.'),
      o('Close the book, explain the main points aloud, then solve a few questions and check', 100, 'Explaining and solving show you what you really know while there is still time to fix it. Note the points you missed and look at only those again.'),
      o('Highlight the key lines and make short notes in the margin so that revision later is quicker and easier', 67, 'Marked lines do make revision faster to start, but marking is not learning in itself. After marking, close the book and write the key lines from memory.'),
    ]),
    sc('method', 'In a maths or science problem you cannot find the method, and the solution is in the back of the book. What do you do?', [
      o('Read the solution at the back straight away and copy it down, since time is limited and you can learn from the working', 0, 'Copying gives you the answer without the skill, and the same problem will look new in the test. Close the solution and try the problem again after reading it.'),
      o('Try for ten minutes, then read only the first step of the solution and try again before looking further', 100, 'A short struggle prepares your mind, and a small hint keeps you thinking instead of copying. If you are still stuck after the second try, mark the problem for a teacher.'),
      o('Skip it for now and carry on with the other problems, because it may not come in the test anyway', 33, 'Skipped problems are often exactly the ones that cost marks later. Mark it and bring it to a teacher or friend within a day.'),
      o('Ask a friend who is good at the subject to explain it right away, so that you understand the method quickly', 67, 'Asking is a good habit, but try first and then show your friend what you attempted. That way the help fits the exact place where you got stuck.'),
    ]),
    // revise
    sc('revise', 'You finished a unit three weeks ago. What is the most useful thing to do with it now?', [
      o('Leave it for now, since you studied it carefully at the time and your notes are good', 33, 'Even carefully studied topics fade without a return visit. A short check now will show how much has already slipped.'),
      o('Read through the whole unit again from the first page so that it is fresh before the next round', 67, 'Re-reading helps a little, but it takes long and does not show what you have forgotten. Try questions first and read only where you were stuck.'),
      o('Try ten questions without notes, mark them and go back only to what you got wrong', 100, 'This tells you what you know and sends your time only to the weak parts. Put the missed topics into your next revision slot and test them again a week later.'),
      o('Save it for the final revision with the other units, so that all your revision is done in one stretch near the exam', 0, 'Leaving everything for the end builds a heap that cannot be covered well, and you meet forgotten topics with no time to repair them. Spread revision out starting this week, so that the final days only polish.'),
    ]),
    sc('revise', 'You get a low score in a practice test. How do you use it?', [
      o('Note the score, tell yourself you will do better next time and move on to the next test while there is still syllabus to cover', 33, 'The score alone teaches little. What matters is what you do with each wrong answer, so go back to this paper before starting the next one.'),
      o('Go through each wrong answer, write why it went wrong and put those topics in your revision slots', 100, 'Finding the reason behind each error turns a bad score into a plan. Sort the reasons into not knowing, careless slips and lack of time, because each needs a different fix.'),
      o('Study all the topics from the test again from the beginning to be sure of them', 67, 'Starting over is thorough but slow, and most of those topics you already know. Begin with your list of wrong answers and go deeper only on those.'),
      o('Decide that the paper was unusually hard or unfair, and tell yourself the real test will have easier questions', 0, 'Blaming the paper removes your chance to improve. A hard paper still shows which topics you can repair before the real one.'),
    ]),
    // care
    sc('care', 'It is the night before a big test and you have not covered two chapters. What do you do?', [
      o('Stay up through the night to cover both chapters fully, since one night of lost sleep is a small price for marks', 0, 'A sleepless night usually lowers recall and clear thinking in the exam hall. Pick the highest-value parts of the two chapters, study them and then sleep.'),
      o('Study the key points of both chapters for a fixed time, then sleep at a normal hour', 100, 'Key points give more value than skimming everything, and a rested mind recalls better than a tired one. Decide the time limit before you start, for example 90 minutes.'),
      o('Sleep early and skip the two chapters completely, since tired and rushed reading will not stay in your mind', 33, 'Sleep matters, but an hour on the key points costs little and may earn marks. A short, focused attempt beats none at all.'),
      o('Sleep for a few hours, set an alarm for very early morning and study the two chapters then, before the exam', 67, 'This can work for someone already used to early mornings, but a sudden change is risky if you oversleep or wake groggy. Set two alarms and be sure of at least six hours of sleep.'),
    ]),
    sc('care', 'You have been studying for two hours without a break and your eyes and back are tired. What is the best step?', [
      o('Carry on until the chapter is finished, since stopping now means you must rebuild your concentration afterwards', 33, 'Pushing on makes the last part of the chapter less useful. A five-minute break costs less than the slow, tired reading that follows.'),
      o('Pick up your phone for a break and scroll for a while, since that is the easiest way to relax', 0, 'Scrolling keeps your eyes and mind busy, so it does not rest you, and the break often runs long. Next time, stand up and move away from screens.'),
      o('Stand up, drink water, walk for five minutes away from screens, then return to finish the chapter', 100, 'A short physical break resets your eyes and attention, and you return with energy for the rest. Set a timer for every 40 to 50 minutes so that the break happens before you are exhausted.'),
      o('Stop studying for the day, because you have already put in two good hours and tired study will not help', 67, 'Stopping is sensible if the plan for the day is done. If it is not, a short break may let you finish, so check how much is left before you decide.'),
    ]),
    // stage-specific
    {
      ...sc('plan', 'You are in Class 10 and the pre-board exams are two months away, with school, tuition and homework taking most of the day. How do you plan the revision?', [
        o('Wait for the pre-board timetable to come out, and then begin revising the subjects that have the earliest dates', 0, 'Waiting leaves only a few days for the whole syllabus. Begin from your chapter list now, even with 30 minutes a day.'),
        o('Keep weekdays for homework and tuition, and use the whole of Saturday and Sunday for revision since those days are free', 67, 'Weekends are a good base, but two days may not be enough for every subject. Add 20 to 30 minutes of recall on weekdays too.'),
        o('Divide the syllabus into eight weekly parts, revise one part for 30 minutes after homework and test yourself at weekends', 100, 'This fits around the school day, spreads the work over eight weeks and checks what you remember each weekend. Share the plan with your tutor so that tuition homework matches it.'),
        o('Ask the tuition teacher to tell you each day what to revise, so that you follow a ready plan without losing time', 33, 'A tutor can guide you, but a plan you wrote yourself is easier to follow and to adjust. Write your own list and ask the tutor to correct it.'),
      ]),
      stages: ['school'],
    },
    {
      ...sc('method', 'You are preparing for an entrance exam and your coaching centre gives many notes and tests every week. How do you balance them with self-study?', [
        o('Finish all the coaching notes and weekly tests first, and do your own self-study in whatever time is left over', 33, 'Coaching material can fill all your time and leave none to absorb it. Reserve fixed self-study blocks and treat them as equally important.'),
        o('Attend classes, solve that day\'s topic questions yourself in the evening and review the mistakes from each mock on weekends', 100, 'You get the structure of coaching plus the practice and mistake analysis that turn it into your own understanding. Add a second source for questions on your weakest topics.'),
        o('Skip some classes you find slow, to gain time for self-study, and catch up on the material from friends\' notes', 67, 'Self-study is valuable, but skipped classes can leave gaps that notes do not fill. Skip only what you have already understood, and check with a teacher first.'),
        o('Follow only the coaching material and tests and avoid other books, because mixing sources confuses the syllabus', 0, 'One source gives you only one style of question, and entrance papers often frame things differently. Add one other book for practice after each topic.'),
      ]),
      stages: ['senior'],
    },
    {
      ...sc('revise', 'Your college has three internal tests and an assignment in the next three weeks, and the end-semester exams come a month later. How do you handle revision?', [
        o('Concentrate on the internals and assignment now and begin end-semester revision once they are over, since the exam is a month later', 33, 'This clears the near deadlines, but the full syllabus will then feel new. Keep one small weekly slot for exam topics even during these three weeks.'),
        o('Prepare for each internal with the exam syllabus in mind, note topics where you lose marks and review them weekly', 100, 'Each internal becomes early revision, and the lost marks show you which topics need work before the end-semester paper. Keep the list in one notebook so that it is ready for study leave.'),
        o('Put the internals and assignment aside and start end-semester study right now, since the exams carry the most weight', 0, 'Internals count towards your final marks, and skipping them can cost you. Prepare for them with a plan that also supports the exam.'),
        o('Prepare well for each internal as it comes, and spend one weekend at the end of the three weeks looking at the end-semester syllabus', 67, 'Doing the near task well is sound and the weekend check is a good step. Add a short weekly review in between, because mistakes forgotten by then are lost chances to improve.'),
      ]),
      stages: ['college'],
    },
    {
      ...sc('plan', 'You work full time and have about 90 minutes free on weekday evenings, but you are often tired. How do you use them for exam preparation or a course?', [
        o('Plan 90 minutes of new topics every evening, since you do have the time, and push through the tiredness', 33, 'A full plan looks good but tends to break on tired days, and one broken week can end the habit. Set a smaller target you can keep, and use the weekend for longer work.'),
        o('Keep weekdays for rest and use the weekend for long study blocks, when you have more energy and fewer interruptions', 67, 'Weekends are valuable, but a gap of several days causes forgetting. Add two short weekday sessions for revision.'),
        o('Study only on the days you feel fresh and skip the evenings when you are too tired, so that the time you do put in is good quality', 0, 'Waiting for fresh days leads to very few sessions. Fix the times in advance, and make the tired-day version small, such as 20 minutes of recall.'),
        o('Fix two 45-minute weekday sessions, with only light recall on the tired day, and one longer weekend block', 100, 'This suits your energy, protects regularity and keeps the harder work for when you are fresh. Write the three slots in your calendar today and tell your family.'),
      ]),
      stages: ['adult'],
    },
  ],

  phrases: {
    plan: [
      '"This week I will finish chapters ... by ... and revise them on ..."',
      '"Before I sit down, my target for this session is ..."',
      '"The test is on ..., so I need to start revising by ..."',
    ],
    focus: [
      '"I will keep my phone in the other room until I finish this block."',
      '"I study from ... to ..., so please do not call me during that time."',
      '"I will check messages at the break, not now."',
    ],
    method: [
      '"Let me explain this topic in my own words and see what I miss."',
      '"I tried this problem for ten minutes. Here is where I got stuck."',
      '"Why does this rule work? Can you show me where it comes from?"',
    ],
    revise: [
      '"I will test myself on this without notes first, then check."',
      '"I got this wrong because ..., so next time I will ..."',
      '"Please quiz me on the topics from last month."',
    ],
    care: [
      '"I will stop at ... tonight so that I sleep on time."',
      '"I am taking a five-minute break to walk and drink water."',
      '"I study better after I have eaten and slept, so I will plan around that."',
    ],
  },

  stagePlan: {
    school: [
      'Write the dates of your next unit test or term exam, and a weekly timetable that fits after school and homework.',
      'Spend 15 to 20 minutes each evening revisiting the lesson taught that day, and note one doubt to ask next day.',
      'On weekends, test yourself on the week\'s chapters without notes and solve one sample or previous year paper section.',
      'Keep a fixed bedtime and a screen-free half hour before it, including on test weeks.',
    ],
    senior: [
      'Draw a weekly grid with board subjects, entrance topics and revision blocks, and keep to it for two weeks.',
      'After every class, solve questions on that topic by yourself from a second source before the day ends.',
      'Take a timed mock or sectional test each week and sort your mistakes into not known, slips and time.',
      'Keep one half-day off each week and a steady sleep time, and use them to stay fresh for the longer run.',
    ],
    college: [
      'Put every internal, assignment, lab and exam date for the semester into one calendar with start dates.',
      'Review the day\'s lecture notes that evening and ask about one doubt within the week.',
      'Keep two weekly self-study slots for exam topics, separate from assignments, and revise after each internal.',
      'Use study leave for timed past papers, and keep a steady wake-up time throughout the semester.',
    ],
    adult: [
      'Choose two fixed weekday windows and one weekend block, and put them in your calendar.',
      'Use the fresh window for new and hard topics, and the tired window for light recall.',
      'Use commute and break time for flashcards or one-page summaries, and take a mock test every few weeks.',
      'Define a minimum version of your routine for heavy work weeks, and keep one lighter day each week.',
    ],
  },

  talk: {
    plan: {
      q: 'Can you look at my weekly study plan and tell me whether the time I have given each subject is realistic?',
      a: 'Bring a one-page plan with subjects, topics and dates. Ask which subject needs more time, and which topic is likely to take longer than you think. Then change the plan the same day.',
      line: 'Note: my plan for this week is ..., and my teacher or mentor suggested giving more time to ... and starting ... earlier.',
    },
    focus: {
      q: 'What do you do to stay focused when you study or prepare for an exam, and what helped you most?',
      a: 'Ask a senior, teacher or mentor for one or two specific habits, such as where they studied or how they handled their phone. Try one for a week and keep it only if it works for you.',
      line: 'Note: the distraction that costs me most is ..., and I will handle it by ... from ... to ... each day.',
    },
    method: {
      q: 'How should I study this subject so that I understand it and can answer a question I have not seen before?',
      a: 'Ask for a method for this particular subject, such as what to practise, which questions to solve first and how to check understanding. Use it on one chapter and ask for feedback on your answers.',
      line: 'Note: for [subject], my method is to ..., then ..., and I check myself by ... after each topic.',
    },
    revise: {
      q: 'How often should I revise this syllabus, and which sort of tests or papers would be the most useful for me now?',
      a: 'Ask for a revision rhythm and the right practice papers for your exam or subject. Schedule the first test within the week and bring the marked paper back to discuss the mistakes.',
      line: 'Note: I will revise [topics] on [days], take a test on [day], and review my mistakes on [day].',
    },
    care: {
      q: 'How did you manage sleep, breaks and meals during your preparation, and what would you change if you did it again?',
      a: 'Ask someone who finished a similar exam or course about their daily routine, including what they gave up and what they kept. Take one or two practical ideas and test them for two weeks.',
      line: 'Note: my fixed bedtime is ..., my wake-up time is ..., and I take a break every ... minutes.',
    },
  },

  talkTitles: {
    strong: 'Use your strongest habit when you talk to a teacher or mentor',
    weak: 'Questions to ask about your lowest area',
    intro:
      'Bring these to a teacher, tutor, counsellor, senior or someone who has finished the exam or course you are working on. Specific questions get specific answers.',
    mode: 'ask',
  },
};
