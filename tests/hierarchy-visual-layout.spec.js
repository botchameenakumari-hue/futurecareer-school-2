import { expect, test } from '@playwright/test';

test.use({ channel: 'chrome' });

const projectUrl = 'https://txlbmbslaayxuwxcksxo.supabase.co';
const storageKey = 'fcs-txlbmbslaayxuwxcksxo-auth-v1';
const branchId = '22222222-2222-4222-8222-222222222222';
const timestamp = '2026-08-12T08:00:00.000Z';
const profiles = [
  { id: '00000000-0000-4000-8000-000000000001', email: 'admin@example.test', full_name: 'Vagdevi Admin', role: 'admin', account_status: 'active', branch_id: null, supervisor_id: null },
  { id: '00000000-0000-4000-8000-000000000002', email: 'branch.head@example.test', full_name: 'Sirisha Branch Head', role: 'branch_head', account_status: 'active', branch_id: branchId, supervisor_id: '00000000-0000-4000-8000-000000000001' },
  { id: '00000000-0000-4000-8000-000000000003', email: 'head.coach@example.test', full_name: 'Harini Head Coach', role: 'head_coach', account_status: 'active', branch_id: branchId, supervisor_id: '00000000-0000-4000-8000-000000000002' },
  { id: '00000000-0000-4000-8000-000000000004', email: 'coach@example.test', full_name: 'Nisha Coach', role: 'coach', account_status: 'active', branch_id: branchId, supervisor_id: '00000000-0000-4000-8000-000000000003' },
  { id: '00000000-0000-4000-8000-000000000005', email: 'student@example.test', full_name: 'Arjun Student', role: 'student', account_status: 'active', branch_id: branchId, supervisor_id: '00000000-0000-4000-8000-000000000004' },
].map((profile) => ({
  ...profile,
  stage: profile.role === 'student' ? 'class-11-12' : null,
  city: 'Visakhapatnam',
  target_outcome: '',
  onboarding_completed: true,
  must_change_password: false,
  setup_email_sent_at: null,
  temporary_password_issued_at: null,
  password_set_at: timestamp,
  created_at: timestamp,
  updated_at: timestamp,
}));

function fakeAccessToken(user, expiresAt) {
  const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
  return `${encode({ alg: 'HS256', typ: 'JWT' })}.${encode({ aud: 'authenticated', exp: expiresAt, sub: user.id, email: user.email, role: 'authenticated' })}.test-signature`;
}

async function mockAdmin(page) {
  const current = profiles[0];
  const user = {
    id: current.id, aud: 'authenticated', role: 'authenticated', email: current.email,
    email_confirmed_at: timestamp, confirmed_at: timestamp,
    app_metadata: { provider: 'email', providers: ['email'] },
    user_metadata: { full_name: current.full_name }, identities: [],
    created_at: timestamp, updated_at: timestamp,
  };
  const now = Math.floor(Date.now() / 1000);
  await page.addInitScript(({ key, session }) => localStorage.setItem(key, JSON.stringify(session)), {
    key: storageKey,
    session: { access_token: fakeAccessToken(user, now + 3600), refresh_token: 'test-refresh', expires_in: 3600, expires_at: now + 3600, token_type: 'bearer', user },
  });
  await page.route(`${projectUrl}/**`, async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    const headers = { 'access-control-allow-origin': '*', 'access-control-allow-headers': '*', 'content-type': 'application/json', 'content-range': '0-0/1' };
    if (request.method() === 'OPTIONS') return route.fulfill({ status: 204, headers, body: '' });
    if (url.pathname === '/auth/v1/user') return route.fulfill({ status: 200, headers, body: JSON.stringify(user) });
    if (url.pathname === '/rest/v1/profiles') {
      const object = (request.headers().accept ?? '').includes('application/vnd.pgrst.object+json');
      return route.fulfill({ status: 200, headers, body: JSON.stringify(object ? current : profiles) });
    }
    if (url.pathname === '/rest/v1/branches') return route.fulfill({ status: 200, headers, body: JSON.stringify([{ id: branchId, name: 'Visakhapatnam', code: 'VSKP', city: 'Visakhapatnam', status: 'active' }]) });
    if (url.pathname === '/rest/v1/audit_events') return route.fulfill({ status: 200, headers, body: JSON.stringify([{ id: 1, actor_id: current.id, action: 'account_approved', target_user_id: profiles[1].id, branch_id: branchId, details: {}, created_at: timestamp }]) });
    if (url.pathname.startsWith('/rest/v1/')) return route.fulfill({ status: 200, headers, body: '[]' });
    return route.fulfill({ status: 200, headers, body: '{}' });
  });
}

for (const viewport of [{ name: 'desktop', width: 1440, height: 900 }, { name: 'mobile', width: 390, height: 844 }]) {
  test(`admin operations layout is visually stable on ${viewport.name}`, async ({ page }, testInfo) => {
    await page.setViewportSize(viewport);
    await mockAdmin(page);
    await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });
    await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });
    const peopleNavigation = viewport.name === 'mobile'
      ? page.locator('#mobile-nav [data-view-target="people"]')
      : page.locator('.workspace-nav [data-view-target="people"]');
    await peopleNavigation.click();
    const exactCoach = page.locator('#people-table-body tr').filter({ has: page.getByText('coach@example.test', { exact: true }) });
    await exactCoach.getByRole('button', { name: 'Manage' }).click();
    await expect(page.locator('#manage-account-dialog')).toBeVisible();

    const visualState = await page.evaluate(() => {
      const dialog = document.querySelector('#manage-account-dialog');
      if (!(dialog instanceof HTMLDialogElement)) throw new Error('Management dialog is missing.');
      const rect = dialog.getBoundingClientRect();
      const viewportWidth = document.documentElement.clientWidth;
      const viewportHeight = document.documentElement.clientHeight;
      const textElements = [...dialog.querySelectorAll('button, label, strong, small, span')].filter((element) => {
        if (!(element instanceof HTMLElement) || element.classList.contains('sr-only')) return false;
        const style = getComputedStyle(element);
        const elementRect = element.getBoundingClientRect();
        return style.display !== 'none' && style.visibility !== 'hidden' && elementRect.width > 0 && elementRect.height > 0;
      });
      const textOverflow = textElements
        .filter((element) => element.scrollWidth > element.clientWidth + 2)
        .map((element) => `${element.tagName}#${element.id}.${element.className}`);
      return {
        documentOverflow: document.documentElement.scrollWidth - viewportWidth,
        dialogHorizontalOverflow: dialog.scrollWidth - dialog.clientWidth,
        dialogInsideViewport: rect.left >= -1 && rect.right <= viewportWidth + 1 && rect.top >= -1 && rect.bottom <= viewportHeight + 1,
        textOverflow,
      };
    });
    expect(visualState, JSON.stringify(visualState, null, 2)).toEqual({
      documentOverflow: 0,
      dialogHorizontalOverflow: 0,
      dialogInsideViewport: true,
      textOverflow: [],
    });
    await page.screenshot({ path: testInfo.outputPath(`admin-${viewport.name}.png`), fullPage: true });
  });
}
