// Adds the plan sections every assessment result should carry to the standalone assessment pages:
// strongest and weakest dimensions with evidence, confidence and limits, three experiments, a 30 and
// 90 day plan with review dates and a calendar file, one proof project and portfolio output, a skill
// tracker link, a printable action plan, parent and counsellor explanations and the next assessment.
// It reads the result that is already on the page and invents no scores.
import { REPORT_VERSION_LABEL } from './reportKit';
import { SCALE_RULE } from '../config/scalability.mjs';

type Line = { kind: 'heading-1' | 'heading-2' | 'heading-3' | 'bullet' | 'body'; text: string };
export type CompanionData = {
  slug: string; title: string; kind: 'interest' | 'personality' | 'aptitude' | 'skills' | 'stage'; aud: string; skill: string;
  next: { href: string; title: string; why: string }[];
  project: { id: string; title: string; outcome: string; hours: number; steps: string[]; proof: string[]; examples: Record<string, string> };
};
type Score = { label: string; value: number };

const esc = (v: unknown) => String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c] as string));
const clean = (t: string | null | undefined) => (t || '').replace(/\s+/g, ' ').trim();
const lc = (t: string) => (t ? t.charAt(0).toLowerCase() + t.slice(1) : t);
const fmt = (d: Date) => d.toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
const plus = (n: number) => { const d = new Date(); d.setDate(d.getDate() + n); return d; };
const list = (items: string[]) => '<ul>' + items.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul>';

const KIND = {
  interest: { noun: 'interest profile', art: 'an', basis: 'which activities you said you enjoy', limit: 'Interests can change and are not the same as ability. Test them with real activities before you narrow a choice.', method: 'Each activity you rated adds to the score of one interest type. The scores show your pattern in these activities only. They are not population percentiles and are not compared with other people.' },
  personality: { noun: 'work-style profile', art: 'a', basis: 'how you described your usual behaviour', limit: 'A work-style result describes tendencies, not fixed traits or abilities, and it can differ by setting. Treat it as a starting point for a conversation.', method: 'Each statement you answered adds to the score of one trait or preference. The scores show your pattern in these questions only. They are not population percentiles and are not compared with other people.' },
  aptitude: { noun: 'reasoning result', art: 'a', basis: 'how you answered one set of questions in one sitting', limit: 'One sitting gives a snapshot. Tiredness, speed and unfamiliar question styles all move the score, so repeat the practice before you draw a conclusion.', method: 'Each correct answer adds to the score of its domain, and the indicators combine related domains. The scores show your performance on these questions only. They are not standardised percentiles.' },
  skills: { noun: 'skills result', art: 'a', basis: 'how you rated your own habits and skills', limit: 'A self-rating shows how you see yourself today. Ask someone who has seen you at work or in class whether it matches what they notice.', method: 'Each answer adds to the score of one skill area. The scores show your pattern in these questions only. They are not population percentiles and are not compared with other people.' },
  stage: { noun: 'direction profile', art: 'a', basis: 'your interests, strengths and preferences across several short tests', limit: 'A direction profile narrows choices to explore. It does not choose a stream, course or job for you, and it should be checked against real experience and official rules.', method: 'Your answers are scored across several short tests, and the results are combined into one profile. The scores show your pattern in these questions only. They are not population percentiles and are not compared with other people.' },
} as const;

const SEC_SEL = '.result-section, .insight-section, .plan-section, .review-section, .res-section';

// Concrete one-hour tasks and people to ask, by dimension label. Used to write experiments that fit the result.
const DIM: { re: RegExp; task: string; ask: string }[] = [
  { re: /realistic/, task: 'build, fix or assemble something with your hands, such as repairing an item or building a simple shelf', ask: 'a technician, engineer, craftsperson or farmer' },
  { re: /investigative/, task: 'pick a question you are curious about, look for the answer in two sources and write what you found', ask: 'a researcher, analyst, doctor or lab technician' },
  { re: /artistic/, task: 'make something original, such as a poster, short story, song or design, without copying', ask: 'a designer, writer, filmmaker or musician' },
  { re: /social(?! skills)/, task: 'help one person learn or sort out something, such as tutoring a younger student, and note what you enjoyed', ask: 'a teacher, counsellor, nurse or social worker' },
  { re: /enterprising/, task: 'organise or sell something small, such as a class event or a handmade item, and note how persuading felt', ask: 'a business owner, sales professional or manager' },
  { re: /conventional/, task: 'organise information, such as an event budget or a tidy sheet of your marks, and note how it felt', ask: 'an accountant, administrator, banker or data operator' },
  { re: /openness/, task: 'learn one unfamiliar thing, such as a new tool or a subject outside your syllabus', ask: 'a designer, researcher or founder' },
  { re: /conscientious/, task: 'plan one week of a small project with deadlines, then record each day whether you did what you planned', ask: 'a manager, accountant or engineer who depends on deadlines' },
  { re: /extraversion/, task: 'start conversations with three new people or lead a small group activity, then note your energy afterwards', ask: 'a salesperson, teacher or team lead' },
  { re: /agreeableness/, task: 'help a teammate with their part of a task and notice how you balance their needs with your own', ask: 'a counsellor, nurse, HR professional or customer support lead' },
  { re: /emotional sensitivity/, task: 'note your mood at three points in a day for a week and what set each off, then try one calming habit', ask: 'a trusted friend, teacher or counsellor' },
  { re: /engagement and reflection/, task: 'spend an hour on a task alone and an hour on a task with others, and note which gave you more energy', ask: 'a person who works mostly alone and a person who works mostly with others' },
  { re: /information and possibilities/, task: 'solve one problem twice, once from facts and details and once from patterns and ideas', ask: 'a classmate or colleague who prefers the other style' },
  { re: /decision criteria/, task: 'make one real decision twice, once by logic and once by values and people, and compare', ask: 'a person who usually decides the other way' },
  { re: /work approach/, task: 'plan one task fully in advance on one day and stay flexible on the next, and compare how each felt', ask: 'a person whose work habits are the opposite of yours' },
  { re: /dominance/, task: 'take charge of a small group decision and note how the group responded', ask: 'a manager, founder or project lead' },
  { re: /influence/, task: 'present one idea to a small group in two minutes and note how they reacted', ask: 'a trainer, marketer or sales professional' },
  { re: /steadiness/, task: 'keep one shared routine going for a week, such as a team schedule, and note how it felt', ask: 'a nurse, teacher or operations lead' },
  { re: /^conscientiousness|checks accuracy/, task: 'check a piece of your own work against a checklist and note what you found', ask: 'an auditor, engineer or quality analyst' },
  { re: /type \d/, task: 'read a short description of this type from a reliable source and note three lines that fit you and three that do not', ask: 'two people who know you well' },
  { re: /social skills/, task: 'help settle a small disagreement or coordinate a group task and note what helped', ask: 'a team lead or customer manager' },
  { re: /empathy/, task: 'listen to someone for ten minutes without giving advice, then say back what you heard and ask if you got it right', ask: 'a counsellor, nurse or teacher' },
  { re: /motivation/, task: 'choose a goal that needs a week of effort and write what keeps you going on the hard days', ask: 'a person who stuck with a long goal' },
  { re: /self-regulation/, task: 'next time you feel stressed, pause for one minute before replying and note what changed', ask: 'a person who stays calm under pressure' },
  { re: /self-awareness/, task: 'write down three emotions in a day and what caused each, then ask a friend if it matches what they see', ask: 'a trusted friend or mentor' },
  { re: /financial/, task: 'make a budget for a small event and divide the work among two or three people', ask: 'a small business owner' },
  { re: /execution/, task: 'finish one small project in a week and note what nearly stopped you', ask: 'a person who finishes work regularly' },
  { re: /opportunity/, task: 'list ten small problems people around you face and pick one that might be worth solving', ask: 'a founder' },
  { re: /resilience/, task: 'ask for feedback on something you made and write how you handled any criticism', ask: 'a person who recovered from a failed attempt' },
  { re: /risk/, task: 'make a small decision with incomplete information and write what you checked before choosing', ask: 'a person who has started something new' },
  { re: /kinesthetic/, task: 'learn one topic this week by doing it, such as an experiment or building a model', ask: 'a teacher who uses practical demonstrations' },
  { re: /read\/write/, task: 'learn one topic by writing notes in your own words and a short summary', ask: 'a classmate who learns differently' },
  { re: /auditory/, task: 'learn one topic by explaining it aloud or discussing it with a friend', ask: 'a classmate who learns differently' },
  { re: /visual/, task: 'learn one topic by drawing a diagram or mind map', ask: 'a classmate who learns differently' },
  { re: /commercial numeracy/, task: 'work through a real price, discount or interest example from a shop or a bill and check each step', ask: 'an accountant or shop owner' },
  { re: /analytical number/, task: 'estimate the answer before calculating it for ten problems and compare', ask: 'a maths teacher' },
  { re: /quantitative/, task: 'set up a real situation, such as a trip budget, as a calculation and solve it', ask: 'an engineer or accountant' },
  { re: /language precision/, task: 'edit one paragraph of your own writing for exact word choice and note each change', ask: 'an editor, writer or teacher' },
  { re: /comprehension|evidence/, task: 'read a short article and underline the evidence for its main claim', ask: 'a teacher or writer' },
  { re: /relationships|communication/, task: 'explain one idea to someone in two different ways and check which they understood', ask: 'a trainer or team lead' },
  { re: /verbal ability/, task: 'read a short passage and summarise it in two sentences, then check what you missed', ask: 'a teacher or editor' },
  { re: /numerical reasoning/, task: 'solve five percentage or ratio problems and check each step', ask: 'a maths teacher or analyst' },
  { re: /logical reasoning/, task: 'do five logic puzzles writing each step', ask: 'an analyst or software engineer' },
  { re: /data interpretation/, task: 'read a table or chart from a news article and write three facts it shows', ask: 'an analyst or statistics teacher' },
];
const dimFor = (label: string) => { const l = (label || '').toLowerCase().replace(/^\d+\.\s*/, ''); return DIM.find((x) => x.re.test(l)); };

export function extractScores(container: HTMLElement): Score[] {
  const secs = Array.from(container.querySelectorAll<HTMLElement>(SEC_SEL));
  for (const sec of secs) {
    if (sec.id === 'fcs-companion-start' || sec.closest('#fcs-companion')) continue;
    const items: Score[] = [];
    sec.querySelectorAll('article').forEach((a) => {
      const h = a.querySelector('h5, h4'); if (!h) return;
      const label = clean(h.textContent).replace(/^\d+\.\s*/, '').replace(/:\s*\d+\s*%?$/, '').replace(/\s*\(.*\)\s*$/, '');
      const m = /(\d{1,3})\s*%/.exec(a.textContent || ''); if (!m || !label) return;
      items.push({ label, value: Math.min(100, Number(m[1])) });
    });
    if (items.length >= 3 && items.length <= 12) return items;
  }
  // Pages that show scores as label and percentage rows instead of articles (the stage tests).
  for (const sec of [...Array.from(container.querySelectorAll<HTMLElement>('.res-bars')), ...secs]) {
    if (sec.closest('#fcs-companion-start')) continue;
    const rows: Score[] = [];
    Array.from(sec.querySelectorAll<HTMLElement>('*')).forEach((leaf) => {
      if (leaf.children.length || !/^\s*\d{1,3}\s*%\s*$/.test(leaf.textContent || '')) return;
      const parent = leaf.parentElement; if (!parent) return;
      const label = (parent.innerText || '').split('\n').map((x) => x.replace(/[^\p{L}\p{N}\s/&-]/gu, '').trim()).find((x) => /[A-Za-z]{3,}/.test(x) && !/%/.test(x) && x.length <= 40);
      const v = Number((leaf.textContent || '').replace(/\D/g, ''));
      if (label && !rows.some((r) => r.label === label)) rows.push({ label, value: Math.min(100, v) });
    });
    if (rows.length >= 3 && rows.length <= 12) return rows;
  }
  return [];
}

function headlineOf(container: HTMLElement, fallback: string) {
  const h = Array.from(container.querySelectorAll<HTMLElement>('h3, h2')).map((x) => clean(x.textContent)).find((t) => t && !/^(your results|one result|get the|keep the)/i.test(t));
  return h || fallback;
}

export type Companion = { sections: string[]; extras: (decision: string) => { front: Line[]; back: Line[]; coverMeta: string[] }; state: { decision: string } };

export function buildCompanion(container: HTMLElement, d: CompanionData): Companion {
  const K = KIND[d.kind];
  const scores = extractScores(container).slice().sort((a, b) => b.value - a.value);
  const nTop = Math.min(2, Math.ceil(scores.length / 2)), top = scores.slice(0, nTop), low = scores.slice(nTop).filter((x) => !top.length || x.value < top[top.length - 1].value).slice(-2).reverse();
  const head = d.kind === 'stage' ? 'the direction profile in this report' : headlineOf(container, d.title);
  const today = new Date(); const rev28 = fmt(plus(28)), rev90 = fmt(plus(90)), todayL = fmt(today);
  const t1 = top[0] ? top[0].label : 'your strongest area', l1 = low[0] ? low[0].label : 'your lowest area';
  const LINK: Record<string, string> = {
    interest: 'Why this project: a real piece of work shows whether the interest holds up when you do it, not only when you rate it.',
    personality: 'Why this project: doing and recording real work gives you evidence for or against the pattern in your result, in situations you choose.',
    aptitude: 'Why this project: practice on a real task turns a one-sitting score into evidence of what you can do with time and a method.',
    skills: 'Why this project: a self-rating becomes believable once it is backed by something you made or did.',
    stage: 'Why this project: it gives you something real to show and to learn from while you compare the options in this report.',
  };
  const state = { decision: '' };
  const soft = d.kind === 'interest' || d.kind === 'personality' || d.kind === 'stage';
  const HI = soft ? 'Highest scores' : 'Strongest', LO = soft ? 'Lowest scores' : 'Weakest';
  const SECT = soft ? 'Highest and lowest scores, with the evidence' : 'Strongest and weakest dimensions, with the evidence';
  const MEAN = soft ? 'The evidence is your own answers. Each percentage shows how strongly your answers pointed to that area on this test. A low score means that area mattered less in your answers, not that it is a weakness, and a gap of a few points is small.' : 'The evidence is your own answers. Each percentage is the share of the available score you earned in that area on this test, so a gap of a few points is small and a gap of twenty or more is worth testing.';
  const decisionText = () => state.decision.trim() || 'not stated';
  const listScores = (xs: Score[]) => xs.map((x) => x.label + ' (' + x.value + '%)').join(', ');

  const exp: string[] = d.kind === 'interest' ? [
    'Spend one hour doing a real task from ' + t1 + '. Afterwards rate how it felt from 1 to 5 and write one thing you liked and one you did not.',
    'Ask one person who works in a career family linked to ' + t1 + ' what an ordinary week looks like. Write the part that surprised you.',
    'Try one small task from ' + l1 + ', your lowest area, so you compare a liked and a less liked area from experience instead of guesswork.',
  ] : d.kind === 'personality' ? [
    'Choose one real situation this week where ' + t1 + ' helps you. Use it on purpose and write what happened.',
    'Ask two people who know you well whether ' + t1 + ' matches what they see. Note where they disagree with the result.',
    'Practise one behaviour linked to ' + l1 + ' in a low-risk setting for a week. Write what changed and what felt hard.',
  ] : d.kind === 'aptitude' ? [
    'Redo the questions you missed in ' + l1 + ' without a timer. Write each step before you check the answer.',
    'Do ten mixed practice questions a day for seven days in ' + l1 + ', timing each set. Compare day 1 with day 7.',
    'Explain one solved question from ' + t1 + ' to another person. Note where your explanation broke down.',
  ] : d.kind === 'skills' ? [
    'Use ' + t1 + ' on purpose in one real task this week and write what it changed.',
    'Choose one small habit that builds ' + l1 + ' and repeat it daily for seven days. Tick each day.',
    'Ask one person who has seen you at work or in class which of these results they agree with, and why.',
  ] : [
    'Read the official course or exam page for the first option in your result and write the entry rule that matters most.',
    'Speak to one student or professional on that route and ask what a normal week looks like and what they would do differently.',
    'Spend one hour on a small real task from that route, then rate how it felt from 1 to 5.',
  ];
  const dt = top[0] ? dimFor(top[0].label) : undefined, dl = low[0] ? dimFor(low[0].label) : undefined;
  if (dt && dl && d.kind !== 'stage' && /^type \d/i.test(t1)) {
    exp[0] = 'Read a short description of ' + t1 + ' from a reliable source. Note three lines that fit you and three that do not.';
    exp[1] = 'Show that description to two people who know you well. Ask which lines sound like you and which do not, and write what they say.';
    exp[2] = 'Read a short description of ' + l1 + ' too. Note whether any lines fit you better than the score suggests.';
  } else if (dt && dl && d.kind !== 'stage') {
    exp[0] = 'Test your highest area, ' + t1 + '. Within a day or two, ' + dt.task + '. Afterwards rate how it felt from 1 to 5 and write one thing you liked and one you did not.';
    exp[1] = 'Talk to ' + dt.ask + '. Ask how ' + t1.toLowerCase() + ' shows up in a normal week for them. Write the part that surprised you.';
    exp[2] = 'Test your lowest area, ' + l1 + ', so you compare from experience and not only from the score. Within a day or two, ' + dl.task + '. Then note whether it changes how you read the score.';
  }

  const pj = d.project;
  const example = pj.examples[d.aud] || pj.examples.early || '';
  const trackerHref = '/services/assessments/skill-portfolio-tracker/?from=' + encodeURIComponent(d.slug) + '&aud=' + encodeURIComponent(d.aud) + '&skill=' + encodeURIComponent(d.skill);

  const confidenceHtml = '<div class="result-section"><h4>Confidence and limits of this result</h4>' +
    '<p>This is ' + K.art + ' ' + K.noun + ' based on ' + K.basis + '. ' + esc(K.limit) + '</p>' +
    list(['Use the section on how much weight to give the result, where it is shown above, to see how consistent your own answers were.', 'Treat the result as a hypothesis to test with the experiments below, not as a verdict.', 'Retake it on or after ' + rev90 + ' and compare area by area.']) + '</div>';

  const evidenceHtml = scores.length >= 3 ? '<div class="result-section"><h4>' + SECT + '</h4>' +
    '<p><b>' + HI + ':</b> ' + esc(listScores(top)) + '.</p><p><b>' + LO + ':</b> ' + esc(low.length ? listScores(low) : 'no area scored lower than the highest group') + '.</p>' +
    '<p>' + MEAN + '</p>' +
    '<p>Headline result: ' + esc(head) + '.</p></div>' : '<div class="result-section"><h4>' + SECT + '</h4><p>Headline result: ' + esc(head) + '. The scores above show your strongest and weakest areas. Compare your top and bottom two and use the experiments below to test them.</p></div>';

  const experHtml = '<div class="result-section"><h4>Three experiments to run</h4>' + list(exp.map((e, i) => 'Experiment ' + (i + 1) + ': ' + e)) +
    '<p>For each, write what you did, what happened and whether you would keep, change or drop it. Then decide your next step.</p></div>';

  const planHtml = '<div class="result-section"><h4>Your 30-day and 90-day plan with review dates</h4>' + list([
    'Days 1 to 30: run the three experiments above and record the result of each in one place.',
    'Days 31 to 60: start the proof project below and share a first version with one person for feedback.',
    'Days 61 to 90: finish the proof project, retake this assessment and compare it with today (' + todayL + ').',
    'Review dates: progress check on ' + rev28 + ' and full review on ' + rev90 + '.',
  ]) + '<div data-result-actions><button type="button" class="fcs-co-btn" data-fcs-ics>Add the review dates to your calendar</button></div></div>';

  const projHtml = '<div class="result-section"><h4>One proof project and one portfolio output</h4>' +
    '<h5>' + esc(pj.title) + '</h5><p>' + esc(LINK[d.kind]) + '</p><p><b>Portfolio output:</b> ' + esc(pj.outcome) + '</p><p><b>Time to plan for:</b> about ' + pj.hours + ' hours in total.</p>' +
    '<p><b>Steps:</b></p>' + list(pj.steps) + '<p><b>Evidence to keep while you work:</b></p>' + list(pj.proof) +
    (example ? '<p><b>An example for where you are now:</b> ' + esc(example) + '</p>' : '') +
    '<p><b>Choosing a career direction with this result:</b> ' + esc(SCALE_RULE) + ' See the rating on each route in the <a href="/blog/career-options/career-chart-after-12th/">career chart after 12th</a> and the <a href="/blog/stream-selection/career-chart-after-10th/">career chart after 10th</a>.</p>' +
    '<p><b>Your skill tracker:</b> <a href="' + trackerHref + '">Open the free skill portfolio tracker</a> to rate nine skills, log hours, add evidence, score it and get a six-month timeline.</p></div>';

  const planText = () => [
    'Action plan for ' + d.title + ', ' + todayL + '.',
    'Decision question: ' + decisionText() + '.',
    'Result: ' + head + '.' + (top.length ? ' ' + HI + ': ' + listScores(top) + '.' : '') + (low.length ? ' ' + LO + ': ' + listScores(low) + '.' : ''),
  ];
  const printHtml = () => '<div class="result-section" id="fcs-plan-print"><h4>Your printable action plan</h4>' + list(planText().concat(exp.map((e, i) => 'Experiment ' + (i + 1) + ': ' + e), ['Proof project: ' + pj.title + '. Output: ' + pj.outcome, 'Review on ' + rev28 + ' (progress) and ' + rev90 + ' (full review and retake).'])) +
    '<div data-result-actions><button type="button" class="fcs-co-btn" data-fcs-print>Print this action plan</button></div></div>';

  const parentText = () => [
    'I took the ' + d.title + '. It describes ' + K.art + ' ' + K.noun + ' based on ' + K.basis + '. It has no pass or fail and it does not predict my future.',
    'Decision I am using it for: ' + decisionText() + '.',
    'My headline result was: ' + head + '.' + (top.length ? (soft ? ' My highest scores were ' : ' My strongest areas were ') + listScores(top) + '.' : ''),
    'I will use it to run small experiments, not to make a final decision. How you can help: ask me about my experiment once a week, avoid comparing me with other people, and help me meet one person who does this work. We can review together on ' + rev28 + '.',
  ];
  const counsellorText = () => [
    'Assessment: ' + d.title + '. ' + REPORT_VERSION_LABEL + '. Taken on ' + todayL + '.',
    'Decision question: ' + decisionText() + '.',
    'Headline: ' + head + '.' + (top.length ? ' ' + HI + ': ' + listScores(top) + '.' : '') + (low.length ? ' ' + LO + ': ' + listScores(low) + '.' : ''),
    'Limits: ' + K.limit,
    'Questions I would like to discuss: Which of these results match what you have seen? Which option should I test first? What evidence would change my mind?',
  ];
  const explainHtml = () => '<div class="result-section" id="fcs-parent-explain"><h4>Explain this result to a parent, guardian or someone you trust</h4><p>A short summary written in your voice that you can read out or send.</p>' + list(parentText()) + '<div data-result-actions><button type="button" class="fcs-co-btn" data-fcs-copy="fcs-parent-explain">Copy this summary</button></div></div>' +
    '<div class="result-section" id="fcs-counsellor-explain"><h4>Explain this result to a counsellor, teacher or mentor</h4><p>A factual summary with the questions to bring to the conversation.</p>' + list(counsellorText()) + '<div data-result-actions><button type="button" class="fcs-co-btn" data-fcs-copy="fcs-counsellor-explain">Copy this summary</button></div></div>';

  const nextHtml = '<div class="result-section"><h4>Your next assessment</h4><p>Retake this test on or after ' + rev90 + ', and consider one of these next:</p><ul>' + d.next.map((n) => '<li><a href="' + esc(n.href) + '">' + esc(n.title) + '</a>: ' + esc(n.why) + '</li>').join('') + '</ul></div>';

  const decisionHtml = '<div class="result-section" id="fcs-decision"><h4>What you are using this result for</h4><label class="fcs-co-label">Write your decision question (optional). It is added to your plan, your summaries and your PDF.<input type="text" maxlength="140" id="fcs-decision-input" placeholder="For example: which course to apply for this year"></label></div>';

  const sections = [decisionHtml, confidenceHtml, evidenceHtml, experHtml, planHtml, projHtml, printHtml(), explainHtml(), nextHtml];

  const extras = (decision: string) => {
    state.decision = decision;
    const H = (t: string): Line => ({ kind: 'heading-1', text: t }); const B = (t: string): Line => ({ kind: 'bullet', text: t });
    const front: Line[] = [
      H('Report details'), B('Report: ' + d.title), B(REPORT_VERSION_LABEL), B('Date generated: ' + todayL), B('Decision question: ' + decisionText()),
      H('How this assessment works'), B(K.method), B('The result is ' + K.art + ' ' + K.noun + ' based on ' + K.basis + '.'), B('Confidence and limits: ' + K.limit),
      H('Your plan at a glance'), ...planText().map(B), ...exp.map((e, i) => B('Experiment ' + (i + 1) + ': ' + e)),
      B('30 days: run the three experiments and record each result.'), B('90 days: finish the proof project, retake this assessment and compare.'),
      B('Proof project: ' + pj.title + '. Portfolio output: ' + pj.outcome), B('Portfolio checklist: ' + ['I wrote the problem in one sentence.', 'I finished the output and have a link or a file.', 'I recorded one result or observation.', 'One other person gave feedback.', 'I wrote what I would change.'].join(' ')),
    ];
    const back: Line[] = [
      H('Review page'), B('Progress review date: ' + rev28), B('Full review and retake on or after: ' + rev90), B('What has changed since this report? ________________'), B('Which experiment will I keep, change or drop? ________________'), B('Who will I ask for feedback? ________________'),
      H('How we rate scalability'), B(SCALE_RULE),
      H('Sources and further reading'), B('Your own answers, given on ' + todayL + '.'), B('Assessment page: https://futurecareerschool.com/services/assessments/' + d.slug + '/'), B('Skill portfolio tracker: https://futurecareerschool.com/services/assessments/skill-portfolio-tracker/'), ...d.next.map((n) => B(n.title + ': https://futurecareerschool.com' + n.href)), B(REPORT_VERSION_LABEL),
    ];
    return { front, back, coverMeta: [REPORT_VERSION_LABEL, 'Generated ' + todayL] };
  };

  return { sections, extras, state };
}

const STYLE_ID = 'fcs-companion-style';
function ensureStyle() {
  if (document.getElementById(STYLE_ID)) return;
  const s = document.createElement('style'); s.id = STYLE_ID;
  s.textContent = '.fcs-co-btn{min-height:44px;padding:.5rem 1rem;border-radius:10px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.06);color:inherit;font:600 .95rem inherit;cursor:pointer}.fcs-co-label{display:grid;gap:.4rem;font-weight:600}.fcs-co-label input{min-height:44px;padding:.5rem .7rem;border-radius:10px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.06);color:inherit;font:inherit;font-weight:400;width:100%}#fcs-print-clone{display:none}@media print{body.fcs-print-plan > *:not(#fcs-print-clone){display:none !important}body.fcs-print-plan #fcs-print-clone{display:block !important;padding:18px;background:#fff;color:#000;font:14px/1.55 Arial,sans-serif}body.fcs-print-plan #fcs-print-clone *{color:#000 !important;background:transparent !important;max-height:none !important;opacity:1 !important}body.fcs-print-plan #fcs-print-clone [data-result-actions]{display:none !important}}';
  document.head.appendChild(s);
}

export function installCompanion(container: HTMLElement, d: CompanionData): Companion | null {
  if (container.querySelector('#fcs-companion-marker')) return null;
  const secs = Array.from(container.querySelectorAll<HTMLElement>(SEC_SEL)).filter((x) => !x.closest('.result-section') || x.classList.contains('result-section'));
  if (secs.length < 3) return null;
  const alt = !container.querySelector('.result-section');
  const stageMode = alt && !!container.querySelector('.res-section');
  ensureStyle();
  const co = buildCompanion(container, d);
  const marker = document.createElement('div'); marker.id = 'fcs-companion-marker'; marker.hidden = true;
  let anchor: HTMLElement = secs[secs.length - 1];
  const hostAfter = (html: string) => { const w = document.createElement('div'); w.innerHTML = stageMode ? html.replace(/<div class="result-section"( id="[^"]*")?><h4>(.*?)<\/h4>/g, '<div class="res-section"$1><div class="res-section-header"><h3>$2</h3></div>') : alt ? html.replace(/class="result-section"/g, 'class="result-section insight-section"') : html; const nodes = Array.from(w.children) as HTMLElement[]; nodes.forEach((n) => { anchor.insertAdjacentElement('afterend', n); anchor = n; }); };
  // Put the plan sections before the closing call-to-action blocks, after the last real section.
  const completeResponses = secs.find((s) => /complete (response|answer)|all your responses|response review/i.test(clean(s.querySelector('h4,h3')?.textContent)));
  if (completeResponses) anchor = secs[secs.indexOf(completeResponses) - 1] || anchor;
  co.sections.forEach((h) => hostAfter(h));
  anchor.insertAdjacentElement('afterend', marker);
  const root = container;
  const refresh = () => {
    const p = root.querySelector('#fcs-plan-print'); const pe = root.querySelector('#fcs-parent-explain'); const ce = root.querySelector('#fcs-counsellor-explain');
    const fresh = buildCompanion(container, d); fresh.state.decision = co.state.decision;
    const tmp = document.createElement('div'); tmp.innerHTML = fresh.sections[6] + fresh.sections[7];
    const np = tmp.querySelector('#fcs-plan-print'); const npe = tmp.querySelector('#fcs-parent-explain'); const nce = tmp.querySelector('#fcs-counsellor-explain');
    if (p && np) p.innerHTML = np.innerHTML; if (pe && npe) pe.innerHTML = npe.innerHTML; if (ce && nce) ce.innerHTML = nce.innerHTML;
  };
  void refresh;
  return co;
}
