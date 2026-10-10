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
      { d: 'direction', text: 'I pick a few priorities and tell people clearly what we will leave for later.' },
      { d: 'direction', text: 'I tend to assume that everyone already knows the goal, so I do not repeat it.', reverse: true },
      { d: 'delegate', text: 'When I hand over a task, I state the result I expect, the deadline and the point where I want an update.' },
      { d: 'delegate', text: 'When someone\'s work is not what I wanted, I quietly redo it myself instead of explaining what to change.', reverse: true },
      { d: 'delegate', text: 'I give people tasks that stretch them a little and stay available to support them.' },
      { d: 'delegate', text: 'I keep tasks I enjoy even when someone else could learn to do them.', reverse: true },
      { d: 'delegate', text: 'I let people do a task in their own way as long as the result meets the standard we agreed.' },
      { d: 'coach', text: 'I give feedback soon after the work and talk about what the person did, not about what kind of person they are.' },
      { d: 'coach', text: 'I leave a performance problem alone until it becomes serious.', reverse: true },
      { d: 'coach', text: 'Before I give an answer, I ask the person what they would try first.' },
      { d: 'coach', text: 'I ask the people I lead what I could do differently, and I act on at least one point.' },
      { d: 'coach', text: 'I tell people in specific words what they did well, not only what went wrong.' },
      { d: 'decide', text: 'When a call is urgent, I decide with the information I have and say what is still unknown.' },
      { d: 'decide', text: 'Even when time is short, I wait until everyone agrees before I decide.', reverse: true },
      { d: 'decide', text: 'When things go wrong in front of the group, I stay steady and give clear next steps.' },
      { d: 'decide', text: 'When a call is going to upset someone, I push it to a senior person so I am not blamed.', reverse: true },
      { d: 'decide', text: 'After a decision goes badly, I look for what I would change instead of finding someone to blame.' },
      { d: 'influence', text: 'When I need support from people who do not report to me, I first find out what they care about.' },
      { d: 'influence', text: 'I build a working relationship with people in other groups or teams before I need a favour from them.' },
      { d: 'influence', text: 'I expect my role or title to get things done without having to persuade anyone.', reverse: true },
      { d: 'influence', text: 'I bring a fact, an example or a small trial to persuade people instead of repeating my opinion.' },
      { d: 'influence', text: 'I thank people publicly when they help my work, and I say what they did.' },
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
        a: 'There is no pass mark and no comparison with other people. Your scores are based only on your own answers, so they cannot say whether you are a good leader. The useful reading is which of the five areas is lowest and which is highest, and what the people you lead would say about each.',
      },
      {
        q: 'Is this a leadership potential test?',
        a: 'It does not measure potential or predict whether you will be chosen as a leader. It shows how you describe your habits today. Most of these habits can be practised, so the report is better used to plan the next two weeks than to judge your future.',
      },
      {
        q: 'How is this different from the soft skills assessment?',
        a: 'The soft skills assessment includes leadership as one of five areas, along with teamwork, adaptability, ownership and problem solving. This leadership self-assessment is only about leadership, split into five habits with situations and advice for different stages. Take the soft skills one for a broad view and this one for depth.',
      },
      {
        q: 'Is this test free?',
        a: 'Yes. You can take it without signing up and see the result straight away, along with a downloadable PDF report.',
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
        href: '/services/assessments/disc-personality-test-careers/',
        title: 'DISC Personality Test for Careers',
        description: 'A work-style view of how you tend to behave in a team.',
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
    x(['student'], 'direction', 'When I lead a group task, I write down who does what and by when, and share it so everyone sees it.', 'Before the next group assignment or club event, post a short message with each person\'s task and date and ask everyone to react to confirm. Check it again halfway through.'),
    x(['student'], 'delegate', 'In a group project, I take the hard parts myself because I do not want to risk the marks.', 'Give each member a part that suits their strength and agree a halfway check. Offer help if they are stuck, but do not take the part back unless they ask.', true),
    x(['student'], 'influence', 'I can get classmates to follow a plan even when I have no marks or position over them.', 'Next time, ask each person what they would like to do in the project before you assign anything, and make sure the plan includes at least one thing each person asked for.'),
    x(['student'], 'coach', 'When a classmate does not do their share, I speak to them privately and ask what is getting in the way.', 'Choose a quiet moment, such as after class, and say what you noticed, for example "Your section is not yet in the file", and ask what you can do to help. Avoid saying it in the group chat in front of everyone.'),
    x(['firsttime'], 'delegate', 'Now that I lead former peers, I find it hard to hand them tasks, so I end up doing too much myself.', 'List your tasks and choose two that you will give this week with a clear result and date. Tell the team you are changing how you work, so it does not seem like a lack of trust in anyone.', true),
    x(['firsttime'], 'coach', 'I have had a one-to-one with each person on my team to ask what they need from me as their lead.', 'Book twenty minutes with each person in the next two weeks. Ask what helps them, what gets in their way and what they want to learn, and write down one thing to do for each.'),
    x(['firsttime'], 'decide', 'I tell my team which decisions are mine, which we make together and which they can make on their own.', 'Write three short lists for your team and share them in the next meeting. Review them after a month, moving items to the team\'s list as trust grows.'),
    x(['firsttime'], 'direction', 'I turn instructions from my manager into a clear goal and priorities for my team, instead of passing them on word for word.', 'After each talk with your manager, write the goal in one sentence, why it matters and the two priorities for the team. Share that version, not the raw message.'),
    x(['experienced'], 'coach', 'I coach the managers who report to me on how they lead, not only on their numbers.', 'In your next one-to-one with a manager, ask how one of their team conversations went and what they would do differently. Give one observation about their leadership, not about the result.'),
    x(['experienced'], 'influence', 'People in other departments come to me for help early, not only when there is a crisis.', 'List three peers in other functions and book a short conversation with each this month about their goals. Offer one thing you can do to make their work easier.'),
    x(['experienced'], 'delegate', 'I still make decisions that a team lead could make, because I can do it faster.', 'Choose one recurring decision and tell the team lead it is theirs from next week, with the limits you expect. Check one sample after two weeks and give feedback on the thinking, not only the outcome.', true),
    x(['experienced'], 'direction', 'Before I change a direction, I explain to my teams what has changed in the facts and what stays the same.', 'The next time priorities shift, send a short note with three lines: what changed, why and what it means for each team this week. Invite questions in the next meeting.'),
    x(['founder'], 'delegate', 'My helpers can do repeat jobs from a written checklist or recording without asking me each time.', 'Pick one job you explain more than twice a month, write it as a ten-step checklist or record a voice note, and ask the helper to follow it once while you watch. Fix the unclear steps.'),
    x(['founder'], 'coach', 'I give feedback to family members or friends who work with me as clearly as I would to any other employee.', 'Choose one issue you have not raised, and have the talk privately with a specific example and what you need next. Agree on a date to review it together.'),
    x(['founder'], 'decide', 'I decide when to spend money, take on a customer or let someone go using clear rules instead of the mood of the day.', 'Write three rules, such as the largest spend you can approve without waiting a day, the customers you will decline and the signs you will act on with a helper. Review the rules each quarter.'),
    x(['founder'], 'influence', 'I can persuade customers, suppliers and partners I do not control to work with me on fair terms.', 'Before your next negotiation, write what the other side wants most, what you can offer and the one fact you will bring. Ask what would make it easier for them to say yes, and write the agreement down.'),
  ],

  stageAdvice: {
    student: {
      direction: sa(
        'As a student leader, your group changes with every assignment or event, so the goal is often unclear until the last week.',
        'On day one of a project, write the goal, the deadline and each person\'s part in a shared message and ask everyone to confirm.',
        'Split the work into weekly checkpoints and mark each as done or not in the group chat every Friday.'
      ),
      delegate: sa(
        'As a student leader, you may be afraid that another member will lower the quality, so you take the hardest parts yourself.',
        'Give each member a task that fits something they are good at or want to learn, and agree a halfway date to look at it.',
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
        'Rewrite each instruction from your manager as a goal with a date and a reason before you pass it to your team.',
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
        'List your decisions of the last month and give one recurring type to a team lead, with limits and a review date.',
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
        'Pick one task that does not need you, such as scheduling, follow-up messages or basic bookkeeping, and train a helper to do it with a checklist.',
        'Set a rule that you review a sample of the delegated work in the first month, then move to a weekly spot check.'
      ),
      coach: sa(
        'As a founder or owner, helpers may be family, friends or part-timers, which makes you hesitate to correct them.',
        'Give feedback privately, with one example and one request, and agree the date when you will look at it again.',
        'Hold a fifteen-minute weekly talk with each helper on what went well, what is stuck and what they need from you.'
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
    sc('direction', 'You are leading a team that has just received three new requests from different seniors, all marked urgent. Your team is already full. What do you do?', [
      o('Accept all three and ask the team to work longer to finish', 17, 'Taking everything on avoids a difficult talk but spreads the team thin and hides the trade-off. Take the list back to the people asking and ask which one comes first.'),
      o('Tell the seniors your team can only do one right now and ask them to settle the order', 67, 'Good instinct to push back, but it can sound like a refusal. Add what you can do and by when, and suggest your own order so that the seniors respond to a plan.'),
      o('Pick your own order, tell the team what is first and what waits, and tell the seniors the dates you can give', 100, 'Strong. You set a clear priority, protected the team and gave the seniors an honest timeline. Invite them to challenge the order if something is wrong.'),
      o('Start all three so nobody is upset and see what gets done', 0, 'Starting everything usually means finishing nothing well, and the team will not know what matters. Choose an order and say it aloud, even if some people are disappointed.'),
    ]),
    sc('direction', 'Halfway through a project, a member says, "I thought we were doing a different thing." Others nod. What do you do?', [
      o('Say that the goal was explained at the start and that they should have listened', 0, 'This protects your pride but not the project. If several people missed the goal, the message was probably not clear enough. Restate it simply and ask what was confusing.'),
      o('Stop the work, restate the goal in one sentence, ask each person what they understood and fix the gaps', 100, 'Strong. You treat it as a communication gap and fix it quickly, which saves more time than pushing on. Write the goal where all can see it.'),
      o('Ask the group to vote on whether to change the goal', 33, 'Voting might make people feel heard, but changing the goal because of a misunderstanding makes the plan unstable. Clarify first, and change it only if there is a real reason.'),
      o('Send the written goal again in the group and continue', 50, 'Resending is quick and helps, but it does not show whether people now understand it. Add a short check, asking two people to say the goal in their words.'),
    ]),
    sc('delegate', 'You give a team member a report to prepare. When it comes back, it is only partly what you wanted, and the deadline is tomorrow. What do you do?', [
      o('Finish it yourself tonight so it is right', 33, 'It solves tomorrow, but the person learns nothing and next time you will do it again. If you must finish it, show them afterwards what you changed and why.'),
      o('Send it back with two specific changes and an offer to look at the draft in the evening', 100, 'Strong. You keep the work with the owner, give clear direction and offer support under the time limit. This also shows how to brief better next time.'),
      o('Send it up as it is and tell your manager that the team member did the work', 0, 'This avoids effort but puts a weak report in front of your manager and the person without feedback. You remain responsible for what your team delivers.'),
      o('Tell the person it is not good enough and ask them to try again', 50, 'Asking for a redo can work, but without saying what to change the person is guessing. Name the two points and add a time to check in.'),
    ]),
    sc('delegate', 'You have been asked to organise a college fest session. You love doing the design work, and a junior says she would like to try it. What do you do?', [
      o('Do the design yourself because the quality matters for the fest', 17, 'Quality matters, but if you keep every enjoyable task, the junior never learns and you remain overloaded. Give her the design with a clear brief and a review before the deadline.'),
      o('Give her the design with a clear brief, a draft date and an offer to review, and take on the part nobody else wants to do', 100, 'Strong. You develop a junior while staying useful. Taking on the dull task yourself also shows fairness.'),
      o('Give her the task but keep checking in every hour to see her progress', 33, 'The task is handed over, but hourly checks tell her you do not trust her. Agree two check-in points and let her work between them.'),
      o('Ask her to watch you do the design first and decide later', 67, 'Watching can help her learn, but delay costs time. Agree a date when she takes over a section so the learning turns into doing.'),
    ]),
    sc('coach', 'A team member has arrived late a few times this month. It has not caused a major problem yet. What do you do?', [
      o('Wait and see whether it improves, since nothing serious has happened', 17, 'Waiting feels kind, but small problems grow when no one speaks. A short, calm talk now is easier than a serious one later.'),
      o('Mention it in the team meeting so everyone is reminded about timing', 0, 'This avoids the individual talk but embarrasses the team and still leaves the person unsure that you meant them. Speak to the person privately.'),
      o('Speak privately, say the dates you noticed, ask what is going on and agree what will change', 100, 'Strong. You stay specific and open, and the person can explain any reason. Note what you agreed and check in after two weeks.'),
      o('Send a firm message asking them to be on time from now on', 50, 'A message is a start and sets the expectation, but it misses the chance to understand the cause. Follow up with a short conversation.'),
    ]),
    sc('coach', 'Someone on your team asks you how to handle a difficult client email. You know exactly what to write. What do you do?', [
      o('Write the reply for them, since it is quicker and the client is waiting', 33, 'Quick help works for an emergency, but they will ask again next time. If you do it, explain your reasoning afterwards so they can learn from it.'),
      o('Ask what they think the client wants and how they would reply, then suggest improvements to their draft', 100, 'Strong. You help them think and keep the work theirs, which builds judgement. Share your own approach after they have tried.'),
      o('Tell them to figure it out on their own since that is how you learned', 0, 'Struggle can teach, but leaving someone alone with a client email risks the relationship and the person\'s confidence. Offer a way to think it through first.'),
      o('Give them a template that you use for such emails', 67, 'A template is useful and saves time, but it does not teach them to read the client\'s concern. Pair it with a question about how this client differs.'),
    ]),
    sc('decide', 'A supplier fails to deliver on the morning of an important event. Your team looks at you. You have two backup options, both imperfect. What do you do?', [
      o('Call a quick huddle, ask for one-line views, choose a backup, tell everyone the reason and the first action for each person', 100, 'Strong. You take views quickly, decide and give clear actions, which steadies the team. Note afterwards what to change in the supplier plan.'),
      o('Ask the team to vote on the backup option', 50, 'A vote shows respect, but in a crisis people look for a clear call. Hear them for a few minutes, then decide.'),
      o('Ask your senior to decide, since the event is important and the risk is high', 17, 'Informing your senior is wise, but handing over the decision leaves the team waiting. Make a recommendation and ask them to confirm it.'),
      o('Wait for the supplier\'s reply before choosing, in case they fix it', 33, 'Some waiting can be reasonable, but set a time limit. Decide by a stated hour on a backup, and drop it if the supplier comes through.'),
    ]),
    sc('decide', 'You made a call that your team disagreed with, and it has just turned out to be wrong. People are quiet. What do you do?', [
      o('Point out that the team agreed in the end, so it was a shared decision', 0, 'This shifts the blame and weakens trust. The call was yours to make, and owning it makes it safer for others to own theirs.'),
      o('Say nothing and move quickly to fix the problem', 33, 'Fixing is right, but silence leaves people to guess. A short acknowledgement costs little and builds trust.'),
      o('Own the call, say what you missed, explain the fix and ask the team what they saw that you did not', 100, 'Strong. You take responsibility, correct course and invite the information you did not use. Use their input in the next decision.'),
      o('Apologise at length and offer to let the team make the next few decisions', 50, 'Owning the mistake is good, but long apologies and giving away your role can unsettle the team. Be brief, fix it and keep leading.'),
    ]),
    sc('influence', 'You need a colleague in another department to share data for your project, but they are busy and have not replied to two messages. What do you do?', [
      o('Escalate to your manager and ask them to push the other department', 17, 'Escalation sometimes works, but it can damage the relationship and may slow things later. Try a direct approach first.'),
      o('Walk over or call, ask what is making their month difficult, and offer to make the request smaller or help with something they need', 100, 'Strong. You show that you understand their priorities and make saying yes easier. Thank them publicly after.'),
      o('Send a third message marking it urgent', 33, 'Urgency tags work only a few times. A different approach, such as a call or a smaller request, is more likely to move things.'),
      o('Look for the data in other places and avoid depending on them', 67, 'Finding another source can be practical, but you miss the chance to build the relationship. If you do find a workaround, still speak to the colleague about future needs.'),
    ]),
    sc('influence', 'You want your friends\' club to try a new format for its yearly event, but the senior members prefer the old one. You are not an office-bearer. What do you do?', [
      o('Tell them that the old format is boring and the club is going nowhere', 0, 'Criticism of what they built makes people defend it. Ask what worked about the old format first.'),
      o('Collect feedback from last year\'s attendees and suggest a small trial of the new format inside the old event', 100, 'Strong. You use evidence and lower the risk, so agreeing costs the seniors little. Ask them to help shape the trial.'),
      o('Wait until you become an office-bearer, and then change it', 17, 'Waiting protects you from conflict but wastes a year. You can influence now by bringing facts and a small test.'),
      o('Gather a few supporters and push the idea at the next meeting', 50, 'Supporters help, but pushing from numbers can split the club. Speak to a senior member beforehand, so they are not surprised in the meeting.'),
    ]),
    { ...sc('direction', 'You lead a class project group of five. Exams are in three weeks, and every member has a different idea of how much time they can give. What do you do?', [
      o('Divide the work equally by number of pages and tell everyone to finish their part', 33, 'Equal pages look fair but ignore how much time each person has. Ask for available hours first and share the work on that basis.'),
      o('Ask each member for their free hours, split the work to match, set a weekly checkpoint and agree who covers if someone gets stuck', 100, 'Strong. You use the real limits of the group, and the weekly checkpoint catches problems early. Write the plan where everyone can see it.'),
      o('Do most of the work yourself so that the project is finished before exams', 0, 'It feels responsible, but it burns you out before exams and the others learn nothing. Share the work with a realistic plan.'),
      o('Ask the teacher to tell the group how to divide the work', 50, 'A teacher\'s guidance can help, but the group still needs its own plan. Ask for advice on one point, and make the plan yourselves.'),
    ]), stages: ['student'] },
    { ...sc('coach', 'You are a new lead. A close colleague, who is now on your team, keeps submitting work with errors and says, "We are friends, you know how I work." What do you do?', [
      o('Fix the errors quietly so that you do not have to raise it', 17, 'This protects the friendship today but costs you time and holds your colleague back. The friendship is stronger if you can be honest.'),
      o('Have a private talk, show two examples of the errors, say you want to help and ask what support they need, then agree a check date', 100, 'Strong. You keep the friendship and the standard together. Follow up on the date you agreed so the words become practice.'),
      o('Tell your manager so that it is not your decision', 33, 'Involving the manager is sometimes needed, but going first to them skips the chance to fix it directly. Speak to your colleague first.'),
      o('Raise it in the team meeting without naming anyone', 50, 'A general reminder is safe, but the person may not realise it is about them. Follow up with a private conversation.'),
    ]), stages: ['firsttime'] },
    { ...sc('delegate', 'You manage three team leads. One of them keeps sending you problems to solve instead of proposals. You can solve each in minutes. What do you do?', [
      o('Keep solving them, since it is quick and builds your reputation as helpful', 17, 'It is quick today, but it keeps the lead dependent and your time stuck. Move the habit gradually.'),
      o('Tell the lead to stop bringing problems and only bring solutions', 50, 'The intention is right, but an instruction without support may make them hide problems. Teach them how to think it through first.'),
      o('Ask "What do you think we should do, and what are the options?" each time, and give feedback on their thinking before you offer yours', 100, 'Strong. You build their judgement without leaving them alone. Over a few weeks, expect proposals instead of problems.'),
      o('Pass the problems to another lead who is better at solving them', 33, 'It might solve the problem but does not grow the first lead and overloads the second. Coach the first one to own it.'),
    ]), stages: ['experienced'] },
    { ...sc('decide', 'You run a small business. A regular customer asks for a big discount on a large order and says they will go elsewhere otherwise. You have no rule on discounts. What do you do?', [
      o('Agree on the spot to keep the customer', 17, 'Losing a big customer feels worse than a thin margin, but a discount given in fear sets a pattern. Check your cost first and decide within limits.'),
      o('Say you will reply by tomorrow, work out your cost and the lowest price you can accept, and offer a smaller discount with a condition such as advance payment', 100, 'Strong. You buy time, use your numbers and make an offer that protects you. Write down the rule for next time.'),
      o('Refuse, as a firm policy to never give discounts', 33, 'Firmness protects the margin, but with no reasoning you may lose a good customer needlessly. Decide using your numbers and the value of the relationship.'),
      o('Ask your helpers what they would do and follow the majority', 50, 'Your helpers may have useful views about the customer, but they do not carry the financial risk. Ask them, then decide with your own numbers.'),
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
