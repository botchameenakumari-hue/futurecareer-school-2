// Skill Gap Assessment: a bundle for the shared self-rating test page.
// It compares the skills you have with the skills a chosen target path asks for.
// General guidance only: no statistics, norms, pay figures or outcome claims.
import type { SkillTestBundle } from './types';
import { x, sa, o, sc } from './types';

const BASE = '/services/assessments/skill-gap-assessment/';

export const bundle: SkillTestBundle = {
  test: {
    id: 'skill-gap-assessment',
    slug: 'skill-gap-assessment',
    pageUrl: BASE,
    breadcrumbName: 'Skill Gap Assessment',
    metaTitle: 'Skill Gap Assessment | Free Career Skills Test for India',
    metaDescription:
      'Free skill gap assessment and career skills test. Compare your skills with a target role on skill depth, tools, proof, communication and market awareness.',
    h1Lead: 'Skill Gap',
    h1Accent: 'Assessment',
    eyebrow: 'A career skills test for students, freshers and career changers in India',
    heroSub:
      'This free skill gap assessment compares the skills you have today with the skills your target role asks for. You pick a target path first, such as tech, business, creative, government or healthcare support, then rate yourself on how well you can do the work, which tools you have used, what you can show, how you explain it and how well you know the market. Your report names the gap to close first and gives a 14-day routine for it.',
    stats: [
      { value: '41', label: 'questions' },
      { value: '5', label: 'gap areas' },
      { value: 'Free', label: 'PDF report' },
    ],
    main: 'picker',
    mainChecks: [
      'Five skill gap areas scored from your own ratings',
      'About 8 minutes, no sign-up',
      'Advice for the target path you choose, with a 14-day routine',
    ],
    reportTitle: 'Skill Gap Report',
    reportFile: 'future-career-school-skill-gap-report.pdf',
    reportKicker: 'SKILL GAP REPORT',
    resultKicker: 'Your skill gap result',
    scoreLabel: 'Overall match with your target role',
    bands: {
      high: 'Close to what the role asks for.',
      mid: 'Partly there, with a clear gap to close.',
      low: 'The biggest gap, so start here.',
    },
    domainsHeading: 'Five areas where a skill gap shows up',
    domainsIntro:
      'A gap is rarely one missing course. For most people it sits in one of five places: how deep the skill is, whether you have used the tools, whether you can show the work, whether you can explain it, or whether you know what the market asks for. Your lowest area is the best place to start.',
    domains: [
      {
        key: 'core',
        name: 'Core skill depth',
        short: 'Doing the main tasks of the role, not only knowing about them',
        strong: 'You have a written list of what the role asks for, you can do the basic tasks alone and you know which skills sit furthest below the level asked.',
        weak: 'You have studied or watched a lot, but you cannot yet do the main tasks without a tutorial, or you have never listed what the role actually asks for.',
        plan: [
          'Copy the skills that repeat in three current listings for your target role into a table, and mark each one can do alone, can do with help, or not yet.',
          'Pick one basic task from the role and do it from start to finish with no tutorial open. Write down every point where you got stuck.',
          'Choose the biggest gap among the skills that appear in most listings and set a two-week output for it, such as a finished sheet, page, piece or practice paper.',
        ],
      },
      {
        key: 'tools',
        name: 'Tools and software',
        short: 'Using the programs, platforms or equipment the role names',
        strong: 'You know which tools the listings name, you have used the main one on a real task and you can pick up a similar tool without starting from zero.',
        weak: 'You know only the tool taught in class, or you have seen tools demonstrated but never used them to finish a real job.',
        plan: [
          'Underline every tool or piece of equipment named in your three listings and rank them by how often they appear.',
          'Find the free, student or trial version of the top tool and finish one small real job with it this week.',
          'Redo one old task in a second tool of the same kind, and write what carried over and what did not.',
        ],
      },
      {
        key: 'proof',
        name: 'Proof that matches the role',
        short: 'Work you can show for the skills the role actually asks for',
        strong: 'You have at least one piece of work for each of your top skills, it opens in a minute on a phone and someone in the field has told you what is missing.',
        weak: 'Your resume names skills that you cannot back with anything to open, show or point to, or your work shows what you enjoy more than what the role asks for.',
        plan: [
          'Put your skill table beside your folder of work. Mark every skill that has no matching piece as a proof gap.',
          'Make one small piece for the proof gap that appears in most listings, and write three lines on the task, your part and the result.',
          'Send it to one person who works in the field and ask what is missing for an entry-level role.',
        ],
      },
      {
        key: 'comms',
        name: 'Explaining your skills',
        short: 'Saying what you can do, what you did and what you are still learning',
        strong: 'You can describe your skills with an example, explain a task to someone outside the field and ask a senior for help in a specific way.',
        weak: 'You describe yourself with general words, list skills without saying what you did with them, or hold back from asking people in the field for advice.',
        plan: [
          'Write two sentences on what you can do for the role, with one example, and cut words such as hardworking or passionate.',
          'Explain one task from your field to a family member in four sentences, and ask them to say it back to you.',
          'Send one short, specific message to a person in your target field: who you are, the role you aim for, one question and a link to your work.',
        ],
      },
      {
        key: 'market',
        name: 'Market awareness',
        short: 'Knowing what the role asks for now, who pays and how the route can grow',
        strong: 'You check current listings, you know who pays for the skill and how they find people, and you have thought about how the route can grow beyond one pay scale.',
        weak: 'You pick skills because they are popular online or among friends, and you have not checked what employers, clients or recruiters ask for now.',
        plan: [
          'Read ten current listings or notifications for your target role and tally the skills that appear most.',
          'Write one line on who pays for this skill, how they find people and what makes them trust one person over another.',
          'Note whether the route is Scalable, Scalable with a business layer or Not so scalable, and write one step that could grow it, such as a side skill, a service or a product.',
        ],
      },
    ],
    questions: [
      { d: 'core', text: 'For each main skill my target role asks for, I have marked honestly whether I can do it alone, with help, or not yet.' },
      { d: 'tools', text: 'I know which tools, programs or equipment are named most often in listings for my target role.' },
      { d: 'proof', text: 'For each of my top three skills, I have one piece of work that shows it.' },
      { d: 'comms', text: 'I can describe what I can do for my target role in two plain sentences, with one example.' },
      { d: 'market', text: 'In the last three months I have read current listings or notifications to see which skills my target role asks for.' },
      { d: 'core', text: 'I can finish a basic task of my target role without following a tutorial step by step.' },
      { d: 'tools', text: 'I have used the main tool of my target role to finish a real job, not only watched someone else use it.' },
      { d: 'proof', text: 'I can open my best work on my phone in under a minute and send a link to someone.' },
      { d: 'comms', text: 'I can explain a task from my target field to a person outside it so they understand what the result looks like.' },
      { d: 'market', text: 'I know who pays for the skill I am building and how they usually find the people they pay.' },
      { d: 'core', text: 'I can explain why I choose one method over another in my main skill, not only how to do it.' },
      { d: 'tools', text: 'I could pick up a second tool of the same kind as the one I know, such as another spreadsheet or design program, without starting from zero.' },
      { d: 'proof', text: 'My work shows the skills that the listings ask for, not only the things I enjoy making.' },
      { d: 'comms', text: 'I can write three lines about a piece of my work: the task, what I did and what came out of it.' },
      { d: 'market', text: 'I know at least one way my target route can grow beyond a single employer or a fixed pay scale.' },
      { d: 'core', text: 'I know which one or two skills on my list are furthest below the level the role asks for.' },
      { d: 'tools', text: 'I know a free or low-cost way to practise each main tool on my list.' },
      { d: 'proof', text: 'Someone who works in my target field has looked at my work and told me what is missing.' },
      { d: 'comms', text: 'When I ask a senior for help, I say what I tried, where I am stuck and what I need.' },
      { d: 'market', text: 'I know which tasks of my target role AI tools can already speed up, and which parts still need a person’s judgement.' },
      { d: 'core', text: 'I have finished many courses on my list but I rarely do the work without a tutorial open.', reverse: true },
      { d: 'tools', text: 'I only know the tool I was taught in class and I have not tried the ones employers name.', reverse: true },
      { d: 'proof', text: 'If someone asks me for an example of a skill I claim, I need a long time to think of one.', reverse: true },
      { d: 'comms', text: 'In conversations about work I list my skills but cannot say what I did with them.', reverse: true },
      { d: 'market', text: 'I choose which skill to learn mainly because it is popular online or my friends are learning it.', reverse: true },
    ],
    readingTitle: 'How to read your skill gap result',
    readingSections: [
      {
        title: 'A gap is a list you can shrink, not a grade',
        body: [
          'Each statement describes something you can do or show today. A low area means a habit or piece of evidence you have not built yet, not a lack of ability and not a wrong choice of career.',
          'The scores compare your own five areas with each other. They are not marks out of a pass level and they are not compared with other people.',
        ],
      },
      {
        title: 'The result is only as useful as the target you pick',
        body: [
          'A skill gap exists only against a particular role. If you rated yourself against a path you are not sure about, the report may show gaps for a role you do not want.',
          'If your target is unclear, take a career test first to narrow the direction, then come back and measure the gap for one role at a time.',
        ],
      },
      {
        title: 'Scalable, needs a business layer, or not so scalable',
        body: [
          'Closing a skill gap helps you get into a role. How far your income and reach can grow after that depends on the route, which is why this site marks routes Scalable, Scalable with a business layer or Not so scalable.',
          'The label describes how growth works, not how good a route is or what you will earn. Your report shows what to add for the path you chose, such as proof of work, a side skill or a small service, and none of it promises pay or a job.',
        ],
      },
      {
        title: 'Check the result against real listings',
        body: [
          'Your answers show how you see yourself today. Read ten current listings or official notifications for your target role and see whether the skills you marked as strong are the ones they ask for.',
          'Retake the assessment after four weeks of working on your lowest area. A small rise in that area, backed by a new piece of work, is better proof than a higher score alone.',
        ],
      },
    ],
    limits: [
      'This is a self-rating tool and shows how you describe your own skills. It does not test your skills, so it cannot replace a real task, a trainer’s feedback or a hiring test.',
      'It is not a certificate, an official assessment or a recognised qualification, and employers, institutes and exam bodies do not use it.',
      'Scores come only from your answers and are not compared with other people, so there is no pass mark and no ideal number.',
      'It does not predict whether you will get a job, an interview, an admission or any level of pay. Scalable, Scalable with a business layer and Not so scalable describe how growth tends to work on a route, not what you will earn.',
      'It is not a medical or mental health assessment. For healthcare support roles, rules on training, registration and practice differ by role and state, so check them with the official body.',
    ],
    faqs: [
      {
        q: 'What is a skill gap assessment?',
        a: 'A skill gap assessment compares the skills you have now with the skills a target role asks for, so you can see which gap to close first. This one is a free self-rating: you pick a target path, rate yourself in five areas and get a score for each.',
      },
      {
        q: 'Is this a career skills test, and does it check my skills?',
        a: 'It is a career skills assessment that you answer yourself, so it does not test your skills with tasks or marks. It shows how you rate your own depth, tools, proof, communication and market awareness for the path you chose. Use it to plan practice, and check your real level with a task, a mock test or feedback from someone in the field.',
      },
      {
        q: 'Is this a skills test to determine which career I should choose?',
        a: 'No test can decide a career for you, and this one does not try. It assumes you already have a target path and measures the distance to it. If you are still choosing, take a career test or aptitude test first, then return here once you have one role in mind.',
      },
      {
        q: 'How is the score worked out?',
        a: 'Statements are rated from 1 to 5, and the ones worded in the negative are reversed. In the situation questions, each option carries a score from 0 to 100. Each area score is the average of its statements and situations, and the overall score is the average of the five areas.',
      },
      {
        q: 'What is a good score on this career skills assessment test?',
        a: 'There is no pass mark. A lower area is the place where one change will help most, such as finishing one piece of proof or trying the main tool on a real task. Retake the test after a few weeks to see whether that area moved.',
      },
      {
        q: 'How is this different from the career readiness and skill portfolio pages?',
        a: 'The career readiness assessment looks at your overall readiness for work, including direction and search habits. The skill portfolio tracker helps you record dated proof once you are building it. This assessment sits between them: it measures the distance between your skills and one chosen role.',
      },
      {
        q: 'Why do I choose a target path before the questions?',
        a: 'The skills asked for differ by path. A tech role asks for projects that run, a creative role for a portfolio, a government route for exam accuracy and a healthcare support role for supervised practice and registration. Your path changes the extra questions and the advice you get.',
      },
      {
        q: 'Does the result tell me which paths are Scalable?',
        a: 'Your report marks your chosen path as Scalable, Scalable with a business layer or Not so scalable, using the same rating as the rest of this site. A Not so scalable path can still be right for you, and the report then suggests a second route or a side skill. The rating describes how growth tends to work and does not promise income.',
      },
      {
        q: 'Is the skill gap assessment free, and can I use it as a fresher or career changer?',
        a: 'Yes. It is free, needs no sign-up and gives an instant result with a PDF report. Students choose the path they are studying towards, freshers choose the role they are applying for and career changers choose the path they want to move into.',
      },
    ],
    related: [
      {
        href: '/services/assessments/career-readiness-self-assessment/',
        title: 'Career Readiness Self-Assessment',
        description: 'A wider check of direction, skills, proof, people and job search habits.',
      },
      {
        href: '/services/assessments/skill-portfolio-tracker/',
        title: 'Skill Portfolio Tracker',
        description: 'Record dated proof and small projects as you close the gaps you find here.',
      },
      {
        href: '/career-skills-compass/',
        title: 'Career and Skills Compass',
        description: 'Explore careers and the skills each one asks for before you pick a target.',
      },
      {
        href: '/services/assessments/career-test/',
        title: 'Career Test',
        description: 'Still choosing a path? Start with a test that narrows the direction.',
      },
      {
        href: '/blog/skills/how-to-find-which-skills-are-in-demand-in-india/',
        title: 'How to Find Which Skills Are in Demand in India',
        description: 'A practical way to read listings and see what employers ask for.',
      },
      {
        href: '/career-resources/creating-a-portfolio-without-work-experience/',
        title: 'Creating a Portfolio Without Work Experience',
        description: 'Ways to build proof of skill when you have no job history yet.',
      },
      {
        href: '/blog/skills/how-to-assess-your-own-skills-for-a-career-free-india/',
        title: 'How to Assess Your Own Skills for a Career',
        description: 'More ways to rate your skills honestly, with free tools.',
      },
    ],
    breadcrumbDescription: 'Free skill gap assessment with five area scores for your target role and a 14-day routine.',
    webAppDescription:
      'A free original 41-question skill gap assessment and career skills test for students, freshers and career changers in India. You choose a target path, then rate core skill depth, tools, proof of work, communication and market awareness, and get five scores, path-based advice, a 14-day routine and a downloadable report.',
    indexDescription:
      'Free skill gap assessment: 41 questions compare your skills with a target role on depth, tools, proof, communication and market awareness.',
    indexNote: 'Free, about 8 minutes, PDF report',
  },

  depth: {
    stageHeading: 'Which target path are you comparing yourself with?',
    stageNote:
      'A skill gap only exists against a target. Choose the path you are studying towards, applying for or planning to move into, and your questions and advice will change to fit it.',
    stages: [
      {
        key: 'tech',
        label: 'Tech and digital work',
        description: 'Software, data, cloud, cybersecurity, AI tools, web and similar roles',
        title: 'Close the gap with small projects that run',
        body: 'Tech and digital roles are rated Scalable on this site, because skills and finished products can reach many people without trading hours one for one. Entry roles are crowded, so the gap that usually matters most is proof of work and tool practice, not one more course. The rating does not promise a job or income.',
        actions: [
          'Copy the skills and tools that repeat in three current listings and build the smallest version of one task they name, with no tutorial open.',
          'Put each finished project where a stranger can open it, with a three-line note on the problem, your part and the result.',
          'Pick one adjacent skill that adds value to the main one, such as data with web work or automation with analysis, and set a two-week output for it.',
        ],
      },
      {
        key: 'business',
        label: 'Business, sales and operations',
        description: 'Sales, marketing, finance, accounts, HR, operations, customer success and management roles',
        title: 'Add one skill you can show, then plan the business layer',
        body: 'These routes are usually rated Scalable with a business layer: a job is the way in, and consulting, an agency or your own venture is the layer that can grow income. A general degree alone is crowded, so the gap to close is a specific skill with proof, such as a sales record, a campaign plan or a simple financial model. Bank and similar exam-based jobs sit closer to the government path.',
        actions: [
          'Choose one task from a listing, such as a monthly sales summary, a lead follow-up list or a basic budget, and do it on practice data.',
          'Learn the basic sales step for your route: who pays, how they find you, what makes them trust you and how you follow up.',
          'Keep a sample report, pitch or plan in one folder and ask someone in the role to point out what a real business would change.',
        ],
      },
      {
        key: 'creative',
        label: 'Creative and media work',
        description: 'Design, video, writing, content, photography, animation and UX',
        title: 'Show finished work for the kind of client you want',
        body: 'Creative and media work is rated Scalable when you own a portfolio and a way to reach people who pay. It is also crowded, so a clear niche and finished pieces matter more than the number of tools you know. First paid work often comes from people who have already seen something you made.',
        actions: [
          'Choose a niche for the next two months and make three to five finished pieces for it, each with a short brief and a result.',
          'Time yourself on one piece with a fixed deadline and note which step takes the longest, since clients pay for finished work on time.',
          'Show the pieces to one person who hires or buys this work and ask what would make them contact you.',
        ],
      },
      {
        key: 'government',
        label: 'Government and exam-based jobs',
        description: 'Central, state, bank, railway, defence and other exam-based recruitment',
        title: 'Prepare for the exam and keep a second route alive',
        body: 'These routes are rated Not so scalable on this site, because growth is set by seats, rank and pay scales, and many people compete for few posts. That does not make them a poor choice for someone who values stability. It does mean your gap list should include a second route or a side skill, so one result is never your only path.',
        actions: [
          'Solve one previous-year paper under exam timing and list every topic where you lost marks.',
          'Read the official notification for each exam you target and write the vacancies, age limit, pattern and last date in one sheet.',
          'Pick one side skill, such as typing speed, computer basics, a language or a spreadsheet, and practise it for 30 minutes a day beside your exam study.',
        ],
      },
      {
        key: 'healthcare',
        label: 'Healthcare support',
        description: 'Lab technician, physiotherapy or nursing support, pharmacy, radiology and records roles',
        title: 'Match the training, practice and registration the role needs',
        body: 'Healthcare support roles are usually rated Scalable with a business layer, because some of them can grow into a lab, clinic or training service where the rules of your state allow it. The gap here is often recognised training, supervised practice and registration, as much as skill. Check each rule with the official body for your role and state before you plan.',
        actions: [
          'Write the steps of one core procedure from memory and ask your trainer to check them and watch you do it.',
          'Find out whether your target role needs a recognised course, registration or a licence in your state, and note the official source.',
          'Keep a record of supervised practice, training hours and certificates in one folder so a lab or hospital can check them.',
        ],
      },
    ],
    tips: [
      'Open three current listings for your target role and copy the skills that repeat into a table. Mark each one can do alone, can do with help, or not yet, and be strict with yourself.',
      'In the same three listings, underline every tool, program or piece of equipment by name. The ones that appear in two or more listings go to the top of your practice list.',
      'Pick your top three skills from the table and find one thing you made that shows each. Where nothing exists, a small task of two or three hours is enough to start.',
      'Write two sentences on what you can do for the role and one example that shows it. Cut vague words such as hardworking or passionate and name the task instead.',
      'Spend 30 minutes this week reading ten current listings or notifications for your target role. Write down the five skills or tools that come up most and anything that looks new.',
      'Choose one basic task of the role and do it from start to finish with no tutorial open. Write down each point where you got stuck, because those points are your real gaps.',
      'Use the main tool of your target role to finish one small real job, such as a sheet for a family shop, a poster for a club or a short report. Watching videos does not show you where a tool is hard.',
      'Put your best pieces in one folder or page, then open it on your phone and time yourself. If it takes over a minute or needs a login, fix the sharing settings today.',
      'Take one task from your target field and explain it in four sentences to a family member who does not do that work. Say why it matters and what the finished result looks like.',
      'Write one line on who pays for your skill: an employer, a client, patients, customers or the government. Then write how they usually find the people they pay.',
      'After you finish a task, write one sentence on why you used that method and not another. If you cannot, look up one alternative method and compare the two.',
      'Try a second tool of the same kind as the one you know, such as another spreadsheet, design or analysis program, and redo one old task in it. Note what carried over and what did not.',
      'Put your folder of work beside the skill table from the listings. Any skill with no matching piece is a proof gap, so start with the one that appears in the most listings.',
      'For your last piece of work, write three lines: the task, what you did and what came out of it. Use only facts you can back up, and skip anything that sounds bigger than it was.',
      'Write whether your route pays through a fixed pay scale, a salary that rises with skill, or work you can sell directly. Then note one thing that could grow it, such as a side skill or a small service.',
      'Sort your skill table by gap size and circle the two largest gaps among the skills that appear in most listings. Those two get your practice hours first, ahead of skills you enjoy.',
      'For each tool on your list, search for its free plan, student plan or trial and note it down. Start with the free version today and do one small task a day for a week.',
      'Send one piece of work to one person in the field and ask a narrow question, such as what is missing for an entry-level role. Thank them and tell them what you changed afterwards.',
      'Next time you ask a senior for help, write what you tried, where you are stuck and what you want in three lines. Specific questions get answered more often than general ones.',
      'List the main tasks of your target role and mark which ones an AI tool can already draft or speed up. Practise using the tool on those, and keep your own time for checking and decisions.',
      'Pick the last course you finished and do one small task from it with the video closed. Note which steps you could not do from memory and practise only those.',
      'Compare the tools in your listings with the tool you were taught. If they differ, give two weeks of short daily practice to the listed tool, using a task you already know how to do.',
      'Write three examples now, one for each main skill: the task, what you did and the result. Keep them on your phone so you can answer when someone asks.',
      'Take a resume line such as “skilled in X” and add what you did with X, for whom and what happened. If you cannot add anything, the skill is a proof gap, not a wording problem.',
      'Before you start a new skill, check three current listings and ask one person in the field whether it is asked for. If it is not, write down why you still want it.',
    ],
    tipsUp: [
      'Ask a senior or mentor in the field to look at your marks and move any that look too generous or too harsh. Update the table on the first day of every month.',
      'Next to each tool, write whether you used it on a real task, only in class or never. Choose one tool from the last two groups and plan its first practice task this week.',
      'For each piece, add a note on the task, what you did and what came out of it. Replace your weakest piece with a better one within a month.',
      'Say your two sentences aloud to a friend and ask whether they could repeat what you can do. Rewrite the line until they can, then place it at the top of your profile.',
      'Repeat the listing check on the first Sunday of each month and keep the tally in one sheet. Note which skills rise or drop away and change your practice list to match.',
      'Repeat the same task a week later and time it. Then try a slightly harder version and note what you still had to look up.',
      'Do a second job with the same tool on a different kind of task and note which shortcuts or settings you now know. Show the result to someone who uses the tool every day.',
      'Send the link to two people and ask whether it opened without trouble and which piece they looked at first. Move that piece to the top.',
      'Ask your listener to explain the task back to you. Fix any part they got wrong, then try again with someone else.',
      'Talk to one person who is paid for the skill and ask how their last job or client came to them. Add their answer to your line.',
      'Explain your reason to a senior or mentor and ask when they would choose the other method. Keep a short note of those cases for later tasks.',
      'List the five features you use most in your main tool and find the same features in the second one. Redo a second task completely in the new tool.',
      'Ask someone who hires or works in the field which two skills they would look for first in your folder, and see whether your list matches theirs.',
      'Shorten each note to one line for your resume and keep the three-line version for interviews and messages. Update both after every new piece of work.',
      'Find two people on the route who earn beyond one employer and ask what they added to get there. Note which business layer your path needs, such as consulting, a studio or a practice.',
      'Set a small test for each of the two gaps, such as a task you must finish in a fixed time. Re-rate yourself after the test, not before it.',
      'Join one free community or forum for your main tool and answer or ask one question a week. You learn faster where people use the tool every day.',
      'Collect feedback from three people and look for the point that repeats. Fix that point first and send the updated piece back to the first person.',
      'After each reply, send a short note on what you did with the advice. People help again when they see that the last help was used.',
      'For one task, compare your own result with an AI-assisted result and write down what the tool got wrong. Use the note to decide where your own judgement is the skill that counts.',
      'Cut your tutorial time by a third for the next two weeks and use the freed hours to make something. Count the tasks you now finish without help.',
      'Keep the class tool for exams and basic ideas, and track your weekly hours on the listed tool. Try to raise the hours a little each week.',
      'Say each example aloud twice, once in under thirty seconds and once in a minute. Ask a friend which version was clearer and keep that one.',
      'Rewrite three skill lines in the form skill, task, result. Ask a senior to pick the line they find most believable and copy its style for the rest.',
      'Make a rule: no new skill until it shows up in several listings or a person working in the field says it matters. Review the rule after a month.',
    ],
    strongTip:
      'This is already close to what the role asks for. Write down one recent example with a date, so you can use it in an interview or on your resume.',
    domains: {
      core: {
        why: 'A role is a bundle of tasks, and employers hire people who can do them. Knowing a topic and doing the task are different things, and the distance between them is usually where your biggest gap hides.',
        roles: [
          'Technical and digital roles where you build, analyse or fix things, such as software, data, cloud or security work',
          'Creative, technical and digital roles where finished work counts more than the name of a course',
          'Healthcare support roles such as lab technician, physiotherapy assistant or nursing support, where correct and safe practice matters most (Scalable with a business layer)',
        ],
        routine: [
          'Days 1 to 3: Copy the repeating skills from three listings into a table and mark each can do alone, can do with help, or not yet.',
          'Days 4 to 7: Do one basic task of the role with no tutorial open and write down each point where you stopped.',
          'Days 8 to 11: Practise only the stuck points, using a small task each day, and note how long each one now takes.',
          'Days 12 to 14: Finish one complete task from the role, then rate yourself again and compare with day 1.',
        ],
        mistakes: [
          'Counting finished courses as skill, without doing the task once with the video closed',
          'Rating every skill on the list as can do with help, so nothing stands out as the gap',
          'Practising the skills you enjoy and leaving the largest gap for later',
        ],
        proof: [
          'A skill table with dated ratings and one note on what changed each month',
          'A task you finished alone, with a note on where you got stuck and how you solved it',
          'A before and after of the same task, showing the time it took and what improved',
        ],
        askOthers: 'If I wanted to do this role next year, which two skills from my list would you want to see me do well first, and how would you check them?',
        talkingPoints: [
          'You know which skills the role asks for and where you stand on each',
          'You can describe a task you finished alone and the point where you were stuck',
          'You have a plan for the largest gap, with a date',
        ],
        midStep: 'Take your largest gap and set one output for it that must be finished in two weeks, such as a working sheet, a short piece or a timed practice paper.',
      },
      tools: {
        why: 'Listings name tools because teams need people who can start working with them quickly. You do not need every tool, but you do need to have finished a real job with the main one, so the first week at work is not spent finding the menu.',
        roles: [
          'Technical and digital roles that name specific software, platforms or languages in the listing',
          'Business, sales and operations roles that use spreadsheets, accounting software or a customer record system (Scalable with a business layer)',
          'Freelance and small-business work where you choose your own tools and clients judge the finished job',
        ],
        routine: [
          'Days 1 to 3: List every tool in three listings and mark which ones you have used on a real job, only in class or never.',
          'Days 4 to 7: Finish one small real job with the top tool, using a free or student version.',
          'Days 8 to 11: Redo an old task in a second tool of the same kind and write down what carried over.',
          'Days 12 to 14: Join one free community for the tool and ask or answer one question.',
        ],
        mistakes: [
          'Trying five tools at once and finishing a job in none of them',
          'Paying for a course before checking that a free version lets you practise',
          'Assuming the tool you learned in class is the one the employer uses',
        ],
        proof: [
          'A finished job made in the main tool, with the file or a screenshot and a note on what you did',
          'A short list showing how you used each named tool: real job, practice task or class only',
          'A task redone in a second tool, with a note on what carried over',
        ],
        askOthers: 'Which tool do you use most in this role, and what is the first job in it that you would give a new person?',
        talkingPoints: [
          'You know which tools the role names and how often',
          'You have finished a real job with the main tool',
          'You can say how you would learn a new tool of the same kind',
        ],
        midStep: 'Choose the one tool you have only seen in class and finish a small job with it within a week, then add that job to your folder.',
      },
      proof: {
        why: 'People who hire cannot see your skill, so they look at what you can show. Proof that matches the listing works better than a large folder of work that shows something else.',
        roles: [
          'Creative, technical and digital roles where a sample or portfolio is often the first thing asked for',
          'Freelance and small-business work where clients judge you on jobs you have already done',
          'Government and exam-based routes, where your mock test record and previous-year practice are your own evidence of progress',
        ],
        routine: [
          'Days 1 to 3: Place your folder of work beside the skill table and mark every skill that has no matching piece.',
          'Days 4 to 8: Make one small piece for the proof gap that appears in most listings.',
          'Days 9 to 11: Write three lines for it: the task, what you did and what came out of it.',
          'Days 12 to 14: Send it to one person in the field and ask what is missing for an entry-level role.',
        ],
        mistakes: [
          'Showing everything you have made instead of the pieces that match the listing',
          'Putting work in a place that needs a login or takes minutes to open',
          'Claiming a skill on your resume that you cannot show a single example of',
        ],
        proof: [
          'A page or folder that opens in a minute on a phone, with your best pieces first',
          'A three-line note for each piece: the task, your part and the result',
          'A line of feedback from someone who works in the field, with their permission to quote it',
        ],
        askOthers: 'If you looked through my work for this role, what is the first thing you would expect to see that is not there?',
        talkingPoints: [
          'You have a piece of work for each of your main skills',
          'You can open your work quickly and explain your own part in it',
          'You asked someone in the field what was missing and acted on it',
        ],
        midStep: 'Replace your weakest piece with a new one that matches a skill from the listings, and ask one person in the field to look at it.',
      },
      comms: {
        why: 'Skill that cannot be explained is hard to hire, buy or trust. Being able to say what you did, for whom and with what result turns a list of skills into something another person can believe.',
        roles: [
          'Business, sales and operations roles where you explain ideas, prices, plans and results to others (Scalable with a business layer)',
          'Healthcare support roles where calm, plain explanations to patients and families are part of the job (Scalable with a business layer)',
          'Freelance and small-business work where the way you explain your offer decides whether people trust you',
        ],
        routine: [
          'Days 1 to 3: Write two sentences on what you can do for the role, with one example, and remove vague words.',
          'Days 4 to 7: Explain one task to a family member in four sentences and ask them to say it back.',
          'Days 8 to 11: Write the task, your part and the result for each of your top three pieces of work.',
          'Days 12 to 14: Send one short, specific message to a person in the field and note whether they replied.',
        ],
        mistakes: [
          'Describing yourself with general words such as hardworking, quick learner or passionate',
          'Listing skills without saying what you did with them',
          'Asking a senior to guide you without saying what you have tried or what you need',
        ],
        proof: [
          'A two-sentence description of what you can do, with an example, on your profile or resume',
          'Three-line notes on your best pieces of work',
          'A message to a person in the field that got a reply, with what you learned from it',
        ],
        askOthers: 'When you hear people describe their skills for this role, which description makes you believe them, and which one does not?',
        talkingPoints: [
          'You describe your skills with an example and a result',
          'You can explain a task to someone outside the field',
          'You ask for help in a specific way and report what you did with it',
        ],
        midStep: 'Rewrite three lines on your resume or profile from a skill name to skill, task and result, and ask a senior which line they find most believable.',
      },
      market: {
        why: 'Skills are worth what someone will pay for them. Checking what listings ask for, who pays and how the route can grow stops you from spending months on a skill the market is not asking for, or from picking a route with no way to grow.',
        roles: [
          'Freelance and small-business work where you need to know who pays and how they hear about you',
          'Business, sales and operations roles that can grow into consulting, an agency or your own venture with a business layer (Scalable with a business layer)',
          'Exam notifications and vacancy lists as a way to read demand for government routes, which are rated Not so scalable on this site',
        ],
        routine: [
          'Days 1 to 3: Read ten current listings or notifications and tally the skills and tools that appear most.',
          'Days 4 to 7: Write who pays for your skill, how they find people and what makes them trust one person over another.',
          'Days 8 to 11: Note whether your route is Scalable, Scalable with a business layer or Not so scalable, and write one growth step.',
          'Days 12 to 14: Ask one person in the field how their last job or client came to them and add it to your notes.',
        ],
        mistakes: [
          'Choosing skills because a video says they are in demand, without checking a single listing',
          'Reading only one source of listings, such as one portal or one group chat',
          'Planning only for the job and never for how income or reach could grow later',
        ],
        proof: [
          'A tally of skills from ten listings with the date you checked',
          'A one-line note on who pays for your skill and how they find people',
          'A growth step you tried, such as a small service, a side skill or a sample for a real client, with what you learned',
        ],
        askOthers: 'What has changed in what this role asks for over the last two years, and what would you learn now if you were starting?',
        talkingPoints: [
          'You check listings or notifications regularly',
          'You know who pays for the skill and how they find people',
          'You know how your route can grow, and what extra step it needs',
        ],
        midStep: 'Add one growth step to your plan this month, such as a side skill or a small service for one real person, and write what you learned from it.',
      },
    },
    thirtyDay: [
      'Week 1: Build the skill table from three listings, mark each skill can do alone, with help or not yet, and choose your lowest area from the result.',
      'Week 2: Follow the 14-day routine for that area and finish one small output, such as a task, a piece of work or a tally of listings.',
      'Week 3: Show the output to one person in the field and write down what they said is missing.',
      'Week 4: Retake the assessment, compare the area scores and your skill table, and choose the next gap to close.',
    ],
  },

  extras: [
    // Tech and digital
    { ...x(['tech'], 'core', 'I can build the core of a small task from a blank start, such as a short script, a query, a sheet model or a simple page.', 'Choose a task from a listing and build it from a blank file with no tutorial open. Write down the first place you got stuck and look up only that.'), up: 'Rebuild the same task two weeks later and time it. Add one feature that was not in the first version and note what you had to search for.' },
    { ...x(['tech'], 'tools', 'I save my work in a shared folder, a notes system or a code repository so another person can open and review it.', 'Create one place where your projects live, such as a repository or a shared drive folder, and move your best work there with a short description for each.'), up: 'Ask a friend in tech to open the folder cold and tell you what they could not understand. Fix the first thing they mention.' },
    { ...x(['tech'], 'proof', 'I have one finished project with a link that someone else can open and use.', 'Take your best practice project and finish it to a stage where a stranger can open it, with a short note on the problem it solves.'), up: 'Send the link to three people, ask each to try one task on it and note where they got confused. Fix one issue and share the new version.' },
    { ...x(['tech'], 'comms', 'When I describe a technical project, I mostly list the tools I used and skip the problem it solved.', 'Write your project description as problem, what you built and result, and put the tools last. A hiring person wants to know what changed, not only what you typed.', true), up: 'Say the description aloud to a friend outside tech and ask whether they understood why the project mattered. Rewrite until they can say it back.' },
    { ...x(['tech'], 'market', 'I have compared the skill lists of at least two tech roles, such as data analyst and web developer, before choosing what to learn.', 'Open five listings each for two roles and tally the repeating skills. The overlap shows what to learn first, and the difference shows how the roles split.'), up: 'Talk to one person in each role and ask what the first six months look like. Choose the role where you could finish a real project soonest.' },
    // Business, sales and operations
    { ...x(['business'], 'core', 'I can do a basic calculation or analysis for a business question, such as margin, a monthly sales summary or a simple budget, in a spreadsheet.', 'Take a small set of practice figures and work out margin, a monthly summary or a budget, with every formula written by you. Check one number by hand.'), up: 'Ask someone who works in sales, accounts or operations to read your sheet and point to the number they would check first. Fix it and keep the corrected file.' },
    { ...x(['business'], 'tools', 'I have used a spreadsheet, accounting software or a customer record system on a real or practice task, not only seen it in class.', 'Set up a free spreadsheet or a free plan of a customer record tool and enter a week of real or practice data, such as a family shop’s sales or a club’s contacts.'), up: 'Build one summary from that data, such as sales by day or leads by status, and show it to the person whose data it was. Note what they wanted that you did not include.' },
    { ...x(['business'], 'proof', 'I have a sample report, pitch, campaign plan or small sale that shows how I handle a business task.', 'Make one sample, such as a one-page plan to bring customers to a local shop, and keep it in a folder with a note on the problem and your idea.'), up: 'Offer the plan to a real small business, club or event team and ask what they would try. Record what was used and what happened.' },
    { ...x(['business'], 'comms', 'I can write a clear business message that states the ask, the reason and the date in the first few lines.', 'Rewrite one of your recent messages so the first two lines say what you need, why and by when. Cut every sentence that does not help the receiver act.'), up: 'Send two such messages this week and count how many got a clear reply. Ask one receiver what would have made the message even easier to answer.' },
    { ...x(['business'], 'market', 'I assume any business degree leads to a good job without checking which skills local employers ask for.', 'Look at ten listings in your city or your target city and note which skills and tools repeat beyond the degree. Add one of them to your plan this month.', true), up: 'Ask two people working in business roles what they would add to a degree if they were starting now. Write what they say next to your skill table.' },
    // Creative and media
    { ...x(['creative'], 'core', 'I can produce a finished piece, such as a design, edit, article or video, within a time limit I set myself.', 'Set a brief and a deadline for one small piece, such as a poster, a one-minute edit or a 500-word article, and finish it in that time. Note the step that ran over.'), up: 'Repeat with a new brief and a shorter limit, and compare the two pieces. Ask a friend which one they find stronger and why.' },
    { ...x(['creative'], 'tools', 'I can use the main tool of my craft well enough that I think about the idea and not about where the buttons are.', 'Pick the three actions you repeat most in your main tool and practise them until you can do them without searching. Free practice files or templates are enough.'), up: 'Time one routine task before and after a week of practice. Learn one new shortcut or feature each day and note the time saved.' },
    { ...x(['creative'], 'proof', 'My portfolio shows three to five pieces chosen for the kind of work I want, not everything I have made.', 'Choose a niche, such as brand posters, product videos or explainer articles, and keep only the pieces that fit it. Remove the rest from the first page.'), up: 'Show the selection to someone who hires or buys this kind of work and ask which piece they would remember. Replace the weakest piece within a month.' },
    { ...x(['creative'], 'comms', 'I can explain the reason behind a design or content choice to someone who does not work in a creative field.', 'For one piece, write two lines on who it is for and why you made one key choice, such as the colour, the opening line or the cut. Say them aloud once.'), up: 'Explain the same piece to a family member and ask what they think it is for. If their answer is different, change the explanation or the piece.' },
    { ...x(['creative'], 'market', 'I publish or share my work without checking who it is for or what they would pay for.', 'Before your next piece, write the person who would pay for it and where they look for such work. Make the piece for that person, not for everyone.', true), up: 'Find three people or businesses who buy this kind of work and note how they found their last creator. Send one of them a short message with a link to your best piece.' },
    // Government and exam-based
    { ...x(['government'], 'core', 'I can solve previous-year questions of my target exam within the time limit and I know which topics lose me marks.', 'Take one previous-year paper under exam timing and list every topic where you lost marks or ran out of time. Put those topics first in your next week.'), up: 'Repeat a paper from a different year after one week of work on the weak topics. Compare topic by topic and note what moved.' },
    { ...x(['government'], 'tools', 'I know the online application steps and document rules for my target exams, including photo, signature and certificate formats.', 'Open the official site of your target exam and list each document, size and format it asks for. Prepare the files now so a last-date rush does not cost you an attempt.'), up: 'Set a calendar reminder for each exam’s notification and last date. Keep a checklist for every application and tick it before you submit.' },
    { ...x(['government'], 'proof', 'I keep a record of my mock test scores over time so I can see progress by topic.', 'Open a sheet with one row per mock test: date, score, time used and the topics you lost marks on. Fill it in on the day you take each test.'), up: 'Look at the last five rows and note which topic keeps appearing in the lost marks column. Give it the first study slot for the next week.' },
    { ...x(['government'], 'comms', 'I can write a short, clear answer or letter in the language the exam asks for, within the word limit.', 'Write one short answer or letter every other day on a past topic, in the exam language, and count the words. Cut anything that does not answer the question.'), up: 'Ask a teacher or a friend with strong writing to mark two pieces and name the most repeated mistake. Fix that one mistake in the next three pieces.' },
    { ...x(['government'], 'market', 'I have a second route or a side skill that I would use if the exam result does not come in the next few attempts.', 'Write down one second route and one side skill, such as a private sector role, a course or a spreadsheet and typing skill. Give the side skill 30 minutes a day.'), up: 'Set a date to review your plan, such as after the next result. Decide beforehand what you will do if the result is not what you hoped, and tell one person.' },
    // Healthcare support
    { ...x(['healthcare'], 'core', 'I can explain the steps of a core procedure for my target role and why each step is done, such as hygiene, safety or sample handling.', 'Write the steps of one core procedure from memory, then check them against your course material or your trainer. Add the reason for each step.'), up: 'Ask your trainer to watch you carry out the procedure and note any step you skipped. Repeat it until you can do it in the right order without prompts.' },
    { ...x(['healthcare'], 'tools', 'I have practised the main equipment of my target role under supervision, not only read about it.', 'Ask your institute or trainer for supervised practice with the main equipment, such as a sample collection kit, a blood pressure monitor or a basic therapy device.'), up: 'Keep a log of each supervised session with the date, the equipment and what you did. Ask the supervisor to sign or confirm it.' },
    { ...x(['healthcare'], 'proof', 'I have a record of supervised practice, training hours or course completion that a hospital, lab or clinic could check.', 'Collect your certificates, training hours and supervisor details in one folder. Make sure the names and dates match your other documents.'), up: 'Ask your trainer for a short written line on what you can do independently and what is still supervised. Keep it with your certificates.' },
    { ...x(['healthcare'], 'comms', 'I can explain a simple procedure to a worried patient or family member in plain words.', 'Practise explaining one routine procedure to a family member in three sentences, covering what will happen, how long it takes and what they should do. Use no medical words.'), up: 'Ask your listener what part still worried them and answer that part in your next try. Ask a trainer to hear one explanation and give feedback.' },
    { ...x(['healthcare'], 'market', 'I know whether my target role needs registration, a licence or a recognised course in my state, and I have checked it with the official body.', 'Find the official body for your role in your state and read what it asks for in training and registration. Note the source and the date you checked.'), up: 'Ask a working person in the role how they registered and what they would do again. Check any rule that has changed since they joined.' },
  ],

  stageAdvice: {
    tech: {
      core: sa('In tech work, the gap is often between knowing a language or tool and building something that works for a real need.', 'Take one listing and build the smallest version of a task it names, such as a data cleaning sheet, a short script or a simple page, with no tutorial open.', 'Write down what broke and how you fixed it. That note becomes your list of next skills.'),
      tools: sa('In tech work, listings often name specific languages, platforms and cloud or data tools, and the list changes quickly.', 'Pick the one tool that appears in most listings and finish a small project with its free version.', 'Save each project where it can be reviewed, such as a shared repository or folder, with a short description.'),
      proof: sa('In tech work, a certificate alone says little to a person who wants to see what you can build.', 'Finish one project to the point where a stranger can open and use it, and write the problem it solves in two lines.', 'Add a second project that uses a different skill from the same listings so your folder does not show only one kind of work.'),
      comms: sa('In tech work, you often explain your work to people who do not code, such as managers, clients or teammates in other roles.', 'Describe one project as problem, what you built and result, and put the tools last.', 'Practise a two-minute walk-through of the project with a screen or a few slides, and ask a friend to stop you whenever they get lost.'),
      market: sa('In tech work, listings, tools and AI-assisted ways of working change often, and entry roles are crowded.', 'Check ten fresh listings each month and keep a tally of skills, so your practice follows what is asked now.', 'Plan the next layer early: a freelance project, a small product or a niche, since this route can grow beyond one employer but only with proof.'),
    },
    business: {
      core: sa('In business roles, the gap is often between knowing concepts from a degree and doing the work, such as pricing a product, tidying accounts or following up a lead.', 'Pick one task from a listing, such as a monthly sales summary or a lead follow-up list, and do it on practice data from start to finish.', 'Ask someone in the role to check your work and mark where a real business would see it differently.'),
      tools: sa('In business roles, listings usually name spreadsheets, accounting software, customer record systems or analytics tools.', 'Learn the formulas and views you will use every week in a spreadsheet before moving to a second tool.', 'Practise on real data from a family shop, a club or a small team, with their permission.'),
      proof: sa('In business roles, proof is often a sample report, a plan, a campaign or a small sale, not a project in code.', 'Make one sample for a real or imagined small business and keep it with a note on the problem, your idea and the next step.', 'Offer one piece of help to a real business, club or event team, and record what was used.'),
      comms: sa('In business roles, you explain numbers, offers and plans to people who decide, and a clear ask matters.', 'Write your next three messages with the ask, the reason and the date in the first two lines.', 'Practise a one-minute pitch of a service or idea and ask a friend what they would do after hearing it.'),
      market: sa('In business routes, a job is the usual first step, and growth often comes from adding a business layer such as consulting, an agency or a venture of your own.', 'Write who pays, how they find you, what makes them trust you and how you follow up for the role you want.', 'Start one small, safe step this month, such as a free sample for one real person, and note what you learned.'),
    },
    creative: {
      core: sa('In creative work, the gap is often between taste and craft: you know what good looks like but cannot yet make it at the pace and finish a client expects.', 'Recreate a piece you admire from scratch, then make a new piece for a brief you set yourself, and compare the two.', 'Set a deadline for one piece and note which step takes the longest, then practise that step.'),
      tools: sa('In creative work, your main tool shapes how fast and how well you can deliver.', 'Practise the three actions you repeat most in your main tool until you stop searching for them.', 'Learn one tool next to it that clients often use, such as a file format, a review tool or an editing step.'),
      proof: sa('In creative work, a portfolio is the main proof, and a small selection of strong pieces works better than a large unsorted one.', 'Choose a niche and keep three to five finished pieces for it, each with a short brief and a result.', 'Make one piece for a real person or small business, and ask whether you may show it.'),
      comms: sa('In creative work, clients and teammates need to understand why you made a choice, not only see the result.', 'Write two lines on who each piece is for and why you made one key choice.', 'Practise asking a client three questions about the brief before you start: who it is for, what it should do and by when.'),
      market: sa('In creative work, many people compete for the same visible jobs, and income often grows when you own an audience, a niche or a repeat client.', 'Find three people or businesses who buy your kind of work and note how they found their last creator.', 'Decide how a stranger could find you, such as a profile, a portfolio page or a referral, and set that up first.'),
    },
    government: {
      core: sa('For exams, depth means accuracy and speed under time limits across the whole syllabus, not coverage alone.', 'Solve one previous-year paper under exam timing and list every topic where you lost marks.', 'Spend the next study week on the topics that lost the most marks before you start new chapters.'),
      tools: sa('For exams, tools are the application steps, documents, mock test platforms and exam-day rules, and small errors can cost an attempt.', 'Prepare your photo, signature and certificate files in the sizes the official site asks for, before any notification comes.', 'Practise on an online mock test platform at least once a week so the exam screen feels familiar.'),
      proof: sa('For exams, your proof is your own record: mock scores by topic and previous-year attempts over time.', 'Keep a sheet with the date, score, time used and weak topics for every mock test.', 'Review the last five rows each week and choose the topic that keeps repeating.'),
      comms: sa('For exams, communication means answering in the right language, in the right length, and in some posts speaking at an interview.', 'Write a short answer or letter on a past topic every other day and cut it to the word limit.', 'Practise a two-minute introduction and a few common questions aloud, and ask someone to listen.'),
      market: sa('For government routes, vacancies, seats, age limits and exam patterns are set by official notifications and change from year to year, and growth is limited by seats and pay scales.', 'Read the official notification for each exam you target and note vacancies, pattern, age limit and last date in one sheet.', 'Pick a second route or a side skill and give it a fixed part of each week, so one result is not your only path.'),
    },
    healthcare: {
      core: sa('In healthcare support, depth means doing the routine procedure correctly and safely, in the right order, every time.', 'Write the steps of one core procedure from memory and check them against your course material or trainer.', 'Ask your trainer to watch you carry it out and mark any step you skipped or rushed.'),
      tools: sa('In healthcare support, tools are the equipment and software of the workplace, and you should only practise them under supervision.', 'Ask your institute or trainer for supervised sessions with the main equipment of the role.', 'Learn the basics of the record or billing software a lab or clinic would use, in a practice setting.'),
      proof: sa('In healthcare support, proof is recognised training, supervised practice and records that an employer can check.', 'Keep certificates, training hours and supervisor details in one folder, with matching names and dates.', 'Ask your trainer for a short written line on what you can do independently.'),
      comms: sa('In healthcare support, you explain steps to nervous patients and share clear records with colleagues, so calm and plain words matter.', 'Practise explaining one routine procedure in three plain sentences and ask a family member to say it back.', 'Write a short, factual handover note for a practice case, with times and steps, and ask a trainer to check it.'),
      market: sa('In healthcare support, demand, registration and licence rules differ by role and state, and some roles can grow into a lab, clinic or training service where the rules allow it.', 'Find the official body for your role in your state and note what it asks for in training and registration.', 'Ask one working person how they moved from entry level to a better role, and what extra step the role needed.'),
    },
  },

  scenarios: [
    sc('core', 'A listing for your target role asks for eight skills and you can do three of them. What do you do?', [
      o('Mark each skill can do alone, can do with help, or not yet, pick the gap that appears in most listings and set a two-week output for it', 100, 'You turn a long list into one next step with a date. Repeat this each month so the table stays honest.'),
      o('Start the skill you enjoy most from the list and work through its full course first', 50, 'Enjoyment helps you keep going, but it may not be the biggest gap. Check which missing skill appears in most listings and give that one the first slot.'),
      o('Apply anyway and hope the interview focuses on the three skills you know', 33, 'Applying early can teach you things, but the missing five will show. Close at least one more gap in parallel so each application is stronger than the last.'),
      o('Decide the role is too far away and switch to a different target without comparing', 17, 'Switching may be right later, but another role will also ask for skills you do not yet have. Check how big each gap is before you leave a target.'),
    ]),
    sc('core', 'You finished an online course and received a certificate. A friend asks you to use that skill for a small real task. What do you say?', [
      o('Say yes, tell them it is practice, do the task without the video open and note what you had to look up', 100, 'A real task shows what the course did not. The things you looked up are your next practice list.'),
      o('Say yes, but re-watch the course first so you do not make mistakes', 50, 'Preparing is sensible, yet rewatching can hide the gaps. Try the task first and watch only the parts where you got stuck.'),
      o('Say you are not ready and take another course first', 33, 'Another course may add knowledge, but doing a small task teaches faster. Offer a smaller part of the job instead of refusing it.'),
      o('Say yes and copy a ready-made template without checking whether it fits', 17, 'A template can save time, but copying without understanding does not build the skill. Change at least one part yourself and explain why.'),
    ]),
    sc('tools', 'Three listings name a tool you have never used. How do you respond?', [
      o('Check which tool appears most often, open its free or student version and finish one small task with it this week', 100, 'You choose by demand and start by doing. A finished small task shows you where the tool is easy and where it is hard.'),
      o('Watch an overview video of all three tools so you know what each one does', 67, 'An overview helps you choose, but it does not teach you the tool. Pick one tool by the end of the day and start a small task.'),
      o('Try to learn all three at once so you are covered for any listing', 33, 'Spreading across three tools usually leaves you with none you can use. Start with the one that appears most and add the others later.'),
      o('Skip them and plan to say in the interview that you learn fast', 17, 'Saying you learn fast is easier to believe when you have already learned one tool. Spend a few hours on the main tool first.'),
    ]),
    sc('tools', 'Your college teaches one tool, while most listings name a different one for the same job. What do you do?', [
      o('Keep the class tool for exams and ideas, and practise the same tasks in the listed tool each week', 100, 'You protect your marks and build the skill employers ask for. Note what is easier and what is harder in each tool.'),
      o('Switch fully to the listed tool and ignore the class tool', 50, 'You may gain speed in the listed tool, but your exam marks may suffer. Keep a small part of your week for the class tool.'),
      o('Stay with the class tool because it is what your marks depend on', 33, 'Marks matter, but a few hours a week on the listed tool would close a gap that marks do not show. Add a small weekly slot.'),
      o('Assume the tool does not matter because the ideas are the same and never open the other one', 17, 'Ideas carry over, but employers still expect you to work in their tool. A few finished tasks in it will show you that you can.'),
    ]),
    sc('proof', 'A person in your target field asks you to show something you made for the main skill, and you only have a class assignment. What do you do?', [
      o('Share the best assignment with a three-line note on the task, your part and the result, and say you are making a new piece that matches the role', 100, 'You show what you have honestly and make the next step clear. Send the new piece when it is done.'),
      o('Share the assignment without a note', 67, 'Showing something is better than showing nothing, but a short note helps the person see your part and the result.'),
      o('Say you will send something later without a date', 33, 'A promise without a date often fades. Name a day, even a few days away, and keep it.'),
      o('Describe your skills in more words and offer to show work in the interview', 17, 'Words are easy to doubt. Even a small finished piece is a stronger answer than a longer description.'),
    ]),
    sc('proof', 'You have four weeks to add proof for the skill gap that appears in most listings. How do you spend them?', [
      o('Make one small project that mirrors a task from the listings, publish it with a three-line note and ask one person in the field for feedback', 100, 'A small finished piece with feedback beats a large unfinished one. Use the feedback for a second version.'),
      o('Start one large project that you want to make perfect', 50, 'A big project can impress, but it may never finish. Cut it to a version you can complete in two weeks and improve later.'),
      o('Finish several short tutorials and list them on your profile', 33, 'Tutorials build knowledge, but a list does not show what you can do. Turn one of them into your own variation and keep it.'),
      o('Buy another certificate course and wait to finish it before making anything', 17, 'Another certificate may not change what you can show. Make something in the first week of the course and keep it.'),
    ]),
    sc('comms', 'An interviewer asks, “Tell me about your strongest skill.” What is your answer?', [
      o('Name the skill, describe one task where you used it, say what happened and mention what you are still improving', 100, 'This answer is believable because it has an example and a limit. Prepare one such example for each main skill.'),
      o('Give an example but skip the result', 67, 'The example helps, but the result shows why it mattered. Add one line on what changed because of what you did.'),
      o('List four or five skills you have learned', 33, 'A list tells the interviewer what you know, not what you did. Pick one skill and tell a short story with it.'),
      o('Say you are hardworking and a quick learner', 17, 'These words are easy to say and hard to check. Give one example that shows how you learn quickly.'),
    ]),
    sc('comms', 'You want advice from a person working in your target field and you find them online. What do you send?', [
      o('A short message with who you are, the role you aim for, one specific question, a link to your work and thanks', 100, 'A specific, short message is easier to answer. Follow up with a thank you and tell them what you did with their reply.'),
      o('A longer message with three questions at once', 67, 'Your questions are good, but three at once can be hard to answer. Send the most important one first.'),
      o('Nothing yet, because you want to learn more before writing to anyone', 33, 'Waiting feels safe, yet a short question now can save you months of wrong practice. Write your question today and send it.'),
      o('A message that says only “Please guide me”', 17, 'A general request is hard to act on. Say what you tried and what you need.'),
    ]),
    sc('market', 'Friends say a certain skill is “in demand” because a video said so. What do you do?', [
      o('Read ten current listings and ask one or two people in the role whether the skill is asked for, then decide', 100, 'You test the claim with real listings and real people. Note the date you checked, since demand shifts.'),
      o('Read one ranking article and decide from that', 50, 'One source can be old or one-sided. Check at least a few current listings as well.'),
      o('Join your friends so you can study together', 33, 'Company helps you stay with a plan, but it does not show that the skill is asked for. Check the listings together before you start.'),
      o('Start learning it immediately because the video was convincing', 17, 'A video may be right, but it may also be selling a course. Spend an hour on listings before you spend months on the skill.'),
    ]),
    sc('market', 'Your target route pays through a fixed pay scale, and you want your income and options to grow beyond it over time. What do you do?', [
      o('Keep the route if it suits you and plan the next layer early, such as a side skill, proof of work and a small service or sample for a real person, where the rules allow', 100, 'You do not give up a good route, and you build a second source of growth. Check the rules of your route before you start any side work.'),
      o('Take the job first and think about growth after five years', 67, 'A job can be a sound start. Even a small step in the first year, such as a side skill, makes the later choice easier.'),
      o('Leave the route and start a business straight away with no proof of skill', 33, 'A business needs customers who trust you, and trust usually starts with proof. Build a small sample for a real person before you leave a stable path.'),
      o('Assume pay will rise by itself with seniority and do nothing else', 17, 'Pay scales rise, but slowly and by fixed steps. Ask what skill or layer would give you more choice.'),
    ]),
    // Stage-specific situations
    { ...sc('proof', 'You built a project by following a tutorial, but the listings ask for a project that solves a real problem. What do you do?', [
        o('Change the project so it solves a small real problem for a real person, change at least one feature yourself, and write a three-line note on it', 100, 'A real person using it and one feature of your own turn a tutorial project into proof. Keep the first version so you can show the change.'),
        o('Add a long list of extra features until it looks bigger', 50, 'More features can look impressive, but one clear problem solved is stronger. Cut it back to what a real person will use.'),
        o('Keep it as it is and mention it in your resume as a project', 33, 'A tutorial project shows you can follow steps. Change something and say what you changed so it becomes yours.'),
        o('Start a new tutorial project because the first one is not good enough', 17, 'A second tutorial will not change what you can show. Improve the first one for a real need instead.'),
      ]), stages: ['tech'] },
    { ...sc('proof', 'A local shop owner needs help with a simple sales record, and you want business proof. What do you do?', [
        o('Offer to set up a simple sheet for them, agree on what it should show, finish it and ask whether you can note it as a sample with their permission', 100, 'You help a real person, show the result and ask before you use their name. Keep a short record of what you made and what changed for them.'),
        o('Offer to help but not agree on what the sheet should show', 67, 'Helping is a good start. Ask first what decisions the sheet should help them make, so the result is useful.'),
        o('Build a sample sheet at home with made-up figures and show it to no one', 33, 'A sample builds skill, but no one has checked it. Show it to someone who runs a business and ask what they would change.'),
        o('Tell them you will help once you finish a larger course', 17, 'A small real job can teach more than the course. Offer a small piece of work now.'),
      ]), stages: ['business'] },
    { ...sc('market', 'A local business offers to pay a small amount for a poster, and you have no portfolio yet. What do you do?', [
        o('Agree on what the poster must do and by when, make it, and ask whether you may show it in your portfolio', 100, 'A clear brief, a finished piece and permission to show it make this work useful for later clients too.'),
        o('Say yes and make it quickly without asking what it is for', 50, 'A fast yes can start your portfolio, but you may miss what the client needs. Ask two questions about the audience and the aim first.'),
        o('Say no because you want to wait until your portfolio is better', 33, 'A first piece for a real person is how many portfolios start. Take it and make it your best work so far.'),
        o('Say yes but for free and with no brief, to be liked', 17, 'Helping is fine, but a missing brief leads to extra rounds of changes. Agree on the goal and the number of changes first.'),
      ]), stages: ['creative'] },
    { ...sc('market', 'Your target exam’s notification is delayed by several months. What do you do?', [
        o('Keep a fixed weekly study plan, use the extra time on weak topics and add a side skill for part of each week', 100, 'You use the delay to strengthen both your exam and your second route. Check the official site regularly for the new date.'),
        o('Stop studying until the date is announced', 33, 'A pause can cost you the topics you had learned. Reduce the load, but keep a steady routine.'),
        o('Study even harder every day with no break or other plan', 50, 'Effort helps, but burning out before the date does not. Keep time for rest and for a side skill.'),
        o('Switch to another exam and restart from the first chapter', 17, 'Switching may be right, but check how much of your syllabus carries over before you restart.'),
      ]), stages: ['government'] },
    { ...sc('proof', 'A lab or clinic near you offers a day of observed practice. How do you use it?', [
        o('Accept it, follow the supervisor’s instructions, write down what you did and ask for a short written line on your work', 100, 'Supervised practice with a record is exactly what employers can check. Keep the note with your certificates.'),
        o('Accept it and only watch, without taking part in any task', 67, 'Watching helps, but ask which tasks you may do under supervision. Even a small task shows more than observing.'),
        o('Decline because you want to finish your course first', 33, 'Course learning matters, but early exposure helps you understand what employers do. Ask whether you can join for a short period.'),
        o('Accept it but skip the written record, since the experience is enough', 17, 'Without a record it is hard to show others what you did. Ask the supervisor to confirm the date and the tasks.'),
      ]), stages: ['healthcare'] },
  ],

  phrases: {
    core: [
      '“I can do this task alone, and I still need help with this other part.”',
      '“This is the task I finished without a tutorial, and this is where I got stuck.”',
      '“The skill furthest below the level asked is ..., and I am working on it this month.”',
    ],
    tools: [
      '“The tool named most often is ..., and I have used it to finish ...”',
      '“I know the class version, and I have also practised the one listed in the role.”',
      '“If I had to learn a new tool of this kind, I would start with one small job.”',
    ],
    proof: [
      '“Here is a piece that shows this skill: the task, my part and the result.”',
      '“I am making a new piece for this skill, and it will be ready by ...”',
      '“Someone in the field looked at my work and said it was missing ..., so I changed it.”',
    ],
    comms: [
      '“I can ... for this role, for example when I ...”',
      '“I tried ... and I am stuck at ...; could you tell me what you would check?”',
      '“Let me say what the task is for, what I did and what happened.”',
    ],
    market: [
      '“In current listings, the skills that repeat most are ...”',
      '“The people who pay for this skill are ..., and they usually find people through ...”',
      '“My route can grow if I add ..., and I am starting with ...”',
    ],
  },

  stagePlan: {
    tech: [
      'Copy the repeating skills and tools from three current listings for your target tech role into a table and mark each can do alone, with help, or not yet.',
      'Finish one small project for the biggest gap with no tutorial open, and save it where a stranger can open it.',
      'Write a three-line note for the project: the problem, what you built and the result, and send it to one person in tech.',
      'Retake this assessment after four weeks, compare the area scores and choose the next project from the new gap.',
    ],
    business: [
      'Copy the repeating skills and tools from three current listings for your target business role into a table and mark each one.',
      'Complete one practice task from a listing, such as a sales summary, a budget or a lead list, and keep the file.',
      'Write who pays, how they find you and what makes them trust you, and test one small step with a real person.',
      'Retake this assessment after four weeks and choose the next sample or skill from the new gap.',
    ],
    creative: [
      'Choose a niche and copy the skills and tools from three current listings or client briefs into a table.',
      'Make one finished piece for the niche within a set deadline, and note the step that took the longest.',
      'Show the piece to one person who hires or buys such work and ask what would make them contact you.',
      'Retake this assessment after four weeks, remove your weakest portfolio piece and replace it.',
    ],
    government: [
      'Read the official notification of each exam you target and write vacancies, pattern, age limit and last date in one sheet.',
      'Solve one previous-year paper under exam timing and list the topics where you lost marks.',
      'Choose one side skill or second route and give it 30 minutes a day beside your exam study.',
      'Retake this assessment after four weeks, compare your mock test record with the result and adjust the plan.',
    ],
    healthcare: [
      'Find the official requirements for training and registration for your target role in your state and note the source.',
      'Write the steps of one core procedure from memory and ask your trainer to check them and watch you do it.',
      'Collect your certificates, training hours and supervisor details in one folder with matching names and dates.',
      'Retake this assessment after four weeks and choose the next supervised practice or document to complete.',
    ],
  },

  talk: {
    core: {
      q: 'If you were starting this role again, which skills would you want to be able to do alone before your first job?',
      a: 'Ask for two skills and one way to check each. Do the check on yourself this week and mark the result in your skill table.',
      line: 'Note: the two skills to do alone first are [skill 1] and [skill 2]. I will check them by [task] on [date].',
    },
    tools: {
      q: 'Which tool do you use most in this role, and what is the first job you would give a new person in it?',
      a: 'Ask for the name of the tool, the free way to practise it and an example of a first job. Try that job within a week.',
      line: 'Note: main tool is [tool]; first job to practise is [job]; I will finish it by [date].',
    },
    proof: {
      q: 'If you looked through my work for this role, what is the first thing you would expect to see that is not there?',
      a: 'Show a small selection, not everything. Write down the missing piece they name and make it before you write to them again.',
      line: 'Note: missing piece named by [person] is [piece]. I will send a new piece by [date].',
    },
    comms: {
      q: 'Which description of a skill do you believe when you hear it, and which one do you not?',
      a: 'Ask for one good and one weak example in their own words. Compare them with your two-sentence description and fix the weaker one.',
      line: 'Note: my two-sentence description is “[sentence]”. Updated on [date] after feedback from [person].',
    },
    market: {
      q: 'What has changed in what this role asks for over the last two years, and what would you learn first if you started now?',
      a: 'Ask for one skill that has become more important and one that matters less. Check both against your latest listings and update your practice list.',
      line: 'Note: more asked now [skill]; less asked [skill]; who pays [person]; growth step [step]. Checked on [date].',
    },
  },

  talkTitles: {
    strong: 'Use your closest area when you talk to a person working in the role',
    weak: 'Questions to ask about your biggest gap',
    intro: 'Bring these to a senior, a trainer or someone who works in the role you chose. Specific questions get specific answers that you can try this week.',
    mode: 'ask',
  },
};
