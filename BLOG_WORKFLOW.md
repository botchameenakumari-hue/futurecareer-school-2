# Blog Workflow

Status: Active workflow file for future blog creation

Use this file as the primary operating document when creating or integrating a new blog post.
This file is designed to reduce context waste by gathering the blog-relevant rules into one place.

For non-blog public pages that still need the same tone guardrail, use `CLIENT_FACING_COPY_RULE.md`.

## Mandatory Read Order For Future Blog Tasks

**For single blog articles:** Follow steps 1-6 below.

**For blog content at scale (20+ articles in same category):** Read `DOORWAY_PREVENTION_GUIDE.md` first (section: "Blog Article Uniqueness Audit" + "Scale Thresholds").

1. `BLOG_WORKFLOW.md`
2. `BLOG_WRITING_PROMPT.md`
3. `DOORWAY_PREVENTION_GUIDE.md` (if creating multiple articles in same category)
4. `src/config/blog.ts`
5. `src/config/site.ts`
6. `src/layouts/BlogPostLayout.astro`
7. `src/components/BlogBottomCta.astro`

Open `PROJECT_MEMORY.md`, `SEO_ARCHITECTURE.md`, or `SEO_CONTENT_STRATEGY.md` only if deeper reference is needed.

## Research Depth Rule (Mandatory)

For blog writing tasks, do not rely on only a few websites.

Minimum expectation:
- research broadly across a very large source set before writing
- collect updated, relevant, practical information from many different source types
- keep researching until the article has enough real-world substance, not just enough words

Research source mix should usually include as many of these as are relevant to the keyword:
- official exam and admissions websites
- official government or regulator portals
- university and program pages
- industry reports
- credible salary or labor-market databases
- major job boards and role descriptions
- company career pages
- credible practitioner or industry-expert articles
- tools, certification, or platform documentation where relevant

Research quality rules:
- do not stop after reading 3 to 5 sources when the topic is broad or competitive
- prefer breadth first, then depth on the most useful sources
- separate repo-supported business claims from externally researched market information
- do not invent facts to fill gaps; if a point is not well-supported, either verify it further or leave it out
- use official or primary sources for facts that can change, such as exams, admissions, certifications, regulations, salary data, or market demand signals
- use broader web research to collect practical reality, role patterns, role expectations, tools, hiring signals, and real-world decision factors

Execution rule:
- the writer should behave more like a researcher before behaving like a copywriter
- article drafting starts only after enough source variety has been reviewed to understand the keyword from multiple angles
- follow-up article passes should also include fresh research if the article still has topic gaps, weak practical depth, weak market context, or weak decision support

## Consolidated Execution Layer (Additive, No-Deletion)

This section is intentionally additive.
It consolidates necessary shared implementation rules from:
- `PROJECT_MEMORY.md`
- `SEO_ARCHITECTURE.md`
- `SEO_CONTENT_STRATEGY.md`

Goal:
- you should not need to include those three files in normal informational or BOFU prompts
- this file should act as the shared implementation source of truth

### Active Project Lock

Default working folder for all tasks in this thread:
- `C:\Users\Asus\Documents\futurecareer-school-2`

Execution lock rule:
- do all reads, edits, and builds in this folder by default
- do not switch to legacy copies unless explicitly requested by user

### Shared Routing and Structure Rules (Applies to All Page Types)

1. Canonical and domain
- canonical production domain is `https://futurecareerschool.com`
- `.in` is alternate brand domain, not default canonical target

2. URL hierarchy — Parent-Child Subfolder Architecture
- prefer parent-child subfolder architecture over flat root-level sprawl
- good example: `/blog/career-guidance/how-to-choose-a-career-after-12th/`
- bad example: `/how-to-choose-a-career-after-12th-blog/`
- reason: cleaner semantics, easier navigation, better analytics, stronger internal linking
- for service-location BOFU pages inside an existing guidance branch, prefer the nested pattern:
  - `/services/career-counselling-and-career-guidance/locations/`
  - `/services/career-counselling-and-career-guidance/locations/<city-or-keyword-slug>/`
  - for those city pages, apply the detailed BOFU local SEO rules from `BOFU_PAGE_PROMPT.md`, including explicit online-across-India wording and natural integration of the city's main areas or neighbourhoods where useful

3. Parent-Child Depth & The Two-Click Rule (Critical)
- important pages should be reachable within 2 clicks from homepage
- pattern: homepage → hub/category page → child/article page (max 2 clicks)
- do not bury important pages deeper than 2-3 levels
- when creating a new category or hierarchy, apply the two-click rule: ask "can users reach this from a hub page that is reachable from the homepage?"
- hub pages (parent pages) should summarize the branch and guide users to child pages, not be thin placeholders

4. Parent-Child Hierarchy Pattern Examples
- correct: `/services/assessments/` (hub) → `/services/assessments/class-10-and-below/` (child)
- correct: `/blog/career-guidance/` (category hub) → `/blog/career-guidance/how-to-choose-stream/` (article)
- avoid: all variations stuffed into one slug like `/best-career-guidance-for-class-10-students/`

5. Live sitemap policy
- sitemap contains only live, canonical, indexable pages
- never include planned/noindex/redirect/thin-placeholder pages
- `src/config/site.ts` (`LIVE_INDEXABLE_ROUTES`) is the route source of truth

6. Internal linking logic — PageRank Flow Strategy
- upward flow: child pages link to parent hub page (passes link equity up)
- lateral flow: sibling pages link to each other only when genuinely relevant (not forced for SEO)
- hub flow: hub pages link to all live child pages and summarize the branch
- content pages should route link equity into the correct hub page
- important pages should stay discoverable via hub paths (avoid deep burial)

7. Anti-spam and anti-doorway
- do not mass-produce near-duplicate location/service pages
- each page must have distinct intent and value
- do not publish pages only to reserve URLs
- avoid thin placeholder pages that promise content later

### Shared SEO Standards (Applies to Informational and BOFU)

Keyword placement baseline:
- title tag
- URL slug
- H1
- first sentence/early intro
- meta description
- at least one H2 where natural
- image alt/file name where relevant

Technical baseline:
- one H1
- logical heading hierarchy
- canonical
- meta description
- mobile-friendly rendering
- internal links to relevant hubs
- schema that matches real on-page content
- server-rendered critical content and links

Named-framework consistency rule:
- if an article uses a named framework or protocol from repo guidance, introduce it with the exact name the first time it appears
- examples: `The 4-Checkpoint Protocol`, `The 3 Gates`
- do not describe a framework vaguely near the top and then refer to it by its formal name much later without connecting the two
- if a later section depends on that framework, point back to the original section clearly, ideally with an anchor link or direct wording like `the same 4-Checkpoint Protocol from above`

Article design and mobile-first readability rule:
- treat blog articles as mobile-first documents, not desktop pages shrunk down later
- body text must not look flat; create a clear hierarchy between headline text, lead lines, supporting paragraphs, notes, list text, and table text
- avoid making every section a boxed card; use cards only where they improve scanning or comparison
- when cards are used, give them generous internal padding so text never feels pressed against borders
- do not ship a grid of uniform grey cards; give card grids cycling accent colours, a per-card visual anchor (top strip, coloured dot, or left accent), a subtle hover lift, and distinct tinted treatment for inline `fit` and `caution` sub-lines
- the shared layout (`src/layouts/BlogPostLayout.astro`) already provides per-H2 gold-to-teal kicker bars, an accented `.lead-para` lead style, gold list markers, and a styled `.table-wrap`; rely on these baselines instead of duplicating them per article
- tables must sit inside `.table-wrap` overflow wrappers; any table with 3+ data columns must carry `data-label` attributes on every cell and stack into labelled cards on phones rather than cutting off columns; if a table is still too dense, convert it into simpler cards or lists
- before finishing, run the dev server and actually view the page near 390px: confirm no horizontal overflow, single-column grids, stacked or fully readable tables, and comfortable spacing — do not assume mobile-friendliness from the CSS alone
- if the issue is a repeated typography, card, table, or article-layout baseline problem, improve `src/layouts/BlogPostLayout.astro` instead of fixing only the current article page

### Schema and Date Safety Rules

1. Informational pages:
- use `BlogPosting` schema
- include `datePublished`
- assign real author from live author pages:
  - `/about/shivanshi-sehgal/`
  - `/about/allu-vagdevi/`
  - both authors have real headshots (`public/images/authors/shivanshi-sehgal.jpg`, `public/images/authors/allu-vagdevi.jpg`); `BlogPostLayout.astro` maps `authorName` to the photo automatically, so setting `authorName` on a new post is enough — no per-post image work needed

2. BOFU pages:
- primary schema should be `Service`
- Service schema must be the primary schema type for BOFU service pages
- add `FAQPage` only when real FAQs exist
- add `BreadcrumbList` when hierarchy is represented

3. Evergreen wording:
- avoid year-framed evergreen titles/slugs/headings unless intentionally date-bound
- visible publish date is allowed and recommended for blog credibility

### BOFU Safety and Truth Control

For BOFU pages:
- `BOFU_PAGE_PROMPT.md` is the commercial truth source
- do not invent business promises, pricing, guarantees, timelines, or deliverables
- use this workflow for shared implementation mechanics
- use BOFU prompt for positioning/copy truth
- keep BOFU/service pages closer to landing-page flow than article flow:
  - no jump-nav or index block under the hero by default
  - no boxed `Best when / Main value / What should change` hero summary block by default
  - no body eyebrow/kicker labels above normal BOFU section headings by default
  - allowed usual exceptions are the hero pill, FAQ label, and final `Next step` CTA label

### Unified Implementation Checklist (Any New Indexable Page)

Before completing any new page/post:
1. place route in correct parent-child folder
2. verify title/meta/canonical/H1
3. add correct schema and breadcrumbs where needed
4. add internal links from nearest relevant hub
   - if a page needs several parent, sibling, or next-step links, do not hide them inside unrelated cards or scattered inline text
   - give them a dedicated standalone related-links section instead
   - for scalable internal-link directories, prefer `src/components/LinkDirectorySection.astro`
5. update `LIVE_INDEXABLE_ROUTES` only if page is truly indexable
6. update memory/docs when taxonomy/architecture materially changes
7. rebuild and verify sitemap/robots outputs
8. run `npm run check:public-copy` after public-page changes to catch internal-sounding rendered copy before shipping

## Core Memory Rules

### Domain and Brand

Primary canonical brand/domain:
- `https://futurecareerschool.com`

Secondary brand domain:
- `https://futurecareerschool.in`

Do not use `futurecareer.school` as the canonical production domain.
That was an older assumption and should now be treated as incorrect for future SEO and content work.

### Current Technical Stack

- Framework: Astro 4.x
- Site config: `astro.config.mjs`
- Global SEO/layout shell: `src/layouts/BaseLayout.astro`
- Shared content/navigation: `src/components/Nav.astro`, `src/components/Footer.astro`
- Main authored pages: Astro pages under `src/pages`
- Legacy pages still present: plain `.html` files under `src/pages`
- Generated output: `dist/*`
- Vendor dependencies: `node_modules/*`

### Core Site Identity

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
- graduates
- early professionals
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
- BOFU pages should also avoid phrases like `this page is for`, `when this page is the right fit`, or `why this page exists separately`; express fit and differentiation through the client situation instead
- informational articles should also avoid page-planning copy like `this article is for`, `in this section we will cover`, `this guide exists to`, or similar repeated narration when a direct reader-facing line would be clearer
- parent hubs, blog hubs, category pages, related-link sections, and directory-card descriptions should explain value to the reader, not site structure to the reader
- avoid visible copy like `use this page when`, `hub page`, `support page`, `this section can grow cleanly`, `indexable`, `noindex`, or other architecture commentary on public pages
- the same rule applies to article CTAs, jump-nav labels, related-link descriptions, card blurbs, and helper text inside article components

### Current Live SEO Architecture

The public XML sitemap should only contain live, indexable pages.
Planned pages belong in documentation until they are actually published with real content.

Current live indexable routes are defined in `src/config/site.ts` as `LIVE_INDEXABLE_ROUTES`:
- `/`
- `/services`
- `/services/career-counselling-and-career-guidance`
- `/services/career-counselling-and-career-guidance/career-guidance`
- `/services/career-counselling-and-career-guidance/career-coach-near-me`
- `/services/career-counselling-and-career-guidance/career-counselling`
- `/services/career-counselling-and-career-guidance/student-career-guidance`
- `/services/career-counselling-and-career-guidance/working-professional-career-guidance`
- `/services/assessments`
- `/services/assessments/class-10-and-below`
- `/services/assessments/class-11-to-12`
- `/services/assessments/graduates-and-early-professionals`
- `/services/assessments/stream-selector-test-after-10th`
- `/services/assessments/career-aptitude-test-after-10th`
- `/services/assessments/stream-selector-test-after-12th`
- `/services/assessments/career-aptitude-test-after-12th`
- `/career-resources`
- `/career-skills-compass`
- `/blog`
- `/blog/ai-future`
- `/blog/ai-future/top-careers-for-the-future`
- `/blog/career-options`
- `/blog/career-options/best-career-options-with-high-salary`
- `/blog/career-options/bca-career-options`
- `/blog/career-options/bba-career-options`
- `/blog/career-options/career-options-after-12th-commerce`
- `/blog/career-options/career-options-after-12th-pcb`
- `/blog/career-options/career-options-after-12th-science`
- `/blog/career-options/career-options-in-commerce`
- `/blog/career-options/career-options-in-arts`
- `/blog/career-options/pcb-career-options-without-neet`
- `/blog/career-options/pcm-career-options`
- `/blog/career-guidance`
- `/blog/career-guidance/how-to-choose-a-career-after-12th`
- `/blog/stream-selection`
- `/blog/stream-selection/career-options-after-10th`
- `/about`
- `/locations`
- `/contact`

Current generated SEO endpoints:
- `src/pages/sitemap.xml.ts`
- `src/pages/robots.txt.ts`

Current redirect support:
- `public/.htaccess` for Hostinger / Apache-style permanent redirects
- Hostinger hPanel Redirects can be used instead of `.htaccess` if preferred
- `src/pages/topics-index.astro` fallback redirect shim

Important rule:
- do not add thin placeholder pages to the XML sitemap just to "reserve" URLs
- do not add noindex pages to the XML sitemap
- do not add redirects to the XML sitemap
- do not block `/_astro/` assets in `robots.txt`
- do not reintroduce Netlify-only or Vercel-only redirect files unless deployment platform changes

### Shared SEO/Config Files

#### `src/config/site.ts`
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

#### `src/layouts/BaseLayout.astro`
Responsibilities:
- title and description tags
- canonical handling
- robots meta handling
- Open Graph and Twitter tags
- JSON-LD injection
- default OG image based on `DEFAULT_OG_IMAGE_URL`

This is the central SEO wrapper for modern Astro pages.

#### `src/components/BlogBottomCta.astro`
Role:
- standard reusable CTA for blog posts
- should be used by default on all upcoming blog pages unless the user explicitly asks for a different CTA

Approved default CTA copy:
- headline: `Do not choose your future on guesswork.`
- support lines:
  - `Find the right fit.`
  - `Build the right skills.`
  - `Move toward earlier financial freedom through stronger skill choices.`
- primary button: `Get Career Guidance`
- small supporting button/link: `Free career and skill assessments`

Approved default CTA links:
- primary: `https://futurecareerschool.com/services/career-counselling-and-career-guidance/`
- small supporting link: `https://futurecareerschool.com/services/assessments`

Execution rule for future agents:
- when creating a new blog page, use the shared `BlogBottomCta.astro` component by default even if the prompt does not repeat CTA instructions
- do not invent a new bottom CTA for blog posts unless the user explicitly asks for a different CTA
- FAQ sections and article body section styles may vary by keyword and do not need forced standardization

### Taxonomy Expansion Rule

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

### Reusable Elements Policy

Not every repeated pattern should be standardized.
Only standardize the parts that should remain consistent across many pages.

Current reusable defaults that future agents should use unless there is a strong reason not to:
- `src/layouts/BaseLayout.astro` for SEO shell, metadata, canonical handling, OG tags, robots tags, and JSON-LD injection
- `src/components/Nav.astro` for shared public navigation
- `src/components/Footer.astro` for shared footer and crawl-supporting links
- `src/components/BlogBottomCta.astro` for the standard blog CTA
- `src/layouts/BlogPostLayout.astro` as the preferred reusable wrapper for normal blog pages when the page does not need a highly custom one-off layout

Reading-experience baselines now provided by `src/layouts/BlogPostLayout.astro` (use these class names instead of re-inventing per article):
- a constrained, centered reading column (~760px) so prose never runs unreadable full-width lines
- a gold-to-teal kicker bar above every `h2` for clear section rhythm
- `.lead-para` accented lead paragraph styling
- gold list markers for default bullet lists
- `.table-wrap` styled, scrollable table wrapper (pair with `data-label` cells so tables stack into cards on phones)
- `.faq-accordion` and `.accordion` collapsible `<details>` disclosure styling, so FAQs and long reference blocks collapse instead of forming a wall of text
- `.key-takeaways` summary strip for a scannable "short version" near the top of an article
- universal card-grid polish: any container whose class ends in `-grid` gets cycling accent borders (teal, gold, violet, blue) on its direct children plus a gentle hover lift, so card rows never read as a flat grey block
- legacy FAQ support: a FAQ rendered as `<details class="faq-item"><summary>…</summary>…</details>` is automatically styled as an accordion (chevron, open/close), so older posts collapse their FAQs without per-post CSS

Two rules that keep these baselines working:
- always render normal blog posts through `BlogPostLayout.astro` so they sit inside `.post-body` and inherit every baseline above; a post on a custom layout will silently miss all of them
- when editing the shared layout's global styles, keep the entire descendant selector inside `:global(...)` (for example `:global([class$="-grid"] > *)`, not `:global([class$="-grid"]) > *`). If the child part sits outside `:global()`, Astro scopes it and it will never match slotted article markup

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

### Shared Navigation and Internal Linking

#### `src/components/Nav.astro`
Current public primary nav should emphasize:
- `/services`
- `/career-skills-compass`
- `/career-resources`

The internal coaches dashboard should not be promoted as a primary public nav destination.

#### `src/components/Footer.astro`
Footer is used as a crawl-supporting link block for:
- career stages
- skill/resource discovery
- city-guide discovery through filtered resources
- important live hub pages

Footer links should point to real routes, not imagined legal or thin placeholder pages.

### Main Modern Pages

#### `src/pages/services/assessments/index.astro`
Role:
- live assessments hub page under the services branch

Purpose:
- centralize assessment intent on one canonical route for career-test traffic
- list psychometric, aptitude, interest, and readiness test names by audience
- provide a single CTA destination for assessment-related sections across the website

Primary CTA URL:
- `https://futurecareerschool.com/services/assessments`

#### `src/pages/services/career-counselling-and-career-guidance/index.astro`
Role:
- live, indexable career counselling, career guidance, and career coaching service page under the services branch
- primary CTA destination for counselling/guidance/coaching intent

Purpose:
- explain the actual services in client-facing language
- link to assessments, process details, skill discovery, and resource library where relevant
- never publish internal SEO architecture notes or chat-style planning copy

#### `src/pages/services/career-counselling-and-career-guidance/index.astro#guidance-process`
Role:
- main live process section for the career guidance service

Core themes:
- profile mapping
- high-value skill direction
- proof of work
- positioning and tech leverage
- income growth and earlier financial freedom planning

#### `src/pages/career-skills-compass.astro`
Role:
- interactive skill discovery page

Key facts:
- 38 curated skills
- client-side filtering and sorting
- useful as a structured knowledge source for future content expansion

#### `src/pages/career-resources.astro`
Role:
- interactive resource library

Key facts:
- 93 resources
- topic-based and audience-based filtering
- topic taxonomy is useful for future content silos

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

### SEO Architecture Rules

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

### Planned Information Architecture

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

### Blog Architecture (Now Live)

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
- live published posts:
  - `/blog/ai-future/top-careers-for-the-future`
  - `/blog/career-options/best-career-options-with-high-salary`
  - `/blog/career-options/bca-career-options`
  - `/blog/career-options/bba-career-options`
  - `/blog/career-options/career-options-after-12th-commerce`
  - `/blog/career-options/career-options-after-12th-pcb`
  - `/blog/career-options/career-options-after-12th-science`
  - `/blog/career-options/career-options-in-commerce`
  - `/blog/career-options/career-options-in-arts`
  - `/blog/career-options/pcb-career-options-without-neet`
  - `/blog/career-options/pcm-career-options`
  - `/blog/career-guidance/how-to-choose-a-career-after-12th`
  - `/blog/stream-selection/career-options-after-10th`
  - `/blog/resume/resume-tips-for-freshers-india`
- `/blog/`, `/blog/ai-future/`, `/blog/career-guidance/`, `/blog/career-options/`, `/blog/stream-selection/`, and `/blog/resume/` are indexable because real published posts exist
- CTA destination priority used in the article:
  - career guidance/counselling: `/services/career-counselling-and-career-guidance/` as the visually primary paid action
  - assessments: `/services/assessments` only as a smaller contextual support link/button unless the page is assessment-intent

Publishing rule:
- keep `/blog` or `/blog/<category>` out of the sitemap until they have real post support

### Internal Linking Rules to Preserve

- child pages link up to parent pages
- sibling pages within a silo can link laterally where genuinely relevant
- top-nav and footer should reinforce real live hubs
- blog/content pages should link into the relevant service or resource parent page
- breadcrumb trails should mirror the URL hierarchy
- assessment-focused CTA blocks should route to `/services/assessments`
- career counselling, guidance, and coaching CTAs should route to `/services/career-counselling-and-career-guidance`
- when editing actual assessment pages under `/services/assessments/`, read `ASSESSMENT_PAGE_PROMPT.md` first and use the shared plans flow built from `src/config/assessmentPlans.ts` and `src/components/bofu/GuidancePlansSection.astro`

### Updated SEO Content Strategy Overlay

These rules are included here so future blog tasks do not need extra context reads for standard execution.

- publish non-commodity content, not generic rewritten advice
- make articles unique, specific, and authentic wherever possible
- use the exact target keyword in the SEO title, URL slug, H1, meta description, and first sentence
- use the keyword in at least one H2 when natural
- vary blog title patterns so the site does not look templated
- do not mass-produce thin AI-generated pages or near-duplicate keyword variations
- keep critical article copy and internal links server-rendered
- organize for human reading, not artificial AI chunking
- satisfy the searcher's intent before trying to add extra topics

### Publishing Workflow for Every New Indexable Page

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

### Short Memory Block

If context is tight, remember this:

- Canonical domain is `futurecareerschool.com`.
- `.in` is an alternate brand domain, not the primary canonical target.
- The live sitemap must list only real, indexable pages.
- `src/config/site.ts` is the route source of truth for sitemap generation.
- `/services/` is now the live parent hub for future service silos.
- `SEO_ARCHITECTURE.md` contains the URL, silo, internal-linking, and anti-doorway rules.
- `career-landing.html` and `coaches-dashboard.html` are not primary SEO pages.
- `career-skills-compass.astro` and `career-resources.astro` are rich content hubs that should feed future nested pages.

## Core Architecture Rules

### Mission

This repository should evolve into a strongly structured, SEO-compatible website for `futurecareerschool.com`.
The architecture goal is not to publish the most URLs.
The goal is to publish the right URLs in the right hierarchy, with strong internal linking, clear semantics, and no thin or doorway pages.

### Canonical Domain Rules

Primary canonical domain:
- `https://futurecareerschool.com`

Secondary brand domain:
- `https://futurecareerschool.in`

Rules:
- use `.com` as the canonical production domain unless a deliberate domain strategy change is made
- do not reintroduce `futurecareer.school` in canonicals, structured data, robots, sitemap, or internal docs
- if `.in` is used publicly, treat it as an alternate brand domain, not the default canonical target

### Core Architecture Principle

Prefer parent-child subfolders over flat root-level sprawl.

Good:
- `/services/counselling/students/class-8-10/`
- `/blog/guidance/how-to-choose-streams/`
- `/locations/mumbai/`

Avoid:
- `/career-counselling-for-class-10-students/`
- `/best-career-guidance-mumbai/`
- `/top-skills-for-working-professionals-in-india/`

Reason:
- clearer semantics
- cleaner user navigation
- easier analytics filtering
- stronger silo-based internal linking
- easier long-term scale

Evergreen copy rule:
- avoid explicit calendar dates in evergreen page slugs, titles, and marketing copy unless the page is genuinely date-bound
- prefer wording like `current market`, `present situation`, `future-ready`, or `long-term`

### Live Sitemap Policy

The public XML sitemap must contain only:
- live pages
- indexable pages
- canonical pages

Do not include:
- planned pages
- noindex pages
- redirects
- thin placeholders
- internal dashboards

Current implementation:
- sitemap is generated from `src/pages/sitemap.xml.ts`
- live route metadata lives in `src/config/site.ts`
- Astro build output uses directory-style pages via `astro.config.mjs`

Whenever a new page is genuinely ready for search traffic:
- add it to `LIVE_INDEXABLE_ROUTES`
- rebuild the site

### Live Information Architecture

Current live indexable pages:
- `/`
- `/services`
- `/services/career-counselling-and-career-guidance`
- `/services/assessments`
- `/career-resources`
- `/career-skills-compass`
- `/blog`
- `/blog/career-options`
- `/blog/career-options/career-options-in-commerce`
- `/blog/career-guidance`
- `/blog/career-guidance/how-to-choose-a-career-after-12th`
- `/about`
- `/locations`
- `/contact`

Meaning:
- `/services/` is the client-facing services hub
- `/services/career-counselling-and-career-guidance/` is the primary client-facing career counselling, guidance, and coaching service page
- `/services/career-counselling-and-career-guidance/career-guidance/` is a live BOFU child page for direct `career guidance` intent, focused on practical direction, skill-path decisions, and when free tools are enough first
- `/services/career-counselling-and-career-guidance/career-coach-near-me/` is a live BOFU child page for high-intent "near me" career coach searches, framed around online-across-India delivery and service-fit filtering
- `/services/career-counselling-and-career-guidance/career-counselling/` is a live BOFU child page for direct `career counselling` intent, focused on counselling-first clarity and next-step decision value
- `/services/career-counselling-and-career-guidance/student-career-guidance/` is a live audience-specific BOFU landing page for school students, college students, freshers, recent graduates, and postgraduates
- `/services/career-counselling-and-career-guidance/career-guidance-after-12th/` is a live BOFU child page for direct `career guidance after 12th` intent, focused on course, degree, skill, and next-step decisions before expensive wrong turns
- `/services/career-counselling-and-career-guidance/working-professional-career-guidance/` is a live audience-specific BOFU landing page for working professionals
- the `#guidance-process` section on `/services/career-counselling-and-career-guidance/` is the live supporting process/details destination

Current non-primary routes:
- `/topics-index` -> redirect/noindex
- `/career-landing` -> legacy/noindex
- `/coaches-dashboard` -> internal/noindex
- `/404` -> noindex fallback

Redirect support currently included in repo:
- `public/.htaccess` for Hostinger / Apache-style permanent redirects
- Hostinger hPanel Redirects can be used instead of `.htaccess` if you prefer panel-managed rules
- `src/pages/topics-index.astro` as a fallback noindex redirect shim if a host redirect is missing

Canonical host intent:
- if `futurecareerschool.in` serves the same public site, permanently redirect it to `futurecareerschool.com`
- keep `futurecareerschool.com` as the only canonical production host

### Planned Parent-Child Hierarchy

These are the preferred expansion targets as real pages are built.
They are planning targets, not all current live pages.

### About
- `/about/`
- `/about/team/`
- `/about/vision/`
- `/about/reviews/`

### Services
- `/services/`
- `/services/counselling/`
- `/services/counselling/students/`
- `/services/counselling/students/class-8-10/`
- `/services/counselling/students/class-11-12/`
- `/services/counselling/students/undergraduate/`
- `/services/counselling/professionals/`
- `/services/assessments/`
- `/services/assessments/psychometric/`
- `/services/assessments/skill-assessment/`
- `/services/assessments/aptitude/`
- `/services/coaching/`
- `/services/coaching/growth/`
- `/services/coaching/leadership/`

### Locations
- `/locations/`
- `/locations/mumbai/`
- `/locations/delhi/`
- `/locations/bangalore/`
- `/locations/pune/`
- `/locations/hyderabad/`
- `/locations/chennai/`
- `/locations/ahmedabad/`

### Blog
- `/blog/`
- `/blog/guidance/`
- `/blog/exams/`
- `/blog/trends/`

Example child URLs:
- `/blog/guidance/how-to-choose-streams/`
- `/blog/exams/pre-boards-preparation-tips/`
- `/blog/trends/top-skills-for-working-professionals/`

### Resources
- `/resources/`
- `/resources/guides/`
- `/resources/webinars/`

### Support and Contact
- `/support/faq/`
- `/contact/`
- `/contact/book-session/`

### Content-Silo Rules

Each parent folder should act like a real hub, not just a shell.

That means:
- the parent page should explain the category
- the parent page should link to relevant child pages
- child pages should link back up to the parent
- sibling links are allowed when contextually relevant

Examples:
- `/services/` should link to counselling, assessments, coaching
- `/services/assessments/` should act as the canonical CTA destination for assessment-related intent
- `/services/counselling/` should link to students and professionals
- `/services/counselling/students/` should link to class-8-10, class-11-12, undergraduate

### Internal Linking Rules

#### Upward flow
Every child page should link back to its parent.

Examples:
- `/services/assessments/psychometric/` -> `/services/assessments/`
- `/services/counselling/students/class-11-12/` -> `/services/counselling/students/`

#### Lateral flow
Sibling pages can link to each other when useful.

Examples:
- `class-8-10` can link to `class-11-12`
- `psychometric` can link to `aptitude`

#### Hub flow
Blog, resources, and content pages should pass relevance upward into the right commercial or topical hub.

Examples:
- a stream-selection blog post should link into counselling/student pages
- an AI-skills article should link into skill pages or future coaching/service pages
- assessment-focused blocks should link to `/services/assessments` before linking to deeper child tests

### Breadcrumb Rules

Breadcrumbs must match the actual URL hierarchy.

Examples:
- `Home > Services > Counselling > Students > Class 8-10`
- `Home > Blog > Guidance > How to Choose Streams`

Rules:
- do not invent breadcrumbs that do not match the path
- breadcrumb schema should use the real canonical URLs
- use breadcrumbs on all deeper child pages

### Schema Rules

Use schema to reinforce structure, not to fake sophistication.

Preferred uses:
- `BreadcrumbList` for hierarchical pages
- `CollectionPage` for hub or index pages
- `Service` for service delivery pages
- `FAQPage` only when there is a real FAQ section on the page

Avoid:
- stuffing irrelevant schema onto thin pages
- using fake review schema
- adding schema for content that does not actually exist on the page

### Technical SEO Notes

- Do not block `/_astro/` in `robots.txt`; search engines may need CSS and JS assets for rendering.
- Keep Astro on directory output unless there is a deliberate hosting reason to switch formats.
- When retiring an old route, prefer a real host-level permanent redirect in addition to any HTML fallback redirect page.
- This repo is currently prepared for Hostinger-style static deployment, not Vercel or Netlify-specific redirect config.

### Local SEO Rules

Location pages should live under `/locations/`.

Each city page must include unique value such as:
- local education context
- city-specific school or college references
- local market or hiring insight
- local workshop/event/service details if true

Do not:
- clone the same city page for dozens of cities
- swap only the city name
- create city pages before the parent location strategy is ready

If a location page is created, support it with:
- a real `/locations/` parent page
- real internal links
- city-specific content

### Topical Authority Rules

The project already has strong raw topic data inside:
- `src/pages/career-skills-compass.astro`
- `src/pages/career-resources.astro`

These should inform future nested content clusters.

Useful existing topic cluster directions:
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

Use those clusters to decide where future child pages belong.

Important taxonomy rule:
- these clusters are a starting point, not a permanent limit
- if a new keyword or article theme does not fit cleanly into the current taxonomy, expand the taxonomy instead of forcing a poor fit
- update `src/config/blog.ts` first when adding a new blog branch
- then update memory/docs if the new branch meaningfully changes the content map
- taxonomy should follow search intent and long-term semantic clarity, not convenience

### Anti-Spam and Anti-Doorway Rules (Applies to Blog Content at Scale)

Google's 2024 Helpful Content Update and scaled-content abuse policies also target informational blog content created at scale.

**Never scale URLs just to look bigger.**

Avoid:
- dozens of city pages with near-duplicate copy
- dozens of keyword-stuffed service pages with no unique value
- flat root-level slugs for every variant
- adding pages to the sitemap before the content is ready
- articles that repeat the same format/outline across many keywords without original insights
- blog categories with 50+ articles where 70%+ share identical frameworks, structures, or examples

**High-risk patterns for blog content:**

1. **Keyword-variation articles (same topic, different modifiers):**
   - Bad: "Career options for engineers", "Career options for doctors", "Career options for accountants" (all with 80% identical content, only job names changed)
   - Safe: Each article solves a genuinely different decision problem with unique constraints, roadmaps, salary data, or market context

2. **Stream/degree variation articles:**
   - Bad: 20+ articles on "best careers in [stream]" all using the same job-list format and comparison table with only stream name changed
   - Safe: Articles that address genuinely different constraints (e.g., "PCM career options" addresses competitive entrance exams; "Arts career options" addresses salary-perception concerns)

3. **Location-specific blog articles (if created at scale):**
   - Bad: "Best IT jobs in Bangalore", "Best IT jobs in Delhi", "Best IT jobs in Mumbai" with 75%+ identical content (only city name and one salary bracket changed)
   - Safe: Each location article has original local industry landscape, local job market data, unique company examples, and location-specific advice

4. **List articles with repetitive templates:**
   - Bad: "Top 10 careers in X", "Top 10 careers in Y", "Top 10 careers in Z" where the article template and structure are identical, only the career list changes
   - Safe: Different list angles (e.g., "Top 10 highest-paying careers" vs "Top 10 fastest-growing careers" vs "Top 10 careers with work-life balance") with genuinely different selections and reasoning

**If a page exists, it must have:**

- a clear, distinct purpose unique to this keyword (not "same purpose, different keyword")
- original insights, frameworks, examples, or data not present on similar articles
- a relevant parent silo
- internal links that make sense (not boilerplate links on every article)
- enough substantive content to deserve indexation (minimum 2,000+ words for competitive topics)
- a unique narrative voice or problem-framing specific to the keyword's intent
- research depth appropriate to the topic (not skimmed from 3 sources)

**Minimum content standards for blog articles at scale:**

| Article Type | Minimum Length | Minimum Uniqueness | Special Requirements |
|---|---|---|---|
| **Career options** (e.g., "careers in PCM") | 2,200+ words | 40% unique framework/examples not on sibling articles | Original job examples, salary data, market demand, entrance-exam context |
| **Stream/degree selection** (e.g., "should I choose commerce?") | 2,000+ words | 35% unique decision criteria/constraints | Original pros/cons, unique audience pain points (not generic rewrite) |
| **Career roadmap** (e.g., "data science roadmap") | 2,500+ words | 40% unique step-by-step guidance | Original skill sequence, tools, project ideas, timeline — not template from another roadmap |
| **Location guide** (if created) | 2,200+ words | 40% unique local context | Original local industry landscape, company examples, local institutions, salary data — not generic location insert |
| **Decision/how-to** (e.g., "how to choose a career") | 2,000+ words | 30% unique framework/examples | Original decision protocol, examples, constraints — not generic template |

**Red flags: Content that will get penalized at scale**

- [ ] 70%+ of article content matches a nearby keyword-variation article
- [ ] All articles in a category use the identical outline/section structure
- [ ] Examples or case studies from one article could be swapped to another with no relevance loss
- [ ] Article feels like a template with only job/stream/location name changed
- [ ] All articles in a category use the same salary data, without location or industry context
- [ ] No original research or unique insights compared to top-ranking competitors
- [ ] Article structure/framework copied from a sibling article with only keyword substitution
- [ ] Category has 30+ articles with 75%+ duplicate structural patterns

**Failing ANY of these = do not publish at scale; fix before expanding the category**

**Blog Article Uniqueness Audit (before publishing at scale):**

1. **Compare to nearest sibling article** (same category, similar keyword):
   - Does this article solve a genuinely different problem or provide a distinct angle?
   - If no, reframe the article around a unique constraint or unique audience pressure

2. **Check section structure:**
   - Does this article follow the identical H2/H3 outline as nearby articles?
   - Acceptable: "Overview", "Who it's for", "Roadmap", "Mistakes", "FAQ" is a common structure IF each article addresses genuinely different content within those sections
   - Unacceptable: Using identical outlines with only job/location names swapped

3. **Check examples and frameworks:**
   - Are the top 3 examples or case studies specific to this article's intent?
   - Could they be swapped to a sibling article without losing relevance?
   - If yes, make them unique to this article's specific keyword

4. **Check research depth:**
   - Does this article cite sources/research unique to this keyword?
   - Or is it just general career advice with keyword name inserted?
   - Articles that recycle the same research across keywords feel thin

5. **Measure unique content:**
   - Highlight all original insights, examples, frameworks, or data unique to THIS article
   - Count: unique words / total article words = % unique
   - Must be ≥ 30% for pass (some flexibility for common frameworks, but examples and case studies MUST be original)
   - If < 30%, add more original research, examples, or unique decision criteria

6. **Check internal links:**
   - Does this article link to a unique sibling article not linked from other articles?
   - Or are all internal links boilerplate (same links on every article in the category)?
   - Vary internal links by article theme

**Monitoring for scale risk:**

When publishing 20+ articles in a category:

1. Measure % unique content for each article (vs nearest sibling)
2. Track Google Search Console for duplicate-content warnings
3. Monitor average CTR by article type (doorway content typically has 20%+ lower CTR than original research)
4. Set alert if any article drops 15+ positions in SERP after 30 days (signals duplicate-content penalty)
5. If duplicate warnings appear, pause publishing and audit the category for template fatigue

### Navigation Rules

Global navigation should favor real parent hubs and discovery pages.

Current preferred primary nav focus:
- `/services`
- `/services/career-counselling-and-career-guidance`
- `/career-skills-compass`
- `/career-resources`

Do not give primary public nav weight to:
- internal training dashboards
- noindex legacy pages
- experimental placeholders

### Page Publishing Checklist

Every time a new indexable page is launched:

1. Put it in the correct folder hierarchy.
2. Add a strong title, description, and canonical.
3. Add breadcrumbs that mirror the hierarchy.
4. Add relevant schema only if it matches the page.
5. Add links from the parent page and nearby relevant pages.
6. Add the route to `LIVE_INDEXABLE_ROUTES`.
7. Update this document if the architecture tree changed.
8. Update `PROJECT_MEMORY.md` if the source of truth changed.
9. Build the site and verify the generated sitemap and robots files.

### Blog Architecture (Siloed)

The blog must follow the same parent-child rules:

- Hub: `/blog/`
- Category: `/blog/<category>/`
- Post: `/blog/<category>/<post-slug>/`

Rules:
- categories represent search intent (topic), not audience
- avoid splitting the same intent into student vs graduate vs professional posts; handle audience sections inside one strong post
- do not publish thin placeholder posts or empty category pages as indexable
- do not add `/blog` or blog categories to the XML sitemap until real posts are published

### Blog Publishing Checklist (Exhaustive)

This checklist is designed so you can publish one SEO article at a time without creating cleanup pain later.

#### 1) Intent and placement

1. Choose the primary search intent:
   - "how to become X" (career-options)
   - "what to do after 10th/12th" (stream-selection)
   - "roadmap for X" (skill-roadmaps)
   - "resume/interview/linkedin" (job-search/resume/interviews/linkedin-networking)
   - "career test/psychometric/aptitude" (assessments)
2. Pick exactly one blog category that owns the post.
3. Decide the one main CTA destination:
   - guidance intent -> `/services/career-counselling-and-career-guidance/`
   - assessment intent -> `/services/assessments`
   - skill intent -> `/career-skills-compass` or `/career-resources?topic=skills&type=roadmap`

#### 2) URL + slug rules

1. Use only lowercase and hyphens.
2. Keep slugs short and readable (avoid stuffing).
3. Avoid dates and numbers in slugs unless unavoidable (e.g. class 10/12).
4. Do not create multiple near-identical posts for "students" and "professionals" separately; write one strong post and add audience sections.

#### 3) On-page SEO requirements

Every post must have:
- a strong H1 aligned with the primary intent
- a clear meta description (benefit + audience + what they get)
- a canonical URL that matches the final slug
- headings that map the query journey:
  - definition/overview
  - who it is for
  - roadmap/steps
  - mistakes
  - FAQs (only real questions)

If the post uses a named framework:
- the first introduction must use the exact framework name, not only a loose description
- later references must use the same name consistently
- if you refer back to it near the end of the article, make it obvious that the framework was already defined earlier in the same article

#### 4) Internal linking rules (non-negotiable)

Within the first third of the post:
- link to the parent category page `/blog/<category>/`
- link to exactly one main service CTA; blogs and MOFU pages should usually make guidance/counselling the main service CTA when the reader has decision pressure, with assessment links kept smaller and contextual

Near the end of the post:
- link laterally to 1-3 closely related posts in the same category (when they exist)
- include a short "Next step" block that routes to the correct hub

Avoid:
- linking to a lot of unrelated pages just to increase internal links
- linking to noindex pages

#### 5) Schema rules

Use `BlogPosting` schema.
- always include `datePublished`; visible publish dates strengthen credibility and freshness signals
- do not add fake author bios or fake reviews

#### 6) Indexation + sitemap rules

Default behavior for new blog skeleton pages:
- `/blog/` and `/blog/<category>/` stay `noindex` until real posts exist

When a category has real posts (and you want it indexed):
1. remove `noindex` from that category page
2. ensure it links to real posts

When the blog hub is ready for search:
1. remove `noindex` from `/blog/`
2. add `/blog` to `LIVE_INDEXABLE_ROUTES` in `src/config/site.ts`

Current live implementation in this repo:
- `/blog` is indexable
- `/blog/ai-future` is indexable because it now has a real published post
- `/blog/ai-future/top-careers-for-the-future` is in `LIVE_INDEXABLE_ROUTES`
- `/blog/career-guidance` is indexable because it has a real published post
- `/blog/career-guidance/how-to-choose-a-career-after-12th` is in `LIVE_INDEXABLE_ROUTES`
- `/blog/career-options` is indexable because it has a real published post
- `/blog/career-options/best-career-options-with-high-salary` is in `LIVE_INDEXABLE_ROUTES`
- `/blog/career-options/bca-career-options` is in `LIVE_INDEXABLE_ROUTES`
- `/blog/career-options/bba-career-options` is in `LIVE_INDEXABLE_ROUTES`
- `/blog/career-options/career-options-after-12th-commerce` is in `LIVE_INDEXABLE_ROUTES`
- `/blog/career-options/career-options-after-12th-pcb` is in `LIVE_INDEXABLE_ROUTES`
- `/blog/career-options/career-options-after-12th-science` is in `LIVE_INDEXABLE_ROUTES`
- `/blog/career-options/career-options-in-commerce` is in `LIVE_INDEXABLE_ROUTES`
- `/blog/career-options/career-options-in-arts` is in `LIVE_INDEXABLE_ROUTES`
- `/blog/career-options/pcb-career-options-without-neet` is in `LIVE_INDEXABLE_ROUTES`
- `/blog/career-options/pcm-career-options` is in `LIVE_INDEXABLE_ROUTES`
- `/blog/stream-selection` is indexable because it now has a real published post
- `/blog/stream-selection/career-options-after-10th` is in `LIVE_INDEXABLE_ROUTES`

Never:
- add empty category pages to `LIVE_INDEXABLE_ROUTES`
- add planned posts to the sitemap

### Practical Decision Rules for Future Agents

When adding a new page, ask:

1. Is this page really ready to be indexed?
2. What parent folder should own it?
3. Does a parent hub page already exist?
4. Should this page live under `/services/`, `/blog/`, `/locations/`, `/resources/`, or another established branch?
5. What page should link to it first?
6. What page should it link back up to?

If those answers are unclear, do not invent a flat root URL by default.

### Short Rule Block

If a lower-context model reads only one section, remember:

- use `futurecareerschool.com` as canonical
- keep the public sitemap limited to real live pages
- prefer parent-child subfolders over flat keyword slugs
- use parents as hubs and children as focused detail pages
- mirror the URL in breadcrumbs
- do not create doorway or placeholder pages
- update `src/config/site.ts`, `PROJECT_MEMORY.md`, and this file whenever real architecture changes

## Additional Consolidated Rules (Completeness Layer)

This layer exists so future informational and BOFU prompts can stay short while still following all required implementation rules.

### Current Noindex or Non-Primary Routes

These routes exist but are not primary indexable landing pages:
- `src/pages/topics-index.astro` (redirect shim, `noindex,nofollow`)
- `src/pages/career-landing.html` (legacy, canonicalized to home, noindex)
- `src/pages/coaches-dashboard.html` (internal/training, noindex)
- `src/pages/404.astro` (not-found fallback, noindex)

### Shared SEO and Deployment Notes

Hostinger deployment note:
- keep deployment behavior aligned with `.htaccess` canonical/redirect logic
- verify canonical `.com` behavior after each deployment

`astro.config.mjs`:
- canonical site is `https://futurecareerschool.com`
- directory output format is intentional for clean subfolder URLs

`public/.htaccess`:
- Hostinger-ready redirect file
- `.in` alternate domain can be consolidated into canonical `.com`
- includes `/topics-index` permanent redirect handling

`public/og-image.svg`:
- default social preview asset used by `BaseLayout`
- should exist before shipping pages that rely on shared OG fallback

### Hostinger Deployment Check

After deployment:
1. upload `dist/*` into `public_html` (or target web root)
2. ensure `.htaccess` is present in deployed root
3. ensure SSL is active
4. verify:
- `http://futurecareerschool.com`
- `http://www.futurecareerschool.com`
- `https://futurecareerschool.com/topics-index`
- `https://futurecareerschool.com/robots.txt`
- `https://futurecareerschool.com/sitemap.xml`

### Main Modern Pages (Operational Context)

`src/pages/index.astro`:
- homepage entry point for broad value proposition and audience segmentation

`src/pages/services/index.astro`:
- live services parent hub

`src/pages/about/index.astro`:
- about hub page linking to planned children

`src/pages/locations/index.astro`:
- locations hub page linking to planned city children

`src/pages/contact/index.astro`:
- live contact page with booking/contact actions

### Planned Information Architecture (Live vs Planned Clarity)

Live hubs:
- `/about/`
- `/services/`
- `/blog/`
- `/locations/`
- `/contact/`

Planned or partially planned:
- `/resources/`
- `/support/faq/`
- `/contact/book-session/`
- deeper service/location children as content is published

### BOFU Source-of-Truth Rule

- BOFU copy truth comes from `BOFU_PAGE_PROMPT.md`
- shared execution mechanics come from this workflow
- never invent BOFU business claims (pricing, guarantees, promises, timelines, outcomes)
- treat `career counselling`, `career guidance`, `career coaching`, and `career strategy` as one practical service family unless the user explicitly asks for a narrower distinction
- use the exact user search term where useful in the visible copy, but do not invent false service differences between those labels
- preserve the approved assessment truth: many providers charge thousands for outdated or impractical assessments, while Future Career School offers free, updated, practical, AI-powered career and skill assessments
- prefer clearer phrasing like `achieving earlier financial freedom` when the sentence needs that wording
- `src/config/bofu.ts` is the live implementation source for the shared BOFU comparison library and default internal CTA destinations
- broad BOFU parent pages can show the full comparison library, while narrower BOFU child pages should pass only the rows that genuinely fit the keyword
- on non-assessment BOFU pages, do not lead the hero section with an assessment CTA; keep hero CTA count lean and let assessments appear later when relevant
- on BOFU pages, adapt visible CTA wording to the exact keyword or closest natural search phrasing instead of defaulting to generic audience-label wording
- on non-assessment career counselling, guidance, coaching, or strategy pages, keep the closing CTA to one intended primary action and let assessment links stay contextual inside the body instead of repeating them as the bottom CTA
- on non-assessment career counselling, guidance, coaching, or strategy pages, do not build a full dedicated assessment section by default; use a small contextual note or link instead
- when a reusable inline assessment note is needed across BOFU pages, prefer `src/components/bofu/AssessmentSupportNote.astro`
- BOFU section-tag / eyebrow labels must stay client-facing and should not sound like internal planning or framework language
- blog section labels, card labels, CTA labels, and related-link descriptions must also stay reader-facing and should not sound like content planning notes, prompt language, or developer commentary
- after changing any public page, shared article layout, shared CTA, or shared link section, run `npm run check:public-copy` after build and treat failures as release blockers
- when narrower student-intent BOFU keywords ultimately route to the broader student guidance destination, keep the broader student page CTA wording at the student-guidance level instead of stacking narrower keyword CTA labels there

### Two-Click Internal Linking Rule

Important pages should not be buried.

Practical structure:
- homepage/nav -> major hub
- hub -> live child pages
- child -> links back to hub/parent

### Link Building and Link Juice

Subfolder hubs concentrate authority and pass it to child pages.

Backlink targeting should be distributed across:
- homepage (brand)
- high-competition money pages
- subfolder hubs (topical authority)

Anchor text should align with subfolder intent when natural.

### Avoiding Obvious Formatting Patterns

Do not force identical title formatting across all articles.
Vary title structures naturally to avoid template-like footprints.

### AI and Scaled Content Risk

Avoid scaled near-duplicate page generation.
Do not mass-produce thin pages for long-tail capture without unique value.

### Doorway Page Prevention

Avoid location/service pages that only swap city or keyword tokens.
Each page must have distinct intent, specific value, and legitimate internal linking context.

### Technical On-Page Rules

Every indexable page should have:
- one H1
- clear H2/H3 hierarchy
- title/meta/canonical
- mobile-friendly rendering
- internal links to relevant hubs
- schema matching real content
- server-rendered critical copy and links

### Human-First Structure

Structure for users first:
- direct answers early
- short readable sections
- clear headings and lists
- practical examples and clear next-step CTAs

### First-Screen Answer Rule

For any public page, the visitor should feel they are in the right place before they need to scroll.

Apply this opening logic:
- the first sentence should prove the page is directly relevant to the query
- the opening should answer, orient, or convert immediately instead of warming up too slowly
- if the exact keyword is long or awkward, use a close natural variation early instead of forcing robotic phrasing
- if the page is long, nuanced, or easy to skim past, use a short 2-to-3 sentence summary or short-version block near the top

Intent split:
- informational or top-of-funnel pages should answer the question first, not pitch too early
- BOFU or service-intent pages should establish fit and why this offer is worth choosing, not explain the category in abstract terms

### Authority, Intent, and Relevance

Core SEO principle:
- satisfy search intent
- maintain exact keyword relevance
- build topical authority through quality and structure
- publish only pages useful enough to deserve indexation

### Canonical Host Intent

If `.in` serves the same content, consolidate canonical intent to `.com`.
Keep `futurecareerschool.com` as the primary canonical production host.
