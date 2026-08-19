# BOFU Page Automation Task Template (Cowork / per-keyword)

Status: Active

Use this as the self-contained prompt for **one independent task per keyword** when
automating BOFU service page creation in Cowork. Do not put multiple keywords in
one task — each keyword gets its own task, run in parallel if there are several.

Fill in the placeholder (`<KEYWORD>`) and submit as-is.

---

## Prompt to submit per keyword

```
Create a complete, publish-ready BOFU service page for FutureCareerSchool.

Target keyword: <KEYWORD>
Project: C:\Users\Asus\Documents\futurecareer-school-2

Do not summarize or shortcut these steps. Do not rely on any bundled/cached
"bofu-writer" skill shorthand — read the actual files below in full, every time
they are referenced.

STEP 0 — Confirm funnel placement (do this before reading anything else):
This template is for BOFU keywords only — the person is ready to hire, book, or
pay, not just researching or comparing. This includes keywords that match an
existing live audience/situation-segment or city page (grep src/config/site.ts
for `/services/career-counselling-and-career-guidance/`, and check
COWORK_KICKOFF_PROMPT.md's "Live commercial pages" list if present) — e.g.
"career guidance after 12th", "working professional career guidance", "career
guidance for students who scored low in boards" are BOFU even though they read
as plain situational phrases rather than an obvious "near me"/"online" pattern.
- If the keyword is purely informational (researching, not comparing providers
  or ready to act, and does not match an existing live commercial page) — stop.
  This is a blog (TOFU) keyword, not BOFU. Use BLOG_AUTOMATION_TASK_TEMPLATE.md
  instead.
- If the keyword signals comparison/consideration without commitment yet (e.g.
  "career counselling vs career coaching", "career counselling fees", "is career
  counselling worth it", "career counselling benefits", or a close variant) —
  stop. This is MOFU, not BOFU. Use MOFU_AUTOMATION_TASK_TEMPLATE.md instead.
- Otherwise, proceed as a BOFU keyword.
State your classification and a one-sentence reason before continuing.

STEP 1 — Read in full before writing anything:
1. BOFU_PAGE_PROMPT.md
2. src/config/bofu.ts (shared comparison library and default CTA destinations)
3. src/config/site.ts (LIVE_INDEXABLE_ROUTES, SITE_URL, CONTACT, WHATSAPP links)
4. The nearest live published BOFU page for structural reference

STEP 2 — Keyword and competitive research:
Follow the research and keyword-intent rules in BOFU_PAGE_PROMPT.md exactly.
Do not invent business facts, pricing, guarantees, or frameworks — use only the
approved facts and pricing listed in BOFU_PAGE_PROMPT_FOLLOWUP.md's
"Approved Business Facts" section.

STEP 3 — Write the first draft implementing every instruction in
BOFU_PAGE_PROMPT.md (comparison matrix, CTAs, schema, structure). Do not remove
existing site content or components without a clear reason.

STEP 4 — Follow-up pass #1:
Re-read BOFU_PAGE_PROMPT_FOLLOWUP.md IN FULL (all ~327 lines — approved business
facts and pricing check, positioning checks, design/UX checks, mobile checks,
public-copy sweep, everything). Apply every relevant item as a fresh editing
pass over the current draft.

STEP 5 — Follow-up pass #2:
Re-read BOFU_PAGE_PROMPT_FOLLOWUP.md IN FULL again, as if seeing the page for
the first time. Apply it again. Do not assume pass #1 caught everything — this
pass exists specifically to catch what pass #1 missed.

STEP 6 — Final checks:
- Verify all pricing and CTA links match src/config/guidancePlans.ts and the
  approved CTA destinations exactly — no invented tiers, discounts, or promises
- Run `npm run check:public-copy` and fix all failures
- Run `npm run build` and fix all failures
- Add the route to LIVE_INDEXABLE_ROUTES in src/config/site.ts
- Confirm the page appears through src/config/directory.ts on the relevant parent browsing/directory page; add curated metadata there only if the fallback title/description is not good enough
- If COWORK_KICKOFF_PROMPT.md exists in this project, append this page's slug as a one-line
  bullet under its "Live commercial pages" BOFU list (direct-intent, audience/situation-segment,
  or city, whichever applies), so future keyword batches see it as precedent when classifying.

Do not consider the page done until all of STEP 1-6 are complete. Report back
which comparison rows/facts you used, and confirm both follow-up passes were run.
```

---

## How to run this for a batch of keywords

For each keyword, spawn one independent Agent task (background, in parallel) with
the filled-in prompt above. Do not put a keyword list into a single task — that is
what causes quality to drop, because the model optimizes for finishing the list
instead of running the full pipeline per page.
