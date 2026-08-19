# Bottom-of-Funnel Page Prompt

Status: Active prompt for BOFU service-intent pages.

**This prompt is fully self-contained. You do not need to read any other document to use it.**

## Google Analytics (Mandatory)

Every page created using this prompt must use `src/layouts/BaseLayout.astro`. That shared layout
already imports and renders the authoritative Analytics and consent files:

- `src/components/GoogleAnalytics.astro`
- `src/components/ConsentBanner.astro`

Use those existing files through `BaseLayout`; do not copy, recreate, replace, or directly import
their code in an individual page. Do not add a page-level Google tag or load `gtag.js` directly.
Confirm in the rendered HTML that the shared Analytics initialization and consent controls each
appear exactly once.

Use this file for high-intent pages around:
- career counselling
- career guidance
- career coaching
- career coach near me
- career strategy
- career clarity
- salary-growth guidance
- career change guidance
- student career guidance
- working professional career guidance

This file can also be used for other close BOFU variants when the commercial intent is meaningfully the same, even if the wording is not an exact match to the examples above.

This file is for BOFU pages (commercial / buying intent — someone ready to hire, book, or choose a
service). If the keyword has purely informational intent (someone researching, not ready to act), it
is not a BOFU topic — handle it as an informational article instead.

---

## Project Context

**Active project folder:** `C:\Users\Asus\Documents\futurecareer-school-2`

**Site:** Future Career School
**Canonical domain:** `https://futurecareerschool.com`
**Secondary brand domain:** `https://futurecareerschool.in` (alternate only, not canonical)
**Do not use** `futurecareer.school` — that is an older incorrect assumption.

**Framework:** Astro 4.x
**Deployment:** Hostinger (Apache/`.htaccess` style)

**Core site identity:**
- Positioned as career strategy, structured decision support, skills and market-fit guidance, income growth and leverage planning, AI-aware career planning, India-first delivery with online reach across cities
- Main audiences: students, freshers, working professionals, coaches or internal training users
- Services: career counselling, career guidance, career coaching, assessments, career strategy — treated as one practical service family unless the user explicitly asks for a narrower distinction

---

## Non-Negotiable Truth Rule

Do not invent business facts, deliverables, promises, prices, guarantees, frameworks, timelines, or outcomes.
Use only what is explicitly present in this file or what the user explicitly approves in the conversation.

If a detail is not defined here:
- do not make it up
- use neutral wording
- or ask the user before publishing that claim

This rule is strict because BOFU pages must stay commercially accurate.

---

## What To Do After Reading This File

1. Inspect the closest live BOFU page before writing:
   - `src/pages/services/career-counselling-and-career-guidance/index.astro`
   - and the nearest relevant child or sibling page
2. Read `src/config/bofu.ts` for the live shared BOFU comparison library and default CTA destinations.
3. Write the page following all rules in this file.
4. After writing, run `npm run check:public-copy` after build and fix any rendered-copy failures before treating the page as complete.

---

## SEO Architecture and URL Rules

Prefer parent-child subfolder architecture over flat root-level slugs.

**Good:**
- `/services/career-counselling-and-career-guidance/career-guidance/`
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-visakhapatnam/`

**Avoid:**
- `/career-counselling-for-students/`
- `/best-career-guidance-mumbai/`

For career counselling, career guidance, career coaching, and city-intent variants, prefer:
- `/services/career-counselling-and-career-guidance/` as the parent
- `/services/career-counselling-and-career-guidance/<keyword-slug>/` as the child
- `/services/career-counselling-and-career-guidance/locations/<city-slug>/` for city-intent pages

If a parent hub page does not exist yet and the child page is genuinely ready, create the parent in the same pass instead of publishing the child alone.

**Title formula for BOFU service pages:**
- `[Target Keyword] | [Benefit or Searcher's Goal] | Future Career School`

**URL slug rules:**
- lowercase and hyphens only
- short and readable, no keyword stuffing

---

## Live Information Architecture (Current Routes)

Current live BOFU service pages:
- `/services/career-counselling-and-career-guidance/` — primary service hub for career counselling, guidance, and coaching intent
- `/services/career-counselling-and-career-guidance/career-guidance/` — direct `career guidance` intent
- `/services/career-counselling-and-career-guidance/career-coach-near-me/` — near-me coaching intent
- `/services/career-counselling-and-career-guidance/career-counselling/` — direct `career counselling` intent
- `/services/career-counselling-and-career-guidance/career-counselling-online/` — online counselling intent
- `/services/career-counselling-and-career-guidance/locations/` — parent for city-intent pages
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-visakhapatnam/` — live city page
- `/services/career-counselling-and-career-guidance/student-career-guidance/` — student audience page
- `/services/career-counselling-and-career-guidance/career-guidance-after-12th/` — after-12th stage page
- `/services/career-counselling-and-career-guidance/career-guidance-after-12th-online/` — after-12th online page
- `/services/career-counselling-and-career-guidance/career-guidance-online/` — online guidance intent
- `/services/career-counselling-and-career-guidance/working-professional-career-guidance/` — working professional page
- `/services/assessments/` — assessments hub
- `/services/assessments/class-10-and-below/`
- `/services/assessments/class-11-to-12/`
- `/services/assessments/graduates-and-early-professionals/`
- `/services/assessments/working-professionals-and-career-changers/`
- `/services/assessments/stream-selector-test-after-10th/`
- `/services/assessments/career-aptitude-test-after-10th/`
- `/services/assessments/stream-selector-test-after-12th/`
- `/services/assessments/career-aptitude-test-after-12th/`

Sitemap route config lives in `src/config/site.ts` as `LIVE_INDEXABLE_ROUTES`.
Add new pages there only when genuinely ready for indexing.

---

## Shared SEO/Config Files

**`src/layouts/BaseLayout.astro`** — central SEO wrapper: title, description, canonical, robots, OG tags, JSON-LD injection.

**`src/config/site.ts`** — contains `SITE_NAME`, `SITE_URL`, `SITE_ALTERNATE_URLS`, `DEFAULT_OG_IMAGE_PATH`, `DEFAULT_OG_IMAGE_URL`, `CONTACT`, `WHATSAPP_BASE_URL`, `WHATSAPP_BOOKING_URL`, `LIVE_INDEXABLE_ROUTES`.

**`src/components/Nav.astro`** — shared public navigation.

**`src/components/Footer.astro`** — shared footer with crawl-supporting links.

---

## Publishing Workflow For Every New BOFU Page

1. Create the page under the correct parent-child folder structure.
2. Add the route to `LIVE_INDEXABLE_ROUTES` in `src/config/site.ts`.
3. Confirm the page is discoverable through `src/config/directory.ts` on the relevant parent browsing/directory page; add curated metadata only when the automatic fallback is not good enough.
4. Make sure the page uses `BaseLayout.astro` for canonical, title, description, and JSON-LD.
5. Add breadcrumbs that mirror the URL hierarchy.
6. Add `BreadcrumbList` schema, `Service` schema, and `FAQPage` schema only when a real FAQ section exists.
7. Add internal links from the parent page or closest relevant hub.
8. Run `npm run check:public-copy` after build and fix rendered-copy failures.
9. Rebuild and verify generated `dist/sitemap.xml` and `dist/robots.txt`.

---

## Approved BOFU Facts and Messaging Bank

This section is the source-of-truth bank for BOFU writing.
It is not a mandatory verbatim script.
Use these facts naturally and flexibly in client-facing copy.

### Core Positioning

- Achieving earlier financial freedom through high-value skill building is a core positioning priority.
- Unlocking high income opportunities through a high-value, high-income skill portfolio is a core positioning priority. The chain is: right skill portfolio → high income opportunities → earlier financial freedom. This chain should be visible whenever the positioning section appears.
- Building a high-value, high-income skill portfolio is a core positioning priority — not just one skill decision, but a deliberate portfolio of skills that compounds earning potential and opens high income opportunities over time.
- A holistic skill approach is a core positioning priority. FCS covers not just technical or hard skills but the full picture: the right skill mix for the person, proof of work, communication skills, market positioning, fit with how they actually work, and their financial and family reality.
- High-leverage decision support is a core positioning priority.
- Skill-first direction with proof of work is a core positioning priority.
- Practical career guidance that goes beyond generic, degree-only thinking (where someone chases a credential without building skills) is a core positioning priority. Degrees have a place — the issue is degree-only thinking without skill-building alongside it.

### Approved Business Facts

- Future Career School serves students, freshers, and working professionals across school, college, recent-graduate, postgraduate, and career-growth stages.
- Career counselling, career guidance, career coaching, career strategy, and other close variants that point to the same practical need can be treated as one service family unless the user explicitly asks for a narrower distinction.
- Use the exact word the searcher used in visible copy when natural, but do not invent fake service differences between those labels.
- Guidance is delivered online across India.
- Sessions are fully online and available across cities, not limited to one offline location.
- The business should not be described as a job-guarantee or placement service.
- BOFU copy should not be centered on session format or how long support continues unless the user explicitly asks for that angle.
- Guidance can be described as starting with practical clarity on strengths, work style, and market fit, then moving toward stronger skill direction, proof of work, communication, and tech leverage when relevant.
- For students, the service can be described as helping with early direction, stream awareness, course choice, skill clarity, and first-career decisions.
- For working professionals, the service can be described as helping with stagnation, AI pressure, career pivots, salary-growth decisions, and stronger positioning.

### Free Access and Tools

- Career and skill assessments are fully free.
- The assessments can be described as updated, practical, and AI-powered.
- Many providers in the market charge thousands for outdated or impractical assessments and present them like deal-breakers; Future Career School can be described truthfully as offering free, updated, practical, AI-powered career and skill assessments.
- Career and income-growth resources are free.
- Career & Skills Compass and course-finder tools are free.

### Approved Plans and Pricing Facts

- If a BOFU/service page includes a pricing or plans section, use the shared pricing source instead of hardcoding page-local values.
- Shared source of truth for plans and pricing:
  - `src/config/guidancePlans.ts`
  - `src/components/bofu/StudentGuidancePlan.astro`
  - `src/components/bofu/WorkingProfessionalGuidancePlan.astro`
  - `src/components/bofu/GuidancePlansSection.astro`
- Student pricing approved for reuse:
  - `₹250` for the first session
  - after the first session, students can be described as moving into continuous career guidance group sessions
  - those student groups can be described as small groups, usually `10 or fewer` members
  - this should be framed as ongoing high-value decision support for every serious student so they do not get stuck with useless, outdated, or irrelevant skills or education
  - if continuous guidance is the student path being emphasized, it is fine for the shared student card to lead with one short continuous-guidance CTA instead of showing two student buttons at once
  - when that happens, make it clear that the 1-on-1 is included in the continuous-guidance path instead of making the card feel like two competing student offers
- Working-professional pricing approved for reuse:
  - `₹3000` per session
- Do not invent any additional pricing tiers, packages, discounts, guarantees, durations, or deliverables beyond what the user has approved.
- Current approved shared-pricing overrides:
  - student 1-on-1 can be shown with `Rs 3000` crossed and `Rs 250` as the current limited-time price
  - working-professional 1-on-1 can be shown with `Rs 5000` crossed and `Rs 3000` as the current limited-time price
  - student continuous guidance can be shown with `Rs 29000` crossed and `Rs 12000` as the current limited-time price
  - student continuous guidance includes the 1-on-1 and up to `24` small-group sessions across the year
  - when older pricing wording conflicts with the live shared pricing source in `src/config/guidancePlans.ts`, treat the shared source as the truth
- If a page includes pricing or plans, do not build page-local pricing cards when the shared guidance plans system already fits the page.
- Keep the shared pricing source as the single source of truth so future pages using it update automatically on the next build/deploy.
- On broad pages that genuinely target both audiences, it is fine to show both shared pricing components.
- On student-only pages, show only the student pricing component.
- On working-professional-only pages, show only the working-professional pricing component.
- Keep shared plans sections lean and fast to scan.
- Do not turn the plans section into a long preamble or mini sales page before the cards.
- Inside shared plans cards, prioritise only decision-helping content:
  - who the plan is for
  - price
  - what gets clearer
  - what makes Future Career School better than generic alternatives
  - continuous student guidance or skill-readiness angle where genuinely relevant
  - one short online / availability note if needed
- Make the price one of the most visually prominent elements in the plans section.
- Keep plan-card copy short enough to scan in seconds; do not turn each card into a dense mini landing page.
- Keep plan-card buttons short and fast to understand; do not force long audience-and-service phrases into every button when the card context already makes the audience clear.
- Do not let plan-card advantages drift into assessment-led positioning unless the keyword itself is assessment-heavy.
- Avoid narrowing phrases like `Best used when` inside shared plans cards when the service is broad enough for most serious prospects.
- Prefer broader scan-first labels such as `What you avoid`, `What gets clearer`, `What you move toward`, or `After the first 1-on-1` when they fit the audience better.
- For students, make it clear that continuous guidance follows the first 1-on-1 session and should be presented as the stronger ongoing support path, not as a fallback for a tiny subset.
- For students, it is fine to stress that stronger careers and earlier financial freedom usually come from a series of high-leverage decisions rather than one isolated session.
- For student plans, it is fine to stress affordability and practical value when that claim stays honest for the keyword being targeted.
- Avoid side-by-side label-and-paragraph plan rows when they waste horizontal space or make the card slower to scan; stacked scan-first rows are preferred.
- When a shared plans section is used, the visible section title and plans-jump CTA should use the exact service word for that page instead of defaulting to `guidance`.
- When a shared plans section is used, do not let the visible section title drift into vague wording, internal wording, or weak generic fragments.
  - The heading should feel commercially intentional, keyword-aware, and outcome-led.
  - Plan-card titles can stay concise audience-led labels such as `Student plan` or `Working professional plan` if repeating the full keyword would make the cards slower to scan.
    - examples: `Career Guidance Plans`, `Career Counselling Plans`, `Career Coaching Plans`, `Career Mentoring Plans`
- If the keyword is a close variant such as career counselling, career coaching, or career mentoring, keep the shared pricing source the same and only adapt the visible section or CTA wording naturally to the keyword.

### Positioning Angles Approved for Reuse

Use these ideas naturally where relevant:

- choose with more clarity before time and money get wasted
- achieving earlier financial freedom through stronger skill choices
- unlock high income opportunities through a deliberate high-value, high-income skill portfolio
- build a skill portfolio that compounds earning potential — not just one skill decision, but a full stack of skills that opens high income opportunities over time
- holistic skill approach: the right skill mix, proof of work, communication, market positioning, personal fit, and financial reality — not just technical skills in isolation
- focus on skills that create better long-term opportunities
- show skills and proof of work, not just degree dependence
- clearer income-growth direction, not just course or degree advice
- practical guidance that helps people avoid low-paying, generic paths
- free updated practical AI-powered assessments instead of paid outdated assessments

### Differentiation Angles Approved for Reuse

Use these contrast directions where relevant:

- generic advice vs high-leverage decision support
- degree-only thinking (chasing credentials without building skills) vs a holistic skill-first approach with proof of work — note: degrees have a place, but degree-only thinking without skill-building alongside it is the problem
- isolated skill decisions vs a deliberate high-value, high-income skill portfolio that compounds over time
- low-growth path dependency vs a stronger route toward achieving earlier financial freedom through higher-value skill building
- missed income opportunities vs unlocking high income opportunities through the right skill portfolio
- paid outdated impractical assessments vs free updated practical AI-powered career and skill assessments
- generic low-paying path advice vs higher-value skill direction with clearer income-growth logic
- random upskilling vs clearer skill direction tied to growth and income upside
- narrow technical skill focus vs a holistic approach covering skill mix, proof of work, communication, market positioning, and personal fit

Exact shared comparison row library approved for reuse:

- `Generic advice that still leaves you unclear` vs `High-leverage decision support around path, skill, and risk`
- `Degree-first direction with weak skill edge` vs `Skill-first direction with proof of work and stronger market value`
- `Low-growth paths that delay real earning progress` vs `Stronger skill choices aimed at achieving earlier financial freedom`
- `Paid outdated impractical assessments with weak practical value` vs `Free updated practical AI-powered career and skill assessments`
- `Generic low-paying path advice that limits growth` vs `Higher-value skill direction with clearer income-growth logic`
- `Random upskilling that compounds slowly` vs `Clearer skill direction tied to growth and income upside`

Future selection rule:
- if all of the shared comparison rows genuinely fit the keyword and page intent, present all of them
- if only some of the rows genuinely fit the keyword and page intent, present only the relevant rows
- do not force every BOFU page to show the full library when the intent is narrower
- do not invent new comparison rows outside the approved library

Source-of-truth rule for future pages:
- the approved contrast ideas live in this markdown file
- the exact shared comparison row library is mirrored in `src/config/bofu.ts`
- `src/components/bofu/ComparisonMatrix.astro` renders the shared library
- if a future page uses the shared comparison component without custom rows, the full library from `src/config/bofu.ts` is what will appear
- if a future page needs only some comparison rows, pass a deliberate approved subset from the same library instead of inventing new claims

Do not claim:
- guaranteed jobs
- guaranteed income outcomes
- absolute superiority claims that cannot be proven

### Guidance Process Ingredients

Use the relevant subset and order them in the way that best fits the page.
Do not force every page into the exact same section order.

1. Profile, preferences, strengths, psychometric, and work-style mapping
2. High-leverage decision support around path, role, skill, and risk
3. High-value skill direction
4. Proof of work, market validation, and role-signal building
5. Curated learning path, personal branding, and tech leverage
6. Career growth, income growth, and planning toward achieving earlier financial freedom

### What Guidance Is Not

- Not a job guarantee or placement guarantee.
- Not generic advice copied from public videos.
- Not degree-first pressure without skill thinking.
- Not low-growth path pushing dressed up as guidance.
- Not a shortcut without user effort.
- Not vague motivation without practical next steps.

### What Guidance Is

- High-leverage decision support for career and skill direction.
- A practical way to build a high-value, high-income skill portfolio — a deliberate stack of skills that compounds earning potential and opens high income opportunities over time.
- A holistic skill approach: not just technical skills, but the full picture — the right skill mix for the person, proof of work, communication skills, market positioning, fit with how they actually work, and their financial and family reality.
- A practical way to choose stronger skill paths before expensive commitments.
- Guidance that considers fit, market reality, and long-term upside — including unlocking high income opportunities.
- Support toward proof of work, positioning, and income growth direction.
- Honest feedback even when the best answer is not the easiest one.
- A clearer route toward achieving earlier financial freedom through stronger skill choices.

### Approved FAQ Ground Truth

These positions are approved:

- Degree alone is usually not enough for high income outcomes — skills and proof of work are what move the needle.
- A degree can support eligibility and has a place in many career paths.
- A degree is a credential, not a complete career strategy. The issue is degree-only thinking without skill-building alongside it, not degrees themselves.
- High-value skills plus proof of work matter.
- Achieving earlier financial freedom can be worked toward through profile-fit skill stacking and consistent execution.
- Career and skill assessments are fully free.
- Career and income-growth resources are free.
- Career & Skills Compass and course-finder tools are free.
- Guidance is online across India.
- Ethical providers do not guarantee jobs.

### Approved Question Angles

These angles are approved for BOFU pages:

- Which path and skill direction fits me best?
- How do I avoid a wrong turn before spending more time or money?
- My degree alone is not leading to strong income outcomes. What now?
- How do I upskill toward achieving earlier financial freedom through high-value skills?
- What if I am stuck in generic advice and still unclear?
- What should I check before paying any career guidance service?
- How is this different from normal career counselling or coaching?
- Are the career and skill assessments free?
- Can this help me build a stronger income-growth direction?
- Is this available online across India?

---

## Local and City-Intent Rule

Use these rules on local SEO / city-intent BOFU pages.

- A city page must say clearly that the service is online and available in that city and across India.
- Do not imply that the service depends on a nearby offline office, local branch, or in-person-only presence unless the user explicitly approves that claim.
- A city page should explain why someone in that city can still benefit from online guidance:
  - they can join from home, college, office, or wherever they already are
  - students and parents can participate without travel becoming another blocker
  - working professionals can start without depending on local office availability
  - decision quality matters more than only choosing the nearest provider
- A city page may explain why proximity alone is not enough:
  - nearby or local-sounding options can still leave the person with generic advice
  - practical usefulness, stronger skill direction, proof of work, and better next-step clarity matter more than city label alone
  - free updated practical AI-powered assessments are a stronger starting layer than paid outdated assessments presented like a deal-breaker
- Do not make unsupported absolute claims like:
  - `no local counsellor offers this`
  - `all local providers are outdated`
  - `we are the only good option in this city`
- Instead, compare honestly on approved differentiation angles:
  - practical decision support vs generic advice
  - online India-wide access vs dependence on weak local availability
  - higher-value skill direction and proof of work vs degree-first or low-growth advice
  - free updated practical AI-powered assessments vs paid outdated impractical assessments
- Required city-page implementation:
  - mention early that the service is online and available in that city
  - include at least one section, comparison, objection, or FAQ item that explains why online guidance can still be the stronger route from that city
  - keep the page useful for someone joining from home, college, or work in that city
  - integrate the city's main areas or neighbourhoods naturally where useful, usually around 5 to 25 place names depending on city size
  - do not dump locality names as SEO stuffing; blend them into real context about where people study, work, live, commute, or compare options from inside that city

---

## Client-Facing Copy Rules (Non-Negotiable)

Public website copy must speak to the visitor, not to the developer, editor, prompt, agent, or business owner.

If a sentence would make more sense in an assistant response than on the page itself, do not put it in the page.

**Non-negotiable copy rules:**
- Write for the reader's decision, doubt, problem, or next step.
- Make the visitor feel they are in the right place from the first line or first screen.
- Do not explain the page structure to the reader.
- Do not explain the site's SEO, indexing, URL hierarchy, or scaling logic to the reader.
- Do not use route instructions as public copy.
- Do not use planning language, prompt language, or architecture commentary in visible page copy.
- Do not leave placeholder-style progress notes in public copy.

**Avoid this kind of copy on public pages:**
- `use this page when...`
- `go back to the parent page...`
- `hub page`, `support page`, `related page`, `stage page`
- `this section can grow cleanly`
- `indexable`, `noindex`, `SEO-compatible`
- `this page is for...`, `why this page exists`, `keep this page focused`
- `broader service model`, `free first layer`, `assessment-first decision`
- `Weak version`, `Useful version`
- Any language that sounds like route instructions, site architecture commentary, workflow commentary, or content strategy notes

**What to write instead:**
- User benefit
- Practical clarity
- Decision support
- Stronger positioning
- Useful next-step context
- Audience-relevant outcomes

For link-card descriptions, explain what the destination helps with, who it is useful for, and what decision it supports. Do not explain where it sits in the site structure.

**Run `npm run check:public-copy` after build and fix any rendered-copy failures before shipping.**

---

## Live Copy Tone

- Parent pages, hub pages, related-link sections, assessment directories, and support sections must speak to the user directly.
- Do not fill those areas with route instructions or architecture commentary like `use this page when`, `hub page`, `support page`, `this section can grow cleanly`, `indexable`, `noindex`, `SEO-compatible`, or similar internal wording.
- Do not narrate search behavior or keyword logic to the reader with headings or subtitles like `What people usually mean when they search...`, `why someone searches this`, `search intent`, `city-intent`, or `when this page is the right starting point`.
- On live pages, convert that thinking into direct client-facing language about pressure, confusion, trade-offs, options, and next steps.
- Link-card descriptions should explain the value of the destination, not explain the site structure to the reader.
- Do not use internal-sounding labels like `Free Assessment Layer`, `Start Free or Book Now`, `What Makes This More Useful`, `Before You Decide`, `Audience Relevance`, `Decision Contrast`, or anything that reads like planning language instead of client-facing copy.
- Avoid language like `Weak version`, `Useful version`, or other `version` framing for business comparisons.
- If a comparison section uses labels, use `Others` and `Future Career School` by default instead of `Typical` or other vague competitor language.
- Avoid decorative overlap tricks like staggered cards, crossing connector lines, or layout effects that cut across cards unless they are clearly improving readability.
- Prefer clean separation, stronger hierarchy, and scan-first layouts over visual gimmicks.

---

## BOFU Design Standard

- The design quality bar for BOFU pages should be high. Do not settle for layouts that merely look acceptable or technically clean.
- Every BOFU page should feel intentionally designed for conversion, not assembled from generic card blocks.
- The page should feel premium, editorial, modern, and high-trust rather than plain, template-like, or developer-default.
- The design should help the user understand the offer faster, trust it faster, and act faster.
- Every major section should have a clear visual purpose:
  - signal or fit sections should feel fast to scan
  - comparison sections should feel sharp and decisive
  - process or flow sections should feel progressive and easy to follow
  - CTA sections should feel visually important without looking noisy or spammy
- Do not repeat the exact same card-grid treatment across section after section. Repetition makes the page feel cheap and monotonous.
- Section-to-section rhythm should vary intentionally through layout, grouping, spacing, visual anchors, and hierarchy.
- Prefer section designs that create immediate scanning cues:
  - stronger headline-to-body contrast
  - meaningful dividers or rails
  - grouped takeaways
  - cleaner chunking of information
  - stronger focal points for the most important sentence or action
- Avoid designs that feel flat, timid, filler-like, or "just another grid of cards".
- Avoid gimmicks that weaken clarity, including:
  - overlapping cards
  - boxes offset for style more than usefulness
  - decorative lines cutting across content
  - connectors that make the layout feel cramped
  - visual tricks that look clever but reduce scan speed
- If a section still looks plain after the first pass, redesign the section treatment instead of only rewriting the copy inside it.
- Shared BOFU components should be used as stronger design systems, not as excuses to reuse weak or basic patterns.
- When a section is built with only two cards on desktop, those cards should usually be centered and visually balanced instead of stretched awkwardly or left-floating in a wider grid.
- Use stronger visual direction when appropriate:
  - richer but controlled backgrounds
  - intentional color accents
  - clearer card hierarchy
  - more editorial spacing
  - more premium section framing
- The current parent guidance page can be used as a structural reference, but it should not be treated as the final design ceiling for future BOFU pages.

### Section-by-Section Design Direction

- Hero section:
  - should feel like a premium landing-page opening, not a basic text block with buttons
  - should create one strong focal point around the main promise and CTA
  - should use support lines, layout balance, and visual framing to make the page feel immediately credible
  - **Hero section positioning requirement:** The hero (H1, hero subtext, and badge/pill) must carry at least one of the core positioning advantages — earlier financial freedom, high-income skill portfolio, or unlocking high income opportunities. These advantages must not appear only in body sections. A hero that describes the service category without a positioning signal is under-positioned.
  - **First two sections rule:** Within the first two visible body sections after the hero, at least one sentence must explicitly reference the income or financial freedom goal — earlier financial freedom, high income opportunities, or the high-income skill portfolio. Positioning buried only in the lower half of the page does not count.
  - **Scannability rule:** Core positioning advantages must be visible to a skimmer — not buried inside long prose paragraphs only. At least one positioning signal should appear in a heading, a tile label, a bolded sentence, or a support line that a skimmer would see before reading full paragraphs. If the only positioning is inside dense prose, move one signal to a higher-visibility location.
  - **Positioning frequency rule:** Positioning must appear at minimum in: (1) the hero, (2) one of the first two body sections, and (3) the final CTA section. A page that has positioning only in the hero and final CTA but nowhere in the body has a positioning dead zone in the middle — add one signal in the first body section.
  - **Audience-specific positioning:** The same three core advantages apply to all audiences, but the connection to each audience's situation should be specific. For a student: earlier financial freedom through choosing the right skill before wasting years on the wrong stream. For a working professional: unlocking high income opportunities by moving beyond a low-ceiling role without blowing up stability. For a career changer: building a new high-income skill portfolio the market can see. Generic positioning that names the advantage without naming the audience's specific risk is weaker than positioning that names both.
- Signal, fit, or "when this matters" sections:
  - should be fast to scan
  - should not be just plain repeated boxes unless that is clearly the best treatment
  - should use a stronger visual rhythm such as numbered cards, anchored highlights, split framing, or sharper grouped takeaways
- "What this should help you decide" sections:
  - should feel decisive and structured
  - should make each point easy to absorb at a glance
  - should not look like filler cards copied from another section
- Process or flow sections:
  - should feel progressive and directional
  - should help the user see movement from one stage to the next
  - should avoid awkward crossing connectors, decorative overlap, or lines that cut through content
- Comparison sections:
  - should feel like the strongest contrast section on the page
  - should look sharper, more deliberate, and more premium than a generic table or simple stacked list
- Buyer-check or evaluation sections:
  - should feel practical and trust-building
  - should make it easy for the reader to filter weak options from stronger ones
  - should not sound or look like internal planning notes
- Related-links sections:
  - should look intentionally organized and useful, not like leftover navigation cards
  - should help users discover the next relevant page without stealing attention from the main CTA too early
- FAQ sections:
  - should feel calm, readable, and complete
  - should not collapse into a visually dull wall of repeated accordion rows without enough hierarchy
- Final CTA sections:
  - should feel conclusive, visually strong, and conversion-oriented
  - should look like a final confident next step, not just another block at the bottom

---

## BOFU Search Intent and Opening Rules

Bottom-of-funnel searchers usually already know the kind of help they want.
They are not looking for a category definition first.
They are trying to decide whether this is the right business, page, or next step.

So the opening of a BOFU page should do this:
- use the target keyword or a close natural variation in the first sentence
- establish immediately that Future Career School provides that help
- make the visitor understand the fit, value, or reason to choose this page before they need to scroll
- shift into confident client-facing conversion language instead of explaining the concept in abstract terms

Do not do this:
- open with a dictionary-style explanation of what the service means
- spend the first lines describing the category instead of the offer
- make the reader scroll before they understand why this page is useful

When the exact keyword is awkward:
- use a close natural variation early
- preserve relevance without sounding robotic

Adapted BOFU examples for this project:
- weak opening:
  - `Career guidance online helps students and professionals make better decisions.`
- stronger opening:
  - `Future Career School offers career guidance online for students, freshers, and professionals who need clearer direction without waiting for a local offline option.`
- weak opening:
  - `Career guidance after 12th helps students choose the right course.`
- stronger opening:
  - `Future Career School offers career guidance after 12th for students and parents who need clearer course, degree, and skill direction before time and money get wasted.`

Use those examples as opening logic, not as mandatory copy.

---

## BOFU Section Structure Defaults

- Do not add a jump nav, table of contents, or index block directly under the hero section on BOFU/service pages by default.
- Do not add a multi-card hero skim block such as `Best when`, `Main value`, or `What should change` under the hero.
- If a short clarification is genuinely useful after the main hero CTA, use only one or two compact support lines instead of a boxed summary grid.
- Keep BOFU pages closer to a landing-page reading flow than an article-navigation flow.
- The first screen should usually make three things clear fast:
  - what exact help the visitor is looking at
  - why this page is a strong fit
  - what next action to take

---

## CTA System (Shared Across BOFU Pages)

Default BOFU CTA rule:
- for service-intent BOFU pages, the main conversion CTA should usually go to the most relevant direct payment destination instead of another internal page or WhatsApp
- there are only two default BOFU conversion destinations:
  - one common student payment link for school students, class 10, class 11 to 12, college students, undergraduates, recent graduates, postgraduates, and freshers
  - one common working-professional payment link for working professionals and career changers
- for non-assessment BOFU keywords, do not lead the hero section with an assessment CTA
- for assessment- or test-intent BOFU keywords, an assessment CTA can be the hero primary CTA
- for audience-specific BOFU pages, hero CTA count should usually stay to one primary CTA
- for broader mixed-audience BOFU pages, it is acceptable to show one student CTA and one working-professional CTA when both audiences are genuinely relevant
- for audience-specific career counselling, guidance, coaching, or strategy pages, the closing CTA block should also usually stay to one intended primary CTA
- on longer BOFU service pages, do not rely only on header, hero, and final CTA placement
- longer BOFU service pages should usually include 2 to 3 additional contextual CTA moments inside the body, so the full page usually offers 4 to 6 conversion opportunities without turning spammy
- place those extra CTAs after meaningful decision-support sections such as a major comparison, fit, objection, deliverable, or next-step section where the user is likely ready to act
- keep each CTA block lean: one intended primary CTA on audience-specific pages, or one student CTA plus one working-professional CTA on genuinely mixed-audience pages
- when a service page includes the shared plans/pricing section, add one supporting CTA that jumps to that section instead of treating the plans section like hidden lower-page content
- that supporting CTA should usually say `See [keyword] Plans` or a close natural variation
  - examples: `See Career Guidance Plans`, `See Career Counselling Plans`, `See Career Coaching Plans`, `See Career Mentoring Plans`
- this plans CTA supports the main conversion CTA; it does not replace the main conversion CTA
- Shared-plans CTA override:
  - if the page already includes the shared plans section, the main service CTA should usually jump to `#plans` instead of bypassing the pricing section with a direct-payment hero button
  - keep the actual payment or checkout buttons inside the pricing cards so the reader can compare the right option before paying
  - a separate `See [keyword] Plans` CTA is optional; do not force an extra plans button when the existing hero, contextual, or final service CTAs already land on `#plans`
- do not default the hero CTA to a WhatsApp or direct-contact link on BOFU pages unless the user explicitly asks for that path
- adapt the visible CTA wording to the exact keyword or closest natural search phrasing the user searched for
- do not force audience-label wording like `Student Career Guidance` or `Working Professional Career Guidance` when a keyword-aligned label would be clearer
- the visible CTA wording and the underlying destination do not have to be identical as long as the destination genuinely fits that keyword's audience
- if a CTA is meant for students, the visible label must still clearly say `for Students` or `Student`
- if a CTA is meant for working professionals, the visible label must still clearly say `for Working Professionals` or `Working Professional`
- for non-assessment BOFU pages, free assessments can still be mentioned or linked later on the page without becoming the hero lead
- for non-assessment career counselling, guidance, coaching, or strategy pages, do not add the free-assessments button to the closing CTA block when that assessment link already exists contextually inside the page
- for non-assessment career counselling, guidance, coaching, or strategy pages, do not create a full dedicated assessment section by default
- instead, mention the relevant free assessments briefly inside a more relevant section and use only a small contextual assessment link when it genuinely helps
- when a repeated inline assessment note is useful across pages, prefer `src/components/bofu/AssessmentSupportNote.astro` instead of rebuilding a larger assessment block
- when a BOFU page needs multiple internal links to parent pages, sibling service pages, stage pages, assessments, tools, or support pages, do not bury those links inside audience cards, comparison cards, hero cards, or random body paragraphs
- instead, give those links a dedicated standalone section near the lower half of the page
- prefer `src/components/LinkDirectorySection.astro` for that scalable related-links section instead of rebuilding one-off card clusters
- if a broader student-facing destination page already serves as the main CTA destination for narrower student keywords, keep that broader page's CTA wording at the student-guidance level and do not add narrower CTA wording there like `Get Career Guidance After 12th`
- if a shared CTA component is used, pass explicit keyword-aligned labels instead of relying on audience-based fallback labels
- if a shared closing CTA component is used on mixed-audience career counselling, guidance, coaching, or strategy pages, pass the student and working-professional CTA labels deliberately instead of falling back to internal-page links
- if a shared closing CTA component is used on student-only or working-professional-only pages, pass only the intended audience CTA by default
- if a shared plans section is used, pass the correct audience mode:
    - student-only keyword -> student plan only
    - working-professional-only keyword -> working-professional plan only
    - broader mixed keyword -> both plans
- choose that audience mode from the keyword's real buyer intent:
    - school, after-10th, after-12th, college, fresher, recent-graduate, postgraduate, and similar student-intent keywords -> student plan only
    - working-professional, pivot, stagnation, salary-growth, mid-career, AI-pressure, and similar professional-intent keywords -> working-professional plan only
    - broad service-family keywords where both audiences are genuinely relevant -> both plans
- the shared header CTA `Get Career Guidance` should link to `/services/career-counselling-and-career-guidance/`, not to WhatsApp or a payment link

Approved CTA wording rule:
- primary CTA wording should usually follow the keyword naturally:
  - `Get Career Guidance`
  - `Get Career Counselling`
  - `Get Career Coaching`
  - `Get Career Strategy`
  - `Get Career Guidance After 12th`
- keep this pattern open-ended for future BOFU keywords with the same commercial intent

Contextual supporting-link wording can stay explicit inside relevant body sections:
- `Free career and skill assessments`
- `Free career and skill assessments`

Approved CTA destinations:
- student payment link: `https://rzp.io/rzp/ApMfIAtW`
- working-professional payment link: `https://rzp.io/rzp/n7u0omdt`
- parent guidance page: `https://futurecareerschool.com/services/career-counselling-and-career-guidance/`
- student guidance page: `https://futurecareerschool.com/services/career-counselling-and-career-guidance/student-career-guidance/`
- working-professional guidance page: `https://futurecareerschool.com/services/career-counselling-and-career-guidance/working-professional-career-guidance/`
- after-12th guidance page: `https://futurecareerschool.com/services/career-counselling-and-career-guidance/career-guidance-after-12th/`

Approved assessment destinations:
- assessments hub: `https://futurecareerschool.com/services/assessments/`
- class 10 and below: `https://futurecareerschool.com/services/assessments/class-10-and-below/`
- class 11 to 12: `https://futurecareerschool.com/services/assessments/class-11-to-12/`
- graduates and early professionals: `https://futurecareerschool.com/services/assessments/graduates-and-early-professionals/`
- working professionals and career changers: `https://futurecareerschool.com/services/assessments/working-professionals-and-career-changers/`
- career aptitude test after 10th: `https://futurecareerschool.com/services/assessments/career-aptitude-test-after-10th/`
- stream selector test after 10th: `https://futurecareerschool.com/services/assessments/stream-selector-test-after-10th/`
- career aptitude test after 12th: `https://futurecareerschool.com/services/assessments/career-aptitude-test-after-12th/`
- stream selector test after 12th: `https://futurecareerschool.com/services/assessments/stream-selector-test-after-12th/`

When helpful, pages may also internally link to:
- the parent career-guidance service page
- the services hub
- relevant BOFU siblings
- relevant published blog pages

Destination-selection rule:
- choose the destination that best matches the keyword's real audience and next step
- school, class 10, class 11 to 12, college, undergraduate, recent-graduate, postgraduate, fresher, and after-12th keywords should usually route to the common student payment link as the main conversion CTA
- working-professional keywords should usually route to the working-professional payment link as the main conversion CTA
- broader mixed-audience counselling, guidance, coaching, or strategy keywords can show one student CTA and one working-professional CTA when both audiences are genuinely relevant
- when adding contextual assessment links, use the most relevant stage-specific assessment page when that is clear; otherwise use the assessments hub
- internal guidance pages should still be used for navigation, supporting directories, breadcrumbs, and contextual internal links

Do not introduce new commercial CTA claims that are not approved here.

---

## Assessment Mention Rules (Strict)

**Assessments are free and useful, but they should NEVER drive the hero CTA on non-assessment-intent BOFU pages.**

Google flags pages that lead with assessments when the user searched for guidance/counselling/coaching as bait-and-switch or doorway patterns.
Users searching "career counselling" want counselling, not an assessment-first experience.

### Assessment Mention Restrictions by Keyword Intent

| Keyword Intent | Hero CTA | Prominent Sections | Contextual Mentions |
|---|---|---|---|
| **Assessment/Test-intent** (e.g., "career aptitude test") | Assessment CTA OK | Full assessment info section OK | Multiple assessment mentions OK |
| **Non-assessment Guidance/Counselling/Coaching** (e.g., "career counselling", "career guidance") | NO assessment CTA | NO full assessment-only sections | Contextual inline note OK (1 mention max per page) |
| **Audience-specific** (e.g., "career guidance for students") | NO assessment CTA | NO standalone assessment sections | Optional inline note within deliverables/value section (1 mention max) |
| **Stage-specific** (e.g., "career guidance after 12th") | NO assessment CTA | NO assessment-focused sections | Contextual mention within guidance process section only |
| **Location/Local** (e.g., "career counselling in Rajkot") | NO assessment CTA | NO assessment sections | Optional 1-line note in deliverables, NOT separate section |

### Non-Assessment Page Assessment Rules (Mandatory)

If the page target keyword is NOT assessment/test-intent:

1. **Hero section:**
   - NO assessment CTA button
   - NO "Take the free assessment" as primary CTA
   - NO assessment mention in hero copy or headlines
   - Hero CTAs should be "Get Career Counselling", "Get Guidance", "Get Coaching" — using the keyword's service verb

2. **Prominent sections (above the fold, first screen):**
   - NO full dedicated assessment section in the first 3 sections
   - NO separate assessment showcase or card block
   - NO assessment-first narrative ("Start with an assessment to understand yourself")

3. **Contextual inline mentions (allowed):**
   - ONE small inline mention is acceptable: `src/components/bofu/AssessmentSupportNote.astro`
   - Place only INSIDE a relevant section (e.g., within "What You Get" or "Guidance Process")
   - Text should be: "As a starting point, we offer free assessments to clarify your strengths and work style." (not "The first step is to take an assessment")
   - No separate button or CTA — just context within a larger section

4. **Final CTA section:**
   - Primary CTA should match the keyword service: "Get Career Counselling", not "Start Free Assessment"
   - If assessment link is included, it should be secondary: "Or explore free assessments" (not equal weight)
   - For non-assessment keywords, closing CTA should END with the guidance service CTA, not the assessment CTA

5. **Lower-page sections:**
   - If assessment mentions appear, they should be in the bottom 40% of the page (FAQ, resource links, etc.)
   - Still limited to 1 mention max (inline note in a resource list, link to `/services/assessments/` hub)

### Assessment Pages (Assessment-Intent Keywords)

For pages targeting assessment/test keywords:

- Assessment CTA can be the primary hero CTA
- A full section explaining what the assessment covers is OK
- Multiple assessment mentions and links are appropriate
- Assessment-first narrative makes sense
- Free assessment positioning should be prominent
- The page should still close by bridging into the paid guidance service once the user has enough free signal.
- Read `ASSESSMENT_PAGE_PROMPT.md` first for assessment-intent pages.
- Use the shared assessment plans flow built from:
  - `src/config/assessmentPlans.ts`
  - `src/components/bofu/GuidancePlansSection.astro`
- Choose the plans mode from the page's real audience or stage:
  - school / after-10th -> `student`
  - class 11 / class 12 / after-12th -> `after12th` or `student` depending on the real decision stage
  - graduates / freshers / early professionals -> `graduate`
  - working professionals / career changers -> `professional`
  - mixed assessment hubs -> `mixed`
- Keep the hero primary CTA assessment-first, and use `#plans` as the supporting paid-guidance route where relevant.

### Why This Rule Matters

- Users searching "career counselling in Mumbai" expect counselling, not an assessment funnel
- Google penalizes bait-and-switch patterns (advertising one service, delivering another)
- Assessment-first navigation on non-assessment pages signals to Google that the page's real intent is unclear
- Doorway patterns include burying the actual service behind a required first step (assessment)
- Pages that feel assessment-bait get lower E-E-A-T scores and may lose ranking

### Audit Before Publishing

For every non-assessment BOFU page:

- [ ] Hero CTA uses service verb (Get Counselling, Get Guidance, Get Coaching), NOT "Take Assessment"
- [ ] No assessment section in first 3 page sections
- [ ] Assessment mentions limited to 1 inline contextual note (using AssessmentSupportNote component)
- [ ] Assessment note is inside a larger, non-assessment section (not standalone)
- [ ] Final CTA primary button matches the keyword service
- [ ] Page would work identically without the assessment mention (assessment is optional context, not required)
- [ ] User searching "career counselling" would find counselling, not assessment-first flow

Failing any of these checks = do not publish until fixed.

---

## BOFU Page Goal

A BOFU page must help a ready visitor decide:
- what exact problem is being solved
- how this guidance is more useful than generic advice
- what practical value they can expect
- where a free assessment link may help as a first low-pressure step without turning the page into an assessment page
- what next step to take now

The page must never read like internal planning, SEO notes, or a business-owner memo.

---

## Writing Quality Rules

- Give the most practical answer in the first sentence.
- Make the first screen do real work: the page should establish fit, relevance, and next-step clarity before the visitor has to scroll.
- Write for humans first: clear, practical, and scannable.
- Keep language simple, global, and direct.
- Start from real client worries and decision pressure, not abstract theory.
- No fluff, no vague motivation-only paragraphs, no filler blocks.
- Use short paragraphs, useful headings, and clear section labels.
- Use bullets, lists, and comparison blocks only when they improve scanning clarity.
- Avoid keyword stuffing and repetitive anchor patterns.
- Do not use made-up stories, fake numbers, or fake guarantees.
- Keep decision clarity, fit clarity, and next-step clarity central.
- Avoid formal, stiff, or generic template-sounding copy.
- Write directly to the prospective client, not to the business owner, strategist, SEO lead, or developer.
- Do not narrate the page itself.
- Do not explain why the page exists, why the route exists, or why the keyword exists.
- Do not center the page around session format, packages, or internal service mechanics unless the user explicitly asks for that angle.
- Treat `career counselling`, `career guidance`, `career coaching`, and `career strategy` as the same practical service family unless the user explicitly asks for a narrower distinction.
- Use the exact search term naturally in the title, H1, intro, and key headings when useful, but keep the underlying service truth consistent.

### Tone Guardrails

Avoid internal-sounding or page-explaining phrasing like:
- `This page is for...`
- `When this page is the right fit`
- `Why this page exists separately`
- `Buyer checks`
- `High-intent prospects`
- `Keyword intent`
- `This BOFU page`

Prefer direct client-facing phrasing that speaks naturally to the visitor's situation, decision pressure, cost of delay, practical value, and next step without turning section labels into a repeated page formula.

Before finalizing a BOFU page, scan every heading and paragraph for lines that sound like internal sales, SEO, or page-planning notes. Rewrite those lines into natural client-facing language.

---

## Required BOFU Ingredients

Do not force every BOFU page into one rigid skeleton.
Choose the right order for the keyword.
The page should usually include the ingredients below in whatever sequence best fits the intent:

- a direct first-screen answer with the keyword in natural language
- a clear explanation of the real decision pressure behind the keyword
- what practical value the visitor gets
- at least one useful differentiation layer when comparison intent is present
- free assessments and free resource mention where relevant, with enough emphasis to matter without turning them into the only point
- on non-assessment pages, a small inline assessment note or link is usually better than a full standalone assessment section
- when relevant, a truthful contrast between paid outdated impractical assessments in the market and Future Career School's free updated practical AI-powered assessments
- client-relevant objections, doubts, or filters
- links to the approved assessment and audience guidance destinations
- FAQ only when it adds real decision value
- a closing section that makes the next step obvious

Not every page needs:
- the exact same section names
- the exact same section order
- the exact same comparison treatment
- a forced `What You Get` or `Why This Is Different` heading if a better heading serves the page

Use common sense.
Stay commercially accurate.
Write the most useful page for the intent instead of copying a template blindly.

---

## On-Page SEO and Technical Rules (BOFU)

- The keyword is provided by the user directly. Use it as the single primary keyword.
- Do not merge multiple primary keyword variants into one title or URL.
- One H1 only.
- **H1 keyword placement — optional preference:** If the primary keyword naturally fits at the start of the H1, prefer leading with it. This is not mandatory — apply only when it reads naturally and makes the heading stronger. A keyword mid-sentence that reads well is better than a keyword forced to the front that creates awkward phrasing.
- Use H2/H3 in logical order.
- Include the target keyword naturally in the title, meta, H1, first sentence, and at least one H2 when natural.
- Include the target keyword naturally within the first 100 words.
- Keep title concise and click-worthy.
- Keep meta description unique.
- Use semantic secondary keywords naturally without stuffing.
- Unique title, meta description, canonical, and schema per page.
- Keep core copy and internal links server-rendered.
- Ensure strong mobile readability and scannable layout.
- Add internal links and only trust-building external links when genuinely useful.
- Keep evergreen pages free from calendar-year framing unless intentionally date-bound.

### BOFU Technical Mistakes to Avoid

- Over-optimizing with repetitive keyword phrasing
- Thin pages with no real decision value
- Ignoring real client intent and the actual decision pressure
- Weak mobile readability
- Publishing near-duplicate pages at scale

---

## Schema Rules for BOFU

Use JSON-LD as relevant:
- `Service` (primary schema for BOFU service pages)
- `BreadcrumbList`
- `FAQPage` when a real FAQ section exists

Do not use `BlogPosting` for BOFU service pages.

---

## Internal Linking Rules

### Upward flow
Every child page should link back to its parent.
- `/services/career-counselling-and-career-guidance/career-guidance/` -> `/services/career-counselling-and-career-guidance/`
- `/services/career-counselling-and-career-guidance/locations/career-counselling-in-visakhapatnam/` -> `/services/career-counselling-and-career-guidance/locations/`

### Two-click access
Important live pages should be reachable within about two clicks from the homepage or main navigation.

### Lateral flow
Sibling pages can link to each other when useful. Limit lateral links between similar pages — prefer vertical links (up to parent, down to specific CTA).

### Hub flow
Blog, resources, and content pages should pass relevance upward into the right commercial or topical hub.

### Breadcrumb Rules
Breadcrumbs must match the actual URL hierarchy.
- `Home > Services > Career Counselling and Career Guidance > Career Guidance After 12th`
Do not invent breadcrumbs that do not match the path.
Use BreadcrumbList schema with the real canonical URLs.

---

## Anti-Doorway Rules (Critical — Strictly Enforced)

BOFU scale is allowed. Doorway spam is not. Google's Helpful Content Update and scaled-content abuse policies actively penalize thin, templated, near-duplicate pages, especially at scale.

### Non-Negotiable Uniqueness Threshold

**Every BOFU page must contain at least 30% genuinely unique, keyword-specific content.** This is
measured against the page's own keyword and reader — not by opening and diffing against a sibling
page. Don't read sibling pages as a mandatory step before or after writing; it burns tokens for no
real gain. Write directly and specifically for this keyword's reader instead.

**Unique content definition:**
- Original problem framing specific to that keyword's intent
- Real examples, objections, decision criteria, or filters a reader of this exact keyword would recognize
- Original copy that only makes sense for this specific location or audience — not a generic slot
- Localized context, data, or insights specific to that page's target
- Unique FAQ questions and answers grounded in this keyword's real questions
- Original section introductions and transitions specific to the page's narrative
- Never invented facts, fabricated statistics, or fake program details padded in just to hit the
  30% — every claim toward uniqueness must still pass the truth rule above

**What does NOT count as unique:**
- Reused business facts (e.g., "free assessments", "online delivery", "skill-first approach")
- Shared comparison rows from the approved library
- Standard guidance-process frameworks
- Reused CTA labels or button text
- Section heading patterns that repeat across pages (e.g., "Why you need this")
- Generic value propositions that appear on multiple pages

### Local SEO BOFU Pages (City, Location, Regional)

**Extra strictness applies when building location variations.**

Local pages at scale are Google's #1 doorway-spam target. Heavy penalties apply to location pages that are 80%+ identical with only city names swapped.

**Mandatory localization layer for every location page:**

1. **Local Context Block (300–500 words minimum, original per city):**
   - Top 3–5 employers or companies in that city specific to the field
   - Primary industries or economic focus of that location
   - Unique career growth patterns or transitions for that city (e.g., "Manufacturing to Digital Skills" in Rajkot vs "Oversupply in saturated tech roles" in Bangalore)
   - Local educational institutions, their strengths, and graduate outcomes
   - Cost of living, salary benchmarks, and earning potential by career stage
   - Unique challenges for that location (e.g., limited IT jobs, high competition, reliance on manufacturing vs startups)
   - Geographic proximity to other job markets (if relevant)
   - Local economic moats or advantages (tech hubs, manufacturing clusters, professional services centers)

2. **Location-Specific Objection Handling (not generic rewrites):**
   - 2–3 unique objections or concerns specific to that city's job market
   - Example: "Rajkot doesn't have many IT jobs" vs "Bangalore's IT market is oversaturated"
   - Local reality-based counters, not generic positivity

3. **Location-Specific FAQ (minimum 3 unique questions):**
   - Questions that would only make sense for that location
   - Do NOT rewrite the same FAQ with city name swaps
   - Example: "How do I build a career in manufacturing in Rajkot?" is location-specific
   - If you use an online-delivery FAQ, tie it to the city's real constraints or user behavior instead of asking it generically

4. **Localized Section Treatment:**
   - Let section structure follow what this city's own market actually needs, not one fixed template repeated on every city page
   - Rotate which comparison rows are highlighted based on this city's real factors
   - Different visual or narrative emphasis depending on the location's career ecosystem

5. **Internal Links to City-Specific Content:**
   - Link to city-specific blog articles, resources, or case studies when available
   - Do NOT link from every city page to the exact same set of generic resources

6. **Unique Hero Copy (not templated):**
   - Hero intro should reference something specific about that city's job market or career landscape
   - Not: "Searching for career counselling in Rajkot usually means..."
   - Better: "Rajkot's strong manufacturing base and SME ecosystem create specific career and skill gaps that generic advice doesn't address."

7. **Online-First Local Clarification:**
   - State clearly that the service is online and available in that city
   - Explain why online access can still be better than limiting the search to a nearby offline option
   - Keep the copy useful for someone joining from home, college, or work in that city

8. **City Areas Integrated Naturally:**
   - Mention the city's main areas or neighbourhoods where it improves realism and trust
   - Usually include around 5 to 25 place names depending on the size and spread of the city
   - Integrate them naturally into local context, commute reality, student catchment, work clusters, or economic-geography explanations
   - Do NOT add a random area list with no client value

**Local page minimum standards:**
- ≥ 30% genuinely local-specific content — real local context, objections, and FAQ tied to that
  city, measured against the page's own keyword, not diffed against a sibling page
- At least one section built around something concrete to this city (not a generic slot filled the same way everywhere)
- Distinct problem framing specific to that city's economic reality
- Links to location-specific supporting content (blog, resources, local context)
- Mobile-responsive and performant

### Non-Local BOFU Pages (Audience-Specific, Stage-Specific, Concept-Specific)

**Even without location variations, BOFU pages can become doorway traps if they are too similar to each other.**

To prevent template fatigue and duplicate-content penalties:

1. **Distinct Intent Per Page:**
   - "Career guidance after 12th" targets a specific life stage (post-board decisions)
   - "Career guidance for working professionals" targets a different life stage (mid-career changes)
   - "Career guidance online" targets intent around delivery method
   - Each page must have a genuinely different primary pain point, not just a label swap
   - Do NOT create pages that only differ by audience or stage if the underlying guidance is identical

2. **Varying Section Treatments:**
   - Do not use the identical section order, structure, and treatment across all BOFU pages
   - Vary which sections appear and in what order (e.g., one page leads with objections, another leads with process)
   - Rotate section visual treatments (some pages use comparison matrix first, others use guidance process first)
   - Add unique sections to some pages that don't appear on others
   - Avoid the pattern: Hero → Comparison → Process → FAQ → CTA on every page

3. **Distinct Objections and Decision Filters:**
   - "After 12th" page objections: "I don't know what course to pick", "My score limits my options", "My parents disagree"
   - "Working professional" objections: "I'm stuck in a low-growth role", "Upskilling feels impossible while employed", "I don't know if I should quit first"
   - Do NOT use identical objection handling across both pages

4. **Segment-Specific Examples and Storytelling:**
   - Use examples and reference patterns specific to the audience (if blog content exists)
   - Students face different constraints than working professionals
   - Different audience = different FAQ questions should dominate

5. **Varied CTA Narrative:**
   - Hero CTA context should differ: "Before you choose a course and waste ₹ 3–5 lakhs" vs "Before you burn out or lose income"
   - Closing CTA should feel tailored to the audience's decision pressure, not generic

### Minimum Content Depth Per Page Type

Word count is **not a mandatory target** — anything above ~1,000 words is fine as long as the page
is genuinely complete and useful. Do not bloat a page just to hit a number. Completeness,
uniqueness, practical decision value, and honest relevance matter more than raw length. The
"Suggested Total Content" column below is a depth guide, not a floor.

| Page Type | Suggested Unique Content | Suggested Total Content | Special Rules |
|-----------|------------------------|----------------------|---------------|
| **Location page** | 30% (original local context) | 1,000+ words | Must include local context block, location-specific FAQ, unique objections |
| **Audience-specific page** (e.g., student, professional) | 30% (audience-unique objections, examples, filters) | 1,000+ words | Section treatment driven by this audience's own needs, not one fixed template |
| **Stage-specific page** (e.g., after 12th) | 30% (stage-unique decision pressure, examples) | 1,000+ words | Must address stage-specific constraints and life pressures |
| **Concept page** (e.g., career guidance vs career coaching) | 25% unique (commercial truth is same, but intent framing differs) | 1,000+ words | Serve distinct search intents only; do not create near-duplicates |

### Red Flags: Do NOT Publish

If a BOFU page meets ANY of these conditions, do not publish it:

- [ ] More than 70% of copy reads as generic, reusable boilerplate for this page type
- [ ] The page reads as a template with only city names, audience labels, or keyword swaps changed
- [ ] Section order follows one fixed template regardless of what this keyword actually needs
- [ ] No original problem framing unique to this keyword's intent
- [ ] Zero examples, objections, or decision filters genuinely specific to this keyword's reader
- [ ] No internal links to supporting content unique to this page's theme
- [ ] Page would read identically with city/audience name removed
- [ ] Assessment CTA appears in hero or prominent CTA sections when the keyword is NOT assessment-intent
- [ ] No genuine local context (for location pages) or audience context (for audience pages)
- [ ] Copy reads auto-generated or like a variable-swapped template

### Audit Process Before Publishing

This is a self-contained check against the page's own keyword — you do not need to open, read,
or diff against another sibling page to run it; that burns tokens for no real gain.

1. **Highlight the genuinely unique content** — the specific local detail, audience situation,
   objection, or decision factor that only makes sense for this exact keyword.
2. **Measure uniqueness percentage:** unique keyword-specific words / total page words = % unique
   - Must be ≥ 30% for local, audience, and stage pages
   - Highlight blocks, not just scattered words
   - Never invented facts or fabricated specifics padded in just to hit the number — every claim
     must still pass the truth rule
3. **Check section structure:** does this page's section order follow one fixed template
   regardless of what the keyword actually needs?
   - If yes, redesign at least 2 sections to fit this keyword's own logic
4. **Check objections:** are the objections generic ("great support", "flexible") rather than
   specific to this keyword's real reader?
   - If yes, replace at least 2 with objections a reader of this exact keyword would actually have
5. **Check examples:** are the examples generic enough that they could describe almost any
   keyword in this category?
   - If yes, make them concrete to this specific location/audience/stage
6. **Check internal links:** are all internal links generic boilerplate with nothing tied to
   this page's own theme?
   - Add at least one link unique to this page's theme (local blog post, region-specific resource, stage-specific guide)
7. **Run through red flags checklist** (above) — if any flag is true, do not publish

### Quality Checkpoints

Before considering a BOFU page complete:

- [ ] Unique content percentage ≥ 30% (measured and verified — self-contained, not diffed against a sibling)
- [ ] Section order or treatment is driven by this keyword's own needs, not one fixed template
- [ ] At least 2 objections or decision filters genuinely specific to this keyword's reader
- [ ] For location pages: original local context block (300+ words, no generic rewrites)
- [ ] For audience/stage pages: distinct life-stage-specific problem framing
- [ ] At least one internal link to supporting content unique to this page's theme
- [ ] Assessment mentions are contextual only (not hero CTA for non-assessment keywords)
- [ ] No red-flag conditions met
- [ ] Page reads as intentional and useful, not templated
- [ ] No keyword cannibalization: page does NOT duplicate another existing page's intent
- [ ] No internal competition: page is not linked from multiple parent pages (only its primary parent)
- [ ] Sitemap priority is appropriate: location/variation pages deprioritized vs core pages

---

## Advanced Anti-Doorway Rules (For Scale)

### Keyword Cannibalization Rule (Critical)

**Do NOT publish multiple pages targeting the same search intent.**

Examples of WRONG approaches:
1. Both `/services/career-counselling/locations/rajkot/` AND `/services/career-guidance/locations/rajkot/`
   - Both compete for "career counselling in Rajkot" and "career guidance in Rajkot"
   - Authority is split
   - Google doesn't know which is the main page
   - Result: Both pages rank lower

2. `/career-counselling-in-rajkot/` AND `/best-career-counselling-rajkot/`
   - Different URLs, same intent
   - Cannibalization penalty

**Correct approach:**
- Use one unified parent when services are commercially identical
- Single page per location/intent: `/services/career-counselling-and-career-guidance/locations/career-counselling-in-rajkot/`
- Service-neutral language covers both "counselling" and "guidance" search intents
- Only ONE URL in sitemap per user intent

**If services are genuinely different in the future:**
- Create separate parent branches ONLY if service, audience, or outcome is fundamentally different
- Use clear internal linking to signal separation
- No overlap in keyword targeting

### Regional Hub Structure (For 30+ Location Pages)

Instead of flat 50+ location pages, cluster them under regional hubs:

```
/locations/
  /locations/north-india/      (hub)
    /locations/north-india/delhi/
    /locations/north-india/jaipur/
  /locations/south-india/      (hub)
    /locations/south-india/bangalore/
    /locations/south-india/hyderabad/
```

**Benefits:**
- Topical clustering strengthens topical authority
- Reduces thin-page-at-scale perception
- Enables region-specific content (different industries, markets per region)
- Clearer hierarchy signals to Google

**Hub page requirements:**
- NOT a thin placeholder
- Original regional content (industries, opportunities, career landscape)
- Links to all child city pages
- Gets higher sitemap priority (0.85) than city pages (0.80)

### Sitemap Priority Strategy

**Correct priority allocation prevents doorway perception:**

```
1.0  → Homepage
0.95 → Main service hubs
0.90 → Parent guidance page
0.85 → Regional hubs (if used)
0.80 → Location/variation pages (city pages, audience variations, stage pages)
0.75 → Blog category hubs
0.70 → Blog articles
```

Note: Google may not weight sitemap `<priority>` declarations heavily — it tends to observe actual crawl behavior rather than declared values. The hierarchy concept (homepage > hubs > children) matters more than the exact decimal values.

### Consolidation Rule (As You Scale)

**When 2+ pages serve the same intent, consolidate them:**

Process:
1. Identify near-duplicate pages (>70% similar)
2. Determine which page performs better (rankings, CTR, conversions)
3. Enhance the winning page with all unique content from the loser
4. 301 redirect the losing URL to the winner
5. Update internal links to point to consolidated page
6. Remove losing page from sitemap

### Content Refresh Schedule

**Prevent pages from becoming stale and thin:**

- **Location pages:** Refresh every 6 months (update local data, add new companies, local salary benchmarks)
- **Audience pages:** Refresh every 6 months (market conditions shift)
- **Blog articles:** Refresh every 9-12 months (update research, add new examples)
- **Stage pages:** Refresh every 9 months (education/market landscape changes)

**During refresh:**
- Verify uniqueness still ≥ 30%
- Update local/market data
- Add fresh examples or case studies
- Update publish date to signal freshness
- Re-run red flags checklist

### Cross-Linking Strategy (Avoid Internal Competition)

**Limit links between similar pages:**

Each city page links to:
- Parent location hub (up)
- 1-2 truly nearby cities only if genuinely related (minimal lateral)
- Parent service page (up)
- 1 unique supporting resource (blog, tool)

**Rule:** Limit lateral links between similar pages. Prefer vertical links (up to parent, down to specific CTA)

---

## Route and Hierarchy Rules

- Prefer parent-child URL structure under `/services/`.
- Do not create flat random BOFU routes unless technically necessary.
- If the BOFU keyword is location-intent inside an existing service family, keep it inside that service branch instead of creating a flat location slug.
- For career counselling, career guidance, career coaching, and close city-intent variants, prefer:
  - `/services/career-counselling-and-career-guidance/locations/` as the parent
  - `/services/career-counselling-and-career-guidance/locations/<city-or-keyword-slug>/` as the child
- If that service-branch location parent does not exist yet and the city page is genuinely ready, create the parent in the same pass instead of publishing the child alone.
- Update sitemap and indexable route config only when the page is genuinely ready.
- Even on city pages, do not let the visible copy read like an explanation of location intent or keyword strategy. The page should still feel like direct support for a person in that city.

---

## Shared BOFU UI Reuse

- Treat shared BOFU components mainly as shared design and layout systems.
- The content inside those components can and should be customized to the keyword, audience, and page intent where needed.
- Do not reject a shared component just because its default copy is not a perfect fit; pass keyword-specific titles, subtitles, items, and CTA labels into the shared design instead.
- If a page uses a repeated 2-to-4 card signal, decision, checklist, or prep section, prefer `src/components/bofu/BofuFeatureSection.astro`.
- If a page uses richer 2-to-3 card sections with grouped bullets, audience-specific points, or list-heavy contrasts, prefer `src/components/bofu/BofuListCardSection.astro`.
- If a page uses repeated short summary strips, trade-off strips, or compact multi-point recap bars, prefer `src/components/bofu/BofuSummaryStrip.astro`.
- If a page uses a repeated short 3-step reason, advantage, or flow section, prefer `src/components/bofu/BofuStepFlowSection.astro`.
- If a page uses the repeated comparison block, prefer `src/components/bofu/ComparisonMatrix.astro`.
- If a page uses the repeated guidance-process block, prefer `src/components/bofu/GuidanceModelSection.astro`.
- If a page uses the repeated stage-relevance block, prefer `src/components/bofu/AudienceRelevance.astro`.
- If a page uses the repeated decision-check block, prefer `src/components/bofu/BuyerChecks.astro`.
- If a page uses the repeated BOFU FAQ block, prefer `src/components/bofu/BofuFaqSection.astro`.
- If a page uses the repeated closing CTA block, prefer `src/components/bofu/FinalCta.astro`.
- Do not copy the same BOFU section markup and CSS into every page if a shared component already exists.
- If a repeated BOFU section pattern becomes common, move it into a shared component or shared styling.
- Avoid rebuilding page-local patterns like `card-grid + info-card`, `checkpoint-grid + checkpoint-card`, or `prep-grid + prep-card` when one of the shared BOFU section components already fits.

---

## Completion Checklist

Before marking a BOFU page complete:

- route follows the correct hierarchy
- distinct intent is clear
- one H1 only (prefer keyword-first placement when it reads naturally — see H1 keyword placement note in On-Page SEO section)
- hero section (H1, subtext, badge/pill) carries at least one core positioning advantage: early financial freedom, high-income skill portfolio, or unlocking high income opportunities — not deferred to body sections only
- metadata, canonical, and schema are set
- target keyword appears naturally in the key zones
- approved business facts only
- free assessments and audience guidance CTA links are present where appropriate
- internal links to relevant live pages exist
- no internal planning or developer voice leaks into public content
- page is mobile-readable and scannable
- differentiation and objection handling feel specific, not generic
- FAQ answers stay inside approved truth
- page is indexable only when complete
- build passes
- `npm run check:public-copy` passes
