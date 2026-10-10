// Burnout Self-Assessment: a self-rating of everyday work and study balance.
// Everyday habit guidance only. Not a medical or mental-health assessment and not a diagnosis.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

type Core = { d: string; text: string; tip: string; reverse?: boolean };

const CORE: Record<string, Core[]> = {
  energy: [
    {
      d: 'energy',
      text: 'I have some energy left at the end of most days for something I enjoy.',
      tip: 'Put one small evening plan in your calendar, such as a walk, a call home or one episode of a show, and stop work or study at a fixed time on at least three days this week so there is something left to protect.',
    },
    {
      d: 'energy',
      text: 'By midday I often feel I have nothing left to give.',
      reverse: true,
      tip: 'For one week, note the time your energy drops and what the two hours before it looked like. Move your hardest task to your best hour and add a ten minute break with water and a short walk just before the usual dip.',
    },
    {
      d: 'energy',
      text: 'A weekend or a day off usually gives me back a good part of my energy.',
      tip: 'If days off do not refill you, plan one half day with no task at all: a long meal, a nap, a walk or time with family. Do not use the whole day for chores, catch-up work and screens.',
    },
    {
      d: 'energy',
      text: 'I dread starting my day, even before anything has gone wrong.',
      reverse: true,
      tip: 'Name the first thing you dread: a person, a task, the commute or just the start. Change only that one thing this week, for example start with tea before opening any message, or do the dreaded task first for ten minutes. If the dread stays for weeks, talk to someone you trust.',
    },
    {
      d: 'energy',
      text: 'I can stay with one task or class for a stretch without my mind going flat.',
      tip: 'Work in blocks of about forty minutes with a five to ten minute break away from the screen, and keep your phone in another room during the block. If your focus stays flat for weeks even after rest, mention it to a doctor.',
    },
  ],
  interest: [
    {
      d: 'interest',
      text: 'I can still find parts of my work or studies that interest me.',
      tip: 'List three things from the last month that you did not mind or even liked: a task, a person, a skill. Ask to do more of one of them, or schedule it as the first thing on two days this week.',
    },
    {
      d: 'interest',
      text: 'I know why my work or study matters to me, even on dull days.',
      tip: 'Write one sentence on what this gives you, such as income for your family, a skill, or a step toward a goal. Keep it on the first page of your notebook and read it on the days that feel flat.',
    },
    {
      d: 'interest',
      text: 'These days I do the bare minimum to get through, and I do not care how it turns out.',
      reverse: true,
      tip: 'Choose one task this week and finish it slightly better than required, for example by checking it once more or adding one example. Notice whether any care returns. Do not try to fix everything at once.',
    },
    {
      d: 'interest',
      text: 'I feel distant from the people I work or study with, as if I am only going through the motions.',
      reverse: true,
      tip: 'Have one ten minute conversation this week with a colleague or classmate about something other than tasks, such as at tea or lunch. Connection often returns in small amounts, not in one big step.',
    },
    {
      d: 'interest',
      text: 'I still learn something new in my work or studies that I feel pleased about.',
      tip: 'Pick one small thing to learn in the next two weeks, such as a shortcut a senior can show you or one twenty minute lesson. Write one line every Friday on what you learnt.',
    },
  ],
  control: [
    {
      d: 'control',
      text: 'I know what matters most this week and can say it in a few lines.',
      tip: 'On Monday write your top three outputs for the week. If you cannot, ask your manager, teacher or senior: "If I can finish only three things this week, which should they be?"',
    },
    {
      d: 'control',
      text: 'I can ask for a later date or say no when my plate is full.',
      tip: 'Keep one ready sentence: "I can do this by Thursday if I move the other task, which one should I do first?" Use it once this week, and notice that it is a question about priority, not a refusal.',
    },
    {
      d: 'control',
      text: 'My workload is so heavy that I never reach the end of my list.',
      reverse: true,
      tip: 'Count your tasks and the hours they need for three days. Sort them into must do, can wait and can drop, and show the list to your manager, teacher or a senior and ask which items to defer or share.',
    },
    {
      d: 'control',
      text: 'I have some say in how I do my work or plan my study, such as the order, method or timing.',
      tip: 'Find one thing you can decide, such as the order of your tasks, the hour for focused work or the place you study. Decide it on purpose every day this week. Where you have no choice, ask for one small one.',
    },
    {
      d: 'control',
      text: 'Plans and priorities change so often that much of my effort feels wasted.',
      reverse: true,
      tip: 'When a change comes, send a two line message confirming the new priority and what is being dropped. Keep a log of changes for two weeks so you can show the pattern calmly when you discuss it.',
    },
  ],
  recovery: [
    {
      d: 'recovery',
      text: 'I sleep enough on most nights to start the next day ready.',
      tip: 'Fix a wake time you can keep for fourteen days, count back the hours of sleep you need, and set a reminder thirty minutes before that to put work and books away.',
    },
    {
      d: 'recovery',
      text: 'I eat my meals at fairly regular times and do not usually skip them for work or study.',
      tip: 'Fix three meal times, keep one quick option ready such as curd rice, eggs, fruit or a sabzi roll, and eat away from your desk for at least ten minutes.',
    },
    {
      d: 'recovery',
      text: 'I check work messages or study chats in bed and on my days off.',
      reverse: true,
      tip: 'Choose a cut-off hour, mute work apps after it and move them off your first phone screen. Tell colleagues or classmates your reply hours so that the silence is expected, not a surprise.',
    },
    {
      d: 'recovery',
      text: 'I use my weekly off and my leave days for rest, and I do not spend them working.',
      tip: 'Book one leave day or long weekend in the next month and tell people in advance. Hand over one clear note about what is pending so that you can switch off without worry.',
    },
    {
      d: 'recovery',
      text: 'I do something that has nothing to do with work or study, such as a sport, prayer, music or a hobby, at least once a week.',
      tip: 'Put one fixed weekly slot in your calendar for it and treat it like a class you do not miss. Start with thirty minutes if a longer time feels impossible.',
    },
  ],
  support: [
    {
      d: 'support',
      text: 'I have at least one person I can be honest with about how work or study is going.',
      tip: 'Choose one person, a friend, sibling, senior or cousin, and agree on a short weekly chat. Say plainly what is going well, what is heavy and what you need.',
    },
    {
      d: 'support',
      text: 'I can tell my manager, teacher or family when I am struggling, and I expect a fair hearing.',
      tip: 'Pick a calm time and say three things: what is happening, how it affects your work, and one request such as a deadline change or a hand-off. A specific request is easier for people to act on.',
    },
    {
      d: 'support',
      text: 'I keep my difficulties to myself because I think I should manage alone.',
      reverse: true,
      tip: 'Tell one trusted person one specific difficulty this week, for example that you are not sleeping before deadlines. Saying it aloud often makes it smaller, and they may offer something practical.',
    },
    {
      d: 'support',
      text: 'People around me know when I am available and when I am not.',
      tip: 'Share your working hours, your study hours and your family time with the people concerned, and write them in your status or calendar. Repeat it kindly once or twice until it is understood.',
    },
    {
      d: 'support',
      text: 'I take on extra requests because I find it hard to disappoint people.',
      reverse: true,
      tip: 'Use a delay line such as "Let me check my list and reply by evening". It gives you time to decide, not just to agree. Practise it on one small request this week.',
    },
  ],
};

const ORDER = ['energy', 'interest', 'control', 'recovery', 'support'];
const CORE_LIST: Core[] = [];
for (let i = 0; i < 5; i++) for (const k of ORDER) CORE_LIST.push(CORE[k][i]);

export const bundle: SkillTestBundle = {
  test: {
    id: 'burnout-self-assessment',
    slug: 'burnout-self-assessment',
    pageUrl: '/services/assessments/burnout-self-assessment/',
    breadcrumbName: 'Burnout Self-Assessment',
    metaTitle: 'Burnout Self-Assessment | Which Area Needs Attention First',
    metaDescription:
      'Free burnout self-assessment: 41 questions and five scores for energy, interest, workload, rest and support. A habit check, not a diagnosis. No sign-up.',
    h1Lead: 'Burnout',
    h1Accent: 'Self-Assessment',
    eyebrow: 'Free burnout test: find which area needs attention first',
    heroSub:
      'Searching for a burnout test or wondering if you are burnt out? This free self-assessment looks at five everyday areas of your work or study life, energy, interest, workload and control, rest, and people and support, and shows which area needs attention first. It is a habit check, not a diagnosis, and it cannot tell you whether you have any condition.',
    stats: [
      { value: '41', label: 'questions' },
      { value: '5', label: 'life areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five areas of work or study life from your own ratings',
      'About 6 minutes, with advice for your stage of life',
      'A two-week routine for the area that needs attention first',
    ],
    reportTitle: 'Burnout Self-Assessment Report',
    reportFile: 'future-career-school-burnout-self-assessment.pdf',
    reportKicker: 'WORK AND STUDY BALANCE REPORT',
    resultKicker: 'Your work and study balance result',
    scoreLabel: 'Overall balance across five areas',
    bands: {
      high: 'Your everyday balance in this area looks healthy.',
      mid: 'Some things are in place, with gaps worth looking at.',
      low: 'This is the area that may deserve your attention first.',
    },
    domainsHeading: 'Five areas of work and study life this self-assessment covers',
    domainsIntro:
      'Strain shows up in different places for different people. A higher score in an area means a healthier everyday balance there. The area with the lowest score is a good place to start, and it is not a verdict about you.',
    domains: [
      {
        key: 'energy',
        name: 'Energy and exhaustion',
        short: 'How much is left in you through and after the day',
        strong: 'You usually have some energy left after the day, your days off help you recover, and you can stay with a task without your mind going flat.',
        weak: 'You often feel emptied out early in the day, dread the start of it, or find that days off do not bring your energy back.',
        plan: [
          'Note for one week the time your energy drops and move your hardest task to your best hour.',
          'Put one small thing you enjoy in your calendar for at least three evenings, and stop work or study at a fixed time on those days.',
          'Keep one half day a week with no task at all, and add a short break away from the screen in every long block.',
        ],
      },
      {
        key: 'interest',
        name: 'Interest and connection to the work or study',
        short: 'Whether the work or study still means something to you',
        strong: 'You can still find parts of your work or studies that interest you, you know why it matters, and you feel connected to the people around you.',
        weak: 'Things feel flat or pointless, you do only the minimum, or you feel distant from colleagues and classmates.',
        plan: [
          'List three things from the last month that you did not mind or enjoyed, and ask to do more of one of them.',
          'Write one sentence on why this work or study matters to you and read it on flat days.',
          'Have one ten minute conversation a week with a colleague or classmate about something other than tasks.',
        ],
      },
      {
        key: 'control',
        name: 'Workload and control',
        short: 'Whether the load is clear, manageable and partly in your hands',
        strong: 'You know what matters most, you can ask for a different date when you are full, and you have some say in how you work or study.',
        weak: 'The list never ends, priorities keep changing, or you feel you cannot say no or choose how to do things.',
        plan: [
          'Count your tasks and hours for three days, then sort them into must do, can wait and can drop.',
          'Show the list to a manager, teacher or senior and ask which items to defer or share.',
          'Practise one ready sentence for asking about priority, and decide one small thing each day that is yours to choose.',
        ],
      },
      {
        key: 'recovery',
        name: 'Rest, sleep and time off',
        short: 'How well you switch off and refill',
        strong: 'You sleep and eat at fairly regular times, you protect your off hours and leave, and you have something outside work or study that you enjoy.',
        weak: 'Sleep and meals are the first things to go, work follows you into bed and days off, or leave days end up as working days.',
        plan: [
          'Fix a wake time and a wind-down reminder for fourteen days, and set a cut-off hour for messages.',
          'Fix three meal times and eat away from your desk for ten minutes.',
          'Book one leave day or long weekend in the coming month and add one fixed weekly slot for a non-work activity.',
        ],
      },
      {
        key: 'support',
        name: 'People, boundaries and support',
        short: 'Who you can talk to and how you protect your time',
        strong: 'You have people you can be honest with, others know your available hours, and you can say when you are struggling.',
        weak: 'You carry difficulties alone, say yes to everything, or find that work and study spill into every hour with no clear limits.',
        plan: [
          'Choose one person and agree a short weekly chat about how things are going.',
          'Share your working hours, study hours and family time with the people concerned.',
          'If you ever feel unable to cope, speak to a doctor, a counsellor or someone you trust, and you can call Tele-MANAS on 14416, a free national helpline.',
        ],
      },
    ],
    questions: CORE_LIST.map((q) => (q.reverse ? { d: q.d, text: q.text, reverse: true } : { d: q.d, text: q.text })),
    readingTitle: 'How to read your burnout self-assessment result',
    readingSections: [
      {
        title: 'A higher score means a healthier balance',
        body: [
          'Statements are worded so that agreeing describes a healthy pattern, such as having some energy left in the evening, knowing what matters this week or being able to talk to someone. Statements about strain are reversed, so saying they are not true for you raises your score.',
          'The result answers one question: which area of your work or study life needs attention first. It does not say that you are or are not burnt out, and it cannot.',
        ],
      },
      {
        title: 'A low area is a pointer, not a label',
        body: [
          'A low score in an area means your answers there describe more strain or fewer supports at the moment. That is useful information about where a small change may help. It is not a judgement about your ability, your character or your future.',
        ],
      },
      {
        title: 'Start with one area and retake after a few weeks',
        body: [
          'Take the fourteen day routine for your lowest area and do only that. Then retake the self-assessment and compare area by area. One steady change usually works better than trying to fix everything together.',
          'Your stage of life matters. Exam preparation, first jobs with targets, senior roles and self-employment each bring different loads, so your report adds advice for the stage you pick.',
        ],
      },
      {
        title: 'When a self-rating is not enough',
        body: [
          'A tool like this can only describe your own answers on one day. If you feel exhausted for weeks, cannot sleep or eat, feel hopeless, or cannot cope, please talk to a doctor, a counsellor or someone you trust. You can also call Tele-MANAS on 14416, a free national helpline.',
        ],
      },
    ],
    limits: [
      'This is not a diagnosis, a medical test or a mental-health assessment. It cannot tell you whether you have or do not have burnout or any other condition.',
      'It is a self-rating of everyday habits and conditions, and it shows only how you describe your life today. A different week, a different exam period or a different project may give a different result.',
      'If you feel unable to cope, are very low for weeks, or have thoughts of harming yourself, please see a doctor or a counsellor or speak to someone you trust. You can call Tele-MANAS on 14416, a free national helpline.',
      'Scores are not compared with other people, so there is no pass mark. A high score does not mean everything is fine, and a low score does not mean something is wrong with you.',
      'Advice here is general habit guidance. Some causes of strain, such as an unsafe or unfair workplace, are not solved by personal habits, and may need a conversation with a manager, HR, a union or a professional.',
    ],
    faqs: [
      {
        q: 'Is this burnout test free?',
        a: 'Yes. The test is free, takes about six minutes and needs no sign-up. You get scores for five areas, advice for your stage of life and a downloadable report.',
      },
      {
        q: 'Is this a medical or mental-health test, and can it tell me if I am burnt out?',
        a: 'No. It is not a diagnosis and not a medical or mental-health assessment, so it cannot say whether you are burnt out or have any other condition. It shows which area of your work or study life needs attention first. If you feel unable to cope, or have thoughts of harming yourself, please see a doctor or a counsellor or speak to someone you trust, and you can call Tele-MANAS on 14416, a free national helpline.',
      },
      {
        q: 'How is the score worked out?',
        a: 'Statements are rated from 1 to 5 and the ones about strain are reversed, so a higher score always means a healthier balance. In the situation questions each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
      },
      {
        q: 'What is a good score on a work burnout quiz like this?',
        a: 'There is no pass mark. Scores are only against your own answers and are not compared with anyone else. Use them to see which of the five areas has the most room for a small change.',
      },
      {
        q: 'Can students use this as a student burnout test?',
        a: 'Yes. Choose the student stage, which covers school, college and exam preparation, and the statements and advice change to fit. The result still describes habits and conditions, and it does not diagnose anything.',
      },
      {
        q: 'Can freshers, managers and freelancers use it?',
        a: 'Yes. There are four stages: student, early career, experienced or managing others, and independent work such as freelancing, founders, small-business owners and people also running a home. Each stage gets its own statements and advice.',
      },
      {
        q: 'What is the difference between this and the exam stress or time management self-assessments?',
        a: 'The exam stress self-assessment looks at coping around exams. The time management self-assessment looks at planning and focus. This one looks at the wider balance of energy, interest, workload, rest and support across work or study life. They work well together.',
      },
      {
        q: 'What should I do if my score is low?',
        a: 'A low area score points to one place to start, not to something wrong with you. Follow the fourteen day routine for that area and retake the test after a few weeks. If you feel heavy for many days, talk to a doctor, a counsellor or someone you trust.',
      },
    ],
    related: [
      {
        href: '/services/assessments/time-management-self-assessment/',
        title: 'Time Management Self-Assessment',
        description: 'Planning, focus and follow-through, scored by area.',
      },
      {
        href: '/services/assessments/exam-stress-self-assessment/',
        title: 'Exam Stress Self-Assessment',
        description: 'Everyday exam coping habits, scored by area.',
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
        href: '/career-resources/night-shift-plan-learn-7pm-11pm-without-burning-out/',
        title: 'Night Shift Plan: Learn 7 PM to 11 PM Without Burning Out',
        description: 'A study plan that protects your sleep and your day job.',
      },
      {
        href: '/blog/career-change/career-plateau-how-to-break-through-india/',
        title: 'Career Plateau: How to Break Through',
        description: 'What to try when work feels stuck and flat.',
      },
      {
        href: '/blog/career-change/mid-career-strategies-india/',
        title: 'Mid-Career Strategies',
        description: 'Planning your next step in the middle of your career.',
      },
    ],
    breadcrumbDescription: 'Free burnout self-assessment with five area scores and a two-week plan. Not a diagnosis.',
    webAppDescription:
      'A free original 41-question burnout self-assessment covering energy and exhaustion, interest and connection, workload and control, rest, sleep and time off, and people, boundaries and support, with five scores, an overall score, a habit plan and a downloadable report. It is not a diagnosis and not a medical or mental-health assessment.',
    indexDescription: 'Free burnout self-assessment: five scores for energy, interest, workload, rest and support. Not a diagnosis.',
    indexNote: 'For students, early and senior professionals, and freelancers',
  },

  depth: {
    stageHeading: 'Which stage of life are you in?',
    stageNote:
      'Strain looks different for a student, a first-job employee, a senior professional and a self-employed person, so your report adjusts the advice to your stage.',
    stages: [
      {
        key: 'student',
        label: 'Student',
        description: 'School, college or exam preparation',
        title: 'Keep long study stretches sustainable',
        body: 'Student life can mean long hours of study, tuition, comparison with classmates and the weight of results. The most useful work is a routine with real breaks, honest talk with someone near you, and a plan for the days after a bad test.',
        actions: [
          'Divide study into blocks of about forty to fifty minutes with a short break away from the screen, and keep one lighter half day in every week.',
          'Fix your sleep time for the whole term and avoid all-night sessions, including before tests.',
          'Tell one teacher, senior or family member honestly how the term is going, and ask them what they would drop if they were in your place.',
        ],
      },
      {
        key: 'early',
        label: 'Early career',
        description: 'First jobs, shifts and targets',
        title: 'Learn the pace without losing your evenings',
        body: 'First jobs often bring shifts, targets, a learning curve and a wish to prove yourself. It is easy to say yes to everything. The aim is a pace you can keep, clear expectations, and a few hours that stay yours.',
        actions: [
          'Ask your manager in your first month which three results matter most, and write them down.',
          'Fix a switch-off routine after shifts, such as a shower, a meal and no work messages for the first hour.',
          'Choose one senior colleague to ask small questions, so that learning does not happen alone at night.',
        ],
      },
      {
        key: 'experienced',
        label: 'Experienced professional',
        description: 'Senior roles and managing others',
        title: 'Carry responsibility without carrying everything',
        body: 'Senior roles often mean other people\'s problems reach you all day, along with your own targets. Strain builds when everything runs through you. The work is delegating, saying what you will not do, and protecting time to think.',
        actions: [
          'List the tasks only you must do and hand over or drop one of the rest this month.',
          'Block two hours in the week for thinking without meetings, and put them in your team\'s calendar.',
          'Set response times for your team, so that urgent has a meaning and everything else can wait for a day.',
        ],
      },
      {
        key: 'independent',
        label: 'Independent worker',
        description: 'Freelancers, founders, small-business owners and people also running a home',
        title: 'Build limits when nobody else sets them',
        body: 'When you are your own manager, work has no natural end. Irregular income can make every offer feel impossible to refuse, and home duties may fill whatever time is left. You need limits that you set yourself.',
        actions: [
          'Set working hours and a weekly day off, and tell your clients and your family about them.',
          'Keep a buffer of a few months of basic costs if you can, so that a quiet month feels less frightening.',
          'Write a short rule for new work, such as a price floor or a maximum number of open projects, and apply it before replying.',
        ],
      },
    ],
    tips: CORE_LIST.map((q) => q.tip),
    strongTip: 'This is a healthy pattern. Protect it during your busiest weeks, because it is usually the first thing to go.',
    domains: {
      energy: {
        why: 'Your energy is the base for everything else. Noticing when it drops, what drains it and what refills it helps you plan your day around it, instead of blaming yourself for being tired.',
        roles: [
          'Long study days or shift work, where energy has to last through many hours',
          'Weeks with targets or deadlines, when evenings are the first to be given up',
          'Days off, which only help if they actually include rest',
        ],
        routine: [
          'Days 1 to 3: Note the time your energy drops each day and what you did in the two hours before it.',
          'Days 4 to 7: Move your hardest task to your best hour, and add a ten minute break with water and a walk before the usual dip.',
          'Days 8 to 11: Put one small enjoyable plan in the calendar for three evenings and stop work or study on time on those days.',
          'Days 12 to 14: Keep one half day with no task at all, and note how your next morning feels.',
        ],
        mistakes: [
          'Pushing through the dip with more tea or coffee instead of a short break',
          'Using days off for chores and catching up on work, so that nothing is rested',
          'Planning every hour of the day so that there is nothing left for yourself',
        ],
        proof: [
          'A week of notes on when your energy rises and falls',
          'A calendar with evenings or half days that you actually kept',
          'A change in the order of your day that you have tried for a week',
        ],
        askOthers: 'Do you notice a time of day or a kind of task after which I seem very drained, and what would you change?',
        talkingPoints: [
          'You know the times of day when you work best',
          'You plan hard tasks around your energy',
          'You keep a time for rest in your week',
        ],
        midStep: 'For the next three days, write down the time your energy drops, and move one demanding task to the hour before it.',
      },
      interest: {
        why: 'When the work or study feels pointless, everything else becomes heavier. Finding the parts that still interest you, and remembering why you are doing it, makes it easier to keep going.',
        roles: [
          'Long exam preparation, where the end feels far away',
          'Repetitive jobs and shifts, where tasks look the same every day',
          'Times when a team changes or friends move away',
        ],
        routine: [
          'Days 1 to 3: List three things from the last month you did not mind or enjoyed, and write one sentence on why this work or study matters to you.',
          'Days 4 to 7: Put one of those things first on two days of the week.',
          'Days 8 to 11: Finish one task a little better than needed and notice how it feels.',
          'Days 12 to 14: Have two ten minute non-task conversations with colleagues or classmates, and note one thing you learnt that week.',
        ],
        mistakes: [
          'Waiting to feel interested before starting, when interest often follows a start',
          'Cutting off colleagues and classmates because there is no time',
          'Deciding that the whole path is wrong after a few flat weeks, without talking to anyone',
        ],
        proof: [
          'A list of the parts of your work or study that you still like',
          'A sentence about why it matters that you have kept in your notebook',
          'A new thing you learnt in the last two weeks',
        ],
        askOthers: 'Which parts of my work or study do I seem most alive when I talk about, and which parts do I avoid?',
        talkingPoints: [
          'You know which parts of your work or study you enjoy',
          'You can say why this path matters to you',
          'You keep learning small things, even in a busy period',
        ],
        midStep: 'Write the one sentence about why your work or study matters to you, and keep it where you can see it this week.',
      },
      control: {
        why: 'Strain often comes from a load that is unclear, endless or not yours to shape. Writing the load down, asking about priority and choosing the small things you can control reduce that weight.',
        roles: [
          'Jobs with targets, where new tasks arrive faster than old ones finish',
          'Exam periods with a long syllabus and no clear order',
          'Self-employment, where every client request seems to need a yes',
        ],
        routine: [
          'Days 1 to 3: Count tasks and hours for three days and sort them into must do, can wait and can drop.',
          'Days 4 to 7: Show the list to a manager, teacher or senior and ask what can be deferred, shared or dropped.',
          'Days 8 to 11: Use one ready sentence about priority at least twice, for example "I can do this by Thursday if I move the other task".',
          'Days 12 to 14: Write down your top three outputs on Monday and check them on Friday, then decide one thing to change next week.',
        ],
        mistakes: [
          'Adding new tasks without removing any',
          'Staying silent about the load, then showing frustration in other ways',
          'Treating every request as equally urgent',
        ],
        proof: [
          'A written list of tasks with their status',
          'A message or conversation in which you agreed a priority or date',
          'A weekly top-three list you have kept for two weeks',
        ],
        askOthers: 'If I can finish only three things this week, which should they be, and what can wait?',
        talkingPoints: [
          'You know the top outputs for each week',
          'You ask about priority before agreeing to extra work',
          'You choose how to do your work in the parts that are yours to decide',
        ],
        midStep: 'Write every task you are carrying today on one page, and mark which three truly matter this week.',
      },
      recovery: {
        why: 'Sleep, meals and time off are how you refill. They are often the first things given up when you are busy, and the loss builds up slowly.',
        roles: [
          'Exam preparation, where late nights seem to buy extra time',
          'Always-on jobs, where messages arrive at night and on holidays',
          'Home duties, where there is no clear end to the day',
        ],
        routine: [
          'Days 1 to 3: Fix a wake time and set a reminder thirty minutes before bedtime to put work and books away.',
          'Days 4 to 7: Fix three meal times and keep a quick meal ready so you do not skip them.',
          'Days 8 to 11: Choose a cut-off hour for messages, mute work apps after it and tell people your reply hours.',
          'Days 12 to 14: Book one leave day or long weekend in the coming month and plan one activity unrelated to work or study each week.',
        ],
        mistakes: [
          'Checking messages in bed because it feels quicker to clear them',
          'Taking leave but staying on calls and replies',
          'Saving all rest for after the deadline or exam',
        ],
        proof: [
          'A week in which you kept your wake time on most days',
          'A cut-off hour that colleagues or classmates know about',
          'A leave day or half day that you really took',
        ],
        askOthers: 'Do you notice when I skip meals or sleep, or answer messages very late, and how does it affect me?',
        talkingPoints: [
          'You protect your sleep and meals in busy periods',
          'You have set hours when you reply and hours when you do not',
          'You take your leave and your weekly off',
        ],
        midStep: 'Choose tonight a cut-off hour for messages, mute your work apps after it, and keep it for seven days.',
      },
      support: {
        why: 'Carrying difficulties alone makes them feel bigger, and having no limits makes every request feel like yours. One honest person and a few clear boundaries make a lasting difference.',
        roles: [
          'Home, where family hopes and duties can add to your load',
          'Workplaces with a culture of staying late and saying yes',
          'Being the person everyone depends on, such as a senior, an eldest child or an owner',
        ],
        routine: [
          'Days 1 to 3: Choose one person to talk to weekly and fix a time for a short check-in.',
          'Days 4 to 7: Tell the people concerned your working hours, study hours and family time.',
          'Days 8 to 11: Practise a delay line, such as "Let me check my list and reply by evening", on two requests.',
          'Days 12 to 14: Tell one person one specific difficulty and one request for help, and note what happened.',
        ],
        mistakes: [
          'Saying everything is fine to avoid worrying family',
          'Agreeing at once to every request and then resenting it',
          'Waiting for others to notice that you are struggling',
        ],
        proof: [
          'A weekly check-in that you have kept for two weeks',
          'A message in which you stated your available hours',
          'A request you declined or delayed politely',
        ],
        askOthers: 'Can I tell you honestly how things are going once a week, and will you tell me if you see me getting worn down?',
        talkingPoints: [
          'You ask for help early instead of waiting',
          'You can tell others your available hours',
          'You say when something needs more time or a different priority',
        ],
        midStep: 'Message one person today and ask for a fifteen minute talk this week about how things are going.',
      },
    },
    thirtyDay: [
      'Week 1: Do the first half of the fourteen day routine for your lowest area and write one line each night on what you tried.',
      'Week 2: Finish the routine and tell one trusted person what you changed and how it felt.',
      'Week 3: Move to your second-lowest area and use two steps from its routine.',
      'Week 4: Retake the self-assessment, compare each area, and choose one habit to keep through your busiest weeks.',
    ],
  },

  extras: [
    // Student
    x(
      ['student'],
      'energy',
      'My study day has real breaks and I do not study continuously from morning to night.',
      'Plan the day as blocks of forty to fifty minutes with a break of five to ten minutes and a longer one after lunch. Put the breaks in your timetable, not just the study.',
    ),
    x(
      ['student'],
      'interest',
      'I can still name a subject, topic or activity at school or college that I look forward to.',
      'Choose one subject or club you like and give it a fixed weekly slot. Interest in one corner often makes the rest feel less heavy.',
    ),
    x(
      ['student'],
      'control',
      'Between school, tuition, coaching and homework, I have no hour in the week that is mine.',
      'Write your whole week in one table. Mark any hour that is free, and talk to your parents or tuition teacher about moving one class or giving you one protected hour.',
      true,
    ),
    x(
      ['student'],
      'recovery',
      'I keep my sleep time steady in busy weeks even when classmates stay up late.',
      'Tell your friends your sleep time and keep it. Late-night study groups often cover little and leave you slow the next day.',
    ),
    x(
      ['student'],
      'support',
      'I compare my marks and progress with my friends and cousins, and it leaves me low.',
      'Keep a small page with your own marks and one thing you improved each month. When comparison starts, look at that page. Ask a friend to agree not to talk about marks at lunch.',
      true,
    ),
    // Early career
    x(
      ['early'],
      'energy',
      'After a shift or a workday, I am able to unwind and do something that is mine.',
      'Create a short fixed routine after work, such as a wash, a meal and thirty minutes of music or a call, before anything else. It tells your body that the day is over.',
    ),
    x(
      ['early'],
      'control',
      'I am not sure what is expected of me, but I do not like to ask in case I look weak.',
      'Prepare one question for your manager this week: "What would a good month look like in this role?" Asking early usually looks like interest, not weakness.',
      true,
    ),
    x(
      ['early'],
      'interest',
      'I can see how this job could lead to something that I want in the next few years.',
      'Write two skills or experiences you want from this job in the next year and tell your manager. Ask for one task that builds them.',
    ),
    x(
      ['early'],
      'recovery',
      'When my targets are high, I skip lunch and stay late to prove myself.',
      'Set a finishing time on three days this week, and eat lunch away from the desk. Show your results in the work you deliver, not in the hours you sit.',
      true,
    ),
    x(
      ['early'],
      'support',
      'I have a senior or colleague I can ask small questions without feeling judged.',
      'Pick one friendly senior and ask a small question in the first hour of the day. Thank them and note the answer, so you do not ask the same thing twice.',
    ),
    // Experienced
    x(
      ['experienced'],
      'energy',
      'I carry other people\'s problems all day and have little energy left for my own work.',
      'Move team questions to two fixed windows in the day, and use the rest for your own work. Tell the team the windows and what counts as urgent.',
      true,
    ),
    x(
      ['experienced'],
      'control',
      'I hand over tasks to my team and trust them to finish without checking every step.',
      'Pick one task this week and hand it over with a clear outcome and date. Check only at the agreed point, and give feedback once it is done.',
    ),
    x(
      ['experienced'],
      'interest',
      'I still spend some of my week on the part of the work I enjoy most.',
      'Protect two hours a week for the work you like, such as design, coaching or problem solving, and put them in the calendar as a meeting that cannot be moved.',
    ),
    x(
      ['experienced'],
      'recovery',
      'I answer messages from my team and seniors late at night and on holidays.',
      'Tell your team your reply hours and what to do in a real emergency. Use scheduled send for late replies so that your habit does not become their expectation.',
      true,
    ),
    x(
      ['experienced'],
      'support',
      'I have a peer or mentor outside my team with whom I can talk openly.',
      'Ask a peer in another team, or a former boss, for a monthly thirty minute chat. Use it to talk about the pressure of the role and not only tasks.',
    ),
    // Independent
    x(
      ['independent'],
      'energy',
      'I have a clear end to my working day, even when I work from home.',
      'Set a closing ritual, such as writing tomorrow\'s top three tasks and shutting the laptop in another room or a bag. It marks the end even when the home is the office.',
    ),
    x(
      ['independent'],
      'control',
      'I say yes to almost every client or customer request because I worry about the next month\'s income.',
      'Write a short rule for new work, such as a minimum price, a maximum number of open projects and a standard delivery time. Use it for your next three enquiries before you reply.',
      true,
    ),
    x(
      ['independent'],
      'recovery',
      'I take at least one full day off in the week, and my clients know about it.',
      'Choose the day, put an auto-reply or status on it, and tell your regular clients. A day off that clients expect is easier to keep.',
    ),
    x(
      ['independent'],
      'support',
      'Running a home and a business together leaves me with no time that is only mine.',
      'Divide one routine task, such as cooking or school pickup, with someone at home for a month. Use the time you gain for a rest slot, not for more work.',
      true,
    ),
    x(
      ['independent'],
      'interest',
      'I talk to other freelancers, founders or business owners, so that I do not feel alone in my work.',
      'Join one local or online group, or meet one peer each month for tea. Ask how they handle slow months, late payments and time off.',
    ),
  ],

  stageAdvice: {
    student: {
      energy: sa(
        'Long study hours, tuition and travel can leave you with very little energy by the evening.',
        'Study in blocks of forty to fifty minutes, with a break away from the screen and a lighter half day in each week.',
        'Move the hardest subject to the hour when you are most alert, and keep easier revision for the evening.',
      ),
      interest: sa(
        'When the syllabus is long and the exam is far away, studying can feel pointless.',
        'Write down one thing you want to be able to do after this course or exam, and read it before you start each day.',
        'Give one fixed weekly slot to a subject, hobby or club that you enjoy, since it keeps study from becoming your whole identity.',
      ),
      control: sa(
        'Your timetable is often set by school, college, coaching and parents, which leaves little room to choose.',
        'Write all your commitments in one weekly table and bring it to your parents or a teacher when you ask to change something.',
        'Pick the order of subjects and the study place yourself, since these small choices are in your hands.',
      ),
      recovery: sa(
        'Exam terms often push sleep, meals and play aside.',
        'Keep your sleep and wake time steady, including on weekends, and make the night before a test an early night.',
        'Keep one outdoor or play slot in the week, such as cricket, badminton or a walk, and treat it like a class.',
      ),
      support: sa(
        'Comparison with classmates, cousins and toppers can make you feel alone in the pressure.',
        'Tell one friend or family member how the term is going and ask the same of them, once a week.',
        'Speak to a school or college counsellor or a teacher you trust before the load begins to feel too heavy, not after.',
      ),
    },
    early: {
      energy: sa(
        'Shifts, long commutes and a steep learning curve can use up your energy before the day is over.',
        'Use the first hour after your shift to eat and unwind, and do not start learning or chores until you have rested.',
        'On shift weeks, keep sleep times as steady as the roster allows and use a dark room, earplugs or a curtain for day sleep.',
      ),
      interest: sa(
        'In repetitive early roles, such as targets, calls or data entry, it is easy to lose the sense of why you are doing it.',
        'Ask your manager for one task a month that stretches you or lets you see the end result of your work.',
        'Write two skills you are gaining in this job, and read the list when the work feels dull.',
      ),
      control: sa(
        'Targets and manager expectations may feel fixed, and you may be new enough to hesitate before asking.',
        'Confirm in writing your top priorities each week, and ask what to do when two things clash.',
        'Track your targets and your actual hours for a week, then use these facts if you need to discuss the load.',
      ),
      recovery: sa(
        'Night shifts, rotating rosters and always-on chats can disturb sleep and meals.',
        'Keep meal times as steady as the roster allows and carry a simple meal for the shift instead of skipping.',
        'Mute work groups when you are off shift and ask your team lead how urgent matters will be reached.',
      ),
      support: sa(
        'In a first job you may be far from home, with few people to speak to honestly.',
        'Call or message someone at home on a fixed day, and talk about more than work.',
        'Find one colleague or senior who is willing to answer questions, and meet them for tea once a week.',
      ),
    },
    experienced: {
      energy: sa(
        'Senior roles bring back-to-back meetings, decisions and other people\'s concerns through the day.',
        'Leave fifteen minutes between meetings where you can, and keep one morning a week meeting free for deep work.',
        'Notice which decisions drain you most and set a time of day when you take them, instead of all day.',
      ),
      interest: sa(
        'As you move up, you may spend less time on the work that attracted you in the first place.',
        'Keep a small share of the week for hands-on work you enjoy, and defend it as you would a client meeting.',
        'Ask yourself which part of your role you would do for free and look for ways to do more of it, through coaching, mentoring or a new project.',
      ),
      control: sa(
        'When everything runs through you, the load grows, and your team may wait for your answers.',
        'List the decisions your team can take without you and share the list this month.',
        'Say clearly which requests you will not take on, and offer another route, such as a person, a date or a smaller scope.',
      ),
      recovery: sa(
        'Responsibility often follows you home, with calls and messages at all hours.',
        'Agree escalation rules with your team so that only real emergencies reach you after hours.',
        'Take your full leave once a year with a written hand-over, and stay off messages for at least the first few days.',
      ),
      support: sa(
        'Leaders can feel they cannot show difficulty to their team, so they go without anyone to talk to.',
        'Find a peer, former boss or mentor outside your reporting line and meet monthly.',
        'Tell your manager early when the team is overloaded, along with two options you have thought of.',
      ),
    },
    independent: {
      energy: sa(
        'Freelancers, founders and small-business owners often work alone and without a natural stop time.',
        'Set a start time and a closing ritual each day, and keep a lunch break away from your workspace.',
        'Plan your demanding work for your best hours and leave admin, accounts and messages for the lower-energy hours.',
      ),
      interest: sa(
        'Running everything yourself, from sales to accounts, can take you away from the work you started for.',
        'Block time each week for the craft or service you enjoy, before admin and sales tasks.',
        'Outsource or batch one task you dislike, such as accounts or invoices, for the next month.',
      ),
      control: sa(
        'Irregular income makes it hard to refuse work, and clients may expect quick replies at any hour.',
        'Set a standard turnaround time and state it in your first reply to every client.',
        'Keep a simple monthly record of income and hours so that you can see which clients are worth the effort and which are not.',
      ),
      recovery: sa(
        'There is no paid leave when you are self-employed, so a day off feels like lost money.',
        'Plan your year with some slow weeks in advance, and put the leave days in your calendar before accepting new work.',
        'Make sure at least one day each week has no client calls, and use a separate phone number or a mute for work chats if you can.',
      ),
      support: sa(
        'Without colleagues, you may carry decisions alone, and home duties can fill the rest of the hours.',
        'Share with the people at home which hours are for work, and agree who covers what in those hours.',
        'Join a group of peers, online or in your town, who can talk about pricing, late payments and slow months.',
      ),
    },
  },

  scenarios: [
    // energy
    sc('energy', 'It is 4 p.m. and your energy has dropped, with a lot of work still to do. What do you do?', [
      o('Have another strong tea or coffee and push through without a break', 33, 'This may work for an hour, but it can make the evening and your sleep harder. A short break first usually brings back more focus.'),
      o('Take ten minutes away from the screen with water and a short walk, then do one important task for a block', 100, 'A short real break plus one chosen task tends to help. Over the next week, note whether this time of day is always your low point and plan around it.'),
      o('Carry on with easy tasks such as emails, and keep the hard task for tonight', 67, 'Using the low hour for light tasks is sensible. The risk is moving the hard task to a tired evening, so decide its time tomorrow in your best hour.'),
      o('Stay at your desk later to make up for the lost energy', 0, 'Staying later when you are already empty usually gives little work and costs your evening. Stop at the planned time and begin the hard task fresh the next day.'),
    ]),
    sc('energy', 'You finally have a free Sunday after a heavy fortnight. How do you use it?', [
      o('Catch up on pending work so that Monday is easier', 0, 'This feels responsible, but it gives you no rest after a heavy stretch. Do the pending work in a short, fixed slot on another day.'),
      o('Plan a restful half day, such as a long meal, a walk or a nap, and use a short slot for one small chore', 100, 'Resting on purpose and keeping chores small gives you a better chance to start Monday refilled. Protect that half day each week, not only after heavy periods.'),
      o('Stay in bed and on your phone all day', 33, 'Rest is needed, but a whole day on the phone may leave you flat. Mix real rest with a little movement, a meal with someone or time outside.'),
      o('Fill the day with social visits and errands so that you do not think about work', 67, 'Seeing people is good, but a packed day can be tiring too. Leave a few hours for quiet, and sleep in if you can.'),
    ]),
    // interest
    sc('interest', 'For a few weeks your work or study has felt flat and you do not care how it turns out. What is a sensible first step?', [
      o('Decide that you picked the wrong path and plan to quit this month', 0, 'A few flat weeks, with tiredness and pressure, are not enough to judge a whole path. Look at the rest of your life first, then talk to someone before any big decision.'),
      o('Wait for the feeling to pass on its own and say nothing', 33, 'Some flat spells do pass, but waiting alone can let them drag on. Make one small change this week and tell someone how it has been.'),
      o('Find one part you still like, do it first on two days, and talk to a trusted person about how it has been', 100, 'A small change and an honest talk give you information without a big decision. If the flatness stays for weeks, speak to a counsellor or a doctor.'),
      o('Take on a new project to feel excited again', 67, 'A new challenge can help, but adding to a full plate when you are flat may add strain. Choose something small or swap it with a current task.'),
    ]),
    sc('interest', 'A colleague or classmate you used to talk to has moved away, and you now work or study mostly alone. What do you do?', [
      o('Accept it and focus on tasks only', 33, 'Focus is good, but connection also keeps interest alive. Add one small contact each week.'),
      o('Invite a person from another team or class for tea once a week, and join one group or study circle', 100, 'Small, regular contact rebuilds a sense of connection. Choose a fixed time so that it does not depend on mood.'),
      o('Message your old friend every day and wait for replies', 67, 'Staying in touch is kind, but depending on one person is fragile. Keep the old contact and also meet someone nearby.'),
      o('Decide that people at work or college are not worth the time', 0, 'Pulling back feels safe, but it can make the days feel longer and flatter. One short chat a week is enough to start.'),
    ]),
    // control
    sc('control', 'Your manager or teacher hands you a new task on top of an already full week. What do you do?', [
      o('Accept it and work extra hours without comment', 0, 'This hides the load and may become the new normal. Say what you are already carrying before agreeing.'),
      o('Say that you cannot take any more work', 33, 'Honesty is good, but a plain refusal can close the discussion. Give the facts and ask about priority so that you can find a solution.'),
      o('Show your current list and ask which task should move or who else can help before you agree to the new one', 100, 'This makes the load visible and puts the choice of priority where it belongs. It also protects your reputation as someone who delivers.'),
      o('Agree, then do the new task quickly and leave another one half done', 67, 'It saves face for the moment, but unfinished work may come back as a bigger problem. Agree the trade-off first.'),
    ]),
    sc('control', 'Priorities change three times in a week, and the work you finished on Monday is no longer needed. How do you respond?', [
      o('Complain to colleagues and slow down on new tasks', 0, 'Frustration is understandable, but slowing down hurts you too. Raise the pattern with the person who sets priorities.'),
      o('Confirm the new priority and what is dropped in a short message, and keep a short log of changes for two weeks', 100, 'A written note removes confusion, and a log gives you facts for a calm discussion. You also learn which changes are one-offs and which are the usual pattern.'),
      o('Keep all earlier work ready in case it is needed again', 33, 'Being prepared sounds sensible, but it doubles your effort. Ask whether the earlier work is paused or finished.'),
      o('Ask your manager to decide the plan for the whole month in one meeting', 67, 'A planning conversation can help, but some changes are not predictable. Ask for a short weekly check on priorities as well.'),
    ]),
    // recovery
    sc('recovery', 'A work message arrives at 11 p.m. It is not an emergency, but it is from a senior. What do you do?', [
      o('Reply at once so that they know you are available', 0, 'Replying at once teaches people to expect it, and it keeps your mind on work in the night. Reply in the morning unless it is urgent.'),
      o('Read it, mute the phone and reply in the morning at your usual time; if it happens often, agree reply hours with the sender', 100, 'This protects your sleep and still shows reliability. Sharing your reply hours calmly usually sets a norm that others follow.'),
      o('Do not open the message until the next day, without telling anyone', 67, 'Not opening it protects sleep. A line about your reply hours would help your seniors know what to expect from you.'),
      o('Reply with a short note now and finish the task in bed', 33, 'It feels quick, but it keeps your mind busy and your sleep short. If the work is not urgent, leave it for the morning.'),
    ]),
    sc('recovery', 'You have a week of leave or a college holiday. How do you plan it?', [
      o('Plan it so that you rest, tell people you are off, and leave a short hand-over note', 100, 'Preparing in advance lets you switch off. Keep a time at the end of the holiday for a slow return.'),
      o('Stay reachable on calls and messages in case something comes up', 33, 'Being reachable keeps your mind at work. Name one person who can handle matters, and check messages once a day at most.'),
      o('Use the holiday to finish the learning or study you could not do in the term', 0, 'This turns rest into more work. Keep at least a few days that are free of goals, with learning only if you want to.'),
      o('Travel to many places in a short time so that you do not waste the leave', 67, 'Time away can be refreshing, but a rushed plan can be tiring. Leave a day or two at home before returning to work.'),
    ]),
    // support
    sc('support', 'You have been struggling for some weeks, but your family thinks you are doing well. What do you do?', [
      o('Keep up appearances so that they do not worry', 0, 'Hiding it may make the load heavier and leave you alone with it. Telling one person is a first step.'),
      o('Choose one person you trust, say plainly what has been hard and what you need, and think about speaking to a counsellor too', 100, 'Specific words help people respond. A counsellor can add support that family may not be able to give.'),
      o('Post about it on social media to see who responds', 33, 'Posting may bring quick replies, but it is unreliable support. A direct talk with one person works better.'),
      o('Wait until you have something good to report so that the talk is positive', 67, 'Wanting to report good news is natural. Waiting can leave you alone longer, so share a small honest update now.'),
    ]),
    sc('support', 'A friend or colleague asks for your help with a large favour when you are already full. What do you do?', [
      o('Say yes to avoid disappointing them and fit it in at night', 0, 'Agreeing from guilt can build resentment and cost your rest. Give yourself time to decide.'),
      o('Say that you would like to help, ask for a day to check your week, then offer what you can really do or another date', 100, 'This is warm and honest, and it protects your time. People usually accept a clear, kind offer.'),
      o('Say no immediately without giving a reason', 33, 'A quick no protects your time, but a short explanation or alternative keeps the relationship warm.'),
      o('Say yes, but do the work slowly so that it takes less of your energy', 67, 'This avoids the conflict for now, but the favour may stay half done and weigh on both of you. Agree the size of help at the start.'),
    ]),
    // stage specific
    {
      ...sc('energy', 'It is two weeks before your exams, and you have started studying until 2 a.m. and napping in class. What do you do?', [
        o('Keep going, because there is not much time left', 0, 'Longer nights with less sleep tend to make study slower and mistakes more likely. A steady schedule serves you better in the last two weeks.'),
        o('Set a fixed bedtime, cut the plan to the most important topics, and add short breaks to every block', 100, 'Cutting the plan to what matters and protecting sleep keeps your mind able to recall. Talk to a teacher about which topics to prioritise.'),
        o('Sleep late on weekends to catch up', 67, 'Extra sleep on a weekend helps a little, but a steady bedtime helps more. Keep the same wake time most days.'),
        o('Ask a friend to share notes so that you can skip a few classes and study all night', 33, 'Sharing notes is useful, but all-night study is the part that costs you. Keep class time for doubts and sleep at night.'),
      ]),
      stages: ['student'],
    },
    {
      ...sc('control', 'In your first job you are given monthly targets that you think are too high, and you have been working late to meet them. What is a sensible response?', [
        o('Work even later and say nothing, so that people think you are committed', 0, 'Silence may lead to higher targets next month. Share your numbers with your manager calmly.'),
        o('Complain to colleagues but do not raise it with your manager', 33, 'Colleagues may share the feeling, but only your manager can change the target. Take the facts to them.'),
        o('Track your hours and results for two weeks, then ask your manager what should be done first and what support is possible', 100, 'Facts and a question about priority give your manager something to act on. Even if the target stays, you will know the trade-offs.'),
        o('Ask a senior colleague how they meet the target and copy their method', 67, 'Learning from a senior is useful. Do it alongside a talk with your manager, since methods may not fix a target that is set too high.'),
      ]),
      stages: ['early'],
    },
    {
      ...sc('control', 'You manage a small team and find that you are doing your own work plus checking everyone else\'s late into the evening. What do you do?', [
        o('Keep checking everything yourself, because quality matters', 33, 'Quality matters, but checking everything makes you the limit of the team. Check the key points and let the rest go.'),
        o('Pick two types of task to hand over fully, define what good looks like, and check only at agreed points', 100, 'Clear outcomes and fewer checks free your time and build your team. Give feedback after the task and not during it.'),
        o('Ask your team to work harder so that you can leave earlier', 0, 'This moves the pressure onto others and does not fix the cause. Look at how work is handed over and reviewed.'),
        o('Hire or request an extra person without changing how work flows', 67, 'More hands may help, but if the checking habit stays, you will be the limit again. Change the flow at the same time.'),
      ]),
      stages: ['experienced'],
    },
    {
      ...sc('recovery', 'A client messages at 9 p.m. on a Sunday asking for urgent changes. Your income this month is lower than usual. What do you do?', [
        o('Do the changes at once, since you cannot afford to lose the client', 33, 'Taking it on can ease the worry for now, but it teaches the client that you are always available. Weigh it against your rest and your rules.'),
        o('Reply the next morning with a time for the changes, and explain your working hours and rush terms for the future', 100, 'A calm reply that sets hours and terms protects your rest and still serves the client. Clients who value your work usually accept clear terms.'),
        o('Ignore the message and do not reply until the client contacts you again', 0, 'Silence can damage trust, and the client may feel ignored. Reply in the morning with a plan instead.'),
        o('Do the changes but charge a rush fee, and keep working on Sundays whenever clients ask', 67, 'A fee for urgent work is a sensible rule, but making Sunday a regular workday removes your rest. Decide how often you will accept such requests.'),
      ]),
      stages: ['independent'],
    },
  ],

  phrases: {
    energy: [
      '"I do my best work in the morning, so I will keep the hard task for then."',
      '"I am taking ten minutes away from the screen and will be back on time."',
      '"I am stopping at six today so that I have something left for the evening."',
    ],
    interest: [
      '"The part of this I enjoy most is... and I would like to do more of it."',
      '"I am doing this because it gives me..."',
      '"Can we have tea together this week? I would like to hear how your project is going."',
    ],
    control: [
      '"I can do this by Thursday if I move the other task. Which one should come first?"',
      '"These are the tasks I am carrying this week. Which of them can wait?"',
      '"To confirm, the new priority is... and the earlier task is paused. Is that right?"',
    ],
    recovery: [
      '"I reply to messages between nine and six, and I will respond to this tomorrow morning."',
      '"I will be on leave from... to... and this person will cover for me."',
      '"I am having my lunch now and will take your question after it."',
    ],
    support: [
      '"Can I tell you how things have been going for me lately?"',
      '"Let me check my list and reply to you by evening."',
      '"It would help me if... and I would like to ask for it."',
    ],
  },

  stagePlan: {
    student: [
      'Draw your whole week in one table with school, tuition, study, meals, sleep and play, and mark one protected hour.',
      'Study in blocks of forty to fifty minutes with a short break, and keep a lighter half day each week.',
      'Fix your sleep time for the term and make the night before every test an early night.',
      'Tell one teacher, senior or family member honestly how the term is going, and meet a counsellor if the load feels too heavy.',
    ],
    early: [
      'Ask your manager what three results matter most in your role and write them down.',
      'Fix a switch-off routine after every shift or workday, with a meal and no work messages for the first hour.',
      'Choose one senior colleague to ask small questions and meet them for tea once a week.',
      'Track your targets and hours for two weeks, and use the facts to discuss the load if it is too heavy.',
    ],
    experienced: [
      'List tasks only you must do, and hand over or drop one of the rest this month.',
      'Block two hours a week for thinking without meetings and keep them in the calendar.',
      'Agree reply times and escalation rules with your team, so that only real emergencies reach you after hours.',
      'Find a peer or mentor outside your reporting line and meet monthly, and take your full leave with a written hand-over.',
    ],
    independent: [
      'Set working hours and a weekly day off, and tell your clients and the people at home.',
      'Write a rule for new work, such as a minimum price and a maximum number of open projects, and apply it before replying.',
      'Keep a simple monthly record of income and hours to see which clients are worth the effort.',
      'Join a peer group, and plan slow weeks and leave days in the calendar before accepting new work.',
    ],
  },

  talk: {
    energy: {
      q: 'Which time of day or kind of task seems to take the most out of me, and how would you arrange my week around it?',
      a: 'Bring your notes from a week of energy tracking. Ask for one change in your schedule, such as moving a meeting or a class, and try it for two weeks.',
      line: 'My energy is highest at [time]. I will do [task] then and keep [time] for lighter tasks and breaks.',
    },
    interest: {
      q: 'Which parts of my role or course could I do more of, and is there a project or subject that matches what I enjoy?',
      a: 'Bring your list of three things you like. Ask for one concrete next step, such as a project, a topic or an introduction, and note the date you will take it.',
      line: 'The part I enjoy most is [part]. Next step: [project or person] by [date].',
    },
    control: {
      q: 'If I can finish only three things this week, which should they be, and what can wait or be shared?',
      a: 'Bring your list of tasks sorted into must do, can wait and can drop. Write down the priority you agree on and send it back in a short message so that everyone has the same list.',
      line: 'Top three for the week of [date]: [task 1], [task 2], [task 3]. Deferred: [task]. Agreed with [name].',
    },
    recovery: {
      q: 'What do people in this field or office usually do to protect their sleep and time off, and what would you suggest for me?',
      a: 'Ask for specific habits such as reply hours, hand-over notes or how they plan leave. Pick two that fit your day and try them for a fortnight.',
      line: 'My routine: wake at [time], meals at [times], messages off after [time], weekly day off [day], leave planned for [month].',
    },
    support: {
      q: 'Can I come to you once a week to talk about how things are going, and who else would you suggest I speak to if it gets heavy?',
      a: 'Fix a weekly slot and ask the person to suggest one more contact, such as a counsellor, a senior or a doctor. Keep a short list of what you want to say before each talk.',
      line: 'Weekly check-in with [name] on [day and time]. Other people I can talk to: [name], [name]. Tele-MANAS 14416 if I need help at any hour.',
    },
  },

  talkTitles: {
    strong: 'Use your strongest area when you talk to a manager, teacher or counsellor',
    weak: 'Questions to ask about the area that needs attention first',
    intro: 'Bring these to a manager, teacher, senior, mentor or counsellor. Specific questions get specific answers, and none of them need you to share more than you want to.',
    mode: 'ask',
  },
};
