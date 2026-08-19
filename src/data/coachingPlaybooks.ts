import { careerPresets, skillPresets, type CareerPreset, type SkillPreset } from './coachingPresets';

export type CareerOutlook = 'growing' | 'evolving' | 'stable' | 'niche' | 'uncertain';

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
};

type GuideFields = Omit<CareerGuide, keyof CareerPreset>;

type FamilyGuide = GuideFields & {
  purpose: string;
};

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

const roleOverrides: Record<string, Partial<GuideFields>> = {
  'software-engineer': {
    summary: 'Software engineers design, build, test, and maintain software that solves a real user or operating problem.',
    dailyWork: ['Break requirements into technical tasks', 'Write, review, test, and debug code', 'Improve reliability, security, and maintainability'],
    specialistSkills: ['Programming fundamentals', 'Data structures and APIs', 'Testing and version control'],
    futureSkills: ['AI-assisted engineering', 'System design', 'Security and responsible deployment'],
    watchOuts: ['Enjoying tutorials but avoiding debugging', 'Building projects without users, tests, or documentation'],
    adjacentRoles: ['QA Automation Engineer', 'Solutions Engineer', 'Technical Product Manager'],
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
const futureCareerPresets: CareerPreset[] = futureRoles.map(([title, summary, specialistSkills, futureSkills]) => ({
  key: slug(title), title, category: 'Future-ready & Cross-functional', featured: true,
  routeSummary: futureFamily.entryRoutes.join(' / '),
  entryRequirements: `Build one strong foundation discipline, then demonstrate ${specialistSkills.join(', ').toLowerCase()} through applied work.`,
  workEnvironment: 'Cross-functional product, research, consulting, operations, public-sector, or specialist teams.',
  nextStep: `Complete a small ${title.toLowerCase()} work sample and review ten current role descriptions.`,
  tags: `${title} future emerging ai climate health data green technology`.toLowerCase().split(/\s+/),
}));

const futureRoleDetails = new Map(futureRoles.map(([title, summary, specialistSkills, futureSkills]) => [slug(title), { summary, specialistSkills: [...specialistSkills], futureSkills: [...futureSkills] }]));

function buildCareerGuide(preset: CareerPreset): CareerGuide {
  const family = familyGuides[preset.category] ?? futureFamily;
  const future = futureRoleDetails.get(preset.key);
  const override = roleOverrides[preset.key] ?? {};
  return {
    ...preset,
    summary: override.summary ?? future?.summary ?? `${preset.title} ${family.purpose}.`,
    outlook: override.outlook ?? family.outlook,
    outlookDetail: override.outlookDetail ?? family.outlookDetail,
    dailyWork: override.dailyWork ?? family.dailyWork,
    entryRoutes: override.entryRoutes ?? family.entryRoutes,
    foundationSkills: override.foundationSkills ?? family.foundationSkills,
    specialistSkills: override.specialistSkills ?? future?.specialistSkills ?? family.specialistSkills,
    futureSkills: override.futureSkills ?? future?.futureSkills ?? family.futureSkills,
    workStyles: override.workStyles ?? family.workStyles,
    watchOuts: override.watchOuts ?? family.watchOuts,
    starterTests: override.starterTests ?? family.starterTests,
    adjacentRoles: override.adjacentRoles ?? family.adjacentRoles,
    tags: Array.from(new Set([...preset.tags, family.outlook, ...family.futureSkills.map((value) => value.toLowerCase())])),
  };
}

const careerMap = new Map<string, CareerPreset>();
[...careerPresets, ...futureCareerPresets].forEach((preset) => careerMap.set(preset.key, preset));
export const guidedCareerPresets = Array.from(careerMap.values()).map(buildCareerGuide);
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
  group: 'Start strong' | 'Work with technology' | 'Career families' | 'Move into work';
  description: string;
  idealFor: string;
  scope: SkillScope;
  categoryMatches: string[];
  skillKeys: string[];
};

const practiceByCategory: Record<SkillPreset['category'], { method: string; proof: string }> = {
  technical: { method: 'Two focused practice blocks each week using a realistic technical task.', proof: 'A working output, test result, or supervised demonstration that can be explained clearly.' },
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
  { key: 'career-foundation', title: 'Career foundation', group: 'Start strong', description: 'The durable abilities every student needs to learn, decide, communicate, and follow through.', idealFor: 'Every student before heavy specialisation', scope: 'foundation', categoryMatches: [], skillKeys: ['clear-writing', 'active-listening', 'critical-thinking', 'learning-how-to-learn', 'time-management', 'reliability', 'digital-collaboration', 'self-awareness'] },
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
  { key: 'first-job', title: 'First-job launch', group: 'Move into work', description: 'Turn capability into a focused profile, evidence, opportunities, and confident selection performance.', idealFor: 'Internship, apprenticeship, and first-job seekers', scope: 'employability', categoryMatches: [], skillKeys: ['resume-writing', 'linkedin-profile-building', 'portfolio-building', 'professional-networking', 'job-search-strategy', 'internship-search', 'interview-preparation', 'workplace-etiquette'] },
  { key: 'career-transition', title: 'Career transition', group: 'Move into work', description: 'Translate previous experience, test a new route, close priority gaps, and manage transition risk.', idealFor: 'Graduates and professionals changing direction', scope: 'employability', categoryMatches: [], skillKeys: ['self-awareness', 'career-research', 'learning-how-to-learn', 'risk-assessment', 'resume-writing', 'professional-networking', 'portfolio-building', 'interview-preparation'] },
];

export function skillPackItems(pack: SkillPack) {
  return pack.skillKeys.map((key) => skillPlanItem(key, pack.scope)).filter((item): item is SkillPlanItem => Boolean(item));
}

export function recommendedSkillPacks(primaryCategory: string | null | undefined) {
  return skillPacks.filter((pack) => pack.key === 'career-foundation' || pack.key === 'ai-ready' || (primaryCategory && pack.categoryMatches.includes(primaryCategory))).slice(0, 4);
}

export const caseGoalPresets = [
  { key: 'discover-direction', stage: 'career-exploration', label: 'Build a credible shortlist', value: 'Build a shortlist of three credible career directions using interests, strengths, constraints, future opportunity, and at least one real-world test for each.' },
  { key: 'choose-primary', stage: 'option-validation', label: 'Choose a primary direction', value: 'Choose one primary direction and one or two deliberate alternatives using real-world evidence, route feasibility, skill requirements, and personal constraints.' },
  { key: 'stream-decision', stage: 'decision', label: 'Make a stream decision', value: 'Choose a subject stream that preserves suitable career families, matches academic readiness, and has a realistic support plan.' },
  { key: 'course-college', stage: 'decision', label: 'Choose course and college', value: 'Create an affordable, accredited course and college shortlist with verified curriculum, outcomes, deadlines, and backup routes.' },
  { key: 'skill-roadmap', stage: 'execution', label: 'Build a skill roadmap', value: 'Close the highest-priority skill gaps for the primary direction and create credible evidence through projects, practice, feedback, and real responsibility.' },
  { key: 'first-job', stage: 'execution', label: 'Launch into a first job', value: 'Build a focused target list, role-relevant evidence, applications, networking rhythm, and interview readiness for a realistic first opportunity.' },
  { key: 'career-change', stage: 'option-validation', label: 'Validate a career change', value: 'Test the target career against transferable strengths, financial and family constraints, skill gaps, opportunity evidence, and a staged transition plan.' },
];

export const progressUpdatePresets = [
  { key: 'on-track', label: 'On track', value: 'Progress: the student completed the agreed work and produced useful evidence. Current interpretation: the direction remains credible. Blocker: none material. Next: increase the realism of the next test.' },
  { key: 'needs-evidence', label: 'Needs stronger evidence', value: 'Progress: research is moving, but conclusions still rely mainly on assumptions or online information. Blocker: no direct work sample or practitioner evidence. Next: complete one real-world test before changing the decision.' },
  { key: 'decision-blocked', label: 'Decision is blocked', value: 'Progress: the main options are visible. Blocker: the unresolved constraint or disagreement is preventing a decision. Next: verify the constraint, document trade-offs, and agree a decision date.' },
  { key: 'follow-through-risk', label: 'Follow-through risk', value: 'Progress: the direction is reasonably clear, but agreed actions are not being completed consistently. Blocker: time, clarity, support, or motivation must be diagnosed. Next: reduce the plan to one owned action with a short review date.' },
  { key: 'primary-changed', label: 'Primary direction changed', value: 'Progress: new evidence changed the preferred direction. Reason: document the decisive evidence and trade-off. Next: update the primary focus, close or reduce old actions, and assign the first test for the new direction.' },
];

export const evidenceTemplatePresets = [
  { key: 'project-output', label: 'Completed project or work sample', evidenceType: 'project', title: 'Completed role-relevant project', description: 'Problem or brief:\nMy contribution:\nTools or methods used:\nOutcome:\nFeedback received:\nWhat I would improve:' },
  { key: 'observed-practice', label: 'Observed practical demonstration', evidenceType: 'experience', title: 'Observed practical demonstration', description: 'Task observed:\nConditions and level of support:\nWhat was done independently:\nQuality observed:\nNext level to demonstrate:' },
  { key: 'practitioner-feedback', label: 'Practitioner or coach feedback', evidenceType: 'feedback', title: 'Feedback from a practitioner', description: 'Who gave feedback and in what context:\nStrengths observed:\nPriority gap:\nRecommended next practice:\nFollow-up date:' },
  { key: 'course-applied', label: 'Course learning applied', evidenceType: 'course', title: 'Applied learning from a course', description: 'Course or module:\nConcept learned:\nHow it was applied without copying the example:\nResult:\nWhat remains difficult:' },
  { key: 'competition-challenge', label: 'Competition or challenge submission', evidenceType: 'work-sample', title: 'Challenge or competition submission', description: 'Brief and judging criteria:\nSubmission:\nResult or feedback:\nWhat this proves:\nNext improvement:' },
  { key: 'workplace-exposure', label: 'Workplace exposure or responsibility', evidenceType: 'experience', title: 'Workplace exposure', description: 'Organisation and role observed:\nTasks completed or observed:\nTools, pace, and people contact:\nWhat was energising or draining:\nImplication for the career decision:' },
];

export const noteTemplatePresets = [
  { key: 'factual-observation', noteType: 'observation', label: 'Factual observation', value: 'Observed behaviour or statement:\nContext:\nEvidence or example:\nCoaching interpretation:\nNext question or action:' },
  { key: 'constraint-impact', noteType: 'constraint', label: 'Constraint and impact', value: 'Constraint:\nSource and certainty:\nOptions affected:\nWorkaround tested:\nOwner and review date:' },
  { key: 'family-alignment', noteType: 'family-context', label: 'Family alignment', value: 'Student preference:\nFamily preference or concern:\nShared priorities:\nUnresolved difference:\nAgreed next conversation:' },
  { key: 'risk-escalation', noteType: 'risk', label: 'Risk and escalation', value: 'Risk observed:\nImmediate impact:\nEvidence:\nAction taken:\nPerson informed or referral made:\nFollow-up date:' },
  { key: 'follow-up-review', noteType: 'follow-up', label: 'Follow-up review', value: 'Previous commitment:\nWhat was completed:\nEvidence created:\nBlocker:\nNew commitment and due date:' },
  { key: 'academic-pattern', noteType: 'academic', label: 'Academic pattern', value: 'Observed academic pattern:\nSubjects or conditions involved:\nEvidence across time:\nPossible implication:\nSupport or next check:' },
];

export const academicStreamPresets = ['Not decided', 'Science - PCM', 'Science - PCB', 'Science - PCMB', 'Commerce with Mathematics', 'Commerce without Mathematics', 'Humanities or Arts', 'Vocational or technical', 'Diploma or polytechnic', 'Undergraduate - technical', 'Undergraduate - non-technical', 'Postgraduate', 'Working professional'];

