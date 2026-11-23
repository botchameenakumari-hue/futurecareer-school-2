// Content for the career guidance questionnaire for students.
// Plain data only: no DOM, no storage. The script in src/scripts/careerQuestionnaire.ts builds the online form,
// the paper form, the one-page summary and both PDFs from this one list, so they always say the same thing.
//
// Question types: tick (many answers), choice (one answer), scale (1 to 5), text (short answer), options (up to
// three routes with a growth mark and a risk). A value that differs by stage is an object with the keys
// school, senior, college, or all.

export const CHECKED_ON = '22 November 2026';
export const TOOL_URL = 'futurecareerschool.com/tools/career-guidance-questionnaire-for-students/';

export const STAGES = {
  school: { key: 'school', short: 'Class 8 to 10', long: 'School (Class 8 to 10)', file: 'class-8-to-10' },
  senior: { key: 'senior', short: 'Class 11 and 12', long: 'Class 11 and 12', file: 'class-11-and-12' },
  college: { key: 'college', short: 'College and graduate', long: 'College or graduate student', file: 'college-and-graduate' },
};
export const STAGE_KEYS = ['school', 'senior', 'college'];

export const SCALE_LABELS = {
  like: ['Not like me', 'Very like me'],
  sure: ['Not sure at all', 'Very sure'],
  important: ['Not important', 'Very important'],
  much: ['Not at all', 'Very much'],
  ready: ['Not ready', 'Fully ready'],
};

export const MARKS = {
  unchecked: 'Not yet checked',
  high: 'Scalable',
  mid: 'Scalable with a business layer',
  low: 'Not so scalable',
};

export const MARK_TIPS = {
  high: 'Build proof of work, take paid projects, then specialise or form a small agency.',
  mid: 'Plan the business layer from the start: consulting, a studio or practice, or a product.',
  low: 'Plan a second route and keep a skill running that can grow on its own.',
  unchecked: 'Not marked yet. Check it with a counsellor and mark it before acting on it.',
};

export const byStage = (v, stage) => {
  if (v && typeof v === 'object' && !Array.isArray(v)) return v[stage] !== undefined ? v[stage] : v.all;
  return v;
};

const SKIP = 'Skip anything you would rather not share.';

// Families used to match an enjoyed activity with a strength. These are plain pairs, not scores.
// Each family has one interest option id and one strength option id.
export const FAMILIES = [
  { key: 'hands', name: 'making and fixing things', interest: 'i_hands', strength: 's_hands' },
  { key: 'tech', name: 'computers, machines and software', interest: 'i_tech', strength: 's_tech' },
  { key: 'logic', name: 'numbers and problem solving', interest: 'i_logic', strength: 's_numbers' },
  { key: 'words', name: 'reading, writing and speaking', interest: 'i_words', strength: 's_writing' },
  { key: 'people', name: 'helping and explaining to people', interest: 'i_help', strength: 's_explain' },
  { key: 'lead', name: 'organising people and plans', interest: 'i_lead', strength: 's_organise' },
  { key: 'ideas', name: 'new ideas and design', interest: 'i_art', strength: 's_ideas' },
];

export const SECTIONS = [
  {
    id: 'interests',
    title: 'What I enjoy',
    intro: 'Think about what you like doing, not what you think you should like. There are no right answers.',
    questions: [
      {
        id: 'int_tick', type: 'tick',
        label: 'Which of these do I enjoy doing? Tick as many as fit.',
        options: [
          ['i_hands', 'Building or fixing things with my hands'],
          ['i_tech', 'Finding out how machines, apps or software work'],
          ['i_logic', 'Solving puzzles, maths or logic problems'],
          ['i_words', 'Reading, writing or telling stories'],
          ['i_art', 'Drawing, design, music or making videos'],
          ['i_help', 'Helping or teaching other people'],
          ['i_lead', 'Leading a group or organising an event'],
          ['i_sell', 'Selling, bargaining or starting something small'],
          ['i_nature', 'Looking after animals, plants or nature'],
          ['i_science', 'Doing experiments or finding out why things happen'],
          ['i_sport', 'Sports, exercise or being outdoors'],
          ['i_order', 'Keeping records, lists and plans in order'],
        ],
      },
      { id: 'int_team', type: 'scale', scale: 'like', label: 'I enjoy working in a team.' },
      { id: 'int_alone', type: 'scale', scale: 'like', label: 'I enjoy working on my own for a long time.' },
      { id: 'int_open', type: 'scale', scale: 'like', label: 'I like tasks where nobody tells me the steps.' },
      { id: 'int_doing', type: 'scale', scale: 'like', label: 'I like to learn by making or doing, not only by reading.' },
      { id: 'int_lost', type: 'text', max: 160, lines: 2, label: 'Think of a recent time when hours seemed to pass quickly. What was I doing?' },
      {
        id: 'int_try', type: 'text', max: 160, lines: 2,
        label: {
          school: 'Something I would like to try or learn, even if I have never done it.',
          senior: 'Something I would like to try or learn, even if I have never done it.',
          college: 'A kind of work or project I would like to try for a few weeks.',
        },
      },
    ],
  },
  {
    id: 'strengths',
    title: 'What I am good at',
    intro: 'Tick only what you could show with an example. It is fine to tick very little.',
    questions: [
      {
        id: 'str_tick', type: 'tick',
        label: 'Which of these do I do well? Tick only what I could show with an example.',
        options: [
          ['s_explain', 'Explaining something so others understand'],
          ['s_finish', 'Finishing what I start'],
          ['s_calm', 'Staying calm when things go wrong'],
          ['s_learn', 'Learning something new quickly'],
          ['s_detail', 'Noticing small mistakes or details'],
          ['s_ideas', 'Coming up with new ideas'],
          ['s_numbers', 'Working with numbers'],
          ['s_speak', 'Speaking in front of others'],
          ['s_writing', 'Writing clearly'],
          ['s_tech', 'Learning a new app, phone or computer task'],
          ['s_hands', 'Making or fixing things by hand'],
          ['s_organise', 'Organising people or plans'],
        ],
      },
      { id: 'str_finish', type: 'scale', scale: 'sure', label: 'I can finish a long piece of work without anyone reminding me.' },
      {
        id: 'str_help', type: 'scale', scale: 'sure',
        label: {
          school: 'I can ask a teacher or another adult for help when I am stuck.',
          senior: 'I can ask a teacher or another adult for help when I am stuck.',
          college: 'I can ask a senior, a teacher or someone experienced for help when I am stuck.',
        },
      },
      { id: 'str_self', type: 'scale', scale: 'sure', label: 'I can learn a new skill by myself using books, videos or the internet.' },
      { id: 'str_explain', type: 'scale', scale: 'sure', label: 'I can explain what I know to someone who does not know it.' },
      { id: 'str_said', type: 'text', max: 160, lines: 2, label: 'What do friends, family or teachers say I am good at?' },
      { id: 'str_proud', type: 'text', max: 200, lines: 3, label: 'One thing I made, finished or did that I am proud of. What did it need from me?' },
    ],
  },
  {
    id: 'studies',
    title: {
      school: 'My subjects',
      senior: 'My subjects',
      college: 'My course',
    },
    intro: {
      school: 'Think about your subjects this year. Marks are not the only thing that matters here.',
      senior: 'Think about your subjects this year. Marks are not the only thing that matters here.',
      college: 'Think about your course so far. Marks are not the only thing that matters here.',
    },
    questions: [
      {
        id: 'stu_like', type: 'tick', max: 3,
        label: {
          school: 'Subjects I enjoy most. Tick up to three.',
          senior: 'Subjects I enjoy most. Tick up to three.',
          college: 'Parts of my course I enjoy most. Tick up to three.',
        },
        options: {
          school: [
            ['u_lang1', 'My first language'], ['u_eng', 'English'], ['u_maths', 'Mathematics'], ['u_sci', 'Science'],
            ['u_soc', 'Social science'], ['u_comp', 'Computers'], ['u_art', 'Art, music or drama'], ['u_pe', 'Sports or physical education'],
            ['u_voc', 'Skill or vocational subjects'], ['u_other', 'Something else'],
          ],
          senior: [
            ['u_phy', 'Physics'], ['u_chem', 'Chemistry'], ['u_maths', 'Mathematics'], ['u_bio', 'Biology'],
            ['u_cs', 'Computer science or IT'], ['u_eng', 'English or a language'], ['u_econ', 'Economics'], ['u_acc', 'Accountancy or business studies'],
            ['u_hum', 'History, geography or politics'], ['u_psy', 'Psychology or sociology'], ['u_art', 'Art, design or physical education'], ['u_other', 'Something else'],
          ],
          college: [
            ['u_theory', 'Theory and concepts'], ['u_lab', 'Practical or lab work'], ['u_proj', 'Projects I build or research'], ['u_present', 'Presentations and discussion'],
            ['u_data', 'Numbers and data'], ['u_write', 'Writing and reports'], ['u_field', 'Internships or field work'], ['u_team', 'Working in a team'],
            ['u_other', 'Something else'],
          ],
        },
      },
      {
        id: 'stu_hard', type: 'tick', max: 3,
        label: {
          school: 'Subjects I find hardest. Tick up to three.',
          senior: 'Subjects I find hardest. Tick up to three.',
          college: 'Parts of my course I find hardest. Tick up to three.',
        },
        options: 'same:stu_like',
      },
      { id: 'stu_link', type: 'scale', scale: 'sure', label: 'I can see how what I study now links to work that people do.' },
      { id: 'stu_alone', type: 'scale', scale: 'sure', label: 'I can study well on my own, without being pushed.' },
      {
        id: 'stu_marks', type: 'choice',
        label: 'My latest marks or results are:',
        options: [
          ['m_better', 'Better than I expected'],
          ['m_same', 'About what I expected'],
          ['m_lower', 'Lower than I expected'],
          ['m_wait', 'Not out yet'],
          ['m_skip', 'I would rather not say'],
        ],
      },
      {
        id: 'stu_topic', type: 'text', max: 160, lines: 2,
        label: {
          school: 'A subject or topic I would read about even if there were no exam on it.',
          senior: 'A subject or topic I would read about even if there were no exam on it.',
          college: 'A topic from my course I would keep reading about even if there were no exam on it.',
        },
      },
    ],
  },
  {
    id: 'values',
    title: 'What matters to me in future work',
    intro: 'These questions are about what you would want from work later. Your answers can change as you grow, and that is normal.',
    questions: [
      {
        id: 'val_tick', type: 'tick', max: 3,
        label: 'What matters most to me in future work? Tick up to three.',
        options: [
          ['v_pay', 'Regular pay every month'],
          ['v_earn', 'Earning well in the long run'],
          ['v_safe', 'A job that is safe and steady'],
          ['v_help', 'Helping people directly'],
          ['v_create', 'Being creative'],
          ['v_learn', 'Learning something new all the time'],
          ['v_respect', 'Being respected for my work'],
          ['v_time', 'Time for family, rest and hobbies'],
          ['v_boss', 'Being my own boss one day'],
          ['v_team', 'Working with a good team'],
          ['v_travel', 'Travel or living in a new place'],
          ['v_build', 'Making or building something real'],
        ],
      },
      { id: 'val_choose', type: 'scale', scale: 'important', label: 'Choosing how I do my own work.' },
      { id: 'val_calm', type: 'scale', scale: 'important', label: 'A calm and predictable working day.' },
      { id: 'val_people', type: 'scale', scale: 'important', label: 'Meeting new people as part of my work.' },
      { id: 'val_hard', type: 'scale', scale: 'important', label: 'Solving hard problems that take a long time.' },
      { id: 'val_known', type: 'scale', scale: 'important', label: 'Work that my family and community understand and respect.' },
      {
        id: 'val_day', type: 'text', max: 200, lines: 3,
        label: {
          school: 'If my work goes well when I am an adult, what does an ordinary day look like?',
          senior: 'If my work goes well in ten years, what does an ordinary day look like?',
          college: 'If my work goes well in ten years, what does an ordinary day look like?',
        },
      },
    ],
  },
  {
    id: 'limits',
    title: 'Limits I need to plan for',
    intro: 'These questions are about practical limits. ' + SKIP + ' This form never asks for family income.',
    questions: [
      {
        id: 'lim_tick', type: 'tick',
        label: 'Which of these may limit my choices right now? Tick any. Skip any I would rather not share.',
        options: {
          school: [
            ['l_money', 'Money for fees, books or travel'], ['l_earn', 'Needing to earn soon'], ['l_place', 'Needing to stay in or near my town'],
            ['l_duty', 'Duties at home or in a family business'], ['l_health', 'Health or access needs'], ['l_lang', 'The language I am comfortable studying in'],
            ['l_device', 'No computer, phone or steady internet'], ['l_marks', 'Marks or admission rules'],
            ['l_none', 'None that I know of'], ['l_skip', 'I would rather not say'],
          ],
          senior: [
            ['l_money', 'Money for fees, books or travel'], ['l_earn', 'Needing to earn soon'], ['l_place', 'Needing to stay in or near my town'],
            ['l_duty', 'Duties at home or in a family business'], ['l_health', 'Health or access needs'], ['l_lang', 'The language I am comfortable studying in'],
            ['l_device', 'No computer, phone or steady internet'], ['l_marks', 'Marks, entrance exam rules or age limits'],
            ['l_none', 'None that I know of'], ['l_skip', 'I would rather not say'],
          ],
          college: [
            ['l_money', 'Money for fees, books or travel'], ['l_earn', 'Needing to earn soon'], ['l_place', 'Needing to stay in or near my town'],
            ['l_duty', 'Duties at home or in a family business'], ['l_health', 'Health or access needs'], ['l_lang', 'The language I am comfortable working in'],
            ['l_device', 'No computer, phone or steady internet'], ['l_marks', 'Marks, backlogs or eligibility rules'],
            ['l_loan', 'An education loan or repayment I need to plan for'],
            ['l_none', 'None that I know of'], ['l_skip', 'I would rather not say'],
          ],
        },
      },
      { id: 'lim_cost', type: 'scale', scale: 'much', label: 'The cost of study affects my choice.' },
      { id: 'lim_move', type: 'scale', scale: 'ready', label: 'I am ready to move to another town or city for study or work.' },
      { id: 'lim_time', type: 'scale', scale: 'much', label: 'I have time each week for a new skill, course or practice, next to my study or work.' },
      {
        id: 'lim_dates', type: 'choice',
        label: 'I know the exams, forms and last dates that my options need.',
        options: [
          ['d_most', 'Yes, for most of them'],
          ['d_some', 'For some of them'],
          ['d_no', 'No, not yet'],
          ['d_unsure', 'I do not know what applies to me'],
        ],
      },
      { id: 'lim_rule', type: 'text', max: 200, lines: 2, label: 'A rule, date or limit I already know about, and where I read it.' },
    ],
  },
  {
    id: 'support',
    title: 'People and what I have seen',
    intro: 'Families care about these choices in different ways. Answer for yourself. ' + SKIP,
    questions: [
      {
        id: 'sup_who', type: 'tick',
        label: 'Who can I talk to about my next step? Tick any.',
        options: [
          ['p_parent', 'A parent or guardian'],
          ['p_sibling', 'A brother or sister'],
          ['p_teacher', 'A teacher or mentor'],
          ['p_friend', 'A friend'],
          ['p_relative', 'A relative or neighbour with a job I am curious about'],
          ['p_counsellor', 'A school or college counsellor'],
          ['p_senior', 'A senior student'],
          ['p_none', 'No one yet'],
        ],
      },
      { id: 'sup_easy', type: 'scale', scale: 'much', label: 'It is easy for me to talk about my plans with my family.' },
      {
        id: 'sup_hope', type: 'choice',
        label: 'My family has a hope for my next step.',
        options: [
          ['h_agree', 'Yes, and I agree with it'],
          ['h_differ', 'Yes, and I see it differently'],
          ['h_unsure', 'Yes, and I am not sure what I think'],
          ['h_none', 'No clear hope'],
          ['h_notalk', 'We have not talked about it'],
        ],
      },
      {
        id: 'sup_seen', type: 'tick',
        label: 'Which places of study or work have I seen up close? Tick any.',
        options: [
          ['x_job', "A relative's or neighbour's work"],
          ['x_visit', 'A school, college or workplace visit'],
          ['x_talk', 'A career talk or workshop'],
          ['x_intern', 'An internship, shadowing or volunteering'],
          ['x_club', 'A project, club or competition'],
          ['x_online', 'Videos or social media only'],
          ['x_none', 'None yet'],
        ],
      },
      { id: 'sup_know', type: 'scale', scale: 'much', label: 'I know what people in the options I am thinking about do all day.' },
      { id: 'sup_admire', type: 'text', max: 160, lines: 2, label: 'Someone whose work I find interesting, and what they do.' },
      { id: 'sup_help', type: 'text', max: 160, lines: 2, label: 'What kind of help would be most useful from family, teachers or friends?' },
    ],
  },
  {
    id: 'questions',
    title: 'My questions for the counsellor',
    intro: 'This part helps the session start from what you want to find out.',
    questions: [
      {
        id: 'q_want', type: 'tick', max: 2,
        label: 'What do I most want from the session? Tick up to two.',
        options: [
          ['w_list', 'A short list of options to look into'],
          ['w_step', 'One clear next step with a date'],
          ['w_facts', 'Facts about courses, exams or fees'],
          ['w_family', 'A way to talk with my family'],
          ['w_real', 'A check on whether my idea is realistic'],
          ['w_two', 'Help choosing between two options'],
          ['w_listen', 'Someone to listen while I think it through'],
        ],
      },
      { id: 'q_decision', type: 'text', max: 200, lines: 2, label: 'The decision or question I want help with.' },
      { id: 'q_options', type: 'options', rows: 3, label: 'Options I am thinking about (courses, jobs or routes), with a growth mark and the main risk I know of.' },
      { id: 'q_ask', type: 'text', max: 240, lines: 3, label: 'My top three questions for the counsellor.' },
      { id: 'q_worry', type: 'text', max: 160, lines: 2, label: 'Something I am worried about.' },
      { id: 'q_hope', type: 'text', max: 160, lines: 2, label: 'Something I am hopeful about.' },
    ],
  },
];

// Optional section for a parent or guardian. Filled in separately, best on a different sheet.
export const PARENT = {
  id: 'parent',
  title: 'Parent or guardian (optional)',
  intro: 'For a parent or guardian, answered separately from the student so each person can be honest. The student does not need to see it.',
  questions: [
    {
      id: 'g_who', type: 'choice',
      label: 'I am filling this in as:',
      options: [['g_parent', 'A parent'], ['g_guardian', 'A guardian'], ['g_family', 'Another family member']],
    },
    {
      id: 'g_hope', type: 'tick', max: 3,
      label: 'What do I hope for the next step? Tick up to three.',
      options: [
        ['gh_steady', 'A course that leads to steady work'],
        ['gh_fit', 'A course that fits what the student enjoys'],
        ['gh_close', 'Study or work that keeps the student close to home'],
        ['gh_cost', 'A cost the family can manage'],
        ['gh_known', 'A route the family already knows'],
        ['gh_choose', 'Letting the student choose'],
        ['gh_growth', 'A field where skills can keep growing'],
        ['gh_unsure', 'I am not sure yet'],
      ],
    },
    { id: 'g_sure', type: 'scale', scale: 'sure', label: 'I am sure about what suits the student.' },
    { id: 'g_open', type: 'scale', scale: 'sure', label: 'I would be comfortable if the student chose a route I do not know well.' },
    {
      id: 'g_limits', type: 'tick',
      label: 'Practical limits the family faces. Tick any I am happy to share.',
      options: [
        ['gl_money', 'Money for fees and living costs'],
        ['gl_distance', 'Distance from home'],
        ['gl_business', 'A family business or duties at home'],
        ['gl_timing', 'How soon the student needs to earn'],
        ['gl_health', 'Health or access needs'],
        ['gl_none', 'None that I know of'],
        ['gl_skip', 'I would rather not say'],
      ],
    },
    { id: 'g_worry', type: 'text', max: 200, lines: 3, label: 'What I am most worried about in this choice.' },
    { id: 'g_know', type: 'text', max: 200, lines: 3, label: 'What I would like the counsellor to know.' },
  ],
};

export const SECTION_ORDER = SECTIONS.map((s) => s.id);
export const ALL_SECTIONS = [...SECTIONS, PARENT];
// Sections ticked by default, and the set for a 20-minute class.
export const DEFAULT_SECTIONS = SECTION_ORDER.slice();
export const CLASS_SET = ['interests', 'strengths', 'studies', 'questions'];
// A short set for a first try: what I enjoy and what I am good at. These two sections drive the overlap ideas in the summary.
export const QUICK_SET = ['interests', 'strengths'];

// Start block. Not numbered. The first name is optional and stays in the browser.
export const START = {
  name: { id: 'name', max: 30, label: 'First name or nickname (optional)' },
  year: {
    id: 'year',
    short: { school: 'Class', senior: 'Class', college: 'Year' },
    label: { school: 'My class', senior: 'My class', college: 'My year' },
    options: {
      school: [['y8', 'Class 8'], ['y9', 'Class 9'], ['y10', 'Class 10']],
      senior: [['y11', 'Class 11'], ['y12', 'Class 12'], ['yrepeat', 'Repeating or a gap year']],
      college: [['c1', 'Year 1'], ['c2', 'Year 2'], ['c3', 'Year 3'], ['c4', 'Year 4 or later'], ['cdone', 'I have finished my degree']],
    },
  },
  focus: {
    id: 'focus',
    max: 120,
    short: { school: 'Stream or choice', senior: 'Stream', college: 'Course or field' },
    label: {
      school: 'My stream or subject group, or the choice I am facing (optional)',
      senior: 'My stream or subject group (optional)',
      college: 'My course or field (optional)',
    },
  },
};

// Plain rules for the "ideas to talk about" lines in the summary. Each rule shows why it appears.
export const PROMPT_RULES = [
  { id: 'overlap', when: 'You ticked the same kind of activity as something you enjoy and something you do well.', ask: 'Which kinds of work use both, and what small trial could show if the work suits me?' },
  { id: 'enjoy_only', when: 'You ticked things you enjoy that you did not tick as strengths.', ask: 'How could I practise those things so that I can show a result?' },
  { id: 'cost', when: 'You rated the cost of study 4 or 5, or ticked money as a limit.', ask: 'What is the full cost of each option, and which routes cost less? Check fees on the official site.' },
  { id: 'earn', when: 'You ticked needing to earn soon.', ask: 'Which routes lead to paid work sooner, and what is the risk in each?' },
  { id: 'dates', when: 'You answered "No, not yet" or "I do not know what applies to me" about exams, forms and dates.', ask: 'Which exams, forms and last dates apply to my options, and where are they on the official site?' },
  { id: 'family', when: 'You said your family hope is different from yours, or that talking to family is hard (rated 1 or 2).', ask: 'How can I share what I have found out about my options so that we talk about the same facts?' },
  { id: 'seen', when: 'You rated knowing what people in your options do all day as 1 or 2, or ticked only videos or nothing under places seen.', ask: 'Who could I talk to, or watch at work, before I choose?' },
  { id: 'talk', when: 'You ticked that you have no one to talk to yet.', ask: 'Who could be one person I can talk to about this, and when?' },
  { id: 'time', when: 'You rated the time you have for a new skill as 1 or 2.', ask: 'What is one small thing I can fit in, instead of a big plan?' },
];
