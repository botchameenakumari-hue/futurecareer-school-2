// Promotion Readiness Assessment: a complete self-rating test bundle.
// General guidance only. No statistics, norms, pass marks or promotion promises.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

export const bundle: SkillTestBundle = {
  test: {
    id: 'promotion-readiness-assessment',
    slug: 'promotion-readiness-assessment',
    pageUrl: '/services/assessments/promotion-readiness-assessment/',
    breadcrumbName: 'Promotion Readiness Assessment',
    metaTitle: 'Promotion Readiness Assessment | Am I Ready for a Promotion?',
    metaDescription:
      'Free promotion readiness assessment: 40 questions and five scores for results, scope, visibility, allies and skills for the next level. Instant result, no sign-up.',
    h1Lead: 'Promotion Readiness',
    h1Accent: 'Assessment',
    eyebrow: 'For early career, senior, team lead and government, bank or PSU employees',
    heroSub:
      'Asking "am I ready for a promotion?" usually gets one answer: work harder. Promotions depend on more than effort. This free self-assessment checks five areas, delivering results at your current level, working beyond your job description, making your work visible, your relationships with your manager and sponsors, and the skills for the next level, then shows which one to work on first. It cannot promise a promotion, because company budgets and open positions are outside your control.',
    stats: [
      { value: '40', label: 'questions' },
      { value: '5', label: 'readiness areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five promotion readiness areas from your own ratings',
      'About 7 minutes',
      'What to work on first, with a 14-day routine',
    ],
    reportTitle: 'Promotion Readiness Report',
    reportFile: 'future-career-school-promotion-readiness-report.pdf',
    reportKicker: 'PROMOTION READINESS REPORT',
    resultKicker: 'Your promotion readiness result',
    scoreLabel: 'Overall promotion readiness',
    bands: {
      high: 'Strong in this area.',
      mid: 'Partly in place, with gaps to close.',
      low: 'Work on this area first.',
    },
    domainsHeading: 'Five promotion readiness areas this assessment covers',
    domainsIntro:
      'A promotion decision looks at what you have delivered, what more you already do, who knows about it, who supports you and whether you can handle the next level. These five areas turn those into habits you can rate honestly.',
    domains: [
      {
        key: 'results',
        name: 'Delivering results at your current level',
        short: 'Solid, reliable work that is clearly yours',
        strong: 'Your core work is dependable, you can name what changed because of it, and your results have held across more than one review cycle.',
        weak: 'Your output is uneven, you count tasks instead of outcomes, or you cannot say which results are truly yours.',
        plan: [
          'List your three or four main goals for this year and write, for each, what you delivered and what changed because of it.',
          'Pick the one recurring task where others sometimes need to chase or correct you, and fix its cause this month.',
          'Ask your manager which two results matter most to them in the next quarter, and plan your week around those.',
        ],
      },
      {
        key: 'scope',
        name: 'Working beyond your job description',
        short: 'Taking on work that looks like the next level',
        strong: 'You pick up useful work that nobody assigned, finish it, and have handled something bigger than your usual tasks.',
        weak: 'You stay inside your listed duties, wait when work falls between roles, or start extra work and leave it unfinished.',
        plan: [
          'Ask your manager what problem the team has that nobody owns, and offer to take one small, finishable piece of it.',
          'Take on one task that involves coordinating two or more people, even a short one, and complete it from start to end.',
          'Help one junior or new colleague become productive on something specific, and note what improved.',
        ],
      },
      {
        key: 'visibility',
        name: 'Making your work visible',
        short: 'Letting the right people know what you have done',
        strong: 'People who decide on promotions can describe your main achievements, because you share progress and results regularly and keep a record.',
        weak: 'You assume good work is noticed on its own, so decision makers hear about your work late, from others, or not at all.',
        plan: [
          'Start a running note with date, what you did and what changed, and add to it every Friday for ten minutes.',
          'Send your manager a five-line update every two weeks: done, in progress, blocked, next, and one result.',
          'Present one piece of your work to a wider group, such as a team meeting, a client call or a short internal write-up.',
        ],
      },
      {
        key: 'allies',
        name: 'Manager, sponsors and relationships',
        short: 'People who know your work and will speak for it',
        strong: 'You have talked openly with your manager about growth, understand how decisions are made, and have a senior person beyond your manager who knows your work.',
        weak: 'You have not discussed promotion with your manager, do not know who decides, or work mostly alone with little contact outside your team.',
        plan: [
          'Book 30 minutes with your manager and ask what you would need to show to be considered for the next level, then write down the answer.',
          'Find out how promotions work in your organisation: who recommends, who approves, and in which month decisions are made.',
          'Choose one senior person outside your direct line and share a piece of your work with them to ask for their view.',
        ],
      },
      {
        key: 'skills',
        name: 'Skills for the next level',
        short: 'Showing you can do the next job, not only this one',
        strong: 'You know what the next role actually involves, you have asked for feedback on your gaps, and you are already practising one skill from that level.',
        weak: 'You are unsure how the next role differs from yours, have not asked about your gaps, or are only getting better at your current tasks.',
        plan: [
          'Talk to two people already at the next level and ask what a normal week looks like and which skills they use most.',
          'Write the three biggest gaps between your work today and that level, and pick one to practise for the next 30 days.',
          'Ask for one small task that uses the new skill, such as planning a project, reviewing a colleague\'s work or handling a client query.',
        ],
      },
    ],
    questions: [
      { d: 'results', text: 'I can name two or three results from the past year that my manager and I would both agree were my own.' },
      { d: 'scope', text: 'I regularly take on useful work that is not written in my job description.' },
      { d: 'visibility', text: 'My manager and other decision makers could describe my main achievements without my reminding them.' },
      { d: 'allies', text: 'I have discussed with my manager what I would need to show to be considered for the next level.' },
      { d: 'skills', text: 'I can describe how the next role differs from mine in the kind of work involved, not only in the title.' },
      { d: 'results', text: 'My regular work is usually accurate and on time, without others needing to chase or correct it.' },
      { d: 'scope', text: 'I have helped a junior or new colleague become productive, and my team noticed.' },
      { d: 'visibility', text: 'I keep a running record of my achievements, with dates and what changed because of them.' },
      { d: 'allies', text: 'There is a senior person other than my direct manager who knows my work well enough to speak about it.' },
      { d: 'skills', text: 'I have started practising at least one skill that people at the next level use every day.' },
      { d: 'results', text: 'I judge my work by how many hours I put in and tasks I finish, not by what changed because of it.', reverse: true },
      { d: 'scope', text: 'When a task falls between two roles, I usually wait for someone else to pick it up.', reverse: true },
      { d: 'visibility', text: 'I assume good work will be noticed on its own, so I rarely talk about what I have done.', reverse: true },
      { d: 'allies', text: 'I avoid raising topics like my growth or promotion with my manager because it feels awkward.', reverse: true },
      { d: 'skills', text: 'I have never checked what people one level above me actually do through a normal week.', reverse: true },
      { d: 'results', text: 'I have taken on one goal that was harder than my usual targets and delivered it.' },
      { d: 'scope', text: 'When I take on extra work, I finish it and tell my manager what came out of it.' },
      { d: 'visibility', text: 'I share short updates on my progress and results at regular intervals, in meetings or in writing.' },
      { d: 'allies', text: 'I understand how promotion decisions are made in my organisation, including who recommends and who approves.' },
      { d: 'skills', text: 'I have asked for feedback on my gaps for the next level and I am working on at least one of them.' },
      { d: 'results', text: 'My good results have lasted across more than one review cycle, not only one good quarter.' },
      { d: 'scope', text: 'I have led or coordinated a piece of work, even a small one, where other people depended on me.' },
      { d: 'visibility', text: 'People in other teams know what I do and come to me for it.' },
      { d: 'allies', text: 'I mostly keep to my own team and have little contact with colleagues in other teams.', reverse: true },
      { d: 'skills', text: 'I can make a decision with incomplete information and explain my reasoning clearly afterwards.' },
    ],
    readingTitle: 'How to read your promotion readiness result',
    readingSections: [
      {
        title: 'Readiness is more than good work',
        body: [
          'Good results are the base, but a promotion decision also asks whether you already work at the next level, whether the right people know it, and whether someone will support your case. This assessment turns each of those into statements about what you do, so a lower score points to a habit you can start, not to a lack of ability.',
        ],
      },
      {
        title: 'Why these five areas',
        body: [
          'Results and scope describe your work. Visibility and allies describe how your work is seen and supported. Skills describe whether you can do the next job. If one of these is missing, the others often cannot make up for it: strong results that nobody knows about, or a good relationship with a manager without results to point to, both leave a gap.',
          'Your career stage changes the weight. Early in your career, reliable results and a clear talk with your manager matter most. Senior individual contributors need scope and influence. Team leads need to show they can work through others. In government, bank and PSU jobs, rules, exams and seniority carry more of the decision.',
        ],
      },
      {
        title: 'Look at the lowest area, then at the pattern',
        body: [
          'Your overall score is only a summary. The more useful reading is the lowest area, because it is usually the one holding the rest back. A high score in results with a low score in visibility, for example, suggests you are doing the work but not sharing it. A low score in skills with a high score in scope may mean you are busy but not yet building the new skills.',
        ],
      },
      {
        title: 'What a high score does and does not mean',
        body: [
          'A high score means your habits match what people usually look for at the next level. It does not mean a promotion is due. Promotions also depend on company budgets, open positions, timing of review cycles and decisions made by others. Use your score to improve what you control, and talk to your manager about the rest.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool and shows how you describe your own habits. It does not replace an honest conversation with your manager or a mentor who knows your work.',
      'It cannot predict whether you will be promoted. Promotions depend on company budgets, open positions, review cycles and decisions made by other people, which you cannot control.',
      'Scores are not compared with other people, so there is no pass mark. A high score does not mean a promotion is due, and a low score does not mean you are not good at your job.',
      'Every company, bank and government department has its own promotion rules. Your appointment letter, service rules and official circulars come first.',
    ],
    faqs: [
      {
        q: 'Is this promotion readiness test free?',
        a: 'Yes. You can take it without paying and without signing up, see your result on screen and download the report as a PDF.',
      },
      {
        q: 'How do I know if I am ready for a promotion?',
        a: 'Readiness has five parts: results at your current level, work beyond your job description, visibility of your work, support from your manager and sponsors, and skills for the next level. This assessment rates each part so you can see which are in place and which need work. It cannot tell you whether a promotion will happen, as budgets and openings also matter.',
      },
      {
        q: 'What is a good score on this assessment?',
        a: 'There is no pass mark. Scores are only against your own answers, not against other people. Use the area scores to decide what to work on first, and retake the assessment after a month or two to see what changed.',
      },
      {
        q: 'How is the score worked out?',
        a: 'Statements are rated from 1 to 5 and the ones worded in the negative are reversed. In the situation questions, each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
      },
      {
        q: 'Can I use this promotion self-assessment if I work in a government job, bank or PSU?',
        a: 'Yes. You choose your stage, including government, bank or PSU employees, where promotion follows rules, exams and seniority. The extra questions and advice then focus on departmental exams, seniority lists, annual performance reports and what you can still influence.',
      },
      {
        q: 'Can freshers or people with less than three years of experience use it?',
        a: 'Yes. The early career stage covers the first few years of work, with questions on reliability, learning and having a first conversation with your manager about growth. You do not need a long record to use it.',
      },
      {
        q: 'What if I score high but my company says there is no budget or opening?',
        a: 'That can happen, and it does not mean your work is not valued. Ask your manager what the realistic timeline is and what you should keep building in the meantime. If there is no path at all, a high score also gives you a strong base for talking to other employers.',
      },
      {
        q: 'How is this different from the leadership skills or soft skills assessments?',
        a: 'Those tests look at leadership or workplace behaviour in general. This one is about the steps around a promotion: results, scope, visibility, support and next-level skills. Taking the leadership and soft skills assessments as well can show whether a weak area comes from promotion habits or from wider skills.',
      },
    ],
    related: [
      {
        href: '/blog/career-guidance/how-to-get-promoted-faster-india/',
        title: 'How to Get Promoted Faster in India',
        description: 'What actually moves a promotion decision, from sponsors to review timing.',
      },
      {
        href: '/career-resources/how-to-ask-for-a-salary-raise-with-scripts/',
        title: 'How to Ask for a Salary Raise, with Scripts',
        description: 'Words you can adapt for the conversation with your manager.',
      },
      {
        href: '/blog/career-change/career-plateau-how-to-break-through-india/',
        title: 'Career Plateau: How to Break Through in India',
        description: 'What to do when growth at work has stalled.',
      },
      {
        href: '/blog/government-jobs/rbi-and-sbi-career-growth-india/',
        title: 'RBI and SBI Career Growth in India',
        description: 'How progression works in two well-known banking careers.',
      },
      {
        href: '/services/assessments/leadership-skills-self-assessment/',
        title: 'Leadership Skills Self-Assessment',
        description: 'Rate the leadership habits that the next level often asks for.',
      },
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'Leadership, teamwork, adaptability, ownership and problem solving.',
      },
      {
        href: '/services/assessments/communication-skills-assessment/',
        title: 'Communication Skills Assessment',
        description: 'Listening, speaking, writing, feedback and presenting, scored separately.',
      },
      {
        href: '/services/assessments/working-professionals-and-career-changers/',
        title: 'Assessments for Working Professionals and Career Changers',
        description: 'Tests and guidance for people planning the next step in a career.',
      },
    ],
    breadcrumbDescription: 'Free promotion readiness assessment with five area scores.',
    webAppDescription:
      'A free original 40-question promotion readiness assessment covering delivering results at your current level, working beyond your job description, making your work visible, manager, sponsors and relationships, and skills for the next level, with five scores, an overall score, a practice plan and a downloadable report.',
    indexDescription: 'Free 40-question promotion readiness test with five scores and a 14-day plan.',
    indexNote: 'For early career, senior, team lead and government employees',
  },

  depth: {
    stageHeading: 'Which of these describes your job right now?',
    stageNote: 'Promotion in your first years, as a senior specialist, as a team lead and in a government or bank job work very differently, so your report adjusts the advice to match. Promotions also depend on budgets and openings that you cannot control.',
    stages: [
      {
        key: 'early',
        label: 'Early career (0 to 3 years)',
        description: 'Individual contributor in the first few years of work',
        title: 'Build a reliable record and have your first growth conversation',
        body: 'In the first years, the next level usually goes to people whose work is dependable and who show they learn quickly. You may not yet know how promotion works where you are, and nobody may have told you. Your first job is to become reliable, and your second is to ask.',
        actions: [
          'Write what you delivered in each of the last three months in one line each, with the result next to it.',
          'Ask your manager in a one-to-one: "What would you want to see from me over the next year to consider me for the next level?"',
          'Choose one skill your seniors use that you do not yet, and ask for one small task that practises it.',
        ],
      },
      {
        key: 'mid',
        label: 'Mid career (3 to 8 years)',
        description: 'Senior individual contributor aiming for a higher grade or a specialist role',
        title: 'Show impact beyond your own tasks',
        body: 'At this stage, doing your own work well is expected. The jump comes from the size of what you own, the people you influence and the problems you solve without being told. Many people in this group are busy but invisible, or visible but without a clear sponsor.',
        actions: [
          'Pick one problem bigger than your usual tasks, write a one-page proposal and share it with your manager.',
          'Mentor one junior on a real piece of work and note what improved for them and for the team.',
          'Ask a senior person outside your line to review one piece of your work, so your name is known beyond your manager.',
        ],
      },
      {
        key: 'lead',
        label: 'Team lead aiming for manager',
        description: 'Team lead or supervisor aiming for manager or senior manager',
        title: 'Show that results come through your team, not only from you',
        body: 'As a lead, you are judged less on your own output and more on your team\'s results, how you grow people and how you work with other teams and leaders. If you still do most of the hard work yourself, the next level can look like a gap, not a step.',
        actions: [
          'List which tasks only you do in your team, and pick one to hand over this month with clear expectations and a check-in date.',
          'Write down, for each team member, one growth step you are helping with, and review it with them.',
          'Ask your own manager which two team outcomes they would point to if asked to recommend you.',
        ],
      },
      {
        key: 'govt',
        label: 'Government, bank or PSU',
        description: 'Employee in a service where promotion follows rules, exams and seniority',
        title: 'Know your rules and control what you can',
        body: 'In government departments, banks and public sector units, promotion usually follows written rules, such as eligibility service, departmental or internal exams, seniority lists and annual performance reports. You may not control the vacancy or the list, but you control your record, your preparation and your paperwork. Rules differ by department and organisation, so check your own service rules and circulars.',
        actions: [
          'Read the promotion rules for your cadre or scale from the official source, and write down the minimum service, exams and reports required.',
          'Check that your service record, training entries and annual performance reports are complete and correct, and ask your office to fix errors in good time.',
          'If a departmental or internal promotion exam applies to you, make a month-by-month study plan from its official syllabus and note the notification dates.',
        ],
      },
    ],
    tips: [
      'Sit down for 20 minutes and write three results from the past year in the form "I did X, and Y changed". Check each one with a colleague or a mail to see if it truly was your own work.',
      'Next week, ask your manager: "Is there a problem the team has that nobody owns?" Offer one small piece you can finish in two or three weeks, and do not start something you cannot complete.',
      'Ask your manager or one senior colleague: "What do you think are my main contributions this year?" If their answer misses something important, start sending a short update every two weeks.',
      'Book 30 minutes and ask: "What would I need to show in the next 12 months to be considered for the next level?" Write down the answer, and ask when the next review or promotion cycle is.',
      'Find two people already in the next role, ask for 20 minutes each, and ask: "What does a normal week look like, and what takes most of your time?" Write the differences from your own week.',
      'Pick the one task you do repeatedly where errors or delays happen, write a short checklist for it, and use it for the next four weeks. Reliability is built on removing repeat problems.',
      'Offer to teach a new colleague one specific thing this month, such as a tool or a process, in a 30-minute session, and ask them afterwards what they could do that they could not before.',
      'Create a note on your phone or a sheet with three columns: date, what I did, what changed. Add to it every Friday for ten minutes so your review is written from records, not memory.',
      'Choose one senior person you respect outside your reporting line. Send them a short message asking for 15 minutes of advice on one piece of your work, and share a one-page summary beforehand.',
      'Choose one skill from the next level, such as planning a project or presenting to seniors, and ask for a task that uses it. Practise it for four weeks and ask for feedback at the end.',
      'For the next month, write beside every task its outcome in one line: what is different because of it. Spend your best hours on the tasks where you can name a clear outcome.',
      'Next time work falls between roles, say in the meeting: "I can take this, and I will share a plan by Thursday." Choose something small enough to finish, so the habit starts with a success.',
      'Write a two-line update after each important piece of work and send it to your manager the same day. Silence does not mean your work was missed, but it does leave your manager without material when asked about you.',
      'Write three sentences before your next one-to-one: where I am, where I want to go, and one question. Say them aloud once. The first conversation is usually the hardest, and the second is easier.',
      'Watch a senior colleague for one full day, or ask to shadow them for two hours. Write down three decisions they made that you would not have been asked to make at your level.',
      'Ask your manager for a target that stretches you, agree on how it will be measured, and write a weekly plan. A stretch goal that you finish is stronger evidence than three easy ones.',
      'When you finish extra work, send a note: what I did, what it produced, and what I suggest next. Extra work that is not closed with a result is often forgotten.',
      'Pick one regular forum, such as a weekly team meeting, and prepare two sentences on your progress for it. Speak early in the meeting, when it is easier to be heard.',
      'Ask your HR team or a senior colleague who recommends and who approves a promotion, which month decisions are taken, and what documents are needed. Write the answers on one page.',
      'Ask your manager: "What are my two biggest gaps for the next level?" Choose one and set a 30-day target. Ask again after a month and note the difference.',
      'Look at your last two review cycles. If a result only appeared in one of them, find what made it possible and put that habit into your weekly routine so it holds.',
      'Take one small project that involves two or more people, set a goal and a date, share tasks, check progress weekly and report the result. This is the first proof of leading work.',
      'Next time you complete something, tell one colleague in another team what you did, and ask whether it could help them. Work spreads by word of mouth between teams.',
      'Each month, meet one colleague from another team for tea or a call, and ask about their biggest problem. Offer one useful thing within the week. Relationships are built by being useful before you need anything.',
      'When a decision has to be made and information is missing, write your assumption, your choice and your reason in three lines, and share it. Review the result later and note what you would change.',
    ],
    strongTip: 'This is already a habit that supports a promotion case. Keep doing it and be ready to give an example of it.',
    domains: {
      results: {
        why: 'A promotion case is built on results that other people can confirm. Reliable work at your current level, with a clear outcome behind each piece, gives your manager something concrete to say, and it protects you from being seen as busy rather than effective.',
        roles: [
          'Early in your career, where dependable work is the main way people judge whether you can take more',
          'Annual and half-yearly appraisals, where your results are compared with the goals set for you',
          'Government and bank jobs, where your annual performance report records what you delivered',
        ],
        routine: [
          'Days 1 to 3: List your main goals for this year and, beside each, write what you delivered and what changed. Mark the ones with a clear outcome.',
          'Days 4 to 7: Pick one repeating problem in your work, such as errors, delays or follow-ups, and write a short checklist that removes its cause.',
          'Days 8 to 11: Ask your manager which two results matter most in the next quarter, and plan your week so that these get your best hours.',
          'Days 12 to 14: Write a half-page summary of your three best results of the year, each in the form of task, action, result, and check each with a colleague.',
        ],
        mistakes: [
          'Counting hours and tasks instead of what changed because of your work',
          'Letting small errors or delays repeat, so people start to double-check you',
          'Having one great quarter and slipping in the next, which weakens the case for steady performance',
        ],
        proof: [
          'A written list of your main results this year with dates and outcomes',
          'A message or mail from a manager, client or colleague that confirms a result',
          'A goal sheet or appraisal form that matches what you have delivered',
        ],
        askOthers: 'Which of my results this year had the biggest effect on the team, and where did you have to step in to fix or chase something?',
        talkingPoints: [
          'You can name your results and the change they produced',
          'Your work is dependable across more than one cycle',
          'You have delivered at least one goal harder than usual',
        ],
        midStep: 'Write the three results you would want your manager to mention about you, then collect one piece of proof for each this week.',
      },
      scope: {
        why: 'Most promotions reward people who are already doing part of the next job. Taking on useful work beyond your description, and finishing it, shows you can handle more, and it lets decision makers see you in the bigger role before they have to decide.',
        roles: [
          'Teams where a new problem appears and nobody owns it, giving you a chance to step in',
          'Senior individual contributor roles, where the step up is about owning bigger problems',
          'Team lead roles, where coordinating others and handing over work is the main shift',
        ],
        routine: [
          'Days 1 to 3: List problems in your team that nobody owns, then pick one that you can finish in about three weeks and that your manager would value.',
          'Days 4 to 7: Tell your manager you will take it, agree on what finished looks like, and write a short plan with dates.',
          'Days 8 to 11: Work on it in short, regular blocks, and give your manager a two-line update at the end of each week.',
          'Days 12 to 14: Close it with a note: what you did, what changed, and what you suggest next. Ask whether there is a related piece you could own.',
        ],
        mistakes: [
          'Taking on too many extra tasks and finishing none of them well',
          'Doing extra work silently, so nobody connects it to you',
          'Choosing extra work that is easy but not valued by your manager or the business',
        ],
        proof: [
          'A short document, report, process or tool that you created beyond your job description',
          'A message from a colleague or manager thanking you for taking up an unowned problem',
          'A project plan or summary where you coordinated other people and delivered',
        ],
        askOthers: 'Which problems around the team have been left without an owner, and which one would be most useful for me to take on?',
        talkingPoints: [
          'You pick up work before being asked and see it through',
          'You have coordinated others, even on a small scale',
          'You report what extra work produced, not only that you did it',
        ],
        midStep: 'Choose one unowned problem in your team this week and ask your manager if you can take a small, finishable piece of it.',
      },
      visibility: {
        why: 'Promotion decisions are often made in meetings where you are not present. If the people in the room have never heard what you did, or hear it only second-hand, your good work cannot count for as much. Visibility is not self-promotion, it is giving accurate information to the people who decide.',
        roles: [
          'Appraisal and calibration meetings, where managers speak for the people they manage',
          'Cross-team and client work, where people outside your team form their view of you',
          'Larger organisations and offices, where decision makers may not see your daily work',
        ],
        routine: [
          'Days 1 to 3: Start a running achievements note and fill it in for the past six months from your mails, files and messages.',
          'Days 4 to 7: Send your manager a five-line update covering done, in progress, blocked, next and one result, and repeat it every second week.',
          'Days 8 to 11: Prepare a three-minute talk on one piece of your work: problem, what you did, result and what is next.',
          'Days 12 to 14: Give that talk in a team meeting, a client call or an internal write-up, and ask one listener what stood out.',
        ],
        mistakes: [
          'Assuming good work will be noticed without anyone telling the story',
          'Sharing only activity, such as "I attended" or "I worked on", without the result',
          'Letting your manager find out about your achievements from others, or only at review time',
        ],
        proof: [
          'A dated record of achievements that you update every week',
          'Updates, mails or presentations that show you shared results at regular intervals',
          'A comment from someone outside your team that shows they know what you do',
        ],
        askOthers: 'If someone asked you what my main contributions were this year, what would you say, and what do you think I should be sharing more clearly?',
        talkingPoints: [
          'You share progress and results in a clear, honest way',
          'People outside your team know what you do',
          'You keep records so that your review is based on facts',
        ],
        midStep: 'Send your manager one five-line update this Friday, covering what you finished, what is in progress and the result of your best piece of work.',
      },
      allies: {
        why: 'A promotion is a decision made by people, usually based on a recommendation from your manager and the support of others. If your manager does not know you want to grow, or nobody senior can speak about your work, even strong results may not turn into a case.',
        roles: [
          'Any workplace where your manager has to recommend you before a decision is made',
          'Organisations with a review committee or a calibration meeting, where several leaders discuss many people',
          'Government and bank jobs, where seniors and reporting officers write or review your annual performance report',
        ],
        routine: [
          'Days 1 to 3: Write the three sentences you will say to your manager: where I am, where I want to go, and what I need from you. Book 30 minutes.',
          'Days 4 to 7: Have the conversation. Ask what you would need to show to be considered, and note the answer and the timeline.',
          'Days 8 to 11: Ask HR or a trusted senior how promotions work: who recommends, who approves, in which month, and what paperwork is needed.',
          'Days 12 to 14: Choose one senior person outside your line, share a piece of your work, and ask for their view. Thank them with a short follow-up.',
        ],
        mistakes: [
          'Waiting for your manager to raise promotion without ever asking',
          'Going around your manager to seniors, which can damage trust',
          'Treating relationships as favours to ask for later, instead of being useful to people regularly',
        ],
        proof: [
          'Notes from a growth conversation with your manager, with agreed next steps',
          'A page describing how promotion decisions work in your organisation',
          'A senior person who has seen your work and given you feedback',
        ],
        askOthers: 'What do you think I would need to show over the next year for you to be comfortable recommending me for the next level?',
        talkingPoints: [
          'You have talked openly with your manager about growth',
          'You understand how and when promotion decisions are made',
          'You have built relationships across teams by being useful',
        ],
        midStep: 'Book 30 minutes with your manager this week and ask what you would need to show to be considered for the next level.',
      },
      skills: {
        why: 'A promotion is a bet that you can do the next job. Decision makers look for early signs, such as planning, deciding, influencing and guiding others. Knowing what the next job actually needs, and practising it ahead of time, makes the bet an easy one to take.',
        roles: [
          'Moves from junior to senior individual contributor, where owning outcomes becomes more important than tasks',
          'Moves from individual contributor to team lead, where working through others becomes the main skill',
          'Government, bank and PSU promotions, where exams and interviews test the knowledge of the higher post',
        ],
        routine: [
          'Days 1 to 3: Find two people at the next level and ask for 20 minutes each about a normal week, key skills and common mistakes.',
          'Days 4 to 7: Write the three largest gaps between your work and theirs, and pick one skill to practise in the next 30 days.',
          'Days 8 to 11: Ask your manager for one small task that uses that skill, such as planning a mini-project or reviewing someone\'s work.',
          'Days 12 to 14: Finish the task, ask for feedback in writing or aloud, and note one thing to repeat and one to change.',
        ],
        mistakes: [
          'Becoming faster at your current tasks and believing that is the same as being ready for the next level',
          'Collecting courses and certificates without using the skill on real work',
          'Never asking for feedback on gaps because you fear what you will hear',
        ],
        proof: [
          'A small project or task where you used a skill from the next level',
          'Written feedback from a manager or senior on your strengths and gaps',
          'A learning note listing what you practised and what you changed after feedback',
        ],
        askOthers: 'What are the two or three skills you would want to see in me before I move to the next level, and where do you see me at present?',
        talkingPoints: [
          'You know exactly what the next role needs',
          'You have asked for feedback on your gaps and acted on it',
          'You have already used one next-level skill on real work',
        ],
        midStep: 'Ask one person at the next level what skill they use most in a normal week, and plan one small task to practise it.',
      },
    },
    thirtyDay: [
      'Week 1: Write your results list, start the achievements note, and book 30 minutes with your manager to talk about growth.',
      'Week 2: Hold that conversation, learn how promotion decisions work in your organisation, and send your first five-line update.',
      'Week 3: Take up one finishable piece of work beyond your description, and talk to two people at the next level about their week.',
      'Week 4: Close the extra work with a short note, ask for feedback on one gap, and retake the assessment to compare each area score.',
    ],
  },

  extras: [
    // Early career
    x(['early'], 'results', 'I check my work before I hand it over, so that my manager rarely has to return it for basic corrections.', 'Before each submission, run a two-minute check on the usual errors: numbers, names, dates, links and format. Keep the list on your phone and add to it each time a mistake is pointed out.'),
    x(['early'], 'allies', 'I have not yet told my manager that I want to grow, because I think I am too new to ask.', 'Use a one-to-one to say: "I enjoy this work and I would like to grow. What should I focus on this year?" Asking early is a sign of seriousness, and it gives your manager time to help.', true),
    x(['early'], 'skills', 'When I do not understand a task, I ask a question early instead of guessing or waiting.', 'Write your question in two lines: what you tried and what you are stuck on. Ask within the first hour of being stuck, so you learn faster and your manager sees you as someone who takes responsibility.'),
    x(['early'], 'visibility', 'I know my own goals for this year and I track my progress against them.', 'Ask your manager for your goals in writing if you do not have them. Make a simple sheet with goal, progress and date, and update it every Friday so your first appraisal is not a surprise.'),
    // Mid career
    x(['mid'], 'scope', 'I own at least one area, process or client where people come to me before they go to my manager.', 'Choose one area where you already know the most, write a one-page guide for it and tell your team you are the contact. Ownership grows when people can name the area that is yours.'),
    x(['mid'], 'visibility', 'People above my manager know what I have achieved in the last year.', 'Ask your manager if you can present one piece of work to a wider group or leader this quarter. If not, share a short written summary with a skip-level leader after your manager has seen it.'),
    x(['mid'], 'allies', 'I have a sponsor, someone senior who will argue for me when I am not in the room.', 'Think of one senior person who has seen your work and ask them for advice on a real decision. Sponsorship usually grows from useful advice and good results, not from asking someone to be your sponsor.'),
    x(['mid'], 'skills', 'I regularly mentor or review the work of juniors in a way that improves their output.', 'Choose one junior and offer a weekly 20-minute review of a real piece of their work for the next month. Write down what changed in their work so you can describe it in your next appraisal.'),
    // Team lead
    x(['lead'], 'results', 'My team delivers its targets even in weeks when I am away or busy elsewhere.', 'Write down which decisions only you make and pick two to hand over this month, with clear limits. A team that runs without you is stronger proof of leadership than a team that depends on you.'),
    x(['lead'], 'scope', 'I do most of the hardest tasks myself because it is faster than explaining them to my team.', 'Choose one hard task per week to delegate. Explain the goal, give an example of good work, agree a check-in date and resist taking it back. It will be slower at first and faster after a month.', true),
    x(['lead'], 'allies', 'I regularly work with other teams or leaders to solve problems that affect my team.', 'List the two teams your team depends on most, and set a 20-minute call with each lead every two weeks to clear blocks early. Note which problems you solved together for your appraisal.'),
    x(['lead'], 'skills', 'I help each team member grow, with a clear next step for each one.', 'For each person, write one skill to build in the next quarter and one task to practise it. Review this in a monthly one-to-one. Growing others is the clearest sign that you are ready for a manager role.'),
    // Government, bank, PSU
    x(['govt'], 'results', 'I know the exact eligibility for the next post, such as years of service, scale or grade, and required qualifications or exams.', 'Download the promotion or recruitment rules for your cadre from the official source and write the conditions on one page. Check each condition against your own record and note the date you will meet each one.'),
    x(['govt'], 'allies', 'I have checked that my annual performance reports and service record are complete, and I have raised any error or missing entry.', 'Ask your establishment or HR section for a look at your service record. Note missing reports, training entries or wrong dates, and submit a written request to correct them within the time the rules allow.', false),
    x(['govt'], 'skills', 'I am preparing for any departmental or internal promotion exam from the official syllabus, and not only from what colleagues say.', 'Get the latest syllabus and exam notification from the official source. Plan a weekly study schedule backwards from the exam date, and use past papers if your department publishes them.'),
    x(['govt'], 'visibility', 'I know where I stand on the seniority list and what usually changes the order, such as the date of joining or the merit ranking.', 'Find the latest seniority list in the official notice, check your name, date and category, and raise any error in writing at once. You cannot change the list order, but you can make sure your entry is correct.'),
  ],

  stageAdvice: {
    early: {
      results: sa('In your first years, your results are judged mostly on whether you are dependable and learn quickly.', 'Keep a checklist for your most repeated task and use it for four weeks, so the errors that bring corrections stop.', 'Each Friday, write one line on what you finished and what it led to, so that your first appraisal is written from notes.'),
      scope: sa('Early on, you may feel there is no room to do more than the tasks you are given.', 'After finishing your tasks for the week, ask your manager if there is a small related job you can take, such as updating a document or tracking a report.', 'Offer to help with one task that your team finds boring but important, and finish it well.'),
      visibility: sa('Early in your career, your manager is often the only person who knows your work, and a new manager may know little of it.', 'Send a short end-of-week summary to your manager for a month, with three lines on what is done, what is next and any block.', 'Introduce yourself to the people who use your work and ask what they find useful, so that they know your name.'),
      allies: sa('Early on, you may not yet know how promotions work or whether it is acceptable to ask.', 'In your next one-to-one, ask: "What would you like to see from me over the next year?" and write down the answer.', 'Ask a colleague who was recently promoted what they think made the difference, and how long it took in their case.'),
      skills: sa('Early on, the skills for the next level are mostly about independence, such as working without constant guidance.', 'Pick one task you usually ask for help on, try it alone first, write your attempt and ask for a review.', 'Learn one tool or process that your seniors use daily, with a 30-minute practice session on three days each week.'),
    },
    mid: {
      results: sa('At mid career, strong personal output is expected, so the question is the size and effect of what you deliver.', 'Choose one result this year where you can show a before-and-after change, and gather the evidence in a one-page note.', 'Ask your manager which outcome is most important to the business this quarter, and attach your top project to it.'),
      scope: sa('At mid career, scope means owning problems, not doing more tasks.', 'Write a one-page proposal for a problem that your team keeps facing, with the cause, a plan and what you need, and share it with your manager.', 'Take the lead on one cross-team piece of work, with a clear goal and date, instead of only contributing to it.'),
      visibility: sa('At mid career, you may be well known to your team but not to the leaders who decide on promotions.', 'Ask to present your work in a review or to a skip-level leader once this quarter, with your manager\'s agreement.', 'Write an internal note on something you learned from a project and share it with the wider team or department.'),
      allies: sa('At mid career, a manager\'s support alone may not be enough, because bigger roles are discussed by several leaders.', 'Identify two senior people who see your work indirectly and give each one a reason to talk, such as asking for advice on a decision.', 'Ask your manager who else will be consulted about your promotion, and how you can help them see your work.'),
      skills: sa('At mid career, the new skills are influence, planning and guiding others.', 'Mentor one junior for a month on a real task and write what they did better because of it.', 'Lead the planning for a project, with timeline, risks and owners, and ask your manager for feedback on the plan.'),
    },
    lead: {
      results: sa('As a team lead, your results are your team\'s results, and one strong individual output can hide a weak team system.', 'Pick two team measures, such as delivery on time and quality, track them weekly and share the trend with your manager.', 'Write the three biggest team outcomes of the year and what you changed to make them possible.'),
      scope: sa('As a team lead, scope means moving from doing the work to making sure it gets done, across the team and beyond.', 'Hand over one task you do by yourself, set up a check-in and review the outcome after two weeks.', 'Take on one problem that involves another team, and agree on a shared goal and meeting rhythm with their lead.'),
      visibility: sa('As a team lead, your visibility depends on how clearly you explain your team\'s results, not only your own.', 'Prepare a one-page monthly note on your team: results, risks, and what you are working on, and send it to your manager.', 'Give credit in public to team members for their work. Leaders notice leads who build visible teams.'),
      allies: sa('As a team lead, the people who judge you include your team, your peers and your manager\'s manager.', 'Ask three team members and one peer lead for a quick, honest view of what you do well and what to change.', 'Meet your manager\'s manager once this quarter, with your manager\'s knowledge, to share your team\'s progress and ask for advice.'),
      skills: sa('As a team lead, the next level calls for planning ahead, giving difficult feedback and balancing priorities.', 'Practise giving one piece of clear, kind feedback each week to a team member, and note how they responded.', 'Make a quarterly plan for your team with priorities, people and risks, and ask your manager to review it.'),
    },
    govt: {
      results: sa('In government, bank and PSU jobs, your results are recorded in annual performance reports, and promotion rules decide how much weight they carry.', 'Write your key work and achievements for the year before your report is written, with dates and supporting papers, and give them to your reporting officer if the process allows.', 'Make sure targets, branch or office figures and training entries for your year are recorded correctly.'),
      scope: sa('In rule-based services, taking up work beyond your post is valued, but it must be within the rules and approved by your seniors.', 'Ask your officer for a committee, audit, training or project role that fits your post, and get it recorded in writing.', 'Learn the work of the next post, such as the registers, files or schemes handled there, so you can act on it when asked.'),
      visibility: sa('In a service with seniority lists, visibility means correct records and being known by the officers who write your report.', 'Check your seniority list entry and service record, and raise any error through the proper channel in writing.', 'Share your completed work with your reporting officer in a short note at the end of each quarter.'),
      allies: sa('In government and bank jobs, promotion rests on rules, so your relationships matter in how well you are guided and how fairly your record is written.', 'Respectfully ask a senior who has been promoted in your cadre how the process worked for them and what mistakes to avoid.', 'Keep a polite and professional relationship with your reporting and reviewing officers, and never seek favours outside the rules.'),
      skills: sa('For many government and bank promotions, departmental exams, tests or interviews decide eligibility, along with seniority.', 'Download the latest official syllabus and make a weekly study plan that fits around your duty hours.', 'Read the circulars, manuals and rules for your department that relate to the next post, and make short notes for revision.'),
    },
  },

  scenarios: [
    sc('results', 'At your mid-year review, your manager asks, "What were your biggest results this year?" You have not made notes. What do you do?', [
      o('List everything you worked on in order, to show how busy you have been', 33, 'A long list of activity does not tell your manager what changed. Choose two or three pieces of work and say what difference each made.'),
      o('Name two results from memory, say what changed because of each, and offer to send details in writing by tomorrow', 100, 'Strong. A short, clear answer followed by written proof works well. From now on, keep a weekly note so that you do not depend on memory.'),
      o('Say that your manager has seen your work and knows what you have done', 0, 'Your manager sees only part of your work and may not remember it at review time. Always be ready to state your results yourself.'),
      o('Talk about how hard you worked and the long hours you put in', 17, 'Effort matters, but decisions are based mostly on outcomes. Replace hours with what you delivered and what changed.'),
    ]),
    sc('results', 'You notice that your recurring weekly report often goes to your manager with small errors, and she corrects them. What do you do?', [
      o('Keep going as you are, since she corrects them anyway', 0, 'Corrections cost your manager time and make her wonder whether she can rely on you. Reliability is a base for promotion.'),
      o('Make a short checklist of the common errors, check against it before sending for the next month, and tell her what you changed', 100, 'Strong. Removing the cause and telling your manager shows ownership. After a month, ask whether the report now needs fewer corrections.'),
      o('Send it earlier so that she has more time to fix the errors', 33, 'Sending early helps, but it moves the problem instead of solving it. Find why the errors happen and fix that.'),
      o('Check it more carefully this week, and go back to the old way if you are busy', 67, 'Extra care helps for a while, but a checklist keeps the improvement when you are busy. Write the checks down and make them part of the routine.'),
    ]),
    sc('scope', 'Your team has a recurring problem, such as late handovers or a messy shared file, that nobody owns. What do you do?', [
      o('Mention it in the meeting and wait for someone to be assigned', 33, 'Raising it is a start, but you remain a spectator. Offer a small first step you can own.'),
      o('Propose a small fix, agree with your manager on what finished looks like, finish it in three weeks and report the result', 100, 'Strong. A small, finished, owned fix is the best proof of scope. Ask afterwards if there is a related problem you can take on.'),
      o('Start fixing it quietly on your own, without telling anyone', 50, 'Initiative is good, but silent work may conflict with others or never be linked to you. Tell your manager before you start and report when you finish.'),
      o('Leave it, as it is not part of your job and your tasks are already full', 0, 'Not every problem is yours, but never choosing any removes your chance to show you can do more. Choose one that is small and valuable.'),
    ]),
    sc('scope', 'You have agreed to take on extra work, and halfway through your regular tasks get busy. What do you do?', [
      o('Drop the extra work quietly and focus on your regular tasks', 17, 'Quietly dropping a commitment damages trust. Speak up early if you cannot finish it.'),
      o('Tell your manager what is at risk, agree on a revised date or scope for the extra work, and deliver what you promise', 100, 'Strong. Honest re-planning protects both your regular work and your reputation. Next time, estimate time before you agree.'),
      o('Work late every day to finish everything without telling anyone', 50, 'Finishing is good, but doing so in silence is not sustainable and nobody knows the effort. Share the trade-off with your manager.'),
      o('Finish the extra work and let regular tasks slip, since extra work looks better', 33, 'Your core work is the base of your case, and letting it slip can undo the benefit. Protect both by agreeing priorities.'),
    ]),
    sc('visibility', 'You finished a project that saved your team several days of effort, but the update went only to your team. What do you do?', [
      o('Wait and see if anyone mentions it in the next review', 0, 'Waiting leaves the story to chance. Share it yourself, in a factual way.'),
      o('Send your manager a short note with what the problem was, what you did, and what changed, and ask whether it can be shared more widely', 100, 'Strong. A factual note makes it easy to pass on and respects your manager\'s role. Add it to your achievement record.'),
      o('Post about it widely on every channel you can find', 33, 'Sharing widely can feel like self-promotion and may skip your manager. Start with your manager, then share where it helps others.'),
      o('Mention it casually to colleagues over lunch', 50, 'Word of mouth helps a little, but decision makers need a clear, written version. Follow it with a short note.'),
    ]),
    sc('visibility', 'You are asked to speak for five minutes at a team meeting where two senior leaders will attend. How do you prepare?', [
      o('Decline politely, as you are not comfortable and your work speaks for itself', 17, 'Your work does not speak unless someone tells its story. Say yes, and prepare well.'),
      o('Say yes, prepare a three-point talk on the problem, your action and the result, and practise it aloud twice with a colleague', 100, 'Strong. A clear structure and practice make you easy to follow and remember. Ask a colleague what stood out afterwards.'),
      o('Say yes, and prepare many slides covering everything you did this year', 33, 'More slides often mean less clarity. Choose the three points that matter and cut the rest.'),
      o('Say yes, and decide to speak naturally without preparing', 50, 'Natural speaking can work, but without structure you may spend your five minutes on details. Prepare a short outline at least.'),
    ]),
    sc('allies', 'Your manager has been very busy and you have not had a one-to-one for two months. You want to discuss your growth. What do you do?', [
      o('Wait until the annual review, since that is the formal time', 33, 'By the annual review, decisions may already be formed. Ask earlier, when you can still act on what you hear.'),
      o('Send a short message asking for 30 minutes, say what you want to discuss, and come prepared with your results and one question', 100, 'Strong. A clear request, a stated purpose and preparation make it easy for a busy manager to say yes. Follow with a short summary.'),
      o('Raise it briefly in the corridor when you meet your manager', 50, 'A quick word starts the idea, but a serious topic needs a proper slot. Use it to ask for the meeting.'),
      o('Ask a senior colleague to speak to your manager on your behalf', 17, 'Going through someone else weakens your case and may surprise your manager. Have the conversation yourself first.'),
    ]),
    sc('allies', 'Your manager tells you that you are doing well but gives no timeline for a promotion. How do you respond?', [
      o('Accept the answer and keep working, since pushing might look pushy', 33, 'Politely checking is not pushy. Without details you cannot plan, and your manager may think you are happy to wait.'),
      o('Thank them, then ask what specific things you should show and when the next decision point is, and note the answers', 50, 'Good, you are asking for specifics. Add a follow-up date, and ask whether budget or openings could affect the timing.'),
      o('Say you will start looking for other jobs if there is no promotion soon', 0, 'An ultimatum without preparation can harm trust and may not be what you want. If you are considering leaving, decide that calmly and separately.'),
      o('Ask what you need to show, when the next decision cycle is, and whether openings or budget could affect the timing, and agree on a date to review progress', 100, 'Strong. You get details, you learn what is outside your control, and you set a follow-up. Keep a record and use the date to check in.'),
    ]),
    sc('skills', 'You are asked to run a small project for the first time, which is something people at the next level do. How do you approach it?', [
      o('Do it by yourself in your usual way and hope it goes well', 33, 'Doing it alone may work, but you miss the planning and coordination skills the project is meant to show. Plan it deliberately.'),
      o('Turn it down, as you have not done it before and fear a mistake', 0, 'Chances like this are how people show readiness. Ask for guidance, but take it on.'),
      o('Write a simple plan with goal, tasks, dates and risks, share it with your manager, check in weekly and ask for feedback at the end', 100, 'Strong. A plan, regular check-ins and feedback show planning skills and a learning attitude. Keep the plan as proof.'),
      o('Ask your manager to tell you step by step what to do', 50, 'Asking for guidance is wise, but the next level expects you to bring a plan. Draft one first and ask your manager to correct it.'),
    ]),
    sc('skills', 'You want to build a skill for the next level and have a week of free evenings. How do you use it?', [
      o('Ask someone at that level which skill matters most, choose one, and practise it on a real task at work', 100, 'Strong. Choosing the right skill and applying it to real work builds usable proof. Ask for feedback after a few weeks.'),
      o('Sign up for several courses at once so you cover many skills', 17, 'Too many courses at once means little practice. Choose one skill and apply it.'),
      o('Finish an online course in your own field and collect the certificate', 50, 'A course can help, but a certificate alone rarely shows readiness. Use what you learn on a real task.'),
      o('Read articles about leadership and promotion over the week', 33, 'Reading helps awareness, but skills develop by doing. Turn one idea into a small action at work.'),
    ]),
    { ...sc('results', 'You are in your first or second year and your manager says, "You are doing fine." You want to know more. What do you ask?', [
      o('Nothing, as "doing fine" is good enough', 17, '"Fine" is not specific enough to act on. Ask for more detail so you know what to keep and what to improve.'),
      o('Ask what "fine" looks like to them, which one thing would make your work stronger and how you can check your progress', 100, 'Strong. Specific questions turn general praise into a plan. Write down the answers and review them in a month.'),
      o('Ask whether you will be promoted next year', 33, 'Asking about a timeline too soon can put your manager on the spot. First learn what is expected, then ask about the process.'),
      o('Ask a colleague what the manager thinks of you', 50, 'A colleague may not know. Ask your manager directly, which also shows maturity.'),
    ]), stages: ['early'] },
    { ...sc('scope', 'You are a senior individual contributor and you suspect your work is bigger than your title, but nothing is written down. What do you do?', [
      o('Wait, as your work will be recognised in time', 17, 'Recognition rarely arrives by itself. Put your scope in writing and share it.'),
      o('Write a one-page note listing what you own, who depends on you and what outcomes you drive, share it with your manager and ask how it compares to the next level', 100, 'Strong. A written note makes the scope visible and starts a useful conversation about the level. Update it every quarter.'),
      o('Tell your manager you deserve a higher title because you do more than others', 33, 'Comparing yourself with others invites an argument. Show the scope with facts and ask how it compares with the next level.'),
      o('Begin to do less until your title matches your work', 0, 'Reducing your effort damages your reputation and the case you have built. Show the scope, do not withdraw it.'),
    ]), stages: ['mid'] },
    { ...sc('skills', 'You are a team lead and a team member makes a repeated mistake. You prefer to fix it yourself to save time. What do you do?', [
      o('Fix it yourself quietly and keep the team running', 33, 'This saves time today but teaches nothing and keeps you busy. Use the mistake to coach.'),
      o('Show the person the error, explain what good looks like, let them fix it and agree on a quick check next week', 100, 'Strong. Coaching on a real task builds the team and shows leadership. It takes longer at first and saves time later.'),
      o('Tell them off in the team meeting so that others learn too', 0, 'Public criticism damages trust and rarely improves work. Give feedback privately, specifically and kindly.'),
      o('Send them a message listing the correct steps and leave it there', 50, 'Written steps help, but a short conversation shows you care and lets them ask questions. Add a follow-up.'),
    ]), stages: ['lead'] },
    { ...sc('allies', 'You work in a government department or bank. A promotion exam notification has come out, but a colleague says seniority matters more and preparation is not worth it. What do you do?', [
      o('Skip the exam, since seniority will decide', 17, 'You may be eligible only if you take part, and rules differ by department. Check the official rules before you decide.'),
      o('Read the official rules on how exam marks, seniority and reports are used, then prepare for the exam from the official syllabus and apply on time', 100, 'Strong. You rely on the rules, not on rumours, and you do what is in your control. Keep the notification dates in your diary.'),
      o('Prepare for the exam only if a senior tells you it matters', 33, 'Seniors have useful experience, but rules change. Read the official notice yourself first.'),
      o('Apply, but spend little time preparing since the result depends on the list', 50, 'Applying is correct, but if marks count, preparation is the part you control. Study as per the official syllabus.'),
    ]), stages: ['govt'] },
  ],

  phrases: {
    results: [
      '"This year I delivered ..., which led to ..."',
      '"The target was ... and I reached it by ..."',
      '"One thing I changed to avoid repeat errors is ..."',
    ],
    scope: [
      '"I noticed that ... has no owner. May I take the first step on it?"',
      '"Alongside my regular work, I also handled ..., and the result was ..."',
      '"I can take this on and share a plan by ... Does that work?"',
    ],
    visibility: [
      '"Here is a short update: done ..., in progress ..., blocked on ..., next ..."',
      '"Something that went well this month was ... and it helped us ..."',
      '"I would like to share what I learned from ... with the wider team."',
    ],
    allies: [
      '"What would you want to see from me over the next year to consider me for the next level?"',
      '"Could you tell me how promotion decisions are made here, and when?"',
      '"I would value your advice on how I handled ... Do you have 15 minutes?"',
    ],
    skills: [
      '"What do you spend most of your week on at your level, and which skills matter most?"',
      '"My biggest gap for the next level seems to be ..., and I am working on it by ..."',
      '"Could I take on ... as a small task to practise ...?"',
    ],
  },

  stagePlan: {
    early: [
      'Start a weekly note of what you finished and what changed, and write a checklist for your most repeated task.',
      'Ask your manager in a one-to-one what you should show over the next year for the next level, and write down the answer.',
      'Take one small, finishable piece of extra work and report the result in a few lines.',
      'Choose one skill your seniors use, ask for a task that practises it, and ask for feedback after a month.',
    ],
    mid: [
      'Write a one-page note on what you own, who depends on you and what outcomes you drive.',
      'Take up one problem bigger than your usual tasks, with a plan and a date, and report the result.',
      'Mentor one junior on a real task and ask a senior outside your line to look at one piece of your work.',
      'Ask your manager how promotion decisions are made, who else is consulted and when, and agree on a follow-up date.',
    ],
    lead: [
      'List the tasks only you can do, and hand over one with clear expectations and a check-in date.',
      'Track two team measures weekly, and write a one-page monthly note on your team\'s results for your manager.',
      'Set a growth step for each team member, review it monthly and give them credit in public.',
      'Ask your manager and a peer lead for honest feedback, then ask which team outcomes they would point to for a recommendation.',
    ],
    govt: [
      'Read the promotion rules for your cadre from the official source and write down the eligibility, exams and reports required.',
      'Check your service record, seniority list entry and annual performance reports, and request corrections in writing.',
      'Study for any departmental or internal exam from the official syllabus, with a weekly plan fitted around duty hours.',
      'Record your work, training and achievements each quarter, and share them with your reporting officer as the rules allow.',
    ],
  },

  talk: {
    results: {
      q: 'What have been your most important results in the last year?',
      a: 'Pick two or three results, and for each one state the goal, what you personally did and what changed. Keep numbers only if they come from your own records, and say honestly which parts were done by the team.',
      line: 'Delivered [result] by [action], which led to [change] over [period].',
    },
    scope: {
      q: 'Tell me about a time you took on work outside your role.',
      a: 'Name the problem nobody owned, explain why you chose it, what you did and how you agreed it with your manager. End with the result and what you learned or handed over to others.',
      line: 'Took ownership of [problem or process] beyond my role, completed it in [time] and achieved [result].',
    },
    visibility: {
      q: 'How do you make sure your work and results are known to others?',
      a: 'Describe a simple habit: a weekly note, a regular update to your manager, or a short presentation. Give one example where sharing a result helped someone else or led to a decision.',
      line: 'Shared [project or result] with [audience] through [update, presentation or write-up], leading to [outcome].',
    },
    allies: {
      q: 'Why do you feel ready for the next level, and what has your manager said about it?',
      a: 'Say that you discussed your growth with your manager, state the two or three things you agreed to show, and give an example of each that you have already done. Do not assume a timeline, because it also depends on openings and budget.',
      line: 'Agreed growth plan with [manager or mentor] and completed [steps], with feedback from [people] on [area].',
    },
    skills: {
      q: 'What skills are you building for the next role?',
      a: 'Name the one or two skills the next level needs, say how you learned about them, and give a real task where you practised them. Mention the feedback you received and what you changed.',
      line: 'Building [skill] for [next role] through [task or project], with feedback from [person] and a change in [area].',
    },
  },

  talkTitles: {
    strong: 'How to show this strength in an appraisal, an internal interview or on your CV',
    weak: 'How to answer if you are asked about your weakest area',
    intro: 'Promotion cases are made of examples. Prepare one true example for each area, with what you did and what changed because of it.',
    mode: 'interview',
  },
};
