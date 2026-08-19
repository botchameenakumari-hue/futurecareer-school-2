import fs from 'node:fs';

const path = 'src/components/workspace/HierarchyWorkspace.astro';
let source = fs.readFileSync(path, 'utf8');

function replaceBetween(start, end, replacement) {
  const startIndex = source.indexOf(start);
  const endIndex = source.indexOf(end, startIndex);
  if (startIndex < 0 || endIndex < 0) throw new Error(`Could not find component anchors: ${start} / ${end}`);
  source = source.slice(0, startIndex) + replacement + source.slice(endIndex);
}

source = source.replace('  ListChecks,\n', '  ListChecks,\n  ListPlus,\n  Lightbulb,\n');

source = source.replace(
  '        <label>Coaching goal<textarea name="goal_summary" rows="2" maxlength="2000" placeholder="The outcome this coaching plan is working toward"></textarea></label>\n        <label>Current progress summary<textarea name="progress_note" rows="2" maxlength="2000" placeholder="What has moved, what is blocked, and what matters next"></textarea></label>',
  `        <div class="guided-inline-presets">
          <label>Goal starter<select id="case-goal-preset"><option value="">Choose a coaching outcome</option></select></label>
          <label>Progress starter<select id="progress-update-preset"><option value="">Choose a factual update</option></select></label>
        </div>
        <label>Coaching goal<textarea name="goal_summary" rows="2" maxlength="2000" placeholder="The concrete decision, capability, or transition this plan must deliver"></textarea></label>
        <label>Current progress summary<textarea name="progress_note" rows="3" maxlength="2000" placeholder="Progress, evidence, blocker, and next commitment"></textarea></label>`,
);

replaceBetween(
  '  <div class="record-pane" data-record-pane="skills" hidden>',
  '  <div class="record-pane" data-record-pane="sessions" hidden>',
  `  <div class="record-pane" data-record-pane="skills" hidden>
    <div class="pane-heading"><div><p class="eyebrow">Capability roadmap</p><h3>Skills, practice, and proof</h3><p>Build the foundations every career needs, then add the specialist and future-ready skills required by the primary direction.</p></div><div class="pane-actions"><button class="secondary-button" type="button" data-open-skill-dialog><Plus size={16} /> Add one skill</button><button class="primary-button" type="button" data-open-skill-plan><ListPlus size={16} /> Add skill plan</button></div></div>
    <div id="record-skill-summary" class="skill-roadmap-summary"></div>
    <div id="record-skill-recommendations" class="skill-recommendation-band"></div>
    <div id="record-skill-list" class="skill-matrix"></div>
  </div>

`,
);

replaceBetween(
  '  <div class="plan-pane" data-plan-pane="skills" hidden>',
  '  <div class="plan-pane" data-plan-pane="actions" hidden>',
  `  <div class="plan-pane" data-plan-pane="skills" hidden>
    <div class="pane-heading"><div><p class="eyebrow">Capability roadmap</p><h3>Skills, practice, and proof</h3><p>See what matters for the primary direction and what proof is still missing.</p></div><div class="pane-actions"><button class="secondary-button" type="button" data-open-skill-dialog><Plus size={16} /> Add one skill</button><button class="primary-button" type="button" data-open-skill-plan><ListPlus size={16} /> Add skill plan</button></div></div>
    <div id="student-skill-summary" class="skill-roadmap-summary"></div>
    <div id="student-skill-recommendations" class="skill-recommendation-band"></div>
    <div id="student-skill-list" class="skill-matrix"></div>
  </div>
`,
);

replaceBetween(
  '      <section id="career-preset-picker"',
  '      <div id="career-option-status" class="form-status"></div>',
  `      <section id="career-preset-picker" class="career-library" aria-labelledby="career-preset-heading">
        <div class="preset-picker-heading"><div><p class="eyebrow">Decision-ready library</p><h3 id="career-preset-heading">Explore the work before choosing it</h3></div><span id="career-preset-count" class="scope-note"></span></div>
        <div class="preset-toolbar"><label class="search-field"><Search size={16} /><span class="sr-only">Search careers</span><input id="career-preset-search" type="search" placeholder="Search a role, sector, skill, or future trend" /></label><label><span class="sr-only">Career family</span><select id="career-preset-category"><option value="featured">Recommended starting points</option><option value="future">Future-ready choices</option><option value="all">All career families</option></select></label></div>
        <div class="career-library-layout"><div id="career-preset-results" class="career-library-results"></div><aside id="career-guide-preview" class="career-guide-preview"><div class="career-guide-empty"><Lightbulb size={20} /><strong>Choose a career to see the real work</strong><span>Daily tasks, entry routes, future change, skill requirements, watch-outs, and practical tests appear here.</span></div></aside></div>
      </section>
      <div class="career-manual-divider"><span>Decision setup</span></div>
      <div class="decision-role-grid">
        <fieldset class="segmented-field"><legend>Role in the plan</legend><div class="segmented-control"><label><input type="radio" name="option_type" value="primary" /><span><strong>Primary</strong><small>Main direction, 50-90% effort</small></span></label><label><input type="radio" name="option_type" value="alternative" checked /><span><strong>Alternative</strong><small>Deliberate backup or test</small></span></label></div></fieldset>
        <label class="focus-control">Time and energy focus<div><input id="career-focus-range" name="focus_percentage" type="range" min="0" max="50" value="15" /><output id="career-focus-output">15%</output></div><small id="career-focus-guidance">Alternatives share the time left after the primary direction.</small></label>
      </div>
      <input name="status" type="hidden" value="exploring" />
      <div class="form-grid three"><label>Career, course, or route<input name="title" maxlength="120" required /></label><label>Career family<input name="career_category" maxlength="80" value="Other" required /></label><label>Decision or review date<input name="decision_deadline" type="date" /></label></div>
      <div class="form-grid three"><label>Decision now<select name="decision_signal"><option value="ready-to-pursue">Ready to pursue</option><option value="promising-to-test">Promising, test next</option><option value="deliberate-alternative">Keep as an alternative</option><option value="needs-evidence" selected>Needs more evidence</option><option value="not-now">Not right now</option></select></label><label>Evidence so far<select name="evidence_strength"><option value="none">No real evidence yet</option><option value="early">Early signal</option><option value="moderate">Several useful tests</option><option value="strong">Strong real-world proof</option></select></label><label>Future outlook<select name="future_outlook"><option value="growing">Growing</option><option value="evolving" selected>Evolving</option><option value="stable">Stable</option><option value="niche">Niche</option><option value="uncertain">Uncertain</option></select></label></div>
      <details class="career-detail-fields" open><summary>Career reality and coaching evidence</summary><div class="career-detail-fields-body">
        <label>Education or entry routes<textarea name="route_summary" rows="2" maxlength="3000"></textarea></label>
        <label>Requirements and proof employers or courses expect<textarea name="entry_requirements" rows="2" maxlength="3000"></textarea></label>
        <label>Typical work environment<input name="work_environment" maxlength="1200" /></label>
        <div class="form-grid two"><label>Evidence this may suit the student<textarea name="reasons" rows="3" maxlength="2000" placeholder="One observed reason per line"></textarea></label><label>Trade-offs or watch-outs<textarea name="tradeoffs" rows="3" maxlength="2000" placeholder="One real trade-off per line"></textarea></label></div>
        <label>Question that still needs an answer<input name="review_question" maxlength="300" placeholder="What evidence would change or strengthen this decision?" /></label>
        <label>Next real-world test<input name="next_step" maxlength="180" placeholder="A work sample, practitioner conversation, observation, or course task" /></label>
      </div></details>
      <div id="career-option-status" class="form-status"></div>`,
);

source = source.replace('<button class="primary-button" type="submit"><Check size={16} /> Save option</button>', '<button class="primary-button" type="submit"><Check size={16} /> Save decision</button>');

replaceBetween(
  '<dialog id="skill-dialog"',
  '<dialog id="evidence-dialog"',
  `<dialog id="skill-plan-dialog" class="workspace-dialog guided-dialog">
  <form id="skill-plan-form" method="dialog" class="dialog-form">
    <header><div><p class="eyebrow">Capability roadmap</p><h2>Add a complete skill plan</h2></div><button class="icon-button" type="button" data-close-dialog="skill-plan-dialog" aria-label="Close" title="Close"><X size={18} /></button></header>
    <div class="dialog-body">
      <div id="skill-plan-context" class="decision-context-strip"></div>
      <div class="preset-toolbar"><label class="search-field"><Search size={16} /><span class="sr-only">Search skill plans</span><input id="skill-pack-search" type="search" placeholder="Search skill plans or career families" /></label><label><span class="sr-only">Skill plan group</span><select id="skill-pack-group"><option value="recommended">Recommended for this student</option><option value="all">All skill plans</option><option value="Start strong">Start strong</option><option value="Work with technology">Work with technology</option><option value="Career families">Career families</option><option value="Move into work">Move into work</option></select></label></div>
      <div class="skill-plan-layout"><div id="skill-pack-results" class="skill-pack-results"></div><aside id="skill-pack-preview" class="skill-pack-preview"><div class="career-guide-empty"><ListPlus size={20} /><strong>Choose a skill plan</strong><span>You can review every skill and untick anything that is already covered.</span></div></aside></div>
      <div id="skill-plan-status" class="form-status"></div>
    </div>
    <footer><button class="secondary-button" type="button" data-close-dialog="skill-plan-dialog">Cancel</button><button id="add-skill-pack" class="primary-button" type="submit" disabled><ListPlus size={16} /> Add selected skills</button></footer>
  </form>
</dialog>

<dialog id="skill-dialog" class="workspace-dialog guided-dialog">
  <form id="skill-form" method="dialog" class="dialog-form">
    <header><div><p class="eyebrow">Capability roadmap</p><h2 id="skill-dialog-title">Add one skill</h2></div><button class="icon-button" type="button" data-close-dialog="skill-dialog" aria-label="Close" title="Close"><X size={18} /></button></header>
    <div class="dialog-body">
      <input name="id" type="hidden" /><input name="preset_key" type="hidden" />
      <section id="skill-preset-picker" class="preset-picker" aria-labelledby="skill-preset-heading"><div class="preset-picker-heading"><div><p class="eyebrow">Single-skill library</p><h3 id="skill-preset-heading">Choose a starting skill</h3></div><span id="skill-preset-count" class="scope-note"></span></div><div class="preset-toolbar"><label class="search-field"><Search size={16} /><span class="sr-only">Search skills</span><input id="skill-preset-search" type="search" placeholder="Search skills" /></label><label><span class="sr-only">Skill category</span><select id="skill-preset-category"><option value="featured">Recommended foundations</option><option value="all">All categories</option></select></label></div><div id="skill-preset-results" class="preset-results"></div></section>
      <div class="form-grid two"><label>Skill<input name="skill_name" maxlength="120" required /></label><label>Category<select name="category"><option value="technical">Technical</option><option value="digital">Digital</option><option value="communication">Communication</option><option value="analytical">Analytical</option><option value="creative">Creative</option><option value="leadership">Leadership</option><option value="domain">Domain</option><option value="language">Language</option><option value="employability">Employability</option></select></label></div>
      <div class="form-grid two"><label>Purpose in the roadmap<select name="skill_scope"><option value="foundation">Career foundation</option><option value="career-specific">Primary-career specific</option><option value="future-ready">Future-ready</option><option value="employability">Employability</option><option value="personal-effectiveness">Personal effectiveness</option></select></label><label>Linked career<select id="skill-linked-career" name="linked_career_path_id"><option value="">Applies across careers</option></select></label></div>
      <div class="form-grid four"><label>Current ability<select name="current_level"><option value="0">Not started</option><option value="1">Aware or beginner</option><option value="2">Can do with support</option><option value="3">Can do independently</option><option value="4">Can adapt or teach</option></select></label><label>Required ability<select name="target_level"><option value="1">Aware or beginner</option><option value="2" selected>Can do with support</option><option value="3">Can do independently</option><option value="4">Can adapt or teach</option></select></label><label>Importance<select name="priority"><option value="core">Essential</option><option value="important" selected>Important</option><option value="useful">Useful later</option></select></label><label>Progress<select name="status"><option value="identified">Not started</option><option value="developing">In practice</option><option value="demonstrated">Demonstrated with proof</option></select></label></div>
      <label>Development outcome<textarea name="development_goal" rows="2" maxlength="1200" placeholder="What useful capability should improve?"></textarea></label>
      <div class="form-grid two"><label>Practice method<textarea name="practice_method" rows="2" maxlength="1200" placeholder="What will the student repeatedly do?"></textarea></label><label>Proof of competence<textarea name="success_criteria" rows="2" maxlength="1200" placeholder="What evidence will show this skill is ready?"></textarea></label></div>
      <label>Review date<input name="review_date" type="date" /></label><div id="skill-status" class="form-status"></div>
    </div>
    <footer><button class="secondary-button" type="button" data-close-dialog="skill-dialog">Cancel</button><button class="primary-button" type="submit"><Check size={16} /> Save skill</button></footer>
  </form>
</dialog>

`,
);

source = source.replace(
  '<div class="dialog-body"><input name="skill_id" type="hidden" /><p id="evidence-skill-name" class="dialog-context"></p><div class="form-grid two">',
  '<div class="dialog-body"><input name="skill_id" type="hidden" /><p id="evidence-skill-name" class="dialog-context"></p><label>Evidence starter<select id="evidence-preset"><option value="">Choose a useful evidence format</option></select></label><div class="form-grid two">',
);

source = source.replace(
  '<div class="form-grid two"><label>Class or year<input name="class_or_year" maxlength="80" /></label><label>Stream<input name="stream" maxlength="80" /></label></div>',
  '<div class="form-grid two"><label>Class or year<input name="class_or_year" maxlength="80" /></label><div class="preset-input-stack"><label>Stream or current stage<input name="stream" maxlength="80" /></label><label>Choose a common stage<select id="academic-stream-preset"><option value="">Choose and use</option></select></label></div></div>',
);

source = source.replace(
  '<form id="coach-note-form" class="note-composer"><label><span class="sr-only">Note type</span>',
  '<form id="coach-note-form" class="note-composer"><label><span class="sr-only">Note starter</span><select id="note-template-preset"><option value="">Choose a factual note starter</option></select></label><label><span class="sr-only">Note type</span>',
);

source = source.replaceAll('<option value="">Start from a preset</option>', '<option value="">Choose a proven next action</option>');

fs.writeFileSync(path, source, 'utf8');
