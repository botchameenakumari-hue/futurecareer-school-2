// Time Management Self-Assessment: a bundle for the shared self-rating test page.
// General guidance only: no statistics, norms or outcome claims.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

const BASE = '/services/assessments/time-management-self-assessment/';

export const bundle: SkillTestBundle = {
  test: {
    id: 'time-management-self-assessment',
    slug: 'time-management-self-assessment',
    pageUrl: BASE,
    breadcrumbName: 'Time Management Self-Assessment',
    metaTitle: 'Time Management Test | Free Self-Assessment, 40 Questions',
    metaDescription:
      'Free time management test: 40 questions on priorities, planning, procrastination, focus and saying no. Instant scores, a 14-day routine and a PDF report.',
    h1Lead: 'Time Management',
    h1Accent: 'Self-Assessment',
    eyebrow: 'Priorities, planning, procrastination, focus and boundaries in one report',
    heroSub:
      'Most people who say they are bad at managing time are weak in one particular place, not everywhere. This free self-assessment splits time management into five areas, deciding what matters, planning, starting, focusing and protecting your time, and shows which one to fix first. It works for school students, college students, freshers and working professionals.',
    stats: [
      { value: '40', label: 'questions' },
      { value: '5', label: 'time areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five time management areas from your own ratings',
      'About 7 minutes, no sign-up',
      'Advice for your stage and a 14-day routine',
    ],
    reportTitle: 'Time Management Report',
    reportFile: 'future-career-school-time-management-report.pdf',
    reportKicker: 'TIME MANAGEMENT REPORT',
    resultKicker: 'Your time management result',
    scoreLabel: 'Overall time management',
    bands: {
      high: 'A relative strength.',
      mid: 'Developing, with room to grow.',
      low: 'This area needs the most work.',
    },
    domainsHeading: 'Five areas of managing your time',
    domainsIntro:
      'Time goes wrong in different ways for different people. Some work hard on the wrong things, some never plan, some cannot start, some are always interrupted and some cannot refuse. Your lowest area is the best place to begin.',
    domains: [
      {
        key: 'priorities',
        name: 'Deciding what matters most',
        short: 'Choosing the few things that deserve your best time',
        strong: 'You know which tasks matter most this week and give them your best hours before smaller tasks.',
        weak: 'Everything feels equally urgent, so you stay busy with small tasks while the important one waits.',
        plan: [
          'Every Sunday evening, write the three outcomes that would make the coming week a good one. Put them at the top of your page or phone notes.',
          'Each morning, mark the single task that must be done today and do it before checking messages.',
          'When a new request arrives, ask: does this help one of my three outcomes, or can it wait until Friday?',
        ],
      },
      {
        key: 'planning',
        name: 'Planning your day and week',
        short: 'Turning intentions into a realistic schedule',
        strong: 'You look at the week ahead, give tasks realistic time and review what happened.',
        weak: 'Days run on memory and mood, tasks take longer than expected and you often cannot say where the time went.',
        plan: [
          'For the next three days, write the time you start and finish each task. This shows how long things really take.',
          'Plan tomorrow in the last ten minutes of today, with fixed times for the two most important tasks and a gap after each.',
          'On Sunday, spend ten minutes on a weekly view: fixed commitments first, then study or work blocks, then rest.',
        ],
      },
      {
        key: 'start',
        name: 'Starting and procrastination',
        short: 'Getting going on tasks you would rather avoid',
        strong: 'You begin tasks early, break big ones into small steps and do not wait for the perfect mood.',
        weak: 'You put off important tasks until the deadline is close, and the delay itself adds stress.',
        plan: [
          'Pick one task you have been avoiding and write its first step so small that it takes five minutes. Do only that step today.',
          'Use a ten-minute start rule: work on the task for ten minutes, then decide whether to stop. Most days you will carry on.',
          'Write down what you tell yourself before you delay, such as "I will do it better tomorrow". Name the real reason: boredom, fear or confusion.',
        ],
      },
      {
        key: 'focus',
        name: 'Focus and interruptions',
        short: 'Protecting blocks of concentrated time',
        strong: 'You can work in uninterrupted blocks, keep your phone away and recover quickly when disturbed.',
        weak: 'Notifications, calls and switching between tasks break your work into small pieces, so everything takes longer.',
        plan: [
          'Work in two blocks of 25 to 45 minutes each day with the phone in another room, and note how much you finished.',
          'Turn off notifications for chat and social apps during those blocks and check them at fixed times.',
          'Keep a distraction list beside you. Write each urge to check something and deal with it after the block.',
        ],
      },
      {
        key: 'limits',
        name: 'Saying no and protecting time',
        short: 'Keeping room for what you have already committed to',
        strong: 'You can refuse or delay a request politely and you keep time for rest and your own priorities.',
        weak: 'You agree first and find the time later, so your own plans and your rest are the first things to go.',
        plan: [
          'Practise one sentence this week: "I cannot take this on today. I can look at it on [day]." Use it once.',
          'Before saying yes to any request, count what is already in your week and answer after that check, not before.',
          'Block rest, meals and one fixed family or exercise slot in your calendar and treat them like appointments.',
        ],
      },
    ],
    questions: [
      { d: 'priorities', text: 'At the start of the week I know the two or three things that matter most before the week is over.' },
      { d: 'planning', text: 'I plan tomorrow before today ends, even if it is only a short list.' },
      { d: 'start', text: 'When a task is big, I begin with a small first step within a few minutes.' },
      { d: 'focus', text: 'When I need to concentrate, I keep my phone out of reach for a fixed block of time.' },
      { d: 'limits', text: 'I can say no, or not now, to a request when my time is already committed.' },
      { d: 'priorities', text: 'I can tell the difference between what is urgent and what is truly important for my goals.' },
      { d: 'planning', text: 'I give each task a realistic time estimate and leave a gap between tasks.' },
      { d: 'start', text: 'I start a task on the day I get it instead of waiting until the deadline comes close.' },
      { d: 'focus', text: 'After an interruption, I can return to my work within a few minutes.' },
      { d: 'limits', text: 'I tell people when I will be free to help instead of dropping everything whenever asked.' },
      { d: 'priorities', text: 'Most days I spend my best hours on small tasks and leave the important one for the end.', reverse: true },
      { d: 'planning', text: 'At night I often find the day went by without a plan and I cannot say where the time went.', reverse: true },
      { d: 'start', text: 'I keep telling myself I will begin later, and days afterwards the task is still waiting.', reverse: true },
      { d: 'focus', text: 'I check messages or social media every few minutes even when I am trying to work.', reverse: true },
      { d: 'limits', text: 'I agree to requests first and work out afterwards how I will find the time.', reverse: true },
      { d: 'priorities', text: 'When two tasks clash, I can explain why I chose one over the other.' },
      { d: 'planning', text: 'I look at my week in a calendar or timetable, not only at today.' },
      { d: 'start', text: 'When I want to avoid a task, I can name the reason, such as fear of doing it badly, and still take the first step.' },
      { d: 'focus', text: 'I do work that needs thinking at the time of day when my head is clearest.' },
      { d: 'limits', text: 'I keep time every week for rest, family or exercise and protect it like an appointment.' },
      { d: 'priorities', text: 'I say yes to new tasks without checking them against what I already have to finish.', reverse: true },
      { d: 'planning', text: 'At the end of each week I review what I finished and what moves to the next week.' },
      { d: 'start', text: 'I wait until I feel fully ready or in the mood before I start important work.', reverse: true },
      { d: 'focus', text: 'I switch between several tasks at once and finish none of them properly.', reverse: true },
      { d: 'limits', text: 'I feel guilty when I say no, so I take on extra work even when I am tired.', reverse: true },
    ],
    readingTitle: 'How to read your time management result',
    readingSections: [
      {
        title: 'Time management is five habits, not one talent',
        body: [
          'Each statement describes something you do: planning tomorrow tonight, putting the phone away, replying "not today" to a request. That makes these habits trainable. A low area means a habit you have not set up yet, not a fixed weakness in you.',
          'Many people find that one area drags the others down. If you cannot start, a perfect plan will not help. If you cannot say no, a good calendar fills up with other people\'s tasks. Work on the lowest area first.',
        ],
      },
      {
        title: 'Your result and your stage',
        body: [
          'A school student is managing a timetable, tuition, homework and screen time. A college student has assignments, internals and sometimes part-time work. A fresher has a task queue and fixed office or shift hours. A working professional adds meetings, other people\'s time and family responsibilities. The questions are the same in spirit, but the report gives advice that fits your stage.',
        ],
      },
      {
        title: 'Check the result against real days',
        body: [
          'Your answers show how you see yourself. For one week, keep a simple log of what you planned and what you finished each day. If the log and your score disagree, trust the log and adjust the plan from there.',
          'Retake the assessment after four weeks of working on your lowest area. A change in that area, even a small one, shows the routine is helping.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool and shows how you describe your own habits. It does not replace honest feedback from a teacher, mentor or manager.',
      'Scores come only from your answers and are not compared with other people, so there is no pass mark and no ideal number.',
      'It does not predict marks, exam results, job performance or income. It points to where your daily habits need attention.',
      'It is not a medical or mental-health assessment. If you feel unable to cope, or have thoughts of harming yourself, speak to a doctor, a counsellor or someone you trust, and you can call Tele-MANAS (14416), a free national helpline.',
    ],
    faqs: [
      {
        q: 'Is this time management test free?',
        a: 'Yes. It is free, needs no sign-up and gives an instant result that you can also download as a PDF.',
      },
      {
        q: 'How is the score worked out?',
        a: 'Statements are rated from 1 to 5, and the ones worded in the negative are reversed. In the situation questions, each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
      },
      {
        q: 'What is a good score on a time management skills assessment?',
        a: 'There is no pass mark. Scores are not compared with other people, only with your own answers. A lower area is simply the place where a small change will help most, and you can retake the test later to see whether it moved.',
      },
      {
        q: 'How do I know if I am good at managing time?',
        a: 'Look at three signs: do you finish the important things before small ones, do you start tasks well before deadlines, and do you have time left for rest. The five area scores show which of these is already working and which is not.',
      },
      {
        q: 'Is this a procrastination test?',
        a: 'Starting and procrastination is one of the five areas. It looks at how you begin tasks, what you tell yourself before delaying and how you handle big tasks. It is a self-reflection tool, not a diagnosis, and the other four areas show whether delay is a start problem or a planning or focus problem.',
      },
      {
        q: 'Can school students, college students and freshers use it?',
        a: 'Yes. You choose your stage before the result, and the extra questions and advice change to match: timetable and tuition for school, assignments and internals for college, task queues and shift hours for a first job, and meetings and family responsibilities for experienced professionals.',
      },
      {
        q: 'What is the difference between this and a study habits or soft skills assessment?',
        a: 'This test is about how you use hours across any kind of work or study. A study habits assessment looks at how you learn and revise, and the soft skills assessment covers leadership, teamwork and ownership. Time management supports both.',
      },
      {
        q: 'Is this a medical or stress test?',
        a: 'No. It is not a medical or mental-health assessment. If you feel overwhelmed all the time, or feel unable to cope, speak to a doctor, a counsellor or someone you trust. Tele-MANAS (14416) is a free national helpline.',
      },
    ],
    related: [
      {
        href: '/services/assessments/communication-skills-assessment/',
        title: 'Communication Skills Assessment',
        description: 'Listening, speaking, writing, feedback and presenting, scored separately. Useful for saying no clearly.',
      },
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'Leadership, teamwork, adaptability, ownership and problem solving in one report.',
      },
      {
        href: '/services/assessments/study-habits-self-assessment/',
        title: 'Study Habits Self-Assessment',
        description: 'How you learn, revise and prepare, scored by area.',
      },
      {
        href: '/career-resources/night-shift-plan-learn-7pm-11pm-without-burning-out/',
        title: 'Night Shift Plan: Learn 7pm to 11pm Without Burning Out',
        description: 'A practical way to fit learning around a full day of work.',
      },
      {
        href: '/blog/skills/career-development-skills/',
        title: 'Career Development Skills',
        description: 'The skills that help careers grow, and how to build them.',
      },
      {
        href: '/blog/job-search/skills-needed-for-first-job-india/',
        title: 'Skills Needed for a First Job in India',
        description: 'The work habits and skills that matter when you start your first job.',
      },
    ],
    breadcrumbDescription: 'Free time management self-assessment with five area scores and a 14-day routine.',
    webAppDescription:
      'A free original 40-question time management self-assessment covering priorities, planning, starting and procrastination, focus and interruptions, and saying no, with five scores, an overall score, stage-based advice, a 14-day routine and a downloadable report.',
    indexDescription:
      'Free time management test: 40 questions, five scores for priorities, planning, procrastination, focus and saying no, plus a 14-day routine.',
    indexNote: 'Free, about 7 minutes, PDF report',
  },

  depth: {
    stageHeading: 'Which of these describes you best?',
    stageNote:
      'Your hours are shaped by different things at each stage, such as a school timetable, internals, a task queue or meetings, so your report adjusts the advice to match.',
    stages: [
      {
        key: 'school',
        label: 'School student',
        description: 'Class 8 to 12, school timetable, tuition and board or entrance preparation',
        title: 'Build a weekly timetable that includes tuition, revision and rest',
        body: 'School days are already crowded with classes, tuition, homework and travel, and screen time quietly fills the gaps. A written weekly timetable that shows the free hours makes it easier to protect study time and sleep.',
        actions: [
          'Draw one page for the week with school, tuition, travel, meals and sleep first, then place homework and revision in the hours left.',
          'Keep your phone outside the study room for a fixed 45 minute block each evening and note how much homework you finish.',
          'Start the subject you like least first, before the one you enjoy, while your mind is fresh.',
        ],
      },
      {
        key: 'college',
        label: 'College student',
        description: 'Degree, diploma or professional course, with assignments, internals and sometimes part-time work',
        title: 'Spread deadlines, internals and any part-time work across the term',
        body: 'College gives you free hours but few reminders. Assignments, internal tests, lab records and sometimes a part-time job or coaching all arrive at once if you plan only at the last moment.',
        actions: [
          'At the start of each month, list every assignment, internal date and shift, and set a personal start date for each, working back from the due date.',
          'Do not leave lab records and journals for the last week. Finish a small part right after each practical.',
          'Fix two study blocks per day on your timetable, and treat classes you can skip as a chance to use, not as a free period to waste.',
        ],
      },
      {
        key: 'fresher',
        label: 'Fresher or job seeker',
        description: 'First job or looking for one, with a task queue, fixed office or shift hours, or an open day to structure',
        title: 'Manage your task queue, or structure a search day with no boss',
        body: 'In a first job, tasks come from several people and nobody explains the order. If you are still searching, your day has no structure at all. Either way, a short daily plan and a habit of clarifying priorities protects your time.',
        actions: [
          'If you are working, write your task list each morning and ask your manager once a week which item should come first when two clash.',
          'If you are job-hunting, split the day into fixed blocks: applications, skill practice, and a break, and stop at a set time.',
          'Note how long each type of task really takes for two weeks. Use those numbers when you give a delivery date.',
        ],
      },
      {
        key: 'professional',
        label: 'Working professional',
        description: 'Experienced, managing others, or balancing work with household responsibilities',
        title: 'Protect deep work from meetings, requests and household demands',
        body: 'With experience come more meetings, more requests from other people and often responsibilities at home. Your time is no longer only yours, so the main skill becomes deciding what you will not do and guarding a few blocks of focused time.',
        actions: [
          'Block two focus slots on your calendar each week and mark them busy, so meetings are not booked into them.',
          'Before accepting a meeting, ask for the agenda and your role in it. Decline or send a short written input if there is none.',
          'Agree one fixed hour of family time and one of rest with the people at home, so work does not slide into them every evening.',
        ],
      },
    ],
    tips: [
      'Every Sunday evening, write the three outcomes that would make the coming week a good one and keep them at the top of your notes. Check each morning that today\'s tasks serve one of them.',
      'Spend ten minutes before bed writing tomorrow\'s two most important tasks and the time you will do each. Starting the day with a plan removes the morning decision.',
      'Write the first step of the task in under ten words, such as "open the file and write the heading", and do only that for five minutes. Starting is easier when the first step is tiny.',
      'Put the phone in another room or a bag for one 30 minute block today. Tell family or colleagues you will reply after the block, so you are not tempted to check.',
      'Practise one polite refusal this week: "I cannot take this on today. I can look at it on Thursday." Say it once, to a small request, and notice that the world carries on.',
      'Sort tomorrow\'s list into two groups: matters for my goals, and only feels urgent because someone is asking. Do the first group before replying to the second.',
      'Add about a quarter more time to your usual estimate for each task and leave ten minutes between tasks. Check at the end of the week whether the new estimates were closer.',
      'On the day a task is given, spend 15 minutes on it, even if the deadline is two weeks away. An early start makes the rest of the work feel smaller.',
      'After a call, a message or someone at your desk interrupts you, write one line saying where you stopped before you attend to it. The note lets you return in a minute instead of ten.',
      'Instead of saying "yes, right now", say "I can help at four o\'clock". Fix a daily help slot so people learn when you are free.',
      'Move your most important task to the first hour of your best time of day, before email and messages. Do small tasks only after it has a clear start.',
      'Write down each day what you planned and what you actually did, for three days. The gap shows where the time goes, and it is usually in a few repeated places.',
      'Pick one task you have been avoiding and set a ten-minute timer now. When the timer rings you may stop, but most days you will carry on.',
      'Turn off notifications for social apps and groups during your work block and check them at set times, such as after lunch and at six. Interruptions you do not see cannot break your focus.',
      'Before agreeing to anything, count what is already due this week. Reply after the count, with a date when you can really do it, or a clear no.',
      'When two tasks clash, write the effect of delaying each one in a line. The one with the bigger cost of delay goes first, and you can explain that choice to anyone who asks.',
      'Move from only a daily list to a weekly view: open a calendar or timetable on Sunday, mark fixed commitments, then place study or work blocks and rest around them.',
      'Complete the sentence "I am putting this off because..." in writing. If the reason is fear of doing it badly, plan a rough first draft that no one will see.',
      'Find your clearest two hours by noting your alertness for a week. Schedule thinking tasks such as writing, problem solving or revision in that window, and routine tasks later.',
      'Put rest, a meal with family and exercise in your calendar as fixed slots this week. If something new comes up, move it around them instead of removing them.',
      'Before taking a new task, check it against your top three outcomes. If it does not serve one, offer a later date or ask what the person can drop in exchange.',
      'Every Friday spend ten minutes listing what you finished, what slipped and why. Move the unfinished items to next week with a new time, or delete them if they no longer matter.',
      'Do not wait for the right mood. Set a start time, sit at the desk, open the work and begin with the easiest part. Motivation usually arrives after you start, not before.',
      'Choose one task for a block and close every other tab and book. Write a list of the others and rank them. When you finish the first one, tick it before you start the next.',
      'Replace the guilty feeling with a script: "Thank you for thinking of me. I am at my limit this week. Could we look at it next week?" Use it for one request you would normally accept.',
    ],
    strongTip: 'This is already a habit that works for you. Keep it going and note what makes it easy, so you can copy that in your weaker areas.',
    domains: {
      priorities: {
        why: 'Time is limited, so what you do first matters more than how fast you work. People who decide the few important outcomes each week do not feel pulled in every direction by whatever arrives next.',
        roles: [
          'Exam preparation, projects and any work with more tasks than hours',
          'Roles with many requests, such as support, coordination, sales and operations',
          'Managers and parents balancing work with household responsibilities',
        ],
        routine: [
          'Days 1 to 3: Each evening, write the one task that must be done tomorrow and do it first the next morning.',
          'Days 4 to 7: Sort your pending list into important and urgent. Do the important ones before replying to anything that is merely noisy.',
          'Days 8 to 11: Write the three outcomes for your week and check each daily plan against them.',
          'Days 12 to 14: Look back at the week and count how many hours went to the three outcomes. Adjust the next week to raise that number.',
        ],
        mistakes: [
          'Treating every task as equally urgent because someone is waiting for it',
          'Doing easy tasks first to feel productive and leaving the hard one with no time left',
          'Saying yes to new work before checking what it will push out',
        ],
        proof: [
          'A week plan with three outcomes and a note of which ones you completed',
          'An example of a task you postponed deliberately because a bigger one mattered more',
          'A short log showing the share of your day spent on the main outcome',
        ],
        askOthers: 'If you had to pick the one thing I should finish this week, what would it be, and what could I leave for later?',
        talkingPoints: [
          'You choose the few tasks that matter and do them first',
          'You can explain why one task came before another',
          'You say what you will not do this week',
        ],
        midStep: 'Pick one recurring low-value task, such as checking feeds or repeated reformatting, and move it to a fixed twenty minutes after your main task.',
      },
      planning: {
        why: 'A plan turns a vague intention into a time and a place. When tasks have a slot and a realistic duration, you stop relying on memory and mood, and you can see early when the week is overbooked.',
        roles: [
          'Students handling many subjects, assignments and internals',
          'Project, finance, operations and teaching roles with fixed calendars',
          'Anyone running a household along with a job or study',
        ],
        routine: [
          'Days 1 to 3: Log what you do in half-hour blocks, so you know where the day actually goes.',
          'Days 4 to 7: Plan the next day each evening with fixed times for two main tasks and a gap after each.',
          'Days 8 to 11: Do a weekly view on Sunday: fixed commitments, study or work blocks, rest, buffer.',
          'Days 12 to 14: Review what took longer than planned and change your estimates for the next week.',
        ],
        mistakes: [
          'Planning for a perfect day with no gaps, so one delay breaks the whole schedule',
          'Keeping the plan only in your head',
          'Never checking how long tasks actually took, so estimates stay wrong',
        ],
        proof: [
          'A weekly plan with times, and a review note of what changed',
          'A before and after log of how long a repeated task takes',
          'Examples of deadlines you met because you started on the plan date',
        ],
        askOthers: 'When you see how I plan my time, where do my estimates usually go wrong, and what would you add to my schedule?',
        talkingPoints: [
          'You plan tomorrow today and review each week',
          'You give realistic estimates and leave a buffer',
          'You can show a plan and what you learnt from it',
        ],
        midStep: 'Keep one weekly template with fixed blocks for classes or work, study or deep work, errands and rest, and adjust it each Sunday instead of starting afresh.',
      },
      start: {
        why: 'Delay rarely means laziness. It often hides fear of doing a task badly, confusion about where to begin, or boredom. Naming the reason and shrinking the first step makes starting far easier than waiting for motivation.',
        roles: [
          'Anyone with a long project, thesis, portfolio, report or exam syllabus',
          'Job seekers who must apply, practise and follow up without a boss pushing them',
          'Professionals with creative or strategic work that has no one handing out deadlines',
        ],
        routine: [
          'Days 1 to 3: Choose one task you avoid and do a five-minute first step every day at the same time.',
          'Days 4 to 7: Use the ten-minute rule on two tasks each day. Note whether you carried on after ten minutes.',
          'Days 8 to 11: Before a delay, write the real reason in one line and answer it with a smaller step.',
          'Days 12 to 14: Pick one deadline two weeks away and do a first draft or outline this week, however rough.',
        ],
        mistakes: [
          'Waiting to feel ready or in the mood',
          'Making the first step too large, such as "write the report"',
          'Starting with research or tidying so that real work gets pushed back',
        ],
        proof: [
          'A task you broke into steps with dates and completed ahead of the deadline',
          'A note of how often you started within ten minutes of planning to',
          'An example of finishing a draft early and using the spare days to improve it',
        ],
        askOthers: 'When you give me a task, how soon do I usually start it, and what would help me begin earlier?',
        talkingPoints: [
          'You break big work into small first steps',
          'You start early and use spare time to improve the result',
          'You know your own delay triggers and have a way to handle them',
        ],
        midStep: 'Set a fixed daily start time for your hardest task and tell one person, so starting becomes a habit and not a decision.',
      },
      focus: {
        why: 'Deep work needs unbroken time. Each interruption costs minutes to recover from, so a day of small breaks can produce far less than a few protected blocks. Focus is mostly about setting up your surroundings.',
        roles: [
          'Exam preparation, coding, writing, design, analysis and any thinking-heavy work',
          'Open offices, shared homes and shift work where interruptions are constant',
          'Students and professionals who work from a phone or laptop with constant notifications',
        ],
        routine: [
          'Days 1 to 3: Work for 25 minutes with the phone in another room, then take a five-minute break. Do two rounds a day.',
          'Days 4 to 7: Turn off non-essential notifications and check messages at three fixed times.',
          'Days 8 to 11: Find your clearest two hours and move your hardest task into that window.',
          'Days 12 to 14: Raise the block to 40 or 45 minutes and write one line on what you finished in each.',
        ],
        mistakes: [
          'Keeping the phone on the desk face up and calling it multitasking',
          'Switching between many tasks without finishing one',
          'Doing demanding work when you are tired because it is the only time left',
        ],
        proof: [
          'A log of focus blocks and what each one produced',
          'Your notification and phone-setup changes and the effect on your output',
          'A project finished in fewer hours after you protected a daily block',
        ],
        askOthers: 'How often do you see me switch between tasks or check my phone while working, and what time of day do I seem sharpest?',
        talkingPoints: [
          'You protect blocks of deep work and tell others when you are in one',
          'You know your best hours and use them for demanding tasks',
          'You finish one task before opening another',
        ],
        midStep: 'Make a standing deep-work block at the same time each weekday and tell the people around you when it starts and ends.',
      },
      limits: {
        why: 'Every yes uses up time you cannot spend on something else. Saying no politely, or not now, keeps room for your own priorities, your rest and the work you have already promised.',
        roles: [
          'Team members and managers who receive many requests and last-minute asks',
          'Students who are asked to help with events, groups and friends\' work',
          'Anyone looking after family responsibilities alongside work or study',
        ],
        routine: [
          'Days 1 to 3: Before replying to any request, count what is due this week and write the number in your notes.',
          'Days 4 to 7: Use one "not now" reply, with a date, for a small request.',
          'Days 8 to 11: Block rest, a meal with family and exercise in your calendar and keep them for four days.',
          'Days 12 to 14: Tell one person which hours you protect, and ask what they would prefer you to drop when they ask for more.',
        ],
        mistakes: [
          'Agreeing quickly to avoid an awkward moment and then missing your own deadline',
          'Answering every message at once, so people expect an instant reply',
          'Cutting rest and sleep first when the week gets full',
        ],
        proof: [
          'An example of a request you declined or delayed politely and the outcome',
          'Your calendar showing blocked focus and rest time that you kept',
          'A time you asked what could be dropped before accepting extra work',
        ],
        askOthers: 'When I say yes to extra work, does the quality of my main work suffer, and how would you like me to tell you when I am full?',
        talkingPoints: [
          'You can decline or reschedule a request politely and offer an alternative',
          'You protect time for priorities and for rest',
          'You ask what to trade off before taking on more',
        ],
        midStep: 'Keep a short list of replies for common requests: yes with a date, not now, and a no with an alternative, so you do not decide under pressure.',
      },
    },
    thirtyDay: [
      'Week 1: Start the first half of your lowest-area routine, log your time in half-hour blocks for three days and write one line each evening on what you tried.',
      'Week 2: Finish the 14-day routine for your lowest area and ask one person who sees your work for honest feedback on it.',
      'Week 3: Move to your second-lowest area and use two steps from its list, while keeping the habit from week one.',
      'Week 4: Retake the self-assessment, compare each area score with the first time and write your plan for the next month.',
    ],
  },

  extras: [
    // School
    x(['school'], 'planning', 'I have a written weekly timetable that includes school, tuition, homework, revision and sleep.', 'Draw one weekly page with fixed items first: school, tuition, travel, meals and sleep. Place homework and revision in the free hours and stick it where you study.'),
    x(['school'], 'focus', 'I finish my homework without having a phone, TV or game within reach.', 'Keep the phone and any games in another room during the first 45 minutes of homework. Ask a family member to hold the phone if it is hard.'),
    x(['school'], 'start', 'I begin with the subject I like least when my mind is fresh, instead of leaving it for late evening.', 'Put the least liked subject in the first slot after you reach home and refresh, and finish it before you open the subject you enjoy.'),
    x(['school'], 'limits', 'I leave free time after tuition and school for rest or play instead of adding more classes or practice papers every evening.', 'Mark one evening each week with no classes or extra work, and use it for sport, family or rest. Rested days make study hours more useful.'),
    // College
    x(['college'], 'planning', 'I know the dates of my assignments, internals and lab submissions for the next month.', 'Open your department notice or timetable and put every internal, assignment and submission date in a calendar with a personal start date for each.'),
    x(['college'], 'start', 'I begin assignments in the first week they are given, not in the last two days.', 'Write the outline of each assignment within three days of getting it, even if the deadline is two weeks away. The early outline makes the rest easier.'),
    x(['college'], 'limits', 'If I do a part-time job, coaching or club work, I protect my study and class hours from it.', 'Write down the hours you have set for study and for the job, and tell your employer or club head which days you cannot do extra. Say it before the week begins.'),
    x(['college'], 'priorities', 'I put internals and subjects with heavier weight ahead of tasks that carry little credit.', 'Check how many marks each assignment and test carries, then spend your best hours on the ones that count most before polishing smaller tasks.'),
    // Fresher
    x(['fresher'], 'priorities', 'When two tasks from different people clash, I ask which one should come first instead of guessing.', 'Send a short message: "I have A due at 3 and B due at 4. Which should I do first?" This is a normal question and saves rework.'),
    x(['fresher'], 'planning', 'During office or shift hours I keep a task list and update it at the start and end of the day.', 'Open a simple note or sheet at login, list your tasks with the expected time for each, and check the list again before you leave.'),
    x(['fresher'], 'start', 'If I am job hunting, I have a fixed start time and fixed blocks for applications, skill practice and follow-ups.', 'Set a daily timetable: two hours for applications, one for a skill or practice test, one for follow-ups, and a stop time. Keep it for two weeks before judging it.'),
    x(['fresher'], 'limits', 'I say so politely when I am given more tasks than I can finish within working hours.', 'Say: "I have these three items for today. If I take this one, which should move?" Showing the list lets your manager choose.'),
    // Professional
    x(['professional'], 'focus', 'I protect at least two blocks a week for focused work when no meetings are booked.', 'Block two 90 minute slots on your calendar and mark them busy. Move them only for something that truly cannot wait.'),
    x(['professional'], 'limits', 'I ask for an agenda or a purpose before I accept a meeting.', 'Reply to meeting invites with "What decision do you need from me?" If there is no clear reason, ask for a written update instead of attending.'),
    x(['professional'], 'priorities', 'If I manage others, I spend time on my own priorities and not only on solving their problems.', 'Set two fixed hours a day for team questions and tell the team. Outside those hours, ask them to write the problem and one possible solution first.'),
    x(['professional'], 'planning', 'I plan my week around household duties such as school runs, cooking and care of family members, as well as work.', 'On Sunday, put school runs, meals, appointments and care duties on the same calendar as work. Look for clashes in advance and share the plan with the family.'),
  ],

  stageAdvice: {
    school: {
      priorities: sa('At school, every subject, tuition class and activity feels urgent, especially around tests and board or entrance preparation.', 'Each Sunday list the subjects where marks or understanding are weakest and give them the first study slots of the week.', 'Before adding a new class or activity, ask a parent or teacher what it replaces in your week.'),
      planning: sa('At school, a fixed timetable with school, tuition and travel leaves only a few free hours that need planning.', 'Draw the fixed hours first on a weekly page, then place homework, revision and rest in the gaps.', 'Check the timetable every Sunday and move one slot so that no day has both a test and a long tuition.'),
      start: sa('At school, delay shows up as leaving homework and project work for the night before.', 'On the day a project is given, write the three parts of it and do the smallest part that evening.', 'Begin the hardest homework within 15 minutes of reaching your desk and take a break only after it.'),
      focus: sa('At school, phones, TV and games compete with the same evening hours as homework.', 'Hand over the phone to a family member for a 45 minute study block, then collect it as a reward.', 'Study at a fixed table with only the books for one subject on it.'),
      limits: sa('At school, saying no may mean telling friends you are studying, or telling parents you need a rest day.', 'Say "I have a test on Friday, can we play on Saturday?" to turn down a plan without arguing.', 'Ask a parent to agree one evening a week with no extra class or practice test.'),
    },
    college: {
      priorities: sa('In college, assignments, internals, labs and activities arrive together with no one setting the order.', 'List all submissions for the month with marks and dates, and work first on the one with the highest marks nearest in time.', 'Drop or postpone one low-value activity during internal weeks and say so to the club head early.'),
      planning: sa('In college, free hours between lectures are easy to waste because nothing is fixed.', 'Use free periods for fixed tasks: library reading in one, assignment writing in another, and write the plan on your timetable.', 'Set a personal deadline one week before each real deadline for records and assignments.'),
      start: sa('In college, an assignment given three weeks ahead usually stays untouched for two and a half.', 'Within three days of getting an assignment, write its outline and a list of sources you need.', 'Meet a classmate for a study hour at a fixed time so that starting is not up to your mood.'),
      focus: sa('In college, group chats, reels and friends at the canteen cut study time into small pieces.', 'Mute class and friend groups during your two daily study blocks and check them at lunch and at night.', 'Study in the library or an empty classroom if your room or hostel is noisy.'),
      limits: sa('In college, friends, clubs and part-time work all ask for time and it is easy to agree to everything.', 'Before saying yes to a club task or a shift, check your assignment calendar for the coming week.', 'Tell your employer or senior which days are blocked for exams, and keep to that.'),
    },
    fresher: {
      priorities: sa('In a first job, tasks come from several people and everything is presented as urgent.', 'When tasks clash, send your manager the two options with the times and ask which comes first.', 'Mark the task that affects the client or the next team first on your list each morning.'),
      planning: sa('In a first job, fixed office or shift hours leave you little room to correct a bad day.', 'Spend the first ten minutes of the shift writing a task list with expected times, and update it before you leave.', 'Note how long routine tasks actually take for two weeks and use those figures when you give a delivery time.'),
      start: sa('In a first job, delay often comes from uncertainty about what is expected or fear of asking.', 'Ask one clear question about the goal, then start the task and send a rough version early for feedback.', 'Do the task you are least sure about in your first working hour, not just before the deadline.'),
      focus: sa('In a first job, chats, calls and colleagues dropping by break the work, and job seekers face endless feeds and videos.', 'Set your chat status to busy for one 45 minute block a day and tell your team when you will reply.', 'If you are searching for work, apply and practise away from your phone, with a timer for each block.'),
      limits: sa('In a first job, it is hard to say no because you want to look helpful and keep the job.', 'Show your list and ask which item to move before accepting extra work.', 'Agree to help by a specific time you can really meet rather than "right away".'),
    },
    professional: {
      priorities: sa('For experienced professionals, other people\'s requests and meetings can crowd out your own outcomes.', 'Write the three outcomes your role is judged on each month and check every new request against them.', 'Delegate or decline tasks that do not need you and tell the team who will handle them.'),
      planning: sa('For experienced professionals, work, meetings and family duties all need to be planned together.', 'Keep one calendar that shows work, school runs, care duties and appointments, and review it on Sunday.', 'Plan buffer time between meetings so one overrun does not cascade through the day.'),
      start: sa('For experienced professionals, delay often attaches to strategic or creative work that has no deadline.', 'Give each such task a date and a first small piece, and share the date with a colleague.', 'Do a rough version in one sitting before you refine it in a second.'),
      focus: sa('For experienced professionals, back-to-back meetings and constant messages leave no deep-work time.', 'Block two long focus slots per week on your calendar and ask your team to reserve them for urgent matters only.', 'Shorten meetings to 25 or 50 minutes so you have a gap to recover.'),
      limits: sa('For experienced professionals, family, seniors and juniors all ask for time and you may be the one who always says yes.', 'Agree one fixed hour each evening with the household that is free of work, and one weekend slot for yourself.', 'Reply to new requests with "I can do this by [date] if [other task] moves" so the trade-off is clear.'),
    },
  },

  scenarios: [
    sc('priorities', 'It is Monday morning and you have six things to do this week, three of which are small and quick, and one of which is a large task due Friday. What do you do?', [
      o('Do the three quick ones first so that the list looks shorter, and start the large one in the afternoon', 33, 'Quick wins feel good but they can take the best hours. Put a first block on the large task early in the day and fit the small ones around it.'),
      o('Reply to messages until you know what others want, then decide', 0, 'Letting incoming messages set your order means other people choose your priorities. Decide your main task first, then check messages.'),
      o('Plan the large task across the week with a block today, and fit the three quick ones in short gaps', 100, 'Strong. Starting the large task on Monday and using gaps for small ones protects the work that matters.'),
      o('Do the large task only on Thursday, when the deadline feels real', 0, 'A late start leaves no room for mistakes or delays. Begin earlier, even with a small first step.'),
    ]),
    sc('priorities', 'A friend, a senior and a family member each ask for help on the same day, and you also have your own deadline. What do you do?', [
      o('Help whoever asked first, then catch up on your own deadline at night', 33, 'Order of asking is not the same as importance. Check your own deadline before you commit your evening.'),
      o('Check your own deadline first, then offer each person a specific time you can help, and refuse the ones that clash', 100, 'Strong. You protect your commitment and still give honest answers with dates.'),
      o('Say yes to everyone to avoid hurting anyone', 0, 'Three yeses and one deadline rarely fit. Someone ends up let down, often yourself.'),
      o('Ignore all messages until your deadline is done', 67, 'Protecting your deadline is sensible, but silence leaves people unsure. A short reply with a time when you will be free is kinder and costs one minute.'),
    ]),
    sc('planning', 'You planned a full day of eight tasks and by midday only two are done. What do you do?', [
      o('Drop the plan and see how the rest of the day goes', 17, 'Without a plan, the remaining hours drift. A quick re-plan is better than none.'),
      o('Work faster and skip your lunch break to catch up', 33, 'Skipping rest usually lowers your output in the afternoon. Reduce the list instead.'),
      o('Pick the two tasks that must be done today, move the others to named days, and note why the morning went slower', 100, 'Strong. Re-planning keeps the important work safe, and the note helps you estimate better next time.'),
      o('Add the unfinished six tasks to tomorrow without any change', 50, 'Moving everything forward makes tomorrow overloaded as well. Choose what truly needs to be done and place the rest on specific days.'),
    ]),
    sc('planning', 'You have an important exam or deadline in three weeks. How do you plan the time?', [
      o('Wait until you are closer and then study or work in long hours', 0, 'Long hours at the end tire you and leave no room for revision. Spread the work over the three weeks.'),
      o('List the topics or parts, estimate hours for each, put them on a calendar with a buffer for revision and one rest day a week', 100, 'Strong. A plan with estimates, a buffer and rest is realistic and shows early if you are behind.'),
      o('Make an ambitious timetable of ten hours a day starting tomorrow', 33, 'Ambitious plans often collapse by the third day. Choose a number of hours you can keep for three weeks.'),
      o('Study whatever feels like the right topic each day', 50, 'Following your mood is flexible, but some topics get left out. Write the full list first so nothing is missed.'),
    ]),
    sc('start', 'You have a long report or project due in ten days and have not begun. How do you start?', [
      o('Wait for a burst of motivation, then do it all in one night', 0, 'Motivation can take a long time to arrive and one night leaves no time to fix errors. Start with a small piece today.'),
      o('Research for a few days so you are completely ready before writing', 33, 'Research is useful but can become delay. Set a limit and begin a rough draft early.'),
      o('Break it into parts, write the first rough section today even if it is poor, and fix it later', 100, 'Strong. A rough start breaks the avoidance, and a draft is easier to improve than a blank page.'),
      o('Ask a friend for their finished report to copy the structure', 17, 'Looking at a structure is fine, but copying work will not help your own learning. Use an outline and write the content yourself.'),
    ]),
    sc('start', 'You keep delaying a task and notice that you feel anxious each time you think of it. What do you do?', [
      o('Do easier tasks first and hope the anxiety fades', 33, 'Easier tasks feel good but the anxiety usually stays. Name what is worrying you and take a small step.'),
      o('Tell yourself you will do it better tomorrow with a fresh mind', 0, 'This sentence repeats every day. Pick a time and a five-minute first step for today.'),
      o('Write what you are afraid of, pick a five-minute step that avoids it, and tell a friend you will do it by evening', 100, 'Strong. Naming the fear and making a tiny, shared commitment works against the avoidance.'),
      o('Ask someone else to do it for you', 50, 'Sometimes help is right, but if it is your task, try the first step yourself and ask for help only with the part you cannot do.'),
    ]),
    sc('focus', 'You sit down to work for an hour and your phone keeps buzzing with messages. What do you do?', [
      o('Reply to each one quickly so they stop', 17, 'Each reply breaks your concentration and invites another. Set a time to reply instead.'),
      o('Put the phone in another room or on silent for the hour and check it when the block ends', 100, 'Strong. Removing the cue is stronger than relying on willpower.'),
      o('Turn the phone face down on the desk', 50, 'It helps a little, but you can still see the buzz. Move it out of reach.'),
      o('Keep working and ignore it, while feeling distracted', 33, 'Ignoring takes effort too. Remove the phone from the room for the hour.'),
    ]),
    sc('focus', 'In the middle of deep work, a colleague, sibling or friend comes in with a question that is not urgent. What do you do?', [
      o('Stop and help right away so you do not seem rude', 33, 'Politeness is good, but each stop costs minutes. Say when you will be free.'),
      o('Say you are in the middle of something and ask whether you can talk in twenty minutes', 100, 'Strong. A clear time keeps the relationship and your block.'),
      o('Pretend not to hear and keep working', 0, 'This hurts the relationship and is not needed. A short, kind answer takes ten seconds.'),
      o('Answer the question quickly, then try to continue', 67, 'Short answers can be fine if the issue is small, but write down where you stopped before you reply so that you can resume quickly.'),
    ]),
    sc('limits', 'A senior or manager asks you for a favour that will take two hours, and your own work is already full this week. What do you do?', [
      o('Say yes immediately and work late', 17, 'Late nights make a habit of overwork. First check what else will slip.'),
      o('Say yes and quietly drop your own task', 0, 'Dropping your own work in silence may cause a problem later. Tell people what is moving.'),
      o('Show the list, ask which task should move, or offer a time next week for the favour', 100, 'Strong. You are cooperative and you make the trade-off visible, so the senior chooses knowingly.'),
      o('Refuse without giving any reason', 33, 'You protect your time, but a short reason and an alternative date keep the relationship.'),
    ]),
    sc('limits', 'You have fixed Sunday morning for rest or exercise, and a friend or relative asks you to help with a non-urgent task that morning. What do you do?', [
      o('Cancel your plan and go, because it is hard to refuse', 17, 'If this happens every week, your rest vanishes. Offer a different time.'),
      o('Say you are busy but do not explain', 33, 'It protects the morning, but an alternative day shows you care. Add a time.'),
      o('Tell them your Sunday morning is taken and offer Sunday afternoon or another day that suits both', 100, 'Strong. You keep your rest and still show willingness to help.'),
      o('Go but feel resentful and rush through the task', 0, 'Resentment hurts the help and your morning. Decide beforehand what you can give.'),
    ]),
    // Stage specific
    { ...sc('planning', 'School student: your school timetable, tuition, homework and a test next week leave only two free hours each evening. How do you use them?', [
      o('Watch videos or play first to relax, then study late', 17, 'A short break helps, but late-night study is tiring. Study first and keep the break as a reward.'),
      o('Do homework in the first hour, test revision in the second, and keep the phone for after', 100, 'Strong. Homework and revision have fixed slots, and the phone is a reward and not a distraction.'),
      o('Revise for the test only, and do homework in school the next morning', 0, 'Copying or rushing homework in school can hurt your learning and your teacher\'s trust. Include it in your evening plan.'),
      o('Split the two hours into many short slots across subjects', 50, 'Variety helps, but too many switches waste time. Two or three subjects in one evening work better.'),
    ]), stages: ['school'] },
    { ...sc('start', 'College student: you have three assignments, a lab record and an internal test in the next two weeks, and a part-time shift on two evenings. What do you do?', [
      o('Wait to see which deadline is closest and start that one', 33, 'The closest one will always be last-minute. Make a plan for all of them now.'),
      o('List all deadlines and shifts, set a start date for each, and do a small part of the biggest one this week', 100, 'Strong. A complete list and early starts spread the load and leave room for shifts.'),
      o('Ask for extensions on everything', 0, 'An extension can help in a real emergency, but asking for all of them signals poor planning. First make a schedule and then see what truly needs extra time.'),
      o('Skip the shifts to focus on study', 67, 'Protecting study is reasonable, but check with your employer first. Swapping one shift may be enough.'),
    ]), stages: ['college'] },
    { ...sc('priorities', 'Fresher or job seeker: your manager gives you a task, and another colleague asks for something else at the same time. Both say they are urgent. What do you do?', [
      o('Do the one from the person you like more', 0, 'Preferences are not a good way to choose. Ask who should come first.'),
      o('Do both at once so no one waits', 33, 'Doing both at once usually means both are late. Ask your manager to decide which is first.'),
      o('Tell your manager about both, with the time each needs, and ask which should come first', 100, 'Strong. It makes the clash visible, and your manager owns the decision.'),
      o('Pick the shorter task, finish it fast, and then tell the other person you will start soon', 67, 'Short tasks can be a fair choice, but check with your manager if there is a clash, so you do not delay something more important.'),
    ]), stages: ['fresher'] },
    { ...sc('limits', 'Working professional: your calendar has back-to-back meetings all day, and an important report due tomorrow is still not done. What do you do?', [
      o('Attend all meetings and finish the report late at night', 17, 'Late nights cost the next day as well. Make space in the day by changing meetings.'),
      o('Decline or shorten the meetings where your presence is not needed, send written input, and block time for the report', 100, 'Strong. You protect the deadline and still contribute through other means.'),
      o('Skip all meetings without telling anyone', 0, 'Disappearing damages trust. Decline in advance, with a reason.'),
      o('Ask your team to take over the report', 33, 'Delegating can help, but at this stage a new person needs time to learn the context. Ask earlier next time.'),
    ]), stages: ['professional'] },
  ],

  phrases: {
    priorities: [
      '"This week my three main outcomes are ... Everything else comes after these."',
      '"If I do this today, which of the other two tasks should move?"',
      '"This matters, but it is not urgent. Can we look at it on [day]?"',
    ],
    planning: [
      '"I will do this on [day] from [time] to [time]."',
      '"That usually takes me about [time], so I will plan it with a buffer."',
      '"I am adding this to my calendar so it does not slip."',
    ],
    start: [
      '"I will begin with a rough version today, and refine it tomorrow."',
      '"The first step is ... I will do that in the next ten minutes."',
      '"I am delaying this because ... What is the smaller step I can take?"',
    ],
    focus: [
      '"I am in a focus block until [time]. I will reply after that."',
      '"Can we talk at [time]? I need to finish this first."',
      '"I will check messages at [time] and [time], not continuously."',
    ],
    limits: [
      '"I cannot take this on today. I can look at it on [day]."',
      '"I would like to help. What can move if I take this?"',
      '"I am keeping [time] free for [rest, family or study], so I can meet you after that."',
    ],
  },

  stagePlan: {
    school: [
      'Draw one weekly page with school, tuition, travel, meals and sleep first, then place homework and revision in the free hours.',
      'Keep your phone in another room for one 45 minute homework block every evening this week.',
      'Start the subject you like least first, and write down which one you started with for five days.',
      'Ask a parent or teacher to review your timetable after two weeks and agree one rest evening.',
    ],
    college: [
      'Put every assignment, internal and shift date for the next month in a calendar with a personal start date.',
      'Write the outline of each new assignment within three days of getting it.',
      'Fix two daily study blocks on your timetable and mute class groups during them.',
      'Review on Sunday what you finished, and move or drop low-value tasks before internals.',
    ],
    fresher: [
      'Write a task list with expected times at the start of every shift or working day and update it before you leave.',
      'When two tasks clash, ask your manager which comes first, with the time each needs.',
      'Track how long your routine tasks take for two weeks and use those numbers for delivery times.',
      'If you are job hunting, fix daily blocks for applications, skill practice and follow-ups, and stop at a set time.',
    ],
    professional: [
      'Block two weekly focus slots on your calendar and mark them busy.',
      'Ask for an agenda or purpose before accepting meetings, and decline or send written input where there is none.',
      'Put household duties and appointments on the same calendar as work, and review them on Sunday.',
      'Reply to extra requests with a date and the trade-off, so people see what moves.',
    ],
  },

  talk: {
    priorities: {
      q: 'If I had to pick the one thing to finish this month, how would you choose it?',
      a: 'Ask a teacher, mentor or senior how they decide, and ask for one example of a time they dropped a task. Use their method on your own list this week.',
      line: 'Note: top three outcomes this month are [outcome 1], [outcome 2], [outcome 3]. Reviewed on [date].',
    },
    planning: {
      q: 'How do you plan your week, and what do you do when the plan breaks?',
      a: 'Ask for one tool or template they use and how long they take to plan. Try theirs for a week and keep what fits.',
      line: 'Note: weekly plan template saved at [place]. Planning time on [day] at [time]. Review every [day].',
    },
    start: {
      q: 'What helps you begin a task that you do not feel like starting?',
      a: 'Ask for one trick and one example. Try it on a small avoided task within 24 hours, so that it becomes a habit and not just advice.',
      line: 'Note: when I delay, my first step is [step]. I will do it at [time] each day.',
    },
    focus: {
      q: 'How do you protect time for concentrated work when people around you keep asking for things?',
      a: 'Ask when they work best and how they tell others they are busy. Copy one habit, such as a fixed block or a signal, and try it for two weeks.',
      line: 'Note: my focus blocks are [days and times]. I check messages at [times].',
    },
    limits: {
      q: 'How do you say no or not now to requests without upsetting people?',
      a: 'Ask for the exact words they use and for one time it went well or badly. Practise one sentence out loud and use it on a small request this week.',
      line: 'Note: my protected time is [slots]. My reply when I am full is: "[sentence]".',
    },
  },

  talkTitles: {
    strong: 'Use your strongest area when you talk to a mentor, teacher or senior',
    weak: 'Questions to ask about your lowest area',
    intro: 'Bring these to a teacher, mentor, senior or manager whose time you respect. Specific questions get specific answers you can try this week.',
    mode: 'ask',
  },
};
