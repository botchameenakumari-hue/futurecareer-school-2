import { readFileSync, writeFileSync } from 'node:fs';

const path = `${process.cwd()}/tests/coaching-workspace.spec.js`;
let source = readFileSync(path, 'utf8');
source = source.replace(/\r\n/g, '\n');

function replace(before, after, label) {
  if (!source.includes(before)) throw new Error(`Could not find ${label}`);
  source = source.replace(before, after);
}

replace(
`  await careerDialog.locator('#career-preset-search').fill('Marine Engineer');
  await expect(careerDialog.getByRole('button', { name: /Marine Engineer/ })).toBeVisible();
  await careerDialog.screenshot({ path: testInfo.outputPath('staff-career-preset.png') });
  await careerDialog.locator('#career-preset-search').fill('');
  await expect(careerDialog.locator('#career-focus-guidance')).toContainText('10% remains available');
  await careerDialog.getByLabel('Career, course, or route').fill('Digital Product Research');
  await careerDialog.getByLabel('Status').selectOption('testing');
  await careerDialog.getByLabel('Fit score').fill('84');
  await careerDialog.getByLabel('Education or entry route').fill('Build a research portfolio through practical projects.');
  await careerDialog.getByLabel('Next real-world test').fill('Interview two product researchers');
  await careerDialog.getByRole('button', { name: 'Save option' }).click();`,
`  await careerDialog.locator('#career-preset-search').fill('Marine Engineer');
  const marineGuide = careerDialog.getByRole('button', { name: /Marine Engineer/ });
  await expect(marineGuide).toBeVisible();
  await marineGuide.click();
  await expect(careerDialog.locator('#career-guide-preview')).toContainText('Future change');
  await expect(careerDialog.getByRole('button', { name: 'Choose as primary' })).toBeVisible();
  await careerDialog.screenshot({ path: testInfo.outputPath('staff-career-preset.png') });
  await careerDialog.locator('#career-preset-search').fill('');
  await expect(careerDialog.locator('#career-focus-guidance')).toContainText('10% remains available');
  await careerDialog.getByLabel('Career, course, or route').fill('Digital Product Research');
  await careerDialog.getByLabel('Decision now').selectOption('promising-to-test');
  await careerDialog.getByLabel('Education or entry routes').fill('Build a research portfolio through practical projects.');
  await careerDialog.getByLabel('Next real-world test').fill('Interview two product researchers');
  await careerDialog.getByRole('button', { name: 'Save decision' }).click();`,
  'career decision workflow',
);

replace(
`  await page.locator('[data-record-pane="skills"]').getByRole('button', { name: 'Add skill' }).click();
  const skillDialog = page.locator('#skill-dialog');`,
`  await page.locator('[data-record-pane="skills"]').getByRole('button', { name: 'Add skill plan' }).click();
  const skillPlanDialog = page.locator('#skill-plan-dialog');
  await expect(skillPlanDialog).toBeVisible();
  await skillPlanDialog.locator('[data-skill-pack="ai-ready"]').click();
  await expect(skillPlanDialog.locator('#skill-pack-preview')).toContainText('AI-ready professional');
  await skillPlanDialog.getByRole('button', { name: 'Add selected skills' }).click();
  await expect(skillPlanDialog).not.toBeVisible();
  await expect(page.locator('#workspace-status')).toContainText('skills added from AI-ready professional');
  await expect(page.locator('#record-skill-list')).toContainText('AI tool literacy');

  await page.locator('[data-record-pane="skills"]').getByRole('button', { name: 'Add one skill' }).click();
  const skillDialog = page.locator('#skill-dialog');`,
  'bulk skill plan workflow',
);

replace("  await skillDialog.getByLabel('Current level').selectOption('1');", "  await skillDialog.getByLabel('Current ability').selectOption('1');", 'current ability label');
replace("  await skillDialog.getByLabel('Target level').selectOption('3');", "  await skillDialog.getByLabel('Required ability').selectOption('3');", 'required ability label');
replace("  await skillDialog.getByLabel('Development goal').fill('Summarise five interviews into defensible themes.');", "  await skillDialog.getByLabel('Development outcome').fill('Summarise five interviews into defensible themes.');", 'development outcome label');
replace("  await expect(page.locator('#workspace-status')).toHaveText('Skill added.');", "  await expect(page.locator('#workspace-status')).toHaveText('Skill added to the roadmap.');", 'skill save message');
replace("  const newSkill = page.locator('#record-skill-list .skill-row').filter({ hasText: 'Interview synthesis' });", "  const newSkill = page.locator('#record-skill-list .skill-roadmap-row').filter({ hasText: 'Interview synthesis' });", 'skill row selector');

writeFileSync(path, source, 'utf8');
