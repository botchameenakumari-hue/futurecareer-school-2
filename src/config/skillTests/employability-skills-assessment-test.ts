// Employability Skills Assessment Test: a bundle for the shared self-rating test page.
// Covers job-readiness habits (work habits, digital basics, working with others,
// learning on the job, proof of work). General guidance only: no statistics,
// norms, salary figures or hiring claims. Kept separate from the soft skills test.
import type { SkillTestBundle, ExtraQuestion } from './types';
import { sa, o, sc } from './types';

const BASE = '/services/assessments/employability-skills-assessment-test/';

// Extra statement with a take-it-further line.
const xx = (stages: string[], d: string, text: string, tip: string, up: string, reverse = false): ExtraQuestion =>
  reverse ? { d, text, stages, tip, up, reverse } : { d, text, stages, tip, up };

export const bundle: SkillTestBundle = {
  test: {
    id: 'employability-skills-assessment-test',
    slug: 'employability-skills-assessment-test',
    pageUrl: BASE,
    breadcrumbName: 'Employability Skills Assessment Test',
    metaTitle: 'Employability Skills Assessment Test | Free Job-Ready Check',
    metaDescription:
      'Free employability skills assessment test with 41 questions on work habits, digital basics, teamwork, learning on the job and proof of work. Instant result.',
    h1Lead: 'Employability Skills',
    h1Accent: 'Assessment Test',
    eyebrow: 'Work habits, digital basics, teamwork, learning and proof of work in one report',
    heroSub:
      'This employability skills assessment test shows how job-ready you look today, from the point of view of a manager who has to trust you with real work. You rate yourself on work habits, digital basics, working with others, learning on the job and proof of work, then get one area to fix first. It is made for final-year students, freshers and early professionals in India, and it is a different check from a soft skills test.',
    stats: [
      { value: '41', label: 'questions' },
      { value: '5', label: 'job-ready areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five job-readiness areas scored from your own ratings',
      'About 8 minutes, no sign-up',
      'Stage-based advice and a two-week routine for your weakest area',
    ],
    reportTitle: 'Employability Skills Report',
    reportFile: 'future-career-school-employability-skills-report.pdf',
    reportKicker: 'EMPLOYABILITY SKILLS REPORT',
    resultKicker: 'Your employability result',
    scoreLabel: 'Overall job-readiness habits',
    bands: {
      high: 'Visible and dependable in your answers.',
      mid: 'Partly in place, with a clear next step.',
      low: 'The first area to build before you apply or while you settle in.',
    },
    domainsHeading: 'Five areas that make you easier to hire and keep',
    domainsIntro:
      'A manager who takes on a new person is asking one question: can I give this person real work and expect it to come back right? These five areas cover the everyday signs of that. Begin with the lowest score, because a single gap can cancel out strengths in the other four.',
    domains: [
      {
        key: 'habits',
        name: 'Reliable work habits',
        short: 'Turning up, finishing what you promised and keeping people informed',
        strong:
          'You are on time, you finish what you promise and you tell people early when a date or a plan changes.',
        weak:
          'Small slips, such as late replies, unclear updates or surprise delays, make people hesitate to hand you important work.',
        plan: [
          'For one week, answer every message from a manager, teacher or client on the same day, even if the reply only says when you will respond properly.',
          'Write each instruction you receive in one line, repeat it back to the person if anything is unclear, and tick it off when you deliver.',
          'When a date is going to slip, tell the person at least a day before, with the new date and one line on why.',
        ],
      },
      {
        key: 'digital',
        name: 'Digital basics for work',
        short: 'Using email, documents, spreadsheets and online tools without needing help',
        strong:
          'You write clear emails, keep files in order, use a spreadsheet comfortably and protect work information.',
        weak:
          'Messy files, long unclear emails, shaky spreadsheet skills or careless sharing of work data cost you time and trust.',
        plan: [
          'Open a blank spreadsheet and practise sum, average, sort, filter and one simple chart on data you already have, such as your monthly expenses.',
          'Rename your files and folders with one pattern, such as project_topic_date_version, and clear your desktop and downloads once a week.',
          'Write three emails this week with a clear subject line and one request in the first two lines, and ask a senior to read one of them.',
        ],
      },
      {
        key: 'team',
        name: 'Working with others',
        short: 'Handing over work, taking direction and asking for help at the right time',
        strong:
          'You hand over work clearly, share credit, take direction well and ask for help early, with what you have already tried.',
        weak:
          'Others have to chase you, guess what you finished, or find out late that you were stuck.',
        plan: [
          'At the end of each shared task, write a three-line handover: what is done, what is pending and where the files are.',
          'When you ask for help, say what you tried, what happened and what you need, instead of only saying that it is not working.',
          'After each meeting, write down the one thing you own and the date, and send it to the person who asked for it.',
        ],
      },
      {
        key: 'learn',
        name: 'Learning on the job',
        short: 'Picking up new tools and rules quickly and learning from mistakes',
        strong:
          'You try new tools yourself first, learn from mistakes in writing and change something after feedback.',
        weak:
          'You wait to be taught, repeat the same mistakes or collect courses without using what you learn in real tasks.',
        plan: [
          'Choose one tool used in the jobs you want, such as Excel, Canva, a CRM or a code editor, and use it on a small real task for 20 minutes a day for a week.',
          'Keep a mistake log with three columns: what happened, why it happened and what you will do next time.',
          'After you get feedback, change one thing within a week and show the person the changed version.',
        ],
      },
      {
        key: 'proof',
        name: 'Proof of work',
        short: 'Having real things you can show, not only claims on a resume',
        strong:
          'You can open a project, report or sample in seconds, and your resume, profile and interview answers tell the same story.',
        weak:
          'Your resume lists skills and certificates, but you have little you can show that proves you used them.',
        plan: [
          'Pick your best piece of work and write it up in five lines: the problem, what you did, the tools, the result and what you would improve.',
          'Put it where someone can open it with one link, such as a Drive folder, a GitHub page or a short PDF, and test the link on a phone.',
          'Rewrite three resume lines so each starts with an action and ends with a result or a fact.',
        ],
      },
    ],
    questions: [
      { d: 'habits', text: 'I reach calls, classes or the office on time, and I tell people early when I will be late.' },
      { d: 'digital', text: 'I can write a professional email with a clear subject line and one clear request.' },
      { d: 'team', text: 'When I hand work to someone else, I tell them what is done, what is left and where the files are.' },
      { d: 'learn', text: 'When I meet a new tool or software, I try it on my own for at least 20 minutes before I ask for help.' },
      { d: 'proof', text: 'I have at least one piece of real work, such as a project, report or spreadsheet, that I can show someone in under two minutes.' },
      { d: 'habits', text: 'When I say I will send something by a certain time, I send it by then or tell the person before the time passes.' },
      { d: 'digital', text: 'I keep my files in named folders, so that I or a teammate can find a document in under a minute.' },
      { d: 'team', text: 'I wait until I am badly stuck, or past a deadline, before I tell anyone that I need help.', reverse: true },
      { d: 'learn', text: 'After a mistake, I write down what went wrong and what I will do differently.' },
      { d: 'proof', text: 'My resume lines say what I did and what changed, not only words such as hardworking or sincere.' },
      { d: 'habits', text: 'I write down instructions from a manager or teacher and repeat them back when they are unclear.' },
      { d: 'digital', text: 'I can use basic spreadsheet formulas, such as sum, average and filter, without looking up a tutorial.' },
      { d: 'team', text: 'I name teammates when I talk about a shared result, instead of saying only what I did.' },
      { d: 'learn', text: 'When I get feedback, I make one visible change within a week.' },
      { d: 'proof', text: 'I have collected certificates for my resume, but I could not point to a task where I used what they taught.', reverse: true },
      { d: 'habits', text: 'I leave a message from a manager or teacher unanswered for a day or more because I have nothing to report yet.', reverse: true },
      { d: 'digital', text: 'I use the same or a very similar password for my personal, college and work accounts.', reverse: true },
      { d: 'team', text: 'When I disagree with a senior, I raise it privately with my reason and an alternative.' },
      { d: 'learn', text: 'When I do not know how to do something, I search the help pages or notes first and then ask a specific question that says what I tried.' },
      { d: 'proof', text: 'My resume, my LinkedIn profile and the way I talk about myself in an interview tell the same story.' },
      { d: 'habits', text: 'I keep information from my lab, internship or job private, even when friends ask about it.' },
      { d: 'digital', text: 'I check an answer from an AI tool against a reliable source before I use it in work I submit, and I do not paste private data into it.' },
      { d: 'team', text: 'I leave meetings and calls without noting what I am expected to do next.', reverse: true },
      { d: 'learn', text: 'I wait for someone to teach me a new tool or process instead of starting to learn it myself.', reverse: true },
      { d: 'proof', text: 'A teacher, senior or manager has seen my work and could speak about it if a recruiter asked.' },
    ],
    readingTitle: 'How to read your employability result',
    readingSections: [
      {
        title: 'This is about whether you can be trusted with real work',
        body: [
          'A soft skills test looks at how you deal with people, such as leading, adapting and solving problems. This one asks something plainer: if a manager gave you a task on Monday, would it come back on time, in a usable file, with a clear update?',
          'Each area is a set of habits you can see from outside. That is why a low score is a to-do list and not a verdict on your ability.',
        ],
      },
      {
        title: 'Why proof of work gets its own score',
        body: [
          'Many students and freshers have similar degrees, courses and certificates. A person who can open one real project, sample or report in seconds gives the recruiter something concrete to judge.',
          'The same signals matter if you plan to earn through freelance work or a small business. A first client wants to know who you have worked for, what you delivered and where they can see it.',
        ],
      },
      {
        title: 'What a good result can and cannot do',
        body: [
          'Strong habits remove avoidable reasons to pass you over, but they cannot create a vacancy or decide what a particular employer wants. Hiring depends on the role, the number of applicants and the person choosing, so no score here can promise an offer.',
          'Use the result to decide what to build before your next application or in your first months at work.',
        ],
      },
      {
        title: 'Check the result against what others see',
        body: [
          'Your answers show how you see yourself. Ask a teacher, senior or manager to read your lowest-area statements and tell you which ones they have actually seen you do.',
          'Retake the test after four weeks of practice and compare examples, not only scores. A saved email, a cleaned folder or a finished sample is better evidence than a higher number.',
        ],
      },
    ],
    limits: [
      'This test records how you rate yourself, so a teacher, senior or manager may describe your habits differently.',
      'It is not a certificate, a licence or an official assessment, and no employer, board or university recognises the score as a qualification.',
      'Nothing here is marked against other candidates, so there is no pass or fail. It cannot tell you whether you will be shortlisted, hired or promoted, or what you will earn.',
      'It cannot measure technical or job-specific skills such as coding, accounting or machine operation. Those need a practical test or a trained assessor.',
      'Use the report to choose what to practise and what to show, not to label yourself.',
    ],
    faqs: [
      {
        q: 'What is an employability skills assessment test?',
        a: 'It is a set of questions that shows how ready you are to be given real work. This employability skills assessment test looks at work habits, digital basics, working with others, learning on the job and proof of work, and gives each its own score.',
      },
      {
        q: 'Is this a skills test for employment that companies use for hiring?',
        a: 'No. Some employers run their own tests during hiring, and this is not one of them. It is a private self-rating for you, to find what to improve before you apply or while you settle into a job.',
      },
      {
        q: 'Is this the same as the soft skills self-assessment?',
        a: 'The soft skills test covers leadership, teamwork, adaptability, ownership and problem solving. This one is about being hireable: reliable work habits, spreadsheet and email basics, handing over work, how fast you learn tools, and whether you can show real work.',
      },
      {
        q: 'Can I use it as a workplace skills assessment or an employee skills assessment?',
        a: 'It is meant for your own use. A team lead could share it with a new joiner to talk through, but it is not built to rate employees, decide pay or replace a performance review.',
      },
      {
        q: 'Is this a competency skills assessment with a pass mark?',
        a: 'No. A formal competency assessment is marked by a trained assessor against set standards. Here you rate your own habits, and scores are not compared with anyone else, so there is no pass or fail.',
      },
      {
        q: 'How is the score worked out?',
        a: 'You rate each statement from 1 to 5, and statements that describe a weak habit are flipped before scoring. Every answer option in a situation question carries a score from 0 to 100. An area score averages everything asked about that area, and the overall score averages the five areas.',
      },
      {
        q: 'Which stage should I choose?',
        a: 'Choose student if you are in college or about to graduate, fresher if you are job hunting, interning or in your first year of work, and professional if you have worked for a few years or are changing fields. Each stage adds its own statements and advice.',
      },
      {
        q: 'Is the test free and how long does it take?',
        a: 'It costs nothing and asks for no sign-up. Expect about 8 minutes, and you can save the result as a PDF when you finish.',
      },
    ],
    related: [
      {
        href: '/services/assessments/soft-skills-self-assessment/',
        title: 'Soft Skills Self-Assessment',
        description: 'How you lead, adapt and solve problems with other people, scored by area.',
      },
      {
        href: '/services/assessments/internship-readiness-self-assessment/',
        title: 'Internship Readiness Self-Assessment',
        description: 'Whether you are prepared to find an internship and learn from it.',
      },
      {
        href: '/services/assessments/interview-readiness-self-assessment/',
        title: 'Interview Readiness Self-Assessment',
        description: 'Research, stories, answers and follow-up before you walk into an interview.',
      },
      {
        href: '/services/assessments/skill-portfolio-tracker/',
        title: 'Skill Portfolio Tracker',
        description: 'Keep track of the skills you are building and the work that shows them.',
      },
      {
        href: '/blog/skills/employability-skills-for-graduates-india/',
        title: 'Employability Skills for Graduates in India',
        description: 'The skills graduates are expected to bring, and how to build them.',
      },
      {
        href: '/blog/skills/digital-skills-for-jobs-india-basic-to-advanced/',
        title: 'Digital Skills for Jobs in India',
        description: 'The digital basics that work needs, from email and sheets to more advanced tools.',
      },
      {
        href: '/career-resources/creating-a-portfolio-without-work-experience/',
        title: 'Creating a Portfolio Without Work Experience',
        description: 'How to build proof of work before your first job.',
      },
    ],
    breadcrumbDescription: 'Free employability skills assessment test with five job-readiness scores and a 14-day routine.',
    webAppDescription:
      'A free original 41-question employability skills assessment test covering reliable work habits, digital basics, working with others, learning on the job and proof of work, with five area scores, advice for your stage, a 14-day routine and a PDF report.',
    indexDescription:
      'Free employability skills assessment test: five scores for work habits, digital basics, teamwork, learning and proof of work.',
    indexNote: 'Free, about 8 minutes, PDF report',
  },

  depth: {
    stageHeading: 'Which of these describes you best?',
    stageNote:
      'What counts as job-ready changes with where you are. Your report adds statements and advice that fit your stage.',
    stages: [
      {
        key: 'student',
        label: 'Final-year or college student',
        description: 'Degree, diploma or professional course, getting ready for campus drives or your first applications',
        title: 'Turn college work into things a recruiter can open',
        body: 'Recruiters know that final-year students have little work history. They look for signs of how you will behave at work, and college projects, labs and group tasks are the nearest evidence you have.',
        actions: [
          'Choose your best project and write a five-line summary of it, with a link to the files, before your next campus drive or application.',
          'Treat every submission as practice for work: right format, right file name, on time, with a short note to the teacher.',
          'Replace one general line on your resume with a line that names what you made and what came out of it.',
        ],
      },
      {
        key: 'fresher',
        label: 'Fresher, intern or job seeker',
        description: 'Applying for a first job, on an internship or in the first year of work',
        title: 'Make your first weeks easy for the person who hired you',
        body: 'In the first months, people are mostly deciding whether you can be left alone with a task. Clear updates, tidy files and quick learning make you look dependable while your skills are still growing.',
        actions: [
          'Before you begin a task, ask how the person will judge it and when they need it, then say it back in one line.',
          'Send a short update before anyone has to ask for one, and ask for feedback after your first three tasks.',
          'Keep a weekly note of what you finished, with dates and results, so your resume lines stay accurate.',
        ],
      },
      {
        key: 'professional',
        label: 'Early professional or career changer',
        description: 'A few years of work, or moving into a new field or role',
        title: 'Show that your past work can move with you',
        body: 'When you change roles or fields, people want to know what carries over. Habits, tools and results you can describe in plain words matter more than titles from your last company.',
        actions: [
          'List three results from your work that you are free to share, in facts or numbers, and match each to the new role.',
          'Pick the tool or process most used in the new role and finish one small real task with it before the interview.',
          'Ask a former manager or colleague whether they would speak about your work, and tell them which role you are applying for.',
        ],
      },
    ],
    tips: [
      'Open your calendar and set a reminder 15 minutes before each call or class this week. When you know you will be late, send one line with your expected time before the start, not after.',
      'Write your next email in three parts: a subject that says the topic, one request in the first two lines, and details below. Read it once as the receiver, who has 20 seconds.',
      'End your next shared task with three lines: done, pending and where the files are. Send them in the same message as the files, so nobody has to ask.',
      'Pick one tool and give it 20 minutes today, with no video. Try the menu, search the help page for one thing you cannot find, and write down what you learnt before asking anyone.',
      'Open your best piece of work and check that it opens from a phone in two taps. If it does not, put it in a Drive folder or a short PDF, and keep that link in your notes.',
      'Next time you promise a time, such as “I will send it by 5”, write it in your notes. At 4 pm, check it, and if it will be late, send a message with the new time.',
      'Spend ten minutes renaming the ten files you open most with the pattern topic_date_version. Move everything else from your desktop and downloads into one folder called “sort later”.',
      'Say this line the next time you are stuck: “I tried A and B, I got this result, and I need help with C.” Use it within 30 minutes of getting stuck and not after the deadline.',
      'Start a mistake log in your notes app today with three columns: what happened, why, and what I will do next time. Add the last mistake you remember as the first row.',
      'Pick two lines in your resume that start with words like responsible for or hardworking. Rewrite each as: action, task, result, such as “Built a sheet that tracked 40 orders and cut missed follow-ups”, using only things that are true.',
      'When someone gives you an instruction, write it in your notebook and say it back: “So I will do X by Y, is that right?” Do it three times this week.',
      'Take a small data set, such as your monthly expenses, and practise sum, average, sort and filter on it for 20 minutes. Make one chart and label the axes.',
      'In your next group task, write “we” and the teammates’ names when you speak about a result, and say what each person did. Use the same habit in your resume and your interview answers.',
      'After your next piece of feedback, write the one change you will make and a date within seven days. Make the change, then send the new version with a line such as “I changed this based on your note”.',
      'For each certificate on your resume, write one task where you used what it taught. If you cannot, use the next free hour to do one small task with that skill and save the result.',
      'Reply to any pending message from a manager or teacher in the next hour, even with “I have started, and will send the first version by Thursday”. A short reply is better than silence.',
      'Make your passwords different today for email, college or work portal and social apps. Use a password manager or a notebook kept at home, and switch on two-step verification for your email.',
      'Before you disagree with a senior in public, write your reason and an alternative in two lines. Ask for five minutes in private and begin with what you agree with.',
      'Next time you are stuck, search the help page, documentation or your notes for ten minutes. Then ask your question with what you found and what you tried.',
      'Read your resume, then your LinkedIn About section, then the answer you give to “tell me about yourself”. Change anything that does not match, such as job titles, dates or the skills you claim.',
      'Decide today what stays private from your lab, internship or job, such as client names, data and internal plans. When friends ask, say “I cannot share that” and move on.',
      'Pick one AI answer you used this week and check it against an official page or a textbook. Never paste real names, phone numbers or company files into a public AI tool.',
      'Open a note before your next meeting and write “Actions” at the top. Before the call ends, write what you own and by when, and say it aloud to confirm.',
      'Pick one tool that you have been waiting for someone to teach you, and spend 30 minutes with it today. Write the three things you can now do, and one question for later.',
      'Ask one teacher, senior or manager: “If a recruiter called you about my work, what would you say?” Share your best sample with them first so they have something specific to say.',
    ],
    tipsUp: [
      'Track your arrival for two weeks in a small note, with a tick for on time and a minus for late. If you were late more than twice, move your leaving time earlier by ten minutes and see what changes.',
      'Ask a senior to read only your subject lines and first sentences for five emails and say what each one asked. Rewrite any that they could not summarise, and keep the best one as a template.',
      'Ask the person who received your last handover if they needed to ask you anything afterwards. Add that missing item to your three-line template and use it for the next four handovers.',
      'Choose a second tool and set a 20 minute timer for it each day this week. At the end, show a teammate one thing you did with each tool and ask what you could do faster.',
      'Ask one person outside your field to open your work and tell you what they understood in one minute. Change the first line of the write-up until they get the point without help.',
      'Count in your notes how many promised times you met this week and how many you flagged early. Aim to have no promise that passes silently, and raise your count by one next week.',
      'Ask a classmate or colleague to find a file from last month using only your folder names. Where they get lost, rename the folder, and set a weekly reminder for ten minutes of clean-up.',
      'Keep a note of three recent times you asked for help and check whether each message said what you tried. Rewrite the weakest one in the better form and use that form from now on.',
      'Read your mistake log every Friday and underline repeated causes. Pick the commonest one and make a small checklist or reminder that prevents it next week.',
      'Ask a senior to underline the resume line that tells them least. Rewrite it with an action, a task and a fact, and then check each line for something you could prove if asked.',
      'Keep a one-line log of instructions you received and what you delivered. At the end of the week, check any item where you delivered something different from what was asked and find out why.',
      'Try one new feature a week, such as a pivot table, lookup or conditional formatting, on real data. Save a copy of a sheet using it in your folder so you have a sample to show.',
      'After a team result, ask one teammate whether they felt they got fair credit. If not, add their part to your next update and tell the person who asked for the result.',
      'Ask the person who gave feedback whether the change helped, and note the answer. After three rounds, review the notes to see which kind of feedback you act on fastest.',
      'Turn two certificates into small projects: write one page for each on what you made, the steps and what you would improve. Add the link to your resume next to each certificate.',
      'Set a rule that any message from a manager gets a reply the same day, and track it for a week. Mark each day you kept it and look at what blocked you on the days you did not.',
      'Check your email and main accounts at a password-check page or settings screen this week, and fix any weak or repeated password. Write the date in your calendar to review it again in three months.',
      'Prepare a two-line alternative for the next three disagreements before you speak. Afterwards, note whether the senior accepted it, changed it or asked for more detail, and learn from the pattern.',
      'For each new problem, write the time you spent searching on your own and the time you waited. Try to widen the first number a little each week without missing a deadline.',
      'Ask a friend to read all three versions of your story and mark anything that differs. Fix the differences, and keep a one-page note of your story to use before every application.',
      'Write down a short rule about what you can share and with whom, and read it again before every new project. If you are unsure, ask your supervisor before you tell anyone.',
      'Make a short list of the AI checks you do, such as checking numbers, names and dates, and keep it by your desk. Share the list with one classmate or colleague and ask what they would add.',
      'After each meeting this week, send the person who ran it a two-line note: what you will do and by when. Note whether anyone corrected you, and use that to listen better next time.',
      'Set a 14-day plan for one tool: day 1 to 4 basic tasks, day 5 to 9 a small real task, day 10 to 14 a sample you can show. Tick each day and share the result with one person.',
      'Send your best sample to the person who might speak about you, with two lines on what you want them to notice. Thank them, and update them when you apply to a role they might be asked about.',
    ],
    strongTip:
      'This habit already works in your favour. Keep a note of one real example of it, because an example is what you will need in an interview or a performance review.',
    domains: {
      habits: {
        why: 'Most people judge a new colleague by small things: whether they came on time, whether a message got an answer, whether a promised file arrived. These habits are the cheapest way to earn trust, and they cost you nothing but attention.',
        roles: [
          'Internships, trainee roles and first jobs where people are deciding how much to hand you',
          'Client-facing, support, operations and coordination roles where people depend on your replies',
          'Freelance work, where a client has no other way to judge you than how you deliver',
        ],
        routine: [
          'Days 1 to 3: Reply to every message the same day and write down every promise you make with its time.',
          'Days 4 to 7: Repeat each instruction back in one line and check it against what you deliver.',
          'Days 8 to 11: Send an early warning for anything that will be late, with a new date, at least a day ahead.',
          'Days 12 to 14: Review your log, count the promises kept and pick one habit to continue for the next month.',
        ],
        mistakes: [
          'Waiting until you have a full answer before replying, so the other person hears nothing',
          'Saying yes to a date you already doubt, and flagging it only after it passes',
          'Sharing work details in friends’ groups because it feels harmless',
        ],
        proof: [
          'A log of promised dates and the days you delivered, with one example of an early warning',
          'A message thread where you repeated an instruction and delivered exactly that',
          'A supervisor or teacher saying they could leave a task with you',
        ],
        askOthers: 'When you give me a task, what small thing would make you more confident that it will come back on time?',
        talkingPoints: [
          'You answer messages quickly and tell people early when plans change',
          'You repeat instructions back so work comes right the first time',
          'You keep work information private',
        ],
        midStep: 'Pick one recurring promise, such as a weekly update, and send it at a fixed time every week for a month so that it becomes automatic.',
      },
      digital: {
        why: 'Almost every entry-level job runs on email, documents, spreadsheets and chat. People who can do these basics cleanly save everyone time, while careless files, unclear emails or shared passwords create problems that look bigger than the skill itself.',
        roles: [
          'Back-office, operations, HR, accounts, sales support and customer support roles',
          'Almost any office job, since email, sheets and meetings are the daily tools',
          'Roles that handle customer or company data, where care with files and passwords is part of the job',
        ],
        routine: [
          'Days 1 to 3: Rename and sort your ten most used files, and make one folder system you can explain in a sentence.',
          'Days 4 to 7: Practise sum, average, sort, filter and a chart on a real data set for 20 minutes a day.',
          'Days 8 to 11: Write three work emails with a clear subject and one request, and get one of them checked by a senior.',
          'Days 12 to 14: Fix your passwords, switch on two-step verification and write a short rule for what you will and will not paste into an AI tool.',
        ],
        mistakes: [
          'Naming files final, final2 and new, so nobody knows which one is current',
          'Sending long emails where the request is buried at the end',
          'Sharing logins or work files on personal chat apps',
        ],
        proof: [
          'A clean sheet or report you made, with simple formulas and a chart',
          'A folder structure that a teammate could follow without you',
          'An email thread where your message got a clear answer on the first reply',
        ],
        askOthers: 'Which part of my files, emails or sheets takes you the most time to understand, and what would you change first?',
        talkingPoints: [
          'You write clear emails and name files so others can find them',
          'You can use a spreadsheet for sums, filters and charts',
          'You take care with passwords and with what you share',
        ],
        midStep: 'Choose one task you do by hand each week, such as formatting a report, and build a template or formula for it so it takes half the time.',
      },
      team: {
        why: 'Work is rarely done by one person from start to finish. How you hand over, ask for help and take direction decides whether others can build on what you did without extra effort.',
        roles: [
          'Project, delivery, operations and marketing roles where work passes between people',
          'Roles with seniors in different time zones or offices, where written handovers matter',
          'Group projects and campus clubs where you can practise before a job begins',
        ],
        routine: [
          'Days 1 to 3: End each shared task with a three-line handover: done, pending and where the files are.',
          'Days 4 to 7: Use the line “I tried A and B, I got this, and I need help with C” the next time you are stuck.',
          'Days 8 to 11: Write down your next step and its date at the end of every meeting and send it to the person who asked.',
          'Days 12 to 14: Ask two teammates what would make your work easier to pick up and change one thing.',
        ],
        mistakes: [
          'Hiding a problem for days because you hope to fix it before anyone notices',
          'Saying “done” without telling anyone what is left or where it is',
          'Disagreeing in a group chat in front of everyone instead of speaking to the person first',
        ],
        proof: [
          'A handover note that a colleague used without calling you',
          'A short message that asked for help well, with what you tried',
          'A meeting note listing the actions you owned and delivered',
        ],
        askOthers: 'When you pick up something I handed over, what is the first thing you have to ask me?',
        talkingPoints: [
          'You hand over work so that others can continue without you',
          'You ask for help early and say what you have already tried',
          'You share credit and raise disagreement politely',
        ],
        midStep: 'Keep a single handover template in your notes and use it for every task you pass on this month, then ask one person what it still misses.',
      },
      learn: {
        why: 'In the first year of a job, most of what you do is new. People who work out new tools on their own, learn from slips and act on feedback become useful faster, and that matters more than what you knew on day one.',
        roles: [
          'Any first job or internship, where most tools and processes are new to you',
          'Career changers who must learn the tools and words of a new field',
          'Roles with fast-changing tools, such as marketing, analytics, design and software',
        ],
        routine: [
          'Days 1 to 3: Choose one tool and spend 20 minutes a day on a small real task with it.',
          'Days 4 to 7: Start a mistake log and add each slip with its cause and the fix.',
          'Days 8 to 11: Ask for feedback on one finished task and make one change within the week.',
          'Days 12 to 14: Turn what you learnt into a short sample, and keep it in your folder as proof.',
        ],
        mistakes: [
          'Taking courses without using them on a real task',
          'Asking for help before reading the help page or your notes',
          'Defending the first version of your work when someone suggests a change',
        ],
        proof: [
          'A small project made with a tool you learnt in the last month',
          'A mistake log showing what you changed after each slip',
          'A before and after of a task you redid after feedback',
        ],
        askOthers: 'When you see me learn something new, what do I do well, and what slows me down?',
        talkingPoints: [
          'You try new tools yourself and then ask a specific question',
          'You learn from mistakes and can describe what you changed',
          'You act on feedback quickly',
        ],
        midStep: 'Pick the one tool that appears most often in jobs you want and finish one small real task with it in the next two weeks.',
      },
      proof: {
        why: 'A resume is a list of claims, and a recruiter has little time to check them. A project, report, sample or reference that can be opened or called gives them something to trust, and gives you something to talk about in an interview.',
        roles: [
          'Fresher and campus hiring, where most applicants have similar degrees and courses',
          'Career changers who need to show that past work carries over to a new field',
          'Freelance and small business work, where a client needs to see a sample before paying anyone',
        ],
        routine: [
          'Days 1 to 3: Choose your best piece of work and write it up in five lines: problem, steps, tools, result and what you would improve.',
          'Days 4 to 7: Put it behind one link and test the link on a phone. Rewrite three resume lines with an action and a result.',
          'Days 8 to 11: Make your resume, profile and spoken story match, and ask one person to check them side by side.',
          'Days 12 to 14: Ask one teacher, senior or manager if they would speak about your work, and send them your sample.',
        ],
        mistakes: [
          'Listing skills and certificates with nothing to show for them',
          'Sharing a link to a folder that asks for permission or does not open on a phone',
          'Claiming results that you cannot explain or prove when asked',
        ],
        proof: [
          'A write-up of one project with its link, tools and result',
          'Three resume lines that each name an action and a true result',
          'A named person who has seen your work and agreed to speak about it',
        ],
        askOthers: 'If a recruiter asked you for one example of my work, which would you pick, and what would you say about it?',
        talkingPoints: [
          'You can open a real sample of your work in seconds',
          'Your resume lines are specific and true',
          'Someone who has seen your work can speak for you',
        ],
        midStep: 'Create one page that holds your best three pieces of work with a link, a two-line description and your contact details, and put the link on your resume.',
      },
    },
    thirtyDay: [
      'Week 1: Begin the routine for your weakest area and jot down each evening what you tried and what happened.',
      'Week 2: Complete the two-week routine and ask one person who sees your work whether anything looks different.',
      'Week 3: Move to your second-lowest area, keep the habit from week 1, and update your resume or profile with one real example.',
      'Week 4: Take the test again, set each area beside your first result, and pick the sample you will show in your next application or review.',
    ],
  },

  extras: [
    // Student
    xx(
      ['student'],
      'habits',
      'In labs, projects and internships I submit what I promised, in the format asked, on or before the time.',
      'Before you submit, check three things: the format asked, the file name and the time. If you will be late, write to the teacher before the deadline with the new time.',
      'Ask a teacher or lab in-charge whether any of your submissions caused them extra work and note the answer. Fix that one thing in your next submission.',
    ),
    xx(
      ['student'],
      'digital',
      'I can make a clean one-page document or short slide deck that another person can read without my help.',
      'Make a one-page summary of one project with a title, three short headings and one picture or chart. Ask a friend to read it and say what the project does.',
      'Show the page to someone outside your branch and ask what they still do not understand. Rewrite the unclear part and keep the page as a reusable sample.',
    ),
    xx(
      ['student'],
      'team',
      'In group projects I let one or two people do most of the work and add my name at the end.',
      'At the first meeting, write each person’s part and date in the group chat, and take one part that you own from start to finish.',
      'At the halfway point, post a one-line status on your part and ask what others need from you. Ask the group at the end whether the split felt fair.',
      true,
    ),
    xx(
      ['student'],
      'learn',
      'I have used a short course or tutorial to make a small project, not only collected the certificate.',
      'Take the last course you finished and make one small thing with it in a weekend, such as a sheet, a page, a poster or a short script. Save it with the date.',
      'Add one feature or fix to that small project every week for a month. Write what you learnt each time and keep the final version on your link page.',
    ),
    xx(
      ['student'],
      'proof',
      'I can explain one college project in three sentences: the problem, what I did and what came out of it.',
      'Write three sentences now for your best project and say them aloud once. If you cannot say what came out of it, add a small test, a number or a demo to the project.',
      'Say your three sentences to a friend, a senior and a family member, and note which part each of them found unclear. Use the clearest version in interviews.',
    ),
    // Fresher
    xx(
      ['fresher'],
      'habits',
      'In my first weeks, I find out how this workplace handles reporting time, leave requests and who needs to be told about delays.',
      'Ask your supervisor or a colleague on day one: who do I tell when I am late, how do I request leave, and where do updates go? Write the answers in one note.',
      'After a month, check your note against what you actually saw and fix any rule that changed. Offer to share the note with the next new joiner.',
    ),
    xx(
      ['fresher'],
      'digital',
      'I send files with names such as final2 or new new, and others have to find out which version is right.',
      'Use one pattern for every file you send, such as client_topic_date_v1, and delete old copies from shared folders once a version is final.',
      'Ask a colleague whether they ever had to ask which version was current. Set a weekly reminder to clean your shared files and note how many you removed.',
      true,
    ),
    xx(
      ['fresher'],
      'team',
      'When a senior gives me a task, I ask how they will judge it and when they need it before I begin.',
      'Use two questions: “How will you judge this?” and “When do you need it?” Write the answers on top of the task and refer to them when you hand it back.',
      'After you hand in the task, ask what you could have done differently and write the answer under the same note. Use it as a checklist for the next task.',
    ),
    xx(
      ['fresher'],
      'learn',
      'I ask for feedback after my first few tasks instead of waiting for a formal review.',
      'After your third task, ask: “What is one thing I should do differently next time?” Write the answer down and act on it within a week.',
      'Ask the same person again after four weeks and see whether the same point comes up. If it does, make a checklist item for it and use it every time.',
    ),
    xx(
      ['fresher'],
      'proof',
      'I keep a running note of tasks I finish, with dates and results, so I can update my resume accurately.',
      'Open a note called “Work log” and add one line every Friday: what you finished, for whom and what happened. This log becomes your resume lines later.',
      'Once a month, turn the log into two resume lines and ask your supervisor whether the facts are correct and allowed to be shared. Keep only what they confirm.',
    ),
    // Professional
    xx(
      ['professional'],
      'habits',
      'People who work with me can rely on my dates because I tell them early when something will move.',
      'For the next two weeks, write down the date you promise for each task. When a date looks at risk, tell the person at once with a new date and a reason.',
      'Count your promised dates met and early warnings sent for a month. Ask one regular colleague whether they have noticed a change in how you communicate dates.',
    ),
    xx(
      ['professional'],
      'digital',
      'I have simplified one repeating task, such as a weekly report, with a template, a formula or a tool.',
      'List the tasks you repeat each week and pick the one that takes the longest. Build a template or formula for it and time yourself before and after.',
      'Show the template to a colleague who does a similar task and offer to adjust it for them. Note the time saved in your work log as a result you can describe.',
    ),
    xx(
      ['professional'],
      'team',
      'When I help a newer colleague, I explain how to do it instead of just doing it for them.',
      'Next time someone asks for help, show the steps once, then watch them do it and offer a short written note. It builds your name as someone who makes teams stronger.',
      'Ask the person you helped whether the explanation was enough and what was missing. Save the best explanation as a short guide and share it with the team.',
    ),
    xx(
      ['professional'],
      'learn',
      'I have done the same tasks in the same way for more than a year without learning anything new that changes how I work.',
      'Pick one skill that appears in roles one step above yours and spend 30 minutes a week on it. Use it on a real task within a month.',
      'Set a quarterly check: write what new tool or method you used at work in the last three months. If the list is empty, choose one thing for the next quarter and tell your manager.',
      true,
    ),
    xx(
      ['professional'],
      'proof',
      'I can describe two results from my work, in facts or numbers I am allowed to share, such as time saved or work delivered.',
      'Write two results from your recent work in the form: what I did, for whom, and what changed. Check with your manager or the company rules on what you may say outside the company.',
      'Add the same two results to your resume and your profile, and prepare a 60-second spoken version. Ask a friend in another field whether they understand the result without explanation.',
    ),
  ],

  stageAdvice: {
    student: {
      habits: sa(
        'In college, deadlines and attendance feel flexible, so habits can slip without anyone telling you.',
        'Treat one submission each week as if a client were waiting: right format, right file name, sent before the time.',
        'Tell a teacher or lab in-charge early when you will miss a date, with the new date and the reason.',
      ),
      digital: sa(
        'In college, most work lives on a phone or in scattered folders, and few students learn spreadsheets or professional email properly.',
        'Make one project report in a clean format, with headings, a table or chart, and a file name that follows a pattern.',
        'Send your next email to a teacher with a clear subject and one request, and ask a senior to say what they understood.',
      ),
      team: sa(
        'In college group work, tasks are often unclear and the person who speaks loudest ends up doing the most.',
        'At the first meeting, write each person’s task and date in the group chat and take one part to own.',
        'At the end of the project, write a three-line summary of who did what and use it in your resume.',
      ),
      learn: sa(
        'In college, courses and certificates are easy to collect, and harder to turn into something you made.',
        'Pick one course you finished and build one small thing from it within a weekend.',
        'Keep a mistake log for your next project and add one row for each thing that went wrong.',
      ),
      proof: sa(
        'In college, your resume is thin because you have little work history, so projects and labs carry the weight.',
        'Write a five-line summary of your best project and put it behind a link that opens on a phone.',
        'Ask a teacher who has seen your work if they would be your reference, and share the sample with them.',
      ),
    },
    fresher: {
      habits: sa(
        'As a fresher, people are watching small things such as time, replies and follow-through to decide how much to give you.',
        'Send a short update at a fixed time each day or week, before anyone has to ask for one.',
        'When you are unsure about an instruction, repeat it back in one line before you start.',
      ),
      digital: sa(
        'As a fresher, you may be expected to know email, sheets and meeting tools from day one without being taught.',
        'Spend your first week learning how the team names files, shares folders and runs meetings, and follow the same pattern.',
        'Practise the five sheet basics (sum, average, sort, filter, chart) on any data until you can do them without help.',
      ),
      team: sa(
        'As a fresher, asking for help can feel like admitting weakness, but staying stuck costs more.',
        'Set a limit for yourself, such as 30 minutes, after which you ask with what you tried.',
        'At the end of every task, send a three-line note: done, pending and where to find it.',
      ),
      learn: sa(
        'As a fresher, almost every tool, term and process is new, and the people who learn it fastest get trusted with more.',
        'After each of your first three tasks, ask for one thing to do differently and act on it within a week.',
        'Write a one-page cheat sheet for the tool you use most and update it as you learn.',
      ),
      proof: sa(
        'As a fresher, your resume must carry you into your first job, and interviewers want something to look at.',
        'Pick two pieces of work, such as a project, report or internship task, and write them up in five lines each.',
        'Keep a work log of tasks you complete, with dates and results, so your resume stays honest and up to date.',
      ),
    },
    professional: {
      habits: sa(
        'As an early professional, people already trust you with tasks, so what they notice now is whether your dates hold under pressure.',
        'Tell stakeholders early when a date is at risk and offer a new date with the reason.',
        'Send a short written summary after calls and meetings so decisions and owners are clear to everyone.',
      ),
      digital: sa(
        'As an early professional, you are expected to work fast with tools and to help others with them.',
        'Find one task you repeat every week and build a template, formula or shortcut for it.',
        'Review how you share files and passwords with your team and fix anything that depends on a personal chat app.',
      ),
      team: sa(
        'As an early professional, others now depend on your handovers, and juniors may look to you for help.',
        'Make a handover template with done, pending, risks and where to find things, and use it every time.',
        'When someone asks for help, show the steps once and then let them do it, so they can manage next time.',
      ),
      learn: sa(
        'As an early professional or career changer, your old skills may not match the new tools, and learning time is hard to find.',
        'Choose the one tool or method that appears in most roles you want and finish one real task with it each month.',
        'Review the last three months and write what you learnt and used. If the list is empty, set a goal for the next one.',
      ),
      proof: sa(
        'As an early professional, you have work to show, but it may be hard to describe in plain facts or to share beyond your company.',
        'Write two or three results in the form: what I did, for whom and what changed, using only what you are allowed to share.',
        'Build a short page that holds your best samples, cleared for sharing, and link it from your profile.',
      ),
    },
  },

  scenarios: [
    sc('habits', 'It is Thursday, and you promised to send a report to your manager by 5 pm. At 2 pm you realise it will take until Friday morning. What do you do?', [
      o('Send a message now saying the report will come Friday at 10 am, and why, and offer to share what is ready', 100, 'You gave early warning, a new time and a reason. Write the new time in your notes and keep it, because a second delay costs more trust than the first.'),
      o('Work as fast as you can and hope to finish by 5, and explain only if you miss it', 33, 'Hoping can work, but if you miss the time the other person has had no chance to plan. Send the message at 2 pm, not at 5:30.'),
      o('Send the report at 5 pm with the parts that are not ready left blank, without a note', 10, 'A half-finished file with no explanation forces the manager to find the gaps. If you send partial work, say clearly what is done and what is missing.'),
      o('Wait until Friday morning and send the finished report with an apology', 55, 'The report will be good, but the manager planned for Thursday and heard nothing. Next time, warn before the deadline, not after it.'),
    ]),
    sc('habits', 'A friend asks you which company you did your internship at, and what the client project was about. The project has confidential details. What do you say?', [
      o('Say which company you worked at, say you cannot share client details and talk about what you learnt', 100, 'You answer honestly without sharing client information. This is also how to answer in interviews: describe your role and learning, not private data.'),
      o('Share a few details because you trust your friend and they will not tell anyone', 30, 'Information can travel further than you intend, and the rule usually covers all details. If you are unsure what you can share, ask your supervisor.'),
      o('Say nothing about the internship at all, even where it was', 55, 'You protect the details, but you also lose a chance to show your experience. You can name the company and talk about your role without describing client data.'),
      o('Post about it on social media to look good, leaving out names but sharing screenshots', 10, 'Screenshots often show names, numbers or files without you noticing. Check the rules with your supervisor before posting anything from a project.'),
    ]),
    sc('digital', 'You need to ask a senior for an extension on a report. Which email is most likely to get a quick useful reply?', [
      o('Subject: Extension request for the sales report (new date: Friday). Body: one line on why, one line on the new date, and an offer to send a draft today', 100, 'The subject says the topic and the request, and the body gives a reason, a date and a next step. The person who receives it can answer in one line.'),
      o('Subject: Hi. Body: a long paragraph about everything that went wrong this week, with the request in the last line', 33, 'The request is buried, so the senior has to search for it. Put the request in the first two lines and give details after.'),
      o('Subject: Urgent!!! Body: “Need more time”', 20, 'It is short, but it gives no date, reason or next step, so the senior must write back with questions. Add the new date and why.'),
      o('Send a message on WhatsApp late at night saying “Sir I need extension”', 40, 'A quick message can work if the team uses chat, but a late-night note without a date or reason is easy to miss. Follow with an email that has the details.'),
    ]),
    sc('digital', 'You are given a sheet with 500 customer rows and asked to find the number of orders from one city and the average order value. What do you do?', [
      o('Use a filter on the city column, then a sum and an average on the filtered rows, and note the formulas used', 100, 'Filters and basic formulas are exactly what this task needs, and noting the formulas lets someone check your work. Save a copy before you start.'),
      o('Count the rows by eye and work out the average on a calculator', 30, 'It may work for ten rows, but at 500 rows mistakes are likely and nobody can check you. Learning filter, sum and average takes under an hour.'),
      o('Ask a colleague to do it for you, because you have not used a sheet this way before', 45, 'Asking is fine when you are stuck, but try first. Search for how to filter and average, try it on a copy and then ask about what is unclear.'),
      o('Copy the data into an AI tool and use the numbers it gives without checking them', 15, 'Customer data may be private, and AI tools can get numbers wrong. Do the calculation in the sheet and check any other tool’s answer against it.'),
    ]),
    sc('team', 'You are working on a shared task and you find that your part depends on a teammate who has not sent their input. The deadline is in two days. What do you do?', [
      o('Message the teammate today to ask when they can send it, offer help if they are stuck and tell the lead if there is no reply by tomorrow', 100, 'You stay polite, give a date and share the risk early. Keep a note of each message you sent so the story is clear.'),
      o('Wait until the last day, then tell the lead the teammate did not do their part', 10, 'This looks like blame, and the lead hears about the problem too late to help. Raise a dependency risk early and describe it without blaming.'),
      o('Do your teammate’s part yourself without telling anyone', 40, 'You protect the deadline, but the lead does not know about the problem and may give you more of this work. Tell the lead what you did and why.'),
      o('Send a general message in the group chat asking everyone to send their parts', 60, 'A group message is gentle, but it may not reach the person who is stuck. Follow up directly with that teammate.'),
    ]),
    sc('team', 'In a meeting, your senior makes a suggestion that you think will cause a problem. What do you do?', [
      o('Say you want to check one point, give your reason in a sentence, and ask for five minutes with the senior later if the meeting is short on time', 100, 'You raise the issue politely with a reason and keep the discussion constructive. Offering an alternative later makes your point stronger.'),
      o('Say nothing in the meeting, and complain about it to colleagues later', 15, 'The senior never hears your concern, and colleagues may see you as negative. Raise it directly, in private if the meeting is not the place.'),
      o('Disagree loudly in front of everyone to show you have thought about it', 25, 'A public challenge can make the senior defensive, even if your point is right. Start with what you agree with, then ask a question.'),
      o('Agree in the meeting and quietly do it your own way afterwards', 20, 'The senior will find a different result from what was agreed and trust drops. Raise the concern and agree on one way before you start.'),
    ]),
    sc('learn', 'Your manager asks you to prepare a report using a tool you have never used. What do you do first?', [
      o('Spend 20 to 30 minutes with the help page or a short tutorial, try it on sample data, and then ask your manager one specific question if you are stuck', 100, 'You tried first and ask with a clear question. People are usually glad to help someone who has done this.'),
      o('Tell your manager you do not know the tool and wait to be trained', 25, 'Honesty is good, but waiting hands the work to someone else. Say you are learning it, and give a date for a first version.'),
      o('Ask a colleague to sit with you and show you every step before you try anything', 45, 'A short walk-through can help, but you learn more when you try first and bring questions. Take notes on what they show you.'),
      o('Use a tool you already know and produce the report in the wrong format', 15, 'It is quicker for you, but the report may not be usable. Check whether the tool is required and say what you can deliver in the time.'),
    ]),
    sc('learn', 'You made a mistake in a number in a report, and a senior has pointed it out in front of the team. What do you do?', [
      o('Thank them, correct it the same day, and write what caused it and what you will check next time', 100, 'You fix the work and learn from the cause. A short mistake log is what turns a slip into a habit that improves.'),
      o('Explain at length why the number was hard to find and who gave you the wrong data', 25, 'Context can matter, but long explanations sound like excuses. Correct the number first, and share context briefly if it is relevant.'),
      o('Correct it quietly and hope no one remembers', 45, 'The fix is right, but telling the senior you corrected it keeps trust. A one-line note is enough.'),
      o('Feel upset, avoid the senior for a few days and do less in meetings', 10, 'It is natural to feel bad, but hiding stops you from learning. Fix the number, ask what to check next time and keep taking tasks.'),
    ]),
    sc('proof', 'A recruiter says, “Tell me about a project you are proud of.” What do you do?', [
      o('Describe one project in order: the problem, what you did, the tools, the result and what you would improve, and offer to share a link', 100, 'This gives the recruiter a clear story and something to check. Keep it under two minutes and have the link ready.'),
      o('Say you worked on many projects and list their names', 30, 'A list gives the recruiter nothing to hold on to. Pick one and tell the story of it.'),
      o('Talk about your degree and marks instead, since you have no project', 35, 'Marks matter, but you can still describe a lab, assignment or small task as a project. Choose one and describe what you did.'),
      o('Describe a team project and say only that the team did well', 40, 'A team result is fine, but the recruiter needs to know your part. Say what you did and what the team achieved.'),
    ]),
    sc('proof', 'You are updating your resume for a job you want. You have three certificates and one small project. How do you use them?', [
      o('Lead with the project with two lines on what you made and its result, with a link, and list each certificate with one line on what you used it for', 100, 'The project is real evidence, and the certificates support it. Each line then has a result a recruiter can check.'),
      o('List the three certificates first because they look impressive and skip the project because it is small', 35, 'Certificates show you studied, but a project shows you applied it. Small projects are still useful to describe.'),
      o('Add more skills to your skills list so the resume looks fuller', 15, 'Skills you cannot demonstrate can lead to difficult interview questions. List the skills you have used in a task, and leave out the rest.'),
      o('Write that you are hardworking and a quick learner and move on', 25, 'Everyone writes these words, so they do not distinguish you. Replace them with an example that shows the quality.'),
    ]),
    { ...sc('habits', 'It is your first week at a company, and nobody has told you what time updates are expected or how to report a late arrival. What do you do?', [
      o('Ask your supervisor or buddy who to tell about a late arrival and when updates are expected, and write down the answers', 100, 'Asking early avoids guesses and shows you care about the rules. Check your note again after two weeks.'),
      o('Watch what others do and copy them, without asking anyone', 55, 'Watching helps, but others may not follow the actual rule. Confirm with one person to be sure.'),
      o('Assume it is flexible and do what you did in college', 20, 'College habits may not fit the office, and a mistake in the first week is remembered. Ask before you guess.'),
      o('Wait until someone tells you, and say nothing if you are late once or twice', 15, 'People usually notice lateness and may judge it before they explain the rule. Ask early and tell them when you will be late.'),
    ]), stages: ['fresher'] },
    { ...sc('proof', 'You are changing fields, and the new job asks for a work sample. Your past work is confidential. What do you do?', [
      o('Make a small new sample with similar steps and public or made-up data, and explain which real skills it shows', 100, 'You show your approach without sharing private data. Say clearly that the data is sample data.'),
      o('Share a real report from your company, with the names hidden, without asking anyone', 10, 'Hiding names may not be enough, and sharing without permission can harm you and your company. Ask first, or build a new sample.'),
      o('Say you cannot share anything because of confidentiality and leave it there', 45, 'It is honest, but it leaves the recruiter with nothing. Offer a new sample or describe results you are allowed to share.'),
      o('Describe your past work in detail in the interview, including the client’s numbers', 20, 'Clients and employers usually expect these details to stay private. Describe your actions and the type of result, without the figures.'),
    ]), stages: ['professional'] },
    { ...sc('team', 'In your final-year group project, one teammate is not replying and the demo is in three days. What do you do?', [
      o('Message them directly to ask what they can still do, share the plan with the group, and tell your guide teacher early if there is still no reply', 100, 'You try the person first, then involve others in a fair way. Keep a record of messages so the story is clear.'),
      o('Do their part without telling anyone and say nothing at the demo', 40, 'You save the demo, but the group may not know what happened and the guide may not see it. Tell the group and your guide what you did.'),
      o('Complain about them in the class group chat', 10, 'A public complaint rarely brings the person back and may hurt the team. Speak to the teammate first and then to your teacher.'),
      o('Wait to see if they turn up on the last day', 25, 'Waiting gives you no time to fix a gap. Plan for their part to be missing, and invite them back if they come.'),
    ]), stages: ['student'] },
  ],

  phrases: {
    habits: [
      '“I will send this by 5 pm today. If anything changes, I will tell you before then.”',
      '“Let me repeat what I understood, so we are on the same page.”',
      '“This will take until Friday morning because of [reason]. Can I send what is ready today?”',
    ],
    digital: [
      '“Subject: [topic], action needed by [date]. I need your approval on the attached sheet.”',
      '“I have saved the file as [name_date_version] in the shared folder, and the older version is archived.”',
      '“I checked these figures in the sheet. The totals match the source file.”',
    ],
    team: [
      '“Done: [what]. Pending: [what]. You can find the files in [place].”',
      '“I tried A and B and got this result. I need help with C.”',
      '“I would like to raise one point about this plan. Can we take five minutes after the meeting?”',
    ],
    learn: [
      '“I have not used this tool before. I will try it today and send a first version by [day].”',
      '“Thank you for the feedback. I will change [point] and send the new version by [day].”',
      '“I made a mistake in [thing]. It was because of [reason], and I will check it by [method] from now on.”',
    ],
    proof: [
      '“I built [what] to solve [problem]. The result was [fact]. Here is the link.”',
      '“On this project my part was [role], and the team result was [result].”',
      '“Would you be willing to speak about my work if a recruiter asks?”',
    ],
  },

  stagePlan: {
    student: [
      'This week, pick your best project and write five lines on it: the problem, your steps, the tools, the result and what you would improve.',
      'Put the project behind one link that opens on a phone, and check that the file names are clear.',
      'In your next group task, write each person’s part and date in the chat, and send a three-line handover when you finish your part.',
      'Rewrite three resume lines to name an action and a true result, and ask one teacher if they would speak about your work.',
    ],
    fresher: [
      'When a task is given, ask how it will be judged and when it is due, and say it back in one line.',
      'Send a short update before anyone asks, and use one file name pattern for everything you share.',
      'After your third task, ask for one thing to do differently, and change it within a week.',
      'Every Friday, write one line in your work log with what you finished and the result, and use it to update your resume each month.',
    ],
    professional: [
      'List two results from your work that you are allowed to share, each with what you did, for whom and what changed.',
      'Find one repeating task and build a template or formula for it, then note the time saved.',
      'Choose the tool or process most used in the role you want next and finish one small real task with it.',
      'Ask a manager or colleague who has seen your work if they would speak about it, and send them a short summary of what you want to be known for.',
    ],
  },

  talk: {
    habits: {
      q: 'Describe a deadline you nearly missed and how you handled it.',
      a: 'Describe the task and the date, when you noticed the problem, whom you told and what you offered. End with what changed in your habits afterwards.',
      line: 'Delivered [task] by [date] and warned [person] on [day] when [problem] came up, which allowed [result].',
    },
    digital: {
      q: 'Which tools do you use for your work, and how well do you know them?',
      a: 'Name two or three tools and give one real thing you did with each, such as a sheet with a filter and chart or a template you built. Be honest about what you are still learning.',
      line: 'Used [tool] to [task], which saved [time or effort] or produced [result].',
    },
    team: {
      q: 'Tell me about a time you worked with others on a task, and what you did when you were stuck or disagreed.',
      a: 'State your part and the team goal, how you asked for help or raised the disagreement, and what the team delivered. Mention what you would do again.',
      line: 'Took ownership of [part] in a team of [number], asked for help on [problem] by [action], and the team delivered [result].',
    },
    learn: {
      q: 'Tell me about something you learnt quickly, and a mistake that taught you something.',
      a: 'Describe how you learnt, such as a tutorial, a small task or asking a specific question, and what you produced. For the mistake, say what went wrong and what you changed.',
      line: 'Learned [tool or skill] in [time] to complete [task], and changed [habit] after a mistake in [thing].',
    },
    proof: {
      q: 'Is there a piece of your work I can look at?',
      a: 'Pick one piece, say what the problem was, what you did, which tools you used and what the result was. Share the link, and say what you would improve.',
      line: 'Built [what] for [who] using [tools], which resulted in [fact]. Link: [link].',
    },
  },

  talkTitles: {
    strong: 'Turn this strength into an interview answer and a resume line',
    weak: 'How to talk about the area you are building',
    intro:
      'Employers trust examples more than adjectives. Prepare one true story for your strongest area and one honest answer for your lowest, with what you are doing about it.',
    mode: 'interview',
  },
};
