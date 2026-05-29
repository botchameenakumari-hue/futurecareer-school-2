# Bottom-of-Funnel Page Prompt

Status: Active prompt for BOFU service-intent pages.

**Cross-reference:** Read `DOORWAY_PREVENTION_GUIDE.md` first when creating BOFU pages at scale (location pages, audience variations, stage-specific pages). It provides the big-picture overview, quick-reference tables, and monitoring guidance that complements this detailed implementation file.

For non-BOFU public pages that still need the same tone guardrail, use `CLIENT_FACING_COPY_RULE.md`.

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

This file is for BOFU pages, not informational blogs.
For informational blogs, use `BLOG_WORKFLOW.md` and `BLOG_WRITING_PROMPT.md`.

## Non-Negotiable Truth Rule

Do not invent business facts, deliverables, promises, prices, guarantees, frameworks, timelines, or outcomes.
Use only what is explicitly present in this file or what the user explicitly approves in the conversation.

If a detail is not defined here:
- do not make it up
- use neutral wording
- or ask the user before publishing that claim

This rule is strict because BOFU pages must stay commercially accurate.

## Mandatory Read Order (BOFU Tasks)

When the user gives a BOFU keyword:

1. **Read `DOORWAY_PREVENTION_GUIDE.md` first** (5 min overview).
   - Understand the big picture: why doorway prevention matters, what pages are at risk
   - Review the summary tables (minimum unique content, assessment restrictions, red flags, pre-publish audit)
   - Skim the monitoring section to understand post-publish expectations
   
2. Read `BOFU_PAGE_PROMPT.md` (detailed implementation rules).
   - Study the Anti-Doorway Rules section relevant to your page type (local vs non-local)
   - Study Assessment Mention Rules if non-assessment keyword
   - Review the quality checkpoints before publishing

3. Read `SEO_ARCHITECTURE.md` for route hierarchy and sitemap logic.

4. Read `SEO_CONTENT_STRATEGY.md` for anti-spam and technical standards.

5. Read `BLOG_WORKFLOW.md` for shared implementation rules.

6. Inspect the closest live BOFU page before writing:
   - `src/pages/services/career-counselling-and-career-guidance/index.astro`
   - and the nearest relevant child or sibling page
   - **While inspecting, measure its uniqueness %** to understand the bar for your page

7. Read `src/config/bofu.ts` for the live shared BOFU comparison library, assessment-link map, default internal page links, and direct BOFU CTA destinations.

8. Read `PROJECT_MEMORY.md` only if route or component context is still unclear.

From `BLOG_WORKFLOW.md`, apply only BOFU-relevant sections:
- publishing workflow for indexable pages
- route update rules (`src/config/site.ts`, sitemap implications)
- shared reusable elements policy
- shared navigation and internal linking rules
- canonical domain behavior

## Approved BOFU Facts and Messaging Bank

This section is the source-of-truth bank for BOFU writing.
It is not a mandatory verbatim script.
Use these facts naturally and flexibly in client-facing copy.

### Core Positioning

- Achieving earlier financial freedom through high-value skill building is a core positioning priority.
- High-leverage decision support is a core positioning priority.
- Skill-first direction with proof of work is a core positioning priority.
- Practical career guidance that goes beyond generic, degree-first advice is a core positioning priority.

### Approved Business Facts

- Future Career School serves students, freshers, and working professionals across school, college, recent-graduate, postgraduate, and career-growth stages.
- Career counselling, career guidance, career coaching, career strategy, and other close variants that point to the same practical need can be treated as one service family unless the user explicitly asks for a narrower distinction.
- Use the exact word the searcher used in visible copy when natural, but do not invent fake service differences between those labels.
- Guidance is delivered online across India.
- The business should not be described as a job-guarantee or placement service.
- BOFU copy should not be centered on session format or how long support continues unless the user explicitly asks for that angle.

### Free Access and Tools

- Career and skill assessments are fully free.
- The assessments can be described as updated, practical, and AI-powered.
- Many providers in the market charge thousands for outdated or impractical assessments and present them like deal-breakers; Future Career School can be described truthfully as offering free, updated, practical, AI-powered career and skill assessments.
- Career and income-growth resources are free.
- Skill-finder and course-finder tools are free.

### Positioning Angles Approved for Reuse

Use these ideas naturally where relevant:

- choose with more clarity before time and money get wasted
- achieving earlier financial freedom through stronger skill choices
- focus on skills that create better long-term opportunities
- show skills and proof of work, not just degree dependence
- clearer income-growth direction, not just course or degree advice
- practical guidance that helps people avoid low-paying, generic paths
- free updated practical AI-powered assessments instead of paid outdated assessments

### Differentiation Angles Approved for Reuse

Use these contrast directions where relevant:

- generic advice vs high-leverage decision support
- degree-first direction vs skill-first direction with proof of work
- low-growth path dependency vs a stronger route toward achieving earlier financial freedom through higher-value skill building
- paid outdated impractical assessments vs free updated practical AI-powered career and skill assessments
- generic low-paying path advice vs higher-value skill direction with clearer income-growth logic
- random upskilling vs clearer skill direction tied to growth and income upside

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
- A practical way to choose stronger skill paths before expensive commitments.
- Guidance that considers fit, market reality, and long-term upside.
- Support toward proof of work, positioning, and income growth direction.
- Honest feedback even when the best answer is not the easiest one.
- A clearer route toward achieving earlier financial freedom through stronger skill choices.

### Approved FAQ Ground Truth

These positions are approved:

- Degree alone is usually not enough for high income outcomes.
- A degree can support eligibility.
- A degree is a credential, not a complete career strategy.
- High-value skills plus proof of work matter.
- Achieving earlier financial freedom can be worked toward through profile-fit skill stacking and consistent execution.
- Career and skill assessments are fully free.
- Career and income-growth resources are free.
- Skill-finder and course-finder tools are free.
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

## Live Copy Tone

- In BOFU/service pages, body sections should generally not use eyebrow text, kickers, or pre-heading labels above H2s.
- Allowed default exceptions:
  - hero badge/pill
  - FAQ label
  - final CTA label such as `Next step`
- Parent pages, hub pages, related-link sections, assessment directories, and support sections must speak to the user directly.
- Do not fill those areas with route instructions or architecture commentary like `use this page when`, `hub page`, `support page`, `this section can grow cleanly`, `indexable`, `noindex`, `SEO-compatible`, or similar internal wording.
- Do not narrate search behavior or keyword logic to the reader with headings or subtitles like `What people usually mean when they search...`, `why someone searches this`, `search intent`, `city-intent`, or `when this page is the right starting point`.
- On live pages, convert that thinking into direct client-facing language about pressure, confusion, trade-offs, options, and next steps.
- Link-card descriptions should explain the value of the destination, not explain the site structure to the reader.
- Do not use internal-sounding labels like `Free Assessment Layer`, `Start Free or Book Now`, `What Makes This More Useful`, `Before You Decide`, `Audience Relevance`, `Decision Contrast`, or anything that reads like planning language instead of client-facing copy.
- Do not use body labels like `When this helps`, `What should get clearer`, `What you get`, `After the first clarity step`, `What should improve next`, `Different situations`, or similar eyebrow-style text above normal BOFU body sections.
- The same rule applies to section intros, comparison labels, and helper text inside cards or strips.
- Avoid language like `Weak version`, `Useful version`, or other `version` framing for business comparisons.
- If a comparison section uses labels, use `Others` and `Future Career School` by default instead of `Typical` or other vague competitor language.
- Avoid decorative overlap tricks like staggered cards, crossing connector lines, or layout effects that cut across cards unless they are clearly improving readability.
- Prefer clean separation, stronger hierarchy, and scan-first layouts over visual gimmicks.

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
- Avoid designs that feel flat, timid, filler-like, or “just another grid of cards”.
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
- Signal, fit, or “when this matters” sections:
  - should be fast to scan
  - should not be just plain repeated boxes unless that is clearly the best treatment
  - should use a stronger visual rhythm such as numbered cards, anchored highlights, split framing, or sharper grouped takeaways
- “What this should help you decide” sections:
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

## BOFU Section Structure Defaults

- Do not add a jump nav, table of contents, or index block directly under the hero section on BOFU/service pages by default.
- Do not add a multi-card hero skim block such as `Best when`, `Main value`, or `What should change` under the hero.
- If a short clarification is genuinely useful after the main hero CTA, use only one or two compact support lines instead of a boxed summary grid.
- Keep BOFU pages closer to a landing-page reading flow than an article-navigation flow.
- The first screen should usually make three things clear fast:
  - what exact help the visitor is looking at
  - why this page is a strong fit
  - what next action to take

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
- `Explore Free Career and Skill Assessments`
- `Use Free Career and Skill Assessments`

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
- after BOFU or shared-component edits, run `npm run check:public-copy` after build and fix any rendered-copy failures before treating the page as complete

Do not introduce new commercial CTA claims that are not approved here.

## Assessment Mention Rules (Strict)

**Assessments are free and useful, but they should NEVER drive the hero CTA on non-assessment-intent BOFU pages.**

Google flags pages that lead with assessments when the user searched for guidance/counselling/coaching as bait-and-switch or doorway patterns.
Users searching "career counselling" want counselling, not an assessment-first experience.

### Assessment Mention Restrictions by Keyword Intent

| Keyword Intent | Hero CTA | Prominent Sections | Contextual Mentions |
|---|---|---|---|
| **Assessment/Test-intent** (e.g., "career aptitude test") | ✅ Assessment CTA OK | ✅ Full assessment info section OK | Multiple assessment mentions OK |
| **Non-assessment Guidance/Counselling/Coaching** (e.g., "career counselling", "career guidance") | ❌ NO assessment CTA | ❌ NO full assessment-only sections | ✅ Contextual inline note OK (1 mention max per page) |
| **Audience-specific** (e.g., "career guidance for students") | ❌ NO assessment CTA | ❌ NO standalone assessment sections | ✅ Optional inline note within deliverables/value section (1 mention max) |
| **Stage-specific** (e.g., "career guidance after 12th") | ❌ NO assessment CTA | ❌ NO assessment-focused sections | ✅ Contextual mention within guidance process section only |
| **Location/Local** (e.g., "career counselling in Rajkot") | ❌ NO assessment CTA | ❌ NO assessment sections | ✅ Optional 1-line note in deliverables, NOT separate section |

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

- Assessment CTA can be the primary hero CTA ✅
- A full section explaining what the assessment covers is OK ✅
- Multiple assessment mentions and links are appropriate ✅
- Assessment-first narrative makes sense ✅
- Free assessment positioning should be prominent ✅

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

## BOFU Page Goal

A BOFU page must help a ready visitor decide:
- what exact problem is being solved
- how this guidance is more useful than generic advice
- what practical value they can expect
- where a free assessment link may help as a first low-pressure step without turning the page into an assessment page
- what next step to take now

The page must never read like internal planning, SEO notes, or a business-owner memo.

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

## On-Page SEO and Technical Rules (BOFU)

- The keyword is provided by the user directly. Use it as the single primary keyword.
- Do not merge multiple primary keyword variants into one title or URL.
- One H1 only.
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

## Schema Rules for BOFU

Use JSON-LD as relevant:
- `Service`
- `BreadcrumbList`
- `FAQPage` when FAQ exists

Do not use `BlogPosting` for BOFU service pages.

## Anti-Doorway Rules (Critical — Strictly Enforced)

BOFU scale is allowed. Doorway spam is not. Google's Helpful Content Update and scaled-content abuse policies actively penalize thin, templated, near-duplicate pages, especially at scale.

### Non-Negotiable Uniqueness Threshold

**Every BOFU page must contain at least 30% genuinely unique, original content** that is not shared with, implied by, or closely paraphrased from sibling BOFU pages.

**Unique content definition:**
- Original problem framing specific to that keyword's intent
- Unique examples, objections, decision criteria, or filters not used on sibling pages
- Original copy that cannot be reused across multiple location or audience variations
- Localized context, data, or insights specific to that page's target
- Unique FAQ questions and answers (not question rewrites of shared points)
- Original section introductions and transitions specific to the page's narrative

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
   - Example: "How do I build a career in manufacturing in Rajkot?" is location-specific; "Can I get career guidance online?" is not

4. **Localized Section Treatment:**
   - Vary the section structure from nearby location pages (not all city pages should have identical section order)
   - Rotate which comparison rows are highlighted (if you show all 6 rows in Bangalore, show 4 different ones in Rajkot)
   - Different visual or narrative emphasis depending on the location's career ecosystem

5. **Internal Links to City-Specific Content:**
   - Link to city-specific blog articles, resources, or case studies when available
   - Link to local education hubs, industry associations, or relevant news when useful
   - Do NOT link from every city page to the exact same set of generic resources

6. **Unique Hero Copy (not templated):**
   - Hero intro should reference something specific about that city's job market or career landscape
   - Not: "Searching for career counselling in Rajkot usually means..."
   - Better: "Rajkot's strong manufacturing base and SME ecosystem create specific career and skill gaps that generic advice doesn't address."

**Local page minimum standards:**
- 30% unique localized content (measured by actual unique words/concepts, not just volume)
- At least one section with zero equivalents on sibling location pages
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

### Suggested Content Depth Per Page Type

Use these as suggested ranges, not mandatory padding targets. Do not bloat a page just to hit a number. Completeness, uniqueness, practical decision value, and honest relevance matter more than raw length.

| Page Type | Suggested Unique Content | Suggested Total Content | Special Rules |
|-----------|------------------------|----------------------|---------------|
| **Location page** | 30% (original local context) | 2,500–3,500 words | Must include local context block, location-specific FAQ, unique objections |
| **Audience-specific page** (e.g., student, professional) | 30% (audience-unique objections, examples, filters) | 2,200–3,000 words | Must vary section treatment from sibling audience pages |
| **Stage-specific page** (e.g., after 12th) | 30% (stage-unique decision pressure, examples) | 2,200–3,000 words | Must address stage-specific constraints and life pressures |
| **Concept page** (e.g., career guidance vs career coaching) | 25% unique (commercial truth is same, but intent framing differs) | 2,000–2,800 words | Serve distinct search intents only; do not create near-duplicates |

### Red Flags: Do NOT Publish

If a BOFU page meets ANY of these conditions, do not publish it:

- [ ] More than 70% of copy is shared with or directly paraphrased from another BOFU page
- [ ] The page reads as a template with only city names, audience labels, or keyword swaps changed
- [ ] All sections use the identical order and structure as a nearby sibling page
- [ ] No original problem framing unique to this keyword's intent
- [ ] Zero unique examples, objections, or decision filters not on sibling pages
- [ ] No internal links to supporting content unique to this page's theme
- [ ] Page would read identically with city/audience name removed
- [ ] Assessment CTA appears in hero or prominent CTA sections when the keyword is NOT assessment-intent
- [ ] No genuine local context (for location pages) or audience context (for audience pages)
- [ ] Copy reads auto-generated or like a variable-swapped template

### Audit Process Before Publishing

1. **Compare to nearest sibling page** (another location, another audience, or another stage)
2. **Highlight all unique content** (original copy, not shared between this and sibling pages)
3. **Measure uniqueness percentage:** unique words / total page words = % unique
   - Must be ≥ 30% for local, audience, and stage pages
   - Highlight blocks, not just scattered words
4. **Check section structure:** Does this page follow the exact same section order as the sibling?
   - If yes, redesign at least 2 sections or reorder them
5. **Check objections:** Are the top 3 objections identical to the sibling page?
   - If yes, replace at least 2 with unique objections for this keyword's intent
6. **Check examples:** Could the examples be swapped to the sibling page without losing relevance?
   - If yes, create location- or audience-specific examples unique to this page
7. **Check internal links:** Are ALL internal links generic (same on all pages)?
   - Add at least one link unique to this page's theme (local blog post, region-specific resource, stage-specific guide)
8. **Run through red flags checklist** (above) — if any flag is true, do not publish

### Quality Checkpoints

Before considering a BOFU page complete:

- [ ] Unique content percentage ≥ 30% (measured and verified)
- [ ] Section order or treatment is visibly different from at least one nearby sibling page
- [ ] At least 2 unique objections or decision filters not on sibling pages
- [ ] For location pages: original local context block (300+ words, no generic rewrites)
- [ ] For audience/stage pages: distinct life-stage-specific problem framing
- [ ] At least one internal link to supporting content unique to this page's theme
- [ ] Assessment mentions are contextual only (not hero CTA for non-assessment keywords)
- [ ] No red-flag conditions met
- [ ] Page reads as intentional and useful, not templated
- [ ] No keyword cannibalization: page does NOT duplicate another existing page's intent
- [ ] No internal competition: page is not linked from multiple parent pages (only its primary parent)
- [ ] Sitemap priority is appropriate: location/variation pages deprioritized vs core pages

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

**Why location pages get 0.80, not 0.90:**
- Signals they are important but not core to business
- Prevents Google from thinking they're doorway pages
- Concentrates crawl budget on more unique content

### Consolidation Rule (As You Scale)

**When 2+ pages serve the same intent, consolidate them:**

Process:
1. Identify near-duplicate pages (>70% similar)
2. Determine which page performs better (rankings, CTR, conversions)
3. Enhance the winning page with all unique content from the loser
4. 301 redirect the losing URL to the winner
5. Update internal links to point to consolidated page
6. Remove losing page from sitemap

**Result:**
- Authority concentrated on one strong page
- No internal competition
- Better ranking potential
- Cleaner site structure

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

**Why this matters:**
- Old pages (2+ years without update) look stale even if content is good
- Fresh content signals = better ranking potential
- Prevents pages from being perceived as abandoned/thin

### Cross-Linking Strategy (Avoid Internal Competition)

**Limit links between similar pages:**

❌ **WRONG (creates competition):**
```
Every city page links to 5 other city pages
+ parent page
+ multiple audience pages
→ Confuses Google about hierarchy
```

✅ **RIGHT (clear signals):**
```
Each city page links to:
- Parent location hub (up)
- 1-2 truly nearby cities only if genuinely related (minimal lateral)
- Parent service page (up)
- 1 unique supporting resource (blog, tool)
→ Clear hierarchy, no internal competition
```

**Rule:** Limit lateral links between similar pages. Prefer vertical links (up to parent, down to specific CTA)

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

## Completion Checklist

Before marking a BOFU page complete:

- route follows the correct hierarchy
- distinct intent is clear
- one H1 only
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
