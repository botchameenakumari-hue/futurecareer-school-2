export type CareerStage = 'school' | 'college' | 'fresher' | 'early' | 'mid' | 'senior' | 'returner' | 'switcher' | 'independent';
export type Interest = 'build' | 'analyse' | 'create' | 'help' | 'influence' | 'organise';
export type WorkValue = 'income' | 'stability' | 'impact' | 'autonomy' | 'mastery' | 'creativity' | 'flexibility' | 'leadership';
export type WorkMode = 'people' | 'independent' | 'structured' | 'ambiguous' | 'desk' | 'active' | 'remote' | 'field';

export interface CareerRole {
  id: string;
  title: string;
  cluster: string;
  summary: string;
  does: string;
  stages: CareerStage[];
  interests: Interest[];
  values: WorkValue[];
  modes: WorkMode[];
  entry: string;
  growth: string;
  realityCheck: string;
  aiShift: string;
  routes: string[];
  proof: string[];
  skills: {
    transferable: string[];
    roleSpecific: string[];
    aiDigital: string[];
  };
}

export const foundationSkills = [
  { name: 'Self-awareness', why: 'Know your strengths, limits, values, energy patterns and non-negotiables.', practice: 'Keep a weekly energy-and-evidence log: what gave energy, what drained it, and what you did well.' },
  { name: 'Learning agility', why: 'Learn, unlearn and transfer knowledge as tools and roles change.', practice: 'Run a two-week learning sprint that ends in a visible output, not a certificate.' },
  { name: 'Critical thinking', why: 'Check evidence, spot assumptions and make sound decisions under uncertainty.', practice: 'For one decision each week, write the claim, evidence, alternatives and what would change your mind.' },
  { name: 'Clear communication', why: 'Write, speak, listen and adapt a message to the person receiving it.', practice: 'Explain one complex idea in a one-minute voice note and a five-sentence memo.' },
  { name: 'Collaboration and empathy', why: 'Work through different perspectives, feedback, conflict and shared ownership.', practice: 'Ask for feedback on one behaviour, restate it without defending, then apply one change.' },
  { name: 'Personal operating system', why: 'Manage attention, time, energy, commitments and recovery sustainably.', practice: 'Plan one week around three outcomes, two deep-work blocks and protected recovery time.' },
  { name: 'Digital, data and AI literacy', why: 'Use modern tools safely while verifying outputs, privacy, bias and limitations.', practice: 'Use AI on a real task, fact-check every important output, and record where human judgment mattered.' },
  { name: 'Career and financial agency', why: 'Build proof, relationships, negotiation ability and basic money resilience.', practice: 'Update a proof-of-work file and calculate your minimum, comfortable and growth monthly income needs.' },
];

export const careerRoles: CareerRole[] = [
  {
    id: 'software-engineer', title: 'Software & AI Systems Engineer', cluster: 'Technology & data',
    summary: 'Builds reliable digital products, services and internal systems.',
    does: 'Turns user and business needs into working software, tests it, fixes failures and improves systems over time.',
    stages: ['school','college','fresher','early','mid','switcher','returner'], interests: ['build','analyse','create'],
    values: ['income','mastery','autonomy','flexibility'], modes: ['independent','ambiguous','desk','remote'],
    entry: 'Portfolio-friendly; a relevant degree helps but demonstrable ability can open junior routes.', growth: 'Senior engineer → staff/principal engineer, engineering manager, architect or technical founder.',
    realityCheck: 'The work includes debugging, maintenance, reading existing code and negotiating trade-offs—not only creating new apps.',
    aiShift: 'AI accelerates routine coding; problem framing, architecture, verification, security and product judgment become more valuable.',
    routes: ['Computer science or related degree plus projects', 'Structured self-learning/bootcamp plus strong public portfolio', 'Internal move from QA, support, operations or domain role'],
    proof: ['Ship a tested application used by real people', 'Contribute a documented fix or feature to an open-source project'],
    skills: { transferable: ['Problem decomposition','Written technical communication','Collaboration and code review','Estimation and prioritisation'], roleSpecific: ['Programming fundamentals','Data structures and algorithms','Software design and architecture','Testing and debugging','Databases and APIs','Version control and delivery'], aiDigital: ['AI-assisted development with verification','Cloud and deployment basics','Secure coding and privacy'] }
  },
  {
    id: 'data-analyst', title: 'Decision Intelligence Analyst', cluster: 'Technology & data',
    summary: 'Turns messy information into decisions people can act on.',
    does: 'Defines metrics, cleans and analyses data, finds patterns, builds dashboards and explains what the evidence does—and does not—show.',
    stages: ['school','college','fresher','early','mid','switcher','returner'], interests: ['analyse','organise','help'],
    values: ['income','mastery','impact','stability'], modes: ['independent','structured','desk','remote'],
    entry: 'Accessible through degrees or portfolio-based transitions from finance, operations, research and many domain roles.', growth: 'Senior analyst → analytics lead, product analyst, analytics engineer or data science path.',
    realityCheck: 'Much of the job is clarifying questions and fixing data quality before any interesting analysis happens.',
    aiShift: 'AI can draft queries and charts; trustworthy metrics, causal caution, domain context and clear recommendations remain decisive.',
    routes: ['Statistics, economics, business or technical degree', 'SQL + spreadsheet + dashboard portfolio', 'Domain-expert transition using existing industry knowledge'],
    proof: ['Analyse a public dataset and publish a decision-focused case study', 'Build a dashboard with definitions, caveats and recommendations'],
    skills: { transferable: ['Question framing','Quantitative reasoning','Stakeholder communication','Data storytelling'], roleSpecific: ['Spreadsheets','SQL','Data cleaning and quality checks','Statistics and experimentation basics','Dashboard design','Business/domain metrics'], aiDigital: ['AI-assisted analysis with validation','BI tools','Privacy and responsible data use'] }
  },
  {
    id: 'ai-ml-specialist', title: 'AI / Machine Learning Specialist', cluster: 'Technology & data',
    summary: 'Designs, evaluates and deploys systems that learn from data.',
    does: 'Frames machine-learning problems, prepares data, trains or adapts models, evaluates performance and monitors real-world behaviour.',
    stages: ['college','fresher','early','mid','switcher'], interests: ['analyse','build','create'],
    values: ['income','mastery','impact','autonomy'], modes: ['independent','ambiguous','desk','remote'],
    entry: 'Usually needs strong maths, programming and evidence of applied projects; research roles often require advanced study.', growth: 'ML engineer → senior/lead ML engineer, applied scientist, AI architect or AI product leader.',
    realityCheck: 'Data quality, evaluation, integration and monitoring consume more time than model demos suggest.',
    aiShift: 'Foundation models lower prototyping barriers while raising the importance of evaluation, safety, data governance and system design.',
    routes: ['CS, maths, statistics or engineering degree', 'Software/data transition with applied ML projects', 'Domain specialist route into applied AI'],
    proof: ['Build an evaluated model with a baseline and error analysis', 'Deploy a small AI feature with cost, safety and monitoring notes'],
    skills: { transferable: ['Experimental thinking','Problem framing','Technical writing','Cross-functional collaboration'], roleSpecific: ['Python and software engineering','Probability, statistics and linear algebra','Machine-learning methods','Data pipelines and feature work','Model evaluation and monitoring','MLOps fundamentals'], aiDigital: ['LLM application patterns','Responsible AI and bias testing','Cloud compute and model operations'] }
  },
  {
    id: 'cybersecurity-analyst', title: 'Cybersecurity Analyst', cluster: 'Technology & data',
    summary: 'Protects systems, data and people from digital threats.',
    does: 'Monitors risk, investigates suspicious activity, strengthens controls, responds to incidents and helps teams behave securely.',
    stages: ['school','college','fresher','early','mid','switcher','returner'], interests: ['analyse','build','help'],
    values: ['stability','income','impact','mastery'], modes: ['structured','ambiguous','desk','remote'],
    entry: 'Certifications can help, but labs, incident write-ups and systems fundamentals are stronger proof.', growth: 'Security analyst → incident responder, security engineer, cloud security, governance lead or CISO track.',
    realityCheck: 'Some roles include alerts, documentation, on-call pressure and constant learning—not movie-style hacking.',
    aiShift: 'Attackers and defenders both use AI; threat judgment, identity security, secure AI systems and incident leadership grow in importance.',
    routes: ['IT/networking foundation plus security labs', 'CS or cybersecurity degree', 'Transition from help desk, sysadmin, audit or risk'],
    proof: ['Document a home-lab attack and defence exercise', 'Write a practical threat model and remediation plan for an app'],
    skills: { transferable: ['Risk thinking','Calm incident communication','Documentation','Continuous learning'], roleSpecific: ['Networking and operating systems','Identity and access management','Security monitoring and analysis','Vulnerability management','Incident response','Governance and controls'], aiDigital: ['Security automation','Cloud security fundamentals','AI threat and data-leakage awareness'] }
  },
  {
    id: 'cloud-devops-engineer', title: 'Cloud / DevOps Engineer', cluster: 'Technology & data',
    summary: 'Makes digital services deployable, observable, scalable and dependable.',
    does: 'Automates delivery, manages cloud infrastructure, monitors reliability and helps engineering teams ship safely.',
    stages: ['college','fresher','early','mid','switcher'], interests: ['build','analyse','organise'],
    values: ['income','mastery','stability','autonomy'], modes: ['independent','structured','desk','remote'],
    entry: 'Strong systems knowledge and hands-on labs matter more than memorising one cloud vendor.', growth: 'DevOps/SRE → platform engineer, cloud architect, reliability lead or infrastructure manager.',
    realityCheck: 'On-call work and production failures can be stressful; reliability requires disciplined documentation and prevention.',
    aiShift: 'AI helps diagnose and automate, but safe infrastructure changes, cost control and incident ownership stay human-led.',
    routes: ['Systems/network administration path', 'Software engineering transition', 'Cloud labs and certification backed by deployed projects'],
    proof: ['Deploy an observable application through an automated pipeline', 'Publish an incident postmortem with preventive changes'],
    skills: { transferable: ['Systems thinking','Incident communication','Process improvement','Cross-team collaboration'], roleSpecific: ['Linux and networking','Cloud architecture basics','Infrastructure as code','CI/CD','Containers and orchestration','Monitoring and reliability'], aiDigital: ['Operations automation','AI-assisted diagnostics with validation','Cloud security and cost governance'] }
  },
  {
    id: 'automation-specialist', title: 'Automation & No-Code Specialist', cluster: 'Technology & data',
    summary: 'Removes repetitive work by connecting tools, data and workflows.',
    does: 'Maps processes, designs automations, integrates systems, tests exceptions and teaches teams how to use the new workflow.',
    stages: ['school','college','fresher','early','mid','switcher','returner','independent'], interests: ['build','organise','help'],
    values: ['autonomy','flexibility','income','impact'], modes: ['independent','ambiguous','desk','remote'],
    entry: 'Accessible from operations, admin, marketing, finance or technical backgrounds through real workflow projects.', growth: 'Automation specialist → solutions architect, operations systems lead, consultant or agency owner.',
    realityCheck: 'The hard part is understanding exceptions, permissions and adoption—not dragging boxes on a screen.',
    aiShift: 'Agentic tools widen what can be automated; governance, human checkpoints, reliability and process judgment become essential.',
    routes: ['Automate work in your current role', 'Build a portfolio for small organisations', 'Transition from operations or business systems'],
    proof: ['Automate a multi-step workflow with logs and error handling', 'Show before/after time, quality and risk measurements'],
    skills: { transferable: ['Process mapping','Requirements discovery','Change enablement','Client communication'], roleSpecific: ['Workflow design','APIs and webhooks basics','Data modelling','Testing and exception handling','Access and permission design','ROI measurement'], aiDigital: ['No-code/low-code platforms','AI agent workflow design','Privacy, security and human approval controls'] }
  },
  {
    id: 'product-manager', title: 'Product Manager', cluster: 'Product, strategy & operations',
    summary: 'Chooses valuable problems and aligns a team to solve them.',
    does: 'Understands customers, defines outcomes, prioritises trade-offs and coordinates design, engineering and business partners.',
    stages: ['college','fresher','early','mid','senior','switcher','returner'], interests: ['analyse','influence','organise','create'],
    values: ['impact','leadership','income','mastery'], modes: ['people','ambiguous','desk','remote'],
    entry: 'Commonly entered through engineering, design, analytics, operations, marketing or domain expertise.', growth: 'Product manager → senior/group PM, product director, chief product officer or founder.',
    realityCheck: 'You rarely control the team directly; progress comes through clarity, evidence, negotiation and influence.',
    aiShift: 'AI speeds research and prototyping while increasing the value of problem selection, taste, responsible trade-offs and adoption.',
    routes: ['Internal transition from a product-adjacent role', 'Associate product role plus case-study portfolio', 'Build and launch a small product yourself'],
    proof: ['Publish a product teardown with evidence-based priorities', 'Take a small product from interviews to measurable usage'],
    skills: { transferable: ['Customer empathy','Decision-making under uncertainty','Stakeholder influence','Clear writing and storytelling'], roleSpecific: ['Customer discovery','Product strategy','Prioritisation and roadmapping','Metrics and experimentation','Requirements and acceptance criteria','Go-to-market collaboration'], aiDigital: ['AI product literacy','Rapid prototyping tools','Responsible data and model trade-offs'] }
  },
  {
    id: 'business-analyst', title: 'AI Workflow & Business Analyst', cluster: 'Product, strategy & operations',
    summary: 'Translates business problems into workable process and system changes.',
    does: 'Maps current work, gathers requirements, analyses gaps and helps teams implement and validate better solutions.',
    stages: ['college','fresher','early','mid','switcher','returner'], interests: ['analyse','organise','help'],
    values: ['stability','mastery','impact','income'], modes: ['people','structured','desk','remote'],
    entry: 'A broad route for graduates and domain professionals who can combine analysis with communication.', growth: 'Senior BA → product owner, process lead, transformation manager or consultant.',
    realityCheck: 'Success depends on uncovering conflicting needs and operational details, not only making diagrams.',
    aiShift: 'AI drafts documentation; contextual discovery, process judgment, validation and adoption remain the differentiators.',
    routes: ['Business/IT degree plus case projects', 'Transition from operations, support or domain role', 'Systems implementation or analyst internship'],
    proof: ['Create an as-is/to-be process case with requirements', 'Analyse a real workflow and quantify the improvement opportunity'],
    skills: { transferable: ['Active listening','Facilitation','Analytical writing','Stakeholder management'], roleSpecific: ['Requirements elicitation','Process modelling','Gap and root-cause analysis','Data interpretation','User stories and acceptance criteria','Solution validation'], aiDigital: ['Spreadsheet and BI fluency','AI-assisted documentation with review','Business systems and integration basics'] }
  },
  {
    id: 'program-manager', title: 'Project / Programme Manager', cluster: 'Product, strategy & operations',
    summary: 'Turns complex goals into coordinated, delivered outcomes.',
    does: 'Defines scope, sequences work, manages dependencies and risk, resolves blockers and keeps people aligned.',
    stages: ['college','fresher','early','mid','senior','switcher','returner'], interests: ['organise','influence','help'],
    values: ['leadership','stability','impact','mastery'], modes: ['people','structured','ambiguous','desk'],
    entry: 'Project coordination can begin early; larger programmes usually require domain and delivery experience.', growth: 'Project manager → programme/portfolio lead, PMO head, operations leader or transformation director.',
    realityCheck: 'The role carries accountability without always having authority, and requires direct conversations when plans slip.',
    aiShift: 'AI automates status and scheduling; alignment, judgment, negotiation and exception handling remain central.',
    routes: ['Project coordinator route', 'Own cross-functional work in an existing role', 'Domain specialist plus delivery methods'],
    proof: ['Lead a scoped project with timeline, risks and retrospective', 'Show how you recovered a delayed or ambiguous initiative'],
    skills: { transferable: ['Planning and prioritisation','Facilitation','Conflict resolution','Executive communication'], roleSpecific: ['Scope and outcome definition','Scheduling and dependencies','Risk and issue management','Budget/resource basics','Governance and reporting','Retrospectives and continuous improvement'], aiDigital: ['Project collaboration tools','AI-assisted planning with human review','Dashboard and workflow automation'] }
  },
  {
    id: 'operations-manager', title: 'Operations Manager', cluster: 'Product, strategy & operations',
    summary: 'Makes everyday delivery reliable, efficient and scalable.',
    does: 'Designs processes, manages capacity and quality, solves recurring failures and coordinates people, vendors and systems.',
    stages: ['college','fresher','early','mid','senior','switcher','returner'], interests: ['organise','analyse','help','influence'],
    values: ['stability','leadership','impact','income'], modes: ['people','structured','active','desk'],
    entry: 'Strong entry routes exist through frontline delivery, coordination, service, manufacturing and logistics roles.', growth: 'Operations manager → regional/head of operations, COO track, process excellence or consulting.',
    realityCheck: 'The work is interruption-heavy and often means owning problems that cross team boundaries.',
    aiShift: 'Automation improves planning and monitoring; resilient processes, people leadership and exception judgment matter more.',
    routes: ['Frontline or coordinator progression', 'Graduate operations programme', 'Transition from project, customer or domain role'],
    proof: ['Improve a process and show cycle-time or quality change', 'Build a simple operating dashboard and weekly review ritual'],
    skills: { transferable: ['People leadership','Structured problem solving','Prioritisation','Vendor/stakeholder negotiation'], roleSpecific: ['Process design','Capacity and resource planning','Quality management','Standard operating procedures','Cost and service metrics','Risk and continuity planning'], aiDigital: ['Operations analytics','Workflow automation','AI forecasting with human exception review'] }
  },
  {
    id: 'management-consultant', title: 'Transformation & Operating-Model Consultant', cluster: 'Product, strategy & operations',
    summary: 'Helps organisations diagnose high-stakes problems and act on them.',
    does: 'Structures ambiguous questions, researches evidence, models options, communicates recommendations and supports change.',
    stages: ['college','fresher','early','mid','senior','switcher'], interests: ['analyse','influence','create','organise'],
    values: ['income','mastery','leadership','impact'], modes: ['people','ambiguous','desk','field'],
    entry: 'Competitive graduate entry exists; experienced specialists can enter as domain experts or independent advisers.', growth: 'Consultant → engagement manager, partner, corporate strategy leader or independent practice.',
    realityCheck: 'Deadlines, travel, client politics and presentation quality can be demanding; advice must survive implementation.',
    aiShift: 'Research and modelling accelerate; trusted judgment, synthesis, client context and change leadership distinguish strong consultants.',
    routes: ['Graduate/analyst recruitment', 'MBA or specialist postgraduate route', 'Experienced domain expert to boutique/independent consulting'],
    proof: ['Create a fact-based strategy case with options and risks', 'Solve a real small-organisation problem and document outcomes'],
    skills: { transferable: ['Structured problem solving','Executive storytelling','Interviewing and facilitation','Commercial judgment'], roleSpecific: ['Hypothesis-led analysis','Market and competitor research','Financial/operational modelling','Recommendation design','Client and workstream management','Change planning'], aiDigital: ['AI research with source verification','Advanced spreadsheets and visualisation','Secure handling of client data'] }
  },
  {
    id: 'entrepreneur', title: 'Entrepreneur / Small-Business Builder', cluster: 'Product, strategy & operations',
    summary: 'Creates and operates a solution people will pay for.',
    does: 'Finds a painful problem, tests demand, sells, delivers, manages cash and builds repeatable systems.',
    stages: ['school','college','fresher','early','mid','senior','returner','switcher','independent'], interests: ['create','influence','build','organise'],
    values: ['autonomy','income','impact','creativity'], modes: ['people','ambiguous','active','remote'],
    entry: 'No single credential; small paid experiments are safer evidence than a grand plan.', growth: 'Solo operator → stable small business, agency, product company, portfolio career or venture-scale founder.',
    realityCheck: 'Revenue, cash flow, rejection, legal duties and repetitive delivery matter more than founder glamour.',
    aiShift: 'AI reduces the cost of research and operations, increasing competition and rewarding distinctive insight, trust and distribution.',
    routes: ['Side project with first paying customers', 'Freelance service that becomes a systemised offer', 'Domain problem spun out from work experience'],
    proof: ['Interview 15 potential users and secure a paid pilot', 'Deliver one repeatable offer with measured margin and satisfaction'],
    skills: { transferable: ['Resilience and self-management','Persuasion and relationship building','Rapid learning','Decision-making under uncertainty'], roleSpecific: ['Customer discovery','Offer and business-model design','Sales and negotiation','Cash-flow and unit economics','Service/operations design','Legal, tax and risk basics'], aiDigital: ['AI-enabled lean operations','Digital distribution and analytics','Privacy, security and automation controls'] }
  },
  {
    id: 'digital-marketer', title: 'AI-Augmented Growth Strategist', cluster: 'Marketing, sales & growth',
    summary: 'Builds measurable attention, demand and customer growth online.',
    does: 'Studies audiences, develops campaigns, creates or coordinates content, runs channels and improves results using data.',
    stages: ['school','college','fresher','early','mid','switcher','returner','independent'], interests: ['create','analyse','influence'],
    values: ['creativity','income','flexibility','impact'], modes: ['people','ambiguous','desk','remote'],
    entry: 'Portfolio and real campaign evidence often matter more than a specific degree.', growth: 'Specialist → growth manager, marketing lead, brand/growth director, consultant or agency owner.',
    realityCheck: 'Platforms change constantly; strong work combines customer insight, creative judgment and disciplined measurement.',
    aiShift: 'AI multiplies content supply, making positioning, originality, distribution, experimentation and brand trust more valuable.',
    routes: ['Run a campaign for a campus group or small organisation', 'Marketing internship or coordinator role', 'Freelance niche service with measurable outcomes'],
    proof: ['Publish a campaign case with objective, creative, spend and outcome', 'Grow a small owned audience and explain the experiments'],
    skills: { transferable: ['Audience empathy','Copy and visual communication','Experimentation','Commercial awareness'], roleSpecific: ['Positioning and messaging','Content strategy','SEO/search basics','Paid media fundamentals','Email/CRM lifecycle','Conversion and marketing analytics'], aiDigital: ['AI-assisted research and production','Analytics and attribution tools','Consent, privacy and platform-risk awareness'] }
  },
  {
    id: 'b2b-sales', title: 'B2B Sales / Account Executive', cluster: 'Marketing, sales & growth',
    summary: 'Helps organisations buy solutions to meaningful business problems.',
    does: 'Finds prospects, discovers needs, builds a business case, handles objections, negotiates and closes mutually workable deals.',
    stages: ['school','college','fresher','early','mid','senior','switcher','returner','independent'], interests: ['influence','help','analyse'],
    values: ['income','leadership','autonomy','mastery'], modes: ['people','ambiguous','desk','field'],
    entry: 'Many industries accept varied degrees and backgrounds; credibility comes from listening, discipline and results.', growth: 'Sales development → account executive, enterprise sales, sales leader, partnerships or founder.',
    realityCheck: 'Rejection, targets and forecasting pressure are real; ethical fit matters more than pushing every prospect.',
    aiShift: 'AI automates prospecting and admin; trust, discovery, negotiation and complex stakeholder alignment gain importance.',
    routes: ['Sales development/inside-sales role', 'Move from customer support or domain expertise', 'Sell a freelance service or small product'],
    proof: ['Run and review a complete discovery conversation', 'Build a target-account plan and evidence-based value proposition'],
    skills: { transferable: ['Active listening','Resilience','Persuasive communication','Negotiation'], roleSpecific: ['Prospecting and account research','Discovery and qualification','Value-based selling','Objection handling','Pipeline and forecast management','Commercial and contract basics'], aiDigital: ['CRM fluency','AI-assisted research and follow-up','Data privacy and responsible outreach'] }
  },
  {
    id: 'customer-success-manager', title: 'Customer Success Manager', cluster: 'Marketing, sales & growth',
    summary: 'Helps customers achieve value and stay successful with a product.',
    does: 'Onboards users, monitors adoption, solves risks, coordinates support and turns customer goals into measurable outcomes.',
    stages: ['college','fresher','early','mid','switcher','returner'], interests: ['help','organise','influence','analyse'],
    values: ['impact','stability','leadership','flexibility'], modes: ['people','structured','desk','remote'],
    entry: 'Good route from support, teaching, account management, implementation or industry-domain roles.', growth: 'CSM → strategic accounts, customer success lead, revenue operations, product or consulting.',
    realityCheck: 'You balance customer advocacy with commercial retention and often coordinate fixes you cannot make alone.',
    aiShift: 'AI handles simple support; proactive advice, change enablement and complex relationship work become the core.',
    routes: ['Customer support to success transition', 'Implementation/onboarding coordinator', 'Domain expert joining a relevant software company'],
    proof: ['Design a 30-day onboarding plan around customer outcomes', 'Analyse a churn scenario and propose measurable interventions'],
    skills: { transferable: ['Empathy and listening','Facilitation','Expectation management','Cross-functional influence'], roleSpecific: ['Customer outcome planning','Onboarding and adoption','Account health and risk signals','Renewal and expansion basics','Escalation management','Voice-of-customer synthesis'], aiDigital: ['CRM/customer-success platforms','AI-assisted account insight','Data interpretation and privacy'] }
  },
  {
    id: 'market-researcher', title: 'Market & Behavioural Intelligence Researcher', cluster: 'Marketing, sales & growth',
    summary: 'Explains what people need, choose and believe using rigorous research.',
    does: 'Designs studies, interviews or surveys people, analyses behaviour and converts evidence into strategic insight.',
    stages: ['college','fresher','early','mid','switcher','returner','independent'], interests: ['analyse','help','create'],
    values: ['mastery','impact','creativity','flexibility'], modes: ['people','independent','structured','desk'],
    entry: 'Psychology, sociology, business, statistics and design backgrounds all offer routes.', growth: 'Researcher → insight lead, UX research, brand strategy, product strategy or independent consultant.',
    realityCheck: 'Good research resists leading questions and attractive stories that the evidence does not support.',
    aiShift: 'AI accelerates coding and synthesis; research design, context, participant trust and interpretive judgment stay critical.',
    routes: ['Research/insights internship', 'Academic research translated into business cases', 'Independent study for a real organisation'],
    proof: ['Run five interviews and publish a transparent synthesis', 'Design and analyse a survey with sampling limitations'],
    skills: { transferable: ['Curiosity and listening','Critical thinking','Storytelling','Stakeholder communication'], roleSpecific: ['Qualitative research','Survey and quantitative design','Sampling and bias awareness','Thematic/statistical analysis','Insight synthesis','Research ethics'], aiDigital: ['Research repositories and analysis tools','AI-assisted synthesis with traceability','Data protection and consent'] }
  },
  {
    id: 'brand-content-strategist', title: 'Brand, Content & AI Editorial Strategist', cluster: 'Marketing, sales & growth',
    summary: 'Builds a coherent voice and content system that earns attention and trust.',
    does: 'Researches audiences, shapes positioning, plans narratives and channels, and measures whether content changes behaviour.',
    stages: ['school','college','fresher','early','mid','switcher','returner','independent'], interests: ['create','influence','analyse'],
    values: ['creativity','autonomy','impact','flexibility'], modes: ['independent','ambiguous','desk','remote'],
    entry: 'Writing, design, journalism, marketing and domain expertise can all lead here through portfolio work.', growth: 'Strategist → content/brand lead, creative director, communications leader or independent studio.',
    realityCheck: 'The job includes research, editing, distribution and stakeholder negotiation—not just having ideas.',
    aiShift: 'Generic content is abundant; distinctive point of view, editorial judgment, credibility and audience relationships are the moat.',
    routes: ['Writing/content portfolio plus small client work', 'Editorial or marketing coordinator role', 'Domain expert building an owned audience'],
    proof: ['Create a messaging system and three-channel content series', 'Show how content moved a meaningful audience or business metric'],
    skills: { transferable: ['Research and synthesis','Persuasive writing','Editorial judgment','Stakeholder influence'], roleSpecific: ['Positioning and messaging','Narrative and content architecture','Channel strategy','Copywriting and editing','Content operations','Audience and performance measurement'], aiDigital: ['AI-assisted ideation with originality checks','SEO and analytics','Copyright, disclosure and misinformation awareness'] }
  },
  {
    id: 'ux-product-designer', title: 'Product Experience & AI Interaction Designer', cluster: 'Design & creative work',
    summary: 'Designs useful, usable and coherent digital experiences.',
    does: 'Studies users, maps flows, prototypes interfaces, tests assumptions and works with product and engineering to ship improvements.',
    stages: ['school','college','fresher','early','mid','switcher','returner','independent'], interests: ['create','help','analyse'],
    values: ['creativity','impact','mastery','flexibility'], modes: ['people','ambiguous','desk','remote'],
    entry: 'A strong case-study portfolio can outweigh degree title; visual polish without reasoning is not enough.', growth: 'Product designer → senior/staff designer, design manager, research/strategy specialist or founder.',
    realityCheck: 'Constraints, iteration, accessibility and stakeholder critique are daily work; it is not only making beautiful screens.',
    aiShift: 'AI speeds interface production, raising the value of user insight, systems thinking, taste, accessibility and product judgment.',
    routes: ['Design degree plus product case studies', 'Transition from graphic design, research or development', 'Self-directed redesign and real client/product work'],
    proof: ['Document a problem-to-tested-prototype case study', 'Improve a live experience and show accessibility and outcome evidence'],
    skills: { transferable: ['Empathy and interviewing','Systems thinking','Storytelling','Feedback and collaboration'], roleSpecific: ['User research basics','Information architecture','Interaction design','Visual and interface design','Prototyping and usability testing','Accessibility and design systems'], aiDigital: ['Modern design/prototyping tools','AI-assisted exploration with human critique','Product analytics literacy'] }
  },
  {
    id: 'visual-designer', title: 'Visual Systems & Creative Direction Designer', cluster: 'Design & creative work',
    summary: 'Makes ideas understandable and memorable through visual systems.',
    does: 'Translates a brief into layouts, identity, illustration or campaign assets while protecting clarity, consistency and craft.',
    stages: ['school','college','fresher','early','mid','switcher','returner','independent'], interests: ['create','build','influence'],
    values: ['creativity','autonomy','flexibility','mastery'], modes: ['independent','structured','desk','remote'],
    entry: 'Portfolio quality, process and reliability usually matter more than a particular degree.', growth: 'Designer → senior/brand designer, art director, creative director or studio owner.',
    realityCheck: 'Design is problem-solving under briefs, revisions, deadlines and production constraints—not unrestricted self-expression.',
    aiShift: 'Generation becomes cheap; art direction, originality, brand coherence, rights awareness and production judgment gain value.',
    routes: ['Design education plus portfolio', 'Self-taught portfolio and supervised freelance work', 'Transition from illustration, marketing or communications'],
    proof: ['Build a complete identity system across real touchpoints', 'Show three rounds from brief and rationale to final production files'],
    skills: { transferable: ['Visual communication','Brief interpretation','Feedback and iteration','Client communication'], roleSpecific: ['Typography','Layout and hierarchy','Colour and image craft','Brand systems','Print/digital production','Art direction basics'], aiDigital: ['Professional design tools','Responsible generative-image workflow','Licensing, attribution and asset management'] }
  },
  {
    id: 'video-producer', title: 'Video Producer / Synthetic Media Editor', cluster: 'Design & creative work',
    summary: 'Shapes moving-image stories from idea through final delivery.',
    does: 'Develops concepts, plans shoots, records or sources material, edits picture and sound, and adapts work for audiences and channels.',
    stages: ['school','college','fresher','early','mid','switcher','returner','independent'], interests: ['create','build','organise'],
    values: ['creativity','autonomy','flexibility','impact'], modes: ['independent','active','desk','field'],
    entry: 'A focused reel and dependable execution can create opportunities before formal credentials.', growth: 'Editor/producer → senior editor, director, post-production lead, creative producer or studio owner.',
    realityCheck: 'File management, revisions, audio cleanup, rights and deadlines are as important as cinematic moments.',
    aiShift: 'AI automates rough cuts and cleanup; narrative taste, direction, authenticity, consent and differentiated craft matter more.',
    routes: ['Personal channel or documentary portfolio', 'Assistant editor/production role', 'Freelance work for a defined niche'],
    proof: ['Create a 60–90 second story with a clear audience and retention goal', 'Publish a before/after edit breakdown including sound and pacing choices'],
    skills: { transferable: ['Storytelling','Planning and organisation','Feedback handling','Audience awareness'], roleSpecific: ['Scripting and storyboarding','Camera and lighting basics','Editing and pacing','Sound recording and mixing','Motion/graphics basics','Production and rights management'], aiDigital: ['Editing and asset tools','AI-assisted transcription/cleanup with review','Synthetic-media disclosure and consent'] }
  },
  {
    id: 'technical-writer', title: 'Knowledge Systems & Technical Content Designer', cluster: 'Design & creative work',
    summary: 'Makes complex products and processes clear enough to use.',
    does: 'Researches systems and user questions, structures information, writes guidance and tests whether people can complete tasks.',
    stages: ['college','fresher','early','mid','senior','switcher','returner','independent'], interests: ['create','analyse','help','organise'],
    values: ['mastery','impact','flexibility','stability'], modes: ['independent','structured','desk','remote'],
    entry: 'Strong writing plus domain learning can enable moves from engineering, support, teaching, science or journalism.', growth: 'Writer → senior/lead writer, content design, developer education, knowledge management or consulting.',
    realityCheck: 'You must chase changing facts, understand systems deeply and advocate for clarity across many contributors.',
    aiShift: 'AI drafts text; verified accuracy, information architecture, user testing, voice and accountable ownership distinguish professionals.',
    routes: ['Documentation portfolio for an open-source tool', 'Transition from support, QA, engineering or teaching', 'Writing/communications route with technical specialisation'],
    proof: ['Rewrite a confusing workflow and test it with users', 'Publish a structured guide with examples, edge cases and maintenance notes'],
    skills: { transferable: ['Plain-language writing','Research and interviewing','Information organisation','Editorial collaboration'], roleSpecific: ['Audience and task analysis','Information architecture','Procedural and conceptual writing','Editing and style systems','Usability testing for content','Documentation operations'], aiDigital: ['Docs-as-code/content tools','AI-assisted drafting with source checks','Versioning, accessibility and search'] }
  },
  {
    id: 'teacher-learning-designer', title: 'Teacher / Learning Experience Designer', cluster: 'People, education & development',
    summary: 'Helps people build understanding and capability that lasts.',
    does: 'Diagnoses learning needs, explains ideas, designs practice and feedback, and adapts instruction to different learners.',
    stages: ['school','college','fresher','early','mid','senior','switcher','returner','independent'], interests: ['help','create','organise'],
    values: ['impact','stability','creativity','mastery'], modes: ['people','structured','active','remote'],
    entry: 'School teaching is regulated in many places; corporate and digital learning offer broader transition routes.', growth: 'Teacher/designer → curriculum lead, learning manager, education product, trainer, coach or school leadership.',
    realityCheck: 'Planning, assessment, administration, inclusion and emotional labour sit behind every good lesson.',
    aiShift: 'AI expands personalised practice and content creation; motivation, diagnosis, feedback, safeguarding and learning design stay human-led.',
    routes: ['Teacher-education and licensure route', 'Subject expert to trainer/facilitator', 'Instructional-design portfolio for workplace or online learning'],
    proof: ['Design and deliver a learning module with pre/post evidence', 'Create practice, feedback and accessibility adaptations for one concept'],
    skills: { transferable: ['Empathy and communication','Facilitation','Planning','Coaching and feedback'], roleSpecific: ['Learning-needs analysis','Instructional design','Assessment and feedback','Classroom/group management','Inclusive and accessible learning','Curriculum and evaluation'], aiDigital: ['Learning platforms and authoring tools','AI-assisted differentiation with verification','Digital safeguarding and learner-data privacy'] }
  },
  {
    id: 'career-development-practitioner', title: 'Career Development Practitioner', cluster: 'People, education & development',
    summary: 'Helps people make informed education, work and transition decisions.',
    does: 'Explores a person’s context, strengths and constraints; shares labour-market information; and supports realistic experiments and decisions.',
    stages: ['college','early','mid','senior','switcher','returner','independent'], interests: ['help','analyse','organise'],
    values: ['impact','autonomy','mastery','flexibility'], modes: ['people','structured','desk','remote'],
    entry: 'Professional standards vary by country; credible practice needs counselling skills, labour-market literacy and clear ethical boundaries.', growth: 'Practitioner → specialist counsellor, school/university lead, workforce programme leader or independent practice.',
    realityCheck: 'The role is not choosing for people or promising jobs; it is helping them think, test and act with better evidence.',
    aiShift: 'AI can surface options; trust, context, emotional support, bias correction and accountable judgment remain central.',
    routes: ['Career development/counselling qualification', 'Education, HR, coaching or workforce-development transition', 'Supervised practice in school, college or employment service'],
    proof: ['Create an evidence-based career exploration session plan', 'Document anonymised cases showing options, constraints and ethical decisions'],
    skills: { transferable: ['Deep listening','Questioning and facilitation','Research literacy','Boundary setting'], roleSpecific: ['Career-development theory','Assessment interpretation','Labour-market information','Decision and action planning','Inclusive guidance','Referral, ethics and safeguarding'], aiDigital: ['Career-information platforms','Responsible AI-assisted exploration','Privacy and bias auditing'] }
  },
  {
    id: 'hr-talent-development', title: 'HR / Talent Development Specialist', cluster: 'People, education & development',
    summary: 'Builds fair people systems and helps employees grow.',
    does: 'Supports hiring, performance, learning, employee experience and workforce decisions while balancing people and organisational needs.',
    stages: ['college','fresher','early','mid','senior','switcher','returner'], interests: ['help','organise','influence','analyse'],
    values: ['impact','stability','leadership','mastery'], modes: ['people','structured','desk','remote'],
    entry: 'HR education helps, but transitions from operations, recruiting, teaching, psychology and business are common.', growth: 'Specialist → HR business partner, talent/learning lead, people analytics or chief people officer.',
    realityCheck: 'HR serves employees and the organisation, handles confidential conflict and must apply policy consistently.',
    aiShift: 'AI automates admin and matching; fair judgment, workforce design, coaching, trust and governance become more important.',
    routes: ['HR/recruiting coordinator', 'Learning and development or people-operations role', 'Domain manager moving into people strategy'],
    proof: ['Design a structured, bias-aware hiring scorecard', 'Create a learning or performance intervention with outcome measures'],
    skills: { transferable: ['Confidential communication','Facilitation and coaching','Conflict navigation','Data-informed judgment'], roleSpecific: ['Talent acquisition basics','Performance and development systems','Employment policy awareness','Learning-needs analysis','Employee relations','Workforce and succession planning'], aiDigital: ['HR systems and people analytics','AI hiring-tool governance','Privacy, bias and data ethics'] }
  },
  {
    id: 'psychologist-counsellor', title: 'Psychologist / Mental-Health Counsellor', cluster: 'People, education & development',
    summary: 'Supports mental health and behaviour through evidence-based professional practice.',
    does: 'Assesses needs, builds a therapeutic relationship, applies appropriate interventions and maintains clinical records and safeguards.',
    stages: ['school','college','fresher','early','mid','senior','returner'], interests: ['help','analyse'],
    values: ['impact','mastery','stability','autonomy'], modes: ['people','structured','desk','remote'],
    entry: 'A regulated profession: required accredited education, supervised practice and licence/registration vary by country and role.', growth: 'Practitioner → specialist, supervisor, clinical lead, researcher, educator or private practice.',
    realityCheck: 'Emotional load, documentation, supervision and strict ethical limits are core parts of safe practice.',
    aiShift: 'Digital tools may support screening and administration; diagnosis, therapy, safeguarding and clinical accountability require qualified humans.',
    routes: ['Accredited psychology/counselling education', 'Required supervised clinical practice', 'Registration/licensure and continuing professional development'],
    proof: ['Use supervised placements and competency records—not unsupervised public “practice”', 'Demonstrate ethics, formulation and reflective practice through approved training'],
    skills: { transferable: ['Empathy and presence','Critical reflection','Clear communication','Emotional self-regulation'], roleSpecific: ['Psychological theory','Assessment and formulation','Evidence-based intervention','Therapeutic relationship','Risk and safeguarding','Ethics, records and referral'], aiDigital: ['Telehealth competence','Digital mental-health evidence literacy','Confidentiality and clinical data protection'] }
  },
  {
    id: 'financial-analyst', title: 'Financial Planning & Decision Analyst', cluster: 'Finance, risk & governance',
    summary: 'Uses financial evidence to evaluate performance, risk and investment choices.',
    does: 'Builds forecasts and models, analyses results, compares scenarios and explains financial implications to decision-makers.',
    stages: ['college','fresher','early','mid','switcher','returner'], interests: ['analyse','organise','influence'],
    values: ['income','stability','mastery','leadership'], modes: ['independent','structured','desk','remote'],
    entry: 'Finance, accounting, economics and analytical degrees are common; strong modelling proof supports transitions.', growth: 'Analyst → senior analyst, finance manager, FP&A lead, investment specialist or CFO track.',
    realityCheck: 'Accuracy, deadlines, assumptions and repetitive reporting matter; a beautiful model can still be based on weak logic.',
    aiShift: 'AI speeds research and modelling; scenario judgment, business partnership, controls and accountable recommendations become more valuable.',
    routes: ['Finance/economics/accounting degree', 'Accounting or operations transition into FP&A', 'Industry certification plus modelling portfolio'],
    proof: ['Build a three-scenario forecast with assumptions and sensitivities', 'Analyse a public company and explain key risks without investment hype'],
    skills: { transferable: ['Quantitative reasoning','Attention to detail','Executive communication','Commercial judgment'], roleSpecific: ['Financial statements','Forecasting and budgeting','Financial modelling','Variance and ratio analysis','Valuation basics','Scenario and sensitivity analysis'], aiDigital: ['Advanced spreadsheets/BI','AI-assisted research with source checks','Financial-data governance'] }
  },
  {
    id: 'accountant', title: 'Accounting Controls & Finance Systems Specialist', cluster: 'Finance, risk & governance',
    summary: 'Keeps financial records accurate, controlled and decision-ready.',
    does: 'Records and reconciles transactions, prepares reports, supports tax/audit duties and improves financial processes.',
    stages: ['school','college','fresher','early','mid','senior','switcher','returner','independent'], interests: ['organise','analyse'],
    values: ['stability','mastery','income','autonomy'], modes: ['structured','independent','desk','remote'],
    entry: 'Routes range from vocational bookkeeping to professional accountancy qualifications, depending on responsibility and country.', growth: 'Accountant → controller, audit/tax specialist, finance manager, CFO track or practice owner.',
    realityCheck: 'Precision, regulation, evidence trails and deadline cycles are non-negotiable; shortcuts create real risk.',
    aiShift: 'Transaction work automates; controls, interpretation, advisory ability and system/process ownership become more valuable.',
    routes: ['Commerce/accounting degree', 'Bookkeeping or finance-operations apprenticeship', 'Professional accountancy qualification'],
    proof: ['Build a clean month-end close and reconciliation simulation', 'Document a control improvement with error-prevention logic'],
    skills: { transferable: ['Accuracy and discipline','Ethical judgment','Client/stakeholder communication','Process improvement'], roleSpecific: ['Double-entry and ledgers','Reconciliation and close','Financial reporting','Tax and compliance awareness','Internal controls','Audit evidence and documentation'], aiDigital: ['Accounting/ERP software','Spreadsheet automation','AI-assisted anomaly review with human accountability'] }
  },
  {
    id: 'risk-compliance', title: 'Risk & Compliance Specialist', cluster: 'Finance, risk & governance',
    summary: 'Helps organisations act safely, legally and responsibly.',
    does: 'Interprets obligations, assesses risks, designs controls, investigates issues and reports whether safeguards are working.',
    stages: ['college','fresher','early','mid','senior','switcher','returner'], interests: ['analyse','organise','help'],
    values: ['stability','impact','mastery','leadership'], modes: ['structured','independent','desk','remote'],
    entry: 'Law, finance, audit, cybersecurity, operations and regulated-industry backgrounds all provide routes.', growth: 'Analyst → risk/compliance manager, specialist lead, internal audit, governance director or chief risk officer.',
    realityCheck: 'The job requires constructive challenge: protecting standards without becoming a box-ticking blocker.',
    aiShift: 'Automated monitoring grows, alongside new AI, privacy and model risks that require human interpretation and accountability.',
    routes: ['Graduate analyst in a regulated sector', 'Audit/operations/legal transition', 'Specialist certification backed by control-testing experience'],
    proof: ['Create a risk register with controls and residual-risk logic', 'Assess a realistic policy/process and document gaps and remediation'],
    skills: { transferable: ['Ethical judgment','Analytical writing','Constructive challenge','Stakeholder influence'], roleSpecific: ['Risk identification and assessment','Regulatory research','Control design and testing','Policy and procedure writing','Issue investigation','Governance and reporting'], aiDigital: ['GRC/data-analysis tools','AI governance and model risk','Privacy and information-security literacy'] }
  },
  {
    id: 'policy-analyst', title: 'Policy Analyst', cluster: 'Finance, risk & governance',
    summary: 'Uses evidence to improve public or organisational rules and programmes.',
    does: 'Researches problems, consults stakeholders, compares policy options, anticipates consequences and writes recommendations.',
    stages: ['college','fresher','early','mid','senior','switcher','returner'], interests: ['analyse','help','influence','create'],
    values: ['impact','mastery','stability','leadership'], modes: ['people','structured','desk','field'],
    entry: 'Public policy, economics, law, social science, science and domain-expert routes are common.', growth: 'Analyst → senior adviser, programme/evaluation lead, government leadership, think tank or public-affairs role.',
    realityCheck: 'Evidence competes with politics, budgets and implementation limits; progress can be slow and indirect.',
    aiShift: 'AI speeds review and scenario work; source integrity, public judgment, consultation and accountability remain essential.',
    routes: ['Policy/social-science postgraduate or graduate role', 'Research/advocacy/programme transition', 'Domain expert moving into standards or government affairs'],
    proof: ['Write a balanced policy brief with options and trade-offs', 'Evaluate a public programme using transparent evidence and limitations'],
    skills: { transferable: ['Critical thinking','Research synthesis','Plain-language writing','Stakeholder consultation'], roleSpecific: ['Policy research methods','Economic/social evidence literacy','Option and impact analysis','Regulatory/legislative awareness','Program evaluation','Briefing and consultation'], aiDigital: ['Data analysis/visualisation','AI-assisted review with citation verification','Open-data and privacy literacy'] }
  },
  {
    id: 'clinical-research', title: 'Clinical Research Professional', cluster: 'Health, science & care',
    summary: 'Helps test medical interventions safely and rigorously.',
    does: 'Coordinates studies, protects participants, maintains compliant records, monitors data quality and supports evidence generation.',
    stages: ['college','fresher','early','mid','switcher','returner'], interests: ['analyse','help','organise'],
    values: ['impact','stability','mastery','income'], modes: ['people','structured','desk','field'],
    entry: 'Usually needs a life-science, pharmacy, nursing, medical or related background plus research-practice training.', growth: 'Coordinator → CRA, trial manager, clinical operations lead, regulatory affairs or research leadership.',
    realityCheck: 'Participant safety, protocol discipline and documentation are more important than speed or exciting findings.',
    aiShift: 'AI supports recruitment and analysis; consent, protocol oversight, bias, data integrity and clinical accountability remain human responsibilities.',
    routes: ['Life-science/health degree plus clinical research training', 'Hospital/research coordinator role', 'Transition from pharmacy, nursing, labs or data management'],
    proof: ['Use accredited simulations or supervised study work', 'Demonstrate protocol, consent and data-quality competence in approved settings'],
    skills: { transferable: ['Attention to detail','Ethical judgment','Participant communication','Cross-site coordination'], roleSpecific: ['Research design basics','Good Clinical Practice','Protocol and consent procedures','Clinical data management','Safety and adverse-event processes','Regulatory documentation'], aiDigital: ['Clinical trial systems','Data-quality and statistical literacy','Health-data privacy and AI evidence appraisal'] }
  },
  {
    id: 'public-health-manager', title: 'Public Health Programme Manager', cluster: 'Health, science & care',
    summary: 'Designs and delivers programmes that improve health at population scale.',
    does: 'Assesses needs, coordinates services and partners, manages resources, tracks outcomes and adapts interventions to communities.',
    stages: ['college','fresher','early','mid','senior','switcher','returner'], interests: ['help','organise','analyse','influence'],
    values: ['impact','leadership','stability','mastery'], modes: ['people','field','structured','active'],
    entry: 'Public health, medicine, nursing, social science, development and program-operations backgrounds are common.', growth: 'Coordinator → programme manager/director, health policy, epidemiology, global health or nonprofit leadership.',
    realityCheck: 'Community trust, logistics, funding and unequal access can matter as much as technical programme design.',
    aiShift: 'AI improves surveillance and planning, but local context, equity, trust, consent and resource decisions require human leadership.',
    routes: ['Public-health or allied-health education', 'Community/NGO health programme role', 'Healthcare professional moving into population programmes'],
    proof: ['Design a needs assessment and intervention logic model', 'Evaluate a real or simulated programme with equity and implementation measures'],
    skills: { transferable: ['Community empathy','Program management','Partnership building','Evidence communication'], roleSpecific: ['Epidemiology basics','Needs assessment','Program design and evaluation','Health promotion','Budget and grant management','Equity and safeguarding'], aiDigital: ['Public-health data tools','Digital health literacy','Responsible use of health data and predictive systems'] }
  },
  {
    id: 'healthcare-operations', title: 'Healthcare Operations Manager', cluster: 'Health, science & care',
    summary: 'Makes care services safer, smoother and more accessible.',
    does: 'Coordinates capacity, patient flow, quality, staff processes and compliance across clinics, hospitals or health services.',
    stages: ['college','fresher','early','mid','senior','switcher','returner'], interests: ['organise','help','analyse','influence'],
    values: ['impact','stability','leadership','income'], modes: ['people','active','structured','field'],
    entry: 'Healthcare administration routes and transitions from clinical, operations or quality roles are common.', growth: 'Coordinator → service/operations manager, hospital administrator, quality lead or health-system executive.',
    realityCheck: 'Decisions affect patient safety and exhausted teams; operational efficiency cannot ignore care quality.',
    aiShift: 'AI supports scheduling and documentation; safe workflow design, escalation and accountable resource decisions remain essential.',
    routes: ['Healthcare administration education', 'Clinical professional to service management', 'Quality, billing or patient-services progression'],
    proof: ['Map and improve a patient-flow process in an approved setting', 'Build a balanced quality, access and capacity dashboard'],
    skills: { transferable: ['People leadership','Calm escalation','Process improvement','Stakeholder communication'], roleSpecific: ['Healthcare workflow literacy','Capacity and rostering','Quality and patient safety','Service metrics','Compliance and records','Continuity and incident management'], aiDigital: ['Health information systems','Operations analytics','AI governance and patient-data privacy'] }
  },
  {
    id: 'sustainability-analyst', title: 'Sustainability / ESG Analyst', cluster: 'Green, infrastructure & skilled work',
    summary: 'Measures environmental impact and helps organisations improve it credibly.',
    does: 'Collects emissions and resource data, interprets standards, evaluates initiatives and supports transparent sustainability decisions.',
    stages: ['school','college','fresher','early','mid','switcher','returner'], interests: ['analyse','help','organise'],
    values: ['impact','mastery','stability','leadership'], modes: ['independent','structured','desk','field'],
    entry: 'Environmental science, engineering, finance, policy and operations backgrounds can all lead in.', growth: 'Analyst → sustainability manager, carbon specialist, climate risk, consulting or strategy leadership.',
    realityCheck: 'The work requires defensible data and trade-offs; vague green claims can create reputational and regulatory risk.',
    aiShift: 'Automation supports data gathering; boundary choices, standards interpretation, assurance and transition strategy need judgment.',
    routes: ['Environmental/sustainability degree', 'Operations or finance transition into reporting', 'Climate/ESG certification plus quantified projects'],
    proof: ['Create a scoped emissions inventory with assumptions', 'Evaluate an intervention by cost, impact, risk and implementation feasibility'],
    skills: { transferable: ['Systems thinking','Quantitative reasoning','Stakeholder communication','Ethical judgment'], roleSpecific: ['Climate and sustainability fundamentals','Carbon accounting','ESG/reporting standards awareness','Life-cycle and materiality thinking','Data assurance','Transition planning'], aiDigital: ['Sustainability data platforms','Geospatial/data visualisation basics','AI-assisted reporting with traceability'] }
  },
  {
    id: 'supply-chain-analyst', title: 'Supply Chain & Logistics Analyst', cluster: 'Green, infrastructure & skilled work',
    summary: 'Keeps materials and products moving through uncertain systems.',
    does: 'Forecasts demand, plans inventory and transport, analyses delays and cost, and improves resilience across suppliers and operations.',
    stages: ['school','college','fresher','early','mid','senior','switcher','returner'], interests: ['organise','analyse','build'],
    values: ['stability','income','impact','leadership'], modes: ['people','structured','desk','field'],
    entry: 'Business, engineering, commerce and frontline logistics all provide credible routes.', growth: 'Analyst → planner, procurement/logistics manager, supply-chain director or operations leadership.',
    realityCheck: 'Weather, vendors, geopolitics and physical constraints make perfect plans impossible; exception management is constant.',
    aiShift: 'AI improves forecasting and routing; resilient network design, supplier relationships and accountable exceptions stay crucial.',
    routes: ['Supply-chain/business/engineering degree', 'Warehouse/logistics progression', 'Procurement, finance or operations transition'],
    proof: ['Model inventory trade-offs under demand changes', 'Map a supply chain and propose resilience improvements with costs'],
    skills: { transferable: ['Systems thinking','Quantitative analysis','Negotiation','Cross-functional coordination'], roleSpecific: ['Demand and inventory planning','Procurement and supplier basics','Logistics and transport','Process and capacity analysis','Cost-to-serve metrics','Risk and resilience planning'], aiDigital: ['ERP/planning tools','Forecasting and visualisation','AI recommendations with human exception control'] }
  },
  {
    id: 'renewable-energy-technician', title: 'Renewable Energy Technician', cluster: 'Green, infrastructure & skilled work',
    summary: 'Installs, tests and maintains clean-energy equipment safely.',
    does: 'Works with solar, wind, storage or related systems; follows plans, diagnoses faults and protects safety and performance.',
    stages: ['school','college','fresher','early','mid','switcher','returner','independent'], interests: ['build','analyse','help'],
    values: ['stability','impact','mastery','income'], modes: ['active','field','structured','people'],
    entry: 'Vocational training, apprenticeship and required electrical/safety credentials are primary routes.', growth: 'Technician → senior technician, site supervisor, commissioning specialist, trainer or service business owner.',
    realityCheck: 'Outdoor work, heights, travel, physical safety and regulation may be part of the job; training cannot be replaced by online tutorials.',
    aiShift: 'Remote monitoring improves diagnosis, while hands-on installation, safety judgment and field repair remain difficult to automate.',
    routes: ['Accredited electrical/renewable-energy vocational programme', 'Supervised apprenticeship', 'Licensed electrical technician adding renewable specialisation'],
    proof: ['Complete supervised practical assessments', 'Document safe inspection, fault-finding and commissioning in approved training'],
    skills: { transferable: ['Safety discipline','Team communication','Problem solving','Customer/service orientation'], roleSpecific: ['Electrical fundamentals','System installation','Testing and commissioning','Fault diagnosis','Preventive maintenance','Codes, permits and worksite safety'], aiDigital: ['Digital meters and monitoring systems','Maintenance diagnostics','Technical documentation and mobile field tools'] }
  },
  {
    id: 'industrial-automation-technician', title: 'Industrial Automation Technician', cluster: 'Green, infrastructure & skilled work',
    summary: 'Keeps automated machinery and control systems working reliably.',
    does: 'Installs sensors and controls, reads diagrams, diagnoses equipment failures, programmes basic automation and performs safe maintenance.',
    stages: ['school','college','fresher','early','mid','switcher','returner'], interests: ['build','analyse','organise'],
    values: ['stability','income','mastery','impact'], modes: ['active','field','structured','people'],
    entry: 'Diploma, ITI/vocational training or apprenticeship in electrical, instrumentation, mechatronics or automation is typical.', growth: 'Technician → controls engineer, maintenance lead, commissioning specialist, plant automation or service business.',
    realityCheck: 'Production pressure and electrical/mechanical hazards demand disciplined lockout, testing and escalation.',
    aiShift: 'Predictive maintenance grows, but physical diagnosis, safe intervention and integration across old and new equipment remain human-intensive.',
    routes: ['Vocational/diploma route in mechatronics or instrumentation', 'Electrical maintenance apprenticeship', 'Manufacturing technician adding PLC/controls skills'],
    proof: ['Complete supervised wiring, PLC and fault-finding assessments', 'Build a safe training-rig automation with diagrams and test cases'],
    skills: { transferable: ['Safety discipline','Logical troubleshooting','Team handovers','Continuous improvement'], roleSpecific: ['Electrical and instrumentation basics','PLC programming','Sensors and actuators','Control-panel and diagram reading','Industrial networking basics','Preventive and corrective maintenance'], aiDigital: ['HMI/SCADA systems','Condition monitoring and data logging','Cybersecurity awareness for operational technology'] }
  },
  {
    id: 'social-impact-manager', title: 'Social Impact Programme Manager', cluster: 'Community & public service',
    summary: 'Turns a social mission into a programme that delivers measurable benefit.',
    does: 'Co-designs interventions with communities, coordinates partners and budgets, tracks outcomes and learns what works.',
    stages: ['school','college','fresher','early','mid','senior','switcher','returner','independent'], interests: ['help','organise','influence','analyse'],
    values: ['impact','leadership','autonomy','mastery'], modes: ['people','field','ambiguous','active'],
    entry: 'Routes include development studies, social science, education, public health and hands-on community/NGO experience.', growth: 'Coordinator → programme manager/director, monitoring and evaluation, philanthropy, policy or nonprofit leadership.',
    realityCheck: 'Good intentions are insufficient; power, safeguarding, funding restrictions and unintended effects must be managed.',
    aiShift: 'Digital tools support outreach and measurement, but legitimacy, trust, inclusion and ethical field judgment are local and human.',
    routes: ['Volunteer/intern with supervised responsibility', 'Development/social-science education', 'Domain professional moving into mission-led programmes'],
    proof: ['Create a participatory needs assessment and theory of change', 'Evaluate a small programme with participant voice and outcome evidence'],
    skills: { transferable: ['Community listening','Partnership building','Facilitation','Resourceful problem solving'], roleSpecific: ['Participatory needs assessment','Program and theory-of-change design','Budget and grant management','Monitoring and evaluation','Safeguarding and inclusion','Field operations and reporting'], aiDigital: ['Data collection and visualisation','Digital inclusion and accessibility','Responsible beneficiary-data handling'] }
  },
  {
    id:'nursing-allied-health', title:'Nursing & Allied Health Professional', cluster:'Health, science & care', summary:'Delivers skilled, person-centred care across hospitals, clinics and communities.',
    does:'Assesses needs, performs authorised clinical care, monitors change, educates patients and coordinates safely with a multidisciplinary team.', stages:['school','college','fresher','early','mid','senior','returner'], interests:['help','analyse','organise'], values:['impact','stability','mastery','leadership'], modes:['people','active','structured','field'],
    entry:'Requires locally recognised education, clinical placements and registration for the chosen profession; scopes vary sharply by country.', growth:'Practitioner → specialist, educator, advanced practice, service leadership, research or public health.', realityCheck:'Shift work, emotional exposure, physical demands, documentation and patient-safety accountability are central.', aiShift:'AI supports documentation, monitoring and decision prompts; hands-on assessment, trust, escalation and accountable clinical judgment remain human.',
    routes:['Accredited nursing or allied-health degree/diploma','Recognised bridge or return-to-practice programme','Support-worker pathway into regulated study'], proof:['Complete supervised clinical competency assessments','Create a de-identified care-education resource and evaluate understanding'],
    skills:{transferable:['Compassionate communication','Observation and escalation','Team coordination','Emotional self-regulation'],roleSpecific:['Clinical assessment within scope','Safe care procedures','Medication or treatment safety','Patient education','Care planning and documentation','Infection prevention'],aiDigital:['Electronic health-record fluency','Clinical decision-support verification','Privacy and digital health literacy']}
  },
  {
    id:'community-care-worker', title:'Community Care & Support Professional', cluster:'Health, science & care', summary:'Supports older, disabled or vulnerable people to live with dignity and agency.',
    does:'Provides daily-living support, observes wellbeing, follows care plans, safeguards rights and coordinates with families and services.', stages:['school','college','fresher','early','mid','returner','switcher'], interests:['help','organise'], values:['impact','stability','mastery','flexibility'], modes:['people','active','field','structured'],
    entry:'Routes range from employer training and vocational certificates to regulated support qualifications; safeguarding checks are common.', growth:'Support worker → senior carer, specialist support, care coordinator, assessor or service manager.', realityCheck:'Care can be physically and emotionally demanding; low staffing, travel, intimate support and irregular hours need honest scrutiny.', aiShift:'Scheduling and records automate, while presence, safeguarding, subtle observation and respectful human support remain central.',
    routes:['Employer-supported entry with supervised training','Vocational care qualification','Transition from family/community care with formal safeguarding and scope training'], proof:['Complete supervised care and safeguarding competencies','Design an accessible daily-support plan using a fictional case'],
    skills:{transferable:['Empathic listening','Reliability and boundaries','Observation and reporting','Conflict de-escalation'],roleSpecific:['Person-centred support','Safeguarding and duty of care','Mobility and daily-living assistance','Health-change recognition','Care-plan implementation','Inclusive communication'],aiDigital:['Digital care-record use','Assistive technology awareness','Privacy and consent in care data']}
  },
  {
    id:'social-worker-case-coordinator', title:'Social Worker & Case Coordinator', cluster:'Health, science & care', summary:'Helps people navigate complex life circumstances, rights, risks and services through accountable professional practice.',
    does:'Builds relationships, assesses strengths and needs, coordinates services and entitlements, safeguards people, records decisions and advocates within legal and ethical duties.', stages:['school','college','fresher','early','mid','senior','returner','switcher'], interests:['help','organise','analyse','influence'], values:['impact','stability','mastery','leadership'], modes:['people','field','structured','ambiguous'],
    entry:'Usually requires a locally recognised social-work qualification, supervised placements, registration or licensing where applicable, safeguarding checks and continuing professional development.', growth:'Practitioner → specialist social worker, senior practitioner, supervisor, safeguarding lead, policy adviser, educator or service leader.', realityCheck:'Caseloads, scarce services, travel, documentation, trauma exposure and legal or ethical accountability sit alongside meaningful relationship work.', aiShift:'AI may support case recording, resource search and administrative triage; consent, relationship, contextual assessment, safeguarding and statutory judgment remain accountable human work.',
    routes:['Accredited social-work degree with supervised placements','Locally recognised bridge or return-to-practice route','Support, care or community-work experience followed by accredited professional study'], proof:['Complete assessed supervised-practice competencies and reflective case evidence','Build a fictional case-coordination plan showing rights, risk, resources, consent, uncertainty and escalation'],
    skills:{transferable:['Disciplined empathy','Reflective judgment','Cross-agency coordination','Professional boundaries and resilience'],roleSpecific:['Strengths-and-needs assessment','Case planning and review','Safeguarding and risk escalation','Legal and ethical social-work practice','Resource navigation and advocacy','Accurate case recording'],aiDigital:['Digital case-management systems','AI-assisted documentation verification','Privacy, consent and accessible communication']}
  },
  {
    id:'early-childhood-educator', title:'Early Childhood Educator', cluster:'People, education & development', summary:'Builds safe, playful environments where young children develop and belong.',
    does:'Observes development, designs play-based learning, partners with families, safeguards children and adapts support to diverse needs.', stages:['school','college','fresher','early','mid','returner'], interests:['help','create','organise'], values:['impact','stability','creativity','mastery'], modes:['people','active','structured'],
    entry:'Usually needs locally recognised early-childhood education, safeguarding clearance and supervised practice; requirements vary.', growth:'Educator → room lead, inclusion specialist, curriculum leader, centre manager or family-support role.', realityCheck:'The role includes cleaning, routines, documentation, noise, emotional labour and safeguarding—not only creative activities.', aiShift:'AI can draft activities and records, but attunement, play observation, safety, family trust and developmental judgment stay human.',
    routes:['Early-childhood vocational certificate/diploma','Education degree with early-years specialisation','Assistant role progressing through accredited study'], proof:['Plan and deliver a supervised play-based learning sequence','Create a child-observation-to-adaptation case with privacy protected'],
    skills:{transferable:['Patient communication','Creative facilitation','Observation and reflection','Family partnership'],roleSpecific:['Child development foundations','Play-based learning design','Safeguarding and child protection','Inclusive practice','Behaviour co-regulation','Learning observation and documentation'],aiDigital:['Responsible learning-tool use','Accessible family communication','Child-data privacy']}
  },
  {
    id:'hospitality-guest-operations', title:'Hospitality & Guest Operations Professional', cluster:'Service, hospitality & local business', summary:'Creates dependable guest experiences while coordinating fast-moving service operations.',
    does:'Handles arrivals and requests, resolves service failures, coordinates rooms or venues, manages handovers and protects safety and quality.', stages:['school','college','fresher','early','mid','returner','switcher','independent'], interests:['help','organise','influence'], values:['stability','leadership','income','mastery'], modes:['people','active','structured','ambiguous'],
    entry:'Accessible through vocational hospitality programmes, apprenticeships or frontline progression; language and service evidence matter.', growth:'Guest-service associate → supervisor, department manager, operations leader, revenue role or independent property operator.', realityCheck:'Peak periods, standing, nights, weekends, complaints and emotional composure are normal parts of the work.', aiShift:'Self-service and automated pricing grow; recovery, local knowledge, coordination and memorable human service differentiate.',
    routes:['Frontline hotel/venue role with progression','Hospitality vocational diploma or apprenticeship','Transfer from retail, travel or customer service'], proof:['Run a simulated shift handover and service-recovery scenario','Redesign one guest journey and test the instructions with users'],
    skills:{transferable:['Service communication','Composure under pressure','Cross-team coordination','Practical problem solving'],roleSpecific:['Guest journey operations','Reservations and front-office process','Service recovery','Housekeeping or venue coordination','Safety and incident procedure','Revenue and occupancy basics'],aiDigital:['Property-management systems','AI-assisted service with review','Digital reputation and guest-data privacy']}
  },
  {
    id:'culinary-food-operations', title:'Culinary & Food Operations Professional', cluster:'Service, hospitality & local business', summary:'Produces safe, consistent food while coordinating time, quality, cost and people.',
    does:'Prepares food, controls hygiene and allergens, plans production, manages waste and works through intense service periods.', stages:['school','college','fresher','early','mid','returner','switcher','independent'], interests:['create','build','organise'], values:['creativity','mastery','autonomy','income'], modes:['active','people','structured'],
    entry:'Vocational culinary training, apprenticeship and supervised kitchen experience are common; food-safety certification is essential.', growth:'Commis/cook → station lead, chef, production manager, food entrepreneur or product-development specialist.', realityCheck:'Heat, repetition, cleaning, early or late shifts, physical strain and thin margins sit behind the creative highlights.', aiShift:'Forecasting, ordering and menu ideation automate; sensory judgment, safe execution, coordination and distinctive craft remain physical.',
    routes:['Kitchen apprenticeship or vocational programme','Entry kitchen role plus food-safety training','Home-food or adjacent service route formalised through compliant supervised practice'], proof:['Complete a timed supervised production with hygiene checks','Cost and produce a small menu while measuring waste and consistency'],
    skills:{transferable:['Time-critical coordination','Sensory attention','Team communication','Continuous improvement'],roleSpecific:['Food preparation techniques','Food safety and allergen control','Mise en place and production planning','Recipe consistency and scaling','Costing and waste control','Kitchen equipment safety'],aiDigital:['Digital ordering and inventory','Demand forecasting basics','Responsible AI-assisted menu planning']}
  },
  {
    id:'retail-merchandising-operations', title:'Retail & Merchandising Operations Specialist', cluster:'Service, hospitality & local business', summary:'Connects customer needs, product presentation and reliable store or omnichannel delivery.',
    does:'Supports customers, manages stock and displays, coordinates promotions, prevents loss and improves daily commercial operations.', stages:['school','college','fresher','early','mid','returner','switcher','independent'], interests:['help','organise','influence','analyse'], values:['stability','income','leadership','mastery'], modes:['people','active','structured'],
    entry:'Frontline entry is widely accessible; progression comes through service evidence, commercial judgment and operational reliability.', growth:'Associate → department lead, store manager, visual merchandiser, buyer, category or omnichannel operations.', realityCheck:'Standing, weekend schedules, targets, difficult interactions and repetitive recovery work are common.', aiShift:'Checkout, forecasting and routine recommendations automate; trust, recovery, local demand sensing and team leadership persist.',
    routes:['Frontline store or fulfilment role','Retail/merchandising vocational programme','Transfer from hospitality, sales or small business'], proof:['Audit and improve a small product display using customer observation','Build a stock, promotion and service-recovery simulation'],
    skills:{transferable:['Customer communication','Commercial awareness','Reliability and teamwork','Conflict de-escalation'],roleSpecific:['Customer-needs discovery','Visual merchandising','Inventory and replenishment','Point-of-sale operations','Loss prevention and safety','Promotion and store performance'],aiDigital:['Omnichannel order systems','Demand and inventory dashboards','Responsible customer-data use']}
  },
  {
    id:'building-systems-technician', title:'Building Systems / HVAC Technician', cluster:'Green, infrastructure & skilled work', summary:'Keeps heating, cooling, ventilation and building services safe, efficient and reliable.',
    does:'Installs and services equipment, diagnoses mechanical and electrical faults, tests performance and documents compliant work.', stages:['school','college','fresher','early','mid','switcher','returner','independent'], interests:['build','analyse','help'], values:['income','stability','mastery','autonomy'], modes:['active','field','structured','people'],
    entry:'Vocational training or apprenticeship with locally required electrical, refrigerant and safety credentials is typical.', growth:'Technician → senior diagnostic specialist, controls technician, supervisor, energy specialist or service business owner.', realityCheck:'Confined spaces, weather, lifting, travel, emergency call-outs and safety-critical systems are part of the job.', aiShift:'Sensors predict faults and optimise controls; physical diagnosis, compliant repair and responsibility at the site remain human.',
    routes:['HVAC/building-services apprenticeship','Electrical or mechanical technician transition','Facilities maintenance route with accredited specialisation'], proof:['Complete supervised fault-finding and commissioning assessments','Document a safe training-system energy and airflow diagnostic'],
    skills:{transferable:['Systematic troubleshooting','Customer explanation','Safety discipline','Work planning'],roleSpecific:['Refrigeration and airflow basics','Electrical and control fundamentals','Installation and commissioning','Fault diagnosis','Preventive maintenance','Codes, refrigerants and site safety'],aiDigital:['Building-management systems','Sensor and diagnostic data','Smart controls and cybersecurity awareness']}
  },
  {
    id:'construction-site-coordinator', title:'Construction Site & Safety Coordinator', cluster:'Green, infrastructure & skilled work', summary:'Coordinates people, materials, quality and safety so physical projects progress responsibly.',
    does:'Plans daily work, reads drawings, checks site conditions, coordinates trades, records progress and escalates safety or quality issues.', stages:['school','college','fresher','early','mid','switcher','returner','independent'], interests:['build','organise','influence'], values:['income','leadership','stability','impact'], modes:['people','active','field','structured'],
    entry:'Vocational construction experience, civil/construction study or trade progression can lead in; safety credentials are location-specific.', growth:'Coordinator → site supervisor, construction manager, estimator, safety lead or contractor.', realityCheck:'Early starts, weather, conflict, changing conditions and safety accountability require presence and direct communication.', aiShift:'Planning, measurement and reporting digitise; site sequencing, hazard recognition, trade coordination and accountability stay embodied.',
    routes:['Trade progression into coordination','Construction/civil diploma or degree','Site administration or safety route with supervised field experience'], proof:['Build a site logistics, sequence and risk plan for a simulated project','Complete supervised drawing, quality and safety inspections'],
    skills:{transferable:['Field coordination','Direct communication','Risk anticipation','Conflict resolution'],roleSpecific:['Drawing and specification reading','Work sequencing','Trade and material coordination','Site safety and permits','Quality inspection','Progress and issue reporting'],aiDigital:['Digital field-management tools','BIM/model viewing','Drone or image data governance']}
  },
  {
    id:'precision-agriculture-technician', title:'Agriculture & Precision Farming Technician', cluster:'Food, land & environmental systems', summary:'Combines crop or livestock knowledge with practical machinery, sensing and resource management.',
    does:'Monitors field conditions, operates and maintains equipment, supports planting or husbandry, records inputs and responds to weather and biological risk.', stages:['school','college','fresher','early','mid','returner','switcher','independent'], interests:['build','analyse','organise'], values:['impact','autonomy','stability','mastery'], modes:['active','field','structured','ambiguous'],
    entry:'Routes include agricultural vocational programmes, farm apprenticeships, diplomas and experience; machinery and chemical rules vary locally.', growth:'Technician/operator → farm manager, crop adviser, equipment specialist, precision-ag consultant or producer.', realityCheck:'Weather, seasonality, early hours, physical risk and uncertain yields shape the work; technology does not remove biological complexity.', aiShift:'Remote sensing and prediction expand, while local observation, equipment care, responsible input decisions and biological judgment remain vital.',
    routes:['Farm apprenticeship or supervised work','Agricultural diploma/vocational study','Machinery or environmental technician transition'], proof:['Create a supervised field-monitoring and action log','Calibrate a training sensor or equipment workflow and document safe decisions'],
    skills:{transferable:['Practical observation','Resource planning','Equipment care','Decision-making under uncertainty'],roleSpecific:['Crop or livestock fundamentals','Soil, water and input stewardship','Machinery operation and maintenance','Pest/disease observation','Seasonal production planning','Farm safety and biosecurity'],aiDigital:['GPS and sensor systems','Farm data interpretation','Remote-sensing verification']}
  },
  {
    id:'warehouse-logistics-supervisor', title:'Warehouse & Logistics Operations Supervisor', cluster:'Transport, logistics & essential operations', summary:'Keeps goods moving safely, accurately and on time through physical operations.',
    does:'Plans shifts and flow, coordinates receiving and dispatch, controls inventory, resolves exceptions and improves safety and productivity.', stages:['school','college','fresher','early','mid','returner','switcher'], interests:['organise','analyse','help'], values:['stability','leadership','income','mastery'], modes:['people','active','structured','field'],
    entry:'Frontline warehouse progression, logistics vocational training or operations experience are common routes.', growth:'Team lead → operations supervisor, site manager, inventory/control lead, transport planner or process-improvement specialist.', realityCheck:'Shift work, targets, noise, lifting environments and real-time disruption require safety and fair people leadership.', aiShift:'Robotics and optimisation change tasks; exception handling, safe human-machine flow, coaching and accountable operations remain.',
    routes:['Warehouse associate to team-lead progression','Logistics vocational certificate/diploma','Transfer from retail fulfilment, transport or manufacturing'], proof:['Run a simulated receiving-to-dispatch shift plan with exceptions','Map and improve one safe picking or inventory process'],
    skills:{transferable:['Shift leadership','Operational communication','Root-cause problem solving','Fair performance coaching'],roleSpecific:['Receiving and dispatch','Inventory accuracy','Slotting and material flow','Warehouse safety','Labour and capacity planning','Quality and exception management'],aiDigital:['Warehouse-management systems','Barcode/RFID and automation','Operational dashboards with human checks']}
  },
  {
    id:'fleet-service-technician', title:'Vehicle & Fleet Service Technician', cluster:'Transport, logistics & essential operations', summary:'Diagnoses, maintains and repairs vehicles so people and goods move safely.',
    does:'Inspects systems, finds faults, performs authorised repairs, uses diagnostic tools and documents safe return to service.', stages:['school','college','fresher','early','mid','switcher','returner','independent'], interests:['build','analyse','help'], values:['income','stability','mastery','autonomy'], modes:['active','structured','people'],
    entry:'Apprenticeship or vocational automotive training is typical; electric/high-voltage and inspection credentials vary locally.', growth:'Technician → diagnostic specialist, EV technician, workshop supervisor, fleet engineer or repair-business owner.', realityCheck:'Physical strain, dirty work, tool cost, time pressure and safety liability coexist with satisfying diagnosis and repair.', aiShift:'Diagnostics become software-rich and fleets electrify; physical verification, repair quality and safety sign-off remain human.',
    routes:['Automotive apprenticeship','Vocational vehicle-service programme','Mechanical technician transition into EV/high-voltage systems'], proof:['Complete supervised inspection, diagnosis and repair assessments','Document a training fault from symptom through verified fix'],
    skills:{transferable:['Logical troubleshooting','Customer explanation','Safety discipline','Documentation'],roleSpecific:['Mechanical systems fundamentals','Electrical and electronic diagnosis','Inspection and preventive maintenance','Repair procedures and torque discipline','Workshop tools and safety','EV/high-voltage awareness'],aiDigital:['Computerised diagnostic systems','Digital service information','Connected-vehicle data privacy']}
  },
  {
    id:'emergency-response-professional', title:'Emergency & Disaster Response Professional', cluster:'Community & public service', summary:'Protects people during urgent incidents and helps communities prepare and recover.',
    does:'Assesses hazards, follows incident command, provides authorised response, communicates under pressure and supports preparedness and recovery.', stages:['school','college','fresher','early','mid','returner','switcher'], interests:['help','organise','analyse'], values:['impact','stability','leadership','mastery'], modes:['people','active','field','structured'],
    entry:'Roles such as emergency medical, fire, civil defence or disaster management require distinct local training, fitness, clearance and licensing.', growth:'Responder → specialist, team leader, emergency planner, instructor, safety manager or resilience coordinator.', realityCheck:'Trauma exposure, physical danger, shifts, hierarchy and incomplete information are fundamental; not every helper role is operational response.', aiShift:'Prediction, dispatch and situational data improve, while scene judgment, trust, physical action and command accountability remain human.',
    routes:['Accredited emergency-service recruitment and training','Disaster-management or public-safety study','Community preparedness route into specialised supervised roles'], proof:['Complete accredited simulations within authorised scope','Create a hazard, communication and after-action plan for a fictional incident'],
    skills:{transferable:['Calm communication','Team discipline','Rapid risk assessment','Emotional recovery'],roleSpecific:['Incident command basics','Hazard and scene assessment','Emergency procedures within scope','Public warning and communication','Preparedness planning','After-action learning'],aiDigital:['Dispatch and mapping systems','Sensor/social signal verification','Privacy and misinformation control']}
  },
  {
    id:'repair-craft-business', title:'Repair Craftsperson & Local Service Business Owner', cluster:'Service, hospitality & local business', summary:'Solves practical household or business problems through trusted skilled service.',
    does:'Diagnoses needs, performs a defined repair craft, prices work, manages tools and parts, communicates boundaries and builds repeat trust.', stages:['school','college','fresher','early','mid','senior','returner','switcher','independent'], interests:['build','help','organise'], values:['autonomy','income','mastery','impact'], modes:['people','active','field','ambiguous'],
    entry:'Learn one specific craft through apprenticeship, vocational training or supervised work; licences and insurance depend on the service.', growth:'Craft worker → specialist, crew lead, trainer, multi-service operator or local business owner.', realityCheck:'Travel, irregular demand, physical risk, estimates, callbacks and customer acquisition sit alongside craft satisfaction.', aiShift:'Scheduling, quoting and diagnostics gain digital support; trustworthy hands-on work, accountability and local reputation remain differentiators.',
    routes:['Trade apprenticeship in one defined craft','Supervised employment plus vocational certification','Experienced craft worker moving into compliant self-employment'], proof:['Complete supervised diagnosis and repair assessments','Document a fictional customer job from scope and quote through quality check and aftercare'],
    skills:{transferable:['Customer trust building','Practical diagnosis','Self-management','Commercial judgment'],roleSpecific:['Defined craft technique','Tool and material care','Job scoping and estimating','Safe work and compliance','Quality assurance and callbacks','Basic service-business operations'],aiDigital:['Digital booking and records','AI-assisted diagnosis with verification','Local marketing and customer-data privacy']}
  },
];

export const stageLabels: Record<CareerStage, string> = {
  school: 'School student', college: 'College / training', fresher: 'Fresher / first job', early: 'Early career',
  mid: 'Mid-career', senior: 'Experienced / leader', returner: 'Returning after a break', switcher: 'Career changer', independent: 'Freelance / business'
};

export const interestLabels: Record<Interest, { label: string; hint: string }> = {
  build: { label: 'Build & fix', hint: 'Make, repair or improve tangible things and systems' },
  analyse: { label: 'Analyse & solve', hint: 'Investigate evidence, patterns and difficult questions' },
  create: { label: 'Create & express', hint: 'Shape ideas, stories, visuals or new experiences' },
  help: { label: 'Help & develop people', hint: 'Teach, care, support, coach or improve lives' },
  influence: { label: 'Influence & lead', hint: 'Persuade, negotiate, decide or mobilise people' },
  organise: { label: 'Organise & deliver', hint: 'Plan, coordinate and make work dependable' },
};

export const valueLabels: Record<WorkValue, string> = {
  income: 'Strong income upside', stability: 'Stability', impact: 'Meaningful impact', autonomy: 'Autonomy',
  mastery: 'Deep expertise', creativity: 'Creative freedom', flexibility: 'Flexibility', leadership: 'Leadership scope'
};

export const modeLabels: Record<WorkMode, string> = {
  people: 'People-rich', independent: 'Independent focus', structured: 'Clear structure', ambiguous: 'Variety & ambiguity',
  desk: 'Mostly desk-based', active: 'Active / hands-on', remote: 'Remote-friendly', field: 'Field / on-site'
};
