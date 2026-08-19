# Supabase Setup and Local Role Testing

This project uses one secure role chain:

`Admin -> Branch Head -> Head Coach -> Coach -> Student`

Only an Admin approves accounts. Students cannot create accounts. Branch Heads can request Head Coach, Coach, and Student accounts; Head Coaches can request Coach and Student accounts; Coaches can request Student accounts.

There is deliberately no public sign-up. Account creation and account access are separate:

1. Admin creates an account, or a permitted staff member submits an account request.
2. Admin approves the request. Until then, the person has no usable login.
3. Admin chooses one of two first-access methods:
   - **Send setup link** for normal email-based onboarding.
   - **One-time password** for local testing or when email delivery is unavailable.
4. A person using a one-time password must replace it before the workspace opens.
5. An existing approved user can use **Set or reset password** on the login page at any time.

The password rule is six or more characters with any characters allowed. Six is the lowest password length supported by hosted Supabase Auth.

## Test a newly approved account without another inbox

1. Sign in as Admin and open **People**.
2. Find the account marked **Setup pending**.
3. Choose **One-time password**.
4. Share the displayed email and password with the tester. The password is shown once and is never stored in the business tables.
5. Sign out, then sign in with that email and one-time password.
6. The dashboard requires a private replacement password before showing any workspace data.

For the existing Branch Head, use this process on the **Sirisha** row. This is the fastest complete test because it does not depend on email delivery.

## Test the complete system locally

The website runs on your computer, while test data stays in the connected Supabase sandbox. This gives you production-like Auth, database rules, and Edge Functions without requiring Docker or several real inboxes.

1. Start the site with `corepack pnpm dev`.
2. Open `http://127.0.0.1:4321/dashboard`.
3. Sign in with the original account. It is the active Admin in the current sandbox.
4. Open **Role Lab** and choose **Prepare test roles**.
5. The local browser receives four random, private test logins: Branch Head, Head Coach, Coach, and Student.
6. Use **Sign in** beside each role to check exactly what that person can see and do.
7. Sign back in as Admin and approve the extra pending Student request to test the approval queue.

Role Lab is included only in a development build. Its endpoint accepts only a signed-in Admin request coming from `localhost` or `127.0.0.1`. It uses a new random password each time and never requires shared inboxes. Production builds do not show Role Lab.

## Connect a new production Supabase project

Apply these steps in order.

1. Create the Supabase project.
2. Run every SQL file in `supabase/migrations` in filename order.
3. In **Authentication -> Users**, create the business owner's first user and confirm the email.
4. In **SQL Editor**, run the one-time command below after replacing the example values:

```sql
select private.bootstrap_initial_admin(
  'owner@yourbusiness.com',
  'Owner Name',
  'Main Branch',
  'MAIN'
);
```

The bootstrap is deliberately unavailable to website visitors, signed-in users, and the public API. It refuses to appoint anyone after an active Admin exists. Every later account is created and controlled from the Admin dashboard.

5. Deploy `supabase/functions/manage-accounts/index.ts` as the `manage-accounts` Edge Function with JWT verification enabled.
6. Set the Edge Function secret `APP_URL` to the public website origin, for example `https://app.yourbusiness.com`.
7. In **Authentication -> URL Configuration**, set the same Site URL and allow its `/dashboard` redirect.
8. Configure custom SMTP before inviting real staff or students. Supabase's default mail service is suitable only for limited testing.
9. Add these public values to the website environment:

```dotenv
PUBLIC_SUPABASE_URL=https://YOUR_PROJECT.supabase.co
PUBLIC_SUPABASE_PUBLISHABLE_KEY=YOUR_PUBLISHABLE_KEY
```

Never place `SUPABASE_SERVICE_ROLE_KEY` in the website or any `PUBLIC_` variable. Supabase supplies that secret directly to the deployed Edge Function.

## Production checks

- Keep Row Level Security enabled on every user-data table.
- Keep JWT verification enabled on `manage-accounts`.
- Use invitation emails for real accounts; synthetic `@fcs.test` users are local testing only.
- Review Supabase Security and Performance Advisors after every schema change.
- Enable leaked-password protection in **Authentication -> Security** before launch.
- Back up the database and test account suspension, approval, and recovery before launch.
