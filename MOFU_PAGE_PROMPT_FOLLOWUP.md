# Middle-of-Funnel Page Prompt Follow-Up

Status: Active

**This prompt is fully self-contained. You do not need to read any other document to use it.**

## Google Analytics Verification (Mandatory)

Before considering the page complete, confirm that it uses `src/layouts/BaseLayout.astro`, which
already supplies `src/components/GoogleAnalytics.astro` and
`src/components/ConsentBanner.astro`. Do not copy or directly import either component into the page.
In the rendered HTML, verify that the shared Analytics initialization and consent controls each
appear exactly once, with no page-level Google tag or static `gtag.js` request before consent.

The goal is not to make the page longer or more sales-heavy. The goal is to make sure it still reads
as an honest comparison AND makes Future Career School's advantage visible AND moves a reader who has
decided toward an easy next step. A MOFU page that drifts too far toward blog neutrality or too far
toward BOFU pushiness has failed this pass.

---

## Project Context

**Site:** Future Career School
**Canonical domain:** `https://futurecareerschool.com`
**Active project folder:** `C:\Users\Asus\Documents\futurecareer-school-2`

---

## Approved Business Facts (Reference for Truth Checks)

Do not invent business facts, deliverables, promises, prices, guarantees, frameworks, timelines, or
outcomes. Use only these approved facts:

- Future Career School serves students, freshers, and working professionals across school, college, recent-graduate, postgraduate, and career-growth stages.
- Career counselling, career guidance, career coaching, and career strategy are treated as one practical service family.
- Guidance is delivered online across India.
- The business is not a job-guarantee or placement service.
- Career and skill assessments are fully free and can be described as updated, practical, and AI-powered.
- Many providers in the market charge thousands for outdated or impractical assessments; Future Career School offers free, updated, practical, AI-powered assessments.
- Career and income-growth resources, Career & Skills Compass, and course-finder tools are free.

**Approved pricing:**
- Student 1-on-1: `Rs 3000` crossed, `Rs 250` current limited-time price
- Working-professional 1-on-1: `Rs 5000` crossed, `Rs 3000` current limited-time price
- Student continuous guidance: `Rs 29000` crossed, `Rs 12000` current limited-time price (includes the 1-on-1 and up to 24 small-group sessions across the year)
- Shared source of truth: `src/config/guidancePlans.ts`
- Do not invent additional pricing tiers, packages, discounts, or guarantees.

**Approved CTA destinations:**
- Parent guidance page: `https://futurecareerschool.com/services/career-counselling-and-career-guidance/`
- Relevant BOFU sibling pages (career-guidance, career-counselling, student/professional guidance)
- Assessments hub: `https://futurecareerschool.com/services/assessments/`
- Do not link directly to a Razorpay payment link from a MOFU page — route through the BOFU page or its `#plans` anchor.

**Approved positioning:**
- Achieving earlier financial freedom through high-value skill building
- Unlocking high income opportunities through a deliberate high-value, high-income skill portfolio — the chain is: right skill portfolio → high income opportunities → earlier financial freedom
- Holistic skill approach: the right skill mix, proof of work, communication, market positioning, personal fit, and financial/family reality
- High-leverage decision support over generic advice
- Free updated practical AI-powered assessments instead of paid outdated assessments
- Degrees have a place; the problem is degree-only thinking without skill-building alongside it

---

## The Three-Part MOFU Balance Check (Run This First)

Before any other check, re-read the page and answer honestly:

1. **Does it answer the real comparison/consideration question?** If you removed all Future Career
   School mentions, would the page still be a genuinely useful, honest answer to the keyword? If not,
   it has drifted into a BOFU page wearing a MOFU URL — add real comparison substance back in.
2. **Is Future Career School's advantage visible inside the comparison**, not just bolted onto a CTA
   at the bottom? If a reader could skim the page and never notice why FCS is the better choice, the
   positioning is missing from the body — weave it into the comparison itself.
3. **Is there an easy, low-friction next step at the point the reader would naturally decide?** If the
   page ends without a clear, calm next action, the conversion layer is missing.

If any of the three is weak, that is the primary fix for this follow-up pass — do it before any
cosmetic edit below.

---

## Follow-Up Content Checks

- if an existing line conflicts with the approved business facts above, fix the unsupported or outdated line instead of preserving it
- if the page reads as a one-sided pitch that never acknowledges a real trade-off (cost, time, whether the free layer is enough first), add the honest trade-off back in — a MOFU page that never admits a downside reads as an ad, not a comparison
- if the page reads as neutral blog content with no visible business advantage, weave the approved positioning and differentiation angles into the comparison itself, not just into a CTA block
- if the page still feels too close to the BOFU parent/sibling page's copy, strengthen the comparison-specific framing instead of repeating BOFU hero/CTA language
- if the first sentence still sounds like a category definition instead of answering the comparison question, rewrite it
- if the keyword is awkward in exact form, use a close natural variation near the start instead of forcing robotic phrasing
- if the page uses the shared comparison matrix, make sure the row library still matches `src/config/bofu.ts`; use only the rows that genuinely fit this specific comparison
- if pricing is mentioned, verify it matches `src/config/guidancePlans.ts` exactly — no invented tiers, discounts, or guarantees

---

## CTA and Conversion Checks

- confirm there is no direct-payment hero CTA — the opening should not push straight to a Razorpay link
- confirm the primary CTA routes to the parent guidance/counselling page, a relevant BOFU sibling, or a `#plans` anchor — not a bare payment link and not an assessment-first path
- confirm there are 2-3 contextual CTA moments placed after real decision-support sections (after the comparison table, after the cost breakdown, after addressing "is it worth it") — not stacked at the top
- if the page mentions assessments, confirm it is framed as a small lower-pressure support option for someone still deciding, not a bait-and-switch hero CTA and not an equal-weight button beside guidance/counselling
- if the closing section reads like a hard countdown-style push rather than a natural next step after a comparison, soften it
- if the page has drifted toward zero CTAs (pure blog tone) or toward 4+ hard CTAs (BOFU tone), rebalance to the MOFU middle ground

---

## Truth and Compliance Checks

- every new line must stay inside the approved business facts listed above
- if a helpful point is not commercially approved there, use neutral wording or leave it out
- external research may help with comparison nuance or trust context, but it must not be used to invent business claims about Future Career School or about competitors
- do not make unsupported claims about other providers (e.g. "all other career coaches are outdated") — compare honestly on the approved differentiation angles instead
- keep ethical language intact: no job guarantees, no guaranteed income outcomes, no fake scarcity, no fake urgency
- **research-depth check:** if the comparison, the objections it resolves, or the value-for-cost reasoning
  still feels based on assumptions rather than the real market, do more research on how the options
  genuinely differ and what someone at this keyword actually asks — before calling the pass complete
- **flexible-timeframe check:** scan every heading, CTA/support line, meta field, comparison row, body
  paragraph, and FAQ answer for a hardcoded day or week count attached to a test, proof block, or
  "how soon will this help" claim. Rewrite to pace-neutral language. Real external dates and approved
  service facts (e.g. "up to 24 small-group sessions across the year") may stay concrete.
- **Review-schema check:** confirm the page uses no self-serving `Review` or `AggregateRating` markup for
  Future Career School, its services, plans, or on-site testimonials, and that no rating, reviewer, or
  dummy review section was invented to qualify for a rich result — this applies even on "reviews" or
  "is it worth it" comparison keywords

---

## Client-Facing Copy Rules (Review These)

**The core rule:** Public website copy must speak to the visitor, not to the developer, editor, prompt, or business owner. If a sentence would make more sense in an assistant response than on the page itself, do not put it in the page.

**Avoid this kind of copy on any MOFU page:**
- `use this page when...`, `hub page`, `support page`, `this page is for...`, `why this page exists`
- `indexable`, `noindex`, `SEO-compatible`
- `Buyer checks`, `High-intent prospects`, `Keyword intent`, `This MOFU page`, `This comparison page exists to...`
- any line that explains why the page was built to intercept a search query instead of just answering it
- Route instructions, site architecture commentary, workflow commentary, or content strategy notes visible to the public

**What to write instead:** an honest answer to the comparison, practical clarity, decision support, and Future Career School's advantage woven naturally into that answer.

---

## AI-Tell Sweep (Review This)

- scan for throat-clearing openers/wrap-ups ("in today's world", "in conclusion", "ultimately", "it's important to note", "let's dive in") and cut them
- scan for stacked connective filler ("moreover", "furthermore", "additionally", "that being said") and cut it
- replace hedged claims ("may", "might", "can sometimes", "in many cases") with a plain, direct statement wherever the underlying fact supports one
- check paragraph and sentence rhythm — if every paragraph is the same length and every sentence is mid-length, vary it
- check for hollow symmetry (forced "not only... but also", rule-of-three lists that don't earn their place, both-sides paragraphs that commit to nothing) and cut or sharpen it
- check that no H2/H3 section opens by simply restating its own heading as the first sentence
- if a sentence could sit unchanged on a competitor's comparison page, rewrite it until it couldn't

---

## SEO and Structure Checks

- keep one H1 only, keyword-first when it reads naturally
- keep the keyword natural in the title, meta description, H1, first sentence, and at least one H2
- schema should be `Article` (+ `FAQPage` if real FAQs exist) + `BreadcrumbList` — verify it is NOT `Service`; `Service` schema belongs on BOFU pages only
- if the page has several relevant internal destinations, use one dedicated related-links section instead of scattering them, or link inline where it fits the comparison naturally
- confirm the page links up to the parent guidance hub, across to the relevant BOFU sibling(s) once the comparison resolves, and down to assessments if the free layer is genuinely relevant
- **answer-first summary check:** confirm a `key-takeaways`/"honest short version" block sits immediately after the opening framing, before jump navigation or CTAs, and that it states the actual answer, trade-off, and decision filter in 2-3 tight sentences or equivalent bullets — not a table of contents restating the page's own headings
- **table check:** confirm every `<td>` in every table has a `data-label` attribute, including 2-column tables — verify by rendering at ~390px, not just by reading the code
- **FAQ check:** confirm FAQs use `.faq-accordion` with the first item open by default, not a long always-open Q&A stack
- **framework naming check:** if the page names a multi-part framework or checklist, confirm every later reference uses the exact same name as the first introduction
- if this MOFU page's title's comparison-angle slot reads too similarly to a sibling MOFU page's title (e.g. two "best career X" pages with near-identical angle wording), sharpen the angle so the two are clearly distinguishable from the title alone

---

## UX, UI, and Mobile-First Checks

- tighten above-the-fold clarity so the reader understands what's being compared and why this page is trustworthy, before scrolling
- reuse the BOFU visual standard: no flat grey card grids, cycling accent colours, comparison content in a grid/table (not running paragraphs), tables wrapped with `data-label` cells so they stack on phones
- check narrow-screen readability around 360px to 430px widths
- if a section still looks plain, generic, or template-like, redesign the section treatment instead of only adding more copy
- reduce paragraph fatigue: split dense stretches, surface the takeaway, keep the comparison scannable

---

## Doorway Page Prevention Audit

- confirm this page is not a near-duplicate of the BOFU parent/sibling page's copy with a comparison table bolted on
- confirm this page is not a near-duplicate of another MOFU page for a trivially reordered version of the same comparison (e.g. do not publish both "X vs Y" and "Y vs X" as separate pages)
- confirm the page has genuinely unique comparison content, unique objections specific to this exact comparison, and (if cost is discussed) unique value-for-cost reasoning
- confirm minimum ~1,000+ words of genuinely useful content — depth over padding
- **measure uniqueness:** at least 30% of this page's comparison angle, objections, and value-for-cost reasoning must be original to this exact comparison and not swappable into the nearest sibling MOFU page — if it falls short, add specific reasoning tied to this comparison instead of generic filler
- if any of the red flags in `MOFU_PAGE_PROMPT.md`'s Anti-Doorway Rules section are true (70%+ identical comparison rows, pasteable objections section, generic value-for-cost reasoning, or a reordered-phrasing duplicate), fix before considering this pass complete
- once there are 8+ live MOFU pages, compare this page side by side against its nearest sibling and confirm the angle is genuinely distinguishable

---

## Final Follow-Up Standard

- the page should read as a genuinely honest comparison that a skeptical reader would trust
- Future Career School's advantage should be visible without the page feeling like an ad
- the next step should be easy and low-pressure, appearing at the point the reader has actually decided
- if the page still feels one-sided, generic, or like a BOFU/blog page wearing a MOFU URL, keep improving before considering the follow-up complete
- `npm run check:public-copy` must pass after build before the follow-up is considered done
