// Writing Skills Assessment Test: a bundle for the shared self-rating test page.
// General guidance only: no statistics, norms, pay figures or outcome claims.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

const BASE = '/services/assessments/writing-skills-assessment-test/';

export const bundle: SkillTestBundle = {
  test: {
    id: 'writing-skills-assessment-test',
    slug: 'writing-skills-assessment-test',
    pageUrl: BASE,
    breadcrumbName: 'Writing Skills Assessment Test',
    metaTitle: 'Writing Skills Assessment Test | Free Self-Rating, 41 Questions',
    metaDescription:
      'Free writing skills assessment test: 41 questions on clarity, accuracy, tone, editing and work writing. Instant scores, a 14-day plan and a PDF report.',
    h1Lead: 'Writing Skills',
    h1Accent: 'Assessment Test',
    eyebrow: 'Clarity, accuracy, tone, editing and work writing in one report',
    heroSub:
      'This free writing skills assessment test shows which part of your writing needs work first: clarity, accuracy, tone, editing or writing for work. You rate what you really do when you write an answer, an email or a resume line, and you choose the best move in real situations. It is a self-rating, not a graded grammar exam, and it works for students, freshers and working professionals.',
    stats: [
      { value: '41', label: 'questions' },
      { value: '5', label: 'writing areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five writing areas scored from your own answers',
      'About 8 minutes, no sign-up',
      'Advice for your stage and a 14-day practice plan',
    ],
    reportTitle: 'Writing Skills Report',
    reportFile: 'future-career-school-writing-skills-report.pdf',
    reportKicker: 'WRITING SKILLS REPORT',
    resultKicker: 'Your writing skills result',
    scoreLabel: 'Overall writing habits',
    bands: {
      high: 'A relative strength in your answers.',
      mid: 'Developing, with a clear next step.',
      low: 'The first area to practise.',
    },
    domainsHeading: 'Five areas of writing this test covers',
    domainsIntro:
      'Writing goes wrong in different ways for different people. Some bury the point, some make small mistakes that cost them marks or trust, some sound too casual or too stiff, some never check their work, and some find work writing the hardest. Your lowest area is the best place to begin.',
    domains: [
      {
        key: 'clarity',
        name: 'Clarity and structure',
        short: 'Making your main point easy to find and follow',
        strong: 'The person reading finds your main point in the first lines and follows your order without effort.',
        weak: 'Your point sits under background and long sentences, so people have to hunt for what you want to say.',
        plan: [
          'Before writing anything, finish this line on paper: “The one thing I want this person to know or do is ...”. Then start with that line.',
          'For one week, put your answer or request in the first two lines of every email, message and written answer, and give reasons after it.',
          'Take one long paragraph you wrote recently and split it so that each paragraph has one idea. Cut any sentence that does not support that idea.',
        ],
      },
      {
        key: 'accuracy',
        name: 'Grammar and accuracy',
        short: 'Getting words, names, numbers and sentences right',
        strong: 'Your writing has few slips in spelling, grammar, names and figures, and you know where your own mistakes usually happen.',
        weak: 'Small errors in names, tenses, numbers or punctuation keep reaching the final copy, and they can cost marks or trust.',
        plan: [
          'Look at three pieces of your recent writing and list the mistakes you made more than once. Keep the list of your top three mistakes in your notes.',
          'Before sending anything with a name, date or amount, compare it with the original source, not with your memory.',
          'If you use a spell checker or an AI writing tool, read the new version next to your own and check that no name, number or meaning has changed.',
        ],
      },
      {
        key: 'audience',
        name: 'Tone and audience',
        short: 'Fitting your words to the person who will read them',
        strong: 'You think about who is reading, what they know and what they need, and you adjust your tone to match.',
        weak: 'You write in one style for everyone, so messages can sound too casual, too stiff or too hard for the person to follow.',
        plan: [
          'Before writing, answer three questions in a line each: Who will read this? What do they already know? What do I want them to do?',
          'Rewrite one chat-style message as if it were going to a professor or manager, then compare the two versions and note what changed.',
          'Practise one polite but firm sentence for saying no, asking for a change or following up, and use it in a real message this week.',
        ],
      },
      {
        key: 'revise',
        name: 'Editing and revising',
        short: 'Checking and improving what you wrote before it goes out',
        strong: 'You treat the first version as a draft, check it before sending and ask others for a view on important pieces.',
        weak: 'Your first version is usually your final version, so errors and unclear lines go straight to the person reading.',
        plan: [
          'Set a rule for the next week: nothing important goes out until you have read it once more after a short break, even if the break is only five minutes.',
          'Read your next important message aloud, or change the screen or font size, and mark every place where you stumble.',
          'Cut one sentence or ten words from every draft you write this week, and check that the meaning is still complete.',
        ],
      },
      {
        key: 'work',
        name: 'Writing for work',
        short: 'Emails, updates, reports and resume lines that get results',
        strong: 'Your emails, updates and resume lines say what you did, what you need and what happens next.',
        weak: 'Subject lines are vague, updates leave questions behind and resume lines list duties instead of what you actually did.',
        plan: [
          'For one week, write every email subject line in the form “[Action needed or topic] [detail] by [date]” and check that it can be understood without opening the message.',
          'Use one update template for the next five updates: what is done, what is next, what I need and by when.',
          'Rewrite three resume or profile lines so that each starts with a verb and shows what you did or what changed because of it.',
        ],
      },
    ],
    questions: [
      { d: 'clarity', text: 'I can state the main point of a message or an answer in one sentence before I start writing.' },
      { d: 'accuracy', text: 'I check the spelling of names, companies and places before I send or submit.' },
      { d: 'audience', text: 'Before I write, I decide who will read it and what they already know.' },
      { d: 'revise', text: 'After I finish writing, I leave it for a few minutes and then read it again from the top before it goes out.' },
      { d: 'work', text: 'My email subject lines tell the person what the message is about and what I need.' },
      { d: 'clarity', text: 'In emails, assignments and reports, my first two lines give the answer or the request, and the reasons come after them.' },
      { d: 'accuracy', text: 'I know the grammar mistakes I make most often, such as tenses, articles or subject and verb agreement, and I look for them.' },
      { d: 'audience', text: 'Before I send a message, I check that the greeting, length and level of detail suit the person who will get it.' },
      { d: 'revise', text: 'I read important writing aloud, or on paper or a different screen, to catch what I missed.' },
      { d: 'work', text: 'I end messages with a clear next step that says who does what by when.' },
      { d: 'clarity', text: 'I write a rough order of my points before I start anything longer than a paragraph or two.' },
      { d: 'accuracy', text: 'I check numbers, dates and amounts against the original before I share them.' },
      { d: 'audience', text: 'I avoid or explain abbreviations and technical words that the other person may not know.' },
      { d: 'revise', text: 'I cut words and sentences that do not add meaning.' },
      { d: 'work', text: 'My resume or profile lines start with what I did and show what changed, not only my duties.' },
      { d: 'clarity', text: 'Each of my paragraphs covers one idea, and I start a new paragraph when the idea changes.' },
      { d: 'accuracy', text: 'I use full stops and commas so that each sentence ends where its idea ends.' },
      { d: 'audience', text: 'I can say no, ask for a change or make a complaint in writing in a way that is firm and polite.' },
      { d: 'revise', text: 'I ask someone to read my important writing and tell me where they got lost.' },
      { d: 'work', text: 'I can write a short update that says what is done, what is next and what I need.' },
      { d: 'clarity', text: 'I write long sentences joined by many “and”, “which” and “also” links, even when a short sentence would be clearer.', reverse: true },
      { d: 'accuracy', text: 'I accept the changes made by a spell checker or an AI tool without reading them again.', reverse: true },
      { d: 'audience', text: 'I write to a manager or professor in the same style that I use in chat with friends.', reverse: true },
      { d: 'revise', text: 'I send or submit as soon as I finish writing because I am short of time or I feel it is fine.', reverse: true },
      { d: 'work', text: 'I write phrases such as “do the needful” or “kindly revert” and expect the person to know exactly what I mean.', reverse: true },
    ],
    readingTitle: 'How to read your writing skills result',
    readingSections: [
      {
        title: 'Writing is five habits, not one talent',
        body: [
          'Each statement describes something you do: put the point first, check a name, adjust your tone, read the draft again, end with a next step. Habits can be practised, so a low area means a habit you have not built yet, not a limit on what you can write.',
          'Many people find that one area holds the others back. Perfect grammar does not help if the point is buried, and a clear message can still lose trust if a name or a date is wrong.',
        ],
      },
      {
        title: 'What this test can and cannot show',
        body: [
          'This is a self-rating plus situation questions where you choose the best move. It does not read your actual writing, so it cannot grade your grammar, vocabulary or fluency in English or any other language.',
          'To see how you really write, put a recent email or answer next to your result and check it against the area you scored lowest. A teacher, senior or friend can point out what you cannot see in your own work.',
        ],
      },
      {
        title: 'Your result and your stage',
        body: [
          'A student writes exam answers, assignments, applications and emails to teachers. A fresher writes work emails, updates, cover letters and a first resume. A working professional writes reports, proposals and messages that other people act on, often for more than one audience.',
          'The questions share the same five areas, but the extra statements and the advice in your report change with the stage you pick.',
        ],
      },
      {
        title: 'Writing and your career',
        body: [
          'Most jobs involve some writing, and clear emails, updates and resume lines make your work easier to understand and to trust. Some roles, such as content, support, operations, sales and project work, rely on it more than others.',
          'Better writing does not promise a job, a promotion or a higher income. It makes it easier for others to see what you can do, and it is also a base for paid writing work if you later choose that path.',
        ],
      },
      {
        title: 'Check the result against real writing',
        body: [
          'Take one email, assignment or document you wrote in the past month and mark the point, the next step and any errors. If what you see does not match your score, trust the real piece of writing and adjust your practice.',
          'Retake the test after about four weeks of working on your lowest area. A small rise is a sign that the practice is helping, though a better real email is the better proof.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool and shows how you describe your own writing habits. It does not read, mark or grade any writing you have produced.',
      'It is not a certificate, a language test or an official assessment, and it cannot replace a teacher, editor or manager who reads your actual work.',
      'Scores come only from your answers and are not compared with other people, so there is no pass mark and no ideal number.',
      'It does not predict exam marks, interview results, job performance or income. It points to which writing habits to practise first.',
      'It does not measure fluency in English or in any other language, and it is not a diagnosis of any learning difference. If writing is very hard for you, talk to a teacher or a qualified specialist.',
    ],
    faqs: [
      {
        q: 'What is a writing skills assessment and what does this one measure?',
        a: 'A writing skills assessment checks how well you can put ideas into clear, correct and suitable written words. This one covers five areas: clarity and structure, grammar and accuracy, tone and audience, editing and revising, and writing for work. It shows how you describe your own habits and how you choose in real situations.',
      },
      {
        q: 'Is this writing skills assessment test free?',
        a: 'Yes. It is free, needs no sign-up, takes about 8 minutes and gives an instant result that you can also download as a PDF report.',
      },
      {
        q: 'Is this a grammar test with marks and a pass score?',
        a: 'No. Nobody marks your writing here, and there is no pass mark. You rate your habits and choose the best action in situations such as writing a subject line, following up with a professor or checking a figure, so your result shows habits to practise, not a grade.',
      },
      {
        q: 'How is the score worked out?',
        a: 'You rate each statement from 1 (not true) to 5 (very true). Statements that describe a poor habit, such as accepting a spell checker’s changes without reading them, are scored the other way round. Each situation question has four options worth between 0 and 100 points, an area score is the average of everything asked about that area, and the overall score is the average of your five areas.',
      },
      {
        q: 'How can I improve my writing skills after the result?',
        a: 'Work on your lowest-scoring area first, with one small habit at a time. For example, if clarity is the weak spot, put your request in the first two lines of every message for a week; if editing is weak, read each important message again after a five-minute break. Your report gives a 14-day plan for that area, and retaking the test after a few weeks shows whether it moved.',
      },
      {
        q: 'Does the test work if English is not my first language?',
        a: 'Yes. The habits in the test, such as putting the point first, checking facts and thinking about who will read, apply in any language, and the questions are written in simple English. The test does not judge your vocabulary or fluency, so it is a fair starting point for people who write in English as a second or third language.',
      },
      {
        q: 'Can students, freshers and working professionals all take it?',
        a: 'Yes. You choose your stage before the result, and the extra questions and advice change to match: exam answers and emails to teachers for students, work emails and a first resume for freshers, and reports, proposals and messages for several audiences for working professionals.',
      },
      {
        q: 'Can I use this to prepare for a writing test in a job application?',
        a: 'Some employers ask candidates to write an email or a short report as part of hiring. This test does not mark your writing, but the habits it checks are the ones such tasks reward: the point first, correct names and figures, a suitable tone and a final read. To practise, write a real email or summary, read it again after a break, and ask someone to tell you where they got lost.',
      },
      {
        q: 'Will a high score help me get a job or a better salary?',
        a: 'Nothing here can promise that. Clear writing makes your emails, updates and resume easier to understand, and many roles use writing every day, but hiring and pay depend on much more than a score on a self-rating.',
      },
      {
        q: 'How is this different from the communication skills assessment?',
        a: 'This test looks only at written work, with 41 questions on clarity, accuracy, tone, editing and writing for work. The communication skills assessment is wider and covers listening, speaking, presenting and feedback, with writing as one of its five areas. Use that one for a quick view of all five skills and this one when writing is the part you want to improve.',
      },
    ],
    related: [
      {
        href: '/services/assessments/communication-skills-assessment/',
        title: 'Communication Skills Assessment',
        description: 'Listening, speaking, writing, feedback and presenting, scored separately.',
      },
      {
        href: '/blog/skills/how-to-improve-writing-skills-india/',
        title: 'How to Improve Writing Skills',
        description: 'Practical ways to build better writing habits, with examples from study and work.',
      },
      {
        href: '/blog/skills/how-to-improve-email-writing-skills-for-work-india/',
        title: 'How to Improve Email Writing Skills for Work',
        description: 'Subject lines, structure and tone for emails at an internship or job.',
      },
      {
        href: '/career-resources/resume-that-gets-shortlisted-in-india/',
        title: 'Resume That Gets Shortlisted in India',
        description: 'How to write resume lines that show what you did.',
      },
      {
        href: '/career-resources/copywriting-career-roadmap/',
        title: 'Copywriting Career Roadmap',
        description: 'A route into paid writing work, with the business side of it explained.',
      },
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'Leadership, teamwork, adaptability, ownership and problem solving in one report.',
      },
    ],
    breadcrumbDescription: 'Free writing skills assessment test with five area scores and a 14-day practice plan.',
    webAppDescription:
      'A free original 41-question writing skills assessment test covering clarity and structure, grammar and accuracy, tone and audience, editing and revising, and writing for work, with five scores, an overall score, stage-based advice, a 14-day practice plan and a downloadable report.',
    indexDescription:
      'Free writing skills assessment test: 41 questions, five scores for clarity, accuracy, tone, editing and work writing, plus a 14-day plan.',
    indexNote: 'Free, about 8 minutes, PDF report',
  },

  depth: {
    stageHeading: 'Which of these describes you best?',
    stageNote:
      'What you write changes with your stage, from exam answers to work emails to reports for several people, so your report adjusts the advice to match.',
    stages: [
      {
        key: 'student',
        label: 'Student',
        description: 'School, college or a course, with exam answers, assignments, applications and emails to teachers',
        title: 'Use every assignment and answer as practice for point-first writing',
        body: 'Students write a lot, but most of it is for marks, so habits such as checking and rewriting get skipped. Treat one assignment a week as practice: state the point first, check it, and read it again before you submit.',
        actions: [
          'In your next written answer, write the direct answer in the first line and the reasons after it.',
          'Write emails to teachers and professors with a clear subject, a greeting, one request and a thank you.',
          'Keep a short list of your own repeated mistakes and check each assignment against it before you submit.',
        ],
      },
      {
        key: 'fresher',
        label: 'Fresher or job seeker',
        description: 'First job, internship or job search, with work emails, updates, cover letters and a first resume',
        title: 'Make your writing easy to act on and easy to trust',
        body: 'In a first job or a job search, people judge you partly by what you send. Short emails with a clear subject, correct names and a clear next step show that you can be relied on.',
        actions: [
          'Write each subject line so the person knows the topic and the action needed before opening the message.',
          'Check every company name, role name, date and attachment before you send an application or an email.',
          'Rewrite three resume lines so that each shows what you did and what changed.',
        ],
      },
      {
        key: 'professional',
        label: 'Working professional',
        description: 'Experienced, writing reports, proposals, updates and messages that other people act on',
        title: 'Write so that busy people can decide quickly',
        body: 'With experience, more of your writing is read by people who have little time and need to decide something. The main skill is to lead with the decision or point, keep the detail underneath, and fit your tone to each group of people you write for.',
        actions: [
          'Start each report or proposal with a short summary of the point and the decision you need.',
          'Check every figure, date and name against the agreed record before you send.',
          'Ask a trusted colleague to read one important document before it goes out and tell you where they slowed down.',
        ],
      },
    ],
    tips: [
      'Before your next message, finish the line “The one thing I want this person to know or do is ...” on paper. If you cannot finish it in one sentence, you are not ready to write yet.',
      'Make a short list of the names, companies and places you write most often and keep it in your notes. Check each new document against the list before you send.',
      'Write three lines above your draft: who will read this, what they already know, and what I want them to do. Look at the lines again when you finish and adjust the draft.',
      'After you finish writing, stop for five minutes, walk away, and then read it once more from the top. A short break helps you see what you actually wrote and not what you meant to write.',
      'Write the subject line last, in the form “action needed, topic, date”, such as “Approval needed: leave on 14 and 15 March”. Check that someone could understand it without opening the email.',
      'Move your request or answer to the first two lines of the next three messages you write. Put the reasons and background underneath it.',
      'Look at three pieces of your writing from the past month and mark every grammar slip. Write the two or three that repeat in your notes and check for them before you send anything.',
      'Write the same request twice this week, once to a friend and once to a teacher or manager. Put the two next to each other and note which words and greetings changed.',
      'Print the important page or change the font size and read it slowly with a finger or a pen under each line. Mark each spot where your eyes slip, then fix it.',
      'End your next five messages with a line such as “Please send the form by Friday 5 pm.” Name the person, the action and the day.',
      'Before you start a long document, write the three or four main points as a list and put them in order. Write each point as its own paragraph.',
      'Open the original source next to your draft and tick off each number, date and amount one by one. If you cannot find the source, say so in the message instead of guessing.',
      'When you use a short form or a technical term, ask if the other person would know it. If not, write it out in full the first time and put the short form in brackets.',
      'Pick one paragraph and cut ten words from it without changing the meaning. Words such as “very”, “really”, “basically” and “in order to” often go first.',
      'Take one resume line that says “responsible for” and rewrite it to start with a verb, such as “managed”, “built” or “handled”. Add what changed because of it, with a number only if it is true.',
      'Read your last long paragraph and mark where the idea changes. Break the paragraph at that point and give each part its own opening sentence.',
      'Read a short piece of your writing aloud and put a full stop wherever you take a breath and the idea is complete. Split any sentence that needs more than one breath.',
      'Write one polite refusal, such as “I cannot take this on this week, but I can do it by Thursday.” Keep it ready for the next time you need it.',
      'Choose one friend or senior who reads well and ask: “Which sentence did you have to read twice?” Take only that one question to them and fix what they point out.',
      'Use three lines for every update: what is done, what is next, what I need. Send it at the same time each week so people know when to expect it.',
      'Take your longest sentence from the last message and split it at each “and” or “which”. Check that every new sentence has one subject and one action.',
      'Run a spell checker or an AI tool if you like, but then read the result against your own version. Look for changed names, numbers and meaning before you accept anything.',
      'Write the same message again for the person who will actually read it. Change the greeting, the amount of detail and the closing, and check that no chat short forms remain.',
      'Set one rule for yourself: no important message leaves until you have read it once more. If time is short, a two-minute read still catches many mistakes.',
      'Replace each “please do the needful” with the exact action you want, such as “please send the signed form”. Replace “kindly revert” with “please reply by Friday”.',
    ],
    tipsUp: [
      'Before each longer message this week, write your one-sentence main point and then show it to a friend. Ask them to say it back in their own words and fix it if they cannot.',
      'Keep a running list of names and spellings you have checked and share it with a teammate or classmate. Add one new item each week and review the list on Sunday.',
      'After each message, check whether the person understood the first time or replied with a question. Count the follow-up questions for a week and write down what you could have said earlier.',
      'Fix a regular time for a final read, such as ten minutes before the deadline, and note how many mistakes you find each time. If the number stays above zero, make the final read longer.',
      'Look at your sent folder and pick three subject lines. Ask a friend which one they would open first and rewrite the weakest one so that it names the action and the date.',
      'Check your last five messages and see where your request first appears. If it comes after more than two lines of background, rewrite one of them with the request at the top.',
      'Make a one-page checklist of your top three mistakes and tape it near your desk or save it on your phone. Count how many of them you catch before sending each day for a week.',
      'Ask one senior or teacher to read a message you wrote to them and say whether the tone felt right. Note what they suggest and use it as your starting template.',
      'Try three different checks on the same document: aloud, on paper and on a different screen. Note which one finds the most mistakes for you and make it your regular check.',
      'Write a next step at the end of each message for a week, and note how often the other person did what you asked. Rewrite the next step wherever they did not.',
      'Keep the outline you wrote with the finished document and compare the two after you finish. Note where you drifted from the order and whether the drift helped or confused.',
      'Ask someone to check one document for numbers and dates only, while you check it for grammar. Compare the two lists of mistakes and note which kind you miss more.',
      'Read your draft as if you were the other person and underline every word they may not know. Replace the underlined words and ask them whether anything else was unclear.',
      'Keep a before and after version of one paragraph that you cut. Count the words and check that nothing important was lost, then do it again on a different paragraph.',
      'For each line of your resume, ask “So what changed?” and write the answer next to it. Add the answer to the line only if it is true and you can explain it in an interview.',
      'Mark the first sentence of each paragraph in a document you wrote and read only those sentences. If they do not tell the story, rewrite the weak ones.',
      'Pick a paragraph from a book or a good article and copy its punctuation by hand. Then write your own paragraph on the same topic and compare where each of you used full stops.',
      'Collect three real messages you had to write that were hard, such as a refusal, a complaint or a request for a change. Ask a trusted person to say how each would feel to receive.',
      'Ask the person reading for one specific thing each time, such as “is the first paragraph clear?” and note the answers over a month. Look for the question that points to the same problem again.',
      'Send your update at the same time each week and ask one person whether it answered their questions. Add any missing item to your template.',
      'Count the words in your three longest sentences and aim to cut the longest by a third. Repeat the exercise on another piece of writing next week.',
      'Keep a small log of changes you rejected from a tool and why, such as a changed name or number. Review it after two weeks to see which kinds of changes you should always check.',
      'Keep a note of the usual greetings and closings that suit each person you write to, and review them before you write. Ask one person per month whether your tone felt right to them.',
      'Add a second step to your final read: check the facts and names on one pass and the grammar on another. Note which pass catches more mistakes for you.',
      'Collect five “do the needful” type messages that you received and see which of them were clear. Write what you would have asked for instead and use those lines in your next messages.',
    ],
    strongTip: 'This is already a habit that works for you. Keep it going and note what makes it easy, so you can copy that in your weaker areas.',
    domains: {
      clarity: {
        why: 'People read quickly, often on a phone, and they decide in a few lines whether to act. When your main point is easy to find, they understand sooner and ask fewer follow-up questions. Clarity is about order and choice of what to include, not about difficult words.',
        roles: [
          'Exam answers, assignments, project reports and applications',
          'Operations, support, sales and project coordination roles that run on emails and updates (Scalable with a business layer: a job is the entry, and a consulting or service business is the layer that can grow)',
          'Managers, team leads and anyone who writes for people who must decide quickly',
        ],
        routine: [
          'Days 1 to 3: Before every message or answer, write one sentence that says the point, and put that sentence first.',
          'Days 4 to 7: For each longer piece, write three or four points as a list in order before writing the paragraphs.',
          'Days 8 to 11: Check every paragraph for one idea. Split any paragraph where the idea changes and cut sentences that do not support it.',
          'Days 12 to 14: Read only the first line of each paragraph in your last document and see whether they tell the story. Rewrite the weak ones.',
        ],
        mistakes: [
          'Starting with a long background before saying what you want',
          'Putting every idea you can think of into one paragraph or one long sentence',
          'Using difficult words to sound serious, which makes the point harder to find',
        ],
        proof: [
          'A before and after version of one message with the point moved to the top',
          'An outline you wrote before a longer document, kept next to the final version',
          'Feedback from one person who could say your main point after reading once',
        ],
        askOthers: 'After reading this, what do you think I wanted you to know or do, and which line told you that?',
        talkingPoints: [
          'You decide the main point before you write and put it first',
          'You can show an outline and the document built from it',
          'You can explain how you shortened something without losing the meaning',
        ],
        midStep: 'Pick the next three messages you write and put the request or answer in the first two lines. Then check whether the replies need fewer follow-up questions.',
      },
      accuracy: {
        why: 'A wrong name, date, amount or tense can cost marks, confuse a client or make a careful person seem careless. Most errors are habits that repeat, so once you know your own usual mistakes you can look for them on purpose. Accuracy also covers facts: if your message states something wrong, good grammar will not save it.',
        roles: [
          'Exam answers, assignments and any writing that is marked line by line',
          'Finance and sales support roles that handle figures, orders and client names (Scalable with a business layer: a job is the entry, and practice or consulting is the layer that can grow)',
          'Administration and record-keeping roles (Not so scalable: pay and growth are set by one employer’s scale, so add a second skill beside them)',
          'Anyone who sends proposals, quotes, offer letters or other documents that other people rely on',
        ],
        routine: [
          'Days 1 to 3: Collect three pieces of your own writing and list each mistake that appears more than once.',
          'Days 4 to 7: Before sending anything, check names, dates and amounts against the original source and tick each one off.',
          'Days 8 to 11: Read each sentence once only for punctuation, looking at where each full stop and comma sits.',
          'Days 12 to 14: If you use a spell checker or an AI tool, compare its version with yours before accepting it, and write down what it changed that was wrong.',
        ],
        mistakes: [
          'Typing a name, date or amount from memory instead of copying it from the source',
          'Trusting a spell checker, which cannot tell that a correctly spelled word is the wrong word',
          'Correcting small mistakes by eye only, without a list of what you usually get wrong',
        ],
        proof: [
          'Your own list of top repeated mistakes and a note of how many you caught in a month',
          'A document where you checked each figure against the source and marked it',
          'A comparison of a tool-edited version with your own, with a note of what you rejected and why',
        ],
        askOthers: 'Which kind of mistake do you notice most often in my writing, such as tense, punctuation, spelling or numbers?',
        talkingPoints: [
          'You know your own usual mistakes and check for them on purpose',
          'You check facts against the source, not against memory',
          'You review tool suggestions instead of accepting them without reading',
        ],
        midStep: 'Make a checklist of your three most common mistakes and a rule that you check names, dates and amounts against the source. Use both on every important piece for two weeks.',
      },
      audience: {
        why: 'The same words can sound polite to one person and careless to another. When you think about who is reading, what they know and what they need, your message gets a better reply and your relationship with the person stays good. Tone also matters when the message is difficult, such as a refusal, a complaint or a follow-up.',
        roles: [
          'Emails to teachers, professors and placement officers, and written applications',
          'Client-facing sales, support, account management and consulting roles (Scalable with a business layer: these grow when you add a niche and a way to be found, though many people compete for the same posts)',
          'Managers and professionals who write to seniors, juniors and people outside the company',
        ],
        routine: [
          'Days 1 to 3: Before each message, write a line each on who will read it, what they know and what you want from them.',
          'Days 4 to 7: Rewrite one chat message for a more formal setting and note which words, greeting and ending you changed.',
          'Days 8 to 11: Explain every short form and technical word the first time you use it, or replace it with a simpler word.',
          'Days 12 to 14: Write one polite refusal, one request for a change and one follow-up, and use each in a real message.',
        ],
        mistakes: [
          'Writing to a senior or a client in the same style you use with friends',
          'Using short forms and technical words the other person may not know',
          'Being so polite that the actual request or refusal becomes unclear',
        ],
        proof: [
          'Two versions of the same message written for two different people',
          'A real follow-up or refusal message that received a helpful reply',
          'A feedback note from a teacher, senior or colleague about the tone of a message',
        ],
        askOthers: 'When you read my messages, does the tone feel right for you, and which sentence would you change?',
        talkingPoints: [
          'You adjust your tone and detail to the person reading',
          'You can write a firm message that is still polite',
          'You explain short forms and technical words instead of assuming people know them',
        ],
        midStep: 'Keep three short templates, one each for a teacher or senior, a colleague and a client, and change the greeting, detail and ending whenever you write to a different person.',
      },
      revise: {
        why: 'First drafts are for getting ideas down, and a second look is where most mistakes and unclear lines are found. People who rarely check their work send errors they could have caught in a few minutes. Revising is also where short, strong writing comes from, because you cut what does not help.',
        roles: [
          'Exam preparation, long assignments, projects and applications that are read carefully',
          'Proposal, report and client-document work in sales, consulting and finance support (Scalable with a business layer: a job is the entry, and consulting is the layer that can grow)',
          'Legal support and drafting roles (Not so scalable: growth depends on seats, licences and a few employers, so keep a second skill running)',
          'Anyone who writes often and wants to reduce rework and follow-up questions',
        ],
        routine: [
          'Days 1 to 3: Read every important message once more after a five-minute break before you send it.',
          'Days 4 to 7: Read each important message aloud or on paper and mark every place where you stumble.',
          'Days 8 to 11: Cut ten words from every draft and check that the meaning is still complete.',
          'Days 12 to 14: Ask one person to read one important piece and tell you where they got lost. Fix those places and note what you learned.',
        ],
        mistakes: [
          'Treating the first version as the final one because the deadline is close',
          'Checking only on the same screen where you wrote, which hides the same mistakes',
          'Asking for a general opinion such as “is it fine?” instead of a specific question',
        ],
        proof: [
          'A first draft and a final version with a note of what changed',
          'A list of mistakes found by reading aloud or on paper',
          'A message where another person pointed out a confusing line and you fixed it',
        ],
        askOthers: 'Which sentence did you have to read twice, and which part could I cut?',
        talkingPoints: [
          'You treat the first version as a draft and have a routine for checking it',
          'You ask for specific feedback and use it',
          'You can show how a document improved between the first draft and the final one',
        ],
        midStep: 'Add one fixed check to your routine, such as reading aloud for two minutes before sending, and use it on every important message for two weeks.',
      },
      work: {
        why: 'At work, writing is how people understand what you did, what you need and what happens next. A clear subject line, a short update and a resume line with a result save time for the other person and make you easier to rely on. These habits are useful in almost any job, and in a few roles, such as content, support and sales, they are a large part of the work.',
        roles: [
          'First jobs and internships where you send emails, updates and reports to managers and teams',
          'Job seekers writing resumes, cover letters, LinkedIn profiles and application answers',
          'Copywriting and content writing (Scalable with a business layer: a job or freelance work is the entry, and an agency, newsletter or service you run is the layer that can grow, but the field is crowded and early pay per piece is low)',
          'Support, sales, operations and project roles where writing is part of the daily work (Scalable with a business layer)',
        ],
        routine: [
          'Days 1 to 3: Write every email subject line as “action or topic, detail, date” and check that it is clear without opening the message.',
          'Days 4 to 7: End each message with one next step that names the person, the action and the day.',
          'Days 8 to 11: Write one update using three lines: what is done, what is next, what I need.',
          'Days 12 to 14: Rewrite three resume or profile lines so that each starts with a verb and shows what you did or what changed.',
        ],
        mistakes: [
          'Using vague subject lines such as “Request” or “Hello sir”',
          'Writing resume lines that list duties and leave out what you actually did',
          'Using stock phrases such as “do the needful” in place of a clear action and date',
        ],
        proof: [
          'A before and after of a subject line, an update and a resume line',
          'A message of yours that got the action you asked for on the first reply',
          'A short collection of your writing samples, with private details removed and with permission',
        ],
        askOthers: 'When you get my emails or updates, what do you still have to ask me afterwards?',
        talkingPoints: [
          'You write subject lines and updates so that people can act without asking again',
          'You write resume lines that show what you did and what changed',
          'You can show a sample of your work writing with private details removed',
        ],
        midStep: 'Make one update template and one email checklist (subject, point, next step, attachment) and use both for every work message for two weeks.',
      },
    },
    thirtyDay: [
      'Choose your lowest writing area and use its practice on every important message for two weeks.',
      'Keep a before and after copy of three pieces of writing, such as an email, an answer and a resume line.',
      'Ask one person for specific feedback on one piece of your writing, and fix what they point out.',
      'Retake the assessment after about four weeks and compare real examples of your writing, not only the score.',
    ],
  },

  extras: [
    // Student
    { ...x(['student'], 'clarity', 'In written exam answers, I start with the direct answer and then give the reasons.', 'In your next practice answer, write the answer in the first line and the reasons underneath. Examiners and teachers find the point faster and you are less likely to wander.'), up: 'Time yourself on one written answer and check whether the direct answer appears in the first two lines. Ask a teacher or friend to mark where the point first appears.' },
    { ...x(['student'], 'accuracy', 'I copy sentences from the internet, notes or friends and change only a few words.', 'Read the source, close it, and write the idea from memory in your own words, then note where the idea came from. This keeps your work honest and helps you learn.', true), up: 'Pick one assignment and rewrite each borrowed passage from memory, then compare with the source. Add a source note beside each idea that is not your own.' },
    { ...x(['student'], 'audience', 'My emails to teachers and professors have a clear subject, a greeting, one request and a thank you.', 'Use this order: subject with topic and your class or roll number, a greeting, your request in one or two lines, and a thanks. Keep the message short enough to read in half a minute.'), up: 'Keep a saved template for emails to teachers and fill it each time. Ask a teacher whether the messages you send are easy to answer and adjust the template.' },
    { ...x(['student'], 'revise', 'I finish assignments early enough to read them again on another day.', 'Plan to finish the draft at least one day before the deadline and read it once on the next day. A fresh look finds mistakes that you cannot see right after writing.'), up: 'Set your personal deadline a day before the real one for the next three assignments. Note how many mistakes you found in the second reading each time.' },
    { ...x(['student'], 'work', 'I have a draft resume or profile with project and activity lines written with action verbs.', 'Write a first resume even before you need it. List projects, activities and responsibilities, and begin each line with a verb such as “organised”, “built” or “led”.'), up: 'Ask a senior or teacher to read your resume and underline the weakest line. Rewrite that line with what you did and what changed.' },
    // Fresher
    { ...x(['fresher'], 'clarity', 'My work emails are short enough that the main point is clear without scrolling on a phone.', 'Cut each email to the point, the key facts and the next step. Move long background or attachments to the end or to a separate document.'), up: 'Open your last three sent emails on your phone and check whether the point is visible without scrolling. Cut the longest one by a third and compare the replies.' },
    { ...x(['fresher'], 'accuracy', 'Before sending an application or cover letter, I check the company name, role name and date.', 'Make a short checklist for applications: company name, role, date, attachment and file name. Read each item aloud against the job post before you press send.'), up: 'Keep the checklist in your notes and tick it for each of your next ten applications. Ask a friend to check one application for names only.' },
    { ...x(['fresher'], 'audience', 'I use short forms such as “pls” or “u”, or many emojis, in messages to seniors or clients.', 'Keep chat short forms for friends. For seniors and clients, write full words, a greeting and a thank you, even in a quick chat message.', true), up: 'Look at your last ten messages to seniors and mark every short form or emoji. Rewrite two of them in full and ask a colleague which version feels more professional.' },
    { ...x(['fresher'], 'revise', 'I check the attachment, the recipients and the subject line before I press send.', 'Before pressing send, check three things in order: is the right file attached, are the right people in the To and Cc lines, and does the subject line match the message.'), up: 'Make the three checks a fixed routine and ask a colleague whether they have noticed fewer follow-up emails. Keep a note of every near miss you caught.' },
    { ...x(['fresher'], 'work', 'When I send a file or report, my message says what it is, what I need and by when.', 'Write two lines above the attachment: what it is and what you need from the person, with a date. Do not leave them to guess why you sent it.'), up: 'For a week, note how often people replied with a question about why you sent a file. Add the missing information to your next messages and see if the number drops.' },
    // Professional
    { ...x(['professional'], 'clarity', 'My reports and proposals start with a short summary of the point and the decision needed.', 'Put two or three lines at the top of every long document: what is the point, what is recommended and what decision is needed. Keep the detail underneath for those who want it.'), up: 'Ask a senior to read only your summary and say what they would decide. If they cannot, rewrite the summary until they can.' },
    { ...x(['professional'], 'accuracy', 'Before I send a quote, proposal or report, I check each figure and name against the agreed record.', 'Keep one source file for prices, dates and names and check each document against it. A single wrong figure in a proposal can cost trust that is hard to win back.'), up: 'Ask a colleague to check figures and names in one document while you check the grammar. Compare what each of you found and add those items to your checklist.' },
    { ...x(['professional'], 'audience', 'I write differently for a senior leader, a team member and a client, with different detail and tone.', 'Before writing, name the person and ask what decision or action they need. Give leaders the decision and key facts, team members the steps, and clients the benefit and next date.'), up: 'Rewrite one update three ways for three different groups and ask one person from each group which version helped them most. Save those versions as templates.' },
    { ...x(['professional'], 'revise', 'I send first drafts of important proposals or reports without anyone else reading them.', 'For one important document each month, ask a trusted colleague to read it and tell you where they slowed down or got lost before you send it.', true), up: 'Agree a regular reading partner and swap important documents with them. Note which kind of problem the partner finds most often and add it to your own checklist.' },
    { ...x(['professional'], 'work', 'I keep a few samples of my best work writing, with private details removed, to show in interviews or to clients.', 'Save a few good emails, reports or summaries with private details removed and with permission where needed. Use them to show how you write, and to see how your writing has changed.'), up: 'Review the samples every quarter and replace the weakest one. Ask a mentor which sample best shows how you think and why.' },
  ],

  stageAdvice: {
    student: {
      clarity: sa('For students, written answers and assignments are often long because there is a word count to fill.', 'Write the direct answer in the first line of every written answer, then give two reasons and one example.', 'Before a longer assignment, write a headline list of its points and check the order with a friend or teacher.'),
      accuracy: sa('For students, small errors in spelling, tenses and borrowed sentences add up across many assignments.', 'Keep a list of your three usual mistakes and check each assignment against it before you submit.', 'Rewrite borrowed ideas in your own words and note the source beside each one.'),
      audience: sa('For students, the main people reading are teachers, professors and officers, and chat-style messages do not suit them.', 'Write each email to a teacher with a subject, a greeting, one request and a thank you.', 'Rewrite one chat-style message as a formal email and compare the two to see what changed.'),
      revise: sa('For students, deadlines leave little time between finishing and submitting.', 'Set a personal deadline one day before the real one so that you can read the work again on a fresh day.', 'Read your answer aloud once and mark every place where you stumble before submitting.'),
      work: sa('For students, work writing means a first resume, application answers and emails for internships.', 'Write a draft resume with verbs at the start of each line, even before you need it.', 'Ask a senior to read one application answer and tell you which line is vague.'),
    },
    fresher: {
      clarity: sa('For freshers, managers and teammates read quickly and decide in a few seconds whether to act on a message.', 'Move your request to the first two lines of each email and keep background below it.', 'Use short paragraphs, and put steps in a numbered list when there is more than one.'),
      accuracy: sa('For freshers, a wrong name, date or attachment is quickly noticed and remembered.', 'Check company names, role names, dates and attachments with a checklist before each application or email.', 'Copy figures and names from the original instead of typing them from memory.'),
      audience: sa('For freshers, it is easy to use chat-style writing for seniors without noticing.', 'Write full words, a greeting and a thank you in messages to seniors and clients, even when they are short.', 'Ask a senior or colleague whether your tone fits and adjust your template.'),
      revise: sa('For freshers, tasks come quickly and the habit of a quick final check often slips.', 'Check the attachment, recipients and subject line before you press send, every time.', 'Keep a short note of every mistake you catch so that the same ones do not return.'),
      work: sa('For freshers, subject lines, updates and resume lines are the first things others judge.', 'Write subject lines with the action and date, and end each message with a next step.', 'Rewrite three resume lines so that each shows what you did and what changed.'),
    },
    professional: {
      clarity: sa('For working professionals, the people reading are busy and want the decision first.', 'Put a two or three line summary at the top of every report, proposal and long email.', 'Keep detail in attachments or lower sections so that the main message stays short.'),
      accuracy: sa('For working professionals, a wrong figure or name in a document can affect a client or a decision.', 'Check every figure and name against the agreed record before sending.', 'Ask a colleague to check numbers while you check grammar, and compare the two lists.'),
      audience: sa('For working professionals, one document often goes to leaders, team members and clients with different needs.', 'Write the opening for each group separately: the decision for leaders, the steps for the team and the benefit for clients.', 'Keep templates for your most common messages and adjust the greeting, detail and ending each time.'),
      revise: sa('For working professionals, important documents go out under time pressure and often without a second pair of eyes.', 'Ask one trusted colleague to read each important document and tell you where they slowed down.', 'Keep a checklist for documents you write often, and add each new mistake you find to it.'),
      work: sa('For working professionals, writing is a record of your work and thinking that others will use.', 'Use one update template with what is done, what is next and what you need, and use it every time.', 'Save a few sample documents with private details removed to show how you write.'),
    },
  },

  scenarios: [
    sc('clarity', 'You must tell your manager that a report will be one day late. Which message is clearest?', [
      o('“Good morning sir, I hope you are well. This week I was waiting for some data, so the report is still in progress and I will try to finish it soon. Please let me know if there is any problem.”', 45, 'It is polite and gives a reason, but there is no new date and the real news is buried. Put the new date and your question in the first line next time.'),
      o('“The report will reach you by Friday 5 pm, a day late, because the data came on Wednesday. Is that date fine?”', 100, 'You give the new date, the reason and one question in two lines, so the manager can answer in a word and plan around it.'),
      o('“Sorry sir, report will be late.”', 25, 'It gives the news but no date, reason or request, so the manager has to write back with questions. Add the new date and what you need from them.'),
      o('Send nothing now, then send the report a day late with a long explanation in the same message', 15, 'An explanation that arrives with the late report is too late to help anyone plan. Tell the manager before the deadline and give the new date.'),
    ]),
    sc('clarity', 'You have five lines to answer “Why should we select you for this internship?” Which plan works best?', [
      o('Describe your whole school and college journey in order, so that nothing is missed', 50, 'A full history uses every line on background. Choose the one or two facts that connect to this role and start with them.'),
      o('List qualities such as hardworking, sincere and quick learner', 30, 'Adjectives are claims with no proof, and many people write the same ones. Replace each with a short example of something you did.'),
      o('One clear reason first, then one example of what you did, then one line on what you hope to learn', 100, 'The first line gives the point and the example shows it is true. This is easy to read and hard to forget.'),
      o('Copy a strong answer from the internet and change the company name', 10, 'Copied answers sound like many others and fall apart under a follow-up question. Write from your own work, even if it is small.'),
    ]),
    sc('accuracy', 'You are about to send a client a quote. You typed the amount and dates from memory. What do you do?', [
      o('Ask a friend with good English to read it for grammar and spelling, and send it once they say it looks good', 55, 'A second pair of eyes is useful, but your friend does not know the right figures. Ask them to check the numbers against the source as well.'),
      o('Check the amount, dates and client name against the original sheet, then send', 100, 'Checking against the source is the only way to find a wrong figure. It takes a minute and protects you from a mistake that is hard to undo.'),
      o('Run the spell check, read it once for tone, and send, because the figures look right to you', 35, 'A spell checker finds spelling, not a wrong amount or date, and figures typed from memory often look right when they are not. Compare each one with the original.'),
      o('Send it now and correct it later if the client notices a mistake', 15, 'A wrong figure in a quote can cost trust and money, and a correction looks careless. Check before you send, not after.'),
    ]),
    sc('accuracy', 'An AI writing tool rewrites your paragraph and quietly changes one date and one name. What do you do?', [
      o('Delete the tool’s version and stop using such tools for anything important', 50, 'Being careful is good, but you can still use a tool for wording if you check the facts yourself afterwards.'),
      o('Accept it if the grammar looks good and the first lines are right, as the tool is usually reliable', 30, 'Changes can sit anywhere in the text, and a smooth sentence can still carry a wrong fact. Read the whole version against your original.'),
      o('Accept it, since the sentences sound better than yours', 15, 'A wrong fact in a good sentence is still a wrong fact, and the mistake will be yours, not the tool’s.'),
      o('Compare the new version with yours line by line, undo the wrong changes and keep only what is correct', 100, 'You use the tool for wording and keep control of the facts. Always check names, numbers and meaning.'),
    ]),
    sc('audience', 'You wrote to a professor a week ago and have had no reply, and you need an answer by Friday. Which follow-up is best?', [
      o('Ask a classmate who knows the professor to mention it, and wait for the answer', 55, 'A classmate may help, but you still need your own clear request in writing. Send your short follow-up as well.'),
      o('“Sir, kindly reply to my email at the earliest, as I have already waited one full week and my deadline is near.”', 35, 'It is polite in form, but it sounds like blame and gives no question or date. Say what you need and by when, and thank the professor.'),
      o('Reply on your earlier email with one line of context, your exact question, the date you need it by, and thanks', 100, 'The professor can answer without searching for the old message, and a clear date and one question make a reply easy.'),
      o('Send the same email again several times a day until you get a reply', 10, 'Repeated messages irritate people and do not help. One clear follow-up with a date is enough, and then try another route.'),
    ]),
    sc('audience', 'You cannot finish a task by the date a client asked for. Which message is best?', [
      o('Tell the client now: the date you can keep, one line on why, and what you can send by their date', 100, 'You are honest, give a clear date and offer something useful straight away, which protects trust.'),
      o('Write a warm, detailed apology that explains everything that went wrong this week, and say that you will try your best to finish soon', 50, 'An apology is good, but the client needs a date more than a long explanation. Put the new date first.'),
      o('“It is not possible by that date.”', 30, 'It is clear, but it ends the conversation. Say what you can do instead and by when.'),
      o('Agree to the date and then deliver late, explaining afterwards', 10, 'A broken promise harms trust more than an honest early message. Say early what you can keep.'),
    ]),
    sc('revise', 'You finish an assignment 30 minutes before the deadline. What do you do with the time?', [
      o('Submit it at once, so that a technical problem cannot make you late', 55, 'The caution is fair, but a short check is usually worth the time when you have it. Read it quickly and then submit.'),
      o('Read it against the instructions for about 15 minutes, fix what you find, and submit with time to spare', 100, 'A final read against the instructions finds missed parts and small mistakes. Keep a few minutes for fixing them.'),
      o('Add a few more paragraphs and images, since longer answers look more complete', 30, 'Length does not make an answer better. Check that it answers the question, and cut anything that does not.'),
      o('Change the font, colours and spacing so that it looks better', 20, 'Appearance helps a little, but content and mistakes matter more. Use the time to read for meaning and errors.'),
    ]),
    sc('revise', 'A friend reads your cover letter and says the second paragraph is confusing. What do you do?', [
      o('Cut the paragraph completely so that the letter becomes shorter and cleaner, even though you are not sure what the problem was', 50, 'Cutting can help if the paragraph adds little, but first ask what confused your friend in case it is easy to fix.'),
      o('Explain the paragraph to your friend aloud, and if they understand it then, leave it as it is, because you know what you meant', 35, 'Your explanation helps your friend, but the recruiter cannot ask you. Put the explanation into the text.'),
      o('Ignore the comment, since a friend who does not work in hiring cannot judge a cover letter', 20, 'Confusion is useful feedback from anyone. If one person is confused, others may be too.'),
      o('Ask which sentence lost them, rewrite that paragraph, and let them read it again', 100, 'You find the exact problem and test the fix. A second look from the same person shows whether it worked.'),
    ]),
    sc('work', 'Which subject line is best for an email asking your manager to approve leave on 14 and 15 March?', [
      o('“Leave application for 14 and 15 March”', 70, 'It names the topic and the dates, which is good. Add what you need and by when so the manager knows the action.'),
      o('“Request for kind consideration and approval of leave at your earliest convenience”', 30, 'It sounds formal, but it does not give the dates or a deadline. Use the line to say what you need and by when.'),
      o('“Leave request: 14 and 15 March, approval needed by Friday”', 100, 'It names the topic, the dates and the action needed, so your manager can understand it without opening the email.'),
      o('“Urgent!!! Please read”', 15, 'This creates pressure but does not say what the email is about. Name the topic and the action instead.'),
    ]),
    sc('work', 'You are writing a resume line about a college event you helped to run. Which line is strongest?', [
      o('“Managed registration and a volunteer team for a two-day college event, and fixed the queue problem on day one”', 100, 'It shows what you did and a problem you solved. Add a number only if it is true and you can explain it.'),
      o('“Helped organise a two-day college event with registration and volunteers”', 55, 'It gives your role and the size of the event, but no result. Add one thing that you changed or fixed.'),
      o('“Participated in a college event”', 35, 'It says you were there, but not what you did. Add your role and one result.'),
      o('“Hardworking team player with strong communication skills who supported the event”', 20, 'These are claims with no proof. Replace them with something you actually did.'),
    ]),
    { ...sc('revise', 'Your college application answer has a 250-word limit and your draft has 400 words. What do you do?', [
      o('Remove all the examples and keep only the general statements, because there are many points and this lets you keep all of them within the limit', 35, 'Examples are what make an answer believable. Cut repeated statements before you cut examples.'),
      o('Cut the last 150 words, whatever they contain', 45, 'Cutting from the end can remove your strongest point. Decide what matters first, then cut.'),
      o('Keep the one or two points that best answer the question, with one example, and cut the rest', 100, 'A limit forces you to choose. Keep what answers the question and cut the background.'),
      o('Shrink the font and margins so that it looks shorter', 10, 'This ignores the limit and usually shows. Cut the words, not the formatting.'),
    ]), stages: ['student'] },
    { ...sc('work', 'Your team lead sends a chat message: “Please do this ASAP.” You are not sure what exactly is needed. What do you reply?', [
      o('Send a message with a full list of questions about format, length, audience, deadline and examples before you begin', 50, 'Questions are useful, but a long list can feel like a barrier. Ask the one or two that matter most and start on the rest.'),
      o('“Okay.” and then start working on your best guess', 35, 'A short reply is easy, but a wrong guess costs more time later. Confirm the task in one or two lines.'),
      o('Do not reply and begin working quietly', 20, 'Silence leaves your lead guessing. A short reply tells them you have it and when to expect it.'),
      o('Say what you understood, what you will do and by when, and ask the one question that is unclear', 100, 'This confirms the task and the time and asks only what you need. It saves a wrong delivery later.'),
    ]), stages: ['fresher'] },
    { ...sc('clarity', 'A senior leader has two minutes to read your one-page summary of a project. How do you write it?', [
      o('Set out the full background, what each team member did, all the data you collected and how you worked it out, so that the leader can judge for themselves', 40, 'It is thorough, but the leader has two minutes and needs the point first. Move the recommendation to the top and keep the rest for questions.'),
      o('Send a one-line headline such as “Project on track” and wait for questions', 30, 'A headline alone may leave the leader with nothing to decide on. Add three facts that support it.'),
      o('Write everything you know in small font so it fits on one page', 15, 'A crowded page is hard to read in two minutes. Choose what matters and leave the rest in an attachment.'),
      o('Open with the recommendation, add three key facts, and put the detail in an attachment', 100, 'The leader gets the decision in the first lines and can ask for detail if needed. This respects their time.'),
    ]), stages: ['professional'] },
  ],

  phrases: {
    clarity: [
      '“The main point is ...”',
      '“I am writing to ask you to ... by [date].”',
      '“There are three points: first ..., second ..., and third ...”',
    ],
    accuracy: [
      '“I have checked the date, the amount and the name against [source].”',
      '“Please tell me if I have spelled your name correctly.”',
      '“Source: [document, page or link].”',
    ],
    audience: [
      '“Dear Professor [Name], thank you for your time.”',
      '“I understand the date is difficult. Here is what I can do by then.”',
      '“In simple words, this means ...”',
    ],
    revise: [
      '“Final check before sending: subject, names, dates and attachment.”',
      '“I have cut this down to the points that matter for [person].”',
      '“Which sentence did you have to read twice?”',
    ],
    work: [
      '“Subject: [Action needed] [topic] by [date].”',
      '“Done: ... Next: ... I need: ...”',
      '“Next step: [name] to [action] by [day].”',
    ],
  },

  stagePlan: {
    student: [
      'In your next written answer, write the direct answer in the first line and the reasons after it.',
      'Write your next email to a teacher with a subject, a greeting, one request and a thank you.',
      'Finish your next assignment one day early and read it again on a fresh day, with your list of repeated mistakes beside you.',
      'Write a first resume with each line starting with a verb, and ask a senior to point out the weakest line.',
    ],
    fresher: [
      'Write every email subject line with the action and the date, and end each message with a next step.',
      'Before each application or email, check names, dates, attachment and recipients with a short checklist.',
      'Write full words and a greeting in messages to seniors and clients, and drop chat short forms.',
      'Rewrite three resume lines so each shows what you did and what changed, and keep them ready.',
    ],
    professional: [
      'Put a two or three line summary of the point and the decision needed at the top of your next report or proposal.',
      'Check each figure and name against the agreed record before you send, and ask a colleague to check one document.',
      'Write the opening of your next update separately for each group that will read it, such as leaders, team and client.',
      'Save two or three samples of your best work writing, with private details removed, and review them every few months.',
    ],
  },

  talk: {
    clarity: {
      q: 'Tell me about a time you had to explain something complicated in writing.',
      a: 'Describe who you wrote for, how you decided what to include, and how you put the main point first. Say what the person did next and what you would change.',
      line: 'Wrote a [report, summary or guide] for [audience] that put [main point] first, which led to [action or decision].',
    },
    accuracy: {
      q: 'How do you make sure your written work has no mistakes?',
      a: 'Describe your own checks: a list of your usual mistakes, checking figures against the source and reading tool suggestions before accepting them. Give one example of a mistake you caught.',
      line: 'Checked [figures, names or dates] against [source] before sending [document], and caught [type of error].',
    },
    audience: {
      q: 'How do you change your writing for different people?',
      a: 'Give one example with two audiences, such as a leader and a team member. Say what you changed in tone, detail and opening, and what happened as a result.',
      line: 'Adapted [document or message] for [two audiences], using [change], which led to [outcome].',
    },
    revise: {
      q: 'How do you review and improve your own writing?',
      a: 'Describe your routine, such as a break before the final read, reading aloud and asking for specific feedback. Give one example of a piece that improved because of it.',
      line: 'Revised [document] after feedback from [person], which made [specific improvement].',
    },
    work: {
      q: 'Can you show me an example of your work writing?',
      a: 'Choose a sample with private details removed, such as an email, summary or update. Explain the purpose, how you structured it and what response it got.',
      line: 'Wrote [updates, emails or reports] for [team or client], using [structure], which helped [result].',
    },
  },

  talkTitles: {
    strong: 'How to show your strongest writing habit with an example',
    weak: 'How to talk about the writing habit you are building',
    intro: 'Interviewers and clients cannot see your habits, so they look for a real example. Prepare one true example for your strongest area and one for the area you are practising.',
    mode: 'interview',
  },
};
