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

type Row = Record<string, any>;

export type DecisionUiContext = {
  escapeHtml: (value: unknown) => string;
  formatDate: (value: unknown, includeTime?: boolean) => string;
  formatStatus: (value: unknown) => string;
  userId: string;
  viewerRole: string;
};

const abilityLabels = ['Not started', 'Aware', 'With support', 'Independent', 'Can adapt or teach'];

export const scopeLabels: Record<SkillScope, string> = {
  foundation: 'Career foundation',
  'career-specific': 'Primary-career specific',
  'future-ready': 'Future-ready',
  employability: 'Employability',
  'personal-effectiveness': 'Personal effectiveness',
};

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

export function careerCardHtml(path: Row, ui: DecisionUiContext, editable = true) {
  const guide = careerGuideFor(path.preset_key);
  const reasons = Array.isArray(path.reasons) ? path.reasons : [];
  const tradeoffs = Array.isArray(path.tradeoffs) ? path.tradeoffs : [];
  const canManage = editable && (ui.viewerRole !== 'student' || !path.created_by || path.created_by === ui.userId);
  const optionType = path.option_type || 'alternative';
  const decisionSignal = decisionSignalFor(path);
  const evidenceStrength = evidenceStrengthFor(path);
  const outlook = path.future_outlook || guide?.outlook || 'uncertain';
  const workReality = guide?.dailyWork ?? [path.work_environment || 'The real work has not been investigated yet.'];
  const skillPreview = guide ? [...guide.foundationSkills.slice(0, 2), ...guide.specialistSkills.slice(0, 3), ...guide.futureSkills.slice(0, 2)] : [];
  const summary = guide?.summary || path.work_environment || 'Add a clear description of the work this option actually involves.';
  const outlookDetail = guide?.outlookDetail || 'Record current demand evidence and how technology or regulation may change the work.';
  const watchOuts = tradeoffs.length ? tradeoffs : guide?.watchOuts ?? [];
  return `<article class="career-decision-row" data-status="${ui.escapeHtml(path.status)}" data-option-type="${ui.escapeHtml(optionType)}">
    <header>
      <span class="career-decision-title"><span class="option-type-badge" data-option-type="${ui.escapeHtml(optionType)}">${ui.escapeHtml(ui.formatStatus(optionType))}</span><span><h4>${ui.escapeHtml(path.title)}</h4><small>${ui.escapeHtml(path.career_category || 'Other')}</small></span></span>
      <span class="career-decision-state"><span data-decision-signal="${ui.escapeHtml(decisionSignal)}">${ui.escapeHtml(decisionSignalLabel(decisionSignal))}</span><strong>${Number(path.focus_percentage ?? 0)}% focus</strong></span>
    </header>
    <p class="career-decision-summary">${ui.escapeHtml(summary)}</p>
    <div class="career-reality-grid">
      <section><small>What the work involves</small>${listHtml(workReality.slice(0, 3), ui.escapeHtml)}</section>
      <section><small>Entry route</small><p>${ui.escapeHtml(path.route_summary || guide?.entryRoutes.join(' / ') || 'Not mapped yet')}</p></section>
      <section><small>Future outlook</small><strong class="outlook-label" data-outlook="${ui.escapeHtml(outlook)}">${ui.escapeHtml(ui.formatStatus(outlook))}</strong><p>${ui.escapeHtml(outlookDetail)}</p></section>
    </div>
    ${skillPreview.length ? `<div class="career-skill-preview"><small>Skills this route needs</small><div>${chipsHtml(skillPreview, ui.escapeHtml)}</div></div>` : ''}
    <div class="career-evidence-line"><span><small>Evidence so far</small><strong>${ui.escapeHtml(evidenceStrengthLabel(evidenceStrength))}</strong></span><span><small>Why it may work</small><strong>${ui.escapeHtml(reasons.join(' / ') || 'No observed evidence recorded yet')}</strong></span><span><small>Watch-outs</small><strong>${ui.escapeHtml(watchOuts.join(' / ') || 'No trade-off recorded yet')}</strong></span></div>
    <footer><span><small>Next real-world test</small><strong>${ui.escapeHtml(path.next_step || guide?.starterTests[0] || 'Choose one test that creates evidence')}</strong>${path.review_question ? `<em>Open question: ${ui.escapeHtml(path.review_question)}</em>` : ''}</span><span class="row-actions">${canManage ? `<button class="table-action" type="button" data-edit-career="${ui.escapeHtml(path.id)}">Edit</button><button class="table-action" type="button" data-delete-career="${ui.escapeHtml(path.id)}">Remove</button>` : ''}</span></footer>
  </article>`;
}

export function careerLibraryMatches(query: string, category: string) {
  const normalized = query.trim().toLowerCase();
  return guidedCareerPresets.filter((guide) => {
    const haystack = [guide.title, guide.category, guide.summary, guide.outlookDetail, ...guide.foundationSkills, ...guide.specialistSkills, ...guide.futureSkills, ...guide.tags].join(' ').toLowerCase();
    if (normalized && !haystack.includes(normalized)) return false;
    if (category === 'featured') return normalized ? true : guide.featured;
    if (category === 'future') return guide.category === 'Future-ready & Cross-functional' || guide.futureSkills.some((skill) => /ai|automation|climate|digital|data|privacy|robot|sustain/i.test(skill));
    return category === 'all' || guide.category === category;
  });
}

export function careerLibraryResultsHtml(matches: CareerGuide[], selectedKey: string, escapeHtml: DecisionUiContext['escapeHtml'], limit: number) {
  if (!matches.length) return '<div class="preset-empty">No matching guide. Use the manual fields below to add a route that is specific to this student.</div>';
  return matches.slice(0, limit).map((guide) => `<button type="button" data-career-preset="${escapeHtml(guide.key)}" class="${guide.key === selectedKey ? 'is-selected' : ''}"><span><strong>${escapeHtml(guide.title)}</strong><em data-outlook="${escapeHtml(guide.outlook)}">${escapeHtml(guide.outlook)}</em></span><small>${escapeHtml(guide.category)}</small><p>${escapeHtml(guide.summary)}</p></button>`).join('');
}

export function careerGuidePreviewHtml(guide: CareerGuide, escapeHtml: DecisionUiContext['escapeHtml']) {
  return `<div class="career-guide-header"><span><small>${escapeHtml(guide.category)}</small><h4>${escapeHtml(guide.title)}</h4></span><strong data-outlook="${escapeHtml(guide.outlook)}">${escapeHtml(guide.outlook)} outlook</strong></div>
    <p>${escapeHtml(guide.summary)}</p>
    <div class="career-guide-sections">
      <section><small>Real work</small>${listHtml(guide.dailyWork, escapeHtml)}</section>
      <section><small>Common entry routes</small>${listHtml(guide.entryRoutes, escapeHtml)}</section>
      <section><small>Future change</small><p>${escapeHtml(guide.outlookDetail)}</p><div class="guide-chips">${chipsHtml(guide.futureSkills, escapeHtml)}</div></section>
      <section><small>Specialist skills</small><div class="guide-chips">${chipsHtml(guide.specialistSkills, escapeHtml)}</div></section>
      <section><small>Check before committing</small>${listHtml(guide.watchOuts, escapeHtml)}</section>
      <section><small>Useful first tests</small>${listHtml(guide.starterTests, escapeHtml)}</section>
    </div>
    <div class="career-guide-actions"><button class="primary-button" type="button" data-choose-career="primary" data-guide-key="${escapeHtml(guide.key)}">Choose as primary</button><button class="secondary-button" type="button" data-choose-career="testing" data-guide-key="${escapeHtml(guide.key)}">Test before choosing</button><button class="secondary-button" type="button" data-choose-career="alternative" data-guide-key="${escapeHtml(guide.key)}">Keep as alternative</button></div>`;
}

export function skillCardHtml(skill: Row, evidence: Row[], careers: Row[], ui: DecisionUiContext) {
  const canManage = ui.viewerRole !== 'student' || skill.created_by === ui.userId;
  const scope = (skill.skill_scope || (skill.category === 'employability' ? 'employability' : 'career-specific')) as SkillScope;
  const linkedCareer = careers.find((career) => career.id === skill.linked_career_path_id);
  const current = Math.max(0, Math.min(4, Number(skill.current_level ?? 0)));
  const target = Math.max(1, Math.min(4, Number(skill.target_level ?? 2)));
  const proofState = evidence.length ? `${evidence.length} proof item${evidence.length === 1 ? '' : 's'}` : 'Proof still needed';
  return `<article class="skill-roadmap-row" data-priority="${ui.escapeHtml(skill.priority)}" data-scope="${ui.escapeHtml(scope)}">
    <header><span><strong>${ui.escapeHtml(skill.skill_name)}</strong><small>${ui.escapeHtml(scopeLabels[scope])}${linkedCareer ? ` · for ${ui.escapeHtml(linkedCareer.title)}` : ''}</small></span><span class="skill-proof-state" data-has-proof="${evidence.length ? 'true' : 'false'}">${ui.escapeHtml(proofState)}</span></header>
    <div class="skill-progress-line"><span><small>Now</small><strong>${ui.escapeHtml(abilityLabels[current])}</strong></span><div class="skill-progress-track" aria-label="Current ${current}, required ${target}"><i style="width:${current * 25}%"></i><b style="left:${target * 25}%"></b></div><span><small>Needed</small><strong>${ui.escapeHtml(abilityLabels[target])}</strong></span></div>
    <div class="skill-work-grid"><span><small>Development outcome</small><p>${ui.escapeHtml(skill.development_goal || 'Define the capability this practice should improve.')}</p></span><span><small>Practice method</small><p>${ui.escapeHtml(skill.practice_method || 'Choose a repeated real task, not only a course.')}</p></span><span><small>Proof of competence</small><p>${ui.escapeHtml(skill.success_criteria || 'Define the output, standard, and feedback that will count as proof.')}</p></span></div>
    <div class="skill-evidence-list">${evidence.slice(0, 3).map((row) => `<span><i aria-hidden="true">EV</i><strong>${ui.escapeHtml(row.title)}</strong><small>${ui.escapeHtml(ui.formatStatus(row.evidence_type))} · ${ui.escapeHtml(ui.formatDate(row.evidence_date))}</small></span>`).join('') || '<small>No evidence added yet.</small>'}</div>
    <footer><span>${skill.review_date ? `Review ${ui.escapeHtml(ui.formatDate(skill.review_date))}` : 'No review date set'} · ${ui.escapeHtml(ui.formatStatus(skill.priority))}</span><span class="row-actions"><button class="table-action" type="button" data-add-evidence="${ui.escapeHtml(skill.id)}">Add evidence</button>${canManage ? `<button class="table-action" type="button" data-edit-skill="${ui.escapeHtml(skill.id)}">Edit</button><button class="table-action" type="button" data-delete-skill="${ui.escapeHtml(skill.id)}">Remove</button>` : ''}</span></footer>
  </article>`;
}

export function skillRoadmapHtml(skills: Row[], allEvidence: Row[], careers: Row[], ui: DecisionUiContext) {
  if (!skills.length) return '<div class="empty-state coaching-empty"><strong>No capability plan yet.</strong><span>Add a complete skill plan to create a balanced starting roadmap in one step.</span></div>';
  const order: SkillScope[] = ['foundation', 'career-specific', 'future-ready', 'employability', 'personal-effectiveness'];
  return order.map((scope) => {
    const rows = skills.filter((skill) => (skill.skill_scope || (skill.category === 'employability' ? 'employability' : 'career-specific')) === scope);
    if (!rows.length) return '';
    return `<section class="skill-scope-group" data-scope="${scope}"><header><h4>${ui.escapeHtml(scopeLabels[scope])}</h4><span>${rows.length} skill${rows.length === 1 ? '' : 's'}</span></header>${rows.map((skill) => skillCardHtml(skill, allEvidence.filter((row) => row.skill_id === skill.id), careers, ui)).join('')}</section>`;
  }).join('');
}

export function skillSummaryHtml(skills: Row[], allEvidence: Row[], escapeHtml: DecisionUiContext['escapeHtml']) {
  const essential = skills.filter((skill) => skill.priority === 'core');
  const gaps = skills.filter((skill) => Number(skill.current_level) < Number(skill.target_level));
  const withEvidence = skills.filter((skill) => allEvidence.some((evidence) => evidence.skill_id === skill.id));
  const careerSpecific = skills.filter((skill) => skill.skill_scope === 'career-specific');
  const futureReady = skills.filter((skill) => skill.skill_scope === 'future-ready');
  return `<span><small>Essential skills</small><strong>${essential.length}</strong><em>${essential.filter((skill) => Number(skill.current_level) < Number(skill.target_level)).length} still developing</em></span><span><small>Career-specific</small><strong>${careerSpecific.length}</strong><em>${careerSpecific.length ? 'Mapped to the direction' : 'Plan not added'}</em></span><span><small>Future-ready</small><strong>${futureReady.length}</strong><em>${futureReady.length ? 'Included in roadmap' : 'Needs attention'}</em></span><span><small>Proof coverage</small><strong>${skills.length ? Math.round((withEvidence.length / skills.length) * 100) : 0}%</strong><em>${escapeHtml(`${withEvidence.length} of ${skills.length} skills`)}</em></span><span><small>Open gaps</small><strong>${gaps.length}</strong><em>Current ability below required</em></span>`;
}

export function skillRecommendationsHtml(primaryCategory: string | null | undefined, escapeHtml: DecisionUiContext['escapeHtml']) {
  const packs = recommendedSkillPacks(primaryCategory);
  return `<div><span><small>Recommended next</small><strong>${primaryCategory ? `Based on ${escapeHtml(primaryCategory)}` : 'Start with durable foundations'}</strong></span><button class="table-action" type="button" data-open-skill-plan>Browse all plans</button></div><div>${packs.map((pack) => `<button type="button" data-open-skill-plan="${escapeHtml(pack.key)}"><strong>${escapeHtml(pack.title)}</strong><small>${skillPackItems(pack).length} skills · ${escapeHtml(pack.scope)}</small></button>`).join('')}</div>`;
}

export function skillPackMatches(query: string, group: string, primaryCategory: string | null | undefined) {
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
    return `<label data-existing="${exists ? 'true' : 'false'}"><input type="checkbox" name="skill_keys" value="${escapeHtml(item.key)}" ${exists ? 'disabled' : 'checked'} /><span><strong>${escapeHtml(item.title)}</strong><small>${exists ? 'Already in the roadmap' : `${escapeHtml(item.category)} · ${escapeHtml(item.priority)}`}</small></span></label>`;
  }).join('')}</div>`;
}

export function getSkillPack(key: string) {
  return skillPacks.find((pack) => pack.key === key) ?? null;
}

