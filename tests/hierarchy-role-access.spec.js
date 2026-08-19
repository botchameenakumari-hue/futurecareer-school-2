import { expect, test } from '@playwright/test';

test.use({ channel: 'chrome' });

const projectUrl = 'https://txlbmbslaayxuwxcksxo.supabase.co';
const storageKey = 'fcs-txlbmbslaayxuwxcksxo-auth-v1';
const branchId = '22222222-2222-4222-8222-222222222222';
const timestamp = '2026-08-12T08:00:00.000Z';

const roleLabels = {
  admin: 'Admin',
  branch_head: 'Branch Head',
  head_coach: 'Head Coach',
  coach: 'Coach',
  student: 'Student',
};

const roleRules = {
  admin: {
    views: ['overview', 'caseload', 'cohorts', 'people', 'accounts', 'branches', 'activity', 'role-lab'],
    creatable: ['Branch Head', 'Head Coach', 'Coach', 'Student'],
  },
  branch_head: {
    views: ['overview', 'caseload', 'cohorts', 'people', 'accounts', 'activity'],
    creatable: ['Head Coach', 'Coach', 'Student'],
  },
  head_coach: {
    views: ['overview', 'caseload', 'cohorts', 'people', 'accounts'],
    creatable: ['Coach', 'Student'],
  },
  coach: {
    views: ['overview', 'caseload', 'cohorts', 'people', 'accounts'],
    creatable: ['Student'],
  },
  student: {
    views: ['overview', 'career', 'constraints'],
    creatable: [],
  },
};

const baseProfiles = [
  makeProfile('00000000-0000-4000-8000-000000000001', 'admin', 'Vagdevi Admin', 'admin@example.test'),
  makeProfile('00000000-0000-4000-8000-000000000002', 'branch_head', 'Sirisha Branch Head', 'branch.head@example.test', '00000000-0000-4000-8000-000000000001'),
  makeProfile('00000000-0000-4000-8000-000000000003', 'head_coach', 'Harini Head Coach', 'head.coach@example.test', '00000000-0000-4000-8000-000000000002'),
  makeProfile('00000000-0000-4000-8000-000000000004', 'coach', 'Nisha Coach', 'coach@example.test', '00000000-0000-4000-8000-000000000003'),
  makeProfile('00000000-0000-4000-8000-000000000005', 'student', 'Arjun Student', 'student@example.test', '00000000-0000-4000-8000-000000000004'),
];

function makeProfile(id, role, fullName, email, supervisorId = null) {
  return {
    id,
    email,
    full_name: fullName,
    role,
    account_status: 'active',
    branch_id: role === 'admin' ? null : branchId,
    supervisor_id: supervisorId,
    stage: role === 'student' ? 'class-11-12' : null,
    city: 'Visakhapatnam',
    target_outcome: role === 'student' ? 'Choose a practical degree path' : null,
    onboarding_completed: role !== 'student',
    must_change_password: false,
    setup_email_sent_at: null,
    temporary_password_issued_at: null,
    password_set_at: timestamp,
    created_at: timestamp,
    updated_at: timestamp,
  };
}

function authUser(profile) {
  return {
    id: profile.id,
    aud: 'authenticated',
    role: 'authenticated',
    email: profile.email,
    email_confirmed_at: timestamp,
    confirmed_at: timestamp,
    app_metadata: { provider: 'email', providers: ['email'] },
    user_metadata: { full_name: profile.full_name },
    identities: [],
    created_at: timestamp,
    updated_at: timestamp,
  };
}

function fakeAccessToken(user, expiresAt) {
  const encode = (value) => Buffer.from(JSON.stringify(value)).toString('base64url');
  return `${encode({ alg: 'HS256', typ: 'JWT' })}.${encode({ aud: 'authenticated', exp: expiresAt, sub: user.id, email: user.email, role: 'authenticated' })}.test-signature`;
}

async function mockRole(page, role, accountActions = [], includeSetupPending = false) {
  const profiles = baseProfiles.map((profile) => ({
    ...profile,
    must_change_password: includeSetupPending && profile.role === 'branch_head',
    password_set_at: includeSetupPending && profile.role === 'branch_head' ? null : profile.password_set_at,
  }));
  const currentProfile = profiles.find((profile) => profile.role === role);
  const user = authUser(currentProfile);
  const now = Math.floor(Date.now() / 1000);

  await page.addInitScript(({ key, session }) => {
    window.localStorage.setItem(key, JSON.stringify(session));
  }, {
    key: storageKey,
    session: {
      access_token: fakeAccessToken(user, now + 3600),
      refresh_token: 'test-refresh-token',
      expires_in: 3600,
      expires_at: now + 3600,
      token_type: 'bearer',
      user,
    },
  });

  await page.route(`${projectUrl}/**`, async (route) => {
    const request = route.request();
    const url = new URL(request.url());
    const headers = {
      'access-control-allow-origin': '*',
      'access-control-allow-headers': 'authorization, x-client-info, apikey, content-type, prefer',
      'access-control-allow-methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'access-control-expose-headers': 'Content-Range',
      'content-type': 'application/json',
      'content-range': '0-0/1',
    };

    if (request.method() === 'OPTIONS') {
      await route.fulfill({ status: 204, headers, body: '' });
      return;
    }

    if (url.pathname === '/auth/v1/user') {
      await route.fulfill({ status: 200, headers, body: JSON.stringify(user) });
      return;
    }

    if (url.pathname === '/rest/v1/profiles') {
      const wantsObject = (request.headers().accept ?? '').includes('application/vnd.pgrst.object+json');
      await route.fulfill({ status: 200, headers, body: JSON.stringify(wantsObject ? currentProfile : profiles) });
      return;
    }

    if (url.pathname === '/rest/v1/branches') {
      await route.fulfill({
        status: 200,
        headers,
        body: JSON.stringify([{ id: branchId, name: 'Visakhapatnam', code: 'VSKP', city: 'Visakhapatnam', status: 'active' }]),
      });
      return;
    }

    if (url.pathname === '/rest/v1/audit_events') {
      await route.fulfill({
        status: 200,
        headers,
        body: JSON.stringify([{
          id: 1,
          actor_id: baseProfiles[0].id,
          action: 'account_approved',
          target_user_id: baseProfiles[1].id,
          branch_id: branchId,
          details: { email: baseProfiles[1].email, role: 'branch_head' },
          created_at: timestamp,
        }]),
      });
      return;
    }

    if (url.pathname === '/functions/v1/manage-accounts') {
      const payload = request.postDataJSON();
      accountActions.push(payload.action);
      const body = payload.action === 'create-temporary-password'
        ? {
            message: 'One-time password created.',
            temporaryPassword: 'FC-test-4821',
            email: 'branch.head@example.test',
            fullName: 'Sirisha Branch Head',
          }
        : payload.action === 'update-account'
          ? { message: 'Account assignment updated.' }
          : payload.action === 'update-branch'
            ? { message: 'Branch updated.' }
            : { message: 'Password setup email sent.' };
      await route.fulfill({ status: 200, headers, body: JSON.stringify(body) });
      return;
    }

    if (url.pathname.startsWith('/rest/v1/')) {
      await route.fulfill({ status: 200, headers, body: '[]' });
      return;
    }

    await route.fulfill({ status: 200, headers, body: '{}' });
  });
}

const allViews = ['overview', 'caseload', 'cohorts', 'people', 'accounts', 'branches', 'activity', 'career', 'constraints', 'role-lab'];

for (const [role, rules] of Object.entries(roleRules)) {
  test(`${roleLabels[role]} sees only the allowed workspace and account choices`, async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 900 });
    await mockRole(page, role);
    await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });

    await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });
    await expect(page.locator('#sidebar-role')).toHaveText(roleLabels[role]);
    if (role === 'admin') {
      await expect(page.locator('#sidebar-branch-name')).toHaveText('All branches');
      await expect(page.locator('#sidebar-branch-code')).toHaveText('ORG');
    } else {
      await expect(page.locator('#sidebar-branch-name')).toHaveText('Visakhapatnam');
      await expect(page.locator('#sidebar-branch-code')).toHaveText('VSKP');
    }

    for (const view of allViews) {
      const button = page.locator(`.workspace-nav > [data-view-target="${view}"]`);
      if (rules.views.includes(view)) await expect(button).toBeVisible();
      else await expect(button).toBeHidden();
    }

    if (rules.creatable.length) {
      await expect(page.locator('#new-account-button')).toBeVisible();
      await page.locator('#new-account-button').click();
      await expect(page.locator('#account-dialog')).toBeVisible();
      await expect(page.locator('#account-role option')).toHaveText(rules.creatable);
      if (role === 'admin') {
        await expect(page.locator('#new-account-label')).toHaveText('Create account');
        await expect(page.locator('#account-dialog-title')).toHaveText('Create account');
        await expect(page.locator('#account-submit-label')).toHaveText('Create account');
        await expect(page.locator('#approve-now-row')).toBeVisible();
      } else {
        await expect(page.locator('#new-account-label')).toHaveText('Request account');
        await expect(page.locator('#account-dialog-title')).toHaveText('Request account');
        await expect(page.locator('#account-submit-label')).toHaveText('Request approval');
        await expect(page.locator('#approve-now-row')).toBeHidden();
      }
      await page.locator('[data-close-dialog="account-dialog"]').first().click();
    } else {
      await expect(page.locator('#new-account-button')).toBeHidden();
    }

    if (role === 'admin') await expect(page.locator('#new-branch-button')).toBeVisible();
    else await expect(page.locator('#new-branch-button')).toBeHidden();
  });
}

test('Admin can send a setup link and issue a one-time password', async ({ page }) => {
  const actions = [];
  await page.setViewportSize({ width: 1440, height: 900 });
  await mockRole(page, 'admin', actions, true);
  await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });

  await page.locator('.workspace-nav > [data-view-target="people"]').click();
  const row = page.locator('#people-table-body tr').filter({ hasText: 'branch.head@example.test' });
  await expect(row).toContainText('Setup pending');
  await expect(row.getByRole('button', { name: 'Send setup link' })).toBeVisible();
  await expect(row.getByRole('button', { name: 'One-time password' })).toBeVisible();

  await row.getByRole('button', { name: 'Send setup link' }).click();
  await expect(page.locator('#workspace-status')).toContainText('Password setup email sent.');
  await expect.poll(() => actions).toContain('send-setup-email');

  await row.getByRole('button', { name: 'One-time password' }).click();
  await expect(page.locator('#temporary-password-dialog')).toBeVisible();
  await expect(page.locator('#temporary-password-name')).toHaveText('Sirisha Branch Head');
  await expect(page.locator('#temporary-password-email')).toHaveText('branch.head@example.test');
  await expect(page.locator('#temporary-password-value')).toHaveText('FC-test-4821');
  expect(actions).toEqual(['send-setup-email', 'create-temporary-password']);
});

test('Branch Head can see branch identity and branch-scoped activity', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await mockRole(page, 'branch_head');
  await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });

  await expect(page.locator('#workspace-branch-name')).toHaveText('Visakhapatnam');
  await expect(page.locator('#workspace-branch-code')).toHaveText('VSKP');
  await page.locator('.workspace-nav > [data-view-target="activity"]').click();
  await expect(page.locator('#activity-list')).toContainText('Account approved');
  await expect(page.locator('#activity-list')).toContainText('Visakhapatnam (VSKP)');
});

test('Admin can edit a branch and reassign an account', async ({ page }) => {
  const actions = [];
  await page.setViewportSize({ width: 1440, height: 900 });
  await mockRole(page, 'admin', actions);
  await page.goto('http://127.0.0.1:4321/dashboard', { waitUntil: 'domcontentloaded' });
  await expect(page.locator('#workspace-shell')).toBeVisible({ timeout: 10_000 });

  await page.locator('.workspace-nav > [data-view-target="branches"]').click();
  await page.getByRole('button', { name: 'Edit branch' }).click();
  await expect(page.locator('#branch-dialog-title')).toHaveText('Edit branch');
  await expect(page.locator('#branch-code')).toHaveValue('VSKP');
  await page.locator('#branch-submit').click();
  await expect.poll(() => actions).toContain('update-branch');
  await expect(page.locator('#workspace-status')).toContainText('Branch updated.');
  await expect(page.locator('[data-workspace-view="branches"]')).toBeVisible();

  await page.locator('.workspace-nav > [data-view-target="people"]').click();
  const row = page.locator('#people-table-body tr').filter({ has: page.getByText('coach@example.test', { exact: true }) });
  await row.getByRole('button', { name: 'Manage' }).click();
  await expect(page.locator('#managed-user-heading')).toHaveText('Nisha Coach');
  await expect(page.locator('#managed-branch option:checked')).toContainText('VSKP');
  await page.locator('#manage-account-submit').click();
  await expect.poll(() => actions).toContain('update-account');
});
