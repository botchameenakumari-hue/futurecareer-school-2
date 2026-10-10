import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

const BASE = 'https://futurecareerschool.com/services/assessments/';

export const bundle: SkillTestBundle = {
  test: {
    id: 'leadership-skills-self-assessment',
    slug: 'leadership-skills-self-assessment',
    pageUrl: '/services/assessments/leadership-skills-self-assessment/',
    breadcrumbName: 'Leadership Skills Self-Assessment',
    metaTitle: 'Leadership Skills Self-Assessment | Free Leadership Test',
    metaDescription:
      'Free leadership skills test with 40 questions and five scores: direction, delegating, coaching, deciding and influence. Instant result and a two-week plan.',
    h1Lead: 'Leadership Skills',
    h1Accent: 'Self-Assessment',
    eyebrow: 'Leading a class, a team or a business, in five habits',
    heroSub:
      'Leading is not one skill. Some people set a clear goal but cannot let go of tasks. Others delegate well but avoid hard feedback, or decide fast but struggle to bring other teams along. Rate statements about what you actually do and choose how you would act in real situations, and see which leadership habit to build first. This goes much deeper than the single leadership area in the soft skills assessment.',
    stats: [
      { value: '40', label: 'questions' },
      { value: '5', label: 'leadership areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five leadership habits scored from your own ratings',
      'About 8 minutes, no sign-up',
      'Your weakest habit and a two-week plan to practise it',
    ],
    reportTitle: 'Leadership Skills Report',
    reportFile: 'future-career-school-leadership-skills-report.pdf',
    reportKicker: 'LEADERSHIP SKILLS REPORT',
    resultKicker: 'Your leadership skills result',
    scoreLabel: 'Overall leadership habits',
    bands: {
      high: 'A relative strength.',
      mid: 'Developing, with room to grow.',
      low: 'This habit needs the most work.',
    },
    domainsHeading: 'Five leadership habits this self-assessment covers',
    domainsIntro:
      'Leadership shows up in small, repeatable behaviours: how you set the goal, hand over work, speak about performance, decide when time is short and move people who do not report to you. Each area below is written as something you can rate honestly and practise.',
    domains: [
      {
        key: 'direction',
        name: 'Setting direction and goals',
        short: 'Making the goal, the priority and the reason clear',
        strong: 'People around you know what the goal is, why it matters and what comes first this week, and you say what will wait.',
        weak: 'You assume everyone knows the goal, or the priority changes so often that people stop trusting what you said last week.',
        plan: [
          'Write the goal of your group or project in one sentence with a date, and read it out at your next meeting.',
          'Choose the top three priorities for this week and tell the group one thing that is deliberately being left for later.',
          'Ask two people to say the goal back in their own words, and fix any gap in what you said.',
        ],
      },
      {
        key: 'delegate',
        name: 'Delegating and trusting',
        short: 'Handing over work with clarity and letting go',
        strong: 'You hand over tasks with a clear result, a deadline and a check-in point, and you let people do them their own way.',
        weak: 'You keep tasks because it is faster to do them yourself, or you hand them over vaguely and then redo what comes back.',
        plan: [
          'Pick one task you do every week that someone else could learn, and hand it over with the expected result, date and a check-in time.',
          'When the work comes back, point out two things to change instead of redoing it yourself.',
          'List the tasks only you can do and the tasks you keep out of habit, and move one from the second list this month.',
        ],
      },
      {
        key: 'coach',
        name: 'Coaching and feedback',
        short: 'Helping people improve through timely, specific talk',
        strong: 'You speak up early about problems, give feedback on specific actions, ask questions before giving answers and ask for feedback yourself.',
        weak: 'You wait until a problem is serious, give vague comments or avoid the difficult conversation, and rarely ask how you are doing as a leader.',
        plan: [
          'Give one person specific feedback this week within a day of the work, using what you saw, what effect it had and what you suggest next.',
          'In your next one-to-one, ask a question such as "What would you try first?" before you offer your own answer.',
          'Ask two people what you could do differently as a leader, and act visibly on one point within two weeks.',
        ],
      },
      {
        key: 'decide',
        name: 'Deciding under pressure',
        short: 'Choosing and owning a call when time is short',
        strong: 'You decide with the information available, say what is still unknown, stay steady in front of the group and learn from calls that go wrong.',
        weak: 'You wait for full agreement, push hard calls to someone senior, or react sharply when things go wrong.',
        plan: [
          'Next time a call is needed within a day, write the options and the one fact that would change your mind, then decide and tell the group why.',
          'Note one decision you delayed this month and what it cost in time, and set a rule such as "decide within two days or ask for help".',
          'After your next decision, spend ten minutes writing what went well and what you would change, without naming anyone to blame.',
        ],
      },
      {
        key: 'influence',
        name: 'Influence without authority',
        short: 'Moving people who do not report to you',
        strong: 'You find out what others care about, build relationships before you need them, persuade with facts or small trials and share credit.',
        weak: 'You depend on your title or on repeating your opinion more strongly, and you approach other teams only when you need something.',
        plan: [
          'Pick one person whose support you need and ask them what pressure and goals they have this month, before you make any request.',
          'Offer one small help to someone in another team or group this week with no request attached.',
          'Next time you propose something, bring one fact or a small trial plan instead of only your opinion.',
        ],
      },
    ],
    questions: [
      { d: 'direction', text: 'When I lead something, I can say in one sentence what the group is trying to achieve and by when.' },
      { d: 'direction', text: 'I explain why a goal matters to the people doing the work, not only what the task is.' },
      { d: 'direction', text: 'My plans change so often that people around me are unsure what the priority is this week.', reverse: true },
      { d: 'direction', text: 'I tell people clearly what we will leave for later so that the main priorities get done.' },
      { d: 'direction', text: 'I tend to assume that everyone already knows the goal, so I do not repeat it.', reverse: true },
      { d: 'delegate', text: 'When I hand over a task, I state the result I expect, the deadline and the point where I want an update.' },
      { d: 'delegate', text: 'When someone\'s work is not what I wanted, I quietly redo it myself instead of explaining what to change.', reverse: true },
      { d: 'delegate', text: 'I give people tasks that stretch them a little beyond what they have done before.' },
      { d: 'delegate', text: 'I keep tasks I enjoy even when someone else could learn to do them.', reverse: true },
      { d: 'delegate', text: 'I let people do a task in their own way as long as the result meets the standard we agreed.' },
      { d: 'coach', text: 'When I give feedback, I talk about what the person did, not about what kind of person they are.' },
      { d: 'coach', text: 'I leave a performance problem alone until it becomes serious.', reverse: true },
      { d: 'coach', text: 'Before I give an answer, I ask the person what they would try first.' },
      { d: 'coach', text: 'I ask the people I lead what I could do differently.' },
      { d: 'coach', text: 'I tell people in specific words what they did well, not only what went wrong.' },
      { d: 'decide', text: 'When a call is urgent, I decide with the information I have instead of waiting for everything to be clear.' },
      { d: 'decide', text: 'Even when time is short, I wait until everyone agrees before I decide.', reverse: true },
      { d: 'decide', text: 'When things go wrong in front of the group, I give people clear next steps.' },
      { d: 'decide', text: 'When a call is going to upset someone, I push it to a senior person so I am not blamed.', reverse: true },
      { d: 'decide', text: 'After a decision goes badly, I look for what I would change instead of finding someone to blame.' },
      { d: 'influence', text: 'When I need support from people who do not report to me, I first find out what they care about.' },
      { d: 'influence', text: 'I build a working relationship with people in other groups or teams before I need a favour from them.' },
      { d: 'influence', text: 'I expect my role or title to get things done without having to persuade anyone.', reverse: true },
      { d: 'influence', text: 'I bring a fact, an example or a small trial to persuade people instead of repeating my opinion.' },
      { d: 'influence', text: 'When someone helps my work, I thank them for the specific thing they did.' },
    ],
    readingTitle: 'How to read your leadership skills result',
    readingSections: [
      {
        title: 'Leadership is a set of habits, not a type',
        body: [
          'Your five scores describe what you tend to do when you lead: setting direction, handing over work, speaking about performance, deciding under pressure and moving people without authority. They do not label you as a certain kind of leader. Most people are stronger in two areas and weaker in one or two, and the weaker ones can be practised.',
        ],
      },
      {
        title: 'Why this goes beyond a one-area leadership score',
        body: [
          'A single leadership score hides the difference between a person who sets a clear goal but never delegates and a person who delegates easily but avoids feedback. Splitting leadership into five habits shows which part to work on. If you have already taken the soft skills assessment, treat this one as the detailed version of its leadership area.',
        ],
      },
      {
        title: 'You do not need a title to practise these',
        body: [
          'A class representative, a project member who coordinates, a club captain, a freelancer who hires help and a manager of fifty people all use the same five habits at different scales. The stage you choose before you start changes the situations and the advice, so the report speaks to what you actually lead.',
        ],
      },
      {
        title: 'Check your ratings with the people you lead',
        body: [
          'Leadership is judged by others as much as by you. If your ratings differ from what a teammate, junior, classmate or manager would say, the gap is worth knowing about. Your report includes a question for each area that you can ask someone who works with you, and then you can retake the assessment after two weeks of practice.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool and shows how you describe your own habits. People who work with you may see them differently, so ask them too.',
      'It describes leadership habits, not a fixed leadership style or type, and it does not label you as a certain kind of leader.',
      'It is not a psychological test, a personality profile or a diagnosis, and it does not predict selection, promotion or performance in any role.',
      'Scores are not compared with other people, so there is no pass mark. They only show how your five areas compare with each other.',
      'It does not cover technical, domain or business knowledge, which a leadership role may also need.',
    ],
    faqs: [
      {
        q: 'What is a leadership skills test?',
        a: 'It is a set of statements and real-life situations about how you lead. You rate yourself, and the report scores five areas: setting direction, delegating, coaching and feedback, deciding under pressure and influencing without authority.',
      },
      {
        q: 'Is this a leadership style assessment? Will it give me a leadership type?',
        a: 'No. It describes leadership habits, not a fixed type. Two people with the same overall score can have very different strong and weak habits, and the same person can lead differently in a class, a project and a business. The report shows what to practise, not who you are.',
      },
      {
        q: 'Am I a good leader? What is a good score?',
        a: 'This test cannot say whether you are a good leader, because there is no pass mark and no comparison with other people. Your scores are based only on your own answers, so they cannot say whether you are a good leader. The useful reading is which of the five areas is lowest and which is highest, and what the people you lead would say about each.',
      },
      {
        q: 'How can I improve my leadership skills after taking the test?',
        a: 'Start with your lowest-scoring area and practise its two-week routine on something you really lead, such as a class project, a team task or a shop. Ask two people who work with you whether they agree with your ratings, act on one point they give, and retake the assessment after two weeks to see what moved. The test does not measure leadership potential or predict who gets chosen to lead, so use it to plan practice and not to judge your future.',
      },
      {
        q: 'How is this different from the soft skills assessment?',
        a: 'The soft skills assessment includes leadership as one of five areas, along with teamwork, adaptability, ownership and problem solving. This leadership self-assessment is only about leadership, split into five habits with situations and advice for different stages. Take the soft skills one for a broad view and this one for depth.',
      },
      {
        q: 'Is this leadership test free, and how long does it take?',
        a: 'Yes, it is free. It takes about 8 minutes, needs no sign-up, and shows your result straight away along with a downloadable PDF report.',
      },
      {
        q: 'How is the score worked out?',
        a: 'Statements are rated from 1 to 5, and statements worded in the negative are reversed. In the situation questions, each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
      },
      {
        q: 'Can students and people without a team use it?',
        a: 'Yes. You choose the stage that fits you: student or club or class leader, first-time team lead, experienced manager, or founder, freelancer or small-business owner. A few statements and the advice change to match what you actually lead.',
      },
    ],
    related: [
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'Leadership, teamwork, adaptability, ownership and problem solving, scored in one broader report.',
      },
      {
        href: '/services/assessments/communication-skills-assessment/',
        title: 'Communication Skills Assessment',
        description: 'Listening, speaking, writing, feedback and presenting, which sit behind most leadership work.',
      },
      {
        href: '/services/assessments/emotional-intelligence-test-careers/',
        title: 'Emotional Intelligence Test for Careers',
        description: 'Self-awareness and handling emotions, useful when leading under pressure.',
      },
      {
        href: '/services/assessments/decision-making-skills-assessment/',
        title: 'Decision-Making Skills Assessment',
        description: 'A closer look at how you weigh options and decide, which sits behind the deciding habit here.',
      },
      {
        href: '/services/assessments/entrepreneurial-aptitude-test/',
        title: 'Entrepreneurial Aptitude Test',
        description: 'Readiness areas for people building a business of their own.',
      },
      {
        href: '/services/assessments/promotion-readiness-assessment/',
        title: 'Promotion Readiness Assessment',
        description: 'Check how ready you are for the next level at work.',
      },
      {
        href: '/blog/career-guidance/how-to-get-promoted-faster-india/',
        title: 'How to Get Promoted Faster',
        description: 'Practical steps to show readiness for a bigger role at work.',
      },
      {
        href: '/blog/career-change/career-switch-from-it-to-management-india/',
        title: 'Career Switch from IT to Management',
        description: 'What changes when you move from doing the work to leading others.',
      },
      {
        href: '/blog/skills/career-development-skills/',
        title: 'Career Development Skills',
        description: 'The skills worth building as your career grows.',
      },
    ],
    breadcrumbDescription: 'Free leadership skills self-assessment with five scores and a two-week plan.',
    webAppDescription:
      'A free original 40-question leadership skills self-assessment covering setting direction and goals, delegating and trusting, coaching and feedback, deciding under pressure, and influence without authority, with five scores, an overall score, a practice plan and a downloadable report.',
    indexDescription: 'Five-habit self-rating of how you lead a class, team or business, with a two-week plan.',
    indexNote: 'Free, about 8 minutes, PDF report',
  },

  depth: {
    stageHeading: 'Which of these describes what you lead?',
    stageNote:
      'Leading a class club, a first team, a department and a small business are very different jobs, so your report changes the questions and the advice to match.',
    stages: [
      {
        key: 'student',
        label: 'Student or club or class leader',
        description: 'Class representative, club or society member, project group lead or captain',
        title: 'Lead peers who do not have to listen to you',
        body: 'Leading classmates is hard because you have no marks, pay or authority over them. Everything depends on a clear plan, fair sharing of work and people feeling heard. The habits you build here carry directly into your first job.',
        actions: [
          'Before the next group task, write the goal, the date and who does what in a shared message, and ask everyone to confirm it.',
          'Give one quieter member a real part of the work this month instead of dividing it among the active ones only.',
          'After the event or submission, hold a ten-minute talk where each person says one thing that worked and one to change.',
        ],
      },
      {
        key: 'firsttime',
        label: 'First-time team lead or manager',
        description: 'New lead, supervisor or manager of a few people, often former peers',
        title: 'Move from doing the work to getting it done through others',
        body: 'The first lead role often comes because you were good at the work, and the pull to keep doing it yourself is strong. Your job now is to make the goal clear, hand over work, give timely feedback and handle the awkwardness of leading people who were your equals.',
        actions: [
          'Hold a first one-to-one with each team member in the next two weeks and ask what they want from you as their lead.',
          'List your tasks and mark two that you will hand over this month with a result, a date and a check-in time.',
          'Decide one difficult talk you have been avoiding, such as lateness or quality, and have it this week with specific examples.',
        ],
      },
      {
        key: 'experienced',
        label: 'Experienced manager or senior lead',
        description: 'Manager of managers, department head or senior lead with a track record',
        title: 'Lead through other leaders and sharpen the habits that have gone stale',
        body: 'With experience, old habits become invisible. You may decide quickly but explain little, delegate by instinct without developing people, or stop asking for honest feedback because few dare to give it. The next gains come from coaching your managers and widening your influence beyond your own line.',
        actions: [
          'Ask two people who report to you, and one peer, to name one thing you do that makes their work harder, and thank them without defending.',
          'For each of your direct reports, write the one stretch task that would grow them in the next quarter and hand it over.',
          'Choose one decision you usually make yourself and let a team lead make it next time, agreeing in advance how you will review it.',
        ],
      },
      {
        key: 'founder',
        label: 'Founder, freelancer hiring help or small-business owner',
        description: 'Running a business, studio or practice, with employees, interns or contractors',
        title: 'Build a team that does not need you in every task',
        body: 'In a small business you are the owner, the planner and often the doer. People may be family, friends or part-time helpers, which makes feedback and delegating more personal. Clear goals, written handovers and regular check-ins let the work continue when you are with a customer or away.',
        actions: [
          'Write the three jobs that must be done every week with the result expected, and name one person responsible for each.',
          'Replace one verbal instruction you give repeatedly with a short written checklist or voice note that a helper can follow.',
          'Fix a weekly fifteen-minute check-in with each helper to review what is done, what is stuck and what comes next.',
        ],
      },
    ],
    tips: [
      'Write your group\'s goal as one sentence with a date, such as "Finish the first draft of the report by 15 March", and say it aloud at the start of the next meeting. If you cannot write it in one sentence, the goal is still vague, and that is what to fix first.',
      'For each task you give out, add a "because" line, for example "We need the survey done by Friday because the presentation depends on it". Say it in the message or the meeting, not only in your head.',
      'Pick a day, such as Monday, and set the priorities for the week then. Do not change them midweek unless something truly urgent comes up, and when you do, tell everyone what is being dropped to make room.',
      'Choose the top three priorities for the week and name one thing you will not do. Write the "not now" item in the same message, so people know that leaving it was a decision.',
      'After you explain the goal, ask two people to say it back in their own words. If their versions differ from yours, you have found where the message is getting lost.',
      'Use a four-line handover note: what result you want, by when, any limits such as budget or tools, and when you want the first update. Send it in writing, even for small tasks, for the next two weeks.',
      'When work comes back not as you wanted, write down the two specific changes and send them back to the person before you touch it yourself. If you do fix it, tell them what you changed and why so they can learn.',
      'Pick one task one level above what a team member has done and give it with a short check-in at the halfway point. A little stretch with support grows people faster than only giving routine tasks.',
      'List the tasks you do out of habit or enjoyment and choose one that someone else can learn. Teach it once, then step back, and accept that it will look a little different from your way.',
      'Agree the standard and the result, then ask the person how they plan to do it. Step in only if the plan will clearly miss the standard, and say so with the reason instead of just changing the method.',
      'Use a three-part feedback line within a day of the work: what I saw, what effect it had, and what I suggest next time. Keep it about actions, for example "You sent the report after the deadline", not "You are careless".',
      'Write down the one problem you have been leaving alone and have the talk this week, starting with a specific example and asking for the person\'s view. Early and small is far easier than late and big.',
      'In your next one-to-one, ask "What would you try first?" and wait through the pause. Give your own idea only after they have shared theirs, and build on it where you can.',
      'Ask two people on your team, "What is one thing I could do differently to make your work easier?" Write down what they say, do one thing within two weeks and tell them you did it.',
      'This week, name one specific thing each of two people did well, in one sentence each, for example "Your summary made the client call shorter because it was clear". Do it in person or in a message, not only in your own head.',
      'When a call is needed within a day, write the options and the one fact that would change your mind. Decide, tell people the reason, and name what is still unknown and when you will check it.',
      'Set a rule for yourself such as "If the team is split and time is short, I decide by tomorrow after hearing each person for two minutes". Seek views, but be clear that the final call is yours.',
      'When something goes wrong, take three slow breaths, say what you know and what you do not, and give each person one next step. Clear short instructions calm a group more than reassurance does.',
      'Next time you are tempted to pass on a difficult call, write down what you would decide if you were fully responsible, and then check with your senior as an input, not as a replacement for your decision.',
      'After a decision that went badly, write three lines: what we knew, what we missed and what I will check next time. Share the lessons with the team and keep the names out of it.',
      'Before you ask anyone outside your line for help, ask them what their priorities are this month and where they are stuck. Then connect your request to something they already care about.',
      'Choose one person in another team and have a short coffee or call with no request, only to learn what they work on. Repeat once a month, so they know you before you ever need something.',
      'Replace "I am the lead, so please do this" with a reason and an ask: what the work is for, why it matters to them and what you need by when. Titles open doors, but reasons keep them open.',
      'Before you propose something, collect one example, one number you have checked, or a small trial that could be done in a week. Bring that along with your suggestion, and invite people to question it.',
      'When someone helps you, thank them in the group or to their manager with specifics, such as "Meera\'s checking caught three errors before the client saw it". Do it within a day while it is fresh.',
    ],
    tipsUp: [
      'Put the one-line goal at the top of every meeting note and weekly message for a month, so people see it each time and you do not depend on remembering to say it.',
      'Before each handover this week, check the "because" line is there, then ask one person afterwards what they think the task is for. Note whether their answer matches yours.',
      'Before you change a priority, ask what has actually changed and wait a day unless it is urgent. Keep a short list of this month\'s changes and see how many were truly needed.',
      'End each weekly priority message with a "not now" line, and on Friday check whether that item stayed parked. If it crept back in, tell the group why.',
      'Set a repeating calendar reminder to restate the goal at the start of every meeting for a month, even when it feels repeated. Notice who still asks about it.',
      'Save the four-line handover as a template you copy each time. After each task, note which line was missing when the work came back off target.',
      'When you feel the urge to redo someone\'s work, write the two changes first and send them back. Keep a tally this month of times you redid it yourself and try to lower it.',
      'After a stretch task, ask the person what felt too easy or too hard, and adjust the next task to match. Keep a running note of what each person has grown into.',
      'Each Monday, mark on your task list anything you kept only because you enjoy it. Hand over one of them with a review date, and keep for yourself only what truly needs you.',
      'At the agreed check-in, compare the result with the standard, not with how you would have done it. Write one line on what was different but still met the standard.',
      'Within a week, ask the person whether your feedback was clear and easy to act on. Keep a note of the wording that worked so you can reuse it with others.',
      'Fix a weekly slot, such as Friday afternoon, to list any small problem you noticed, and raise one of them that week. This way no problem waits more than seven days.',
      'After you ask the question, count to five silently before you speak. Try this in two one-to-ones this month and note what the person offered in that pause.',
      'Ask for feedback on a fixed date, such as the last Friday of the month, using the same question each time. Write down the answers and look for a point that repeats.',
      'Keep a running list of who you praised and when, and check each Friday that nobody has been missed for two weeks. Write the exact action and its effect in each line.',
      'Set a ten-minute timer for the next urgent call: list the options and the deciding fact, then decide when it ends. Afterwards, note whether more time would have changed the call.',
      'When you hear yourself asking "does everyone agree?", ask "what is the deadline for this call?" instead. Hear views until that time, then decide even without full agreement.',
      'After the next problem, ask one person how your instructions came across and whether they were clear. Write down the first thing you said and keep what worked.',
      'When you feel like passing a hard call upward, write your own decision and reasons first and send them along. Track how often your senior changed your call this month.',
      'Keep a short log with the date, the decision and one lesson, and re-read it at month end. If the same lesson appears twice, turn it into a rule for yourself.',
      'Keep a one-line note on what each key person cares about, and read it before every request. Update it after each conversation so it reflects this month and not last year.',
      'Set a monthly reminder to contact each cross-team contact without a request. Note the date you last spoke, so nobody goes quiet for more than two months.',
      'When you notice yourself leaning on your title, stop and write the reason and the benefit for the other person. Ask one colleague to tell you when they hear you doing it.',
      'Ask one sceptical colleague to challenge your fact or trial plan before you present it. Keep the example or result in a folder so you can reuse it next time.',
      'Send the thanks within a day and keep a list of who you thanked and for what. Once a month, thank the manager of one helper, so the credit reaches people who decide.',
    ],
    strongTip: 'This is already a working leadership habit. Keep using it, and use it on the next bigger task you lead.',
    domains: {
      direction: {
        why: 'People can work hard and still go in different directions if the goal is vague or keeps changing. A clear goal, a reason and a short list of priorities save more time than extra effort. Leaders who skip this find themselves repeating instructions and fixing work that missed the point.',
        roles: [
          'Class, club, event and project group leads, where a mix of people must agree on one plan',
          'Team leads and managers in IT, BPO, banks, hospitals, schools, retail and government offices, where daily priorities compete',
          'Founders, shop owners and freelancers with helpers, where the owner\'s direction is the only thing holding the work together',
        ],
        routine: [
          'Days 1 to 3: Write the goal of your group or project in one sentence with a date, and share it in a message or meeting.',
          'Days 4 to 7: Choose three priorities for the week, name one thing that will wait and tell everyone the reason.',
          'Days 8 to 11: Ask two or three people to say the goal back in their words, and correct any difference in how you explain it.',
          'Days 12 to 14: Review the week against the priorities, note what changed midweek and why, and plan the next week with fewer changes.',
        ],
        mistakes: [
          'Giving the task without the reason, so people cannot make good small decisions when things change',
          'Treating every request as top priority, so nothing is clearly first',
          'Changing direction after a worry or a remark from a senior without telling the team what has changed and why',
        ],
        proof: [
          'A one-line goal and weekly priority list you shared with a group, along with how the work turned out',
          'An example of a time you dropped something to protect a more important goal, and how you told the team',
          'A short note from a teammate or junior saying they knew what the priority was and why',
        ],
        askOthers: 'If I asked you to state our goal and this week\'s top priority, what would you say, and where does it differ from what I think?',
        talkingPoints: [
          'You set a clear goal with a date and a reason before assigning work',
          'You limit priorities and say openly what is being left for later',
          'You check that people understood the goal by asking them to repeat it',
        ],
        midStep: 'At the start of your next project or week, write the goal, three priorities and the one thing that waits, and share it with your group before any task is assigned.',
      },
      delegate: {
        why: 'No leader can do everything, and a team that waits for you cannot grow. Good delegating means the other person knows the result, the date and when to check in, and has the room to find their own method. Holding on to tasks leaves you overloaded and your team underused.',
        roles: [
          'First-time leads and managers, who must shift from doing to getting things done through others',
          'Project coordinators, editors, site supervisors, shift leaders and department heads with several people to manage',
          'Business owners and freelancers who hire part-time help, interns or assistants for the first time',
        ],
        routine: [
          'Days 1 to 3: List what you do in a week, mark tasks someone else could learn and choose one to hand over.',
          'Days 4 to 7: Write a four-line handover with result, deadline, limits and first check-in, and give the task in person.',
          'Days 8 to 11: At the check-in, ask questions first, then point out at most two changes, and avoid taking the task back.',
          'Days 12 to 14: Hand over a second, slightly bigger task and ask the person what support they would like from you.',
        ],
        mistakes: [
          'Handing over a task in one sentence and then being disappointed that it came back different',
          'Giving only the dull tasks and keeping the interesting ones, so people do not grow',
          'Checking so often that the person feels watched, or not at all until the deadline has passed',
        ],
        proof: [
          'A written handover note you gave and the outcome of the task',
          'An example of a person who took over something from you and now does it without help',
          'A before and after of your own week, showing which tasks moved to someone else',
        ],
        askOthers: 'When I give you work, is it clear what I expect and by when, and do I leave you room to do it your way or do I step in too much?',
        talkingPoints: [
          'You hand over tasks with a clear result, date and check-in point',
          'You develop people by giving them stretch tasks with support',
          'You can describe a task you let go of and how it turned out',
        ],
        midStep: 'Hand over one task you usually keep, with a four-line written brief, and resist redoing it when it comes back.',
      },
      coach: {
        why: 'People improve when they hear specific things soon after the work and when someone helps them think, not only tells them. Avoiding hard talks protects the comfort of the moment and costs the team more later. A leader who asks for feedback also makes it safer for others to speak.',
        roles: [
          'Team leads, supervisors, sports captains and mentors who guide others in daily work',
          'Managers in sales, support, teaching, healthcare and operations, where small habits shape results',
          'Senior leaders who coach other managers and need honest feedback about their own behaviour',
        ],
        routine: [
          'Days 1 to 3: Choose one person and prepare specific feedback with an example, its effect and a suggestion, then give it in person.',
          'Days 4 to 7: Hold a one-to-one where you ask at least three questions before you give any advice.',
          'Days 8 to 11: Ask two people what you could do differently, listen without explaining, and write down what you hear.',
          'Days 12 to 14: Act on one point, tell the person you did, and give specific praise to someone for a recent piece of work.',
        ],
        mistakes: [
          'Saving all the feedback for the annual review or for when you are angry',
          'Softening a message so much that the person does not realise it was feedback',
          'Giving the solution before the person has thought it through, so they never build their own judgement',
        ],
        proof: [
          'An example of feedback you gave, how you phrased it and what changed afterwards',
          'A change you made because someone told you something about your own leadership',
          'A person you coached through a difficult stretch and what they can now do on their own',
        ],
        askOthers: 'When I give you feedback, is it specific and timely enough to use, and is there something I avoid saying that you would want to hear?',
        talkingPoints: [
          'You give feedback early and on specific actions',
          'You ask questions that help people think before you give answers',
          'You ask for feedback on your own leadership and act on it',
        ],
        midStep: 'Give one piece of specific feedback within a day of the work, and ask one person for feedback on you this week.',
      },
      decide: {
        why: 'Leaders are often asked to choose when information is incomplete and people are watching. Waiting for certainty or full agreement costs time, and passing the call upward costs trust. A leader who decides, explains and learns without blaming makes it safer for the team to take decisions too.',
        roles: [
          'Shift leaders, event heads, site and operations leads who must decide quickly on the day',
          'Managers and team leads handling deadlines, client escalations and resource clashes',
          'Founders and owners who make many calls alone with money, people and customers involved',
        ],
        routine: [
          'Days 1 to 3: Recall two recent decisions you delayed or passed on, and write what it cost and what you could have decided.',
          'Days 4 to 7: Use a one-page format for one real call: options, what you know, what you do not, and the fact that would change your mind.',
          'Days 8 to 11: Make the call by a time limit you set, announce it with the reason and name the next check date.',
          'Days 12 to 14: Write a short review of the decision with what worked and what to change, and share the lesson with the team.',
        ],
        mistakes: [
          'Calling for a consensus on matters where the team has said all it can and the call is yours',
          'Showing visible anger or panic, which makes people hide bad news from you later',
          'Changing a decision in response to the loudest voice instead of new facts',
        ],
        proof: [
          'A decision note showing options, the call you took and the review you did afterwards',
          'An example of a time you made a call at short notice and how you explained it to the team',
          'An example of a decision that turned out wrong, what you owned and how you corrected it',
        ],
        askOthers: 'When we are short of time, do I decide clearly, do I explain why, and how do I come across when things go wrong?',
        talkingPoints: [
          'You decide with the information available and state what remains unknown',
          'You stay steady and give clear next steps when things go wrong',
          'You take responsibility for outcomes and share what you learned',
        ],
        midStep: 'Choose one pending decision and set a decision time with a note of the one fact that would change it, then decide and announce it.',
      },
      influence: {
        why: 'Most real work needs help from people who do not report to you: another team, a senior person, a supplier, a teacher or a customer. Titles do little with them. Understanding what they need, building trust early and bringing evidence let you move things without pushing.',
        roles: [
          'Project and programme leads who depend on several teams, departments or vendors',
          'Club, society and college event leaders who need help from faculty, sponsors and other groups',
          'Freelancers, consultants and business owners who persuade clients, partners and suppliers they do not control',
        ],
        routine: [
          'Days 1 to 3: List the three people outside your line whose help you need most and what each of them cares about this month.',
          'Days 4 to 7: Contact one of them with a small offer to help or share something useful, without a request.',
          'Days 8 to 11: Prepare your next proposal with one fact, one example or a small trial, and a clear benefit for them.',
          'Days 12 to 14: Make the request, listen to the objection, answer with facts or a smaller first step, and thank them in public.',
        ],
        mistakes: [
          'Contacting people only when you need a favour',
          'Pushing harder with the same argument instead of asking what is stopping them',
          'Taking all the credit when a result needed several people',
        ],
        proof: [
          'An example of a time you got support from someone who did not report to you and what you did to earn it',
          'A proposal where you used a fact or a small trial to bring people along',
          'A message where you gave credit to another team or person for a joint result',
        ],
        askOthers: 'When I ask you for help, do I understand your priorities first, and do I make it easy for you to say yes?',
        talkingPoints: [
          'You learn what others care about before you make a request',
          'You build relationships before you need them',
          'You persuade with evidence and share credit generously',
        ],
        midStep: 'This week, ask one person outside your line what they are working on and what would help them, before you ask for anything.',
      },
    },
    thirtyDay: [
      'Week 1: Look at your lowest-scoring area, ask two people who work with you whether they agree, and begin the first half of that area\'s routine on something you really lead.',
      'Week 2: Finish the routine, give or ask for feedback once, and write what you noticed about how people responded.',
      'Week 3: Start the routine for your second-lowest area, and use one phrase from your report in a real meeting or conversation.',
      'Week 4: Retake the assessment, compare each area score with your first result, and choose the one habit you will keep practising for the next month.',
    ],
  },

  extras: [
    { ...x(['student'], 'direction', 'When I lead a group task, I write down who does what and by when, and share it so everyone sees it.', 'Before the next group assignment or club event, post a short message with each person\'s task and date and ask everyone to react to confirm. Check it again halfway through.'), up: 'Pin the task message in the group and tick each item as it is done. Keep a copy after submission as proof of how you ran the work.' },
    { ...x(['student'], 'delegate', 'In a group project, I take the hard parts myself because I do not want to risk the marks.', 'Give each member a part that suits their strength and agree a halfway check. Offer help if they are stuck, but do not take the part back unless they ask.', true), up: 'When you feel like taking a hard part back, first ask the person what they need and give it one more day. Count the parts you took back this month and try to reduce it by one.' },
    { ...x(['student'], 'influence', 'Before I ask classmates to follow my plan, I ask each of them which part they would like to take.', 'Next time, ask each person what they would like to do in the project before you assign anything, and make sure the plan includes at least one thing each person asked for.'), up: 'At the halfway point, ask each person whether the part they took is the one they wanted, and swap one if needed. This keeps interest from fading midway.' },
    { ...x(['student'], 'coach', 'When a classmate does not do their share, I first ask them privately what is getting in the way.', 'Choose a quiet moment, such as after class, and say what you noticed, for example "Your section is not yet in the file", and ask what you can do to help. Avoid saying it in the group chat in front of everyone.'), up: 'Afterwards, ask the classmate whether your approach felt fair and what you could say differently. Keep it to a two-minute talk and note one wording to reuse.' },
    { ...x(['firsttime'], 'delegate', 'Now that I lead former peers, I find it hard to hand them tasks, so I end up doing too much myself.', 'List your tasks and choose two that you will give this week with a clear result and date. Tell the team you are changing how you work, so it does not seem like a lack of trust in anyone.', true), up: 'Each Friday, tick the tasks you handed over and note any you took back and why. Ask one team member whether the handover felt like trust or like checking.' },
    { ...x(['firsttime'], 'coach', 'I have had a one-to-one with each person on my team to ask what they need from me as their lead.', 'Book twenty minutes with each person in the next two weeks. Ask what helps them, what gets in their way and what they want to learn, and write down one thing to do for each.'), up: 'At the end of each one-to-one, book the next one on the calendar, two or four weeks ahead. Start the next one by reviewing the one thing you promised last time.' },
    { ...x(['firsttime'], 'decide', 'I tell my team which decisions are mine, which we make together and which they can make on their own.', 'Write three short lists for your team and share them in the next meeting. Review them after a month, moving items to the team\'s list as trust grows.'), up: 'At the one-month mark, ask your team which decisions still feel unclear and move one item between the lists. Ask your manager to confirm the change so there are no surprises.' },
    { ...x(['firsttime'], 'direction', 'I turn instructions from my manager into a clear goal and priorities for my team, instead of passing them on word for word.', 'After each talk with your manager, write the goal in one sentence, why it matters and the two priorities for the team. Share that version, not the raw message.'), up: 'For your next two instructions, ask your manager to read your team version before you share it. Note any difference, so you see where your translation drifts.' },
    { ...x(['experienced'], 'coach', 'I coach the managers who report to me on how they lead, not only on their numbers.', 'In your next one-to-one with a manager, ask how one of their team conversations went and what they would do differently. Give one observation about their leadership, not about the result.'), up: 'Before each one-to-one with a manager, write the one leadership behaviour you will comment on. Afterwards, ask what they will try and check it at the next meeting.' },
    { ...x(['experienced'], 'influence', 'I speak to peers in other departments about their goals before a problem forces us to talk.', 'List three peers in other functions and book a short conversation with each this month about their goals. Offer one thing you can do to make their work easier.'), up: 'Set a quarterly reminder with each peer and bring one update from their side to the next talk. After each, note one thing you changed because of what you heard.' },
    { ...x(['experienced'], 'delegate', 'I still make decisions that a team lead could make, because I can do it faster.', 'Choose one recurring decision and tell the team lead it is theirs from next week, with the limits you expect. Check one sample after two weeks and give feedback on the thinking, not only the outcome.', true), up: 'Keep a tally this month of decisions you made that a team lead could have made. Hand over the most frequent type first, so the tally falls.' },
    { ...x(['experienced'], 'direction', 'Before I change a direction, I explain to my teams what has changed in the facts and what stays the same.', 'The next time priorities shift, send a short note with three lines: what changed, why and what it means for each team this week. Invite questions in the next meeting.'), up: 'Two weeks after a change, ask one person from each team what changed and why, and fix any gap in your note. Keep the notes together as a record of how you communicate shifts.' },
    { ...x(['founder'], 'delegate', 'I explain the same job to my helpers again and again instead of writing it down once.', 'Pick one job you explain more than twice a month, write it as a ten-step checklist or record a voice note, and ask the helper to follow it once while you watch. Fix the unclear steps.', true), up: 'After the helper follows the checklist once, ask them to add anything missing, and date the new version. Keep all checklists in one shared folder so a new helper can start from them.' },
    { ...x(['founder'], 'coach', 'I give feedback to family members or friends who work with me as clearly as I would to any other employee.', 'Choose one issue you have not raised, and have the talk privately with a specific example and what you need next. Agree on a date to review it together.'), up: 'Write a short note of each talk and the agreed review date, and read it on that date. Note whether anything changed and what you will repeat.' },
    { ...x(['founder'], 'decide', 'I decide when to spend money, take on a customer or bring in new help using clear rules instead of the mood of the day.', 'Write three rules, such as the largest spend you can approve without waiting a day, the kind of customer or order you will decline, and what you will check before taking on a new helper. Review the rules each quarter.'), up: 'Keep a short log of each time you used a rule and each time you broke it, with the reason. At month end, adjust the rule that was broken most often.' },
    { ...x(['founder'], 'influence', 'Before I negotiate with a customer, supplier or partner, I work out what they want most.', 'Before your next negotiation, write what the other side wants most, what you can offer and the one fact you will bring. Ask what would make it easier for them to say yes, and write the agreement down.'), up: 'After each negotiation, write what the other side finally agreed to and what you gave up. Compare it with your earlier note on what they wanted, to see how well you read them.' },
  ],

  stageAdvice: {
    student: {
      direction: sa(
        'As a student leader, your group changes with every assignment or event, so the goal is often unclear until the last week.',
        'Before the first meeting, draft the goal, the deadline and a rough split of work, and let the group change it instead of starting from a blank page.',
        'Split the work into weekly checkpoints and mark each as done or not in the group chat every Friday.'
      ),
      delegate: sa(
        'As a student leader, you may be afraid that another member will lower the quality, so you take the hardest parts yourself.',
        'Ask each member which part they want, then give the part nobody picked to the person with the most free time, and agree a halfway date to look at it.',
        'Let a quieter member present one section in the final submission or event, with a practice run beforehand.'
      ),
      coach: sa(
        'As a student leader, you are speaking to friends, so a difficult word can feel like risking the friendship.',
        'Raise a missed task privately within a day, saying what you saw and asking what would help, and not in the group chat.',
        'After the event or submission, ask the group what you could have done better as a leader and note two points.'
      ),
      decide: sa(
        'As a student leader, you may have to decide quickly about timing, roles or a clash with exams, with classmates holding different views.',
        'Hear each member for two minutes, then announce the decision and the reason within the same day.',
        'Keep a short list of decisions and how they worked, and mention one lesson to the group at the next meeting.'
      ),
      influence: sa(
        'As a student leader, you need teachers, seniors and other clubs to help, and none of them reports to you.',
        'Meet a faculty member or senior with a one-page plan and a specific request, and ask what they would change before you present it formally.',
        'Offer help to another club or class for one of their events, so that they are glad to support yours later.'
      ),
    },
    firsttime: {
      direction: sa(
        'As a first-time lead, you receive goals from your manager and must make them make sense to a team that may include former peers.',
        'Ask your manager what a good result looks like and by when, so that you can explain it to your team without guessing.',
        'Hold a fifteen-minute Monday huddle to share the top three priorities of the week and what is on hold.'
      ),
      delegate: sa(
        'As a first-time lead, you were promoted for doing the work well, so the habit of doing it yourself is strong.',
        'Choose two recurring tasks and hand them over with a four-line brief and a date for the first update.',
        'Track for two weeks how many hours you spend on tasks a team member could do, and move the biggest one.'
      ),
      coach: sa(
        'As a first-time lead, giving feedback to someone who was recently your equal feels awkward, so it tends to be postponed.',
        'Prepare one specific example and say it in person within a day, using what you saw, the effect and your suggestion.',
        'Start a monthly one-to-one with every team member and end each with the question of what you can do better.'
      ),
      decide: sa(
        'As a first-time lead, you are caught between your team\'s requests and your manager\'s expectations, and are unsure which calls are yours.',
        'List the decisions you can take alone, those to check with your manager and those the team can take, and confirm the list with your manager.',
        'When you must say no to your team, give the reason in a sentence and the alternative you can offer.'
      ),
      influence: sa(
        'As a first-time lead, you suddenly need help from other teams, and your title is new to them.',
        'Introduce yourself to the leads of the two teams you depend on and ask what a good working relationship would look like for them.',
        'Bring one fact, such as a delay or a count of repeat issues, when you ask another team for change, instead of a complaint.'
      ),
    },
    experienced: {
      direction: sa(
        'As an experienced leader, you set direction across levels, and a message can lose shape by the time it reaches the front line.',
        'Ask three people at different levels to tell you the main goal and priorities this quarter, and fix the gaps you hear.',
        'Write a half-page note for each quarter with the goal, the three priorities, what you will stop doing and how you will check progress.'
      ),
      delegate: sa(
        'As an experienced leader, you may delegate well to some people and hold on to certain decisions or clients out of habit.',
        'List the clients, meetings or approvals you still hold personally and pass on the one that would teach someone the most, with limits and a review date.',
        'Pair each report with a stretch assignment and agree what help you will give and what you will not.'
      ),
      coach: sa(
        'As an experienced leader, people may tell you only what is comfortable, so you rarely hear how you come across.',
        'Ask each direct report once a quarter what you should start, stop and continue doing, and reply to each point.',
        'Spend one one-to-one a week on development rather than status, asking about what they want to learn.'
      ),
      decide: sa(
        'As an experienced leader, your decisions affect many people, and the habit of quick calls can hide the reasons from the team.',
        'For each major call, tell the team the options considered, the reason and the thing you will watch to know if it is working.',
        'Keep a short decision log for a quarter and read it at the end to see the pattern of your misses.'
      ),
      influence: sa(
        'As an experienced leader, you influence other leaders and senior stakeholders, who will ask what is in it for them.',
        'Meet a senior stakeholder before a big proposal and ask what they would need to see to support it.',
        'Build a regular touchpoint with a peer in another function and share early what your team is planning that affects them.'
      ),
    },
    founder: {
      direction: sa(
        'As a founder or owner, the direction lives in your head, and helpers may only see the daily tasks.',
        'Write the business goal for the next three months and the weekly jobs that support it, and share it with every helper.',
        'Tell your team which customers or opportunities you will say no to this quarter and why.'
      ),
      delegate: sa(
        'As a founder or owner, you started by doing everything, and letting go of customer work or money tasks feels risky.',
        'Pick one task that does not need you, such as scheduling, follow-up messages or basic bookkeeping, and sit with a helper while they do it once, then leave them to repeat it.',
        'Set a rule that you review a sample of the delegated work in the first month, then move to a weekly spot check.'
      ),
      coach: sa(
        'As a founder or owner, helpers may be family, friends or part-timers, which makes you hesitate to correct them.',
        'Give feedback privately, with one example and one request, and agree the date when you will look at it again.',
        'Keep a note for each helper of the one change you asked for, and look at it first at your next talk so that feedback is followed up.'
      ),
      decide: sa(
        'As a founder or owner, every decision about money, customers and people comes to you, often on the same day.',
        'Write simple rules for spending, discounts and refusals so that helpers can act within limits without waiting for you.',
        'Set a fixed weekly time to settle pending decisions, so they do not interrupt customer work all day.'
      ),
      influence: sa(
        'As a founder or owner, you persuade customers, suppliers and partners who owe you nothing and can walk away.',
        'Before each negotiation, write what the other side wants and one fact or sample that shows your value.',
        'Share credit and thanks openly with suppliers and partners who helped, and keep the relationship warm between deals.'
      ),
    },
  },

  scenarios: [
    sc('direction', 'You lead a group that has just received three new requests from different people above you, such as a manager, a teacher or a client, all marked urgent. Your group is already full. What do you do?', [
      o('Accept all three, and ask the team to stay back on a few evenings this week so that no senior is told no', 33, 'Extra hours may clear the pile once, but they hide the real limit of your team from the people asking. Add up the hours the three jobs need this week and show that number to the seniors.'),
      o('Write to all three seniors together, explain that the team is full and ask them to agree the order among themselves before you start', 67, 'Putting the choice back to the seniors is fair, but it can take days while your team waits. Next time, send your own suggested order in the same message and ask for a reply by a fixed hour.'),
      o('Start with the request from the most senior person, and tell the others you will try to get to theirs later', 17, 'Rank in the office is not the same as urgency, and the other two seniors are left guessing. Ask each one for the date and what happens if it is missed, then order the work by that.'),
      o('Sort the three by deadline and effect, tell the team what waits, and send each senior the date you can deliver', 100, 'You chose a clear priority, protected the team and gave honest dates. Post the order in the team chat today and ask the seniors to challenge it before an agreed time tomorrow.'),
    ]),
    sc('direction', 'Halfway through a project, a member says, "I thought we were doing a different thing." Others nod. What do you do?', [
      o('Share the first meeting\'s notes again and ask everyone to read them before the next call, since the goal is written there', 33, 'Notes are useful, but several nods mean the writing did not land, and rereading may not fix it. Ask which part was unclear and rewrite that part in simpler words.'),
      o('Ask the person who is confused to explain what they understood, and correct only their part of the work', 67, 'Several people nodded, so their version may be off as well. Ask everyone to state the goal before you decide whose work needs changing.'),
      o('Hold a vote between the original goal and the version the others had in mind, since so many people nodded', 17, 'A vote turns a misunderstanding into a contest and can change the goal for the wrong reason. Clear up what the goal was first, and vote only if there is a real choice between two goals.'),
      o('Pause for ten minutes, write the goal in one sentence in the chat and ask each person what they had understood', 100, 'Several nods mean the message did not land, which is a gap in how you explained it and not one person\'s fault. Pin the sentence in the group and read it at the start of each weekly meeting.'),
    ]),
    sc('delegate', 'You give a team member a report to prepare. When it comes back, it is only partly what you wanted, and the deadline is tomorrow. What do you do?', [
      o('Mark the two parts that must change, send it back and fix a time tonight to look at the new version', 100, 'The report stays with its owner and the person gets a fair chance in the time left. Next time, write a short brief at the start so that the gap does not appear on the last day.'),
      o('Sit with the person for an hour tonight and correct it together, taking over the last sections yourself if time runs out', 67, 'Working together is generous and the report will improve, but the lesson depends on who types. Let them make the changes while you only point, and take over only what is left at the end.'),
      o('Rewrite the weak sections yourself tonight and tell them tomorrow what you changed and why', 33, 'Rewriting gets you through tomorrow, though the person mostly learns that their work was replaced. Send them a before and after so they can see the difference, and brief them better next time.'),
      o('Send it to your manager or teacher as it is, with a note that two sections are still weak so that nobody is surprised', 17, 'Being open with them has value, but you still had the evening to improve it. Use tonight to fix it with the owner, and tell your manager only about whatever remains.'),
    ]),
    sc('delegate', 'You have been asked to organise a college fest session. You love doing the design work, and a junior says she would like to try it. What do you do?', [
      o('Hand over the poster alone, and keep the main stage design yourself because the whole college will see it', 67, 'Giving her the poster is a start, but she learns little if the visible work stays with you. Agree a date when she takes one larger piece, with you reviewing the draft.'),
      o('Give her the design with a brief and a first-draft date, and take the dull registration planning for yourself', 100, 'You develop a junior while carrying your share of the unwanted work, which is fair. Meet her at the draft date and name two things to change, and do not redraw it.'),
      o('Hand over the design but ask her to send every small change on WhatsApp for approval before she carries on, since quality matters to the fest', 33, 'The task has moved, but constant approvals tell her you do not trust her and slow her down. Agree two check-in points and let her work freely between them.'),
      o('Tell her you will teach her next year, because this year\'s session is too important to risk on a first attempt', 17, 'Protecting the fest sounds responsible, but next year the same reasoning will apply. Let her start with a small section now, with a review date, so that she is ready later.'),
    ]),
    sc('coach', 'A team member has arrived late a few times this month. It has not caused a major problem yet. What do you do?', [
      o('Send a polite reminder about timings to the whole team, without naming anyone, and watch who improves', 33, 'A general message is safe, but the person may not think it is about them. Follow it with a private word within the week.'),
      o('Ask a friend of theirs in the team to find out what is going on and to pass on a gentle word', 50, 'You may learn the reason, but it comes second-hand and the message may change on the way. Hear it from them directly, in a short private talk.'),
      o('Talk to them alone, name the dates, ask what is happening and agree one change', 100, 'You stayed specific and curious, which gives the person room to explain a real reason. Write down what you both agreed and look at it again after two weeks.'),
      o('Wait two more weeks and note the dates, so that your talk is based on a clear record and not on impressions', 17, 'A record helps, but two weeks of silence tells the person that it does not matter. Note the dates now and speak this week, when the matter is still small.'),
    ]),
    sc('coach', 'Someone on your team asks you how to reply to a difficult email from a client, sponsor or senior. You know exactly what to write. What do you do?', [
      o('Share an old reply of yours to a similar client, ask them to adapt it and check the draft before it goes out', 67, 'An example saves time and gives them a shape to follow. Add one question about how this client differs, so that they learn to read the person and not just copy.'),
      o('Write the reply together on a call, with you typing and explaining each line, because the client is waiting', 33, 'It is quick and the client is served, though they watch your thinking and do not practise their own. Next time, let them type the first two lines.'),
      o('Ask what they think the client wants, let them draft it and then suggest two improvements', 100, 'You helped them think and kept the work theirs, which builds judgement. Tell them afterwards how you would have approached it, once they have tried.'),
      o('Tell them to send their own reply and that you will review how the client reacts, since learning by doing is best', 17, 'Learning by doing is real, but a difficult client is a poor place for a first attempt without any cover. Look at the draft before it is sent, even for five minutes.'),
    ]),
    sc('decide', 'A supplier fails to deliver on the morning of an important event. Your team looks at you. You have two backup options, both imperfect. What do you do?', [
      o('Keep calling the supplier until they promise a time, while the team prepares both backups in parallel just in case', 50, 'Preparing both options is careful, but it splits the team and the supplier\'s promise may still fail. Set a clock time, such as 11 a.m., after which you commit to one backup.'),
      o('Ask your senior which backup to use and wait for the reply, since the event\'s reputation is at stake', 33, 'Keeping your senior informed is wise, but waiting leaves your team idle. Go with a recommendation and ask them to correct you only if they disagree.'),
      o('Take one-line views for five minutes, pick a backup and give each person a first task', 100, 'You heard people quickly, decided and gave actions, which steadies a group. After the event, write down what the supplier plan lacked and fix it within the week.'),
      o('Ask the team to vote on the backup option and go with the majority, so that no one can say the decision was one person\'s', 17, 'A vote looks fair, but in a crisis people want someone to carry the call. Hear them for a few minutes, then decide and say that it is your decision.'),
    ]),
    sc('decide', 'You made a call that your team disagreed with, and it has just turned out to be wrong. People are quiet. What do you do?', [
      o('Explain the reasons you had at the time, so that the team can see the call was sensible given what you knew', 33, 'Reasons matter, but giving them first sounds like defence and the team hears an excuse. Own the result first, and share the reasoning later if people ask.'),
      o('Thank the team for the doubts they raised, move to the fix right away and hold the discussion once the pressure is off', 67, 'Moving to the fix is right and thanking them helps. Say clearly that the call was yours, and name the day you will hold the review.'),
      o('Keep the team busy on the fix and leave the review for the monthly meeting', 17, 'A monthly review comes too late, and the quiet in the room goes unexplained. Spend five minutes now saying what went wrong, then fix.'),
      o('Say the call was yours and it was wrong, name what you missed and ask what they saw that you did not', 100, 'You took responsibility and asked for the information you had not used, which makes it safer for others to speak next time. Note their points and use them in the next decision.'),
    ]),
    sc('influence', 'You need someone in another department, team or club to share data for your project, but they are busy and have not replied to two messages. What do you do?', [
      o('Send a fourth message with your manager copied, so that they can see the matter is serious', 17, 'Copying a manager can get a reply, but it makes the colleague defensive and costs goodwill you will need later. Try a call or a visit first.'),
      o('Call or walk over, ask what is making their month hard, and offer to shrink the request or help with something they need', 100, 'You show that you understand their priorities and make saying yes easier. Thank them in front of their team once the data arrives.'),
      o('Ask a mutual contact who knows them to introduce you and explain why the data matters', 67, 'A warm introduction can open a door, and it is a sensible second step. Do not hide behind it, and speak to the person yourself once you are introduced.'),
      o('Use last year\'s figures from your own files and mention the limit in your report', 50, 'A workaround keeps the project moving and is honest about the limit. Still speak to the colleague once about future needs, so that next time they are not a stranger.'),
    ]),
    sc('influence', 'You want your college club to try a new format for its yearly event, but the senior members prefer the old one. You are not an office-bearer. What do you do?', [
      o('Prepare a presentation with examples from other colleges\' fests and ask for time in the next meeting to show it', 33, 'Examples help, but a presentation to people who have not asked for it can feel like an attack on their work. Speak to one senior member first, so that no one is surprised.'),
      o('Ask what last year\'s attendees liked, then suggest trying the new format in one session of the old event', 100, 'You used evidence and made agreeing cheap for the seniors, because the risk is small. Ask a senior member to help shape the trial, and look at the result together.'),
      o('Meet one senior member you respect, ask what worries them about changing, and fit their view into your proposal', 67, 'Listening first is a strong move and builds an ally. Add something to show, such as attendee comments or a small trial, so that the idea does not rest on goodwill alone.'),
      o('Let it go this year, and bring the idea back when you hold a position in the club', 17, 'Waiting avoids a quarrel but wastes a year, and your idea gets no testing. You can start now with a small test and a few facts.'),
    ]),
    { ...sc('direction', 'You lead a class project group of five. Exams are in three weeks, and every member has a different idea of how much time they can give. What do you do?', [
      o('Share the work equally by pages, but set an internal deadline a week before the real one so late work can be fixed', 50, 'A buffer week is a good idea, but equal pages ignore that some members have much less time. Ask for available hours first, then share the work to match.'),
      o('Give each topic to the strongest person in it so that quality is highest, and ask the others to review', 33, 'Strengths matter, but this can overload two or three people and leave the rest idle before exams. Mix strengths with the hours people actually have.'),
      o('Take the biggest part yourself and give the others small sections, since they are busy preparing for exams', 17, 'It feels responsible, but you may tire before your own exams and the others learn little. Share the load with a plan built on real hours.'),
      o('Ask each member for free hours, split the work to match and fix a weekly check', 100, 'You used the real limits of the group, and the weekly check catches problems early. Write the plan where everyone can see it, and agree who covers if someone gets stuck.'),
    ]), stages: ['student'] },
    { ...sc('coach', 'You are a new lead. A close colleague, who is now on your team, keeps submitting work with errors and says, "We are friends, you know how I work." What do you do?', [
      o('Arrange a check step where another team member reviews all their work before it goes out, without saying much to them', 33, 'A review step catches errors, but the colleague is left unaware and the friendship rests on a quiet workaround. Say it to them directly as well.'),
      o('Invite them for tea and say as a friend that the errors are affecting you both, then ask them to double-check their work', 50, 'The friendly setting helps, but "as a friend" may blur the standard you need. Add one or two concrete examples and a date when you will look again.'),
      o('Fix the errors for now and raise it after the current project ends, when things are calmer', 17, 'Waiting protects the mood today, yet the errors continue and you carry the cost. Choose a day this week for the talk.'),
      o('Talk privately, show two examples, ask what would help and fix a date to look again', 100, 'You keep the friendship and the standard together, which is what the new role needs. On the agreed date, check the work and say what you see.'),
    ]), stages: ['firsttime'] },
    { ...sc('delegate', 'You manage three team leads. One of them keeps sending you problems to solve instead of proposals. You can solve each in minutes. What do you do?', [
      o('Keep solving them quickly, but write a short note after each one so that the lead can learn your reasoning', 33, 'Notes are a good touch, but you are still the one thinking, so the habit stays. Ask the lead for an option first, then add your note.'),
      o('Solve the urgent ones yourself, and ask the lead to think over the rest and come back the next day', 50, 'Splitting by urgency is practical, and the delay gives time to think. Tell the lead what you expect on return, such as two options and a choice.'),
      o('Ask which options they have thought of and which one they prefer, before you give your own view', 100, 'You build their judgement without leaving them alone with it. Over some weeks, expect them to arrive with a proposal, and say so when they do.'),
      o('Tell the team leads that from next week every problem must arrive with one solution, and explain the rule in the team meeting', 67, 'A clear rule sets the standard, but it can make people hide problems they cannot solve. Pair it with time to think it through together when needed.'),
    ]), stages: ['experienced'] },
    { ...sc('decide', 'You run a small business. A regular customer asks for a big discount on a large order and says they will go elsewhere otherwise. You have no rule on discounts. What do you do?', [
      o('Match the competitor\'s price if the customer can show the quote, since a regular customer is worth protecting', 50, 'Checking a real quote is better than guessing, but matching it may sink your margin. Work out your lowest acceptable price before you say yes.'),
      o('Give the discount this once, but tell them clearly that it is a one-time offer for this order', 33, 'Saying one-time helps, but customers remember, and you have decided under pressure without your numbers. Check the cost first and then set the limit.'),
      o('Refuse politely, because discounts cut profit and other customers will ask for the same', 17, 'A firm line protects margin, but a flat no with no reasons can lose a good customer needlessly. Weigh the order size and the relationship against your cost.'),
      o('Ask for a day, work out your cost and offer a smaller discount for advance payment', 100, 'You bought time, used your numbers and made an offer that protects you. Write down the rule you arrive at, so the next request takes five minutes.'),
    ]), stages: ['founder'] },
  ],

  phrases: {
    direction: [
      `"Our goal is [goal] by [date], and the reason it matters is [reason]."`,
      `"This week the top three priorities are [1], [2] and [3], and [item] will wait until [date]."`,
      `"Can you tell me in your own words what we are trying to achieve, so I know I explained it clearly?"`,
    ],
    delegate: [
      `"I would like you to take this on. The result I expect is [result] by [date], and let us check in on [day]."`,
      `"You can decide how to do it. What matters is that it meets [standard]."`,
      `"This is close. Two things to change are [1] and [2], and I can look at the next draft on [day]."`,
    ],
    coach: [
      `"Can I share something I noticed about [specific situation], what effect it had and what I suggest next time?"`,
      `"What would you try first?"`,
      `"What is one thing I could do differently to make your work easier?"`,
    ],
    decide: [
      `"Here are the options. I am going with [option] because [reason], and what we still do not know is [unknown]."`,
      `"I have heard everyone. The call is mine, and I will review it on [date]."`,
      `"This did not work. Here is what I missed and what we will change."`,
    ],
    influence: [
      `"What are your priorities this month, and where could my team make your work easier?"`,
      `"Could we try a small version first for [short period] and look at the result together?"`,
      `"This worked because of [person or team] and what they did, [specific action]."`,
    ],
  },

  stagePlan: {
    student: [
      'This week: write the goal, the date and each person\'s task for your current group work, and share it for confirmation.',
      'Next two weeks: hold a short weekly check, talk privately to anyone who has fallen behind and give the quieter members a real part.',
      'Before the submission or event: ask a teacher or senior for feedback on the plan and take their suggestions into account.',
      'After it ends: hold a ten-minute review, note two things you will do again and two you will change, and keep it for the next group.',
    ],
    firsttime: [
      'This week: write the goal and top three priorities for your team in your own words and share them at a short meeting.',
      'Next two weeks: hold a one-to-one with each team member and hand over two tasks with a written brief.',
      'Before the end of the month: have the one feedback talk you have been avoiding, using a specific example.',
      'After a month: ask your team and your manager for feedback on how you lead, and choose one habit to change next month.',
    ],
    experienced: [
      'This week: ask three people at different levels to say the goal and priorities, and close any gap you find.',
      'Next two weeks: hand a recurring decision to a team lead and agree the limits and the review date.',
      'Over the month: use one-to-ones for development and ask each direct report what you should start, stop and continue.',
      'After the quarter: read your decision log, check what your teams now do without you and plan the next stretch task for each person.',
    ],
    founder: [
      'This week: write the goal for the next three months and the three weekly jobs that must be done, with a name against each.',
      'Next two weeks: turn one job you explain repeatedly into a written checklist or voice note and hand it to a helper.',
      'Over the month: start a fifteen-minute weekly check-in with each helper and set simple rules for spending and discounts.',
      'After the month: review which decisions still come only to you, move one more to a helper and retake the assessment.',
    ],
  },

  talk: {
    direction: {
      q: 'Tell me about a time you gave a group a clear direction when the goal was unclear.',
      a: 'Describe the situation, how you stated the goal, date and priorities, how you checked that people understood, and what the outcome was.',
      line: 'Set direction for [team or project] by defining [goal] and [priorities], which helped the team deliver [result].',
    },
    delegate: {
      q: 'Tell me about a task you handed over to someone, and how you made sure it went well.',
      a: 'Say what you handed over, how you explained the result, deadline and check-in, how you supported the person without taking over, and what they learned.',
      line: 'Delegated [task] to [person or role] with a clear brief, which freed [time or capacity] and developed [skill].',
    },
    coach: {
      q: 'Tell me about a time you gave someone difficult feedback and what happened afterwards.',
      a: 'Describe what you noticed, how you raised it privately with a specific example, how the person responded and what changed. Include something you learned about giving feedback.',
      line: 'Coached [person or team] on [skill or behaviour] through regular feedback, resulting in [change].',
    },
    decide: {
      q: 'Tell me about a time you had to make a decision quickly with incomplete information.',
      a: 'Explain the situation and the options, the fact that mattered most, your decision and how you explained it, and what happened. If it went wrong, say what you owned and changed.',
      line: 'Made a time-critical decision on [issue] with limited information, which led to [outcome] and a review of [lesson].',
    },
    influence: {
      q: 'Tell me about a time you got something done through people who did not report to you.',
      a: 'Describe whose support you needed, how you learned what they cared about, the evidence or small trial you used and how you thanked them.',
      line: 'Gained support from [team or stakeholder] for [initiative] without formal authority, by [method], resulting in [outcome].',
    },
  },

  talkTitles: {
    strong: 'How to show this strength in an interview or on your CV',
    weak: 'How to answer if you are asked about your weakest area',
    intro: 'Interviewers and appraisal panels often ask for a real example of leading, so prepare one story for each habit with what you did, how others responded and what changed.',
    mode: 'interview',
  },
};

void BASE;
