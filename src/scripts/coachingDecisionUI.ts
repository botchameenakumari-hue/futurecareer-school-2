import {
  careerGuideFor,
  decisionSignalOptions,
  evidenceStrengthOptions,
  guidedCareerPresets,
  recommendedSkillPacks,
  skillPackItems,
  skillPacks,
  type CareerGuide,
  type SkillPack,
  type SkillScope,
} from '../data/coachingPlaybooks';
import { skillProgressionFor, type SkillLevelGuidance, type SkillPreset } from '../data/coachingPresets';

type Row = Record<string, any>;

export type DecisionUiContext = {
  escapeHtml: (value: unknown) => string;
  formatDate: (value: unknown, includeTime?: boolean) => string;
  formatStatus: (value: unknown) => string;
  userId: string;
  viewerRole: string;
  skillReviews?: Row[];
  profileById?: (id: unknown) => Row | null;
};

const satisfactionLabels = ['Not rated', 'Starting point', 'Early progress', 'Building', 'Developing', 'On track', 'Growing confidence', 'Strong', 'Very strong', 'Advanced', 'Ready to stretch'];

export const scopeLabels: Record<SkillScope, string> = {
  foundation: 'Core skills',
  'career-specific': 'Career-specific skills',
  'future-ready': 'Future-ready',
  employability: 'Employability',
  'personal-effectiveness': 'Personal effectiveness',
};

const studentScopeLabels: Record<SkillScope, string> = {
  foundation: 'Core skills',
  'career-specific': 'Career-specific skills',
  'future-ready': 'Skills for change',
  employability: 'Work skills',
  'personal-effectiveness': 'Ways of working',
};

// A skill title is often not enough context for a learner seeing it for the
// first time. Keep these explanations short, concrete, and independent of a
// particular career so the same card remains useful when the learner changes
// direction. The category fallback below also means custom and newly added
// skills always get a plain-language explanation.
const skillMeaningByName: Record<string, string> = {
  'high agency': 'Taking the next useful step without waiting to be told, while asking for help when you need it.',
  'project habits and finishing things': 'Breaking work into small steps, tracking commitments, and completing what you start.',
  'problem framing': 'Turning a vague situation into a clear question, goal, and set of constraints.',
  'systems thinking': 'Seeing how parts, people, and decisions affect one another over time.',
  'commercial awareness': 'Understanding how an organisation creates value, serves customers, and manages costs.',
  'data literacy': 'Reading, questioning, and explaining data without treating every number as a fact.',
  'source evaluation': 'Checking who made a claim, what evidence supports it, and what remains uncertain.',
  'source checking': 'Verifying the author, date, evidence, and reliability of information before using it.',
  'prompt and output evaluation': 'Giving clear instructions to AI tools and checking their output before using it.',
  'ai tool literacy': 'Choosing AI tools appropriately and using them with privacy, accuracy, and human judgement.',
  'security and privacy basics': 'Protecting accounts and personal information through safer settings, passwords, and sharing choices.',
  'personal ownership': 'Taking responsibility for a result, communicating early, and following through.',
  'decision ownership': 'Making a reasoned choice, recording the trade-offs, and standing behind the next step.',
  'stakeholder management': 'Keeping the people affected by the work informed, aligned, and able to respond.',
  'root-cause analysis': 'Finding the underlying reason a problem keeps happening instead of treating only the symptom.',
  'critical thinking': 'Testing assumptions and comparing evidence before reaching a conclusion.',
  'adaptability': 'Adjusting your approach when requirements, tools, or circumstances change.',
  'resilience and handling rejection': 'Recovering from setbacks, learning from feedback, and trying a better next step.',
  'professional ethics': 'Making responsible choices about honesty, privacy, safety, fairness, and conflicts of interest.',
  'project management': 'Planning scope, time, people, risks, and hand-offs so work reaches a clear finish.',
  'project completion': 'Turning an intention into a finished, usable result that someone else can review.',
  'financial literacy': 'Understanding everyday money decisions, risk, interest, and trade-offs.',
  'personal money safety': 'Protecting your income and data while checking contracts, costs, and scams.',
  'quality assurance': 'Using checks and tests to make sure work is accurate, safe, and fit for purpose.',
  'design thinking': 'Learning what people need, testing ideas, and improving the solution through feedback.',
  'digital collaboration': 'Using shared tools and clear updates so people can work together across places and time zones.',
  'internet search': 'Finding useful information with precise queries, then checking whether the sources deserve trust.',
  'web literacy': 'Understanding how websites, links, permissions, and online claims work so you can navigate safely.',
  'professional networking': 'Building genuine work relationships by offering value, asking thoughtful questions, and staying in touch.',
  'portfolio building': 'Selecting and explaining a small set of work samples that prove what you can do.',
  'attention to detail': 'Noticing small errors, missing requirements, and inconsistencies before they cause problems.',
  'learning how to learn': 'Choosing a practice method, using feedback, and adjusting until understanding improves.',
  'reflective learning': 'Looking back at what happened, what you learned, and what you will change next time.',
  'asynchronous communication': 'Writing updates that stand on their own so people can respond well without being online together.',
  'data interpretation': 'Turning numbers into a careful explanation of patterns, limits, and what decision they support.',
  'scenario planning': 'Exploring several plausible futures so you can prepare useful choices instead of betting on one forecast.',
  'risk assessment': 'Identifying what could go wrong, how likely or harmful it is, and what reduces the risk.',
  'digital analytics': 'Using digital activity data to understand behaviour, test changes, and avoid misleading conclusions.',
  'api literacy': 'Understanding how software services exchange requests and data, including permissions and failure cases.',
  'no-code automation': 'Connecting tools to remove repetitive steps while checking permissions, errors, and ownership.',
  'cloud fundamentals': 'Understanding shared online computing, storage, access, reliability, and cost at a practical level.',
  'cloud literacy': 'Choosing and using online services with a basic grasp of security, availability, and cost trade-offs.',
  'crm fundamentals': 'Keeping customer or stakeholder information organised so follow-up is timely, useful, and respectful.',
  'machine learning fundamentals': 'Understanding how models learn from data, where they fail, and how to evaluate them.',
  'statistical thinking': 'Using variation, uncertainty, and comparison to avoid overclaiming from a small set of data.',
  'policy analysis': 'Comparing policy options, evidence, affected groups, and implementation trade-offs before advising.',
  'version control with git': 'Recording changes to files so you can collaborate safely, review history, and recover earlier work.',
  'git and version control': 'Tracking and reviewing changes so work can be combined, audited, and restored safely.',
  'ai agent workflow design': 'Designing a multi-step AI workflow with clear tools, checks, permissions, and human hand-offs.',
  'ai governance and model risk': 'Setting controls to monitor AI accuracy, bias, privacy, security, cost, and accountability.',
  'finops and cloud cost control': 'Connecting cloud usage to budgets and value so teams can reduce waste without harming reliability.',
  'data structures and algorithms basics': 'Choosing simple ways to organise information and solve a problem efficiently.',
  'pandas data analysis': 'Cleaning and analysing tabular data with repeatable code and checks for missing or incorrect values.',
  'matplotlib data visualisation': 'Choosing clear charts that reveal a pattern without hiding uncertainty or distorting scale.',
  'hugging face model workflow': 'Finding, adapting, and evaluating shared machine-learning models with attention to licences and limits.',
  'smart contract fundamentals': 'Understanding code that executes agreements on a blockchain, including state, security, and irreversible errors.',
  'legal technology operations': 'Using systems to manage legal information and workflows while protecting confidentiality and traceability.',
  'supply chain technology': 'Using digital tools and data to coordinate suppliers, inventory, movement, and resilience.',
  'instructional design': 'Turning a learning goal into activities, practice, feedback, and evidence of progress.',
  'technical b2b sales': 'Helping organisations evaluate a technical solution by connecting needs, evidence, value, and trust.',
  'editorial judgement': 'Deciding what is accurate, relevant, clear, and responsible before publishing or sharing.',
  'brand thinking': 'Making consistent choices about promise, audience, voice, and experience across touchpoints.',
  'spatial design': 'Planning how people, objects, movement, and atmosphere work together in a physical or digital space.',
  'growth mindset': 'Treating ability as improvable through practice, useful feedback, and better strategies.',
  'ethical leadership': 'Using responsibility and influence fairly, especially when decisions affect other people.',
  'change management': 'Helping people move from a current way of working to a new one with clear reasons and support.',
  'resource planning': 'Matching time, people, money, and tools to priorities while making constraints visible.',
  'computer and phone literacy': 'Using everyday devices, files, settings, and common apps safely enough to complete a task and get help when something goes wrong.',
  'computer fundamentals': 'Understanding files, folders, networks, devices, and basic troubleshooting so digital work is organised and recoverable.',
  'typing fluency': 'Entering text accurately and comfortably so your attention can stay on the idea or task rather than the keyboard.',
  'online research': 'Finding information with focused searches, comparing credible sources, and recording what supports your conclusion.',
  'word processing': 'Creating a readable document with structure, formatting, revisions, and accessible sharing settings.',
  'spreadsheet fundamentals': 'Organising rows and columns, using simple formulas, and checking a sheet before relying on its result.',
  'advanced spreadsheets': 'Building a maintainable model with linked formulas, validation, scenarios, and clear documentation of assumptions.',
  'presentation software': 'Turning an idea into a clear visual story with purposeful slides, readable design, and speaker notes.',
  'data privacy': 'Collecting and sharing only the information needed, with appropriate consent, access, storage, and deletion choices.',
  'online safety': 'Recognising scams, unsafe links, oversharing, and account risks, then choosing safer behaviour and settings.',
  'cybersecurity awareness': 'Spotting common security threats and following practical habits that protect accounts, devices, and other people.',
  'basic ai usage': 'Using an AI tool for a small task while checking its accuracy, privacy implications, and suitability before acting on the output.',
  'sql fundamentals': 'Asking a database for the right records with simple queries, filters, joins, and checks for missing or duplicated data.',
  'python fundamentals': 'Writing small, readable Python programs with variables, control flow, functions, and basic error checking.',
  'data visualisation': 'Choosing a chart and annotation that make a real pattern easier to see without hiding scale or uncertainty.',
  'web publishing': 'Putting a page or resource online with clear structure, accessible content, working links, and safe update habits.',
  'cad fundamentals': 'Reading and creating precise digital drawings while respecting dimensions, layers, standards, and revision control.',
  'gis fundamentals': 'Using maps and location data to explore patterns while checking coordinate systems, source quality, and privacy.',
  'design software fundamentals': 'Using the core tools of a design application to create, edit, export, and organise a purposeful asset.',
  'video editing fundamentals': 'Assembling clips, sound, titles, and transitions into a coherent short story that serves its audience.',
  'api fundamentals': 'Understanding how one software service requests and receives data from another, including authentication and failure cases.',
  'electrical safety': 'Working around electricity by identifying hazards, isolating power, using protective equipment, and following approved procedures.',
  'clinical documentation': 'Recording observations and decisions accurately so care remains safe, coordinated, confidential, and reviewable.',
  'legal research': 'Finding and checking relevant authorities, separating facts from interpretation, and explaining how the evidence applies.',
  'financial-market awareness': 'Understanding how markets, rates, risk, liquidity, and information affect financial decisions without treating forecasts as certainty.',
  'public-policy awareness': 'Recognising how public decisions are made, who is affected, and how rules shape practical outcomes.',
  'manufacturing awareness': 'Understanding how materials, machines, quality checks, safety, and flow combine to produce a reliable product.',
  'agricultural value-chain knowledge': 'Seeing how a crop or food product moves from inputs and production through processing, markets, and the customer.',
  'hospitality operations knowledge': 'Understanding how service, staffing, supplies, hygiene, timing, and guest experience fit together during a shift.',
  'entrepreneurship fundamentals': 'Identifying a real need, testing a small offer, and learning whether customers value it before spending heavily.',
  'portfolio curation': 'Selecting and explaining work samples so a reviewer can quickly see your contribution, decisions, and improvement.',
  'user experience design': 'Understanding user needs and testing a flow so a product is useful, clear, accessible, and easier to complete.',
  'fashion illustration': 'Communicating a garment idea through proportion, material, colour, and construction details that another person can interpret.',
  'performance marketing': 'Testing messages and channels against a clear goal, then using reliable data to improve results without misleading claims.',
  'project leadership': 'Helping people agree on the outcome, ownership, risks, and next steps while keeping delivery and learning visible.',
  'inclusive leadership': 'Designing participation and decisions so different people can contribute, be respected, and receive fair support.',
  'workplace etiquette': 'Using considerate, dependable behaviour around time, communication, boundaries, confidentiality, and shared spaces.',
  'remote work discipline': 'Making priorities, availability, progress, and hand-offs visible when people are working across places or schedules.',
  'personal branding': 'Showing a truthful, focused picture of your interests and evidence so the right people understand what you can contribute.',
  'cv writing': 'Summarising relevant evidence and outcomes clearly so a reader can understand your fit without guessing.',
  'linkedin profile building': 'Presenting a clear professional profile with honest evidence, useful keywords, and respectful networking behaviour.',
  'goal setting': 'Choosing a specific outcome, a realistic measure, and the next action that turns an intention into progress.',
  'self-awareness': 'Recognising your strengths, limits, values, and patterns so you can choose better support and next steps.',
  'professional pronunciation': 'Speaking key words clearly and appropriately for the audience without losing your natural voice.',
  'deep work and focus': 'Protecting a short block of attention for one demanding task and returning to it when distractions appear.',
  'personal productivity': 'Choosing a small set of priorities, organising your time, and finishing useful work without relying on last-minute effort.',
  'school-level mathematics': 'Using everyday arithmetic, proportions, graphs, and estimation to check whether an answer makes sense.',
  'career research': 'Finding out what a role really involves, how people enter it, and what evidence employers or courses expect.',
  'job search strategy': 'Finding suitable openings, tailoring evidence to each one, and tracking follow-up instead of applying randomly.',
  'internship search': 'Finding a credible learning placement, checking what support it offers, and approaching organisations professionally.',
  'role knowledge': 'Knowing the recurring tasks, decisions, tools, and standards that make a particular role useful.',
  'industry knowledge': 'Understanding how a sector serves people, earns or allocates money, and is being changed by technology or rules.',
  'customer understanding': 'Learning what a person needs, values, and struggles with before proposing a product, service, or solution.',
  'regulatory awareness': 'Recognising the rules, approvals, and responsibilities that shape safe and lawful work in a field.',
  'safety awareness': 'Noticing hazards early and following the agreed controls before a task, tool, or environment can cause harm.',
  'sustainability awareness': 'Considering resource use, waste, environmental impact, and long-term consequences when making a work decision.',
  'healthcare awareness': 'Understanding basic care settings, patient dignity, confidentiality, and why safe processes matter.',
  'education-system knowledge': 'Understanding how schools, courses, qualifications, admissions, and learner support fit together.',
  'media-industry knowledge': 'Understanding how media is commissioned, produced, distributed, funded, and judged by an audience.',
  'academic english': 'Reading and writing clear formal English for learning, evidence, and structured explanation.',
  'business english': 'Using clear, polite English for workplace updates, proposals, meetings, and decisions.',
  'hindi communication': 'Using Hindi clearly and appropriately to understand people, explain ideas, and complete real tasks.',
  'regional language proficiency': 'Using a local language accurately enough to build trust, exchange information, and serve a community.',
  'foreign language proficiency': 'Using another language in realistic conversations and written tasks while adapting to cultural context.',
  'translation': 'Carrying meaning accurately from one language to another while preserving purpose, tone, and important detail.',
  'interpretation': 'Helping people understand spoken meaning across languages in real time without adding or hiding information.',
  'vocabulary development': 'Learning and using precise words so your explanations, questions, and writing are easier to understand.',
  'reading comprehension': 'Identifying the main claim, supporting evidence, assumptions, and implications in a piece of writing.',
  'resilience': 'Recovering after difficulty, using what happened to adjust your approach, and taking the next constructive step.',
  'active listening': 'Giving someone your full attention, checking what you understood, and responding to what they actually said.',
  'question asking': 'Asking focused, respectful questions that uncover a need, assumption, constraint, or useful next step.',
  'giving and receiving feedback': 'Offering specific observations and using feedback to improve without treating it as a personal verdict.',
  'conflict resolution': 'Making disagreement discussable, understanding each side, and helping people agree on a workable way forward.',
  'facilitation': 'Designing and guiding a conversation so people contribute, decisions are clear, and the group leaves with ownership.',
  'meeting communication': 'Preparing, contributing, and recording decisions so a meeting produces shared understanding and follow-through.',
  'quantitative reasoning': 'Using numbers, units, proportions, and estimates to compare options and spot an unreasonable conclusion.',
  'research skills': 'Turning a question into a search plan, collecting useful sources, and recording evidence and uncertainty.',
  'decision making': 'Comparing options against clear criteria, acknowledging trade-offs, and choosing a next step you can review.',
  'logical reasoning': 'Connecting claims and evidence step by step so conclusions follow from what is actually known.',
  'experimental thinking': 'Changing one useful variable, observing the result, and learning from evidence instead of guessing.',
  'clear writing': 'Explaining one idea in organised, readable words so another person can understand and act on it.',
  'clear speaking': 'Explaining an idea out loud with a clear point, useful structure, and a check that the listener followed.',
  'professional email writing': 'Writing a concise email with a clear purpose, context, requested action, and respectful tone.',
  'presentation skills': 'Structuring and delivering a visual explanation that helps an audience remember the important point.',
  'public speaking': 'Speaking to a group with enough preparation, structure, and presence to keep the message understandable.',
  'interview communication': 'Answering questions with specific evidence, listening carefully, and asking a useful question in return.',
  'group discussion': 'Building on other people’s ideas, disagreeing respectfully, and helping a group reach a clear conclusion.',
  'storytelling': 'Using a beginning, change, and outcome to make an experience or idea meaningful to a particular audience.',
  'negotiation': 'Finding a workable agreement by understanding needs, constraints, trade-offs, and what each person can commit to.',
  'persuasion': 'Helping someone consider a change by connecting a credible reason and evidence to what they care about.',
  'client communication': 'Clarifying a client’s need, setting expectations, and keeping them informed about decisions and progress.',
  'cross-cultural communication': 'Adapting language, assumptions, and behaviour so people from different backgrounds can work with trust.',
  'technical communication': 'Making a technical process or decision understandable through accurate explanations, diagrams, and examples.',
  'programming logic': 'Breaking a problem into ordered steps, conditions, and reusable rules that a computer can execute.',
  'software testing': 'Checking a program against expected behaviour, edge cases, and failure conditions before users depend on it.',
  'database design': 'Organising related information so it can be stored consistently, found efficiently, and changed safely.',
  'network fundamentals': 'Understanding how devices, addresses, protocols, and connections move information and where failures can occur.',
  'cybersecurity operations': 'Monitoring systems, investigating suspicious activity, and reducing security risk through repeatable controls.',
  'accounting fundamentals': 'Recording and interpreting transactions so a person or organisation can understand its financial position.',
  'financial modelling': 'Turning assumptions into a transparent spreadsheet model that compares scenarios and supports a decision.',
  'bookkeeping': 'Keeping accurate, organised records of income, costs, invoices, and payments so accounts can be checked.',
  'laboratory technique': 'Following a repeatable lab procedure with clean handling, accurate measurement, safety, and reliable records.',
  'scientific measurement': 'Collecting observations with appropriate units, instruments, controls, and an honest account of uncertainty.',
  'engineering drawing': 'Communicating a design precisely through dimensions, views, symbols, tolerances, and revision information.',
  '3d modelling': 'Building a manipulable digital representation of an object or space with correct form, scale, and construction detail.',
  'mechanical fabrication': 'Making or assembling a physical part accurately while choosing materials, tools, tolerances, and safety checks.',
  'project scheduling': 'Putting work in a realistic order with owners, dependencies, milestones, and enough time for review.',
  'supply chain planning': 'Matching demand, stock, suppliers, transport, and risk so goods or services arrive when needed.',
  'market research': 'Learning what a defined group needs and how alternatives perform by collecting and comparing useful evidence.',
  'seo execution': 'Improving a page’s structure, content, and discoverability for a search intent while measuring qualified visits.',
  'visual design': 'Arranging type, colour, space, and imagery so information is clear, consistent, and suited to its audience.',
  'idea generation': 'Creating several possible approaches before judging them against the real goal and constraints.',
  'creative problem solving': 'Reframing a challenge and developing original options that are useful, testable, and appropriate for the context.',
  'sketching': 'Using quick marks to explore shape, proportion, movement, and alternatives before committing to a finished piece.',
  'photography': 'Using light, framing, focus, and timing to communicate a subject or story intentionally.',
  'video production': 'Planning, recording, and assembling moving image and sound into a coherent piece for a real audience.',
  'animation fundamentals': 'Creating the illusion of movement through timing, spacing, poses, and clear visual storytelling.',
  'content creation': 'Making useful, purposeful material for a defined audience and improving it from response and evidence.',
  'copywriting': 'Choosing words that make a message clear and motivate a specific audience to take an appropriate action.',
  'sound editing': 'Cleaning, arranging, and balancing audio so speech, music, and effects are clear and support the story.',
  'creative direction': 'Setting a coherent visual or editorial vision and guiding choices so the final work serves its purpose.',
  'time management': 'Choosing priorities, estimating effort, and protecting time so important work is completed when promised.',
  'reliability': 'Doing what you said you would do, communicating early when it may change, and leaving work others can use.',
  'note-taking': 'Capturing the key idea, evidence, decision, and next action in a form you can find and use later.',
  'logical thinking': 'Making links between facts and steps explicit so a conclusion can be checked rather than guessed.',
  'reading documentation': 'Finding the relevant instructions, examples, assumptions, and warnings in a technical or formal guide.',
  'interview preparation': 'Learning about the role, selecting evidence, and rehearsing concise answers without pretending to know what you do not.',
  'teamwork': 'Contributing reliably to a shared result while coordinating work, listening, and making hand-offs clear.',
  'delegation': 'Giving the right responsibility, context, authority, and support so another person can own a useful outcome.',
  'coaching others': 'Helping someone improve through questions, specific feedback, practice, and encouragement rather than taking over.',
  'planning and prioritisation': 'Turning competing requests into an ordered plan that makes trade-offs and the next action visible.',
  'volunteer leadership': 'Taking responsible initiative in a community effort while respecting the purpose, people, and available resources.',
  'community leadership': 'Helping a group organise around a shared need, include different voices, and follow through on commitments.',
  'performance conversations': 'Discussing progress and gaps honestly, agreeing support and expectations, and recording the next review point.',
};

function skillMeaningFor(skill: Row) {
  const normalised = String(skill.skill_name || '').trim().toLowerCase();
  const bareName = normalised.replace(/^[^:]{2,80}:\s*/, '').trim();
  if (skillMeaningByName[normalised]) return skillMeaningByName[normalised];
  if (skillMeaningByName[bareName]) return skillMeaningByName[bareName];
  const category = String(skill.category || '').trim().toLowerCase();
  if (category === 'analytical') return 'Using evidence, patterns, and reasoning to make a clearer decision.';
  if (category === 'digital') return 'Using digital tools confidently, safely, and with sound judgement.';
  if (category === 'communication') return 'Helping another person understand, respond, or act through clear communication.';
  if (category === 'technical') return 'Applying a repeatable method or tool to produce a reliable practical result.';
  if (category === 'creative') return 'Making and improving an original response for a real audience or purpose.';
  if (category === 'leadership') return 'Helping people move toward a shared result while taking responsibility for the work.';
  if (category === 'domain') return 'Understanding the subject, setting, and standards that shape this kind of work.';
  if (category === 'language') return 'Using language accurately and appropriately for the people and situation.';
  if (category === 'employability') return 'Turning an intention into dependable action that another person can rely on.';
  return 'A capability you can practise in a real task and strengthen with feedback.';
}

function skillLevelsFor(skill: Row): SkillLevelGuidance[] {
  const supplied = Array.isArray(skill.progression)
    ? skill.progression.filter((item: any) => item && typeof item.level === 'string' && typeof item.example === 'string' && typeof item.advice === 'string')
    : [];
  if (supplied.length >= 3) return supplied.slice(0, 3) as SkillLevelGuidance[];
  const allowed = new Set(['technical', 'digital', 'communication', 'analytical', 'creative', 'leadership', 'domain', 'language', 'employability']);
  const category = String(skill.category || '').trim().toLowerCase();
  return skillProgressionFor(String(skill.skill_name || 'this skill'), (allowed.has(category) ? category : 'employability') as SkillPreset['category']);
}

/**
 * Resolve the learner-facing group for a stored skill row. Older rows may not
 * have `skill_scope`; some also carried role-specific names while being marked
 * as the old `employability` category. A role-prefixed capability is never a
 * portable foundation, so keep it visible as career-specific rather than
 * counting it in Core skills.
 */
export function skillScopeFor(skill: Row): SkillScope {
  const name = String(skill.skill_name || '').trim();
  const roleSpecific = /^[^:]{2,80}:\s+/.test(name) || /\bfor\s+[A-Z][^\n]{2,80}/.test(name);
  const explicit = String(skill.skill_scope || '').toLowerCase();
  if (roleSpecific) return 'career-specific';
  if (['foundation', 'career-specific', 'future-ready', 'employability', 'personal-effectiveness'].includes(explicit)) return explicit as SkillScope;
  return String(skill.category || '').toLowerCase() === 'employability' ? 'foundation' : 'career-specific';
}

const careerFamilyLabels: Record<string, string> = {
  'Technology & Data': 'Technology & software',
  'Engineering & Built Environment': 'Engineering & the built world',
  'Health & Life Sciences': 'Health & life sciences',
  'Commerce, Finance & Economics': 'Finance, business & economics',
  'Business, Marketing & Operations': 'Business, marketing & operations',
  'Design, Media & Creative Arts': 'Design, media & creative work',
  'Law, Government & Public Service': 'Law, government & public service',
  'Education, Psychology & Social Impact': 'Education, psychology & social impact',
  'Science, Research & Environment': 'Science, research & environment',
  'Hospitality, Travel, Sports & Events': 'Hospitality, travel, sport & events',
  'Agriculture, Food & Rural Careers': 'Agriculture, food & rural work',
  'Skilled Trades & Applied Careers': 'Skilled trades & applied work',
  'Languages, International & Emerging Routes': 'Languages, international & emerging work',
  'Future-ready & Cross-functional': 'Emerging & cross-disciplinary work',
};

const familyInterestSignals: Record<string, string[]> = {
  'Technology & Data': ['You enjoy solving puzzles or improving systems', 'You like learning tools and understanding how things work', 'You are comfortable checking details and testing what you build'],
  'Engineering & Built Environment': ['You like making, measuring, or improving physical things', 'You enjoy practical problem solving with clear constraints'],
  'Health & Life Sciences': ['You care about people, health, living systems, or careful investigation', 'You can stay patient with detailed learning and responsibility'],
  'Commerce, Finance & Economics': ['You enjoy numbers, patterns, money, or business decisions', 'You like accuracy and explaining what the figures mean'],
  'Business, Marketing & Operations': ['You like organising people or resources around a result', 'You enjoy understanding customers, markets, or how work flows'],
  'Design, Media & Creative Arts': ['You notice stories, visuals, sound, language, or audience response', 'You enjoy making and improving creative work through feedback'],
  'Law, Government & Public Service': ['You care about fairness, rules, public issues, or argument', 'You enjoy reading carefully and making reasoned decisions'],
  'Education, Psychology & Social Impact': ['You like helping people learn, grow, or solve problems', 'You listen closely and care about people and communities'],
  'Science, Research & Environment': ['You are curious about how the world works', 'You enjoy evidence, experiments, patterns, or the natural environment'],
  'Hospitality, Travel, Sports & Events': ['You enjoy active, social, or service focused environments', 'You like creating experiences and responding calmly in the moment'],
  'Agriculture, Food & Rural Careers': ['You enjoy nature, food, practical work, or community livelihoods', 'You like seeing how products move from source to people'],
  'Skilled Trades & Applied Careers': ['You prefer hands on work and visible results', 'You enjoy diagnosing, fixing, assembling, or operating equipment'],
  'Languages, International & Emerging Routes': ['You enjoy languages, cultures, travel, or connecting people across contexts', 'You are curious about how ideas and work move between places'],
};

const careerInterestFamilies: Record<string, string[]> = {
  people: ['Health & Life Sciences', 'Education, Psychology & Social Impact', 'Business, Marketing & Operations', 'Hospitality, Travel, Sports & Events'],
  systems: ['Technology & Data', 'Engineering & Built Environment', 'Science, Research & Environment'],
  numbers: ['Technology & Data', 'Commerce, Finance & Economics', 'Science, Research & Environment', 'Business, Marketing & Operations'],
  creative: ['Design, Media & Creative Arts', 'Languages, International & Emerging Routes', 'Business, Marketing & Operations'],
  practical: ['Engineering & Built Environment', 'Skilled Trades & Applied Careers', 'Agriculture, Food & Rural Careers'],
  nature: ['Health & Life Sciences', 'Science, Research & Environment', 'Agriculture, Food & Rural Careers'],
  service: ['Law, Government & Public Service', 'Education, Psychology & Social Impact', 'Health & Life Sciences'],
  active: ['Hospitality, Travel, Sports & Events', 'Skilled Trades & Applied Careers', 'Agriculture, Food & Rural Careers'],
  language: ['Languages, International & Emerging Routes', 'Education, Psychology & Social Impact', 'Design, Media & Creative Arts'],
  independent: ['Technology & Data', 'Commerce, Finance & Economics', 'Design, Media & Creative Arts', 'Science, Research & Environment', 'Languages, International & Emerging Routes'],
  collaborative: ['Health & Life Sciences', 'Business, Marketing & Operations', 'Education, Psychology & Social Impact', 'Technology & Data', 'Engineering & Built Environment'],
  structured: ['Commerce, Finance & Economics', 'Law, Government & Public Service', 'Engineering & Built Environment', 'Health & Life Sciences', 'Skilled Trades & Applied Careers'],
  flexible: ['Business, Marketing & Operations', 'Design, Media & Creative Arts', 'Technology & Data', 'Languages, International & Emerging Routes', 'Hospitality, Travel, Sports & Events'],
  earning: ['Technology & Data', 'Engineering & Built Environment', 'Health & Life Sciences', 'Commerce, Finance & Economics', 'Law, Government & Public Service', 'Future-ready & Cross-functional'],
  stability: ['Health & Life Sciences', 'Law, Government & Public Service', 'Education, Psychology & Social Impact', 'Engineering & Built Environment', 'Commerce, Finance & Economics'],
  impact: ['Health & Life Sciences', 'Education, Psychology & Social Impact', 'Law, Government & Public Service', 'Science, Research & Environment', 'Agriculture, Food & Rural Careers'],
  mobility: ['Technology & Data', 'Languages, International & Emerging Routes', 'Commerce, Finance & Economics', 'Business, Marketing & Operations', 'Engineering & Built Environment'],
  analytical: ['Technology & Data', 'Commerce, Finance & Economics', 'Science, Research & Environment', 'Engineering & Built Environment'],
  verbal: ['Law, Government & Public Service', 'Education, Psychology & Social Impact', 'Business, Marketing & Operations', 'Languages, International & Emerging Routes'],
  'hands-on': ['Engineering & Built Environment', 'Skilled Trades & Applied Careers', 'Agriculture, Food & Rural Careers', 'Hospitality, Travel, Sports & Events'],
  empathetic: ['Health & Life Sciences', 'Education, Psychology & Social Impact', 'Hospitality, Travel, Sports & Events', 'Law, Government & Public Service'],
  visual: ['Design, Media & Creative Arts', 'Technology & Data', 'Engineering & Built Environment', 'Business, Marketing & Operations'],
  organised: ['Business, Marketing & Operations', 'Commerce, Finance & Economics', 'Law, Government & Public Service', 'Hospitality, Travel, Sports & Events'],
};

function careerFamilyLabel(category: string) { return careerFamilyLabels[category] ?? category; }
export function interestSignalsFor(guide: CareerGuide) {
  if (guide.interestTags?.length) return guide.interestTags.map((item) => `You enjoy ${item}`);
  return familyInterestSignals[guide.category] ?? ['You are curious about this kind of work', 'You are willing to try a small task before making a long commitment'];
}
export function careerMatchesInterest(guide: CareerGuide, interest: string) {
  if (interest === 'all') return true;
  if (interest.includes(',')) return interest.split(',').some((value) => careerMatchesInterest(guide, value));
  if (interest.startsWith('saved:')) {
    return interest.slice(6).split(',').some((key) => (careerInterestFamilies[key] ?? []).includes(guide.category));
  }
  if ((careerInterestFamilies[interest] ?? []).includes(guide.category)) return true;
  // Family matching gives a useful broad shortlist. Role cues keep the
  // shortlist from excluding a genuinely relevant route that was imported
  // under a neighbouring family (for example, a health-data or public-policy
  // role). Cues broaden discovery; they never remove family matches.
  const cues = interestRoleCues[interest] ?? [];
  if (!cues.length) return false;
  const haystack = [guide.title, guide.summary, ...guide.interestTags, ...guide.specialistSkills, ...guide.futureSkills, ...guide.tags].join(' ').toLowerCase();
  return cues.some((cue) => haystack.includes(cue));
}

// Family matching keeps the catalogue broad; these role cues make the first
// page feel personal instead of putting every role in a family in an
// arbitrary order. A cue only changes ordering, never removes a route.
const interestRoleCues: Record<string, string[]> = {
  people: ['teacher', 'coach', 'counsell', 'care', 'support', 'customer', 'people', 'health', 'social', 'community'],
  systems: ['engineer', 'developer', 'technician', 'systems', 'automation', 'process', 'network', 'database', 'operations'],
  numbers: ['analyst', 'account', 'finance', 'econom', 'data', 'audit', 'payroll', 'credit', 'research'],
  creative: ['design', 'writer', 'content', 'media', 'visual', 'story', 'brand', 'fashion', 'video', 'illustrat'],
  practical: ['technician', 'mechanic', 'construction', 'survey', 'maintenance', 'installation', 'manufactur', 'field'],
  nature: ['environment', 'climate', 'agri', 'food', 'water', 'ecology', 'conservation', 'laboratory', 'health'],
  service: ['public', 'legal', 'policy', 'community', 'education', 'health', 'support', 'compliance'],
  active: ['sport', 'fitness', 'hospitality', 'travel', 'event', 'venue', 'tour', 'field'],
  language: ['language', 'translation', 'editor', 'writer', 'communication', 'international', 'diplomatic'],
  independent: ['consult', 'freelance', 'business', 'entrepreneur', 'practice', 'creative', 'advisor'],
  collaborative: ['coordinator', 'manager', 'team', 'partnership', 'customer', 'community', 'project'],
  structured: ['account', 'compliance', 'quality', 'safety', 'regulatory', 'records', 'planning'],
  flexible: ['consult', 'design', 'marketing', 'creative', 'project', 'freelance', 'content'],
  earning: ['software', 'developer', 'engineer', 'finance', 'sales', 'marketing', 'consult', 'business'],
  stability: ['health', 'public', 'education', 'account', 'engineering', 'laboratory'],
  impact: ['health', 'education', 'social', 'environment', 'community', 'public', 'sustain'],
  mobility: ['software', 'data', 'cloud', 'international', 'travel', 'sales', 'consult'],
  analytical: ['analyst', 'data', 'research', 'engineer', 'account', 'systems', 'quality'],
  verbal: ['law', 'policy', 'teacher', 'writer', 'sales', 'communication', 'content'],
  'hands-on': ['technician', 'mechanic', 'installation', 'maintenance', 'field', 'craft', 'construction'],
  empathetic: ['care', 'counsell', 'psycholog', 'teacher', 'support', 'health', 'community'],
  visual: ['design', 'visual', 'media', 'creative', 'ux', 'fashion', 'architect'],
  organised: ['operations', 'coordinator', 'planner', 'manager', 'project', 'logistics', 'records'],
};

function interestRelevanceScore(guide: CareerGuide, interest: string) {
  const cues = interestRoleCues[interest] ?? [];
  if (!cues.length) return 0;
  const haystack = [guide.title, guide.summary, ...guide.specialistSkills, ...guide.tags].join(' ').toLowerCase();
  return cues.reduce((score, cue) => score + (haystack.includes(cue) ? 1 : 0), 0);
}

export function decisionSignalFor(path: Row) {
  if (path.decision_signal) return String(path.decision_signal);
  if (path.status === 'selected') return 'ready-to-pursue';
  if (path.status === 'testing') return 'promising-to-test';
  if (path.status === 'shortlisted') return 'deliberate-alternative';
  if (['paused', 'ruled-out'].includes(path.status)) return 'not-now';
  return 'needs-evidence';
}

export function evidenceStrengthFor(path: Row) {
  if (path.evidence_strength) return String(path.evidence_strength);
  const confidence = Number(path.confidence ?? 0);
  if (confidence >= 5) return 'strong';
  if (confidence >= 3) return 'moderate';
  if (confidence >= 1) return 'early';
  return 'none';
}

export function decisionSignalLabel(value: unknown) {
  return decisionSignalOptions.find((option) => option.value === value)?.label ?? 'Needs more evidence';
}

export function evidenceStrengthLabel(value: unknown) {
  return evidenceStrengthOptions.find((option) => option.value === value)?.label ?? 'No real evidence yet';
}

function listHtml(values: string[], escapeHtml: DecisionUiContext['escapeHtml']) {
  return `<ul>${values.map((value) => `<li>${escapeHtml(value)}</li>`).join('')}</ul>`;
}

function chipsHtml(values: string[], escapeHtml: DecisionUiContext['escapeHtml']) {
  return values.map((value) => `<span>${escapeHtml(value)}</span>`).join('');
}

function safeEvidenceUrl(value: unknown) {
  const url = String(value ?? '').trim();
  return /^https?:\/\//i.test(url) ? url : '';
}

function safeEvidenceUrls(value: unknown) {
  return String(value ?? '').split(/\s*\n\s*/).map(safeEvidenceUrl).filter(Boolean);
}

export function careerCardHtml(path: Row, ui: DecisionUiContext, editable = true, skills: Row[] = []) {
  const guide = careerGuideFor(path.preset_key);
  const canManage = editable && (ui.viewerRole !== 'student' || !path.created_by || path.created_by === ui.userId);
  const optionType = path.option_type || 'alternative';
  const decisionSignal = decisionSignalFor(path);
  const tradeoffs = Array.isArray(path.tradeoffs) ? path.tradeoffs : [];
  const watchOuts = tradeoffs.length ? tradeoffs : guide?.watchOuts ?? [];
  const workReality = guide?.dailyWork ?? [path.work_environment || 'The real work has not been investigated yet.'];
  const linkedSkills = skills
    .filter((skill) => skill.linked_career_path_id === path.id)
    .map((skill) => String(skill.skill_name || '').trim())
    .filter(Boolean);
  const skillPreview = linkedSkills.length
    ? linkedSkills.slice(0, 7)
    : guide
      ? [...guide.foundationSkills.slice(0, 2), ...guide.specialistSkills.slice(0, 3), ...guide.futureSkills.slice(0, 2)]
      : [`${path.title} tools and methods`, `Practical experience in ${path.title}`, 'Clear communication and evidence'];
  const summary = guide?.summary || path.work_environment || 'Add a clear description of the work this option actually involves.';
  const optionLabel = optionType === 'primary' ? 'Primary' : 'Secondary or alternative';
  const linkedSkillCount = skills.filter((skill) => skill.linked_career_path_id === path.id).length;
  const skillMapping = linkedSkillCount
    ? `<span class="career-skill-map" data-career-skill-count="${linkedSkillCount}">${linkedSkillCount} skill${linkedSkillCount === 1 ? '' : 's'} mapped to this career option</span>`
    : '<span class="career-skill-map is-pending">Career option skills will appear here after saving</span>';
  // Older duplicate-save protection wrote an internal merge message into the
  // learner's review question. It is implementation history, not useful
  // career guidance, so keep it out of the visible plan.
  const reviewQuestion = String(path.review_question || '').trim();
  const visibleReviewQuestion = reviewQuestion && !/^duplicate entry merged/i.test(reviewQuestion) ? reviewQuestion : '';
  return `<article class="career-decision-row" data-status="${ui.escapeHtml(path.status)}" data-option-type="${ui.escapeHtml(optionType)}">
    <header>
      <span class="career-decision-title"><span class="option-type-badge" data-option-type="${ui.escapeHtml(optionType)}">${ui.escapeHtml(optionLabel)}</span><span><h4>${ui.escapeHtml(path.title)}</h4><small>${ui.escapeHtml(careerFamilyLabel(path.career_category || 'Other'))}</small></span></span>
      <span class="career-decision-state"><span data-decision-signal="${ui.escapeHtml(decisionSignal)}">${ui.escapeHtml(decisionSignalLabel(decisionSignal))}</span></span>
    </header>
    <p class="career-decision-summary">${ui.escapeHtml(summary)}</p>
    <details class="career-card-details"><summary><span>See fit, entry route, and skills</span><small>Open details</small></summary><div class="career-card-details-body"><div class="career-reality-grid">
      <section><small>What the work involves</small>${listHtml(workReality.slice(0, 3), ui.escapeHtml)}</section>
      <section><small>Interests this may suit</small>${listHtml(interestSignalsFor(guide ?? { category: path.career_category || 'Other' } as CareerGuide).slice(0, 2), ui.escapeHtml)}</section>
      <section><small>Entry route</small><p>${ui.escapeHtml(path.route_summary || guide?.entryRoutes.join(' / ') || 'Not mapped yet')}</p></section>
      ${watchOuts.length ? `<section><small>Things to check before choosing</small>${listHtml(watchOuts.slice(0, 3), ui.escapeHtml)}</section>` : ''}
    </div>
    ${skillPreview.length ? `<div class="career-skill-preview"><small>Skills this route needs</small><div>${chipsHtml(skillPreview, ui.escapeHtml)}</div>${skillMapping}</div>` : ''}</div></details>\n    <footer><span><small>Useful next step</small><strong>${ui.escapeHtml(path.next_step || guide?.starterTests[0] || 'Choose one small task that creates useful evidence')}</strong>${path.decision_deadline ? `<em>Test or revisit by ${ui.escapeHtml(ui.formatDate(path.decision_deadline))}</em>` : ''}${visibleReviewQuestion ? `<em>Open question: ${ui.escapeHtml(visibleReviewQuestion)}</em>` : ''}</span><span class="row-actions"><button class="table-action" type="button" data-add-career-skills="${ui.escapeHtml(path.id)}">Add suggested skills</button>${canManage ? `<button class="table-action" type="button" data-edit-career="${ui.escapeHtml(path.id)}">Edit</button><button class="table-action" type="button" data-delete-career="${ui.escapeHtml(path.id)}">Remove</button>` : ''}</span></footer>
  </article>`;
}

export function careerLibraryMatches(query: string, category: string, interest = 'all', stage = 'all') {
  const normalized = query.trim().toLowerCase();
  const matches = guidedCareerPresets.filter((guide) => {
    const haystack = [guide.title, guide.category, guide.summary, guide.outlookDetail, ...interestSignalsFor(guide), ...guide.foundationSkills, ...guide.specialistSkills, ...guide.futureSkills, ...guide.tags].join(' ').toLowerCase();
    if (normalized && !haystack.includes(normalized)) return false;
    if (!careerMatchesInterest(guide, interest)) return false;
    if (stage !== 'all' && !(guide.suitableStages ?? []).includes(stage)) return false;
    if (category === 'featured') return normalized ? true : guide.featured;
    if (category === 'future') return guide.category === 'Future-ready & Cross-functional' || guide.futureSkills.some((skill) => /ai|automation|climate|digital|data|privacy|robot|sustain/i.test(skill));
    // Several catalogue imports use the older family names while newer
    // entries use the learner-facing names. Treat them as one filter so the
    // family list never shows duplicate labels or hides valid routes.
    return category === 'all' || guide.category === category || careerFamilyLabel(guide.category) === careerFamilyLabel(category);
  });
  if (interest === 'all' || !interest) {
    // Keep the complete catalogue visible, but put the carefully chosen
    // starting routes first so a learner is not asked to scan hundreds of
    // equally weighted titles before seeing sensible entry points.
    const practicalScore = (guide: CareerGuide) => {
      const title = guide.title.toLowerCase();
      const priorityRole = /software engineer|data analyst|cybersecurity analyst|cloud engineer|full-stack developer|frontend developer|backend developer|business analyst|financial analyst|digital marketing specialist|product designer|health informatics|solar technician|management consultant/.test(title) ? 3 : /engineer|developer|analyst|designer|accountant|technician|consultant|manager/.test(title) ? 1 : 0;
      return Number(guide.featured) * 3 + priorityRole + (guide.outlook === 'growing' ? 2 : guide.outlook === 'evolving' ? 1 : 0) + (/consult|freelance|practice|business/i.test(guide.independencePath) ? 1 : 0) - (/highly competitive|exam-led/i.test(guide.competitionNote) ? 2 : 0);
    };
    return matches.sort((a, b) => practicalScore(b) - practicalScore(a) || a.title.localeCompare(b.title));
  }
  const selected = interest.split(',').filter(Boolean);
  const score = (guide: CareerGuide) => selected.reduce((total, signal) => total
    + (careerMatchesInterest(guide, signal) ? 10 : 0)
    + interestRelevanceScore(guide, signal), 0);
  return matches.sort((a, b) => score(b) - score(a) || a.title.localeCompare(b.title));
}

export function careerLibraryResultsHtml(matches: CareerGuide[], selectedKey: string, escapeHtml: DecisionUiContext['escapeHtml'], limit: number, offset = 0) {
  if (!matches.length) return '<div class="preset-empty"><strong>No career guides match these filters yet.</strong><p>Try removing one filter, changing the study stage, or search for a role, course, or route.</p></div>';
  const categorySignals: Record<string, { interests: string; work: string; route: string }> = {
    'Technology & Data': { interests: 'Building systems, logical problem-solving, improving how things work', work: 'Break down a problem, build or analyse a solution, test it, and explain what changed.', route: 'A relevant degree, diploma, apprenticeship, or a small portfolio of working projects' },
    'Technology & software': { interests: 'Building systems, logical problem-solving, improving how things work', work: 'Break down a problem, build or analyse a solution, test it, and explain what changed.', route: 'A relevant degree, diploma, apprenticeship, or a small portfolio of working projects' },
    'Engineering & Built Environment': { interests: 'Understanding how things are made, practical problem-solving, design and measurement', work: 'Plan, model, test, inspect, and improve a product, structure, process, or site.', route: 'Subject foundations followed by a recognised technical course, degree, or apprenticeship' },
    'Health & Life Sciences': { interests: 'Helping people, science, careful observation, and responsible decision-making', work: 'Gather information, follow safety standards, interpret evidence, and support better health or care.', route: 'Relevant science study followed by regulated training or supervised practical experience' },
    'Commerce, Finance & Economics': { interests: 'Numbers, patterns, money, clear decisions, and understanding how organisations work', work: 'Interpret information, check assumptions, prepare recommendations, and explain financial or market choices.', route: 'Commerce, economics, finance, or a related qualification with practical analysis experience' },
    'Business, Marketing & Operations': { interests: 'Understanding people, organising work, improving results, and communicating clearly', work: 'Find a need, coordinate people or resources, measure results, and improve the next decision.', route: 'A business or specialist course supported by projects, placements, or customer-facing experience' },
    'Education, Psychology & Social Impact': { interests: 'Listening, helping people learn or cope, fairness, and making a positive difference', work: 'Listen carefully, understand a person or community, plan support, and review what changes.', route: 'Relevant study with supervised practice, safeguarding awareness, and experience with people' },
    // Keep the learner-facing family names in sync with the catalogue. These
    // entries are also used as a safe fallback when an imported route has not
    // yet received its role-specific guide fields.
    'Design, Media & Creative Arts': { interests: 'Ideas, storytelling, visual or written expression, and understanding an audience', work: 'Develop a message, create a useful artefact, gather feedback, and refine it for a real audience.', route: 'A portfolio, focused training, or degree combined with published or client work' },
    'Law, Government & Public Service': { interests: 'Fairness, public issues, careful reading, and making sound decisions', work: 'Read evidence, apply rules or policy, weigh competing needs, and communicate a defensible decision.', route: 'Relevant study, examinations where required, and supervised or public-service experience' },
    'Creative, Media & Communication': { interests: 'Ideas, storytelling, visual or written expression, and understanding an audience', work: 'Develop a message, create a useful artefact, gather feedback, and refine it for a real audience.', route: 'A portfolio, focused training, or degree combined with published or client work' }, 
    'Science, Research & Environment': { interests: 'Curiosity, evidence, the natural world, and asking better questions', work: 'Form a question, gather or analyse evidence, document findings, and explain what they mean.', route: 'Science foundations followed by higher study, field experience, or a research portfolio' },
    'Public Service, Law & Policy': { interests: 'Fairness, public issues, careful reading, and making sound decisions', work: 'Read evidence, apply rules or policy, weigh competing needs, and communicate a defensible decision.', route: 'Relevant study, examinations where required, and supervised or public-service experience' },
    'Agriculture, Food & Rural Careers': { interests: 'Nature, practical work, food systems, and improving how resources are used', work: 'Monitor conditions, plan practical work, manage resources, and improve quality or sustainability.', route: 'Agriculture, food, environmental, or technical training with field-based experience' },
    'Future-ready & Cross-functional': { interests: 'Learning quickly, connecting ideas, adapting to change, and solving unfamiliar problems', work: 'Combine knowledge from different areas, test a new approach, and help people act on what you learn.', route: 'A strong foundation plus projects that show learning, judgement, and adaptability' },
  };
  return matches.slice(offset, offset + limit).map((guide) => {
    const fallback = categorySignals[careerFamilyLabel(guide.category)] || categorySignals[guide.category] || { interests: 'Curiosity, steady learning, and willingness to test the work', work: 'Work through practical problems, communicate clearly, and improve the result with feedback.', route: 'A relevant course or apprenticeship supported by practical evidence' };
    const competition = /highly competitive|exam-led/i.test(guide.competitionNote) ? 'Highly competitive' : /competitive|regulated/i.test(guide.competitionNote) ? 'Competitive or regulated' : 'Evidence-led entry';
    const independence = /consulting|freelance|practice|business/i.test(guide.independencePath) ? 'Can grow into independent work' : 'Usually organisation-based';
    const outlook = guide.outlook === 'growing' ? 'Growing opportunity' : guide.outlook === 'evolving' ? 'Changing opportunity' : guide.outlook === 'stable' ? 'Established opportunity' : 'Check local demand';
    const interests = guide.interestTags?.slice(0, 3).join(' · ') || fallback.interests;
    const ordinaryWork = guide.dailyWork?.slice(0, 2).join(' · ') || fallback.work;
    const entryRoute = guide.entryRoutes?.[0] || guide.entryLevel || fallback.route;
    const fitSignals = interestSignalsFor(guide).slice(0, 2).join(' · ') || fallback.interests;
    const firstTest = guide.starterTests?.[0] || 'Speak with someone doing this work or complete a small realistic task.';
    const starterSkills = Array.from(new Set([...(guide.foundationSkills ?? []), ...(guide.specialistSkills ?? []), ...(guide.futureSkills ?? [])])).slice(0, 4).join(' · ') || 'Build evidence in the core skills first';
    const evidence = (guide.evidenceExamples ?? []).slice(0, 1).join(' · ');
    return `<div class="career-library-result"><button type="button" data-career-preset="${escapeHtml(guide.key)}" class="${guide.key === selectedKey ? 'is-selected' : ''}"><span class="career-result-title"><strong>${escapeHtml(guide.title)}</strong>${competition === 'Highly competitive' ? '<em class="career-competition-flag">Highly competitive</em>' : ''}</span><small>${escapeHtml(guide.careerGroup)} · ${escapeHtml(careerFamilyLabel(guide.category))}</small><p>${escapeHtml(guide.summary)}</p><div class="career-result-facts"><span><b>Interests</b>${escapeHtml(interests)}</span><span><b>Ordinary work</b>${escapeHtml(ordinaryWork)}</span><span><b>Entry route</b>${escapeHtml(entryRoute)}</span><span><b>Skills to begin</b>${escapeHtml(starterSkills)}</span><span><b>May suit you if</b>${escapeHtml(fitSignals)}</span><span><b>Try first</b>${escapeHtml(firstTest)}</span>${evidence ? `<span><b>Evidence to create</b>${escapeHtml(evidence)}</span>` : ''}</div><span class="career-result-meta"><em>${escapeHtml(outlook)}</em><em>${escapeHtml(competition)}</em><em>${guide.regulated ? 'Check registration or licence' : 'No universal licence'}</em><em>Skills: ${escapeHtml((guide.specialistSkills ?? []).slice(0, 2).join(' · ') || 'Build evidence in the core skills first')}</em></span><span class="career-result-action" data-career-preset="${escapeHtml(guide.key)}">View details and choose →</span></button><label class="career-compare-toggle"><input type="checkbox" data-compare-career="${escapeHtml(guide.key)}" aria-label="Compare ${escapeHtml(guide.title)}" /><span>Compare</span></label></div>`;
  }).join('');
}

export function careerGuidePreviewHtml(guide: CareerGuide, escapeHtml: DecisionUiContext['escapeHtml']) {
  return `<div class="career-guide-header"><span><small>${escapeHtml(careerFamilyLabel(guide.category))}</small><h4>${escapeHtml(guide.title)}</h4></span></div>
    <p>${escapeHtml(guide.summary)}</p>
    <div class="career-guide-at-a-glance"><div><small>What a normal week may feel like</small><strong>${escapeHtml(guide.dayPace)}</strong></div><div><small>Where the work happens</small><strong>${escapeHtml(guide.workSetting)}</strong></div><div><small>Getting started</small><strong>${escapeHtml(guide.entryLevel)}</strong></div><div><small>Time and route</small><strong>${escapeHtml(guide.routeLength)}</strong></div></div>
    <div class="career-guide-sections">
      <section><small>Local work context</small><p>${escapeHtml(guide.localContext)}</p></section>
      <section><small>Competition to expect</small><p>${escapeHtml(guide.competitionNote)}</p></section>
      <section><small>Long-term independence</small><p>${escapeHtml(guide.independencePath)}</p></section>
      <section><small>You may enjoy this if</small>${listHtml(interestSignalsFor(guide), escapeHtml)}</section>
      <section><small>Subjects and routes to consider</small>${listHtml(guide.subjectRoutes ?? guide.entryRoutes, escapeHtml)}</section>
      <section><small>Real work</small>${listHtml(guide.dailyWork, escapeHtml)}</section>
      <section><small>Common entry routes</small>${listHtml(guide.entryRoutes, escapeHtml)}</section>
      <section><small>Core skills to strengthen</small><div class="guide-chips">${chipsHtml(guide.foundationSkills ?? [], escapeHtml)}</div><p class="guide-section-note">Portable capabilities that support this career option and other routes too.</p></section>
      <section><small>Specialist skills</small><div class="guide-chips">${chipsHtml(guide.specialistSkills, escapeHtml)}</div></section>
      <section><small>Skills for change</small><div class="guide-chips">${chipsHtml(guide.futureSkills ?? [], escapeHtml)}</div><p class="guide-section-note">Useful as tools and expectations change; they do not replace the core or specialist foundation.</p></section>
      <section><small>Skills you can carry into other work</small><div class="guide-chips">${chipsHtml(guide.portableSkills ?? [], escapeHtml)}</div></section>
      <section><small>Earning context</small><p>${escapeHtml(guide.earningContext || 'Earning varies by role, experience, evidence, location, and employer. Check current local sources before deciding.')}</p></section>
      <section><small>What is changing</small><p>${escapeHtml(guide.marketSignal || guide.outlookDetail)}</p></section>
      <section><small>Evidence base</small><p class="career-guide-source"><a href="${escapeHtml(guide.marketEvidence.url)}" target="_blank" rel="noreferrer">${escapeHtml(guide.marketEvidence.source)}</a> <span>(${escapeHtml(guide.marketEvidence.date)})</span></p></section>
      <section class="career-progression-section"><small>Examples and advice by level</small><div class="career-progression-grid">${(guide.progression ?? []).map((item) => `<article data-level="${escapeHtml(item.level.toLowerCase())}"><strong>${escapeHtml(item.level)}</strong><p><b>Example:</b> ${escapeHtml(item.example)}</p><p><b>Advice:</b> ${escapeHtml(item.advice)}</p></article>`).join('')}</div></section>
      <section><small>Check before committing</small>${listHtml(guide.watchOuts, escapeHtml)}</section>
      <section><small>Useful first tests</small>${listHtml(guide.starterTests, escapeHtml)}</section>
      <section><small>Evidence you could create</small>${listHtml(guide.evidenceExamples ?? [], escapeHtml)}</section>
      <section><small>Questions to ask before you commit</small>${listHtml(guide.questionsToAsk ?? [], escapeHtml)}</section>
    </div>
    <div class="career-guide-save"><p class="career-guide-save-note">Choose where this belongs. It will be saved to your plan immediately; no typing is required.</p><div class="career-guide-actions"><button class="primary-button" type="button" aria-label="Choose as primary career option" data-choose-career="primary" data-guide-key="${escapeHtml(guide.key)}">Save as a primary option</button><button class="secondary-button" type="button" aria-label="Keep as secondary career option" data-choose-career="alternative" data-guide-key="${escapeHtml(guide.key)}">Save as a secondary option</button></div></div>`;
}

export function skillCardHtml(skill: Row, evidence: Row[], careers: Row[], ui: DecisionUiContext) {
  // Removing a skill only removes it from the student's roadmap; it does not
  // let a student edit the staff-owned skill details. The database policy
  // enforces the same distinction, so every skill can be removed consistently.
  const canEdit = ui.viewerRole !== 'student' || skill.created_by === ui.userId;
  const canRemove = true;
  const scope = skillScopeFor(skill);
  const linkedCareer = careers.find((career) => career.id === skill.linked_career_path_id);
  const proofState = evidence.length ? `${evidence.length} proof item${evidence.length === 1 ? '' : 's'}` : 'Proof still needed';
  const levelGuidance = skillLevelsFor(skill);
  const reviews = (ui.skillReviews ?? []).filter((row) => row.skill_id === skill.id);
  // Supabase projects created before the review migration may not have an
  // updated_at trigger. Compare every useful timestamp so a newly saved
  // review cannot be hidden behind an older row with a null timestamp.
  const reviewTime = (row: Row) => Math.max(
    Number(row.__client_saved_at) || 0,
    ...['updated_at', 'created_at', 'coach_reviewed_on', 'student_feedback_on']
      .map((key) => new Date(String(row[key] || 0)).getTime() || 0),
  );
  const newest = (rows: Row[]) => rows.slice().sort((a, b) => reviewTime(b) - reviewTime(a))[0] ?? null;
  // Coach and student feedback are separate responsibilities. Keep the newest
  // record for each side so one submission can never hide the other side.
  const coachReview = newest(reviews.filter((row) => row.coach_id || row.coach_feedback || row.coach_satisfaction !== null && row.coach_satisfaction !== undefined));
  const studentReview = newest(reviews.filter((row) => row.student_feedback || row.student_satisfaction !== null && row.student_satisfaction !== undefined));
  const coachReviews = reviews.filter((row) => row.coach_id || row.coach_feedback || row.coach_satisfaction !== null && row.coach_satisfaction !== undefined).sort((a, b) => reviewTime(b) - reviewTime(a));
  const studentReviews = reviews.filter((row) => row.student_feedback || row.student_satisfaction !== null && row.student_satisfaction !== undefined).sort((a, b) => reviewTime(b) - reviewTime(a));
  const coachScore = coachReview?.coach_satisfaction !== null && coachReview?.coach_satisfaction !== undefined ? `${coachReview.coach_satisfaction}/10 · ${satisfactionLabels[Number(coachReview.coach_satisfaction)] || 'Rated'}` : 'Not posted';
  const studentScore = studentReview?.student_satisfaction !== null && studentReview?.student_satisfaction !== undefined ? `${studentReview.student_satisfaction}/10 · ${satisfactionLabels[Number(studentReview.student_satisfaction)] || 'Rated'}` : 'Not posted';
  const feedbackBlock = (rows: Row[], kind: 'coach' | 'student') => {
    const items = rows.filter((row) => kind === 'coach' ? row.coach_feedback || row.next_focus : row.student_feedback);
    if (!items.length) return '';
    const render = (row: Row) => {
      const author = kind === 'coach' ? (ui.profileById?.(row.coach_id)?.full_name || 'Coach') : 'Student reflection';
      const date = kind === 'coach' ? row.coach_reviewed_on || row.updated_at : row.student_feedback_on || row.updated_at;
      const text = kind === 'coach' ? row.coach_feedback : row.student_feedback;
      return `<div class="skill-feedback"><strong>${kind === 'coach' ? 'Coach feedback' : 'Student reflection'}</strong><small class="skill-feedback-meta">${ui.escapeHtml(author)} · ${ui.escapeHtml(ui.formatDate(date))}</small>${text ? `<p>${ui.escapeHtml(text)}</p>` : ''}${kind === 'coach' && row.next_focus ? `<small>Suggested next step: ${ui.escapeHtml(row.next_focus)}</small>` : ''}</div>`;
    };
    // Keep the latest note on the card so the skill stays scannable. Older
    // notes remain available in one disclosure instead of making every card
    // expand to the height of a conversation thread.
    const visible = render(items[0]);
    const older = items.length > 1 ? `<details class="skill-feedback-history"><summary>View all ${kind === 'coach' ? 'coach feedback' : 'student reflections'} (${items.length})</summary>${items.slice(1).map(render).join('')}</details>` : '';
    return `${visible}${older}`;
  };
  const selectedScore = ui.viewerRole === 'student' ? studentReview?.student_satisfaction : coachReview?.coach_satisfaction;
  const scoreIsSet = selectedScore !== null && selectedScore !== undefined;
  const scoreValue = scoreIsSet ? String(Number(selectedScore)) : '0';
  const scoreOutput = scoreIsSet ? `${scoreValue}/10` : 'Choose a score';
  // Keep the ability scale separate from the 0–10 satisfaction scale. The
  // former describes what the learner can demonstrate today; the latter is a
  // reflection on confidence and usefulness. Showing both labels on the card
  // prevents a student from mistaking a satisfaction score for competence.
  const abilityLabels = ['Not started', 'Aware or beginner', 'Can do with support', 'Can do independently', 'Can adapt or teach'];
  const abilityValue = Math.max(0, Math.min(4, Number.isFinite(Number(skill.current_level)) ? Number(skill.current_level) : 0));
  const targetValue = Math.max(1, Math.min(4, Number.isFinite(Number(skill.target_level)) ? Number(skill.target_level) : 2));
  const abilitySummary = `<div class="skill-ability-summary"><div class="skill-ability-copy"><span><small>Current ability</small><strong>${ui.escapeHtml(abilityLabels[abilityValue])}</strong></span><span><small>Next target</small><strong>${ui.escapeHtml(abilityLabels[targetValue])}</strong></span></div><div class="skill-ability-meter" role="progressbar" aria-label="Current ability: ${ui.escapeHtml(abilityLabels[abilityValue])}" aria-valuemin="0" aria-valuemax="4" aria-valuenow="${abilityValue}" aria-valuetext="${ui.escapeHtml(abilityLabels[abilityValue])}"><span style="width:${(abilityValue / 4) * 100}%"></span></div><small class="skill-ability-help">Move this forward with a real task and the proof described below.</small></div>`;
  const ratingScaleMarkers = '<div class="rating-scale-markers" aria-hidden="true"><span>0</span><span>2</span><span>4</span><span>6</span><span>8</span><span>10</span></div>';
  const ratingScaleHint = '<small class="rating-scale-guide">0 = not started · 5 = building with support · 10 = confident in a new situation</small>';
  // The score is a first-class control on the card. The expandable area is
  // reserved for written reflection and dated coach guidance, so a user never
  // has to hunt through a second hidden rating control.
  const inlineFeedback = ui.viewerRole === 'student'
    ? `<div class="skill-feedback-composer"><div class="skill-composer-heading"><strong>Reflection details</strong><small>Write what you noticed while practising this skill.</small></div><form data-inline-skill-review><input type="hidden" name="id" value="${ui.escapeHtml(studentReview?.id ?? '')}" /><input type="hidden" name="skill_id" value="${ui.escapeHtml(skill.id)}" /><input type="hidden" name="student_satisfaction" value="${scoreIsSet ? scoreValue : ''}" /><input type="hidden" name="student_satisfaction_set" value="${scoreIsSet ? 'true' : 'false'}" data-rating-presence /><input class="legacy-rating-sync" type="range" name="student_satisfaction" min="0" max="10" step="1" value="${scoreIsSet ? scoreValue : '0'}" data-rating-slider aria-label="Satisfaction score" />${ratingScaleHint}<label><span>Your reflection (optional)</span><textarea name="student_feedback" rows="3" maxlength="3000" placeholder="What helped you practise this skill? What would make it easier?">${ui.escapeHtml(studentReview?.student_feedback ?? '')}</textarea></label><button class="primary-button" type="submit">Save reflection</button><span class="form-status" data-inline-review-status aria-live="polite"></span></form></div>`
    : `<div class="skill-feedback-composer"><div class="skill-composer-heading"><strong>${coachReview ? 'Update coach guidance' : 'Add coach guidance'}</strong><small>Add an observation or a clear next step for the student.</small></div><form data-inline-skill-review><input type="hidden" name="id" value="${ui.escapeHtml(coachReview?.id ?? '')}" /><input type="hidden" name="skill_id" value="${ui.escapeHtml(skill.id)}" /><input type="hidden" name="coach_satisfaction" value="${scoreIsSet ? scoreValue : ''}" /><input type="hidden" name="coach_satisfaction_set" value="${scoreIsSet ? 'true' : 'false'}" data-rating-presence /><input class="legacy-rating-sync" type="range" name="coach_satisfaction" min="0" max="10" step="1" value="${scoreIsSet ? scoreValue : '0'}" data-rating-slider aria-label="Coach satisfaction score" />${ratingScaleHint}<label><span>Date</span><input name="coach_reviewed_on" type="date" value="${ui.escapeHtml(coachReview?.coach_reviewed_on ?? new Date().toISOString().slice(0, 10))}" /></label><label><span>Feedback (optional)</span><textarea name="coach_feedback" rows="3" maxlength="5000" placeholder="What did you observe, and what should the student practise next?">${ui.escapeHtml(coachReview?.coach_feedback ?? '')}</textarea></label><label><span>Suggested next step (optional)</span><input name="next_focus" maxlength="1200" placeholder="One clear next step" value="${ui.escapeHtml(coachReview?.next_focus ?? '')}" /></label><button class="primary-button" type="submit">Save coach guidance</button><span class="form-status" data-inline-review-status aria-live="polite"></span></form></div>`;
  // Keep the card scan-friendly while leaving the full editor available in
  // place for the selected skill.
  const editorLabel = ui.viewerRole === 'student' ? (studentReview ? 'Update your reflection' : 'Add your reflection') : (coachReview ? 'Update coach feedback' : 'Add coach feedback');
  // Student reflection is part of the rating workflow, so keep it visible on
  // every skill card. Hiding it behind a second disclosure made the textarea
  // easy to miss and encouraged one-word updates on small screens. Coaches
  // still get the compact disclosure because their longer guidance is less
  // frequent and can include a dated next step.
  const feedbackEditor = ui.viewerRole === 'student'
    ? `<div class="skill-feedback-editor skill-feedback-editor-open" data-student-reflection-editor>${inlineFeedback}</div>`
    : `<div class="skill-feedback-editor"><button class="skill-feedback-toggle" type="button" data-toggle-skill-feedback aria-expanded="false">${editorLabel}</button><div data-skill-feedback-panel hidden>${inlineFeedback}</div></div>`;
  const skillMeaning = skillMeaningFor(skill);
  const practicePreview = String(skill.practice_method || '').trim() || 'Choose one small, repeated real task.';
  const proofPreview = String(skill.success_criteria || '').trim() || 'A dated work sample, result, link, or feedback.';
  const actionPreview = `<div class="skill-action-preview"><div><small>Start here</small><p>${ui.escapeHtml(practicePreview)}</p></div><div><small>Proof to collect</small><p>${ui.escapeHtml(proofPreview)}</p></div></div>`;
  const quickScoreField = ui.viewerRole === 'student' ? 'student_satisfaction' : 'coach_satisfaction';
  const quickScoreSetField = `${quickScoreField}_set`;
  const quickScoreLabel = ui.viewerRole === 'student' ? 'Your satisfaction' : 'Coach satisfaction';
  const quickScoreValue = scoreIsSet ? String(Number(selectedScore)) : '0';
  const quickScoreOutput = scoreIsSet ? `${quickScoreValue}/10` : 'Not rated';
  const quickRating = `<form class="skill-quick-rating" data-quick-skill-rating><input type="hidden" name="id" value="${ui.escapeHtml((ui.viewerRole === 'student' ? studentReview?.id : coachReview?.id) ?? '')}" /><input type="hidden" name="skill_id" value="${ui.escapeHtml(skill.id)}" /><input type="hidden" name="${quickScoreSetField}" value="${scoreIsSet ? 'true' : 'false'}" data-rating-presence /><input type="hidden" name="${ui.viewerRole === 'student' ? 'student_feedback' : 'coach_feedback'}" value="${ui.escapeHtml(ui.viewerRole === 'student' ? (studentReview?.student_feedback ?? '') : (coachReview?.coach_feedback ?? ''))}" />${ui.viewerRole === 'coach' ? `<input type="hidden" name="coach_reviewed_on" value="${ui.escapeHtml(coachReview?.coach_reviewed_on ?? new Date().toISOString().slice(0, 10))}" /><input type="hidden" name="next_focus" value="${ui.escapeHtml(coachReview?.next_focus ?? '')}" />` : ''}<label class="quick-rating-label"><span>${quickScoreLabel}</span><div class="rating-slider" data-rating-slider-shell style="--rating-progress:${scoreIsSet ? Number(selectedScore) * 10 : 0}%"><input type="range" name="${quickScoreField}" min="0" max="10" step="1" value="${quickScoreValue}" data-rating-slider aria-label="${ui.escapeHtml(quickScoreLabel)} for ${ui.escapeHtml(skill.skill_name)}" /><output data-rating-output aria-live="polite">${quickScoreOutput}</output></div><small class="rating-scale-guide">0 not started · 5 building with support · 10 confident in a new situation</small></label><button class="table-action" type="submit">Save score</button></form>`;
  const evidenceItems = evidence.slice().sort((a, b) => new Date(String(b.evidence_date || b.created_at || 0)).getTime() - new Date(String(a.evidence_date || a.created_at || 0)).getTime()).map((row) => {
    const proofUrls = safeEvidenceUrls(row.source_url);
    const canEditEvidence = row.added_by === ui.userId;
    return `<article class="skill-evidence-item"><i aria-hidden="true">EV</i><div class="skill-evidence-copy"><strong>${ui.escapeHtml(row.title)}</strong><small>${ui.escapeHtml(ui.formatStatus(row.evidence_type))} · ${ui.escapeHtml(ui.formatDate(row.evidence_date))}</small>${row.description ? `<p>${ui.escapeHtml(row.description)}</p>` : ''}${proofUrls.map((proofUrl) => `<a class="evidence-link" href="${ui.escapeHtml(proofUrl)}" target="_blank" rel="noopener noreferrer">Open proof link</a>`).join('')}</div>${canEditEvidence ? `<span class="evidence-actions"><button class="table-action" type="button" data-edit-evidence="${ui.escapeHtml(row.id)}">Edit</button><button class="table-action" type="button" data-delete-evidence="${ui.escapeHtml(row.id)}">Remove</button></span>` : ''}</article>`;
  }).join('') || '<small>No evidence added yet.</small>';
  const workGrid = ui.viewerRole === 'student'
    ? `<details class="skill-work-details"><summary><span>Practise and proof</span><small>Open details</small></summary><div class="skill-work-grid"><span><small>Practise</small><p>${ui.escapeHtml(skill.practice_method || 'Choose one repeated real task.')}</p></span><span><small>Proof</small><p>${ui.escapeHtml(skill.success_criteria || 'Add a work sample or feedback when you have one.')}</p></span></div></details>`
    : `<details class="skill-work-details"><summary><span>Development plan</span><small>Open details</small></summary><div class="skill-work-grid"><span><small>Development outcome</small><p>${ui.escapeHtml(skill.development_goal || 'Define the capability this work should improve.')}</p></span><span><small>How to practise</small><p>${ui.escapeHtml(skill.practice_method || 'Choose a repeated real task, not only a course.')}</p></span><span><small>Proof of competence</small><p>${ui.escapeHtml(skill.success_criteria || 'Define the output, standard, and feedback that will count as proof.')}</p></span></div></details>`;
  const levelGuidanceBlock = `<details class="skill-progression-details"><summary><span>Examples by level</span><small>Starter · Working · Advanced</small></summary><div class="skill-progression-grid">${levelGuidance.map((item) => `<section data-level="${ui.escapeHtml(item.level.toLowerCase())}"><strong>${ui.escapeHtml(item.level)}</strong><p><b>Example:</b> ${ui.escapeHtml(item.example)}</p><p><b>Next advice:</b> ${ui.escapeHtml(item.advice)}</p></section>`).join('')}</div></details>`;
  const evidenceBlock = evidence.length
    ? `<details class="skill-evidence-details"><summary><span>Evidence</span><small>${evidence.length} item${evidence.length === 1 ? '' : 's'} · open to read descriptions and links</small></summary><div class="skill-evidence-list">${evidenceItems}</div></details>`
    : `<div class="skill-evidence-list skill-evidence-empty"><small>No evidence added yet. Add a work sample, link, result, or feedback when you have one.</small></div>`;
  return `<article class="skill-roadmap-row" data-priority="${ui.escapeHtml(skill.priority)}" data-scope="${ui.escapeHtml(scope)}">
    <header class="skill-card-header"><span class="skill-card-heading"><strong>${ui.escapeHtml(skill.skill_name)}</strong><small>${ui.escapeHtml(ui.viewerRole === 'student' ? studentScopeLabels[scope] : scopeLabels[scope])}${linkedCareer ? ` · for ${ui.escapeHtml(linkedCareer.title)}` : ''}</small></span><span class="skill-proof-state" data-has-proof="${evidence.length ? 'true' : 'false'}">${ui.escapeHtml(proofState)}</span></header>
    <p class="skill-meaning"><strong>What this means</strong><span>${ui.escapeHtml(skillMeaning)}</span></p>
    ${abilitySummary}
    ${actionPreview}
    ${levelGuidanceBlock}
    ${workGrid}
    ${evidenceBlock}
    ${feedbackBlock(coachReviews, 'coach') || '<div class="skill-feedback skill-feedback-empty"><strong>Coach guidance:</strong><span>Not posted yet.</span></div>'}
    ${feedbackBlock(studentReviews, 'student')}
    <div class="skill-satisfaction"><span><small>Coach satisfaction</small><strong>${ui.escapeHtml(coachScore)}</strong></span><span><small>Student satisfaction</small><strong>${ui.escapeHtml(studentScore)}</strong></span><small class="rating-scale-inline">Scale: 0 not started · 1–2 starting · 3–4 building · 5–6 useful with support · 7–8 working well · 9–10 confident in a new situation</small></div>
    ${quickRating}
    ${feedbackEditor}
    <footer><span>${ui.escapeHtml(ui.formatStatus(skill.priority))}</span><span class="row-actions skill-card-actions"><button class="table-action" type="button" data-add-evidence="${ui.escapeHtml(skill.id)}">Add evidence</button>${canEdit ? `<button class="table-action" type="button" data-edit-skill="${ui.escapeHtml(skill.id)}">Edit skill</button>` : ''}${canRemove ? `<button class="table-action danger-action" type="button" data-delete-skill="${ui.escapeHtml(skill.id)}">Remove skill</button>` : ''}</span></footer>
  </article>`;
}

export function skillRoadmapHtml(skills: Row[], allEvidence: Row[], careers: Row[], ui: DecisionUiContext) {
  if (!skills.length) return `<div class="empty-state coaching-empty"><strong>No skills have been added yet.</strong><span>Add one ability you want to build, then record evidence and a 0–10 rating when you are ready. Skills can be removed later if they no longer belong in the plan.</span><button class="secondary-button" type="button" data-open-skill-dialog>Add a skill</button></div>`;
  const order: SkillScope[] = ['foundation', 'career-specific', 'future-ready', 'employability', 'personal-effectiveness'];
  const initialTab = skills.some((skill) => skillScopeFor(skill) === 'foundation') ? 'foundation' : 'career-specific';
  const renderGroup = (scope: SkillScope, showEmpty = true) => {
  const rows = skills.filter((skill) => skillScopeFor(skill) === scope);
  const label = ui.viewerRole === 'student' ? studentScopeLabels[scope] : scopeLabels[scope];
  const initiallyVisible = scope === initialTab;
  if (!rows.length && !showEmpty) return '';
  if (!rows.length && showEmpty) {
      const emptyCopy = scope === 'career-specific'
        ? 'Choose a career option to add the skills that support its real work.'
        : scope === 'future-ready'
          ? 'Add a future-ready skill when it helps you work with changing tools, evidence, or systems.'
          : scope === 'foundation'
            ? 'Add a portable core skill to begin building capability that supports every career option.'
            : 'Add a skill here when it does not fit the other groups yet.';
      const emptyAction = scope === 'career-specific'
        ? '<button class="secondary-button" type="button" data-open-career-dialog>Choose a career option</button>'
        : '<button class="secondary-button" type="button" data-open-skill-dialog>Add a skill</button>';
      return `<section class="skill-scope-group skill-scope-group-empty" data-scope="${scope}" data-skill-scope-panel="${scope}" data-skill-page-size="5" data-skill-page="1"${initiallyVisible ? '' : ' hidden'}><header><h4>${ui.escapeHtml(label)}</h4><span>0 skills</span></header><div class="skill-scope-empty"><strong>No ${ui.escapeHtml(label.toLowerCase())} yet.</strong><p>${ui.escapeHtml(emptyCopy)}</p>${emptyAction}</div></section>`;
    }
    const pageItems = rows.map((skill, index) => skillCardHtml(skill, allEvidence.filter((row) => row.skill_id === skill.id), careers, ui).replace('<article class="skill-roadmap-row"', `<article data-skill-page-item="${index}" class="skill-roadmap-row"`));
    const pageControls = `<nav class="skill-pagination" data-skill-pagination aria-label="${ui.escapeHtml(label)} pages"><span data-skill-page-indicator>Showing 1–${Math.min(rows.length, 5)} of ${rows.length} skills</span><label class="skill-page-size"><span>Show</span><select data-skill-page-size-select aria-label="Skills per page"><option value="5" selected>5</option><option value="7">7</option><option value="10">10</option><option value="15">15</option><option value="20">20</option><option value="25">25</option><option value="50">50</option></select><span>per page</span></label><span class="skill-page-actions"><button class="table-action" type="button" data-skill-page-action="first" disabled>First</button><button class="table-action" type="button" data-skill-page-action="previous" disabled>Previous</button><span data-skill-page-numbers></span><button class="table-action" type="button" data-skill-page-action="next"${rows.length <= 5 ? ' disabled' : ''}>Next</button><button class="table-action" type="button" data-skill-page-action="last"${rows.length <= 5 ? ' disabled' : ''}>Last</button></span></nav>`;
    return `<section class="skill-scope-group" data-scope="${scope}" data-skill-scope-panel="${scope}" data-skill-page-size="5" data-skill-page="1"${initiallyVisible ? '' : ' hidden'}><header><h4>${ui.escapeHtml(label)}</h4><span>${rows.length} skill${rows.length === 1 ? '' : 's'}</span></header>${pageControls}${pageItems.join('')}${pageControls}</section>`;
  };
  const foundation = renderGroup('foundation');
  const hardSkills = renderGroup('career-specific');
  const futureReady = renderGroup('future-ready');
  const otherScopes = order.filter((scope) => !['foundation', 'career-specific', 'future-ready'].includes(scope));
  const other = otherScopes.map((scope) => renderGroup(scope, false)).join('');
  const countFor = (scope: SkillScope | 'all' | 'other') => scope === 'all'
    ? skills.length
    : scope === 'other'
      ? skills.filter((skill) => !['foundation', 'career-specific', 'future-ready'].includes(skillScopeFor(skill))).length
      : skills.filter((skill) => skillScopeFor(skill) === scope).length;
  const tabLabel = (label: string, scope: SkillScope | 'all' | 'other') => `${label} (${countFor(scope)})`;
  const tabs = `<nav class="skill-scope-tabs" role="tablist" aria-label="Skill groups"><button type="button" role="tab" aria-selected="${initialTab === 'foundation'}" data-skill-scope-tab="foundation">${tabLabel('Core skills', 'foundation')}</button><button type="button" role="tab" aria-selected="${initialTab === 'career-specific'}" data-skill-scope-tab="career-specific">${tabLabel('Career-specific skills', 'career-specific')}</button>${futureReady ? `<button type="button" role="tab" aria-selected="false" data-skill-scope-tab="future-ready">${tabLabel('Skills for change', 'future-ready')}</button>` : ''}${other ? `<button type="button" role="tab" aria-selected="false" data-skill-scope-tab="other">${tabLabel('Other skills', 'other')}</button>` : ''}<button type="button" role="tab" aria-selected="false" data-skill-scope-tab="all">${tabLabel('All skills', 'all')}</button></nav>`;
  // Every scope uses the same full-width panel structure. Keeping the two
  // primary groups in a special desktop wrapper made their layout and tab
  // visibility differ from Skills for change and any future groups.
  const panels = `${foundation}${hardSkills}${futureReady}${other}`;
  const allPagination = `<nav class="skill-pagination skill-pagination-all" data-all-skill-pagination data-all-skill-page-size="5" hidden aria-label="All skills pages"><span data-all-skill-page-indicator>Showing 1–${Math.min(skills.length, 5)} of ${skills.length} skills</span><label class="skill-page-size"><span>Show</span><select data-all-skill-page-size-select aria-label="All skills per page"><option value="5" selected>5</option><option value="7">7</option><option value="10">10</option><option value="15">15</option><option value="20">20</option><option value="25">25</option><option value="50">50</option></select><span>per page</span></label><span class="skill-page-actions"><button class="table-action" type="button" data-all-skill-page-action="first" disabled>First</button><button class="table-action" type="button" data-all-skill-page-action="previous" disabled>Previous</button><span data-all-skill-page-numbers></span><button class="table-action" type="button" data-all-skill-page-action="next"${skills.length <= 5 ? ' disabled' : ''}>Next</button><button class="table-action" type="button" data-all-skill-page-action="last"${skills.length <= 5 ? ' disabled' : ''}>Last</button></span></nav>`;
  const scaleLegend = '<p class="skill-scale-legend"><strong>Rating guide:</strong> 0 = not started · 1–2 = just beginning · 3–4 = building with support · 5–6 = usable in familiar work · 7–8 = reliable in most work · 9–10 = confident in a new situation.</p><p class="skill-scope-explanation"><strong>How the groups work:</strong> Core skills are portable foundations, Career-specific skills are linked to your saved career options, and Skills for change are future-ready capabilities. “All skills” combines every group; changing-work skills are different from uncategorised Work skills.</p>';
  return `${tabs}${scaleLegend}<div class="skill-scope-panels" data-active-skill-scope="${initialTab}">${allPagination}${panels}${allPagination}</div>`;
}

export function skillSummaryHtml(skills: Row[], allEvidence: Row[], escapeHtml: DecisionUiContext['escapeHtml']) {
  // The roadmap groups are the learner-facing source of truth. Priority is a
  // coaching flag and can differ from the group (for example, an important
  // foundation skill is still a core skill), so do not use it for the count.
  const coreSkills = skills.filter((skill) => skillScopeFor(skill) === 'foundation');
  const withEvidence = skills.filter((skill) => allEvidence.some((evidence) => evidence.skill_id === skill.id));
  const careerSpecific = skills.filter((skill) => skillScopeFor(skill) === 'career-specific');
  const futureReady = skills.filter((skill) => skillScopeFor(skill) === 'future-ready');
  return `<span><small>Skills in your plan</small><strong>${skills.length}</strong><em>${coreSkills.length} core skills</em></span><span><small>Career-linked</small><strong>${careerSpecific.length}</strong><em>${careerSpecific.length ? 'Linked to a career option' : 'Not needed yet'}</em></span><span><small>Skills for change</small><strong>${futureReady.length}</strong><em>${futureReady.length ? 'Included' : 'Not needed yet'}</em></span><span><small>Evidence added</small><strong>${skills.length ? Math.round((withEvidence.length / skills.length) * 100) : 0}%</strong><em>${escapeHtml(`${withEvidence.length} of ${skills.length} skills`)}</em></span>`;
}

export function skillRecommendationsHtml(primaryCategory: string | string[] | null | undefined, escapeHtml: DecisionUiContext['escapeHtml']) {
  const packs = recommendedSkillPacks(primaryCategory);
  const categories = Array.isArray(primaryCategory) ? primaryCategory.filter(Boolean) : primaryCategory ? [primaryCategory] : [];
  const categoryLabel = categories.length > 1 ? `${categories.length} primary career options` : categories[0];
  return `<div><span><small>Recommended next</small><strong>${categoryLabel ? `Based on ${escapeHtml(categoryLabel)}` : 'Start with durable foundations'}</strong><em class="recommendation-note">Nothing is added until you choose it.</em></span><button class="table-action" type="button" data-open-skill-plan>Browse all plans</button></div><div>${packs.map((pack) => { const first = skillPackItems(pack)[0]; return `<button type="button" data-open-skill-plan="${escapeHtml(pack.key)}"><strong>${escapeHtml(pack.title)}</strong><small>${skillPackItems(pack).length} skills · ${escapeHtml(pack.scope)}</small>${first ? `<em>${escapeHtml(first.starterTask ?? first.developmentGoal)}</em>` : ''}</button>`; }).join('')}</div>`;
}

export function skillPackMatches(query: string, group: string, primaryCategory: string | string[] | null | undefined) {
  const normalized = query.trim().toLowerCase();
  const recommended = new Set(recommendedSkillPacks(primaryCategory).map((pack) => pack.key));
  return skillPacks.filter((pack) => {
    const haystack = `${pack.title} ${pack.description} ${pack.idealFor} ${pack.group} ${pack.categoryMatches.join(' ')} ${pack.skillKeys.join(' ')}`.toLowerCase();
    if (normalized && !haystack.includes(normalized)) return false;
    if (group === 'recommended') return recommended.has(pack.key);
    return group === 'all' || pack.group === group;
  });
}

export function skillPackResultsHtml(packs: SkillPack[], selectedKey: string, escapeHtml: DecisionUiContext['escapeHtml']) {
  if (!packs.length) return '<div class="preset-empty">No matching skill plan.</div>';
  return packs.map((pack) => `<button type="button" data-skill-pack="${escapeHtml(pack.key)}" class="${pack.key === selectedKey ? 'is-selected' : ''}"><span><strong>${escapeHtml(pack.title)}</strong><em>${skillPackItems(pack).length}</em></span><small>${escapeHtml(pack.group)} · ${escapeHtml(pack.scope)}</small><p>${escapeHtml(pack.description)}</p></button>`).join('');
}

export function skillPackPreviewHtml(pack: SkillPack, existingNames: Set<string>, escapeHtml: DecisionUiContext['escapeHtml']) {
  const items = skillPackItems(pack);
  const available = items.filter((item) => !existingNames.has(item.title.toLowerCase())).length;
  return `<div class="skill-pack-preview-header"><span><small>${escapeHtml(pack.group)}</small><h4>${escapeHtml(pack.title)}</h4></span><strong>${available} new</strong></div><p>${escapeHtml(pack.description)}</p><em>Best for: ${escapeHtml(pack.idealFor)}</em><div class="skill-pack-checklist">${items.map((item) => {
    const exists = existingNames.has(item.title.toLowerCase());
    const reason = item.relatedCareerGroups?.length
      ? `Supports ${item.relatedCareerGroups.slice(0, 2).join(' and ')} career options.`
      : 'Builds a transferable foundation for practical work.';
    return `<label data-existing="${exists ? 'true' : 'false'}"><input type="checkbox" name="skill_keys" value="${escapeHtml(item.key)}" ${exists ? 'disabled' : 'checked'} /><span><strong>${escapeHtml(item.title)}</strong><small>${exists ? 'Already in the roadmap' : `${escapeHtml(item.category)} · ${escapeHtml(item.priority)}`}</small><small class="skill-plan-goal">${escapeHtml(item.developmentGoal)}</small>${!exists ? `<small class="skill-plan-reason"><b>Why it is suggested:</b> ${escapeHtml(reason)}</small>` : ''}${!exists && item.starterTask ? `<small class="skill-plan-task"><b>First practice:</b> ${escapeHtml(item.starterTask)}</small>` : ''}${!exists && item.evidenceHint ? `<small class="skill-plan-evidence"><b>Evidence:</b> ${escapeHtml(item.evidenceHint)}</small>` : ''}${!exists && item.recommendedStages ? `<small class="skill-plan-stage"><b>Useful stages:</b> ${escapeHtml(item.recommendedStages.join(' · '))}</small>` : ''}${!exists && item.relatedCareerGroups ? `<small class="skill-plan-careers"><b>Useful for:</b> ${escapeHtml(item.relatedCareerGroups.join(' · '))}</small>` : ''}</span></label>`;
  }).join('')}</div>`;
}

export function getSkillPack(key: string) {
  return skillPacks.find((pack) => pack.key === key) ?? null;
}

