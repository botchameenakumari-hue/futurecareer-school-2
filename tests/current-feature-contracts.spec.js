import { test, expect } from '@playwright/test';

test('skill portfolio tracker keeps its browser-local plan and states its limits', async ({ page }) => {
  await page.goto('/services/assessments/skill-portfolio-tracker/');
  await expect(page.locator('#spt-app')).toBeVisible();
  await expect(page.locator('.spt-note')).toContainText('saved only in this browser');

  await page.locator('[data-f="target"]').selectOption({ index: 1 });
  await page.locator('[data-f="targetSkill"]').selectOption({ index: 2 });
  await page.reload();

  await expect(page.locator('[data-f="target"]')).toHaveValue(/.+/);
  await expect(page.locator('[data-f="targetSkill"]')).toHaveValue(/.+/);
  await expect(page.locator('[data-act="share"]')).toContainText('privacy-safe');
  await expect(page.locator('.spt-note')).toContainText('saved only in this browser');
});

test('skill portfolio tracker renders a privacy-safe shared snapshot without private entries', async ({ page }) => {
  const payload = Buffer.from(JSON.stringify({ v: 1, r: [4, 3, 2, 4, 3, 2, 1, 1, 3], t: 'software', a: 'college', rd: 62, ps: 40, done: 1, hours: 8 }), 'utf8').toString('base64url');
  await page.goto('/services/assessments/skill-portfolio-tracker/?share=' + payload);
  await expect(page.locator('.spt-shared')).toBeVisible();
  await expect(page.locator('.spt-shared')).toContainText('Shared skill snapshot');
  await expect(page.locator('.spt-shared')).toContainText('does not include a name');
  await expect(page.locator('.spt-shared')).toContainText('Software developer');
});

test('Class 10 route finder and Class 12 chart apply subject-based filters', async ({ page }) => {
  await page.goto('/blog/stream-selection/career-chart-after-10th/');
  await expect(page.locator('#rf-app')).toBeVisible();
  await page.locator('[data-act="conf"]').nth(0).click();
  await page.locator('[data-act="conf"]').nth(5).click();
  await page.locator('[data-act="conf"]').nth(10).click();
  await page.locator('[data-act="conf"]').nth(15).click();
  await page.locator('[data-act="conf"]').nth(20).click();
  await page.locator('[data-act="show"]').click();
  await expect(page.locator('#rf-res')).toBeVisible();

  await page.goto('/blog/career-options/career-chart-after-12th/');
  await expect(page.locator('#cf-app')).toBeVisible();
  await expect(page.locator('#cf-app')).toContainText('20 of 20 routes match');
  await page.locator('[data-f="stream"]').selectOption('PCM');
  await expect(page.locator('[data-f="stream"]')).toHaveValue('PCM');
  await page.locator('[data-sub="Maths"]').check();
  await expect(page.locator('[data-sub="Maths"]')).toBeChecked();
  await page.locator('[data-act="reset"]').click();
  await page.locator('[data-sub="Maths"]').check();
  await expect(page.locator('#cf-app')).toContainText('routes match');
  await expect(page.locator('[data-sub="Maths"]')).toBeChecked();
  await page.locator('.cf-more').first().locator('summary').click();
  await expect(page.locator('.cf-hint').first()).toContainText('Check every rule');
  await expect(page.locator('body')).toContainText('October 2026');
});

test('Class 12 filtered links ignore unsupported query values and preserve valid filters', async ({ page }) => {
  await page.goto('/blog/career-options/career-chart-after-12th/?cf_subjects=Maths&cf_name=%3Cscript%3Ealert(1)%3C%2Fscript%3E');
  await expect(page.locator('#cf-app')).toBeVisible();
  await expect(page.locator('[data-sub="Maths"]')).toBeChecked();
  await expect(page.locator('#cf-app')).not.toContainText('<script>');
  await expect(page.locator('#cf-app script')).toHaveCount(0);
});

test('PCB without NEET finder keeps the focused route filter and its limits visible', async ({ page }) => {
  await page.goto('/tools/pcb-career-options-without-neet/');
  await expect(page.locator('#cef-app')).toBeVisible();
  await expect(page.locator('#course-eligibility-finder h2')).toHaveText('PCB / BiPC options without NEET');
  await expect(page.locator('#cef-app')).not.toContainText('MBBS / BDS / AYUSH undergraduate routes');
  await expect(page.locator('#cef-app')).toContainText('B.Sc. Nursing, Telangana state route');
  await expect(page.locator('#course-eligibility-finder')).toContainText('Scalability lens');
  await expect(page.locator('#cef-app')).toContainText('Scalable with a business layer');
  await expect(page.locator('.tool-notes')).toContainText('not a guarantee');
});

test('social skills assessment exposes its distinct five-area interaction', async ({ page }) => {
  await page.goto('/services/assessments/social-skills-self-assessment/');
  await expect(page.locator('h1')).toContainText('Social Skills');
  await expect(page.locator('.sst-note')).toContainText('not a clinical');
  await expect(page.locator('.sst-domain-short')).toHaveCount(5);
  await expect(page.locator('.sst-stage')).toHaveCount(3);
  await page.locator('.sst-stage').first().click();
  await expect(page.locator('#start-button')).toBeEnabled();
  await page.locator('#start-button').click();
  await expect(page.locator('#quiz-shell')).toBeVisible();
  await expect(page.locator('#question-counter')).toContainText('1');
});

test('career route finder filters the editorial catalogue and states its limits', async ({ page }) => {
  await page.goto('/tools/career-route-finder/');
  await expect(page.locator('#career-route-finder')).toBeVisible();
  await expect(page.locator('.crf-note')).toContainText('not saved or sent');
  await page.locator('#crf-query').fill('mechanical engineering');
  await page.locator('#crf-stage').selectOption('working');
  await page.locator('#crf-form button[type="submit"]').click();
  await expect(page.locator('#crf-status')).toContainText('route');
  await expect(page.locator('.crf-card').first()).toBeVisible();
  await expect(page.locator('.lead')).toContainText('not a live job or salary database');
  await expect(page.locator('.crf-card').first()).toContainText('Scalability');
  await expect(page.locator('.crf-card').first()).toContainText(/Scalable|Not so scalable/);
});

test('career route finder compares two routes without making a ranking claim', async ({ page }) => {
  await page.goto('/tools/career-route-finder/');
  const cards = page.locator('.crf-card');
  await cards.nth(0).locator('[data-compare]').click();
  await cards.nth(1).locator('[data-compare]').click();
  await expect(page.locator('#crf-compare')).toBeVisible();
  await expect(page.locator('#crf-compare')).toContainText('structured trade-off worksheet');
  await expect(page.locator('#crf-compare table')).toBeVisible();
});

test('student business calculator exposes unit economics and a 14-day test plan', async ({ page }) => {
  await page.goto('/tools/student-business-idea-feasibility-calculator/');
  await expect(page.locator('#student-business-feasibility')).toBeVisible();
  await expect(page.locator('.sbf-note')).toContainText('not saved or sent');
  await page.locator('[data-sbf="idea"]').fill('Poster design');
  await page.locator('#sbf-form button[type="submit"]').click();
  await expect(page.locator('#sbf-result')).toBeVisible();
  await expect(page.locator('[data-sbf-out="breakEven"]')).toContainText('sale');
  await expect(page.locator('.sbf-plan')).toContainText('14-day test');
});

test('degree pathway planner builds a project brief without pretending to be admissions advice', async ({ page }) => {
  await page.goto('/tools/degree-career-project-planner/');
  await expect(page.locator('#degree-pathway-planner')).toBeVisible();
  await expect(page.locator('.dpp-note')).toContainText('No answers are saved or sent');
  await page.locator('[data-dpp="preset"]').selectOption('bca');
  await page.locator('[data-dpp="signal"]').selectOption({ index: 1 });
  await page.locator('#dpp-form button[type="submit"]').click();
  await expect(page.locator('#dpp-result')).toBeVisible();
  await expect(page.locator('#dpp-result')).toContainText('30-day project');
  await expect(page.locator('[data-dpp-out="route"]')).toContainText('admission');
});

test('career database workbench keeps verification drafts local and exportable', async ({ page }) => {
  await page.goto('/tools/career-database-verification-workbench/');
  await expect(page.locator('#career-database-workbench')).toBeVisible();
  await expect(page.locator('.cdw-note')).toContainText('this browser');
  await page.locator('#cdw-route').selectOption({ label: 'Architect' });
  await expect(page.locator('#cdw-source-hints')).toContainText('source-mapped-not-verified');
  await page.locator('#cdw-verifier').fill('Editorial verifier');
  await page.locator('[data-cdw-field]').first().check();
  await page.locator('#cdw-form button[type="submit"]').click();
  await expect(page.locator('#cdw-status')).toContainText('not a verified record');
  await expect(page.locator('#cdw-export')).toBeVisible();
});

test('career database workbench blocks incomplete packets and exports a complete review draft', async ({ page }) => {
  await page.goto('/tools/career-database-verification-workbench/');
  await page.locator('#cdw-export').click();
  await expect(page.locator('#cdw-status')).toContainText('incomplete');
  await page.locator('#cdw-verifier').fill('Editorial verifier');
  await page.locator('#cdw-date').fill('2026-10-11');
  await page.locator('#cdw-sources').fill('https://example.org/official-source');
  const fields = page.locator('[data-cdw-field]');
  for (let index = 0; index < await fields.count(); index += 1) await fields.nth(index).check();
  const notes = page.locator('[data-cdw-detail]');
  for (let index = 0; index < await notes.count(); index += 1) await notes.nth(index).fill(`Source-backed review note ${index + 1}`);
  const [download] = await Promise.all([page.waitForEvent('download'), page.locator('#cdw-export').click()]);
  expect(download.suggestedFilename()).toMatch(/-verification-review\.json$/);
  await expect(page.locator('#cdw-status')).toContainText('complete review packet');
});

test('course eligibility workbench keeps rule review drafts local and non-published', async ({ page }) => {
  await page.goto('/tools/course-eligibility-verification-workbench/');
  await expect(page.locator('#course-verification-workbench')).toBeVisible();
  await expect(page.locator('.cvw-note')).toContainText('this browser');
  await expect(page.locator('#cvw-status')).toContainText('not verified admission data');
  await page.locator('#cvw-reviewer').fill('Editorial reviewer');
  await page.locator('#cvw-form button[type="submit"]').click();
  await expect(page.locator('#cvw-status')).toContainText('not verified or published');
});

test('course eligibility workbench blocks incomplete packets and exports a complete review draft', async ({ page }) => {
  await page.goto('/tools/course-eligibility-verification-workbench/');
  await page.locator('#cvw-export').click();
  await expect(page.locator('#cvw-status')).toContainText('incomplete');
  await page.locator('#cvw-reviewer').fill('Editorial reviewer');
  await page.locator('#cvw-date').fill('2026-10-11');
  await page.locator('#cvw-sources').fill('https://example.org/current-notice');
  const fields = page.locator('[data-cvw-field]');
  for (let index = 0; index < await fields.count(); index += 1) await fields.nth(index).check();
  const notes = page.locator('[data-cvw-detail]');
  for (let index = 0; index < await notes.count(); index += 1) await notes.nth(index).fill(`Current notice review note ${index + 1}`);
  const [download] = await Promise.all([page.waitForEvent('download'), page.locator('#cvw-export').click()]);
  expect(download.suggestedFilename()).toMatch(/-course-review\.json$/);
  await expect(page.locator('#cvw-status')).toContainText('complete review packet');
});

test('career decision journal saves a hypothesis locally and exports a reviewable entry', async ({ page }) => {
  await page.goto('/tools/career-decision-journal/');
  await expect(page.locator('#cdj-form')).toBeVisible();
  await expect(page.locator('.cdj-note')).toContainText('not uploaded');
  await page.locator('[name="direction"]').fill('Data analysis');
  await page.locator('[name="hypothesis"]').fill('I may enjoy turning messy information into useful decisions.');
  await page.locator('[name="evidence"]').fill('A finished public-data analysis and feedback from one practitioner.');
  await page.locator('[name="experiment"]').fill('Build a one-page analysis and ask someone unfamiliar with it to review the reasoning.');
  await page.locator('[name="reviewDate"]').fill('2026-11-01');
  await page.locator('#cdj-form button[type="submit"]').click();
  await expect(page.locator('#cdj-summary')).toBeVisible();
  await expect(page.locator('#cdj-summary')).toContainText('Data analysis');
  await expect(page.locator('.cdj-boundary')).toContainText('not proof');
  await page.reload();
  await expect(page.locator('[name="direction"]')).toHaveValue('Data analysis');
});

test('course cost planner separates recurring costs from the funding gap', async ({ page }) => {
  await page.goto('/tools/course-cost-planner/');
  await expect(page.locator('#ccp-form')).toBeVisible();
  await expect(page.locator('.ccp-note')).toContainText('not a fee quote');
  await page.locator('[data-ccp="tuition"]').fill('180000');
  await page.locator('[data-ccp="years"]').fill('3');
  await page.locator('[data-ccp="monthly"]').fill('8000');
  await page.locator('[data-ccp="funding"]').fill('50000');
  await page.locator('[data-ccp="capacity"]').fill('10000');
  await page.locator('#ccp-form button[type="submit"]').click();
  await expect(page.locator('#ccp-result')).toBeVisible();
  await expect(page.locator('#ccp-result')).toContainText('₹');
  await expect(page.locator('#ccp-result')).toContainText('Funding gap');
  await expect(page.locator('.ccp-next')).toContainText('Verify each fee');
});

test('career optionality calculator exposes a transparent non-predictive signal', async ({ page }) => {
  await page.goto('/tools/career-optionality-calculator/');
  await expect(page.locator('#coc-form')).toBeVisible();
  await expect(page.locator('.coc-note')).toContainText('not a career-fit score');
  await page.locator('[name="path"]').fill('Operations');
  await page.locator('[name="routes"]').selectOption('2');
  await page.locator('[name="skills"]').selectOption('2');
  await page.locator('[name="reversible"]').selectOption('1');
  await page.locator('[name="testable"]').selectOption('3');
  await page.locator('[name="eligibility"]').selectOption('2');
  await page.locator('#coc-form button[type="submit"]').click();
  await expect(page.locator('#coc-result')).toBeVisible();
  await expect(page.locator('#coc-result')).toContainText('Operations');
  await expect(page.locator('.coc-next')).toContainText('reversible');
});

test('portfolio quality checker turns missing proof into a 14-day action', async ({ page }) => {
  await page.goto('/tools/portfolio-quality-checker/');
  await expect(page.locator('#pqc-form')).toBeVisible();
  await expect(page.locator('.pqc-note')).toContainText('does not validate');
  await page.locator('[name="direction"]').fill('UX design');
  await page.locator('[name="projects"]').selectOption('2');
  await page.locator('[name="context"]').selectOption('1');
  await page.locator('[name="process"]').selectOption('0');
  await page.locator('[name="artifact"]').selectOption('2');
  await page.locator('[name="feedback"]').selectOption('1');
  await page.locator('[name="reflection"]').selectOption('0');
  await page.locator('#pqc-form button[type="submit"]').click();
  await expect(page.locator('#pqc-result')).toBeVisible();
  await expect(page.locator('#pqc-result')).toContainText('UX design');
  await expect(page.locator('.pqc-next')).toContainText('confidential');
});

test('course provider comparison flags evidence gaps without ranking providers', async ({ page }) => {
  await page.goto('/tools/course-provider-comparison/');
  await expect(page.locator('#cpc-form')).toBeVisible();
  await expect(page.locator('.cpc-note')).toContainText('does not rank');
  await page.locator('[name="provider"]').fill('Example course');
  await page.locator('[name="recognition"]').selectOption('1');
  await page.locator('[name="cost"]').selectOption('2');
  await page.locator('[name="practice"]').selectOption('1');
  await page.locator('[name="outcomes"]').selectOption('0');
  await page.locator('[name="next"]').fill('Ask for the current recognition page and outcome method.');
  await page.locator('#cpc-form button[type="submit"]').click();
  await expect(page.locator('#cpc-result')).toBeVisible();
  await expect(page.locator('#cpc-result')).toContainText('Example course');
  await expect(page.locator('.cpc-next')).toContainText('time pressure');
});

test('career change runway calculator shows an assumption-based transition estimate', async ({ page }) => {
  await page.goto('/tools/career-change-runway-calculator/');
  await expect(page.locator('#crc-form')).toBeVisible();
  await expect(page.locator('.crc-note')).toContainText('not financial advice');
  await page.locator('[name="savings"]').fill('300000');
  await page.locator('[name="expenses"]').fill('30000');
  await page.locator('[name="income"]').fill('10000');
  await page.locator('[name="transition"]').fill('5000');
  await page.locator('[name="pause"]').fill('Keep six months of essential costs untouched.');
  await page.locator('#crc-form button[type="submit"]').click();
  await expect(page.locator('#crc-result')).toBeVisible();
  await expect(page.locator('#crc-result')).toContainText('months');
  await expect(page.locator('.crc-next')).toContainText('six months');
});

test('internship readiness planner turns preparation gaps into a safe seven-day checklist', async ({ page }) => {
  await page.goto('/tools/internship-readiness-planner/');
  await expect(page.locator('#irp-form')).toBeVisible();
  await expect(page.locator('.irp-note')).toContainText('not a placement guarantee');
  await page.locator('[name="direction"]').fill('Data internship');
  await page.locator('[name="evidence"]').selectOption('1');
  await page.locator('[name="communication"]').selectOption('2');
  await page.locator('[name="safety"]').selectOption('1');
  await page.locator('[name="next"]').fill('Finish a small analysis and ask for feedback.');
  await page.locator('#irp-form button[type="submit"]').click();
  await expect(page.locator('#irp-result')).toBeVisible();
  await expect(page.locator('#irp-result')).toContainText('Data internship');
  await expect(page.locator('.irp-next')).toContainText('Do not pay for access');
});

test('informational interview planner turns career research into a respectful next experiment', async ({ page }) => {
  await page.goto('/tools/informational-interview-planner/');
  await expect(page.locator('#iip-form')).toBeVisible();
  await page.locator('[name="direction"]').fill('data analysis');
  await page.locator('[name="respect"]').selectOption('2');
  await page.locator('[name="next"]').fill('Run a small public-data task after the conversation.');
  await page.locator('#iip-form button[type="submit"]').click();
  await expect(page.locator('#iip-result')).toBeVisible();
  await expect(page.locator('#iip-result')).toContainText('What should I verify from an official source');
  await expect(page.locator('#iip-status')).toContainText('nothing was sent');
});

test('study abroad readiness planner keeps official verification and backup routes explicit', async ({ page }) => {
  await page.goto('/tools/study-abroad-readiness-planner/');
  await expect(page.locator('#sar-form')).toBeVisible();
  await expect(page.locator('.sar-note')).toContainText('does not recommend a country');
  await page.locator('[name="route"]').fill('Example MSc in Germany');
  await page.locator('[name="source"]').selectOption('1');
  await page.locator('[name="cost"]').selectOption('2');
  await page.locator('[name="backup"]').fill('Return route if funding changes.');
  await page.locator('#sar-form button[type="submit"]').click();
  await expect(page.locator('#sar-result')).toBeVisible();
  await expect(page.locator('#sar-result')).toContainText('Example MSc in Germany');
  await expect(page.locator('.sar-next')).toContainText('visa, work, health-insurance');
  await expect(page.locator('#sar-status')).toContainText('nothing was sent');
});

test('skill-to-service mapper turns a skill into a bounded usefulness experiment', async ({ page }) => {
  await page.goto('/tools/skill-to-service-mapper/');
  await expect(page.locator('#ssm-form')).toBeVisible();
  await expect(page.locator('.ssm-note')).toContainText('does not promise clients');
  await page.locator('[name="skill"]').fill('Spreadsheet analysis');
  await page.locator('[name="audience"]').fill('A local shop');
  await page.locator('[name="deliverable"]').fill('A one-page stock summary');
  await page.locator('[name="proof"]').fill('A dummy-data before-and-after sample');
  await page.locator('#ssm-form button[type="submit"]').click();
  await expect(page.locator('#ssm-result')).toBeVisible();
  await expect(page.locator('#ssm-result')).toContainText('A one-page stock summary');
  await expect(page.locator('.ssm-next')).toContainText('personal and confidential data');
  await expect(page.locator('#ssm-status')).toContainText('nothing was sent');
});

test('career experiment planner creates a bounded 30-day test and review rubric', async ({ page }) => {
  await page.goto('/tools/career-experiment-planner/');
  await expect(page.locator('#cep-form')).toBeVisible();
  await expect(page.locator('.cep-note')).toContainText('cannot prove career fit');
  await page.locator('[name="direction"]').fill('Data analysis');
  await page.locator('[name="activity"]').fill('Clean and explain a public dataset.');
  await page.locator('[name="output"]').fill('A one-page recommendation');
  await page.locator('[name="evidence"]').fill('Would I choose a harder second test?');
  await page.locator('#cep-form button[type="submit"]').click();
  await expect(page.locator('#cep-result')).toBeVisible();
  await expect(page.locator('#cep-result')).toContainText('A one-page recommendation');
  await expect(page.locator('.cep-grid')).toContainText('Week 4');
  await expect(page.locator('.cep-review')).toContainText('Would I choose a harder second test?');
  await expect(page.locator('#cep-status')).toContainText('nothing was sent');
});

test('scholarship application planner keeps funding claims and verification explicit', async ({ page }) => {
  await page.goto('/tools/scholarship-application-planner/');
  await expect(page.locator('#sap-form')).toBeVisible();
  await expect(page.locator('.sap-note')).toContainText('does not list scholarships');
  await page.locator('[name="award"]').fill('Example scholarship');
  await page.locator('[name="source"]').selectOption('1');
  await page.locator('[name="eligibility"]').selectOption('2');
  await page.locator('[name="documents"]').selectOption('1');
  await page.locator('[name="gap"]').fill('Check whether living costs remain unfunded.');
  await page.locator('#sap-form button[type="submit"]').click();
  await expect(page.locator('#sap-result')).toBeVisible();
  await expect(page.locator('#sap-result')).toContainText('Example scholarship');
  await expect(page.locator('.sap-next')).toContainText('not guaranteed');
});

test('parent student worksheet turns disagreement into boundaries and a review rule', async ({ page }) => {
  await page.goto('/tools/student-parent-career-intake/');
  await expect(page.locator('#parent-student-agreement')).toBeVisible();
  await expect(page.locator('[data-psa="studentNonNegotiable"]')).toBeVisible();
  await expect(page.locator('[data-psa="parentNonNegotiable"]')).toBeVisible();
  await page.locator('[data-psa="studentTest"]').fill('Read the official eligibility notice and complete a one-week task.');
  await page.locator('[data-psa="parentEvidence"]').fill('Compare the current fee notice with the family budget.');
  await page.locator('[data-psa="studentNonNegotiable"]').fill('I need time to test the work before choosing.');
  await page.locator('[data-psa="parentNonNegotiable"]').fill('We cannot exceed the agreed education budget.');
  await page.locator('[data-psa="sharedRule"]').fill('Review the evidence together after 30 days before deciding.');
  await expect(page.locator('.psa-summary')).toContainText('fair rule');
  await expect(page.locator('.psa-summary')).toContainText('Review the evidence together after 30 days');
});
