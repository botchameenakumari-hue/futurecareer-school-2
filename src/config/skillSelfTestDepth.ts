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
  /** Optional: a 'take it further' step per statement, shown when the answer was in the middle (Sometimes) instead of the start-here tip. */
  tipsUp?: string[];
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
        'Finish your remaining papers first and explore only in the gaps, for example one free evening a week. Some courses ask for minimum marks, so your results still matter.',
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
    'If you avoid the talk, start small: ask one question about what your family thinks, then share one fact you found. A short calm chat works better than a big announcement.',
    'Pick a rule: you can change your choice only if a new fact comes in, not because another person has an opinion.',
    'Break the decision into one tiny step you can finish today, like writing the two routes you are comparing.',
    'Try new things in small ways, such as a free online lesson, a club or a short project. Interests usually show up from doing, not thinking.',
    'Choose five careers and find what a person in each does on an ordinary day. Skip titles and look at tasks.',
    'Write your own preference first, then each person\'s view and the reason behind it, often worry about safety. Put them side by side so their opinions become input and not the final answer.',
    'Ask of each option: if this turns out wrong, what could I do next? Pick the one where you have a clear way back or a way to adjust, and accept that it need not be perfect.',
    'Write down the next two or three actions, for example check eligibility, talk to a senior, compare costs, and put a date next to each.',
    'Write down three things you do better than most people around you and one example for each.',
    'Check what you know against a second and third source, such as a teacher, an official admission site and a person working in the field.',
    'Practise a two-minute explanation of your reasons with a friend before the family conversation.',
    'Write what the perfect answer would have to include, such as high interest, low cost and a family that agrees. Cross out the one point you can live without and choose from what is left.',
    'Pick a fixed half hour each week, such as Saturday at 5 pm, and treat it like a tuition class that is used only for this decision. Start the first session by writing what you will finish before the next one.',
  ],
  tipsUp: [
    'Keep the list going for a month and star the tasks you chose without being told. Show it to one teacher and ask if they have seen the same pattern.',
    'Pick one stream and talk to a student already in Class 11 for fifteen minutes. Ask what a normal week looks like and what surprised them.',
    'Write your reasons for the stream in three lines and test each one: would it hold if no friend or relative had an opinion? Keep only the reasons that survive.',
    'Fix the same points for every option and score each out of five with one line of evidence. Redo the scores after three days and see which ones moved.',
    'Turn that one step into a weekly habit: one hour every Sunday for a new task, such as one conversation, one video or one official page. Log it in a notebook.',
    'Test your list with small tasks: try each kind of work for thirty minutes, such as explaining a topic to a friend, and note which one you chose to continue.',
    'Pick one diploma or ITI course and find its entry rule, duration and one institute near you on the official page. Share your notes with a family member to check.',
    'When you catch yourself holding back, pick one calm moment that day and say one sentence about your preference. Then ask what they think instead of arguing it out.',
    'When a new opinion arrives, write it down and wait one day. Then ask whether it adds a new fact or only a different preference, and change your plan only for a fact.',
    'When you catch yourself delaying, set a ten-minute timer and work only on the decision until it rings. Then note one thing done and stop.',
    'When the thought "I have no idea" appears, open your list of enjoyed tasks, pick one item from it and name one job that uses that task.',
    'Pick three careers and read or watch one day-in-the-life account for each. Write the tasks that fill most of the day and compare them with what you assumed.',
    'When you notice yourself changing an answer to please someone, pause and write what you would say if that person were absent. Then decide which part to share.',
    'Set a deadline for the decision and choose by that day with what you know. Note one fact that would change your mind, so you can review the choice later.',
    'Put dates on the next two or three steps and tell one friend or family member who will ask you about them next week.',
    'Say your strengths aloud to a person outside your family, with one example each. If they ask a question, add the missing detail to your written version.',
    'Pick the claim you heard most often about a career and check it on an official website or with a person working in it this week. Note whether it holds.',
    'Practise the conversation with a friend who plays a disagreeing relative. Ask them to push back twice and answer each time in one calm sentence.',
    'When you catch yourself waiting for certainty, write which fact is still missing and how to get it this week. If none can be found, decide with what you have.',
    'Put the next step in your phone calendar with a reminder and tell someone the date. After doing it, write the following step straight away so there is no gap.',
  ],
  strongTip: 'This is already a strength. Keep using it.',
  domains: {
    self: {
      why: 'If you do not yet know what you enjoy or do well, every stream looks equally good or equally scary. For example, a student who scores well in Maths may not know whether she likes the subject or only the marks it gives her. The way to find out is by trying small things and noticing your reactions.',
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
      why: 'You cannot compare routes you do not know about. A student in a small town may hear only about Science and Commerce at school and never learn that diploma and ITI courses exist. Many choose from the two or three options they have heard of, often from one person.',
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
      why: 'When other people\'s expectations carry more weight than your own view, the decision gets stuck. A family may push Science because it feels safe, while the student leans towards Commerce and never explains why. The aim is not to ignore your family. It is to understand the reasons behind their view and to bring them facts.',
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
      why: 'Some students know their options and still cannot choose. One week they lean towards Commerce because of a cousin, the next towards Science because of a teacher, and nothing is settled. A simple method for deciding does more than more information.',
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
      why: 'Thinking alone rarely ends confusion. A student who has read about five careers but never asked one real person a question usually has the same doubts a month later. Small real steps, such as asking, trying or checking a fact, give new information and build the sense that you are moving.',
      roles: ['Anything from asking a senior a question to filling an admission form on time'],
      routine: [
        'Days 1 to 3: Write the next three actions and pick the easiest one to do today.',
        'Days 4 to 7: Finish two of the three actions and note what you learned.',
        'Days 8 to 11: Add the next two actions, including one that involves speaking to a person.',
        'Days 12 to 14: Review what moved. If nothing did, ask a teacher or counsellor to help you with the next step.',
      ],
      mistakes: ['Waiting until you feel certain before starting', 'Letting the deadline become the decision'],
      proof: ['A short list of steps completed and what each taught you', 'A message or note showing that you asked a teacher, senior or counsellor a question'],
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
      body: 'At school, communication gets practised in class answers, group projects, assemblies, quizzes and competitions. Small settings like these are the safest place to build habits you will need later in interviews and college.',
      actions: [
        'In each class this week, answer or ask one question aloud, even a short one, after deciding your main point in your head first.',
        'Put your name down for one thing where you speak or write for others, such as morning assembly, a quiz round or the school magazine.',
        'Read one written answer aloud before you submit it, and fix any sentence you stumble over.',
      ],
    },
    {
      key: 'college',
      label: 'College student',
      description: 'Degree, diploma or professional course',
      title: 'Turn classes and projects into communication practice',
      body: 'College gives you seminars, group projects, vivas, internships and placement preparation. Group discussions and interviews test communication directly, and it is easier to improve before those rounds than during them.',
      actions: [
        'Volunteer for one presentation, seminar or viva this month and prepare only three points.',
        'Write your project emails to teammates and teachers as short messages with the request in the first line.',
        'Do one mock interview or group-discussion round with friends and ask what they noticed in your first 30 seconds.',
      ],
    },
    {
      key: 'fresher',
      label: 'Fresher or job seeker',
      description: 'Looking for a first job or in the first years',
      title: 'Make interviews and first messages clear',
      body: 'For job seekers, communication is judged in the first email, the first answer to "tell me about yourself", and the way you handle a question you did not expect. These are specific skills you can rehearse before the day.',
      actions: [
        'Prepare and say out loud a 30-second introduction and two short examples from your projects, internship or earlier work.',
        'Rewrite your last application message or email so the role and your request are in the first two lines.',
        'Ask a friend to interrupt you with a new question during a mock interview, and practise returning to your point calmly.',
      ],
    },
    {
      key: 'professional',
      label: 'Working professional',
      description: 'Employed, managing, or changing roles',
      title: 'Make your messages and meetings work harder',
      body: 'At work, unclear messages lead to repeated questions, missed deadlines and avoidable conflict. Fixing one habit, such as writing the request first or giving feedback early, can cut a lot of back and forth.',
      actions: [
        'Start your next three emails with the decision or request, with the details below it.',
        'Before your next meeting, write the one point you want people to remember and say it in the first minute.',
        'Ask one colleague you trust where your messages or explanations are unclear, and note one change to make.',
      ],
    },
  ],
  tips: [
    'Count silently to two after someone stops talking before you reply. If you notice you are already forming your answer, drop it and listen for the last thing they said.',
    'Before you answer, finish this sentence in your head: "The main thing I want them to know is...". Say that sentence first, then give one reason.',
    'Put the request or decision in the first line, with the date you need it by. Move the background below it for people who want it.',
    'When someone criticises your work, write their exact words in your notebook before you say anything. Then ask "what would you change first?" and decide later what is useful.',
    'Start with a two-minute update to the same four or five people, three times a week for two weeks. Use the same first sentence each time so the start feels familiar.',
    'Write names, dates and numbers as you hear them, even as a few words in a notebook or phone note. Read them back to the speaker before you leave.',
    'Slow down and keep each sentence to one idea. If someone asks you to repeat, say the point again in fewer words instead of adding more explanation.',
    'Before you send anything important, read it once aloud or wait five minutes and read it again. Missing words, wrong names and unclear lines are easier to hear than to see.',
    'Use this order: what you agree with, what you see differently, your reason, then "what do you think?". Try it first on a small matter with a friend, such as where to meet.',
    'Prepare your first and last sentences for any interview or group discussion. In a group discussion, speak within the first few minutes, even briefly, so the silence does not grow.',
    'After someone explains something, say "So you mean..." and wait for a yes or a correction. It takes ten seconds and prevents mistakes later.',
    'Pick a topic from your studies or work and explain it to a family member who has no background in it, with no technical words. If they cannot say it back in their own words, simplify it again.',
    'Before sending, ask "could this person act on it without asking me anything?" If not, add the missing date, place, name or decision.',
    'Raise small issues on the day they happen, in one calm sentence such as "Something in the plan is bothering me, can I share it?". Small issues are easier to fix than old ones.',
    'Use a three-part shape: the point, two reasons or examples, then the point again. Write each part as one line and practise with a timer.',
    'Ask one question that uses a word the other person just said, such as "You said the deadline moved, by how much?". Avoid changing the topic with your question.',
    'Write your first sentence as the answer, then add one reason and one example, then stop. Practise stopping after the example even when you feel there is more to say.',
    'Decide who will read your message before you write it. A teacher or manager needs a polite greeting and full sentences, while a friend can get short lines. Rewrite one message both ways to feel the difference.',
    'Open with a kind sentence such as "I want this to go well, so here is what I noticed." Then name one specific action and say what you would like instead.',
    'Practise out loud, standing up, with a timer, at least once the day before. Practising in your head does not prepare your voice.',
  ],
  tipsUp: [
    'When you feel the urge to reply early, press your thumb to a finger until they finish. Keep a tick count in your notebook and see by evening how often it happened.',
    'Before each answer in a day, jot your main point in three words. At night, count how many answers started with it and aim for more tomorrow.',
    'Check your last five sent messages for the request in the first two lines. Rewrite any that miss it and keep the best one as a template.',
    'When you feel the urge to defend, say "Let me check I understood" and repeat the criticism in your own words first. Reply only after they say yes.',
    'Ask one friend to watch you speak for two minutes and note one clear part and one rushed part. Fix only the rushed part in your next talk.',
    'Write names, dates and numbers at the moment you hear them and read them back before the talk ends. Check the note again the same evening.',
    'When someone asks you to repeat, note which point it was. Write a shorter version of that point and use it the next time you explain.',
    'Make a four-line checklist for important messages: request, date, name, tone. Tick it before sending, and after a week see which line caught the most mistakes.',
    'Pick one real disagreement this week and prepare your sentence in advance, such as "I see it differently because...". Afterwards note how the other person responded.',
    'Make a rule to speak once in the first five minutes of the next group discussion or practice interview, even a short point. Raise it to two points next time.',
    'Use the check-back on one important point per conversation and note how often you were corrected. Each correction shows where your understanding was off.',
    'Explain a topic to someone outside your field and ask them to say it back. Rewrite the parts that did not come back right.',
    'After sending, note each follow-up question you receive. Add the missing detail to your template so the same question stops coming.',
    'Choose a regular time, such as Friday afternoon, to raise any small issue from the week in one calm sentence. Keep a note so none is forgotten.',
    'Record a two-minute talk on your phone and listen once. Mark the beginning, middle and end, and fix whichever part is hardest to find.',
    'At the end of each important conversation, write down one question you asked that used the other person\'s words. Aim for one such question per talk this week.',
    'When you notice yourself adding points, stop and say "The main point is..." and give it. Add detail only if the other person asks.',
    'Write one message in two tones, for a friend and for a manager, and ask someone to tell which is which. Adjust greeting, words and length until the difference is clear.',
    'Choose one person you trust and give them one honest, kind comment this week, prepared in advance: what you saw and what you would like instead.',
    'Fix practice sessions on the two days before any important talk. Ask one person to listen on the second day and name one point to improve.',
  ],
  strongTip: 'This habit is already working for you. Use it in a real situation this week, such as a class, meeting or interview, and note one example you could describe later.',
  domains: {
    listen: {
      why: 'Most communication problems start with a missed point, not a badly spoken one. A new employee who writes down the exact dates and quantities during a call does not need to phone back twice. Listening well also makes people more willing to explain things to you.',
      roles: ['Counselling, teaching, HR, sales and client-facing roles', 'Any team role where instructions or requirements are given in conversation'],
      routine: [
        'Days 1 to 3: After the other person stops, wait two seconds and say their main point back in one sentence. Tick a day in your notebook when you did it at least three times.',
        'Days 4 to 7: After one class, call or meeting each day, write three things the other person said, in their words. Check one of them with the person to see if you got it right.',
        'Days 8 to 11: In each conversation, ask one follow-up question that uses a word the other person just said. Count how many times you managed it each day.',
        'Days 12 to 14: Ask two people you spoke with this week whether they felt listened to and what you could do better. Write down their answers.',
      ],
      mistakes: ['Planning your reply while the other person is still talking, so you answer the question you expected instead of the one asked', 'Saying "yes, yes" and nodding when you have not followed, then guessing later'],
      proof: ['A page of notes from a class or meeting where names, dates and decisions turned out to be correct', 'A short story of a time you repeated an instruction back and caught a mistake before work started'],
      askOthers: 'When we talk, do I let you finish, and do I usually understand what you meant?',
      talkingPoints: ['You repeat back instructions before acting on them', 'You take short notes so details do not get lost'],
      midStep: 'Say the other person\'s main point back in your own words in every important conversation this week.',
    },
    speak: {
      why: 'Clear speaking means people understand your point the first time they hear it. It depends on structure, not accent or fancy vocabulary, and it can be practised in any language. Answering "tell me about yourself" in 30 seconds with three points is clearer than a two-minute story.',
      roles: ['Interviews and group discussions', 'Sales, teaching, support, consulting and management roles'],
      routine: [
        'Days 1 to 3: Write a 30-second answer to "tell me about yourself" and another to "why this subject or job". Time each with a phone clock and cut until both fit.',
        'Days 4 to 7: Record yourself saying both answers once a day, or say them to a family member. Count filler words such as "like" or "actually" and try to hear fewer each day.',
        'Days 8 to 11: Explain one topic from your studies or work to a friend in plain words. You are done when they can say the idea back to you.',
        'Days 12 to 14: Use the order point, reason, example in three real conversations. Afterwards note whether anyone asked you to repeat.',
      ],
      mistakes: ['Starting to speak before you know your main point, then finding it halfway through', 'Adding more detail when you feel unsure instead of stopping after one example'],
      proof: ['A recording of yourself giving a clear 30-second answer', 'A topic you explained to someone new to it, with a line from them on what they understood'],
      askOthers: 'When I explain something, is my main point clear, or do you often have to ask what I meant?',
      talkingPoints: ['You decide your main point before you answer', 'You can explain a hard idea in simple words'],
      midStep: 'Choose one answer you give often, such as your introduction, and polish it until it fits in 30 seconds.',
    },
    write: {
      why: 'In most jobs, work is assigned, explained and reviewed in writing, often to people who cannot ask you what you meant. A message that opens with "Please send the attendance sheet by Friday 5 pm" gets action faster than three paragraphs of background. Clear writing also shows you respect the other person\'s time.',
      roles: ['Content, marketing, analyst, operations and project roles', 'Any role with email, reports or documentation'],
      routine: [
        'Days 1 to 3: Rewrite three of your recent messages with the request in the first line and no more than five sentences. You are done when each can be understood from its first line alone.',
        'Days 4 to 7: Read every important message aloud once before sending. Keep a tally of the mistakes you caught.',
        'Days 8 to 11: Collect two well-written messages or notices from others and underline their first and last lines. Write one of your own using the same structure.',
        'Days 12 to 14: Write one longer piece, such as a project summary, with a short heading for each part. Give it to one person and ask which part was hardest to follow.',
      ],
      mistakes: ['Putting the request after paragraphs of background, so it is missed or answered late', 'Using the same tone and length for a friend, a teacher and a manager'],
      proof: ['Before and after versions of two messages, with the request moved to the first line', 'A summary or note you wrote that someone else used to take a decision or action'],
      askOthers: 'When you get a message from me, do you know straight away what I want from you?',
      talkingPoints: ['You write short messages with the request first', 'You change tone and length to suit the person who will read the message'],
      midStep: 'Put the request or decision in the first line of your next ten messages.',
    },
    feedback: {
      why: 'Feedback and disagreement decide how fast problems get fixed. Telling a teammate on Monday that the data format is wrong costs ten minutes, while saying nothing until the Friday submission can cost the whole project. People who handle both calmly tend to be trusted with more responsibility.',
      roles: ['Team lead, mentor, manager and client roles', 'Any role where work is reviewed by others'],
      routine: [
        'Days 1 to 3: Each time you receive feedback, write the exact words before replying and say "thank you, let me think about it". Note one useful point from each.',
        'Days 4 to 7: Practise one polite disagreement with a friend using the order agree, differ, reason, question. You are done when you can do it without reading your notes.',
        'Days 8 to 11: Raise one small issue on the day it happens, in one calm sentence. Write down how the other person reacted.',
        'Days 12 to 14: Give one piece of specific, kind feedback to someone, naming the action and its effect, then ask how it landed.',
      ],
      mistakes: ['Explaining or defending before you have understood what was said', 'Complaining about a small problem to others instead of telling the person involved, until it becomes a conflict'],
      proof: ['An example where you acted on feedback and the work got better, with the change you made', 'An example where you raised a problem early and it was fixed before it grew'],
      askOthers: 'Is there something I could do differently that nobody has told me yet?',
      talkingPoints: ['You take feedback and act on it', 'You raise issues early and respectfully'],
      midStep: 'Ask one person for feedback on a specific piece of your work this week and write down what you will change.',
    },
    present: {
      why: 'Presenting is communication under attention, so nerves are normal. What helps most is a clear structure, practice out loud and starting with small audiences. A three-point, two-minute update to four friends builds more comfort than reading a long speech alone.',
      roles: ['Interviews, viva, seminar and group discussion', 'Sales, teaching, consulting, product and leadership roles'],
      routine: [
        'Days 1 to 3: Write a two-minute talk with three points, one line each. Practise it out loud, standing up, with a timer, until it fits.',
        'Days 4 to 7: Give the talk to one friend or family member and ask what they remember. If they remember fewer than two points, cut or simplify.',
        'Days 8 to 11: Give it again to two or three people, looking at each in turn. Note which sentence made you most nervous and rewrite it.',
        'Days 12 to 14: Take one real speaking chance, such as a class update, team meeting or mock interview. Write down one thing that went well and one thing to change.',
      ],
      mistakes: ['Memorising word for word, so one forgotten line breaks the whole talk', 'Practising only silently in your head, so your voice is untrained on the day'],
      proof: ['A recording or feedback note from a talk you gave', 'A talk outline you can reuse for a similar audience'],
      askOthers: 'What do you remember from my last talk, and what could I have cut?',
      talkingPoints: ['You prepare and practise out loud before speaking', 'You can structure a short talk with a clear point'],
      midStep: 'Give one two-minute talk to a small group this month and ask for one thing to improve.',
    },
  },
  thirtyDay: [
    'Week 1: Do the first half of your lowest-area routine and write one line each evening on what you tried and what happened.',
    'Week 2: Finish the routine and ask two people you trust for one honest comment on that area.',
    'Week 3: Move to your second-lowest area and do two steps from its routine, keeping one daily step from the first area.',
    'Week 4: Retake the assessment, compare each area score, and choose one situation in the coming month where you will use your best new habit.',
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
      body: 'School gives you low-risk places to practise: group projects, class roles, events and sports. Pick one small responsibility, such as a class duty or a role in a house event, and treat it like real work: know what done looks like and tell the teacher when it is finished.',
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
    'At the start of group work, write each name next to a task and a date, on paper or in the group chat, and ask everyone to reply "ok". A named owner means nobody assumes someone else is doing it.',
    'Check who is quiet in the room and ask for their view. Inclusion often starts with one question.',
    'Pick one tool or skill you have been avoiding and spend 20 to 30 minutes on it each day for two weeks. Look clumsy in private first, with a video or a friend, and the beginner stage passes faster.',
    'The day you first suspect a deadline will slip, send the person one message with a new date and what you can give them now. Do not wait for the due day.',
    'Take a big problem and write three smaller parts. Start with the one you can finish today.',
    'Volunteer for one small piece of leading this week, such as setting the agenda for a meeting or running a thirty-minute revision session, instead of waiting to be asked.',
    'When a group does well, start by naming one teammate and what exactly they did, for example "Meena\'s data table saved us a day". Describe your own part after that.',
    'When a change is announced, write down the worst part of it and one thing within your control. Do that one thing the same day, so resisting is replaced by a first step.',
    'Use a calendar or list for all commitments and check it each morning so that you do not depend on reminders.',
    'When there are no instructions, write what you think the goal is and share it for a quick check. Then start.',
    'Say the goal in one sentence and what finished looks like before you assign tasks. Test it by asking one member to repeat it back in their own words.',
    'With one person whose style differs from yours, ask how they like to get updates and what helps them work best, then match that for two weeks. Differences become easier to manage once they are named.',
    'Write down one thing from the last three months that you doubted you could learn. Then pick the next thing just beyond your comfort, such as one chapter of an online course, and fix a three-week target.',
    'Finish one small thing completely before starting another. A short list of finished items beats a long list of started ones.',
    'After solving a problem, write three lines on what worked and keep the notes together for next time.',
    'Ask the people you work with one question each month: what is one thing I could do to make this easier for you?',
    'Disagree with the idea, not the person. Say what you agree with first and then what you see differently.',
    'When a method fails, change one thing and try again instead of repeating it. Write what you changed.',
    'Every Sunday, spend ten minutes moving unfinished items to next week\'s list and adding fresh dates. A weekly review keeps the list true, so you can trust it instead of your memory.',
    'Before a decision, set a time limit, such as the end of tomorrow. When it arrives, choose with what you know and write down what new fact would make you change your mind.',
  ],
  tipsUp: [
    'Offer your plan in writing for the next group task, with who does what by when, and ask for one change. Note how many of your points the group adopted.',
    'Pick one person you rarely talk to and have two conversations this month, each time asking about something they mentioned earlier.',
    'Next time a plan changes, write the new plan within ten minutes and message it to those affected. Note how long you took to settle compared with last time.',
    'Add a check on the due day: before closing the task, confirm it reached the right person. Count your on-time tasks over two weeks.',
    'For each unfamiliar problem, write two options and a first test before asking. When you do ask, share the options so the answer can be quick.',
    'At your next group meeting, write the split on a shared sheet and read it aloud for confirmation. Check progress with each person at the halfway point.',
    'Once a week, ask a usually quiet person for their view during a meeting. Note what they said and credit them by name afterwards.',
    'Tell a friend you will show a first attempt with the new tool by a set date. Practise the first task privately for ten minutes before then.',
    'When a deadline is at risk, message the same day with what is done, what is left and a new date. Note how early you flagged it each time.',
    'Write the smaller parts on separate lines with a time for each. At the end of the day, note which part took longer than expected.',
    'When you notice yourself waiting, speak first in the next meeting for thirty seconds with one suggestion. Count the times this week and add one more next week.',
    'After a success, name two people and what each did before you add your part. Keep your own part to one sentence.',
    'Give the new way a fixed trial of one week and write one line each day on what went better and what went worse. Decide at the end of the week.',
    'Add an alert at the time of the task and a second one a day earlier. Track how many tasks still needed a reminder each week.',
    'When you freeze without instructions, write the goal in one line and two possible first steps, pick one and start. Then tell the person what you assumed.',
    'Test your goal statement by asking someone outside the project to repeat it back. Fix any part they leave out and use the improved version next time.',
    'When a different style bothers you, write down what that person does well in it. Then change one thing in your own approach for a week, such as how you share updates.',
    'Keep a running list of things you learned this year and add to it monthly. Pick the next target slightly beyond the last, and ask someone to check progress.',
    'Set a finish rule: before starting a new task, close or schedule the last one. Count open items every Friday and aim to reduce the number week by week.',
    'Keep the lessons in one file with the date and the type of problem. Open that file before the next problem and note when it helped.',
    'Ask in a one-to-one rather than in the group, and act on one answer within a week. Tell the person what you changed.',
    'In your next disagreement, state the shared goal first, then your difference, then a question. Afterwards ask someone you trust if it felt personal.',
    'When you switch methods, test the new one on a small piece for one session and measure something, such as time taken. Keep the version that was faster or clearer.',
    'Add one weekly review on a fixed day: update the list, mark what slipped and set new dates. Keep the list in a single place.',
    'When you notice yourself waiting for certainty, set a time limit and write what is still unknown. Decide at the limit and note what you would check afterwards.',
  ],
  strongTip: 'This is already a habit that works for you. Write down one real example of it from the last month, with the date, so you can describe it in an interview or review.',
  domains: {
    lead: {
      why: 'Leadership at an early stage is not about a title. It is about making the goal clear and helping people know what to do. In a four-person college project, the person who writes who does what on one page is already leading, even with no position.',
      roles: ['Team lead, project manager, coordinator and mentor roles', 'Any role where you need to guide work without formal authority'],
      routine: [
        'Days 1 to 3: Write the goal and finish line of one small group task in two lines, and show them to the group to confirm.',
        'Days 4 to 7: Lead one task or meeting of about thirty minutes, assign owners and dates, and write them on a page everyone can see.',
        'Days 8 to 11: Ask two people what helped and what did not in how you led, and write their answers down.',
        'Days 12 to 14: Make the one change they suggested and run another small task. You are done when you can say what was different.',
      ],
      mistakes: ['Announcing the plan without asking the group, so people follow without agreeing', 'Waiting for a title or permission before suggesting how to start'],
      proof: ['An example of a task you led, the result and what you learned', 'Feedback from teammates about how you led'],
      askOthers: 'When we worked together, was it clear who was doing what, and what could I have done to make it clearer?',
      talkingPoints: ['You make goals clear and involve others', 'You ask for feedback and adjust'],
      midStep: 'Lead one small piece of work from start to finish and ask the group for feedback at the end.',
    },
    team: {
      why: 'Most work happens with other people. Getting along, sharing credit and disagreeing without making it personal affects how willing people are to work with you again. A teammate who says "I see it differently, can I explain why?" keeps a disagreement about the work and not about the person.',
      roles: ['Any team role, especially customer-facing, HR, operations and healthcare', 'Roles with shared deadlines and cross-team work'],
      routine: [
        'Days 1 to 3: In every group task, ask one quiet person for their idea before sharing yours, and tick off each time you do it.',
        'Days 4 to 7: Each day, thank one person and name the exact thing they did. Four thanks in four days means this block is done.',
        'Days 8 to 11: Do one task with someone whose style is very different from yours, and write two lines on what worked.',
        'Days 12 to 14: Ask one trusted teammate what makes you easy or hard to work with, and write down one change you will try.',
      ],
      mistakes: ['Describing a shared result as your own work when a senior is listening', 'Avoiding the person whose style irritates you, so the problem between you is never discussed'],
      proof: ['An example of a conflict you helped resolve', 'A project where you worked with different kinds of people'],
      askOthers: 'What is it like to work with me when we disagree?',
      talkingPoints: ['You include others and share credit', 'You work well with different styles'],
      midStep: 'Pick one person you find difficult to work with and learn how they prefer to work.',
    },
    adapt: {
      why: 'Plans, tools and roles change, whether it is a new syllabus, new software in your first job or a new manager. Someone who spends half an hour a day on the new tool in the first two weeks is often comfortable with it by the time others have only started.',
      roles: ['Startups, technology, operations and any role that changes quickly', 'Career changers and people entering a new field'],
      routine: [
        'Days 1 to 3: Pick one new skill or tool and spend 20 to 30 minutes on it each day, and finish one small exercise by day 3.',
        'Days 4 to 7: Each time something changes, write the new plan in three lines before reacting, and keep the notes.',
        'Days 8 to 11: Talk for ten minutes to someone who recently changed field or role, and note one thing that helped them.',
        'Days 12 to 14: Use the new skill in one real task, then write what went well and what you would change.',
      ],
      mistakes: ['Complaining about a change to colleagues before finding out what it actually asks of you', 'Learning a new tool only when a deadline forces it, in one rushed night'],
      proof: ['A new skill you learned and what you did with it', 'A time you adjusted to a change and what resulted'],
      askOthers: 'How do I come across when plans change, calm or stressed?',
      talkingPoints: ['You learn new things regularly', 'You stay calm and practical when plans change'],
      midStep: 'Learn one new thing every month and keep a short record of what you used it for.',
    },
    own: {
      why: 'Reliability is the quiet skill behind trust. People who do what they say, and say early when they cannot, are easier to hand work to. If you tell your lead on Tuesday that Friday\'s report will be a day late, they can plan around it, but if you tell them on Friday it is only their problem.',
      roles: ['Project, operations, finance, analyst and client roles', 'Any role where others depend on your output'],
      routine: [
        'Days 1 to 3: Write every commitment with a date in one place and read the list for two minutes each morning.',
        'Days 4 to 7: If something will be late, tell the person the same day with a new date, and note each time you did.',
        'Days 8 to 11: Finish one small task fully, including a message saying it is done, before you start another.',
        'Days 12 to 14: Count what you finished on time out of what you listed, and write that number as the one to beat next week.',
      ],
      mistakes: ['Saying yes to every request in the meeting and then missing dates', 'Telling people about a problem only after the date has passed'],
      proof: ['A task you owned from start to finish', 'An example of a time you flagged a problem early'],
      askOthers: 'Can you rely on me to do what I say by the date I say it? What gets in the way?',
      talkingPoints: ['You track commitments and finish what you start', 'You flag risks early'],
      midStep: 'Use one list for all commitments and check it every morning for two weeks.',
    },
    solve: {
      why: 'Tasks at work often arrive with missing details. Problem solving is mostly a habit of breaking a problem down, trying options and learning from the result. If a client sends a request with no format, the person who writes down the goal, picks a first step and checks in early moves faster than the one who waits for a complete brief.',
      roles: ['Analyst, engineer, consulting, operations and support roles', 'Any role where instructions are incomplete'],
      routine: [
        'Days 1 to 3: When stuck, write the problem in one sentence and three possible fixes, and try at least one before asking for help.',
        'Days 4 to 7: Split one large task into smaller parts and finish the first part within a day.',
        'Days 8 to 11: After solving a problem, write three lines on what worked and keep them in one file.',
        'Days 12 to 14: Read that file, mark any problem type that came up twice, and write one rule for handling it.',
      ],
      mistakes: ['Messaging "it is not working" without saying what you tried', 'Waiting for complete information before taking any first step'],
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
