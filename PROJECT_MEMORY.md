# Project Memory

Status: Evergreen baseline
Project folder (active writable copy): `C:\Users\Asus\Documents\futurecareer-school-2`
Older workspace copy: `C:\Users\Asus\Documents\New project\futurecareer-school`

Current-state note:
- for exact live routes and sitemap truth, trust `src/config/site.ts` first
- this memory file is the orientation layer, but route-level details can lag behind active publishing work

## Source of Truth

Future agents should treat these files as the main orientation layer before making changes:

1. `PROJECT_MEMORY.md`
2. `SEO_ARCHITECTURE.md`
3. `SEO_CONTENT_STRATEGY.md`
4. `BOFU_PAGE_PROMPT.md`
5. `BLOG_WORKFLOW.md`
6. `BLOG_WRITING_PROMPT.md`
7. `BLOG_WRITING_PROMPT_SOURCE.md`
8. `BLOG_WRITING_PROMPT_FOLLOWUP.md`
9. `src/config/site.ts`
10. `src/layouts/BaseLayout.astro`
11. `src/components/Nav.astro`
12. `src/components/Footer.astro`
13. `src/pages/index.astro`
14. `src/pages/services/index.astro`
15. `src/pages/career-skills-compass.astro`
16. `src/pages/career-resources.astro`
17. `src/pages/services/assessments/index.astro`
18. `src/pages/services/career-counselling-and-career-guidance/index.astro`
19. `src/pages/services/career-counselling-and-career-guidance/career-guidance/index.astro`
20. `src/config/blog.ts`
21. `src/pages/blog/index.astro`
22. `src/pages/blog/[category]/index.astro`
23. `src/layouts/BlogPostLayout.astro`
24. `src/components/BlogBottomCta.astro`
25. `src/pages/404.astro`
26. `src/pages/blog/career-guidance/how-to-choose-a-career-after-12th/index.astro`
27. `public/blog/how-to-choose-a-career-after-12th-decision-scorecard.svg`
28. `public/blog/how-to-choose-a-career-after-12th-career-lane-map.svg`
29. `src/config/assessmentPages.ts`
30. `src/pages/services/assessments/[slug]/index.astro`

Blog-task read order:
- for new blog work, read `BLOG_WORKFLOW.md` first
- then read `BLOG_WRITING_PROMPT.md`
- the core general SEO rules from `SEO_CONTENT_STRATEGY.md` are copied into the workflow and prompt files; open `SEO_CONTENT_STRATEGY.md` directly only when deeper strategy confirmation is needed
- use `BLOG_WRITING_PROMPT_SOURCE.md` when exact uploaded wording or edge-case context needs verification
- read `BLOG_WRITING_PROMPT_FOLLOWUP.md` when the user wants a second-pass expansion, refinement, or completeness check after the first article draft
- then open targeted code/config files as needed
- use `PROJECT_MEMORY.md` and `SEO_ARCHITECTURE.md` as master references when deeper detail is needed

BOFU service-page read order:
- for bottom-of-funnel service pages, read `BOFU_PAGE_PROMPT.md`
- then read `SEO_CONTENT_STRATEGY.md`
- then read `SEO_ARCHITECTURE.md`
- inspect the nearest live service page before changing or creating page copy

## Domain and Brand

Primary canonical brand/domain:
- `https://futurecareerschool.com`

Secondary brand domain:
- `https://futurecareerschool.in`

Do not use `futurecareer.school` as the canonical production domain.
That was an older assumption and should now be treated as incorrect for future SEO and content work.

## Current Technical Stack

- Framework: Astro 4.x
- Site config: `astro.config.mjs`
- Global SEO/layout shell: `src/layouts/BaseLayout.astro`
- Shared content/navigation: `src/components/Nav.astro`, `src/components/Footer.astro`
- Main authored pages: Astro pages under `src/pages`
- Legacy pages still present: plain `.html` files under `src/pages`
- Generated output: `dist/*`
- Vendor dependencies: `node_modules/*`

## Core Site Identity

This is not positioned as a generic counseling website.

The project is positioned as:
- career strategy
- structured decision support
- skills and market-fit guidance
- income growth and leverage planning
- AI-aware career planning
- India-first delivery with online reach across cities

Main audiences:
- students
- freshers
- working professionals
- coaches or internal training users

Evergreen narrative rule:
- avoid explicit calendar dates in evergreen marketing copy unless the page is truly date-bound
- prefer language like `current market`, `present situation`, `future-ready`, or `long-term`
- this rule does not ban showing a blog's publishing date
- allowed: visible publish date, metadata date, schema date, or updated date for the article itself
- avoid putting year-based topic framing into evergreen titles, headings, slugs, or marketing copy unless the page is intentionally date-bound

Important content rule:
- never put internal agent explanations, architecture notes, or chat-style answers into public website copy
- website pages should read as client-facing marketing/service content, not a conversation with the developer
- BOFU/service pages should avoid article-style jump-nav blocks under the hero and should avoid eyebrow/kicker labels above normal body sections
- on BOFU/service pages, keep those small labels mainly to the hero badge, FAQ label, and final `Next step` CTA unless the user explicitly asks for another pattern

## Current Live SEO Architecture

The public XML sitemap should only contain live, indexable pages.
Planned pages belong in documentation until they are actually published with real content.

Current live indexable routes are defined in `src/config/site.ts` as `LIVE_INDEXABLE_ROUTES`:
- `/`
- `/services`
- `/services/career-counselling-and-career-guidance`
- `/services/career-counselling-and-career-guidance/career-guidance`
- `/services/career-counselling-and-career-guidance/career-counselling`
- `/services/career-counselling-and-career-guidance/career-counselling-online`
- `/services/career-counselling-and-career-guidance/locations`
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-visakhapatnam`
- `/services/career-counselling-and-career-guidance/career-coach-near-me`
- `/services/career-counselling-and-career-guidance/student-career-guidance`
- `/services/career-counselling-and-career-guidance/career-guidance-after-12th`
- `/services/career-counselling-and-career-guidance/career-guidance-after-12th-online`
- `/services/career-counselling-and-career-guidance/career-guidance-online`
- `/services/career-counselling-and-career-guidance/working-professional-career-guidance`
- `/services/assessments`
- `/services/assessments/class-10-and-below`
- `/services/assessments/class-11-to-12`
- `/services/assessments/graduates-and-early-professionals`
- `/services/assessments/working-professionals-and-career-changers`
- `/services/assessments/stream-selector-test-after-10th`
- `/services/assessments/career-aptitude-test-after-10th`
- `/services/assessments/stream-selector-test-after-12th`
- `/services/assessments/career-aptitude-test-after-12th`
- `/career-resources`
- `/career-resources/biology-check-thinking-style`
- `/career-resources/biology-check-self-assessment`
- `/career-resources/how-to-pick-the-right-online-course`
- `/career-resources/skill-sampling-try-before-you-commit`
- `/career-resources/t-shaped-skill-stack-builder`
- `/career-resources/freedom-number-how-much-do-you-actually-need-to-earn`
- `/career-resources/the-4-checkpoint-career-protocol-explained`
- `/career-resources/3-career-profiles-which-type-are-you`
- `/career-resources/career-profile-quiz-perfect-plan-passion-or-empire-builder`
- `/career-resources/are-you-a-people-thinker-or-systems-thinker`
- `/career-resources/what-to-do-when-your-passion-doesnt-pay`
- `/career-resources/multiplier-skill-guide-one-addition-that-doubles-value`
- `/career-resources/tarzan-rule-the-exact-moment-to-quit-your-job`
- `/career-resources/night-shift-plan-learn-7pm-11pm-without-burning-out`
- `/career-resources/how-to-ai-proof-your-career`
- `/career-resources/ai-multiplier-skills-for-the-next-decade`
- `/career-resources/side-income-while-employed-7-legit-options`
- `/career-resources/career-change-without-starting-over`
- `/career-resources/creating-a-portfolio-without-work-experience`
- `/career-resources/personal-brand-without-posting-every-day`
- `/career-resources/resume-that-gets-shortlisted-in-india`
- `/career-resources/prompt-engineering-for-non-technical-professionals`
- `/career-resources/using-ai-tools-without-getting-replaced`
- `/career-resources/tech-leverage-automate-80-percent-of-your-work-reclaim-4-hours`
- `/career-resources/linkedin-profile-optimization-the-full-guide`
- `/career-resources/arts-and-humanities-careers-that-pay-well-today`
- `/career-resources/new-jobs-ai-will-create-not-just-replace`
- `/career-resources/github-for-non-developers-build-a-portfolio-without-code`
- `/career-resources/from-employee-to-freelancer-the-real-roadmap`
- `/career-resources/how-indian-freelancers-make-1-5-lakh-month`
- `/career-resources/digital-marketing-career-roadmap`
- `/career-resources/data-science-analytics-career-roadmap`
- `/career-resources/ux-ui-design-career-roadmap`
- `/career-resources/web-development-career-roadmap`
- `/career-resources/video-editing-content-creation-roadmap`
- `/career-resources/copywriting-career-roadmap`
- `/career-resources/graphic-design-career-roadmap`
- `/career-resources/ai-prompt-engineering-roadmap`
- `/career-resources/how-to-ask-for-a-salary-raise-with-scripts`
- `/career-resources/salary-negotiation-what-to-say-and-what-never-to-say`
- `/career-resources/sales-career-roadmap-from-rep-to-revenue-leader`
- `/career-resources/financial-modelling-career-roadmap`
- `/career-resources/high-income-skills-for-the-next-decade`
- `/career-skills-compass`
- `/blog`
- `/blog/career-guidance`
- `/blog/career-guidance/how-to-choose-a-career-after-12th`

Current generated SEO endpoints:
- `src/pages/sitemap.xml.ts`
- `src/pages/robots.txt.ts`

Current redirect support:
- `public/.htaccess` for Hostinger / Apache-style permanent redirects
- Hostinger hPanel Redirects can be used instead of `.htaccess` if preferred
- `src/pages/topics-index.astro` fallback redirect shim

Assessment page routing note:
- broader assessment-intent routes under `/services/assessments/[slug]/` are now generated from `src/config/assessmentPages.ts`
- use that config as the source of truth for the live assessment-page landing set

Important rule:
- do not add thin placeholder pages to the XML sitemap just to "reserve" URLs
- do not add noindex pages to the XML sitemap
- do not add redirects to the XML sitemap
- do not block `/_astro/` assets in `robots.txt`
- do not reintroduce Netlify-only or Vercel-only redirect files unless deployment platform changes

## Current Noindex or Non-Primary Routes

These routes exist but should not be treated as primary indexable landing pages:

- `src/pages/topics-index.astro`
  - redirect shim to `/career-resources`
  - `noindex, nofollow`

- `src/pages/career-landing.html`
  - legacy landing page
  - currently canonicalized to home and marked `noindex,follow`

- `src/pages/coaches-dashboard.html`
  - internal/training-facing page
  - currently `noindex,nofollow`
  - should not be surfaced in main public navigation

- `src/pages/404.astro`
  - not-found fallback page
  - marked `noindex`
  - links users back to live hubs instead of leaving dead ends

## Shared SEO/Config Files

### `astro.config.mjs`
- canonical site is set to `https://futurecareerschool.com`
- build output uses directory format so generated URLs map cleanly to subfolder-style pages in `dist`

### `public/.htaccess`
- Hostinger-ready redirect file copied into `dist` at build time
- consolidates the `.in` alternate domain into the canonical `.com` domain when both are pointed at the same site
- currently handles HTTPS/non-`www` normalization for `.com`
- currently handles the retired `/topics-index` route with a permanent redirect
- if deployment platform changes away from Hostinger/Apache-style hosting, revisit this file

### Hostinger deployment note
- deploy the built contents of `dist/*` into the domain's web root, typically `public_html`
- make sure `.htaccess` is present in the deployed root after upload
- SSL should be active before relying on HTTPS normalization
- after deployment, manually verify `robots.txt`, `sitemap.xml`, `/topics-index`, `http://futurecareerschool.com`, and `http://www.futurecareerschool.com`

### `src/config/site.ts`
Contains the main reusable SEO constants:
- `SITE_NAME`
- `SITE_URL`
- `SITE_ALTERNATE_URLS`
- `DEFAULT_OG_IMAGE_PATH`
- `DEFAULT_OG_IMAGE_URL`
- `CONTACT`
- `WHATSAPP_BASE_URL`
- `WHATSAPP_BOOKING_URL`
- `LIVE_INDEXABLE_ROUTES`

Future agents should update `LIVE_INDEXABLE_ROUTES` whenever a new public indexable page is launched.

### `src/layouts/BaseLayout.astro`
Responsibilities:
- title and description tags
- canonical handling
- robots meta handling
- Open Graph and Twitter tags
- JSON-LD injection
- default OG image based on `DEFAULT_OG_IMAGE_URL`

This is the central SEO wrapper for modern Astro pages.

### `src/components/BlogBottomCta.astro`
Role:
- standard reusable CTA for blog posts
- should be used by default on all upcoming blog pages unless the user explicitly asks for a different CTA

Approved default CTA copy:
- headline: `Do not choose your future on guesswork.`
- support lines:
  - `Find the right fit.`
  - `Build the right skills.`
  - `Move toward achieving earlier financial freedom through stronger skill choices.`
- primary button: `Get Career Guidance`
- small supporting button/link: `Free career and skill assessments`

Approved default CTA links:
- primary: `https://futurecareerschool.com/services/assessments`
- secondary: `https://futurecareerschool.com/services/career-counselling-and-career-guidance/`

Execution rule for future agents:
- when creating a new blog page, use the shared `BlogBottomCta.astro` component by default even if the prompt does not repeat CTA instructions
- do not invent a new bottom CTA for blog posts unless the user explicitly asks for a different CTA
- FAQ sections and article body section styles may vary by keyword and do not need forced standardization

## Taxonomy Expansion Rule

Blog and content taxonomy must stay expandable.

This project may eventually target thousands of articles and a very wide keyword universe.
Do not force a new keyword into an existing branch if the fit is weak or misleading.

Execution rule for future agents:
- whenever the user gives a new keyword, first check whether it cleanly fits an existing taxonomy branch in `src/config/blog.ts`
- if the fit is strong, place it in the existing branch
- if the fit is weak, unclear, or too broad, create a new taxonomy branch/category instead of forcing it into the wrong silo
- when a new category is created, update the memory and relevant config so the structure remains understandable for future work
- preserve parent-child logic and search-intent grouping when creating new branches
- prefer search-intent/topic clusters over arbitrary audience splits for blog taxonomy unless there is a strong SEO reason otherwise

Working rule:
- `src/config/blog.ts` is the live blog taxonomy source of truth
- `PROJECT_MEMORY.md` and `SEO_ARCHITECTURE.md` should be updated when taxonomy meaningfully expands

## Reusable Elements Policy

Not every repeated pattern should be standardized.
Only standardize the parts that should remain consistent across many pages.

Current reusable defaults that future agents should use unless there is a strong reason not to:
- `src/layouts/BaseLayout.astro` for SEO shell, metadata, canonical handling, OG tags, robots tags, and JSON-LD injection
- `src/components/Nav.astro` for shared public navigation
- `src/components/Footer.astro` for shared footer and crawl-supporting links
- `src/components/BlogBottomCta.astro` for the standard blog CTA
- `src/layouts/BlogPostLayout.astro` as the preferred reusable wrapper for normal blog pages when the page does not need a highly custom one-off layout

Do not over-standardize these yet:
- FAQ question sets
- article section ordering
- article body visual blocks
- keyword-specific tables, charts, or frameworks

Reason:
- those should adapt to keyword intent, search competition, and reader needs
- forcing them into one template will weaken article quality

Execution rule for future agents:
- use the reusable shared elements by default
- keep the article body flexible
- if a new repeated block starts appearing across multiple pages, convert it into a shared component and note it in memory

### `public/og-image.svg`
- default branded social preview asset used by `BaseLayout`
- should exist before shipping new pages that rely on the shared OG fallback

## Shared Navigation and Internal Linking

### `src/components/Nav.astro`
Current public primary nav should emphasize:
- `/services`
- `/career-skills-compass`
- `/career-resources`
- `/blog`

The internal coaches dashboard should not be promoted as a primary public nav destination.

### `src/components/Footer.astro`
Footer is used as a crawl-supporting link block for:
- career stages
- skill/resource discovery
- city-guide discovery through filtered resources
- important live hub pages

Footer links should point to real routes, not imagined legal or thin placeholder pages.

## Main Modern Pages

### `src/pages/index.astro`
Role:
- homepage
- broad value proposition and top-of-funnel entry page

Main themes:
- strategic career clarity
- different audience stages
- structured framework instead of generic advice
- AI pressure / future-proofing
- strong CTA path to internal service destinations and deeper site pages

Important frameworks referenced:
- Biology Check
- IMS Test
- Freedom Number
- Tarzan Rule
- Multiplier Skill
- T-Shaped Skill Stack
- 4-Checkpoint Protocol
- Skill Marriage
- Career Group Engine
- Night Shift Plan

### `src/pages/services/index.astro`
Role:
- live services parent hub (client-facing)
- top-level crawl destination for the services silo

Purpose:
- establish `/services/` as a real page, not just a planned route
- explain the three service tracks in client language
- link to the primary career guidance service page and the assessments hub

Current service tracks framed here:
- counselling
- assessments
- coaching

### `src/pages/services/career-counselling-and-career-guidance/index.astro`
Role:
- live, indexable bottom-of-funnel career counselling, career guidance, and career coaching page under the services branch

Purpose:
- serve as the main CTA destination for career counselling and career guidance intent
- explain career counselling, assessments, and coaching in client-facing language
- link to `/services/`, `/services/assessments/`, the `#guidance-process` section on the same parent service page, `/career-skills-compass/`, and `/career-resources/`
- never show internal SEO architecture notes or agent-style planning copy on this public page

### `src/pages/services/assessments/index.astro`
Role:
- live assessments hub page under the services branch

Purpose:
- centralize assessment intent on one canonical route for career-test traffic
- list psychometric, aptitude, interest, and readiness test names by audience
- provide a single CTA destination for assessment-related sections across the website

Primary CTA URL:
- `https://futurecareerschool.com/services/assessments`

### `src/pages/career-skills-compass.astro`
Role:
- interactive skill discovery page

Key facts:
- 38 curated skills
- client-side filtering and sorting
- useful as a structured knowledge source for future content expansion

### `src/pages/career-resources.astro`
Role:
- interactive resource library

Key facts:
- 43 resources
- topic-based and audience-based filtering
- topic taxonomy is useful for future content silos
- first published nested resource pages now exist for:
  - `biology-check-thinking-style`
  - `how-to-pick-the-right-online-course`
  - `skill-sampling-try-before-you-commit`
  - `t-shaped-skill-stack-builder`
  - `freedom-number-how-much-do-you-actually-need-to-earn`
  - `the-4-checkpoint-career-protocol-explained`
  - `multiplier-skill-guide-one-addition-that-doubles-value`
  - `tarzan-rule-the-exact-moment-to-quit-your-job`
  - `night-shift-plan-learn-7pm-11pm-without-burning-out`
  - `new-jobs-ai-will-create-not-just-replace`
  - `github-for-non-developers-build-a-portfolio-without-code`
  - `from-employee-to-freelancer-the-real-roadmap`
  - `how-indian-freelancers-make-1-5-lakh-month`
  - `digital-marketing-career-roadmap`
  - `data-science-analytics-career-roadmap`
  - `ux-ui-design-career-roadmap`
  - `web-development-career-roadmap`
- published resource cards should link to real resource pages, not WhatsApp

Current topic taxonomy embedded in page:
- career-planning
- skills
- salary
- assessments
- ai-future
- portfolio
- job-search
- city-guides
- coaching
- international

## Legacy Pages

### `src/pages/career-landing.html`
- older standalone marketing page
- not the preferred architecture direction
- keep treated as legacy unless explicitly modernized

### `src/pages/coaches-dashboard.html`
- internal methodology/training reference
- very useful for internal framework language
- not a public SEO target

## SEO Architecture Rules

The repo now has a dedicated architecture manual:
- `SEO_ARCHITECTURE.md`

That file defines:
- live sitemap policy
- planned sitemap tree
- parent-child URL rules
- internal linking rules
- breadcrumb and schema rules
- local SEO and anti-doorway rules
- publishing workflow for new pages

Future agents should read that file before inventing new URLs.

## Planned Information Architecture

The project should move toward parent-child subfolders over time, but only as real pages are created.

High-level planned branches:
- `/about/`
- `/services/`
- `/services/assessments/`
- `/locations/`
- `/blog/`
- `/resources/`
- `/support/faq/`
- `/contact/`

## Blog Architecture (Now Live)

The repo includes a full blog architecture with conditional indexation.

Key files:
- `src/config/blog.ts` (category map and example slugs)
- `src/pages/blog/index.astro` (hub is indexable when at least one real post exists)
- `src/pages/blog/[category]/index.astro` (category becomes indexable when that category has real posts)
- `src/layouts/BlogPostLayout.astro` (post layout + BlogPosting schema)

Route structure:
- `/blog/`
- `/blog/<category>/`
- `/blog/<category>/<post-slug>/`

Current state:
- first live blog post is active at `/blog/career-guidance/how-to-choose-a-career-after-12th`
- `/blog/` and `/blog/career-guidance/` are now indexable because a real published post exists
- paired CTA destinations used in the article:
  - assessments: `/services/assessments`
  - career guidance: `/services/career-counselling-and-career-guidance/`

Publishing rule:
- keep `/blog` or `/blog/<category>` out of the sitemap until they have real post support

Within `/services/`, the intended hierarchy is:
- `/services/counselling/`
- `/services/counselling/students/`
- `/services/counselling/students/class-8-10/`
- `/services/counselling/students/class-11-12/`
- `/services/counselling/students/undergraduate/`
- `/services/counselling/professionals/`
- `/services/assessments/`
- `/services/assessments/psychometric-test/`
- `/services/assessments/skill-assessment/`
- `/services/assessments/aptitude-test/`
- `/services/coaching/`
- `/services/coaching/growth/`
- `/services/coaching/leadership/`

These are planning targets, not all current live pages.

## Local SEO Strategy

Local/location pages should eventually live under:
- `/locations/<city>/`

Examples planned:
- `/locations/mumbai/`
- `/locations/delhi/`
- `/locations/bangalore/`
- `/locations/pune/`
- `/locations/hyderabad/`
- `/locations/chennai/`
- `/locations/ahmedabad/`

Important warning:
- do not create doorway pages with copy-paste text
- each city page must have unique local context, local institutions, or city-specific insight
- the parent `/locations/` page should exist before scaling city pages aggressively

## Internal Linking Rules to Preserve

- child pages link up to parent pages
- sibling pages within a silo can link laterally where genuinely relevant
- top-nav and footer should reinforce real live hubs
- blog/content pages should link into the relevant service or resource parent page
- breadcrumb trails should mirror the URL hierarchy
- assessment-focused CTA blocks should route to `/services/assessments`
- career counselling, career guidance, and career coaching CTAs should route to `/services/career-counselling-and-career-guidance`
- the `#guidance-process` section on `/services/career-counselling-and-career-guidance/` is the live process/details destination, not a separate standalone page
- `/services/career-counselling-and-career-guidance/career-counselling-online/` is the dedicated BOFU child page for direct online counselling intent when the searcher wants clarity-first support without depending on local options
- `/services/career-counselling-and-career-guidance/locations/` is the live parent for city-intent guidance pages inside the main guidance branch
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-visakhapatnam/` is the live city-intent BOFU child page for direct `career counselling in visakhapatnam` searches within the same service family
- `/services/career-counselling-and-career-guidance/career-guidance-after-12th/` is the dedicated BOFU child page for direct after-12th guidance intent within the same service family
- `/services/career-counselling-and-career-guidance/career-guidance-after-12th-online/` is the dedicated BOFU child page for direct online after-12th guidance intent when location friction is part of the search

## Publishing Workflow for Every New Indexable Page

When a new page goes live, do all of the following:

1. Create the page under the correct parent-child folder structure.
2. Add the route to `LIVE_INDEXABLE_ROUTES` in `src/config/site.ts`.
3. Make sure the page uses `BaseLayout.astro` or equivalent SEO tags correctly.
4. Add canonical, title, description, and matching JSON-LD or breadcrumbs where relevant.
5. Add internal links from the parent page or closest relevant hub.
6. Update navigation or footer only if the new page deserves global prominence.
7. Update `SEO_ARCHITECTURE.md` if the planned/live hierarchy changed materially.
8. Update `PROJECT_MEMORY.md` if the site structure or source of truth changed materially.
9. Rebuild and verify generated `dist/sitemap.xml` and `dist/robots.txt`.

## Short Memory Block

If context is tight, remember this:

- Canonical domain is `futurecareerschool.com`.
- `.in` is an alternate brand domain, not the primary canonical target.
- The live sitemap must list only real, indexable pages.
- `src/config/site.ts` is the route source of truth for sitemap generation.
- `/services/` is now the live parent hub for future service silos.
- `SEO_ARCHITECTURE.md` contains the URL, silo, internal-linking, and anti-doorway rules.
- `career-landing.html` and `coaches-dashboard.html` are not primary SEO pages.
- `career-skills-compass.astro` and `career-resources.astro` are rich content hubs that should feed future nested pages.

## BOFU Source-of-Truth Rule

- BOFU copy truth comes from `BOFU_PAGE_PROMPT.md`.
- BOFU follow-up refinement comes from `BOFU_PAGE_PROMPT_FOLLOWUP.md`.
- `src/config/bofu.ts` is the live implementation source for the shared BOFU comparison library and default internal CTA destinations.
- Broad BOFU parent pages can show the full comparison library, while narrower BOFU child pages should pass only the rows that genuinely fit the keyword.
- Treat `career counselling`, `career guidance`, `career coaching`, and `career strategy` as one practical service family unless the user explicitly asks for a narrower distinction.
- Use the exact user search term where useful in visible copy, but do not invent fake service differences between those labels.
- Preserve the approved assessment truth: many providers charge thousands for outdated or impractical assessments, while Future Career School offers free, updated, practical, AI-powered career and skill assessments.
- Prefer clearer phrasing like `achieving earlier financial freedom` when the sentence needs it.
- On non-assessment BOFU pages, do not lead the hero section with an assessment CTA; keep hero CTA count lean and let assessment links appear later when relevant.
- On BOFU pages, visible CTA wording should adapt to the exact keyword or closest natural search phrasing instead of defaulting to generic audience-label wording.
- On non-assessment career counselling, guidance, coaching, MOFU, blog, or strategy pages, keep the paid guidance/counselling CTA visually dominant and keep assessment links contextual, smaller, and non-pulsing.
- On non-assessment career counselling, guidance, coaching, or strategy pages, do not build a full dedicated assessment section by default; use a small contextual note or link instead.
- When a reusable inline assessment note is needed across BOFU pages, prefer `src/components/bofu/AssessmentSupportNote.astro`.
- On assessment-intent pages inside `/services/assessments/`, use `ASSESSMENT_PAGE_PROMPT.md` and the shared plans flow built from `src/config/assessmentPlans.ts` plus `src/components/bofu/GuidancePlansSection.astro` so free assessment pages still funnel into the relevant paid guidance plans.
- BOFU section-tag / eyebrow labels must stay client-facing and should not sound like internal planning or framework language.
- When narrower student-intent BOFU keywords ultimately route to the broader student guidance destination, keep the broader student page CTA wording at the student-guidance level instead of adding narrower keyword CTA labels there.
