# Blog Automation Task Template (Cowork / per-keyword)

Status: Active

Use this as the self-contained prompt for **one independent task per keyword** when
automating blog creation in Cowork. Do not put multiple keywords in one task — each
keyword gets its own task, run in parallel if there are several.

Fill in the two placeholders (`<KEYWORD>`, `<CATEGORY>`) and submit as-is.

---

## Prompt to submit per keyword

```
Write a complete, publish-ready blog post for FutureCareerSchool.

Target keyword: <KEYWORD>
Category: <CATEGORY>   (e.g. career-guidance, skills, salary — leave blank to infer)
Project: C:\Users\Asus\Documents\futurecareer-school-2

Do not summarize or shortcut these steps. Do not rely on any bundled/cached
"blog-writer" skill shorthand — read the actual files below in full, every time
they are referenced.

STEP 0 — Confirm funnel placement (do this before reading anything else):
This template is for TOFU (purely informational) keywords only — the person is
researching, not yet comparing providers/options and not yet ready to hire/book.
Before concluding TOFU, grep src/config/site.ts for
`/services/career-counselling-and-career-guidance/` to see the current live
commercial pages (also check COWORK_KICKOFF_PROMPT.md's "Live commercial pages"
list if present). This site runs audience/situation-segment and city pages
(e.g. after-12th, working professional, low board scores, career-counselling-
in-<city>) that read as plain situational phrases but are commercial, not
blog topics — do not classify a keyword as TOFU just because it lacks an
obvious "vs"/"fees"/"near me" pattern if it closely matches, or is a plausible
new instance of, one of these live pages.
- If the keyword signals comparison or consideration (e.g. "career counselling vs
  career coaching", "career counselling fees", "is career counselling worth it",
  "best career guidance service", "career counselling benefits", or a close
  variant judged by underlying intent, not exact wording) — stop. This is MOFU,
  not blog. Use MOFU_AUTOMATION_TASK_TEMPLATE.md instead.
- If the keyword signals the person is ready to hire, book, or pay, or matches
  an existing audience/situation/city commercial page (e.g. "career coach near
  me", "career counselling online", "career guidance after 12th", "career
  guidance for students who scored low in boards") — stop. This is BOFU, not
  blog. Use BOFU_AUTOMATION_TASK_TEMPLATE.md instead.
- Otherwise, proceed as a blog (TOFU) keyword.
State your classification and a one-sentence reason before continuing.

STEP 1 — Read in full before writing anything:
1. BLOG_WORKFLOW.md
2. BLOG_WRITING_PROMPT.md
3. src/config/blog.ts
4. src/config/site.ts
5. src/layouts/BlogPostLayout.astro
6. src/components/BlogBottomCta.astro
7. The nearest live published blog post for structural reference

STEP 2 — Research phase (mandatory, do not skip):
Follow the research rules in BLOG_WRITING_PROMPT.md exactly — minimum 10-15
distinct sources for broad/competitive keywords, real market data, no invented facts.

STEP 3 — Write the first draft implementing every instruction in
BLOG_WRITING_PROMPT.md. Do not remove existing site content or components
without a clear reason.

STEP 4 — Follow-up pass #1:
Re-read BLOG_WRITING_PROMPT_FOLLOWUP.md IN FULL (all ~78 lines — every checklist
item: positioning checks, holistic skill-approach check, table data-label audit,
wall-of-text check, mobile check, public-copy sweep, design/UX checks). Apply
every relevant item as a fresh editing pass over the current draft.

STEP 5 — Follow-up pass #2:
Re-read BLOG_WRITING_PROMPT_FOLLOWUP.md IN FULL again, as if seeing the article
for the first time. Apply it again. Do not assume pass #1 caught everything —
this pass exists specifically to catch what pass #1 missed.

STEP 6 — Final checks:
- Run `npm run check:public-copy` and fix all failures
- Run `npm run build` and fix all failures
- Register the route in src/config/site.ts under LIVE_INDEXABLE_ROUTES

Do not consider the article done until all of STEP 1-6 are complete. Report
back which sources you used, and confirm both follow-up passes were run.
```

---

## How to run this for a batch of keywords

For each keyword, spawn one independent Agent task (background, in parallel) with
the filled-in prompt above. Do not put a keyword list into a single task — that is
what causes quality to drop, because the model optimizes for finishing the list
instead of running the full pipeline per article.
