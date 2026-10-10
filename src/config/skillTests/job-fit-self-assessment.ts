// Job Fit Self-Assessment: a complete self-rating test bundle.
// General guidance only. No statistics, norms, pass marks or outcome claims.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

export const bundle: SkillTestBundle = {
  test: {
    id: 'job-fit-self-assessment',
    slug: 'job-fit-self-assessment',
    pageUrl: '/services/assessments/job-fit-self-assessment/',
    breadcrumbName: 'Job Fit Self-Assessment',
    metaTitle: 'Job Fit Test | Is This Job Right for Me?',
    metaDescription:
      'Free job fit self-assessment: 40 to 42 questions and five scores for work, people, growth, life and values fit. See what to fix, test or weigh. No sign-up.',
    h1Lead: 'Job Fit',
    h1Accent: 'Self-Assessment',
    eyebrow: 'For a job you are in, an offer you hold, a new role or a comparison of roles',
    heroSub:
      'When a job feels wrong, it is hard to say which part is wrong. This free self-assessment checks five areas of fit, the day-to-day work, your manager and team, learning and growth, pay, hours and life, and meaning and values, then shows which parts to fix, which to test and which to weigh. Answer about the job you are in, or the job you are considering. It does not tell you to stay or to leave.',
    stats: [
      { value: '40-42', label: 'questions' },
      { value: '5', label: 'fit areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five fit areas from your own ratings',
      'About 7 minutes',
      'What to fix, test or weigh first, with a 14-day routine',
    ],
    reportTitle: 'Job Fit Report',
    reportFile: 'future-career-school-job-fit-report.pdf',
    reportKicker: 'JOB FIT REPORT',
    resultKicker: 'Your job fit result',
    scoreLabel: 'Overall job fit',
    bands: {
      high: 'A good fit in this area.',
      mid: 'A mixed fit: some of it works, some needs testing.',
      low: 'A weak fit in this area: fix, test or weigh it first.',
    },
    domainsHeading: 'Five areas of job fit this self-assessment covers',
    domainsIntro:
      'A job can suit you in one way and not in another. Good pay with a draining team, or a kind manager with no learning, are different problems with different answers. These five areas separate them so you can see what is actually wrong.',
    domains: [
      {
        key: 'work',
        name: 'Day-to-day work fit',
        short: 'Whether the tasks themselves suit you',
        strong: 'The tasks you do most days use skills you value, and you can tell what a good day of work looks like.',
        weak: 'Much of your week goes on tasks that drain you or that are far from what you expected, and it is hard to say what counts as good work.',
        plan: [
          'For two weeks, write down at the end of each day the one task that gave you energy and the one that drained you, with a one-line reason.',
          'Sort your tasks into three lists: ones you want more of, ones you can live with, and ones you want less of. Share the list with your manager.',
          'Pick one draining task and test a change: a different time of day, a template, a swap with a colleague or a clearer brief.',
        ],
      },
      {
        key: 'people',
        name: 'Manager, team and culture',
        short: 'Whether the people and the way of working suit you',
        strong: 'You know what is expected of you, you can speak up safely, and there is someone at work you can turn to.',
        weak: 'Expectations are unclear, speaking up feels risky, or you feel you must hide how you think to fit in.',
        plan: [
          'Ask your manager one question this week: "What would a good next month look like for me?" Write the answer down.',
          'Identify one colleague you trust and ask them for advice on a real work problem within the next few days.',
          'Pick one issue you have kept to yourself, write it in three neutral sentences, and decide whom to raise it with and when.',
        ],
      },
      {
        key: 'growth',
        name: 'Learning and growth',
        short: 'Whether you are building skills and options',
        strong: 'You are learning useful things, you can see a next step, and the skills you build would be valued beyond this one company.',
        weak: 'Your work has stayed the same for a long time, nobody has discussed your next step, or your skills are very specific to this one place.',
        plan: [
          'List what you learned in the last three months. If the list is short, choose one new task or skill to ask for in the next month.',
          'Ask your manager how roles move forward here and what the next role would need from you.',
          'Check three job postings for roles you might want in two years and note which skills you are not yet building.',
        ],
      },
      {
        key: 'life',
        name: 'Pay, hours, location and life fit',
        short: 'Whether the job fits the life around it',
        strong: 'Your hours, travel and pay leave you enough rest, time and money for the life you want, and your terms are clear to you.',
        weak: 'Long or unpredictable hours, travel, pay that does not cover your plans, or unclear terms are costing you rest, time or peace of mind.',
        plan: [
          'Track your working hours, travel time and unplanned extra work for two weeks in a simple note.',
          'Write down your monthly needs and your plans for the next year, and check honestly whether this job covers them.',
          'Read your offer letter or appointment letter again and note the notice period, leave, working hours and pay terms that you are not sure about.',
        ],
      },
      {
        key: 'values',
        name: 'Meaning and values fit',
        short: 'Whether the work and the company sit well with what you care about',
        strong: 'You can say why your work matters in terms you believe, and you are comfortable with how the company behaves.',
        weak: 'You feel uneasy about parts of the work or the company, or you find yourself explaining the job away when people ask about it.',
        plan: [
          'Write your three most important values at work, such as honesty, helping people, craftsmanship, security or independence.',
          'For each value, write one example from the last month where this job supported it or went against it.',
          'Decide which of the two or three mismatches you can live with, which you can change, and which you cannot accept.',
        ],
      },
    ],
    questions: [
      { d: 'work', text: 'I can name the tasks in this job that I look forward to and the tasks I dread.' },
      { d: 'work', text: 'Most days, I use skills I am good at and consider worth using.' },
      { d: 'work', text: 'A large part of my week goes on work that has little to do with why I took this job.', reverse: true },
      { d: 'work', text: 'At the end of a day, I can tell whether it was a good day of work.' },
      { d: 'work', text: 'The pace and pressure of this job feel manageable in most weeks, even if some weeks are hard.' },
      { d: 'people', text: 'I can say what my manager expects from me over the next month.' },
      { d: 'people', text: 'I can raise a problem or disagree with someone here without worrying that it will be held against me.' },
      { d: 'people', text: 'I feel I have to hide how I think, speak or live in order to fit in with the team.', reverse: true },
      { d: 'people', text: 'There is at least one person here I can ask for help or advice without feeling judged.' },
      { d: 'people', text: 'The feedback I get is usually specific enough for me to act on.' },
      { d: 'growth', text: 'In the last three months, I have learned something in this job that I can use again.' },
      { d: 'growth', text: 'I can name the next role or skill I could move towards here and what it would take.' },
      { d: 'growth', text: 'My work has stayed the same for a long time, and nobody has talked about changing it.', reverse: true },
      { d: 'growth', text: 'I get chances to take on new tasks, or I know I can ask for them.' },
      { d: 'growth', text: 'The skills I build in this job would be useful at other employers too.' },
      { d: 'life', text: 'My working hours and travel leave me enough time and energy for sleep, family and rest.' },
      { d: 'life', text: 'My pay covers my monthly needs and the plans I have made for the next year.' },
      { d: 'life', text: 'I often work extra hours that were not agreed in advance and are not recognised.', reverse: true },
      { d: 'life', text: 'The location, commute or shift pattern of this job is something I can keep up for the next couple of years.' },
      { d: 'life', text: 'I know my pay, leave, notice period and benefits terms, and I have them in writing.' },
      { d: 'values', text: 'I can explain in one sentence why my work matters to someone, in words I believe.' },
      { d: 'values', text: 'I am comfortable with how this organisation treats its customers, staff and suppliers.' },
      { d: 'values', text: 'I am asked to do things at work that leave me uneasy.', reverse: true },
      { d: 'values', text: 'The kind of success this job rewards is the kind of success I want.' },
      { d: 'values', text: 'When people ask what I do for work, I find myself making excuses or playing it down.', reverse: true },
    ],
    readingTitle: 'How to read your job fit result',
    readingSections: [
      {
        title: 'Fit is made of parts, not one feeling',
        body: [
          'Wanting to leave a job usually arrives as one heavy feeling. Underneath, it is usually one or two parts that are not working: the tasks, the manager, the lack of learning, the hours or the values. Each statement here describes something you can notice in a normal week, so the result shows which part is behind the feeling.',
        ],
      },
      {
        title: 'Fix, test or weigh',
        body: [
          'A low score in an area does not mean the job is wrong for you. It means one of three things. Some gaps can be fixed with a conversation or a change of routine. Some need a test first, such as asking for a new task for a month, to see whether the gap is real. Some are trade-offs to weigh against what the job gives you, such as security, learning or a short commute.',
          'Your report suggests which of the three fits each low area. The decision about whether to stay, move internally or look elsewhere stays with you.',
        ],
      },
      {
        title: 'Your situation changes what matters',
        body: [
          'If you are in a job and wondering, the useful question is which part is wrong and whether it can change. If you are holding an offer, the useful question is what you still need to verify before saying yes. If you are new in a role, early doubts need a few ordinary weeks of evidence before they are treated as a verdict. If you are comparing roles, the same five points applied to each role make the choice clearer than a general impression.',
        ],
      },
      {
        title: 'Look at the lowest area, and at the pattern',
        body: [
          'The overall score is only a rough summary. A strong overall score with one very low area, such as values, may still deserve serious attention. A middling score across all five areas may point to a tired period more than a poor job. Look at the lowest area first, then retake the test in a month, after you have tried one change, to see what moved.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool and shows how you describe your own job at one point in time. It does not know your employer, your manager or your circumstances, and it cannot tell you whether to stay in a job, accept an offer or leave.',
      'It is not an employer evaluation and does not measure your performance, and it does not predict your future in any job or company.',
      'Scores are not compared with other people, so there is no pass mark. A high score does not mean the job is right for everyone, and a low score does not mean the job is wrong for you.',
      'Money, family responsibilities, health, visas, loans and the state of the job market are real constraints that no self-rating can see. Weigh them yourself and, where needed, speak to someone you trust.',
      'This is not a medical or mental-health assessment. If work is leaving you unable to cope, or you have thoughts of harming yourself, please speak to a doctor, a counsellor or someone you trust, and you can call Tele-MANAS (14416), the free national helpline.',
    ],
    faqs: [
      {
        q: 'Is this job fit test free?',
        a: 'Yes. You can take it without paying and without signing up, see your result on screen and download the report as a PDF.',
      },
      {
        q: 'Is this job right for me? Can this test tell me?',
        a: 'It cannot decide for you, and it does not try to. It rates five parts of fit from your own answers, so you can see which parts work, which need fixing and which are trade-offs. Many people find that one or two parts are behind a feeling that the whole job is wrong.',
      },
      {
        q: 'Should I quit my job? Will this quiz tell me?',
        a: 'No. The result never tells you to stay or to leave. It shows which areas to fix, test or weigh, and suggests small tests you can run for a few weeks before any big decision. Money, notice terms and your next step matter as much as how the job feels.',
      },
      {
        q: 'What is a good score on this test?',
        a: 'There is no pass mark. Scores are only against your own answers, not against other people. Use the area scores to decide what to look at first, and retake the test after a month to see what changed.',
      },
      {
        q: 'How is the score worked out?',
        a: 'Statements are rated from 1 to 5 and the ones worded in the negative are reversed. In the situation questions, each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
      },
      {
        q: 'Can I use this as a job offer decision checklist?',
        a: 'Yes. Choose the stage for holding or expecting an offer, and the extra questions and advice focus on what to verify before you accept, such as the real tasks, your manager, review and pay terms in writing, and probation terms. You can also use it on two offers and compare the area scores side by side.',
      },
      {
        q: 'Can I take it if I have just joined a new job, or if I am a fresher?',
        a: 'Yes. There are stages for the first six months in a new job and for job seekers comparing roles. If you have not yet worked, answer about the role you are considering, or about an internship or project, and use the advice for comparing roles.',
      },
      {
        q: 'Is this job satisfaction self-assessment a mental-health test?',
        a: 'No. It looks at how well a job fits you, not at your health. If work is leaving you unable to cope, or you have thoughts of harming yourself, please speak to a doctor, a counsellor or someone you trust, and you can call Tele-MANAS (14416), the free national helpline.',
      },
    ],
    related: [
      {
        href: '/services/assessments/working-professionals-and-career-changers/',
        title: 'Assessments for Working Professionals and Career Changers',
        description: 'Tests and guidance for people already working who are thinking about their next step.',
      },
      {
        href: '/services/assessments/graduates-and-early-professionals/',
        title: 'Assessments for Graduates and Early Professionals',
        description: 'Tests for your first job, first switch and early career choices.',
      },
      {
        href: '/services/assessments/placement-aptitude-test/',
        title: 'Placement Aptitude Test',
        description: 'A free test of the reasoning and work-style signals employers look for.',
      },
      {
        href: '/services/assessments/promotion-readiness-assessment/',
        title: 'Promotion Readiness Assessment',
        description: 'Check how ready you are for the next level in your current job.',
      },
      {
        href: '/services/assessments/career-readiness-self-assessment/',
        title: 'Career Readiness Self-Assessment',
        description: 'Rate the habits that prepare you for your next career step.',
      },
      {
        href: '/blog/career-change/career-plateau-how-to-break-through-india/',
        title: 'Career Plateau: How to Break Through in India',
        description: 'What to try when your job has stopped teaching you anything new.',
      },
      {
        href: '/blog/career-change/career-change-after-5-years-india/',
        title: 'Career Change After 5 Years in India',
        description: 'How to think about a change once you have some experience behind you.',
      },
      {
        href: '/blog/job-search/first-job-after-graduation-india/',
        title: 'First Job After Graduation in India',
        description: 'How to choose and settle into a first job.',
      },
    ],
    breadcrumbDescription: 'Free job fit self-assessment with five area scores.',
    webAppDescription:
      'A free original 40-to-42-question job fit self-assessment covering day-to-day work fit, manager, team and culture, learning and growth, pay, hours, location and life fit, and meaning and values fit, with five scores, an overall score, a 14-day routine and a downloadable report. It shows what to fix, test or weigh and does not tell you to stay or leave.',
    indexDescription: 'Free 40-to-42-question job fit test with five scores: what to fix, test or weigh in your job.',
    indexNote: 'For a job you are in, an offer you hold, a new role or a comparison',
  },

  depth: {
    stageHeading: 'Which of these describes your situation?',
    stageNote: 'Answer about the job you are in, or the job you are considering. A doubt in an old job, an offer in your hand, a new job and a comparison of roles need different checks, so your report adjusts the advice to match.',
    stages: [
      {
        key: 'current',
        label: 'In a job now and wondering',
        description: 'Working, and not sure this job is right for you',
        title: 'Find the exact problem and test a fix before any big decision',
        body: 'When you have been in a job for a while, doubt tends to arrive as one big feeling. Before deciding anything, name the part that is wrong, try one small change for a few weeks and note what happens. That way, if you do decide to look elsewhere, you know what to look for.',
        actions: [
          'Write one sentence naming the main problem, such as "my tasks drain me" or "I have no learning here", and note when it began and what changed then.',
          'Run one test for three to four weeks: ask for a different task, raise the issue with your manager or move to another team, and keep a short note of what changes.',
          'Work out how many months of expenses you could cover without pay, and what your notice period and dues are, so that any choice you make later is not forced by money.',
        ],
      },
      {
        key: 'offer',
        label: 'Holding or expecting an offer',
        description: 'You have an offer, or one is likely',
        title: 'Verify what is real before you say yes',
        body: 'An interview shows you the best side of a job. Before accepting, check the daily tasks, the person you will report to, how performance and pay are reviewed, and the written terms. Most disappointments in the first months come from things nobody asked about before joining.',
        actions: [
          'Ask for a short call with your future manager and a current team member, and ask what a normal week looks like and what the last person in this role did.',
          'Get the offer in writing and read the pay structure, joining date, notice period, probation terms and working hours. Ask about anything unclear before you accept.',
          'Write a short list of what you want from your next job and score the offer against it, so you decide on fit and not only on relief at being chosen.',
        ],
      },
      {
        key: 'newjob',
        label: 'First six months in a new job',
        description: 'Recently joined, and the job feels different from what you expected',
        title: 'Separate settling-in effects from real mismatch',
        body: 'The early weeks are tiring in any job because everything is new, so doubts then are not always a verdict. Probation periods differ from one employer to another, so read your own letter for what is checked before confirmation. Use the first months to gather clear evidence, not to settle the question on a bad week.',
        actions: [
          'Ask your manager what a good result looks like by the end of your probation or first three months, and note the answer in an email to confirm it.',
          'Keep a weekly note of how the real tasks compare with what was described in your interview, with specific examples rather than general feelings.',
          'Find one colleague outside your own team to learn how things really work, and ask them what new joiners usually find hard in the first few months.',
        ],
      },
      {
        key: 'seeking',
        label: 'Job seeker comparing roles',
        description: 'Looking at more than one role, or choosing your first job',
        title: 'Compare roles on the same points, not on impressions',
        body: 'When options differ in brand, pay, location and growth, it is easy to be swayed by whichever is most visible. Use the same five points for every role, find one person who does each kind of work, and decide what you will not compromise on before you compare.',
        actions: [
          'Build a simple grid with the five fit areas as rows and each role as a column, and score each cell from 1 to 5 after gathering real information.',
          'For each role, speak to one person doing a similar job and ask what the daily work is like and what they wish they had known before joining.',
          'Decide your two or three non-negotiables in advance, such as location, learning or hours, and remove any role that fails them before comparing the rest.',
        ],
      },
    ],
    tips: [
      // work
      'For the next two weeks, write at the end of each day one task that gave you energy and one that drained you, each with a one-line reason. After ten days, you will see the pattern and can name what you want more and less of.',
      'List the three skills you are best at and tick the ones you used this week. If fewer than two are ticked, ask your manager for one task a week that uses your strongest skill, and say how it would help the team.',
      'Keep a log for one week of tasks that are not part of the role you were hired for, with the hours spent. Show it to your manager and ask which of these should stay, which can move to others and which you should stop.',
      'Ask your manager at the start of the week what a good week looks like, and write two outcomes down. On Friday, check them off. A clear target makes it easier to know when you did good work.',
      'Mark your three most pressured days in the last month and note what caused the pressure: deadlines, unclear tasks or interruptions. Raise the most repeated cause with your manager and propose one change, such as an earlier brief or a protected hour.',
      // people
      'Ask your manager, "What are the two most important things for me to deliver this month?" Write the answer down and send it back by message to confirm. Do it again each month.',
      'Choose one low-risk issue, such as a timeline or an unclear task, and raise it with your manager in a calm, specific way: what you saw, what you suggest. Notice how it is received before deciding how safe it is to raise bigger issues.',
      'Write down the two things you hide or change most at work, and ask whether each is normal professional behaviour or a sign that you are not accepted. Find one colleague you can be honest with, and test whether the pressure to hide eases.',
      'Pick one person you respect, in or outside your team, and ask for ten minutes of advice on a real problem this week. Then thank them and tell them what you did with it. A small, repeated habit builds a trusted contact.',
      'After your next piece of feedback, reply with, "Can you give me one example of what good would look like?" Write the example down. Specific feedback is rarely offered, so ask for it.',
      // growth
      'Write down three things you can do now that you could not do three months ago. If you cannot, choose one skill to build in the next month and ask your manager for a task that needs it.',
      'Ask your manager, "What would the next role need from me, and what could I start doing now?" Write down the two skills or results named, and plan one action for each within the next month.',
      'List the tasks you did a year ago and the tasks you do now, and mark what changed. If nothing has, bring a proposal to your manager: one new responsibility, how you would try it for a month and how you will show the result.',
      'Ask your manager or a senior for one stretch task, a small project, a client call or a report you have not handled, with a clear end date. Treat it as a four-week trial and note what you learned from it.',
      'Look at three postings for roles you might want in two years and underline the skills they ask for that you use here. If most of what you do is specific to this company\'s own tools, set aside two hours a week for a general version of the skill.',
      // life
      'Block one hour of rest, family or exercise in your calendar on three days this week and protect it. Then note what had to move to make it possible, and raise that with your manager if it repeats.',
      'Write your fixed monthly costs and your plan for the next year, such as savings, a loan or family support, and compare them with your take-home pay. If there is a gap, decide whether the answer is to cut costs, to ask for a review or to find extra income.',
      'Track your unplanned extra hours for two weeks with the reason for each. Show the pattern to your manager and ask for a specific change, such as time off in return or a cut-off time for requests.',
      'Do the route to your workplace at the usual time for a week and note the hours and cost. If it is wearing you down, ask about a hybrid or shift option, or plan a move closer, and decide what you can sustain for the next two years.',
      'Find your offer or appointment letter and write down the notice period, leave rules, working hours, probation terms and pay components. Ask HR about anything unclear, and keep copies of everything in your own folder.',
      // values
      'Write one sentence beginning "My work matters because...". If you cannot finish it honestly, write instead who benefits from what you do this month, even in a small way, and ask a customer or colleague what they value about it.',
      'Think of the last time the company dealt with a customer, an employee or a supplier. Write what it did and whether you were comfortable. If you were not, list what exactly bothered you, so you can judge whether it is a one-off or a pattern.',
      'Write down the specific tasks that leave you uneasy. For each, find out the official process or policy, and raise the doubt in writing with a senior or compliance contact. If it continues, keep dated notes and seek advice from someone you trust.',
      'Check what actually gets praised, promoted or paid in your team over the last six months. If it is volume, speed or loyalty and you value quality or learning, name this mismatch and decide whether it is something you can live with.',
      'Write a two-line answer to "What do you do?" that you would be proud to say. If you cannot, work out whether the problem is the work, the company or how you describe it, and test a new description for a week.',
    ],
    strongTip: 'This part of the job fits you well. Note it down as something to protect, and use it as a standard when you compare any other role.',
    domains: {
      work: {
        why: 'You spend most of your working life doing the tasks, so a mismatch here is felt every day. Often the feeling that a whole job is wrong is really about two or three tasks, a lack of clarity or a pace that has crept up. Naming them gives you something to change or to look for.',
        roles: [
          'Jobs with a long list of mixed duties, where it matters which tasks take most of your week',
          'Roles that have grown beyond the original description, such as a support job that has become management',
          'Choosing between roles with similar titles but different daily work, such as a field job and an office job',
        ],
        routine: [
          'Days 1 to 3: At the end of each day, write the task that gave you energy, the task that drained you and a one-line reason for each.',
          'Days 4 to 7: Sort every task you do into three lists: want more, can live with, want less. Mark the hours spent on each.',
          'Days 8 to 11: Pick one draining task and test a change: a template, a different time of day, a swap with a colleague or a clearer brief from your manager.',
          'Days 12 to 14: Show your manager the three lists and ask for one adjustment for the coming month. Write down their answer and a date to review it.',
        ],
        mistakes: [
          'Judging the whole job on the worst week instead of a pattern across several weeks',
          'Assuming nothing can change without asking for one specific change',
          'Choosing a new job by its title without asking what the daily tasks are',
        ],
        proof: [
          'A two-week energy and drain log with reasons',
          'The three-column task list with hours against each',
          'A note of the change you tried and what it did',
        ],
        askOthers: 'What does a normal week look like in this role, and which tasks take most of the time?',
        talkingPoints: [
          'You can say which tasks you want more of and which you want less of',
          'You tested a change before judging the job',
          'You can describe a good day of work in this role',
        ],
        midStep: 'Pick the one task that drains you most, and ask your manager for one change to it for a month. Note the result at the end.',
      },
      people: {
        why: 'The people you report to and work with shape how a job feels more than the job description does. A clear manager and one trusted colleague can make a hard job workable, while unclear expectations or fear of speaking up can make a good job miserable. Most of this can be tested with conversations.',
        roles: [
          'A new manager or a change in team, after which the same job suddenly feels different',
          'Workplaces with strong hierarchy, where speaking up is a skill you must learn to do carefully',
          'Choosing between offers, where the person you will report to matters as much as the role',
        ],
        routine: [
          'Days 1 to 3: Ask your manager what the two most important things are for you this month. Write them down and send them back to confirm.',
          'Days 4 to 7: Choose one trusted colleague, in or outside your team, and ask for ten minutes of advice on a real problem. Thank them afterwards.',
          'Days 8 to 11: Write one issue you have been holding back in three neutral sentences: what you saw, the effect and what you suggest. Raise it in a calm one-to-one.',
          'Days 12 to 14: Ask for feedback on one piece of work with the question, "What would make this better next time?" and note how the answer felt.',
        ],
        mistakes: [
          'Assuming your manager knows how you feel without ever saying it plainly',
          'Venting to peers instead of raising the issue with the person who can change it',
          'Treating one difficult person as proof that the whole culture is wrong, or the opposite',
        ],
        proof: [
          'A message from your manager confirming monthly priorities',
          'A named person you can ask for advice',
          'A note of an issue you raised and what happened',
        ],
        askOthers: 'What is it like to work with this manager and this team when things go wrong?',
        talkingPoints: [
          'You know what is expected of you and can say it clearly',
          'You raised an issue calmly and in a specific way',
          'You can describe what kind of manager and team help you do your best work',
        ],
        midStep: 'Ask your manager what a good next month looks like, write down the answer, and ask one question about the feedback you most need.',
      },
      growth: {
        why: 'A job that pays today but teaches nothing makes the next move harder. Growth does not only mean promotion. It also means new skills, new responsibilities and a clearer picture of where you could go. If you cannot see any of that, find out whether it is missing or only unspoken.',
        roles: [
          'Jobs that have settled into a routine, where learning has slowed',
          'Small organisations, where growth depends on the chance to take on extra tasks',
          'Early-career roles, where the first job sets the base of skills for the next one',
        ],
        routine: [
          'Days 1 to 3: Write what you have learned in the last three months and what you want to learn in the next three. Mark the gap.',
          'Days 4 to 7: Ask your manager or a senior how people move forward here and what the next role would need from you. Write down the two skills named.',
          'Days 8 to 11: Look at three postings for roles you might want in two years. Underline the skills you are not yet using and choose one to start building.',
          'Days 12 to 14: Propose one stretch task to your manager with an end date and a way to show the result. Start it, or note the answer you received.',
        ],
        mistakes: [
          'Waiting to be offered growth without asking for any',
          'Treating a promotion as the only kind of progress',
          'Building skills that only work inside one company\'s own tools',
        ],
        proof: [
          'A list of new things you can now do, with dates',
          'A stretch task you completed, with its result',
          'A note from your manager on what the next role needs',
        ],
        askOthers: 'What have people in this role done in two or three years, and what did they learn along the way?',
        talkingPoints: [
          'You can name what you have learned and what you want to learn next',
          'You asked for a stretch task and finished it',
          'You can show skills that would be valued elsewhere too',
        ],
        midStep: 'Ask for one stretch task with a four-week end date, and write down at the end what you learned from it.',
      },
      life: {
        why: 'A job also takes your hours, energy, travel and money, and it uses up the rest of your life around it. A job can be a fine match for you and still not fit your life right now. Seeing this separately stops you from blaming the work when the problem is the schedule or the terms.',
        roles: [
          'Shift, field or customer-facing jobs, where hours and travel are unpredictable',
          'Jobs with a long commute, or ones that need relocation, where the daily cost is large',
          'Phases of life with new responsibilities, such as caring for family, studying alongside work or repaying a loan',
        ],
        routine: [
          'Days 1 to 3: Track your working hours, travel time and unplanned extra work in a simple note, with the reason for each extra hour.',
          'Days 4 to 7: Write your monthly needs and your plan for the next year, and compare them honestly with what this job gives you.',
          'Days 8 to 11: Read your offer or appointment letter and note the notice period, leave, hours and pay terms. Ask HR about two points you do not understand.',
          'Days 12 to 14: Choose one change to ask for, such as a cut-off time, a day of working from home or a review of a pay component, and prepare a short, specific request.',
        ],
        mistakes: [
          'Putting up with unplanned extra hours and never showing the pattern to anyone',
          'Comparing only the pay figure and ignoring travel, hours and terms',
          'Not reading the written terms until a problem arrives',
        ],
        proof: [
          'A two-week log of hours, travel and extra work',
          'A one-page note of your monthly needs and plans',
          'A copy of your written terms, kept in your own folder',
        ],
        askOthers: 'What are the usual hours in this team, and how often do people need to work beyond them?',
        talkingPoints: [
          'You know what you need from a job in hours, location and pay',
          'You read and understood your written terms',
          'You raised a specific request instead of putting up with a problem',
        ],
        midStep: 'Log two weeks of real hours and travel, then bring one specific request to your manager based on what the log shows.',
      },
      values: {
        why: 'People can do a job well for a while that goes against what they care about, but it tends to wear them down. Values fit is about whether you can stand behind what you do and how the company behaves. It is the part most easily ignored on a busy day and most heavily felt over years.',
        roles: [
          'Sales, collections, customer service or compliance roles, where the pressure to bend rules can be real',
          'Family businesses and small firms, where the owner\'s habits shape the whole culture',
          'Choosing between offers where one pays more and the other feels more worth doing',
        ],
        routine: [
          'Days 1 to 3: Write your three most important values at work, such as honesty, helping people, craft, security or independence.',
          'Days 4 to 7: For each value, write one example from the last month where this job supported it, and one where it went against it.',
          'Days 8 to 11: For any task that leaves you uneasy, find the official process or policy and ask a senior or the policy owner a question in writing.',
          'Days 12 to 14: Mark each mismatch as can live with, can change or cannot accept, and write one action or one question for the second group.',
        ],
        mistakes: [
          'Telling yourself that unease will disappear if you ignore it',
          'Deciding that your values must be unrealistic because colleagues do not share them',
          'Judging a company by its stated values instead of by what it rewards and does',
        ],
        proof: [
          'A short written list of your values with examples',
          'A note of the mismatches and what you decided about each',
          'A written question you raised about a process, and the answer you received',
        ],
        askOthers: 'What kind of behaviour gets rewarded here, and what happens when someone raises a concern about how things are done?',
        talkingPoints: [
          'You can say what matters to you at work and give an example',
          'You raised a concern properly and in writing',
          'You know which mismatches you can accept and which you cannot',
        ],
        midStep: 'Write your three values, mark one example against each from the last month, and decide which mismatch to act on first.',
      },
    },
    thirtyDay: [
      'Week 1: Start the routine for your lowest area, and write your five-line job fit summary: the main problem, when it began, what works and what you want from your next step.',
      'Week 2: Finish the 14-day routine, and have one honest conversation, with your manager, a trusted colleague or the future manager if you hold an offer.',
      'Week 3: Run one small test of a change, such as a new task, a new request, a trial of a different schedule, or a call with someone doing the role you are considering.',
      'Week 4: Retake the self-assessment, compare each area score, and write down which areas you will fix, which you will test further and which you have decided to weigh as trade-offs.',
    ],
  },

  extras: [
    // In a job now and wondering
    x(['current'], 'work', 'Before judging the job itself, I have tried changing one part of how I do my tasks, my schedule or my set-up.', 'Pick one change this week, for instance a different order of tasks, a fixed focus hour or handing one task to a colleague. Keep it for three weeks and note whether the drained feeling changes.'),
    x(['current'], 'people', 'I have told my manager plainly what is bothering me and what would help, in words they could act on.', 'Write two sentences: what is not working and one thing that would help. Ask for 20 minutes and use them. If your manager is the problem, choose HR or a senior you trust and keep to facts.'),
    x(['current'], 'growth', 'I have asked what my options are for moving to another team or role inside this organisation.', 'Look at internal openings or ask HR or a senior how transfers work here. Speak to one person in the team you would like to join, so you know the real work before you ask your manager.'),
    x(['current'], 'values', 'I have a written list of what I want from a job that I could compare any other job against.', 'List five to seven things you want, such as learning, a respectful manager, location, a steady schedule or work you believe in. Mark the two that matter most, and score your current job against all of them.'),
    // Holding or expecting an offer
    x(['offer'], 'work', 'I have asked what a typical week in this role looks like and who did the work before me.', 'Ask the recruiter or hiring manager, "Can you walk me through a normal week, and what happened to the last person in this role?" Compare the answer with the job description and note any differences.'),
    x(['offer'], 'people', 'I have spoken to the person I would report to, not only to HR or the recruiter.', 'Ask for a 20-minute call with your future manager before you accept. Ask how they give feedback, what their team found hardest last quarter and how they would support you in the first three months.'),
    x(['offer'], 'people', 'I have spoken to at least one current or former team member about what the team is like.', 'Search the company and team on LinkedIn and message one person with a polite, short note asking for ten minutes. Ask what they would tell a friend about working there. Do not rely on anonymous reviews alone.'),
    x(['offer'], 'growth', 'I know how performance and pay are reviewed here, and when the first review would happen.', 'Ask HR or your future manager how performance is reviewed, how often, and what the first review is based on. Get the answer in writing so you are not left relying on a verbal promise.'),
    x(['offer'], 'life', 'I have the pay structure, joining date, notice period, working hours and probation terms in writing.', 'Ask for the offer letter and read every clause, including variable pay, bonus conditions, bond or notice rules and the probation clause. Ask about anything unclear before you accept, and keep your own copy.'),
    x(['offer'], 'values', 'I am accepting mainly because I fear this offer may not come again.', 'Write down what exactly you fear and what you would still want to know if that fear were removed. Ask for a few extra days if you need them, and decide based on fit and facts rather than relief.', true),
    // First six months in a new job
    x(['newjob'], 'work', 'The tasks I do in my first weeks match what was described to me when I joined.', 'Keep a weekly note of what you actually did against the interview description, with two or three specific examples. Raise differences as questions with your manager, not as complaints, around the third or fourth week.'),
    x(['newjob'], 'people', 'I have asked my manager what a good result looks like by the end of my first three months.', 'Book 20 minutes and ask, "What would make you say I have settled in well?" Send an email afterwards listing the two or three points so both of you are working from the same expectations.'),
    x(['newjob'], 'people', 'I have found one person to ask the small questions I feel shy about asking.', 'Choose a colleague who joined a year or so before you and ask them for a coffee. Ask how things really work, who to go to for what and what they wish they had known, and make it a regular short check-in.'),
    x(['newjob'], 'growth', 'I know what is checked before my probation or confirmation, and when.', 'Reread your appointment letter for the probation clause, and ask HR or your manager what is reviewed and when the decision is made. Terms differ from one company to another, so do not rely on what a friend\'s company does.'),
    x(['newjob'], 'life', 'I judge this job by a few ordinary weeks and not only by the tiredness of the first days.', 'Wait for at least four ordinary weeks before judging the pace or hours. Keep a short note of energy, hours and travel each week, so you can tell the difference between settling in and a lasting mismatch.'),
    x(['newjob'], 'values', 'I already feel doubts about how this company works, but I tell myself to ignore them.', 'Write down the specific incidents behind the doubt, with dates. Ask a trusted colleague outside your team whether it is usual here, and decide whether it is a one-off or a pattern before the end of your probation.', true),
    // Job seeker comparing roles
    x(['seeking'], 'work', 'I compare roles by what the daily tasks are, not by the job title or brand.', 'For each role, ask the recruiter for a typical day and for the tasks that fill most of the week. Write them in the same format for every role so you can see the differences in plain words.'),
    x(['seeking'], 'people', 'I try to speak to someone who does each kind of work before I decide.', 'Message one person in each type of role through college contacts, LinkedIn or family. Ask three questions: what a normal week is like, what they find hardest and what they would do differently if they chose again.'),
    x(['seeking'], 'growth', 'I judge each role by what I would learn in the first year.', 'For each role, write the three skills you would build in a year and whether other employers would value them. A role that teaches transferable skills usually keeps more doors open, even if it starts slower.'),
    x(['seeking'], 'life', 'I compare roles on the same points, including commute, shifts, notice terms and benefits, in one sheet.', 'Make a table with the same rows for every role: pay structure, hours, travel, shifts, notice, probation, leave and benefits. Fill it from the offer or the recruiter, and mark blanks to ask about.'),
    x(['seeking'], 'life', 'I choose between roles mostly on the basis of pay alone.', 'Pay matters, but it is one of five points. Score the roles on the other four before you decide, and ask yourself whether a small difference in pay is worth a large difference in learning, hours or manager.', true),
    x(['seeking'], 'values', 'I know the two or three things I would not compromise on in a job.', 'Write them as plain sentences, such as "I will not take a job that needs a two-hour commute each way". Use them as filters before comparing roles, so you do not talk yourself out of them later.'),
  ],

  stageAdvice: {
    current: {
      work: sa('In a job you already know, a dislike of the work can hide behind one or two tasks or a recent change in how the work is done.', 'Keep a two-week log of draining and energising tasks, and identify the two tasks that cause most of the drain.', 'Ask for one change to those tasks for a month, and note the result before you reach any conclusion about the job.'),
      people: sa('In a job you have been in for a while, a change of manager or team can quietly change how the whole job feels.', 'Identify the date when things felt different and write what changed in the team, the manager or your role.', 'Raise one specific issue with your manager or a trusted senior in a one-to-one, and see how it is handled.'),
      growth: sa('In a job you know well, learning often slows down without anyone noticing, and your next step is rarely offered unprompted.', 'Ask your manager how people move forward here, and list the two skills or results named.', 'Check internal openings or a lateral move to another team, and speak to a person there before deciding it is not possible.'),
      life: sa('In a job you have held for some time, hours and extra work tend to creep up, and your needs outside work may have changed.', 'Track hours, travel and unplanned extra work for two weeks, then compare them with what you need from your week.', 'Calculate how many months of expenses you could cover without pay and check your notice period and dues before any decision.'),
      values: sa('In a job you have held for some time, unease about the company or its work can build up slowly.', 'Write the three values that matter most to you at work and one example from the last month for each.', 'Decide which mismatches you can live with, which you can change and which you cannot accept, and act on the middle group first.'),
    },
    offer: {
      work: sa('With an offer in hand, you have seen the job as it is described, not as it is done day to day.', 'Ask for a walk-through of a normal week and what the last person in the role did, and compare it with the job description.', 'Ask which tasks take most time, which tools you will use and who will train you in the first month.'),
      people: sa('With an offer in hand, you may have met HR and one interviewer, but not the person you will work for each day.', 'Request a short call with the future manager and ask how they give feedback and what they expect in the first three months.', 'Speak to one current or former team member and ask what they would tell a friend before joining.'),
      growth: sa('With an offer in hand, promises about growth are easy to make and hard to check later.', 'Ask how performance is reviewed, how often, and what the typical next role is, and get the answer in writing.', 'Ask what training or support you would receive in the first three months, and who is responsible for it.'),
      life: sa('With an offer in hand, the pay figure gets most of the attention while the terms in the letter get least.', 'Read every clause for pay structure, variable pay, probation, notice period, bond and working hours before replying.', 'Ask about shift patterns, travel or relocation, and the expected hours in a normal month, and note down the replies.'),
      values: sa('With an offer in hand, relief at being chosen can hide whether the work and company suit what you care about.', 'Score the offer against your written list of what you want from a job, and mark any item that is missing.', 'Check how the company treats customers and staff through its public record and from someone who has worked there.'),
    },
    newjob: {
      work: sa('In your first six months, the real tasks may differ from the interview description, and everything feels slow because it is new.', 'Compare your weekly tasks against the description in writing, with two or three examples, for the first six weeks.', 'Raise the differences as questions with your manager and ask which tasks will grow or shrink in the coming months.'),
      people: sa('In your first six months, you are still learning who to ask and how decisions are made.', 'Ask your manager what a good first three months looks like and confirm the points in an email.', 'Build a small circle of two or three colleagues you can ask questions, including one outside your team.'),
      growth: sa('In your first six months, learning is steep, but the structure for growth and confirmation may not yet be clear.', 'Reread your letter for the probation clause and ask HR or your manager what is reviewed before confirmation.', 'Agree one learning goal with your manager for the first three months and ask when you will review it together.'),
      life: sa('In your first six months, tiredness from settling in can look like a lasting problem with the hours or the commute.', 'Track hours, travel and energy for four ordinary weeks before judging whether the pace is a mismatch.', 'Check your pay slips, leave balance and benefits against the offer letter and raise any difference early.'),
      values: sa('In your first six months, you are seeing the real culture for the first time and it may differ from the pitch.', 'Write down incidents that bothered you, with dates, and note whether they repeat or were one-offs.', 'Ask a colleague you trust outside your team whether what you saw is typical, before forming a view of the company.'),
    },
    seeking: {
      work: sa('As a job seeker, titles and descriptions look alike, and the tasks that fill your week are the thing you cannot see.', 'Ask each recruiter for a typical day and the share of time on each kind of task, and write the answers in one format.', 'Speak to one person doing each role and ask what they spend most of their time on.'),
      people: sa('As a job seeker, you meet people briefly and in their best mode, so culture is hard to read.', 'Ask each interviewer how they handle disagreements and what the last team member who left would say.', 'Look for one current or former employee at each company and ask for ten minutes.'),
      growth: sa('As a job seeker, you can choose a role by what it teaches, which matters more early in a career than a small difference in pay.', 'For each role, write the three skills you would build in a year and whether other employers would value them.', 'Ask each employer how people in the role have moved on in the last few years.'),
      life: sa('As a job seeker, you can compare terms before you are committed, which is much harder once you have joined.', 'Make one sheet with pay structure, hours, shifts, travel, notice, probation, leave and benefits for each role.', 'Mark every blank and ask about it in writing before you decide.'),
      values: sa('As a job seeker, you can set your limits before the first day, and that is the easiest time to do it.', 'Write your two or three non-negotiables and remove any role that fails them before comparing the rest.', 'Check how each company is described by its staff and customers and not only in its own material.'),
    },
  },

  scenarios: [
    sc('work', 'After a hard week, you start thinking that this job is simply not for you. What do you do first?', [
      o('Begin applying to other companies right away, in case the feeling is right', 17, 'A hard week is not yet evidence. Applying may be right later, but if you have not named the problem you may carry it into the next job. First find out what exactly is wrong.'),
      o('Note for two weeks which tasks gave energy and which drained you, with a line of reason for each', 100, 'Strong. A short log turns a heavy feeling into specific tasks. You can then change them, test a fix or take that knowledge into a comparison.'),
      o('Wait for the feeling to pass and say nothing to anyone', 50, 'Some doubts do pass, but if the same feeling returns, waiting teaches you nothing. Add a short log so you can tell a bad week from a pattern.'),
      o('Talk to friends about how bad the job is and what you are putting up with', 33, 'Venting can relieve stress, but it rarely changes anything. Use one conversation to ask what they would do, then write down the specific tasks that bother you.'),
    ]),
    sc('work', 'You are being given more and more tasks that are far from what you were hired to do. What do you do?', [
      o('Refuse these tasks, as they are not in your role', 0, 'Refusing outright rarely works and can damage trust. Show your manager the pattern and ask how the role is meant to look.'),
      o('Do them quietly because everyone is busy and someone has to', 33, 'Helping is fine, but silence turns a favour into the new normal. Keep a log of hours and discuss the split with your manager.'),
      o('Keep a one-month list of what you did and how many hours, then show the split to your manager and ask what the role should be', 100, 'Strong. A list makes the conversation about facts and not feelings, and it lets your manager decide what to keep, move or stop.'),
      o('Ask a senior colleague whether this is normal and follow their advice', 67, 'A useful first step, since it shows you what is usual. Add your own log and take it to your manager so the change can be agreed openly.'),
    ]),
    sc('people', 'Your manager gives feedback that feels unfair, in front of others. What do you do?', [
      o('Ask for one example and suggest talking for a few minutes later in the day', 100, 'Strong. You show you take the feedback seriously without defending yourself in public, and you get the details you need to judge whether it is fair.'),
      o('Agree with everything so that the conversation ends quickly', 33, 'This avoids a scene, but it also leaves a point you disagree with on the record. Follow up in private and ask for an example.'),
      o('Explain strongly why you disagree, right there', 50, 'Standing up for yourself matters, but a public argument rarely helps. Say that you want to understand and move the discussion to a private slot.'),
      o('Stay silent and keep thinking about it for days', 17, 'Silence leaves you with only your own version. Write the points down, and ask your manager for a short chat to hear the specifics.'),
    ]),
    sc('people', 'A teammate keeps presenting your work as their own. How do you respond?', [
      o('Say nothing, as the work will be noticed eventually', 33, 'Work does not always get noticed. Share your progress in writing with your manager from time to time so your contribution is on record.'),
      o('Talk to the teammate privately about the facts, and keep your manager updated on your own work in writing', 100, 'Strong. A private, factual talk gives them a chance to change, and written updates protect your credit without making this a fight.'),
      o('Correct them in front of the team when it next happens', 0, 'A public correction creates conflict and can hurt your standing too. Raise it privately and use written updates.'),
      o('Talk privately to the teammate and leave it there', 67, 'A good first step, but if it continues you will have nothing to show. Add regular written updates to your manager.'),
    ]),
    sc('growth', 'You realise you have learned nothing new at work for months. What do you do?', [
      o('Take an online course in something unrelated to your work', 50, 'Learning anything helps, but if it is unrelated it may not change how you feel at work. Pick a skill linked to a role you want in two years.'),
      o('Wait for your yearly appraisal to raise it', 33, 'Waiting for the appraisal can mean many more months of the same. Raise it earlier with a specific proposal.'),
      o('Decide the job is a dead end and begin sending applications', 17, 'This may turn out to be right, but you will not know what to look for. First ask whether the learning is missing here or just not offered.'),
      o('Ask your manager for a new type of task or small project with a month to review, and say which skill it would build', 100, 'Strong. A specific request with a review date is easy to say yes to, and the answer tells you whether growth is available here.'),
    ]),
    sc('growth', 'An internal opening in another team is announced, and your manager has not mentioned it to you. What do you do?', [
      o('Apply quietly without telling anyone', 33, 'Applying is fine, but surprising your manager can hurt trust. Check the internal process and tell your manager at the right moment.'),
      o('Ignore it, since internal moves can be awkward', 0, 'Ignoring it means you learn nothing about the option. At least find out what the role involves and who is in that team.'),
      o('Ask colleagues what they think and see who else is applying', 50, 'Opinions can be useful, but they are not a plan. Speak to someone in the new team and then decide.'),
      o('Read the role carefully, speak to someone in that team, and then tell your manager that you are interested', 100, 'Strong. You collect facts first and then have an open conversation. Many managers respect that more than a surprise.'),
    ]),
    sc('life', 'You are regularly working late, and your energy is dropping. What do you do?', [
      o('Track your hours and the reasons for two weeks, then raise the pattern with your manager with two specific requests', 100, 'Strong. Facts about hours and reasons let your manager see the problem and consider changes, and your requests give them something to say yes to.'),
      o('Accept it as the price of the job and keep going', 17, 'Some phases are heavy, but with no end in sight tiredness builds. At least keep a log so you know how heavy it is.'),
      o('Work faster during the day so you can leave on time', 33, 'Efficiency helps, but if the volume is the problem, speed alone will not fix it. Show the volume to your manager.'),
      o('Leave on time and say nothing about it', 50, 'This may protect your evenings, but without a conversation it can create friction. Tell your manager what you are doing and why, and propose how urgent work will be handled.'),
    ]),
    sc('life', 'You feel your pay is low compared with others in similar work. What do you do?', [
      o('Complain to colleagues based on what you have heard about others\' pay', 0, 'Hearsay is often wrong and complaining may cause trouble. Collect information about the role instead.'),
      o('Ask for a raise right away because you feel you deserve it', 50, 'Asking is right, but a request based on feeling is easy to refuse. Prepare your reasons first.'),
      o('Collect pay information for similar roles from job postings and people in the field, list your results and ask for a review at a suitable time', 100, 'Strong. A request with evidence and good timing is easier for your manager to take to the decision-makers.'),
      o('Wait, as your manager will notice and reward you in time', 33, 'Some managers do, but many do not. Make your results visible and bring the topic up yourself.'),
    ]),
    sc('values', 'You are asked to do something that feels slightly dishonest, such as backdating a form or giving a customer a misleading answer. What do you do?', [
      o('Do it, because everyone does it here', 0, 'Common practice does not make it right, and you could carry the risk. Ask for the official process before doing anything.'),
      o('Do it this time and think about it later', 17, 'Once done, it is hard to undo, and a second request is likely. Pause before acting and check the right process.'),
      o('Politely refuse and say nothing more', 67, 'A refusal protects you, but your manager may not know why. Explain your concern briefly and ask for the correct way to proceed.'),
      o('Say you are uneasy, ask for the correct process, put the question in writing and involve a senior or the policy owner', 100, 'Strong. You raise the concern properly, leave a record and give the company a chance to correct course. Keep notes if it continues.'),
    ]),
    sc('values', 'You wonder whether your job suits what you care about, but you are not sure what that is. What do you do?', [
      o('Ask colleagues whether they feel the same way', 50, 'Others\' views can help, but they care about different things. Start with your own list first.'),
      o('Decide that your values are unrealistic and stop thinking about it', 0, 'Dismissing the doubt does not make it go away, and values are not unrealistic just because colleagues differ. Write them down.'),
      o('Write your top three values and for each one an example from the last month where work supported or went against it', 100, 'Strong. Concrete examples make it clear where the job fits you and where it does not, so you can decide what to change or accept.'),
      o('Ignore the doubt until it becomes impossible to ignore', 33, 'Ignoring it lets the feeling build quietly. A short list of values takes only 20 minutes and gives you something to work with.'),
    ]),
    // Stage-specific
    {
      ...sc('life', 'You are seriously thinking about resigning without another job lined up. What is the most sensible next step?', [
        o('Resign this week so that you can start fresh', 0, 'A quick exit can feel like relief, but without a plan it can bring money stress and rushed choices. Name the problem and test a fix first.'),
        o('Start applying widely, hoping that any new job will solve the problem', 50, 'Looking is reasonable, but if you have not named what is wrong, you may repeat it. Write the main problem first and apply with that in mind.'),
        o('Wait and hope that things improve without doing anything', 33, 'Things sometimes improve, but waiting with no test leaves you in the same place. Set a short window and try one change.'),
        o('Spend a few weeks testing: name the exact problem, try one change, work out your months of expenses and notice terms, and then decide', 100, 'Strong. You collect evidence and protect your choices. Whatever you decide later, it will rest on facts and not on a bad week.'),
      ]),
      stages: ['current'],
    },
    {
      ...sc('people', 'You get an offer that must be answered in two days, and you still have unanswered questions about the role and your manager. What do you do?', [
        o('Accept now, to be safe, and find out the rest after joining', 0, 'Accepting with open questions leaves you with the risk. Ask the questions now, while you still have the choice.'),
        o('Ask in writing for a call with your future manager and a few more days, and say when you will reply', 100, 'Strong. A polite request for time and a conversation is normal, and the replies, or the way you are treated when you ask, tell you a lot.'),
        o('Decline, since the pressure suggests the company is not a good one', 33, 'A tight deadline can be a warning, but it can also be routine. Ask for more time first and see how the request is received.'),
        o('Accept verbally and ask the questions in your first week', 17, 'By the first week, you have already committed. Ask before you accept, in writing, while you can still say no.'),
      ]),
      stages: ['offer'],
    },
    {
      ...sc('work', 'In your second month, your tasks differ from how the job was described at the interview. What do you do?', [
        o('Put up with it silently until the probation ends', 33, 'Waiting silently means you spend the whole probation unsure of what is wanted. Raise it in a calm, specific way.'),
        o('Complain to HR that you were misled', 50, 'It may be fair to raise, but starting with a complaint can close doors. Start with a conversation with your manager and keep notes.'),
        o('Start looking for another job quietly', 17, 'You may end up there, but it is early to decide without any conversation. First gather evidence and ask your manager.'),
        o('Note the differences for two or three weeks with examples, raise them as questions with your manager, and ask what is expected by the end of probation', 100, 'Strong. You keep to facts, give your manager a chance to explain or change, and learn what is really expected of you.'),
      ]),
      stages: ['newjob'],
    },
    {
      ...sc('growth', 'You have two offers. One pays a bit more, and the other has a better manager and more to learn. How do you compare them?', [
        o('Take the higher pay, since money is the clearest difference', 33, 'Pay matters, but a small difference may cost you learning and a good manager. Compare all five points before you decide.'),
        o('Score both on the same five points, check details with a person in each role, and weigh the non-negotiables you set in advance', 100, 'Strong. The same points for both roles and a check with real people turn an impression into a decision you can explain.'),
        o('Ask three friends and go with the majority view', 50, 'Friends can add useful views, but they do not know your needs. Use their opinions as input to your own scoring.'),
        o('Choose the better-known company, because it will look better on your CV', 17, 'A known name can help, but what you learn and who you learn from affect the rest of your career more. Compare what you would do in each role.'),
      ]),
      stages: ['seeking'],
    },
  ],

  phrases: {
    work: [
      '"I enjoy the parts of my work where I ..., and I find it harder when ..."',
      '"Could you walk me through what a normal week looks like in this role?"',
      '"Over the last month, about ... hours of my week went on ..., and I would like to talk about the balance."',
    ],
    people: [
      '"Can I check what a good next month would look like for you in my role?"',
      '"I want to raise something early so that we can fix it: I noticed ..., and my suggestion is ..."',
      '"Could you give me one example of what good looks like for this piece of work?"',
    ],
    growth: [
      '"Over the last three months, I have learned ..., and I would like to build ... next."',
      '"What would the next role need from me, and what can I start doing now?"',
      '"I would like to take on ... for four weeks, with a review at the end, if the team can spare it."',
    ],
    life: [
      '"Over the last two weeks, I worked about ... extra hours, and I would like to agree how urgent requests are handled."',
      '"Before I accept, could you confirm the notice period, probation terms and working hours in writing?"',
      '"I need to understand the pay structure, including what is fixed and what is variable."',
    ],
    values: [
      '"I am not comfortable with ..., so could you tell me the correct process for this?"',
      '"What matters to me in my work is ..., and this role fits that because ..."',
      '"Could you tell me how the company handles it when someone raises a concern?"',
    ],
  },

  stagePlan: {
    current: [
      'Write one sentence naming the main problem, when it began and what changed around that time.',
      'Run one small test for three to four weeks: a different task, a talk with your manager or an internal move enquiry, and keep dated notes.',
      'Work out your months of expenses, notice period and dues so that your options are real and not forced by money.',
      'Retake this test after the test period and decide, on your notes, what to fix, what to keep testing and what to weigh as a trade-off.',
    ],
    offer: [
      'Request a call with your future manager and one team member, and ask what a normal week looks like and what happened to the last person in the role.',
      'Get the offer in writing and read pay structure, probation, notice, working hours and any bond or variable pay clause, then ask about anything unclear.',
      'Score the offer on the five areas against your written list of what you want, and mark the gaps you still need to verify.',
      'Reply by the agreed date with your decision or a polite request for a short extension, and keep a copy of all written confirmations.',
    ],
    newjob: [
      'Ask your manager what a good result looks like at the end of probation or three months, and confirm the points by email.',
      'Keep a weekly note on tasks, hours and energy against what you were told at the interview, with specific examples.',
      'Build two or three working contacts, including one outside your team, and ask them what new joiners usually find hard.',
      'At the end of the sixth week and again at three months, retake this test and raise only the points that appear in your notes more than once.',
    ],
    seeking: [
      'Write your two or three non-negotiables and five to seven things you want, before looking at any specific role.',
      'Build one comparison grid with the five areas and fill it for each role from real information, not impressions.',
      'Speak to one person doing each kind of role and ask what the daily work is like and what they wish they had known.',
      'Score each role, check the highest-scoring one for blanks by asking in writing, and decide by the points that matter most to you.',
    ],
  },

  talk: {
    work: {
      q: 'What does a normal week look like in this role, and which tasks take up most of the time?',
      a: 'Use the answer to compare with the job description or your own task log. Note the three main tasks and their share of time, and decide whether you would be glad to spend most of your week on them.',
      line: 'Normal week in [role]: about [share] on [task one], [share] on [task two], and the rest on [task three]. I would enjoy / find hard: [note].',
    },
    people: {
      q: 'How do you like to give feedback, and what has helped new people settle in well on this team?',
      a: 'Listen for concrete practices, such as a weekly one-to-one, written feedback or an open door, and not only general words. If the answer is vague, ask for an example from the last quarter.',
      line: '[Manager or colleague] gives feedback by [method] every [period]. Priorities for the month: [list]. Person I can ask for help: [name].',
    },
    growth: {
      q: 'What have people in this role gone on to do in the last few years, and what did they learn on the way?',
      a: 'Compare the answer with where you want to be in two years. If nobody has moved on or the manager cannot name any examples, note it as a point to weigh, and ask what has been done to support learning.',
      line: 'Growth path in [role]: [next role] needs [skills]. I will build [skill] by [date] through [task or training].',
    },
    life: {
      q: 'What are the usual hours in this team, how often do people work beyond them, and what happens in those cases?',
      a: 'Compare the answer with your own hours log or your needs outside work. Note any gap between what is said and what current team members describe, and ask for the key terms in writing.',
      line: 'Terms checked on [date]: hours [hours], notice [period], probation [period], pay split [fixed and variable], leave [days]. Still to confirm: [item].',
    },
    values: {
      q: 'What kind of behaviour is rewarded here, and what happens when someone raises a concern about how something is done?',
      a: 'Listen for real examples rather than slogans. A calm account of a concern handled well is a good sign, and a vague or defensive answer is something to weigh against your own list of values.',
      line: 'My values at work: [value one], [value two], [value three]. Fit so far: [example]. Mismatch to watch: [item], decided as [live with, change or cannot accept].',
    },
  },

  talkTitles: {
    strong: 'Questions that help you keep and protect this strength',
    weak: 'Questions to ask about your weakest area',
    intro: 'Guessing about fit leads to poor decisions. Ask one question in each area of someone who knows the job, and keep a short note of what you hear.',
    mode: 'ask',
  },
};
