// Stage-specific additions for the self-rating tests in skillSelfTests.ts:
// extra statements asked only at certain stages, and advice written for each
// stage and score area. General guidance only: no statistics, norms or hiring claims.
import type { SkillTestId } from './skillSelfTests';

export type ExtraQuestion = { d: string; text: string; stages: string[]; tip: string; reverse?: boolean };
export type StageAdvice = { situation: string; actions: string[] };

const x = (stages: string[], d: string, text: string, tip: string, reverse = false): ExtraQuestion =>
  reverse ? { d, text, stages, tip, reverse } : { d, text, stages, tip };

export const EXTRA_QUESTIONS: Record<SkillTestId, ExtraQuestion[]> = {
  'confused-after-10th': [
    x(['before'], 'self', 'I have noticed which topics I read about or watch without anyone asking me to.', 'Keep a short note for a week of what you read or watch by choice. Topics that repeat are real interest signals.'),
    x(['before'], 'options', 'I know which routes stay open to me whatever my board marks turn out to be.', 'List which routes need a minimum mark and which do not, such as skill courses or open schooling, so one result never feels like the end of the road.'),
    x(['before'], 'pressure', 'I can talk about my plans with my family without feeling I must already have the final answer.', 'Tell your family you are still exploring and will bring two or three options to compare once results are out.'),
    x(['before'], 'action', 'I have a plan to use the time after exams to explore, not only to rest.', 'Set aside a few sessions after the exams for one task each: read about one route, speak to one person, try one small project.'),
    x(['choosing'], 'options', 'I know the eligibility rules and last dates for the schools or courses I am considering.', 'Open the official website of each board or institute you are considering and write down eligibility, fees and last dates in one place.'),
    x(['choosing'], 'process', 'I have compared at least two options on the same points, such as subjects, cost, travel and what each leads to.', 'Make a small table with the same rows for each option. Comparing on the same points exposes what a feeling hides.'),
    x(['choosing'], 'pressure', 'My choice would still make sense to me if my closest friends chose differently.', 'Ask yourself whether you would choose this if nobody you know chose it. If the answer is no, find out what is really pulling you.'),
    x(['choosing'], 'action', 'I know whom to ask, at school or at home, for the exact admission steps.', 'Name one person at school and one at home who can confirm admission steps and dates, and ask them this week.'),
    x(['chosen'], 'self', 'I can say in one sentence why I picked my stream or course.', 'Write that sentence down. If it is only "everyone took it", spend time finding one real reason, because it will carry you through hard months.'),
    x(['chosen'], 'options', 'I know what I can do later if this choice turns out wrong, such as switching, adding a course or building a skill.', 'Learn the actual switching and bridging options for your board. Knowing the exit makes a wrong turn recoverable.'),
    x(['chosen'], 'process', 'I have a way to check after a few months whether this choice suits me, using real signs like marks, interest and effort.', 'Pick three signs you will review, such as marks trend, time you spend by choice and how you feel on test days, and set a review date.'),
    x(['chosen'], 'action', 'I have started building at least one skill beyond the syllabus that fits where I am heading.', 'Choose one small skill linked to your direction and practise it regularly. Proof of skill matters beyond marks.'),
  ],
  communication: [
    x(['school'], 'listen', 'In class I listen to the full explanation before I decide I have understood.', 'Wait for the full explanation, then repeat the key point in your own words to yourself or a friend before moving on.'),
    x(['school'], 'speak', 'I can answer a teacher\'s question in two or three clear sentences.', 'Practise answers in a fixed order: the answer first, then one reason, then one example.'),
    x(['school'], 'write', 'My written answers and letters have a clear start, middle and end.', 'Before writing, note one line for each part: what you will say, the support, and the close.'),
    x(['school'], 'present', 'I volunteer to speak or present in class or at school events.', 'Volunteer for one small speaking task, such as reading an announcement, to build comfort one step at a time.'),
    x(['college'], 'listen', 'In group projects I make sure I understand the task before I suggest solutions.', 'Restate the task in one sentence and get the group to confirm it before discussing how to do it.'),
    x(['college'], 'speak', 'I can explain my project or idea to a classmate or senior in under two minutes.', 'Time yourself explaining your project. Cut it until the main idea comes within the first twenty seconds.'),
    x(['college'], 'write', 'My emails to professors or placement officers are short, polite and clear about what I need.', 'Use a clear subject line, one request in the first line, and any details after it. Read it once as the receiver.'),
    x(['college'], 'feedback', 'I can accept a review or viva comment on my project without arguing or going silent.', 'When you get a comment, write it down, ask one clarifying question and thank the person before you respond to it.'),
    x(['fresher'], 'speak', 'I can introduce myself in an interview in a way that covers who I am, what I can do and what I want.', 'Prepare a short introduction in three parts: background, strongest skill with one example, and the role you want.'),
    x(['fresher'], 'write', 'My resume and application messages use specific results or examples instead of general claims.', 'Replace each general claim with one example that shows what you did and what changed because of it.'),
    x(['fresher'], 'present', 'I can handle follow-up questions in an interview without blanking.', 'Practise with a friend who asks "why" and "how" after each answer. Pause, breathe and answer one point at a time.'),
    x(['fresher'], 'feedback', 'I can ask an interviewer or senior for feedback after a rejection or a task.', 'Send a short, polite message asking for one thing to improve. Many people reply, and the answer is useful.'),
    x(['professional'], 'listen', 'In meetings I can summarise what was decided and who does what.', 'End each meeting with a two-line recap of decisions and owners, and send it in writing.'),
    x(['professional'], 'speak', 'I can explain a technical or complex point to a non-expert colleague or client.', 'Explain it using one comparison from daily life and one concrete example, then ask what is still unclear.'),
    x(['professional'], 'write', 'My status updates and emails let the reader act without asking me anything more.', 'Structure updates as: what is done, what is next, what you need and by when.'),
    x(['professional'], 'feedback', 'I can push back on a deadline or request with reasons and an alternative.', 'Name the constraint, give the impact, and offer one alternative date or scope instead of only saying no.'),
  ],
  'soft-skills': [
    x(['school'], 'team', 'In a group assignment I do my share and also check that others are not stuck.', 'Ask each teammate at the midpoint what they need. A short check prevents last-minute gaps.'),
    x(['school'], 'own', 'I submit homework and projects on time without being chased.', 'Write deadlines in one place and set yourself an earlier personal date for each.'),
    x(['school'], 'adapt', 'When a subject or teacher changes, I adjust my study method instead of giving up.', 'Try a different way of studying for a week, such as notes, practice questions or teaching a friend, and keep what works.'),
    x(['school'], 'solve', 'When I do not understand a topic, I try another resource before asking for the answer.', 'Try one other source, such as a video or a different book, then ask a specific question about what is still unclear.'),
    x(['college'], 'lead', 'In a club or project I have taken responsibility for something others depended on.', 'Take one small task that others rely on in a club or project, and complete it visibly. That is leadership evidence.'),
    x(['college'], 'team', 'In group projects I speak up if the workload is uneven.', 'Raise it early and kindly, with a suggestion for how to split the work, rather than waiting until it builds into a conflict.'),
    x(['college'], 'own', 'I spread my deadlines across subjects instead of leaving everything for the last day.', 'List all deadlines for the term and set a personal start date for each, working back from the due date.'),
    x(['college'], 'adapt', 'I have taken up something outside my course, such as a skill, role or event, and stuck with it.', 'Choose one activity beyond your syllabus and commit to it for a full term. Finishing it shows persistence.'),
    x(['fresher'], 'own', 'In an internship or first job I follow up on tasks without waiting to be asked.', 'Close the loop on each task: tell the person it is done, share the result and ask whether anything else is needed.'),
    x(['fresher'], 'adapt', 'I can learn a new tool or process quickly in a new team.', 'In the first days of a new role, write down the tools and processes used and learn the most frequent ones first.'),
    x(['fresher'], 'team', 'I ask colleagues for help in a way that respects their time.', 'Before asking, note what you tried and what you need. A specific, short question gets a faster, better answer.'),
    x(['fresher'], 'solve', 'When a task is unclear, I clarify the goal first and then start.', 'Write what done looks like in two lines and confirm it with the person who gave the task.'),
    x(['professional'], 'lead', 'I can delegate and still stay accountable for the result.', 'When delegating, state the outcome, the deadline and a check-in point, then follow up at that point.'),
    x(['professional'], 'team', 'I can work across teams where I have no authority.', 'Build agreement on a shared goal first, and show what each side gains before you ask for effort.'),
    x(['professional'], 'adapt', 'I stay effective during reorganisations, new tools or changes in my role.', 'List what is changing and what is not, and pick one new capability the change lets you build.'),
    x(['professional'], 'solve', 'I separate urgent from important and I say no to some requests.', 'Sort tasks by urgency and impact once a week, and decline or reschedule what does not serve your top priorities.'),
  ],
};

const sa = (situation: string, a: string, b: string): StageAdvice => ({ situation, actions: [a, b] });

export const STAGE_ADVICE: Record<SkillTestId, Record<string, Record<string, StageAdvice>>> = {
  'confused-after-10th': {
    before: {
      self: sa('Before results, you do not need a final answer, but you do need evidence about yourself.', 'Note which subjects you pick up first when you have free time and which tasks make time pass quickly.', 'Ask one teacher and one family friend what they have seen you do well, and compare with your own list.'),
      options: sa('Before results, learning the options costs nothing and keeps you ready for any outcome.', 'Read what each of Science, Commerce, Arts, diploma and ITI involves for the next two years, one page per route.', 'Find out which routes are open to you at different mark levels so you are not surprised on result day.'),
      pressure: sa('Before results, family opinions are loud and your own view is still forming.', 'Share your shortlist of two or three routes with your family and ask them to compare them with you, not pick for you.', 'Write your reasons for each route so that the conversation is about reasons, not about who is more certain.'),
      process: sa('Before results, a method helps you decide calmly once marks arrive.', 'Choose three or four points to judge every option on, such as subjects, cost, where it leads and what you enjoy.', 'Agree in advance with yourself that you will decide within a set period after results rather than waiting for a perfect answer.'),
      action: sa('Before results, small actions beat waiting.', 'Do one exploration task a week: read, watch, or speak to someone doing the work you are curious about.', 'Keep exam preparation going. Strong marks keep more routes open.'),
    },
    choosing: {
      self: sa('With results out, your marks are one fact; your interests and strengths are the others.', 'Match your strongest two or three subjects and tasks to the routes you are weighing, and note where they agree.', 'Treat the choice as a direction you can adjust, not as a lock for life.'),
      options: sa('With results out, the gap is usually exact rules, not general ideas.', 'Check eligibility, fees, dates and seat rules on the official page of every route you shortlist.', 'Speak to someone who has done each route and ask what they would do differently.'),
      pressure: sa('At the point of choosing, others\' opinions can drown out your reasons.', 'Hold one calm conversation with your family where you present your top two options and your reasons for each.', 'Ask what worries them specifically, then find facts that address each worry.'),
      process: sa('Choosing needs a way to decide, not a wait for certainty.', 'Score each shortlisted route on the same points, then sleep on the result before you decide.', 'Pick the option that is good on your points and recoverable if wrong, instead of waiting for the perfect one.'),
      action: sa('The decision window is real, so convert thinking into steps.', 'Write the next three actions, such as documents, forms and conversations, each with a date.', 'Do the first one today so the decision starts moving.'),
    },
    chosen: {
      self: sa('Having chosen, understanding yourself helps you choose subjects and skills inside the route.', 'Notice what you enjoy inside your route and use it to pick optional subjects, projects and skills.', 'Revisit your strengths regularly. They change as you learn.'),
      options: sa('Having chosen, the useful question is where your route leads and what can be added to it.', 'Map three possible careers from your route and the skills each one asks for.', 'Learn the bridging and switching options so you know your choice is not a trap.'),
      pressure: sa('Having chosen, others\' views continue, and you need a steady answer to them.', 'Prepare a short, calm explanation of your choice and plan, and use it each time the topic comes up.', 'Share your first results with family to build trust in your choice.'),
      process: sa('Having chosen, a review habit keeps the decision honest.', 'Set a review date and check your three signs: marks, interest and effort.', 'Adjust early with small changes, such as subjects, study methods or added skills, before a big change is needed.'),
      action: sa('Having chosen, momentum comes from small, visible steps.', 'Pick one skill beyond the syllabus that fits your direction and practise it regularly.', 'Keep a simple record of what you finish, so proof builds without extra effort.'),
    },
  },
  communication: {
    school: {
      listen: sa('At school, listening is the base of learning and of friendships.', 'In each class, note the teacher\'s main point in one line before leaving.', 'Repeat what a friend told you in your own words to check you understood.'),
      speak: sa('At school, clear speaking starts with a main point.', 'Practise answering aloud in two or three sentences: answer, reason, example.', 'Record yourself once a week and listen for filler words and rambling.'),
      write: sa('At school, clear writing helps every subject.', 'Write a short plan of three lines before every answer or letter.', 'Read your work aloud once to find unclear sentences.'),
      feedback: sa('At school, feedback from teachers and friends is your fastest teacher.', 'When corrected, ask one question about how to improve instead of defending.', 'Give a friend one kind, specific piece of feedback this week.'),
      present: sa('At school, small talks build the confidence for later.', 'Start with a one-minute talk to a few friends and build up.', 'Practise out loud before any presentation, standing up, with a timer.'),
    },
    college: {
      listen: sa('In college, listening decides whether group work succeeds.', 'In group meetings, restate the task and each person\'s role before starting.', 'Note questions to ask after the speaker finishes instead of interrupting.'),
      speak: sa('In college, explaining your work clearly helps with projects, vivas and placements.', 'Explain your latest project to someone outside your branch and note where they get lost.', 'Practise a thirty-second summary of each project.'),
      write: sa('In college, emails and reports represent you to seniors and recruiters.', 'Rewrite one email using a clear subject line, request first, details after.', 'Ask a senior to review your resume and one cover message.'),
      feedback: sa('In college, reviews and vivas test how you handle comments.', 'After any review, write each comment down and answer it with action, not defence.', 'Practise disagreeing politely in group discussions with reasons.'),
      present: sa('In college, presentations and group discussions are placement rehearsal.', 'Present in classes or clubs regularly, even briefly, to make speaking normal.', 'Join or form a group-discussion practice group and review one another\'s points.'),
    },
    fresher: {
      listen: sa('As a fresher, careful listening to interviewers and seniors prevents avoidable mistakes.', 'In interviews and meetings, note the key question before answering and answer that question first.', 'Confirm instructions by repeating the key points back.'),
      speak: sa('As a fresher, your spoken answers carry your interview.', 'Prepare and practise a short introduction and three stories with results.', 'Practise answers aloud with a friend who can say when you wander.'),
      write: sa('As a fresher, your resume and messages are your first impression.', 'Make each resume line show an action and a result.', 'Write applications to a specific role, using words from its description truthfully.'),
      feedback: sa('As a fresher, handling feedback well builds trust fast.', 'Ask for feedback after every task and note one change you will make.', 'After a rejection, ask politely for one improvement point.'),
      present: sa('As a fresher, presenting is a part of interviews and early work.', 'Practise a five-minute talk about a project and a three-minute version.', 'Prepare for the questions that will follow, and practise calm, short answers.'),
    },
    professional: {
      listen: sa('As a working professional, listening well saves rework and builds authority.', 'Summarise requests back to the sender before you start work.', 'In meetings, finish with a short recap of decisions and owners.'),
      speak: sa('As a working professional, clear speaking decides how fast others act on your ideas.', 'Lead with the conclusion, then give two supporting points.', 'Adjust explanations for the listener: a technical colleague versus a client.'),
      write: sa('As a working professional, your writing is your work for people who cannot ask you.', 'Use a standard structure for updates: done, next, need, by when.', 'Keep emails short and cut anything that does not help the reader act.'),
      feedback: sa('As a working professional, feedback skills affect trust and promotion.', 'Give feedback soon after an event, specific to the behaviour and its impact.', 'When you disagree, offer an alternative along with your concern.'),
      present: sa('As a working professional, presentations show up in reviews and client work.', 'Structure each talk as problem, option, recommendation and ask.', 'Practise the opening and the answer to the most likely tough question.'),
    },
  },
  'soft-skills': {
    school: {
      lead: sa('At school, leadership starts with small responsibilities.', 'Offer to organise one small activity, such as a study group or a class task.', 'Ask a teacher or friend for one thing you did well as a leader and one to improve.'),
      team: sa('At school, teamwork is learnt in group assignments and sports.', 'In each group task, take a role and check that everyone has one.', 'Acknowledge a teammate\'s contribution aloud this week.'),
      adapt: sa('At school, new subjects and teachers test adaptability.', 'When something changes, list what you can control and start with that.', 'Try one new way of studying each month and keep what helps.'),
      own: sa('At school, reliability begins with homework and promises to friends.', 'Write your commitments in one notebook and tick them off.', 'Tell people early if you cannot do something.'),
      solve: sa('At school, problem solving grows by trying before asking.', 'Write what you tried before you ask for help.', 'Break each hard problem into parts and solve the first part.'),
    },
    college: {
      lead: sa('In college, clubs and projects are the place to show leadership.', 'Take responsibility for one deliverable in a project and finish it on time.', 'Ask your group for feedback on how you coordinate.'),
      team: sa('In college, team projects are your best practice for work.', 'Agree on roles and deadlines at the first meeting.', 'Raise issues early and kindly, with a suggestion.'),
      adapt: sa('In college, changing syllabus and environments reward flexibility.', 'Join one new activity or learn one new tool outside the syllabus.', 'When a plan fails, write one change to try next.'),
      own: sa('In college, reliability shows in how you handle deadlines.', 'Use a calendar for every deadline with an earlier personal date.', 'Report delays early, with a new date.'),
      solve: sa('In college, projects reward structured problem solving.', 'Write the problem, the options and the choice in three lines before building.', 'After each project, note what you would do differently.'),
    },
    fresher: {
      lead: sa('As a fresher, leadership means owning your piece and helping others.', 'Take one small task and own it fully, including updates.', 'Offer help to a newer colleague or intern.'),
      team: sa('As a fresher, being easy to work with matters as much as skill.', 'Learn each teammate\'s working style and adapt your updates to it.', 'Share credit openly in team updates.'),
      adapt: sa('As a fresher, new tools and teams come fast.', 'List the tools in your first weeks and learn the commonest ones first.', 'Ask for a short walk-through from a colleague, then practise on a small task.'),
      own: sa('As a fresher, reliability is how you earn bigger tasks.', 'Confirm deadlines, deliver on time and report early if delayed.', 'Close each task with a short message about what is done.'),
      solve: sa('As a fresher, showing you tried before asking builds respect.', 'Write what you tried, and one question, before asking.', 'Record solutions in a personal notebook for reuse.'),
    },
    professional: {
      lead: sa('As a professional, leadership shows in clarity, delegation and accountability.', 'State goals, success measures and deadlines every time you assign work.', 'Ask your team once a quarter what you could do better.'),
      team: sa('As a professional, cross-team work is a main source of impact.', 'Learn what each team is measured on and show how your request helps.', 'Hold short check-ins with key partners.'),
      adapt: sa('As a professional, change in tools and roles is regular.', 'Choose one capability each change lets you build.', 'Keep a short list of what is staying stable to anchor you.'),
      own: sa('As a professional, ownership decides trust and promotion.', 'Track commitments in one system and review it weekly.', 'Flag risks as soon as you see them, with a proposed fix.'),
      solve: sa('As a professional, structured problem solving is a core skill.', 'Use a repeatable method: define, list causes, test the likeliest, document.', 'Share what you learned so the team benefits.'),
    },
  },
};

export const PARENT_SECTION = {
  'confused-after-10th': {
    title: 'If you are a parent or guardian reading this result',
    body: [
      'The result is based only on your child\'s own ratings. Use it as a conversation starter, not as a verdict.',
      'Look at the lowest area first. If it is "Pressure from others", the most useful thing you can do is listen to your child\'s reasons before sharing your own.',
      'If it is "Knowing the options", sit together and read the official pages for two or three routes, so the facts come from the same source for both of you.',
      'Agree on a date to decide, and agree that the choice can be reviewed after a few months, so no one feels trapped.',
    ],
  },
} as Partial<Record<SkillTestId, { title: string; body: string[] }>>;
