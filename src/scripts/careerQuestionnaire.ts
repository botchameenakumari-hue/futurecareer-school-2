// @ts-nocheck
// Logic for the career guidance questionnaire. No DOM access here, so one set of questions feeds the online form,
// the paper form (screen preview, print and PDF), the one-page summary and the filled PDF, and they always match.
// The questions are in src/data/careerQuestionnaire.mjs. Answers are plain values kept in the browser by the component.
import {
  CHECKED_ON, TOOL_URL, STAGES, STAGE_KEYS, SCALE_LABELS, MARKS, MARK_TIPS, byStage, FAMILIES,
  SECTIONS, PARENT, ALL_SECTIONS, SECTION_ORDER, DEFAULT_SECTIONS, CLASS_SET, QUICK_SET, START, PROMPT_RULES,
} from '../data/careerQuestionnaire.mjs';
import { createUnicodeText, flattenTexts, isUnicodeLine, needsUnicode, prepareUnicodeText } from './pdfUnicodeText.mjs';

export { STAGES, STAGE_KEYS, SECTIONS, PARENT, ALL_SECTIONS, SECTION_ORDER, DEFAULT_SECTIONS, CLASS_SET, QUICK_SET, START, MARKS, SCALE_LABELS, TOOL_URL, CHECKED_ON, byStage };

export const STORAGE_KEY = 'fcs-career-questionnaire-v1';
export const OPTION_ROWS = 3;
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const todayLabel = (d = new Date()) => d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear();
export const dayAfter = (days, now = new Date()) => {
  const d = new Date(now.getFullYear(), now.getMonth(), now.getDate() + days);
  return d.getDate() + ' ' + MONTHS[d.getMonth()];
};

const SITE = 'https://futurecareerschool.com';
const LINK_BOOKLET12 = SITE + '/tools/career-guidance-after-12th-pdf/';
const LINK_BOOKLET10 = SITE + '/tools/career-guidance-after-10th-pdf/';
const LINK_CHART10 = SITE + '/blog/stream-selection/career-chart-after-10th/';
const LINK_ROUTES = SITE + '/tools/career-route-finder/';

/** Answers for the "Try an example" button. Ids that a stage does not offer are ignored by getAnswer. */
export function exampleState(current) {
  const s = normaliseState(current);
  s.a = {
    int_tick: ['i_tech', 'i_logic', 'i_help'], int_team: '4', int_doing: '5',
    str_tick: ['s_numbers', 's_explain', 's_learn'], str_self: '4',
    stu_marks: 'm_same', stu_link: '2',
    val_tick: ['v_safe', 'v_earn', 'v_learn'],
    lim_tick: ['l_money'], lim_cost: '4', lim_dates: 'd_no',
    sup_who: ['p_parent', 'p_teacher'], sup_hope: 'h_differ', sup_know: '2',
    q_want: ['w_list', 'w_step'], q_decision: 'Which route should I look at first?',
  };
  return s;
}

/** Three dated steps that turn the answers into action. */
export function nextStepsQ(state, now = new Date()) {
  const stage = state.stage;
  const talk = state.sections.interests && state.sections.strengths ? matches(state) : { both: [], enjoyOnly: [] };
  const hasIdeas = talk.both.length || talk.enjoyOnly.length || triggeredPrompts(state).length;
  const s1 = hasIdeas
    ? 'Choose the one idea from "Ideas to talk about" that matters most to you. Ask it to a parent or a teacher and write down what they say.'
    : 'Show this summary to a parent or a teacher and ask what they notice. Write down what they say.';
  let s2;
  if (stage === 'college') s2 = 'Open the career route finder at ' + LINK_ROUTES + ' and search for the kind of work you ticked under enjoy and do well. Write down two routes and what each asks for.';
  else if (stage === 'senior') s2 = 'Open the career guidance after 12th booklet builder at ' + LINK_BOOKLET12 + ', choose your stream and read your next three steps there. Take the shortlist to your family.';
  else if (state.year === 'y8' || state.year === 'y9') s2 = 'Read the career chart after 10th at ' + LINK_CHART10 + ' to see what each stream, diploma and ITI route opens and closes. You do not have to choose yet.';
  else s2 = 'Open the career guidance after 10th booklet builder at ' + LINK_BOOKLET10 + ' and answer with your parents next to you. Read the shortlist and the risk beside each route.';
  const s3 = stage === 'college'
    ? 'Take this summary and your questions to a teacher, a senior or someone who works in a field you ticked. Ask for one next step with a date.'
    : 'Take this summary and your questions to a teacher or a school counsellor. Ask for one next step with a date.';
  return [
    { by: dayAfter(3, now), text: s1 },
    { by: dayAfter(7, now), text: s2 },
    { by: dayAfter(14, now), text: s3 },
  ];
}

/** Plain text for WhatsApp. It never holds limits, family answers, free text, the name or the parent section. */
export function talkingPointsText(state, now = new Date()) {
  const stage = state.stage;
  const lines = ['My career conversation notes (FutureCareerSchool, ' + todayLabel(now) + ')', STAGES[stage].long];
  const pick = (qid) => { const q = questionById[qid]; return getAnswer(state, q).map((id) => optText(q, stage, id)); };
  const add = (label, sec, qid) => { if (!state.sections[sec]) return; const v = pick(qid); if (v.length) lines.push(label + ': ' + v.join('; ')); };
  add('I enjoy', 'interests', 'int_tick');
  add('I do well', 'strengths', 'str_tick');
  add('Matters most to me in future work', 'values', 'val_tick');
  if (state.sections.interests && state.sections.strengths) {
    const m = matches(state);
    if (m.both.length) lines.push('Both enjoy and do well: ' + m.both.join('; '));
  }
  lines.push('', 'My next three steps:');
  nextStepsQ(state, now).forEach((st, i) => lines.push((i + 1) + '. By ' + st.by + ': ' + st.text));
  lines.push('', 'This is a conversation starter, not a test. Make your own: ' + SITE + '/tools/career-guidance-questionnaire-for-students/');
  return lines.join('\n');
}


// ---------- state ----------

export function blankOption() { return { name: '', mark: 'unchecked', risk: '' }; }

export function blankState() {
  const sections = {};
  ALL_SECTIONS.forEach((s) => { sections[s.id] = DEFAULT_SECTIONS.includes(s.id); });
  return { v: 1, stage: 'school', sections, name: '', year: '', focus: '', a: {}, opts: Array.from({ length: OPTION_ROWS }, blankOption) };
}

export function normaliseState(raw) {
  const s = blankState();
  if (!raw || typeof raw !== 'object') return s;
  if (STAGES[raw.stage]) s.stage = raw.stage;
  if (raw.sections && typeof raw.sections === 'object') ALL_SECTIONS.forEach((sec) => { if (typeof raw.sections[sec.id] === 'boolean') s.sections[sec.id] = raw.sections[sec.id]; });
  if (!ALL_SECTIONS.some((sec) => s.sections[sec.id])) DEFAULT_SECTIONS.forEach((id) => { s.sections[id] = true; });
  ['name', 'year', 'focus'].forEach((k) => { if (typeof raw[k] === 'string') s[k] = raw[k]; });
  s.name = s.name.slice(0, START.name.max);
  s.focus = s.focus.slice(0, START.focus.max);
  if (raw.a && typeof raw.a === 'object') {
    Object.keys(raw.a).forEach((k) => {
      const v = raw.a[k];
      if (Array.isArray(v)) s.a[k] = v.filter((x) => typeof x === 'string').slice(0, 30);
      else if (typeof v === 'string') s.a[k] = v.slice(0, 600);
    });
  }
  const rows = Array.isArray(raw.opts) ? raw.opts : [];
  s.opts = Array.from({ length: OPTION_ROWS }, (_, i) => {
    const r = rows[i] && typeof rows[i] === 'object' ? rows[i] : {};
    return {
      name: typeof r.name === 'string' ? r.name.slice(0, 120) : '',
      mark: Object.prototype.hasOwnProperty.call(MARKS, r.mark) ? r.mark : 'unchecked',
      risk: typeof r.risk === 'string' ? r.risk.slice(0, 160) : '',
    };
  });
  return s;
}

// ---------- reading the question list for a stage ----------

const allQuestions = [];
ALL_SECTIONS.forEach((sec) => sec.questions.forEach((q) => allQuestions.push(q)));
const questionById = {};
allQuestions.forEach((q) => { questionById[q.id] = q; });

export const sectionTitle = (sec, stage) => byStage(sec.title, stage);
export const sectionIntro = (sec, stage) => byStage(sec.intro, stage);
export const qLabel = (q, stage) => byStage(q.label, stage);

export function qOptions(q, stage) {
  let o = q.options;
  if (typeof o === 'string' && o.indexOf('same:') === 0) o = questionById[o.slice(5)].options;
  return byStage(o, stage) || [];
}

export const scaleLabels = (q) => SCALE_LABELS[q.scale] || SCALE_LABELS.like;

export function sectionsToShow(state) {
  return ALL_SECTIONS.filter((s) => state.sections[s.id]);
}

/** The answer that counts for this stage: ids that are not offered at this stage are ignored. */
export function getAnswer(state, q) {
  const stage = state.stage;
  const v = state.a[q.id];
  if (q.type === 'tick') {
    const ids = qOptions(q, stage).map((o) => o[0]);
    return (Array.isArray(v) ? v : []).filter((id) => ids.includes(id));
  }
  if (q.type === 'choice') {
    const ids = qOptions(q, stage).map((o) => o[0]);
    return typeof v === 'string' && ids.includes(v) ? v : '';
  }
  if (q.type === 'scale') return typeof v === 'string' && /^[1-5]$/.test(v) ? v : '';
  if (q.type === 'text') return typeof v === 'string' ? v.trim() : '';
  return '';
}

export function optionRows(state) {
  return state.opts.map((o) => ({ name: (o.name || '').trim(), mark: o.mark, risk: (o.risk || '').trim() }));
}

export function isAnswered(state, q) {
  if (q.type === 'options') return optionRows(state).some((o) => o.name);
  const a = getAnswer(state, q);
  return Array.isArray(a) ? a.length > 0 : !!a;
}

export function countAnswered(state) {
  let total = 0; let done = 0;
  sectionsToShow(state).forEach((sec) => sec.questions.forEach((q) => { total += 1; if (isAnswered(state, q)) done += 1; }));
  return { total, done };
}

const optText = (q, stage, id) => {
  const hit = qOptions(q, stage).find((o) => o[0] === id);
  return hit ? hit[1] : '';
};
const stripStop = (t) => String(t).replace(/[.]+$/, '');

// ---------- paper form items (blank or filled) ----------

/** Flat list the HTML form and the PDF both draw from. */
export function formItems(state, filled) {
  const stage = state.stage;
  const items = [];
  let num = 0;
  sectionsToShow(state).forEach((sec) => {
    num += 1;
    items.push({ t: 'section', num, title: sectionTitle(sec, stage), intro: sectionIntro(sec, stage) });
    sec.questions.forEach((q, i) => {
      const item = { t: 'q', n: num + '.' + (i + 1), q, label: qLabel(q, stage), type: q.type };
      if (q.type === 'tick' || q.type === 'choice') {
        item.options = qOptions(q, stage);
        item.max = q.max || 0;
        item.answer = filled ? getAnswer(state, q) : (q.type === 'tick' ? [] : '');
      } else if (q.type === 'scale') {
        item.labels = scaleLabels(q);
        item.answer = filled ? getAnswer(state, q) : '';
      } else if (q.type === 'text') {
        item.lines = q.lines || 2;
        item.answer = filled ? getAnswer(state, q) : '';
      } else if (q.type === 'options') {
        item.rows = filled ? optionRows(state) : Array.from({ length: OPTION_ROWS }, blankOption);
      }
      items.push(item);
    });
  });
  return items;
}

export function startBlock(state, filled) {
  const stage = state.stage;
  return {
    name: filled ? state.name.trim() : '',
    yearLabel: byStage(START.year.label, stage),
    yearOptions: byStage(START.year.options, stage),
    year: filled ? state.year : '',
    focusLabel: byStage(START.focus.label, stage),
    focus: filled ? state.focus.trim() : '',
  };
}

// ---------- summary model ----------

// Short names used in the summary so that it stays on one page.
const SUM = {
  int_tick: 'Enjoy', int_team: 'Working in a team', int_alone: 'Working alone for long', int_open: 'Tasks with no set steps', int_doing: 'Learning by doing',
  int_lost: 'Time passed quickly when', int_try: 'Would like to try',
  str_tick: 'Do well', str_finish: 'Finish long work unprompted', str_help: 'Ask for help when stuck', str_self: 'Learn a skill alone', str_explain: 'Explain what I know',
  str_said: 'Others say I am good at', str_proud: 'Proud of',
  stu_like: 'Enjoy most', stu_hard: 'Find hardest', stu_link: 'See how study links to work', stu_alone: 'Study well alone', stu_marks: 'Latest marks', stu_topic: 'Would read about without an exam',
  val_tick: 'Matters most', val_choose: 'Choosing how I work', val_calm: 'A calm, predictable day', val_people: 'Meeting new people', val_hard: 'Solving hard problems', val_known: 'Work my family understands', val_day: 'An ordinary good day in ten years',
  lim_tick: 'Limits', lim_cost: 'Cost of study affects my choice', lim_move: 'Ready to move for study or work', lim_time: 'Time each week for a new skill', lim_dates: 'Know the exams and dates', lim_rule: 'Rule or date I know about',
  sup_who: 'Can talk to', sup_easy: 'Easy to talk to family', sup_hope: 'Family hope', sup_seen: 'Seen up close', sup_know: 'Know what people in my options do', sup_admire: 'Admire the work of', sup_help: 'Most useful help',
  q_want: 'Most want from the session', q_decision: 'Decision or question', q_ask: 'Questions for the counsellor', q_worry: 'Worried about', q_hope: 'Hopeful about',
  g_who: 'Filled in as', g_hope: 'Hopes', g_sure: 'Sure what suits the student', g_open: 'Comfortable with an unfamiliar route', g_limits: 'Family limits', g_worry: 'Most worried about', g_know: 'Would like the counsellor to know',
};
export const SUMMARY_NAMES = SUM;

const NOTE_LIMITS = 'A conversation starter, not a test result. It adds no scores. Check any course, exam or fee on its official source before acting.';

function sectionRows(state, sec) {
  const stage = state.stage;
  const lead = []; const text = []; const high = []; const low = [];
  sec.questions.forEach((q) => {
    if (q.type === 'options') return;
    const a = getAnswer(state, q);
    if (q.type === 'tick') {
      if (a.length) lead.push([SUM[q.id], a.map((id) => optText(q, stage, id)).join('; ')]);
    } else if (q.type === 'choice') {
      if (a) lead.push([SUM[q.id], optText(q, stage, a)]);
    } else if (q.type === 'scale') {
      if (a === '4' || a === '5') high.push(SUM[q.id] + ' (' + a + ')');
      else if (a === '1' || a === '2') low.push(SUM[q.id] + ' (' + a + ')');
    } else if (q.type === 'text') {
      if (a) text.push([SUM[q.id], a]);
    }
  });
  const scale = [];
  if (high.length) scale.push(['Rated 4 or 5 of 5', high.join('; ')]);
  if (low.length) scale.push(['Rated 1 or 2 of 5', low.join('; ')]);
  return { lead, scale, text };
}

export function matches(state) {
  const stage = state.stage;
  const iq = questionById.int_tick; const sq = questionById.str_tick;
  const interest = getAnswer(state, iq); const strong = getAnswer(state, sq);
  const both = []; const enjoyOnly = [];
  FAMILIES.forEach((f) => {
    const i = interest.includes(f.interest); const s = strong.includes(f.strength);
    if (i && s) both.push(f.name);
  });
  interest.forEach((id) => {
    const fam = FAMILIES.find((f) => f.interest === id);
    if (fam && !strong.includes(fam.strength)) enjoyOnly.push(optText(iq, stage, id));
  });
  return { both, enjoyOnly };
}

export function triggeredPrompts(state) {
  const g = (id) => getAnswer(state, questionById[id]);
  const m = matches(state);
  const out = [];
  const on = (sec) => !!state.sections[sec];
  if (on('interests') && on('strengths') && m.both.length) out.push('overlap');
  if (on('interests') && on('strengths') && m.enjoyOnly.length) out.push('enjoy_only');
  if (on('limits') && (['4', '5'].includes(g('lim_cost')) || g('lim_tick').includes('l_money'))) out.push('cost');
  if (on('limits') && g('lim_tick').includes('l_earn')) out.push('earn');
  if (on('limits') && ['d_no', 'd_unsure'].includes(g('lim_dates'))) out.push('dates');
  if (on('support') && (g('sup_hope') === 'h_differ' || ['1', '2'].includes(g('sup_easy')))) out.push('family');
  if (on('support') && (['1', '2'].includes(g('sup_know')) || (g('sup_seen').length && g('sup_seen').every((x) => ['x_online', 'x_none'].includes(x))))) out.push('seen');
  if (on('support') && g('sup_who').includes('p_none')) out.push('talk');
  if (on('limits') && ['1', '2'].includes(g('lim_time'))) out.push('time');
  return out.map((id) => PROMPT_RULES.find((r) => r.id === id)).filter(Boolean);
}

export function summaryModel(state, today = todayLabel()) {
  const stage = state.stage;
  const { total, done } = countAnswered(state);
  const blocks = [];
  blocks.push({ t: 'title', text: 'Career conversation summary', sub: STAGES[stage].long + (state.name.trim() ? ' | ' + state.name.trim() : '') });
  const yearOpt = byStage(START.year.options, stage).find((o) => o[0] === state.year);
  const metaRows = [['Prepared on', today], ['Questions answered', done + ' of ' + total]];
  if (yearOpt) metaRows.splice(1, 0, [byStage(START.year.short, stage), yearOpt[1]]);
  if (state.focus.trim()) metaRows.splice(metaRows.length - 1, 0, [byStage(START.focus.short, stage), state.focus.trim()]);
  blocks.push({ t: 'rows', items: metaRows });
  if (!done) {
    blocks.push({ t: 'p', text: 'No answers yet. Answer some of the questions and this page fills in with what you chose. Skipping questions is fine.' });
    blocks.push({ t: 'note', text: NOTE_LIMITS });
    return { kind: 'summary', blocks, done, total };
  }
  let num = 0;
  const parentBlocks = [];
  sectionsToShow(state).forEach((sec) => {
    num += 1;
    if (!sec.questions.some((q) => isAnswered(state, q))) return;
    if (sec.id === 'parent') {
      const pr = sectionRows(state, sec);
      parentBlocks.push({ t: 'h', text: num + '. ' + sectionTitle(sec, stage) });
      parentBlocks.push({ t: 'rows', items: pr.lead.concat(pr.scale, pr.text) });
      return;
    }
    const { lead, scale, text } = sectionRows(state, sec);
    blocks.push({ t: 'h', text: num + '. ' + sectionTitle(sec, stage) });
    if (sec.id === 'questions') {
      const head = lead.concat(text.filter((r) => r[0] === SUM.q_decision));
      const tail = text.filter((r) => r[0] !== SUM.q_decision);
      if (head.length) blocks.push({ t: 'rows', items: head });
      const opts = optionRows(state).filter((o) => o.name);
      if (opts.length) {
        blocks.push({
          t: 'table', head: ['Option I am thinking about', 'Growth mark', 'Main risk I know of', 'Next growth step'], widths: [0.24, 0.17, 0.21, 0.38],
          rows: opts.map((o) => [o.name, MARKS[o.mark], o.risk || 'Not written yet', MARK_TIPS[o.mark]]),
        });
      }
      if (tail.length) blocks.push({ t: 'rows', items: tail });
    } else {
      blocks.push({ t: 'rows', items: lead.concat(scale, text) });
    }
  });
  const m = matches(state);
  const prompts = triggeredPrompts(state);
  const talk = [];
  if (state.sections.interests && state.sections.strengths) {
    if (m.both.length) talk.push('Ticked as both something I enjoy and something I do well: ' + m.both.join('; ') + '.');
    if (m.enjoyOnly.length) talk.push('Enjoy, but not yet ticked as a strength: ' + m.enjoyOnly.join('; ') + '.');
  }
  prompts.forEach((p) => talk.push(p.ask));
  if (talk.length) {
    blocks.push({ t: 'h', text: 'Ideas to talk about' });
    blocks.push({ t: 'list', items: talk });
  }
  blocks.push({ t: 'h', text: 'Your next three steps' });
  blocks.push({ t: 'list', items: nextStepsQ(state).map((st) => 'By ' + st.by + ': ' + st.text) });
  parentBlocks.forEach((b) => blocks.push(b));
  blocks.push({ t: 'note', text: NOTE_LIMITS });
  return { kind: 'summary', blocks, done, total };
}

// ---------- HTML (screen preview and print) ----------

export const esc = (v) =>
  String(v == null ? '' : v).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

export function summaryHtml(model) {
  const out = [];
  model.blocks.forEach((b) => {
    if (b.t === 'title') {
      out.push('<header class="cq-doc-head"><p class="cq-doc-brand">FutureCareerSchool</p><h3 class="cq-doc-title">' + esc(b.text) + '</h3>' + (b.sub ? '<p class="cq-doc-sub">' + esc(b.sub) + '</p>' : '') + '</header>');
    } else if (b.t === 'h') {
      out.push('<h4 class="cq-doc-h">' + esc(b.text) + '</h4>');
    } else if (b.t === 'p') {
      out.push('<p class="cq-doc-p">' + esc(b.text) + '</p>');
    } else if (b.t === 'rows') {
      out.push('<dl class="cq-rows">' + b.items.map((r) => '<div><dt>' + esc(r[0]) + '</dt><dd class="cq-pre">' + esc(r[1]) + '</dd></div>').join('') + '</dl>');
    } else if (b.t === 'list') {
      out.push('<ul class="cq-list">' + b.items.map((i) => '<li>' + esc(i).replace(/https:\/\/futurecareerschool\.com\/[^\s<]*[^\s<.,]/g, (u) => '<a href="' + u + '" target="_blank" rel="noopener noreferrer">' + u + '</a>') + '</li>').join('') + '</ul>');
    } else if (b.t === 'table') {
      out.push('<div class="cq-tablewrap"><table class="cq-table"><thead><tr>' + b.head.map((h) => '<th scope="col">' + esc(h) + '</th>').join('') + '</tr></thead><tbody>' +
        b.rows.map((row) => '<tr>' + row.map((cell, i) => '<td data-label="' + esc(b.head[i]) + '">' + esc(cell) + '</td>').join('') + '</tr>').join('') + '</tbody></table></div>');
    } else if (b.t === 'note') {
      out.push('<p class="cq-doc-note">' + esc(b.text) + '</p>');
    }
  });
  return out.join('');
}

const box = (on, round) => '<span class="cq-bx' + (round ? ' cq-bx--round' : '') + (on ? ' cq-on' : '') + '" aria-hidden="true"></span>' + (on ? '<span class="cq-sr">(ticked) </span>' : '');

export const HOWTO = 'Tick the boxes that fit. Circle one number on each 1 to 5 line. Write short answers on the lines. You can skip any question, and you can write in any language. This is a conversation starter, not a test.';
export const FORM_NOTE = 'A conversation starter, not a test result. There are no right or wrong answers, and no score. Check any course, exam or fee on its official source before acting.';

export function formHtml(state, filled) {
  const stage = state.stage;
  const st = startBlock(state, filled);
  const out = [];
  out.push('<header class="cq-doc-head"><p class="cq-doc-brand">FutureCareerSchool</p><h3 class="cq-doc-title">Career guidance questionnaire</h3><p class="cq-doc-sub">' + esc(STAGES[stage].long) + (filled ? ' | my answers' : '') + '</p></header>');
  out.push('<div class="cq-start"><p class="cq-fillrow"><b>' + esc(START.name.label) + ':</b> ' + (st.name ? '<span class="cq-pre">' + esc(st.name) + '</span>' : '<span class="cq-line"></span>') + '</p>');
  out.push('<p class="cq-fillrow"><b>' + esc(st.yearLabel) + ':</b> ' + st.yearOptions.map((o) => '<span class="cq-inline">' + box(st.year === o[0], false) + esc(o[1]) + '</span>').join(' ') + '</p>');
  out.push('<p class="cq-fillrow"><b>' + esc(st.focusLabel) + ':</b> ' + (st.focus ? '<span class="cq-pre">' + esc(st.focus) + '</span>' : '<span class="cq-line"></span>') + '</p>');
  out.push('<p class="cq-fillrow"><b>Date:</b> <span class="cq-line cq-line--short"></span></p></div>');
  out.push('<p class="cq-howto">' + esc(HOWTO) + '</p>');
  formItems(state, filled).forEach((it) => {
    if (it.t === 'section') {
      out.push('</section><section class="cq-sec"><h4 class="cq-sec-h"><span class="cq-sec-n">' + it.num + '</span> ' + esc(it.title) + '</h4><p class="cq-sec-i">' + esc(it.intro) + '</p>');
      return;
    }
    let body = '';
    if (it.type === 'tick' || it.type === 'choice') {
      const arr = it.type === 'tick' ? it.answer : [it.answer];
      body = '<ul class="cq-ticks">' + it.options.map((o) => '<li>' + box(arr.includes(o[0]), it.type === 'choice') + esc(o[1]) + '</li>').join('') + '</ul>';
    } else if (it.type === 'scale') {
      body = '<div class="cq-scale"><span class="cq-lo">' + esc(it.labels[0]) + '</span><span class="cq-nums">' +
        [1, 2, 3, 4, 5].map((n) => '<span class="cq-n' + (it.answer === String(n) ? ' cq-on' : '') + '">' + n + '</span>').join('') + '</span><span class="cq-hi">' + esc(it.labels[1]) + '</span></div>';
    } else if (it.type === 'text') {
      body = it.answer ? '<p class="cq-pre cq-ans">' + esc(it.answer) + '</p>' : Array.from({ length: it.lines }, () => '<span class="cq-rule"></span>').join('');
    } else if (it.type === 'options') {
      body = '<div class="cq-tablewrap"><table class="cq-table cq-table--opts"><thead><tr><th scope="col">Option</th><th scope="col">Growth mark</th><th scope="col">Main risk I know of</th></tr></thead><tbody>' +
        it.rows.map((r, i) => '<tr><td data-label="Option">' + (r.name ? '<span class="cq-pre">' + esc(r.name) + '</span>' : '<span class="cq-n-blank">' + (i + 1) + '.</span>') + '</td><td data-label="Growth mark"><ul class="cq-marks">' +
          ['high', 'mid', 'low', 'unchecked'].map((k) => '<li>' + box(filled && r.name && r.mark === k, false) + esc(MARKS[k]) + '</li>').join('') + '</ul></td><td data-label="Main risk I know of">' + (r.risk ? '<span class="cq-pre">' + esc(r.risk) + '</span>' : '') + '</td></tr>').join('') + '</tbody></table></div>';
    }
    out.push('<div class="cq-q"><p class="cq-ql"><b>' + esc(it.n) + '</b> ' + esc(it.label) + '</p>' + body + '</div>');
  });
  const html = out.join('').replace('</section><section class="cq-sec">', '<section class="cq-sec">');
  return html + (html.indexOf('<section') >= 0 ? '</section>' : '') + '<p class="cq-doc-note">' + esc(FORM_NOTE) + '</p>';
}

// ---------- PDF ----------

/** Text typed by the person, used to decide if a Telugu or Hindi font is needed. Blank forms never need it. */
export function typedTexts(state) {
  const texts = [state.name, state.focus];
  Object.keys(state.a).forEach((k) => { if (typeof state.a[k] === 'string') texts.push(state.a[k]); });
  state.opts.forEach((o) => { texts.push(o.name); texts.push(o.risk); });
  return texts.filter(Boolean);
}
export const hasUnsupportedText = (state, mode) => mode !== 'blank' && typedTexts(state).some((t) => needsUnicode(t));
export const prepareUnicodePdf = (state) => prepareUnicodeText(flattenTexts(typedTexts(state)));

export function pdfText(value) {
  return String(value == null ? '' : value)
    .replace(/₹/g, 'Rs. ')
    .replace(/[‐-―−]/g, '-')
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[•·]/g, '-')
    .replace(/…/g, '...')
    .replace(/ /g, ' ')
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^\x20-\x7E\n]/g, ' ')
    .replace(/[ \t]+/g, ' ')
    .replace(/\r/g, '');
}

export const pdfFileName = (state, mode) => 'career-guidance-questionnaire-' + STAGES[state.stage].file + '-' + (mode === 'blank' ? 'blank' : mode === 'summary' ? 'summary' : 'filled') + '.pdf';

/** mode: blank (empty paper form), filled (summary then my answers), summary (summary only). */
export function buildPdf(JsPDF, state, mode, unicodeReady = false) {
  const pdf = new JsPDF({ unit: 'mm', format: 'a4', orientation: 'portrait' });
  const uni = unicodeReady ? createUnicodeText(pdf) : null;
  const isImg = (l) => uni && isUnicodeLine(l);
  const M = 15; const CW = 180; const BOTTOM = 297 - 19;
  const TEAL = [11, 118, 109]; const INK = [28, 32, 38]; const GREY = [96, 104, 112]; const RULE = [150, 158, 166]; const PALE = [226, 240, 238]; const WHITE = [255, 255, 255];
  let y = M; let dry = false; let runHead = '';
  const stage = state.stage;

  const color = (c) => pdf.setTextColor(c[0], c[1], c[2]);
  const font = (size, style) => { pdf.setFont('helvetica', style || 'normal'); pdf.setFontSize(size); };
  const T = (s, x, yy, opt) => { if (!dry) pdf.text(pdfText(s), x, yy, opt); };
  const put = (l, x, baseline, size, style, c) => {
    if (dry) return;
    if (isImg(l)) uni.draw(l, x, baseline, size, style, c); else pdf.text(l, x, baseline);
  };
  const line = (x1, y1, x2, y2, c, w) => { if (dry) return; pdf.setDrawColor(c[0], c[1], c[2]); pdf.setLineWidth(w || 0.25); pdf.line(x1, y1, x2, y2); };
  const rect = (x, yy, w, h, c, style, w2) => { if (dry) return; pdf.setDrawColor(c[0], c[1], c[2]); pdf.setFillColor(c[0], c[1], c[2]); pdf.setLineWidth(w2 || 0.25); pdf.rect(x, yy, w, h, style || 'S'); };
  const wrap = (text, width, size, style) => {
    font(size, style);
    const viaBrowser = uni && uni.wrap(text, width, size, style);
    if (viaBrowser) return viaBrowser;
    const out = [];
    pdfText(text).split('\n').forEach((part) => {
      if (!part.trim()) { out.push(''); return; }
      pdf.splitTextToSize(part.trim(), width).forEach((l) => out.push(l));
    });
    return out;
  };
  const newPage = () => {
    if (!dry) pdf.addPage();
    y = M;
    if (runHead) { font(8, 'normal'); color(GREY); T(runHead, M, y + 2); line(M, y + 4, M + CW, y + 4, [200, 206, 210], 0.2); y += 8; }
  };
  const need = (h) => { if (y + h > BOTTOM) newPage(); };
  const paragraph = (text, size, style, c, lhBase, x, width) => {
    const ls = wrap(text, width, size, style);
    const lh = ls.some(isImg) ? lhBase * 1.25 : lhBase;
    color(c); font(size, style);
    ls.forEach((l) => { need(lh); if (l) put(l, x, y + lh * 0.75, size, style, c); y += lh; });
    return ls.length;
  };
  const measure = (fn) => { const sy = y; const sd = dry; dry = true; y = 0; fn(); const h = y; dry = sd; y = sy; return h; };

  // ----- shared small drawings -----
  const checkbox = (x, yy, on, round) => {
    if (dry) return;
    const s = 3.6;
    pdf.setDrawColor(90, 98, 106); pdf.setLineWidth(0.3);
    if (round) {
      if (on) { pdf.setFillColor(TEAL[0], TEAL[1], TEAL[2]); pdf.circle(x + s / 2, yy + s / 2, s / 2, 'FD'); pdf.setFillColor(255, 255, 255); pdf.circle(x + s / 2, yy + s / 2, 0.9, 'F'); }
      else pdf.circle(x + s / 2, yy + s / 2, s / 2, 'S');
    } else {
      if (on) { pdf.setFillColor(PALE[0], PALE[1], PALE[2]); pdf.rect(x, yy, s, s, 'FD'); pdf.setDrawColor(TEAL[0], TEAL[1], TEAL[2]); pdf.setLineWidth(0.55); pdf.line(x + 0.7, yy + 0.7, x + s - 0.7, yy + s - 0.7); pdf.line(x + s - 0.7, yy + 0.7, x + 0.7, yy + s - 0.7); }
      else pdf.rect(x, yy, s, s, 'S');
    }
  };

  // ----- summary blocks -----
  const summaryBlocks = (blocks) => {
    blocks.forEach((b) => {
      if (b.t === 'title') {
        need(22);
        font(8.5, 'bold'); color(TEAL); T('FUTURECAREERSCHOOL', M, y + 3); y += 6;
        font(17, 'bold'); color(INK); T(b.text, M, y + 6); y += 9.5;
        if (b.sub) paragraph(b.sub, 10, 'normal', GREY, 4.6, M, CW);
        y += 1; line(M, y, M + CW, y, TEAL, 0.6); y += 3;
      } else if (b.t === 'h') {
        need(16); y += 1.6; font(10.5, 'bold'); color(TEAL); T(b.text, M, y + 3.8); y += 5.2; line(M, y, M + CW, y, [200, 206, 210], 0.2); y += 1.6;
      } else if (b.t === 'p') {
        paragraph(b.text, 9.5, 'normal', INK, 4.6, M, CW); y += 1.5;
      } else if (b.t === 'rows') {
        const LW = 46;
        b.items.forEach((r) => {
          const lab = wrap(r[0], LW - 2, 8.5, 'bold'); const val = wrap(r[1], CW - LW, 9, 'normal');
          const lh = val.some(isImg) ? 5.4 : 4.2; const n = Math.max(lab.length, val.length);
          need(n * lh + 1);
          color(GREY); font(8.5, 'bold'); lab.forEach((l, i) => { if (l) put(l, M, y + 3.2 + i * lh, 8.5, 'bold', GREY); });
          color(INK); font(9, 'normal'); val.forEach((l, i) => { if (l) put(l, M + LW, y + 3.2 + i * lh, 9, 'normal', INK); });
          y += n * lh + 0.8;
        });
        y += 0.6;
      } else if (b.t === 'list') {
        b.items.forEach((item) => {
          const ls = wrap(item, CW - 6, 9, 'normal'); const lh = ls.some(isImg) ? 5.4 : 4.3;
          color(INK); font(9, 'normal');
          ls.forEach((l, i) => { need(lh); if (i === 0) { font(9, 'normal'); color(INK); T('-', M + 1, y + 3.3); } if (l) put(l, M + 6, y + 3.3, 9, 'normal', INK); y += lh; });
          y += 0.7;
        });
        y += 0.5;
      } else if (b.t === 'table') {
        const widths = b.widths.map((w) => w * CW); const pad = 1.5;
        const drawRow = (cells, header) => {
          const sz = header ? 8.5 : 8.5; const st = header ? 'bold' : 'normal';
          const wr = cells.map((c, i) => wrap(c, widths[i] - pad * 2, sz, st));
          const lh = wr.some((w) => w.some(isImg)) ? 5 : 4;
          const h = Math.max(7, Math.max(...wr.map((w) => Math.max(1, w.length))) * lh + pad * 2);
          if (y + h > BOTTOM) { newPage(); if (!header) drawRow(b.head, true); }
          let x = M;
          cells.forEach((c, i) => {
            if (header) rect(x, y, widths[i], h, PALE, 'F');
            rect(x, y, widths[i], h, RULE, 'S', 0.2);
            color(INK); font(sz, st);
            wr[i].forEach((l, j) => { if (l) put(l, x + pad, y + pad + 2.8 + j * lh, sz, st, INK); });
            x += widths[i];
          });
          y += h;
        };
        need(20); drawRow(b.head, true); b.rows.forEach((r) => drawRow(r, false)); y += 3;
      } else if (b.t === 'note') {
        y += 2; paragraph(b.text, 8.3, 'italic', GREY, 4, M, CW);
      }
    });
  };

  // ----- paper form -----
  const formTitle = (filled) => {
    need(24);
    font(8.5, 'bold'); color(TEAL); T('FUTURECAREERSCHOOL', M, y + 3); y += 7;
    font(19, 'bold'); color(INK); T('Career guidance questionnaire', M, y + 7); y += 11;
    paragraph(STAGES[stage].long + (filled ? ' | my answers' : ''), 10.5, 'normal', GREY, 5, M, CW);
    y += 1.5; line(M, y, M + CW, y, TEAL, 0.6); y += 4;
  };

  const startBlockPdf = (filled) => {
    const st = startBlock(state, filled);
    // name and date on one row
    font(9, 'bold'); color(INK); T(START.name.label + ':', M, y + 4);
    const nx = M + 62;
    if (st.name) { const ls = wrap(st.name, 40, 10, 'normal'); font(10, 'normal'); color(INK); ls.slice(0, 1).forEach((l) => put(l, nx, y + 3.8, 10, 'normal', INK)); }
    line(nx, y + 5, nx + 44, y + 5, RULE, 0.25);
    font(9, 'bold'); color(INK); T('Date:', M + 120, y + 4); line(M + 132, y + 5, M + CW, y + 5, RULE, 0.25);
    y += 9;
    // class or year
    font(9, 'bold'); color(INK); T(st.yearLabel + ':', M, y + 3.6);
    let x = M + 24;
    st.yearOptions.forEach((o) => {
      font(9, 'normal'); const w = pdf.getTextWidth(pdfText(o[1])) + 9;
      if (x + w > M + CW) { x = M + 24; y += 6; }
      checkbox(x, y + 0.6, st.year === o[0], false); color(INK); T(o[1], x + 5.2, y + 3.6); x += w + 3;
    });
    y += 8;
    // stream or course
    font(9, 'bold'); color(INK); T(st.focusLabel + ':', M, y + 3.6); y += 6;
    if (st.focus) { const ls = wrap(st.focus, CW, 10, 'normal'); ls.forEach((l) => { if (l) put(l, M, y + 3.6, 10, 'normal', INK); line(M, y + 5, M + CW, y + 5, RULE, 0.25); y += 6.6; }); }
    else { line(M, y + 5, M + CW, y + 5, RULE, 0.25); y += 7; }
    y += 1;
    paragraph(HOWTO, 8.6, 'italic', GREY, 4, M, CW);
    y += 2;
  };

  const drawQ = (it) => {
    const y0 = y;
    // label
    font(9.5, 'bold'); color(INK); T(it.n, M, y + 3.8);
    const label = it.label;
    const ls = wrap(label, CW - 9, 9.5, 'normal');
    const lh = ls.some(isImg) ? 5.6 : 4.6;
    color(INK); font(9.5, 'normal');
    ls.forEach((l, i) => { if (l) put(l, M + 9, y + 3.8 + i * lh, 9.5, 'normal', INK); });
    y += ls.length * lh + 1.6;
    if (it.type === 'tick' || it.type === 'choice') {
      const colW = (CW - 9) / 2; const arr = it.type === 'tick' ? it.answer : [it.answer];
      for (let i = 0; i < it.options.length; i += 2) {
        const pair = it.options.slice(i, i + 2);
        const wr = pair.map((o) => wrap(o[1], colW - 6.5, 9, 'normal'));
        const n = Math.max(...wr.map((w) => w.length));
        pair.forEach((o, k) => {
          const x = M + 9 + k * colW;
          checkbox(x, y + 0.5, arr.includes(o[0]), it.type === 'choice');
          color(INK); font(9, 'normal');
          wr[k].forEach((l, j) => { if (l) put(l, x + 5.5, y + 3.5 + j * 4.2, 9, 'normal', INK); });
        });
        y += n * 4.2 + 1.2;
      }
    } else if (it.type === 'scale') {
      const cy = y + 4; const x0 = M + 52; const step = 10;
      font(8, 'normal'); color(GREY);
      const lo = wrap(it.labels[0], 36, 8, 'normal'); lo.forEach((l, i) => { if (l) put(l, M + 9, cy + 0.9 + i * 3.6 - (lo.length - 1) * 1.8, 8, 'normal', GREY); });
      for (let k = 0; k < 5; k++) {
        const cx = x0 + k * step; const on = it.answer === String(k + 1);
        if (!dry) {
          pdf.setLineWidth(0.3);
          if (on) { pdf.setFillColor(TEAL[0], TEAL[1], TEAL[2]); pdf.setDrawColor(TEAL[0], TEAL[1], TEAL[2]); pdf.circle(cx, cy, 3.2, 'FD'); }
          else { pdf.setDrawColor(90, 98, 106); pdf.circle(cx, cy, 3.2, 'S'); }
        }
        font(8.5, on ? 'bold' : 'normal'); color(on ? WHITE : INK); T(String(k + 1), cx, cy + 1.1, { align: 'center' });
      }
      font(8, 'normal'); color(GREY);
      const hi = wrap(it.labels[1], 40, 8, 'normal'); hi.forEach((l, i) => { if (l) put(l, x0 + 4 * step + 6, cy + 0.9 + i * 3.6 - (hi.length - 1) * 1.8, 8, 'normal', GREY); });
      y += 7.8;
    } else if (it.type === 'text') {
      const ls2 = it.answer ? wrap(it.answer, CW - 9, 10, 'normal') : [];
      const count = Math.max(it.lines, ls2.length); const pitch = ls2.some(isImg) ? 7.2 : 6.3;
      for (let i = 0; i < count; i++) {
        if (ls2[i]) { color(INK); font(10, 'normal'); put(ls2[i], M + 9, y + pitch - 2.1, 10, 'normal', INK); }
        line(M + 9, y + pitch - 0.6, M + CW, y + pitch - 0.6, RULE, 0.22);
        y += pitch;
      }
      y += 0.5;
    } else if (it.type === 'options') {
      const widths = [0.33, 0.31, 0.36].map((w) => w * CW); const pad = 1.6;
      const heads = ['Option', 'Growth mark (tick one)', 'Main risk I know of'];
      let x = M; heads.forEach((h, i) => { rect(x, y, widths[i], 7, PALE, 'F'); rect(x, y, widths[i], 7, RULE, 'S', 0.2); font(8.5, 'bold'); color(INK); T(h, x + pad, y + 4.7); x += widths[i]; });
      y += 7;
      it.rows.forEach((r, ri) => {
        const nameL = wrap(r.name || '', widths[0] - pad * 2, 9, 'normal'); const riskL = wrap(r.risk || '', widths[2] - pad * 2, 9, 'normal');
        const lh = nameL.concat(riskL).some(isImg) ? 5 : 4.2;
        const h = Math.max(16.2, Math.max(nameL.length, riskL.length) * lh + pad * 2);
        if (y + h > BOTTOM) newPage();
        let cx = M;
        widths.forEach((w) => { rect(cx, y, w, h, RULE, 'S', 0.2); cx += w; });
        if (r.name) { color(INK); font(9, 'normal'); nameL.forEach((l, j) => { if (l) put(l, M + pad, y + pad + 3 + j * lh, 9, 'normal', INK); }); }
        else { font(9, 'normal'); color(GREY); T(String(ri + 1) + '.', M + pad, y + pad + 3); }
        ['high', 'mid', 'low', 'unchecked'].forEach((k, mi) => {
          const bx = M + widths[0] + pad; const by = y + 1.1 + mi * 3.7;
          if (!dry) { const s = 3; pdf.setLineWidth(0.25); pdf.setDrawColor(90, 98, 106); if (filled(r, k)) { pdf.setFillColor(PALE[0], PALE[1], PALE[2]); pdf.rect(bx, by, s, s, 'FD'); pdf.setDrawColor(TEAL[0], TEAL[1], TEAL[2]); pdf.setLineWidth(0.5); pdf.line(bx + .5, by + .5, bx + s - .5, by + s - .5); pdf.line(bx + s - .5, by + .5, bx + .5, by + s - .5); } else pdf.rect(bx, by, s, s, 'S'); }
          font(7.8, 'normal'); color(INK); T(MARKS[k], bx + 4.2, by + 2.5);
        });
        if (r.risk) { color(INK); font(9, 'normal'); riskL.forEach((l, j) => { if (l) put(l, M + widths[0] + widths[1] + pad, y + pad + 3 + j * lh, 9, 'normal', INK); }); }
        y += h;
      });
      y += 1.5;
    }
    y += 1.3;
    return y - y0;
  };
  const filled = (r, k) => !!r.name && r.mark === k;

  const drawForm = (isFilled) => {
    runHead = 'Career guidance questionnaire | ' + STAGES[stage].long + (isFilled ? ' | my answers' : '');
    formTitle(isFilled);
    startBlockPdf(isFilled);
    const items = formItems(state, isFilled);
    items.forEach((it, idx) => {
      if (it.t === 'section') {
        const next = items[idx + 1];
        const introLines = measure(() => { paragraph(it.intro, 9, 'italic', GREY, 4.2, M, CW); });
        const firstH = next ? measure(() => { drawQ(next); }) : 0;
        need(9 + introLines + 2 + Math.min(firstH, 60));
        y += 1.5;
        rect(M, y, CW, 7.4, TEAL, 'F');
        font(11, 'bold'); color(WHITE); T(it.num + '   ' + it.title, M + 3, y + 5.1);
        y += 9.4;
        paragraph(it.intro, 9, 'italic', GREY, 4.2, M, CW);
        y += 1.8;
      } else {
        const h = measure(() => { drawQ(it); });
        need(h);
        drawQ(it);
      }
    });
    y += 1; paragraph(FORM_NOTE, 8.3, 'italic', GREY, 4, M, CW);
  };

  // ----- assemble -----
  if (mode === 'blank') {
    drawForm(false);
  } else {
    runHead = 'Career conversation summary | ' + STAGES[stage].long;
    summaryBlocks(summaryModel(state).blocks);
    if (mode === 'filled') {
      pdf.addPage(); y = M;
      drawForm(true);
    }
  }

  const total = pdf.getNumberOfPages();
  for (let i = 1; i <= total; i++) {
    pdf.setPage(i);
    font(7.6, 'italic'); color(GREY);
    pdf.text('A conversation starter, not a test result. Checked ' + CHECKED_ON + '.', M, 297 - 13);
    font(8, 'normal');
    pdf.text(TOOL_URL, M, 297 - 9);
    pdf.text('Page ' + i + ' of ' + total, 210 - M, 297 - 9, { align: 'right' });
  }
  return pdf;
}
