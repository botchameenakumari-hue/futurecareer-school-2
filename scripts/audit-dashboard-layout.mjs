import { chromium } from '@playwright/test';

const baseUrl = process.env.DASHBOARD_URL || 'http://127.0.0.1:4321';
// Cohorts and skills are tabs inside the authenticated dashboard, while the
// audience guides remain public routes. Audit both surfaces so a 404 or a
// desktop-only layout cannot look like a complete dashboard check.
const routes = [
  '/dashboard',
  '/dashboard/career-decision',
  '/school-career-dashboard',
  '/intermediate-career-dashboard',
  '/student-career-dashboard',
  '/university-career-dashboard',
  '/parents-career-dashboard',
  '/coaches-dashboard',
];
// Include a narrow 320px viewport as well as common phone, tablet, and
// desktop widths. This catches cramped controls that can pass at 390px but
// still fail on older or smaller phones.
// Cover the narrowest supported phone, common phone, compact tablet, iPad
// portrait, the navigation breakpoint, a larger tablet, and desktop. This
// avoids declaring the layout sound after checking only one phone and one
// desktop width.
const widths = [320, 390, 600, 768, 820, 1024, 1440];
const browser = await chromium.launch({ headless: true });
const page = await browser.newPage({ viewport: { width: 390, height: 900 } });
const failures = [];

for (const route of routes) {
  for (const width of widths) {
    await page.setViewportSize({ width, height: 900 });
    try {
      // The dashboard loads its module graph and Supabase client before the
      // document settles. Eight seconds was producing false failures on a
      // busy local dev server, so allow a realistic navigation window while
      // still failing promptly when a route is genuinely unavailable.
      const response = await page.goto(`${baseUrl}${route}`, { waitUntil: 'commit', timeout: 30000 });
      if (!response || !response.ok()) throw new Error(`HTTP ${response?.status() ?? 'unknown'} for ${route}`);
      // The authenticated dashboard starts with a shell and hydrates its
      // controls afterwards. Waiting for the shell is a more meaningful
      // readiness signal than document.domContentLoaded on a local dev server.
      if (route.startsWith('/dashboard')) {
        await page.locator('#hierarchy-workspace, #auth-shell').first().waitFor({ state: 'attached', timeout: 15000 });
      }
      const result = await page.evaluate(() => {
        const visible = (element) => {
          const rect = element.getBoundingClientRect();
          const style = getComputedStyle(element);
          return rect.width > 0 && rect.height > 0 && style.display !== 'none' && style.visibility !== 'hidden' && style.opacity !== '0';
        };
        const idCounts = new Map();
        document.querySelectorAll('[id]').forEach((element) => {
          const id = element.getAttribute('id');
          idCounts.set(id, (idCounts.get(id) ?? 0) + 1);
        });
        const duplicateIds = [...idCounts.entries()].filter(([, count]) => count > 1).map(([id]) => id);
        const unlabeledInputs = [...document.querySelectorAll('input, select, textarea')]
          .filter((element) => visible(element) && !element.labels?.length && !element.getAttribute('aria-label') && !element.getAttribute('title')).length;
        const unnamedButtons = [...document.querySelectorAll('button')]
          .filter((element) => visible(element) && !(element.textContent ?? '').trim() && !element.getAttribute('aria-label') && !element.getAttribute('title')).length;
        const visibleInterestCheckboxes = [...document.querySelectorAll('.career-interest-chips input[type="checkbox"], .career-interest-options input[type="checkbox"]')]
          .filter((element) => visible(element)).length;
        const emptyLinks = [...document.querySelectorAll('a')]
          .filter((element) => visible(element) && !element.getAttribute('href') && !element.getAttribute('role')).length;
        const availableViews = new Set([...document.querySelectorAll('[data-workspace-view]')]
          .map((element) => element.getAttribute('data-workspace-view')).filter(Boolean));
        const invalidViewTargets = [...document.querySelectorAll('[data-open-view], [data-view-target]')]
          .map((element) => element.getAttribute('data-open-view') || element.getAttribute('data-view-target'))
          .filter((target) => target && !availableViews.has(target));
        const invalidCareerAnchors = [...document.querySelectorAll('[data-career-anchor]')]
          .map((element) => element.getAttribute('data-career-anchor'))
          .filter((target) => target && !document.getElementById(target));
        return {
          clientWidth: document.documentElement.clientWidth,
          scrollWidth: document.documentElement.scrollWidth,
          careerCards: document.querySelectorAll('[data-career-preset]').length,
          hasShowAll: Boolean(document.querySelector('[data-career-show-all], [data-career-load-more]')),
          workspaceViews: document.querySelectorAll('[data-workspace-view]').length,
          planTabs: document.querySelectorAll('[data-plan-tab]').length,
          duplicateIds,
          unlabeledInputs,
          unnamedButtons,
          visibleInterestCheckboxes,
          emptyLinks,
          invalidViewTargets,
          invalidCareerAnchors,
        };
      });
      if (result.scrollWidth > result.clientWidth) failures.push({ route, width, ...result });
      if (result.duplicateIds.length || result.unlabeledInputs || result.unnamedButtons || result.visibleInterestCheckboxes || result.emptyLinks || result.invalidViewTargets.length || result.invalidCareerAnchors.length) {
        failures.push({ route, width, ...result, reason: 'accessibility contract failed' });
      }
      if (route === '/dashboard/career-decision' && (result.careerCards > 24 || result.hasShowAll)) {
        failures.push({ route, width, ...result, reason: 'career catalogue is not bounded' });
      }
      if (route === '/dashboard' && (result.workspaceViews < 7 || result.planTabs < 5)) {
        failures.push({ route, width, ...result, reason: 'dashboard view or plan tab is missing' });
      }
    } catch (error) {
      failures.push({ route, width, error: error.message });
    }
  }
}

await browser.close();
if (failures.length) {
  console.error(JSON.stringify({ failures }, null, 2));
  process.exit(1);
}
console.log(JSON.stringify({ routes: routes.length, widths, horizontalOverflow: false }));
