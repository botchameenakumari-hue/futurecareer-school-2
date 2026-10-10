// Skill-led path to early financial freedom, added to every self-rating test
// result. Nine skills everyone benefits from, rated by the person in a short
// check, then turned into a ranked plan, proof projects and an income ladder.
// General guidance only: no income figures, timelines, statistics or promises.
export type Audience = 'school' | 'college' | 'early' | 'experienced' | 'parent';
export type PFLink = { href: string; title: string };
export type PFSkill = {
  key: string;
  name: string;
  statement: string;
  why: string;
  /** Rated Not true or Rarely true */
  start: string[];
  /** Rated Sometimes */
  grow: string[];
  /** Rated Mostly or Very true */
  strong: string[];
  tools: string[];
  focus: Record<Exclude<Audience, 'parent'>, string>;
  links: PFLink[];
};

export const PF_SKILLS: PFSkill[] = [
  {
    key: 'ai_use',
    name: 'Using AI every day',
    statement: 'I use an AI assistant most days to learn, write or solve problems, and I check what it gives me before relying on it.',
    why: 'An AI assistant is a tutor, editor, researcher and assistant that works whenever you do. People who use it well finish more in the same hours, and that is the first multiplier on any skill you already have.',
    start: [
      'Open a free AI assistant such as ChatGPT, Claude or Gemini and use it for one real task every day this week: explain a topic you find hard, rewrite a message, or plan your day.',
      'Learn the three-part prompt: say who you are and what you are trying to do, paste the material, and say the format you want back. Compare it with a one-line prompt on the same task.',
      'Check every answer once: ask it for its sources or reasoning, and verify any fact, number or name that matters on an official or original page.',
    ],
    grow: [
      'Save your five best prompts in a notes file and reuse them. Improve one each week after you see where the answers fall short.',
      'Pick one weekly task, such as a report, a summary or study notes, and write down the exact steps you use AI for, so the task takes less time each week.',
    ],
    strong: [
      'Turn your best prompts into a short guide or checklist that someone else could use. Teaching it is the quickest way to find the gaps in your own method.',
      'Pick one task in your work or study where AI output still needs a lot of correction, and design a better workflow for it: examples, a checklist, or two steps instead of one.',
    ],
    tools: ['ChatGPT, Claude or Gemini (free or low-cost plans)', 'A notes app for your prompt library'],
    focus: {
      school: 'Use it to understand a topic in simpler words, quiz yourself and check your own writing. Never submit its answer as your own work.',
      college: 'Use it to learn faster, summarise papers, draft assignments you then rewrite, and prepare for interviews.',
      early: 'Use it to draft emails, reports and plans, analyse data, and learn tools your job needs faster than colleagues do.',
      experienced: 'Use it to cut routine writing and analysis, prepare decisions, and train your team on better ways of working.',
    },
    links: [
      { href: '/career-resources/prompt-engineering-for-non-technical-professionals/', title: 'Prompt Engineering for Non-Technical Professionals' },
      { href: '/career-resources/ai-multiplier-skills-for-the-next-decade/', title: 'AI Multiplier Skills for the Next Decade' },
    ],
  },
  {
    key: 'ai_build',
    name: 'Building things with AI',
    statement: 'I have used AI to make something that works, such as a script, a small app, a web page, a chatbot or a document workflow.',
    why: 'You no longer need years of study to make a working tool. Describing what you want to an AI coding assistant and testing the result lets you build small apps, pages and helpers, which is how many people now create their first proof of skill.',
    start: [
      'Ask an AI assistant to build something tiny that you will actually use this week: a one-page website about yourself, a tip-calculator, or a quiz from your own notes. Run it and fix it by pasting the error back into the chat.',
      'Learn the loop: describe the goal, run it, copy the error or the wrong behaviour, ask for a fix, repeat. Keep each change small and save a copy before the next one.',
      'Publish the result where it can be opened with a link, for example a free page on GitHub Pages or a shared Google Sheet, and send the link to one person for feedback.',
    ],
    grow: [
      'Build a second project that solves a problem for someone else, such as a booking form for a small shop or a price list that updates itself, and note what the person needed that you had not guessed.',
      'Add one feature to something you already built, such as saving data, sending a message or a simple login, and write down what the AI got wrong so you know what to check next time.',
    ],
    strong: [
      'Write a short case study for your best build: the problem, what you made, how you tested it and what changed for the person who used it. This is portfolio material.',
      'Learn to read what the AI wrote. Ask it to explain each part, and rewrite one section yourself so that you can fix problems without it.',
    ],
    tools: ['An AI coding assistant such as Claude, ChatGPT or GitHub Copilot', 'Google Sheets and Apps Script', 'GitHub for storing and publishing your work'],
    focus: {
      school: 'Make a small web page, quiz or calculator with AI help. Having something you built is more convincing than saying you are interested in computers.',
      college: 'Build two or three small tools around your course or a club. They make your portfolio different from other students with the same degree.',
      early: 'Automate a repeated task at work with a small script or sheet, with your manager\'s permission. Document the time it saves.',
      experienced: 'Build an internal tool or a prototype for a problem you know better than any software company does. It can become a side service or a product.',
    },
    links: [
      { href: '/career-resources/github-for-non-developers-build-a-portfolio-without-code/', title: 'GitHub for Non-Developers' },
      { href: '/career-resources/creating-a-portfolio-without-work-experience/', title: 'Creating a Portfolio Without Work Experience' },
    ],
  },
  {
    key: 'automate',
    name: 'No-code automation and productivity tools',
    statement: 'I can set up simple automations or tools without coding, such as spreadsheet formulas, forms, Zapier or Make flows, or Google Apps Script with AI help.',
    why: 'Most businesses lose hours every week to copying data, sending the same message and updating sheets by hand. A person who can connect forms, sheets, messages and AI into a flow saves real time, and that is something small businesses pay for.',
    start: [
      'Pick one repeated task you do by hand, such as copying form answers into a sheet or sending the same reminder, and write each step on paper before touching any tool.',
      'Learn four spreadsheet basics in Google Sheets: formulas, filters, a pivot table and a form linked to a sheet. Rebuild one real list of yours with them.',
      'Make a free account on Zapier or Make (both have free plans with limits) and connect two apps, for example a form response that sends you an email.',
    ],
    grow: [
      'Automate one task end to end, including a failure case: what happens when an entry is empty or a message does not send? Test it with five wrong inputs.',
      'Ask an AI assistant to write a Google Apps Script for something your sheet cannot do on its own, such as sending a reminder every morning. Run it on a copy first.',
    ],
    strong: [
      'Offer to automate one task for a friend, a club or a small business, with a clear description of what it will do. Record the time before and after.',
      'Learn one more tool in the same family, such as Airtable, an AI app builder or webhooks, and rebuild your best automation with it to see which works better.',
    ],
    tools: ['Google Sheets, Forms and Apps Script', 'Zapier or Make (free plans with limits)', 'An AI assistant to write formulas and scripts'],
    focus: {
      school: 'Use a sheet to track your marks and homework, and a form to run a quiz for friends. It is a first step into thinking in systems.',
      college: 'Automate attendance tracking, event sign-ups or club messages. Real use by real people is worth more than a tutorial.',
      early: 'Find the report, reminder or data copy that eats an hour a week in your team and remove it. This is quick, visible work.',
      experienced: 'Map your team\'s repeated tasks and automate the top two. Build a short process document so others can use and maintain them.',
    },
    links: [
      { href: '/career-resources/how-to-ai-proof-your-career/', title: 'How to AI-Proof Your Career' },
      { href: '/career-resources/night-shift-plan-learn-7pm-11pm-without-burning-out/', title: 'Night Shift Plan: Learn 7pm to 11pm Without Burning Out' },
    ],
  },
  {
    key: 'code',
    name: 'Coding (with AI as your pair)',
    statement: 'I can read and change simple code, or I am learning a programming language such as Python or JavaScript, using AI to explain and fix errors.',
    why: 'Coding is the deepest technical skill on this list, and it remains the best long-term choice if you can spare the time. It lets you build exactly what you need and helps you check what an AI has written. With an AI assistant to explain every line, learning is faster than it has ever been.',
    start: [
      'Choose one language and stay with it for 60 days. Python is a common first choice for automation and data, and JavaScript is the one for web pages. Do not switch after a week.',
      'Spend 30 minutes a day: 10 minutes reading an example, 20 minutes changing it. Ask an AI assistant to explain any line you do not understand in plain words, then close the chat and type the line yourself.',
      'Build a tiny program every week, such as a to-do list, a marks calculator or a text cleaner, and keep each one in a GitHub account.',
    ],
    grow: [
      'Move from following tutorials to starting from a blank file. Pick a project, write the plan in comments, then ask the AI for help only when you are stuck for 15 minutes.',
      'Read other people\'s code once a week on GitHub, pick one small improvement and understand it fully before moving on.',
    ],
    strong: [
      'Deepen one area that pays attention: data analysis, web apps, automation or APIs. Build one project in it that connects to a real service, such as a messaging API or a database.',
      'Write tests for your own code, and ask the AI to review it for bugs and security issues. Learn to judge its suggestions instead of accepting them.',
    ],
    tools: ['VS Code and a free GitHub account', 'Python or JavaScript', 'An AI coding assistant to explain code and fix errors'],
    focus: {
      school: 'Start with a block-style tool like Scratch if you have never coded, then move to Python. Thirty minutes most days beats one long weekend session.',
      college: 'Treat coding as a second language alongside your course. Even in non-computer streams, data and automation skills set you apart.',
      early: 'If your job is not technical, learn enough Python or SQL to analyse your own data and automate your own reports.',
      experienced: 'If you do not have long free hours, begin with AI-assisted coding for small tools and go deeper into the basics at your own pace.',
    },
    links: [
      { href: '/blog/skills/which-programming-language-to-learn-first-india/', title: 'Which Programming Language to Learn First' },
      { href: '/blog/skills/python-vs-java-which-to-learn-first-india/', title: 'Python vs Java: Which to Learn First' },
    ],
  },
  {
    key: 'english_write',
    name: 'Clear English writing',
    statement: 'I can write a clear English email, message or short post that people understand on the first read.',
    why: 'Most higher-paying work, clients and remote roles run on written English. A clear message gets answers, builds trust and sells without a call. It is also something AI can help you practise every day.',
    start: [
      'Write three sentences in English every day about what you did or learned. Paste them into an AI assistant and ask it to correct them and explain each correction in one line.',
      'Use a fixed structure for every message: the point first, one reason or detail, and what you need from the person. Re-read it once and cut every word that does not help.',
      'Keep a "mistakes list" of the five errors you repeat. Check each new message against it before sending.',
    ],
    grow: [
      'Write one short post or article a week on something you know, 150 to 250 words, and post it on LinkedIn or a blog. Ask one person to say where they got lost.',
      'Rewrite a long message you sent earlier to half its length, and note what stayed essential.',
    ],
    strong: [
      'Write for a purpose that moves money: a product description, a proposal or a cold email. Ask a friend in that field to critique it as if they were the buyer.',
      'Learn one persuasive structure, such as problem, proof and next step, and use it for a week of real messages.',
    ],
    tools: ['An AI assistant as writing coach (ask it to explain, not only fix)', 'A free grammar checker', 'LinkedIn or a blog to publish short posts'],
    focus: {
      school: 'Keep a daily English diary and read one short English article a day. Ask a teacher to mark one piece a week.',
      college: 'Write your next assignment introduction, application letter and LinkedIn summary in English and have them corrected line by line.',
      early: 'Make your workplace emails shorter and clearer. Good writing is noticed fast by seniors and clients.',
      experienced: 'Use writing to widen your reach: short posts, case studies and proposals that work while you are not in the room.',
    },
    links: [
      { href: '/services/assessments/communication-skills-assessment/', title: 'Communication Skills Assessment' },
      { href: '/career-resources/copywriting-career-roadmap/', title: 'Copywriting Career Roadmap' },
    ],
  },
  {
    key: 'english_speak',
    name: 'Confident spoken English',
    statement: 'I can speak English clearly enough to explain my work or ideas to a stranger, a customer or an interviewer.',
    why: 'Spoken English opens interviews, client calls, partnerships and customers outside your own city or language. You do not need an accent, you need clear sentences and the confidence to speak them.',
    start: [
      'Talk to yourself in English for five minutes every day about your day or a topic you know. Record it on your phone and listen once. Pick one thing to improve tomorrow.',
      'Practise a 60-second introduction until you can say it without notes: who you are, what you do or study, and what you want. Say it to one person this week.',
      'Use an AI assistant\'s voice mode or a practice partner for a 10-minute conversation three times a week. Ask it to note your repeated mistakes at the end.',
    ],
    grow: [
      'Explain something you know to a friend as if they were a customer, in English, for two minutes. Ask them what they understood and what confused them.',
      'Watch one 5 to 10 minute talk a day, pause at a sentence you like and repeat it aloud with the same rhythm.',
    ],
    strong: [
      'Record a three-minute explainer on a topic you know and post it. Watching yourself shows habits no one else tells you.',
      'Take a role that needs speaking: a presentation, a meeting update or a short talk at a club, and ask for one piece of feedback each time.',
    ],
    tools: ['A phone recorder', 'An AI assistant with voice mode for practice', 'A friend or study group for weekly speaking practice'],
    focus: {
      school: 'Speak in English with friends for 10 minutes a day, even if it is imperfect. Read aloud from a short text each morning.',
      college: 'Join a debate, a club or a mock interview group. Speaking in front of people is a skill built with repetition.',
      early: 'Volunteer to present one update a week. Clear speaking shows leadership long before a title does.',
      experienced: 'Practise client and leadership conversations: asking, summarising and disagreeing politely in English.',
    },
    links: [
      { href: '/services/assessments/communication-skills-assessment/', title: 'Communication Skills Assessment' },
      { href: '/services/assessments/interview-readiness-self-assessment/', title: 'Interview Readiness Self-Assessment' },
    ],
  },
  {
    key: 'marketing',
    name: 'Digital marketing fundamentals',
    statement: 'I understand how digital marketing works: finding an audience, a message, a channel and measuring whether it worked.',
    why: 'Every business, freelancer and employee needs attention to earn: customers, clients or the next job. If you understand how people are found and persuaded online, you can promote your own work and help others do the same.',
    start: [
      'Learn the five basics in a week: audience, message, channel, offer and measurement. Write each in one sentence for something you could promote, such as your own skill.',
      'Pick one channel, such as Instagram, LinkedIn, YouTube or Google Business Profile, and post something useful on it three times a week for four weeks.',
      'Check what happened: which post got views, saves or messages? Write down one change for next week. This habit of testing is what marketing is.',
    ],
    grow: [
      'Run a small real campaign for a club, a friend\'s shop or your own service, with one clear goal such as 20 enquiries, and track the numbers in a sheet.',
      'Learn the basics of search: choose one keyword people would type, write a page for it and check later whether anyone found it through Google.',
    ],
    strong: [
      'Write a one-page marketing case study: goal, what you did, numbers before and after, and what you would change. Put it in your portfolio.',
      'Add one adjacent skill: copywriting, short video, email or basic analytics. Combined with AI tools it makes you faster than most beginners.',
    ],
    tools: ['Canva for designs', 'Google Analytics and Google Search Console (free)', 'A spreadsheet to track what you post and what happened'],
    focus: {
      school: 'Run a small page about something you love. Learn how views and followers work without chasing numbers.',
      college: 'Market a club event or a project. It is a safe place to learn what works and keep the results for your portfolio.',
      early: 'Learn how your own company or a friend\'s business gets customers, and build your personal profile in the same way.',
      experienced: 'Use marketing to build your own visibility, generate leads for a side service or help your business grow.',
    },
    links: [
      { href: '/career-resources/digital-marketing-career-roadmap/', title: 'Digital Marketing Career Roadmap' },
      { href: '/career-resources/personal-brand-without-posting-every-day/', title: 'Personal Brand Without Posting Every Day' },
    ],
  },
  {
    key: 'sales',
    name: 'Sales fundamentals',
    statement: 'I can explain the value of something to a person, ask for a decision, and handle a "no" without giving up.',
    why: 'Income comes from someone deciding to pay for what you offer. Sales is not pushing: it is understanding a problem, explaining how you help and asking clearly. People who can do this earn more in jobs and are the ones who can start a business or a freelance practice.',
    start: [
      'Practise a simple structure: ask what the person needs, say how you can help in one sentence, show one proof, and ask for the next step. Try it on a friend with something you could offer.',
      'Make a list of ten people or small businesses who might need something you can do, and send five polite messages this week. Keep a log of replies.',
      'When you hear "no", ask one question: "What would have made this a yes?" Write the answers down. They are the most valuable lessons in sales.',
    ],
    grow: [
      'Prepare a short offer in writing: who it is for, what they get, how long it takes and what it costs. Ask two people if it is clear.',
      'Follow up after a first message. Many replies come on the second or third try. Set a reminder to follow up politely three days later.',
    ],
    strong: [
      'Run a real small sale: a service, a tutoring slot or a template. Track enquiries, replies and paid orders in a sheet and review what to change.',
      'Learn to price by value, not hours. Ask what a result is worth to the buyer and set a fair price from there.',
    ],
    tools: ['A spreadsheet or free CRM to track conversations', 'WhatsApp or email for polite outreach', 'A one-page offer document'],
    focus: {
      school: 'Practise by organising something: a fundraiser, a stall or a class event. Asking people to take part is sales practice.',
      college: 'Sell your skills in a small way: tutoring, design, notes or a college event service. It builds courage and proof together.',
      early: 'Learn how your company sells and ask to join one customer call. Understanding the buyer makes you valuable in any role.',
      experienced: 'Package what you know into an offer and test it with two or three people. This is how side income begins.',
    },
    links: [
      { href: '/career-resources/sales-career-roadmap-from-rep-to-revenue-leader/', title: 'Sales Career Roadmap' },
      { href: '/career-resources/from-employee-to-freelancer-the-real-roadmap/', title: 'From Employee to Freelancer: The Real Roadmap' },
    ],
  },
  {
    key: 'proof',
    name: 'Proof of skill and first earnings',
    statement: 'I have shown my skills in public or earned something from them, such as a project, a portfolio page, a client, a paid task or a post that got responses.',
    why: 'Skills only turn into income when other people can see them. A small portfolio of real work, even unpaid, answers the question every buyer and employer has: can this person actually do it?',
    start: [
      'Choose one skill from this list and make one small piece of work with it this week. Finish it, even if it is not perfect.',
      'Create a simple home for your work: a free portfolio page, a public GitHub profile or a LinkedIn Featured section. Add the first piece today.',
      'Ask one person to try your work and tell you what they would pay for. Their answer shows what is valuable.',
    ],
    grow: [
      'Build to three proof pieces in a month: each with a one-line problem, what you made and what happened. Put them in one place and share the link.',
      'Do one task for someone for free or at a low price, in exchange for a written testimonial and permission to show the work.',
    ],
    strong: [
      'Aim at paid work: raise your price on the next task, ask past clients for referrals and write down what repeat customers want.',
      'Turn one piece of work into something repeatable: a template, a short course, a checklist or a standard service package.',
    ],
    tools: ['A free portfolio page or GitHub Pages', 'LinkedIn Featured section', 'A testimonials folder'],
    focus: {
      school: 'Keep a folder of projects, certificates and anything you made. It is a head start when you apply to programmes or colleges.',
      college: 'Aim for three projects and one real client or customer before you graduate. It changes how interviews feel.',
      early: 'Add visible proof outside your job description: a side project, a published case study or a small paid task.',
      experienced: 'Convert your experience into visible assets: case studies, templates and short guides that bring clients to you.',
    },
    links: [
      { href: '/career-resources/creating-a-portfolio-without-work-experience/', title: 'Creating a Portfolio Without Work Experience' },
      { href: '/career-resources/how-indian-freelancers-make-1-5-lakh-month/', title: 'How Indian Freelancers Build Income' },
    ],
  },
];

export const INCOME_LADDER = [
  { name: 'Learn and use daily', body: 'You use AI, English, a tech skill and the basics of marketing and sales in your own work or study, every week.' },
  { name: 'Prove it in public', body: 'You publish three small pieces of real work in one place, each with the problem and the result.' },
  { name: 'Make your first offer', body: 'You offer one skill to a real person or business: a task, a small project, a tutoring slot or an internal improvement at work.' },
  { name: 'Turn it into a system', body: 'You repeat what worked with templates, automations and a standard offer, so each new customer takes less effort.' },
  { name: 'Widen and scale', body: 'You earn from more than one source, such as clients, a product, a retainer or an audience, and you can choose how to spend your time.' },
];

export const PF_PROOF: Record<Exclude<Audience, 'parent'>, string[]> = {
  school: [
    'A one-page website about something you care about, made with AI help and shared by a link.',
    'A study helper: a sheet or small script that turns your notes into quiz questions.',
    'A two-minute English explainer, recorded on your phone, on a topic you learned.',
    'A poster or WhatsApp message for a family shop or school event, made with permission.',
  ],
  college: [
    'A portfolio page with three projects, each with the problem, what you made and what happened.',
    'An automation that saves a club, class or event team an hour a week.',
    'A small app or bot built with an AI coding assistant for a real person.',
    'A marketing case study: grow a page or event for four weeks and record the numbers.',
    'A cold outreach log: 20 polite messages to local businesses, with replies tracked in a sheet.',
  ],
  early: [
    'One repeated work task automated, with the time saved written down (with your manager\'s knowledge).',
    'A client-style demo, such as a lead tracker or a WhatsApp reply flow, shown in a two-minute video.',
    'A published case study: problem, what you did, result and what you would change.',
    'Eight weekly LinkedIn posts on what you are learning, with one in each skill area.',
    'A first paid task for someone outside your company, however small.',
  ],
  experienced: [
    'A process you improved, written as a case study with before and after.',
    'A side service offered to one or two small businesses, with a written scope and a simple price.',
    'An internal tool or sheet built with no-code or AI that others now use.',
    'A short workshop or guide you teach on something you know well.',
    'A template or checklist you can sell or give away to bring in enquiries.',
  ],
};

export const PF_WEEKLY: Record<Exclude<Audience, 'parent'>, string> = {
  school: 'about 3 to 4 hours a week, after homework and rest. Short daily slots work better than one long session.',
  college: 'about 5 to 7 hours a week, taken from time you now spend on low-value scrolling.',
  early: 'about 6 to 8 hours a week, in early mornings, evenings or weekends, without cutting sleep.',
  experienced: 'about 4 to 6 hours a week in fixed slots, with one longer block at the weekend.',
};

export const PF_INTRO: Record<Audience, string> = {
  school: 'Skills you build while you are still in school give you a head start that most people begin years later. You do not need money for this: you need a phone or computer, a free AI assistant and regular small practice. Marks still matter, and these skills add to them.',
  college: 'A degree tells people what you studied. Skills and proof tell them what you can do. Whatever your course, these nine skills make you useful faster, and they are the base for earning more, sooner, from more than one source.',
  early: 'In your first years at work, the people who rise fastest are usually the ones with a rare mix: one craft they are good at, AI and tech to multiply it, and the English, marketing and sales skills to be heard and paid for.',
  experienced: 'You already have experience, which is the best raw material for a skill-led income. Adding AI, tech, clear communication and the basics of marketing and sales lets you move from trading hours for money towards earning from systems, offers and reach.',
  parent: 'The skills below are worth encouraging in your child alongside school: using AI well, English communication, building things with technology, and the basics of marketing and sales. They do not replace studies. They give your child ways to earn and make choices that do not depend on one exam or one employer.',
};

export const PF_GENTLE =
  'Keep this light while you are working on your wellbeing. Choose one skill, spend 20 to 30 minutes on it on days you have energy, and let sleep, meals and rest come first. Skills built slowly still count.';

export const FREEDOM_FRAME =
  'Here, financial freedom means being able to cover your living costs from skills you own, with choice over how you spend your time. It is built from earning power: how much you can earn, from how many sources, and how little of it depends on one employer or on every hour you work. The steps below build that, and nothing here promises a date or an amount.';

export const FREEDOM_STEPS = [
  'Work out your own freedom number: the monthly amount your life needs. The freedom number guide shows how.',
  'Write down the three skills from this check that could earn money soonest for you, and the one person or business who might pay for each.',
  'Build one proof piece for each of those skills in the next 30 days, then make your first offer in the 30 days after.',
  'Track every rupee you earn from a skill separately from other income, and note which skill and which offer it came from. What you can measure you can repeat.',
  'Each quarter, add one skill from the list, or raise your price on one that already sells.',
];

export const PF_READ_NEXT: PFLink[] = [
  { href: '/career-resources/freedom-number-how-much-do-you-actually-need-to-earn/', title: 'Your Freedom Number: How Much Do You Actually Need to Earn?' },
  { href: '/blog/skills/high-income-skills-without-a-degree-india/', title: 'High-Income Skills Without a Degree in India' },
  { href: '/career-resources/high-income-skills-for-the-next-decade/', title: 'High-Income Skills for the Next Decade' },
  { href: '/career-resources/multiplier-skill-guide-one-addition-that-doubles-value/', title: 'The Multiplier Skill Guide' },
  { href: '/career-resources/how-to-ai-proof-your-career/', title: 'How to AI-Proof Your Career' },
  { href: '/career-skills-compass/', title: 'Career and Skills Compass' },
];

export const PARENT_SKILLS: { title: string; body: string }[] = [
  { title: 'Using AI well', body: 'Let your child use a free AI assistant to explain a topic, quiz themselves and check their writing, and ask them to show you how they checked its answers. The skill is judging the answer, not copying it.' },
  { title: 'English, written and spoken', body: 'Encourage a few sentences of English writing and a few minutes of speaking each day. Clear English opens many doors in work and study, and it can be practised at home for free.' },
  { title: 'Building with technology', body: 'Ask your child to make something small with AI help: a page, a quiz, a sheet that does a job. Coding is the stronger long-term skill, and no-code tools are a good start.' },
  { title: 'Marketing and sales basics', body: 'Let your child help a family shop, a school event or a club tell people about what it offers, and ask for the next step. It teaches how people are reached and how a decision is asked for.' },
  { title: 'Showing their work', body: 'Keep a folder or a simple page of what your child has made. It becomes proof of skill that helps in applications for courses, internships and work.' },
];

// Stage key -> audience for every self-rating test.
export const PF_AUDIENCE: Record<string, Record<string, Audience>> = {
  'confused-after-10th': { before: 'school', choosing: 'school', chosen: 'school', parent: 'parent' },
  communication: { school: 'school', college: 'college', fresher: 'early', professional: 'experienced' },
  'soft-skills': { school: 'school', college: 'college', fresher: 'early', professional: 'experienced' },
  'study-habits-self-assessment': { school: 'school', senior: 'school', college: 'college', adult: 'experienced' },
  'time-management-self-assessment': { school: 'school', college: 'college', fresher: 'early', professional: 'experienced' },
  'exam-stress-self-assessment': { board: 'school', entrance: 'school', college: 'college', govt: 'early' },
  'resilience-and-growth-mindset-assessment': { school: 'school', college: 'college', fresher: 'early', professional: 'experienced' },
  'decision-making-skills-assessment': { student: 'college', fresher: 'early', professional: 'experienced', personal: 'experienced' },
  'interview-readiness-self-assessment': { campus: 'college', fresher: 'early', experienced: 'experienced', government: 'early' },
  'internship-readiness-self-assessment': { early: 'college', final: 'college', graduate: 'early', vocational: 'college' },
  'burnout-self-assessment': { student: 'college', early: 'early', experienced: 'experienced', independent: 'experienced' },
  'leadership-skills-self-assessment': { student: 'college', firsttime: 'early', experienced: 'experienced', founder: 'experienced' },
  'promotion-readiness-assessment': { early: 'early', mid: 'experienced', lead: 'experienced', govt: 'experienced' },
  'job-fit-self-assessment': { current: 'experienced', offer: 'early', newjob: 'early', seeking: 'early' },
  'career-readiness-self-assessment': { college: 'college', final: 'early', working: 'experienced', restart: 'experienced' },
};

export const PF_GENTLE_TESTS = ['burnout-self-assessment', 'exam-stress-self-assessment'];
