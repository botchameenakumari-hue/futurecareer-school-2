// The detail layer for the self-rating tests in skillSelfTests.ts: a tip for
// every statement, a deeper guide for every score area, and stage-specific
// advice. Everything here is general guidance, not data. No statistics, norms,
// salary figures or hiring claims are made.
import type { SkillTestId } from './skillSelfTests';

export type DomainDepth = {
  why: string;
  roles: string[];
  /** Four blocks that make up a 14-day routine for this area. */
  routine: string[];
  mistakes: string[];
  proof: string[];
  askOthers: string;
  talkingPoints: string[];
  /** One concrete move that takes a middling score towards a strong one. */
  midStep: string;
};

export type StageOption = {
  key: string;
  label: string;
  description: string;
  title: string;
  body: string;
  actions: string[];
};

export type TestDepth = {
  stageHeading: string;
  stageNote: string;
  stages: StageOption[];
  /** One tip per statement, in the same order as the questions. Shown when that statement scored low. */
  tips: string[];
  /** Short line shown against statements the visitor rated highly. */
  strongTip: string;
  domains: Record<string, DomainDepth>;
  thirtyDay: string[];
};

const CONFUSED: TestDepth = {
  stageHeading: 'Where are you right now?',
  stageNote: 'Your answer changes the advice in your report, because the best next step depends on whether results are out and whether a stream is already chosen.',
  stages: [
    {
      key: 'before',
      label: 'In Class 10, results not out yet',
      description: 'Still studying or waiting for board results',
      title: 'Use the waiting time to explore, not to decide',
      body: 'Before results, the most useful work is learning, not choosing. You do not need a final stream now. You need a short list of two or three directions to compare once your marks are in.',
      actions: [
        'Pick two or three routes that look interesting and read what each involves for the next two years.',
        'Do not drop a route only because you fear your marks. Check the actual eligibility for it first.',
        'Keep your board preparation going. Strong marks keep more routes open.',
      ],
    },
    {
      key: 'choosing',
      label: 'Results are out, choosing a stream or course',
      description: 'Deciding between streams, diploma, ITI or other routes',
      title: 'Narrow to two routes and test them for a week each',
      body: 'With results in hand, you can check which routes are actually open. Put your marks, interests and the family budget side by side for two routes, and choose by evidence instead of by what sounds safest.',
      actions: [
        'Check admission rules and last dates for your two routes in your state this week. Dates and rules vary by state and by college.',
        'Talk to one person doing each route right now, a senior or a relative, and ask what a normal week looks like.',
        'Set a decision date and write it down. Decisions that have no date tend to drift.',
      ],
    },
    {
      key: 'chosen',
      label: 'Already chosen, but not sure it was right',
      description: 'In Class 11 or a course, feeling unsure',
      title: 'Check your choice against your evidence before changing it',
      body: 'Doubt in the first months is common and is not proof that the choice was wrong. First separate a difficult start from a real mismatch, then decide whether to adjust the plan or the route.',
      actions: [
        'Write down what is hard right now and whether it is the subject itself, the teaching, the workload or the pressure.',
        'Give it a fixed trial period, for example until your first major exam, and note what changes.',
        'If the doubt stays, talk to a teacher and your family about options such as a different combination, subject change where the board allows it, or a bridge course. Rules differ by board and state.',
      ],
    },
  ],
  tips: [
    'Make a list of the last ten school tasks you enjoyed and the ones you avoided. Patterns appear within a week.',
    'Read what one year of Science, Commerce and Arts looks like in practice: subjects, exams and the paths after Class 12. Our stream selector page can help you compare.',
    'Ask yourself which stream you would pick if nobody would ever know. Write the answer down, then compare it with what others suggest.',
    'Choose two or three points that matter, such as interest, strengths and future income, and score your top two routes on each one.',
    'Do one small thing this week, such as asking a senior or watching a day-in-the-life video, and note what you learned.',
    'Ask two people to tell you what you are good at. Write it next to your own list and look for overlaps.',
    'Look up diploma, polytechnic and ITI routes after Class 10 and note what each leads to and what it needs. They are real options, not a lesser choice.',
    'Prepare what you want to say before you talk to your family. Start with what you have found out, not with a demand.',
    'Pick a rule: you can change your choice only if a new fact comes in, not because another person has an opinion.',
    'Break the decision into one tiny step you can finish today, like writing the two routes you are comparing.',
    'Try new things in small ways, such as a free online lesson, a club or a short project. Interests usually show up from doing, not thinking.',
    'Choose five careers and find what a person in each does on an ordinary day. Skip titles and look at tasks.',
    'List what each important person wants for you and why. Often it is about worry for your future. Understanding the reason makes a calm talk possible.',
    'Decide on a good-enough option with a review date instead of searching for a perfect option.',
    'Write down the next two or three actions, for example check eligibility, talk to a senior, compare costs, and put a date next to each.',
    'Write down three things you do better than most people around you and one example for each.',
    'Check what you know against a second and third source, such as a teacher, an official admission site and a person working in the field.',
    'Practise a two-minute explanation of your reasons with a friend before the family conversation.',
    'Replace the search for a perfect answer with a test: pick the best option now and set a date to review it.',
    'Choose one action for this week and one for next week. Starting small removes the feeling of being stuck.',
  ],
  strongTip: 'This is already a strength. Keep using it.',
  domains: {
    self: {
      why: 'If you do not yet know what you enjoy or do well, every stream looks equally good or equally scary. Many students at this age are still finding this out, and the way to find out is by trying small things and noticing your reactions.',
      roles: ['Any stream or course you pick will go better when it matches your strengths', 'Interest-fit becomes more important in Class 11 and 12 and in college'],
      routine: [
        'Days 1 to 3: Write two lists, tasks you enjoyed in the last year and tasks you avoided, with one reason for each.',
        'Days 4 to 7: Ask two people who know you to tell you your strengths. Compare their answers with your own.',
        'Days 8 to 11: Try three small activities, such as a free online lesson, a short project or a club, and write how each felt.',
        'Days 12 to 14: Take the stream selector test after 10th and compare its result with your notes.',
      ],
      mistakes: ['Treating the subjects you score well in as the same as the ones you enjoy', 'Choosing from the marks of one exam instead of looking at a longer pattern'],
      proof: ['A one-page note of your strengths with an example for each', 'A short log of activities you tried and how each felt'],
      askOthers: 'What do I do better than most people you know, and when do you see me most absorbed?',
      talkingPoints: ['You can describe what you enjoy and give an example', 'You have tried things before deciding'],
      midStep: 'Add one real example to each strength you already named. Examples turn a feeling into evidence.',
    },
    options: {
      why: 'You cannot compare routes you do not know about. Many students choose from the two or three options they have heard of, often from one person, and never see the rest.',
      roles: ['Science, Commerce and Arts after Class 10', 'Diploma, polytechnic and ITI routes', 'Other routes that depend on your state and board'],
      routine: [
        'Days 1 to 3: Read one overview of every route after Class 10 and list the ones that sound new to you.',
        'Days 4 to 7: Choose three routes and find what the next two to three years of each involve, including exams.',
        'Days 8 to 11: Find one person in or from each route and ask what a normal week is like.',
        'Days 12 to 14: Drop the weakest one and keep two for the final comparison.',
      ],
      mistakes: ['Judging a route by its name rather than the work involved', 'Using one person as your only source of information'],
      proof: ['A comparison table of your two top routes', 'Notes from conversations with people in those routes'],
      askOthers: 'What do you know about the routes after Class 10 that most students do not?',
      talkingPoints: ['You can name several routes and what they lead to', 'You checked more than one source'],
      midStep: 'For each route you already know, find one fact you could not have guessed from its name. That is usually where real understanding starts.',
    },
    pressure: {
      why: 'When other people\'s expectations carry more weight than your own view, the decision gets stuck. The aim is not to ignore your family. It is to understand the reasons behind their view and to bring them facts.',
      roles: ['Family discussions about stream, course and cost', 'Choices where a relative or friend has a strong view'],
      routine: [
        'Days 1 to 3: Write what each person around you wants for you and the reason you think they have.',
        'Days 4 to 7: Collect three facts about your preferred route: what it studies, what it costs and where it leads.',
        'Days 8 to 11: Have one calm conversation with the person whose opinion matters most. Start with what you found.',
        'Days 12 to 14: Write down what changed and what is still open. Decide who else needs to be part of the next talk.',
      ],
      mistakes: ['Arguing about the stream instead of talking about the reasons behind it', 'Waiting for a perfect moment that never comes'],
      proof: ['A one-page summary you can share with your family', 'A list of questions you want answered together'],
      askOthers: 'What worries you most about the route I am considering?',
      talkingPoints: ['You can explain your choice calmly', 'You listened to other views before deciding'],
      midStep: 'Name the one concern behind your family\'s view and answer it with a fact in your next conversation.',
    },
    process: {
      why: 'Some students know their options and still cannot choose, because they keep looking for a perfect answer or change their mind with every new opinion. A simple method for deciding does more than more information.',
      roles: ['Choosing a stream, course or college', 'Any later decision where several good options exist'],
      routine: [
        'Days 1 to 3: Pick three criteria that matter most to you and write them down.',
        'Days 4 to 7: Score your top two routes from 1 to 5 on each criterion, using facts where you can.',
        'Days 8 to 11: Ask one person to challenge your scores and change only those backed by new facts.',
        'Days 12 to 14: Set a decision date, tell one person, and write what would make you review the choice.',
      ],
      mistakes: ['Changing the criteria each time you hear a new opinion', 'Waiting for certainty before deciding'],
      proof: ['A one-page scoring sheet with your reasons', 'A written decision date and review point'],
      askOthers: 'If you were in my position with these facts, what would you want to double-check?',
      talkingPoints: ['You decide using clear criteria', 'You accept a good choice with a review date'],
      midStep: 'Add a review date to your decision. Knowing you can adjust makes it easier to commit.',
    },
    action: {
      why: 'Thinking alone rarely ends confusion. Small real steps, such as asking, trying or checking a fact, give new information and build the sense that you are moving.',
      roles: ['Anything from asking a senior a question to filling an admission form on time'],
      routine: [
        'Days 1 to 3: Write the next three actions and pick the easiest one to do today.',
        'Days 4 to 7: Finish two of the three actions and note what you learned.',
        'Days 8 to 11: Add the next two actions, including one that involves speaking to a person.',
        'Days 12 to 14: Review what moved. If nothing did, ask a teacher or counsellor to help you with the next step.',
      ],
      mistakes: ['Waiting until you feel certain before starting', 'Letting the deadline become the decision'],
      proof: ['A short list of steps completed and what each taught you'],
      askOthers: 'What is one small step you think I could take this week?',
      talkingPoints: ['You act on small steps instead of waiting', 'You keep a record of what you learn'],
      midStep: 'Put a date next to each step. A step with a date is much more likely to happen.',
    },
  },
  thirtyDay: [
    'Week 1: Work on your lowest area using the first half of the 14-day routine, and collect your first notes.',
    'Week 2: Finish the routine, have the key conversation and run one small experiment.',
    'Week 3: Move to your second-lowest area and use two steps from its list.',
    'Week 4: Retake the test, compare each area score, and take the stream selector or the full Class 10 assessment if your self-knowledge score is still low.',
  ],
};

const COMMUNICATION: TestDepth = {
  stageHeading: 'Which of these describes you best?',
  stageNote: 'Communication shows up differently at each stage, so your report adjusts the advice and the examples to match.',
  stages: [
    {
      key: 'school',
      label: 'School student',
      description: 'Class 8 to 12',
      title: 'Build communication in classes, clubs and projects',
      body: 'At school, communication is practised in class discussions, group projects, debate and presentations. These small settings are the safest places to build habits that will matter in interviews and college.',
      actions: [
        'Answer one question in every class, even briefly, and write the point first before you speak.',
        'Join one club or event where you speak or write for others.',
        'Read your written answers aloud once before submitting to catch unclear lines.',
      ],
    },
    {
      key: 'college',
      label: 'College student',
      description: 'Degree, diploma or professional course',
      title: 'Turn classes and projects into communication practice',
      body: 'College gives you seminars, group projects, internships and placement preparation. Communication is often tested in group discussions and interviews, and it is easier to improve before that stage than during it.',
      actions: [
        'Volunteer for one presentation or viva this month and prepare only three points.',
        'Write your project emails and reports in short messages with the request first.',
        'Do one mock interview with a friend and ask for feedback on the first 30 seconds of each answer.',
      ],
    },
    {
      key: 'fresher',
      label: 'Fresher or job seeker',
      description: 'Looking for a first job or in the first years',
      title: 'Make interviews and first messages clear',
      body: 'For job seekers, communication is judged in the first email, the first answer to "tell me about yourself", and the way you respond to a question you did not expect. These are specific skills you can rehearse.',
      actions: [
        'Prepare and practise out loud a 30-second introduction and two short examples from your work or projects.',
        'Rewrite your last application email so the role and your request are in the first two lines.',
        'Ask a friend to interrupt you in a mock interview to practise recovering your point.',
      ],
    },
    {
      key: 'professional',
      label: 'Working professional',
      description: 'Employed, managing, or changing roles',
      title: 'Make your messages and meetings work harder',
      body: 'At work, unclear communication is expensive: repeated questions, missed deadlines and conflict. Improving one area, such as clear written requests or giving feedback, often shows up as less rework and more trust.',
      actions: [
        'Start your next three emails with the decision or request, and put detail below it.',
        'Before a meeting, write the one point you want people to remember.',
        'Pick one colleague and ask how you could be clearer in your messages.',
      ],
    },
  ],
  tips: [
    'Count silently to two after someone stops talking before you reply. It stops you cutting in and gives you time to think.',
    'Before you answer, say your main point in one sentence in your head. Then say it first, followed by one reason.',
    'Put the request or decision in the first line of the message. Add details below, not before.',
    'When you hear criticism, write down the words used before you respond. Then decide what is useful and what is not.',
    'Start with small groups and a two-minute update. Practise with the same few people until the first sentence feels easy.',
    'Take brief notes during conversations, even a few words. Write down names, dates and numbers as you hear them.',
    'Slow down and use shorter sentences. If people often ask you to repeat, the problem is usually too many ideas at once.',
    'Read every important message aloud once before sending. Missing words and unclear lines stand out when you hear them.',
    'Try this order: say what you agree with, state what you see differently, give the reason, ask what they think.',
    'Prepare two sentences you can say first, such as your name and your main point, so you do not start from nothing when you are nervous.',
    'After someone speaks, say "So you mean..." and check you got it right. It prevents mistakes and shows you listened.',
    'Explain a topic to a friend who does not know it, using no jargon. If they cannot repeat it back, simplify further.',
    'Before sending, ask: could a reader act on this without asking me anything? If not, add the missing detail or decision.',
    'Raise small issues on the day they happen, in one calm sentence. Small issues are easier to fix than old ones.',
    'Use a simple three-part shape for talks: the point, the reasons or examples, then repeat the point.',
    'Ask one question that builds on what the person just said instead of changing the topic.',
    'Write your first sentence as the answer, then add one reason and one example, then stop.',
    'Check who the reader is before you write. A teacher, a manager and a friend each need a different tone and level of detail.',
    'Prepare one kind sentence to open hard feedback, such as "I want this to go well, so here is what I noticed." Then be specific.',
    'Practise out loud, standing up, with a timer. Practising in your head does not prepare your voice.',
  ],
  strongTip: 'This is already a habit that works. Keep it up.',
  domains: {
    listen: {
      why: 'Most communication problems start with a missed point, not a badly spoken one. Good listeners get fewer repeat questions, make fewer mistakes and are trusted with more.',
      roles: ['Counselling, teaching, HR, sales and client-facing roles', 'Any team role where instructions or requirements are given in conversation'],
      routine: [
        'Days 1 to 3: In every conversation, wait two seconds before replying and repeat the main point back.',
        'Days 4 to 7: After a class, call or meeting, write down three things the other person said using their words.',
        'Days 8 to 11: Ask one follow-up question in each conversation that builds on what was said.',
        'Days 12 to 14: Ask a friend whether they felt heard and what could improve.',
      ],
      mistakes: ['Planning your reply while the other person is still talking', 'Nodding without checking you understood'],
      proof: ['A short example of a time you caught a detail others missed', 'Notes from a meeting that show you captured the decisions'],
      askOthers: 'Do I usually let you finish and understand your point, or do I interrupt and miss details?',
      talkingPoints: ['You confirm understanding before acting', 'You take notes so nothing gets lost'],
      midStep: 'Repeat the main point back in your own words in every important conversation this week.',
    },
    speak: {
      why: 'Clear speaking means people understand you the first time. It helps in interviews, meetings and everyday situations, and it is mostly structure rather than accent or vocabulary.',
      roles: ['Interviews and group discussions', 'Sales, teaching, support, consulting and management roles'],
      routine: [
        'Days 1 to 3: Write a 30-second answer to "tell me about yourself" and "why this subject or job".',
        'Days 4 to 7: Record yourself giving those answers once a day and listen for length and filler words.',
        'Days 8 to 11: Explain one topic from your studies or work to a friend in plain words.',
        'Days 12 to 14: Use the point, reason, example order in three real conversations.',
      ],
      mistakes: ['Starting before you know your point', 'Adding more and more detail when you are unsure'],
      proof: ['A recording of a clear 30-second answer', 'A short explanation you gave that someone could repeat back'],
      askOthers: 'Is my main point clear when I speak, or do you often have to ask what I meant?',
      talkingPoints: ['You organise your answer before you speak', 'You can explain complex ideas simply'],
      midStep: 'Choose one answer you give often, such as an introduction, and polish it until it is under 30 seconds.',
    },
    write: {
      why: 'In most jobs, work is assigned, explained and reviewed in writing. Clear writing saves other people\'s time and shows you take their time seriously.',
      roles: ['Content, marketing, analyst, operations and project roles', 'Any role with email, reports or documentation'],
      routine: [
        'Days 1 to 3: Rewrite three of your recent messages so the main request is in the first line and the message is five sentences or fewer.',
        'Days 4 to 7: Read every important message aloud before sending.',
        'Days 8 to 11: Collect two well-written messages from others and note their structure.',
        'Days 12 to 14: Write one longer document, such as a project summary, with a short heading for each part.',
      ],
      mistakes: ['Burying the request after paragraphs of background', 'Writing the same way for every reader'],
      proof: ['Before and after versions of two messages', 'A short document or summary you wrote that someone used'],
      askOthers: 'When you read my messages, do you know what I want from you straight away?',
      talkingPoints: ['You write short messages with a clear request', 'You adjust tone for different readers'],
      midStep: 'Put the request or decision in the first line of your next ten messages.',
    },
    feedback: {
      why: 'Feedback and disagreement decide how quickly problems get fixed and how people feel about working with you. People who handle them well tend to be trusted with more responsibility.',
      roles: ['Team lead, mentor, manager and client roles', 'Any role where work is reviewed by others'],
      routine: [
        'Days 1 to 3: When you get feedback, pause and write down what you heard before replying.',
        'Days 4 to 7: Practise one polite disagreement using agree, differ, reason, question.',
        'Days 8 to 11: Raise one small issue early instead of waiting.',
        'Days 12 to 14: Give one piece of specific, kind feedback to someone, then ask how it landed.',
      ],
      mistakes: ['Explaining or defending before you have understood the feedback', 'Avoiding hard conversations until they become bigger'],
      proof: ['An example where you acted on feedback and the work improved', 'An example where you raised an issue early'],
      askOthers: 'Is there something I could do differently that I have not heard from anyone?',
      talkingPoints: ['You welcome feedback and act on it', 'You raise issues early and respectfully'],
      midStep: 'Ask one person for feedback on a specific piece of your work this week and write down what you will change.',
    },
    present: {
      why: 'Presenting is communication under attention. Nervousness is common, and the fix is usually preparation, practice out loud and starting small.',
      roles: ['Interviews, viva, seminar and group discussion', 'Sales, teaching, consulting, product and leadership roles'],
      routine: [
        'Days 1 to 3: Write a two-minute talk with three points and practise it out loud standing up.',
        'Days 4 to 7: Present it to one friend and ask what they remember.',
        'Days 8 to 11: Do it again for two or three people, looking at each in turn.',
        'Days 12 to 14: Volunteer for one real speaking opportunity and note what went well.',
      ],
      mistakes: ['Memorising word for word instead of knowing the points', 'Practising silently in your head'],
      proof: ['A recording or feedback note from a talk you gave', 'A talk outline you can reuse'],
      askOthers: 'What do you remember from my last talk, and what could I have cut?',
      talkingPoints: ['You prepare and practise before speaking', 'You can structure a short talk clearly'],
      midStep: 'Give one two-minute talk to a small group this month and ask for one thing to improve.',
    },
  },
  thirtyDay: [
    'Week 1: Do the first half of your lowest-area routine and start a one-line daily note on what you tried.',
    'Week 2: Finish the routine and ask two people for feedback on that area.',
    'Week 3: Move to your second-lowest area and use two steps from its list.',
    'Week 4: Retake the assessment, compare each area score and set one new goal.',
  ],
};

const SOFT: TestDepth = {
  stageHeading: 'Which of these describes you best?',
  stageNote: 'Soft skills are shown in different places at each stage, so your report adjusts the advice to match.',
  stages: [
    {
      key: 'school',
      label: 'School student',
      description: 'Class 8 to 12',
      title: 'Practise soft skills in group work and responsibilities',
      body: 'School gives you low-risk places to practise: group projects, class roles, events and sports. Pick one small responsibility and treat it like real work.',
      actions: [
        'Take on one role, such as class monitor, event helper or project lead, and finish it fully.',
        'In group work, ask a quiet classmate for their idea before giving yours.',
        'Keep a simple list of commitments and tick them off.',
      ],
    },
    {
      key: 'college',
      label: 'College student',
      description: 'Degree, diploma or professional course',
      title: 'Use clubs, projects and internships as practice',
      body: 'College clubs, events, projects and internships are where soft skills get tested and noticed. Evidence from there is what you will use in interviews.',
      actions: [
        'Lead one small project, club task or event this semester and keep notes on what happened.',
        'Take on a task outside your comfort zone, like coordinating with a different department.',
        'Write two examples per skill that you can use in an interview.',
      ],
    },
    {
      key: 'fresher',
      label: 'Fresher or job seeker',
      description: 'Looking for a first job or in the first years',
      title: 'Turn habits into stories interviewers can believe',
      body: 'Interviewers look for evidence. A score does not help in an interview, but a real example of how you handled a team problem or a change does. Build two or three of these for each area.',
      actions: [
        'For your strongest and weakest areas, write a short real example using situation, action and result.',
        'Take one small project or volunteer task to build evidence in your lowest area.',
        'Ask a former teammate or teacher for a line about how you worked with others.',
      ],
    },
    {
      key: 'professional',
      label: 'Working professional',
      description: 'Employed, managing, or changing roles',
      title: 'Choose one area that moves your next role forward',
      body: 'At work, one soft skill usually limits growth more than the rest. Look at the role you want next and ask which of the five areas it depends on most.',
      actions: [
        'Ask your manager or a peer which of the five areas would help you most in the next year.',
        'Take on one task that stretches your lowest area, with a clear end date.',
        'Keep short notes on outcomes so you have evidence at your next review or interview.',
      ],
    },
  ],
  tips: [
    'Next time a group is stuck, say "Can I suggest a plan?" and share a simple three-step plan. Leading can start with one sentence.',
    'Ask one question about the other person\'s interests or background in your next two conversations and listen to the answer.',
    'When a plan changes, write the new plan in three lines before reacting. It turns surprise into a task.',
    'Write down every promise you make this week with a date, and tick it off when done.',
    'Before asking for help, write down the problem, what you tried and one idea. Then ask. This shows effort and gets better help.',
    'At the start of group work, write names next to tasks on a shared page. Clear owners reduce confusion.',
    'Check who is quiet in the room and ask for their view. Inclusion often starts with one question.',
    'Choose one new tool or skill and spend 20 to 30 minutes on it each day for two weeks. Being a beginner gets easier with repetition.',
    'The moment you suspect a deadline will slip, tell the person and give a new date. Early warnings are valued.',
    'Take a big problem and write three smaller parts. Start with the one you can finish today.',
    'Practise leading small things first, like a study session or a meeting agenda, instead of waiting for a big role.',
    'Name what a teammate did well when a group succeeds. Say specifically what they did, not just "good job".',
    'Ask yourself what is the worst part of this change and what is one thing within my control. Then do that thing.',
    'Use a calendar or list for all commitments and check it each morning so that you do not depend on reminders.',
    'When there are no instructions, write what you think the goal is and share it for a quick check. Then start.',
    'Say the goal in one sentence and what finished looks like before you assign tasks.',
    'Ask the person how they like to work and what they need. Differences become easier to manage once named.',
    'Choose one skill or tool you avoided and do one small task with it this week. Recent learning builds confidence.',
    'Finish one small thing completely before starting another. A short list of finished items beats a long list of started ones.',
    'After solving a problem, write three lines on what worked and keep the notes together for next time.',
    'Ask the people you work with one question each month: what is one thing I could do to make this easier for you?',
    'Disagree with the idea, not the person. Say what you agree with first and then what you see differently.',
    'When a method fails, change one thing and try again instead of repeating it. Write what you changed.',
    'Put commitments in one place, such as a calendar, and add dates and reminders as soon as you agree to something.',
    'Set a time limit for deciding, make the best choice you can with the information you have, and note what would change your mind.',
  ],
  strongTip: 'This is already a habit that works. Keep it up.',
  domains: {
    lead: {
      why: 'Leadership at an early stage is not about a title. It is about making the goal clear, helping people know what to do and caring about how the group does. It can be practised in small groups right now.',
      roles: ['Team lead, project manager, coordinator and mentor roles', 'Any role where you need to guide work without formal authority'],
      routine: [
        'Days 1 to 3: Write the goal and finish line for a small group task you are part of.',
        'Days 4 to 7: Lead one small task or meeting and assign owners and dates.',
        'Days 8 to 11: Ask two people what helped and what did not in how you led.',
        'Days 12 to 14: Make one change based on what you heard and run another small task.',
      ],
      mistakes: ['Taking charge without asking the group', 'Waiting for permission to start leading'],
      proof: ['An example of a task you led, the result and what you learned', 'Feedback from teammates about how you led'],
      askOthers: 'When we worked together, was it clear who was doing what, and what could I have done to make it clearer?',
      talkingPoints: ['You make goals clear and involve others', 'You ask for feedback and adjust'],
      midStep: 'Lead one small piece of work from start to finish and ask the group for feedback at the end.',
    },
    team: {
      why: 'Most work happens with other people. Getting along, sharing credit and disagreeing without making it personal affects how willing people are to work with you again.',
      roles: ['Any team role, especially customer-facing, HR, operations and healthcare', 'Roles with shared deadlines and cross-team work'],
      routine: [
        'Days 1 to 3: In every group task, ask one quiet person for their idea before sharing yours.',
        'Days 4 to 7: Thank someone specifically for something they did, once a day.',
        'Days 8 to 11: Work with someone whose style is very different and note what you learned.',
        'Days 12 to 14: Ask a teammate what makes you easy or hard to work with.',
      ],
      mistakes: ['Taking credit that should be shared', 'Avoiding people who work differently from you'],
      proof: ['An example of a conflict you helped resolve', 'A project where you worked with different kinds of people'],
      askOthers: 'What is it like to work with me when we disagree?',
      talkingPoints: ['You include others and share credit', 'You work well with different styles'],
      midStep: 'Pick one person you find difficult to work with and learn how they prefer to work.',
    },
    adapt: {
      why: 'Plans, tools and roles change. People who adjust quickly and keep learning usually stay useful in changing work, especially as tools and roles keep shifting.',
      roles: ['Startups, technology, operations and any role that changes quickly', 'Career changers and people entering a new field'],
      routine: [
        'Days 1 to 3: Choose one new skill or tool and spend 20 to 30 minutes on it each day.',
        'Days 4 to 7: Next time something changes, write the new plan in three lines before reacting.',
        'Days 8 to 11: Ask someone who recently changed field or role what helped them.',
        'Days 12 to 14: Use the new skill in one real task and note what happened.',
      ],
      mistakes: ['Resisting a change before understanding what it asks of you', 'Learning new things only when forced'],
      proof: ['A new skill you learned and what you did with it', 'A time you adjusted to a change and what resulted'],
      askOthers: 'How do I come across when plans change, calm or stressed?',
      talkingPoints: ['You learn new things regularly', 'You stay calm and practical when plans change'],
      midStep: 'Learn one new thing every month and keep a short record of what you used it for.',
    },
    own: {
      why: 'Reliability is the quiet skill behind trust. People who do what they say, and say early when they cannot, tend to be given the work that matters.',
      roles: ['Project, operations, finance, analyst and client roles', 'Any role where others depend on your output'],
      routine: [
        'Days 1 to 3: Write every commitment with a date and review the list each morning.',
        'Days 4 to 7: When something will be late, tell the person early with a new date.',
        'Days 8 to 11: Finish one small task fully before starting another.',
        'Days 12 to 14: Review the list and count what was done on time. Aim to improve it next week.',
      ],
      mistakes: ['Saying yes to everything and then missing deadlines', 'Telling people about problems only after the deadline'],
      proof: ['A task you owned from start to finish', 'An example of a time you flagged a problem early'],
      askOthers: 'Can you rely on me to do what I say by the date I say it? What gets in the way?',
      talkingPoints: ['You track commitments and finish what you start', 'You flag risks early'],
      midStep: 'Use one list for all commitments and check it every morning for two weeks.',
    },
    solve: {
      why: 'Employers value people who can move forward when things are unclear. Problem solving is mostly a habit of breaking a problem down, trying options and learning from the result.',
      roles: ['Analyst, engineer, consulting, operations and support roles', 'Any role where instructions are incomplete'],
      routine: [
        'Days 1 to 3: When stuck, write the problem in one sentence and three possible fixes before asking for help.',
        'Days 4 to 7: Break one large task into smaller parts and finish the first part.',
        'Days 8 to 11: After solving a problem, write three lines on what worked.',
        'Days 12 to 14: Review your notes and look for patterns in the problems you solved.',
      ],
      mistakes: ['Asking for help without saying what you tried', 'Waiting for certainty before taking a step'],
      proof: ['A problem you solved with the steps you took', 'A set of notes showing what you learned from a failed attempt'],
      askOthers: 'When I get stuck, do I try things first or wait for answers?',
      talkingPoints: ['You break problems into steps and test options', 'You record and reuse what works'],
      midStep: 'Keep a short log of problems you solve with one line on how. It becomes proof for interviews.',
    },
  },
  thirtyDay: [
    'Week 1: Do the first half of your lowest-area routine and write one line each day on what you tried.',
    'Week 2: Finish the routine and ask two people for feedback on that area.',
    'Week 3: Move to your second-lowest area and use two steps from its list.',
    'Week 4: Retake the self-assessment, compare each area score and write two real examples for your strongest area.',
  ],
};

export const SKILL_TEST_DEPTH: Record<SkillTestId, TestDepth> = {
  'confused-after-10th': CONFUSED,
  communication: COMMUNICATION,
  'soft-skills': SOFT,
};
