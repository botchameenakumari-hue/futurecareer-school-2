import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient, type SupabaseClient } from "npm:@supabase/supabase-js@2.112.2";

type Role = "admin" | "branch_head" | "head_coach" | "coach" | "student";
type AccountStatus = "active" | "suspended" | "archived";

type Profile = {
  id: string;
  email: string;
  full_name: string;
  role: Role;
  account_status: string;
  branch_id: string | null;
  supervisor_id: string | null;
  must_change_password?: boolean;
};

type AccountInput = {
  email: string;
  fullName: string;
  role: Exclude<Role, "admin">;
  branchId: string;
  supervisorId: string;
};

const TEST_DOMAIN = "@fcs.test";
const allowedRoles: Role[] = ["admin", "branch_head", "head_coach", "coach", "student"];
const creatableRoles = allowedRoles.filter((role) => role !== "admin") as AccountInput["role"][];
const creationMatrix: Record<Role, AccountInput["role"][]> = {
  admin: ["branch_head", "head_coach", "coach", "student"],
  branch_head: ["head_coach", "coach", "student"],
  head_coach: ["coach", "student"],
  coach: ["student"],
  student: [],
};
const supervisorMatrix: Record<AccountInput["role"], Role[]> = {
  branch_head: ["admin"],
  head_coach: ["branch_head"],
  coach: ["head_coach"],
  student: ["head_coach", "coach"],
};

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};

class HttpError extends Error {
  status: number;

  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

function response(data: unknown, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: { ...corsHeaders, "Content-Type": "application/json" },
  });
}

function requiredString(value: unknown, label: string, maxLength = 200) {
  if (typeof value !== "string") throw new HttpError(400, `${label} is required.`);
  const clean = value.trim().replace(/\s+/g, " ");
  if (!clean || clean.length > maxLength) {
    throw new HttpError(400, `${label} must be between 1 and ${maxLength} characters.`);
  }
  return clean;
}

function normalizeEmail(value: unknown) {
  const email = requiredString(value, "Email", 254).toLowerCase();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    throw new HttpError(400, "Enter a valid email address.");
  }
  return email;
}

function asRole(value: unknown): AccountInput["role"] {
  if (typeof value !== "string" || !creatableRoles.includes(value as AccountInput["role"])) {
    throw new HttpError(400, "Choose a valid account role.");
  }
  return value as AccountInput["role"];
}

function isTestEmail(email: string) {
  return email.endsWith(TEST_DOMAIN);
}

function generateTestPassword() {
  const bytes = crypto.getRandomValues(new Uint8Array(24));
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  const random = Array.from(bytes, (value) => alphabet[value % alphabet.length]).join("");
  return `Fcs!9a${random}`;
}

function generateTemporaryPassword() {
  const bytes = crypto.getRandomValues(new Uint8Array(10));
  const alphabet = "ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz23456789";
  return `FC-${Array.from(bytes, (value) => alphabet[value % alphabet.length]).join("")}`;
}

function cleanBranchCode(value: unknown) {
  if (typeof value !== "string" || !value.trim()) return "";
  const code = value.trim().toUpperCase().replace(/\s+/g, "-");
  if (!/^[A-Z0-9][A-Z0-9-]{1,19}$/.test(code)) {
    throw new HttpError(400, "Use 2-20 letters, numbers, or hyphens for the branch code.");
  }
  return code;
}

function branchCodeSeed(name: string, city: string) {
  const ignored = new Set(["BRANCH", "CENTER", "CENTRE", "OFFICE", "SCHOOL"]);
  const words = `${city} ${name}`
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")
    .toUpperCase()
    .replace(/[^A-Z0-9]+/g, " ")
    .trim()
    .split(/\s+/)
    .filter((word) => word && !ignored.has(word))
    .filter((word, index, allWords) => allWords.indexOf(word) === index);
  const seed = (words.slice(0, 2).join("-") || "BRANCH").slice(0, 20).replace(/-+$/g, "");
  return seed.length > 1 ? seed : `BR-${seed}`;
}

async function uniqueBranchCode(
  service: SupabaseClient,
  requested: unknown,
  name: string,
  city: string,
  excludeBranchId = "",
) {
  const provided = cleanBranchCode(requested);
  const seed = provided || branchCodeSeed(name, city);
  for (let number = 1; number <= 999; number += 1) {
    const ending = number === 1 ? "" : `-${number}`;
    const candidate = `${seed.slice(0, 20 - ending.length).replace(/-+$/g, "")}${ending}`;
    let query = service.from("branches").select("id").eq("code", candidate);
    if (excludeBranchId) query = query.neq("id", excludeBranchId);
    const { data, error } = await query.maybeSingle();
    if (error) throw new HttpError(500, "Could not validate the branch code.");
    if (!data) return candidate;
    if (provided) throw new HttpError(409, "That branch code is already in use.");
  }
  throw new HttpError(409, "Could not generate a unique branch code.");
}

function appOrigin(req: Request) {
  const requestOrigin = req.headers.get("origin");
  if (requestOrigin) {
    try {
      const url = new URL(requestOrigin);
      const isLoopback = ["localhost", "127.0.0.1", "::1"].includes(url.hostname);
      if (isLoopback && (url.protocol === "http:" || url.protocol === "https:")) return url.origin;
    } catch {
      // Use the configured application URL below.
    }
  }

  const configuredUrl = Deno.env.get("APP_URL");
  if (configuredUrl) {
    try {
      const url = new URL(configuredUrl);
      const isLoopback = ["localhost", "127.0.0.1", "::1"].includes(url.hostname);
      if ((isLoopback && url.protocol === "http:") || url.protocol === "https:") return url.origin;
    } catch {
      // Report one useful configuration error below.
    }
  }

  throw new HttpError(500, "The password setup return address is not configured.");
}

function isLocalRequest(req: Request) {
  const origin = req.headers.get("origin");
  if (!origin) return false;
  try {
    const hostname = new URL(origin).hostname;
    return hostname === "localhost" || hostname === "127.0.0.1" || hostname === "::1";
  } catch {
    return false;
  }
}

async function loadActor(service: SupabaseClient, userId: string) {
  const { data, error } = await service
    .from("profiles")
    .select("id,email,full_name,role,account_status,branch_id,supervisor_id,must_change_password")
    .eq("id", userId)
    .single();

  if (error || !data) throw new HttpError(403, "This login does not have an approved profile.");
  if (data.account_status !== "active") {
    throw new HttpError(403, "This account is not active. Ask the Admin to review it.");
  }
  if (!allowedRoles.includes(data.role as Role)) throw new HttpError(403, "This account role is invalid.");
  return data as Profile;
}

async function audit(
  service: SupabaseClient,
  actorId: string,
  action: string,
  details: Record<string, unknown>,
  options: { targetUserId?: string | null; branchId?: string | null; entityType?: string; entityId?: string | null } = {},
) {
  const { error } = await service.from("audit_events").insert({
    actor_id: actorId,
    action,
    target_user_id: options.targetUserId ?? null,
    branch_id: options.branchId ?? null,
    entity_type: options.entityType ?? "",
    entity_id: options.entityId ?? null,
    details,
  });
  if (error) console.error("audit insert failed", error.message);
}

async function validateAccountInput(
  service: SupabaseClient,
  actor: Profile,
  body: Record<string, unknown>,
  allowTestAccounts: boolean,
): Promise<AccountInput & { isTest: boolean }> {
  const input: AccountInput = {
    email: normalizeEmail(body.email),
    fullName: requiredString(body.fullName, "Full name", 100),
    role: asRole(body.role),
    branchId: requiredString(body.branchId, "Branch", 64),
    supervisorId: requiredString(body.supervisorId, "Supervisor", 64),
  };

  if (!creationMatrix[actor.role].includes(input.role)) {
    throw new HttpError(403, `A ${actor.role.replaceAll("_", " ")} cannot create that role.`);
  }
  if (actor.role !== "admin" && actor.branch_id !== input.branchId) {
    throw new HttpError(403, "You can only create accounts inside your own branch.");
  }

  const [{ data: branch, error: branchError }, { data: supervisor, error: supervisorError }] = await Promise.all([
    service.from("branches").select("id,status").eq("id", input.branchId).single(),
    service
      .from("profiles")
      .select("id,email,full_name,role,account_status,branch_id,supervisor_id,must_change_password")
      .eq("id", input.supervisorId)
      .single(),
  ]);

  if (branchError || !branch || branch.status !== "active") throw new HttpError(400, "Choose an active branch.");
  if (supervisorError || !supervisor || supervisor.account_status !== "active" || supervisor.must_change_password) {
    throw new HttpError(400, "Choose an active supervisor who has completed password setup.");
  }
  if (!supervisorMatrix[input.role].includes(supervisor.role as Role)) {
    throw new HttpError(400, "That supervisor does not match the requested role.");
  }
  if (input.role !== "branch_head" && supervisor.branch_id !== input.branchId) {
    throw new HttpError(400, "The supervisor must belong to the same branch.");
  }
  if (actor.role === "coach" && supervisor.id !== actor.id) {
    throw new HttpError(403, "A Coach can only create students assigned to themselves.");
  }
  if (actor.role === "head_coach") {
    const insideOwnTeam = supervisor.id === actor.id || supervisor.supervisor_id === actor.id;
    if (!insideOwnTeam) throw new HttpError(403, "Choose yourself or one of your Coaches as supervisor.");
  }

  const [{ data: existingProfile }, { data: existingRequest }] = await Promise.all([
    service.from("profiles").select("id").eq("email", input.email).maybeSingle(),
    service.from("account_requests").select("id").eq("email", input.email).eq("status", "pending").maybeSingle(),
  ]);
  if (existingProfile) throw new HttpError(409, "An account already exists for this email.");
  if (existingRequest) throw new HttpError(409, "This email already has a pending request.");

  const isTest = isTestEmail(input.email);
  if (isTest && !allowTestAccounts) {
    throw new HttpError(403, "Test emails can only be created from the local Role Lab.");
  }

  return { ...input, isTest };
}

async function createAuthUser(
  service: SupabaseClient,
  account: AccountInput,
  isTest: boolean,
  testPassword?: string,
) {
  if (isTest) {
    if (!testPassword) throw new HttpError(500, "A secure test password was not generated.");
    const { data, error } = await service.auth.admin.createUser({
      email: account.email,
      password: testPassword,
      email_confirm: true,
      user_metadata: { full_name: account.fullName, role: account.role, role_lab: true },
    });
    if (error || !data.user) throw new HttpError(409, error?.message ?? "Could not create the test login.");
    return data.user;
  }

  const { data, error } = await service.auth.admin.createUser({
    email: account.email,
    email_confirm: true,
    user_metadata: { full_name: account.fullName, role: account.role },
  });
  if (error || !data.user) throw new HttpError(409, error?.message ?? "Could not create the approved login.");
  return data.user;
}

async function sendPasswordSetupEmail(mailClient: SupabaseClient, email: string, redirectTo: string) {
  const { error } = await mailClient.auth.resetPasswordForEmail(email, { redirectTo });
  return error?.message ?? null;
}

async function insertActiveProfile(
  service: SupabaseClient,
  account: AccountInput,
  userId: string,
  actorId: string,
  isTest: boolean,
  setupEmailSent: boolean,
) {
  const now = new Date().toISOString();
  const { error } = await service.from("profiles").insert({
    id: userId,
    email: account.email,
    full_name: account.fullName,
    role: account.role,
    account_status: "active",
    branch_id: account.branchId,
    supervisor_id: account.supervisorId,
    created_by: actorId,
    approved_by: actorId,
    approved_at: now,
    must_change_password: !isTest,
    setup_email_sent_at: !isTest && setupEmailSent ? now : null,
    password_set_at: isTest ? now : null,
    avatar_seed: account.email,
  });
  if (error) throw new HttpError(400, error.message);
}

async function provisionAccount(
  service: SupabaseClient,
  mailClient: SupabaseClient,
  actor: Profile,
  account: AccountInput,
  isTest: boolean,
  redirectTo: string,
) {
  const testPassword = isTest ? generateTestPassword() : undefined;
  const user = await createAuthUser(service, account, isTest, testPassword);
  const setupEmailError = isTest
    ? null
    : await sendPasswordSetupEmail(mailClient, account.email, redirectTo);
  try {
    await insertActiveProfile(service, account, user.id, actor.id, isTest, !setupEmailError);
  } catch (error) {
    await service.auth.admin.deleteUser(user.id);
    throw error;
  }
  return { user, testPassword, setupEmailSent: isTest ? false : !setupEmailError };
}

async function createRequest(
  service: SupabaseClient,
  actor: Profile,
  account: AccountInput,
  isTest: boolean,
) {
  const { data, error } = await service
    .from("account_requests")
    .insert({
      email: account.email,
      full_name: account.fullName,
      requested_role: account.role,
      branch_id: account.branchId,
      supervisor_id: account.supervisorId,
      requested_by: actor.id,
      is_test_account: isTest,
    })
    .select("id,email,full_name,requested_role,status,created_at")
    .single();
  if (error || !data) throw new HttpError(400, error?.message ?? "Could not submit the account request.");
  return data;
}

async function requestAccount(
  service: SupabaseClient,
  mailClient: SupabaseClient,
  actor: Profile,
  body: Record<string, unknown>,
  allowTestAccounts: boolean,
  redirectTo: string,
) {
  const { isTest, ...account } = await validateAccountInput(service, actor, body, allowTestAccounts);
  const request = await createRequest(service, actor, account, isTest);
  const approveNow = actor.role === "admin" && body.approveNow !== false;

  if (!approveNow) {
    await audit(service, actor.id, "account_requested", { email: account.email, role: account.role }, {
      branchId: account.branchId,
      entityType: "account_request",
      entityId: request.id,
    });
    return response({ request, message: "Request sent to the Admin for approval." }, 201);
  }

  let provisionedUserId: string | null = null;
  try {
    const { user, testPassword, setupEmailSent } = await provisionAccount(service, mailClient, actor, account, isTest, redirectTo);
    provisionedUserId = user.id;
    const { error } = await service
      .from("account_requests")
      .update({
        status: "approved",
        reviewed_by: actor.id,
        reviewed_at: new Date().toISOString(),
        review_note: "Created and approved by Admin.",
        resulting_user_id: user.id,
      })
      .eq("id", request.id)
      .eq("status", "pending");
    if (error) throw new HttpError(400, error.message);

    await audit(service, actor.id, "account_created_and_approved", { email: account.email, role: account.role }, {
      targetUserId: user.id,
      branchId: account.branchId,
      entityType: "account_request",
      entityId: request.id,
    });
    return response({
      requestId: request.id,
      userId: user.id,
      testPassword,
      setupEmailSent,
      message: isTest
        ? "Test account created and approved."
        : setupEmailSent
          ? "Account approved. A secure password setup email has been sent."
          : "Account approved, but email delivery was unavailable. Create a one-time password from People.",
    }, 201);
  } catch (error) {
    if (provisionedUserId) {
      await service.from("profiles").delete().eq("id", provisionedUserId);
      await service.auth.admin.deleteUser(provisionedUserId);
    }
    await service.from("account_requests").delete().eq("id", request.id);
    throw error;
  }
}

async function validatePendingAssignment(service: SupabaseClient, account: AccountInput) {
  const [{ data: branch, error: branchError }, { data: supervisor, error: supervisorError }, { data: existingProfile }] = await Promise.all([
    service.from("branches").select("id,status").eq("id", account.branchId).single(),
    service.from("profiles").select("id,role,account_status,branch_id,must_change_password").eq("id", account.supervisorId).single(),
    service.from("profiles").select("id").eq("email", account.email).maybeSingle(),
  ]);
  if (existingProfile) throw new HttpError(409, "An account already exists for this email.");
  if (branchError || !branch || branch.status !== "active") {
    throw new HttpError(409, "This request's branch is no longer active. Update the request by rejecting and recreating it.");
  }
  if (supervisorError || !supervisor || supervisor.account_status !== "active" || supervisor.must_change_password) {
    throw new HttpError(409, "This request's supervisor is not ready. Reject and recreate the request.");
  }
  if (!supervisorMatrix[account.role].includes(supervisor.role as Role)) {
    throw new HttpError(409, "This request's supervisor no longer matches the requested role.");
  }
  if (account.role !== "branch_head" && supervisor.branch_id !== account.branchId) {
    throw new HttpError(409, "This request's supervisor is no longer in the selected branch.");
  }
}
async function approveRequest(
  service: SupabaseClient,
  mailClient: SupabaseClient,
  actor: Profile,
  body: Record<string, unknown>,
  redirectTo: string,
) {
  if (actor.role !== "admin") throw new HttpError(403, "Only the Admin can approve accounts.");
  const requestId = requiredString(body.requestId, "Request", 64);
  const note = typeof body.note === "string" ? body.note.trim().slice(0, 500) : "";
  const { data: request, error } = await service
    .from("account_requests")
    .select("*")
    .eq("id", requestId)
    .eq("status", "pending")
    .single();
  if (error || !request) throw new HttpError(404, "That pending request no longer exists.");

  const account: AccountInput = {
    email: request.email,
    fullName: request.full_name,
    role: request.requested_role,
    branchId: request.branch_id,
    supervisorId: request.supervisor_id,
  };
  await validatePendingAssignment(service, account);
  const { user, testPassword, setupEmailSent } = await provisionAccount(
    service,
    mailClient,
    actor,
    account,
    request.is_test_account,
    redirectTo,
  );

  const { data: updated, error: updateError } = await service
    .from("account_requests")
    .update({
      status: "approved",
      reviewed_by: actor.id,
      reviewed_at: new Date().toISOString(),
      review_note: note,
      resulting_user_id: user.id,
    })
    .eq("id", request.id)
    .eq("status", "pending")
    .select("id")
    .single();
  if (updateError || !updated) {
    await service.from("profiles").delete().eq("id", user.id);
    await service.auth.admin.deleteUser(user.id);
    throw new HttpError(409, "The request changed while it was being approved. Please reload.");
  }

  await audit(service, actor.id, "account_approved", { email: account.email, role: account.role, note }, {
    targetUserId: user.id,
    branchId: account.branchId,
    entityType: "account_request",
    entityId: request.id,
  });
  return response({
    userId: user.id,
    testPassword,
    setupEmailSent,
    message: request.is_test_account
      ? "Test account approved."
      : setupEmailSent
        ? "Account approved. A secure password setup email has been sent."
        : "Account approved, but email delivery was unavailable. Create a one-time password from People.",
  });
}

async function rejectRequest(service: SupabaseClient, actor: Profile, body: Record<string, unknown>) {
  if (actor.role !== "admin") throw new HttpError(403, "Only the Admin can reject accounts.");
  const requestId = requiredString(body.requestId, "Request", 64);
  const note = requiredString(body.note, "Reason", 500);
  const { data, error } = await service
    .from("account_requests")
    .update({ status: "rejected", reviewed_by: actor.id, reviewed_at: new Date().toISOString(), review_note: note })
    .eq("id", requestId)
    .eq("status", "pending")
    .select("id,email,requested_role,branch_id")
    .single();
  if (error || !data) throw new HttpError(404, "That pending request no longer exists.");

  await audit(service, actor.id, "account_rejected", { email: data.email, role: data.requested_role, note }, {
    branchId: data.branch_id,
    entityType: "account_request",
    entityId: data.id,
  });
  return response({ message: "Request rejected." });
}

async function createBranch(service: SupabaseClient, actor: Profile, body: Record<string, unknown>) {
  if (actor.role !== "admin") throw new HttpError(403, "Only the Admin can create branches.");
  const name = requiredString(body.name, "Branch name", 100);
  const city = typeof body.city === "string" ? body.city.trim().slice(0, 100) : "";
  const code = await uniqueBranchCode(service, body.code, name, city);

  const { data, error } = await service
    .from("branches")
    .insert({ name, city, code, created_by: actor.id })
    .select("id,name,city,code,status")
    .single();
  if (error || !data) throw new HttpError(409, error?.message ?? "Could not create the branch.");
  await audit(service, actor.id, "branch_created", { name, code, city }, { branchId: data.id, entityType: "branch", entityId: data.id });
  return response({ branch: data, message: `Branch created with code ${code}.` }, 201);
}

async function updateBranch(service: SupabaseClient, actor: Profile, body: Record<string, unknown>) {
  if (actor.role !== "admin") throw new HttpError(403, "Only the Admin can edit branches.");
  const branchId = requiredString(body.branchId, "Branch", 64);
  const name = requiredString(body.name, "Branch name", 100);
  const city = typeof body.city === "string" ? body.city.trim().slice(0, 100) : "";
  const status = body.status === "inactive" ? "inactive" : body.status === "active" ? "active" : null;
  if (!status) throw new HttpError(400, "Choose a valid branch status.");
  const code = await uniqueBranchCode(service, body.code, name, city, branchId);

  if (status === "inactive") {
    const { data: activeAccount, error: activeError } = await service
      .from("profiles")
      .select("id")
      .eq("branch_id", branchId)
      .eq("account_status", "active")
      .limit(1)
      .maybeSingle();
    if (activeError) throw new HttpError(500, "Could not validate branch staffing.");
    if (activeAccount) throw new HttpError(409, "Move or suspend active accounts before deactivating this branch.");
  }

  const { data, error } = await service
    .from("branches")
    .update({ name, city, code, status })
    .eq("id", branchId)
    .select("id,name,city,code,status")
    .single();
  if (error || !data) throw new HttpError(409, error?.message ?? "Could not update the branch.");
  await audit(service, actor.id, "branch_updated", { name, code, city, status }, {
    branchId: data.id,
    entityType: "branch",
    entityId: data.id,
  });
  return response({ branch: data, message: "Branch updated." });
}

async function updateAccount(service: SupabaseClient, actor: Profile, body: Record<string, unknown>) {
  if (actor.role !== "admin") throw new HttpError(403, "Only the Admin can change reporting assignments.");
  const userId = requiredString(body.userId, "Account", 64);
  const fullName = requiredString(body.fullName, "Full name", 100);
  const branchId = requiredString(body.branchId, "Branch", 64);
  const supervisorId = requiredString(body.supervisorId, "Supervisor", 64);
  if (userId === actor.id) throw new HttpError(400, "The Admin account cannot be reassigned here.");

  const [{ data: target, error: targetError }, { data: branch, error: branchError }, { data: supervisor, error: supervisorError }] = await Promise.all([
    service.from("profiles").select("id,email,full_name,role,account_status,branch_id,supervisor_id").eq("id", userId).neq("role", "admin").single(),
    service.from("branches").select("id,status").eq("id", branchId).single(),
    service.from("profiles").select("id,role,account_status,branch_id,must_change_password").eq("id", supervisorId).single(),
  ]);
  if (targetError || !target) throw new HttpError(404, "That account was not found.");
  if (branchError || !branch || branch.status !== "active") throw new HttpError(400, "Choose an active branch.");
  if (supervisorError || !supervisor || supervisor.account_status !== "active" || supervisor.must_change_password) throw new HttpError(400, "Choose an active supervisor who has completed password setup.");
  const role = target.role as AccountInput["role"];
  if (!supervisorMatrix[role]?.includes(supervisor.role as Role)) {
    throw new HttpError(400, "That supervisor does not match this account role.");
  }
  if (role !== "branch_head" && supervisor.branch_id !== branchId) {
    throw new HttpError(400, "The supervisor must belong to the same branch.");
  }
  if (role === "branch_head" && supervisor.role !== "admin") {
    throw new HttpError(400, "A Branch Head must report to the Admin.");
  }

  if (target.branch_id !== branchId) {
    const { data: directReport, error: reportError } = await service
      .from("profiles")
      .select("id")
      .eq("supervisor_id", target.id)
      .not("account_status", "in", '("rejected","archived")')
      .limit(1)
      .maybeSingle();
    if (reportError) throw new HttpError(500, "Could not validate the reporting line.");
    if (directReport) throw new HttpError(409, "Move this account's direct reports before changing its branch.");
  }

  const { data, error } = await service
    .from("profiles")
    .update({ full_name: fullName, branch_id: branchId, supervisor_id: supervisorId })
    .eq("id", target.id)
    .select("id,email,full_name,role,account_status,branch_id,supervisor_id")
    .single();
  if (error || !data) throw new HttpError(409, error?.message ?? "Could not update the account.");
  await audit(service, actor.id, "account_assignment_updated", {
    email: data.email,
    role: data.role,
    previous_branch_id: target.branch_id,
    previous_supervisor_id: target.supervisor_id,
  }, {
    targetUserId: data.id,
    branchId: data.branch_id,
    entityType: "profile",
    entityId: data.id,
  });
  return response({ account: data, message: "Account assignment updated." });
}

async function setAccountStatus(service: SupabaseClient, actor: Profile, body: Record<string, unknown>) {
  if (actor.role !== "admin") throw new HttpError(403, "Only the Admin can change account access.");
  const userId = requiredString(body.userId, "Account", 64);
  const status = body.status as AccountStatus;
  if (!["active", "suspended", "archived"].includes(status)) throw new HttpError(400, "Choose a valid account status.");
  if (userId === actor.id) throw new HttpError(400, "The Admin cannot change their own access here.");

  const { data, error } = await service
    .from("profiles")
    .update({ account_status: status })
    .eq("id", userId)
    .neq("role", "admin")
    .select("id,email,role,branch_id,account_status")
    .single();
  if (error || !data) throw new HttpError(404, "That account was not found.");
  await audit(service, actor.id, "account_status_changed", { email: data.email, role: data.role, status }, {
    targetUserId: data.id,
    branchId: data.branch_id,
    entityType: "profile",
    entityId: data.id,
  });
  return response({ account: data, message: status === "active" ? "Account restored." : `Account ${status}.` });
}

async function loadManagedAccount(service: SupabaseClient, actor: Profile, body: Record<string, unknown>) {
  if (actor.role !== "admin") throw new HttpError(403, "Only the Admin can manage password setup.");
  const userId = requiredString(body.userId, "Account", 64);
  if (userId === actor.id) throw new HttpError(400, "Use the password reset screen for the Admin account.");

  const { data, error } = await service
    .from("profiles")
    .select("id,email,full_name,role,account_status,branch_id,supervisor_id,must_change_password")
    .eq("id", userId)
    .neq("role", "admin")
    .single();
  if (error || !data) throw new HttpError(404, "That account was not found.");
  if (data.account_status !== "active") throw new HttpError(409, "Restore this account before setting its password.");
  return data as Profile;
}

async function sendSetupEmail(
  service: SupabaseClient,
  mailClient: SupabaseClient,
  actor: Profile,
  body: Record<string, unknown>,
  redirectTo: string,
) {
  const target = await loadManagedAccount(service, actor, body);
  const { error: authError } = await service.auth.admin.updateUserById(target.id, { email_confirm: true });
  if (authError) throw new HttpError(409, authError.message);

  const emailError = await sendPasswordSetupEmail(mailClient, target.email, redirectTo);
  if (emailError) throw new HttpError(502, `Supabase could not send the setup email: ${emailError}`);

  const sentAt = new Date().toISOString();
  const { error } = await service.from("profiles").update({
    must_change_password: true,
    setup_email_sent_at: sentAt,
    password_set_at: null,
  }).eq("id", target.id);
  if (error) throw new HttpError(400, error.message);

  await audit(service, actor.id, "password_setup_email_sent", { email: target.email, role: target.role }, {
    targetUserId: target.id,
    branchId: target.branch_id,
    entityType: "profile",
    entityId: target.id,
  });
  return response({ message: `A secure password setup link was sent to ${target.email}.`, sentAt });
}

async function createTemporaryPassword(
  service: SupabaseClient,
  actor: Profile,
  body: Record<string, unknown>,
) {
  const target = await loadManagedAccount(service, actor, body);
  const temporaryPassword = generateTemporaryPassword();
  const { error: authError } = await service.auth.admin.updateUserById(target.id, {
    password: temporaryPassword,
    email_confirm: true,
  });
  if (authError) throw new HttpError(409, authError.message);

  const issuedAt = new Date().toISOString();
  const { error } = await service.from("profiles").update({
    must_change_password: true,
    temporary_password_issued_at: issuedAt,
    password_set_at: null,
  }).eq("id", target.id);
  if (error) throw new HttpError(400, error.message);

  await audit(service, actor.id, "temporary_password_issued", { email: target.email, role: target.role }, {
    targetUserId: target.id,
    branchId: target.branch_id,
    entityType: "profile",
    entityId: target.id,
  });
  return response({
    email: target.email,
    fullName: target.full_name,
    temporaryPassword,
    issuedAt,
    message: "One-time password created. It will not be shown again.",
  });
}

async function completePasswordSetup(
  service: SupabaseClient,
  actor: Profile,
  body: Record<string, unknown>,
) {
  const password = body.newPassword;
  if (typeof password !== "string" || password.length < 4) {
    throw new HttpError(400, "Use at least 4 characters. Any characters are fine.");
  }
  if (/^FC-[A-Za-z0-9]{10}$/.test(password)) {
    throw new HttpError(400, "Choose a new password instead of keeping the one-time password.");
  }
  const { error: authError } = await service.auth.admin.updateUserById(actor.id, { password });
  if (authError) throw new HttpError(400, authError.message);

  const completedAt = new Date().toISOString();
  const { error } = await service.from("profiles").update({
    must_change_password: false,
    password_set_at: completedAt,
  }).eq("id", actor.id);
  if (error) throw new HttpError(400, error.message);

  await audit(service, actor.id, "password_setup_completed", { role: actor.role }, {
    targetUserId: actor.id,
    branchId: actor.branch_id,
    entityType: "profile",
    entityId: actor.id,
  });
  return response({ message: "Password setup completed.", completedAt });
}

async function findAuthUserByEmail(service: SupabaseClient, email: string) {
  for (let page = 1; page <= 5; page += 1) {
    const { data, error } = await service.auth.admin.listUsers({ page, perPage: 200 });
    if (error) throw new HttpError(500, "Could not inspect test logins.");
    const match = data.users.find((user) => user.email?.toLowerCase() === email);
    if (match) return match;
    if (data.users.length < 200) break;
  }
  return null;
}

async function ensureLabUser(
  service: SupabaseClient,
  actor: Profile,
  account: AccountInput,
  password: string,
) {
  const { data: existingProfile } = await service
    .from("profiles")
    .select("id,email,full_name,role,account_status,branch_id,supervisor_id")
    .eq("email", account.email)
    .maybeSingle();

  if (existingProfile) {
    const { error: authUpdateError } = await service.auth.admin.updateUserById(existingProfile.id, {
      password,
      email_confirm: true,
      user_metadata: { full_name: account.fullName, role: account.role, role_lab: true },
    });
    if (authUpdateError) throw new HttpError(500, "Could not refresh test login.");
    const { error } = await service.from("profiles").update({
      full_name: account.fullName,
      role: account.role,
      account_status: "active",
      branch_id: account.branchId,
      supervisor_id: account.supervisorId,
      approved_by: actor.id,
      approved_at: new Date().toISOString(),
      must_change_password: false,
      setup_email_sent_at: null,
      temporary_password_issued_at: null,
      password_set_at: new Date().toISOString(),
    }).eq("id", existingProfile.id);
    if (error) throw new HttpError(400, error.message);
    return existingProfile.id;
  }

  let authUser = await findAuthUserByEmail(service, account.email);
  if (!authUser) authUser = await createAuthUser(service, account, true, password);
  else {
    const { error } = await service.auth.admin.updateUserById(authUser.id, {
      password,
      email_confirm: true,
      user_metadata: { full_name: account.fullName, role: account.role, role_lab: true },
    });
    if (error) throw new HttpError(400, error.message);
  }
  await insertActiveProfile(service, account, authUser.id, actor.id, true, false);
  return authUser.id;
}

async function seedRoleLab(
  service: SupabaseClient,
  actor: Profile,
  body: Record<string, unknown>,
  localRequest: boolean,
) {
  if (actor.role !== "admin") throw new HttpError(403, "Only the Admin can prepare the Role Lab.");
  if (!localRequest || body.confirmation !== "prepare-local-role-lab") {
    throw new HttpError(403, "The Role Lab can only be prepared from the local dashboard.");
  }

  const { data: branch, error: branchError } = await service
    .from("branches")
    .upsert({ name: "Role Lab", code: "LAB", city: "Local testing", status: "active", created_by: actor.id }, { onConflict: "code" })
    .select("id,name,code")
    .single();
  if (branchError || !branch) throw new HttpError(400, branchError?.message ?? "Could not prepare the test branch.");

  const accounts: Array<{ email: string; fullName: string; role: AccountInput["role"]; password: string }> = [];
  const branchHeadPassword = generateTestPassword();
  const branchHeadId = await ensureLabUser(service, actor, {
    email: "branch.head@fcs.test", fullName: "Aarav Branch Head", role: "branch_head", branchId: branch.id, supervisorId: actor.id,
  }, branchHeadPassword);
  accounts.push({ email: "branch.head@fcs.test", fullName: "Aarav Branch Head", role: "branch_head", password: branchHeadPassword });
  const headCoachPassword = generateTestPassword();
  const headCoachId = await ensureLabUser(service, actor, {
    email: "head.coach@fcs.test", fullName: "Diya Head Coach", role: "head_coach", branchId: branch.id, supervisorId: branchHeadId,
  }, headCoachPassword);
  accounts.push({ email: "head.coach@fcs.test", fullName: "Diya Head Coach", role: "head_coach", password: headCoachPassword });
  const coachPassword = generateTestPassword();
  const coachId = await ensureLabUser(service, actor, {
    email: "coach@fcs.test", fullName: "Kabir Coach", role: "coach", branchId: branch.id, supervisorId: headCoachId,
  }, coachPassword);
  accounts.push({ email: "coach@fcs.test", fullName: "Kabir Coach", role: "coach", password: coachPassword });
  const studentPassword = generateTestPassword();
  const studentId = await ensureLabUser(service, actor, {
    email: "student@fcs.test", fullName: "Meera Student", role: "student", branchId: branch.id, supervisorId: coachId,
  }, studentPassword);
  accounts.push({ email: "student@fcs.test", fullName: "Meera Student", role: "student", password: studentPassword });

  const { data: pending } = await service
    .from("account_requests")
    .select("id")
    .eq("email", "approval.student@fcs.test")
    .eq("status", "pending")
    .maybeSingle();
  if (!pending) {
    await service.from("account_requests").insert({
      email: "approval.student@fcs.test",
      full_name: "Riya Approval Student",
      requested_role: "student",
      branch_id: branch.id,
      supervisor_id: coachId,
      requested_by: coachId,
      is_test_account: true,
    });
  }

  await service.from("student_constraints").upsert({
    student_id: studentId,
    budget_range: "limited",
    available_hours_per_week: 8,
    max_commute_minutes: 45,
    willing_to_relocate: false,
    family_expectations: "Family prefers a degree path with a clear employment outcome.",
    work_or_care_responsibilities: "Helps at the family shop on weekends.",
    preferred_languages: ["English", "Hindi"],
    device_access: "shared-computer",
    internet_access: "mobile-only",
    education_timeline: "Wants to begin a practical course within 12 months.",
    risk_tolerance: 2,
    study_abroad_interest: "maybe",
    non_negotiables: ["Affordable fees", "Recognised qualification"],
    updated_by: studentId,
  }, { onConflict: "student_id" });

  await audit(service, actor.id, "role_lab_seeded", { account_count: accounts.length, branch_code: "LAB" }, {
    branchId: branch.id,
    entityType: "branch",
    entityId: branch.id,
  });
  return response({
    branch,
    accounts,
    approvalCandidate: { email: "approval.student@fcs.test" },
    message: "Role Lab is ready. Four active roles and one pending approval are available.",
  });
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: corsHeaders });
  if (req.method !== "POST") return response({ error: "Method not allowed." }, 405);

  try {
    const contentLength = Number(req.headers.get("content-length") ?? 0);
    if (contentLength > 24_000) throw new HttpError(413, "Request is too large.");

    const authHeader = req.headers.get("Authorization");
    if (!authHeader?.startsWith("Bearer ")) throw new HttpError(401, "Sign in to continue.");
    const supabaseUrl = Deno.env.get("SUPABASE_URL");
    const anonKey = Deno.env.get("SUPABASE_ANON_KEY");
    const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
    if (!supabaseUrl || !anonKey || !serviceKey) throw new HttpError(500, "Function configuration is incomplete.");

    const token = authHeader.slice(7);
    const authClient = createClient(supabaseUrl, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
      global: { headers: { Authorization: authHeader } },
    });
    const { data: userData, error: userError } = await authClient.auth.getUser(token);
    if (userError || !userData.user) throw new HttpError(401, "Your session is no longer valid.");

    const service = createClient(supabaseUrl, serviceKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const mailClient = createClient(supabaseUrl, anonKey, {
      auth: { persistSession: false, autoRefreshToken: false },
    });
    const actor = await loadActor(service, userData.user.id);
    const body = await req.json() as Record<string, unknown>;
    const localRequest = isLocalRequest(req);
    const allowTestAccounts = localRequest && actor.role === "admin";
    if (actor.must_change_password && body.action !== "complete-password-setup") {
      throw new HttpError(403, "Choose your permanent password before using the workspace.");
    }

    switch (body.action) {
      case "request-account": {
        const needsSetupEmail = actor.role === "admin" && body.approveNow !== false;
        const redirectTo = needsSetupEmail ? `${appOrigin(req)}/dashboard` : "";
        return await requestAccount(service, mailClient, actor, body, allowTestAccounts, redirectTo);
      }
      case "approve-request":
        return await approveRequest(service, mailClient, actor, body, `${appOrigin(req)}/dashboard`);
      case "reject-request":
        return await rejectRequest(service, actor, body);
      case "create-branch":
        return await createBranch(service, actor, body);
      case "update-branch":
        return await updateBranch(service, actor, body);
      case "update-account":
        return await updateAccount(service, actor, body);
      case "set-account-status":
        return await setAccountStatus(service, actor, body);
      case "send-setup-email":
        return await sendSetupEmail(service, mailClient, actor, body, `${appOrigin(req)}/dashboard`);
      case "create-temporary-password":
        return await createTemporaryPassword(service, actor, body);
      case "complete-password-setup":
        return await completePasswordSetup(service, actor, body);
      case "seed-role-lab":
        return await seedRoleLab(service, actor, body, localRequest);
      default:
        throw new HttpError(400, "Unknown account action.");
    }
  } catch (error) {
    if (error instanceof HttpError) return response({ error: error.message }, error.status);
    if (error instanceof SyntaxError) return response({ error: "Send a valid JSON request." }, 400);
    console.error(error);
    return response({ error: "The account service could not complete this action." }, 500);
  }
});
