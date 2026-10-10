import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

const BASE = 'https://futurecareerschool.com/services/assessments/';

export const bundle: SkillTestBundle = {
  test: {
    id: 'decision-making-skills-assessment',
    slug: 'decision-making-skills-assessment',
    pageUrl: '/services/assessments/decision-making-skills-assessment/',
    breadcrumbName: 'Decision-Making Skills Assessment',
    metaTitle: 'Decision-Making Skills Assessment | Free Self-Rating Test',
    metaDescription:
      'Free decision making test with 40 questions and five scores: clarity, facts, options, risk and follow-through. Instant result and a two-week plan.',
    h1Lead: 'Decision-Making Skills',
    h1Accent: 'Assessment',
    eyebrow: 'Course, job and life choices in one honest report',
    heroSub:
      'Choosing a stream, a course, a job offer, a city or a loan is rarely hard because of one thing. For some people the real question is unclear, for others it is weak information, too few options, fear of regret or never acting. Rate statements and choose what you would do in real situations, and see which part of your decision-making to build first.',
    stats: [
      { value: '40', label: 'questions' },
      { value: '5', label: 'decision areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five decision-making areas from your own ratings',
      'About 7 minutes, no sign-up',
      'Your weakest step and a two-week plan to practise it',
    ],
    reportTitle: 'Decision-Making Report',
    reportFile: 'future-career-school-decision-making-report.pdf',
    reportKicker: 'DECISION-MAKING REPORT',
    resultKicker: 'Your decision-making result',
    scoreLabel: 'Overall decision-making',
    bands: {
      high: 'A relative strength.',
      mid: 'Developing, with room to grow.',
      low: 'This step needs the most work.',
    },
    domainsHeading: 'Five steps of a good decision this self-assessment covers',
    domainsIntro:
      'A decision usually goes wrong at one particular step, not everywhere. These five steps run from knowing what you are deciding to acting on it and reviewing it, written as everyday habits you can rate honestly.',
    domains: [
      {
        key: 'clarity',
        name: 'Defining the decision',
        short: 'Knowing what you are really deciding and why',
        strong: 'You can state the decision in one sentence, you know what matters most to you, and you separate your own wishes from what others expect.',
        weak: 'You start comparing options before the real question is clear, or you let other people\'s expectations set the question for you.',
        plan: [
          'Write the decision as one sentence beginning with "I need to decide whether to..." and read it aloud to someone close.',
          'List your top three priorities for this decision, for example interest, money in the first years, location or family needs, and rank them.',
          'Write the date by which you must decide and the names of the people the decision affects.',
        ],
      },
      {
        key: 'facts',
        name: 'Gathering and checking information',
        short: 'Finding reliable facts before choosing',
        strong: 'You check facts at the source, speak to people who have actually done it, and notice when a source has something to sell.',
        weak: 'You rely on forwarded messages, one relative\'s opinion or a coaching centre\'s pitch, and rarely check the details yourself.',
        plan: [
          'Pick the one fact your decision depends on most and verify it on an official website, a prospectus or a notification.',
          'Speak to two people who have actually done the course, job or move, and ask what surprised them.',
          'Keep one page of notes with each fact and where you found it, so you can check it again later.',
        ],
      },
      {
        key: 'options',
        name: 'Comparing options and trade-offs',
        short: 'Weighing choices against what matters to you',
        strong: 'You compare at least three real options, count what each one costs and gives, and check what each keeps open or closes off.',
        weak: 'You compare only two options, go with the first one that feels good, or judge only by how things look today.',
        plan: [
          'Add a third option to your list, even if it is waiting six months or staying where you are.',
          'Make a small table with each option as a column and your three priorities as rows, and give each cell a score from 1 to 5.',
          'For each option, write one line on where it leads after two or three years and one line on what it makes harder to do later.',
        ],
      },
      {
        key: 'risk',
        name: 'Handling risk, regret and fear',
        short: 'Facing uncertainty without freezing or rushing',
        strong: 'You name the worst realistic outcome, ask whether a choice can be tested or reversed, and accept that a good decision can still turn out badly.',
        weak: 'Fear of the wrong choice, or of what people will say, makes you delay for weeks, hand the choice to someone else or rush to end the discomfort.',
        plan: [
          'Write the worst realistic outcome of your decision and what you would do in the first week if it happened.',
          'Ask whether there is a smaller, cheaper way to test the choice first, such as a trial class, a short project or a conversation with someone in the role.',
          'Write the fear you are carrying in one line, and next to it, whose voice it is: yours, a relative\'s or a friend\'s.',
        ],
      },
      {
        key: 'commit',
        name: 'Deciding, acting and reviewing',
        short: 'Closing the decision, starting and checking back',
        strong: 'You decide by a date, take a first step within days, tell someone, and set a review date so you can change course on facts instead of mood.',
        weak: 'You postpone until the deadline forces you, decide but do not act, or drop the choice at the first difficulty without a fair trial.',
        plan: [
          'Set a decision date no more than two weeks away and put it in your calendar with the words "decide by".',
          'Choose a first step you can finish within three days of deciding, such as filling a form, paying a fee or sending a message.',
          'Pick a review date and write down two facts that would make you change the decision.',
        ],
      },
    ],
    questions: [
      { d: 'clarity', text: 'Before I compare options, I write down in one sentence what exactly I am deciding.' },
      { d: 'clarity', text: 'I know the two or three things that matter most to me in a decision, such as interest, money, location or family needs.' },
      { d: 'clarity', text: 'I often start choosing before I am clear what the real question is.', reverse: true },
      { d: 'clarity', text: 'I can separate what I want from what others expect me to want.' },
      { d: 'clarity', text: 'I know the last date by which each important decision has to be made.' },
      { d: 'facts', text: 'I check important facts on an official or first-hand source instead of trusting forwarded messages or videos.' },
      { d: 'facts', text: 'Before a big choice, I speak to at least one person who has actually done the course, job or move.' },
      { d: 'facts', text: 'I usually go with what one friend or relative told me, without checking it.', reverse: true },
      { d: 'facts', text: 'When a coaching centre, agent or course seller advises me, I remember that they gain if I say yes.' },
      { d: 'facts', text: 'I rarely write down where I found a fact, so later I cannot say how I know it.', reverse: true },
      { d: 'options', text: 'I compare at least three real options before I choose.' },
      { d: 'options', text: 'For each option I list what it costs me and what it gives me in money, time, effort and learning.' },
      { d: 'options', text: 'I judge options by how they look today and rarely think about where they lead later.', reverse: true },
      { d: 'options', text: 'I check which doors each option keeps open and which it closes.' },
      { d: 'options', text: 'I rank the options against my own priorities before I choose one.' },
      { d: 'risk', text: 'I can name the worst realistic result of a decision before I make it.' },
      { d: 'risk', text: 'Fear of choosing wrongly stops me from deciding for weeks.', reverse: true },
      { d: 'risk', text: 'I ask whether a choice can be tested cheaply or reversed before I treat it as final.' },
      { d: 'risk', text: 'I accept that a sensible decision can still turn out badly.' },
      { d: 'risk', text: 'I drop choices I believe in because I dread explaining them to relatives or friends.', reverse: true },
      { d: 'commit', text: 'Once I decide, I set a first step with a date within the same week.' },
      { d: 'commit', text: 'I keep postponing decisions until the deadline forces me to act.', reverse: true },
      { d: 'commit', text: 'After I decide, I tell nobody what I plan to do first.', reverse: true },
      { d: 'commit', text: 'I set a date to review a decision after I have acted on it.' },
      { d: 'commit', text: 'I stay with a decision long enough to give it a fair trial before judging it.' },
    ],
    readingTitle: 'How to read your decision-making result',
    readingSections: [
      {
        title: 'Decisions go wrong at one step, not everywhere',
        body: [
          'Most people do not struggle with every part of deciding. One person defines the question well but never checks facts. Another gathers facts for months and never acts. Your five scores show where your own process tends to break, so you can practise that step rather than trying to become a different person.',
        ],
      },
      {
        title: 'A low score is a habit, not a verdict on you',
        body: [
          'Each statement describes something you do, such as writing the decision in one sentence or setting a review date. Habits can be changed with a few weeks of practice on real choices. A low area means you have not yet used that step often, not that you are bad at choosing.',
          'Your score also reflects how you rated yourself. If you were hard on yourself or generous with yourself, the number moves. Ask someone who has seen you make a decision whether they agree with your ratings.',
        ],
      },
      {
        title: 'Judge the process, not only the result',
        body: [
          'A decision can be made well and still turn out badly because something outside your control changed. A decision can also be made carelessly and work out by luck. This assessment looks at how you decide, so you can judge your choices by the steps you took and the facts you had at the time.',
        ],
      },
      {
        title: 'Turn the report into one real decision',
        body: [
          'Pick one live decision, such as a course, an offer, a city or a loan, and run your lowest area\'s plan on it for two weeks. A real choice gives the habit something to work on. After the plan, retake the assessment and compare the area scores.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool and shows how you describe your own habits. It does not replace feedback from people who have seen you make decisions.',
      'It does not tell you what to choose. It looks at how you decide, not whether a particular course, job or move is right for you.',
      'It is not a psychological test, a personality profile or a diagnosis, and it does not predict selection, performance or success in any exam or job.',
      'Scores are not compared with other people, so there is no pass mark. They only show how your five areas compare with each other.',
      'For major financial, legal or health decisions, use this as a thinking aid and also speak to a qualified professional.',
    ],
    faqs: [
      {
        q: 'What is a decision making test, and is it a decision making style test?',
        a: 'It is a set of statements and real-life situations about how you make choices. You rate yourself, and the report scores five steps: defining the decision, checking information, comparing options, handling risk and fear, and acting and reviewing. It does not sort you into a decision-making style or type, so two people with the same overall score can have very different weak steps.',
      },
      {
        q: 'How good am I at making decisions? What is a good score?',
        a: 'There is no pass mark and no comparison with other people. Your scores are based only on your own answers. The useful reading is which area is lowest, because that is where one or two small habits can help most.',
      },
      {
        q: 'Is this a career decision making self assessment?',
        a: 'It works for career choices such as stream, course, first job, job change or relocation, and also for money and family choices. It does not tell you which career to pick, so use a career interest or fit assessment alongside it for that.',
      },
      {
        q: 'Is this test free, and how long does it take?',
        a: 'Yes, it is free and takes about 7 minutes. You can take it without signing up, see the result straight away and download the PDF report.',
      },
      {
        q: 'How can I improve my decision-making skills?',
        a: 'Practise your lowest step on one real decision for two weeks. Write the question in one sentence, check the key fact at the official source, add a third option, set a decision date and a review date, then retake the test and compare each area with your first result.',
      },
      {
        q: 'How is the score worked out?',
        a: 'Statements are rated from 1 to 5, and statements worded in the negative are reversed. In the situation questions, each option carries a score from 0 to 100. Each area score is the average of its statements and situations, shown out of 100, and the overall score is the average of the five areas.',
      },
      {
        q: 'Can students and freshers use it?',
        a: 'Yes. You choose the stage that fits you, student, fresher, working professional or someone also handling money, family or business choices, and a few statements and the advice change to match your situation.',
      },
      {
        q: 'How is this different from the Confused After 10th test or the soft skills assessment?',
        a: 'The Confused After 10th test finds what is blocking a Class 10 student\'s choice of stream. The soft skills assessment covers teamwork, leadership and similar skills. This one is about the decision process itself, for any age and any kind of choice.',
      },
    ],
    related: [
      {
        href: '/services/assessments/confused-about-career-after-10th-test/',
        title: 'Confused About Career After 10th Test',
        description: 'Find what is blocking a stream or course decision after Class 10.',
      },
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'Leadership, teamwork, adaptability, ownership and problem solving, scored separately.',
      },
      {
        href: '/services/assessments/communication-skills-assessment/',
        title: 'Communication Skills Assessment',
        description: 'Listening, speaking, writing, feedback and presenting, useful when a decision involves other people.',
      },
      {
        href: '/services/assessments/entrepreneurial-aptitude-test/',
        title: 'Entrepreneurial Aptitude Test',
        description: 'Readiness areas for people weighing a business of their own.',
      },
      {
        href: '/blog/career-guidance/factors-to-consider-when-choosing-a-career/',
        title: 'Factors to Consider When Choosing a Career',
        description: 'The points worth weighing before you commit to a career direction.',
      },
      {
        href: '/blog/career-guidance/what-career-should-i-choose/',
        title: 'What Career Should I Choose?',
        description: 'A practical way to narrow down career options.',
      },
      {
        href: '/blog/career-change/skills-needed-for-career-change-india/',
        title: 'Skills Needed for a Career Change',
        description: 'What to build before moving from one field or role to another.',
      },
      {
        href: '/blog/career-options/career-options-after-12th/',
        title: 'Career Options After 12th',
        description: 'The main routes open after Class 12, to compare before you decide.',
      },
    ],
    breadcrumbDescription: 'Free decision-making skills assessment with five scores and a two-week plan.',
    webAppDescription:
      'A free original 40-question decision-making self-assessment covering defining the decision, gathering and checking information, comparing options and trade-offs, handling risk, regret and fear, and deciding, acting and reviewing, with five scores, an overall score, a practice plan and a downloadable report.',
    indexDescription: 'Five-step self-rating of how you make course, job and life decisions, with a two-week plan.',
    indexNote: 'Free, about 7 minutes, PDF report',
  },

  depth: {
    stageHeading: 'Which of these describes you best?',
    stageNote:
      'The decisions in front of you depend on your stage, so your report changes the questions and the advice to match.',
    stages: [
      {
        key: 'student',
        label: 'School or college student',
        description: 'Choosing a stream, course, exam route or college',
        title: 'Treat a course decision as a process with dates',
        body: 'Stream and course choices come with deadlines, entrance exams, counselling rounds and family opinions all at once. A student who writes down the question, checks the official eligibility and compares three routes decides better than one who follows the crowd.',
        actions: [
          'Write down the decision and the last date for it, for example the stream form, the CUET or JEE/NEET registration, or the counselling round.',
          'Check eligibility, fees and syllabus on the official prospectus or notification of at least three routes, not only the one your friends chose.',
          'Speak to one senior who is in the course now and ask what they would check before joining if they could start again.',
        ],
      },
      {
        key: 'fresher',
        label: 'Fresher or job seeker',
        description: 'First job, job search, higher studies or exam preparation',
        title: 'Choose the first step without treating it as the last',
        body: 'Early choices, such as which offer to accept, whether to study further or whether to prepare for a government exam, feel permanent but are usually the first of several moves. Compare what you will learn and who you will learn from, not only the first month\'s pay.',
        actions: [
          'For each offer or route, write what you will learn in the first year, who you will work with, and what you can do next from there.',
          'Ask the company or institute for the exact role, working hours, location and notice terms in writing before you decide.',
          'Set a decision date for each offer and a fallback plan so that a deadline does not push you into a rushed yes.',
        ],
      },
      {
        key: 'professional',
        label: 'Working professional',
        description: 'Job change, promotion, relocation or career switch',
        title: 'Decide with facts about the next role, not just the discomfort in the present one',
        body: 'Job changes and relocations are often triggered by a bad month, which narrows the choice to leaving or staying. A better decision compares the real role, the team, the commute or move costs and what you give up, including options you can test before resigning.',
        actions: [
          'Write why you want to move in two columns: what you are leaving and what you are going towards. If the second column is thin, gather facts before acting.',
          'Speak to two people who currently work in the target company or role, and ask about the team and workload, not just the brand.',
          'Check notice period, benefits you would lose and the real cost of relocation before you accept anything.',
        ],
      },
      {
        key: 'personal',
        label: 'Handling money, family or business choices as well',
        description: 'Loans, savings, family duties or a small business alongside work',
        title: 'Slow down the choices that are hard to undo',
        body: 'Money, family and business decisions often carry costs that last for years and involve people who see things differently. The safest habit is to separate what is reversible from what is not, and to take more time and more checking for the second kind.',
        actions: [
          'Write the full monthly and total cost of the choice, including interest, fees and the time it will take from your work and family.',
          'Talk through the decision with the family members it affects, and write down the one concern each of them raises.',
          'For anything involving a loan, investment or legal paper, ask a qualified person to explain it before you sign.',
        ],
      },
    ],
    tips: [
      'Open a note and finish this sentence before you start comparing anything: "I need to decide whether to..." If you cannot finish it in one line, the question is still unclear, and that is the thing to work on first.',
      'Write your top three priorities for this decision and rank them, for example interest first, location second, early income third. Do it before you look at options so the options do not decide your priorities.',
      'When you notice yourself comparing options, stop for five minutes and write what you are actually trying to solve. Sometimes a choice is really two different questions mixed together.',
      'Make two lists: "I want" and "they expect". Tick the items on the second list that you agree with after thinking. Anything left is theirs, and you can discuss it with them calmly.',
      'Write the last date for the decision next to its name, and add the names of the people it affects. Tell them the date this week, so that nobody is surprised when it arrives.',
      'For the one fact your decision rests on, such as fees, eligibility, placement process or cut-off, find the official page or notification and read it yourself. Forwarded messages and videos are for leads, not for proof.',
      'Find one person who has done the course, job or move and ask them three questions: what surprised you, what would you do differently, and what would you check before joining. Fifteen minutes on a call is enough.',
      'Before acting on advice from a friend or relative, ask them how they know it and when they last checked. Then verify one key point on your own and note the difference.',
      'When a coaching centre, agent or course seller gives advice, ask what they gain if you say yes. Then ask the same question to one person who gains nothing, and compare the answers.',
      'Start one page titled with the decision, and add every fact with its source and the date you checked it. Even five lines help, because when a fee or last date changes you can see at once which fact to recheck.',
      'If you only have two options, add a third. Waiting for a fixed time or staying as you are counts, as long as you write what it would cost you and what it would give you.',
      'Make a small table: options across the top, and money, time, effort and learning down the side. Fill every cell in plain words, for example "two hours of travel a day", before scoring anything.',
      'For each option, write what your life could look like in two or three years if it goes well, and what you would have to do next. A choice that is good for six months can be a dead end after two years.',
      'For each option, write one line on what it keeps open and one line on what it closes. Prefer the option that keeps more doors open when everything else is close.',
      'Give each option a score from 1 to 5 against each of your three priorities, add them up and see which wins. If the winner surprises you, check whether a priority is missing instead of overruling the result.',
      'Write the worst realistic outcome in one line, for example "I join, dislike it and need to switch after a year", and then your first-week plan for that case. Seeing the worst case on paper often makes it easier to plan for.',
      'Set a deadline for the choice, and if you feel stuck at the deadline, ask what exactly you are afraid of. Write the fear down in one line. A named fear can be checked, and an unnamed one grows.',
      'Ask whether you can try before you commit: a trial class, a short course, a month of freelance work, a visit to the workplace or a talk with someone in the role. A small test is cheaper than a big mistake.',
      'After a decision, write down what you knew at the time and why you chose. If it turns out badly, read that note before blaming yourself, and ask only what you would check differently next time.',
      'Write down the one person whose reaction you dread and the two reasons you would give them. Speak to that person before you drop the choice, and listen to what exactly they object to.',
      'Once you decide, pick a first step you can finish in three days and put it in your calendar. It could be filling a form, paying a fee, sending an email or booking a visit.',
      'Make your own deadline two days before the real one. On that day, spend thirty minutes writing the best option and the one doubt left. If no fact you can get in a day would settle the doubt, decide.',
      'Tell one or two people your decision and your first step today, and ask them to check on you after a week. If you worry about being judged, pick someone who listens well, such as an elder sibling or a teacher.',
      'Set a review date one to three months ahead and write two facts that would make you change course, such as marks, workload or team behaviour. On that date, look only at those facts and not at your mood that day.',
      'Decide in advance how long a fair trial lasts, for example one full semester or three months in the job, and write it down. Judge the choice at that point, not in the first difficult week.',
    ],
    strongTip: 'This habit is already working for you. Use it on your next big choice too, and teach it to a friend who is stuck on a decision.',
    domains: {
      clarity: {
        why: 'Many decisions stay stuck because the question itself is blurred. "Which course is best?" is a different question from "Which course keeps my options open and fits my family\'s budget?" Writing the real question and your own priorities first makes the later steps much easier.',
        roles: [
          'Course and stream choices, where interest, marks, cost and family views pull in different directions',
          'Job offers and moves, where you need to know what you are actually trying to improve',
          'Roles such as project lead, analyst or business owner, where framing the problem is part of the work',
        ],
        routine: [
          'Days 1 to 3: Pick one live decision and write it as "I need to decide whether to..." in one sentence. Rewrite it until a friend can understand it.',
          'Days 4 to 7: List your top three priorities, rank them, and mark which ones are truly yours and which came from someone else.',
          'Days 8 to 11: Write the decision date and everyone affected, then tell each of them the date and the question.',
          'Days 12 to 14: Do the same steps for a second, smaller decision, such as a purchase or a weekend plan, so the habit becomes automatic.',
        ],
        mistakes: [
          'Comparing options before the real question is written down, so every option looks both good and bad',
          'Letting a loud opinion at home or in the group become your own priority without checking it',
          'Mixing two decisions into one, such as which course and which city, and getting stuck on both',
        ],
        proof: [
          'A one-page decision note showing the question, your priorities and the date, written before you chose',
          'An example of a time you reframed a vague problem into a clear question and what it changed',
          'A note on how you separated your own priorities from outside expectations in a past choice',
        ],
        askOthers: 'When I talk about this decision, do I make clear what I am actually trying to decide, and do my priorities sound like mine or like someone else\'s?',
        talkingPoints: [
          'You define the problem and your priorities before comparing options',
          'You separate your own goals from outside expectations and can explain the difference',
          'You can explain in a sentence what you were deciding and why it mattered to you',
        ],
        midStep: 'Before your next decision, spend ten minutes writing the question and three ranked priorities, and show them to one person for a quick check.',
      },
      facts: {
        why: 'A decision is only as good as the information under it. In India, advice reaches us through relatives, forwarded messages, videos, coaching centres and agents, and some of it is out of date or comes with a sales interest. Checking at the source often takes only an hour, and it can save you from a costly surprise later.',
        roles: [
          'Admission and course choices, where eligibility, fees and seat rules change from year to year',
          'Job and offer choices, where role details, bond terms and growth paths need checking',
          'Roles in research, analysis, audit, procurement or journalism, where verifying information is the job',
        ],
        routine: [
          'Days 1 to 3: List the five facts your decision depends on and mark which ones you have only heard, not seen on an official source.',
          'Days 4 to 7: Verify the two most important facts on an official website, notification, offer letter or prospectus.',
          'Days 8 to 11: Speak to two people who have done it, and ask what surprised them and what the brochure did not say.',
          'Days 12 to 14: Write a one-page fact note with sources and dates, and mark anything still unchecked.',
        ],
        mistakes: [
          'Treating a forwarded message or a confident video as proof',
          'Asking only people who made the same choice as you, so you hear only confirmation',
          'Trusting the advice of someone who earns from your decision without checking another source',
        ],
        proof: [
          'A fact note with sources for a past decision, showing what you verified and how',
          'An example of a time you found that a popular claim was wrong or out of date, and what you did',
          'A source list you kept for a past decision, with the dates you checked each fact',
        ],
        askOthers: 'When I told you why I chose something, did my reasons come from checked facts or from what I had heard?',
        talkingPoints: [
          'You verify important facts at the source before acting',
          'You seek out first-hand views, including ones that disagree with you',
          'You can say where each important fact came from and how recent it was',
        ],
        midStep: 'For your next decision, verify the single most important fact on an official source and speak to one person who disagrees with the popular view.',
      },
      options: {
        why: 'Choices feel hard when there are only two options and both look bad, or when one option arrives first and everything else is compared against it. Three or more real options, compared against your own priorities and over a few years, give a clearer and calmer choice. Writing out what each one costs in money, time and closed doors also shows trade-offs that a first impression hides.',
        roles: [
          'Course, college and city choices where cost, quality and future routes differ',
          'Job offer and promotion decisions, where pay, learning, stability and growth trade off',
          'Roles in planning, finance, product, operations and management that depend on weighing trade-offs',
        ],
        routine: [
          'Days 1 to 3: List at least three options for one live decision, including waiting or staying as you are.',
          'Days 4 to 7: Build a table with options across and your three priorities down, and give each cell a score from 1 to 5 with a reason in a few words.',
          'Days 8 to 11: For each option, write where it leads in two or three years and what it keeps open or closes.',
          'Days 12 to 14: Look at the totals, check any surprise against your priorities, and write which option you lean to and why.',
        ],
        mistakes: [
          'Dropping an option because of one disadvantage without checking how big it really is',
          'Comparing a new option with your imagined best case and your current option with its worst case',
          'Choosing for the first year and ignoring year three',
        ],
        proof: [
          'A comparison table from a past decision showing options, criteria and your reasons',
          'An example of a time a third option you added turned out to be the best one',
          'A list of options you rejected and the reason for each, kept from a past decision',
        ],
        askOthers: 'When I explain my choice, do I compare enough options, and do I mention what I would be giving up?',
        talkingPoints: [
          'You compare several options against clear priorities, including the option of not changing anything',
          'You look at where each option leads over the next few years, not only today',
          'You can explain what you gave up and why the trade-off was worth it',
        ],
        midStep: 'Add one more option to your next decision and score all options against the same three priorities before you pick.',
      },
      risk: {
        why: 'Every decision has uncertainty. Fear of the wrong choice can freeze you, and fear of what others will say can push you into a choice that is not yours. Naming the worst case, testing small and planning for a setback make uncertainty something you can work with.',
        roles: [
          'Choices that involve money, such as loans, investments and business ideas, where downside planning matters',
          'Career switches and relocations, where you give up something known for something unknown',
          'Roles in project management, finance, healthcare, safety and operations, where risk is part of daily work',
        ],
        routine: [
          'Days 1 to 3: Write the worst realistic outcome of your decision and your first-week plan if it happened.',
          'Days 4 to 7: Look for a small way to test the choice, such as a trial class, a short project or a visit, and do one.',
          'Days 8 to 11: Mark each part of the decision as reversible or hard to reverse, and spend more time on the hard-to-reverse parts.',
          'Days 12 to 14: Write the fear in one line and whose voice it is, then speak to that person or a neutral listener about it.',
        ],
        mistakes: [
          'Waiting for a feeling of certainty that never arrives',
          'Choosing the option that avoids family or friends\' disapproval rather than the one you can live with',
          'Treating every decision as permanent, so even small choices feel heavy',
        ],
        proof: [
          'A past decision where you named the risk, tested small and made a plan for the downside',
          'An example of how you recovered from a choice that did not work out, and what you changed afterwards',
          'A written worst-case plan from a past decision, and what actually happened',
        ],
        askOthers: 'When I am unsure, do I come across as stuck, rushed or calm, and do I ask for the right kind of advice?',
        talkingPoints: [
          'You name risks openly and plan what you would do if they happen',
          'You test choices on a small scale before committing fully',
          'You can describe the worst case calmly and what you would do about it',
        ],
        midStep: 'Pick one decision this month and run a small, cheap test of it before committing the full amount of time or money.',
      },
      commit: {
        why: 'A decision only counts when it turns into action and gets checked afterwards. People who decide but do nothing, or who postpone until the last day, lose options by default. A first step, a witness and a review date turn a decision into a result you can learn from.',
        roles: [
          'Exam preparation, admission and application processes, where deadlines are fixed and late action closes doors',
          'Job transitions, where acting on an offer or a plan within days or weeks matters',
          'Roles in management, sales, operations and entrepreneurship, where steady follow-through is expected',
        ],
        routine: [
          'Days 1 to 3: Pick one pending choice, set a decision date no later than day 7, and write it in your calendar as "decide by".',
          'Days 4 to 7: On or before the decision date, decide using the facts you have and write the choice in one line.',
          'Days 8 to 11: Finish a first step, such as a form, a payment or a message, tell one or two people what you decided, and ask them to check after a week.',
          'Days 12 to 14: Set a review date and write two facts that would make you change course.',
        ],
        mistakes: [
          'Deciding in your head but not telling anyone or setting a first step, so nothing changes',
          'Reviewing a decision in the first hard week instead of at the agreed date',
          'Refusing to change course when new facts clearly show the first choice was wrong',
        ],
        proof: [
          'A decision note with a decision date, first step and review date, and what happened at the review',
          'An example of a time you changed course because of new facts and what you learned from it',
          'A calendar entry or message showing the date you decided and your first step',
        ],
        askOthers: 'Have you seen me decide and then follow through, or do my decisions drift, and what do you notice?',
        talkingPoints: [
          'You decide by a date, act on it quickly and review it against clear facts',
          'You can change course when the facts change, without blaming yourself or others',
          'You act soon after deciding and tell people what you are doing',
        ],
        midStep: 'For the next three decisions, write a first step with a date and a review date on the same page as the decision.',
      },
    },
    thirtyDay: [
      'Week 1: Pick one live decision, write it as one sentence, rank your top three priorities and run the first half of your lowest-area routine.',
      'Week 2: Finish the routine, verify the key facts at the source and ask two people for their honest view of how you decide.',
      'Week 3: Make the decision by your set date, take the first step within three days, tell someone, and move to your second-lowest area.',
      'Week 4: Review the decision against the two facts you wrote down, retake the assessment, and compare each area score with your first result.',
    ],
  },

  extras: [
    x(['student'], 'clarity', 'When I choose a stream or course, I mostly go with what my friends or family prefer.', 'Write three reasons for the choice that would still hold if your friends chose differently. If you cannot, spend a week on a short activity in that subject, such as a free online lesson or a talk with a senior, and then write again.', true),
    x(['student'], 'facts', 'I read the official eligibility and fee details of a course or entrance exam myself, instead of relying on a coaching centre\'s summary.', 'Open the official prospectus or notification for your top course and note the eligibility, last date and fee in your fact note. Compare it with what you were told and mark any difference.'),
    x(['student'], 'options', 'I have compared at least three routes after school, such as a degree, a diploma, a professional course or a skill programme.', 'Pick three routes you have not seriously compared and read the duration, entry rule and what comes next for each. Write one line on what each keeps open if you later change your mind.'),
    x(['student'], 'risk', 'I treat a drop year or a switch of stream as a serious decision, not as a failure or an escape.', 'If you are considering a drop year or a stream change, write what you would do each month of it, what it costs the family, and the date when you will review. A plan with dates is a decision. Without one it is mostly worry.'),
    x(['fresher'], 'facts', 'Before I accept an offer, I check the role, location, working hours and notice terms in writing.', 'Email or message the company for the exact job title, work location, shift pattern, probation terms and any bond. Compare what they send with what was said in the interview.'),
    x(['fresher'], 'options', 'When choosing between a job, higher studies and exam preparation, I compare what I will learn in the first year of each.', 'Make three columns for job, study and exam preparation. Write what you would do each day, who you would learn from and what you could do after a year. Choose on that comparison, not on the loudest advice.'),
    x(['fresher'], 'risk', 'I tend to accept the first offer out of fear that no other will come, even when I have doubts about the role.', 'If doubts remain, ask the company one more question about the role and set a decision date. Meanwhile keep applying until you have signed. Accepting out of fear of having nothing is different from accepting because the role fits.', true),
    x(['fresher'], 'commit', 'I set weekly targets for applications, interviews and skill-building and review them every Sunday.', 'Write a target such as ten applications and two skill hours a day for the week. On Sunday, count what you did and change one thing for next week. A weekly review keeps a job search from drifting.'),
    x(['professional'], 'clarity', 'When I think of changing jobs, I can say what I want to improve, such as learning, role, pay, team or travel time, and what I am willing to give up.', 'Write the two things you most want to change and the two you are willing to compromise on. Show this list to a trusted colleague or friend. It stops you accepting an offer that fixes the wrong problem.'),
    x(['professional'], 'facts', 'Before leaving a job or relocating, I speak to people who work in the new company or city, not only to the recruiter.', 'Find two people through LinkedIn, alumni or friends who work in the target team or live in the target city. Ask about workload, team behaviour and the real monthly cost of living, then compare with what you were told.'),
    x(['professional'], 'risk', 'I tend to decide about resigning or moving when I am angry or tired.', 'Do not submit a resignation on the day you feel worst. Write the decision, wait three working days, and read it again. If the reasons still hold, go ahead with a calm plan for notice and handover.', true),
    x(['professional'], 'options', 'I compare staying and growing in my present role, an internal move and an external move before resigning.', 'Before you resign, ask your manager or HR about a role change or a new responsibility, and add it to your list as an option. Sometimes there is a fix inside the company that you did not know about.'),
    x(['personal'], 'facts', 'Before taking a loan, investing or signing a business agreement, I read the full terms and ask someone qualified to explain what I did not understand.', 'Mark every line of the document you do not understand and take it to a bank officer, accountant or lawyer. Ask what happens if you miss a payment or want to exit early.'),
    x(['personal'], 'options', 'For a money or business decision, I compare the full cost, including interest, fees and the time it will take from work and family.', 'Write the total cost over the whole period and the monthly amount against your income. Add the hours per week the choice will take, and decide only after you have seen all three numbers together.'),
    x(['personal'], 'risk', 'I tend to put money into things because a relative or friend called them a sure thing.', 'No return is certain. Before you put in money, ask what happens if the whole amount is lost, and only use money whose loss you could manage. Check the offer with someone who has no interest in it.', true),
    x(['personal'], 'clarity', 'When a family decision affects several people, I discuss it with them and write down what each person is worried about.', 'Set a time to sit with the family and give each person two minutes to say their main worry. Write them down, and answer each one in your plan before you finalise the decision.'),
  ],

  stageAdvice: {
    student: {
      clarity: sa(
        'As a student, the question is often decided for you by marks, friends and family before you have thought about it yourself.',
        'Write the choice as "I need to decide whether to take X or Y after Class 10/12" and add your own three reasons before the next family discussion.',
        'Make two lists, "my interests" and "what others expect", and share both with one parent or teacher.'
      ),
      facts: sa(
        'As a student, you hear a lot from coaching centres, seniors and social media, and the official details are easy to skip.',
        'Read the official information bulletin or prospectus for your top course, including eligibility, last dates and fees.',
        'Ask a senior or a young alumnus of the course for one thing the brochure does not tell you.'
      ),
      options: sa(
        'As a student, the choice often shrinks to the one or two routes your classmates talk about.',
        'Compare at least three routes, for example a degree, a diploma and a professional course, on duration, cost and what comes next.',
        'For each route, check in the official rules what you can change later, such as lateral entry or a bridge course, where they exist.'
      ),
      risk: sa(
        'As a student, fear of low marks, a failed entrance exam or a family\'s disappointment can freeze or rush the decision.',
        'Write a plan B for the worst case in a sentence, such as which course or exam you would take if a seat does not come.',
        'Tell one trusted adult your fear and ask them to help you plan, not to decide for you.'
      ),
      commit: sa(
        'As a student, deadlines for forms, fees and counselling rounds are fixed, and missing a date closes the door.',
        'Put every last date in your phone calendar with a reminder one week before.',
        'After you choose, plan the first month of preparation or study and review it with a teacher or senior.'
      ),
    },
    fresher: {
      clarity: sa(
        'As a fresher, you may be choosing between an offer, a further degree and an exam, without being clear what you want from the first job.',
        'Write the three things you want from your first two years, for example learning, stability or location, and rank them.',
        'Decide which of them you can compromise on if an offer is not perfect.'
      ),
      facts: sa(
        'As a fresher, you rely on recruiters, friends and company reviews, and some details of the role are never said aloud.',
        'Ask for the job description, location, shift, probation and bond terms in writing before you accept.',
        'Speak to one person who joined the company in the last year to ask about training and the real work.'
      ),
      options: sa(
        'As a fresher, the choice often feels like "this offer or nothing".',
        'Compare the offer with continuing your search for a fixed period and with a short course that strengthens your profile.',
        'Score the options on learning, people, growth and travel, not only on the first month\'s pay.'
      ),
      risk: sa(
        'As a fresher, fear of staying unemployed can push you into the first offer, while fear of a wrong move can keep you from applying.',
        'Set a time limit, for example four more weeks of searching, and a minimum you would accept after that.',
        'Take one small step outside your comfort zone, such as applying to a role in a different sector, to test your options.'
      ),
      commit: sa(
        'As a fresher, a job search can drift into months of scattered effort.',
        'Set weekly targets for applications and skill-building and review them every Sunday.',
        'Once you accept an offer, write a 90-day learning plan and share it with your manager.'
      ),
    },
    professional: {
      clarity: sa(
        'As a working professional, frustration with the present job can make every other job look better.',
        'Write what you want to change and what you want to keep in your current role before you open a job portal.',
        'Separate problems that a new job would fix from those that follow you, such as workload habits.'
      ),
      facts: sa(
        'As a working professional, the recruiter\'s pitch is the main source, and team behaviour or workload is hard to see from outside.',
        'Speak to two current or former employees of the target team and ask about workload, manager style and attrition.',
        'Check notice period, variable pay, benefits you would lose and relocation costs in the offer letter.'
      ),
      options: sa(
        'As a working professional, the choice often shrinks to resign or stay put.',
        'Add an internal role change, a new responsibility or a negotiated change in your present job as options.',
        'Compare a move now with a move six months later after you have built one specific skill.'
      ),
      risk: sa(
        'As a working professional, responsibilities such as EMIs and family needs make every move feel risky.',
        'Calculate how many months of expenses you could cover without income, and set a minimum before you resign.',
        'Test the new field with a side project or part-time course before leaving your job.'
      ),
      commit: sa(
        'As a working professional, you can stay in a half-decision for years, always about to move but never moving.',
        'Set a date by which you will either apply seriously or stop and commit to improving where you are.',
        'After the move, set a three-month review with two clear checks, for example learning and team fit.'
      ),
    },
    personal: {
      clarity: sa(
        'When money, family or business decisions run alongside work, the real question is often hidden inside a bigger worry.',
        'Write the decision and the exact amount or time it involves, so it is a concrete question and not a general worry.',
        'List what the family needs from the next year and what you can offer, and see where they do not match.'
      ),
      facts: sa(
        'With money and business choices, the facts you need are often written in documents or terms that are easy to skip.',
        'Read the full terms of any loan, policy or agreement and mark every line you cannot explain to a friend.',
        'Check the person or company offering it on an independent source, and ask for the details in writing.'
      ),
      options: sa(
        'With money and family choices, the options are often framed as a yes or no to someone else\'s plan.',
        'Create at least one alternative, such as a smaller amount, a later start date or a different arrangement, and compare it.',
        'Compare the total cost of each option over the full period, not just the first payment.'
      ),
      risk: sa(
        'Money and family decisions carry longer-lasting consequences, so a loss or an argument can weigh heavily.',
        'Decide how much you could lose without harming essential family needs, and keep the commitment below that.',
        'Keep an emergency amount aside before you put money into anything new.'
      ),
      commit: sa(
        'Money and family decisions are easy to postpone because they are uncomfortable to talk about.',
        'Fix a date and place for the family conversation and decide who needs to be present.',
        'After deciding, write down what each person will do and review it together after a month.'
      ),
    },
  },

  scenarios: [
    sc('clarity', 'Your family asks "So, which course are you taking?" and you realise you have been comparing colleges without deciding what you want to study. What do you do?', [
      o('Shortlist colleges by reputation and fees first, since the right course will become clear once you see what each one offers', 33, 'Seeing what colleges offer can spark ideas, but it can also pull you into a course only because the college name is good. Pick two subjects you would happily study for three years and use them as the filter for the next campus visit or website check.'),
      o('Write what you want to study and why, then compare colleges', 100, 'You have put the questions in the right order: subject first, college second. Show the one-page note to a parent this week and ask them to respond to your reasons, not to the college name.'),
      o('Let your parents choose, since they have seen more of life and are paying the fees', 0, 'Their experience is useful, but a course chosen for you is hard to stay interested in. Ask them for the reasons behind their pick, give yours in writing, and decide together before the form date.'),
      o('Apply where most of your friends are applying', 17, 'Friends can explain how admission works, but their priorities are not yours. Write what you want from the course, then see how many of your friends\' reasons match. Do it before the weekend.'),
    ]),
    sc('clarity', 'You are unhappy at work and a friend offers you a job at their company. You feel like saying yes straight away. What is your first step?', [
      o('Accept now, because a friend\'s company is safer than an unknown one and the offer may not stay open for long', 0, 'Saying yes gives quick relief, but it may carry the same problem into a new place. Spend two evenings listing what exactly bothers you here before you reply.'),
      o('Say you are interested but need a few days, and first write what exactly you want to change in your present job', 100, 'Naming the problem first is what stops you moving into the same situation. Make a two-column list, "what bothers me" and "will it change there", and ask your friend the questions the second column raises.'),
      o('Talk it over with colleagues who feel the same way, to see whether leaving is the common view', 33, 'Colleagues understand the situation, but they share the frustration, so you may get more heat than clarity. Add one person from outside your company, and ask them what they would want to know before moving.'),
      o('Compare both salaries and the travel time, and pick the better package', 67, 'Pay and travel are real factors, but they may not be why you want to leave. Add the manager, the work itself and what you would learn, then compare again.'),
    ]),
    sc('facts', 'A video says a certain course "assures" a good career, and a coaching centre repeats the same claim. What do you do?', [
      o('Join, since two sources say the same thing and both seem to know the field well', 17, 'Two sources can repeat one claim without either checking it. Ask for the names of two students who finished the course, and call them before you pay anything.'),
      o('Check the course on the official site and ask two past students', 100, 'Official details plus first-hand accounts give you a picture without a sales pitch. Write down any point where the claim and the facts differ, and take that list back to the centre.'),
      o('Ask the coaching centre to send its results and fee details in writing, and go by those', 33, 'Asking in writing is a good habit, but the centre still earns from your enrolment. Compare its papers with the university or board website and with one person who is not selling anything.'),
      o('Treat such claims as exaggeration, drop this course and look at a different one without checking', 50, 'Caution is sensible, but a quick dismissal may throw away a good route. Spend one hour on the official page of this course before you decide it is not worth it.'),
    ]),
    sc('facts', 'A recruiter gives you a verbal offer with attractive numbers and asks for an answer by tonight. What do you do?', [
      o('Accept tonight, because a good offer can go to the next candidate and the numbers look right', 17, 'A genuine employer can wait a day for a written offer. If the answer must be given tonight, ask what makes it so urgent, and treat a vague reply as a warning.'),
      o('Ask for the offer in writing and take a day to read it', 100, 'A written offer protects you from misunderstanding. When it arrives, check the job title, location, notice period, probation and any bond, and ask HR about anything that differs from what was said.'),
      o('Reply that you are keen and will confirm tomorrow, then spend the evening reading what employees say about the company online', 67, 'You bought time and gathered outside information, which is sensible. The gap is that reviews cannot tell you your own terms, so also ask for the written offer and read the title, location, notice, probation and any bond line by line.'),
      o('Call a friend who works in the same company and go by what they say about pay and work', 50, 'A friend gives a first-hand view, but of one team at one time. Keep that view and still ask for the written offer, then ask a second person from a different team.'),
    ]),
    sc('options', 'You are choosing between two job offers and cannot decide. What do you do?', [
      o('Take the higher monthly pay, since the extra amount helps with family expenses and loans', 50, 'Money pressure is real and deserves weight, and it can be the deciding factor if the offers are otherwise close. Before you settle, set the pay difference against learning, travel time and stability over the first two years.'),
      o('Add a third option, such as staying or waiting, and score all three on your main priorities', 100, 'A third option and a common set of priorities turn a gut contest into a comparison. Fix your three priorities first, score each option from 1 to 5, and check any result that surprises you.'),
      o('Go with your gut after visiting both workplaces, since you will be the one spending the days there', 33, 'Your gut picks up real signals about people and surroundings, but it can be swayed by one friendly conversation. Write down what the gut is reacting to and check whether those things are in your priorities.'),
      o('Ask a relative which company has the better name, and go with that', 17, 'A known name can help your next move, but it says little about the work. Ask what you would do each day in both jobs and who would teach you.'),
    ]),
    sc('options', 'You are considering a two-year course that would use a large part of your family\'s savings. What do you do?', [
      o('Work out the full cost, compare two other routes and find out where past students went', 100, 'The full cost, a few alternatives and real outcomes show the trade-off clearly. Put the figures in one table and share it with the family before any fee is paid.'),
      o('Join along with a close friend so that you have support during the two years', 17, 'Support matters, but a friend does not make the course right. Check the course content and the cost, and then see whether you would still want to go if your friend did not.'),
      o('Choose the cheapest route among the ones you have heard of, so that the family\'s savings stay safe for other needs', 50, 'Protecting savings is a serious aim. Cheapest is not always best value, so compare what each route gives per rupee and per year, including what it allows you to do next.'),
      o('Wait for another year until you are completely sure this is the best choice', 33, 'Waiting costs a year and certainty may still not come. Set a decision date within a month and list the two facts that are still missing.'),
    ]),
    sc('risk', 'You have been thinking of changing your career field for months, but you keep imagining what could go wrong. What do you do?', [
      o('Keep reading and thinking about it until you feel confident enough to move', 17, 'More thinking rarely removes doubt, because the doubt is about what you have not tried. Swap one evening of reading for a small trial this month.'),
      o('Write the worst realistic outcome and a plan for it, then try a small test', 100, 'Seeing the downside on paper and trying a small version of the move makes the unknown smaller. Pick a test you can finish within a month, for example a short course or a project, and set a date to review it.'),
      o('Resign and start fully, because staying half-committed will only prolong the worry and delay the real learning', 33, 'Acting ends the waiting, but you take the whole risk at once. Build a few months of savings and a small trial first, then decide about resigning.'),
      o('Let the idea go and stay in your present field, since the job is stable', 50, 'Stability is a good reason and staying can be the right result. But if the question keeps returning, it has not been answered, so write down why you are staying and set a date a year ahead to look at it again.'),
    ]),
    sc('risk', 'Your decision is right for you, but a relative strongly disapproves. What do you do?', [
      o('Change your decision to keep peace at home, since the relationship matters more', 17, 'Peace at home has real value, but giving up a well-reasoned choice only to avoid friction can leave a long regret. First find out what exactly worries them.'),
      o('Go ahead quietly and tell the relative only after it is done, to avoid an argument now', 0, 'This avoids the argument but may hurt trust and leave you without support if something goes wrong. Tell them calmly before you act, even if they do not agree.'),
      o('State your reasons, hear the exact objection, and proceed unless it exposes a gap in your plan', 100, 'You respect the person, deal with their real concern and still own the choice. Their worry may also point to a risk you missed, so write the objection down and answer it with one fact or one change in your plan.'),
      o('Speak to other relatives and friends who may agree with you, and take their support to the discussion', 33, 'Support helps, but numbers do not answer the actual concern. Ask the first relative what fact would change their mind, and bring that fact instead.'),
    ]),
    sc('commit', 'You have researched a decision for weeks and the deadline is tomorrow. You still feel a little unsure. What do you do?', [
      o('Request a short extension, because a few more days of reading may remove the last doubt', 50, 'An extension is reasonable if an important fact is missing. If not, you are buying time for the discomfort. List what is still unknown and ask whether any answer could change your choice.'),
      o('Pick whichever option your family would be least upset by, so that the matter is over quickly', 33, 'Ending the discomfort feels like progress, but this picks for other people\'s comfort and not for your priorities. Spend ten minutes checking that option against your top three priorities, and keep it only if it holds up.'),
      o('Decide from your notes today and fix a first step and a review date', 100, 'Perfect certainty is rare, and a first step with a review date lets you correct course later. Do the first step within three days and write down the unknown you accepted.'),
      o('Ask a friend or elder whom you trust to decide for you, because you have thought about it too long', 17, 'Trust is fine, but you will live with the result. Ask them which point they would weigh most, then make the call yourself tonight.'),
    ]),
    sc('commit', 'Two weeks after joining a new course or job, you feel it is not what you expected. What do you do?', [
      o('Quit now and look for something else, since the first two weeks show what it will be like', 17, 'Early doubts are common and often fade as you learn the work. Leaving before a fair trial tells you nothing about the choice, so agree on a review period first.'),
      o('Write what you expected and what you see, and check them at the review date', 100, 'Naming the gap and keeping to the date prevents both a hasty exit and a stubborn stay. Ask one senior or your manager one question about what puzzles you.'),
      o('Tell yourself the choice is made and carry on without paying attention to the doubts, as most places feel odd at first', 50, 'Staying with a choice is useful, but ignoring real information is not. Note what bothers you each week and bring those notes to your review.'),
      o('Share the worries with friends and family and wait to see what they advise before doing anything', 33, 'Talking helps, but it does not change the situation by itself. Pick one thing you can do this week, such as asking a question or changing a routine.'),
    ]),
    { ...sc('clarity', 'You scored well in Class 10 and everyone expects you to take science, but you are more interested in commerce or arts. What do you do?', [
      o('Take science, since the marks are there and many people say it keeps more options open', 50, 'Marks open doors, and science can be right for you, but they do not tell you what you will enjoy for two years. Check from official sources what each stream needs and where it leads, then see if science still wins.'),
      o('Compare where each stream leads, write your reasons and discuss them with family and a teacher', 100, 'Your reasons, some facts and a conversation make the decision yours and informed. Bring the written comparison to the family talk instead of arguing from memory.'),
      o('Choose the stream your best friend has chosen so that you are with someone you know', 17, 'A friend gives comfort in class, but not direction. Ask yourself how you would feel in these subjects if your friend were in a different stream.'),
      o('Agree with the family for now and plan to speak up later if you really dislike the subjects', 33, 'Respecting your family is natural, but later is a late time to raise it. Share your reasons with one trusted adult this week and ask them to help you bring it up.'),
    ]), stages: ['student'] },
    { ...sc('options', 'You have a campus offer in hand, but you also want to try for a government exam or higher studies. What do you do?', [
      o('Accept the offer and drop the other plans, since a job in hand is worth more than an uncertain exam', 33, 'The offer is real and the exam is uncertain, but dropping the plans without comparing means you have not decided between them. Write what each route gives you after one year.'),
      o('Compare what the job, the exam and further study give you after a year, and check whether any two can run together', 100, 'A real comparison, plus a check on whether the routes can overlap, gives the clearest answer. List the hours each needs in a week and set a review date after three months.'),
      o('Decline the offer to give all your time to preparation, since splitting attention seldom works', 17, 'Full focus can help, but giving up an offer without a money plan and a time limit leaves you exposed. Decide how many months you will try and what you will do if it does not work out.'),
      o('See what your batchmates with similar marks are doing, and follow the majority', 50, 'Others\' choices are useful information, but their families, savings and goals differ from yours. Use their reasons as inputs, not as the answer.'),
    ]), stages: ['fresher'] },
    { ...sc('risk', 'A company is offering you a role in another city with larger responsibility. You like your team and city. What do you do?', [
      o('Decline right away, since your team and city are working well and a move brings new risks', 33, 'Staying can be right, but declining at once means you have not looked at what the role offers. Spend a week on facts, then decide.'),
      o('Accept at once, as larger responsibility is the clearest sign of growth', 17, 'Growth is possible, but you may be giving up things you value. Check the cost of living, the team and your own reasons before you say yes.'),
      o('Ask for role details, visit if possible, speak to the team and write the trade-offs', 100, 'Real information about the role and the city, with the trade-offs on paper, makes the risk visible. Set a date for the answer and tell the company when you will respond.'),
      o('Ask your present manager what they think, and follow their advice since they know your work well', 50, 'Your manager knows your work, but may also want to keep you. Take their view as one input and add two people who have made a similar move.'),
    ]), stages: ['professional'] },
    { ...sc('facts', 'A friend asks you to join a business idea and put in your savings, saying the profit is nearly certain. What do you do?', [
      o('Put in a smaller amount that you can afford to lose, and watch how the business goes', 50, 'A smaller amount limits the loss, but you still do not know if the idea is sound. Ask for the facts first, then decide on the amount.'),
      o('Ask for the plan, costs and exit terms, and take advice before putting in money', 100, 'Asking for numbers, written terms and a downside plan is how you check a claim. If your friend cannot answer, that tells you something too.'),
      o('Say yes, because you have known your friend for years and trust their honesty', 17, 'Trust is valuable, but a business still needs numbers and a written agreement. Clear terms help a friendship more than vague ones do.'),
      o('Decline firmly, since mixing friendship and money usually ends in trouble', 33, 'This protects you but closes the question. If you are interested, ask for the facts before deciding. If not, say so kindly.'),
    ]), stages: ['personal'] },
  ],

  phrases: {
    clarity: [
      `"The decision I need to make is whether to [option A] or [option B] by [date]."`,
      `"The three things that matter most to me here are [priority 1], [priority 2] and [priority 3]."`,
      `"Before we compare options, let me check what we are actually trying to solve."`,
    ],
    facts: [
      `"Where did this information come from, and when was it last checked?"`,
      `"I have checked [fact] on the official [website or document], and it says [detail]."`,
      `"Could you put the role, location and terms in writing so I can read them before I answer?"`,
    ],
    options: [
      `"Apart from these two options, is there a third, such as waiting or keeping things as they are?"`,
      `"If I choose this, what does it keep open for me, and what does it close?"`,
      `"On my three priorities, option A scores [x] and option B scores [y], and the main difference is [reason]."`,
    ],
    risk: [
      `"The worst realistic outcome is [outcome], and if it happens I will [plan]."`,
      `"Can we try a small version of this first before we commit fully?"`,
      `"I understand your concern about [issue], and here is what I have checked about it."`,
    ],
    commit: [
      `"I will decide by [date] and take the first step, [action], within three days."`,
      `"Can we set a review date on [date] to check whether [two facts] are holding?"`,
      `"I have decided, and I would like you to check with me after a week on how it is going."`,
    ],
  },

  stagePlan: {
    student: [
      'This week: write the decision as one sentence with the last date, and list the three routes you will compare.',
      'Next two weeks: read the official eligibility, fee and syllabus details for each route and talk to one senior in each.',
      'Before the deadline: score the routes on your three priorities, discuss the table with your family or a counsellor and choose.',
      'After choosing: set a first step with a date, such as a form or fee payment, and a review date a few months ahead.',
    ],
    fresher: [
      'This week: write what you want from the first two years and rank your top three priorities.',
      'Next two weeks: gather written details for every offer or route and speak to one person who joined recently.',
      'Before the offer deadline: compare the first year of each route and set a decision date and a minimum you will accept.',
      'After choosing: write a 90-day learning plan and a review date, and keep weekly targets for the next step.',
    ],
    professional: [
      'This week: write what you want to change and what you want to keep, before opening a job portal.',
      'Next two weeks: speak to two people in the target team or city and check notice period, benefits and costs in the offer.',
      'Before resigning: add an internal option, calculate your savings buffer in months and set a decision date.',
      'After the move: set a three-month review with two clear checks, such as learning and team fit.',
    ],
    personal: [
      'This week: write the decision with its exact amount and time, and list who it affects.',
      'Next two weeks: read the full terms, take advice from a qualified person and hold the family conversation.',
      'Before signing or paying: compare the total cost of every option and keep the commitment below what you can lose.',
      'After deciding: write who does what, keep an emergency amount aside and review the decision with the family after a month.',
    ],
  },

  talk: {
    clarity: {
      q: 'Tell me about a time you had a problem that was not clearly defined. How did you work out what you needed to solve?',
      a: 'Describe the vague situation, how you wrote the problem as one sentence, who you checked it with, and how that changed your next step.',
      line: 'Clarified the problem of [issue] by defining [one-sentence question] with [stakeholders], which led to [result].',
    },
    facts: {
      q: 'Tell me about a decision where you had to verify information before acting.',
      a: 'Say what claim or data you were given, how you checked it at the source or with a first-hand person, and what you found or changed.',
      line: 'Verified [claim or data] against [source], which showed [finding] and changed [action].',
    },
    options: {
      q: 'Tell me about a time you had to choose between several options with trade-offs.',
      a: 'Name the options, the criteria you used, what you gave up and why you chose as you did. Mention what you would check again.',
      line: 'Compared [number] options on [criteria] and chose [option], which resulted in [outcome].',
    },
    risk: {
      q: 'Tell me about a time you made a decision under uncertainty or with a risk of failing.',
      a: 'Describe the risk, how you tested or limited it, your backup plan and what happened. If it did not go well, say what you learned.',
      line: 'Reduced risk on [project or decision] by [test or backup plan], which allowed [result].',
    },
    commit: {
      q: 'Tell me about a decision you made and followed through on, and how you checked whether it worked.',
      a: 'Say what you decided, your first step and date, how you reviewed the result and whether you changed course.',
      line: 'Decided to [action] by [date], reviewed it after [period] and adjusted [thing], leading to [result].',
    },
  },

  talkTitles: {
    strong: 'How to show this strength in an interview or on your CV',
    weak: 'How to answer if you are asked about your weakest area',
    intro: 'Interviewers often ask for a real decision you made, so prepare one example for each step, with what you decided, how and what followed.',
    mode: 'interview',
  },
};

void BASE;
