// Shared scalability rating used by the career charts, filters, trackers and results.
// Scalable here means income and reach can grow through skills, consulting or a business
// of your own while you keep learning. A route is NOT rated scalable only because it is
// well known, pays well late, or needs you to beat rivals at one stage after another.
// A route with a realistic business layer (consulting, a studio, a practice, a product) is a good option for us.
export const SCALE = {
  high: { label: 'Scalable', short: 'Scalable' },
  mid: { label: 'Scalable with a business layer', short: 'Scalable with a business layer' },
  low: { label: 'Not so scalable', short: 'Not so scalable' },
};

export const SCALE_RULE =
  'We rate a route Scalable when steady learning and a whole-picture approach (skills, proof of work, communication and basic business, sales and marketing sense) can grow your income and reach into consulting or a business of your own. A route marked Scalable with a business layer is also a good option for us, as long as you plan that layer: consulting, a studio, a practice or a product. Crowded fields, long ladders of entrance exams and ranks, and careers where very few people reach the top after many years do not count as scalable, so we mark them Not so scalable and list the risk beside them.';

export const SCALE_FLAGGED =
  'Well-known routes such as MBBS and BDS, NDA, government exams, integrated law, pilot training, merchant navy and pure research stay in the chart so you can see what they carry, but they are rated Not so scalable. Success there depends on beating rivals at stage after stage, many years pass before pay grows, and few people reach the top. Consistent effort alone does not guarantee a result. If you choose one, write a second route and keep a skill running that can grow on its own.';

// Scalability of each Class 10 route (same ids as the career chart after 10th).
export const ROUTE_SCALE = {
  'science-pcm': { scale: 'mid', note: 'The doors it opens (engineering, computing, data) can grow into products and consulting, but the engineering entrance ladder is crowded and a branch degree alone is not scalable.', grow: 'Add coding, automation or AI skills and build one project people use.' },
  'science-pcb': { scale: 'low', note: 'Its best-known doors (MBBS, BDS) mean competition at several levels and very few seats, so effort alone may not lead to a seat. The scalable doors are biotech, health-tech, nutrition and data.', grow: 'Write a second route, and add a data, health-tech or science-communication skill beside Biology.' },
  'science-pcmb': { scale: 'mid', note: 'It keeps the widest set of doors, but only the computing, data and biotech doors scale. Two heavy exam tracks at once can leave little time to build skills.', grow: 'Choose one primary track early and keep one skill project running.' },
  'commerce-maths': { scale: 'mid', note: 'Opens BCA, data, finance and business routes that scale, but CA and general management degrees are crowded unless you add a niche.', grow: 'Learn spreadsheets, data and sales, and try a small real venture.' },
  'commerce-nomaths': { scale: 'mid', note: 'Business, finance and communication routes scale when you add a domain skill; a general degree alone is crowded.', grow: 'Pair the degree with one applied skill: sales, accounting software, marketing or modelling.' },
  'arts': { scale: 'mid', note: 'Design, media, psychology and communication scale when you own an audience, a portfolio or a practice. Law and civil services are crowded ladders with few winners.', grow: 'Build a portfolio or writing proof early and choose a niche.' },
  'diploma': { scale: 'mid', note: 'A diploma alone has a fixed pay ladder. It scales when you add digital, automation or supervision skills, or run your own technical service.', grow: 'Use lateral entry or a skill project to move up, and learn automation.' },
  'iti': { scale: 'mid', note: 'Trade pay starts low. It scales when you run your own service business (repair, installation, solar, electrical work) and add digital or safety skills.', grow: 'Take an apprenticeship, then offer your trade as a service.' },
  'open-school': { scale: 'mid', note: 'It gives time to build skills, and scales only if you use that time for real proof of work.', grow: 'Use the time to build one skill and one finished project.' },
  'skill-first': { scale: 'high', note: 'You control the pace. A digital or craft skill with proof of work can be sold directly and can grow into consulting or a business.', grow: 'Pick one skill, build three pieces of proof, then take paid projects.' },
};

// Ratings for career names shown in assessment results. First matching rule wins.
// Careers that match no rule are rated 'mid' (scalable only with a business layer).
export const CAREER_SCALE_RULES = [
  ['entrepreneur|business owner|startup founding|founder-led|new-venture', 'high'],
  ['Quantitative|Venture scouting', 'mid'],
  ['Architect', 'mid'],
  ['Counselling|Psychology|Psychologist|coaching|Nurse|Physiotherap|Pharmacist|Public health|Medical lab|Social work|Non-profit|Human resources|Customer success|Customer service|Lab professional|Event or hospitality|Patient-advocacy', 'mid'],
  ['Doctor|MBBS|Dentist|Medicine|clinical|paramedic|Civil serv|UPSC|Pilot|merchant navy|Defence|\\bLaw\\b|Lawyer|Litigation|Legal|judge|diplomatic|Diplomacy|International relations|Public service|public leadership|Research scientist|Scientist or researcher|Scientific|Academic|Field research|Environmental, space|University professor|Veterinary|Library|Sports|Banker|Banking|Investment|Actuar|Public policy|Research analyst|Economist', 'low'],
  ['Software|Cloud or DevOps|Cybersecurity|Data scien|Data analy|Data visuali|Robotics or AI|Artificial intelligence|Digital marketing|Performance marketing|growth-hacking|Content creator|creator|Podcasting|Voice acting|Video, film|Graphic|UX|Game design|Animator|Artist|designer|Design \\(|Design, |Interior|Influencer', 'high'],
];
export const careerScale = (text) => {
  for (const [re, key] of CAREER_SCALE_RULES) if (new RegExp(re, 'i').test(text)) return key;
  return 'mid';
};

// Pay figures are indicative only.
export const PAY_CAUTION =
  'Pay figures here are indicative ranges and averages from public profiles, not exact or guaranteed amounts. Pay differs by city, employer, skill and year, and markets change. Check current job listings (for example on LinkedIn, Naukri or Indeed) and ask people working in the role before you decide.';

// Returns the rating for a career name only when a rule matches; null otherwise.
export const careerScaleMatch = (text) => {
  for (const [re, key] of CAREER_SCALE_RULES) if (new RegExp(re, 'i').test(text)) return key;
  return null;
};

export const SCALE_TIPS = {
  high: 'Build proof of work, take paid projects, then specialise or form a small agency.',
  mid: 'Plan the business layer from the start: consulting, a studio or practice, or a product.',
  low: 'Plan a second route and keep a skill running that can grow on its own.',
};

// Blog categories that discuss careers, routes or skills, with a default view.
export const BLOG_LENS = {
  'government-jobs': { scale: 'low', text: 'Government exams are rank-based selections where very large numbers compete for few posts, often over several attempts. We rate them Not so scalable. Keep a parallel skill running, and plan a business layer such as coaching, content or consulting.' },
  'freelancing-business': { scale: 'high', text: 'Skill-led work you sell directly is the most scalable route we know: you set the price, add clients and later add people or products.' },
  'skill-roadmaps': { scale: 'high', text: 'A skill with proof of work and a paid offer is scalable. The roadmap works best when you finish projects and sell the result.' },
  'skills': { scale: 'high', text: 'Skills grow your income when you turn them into proof of work and a paid offer.' },
};
export const LENS_CATEGORIES = ['ai-future', 'career-change', 'career-guidance', 'career-options', 'college-degrees', 'freelancing-business', 'government-jobs', 'interviews', 'internships', 'job-search', 'linkedin-networking', 'medical-careers', 'parents', 'portfolio-proof-of-work', 'productivity-learning', 'negotiation', 'resume', 'salary-growth', 'skill-roadmaps', 'skills', 'stream-selection', 'study-abroad'];

// Rating and reason for single-career guides, by blog slug.
export const POST_SCALE = {
  "career-in-biotechnology-after-12th": ["mid", "Lab jobs are modest; biotech services, testing labs and bio-data consulting give a business layer."],
  "career-in-finance-vs-accounting-india": ["mid", "Salaried finance roles follow a fixed ladder; an advisory or accounting practice for small firms gives a business layer."],
  "career-in-home-science": ["mid", "Nutrition, interiors and food entrepreneurship give a business layer; salaried roles are modest."],
  "career-in-investment-banking-india-how-to-start": ["low", "A narrow, rank-and-brand-gated entry with intense competition at every level and few winners."],
  "career-in-navy-after-12th-science": ["low", "Very small intake, strict standards and a fixed pay ladder; keep a parallel skill."],
  "career-in-psychology-india-salary-scope": ["mid", "A bachelor degree alone has a low ceiling; a niche practice, workshops and online programmes after a master degree give a business layer."],
  "career-in-public-relations-india": ["mid", "Agency roles are crowded; a boutique PR or personal-brand consulting service gives a business layer."],
  "career-in-research-for-humanities-students-india": ["low", "A long academic ladder where few reach stable senior posts; add writing or data skills you can sell."],
  "career-in-social-media-management-india": ["high", "Results are measurable and one skill serves many businesses; freelance, then agency."],
  "career-in-space-science-india": ["low", "Very few openings, long study and rank-based selection; keep a data or software skill alongside."],
  "how-to-become-a-business-analyst-entry-level-india": ["mid", "Salaried ladder first; analytics and process consulting give a business layer."],
  "how-to-become-a-data-scientist-india": ["high", "Analysis and modelling skills sell directly as projects and consulting."],
  "how-to-become-a-product-manager-without-tech-background-india": ["mid", "Crowded entry; product consulting for startups or building your own product gives a business layer."],
  "how-to-become-a-teacher-trainer-india": ["mid", "Salaried training has a pay ceiling; corporate workshops and online courses give a business layer."],
  "how-to-become-an-animator-india": ["high", "A portfolio sells directly to studios, brands and clients; freelance and studio paths are open."],
  "how-to-become-an-operations-manager-india-career-path": ["mid", "A salaried ladder; operations consulting for small businesses gives a business layer."],
  "is-aeronautical-engineering-a-good-career-in-india": ["low", "Few employers, rank-gated entry and long routes; add software or data skills."],
  "is-aerospace-engineering-a-good-career-in-india": ["low", "Few employers and long routes with limited openings; add software or simulation skills."],
  "is-agriculture-a-good-career-in-india": ["mid", "Salaried roles are modest; agri-business, processing and consulting give a business layer."],
  "is-automobile-engineering-a-good-career": ["mid", "Core jobs follow a fixed ladder; a workshop, EV service or design consulting gives a business layer."],
  "is-bams-a-good-career-option": ["low", "Competitive entry and a crowded practice market; wellness and product businesses are possible but separate."],
  "is-bioinformatics-a-good-career": ["mid", "Data skills sell well, but the field is small; consulting and pipelines give a business layer."],
  "is-biomedical-engineering-a-good-career": ["mid", "Niche roles; device servicing or health-tech startups give a business layer."],
  "is-biomedical-science-a-good-career": ["mid", "Lab roles are modest; diagnostics and testing services give a business layer."],
  "is-biotechnology-a-good-career": ["mid", "Lab jobs are modest; testing, bio-data and biotech services give a business layer."],
  "is-business-analyst-a-good-career-in-india": ["mid", "A salaried ladder; analytics consulting gives a business layer."],
  "is-ca-a-good-career-in-india": ["mid", "A long exam ladder with many attempts, but a practice can grow into advisory work."],
  "is-chemical-engineering-a-good-career-in-india": ["mid", "Core jobs follow a fixed ladder; process consulting or a small plant gives a business layer."],
  "is-civil-engineering-a-good-career-in-india": ["mid", "Salaried roles are modest; a contracting or design-build firm gives a business layer."],
  "is-cs-a-good-career": ["mid", "Company Secretary work follows an exam ladder; compliance consulting gives a business layer."],
  "is-cybersecurity-a-good-career-in-india": ["high", "Demand-led skills sell as consulting, audits and managed services."],
  "is-data-analyst-a-good-career-in-india": ["high", "Analysis skills sell directly as reports and consulting."],
  "is-data-analytics-a-good-career-in-india": ["high", "Analysis skills sell directly as reports and consulting."],
  "is-data-engineer-a-good-career": ["high", "Pipeline and platform skills sell as projects and consulting."],
  "is-data-science-a-good-career-in-india": ["high", "Modelling and analysis skills sell directly as projects and consulting."],
  "is-dentistry-a-good-career-in-india": ["low", "Competition at several levels (entrance, seats, postgraduate study, practice) and a saturated local market."],
  "is-devops-a-good-career": ["high", "Infrastructure skills sell as consulting and managed services."],
  "is-digital-marketing-a-good-career-in-india": ["high", "Measurable results sell to many businesses; freelance, then agency."],
  "is-doctor-a-good-career-in-india": ["low", "Cut-throat competition at several levels (NEET, postgraduate seats, practice) and many years before pay grows; consistent effort alone does not decide it."],
  "is-electrical-engineering-a-good-career-in-india": ["mid", "Core jobs follow a fixed ladder; electrical contracting, solar and EV services give a business layer."],
  "is-engineering-still-a-good-career-in-india": ["mid", "A degree alone is crowded; skills, projects and a product or consulting layer decide the outcome."],
  "is-event-management-a-good-career-in-india": ["mid", "Salaried roles are modest; your own events business is the business layer."],
  "is-fashion-designing-a-good-career-in-india": ["mid", "Crowded as a job; a label, boutique or styling service is the business layer."],
  "is-food-technology-a-good-career-in-india": ["mid", "Plant jobs follow a fixed ladder; food products, testing and consulting give a business layer."],
  "is-forensic-science-a-good-career": ["low", "Very few government posts and a small private market; keep a data or lab skill alongside."],
  "is-graphic-design-a-good-career-in-india": ["high", "A portfolio sells directly; freelance, then studio."],
  "is-hotel-management-a-good-career-in-india": ["mid", "Long hours in a salaried ladder; a food, event or hospitality business is the business layer."],
  "is-hr-a-good-career-in-india": ["mid", "Salaried ladders are fixed; recruitment or HR consulting gives a business layer."],
  "is-interior-design-a-good-career-in-india": ["high", "Portfolio and client work sell directly; freelance, then studio."],
  "is-investment-banking-a-good-career": ["low", "Narrow, brand-gated entry with intense competition at every level and few winners."],
  "is-journalism-a-good-career-india": ["mid", "Newsroom jobs are crowded; an owned audience, newsletter or media agency is the business layer."],
  "is-law-a-good-career-in-india": ["low", "Entrance competition, then a slow climb where few reach the top; niche practice or legal-tech helps."],
  "is-lawyer-a-good-career-in-india": ["low", "A slow climb with competition at every level and a saturated market; a niche and legal-tech help."],
  "is-logistics-a-good-career": ["mid", "A salaried ladder; a transport or freight-forwarding business is the business layer."],
  "is-marine-engineering-a-good-career": ["low", "Sea-service ladder with long absences and strict medicals; limited business routes."],
  "is-marketing-a-good-career": ["high", "Measurable skill that sells to many businesses; freelance, consulting, then agency."],
  "is-mechanical-engineering-a-good-career-in-india": ["mid", "Core jobs follow a fixed ladder and are crowded; design, manufacturing or repair services give a business layer."],
  "is-medical-coding-a-good-career-in-india": ["mid", "A commodity service with a pay ceiling; a coding-services business is the business layer."],
  "is-merchant-navy-a-good-career": ["low", "Fixed pay ladder, long absences and strict medicals; few ways to build a business from it."],
  "is-microbiology-a-good-career": ["low", "Long research routes where few reach stable senior posts; testing and quality services are the business layer."],
  "is-nursing-a-good-career-in-india": ["mid", "Salaried roles have a pay ceiling; home-care and clinic services are the business layer."],
  "is-optometry-a-good-career": ["mid", "Salaried roles are modest; your own optical clinic is the business layer."],
  "is-pharmacy-a-good-career-in-india": ["mid", "Salaried roles are modest; your own pharmacy or health-product business is the business layer."],
  "is-physiotherapy-a-good-career-in-india": ["mid", "Salaried roles are modest; your own clinic or home-visit practice is the business layer."],
  "is-pilot-a-good-career-in-india": ["low", "Very high training cost, medical gating and hiring cycles; limited business routes."],
  "is-product-management-a-good-career": ["mid", "Crowded entry; product consulting or your own product is the business layer."],
  "is-psychology-a-good-career-in-india": ["mid", "A bachelor degree alone has a low ceiling; a niche practice and workshops give a business layer."],
  "is-radiology-a-good-career": ["mid", "Technician roles are modest; a diagnostic centre is the business layer."],
  "is-sales-a-good-career": ["mid", "Targets-driven salaried roles; selling your own offer or consulting is the business layer."],
  "is-salesforce-a-good-career": ["high", "Platform skills sell as consulting and implementation projects."],
  "is-software-engineering-a-good-career-in-india": ["high", "Software skills sell as products, freelance projects and agencies; a degree alone is crowded."],
  "is-software-testing-a-good-career": ["high", "Testing and automation skills sell as freelance and managed services."],
  "is-supply-chain-management-a-good-career": ["mid", "A salaried ladder; supply-chain consulting gives a business layer."],
  "is-trading-a-good-career-in-india": ["low", "Income depends on markets and capital, not on a repeatable service you can sell."],
  "is-ui-ux-design-a-good-career-in-india": ["high", "A portfolio sells directly; freelance, consulting, then studio."],
  "is-veterinary-a-good-career": ["low", "Competitive entry and a small paying market; a clinic is possible but slow."],
  "is-video-editing-a-good-career": ["high", "A portfolio sells directly; freelance, then an editing studio."],
  "is-web-development-a-good-career": ["high", "Sites and apps sell directly as freelance work or an agency."],
  "how-to-become-a-solopreneur-india": ["high", "You set the price and own the offer; start small and add clients."],
  "how-to-become-an-independent-consultant-india": ["high", "Expertise sold directly; grows through referrals, retainers and productised services."],
  "career-in-pharmacy-india-scope-future": ["mid", "Salaried roles are modest; your own pharmacy or health-product business is the business layer."],
  "zoology-career-options": ["mid", "Degree alone is crowded and wildlife or research posts are contract or rank-gated; fisheries, bee, silk and poultry services, testing labs and data consulting give a business layer."],
  "botany-career-options": ["mid", "A botany degree alone leads to contract and lab posts; a nursery, tissue culture unit, herbal raw material supply or plant mapping and consulting gives a business layer."],
  "bsc-physics-career-options": ["mid", "Degree alone is crowded and government, research and medical physics posts are rank-gated or temporary; data and analysis, electronics, tutoring and measurement or audit services give a business layer."],
  "bsc-chemistry-career-options": ["mid", "Lab jobs follow fixed pay bands and start modestly; chemistry plus data or teaching, documentation, testing and formulation services give a business layer."],
  "iti-career-options": ["mid", "Trade pay starts low and follows a fixed ladder; your own repair, contracting, solar or EV service business is the business layer."],
  "bsc-agriculture-career-options": ["mid", "Exam posts (bank, state, ICAR) follow fixed pay ladders; farm advisory, an input shop, FPO consulting, drone services or your own agri-enterprise give a business layer."],
  "is-it-a-good-career-in-india": ["mid", "A sector, not one job: salaried services roles follow a fixed ladder; product, GCC, freelance and consulting routes scale, while support and BPM roles do not."],
  "is-sap-a-good-career-in-india": ["mid", "Salaried partner and services ladder; domain-led consulting, a boutique or BTP extension projects give a business layer, but client system access and a time-limited migration wave limit going solo."],
  "is-bpo-a-good-career-in-india": ["low", "Entry is open and fast, but scripted voice and chat work has a low ceiling and the most AI pressure; use it as a paid bridge and build a sellable skill (support setup, CRM, customer success) beside it."],
  "is-aviation-a-good-career-in-india": ["mid", "Most doors are licence-gated salaried ladders; drone services, aircraft maintenance and training or consulting give a business layer."],
  "is-photography-a-good-career-in-india": ["mid", "Crowded as a job and plain catalogue and stock work are exposed to AI; a small studio, photo-plus-video packages and repeat brand work give a business layer."],
  "is-ethical-hacking-a-good-career-in-india": ["mid", "Salaried pentest follows a firm's ladder and bug bounty pay is uneven; your own pentest and audit firm, audits and training give a business layer after a track record."],
  "is-network-engineering-a-good-career-in-india": ["mid", "Monitoring and telecom roles are routine and exposed to automation; cloud networking, small-office network, cabling and CCTV services, and automation consulting give a business layer."],
  "is-embedded-systems-a-good-career-in-india": ["mid", "Salaried firmware roles follow a pay ladder; freelance firmware, board bring-up, training and your own hardware product give a business layer, while fab and public-sector routes are capped."],
  "is-petroleum-engineering-a-good-career-in-india": ["low", "Few seats and employers, boom-and-bust hiring and a fixed PSU ladder; subsurface data skills and consulting or inspection services are the only business layer."],
};
