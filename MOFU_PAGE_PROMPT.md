# Middle-of-Funnel Page Prompt

Status: Active prompt for MOFU consideration-intent pages.

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

Use this file for consideration-stage pages where the person already knows the general category but
has not decided who or what to choose yet. Typical MOFU keywords:
- career counselling vs career coaching
- career guidance vs career counselling
- how to choose a career counsellor
- how to choose a career guidance service
- best career guidance service (in India)
- career counselling fees / career counselling cost
- is career counselling worth it
- career counselling reviews
- online vs offline career counselling
- free vs paid career guidance
- what to expect from a career counselling session

This file can also be used for other close MOFU variants when the underlying intent is meaningfully
the same, even if the exact wording differs from the examples above.

**Funnel placement (read this before choosing a prompt file):**
- If the keyword is purely informational and the person is not yet comparing options or providers
  (e.g. "how to choose a career after 12th"), it is TOFU — use `BLOG_WRITING_PROMPT.md` instead.
- If the keyword already signals the person is ready to hire, book, or pay (e.g. "career counselling
  online", "career coach near me"), it is BOFU — use `BOFU_PAGE_PROMPT.md` instead.
- MOFU sits between the two: the person understands the category and is weighing options, cost,
  format, or providers, but has not committed yet. The page must answer that comparison honestly
  **and** make Future Career School's advantage visible — without the harder BOFU-style hero sell.

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

This rule is strict because MOFU pages compare options and mention cost/value — accuracy matters as much as it does on BOFU pages.

---

## What To Do After Reading This File

1. Inspect the closest live pages before writing:
   - `src/pages/services/career-counselling-and-career-guidance/index.astro` (parent hub, for tone and CTA anchors)
   - the nearest relevant BOFU child page for structural reference
2. Read `src/config/bofu.ts` for the live shared comparison library and CTA/plan destinations.
3. Write the page following all rules in this file.
4. After writing, run `npm run check:public-copy` after build and fix any rendered-copy failures before treating the page as complete.

---

## What Makes a Page MOFU (Not TOFU, Not BOFU)

A MOFU page must do three things at once — this is the core difference from the other two prompts:

1. **Answer the real comparison or consideration question honestly**, the way a blog article would —
   with genuine trade-offs, not a one-sided pitch. If the honest answer sometimes favors "you may not
   need a paid service yet" (e.g. a free assessment is enough for now), say that. A MOFU page that
   only ever concludes "buy now" reads as biased and won't earn trust or rankings.
2. **Make Future Career School's business advantage visible while answering that question** — not
   bolted on as an unrelated CTA block, but woven into the comparison itself (see Approved MOFU
   Facts and Messaging Bank below).
3. **Move the reader toward converting easily** once they've made the decision — clear, low-friction
   next steps at natural decision points, without the harder BOFU-style hero sell.

If a draft only does (1), it is a TOFU blog post in disguise — add the business-advantage layer.
If a draft only does (2) and (3), it is a BOFU page in disguise — add real, honest comparison substance.

---

## SEO Architecture and URL Rules

MOFU pages nest as children under the relevant BOFU service hub, not under `/blog/`. This keeps the
comparison content inside the commercial silo so it passes link equity to the money page instead of
forking into a separate content silo.

**Good:**
- `/services/career-counselling-and-career-guidance/career-counselling-vs-career-coaching/`
- `/services/career-counselling-and-career-guidance/how-to-choose-a-career-counsellor/`
- `/services/career-counselling-and-career-guidance/career-counselling-fees/`
- `/services/career-counselling-and-career-guidance/is-career-counselling-worth-it/`

**Avoid:**
- `/career-counselling-vs-coaching/` (flat root slug)
- `/blog/career-guidance/career-counselling-fees/` (forks comparison/cost content into the blog silo, away from the service hub it should support)

**Title formula for MOFU pages:**
- `[Target Keyword] | [Honest Comparison Angle or Outcome] | Future Career School`
- The `[Honest Comparison Angle or Outcome]` slot must state this specific page's actual angle, not a
  reused phrase from a sibling MOFU page. Two sibling pages sharing the same keyword family (e.g. two
  "best career X" pages) must read as clearly different comparisons at the title level, not only in
  the body copy — if you cover up the keyword and just read the angle, it should still be obvious
  which page is which.

**URL slug rules:**
- lowercase and hyphens only
- short and readable, no keyword stuffing
- if the parent hub does not exist yet, create it in the same pass instead of publishing an orphaned child

---

## Live Information Architecture (Current Routes)

Current live parent and sibling pages relevant to MOFU placement:
- `/services/career-counselling-and-career-guidance/` — primary service hub (MOFU pages nest here)
- `/services/career-counselling-and-career-guidance/career-guidance/`
- `/services/career-counselling-and-career-guidance/career-counselling/`
- `/services/career-counselling-and-career-guidance/career-coach-near-me/`
- `/services/career-counselling-and-career-guidance/career-counselling-online/`
- `/services/career-counselling-and-career-guidance/locations/`
- `/services/career-counselling-and-career-guidance/student-career-guidance/`
- `/services/career-counselling-and-career-guidance/career-guidance-after-12th/`
- `/services/career-counselling-and-career-guidance/working-professional-career-guidance/`
- `/services/assessments/` — assessments hub (free assessments live here; useful contextual link on MOFU pages)

Sitemap route config lives in `src/config/site.ts` as `LIVE_INDEXABLE_ROUTES`.
Add new MOFU pages there only when genuinely ready for indexing.

---

## Shared SEO/Config Files

**`src/layouts/BaseLayout.astro`** — central SEO wrapper: title, description, canonical, robots, OG tags, JSON-LD injection.

**`src/config/site.ts`** — contains `SITE_NAME`, `SITE_URL`, `SITE_ALTERNATE_URLS`, `DEFAULT_OG_IMAGE_PATH`, `DEFAULT_OG_IMAGE_URL`, `CONTACT`, `WHATSAPP_BASE_URL`, `WHATSAPP_BOOKING_URL`, `LIVE_INDEXABLE_ROUTES`.

**`src/config/bofu.ts`** — shared comparison row library, internal/public link destinations, payment links, plan-jump links. MOFU pages reuse this same library; do not invent a separate one.

**`src/components/Nav.astro`** — shared public navigation.

**`src/components/Footer.astro`** — shared footer with crawl-supporting links.

---

## Publishing Workflow For Every New MOFU Page

1. Create the page under the correct parent-child folder structure (see SEO Architecture above).
2. Add the route to `LIVE_INDEXABLE_ROUTES` in `src/config/site.ts`.
3. Confirm the page is discoverable through `src/config/directory.ts` on the relevant parent browsing/directory page; add curated metadata only when the automatic fallback is not good enough.
4. Make sure the page uses `BaseLayout.astro` for canonical, title, description, and JSON-LD.
5. Add breadcrumbs that mirror the URL hierarchy.
6. Add `BreadcrumbList` schema and `Article` schema (see Schema Rules below). Add `FAQPage` only when a real FAQ section exists.
7. Add an internal link up to the parent guidance page, and down/across to at least one relevant BOFU sibling or the assessments hub.
8. Run `npm run check:public-copy` after build and fix rendered-copy failures.
9. Rebuild and verify generated `dist/sitemap.xml` and `dist/robots.txt`.

---

## Approved MOFU Facts and Messaging Bank

This reuses the same source-of-truth facts as `BOFU_PAGE_PROMPT.md` — do not invent a separate set of
claims for MOFU pages. Use these facts naturally and honestly while answering the comparison question.

### Core Positioning (weave into the comparison, not just the CTA)

- Achieving earlier financial freedom through high-value skill building is a core positioning priority.
- Unlocking high income opportunities through a high-value, high-income skill portfolio is a core positioning priority. The chain is: right skill portfolio → high income opportunities → earlier financial freedom.
- A holistic skill approach is a core positioning priority: the right skill mix for the person, proof of work, communication skills, market positioning, fit with how they actually work, and their financial and family reality — not just technical skills in isolation.
- High-leverage decision support over generic advice is a core positioning priority.
- Degrees have a place — the issue is degree-only thinking without skill-building alongside it.

### Approved Business Facts

- Future Career School serves students, freshers, and working professionals across school, college, recent-graduate, postgraduate, and career-growth stages.
- Career counselling, career guidance, career coaching, career strategy, and other close variants can be treated as one practical service family unless the user explicitly asks for a narrower distinction.
- Guidance is delivered online across India. Sessions are fully online and available across cities, not limited to one offline location.
- The business should not be described as a job-guarantee or placement service.
- Career and skill assessments are fully free, and can be described as updated, practical, and AI-powered.
- Many providers in the market charge thousands for outdated or impractical assessments; Future Career School offers free, updated, practical, AI-powered career and skill assessments.
- Career and income-growth resources, Career & Skills Compass, and course-finder tools are free.

### Approved Pricing Facts (for fees/cost-intent MOFU pages)

Use only these numbers — never invent tiers, discounts, or guarantees. Shared source of truth: `src/config/guidancePlans.ts`.
- Student 1-on-1: `Rs 3000` crossed, `Rs 250` current limited-time price
- Working-professional 1-on-1: `Rs 5000` crossed, `Rs 3000` current limited-time price
- Student continuous guidance: `Rs 29000` crossed, `Rs 12000` current limited-time price (includes the 1-on-1 plus up to 24 small-group sessions across the year)
- Career and skill assessments: fully free, not part of any paid tier
- If a MOFU page compares "free vs paid" or discusses cost, present these numbers honestly next to what the free layer (assessments, resources) already covers, so the comparison reads as fair rather than as a sales page in disguise.

### Approved Differentiation Angles (the comparison substance)

Use these as the actual content of a comparison/consideration page, not just a badge:
- generic advice vs high-leverage decision support around path, skill, and risk
- degree-only thinking (chasing credentials without building skills) vs a holistic skill-first approach with proof of work — degrees still have a place
- isolated skill decisions vs a deliberate high-value, high-income skill portfolio that compounds over time
- paid outdated impractical assessments vs free updated practical AI-powered career and skill assessments
- one-off session format vs continuous small-group guidance that keeps skill direction current as the market shifts

Exact shared comparison row library (mirrors `src/config/bofu.ts` — reuse rows that genuinely fit; do not invent new ones):
- `Generic advice that still leaves you unclear` vs `High-leverage decision support around path, skill, and risk`
- `Degree-first direction with weak skill edge` vs `Skill-first direction with proof of work and stronger market value`
- `Low-growth paths that delay real earning progress` vs `Stronger skill choices aimed at achieving earlier financial freedom`
- `Paid outdated impractical assessments with weak practical value` vs `Free updated practical AI-powered career and skill assessments`
- `Generic low-paying path advice that limits growth` vs `Higher-value skill direction with clearer income-growth logic`
- `Random upskilling that compounds slowly` vs `Clearer skill direction tied to growth and income upside`

Do not claim: guaranteed jobs, guaranteed income outcomes, or absolute superiority that cannot be proven.

### Approved FAQ Ground Truth (reuse from BOFU prompt)

- Degree alone is usually not enough for high income outcomes — skills and proof of work move the needle.
- Career and skill assessments are fully free.
- Guidance is online across India.
- Ethical providers do not guarantee jobs.
- Achieving earlier financial freedom can be worked toward through profile-fit skill stacking and consistent execution.

---

## MOFU Search Intent and Opening Rules

A MOFU searcher already understands the category. They are weighing options — cost, format, provider,
or whether they need this at all. They are not looking for a category definition, and they are not yet
ready for a hard sell either.

So the opening of a MOFU page should do this:
- use the target keyword or a close natural variation in the first sentence
- answer the actual comparison/consideration question directly — do not delay it with scene-setting
- acknowledge the real trade-off honestly (cost, time, whether a free layer is enough first, provider differences) before pivoting to why Future Career School is a strong choice within that trade-off
- give the reader enough to trust the page as a genuine comparison, not an ad

Do not do this:
- open with a one-sided pitch that skips the honest comparison
- bury the direct answer to the comparison question below a wall of positioning copy
- claim there is no real trade-off when one exists (e.g. pretend cost is never a consideration)

Adapted examples for this project:
- weak opening (too BOFU, skips the comparison): `Future Career School offers the best career counselling in India.`
- weak opening (too TOFU, no business advantage): `Career counselling and career coaching are both ways to get career help.`
- stronger opening: `Career counselling and career coaching overlap in what they help with, but the real difference is how structured the decision support is and whether skill-building is part of it — here's how to tell which one actually fits what you need right now.`

Use this as opening logic, not mandatory copy.

---

## Write Like a Seasoned Human, Not an AI

A MOFU page lives or dies on sounding like a genuinely honest evaluation, not hedged AI prose — this
matters here as much as it does on informational content, maybe more, since the reader is actively
deciding whether to trust the comparison.

**Avoid these AI tells:**
- Throat-clearing and wrap-ups: "In today's world", "In conclusion", "Ultimately", "It's important to note", "When it comes to", "Let's dive in".
- Stacked connective filler: sentences starting with "Moreover", "Furthermore", "Additionally", "That being said".
- Hedging claims you could state plainly ("may", "might", "can sometimes", "in many cases").
- Uniform rhythm — every paragraph the same length, every sentence mid-length.
- Hollow symmetry: forced "not only… but also", rule-of-three lists for their own sake, both-sides paragraphs that commit to nothing.
- Restating the H2 as the first sentence of the section; summary paragraphs that just recap what you already said.

**Do this instead:**
- Take a position. Say what actually matters in this comparison and what doesn't, with the reason.
- Lead with the specific, not the general: a real number, a named criterion, a concrete trade-off beats "there are many factors to consider".
- Cut filler intensifiers ("very", "really", "truly", "highly") and most adverbs; prefer plain, direct verbs.
- Write to one real reader weighing this decision, not to "users" or "buyers".
- If a sentence could sit unchanged on a competitor's comparison page, rewrite it until it couldn't.

---

## CTA System (Lighter Than BOFU, Stronger Than Blog)

MOFU CTA discipline sits between the blog prompt (one CTA, informational tone) and the BOFU prompt
(4–6 conversion moments, direct-payment hero CTA). Apply it deliberately:

- **No direct-payment hero CTA.** The hero/opening should not push straight to a Razorpay link the way a BOFU hero can. The reader is still deciding.
- **One primary CTA type across the page:** route to the parent guidance/counselling page, the relevant BOFU sibling, or `#plans` on the parent/sibling page if the page already covers pricing — not a bare payment link. Guidance/counselling must visually dominate assessment links on MOFU pages.
- **2–3 contextual CTA moments in the body** at natural decision points (after the comparison table, after the cost breakdown, after addressing "is it worth it") — not stacked at the top.
- **One small assessments mention is allowed** only as a lower-pressure supporting check for readers who are not ready to commit yet. Do not make assessment the gold/pulsing CTA, do not say the normal path must start with assessments, and do not let it compete visually with guidance/counselling.
- **Closing CTA should feel like a natural conclusion to the comparison**, not a hard pitch: something like "Once you know which fits your situation, here's how to start" rather than a countdown-timer style push.

Approved CTA destinations (reuse from `src/config/bofu.ts` — do not invent new ones):
- parent guidance page: `https://futurecareerschool.com/services/career-counselling-and-career-guidance/`
- relevant BOFU sibling pages (career-guidance, career-counselling, student/professional guidance pages)
- assessments hub: `https://futurecareerschool.com/services/assessments/`
- plan-jump links: `<destination>#plans` when the linked page has the shared plans section

Do not link directly to a Razorpay payment link from a MOFU page. Route through the relevant BOFU
page (or its `#plans` anchor) so the reader sees the full offer before paying.

---

## Assessment Mention Rules

Same restraint as BOFU non-assessment pages: one contextual mention is fine, framed as a genuine
lower-pressure option for someone still deciding — not a bait-and-switch hero CTA. If the MOFU keyword
is itself assessment/cost-of-assessment intent, read `ASSESSMENT_PAGE_PROMPT.md` instead of this file.

---

## Required MOFU Ingredients

Do not force every MOFU page into one rigid skeleton. Choose the right order for the keyword. The
page should usually include:

- a direct first-screen answer to the comparison/consideration question, in natural language
- **an answer-first summary block (hard rule):** a short `key takeaways` / "the honest short version"
  box immediately after the opening framing, before jump navigation, routine internal links, or CTAs.
  2-3 tight sentences is ideal; short bullets are acceptable only when they still function as a
  compact answer (main verdict, the real trade-off, the decision filter) — not as a table of contents
  and not as a restatement of section headings. This is what a skimming reader or an AI answer-engine
  summary will actually lift, so it needs to carry the real answer, not tease it.
- an honest breakdown of the real trade-off (cost, format, provider type, effort, or fit)
- the comparison itself — using a comparison grid/table, not buried in paragraphs
- Future Career School's relevant advantage woven into that comparison (see messaging bank above)
- one honest acknowledgment of when the free layer (assessments/resources) may be enough on its own
- client-relevant objections or doubts specific to this comparison (not generic)
- FAQ only when it adds real decision value to this specific comparison
- a closing section that makes the next step obvious without a hard sell

Not every page needs the same section names, order, or comparison treatment. Write the most useful
page for the intent instead of copying a template blindly.

---

## Client-Facing Copy Rules (Non-Negotiable)

Same rules as the BOFU and blog prompts — public copy must speak to the visitor, not the developer,
editor, prompt, or business owner.

**Avoid:** `use this page when...`, `hub page`, `support page`, `this page is for...`, `keyword intent`,
`high-intent`, `buyer`, `indexable`, `noindex`, `SEO-compatible`, route instructions, architecture
commentary, or workflow notes in visible copy.

**Especially avoid on MOFU pages:** language that reveals the page was built to intercept comparison
searches, e.g. `this page compares X for people searching Y` or `we built this page to address the
X vs Y query`. Write the comparison itself, not commentary about why the comparison page exists.

**Run `npm run check:public-copy` after build and fix any rendered-copy failures before shipping.**

---

## On-Page SEO and Technical Rules (MOFU)

- The keyword is provided by the user directly. Use it as the single primary keyword.
- One H1 only. Lead with the keyword when it reads naturally; do not force awkward phrasing.
- Include the target keyword naturally in the title, meta, H1, first sentence, and at least one H2.
- Keep title concise and click-worthy; meta description unique and under 160 characters.
- Use semantic secondary keywords naturally without stuffing.
- Keep core copy and internal links server-rendered.
- Ensure strong mobile readability and scannable layout — reuse the responsive table/card patterns from `BOFU_PAGE_PROMPT.md` (table-wrap + `data-label`, single-column collapse, no flat grey card grids).
- **Every table, regardless of column count:** wrap it in `.table-wrap` and add a `data-label="Column
  name"` attribute to every single `<td>`. Even a plain 2-column table can exceed 390px on real
  content and will silently fail to stack on a phone if any cell is missing its `data-label` — check
  every table, not just visually wide ones.
- **FAQ sections:** use the `.faq-accordion` `<details>`/`<summary>` pattern with the first item open
  by default (`open={index === 0}`). Never render FAQs as a long stack of always-open plain Q&A pairs.
- **Named frameworks:** if a page introduces a named multi-part framework or checklist (e.g. "The Four
  Checks"), use the exact same name every time it is referenced later on the same page — do not
  introduce it as "four things to check" and later call it something else without tying the two
  together.
- If a page includes real images (uncommon on this site's MOFU pages, which mostly use SVG/CSS), give
  every `<img>` descriptive, keyword-relevant alt text and a descriptive filename — not generic
  filenames or empty alt text.
- Keep evergreen pages free from calendar-year framing unless intentionally date-bound.

---

## Schema Rules for MOFU

Use JSON-LD as relevant:
- `Article` (primary schema for MOFU comparison/consideration pages — NOT `Service`, because the intent is still "deciding," not "buying")
- `BreadcrumbList`
- `FAQPage` when a real FAQ section exists

If a fees/cost-intent MOFU page is functioning as a near-BOFU bridge page (the reader is very close to
converting), `FAQPage + BreadcrumbList` without `Article` is also acceptable — but do not use `Service`
schema on a MOFU page. Reserve `Service` for the BOFU pages themselves.

---

## Internal Linking Rules

### Upward flow
Every MOFU page links back to its parent guidance hub:
- `/services/career-counselling-and-career-guidance/career-counselling-vs-career-coaching/` -> `/services/career-counselling-and-career-guidance/`

### Lateral flow
MOFU pages should link to the specific BOFU sibling(s) relevant to the comparison outcome — e.g. a
"career counselling vs career coaching" page can link to both `/career-counselling/` and
`/career-guidance/` children once the comparison is resolved.

### Downward/contextual flow
Link to `/services/assessments/` when the free-layer option is genuinely relevant to the comparison.

### Breadcrumb Rules
Breadcrumbs must match the actual URL hierarchy, e.g.
`Home > Services > Career Counselling and Career Guidance > Career Counselling vs Career Coaching`.

---

## Anti-Doorway Rules

MOFU pages are still subject to the same doorway-prevention discipline as BOFU and blog content.

- **Every MOFU page must contain genuinely unique, keyword-specific comparison content** — not a
  reshuffled version of the BOFU parent page's copy with a table added on top.
- Do not publish near-duplicate MOFU pages for trivially different phrasings of the same comparison
  (e.g. "career counselling vs career coaching" and "career coaching vs career counselling" are the
  same page — do not create both).
- If a "fees" or "cost" MOFU page and a BOFU sibling page would end up saying the same thing, the MOFU
  page should go deeper on the value-for-cost reasoning and honest trade-offs; the BOFU page should stay
  focused on converting someone who has already decided.
- Minimum ~1,000+ words of genuinely useful comparison content; depth over padding — do not bloat a
  page to hit a word count.

**Minimum uniqueness bar:** at least 30% of a MOFU page's content (the comparison angle, the specific
objections it resolves, the value-for-cost reasoning) must be original to that exact comparison and not
swappable into the nearest sibling MOFU page without losing relevance. This mirrors the 30% floor used
for blog and BOFU pages.

**Red flags — do not publish if any of these are true:**
- the page's comparison table/rows are 70%+ identical to another MOFU page's rows with only the labels changed
- the objections-handled section could be pasted onto a different comparison page unchanged
- the value-for-cost reasoning is generic ("it's worth it because quality matters") rather than specific to this comparison
- the page exists only to capture a reordered phrasing of an already-published comparison

Once there are 8+ live MOFU pages, before publishing a new one, skim the nearest existing MOFU sibling
side by side and confirm the new page's comparison angle, objections, and value-for-cost reasoning are
genuinely distinct — not just re-labeled.

---

## Completion Checklist

Before marking a MOFU page complete:

- route nests under the correct BOFU parent, not `/blog/`
- one H1 only, keyword-first when it reads naturally
- the page honestly answers the comparison/consideration question — it does not read as one-sided
- Future Career School's advantage is woven into the comparison itself, not just the CTA
- no direct-payment hero CTA; CTAs route through the parent/sibling BOFU page or `#plans`
- 2-3 contextual CTA moments placed after real decision-support sections, not stacked at the top
- pricing (if mentioned) matches the approved numbers exactly
- schema is `Article` (+ `FAQPage` if real FAQs exist) + `BreadcrumbList` — not `Service`
- internal links: up to parent hub, across to the relevant BOFU sibling(s), down to assessments if relevant
- no internal planning or developer voice leaks into public content
- page is mobile-readable and scannable
- build passes
- `npm run check:public-copy` passes
