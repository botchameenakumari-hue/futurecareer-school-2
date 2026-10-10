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
      tip: 'Name the first thing you dread: a person, a task, the commute or just the start. Change only that one thing this week, for example have tea before opening any message, or do the dreaded task first for ten minutes. If the dread stays for weeks, talk to someone you trust, a doctor or a counsellor.',
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
      text: 'I know why my work or study matters to me.',
      tip: 'Write one sentence on what this gives you, such as income for your family, a skill, or a step toward a goal. Keep it on the first page of your notebook and read it on the days that feel flat.',
    },
    {
      d: 'interest',
      text: 'These days I do only the bare minimum to get through.',
      reverse: true,
      tip: 'Choose one task this week and finish it slightly better than required, for example by checking it once more or adding one example. Notice whether any care returns. Do not try to fix everything at once.',
    },
    {
      d: 'interest',
      text: 'I feel connected to the people I work or study with.',
      tip: 'Have one ten minute conversation this week with a colleague or classmate about something other than tasks, such as at tea or lunch. Connection usually returns in small amounts, not in one big step.',
    },
    {
      d: 'interest',
      text: 'I still learn something new in my work or studies, even in a small way.',
      tip: 'Pick one small thing to learn in the next two weeks, such as a shortcut a senior can show you or one twenty minute lesson. Write one line every Friday on what you learnt.',
    },
  ],
  control: [
    {
      d: 'control',
      text: 'I know what matters most for me this week.',
      tip: 'On Monday write your top three outputs for the week. If you cannot, ask your manager, teacher or senior: "If I can finish only three things this week, which should they be?"',
    },
    {
      d: 'control',
      text: 'When my plate is full, I can ask for a later date.',
      tip: 'Keep one ready sentence: "I can do this by Thursday if I move the other task. Which one should I do first?" Use it once this week, and notice that it is a question about priority, not a refusal.',
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
      text: 'Plans and priorities change so often that my effort feels wasted.',
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
      text: 'I eat my meals at fairly regular times, even in busy weeks.',
      tip: 'Fix three meal times, keep one quick option ready such as curd rice, eggs, fruit or a sabzi roll, and eat away from your desk for at least ten minutes.',
    },
    {
      d: 'recovery',
      text: 'I check work messages or study chats in bed.',
      reverse: true,
      tip: 'Choose a cut-off hour such as 9 p.m., mute work apps and study groups after it, and move them off your first phone screen. Tell colleagues or classmates your reply hours so that your silence is expected, not a surprise.',
    },
    {
      d: 'recovery',
      text: 'I use my weekly off and my leave days for rest, not for work.',
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
      text: 'When I am struggling, I can tell my manager, teacher or family and expect a fair hearing.',
      tip: 'Pick a calm time and say three things: what is happening, how it affects your work, and one request such as a deadline change or a hand-off. A specific request is easier for people to act on.',
    },
    {
      d: 'support',
      text: 'I feel I should manage my difficulties alone.',
      reverse: true,
      tip: 'Tell one trusted person one specific difficulty this week, for example that you are not sleeping before deadlines. Saying it aloud can make it feel lighter, and they may offer something practical.',
    },
    {
      d: 'support',
      text: 'People around me know when I am available and when I am not.',
      tip: 'Share your working hours, your study hours and your family time with the people concerned, and write them in your status or calendar. Repeat it kindly once or twice until it is understood.',
    },
    {
      d: 'support',
      text: 'I find it hard to say no to extra requests.',
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
      'Looking for a burnout test? This free self-assessment looks at five everyday areas of your work or study life, energy, interest, workload and control, rest, and people and support, and shows which area needs attention first. It is a habit check, not a diagnosis, and it cannot tell you whether you have any condition.',
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
      high: 'Your everyday habits in this area look well supported.',
      mid: 'Some things are in place, with gaps worth looking at.',
      low: 'This is the area that may deserve your attention first.',
    },
    domainsHeading: 'Five areas of work and study life this self-assessment covers',
    domainsIntro:
      'Strain shows up in different places for different people. A higher score in an area means steadier everyday habits there. The area with the lowest score is a good place to start, and it is not a verdict about you.',
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
        title: 'A higher score means steadier everyday habits',
        body: [
          'Statements are worded so that agreeing describes a steady pattern, such as having some energy left in the evening, knowing what matters this week or being able to talk to someone. Statements about strain are reversed, so saying they are not true for you raises your score.',
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
      'A score on one day is not a reason to leave a job or a course. Big decisions need more than a self-rating, and are better made after speaking to people who know your situation.',
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
        a: 'Statements are rated from 1 to 5 and the ones about strain are reversed, so a higher score always means steadier everyday habits. In the situation questions each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
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
        q: 'Should I quit my job or course if my burnout self-assessment score is low?',
        a: 'No. A self-rating from one day is not enough to base a decision like that on. Use the score to pick one small habit to change, give it a few weeks, and talk to a manager, teacher, family member or counsellor before any big decision.',
      },
      {
        q: 'How often should I take this burnout self-assessment again?',
        a: 'Retake it after about three to four weeks of working on your lowest area, so that you can see whether anything has shifted. Taking it every day is not useful, since habits change slowly and one bad day can move a score.',
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
          'Set aside a small buffer for slow months if you can, so that a quiet month feels less frightening.',
          'Write a short rule for new work, such as a price floor or a maximum number of open projects, and apply it before replying.',
        ],
      },
    ],
    tips: CORE_LIST.map((q) => q.tip),
    strongTip: 'This is a steady pattern for you. Protect it during your busiest weeks, because it is usually the first thing to go.',
    domains: {
      energy: {
        why: 'Your energy is the base for everything else. Noticing when it drops, what drains it and what refills it helps you plan your day around it, instead of blaming yourself for being tired. A student who is sharpest before 10 a.m., for example, can keep the hardest subject there and use the slump after lunch for revision.',
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
        why: 'When the work or study feels pointless, everything else becomes heavier. Finding the parts that still interest you, and remembering why you are doing it, makes it easier to keep going. Someone on a repetitive shift, for instance, may find that helping a new joiner is the one part that still feels worthwhile.',
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
        why: 'Strain often comes from a load that is unclear, endless or not yours to shape. Writing the load down, asking about priority and choosing the small things you can control reduce that weight. A fresher who lists seven pending tasks may find that only two are due this week.',
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
        why: 'Sleep, meals and time off are how you refill. They are often the first things given up when you are busy, and the loss builds up slowly. Studying until 2 a.m. may feel like extra time, but the next day\'s focus and mood often pay for it.',
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
        why: 'Carrying difficulties alone makes them feel bigger, and having no limits makes every request feel like yours. One honest person and a few clear boundaries make a lasting difference. An eldest child who tells everyone at home that all is fine for months may find one honest talk lightens more than another quiet week.',
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
      'My study day has real breaks in it.',
      'Write the breaks into your timetable first: a proper meal break, and one fifteen minute walk or chat in the evening. Then fit the study blocks around them, so that the break is not the first thing you cut.',
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
      'I keep my sleep time steady even in busy weeks.',
      'Tell your friends your sleep time and keep it, even if a late-night group is on. If a late session is truly needed, agree an end time before it starts.',
    ),
    x(
      ['student'],
      'support',
      'Comparing my marks with friends and cousins often makes me feel worse about myself.',
      'Keep a small page with your own marks and one thing you improved each month. When comparison starts, look at that page. Ask a friend to agree not to talk about marks at lunch.',
      true,
    ),
    // Early career
    x(
      ['early'],
      'energy',
      'After a shift or a workday, I can unwind.',
      'Create a short fixed routine after work, such as a wash, a meal and thirty minutes of music or a call, before anything else. It tells your body that the day is over.',
    ),
    x(
      ['early'],
      'control',
      'I hold back from asking what is expected of me, in case I look weak.',
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
      'When my targets are high, I stay late to prove myself.',
      'Set a finishing time on three days this week and keep it. Let your results show in the work you deliver, not in the hours you sit, and mention your finishing time to your manager once.',
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
      'Other people\'s problems take most of my energy in the day.',
      'Move team questions to two fixed windows in the day, and use the rest for your own work. Tell the team the windows and what counts as urgent.',
      true,
    ),
    x(
      ['experienced'],
      'control',
      'I hand over tasks and trust my team to finish them.',
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
      'My team contacts me after hours for things that could wait until morning.',
      'Tell your team in writing what counts as an emergency and how to reach you for one. For everything else, ask them to leave a note for the morning, and use scheduled send for your own late replies.',
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
      'I accept work on terms I do not like because I worry about next month\'s income.',
      'Write a short rule for new work, such as a minimum price, a maximum number of open projects and a standard delivery time. Use it for your next three enquiries before you reply.',
      true,
    ),
    x(
      ['independent'],
      'recovery',
      'I take at least one full day off in most weeks.',
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
      o('Have another strong tea or coffee and push on through the dip until your usual finishing time, since the deadline is close', 33, 'Caffeine may carry you for an hour, but late in the day it can make your sleep lighter. Next time, take the break first and keep tea or coffee for the morning and early afternoon.'),
      o('Take ten minutes away with water and a short walk, then pick the one task that must be done today and do only that', 100, 'You treated the dip as a signal, not a fault. For the next week, note the hour it arrives and keep your lightest work for that slot.'),
      o('Switch to easy jobs such as replying to emails and filling forms, and keep the hard task for after dinner when it is quiet', 67, 'Giving the low hour light work is sensible. The weak point is the hard task meeting a tired mind at night, so fix tomorrow morning for it and write the time down tonight.'),
      o('Stay at your desk an hour longer to make up for the lost time', 0, 'Extra hours at an empty moment usually bring little output and cost you the evening. Set a finish time today and start the hard task fresh tomorrow.'),
    ]),
    sc('energy', 'You finally have a free Sunday after a heavy fortnight. How do you use it?', [
      o('Spend the whole day clearing pending work and preparing for tomorrow, so that Monday starts light', 0, 'It feels responsible, yet you get no rest after a heavy stretch. Move the pending work to a fixed two hour slot on a weekday evening and keep Sunday free.'),
      o('Keep the day free of work, do one thing you enjoy, such as a long meal with family or a game with friends, and leave the rest open', 100, 'Resting on purpose while keeping chores small is how a day off actually refills you. Make this a weekly habit, not only a reward after hard weeks.'),
      o('Sleep late, then watch shows and scroll on the phone for the rest of the day, since you have earned a lazy day', 33, 'Rest is needed, but a whole day on a screen can leave you flatter than before. Add one meal with someone and a short walk outside, even ten minutes.'),
      o('Fill the day with family visits, shopping and errands so that you do not think about work', 67, 'Seeing people is good for you, though a packed day is tiring in its own way. Keep three quiet hours somewhere in it, and sleep in if you can.'),
    ]),
    // interest
    sc('interest', 'For a few weeks your work or study has felt flat and you do not care how it turns out. What is a sensible first step?', [
      o('Decide that you picked the wrong path and plan to quit or change course this month, since waiting only wastes more time', 0, 'A few flat weeks, with tiredness and pressure, are too little to judge a whole path. Look at sleep, workload and people first, and talk to someone before any big decision.'),
      o('Give it a few more weeks before judging anything, since flat spells often pass, and carry on as usual', 33, 'Some flat spells do pass, but carrying on unchanged lets others drag on. Set a date two weeks from now to review it, and make one small change before then.'),
      o('Tell someone you trust how it has felt, and do the part you still like first on two days this week', 100, 'A small change plus an honest talk gives you information without forcing a big decision. If the flatness lasts for several weeks, speak to a counsellor or a doctor.'),
      o('Take on a new project or course to feel excited again, and keep the current work going alongside', 67, 'A fresh challenge can help, but piling it on a full plate may add strain. Make it small, or let it replace one current task.'),
    ]),
    sc('interest', 'A colleague or classmate you used to talk to has moved away, and you now work or study mostly alone. What do you do?', [
      o('Put your energy into the tasks, since people come and go and the results are what matter', 33, 'Focus is useful, but company is part of what keeps interest alive. Add one short contact each week, even five minutes at tea.'),
      o('Invite someone from another team or class for tea once a week', 100, 'Small, regular contact rebuilds a sense of belonging. Fix the day and time now so that it does not depend on your mood.'),
      o('Call your old friend every evening, since that friendship is the one that really matters', 67, 'Staying in touch is kind, though leaning on one person is fragile. Keep that friendship and also get to know one person who is nearby.'),
      o('Use tea and lunch breaks to catch up on pending work, since you have less to talk about now', 0, 'It saves time today but cuts the little contact you still have, and days get longer and flatter. Keep one break a day for tea, and one short chat a week is enough to begin.'),
    ]),
    // control
    sc('control', 'Your manager or teacher hands you a new task on top of an already full week. What do you do?', [
      o('Accept it cheerfully and finish it by working extra hours this week, to show that you can handle pressure', 0, 'Quiet overwork hides the real load and can become the new normal. Next time, say what you are already carrying before you agree to anything.'),
      o('Say that you cannot take any more work this week', 33, 'Being honest helps, but a flat refusal can end the conversation. Bring the facts and a question about priority, so that the two of you can solve it together.'),
      o('Ask which of your tasks should move, or who can help, before you agree', 100, 'Showing your list makes the load visible and hands the priority decision to the person who owns it. Do it the same day, before you start the new task.'),
      o('Agree, and quietly reorder your own list so that the new task goes first and the least urgent one waits', 67, 'Reordering is a reasonable instinct, but the waiting task may surface later as a surprise. Tell your manager what is moving, in one line.'),
    ]),
    sc('control', 'Priorities change three times in a week, and the work you finished on Monday is no longer needed. How do you respond?', [
      o('Put in less effort on new tasks until the priorities settle, since the effort may be wasted again', 0, 'The frustration is fair, but slowing down mostly hurts your own record. Take the pattern to the person who sets priorities, with dates of the last three changes.'),
      o('Confirm the new priority and what is dropped in a short message, and log each change', 100, 'A written note ends confusion, and two weeks of log give you facts for a calm talk. It also shows which changes are one-offs and which are the usual pattern.'),
      o('Keep all your earlier work ready and organised in case it is needed again, so that nothing is wasted', 33, 'Being prepared sounds wise, yet it doubles your effort. Ask in one line whether the old work is paused or finished, and archive it if it is finished.'),
      o('Ask your manager to fix the plan for the whole month in one meeting so that changes stop', 67, 'A planning talk can help, though some changes cannot be predicted. Ask also for a ten minute priority check every Monday.'),
    ]),
    // recovery
    sc('recovery', 'A work message arrives at 11 p.m. It is not an emergency, but it is from a senior. What do you do?', [
      o('Reply at once so that they know you are reliable and available', 0, 'Instant replies teach people to expect them, and they keep your mind on work at night. Unless the message says urgent, answer at nine the next morning.'),
      o('Read it, mute the phone and reply at your usual time in the morning', 100, 'Your sleep stays protected and you still look dependable. If late messages keep coming, mention your reply hours once, kindly, and many seniors will accept it.'),
      o('Leave it unopened until morning, without telling anyone', 67, 'Protecting your sleep is right, but an unopened message may hide a real emergency. Glance at it, and add one line about your usual reply hours when you next speak to that senior.'),
      o('Send a short reply now and finish the task in bed so that it is off your mind', 33, 'It seems quick, but the work stays in your head and sleep gets shorter. If it can wait, write the task on paper and close the phone.'),
    ]),
    sc('recovery', 'You have a week of leave from work, or a week of holiday from college. How do you plan it?', [
      o('Tell the people who need to know that you are away, name who covers, and keep most of the week unplanned', 100, 'Preparing before you go is what lets you switch off while away. Block the last day before returning as a slow day with no meetings or new tasks.'),
      o('Stay reachable on calls and messages all week in case something urgent comes up in your team or class', 33, 'Staying reachable keeps part of your mind at work all week. Name one cover person and check messages once a day, at a fixed time, at most.'),
      o('Use the holiday to finish the study or learning you could not manage during the term, so that you start fresh', 0, 'That turns rest into more work. Keep at least three days free of goals, and learn only what you would enjoy.'),
      o('Travel to many places in a short time so that you do not waste the leave', 67, 'A trip can refresh you, though a rushed plan is tiring in itself. Keep a day or two at home before you return to work.'),
    ]),
    // support
    sc('support', 'You have been struggling for some weeks, but your family thinks you are doing well. What do you do?', [
      o('Keep up appearances at home so that they do not worry, and handle it quietly on your own', 0, 'Hiding it usually makes the weight heavier, and you carry it alone. Pick one person this week and tell them one specific thing that has been hard.'),
      o('Tell one person you trust plainly what has been hard and what you need', 100, 'Plain words let people respond with something useful. If it stays heavy for weeks, or you feel unable to cope, add a counsellor or doctor, and you can call Tele-MANAS on 14416, a free national helpline.'),
      o('Talk to an online friend or a group instead, since they will not judge you or worry the way family would', 33, 'Online listeners can be a real relief, but they cannot see your day-to-day life. Keep them, and also tell one person who knows you in person.'),
      o('Wait until you have some good news to share, so that the conversation is positive for everyone', 67, 'Wanting to share good news is natural, but waiting can leave you alone for longer. Give a small honest update now, such as "work has been heavy and I am tired".'),
    ]),
    sc('support', 'A friend or colleague asks for your help with a large favour when you are already full. What do you do?', [
      o('Say yes to avoid disappointing them and fit it in at night', 0, 'Agreeing out of guilt tends to build resentment and eat into rest. Next time, buy yourself a day before answering.'),
      o('Say you would like to help, but ask for a day to check your week first', 100, 'The answer is warm, honest and protects your time. When you reply, offer what you can really give or another date, and write it down before you do.'),
      o('Say no straight away, since you are already full', 67, 'A quick no does protect your time, and it is better than a yes you resent. One line of reason or a later date would keep the friendship warm.'),
      o('Say yes, but do the work slowly and in small pieces so that it takes less of your energy and does not disturb your own tasks', 33, 'This avoids an awkward conversation for now, yet the favour may stay half done and weigh on both of you. Agree the size of the help at the start.'),
    ]),
    // stage specific
    {
      ...sc('energy', 'It is two weeks before your exams, and you have started studying until 2 a.m. and napping in class. What do you do?', [
        o('Keep going the same way, because there are only two weeks left and every hour counts', 0, 'Shorter nights tend to make study slower and mistakes more likely. In the last two weeks a steady schedule serves you better than extra hours.'),
        o('Fix a bedtime and cut the plan down to the topics that matter most', 100, 'Trimming the plan and guarding sleep keeps your memory working when you need it. Ask a teacher this week which topics to keep and which to leave.'),
        o('Sleep late on weekends to catch up on what you lose on weekdays, and keep the same plan', 67, 'Weekend sleep helps a little, but a steady bedtime helps more. Wake at the same hour on most days, including Sundays.'),
        o('Ask a friend for notes so that you can skip a few classes and study at night in a quiet house', 33, 'Shared notes are useful, but studying through the night is what costs you. Keep class time for clearing doubts and sleep at night.'),
      ]),
      stages: ['student'],
    },
    {
      ...sc('control', 'In your first job you are given monthly targets that you think are too high, and you have been working late to meet them. What is a sensible response?', [
        o('Work even later and say nothing for now, so that people see how committed you are and your manager notices the effort', 0, 'Silence may lead to the same or a higher target next month. Share your numbers with your manager calmly, this week.'),
        o('Complain to colleagues over tea, but do not raise it with your manager', 33, 'Colleagues may feel the same, but only your manager can change the target. Take the facts to them instead.'),
        o('Track your hours and results for two weeks, then take the numbers to your manager and ask what comes first', 100, 'Numbers and a question about priority give your manager something to act on. Even if the target stays, you will learn what can be traded off.'),
        o('Ask a senior colleague how they meet the target and copy their method exactly', 67, 'Learning from a senior is smart. Do it alongside the talk with your manager, because a good method cannot fix a target that is set too high.'),
      ]),
      stages: ['early'],
    },
    {
      ...sc('control', 'You manage a small team and find that you are doing your own work plus checking everyone else\'s late into the evening. What do you do?', [
        o('Keep checking everything yourself in the evening, because the quality of the team\'s work reflects on you and mistakes are costly', 33, 'Quality does matter, but full checking makes you the ceiling of the team. Review only the key points and let the rest go.'),
        o('Hand two types of task over fully, say what good looks like, and check only at agreed points', 100, 'Clear outcomes and fewer checks free your evenings and build your team. Give feedback once the task is done, not while it is under way.'),
        o('Tell the team that quality has slipped, and that all work must now come to you for sign-off', 0, 'That adds more control and makes you even more of a bottleneck. Look at how work is handed over and reviewed, starting with one task this week.'),
        o('Request an extra person for the team without changing how the work is passed and reviewed', 67, 'More hands may help, but if the checking habit stays you will be the bottleneck again. Change the flow at the same time as you ask.'),
      ]),
      stages: ['experienced'],
    },
    {
      ...sc('recovery', 'A client messages at 9 p.m. on a Sunday asking for urgent changes. Your income this month is lower than usual. What do you do?', [
        o('Do the changes at once, since you cannot afford to lose the client this month', 33, 'It eases the money worry tonight, but it teaches the client you are always available. Check the request against your own rules before the next one comes.'),
        o('Reply the next morning with a time for the changes and a note on your hours and rush terms', 100, 'A calm reply that sets hours and terms guards your rest and still serves the client. Clients who value your work often accept clear terms, so put them in writing once.'),
        o('Leave it unanswered until Monday afternoon, so that the client learns Sundays are off limits', 0, 'Silence can damage trust and the client may feel ignored. Send a two line reply in the morning with a time for the work.'),
        o('Do the changes tonight but charge a rush fee, and accept Sunday requests whenever clients ask', 67, 'A fee for urgent work is a sensible rule, yet a regular Sunday workday removes your rest. Decide how many such requests you will accept in a month.'),
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
      line: 'Weekly check-in with [name] on [day and time]. Other people I can talk to: [name], [name]. Tele-MANAS (14416), a free national helpline, if I ever need it.',
    },
  },

  talkTitles: {
    strong: 'Use your strongest area when you talk to a manager, teacher or counsellor',
    weak: 'Questions to ask about the area that needs attention first',
    intro: 'Bring these to a manager, teacher, senior, mentor or counsellor. Specific questions get specific answers, and none of them need you to share more than you want to.',
    mode: 'ask',
  },
};
