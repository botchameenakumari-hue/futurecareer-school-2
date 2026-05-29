# Bottom-of-Funnel Page Prompt Follow-Up

Status: Active

The same anti-slop public-copy rule also exists separately in `CLIENT_FACING_COPY_RULE.md` for non-BOFU public pages.

The goal is not just to make the page longer.
The goal is to make it more complete, more practical, easier to scan, and more useful for someone deciding what to do next.

## Follow-Up Content Checks

- if an existing line conflicts with `BOFU_PAGE_PROMPT.md`, fix the unsupported or outdated line instead of preserving it
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

## Follow-Up Depth Checks

- add more useful client-facing decision help, not filler
- strengthen the real problem behind the keyword when that pressure is still vague
- add intent-specific decision criteria, comparison framing, objection handling, or next-step clarity when they improve the page
- if relevant, strengthen the difference between generic degree-first advice and higher-value skill direction, proof of work, income growth, and achieving earlier financial freedom
- if relevant, make the free assessments and free resource layer more visible without turning them into the only point of the page
- if relevant, clarify that many providers charge thousands for outdated or impractical assessments while Future Career School offers free, updated, practical, AI-powered career and skill assessments
- if relevant, use a brief contextual assessment note or link instead of a full standalone assessment section
- if the page is not assessment-intent, remove or collapse oversized assessment sections that distract from the main service decision
- if the keyword is not assessment- or test-intent, do not let the hero CTA drift back into leading with assessments
- if the keyword is a career counselling, guidance, coaching, or strategy page rather than an assessment-intent page, do not let the closing CTA drift into an assessment button when that assessment link is already present contextually in the body
- if the CTA wording sounds like a generic audience label instead of the keyword the user searched for, rewrite it into keyword-aligned wording
- if a CTA is meant for students, make sure the visible label still clearly says `for Students` or `Student`
- if a CTA is meant for working professionals, make sure the visible label still clearly says `for Working Professionals` or `Working Professional`
- if a broader student-facing destination page already acts as the real CTA destination for narrower student-intent keywords, remove narrower student CTA wording from that broader page instead of stacking both
- do not default BOFU hero CTAs to WhatsApp or direct-contact links unless the user explicitly asked for that route
- if the keyword carries local or `near me` intent, make the locality logic explicit and honest instead of implying offline presence
- remove headings or sentences that sound like internal planning, SEO commentary, or business-owner strategy notes
- remove headings or subtitles that explain search behavior to the reader, including lines like `What people usually mean when they search...`, `why this search happens`, `city-intent`, `keyword intent`, or `when this page is the right starting point`
- when you notice that kind of phrasing, rewrite it into direct client-facing language about the person's situation, pressure, and stronger next step
- do not leave visible words like `buyer`, `high-intent`, `keyword intent`, or `service-fit threshold` in live page copy
- remove route-instruction or architecture wording from visible copy, including phrases like `use this page when`, `hub page`, `support page`, `indexable`, `noindex`, `SEO-compatible`, or `this section can grow cleanly`
- rewrite eyebrow labels and section tags when they sound like internal labels instead of direct client-facing copy
- remove body eyebrow text, kicker labels, and pre-heading tags from normal BOFU sections unless the section is the hero, FAQ, or final `Next step` CTA
- run `npm run check:public-copy` after build and fix any rendered-copy failures before considering the BOFU follow-up done
- if a BOFU page still has a jump nav, table of contents, or index block under the hero, remove it unless the user explicitly asked for that pattern
- if a BOFU page still has boxed hero skim items like `Best when`, `Main value`, or `What should change`, collapse them into one or two short support lines under the main hero CTA
- if a comparison section still says `Typical`, replace it with `Others`
- if a comparison section still uses `Weak version`, `Useful version`, or similar version language, rewrite that framing entirely
- do not let the page drift back into session-format or package-format copy unless the user explicitly asks for that angle

## Truth and Compliance Checks

- every new line must stay inside the approved facts in `BOFU_PAGE_PROMPT.md`
- if a helpful point is not commercially approved there, use neutral wording or leave it out
- external research may help with keyword nuance or trust context, but it must not be used to invent business claims about Future Career School
- verify changing facts through primary or official sources when that information could have changed
- keep ethical language intact: no job guarantees, no guaranteed income outcomes, no fake scarcity, no fake urgency

## SEO and Structure Checks

- keep one H1 only
- keep the keyword natural in the title, meta description, H1, first sentence, and at least one H2 when natural
- if new sections are added, keep heading order logical and keep the page coherent
- if the page has a jump nav, table of contents, sticky section nav, or anchor links, update them so they exactly match the current section labels and IDs
- strengthen internal links when useful:
  - parent service page
  - services hub
  - assessments hub
  - relevant live sibling pages
  - relevant published blog pages when they genuinely help the user decide
- if a page has several relevant internal destinations, do not keep hiding those links inside unrelated cards or scattered body paragraphs
- move them into one dedicated standalone related-links section instead
- prefer `src/components/LinkDirectorySection.astro` when a scalable directory-style section is needed
- if the BOFU page is a child page, make sure the parent page supports it with a relevant internal link
- if the page becomes materially more distinct in site structure, update routes and memory/docs accordingly

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
- do not accept “clean but boring” as a finished BOFU design standard
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
   - For location pages: Is there a 300+ word local context block with no generic rewrites? ✓
   - For audience pages: Are objections specific to THIS audience's pain points? ✓
   - For stage pages: Does problem framing match THIS stage's real constraints? ✓
   - If any is generic or reusable across pages, replace it

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

## Final Follow-Up Standard

- the page should feel more complete, more intentional, and more useful than the first pass
- the page should still read like one coherent BOFU page, not like random extra sections were appended to it
- if the page still feels generic, repetitive, too thin, too flat, or too close to another BOFU page, keep improving before considering the follow-up complete
- the page should pass all doorway-prevention audits (30% unique content, no assessment bait-and-switch, no template fatigue)
- the page's uniqueness should be measurable and defensible against Google's scaled-content and doorway-page policies
