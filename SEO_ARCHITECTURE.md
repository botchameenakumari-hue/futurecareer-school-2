# SEO Architecture

Status: Evergreen baseline

## Mission

This repository should evolve into a strongly structured, SEO-compatible website for `futurecareerschool.com`.
The architecture goal is not to publish the most URLs.
The goal is to publish the right URLs in the right hierarchy, with strong internal linking, clear semantics, and no thin or doorway pages.

## Canonical Domain Rules

Primary canonical domain:
- `https://futurecareerschool.com`

Secondary brand domain:
- `https://futurecareerschool.in`

Rules:
- use `.com` as the canonical production domain unless a deliberate domain strategy change is made
- do not reintroduce `futurecareer.school` in canonicals, structured data, robots, sitemap, or internal docs
- if `.in` is used publicly, treat it as an alternate brand domain, not the default canonical target

## Core Architecture Principle

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

Important live-page rule:
- do not publish internal SEO architecture explanations on public pages
- public pages should explain the user's problem, service, outcome, process, and next action
- architecture notes belong in markdown files, not in client-facing copy

Evergreen copy rule:
- avoid explicit calendar dates in evergreen page slugs, titles, and marketing copy unless the page is genuinely date-bound
- prefer wording like `current market`, `present situation`, `future-ready`, or `long-term`

## SEO Content Strategy

The broader content strategy from `SEO_CONTENT_STRATEGY.md` applies across the site.

Core content rules:
- publish non-commodity content, not generic rewritten advice
- make content unique, specific, and authentic wherever possible
- use exact target keywords in the title, URL slug, H1, meta description, and first sentence
- vary title formats so the site does not look templated
- keep critical SEO copy and links server-rendered
- organize for human reading, not artificial "AI chunking"
- avoid scaled, near-duplicate pages

Bottom-of-funnel service title formula:
- `[Target Keyword] | [Benefit or Searcher's Goal] | Future Career School`

For BOFU service pages, use `BOFU_PAGE_PROMPT.md`.

## Live Sitemap Policy

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

## Live Information Architecture

Current live indexable pages:
- `/`
- `/services`
- `/services/career-counselling-and-career-guidance`
- `/services/career-counselling-and-career-guidance/career-guidance`
- `/services/career-counselling-and-career-guidance/career-coach-near-me`
- `/services/career-counselling-and-career-guidance/career-counselling`
- `/services/career-counselling-and-career-guidance/career-counselling-online`
- `/services/career-counselling-and-career-guidance/locations`
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-visakhapatnam`
- `/services/career-counselling-and-career-guidance/student-career-guidance`
- `/services/career-counselling-and-career-guidance/career-guidance-after-12th`
- `/services/career-counselling-and-career-guidance/career-guidance-after-12th-online`
- `/services/career-counselling-and-career-guidance/career-guidance-online`
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
- `/skill-finder`
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

Meaning:
- `/services/` is the client-facing services hub
- `/services/career-counselling-and-career-guidance/` is the primary client-facing career counselling, guidance, and coaching service page
- `/services/career-counselling-and-career-guidance/career-guidance/` is a live BOFU child page for direct `career guidance` intent, framed around practical direction, skill-path decisions, and the threshold between free exploration and paid guidance
- `/services/career-counselling-and-career-guidance/career-coach-near-me/` is a live BOFU child page for high-intent "near me" searches that still routes users into the main guidance service truth
- `/services/career-counselling-and-career-guidance/career-counselling/` is a live BOFU child page for direct `career counselling` intent, framed around counselling-first clarity, next-step decisions, and whether one session is enough
- `/services/career-counselling-and-career-guidance/career-counselling-online/` is a live BOFU child page for direct `career counselling online` intent, framed around mixed-audience online clarity across India without depending on local options
- `/services/career-counselling-and-career-guidance/locations/` is the live parent for city-intent guidance pages inside the main guidance branch
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-visakhapatnam/` is the live BOFU child page for direct `career counselling in visakhapatnam` intent, framed around city search intent plus practical online clarity across India
- `/services/career-counselling-and-career-guidance/student-career-guidance/` is a live audience-specific BOFU landing page for school students, college students, freshers, recent graduates, and postgraduates
- `/services/career-counselling-and-career-guidance/career-guidance-after-12th/` is a live BOFU child page for direct `career guidance after 12th` intent, focused on course, degree, skill, and next-step decisions before expensive wrong turns
- `/services/career-counselling-and-career-guidance/career-guidance-after-12th-online/` is a live BOFU child page for direct `career guidance after 12th online` intent, focused on online access across India, parent-student clarity, and faster after-12th decision support without location friction
- `/services/career-counselling-and-career-guidance/career-guidance-online/` is a live BOFU child page for direct `career guidance online` intent, framed around mixed-audience online delivery across India for students, freshers, and working professionals without depending on local options
- `/services/career-counselling-and-career-guidance/working-professional-career-guidance/` is a live audience-specific BOFU landing page for working professionals
- the `#guidance-process` section on `/services/career-counselling-and-career-guidance/` is the live process/details destination
- `/services/assessments/` is the assessment and career-test hub
- `/services/assessments/class-10-and-below/` is the broader free assessment page for school students up to Class 10
- `/services/assessments/class-11-to-12/` is the broader free assessment page for Class 11 and 12 students
- `/services/assessments/stream-selector-test-after-10th/` is the focused quick quiz for direct stream-choice intent after Class 10
- `/services/assessments/career-aptitude-test-after-10th/` is the focused quick quiz for direct aptitude-after-10th intent
- `/services/assessments/stream-selector-test-after-12th/` is the focused quick quiz for direct career-test or path-choice intent after Class 12
- `/services/assessments/career-aptitude-test-after-12th/` is the focused quick quiz for direct aptitude-after-12th intent
- `/about/` is the hub for company information — links to /about/team/, /about/vision/, /about/reviews/ (child pages build out over time)
- `/locations/` is the hub for city-specific career guidance pages — links to city child pages (built step by step)
- `/contact/` is the functional contact page with WhatsApp, email, phone, and address — links to /contact/book-session/ (planned)

Current non-primary routes:
- `/topics-index` -> redirect/noindex
- `/career-landing` -> legacy/noindex
- `/coaches-dashboard` -> internal/noindex
- `/404` -> noindex not-found fallback

Redirect support currently included in repo:
- `public/.htaccess` for Hostinger / Apache-style permanent redirects
- Hostinger hPanel Redirects can be used instead of `.htaccess` if you prefer panel-managed rules
- `src/pages/topics-index.astro` as a fallback noindex redirect shim if a host redirect is missing

Canonical host intent:
- if `futurecareerschool.in` serves the same public site, permanently redirect it to `futurecareerschool.com`
- keep `futurecareerschool.com` as the only canonical production host

## Planned Parent-Child Hierarchy

These are the preferred expansion targets as real pages are built.
They are planning targets, not all current live pages.

### About
- `/about/`
- `/about/team/`
- `/about/vision/`
- `/about/reviews/`

### Services
- `/services/`
- `/services/career-counselling-and-career-guidance/` (current live BOFU service page)
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
- `/locations/visakhapatnam/`
- `/locations/kolkata/`
- `/locations/jaipur/`
- `/locations/kochi/`
- `/locations/lucknow/`

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

## Content-Silo Rules

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

## Internal Linking Rules

### Upward flow
Every child page should link back to its parent.

Examples:
- `/services/assessments/psychometric/` -> `/services/assessments/`
- `/services/counselling/students/class-11-12/` -> `/services/counselling/students/`

### Two-click access
Important live pages should be reachable through a hub within about two clicks from the homepage or main navigation.

Rules:
- global navigation should link to major hubs or primary money pages
- hubs should link to live children and supporting pages
- footer links should reinforce important crawl paths
- do not link globally to thin planned pages that are not published yet

### Lateral flow
Sibling pages can link to each other when useful.

Examples:
- `class-8-10` can link to `class-11-12`
- `psychometric` can link to `aptitude`

### Hub flow
Blog, resources, and content pages should pass relevance upward into the right commercial or topical hub.

Examples:
- a stream-selection blog post should link into counselling/student pages
- an AI-skills article should link into skill pages or future coaching/service pages
- assessment-focused blocks should link to `/services/assessments` before linking to deeper child tests

## Breadcrumb Rules

Breadcrumbs must match the actual URL hierarchy.

Examples:
- `Home > Services > Counselling > Students > Class 8-10`
- `Home > Blog > Guidance > How to Choose Streams`

Rules:
- do not invent breadcrumbs that do not match the path
- breadcrumb schema should use the real canonical URLs
- use breadcrumbs on all deeper child pages

## Schema Rules

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

## Technical SEO Notes

- Do not block `/_astro/` in `robots.txt`; search engines may need CSS and JS assets for rendering.
- Keep Astro on directory output unless there is a deliberate hosting reason to switch formats.
- When retiring an old route, prefer a real host-level permanent redirect in addition to any HTML fallback redirect page.
- This repo is currently prepared for Hostinger-style static deployment, not Vercel or Netlify-specific redirect config.

## Hostinger Deployment Check

After each real deployment:

1. Upload the built contents of `dist/*` into the live web root, typically `public_html`.
2. Confirm `.htaccess` exists in the deployed root.
3. Confirm SSL is active before relying on HTTPS redirect behavior.
4. Test:
   - `http://futurecareerschool.com`
   - `http://www.futurecareerschool.com`
   - `https://futurecareerschool.com/topics-index`
   - `https://futurecareerschool.com/robots.txt`
   - `https://futurecareerschool.com/sitemap.xml`
5. Make sure the final public responses match the canonical `.com` setup.

## Local SEO Rules

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

## Topical Authority Rules

The project already has strong raw topic data inside:
- `src/pages/skill-finder.astro`
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

### Proven Real-World Topical Authority Examples

These examples demonstrate how strong subfolder grouping creates massive topical authority:

**NapLab (Mattress Affiliate Space)**
- Target keyword: "best mattress" — one of the most competitive affiliate keywords in existence.
- Structure: an 18,000-word hub at `/best-mattress/` with nested child pages `/best-mattress/memory-foam/`, `/best-mattress/side-sleepers/`, etc.
- Result: that single subfolder ranks for over 2,600 keywords in the top three Google positions.
- Lesson: the hub establishes the topic and the children capture every variation under one concentrated authority root.

**Law Firm (Chicago Car Accident)**
- Target keyword: "Chicago car accident lawyer."
- Structure: used the exact phrase as a subfolder root `/chicago-car-accident-lawyer/`, then built child pages for `/hit-and-run/`, `/rear-end-accident/`, `/t-bone/`, etc.
- Lesson: exact-match subfolder slug concentrates authority for the entire practice area; children inherit that topical signal.

**Application to Future Career School**
- `/services/assessments/` should be built out with child pages `/services/assessments/psychometric/`, `/services/assessments/aptitude/`, `/services/assessments/skill-assessment/`.
- `/blog/career-options/` is a live hub for role-by-role career path articles.
- `/blog/career-guidance/` is the hub; each published article strengthens career guidance topical authority.
- `/locations/` when built should follow the same hub-and-child model: parent hub at `/locations/` with unique city-specific children.

### Link Juice and Backlink Concentration

Subfolder structure also concentrates external backlink authority.

Key rules:
- backlinks pointing to a subfolder hub distribute link juice to all child pages inside it
- a backlink with targeted anchor text (e.g., "career assessments") pointing to `/services/assessments/` makes all assessment child pages more authoritative for that niche
- alternate link-building targets: homepage, specific high-competition pages, and distinct subfolder hubs
- do not rely only on homepage backlinks; subfolder-targeted backlinks independently build niche topical authority

Practical targets for Future Career School backlinks:
- `/services/assessments/` for career test and psychometric test authority
- `/services/career-counselling-and-career-guidance/` for career guidance and counselling authority
- `/blog/career-options/` for role-guide and career-path informational authority
- `/blog/career-guidance/` for informational career guidance authority
- `/locations/` subfolder when live, for local SEO authority by city

## Anti-Spam and Anti-Doorway Rules

Never scale URLs just to look bigger.

Avoid:
- dozens of city pages with near-duplicate copy
- dozens of keyword-stuffed service pages with no unique value
- flat root-level slugs for every variant
- adding pages to the sitemap before the content is ready
- AI-generated scaled pages that repeat the same template without new value

If a page exists, it should have:
- a clear purpose
- unique value
- a relevant parent silo
- internal links that make sense
- enough content to deserve indexation

## Navigation Rules

Global navigation should favor real parent hubs and discovery pages.

Current preferred primary nav focus:
- `/services`
- `/services/career-counselling-and-career-guidance`
- `/skill-finder`
- `/career-resources`

Do not give primary public nav weight to:
- internal training dashboards
- noindex legacy pages
- experimental placeholders

## Page Publishing Checklist

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

## Blog Architecture (Siloed)

The blog must follow the same parent-child rules:

- Hub: `/blog/`
- Category: `/blog/<category>/`
- Post: `/blog/<category>/<post-slug>/`

Rules:
- categories represent search intent (topic), not audience
- avoid splitting the same intent into student vs graduate vs professional posts; handle audience sections inside one strong post
- do not publish thin placeholder posts or empty category pages as indexable
- do not add `/blog` or blog categories to the XML sitemap until real posts are published

## Blog Publishing Checklist (Exhaustive)

This checklist is designed so you can publish one SEO article at a time without creating cleanup pain later.

### 1) Intent and placement

1. Choose the primary search intent:
   - "how to become X" (career-options)
   - "what to do after 10th/12th" (stream-selection)
   - "roadmap for X" (skill-roadmaps)
   - "resume/interview/linkedin" (job-search/resume/interviews/linkedin-networking)
   - "career test/psychometric/aptitude" (assessments)
2. Pick exactly one blog category that owns the post.
3. Decide the one main CTA destination:
   - guidance intent -> `/how-guidance-works`
   - assessment intent -> `/services/assessments`
   - skill intent -> `/skill-finder` or `/career-resources?topic=skills&type=roadmap`

### 2) URL + slug rules

1. Use only lowercase and hyphens.
2. Keep slugs short and readable (avoid stuffing).
3. Avoid dates and numbers in slugs unless unavoidable (e.g. class 10/12).
4. Do not create multiple near-identical posts for "students" and "professionals" separately; write one strong post and add audience sections.

### 3) On-page SEO requirements

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

### 4) Internal linking rules (non-negotiable)

Within the first third of the post:
- link to the parent category page `/blog/<category>/`
- link to exactly one main service CTA (guidance or assessments or skill finder)

Near the end of the post:
- link laterally to 1-3 closely related posts in the same category (when they exist)
- include a short "Next step" block that routes to the correct hub

Avoid:
- linking to a lot of unrelated pages just to increase internal links
- linking to noindex pages

### 5) Schema rules

Use `BlogPosting` schema.
- always include `datePublished`; a visible publish date improves credibility and shows active maintenance
- do not add fake author bios or fake reviews

### 6) Indexation + sitemap rules

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
- `/blog/ai-future` is indexable because it has a real published post
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
- `/blog/stream-selection` is indexable because it has a real published post
- `/blog/stream-selection/career-options-after-10th` is in `LIVE_INDEXABLE_ROUTES`

Never:
- add empty category pages to `LIVE_INDEXABLE_ROUTES`
- add planned posts to the sitemap

## Practical Decision Rules for Future Agents

When adding a new page, ask:

1. Is this page really ready to be indexed?
2. What parent folder should own it?
3. Does a parent hub page already exist?
4. Should this page live under `/services/`, `/blog/`, `/locations/`, `/resources/`, or another established branch?
5. What page should link to it first?
6. What page should it link back up to?

If those answers are unclear, do not invent a flat root URL by default.

## Short Rule Block

If a lower-context model reads only one section, remember:

- use `futurecareerschool.com` as canonical
- keep the public sitemap limited to real live pages
- prefer parent-child subfolders over flat keyword slugs
- use parents as hubs and children as focused detail pages
- mirror the URL in breadcrumbs
- do not create doorway or placeholder pages
- update `src/config/site.ts`, `PROJECT_MEMORY.md`, and this file whenever real architecture changes
