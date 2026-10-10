// Single source of truth for the "career chart after 10th" blog post and its downloadable PDFs.
// Both src/pages/blog/stream-selection/career-chart-after-10th/index.astro and
// scripts/build-career-chart-pdfs.mjs read this file, so the page and the PDFs cannot drift apart.
//
// Truth rule: only durations and rules that are standard and stable are stated as facts.
// Anything that changes by state, board, year or notification is phrased as "verify" and linked to the official site.

export const CHART_META = {
  lastChecked: 'October 2026',
  siteUrl: 'https://futurecareerschool.com',
  pageUrl: 'https://futurecareerschool.com/blog/stream-selection/career-chart-after-10th/',
  guidanceUrl: 'https://futurecareerschool.com/services/career-counselling-and-career-guidance/',
  testUrl: 'https://futurecareerschool.com/services/assessments/class-10-and-below/',
  disclaimer:
    'Entry rules, minimum marks, fees and seat numbers differ by state, board and year. Treat this chart as a map for asking better questions, then confirm every rule on the official site before you pay or lock a subject.',
};

export const OFFICIAL_LINKS = [
  { label: 'NIOS (open schooling)', url: 'https://www.nios.ac.in/', use: 'Open-school Secondary and Senior Secondary, vocational courses, study centres. The site states that the Association of Indian Universities has issued equivalence for the NIOS Senior Secondary certificate.' },
  { label: 'DGT Craftsmen Training Scheme (ITI)', url: 'https://dgt.gov.in/en/CTS', use: 'How the ITI network works. The page lists 14,643 ITIs and 169 NSQF-compliant trades (checked October 2026).' },
  { label: 'NATS (apprenticeship training)', url: 'https://nats.education.gov.in/about-us.php', use: 'Apprenticeship-style, learn-while-working training for diploma and technical graduates.' },
  { label: 'AICTE', url: 'https://www.aicte-india.org/', use: 'Check that a diploma or engineering institute is approved before paying.' },
  { label: 'NTA (JEE Main, NEET UG, CUET UG)', url: 'https://nta.ac.in/', use: 'Exam eligibility, syllabus and dates for the entrance tests that start after Class 12.' },
];

// ----- Route families shown on the chart -------------------------------------------------
// yearsToWork: [earliest, latest] years from the day Class 10 ends to first full-time work,
// counting only the standard length of the programme. It is a time signal, not a pay claim.
export const ROUTES = [
  {
    id: 'science-pcm',
    family: 'science',
    label: 'Science with Maths (PCM)',
    short: 'Physics, Chemistry, Maths',
    length: 'Class 11 and 12 (2 years), then a degree',
    gate:
      'Class 10 pass. Many schools set their own minimum in Maths and Science for this group, so ask the school before you count on a seat.',
    opens: [
      'B.Tech / B.E. (4 years) through JEE Main, state engineering entrance tests, BITSAT and similar',
      'B.Sc in Physics, Chemistry, Maths, Statistics, Computer Science and data subjects',
      'BCA and other computing degrees',
      'Architecture (needs Maths, plus the architecture aptitude test)',
      'NDA: the Air Force and Navy wings need Physics and Maths in Class 12',
    ],
    closes: ['MBBS, BDS and other NEET-based medical courses (these need Biology)'],
    yearsToWork: [5, 6],
    bestFor:
      'Students who enjoy solving problems step by step, can sit with Maths and Physics for two years, and want engineering, computing or research left open.',
    watchOut:
      'Taking PCM because everyone else did. A weak Maths base shows up in Class 11 within a term, and two drifting years are expensive.',
    firstMove:
      'Solve a full chapter of Class 11 Maths and Physics on your own and note where you got stuck and where you wanted to keep going.',
  },
  {
    id: 'science-pcb',
    family: 'science',
    label: 'Science with Biology (PCB)',
    short: 'Physics, Chemistry, Biology',
    length: 'Class 11 and 12 (2 years), then a degree',
    gate: 'Class 10 pass. Many schools set their own minimum in Science for this group.',
    opens: [
      'MBBS, BDS and other medical seats through NEET UG',
      'B.Sc Nursing, physiotherapy, medical lab and other allied health courses (entry route differs by state; verify)',
      'B.Pharm and pharmacy routes (verify whether your state accepts PCB or needs Maths)',
      'B.Sc in life sciences, biotechnology, microbiology, agriculture and veterinary routes (check the entrance test)',
    ],
    closes: ['B.Tech / B.E. (these need Maths in Class 12)'],
    yearsToWork: [5, 7.5],
    bestFor:
      'Students who are drawn to the human body, plants, animals or lab work, and who accept that medicine is a long road with few seats.',
    watchOut:
      'Treating NEET as the only reason to take Biology. MBBS seats are scarce, so write a second route (allied health, life sciences, pharmacy) before results, not after.',
    firstMove:
      'Spend one day with a nurse, lab technician, pharmacist or doctor you can reach through family or school, and list the tasks they actually did.',
  },
  {
    id: 'science-pcmb',
    family: 'science',
    label: 'Science with both (PCMB)',
    short: 'Physics, Chemistry, Maths, Biology',
    length: 'Class 11 and 12 (2 years), then a degree',
    gate: 'Class 10 pass. Not every school offers the combination, and the load is the heaviest of all.',
    opens: ['Keeps both the engineering and the medical doors open until Class 12 ends'],
    closes: [],
    yearsToWork: [5, 7.5],
    bestFor:
      'Students who are genuinely strong in both Maths and Biology and are still undecided between engineering and medicine.',
    watchOut:
      'Picking it to avoid a decision. Five heavy subjects often lower scores in all of them, which weakens both doors.',
    firstMove: 'Check last year’s school results for the PCMB group and ask how many students scored well in both Maths and Biology.',
  },
  {
    id: 'commerce-maths',
    family: 'commerce',
    label: 'Commerce with Maths',
    short: 'Accountancy, Business Studies, Economics, Maths',
    length: 'Class 11 and 12 (2 years), then a degree or professional course',
    gate: 'Class 10 pass. Maths in Class 10 helps; some schools ask for a minimum.',
    opens: [
      'B.Com, BBA, BMS, economics and statistics degrees',
      'CA, CMA and CS professional ladders (ICAI has allowed provisional CA Foundation registration after Class 10, and the exam needs Class 12 appearance; confirm the current rule)',
      'Finance, analytics and actuarial-style routes that need Maths',
      'Integrated law (BBA LLB) and management routes through CUET or CLAT',
    ],
    closes: ['B.Tech / B.E. and NEET medical routes'],
    yearsToWork: [5, 5],
    bestFor:
      'Students who like money, markets, numbers, how businesses make profit, or who come from a family business and want to run it better.',
    watchOut:
      'Choosing commerce as an easy stream. Accountancy and Economics reward steady practice, and a degree without any applied skill leads to the lowest-paid desk jobs.',
    firstMove:
      'Read one company’s annual report summary or a small shop’s monthly accounts and write what makes its profit rise and fall.',
  },
  {
    id: 'commerce-nomaths',
    family: 'commerce',
    label: 'Commerce without Maths',
    short: 'Accountancy, Business Studies, Economics, plus an elective',
    length: 'Class 11 and 12 (2 years), then a degree or professional course',
    gate: 'Class 10 pass.',
    opens: [
      'B.Com, BBA, BMS and most business and accounting degrees',
      'CA, CMA and CS routes',
      'Integrated law and CUET-based BA and B.Com courses',
    ],
    closes: [
      'Quantitative economics honours and some analytics or actuarial programmes that ask for Class 12 Maths',
      'B.Tech / B.E. and NEET medical routes',
    ],
    yearsToWork: [5, 5],
    bestFor: 'Students who want business or accounting but are sure Maths will not carry them for two more years.',
    watchOut:
      'Dropping Maths without checking the programmes you may want later. Some doors can be reopened with bridge courses, but it costs time.',
    firstMove: 'List three degrees you might want after Class 12 and check each one’s Class 12 subject rule on its own admission page.',
  },
  {
    id: 'arts',
    family: 'arts',
    label: 'Arts and Humanities',
    short: 'History, Political Science, Geography, Sociology, Psychology, Economics and more',
    length: 'Class 11 and 12 (2 years), then a degree',
    gate: 'Class 10 pass. Available in most schools; subject combinations vary by school.',
    opens: [
      'Law (5-year integrated BA LLB through CLAT or CUET-based seats)',
      'Psychology, sociology, economics, political science, journalism and mass communication degrees',
      'Design and creative degrees through design entrance tests (NID, NIFT, UCEED and others)',
      'Teaching (integrated B.Ed routes and the teaching degree path)',
      'Hotel management (NCHM JEE) and many CUET-based BA courses',
      'Civil services and many government exams, which accept a degree in any subject',
    ],
    closes: ['B.Tech / B.E. and NEET medical routes'],
    yearsToWork: [5, 7],
    bestFor:
      'Students who read, write, argue, observe people, design or create, and who are ready to build proof of work instead of waiting for a job title.',
    watchOut:
      'Finishing the degree with no visible work. Arts degrees pay when they are paired with a portfolio, writing samples, a research brief or a communication skill.',
    firstMove:
      'Make one finished piece this month: a two-page explainer, a short design, a recorded talk or a small research note on a topic you chose.',
  },
  {
    id: 'diploma',
    family: 'diploma',
    label: 'Polytechnic diploma',
    short: 'Civil, Mechanical, Electrical, Electronics, Computer and other branches',
    length: 'Usually 3 years',
    gate:
      'Class 10 pass. Admission is usually through the state technical education board by merit or an entrance test, so rules and cut-offs differ by state.',
    opens: [
      'Junior engineer, technician, supervisor and site roles after the diploma',
      'Lateral entry into the second year of B.E. / B.Tech after a diploma (verify the state rules and the college)',
      'Apprenticeship training through NATS',
      'Self-employment in services such as electrical, networking and repair work',
    ],
    closes: ['NEET medical routes. The Class 12 science subjects are not studied, so check how a diploma is treated for the degree you want.'],
    yearsToWork: [3, 3],
    bestFor:
      'Students who learn best through labs, drawings, machines and systems, want to earn earlier, and are willing to check the institute before joining.',
    watchOut:
      'Joining the nearest institute without checking approval, labs, faculty and what its own students did after passing. The label is the same, the quality is not.',
    firstMove:
      'Visit the institute’s lab on a working day, ask for last year’s placement or lateral-entry list, and confirm approval on the official regulator site.',
  },
  {
    id: 'iti',
    family: 'diploma',
    label: 'ITI trade course',
    short: 'Electrician, Fitter, Welder, Mechanic, COPA and 160+ other trades',
    length: '1 or 2 years, depending on the trade',
    gate:
      'Minimum education depends on the trade: some accept Class 8 pass, many need Class 10. Admission is usually through the state, so verify the trade’s own rule.',
    opens: [
      'Skilled trade jobs and supervised work in industry',
      'Apprenticeship training through the Apprenticeship portals',
      'Some states and institutes allow ITI holders to join a diploma in the second year (verify)',
      'Self-employment as an electrician, technician, mechanic or plumber',
    ],
    closes: ['A direct route to degree seats unless you add Class 12 (open schooling) or a diploma bridge'],
    yearsToWork: [1, 2],
    bestFor:
      'Students who learn faster by doing than by sitting through theory, want the shortest gap to a skilled job, and are ready to keep adding skills.',
    watchOut:
      'Stopping at the certificate. The trade is the base; communication, digital skill, safety knowledge and a record of finished work decide how far it grows.',
    firstMove:
      'Visit a local workshop for the trade you like, watch a working day, and ask the owner what separates a well-paid worker from a poorly paid one.',
  },
  {
    id: 'open-school',
    family: 'open',
    label: 'Open schooling (NIOS and state open schools)',
    short: 'Study Class 11–12 on a flexible schedule, often while working',
    length: 'Flexible. Admission stays valid for 5 years with public exams twice a year (April–May and October–November), per the NIOS prospectus',
    gate: 'Class 10 pass from a recognised board and a minimum age of 15 (NIOS prospectus rules; confirm the current prospectus). At least five subjects must be passed, with one or two languages.',
    opens: [
      'Completing Class 12 while working, training for a trade, or preparing for sport or arts',
      'A route back to degree courses for students who left school, started an ITI, or did a diploma first',
      'Subject combinations not offered in a nearby school',
    ],
    closes: ['Nothing by itself. NIOS states its certificate is equivalent to other boards and accepted by universities, but some institutions set their own rules, so confirm for your course and subject group.'],
    yearsToWork: [2, 3],
    bestFor:
      'Students who must earn, travel for training or sport, have health reasons, or are returning to study after a break.',
    watchOut:
      'Treating it as a lesser route. It needs more self-discipline than a regular school, because nobody checks your daily progress.',
    firstMove: 'Download the current prospectus from the official site and read the subject groups and the exam-session rules before you decide.',
  },
  {
    id: 'skill-first',
    family: 'open',
    label: 'Skill-first stack beside school',
    short: 'A job-linked skill built alongside any route',
    length: 'Runs beside school, diploma or ITI',
    gate: 'No entry gate. A phone or computer, internet access and finished work are enough to begin.',
    opens: [
      'Proof of work (projects, drafts, small client tasks) that a mark sheet cannot show',
      'Entry into skill-based roles after the route you choose',
      'Earlier income options through freelance or part-time tasks, within your family’s and the law’s limits on work at your age',
    ],
    closes: [],
    yearsToWork: [1, 3],
    bestFor: 'Every student. This is the layer that raises the income ceiling of whichever route you pick.',
    watchOut:
      'Collecting certificates. A certificate without a finished piece of work is easy to copy and easy for a reviewer to ignore.',
    firstMove: 'Choose one skill that matches your route and finish one small, real piece of work with it, then show it to one person who does that work.',
  },
];

export const ROUTE_FAMILIES = [
  { id: 'science', label: 'Science', color: '#1f6feb', note: 'Class 11–12, then a degree' },
  { id: 'commerce', label: 'Commerce', color: '#0f9d8a', note: 'Class 11–12, then a degree or professional course' },
  { id: 'arts', label: 'Arts and Humanities', color: '#b5651d', note: 'Class 11–12, then a degree' },
  { id: 'diploma', label: 'Diploma and ITI', color: '#b8860b', note: 'Technical route that starts at once' },
  { id: 'open', label: 'Flexible and add-on routes', color: '#6b46c1', note: 'Open schooling and skill-first stack' },
];

// ----- "Years until first full-time work" bars (earliest standard path) ----------------------
export const TIMELINE = [
  { label: 'ITI trade', from: 1, to: 2, family: 'diploma', note: 'Trades run 1 or 2 years' },
  { label: 'Polytechnic diploma', from: 3, to: 3, family: 'diploma', note: 'Usually 3 years' },
  { label: 'Class 12 + 3-year degree', from: 5, to: 5, family: 'commerce', note: '2 years school + 3-year BA / B.Com / B.Sc / BBA / BCA' },
  { label: 'Class 12 + 4-year B.Tech / B.E.', from: 6, to: 6, family: 'science', note: '2 years school + 4-year degree' },
  { label: 'Diploma, then lateral entry B.Tech', from: 3, to: 6, family: 'diploma', note: 'Work after year 3, or finish the degree by year 6' },
  { label: 'Class 12 + 5-year integrated law', from: 7, to: 7, family: 'arts', note: '2 years school + 5-year BA LLB' },
  { label: 'Class 12 + MBBS with internship', from: 7.5, to: 7.5, family: 'science', note: '2 years school + about 5.5 years including internship' },
];
export const TIMELINE_NOTE =
  'Years counted from the day Class 10 ends to the earliest standard full-time start. They show time, not pay. Postgraduate study, repeat attempts and licensing exams add years in some routes.';

// ----- The decision flow --------------------------------------------------------------------
// Each node is a question; each option points to another node id or to a terminal route id.
export const FLOW = {
  start: 'q-earn',
  nodes: {
    'q-earn': {
      question: 'Does your family need you earning within about 1 to 3 years?',
      options: [
        { label: 'Yes, soon', to: 'q-hands' },
        { label: 'Not that soon', to: 'q-pull' },
        { label: 'I cannot attend regular school', to: 'r-open-school' },
      ],
    },
    'q-hands': {
      question: 'Which kind of work do you enjoy more?',
      options: [
        { label: 'Using tools and fixing things by hand', to: 'r-iti' },
        { label: 'Drawings, circuits, machines and systems', to: 'r-diploma' },
        { label: 'Still not sure', to: 'r-skill-first' },
      ],
    },
    'q-pull': {
      question: 'Which subject do you go back to when nobody is checking?',
      options: [
        { label: 'Maths and Physics', to: 'r-science-pcm' },
        { label: 'Biology and living things', to: 'r-science-pcb' },
        { label: 'Money, markets and business', to: 'q-maths' },
        { label: 'People, language, society or design', to: 'r-arts' },
        { label: 'I like both Maths and Biology', to: 'r-science-pcmb' },
      ],
    },
    'q-maths': {
      question: 'Can you work through Maths for two more years?',
      options: [
        { label: 'Yes', to: 'r-commerce-maths' },
        { label: 'No, I would struggle', to: 'r-commerce-nomaths' },
      ],
    },
  },
  terminals: {
    'r-science-pcm': 'science-pcm',
    'r-science-pcb': 'science-pcb',
    'r-science-pcmb': 'science-pcmb',
    'r-commerce-maths': 'commerce-maths',
    'r-commerce-nomaths': 'commerce-nomaths',
    'r-arts': 'arts',
    'r-diploma': 'diploma',
    'r-iti': 'iti',
    'r-open-school': 'open-school',
    'r-skill-first': 'skill-first',
  },
  note: 'This flow gives a first lean, not a verdict. Test the route it points to with the checks below before you commit.',
};

// ----- The checks used across the site -----------------------------------------------------
export const CHECKPOINTS = [
  { title: 'Biology', body: 'How do you actually work best: abstract study, business thinking, people, or tools and systems? Choose the daily reality, not the label.' },
  { title: 'Context', body: 'Marks, money, family situation, school options, commute and emotional readiness. A route right on paper can be wrong for now.' },
  { title: 'Market', body: 'Where does the route lead later: real roles, real skills, real progression? Map it forward before you choose.' },
  { title: 'Survival', body: 'Will it hold up in an AI-shaped market? Domain skill plus communication, digital fluency and judgment lasts longer than routine work.' },
];
export const GATES = [
  { title: 'Proof of Skill', body: 'Complete one small real task that resembles the route before you lock it.' },
  { title: 'Proof of Communication', body: 'Explain in 30 to 90 seconds why the route fits you, where it leads and what you will test next.' },
  { title: 'Proof of Value', body: 'Get grounded feedback from a teacher, senior or professional who does this work, and pressure-test your reasoning.' },
];

// ----- Mistakes -----------------------------------------------------------------------------
export const MISTAKES = [
  { title: 'Choosing by marks alone', body: 'High marks tell you what you can enter, not what you can sustain for two to five years.' },
  { title: 'Copying friends or relatives', body: 'The route that worked for a cousin worked for their strengths, money and city.' },
  { title: 'Dropping Maths or Biology without checking', body: 'Maths is needed for B.Tech and Biology for NEET medical seats. Check what you may want before you drop either.' },
  { title: 'Paying before verifying', body: 'Check that the institute is approved, the fee is the total fee and the course is recognised.' },
  { title: 'Treating the route as the whole plan', body: 'Every route leads to crowded and well-paid rows alike. The skill layer on top is what separates them.' },
];

// ----- Which PDFs exist ---------------------------------------------------------------------
export const PDF_FILES = [
  {
    id: 'overall',
    file: 'career-chart-after-10th-all-routes.pdf',
    title: 'Career Chart After 10th: All Routes',
    blurb: 'The full chart: decision flow, every route, years-to-work bars, checks and a plan.',
    families: ['science', 'commerce', 'arts', 'diploma', 'open'],
    overall: true,
  },
  {
    id: 'science',
    file: 'career-chart-after-10th-science.pdf',
    title: 'Career Chart After 10th: Science',
    blurb: 'PCM, PCB and PCMB side by side, with what each opens, what it closes and the exams to know.',
    families: ['science'],
  },
  {
    id: 'commerce',
    file: 'career-chart-after-10th-commerce.pdf',
    title: 'Career Chart After 10th: Commerce',
    blurb: 'Commerce with and without Maths, the professional ladders and what each choice closes.',
    families: ['commerce'],
  },
  {
    id: 'arts',
    file: 'career-chart-after-10th-arts-humanities.pdf',
    title: 'Career Chart After 10th: Arts and Humanities',
    blurb: 'Law, design, psychology, media, teaching and exams, plus the proof of work arts students need.',
    families: ['arts'],
  },
  {
    id: 'diploma-iti',
    file: 'career-chart-after-10th-diploma-iti.pdf',
    title: 'Career Chart After 10th: Diploma, ITI and Open Schooling',
    blurb: 'Polytechnic, ITI, open schooling and the skill-first stack, with lateral-entry and apprenticeship bridges.',
    families: ['diploma', 'open'],
  },
];
