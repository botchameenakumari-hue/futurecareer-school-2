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
      { d: 'work', text: 'I can name at least two tasks in this job that give me energy.' },
      { d: 'work', text: 'Most days, I get to use skills that I am good at.' },
      { d: 'work', text: 'A large part of my week goes on work that has little to do with why I took this job.', reverse: true },
      { d: 'work', text: 'At the end of most days, I cannot tell whether the work I did was good or not.', reverse: true },
      { d: 'work', text: 'The pace of this job feels manageable in most weeks, even if a few weeks are hard.' },
      { d: 'people', text: 'I can say what my manager expects from me over the next month.' },
      { d: 'people', text: 'I can raise a problem here without worrying that it will be held against me.' },
      { d: 'people', text: 'I feel I have to hide parts of who I am in order to fit in with the team.', reverse: true },
      { d: 'people', text: 'There is at least one person here I can ask for help or advice without feeling judged.' },
      { d: 'people', text: 'The feedback I get is mostly general, such as "do better", and I do not know what to change.', reverse: true },
      { d: 'growth', text: 'In the last three months, I have learned something in this job that I can use again.' },
      { d: 'growth', text: 'I can name a next role I could move towards here and what it would take.' },
      { d: 'growth', text: 'My work has stayed the same for a long time, and nobody has talked about changing it.', reverse: true },
      { d: 'growth', text: 'I get chances to take on new tasks.' },
      { d: 'growth', text: 'The skills I build in this job would be useful at other employers too.' },
      { d: 'life', text: 'My working hours leave me enough time for sleep, family and rest.' },
      { d: 'life', text: 'My pay covers my monthly needs without regular worry.' },
      { d: 'life', text: 'I often work extra hours that nobody agreed with me in advance.', reverse: true },
      { d: 'life', text: 'I could keep up the daily schedule of this job for the next couple of years.' },
      { d: 'life', text: 'I do not have my notice period, leave and pay terms clearly in writing.', reverse: true },
      { d: 'values', text: 'I can explain in one sentence why my work matters to someone, in words I believe.' },
      { d: 'values', text: 'I am comfortable with how this organisation treats the people it deals with.' },
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
      'Points about offer letters, contracts, notice periods and probation are general things to check, not legal advice. If there is a dispute or a serious doubt about your terms, speak to a qualified professional.',
      'This is not a medical or mental-health assessment. If work is leaving you unable to cope, or you have thoughts of harming yourself, please speak to a doctor, a counsellor or someone you trust. Tele-MANAS (14416) is a free national helpline.',
    ],
    faqs: [
      {
        q: 'Is this job fit test free?',
        a: 'Yes. You can take it without paying and without signing up, see your result on screen and download the report as a PDF.',
      },
      {
        q: 'Is this job right for me, or should I quit? Can this test tell me?',
        a: 'No, it cannot decide for you and it does not try to. It rates five parts of fit from your own answers, so you can see which parts work, which need fixing and which are trade-offs, and it suggests small tests to run for a few weeks before any big step. Often one or two parts are behind the feeling that the whole job is wrong, and money, notice terms and your next step matter as much as how the job feels.',
      },
      {
        q: 'What are the signs that a job is not a good fit?',
        a: 'Common signs are dreading most of your tasks, not knowing what is expected of you, feeling unable to speak up, learning nothing for months, hours that leave no rest, and unease about what you are asked to do. One bad week is not a sign, a pattern over several weeks is. This test groups these signs into five areas so you can see which one is behind the feeling.',
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
        q: 'Is it normal to doubt a new job? Can freshers take this test?',
        a: 'Yes, doubt in the first few months is common because everything is new, so give it a few ordinary weeks of evidence before treating it as a verdict. Freshers can take it too: there are stages for the first six months in a new job and for job seekers comparing roles. If you have not yet worked, answer about the role you are considering, or about an internship or project, and use the advice for comparing roles.',
      },
      {
        q: 'Is this job satisfaction self-assessment a mental-health test?',
        a: 'No. It looks at how well a job fits you, not at your health, and it cannot say whether you are stressed or unwell. If work is making daily life hard to manage, a doctor, a counsellor or someone you trust is the right person to talk to.',
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
    stageNote: 'Choose the situation closest to yours. A doubt in an old job, an offer in your hand, a new job and a comparison of roles need different checks, so your report adjusts the advice to match.',
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
        body: 'An interview shows you the best side of a job. Before accepting, check the daily tasks, the person you will report to, how performance and pay are reviewed, and the written terms. Disappointment in the first months often traces back to things nobody asked about before joining.',
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
      'If most days end without a sense of how they went, ask your manager at the start of the week what a good week looks like, and write two outcomes down. On Friday, check them off and note one you missed, so you can ask about it.',
      'Mark your three most pressured days in the last month and note what caused the pressure: deadlines, unclear tasks or interruptions. Raise the most repeated cause with your manager and propose one change, such as an earlier brief or a protected hour.',
      // people
      'Put this question to your manager: "What are the two most important things for me to deliver this month?" Write the answer down and send it back by message to confirm. Repeat it at the start of each month.',
      'Choose one low-risk issue, such as a timeline or an unclear task, and raise it with your manager in a calm, specific way: what you saw, what you suggest. Notice how it is received before deciding how safe it is to raise bigger issues.',
      'Write down the two things you hide or change most at work, and ask whether each is normal professional behaviour or a sign that you are not accepted. Find one colleague you can be honest with, and test whether the pressure to hide eases.',
      'Pick one person you respect, in or outside your team, and ask for ten minutes of advice on a real problem this week. Then thank them and tell them what you did with it. A small, repeated habit builds a trusted contact.',
      'When feedback is general, reply with, "Can you show me one example of what good looks like?" Write the example down and use it on your next piece of work. Specific feedback is often not offered unless you ask for it.',
      // growth
      'Write down three things you can do now that you could not do three months ago. If you cannot, choose one skill to build in the next month and ask your manager for a task that needs it.',
      'Put this to your manager: "What would the next role need from me, and what could I start doing now?" Write down the two skills or results named, and plan one action for each within the next month.',
      'List the tasks you did a year ago and the tasks you do now, and mark what changed. If nothing has, bring a proposal to your manager: one new responsibility, how you would try it for a month and how you will show the result.',
      'Request one stretch task from your manager or a senior, such as a small project, a client call or a report you have not handled, with a clear end date. Treat it as a four-week trial and note what you learned from it.',
      'Look at three postings for roles you might want in two years and underline the skills they ask for that you use here. If most of what you do depends on this company\'s own software or forms, spend two hours a week learning the general version of that skill.',
      // life
      'Fix one hour of rest, family time or exercise on three days this week and treat it as a meeting you cannot skip. Then note what had to move to make it possible, and raise that with your manager if it repeats.',
      'Write your fixed monthly costs, such as rent, EMIs, family support and food, and compare them with your take-home pay. If there is a gap, decide whether the answer is to cut costs, to ask for a review or to find extra income.',
      'Track your unplanned extra hours for two weeks with the reason for each. Show the pattern to your manager and ask for a specific change, such as time off in return or a cut-off time for requests.',
      'For one week, note your start time, finish time, journey time and hours of sleep each day. If the pattern wears you down, ask whether a different shift or the odd day from home is possible, or whether a move closer is realistic, and decide what you can keep up for two years.',
      'Find your offer or appointment letter and write down the notice period, leave rules, working hours, probation terms and pay components. Ask HR, or the owner in a small firm, about anything unclear, and keep copies in your own folder.',
      // values
      'Write one sentence beginning "My work matters because...". If you cannot finish it honestly, write instead who benefits from what you do this month, even in a small way, and ask a customer or colleague what they value about it.',
      'Think of the last time the company dealt with a customer, an employee or a supplier. Write what it did and whether you were comfortable. If you were not, list what exactly bothered you, so you can judge whether it is a one-off or a pattern.',
      'Write down the specific tasks that leave you uneasy. For each, find out the official process or policy, and raise the doubt in writing with a senior or compliance contact. If it continues, keep dated notes and talk to someone you trust; if rules or laws may be involved, a qualified adviser can say more than this tool can.',
      'Check what actually gets praised, promoted or paid in your team over the last six months. If it is volume, speed or loyalty and you value quality or learning, name this mismatch and decide whether it is something you can live with.',
      'Write a two-line answer to "What do you do?" that you would be proud to say. If you cannot, work out whether the problem is the work, the company or how you describe it, and test a new description for a week.',
    ],
    tipsUp: [
      'Fix a 10-minute slot every Friday to log your energising tasks, and each month count how many hours went to them. If the count falls, tell your manager before the pattern sets.',
      'Each Monday, plan the day this week when your strongest skill gets a protected two-hour block. On Friday, tick whether it happened and keep one example of the work it produced.',
      'The moment a task outside your role lands on you, add it to your log with its hours. Each month, show the running total to your manager and ask for one task to be moved or dropped.',
      'On Wednesday and Friday, stop ten minutes early and write one line: what I finished and how I know it was good. When you cannot write it, ask a colleague to look at that work.',
      'Pick a fixed time each week, such as Sunday evening, to list the next week\'s deadlines. When three or more pile up on one day, ask your manager to re-order them before that day arrives.',
      'After each monthly priorities chat, check progress on those two points every Friday for four weeks. If one is slipping, tell your manager that week, not at the end of the month.',
      'When you notice yourself holding back a doubt, write it down the same day and raise it within three days. Then note whether the reply was fair, and keep that note as evidence of how safe it is.',
      'Each time you catch yourself changing how you speak or act to fit in, note the situation. Once a month, drop one such habit in front of a trusted colleague and see if anything actually changes.',
      'Make it a standing habit: one short advice chat with the same trusted person every two weeks, with a real problem in hand. Offer help in return at least once a month.',
      'After feedback, write what you will change in one line and show it in your next piece of work. A fortnight later, ask the same person, "Is this closer to what you wanted?"',
      'Every month, add one line to a running list: a thing I can do now that I could not before. At the three-month mark, show the list to your manager and ask which item to deepen next.',
      'Turn the two skills your manager named into a simple tracker with a date each. Check it every two weeks, and ask your manager for one piece of feedback on the first skill within a month.',
      'When a task starts to feel repetitive, ask for a change in it within a week: a new format, a new client or a part that you have not handled. Note what you learned from each change.',
      'After a stretch task, hold a 15-minute review with the person who gave it: what went well, what to fix. Write the result in a line so it can go into your CV or appraisal.',
      'Once a month, check one new posting for your target role and tick which of your current skills match. Pick one general skill and practise it for an hour a week, keeping what you make.',
      'Block the same rest or family hour on the same three days every week, and tell your manager the hours in advance. Count each month how many of the twelve slots you kept.',
      'Divide your take-home pay on the day it arrives: fixed costs first, then savings, then the rest. Review the gap every month and, after three months, bring the figures to a pay discussion.',
      'When an extra request arrives, ask on the spot: "By when, and who agreed this?" Add every unplanned hour to the log, and ask for time off in return at the end of each month.',
      'Choose the one commute or shift habit that costs most, such as leaving at the busiest hour, and change it for two weeks. Compare your sleep and energy notes before and after.',
      'Keep a folder with your offer letter, pay slips and any change email. Set a reminder to check it against your latest pay slip every three months and raise any difference with HR in writing.',
      'Every Friday, write one line about who benefited from your work that week. When you have four lines, read them aloud to a colleague and check they sound believable to you.',
      'Each month, note one event that showed how the company treats its people, good or bad. After three months, look for what repeats and decide whether it changes how you feel about the job.',
      'When a task makes you uneasy, pause for a day before doing it, and ask the policy owner one question in writing. Keep dated notes of the request, your question and the reply.',
      'Each quarter, list the last three people who were praised or promoted and why. If the reasons clash with your values, discuss it with one senior you trust and decide what you can accept.',
      'Whenever you catch yourself playing the job down, finish the sentence with one true thing you do well. Try that version on three people this month and note how it feels to say it.',
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
          'Jobs with a long commute, or ones that need relocation or a posting to another town, as in many bank, government and large-company roles',
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
    { ...x(['current'], 'work', 'I have decided this job is wrong for me without changing anything about how I do my tasks.', 'Pick one change this week, for instance a different order of tasks, a fixed focus hour or handing one task to a colleague. Keep it for three weeks and note whether the drained feeling changes.', true), up: 'Each time you think this job is wrong, write what triggered it and whether a change in how you work could have eased it. Try that change within the week.' },
    { ...x(['current'], 'people', 'I have told my manager plainly what is bothering me and what would help, in words they could act on.', 'Write two sentences: what is not working and one thing that would help. Ask for 20 minutes and use them. If your manager is the problem, choose HR or a senior you trust and keep to facts.'), up: 'After you raise the problem, agree a review date two weeks out in the same message. Bring one example of what changed or did not, so the next talk starts from facts.' },
    { ...x(['current'], 'growth', 'I have asked what my options are for moving to another team or role inside this organisation.', 'Look at internal openings, or ask HR, the owner or a senior how moves to another team work here. Speak to one person in the team you would like to join, so you know the real work before you ask your manager.'), up: 'Write two reasons for and against each internal option, and book a chat with one person in your top team within ten days. Ask what a normal week there looks like.' },
    { ...x(['current'], 'values', 'I have a written list of what I want from a job that I could compare any other job against.', 'List five to seven things you want, such as learning, a respectful manager, location, a steady schedule or work you believe in. Mark the two that matter most, and score your current job against all of them.'), up: 'Rank your list, turn the top two into questions for any job talk, and re-score your current job against the list on a fixed date every month.' },
    // Holding or expecting an offer
    { ...x(['offer'], 'work', 'I have asked what a typical week in this role looks like and who did the work before me.', 'Ask the recruiter or hiring manager, "Can you walk me through a normal week, and what happened to the last person in this role?" Compare the answer with the job description and note any differences.'), up: 'Ask your future manager for a written task list for the first month, and compare it with the job description. Note each difference with one example before you reply.' },
    { ...x(['offer'], 'people', 'I have spoken to the person I would report to, not only to HR or the recruiter.', 'Ask for a 20-minute call with your future manager before you accept. Ask how they give feedback, what their team found hardest last quarter and how they would support you in the first three months.'), up: 'Prepare the same three questions, including how they handle a mistake, for the manager and one team member. Compare the replies in a note and mark where they differ.' },
    { ...x(['offer'], 'people', 'I have spoken to at least one current or former team member about what the team is like.', 'Through LinkedIn, a college senior or someone you know, find one current or former team member and send a short, polite note asking for ten minutes. Ask what they would tell a friend about working there. Do not rely on anonymous reviews alone.'), up: 'Message one more person, preferably someone who left the team, to cross-check what the first said. Put the common points in a note and mark the ones that differ.' },
    { ...x(['offer'], 'growth', 'I know how performance and pay are reviewed here, and when the first review would happen.', 'Ask HR or your future manager how performance is reviewed, how often, and what the first review is based on. Get the answer in writing so you are not left relying on a verbal promise.'), up: 'Ask HR to confirm the review dates and criteria in an email. Set a reminder for the first review date so you can check it happened as told.' },
    { ...x(['offer'], 'life', 'I have the pay structure, joining date, notice period, working hours and probation terms in writing.', 'Ask for the offer letter and read every clause, including variable pay, bonus conditions, bond or notice rules and the probation clause. Ask about anything unclear before you accept, and keep your own copy.'), up: 'Make a table of each clause in your own words with a status of clear or unclear. Send all unclear ones to HR in one email and wait for written replies before you sign.' },
    { ...x(['offer'], 'values', 'I am accepting mainly because I fear this offer may not come again.', 'Write down what exactly you fear and what you would still want to know if that fear were removed. Ask for a few extra days if you need them, and decide based on fit and facts rather than relief.', true), up: 'Give yourself a 48-hour gap before replying. In that time ask one person who is not pushing you what they think, and write the two things you would still want to know.' },
    // First six months in a new job
    { ...x(['newjob'], 'work', 'The tasks I do in my first weeks match what was described to me when I joined.', 'Keep a weekly note of what you actually did against the interview description, with two or three specific examples. Raise differences as questions with your manager, not as complaints, around the third or fourth week.'), up: 'Check your weekly note against the job description every Friday for six weeks. Mark each difference small, medium or large, and talk to your manager about the large ones first.' },
    { ...x(['newjob'], 'people', 'I have asked my manager what a good result looks like by the end of my first three months.', 'Book 20 minutes and ask, "What would make you say I have settled in well?" Send an email or message afterwards listing the two or three points so both of you are working from the same expectations.'), up: 'Ask your manager for a 15-minute check at week six on your three-month points. Bring one example per point and ask what to do differently in the next six weeks.' },
    { ...x(['newjob'], 'people', 'I have found one person to ask the small questions I feel shy about asking.', 'Choose a colleague who joined a year or so before you and ask them for a coffee. Ask how things really work, who to go to for what and what they wish they had known, and make it a regular short check-in.'), up: 'Make the coffee a fixed monthly one and bring one question from your notes each time. Keep the answers in a page you can later share with a new joiner.' },
    { ...x(['newjob'], 'growth', 'I know what is checked before my probation ends.', 'Reread your appointment letter for the probation clause, and ask HR or your manager what is reviewed and when the decision is made. Terms differ from one company to another, so do not rely on what a friend\'s company does.'), up: 'Put the probation review date in your calendar with a reminder two weeks before. At the midpoint, ask your manager how you stand against what will be checked and note the reply.' },
    { ...x(['newjob'], 'life', 'I judge this job by a few ordinary weeks and not only by the tiredness of the first days.', 'Wait for at least four ordinary weeks before judging the pace or hours. Keep a short note of energy, hours and travel each week, so you can tell the difference between settling in and a lasting mismatch.'), up: 'After four ordinary weeks, review your log and mark hours, travel and energy as fine, tiring or too much. Raise only the items marked too much, with dates.' },
    { ...x(['newjob'], 'values', 'I already feel doubts about how this company works, but I tell myself to ignore them.', 'Write down the specific incidents behind the doubt, with dates. Ask a trusted colleague outside your team whether it is usual here, and decide whether it is a one-off or a pattern before the end of your probation.', true), up: 'Keep a dated incident list and mark each as one-off or repeated. When an item repeats a second time, raise it in writing with HR or a senior before probation ends.' },
    // Job seeker comparing roles
    { ...x(['seeking'], 'work', 'I compare roles by what the daily tasks are, not by the job title or brand.', 'For each role, ask the recruiter for a typical day and for the tasks that fill most of the week. Write them in the same format for every role so you can see the differences in plain words.'), up: 'Score each role from 1 to 5 on daily tasks after each call, using the same rows. Ask each recruiter to confirm in writing what you were told about the task split.' },
    { ...x(['seeking'], 'people', 'I try to speak to someone who does each kind of work before I decide.', 'Reach one person in each type of role through college contacts, relatives, neighbours or LinkedIn. Ask three questions: what a normal week is like, what they find hardest and what they would do differently if they chose again.'), up: 'Ask the same three questions of everyone you speak to and record answers in one sheet. Ask each person for one more contact, so your view is not from one voice.' },
    { ...x(['seeking'], 'growth', 'I judge each role by what I would learn in the first year.', 'Picture your second month in each role and write the three things you would be learning to do. Ask yourself whether another employer would want those skills. A role that teaches skills useful elsewhere keeps more options open, even if it starts slower.'), up: 'Test your list of first-year skills against three postings for jobs one step up. Ask each employer how the last person in the role moved on.' },
    { ...x(['seeking'], 'life', 'I compare roles on the same points, including commute, shifts, notice terms and benefits, in one sheet.', 'Make a table with the same rows for every role: pay structure, hours, travel, shifts, notice, probation, leave and benefits. Fill it from the offer or the recruiter, and mark blanks to ask about.'), up: 'Re-check the sheet two days before each decision date. Highlight every blank and send each employer one message asking for written replies on the blanks only.' },
    { ...x(['seeking'], 'life', 'I choose between roles mostly on the basis of pay alone.', 'Pay matters, but it is one of five points. Score the roles on the other four before you decide, and ask yourself whether a small difference in pay is worth a large difference in learning, hours or manager.', true), up: 'Rank the roles again after dropping pay, and again after dropping travel, and see whether the order changes. Ask someone you trust whether your reasons still hold.' },
    { ...x(['seeking'], 'values', 'I know the two or three things I would not compromise on in a job.', 'Write them as plain sentences, such as "I will not take a job that needs a two-hour commute each way". Use them as filters before comparing roles, so you do not talk yourself out of them later.'), up: 'Test each non-negotiable against every role in writing before you apply. Show the list to one person who knows you well and ask which one you are likely to bend.' },
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
      people: sa('As a job seeker, you meet people briefly and in their best mode, so culture is hard to read.', 'Ask each interviewer how disagreements are handled in the team and why the last person in the role moved on.', 'Look for one current or former employee at each company and ask for ten minutes.'),
      growth: sa('As a job seeker, you can choose a role by what it teaches, which matters more early in a career than a small difference in pay.', 'For each role, write the three skills you would build in a year and whether other employers would value them.', 'Ask each employer how people in the role have moved on in the last few years.'),
      life: sa('As a job seeker, you can compare terms before you are committed, which is much harder once you have joined.', 'Make one sheet with pay structure, hours, shifts, travel, notice, probation, leave and benefits for each role.', 'Mark every blank and ask about it in writing before you decide.'),
      values: sa('As a job seeker, you can set your limits before the first day, and that is the easiest time to do it.', 'Write your two or three non-negotiables and remove any role that fails them before comparing the rest.', 'Check how each company is described by its staff and customers and not only in its own material.'),
    },
  },

  scenarios: [
    sc('work', 'After a hard week, you start thinking that this job is simply not for you. What do you do first?', [
      o('Update your CV and apply to a few other companies this weekend, so that you have a way out if the feeling turns out to be right', 17, 'Having a CV ready is sensible, but one hard week is thin evidence. If you have not named what went wrong, the same problem may follow you to the next employer. Keep the CV ready, and find the cause over the next two weeks before you apply anywhere.'),
      o('For two weeks, note one draining task and one energising task each day, with a reason', 100, 'A short daily log turns a heavy mood into named tasks. After ten days, look for the task that keeps appearing on the drain side, then decide whether it can be changed, tested or accepted.'),
      o('Rest over the weekend, see how you feel on Monday and decide then whether it is worth worrying about', 50, 'Rest is a sensible start, and some doubts do fade. If the same feeling returns within a month, though, you have learned nothing from it. Add a two-week log so you can tell a bad week from a pattern.'),
      o('Talk it over with a close friend or someone at home who knows you well', 33, 'Talking helps you feel less alone, and a friend may notice something you miss. Treat it as input only, since nobody else sees your desk. Afterwards, write down the three tasks that bothered you most.'),
    ]),
    sc('work', 'You are being given more and more tasks that are far from what you were hired to do. What do you do?', [
      o('Tell your manager that these tasks are not in your role and that you will not do them', 0, 'Refusing flat out usually costs trust before the real question is even asked. Instead, list the extra tasks and hours from the last two weeks, and ask your manager how the role is meant to look.'),
      o('Do them without complaint because the team is busy, and hope your manager notices the extra effort', 33, 'Helping the team is fair, but silence turns a favour into the new normal. Start a simple list of the extra tasks and hours this week, so a later talk about the split rests on facts.'),
      o('Ask your manager this week for a short talk on how your role is meant to look, and bring a list of the extra tasks from the last two weeks', 100, 'Raising it early, with a list, moves the talk from feelings to facts and lets your manager decide what to keep, move or stop. Ask for a decision on at least one task by a set date, and note it in a follow-up message.'),
      o('Ask a senior colleague whether this has happened to others, and follow what they suggest, including whether to bring it up with the manager', 67, 'A senior can tell you what is normal here, and that is worth knowing. Their view is still not your evidence, so add your own task list before the conversation and agree any change openly.'),
    ]),
    sc('people', 'Your manager gives feedback that feels unfair, in front of others. What do you do?', [
      o('Ask for one example, and offer to talk for five minutes later in the day', 100, 'You show that you take the feedback seriously without arguing in public. The later chat gives you details to judge whether it was fair. Write down the example the same day.'),
      o('Agree with all of it in the meeting so that it ends quickly, and think about it on your own afterwards', 33, 'Agreeing keeps the peace today, but it leaves a point you disagree with on record. Within two days, ask your manager for a short private talk and for one example of what they meant.'),
      o('Explain calmly but firmly, in front of everyone, why you see it differently, so that others hear your side too', 50, 'Speaking up for yourself is fair, even in a calm voice. Still, a disagreement in front of the team tends to make the other person defend their view. Next time, say you want to understand and move the detail to a private slot.'),
      o('Say nothing, and replay it in your mind for a few days before deciding whether it matters', 17, 'Silence leaves you holding only your own version, and replaying costs sleep. Write down the exact words used today, and ask your manager for ten minutes within the week to hear the specifics.'),
    ]),
    sc('people', 'A teammate keeps presenting your work as their own. How do you respond?', [
      o('Let it pass, because good work tends to be noticed in the end', 17, 'Work is not always noticed, especially in a busy team. From this week, send your manager a short written update on what you finished, so your part is on record without a quarrel.'),
      o('Tell the teammate privately that you want your part named in future, and send your manager a short written update on what you finished', 100, 'A private, factual talk gives the teammate a chance to change. Written updates protect your credit even if they do not. Pick a regular day, such as Friday, for the update.'),
      o('In the next meeting, say lightly, "Just to add, I did this part", so that everyone knows who did what, and carry on', 33, 'The line is polite, and it does put your name on the work. But it can embarrass your teammate in front of others and start a conflict. Use the private talk first, and keep the meeting line for a time when it has not been settled.'),
      o('Speak to the teammate privately about it, and leave it there if they agree to stop', 67, 'A private word is the right start, and it may be enough. If it happens again you will have nothing to show, so begin the weekly written update to your manager now as a precaution.'),
    ]),
    sc('growth', 'You realise you have learned nothing new at work for months. What do you do?', [
      o('Sign up for an online course in a skill you find interesting, even if it has little to do with your job, and finish it in your free time', 50, 'Learning anything is a good habit, but a course unrelated to your work may not change how the job feels. Choose a skill linked to a role you might want in two years, and finish the first unit within a week.'),
      o('Raise it at your yearly appraisal, when such things are normally discussed', 33, 'Waiting for the appraisal can mean many more months of the same work. Bring it up within the next two weeks, with one specific thing you want to try.'),
      o('Conclude that the job is a dead end and begin applying elsewhere', 17, 'You may end up leaving, but you will not know what to look for. First find out whether learning is missing here or just not offered, by making one clear request to your manager.'),
      o('Ask your manager for one new task for a month, naming the skill it would build', 100, 'A specific request with a review date is easy to agree to, and the answer tells you whether growth is available here. Put the review date in your own diary before you leave the room.'),
    ]),
    sc('growth', 'An internal opening in another team is announced, and your manager has not mentioned it to you. What do you do?', [
      o('Apply quietly without telling anyone, to avoid awkwardness', 33, 'Applying is your right, but a manager who hears from someone else may feel let down. Check the internal process, and tell your manager before the other team does.'),
      o('Wait to see whether your manager brings it up, since raising it first might look as if you want to leave', 17, 'Waiting hands the timing to someone else, and the date to apply may pass. Showing interest in learning is not the same as announcing that you are leaving, so say it plainly.'),
      o('Ask a few trusted colleagues what they think of the opening and who else is applying, before you do anything', 50, 'Colleagues can add useful background. Their opinions are not a plan, though. Choose one person who works in that team and ask what a normal week there looks like.'),
      o('Read the role carefully, talk to someone in that team, then tell your manager you are interested', 100, 'You gather facts first and then have an open conversation, which many managers respect more than a surprise. Aim to finish all three steps within a week, before the closing date.'),
    ]),
    sc('life', 'You are regularly working late, and your energy is dropping. What do you do?', [
      o('Log your hours and the reasons for two weeks, then ask your manager for two specific changes', 100, 'With dates and reasons in front of them, your manager can see the pattern and say yes to a clear request. Examples of requests: a cut-off time for new work, or time off in return for late evenings.'),
      o('Accept it for now as part of the job, since most people around you also stay late and nobody complains', 17, 'Some phases are heavy, and others are staying late too. But with no end in sight, tiredness builds quietly. At least keep a log for two weeks so you know how heavy it really is.'),
      o('Work faster during the day, and skip breaks if needed, so that you can leave on time', 33, 'Working efficiently helps, but skipping breaks tends to cost you the energy you are trying to save. If the volume is the cause, speed will not fix it. Show the volume to your manager.'),
      o('Start leaving on time without saying anything, and see whether anyone objects', 50, 'This may protect your evenings, but without a word it can create friction, and urgent work still has to go somewhere. Tell your manager what you are doing and propose how urgent requests will be handled.'),
    ]),
    sc('life', 'You feel your pay is low compared with others in similar work. What do you do?', [
      o('Mention to your colleagues that you feel underpaid compared with what you have heard about others', 17, 'Pay talk based on rumour is often wrong, and it can cause trouble for you. Find reliable figures for the role instead, and keep the matter between you and your manager.'),
      o('Ask your manager for a raise at the next one-to-one, saying that you feel the pay is low for the load you carry', 50, 'Asking is right, but a request that rests on a feeling is easy to refuse. Prepare two or three concrete reasons first, such as tasks added since you joined or results you delivered.'),
      o('Collect pay figures for similar roles, then ask for a review with those in hand', 100, 'Figures from job postings and from people in the field give your request a base, though pay differs by town, employer and skill, so treat them as a rough guide. Choose a suitable time, such as after you complete a major piece of work, and be ready to hear what the review process is.'),
      o('Carry on doing good work and wait for your manager to reward it at the next appraisal, since they will have seen your effort', 33, 'Some managers do reward effort unprompted, but many do not. List your main results from the last six months, and bring up the pay review yourself rather than waiting.'),
    ]),
    sc('values', 'You are asked to do something that feels slightly dishonest, such as backdating a form or giving a customer a misleading answer. What do you do?', [
      o('Do it, since everyone in the team does it this way, your manager has asked you directly and you do not want to be the one who stands out', 0, 'Common practice does not make it right, and the risk can fall on you personally. Before you do anything, ask for the official process, and keep a note of who asked you and when.'),
      o('Do it this once and think later about whether to raise it', 17, 'Once it is done, it is hard to undo, and a second request is likely. Pause before acting next time and check the right process.'),
      o('Decline to do it, give no reason and keep out of an argument', 67, 'Declining protects you, but your manager may not know why, and the problem stays. Next time, add one sentence of your concern and ask how it should be done properly.'),
      o('Say you are uneasy, ask for the correct process in writing, and involve a senior or the policy owner', 100, 'You raise the concern properly, leave a record and give the company a chance to correct course. If the pressure continues, keep dated notes and talk to someone you trust outside the company; if records or laws are involved, a qualified adviser can guide you, as this is general advice only.'),
    ]),
    sc('values', 'You wonder whether your job suits what you care about, but you are not sure what that is. What do you do?', [
      o('Ask a few colleagues whether they ever feel that the job does not fit what they care about, and listen to what they say', 50, 'Other views can help you feel less alone. But colleagues care about different things, so their answers cannot define yours. Start with your own notes from the last month, and compare afterwards.'),
      o('Tell yourself that most people work only for the salary and your doubts are unrealistic', 17, 'Many people do work mainly for income, and that is fine. But dismissing a doubt does not remove it. Spend 20 minutes writing what you would miss if you did not care about the work at all.'),
      o('Write down three moments from the last month when work felt good or bad, and what each says about what you care about', 100, 'If you cannot name your values yet, real moments show them better than abstract words. Turn each moment into a value, then mark each mismatch as one to live with, one to change or one you cannot accept. Do it in one sitting this week.'),
      o('Wait until the feeling becomes impossible to ignore, and then act', 33, 'Waiting lets the unease build quietly, and a decision made in a rush is rarely a good one. A short list of values takes only 20 minutes and gives you something to work with now.'),
    ]),
    // Stage-specific
    {
      ...sc('life', 'You are seriously thinking about resigning without another job lined up. What is the most sensible next step?', [
        o('Give notice now because you cannot see this improving, and use the notice period to look for something better', 17, 'If the problem is clear and you have savings, a considered exit can be a reasonable choice, but with no test and no plan it can bring money stress and rushed choices. Name the problem first, and count how many months of expenses you could cover.'),
        o('Start applying widely, hoping that any new job will solve the problem', 50, 'Looking is reasonable while you are still employed. But if you have not named what is wrong, you may repeat it. Write the main problem in one sentence before you send the next application.'),
        o('Wait quietly and hope that things improve by themselves', 33, 'Things sometimes improve, but waiting with no test leaves you where you are. Set a window of three to four weeks and try one specific change within it.'),
        o('Name the problem in one sentence, try one change for a few weeks and check your savings and notice terms', 100, 'You collect evidence and protect your choices. Whatever you decide later will then rest on facts and not on a bad week. Write the date on which you will review your notes.'),
      ]),
      stages: ['current'],
    },
    {
      ...sc('people', 'You get an offer that must be answered in two days, and you still have unanswered questions about the role and your manager. What do you do?', [
        o('Accept now to be safe, since offers can be withdrawn, and find out the rest after joining', 0, 'Accepting with open questions leaves the risk with you. Ask the questions now, while you still have a choice, and ask politely for a call with your future manager.'),
        o('Ask in writing for a call with your future manager and until the end of the week to reply', 100, 'A polite request for time and a conversation is normal. The answer, and the way you are treated when you ask, tells you a good deal. Keep the reply in writing.'),
        o('Decline, since the pressure suggests the company is not a good one', 33, 'A tight deadline can be a warning sign, but it can also be routine hiring practice. Ask for more time first, and watch how the request is received before you judge.'),
        o('Accept verbally so that the offer is held, and plan to ask your questions during your first week once you are inside the company', 17, 'By the first week you have already committed, and leaving later may mean serving a notice period. Ask before accepting, in writing, while saying no is still easy.'),
      ]),
      stages: ['offer'],
    },
    {
      ...sc('work', 'In your second month, your tasks differ from how the job was described at the interview. What do you do?', [
        o('Put up with it silently until probation ends, and raise it once you are confirmed', 33, 'Waiting means you spend the whole probation unsure of what is wanted, and your manager cannot fix what they do not know. Raise it calmly and in a specific way within the next two weeks.'),
        o('Write to HR saying that the role was not described accurately at the interview, and ask what can be done about it', 50, 'The difference may be fair to raise. Starting with a formal note can close doors, though, before your manager has had a chance to explain. Begin with your manager, and keep your dated notes as a backup.'),
        o('Start looking quietly for another job in case it does not improve', 17, 'You may end up there, but it is early to decide without a single conversation. Gather evidence first, then ask your manager what the role will look like by month four.'),
        o('Note the differences for two to three weeks with examples, then raise them with your manager as questions', 100, 'You keep to facts and give your manager room to explain or adjust. End the talk by asking what is expected of you by the end of probation, and write down the answer.'),
      ]),
      stages: ['newjob'],
    },
    {
      ...sc('growth', 'You have two offers. One pays a bit more, and the other has a better manager and more to learn. How do you compare them?', [
        o('Take the higher pay, because it is the one difference you can measure', 33, 'Pay matters, but a small difference can cost you learning and a good manager. Score both offers on all five areas before you decide, even if the pay still wins.'),
        o('Check that the lower pay still covers your monthly needs, then pick the one where you would learn more and work for the better manager', 100, 'Pay is a floor to check, not the only point to weigh. Once your needs are covered, learning and a good manager shape your next steps more. Write what you would do in your second month in each role and speak to one person in each before the reply dates.'),
        o('Ask three or four friends and family members which one they would pick, and go with the majority view', 50, 'People close to you add useful views, but they do not live your week. Use what they say as input to your own scoring, and ask each one why they prefer their choice.'),
        o('Pick the better-known company, because the name will look better on your CV when you apply later', 17, 'A known name can help, but what you learn and who you learn from shape the next steps more. Write what you would be doing in your second month in each role, then compare.'),
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
