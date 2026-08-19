# Bottom-of-Funnel Page Prompt Follow-Up

Status: Active

**This prompt is fully self-contained. You do not need to read any other document to use it.**

## Google Analytics Verification (Mandatory)

Before considering the page complete, confirm that it uses `src/layouts/BaseLayout.astro`, which
already supplies `src/components/GoogleAnalytics.astro` and
`src/components/ConsentBanner.astro`. Do not copy or directly import either component into the page.
In the rendered HTML, verify that the shared Analytics initialization and consent controls each
appear exactly once, with no page-level Google tag or static `gtag.js` request before consent.

The goal is not just to make the page longer.
The goal is to make it more complete, more practical, easier to scan, and more useful for someone deciding what to do next.

---

## Project Context

**Site:** Future Career School
**Canonical domain:** `https://futurecareerschool.com`
**Active project folder:** `C:\Users\Asus\Documents\futurecareer-school-2`

---

## Approved Business Facts (Reference for Truth Checks)

Do not invent business facts, deliverables, promises, prices, guarantees, frameworks, timelines, or outcomes. Use only these approved facts:

- Future Career School serves students, freshers, and working professionals across school, college, recent-graduate, postgraduate, and career-growth stages.
- Career counselling, career guidance, career coaching, and career strategy are treated as one practical service family.
- Guidance is delivered online across India.
- The business is not a job-guarantee or placement service.
- Career and skill assessments are fully free and can be described as updated, practical, and AI-powered.
- Many providers in the market charge thousands for outdated or impractical assessments; Future Career School offers free, updated, practical, AI-powered assessments.
- Career and income-growth resources are free. Career & Skills Compass and course-finder tools are free.

**Approved pricing:**
- Student 1-on-1: `Rs 3000` crossed and `Rs 250` as the current limited-time price
- Working-professional 1-on-1: `Rs 5000` crossed and `Rs 3000` as the current limited-time price
- Student continuous guidance: `Rs 29000` crossed and `Rs 12000` as the current limited-time price (includes the 1-on-1 and up to 24 small-group sessions across the year)
- Shared source of truth: `src/config/guidancePlans.ts`
- Do not invent additional pricing tiers, packages, discounts, or guarantees.

**Approved CTA destinations:**
- Student payment link: `https://rzp.io/rzp/ApMfIAtW`
- Working-professional payment link: `https://rzp.io/rzp/n7u0omdt`
- Parent guidance page: `https://futurecareerschool.com/services/career-counselling-and-career-guidance/`
- Assessments hub: `https://futurecareerschool.com/services/assessments/`

**Approved positioning:**
- Achieving earlier financial freedom through high-value skill building
- Unlocking high income opportunities through a deliberate high-value, high-income skill portfolio — the chain is: right skill portfolio → high income opportunities → earlier financial freedom
- Building a high-value, high-income skill portfolio: a deliberate stack of skills that compounds earning potential over time, not just one skill decision
- Holistic skill approach: the right skill mix for the person, proof of work, communication skills, market positioning, personal fit, and financial and family reality — not just technical skills in isolation
- Skill-first direction with proof of work
- High-leverage decision support over generic advice
- Free updated practical AI-powered assessments instead of paid outdated assessments
- Degrees have a place; the problem is degree-only thinking without skill-building alongside it

---

## Follow-Up Content Checks

- if an existing line conflicts with the approved business facts above, fix the unsupported or outdated line instead of preserving it
- do not assume the first-pass page already has enough depth; add more if key doubts, practical filters, or decision layers are still weak
- if the page still feels too close to another BOFU page, strengthen the intent-specific differentiation instead of repeating the same structure with minor keyword swaps
- if the page still feels too meta, too self-aware, or too much like it is describing the page instead of helping the client decide, rewrite that language before considering the pass complete
- keep the exact search label visible where useful, but do not drift into fake distinctions between career counselling, career guidance, career coaching, or career strategy when the commercial truth is the same
- if the first sentence still sounds like a category explanation instead of a useful BOFU opening, rewrite it
- if the first screen still does not establish fit and value fast enough, tighten the opening copy before adding more lower-page sections
- if the keyword is awkward in exact form, use a close natural variation near the start instead of forcing robotic phrasing
- do not let a BOFU page open with abstract lines like `career guidance helps people...` when the page should instead establish why Future Career School is the right fit
- if the page uses the shared comparison matrix, make sure the row library still matches `src/config/bofu.ts`
- if all shared comparison rows genuinely fit the page intent, it is fine to show all of them
- if only some shared comparison rows fit the page intent, pass only that approved subset instead of forcing the full library
- do not let prompt guidance and shared component rows drift apart

---

## Follow-Up Depth Checks

- add more useful client-facing decision help, not filler
- strengthen the real problem behind the keyword when that pressure is still vague
- add intent-specific decision criteria, comparison framing, objection handling, or next-step clarity when they improve the page
- if relevant, strengthen the difference between degree-only thinking (chasing credentials without building skills) and a holistic skill approach: the right skill mix, proof of work, communication, market positioning, and personal fit — remember that degrees have a place, so the framing should be skill-first, not anti-degree
- if relevant, make the high-value, high-income skill portfolio positioning visible: the idea that FCS helps people build a deliberate stack of skills that compounds earning potential and unlocks high income opportunities over time — not just one skill decision
- if relevant, surface the positioning chain explicitly: right skill portfolio → high income opportunities → earlier financial freedom
- if relevant, make the free assessments and free resource layer more visible without turning them into the only point of the page
- if relevant, clarify that many providers charge thousands for outdated or impractical assessments while Future Career School offers free, updated, practical, AI-powered career and skill assessments
- if relevant, use a brief contextual assessment note or link instead of a full standalone assessment section
- if the page is not assessment-intent, remove or collapse oversized assessment sections that distract from the main service decision
- if the keyword is not assessment- or test-intent, do not let the hero CTA drift back into leading with assessments
- if the keyword is a career counselling, guidance, coaching, or strategy page rather than an assessment-intent page, do not let the closing CTA drift into an assessment button when that assessment link is already present contextually in the body
- if the keyword is assessment- or test-intent, make sure the page still bridges into the paid guidance service once the visitor has enough free signal
- if the keyword is assessment-, test-, or quiz-intent, apply `ASSESSMENT_PAGE_PROMPT.md` first and keep using the shared `GuidancePlansSection` + `#plans` flow instead of inventing a page-local closing funnel
- if the keyword is assessment- or test-intent, make sure result-screen CTAs, lower guidance cards, or the final CTA point to the relevant guidance plans destination for that audience or stage instead of looping only into more free assessments
- if the CTA wording sounds like a generic audience label instead of the keyword the user searched for, rewrite it into keyword-aligned wording
- if a CTA is meant for students, make sure the visible label still clearly says `for Students` or `Student`
- if a CTA is meant for working professionals, make sure the visible label still clearly says `for Working Professionals` or `Working Professional`
- if the page includes a pricing or plans section, make sure it still uses the shared guidance pricing source instead of page-local hardcoded numbers
- if the page includes a pricing or plans section and the shared guidance plans system already fits, keep using that shared component system instead of page-local pricing cards
- if the page includes a pricing or plans section, make sure the audience fit is right:
  - student-only keyword -> student plan only
  - working-professional-only keyword -> working-professional plan only
  - broad mixed keyword -> both plans can appear
- if the page includes a pricing or plans section, choose that audience fit from the keyword's real buyer intent, not from habit:
  - school, after-10th, after-12th, college, fresher, recent-graduate, postgraduate, and similar student-intent keywords -> student plan only
  - working-professional, pivot, stagnation, salary-growth, mid-career, AI-pressure, and similar professional-intent keywords -> working-professional plan only
  - broad service-family keywords where both audiences are genuinely relevant -> both plans can appear
- if the page includes a pricing or plans section, make sure there is at least one supporting CTA that jumps to that section with keyword-aligned wording such as `See Career Guidance Plans` or `See Career Counselling Plans`
- if the page already includes the shared plans section, the main service CTA should usually jump to `#plans` instead of bypassing the pricing section with a direct-payment hero button
- if the page already includes the shared plans section, keep the actual payment or checkout buttons inside the pricing cards so the reader can compare the right option before paying
- if the existing hero, contextual, or final service CTAs already land on `#plans`, do not force an extra dedicated plans button just for the sake of repetition
- if the page includes a pricing or plans section, keep it lean and easy to scan; do not add long preambles before the cards
- if the page includes a pricing or plans section, make sure the visible section title and plan-jump CTA use the exact page service word like `guidance`, `counselling`, `coaching`, `mentoring`, or `strategy` instead of defaulting back to `guidance`
- if the page includes a pricing or plans section, do not let the visible section title drift into vague, generic, or placeholder-like wording
- if the page includes a pricing or plans section, the heading should feel commercially intentional, keyword-aware, and outcome-led even when it does not repeat the exact keyword in full
- if the page includes a pricing or plans section, concise audience-led plan-card titles are fine when repeating the full keyword would make the cards slower to scan
- if the page includes a pricing or plans section, keep the advantage copy focused on why Future Career School is better than generic alternatives, not on every supporting detail you know
- if the page includes a pricing or plans section, make sure price is one of the strongest visual elements and that student continuous-guidance value appears where relevant
- if the page includes a student plan, make it clear that continuous guidance begins after the first 1-on-1 session and is the stronger ongoing support path for students rather than a tiny edge-case add-on
- if the page includes a student plan and continuous guidance is the path being emphasized, it is fine to use one short continuous-guidance CTA instead of showing two competing student buttons at once
- if the page uses one continuous-guidance CTA, make it clear that the 1-on-1 is included in that student path
- if plan-card buttons still read too long, compress them into short scan-first labels when the surrounding card already makes the audience and offer clear
- if a plans section still uses narrowing labels like `Best used when`, rewrite them into broader scan-first labels such as `What you avoid`, `What gets clearer`, or `What you move toward`
- if a plans section still places short labels beside longer text in a way that wastes space, stack them instead for faster scanning
- if a broader student-facing destination page already acts as the real CTA destination for narrower student-intent keywords, remove narrower student CTA wording from that broader page instead of stacking both
- do not default BOFU hero CTAs to WhatsApp or direct-contact links unless the user explicitly asked for that route
- if the keyword carries local or `near me` intent, make the locality logic explicit and honest instead of implying offline presence
- if the keyword carries local or `near me` intent, state clearly that the service is online and available in that city and across India
- if a local page still sounds like proximity alone is the value, add copy that explains why online guidance can still be stronger from that city
- if a local page does not help someone joining from home, college, or work in that city, add that practical angle where useful
- if a local page tries to sound strongest by making unsupported claims about every local counsellor or local business, remove that and compare on usefulness, decision quality, skill direction, proof of work, and the free updated practical AI-powered assessment layer instead
- if a local page still feels geographically vague, add the city's main areas or neighbourhoods naturally into the local context
- use enough area names to feel real for that city, usually around 5 to 25 depending on city size
- do not add locality names as a dumped list; connect them to how people actually live, study, commute, or work inside that city
- remove headings or sentences that sound like internal planning, SEO commentary, or business-owner strategy notes
- remove headings or subtitles that explain search behavior to the reader, including lines like `What people usually mean when they search...`, `why this search happens`, `city-intent`, `keyword intent`, or `when this page is the right starting point`
- when you notice that kind of phrasing, rewrite it into direct client-facing language about the person's situation, pressure, and stronger next step
- do not leave visible words like `buyer`, `high-intent`, `keyword intent`, or `service-fit threshold` in live page copy
- remove route-instruction or architecture wording from visible copy, including phrases like `use this page when`, `hub page`, `support page`, `indexable`, `noindex`, `SEO-compatible`, or `this section can grow cleanly`
- run `npm run check:public-copy` after build and fix any rendered-copy failures before considering the BOFU follow-up done
- if a BOFU page still has a jump nav, table of contents, or index block under the hero, remove it unless the user explicitly asked for that pattern
- if a BOFU page still has boxed hero skim items like `Best when`, `Main value`, or `What should change`, collapse them into one or two short support lines under the main hero CTA
- if a comparison section still says `Typical`, replace it with `Others`
- if a comparison section still uses `Weak version`, `Useful version`, or similar version language, rewrite that framing entirely
- do not let the page drift back into session-format or package-format copy unless the user explicitly asks for that angle
- if the user explicitly asked for plans or pricing, keep that copy tied to the shared approved pricing source instead of drifting into invented package language

---

## Truth and Compliance Checks

- every new line must stay inside the approved business facts listed above
- if a helpful point is not commercially approved there, use neutral wording or leave it out
- external research may help with keyword nuance or trust context, but it must not be used to invent business claims about Future Career School
- verify changing facts through primary or official sources when that information could have changed
- keep ethical language intact: no job guarantees, no guaranteed income outcomes, no fake scarcity, no fake urgency

---

## Client-Facing Copy Rules (Review These)

**The core rule:** Public website copy must speak to the visitor, not to the developer, editor, prompt, or business owner. If a sentence would make more sense in an assistant response than on the page itself, do not put it in the page.

**Avoid this kind of copy on any BOFU page:**
- `use this page when...`
- `hub page`, `support page`, `related page`, `stage page`
- `this section can grow cleanly`
- `indexable`, `noindex`, `SEO-compatible`
- `this page is for...`, `why this page exists`, `keep this page focused`
- `broader service model`, `free first layer`, `assessment-first decision`
- `Weak version`, `Useful version`
- `Buyer checks`, `High-intent prospects`, `Keyword intent`, `This BOFU page`
- Route instructions, site architecture commentary, workflow commentary, or content strategy notes visible to the public

**What to write instead:** user benefit, practical clarity, decision support, stronger positioning, useful next-step context, audience-relevant outcomes.

**For link-card descriptions:** explain what the destination helps with, who it is useful for, and what decision it supports. Do not explain where it sits in the site structure.

---

## SEO and Structure Checks

- keep one H1 only
- **H1 keyword placement — optional preference:** If the primary keyword naturally fits at the start of the H1, prefer leading with it. This is not mandatory — apply only when it reads naturally and makes the heading stronger. A keyword mid-sentence that reads well is better than a keyword forced to the front that creates awkward phrasing.
- keep the keyword natural in the title, meta description, H1, first sentence, and at least one H2 when natural
- if new sections are added, keep heading order logical and keep the page coherent
- if the page has a jump nav, table of contents, sticky section nav, or anchor links, update them so they exactly match the current section labels and IDs
- strengthen internal links when useful:
  - parent service page
  - services hub
  - assessments hub: `https://futurecareerschool.com/services/assessments/`
  - relevant live sibling pages
  - relevant published blog pages when they genuinely help the user decide
- if a page has several relevant internal destinations, do not keep hiding those links inside unrelated cards or scattered body paragraphs
- move them into one dedicated standalone related-links section instead
- prefer `src/components/LinkDirectorySection.astro` when a scalable directory-style section is needed
- if the BOFU page is a child page, make sure the parent page supports it with a relevant internal link
- if the page becomes materially more distinct in site structure, update routes and memory/docs accordingly

**Internal linking direction:**
- child pages link up to parent (e.g., `/career-guidance-after-12th/` links to `/career-counselling-and-career-guidance/`)
- assessments links go to `https://futurecareerschool.com/services/assessments/`
- guidance/counselling/coaching CTAs go to `https://futurecareerschool.com/services/career-counselling-and-career-guidance/`

---

## UX, UI, and Mobile-First Checks

- improve readability, not just content quantity
- tighten above-the-fold clarity so the page promise, fit, and next step are easy to understand on the first screen
- keep each CTA block lean on non-assessment BOFU pages; one primary CTA is usually enough on audience-specific blocks
- on mixed-audience counselling, guidance, coaching, or strategy pages, it is acceptable to keep one student CTA and one working-professional CTA when both are genuinely relevant
- on audience-specific counselling, guidance, coaching, or strategy pages, keep each closing or contextual CTA block to one intended primary CTA
- on longer BOFU service pages, do not stop at header, hero, and final CTA only
- add 2 to 3 contextual in-body CTA moments when the page length and decision pressure justify them, so the page usually offers 4 to 6 total conversion opportunities without looking spammy
- place those contextual CTA moments after strong decision-support sections where the reader is most likely ready to act
- avoid extra hero buttons like `See What This Covers` unless the user explicitly wants that pattern or the UX would otherwise become unclear
- reduce paragraph fatigue: split dense stretches, surface the takeaway, and make the next action obvious
- improve spacing, text hierarchy, contrast, and scan rhythm so the page does not feel visually flat
- use comparison blocks, expectation blocks, fit cards, summary strips, or other reusable patterns only when they genuinely help
- do not repeat the exact same section treatment so often that the page becomes monotonous
- keep CTA sections visually clear without looking spammy
- when a shared BOFU section component fits, keep the shared design pattern and customize the copy inside it instead of rebuilding another page-local section from scratch
- remove overlapping cards, crossing lines, offset boxes, or decorative connectors when they make the page feel gimmicky, cramped, or harder to scan
- if a section still looks plain, generic, repetitive, or template-like after the first pass, redesign the section treatment instead of only adding more copy
- do not accept "clean but boring" as a finished BOFU design standard
- make each major section feel visually intentional and easier to grasp than a default card grid
- if several sections still look too similar to each other, vary the section rhythm and hierarchy so the page does not feel mechanically repeated
- when a two-card section appears on desktop, center and balance it instead of leaving it awkwardly aligned to one side of a wider grid
- strengthen the visual standard toward premium, modern, editorial landing-page design rather than safe, generic component output
- check narrow-screen readability around 360px to 430px widths
- make sure multi-column layouts collapse before they feel cramped
- make sure comparison rows, grids, and card groups stay comfortable on phones
- if a page still uses flat local patterns like `card-grid + info-card`, `checkpoint-grid + checkpoint-card`, or `prep-grid + prep-card`, move them toward `src/components/bofu/BofuFeatureSection.astro` or `src/components/bofu/BofuStepFlowSection.astro` before adding more duplicated CSS
- if a page still uses local list-heavy cards or audience-detail cards, move them toward `src/components/bofu/BofuListCardSection.astro` instead of rebuilding another one-off card system
- if a page still uses repeated local trade-off strips or recap bars, move them toward `src/components/bofu/BofuSummaryStrip.astro`
- if a page still uses a repeated local FAQ block, move it toward `src/components/bofu/BofuFaqSection.astro` instead of re-styling another page-local accordion
- if a repeated BOFU design pattern is emerging across multiple pages, move it toward reusable BOFU components or shared styling instead of duplicating more one-off CSS

---

## Doorway Page Prevention Audit (Critical in Follow-Up)

Before finalizing any BOFU follow-up pass, run this doorway-detection audit:

### Uniqueness Verification

1. **Compare this page to the nearest sibling:**
   - If it's a location page, compare to another city location page
   - If it's an audience page, compare to the other audience variation
   - If it's a stage page, compare to another stage variant

2. **Measure unique content percentage:**
   - Highlight all original text unique to THIS page (not reused on sibling)
   - Count unique words / total page words = % unique
   - MUST be ≥ 30% for pass
   - If < 30%, add more local context, unique objections, or unique examples until threshold is met

3. **Check section treatment:**
   - Does this page follow the identical section order, naming, and structure as its sibling?
   - If YES, redesign at least 2 sections or reorder them
   - Vary visual hierarchy, grouping, or narrative approach

4. **Verify original content blocks:**
   - For location pages: Is there a 300+ word local context block with no generic rewrites?
   - For audience pages: Are objections specific to THIS audience's pain points?
   - For stage pages: Does problem framing match THIS stage's real constraints?
   - If any is generic or reusable across pages, replace it

### Hero Positioning Check

- [ ] Hero section (H1, subtext, badge/pill) carries at least one core positioning advantage: earlier financial freedom, high-income skill portfolio, or unlocking high income opportunities
- [ ] Positioning signal is not deferred to body sections only — it appears in the first screen
- [ ] A hero that only describes the service category without a positioning signal is under-positioned: fix it before finalising
- [ ] At least one sentence in the first two body sections (after the hero) explicitly references earlier financial freedom, high income opportunities, or the high-income skill portfolio — positioning is not buried below the fold
- [ ] At least one positioning signal appears in a heading, tile label, bolded sentence, or support line a skimmer would see — not buried inside long prose only (scannability check)
- [ ] Positioning appears at minimum in: (1) hero, (2) one of the first two body sections, and (3) final CTA section — if the body middle has no positioning signal, add one
- [ ] If the page targets a specific audience (student / working professional / career changer), the positioning connects the advantage to that audience's specific risk or situation — not a generic statement of the advantage alone

### Assessment Mention Compliance

For non-assessment keywords:

- [ ] Hero CTA does NOT mention assessment or "take a test"
- [ ] No assessment-only section in the first 3 page sections
- [ ] Assessment mentioned only ONCE in a contextual inline note (inside a larger section)
- [ ] Assessment note uses neutral framing: "As context, we offer free assessments..." (not "First, take an assessment...")
- [ ] Final CTA primary button is the service CTA (Get Counselling, not Get Assessment)
- [ ] Page would still work and feel complete without the assessment mention
- [ ] NO assessment appears in hero copy, headlines, or prominent CTA labels

If assessment-intent keyword, above rules do NOT apply — assessment can be prominent.

### Template Fatigue Check

- [ ] This page's problem framing is distinct from its nearest sibling (not a rephrase)
- [ ] At least 2 unique objections specific to this keyword (not on sibling pages)
- [ ] At least 1 section with zero equivalent on nearby sibling pages
- [ ] Internal links include at least 1 link unique to this page's theme
- [ ] FAQ questions are specific to this page's intent (not generic rewrites)
- [ ] Hero copy is NOT a template placeholder with city/audience name substituted

### Content Depth Verification

- [ ] Page has enough meaningful depth for the keyword instead of feeling padded, thin, or under-explained
- [ ] At least 3 substantial sections with original narrative (not just reformatted data)
- [ ] Comparison rows (if used) are intentionally selected, not full library dumped
- [ ] Guidance process described with examples specific to this page's audience/intent
- [ ] Objections and FAQ feel genuine to the keyword, not generic

### Red Flags: Do NOT Publish If Any Are True

- [ ] More than 70% of copy is shared with or directly paraphrased from another BOFU page
- [ ] The page reads as a template with only city names, audience labels, or keyword swaps changed
- [ ] All sections use the identical order and structure as a nearby sibling page
- [ ] No original problem framing unique to this keyword's intent
- [ ] Zero unique examples, objections, or decision filters not on sibling pages
- [ ] Assessment CTA appears in hero or prominent CTA sections when the keyword is NOT assessment-intent
- [ ] Copy reads auto-generated or like a variable-swapped template

---

## Final Follow-Up Standard

- the page should feel more complete, more intentional, and more useful than the first pass
- the page should still read like one coherent BOFU page, not like random extra sections were appended to it
- if the page still feels generic, repetitive, too thin, too flat, or too close to another BOFU page, keep improving before considering the follow-up complete
- the page should pass all doorway-prevention audits (30% unique content, no assessment bait-and-switch, no template fatigue)
- the page's uniqueness should be measurable and defensible against Google's scaled-content and doorway-page policies
- `npm run check:public-copy` must pass after build before the follow-up is considered done
