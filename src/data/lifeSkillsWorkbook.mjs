// Content for the Life Skills PDF Workbook tool.
// Skill names follow the ten core life skills listed by the World Health Organization (WHO).
// All wording below is original FutureCareerSchool copy. It contains no statistics, fees or pay figures.

export const WHO_SOURCE = {
  label: 'World Health Organization, Life skills education for children and adolescents in schools (document WHO/MNH/PSF/93.7A Rev.2)',
  url: 'https://iris.who.int/items/5d053e73-4b67-4456-9e9a-f3ae402863f2',
  definition: 'the abilities for adaptive and positive behaviour that enable individuals to deal effectively with the demands and challenges of everyday life',
  listNote: 'CBSE, Life Skills Education (lists the ten core life skills as laid down by WHO)',
  listUrl: 'https://cbse.gov.in/cce/life_skills_cce.pdf',
};

export const RATING_LABELS = [
  'Not rated',
  '1 Just starting',
  '2 Some practice',
  '3 Fairly steady',
  '4 Strong most days',
  '5 Very strong',
];

export const SKILLS = [
  {
    id: 'self-awareness',
    name: 'Self-awareness',
    definition: 'Knowing what you feel, what you do well, what you find hard and what matters to you, as they are today.',
    why: [
      'Choices about stream, course and first job in India are often settled by marks, family hopes and what friends pick. When you know your own strengths, limits and values, you can take part in those talks instead of only following.',
      'It also helps you tell useful feedback from noise, and notice which kind of study or work leaves you with energy.',
    ],
    questions: [
      'Which two tasks in the last month did I finish with energy, and what exactly was I doing in them?',
      'Where do my marks, my interest and my family\'s hopes agree, and where do they pull apart?',
      'What is one thing people say I do well that I tend to ignore?',
    ],
    activity: {
      title: 'The three-line evening note',
      intro: 'Each evening write three short lines. Together they show your patterns by day 7.',
      days: [
        'Write three lines about today: one task that gave you energy, one that drained you, one you avoided.',
        'Write the same three lines. Add what you were doing and who was with you.',
        'Ask one person you trust to name a strength they have seen in you. Write it down without arguing.',
        'Write the three lines again. Mark any task that has now appeared twice.',
        'List the values you acted on this week, such as fairness, learning, family time or money, using what you really did.',
        'Read days 1 to 5. Circle the two patterns that repeat.',
        'Finish this sentence: "I seem to work best when ..." Then write one small thing to try next week.',
      ],
    },
    qa: [
      { q: 'Is self-awareness the same as confidence?', a: 'No. Confidence is how sure you feel. Self-awareness is how accurately you see yourself, so a person can feel sure and still misjudge their strengths.' },
      { q: 'Can a test tell me who I am?', a: 'A test gives one signal on one day. Treat it as a question to check against real tasks and honest feedback, not as a label.' },
    ],
  },
  {
    id: 'empathy',
    name: 'Empathy',
    definition: 'Understanding how another person feels and what they need from their point of view, and showing that you understand, even when you do not agree.',
    why: [
      'Group projects, hostel life, internships and family talks all put you with people who see things differently. In work that serves customers, patients or students, people trust someone who listens before answering.',
      'At home, a student who can understand a parent\'s worry about cost or safety is more likely to be heard on their own plan.',
    ],
    questions: [
      'Think of my last disagreement. What might the other person have been afraid of or hoping for?',
      'Whom do I find hard to listen to, and what happens inside me when they speak?',
      'When did someone understand me well, and what exactly did they do?',
    ],
    activity: {
      title: 'Listen first, then say it back',
      intro: 'Pick one person you speak to often and use them for the whole week.',
      days: [
        'Ask this person one open question about their day. Listen without giving advice.',
        'In a real talk, say it back once: "So you are saying ... is that right?"',
        'Talk for a few minutes with someone you usually overlook, such as a junior, a relative or a quiet classmate.',
        'Think of a disagreement. Write the other person\'s side in three sentences, the way they would say it.',
        'Notice one moment when you want to interrupt. Wait for one more sentence before you speak.',
        'Do one small helpful act that fits what the person said they need, not what you would need.',
        'Write what changed when you listened first, and whom you will listen to next.',
      ],
    },
    qa: [
      { q: 'Is empathy the same as agreeing with someone?', a: 'No. You can understand a feeling and still disagree about what to do. Understanding first makes the disagreement fairer.' },
      { q: 'Can empathy be learned?', a: 'Yes. Listening, asking open questions and checking that you understood are habits, and habits can be practised.' },
    ],
  },
  {
    id: 'critical-thinking',
    name: 'Critical thinking',
    definition: 'Checking a claim, a source or an argument before accepting it, by asking what the evidence is, who is saying it and what is missing.',
    why: [
      'Students in India hear a lot of advice about courses, coaching, colleges and jobs, and some of it comes from people who gain when you sign up. Checking a claim against an official source before you pay or decide protects your time and money.',
      'In exams and at work, it also helps you separate a reason from an opinion.',
    ],
    questions: [
      'What is one claim I believed recently without checking, and how could I check it now?',
      'Who gains if I accept this advice, and does that change how much weight I give it?',
      'What new fact would change my mind about a decision I am about to make?',
    ],
    activity: {
      title: 'Check one claim a day',
      intro: 'Use claims from your real week: forwarded messages, adverts, course promises, advice from seniors.',
      days: [
        'Pick one claim you saw today. Write it in one line.',
        'Ask three questions about it: Who said it? What is their proof? Who gains?',
        'Find an official or first-hand source for a claim, such as an exam body, a university or a government site.',
        'Look for a view that disagrees with yours. Write down its best point.',
        'Find a statement that mixes fact and opinion. Split it into two lines.',
        'Read a course or coaching advert. Write what it promises, what it proves and what it leaves out.',
        'Write the three checks you will use from now on, and one decision where they would have helped.',
      ],
    },
    qa: [
      { q: 'Is critical thinking the same as criticising?', a: 'No. It means testing an idea fairly, including your own, before you accept it.' },
      { q: 'How can I check advice about a course or job quickly?', a: 'Open the official page, get the fee and rules in writing, and ask someone who has finished the course or done the job. Treat a single forwarded message as a lead, not as proof.' },
    ],
  },
  {
    id: 'creative-thinking',
    name: 'Creative thinking',
    definition: 'Coming up with new or different ideas and ways of doing things, and trying them out, instead of repeating the first answer.',
    why: [
      'Many study and work problems have more than one answer: how to revise a hard topic, how to present a project, how to earn a little while studying. People who bring a workable new idea, and then test it, stand out in teams.',
      'It matters most where tasks keep changing and there is no fixed method to copy.',
    ],
    questions: [
      'Which problem do I face that I have only tried to solve in one way?',
      'When did I last make or change something using my own idea, and what helped me?',
      'What stops me from sharing a half-formed idea?',
    ],
    activity: {
      title: 'Ten ideas, then test one',
      intro: 'Choose one small, real problem, such as a dull revision plan or a weak presentation.',
      days: [
        'Write ten different ways to solve the problem. Include a few silly ones.',
        'Pick an everyday object and write five new uses for it.',
        'Choose two ideas from day 1 and join them into one.',
        'Ask someone from a different subject or age group how they would solve it. Write down their answer.',
        'Choose one idea and make the smallest version of it that you can use today.',
        'Try it in real life. Note what worked and what failed.',
        'Change the idea once, using what you saw, and write what you would keep.',
      ],
    },
    qa: [
      { q: 'Is creative thinking only for artists?', a: 'No. Accounting, engineering, teaching and science all use it when a problem has no ready method.' },
      { q: 'What if most of my ideas are poor?', a: 'Most first ideas are weak. The skill is to produce many, test small ones and keep the useful few.' },
    ],
  },
  {
    id: 'decision-making',
    name: 'Decision making',
    definition: 'Looking at your options, checking what matters and what you actually know, choosing one, and being ready to review the choice.',
    why: [
      'A few decisions come early and weigh heavily in India: stream after Class 10, course and college after Class 12, or job versus further study. Family, friends and marks pull in different directions.',
      'A clear way to decide helps you pick a next step you can explain, and change it when you learn something new.',
    ],
    questions: [
      'What decision do I face in the next three months, and by when must it be made?',
      'What do I know for sure, what am I only guessing, and what could I check?',
      'If this choice turns out wrong, what is the smallest step that would let me change course?',
    ],
    activity: {
      title: 'One real decision on paper',
      intro: 'Use a decision that is actually in front of you, not an imaginary one.',
      days: [
        'Write the decision in one sentence and the date by which it must be made.',
        'List at least three options. Include "wait" and "run a small test first".',
        'Write the three things that matter most to you in this decision.',
        'Write what you know, what you assume and what you can check. Check one assumption with an official source.',
        'Talk to one person who made a similar choice. Ask what they wish they had known.',
        'Compare the options against your three things. Note which option leaves you most room to change.',
        'Choose a next step, write a review date and tell one person.',
      ],
    },
    qa: [
      { q: 'Should I decide fast or slow?', a: 'Match the time to the cost of being wrong. A choice you can undo needs a quick test, while a costly one needs written checks first.' },
      { q: 'What if my family and I want different things?', a: 'Write both sets of reasons side by side, then find the facts you can check together, such as rules, fees and outcomes. Agree on one small step before the big one.' },
    ],
  },
  {
    id: 'problem-solving',
    name: 'Problem solving',
    definition: 'Finding the real cause of a problem, planning steps to fix it, trying them and checking whether they worked.',
    why: [
      'Study problems, such as a subject you keep failing, and work problems, such as a missed deadline, are rarely fixed by trying harder alone. People who name the problem exactly and fix one cause at a time save a lot of effort.',
      'Interviewers often ask how you handled a hard situation, and this skill gives you a real example to tell.',
    ],
    questions: [
      'Which problem keeps coming back for me, and what is its cause, not only its sign?',
      'What have I already tried, and what did each try teach me?',
      'Who could help with the part I cannot fix alone?',
    ],
    activity: {
      title: 'A problem in five steps',
      intro: 'Choose a real, small problem so that you can finish a full cycle in a week.',
      days: [
        'Write the problem in one clear sentence, without blaming anyone.',
        'Ask "why" up to five times to reach likely causes.',
        'List three possible fixes. Pick the one you can try within a day or two.',
        'Try the fix and write what you did.',
        'Check the result. Did the problem get smaller?',
        'If it did not, try the second fix or ask someone who knows the area.',
        'Write the story in three lines as you would tell an interviewer: the problem, your action, the result.',
      ],
    },
    qa: [
      { q: 'How is problem solving different from decision making?', a: 'Decision making chooses between options. Problem solving finds a cause and a fix, and often leads to a decision on the way.' },
      { q: 'What if I cannot solve it alone?', a: 'Asking for help is part of solving. Say what you tried and where you are stuck, and others can help faster.' },
    ],
  },
  {
    id: 'effective-communication',
    name: 'Effective communication',
    definition: 'Saying what you mean clearly and politely, in speech and in writing, and listening so that the other person\'s message is understood too.',
    why: [
      'Interviews, group discussions, vivas, emails to professors and messages to clients all depend on clear communication. Many students in India study in one language and work in another, which can make capable people hold back.',
      'Short, clear messages and good listening count at least as much as fancy English.',
    ],
    questions: [
      'When was a message of mine misunderstood, and what could I have changed?',
      'In which place do I stay silent (class, interview, home), and what would help me speak?',
      'How do I usually ask for help or say no, and is it clear to the other person?',
    ],
    activity: {
      title: 'One clear message a day',
      intro: 'Use real messages and talks from your week. Keep each one short.',
      days: [
        'Write a three-sentence message: the main point, one reason and what you need. Send or say it.',
        'Ask a friend to explain back what they understood from it. Note any gap.',
        'Record a one-minute voice note on a topic you know. Listen to it and note one fix.',
        'Write a short formal email to a teacher, office or company, with a clear subject line and request.',
        'In a group, ask one question and then wait without filling the silence.',
        'Practise a polite "no" or "I need time" for one real request.',
        'Say or record a one-minute self-introduction for an interview. Write one thing to improve.',
      ],
    },
    qa: [
      { q: 'Do I need perfect English to communicate well?', a: 'No. Simple, clear sentences in a language the other person understands work better than difficult words. Improve step by step.' },
      { q: 'How can I speak up when I am nervous?', a: 'Prepare your first sentence, speak slowly, and begin in small settings such as a study group before a larger room.' },
    ],
  },
  {
    id: 'interpersonal-relationships',
    name: 'Interpersonal relationships',
    definition: 'Building and keeping healthy relationships with family, friends, teachers and colleagues, and setting limits on those that harm you.',
    why: [
      'Classmates, seniors, teachers and mentors often share information about projects, internships and openings. Indian colleges and workplaces bring together people of many languages, regions and backgrounds, so working well with others is part of the job.',
      'Good relationships also keep you steady when exams and deadlines get hard.',
    ],
    questions: [
      'Who are the three people I can ask for honest advice, and when did I last thank them?',
      'Which relationship needs more care from me, and what is one small step?',
      'Where do I find it hard to set a limit, and what would a respectful limit sound like?',
    ],
    activity: {
      title: 'Seven small contacts',
      intro: 'Each day is one small act. No big events are needed.',
      days: [
        'List five people who matter for your study or work.',
        'Send a thank-you or a check-in message to one of them.',
        'Offer help to a classmate or junior with something you know well.',
        'Talk with someone from a different background or language. Ask about their study or work.',
        'Handle one small disagreement by saying what you saw and what you need, without blame.',
        'Ask a senior or teacher one thoughtful question about their path.',
        'Write which relationships gave you energy, which drained you, and one promise you will keep.',
      ],
    },
    qa: [
      { q: 'Is building contacts the same as using people?', a: 'No. Real contacts are two-way. Help where you can, ask only for what is fair and say thanks.' },
      { q: 'What if a friend keeps pulling me away from study?', a: 'Be honest about your goal and suggest another time to meet. Notice whether the friend respects that.' },
    ],
  },
  {
    id: 'coping-with-stress',
    name: 'Coping with stress',
    definition: 'Noticing what causes pressure and how your body and mind react to it, then using healthy steps to lower it so you can keep going.',
    why: [
      'Board exams, entrance exams, results, fees and family hopes bring real pressure, and many students feel they must hide it. Work adds deadlines and uncertainty.',
      'Learning to spot early signs and take simple steps helps you keep studying and working without burning out. This is general information, not medical advice. If stress is heavy, lasts for weeks or affects sleep and eating, talk to a doctor, a counsellor or a trusted adult.',
    ],
    questions: [
      'What are the three biggest sources of pressure for me now, and which parts can I change?',
      'What are my early signs of stress, such as poor sleep, short temper, headaches or avoiding work?',
      'What simple things help me calm down, and when did I last do one?',
    ],
    activity: {
      title: 'A stress map and one daily reset',
      intro: 'Do the steps in your normal day. Skip any step that does not feel safe or comfortable, and ask a trusted adult for help if stress feels too heavy.',
      days: [
        'List what is causing pressure. Mark each item: I can change it, I can influence it, or I must accept it.',
        'Catch your early signs at least once today and write them down.',
        'When you feel tense, breathe in slowly and out slowly for a few breaths.',
        'Take a short walk or stretch between study blocks.',
        'Break one big task into small steps and finish the first step.',
        'Tell one trusted person what you are carrying.',
        'Look back: which reset helped most? Write when you will use it next week.',
      ],
    },
    qa: [
      { q: 'Is all stress bad?', a: 'No. A little pressure can sharpen focus. Stress that stays high and harms sleep, health or mood needs attention.' },
      { q: 'When should I ask for help?', a: 'Ask when stress lasts, when sleep or eating is affected, or when you feel unsafe. Speak to a doctor, a counsellor or a trusted adult without waiting.' },
    ],
  },
  {
    id: 'coping-with-emotions',
    name: 'Coping with emotions',
    definition: 'Recognising what you feel, naming it, understanding why, and choosing how to act instead of acting on the first impulse.',
    why: [
      'Results, comparison with classmates, interview rejections and arguments at home bring strong feelings such as anger, fear, shame and disappointment. Naming the feeling and pausing helps you respond in a way you will not regret in class, in an interview or in a first job.',
      'People who recover well from setbacks keep learning and keep working.',
    ],
    questions: [
      'Which feeling is hardest for me to handle, and what usually sets it off?',
      'What do I usually do when I feel it, and what happens afterwards?',
      'What is one pause or action I could use instead next time?',
    ],
    activity: {
      title: 'Name it, pause, choose',
      intro: 'Use real moments from your week. Share these notes only with people you trust.',
      days: [
        'Three times today, stop and name what you feel in one or two words.',
        'For each feeling, write how strong it was from 1 to 10 and what happened just before.',
        'When a strong feeling comes, pause and take a few slow breaths before you reply.',
        'Write a recent setback in three lines: what happened, what you felt, what it taught you.',
        'Do one healthy thing that helps you feel steadier, such as talking to a friend, walking, music or quiet time.',
        'Take one unkind thought about yourself and rewrite it as a fair one.',
        'Review the week: which feelings came back, and what is your pause plan?',
      ],
    },
    qa: [
      { q: 'Should I hide my feelings?', a: 'Choose the right time and place, but do not hide them for long. Sharing with someone safe stops feelings from building up.' },
      { q: 'Is it wrong to feel angry or sad?', a: 'No. Feelings are signals. What matters is what you do next.' },
    ],
  },
];
