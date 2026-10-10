// Shared data for the career chart after 12th post and its PDF downloads.
// The post (src/pages/blog/career-options/career-chart-after-12th/index.astro) and
// scripts/build-career-chart-after-12th-pdfs.mjs both import this file.

export const CHART12_META = {
  lastChecked: 'October 2026',
  pageUrl: 'https://futurecareerschool.com/blog/career-options/career-chart-after-12th/',
  guidanceUrl: 'https://futurecareerschool.com/services/career-counselling-and-career-guidance/',
  testUrl: 'https://futurecareerschool.com/services/assessments/',
  disclaimer:
    'Seat numbers, exam dates, fees and pay figures change every year and differ by state and college. Use this chart to compare routes, then confirm each date and rule on the official exam site before you act.',
};

export const boardColumns = [
  {
    tone: 'teal',
    head: 'Science (PCM)',
    sub: 'Physics, Chemistry, Maths',
    routes: [
      'B.Tech / BE: JEE Main, JEE Advanced, state tests',
      'BCA, BSc Computer Science, Data Science',
      'Architecture: JEE Main Paper 2 or NATA',
      'NDA: Army, Navy and Air Force',
      'Design, BBA, law and CA also open',
    ],
  },
  {
    tone: 'gold',
    head: 'Science (PCB)',
    sub: 'Physics, Chemistry, Biology',
    routes: [
      'MBBS and BDS: NEET UG',
      'BSc Nursing, physiotherapy, allied health',
      'B.Pharm, biotech, life sciences',
      'Psychology, nutrition, forensic science',
      'Design, BBA, law and CA also open',
    ],
  },
  {
    tone: 'violet',
    head: 'Commerce',
    sub: 'With or without Maths',
    routes: [
      'B.Com and BA Economics, then CA, CS or CMA',
      'BBA, BMS, integrated MBA (IPMAT, JIPMAT)',
      'Integrated law: CLAT and other law tests',
      'BCA and data routes (Maths helps)',
      'Banking, insurance and finance jobs after graduation',
    ],
  },
  {
    tone: 'blue',
    head: 'Arts / Humanities',
    sub: 'Any subject mix',
    routes: [
      'BA (Psychology, Economics, Political Science, English)',
      'Integrated law: CLAT, AILET',
      'Design, media, journalism, mass communication',
      'Teacher education, including the four-year ITEP',
      'Civil services after graduation, with a backup skill',
    ],
  },
];

export const chartRows = [
  {
    route: 'B.Tech / BE in computer, data or electronics',
    who: 'PCM (Maths is compulsory)',
    gate: 'JEE Main, JEE Advanced, state and private tests',
    length: '4 years',
    money: 'Software fresher pay averages about ₹5.4 lakh but ranges widely by college and skill',
    catch: 'A branch or college label alone does not get hired. A visible project does.',
  },
  {
    route: 'BCA, BSc Computer Science or data science',
    who: 'Most colleges want Maths or Computer Science in 12th; check each one',
    gate: 'CUET UG or a college test',
    length: '3 years (4 in many four-year honours programmes)',
    money: 'Data analyst fresher pay averages about ₹4.1 lakh',
    catch: 'Cheaper than B.Tech, but the degree carries less brand weight, so proof of work matters more.',
  },
  {
    route: 'BBA, BMS or integrated MBA',
    who: 'Any stream',
    gate: 'CUET UG, IPMAT, JIPMAT or a college test',
    length: '3 to 5 years',
    money: 'Wide range. Entry-level digital marketing managers average about ₹3.1 lakh in PayScale profiles and it rises with results',
    catch: 'A general management degree without one domain skill produces a generalist gap.',
  },
  {
    route: 'B.Com or BA Economics with CA, CS or CMA',
    who: 'Any stream can register for CA Foundation',
    gate: 'CA Foundation twice a year; CS and CMA have their own entry exams',
    length: 'CA usually takes several years with articleship',
    money: 'Accountant fresher pay averages about ₹2.3 lakh; a qualified CA earns far more',
    catch: 'Many students spend years on repeat attempts. Keep a parallel skill running.',
  },
  {
    route: 'Integrated law (BA LLB, BBA LLB)',
    who: 'Any stream',
    gate: 'CLAT (roughly 3,600 to 3,700 undergraduate seats across the participating NLUs), AILET, CUET and university tests',
    length: '5 years',
    money: 'Litigation starts slowly; corporate and compliance roles pay more',
    catch: 'Competition happens twice: first the entrance, then the climb to a strong practice or firm.',
  },
  {
    route: 'Design: B.Des, fashion, interior, UX',
    who: 'Any stream',
    gate: 'UCEED, NID DAT, NIFT entrance and college tests',
    length: '4 years',
    money: 'Graphic designer fresher pay averages about ₹2.4 lakh; a strong portfolio moves it up',
    catch: 'Admission tests reward drawing and thinking speed. Prepare a portfolio early.',
  },
  {
    route: 'MBBS, BDS and allied health',
    who: 'PCB with English',
    gate: 'NEET UG (over 22 lakh registered for 2026)',
    length: 'MBBS about 5.5 years including internship; postgraduate study adds more',
    money: 'Income grows late, after specialisation',
    catch: 'Two hard gates: NEET, then postgraduate seats. Fees at private colleges can be very high.',
  },
  {
    route: 'BSc Nursing, B.Pharm, physiotherapy',
    who: 'PCB for nursing and physiotherapy; PCB or PCM for B.Pharm',
    gate: 'State counselling, university tests and college tests',
    length: '4 years',
    money: 'Nurse fresher pay averages about ₹2.6 lakh; pharmacist about ₹2.5 lakh',
    catch: 'Licence and registration rules apply. Pay rises through specialisation, not time alone.',
  },
  {
    route: 'Defence: NDA',
    who: 'Army: any stream. Navy and Air Force: Physics and Maths',
    gate: 'UPSC NDA exam, then SSB interview and medical tests',
    length: 'Academy training, then service',
    money: 'Paid training and stable service pay',
    catch: 'NDA II 2026 had only 394 vacancies. Medical and height standards are strict.',
  },
  {
    route: 'Teacher education, including four-year ITEP',
    who: 'Any stream, depending on subject',
    gate: 'NCET (conducted by NTA) for ITEP',
    length: '4 years',
    money: 'Stable, moderate pay; coaching and content routes can grow it',
    catch: 'Pay ceiling is fixed unless you add a scalable layer such as online teaching.',
  },
  {
    route: 'Skill-first: diploma, certificate and work',
    who: 'Anyone after 10th or 12th',
    gate: 'No national entrance test',
    length: 'Months to three years',
    money: 'Depends entirely on the proof you build',
    catch: 'Works for digital, trade and creative fields. It does not replace a licence where one is legally required.',
  },
];

export const scienceCards = [
  {
    label: 'PCM',
    title: 'Engineering is one door, not the only door',
    body:
      'PCM keeps the widest set of doors open: B.Tech, BCA, data science, architecture, NDA (Navy and Air Force), and all the any-stream routes. If JEE goes badly, a computer or data degree plus one shipped project is a strong second plan.',
  },
  {
    label: 'PCB',
    title: 'NEET is a large gate with a small opening',
    body:
      'MBBS seats total 1,36,939 for 2026-27, against over 22 lakh registrations. Write a full second plan (nursing, allied health, pharmacy, biotech or a data pivot) before the result, not after it.',
  },
  {
    label: 'PCMB',
    title: 'Two subjects give you two backups',
    body:
      'If you studied both Maths and Biology, you can attempt NEET and JEE routes. That also means double the preparation load, so pick a primary exam early.',
  },
];

export const commerceCards = [
  {
    tone: 'gold',
    title: 'Commerce with Maths',
    items: [
      'Keeps BCA, data, economics honours and quantitative finance open.',
      'Strengthens CUET scores in Mathematics and Economics-linked papers.',
      'Fits actuarial and analytics routes better than commerce without Maths.',
      'Still lets you register for CA Foundation, CS and CMA.',
    ],
  },
  {
    tone: 'teal',
    title: 'Commerce without Maths',
    items: [
      'Not a dead end. B.Com, BBA, law, design, mass communication and CA remain open.',
      'Check BCA and quantitative degrees college by college. Many ask for Maths or a bridge course; some accept any stream.',
      'Learn spreadsheets and basic data reading during the degree. That gap is fixable.',
      'Pair the degree with one applied skill: sales, accounting software, marketing or finance modelling.',
    ],
  },
];

export const artsCards = [
  {
    label: 'Law',
    title: 'Integrated law through CLAT',
    body:
      'CLAT 2027 is on 6 December 2026, and applications close on 31 October 2026. It needs 45% in Class 12 (40% for SC/ST) and offers roughly 3,600 to 3,700 NLU seats (published counts differ slightly). Many good law colleges also accept CUET or their own tests.',
  },
  {
    label: 'Psychology and social science',
    title: 'BA, then a specialisation',
    body:
      'A BA in Psychology, Economics or Political Science works best when you know which postgraduate or job path sits after it. Counselling and clinical work need further study and licensing.',
  },
  {
    label: 'Media and design',
    title: 'Portfolio decides the outcome',
    body:
      'Journalism, design and communication pay according to the body of work you can show. Three finished pieces beat a certificate list.',
  },
];

export const after10Rows = [
  {
    route: 'Class 11-12 Science, Commerce or Arts',
    length: '2 years, then a degree',
    cost: 'Government schools are low-fee; private schools vary widely',
    leadsTo: 'Every route in the full chart',
    catch: 'Needs a second decision after 12th. Choose the subject mix for the doors it keeps open.',
  },
  {
    route: 'Polytechnic diploma',
    length: '3 years',
    cost: 'Published estimates: government colleges cost far less than private ones',
    leadsTo: 'A junior engineering job, or lateral entry into the second year of B.Tech in many states',
    catch: 'Check the state process for lateral entry and the branch before you join.',
  },
  {
    route: 'ITI (trade certificate)',
    length: '6 months to 2 years',
    cost: 'Low in government ITIs',
    leadsTo: 'Trade jobs, apprenticeship and diploma routes in some states',
    catch: 'Pay starts low. It grows when you add supervision, digital or safety skills.',
  },
  {
    route: 'Skill certificate plus an open school route',
    length: 'Flexible',
    cost: 'Free to low if you choose carefully',
    leadsTo: 'Digital and creative work while you continue schooling',
    catch: 'Needs discipline. A pile of certificates is not proof; one finished project is.',
  },
];

export const oddsBars = [
  {
    label: 'NEET UG 2026: MBBS seats per 100 registered candidates',
    value: 'About 6',
    pct: 6,
    detail: '1,36,939 MBBS seats against over 22 lakh registrations. Around 11.2 lakh qualified in the re-exam.',
    tone: 'gold',
  },
  {
    label: 'JEE Advanced 2026: IIT seats per 100 qualified candidates',
    value: 'About 33',
    pct: 33,
    detail: '18,826 IIT seats (18,951 with IISc Bangalore) in the JoSAA matrix against 56,880 qualified, out of 1,87,389 who registered.',
    tone: 'teal',
  },
  {
    label: 'NEET UG 2026: government MBBS seats per 100 test-takers',
    value: 'About 3',
    pct: 3,
    detail: '63,296 government seats against about 20 lakh who appeared. Private colleges hold the other 73,643 seats, and those cost far more.',
    tone: 'gold',
  },
  {
    label: 'JEE Advanced 2026: IIT seats per 100 who appeared in both papers',
    value: 'About 10',
    pct: 10,
    detail: '18,826 IIT seats against 1,79,694 candidates who appeared. Only about 32 in 100 of them qualified, and qualifying does not guarantee a seat in the branch you want.',
    tone: 'teal',
  },
  {
    label: 'JoSAA 2026: total IIT, NIT, IIIT and GFTI seats',
    value: '67,323',
    pct: 100,
    detail: 'Many more seats exist than IIT seats, which is why a strong non-IIT plan is a real plan, not a consolation.',
    tone: 'violet',
  },
];

export const payBars = [
  { label: 'Software engineer', value: '₹5.4 lakh', pct: 89 },
  { label: 'Data analyst', value: '₹4.1 lakh', pct: 69 },
  { label: 'Digital marketing manager', value: '₹3.1 lakh', pct: 51 },
  { label: 'Mechanical engineer', value: '₹3.0 lakh', pct: 50 },
  { label: 'Registered nurse', value: '₹2.6 lakh', pct: 43 },
  { label: 'Pharmacist', value: '₹2.5 lakh', pct: 42 },
  { label: 'Graphic designer', value: '₹2.4 lakh', pct: 40 },
  { label: 'Accountant', value: '₹2.3 lakh', pct: 38 },
];

export const costRows = [
  {
    seat: 'IIT B.Tech, general category',
    fee: 'Tuition ₹1,28,250 per semester (₹28,250 for SC, ST and PwD). Hostel and mess are extra.',
    math: '₹1,28,250 × 8 semesters = about ₹10.3 lakh of tuition. Against the PayScale entry software average of ₹5.37 lakh, that is about 1.9 years of that pay, before living costs.',
    budget: 'About ₹1 crore (₹10.3 lakh ÷ 0.10)',
  },
  {
    seat: 'MBBS, government quota',
    fee: 'Under ₹8 lakh for the whole course in the states compared',
    math: 'Only about 3 government seats per 100 NEET test-takers, so the fee is low and the competition is the real price.',
    budget: 'About ₹80 lakh (₹8 lakh ÷ 0.10)',
  },
  {
    seat: 'MBBS, private management quota',
    fee: 'Above ₹60 lakh for the whole course in the states compared',
    math: 'At least 7.5 times the government total (₹60 lakh ÷ ₹8 lakh). The seat is easier to get and far harder to repay.',
    budget: 'About ₹6 crore (₹60 lakh ÷ 0.10)',
  },
];

export const dateCards = [
  {
    label: 'Law',
    title: 'CLAT 2027: 6 December 2026',
    body:
      'The exam runs from 2 pm to 4 pm in offline mode. Applications opened on 3 August and close on 31 October 2026, so this one is still open.',
  },
  {
    label: 'Engineering',
    title: 'JEE Main 2027 Session 1: 22 to 24 and 28 to 30 January 2027',
    body:
      'These are the dates in the NTA examination calendar, with 31 January as a buffer day. NTA calls the calendar tentative, and the Session 2 dates and the application window are not announced yet.',
  },
  {
    label: 'Commerce',
    title: 'CA Foundation: register by 1 January or 1 July',
    body:
      'ICAI needs registration on or before 1 January for the May or June exam, and on or before 1 July for the November or December exam, with at least four months of study.',
  },
  {
    label: 'Not announced',
    title: 'NEET UG 2027, CUET UG 2027 and the next NDA cycle',
    body:
      'NTA’s calendar for December 2026 to March 2027 does not list NEET UG or CUET UG. NDA II 2026 was held on 13 September 2026. Wait for each official notice before planning around a date.',
  },
];

export const resultPlans = [
  {
    tone: 'teal',
    title: 'If the exam goes well',
    items: [
      'Use counselling to compare colleges by course, fees and placement median, not by name alone.',
      'Budget the whole course before you accept a seat, including hostel and coaching.',
      'Start one small skill project before college begins so first year is not empty.',
    ],
  },
  {
    tone: 'gold',
    title: 'If the exam goes averagely',
    items: [
      'Apply to a route where your score is enough today, such as a good BCA, BBA or allied-health seat.',
      'Keep the entrance exam as a later option through CUET, lateral entry or postgraduate tests.',
      'Choose the college for teaching quality and internship access, not for the campus photos.',
    ],
  },
  {
    tone: 'amber',
    title: 'If the exam goes badly',
    items: [
      'Check what actually caused it: preparation, health, stress or the wrong exam for you.',
      'A drop year is worth it only with a fixed score target, a plan for money and a written skill-building side track.',
      'Exams can also be disrupted. NEET UG 2026 was cancelled and re-held on 21 June 2026 after paper-leak allegations, so a second plan protects you from more than a bad day.',
    ],
  },
];


export const PDF12_FILES = [
  { id: 'overall', file: 'career-chart-after-12th-all-routes.pdf', title: 'Career Chart After 12th: All Routes', blurb: 'Every route for science, commerce and arts: entry exam, length, first-job pay and the catch, plus seat odds, costs and dates.' },
  { id: 'science', file: 'career-chart-after-12th-science.pdf', title: 'Career Chart After 12th: Science', blurb: 'PCM, PCB and PCMB routes with the exams, seat odds, fee maths and a second-plan table.' },
  { id: 'commerce', file: 'career-chart-after-12th-commerce.pdf', title: 'Career Chart After 12th: Commerce', blurb: 'Commerce with and without Maths, CA, law, BBA and design routes with the dates that matter.' },
  { id: 'arts', file: 'career-chart-after-12th-arts-humanities.pdf', title: 'Career Chart After 12th: Arts and Humanities', blurb: 'Law, psychology, media, design and teaching routes, and the proof of work that decides the outcome.' },
];
