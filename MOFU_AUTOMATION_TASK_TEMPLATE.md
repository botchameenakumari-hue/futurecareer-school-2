# MOFU Page Automation Task Template (Cowork / per-keyword)

Status: Active

Use this as the self-contained prompt for **one independent task per keyword** when automating MOFU
(middle-of-funnel comparison/consideration) page creation in Cowork. Do not put multiple keywords in
one task — each keyword gets its own task, run in parallel if there are several.

Fill in the placeholder (`<KEYWORD>`) and submit as-is.

---

## Prompt to submit per keyword

```
Create a complete, publish-ready MOFU (middle-of-funnel) page for FutureCareerSchool.

Target keyword: <KEYWORD>
Project: C:\Users\Asus\Documents\futurecareer-school-2

Do not summarize or shortcut these steps. Do not rely on any bundled/cached skill shorthand —
read the actual files below in full, every time they are referenced.

STEP 0 — Confirm funnel placement (do this before reading anything else):
This template is for MOFU keywords only — the person knows the category and is weighing
options, cost, format, or providers, but has not committed yet. This includes close variants
of "is X worth it" / "X benefits" / "X fees" judged by underlying intent, not exact wording.
- If the keyword is purely informational and the person is not yet comparing options or
  providers, AND it does not match an existing live commercial page (grep src/config/site.ts
  for `/services/career-counselling-and-career-guidance/`, and check COWORK_KICKOFF_PROMPT.md's
  "Live commercial pages" list if present) — stop. This is a blog (TOFU) keyword, not MOFU. Use
  BLOG_AUTOMATION_TASK_TEMPLATE.md instead.
- If the keyword already signals the person is ready to hire, book, or pay, or matches an
  existing audience/situation/city commercial page already live on the site (e.g. "career
  counselling online", "career coach near me", "career guidance after 12th", "career guidance
  for students who scored low in boards") — stop. This is BOFU, not MOFU. Use
  BOFU_AUTOMATION_TASK_TEMPLATE.md instead.
- Otherwise, proceed as a MOFU keyword.
State your classification and a one-sentence reason before continuing.

STEP 1 — Read in full before writing anything:
1. MOFU_PAGE_PROMPT.md
2. src/config/bofu.ts (shared comparison library and default CTA destinations — MOFU reuses this,
   do not invent a separate library)
3. src/config/site.ts (LIVE_INDEXABLE_ROUTES, SITE_URL, CONTACT)
4. src/pages/services/career-counselling-and-career-guidance/index.astro (parent hub, for tone
   and CTA anchors)
5. The nearest live published BOFU child page for structural/visual reference

STEP 2 — Research and honesty check:
Research the real comparison or consideration question behind this keyword the way a blog article
would — genuine trade-offs, not a one-sided pitch. Do not invent business facts, pricing, or
guarantees — use only the approved facts and pricing listed in MOFU_PAGE_PROMPT.md and
MOFU_PAGE_PROMPT_FOLLOWUP.md's "Approved Business Facts" sections.

STEP 3 — Write the first draft implementing every instruction in MOFU_PAGE_PROMPT.md: an honest
answer to the comparison, Future Career School's advantage woven into that answer (not just the
CTA), and easy low-pressure next steps at the natural decision points. No direct-payment hero CTA.
Schema is Article (+ FAQPage if real FAQs exist) + BreadcrumbList — not Service.

STEP 4 — Follow-up pass #1:
Re-read MOFU_PAGE_PROMPT_FOLLOWUP.md IN FULL. Run the "Three-Part MOFU Balance Check" first — does
the page answer the real question, is FCS's advantage visible in the body (not just the CTA), and
is there an easy next step at the decision point. Then apply every remaining checklist item as a
fresh editing pass over the current draft.

STEP 5 — Follow-up pass #2:
Re-read MOFU_PAGE_PROMPT_FOLLOWUP.md IN FULL again, as if seeing the page for the first time. Apply
it again. Do not assume pass #1 caught everything — this pass exists specifically to catch what
pass #1 missed. Pay particular attention to whether the page has drifted too far toward neutral
blog tone (no visible business advantage) or too far toward BOFU hard-sell (direct-payment CTA,
one-sided pitch with no honest trade-off).

STEP 6 — Final checks:
- Verify all pricing and CTA links match src/config/guidancePlans.ts and the approved CTA
  destinations exactly — no invented tiers, discounts, or promises, and no direct Razorpay link
  from this page (route through the relevant BOFU sibling or its #plans anchor instead)
- Run `npm run check:public-copy` and fix all failures
- Run `npm run build` and fix all failures
- Add the route to LIVE_INDEXABLE_ROUTES in src/config/site.ts, nested under the correct
  /services/career-counselling-and-career-guidance/ parent - not under /blog/
- Confirm the page appears through src/config/directory.ts on the relevant parent browsing/directory page; add curated metadata there only if the fallback title/description is not good enough
- If COWORK_KICKOFF_PROMPT.md exists in this project, append this page's slug as a one-line
  bullet under its "Live commercial pages" MOFU list, so future keyword batches see it as
  precedent when classifying similar keywords.

Do not consider the page done until all of STEP 1-6 are complete. Report back which comparison
rows/facts you used, confirm both follow-up passes were run, and confirm the Three-Part MOFU
Balance Check passed.
```

---

## How to run this for a batch of keywords

For each keyword, spawn one independent Agent task (background, in parallel) with the filled-in
prompt above. Do not put a keyword list into a single task — that is what causes quality to drop,
because the model optimizes for finishing the list instead of running the full pipeline per page.

Before batching MOFU keywords at scale, check that no two keywords in the batch are trivially
reordered versions of the same comparison (e.g. "career counselling vs career coaching" and "career
coaching vs career counselling") — those must resolve to one page, not two.
