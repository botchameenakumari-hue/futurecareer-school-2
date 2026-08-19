import { spawn } from 'node:child_process';
import { createServer } from 'node:http';
import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const root = process.cwd();
const profileDir = path.join(root, '.chrome-compass-qa');
const outputDir = path.join(root, 'test-results');
const port = 9333;
const baseUrl = 'http://127.0.0.1:4321/career-skills-compass';
const expandedRoleIds = [
  'nursing-allied-health', 'community-care-worker', 'social-worker-case-coordinator', 'early-childhood-educator',
  'hospitality-guest-operations', 'culinary-food-operations', 'retail-merchandising-operations',
  'building-systems-technician', 'construction-site-coordinator', 'precision-agriculture-technician',
  'warehouse-logistics-supervisor', 'fleet-service-technician', 'emergency-response-professional',
  'repair-craft-business',
];
const expandedRoleClusters = [
  'Health, science & care', 'People, education & development', 'Service, hospitality & local business',
  'Green, infrastructure & skilled work', 'Food, land & environmental systems',
  'Transport, logistics & essential operations', 'Community & public service',
];

await mkdir(outputDir, { recursive: true });
await rm(profileDir, { recursive: true, force: true });

const staticDir = path.join(root, '.compass-check-dist');
const staticServer = createServer(async (request, response) => {
  const requestedPath = new URL(request.url || '/', 'http://127.0.0.1').pathname;
  const relativePath = requestedPath.endsWith('/') || !path.extname(requestedPath) ? `${requestedPath.replace(/\/$/, '')}/index.html` : requestedPath;
  const filePath = path.resolve(staticDir, `.${relativePath}`);
  if (!filePath.startsWith(staticDir)) { response.writeHead(403).end(); return; }
  try {
    const mime = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp' }[path.extname(filePath)] || 'application/octet-stream';
    response.writeHead(200, { 'content-type': mime }).end(await readFile(filePath));
  } catch { response.writeHead(404).end(); }
});
await new Promise((resolve) => staticServer.listen(4321, '127.0.0.1', resolve));

const chrome = spawn(chromePath, [
  '--headless', '--disable-gpu', '--no-sandbox', '--no-first-run', '--no-default-browser-check',
  `--user-data-dir=${profileDir}`, `--remote-debugging-port=${port}`, 'about:blank',
], { stdio: 'ignore' });

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
let socket;
let nextId = 0;
const pending = new Map();
const browserErrors = [];

async function discover() {
  for (let attempt = 0; attempt < 40; attempt += 1) {
    try {
      const pages = await fetch(`http://127.0.0.1:${port}/json/list`).then((response) => response.json());
      const page = pages.find((item) => item.type === 'page');
      if (page?.webSocketDebuggerUrl) return page.webSocketDebuggerUrl;
    } catch {}
    await sleep(150);
  }
  throw new Error('Chrome debugging connection did not become ready.');
}

function command(method, params = {}) {
  const id = ++nextId;
  socket.send(JSON.stringify({ id, method, params }));
  return new Promise((resolve, reject) => pending.set(id, { resolve, reject }));
}

async function evaluate(expression) {
  const result = await command('Runtime.evaluate', { expression, awaitPromise: true, returnByValue: true });
  if (result.exceptionDetails) throw new Error(result.exceptionDetails.text || 'Browser evaluation failed.');
  return result.result.value;
}

async function click(selector) {
  const clicked = await evaluate(`(() => { const node = document.querySelector(${JSON.stringify(selector)}); if (!node) return false; node.click(); return true; })()`);
  if (!clicked) throw new Error(`Missing clickable element: ${selector}`);
  await sleep(90);
}

async function captureElement(selector, filename) {
  const box = await evaluate(`(() => { const node = document.querySelector(${JSON.stringify(selector)}); if (!node) return null; node.scrollIntoView({ block: 'start' }); const rect = node.getBoundingClientRect(); return { x: Math.max(0, rect.left + scrollX), y: Math.max(0, rect.top + scrollY), width: Math.min(rect.width, document.documentElement.scrollWidth), height: Math.min(rect.height, 1800) }; })()`);
  if (!box) throw new Error(`Missing screenshot target: ${selector}`);
  await sleep(180);
  const shot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: true, clip: { ...box, scale: 1 } });
  await writeFile(path.join(outputDir, filename), Buffer.from(shot.data, 'base64'));
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

try {
  socket = new WebSocket(await discover());
  await new Promise((resolve, reject) => { socket.addEventListener('open', resolve, { once: true }); socket.addEventListener('error', reject, { once: true }); });
  socket.addEventListener('message', (event) => {
    const message = JSON.parse(event.data);
    if (message.id && pending.has(message.id)) {
      const task = pending.get(message.id); pending.delete(message.id);
      message.error ? task.reject(new Error(message.error.message)) : task.resolve(message.result);
    }
    if (message.method === 'Runtime.exceptionThrown') browserErrors.push(message.params.exceptionDetails?.text || 'Uncaught browser error');
  });

  await command('Page.enable');
  await command('Runtime.enable');
  await command('Emulation.setDeviceMetricsOverride', { width: 1440, height: 1000, deviceScaleFactor: 1, mobile: false });
  await command('Page.navigate', { url: baseUrl });
  for (let attempt = 0; attempt < 120; attempt += 1) {
    if (await evaluate(`document.readyState === 'complete' && location.pathname.includes('career-skills-compass') && document.querySelectorAll('#browse-grid .career-card').length >= 30`)) break;
    await sleep(100);
  }

  const initial = await evaluate(`({ href: location.href, title: document.title, h1: document.querySelector('h1')?.innerText, routeCards:document.querySelectorAll('[data-route-intent]').length, validRouteTargets:[...document.querySelectorAll('[data-route-intent]')].every((link)=>document.querySelector(link.getAttribute('href'))), cards: document.querySelectorAll('#browse-grid .career-card').length, futureCards: document.querySelectorAll('.future-grid .future-card').length, transferableSkills: document.querySelectorAll('[data-skill-card]').length, visibleSkills: [...document.querySelectorAll('[data-skill-card]')].filter((node)=>!node.hidden).length, skillBridgeBuilder: document.querySelectorAll('.skill-bridge-builder').length, skillBridgeExplainers:document.querySelectorAll('.skill-bridge-explainer>div').length, skillBridgeButtons: document.querySelectorAll('[data-skill-bridge]').length, skillBridgePlainLanguage:/does not declare you qualified or decide what suits you/i.test(document.querySelector('.career-change-section')?.textContent||''), experienceThemes:document.querySelectorAll('[data-experience-theme]').length, careerChangeOptions:document.querySelectorAll('[data-change-skill-option]').length, foundationSprints: document.querySelectorAll('.foundation-list [data-skill-sprint]').length, stageAIPlans: document.querySelectorAll('.ai-stage-grid details').length, evidence: document.querySelectorAll('.evidence-grid a').length, evidenceImpacts: [...document.querySelectorAll('.evidence-grid small')].filter((node)=>/What we updated:/.test(node.textContent)).length, practitionerSignals: document.querySelectorAll('.practice-signal-grid a').length, practitionerApplications: [...document.querySelectorAll('.practice-signal-grid dt')].filter((node)=>node.textContent.includes('How it improved this guide')).length, aiPreviews: document.querySelectorAll('#browse-grid .ai-card-preview').length, oldButtons: [...document.querySelectorAll('main button,main a')].filter((node) => /Get Guidance|I can evidence this/i.test(node.textContent)).length })`);
  assert(/Career & Skills Compass/.test(initial.title), `Unexpected page title at ${initial.href}: ${initial.title}`);
  assert(initial.cards >= 60, 'The expanded career library did not render across knowledge, care, service, trade and frontline work.');
  assert(initial.transferableSkills >= 140 && initial.visibleSkills === 9 && initial.skillBridgeBuilder === 1 && initial.skillBridgeExplainers===3 && initial.skillBridgePlainLanguage && initial.experienceThemes===6 && initial.skillBridgeButtons === initial.transferableSkills && initial.careerChangeOptions===initial.transferableSkills && initial.foundationSprints === 8, 'Direct transferable/foundation skill discovery or the explained existing-skills tool did not render at the required breadth.');
  assert(initial.futureCards >= 10 && initial.stageAIPlans === 9 && initial.evidence >= 17 && initial.evidenceImpacts === initial.evidence && initial.practitionerSignals === 14 && initial.practitionerApplications === 14 && initial.aiPreviews === initial.cards, 'Future roles, stage-specific AI plans, traceable current evidence, practitioner/video applications or role-level AI maps are missing.');
  assert(initial.oldButtons === 0, 'An old Get Guidance action is still present inside the compass experience.');
  assert(initial.routeCards===4 && initial.validRouteTargets, 'The intent-based starting routes are incomplete or point to missing tools.');
  const chronology=await evaluate(`(() => { const ids=['choose-route','match','explore','career-change','build-skills','transferable-skills','stages','future-radar','method']; const positions=ids.map((id)=>document.getElementById(id)?.offsetTop??-1); return {ids,positions,inOrder:positions.every((value,index)=>index===0||value>positions[index-1])}; })()`);
  assert(chronology.inOrder, `The page does not follow the intended user journey: ${JSON.stringify(chronology)}`);
  const desktopReadability=await evaluate(`(() => { const visible=(node)=>node.offsetParent!==null; const body=[...document.querySelectorAll('.route-card-grid p,.career-card>p,.task-preview li,.ai-card-preview p,.stage-playbook p,.stage-playbook li,.transferable-skill-card>p,.skill-bridge-builder>header>p,.skill-bridge-explainer p,.section-heading>p:last-child')].filter(visible); const controls=[...document.querySelectorAll('.route-card-grid b,.career-card button,.skill-card-actions button,.jump-nav a')].filter(visible); const size=(node)=>Number.parseFloat(getComputedStyle(node).fontSize); return {bodyMinimum:Math.min(...body.map(size)),controlMinimum:Math.min(...controls.map(size)),bodyChecked:body.length,controlsChecked:controls.length}; })()`);
  assert(desktopReadability.bodyMinimum>=15 && desktopReadability.controlMinimum>=12, `Desktop text is below the readability floor: ${JSON.stringify(desktopReadability)}`);
  const breadth = await evaluate(`(() => { const expected=${JSON.stringify(expandedRoleIds)}; const expectedClusters=${JSON.stringify(expandedRoleClusters)}; const present=expected.filter((id)=>document.querySelector('#browse-grid [data-open="'+id+'"]')); const availableClusters=new Set([...document.querySelectorAll('.browse-filter[data-filter="cluster"]')].map((node)=>node.value)); const clusters=expectedClusters.filter((cluster)=>availableClusters.has(cluster)); return { present, clusters }; })()`);
  assert(breadth.present.length === expandedRoleIds.length && breadth.clusters.length === expandedRoleClusters.length, `Expanded real-world role breadth is incomplete: ${JSON.stringify(breadth)}`);
  const accessibility = await evaluate(`(() => { const ids=[...document.querySelectorAll('[id]')].map((node)=>node.id); const duplicateIds=[...new Set(ids.filter((id,index)=>ids.indexOf(id)!==index))]; const controls=[...document.querySelectorAll('main button,main input,main select,main textarea,dialog button,dialog select,dialog textarea')]; const unnamed=controls.filter((node)=>!(node.getAttribute('aria-label')||node.textContent.trim()||node.closest('label')?.textContent.trim())).length; return { duplicateIds, unnamed }; })()`);
  assert(accessibility.duplicateIds.length===0 && accessibility.unnamed===0, `Initial accessibility audit failed: ${JSON.stringify(accessibility)}`);
  const boundedViews=await evaluate(`(() => { const visible=(selector)=>[...document.querySelectorAll(selector)].filter((node)=>!node.hidden).length; return { browse:visible('#browse-grid .career-card'), change:visible('[data-change-skill-option]'), skills:visible('[data-skill-card]'), future:visible('[data-future-card]'), evidence:visible('[data-evidence-card]'), practice:visible('[data-practice-card]'), stages:visible('[data-stage-guidance]'), pagers:['#browse-pagination','#career-change-pagination','#skill-pagination','#future-pagination','#evidence-pagination','#practice-pagination'].map((selector)=>document.querySelector(selector)?.querySelectorAll('button').length||0) }; })()`);
  assert([boundedViews.browse,boundedViews.skills,boundedViews.future,boundedViews.evidence,boundedViews.practice,boundedViews.stages].every((count)=>count>0&&count<=9) && boundedViews.change===0 && boundedViews.pagers.filter((_,index)=>index!==1).every((count)=>count>=3), `Long card collections are not bounded with usable pagination: ${JSON.stringify(boundedViews)}`);
  const browseFirstPage=await evaluate(`document.querySelector('#browse-grid .career-card:not([hidden])')?.dataset.roleId`);
  const paginationPosition=await evaluate(`(() => { const pager=document.querySelector('#browse-pagination'); window.scrollTo({top:Math.max(0,pager.getBoundingClientRect().top+scrollY-innerHeight/2),behavior:'instant'}); return { scrollY, pagerTop:pager.getBoundingClientRect().top }; })()`);
  await click('#browse-pagination [data-page="2"]');
  const browseSecondPage=await evaluate(`({ role:document.querySelector('#browse-grid .career-card:not([hidden])')?.dataset.roleId, activeInPager:Boolean(document.activeElement?.closest('#browse-pagination')), scrollY })`);
  assert(browseSecondPage.role && browseSecondPage.role!==browseFirstPage && browseSecondPage.activeInPager && Math.abs(browseSecondPage.scrollY-paginationPosition.scrollY)<80, `Career explorer pagination did not replace content in place: ${JSON.stringify({paginationPosition,browseSecondPage})}`);
  await click('[data-route-intent="vacancy"]');
  await sleep(60);
  const vacancyRoute=await evaluate(`({ focused:document.activeElement?.id, status:document.querySelector('[data-route-status]').textContent, selected:document.querySelector('[data-route-intent="vacancy"]').getAttribute('aria-current'), placeholder:document.querySelector('#career-search').placeholder })`);
  assert(vacancyRoute.focused==='career-search' && vacancyRoute.selected==='true' && /open its complete map/.test(vacancyRoute.status) && /vacancy/.test(vacancyRoute.placeholder), `Vacancy intent route did not land on a usable next action: ${JSON.stringify(vacancyRoute)}`);
  await click('[data-route-intent="transition"]');
  await sleep(60);
  const transitionRoute=await evaluate(`({ focused:document.activeElement?.id, status:document.querySelector('[data-route-status]').textContent, selected:document.querySelector('[data-route-intent="transition"]').getAttribute('aria-current'), placeholder:document.querySelector('#career-change-search').placeholder })`);
  assert(transitionRoute.focused==='experience-theme-organise' && transitionRoute.selected==='true' && /choose up to three kinds of work/.test(transitionRoute.status) && /already use/.test(transitionRoute.placeholder), `Career-transition intent route did not land on its practical experience-based tool: ${JSON.stringify(transitionRoute)}`);
  await captureElement('#choose-route', 'career-skills-compass-starting-routes.png');
  await captureElement('#future-radar', 'career-skills-compass-future-radar.png');
  await click('.ai-stage-grid details:first-child summary');
  await captureElement('.ai-stage-panel', 'career-skills-compass-ai-stage-plans.png');
  await captureElement('#latest-evidence', 'career-skills-compass-latest-evidence.png');
  await captureElement('.practice-window', 'career-skills-compass-practitioner-video-scan.png');
  await captureElement('#explore .browse-main', 'career-skills-compass-ai-career-cards.png');
  await captureElement('#build-skills', 'career-skills-compass-skill-pathways.png');
  await captureElement('#match', 'career-skills-compass-matcher-current.png');

  await evaluate(`(() => { const input=document.querySelector('#skill-search'); input.value='decision'; input.dispatchEvent(new Event('input',{bubbles:true})); })()`);
  const skillSearch = await evaluate(`({ visible:[...document.querySelectorAll('[data-skill-card]')].filter((node)=>!node.hidden).length, accurate:[...document.querySelectorAll('[data-skill-card]')].filter((node)=>!node.hidden).every((node)=>node.dataset.skillName.includes('decision')) })`);
  assert(skillSearch.visible >= 1 && skillSearch.accurate, 'Transferable skill search did not narrow by capability name.');
  await evaluate(`(() => { const input=document.querySelector('#skill-search'); input.value=''; input.dispatchEvent(new Event('input',{bubbles:true})); })()`);
  await click('[data-skill-interest="analyse"]');
  assert(await evaluate(`[...document.querySelectorAll('[data-skill-card]')].filter((node)=>!node.hidden).every((node)=>node.dataset.skillInterests.split(' ').includes('analyse'))`), 'Activity preference did not filter transferable skills.');
  await click('[data-skill-interest="all"]');
  await evaluate(`document.querySelector('.precision-skill-search').open=true`);
  await evaluate(`(() => { const input=document.querySelector('#career-change-search'); input.value='planning'; input.dispatchEvent(new Event('input',{bubbles:true})); })()`);
  assert(await evaluate(`[...document.querySelectorAll('[data-change-skill-option]')].filter((node)=>!node.hidden).every((node)=>node.dataset.skillName.includes('planning'))`), 'Career-change skill search did not narrow by an existing skill.');
  await evaluate(`(() => { const input=document.querySelector('#career-change-search'); input.value=''; input.dispatchEvent(new Event('input',{bubbles:true})); })()`);
  await click('[data-experience-theme="organise"]');
  const skillBridge = await evaluate(`({ themes:document.querySelectorAll('[data-experience-theme][aria-pressed="true"]').length, selected:document.querySelectorAll('[data-skill-bridge][aria-pressed="true"]').length, resultCards:document.querySelectorAll('#skill-bridge-results .skill-bridge-result-grid article').length, status:document.querySelector('#skill-bridge-status').textContent, cautions:document.querySelectorAll('#skill-bridge-results .skill-bridge-caution').length, openers:document.querySelectorAll('#skill-bridge-results [data-open]').length })`);
  assert(skillBridge.themes===1 && skillBridge.selected===0 && skillBridge.resultCards>=1 && skillBridge.resultCards<=6 && /experience theme/.test(skillBridge.status) && skillBridge.cautions===1 && skillBridge.openers===skillBridge.resultCards, `Existing-experience career connection did not produce bounded, explained career overlaps: ${JSON.stringify(skillBridge)}`);
  await captureElement('.skill-bridge-builder', 'career-skills-compass-reverse-skill-bridge.png');
  await evaluate(`(() => { const input=document.querySelector('#career-change-search'); input.value='planning'; input.dispatchEvent(new Event('input',{bubbles:true})); })()`);
  await click('[data-change-skill-option]:not([hidden])');
  await evaluate(`(() => { const input=document.querySelector('#career-change-search'); input.value=''; input.dispatchEvent(new Event('input',{bubbles:true})); })()`);
  assert(await evaluate(`document.querySelectorAll('[data-skill-bridge][aria-pressed="true"]').length===1`), 'Optional exact-skill search did not add a selected transferable skill.');
  await click('[data-skill-card]:not([hidden]) [data-skill-sprint]');
  const skillSprint = await evaluate(`({ open:document.querySelector('#skill-sprint-dialog').open, focusInside:Boolean(document.activeElement.closest('#skill-sprint-dialog')), phases:document.querySelectorAll('#skill-sprint-dialog .skill-sprint-phases article').length, stages:document.querySelectorAll('#skill-sprint-dialog [data-skill-stage] option').length, timeChoices:document.querySelectorAll('#skill-sprint-dialog [data-skill-minutes]').length, levels:document.querySelectorAll('#skill-sprint-dialog [data-skill-level]').length, progressionChecks:document.querySelectorAll('#skill-sprint-dialog [data-skill-progress]').length, connected:document.querySelectorAll('#skill-sprint-dialog [data-skill-role]').length })`);
  assert(skillSprint.open && skillSprint.focusInside && skillSprint.phases===5 && skillSprint.stages===9 && skillSprint.timeChoices===3 && skillSprint.levels===4 && skillSprint.progressionChecks===4 && skillSprint.connected>=1, 'Transferable 14-day skill sprint is incomplete or lacks evidence levels, progression checks or connected careers.');
  await click('#skill-sprint-dialog [data-skill-minutes="60"]');
  assert(await evaluate(`document.querySelector('#skill-sprint-dialog [data-skill-minutes="60"]').getAttribute('aria-pressed')==='true'`), 'Skill sprint daily-time personalisation did not update.');
  await click('#skill-sprint-dialog [data-skill-level="adaptive"]');
  const adaptiveSkill = await evaluate(`({ selected:document.querySelector('#skill-sprint-dialog [data-skill-level="adaptive"]').getAttribute('aria-pressed'), target:document.querySelector('#skill-sprint-dialog .skill-target-bar').textContent, phaseText:document.querySelector('#skill-sprint-dialog .skill-sprint-phases').textContent })`);
  assert(adaptiveSkill.selected==='true' && /Stress-test/.test(adaptiveSkill.target) && /Compare methods/.test(adaptiveSkill.phaseText), 'Adaptive skill level did not raise task difficulty and change the practice plan.');
  await evaluate(`(() => { document.querySelectorAll('#skill-sprint-dialog [data-skill-progress]').forEach((input)=>{input.checked=true;input.dispatchEvent(new Event('change',{bubbles:true}));}); })()`);
  assert(await evaluate(`document.querySelector('#skill-sprint-dialog [data-skill-progress-count]').textContent.includes('4 / 4 evidenced') && document.querySelector('#skill-sprint-dialog [data-skill-progress-guidance]').textContent.includes('deeper domain specialisation')`), 'Skill progression gate did not produce an evidence-based next-level decision.');
  const skillSprintShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-skill-sprint.png'), Buffer.from(skillSprintShot.data, 'base64'));
  await click('[data-close-skill-sprint]');
  await click('.foundation-list [data-skill-sprint]');
  assert(await evaluate(`document.querySelector('#skill-sprint-dialog').open && document.querySelectorAll('#skill-sprint-dialog .skill-sprint-phases article').length===5 && /supports every mapped career/.test(document.querySelector('#skill-sprint-dialog').textContent)`), 'Foundation skill sprint did not render its universal transfer guidance.');
  await click('[data-close-skill-sprint]');
  const completeSkillAudit = await evaluate(`(() => { const failures=[]; const buttons=[...document.querySelectorAll('[data-skill-sprint]')]; for(const button of buttons){ button.click(); const text=document.querySelector('#skill-sprint-dialog').textContent; if(document.querySelectorAll('#skill-sprint-dialog .skill-sprint-phases article').length!==5 || document.querySelectorAll('#skill-sprint-dialog [data-skill-stage] option').length!==9 || document.querySelectorAll('#skill-sprint-dialog [data-skill-level]').length!==4 || document.querySelectorAll('#skill-sprint-dialog [data-skill-progress]').length!==4 || /undefined|null/.test(text)) failures.push(button.dataset.skillSprint); document.querySelector('#skill-sprint-dialog').close(); } return {checked:buttons.length,failures,unique:new Set(buttons.map((button)=>button.dataset.skillSprint)).size}; })()`);
  assert(completeSkillAudit.checked >= 150 && completeSkillAudit.unique >= 143 && completeSkillAudit.failures.length===0, `Complete skill sprint audit failed: ${completeSkillAudit.failures.join(', ')}`);

  await click('[data-group="stage"][data-value="mid"]');
  await click('#next-step');
  await click('[data-group="goal"][data-value="switch"]');
  await click('#next-step');
  await click('[data-group="interests"][data-value="analyse"]');
  await click('[data-group="interests"][data-value="influence"]');
  await click('#next-step');
  await click('[data-group="values"][data-value="income"]');
  await click('[data-group="values"][data-value="leadership"]');
  await click('#next-step');
  await click('[data-group="modes"][data-value="people"]');
  await click('[data-group="modes"][data-value="ambiguous"]');
  await click('[data-group="modes"][data-value="desk"]');
  await click('#next-step');
  await click('[data-group="access"][data-value="experience"]');
  await click('[data-group="pace"][data-value="months"]');
  await click('[data-group="constraints"][data-value="screen-heavy"]');
  await click('#show-matches');
  await sleep(250);

  const matches = await evaluate(`({ hidden: document.querySelector('#results').hidden, cards: [...document.querySelectorAll('#match-grid .career-card')].filter((node) => !node.hidden).length, scores: [...document.querySelectorAll('#match-grid .career-card:not([hidden]) [data-score]')].map((node) => Number(node.textContent)), first: document.querySelector('#match-grid .career-card:not([hidden]) h3')?.textContent })`);
  assert(!matches.hidden, 'Match results stayed hidden.');
  assert(matches.cards === 9, 'The strongest-match view should initially show nine roles.');
  assert(matches.scores.every((score, index, list) => index === 0 || list[index - 1] >= score), 'Match scores are not ranked descending.');
  const practicalSignals = await evaluate(`({ signalPairs: document.querySelectorAll('#match-grid .career-card:not([hidden]) .decision-signals').length, briefFields: [...document.querySelectorAll('#decision-brief [data-brief-question],#decision-brief [data-brief-use],#decision-brief [data-brief-avoid],#decision-brief [data-brief-action]')].filter((node) => node.textContent.trim()).length, constraintSummary:/Avoid: Mostly screen-based work/.test(document.querySelector('#profile-summary').textContent), constraintWarnings:[...document.querySelectorAll('#match-grid .career-card:not([hidden]) [data-gaps]')].filter((node)=>/deal-breaker/.test(node.textContent)).length, carrySignals:[...document.querySelectorAll('#match-grid .career-card:not([hidden]) [data-carry-signal]:not([hidden])')].length, carryPositive:[...document.querySelectorAll('#match-grid .career-card:not([hidden]) [data-carry-signal]:not([hidden])')].filter((node)=>!node.textContent.includes('0/1 exact overlap')).length, carryUnscored:[...document.querySelectorAll('#match-grid .career-card:not([hidden]) [data-carry-signal]:not([hidden])')].every((node)=>node.textContent.includes('not part of the match score')) })`);
  assert(practicalSignals.signalPairs === 9 && practicalSignals.briefFields === 4 && practicalSignals.constraintSummary && practicalSignals.constraintWarnings >= 1 && practicalSignals.carrySignals === 9 && practicalSignals.carryPositive >= 1 && practicalSignals.carryUnscored, `Work-fit/readiness signals, existing-skill bridge, deal-breaker conflicts or the stage decision brief are incomplete: ${JSON.stringify(practicalSignals)}`);
  const sensitivity = await evaluate(`(() => { const panel=document.querySelector('[data-shortlist-stress]'); return { visible:!panel.hidden, scenarios:Number.parseInt(panel.querySelector('[data-scenario-count]').textContent,10), cases:panel.querySelectorAll('.stress-cases article').length, stable:panel.querySelector('[data-stable-count]').textContent, largest:panel.querySelector('[data-largest-move]').textContent, boundaries:/career stage, goal, available route and time stay the same/i.test(panel.textContent) && /not a prediction or career verdict/i.test(panel.textContent) }; })()`);
  assert(sensitivity.visible && sensitivity.scenarios===7 && sensitivity.cases===3 && sensitivity.stable && sensitivity.largest && sensitivity.boundaries, `Shortlist sensitivity check is incomplete or opaque: ${JSON.stringify(sensitivity)}`);
  await click('[data-copy-sensitivity]');
  await sleep(80);
  assert(await evaluate(`!document.querySelector('[data-stress-status]').textContent.includes('Private by design')`), 'Robustness-check copy did not report success or a manual-copy fallback.');
  await captureElement('[data-shortlist-stress]', 'career-skills-compass-shortlist-robustness.png');
  await click('#copy-shortlist');
  await sleep(80);
  const shortlist = await evaluate(`({ button:Boolean(document.querySelector('#copy-shortlist')), status:document.querySelector('#shortlist-status').textContent.trim(), topThree:[...document.querySelectorAll('#match-grid .career-card:not([hidden]) h3')].slice(0,3).map((node)=>node.textContent) })`);
  assert(shortlist.button && shortlist.status && shortlist.topThree.length===3, 'The copyable top-three shortlist did not produce user feedback.');
  await captureElement('#results', 'career-skills-compass-results-current.png');
  await click('#compare-shortlist');
  const shortlistCompare = await evaluate(`({ open:document.querySelector('#compare-dialog').open, pinned:document.querySelector('#compare-count').textContent, columns:getComputedStyle(document.querySelector('#compare-dialog .compare-table')).getPropertyValue('--cols').trim(), careers:document.querySelectorAll('#compare-dialog .compare-row:first-child>div').length-1, journalCards:document.querySelectorAll('#compare-dialog [data-journal-role]').length })`);
  assert(shortlistCompare.open && shortlistCompare.pinned==='3' && shortlistCompare.columns==='3' && shortlistCompare.careers===3 && shortlistCompare.journalCards===3, `One-action top-three comparison did not open the complete decision view: ${JSON.stringify(shortlistCompare)}`);
  await evaluate(`document.querySelector('#compare-dialog .dialog-shell').scrollTop=0`);
  const shortlistCompareShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-top-three-comparison.png'), Buffer.from(shortlistCompareShot.data, 'base64'));
  await click('[data-close-compare]');
  await click('#clear-compare');

  await click('#match-grid [data-open="product-manager"]');
  const detail = await evaluate(`({ open: document.querySelector('#role-dialog').open, focusInside:Boolean(document.activeElement.closest('#role-dialog')), layers: document.querySelectorAll('#role-dialog .skill-layer').length, skills: document.querySelectorAll('#role-dialog .skill-card').length, priorityPhases: document.querySelectorAll('#role-dialog .priority-runway > section').length, prioritySkills: document.querySelectorAll('#role-dialog .priority-runway article').length, priorityUnique: new Set([...document.querySelectorAll('#role-dialog .priority-runway article h5')].map((node)=>node.textContent)).size, searchQueries: document.querySelectorAll('#role-dialog .search-queries li').length, localRealityChecks: document.querySelectorAll('#role-dialog .local-reality-brief li').length, readinessChecks: document.querySelectorAll('#role-dialog [data-readiness-item]').length, transitionDropdowns:document.querySelectorAll('#role-dialog [data-transition-source]').length, lifePatterns: document.querySelectorAll('#role-dialog .life-pattern-grid article').length, lifeQuestions: document.querySelectorAll('#role-dialog .life-question-grid li').length, interviewKits: document.querySelectorAll('#role-dialog [data-copy-interview]').length, proof: document.querySelectorAll('#role-dialog .proof-grid > div').length, plan: document.querySelectorAll('#role-dialog .plan-grid > div').length, aiTransition: document.querySelectorAll('#role-dialog .ai-transition-grid > div').length, styled: getComputedStyle(document.querySelector('#role-dialog .skill-card')).display })`);
  assert(detail.open && detail.focusInside && detail.layers === 4, 'The full four-layer skill map did not open with focus contained.');
  assert(detail.skills >= 20 && detail.priorityPhases === 3 && detail.prioritySkills === 6 && detail.priorityUnique === 6 && detail.searchQueries === 4 && detail.localRealityChecks === 6 && detail.readinessChecks === 6 && detail.transitionDropdowns === 0 && detail.lifePatterns === 4 && detail.lifeQuestions === 4 && detail.interviewKits === 1 && detail.proof >= 2 && detail.plan === 3 && detail.aiTransition === 3 && detail.styled === 'block', 'Career detail is missing life-fit, interview, six practical local checks, search, readiness, priority, AI, skill, proof, plan or styling depth.');
  const inventoryInitial = await evaluate(`({ panels:document.querySelectorAll('#role-dialog [data-skill-inventory]').length, selects:document.querySelectorAll('#role-dialog [data-skill-evidence]').length, layerSummaries:document.querySelectorAll('#role-dialog [data-inventory-layer]').length, assessed:document.querySelector('#role-dialog [data-inventory-assessed]').textContent, priorityItems:document.querySelectorAll('#role-dialog [data-inventory-priority] li').length, private:document.querySelector('#role-dialog [data-inventory-status]').textContent.includes('stays only in this open window') })`);
  assert(inventoryInitial.panels===1 && inventoryInitial.selects===detail.skills && inventoryInitial.layerSummaries===4 && inventoryInitial.assessed===`0 / ${detail.skills}` && inventoryInitial.priorityItems>=1 && inventoryInitial.private, `The complete skill map lacks a private evidence inventory: ${JSON.stringify(inventoryInitial)}`);
  const inventoryUpdated = await evaluate(`(() => { const selects=[...document.querySelectorAll('#role-dialog [data-skill-evidence]')]; ['ready','practising','learning'].forEach((value,index)=>{selects[index].value=value;selects[index].dispatchEvent(new Event('change',{bubbles:true}));}); return { assessed:document.querySelector('#role-dialog [data-inventory-assessed]').textContent, ready:document.querySelector('#role-dialog [data-inventory-ready]').textContent, gaps:document.querySelector('#role-dialog [data-inventory-gaps]').textContent, states:[...document.querySelectorAll('#role-dialog [data-inventory-skill]')].slice(0,3).map((card)=>card.dataset.evidenceState), priorities:document.querySelectorAll('#role-dialog [data-inventory-priority] li').length, sprintButtons:document.querySelectorAll('#role-dialog [data-inventory-priority] [data-skill-sprint]').length, guidance:document.querySelector('#role-dialog [data-inventory-guidance]').textContent }; })()`);
  assert(inventoryUpdated.assessed===`3 / ${detail.skills}` && inventoryUpdated.ready==='1' && inventoryUpdated.gaps==='2' && inventoryUpdated.states.join(',')==='ready,practising,learning' && inventoryUpdated.priorities===3 && inventoryUpdated.sprintButtons===3 && /Check 3 more priority skills/.test(inventoryUpdated.guidance), `Skill check did not reprioritise into actionable practice plans: ${JSON.stringify(inventoryUpdated)}`);
  await click('#role-dialog [data-inventory-filter]');
  assert(await evaluate(`document.querySelector('#role-dialog [data-inventory-filter]').getAttribute('aria-pressed')==='true' && document.querySelectorAll('#role-dialog [data-inventory-skill][hidden]').length===1`), 'The skill inventory could not hide already-evidenced capabilities.');
  await click('#role-dialog [data-copy-inventory]');
  await sleep(120);
  assert(await evaluate(`!document.querySelector('#role-dialog [data-inventory-status]').textContent.includes('stays only in this open window')`), 'Skill plan copy did not report success or a manual-copy fallback.');
  await click('#role-dialog [data-inventory-priority] [data-skill-sprint]');
  assert(await evaluate(`document.querySelector('#skill-sprint-dialog').open && /Build .+ through evidence/.test(document.querySelector('#skill-sprint-title').textContent) && document.querySelectorAll('#skill-sprint-dialog [data-skill-role]').length===1`), 'A prioritised role gap did not open its directly connected 14-day skill sprint.');
  await click('[data-close-skill-sprint]');
  await click('#role-dialog [data-inventory-filter]');
  await evaluate(`(() => { const shell=document.querySelector('#role-dialog .dialog-shell'); const inventory=document.querySelector('#role-dialog [data-skill-inventory]'); shell.scrollTop=inventory.offsetTop-8; })()`);
  await sleep(120);
  const inventoryShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-skill-evidence-inventory.png'), Buffer.from(inventoryShot.data, 'base64'));
  await click('#role-dialog [data-copy-interview]');
  await sleep(180);
  assert(await evaluate(`!document.querySelector('#role-dialog [data-interview-status]').textContent.includes('A ten-question kit will include')`), 'Practitioner interview kit action did not report a result.');
  const readiness = await evaluate(`(() => { const checks=[...document.querySelectorAll('#role-dialog [data-readiness-item]')]; checks.slice(0,4).forEach((input)=>{ input.checked=true; input.dispatchEvent(new Event('change',{bubbles:true})); }); return { count:document.querySelector('#role-dialog [data-check-count]').textContent, guidance:document.querySelector('#role-dialog [data-check-guidance]').textContent }; })()`);
  assert(readiness.count === '4 / 6 ready' && /Close/.test(readiness.guidance), 'Application readiness check did not update with meaningful guidance.');
  await captureElement('#role-dialog .local-reality-brief', 'career-skills-compass-local-reality-checks.png');
  await evaluate(`(() => { const field=document.querySelector('#role-dialog [data-job-ad]'); field.value='We are hiring a Product Manager to lead customer discovery, product strategy and rapid prototyping. This hybrid role includes quarterly travel, revenue targets and AI product literacy.'; })()`);
  await click('#role-dialog [data-analyse-ad]');
  const advert = await evaluate(`({ visible:!document.querySelector('#role-dialog [data-job-ad-results]').hidden, matched:document.querySelectorAll('#role-dialog .job-ad-chips.positive span').length, missing:document.querySelectorAll('#role-dialog .job-ad-chips.caution span').length, conditions:document.querySelectorAll('#role-dialog .condition-signals span').length, triageRows:document.querySelectorAll('#role-dialog [data-triage-row]').length, triageButtons:document.querySelectorAll('#role-dialog [data-triage-choice]').length, questions:document.querySelectorAll('#role-dialog .ad-questions li').length, sprintMoves:document.querySelectorAll('#role-dialog .sprint-grid article').length, sprintCopy:document.querySelectorAll('#role-dialog [data-copy-sprint]').length })`);
  assert(advert.visible && advert.matched >= 4 && advert.missing >= 1 && advert.conditions >= 3 && advert.triageRows>=4 && advert.triageButtons===advert.triageRows*3 && advert.questions === 3 && advert.sprintMoves === 5 && advert.sprintCopy === 1, 'The private job-ad decoder did not surface skills, evidence triage, conditions, questions and an evidence-first application sprint.');
  await click('#role-dialog [data-triage-row]:nth-child(1) [data-triage-choice="ready"]');
  await click('#role-dialog [data-triage-row]:nth-child(2) [data-triage-choice="test"]');
  const triage = await evaluate(`({ summary:document.querySelector('#role-dialog [data-triage-count]').textContent, prove:document.querySelector('#role-dialog [data-triage-prove]').textContent, tailor:document.querySelector('#role-dialog [data-triage-tailor]').textContent, planCards:document.querySelectorAll('#role-dialog .triage-plan article').length, pressed:document.querySelectorAll('#role-dialog [data-triage-choice][aria-pressed="true"]').length })`);
  assert(triage.summary.includes('1 ready') && triage.summary.includes('1 need a test') && triage.prove.includes('Start with') && triage.tailor.includes('truthful example') && triage.planCards===3 && triage.pressed===advert.triageRows, `Vacancy evidence triage did not reprioritize: ${JSON.stringify(triage)}`);
  await click('#role-dialog [data-copy-triage]');
  await sleep(120);
  assert(await evaluate(`!document.querySelector('#role-dialog [data-triage-status]').textContent.includes('Nothing is saved')`), 'Prioritised evidence plan copy did not report a result.');
  await evaluate(`(() => { const shell=document.querySelector('#role-dialog .dialog-shell'); const result=document.querySelector('#role-dialog [data-job-ad-results]'); shell.scrollTop=result.offsetTop-25; })()`);
  await sleep(120);
  const advertShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-job-ad-decoder.png'), Buffer.from(advertShot.data, 'base64'));
  await evaluate(`(() => { const field=document.querySelector('#role-dialog [data-job-ad]'); field.value='Product Manager: customer discovery, product strategy, rapid prototyping, hybrid.\\n---\\nSenior Product Manager: customer discovery, product strategy, stakeholder alignment, revenue targets, travel.\\n---\\nAI Product Manager: product strategy, rapid prototyping, AI product literacy, remote.'; })()`);
  await click('#role-dialog [data-analyse-ad]');
  const vacancySample = await evaluate(`(() => { const panel=document.querySelector('#role-dialog .vacancy-sample'); const frequencies=[...document.querySelectorAll('#role-dialog .vacancy-frequency-grid article span')].map((node)=>node.textContent.trim()); const conditions=[...document.querySelectorAll('#role-dialog .condition-signals span')].map((node)=>node.textContent.trim()); return { panels:document.querySelectorAll('#role-dialog .vacancy-sample').length, frequencyCards:frequencies.length, recurrence:frequencies.some((text)=>text==='2/3 ads'||text==='3/3 ads'), conditionsWithCounts:conditions.filter((text)=>text.endsWith('/3 ads')).length, triageRows:document.querySelectorAll('#role-dialog [data-triage-row]').length, triageRecurrence:[...document.querySelectorAll('#role-dialog [data-triage-row]>div:first-child span')].some((node)=>/3 adverts/.test(node.textContent)), privateLabel:panel?.textContent.includes('3 vacancies compared privately'), clean:panel&&!/undefined|null/.test(panel.textContent) }; })()`);
  assert(vacancySample.panels === 1 && vacancySample.frequencyCards >= 3 && vacancySample.recurrence && vacancySample.conditionsWithCounts >= 1 && vacancySample.triageRows>=3 && vacancySample.triageRecurrence && vacancySample.privateLabel && vacancySample.clean, `The multi-vacancy sampler did not surface recurring skills, evidence triage and conditions safely: ${JSON.stringify(vacancySample)}`);
  await evaluate(`(() => { const shell=document.querySelector('#role-dialog .dialog-shell'); const result=document.querySelector('#role-dialog [data-job-ad-results]'); shell.scrollTop=result.offsetTop-25; })()`);
  await sleep(120);
  const vacancySampleShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-multi-vacancy-sample.png'), Buffer.from(vacancySampleShot.data, 'base64'));
  await evaluate(`(() => { const shell=document.querySelector('#role-dialog .dialog-shell'); const section=document.querySelector('#role-dialog .priority-runway-section'); shell.scrollTop=section.offsetTop; })()`);
  await sleep(120);
  const priorityShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-skill-priority-runway.png'), Buffer.from(priorityShot.data, 'base64'));
  await evaluate(`(() => { const shell = document.querySelector('#role-dialog .dialog-shell'); const section = [...document.querySelectorAll('#role-dialog .role-section')].find((node) => /Complete skill map/.test(node.querySelector('h3')?.textContent || '')); if (shell && section) shell.scrollTop = section.offsetTop; })()`);
  await sleep(180);
  const skillShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-skill-map-current.png'), Buffer.from(skillShot.data, 'base64'));
  assert(await evaluate(`!document.body.innerText.includes('Saved career') && !document.querySelector('#saved-count')`), 'A backend-like saved affordance is still present.');
  await click('#role-dialog [data-plan]');
  const experiment = await evaluate(`({ open: document.querySelector('#experiment-dialog').open, focusInside:Boolean(document.activeElement.closest('#experiment-dialog')), weeks: document.querySelectorAll('#experiment-dialog .experiment-week').length, gates: document.querySelectorAll('#experiment-dialog .decision-gate > div').length, scoreCriteria: document.querySelectorAll('#experiment-dialog .scorecard-grid article').length, labelledRatings: [...document.querySelectorAll('#experiment-dialog [data-rate]')].filter((button)=>/out of 5/.test(button.getAttribute('aria-label')||'')).length, budgets: document.querySelectorAll('#experiment-dialog [data-hours]').length, stages: document.querySelectorAll('#experiment-dialog [data-plan-stage] option').length, selectedStage: document.querySelector('#experiment-dialog [data-plan-stage]').value, roleSpecific: /Product Manager/i.test(document.querySelector('#experiment-dialog').textContent), privateCopy: /nothing is saved or sent/i.test(document.querySelector('#experiment-dialog').textContent) })`);
  assert(experiment.open && experiment.focusInside && experiment.weeks === 4 && experiment.gates === 2 && experiment.scoreCriteria === 6 && experiment.labelledRatings===30 && experiment.budgets === 3 && experiment.stages === 9 && experiment.selectedStage === 'mid' && experiment.roleSpecific && experiment.privateCopy, 'The personalized 30-day career experiment is incomplete or lacks accessible controls.');
  await evaluate(`(() => { const stage=document.querySelector('#experiment-dialog [data-plan-stage]'); stage.value='school'; stage.dispatchEvent(new Event('change',{bubbles:true})); })()`);
  assert(await evaluate(`document.querySelector('#experiment-dialog [data-plan-stage]').value==='school' && /School student/.test(document.querySelector('#experiment-dialog').textContent) && /Talk to three people doing different work/.test(document.querySelector('#experiment-dialog').textContent)`), 'Changing career stage did not regenerate the experiment guidance.');
  await evaluate(`(() => { const stage=document.querySelector('#experiment-dialog [data-plan-stage]'); stage.value='mid'; stage.dispatchEvent(new Event('change',{bubbles:true})); })()`);
  await click('#experiment-dialog [data-hours="8"]');
  assert(await evaluate(`document.querySelector('#experiment-dialog [data-hours="8"]').getAttribute('aria-pressed') === 'true' && /Three two-hour build blocks/.test(document.querySelector('#experiment-dialog').textContent)`), 'The experiment time budget did not update the plan.');
  await evaluate(`(() => { const values=[5,4,4,3,5,4]; document.querySelectorAll('#experiment-dialog .scorecard-grid article').forEach((card,index)=>card.querySelector('[data-rating="'+values[index]+'"]').click()); })()`);
  assert(await evaluate(`document.querySelectorAll('#experiment-dialog [data-rate][aria-pressed="true"]').length===6 && document.querySelector('[data-rating-summary]').textContent.includes('4.2/5 evidence signal')`), 'The post-experiment scorecard did not calculate a complete evidence signal.');
  await click('#experiment-dialog [data-copy-plan]');
  await sleep(120);
  assert(await evaluate(`!/Private by design/.test(document.querySelector('#copy-status').textContent)`), 'The copy-plan action did not report a result.');
  await evaluate(`document.querySelector('#experiment-dialog .dialog-shell').scrollTop = 0`);
  const experimentShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-experiment-plan.png'), Buffer.from(experimentShot.data, 'base64'));
  await evaluate(`(() => { const shell=document.querySelector('#experiment-dialog .dialog-shell'); const weeks=document.querySelector('#experiment-dialog .experiment-weeks'); shell.scrollTop=weeks.offsetTop-20; })()`);
  await sleep(120);
  const experimentLowerShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-experiment-plan-lower.png'), Buffer.from(experimentLowerShot.data, 'base64'));
  await evaluate(`(() => { const shell=document.querySelector('#experiment-dialog .dialog-shell'); const scorecard=document.querySelector('#experiment-dialog .experiment-scorecard'); shell.scrollTop=scorecard.offsetTop-20; })()`);
  await sleep(120);
  const scorecardShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-experiment-scorecard.png'), Buffer.from(scorecardShot.data, 'base64'));
  await click('#experiment-dialog [data-back-role]');
  await sleep(100);
  assert(await evaluate(`document.querySelector('#role-dialog').open && !document.querySelector('#experiment-dialog').open && document.querySelector('#role-dialog .dialog-shell').scrollTop>500 && Boolean(document.activeElement.closest('#role-dialog'))`), 'Back to role map did not restore the career detail, scroll position and focus.');
  await click('[data-close-role]');

  await click('#browse-grid [data-open="nursing-allied-health"]');
  const careRole = await evaluate(`(() => { const text=document.querySelector('#role-dialog').textContent; return { title:document.querySelector('#role-dialog h2')?.textContent, skills:document.querySelectorAll('#role-dialog .skill-card').length, scroll:document.querySelector('#role-dialog .dialog-shell').scrollTop, regulated:/registration|regulated|recognised education/i.test(text), supervised:/supervised/i.test(text), safety:/patient-safety|safety accountability|safe care/i.test(text) }; })()`);
  assert(/Nursing/.test(careRole.title) && careRole.skills >= 20 && careRole.scroll <= 1 && careRole.regulated && careRole.supervised && careRole.safety, `Care role did not start at its title or preserve regulated-entry and safety boundaries: ${JSON.stringify(careRole)}`);
  const careShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-nursing-role.png'), Buffer.from(careShot.data, 'base64'));
  await captureElement('#role-dialog .life-fit-section', 'career-skills-compass-nursing-life-fit.png');
  await click('[data-close-role]');
  await click('#browse-grid [data-open="social-worker-case-coordinator"]');
  const socialWorkRole = await evaluate(`(() => { const text=document.querySelector('#role-dialog').textContent; const cardText=document.querySelector('#browse-grid [data-open="social-worker-case-coordinator"]').closest('.career-card').textContent; return { title:document.querySelector('#role-dialog h2')?.textContent, skills:document.querySelectorAll('#role-dialog .skill-card').length, regulated:/regulated|registration|recognised degree/i.test(text), supervised:/supervised|supervision/i.test(text), reality:/caseload|resource constraints|emotional.*legal|legal.*emotional/i.test(text), boundary:/do not undertake unsupervised client work|safeguarding|consent/i.test(text), aiPosition:cardText.includes('Human-centred + AI') }; })()`);
  assert(/Social Worker/.test(socialWorkRole.title) && socialWorkRole.skills >= 20 && socialWorkRole.regulated && socialWorkRole.supervised && socialWorkRole.reality && socialWorkRole.boundary && socialWorkRole.aiPosition, `Social-work role did not preserve regulated entry, supervised practice, caseload reality, safeguarding or human accountability: ${JSON.stringify(socialWorkRole)}`);
  const socialWorkShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-social-worker-role.png'), Buffer.from(socialWorkShot.data, 'base64'));
  await click('[data-close-role]');
  await click('#browse-grid [data-open="building-systems-technician"]');
  const tradeRole = await evaluate(`(() => { const text=document.querySelector('#role-dialog').textContent; return { title:document.querySelector('#role-dialog h2')?.textContent, skills:document.querySelectorAll('#role-dialog .skill-card').length, vocational:/vocational|apprenticeship/i.test(text), credential:/credential|accredited/i.test(text), physical:/physical diagnosis|site remain human|lifting/i.test(text) }; })()`);
  assert(/HVAC/.test(tradeRole.title) && tradeRole.skills >= 20 && tradeRole.vocational && tradeRole.credential && tradeRole.physical, `Skilled-trade role did not preserve vocational access, credentials and physical-world reality: ${JSON.stringify(tradeRole)}`);
  await click('[data-close-role]');

  const completeRoleAudit = await evaluate(`(() => { const failures=[]; const ids=[...document.querySelectorAll('#browse-grid [data-open]')].map((button)=>button.dataset.open); for(const id of ids){ const opener=document.querySelector('#browse-grid [data-open="'+id+'"]'); opener.click(); const priority=[...document.querySelectorAll('#role-dialog .priority-runway article h5')].map((node)=>node.textContent.trim()); const queries=[...document.querySelectorAll('#role-dialog .search-queries code')].map((node)=>node.textContent.trim()); const roleText=document.querySelector('#role-dialog').textContent; if(document.querySelectorAll('#role-dialog .skill-layer').length!==4 || document.querySelectorAll('#role-dialog .skill-card').length<20 || document.querySelectorAll('#role-dialog .life-pattern-grid article').length!==4 || document.querySelectorAll('#role-dialog .life-question-grid li').length!==4 || document.querySelectorAll('#role-dialog [data-copy-interview]').length!==1 || document.querySelectorAll('#role-dialog .job-ad-decoder').length!==1 || document.querySelectorAll('#role-dialog .local-reality-brief li').length!==6 || document.querySelectorAll('#role-dialog [data-transition-source]').length!==0 || document.querySelectorAll('#role-dialog [data-verify-market]').length!==0 || priority.length!==6 || new Set(priority).size!==6 || queries.length!==4 || new Set(queries).size!==4 || document.querySelectorAll('#role-dialog [data-readiness-item]').length!==6 || /undefined|null/.test(roleText)) failures.push(id+':role'); const planner=document.querySelector('#role-dialog [data-plan]'); planner.click(); const experimentText=document.querySelector('#experiment-dialog').textContent; if(document.querySelectorAll('#experiment-dialog .experiment-week').length!==4 || document.querySelectorAll('#experiment-dialog [data-plan-stage] option').length!==9 || document.querySelectorAll('#experiment-dialog .scorecard-grid article').length!==6 || /undefined|null/.test(experimentText)) failures.push(id+':experiment'); document.querySelector('#experiment-dialog').close(); } return { checked:ids.length, failures }; })()`);
  assert(completeRoleAudit.checked === initial.cards && completeRoleAudit.failures.length === 0, `Complete role/experiment audit failed: ${completeRoleAudit.failures.join(', ')}`);
  const completeInventoryAudit = await evaluate(`(() => { const failures=[]; const ids=[...document.querySelectorAll('#browse-grid [data-open]')].map((button)=>button.dataset.open); for(const id of ids){document.querySelector('#browse-grid [data-open="'+id+'"]').click();const skills=document.querySelectorAll('#role-dialog [data-inventory-skill]').length;const selects=document.querySelectorAll('#role-dialog [data-skill-evidence]').length;const layers=document.querySelectorAll('#role-dialog [data-inventory-layer]').length;const priorities=document.querySelectorAll('#role-dialog [data-inventory-priority] li').length;const text=document.querySelector('#role-dialog [data-skill-inventory]')?.textContent||'';if(skills<20||selects!==skills||layers!==4||priorities<1||/undefined|null/.test(text))failures.push(id);} return {checked:ids.length,failures}; })()`);
  assert(completeInventoryAudit.checked===initial.cards && completeInventoryAudit.failures.length===0, `Complete skill-evidence inventory audit failed: ${completeInventoryAudit.failures.join(', ')}`);

  const firstTwo = await evaluate(`[...document.querySelectorAll('#match-grid [data-compare]')].slice(0,2).map((node) => node.dataset.compare)`);
  await click(`[data-compare="${firstTwo[0]}"]`);
  await click(`[data-compare="${firstTwo[1]}"]`);
  assert(await evaluate(`!document.querySelector('#compare-tray').hidden && document.querySelector('#compare-count').textContent === '2'`), 'Comparison tray did not update.');
  await click('#open-compare');
  assert(await evaluate(`(() => { const text=document.querySelector('#compare-dialog').textContent; return document.querySelector('#compare-dialog').open && document.querySelectorAll('#compare-dialog .compare-row').length >= 14 && text.includes('work fit') && text.includes('Work setting') && text.includes('Physical / sensory load'); })()`), 'Career comparison did not render the practical match and job-quality breakdown.');
  const journal = await evaluate(`(() => { const cards=[...document.querySelectorAll('#compare-dialog [data-journal-role]')]; return { cards:cards.length, fields:document.querySelectorAll('#compare-dialog [data-journal-field]').length, hypotheses:cards.every((card)=>card.querySelector('[data-journal-field="hypothesis"]').value.length>25), experiments:cards.every((card)=>card.querySelector('[data-journal-field="experiment"]').value.length>25), copyButtons:document.querySelectorAll('#compare-dialog [data-copy-journal]').length, private:/Nothing here is saved or sent/.test(document.querySelector('#compare-dialog [data-decision-journal]').textContent) }; })()`);
  assert(journal.cards===2 && journal.fields===10 && journal.hypotheses && journal.experiments && journal.copyButtons===1 && journal.private, `Decision journal is incomplete: ${JSON.stringify(journal)}`);
  await evaluate(`(() => { const first=document.querySelector('#compare-dialog [data-journal-role]'); first.querySelector('[data-journal-field="hypothesis"]').value='I want to test whether the ordinary coordination work gives me energy after two realistic attempts.'; first.querySelector('[data-journal-field="outcome"]').value='Mixed'; })()`);
  await click('#compare-dialog [data-copy-journal]');
  await sleep(180);
  assert(await evaluate(`!document.querySelector('#compare-dialog [data-journal-status]').textContent.includes('Private for this open comparison')`), 'Decision-journal copy action did not report success or a fallback.');
  await captureElement('#compare-dialog [data-decision-journal]', 'career-skills-compass-decision-journal.png');
  await click('[data-close-compare]');

  await evaluate(`(() => { const input = document.querySelector('#career-search'); input.value = 'solar'; input.dispatchEvent(new Event('input', { bubbles: true })); })()`);
  const searchVisible = await evaluate(`[...document.querySelectorAll('#browse-grid .career-card')].filter((node) => !node.hidden).length`);
  assert(searchVisible >= 1 && searchVisible <= 3, 'Skill search is not narrowing the career library.');
  await evaluate(`(() => { const input = document.querySelector('#career-search'); input.value = 'technician'; input.dispatchEvent(new Event('input', { bubbles: true })); })()`);
  const technicianVisible = await evaluate(`[...document.querySelectorAll('#browse-grid .career-card')].filter((node) => !node.hidden).length`);
  assert(technicianVisible >= 3, 'Practical technician pathways are not discoverable by plain-language search.');
  await captureElement('#explore .browse-main', 'career-skills-compass-technician-pathways.png');
  await evaluate(`(() => { const input = document.querySelector('#career-search'); input.value = ''; input.dispatchEvent(new Event('input', { bubbles: true })); const future = document.querySelector('.browse-filter[data-filter="position"][value="AI-native"]'); future.checked = true; future.dispatchEvent(new Event('change', { bubbles: true })); })()`);
  const futureVisible = await evaluate(`[...document.querySelectorAll('#browse-grid .career-card')].filter((node) => !node.hidden).length`);
  assert(futureVisible >= 6 && futureVisible <= 12, 'The AI-native future-position filter is not working.');
  await evaluate(`(() => { document.querySelectorAll('.browse-filter').forEach((input) => { input.checked = false; }); const highChange = document.querySelector('.browse-filter[data-filter="exposure"][value="High task change"]'); highChange.checked = true; highChange.dispatchEvent(new Event('change', { bubbles: true })); })()`);
  const highChangeVisible = await evaluate(`(() => { const visible = [...document.querySelectorAll('#browse-grid .career-card')].filter((node) => !node.hidden); return { count: visible.length, allHighChange: visible.every((node) => node.dataset.aiExposure === 'High task change') }; })()`);
  assert(highChangeVisible.count === 9 && highChangeVisible.allHighChange, 'The high-AI-task-change filter or its pagination is not working.');
  await evaluate(`(() => { document.querySelectorAll('.browse-filter').forEach((input) => { input.checked = false; }); const sort = document.querySelector('#career-sort'); sort.value = 'future'; sort.dispatchEvent(new Event('change', { bubbles: true })); })()`);
  const emergingSort = await evaluate(`[...document.querySelectorAll('#browse-grid .career-card')].filter((node) => !node.hidden).slice(0,6).every((node) => node.dataset.aiPosition === 'AI-native')`);
  assert(emergingSort, 'Emerging-first sorting did not put AI-native roles first.');

  await command('Emulation.setDeviceMetricsOverride', { width: 390, height: 844, deviceScaleFactor: 1, mobile: true });
  await command('Page.navigate', { url: baseUrl });
  await sleep(650);
  const mobile = await evaluate(`(() => { const routeGrid=document.querySelector('.route-card-grid'); return { width: document.documentElement.scrollWidth, viewport: innerWidth, menu: getComputedStyle(document.querySelector('.hamburger')).display, h1: document.querySelector('h1')?.innerText, filters: document.querySelectorAll('.filter-panel .browse-filter').length, futureCards: document.querySelectorAll('.future-grid .future-card').length, routeCards:document.querySelectorAll('[data-route-intent]').length, routeColumns:getComputedStyle(routeGrid).gridTemplateColumns }; })()`);
  assert(mobile.width <= mobile.viewport + 1, `Mobile page overflows horizontally (${mobile.width}px vs ${mobile.viewport}px).`);
  assert(mobile.menu !== 'none', 'Mobile navigation did not switch to the compact menu.');
  assert(mobile.filters >= 40 && mobile.futureCards >= 10, 'The complete future-role and advanced-filter experience is not available on mobile.');
  assert(mobile.routeCards===4 && !mobile.routeColumns.includes(' '), `Intent routes did not collapse to a single usable mobile column: ${JSON.stringify(mobile)}`);
  const mobileReadability=await evaluate(`(() => { const visible=(node)=>node.offsetParent!==null; const body=[...document.querySelectorAll('.route-card-grid p,.career-card>p,.task-preview li,.ai-card-preview p,.stage-playbook p,.stage-playbook li,.transferable-skill-card>p,.skill-bridge-builder>header>p,.skill-bridge-explainer p,.section-heading>p:last-child')].filter(visible); const controls=[...document.querySelectorAll('.route-card-grid b,.career-card button,.skill-card-actions button,.jump-nav a')].filter(visible); const fields=[...document.querySelectorAll('.compass-page input:not([type="checkbox"]):not([type="radio"]),.compass-page select,.compass-page textarea,.career-dialog[open] input:not([type="checkbox"]):not([type="radio"]),.career-dialog[open] select,.career-dialog[open] textarea')].filter(visible); const size=(node)=>Number.parseFloat(getComputedStyle(node).fontSize); return {bodyMinimum:Math.min(...body.map(size)),controlMinimum:Math.min(...controls.map(size)),fieldMinimum:Math.min(...fields.map(size)),bodyChecked:body.length,controlsChecked:controls.length,fieldsChecked:fields.length,fieldDetails:fields.map((node)=>({tag:node.tagName,id:node.id,className:node.className,size:size(node)}))}; })()`);
  assert(mobileReadability.bodyMinimum>=16 && mobileReadability.controlMinimum>=13 && mobileReadability.fieldMinimum>=16, `Mobile text is below the readability floor: ${JSON.stringify(mobileReadability)}`);
  await captureElement('#choose-route', 'career-skills-compass-starting-routes-mobile.png');
  const screenshot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-mobile.png'), Buffer.from(screenshot.data, 'base64'));
  await evaluate(`(() => { const click=(selector)=>document.querySelector(selector).click(); click('[data-group="stage"][data-value="mid"]');click('#next-step');click('[data-group="goal"][data-value="switch"]');click('#next-step');click('[data-group="interests"][data-value="analyse"]');click('[data-group="interests"][data-value="influence"]');click('#next-step');click('[data-group="values"][data-value="income"]');click('[data-group="values"][data-value="leadership"]');click('#next-step');click('[data-group="modes"][data-value="people"]');click('[data-group="modes"][data-value="ambiguous"]');click('[data-group="modes"][data-value="desk"]');click('#next-step');click('[data-group="access"][data-value="experience"]');click('[data-group="pace"][data-value="months"]');click('#show-matches'); })()`);
  await sleep(120);
  const mobileSensitivity=await evaluate(`(() => { const panel=document.querySelector('[data-shortlist-stress]');const summary=panel.querySelector('.stress-summary');const cases=panel.querySelector('.stress-cases');return {visible:!panel.hidden,overflow:document.documentElement.scrollWidth<=innerWidth+1,scenarios:Number.parseInt(panel.querySelector('[data-scenario-count]').textContent,10),summaryColumns:getComputedStyle(summary).gridTemplateColumns,caseColumns:getComputedStyle(cases).gridTemplateColumns,footerDirection:getComputedStyle(panel.querySelector('footer')).flexDirection};})()`);
  assert(mobileSensitivity.visible && mobileSensitivity.overflow && mobileSensitivity.scenarios===7 && !mobileSensitivity.summaryColumns.includes(' ') && !mobileSensitivity.caseColumns.includes(' ') && mobileSensitivity.footerDirection==='column', `Mobile shortlist robustness layout failed: ${JSON.stringify(mobileSensitivity)}`);
  await captureElement('[data-shortlist-stress]', 'career-skills-compass-shortlist-robustness-mobile.png');

  await evaluate(`(() => { [...document.querySelectorAll('#browse-grid [data-compare]')].slice(0,2).forEach((button)=>button.click()); })()`);
  await click('#open-compare');
  const mobileJournal = await evaluate(`(() => { const shell=document.querySelector('#compare-dialog .dialog-shell'); const grid=document.querySelector('#compare-dialog .decision-journal-grid'); return { open:document.querySelector('#compare-dialog').open, cards:document.querySelectorAll('#compare-dialog [data-journal-role]').length, columns:getComputedStyle(grid).gridTemplateColumns, overflow:shell.scrollWidth<=shell.clientWidth+1 }; })()`);
  assert(mobileJournal.open && mobileJournal.cards===2 && !mobileJournal.columns.includes(' ') && mobileJournal.overflow, `Mobile decision journal failed: ${JSON.stringify(mobileJournal)}`);
  await evaluate(`(() => { const shell=document.querySelector('#compare-dialog .dialog-shell'); const journal=document.querySelector('#compare-dialog [data-decision-journal]'); shell.scrollTop=journal.offsetTop-8; })()`);
  await sleep(120);
  const mobileJournalShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-decision-journal-mobile.png'), Buffer.from(mobileJournalShot.data, 'base64'));
  await click('[data-close-compare]');

  await click('[data-experience-theme="people"]');
  const mobileSkillBridge = await evaluate(`(() => { const builder=document.querySelector('.skill-bridge-builder'); const results=document.querySelector('.skill-bridge-result-grid'); const shell=document.documentElement; return { cards:document.querySelectorAll('#skill-bridge-results .skill-bridge-result-grid article').length, columns:getComputedStyle(results).gridTemplateColumns, overflow:shell.scrollWidth<=innerWidth+1, buttonPressed:document.querySelector('[data-experience-theme][aria-pressed="true"]')!==null }; })()`);
  assert(mobileSkillBridge.cards>=1 && !mobileSkillBridge.columns.includes(' ') && mobileSkillBridge.overflow && mobileSkillBridge.buttonPressed, `Mobile reverse skill bridge failed: ${JSON.stringify(mobileSkillBridge)}`);
  await captureElement('.skill-bridge-builder', 'career-skills-compass-reverse-skill-bridge-mobile.png');

  await click('[data-skill-card]:not([hidden]) [data-skill-sprint]');
  const mobileSkillSprint = await evaluate(`(() => { const shell=document.querySelector('#skill-sprint-dialog .dialog-shell'); const phases=document.querySelector('#skill-sprint-dialog .skill-sprint-phases'); const levels=document.querySelector('#skill-sprint-dialog .skill-level-rubric'); const progress=document.querySelector('#skill-sprint-dialog .skill-progression-checks'); return { open:document.querySelector('#skill-sprint-dialog').open, overflow:shell.scrollWidth<=shell.clientWidth+1, phases:document.querySelectorAll('#skill-sprint-dialog .skill-sprint-phases article').length, columns:getComputedStyle(phases).gridTemplateColumns, levelColumns:getComputedStyle(levels).gridTemplateColumns, progressColumns:getComputedStyle(progress).gridTemplateColumns }; })()`);
  assert(mobileSkillSprint.open && mobileSkillSprint.overflow && mobileSkillSprint.phases===5 && !mobileSkillSprint.columns.includes(' ') && !mobileSkillSprint.levelColumns.includes(' ') && !mobileSkillSprint.progressColumns.includes(' '), `Mobile skill sprint layout failed: ${JSON.stringify(mobileSkillSprint)}`);
  const mobileSkillShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-skill-sprint-mobile.png'), Buffer.from(mobileSkillShot.data, 'base64'));
  await click('[data-close-skill-sprint]');

  await click('#browse-grid [data-open]');
  const mobileLocalReality = await evaluate(`(() => { const shell=document.querySelector('#role-dialog .dialog-shell'); const brief=document.querySelector('#role-dialog .local-reality-brief'); const list=brief.querySelector('ol'); return { visible:Boolean(brief), overflow:shell.scrollWidth<=shell.clientWidth+1, checks:brief.querySelectorAll('li').length, headerColumns:getComputedStyle(brief.querySelector('header')).gridTemplateColumns, listColumns:getComputedStyle(list).gridTemplateColumns }; })()`);
  assert(mobileLocalReality.visible && mobileLocalReality.overflow && mobileLocalReality.checks===6 && !mobileLocalReality.headerColumns.includes(' ') && !mobileLocalReality.listColumns.includes(' '), `Mobile local reality checks failed: ${JSON.stringify(mobileLocalReality)}`);
  await captureElement('#role-dialog .local-reality-brief', 'career-skills-compass-local-reality-checks-mobile.png');
  await evaluate(`(() => { const select=document.querySelector('#role-dialog [data-skill-evidence]'); select.value='ready'; select.dispatchEvent(new Event('change',{bubbles:true})); const shell=document.querySelector('#role-dialog .dialog-shell'); const inventory=document.querySelector('#role-dialog [data-skill-inventory]'); shell.scrollTop=inventory.offsetTop-8; })()`);
  const mobileInventory = await evaluate(`(() => { const shell=document.querySelector('#role-dialog .dialog-shell'); const inventory=document.querySelector('#role-dialog [data-skill-inventory]'); const summary=inventory.querySelector('.inventory-summary'); const layers=inventory.querySelector('.inventory-layers'); const next=inventory.querySelector('.inventory-next'); const actions=inventory.querySelector('.inventory-actions'); const title=document.querySelector('#role-dialog .skill-card-title'); return { visible:Boolean(inventory), overflow:shell.scrollWidth<=shell.clientWidth+1, selects:document.querySelectorAll('#role-dialog [data-skill-evidence]').length, summaryColumns:getComputedStyle(summary).gridTemplateColumns, layerColumns:getComputedStyle(layers).gridTemplateColumns, nextColumns:getComputedStyle(next).gridTemplateColumns, actionDirection:getComputedStyle(actions).flexDirection, titleColumns:getComputedStyle(title).gridTemplateColumns, ready:inventory.querySelector('[data-inventory-ready]').textContent }; })()`);
  assert(mobileInventory.visible && mobileInventory.overflow && mobileInventory.selects>=20 && !mobileInventory.summaryColumns.includes(' ') && !mobileInventory.layerColumns.includes(' ') && !mobileInventory.nextColumns.includes(' ') && mobileInventory.actionDirection==='column' && !mobileInventory.titleColumns.includes(' ') && mobileInventory.ready==='1', `Mobile skill evidence inventory failed: ${JSON.stringify(mobileInventory)}`);
  await sleep(120);
  const mobileInventoryShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-skill-evidence-inventory-mobile.png'), Buffer.from(mobileInventoryShot.data, 'base64'));
  await evaluate(`(() => { const field=document.querySelector('#role-dialog [data-job-ad]'); field.value='Systems thinking and task and decision decomposition required. Hybrid role with travel.\\n---\\nSystems thinking and communication required. Remote with occasional travel.'; })()`);
  await click('#role-dialog [data-analyse-ad]');
  const mobileAdvert = await evaluate(`(() => { const shell=document.querySelector('#role-dialog .dialog-shell'); const columns=document.querySelector('#role-dialog .job-ad-columns'); const sample=document.querySelector('#role-dialog .vacancy-frequency-grid'); const triagePlan=document.querySelector('#role-dialog .triage-plan'); const triageRow=document.querySelector('#role-dialog [data-triage-row]'); const life=document.querySelector('#role-dialog .life-pattern-grid'); const questions=document.querySelector('#role-dialog .life-question-grid'); const interview=document.querySelector('#role-dialog .interview-kit-action'); return { visible:!document.querySelector('#role-dialog [data-job-ad-results]').hidden, overflow:shell.scrollWidth<=shell.clientWidth+1, matched:document.querySelectorAll('#role-dialog .job-ad-chips.positive span').length, sampleCards:document.querySelectorAll('#role-dialog .vacancy-frequency-grid article').length, triageRows:document.querySelectorAll('#role-dialog [data-triage-row]').length, columns:getComputedStyle(columns).gridTemplateColumns, sampleColumns:getComputedStyle(sample).gridTemplateColumns, triageColumns:getComputedStyle(triagePlan).gridTemplateColumns, triageRowColumns:getComputedStyle(triageRow).gridTemplateColumns, lifeColumns:getComputedStyle(life).gridTemplateColumns, questionColumns:getComputedStyle(questions).gridTemplateColumns, interviewColumns:getComputedStyle(interview).gridTemplateColumns }; })()`);
  assert(mobileAdvert.visible && mobileAdvert.overflow && mobileAdvert.matched>=1 && mobileAdvert.sampleCards>=1 && mobileAdvert.triageRows>=1 && !mobileAdvert.columns.includes(' ') && !mobileAdvert.sampleColumns.includes(' ') && !mobileAdvert.triageColumns.includes(' ') && !mobileAdvert.triageRowColumns.includes(' ') && !mobileAdvert.lifeColumns.includes(' ') && !mobileAdvert.questionColumns.includes(' ') && !mobileAdvert.interviewColumns.includes(' '), `Mobile job-ad decoder, evidence triage, vacancy sample, interview kit or life-fit layout failed: ${JSON.stringify(mobileAdvert)}`);
  await captureElement('#role-dialog .vacancy-sample', 'career-skills-compass-multi-vacancy-sample-mobile.png');
  await captureElement('#role-dialog .evidence-triage', 'career-skills-compass-evidence-triage-mobile.png');
  await click('#role-dialog [data-plan]');
  const mobileExperiment = await evaluate(`(() => { const shell=document.querySelector('#experiment-dialog .dialog-shell'); const weeks=document.querySelector('#experiment-dialog .experiment-weeks'); return { open:document.querySelector('#experiment-dialog').open, overflow:shell.scrollWidth<=shell.clientWidth+1, weeks:document.querySelectorAll('#experiment-dialog .experiment-week').length, scoreCriteria:document.querySelectorAll('#experiment-dialog .scorecard-grid article').length, columns:getComputedStyle(weeks).gridTemplateColumns }; })()`);
  assert(mobileExperiment.open && mobileExperiment.overflow && mobileExperiment.weeks===4 && mobileExperiment.scoreCriteria===6 && !mobileExperiment.columns.includes(' '), `Mobile experiment layout failed: ${JSON.stringify(mobileExperiment)}`);
  const mobileExperimentShot = await command('Page.captureScreenshot', { format: 'png', captureBeyondViewport: false });
  await writeFile(path.join(outputDir, 'career-skills-compass-experiment-mobile.png'), Buffer.from(mobileExperimentShot.data, 'base64'));
  await click('[data-close-experiment]');

  assert(browserErrors.length === 0, `Browser exceptions: ${browserErrors.join('; ')}`);
  const report = { ok: true, pageChronology:chronology.ids, desktopBodyFontMinimum:desktopReadability.bodyMinimum, mobileBodyFontMinimum:mobileReadability.bodyMinimum, mobileInputFontMinimum:mobileReadability.fieldMinimum, explainedExistingSkillsTool:initial.skillBridgeExplainers===3&&initial.skillBridgePlainLanguage, startingRoutes:initial.routeCards, mobileStartingRoutes:mobile.routeCards, shortlistSensitivityScenarios:sensitivity.scenarios, mobileShortlistSensitivity:mobileSensitivity.visible&&mobileSensitivity.overflow, oneClickShortlistCompare:shortlistCompare.journalCards, roles: initial.cards, auditedRoleMaps: completeRoleAudit.checked, auditedSkillInventories:completeInventoryAudit.checked, skillInventoryStatuses:4, mobileSkillInventory:mobileInventory.visible&&mobileInventory.overflow, expandedRoleMaps: breadth.present.length, expandedRoleClusters: breadth.clusters.length, transferableSkills: initial.transferableSkills, auditedSkillSprints: completeSkillAudit.checked, uniqueSkillSprints: completeSkillAudit.unique, reverseSkillBridgeResults: skillBridge.resultCards, mobileReverseSkillBridge: mobileSkillBridge.overflow, roleTransitionDropdowns:detail.transitionDropdowns, localRealityChecks:detail.localRealityChecks, mobileLocalRealityChecks:mobileLocalReality.visible&&mobileLocalReality.overflow, institutionalAndMarketSignals: initial.evidence, practitionerVideoSignals: initial.practitionerSignals, skillSprintPhases: skillSprint.phases, skillEvidenceLevels: skillSprint.levels, skillProgressionChecks: skillSprint.progressionChecks, mobileSkillSprint: mobileSkillSprint.open && mobileSkillSprint.overflow, firstMatch: matches.first, matchScores: matches.scores, copyableShortlistRoles: shortlist.topThree.length, detailSkills: detail.skills, lifeFitSignalsPerRole: detail.lifePatterns, lifeFitQuestionsPerRole: detail.lifeQuestions, practitionerInterviewKitsPerRole: detail.interviewKits, prioritySkills: detail.priorityUnique, searchQueriesPerRole: detail.searchQueries, readinessChecksPerRole:detail.readinessChecks, jobAdMatchedSkills:advert.matched, sampledVacancies:3, recurringVacancySignals:vacancySample.frequencyCards, applicationSprintMoves:advert.sprintMoves, mobileJobAdDecoder:mobileAdvert.visible&&mobileAdvert.overflow, experimentWeeks:experiment.weeks, scorecardCriteria:experiment.scoreCriteria, selectableStages:experiment.stages, mobileWidth:mobile.width, mobileExperiment:mobileExperiment.open&&mobileExperiment.overflow, browserErrors };
  await writeFile(path.join(outputDir, 'career-skills-compass-qa.json'), JSON.stringify(report, null, 2));
  console.log(JSON.stringify(report, null, 2));
} finally {
  try { socket?.close(); } catch {}
  chrome.kill();
  await new Promise((resolve) => staticServer.close(resolve));
}
