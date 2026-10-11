export type DegreePathwayPreset = {
  id: string;
  label: string;
  subject: string;
  workSignals: string[];
  roleFamilies: string[];
  project: string;
  evidence: string;
  routeCheck: string;
  watchOut: string;
};

export const DEGREE_PATHWAY_PLANNER_PRESETS: DegreePathwayPreset[] = [
  {
    id: 'political-science',
    label: 'BA Political Science / public policy',
    subject: 'Reading institutions, people and public decisions',
    workSignals: ['research and writing', 'public systems and policy', 'interviews and evidence', 'structured debate'],
    roleFamilies: ['policy and programme support', 'public affairs and communications', 'research and editorial work', 'law, governance or civil-services preparation'],
    project: 'Choose one local public issue, compare three primary or official sources, write a two-page brief and ask one practitioner or teacher to challenge your assumptions.',
    evidence: 'A source list, a clear question, a short brief, and a record of what changed after feedback.',
    routeCheck: 'Degree titles do not by themselves qualify someone for a regulated post or guarantee a government role. Check the current exam, employer and institution rules for the route you want.',
    watchOut: 'Do not confuse enjoying political news with enjoying careful source work, writing and revision.',
  },
  {
    id: 'botany',
    label: 'B.Sc. Botany / plant and environmental science',
    subject: 'Living systems, field observation and laboratory thinking',
    workSignals: ['field observation', 'lab and measurement', 'environment and agriculture', 'patient documentation'],
    roleFamilies: ['plant and environmental project support', 'laboratory or quality assistance', 'agriculture and horticulture pathways', 'teaching, science communication or further study'],
    project: 'Create a small observation log for one plant or local habitat: define a question, record observations for 14 days, photograph consistently, and explain the limits of the sample.',
    evidence: 'A dated observation table, method note, photographs or measurements, and a short conclusion that separates evidence from inference.',
    routeCheck: 'Specific laboratory, research, teaching and regulated roles can require a higher qualification, registration or employer-specific skill. Verify the exact course and job notice.',
    watchOut: 'A general interest in nature is not the same as enjoying repeated measurement, classification and careful documentation.',
  },
  {
    id: 'forensic-science',
    label: 'Forensic science / evidence work',
    subject: 'Evidence handling, scientific method and careful documentation',
    workSignals: ['lab procedure', 'structured observation', 'chain-of-custody thinking', 'technical reporting'],
    roleFamilies: ['laboratory and evidence-support work', 'quality and compliance support', 'cyber or digital-evidence learning routes', 'research and further-study pathways'],
    project: 'Use a public, non-sensitive dataset or a staged classroom exercise to document a repeatable evidence process: question, method, observations, limitations and review checklist.',
    evidence: 'A reproducible method, versioned notes, a quality checklist and a clear statement of what the exercise cannot prove.',
    routeCheck: 'Forensic roles may have specific laboratory, legal, institutional or public-service requirements. A classroom project is practice evidence, not professional casework authority.',
    watchOut: 'Crime-media interest is not enough; the daily work rewards patience, process discipline and defensible notes.',
  },
  {
    id: 'bca',
    label: 'BCA / applied computing',
    subject: 'Building, testing and explaining useful digital systems',
    workSignals: ['problem solving', 'building digital tools', 'testing and debugging', 'user-facing explanation'],
    roleFamilies: ['web and software support', 'quality assurance and testing', 'data and operations support', 'technical customer or product support'],
    project: 'Build a small tool for a real user, write three acceptance tests, collect feedback from two people and publish a short README that explains what works and what does not.',
    evidence: 'A working demo or screenshots, test cases, a change log and feedback from someone other than the builder.',
    routeCheck: 'Course names and subject rules vary by university; verify the exact admission notice. A degree or certificate does not replace role-relevant evidence in every hiring process.',
    watchOut: 'Watching tutorials is not the same as enjoying debugging, testing and explaining trade-offs to another person.',
  },
];
