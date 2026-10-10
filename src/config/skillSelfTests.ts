// Definitions for the self-rating tests that share one quiz component
// (src/components/SkillSelfTest.astro). Each test is a real standalone page:
// its own questions, its own score areas and its own interpretation.
// Scores come only from the visitor's own ratings. Nothing here claims a norm,
// a percentile, a pass mark or a hiring outcome.

export type SkillTestId = 'confused-after-10th' | 'communication' | 'soft-skills';

export type SkillTestDomain = {
  key: string;
  name: string;
  short: string;
  /** What a high score in this area means. */
  strong: string;
  /** What a low score in this area means. */
  weak: string;
  /** Concrete things to do over the next two weeks if this is the lowest area. */
  plan: string[];
  /** Optional internal next step when this is the lowest area. */
  next?: { href: string; label: string };
};

export type SkillTestQuestion = { d: string; text: string; reverse?: boolean };

export type SkillTestLink = { href: string; title: string; description: string };

export type SkillTest = {
  id: SkillTestId;
  slug: string;
  pageUrl: string;
  breadcrumbName: string;
  metaTitle: string;
  metaDescription: string;
  h1Lead: string;
  h1Accent: string;
  eyebrow: string;
  heroSub: string;
  stats: { value: string; label: string }[];
  /** Which full assessment the ribbon and compare card point to. */
  main: 'class10' | 'picker';
  mainChecks: string[];
  reportTitle: string;
  reportFile: string;
  reportKicker: string;
  resultKicker: string;
  scoreLabel: string;
  /** Wording for the three score bands, from the visitor's point of view. */
  bands: { high: string; mid: string; low: string };
  domainsHeading: string;
  domainsIntro: string;
  domains: SkillTestDomain[];
  questions: SkillTestQuestion[];
  readingTitle: string;
  readingSections: { title: string; body: string[] }[];
  limits: string[];
  faqs: { q: string; a: string }[];
  related: SkillTestLink[];
  breadcrumbDescription: string;
  webAppDescription: string;
};

const BASE = 'https://futurecareerschool.com/services/assessments/';

const CONFUSED_10: SkillTest = {
  id: 'confused-after-10th',
  slug: 'confused-about-career-after-10th-test',
  pageUrl: `${BASE}confused-about-career-after-10th-test/`,
  breadcrumbName: 'Confused After 10th Test',
  metaTitle: 'Confused About Career After 10th? Free Clarity Test',
  metaDescription:
    'Confused about your career after 10th? Take this free 20-question test to find what is really blocking your decision. Instant result, no sign-up.',
  h1Lead: 'Confused about your career after 10th?',
  h1Accent: 'Find out why',
  eyebrow: 'Free 5-minute clarity test',
  heroSub:
    'Being confused after Class 10 is not one problem. For some students it is not knowing themselves, for others it is not knowing the options, family pressure, or being unable to decide. Rate 20 statements and see which one is actually holding you back.',
  stats: [
    { value: '20', label: 'short statements' },
    { value: '5', label: 'clarity areas' },
    { value: 'Free', label: 'no sign-up' },
  ],
  main: 'class10',
  mainChecks: [
    'Which of five areas is causing your confusion',
    'Your own ratings only, in about 5 minutes',
    'A first step for the lowest area',
  ],
  reportTitle: 'Career Clarity Report After 10th',
  reportFile: 'future-career-school-career-clarity-after-10th.pdf',
  reportKicker: 'CAREER CLARITY REPORT',
  resultKicker: 'Your clarity result',
  scoreLabel: 'Overall clarity',
  bands: {
    high: 'You already have fairly good clarity here.',
    mid: 'You have some clarity here, with gaps worth closing.',
    low: 'This is a main source of your confusion right now.',
  },
  domainsHeading: 'Five reasons students feel confused after 10th',
  domainsIntro:
    'Each statement belongs to one of these areas. Your lowest area is the one to work on first, because advice meant for a different kind of confusion rarely helps.',
  domains: [
    {
      key: 'self',
      name: 'Knowing yourself',
      short: 'Knowing what you enjoy and do well',
      strong: 'You can name subjects and activities you enjoy and can point to things you do well.',
      weak: 'You are not sure what you enjoy or what you are good at, so every option looks equally possible.',
      plan: [
        'Write down the three school tasks in the last year that you enjoyed most and the three you avoided, with one line on why for each.',
        'Ask two people who see your work, such as a teacher and a friend, what you are good at. Compare with your own list.',
        'Take the stream selector test after 10th to turn those hints into a Science, Commerce or Arts direction.',
      ],
      next: {
        href: '/services/assessments/stream-selector-test-after-10th/',
        label: 'Take the stream selector test after 10th',
      },
    },
    {
      key: 'options',
      name: 'Knowing the options',
      short: 'Knowing what each route leads to',
      strong: 'You know the main routes after Class 10 and roughly what each one leads to.',
      weak: 'You do not know enough about streams, diplomas and careers to compare them, so you are choosing from a blur.',
      plan: [
        'Read one overview of every route after 10th, then pick the two that look most interesting and ignore the rest for now.',
        'For each of those two, find out what the next three years of study look like and which exams or entry steps come after.',
        'Do not judge a route by its name alone. Judge it by the work people in it actually do day to day.',
      ],
      next: {
        href: '/blog/stream-selection/career-options-after-10th/',
        label: 'Read career options after 10th',
      },
    },
    {
      key: 'pressure',
      name: 'Pressure from others',
      short: 'Family, friends and what others expect',
      strong: 'Your choice feels like your own, and the people around you are mostly supportive of you thinking it through.',
      weak: 'What your family, friends or neighbours expect is pulling harder than your own preference, and that is making the decision feel impossible.',
      plan: [
        'Write what each person around you wants for you, and the reason behind it. Most expectations are about safety, not about the subject.',
        'Prepare one honest conversation with the person whose opinion matters most, starting with what you have found out, not with a demand.',
        'Bring facts to that conversation: what the route studies, what it costs and what work it leads to.',
      ],
      next: {
        href: '/services/career-counselling-and-career-guidance/career-guidance-for-confused-students/',
        label: 'See career guidance for confused students',
      },
    },
    {
      key: 'process',
      name: 'Deciding',
      short: 'How you make and test a choice',
      strong: 'You compare options on a few clear points and can accept a good choice that is not a perfect one.',
      weak: 'You keep going round in circles, waiting for a perfect answer or changing your mind with every new opinion.',
      plan: [
        'Pick three things that matter to you, such as interest, strengths and future income, and score your two top routes on each.',
        'Set a decision date and tell one person about it. A date turns endless thinking into a task.',
        'Plan a review point a few months in. Options to adjust differ by board and college, so check what is possible before you need it. Knowing there is a review point lowers the fear.',
      ],
      next: {
        href: '/services/assessments/career-aptitude-test-after-10th/',
        label: 'Take the career aptitude test after 10th',
      },
    },
    {
      key: 'action',
      name: 'Taking the next step',
      short: 'Readiness to act on a choice',
      strong: 'You are ready to take small steps, such as asking questions or trying things, even before you are fully sure.',
      weak: 'You feel stuck, put off thinking about it, or wait for someone else to decide.',
      plan: [
        'Choose one small step you can finish this week, such as talking to a senior or watching a day-in-the-life video for one route.',
        'Keep a note of what you learn from each step. Progress reduces confusion faster than more thinking.',
        'If you feel stuck for more than a few weeks, talk to a counsellor or a trusted teacher instead of waiting it out alone.',
      ],
      next: {
        href: '/services/assessments/class-10-and-below/',
        label: 'Take the full Class 10 and below assessment',
      },
    },
  ],
  questions: [
    { d: 'self', text: 'I can name two or three school subjects I genuinely enjoy, not just the ones I score well in.' },
    { d: 'options', text: 'I know what studying Science, Commerce and Arts in Class 11 and 12 actually involves.' },
    { d: 'pressure', text: 'The stream I am leaning towards is one I chose, not one others chose for me.' },
    { d: 'process', text: 'When I compare two options, I look at a few clear points instead of just going with a feeling.' },
    { d: 'action', text: 'I have already done something to find out more, such as asking someone, reading or watching about a career.' },
    { d: 'self', text: 'I know which kinds of tasks I do well, such as solving, explaining, creating, organising or helping.' },
    { d: 'options', text: 'I know that diploma, ITI and polytechnic routes exist after Class 10 and what they lead to.' },
    { d: 'pressure', text: 'I can talk to my family about what I want without it turning into an argument.', reverse: false },
    { d: 'process', text: 'I change my mind about my choice every time I hear a new opinion.', reverse: true },
    { d: 'action', text: 'I am putting off thinking about this decision because it makes me uncomfortable.', reverse: true },
    { d: 'self', text: 'Most of the time I have no idea what I would enjoy doing as a job.', reverse: true },
    { d: 'options', text: 'I can name at least five careers and what people in them do every day.' },
    { d: 'pressure', text: 'What my relatives or friends think matters more to me than what I think.', reverse: true },
    { d: 'process', text: 'I am comfortable choosing something good even if I cannot be sure it is the best.' },
    { d: 'action', text: 'I can list the next two or three things I need to do before I decide.' },
    { d: 'self', text: 'I can describe what I am good at in a way a stranger would understand.' },
    { d: 'options', text: 'Most of what I know about careers comes from one or two people, and I have not checked it elsewhere.', reverse: true },
    { d: 'pressure', text: 'Even if my family disagreed, I could explain my reasons calmly.' },
    { d: 'process', text: 'I am waiting for one perfect answer that will make the decision obvious.', reverse: true },
    { d: 'action', text: 'I feel I can move forward on this decision within the next few weeks.' },
  ],
  readingTitle: 'What to do with your result',
  readingSections: [
    {
      title: 'Confusion is usually one problem, not five',
      body: [
        'Many students who feel confused after Class 10 are mainly stuck on one of these areas, and the others may be in better shape than they feel. The lowest area on your report is the best place to start because fixing it often makes the rest feel lighter.',
        'If two areas are close for lowest, begin with the one you can act on this week. Knowing the options and taking a small step are usually the quickest to improve.',
      ],
    },
    {
      title: 'What this test cannot do',
      body: [
        'It cannot recommend a stream. It shows what is blocking the decision. When the block is knowing yourself, the stream selector test after 10th and the career aptitude test after 10th are the next step. When it is pressure, the right move is a better conversation with your family, and sometimes a counsellor in the room.',
      ],
    },
    {
      title: 'When to get help from a person',
      body: [
        'If the same area stays low after two weeks of trying the steps in your report, or if the confusion is affecting sleep, studies or mood, speak to a trusted teacher, a parent or a career counsellor. A free test can narrow the problem. Fuller clarity usually comes from continuous guidance built around your own situation.',
      ],
    },
  ],
  limits: [
    'This is a self-rating tool for reflection. It is not a psychological or clinical test.',
    'Your scores come only from your own answers and do not compare you with other students.',
    'It does not predict marks, admission or income. It points to where your decision is stuck.',
  ],
  faqs: [
    {
      q: 'I am confused about my career after 10th. Where do I start?',
      a: 'Start by finding out what kind of confusion it is. Rate the 20 statements here, then work on your lowest area first. Not knowing yourself, not knowing the options, family pressure, indecision and not acting are five different problems with different fixes.',
    },
    {
      q: 'Is it normal to be confused after Class 10?',
      a: 'Yes. Many students at 15 or 16 may not yet have seen enough of different work to know what they like. Being unsure is a common starting point, and it can be worked through with a few focused steps.',
    },
    {
      q: 'Does this test tell me which stream to take?',
      a: 'No. It tells you what is blocking your decision. To get a stream suggestion, take the free stream selector test after 10th, or the full Class 10 and below assessment, which combines interests, aptitude and stream fit in one report.',
    },
    {
      q: 'What if my parents want a different stream from the one I like?',
      a: 'That shows up as Pressure from others. The steps in your report focus on understanding each person\'s reason and bringing facts to a calm conversation. If it stays stuck, a counsellor can help the family look at the choice together.',
    },
    {
      q: 'Can I take this test more than once?',
      a: 'Yes. Retake it after you have tried the steps for two or three weeks. If your lowest area has moved up, the steps are working.',
    },
    {
      q: 'Is this test free?',
      a: 'Yes. It is free, needs no sign-up and gives an instant result you can also download as a PDF.',
    },
  ],
  related: [
    {
      href: '/services/assessments/stream-selector-test-after-10th/',
      title: 'Stream Selector Test After 10th',
      description: 'A quick 15-question quiz that suggests Science, Commerce or Arts once you know what you want to explore.',
    },
    {
      href: '/services/assessments/career-aptitude-test-after-10th/',
      title: 'Career Aptitude Test After 10th',
      description: 'A free aptitude test for students who want strength-fit clarity before choosing a stream.',
    },
    {
      href: '/services/assessments/class-10-and-below/',
      title: 'Class 10 and Below Assessment',
      description: 'The full free assessment that combines interests, aptitude, thinking style and stream fit in one report.',
    },
    {
      href: '/blog/stream-selection/career-options-after-10th/',
      title: 'Career Options After 10th',
      description: 'A plain overview of the routes open after Class 10 and where each leads.',
    },
    {
      href: '/services/career-counselling-and-career-guidance/career-guidance-for-confused-students/',
      title: 'Career Guidance for Confused Students',
      description: 'Continuous guidance with an expert and a small group for students who want help beyond a test.',
    },
  ],
  breadcrumbDescription: 'Free career clarity test for students confused about their career after 10th.',
  webAppDescription:
    'A free original 20-statement self-rating test that shows which of five areas is behind a student\'s confusion about career after Class 10: knowing yourself, knowing the options, pressure from others, deciding and taking the next step.',
};

const COMMUNICATION: SkillTest = {
  id: 'communication',
  slug: 'communication-skills-assessment',
  pageUrl: `${BASE}communication-skills-assessment/`,
  breadcrumbName: 'Communication Skills Assessment',
  metaTitle: 'Communication Skills Assessment | Free Self-Test',
  metaDescription:
    'Free communication skills assessment: rate 20 workplace situations and get scores for listening, speaking, writing, feedback and presenting. No sign-up.',
  h1Lead: 'Communication Skills',
  h1Accent: 'Assessment',
  eyebrow: 'Free self-assessment for students and professionals',
  heroSub:
    'Communication is not one skill. Someone can write a clear email and freeze in a meeting, or speak well and miss what others say. Rate 20 everyday situations and see your scores for listening, speaking, writing, handling feedback and presenting.',
  stats: [
    { value: '20', label: 'everyday situations' },
    { value: '5', label: 'skill areas' },
    { value: 'Free', label: 'PDF report' },
  ],
  main: 'picker',
  mainChecks: [
    'Five communication areas from your own ratings',
    'About 5 minutes',
    'A two-week practice plan for your lowest area',
  ],
  reportTitle: 'Communication Skills Report',
  reportFile: 'future-career-school-communication-skills-report.pdf',
  reportKicker: 'COMMUNICATION SKILLS REPORT',
  resultKicker: 'Your communication result',
  scoreLabel: 'Overall communication',
  bands: {
    high: 'A relative strength.',
    mid: 'Developing, with room to grow.',
    low: 'The best place to practise first.',
  },
  domainsHeading: 'Five areas this communication skills assessment covers',
  domainsIntro:
    'Interviews and workplaces often test communication as several separate things. These five areas show up in interviews, group discussions, emails and day-to-day work.',
  domains: [
    {
      key: 'listen',
      name: 'Listening',
      short: 'Understanding before replying',
      strong: 'You let people finish, check what they meant and respond to the point they made.',
      weak: 'You tend to plan your reply while others talk, or miss details and have to ask again.',
      plan: [
        'In your next three conversations, repeat the other person\'s main point back in one sentence before you answer.',
        'After a class, call or meeting, write three things the other person said, using their words as far as you can.',
        'Ask one question that builds on what was said rather than starting a new topic.',
      ],
    },
    {
      key: 'speak',
      name: 'Speaking clearly',
      short: 'Saying one clear point at a time',
      strong: 'You organise your point before you speak and people usually understand you the first time.',
      weak: 'You ramble, start before you know your point, or find others often ask you to repeat or explain.',
      plan: [
        'Practise a 30-second answer to "tell me about yourself" and "why this subject or job". Record yourself once and listen.',
        'Use a simple order: your point first, a reason, then an example.',
        'Speak slowly in your next group conversation and leave a short pause after each point.',
      ],
    },
    {
      key: 'write',
      name: 'Writing',
      short: 'Emails, messages and short documents',
      strong: 'Your messages are short, clear and easy to act on, with the request or point near the top.',
      weak: 'Your messages run long, bury the request, or need follow-up questions before anyone can act.',
      plan: [
        'Rewrite three of your recent messages with the main request in the first line and no more than five sentences.',
        'Read every important email aloud once before sending to catch missing words and unclear sentences.',
        'Keep a folder of two or three well-written messages from others and copy their structure, not their words.',
      ],
    },
    {
      key: 'feedback',
      name: 'Feedback and disagreement',
      short: 'Giving and receiving honest input',
      strong: 'You can hear criticism without getting defensive and can disagree politely and clearly.',
      weak: 'You avoid disagreeing, take criticism personally, or let small issues grow because you do not raise them.',
      plan: [
        'The next time someone gives you feedback, say "thank you, let me think about it" and write down what you heard before replying.',
        'Practise one polite disagreement: state what you agree with, then say what you see differently and why.',
        'Raise one small issue early this week instead of waiting until it grows.',
      ],
    },
    {
      key: 'present',
      name: 'Presenting and confidence',
      short: 'Speaking to a group or in an interview',
      strong: 'You stay fairly calm in front of others and can hold a group\'s attention for a few minutes.',
      weak: 'Speaking to a group or in an interview makes you freeze, rush or avoid it altogether.',
      plan: [
        'Volunteer for one small speaking task this month, such as a two-minute update, and prepare only three points.',
        'Practise out loud, standing up, with a timer. Practising silently in your head does not prepare your voice.',
        'Look at three people in turn while you speak instead of at notes or the floor.',
      ],
    },
  ],
  questions: [
    { d: 'listen', text: 'In a conversation I wait until the other person has finished before I reply.' },
    { d: 'speak', text: 'Before I answer a question, I decide my main point first.' },
    { d: 'write', text: 'When I write an email or message, I put the request or main point in the first line or two.' },
    { d: 'feedback', text: 'When someone criticises my work, I can listen without getting defensive.' },
    { d: 'present', text: 'I can speak in front of a group of people I know without freezing.' },
    { d: 'listen', text: 'I often realise later that I missed an important detail someone told me.', reverse: true },
    { d: 'speak', text: 'People often ask me to repeat or explain what I said.', reverse: true },
    { d: 'write', text: 'I read my important messages through before I send them.' },
    { d: 'feedback', text: 'I can disagree with someone politely and still keep the relationship good.' },
    { d: 'present', text: 'In an interview or group discussion I avoid speaking because I feel nervous.', reverse: true },
    { d: 'listen', text: 'I check that I have understood by repeating back what the other person meant.' },
    { d: 'speak', text: 'I can explain something I know to a person who has never heard of it, in simple words.' },
    { d: 'write', text: 'Others often need to ask follow-up questions after reading my messages.', reverse: true },
    { d: 'feedback', text: 'When something bothers me, I raise it early instead of letting it build up.' },
    { d: 'present', text: 'I can make a two-minute talk with a clear beginning, middle and end.' },
    { d: 'listen', text: 'I ask questions that show I paid attention to what was just said.' },
    { d: 'speak', text: 'I tend to ramble before getting to my point.', reverse: true },
    { d: 'write', text: 'I adjust the tone of my writing for different readers, such as a friend and a teacher or manager.' },
    { d: 'feedback', text: 'I avoid giving honest feedback because I worry about upsetting people.', reverse: true },
    { d: 'present', text: 'I prepare and practise out loud before an important talk or interview.' },
  ],
  readingTitle: 'How to use your communication scores',
  readingSections: [
    {
      title: 'Why five scores matter more than one',
      body: [
        'A single communication score hides what you can actually work on. Listening, speaking, writing, handling feedback and presenting are practised in different ways, and many people are clearly stronger in two or three of them.',
        'Look at the gap between your highest and lowest area. A big gap means focused practice in one area will move your overall result quickly.',
      ],
    },
    {
      title: 'Where communication shows up in careers',
      body: [
        'Interviews test speaking and listening. Most office work depends on written messages. Team roles depend on feedback and disagreement, and leadership or client roles depend on presenting. Roles in sales, teaching, HR, content, consulting and management lean heavily on all five, but nearly every skilled role needs at least writing and listening.',
        'Communication is a skill you can build, which makes it one of the easier skills to turn into an advantage when you are early in your career.',
      ],
    },
    {
      title: 'Self-rating has limits',
      body: [
        'People tend to rate themselves differently from how others see them. After you read your report, ask two people you work or study with to rate you on the same five areas and compare. Differences are the most useful part.',
      ],
    },
  ],
  limits: [
    'This is a self-rating tool. It shows how you describe your own habits, not how others experience your communication.',
    'It does not measure English fluency, accent, grammar or vocabulary, and it is not an employer or language test.',
    'It does not predict interview results, selection or salary.',
  ],
  faqs: [
    {
      q: 'What does this communication skills assessment measure?',
      a: 'It measures five areas from your own ratings: listening, speaking clearly, writing, giving and receiving feedback, and presenting. You get a score for each, an overall score and a two-week practice plan for your lowest area.',
    },
    {
      q: 'Is this a writing skills assessment too?',
      a: 'Writing is one of the five areas, covering emails, messages and short documents. It does not grade grammar or vocabulary. It checks the habits that make written messages clear and easy to act on.',
    },
    {
      q: 'Is this the same as a spoken English test?',
      a: 'No. Communication here means how clearly and effectively you listen, speak, write and deal with feedback in any language. It is not a test of English fluency.',
    },
    {
      q: 'Can students use it, or is it only for working people?',
      a: 'Both. The situations are everyday ones, such as class discussions, group projects, emails, interviews and team work, so they apply to students and working professionals.',
    },
    {
      q: 'How can I improve my lowest score?',
      a: 'The report gives three specific practices for your lowest area. Practise for two weeks, then retake the assessment to see if the score moves. Asking two people for their view on the same area is also useful.',
    },
    {
      q: 'Is it free?',
      a: 'Yes. It is free, needs no sign-up and the result can be downloaded as a PDF.',
    },
  ],
  related: [
    {
      href: '/services/assessments/soft-skills-self-assessment/',
      title: 'Soft Skills Self-Assessment',
      description: 'Leadership, teamwork, adaptability, ownership and problem solving, scored in one report.',
    },
    {
      href: '/services/assessments/emotional-intelligence-test-careers/',
      title: 'Emotional Intelligence Test for Careers',
      description: 'Five emotional-skill scores that sit underneath listening, feedback and staying composed.',
    },
    {
      href: '/services/assessments/disc-personality-test-careers/',
      title: 'DISC Personality Test for Careers',
      description: 'A workplace behaviour-style profile that shows how you naturally tend to communicate.',
    },
    {
      href: '/services/assessments/verbal-reasoning-test/',
      title: 'Verbal Reasoning Test',
      description: 'A free test of reading, language and evidence-based reasoning, with detailed explanations.',
    },
    {
      href: '/blog/career-options/career-options-for-people-good-at-communication-india/',
      title: 'Career Options for People Good at Communication',
      description: 'Careers in India where strong communication is a real advantage.',
    },
  ],
  breadcrumbDescription: 'Free communication skills assessment with five skill scores.',
  webAppDescription:
    'A free original 20-statement communication skills self-assessment covering listening, speaking clearly, writing, feedback and disagreement, and presenting, with five scores, an overall score, a practice plan and a downloadable report.',
};

const SOFT_SKILLS: SkillTest = {
  id: 'soft-skills',
  slug: 'soft-skills-self-assessment',
  pageUrl: `${BASE}soft-skills-self-assessment/`,
  breadcrumbName: 'Soft Skills Self-Assessment',
  metaTitle: 'Soft Skills Self-Assessment | Leadership & Teamwork Test',
  metaDescription:
    'Free soft skills self-assessment: 25 statements and five scores for leadership, teamwork, adaptability, ownership and problem solving. Instant result.',
  h1Lead: 'Soft Skills',
  h1Accent: 'Self-Assessment',
  eyebrow: 'Leadership, teamwork and employability in one report',
  heroSub:
    'Employers keep saying they want soft skills, but the phrase is vague. This free self-assessment turns it into five concrete areas, leadership, teamwork and social skills, adaptability, ownership and problem solving, and shows which one to build first.',
  stats: [
    { value: '25', label: 'statements' },
    { value: '5', label: 'skill areas' },
    { value: 'Free', label: 'PDF report' },
  ],
  main: 'picker',
  mainChecks: [
    'Five workplace skill areas from your own ratings',
    'About 6 minutes',
    'Where to build first, with a two-week plan',
  ],
  reportTitle: 'Soft Skills Report',
  reportFile: 'future-career-school-soft-skills-report.pdf',
  reportKicker: 'SOFT SKILLS REPORT',
  resultKicker: 'Your soft skills result',
  scoreLabel: 'Overall soft skills',
  bands: {
    high: 'A relative strength.',
    mid: 'Developing, with room to grow.',
    low: 'The best place to build first.',
  },
  domainsHeading: 'Five soft skill areas this self-assessment covers',
  domainsIntro:
    'These are the areas hiring managers and team leads describe most often when they talk about employability, in the form of everyday behaviours you can rate honestly.',
  domains: [
    {
      key: 'lead',
      name: 'Leadership',
      short: 'Guiding a group towards a goal',
      strong: 'You step up when a group needs direction and help others get clear about what to do.',
      weak: 'You wait for others to take charge, or take charge without involving the group.',
      plan: [
        'Lead one small thing in the next two weeks, such as a study group, a project task or a meeting agenda.',
        'At the start, say the goal in one sentence and ask each person what they will do.',
        'Afterwards, ask one person what you could have done better.',
      ],
    },
    {
      key: 'team',
      name: 'Teamwork and social skills',
      short: 'Working with and relating to others',
      strong: 'You get along with different kinds of people, share credit and make others feel included.',
      weak: 'You prefer to work alone, find it hard to read or connect with others, or end up in repeated friction.',
      plan: [
        'In your next group task, ask a quieter person for their view before giving your own.',
        'Thank someone specifically for what they did, not just in general.',
        'Spend ten minutes this week talking with someone from a different group or batch.',
      ],
    },
    {
      key: 'adapt',
      name: 'Adaptability',
      short: 'Coping with change and learning new things',
      strong: 'You adjust quickly when plans change and are comfortable learning something new.',
      weak: 'Change makes you stressed or resistant, and you prefer to stick to what you already know.',
      plan: [
        'Choose one new tool or skill and spend 30 minutes a day on it for two weeks.',
        'When a plan changes, write down the new plan in three lines before reacting to it.',
        'Ask someone who recently changed field or role what helped them adjust.',
      ],
    },
    {
      key: 'own',
      name: 'Ownership and reliability',
      short: 'Finishing what you start and being dependable',
      strong: 'People can count on you to deliver on time and to tell them early if something will slip.',
      weak: 'You often miss deadlines, wait to be reminded, or only tell people about problems when it is too late.',
      plan: [
        'Write down every commitment you make this week and the date for it, and tick it off when done.',
        'When something will be late, tell the person as soon as you know, with a new date.',
        'Finish one small thing completely before starting the next.',
      ],
    },
    {
      key: 'solve',
      name: 'Problem solving',
      short: 'Working out what to do when things are unclear',
      strong: 'You break an unclear problem into parts, try options and learn from what happens.',
      weak: 'You get stuck when no one gives clear instructions or you wait for the answer from someone else.',
      plan: [
        'Next time you are stuck, write the problem in one sentence and list three possible fixes before asking for help.',
        'Ask for help by sharing what you tried, not just that you are stuck.',
        'After solving a problem, write down what worked so you can reuse it.',
      ],
    },
  ],
  questions: [
    { d: 'lead', text: 'When a group has no clear direction, I am usually the one who suggests a plan.' },
    { d: 'team', text: 'I get along with people who are very different from me.' },
    { d: 'adapt', text: 'When plans change suddenly, I adjust quickly instead of getting stuck.' },
    { d: 'own', text: 'People can rely on me to do what I said I would do, on time.' },
    { d: 'solve', text: 'When I face an unfamiliar problem, I try to work out options before asking for help.' },
    { d: 'lead', text: 'I can get a group to agree on who does what.' },
    { d: 'team', text: 'I notice when someone in a group is being left out and I include them.' },
    { d: 'adapt', text: 'I enjoy learning a new tool or skill, even if I start badly.' },
    { d: 'own', text: 'I tell people early when I will miss a deadline.' },
    { d: 'solve', text: 'I break big or unclear problems into smaller parts.' },
    { d: 'lead', text: 'I would rather wait for someone else to take charge in a group.', reverse: true },
    { d: 'team', text: 'I give credit to others when a group does well.' },
    { d: 'adapt', text: 'I get very stressed when I have to change how I usually do things.', reverse: true },
    { d: 'own', text: 'I often need reminders to finish what I committed to.', reverse: true },
    { d: 'solve', text: 'I get stuck when nobody tells me exactly what to do.', reverse: true },
    { d: 'lead', text: 'I can explain a goal clearly so others know what success looks like.' },
    { d: 'team', text: 'I find it hard to work with people whose style is different from mine.', reverse: true },
    { d: 'adapt', text: 'I have recently learned something new that I did not think I could.' },
    { d: 'own', text: 'I finish what I start rather than leaving things half done.' },
    { d: 'solve', text: 'After a problem is solved, I note what worked so I can use it again.' },
    { d: 'lead', text: 'I ask the people I lead or work with how I can do better.' },
    { d: 'team', text: 'I can disagree in a group without making things personal.' },
    { d: 'adapt', text: 'When something does not work, I try a different way instead of repeating the same thing.' },
    { d: 'own', text: 'I keep track of my commitments in a list or calendar.' },
    { d: 'solve', text: 'I make a decision with the information I have instead of waiting for certainty.' },
  ],
  readingTitle: 'How to read your soft skills result',
  readingSections: [
    {
      title: 'Soft skills are behaviours, not personality',
      body: [
        'Each statement describes something you do, such as telling people early about a delay or asking a quieter person for their view. That makes these skills trainable. A lower score means a habit you have not practised yet, not a fixed trait.',
      ],
    },
    {
      title: 'Why these five areas',
      body: [
        'Leadership, teamwork and social skills, adaptability, ownership and problem solving cover most of what job descriptions mean by employability skills. Technical skill gets you shortlisted, and these areas decide how well you work once you are in the team.',
        'If you are early in your career, ownership and problem solving are often the quickest to build and the most visible to a manager. If you are moving into a lead role, leadership and teamwork matter more.',
      ],
    },
    {
      title: 'Turn scores into proof',
      body: [
        'A score on its own convinces no one. Pick your strongest area and write down two real examples. Pick your lowest and run the two-week plan. Examples from actual work, projects or activities are what interviewers remember.',
      ],
    },
  ],
  limits: [
    'This is a self-rating tool and shows how you describe yourself. It does not replace feedback from people who work with you.',
    'It is not an employer test and does not predict selection, performance or salary.',
    'Scores are not compared with other people, so there is no pass mark.',
  ],
  faqs: [
    {
      q: 'What is a soft skills assessment?',
      a: 'It is a way to rate behaviours such as working with others, adapting to change, finishing work and solving problems. This one covers five areas from your own ratings and gives a score for each.',
    },
    {
      q: 'Does this cover a leadership skills self-assessment?',
      a: 'Leadership is one of the five areas, with five statements on guiding a group, setting a clear goal and asking for feedback. For a wider view it sits next to teamwork, adaptability, ownership and problem solving.',
    },
    {
      q: 'Is this a social skills self-assessment?',
      a: 'The teamwork and social skills area covers getting along with different people, including everyone in a group, sharing credit and disagreeing without making it personal. It is not a clinical measure of social skills.',
    },
    {
      q: 'Is this an employability skills assessment?',
      a: 'It covers the people and work-habit skills employers often list as employability skills. It does not test technical knowledge, so pair it with a skills check for your field.',
    },
    {
      q: 'Can freshers and students use it?',
      a: 'Yes. The statements are about everyday behaviour in groups, projects, college and work, so they apply whether you are a student, fresher or working professional.',
    },
    {
      q: 'How is the score worked out?',
      a: 'Each answer is rated from 1 to 5. Statements worded in the negative are reversed. Each area score is the average of its five statements, shown out of 100, and the overall score is the average of the five areas.',
    },
  ],
  related: [
    {
      href: '/services/assessments/communication-skills-assessment/',
      title: 'Communication Skills Assessment',
      description: 'Listening, speaking, writing, feedback and presenting, scored separately.',
    },
    {
      href: '/services/assessments/entrepreneurial-aptitude-test/',
      title: 'Entrepreneurial Aptitude Test',
      description: 'Five readiness areas for people thinking about building something of their own.',
    },
    {
      href: '/services/assessments/emotional-intelligence-test-careers/',
      title: 'Emotional Intelligence Test for Careers',
      description: 'Emotional skills that sit behind teamwork, leadership and handling pressure.',
    },
    {
      href: '/services/assessments/graduates-and-early-professionals/',
      title: 'Graduates and Early Professionals Assessment',
      description: 'The full free assessment covering career fit, employability and role direction.',
    },
    {
      href: '/services/assessments/working-professionals-and-career-changers/',
      title: 'Working Professionals and Career Changers Assessment',
      description: 'The full free assessment with leadership potential, income leverage, pivot readiness and AI career risk.',
    },
    {
      href: '/blog/skills/career-development-skills/',
      title: 'Career Development Skills',
      description: 'The skills that help careers grow, and how to build them.',
    },
  ],
  breadcrumbDescription: 'Free soft skills self-assessment with leadership and teamwork scores.',
  webAppDescription:
    'A free original 25-statement soft skills self-assessment covering leadership, teamwork and social skills, adaptability, ownership and reliability, and problem solving, with five scores, an overall score, a practice plan and a downloadable report.',
};

export const SKILL_TESTS: Record<SkillTestId, SkillTest> = {
  'confused-after-10th': CONFUSED_10,
  communication: COMMUNICATION,
  'soft-skills': SOFT_SKILLS,
};

export const SKILL_TEST_LIST: SkillTest[] = [CONFUSED_10, COMMUNICATION, SOFT_SKILLS];
