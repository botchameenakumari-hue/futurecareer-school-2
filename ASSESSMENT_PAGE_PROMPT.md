# Assessment Page Prompt

**This prompt is fully self-contained. You do not need to read any other markdown/prompt document to use it.**
(It does reference project *code* files — `src/config/*.ts`, layouts, and components — because those are the
implementation files you edit; that is expected and necessary. No other `.md` file needs to be read.)

Use this file for all assessment-, test-, and quiz-intent pages under `/services/assessments/`, especially when the task involves:

- career assessment target phrases
- career test target phrases
- aptitude test target phrases
- psychometric test target phrases
- stream selection test target phrases
- skill assessment target phrases
- quiz-style career-direction target phrases

This file is the source of truth for current and future assessment landing pages, including:

- the shared assessment page system in `src/config/assessmentPages.ts`
- the shared route template in `src/pages/services/assessments/[slug]/index.astro`
- the stage-based assessment pages and focused quiz pages under `src/pages/services/assessments/`

---

## Project context

- **Site:** Future Career School
- **Canonical domain:** `https://futurecareerschool.com` (secondary brand `.in` → alternate only, never canonical; do **not** use `futurecareer.school`)
- **Framework:** Astro 4.x · **Deployment:** Hostinger (Apache / `.htaccess` style) · `build.format: 'directory'`
- **Audiences:** students, freshers, working professionals, career changers — delivered online across India.
- **Positioning:** career strategy, structured decision support, skills and market-fit guidance, income growth, AI-aware planning. Not a generic counselling site.

**Named frameworks (use the exact names; introduce each by its exact name on first use, then reuse consistently):**
Biology Check · IMS Test · the 4-Checkpoint Protocol · the 3 Gates · Freedom Number · Tarzan Rule · Multiplier Skill · T-Shaped Skill Stack · Career Group Engine.

---

## Truth rule — no invention (read first, always)

Only state facts the business actually gave us. You may rephrase, present beautifully, and add genuinely useful
*general* education about a topic — but you may **never invent a deliverable, mechanic, number, price, guarantee,
timeline, or proof point** that wasn't given.

**Approved, on-the-record facts you may state:**
- Future Career School offers **free, updated, practical, AI-powered career and skill assessments**. Many other
  providers charge thousands for outdated or impractical assessments — that honest contrast is approved.
- The only paid branch is **career guidance / career counselling / career coaching** (one practical service family;
  use the searcher's exact term without inventing fake differences between the labels).
- Continuous guidance with an expert plus a small, closely-knit group is the positioning — not one-off sessions.

**Never invent:** pricing/fees (pull pricing only from the shared config — see Shared Plans below; until a number is
approved, use neutral phrasing), guarantees ("guaranteed placement/score/job"), success rates, testimonials, client
counts, accreditations (NSDC/UGC/ISO/"Govt-recognised"), placement percentages, fake reviews, or any result a short
assessment cannot honestly deliver. When unsure: say less, or ask.

---

## Public-copy guardrail (non-negotiable)

Public copy speaks to the **visitor**, never to the developer, editor, prompt, agent, or owner. If a sentence would
make more sense in an assistant response than on the live page, it does not belong on the page.

- Write for the reader's decision, doubt, problem, or next step.
- Do not explain the page's structure, SEO, indexing, URL hierarchy, or scaling logic to the reader.
- No planning language, prompt language, route instructions, or architecture commentary in visible copy.
- Link/card descriptions explain what the destination helps with and who it's for — not where it sits in the site.

**Banned phrases — must never appear in rendered copy:**
`hub page`, `support page`, `related page`, `stage page`, `this page is for…`, `use this page when…`,
`this section can grow cleanly`, `indexable`, `noindex`, `SEO-compatible`, `buyer`, `high-intent`, `keyword intent`,
`for this search`, `searchers who want`, `for people searching`, `why this page exists`, `keep this page focused`,
`broader service model`, `useful next step` (as a bare label), `search intent`, `paid guidance layer`,
`free first layer`, `assessment-first decision`, `more than one assessment can be relevant`, and anything that reads
like route instructions, content-strategy notes, or developer/agent reminders.

After building, run `npm run check:public-copy` (or `npm run verify` for build + both guardrails) and treat any rendered-copy
failure as a release blocker.

---

## Shared System First

- For long-tail assessment, test, or quiz target phrases, use the shared assessment page system first.
- Prefer adding or updating entries inside `src/config/assessmentPages.ts` instead of creating one physical file per phrase.
- Use `src/pages/services/assessments/[slug]/index.astro` as the main shared template for assessment pages.
- Only create a dedicated standalone file when the page truly needs different structure, different logic, or a different assessment experience.

## Page Consolidation and Cannibalization

- One keyword intent → one URL. Use one canonical page for phrases that express the same audience, task, and assessment intent.
- Add close wording variants, word-order variants, and equivalent phrases to that page's copy and metadata instead of creating another indexable URL.
- Preserve every consolidated page's title, H1, and related phrases in the canonical record's `coveredPhrases` field so no researched phrase disappears from the shared system.
- Keep visible copy natural. Show only representative wording variants and do not dump every covered phrase into the page as phrase-stuffed chips or hidden text.
- Create a separate indexable page only when the visitor needs a meaningfully different assessment, audience treatment, result, or decision experience.
- When a stronger canonical assessment replaces a highly similar assessment page, remove the old page from the generated sitemap and redirect its URL to the canonical assessment.
- Redirects for consolidated `[slug]` pages are generated automatically: duplicates listed in `ASSESSMENT_PAGE_REDIRECTS` become real one-hop 301s in `dist/.htaccess` at build time (`integrations/htaccess-redirects.mjs`). Never hand-write a rule that points at another redirecting URL, and never redirect a URL that is a live page. A hand-written rule in `public/.htaccess` must target the final live page.
- Link internally to the canonical assessment URL, not to duplicate variants.
- Do not create many substantially similar pages whose main purpose is forwarding visitors to the same assessment.

## Doorway / uniqueness rules (assessment hubs and quiz variants are high-risk)

Google's scaled-content-abuse and doorway policies penalise thin, templated, near-duplicate pages — and near-identical
quiz variants are exactly where that creeps in.

- **≥ 30% genuinely unique content** per indexable assessment page vs. its nearest sibling (35%+ when many similar
  quiz/test pages exist). Reused business facts, shared chooser copy, and shared CTA labels do **not** count as unique;
  original problem framing, audience-specific guidance, unique result interpretation, and unique FAQ **do**.
- Vary section order/treatment across sibling assessment pages — don't ship the same skeleton with the keyword swapped.
- Unique FAQ questions specific to this assessment's audience and intent (not generic rewrites with the phrase swapped).
- **Pre-publish audit:** find the nearest sibling → highlight text unique to this page → `unique words ÷ total words ≥ 30%`
  → if a page would read identically with the keyword/audience removed, reframe it before publishing.

## Core Funnel Logic

- Assessment intent stays primary.
- The page must first help the visitor take or choose the right free assessment.
- The paid funnel is still important, but it should not overpower the assessment intent at the top of the page.
- All assessment pages should support the only paid service branch: career guidance / career counselling / career coaching, depending on the right service wording and audience.
- Free assessments can narrow confusion, but they should not be framed like they can replace full clarity.
- The paid service should be presented as the stronger layer for fuller decision support, future readiness, high-value skill direction, and earlier financial freedom planning.

## Actual Assessment Result Quality

- A scored assessment should provide more than one total score when the questions measure distinct domains.
- Show domain-level performance, strongest areas, priority gaps, and practical interpretation.
- For numerical and data questions, include the calculation or method in the answer explanation.
- When useful, calculate combined indicators such as quantitative readiness, communication accuracy, problem solving, workplace judgement, consistency, and completion pace.
- Turn results into a practical action plan, including what to practise first and when to retake the assessment.
- Keep diagnostic limits explicit. Do not imply that a short assessment guarantees placement, selection, salary, or complete career clarity.
- If downloadable results are provided, generate a properly paginated multi-page report. Do not rely on `window.print()` or cloned browser content that can be cut across print pages.

## CTA Rules

- The main hero CTA should usually stay assessment-first.
- On assessment pages, the supporting hero CTA should usually jump to `#plans`.
- If the target phrase is broad, the hero should not pretend one random assessment is the only right option.
- Broad target phrases should show multiple relevant free assessment options where appropriate.
- If a broad page already shows the main relevant assessment options clearly near the top, do not repeat the same set again in multiple lower sections.
- Deduplicate repeated assessment mentions wherever possible. One clear chooser is better than three near-identical chooser sections.
- Keep broad chooser copy generic and client-facing. Do not make the chooser paragraph sound like target phrase strategy notes.
- Narrow target phrases can lead with one best-fit free assessment CTA.
- If the page includes a plans section, at least one meaningful CTA on the page should jump to `#plans`.
- Inline result screens, post-result blocks, and next-step sections should usually include a route into `#plans` when the visitor is ready for paid help.
- Assessment pages should usually include the shared guidance bridge before pricing so the paid service is recommended clearly without burying the assessment intent.

## Shared Plans Requirement

- Assessment pages should use the shared `GuidancePlansSection` directly, not a page-local pricing block.
- Assessment pages should use the shared `AssessmentGuidanceCta` before pricing instead of inventing one-off bridge copy.
- Use `sectionId="plans"` so CTAs can jump to the same anchor consistently.
- Drive audience and heading behavior through `src/config/assessmentPlans.ts`.
- Use the shared pricing source in `src/config/guidancePlans.ts`. **Until a price is user-approved, use the neutral phrasing the shared config provides — never hardcode or invent numbers, tiers, durations, or offers.**
- Do not hardcode duplicate pricing blocks on assessment pages.

## Audience Mapping Rules

- Class 10 and below pages: student plans
- Class 11 and 12 pages: student plans
- After-12th assessment/test pages: student plans with after-12th wording where relevant
- Graduate / fresher / early-professional pages: student plans unless the target phrase clearly targets experienced professionals
- Working professional / career changer pages: working-professional plans
- Broad mixed assessment hubs: mixed student + working-professional plans
- If the page shows both student-like and professional assessment choices, the shared guidance bridge and shared plans section should usually switch to mixed mode automatically.

## Placement Rules

- Put the shared guidance bridge and the shared plans section in the lower half of the page, after the main assessment experience and supporting decision content.
- Do not place the pricing/plans section above the main assessment section on assessment-intent pages.
- The page should feel like an assessment page first and a paid-funnel page second.

## Copy Rules

- Keep the free-assessment and paid-guidance copy honest and relevant to the audience.
- Do not invent outcomes, guarantees, timelines, pricing, or new offers.
- Do not force BOFU service-page language into assessment pages if it weakens assessment intent.
- Do not use internal-strategy phrases in live copy, such as `useful next step`, `search intent`, or anything that sounds like planning notes instead of client-facing writing (see the full banned list in the Public-copy guardrail above).
- Do not use wording like `for this search`, `more than one assessment can be relevant`, `searchers who want`, `for people searching`, `paid guidance layer`, `free first layer`, or similar planning / mapping language in live copy.
- Keep the paid guidance transition practical:
  - better decision quality
  - updated support built around the visitor's future, not generic degree-pushing
  - stronger skill direction
  - high-value skill building
  - better positioning
  - more comprehensive future readiness
  - earlier financial freedom planning
- On assessment pages, make it clear that tests can narrow the problem, but fuller clarity usually comes from the guidance / counselling / coaching layer.

## On-page SEO & schema baseline

- Place the target phrase (or a close natural variation) in: the title tag, URL slug, H1, the first sentence, within the first 100 words, the meta description, and at least one H2 — naturally, never stuffed.
- Title: unique, ≤ ~60 chars before the brand suffix, natural Title Case, main phrase first, phrased the way people search ("X vs Y: Which…?", "Free Class 10 Career Test…"). Put a number in when it is true. Never repeat a keyword awkwardly or stack several keywords with commas.
- Meta description: unique, ≤ ~155 chars, stating what the visitor gets plus one concrete detail (question count, what the report covers, "instant result, no sign-up"). Anything past ~160 characters is cut off in results.
- The `<title>` and the H1 may differ. The H1 states the page promise; the title is tuned for the results page. Keep them separate when a shorter search title would weaken the on-page heading.
- **A full stage assessment's title and description must name the narrower tests it contains** (e.g. stream selector test, aptitude test, career interest test), because people search those names, not "career assessment". Check the live Search Console queries for the stage before writing.
- If Search Console shows a page at position ≤ 10 with a CTR under ~1.5%, rewrite the title and description first — that is a snippet problem, not a ranking problem.
- Exactly **one H1** per page; logical H2/H3 with no skipped levels.
- Canonical URL present and matching the final slug (canonical domain `https://futurecareerschool.com`).
- Evergreen copy: no calendar year in slug/title/evergreen headings unless the page is genuinely date-bound.
- Keep critical copy and internal links server-rendered.
- **Schema:** `BreadcrumbList` mirroring the URL; `FAQPage` only when a real FAQ exists on the page; `Service` (or `WebPage`) as fits the page. Never fabricate review schema, authors, or ratings.
- Add the route to `LIVE_INDEXABLE_ROUTES` in `src/config/site.ts` only when the page is genuinely ready to index; the dynamic `[slug]` template generates pages from `assessmentPages.ts` at build time.

## Full Assessments vs Narrower Tests (traffic routing)

Four full assessments are the main product. Each bundles interests, aptitude, thinking/learning style and stage-specific fit (stream, college, role, or pivot readiness) into one report:

| Stage | Full assessment |
|---|---|
| Class 10 and below | `/services/assessments/class-10-and-below/` |
| Class 11 and 12 | `/services/assessments/class-11-to-12/` |
| Graduates and early professionals | `/services/assessments/graduates-and-early-professionals/` |
| Working professionals and career changers | `/services/assessments/working-professionals-and-career-changers/` |

Search demand lands mostly on the narrower tests (stream selector, aptitude, placement, reasoning, personality). Every narrower test and every generated `[slug]` page must therefore send visitors to the full assessment that matches their stage, whenever the stage fits. These rules apply to every new assessment:

- **Single source of truth:** the four assessments (URL, name, audience, question count, minutes, what the report covers) live in `src/config/mainAssessments.ts`. Add or change facts there, not in individual pages. Only state counts and report contents that the assessment really produces.
- **Narrower test pages** use the shared funnel components in `src/components/bofu/`:
  - `MainAssessmentRibbon` under the hero buttons.
  - `MainAssessmentCompare` (a stage-specific test) or `MainAssessmentPicker` (a test that suits every stage) before the quiz when the page has no other upgrade banner. Pass 2–3 honest `narrowChecks` describing only what this quick test measures.
  - `MainAssessmentFunnel` once per page, near the end. It injects a banner and a comparison card into the result screen and adds a dismissible sticky bar, via `public/scripts/main-assessment-cta.js`, without touching the page's own quiz code. Give it the id of the page's result container (`results-container` or `result-shell`). The result markup should keep a headline wrapper (`.res-top` or `.result-head`) and an actions row (`.res-actions` or `.result-actions`) so the blocks land in the right place.
- **Stage mapping:** after-10th stream/aptitude → Class 10 and below; after-12th stream/aptitude → Class 11 and 12; placement, numerical and verbal reasoning → Graduates; personality, learning-style, EQ, entrepreneurial and other stage-neutral tests → the four-card picker.
- **Generated `[slug]` pages** list the matching full assessment first and mark it "Highly recommended". For a new `AssessmentTargetId`, add its mapping in `NARROW_TO_HOLISTIC_TARGET` in `src/pages/services/assessments/[slug]/index.astro` and a "what the full one adds" line in `HOLISTIC_EXTRA_COPY`.
- **Blog posts and service (BOFU/MOFU) pages do not promote the full assessments.** Guidance is the highlighted action there. This routing applies only to assessment pages (the narrower tests, the generated `[slug]` pages and the assessments hub).
- **Never** remove the visitor's quick path: the narrower test must still be takeable. The full assessment is offered as the better, free next step, with honest "free, no sign-up, instant result" wording.
- Do not claim one test replaces the guidance layer; the plans section rules above still apply on every page.
- Click tracking is built in (`main_assessment_click` with `placement` and `target_assessment`). Reuse it; do not invent a second event.

## URLs, Links and Redirects

- The site is served from `build.format: 'directory'`, so every real URL ends with `/`. **All internal links, breadcrumb items, CTA hrefs, canonical URLs and JSON-LD URLs must end with a trailing slash** (`/services/assessments/`, not `/services/assessments`). A slash-less link is a 301 and shows up in Search Console as "Page with redirect".
- Never link internally to a redirecting URL, a redirect stub, or a noindex page. Link to the canonical live page.
- Generated `[slug]` pages reach the sitemap from `assessmentPages.ts` automatically; a dedicated standalone assessment page needs its own `LIVE_INDEXABLE_ROUTES` entry in `src/config/site.ts`. Do not also hand-list redirects for a live page.
- After any assessment change, check that no URL in `dist/sitemap.xml` is redirected by `dist/.htaccess` and that no `.htaccess` rule forms a chain.

## Existing Shared Files to Reuse

- `src/config/assessmentPages.ts`
- `src/config/assessmentPlans.ts`
- `src/config/mainAssessments.ts` (the four full assessments)
- `src/components/bofu/MainAssessment*.astro` and `integrations/htaccess-redirects.mjs` (see the two sections above)
- `src/pages/services/assessments/[slug]/index.astro`
- `src/components/bofu/AssessmentGuidanceCta.astro`
- `src/components/bofu/GuidancePlansSection.astro`
- `src/config/guidancePlans.ts`

## Do Not Do This

- Do not create a brand-new pricing section for each assessment page.
- Do not bypass the plans section with a direct payment button when the page already includes `#plans`.
- Do not turn assessment pages into generic service pages.
- Do not bury the actual assessment CTA under paid-service messaging.

## Before shipping

- One canonical intent per page; metadata / canonical / one H1 / schema set; target phrase in the key zones.
- Approved facts only — no invented pricing, guarantees, outcomes, or accreditations.
- Assessment intent stays primary; guidance bridge + plans sit in the lower half.
- Uniqueness ≥ 30% vs. the nearest sibling; no template-fatigue red flags.
- Run `npm run verify` (build + `check:public-copy` + `check:blog-links`). Treat any guardrail failure as a release blocker.
- Re-check the generated `dist/sitemap.xml` so the new/updated route appears as expected.
- Narrower tests route to the matching full assessment (ribbon, pre-quiz block, result screen); full-assessment titles name the narrower tests they contain.
- Every internal link and JSON-LD URL has a trailing slash; none points at a redirect or noindex URL.
