import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

// Core statements and their tips live in one table so the two stay in the same order.
const CORE: { d: string; text: string; tip: string; reverse?: boolean }[] = [
  { d: 'setbacks', text: 'After a bad result or a rejection, I allow myself a short time to feel upset and then decide what to do next.', tip: 'Give yourself a fixed window, such as the rest of the evening, to feel upset. Next morning, write one next step on paper and do it before anything else.' },
  { d: 'mindset', text: 'I believe I can get much better at things I am weak at if I practise in the right way.', tip: 'Pick one weak skill and write down what better would look like in four weeks, such as three clear sentences in English or five solved problems without help. Then check it on the date.' },
  { d: 'effort', text: 'When a task turns boring or difficult, I keep going for a set time before deciding to stop.', tip: 'Set a timer for 25 minutes the next time you want to quit. Only after the timer ends may you decide whether to continue, switch method or stop.' },
  { d: 'learn', text: 'After a mistake, I work out exactly what went wrong and write down one thing I will do differently.', tip: 'Keep a small mistakes page. For each error write what happened, why, and one changed action, and read the page before your next attempt.' },
  { d: 'drive', text: 'I can explain in one sentence why my current goal matters to me, apart from what others expect.', tip: 'Finish this sentence in writing: I want this because... If the only reason is family or friends, spend this week talking to one person doing this work and look for a reason of your own.' },
  { d: 'setbacks', text: 'A single failure makes me doubt whether I should continue with the whole goal.', reverse: true, tip: 'Separate the event from the goal. Write what the failure was about, such as method, preparation or timing, and change only that part before deciding about the whole goal.' },
  { d: 'mindset', text: 'I think some people are simply born good at things and I am not one of them.', reverse: true, tip: 'Ask someone who is good at the thing how they began and how long they took to improve. Most people can name a start that was clumsy, and hearing it changes the picture.' },
  { d: 'effort', text: 'I often leave a hard task half finished and move to something easier.', reverse: true, tip: 'Write the hard task as the first item of the day and do 30 minutes on it before opening anything easier. Cross it off only when that block is done.' },
  { d: 'learn', text: 'I feel defensive when someone points out an error in my work.', reverse: true, tip: 'When you receive a correction, say thank you, repeat it in your own words and ask for one example. Decide later, in private, which parts to use.' },
  { d: 'drive', text: 'My effort drops sharply when nobody is checking my work or praising it.', reverse: true, tip: 'Create your own check: at the end of each study or work day, write three lines on what you finished. A visible record replaces the outside praise that is missing.' },
  { d: 'setbacks', text: 'When something goes wrong, I look for the part I can still change.', tip: 'Draw two columns, can change and cannot change, the next time something goes wrong. Spend your next hour only on the first column.' },
  { d: 'mindset', text: 'When I see someone doing better than me, I ask what they did to get there.', tip: 'Choose one person who is ahead of you in something and ask them two questions: what did you practise, and what did you get wrong at first. Note the answers.' },
  { d: 'effort', text: 'I break a long goal into weekly pieces and keep going even when progress feels slow.', tip: 'Cut your goal into four weekly targets you can tick off, such as two chapters or ten applications. Review on the same day each week and adjust the next week only.' },
  { d: 'learn', text: 'I ask for feedback on my work from someone more experienced than me.', tip: 'Choose one piece of finished work and send it to a senior, teacher or mentor with one specific question, such as what is the weakest part. Specific questions get replies.' },
  { d: 'drive', text: 'I have worked on one goal for months, not just days.', tip: 'Pick one goal and commit to it for a fixed review date about eight weeks away. Write down the date and the weekly hours you will give it.' },
  { d: 'setbacks', text: 'I replay a setback in my head for days and find it hard to start the next task.', reverse: true, tip: 'Write the setback on paper in five lines, then close the page and start a very small next task for ten minutes. Writing it out moves it out of your head, and a small task breaks the loop.' },
  { d: 'mindset', text: 'I say to myself I am not good at this yet, instead of I am not good at this.', tip: 'Next time you catch the second sentence, add the word yet and then add one thing you will practise this week. The change only helps if a practice step follows.' },
  { d: 'effort', text: 'I give up quickly if I do not see results within the first few days.', reverse: true, tip: 'Decide before you start how long a fair trial is, such as three weeks of daily practice, and write it down. Judge only at the end of that period, not on day three.' },
  { d: 'learn', text: 'I hide my mistakes instead of talking about them.', reverse: true, tip: 'Tell one trusted person about one recent mistake this week, in two sentences: what happened and what you changed. It is much easier to fix a mistake once someone else knows.' },
  { d: 'drive', text: 'When my motivation is low, I have a small routine that gets me started anyway.', tip: 'Design a five-minute starter, such as opening your notes, laying out your books or writing the first line, and do it at the same time and place daily. Starting is the hard part.' },
  { d: 'setbacks', text: 'I can name something difficult I recovered from in the past and what helped me.', tip: 'Write the story of one past setback in four lines: what happened, what helped, who helped and how long it took. Read it the next time you are low.' },
  { d: 'mindset', text: 'I avoid tasks where I might look weak in front of others.', reverse: true, tip: 'Choose one low-risk place to be a beginner this month, such as a small group, a friend or an online practice group, and do one attempt there, however clumsy.' },
  { d: 'effort', text: 'I can practise something difficult for 30 to 45 minutes without picking up my phone.', tip: 'Put your phone in another room for one session a day and use a paper timer or watch. Increase the block by five minutes every few days.' },
  { d: 'learn', text: 'After a failure, I have changed my method and tried again.', tip: 'After the next failure, change exactly one thing, such as the time of study, the resource or the practice format, and write down what you changed so you can see if it helped.' },
  { d: 'drive', text: 'I often change my goal when a new idea looks more exciting.', reverse: true, tip: 'When a new idea appears, write it in a parked ideas list and wait one week before acting. If it still looks better after finishing your current review point, then switch deliberately.' },
];

export const bundle: SkillTestBundle = {
  test: {
    id: 'resilience-and-growth-mindset-assessment',
    slug: 'resilience-and-growth-mindset-assessment',
    pageUrl: '/services/assessments/resilience-and-growth-mindset-assessment/',
    breadcrumbName: 'Resilience and Growth Mindset Assessment',
    metaTitle: 'Resilience and Growth Mindset Test | Free Self-Assessment',
    metaDescription:
      'Free resilience and growth mindset self-assessment: 40 questions and five scores for setbacks, mindset, effort, learning from mistakes and drive. Instant result.',
    h1Lead: 'Resilience and Growth Mindset',
    h1Accent: 'Assessment',
    eyebrow: 'Setbacks, effort and learning in one report',
    heroSub:
      'Low marks, backlogs, rejections, layoffs and long plateaus test everyone. This free self-assessment turns resilience and a growth mindset into five concrete areas, bouncing back, belief that ability can grow, staying with hard tasks, using feedback and mistakes, and drive over time, and shows which one to build first.',
    stats: [
      { value: '40', label: 'questions' },
      { value: '5', label: 'areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five resilience and mindset areas from your own ratings',
      'About 7 minutes',
      'Where to build first, with a two-week plan',
    ],
    reportTitle: 'Resilience and Growth Mindset Report',
    reportFile: 'future-career-school-resilience-growth-mindset-report.pdf',
    reportKicker: 'RESILIENCE AND GROWTH MINDSET REPORT',
    resultKicker: 'Your resilience and growth mindset result',
    scoreLabel: 'Overall resilience and growth mindset',
    bands: {
      high: 'A relative strength.',
      mid: 'Developing, with room to grow.',
      low: 'This area needs the most work.',
    },
    domainsHeading: 'Five resilience and growth mindset areas this self-assessment covers',
    domainsIntro:
      'These areas describe what people do after a bad result, when a task gets hard, and when feedback arrives. Each one is written as an everyday habit you can rate honestly and practise.',
    domains: [
      {
        key: 'setbacks',
        name: 'Bouncing back from setbacks',
        short: 'Recovering after a failure or rejection',
        strong: 'You feel the disappointment, then move to a next step without losing weeks to it.',
        weak: 'A bad result stays with you for a long time, or one failure makes you doubt the whole goal.',
        plan: [
          'After the next setback, give yourself one evening to feel upset, then write one next step the following morning and do it.',
          'Write the setback in five lines: what happened, what was in your control and what was not.',
          'Tell one trusted person what happened, so you are not carrying it alone.',
        ],
      },
      {
        key: 'mindset',
        name: 'Belief that ability can grow',
        short: 'Seeing skills as something you can build',
        strong: 'You treat skills as things that improve with the right practice, and you learn from people who are ahead of you.',
        weak: 'You tend to see ability as fixed, compare yourself with others and avoid situations where you might look weak.',
        plan: [
          'Pick one skill you call weak and practise it for 20 minutes a day for two weeks, then compare week one with week two.',
          'Replace I am not good at this with I am not good at this yet, and add one practice step.',
          'Ask one person who is good at it how they began and what they got wrong at first.',
        ],
      },
      {
        key: 'effort',
        name: 'Staying with hard tasks',
        short: 'Continuing when work becomes slow or boring',
        strong: 'You keep going through dull or difficult stretches and break long goals into steps.',
        weak: 'You switch to easier things when a task gets hard, or stop when results do not show quickly.',
        plan: [
          'Do the hardest task first for a 25-minute timed block every day for two weeks.',
          'Decide a fair trial period before you start something new, and judge it only at the end.',
          'Break your current big goal into four weekly pieces and tick them off.',
        ],
      },
      {
        key: 'learn',
        name: 'Using feedback and mistakes',
        short: 'Turning errors and comments into improvement',
        strong: 'You look at your errors calmly, ask for feedback and change your method after a failure.',
        weak: 'You feel defensive about corrections, hide mistakes or repeat the same method after it has failed.',
        plan: [
          'Keep a mistakes page this fortnight: what happened, why, and one thing you will do differently.',
          'Ask one person more experienced than you for feedback on one finished piece of work.',
          'When you hear a correction, say thank you and repeat it back before you react.',
        ],
      },
      {
        key: 'drive',
        name: 'Purpose and motivation over time',
        short: 'Keeping a goal alive for months',
        strong: 'You know why your goal matters to you and keep working on it when nobody is watching.',
        weak: 'Your effort depends on praise or novelty, and you often switch goals when something new looks exciting.',
        plan: [
          'Write one sentence on why your goal matters to you personally, and put it where you study or work.',
          'Create a five-minute starter routine for low-energy days and use it at the same time daily.',
          'Choose a review date about eight weeks away before you allow yourself to change the goal.',
        ],
      },
    ],
    questions: CORE.map(({ d, text, reverse }) => (reverse ? { d, text, reverse } : { d, text })),
    readingTitle: 'How to read your resilience and growth mindset result',
    readingSections: [
      {
        title: 'These are habits, not a verdict on you',
        body: [
          'Each statement describes something you do, such as writing down what to change after a mistake or sticking with a task for a set time. That makes these areas trainable. A lower score means a habit you have not practised yet, not a fixed trait or a flaw.',
        ],
      },
      {
        title: 'Why these five areas',
        body: [
          'Bouncing back, belief that ability can grow, staying with hard tasks, using feedback and keeping drive over time together describe how people handle low marks, backlogs, rejections, layoffs and plateaus. They are separate habits, so you can be strong in one and weak in another.',
          'If you are a student, setbacks and mindset often matter first because marks and comparison are everywhere. If you are searching for a job or restarting after a break, effort and drive often decide whether you keep going long enough for your preparation to show.',
        ],
      },
      {
        title: 'Compare areas with each other, not with other people',
        body: [
          'Your scores come only from your own answers, so there is no pass mark and no ranking. Look at which area is lowest and which is highest, then use the plan for the lowest one. Retake the self-assessment after a month and compare area by area.',
        ],
      },
      {
        title: 'Turn scores into examples',
        body: [
          'A score alone convinces nobody. Pick your strongest area and write two real examples of what you did after a setback or a correction. Interviewers and mentors respond to concrete stories more than to labels like resilient or hardworking.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool and shows how you describe yourself. It does not replace feedback from teachers, seniors or people who work with you.',
      'It is not a medical or mental-health assessment and cannot tell you whether you are coping well. If you feel unable to cope or have thoughts of harming yourself, please speak to a doctor, a counsellor or someone you trust. You can also call Tele-MANAS on 14416, a free national helpline.',
      'It is not an employer or admission test and does not predict selection, performance or exam results.',
      'Scores are not compared with other people, so there is no pass mark. Your result can change from week to week depending on what is happening in your life.',
    ],
    faqs: [
      {
        q: 'Is this resilience test free?',
        a: 'Yes. The self-assessment is free to take, and you get your area scores, advice for each answer you gave and a downloadable report without any payment.',
      },
      {
        q: 'Is this a growth mindset test?',
        a: 'One of the five areas, belief that ability can grow, covers how you think about skills, comparison and practice. The other four areas look at what you do after setbacks, on hard tasks, with feedback and over time, because a belief matters most when it shows up in habits.',
      },
      {
        q: 'Is this a grit test?',
        a: 'It covers the parts of grit people usually mean, staying with hard tasks and keeping a goal alive for months, as two of its five areas. It is a self-rating of your own habits with original statements, not a diagnosis or a label.',
      },
      {
        q: 'Is this a resilience self assessment I can use to find out if I am resilient?',
        a: 'It shows how you rate yourself on bouncing back, mindset, effort, learning and drive. There is no single answer to am I resilient, because most people are stronger in some areas than others. Use the result to find the area to build first.',
      },
      {
        q: 'How is the score worked out?',
        a: 'Statements are rated from 1 to 5, and the ones worded in the negative are reversed. In the situation questions, each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
      },
      {
        q: 'What is a good score?',
        a: 'There is no pass mark. Scores are only against your own answers and are not compared with anyone else. A more useful question is which area is lowest for you today and what you will do about it in the next two weeks.',
      },
      {
        q: 'Can students and freshers use it?',
        a: 'Yes. The statements are about everyday habits after a bad result, a backlog, a rejection or a correction, so they apply to school students, college students, job seekers and working professionals. Your report adjusts the advice to the stage you choose.',
      },
      {
        q: 'Is this a mental health test?',
        a: 'No. It is a self-reflection tool about habits and is not a medical or mental-health assessment. If you feel unable to cope or have thoughts of harming yourself, speak to a doctor, a counsellor or someone you trust. You can call Tele-MANAS on 14416, a free national helpline.',
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
        href: '/services/assessments/emotional-intelligence-test-careers/',
        title: 'Emotional Intelligence Test for Careers',
        description: 'Emotional skills that sit behind handling pressure, feedback and relationships at work.',
      },
      {
        href: '/services/assessments/confused-about-career-after-10th-test/',
        title: 'Confused About Career After 10th Test',
        description: 'Find out what is really holding up a decision after Class 10.',
      },
      {
        href: '/blog/career-change/rebuild-career-after-layoff-india/',
        title: 'Rebuild Your Career After a Layoff',
        description: 'Practical steps for restarting after a job loss.',
      },
      {
        href: '/blog/career-change/career-plateau-how-to-break-through-india/',
        title: 'Career Plateau: How to Break Through',
        description: 'What to do when growth at work has stalled.',
      },
      {
        href: '/blog/job-search/first-job-after-graduation-india/',
        title: 'First Job After Graduation',
        description: 'How to approach the first job search and the early months at work.',
      },
      {
        href: '/blog/skills/career-development-skills/',
        title: 'Career Development Skills',
        description: 'The skills that help careers grow, and how to build them.',
      },
    ],
    breadcrumbDescription: 'Free resilience and growth mindset self-assessment with five area scores.',
    webAppDescription:
      'A free original 40-question resilience and growth mindset self-assessment covering bouncing back from setbacks, belief that ability can grow, staying with hard tasks, using feedback and mistakes, and purpose and motivation over time, with five scores, an overall score, a practice plan and a downloadable report.',
    indexDescription: 'Free 40-question resilience and growth mindset self-assessment with five scores and a two-week plan.',
    indexNote: 'Five areas, about 7 minutes, free PDF report',
  },

  depth: {
    stageHeading: 'Which of these describes you best?',
    stageNote: 'Setbacks look different at each stage, from marks and comparison to rejections and layoffs, so your report adjusts the advice to match.',
    stages: [
      {
        key: 'school',
        label: 'School student',
        description: 'Class 8 to 12',
        title: 'Treat marks as feedback, not as a verdict on you',
        body: 'At school, bad marks and comparison with classmates are the main tests. The habit to build is looking at what the paper shows, and practising in small steps, while the results of others stay their own business.',
        actions: [
          'After each test, spend 20 minutes with the corrected paper and list where marks were lost: concept, careless error or time.',
          'Practise the weakest topic in three short sessions a week instead of one long panic before the exam.',
          'Compare your marks only with your own last test, and tell one adult if comparison at home or school is hurting your confidence.',
        ],
      },
      {
        key: 'college',
        label: 'College student',
        description: 'Degree, diploma or professional course',
        title: 'Handle backlogs and placement rejections with a plan',
        body: 'In college, a backlog, a poor semester or a placement rejection can feel final. A written recovery plan and a feedback habit turn each of them into the next move.',
        actions: [
          'List every backlog or weak paper with its exam date and give each a weekly study block until it is cleared.',
          'After each placement or internship rejection, note the round where you were stopped and ask a senior or the placement cell what that round tests.',
          'Join one project or club where you can try something new and fail in a low-stakes setting.',
        ],
      },
      {
        key: 'fresher',
        label: 'Fresher or job seeker',
        description: 'Looking for a first job or in the first years, facing rejections or probation',
        title: 'Keep applying while you improve what you send and say',
        body: 'First-job rejections, silent applications and probation reviews are discouraging because you have little track record yet. Treat each one as information about one stage of the process, and change one thing at a time.',
        actions: [
          'Keep a simple log of each application: date, stage reached, and one thing you will change next time.',
          'After every interview, write down the three questions you answered worst and practise them aloud the next day.',
          'If you are on probation, ask your manager for a short review every two weeks and note what to improve.',
        ],
      },
      {
        key: 'professional',
        label: 'Working professional',
        description: 'Experienced, changing careers, after a layoff or on a long plateau',
        title: 'Restart with small steps after a layoff, a break or a plateau',
        body: 'After a layoff, a long break or years on the same level, the hardest part is the story you tell yourself about being behind. Small daily steps, a short skill refresh and honest conversations rebuild momentum.',
        actions: [
          'Write down three things you did well in your last role, with the outcome, so your starting point is evidence and not fear.',
          'Spend 30 minutes a day on one current skill or tool relevant to the role you want, and keep a dated log.',
          'Speak to two people who restarted after a layoff, break or plateau and ask what the first month looked like.',
        ],
      },
    ],
    tips: CORE.map((c) => c.tip),
    strongTip: 'This is already a habit that works for you. Keep it going and be ready to describe a real example of it.',
    domains: {
      setbacks: {
        why: 'Everyone meets failure, rejection or loss. What matters for your future is how quickly you can feel it, learn from it and take the next step, rather than whether you ever fall.',
        roles: ['Exam preparation, placements, job search and any stretch with repeated rejections', 'Roles with targets, client pressure or frequent changes in plan', 'Any stretch of life with repeated results, such as board exams, entrance tests and long job searches'],
        routine: [
          'Days 1 to 3: Write your last two setbacks in five lines each, noting what you controlled and what you did not.',
          'Days 4 to 7: After any disappointment, take one evening to feel it, then write and start one next step the next morning.',
          'Days 8 to 11: Tell one trusted person about a current worry and ask what they would do in your place.',
          'Days 12 to 14: Review what helped you recover and keep it as a short checklist for next time.',
        ],
        mistakes: ['Treating one result as a judgement on your whole ability', 'Going silent and carrying the setback alone for weeks', 'Waiting until you feel fully fine before taking any next step'],
        proof: ['A real story of a setback, what you did next and how long it took', 'A dated list of the next steps you took after a rejection or a poor result', 'A short recovery checklist you wrote and used more than once'],
        askOthers: 'When something went wrong for me, how did I behave afterwards, and what did you notice about how fast I got going again?',
        talkingPoints: ['You can describe a setback, the lesson and the next step calmly', 'You separate what you controlled from what you did not', 'You recover in days, not months, and can show how'],
        midStep: 'Keep a short recovery checklist and use it the next time you are disappointed, then note whether you restarted faster.',
      },
      mindset: {
        why: 'How you think about ability decides what you try. If you see skill as something that grows with practice, you are more likely to start things you are weak at and to learn from people ahead of you.',
        roles: ['Learning new subjects, exams that need repeated practice and career changes', 'Roles where tools, products or expectations keep changing', 'Roles that ask you to learn quickly, such as sales, support, analytics and teaching'],
        routine: [
          'Days 1 to 3: List three skills you call weak and write what a small improvement in each would look like.',
          'Days 4 to 7: Practise one of them for 20 minutes a day and keep a dated note of what felt easier.',
          'Days 8 to 11: Ask one person who is good at it how they started and what they got wrong early on.',
          'Days 12 to 14: Compare your first and last practice notes, and choose the next skill to work on.',
        ],
        mistakes: ['Comparing your day one with someone else\'s year five', 'Avoiding new tasks so that nobody sees you being a beginner', 'Using the word never about a skill you have barely practised'],
        proof: ['A skill you improved over a few weeks, with dated practice notes', 'An example of learning from someone further ahead than you', 'Dated practice notes showing a skill you built from a weak start'],
        askOthers: 'Do I take on things I am not yet good at, or do I tend to avoid them?',
        talkingPoints: ['You treat skills as things you build with practice', 'You learn openly from people who are ahead of you', 'You start as a beginner without embarrassment and improve in public'],
        midStep: 'Choose one thing you avoid because you are not good at it yet, and do one visible attempt this month.',
      },
      effort: {
        why: 'Most worthwhile goals, an exam rank, a skill, a job search, have a long middle stretch that is slow and dull. Staying with it in planned blocks matters more than short bursts of high energy.',
        roles: ['Long exam preparation such as JEE, NEET, UPSC or banking exams', 'Job searches, skill courses and any project with a slow middle', 'Self-paced work such as freelancing, exam preparation and online courses'],
        routine: [
          'Days 1 to 3: Cut your big goal into four weekly targets and write them down.',
          'Days 4 to 7: Do your hardest task first in a 25-minute timed block, phone in another room.',
          'Days 8 to 11: Raise the block to 35 minutes and add a short break before the next one.',
          'Days 12 to 14: Review which weekly target you met, and adjust only the next week.',
        ],
        mistakes: ['Judging a method after three days', 'Starting a new plan every time the old one gets boring', 'Counting hours instead of checking what the hours produced'],
        proof: ['A project, course or preparation you completed through a dull stretch', 'A weekly log showing steady practice over several weeks', 'A completed course, project or exam cycle with weekly milestones'],
        askOthers: 'Do you see me finishing difficult things, or moving on when they get tough?',
        talkingPoints: ['You plan long goals in weekly pieces and keep going', 'You decide in advance how long to give a method before judging it', 'You keep going through the slow middle of long goals'],
        midStep: 'Pick one long task and give it the same time slot daily for two weeks, logging each session in one line.',
      },
      learn: {
        why: 'Mistakes and corrections are the quickest information you will ever get on what to change. People who use them calmly improve faster than people who defend or hide them.',
        roles: ['Any role with reviews, appraisals, code or content checking, and client work', 'Exam preparation, where tests and mock papers show the gaps', 'Early career roles where managers and seniors give frequent corrections'],
        routine: [
          'Days 1 to 3: Start a mistakes page and write each error with the reason and one changed action.',
          'Days 4 to 7: Send one finished piece of work to a more experienced person with one specific question.',
          'Days 8 to 11: When corrected, say thank you and repeat the point back before replying.',
          'Days 12 to 14: Read your mistakes page, mark any pattern that repeats and change your method for it.',
        ],
        mistakes: ['Explaining why you were right before hearing the correction', 'Changing nothing after a failure and trying the same way again', 'Treating feedback as a comment on your worth instead of your work'],
        proof: ['A before and after example of work you improved after feedback', 'A mistakes page showing a method you changed', 'A message or review from a senior that mentions your improvement'],
        askOthers: 'What is one thing in my work you would change, and how did you feel I reacted when you told me?',
        talkingPoints: ['You ask for feedback and show what you changed', 'You can talk about a mistake openly and say what you learned', 'You turn corrections into visible changes in your work'],
        midStep: 'Ask for feedback on one piece of work every two weeks and change one thing each time.',
      },
      drive: {
        why: 'Strong results over months come from knowing why a goal matters to you and having a way to start on low-energy days. Without it, effort rises and falls with praise, novelty and mood.',
        roles: ['Self-driven work such as freelancing, studying for competitive exams and building skills alone', 'Long career transitions where nobody is checking your progress', 'Leadership, entrepreneurship and any path with few outside checkpoints'],
        routine: [
          'Days 1 to 3: Write one sentence on why your goal matters to you personally and keep it visible.',
          'Days 4 to 7: Set a five-minute starter routine for low-energy days and use it at the same time daily.',
          'Days 8 to 11: Write your own end-of-day check of three lines on what you finished.',
          'Days 12 to 14: Choose a review date about eight weeks away and decide what you will look at then.',
        ],
        mistakes: ['Switching goals whenever a new idea looks more exciting', 'Working only when someone is watching or praising', 'Choosing goals only because family or friends chose them'],
        proof: ['A goal you worked on for several months with dated milestones', 'A routine you built that kept you going without outside checking', 'A learning log or portfolio built steadily over several months'],
        askOthers: 'What do you think I really want from this goal, and does my effort match it?',
        talkingPoints: ['You can say why your goal matters to you in one sentence', 'You keep a routine that works on low-energy days', 'You know your reasons and can show months of steady work'],
        midStep: 'Keep a parked ideas list and only switch goals at a planned review date.',
      },
    },
    thirtyDay: [
      'Week 1: Do the first half of the routine for your lowest area and write one line each day on what you tried.',
      'Week 2: Finish the routine and ask two people for feedback on how you handle that area.',
      'Week 3: Move to your second-lowest area and use two steps from its plan.',
      'Week 4: Retake the self-assessment, compare each area score and write two real examples for your strongest area.',
    ],
  },

  extras: [
    x(['school'], 'setbacks', 'After a low mark, I can still sit down and study the next subject on the same day.', 'Keep a fixed study time that does not change after a bad result. Open the next subject for just 20 minutes and let the habit pull you back in.'),
    x(['school'], 'mindset', 'When classmates score more than me, I feel I should stop trying in that subject.', 'Write your own last three marks in the subject and look only at the direction. Then pick one topic where a small gain is possible this week and practise it.', true),
    x(['school'], 'effort', 'I keep practising a topic I find difficult, such as maths or a language, in short sessions instead of skipping it.', 'Fix three 20-minute sessions a week for your hardest topic and solve or write something every time. Short, regular practice beats one long session before the test.'),
    x(['school'], 'learn', 'I look through my corrected answer sheet to see exactly where I lost marks.', 'Make three columns for each corrected paper: did not know, knew but made an error, ran out of time. Practise the biggest column first.'),
    x(['college'], 'setbacks', 'When I get a backlog, I make a plan with dates for clearing it instead of avoiding it.', 'List every backlog paper with its next exam date, count the weeks and fix a weekly study block for each. A plan on paper reduces the fear of the pile.'),
    x(['college'], 'mindset', 'When classmates get placed before me, I feel it proves I am less capable.', 'Compare your own preparation this month with last month: aptitude practice, projects, mock interviews. Placement order depends on many things, so judge your progress on the part you control.', true),
    x(['college'], 'learn', 'After a poor viva, project review or interview, I ask faculty or seniors what I should improve.', 'Within two days of a poor review, send the faculty member or a senior one question: what is the one thing I should change before next time. Write the reply down.'),
    x(['college'], 'drive', 'I can say why I chose my course, even when marks or placement talk make me doubt it.', 'Write three reasons for your course that have nothing to do with other people. If you cannot, speak to a senior working in a related field about what the work looks like.'),
    x(['fresher'], 'setbacks', 'After a rejection, I note which stage stopped me and what I will change before the next application.', 'Keep a log with the stage reached, such as resume, test, interview or HR round, and change one item before the next application. Patterns show up after about ten entries.'),
    x(['fresher'], 'learn', 'After an interview, I write down the questions I answered poorly and practise them aloud.', 'Within an hour of the interview, write the three weakest answers and rehearse better versions aloud the next day. Repeat for every interview.'),
    x(['fresher'], 'effort', 'I keep applying and preparing on days when no replies arrive.', 'Set a small daily quota, such as five applications or one hour of interview practice, and track it. Judge yourself on the quota you control, not on replies.'),
    x(['fresher'], 'drive', 'During probation or my first months at work, I can name the skill I want to be better at in six months.', 'Choose one skill your manager mentions most often, write a six-month target for it, and share it with your manager so feedback comes against a clear goal.'),
    x(['professional'], 'setbacks', 'After a layoff, a bad appraisal or a missed promotion, I can separate what happened to me from what it says about my ability.', 'Write the event in three plain facts and then, separately, three examples of work you did well. Reading both lists stops one event from becoming your whole story.'),
    x(['professional'], 'mindset', 'I feel too old or too late to learn a new tool or start in a new field.', 'Find two people who started a similar move at your age or later and ask how long the first year took. Then set a four-week learning target in the new tool.', true),
    x(['professional'], 'drive', 'I can describe what I want from the next few years of work, not only what I want to leave behind.', 'Write the next role you want in two lines and three things you would need to learn or show. A direction towards something is easier to sustain than an escape from something.'),
    x(['professional'], 'effort', 'After a long break or plateau, I restart with a small daily routine instead of waiting to feel ready.', 'Begin with 30 minutes a day at a fixed time, such as before work or after dinner, and log each day. Increase only after two steady weeks.'),
  ],

  stageAdvice: {
    school: {
      setbacks: sa('At school, a bad mark in front of family and classmates can feel bigger than it is.', 'After a low mark, sit with the corrected paper for 20 minutes and write the three biggest lost-mark reasons.', 'Tell one adult you trust how you feel about the result, so it is not only in your head.'),
      mindset: sa('At school, comparison with toppers and friends shapes how you see your own ability.', 'Track only your own marks in a subject over three tests and look at the direction, not the rank.', 'Ask a classmate who improved in a subject what they changed in the last term.'),
      effort: sa('At school, the hard part is staying with a difficult subject when the syllabus is long.', 'Break a chapter into daily targets of two pages or five problems and tick them off.', 'Study the hardest subject first for 30 minutes, before your favourite one.'),
      learn: sa('At school, the corrected answer sheet and the teacher\'s remarks are your best feedback.', 'Rewrite two wrong answers properly in your notebook after each test.', 'Ask your teacher one question after each test: what is the one thing that would have earned me more marks.'),
      drive: sa('At school, motivation is easily tied to marks, tuition and what family expects.', 'Write one reason you want to study a subject that has nothing to do with marks.', 'Fix a daily study start time and place so you start even on tired days.'),
    },
    college: {
      setbacks: sa('In college, backlogs, a poor semester or placement rejections can make you feel left behind.', 'Make a dated clearing plan for each backlog and review it every Sunday.', 'After a rejection, note the stage and ask the placement cell or a senior what that round looks for.'),
      mindset: sa('In college, placement news and social media make comparison constant.', 'Mute comparison for a week and track three things you improved, such as aptitude practice, a project and mock interviews.', 'Join a skill group where everyone is a beginner in something and practise in front of them.'),
      effort: sa('In college, long gaps between deadlines make steady effort hard.', 'Set weekly targets for placement preparation, such as two aptitude sets and one coding or case problem.', 'Use a fixed library or study slot daily, with the phone away, for the dull parts of the syllabus.'),
      learn: sa('In college, viva, project reviews and mock interviews give feedback if you ask for it.', 'After each review, write down the three comments you heard and the change you will make.', 'Ask a senior to do a mock interview and note every question you hesitated on.'),
      drive: sa('In college, it is easy to drift between course, placement preparation and other interests.', 'Write why you chose your course and what work you hope to do, and check it at the start of each semester.', 'Choose one project or skill to stay with for a full semester, not a month.'),
    },
    fresher: {
      setbacks: sa('As a fresher, repeated rejections or silence after applications can wear down your confidence.', 'Log each application with the stage reached, and change one thing before the next ten.', 'Keep one fixed daily activity, such as a walk or practice session, so rejections do not control your whole day.'),
      mindset: sa('As a fresher, you are comparing your start with people who already have experience.', 'Write the three skills your target role asks for and mark where you are today and where you want to be in eight weeks.', 'Ask a recent joiner in a company you like how they got in and what they could not do in the first month.'),
      effort: sa('As a fresher, the job search is long and replies are slow.', 'Set a daily quota of applications and one hour of skill or interview practice, and track the quota.', 'Review your log every Sunday and decide only one change for the next week.'),
      learn: sa('As a fresher, probation reviews and interview outcomes carry feedback you must go and collect.', 'Ask your manager for a short review every two weeks during probation and write down each point.', 'After rejections, ask recruiters politely for one line of feedback, and accept silence calmly.'),
      drive: sa('As a fresher, the pull of any job can push you to forget what you actually want from your first role.', 'Write which two skills you want from your first job, and check offers against them.', 'Set a six-month learning goal and tell your manager about it.'),
    },
    professional: {
      setbacks: sa('As a professional, a layoff, missed promotion or restart after a break can shake your sense of who you are at work.', 'List three facts about what happened and three achievements from your last role to keep them separate.', 'Talk to two people who restarted after a layoff or a break and ask what the first month was like.'),
      mindset: sa('As a professional, the belief that you are too old, too late or too specialised can stop you from trying.', 'Spend 30 minutes a day on one new tool in your target field for four weeks and share the result with a peer.', 'Replace I cannot learn this at my stage with a specific question about the first step and answer it.'),
      effort: sa('As a professional, long plateaus and busy schedules make steady learning hard.', 'Block a fixed 30-minute learning slot at the same time every day and protect it.', 'Choose one visible outcome in eight weeks, such as a small project or a certificate, and work backwards.'),
      learn: sa('As a professional, honest feedback is rare, so you have to ask for it.', 'Ask your manager and one peer what single change would help you most in the next year.', 'After an appraisal or an interview, write the feedback in your own words and one action you will take.'),
      drive: sa('As a professional, motivation can fade when the work no longer stretches you.', 'Write what you want from the next three years and the one skill that gets you there.', 'Choose a side project or course that connects to that direction and set a milestone date.'),
    },
  },

  scenarios: [
    sc('setbacks', 'You failed a test or exam you had prepared for. The result is public. What do you do over the next two days?', [
      o('Tell yourself it was bad luck and move on without checking the paper', 33, 'Moving on quickly can protect your mood, but skipping the paper hides what to fix. Spend 20 minutes with the answers and note where marks were lost.'),
      o('Study twice as long every day for a week using the same method', 67, 'Your effort is a strength, but the same method can give the same result. Check what went wrong first, then change one thing about how you prepare.'),
      o('Take the evening to feel upset, then go through the paper, list where marks were lost and write a revision plan', 100, 'Strong. Allowing the feeling and then turning to evidence and a plan is how recovery usually works, and you are building a habit for future setbacks.'),
      o('Decide the subject is not for you and drop it', 0, 'One result rarely settles ability. Look at the paper first and give the subject a fair trial of a few weeks with a changed method before deciding.'),
    ]),
    sc('setbacks', 'You applied for a job or a seat in a course and were rejected without a reason. What do you do?', [
      o('Wonder what is wrong with you and delay the next application', 0, 'This turns a single rejection into a verdict on you. Pick one change, such as the resume or the aptitude section, and send the next application this week.'),
      o('Write down the stage you reached, change one thing and send the next application within the week', 100, 'Strong. Treating the rejection as information on one stage, then acting quickly, keeps momentum and shows you what to test next.'),
      o('Apply to twenty more places immediately without changing anything', 50, 'Quick action helps, but without a change you repeat the same result. Review the first few rejections for one pattern before sending more.'),
      o('Blame the process as unfair and stop applying for a while', 33, 'Processes are often imperfect, and being angry is natural. Give yourself a short break, then focus on the part you control: the quality of what you send.'),
    ]),
    sc('mindset', 'A classmate or colleague picks up a skill you struggle with in half the time. What do you think and do?', [
      o('Decide they have a natural talent and you do not', 0, 'This belief can stop you from practising. Ask them how they started and what they practised, because a surprising amount of skill comes from method.'),
      o('Ask them how they practise and what mistakes they made early, then try one of their methods for two weeks', 100, 'Strong. Treating their speed as information on method, not as proof of your limit, is the heart of a growth mindset.'),
      o('Feel motivated and work longer hours on your own without asking anyone', 67, 'Your drive is useful, but learning from their method can save you weeks. Ask them one question about how they practise.'),
      o('Avoid working with them so that you do not feel behind', 33, 'Avoiding the comparison protects your mood but also removes a source of learning. Work with them once on a small task and observe how they approach it.'),
    ]),
    sc('mindset', 'You are asked to try something you have never done, and you may look clumsy in front of others. What do you do?', [
      o('Make an excuse and let someone else do it', 0, 'This avoids embarrassment but also avoids learning. Take a small version of the task and tell the group you are new at it.'),
      o('Practise quietly at home first and join only when you feel ready', 67, 'Preparing helps, but waiting to feel ready can last forever. Set a date to join and use the practice to reach it.'),
      o('Prepare for one hour, say that you are new at this, try it and ask for one tip afterwards', 100, 'Strong. Naming that you are new lowers the pressure, and asking for a tip turns the clumsy attempt into learning.'),
      o('Try it with confidence but avoid asking for help to hide that you are unsure', 33, 'Confidence is useful, but hiding doubt keeps mistakes unseen. Ask one question early so that small errors do not grow.'),
    ]),
    sc('effort', 'Three weeks into a course or exam preparation, the topic has become dull and hard. What do you do?', [
      o('Switch to a more exciting course that looks easier', 0, 'Switching feels like progress but resets the hard part. Decide a fair trial period for the current one and judge at its end.'),
      o('Keep going the same way and push through on willpower alone', 50, 'Staying with it is good, but willpower alone drains. Break the topic into smaller targets and change the study format, such as practice questions in place of reading.'),
      o('Stop until you feel motivated again', 33, 'Motivation often follows starting, not the other way round. Do a five-minute starter every day, even in low-energy weeks.'),
      o('Cut the next two weeks into daily targets, change the format of study and keep a fixed time slot, then review at the end of the fortnight', 100, 'Strong. Smaller targets, a different format and a fixed slot keep the dull middle manageable, and a review date stops you drifting.'),
    ]),
    sc('effort', 'You have a big task due in a month, and after a week you see almost no visible progress. What do you do?', [
      o('Conclude your method is wrong and restart with a new approach', 33, 'A restart might be right, but one week is a short time. Check whether the method is working by looking at specific small outputs before changing it.'),
      o('Set weekly milestones, check the first week against a small output, and adjust only what is not working', 100, 'Strong. Milestones make slow progress visible, and adjusting one thing at a time lets you see what actually helps.'),
      o('Wait for the last week and then work all night', 0, 'Last-minute effort is stressful and leaves no room to fix mistakes. Start a daily block now, even a short one.'),
      o('Work harder every day without checking what the work is producing', 67, 'Effort matters, but without checks you may be working on the wrong thing. Review at the end of each week.'),
    ]),
    sc('learn', 'Your senior or teacher returns your work with many corrections. What do you do?', [
      o('Explain why each point was reasonable, so they know you tried', 33, 'Explaining can help them understand, but it can sound defensive. Listen to the full list first, say thank you and ask one clarifying question.'),
      o('Feel discouraged and avoid showing your work again', 0, 'A long list of corrections is a sign of where to improve, not of your worth. Pick the top two changes and show the next piece soon.'),
      o('Thank them, group the corrections into patterns, fix the top two and show the next piece sooner', 100, 'Strong. Looking for patterns and fixing the top few keeps the feedback manageable and shows the person that you act on it.'),
      o('Fix every correction quickly without trying to understand why', 67, 'Fixing is good, but fixing without understanding means you will repeat the error. Ask why for the two most common mistakes.'),
    ]),
    sc('learn', 'You made a mistake that nobody has noticed yet. What do you do?', [
      o('Leave it, since no one noticed', 0, 'Hidden mistakes tend to surface later at a worse moment. Telling the right person early lets you fix it with less damage.'),
      o('Tell the person responsible quickly, explain what happened and how you will fix it, and note how to avoid it', 100, 'Strong. Early honesty builds trust and gives you the chance to repair the error, and the note stops it from repeating.'),
      o('Fix it quietly and hope no one finds out', 50, 'Fixing it is right, but staying silent leaves others unaware if they depend on it. Tell the person in one line.'),
      o('Wait to see if it causes a problem before saying anything', 17, 'Waiting lets the problem grow. Raise it now, while you can still fix it with little cost.'),
    ]),
    sc('drive', 'Two months into a long goal, your enthusiasm has faded. What do you do?', [
      o('Look for a new goal that feels more exciting', 17, 'A new goal brings a short burst of energy, but the same dip will come. Check whether the goal still matters to you before leaving it.'),
      o('Re-read your reason for the goal, shrink the daily task to five minutes to restart, and set a review date', 100, 'Strong. Reconnecting with your reason and lowering the start barrier keeps the goal alive, and a review date gives a clear moment to decide.'),
      o('Tell friends about the goal so they push you', 50, 'Support can help, but your effort should not depend on others pushing. Add your own end-of-day check as well.'),
      o('Keep working as before and ignore how you feel', 67, 'Persistence is good, but ignoring a long dip can lead to burnout of interest. Adjust the routine and refresh the reason.'),
    ]),
    sc('drive', 'You are halfway through your plan when a friend shows you a new course or business idea that looks exciting. What do you do?', [
      o('Switch immediately because the new idea looks better', 0, 'New ideas always look better because you have not met their hard parts yet. Park it and decide at your planned review date.'),
      o('Ignore the idea completely and never think of it again', 50, 'Staying focused is good, but the idea may be worth a look later. Write it down for review.'),
      o('Split your time evenly between both', 33, 'Splitting often leaves both half done. Finish the current review point first.'),
      o('Write it on a parked ideas list, finish your current review point, then compare both on the same questions', 100, 'Strong. Parking the idea protects your current goal, and comparing later on fixed questions makes any switch a decision and not a reaction.'),
    ]),
    { ...sc('setbacks', 'A friend scores far more than you in a school unit test and everyone is talking about it. You scored low. What do you do?', [
      o('Tell yourself you are just not good at studies', 0, 'One test cannot show your ability. Look at the paper, find the lost marks and compare with your own last test.'),
      o('Stop talking to your friend for some days', 17, 'Distance may ease the sting, but the friend is not the problem. Ask them how they prepare for that subject.'),
      o('Compare with your own last result, check where marks were lost, ask your friend how they revise and try one change', 100, 'Strong. Comparing with your past self, checking the paper and learning one method turns an uncomfortable moment into a plan.'),
      o('Study all night before the next test', 33, 'Long hours may feel productive, but spread-out practice usually works better and protects your health. Plan short sessions across the week.'),
    ]), stages: ['school'] },
    { ...sc('setbacks', 'You have a backlog in one paper and your next semester begins soon. What do you do?', [
      o('Plan to deal with it after the semester ends', 33, 'Delaying adds more pressure later. Give the backlog a weekly block now, even a short one.'),
      o('Write the exam date and syllabus, split it into weekly blocks and ask a senior who cleared it for their notes and method', 100, 'Strong. A dated plan and a senior\'s method make the backlog a defined task instead of a worry.'),
      o('Hope for an easier paper or a re-evaluation', 0, 'Hoping leaves the result to chance. Start preparing now, and treat any re-evaluation as a bonus.'),
      o('Quit the subject and focus only on placements', 50, 'Placement preparation matters, but a backlog may block eligibility. Check the rules and clear it alongside.'),
    ]), stages: ['college'] },
    { ...sc('setbacks', 'You have faced several rejections after interviews for your first job. What do you do?', [
      o('Question whether you are fit for any job and stop applying for some weeks', 0, 'A run of rejections hurts but does not decide your future. Take a few days to rest, then restart with a small daily quota.'),
      o('Apply to more places faster without changing anything', 50, 'Volume helps, but repeated rejections at the same stage suggest one thing to fix. Find the stage and change it.'),
      o('Ask a friend to do a mock interview, practise the questions you answered worst and keep applying with a daily quota', 100, 'Strong. A mock interview shows what the interviewer sees, and a daily quota keeps you moving while you improve.'),
      o('Take a break until you feel ready and the market improves', 33, 'Rest is fine for a few days, but waiting for the market can leave a long gap. Keep a light routine going.'),
    ]), stages: ['fresher'] },
    { ...sc('setbacks', 'You were laid off, or are restarting after a long break, and feel behind your peers. What do you do?', [
      o('Wait until you feel confident before updating your resume or contacting anyone', 17, 'Confidence often comes after action. Update your resume this week and speak to one person.'),
      o('Apply widely to anything just to get back in quickly', 50, 'Speed helps with income, but scattered applications can tire you. Choose one or two target roles and shape your resume for them.'),
      o('Compare yourself with former colleagues and wonder if you should change field completely', 33, 'Comparison can shake your judgement. Decide on a direction after talking to people in the field, not from fear.'),
      o('List what you achieved in your last role, set a 30-minute daily learning slot and speak to two people who restarted', 100, 'Strong. Evidence of past work, a daily learning habit and real stories from others give you a base to restart.'),
    ]), stages: ['professional'] },
  ],

  phrases: {
    setbacks: [
      `"That did not go the way I wanted. What is one thing I can change for next time?"`,
      `"I am upset about it, and I will take until tomorrow morning to feel that, then I will start the next step."`,
      `"It did not work this time, and I am still going to try again with a changed approach."`,
    ],
    mindset: [
      `"I am not good at this yet, and I will practise it for 20 minutes a day."`,
      `"How did you start, and what did you get wrong in the beginning?"`,
      `"I am new to this, so please tell me one thing I could improve."`,
    ],
    effort: [
      `"I will work on this for 25 minutes before I decide whether to stop."`,
      `"This week's target is ... and I will tick it off by Sunday."`,
      `"I will give this method three weeks before I judge it."`,
    ],
    learn: [
      `"Thank you. Could you show me one example so I can fix it?"`,
      `"I made a mistake in ... and here is what I have changed."`,
      `"What is the one change that would improve this the most?"`,
    ],
    drive: [
      `"I want to do this because ..."`,
      `"I will review this goal on ... and decide then whether to continue."`,
      `"On low-energy days, I will do the five-minute starter and see how I feel."`,
    ],
  },

  stagePlan: {
    school: [
      'After each test, spend 20 minutes with the corrected paper and list where marks were lost.',
      'Practise your hardest topic in three short sessions each week.',
      'Compare your marks only with your own last test, not with classmates.',
      'Tell a parent, teacher or counsellor when comparison or results are weighing on you.',
    ],
    college: [
      'List every backlog or weak paper and give each a dated weekly study block.',
      'After each rejection, note the stage and ask a senior what that round tests.',
      'Set weekly targets for placement preparation and tick them off every Sunday.',
      'Take on one project or club task where you can try something new and learn from a failure.',
    ],
    fresher: [
      'Log each application with the stage reached and change one thing before the next ten.',
      'After every interview, write your three weakest answers and practise them aloud.',
      'Set a daily quota of applications and one hour of skill practice.',
      'During probation, ask for a short review every two weeks and act on one point each time.',
    ],
    professional: [
      'Write three achievements from your last role to anchor your story in evidence.',
      'Fix a 30-minute daily learning slot for one skill relevant to your next role.',
      'Speak to two people who restarted after a layoff, break or plateau.',
      'Set an eight-week outcome, such as a small project or certificate, and work back from it.',
    ],
  },

  talk: {
    setbacks: {
      q: 'Tell me about a time you failed or were rejected. What did you do next?',
      a: 'Pick one real setback, say plainly what happened and what part you controlled, then describe the next step you took and how long it took. End with what you do differently now.',
      line: 'Recovered from [setback] by [specific action], and applied the lesson to [later result].',
    },
    mindset: {
      q: 'Tell me about a skill you were weak at and how you improved it.',
      a: 'Name the skill, how you practised (frequency and method), who you learned from and what changed after a few weeks. Show that you began as a beginner.',
      line: 'Improved [skill] from [starting point] to [result] over [time] through [practice method].',
    },
    effort: {
      q: 'Tell me about a long or difficult task you stayed with when it got dull.',
      a: 'Describe the goal, how you broke it into weekly steps, what you did when motivation dipped and the final result. Mention the routine you used.',
      line: 'Completed [long task or course] over [time] by working in [weekly or daily blocks], delivering [result].',
    },
    learn: {
      q: 'Tell me about feedback you received that was hard to hear. What did you change?',
      a: 'Describe the feedback without blaming anyone, how you checked you understood it, what you changed and what improved. Avoid presenting it as a trick answer such as being too much of a perfectionist.',
      line: 'Acted on feedback about [issue] by [change], which improved [result].',
    },
    drive: {
      q: 'Why do you want this role or goal, and what keeps you going when it is hard?',
      a: 'Give your own reason in one sentence, one example of working on it over months and the routine that keeps you going. Mention a step you took without being asked.',
      line: 'Worked on [goal] for [months] through [routine], reaching [milestone].',
    },
  },

  talkTitles: {
    strong: 'How to show this strength in an interview or on your CV',
    weak: 'How to answer if you are asked about your weakest area',
    intro: 'Interviewers ask how you handle setbacks and feedback through real stories. Prepare one example for each area, with what happened, what you did and what changed.',
    mode: 'interview',
  },
};
