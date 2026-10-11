// Shared scalability rating used by the career charts, filters, trackers and results.
// Scalable here means income and reach can grow through skills, consulting or a business
// of your own while you keep learning. A route is NOT rated scalable only because it is
// well known, pays well late, or needs you to beat rivals at one stage after another.
export const SCALE = {
  high: { label: 'Scalable', short: 'Scalable' },
  mid: { label: 'Scalable only with a business layer', short: 'Needs a business layer' },
  low: { label: 'Not so scalable', short: 'Not so scalable' },
};

export const SCALE_RULE =
  'We rate a route Scalable when steady learning and a whole-picture approach (skills, proof of work, communication and a little business sense) can grow your income and reach into consulting or a business of your own. Crowded fields, long ladders of entrance exams and ranks, and careers where very few people reach the top after many years do not count as scalable, so we mark them Not so scalable and list the risk beside them.';

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
