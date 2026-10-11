// Proof projects for the nine skills in the skill-led path. Each skill has three
// levels: a starter you can finish in a weekend, a build that solves a real problem for
// someone else, and an earn level that asks for a price or a result. The tracker
// recommends the next unfinished project in the skill with the biggest gap.
import type { Audience } from './skillPortfolio';

export type ProjectAudience = Exclude<Audience, 'parent'>;
export type SkillProject = {
  id: string;
  skill: string;
  level: 1 | 2 | 3;
  title: string;
  /** The finished item that goes into a portfolio. */
  outcome: string;
  hours: number;
  steps: string[];
  /** Evidence worth collecting while you work. */
  proof: string[];
  examples: Record<ProjectAudience, string>;
};

export const PROJECTS: SkillProject[] = [
  // AI use
  { id: 'ai_use-1', skill: 'ai_use', level: 1, title: 'Seven-day AI study and work log', outcome: 'A one-page log of seven real tasks, the prompt used, the answer checked, and the time saved.', hours: 5,
    steps: ['Pick one real task a day for seven days.', 'Write the prompt with who you are, the material and the format wanted.', 'Check the answer against an original source and note one correction.', 'Write one line on whether it saved time.'],
    proof: ['Seven dated entries', 'At least two corrections you found', 'A short list of your best three prompts'],
    examples: { school: 'Use it to explain a hard chapter, then quiz yourself on it.', college: 'Use it to summarise a paper and plan an assignment, then rewrite in your own words.', early: 'Use it to draft a report outline and check a spreadsheet formula.', experienced: 'Use it to prepare a meeting brief and review a draft proposal.' } },
  { id: 'ai_use-2', skill: 'ai_use', level: 2, title: 'Personal prompt playbook', outcome: 'A shareable playbook of ten tested prompts with before and after examples.', hours: 8,
    steps: ['Choose ten tasks you repeat.', 'Write and test a prompt for each, three times.', 'Keep the version that needed the fewest corrections.', 'Add one line of when not to use AI for that task.'],
    proof: ['Ten tested prompts', 'Before and after examples for three', 'One person who tried it and gave feedback'],
    examples: { school: 'A playbook for study: explain, quiz, check my writing.', college: 'A playbook for research, notes and interview practice.', early: 'A playbook for emails, reports and data checks.', experienced: 'A playbook your team can reuse for briefs and reviews.' } },
  { id: 'ai_use-3', skill: 'ai_use', level: 3, title: 'Teach a small group to use AI well', outcome: 'A 30-minute session with slides or notes, attendee feedback and a written takeaway sheet.', hours: 10,
    steps: ['Pick one audience and one problem they have.', 'Run a live demonstration with their own task.', 'Hand over a one-page checklist for checking answers.', 'Collect written feedback from at least three people.'],
    proof: ['Session notes', 'Three written feedback comments', 'The checklist handout'],
    examples: { school: 'Teach classmates how to check an AI answer.', college: 'Run a club session on research with AI.', early: 'Run a lunch session for your team.', experienced: 'Run a workshop for a small business or community group.' } },
  // AI building
  { id: 'ai_build-1', skill: 'ai_build', level: 1, title: 'Build a one-page tool with AI help', outcome: 'A working web page or calculator with a public link.', hours: 6,
    steps: ['Choose a tiny tool you will actually use.', 'Describe it to an AI coding assistant and run what it gives you.', 'Paste each error back until it works.', 'Publish it free and send the link to one person.'],
    proof: ['A public link', 'A screenshot of it working', 'One comment from the person you sent it to'],
    examples: { school: 'A marks calculator or a quiz from your notes.', college: 'A timetable or expense splitter for your hostel group.', early: 'A small checker for a form your team fills often.', experienced: 'A quote calculator for your service or business.' } },
  { id: 'ai_build-2', skill: 'ai_build', level: 2, title: 'Build a tool for someone else', outcome: 'A tool used by a real person, with a short case study.', hours: 14,
    steps: ['Ask one person what task wastes their time.', 'Write what the tool must do in five sentences.', 'Build it in small steps and test it with them twice.', 'Write the case study: problem, build, result.'],
    proof: ['A written request from the person', 'A before and after description', 'A short testimonial or message of thanks'],
    examples: { school: 'A fee or attendance tracker for a family shop.', college: 'An event sign-up and reminder tool for a club.', early: 'A lead tracker for a small business.', experienced: 'A booking or stock helper for a local business.' } },
  { id: 'ai_build-3', skill: 'ai_build', level: 3, title: 'Make a small product others can use without you', outcome: 'A product page with instructions, a way to get it, and at least three people using it.', hours: 24,
    steps: ['Take your best tool and remove anything specific to one person.', 'Write a short guide so a stranger can use it.', 'Share it with five people who have the problem.', 'Record who used it and what they said.'],
    proof: ['A product page', 'Three or more people using it', 'A list of improvements made from feedback'],
    examples: { school: 'Share a free study tool with classmates.', college: 'Offer a template to other clubs.', early: 'Package a work helper as a template.', experienced: 'Package a repeated service into a tool or template.' } },
  // Automation
  { id: 'automate-1', skill: 'automate', level: 1, title: 'Automate one repeated task in a sheet', outcome: 'A Google Sheet with a form, formulas and a clear instruction line.', hours: 4,
    steps: ['Write each step of the task on paper.', 'Link a Google Form to a Sheet.', 'Add formulas that calculate the result.', 'Test it with five wrong entries.'],
    proof: ['The sheet link', 'A list of the five tests', 'Time the task took before and after'],
    examples: { school: 'A homework and marks tracker.', college: 'Club attendance with a summary.', early: 'A weekly report that fills itself.', experienced: 'A team task and approval tracker.' } },
  { id: 'automate-2', skill: 'automate', level: 2, title: 'Connect two apps with an automation', outcome: 'A working flow in Zapier, Make or Apps Script, with a one-page guide.', hours: 8,
    steps: ['Choose a trigger and an action, such as a form reply that sends a message.', 'Build the flow on a free plan.', 'Handle one failure case.', 'Write what it does and how to turn it off.'],
    proof: ['A screenshot of the flow', 'A run log', 'A written guide'],
    examples: { school: 'Send yourself a reminder when a deadline is added.', college: 'Welcome message when someone signs up for a club.', early: 'Move form answers into a tracker and notify the owner.', experienced: 'Route enquiries to the right person automatically.' } },
  { id: 'automate-3', skill: 'automate', level: 3, title: 'Automate a task for a small business', outcome: 'A deployed automation with measured time saved and a written reference.', hours: 18,
    steps: ['Observe the task for one week.', 'Agree what success means in numbers.', 'Build and test the flow.', 'Measure the result for two weeks and ask for a reference.'],
    proof: ['Before and after time', 'Agreement on scope', 'A written reference'],
    examples: { school: 'Help a family business with a reminder system.', college: 'Automate bookings for a local shop.', early: 'Automate a repeated task for a friend who runs a business.', experienced: 'Offer a small paid set-up to a local business.' } },
  // Coding
  { id: 'code-1', skill: 'code', level: 1, title: 'Four small programs in four weeks', outcome: 'Four programs on GitHub, each with a short readme.', hours: 16,
    steps: ['Choose one language and keep it for 60 days.', 'Build one program a week from a blank file.', 'Ask an AI assistant to explain each line you did not understand.', 'Upload each with a readme saying what it does.'],
    proof: ['A GitHub profile with four repositories', 'Four readmes', 'One bug you fixed yourself'],
    examples: { school: 'A quiz game, a calculator, a to-do list and a text cleaner.', college: 'A data cleaner, a scraper for a public page, a bot and a small game.', early: 'Scripts that clean your own work files.', experienced: 'Scripts that automate your own reports.' } },
  { id: 'code-2', skill: 'code', level: 2, title: 'A project that uses real data or a real service', outcome: 'A project with an API or database, tests and a readme.', hours: 30,
    steps: ['Pick a public data source or a free API.', 'Plan features in comments before coding.', 'Write tests for the main function.', 'Deploy it and write a readme with screenshots.'],
    proof: ['A live link', 'Test results', 'A readme with setup steps'],
    examples: { school: 'A weather or cricket stats viewer.', college: 'A placement or exam dashboard with real data.', early: 'A dashboard that reads your own work data.', experienced: 'A tool that calls a service your business uses.' } },
  { id: 'code-3', skill: 'code', level: 3, title: 'Ship a project for a real person', outcome: 'A deployed project with a person using it, an issue list and a changelog.', hours: 50,
    steps: ['Find a person who will use it every week.', 'Ship a first version within two weeks.', 'Fix three issues they report.', 'Write a changelog and ask for a reference.'],
    proof: ['Live link', 'Issue list', 'Reference from the person using it'],
    examples: { school: 'A tool for your school club.', college: 'A tool for a department or a local business.', early: 'An internal tool or a client project.', experienced: 'A product or service tool with paying or committed customers.' } },
  // English writing
  { id: 'english_write-1', skill: 'english_write', level: 1, title: 'Thirty days of short writing', outcome: 'Thirty short pieces of 100 to 150 words with corrections noted.', hours: 10,
    steps: ['Write about what you learned each day.', 'Ask an AI assistant to correct it and explain each change.', 'Keep a list of your five repeated mistakes.', 'Pick your best five and read them aloud.'],
    proof: ['Thirty dated pieces', 'The mistakes list', 'Your best five'],
    examples: { school: 'Write about one thing you learned each day.', college: 'Write about one lecture or project a day.', early: 'Write about one work lesson a day.', experienced: 'Write about one decision or lesson a day.' } },
  { id: 'english_write-2', skill: 'english_write', level: 2, title: 'Publish four posts and one case study', outcome: 'Four posts and a case study, public, with audience feedback.', hours: 16,
    steps: ['Pick one topic you know well.', 'Write and publish a post a week.', 'Ask two people where they got lost.', 'Turn your best work into a one-page case study.'],
    proof: ['Four public links', 'Feedback from two people', 'The case study'],
    examples: { school: 'Posts about a hobby or a school project.', college: 'Posts about a project, a course or an internship.', early: 'Posts about what you are learning at work.', experienced: 'Posts from your experience, with a case study.' } },
  { id: 'english_write-3', skill: 'english_write', level: 3, title: 'Write something that earns or wins', outcome: 'A proposal, product page or application that gets a reply or a decision.', hours: 14,
    steps: ['Choose a real opportunity such as a small project, a scholarship or a client.', 'Write using problem, proof and next step.', 'Send it and follow up once.', 'Record the response and what you would change.'],
    proof: ['The document', 'The reply', 'A note on what to change'],
    examples: { school: 'A scholarship or programme application.', college: 'An internship or fellowship application.', early: 'A proposal for a small project.', experienced: 'A proposal or product page for your service.' } },
  // English speaking
  { id: 'english_speak-1', skill: 'english_speak', level: 1, title: 'Twenty-one days of speaking practice', outcome: 'Twenty-one recordings of two minutes with a progress note.', hours: 8,
    steps: ['Record two minutes a day on a topic you know.', 'Listen once and pick one thing to improve.', 'Practise a 60-second introduction until it is steady.', 'Say it to one person.'],
    proof: ['Dated recordings', 'Three progress notes', 'Your introduction in writing'],
    examples: { school: 'Talk about your day or a book.', college: 'Talk about a project or a topic from class.', early: 'Talk about your work in simple words.', experienced: 'Practise explaining your work to a customer.' } },
  { id: 'english_speak-2', skill: 'english_speak', level: 2, title: 'Give three short talks and collect feedback', outcome: 'Three talks of five minutes with written feedback.', hours: 12,
    steps: ['Choose a topic for each talk.', 'Give each one to a live audience or on a call.', 'Ask for two things done well and one to improve.', 'Redo the weakest one.'],
    proof: ['Three talk outlines', 'Feedback notes', 'A recording of the best one'],
    examples: { school: 'Talks in class or to family.', college: 'Talks in a club or seminar.', early: 'A team update or lunch-and-learn.', experienced: 'A customer or community presentation.' } },
  { id: 'english_speak-3', skill: 'english_speak', level: 3, title: 'Run a session or a call that leads to a decision', outcome: 'A workshop, interview or sales call recording with the result.', hours: 14,
    steps: ['Choose a session where someone must decide something.', 'Prepare an opening, three points and a clear ask.', 'Run it and record or note what happened.', 'Write what you would do differently.'],
    proof: ['Session plan', 'The decision or reply', 'Your review'],
    examples: { school: 'Lead a school event announcement or a debate round.', college: 'Run a club workshop or mock interview.', early: 'Lead a client or internal call.', experienced: 'Run a customer meeting or a workshop.' } },
  // Marketing
  { id: 'marketing-1', skill: 'marketing', level: 1, title: 'Four-week content test on one channel', outcome: 'A sheet of twelve posts with views, saves and messages, and three lessons.', hours: 12,
    steps: ['Write audience, message, channel, offer and measure in one line each.', 'Post three times a week for four weeks.', 'Record the numbers weekly.', 'Write three lessons and one change.'],
    proof: ['Twelve post links', 'A numbers sheet', 'Three written lessons'],
    examples: { school: 'Share what you learn about one hobby.', college: 'Promote a club event or a project.', early: 'Build your own profile on LinkedIn.', experienced: 'Share expertise to attract enquiries.' } },
  { id: 'marketing-2', skill: 'marketing', level: 2, title: 'Run a small campaign with a clear goal', outcome: 'A campaign report with goal, actions, numbers and what to change.', hours: 20,
    steps: ['Pick a real event, shop or service and one numeric goal.', 'Plan three actions such as posts, messages and a search page.', 'Track results daily in a sheet.', 'Write the report.'],
    proof: ['The goal in writing', 'The results sheet', 'The report'],
    examples: { school: 'Promote a school fair stall.', college: 'Promote a fest or a workshop.', early: 'Help a small business get enquiries.', experienced: 'Run a launch for your service.' } },
  { id: 'marketing-3', skill: 'marketing', level: 3, title: 'Get leads or sales for someone', outcome: 'A case study with leads or orders, cost and what was learned.', hours: 30,
    steps: ['Agree a goal with a real business or your own offer.', 'Run for four weeks.', 'Record leads and cost.', 'Write the case study and ask for a reference.'],
    proof: ['Leads or orders list', 'The case study', 'A reference'],
    examples: { school: 'Support a family business with a poster and messages.', college: 'Run a promotion for a local business.', early: 'Run a paid or organic campaign for a small client.', experienced: 'Run lead generation for your own service.' } },
  // Sales
  { id: 'sales-1', skill: 'sales', level: 1, title: 'Ten polite outreach messages', outcome: 'A log of ten messages, replies and what you learned.', hours: 6,
    steps: ['List ten people or businesses who might need your skill.', 'Write a short message with one clear help and one proof.', 'Send and follow up once.', 'Record replies and the reasons given for no.'],
    proof: ['The outreach log', 'Replies', 'Three lessons from the no answers'],
    examples: { school: 'Offer help to a relative or neighbour with a small task.', college: 'Offer a skill to a local shop or club.', early: 'Offer a skill to a small business outside work.', experienced: 'Offer your skill to people in your network.' } },
  { id: 'sales-2', skill: 'sales', level: 2, title: 'Write and test a one-page offer', outcome: 'A one-page offer tested with five people, with changes noted.', hours: 10,
    steps: ['Write who it is for, what they get, how long it takes and the price.', 'Show it to five people.', 'Note objections.', 'Rewrite and test with five more.'],
    proof: ['The offer', 'Objection notes', 'The second version'],
    examples: { school: 'Offer a tutoring or notes service within your school rules.', college: 'Offer design, notes or coding help.', early: 'Offer a side service in your skill.', experienced: 'Offer a package for your experience.' } },
  { id: 'sales-3', skill: 'sales', level: 3, title: 'Close a first paid task', outcome: 'One paid task with a written testimonial and the numbers tracked.', hours: 16,
    steps: ['Choose the best offer from your tests.', 'Talk to five people about it.', 'Agree scope and price in writing.', 'Deliver, then ask for a testimonial.'],
    proof: ['Agreement in writing', 'The delivery', 'A testimonial'],
    examples: { school: 'Where rules allow, a small paid task with adult agreement.', college: 'A first freelance task.', early: 'A paid task outside your job.', experienced: 'A paid project or retainer.' } },
  // Proof
  { id: 'proof-1', skill: 'proof', level: 1, title: 'Create a home for your work', outcome: 'A free portfolio page or public profile with your first piece.', hours: 4,
    steps: ['Pick a platform: GitHub Pages, a free site or LinkedIn Featured.', 'Add one finished piece with problem, what you made and result.', 'Write one line about who you help.', 'Share the link with two people.'],
    proof: ['The page link', 'One finished piece', 'Two replies'],
    examples: { school: 'A project folder with photos and notes.', college: 'A portfolio page with one project.', early: 'A Featured section with one case study.', experienced: 'A page with one case study.' } },
  { id: 'proof-2', skill: 'proof', level: 2, title: 'Three proof pieces and one testimonial', outcome: 'A portfolio with three pieces and one written testimonial.', hours: 20,
    steps: ['Finish two more pieces.', 'Write the problem and result for each.', 'Ask for one testimonial.', 'Share the portfolio in three places.'],
    proof: ['Three pieces', 'A testimonial', 'Shares'],
    examples: { school: 'Three projects across subjects.', college: 'Three projects and one internship note.', early: 'Three case studies from work or side tasks.', experienced: 'Three case studies from experience.' } },
  { id: 'proof-3', skill: 'proof', level: 3, title: 'First earnings tracked and repeatable', outcome: 'A record of paid work with a standard offer and a repeat process.', hours: 24,
    steps: ['Track every paid task with date, skill, buyer and amount.', 'Write a standard offer.', 'Ask each buyer for a referral.', 'Review monthly what to repeat.'],
    proof: ['The income record', 'The standard offer', 'Referrals'],
    examples: { school: 'A tracked record of any small paid or voluntary tasks.', college: 'A record of freelance tasks.', early: 'A record of paid side work.', experienced: 'A record of paid projects and repeat buyers.' } },
];

export const projectsFor = (skill: string) => PROJECTS.filter((p) => p.skill === skill).sort((a, b) => a.level - b.level);
export const projectById = (id: string) => PROJECTS.find((p) => p.id === id);
