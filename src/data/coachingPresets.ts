export type CareerPreset = {
  key: string;
  title: string;
  category: string;
  featured: boolean;
  routeSummary: string;
  entryRequirements: string;
  workEnvironment: string;
  nextStep: string;
  tags: string[];
};

export type SkillPreset = {
  key: string;
  title: string;
  category: 'technical' | 'digital' | 'communication' | 'analytical' | 'creative' | 'leadership' | 'domain' | 'language' | 'employability';
  targetLevel: number;
  priority: 'core' | 'important' | 'useful';
  developmentGoal: string;
};

export type ActionPreset = {
  key: string;
  title: string;
  category: 'explore' | 'learn' | 'build' | 'connect' | 'apply' | 'decide';
  details: string;
  dueDays: number;
};

export type SessionPreset = {
  key: string;
  group: string;
  sessionType: string;
  topic: string;
  agenda: string;
  preparation: string;
  durationMinutes: number;
};

export type CohortPreset = {
  key: string;
  label: string;
  programTrack: string;
  coachingStage: string;
  deliveryMode: string;
  capacity: number;
  scheduleNote: string;
  description: string;
};

const slug = (value: string) => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

const careerBlueprints = [
  {
    category: 'Technology & Data',
    route: 'Build foundations in computing, logic, and digital problem solving, then choose a degree, diploma, certification, apprenticeship, or portfolio-led entry route that matches the role.',
    requirements: 'Evidence of problem solving, comfort with continuous learning, and role-relevant projects. Formal mathematics or computing requirements vary by course and employer.',
    environment: 'Product companies, IT services, startups, consulting teams, research labs, government technology units, or remote and hybrid teams.',
    nextStep: 'Complete a two-hour beginner task for this role and review whether the actual work feels engaging.',
    featured: ['Software Engineer', 'Data Analyst', 'Cybersecurity Analyst', 'Product Manager', 'Cloud Engineer', 'UI/UX Designer'],
    titles: ['Software Engineer', 'Frontend Developer', 'Backend Developer', 'Full-stack Developer', 'Mobile App Developer', 'Game Developer', 'Data Analyst', 'Business Intelligence Analyst', 'Data Scientist', 'Machine Learning Engineer', 'AI Engineer', 'AI Product Specialist', 'Cybersecurity Analyst', 'Security Engineer', 'Ethical Hacker', 'Cloud Engineer', 'DevOps Engineer', 'Site Reliability Engineer', 'Database Administrator', 'QA Automation Engineer', 'IT Support Specialist', 'Network Engineer', 'Systems Administrator', 'Solutions Architect', 'Technical Product Manager', 'Product Manager', 'Business Analyst', 'ERP Consultant', 'Blockchain Developer', 'AR/VR Developer', 'UI/UX Designer', 'UX Researcher'],
  },
  {
    category: 'Engineering & Built Environment',
    route: 'Compare accredited engineering, architecture, planning, diploma, and technician routes. Add internships, site exposure, laboratories, design projects, or industry certification.',
    requirements: 'Mathematics and science requirements depend on the route. Practical design ability, safety awareness, and evidence from projects or site exposure strengthen entry.',
    environment: 'Design offices, manufacturing plants, construction sites, infrastructure projects, laboratories, utilities, consulting firms, and field locations.',
    nextStep: 'Inspect one real project, lab, drawing, or site workflow and speak with someone doing the work.',
    featured: ['Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer', 'Architect', 'Robotics Engineer'],
    titles: ['Mechanical Engineer', 'Civil Engineer', 'Electrical Engineer', 'Electronics Engineer', 'Electronics and Communication Engineer', 'Chemical Engineer', 'Aerospace Engineer', 'Aeronautical Engineer', 'Automotive Engineer', 'Mechatronics Engineer', 'Robotics Engineer', 'Biomedical Engineer', 'Environmental Engineer', 'Industrial Engineer', 'Production Engineer', 'Marine Engineer', 'Mining Engineer', 'Metallurgical Engineer', 'Materials Engineer', 'Petroleum Engineer', 'Energy Engineer', 'Renewable Energy Engineer', 'Instrumentation Engineer', 'Structural Engineer', 'Geotechnical Engineer', 'Transportation Engineer', 'Water Resources Engineer', 'Architect', 'Urban Planner', 'Landscape Architect', 'Quantity Surveyor', 'Construction Manager', 'GIS Specialist', 'Surveyor'],
  },
  {
    category: 'Health & Life Sciences',
    route: 'Map the regulated degree, licensing, supervised practice, entrance examination, and internship requirements before comparing clinical, research, allied-health, and management routes.',
    requirements: 'Science prerequisites and licensing vary widely. Patient safety, communication, ethical judgment, sustained study, and verified clinical or laboratory exposure matter.',
    environment: 'Hospitals, clinics, laboratories, rehabilitation centres, community health programmes, research organisations, pharmaceutical companies, and private practice.',
    nextStep: 'Interview a practitioner and compare a typical working day with the training and licensing commitment.',
    featured: ['Doctor', 'Clinical Psychologist', 'Physiotherapist', 'Pharmacist', 'Biotechnologist'],
    titles: ['Doctor', 'Dentist', 'Nurse', 'Physiotherapist', 'Occupational Therapist', 'Pharmacist', 'Clinical Psychologist', 'Counselling Psychologist', 'Psychiatrist', 'Nutritionist', 'Dietitian', 'Public Health Specialist', 'Medical Laboratory Technologist', 'Radiology Technologist', 'Optometrist', 'Audiologist', 'Speech and Language Therapist', 'Veterinarian', 'Biotechnologist', 'Microbiologist', 'Bioinformatics Specialist', 'Clinical Research Associate', 'Genetic Counsellor', 'Epidemiologist', 'Forensic Scientist', 'Biomedical Scientist', 'Healthcare Administrator', 'Hospital Operations Manager', 'Health Informatics Specialist', 'Medical Writer', 'Pharmacovigilance Specialist', 'Regulatory Affairs Specialist', 'Emergency Medical Technician'],
  },
  {
    category: 'Commerce, Finance & Economics',
    route: 'Compare degree-led, professional qualification, apprenticeship, and employer-training routes. Build spreadsheet, accounting, analysis, and business communication evidence alongside exams.',
    requirements: 'Numeracy, accuracy, ethics, analytical reasoning, and commercial awareness are central. Professional roles may require staged examinations and supervised experience.',
    environment: 'Accounting firms, banks, investment companies, insurers, corporate finance teams, consulting firms, fintech companies, government, and independent practice.',
    nextStep: 'Complete a realistic financial analysis or accounting sample and compare two qualification routes.',
    featured: ['Chartered Accountant', 'Financial Analyst', 'Investment Analyst', 'Actuary', 'Economist'],
    titles: ['Chartered Accountant', 'Cost and Management Accountant', 'Company Secretary', 'Financial Analyst', 'FP&A Analyst', 'Investment Analyst', 'Equity Research Analyst', 'Investment Banker', 'Portfolio Analyst', 'Wealth Manager', 'Credit Analyst', 'Risk Analyst', 'Actuary', 'Economist', 'Accountant', 'Auditor', 'Tax Consultant', 'Forensic Accountant', 'Treasury Analyst', 'Corporate Finance Analyst', 'Banking Professional', 'Retail Banker', 'Insurance Underwriter', 'Insurance Claims Analyst', 'FinTech Analyst', 'Compliance Analyst', 'Anti-Money Laundering Analyst', 'Procurement Analyst', 'Revenue Analyst', 'Economic Researcher'],
  },
  {
    category: 'Business, Marketing & Operations',
    route: 'Build broad business foundations, then test the function through projects, internships, case competitions, sales exposure, operations work, or a small venture before specialising.',
    requirements: 'Communication, ownership, customer understanding, commercial judgment, teamwork, and measurable outcomes often matter as much as a specific degree.',
    environment: 'Companies of every size, startups, consulting firms, agencies, retail and e-commerce operations, field teams, and independent ventures.',
    nextStep: 'Run a small role simulation or project with a clear customer, deadline, and measurable outcome.',
    featured: ['Entrepreneur', 'Digital Marketing Specialist', 'Human Resources Manager', 'Management Consultant', 'Operations Manager'],
    titles: ['Entrepreneur', 'Business Owner', 'Management Consultant', 'Strategy Analyst', 'Operations Manager', 'Project Manager', 'Programme Manager', 'Supply Chain Manager', 'Logistics Manager', 'Procurement Manager', 'Quality Manager', 'Process Improvement Analyst', 'Sales Manager', 'Business Development Manager', 'Key Account Manager', 'Customer Success Manager', 'Marketing Manager', 'Brand Manager', 'Digital Marketing Specialist', 'Performance Marketing Specialist', 'SEO Specialist', 'Market Research Analyst', 'Growth Manager', 'E-commerce Manager', 'Retail Manager', 'Merchandising Manager', 'Human Resources Manager', 'Talent Acquisition Specialist', 'Learning and Development Manager', 'Compensation and Benefits Analyst', 'Organisational Development Specialist', 'Franchise Manager', 'Export-Import Manager'],
  },
  {
    category: 'Design, Media & Creative Arts',
    route: 'Develop fundamentals, then build a focused portfolio through briefs, commissions, competitions, internships, performances, or published work. Compare degree, diploma, studio, and apprenticeship routes.',
    requirements: 'A relevant portfolio, consistent practice, critique, audience awareness, and production discipline are usually decisive. Some fields also require auditions or technical software skill.',
    environment: 'Studios, agencies, production houses, publishers, product teams, cultural organisations, freelance practice, live venues, and creator businesses.',
    nextStep: 'Complete one small portfolio brief under a real deadline and request critique from a practitioner.',
    featured: ['Graphic Designer', 'Animator', 'Filmmaker', 'Content Writer', 'Fashion Designer'],
    titles: ['Graphic Designer', 'Visual Communication Designer', 'UI Designer', 'Product Designer', 'Industrial Designer', 'Fashion Designer', 'Textile Designer', 'Jewellery Designer', 'Interior Designer', 'Animator', '3D Artist', 'VFX Artist', 'Game Designer', 'Illustrator', 'Photographer', 'Filmmaker', 'Cinematographer', 'Video Editor', 'Sound Designer', 'Music Producer', 'Journalist', 'Content Writer', 'Content Editor', 'Copywriter', 'Technical Writer', 'UX Writer', 'Advertising Creative', 'Art Director', 'Public Relations Specialist', 'Social Media Manager', 'Radio Producer', 'Podcast Producer', 'Theatre Professional', 'Performing Artist', 'Museum Curator'],
  },
  {
    category: 'Law, Government & Public Service',
    route: 'Map the required degree, competitive examination, licensing, internship, language, and service pathway. Keep a parallel plan because many public routes have long selection cycles.',
    requirements: 'Reading, writing, reasoning, ethics, current affairs, public communication, and sustained preparation are central. Regulated legal roles require formal qualifications.',
    environment: 'Courts, law firms, corporate legal teams, civil services, regulators, local government, policy organisations, defence services, and public institutions.',
    nextStep: 'Analyse one real case, policy, or role examination and interview someone inside the system.',
    featured: ['Lawyer', 'Civil Services Officer', 'Public Policy Analyst', 'Defence Officer'],
    titles: ['Lawyer', 'Corporate Lawyer', 'Litigation Lawyer', 'Intellectual Property Lawyer', 'Legal Counsel', 'Legal Compliance Officer', 'Judicial Services Officer', 'Civil Services Officer', 'State Civil Services Officer', 'Public Policy Analyst', 'Policy Researcher', 'Diplomat', 'Political Researcher', 'Legislative Assistant', 'Labour Officer', 'Social Welfare Officer', 'Municipal Administrator', 'Police Officer', 'Intelligence Analyst', 'Defence Officer', 'Army Officer', 'Navy Officer', 'Air Force Officer', 'Disaster Management Specialist', 'Fire and Safety Officer', 'Forensic Investigator', 'Criminologist', 'Customs Officer', 'Tax Officer', 'Election Management Professional'],
  },
  {
    category: 'Education, Psychology & Social Impact',
    route: 'Combine subject or human-development knowledge with supervised practice, teaching demonstrations, counselling exposure, programme delivery, research, or community work.',
    requirements: 'Communication, patience, safeguarding, reflective practice, and evidence of working responsibly with learners or communities are essential. Licensing varies by role.',
    environment: 'Schools, colleges, training organisations, counselling settings, nonprofits, foundations, government programmes, community organisations, and learning technology companies.',
    nextStep: 'Facilitate or observe one real learning, counselling, or community activity and record what the work required.',
    featured: ['School Teacher', 'Career Counsellor', 'Special Educator', 'Social Worker'],
    titles: ['School Teacher', 'Primary Teacher', 'Subject Teacher', 'Special Educator', 'College Lecturer', 'Professor', 'Academic Researcher', 'Instructional Designer', 'Curriculum Designer', 'Education Technology Specialist', 'Career Counsellor', 'School Counsellor', 'Child Psychologist', 'Educational Psychologist', 'Social Worker', 'NGO Programme Manager', 'Community Development Officer', 'Youth Worker', 'Child Development Specialist', 'Learning and Development Facilitator', 'Corporate Trainer', 'Education Policy Analyst', 'Academic Administrator', 'School Leader', 'Education Entrepreneur', 'Research Assistant', 'Monitoring and Evaluation Specialist', 'Fundraising Professional'],
  },
  {
    category: 'Science, Research & Environment',
    route: 'Build strong subject foundations, laboratory or field methods, statistics, and scientific communication. Compare research degrees with applied industry, government, and technical routes.',
    requirements: 'Curiosity, quantitative reasoning, careful documentation, experimental discipline, and patience with long projects are central. Advanced research usually requires postgraduate study.',
    environment: 'Universities, laboratories, research institutes, environmental field sites, scientific agencies, R&D teams, observatories, and technical consulting firms.',
    nextStep: 'Reproduce a small experiment, analysis, or field observation and speak with an applied scientist.',
    featured: ['Research Scientist', 'Statistician', 'Environmental Scientist', 'Food Scientist'],
    titles: ['Research Scientist', 'Physicist', 'Chemist', 'Mathematician', 'Statistician', 'Astronomer', 'Astrophysicist', 'Geologist', 'Geophysicist', 'Meteorologist', 'Climate Scientist', 'Environmental Scientist', 'Ecologist', 'Marine Biologist', 'Zoologist', 'Botanist', 'Microbiologist', 'Food Scientist', 'Materials Scientist', 'Nanotechnology Researcher', 'Computational Scientist', 'Operations Research Analyst', 'Laboratory Manager', 'Scientific Officer', 'Sustainability Analyst', 'Carbon Analyst', 'Conservation Scientist', 'Hydrologist', 'Oceanographer', 'Science Communicator'],
  },
  {
    category: 'Hospitality, Travel, Sports & Events',
    route: 'Combine service or performance fundamentals with live operational exposure, internships, volunteering, certifications, competitions, and progressively larger responsibilities.',
    requirements: 'Reliability, communication, stamina, customer or athlete care, teamwork, and calm execution under pressure are highly valued. Licensing applies to some aviation and fitness roles.',
    environment: 'Hotels, restaurants, travel companies, airlines, airports, event venues, sports academies, fitness centres, clubs, and destination businesses.',
    nextStep: 'Observe or support one real shift, event, training session, or customer journey before committing.',
    featured: ['Hotel Manager', 'Chef', 'Event Manager', 'Sports Manager', 'Commercial Pilot'],
    titles: ['Hotel Manager', 'Front Office Manager', 'Food and Beverage Manager', 'Chef', 'Baker and Pastry Professional', 'Restaurant Manager', 'Travel Consultant', 'Tourism Manager', 'Tour Guide', 'Airline Cabin Crew', 'Airport Operations Manager', 'Commercial Pilot', 'Air Traffic Controller', 'Event Manager', 'Wedding Planner', 'Sports Manager', 'Sports Coach', 'Fitness Trainer', 'Strength and Conditioning Coach', 'Sports Analyst', 'Esports Manager', 'Adventure Tourism Professional', 'Cruise Operations Professional', 'Guest Experience Manager', 'Revenue Manager'],
  },
  {
    category: 'Agriculture, Food & Rural Careers',
    route: 'Compare agricultural, veterinary, food, forestry, fisheries, rural-development, and business routes. Add farm, field, laboratory, processing, or market exposure.',
    requirements: 'Biology or agriculture prerequisites vary. Field observation, practical problem solving, sustainability awareness, and comfort working across seasonal conditions matter.',
    environment: 'Farms, food companies, laboratories, cooperatives, rural programmes, forests, fisheries, supply chains, agri-tech companies, and government departments.',
    nextStep: 'Visit a farm, processing unit, market, lab, or rural programme and map one full value chain.',
    featured: ['Agricultural Scientist', 'Food Technologist', 'Agribusiness Manager'],
    titles: ['Agricultural Scientist', 'Agronomist', 'Horticulturist', 'Soil Scientist', 'Plant Breeder', 'Seed Technologist', 'Agricultural Engineer', 'Agricultural Extension Officer', 'Agribusiness Manager', 'Farm Manager', 'Dairy Technologist', 'Fisheries Scientist', 'Aquaculture Manager', 'Food Technologist', 'Food Safety Officer', 'Rural Development Professional', 'Forestry Officer', 'Wildlife Conservationist', 'Agri-Tech Product Specialist', 'Commodity Analyst', 'Cold Chain Manager', 'Organic Farming Entrepreneur'],
  },
  {
    category: 'Skilled Trades & Applied Careers',
    route: 'Use an industrial training institute, polytechnic, apprenticeship, certification, employer training, or supervised-practice route. Build proof through safe practical work.',
    requirements: 'Hands-on accuracy, safety, reliability, diagnosis, customer communication, and recognised trade certification are central. Requirements vary by trade and region.',
    environment: 'Workshops, factories, construction sites, service centres, utilities, hospitals, homes, field locations, and self-employed businesses.',
    nextStep: 'Try a supervised practical task and compare training quality, certification, demand, and progression.',
    featured: ['Electrician', 'Automotive Technician', 'Solar Technician', 'Drone Technician'],
    titles: ['Electrician', 'Electronics Technician', 'Automotive Technician', 'EV Service Technician', 'CNC Machinist', 'Tool and Die Maker', 'Welder', 'Plumber', 'HVAC Technician', 'Refrigeration Technician', 'Solar Technician', 'Wind Turbine Technician', 'Drone Pilot', 'Drone Technician', 'Medical Equipment Technician', 'Laboratory Technician', 'Construction Supervisor', 'CAD Technician', 'Telecom Technician', 'Computer Hardware Technician', 'Industrial Maintenance Technician', 'Printing Technician', 'Beauty and Wellness Professional', 'Tailor and Garment Technician', 'Furniture and Woodworking Professional'],
  },
  {
    category: 'Languages, International & Emerging Routes',
    route: 'Build advanced language, cultural, research, or cross-border business capability and pair it with a second domain such as law, technology, trade, media, education, or policy.',
    requirements: 'Demonstrated language proficiency, intercultural communication, domain knowledge, and work samples are usually stronger than language study alone.',
    environment: 'Global companies, embassies, international organisations, publishers, localisation teams, tourism, education, export businesses, and remote services.',
    nextStep: 'Complete a real translation, research, localisation, or cross-border business task and get expert feedback.',
    featured: ['Translator', 'Foreign Language Specialist', 'International Relations Specialist'],
    titles: ['Translator', 'Interpreter', 'Foreign Language Specialist', 'Localisation Specialist', 'International Relations Specialist', 'International Development Professional', 'Export-Import Specialist', 'Global Mobility Specialist', 'Cross-Cultural Trainer', 'Foreign Correspondent', 'Language Teacher', 'Diplomatic Services Specialist', 'Migration Policy Researcher', 'Global Supply Chain Specialist', 'International Admissions Adviser'],
  },
] as const;

export const careerPresets: CareerPreset[] = careerBlueprints.flatMap((blueprint) =>
  blueprint.titles.map((title) => ({
    key: slug(title),
    title,
    category: blueprint.category,
    featured: blueprint.featured.includes(title as never),
    routeSummary: blueprint.route,
    entryRequirements: blueprint.requirements,
    workEnvironment: blueprint.environment,
    nextStep: blueprint.nextStep,
    tags: `${title} ${blueprint.category}`.toLowerCase().split(/\s+/),
  })),
);

export const careerCategories = careerBlueprints.map((group) => group.category);


const skillGroups: Array<{
  category: SkillPreset['category'];
  targetLevel: number;
  priority: SkillPreset['priority'];
  titles: string[];
}> = [
  { category: 'communication', targetLevel: 3, priority: 'core', titles: ['Clear writing', 'Professional email writing', 'Presentation skills', 'Public speaking', 'Active listening', 'Interview communication', 'Group discussion', 'Storytelling', 'Negotiation', 'Persuasion', 'Question asking', 'Giving and receiving feedback', 'Client communication', 'Cross-cultural communication', 'Conflict resolution', 'Facilitation', 'Meeting communication', 'Technical communication'] },
  { category: 'analytical', targetLevel: 3, priority: 'core', titles: ['Critical thinking', 'Problem framing', 'Quantitative reasoning', 'Data interpretation', 'Research skills', 'Source evaluation', 'Decision making', 'Systems thinking', 'Logical reasoning', 'Statistical thinking', 'Financial literacy', 'Commercial awareness', 'Root-cause analysis', 'Scenario planning', 'Risk assessment', 'Experimental thinking', 'Policy analysis', 'Attention to detail'] },
  { category: 'digital', targetLevel: 3, priority: 'important', titles: ['Computer fundamentals', 'Online research', 'Word processing', 'Spreadsheet fundamentals', 'Advanced spreadsheets', 'Presentation software', 'Digital collaboration', 'Data privacy', 'Cybersecurity awareness', 'AI tool literacy', 'Prompt and output evaluation', 'SQL fundamentals', 'Python fundamentals', 'Data visualisation', 'Version control with Git', 'Web publishing', 'No-code automation', 'Cloud fundamentals', 'CRM fundamentals', 'Digital analytics', 'CAD fundamentals', 'GIS fundamentals', 'Design software fundamentals', 'Video editing fundamentals'] },
  { category: 'technical', targetLevel: 3, priority: 'important', titles: ['Programming logic', 'Web development', 'Mobile development', 'Database design', 'Software testing', 'API fundamentals', 'Network fundamentals', 'Cybersecurity operations', 'Machine learning fundamentals', 'Accounting fundamentals', 'Financial modelling', 'Bookkeeping', 'Laboratory technique', 'Scientific measurement', 'Engineering drawing', '3D modelling', 'Electrical safety', 'Mechanical fabrication', 'Project scheduling', 'Quality assurance', 'Supply chain planning', 'Market research', 'SEO execution', 'Performance marketing', 'Clinical documentation', 'Legal research'] },
  { category: 'creative', targetLevel: 3, priority: 'important', titles: ['Visual design', 'Design thinking', 'Idea generation', 'Creative problem solving', 'Sketching', 'Photography', 'Video production', 'Animation fundamentals', 'Content creation', 'Copywriting', 'Editorial judgment', 'User experience design', 'Portfolio curation', 'Brand thinking', 'Sound editing', 'Spatial design', 'Fashion illustration', 'Creative direction'] },
  { category: 'leadership', targetLevel: 3, priority: 'important', titles: ['Personal ownership', 'Teamwork', 'Delegation', 'Coaching others', 'Planning and prioritisation', 'Project leadership', 'Stakeholder management', 'Decision ownership', 'Change management', 'Resource planning', 'Ethical leadership', 'Inclusive leadership', 'Volunteer leadership', 'Community leadership', 'Performance conversations'] },
  { category: 'employability', targetLevel: 3, priority: 'core', titles: ['Time management', 'Reliability', 'Adaptability', 'Learning how to learn', 'Career research', 'Goal setting', 'Professional networking', 'Resume writing', 'LinkedIn profile building', 'Portfolio building', 'Job search strategy', 'Internship search', 'Interview preparation', 'Workplace etiquette', 'Remote work discipline', 'Personal productivity', 'Resilience', 'Self-awareness', 'Growth mindset', 'Professional ethics'] },
  { category: 'domain', targetLevel: 3, priority: 'important', titles: ['Industry knowledge', 'Role knowledge', 'Customer understanding', 'Regulatory awareness', 'Safety awareness', 'Sustainability awareness', 'Healthcare awareness', 'Education-system knowledge', 'Financial-market awareness', 'Public-policy awareness', 'Manufacturing awareness', 'Agricultural value-chain knowledge', 'Hospitality operations knowledge', 'Media-industry knowledge', 'Entrepreneurship fundamentals'] },
  { category: 'language', targetLevel: 3, priority: 'useful', titles: ['Academic English', 'Business English', 'Hindi communication', 'Regional language proficiency', 'Foreign language proficiency', 'Translation', 'Interpretation', 'Vocabulary development', 'Reading comprehension', 'Professional pronunciation'] },
];

function skillGoal(title: string, category: SkillPreset['category']) {
  const proof: Record<SkillPreset['category'], string> = {
    technical: 'complete a supervised practical task or project',
    digital: 'complete a digital work sample and explain the process',
    communication: 'use it in a recorded or observed real conversation',
    analytical: 'solve a realistic case and explain the reasoning',
    creative: 'produce one portfolio-quality brief and request critique',
    leadership: 'lead a small responsibility and collect feedback',
    domain: 'analyse a real organisation, workflow, or industry case',
    language: 'use it in a real written and spoken task',
    employability: 'apply it consistently for four weeks and record evidence',
  };
  return `Develop ${title.toLowerCase()} through deliberate weekly practice; ${proof[category]}.`;
}

export const skillPresets: SkillPreset[] = skillGroups.flatMap((group) =>
  group.titles.map((title) => ({
    key: slug(title),
    title,
    category: group.category,
    targetLevel: group.targetLevel,
    priority: group.priority,
    developmentGoal: skillGoal(title, group.category),
  })),
);

export const skillCategories = skillGroups.map((group) => group.category);

export const actionPresets: ActionPreset[] = [
  { key: 'compare-entry-routes', category: 'explore', title: 'Compare three entry routes', details: 'Record duration, cost, eligibility, selection process, placement evidence, and one risk for each route.', dueDays: 7 },
  { key: 'role-day-research', category: 'explore', title: 'Research a real working day', details: 'Use two credible sources and list the recurring tasks, tools, people contact, pressure points, and work setting.', dueDays: 5 },
  { key: 'career-reality-check', category: 'explore', title: 'Complete a career reality check', details: 'Compare the attractive image of the career with routine work, training length, early salary, location, and progression.', dueDays: 7 },
  { key: 'course-shortlist', category: 'explore', title: 'Shortlist five credible courses', details: 'Include eligibility, curriculum, total cost, location, outcomes, and application dates.', dueDays: 10 },
  { key: 'college-comparison', category: 'explore', title: 'Compare three colleges or training providers', details: 'Verify accreditation, curriculum, faculty, facilities, internships, outcomes, fees, and refund terms.', dueDays: 10 },
  { key: 'job-description-scan', category: 'explore', title: 'Scan 20 real job descriptions', details: 'Count the most repeated skills, qualifications, tools, experience requirements, and locations.', dueDays: 7 },
  { key: 'salary-demand-check', category: 'explore', title: 'Check demand and early-career pay', details: 'Use multiple current sources; separate typical entry pay from exceptional claims and note regional differences.', dueDays: 7 },
  { key: 'constraint-fit-check', category: 'explore', title: 'Check the option against real constraints', details: 'Compare cost, time, commute, relocation, family responsibilities, health, access, and risk tolerance.', dueDays: 4 },
  { key: 'backup-route-map', category: 'explore', title: 'Map a practical alternative route', details: 'Choose an option that preserves important interests while reducing the main risk of the primary direction.', dueDays: 7 },
  { key: 'beginner-course-sample', category: 'learn', title: 'Complete a beginner course sample', details: 'Study for at least two focused hours, complete the exercise, and record what felt energising or draining.', dueDays: 7 },
  { key: 'skill-practice-plan', category: 'learn', title: 'Create a four-week skill practice plan', details: 'Set a weekly target, practice task, evidence item, feedback source, and review date.', dueDays: 4 },
  { key: 'foundation-topic', category: 'learn', title: 'Learn one foundation topic', details: 'Choose a topic that appears repeatedly in course curricula or job descriptions and explain it in your own words.', dueDays: 7 },
  { key: 'tool-tutorial', category: 'learn', title: 'Finish one role-relevant tool tutorial', details: 'Recreate the example independently and save the result as evidence.', dueDays: 7 },
  { key: 'weekly-reading', category: 'learn', title: 'Start a weekly industry reading habit', details: 'Read two credible pieces each week and keep a short note on trends, terminology, and open questions.', dueDays: 14 },
  { key: 'mini-project', category: 'build', title: 'Complete a small role simulation', details: 'Use a realistic brief, deadline, and definition of done. Keep the final output and a short reflection.', dueDays: 10 },
  { key: 'portfolio-piece', category: 'build', title: 'Create one portfolio work sample', details: 'Show the problem, process, decisions, final output, feedback, and what you would improve.', dueDays: 14 },
  { key: 'case-analysis', category: 'build', title: 'Write a one-page case analysis', details: 'Define the problem, evidence, options, recommendation, trade-offs, and next test.', dueDays: 7 },
  { key: 'volunteer-project', category: 'build', title: 'Take a small volunteer responsibility', details: 'Choose work that uses a target skill and ask the organiser to confirm the outcome or provide feedback.', dueDays: 21 },
  { key: 'competition-entry', category: 'build', title: 'Enter a relevant challenge or competition', details: 'Submit a complete entry and record what the judging criteria reveal about the field.', dueDays: 21 },
  { key: 'professional-interviews', category: 'connect', title: 'Conduct two informational interviews', details: 'Ask about daily work, entry routes, early mistakes, hiring evidence, progression, and who should avoid the field.', dueDays: 10 },
  { key: 'alumni-conversation', category: 'connect', title: 'Speak with an alumnus or recent entrant', details: 'Focus on the transition from study to first work and what they wish they had tested earlier.', dueDays: 10 },
  { key: 'workplace-visit', category: 'connect', title: 'Arrange a workplace visit or observation', details: 'Observe the environment, pace, tools, teamwork, customer contact, and less-visible routine work.', dueDays: 21 },
  { key: 'mentor-feedback', category: 'connect', title: 'Request feedback from a practitioner', details: 'Share one work sample and ask for the top two strengths, top two gaps, and next practice task.', dueDays: 10 },
  { key: 'network-map', category: 'connect', title: 'Build a ten-person learning network', details: 'Include peers, seniors, educators, practitioners, alumni, and one professional body or community.', dueDays: 14 },
  { key: 'resume-tailor', category: 'apply', title: 'Tailor the resume for one target role', details: 'Use evidence from the role description; remove generic claims and quantify relevant outcomes.', dueDays: 5 },
  { key: 'portfolio-publish', category: 'apply', title: 'Publish a focused portfolio', details: 'Include three strongest evidence items, clear context, your contribution, outcome, and contact information.', dueDays: 14 },
  { key: 'internship-shortlist', category: 'apply', title: 'Shortlist ten realistic internships', details: 'Track eligibility, deadline, contact, required evidence, status, and a tailored next action.', dueDays: 7 },
  { key: 'application-submit', category: 'apply', title: 'Submit one high-quality application', details: 'Tailor every section, proofread, save the version, and schedule a follow-up date.', dueDays: 5 },
  { key: 'mock-interview', category: 'apply', title: 'Complete a recorded mock interview', details: 'Answer role-specific questions, review the recording, and improve two specific behaviours.', dueDays: 7 },
  { key: 'decision-scorecard', category: 'decide', title: 'Complete a weighted decision scorecard', details: 'Score fit, interest, ability, opportunity, cost, time, constraints, reversibility, and evidence quality.', dueDays: 5 },
  { key: 'primary-focus-decision', category: 'decide', title: 'Choose the primary focus percentage', details: 'Commit 50-90% of available effort to the primary direction and reserve the remainder for deliberate alternatives.', dueDays: 3 },
  { key: 'option-elimination', category: 'decide', title: 'Rule out one option with evidence', details: 'State the evidence, trade-off, and condition that could justify revisiting the option later.', dueDays: 5 },
  { key: 'decision-conversation', category: 'decide', title: 'Hold a family decision conversation', details: 'Share evidence, constraints, cost, timeline, risks, alternatives, and the next review point.', dueDays: 7 },
  { key: 'ninety-day-plan', category: 'decide', title: 'Write a 90-day execution plan', details: 'Set monthly outcomes, weekly commitments, evidence milestones, support needed, and review dates.', dueDays: 5 },
];

export const sessionPresets: SessionPreset[] = [
  { key: 'cohort-orientation', group: 'Start well', sessionType: 'orientation', topic: 'Cohort orientation and coaching agreement', agenda: 'Purpose, roles, confidentiality, participation norms, coaching rhythm, support routes, and the first commitment.', preparation: 'Bring one career question and one practical constraint you want the group to understand.', durationMinutes: 60 },
  { key: 'decision-context', group: 'Start well', sessionType: 'orientation', topic: 'Your decision context: goals, constraints, and support', agenda: 'Goals, available time, budget, location, family context, access, non-negotiables, and decision deadlines.', preparation: 'Update your dashboard context before the session.', durationMinutes: 75 },
  { key: 'interest-energy', group: 'Understand yourself', sessionType: 'self-discovery', topic: 'Interest, energy, and meaningful work patterns', agenda: 'Review energising activities, recurring curiosity, preferred problems, work settings, and evidence from real experiences.', preparation: 'Bring three activities that absorbed your attention and three that consistently drained it.', durationMinutes: 60 },
  { key: 'strength-evidence', group: 'Understand yourself', sessionType: 'self-discovery', topic: 'Strengths backed by evidence', agenda: 'Separate claims from evidence, map observed strengths, identify transferability, and choose one skill to verify next.', preparation: 'Bring two pieces of feedback and one work sample or achievement.', durationMinutes: 60 },
  { key: 'values-tradeoffs', group: 'Understand yourself', sessionType: 'self-discovery', topic: 'Values, trade-offs, and non-negotiables', agenda: 'Income, stability, autonomy, impact, mastery, status, lifestyle, location, risk, and acceptable trade-offs.', preparation: 'Rank your five most important work values and note where family expectations differ.', durationMinutes: 75 },
  { key: 'career-families', group: 'Explore options', sessionType: 'career-discovery', topic: 'Career families beyond familiar job titles', agenda: 'Explore broad sectors, role families, work environments, entry routes, adjacent careers, and less-visible opportunities.', preparation: 'Choose three sectors you know little about but are willing to inspect.', durationMinutes: 75 },
  { key: 'career-reality', group: 'Explore options', sessionType: 'career-options', topic: 'Career reality: routine work, pressure, and progression', agenda: 'Compare the public image with daily tasks, early-career work, pressure, training, pay, location, and progression.', preparation: 'Bring one job description and one credible day-in-the-life source.', durationMinutes: 60 },
  { key: 'education-routes', group: 'Explore options', sessionType: 'career-options', topic: 'Degrees, diplomas, certifications, and alternative routes', agenda: 'Eligibility, curriculum, duration, cost, accreditation, outcomes, apprenticeships, and route flexibility.', preparation: 'Shortlist two routes for one career option.', durationMinutes: 75 },
  { key: 'future-demand', group: 'Explore options', sessionType: 'career-options', topic: 'Demand, technology change, and transferable skills', agenda: 'Demand signals, task change, geographic variation, automation exposure, durable skills, and evidence quality.', preparation: 'Collect three current demand signals from credible sources.', durationMinutes: 60 },
  { key: 'primary-alternative', group: 'Make decisions', sessionType: 'decision-planning', topic: 'Choose a primary direction and deliberate alternatives', agenda: 'Review evidence, select one primary focus, allocate 50-90% effort, define alternatives, and set review conditions.', preparation: 'Complete the option scorecard and propose an effort split.', durationMinutes: 75 },
  { key: 'decision-scorecard', group: 'Make decisions', sessionType: 'decision-planning', topic: 'Evidence-based career option scorecard', agenda: 'Weight fit, ability, opportunity, constraints, cost, time, risk, reversibility, and current evidence.', preparation: 'Bring two to four options with at least one real-world test each.', durationMinutes: 75 },
  { key: 'family-alignment', group: 'Make decisions', sessionType: 'parent-briefing', topic: 'Family alignment without losing student ownership', agenda: 'Shared goals, evidence, concerns, finances, safety, timelines, alternatives, and the next review checkpoint.', preparation: 'Student and family each bring top three hopes and top three concerns.', durationMinutes: 75 },
  { key: 'skill-gap-map', group: 'Build capability', sessionType: 'skill-building', topic: 'Skill gap map for the primary direction', agenda: 'Identify core, important, and useful skills; rate current evidence; choose weekly practice and proof.', preparation: 'Bring three target-role descriptions or course curricula.', durationMinutes: 75 },
  { key: 'proof-of-work', group: 'Build capability', sessionType: 'skill-building', topic: 'Build proof of work, not just certificates', agenda: 'Projects, work samples, feedback, volunteering, competitions, documentation, and portfolio quality.', preparation: 'Bring one existing output that could become evidence.', durationMinutes: 60 },
  { key: 'communication-clinic', group: 'Build capability', sessionType: 'skill-building', topic: 'Communication clinic: explain your work clearly', agenda: 'Concise introductions, project explanation, questioning, listening, feedback, and improvement practice.', preparation: 'Prepare a 90-second explanation of one project or interest.', durationMinutes: 60 },
  { key: 'research-clinic', group: 'Build capability', sessionType: 'skill-building', topic: 'Career research and source evaluation clinic', agenda: 'Search strategy, source quality, salary claims, outcome data, bias, synthesis, and documenting uncertainty.', preparation: 'Bring one confusing or contradictory career claim.', durationMinutes: 60 },
  { key: 'networking-practice', group: 'Build capability', sessionType: 'skill-building', topic: 'Professional networking without awkwardness', agenda: 'Who to contact, respectful outreach, informational interviews, follow-up, reciprocity, and network tracking.', preparation: 'Draft one outreach message to a real person.', durationMinutes: 60 },
  { key: 'industry-guest', group: 'Experience work', sessionType: 'industry-exposure', topic: 'Industry practitioner conversation', agenda: 'Daily work, entry routes, hiring evidence, early mistakes, progression, pressure, inclusion, and student questions.', preparation: 'Research the guest and submit one non-generic question.', durationMinutes: 75 },
  { key: 'role-simulation-review', group: 'Experience work', sessionType: 'industry-exposure', topic: 'Role simulation and work-sample review', agenda: 'Brief, approach, output review, peer critique, practitioner standard, and next iteration.', preparation: 'Complete the assigned mini-project before the session.', durationMinutes: 90 },
  { key: 'application-system', group: 'Execute', sessionType: 'execution', topic: 'Build an application and deadline tracking system', agenda: 'Target list, eligibility, evidence, tailoring, deadlines, follow-up, status, and weekly review.', preparation: 'Bring five real opportunities and their deadlines.', durationMinutes: 60 },
  { key: 'resume-portfolio', group: 'Execute', sessionType: 'execution', topic: 'Resume, portfolio, and evidence alignment', agenda: 'Target role, strongest evidence, outcome statements, portfolio order, gaps, and next improvement.', preparation: 'Bring the current resume and one target opportunity.', durationMinutes: 75 },
  { key: 'interview-lab', group: 'Execute', sessionType: 'execution', topic: 'Interview and selection practice lab', agenda: 'Role questions, behavioural evidence, problem solving, group discussion, feedback, and practice plan.', preparation: 'Prepare three evidence stories using situation, action, and result.', durationMinutes: 90 },
  { key: 'monthly-review', group: 'Review progress', sessionType: 'progress-review', topic: 'Monthly cohort progress review', agenda: 'Wins, evidence created, actions completed, blockers, focus allocation, peer support, and next commitments.', preparation: 'Update options, skills, actions, and evidence in the dashboard.', durationMinutes: 60 },
  { key: 'quarterly-reset', group: 'Review progress', sessionType: 'progress-review', topic: 'Quarterly direction and execution reset', agenda: 'Review evidence, primary fit, alternative relevance, capability growth, constraints, outcomes, and the next 90 days.', preparation: 'Bring the strongest evidence and the most important unanswered question from the quarter.', durationMinutes: 90 },
];

export const cohortPresets: CohortPreset[] = [
  { key: 'career-foundations', label: 'Career Foundations', programTrack: 'career-foundations', coachingStage: 'mixed', deliveryMode: 'hybrid', capacity: 30, scheduleNote: 'Two group sessions per month with weekly action follow-through.', description: 'A broad coaching cohort for students building self-understanding, career awareness, decision habits, and foundational skills.' },
  { key: 'stream-selection', label: 'Class 9-10 Stream Selection', programTrack: 'stream-selection', coachingStage: 'career-exploration', deliveryMode: 'hybrid', capacity: 25, scheduleNote: 'Fortnightly group coaching through the stream decision period.', description: 'For students comparing subject streams, learning preferences, career families, academic requirements, and practical constraints.' },
  { key: 'class-11-12', label: 'Class 11-12 Career Direction', programTrack: 'college-and-course', coachingStage: 'option-validation', deliveryMode: 'hybrid', capacity: 30, scheduleNote: 'Two sessions per month plus deadline and application checkpoints.', description: 'For career option validation, course and college research, entrance routes, alternative plans, and skill evidence.' },
  { key: 'college-course', label: 'College and Course Decisions', programTrack: 'college-and-course', coachingStage: 'decision', deliveryMode: 'online', capacity: 35, scheduleNote: 'Weekly during active admission windows; fortnightly otherwise.', description: 'A decision cohort focused on credible provider comparison, affordability, outcomes, applications, and backup routes.' },
  { key: 'graduate-launch', label: 'Graduate Career Launch', programTrack: 'career-launch', coachingStage: 'execution', deliveryMode: 'online', capacity: 30, scheduleNote: 'Weekly execution lab with a monthly direction review.', description: 'For internships, first-job search, portfolio evidence, networking, applications, interviews, and early-career choices.' },
  { key: 'engineering-options', label: 'Engineering Career Options', programTrack: 'career-launch', coachingStage: 'career-exploration', deliveryMode: 'online', capacity: 35, scheduleNote: 'Fortnightly sector exploration plus role simulations.', description: 'For engineering students comparing technical, product, analytics, operations, research, management, and non-core pathways.' },
  { key: 'commerce-professional', label: 'Commerce and Professional Routes', programTrack: 'college-and-course', coachingStage: 'option-validation', deliveryMode: 'online', capacity: 35, scheduleNote: 'Fortnightly qualification and career comparison sessions.', description: 'For CA, CMA, CS, finance, economics, business, banking, analytics, and alternative professional routes.' },
  { key: 'exam-alternatives', label: 'Competitive Exams and Alternatives', programTrack: 'exam-and-alternatives', coachingStage: 'decision', deliveryMode: 'online', capacity: 30, scheduleNote: 'Monthly direction review with fortnightly alternative-plan work.', description: 'For realistic exam planning, attempt limits, parallel skills, backup routes, wellbeing, and decision checkpoints.' },
  { key: 'career-transition', label: 'Career Transition', programTrack: 'career-transition', coachingStage: 'option-validation', deliveryMode: 'online', capacity: 20, scheduleNote: 'Fortnightly coaching with weekly transition actions.', description: 'For working professionals testing a change, translating experience, closing skill gaps, managing risk, and executing a transition.' },
  { key: 'portfolio-lab', label: 'Portfolio and Proof-of-Work Lab', programTrack: 'custom', coachingStage: 'execution', deliveryMode: 'online', capacity: 20, scheduleNote: 'Weekly working session with peer and coach feedback.', description: 'A focused execution cohort for projects, work samples, case studies, documentation, critique, and portfolio publication.' },
];

export const nonNegotiablePresets = [
  'Affordable without high debt', 'Can continue living at home', 'Accessible by public transport',
  'No relocation for now', 'Family responsibilities must continue', 'Predictable working hours',
  'Health-compatible schedule', 'Accessible learning environment', 'Strong job placement evidence',
  'Recognised accreditation', 'Earn while learning', 'Option to work remotely',
  'Work aligned with personal values', 'Clear backup route', 'Can change direction later',
];

export const examTargetPresets = [
  'JEE Main', 'JEE Advanced', 'NEET UG', 'CUET UG', 'CLAT', 'NATA', 'UCEED', 'NID DAT',
  'IPMAT', 'CA Foundation', 'CMA Foundation', 'CSEET', 'CAT', 'XAT', 'CMAT', 'GATE',
  'UPSC CSE', 'State PSC', 'SSC CGL', 'Banking exams', 'IELTS', 'TOEFL', 'GRE', 'GMAT',
];
