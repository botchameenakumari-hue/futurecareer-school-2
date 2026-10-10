// Parent/guardian audience for the confused-after-10th test, plus phrases to
// use and a four-step plan per stage for all three self-rating tests.
// General guidance only: no statistics, norms or outcome claims.
import type { SkillTestId } from './skillSelfTests';
import type { ExtraQuestion, StageAdvice } from './skillSelfTestExtras';

const p = (d: string, text: string, tip: string, up: string, reverse = false): ExtraQuestion =>
  reverse ? { d, text, stages: ['parent'], tip, up, reverse } : { d, text, stages: ['parent'], tip, up };

export const PARENT_QUESTIONS: ExtraQuestion[] = [
  p('self', 'I can name two or three subjects or activities that my child enjoys.', 'Ask your child to name the three things they enjoyed most this year, and write down your own guess first. Compare the two lists.', 'Keep a running note for two weeks of what your child chooses to do in free time. Share it with them and ask what they would add.'),
  p('self', 'Before I suggest a stream or course, I ask my child what they enjoy.', 'Keep this habit and add one follow-up: ask what makes it enjoyable. The reason shows more than the subject name does, and you can listen to the full answer before you mention streams.', 'Write down the reason your child gives each time and ask a follow-up the next time. Tell them what you learned from their answers.'),
  p('self', 'I can describe my child\'s strengths with examples, not only marks.', 'Write down two examples for each strength you see, such as a project, a task they took up on their own, or help they gave.', 'Ask a teacher or coach for one more example that you have not seen, and add it to the list with the source.'),
  p('self', 'I tend to assume what suits my child based on my own career or on relatives\' careers.', 'Notice when you reach for a family example. Ask whether your child\'s strengths and interests match it.', 'When a family example comes to mind, say it as one possibility and ask your child what looks similar or different. Treat it as a comparison, not an answer.', true),
  p('options', 'I know what the Science, Commerce, Arts, diploma and ITI routes involve after Class 10.', 'Read the official description of each route once, so that both of you start from the same facts.', 'Choose one route you know least and ask your child to explain what they have read about it. Fill gaps together from the official page.'),
  p('options', 'I have read the official pages of the routes my child is considering.', 'Use the official board, institute and skill-department pages for eligibility, fees and dates, and print or save them for the family talk.', 'Check the date on each page and note when it was last updated. Ask the school office to confirm any rule you are unsure of.'),
  p('options', 'I know what each route leads to in terms of work, not only the exam or college.', 'For each route, find three jobs it leads to and what they involve day to day.', 'Ask someone working in each field for a typical day and a typical first role, and write the answers beside your three jobs.'),
  p('options', 'My view of careers comes mainly from a few relatives or neighbours.', 'Add two sources that are not family: an official page and someone working in the field.', 'Add two sources outside the family: one official page and one person in the field. Note where they agree with or differ from what relatives and neighbours said.', true),
  p('pressure', 'I can accept a choice for my child that is different from the one I would pick.', 'Ask yourself what would have to be true for you to accept that choice, and then ask your child to show you that evidence.', 'Write down the evidence your child gives for their choice and review it together after a few weeks. Say what you now find convincing.'),
  p('pressure', 'I compare my child with other children\'s choices when deciding.', 'Compare your child with their own earlier self instead: strengths, effort and growth.', 'When a comparison comes up, turn it into a question about your child\'s own progress. Note one change you have seen in them this term.', true),
  p('pressure', 'When my child explains why they prefer a route, I often start answering before they finish.', 'Give your child five uninterrupted minutes. Then say their reasons back in your own words and ask if you got them right, before you give your view.', 'Try a pause of three seconds after each sentence your child says. Count how many times you waited this week, and ask them if they felt heard.', true),
  p('pressure', 'Worry about what relatives will say about the stream or its income often outweighs, for us, the question of whether it suits my child.', 'This worry is common in families. List what matters to the family and what matters to your child, and look at where the two lists agree and where they do not.', 'Ask one relative what specifically worries them and find a fact for it. Share the findings with your child before you share them with the relative.', true),
  p('process', 'We have discussed two or three options using the same points of comparison.', 'Agree on four points to compare, such as subjects, cost, what it leads to and how easy it is to change later.', 'Write the four points on one page and ask your child to add one of their own. Use the same page for each route.'),
  p('process', 'I am comfortable with my child choosing a good route that may need adjusting later, instead of a perfect one.', 'Check together how the route can be adjusted later, for example a change of subject combination where the board allows it, so the decision does not feel final.', 'Look up one example of someone who adjusted their route after a year and what it took. Talk with your child about which adjustment would be easiest.'),
  p('process', 'When someone new gives us advice, we treat it as input and do not change the plan straight away.', 'Agree on which sources the family will rely on, and keep a list of advice from others to discuss together instead of acting on each piece.', 'Write the advice on a list and review it once a week. For each piece, ask whether it adds a new fact or only an opinion.'),
  p('process', 'We have agreed on a date by which the decision will be made.', 'Pick that date now, add a review date a few months later, and write both where your child can see them.', 'Check progress against the date in a ten-minute weekly check-in. If the date needs to move, agree the new one together.'),
  p('action', 'I have spoken to a teacher or counsellor at school about my child\'s options.', 'Ask the school for a short meeting and bring two or three specific questions.', 'Bring the school\'s written notes to the next family talk and ask the teacher what the next steps could be. Share what you learned with your child.'),
  p('action', 'We have a list of next steps with a name and a date against each.', 'Write three next steps with an owner and a date. Review them at your next conversation.', 'Set a weekly ten-minute review of the list at a fixed time. Let your child tick done steps and add the next one.'),
  p('action', 'I am putting off the discussion because I expect an argument.', 'Choose a calm moment, start with a question, and say you want to hear their view first.', 'If you expect an argument, tell your child at the start that you want to listen first. Keep the first talk to ten minutes and pick a time when neither of you is tired.', true),
  p('action', 'I have made room in the week for my child to try a skill beyond the syllabus.', 'Ask your child which skill they would like to try, such as typing, drawing or a language, and fix two short slots a week for it.', 'Ask your child to show you something they made or learned in that skill each month. Notice it and ask one curious question about it.'),
];

export const PARENT_BANDS = {
  high: 'This area looks well supported.',
  mid: 'This area is partly in place, with gaps worth closing.',
  low: 'This is the area to work on first.',
};

export const PARENT_DOMAINS: Record<string, { short: string; strong: string; weak: string }> = {
  self: { short: 'Knowing your child\'s strengths and interests', strong: 'You can describe what your child enjoys and does well, with examples.', weak: 'You may be relying on assumptions about what suits your child more than on what they enjoy and do well.' },
  options: { short: 'Knowing the routes and where they lead', strong: 'You know what the main routes involve and where they lead, from reliable sources.', weak: 'Your picture of the routes may come from a few opinions, so some options may be missing or misunderstood.' },
  pressure: { short: 'Room for your child\'s own voice', strong: 'Your child\'s reasons are heard and weighed alongside the family\'s views.', weak: 'Family expectations or comparisons may be outweighing your child\'s own reasons.' },
  process: { short: 'A clear way to decide together', strong: 'You have a shared way to compare options and a date to decide and review.', weak: 'The decision may be drifting with each new opinion, without shared points of comparison.' },
  action: { short: 'Steps taken so far', strong: 'You have taken concrete steps, such as speaking to the school and listing next actions.', weak: 'The decision may be waiting while the discussion is put off.' },
};

export const PARENT_DEEP: Record<string, {
  why: string; routine: string[]; mistakes: string[]; proof: string[]; midStep: string; askOthers: string;
}> = {
  self: {
    why: 'Children are usually better supported when the adults around them can say what they actually enjoy and do well. Without it, the loudest example in the family becomes the default.',
    routine: ['Days 1 to 3: Ask your child to list what they enjoyed most this year and why, and listen without correcting.', 'Days 4 to 7: Write what you have noticed them do well, with one example for each, before you look at their list.', 'Days 8 to 11: Compare the two lists together, talk about where they match, and ask for an example where they differ.', 'Days 12 to 14: Ask one teacher where your child does their best work, and add it to a shared one-page list of interests and strengths.'],
    mistakes: ['Assuming what suits your child from your own career.', 'Judging strengths only by marks.', 'Treating a single comment from a teacher as the full picture.'],
    proof: ['A short shared list of interests and strengths with examples.', 'A note from a teacher on what your child does well.'],
    midStep: 'Ask your child for one example of a time they lost track of time doing something, and what it was.',
    askOthers: 'Ask a teacher, "Where have you seen my child do their best work?"',
  },
  options: {
    why: 'Most parents know one or two routes well and others by hearsay. Reading the same official pages as your child gives you both the same facts to discuss.',
    routine: ['Days 1 to 3: Read one official page for each route your child is considering, including diploma or ITI if it is on the list.', 'Days 4 to 7: Note eligibility, duration and what each route leads to on one page, and mark what you could not find.', 'Days 8 to 11: Talk to one person doing work that each route leads to, using questions your child has written.', 'Days 12 to 14: Sit down together, drop the weakest route and keep two for the final comparison.'],
    mistakes: ['Relying on a single relative\'s experience.', 'Overlooking diploma, ITI and open schooling because they are less familiar.', 'Treating a college name as a career plan.'],
    proof: ['A one-page comparison of the routes with sources.', 'Notes from a conversation with someone in the field.'],
    midStep: 'Choose two routes you know least about and read about them together this week.',
    askOthers: 'Ask a school counsellor, "Which routes are open at my child\'s marks, and which need a minimum?"',
  },
  pressure: {
    why: 'Children decide better when they can say their reasons aloud without being overruled. Family views matter, and they work best as input, not as the answer.',
    routine: ['Days 1 to 3: Ask your child to explain their preference, and listen for five minutes without interrupting.', 'Days 4 to 7: Write the family\'s concerns and your child\'s reasons side by side on one page.', 'Days 8 to 11: Find one fact for each concern, from an official page or a person in the field, and share them with your child.', 'Days 12 to 14: Hold a second talk to agree what is settled, what is still open and who should join the next one.'],
    mistakes: ['Comparing your child with cousins or neighbours.', 'Letting status or salary decide before fit.', 'Winning an argument and losing trust.'],
    proof: ['A two-column list of concerns and facts.', 'An agreement to review the choice after a few months.'],
    midStep: 'In the next talk, summarise your child\'s reasons back to them before you share your view.',
    askOthers: 'Ask your child, "What do you want me to understand about your choice?"',
  },
  process: {
    why: 'A shared method turns a stressful argument into a comparison. It also makes the choice easier to adjust later because you both know why it was made.',
    routine: ['Days 1 to 3: Agree four points of comparison with your child, such as interest, subjects, cost and ease of changing later.', 'Days 4 to 7: Score each shortlisted route on the four points separately, then compare the two sheets.', 'Days 8 to 11: Talk through any point where your scores differ and note the fact each of you relied on.', 'Days 12 to 14: Fix a decision date and a review date, and write both where your child can see them.'],
    mistakes: ['Waiting for a perfect answer.', 'Changing the plan after each new opinion.', 'Treating the decision as permanent.'],
    proof: ['A scoring sheet with dates.', 'A short note on why the choice was made.'],
    midStep: 'Write the four points you will compare and score two routes this week.',
    askOthers: 'Ask your child, "What matters most to you in the choice?"',
  },
  action: {
    why: 'Decisions move when someone owns the next step. A short list with names and dates beats a long discussion.',
    routine: ['Days 1 to 3: List three next steps with an owner and a date, and let your child pick the first one.', 'Days 4 to 7: Book a short meeting with a teacher or counsellor and write down the questions to bring.', 'Days 8 to 11: Complete the steps that have dates this week and note anything that was harder than expected.', 'Days 12 to 14: Review the list together, tick what is done and set the next three steps.'],
    mistakes: ['Postponing the talk to avoid conflict.', 'Leaving admission steps to the last minute.', 'Taking all the steps yourself without involving your child.'],
    proof: ['A step list with dates and ticks.', 'Notes from the teacher or counsellor meeting.'],
    midStep: 'Book one conversation with a school counsellor or teacher and bring three questions.',
    askOthers: 'Ask your child, "What is one step you want to take this week?"',
  },
};

export const PARENT_STAGE = {
  key: 'parent',
  label: 'I am a parent or guardian',
  description: 'Answering about my child after Class 10',
  title: 'Support the decision without making it for them',
  body: 'As a parent, you are most useful as a source of facts, questions and steady support. The decision works best when your child owns it and you help with information, structure and dates.',
  actions: [
    'Start conversations with a question, such as "What do you enjoy most at the moment?"',
    'Share facts from the same official sources your child uses.',
    'Agree a date to decide, a date to review, and what would make you change the plan.',
  ],
};

export const DOMAIN_PHRASES: Record<SkillTestId, Record<string, string[]>> = {
  'confused-after-10th': {
    self: ['"The three things I enjoyed most this year were..., because..."', '"People say I am good at..., and I noticed that when I..."', '"I am not sure yet, so I will try ... to find out."'],
    options: ['"Can you tell me what a typical day looks like in your job?"', '"What are the entry rules for this route, and where do I check them?"', '"What does this course lead to besides the obvious job?"'],
    pressure: ['"I understand why you prefer this. Can I tell you my reasons, and then you tell me yours?"', '"Here are the facts I found about both options. Can we look at them together?"', '"I would like to try this and review it after a few months. If marks and interest are not working, we can look at changing."'],
    process: ['"I will compare both options on these four points."', '"I will decide by this date and review it by this date."', '"A good-enough choice I can adjust is better than waiting for a perfect one."'],
    action: ['"Can I meet you for twenty minutes to ask three questions about this route?"', '"My next three steps are..."', '"I will start with one step today: ..."'],
  },
  communication: {
    listen: ['"Let me check I understood: you are saying that..."', '"Can you tell me more about that part?"', '"What is the most important thing for you here?"'],
    speak: ['"The short answer is..., and the reason is..."', '"There are two main points. First..., second..."', '"I do not know that yet. I will find out and tell you by..."'],
    write: ['"Could you please ... by ...? The reason is ..."', '"Summary: ... Next steps: ... What I need from you: ..."', '"Here are the details if useful, but the key request is in the first line."'],
    feedback: ['"Thank you. Can you give me one example so I can fix it?"', '"I see the aim. My concern is ..., and an alternative could be ..."', '"When ... happened, the effect was ... Could we ... next time?"'],
    present: ['"By the end of this talk you will know ..."', '"Here is one example that shows this ..."', '"To sum up, the three points are ..."'],
  },
  'soft-skills': {
    lead: ['"Here is a simple plan. Does this work for everyone?"', '"I will take ... Could you take ...?"', '"What would help you do this better?"'],
    team: ['"I noticed you may be stuck. What would help?"', '"Great work on ... That helped the whole team."', '"I see it differently. Can I share why?"'],
    adapt: ['"Given the change, what is the new priority?"', '"What did we learn from this that we can use next time?"', '"I will try a different way and see."'],
    own: ['"I will have this ready by ... I will update you if that changes."', '"I will miss the date. I can deliver ... now and the rest by ..."', '"Here is what is done and what is next."'],
    solve: ['"What does done look like for this task?"', '"I tried A and B. Do you have a suggestion for C?"', '"Here are two options and my recommendation."'],
  },
};

const plan = (...s: string[]) => s;
export const STAGE_PLAN: Record<SkillTestId, Record<string, string[]>> = {
  'confused-after-10th': {
    before: plan('Pick two or three routes and read one official page for each.', 'Note which routes need a minimum mark and which do not.', 'Talk to one person doing work linked to each route.', 'Plan how you will compare routes on the same points after results.'),
    choosing: plan('Verify eligibility, fees and dates for each route on the official page.', 'Score your top options on the same four points.', 'Hold one calm conversation with your family about your top two.', 'Choose, set a review date, and complete the first admission step.'),
    chosen: plan('Write the reason for your choice in one sentence.', 'Learn your switching and bridging options.', 'Start one skill beyond the syllabus.', 'Set a review date and check marks, interest and effort.'),
    parent: plan('Ask your child what they enjoy and listen without interrupting.', 'Read the official pages for two or three routes together.', 'Agree four points of comparison, a decision date and a review date.', 'Book a conversation with a teacher or counsellor.'),
  },
  communication: {
    school: plan('Practise a one-minute answer: answer, reason, example.', 'Write a three-line plan before each written answer.', 'Volunteer for one small speaking task.', 'Ask a teacher for one feedback point on your speaking or writing.'),
    college: plan('Practise a two-minute explanation of your best project.', 'Rewrite one email with the request in the first line.', 'Join a group discussion practice and review your points.', 'Ask a senior to review your resume and an email.'),
    fresher: plan('Write and practise a three-part self-introduction.', 'Turn each resume line into an action and a result.', 'Practise interview answers with follow-up questions.', 'After each interview or task, ask for one improvement point.'),
    professional: plan('End each meeting with a two-line recap and owners.', 'Use done, next, need, by when for every update.', 'Practise explaining one complex point in plain words.', 'Next time you push back, offer an alternative with it.'),
  },
  'soft-skills': {
    school: plan('This week, write every homework and project date on one page, with your own earlier date beside each.', 'In your next group task, take a role and check that every member has one.', 'Test one new study method for a week and keep it only if it helps.', 'Next time you are stuck, show your teacher what you tried before you ask.'),
    college: plan('Take one job in a club or project that others depend on, and finish it visibly.', 'Agree roles and dates at the first meeting of each group project.', 'Join one activity outside the syllabus for a full term.', 'At the end of a project, ask teammates what worked and what did not.'),
    fresher: plan('Close each task with a short message saying what is done.', 'List the tools and processes your team uses and learn the commonest first.', 'When you ask for help, say what you tried and what you need.', 'Warn people at the first sign that a deadline is at risk.'),
    professional: plan('When delegating, state the outcome, the deadline and a check-in point.', 'Find out what other teams are measured on before asking them for help.', 'Pick one capability that each change lets you build.', 'Review your commitments on a fixed day each week and flag risks early.'),
  },
};

export const PARENT_STAGE_ADVICE: Record<string, StageAdvice> = {
  self: { situation: 'As a parent, knowing your child\'s strengths and interests from their own words gives your support a firm base.', actions: ['Ask your child to name the three things they enjoyed most this year, and write your own guess before you hear the answer.', 'Share two strengths you have noticed, with an example for each, and ask whether your child agrees.'] },
  options: { situation: 'As a parent, learning the routes from official sources lets you discuss facts, not opinions.', actions: ['Read one official page for each route under consideration, so both of you work from the same facts.', 'Find someone working in the field and arrange a fifteen-minute conversation, using questions your child has written.'] },
  pressure: { situation: 'As a parent, giving your child room to explain their reasons makes the decision theirs and the support yours.', actions: ['Listen for five minutes without interrupting, then say back what you heard before you give your view.', 'List each family concern and match it with a fact, so the talk is about evidence and not about who is more certain.'] },
  process: { situation: 'As a parent, a shared method keeps the decision calm.', actions: ['Agree four points of comparison with your child, such as interest, subjects, cost and ease of changing later.', 'Set a decision date and a review date a few months on, and write both where your child can see them.'] },
  action: { situation: 'As a parent, turning the discussion into dated steps keeps the decision moving.', actions: ['Write three next steps, each with an owner and a date, and let your child choose which to do first.', 'Book a short meeting with a teacher or counsellor and bring two or three specific questions.'] },
};
