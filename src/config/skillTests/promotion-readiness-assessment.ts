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
      'Asking "am I ready for a promotion?" usually gets one answer: work harder. Promotions depend on more than effort. This free self-assessment checks five areas: delivering results at your current level, working beyond your job description, making your work visible, your relationships with your manager and sponsors, and the skills for the next level. It then shows which one to work on first. It cannot promise a promotion, because company budgets and open positions are outside your control.',
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
      { d: 'results', text: 'I can name two or three results from the past year that my manager would agree were mine.' },
      { d: 'scope', text: 'I regularly take on useful work that is not written in my job description.' },
      { d: 'visibility', text: 'My manager and other decision makers could describe my main achievements without my reminding them.' },
      { d: 'allies', text: 'I have discussed with my manager what I would need to show to be considered for the next level.' },
      { d: 'skills', text: 'I can describe how the next role differs from mine in the kind of work involved, not only in the title.' },
      { d: 'results', text: 'Others rarely need to correct my regular work.' },
      { d: 'scope', text: 'I have helped a junior or new colleague become productive on a specific task.' },
      { d: 'visibility', text: 'I keep a running record of my achievements, with dates and what changed because of them.' },
      { d: 'allies', text: 'There is a senior person other than my direct manager who knows my work well enough to speak about it.' },
      { d: 'skills', text: 'I have started practising at least one skill that people at the next level use every day.' },
      { d: 'results', text: 'I judge my work by how many hours I put in and tasks I finish, not by what changed because of it.', reverse: true },
      { d: 'scope', text: 'When a task falls between two roles, I usually wait for someone else to pick it up.', reverse: true },
      { d: 'visibility', text: 'I assume good work will be noticed on its own, without my having to say anything.', reverse: true },
      { d: 'allies', text: 'I avoid raising topics like my growth or promotion with my manager because it feels awkward.', reverse: true },
      { d: 'skills', text: 'I have never checked what people one level above me actually do through a normal week.', reverse: true },
      { d: 'results', text: 'I have taken on one goal that was harder than my usual targets and delivered it.' },
      { d: 'scope', text: 'When I take on extra work, I see it through to the end instead of leaving it half done.' },
      { d: 'visibility', text: 'I usually share my progress with my manager only when I am asked for it.', reverse: true },
      { d: 'allies', text: 'I understand how promotion decisions are made in my organisation, including who recommends and who approves.' },
      { d: 'skills', text: 'I have asked someone for feedback on my gaps for the next level.' },
      { d: 'results', text: 'My good results often come in one quarter and then drop in the next.', reverse: true },
      { d: 'scope', text: 'I have led or coordinated a piece of work, even a small one, where other people depended on me.' },
      { d: 'visibility', text: 'People in other teams could tell you what my work is.' },
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
          'Your career stage changes the weight. Early in your career, reliable results and a clear talk with your manager matter most. Senior individual contributors need scope and influence. Team leads need to show they can work through others. In government, bank and PSU jobs, written service rules and seniority carry more of the decision, so check your own rules.',
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
        a: 'You can tell by checking five things: results at your current level, work beyond your job description, visibility of your work, support from your manager and sponsors, and skills for the next level. This assessment rates each part so you can see which are in place and which need work. It cannot tell you whether a promotion will happen, as budgets and openings also matter.',
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
        a: 'Yes. You choose your stage, including government, bank or PSU employees, where promotion follows written service rules. The extra questions and advice then focus on checking your service rules, your seniority entry, your annual performance reports and what you can still influence. Your service rules and official circulars always come first.',
      },
      {
        q: 'Can freshers or people with less than three years of experience use it?',
        a: 'Yes. The early career stage covers the first few years of work, with questions on reliability, learning and having a first conversation with your manager about growth. You do not need a long record to use it.',
      },
      {
        q: 'What if I score high but my company says there is no budget or opening?',
        a: 'That can happen, and it does not mean your work is not valued. Ask your manager what the realistic timeline is and what you should keep building in the meantime. If there is no path at all, your area scores and examples can help you prepare for talking to other employers.',
      },
      {
        q: 'How do I ask my manager about a promotion?',
        a: 'Ask for a planned 30-minute conversation about growth, not a quick question in the corridor. Say where you are, where you want to go and ask what you would need to show for the next level, then write down the answer and agree a date to review it. The Manager, sponsors and relationships area of this assessment gives you the exact words to use.',
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
        description: 'Employee in a service where promotion follows written service rules',
        title: 'Know your rules and control what you can',
        body: 'In government departments, banks and public sector units, promotion usually follows written rules, such as eligibility conditions, any tests or interviews, seniority lists and annual performance reports. You may not control the vacancy or the list, but you control your record, your preparation and your paperwork. Rules differ by department and organisation, so your own service rules and official circulars come first.',
        actions: [
          'Read the promotion rules for your cadre or scale from the official source, and write down the eligibility conditions, any tests and the records that count.',
          'Check that your service record, training entries and annual performance reports are complete and correct, and ask your office to fix errors in good time.',
          'If your service rules include a test or interview for promotion, make a month-by-month plan from the official syllabus or notice and note the dates.',
        ],
      },
    ],
    tips: [
      'Sit down for 20 minutes and write three results from the past year in the form "I did X, and Y changed". Check each one with a colleague or a mail to see if it truly was your own work.',
      'Next week, ask your manager: "Is there a problem the team has that nobody owns?" Offer one small piece you can finish in two or three weeks, and do not start something you cannot complete.',
      'Put this question to your manager or one senior colleague: "What do you think are my main contributions this year?" If their answer misses something important, start sending a short update every two weeks.',
      'Book 30 minutes and ask: "What would I need to show in the next 12 months to be considered for the next level?" Write down the answer, and ask when the next review or promotion cycle is.',
      'Find two people already in the next role, ask for 20 minutes each, and ask: "What does a normal week look like, and what takes most of your time?" Write the differences from your own week.',
      'Pick the one task you do repeatedly where errors or delays happen, write a short checklist for it, and use it for the next four weeks. Reliability is built on removing repeat problems.',
      'Offer to teach a new colleague one specific thing this month, such as a tool or a process, in a 30-minute session, and ask them afterwards what they could do that they could not before.',
      'Create a note on your phone or a sheet with three columns: date, what I did, what changed. Add to it every Friday for ten minutes so your review is written from records, not memory.',
      'Choose one senior person you respect outside your reporting line. Send them a short message asking for 15 minutes of advice on one piece of your work, and share a one-page summary beforehand.',
      'Choose one skill from the next level, such as planning a project or presenting to seniors, and ask for a task that uses it. Practise it for four weeks and ask for feedback at the end.',
      'For the next month, write beside every task its outcome in one line: what is different because of it. Spend your best hours on the tasks where you can name a clear outcome.',
      'Next time work falls between roles, say in the meeting: "I can take this, and I will share a plan by Thursday." Choose something small enough to finish, so the habit starts with a success.',
      'Write a two-line update after each important piece of work and send it to your manager the same day. If you stay silent, your manager has nothing ready when someone asks about you.',
      'Write three sentences before your next one-to-one: where I am, where I want to go, and one question. Say them aloud once. The first conversation is usually the hardest, and the second is easier.',
      'Watch a senior colleague for one full day, or ask to shadow them for two hours. Write down three decisions they made that you would not have been asked to make at your level.',
      'Agree a target with your manager that stretches you, decide how it will be measured, and write a weekly plan. A stretch goal that you finish is stronger evidence than three easy ones.',
      'Before accepting extra work, check your week and say yes only to what you can finish within a month. When it is done, send a note: what I did, what it produced, and what I suggest next.',
      'Fix one day each week, such as Friday afternoon, and send your manager two lines on your progress without waiting to be asked. Prepare two sentences for your weekly team meeting and speak early, when it is easier to be heard.',
      'Find out from your HR section or a senior colleague who recommends and who approves a promotion, in which month decisions are taken, and what documents are needed. Write the answers on one page.',
      'Ask your manager: "What are my two biggest gaps for the next level?" Choose one and set a 30-day target. Ask again after a month and note the difference.',
      'Look at your last two review cycles and find what made the good quarter work, such as a checklist, a weekly plan or a regular check with your manager. Put that habit into your weekly routine so the next quarter does not slip.',
      'Take one small project that involves two or more people, set a goal and a date, share tasks, check progress weekly and report the result. This is the first proof of leading work.',
      'Next time you complete something, tell one colleague in another team what you did, and ask whether it could help them. Work spreads by word of mouth between teams.',
      'Each month, meet one colleague from another team for tea or a call, and ask about their biggest problem. Offer one useful thing within the week. Relationships are built by being useful before you need anything.',
      'When a decision has to be made and information is missing, write your assumption, your choice and your reason in three lines, and share it. Review the result later and note what you would change.',
    ],
    strongTip: 'This habit already supports a promotion case. Write down one real example of it, with a date and what changed, so you can use it in your next review.',
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
        why: 'Promotion decisions are often made in meetings where you are not present. If the people in the room have never heard what you did, or hear it only second-hand, your good work cannot count for as much. Visibility is not self-promotion: it is giving accurate information to the people who decide.',
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
          'Government, bank and PSU promotions, where your service rules may include tests or interviews on the work of the higher post',
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
    x(['govt'], 'results', 'My annual performance reports for the last few years describe my work fully and correctly.', 'Ask your office for copies of your last three reports, if the rules allow, and compare them with your own list of work done each year. Note any gaps and give your reporting officer a short written summary before the next report is written, if the process allows.'),
    x(['govt'], 'allies', 'I know the eligibility conditions for the next post and where they are written in my service rules.', 'Get the promotion rules for your cadre from the official source and write the conditions on one page. Check each one against your own record, and ask your office or a senior in writing if any condition is unclear.'),
    x(['govt'], 'skills', 'If my promotion involves a test or interview, I prepare from the official syllabus or notice and not only from what colleagues say.', 'Get the latest syllabus and notification from the official source. Plan a weekly study schedule backwards from the date, and use past papers only if your department publishes them.'),
    x(['govt'], 'visibility', 'I have seen the latest seniority list and checked that my own entry is correct.', 'Find the latest seniority list in the official notice, check your name and the details against your service record, and raise any error in writing at once. You cannot change the list order, but you can make sure your entry is correct.'),
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
      skills: sa('At mid career, the new skills are influence, planning and guiding others.', 'Pick one trade-off decision in your work this month, write the options, your choice and the reason on one page, and discuss it with a senior.', 'Lead the planning for a project, with timeline, risks and owners, and ask your manager for feedback on the plan.'),
    },
    lead: {
      results: sa('As a team lead, your results are your team\'s results, and one strong individual output can hide a weak team system.', 'Pick two team measures, such as delivery on time and quality, track them weekly and share the trend with your manager.', 'Write the three biggest team outcomes of the year and what you changed to make them possible.'),
      scope: sa('As a team lead, scope means moving from doing the work to making sure it gets done, even when you are not there.', 'Write a one-page note on the process that only you understand, and ask one team member to run it once using only the note.', 'Offer to take over a small task from your own manager, such as a weekly report or a review meeting, and handle it for a month.'),
      visibility: sa('As a team lead, your visibility depends on how clearly you explain your team\'s results, not only your own.', 'Prepare a one-page monthly note on your team: results, risks, and what you are working on, and send it to your manager.', 'Give credit in public to team members for their work. Leaders notice leads who build visible teams.'),
      allies: sa('As a team lead, the people who judge you include your team, your peers and your manager\'s manager.', 'Ask three team members and one peer lead for a quick, honest view of what you do well and what to change.', 'Meet your manager\'s manager once this quarter, with your manager\'s knowledge, to share your team\'s progress and ask for advice.'),
      skills: sa('As a team lead, the next level calls for planning ahead, giving difficult feedback and balancing priorities.', 'Practise giving one piece of clear, kind feedback each week to a team member, and note how they responded.', 'Make a quarterly plan for your team with priorities, people and risks, and ask your manager to review it.'),
    },
    govt: {
      results: sa('In government, bank and PSU jobs, your results are recorded in annual performance reports, and promotion rules decide how much weight they carry.', 'Write your key work and achievements for the year before your report is written, with dates and supporting papers, and give them to your reporting officer if the process allows.', 'Make sure targets, branch or office figures and training entries for your year are recorded correctly.'),
      scope: sa('In rule-based services, taking up work beyond your post is valued, but it must be within the rules and approved by your seniors.', 'Ask your officer for a committee, audit, training or project role that fits your post, and get it recorded in writing.', 'Learn the work of the next post, such as the registers, files or schemes handled there, so you can act on it when asked.'),
      visibility: sa('In a service with seniority lists, visibility means correct records and being known by the officers who write your report.', 'Check your seniority list entry and service record, and raise any error through the proper channel in writing.', 'Share your completed work with your reporting officer in a short note at the end of each quarter.'),
      allies: sa('In government and bank jobs, promotion rests on rules, so your relationships matter in how well you are guided and how fairly your record is written.', 'Respectfully ask a senior who has been promoted in your cadre how the process worked for them and what mistakes to avoid.', 'Keep a polite and professional relationship with your reporting and reviewing officers, and never seek favours outside the rules.'),
      skills: sa('In government, bank and PSU services, promotion may involve tests, interviews or seniority, depending on your service rules.', 'If a test or interview applies, get the latest official syllabus or notice and make a weekly study plan that fits around your duty hours.', 'Read the circulars, manuals and rules for your department that relate to the next post, and make short notes for revision.'),
    },
  },

  scenarios: [
    sc('results', 'At your mid-year review, your manager asks, "What were your biggest results this year?" You have not made notes. What do you do?', [
      o('Go through every project of the year in order, with dates, so that your manager can see how much ground you covered and how many things you handled', 33, 'A full tour shows activity but leaves your manager to work out what mattered. Pick the two or three pieces where something changed, and keep the rest for questions.'),
      o('Name two results you are sure of, say what changed because of each, and offer to send details in writing by tomorrow', 100, 'You gave a short answer with a result in it and promised proof. Repeat this at every review, and from this week spend ten minutes each Friday on a note so that you never depend on memory.'),
      o('Say that your manager has worked closely with you all year and already knows what you have delivered', 0, 'Your manager carries many people in mind and may remember only the latest weeks. Tonight, write three results with one line of outcome each and carry the list into every review.'),
      o('Talk about the extra hours, the weekends and the pressure you handled this year, so that your effort is properly understood', 17, 'Effort earns sympathy, but a review looks for what changed. Next time, replace each mention of hours with one line of outcome, such as a delay removed or a repeat complaint stopped.'),
    ]),
    sc('results', 'You notice that your recurring weekly report often goes to your manager with small errors, and she corrects them. What do you do?', [
      o('Carry on as before, because she corrects the errors anyway and the report still reaches the client on time', 0, 'Every correction costs your manager time and slowly lowers her trust in your work. This week, list the three most common errors and stop each one at its source.'),
      o('Write a short checklist of the usual errors, use it for the next month, and tell her what you changed', 100, 'You removed the cause and told your manager, which shows ownership. After four weeks, ask her whether corrections have reduced and keep her reply as proof.'),
      o('Send the report a day earlier each time, so that she has more time to fix the errors before it goes out', 33, 'Early sending gives her time but leaves the errors in place. Find out whether they come from rushed numbers, copied old files or unclear inputs, and fix that one cause.'),
      o('Read it twice with full attention this week, and ask a colleague to glance at it whenever you are in a hurry', 67, 'Extra care and a second pair of eyes work, but they depend on your mood and on a colleague\'s time. Turn what you check into a written list so it survives busy weeks.'),
    ]),
    sc('scope', 'Your team has a recurring problem, such as late handovers or a messy shared file, that nobody owns. What do you do?', [
      o('Raise it in the next team meeting, explain how much time it wastes for everyone, and wait for the manager to decide who should handle it', 33, 'Raising it is a fair start, but you stay a spectator while someone else is chosen. Next time, add one small step that you are ready to own.'),
      o('Offer to take a small piece of it, agree with your manager what done looks like, finish in about three weeks and report', 100, 'A small, finished and owned fix is the clearest sign of scope. Once it is closed, ask your manager whether a related problem is waiting.'),
      o('Start fixing it quietly in your spare time so that nobody feels you are interfering, and mention it once it works', 50, 'Initiative is good, but silent work may clash with someone else\'s plan or never be linked to you. Tell your manager before you begin, then report when you finish.'),
      o('Leave it alone, because it is not part of your job and your own tasks already fill the day', 0, 'Not every problem is yours, but never choosing one removes your chance to show you can do more. Pick one that is small, useful and finishable within a month.'),
    ]),
    sc('scope', 'You have agreed to take on extra work, and halfway through your regular tasks get very busy. What do you do?', [
      o('Let the extra work slide for now and return to it once your regular tasks calm down, since regular work is what you are paid for', 17, 'Letting a commitment slide without a word damages trust, even if your reason is fair. If you cannot finish, say so early and name a new date.'),
      o('Tell your manager what is at risk, agree on a new date or a smaller scope for the extra work, and deliver that', 100, 'Honest re-planning protects both your regular work and your name. Before you agree to the next extra task, check your week and estimate the hours.'),
      o('Work late every evening and over the weekend to finish both, and say nothing so that nobody worries about it', 50, 'Finishing is good, but silent overwork cannot last and nobody learns what it cost. Share the trade-off with your manager once, so the next deadline is set with that in mind.'),
      o('Finish the extra work first because it will be noticed more, and catch up on regular tasks later in the month', 33, 'Your regular work is the base of your case, and letting it slip can cancel the benefit. Agree on priorities with your manager before you choose.'),
    ]),
    sc('visibility', 'You finished a project that saved your team several days of effort, but the update went only to your team. What do you do?', [
      o('Wait for the next review, since your manager is likely to mention a project that clearly saved so much effort', 0, 'Waiting leaves your story to chance and to someone else\'s memory. Write three lines on it today and keep them in your achievement note.'),
      o('Send your manager a short note on the problem, what you did and what changed, and ask if it can be shared further', 100, 'A factual note is easy to pass on and respects your manager\'s role. Add the same lines to your running record so they are ready at review time.'),
      o('Post about it in every group and channel you belong to, with the details, so that everyone sees it quickly', 33, 'Posting everywhere can feel like self-promotion and may skip your manager. Start with your manager, then share where the work can help other people.'),
      o('Mention it casually to colleagues from other teams over tea or lunch whenever the subject comes up', 50, 'Word of mouth helps a little, but decision makers rely on something clear and written. Follow each chat with two lines by mail to the person who matters.'),
    ]),
    sc('visibility', 'You are asked to speak for five minutes at a team meeting where two senior leaders will attend. How do you prepare?', [
      o('Decline politely and offer to send a written summary instead, since you are not comfortable speaking before senior people', 17, 'A written summary is useful, but turning down the stage hides your work from the same people. Say yes this time and start with a short talk to two colleagues.'),
      o('Say yes, prepare three points on the problem, your action and the result, and practise aloud twice with a colleague', 100, 'A clear structure and some practice make you easy to follow and to remember. Afterwards, ask your colleague what stood out and what was unclear.'),
      o('Say yes and prepare a detailed deck that covers every project of the year, so that nothing important is missed', 33, 'More slides usually mean less clarity, and five minutes will run out. Choose the three points that matter and keep the rest for questions.'),
      o('Say yes and prepare only a few notes, because you know your work well and a natural talk sounds more honest', 50, 'Speaking naturally can work, but without a structure the minutes go on details. Write a three-line outline and rehearse the opening sentence once.'),
    ]),
    sc('allies', 'Your manager has been very busy and you have not had a one-to-one for two months. You want to discuss your growth. What do you do?', [
      o('Wait for the annual review, since it is the formal time for such a discussion and your manager is busy until then', 33, 'By the annual review, many decisions are already formed. Ask earlier, while you can still act on what you hear.'),
      o('Message your manager asking for 30 minutes, say the topic is your growth, and bring your results and one question', 100, 'A clear request with a stated purpose is easy for a busy manager to accept. After the meeting, send three lines on what was agreed.'),
      o('Mention it briefly when you meet your manager in the corridor or at the tea point, and ask for a suitable time', 50, 'A quick word plants the idea, but a serious topic needs a proper slot. Follow it the same day with a written request for 30 minutes.'),
      o('Ask a senior colleague who respects your work to put in a word with your manager about your plans for growth', 17, 'Going through someone else may surprise your manager and weakens your own voice. Have the first conversation yourself, then ask the senior for advice.'),
    ]),
    sc('allies', 'Your manager tells you that you are doing well but gives no timeline for a promotion. How do you respond?', [
      o('Accept the answer and keep working hard, since pushing for a timeline may look impatient or ungrateful', 33, 'Politely asking for details is not pushy. Without them you cannot plan, and your manager may assume you are happy to wait.'),
      o('Thank them, ask which specific things you should show, and leave the question of timing for later so it does not feel like pressure', 67, 'You get the what, which is the most useful part. Timing is also part of the plan, so ask at the same meeting when the next decision point is and whether openings could change it.'),
      o('Go to HR to ask about your promotion timeline, since your manager has not given you a clear answer', 17, 'HR may know the process, but going there first can look like going around your manager. Ask your manager for specifics first, and use HR for process questions afterwards.'),
      o('Ask what to show, when the next decision cycle is and whether openings could change timing, then fix a review date', 100, 'You get details, you learn what lies outside your control, and you set a follow-up. Put the review date in your calendar and bring your progress to it.'),
    ]),
    sc('skills', 'You are asked to run a small project for the first time, which is something people at the next level do. How do you approach it?', [
      o('Do it on your own in your usual way, since that is quicker, and hope the result speaks for itself at the end', 33, 'Working alone may deliver, but you miss the planning and coordination that the project is meant to show. Write down who needs what and by when before you start.'),
      o('Turn it down politely because you have never run a project and a mistake could count against you', 0, 'Chances like this are how people show they are ready. Accept it, and ask your manager for guidance on the parts you are unsure about.'),
      o('Write a simple plan with goal, dates and risks, share it with your manager, and ask for feedback at the end', 100, 'A plan, regular check-ins and feedback show planning skill and a willingness to learn. Keep the plan and the feedback as proof for your next review.'),
      o('Ask your manager to explain step by step how it should be run, so that you do not make mistakes in front of seniors', 50, 'Seeking guidance is sensible, but the next level expects you to bring a draft. Make a rough plan first and ask your manager to correct it.'),
    ]),
    sc('skills', 'You want to build a skill for the next level and have a week of free evenings. How do you use it?', [
      o('Ask someone at that level which skill matters most, pick one and practise it on a real task at work', 100, 'Choosing the right skill and using it on real work leaves you with something to show. Ask for feedback after about three weeks.'),
      o('Enrol in three or four short courses at once, so that you cover communication, planning and leadership in the same week', 17, 'Several courses at once leave little time for practice. Keep one, finish it, and use its main idea on a task at work before starting another.'),
      o('Complete one good online course in your own field and collect the certificate to add to your profile', 50, 'A course can help, but a certificate alone rarely shows readiness. Pick one lesson and apply it to a real task within a week.'),
      o('Read articles and watch talks on leadership and promotion every evening, and make notes on the best ideas', 33, 'Reading builds awareness, but skills grow by doing. Turn one note into a small action at work this week and see how it goes.'),
    ]),
    { ...sc('results', 'You are in your first or second year and your manager says, "You are doing fine." You want to know more. What do you ask?', [
      o('Nothing, because asking for more detail might make your manager think you are worried or not confident about your work', 17, '"Fine" is not specific enough to act on. Ask one follow-up question in your next one-to-one so you know what to keep and what to improve.'),
      o('Ask what fine looks like to them and which one thing would make your work stronger', 100, 'Specific questions turn general praise into a plan. Write down the answers and look at them again after a month.'),
      o('Ask directly whether you will be promoted next year, so that you know where you stand with the company', 33, 'A question about a timeline this early can put your manager on the spot. First learn what is expected, then ask how the process works.'),
      o('Ask a friendly senior colleague what the manager really thinks of your work, since seniors often speak more freely', 50, 'A colleague may not know, and the answer reaches you second-hand. Ask your manager directly, which also shows maturity.'),
    ]), stages: ['early'] },
    { ...sc('scope', 'You are a senior individual contributor and you suspect your work is bigger than your title, but nothing is written down. What do you do?', [
      o('Keep delivering at the same level and trust that your work will be recognised when the next review cycle comes around', 17, 'Recognition rarely arrives by itself. Put your scope in writing and share it before the review, not after.'),
      o('Write a one-page note on what you own, who depends on you and what outcomes you drive, and ask your manager how it compares with the next level', 100, 'A written note makes your scope visible and starts a useful talk about the level. Update it every quarter and keep the old versions.'),
      o('Tell your manager directly that you do more than most people at your title and deserve a higher designation soon', 33, 'Comparing yourself with others invites an argument. Show the scope with facts, and ask how it matches the next level.'),
      o('Look at roles in other companies to see what your work is called and valued as there, and decide from that', 50, 'Seeing the outside market is useful information, but it does not make the case inside your own organisation. Do the written note first, then decide with the facts from both sides.'),
    ]), stages: ['mid'] },
    { ...sc('skills', 'You are a team lead and a team member makes the same mistake again. You prefer to fix it yourself to save time. What do you do?', [
      o('Correct it yourself quietly each time, because the team is under deadline and explaining takes longer than doing it', 33, 'This saves time today but teaches nothing and keeps you busy. Use the next mistake as a coaching moment, even if it takes twenty minutes.'),
      o('Show the person the error, explain what good looks like, let them fix it and agree a short check next week', 100, 'Coaching on a real task builds the team and shows leadership. It is slower at first, and the second and third time it saves you hours.'),
      o('Move that task to someone more careful and give this person work where the same mistake cannot happen', 17, 'This protects the deadline but the person never learns, and you become the one who decides who can be trusted. Keep the task with them for now and coach it, with a check in a week.'),
      o('Send them a written list of the correct steps and ask them to follow it from now on, without a meeting', 50, 'Written steps help, but a short talk shows you care and lets them ask questions. Add a ten-minute follow-up in a week.'),
    ]), stages: ['lead'] },
    { ...sc('allies', 'You work in a government department or bank. A promotion test notification has come out, but a colleague says seniority matters more and preparation is not worth it. What do you do?', [
      o('Skip the test, since a colleague with long experience says seniority decides and preparation is wasted effort', 17, 'Whether a test counts for promotion depends on your service rules, and a colleague\'s view is not the rule. Read the official notice and rules yourself before deciding to skip it.'),
      o('Read the official rules on how any test, seniority and reports are used, then prepare from the official notice and apply on time', 100, 'You rely on the rules, not on rumours, and you act on what is in your control. Put the notification dates in your diary today.'),
      o('Wait until a senior in your office confirms whether the test matters before you spend time reading the notice', 33, 'Seniors have useful experience, but rules change and notices have last dates. Read the official notice yourself first, then ask the senior what you did not follow.'),
      o('Apply on time but prepare only lightly, since the final order may depend mostly on the seniority list', 50, 'Applying on time is right, but if the result counts in your rules, preparation is the part you control. Make a weekly plan from the official syllabus or notice.'),
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
      'Read the promotion rules for your cadre from the official source and write down the eligibility conditions, any tests and the records that count.',
      'Check your service record, seniority list entry and annual performance reports, and request corrections in writing.',
      'If a test or interview applies to you, prepare from the official syllabus or notice, with a weekly plan fitted around duty hours.',
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
