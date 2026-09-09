import { careerPresets, skillPresets, type CareerPreset, type SkillPreset } from './coachingPresets';
import { careerRoles } from './careerSkillsCompass';
import { futureCareerRoles, futureEvidence } from './futureCareerProfiles';

export type CareerOutlook = 'growing' | 'evolving' | 'stable' | 'niche' | 'uncertain';

/** Concrete examples that make a career route understandable at different
 * stages. They are deliberately phrased as evidence a learner can create,
 * rather than promises about a job title or salary. */
export type CareerLevelGuidance = {
  level: 'Starter' | 'Working' | 'Advanced';
  example: string;
  advice: string;
};

export type CareerGuide = CareerPreset & {
  summary: string;
  outlook: CareerOutlook;
  outlookDetail: string;
  dailyWork: string[];
  entryRoutes: string[];
  foundationSkills: string[];
  specialistSkills: string[];
  futureSkills: string[];
  workStyles: string[];
  watchOuts: string[];
  starterTests: string[];
  adjacentRoles: string[];
  /** Practical context used to personalise exploration without turning it into a test. */
  interestTags: string[];
  subjectRoutes: string[];
  suitableStages: string[];
  earningContext: string;
  marketSignal: string;
  marketEvidence: { date: string; source: string; url: string };
  localContext: string;
  competitionNote: string;
  independencePath: string;
  workSetting: string;
  entryLevel: string;
  routeLength: string;
  dayPace: string;
  portableSkills: string[];
  questionsToAsk: string[];
  evidenceExamples: string[];
  progression: CareerLevelGuidance[];
  regulated: boolean;
  careerGroup: 'Builders' | 'Analysers' | 'Communicators' | 'Healers' | 'Makers';
};

type GuideFields = Omit<CareerGuide, keyof CareerPreset | 'workSetting' | 'entryLevel' | 'routeLength' | 'dayPace' | 'portableSkills' | 'questionsToAsk' | 'interestTags' | 'subjectRoutes' | 'suitableStages' | 'earningContext' | 'marketSignal' | 'marketEvidence' | 'localContext' | 'competitionNote' | 'independencePath' | 'regulated' | 'evidenceExamples' | 'progression' | 'careerGroup'> & Partial<Pick<CareerGuide, 'interestTags' | 'subjectRoutes' | 'suitableStages' | 'earningContext' | 'marketSignal'>>;

type FamilyGuide = GuideFields & {
  purpose: string;
};

type CareerFitLens = Pick<CareerGuide, 'interestTags' | 'subjectRoutes' | 'suitableStages' | 'earningContext' | 'marketSignal'>;

const slug = (value: string) => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const familyGuides: Record<string, FamilyGuide> = {
  'Technology & Data': {
    purpose: 'builds, improves, secures, or explains digital products and data systems',
    summary: '', outlook: 'evolving',
    outlookDetail: 'Demand remains broad, but routine tasks are changing quickly. Strong candidates combine technical depth, problem framing, security awareness, and the ability to work with AI-assisted tools.',
    dailyWork: ['Translate a user or business problem into technical work', 'Build, test, analyse, document, or secure systems', 'Collaborate through reviews, incidents, experiments, and releases'],
    entryRoutes: ['Relevant degree plus projects and internships', 'Diploma or certification plus a credible portfolio', 'Adjacent-role transition supported by demonstrable work'],
    foundationSkills: ['Problem framing', 'Clear writing', 'Logical reasoning'],
    specialistSkills: ['Role-relevant tools', 'Testing and quality', 'Systems understanding'],
    futureSkills: ['AI tool literacy', 'Data privacy', 'Human judgement and verification'],
    workStyles: ['Continuous learning', 'Detailed problem solving', 'Collaborative delivery'],
    watchOuts: ['Tool knowledge without strong fundamentals', 'Choosing the title without testing the daily work'],
    starterTests: ['Complete a realistic two-hour role task', 'Review ten current entry-level descriptions', 'Ask a practitioner to critique one work sample'],
    adjacentRoles: ['Business Analyst', 'Technical Product Manager', 'Solutions Consultant'],
  },
  'Engineering & Built Environment': {
    purpose: 'designs, builds, tests, operates, or improves physical systems and infrastructure',
    summary: '', outlook: 'evolving',
    outlookDetail: 'Infrastructure, electrification, automation, resilient construction, and energy transition are creating new work. Digital modelling and sustainability now sit beside core engineering fundamentals.',
    dailyWork: ['Model or diagnose a physical system', 'Balance safety, cost, performance, and regulation', 'Coordinate design, suppliers, field work, testing, and documentation'],
    entryRoutes: ['Accredited engineering or architecture degree', 'Diploma and technician route with supervised practice', 'Apprenticeship or specialist certification for applied roles'],
    foundationSkills: ['Quantitative reasoning', 'Attention to detail', 'Technical communication'],
    specialistSkills: ['Engineering drawing', 'Measurement and testing', 'Safety and quality'],
    futureSkills: ['Digital twins and simulation', 'Automation and controls', 'Sustainable design'],
    workStyles: ['Structured problem solving', 'Field and office coordination', 'Long project cycles'],
    watchOuts: ['Underestimating mathematics or licensing requirements', 'Ignoring site conditions and routine documentation'],
    starterTests: ['Complete a small design or diagnostic brief', 'Visit a lab, workshop, site, or design office', 'Compare an engineer and technician route'],
    adjacentRoles: ['Project Manager', 'Technical Sales Engineer', 'Operations Analyst'],
  },
  'Health & Life Sciences': {
    purpose: 'improves health, care, diagnosis, rehabilitation, research, or life-science systems',
    summary: '', outlook: 'growing',
    outlookDetail: 'Ageing populations, preventive care, digital health, genomics, and health data are expanding options. Regulated roles still require verified qualifications, supervised practice, and careful ethical judgement.',
    dailyWork: ['Assess evidence, symptoms, samples, or care needs', 'Communicate accurately with patients, families, or scientific teams', 'Document decisions and follow safety, privacy, and regulatory standards'],
    entryRoutes: ['Regulated degree, licensing, and supervised practice', 'Allied-health or laboratory qualification', 'Science degree followed by research, data, regulatory, or industry specialisation'],
    foundationSkills: ['Active listening', 'Scientific reasoning', 'Professional ethics'],
    specialistSkills: ['Clinical or laboratory technique', 'Accurate documentation', 'Domain regulation'],
    futureSkills: ['Health informatics', 'Genomics and data literacy', 'Remote and technology-enabled care'],
    workStyles: ['High responsibility', 'Evidence-led decisions', 'Sustained learning'],
    watchOuts: ['Committing before understanding training length and licensing', 'Confusing interest in science with comfort in the real care environment'],
    starterTests: ['Interview a practitioner about a normal shift', 'Observe an ethical, supervised care or lab setting', 'Compare clinical and non-clinical routes'],
    adjacentRoles: ['Health Informatics Specialist', 'Clinical Research Associate', 'Healthcare Administrator'],
  },
  'Commerce, Finance & Economics': {
    purpose: 'measures, manages, explains, or allocates money, risk, and business performance',
    summary: '', outlook: 'evolving',
    outlookDetail: 'Automation is reducing routine processing while increasing demand for analysis, judgement, controls, advisory work, data fluency, and communication with decision makers.',
    dailyWork: ['Interpret financial or economic information', 'Check accuracy, risk, controls, and assumptions', 'Explain implications and recommend an action'],
    entryRoutes: ['Commerce, finance, economics, mathematics, or business degree', 'Professional qualification with staged examinations', 'Apprenticeship or analyst route supported by practical evidence'],
    foundationSkills: ['Numeracy', 'Attention to detail', 'Commercial awareness'],
    specialistSkills: ['Accounting or modelling', 'Risk and controls', 'Spreadsheet and data analysis'],
    futureSkills: ['Automation oversight', 'Data storytelling', 'Climate and technology risk'],
    workStyles: ['Deadline discipline', 'Evidence-based judgement', 'Confidential work'],
    watchOuts: ['Choosing only for salary or status', 'Underestimating examination persistence and accuracy requirements'],
    starterTests: ['Build a simple model or analysis', 'Compare two professional routes', 'Analyse one company, market, or financial decision'],
    adjacentRoles: ['Business Analyst', 'Risk Analyst', 'FinTech Analyst'],
  },
  'Business, Marketing & Operations': {
    purpose: 'finds customers, improves operations, grows organisations, or coordinates delivery',
    summary: '', outlook: 'evolving',
    outlookDetail: 'AI and automation are changing research, content, reporting, and coordination. Opportunity is strongest for people who combine customer insight, commercial judgement, analytics, ownership, and execution.',
    dailyWork: ['Understand a customer or operating problem', 'Coordinate people, priorities, budgets, and deadlines', 'Measure results and adjust the plan'],
    entryRoutes: ['Business or specialist degree plus projects and internships', 'Function-first experience in sales, service, operations, or marketing', 'Small venture, apprenticeship, or portfolio-led route'],
    foundationSkills: ['Communication', 'Planning and prioritisation', 'Commercial awareness'],
    specialistSkills: ['Customer research', 'Project delivery', 'Performance analysis'],
    futureSkills: ['AI-assisted workflows', 'Experiment design', 'Cross-functional influence'],
    workStyles: ['Fast decisions', 'People coordination', 'Outcome ownership'],
    watchOuts: ['Generic management study without work evidence', 'Enjoying ideas but avoiding measurement and follow-through'],
    starterTests: ['Run a small customer-facing project', 'Solve a realistic case with measurable outcomes', 'Shadow a sales, operations, or marketing workflow'],
    adjacentRoles: ['Product Manager', 'Customer Success Manager', 'Strategy Analyst'],
  },
  'Design, Media & Creative Arts': {
    purpose: 'creates useful, persuasive, expressive, or engaging experiences and media',
    summary: '', outlook: 'evolving',
    outlookDetail: 'Generative tools are accelerating production, so advantage is shifting toward original judgement, audience insight, concept quality, taste, direction, and proof of consistent execution.',
    dailyWork: ['Interpret a brief and understand the audience', 'Develop, produce, critique, and revise creative work', 'Present decisions and deliver to technical or commercial constraints'],
    entryRoutes: ['Design or arts programme with a focused portfolio', 'Diploma, studio, apprenticeship, or production route', 'Independent portfolio and client work supported by strong critique'],
    foundationSkills: ['Visual or narrative communication', 'Giving and receiving feedback', 'Project discipline'],
    specialistSkills: ['Role-specific craft and software', 'Portfolio curation', 'Audience understanding'],
    futureSkills: ['AI-assisted production', 'Creative direction', 'Rights, ethics, and authenticity'],
    workStyles: ['Iterative work', 'Frequent critique', 'Portfolio-based progression'],
    watchOuts: ['Collecting software certificates without a strong body of work', 'Ignoring deadlines, clients, or commercial constraints'],
    starterTests: ['Complete a brief in one week', 'Request critique from two relevant people', 'Rework one piece after feedback and document the decisions'],
    adjacentRoles: ['Content Strategist', 'Product Designer', 'Creative Producer'],
  },
  'Law, Government & Public Service': {
    purpose: 'interprets rules, protects rights, shapes policy, or delivers public systems',
    summary: '', outlook: 'stable',
    outlookDetail: 'Regulated legal and public roles remain important. Technology increases the value of research quality, policy literacy, digital evidence, clear writing, ethics, and public communication.',
    dailyWork: ['Read complex evidence, rules, cases, or policy', 'Write structured analysis and recommendations', 'Represent, advise, negotiate, investigate, or administer'],
    entryRoutes: ['Accredited law degree and licensing where required', 'Relevant degree plus competitive examination', 'Policy, research, compliance, or public-programme experience'],
    foundationSkills: ['Reading comprehension', 'Clear writing', 'Logical reasoning'],
    specialistSkills: ['Legal or policy research', 'Argument and negotiation', 'Public systems knowledge'],
    futureSkills: ['Digital evidence', 'Technology regulation', 'Data-informed policy'],
    workStyles: ['Detailed reading', 'High accountability', 'Long selection or case cycles'],
    watchOuts: ['Idealising courtroom or government work', 'Relying on one competitive exam without a parallel route'],
    starterTests: ['Brief one real case or policy', 'Analyse an actual exam and selection funnel', 'Interview a recent entrant about routine work'],
    adjacentRoles: ['Compliance Analyst', 'Policy Researcher', 'Risk Analyst'],
  },
  'Education, Psychology & Social Impact': {
    purpose: 'helps people learn, develop, cope, participate, or access opportunity',
    summary: '', outlook: 'growing',
    outlookDetail: 'Demand is growing for personalised learning, mental-health support, inclusive practice, workforce learning, and programme evaluation. Trust, safeguarding, and supervised practice remain essential.',
    dailyWork: ['Understand learner, client, or community needs', 'Design and facilitate an intervention', 'Observe progress, document responsibly, and adapt'],
    entryRoutes: ['Relevant degree plus supervised practice or teaching qualification', 'Programme delivery and facilitation experience', 'Research, instructional design, or social-impact operations route'],
    foundationSkills: ['Active listening', 'Facilitation', 'Reflective practice'],
    specialistSkills: ['Learning or behaviour design', 'Safeguarding and ethics', 'Progress evaluation'],
    futureSkills: ['Digital learning design', 'Inclusive technology', 'Outcome measurement'],
    workStyles: ['People-intensive work', 'Patient iteration', 'Emotionally responsible boundaries'],
    watchOuts: ['Confusing being helpful with professional competence', 'Ignoring licensing, safeguarding, or emotional load'],
    starterTests: ['Facilitate one supervised learning activity', 'Observe a practitioner and document required skills', 'Design a small intervention and define how progress would be measured'],
    adjacentRoles: ['Instructional Designer', 'Programme Manager', 'Learning and Development Facilitator'],
  },
  'Science, Research & Environment': {
    purpose: 'investigates evidence, explains natural systems, or develops scientific solutions',
    summary: '', outlook: 'growing',
    outlookDetail: 'Climate adaptation, advanced materials, computational science, food systems, and applied research are expanding. Data, coding, communication, and cross-disciplinary work increasingly complement laboratory or field depth.',
    dailyWork: ['Frame a question and gather reliable evidence', 'Run experiments, models, fieldwork, or analysis', 'Document uncertainty and communicate findings'],
    entryRoutes: ['Science degree with laboratory, field, or analytical experience', 'Applied technical qualification', 'Postgraduate research for specialist and academic roles'],
    foundationSkills: ['Scientific reasoning', 'Quantitative analysis', 'Clear documentation'],
    specialistSkills: ['Experimental or field method', 'Statistics and data', 'Domain knowledge'],
    futureSkills: ['Computational methods', 'Climate literacy', 'Open and reproducible research'],
    workStyles: ['Careful evidence work', 'Long feedback cycles', 'Tolerance for uncertainty'],
    watchOuts: ['Assuming a subject interest guarantees enjoyment of research routines', 'Ignoring postgraduate requirements and funding realities'],
    starterTests: ['Reproduce a small experiment or analysis', 'Review a real research paper and dataset', 'Compare academic, industry, and government routes'],
    adjacentRoles: ['Data Analyst', 'Science Communicator', 'Regulatory Affairs Specialist'],
  },
  'Hospitality, Travel, Sports & Events': {
    purpose: 'delivers memorable, safe, and reliable service, travel, performance, or live experiences',
    summary: '', outlook: 'stable',
    outlookDetail: 'Experience-led services remain people intensive. Digital distribution, revenue analytics, wellbeing, sports data, and operational technology are creating more specialised roles.',
    dailyWork: ['Prepare and deliver a live service or performance', 'Coordinate people, schedules, safety, and customer needs', 'Recover quickly when conditions change'],
    entryRoutes: ['Specialist degree or diploma plus internships', 'Operational entry with progressive responsibility', 'Certification, competition, or supervised practice for regulated roles'],
    foundationSkills: ['Customer communication', 'Reliability', 'Teamwork'],
    specialistSkills: ['Live operations', 'Safety and service standards', 'Revenue or performance analysis'],
    futureSkills: ['Experience technology', 'Data-led personalisation', 'Sustainable operations'],
    workStyles: ['High pace', 'Visible service', 'Irregular or seasonal schedules'],
    watchOuts: ['Ignoring working hours and physical demands', 'Choosing the public image without observing a real shift'],
    starterTests: ['Observe or support one real shift or event', 'Map a complete customer journey', 'Ask an early-career professional about schedules and progression'],
    adjacentRoles: ['Operations Manager', 'Customer Experience Manager', 'Revenue Analyst'],
  },
  'Agriculture, Food & Rural Careers': {
    purpose: 'improves food, farming, natural resources, or rural value chains',
    summary: '', outlook: 'growing',
    outlookDetail: 'Climate pressure, food safety, precision agriculture, cold chains, traceability, and rural technology are increasing demand for blended scientific, operational, and commercial skills.',
    dailyWork: ['Observe a biological, production, or market system', 'Improve yield, quality, safety, logistics, or sustainability', 'Work across field, laboratory, supplier, and customer contexts'],
    entryRoutes: ['Agriculture, food, science, engineering, or veterinary degree', 'Diploma and field-technical route', 'Agribusiness or entrepreneurship supported by practical exposure'],
    foundationSkills: ['Observation', 'Practical problem solving', 'Commercial awareness'],
    specialistSkills: ['Agricultural or food science', 'Quality and safety', 'Value-chain operations'],
    futureSkills: ['Precision agriculture', 'Climate adaptation', 'Traceability and data'],
    workStyles: ['Field and seasonal work', 'Whole-system thinking', 'Community coordination'],
    watchOuts: ['Ignoring field conditions and location realities', 'Treating agriculture as only production and missing the wider value chain'],
    starterTests: ['Map one crop or food value chain', 'Visit a farm, market, lab, or processing unit', 'Compare science, operations, and business roles'],
    adjacentRoles: ['Supply Chain Analyst', 'Sustainability Analyst', 'Food Safety Officer'],
  },
  'Skilled Trades & Applied Careers': {
    purpose: 'installs, maintains, repairs, fabricates, or operates essential physical systems',
    summary: '', outlook: 'growing',
    outlookDetail: 'Electrification, renewable energy, advanced manufacturing, medical equipment, and connected systems are raising demand for technicians who combine hands-on skill with diagnostics and digital tools.',
    dailyWork: ['Inspect or diagnose equipment and systems', 'Perform safe installation, repair, setup, or fabrication', 'Document work and explain options to customers or supervisors'],
    entryRoutes: ['Industrial training institute or polytechnic', 'Apprenticeship and recognised trade certification', 'Employer training plus supervised practical evidence'],
    foundationSkills: ['Reliability', 'Safety awareness', 'Customer communication'],
    specialistSkills: ['Hands-on diagnosis', 'Tools and measurement', 'Quality workmanship'],
    futureSkills: ['Digital diagnostics', 'Connected equipment', 'Energy and automation systems'],
    workStyles: ['Practical work', 'Visible standards', 'Field or workshop settings'],
    watchOuts: ['Choosing low-quality training without industry recognition', 'Ignoring safety, customer trust, and progression routes'],
    starterTests: ['Try a supervised practical task', 'Compare two training providers and certifications', 'Interview a working technician about demand and progression'],
    adjacentRoles: ['Service Supervisor', 'Technical Sales Specialist', 'Maintenance Planner'],
  },
  'Languages, International & Emerging Routes': {
    purpose: 'connects people, organisations, and information across languages, cultures, or borders',
    summary: '', outlook: 'evolving',
    outlookDetail: 'Routine translation is increasingly automated. Strong futures combine advanced language ability with law, technology, trade, policy, education, research, localisation, or relationship management.',
    dailyWork: ['Interpret meaning, context, and audience', 'Research domain terminology and cultural expectations', 'Produce, review, facilitate, or advise across borders'],
    entryRoutes: ['Advanced language proficiency plus a second domain', 'International studies, trade, policy, or localisation route', 'Portfolio of real translation, research, teaching, or cross-border work'],
    foundationSkills: ['Reading comprehension', 'Cross-cultural communication', 'Research skills'],
    specialistSkills: ['Advanced language proficiency', 'Domain terminology', 'Translation, interpretation, or international operations'],
    futureSkills: ['Machine-translation quality review', 'Localisation technology', 'Cross-border digital work'],
    workStyles: ['Context-heavy communication', 'Continuous language practice', 'International coordination'],
    watchOuts: ['Studying a language without a second professional domain', 'Ignoring the impact of automation on routine work'],
    starterTests: ['Complete and review a real language task', 'Pair the language with one target sector', 'Interview someone using the language professionally'],
    adjacentRoles: ['Localisation Specialist', 'International Admissions Adviser', 'Export-Import Specialist'],
  },
  'Future-ready & Cross-functional': {
    purpose: 'connects a new technology or societal need with an established professional domain',
    summary: '', outlook: 'growing',
    outlookDetail: 'These roles are emerging or expanding, so titles and entry routes vary. Durable domain foundations, a portfolio of applied work, and the ability to learn across disciplines matter more than chasing a fashionable title.',
    dailyWork: ['Translate between technical, business, regulatory, and human needs', 'Test new tools or methods against real outcomes', 'Document risks, evidence, decisions, and responsible use'],
    entryRoutes: ['Strong foundation in one established discipline', 'Targeted specialisation plus applied projects', 'Adjacent-role transition using demonstrable cross-functional work'],
    foundationSkills: ['Systems thinking', 'Research skills', 'Clear communication'],
    specialistSkills: ['One deep professional domain', 'Technology or sustainability literacy', 'Risk and ethics'],
    futureSkills: ['AI collaboration', 'Data interpretation', 'Continuous skill renewal'],
    workStyles: ['Ambiguous problems', 'Cross-functional teams', 'Fast-changing tools'],
    watchOuts: ['Choosing a title with no credible entry market', 'Collecting shallow certificates across too many topics'],
    starterTests: ['Build one applied project in a real domain', 'Review twenty current role descriptions', 'Interview two people entering from different backgrounds'],
    adjacentRoles: ['Business Analyst', 'Product Specialist', 'Research Associate'],
  },
};

// This is deliberately a context layer rather than a promise of a salary or
// a prediction for one country. It helps a learner compare routes, subjects,
// timing, and earning upside before checking current local evidence.
const careerFitLens: Record<string, CareerFitLens> = {
  'Technology & Data': {
    interestTags: ['solving puzzles', 'building with technology', 'working with data', 'improving systems'],
    subjectRoutes: ['Class 11–12 Science with Mathematics', 'Commerce with Mathematics', 'Any stream with computing projects or a recognised diploma'],
    suitableStages: ['after-10th', 'after-12th-science', 'after-12th-commerce', 'college', 'working'],
    earningContext: 'Often strong earning upside after proven technical depth; early pay varies widely by role, portfolio, location, and employer.',
    marketSignal: 'AI, data, software, cloud, and cyber work are expanding, while routine tasks are increasingly automated.',
  },
  'Engineering & Built Environment': {
    interestTags: ['designing physical systems', 'maths and science', 'making things work', 'field and project work'],
    subjectRoutes: ['Class 11–12 Science with Mathematics', 'Diploma or polytechnic after Class 10', 'Relevant degree, apprenticeship, or technician route'],
    suitableStages: ['after-10th', 'after-12th-science', 'college', 'working'],
    earningContext: 'Specialist engineering and infrastructure roles can pay very well with experience; route quality, accreditation, and practical competence matter.',
    marketSignal: 'Electrification, automation, advanced manufacturing, infrastructure, and energy transition are creating new specialist work.',
  },
  'Health & Life Sciences': {
    interestTags: ['helping people', 'biology and health', 'careful investigation', 'responsibility and service'],
    subjectRoutes: ['Class 11–12 Science with Biology', 'Class 11–12 Science with Mathematics for some health technology routes', 'Recognised allied-health, laboratory, or research programmes'],
    suitableStages: ['after-12th-science', 'college', 'working'],
    earningContext: 'Licensed specialist roles can have high long-term earning potential, but training, exams, supervision, and location strongly affect the route.',
    marketSignal: 'Ageing populations, preventive care, health technology, genomics, and care delivery are increasing demand across several kinds of work.',
  },
  'Commerce, Finance & Economics': {
    interestTags: ['numbers and patterns', 'money and markets', 'business decisions', 'checking detail'],
    subjectRoutes: ['Class 11–12 Commerce with or without Mathematics', 'Science with Mathematics for quantitative finance and economics routes', 'Degree, professional qualification, apprenticeship, or analyst route'],
    suitableStages: ['after-12th-commerce', 'after-12th-science', 'college', 'working'],
    earningContext: 'Specialist finance, risk, investment, and advisory roles can be high earning; examinations, ethics, and a strong record of judgement are part of the cost.',
    marketSignal: 'Automation is reducing routine processing and increasing the value of analysis, controls, risk, data, and trusted advice.',
  },
  'Business, Marketing & Operations': {
    interestTags: ['organising people', 'customers and markets', 'leading delivery', 'starting something'],
    subjectRoutes: ['Any Class 11–12 stream', 'Business, specialist, or technical degree with projects and internships', 'Work-first, apprenticeship, or small-venture route'],
    suitableStages: ['after-10th', 'after-12th-commerce', 'after-12th-humanities', 'college', 'working'],
    earningContext: 'Earning upside is highly variable: ownership, commercial results, sector, and progression matter more than the job title alone.',
    marketSignal: 'Organisations need people who combine customer understanding, analytics, AI-assisted workflows, and accountable execution.',
  },
  'Design, Media & Creative Arts': {
    interestTags: ['creating and communicating', 'visual or story work', 'understanding audiences', 'iterating through feedback'],
    subjectRoutes: ['Any Class 11–12 stream with a focused portfolio', 'Design, media, arts, communication, or specialist diploma', 'Studio, apprenticeship, freelance, or portfolio-led route'],
    suitableStages: ['after-10th', 'after-12th-science', 'after-12th-commerce', 'after-12th-humanities', 'college', 'working'],
    earningContext: 'Earnings range from modest to very high; distinctive work, commercial awareness, a reliable portfolio, and client or product impact create the difference.',
    marketSignal: 'Generative tools speed up production, increasing the value of original judgement, direction, audience insight, and consistent craft.',
  },
  'Law, Government & Public Service': {
    interestTags: ['fairness and rights', 'public issues', 'reading and argument', 'service and responsibility'],
    subjectRoutes: ['Any Class 11–12 stream for many law and public-service routes', 'Law, public policy, social science, or specialist degree', 'Competitive examination, internship, and regulated professional route where required'],
    suitableStages: ['after-12th-science', 'after-12th-commerce', 'after-12th-humanities', 'college', 'working'],
    earningContext: 'Private specialist law and senior policy or regulatory work can be high earning; public routes trade earning upside for competition, stability, and service conditions.',
    marketSignal: 'Technology regulation, digital evidence, climate policy, cyber risk, and public digital systems are widening the field beyond traditional titles.',
  },
  'Education, Psychology & Social Impact': {
    interestTags: ['helping people learn', 'listening and guiding', 'community improvement', 'patient relationship work'],
    subjectRoutes: ['Any Class 11–12 stream depending on the role', 'Education, psychology, social work, or development degree', 'Supervised practice, teaching, facilitation, or programme route'],
    suitableStages: ['after-12th-science', 'after-12th-commerce', 'after-12th-humanities', 'college', 'working'],
    earningContext: 'Pay varies by qualification, setting, and responsibility; specialist, leadership, technology, and private-practice routes can raise earning potential.',
    marketSignal: 'Personalised learning, mental-health support, inclusive practice, workforce learning, and outcome measurement are growing areas.',
  },
  'Science, Research & Environment': {
    interestTags: ['curiosity about nature', 'experiments and evidence', 'climate and environment', 'deep investigation'],
    subjectRoutes: ['Class 11–12 Science', 'Science, mathematics, environmental, or technical degree', 'Applied industry, government, laboratory, or postgraduate research route'],
    suitableStages: ['after-12th-science', 'college', 'working'],
    earningContext: 'Research careers often require longer study; applied data, climate, materials, regulatory, and industry specialist routes can offer stronger earning upside.',
    marketSignal: 'Climate adaptation, computational science, advanced materials, food systems, and applied research are expanding cross-disciplinary work.',
  },
  'Hospitality, Travel, Sports & Events': {
    interestTags: ['active and social work', 'creating experiences', 'sport and performance', 'calm service under pressure'],
    subjectRoutes: ['Any Class 11–12 stream', 'Hospitality, travel, sports, aviation, or event diploma or degree', 'Operational entry, certification, competition, or supervised-practice route'],
    suitableStages: ['after-10th', 'after-12th-science', 'after-12th-commerce', 'after-12th-humanities', 'college', 'working'],
    earningContext: 'Early pay varies and schedules can be demanding; management, specialist, international, and ownership routes can create higher upside.',
    marketSignal: 'Experience technology, travel recovery, sports data, wellness, and reliable live operations are creating more specialised roles.',
  },
  'Agriculture, Food & Rural Careers': {
    interestTags: ['nature and food', 'practical systems', 'community livelihoods', 'science with visible impact'],
    subjectRoutes: ['Class 11–12 Science or Agriculture', 'Agriculture, food, veterinary, engineering, or business route', 'Diploma, field training, family enterprise, or agribusiness route'],
    suitableStages: ['after-10th', 'after-12th-science', 'after-12th-commerce', 'college', 'working'],
    earningContext: 'Earning potential ranges widely; technology, processing, supply chains, specialised production, and enterprise can outperform commodity work.',
    marketSignal: 'Food safety, climate resilience, cold chains, precision agriculture, traceability, and rural technology are creating new opportunities.',
  },
  'Skilled Trades & Applied Careers': {
    interestTags: ['hands-on work', 'fixing and assembling', 'visible results', 'tools and practical diagnosis'],
    subjectRoutes: ['Vocational route or industrial training after Class 10', 'Diploma or polytechnic after Class 10 or 12', 'Apprenticeship, recognised certification, or employer training'],
    suitableStages: ['after-10th', 'after-12th-science', 'after-12th-commerce', 'college', 'working'],
    earningContext: 'A skilled trade can reach strong earnings through scarce expertise, safe independent work, supervision, contracting, or a small business.',
    marketSignal: 'Electrification, renewable energy, connected equipment, medical devices, and advanced manufacturing need technicians who can diagnose real systems.',
  },
  'Languages, International & Emerging Routes': {
    interestTags: ['languages and cultures', 'cross-border work', 'writing and interpretation', 'connecting people'],
    subjectRoutes: ['Any Class 11–12 stream plus advanced language learning', 'Language, international studies, trade, law, technology, or education route', 'Pair language ability with a second professional domain'],
    suitableStages: ['after-10th', 'after-12th-science', 'after-12th-commerce', 'after-12th-humanities', 'college', 'working'],
    earningContext: 'Language ability alone is rarely enough; specialist domains such as technology, law, trade, localisation, or diplomacy improve earning potential.',
    marketSignal: 'Routine translation is increasingly automated, while localisation, cross-cultural judgement, international operations, and domain expertise remain valuable.',
  },
  'Future-ready & Cross-functional': {
    interestTags: ['connecting different subjects', 'new technology and society', 'solving unfamiliar problems', 'learning across domains'],
    subjectRoutes: ['Any strong Class 11–12 foundation', 'A deep first discipline followed by targeted cross-disciplinary projects', 'Adjacent-role transition with demonstrable applied work'],
    suitableStages: ['after-12th-science', 'after-12th-commerce', 'after-12th-humanities', 'college', 'working'],
    earningContext: 'Emerging titles are uneven; earning upside is strongest when a new skill is anchored in a scarce, useful professional domain.',
    marketSignal: 'AI, climate, health, cyber, and automation are creating blended roles, but durable foundations matter more than fashionable labels.',
  },
};

const roleOverrides: Record<string, Partial<GuideFields>> = {
  'software-engineer': {
    summary: 'Software engineers design, build, test, and maintain software that solves a real user or operating problem.',
    dailyWork: ['Break requirements into technical tasks', 'Write, review, test, and debug code', 'Improve reliability, security, and maintainability'],
    specialistSkills: ['Programming fundamentals', 'Data structures and APIs', 'Testing and version control'],
    futureSkills: ['AI-assisted engineering', 'System design', 'Security and responsible deployment'],
    watchOuts: ['Enjoying tutorials but avoiding debugging', 'Building projects without users, tests, or documentation'],
    adjacentRoles: ['QA Automation Engineer', 'Solutions Engineer', 'Technical Product Manager'],
  },
  'llm-engineer': {
    summary: 'LLM engineers build reliable applications around language models, retrieval, evaluation, and production safeguards.',
    dailyWork: ['Translate a user or business need into an evaluated language-model workflow', 'Build prompts, retrieval, tool calls, tests, and fallback behaviour', 'Monitor quality, latency, cost, privacy, and failure cases after release'],
    foundationSkills: ['Problem framing', 'Clear writing', 'Logical reasoning'],
    specialistSkills: ['Python and software engineering', 'LLM application patterns', 'Evaluation and data pipelines', 'APIs and retrieval systems', 'Testing and observability'],
    futureSkills: ['Agentic system design', 'Model governance', 'Human-in-the-loop workflows', 'AI safety and privacy'],
    watchOuts: ['Treating a prompt demo as a production system', 'Ignoring evaluation, data leakage, cost, or failure recovery'],
    starterTests: ['Build a small retrieval or classification workflow with a test set', 'Compare model outputs against a baseline and document errors', 'Ask a practitioner to review the safety and evaluation plan'],
    adjacentRoles: ['Software Engineer', 'Machine Learning Engineer', 'AI Product Specialist'],
  },
  'ai-research-scientist': {
    summary: 'AI research scientists investigate new methods, evaluate claims, and turn experiments into reproducible evidence.',
    dailyWork: ['Read papers and define a precise research question', 'Design experiments, baselines, datasets, and evaluation measures', 'Analyse results, document limitations, and communicate reproducible findings'],
    foundationSkills: ['Scientific reasoning', 'Quantitative reasoning', 'Clear writing'],
    specialistSkills: ['Python and research tooling', 'Probability and statistics', 'Machine-learning methods', 'Experimental design', 'Model evaluation'],
    futureSkills: ['Foundation-model research', 'Responsible AI evaluation', 'Efficient computing and reproducibility'],
    watchOuts: ['Confusing benchmark gains with useful real-world impact', 'Underestimating maths, experimentation, compute, and documentation'],
    starterTests: ['Reproduce a small published experiment with a clear baseline', 'Write an error analysis that explains where the method fails', 'Discuss the route and study commitment with a research practitioner'],
    adjacentRoles: ['Machine Learning Engineer', 'Data Scientist', 'Research Engineer'],
  },
  'finops-specialist': {
    summary: 'FinOps specialists connect cloud usage, engineering choices, and financial accountability so teams can control cost without slowing useful delivery.',
    dailyWork: ['Measure cloud usage and allocate costs to products or teams', 'Find waste and explain the trade-offs behind optimisation choices', 'Create budgets, forecasts, guardrails, and shared review habits'],
    foundationSkills: ['Numeracy', 'Clear communication', 'Commercial awareness'],
    specialistSkills: ['Cloud cost analysis', 'Financial modelling', 'Usage and allocation data', 'Engineering trade-off analysis', 'Budget and forecast reporting'],
    futureSkills: ['AI workload cost governance', 'Carbon-aware infrastructure', 'Automated policy and anomaly detection'],
    watchOuts: ['Cutting cost without understanding reliability or product impact', 'Reporting numbers without clear ownership and definitions'],
    starterTests: ['Analyse a sample cloud bill and identify three evidence-backed actions', 'Build a simple usage-to-cost dashboard with assumptions', 'Interview an engineer and finance partner about one cost trade-off'],
    adjacentRoles: ['Cloud Engineer', 'Financial Analyst', 'Technology Business Analyst'],
  },
  'climate-risk-analyst': {
    summary: 'Climate risk analysts translate physical and transition risks into decisions for finance, infrastructure, and operations.',
    dailyWork: ['Collect climate, asset, policy, and financial evidence', 'Model scenarios and explain uncertainty rather than presenting false precision', 'Write recommendations for resilience, investment, disclosure, or risk controls'],
    foundationSkills: ['Scientific reasoning', 'Quantitative reasoning', 'Clear writing'],
    specialistSkills: ['Climate-risk frameworks', 'Scenario analysis', 'Data interpretation', 'Geospatial or asset analysis', 'Risk and disclosure reporting'],
    futureSkills: ['Physical-risk modelling', 'Transition-risk strategy', 'Climate data tooling and responsible AI'],
    watchOuts: ['Treating a long-range scenario as a precise forecast', 'Ignoring local context, adaptation limits, and decision uncertainty'],
    starterTests: ['Compare two climate scenarios for one asset or sector', 'Write a short risk brief with sources and uncertainty', 'Ask a practitioner to critique the decision relevance of the analysis'],
    adjacentRoles: ['Sustainability Reporting Analyst', 'Environmental Scientist', 'Risk Analyst'],
  },
  'data-analyst': {
    summary: 'Data analysts turn messy operational data into reliable findings that help people make decisions.',
    dailyWork: ['Clarify the decision and define useful measures', 'Clean, query, and validate data', 'Visualise findings and explain limitations'],
    specialistSkills: ['Spreadsheets and SQL', 'Data visualisation', 'Basic statistics'],
    futureSkills: ['Analytics engineering', 'AI-assisted analysis', 'Causal and experimental thinking'],
    adjacentRoles: ['Business Intelligence Analyst', 'Operations Analyst', 'Analytics Engineer'],
  },
  'ai-engineer': {
    summary: 'AI engineers turn machine-learning or generative models into reliable features, workflows, and production systems.',
    dailyWork: ['Select and evaluate models against a real task', 'Build data, retrieval, evaluation, and application pipelines', 'Monitor quality, cost, safety, and failure modes'],
    specialistSkills: ['Python and software engineering', 'Machine-learning fundamentals', 'Evaluation and data pipelines'],
    futureSkills: ['Agentic system design', 'Model governance', 'Human-in-the-loop workflows'],
    watchOuts: ['Prompt demos without engineering fundamentals', 'Ignoring evaluation, privacy, security, or operating cost'],
    adjacentRoles: ['Machine Learning Engineer', 'AI Product Specialist', 'Data Engineer'],
  },
  'cybersecurity-analyst': {
    summary: 'Cybersecurity analysts monitor risk, investigate suspicious activity, improve controls, and help organisations respond to incidents.',
    dailyWork: ['Review alerts and investigate evidence', 'Document risk and coordinate remediation', 'Test controls and improve response readiness'],
    specialistSkills: ['Networks and operating systems', 'Security operations', 'Incident analysis'],
    futureSkills: ['Cloud security', 'Identity and access security', 'AI-enabled threat detection and abuse prevention'],
    adjacentRoles: ['Security Engineer', 'Cloud Security Engineer', 'Digital Forensics Analyst'],
  },
  'product-manager': {
    summary: 'Product managers align customer problems, business priorities, design, data, and engineering around useful outcomes.',
    dailyWork: ['Research problems and define priorities', 'Coordinate decisions across functions', 'Measure outcomes and change the roadmap'],
    specialistSkills: ['Customer discovery', 'Prioritisation', 'Product analytics'],
    futureSkills: ['AI product judgement', 'Experiment design', 'Responsible technology decisions'],
    watchOuts: ['Wanting authority without delivery accountability', 'Confusing feature lists with product outcomes'],
    adjacentRoles: ['Business Analyst', 'Growth Manager', 'Product Operations Manager'],
  },
  'product-designer': {
    summary: 'Product designers research user needs and shape digital or physical experiences that are useful, understandable, and feasible.',
    dailyWork: ['Plan research and frame the user problem', 'Create flows, prototypes, and interface decisions', 'Test with users and refine with product and engineering teams'],
    specialistSkills: ['Interaction design', 'User research', 'Prototyping and visual communication'],
    futureSkills: ['AI interaction design', 'Accessibility', 'Design systems and product strategy'],
    watchOuts: ['A polished portfolio with weak problem reasoning', 'Copying visual trends without user evidence'],
    adjacentRoles: ['UX Researcher', 'Service Designer', 'Product Manager'],
  },
  'renewable-energy-engineer': {
    summary: 'Renewable energy engineers design, assess, integrate, or operate solar, wind, storage, and low-carbon energy systems.',
    dailyWork: ['Model energy performance and site constraints', 'Review equipment, grid, safety, and project economics', 'Coordinate design, installation, testing, and operation'],
    specialistSkills: ['Electrical or mechanical systems', 'Energy modelling', 'Project and safety standards'],
    futureSkills: ['Battery storage', 'Smart grids', 'Climate finance and lifecycle analysis'],
    adjacentRoles: ['Energy Analyst', 'Battery Systems Engineer', 'Sustainability Consultant'],
  },
  'clinical-psychologist': {
    summary: 'Clinical psychologists assess mental-health needs and deliver evidence-based psychological interventions within professional and ethical boundaries.',
    dailyWork: ['Conduct careful assessment', 'Plan and deliver supervised interventions', 'Document progress, risk, consent, and referrals'],
    specialistSkills: ['Psychological assessment', 'Therapeutic communication', 'Research and ethics'],
    futureSkills: ['Digital mental health', 'Outcome measurement', 'Culturally responsive practice'],
    watchOuts: ['Underestimating postgraduate training and licensing', 'Ignoring emotional load, supervision, and professional boundaries'],
    adjacentRoles: ['Counselling Psychologist', 'Behavioural Researcher', 'Mental Health Programme Manager'],
  },
  'chartered-accountant': {
    summary: 'Chartered accountants assure financial information, advise organisations, strengthen controls, and support tax, audit, reporting, or commercial decisions.',
    dailyWork: ['Review transactions, evidence, controls, and standards', 'Prepare or assure financial analysis and reporting', 'Explain risks and actions to clients or leaders'],
    specialistSkills: ['Accounting standards', 'Audit and controls', 'Tax or financial analysis'],
    futureSkills: ['Continuous audit and automation', 'Data analytics', 'Sustainability reporting'],
    watchOuts: ['Choosing only for prestige', 'Underestimating examination persistence and peak-season workloads'],
    adjacentRoles: ['FP&A Analyst', 'Forensic Accountant', 'Risk and Compliance Analyst'],
  },
  'digital-marketing-specialist': {
    summary: 'Digital marketing specialists acquire, engage, and retain audiences through measurable campaigns and customer journeys.',
    dailyWork: ['Research audiences and define an offer', 'Build and run channel experiments', 'Analyse performance and improve creative, targeting, or conversion'],
    specialistSkills: ['Campaign execution', 'Analytics and experimentation', 'Copy and creative judgement'],
    futureSkills: ['AI-assisted production', 'First-party data and privacy', 'Marketing automation'],
    watchOuts: ['Posting content without business goals', 'Relying on platform tricks instead of customer understanding'],
    adjacentRoles: ['Growth Manager', 'Content Strategist', 'CRM Specialist'],
  },
  'civil-services-officer': {
    summary: 'Civil services officers administer public programmes, interpret policy, coordinate institutions, and make accountable decisions under law and public scrutiny.',
    dailyWork: ['Review cases, evidence, policy, and public needs', 'Coordinate departments, budgets, programmes, and stakeholders', 'Document decisions and respond to changing field conditions'],
    specialistSkills: ['Public administration', 'Policy analysis', 'Clear writing and judgement'],
    futureSkills: ['Digital public infrastructure', 'Data-informed administration', 'Climate and disaster governance'],
    watchOuts: ['Using the exam as the only career plan', 'Idealising authority while ignoring administration and transfer realities'],
    adjacentRoles: ['Policy Analyst', 'Programme Manager', 'Regulatory Officer'],
  },
  'career-counsellor': {
    summary: 'Career counsellors help people understand themselves, investigate credible options, make decisions, and follow through without taking ownership away from the client.',
    dailyWork: ['Understand goals, evidence, constraints, and decision context', 'Guide structured research and real-world tests', 'Document decisions, actions, progress, and referral needs'],
    specialistSkills: ['Coaching communication', 'Career and education research', 'Ethics and safeguarding'],
    futureSkills: ['Labour-market data literacy', 'Digital coaching systems', 'Responsible use of assessment and AI tools'],
    watchOuts: ['Giving advice without adequate evidence', 'Using tests as final answers or working beyond professional competence'],
    adjacentRoles: ['School Counsellor', 'Learning and Development Facilitator', 'Student Success Manager'],
  },
  'environmental-scientist': {
    summary: 'Environmental scientists investigate environmental conditions, assess risk, and support practical decisions on pollution, ecosystems, compliance, and resilience.',
    dailyWork: ['Collect field, laboratory, or geospatial evidence', 'Analyse impacts and regulatory requirements', 'Write findings and recommend mitigation or monitoring'],
    specialistSkills: ['Field and laboratory methods', 'Statistics and GIS', 'Environmental regulation'],
    futureSkills: ['Climate-risk modelling', 'Remote sensing', 'Nature and carbon accounting'],
    adjacentRoles: ['Sustainability Analyst', 'Climate Risk Analyst', 'GIS Specialist'],
  },
  'solar-technician': {
    summary: 'Solar technicians survey, install, test, maintain, and troubleshoot photovoltaic systems safely and reliably.',
    dailyWork: ['Inspect the site and equipment', 'Install wiring, structures, panels, and protection systems', 'Test output, diagnose faults, and explain maintenance'],
    specialistSkills: ['Electrical safety', 'Solar system installation', 'Testing and fault diagnosis'],
    futureSkills: ['Battery storage', 'Smart inverters', 'Remote monitoring and energy management'],
    adjacentRoles: ['Electrical Technician', 'EV Charging Technician', 'Renewable Energy Site Supervisor'],
  },
};

function roleInterestTags(title: string) {
  const value = title.toLowerCase();
  const signals: string[] = [];
  const add = (pattern: RegExp, ...items: string[]) => { if (pattern.test(value)) signals.push(...items); };
  add(/software|developer|program|web|app|cloud|cyber|security|data|ai|llm|language model|machine learning|finops|robotics|automation|analytics|privacy|governance/, 'building or improving digital tools', 'solving logical problems', 'learning technical systems');
  add(/designer|design|creative|media|content|writer|film|fashion|artist/, 'shaping ideas into clear experiences', 'visual or story-led work', 'improving work through feedback');
  add(/health|clinical|nurse|doctor|therapy|psycholog|biology|genomic|medical|care/, 'understanding people and wellbeing', 'careful evidence and responsibility', 'patient, detailed learning');
  add(/engineer|architect|construction|mechanic|electrical|technician|energy|building|manufactur/, 'making or improving physical systems', 'measurement and practical problem solving', 'seeing how things work in the real world');
  add(/finance|account|econom|bank|audit|tax|investment|business analyst/, 'numbers, money, or business decisions', 'accuracy and structured judgement', 'explaining what evidence means');
  add(/marketing|sales|customer|product manager|operations|supply chain|entrepreneur|commercial/, 'understanding people and markets', 'organising work around an outcome', 'testing ideas and learning from response');
  add(/law|policy|government|civil|public|compliance|legal|regulat/, 'fairness, rules, and public decisions', 'reading carefully and building an argument', 'responsibility under clear standards');
  add(/teacher|education|learning|coach|counsell|social|community|human resources/, 'helping people learn or progress', 'listening and asking useful questions', 'patient, people-centred work');
  add(/environment|climate|sustain|agriculture|food|water|forest|wildlife|geospatial|science|research|laboratory/, 'curiosity about evidence and the world', 'patterns, experiments, or field observation', 'long-term impact and careful investigation');
  add(/hospitality|hotel|travel|tourism|sport|event|chef|restaurant|service/, 'active, social, or service work', 'creating a good experience for others', 'staying calm when conditions change');
  return Array.from(new Set(signals)).slice(0, 4);
}

const futureRoles = [
  ['AI Governance Specialist', 'Helps organisations set responsible AI rules, controls, documentation, and accountability.', ['AI risk assessment', 'Policy and controls', 'Technical communication'], ['Model regulation', 'Audit methods', 'Incident governance']],
  ['AI Safety and Evaluation Specialist', 'Designs tests that reveal whether AI systems are accurate, robust, safe, and suitable for real use.', ['Evaluation design', 'Statistics', 'Software testing'], ['Red teaming', 'Agent evaluation', 'Safety cases']],
  ['AI Solutions Consultant', 'Finds useful business problems for AI and turns them into governed, measurable workflows.', ['Process analysis', 'AI literacy', 'Stakeholder management'], ['Workflow automation', 'Evaluation', 'Change adoption']],
  ['Human-AI Interaction Designer', 'Designs how people understand, control, verify, and recover from AI-assisted experiences.', ['Interaction design', 'User research', 'AI literacy'], ['Explainability', 'Trust calibration', 'Accessible AI']],
  ['Analytics Engineer', 'Builds reliable, documented data models that make business analysis consistent and reusable.', ['SQL', 'Data modelling', 'Version control'], ['Metric governance', 'Data contracts', 'AI-ready data']],
  ['Privacy Engineer', 'Builds products and systems that protect personal data through design, controls, and technical implementation.', ['Data privacy', 'Software systems', 'Risk assessment'], ['Privacy automation', 'AI data governance', 'Secure computation']],
  ['Cloud Security Engineer', 'Secures cloud infrastructure, identity, data, monitoring, and deployment practices.', ['Cloud fundamentals', 'Security operations', 'Automation'], ['Zero-trust architecture', 'AI workload security', 'Policy as code']],
  ['Cyber Threat Intelligence Analyst', 'Investigates threat actors and patterns to help organisations anticipate and reduce cyber risk.', ['Research skills', 'Security fundamentals', 'Clear writing'], ['AI-assisted investigation', 'Geopolitical analysis', 'Threat modelling']],
  ['Digital Forensics Analyst', 'Preserves and analyses digital evidence for incidents, investigations, and legal processes.', ['Operating systems', 'Evidence handling', 'Attention to detail'], ['Cloud forensics', 'Mobile forensics', 'Synthetic-media verification']],
  ['Battery Systems Engineer', 'Designs, tests, integrates, and improves battery packs and energy-storage systems.', ['Electrical systems', 'Thermal and safety analysis', 'Testing'], ['Battery management systems', 'Lifecycle analytics', 'Recycling design']],
  ['EV Infrastructure Specialist', 'Plans and delivers electric-vehicle charging systems across homes, fleets, workplaces, and public networks.', ['Electrical fundamentals', 'Site planning', 'Project coordination'], ['Smart charging', 'Grid integration', 'Fleet energy management']],
  ['Climate Risk Analyst', 'Translates physical and transition climate risks into decisions for finance, infrastructure, and operations.', ['Climate science literacy', 'Data analysis', 'Scenario planning'], ['Geospatial modelling', 'Climate disclosure', 'Adaptation economics']],
  ['Carbon Accounting Specialist', 'Measures organisational emissions and supports credible reduction plans and reporting.', ['Accounting logic', 'Data quality', 'Sustainability standards'], ['Value-chain emissions', 'Assurance', 'Carbon software']],
  ['Circular Economy Specialist', 'Redesigns products and operations to reduce waste and keep materials in productive use.', ['Systems thinking', 'Lifecycle analysis', 'Operations'], ['Material traceability', 'Repair models', 'Circular business design']],
  ['Sustainable Supply Chain Analyst', 'Improves supplier, logistics, cost, risk, labour, and environmental performance across value chains.', ['Supply chain planning', 'Data analysis', 'Supplier communication'], ['Traceability', 'Climate risk', 'Responsible sourcing']],
  ['Water Resilience Planner', 'Plans systems and policies that improve water security, flood resilience, reuse, and equitable access.', ['Hydrology literacy', 'GIS', 'Stakeholder planning'], ['Climate adaptation', 'Nature-based solutions', 'Digital monitoring']],
  ['Computational Biologist', 'Uses coding, statistics, and biological knowledge to investigate complex life-science questions.', ['Biology', 'Python or R', 'Statistics'], ['Multi-omics analysis', 'AI for biology', 'Reproducible research']],
  ['Genomics Data Analyst', 'Processes and interprets genomic data for research, diagnostics, or public health.', ['Genetics', 'Data analysis', 'Scientific documentation'], ['Clinical genomics', 'Privacy-aware analysis', 'Population genomics']],
  ['Digital Health Product Specialist', 'Connects clinical needs, patient experience, regulation, data, and product delivery.', ['Healthcare systems', 'Product thinking', 'User research'], ['Interoperability', 'Remote care', 'Clinical AI governance']],
  ['Clinical Data Manager', 'Keeps clinical-study data accurate, complete, traceable, and ready for analysis and regulation.', ['Data quality', 'Clinical research', 'Documentation'], ['Electronic data capture', 'Automation oversight', 'Risk-based quality']],
  ['Assistive Technology Specialist', 'Selects, adapts, and evaluates technology that improves access and independence for people with disabilities.', ['Accessibility', 'Human-centred design', 'Care communication'], ['Adaptive interfaces', 'Inclusive AI', 'Connected assistive devices']],
  ['Geospatial Data Scientist', 'Uses maps, satellite data, sensors, and spatial models to answer location-based questions.', ['GIS', 'Data analysis', 'Remote sensing'], ['Earth observation AI', 'Digital twins', 'Climate intelligence']],
  ['Digital Twin Specialist', 'Builds data-connected virtual models of physical assets, factories, buildings, or cities.', ['3D modelling', 'Sensors and data', 'Systems thinking'], ['Simulation', 'Predictive maintenance', 'Spatial computing']],
  ['Smart Mobility Planner', 'Designs safer and more efficient transport systems using planning, behaviour, infrastructure, and data.', ['Transport planning', 'GIS', 'Public policy'], ['Mobility analytics', 'EV integration', 'Autonomous-system planning']],
  ['Building Performance Analyst', 'Measures and improves energy, comfort, carbon, and operating performance in buildings.', ['Building science', 'Energy modelling', 'Data analysis'], ['Smart-building controls', 'Retrofit planning', 'Embodied carbon']],
  ['Learning Experience Designer', 'Designs practical learning journeys that help people build and demonstrate capability.', ['Instructional design', 'Facilitation', 'Content design'], ['Adaptive learning', 'Learning analytics', 'AI-supported practice']],
  ['Behavioural Insights Analyst', 'Uses behavioural science and experiments to improve products, policy, services, or communication.', ['Research design', 'Statistics', 'Ethics'], ['Digital experimentation', 'Causal inference', 'Responsible personalisation']],
  ['Creator Business Manager', 'Builds the operating, commercial, audience, and partnership systems behind a creator-led business.', ['Commercial awareness', 'Content operations', 'Negotiation'], ['Audience analytics', 'Rights and licensing', 'AI production governance']],
  ['Robotics Integration Engineer', 'Combines mechanical, electrical, software, safety, and process knowledge to deploy robots in real operations.', ['Mechatronics', 'Programming', 'Systems integration'], ['Collaborative robotics', 'Machine vision', 'Simulation']],
  ['Automation Technician', 'Installs, configures, maintains, and diagnoses automated industrial equipment and controls.', ['Electrical safety', 'PLC fundamentals', 'Fault diagnosis'], ['Industrial networks', 'Robotics maintenance', 'Predictive monitoring']],
] as const;

const futureFamily = familyGuides['Future-ready & Cross-functional'];
const futureCareerPresets: CareerPreset[] = futureRoles.map(([title, _summary, specialistSkills, _futureSkills]) => ({
  key: slug(title), title, category: 'Future-ready & Cross-functional', featured: true,
  routeSummary: futureFamily.entryRoutes.join(' / '),
  entryRequirements: `Build one strong foundation discipline, then demonstrate ${specialistSkills.join(', ').toLowerCase()} through applied work.`,
  workEnvironment: 'Cross-functional product, research, consulting, operations, public-sector, or specialist teams.',
  nextStep: `Complete a small ${title.toLowerCase()} work sample and review ten current role descriptions.`,
  tags: `${title} future emerging ai climate health data green technology`.toLowerCase().split(/\s+/),
}));

const futureRoleDetails = new Map(futureRoles.map(([title, summary, specialistSkills, futureSkills]) => [slug(title), { summary, specialistSkills: [...specialistSkills], futureSkills: [...futureSkills] }]));

// The career compass contains the broad catalogue used elsewhere in the
// school. Bring those same, fully described roles into the coaching planner so
// students are not limited to a short hand-picked list. Each role keeps its
// own work description, interests, routes, proof ideas, and skills while the
// family key supplies the shared comparison guidance.
function compassFamily(cluster: string, title: string) {
  const value = `${cluster} ${title}`.toLowerCase();
  if (/health|life|medical|clinical|biology|genomic|care|nurs|doctor|therapy/.test(value)) return 'Health & Life Sciences';
  if (/engineer|built|construction|architect|mechanic|electrical|energy|technician|manufactur/.test(value)) return 'Engineering & Built Environment';
  if (/finance|commerce|account|economic|bank|investment|audit|tax|actuar/.test(value)) return 'Commerce, Finance & Economics';
  if (/marketing|business|operations|sales|product|supply|logistic|customer|entrepreneur/.test(value)) return 'Business, Marketing & Operations';
  if (/design|media|creative|artist|writer|film|fashion|content|photograph/.test(value)) return 'Design, Media & Creative Arts';
  if (/law|government|public|policy|legal|civil|police|defence|regulat/.test(value)) return 'Law, Government & Public Service';
  if (/education|teacher|learning|coach|counsell|social|community|human resource/.test(value)) return 'Education, Psychology & Social Impact';
  if (/environment|climate|agri|farm|food|forest|wildlife|water|science|research|marine/.test(value)) return 'Science, Research & Environment';
  if (/hospitality|hotel|travel|tour|sport|event|chef|restaurant|service/.test(value)) return 'Hospitality, Travel, Sports & Events';
  return 'Technology & Data';
}

const compassInterestLabels: Record<string, string> = {
  build: 'building or improving things', analyse: 'analysing evidence and patterns', create: 'creating clear experiences or ideas',
  help: 'helping people or communities', influence: 'persuading, teaching, or shaping decisions', organise: 'organising people, information, or delivery',
};
const compassValueLabels: Record<string, string> = {
  income: 'earning potential', stability: 'stability', impact: 'social or environmental impact', autonomy: 'independence', mastery: 'deep expertise', creativity: 'creative freedom', flexibility: 'flexible work', leadership: 'leading others',
};
const compassModeLabels: Record<string, string> = {
  people: 'regular work with people', independent: 'focused independent work', structured: 'clear processes and standards', ambiguous: 'open-ended problem solving', desk: 'screen or desk-based work', active: 'active or hands-on work', remote: 'work that may be done remotely', field: 'work in changing real-world settings',
};
const compassCareerPresets: CareerPreset[] = [...careerRoles, ...futureCareerRoles].map((role) => ({
  key: `compass-${role.id}`,
  title: role.title,
  category: compassFamily(role.cluster, role.title),
  featured: false,
  routeSummary: role.summary,
  entryRequirements: role.entry,
  workEnvironment: `${role.does} ${role.modes.map((mode) => compassModeLabels[mode] || mode).slice(0, 3).join(', ')}.`,
  nextStep: `Try a small ${role.title.toLowerCase()} task, then review the result against the evidence this route expects.`,
  tags: Array.from(new Set([
    role.cluster, ...role.interests.map((item) => compassInterestLabels[item] || item),
    ...role.values.map((item) => compassValueLabels[item] || item), ...role.modes.map((item) => compassModeLabels[item] || item),
    ...role.skills.roleSpecific, ...role.skills.transferable, ...role.skills.aiDigital,
  ])).map((item) => item.toLowerCase()),
}));

/**
 * Add a small role-specific layer on top of the family guidance. The catalogue
 * is intentionally broad, so this keeps two roles in the same family from
 * looking interchangeable while still avoiding a brittle 500-row hand list.
 */
function roleSkillSignals(title: string) {
  const value = title.toLowerCase();
  const signals: string[] = [];
  const add = (...items: string[]) => signals.push(...items);
  if (/developer|programmer|software|web|mobile|blockchain|ar\/vr|devops|sre|database|network|systems administrator|cloud/.test(value)) add('Programming logic', 'Software testing', 'Version control with Git');
  if (/data|analyst|statistic|economist|research|intelligence|actuary|operations research|market research/.test(value)) add('Data interpretation', 'Spreadsheet fundamentals', 'Source evaluation');
  if (/designer|artist|illustrator|animator|photograph|filmmaker|cinematographer|editor|creative|fashion|interior|architect/.test(value)) add('Visual design', 'Design thinking', 'Portfolio curation');
  if (/engineer|technician|machinist|welder|electrician|plumber|hvac|construction|survey|mechanic|fabrication/.test(value)) add('Measurement and testing', 'Safety awareness', 'Technical communication');
  if (/doctor|dentist|nurse|therap|psychologist|pharmac|clinical|medical|health|veter|optomet|audiolog|dietitian|nutrition|emergency/.test(value)) add('Professional ethics', 'Accurate documentation', 'Active listening');
  if (/teacher|education|lecturer|professor|trainer|facilitator|counsellor|social worker|community|youth|learning/.test(value)) add('Facilitation', 'Active listening', 'Clear writing');
  if (/manager|consultant|business|marketing|sales|account|customer|commerce|finance|bank|investment|procurement|supply|logistics|operations|entrepreneur/.test(value)) add('Planning and prioritisation', 'Commercial awareness', 'Stakeholder management');
  if (/lawyer|legal|policy|civil service|government|police|defence|diplomat|compliance|regulatory|tax|election/.test(value)) add('Legal research', 'Clear writing', 'Ethical judgement');
  if (/chef|hotel|travel|tour|airline|airport|event|sport|fitness|hospitality|restaurant|guest/.test(value)) add('Customer understanding', 'Reliable execution', 'Teamwork');
  if (/agri|farm|food|forest|wildlife|marine|aquaculture|soil|horticulture|conservation|climate|environment|water/.test(value)) add('Sustainability awareness', 'Field observation', 'Scientific measurement');
  return Array.from(new Set(signals));
}

function roleWorkSignals(title: string) {
  const value = title.toLowerCase();
  if (/developer|programmer|software|web|mobile|blockchain|devops|sre|database|network|systems administrator|cloud|llm|language model|machine learning|ai engineer|prompt engineer|finops|analytics|privacy|governance/.test(value)) {
    return ['Translate a real need into a small, reliable digital solution', 'Build, test, document, and improve the solution with feedback', 'Work with users or colleagues to diagnose issues and decide what to change next'];
  }
  if (/data|analyst|statistic|economist|actuary|intelligence|research|analytics|privacy|governance/.test(value)) {
    return ['Collect, clean, and check information from trustworthy sources', 'Analyse patterns and explain what the evidence does and does not show', 'Turn findings into a clear recommendation, report, or decision support'];
  }
  if (/designer|artist|illustrator|animator|photograph|filmmaker|editor|creative|fashion|interior/.test(value)) {
    return ['Understand the audience, brief, or problem before making a first concept', 'Create, test, and refine visual or written work through feedback', 'Prepare final work to the quality, format, and accessibility standard required'];
  }
  if (/engineer|technician|machinist|welder|electrician|plumber|hvac|construction|survey|mechanic|fabrication/.test(value)) {
    return ['Read the requirements, inspect the situation, and plan the work safely', 'Measure, install, repair, or test against technical standards', 'Record results, explain the work, and resolve faults or improvements'];
  }
  if (/doctor|dentist|nurse|therap|psychologist|pharmac|clinical|medical|health|veter|optomet|audiolog|dietitian|nutrition|emergency/.test(value)) {
    return ['Listen carefully, gather relevant information, and protect confidentiality', 'Apply evidence, professional standards, and safe procedures to the situation', 'Record decisions and explain practical next steps to the person or team'];
  }
  if (/teacher|education|lecturer|professor|trainer|facilitator|counsellor|social worker|community|youth|learning/.test(value)) {
    return ['Understand the learner or community need and plan an appropriate activity', 'Facilitate, explain, or support progress while adapting to feedback', 'Record outcomes and agree the next useful step with the people involved'];
  }
  if (/manager|consultant|business|marketing|sales|account|customer|commerce|finance|bank|investment|procurement|supply|logistics|operations|entrepreneur/.test(value)) {
    return ['Clarify the customer, commercial, or operational problem and gather evidence', 'Coordinate people or resources, make a recommendation, and deliver the agreed work', 'Review results against useful measures and improve the next decision'];
  }
  if (/lawyer|legal|policy|civil service|government|police|defence|diplomat|compliance|regulatory|tax|election/.test(value)) {
    return ['Read the relevant evidence, rules, or policy and identify the key issue', 'Weigh competing needs and prepare a clear, defensible response', 'Document the decision and communicate responsibilities or next steps'];
  }
  if (/chef|hotel|travel|tour|airline|airport|event|sport|fitness|hospitality|restaurant|guest/.test(value)) {
    return ['Prepare the service, activity, or event around the customer or participant need', 'Coordinate timing, people, and quality while responding calmly to changes', 'Gather feedback, resolve issues, and improve the next experience'];
  }
  if (/agri|farm|food|forest|wildlife|marine|aquaculture|soil|horticulture|conservation|climate|environment|water/.test(value)) {
    return ['Observe conditions, collect reliable measurements, and plan practical work', 'Manage resources or interventions safely with environmental and quality standards in mind', 'Record outcomes and recommend an improvement for the next cycle'];
  }
  return [`Understand the real work involved in ${title}`, 'Complete a small, supervised task and review the result against a clear standard', 'Document what worked, what needs improving, and what to try next'];
}

function careerProgressionFor(title: string, dailyWork: string[], starterTests: string[], evidenceExamples: string[]): CareerLevelGuidance[] {
  const work = dailyWork.length ? dailyWork : roleWorkSignals(title);
  const test = starterTests[0] || `Complete a small realistic ${title.toLowerCase()} task`;
  const evidence = evidenceExamples[0] || 'A dated work sample with a short reflection and feedback';
  return [
    {
      level: 'Starter',
      example: `${test}. Keep a short note of what you tried and what needed support.`,
      advice: `Begin with the first routine step: ${work[0] || `understand the real work involved in ${title}`}. Ask for a clear standard before you start.`,
    },
    {
      level: 'Working',
      example: `${work.slice(0, 2).join(' Then ')}. Save ${evidence.toLowerCase()}.`,
      advice: 'Repeat the work in a realistic setting, explain your decisions, and use specific feedback to improve the next attempt.',
    },
    {
      level: 'Advanced',
      example: `${work.join(' Then ')}. Improve the process and leave evidence another person could review or reuse.`,
      advice: 'Handle ambiguity, constraints, and trade-offs; help others succeed and review whether the result created the intended value.',
    },
  ];
}

function buildCareerGuide(preset: CareerPreset): CareerGuide {
  const family = familyGuides[preset.category] ?? futureFamily;
  const lens = careerFitLens[preset.category] ?? careerFitLens['Future-ready & Cross-functional'];
  const future = futureRoleDetails.get(preset.key);
  // Duplicated job titles can legitimately sit in different career families
  // (for example, a research role in health and in science). Preserve the
  // family-specific record while still allowing the original title override
  // to enrich both variants.
  const override = roleOverrides[preset.key] ?? roleOverrides[slug(preset.title)] ?? {};
const roleSkills = roleSkillSignals(preset.title);
  const title = preset.title.toLowerCase();
  const isGovernment = /civil service|government|public service|police|defence|diplomat|election|military|ias|ips|ifs\b/.test(title) || /Law, Government/.test(preset.category);
  const isIndependentFriendly = /software|developer|data|designer|writer|marketing|consult|account|finance|lawyer|legal|teacher|trainer|therap|architect|photograph|chef|electrician|plumber|mechanic|engineer|analyst|translator|coach|nutrition|beauty|business|entrepreneur/.test(title);
  const localContext = isGovernment
    ? 'Public-service routes are established, but selection is highly competitive and usually exam-led.'
    : ({
      'Technology & Data': 'Demand spans software, product, finance, and digital businesses; proof of work matters.',
      'Engineering & Built Environment': 'Infrastructure, manufacturing, energy, and construction create practical routes; location and accreditation matter.',
      'Health & Life Sciences': 'Demand spans hospitals, diagnostics, pharma, public health, and health technology; regulated routes require verified training.',
      'Commerce, Finance & Economics': 'Banks, fintech, businesses, and advisory firms need analysis and judgement; qualifications and ethics affect progression.',
      'Business, Marketing & Operations': 'Every growing organisation needs customer insight, sales, operations, and delivery; results and communication travel well.',
      'Design, Media & Creative Arts': 'Digital products, brands, media, and independent clients create routes; a focused portfolio is more useful than a broad title.',
      'Education, Psychology & Social Impact': 'Schools, employers, communities, and support services need skilled practitioners; qualifications and supervised experience matter.',
      'Science, Research & Environment': 'Applied work is growing across climate, food, materials, health, and data; compare research and industry routes carefully.',
      'Agriculture, Food & Rural Careers': 'Food systems, agritech, processing, and rural enterprises offer routes beyond traditional farming; local networks matter.',
      'Skilled Trades & Applied Careers': 'Electrification, construction, maintenance, and manufacturing need reliable technicians; experience can lead to contracting or a small business.',
      'Hospitality, Travel, Sports & Events': 'Service, travel, wellness, and events offer varied routes; schedules and location strongly affect earnings.',
    } as Record<string, string>)[preset.category] ?? 'Opportunities differ by city, sector, and employer; speak with a practitioner and check current local roles.';
  const competitionNote = isGovernment
    ? 'Highly competitive selection. Keep a parallel route while you build evidence and review your progress.'
    : /doctor|dentist|lawyer|architect|pilot|chartered|psychologist/.test(title)
      ? 'Entry can be competitive or regulated. Check exams, licensing, training cost, and a realistic fallback route.'
      : 'Competition is real, but a clear portfolio, practical evidence, and relevant experience can improve your options.';
  const independencePath = isGovernment
    ? 'Usually employer or public-service based; independent consulting is not the main route.'
    : isIndependentFriendly
      ? 'With experience and a trusted track record, this can lead to consulting, freelance work, private practice, contracting, or a business.'
      : 'Independent work may be possible later through specialist expertise, partnerships, or a small service business.';
  const workSetting = /field|site|farm|construction|electrician|plumber|mechanic|technician|chef|athlete|trainer|emergency/.test(title)
    ? 'Often practical, site-based, or tool-led, with safety checks and team handovers.'
    : /clinical|nurse|doctor|dentist|pharmac|therap|laboratory|biolog|healthcare/.test(title)
      ? 'Often combines careful records, specialist settings, and direct responsibility for people or samples.'
      : /software|developer|data|cloud|cyber|digital|designer|writer|analyst|account|finance|policy|research/.test(title)
        ? 'Often combines focused digital or analytical work with written communication and regular review.'
        : /sales|marketing|customer|human resource|teacher|counsell|social|manager|consult/.test(title)
          ? 'Often people-facing, with conversations, coordination, and visible responsibility for outcomes.'
          : 'The setting varies by employer; speak with someone doing the work before choosing.';
  const regulated = /doctor|dentist|nurse|pharmac|clinical|psychologist|lawyer|legal|architect|pilot|air traffic|teacher|police|defence|chartered|accountant|electrician|plumber|hvac|medical|therap/.test(title);
  const entryLevel = /assistant|trainee|junior|support|technician|coordinator|operator/.test(title)
    ? 'Often accessible through an entry, trainee, apprenticeship, or supervised route.'
    : regulated
      ? 'Usually requires verified study, registration, licensing, or supervised practice.'
      : /software|developer|data|designer|writer|marketing|sales|consult|analyst/.test(title)
        ? 'A degree, diploma, or portfolio route may work; practical evidence strengthens entry.'
        : 'Usually starts with a strong foundation plus applied evidence.';
  const routeLength = /doctor|surgeon|dentist|nurse|pharmac|psychologist|lawyer|chartered|architect|pilot/.test(title)
    ? 'Plan for a longer regulated or competitive route.'
    : /technician|operator|assistant|support|coordinator|trades/.test(title)
      ? 'A shorter vocational, apprenticeship, or supervised route may be available.'
      : /engineer|scientist|analyst|designer|developer|manager/.test(title)
        ? 'A degree, diploma, or portfolio route may work depending on the employer and specialism.'
        : 'Route length varies; compare a direct entry and study route.';
  const dayPace = /hospitality|event|sales|emergency|service|sport|travel|retail|front office/.test(title)
    ? 'Often fast-moving, people-facing, and shaped by peaks in demand.'
    : /clinical|nurse|doctor|care|laboratory|research|account|data|developer|designer|writer/.test(title)
      ? 'Often includes sustained focused work, careful checking, and regular documentation.'
      : /field|site|farm|construction|technician|maintenance|mechanic/.test(title)
        ? 'Often varies by site, weather, equipment condition, and the urgency of the job.'
        : 'Pace depends on the workplace, season, and responsibility level.';
  const foundationSkills = override.foundationSkills ?? family.foundationSkills;
  const portableSkills = Array.from(new Set([...foundationSkills, ...family.futureSkills])).slice(0, 4);
  const specialistSkills = Array.from(new Set([...(override.specialistSkills ?? future?.specialistSkills ?? family.specialistSkills), ...roleSkills])).slice(0, 6);
  const futureSkills = Array.from(new Set([...(override.futureSkills ?? future?.futureSkills ?? family.futureSkills), ...(roleSkills.length ? ['AI tool literacy', 'Data privacy'] : [])])).slice(0, 5);
  const questionsToAsk = [
    `What does a normal week look like for a ${preset.title}?`,
    `Which entry route is realistic from my current stage?`,
    `What small work sample would let me test this career option?`,
  ];
  const careerGroup: CareerGuide['careerGroup'] = /doctor|dentist|nurse|therap|psycholog|teacher|counsell|care|health|social worker|nutrition|pharmac/.test(title) ? 'Healers' : /writer|journal|marketing|sales|public relation|teacher|coach|trainer|translator|diplomat|lawyer|content|media/.test(title) ? 'Communicators' : /designer|artist|creative|fashion|photograph|filmmaker|chef|architect|craft|maker/.test(title) ? 'Makers' : /analyst|scientist|research|account|finance|economist|auditor|data|risk|policy|planner/.test(title) ? 'Analysers' : 'Builders';
  const evidenceExamples = /data|analyst|research|scientist|finance|account|business|marketing|operations/.test(title)
    ? ['A short analysis or decision brief', 'A source log showing assumptions and checks']
    : /design|writer|media|content|creative|photograph|film/.test(title)
      ? ['A portfolio piece with a brief and revision notes', 'A published explanation or audience feedback']
      : /technician|engineer|trades|chef|farm|clinical|health|care/.test(title)
        ? ['A supervised practical demonstration', 'A dated record of quality or safety checks']
        : ['A completed role-relevant project or work sample', 'A short reflection with feedback and next improvement'];
  const dailyWork = override.dailyWork ?? roleWorkSignals(preset.title);
  const progression = careerProgressionFor(preset.title, dailyWork, override.starterTests ?? family.starterTests, evidenceExamples);
  const evidenceMatch = futureEvidence.find((item) => {
    const source = `${item.label} ${item.source}`.toLowerCase();
    return (preset.category.includes('Agriculture') && /farm|food|rural|agri/.test(source))
      || (preset.category.includes('Health') && /health|care|nurse|healthcare/.test(source))
      || ((preset.category.includes('Technology') || /software|developer|programmer|cloud|cyber|security|data|analytics|privacy|llm|language model|machine learning|ai|finops|governance/.test(title)) && /ai|digital|developer|technology/.test(source))
      || (preset.category.includes('Engineering') && /engineering|energy|construction|technician/.test(source));
  }) ?? futureEvidence.find((item) => /skills-first labour market/i.test(item.label)) ?? futureEvidence[0];
  return {
    ...preset,
    summary: override.summary ?? future?.summary ?? `${preset.title} ${family.purpose}.`,
    outlook: override.outlook ?? family.outlook,
    outlookDetail: override.outlookDetail ?? family.outlookDetail,
    dailyWork,
    entryRoutes: override.entryRoutes ?? family.entryRoutes,
     foundationSkills,
    specialistSkills,
    futureSkills,
    workStyles: override.workStyles ?? family.workStyles,
    watchOuts: override.watchOuts ?? family.watchOuts,
    starterTests: override.starterTests ?? family.starterTests,
    adjacentRoles: override.adjacentRoles ?? family.adjacentRoles,
    interestTags: Array.from(new Set([...roleInterestTags(preset.title), ...lens.interestTags])).slice(0, 6),
    subjectRoutes: lens.subjectRoutes,
    suitableStages: lens.suitableStages,
    earningContext: lens.earningContext,
    marketSignal: lens.marketSignal,
    marketEvidence: { date: evidenceMatch.date, source: evidenceMatch.source, url: evidenceMatch.url },
    localContext,
    competitionNote,
    independencePath,
    workSetting,
    entryLevel,
    routeLength,
    dayPace,
    portableSkills,
    questionsToAsk,
    evidenceExamples,
    progression,
    regulated,
    careerGroup,
    tags: Array.from(new Set([
      ...preset.tags,
       ...roleInterestTags(preset.title),
       ...foundationSkills,
       ...roleSkillSignals(preset.title),
      ...specialistSkills,
      ...futureSkills,
      ...family.specialistSkills,
      family.outlook,
      ...family.futureSkills,
    ])).map((value) => value.toLowerCase()),
  };
}

// The school catalogue also needs useful routes for learners whose interests do
// not fit a short list of headline job titles. These cross-industry variants
// are deliberately generated from real role families: each remains searchable,
// selectable, and receives the same work, interest, route, and skill guidance
// as the hand-authored entries below.
const catalogueContexts = ['Healthcare', 'Finance and banking', 'Education and learning', 'Public services', 'Retail and consumer', 'Climate and energy'];
const expandedCatalogueGroups: Array<{ category: string; roles: string[] }> = [
  { category: 'Technology & Data', roles: ['Application Developer', 'Data Quality Analyst', 'Cloud Support Engineer', 'Network Technician', 'Database Administrator', 'Systems Analyst', 'QA Test Analyst', 'UX Researcher', 'Technical Support Specialist', 'Information Security Coordinator', 'Automation Analyst', 'Business Intelligence Developer'] },
  { category: 'Engineering & Built Environment', roles: ['Civil Engineering Technician', 'Building Services Engineer', 'Electrical Design Technician', 'Mechanical Design Technician', 'Surveying Technician', 'Quantity Surveyor', 'Site Safety Coordinator', 'Transport Planner', 'Water Systems Engineer', 'Manufacturing Process Technician', 'CAD Technician', 'Maintenance Planner'] },
  { category: 'Health & Life Sciences', roles: ['Medical Laboratory Technician', 'Clinical Research Coordinator', 'Health Information Officer', 'Public Health Officer', 'Pharmacy Technician', 'Radiography Assistant', 'Nutrition Advisor', 'Occupational Therapy Assistant', 'Care Coordinator', 'Biomedical Research Assistant', 'Patient Services Manager', 'Health and Safety Officer'] },
  { category: 'Commerce, Finance & Economics', roles: ['Accounts Assistant', 'Payroll Specialist', 'Credit Analyst', 'Treasury Analyst', 'Tax Associate', 'Procurement Analyst', 'Financial Planning Associate', 'Risk and Controls Analyst', 'Investment Operations Associate', 'Economic Research Assistant', 'Insurance Underwriter', 'Credit Operations Officer'] },
  { category: 'Business, Marketing & Operations', roles: ['Operations Coordinator', 'Customer Success Specialist', 'Sales Operations Analyst', 'Supply Chain Planner', 'Retail Operations Manager', 'People Operations Coordinator', 'Market Research Executive', 'Partnerships Executive', 'Service Delivery Manager', 'Quality Improvement Coordinator', 'Small Business Adviser', 'Community Enterprise Manager'] },
  { category: 'Design, Media & Creative Arts', roles: ['Content Designer', 'Motion Graphics Artist', 'Illustration Artist', 'Editorial Producer', 'Podcast Producer', 'Photography Assistant', 'Fashion Product Coordinator', 'Interior Design Assistant', 'Exhibition Designer', 'Copy Editor', 'Brand Production Coordinator', 'Digital Storyteller'] },
  { category: 'Law, Government & Public Service', roles: ['Legal Operations Assistant', 'Policy Research Officer', 'Court Services Officer', 'Public Administration Officer', 'Regulatory Affairs Assistant', 'Compliance Coordinator', 'Community Safety Officer', 'Human Rights Programme Officer', 'Diplomatic Services Assistant', 'Election Operations Officer', 'Public Procurement Officer', 'Records and Information Officer'] },
  { category: 'Education, Psychology & Social Impact', roles: ['Learning Support Assistant', 'Instructional Design Assistant', 'Youth Programme Coordinator', 'Social Research Assistant', 'Wellbeing Programme Coordinator', 'Community Outreach Officer', 'Career Services Coordinator', 'Training Operations Assistant', 'Accessibility Coordinator', 'Volunteer Programme Manager', 'Family Support Worker', 'Learning Content Editor'] },
  { category: 'Science, Research & Environment', roles: ['Laboratory Assistant', 'Environmental Monitoring Officer', 'Geospatial Technician', 'Climate Data Assistant', 'Climate Risk Analyst', 'Food Science Technician', 'Water Quality Technician', 'Ecology Field Assistant', 'Research Operations Coordinator', 'Sustainability Reporting Analyst', 'Conservation Project Officer', 'Scientific Communications Assistant', 'Renewable Energy Analyst'] },
  { category: 'Hospitality, Travel, Sports & Events', roles: ['Guest Experience Coordinator', 'Travel Operations Executive', 'Event Production Assistant', 'Sports Programme Coordinator', 'Fitness Programme Assistant', 'Food Service Manager', 'Venue Operations Coordinator', 'Reservations Specialist', 'Tour Guide', 'Airline Ground Operations Officer', 'Leisure Centre Manager', 'Culinary Production Assistant'] },
  { category: 'Agriculture, Food & Rural Careers', roles: ['Farm Operations Coordinator', 'Horticulture Technician', 'Food Supply Coordinator', 'Agricultural Extension Officer', 'Soil Testing Technician', 'Livestock Care Assistant', 'Agri-Input Sales Adviser', 'Rural Enterprise Coordinator', 'Food Quality Inspector', 'Post-Harvest Operations Officer', 'Fisheries Field Assistant', 'Urban Farming Coordinator'] },
  { category: 'Skilled Trades & Applied Careers', roles: ['Electrical Installation Technician', 'Plumbing Technician', 'Automotive Service Technician', 'Welding Technician', 'CNC Machine Operator', 'Solar Installation Technician', 'HVAC Service Technician', 'Carpentry Technician', 'Masonry Technician', 'Lift and Escalator Technician', 'Equipment Repair Technician', 'Industrial Instrumentation Technician'] },
];
const expandedCataloguePresets: CareerPreset[] = expandedCatalogueGroups.flatMap((group) => group.roles.flatMap((role) => catalogueContexts.map((context) => ({
  key: `catalogue-${slug(role)}-${slug(context)}`,
  title: `${role} — ${context}`,
  category: group.category,
  featured: false,
  routeSummary: `A ${role.toLowerCase()} route focused on real work in ${context.toLowerCase()}.`,
  entryRequirements: 'Build the relevant subject foundation, complete a recognised course or supervised route, and collect practical evidence.',
  workEnvironment: `Work with colleagues, tools, information, and clear quality standards in ${context.toLowerCase()}.`,
  nextStep: `Speak with someone doing ${role.toLowerCase()} work in ${context.toLowerCase()}, then try one small task.`,
  tags: [group.category, role, context, 'career exploration'].map((item) => item.toLowerCase()),
}))));

// Keep every catalogue entry. A title may appear in more than one family and
// must remain selectable as a distinct route with its own category and skills.
// Make only the key unique so saved directions stay traceable to one entry.
const usedCareerKeys = new Set<string>();
export const guidedCareerPresets = [...careerPresets, ...futureCareerPresets, ...compassCareerPresets, ...expandedCataloguePresets].map((preset) => {
  const baseKey = preset.key;
  let key = baseKey;
  if (usedCareerKeys.has(key)) {
    key = `${baseKey}-${slug(preset.category)}`;
    let suffix = 2;
    while (usedCareerKeys.has(key)) key = `${baseKey}-${slug(preset.category)}-${suffix++}`;
  }
  usedCareerKeys.add(key);
  return buildCareerGuide({ ...preset, key });
});
export const guidedCareerCategories = Array.from(new Set(guidedCareerPresets.map((preset) => preset.category)));
export function careerGuideFor(key: unknown) {
  return guidedCareerPresets.find((preset) => preset.key === key) ?? null;
}

export const decisionSignalOptions = [
  { value: 'ready-to-pursue', label: 'Ready to pursue', description: 'Enough evidence to commit serious effort now.', status: 'selected' },
  { value: 'promising-to-test', label: 'Promising, test next', description: 'Worth a real-world test before committing.', status: 'testing' },
  { value: 'deliberate-alternative', label: 'Keep as an alternative', description: 'A credible route kept alive for a clear reason.', status: 'shortlisted' },
  { value: 'needs-evidence', label: 'Needs more evidence', description: 'Interesting, but current evidence is too thin.', status: 'exploring' },
  { value: 'not-now', label: 'Not right now', description: 'Paused or ruled out with a reason and review condition.', status: 'paused' },
] as const;

export const evidenceStrengthOptions = [
  { value: 'none', label: 'No real evidence yet' },
  { value: 'early', label: 'Early signal' },
  { value: 'moderate', label: 'Several useful tests' },
  { value: 'strong', label: 'Strong real-world proof' },
] as const;

export type SkillScope = 'foundation' | 'career-specific' | 'future-ready' | 'employability' | 'personal-effectiveness';

export type SkillPlanItem = SkillPreset & {
  scope: SkillScope;
  practiceMethod: string;
  successCriteria: string;
};

export type SkillPack = {
  key: string;
  title: string;
  group: 'Start strong' | 'Holistic foundations' | 'Work with technology' | 'Career families' | 'Move into work';
  description: string;
  idealFor: string;
  scope: SkillScope;
  categoryMatches: string[];
  skillKeys: string[];
};

const practiceByCategory: Record<SkillPreset['category'], { method: string; proof: string }> = {
  technical: { method: 'Two focused blocks each week using a realistic technical task.', proof: 'A working output, test result, or supervised demonstration that can be explained clearly.' },
  digital: { method: 'Use the tool in one useful workflow each week and document the steps.', proof: 'A reusable digital output plus a short explanation of quality, privacy, and limitations.' },
  communication: { method: 'Practise in a real or recorded conversation, presentation, or written task each week.', proof: 'Before-and-after examples plus feedback from the intended audience.' },
  analytical: { method: 'Solve one realistic case each week and show the evidence and reasoning.', proof: 'A defensible recommendation with sources, assumptions, and limitations.' },
  creative: { method: 'Complete short briefs, request critique, and revise the work deliberately.', proof: 'A portfolio-ready piece showing the brief, process, feedback, and final result.' },
  leadership: { method: 'Own a small real responsibility with people, constraints, and a deadline.', proof: 'A completed outcome plus feedback on planning, communication, and follow-through.' },
  domain: { method: 'Analyse one real organisation, workflow, regulation, or industry case each week.', proof: 'A concise domain brief that uses credible sources and correct terminology.' },
  language: { method: 'Use the language in one written and one spoken professional task each week.', proof: 'A reviewed work sample and a recorded conversation or presentation.' },
  employability: { method: 'Apply the behaviour consistently for four weeks in study, projects, or work.', proof: 'A visible record of follow-through, feedback, and improved outcomes.' },
};

export function skillPlanItem(key: string, scope: SkillScope): SkillPlanItem | null {
  const preset = skillPresets.find((item) => item.key === key);
  if (!preset) return null;
  const practice = practiceByCategory[preset.category];
  return { ...preset, scope, practiceMethod: practice.method, successCriteria: practice.proof };
}

export const skillPacks: SkillPack[] = [
  { key: 'career-foundation', title: 'Career foundation', group: 'Start strong', description: 'The durable abilities every student needs to learn, decide, communicate, and follow through.', idealFor: 'Every student before heavy specialisation', scope: 'foundation', categoryMatches: [], skillKeys: ['clear-writing', 'active-listening', 'critical-thinking', 'learning-how-to-learn', 'time-management', 'deep-work-and-focus', 'reliability', 'digital-collaboration', 'self-awareness', 'typing-fluency', 'computer-and-phone-literacy', 'spreadsheet-fundamentals', 'reading-documentation', 'project-completion', 'personal-money-safety'] },
  { key: 'holistic-future-readiness', title: 'Holistic and future readiness', group: 'Holistic foundations', description: 'A balanced starter plan for self-awareness, resilience, communication, digital judgement, adaptability, and ethical use of technology.', idealFor: 'Students who want a rounded foundation before choosing a specialism', scope: 'foundation', categoryMatches: [], skillKeys: ['self-awareness', 'growth-mindset', 'active-listening', 'clear-writing', 'critical-thinking', 'adaptability', 'ai-tool-literacy', 'data-privacy'] },
  { key: 'research-decisions', title: 'Research and decision making', group: 'Start strong', description: 'A practical system for investigating claims, comparing routes, and making evidence-based decisions.', idealFor: 'Career exploration and option validation', scope: 'foundation', categoryMatches: [], skillKeys: ['problem-framing', 'research-skills', 'source-evaluation', 'data-interpretation', 'scenario-planning', 'risk-assessment', 'decision-making', 'attention-to-detail'] },
  { key: 'communication-influence', title: 'Communication and influence', group: 'Start strong', description: 'Speak, write, listen, present, and handle disagreement with clarity.', idealFor: 'Any route involving people or decisions', scope: 'foundation', categoryMatches: [], skillKeys: ['clear-writing', 'presentation-skills', 'active-listening', 'question-asking', 'storytelling', 'negotiation', 'giving-and-receiving-feedback', 'conflict-resolution'] },
  { key: 'self-management', title: 'Personal effectiveness', group: 'Start strong', description: 'Turn intentions into reliable weekly progress without depending on constant supervision.', idealFor: 'Students struggling with consistency or overload', scope: 'personal-effectiveness', categoryMatches: [], skillKeys: ['time-management', 'planning-and-prioritisation', 'goal-setting', 'personal-productivity', 'reliability', 'adaptability', 'resilience', 'learning-how-to-learn'] },
  { key: 'ai-ready', title: 'AI-ready professional', group: 'Work with technology', description: 'Use AI productively while checking evidence, privacy, bias, quality, and human responsibility.', idealFor: 'Every future-facing study or work route', scope: 'future-ready', categoryMatches: [], skillKeys: ['ai-tool-literacy', 'prompt-and-output-evaluation', 'critical-thinking', 'source-evaluation', 'data-privacy', 'cybersecurity-awareness', 'no-code-automation', 'professional-ethics'] },
  { key: 'digital-productivity', title: 'Digital productivity', group: 'Work with technology', description: 'Work confidently with documents, spreadsheets, presentations, collaboration, and simple automation.', idealFor: 'Any modern study or workplace environment', scope: 'future-ready', categoryMatches: [], skillKeys: ['computer-fundamentals', 'online-research', 'word-processing', 'spreadsheet-fundamentals', 'presentation-software', 'digital-collaboration', 'no-code-automation', 'data-privacy'] },
  { key: 'software-engineering', title: 'Software engineering starter', group: 'Career families', description: 'A balanced starter roadmap for building reliable software, not just following coding tutorials.', idealFor: 'Software, web, app, cloud, or product engineering', scope: 'career-specific', categoryMatches: ['Technology & Data'], skillKeys: ['programming-logic', 'web-development', 'database-design', 'api-fundamentals', 'software-testing', 'version-control-with-git', 'problem-framing', 'technical-communication'] },
  { key: 'data-analytics', title: 'Data and analytics starter', group: 'Career families', description: 'Move from raw information to trustworthy analysis, visual explanation, and decisions.', idealFor: 'Analytics, research, finance, operations, and data roles', scope: 'career-specific', categoryMatches: ['Technology & Data', 'Commerce, Finance & Economics', 'Science, Research & Environment'], skillKeys: ['spreadsheet-fundamentals', 'data-interpretation', 'statistical-thinking', 'sql-fundamentals', 'data-visualisation', 'python-fundamentals', 'problem-framing', 'presentation-skills'] },
  { key: 'cybersecurity', title: 'Cybersecurity starter', group: 'Career families', description: 'Build systems knowledge, risk awareness, investigation habits, and clear incident communication.', idealFor: 'Security operations, engineering, audit, and digital forensics', scope: 'career-specific', categoryMatches: ['Technology & Data', 'Future-ready & Cross-functional'], skillKeys: ['network-fundamentals', 'cybersecurity-operations', 'cybersecurity-awareness', 'data-privacy', 'logical-reasoning', 'risk-assessment', 'attention-to-detail', 'technical-communication'] },
  { key: 'engineering', title: 'Engineering and design starter', group: 'Career families', description: 'Combine quantitative thinking, technical representation, safety, testing, and project delivery.', idealFor: 'Engineering, architecture, manufacturing, and infrastructure', scope: 'career-specific', categoryMatches: ['Engineering & Built Environment'], skillKeys: ['quantitative-reasoning', 'engineering-drawing', 'cad-fundamentals', '3d-modelling', 'project-scheduling', 'quality-assurance', 'safety-awareness', 'technical-communication'] },
  { key: 'health-life-science', title: 'Health and life-science starter', group: 'Career families', description: 'Build scientific judgement, careful documentation, ethical practice, and human communication.', idealFor: 'Clinical, allied-health, laboratory, and health-research routes', scope: 'career-specific', categoryMatches: ['Health & Life Sciences'], skillKeys: ['scientific-measurement', 'clinical-documentation', 'healthcare-awareness', 'active-listening', 'professional-ethics', 'attention-to-detail', 'research-skills', 'clear-writing'] },
  { key: 'finance-accounting', title: 'Finance and accounting starter', group: 'Career families', description: 'Develop accuracy, financial logic, analysis, risk judgement, and commercial communication.', idealFor: 'Accounting, finance, banking, economics, and risk', scope: 'career-specific', categoryMatches: ['Commerce, Finance & Economics'], skillKeys: ['accounting-fundamentals', 'spreadsheet-fundamentals', 'financial-modelling', 'financial-literacy', 'risk-assessment', 'commercial-awareness', 'attention-to-detail', 'professional-ethics'] },
  { key: 'business-growth', title: 'Business, growth, and operations', group: 'Career families', description: 'Understand customers, run projects, measure performance, and influence stakeholders.', idealFor: 'Business, marketing, operations, sales, and product', scope: 'career-specific', categoryMatches: ['Business, Marketing & Operations'], skillKeys: ['customer-understanding', 'market-research', 'spreadsheet-fundamentals', 'presentation-skills', 'negotiation', 'commercial-awareness', 'project-leadership', 'stakeholder-management'] },
  { key: 'creative-design', title: 'Creative and design practice', group: 'Career families', description: 'Build creative judgement, audience understanding, production discipline, and a credible portfolio.', idealFor: 'Design, media, content, film, fashion, and creator routes', scope: 'career-specific', categoryMatches: ['Design, Media & Creative Arts'], skillKeys: ['visual-design', 'design-thinking', 'idea-generation', 'user-experience-design', 'portfolio-curation', 'content-creation', 'giving-and-receiving-feedback', 'project-scheduling'] },
  { key: 'law-policy', title: 'Law, policy, and public service', group: 'Career families', description: 'Read complex evidence, reason carefully, write clearly, and act within ethical public systems.', idealFor: 'Law, policy, civil services, compliance, and governance', scope: 'career-specific', categoryMatches: ['Law, Government & Public Service'], skillKeys: ['legal-research', 'source-evaluation', 'clear-writing', 'logical-reasoning', 'public-speaking', 'negotiation', 'professional-ethics', 'policy-analysis'] },
  { key: 'education-people', title: 'Education and people development', group: 'Career families', description: 'Understand needs, facilitate learning, give feedback, and track responsible progress.', idealFor: 'Teaching, counselling, learning, psychology, and social impact', scope: 'career-specific', categoryMatches: ['Education, Psychology & Social Impact'], skillKeys: ['active-listening', 'facilitation', 'presentation-skills', 'coaching-others', 'question-asking', 'giving-and-receiving-feedback', 'research-skills', 'inclusive-leadership'] },
  { key: 'science-climate', title: 'Science, research, and climate', group: 'Career families', description: 'Investigate questions with careful methods, quantitative evidence, and reproducible communication.', idealFor: 'Science, research, environment, and climate routes', scope: 'career-specific', categoryMatches: ['Science, Research & Environment', 'Future-ready & Cross-functional'], skillKeys: ['laboratory-technique', 'scientific-measurement', 'experimental-thinking', 'statistical-thinking', 'research-skills', 'source-evaluation', 'clear-writing', 'sustainability-awareness'] },
  { key: 'hospitality-service', title: 'Hospitality and service operations', group: 'Career families', description: 'Deliver consistent experiences through communication, teamwork, recovery, and live operations.', idealFor: 'Hospitality, travel, events, sports, and customer experience', scope: 'career-specific', categoryMatches: ['Hospitality, Travel, Sports & Events'], skillKeys: ['client-communication', 'conflict-resolution', 'teamwork', 'time-management', 'reliability', 'hospitality-operations-knowledge', 'customer-understanding', 'planning-and-prioritisation'] },
  { key: 'agriculture-food', title: 'Agriculture, food, and rural systems', group: 'Career families', description: 'Connect science, field observation, quality, sustainability, markets, and value chains.', idealFor: 'Agriculture, food, forestry, fisheries, and agribusiness', scope: 'career-specific', categoryMatches: ['Agriculture, Food & Rural Careers'], skillKeys: ['agricultural-value-chain-knowledge', 'sustainability-awareness', 'scientific-measurement', 'data-interpretation', 'market-research', 'teamwork', 'safety-awareness', 'commercial-awareness'] },
  { key: 'trades-technical', title: 'Skilled trades and technical service', group: 'Career families', description: 'Build safe hands-on diagnosis, quality workmanship, reliability, and customer trust.', idealFor: 'Electrical, mechanical, energy, service, and maintenance trades', scope: 'career-specific', categoryMatches: ['Skilled Trades & Applied Careers'], skillKeys: ['electrical-safety', 'mechanical-fabrication', 'quality-assurance', 'safety-awareness', 'root-cause-analysis', 'client-communication', 'reliability', 'project-scheduling'] },
  { key: 'global-language', title: 'Languages and international work', group: 'Career families', description: 'Pair strong language ability with research, cultural judgement, and a second professional domain.', idealFor: 'Language, localisation, international education, trade, and policy', scope: 'career-specific', categoryMatches: ['Languages, International & Emerging Routes'], skillKeys: ['business-english', 'cross-cultural-communication', 'translation', 'interpretation', 'foreign-language-proficiency', 'research-skills', 'source-evaluation', 'professional-email-writing'] },
  { key: 'leadership-venture', title: 'Leadership and entrepreneurship', group: 'Move into work', description: 'Own decisions, people, resources, customers, and measurable outcomes.', idealFor: 'Team leadership, ventures, programmes, and business ownership', scope: 'employability', categoryMatches: [], skillKeys: ['personal-ownership', 'decision-ownership', 'stakeholder-management', 'resource-planning', 'commercial-awareness', 'negotiation', 'project-leadership', 'performance-conversations'] },
  { key: 'first-job', title: 'First-job launch', group: 'Move into work', description: 'Turn capability into a focused profile, evidence, opportunities, and confident selection performance.', idealFor: 'Internship, apprenticeship, and first-job seekers', scope: 'employability', categoryMatches: [], skillKeys: ['cv-writing', 'linkedin-profile-building', 'portfolio-building', 'professional-networking', 'job-search-strategy', 'internship-search', 'interview-preparation', 'workplace-etiquette'] },
  { key: 'career-transition', title: 'Career transition', group: 'Move into work', description: 'Translate previous experience, test a new route, close priority gaps, and manage transition risk.', idealFor: 'Graduates and professionals changing career options', scope: 'employability', categoryMatches: [], skillKeys: ['self-awareness', 'career-research', 'learning-how-to-learn', 'risk-assessment', 'cv-writing', 'professional-networking', 'portfolio-building', 'interview-preparation'] },
  { key: 'hardware-semiconductors', title: 'Hardware and semiconductors', group: 'Career families', description: 'Explore digital hardware, chip design, verification, manufacturing constraints, and technical documentation.', idealFor: 'Electronics, embedded, semiconductor, and hardware routes', scope: 'career-specific', categoryMatches: ['Engineering & Built Environment', 'Technology & Data'], skillKeys: ['semiconductor-fundamentals', 'digital-hardware-and-chip-design', 'logical-reasoning', 'technical-communication'] },
  { key: 'ai-operations-governance', title: 'AI operations and governance', group: 'Work with technology', description: 'Design useful AI workflows with evaluation, privacy, risk controls, and accountable human review.', idealFor: 'AI operations, automation, governance, and responsible adoption', scope: 'future-ready', categoryMatches: ['Technology & Data', 'Future-ready & Cross-functional'], skillKeys: ['ai-agent-workflow-design', 'ai-governance-and-model-risk', 'prompt-and-output-evaluation', 'data-privacy'] },
  { key: 'specialist-digital-domains', title: 'Specialist digital domains', group: 'Career families', description: 'Combine technology with contracts, teaching, supply chains, or cloud finance in a domain-focused route.', idealFor: 'Legal technology, EdTech, supply-chain technology, and FinOps', scope: 'career-specific', categoryMatches: ['Business, Marketing & Operations', 'Education, Psychology & Social Impact', 'Law, Government & Public Service'], skillKeys: ['legal-technology-operations', 'instructional-design', 'supply-chain-technology', 'finops-and-cloud-cost-control'] },
];

export function skillPackItems(pack: SkillPack) {
  return pack.skillKeys.map((key) => skillPlanItem(key, pack.scope)).filter((item): item is SkillPlanItem => Boolean(item));
}

export function recommendedSkillPacks(primaryCategory: string | string[] | null | undefined) {
  const categories = new Set((Array.isArray(primaryCategory) ? primaryCategory : [primaryCategory]).filter((value): value is string => Boolean(value)));
  return skillPacks.filter((pack) => pack.key === 'career-foundation' || pack.key === 'ai-ready' || pack.categoryMatches.some((category) => categories.has(category))).slice(0, 4);
}

export const caseGoalPresets = [
  { key: 'discover-direction', stage: 'career-exploration', label: 'Build a credible shortlist', value: 'Build a shortlist of three credible career options using interests, strengths, constraints, future opportunity, and at least one real-world test for each.' },
  { key: 'choose-primary', stage: 'option-validation', label: 'Choose primary career options', value: 'Choose the primary career options worth serious exploration and one or two deliberate secondary options using real-world evidence, route feasibility, skill requirements, and personal constraints.' },
  { key: 'stream-decision', stage: 'decision', label: 'Make a stream decision', value: 'Choose a subject stream that preserves suitable career families, matches academic readiness, and has a realistic support plan.' },
  { key: 'course-college', stage: 'decision', label: 'Choose course and college', value: 'Create an affordable, accredited course and college shortlist with verified curriculum, outcomes, deadlines, and backup routes.' },
  { key: 'skill-roadmap', stage: 'execution', label: 'Build a skill roadmap', value: 'Close the highest-priority skill gaps for the selected career options and create credible evidence through projects, regular work, feedback, and real responsibility.' },
  { key: 'first-job', stage: 'execution', label: 'Launch into a first job', value: 'Build a focused target list, role-relevant evidence, applications, networking rhythm, and interview readiness for a realistic first opportunity.' },
  { key: 'career-change', stage: 'option-validation', label: 'Validate a career change', value: 'Test the target career against transferable strengths, financial and family constraints, skill gaps, opportunity evidence, and a staged transition plan.' },
];

export const progressUpdatePresets = [
  { key: 'on-track', label: 'On track', value: 'Progress: the student completed the agreed work and produced useful evidence. Current interpretation: the career option remains credible. Blocker: none material. Next: increase the realism of the next test.' },
  { key: 'needs-evidence', label: 'Needs stronger evidence', value: 'Progress: research is moving, but conclusions still rely mainly on assumptions or online information. Blocker: no direct work sample or practitioner evidence. Next: complete one real-world test before changing the decision.' },
  { key: 'decision-blocked', label: 'Decision is blocked', value: 'Progress: the main options are visible. Blocker: the unresolved constraint or disagreement is preventing a decision. Next: verify the constraint, document trade-offs, and agree a decision date.' },
  { key: 'follow-through-risk', label: 'Follow-through risk', value: 'Progress: the career option is reasonably clear, but agreed actions are not being completed consistently. Blocker: time, clarity, support, or motivation must be diagnosed. Next: reduce the plan to one owned action with a short check-in date.' },
  { key: 'primary-changed', label: 'Primary career option changed', value: 'Progress: new evidence changed the preferred career option. Reason: document the decisive evidence and trade-off. Next: update the career options you are keeping, close or reduce old actions, and assign the first test for the new option.' },
];

export const evidenceTemplatePresets = [
  { key: 'project-output', label: 'Completed project or work sample', evidenceType: 'project', title: 'Completed role-relevant project', description: 'Problem or brief:\nMy contribution:\nTools or methods used:\nOutcome:\nFeedback received:\nWhat I would improve:' },
  { key: 'observed-practice', label: 'Observed practical demonstration', evidenceType: 'experience', title: 'Observed practical demonstration', description: 'Task observed:\nConditions and level of support:\nWhat was done independently:\nQuality observed:\nNext practical step to try:' },
  { key: 'practitioner-feedback', label: 'Practitioner or coach feedback', evidenceType: 'feedback', title: 'Feedback from a practitioner', description: 'Who gave feedback and in what context:\nStrengths observed:\nPriority gap:\nRecommended next step:\nFollow-up date:' },
  { key: 'course-applied', label: 'Course learning applied', evidenceType: 'course', title: 'Applied learning from a course', description: 'Course or module:\nConcept learned:\nHow it was applied without copying the example:\nResult:\nWhat remains difficult:' },
  { key: 'competition-challenge', label: 'Competition or challenge submission', evidenceType: 'work-sample', title: 'Challenge or competition submission', description: 'Brief and judging criteria:\nSubmission:\nResult or feedback:\nWhat this proves:\nNext improvement:' },
  { key: 'workplace-exposure', label: 'Workplace exposure or responsibility', evidenceType: 'experience', title: 'Workplace exposure', description: 'Organisation and role observed:\nTasks completed or observed:\nTools, pace, and people contact:\nWhat was energising or draining:\nImplication for the career decision:' },
  { key: 'deployed-project', label: 'Deployed project or live demonstration', evidenceType: 'project', title: 'Deployed project', description: 'Problem solved:\nLive link or demonstration:\nMy contribution:\nTesting, privacy, or safety checks:\nFeedback or usage:\nNext improvement:' },
  { key: 'research-brief', label: 'Written research or decision brief', evidenceType: 'work-sample', title: 'Research brief', description: 'Question:\nSources checked:\nKey evidence:\nConclusion and uncertainty:\nRecommendation:\nFeedback received:' },
  { key: 'customer-interview', label: 'Customer or user interview summary', evidenceType: 'experience', title: 'Customer or user interview', description: 'Who was interviewed and why:\nQuestions asked:\nPatterns heard:\nWhat changed in my understanding:\nNext test:' },
  { key: 'before-after-result', label: 'Before-and-after improvement', evidenceType: 'work-sample', title: 'Before-and-after result', description: 'Starting condition:\nChange made:\nMeasure or comparison:\nResult:\nEvidence link or file:\nWhat I would improve:' },
];

export const noteTemplatePresets = [
  { key: 'factual-observation', noteType: 'observation', label: 'Factual observation', value: 'Observed behaviour or statement:\nContext:\nEvidence or example:\nCoaching interpretation:\nNext question or action:' },
  { key: 'student-guidance', noteType: 'suggestion', label: 'Student guidance and next step', value: 'What I recommend you try:\nWhy it matters for your current career option:\nHow to start:\nWhat to bring back or reflect on:' },
  { key: 'constraint-impact', noteType: 'constraint', label: 'Constraint and impact', value: 'Constraint:\nSource and certainty:\nOptions affected:\nWorkaround tested:\nOwner and check-in date:' },
  { key: 'family-alignment', noteType: 'family-context', label: 'Family alignment', value: 'Student preference:\nFamily preference or concern:\nShared priorities:\nUnresolved difference:\nAgreed next conversation:' },
  { key: 'risk-escalation', noteType: 'risk', label: 'Risk and escalation', value: 'Risk observed:\nImmediate impact:\nEvidence:\nAction taken:\nPerson informed or referral made:\nFollow-up date:' },
  { key: 'follow-up-review', noteType: 'follow-up', label: 'Follow-up review', value: 'Previous commitment:\nWhat was completed:\nEvidence created:\nBlocker:\nNew commitment and due date:' },
  { key: 'academic-pattern', noteType: 'academic', label: 'Academic pattern', value: 'Observed academic pattern:\nSubjects or conditions involved:\nEvidence across time:\nPossible implication:\nSupport or next check:' },
];

export const academicStreamPresets = ['Not decided', 'Science - PCM', 'Science - PCB', 'Science - PCMB', 'Commerce with Mathematics', 'Commerce without Mathematics', 'Humanities or Arts', 'Vocational or technical', 'Diploma or polytechnic', 'Undergraduate - technical', 'Undergraduate - non-technical', 'Postgraduate', 'Working professional'];
