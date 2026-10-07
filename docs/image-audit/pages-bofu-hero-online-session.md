# Image audit — service/other pages: bofu-hero-online-session

26 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/career-coach-near-me/

**H1:** Career coach near me for practical clarity, not generic advice  
**Type:** bofu · **Search priority:** P2 (0 clicks, 28 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
7. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-holistic-framework.webp` | 98% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-online-session.webp` is shared by 26 pages): documentary photograph, natural light. Top-down desk view with hands in frame of an Indian student or adult at a home desk, a family dining table in the evening. Props: notebooks, a laptop and printed course or job information. File `career-coach-near-me-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Career coach near me for practical clarity, not generic advice”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-coach-near-me-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: If you are searching for a career coach near me, the real answer is not who sits closest to you.
- On-image text (about 25-40 words, shortened from the page; no new claims): What makes this more useful than a generic near me search / Common objections before starting / What career coach near me should really mean before you decide / When a career coach becomes useful / What strong guidance should give you
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coach near me for practical…”: What makes this more useful than…; Common objections before…
- Title attribute: At a glance: Career coach near me for practical clarity, not generic…
- Caption (and keep the same point in HTML text): If you are searching for a career coach near me, the real answer is not who sits closest to you.
**V2 — Chronological timeline** (place after the section “When a career coach becomes useful”)
- File: `career-coach-near-me-chronological-career-coach-becomes-useful.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career coach becomes useful when you need clearer direction before you waste more time, money, or effort.
- On-image text (about 25-40 words, shortened from the page; no new claims): This is for you if / This is not for you if / You are confused about direction and need a practical next step. / Your situation does not fit one narrow label and you need a practical answer that can… / You are comparing local, online, and generic counselling options and want a clearer… / You want skill-first direction, proof of work, and a next move you can actually use. / You want a guaranteed job outcome.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When a career coach becomes useful”: This is for you if; This is not for you if; You are confused about direction…
- Title attribute: When a career coach becomes useful
- Caption (and keep the same point in HTML text): A career coach becomes useful when you need clearer direction before you waste more time, money, or effort.
**V3 — Decision tree** (place after the section “What strong guidance should give you”)
- File: `career-coach-near-me-decision-strong-guidance-should-give.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger value is not a nearby title alone.
- On-image text (about 25-40 words, shortened from the page; no new claims): Practical clarity and profile mapping / Practical path design / Proof of work and income-growth direction / Initial Psychometric Assessment and Career Counseling / Profile and stage mapping before major decisions / Direction clarity based on fit, market reality, and risk / A practical next step instead of generic advice
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What strong guidance should give you”: Practical clarity and profile…; Practical path design; Proof of work and income-growth…
- Title attribute: What strong guidance should give you
- Caption (and keep the same point in HTML text): The stronger value is not a nearby title alone.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “What to compare after the first near-me filter”)
- File: `career-coach-near-me-asymmetrical-compare-after-first-near.webp` · 1600×1000 WebP under 200 KB
- Teaches: Once distance stops being the main filter, the comparison should become more practical and more demanding.
- On-image text (about 25-40 words, shortened from the page; no new claims): Compare decision quality / Compare growth direction / Does the process improve trade-offs around path, skill, and risk? / Does it help you avoid expensive wrong turns before they compound? / Does it give you a practical next move instead of broad motivation? / Does it make the next commitment clearer and safer? / Does it push higher-value skills instead of low-growth default paths?
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What to compare after the first near-me filter”: Compare decision quality; Compare growth direction; Does the…
- Title attribute: What to compare after the first near-me filter
- Caption (and keep the same point in HTML text): Once distance stops being the main filter, the comparison should become more practical and more demanding.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-session/

**H1:** Career counselling session built around one decision, not a generic conversation  
**Type:** bofu · **Search priority:** P2 (2 clicks, 33 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-career-plan.webp` has no title attribute and no caption.
7. Context visual reuse: `context-career-plan.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 98% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-career-plan.webp` | 98% | lazy | A career plan visual showing now, next, proof… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-online-session.webp` is shared by 26 pages): documentary photograph, natural light. Over-the-shoulder shot of an Indian student or adult at a home desk, a classroom desk after hours. Props: notebooks, a laptop and printed course or job information. File `career-counselling-session-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Career counselling session built around one decision, not a generic…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-session-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career counselling session with Future Career School begins as a structured one-on-one consultation, not a…
- On-image text (about 25-40 words, shortened from the page; no new claims): What makes a career counselling session different from a generic call / What a career counselling session should actually help you resolve / One-on-one or group: which career counselling session fits your stage / How the one-on-one career counselling session moves the decision… / What to keep ready before your career counselling consultation
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling session built…”: What makes a career counselling…; What a career counselling…
- Title attribute: At a glance: Career counselling session built around one decision…
- Caption (and keep the same point in HTML text): A career counselling session with Future Career School begins as a structured one-on-one consultation, not a shared script or a group…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “What makes a career counselling session different from a generic call”)
- File: `career-counselling-session-asymmetrical-makes-career-counselling-session.webp` · 1600×1000 WebP under 200 KB
- Teaches: The format matters because it changes how fast you move toward a high-value skill portfolio and the decisions…
- On-image text (about 25-40 words, shortened from the page; no new claims): A one-on-one career counselling session, not a group webinar / A structured consultation, not a loose chat / A session you can prepare for and act on
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What makes a career counselling session different…”: A one-on-one career counselling…; A structured consultation…
- Title attribute: What makes a career counselling session different from a generic call
- Caption (and keep the same point in HTML text): The format matters because it changes how fast you move toward a high-value skill portfolio and the decisions that unlock high income…
**V3 — Decision tree** (place after the section “What a career counselling session should actually help you resolve”)
- File: `career-counselling-session-decision-career-counselling-session-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: A one-on-one consultation is not meant to be a pleasant chat.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which path deserves your next serious phase of effort / What stays backup and what gets dropped / Which skill direction starts now, not later / What the very next step is after the call ends
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a career counselling session should actually…”: Which path deserves your next…; What stays backup and what gets…; Which skill direction…
- Title attribute: What a career counselling session should actually help you resolve
- Caption (and keep the same point in HTML text): A one-on-one consultation is not meant to be a pleasant chat.
**V4 — Chronological timeline** (place after the section “One-on-one or group: which career counselling session fits your stage”)
- File: `career-counselling-session-chronological-one-one-group-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: Both formats exist for a reason.
- On-image text (about 25-40 words, shortened from the page; no new claims): One-on-one career counselling session / Group career counselling sessions / Built entirely around your real situation, not a shared script. / Useful for a first serious decision or a single urgent question. / Ends with a specific next step, not general encouragement. / Built for students who need more than one high-leverage decision across the year. / Keeps skill choices, proof of work, and financial-freedom planning on track over time.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “One-on-one or group: which career counselling…”: One-on-one career counselling…; Group career counselling sessions; Built entirely…
- Title attribute: One-on-one or group: which career counselling session fits your stage
- Caption (and keep the same point in HTML text): Both formats exist for a reason.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-development-workshop-online/

**H1:** Career development workshop online for building a high-value skill direction, not just talking about one  
**Type:** bofu · **Search priority:** P2 (1 clicks, 7 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-career-plan.webp`.
7. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
8. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-holistic-framework.webp` | 98% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-online-session.webp` is shared by 26 pages): documentary photograph, natural light. Over-the-shoulder shot of an Indian student or adult at a home desk, a classroom desk after hours. Props: notebooks, a laptop and printed course or job information. File `career-development-workshop-online-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Career development workshop online for building a high-value skill…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-development-workshop-online-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School runs a career development workshop online around what you actually build: a high-value…
- On-image text (about 25-40 words, shortened from the page; no new claims): What a career development workshop online should actually mean / How the session moves you from skill gap to skill direction / How career development fits where you are building from right now / If career advice alone has not turned into an actual skill yet
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career development workshop online…”: What a career development…; How the session moves you from…; How…
- Title attribute: At a glance: Career development workshop online for building a…
- Caption (and keep the same point in HTML text): Future Career School runs a career development workshop online around what you actually build: a high-value skill direction, a first piece…
**V2 — Linear process chain or roadmap** (place after the section “What a career development workshop online should help you build”)
- File: `career-development-workshop-online-linear-career-development-workshop-online.webp` · 1600×1000 WebP under 200 KB
- Teaches: The goal is not another list of career options.
- On-image text (about 25-40 words, shortened from the page; no new claims): A high-value skill direction, not just a role label / A first piece of proof of work / A growth path, not a one-time answer / A route toward earlier financial freedom
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “What a career development workshop online should…”: A high-value skill direction, not…; A first piece of proof of work; A…
- Title attribute: What a career development workshop online should help you build
- Caption (and keep the same point in HTML text): The goal is not another list of career options.
**V3 — Linear process chain or roadmap** (place after the section “How career development fits where you are building from right now”)
- File: `career-development-workshop-online-linear-career-development-fits-where.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students & Freshers Build the skill portfolio before a stream or degree choice locks you in A career…
- On-image text (about 25-40 words, shortened from the page; no new claims): Build the skill portfolio before a stream or degree choice locks you… / Add high-value skills before stagnation or AI pressure sets the… / Students & Freshers Build the skill portfolio before a stream or degree choice… / After the first 1-on-1, ongoing small-group sessions across the year keep skill… / Working Professionals Add high-value skills before stagnation or AI pressure…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “How career development fits where you are…”: Build the skill portfolio before…; Add high-value skills before…; Students &…
- Title attribute: How career development fits where you are building from right now
- Caption (and keep the same point in HTML text): Students & Freshers Build the skill portfolio before a stream or degree choice locks you in A career development workshop online matters…
**V4 — Skill map** (place after the section “If career advice alone has not turned into an actual skill yet”)
- File: `career-development-workshop-online-skill-career-advice-alone-has.webp` · 1600×1000 WebP under 200 KB
- Teaches: Advice without a build plan rarely changes your market value.
- On-image text (about 25-40 words, shortened from the page; no new claims): Isn’t "career development" just another word for career advice? / I have already picked a skill to learn. Why would I need this? / The session connects your profile to a specific, high-value skill direction. / You leave with a first concrete piece of proof of work to build on. / Skill choices are treated as a portfolio that compounds, not one isolated decision. / For students, development continues through the year instead of stopping after one… / One skill without proof of work rarely moves market value on its own.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Skill map for “If career advice alone has not turned into an…”: Isn’t "career development" just…; I have already picked a skill to…; The session connects your…
- Title attribute: If career advice alone has not turned into an actual skill yet
- Caption (and keep the same point in HTML text): Advice without a build plan rarely changes your market value.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-counselor/

**H1:** A career guidance counselor turns a confusing set of options into one workable next step  
**Type:** bofu · **Search priority:** P2 (0 clicks, 66 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
7. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 90% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 95% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-holistic-framework.webp` | 96% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-online-session.webp` is shared by 26 pages): documentary photograph, natural light. Top-down desk view with hands in frame of an Indian student or adult at a home desk, a classroom desk after hours. Props: notebooks, a laptop and printed course or job information. File `career-guidance-counselor-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “A career guidance counselor turns a confusing set of options into one…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-counselor-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: What a career guidance counselor is supposed to do is straightforward — read your actual interests…
- On-image text (about 25-40 words, shortened from the page; no new claims): What a career guidance counselor actually does / What a real session looks like, concretely / Where a career guidance counselor is actually available / Red flags before you commit time or money / What actually changes once you're talking to the right counselor
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: A career guidance counselor turns a…”: What a career guidance counselor…; What a real session looks…
- Title attribute: At a glance: A career guidance counselor turns a confusing set of…
- Caption (and keep the same point in HTML text): What a career guidance counselor is supposed to do is straightforward — read your actual interests, strengths, and constraints, then apply…
**V2 — Self-assessment checklist** (place after the section “Where a career guidance counselor is actually available”)
- File: `career-guidance-counselor-self-where-career-guidance-counselor.webp` · 1600×1000 WebP under 200 KB
- Teaches: The role is delivered through a few different channels, and they are not interchangeable in terms of time…
- On-image text (about 25-40 words, shortened from the page; no new claims): Common ways to reach one / What to check regardless of channel / A school or college counselling cell — usually free, but shared across a large number of… / An independent private counselor — more focused time, at a real cost. / An online guidance platform — reachable from anywhere, with the same one-on-one depth as… / An employer-run program, for working professionals whose company offers one. / How much actual one-on-one time you get, not just access to a shared resource.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Where a career guidance counselor is actually…”: Common ways to reach one; What to check regardless of…; A school or college…
- Title attribute: Where a career guidance counselor is actually available
- Caption (and keep the same point in HTML text): The role is delivered through a few different channels, and they are not interchangeable in terms of time, cost, or how personal the…
**V3 — Mistakes versus smarter move panel** (place after the section “Red flags before you commit time or money”)
- File: `career-guidance-counselor-mistakes-red-flags-before-commit.webp` · 1600×1000 WebP under 200 KB
- Teaches: Signs the counselor is worth your time Answers questions about their own training and background with…
- On-image text (about 25-40 words, shortened from the page; no new claims): Signs the counselor is worth your time / Signs to slow down / Answers questions about their own training and background with specifics. / Explains how the assessment connects to the recommendation, not just the score. / Ends the conversation with something concrete to act on. / Is upfront about what one session cannot solve. / Deflects background questions to a general "our counselors are certified" line.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Mistakes versus smarter move panel for “Red flags before you commit time or money”: Signs the counselor is worth your…; Signs to slow down; Answers questions…
- Title attribute: Red flags before you commit time or money
- Caption (and keep the same point in HTML text): Signs the counselor is worth your time Answers questions about their own training and background with specifics.
**V4 — Comparison table** (place after the section “What it actually costs, stated plainly”)
- File: `career-guidance-counselor-comparison-actually-costs-stated-plainly.webp` · 1600×1000 WebP under 200 KB
- Teaches: A fair, upfront price is one of the easier things to check about a counselor or a platform.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Working professional… | Rs 3000 (limited-time…
- Numbers: Plan Price Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Working professional 1-on-1 session Rs 3000 (limited-time price, down from Rs 5000) See what a counselling session covers Compare plans and pricing
- Alt: Comparison table for “What it actually costs, stated plainly”: Plan | Price; Student 1-on-1 session | Rs 250…; Working professional… | Rs 3000…
- Title attribute: What it actually costs, stated plainly
- Caption (and keep the same point in HTML text): A fair, upfront price is one of the easier things to check about a counselor or a platform.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-online/

**H1:** Career guidance online for clearer decisions from anywhere in India  
**Type:** bofu · **Search priority:** P2 (0 clicks, 78 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-online-session.webp` has no title attribute and no caption.
7. Context visual reuse: `context-online-session.webp` appears on 6 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-online-session.webp` | 98% | lazy | An online guidance visual showing live… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-online-session.webp` is shared by 26 pages): documentary photograph, natural light. Candid side profile near a window of an Indian student or adult at a home desk, a quiet public library table. Props: notebooks, a laptop and printed course or job information. File `career-guidance-online-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Career guidance online for clearer decisions from anywhere in India”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-online-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career guidance online should give you the same strong, practical direction as any good in-person session: a…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career guidance online is the right call / What online career guidance should actually help you decide / How online career guidance works across India / What to keep ready before an online career guidance session / What the online guidance actually covers
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance online for clearer…”: When career guidance online is…; What online career guidance……
- Title attribute: At a glance: Career guidance online for clearer decisions from…
- Caption (and keep the same point in HTML text): Career guidance online should give you the same strong, practical direction as any good in-person session: a clearer route toward a…
**V2 — Chronological timeline** (place after the section “When career guidance online is the right call”)
- File: `career-guidance-online-chronological-career-guidance-online-right.webp` · 1600×1000 WebP under 200 KB
- Teaches: Online matters most when the decision is already serious and waiting for the right local option only delays a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Good local options are limited or unclear / The decision matters now and cannot wait / You want the decision quality, not the commute / You are comparing options that sit in different cities
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career guidance online is the right call”: Good local options are limited or…; The decision matters now and…; You want the…
- Title attribute: When career guidance online is the right call
- Caption (and keep the same point in HTML text): Online matters most when the decision is already serious and waiting for the right local option only delays a high-value skill portfolio…
**V3 — Decision tree** (place after the section “What online career guidance should actually help you decide”)
- File: `career-guidance-online-decision-online-career-guidance-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Path and skill direction Which path and high-value skill direction fits you best right now, based on fit…
- On-image text (about 25-40 words, shortened from the page; no new claims): Path and skill direction / Risk and wrong turns / Proof of work and positioning / Income-growth direction
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What online career guidance should actually help…”: Path and skill direction; Risk and wrong turns; Proof of work and positioning
- Title attribute: What online career guidance should actually help you decide
- Caption (and keep the same point in HTML text): 01 Path and skill direction Which path and high-value skill direction fits you best right now, based on fit, market reality, and risk.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before choosing online career guidance”)
- File: `career-guidance-online-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Does career guidance online actually work as well?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Does career guidance online actually work as well? / Yes. / Online career guidance works well because the real work is clear reasoning…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before choosing online…”: 01 Does career guidance online…; Yes.; Online career guidance works well…
- Title attribute: Questions people ask before choosing online career guidance
- Caption (and keep the same point in HTML text): 01 Does career guidance online actually work as well?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-session/

**H1:** Career guidance session for direction, skill priority, and a growth plan — not just one decision  
**Type:** bofu · **Search priority:** P2 (0 clicks, 25 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-career-plan.webp` has no title attribute and no caption.
7. Context visual reuse: `context-career-plan.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-career-plan.webp` | 98% | lazy | A career plan visual showing now, next, proof… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-online-session.webp` is shared by 26 pages): documentary photograph, natural light. Wide three-quarter shot of an Indian student or adult at a home desk, a school or college corridor bench. Props: notebooks, a laptop and printed course or job information. File `career-guidance-session-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Career guidance session for direction, skill priority, and a growth…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-session-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career guidance session with Future Career School looks at your path, your skill direction, and your growth…
- On-image text (about 25-40 words, shortened from the page; no new claims): What a career guidance session actually covers / Career guidance session, career counselling session, or career… / How a career guidance session moves from confusion to a priority order / What the guidance session draws on
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance session for…”: What a career guidance session…; Career guidance session, career…; How…
- Title attribute: At a glance: Career guidance session for direction, skill priority…
- Caption (and keep the same point in HTML text): A career guidance session with Future Career School looks at your path, your skill direction, and your growth together in one conversation…
**V2 — Framework cards** (place after the section “What a career guidance session actually covers”)
- File: `career-guidance-session-framework-career-guidance-session-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: The session is built to connect path, skill, and growth instead of treating them as separate questions…
- On-image text (about 25-40 words, shortened from the page; no new claims): The whole picture, not one narrowed question / Where your skill portfolio actually stands / A priority order, not a long options list / A growth logic you can keep using
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “What a career guidance session actually covers”: The whole picture, not one…; Where your skill portfolio…; A priority order, not a long…
- Title attribute: What a career guidance session actually covers
- Caption (and keep the same point in HTML text): The session is built to connect path, skill, and growth instead of treating them as separate questions answered on separate days.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Career guidance session, career counselling session, or career…”)
- File: `career-guidance-session-asymmetrical-career-guidance-session-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: All three are one-on-one and delivered online.
- On-image text (about 25-40 words, shortened from the page; no new claims): Career guidance session vs a career counselling session / Choose counselling when one decision is already narrowed and needs a close. / Choose guidance when path, skills, and growth all feel tangled together. / Both are one-on-one and delivered the same way — the difference is scope, not format. / Choose the planning session when you want a full multi-year map with milestones. / Choose the guidance session for direction and skill priority in one sitting.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Career guidance session, career counselling…”: Career guidance session vs a…; Choose counselling when one…; Choose…
- Title attribute: Career guidance session, career counselling session, or career…
- Caption (and keep the same point in HTML text): All three are one-on-one and delivered online.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before booking a career guidance session”)
- File: `career-guidance-session-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 What actually happens in a career guidance session?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 What actually happens in a career guidance session? / A career guidance session maps where you stand, then works through path, skill… / You leave with a ranked sense of what matters first, not just a single decision…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before booking a career…”: 01 What actually happens in a…; A career guidance session maps…; You leave with…
- Title attribute: Questions people ask before booking a career guidance session
- Caption (and keep the same point in HTML text): 01 What actually happens in a career guidance session?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-coach-online/

**H1:** Career coach online for execution and accountability, not just a decision  
**Type:** bofu · **Search priority:** P3 (0 clicks, 5 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-online-session.webp`.
7. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
8. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-coach-online-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career coach online should not stop at telling you what to do next.
- On-image text (about 25-40 words, shortened from the page; no new claims): When a career coach online is the right fit / How online career coaching works across India / What a career coach online should help you get right / What the coaching plan is built around / How online career coaching fits where you are right now
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career coach online for execution…”: When a career coach online is the…; How online career coaching…
- Title attribute: At a glance: Career coach online for execution and accountability…
- Caption (and keep the same point in HTML text): A career coach online should not stop at telling you what to do next.
**V2 — Chronological timeline** (place after the section “When a career coach online is the right fit”)
- File: `career-coach-online-chronological-career-coach-online-right.webp` · 1600×1000 WebP under 200 KB
- Teaches: Coaching earns its cost when the direction is already reasonably clear and the real problem is sticking to it.
- On-image text (about 25-40 words, shortened from the page; no new claims): You already have a direction but keep drifting off it / A counselling session gave you a decision, not a plan you stick to / You want someone tracking progress, not one call and silence / Location made a consistent in-person coaching rhythm hard to keep
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When a career coach online is the right fit”: You already have a direction but…; A counselling session gave you a…; You want…
- Title attribute: When a career coach online is the right fit
- Caption (and keep the same point in HTML text): Coaching earns its cost when the direction is already reasonably clear and the real problem is sticking to it.
**V3 — Linear process chain or roadmap** (place after the section “What the coaching plan is built around”)
- File: `career-coach-online-linear-coaching-plan-built-around.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career coach online should aim at a deliberate, high-value skill portfolio — the right skill mix, proof of…
- On-image text (about 25-40 words, shortened from the page; no new claims): The shift should feel clear before it feels big / Then the work should connect like a roadmap / A career coach online should aim at a deliberate, high-value skill portfolio —… / First the situation gets clearer.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “What the coaching plan is built around”: The shift should feel clear…; Then the work should connect like…; A career coach…
- Title attribute: What the coaching plan is built around
- Caption (and keep the same point in HTML text): A career coach online should aim at a deliberate, high-value skill portfolio — the right skill mix, proof of work, communication, and…
**V4 — Linear process chain or roadmap** (place after the section “Career Coach Online: Plans and Pricing”)
- File: `career-coach-online-linear-career-coach-online-plans.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Coaching Practical student career coaching before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Coaching / Working Professional Career Coaching / Students Student path Student Career Coaching Practical student career coaching… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Linear process chain or roadmap for “Career Coach Online: Plans and Pricing”: Student Career Coaching; Working Professional Career…; Students Student path…
- Title attribute: Career Coach Online: Plans and Pricing
- Caption (and keep the same point in HTML text): Students Student path Student Career Coaching Practical student career coaching before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-consultation/

**H1:** Career counselling consultation for people who want to talk before they commit to anything bigger  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
7. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-consultation-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career counselling consultation with Future Career School is a single, focused 1-on-1 conversation you can…
- On-image text (about 25-40 words, shortened from the page; no new claims): What a career counselling consultation is actually for / What actually happens on a career counselling consultation call / What to check before you trust any 'career counselling consultation'… / What a genuine consultation should still connect to / Why a single consultation can be the right first move, wherever you…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling consultation for…”: What a career counselling…; What actually happens on a career……
- Title attribute: At a glance: Career counselling consultation for people who want to…
- Caption (and keep the same point in HTML text): A career counselling consultation with Future Career School is a single, focused 1-on-1 conversation you can book without signing up for an…
**V2 — Framework cards** (place after the section “What a career counselling consultation is actually for”)
- File: `career-counselling-consultation-framework-career-counselling-consultation-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not every question needs a full program.
- On-image text (about 25-40 words, shortened from the page; no new claims): You have one specific question, not an open-ended overhaul / You are not ready to commit to a program, you just want a straight… / You want to test the guidance before trusting it with a bigger…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “What a career counselling consultation is…”: You have one specific question…; You are not ready to commit to a…; You want to test the…
- Title attribute: What a career counselling consultation is actually for
- Caption (and keep the same point in HTML text): Not every question needs a full program.
**V3 — Decision tree** (place after the section “What a genuine consultation should still connect to”)
- File: `career-counselling-consultation-decision-genuine-consultation-should-still.webp` · 1600×1000 WebP under 200 KB
- Teaches: Even one focused conversation should point toward the same practical work: high-leverage decisions, a…
- On-image text (about 25-40 words, shortened from the page; no new claims): The shift should feel clear before it feels big / Then the work should connect like a roadmap / Even one focused conversation should point toward the same practical work… / First the situation gets clearer.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a genuine consultation should still connect…”: The shift should feel clear…; Then the work should connect like…; Even one focused…
- Title attribute: What a genuine consultation should still connect to
- Caption (and keep the same point in HTML text): Even one focused conversation should point toward the same practical work: high-leverage decisions, a high-value skill portfolio unlocking…
**V4 — Self-assessment checklist** (place after the section “Questions people ask before booking a career counselling consultation”)
- File: `career-counselling-consultation-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Is a career counselling consultation the same as a career counselling session?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Is a career counselling consultation the same as a career counselling… / They use the same underlying one-on-one conversation with a counsellor. / The difference is framing: a consultation is how you book that first…
- Numbers: It is a real conversation with a counsellor, currently priced at Rs 250 for students and Rs 3000 for working professionals for a limited time.
- Alt: Self-assessment checklist for “Questions people ask before booking a career…”: 01 Is a career counselling…; They use the same underlying…; The difference is…
- Title attribute: Questions people ask before booking a career counselling consultation
- Caption (and keep the same point in HTML text): 01 Is a career counselling consultation the same as a career counselling session?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-online/

**H1:** Career counselling online for higher-value career decisions from anywhere in India  
**Type:** bofu · **Search priority:** P3 (0 clicks, 22 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-online-session.webp` has no title attribute and no caption.
7. Context visual reuse: `context-online-session.webp` appears on 6 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 98% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-online-session.webp` | 98% | lazy | An online guidance visual showing live… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-online-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling online should help you get clear before a bigger wrong turn gets more expensive.
- On-image text (about 25-40 words, shortened from the page; no new claims): When career counselling online becomes the smarter option / What online career counselling should actually help you resolve / How online career counselling should move the decision forward / What to keep ready before online career counselling / What should feel clearer by the end of a good online career…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling online for…”: When career counselling online…; What online career counselling…; How…
- Title attribute: At a glance: Career counselling online for higher-value career…
- Caption (and keep the same point in HTML text): Career counselling online should help you get clear before a bigger wrong turn gets more expensive.
**V2 — Chronological timeline** (place after the section “When career counselling online becomes the smarter option”)
- File: `career-counselling-online-chronological-career-counselling-online-becomes.webp` · 1600×1000 WebP under 200 KB
- Teaches: Online matters most when the decision already feels serious and waiting for the right local option only adds…
- On-image text (about 25-40 words, shortened from the page; no new claims): You need clarity without waiting for a local option / The next move feels personal, expensive, or hard to reverse / More opinions are not creating more clarity / You want better reasoning, not city dependence
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career counselling online becomes the…”: You need clarity without waiting…; The next move feels personal…; More opinions are…
- Title attribute: When career counselling online becomes the smarter option
- Caption (and keep the same point in HTML text): Online matters most when the decision already feels serious and waiting for the right local option only adds more delay, pressure, or…
**V3 — Decision tree** (place after the section “What online career counselling should actually help you resolve”)
- File: `career-counselling-online-decision-online-career-counselling-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: A generic conversation will not cut it here.
- On-image text (about 25-40 words, shortened from the page; no new claims): Which route deserves serious effort now / What should stay as backup and what should be dropped / Which skill direction should start early / How proof of work and income growth fit the choice
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What online career counselling should actually…”: Which route deserves serious…; What should stay as backup and…; Which skill direction…
- Title attribute: What online career counselling should actually help you resolve
- Caption (and keep the same point in HTML text): A generic conversation will not cut it here.
**V4 — Decision tree** (place after the section “How online career counselling should move the decision forward”)
- File: `career-counselling-online-decision-online-career-counselling-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The format is online, but the work should still feel practical, specific, and useful enough to change the…
- On-image text (about 25-40 words, shortened from the page; no new claims): Bring the real question under pressure / Compare fit, trade-offs, and constraints together / Leave with a tighter next move
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “How online career counselling should move the…”: Bring the real question under…; Compare fit, trade-offs, and…; Leave with a tighter next…
- Title attribute: How online career counselling should move the decision forward
- Caption (and keep the same point in HTML text): The format is online, but the work should still feel practical, specific, and useful enough to change the quality of the next move.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-package/

**H1:** Career counselling package: what's actually included, and which structure fits you  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-pricing-value.webp` has no title attribute and no caption.
7. Context visual reuse: `context-pricing-value.webp` appears on 5 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 95% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-pricing-value.webp` | 96% | lazy | A pricing visual showing clarity, a skill plan… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-package-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career counselling package here comes down to two real structures, not a vague bundle: a single 1-on-1…
- On-image text (about 25-40 words, shortened from the page; no new claims): What's actually inside a career counselling package here / What's not bundled into either structure / What the composition actually changes / Who each package structure actually suits / Common doubts about a career counselling package
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling package: what's…”: What's actually inside a career…; What's not bundled into…
- Title attribute: At a glance: Career counselling package: what's actually included…
- Caption (and keep the same point in HTML text): A career counselling package here comes down to two real structures, not a vague bundle: a single 1-on-1 session for one specific decision…
**V2 — Chronological timeline** (place after the section “What's actually inside a career counselling package here”)
- File: `career-counselling-package-chronological-actually-inside-career-counselling.webp` · 1600×1000 WebP under 200 KB
- Teaches: The word "package" should describe a specific set of contents, not a marketing label.
- On-image text (about 25-40 words, shortened from the page; no new claims): Single 1-on-1 session vs the continuous-guidance package / The word "package" should describe a specific set of contents, not a marketing… / Here is exactly what sits inside each structure.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Chronological timeline for “What's actually inside a career counselling…”: Single 1-on-1 session vs the…; The word "package" should…; Here is exactly what sits…
- Title attribute: What's actually inside a career counselling package here
- Caption (and keep the same point in HTML text): The word "package" should describe a specific set of contents, not a marketing label.
**V3 — Chronological timeline** (place after the section “Who each package structure actually suits”)
- File: `career-counselling-package-chronological-who-each-package-structure.webp` · 1600×1000 WebP under 200 KB
- Teaches: The single 1-on-1 session tends to fit if There is one specific decision that needs resolving, not an ongoing…
- On-image text (about 25-40 words, shortened from the page; no new claims): The single 1-on-1 session tends to fit if / The continuous-guidance package tends to fit if / There is one specific decision that needs resolving, not an ongoing series of them. / You want to test the format before committing to anything bigger. / You are a working professional, since the continuation here is currently structured for… / You are a student expecting more than one decision across the year, stream, courses… / You want skill direction revisited as marks, opportunities, or the market change, not…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Chronological timeline for “Who each package structure actually suits”: The single 1-on-1 session tends…; The continuous-guidance package…; There is one…
- Title attribute: Who each package structure actually suits
- Caption (and keep the same point in HTML text): The single 1-on-1 session tends to fit if There is one specific decision that needs resolving, not an ongoing series of them.
**V4 — Linear process chain or roadmap** (place after the section “How to decide, without guessing”)
- File: `career-counselling-package-linear-decide-without-guessing.webp` · 1600×1000 WebP under 200 KB
- Teaches: Once the structures are clear, the choice usually comes down to one honest question: is there one decision in…
- On-image text (about 25-40 words, shortened from the page; no new claims): Once the structures are clear, the choice usually comes down to one honest… / Answer that first, then look at the plans below to see the exact composition… / Either way, the structure is a means to an end: a high-value skill portfolio…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Linear process chain or roadmap for “How to decide, without guessing”: Once the structures are clear…; Answer that first, then look at…; Either way, the…
- Title attribute: How to decide, without guessing
- Caption (and keep the same point in HTML text): Once the structures are clear, the choice usually comes down to one honest question: is there one decision in front of you right now, or a…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-program/

**H1:** Career counselling program: the stage-by-stage structure, not the price tag  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 96% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-career-plan.webp`.
7. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
8. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 92% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 96% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-holistic-framework.webp` | 96% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-program-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career counselling program here is the same guidance service walked through as a sequence: discovery and…
- On-image text (about 25-40 words, shortened from the page; no new claims): What each stage of the program actually does / Program, package, fees, and subscription are not the same question / What a real sequence changes versus a rushed verdict / Who actually needs the full six-stage sequence / Common doubts about the program structure
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling program: the…”: What each stage of the program…; Program, package, fees, and…; What…
- Title attribute: At a glance: Career counselling program: the stage-by-stage structure…
- Caption (and keep the same point in HTML text): A career counselling program here is the same guidance service walked through as a sequence: discovery and assessment, aptitude and…
**V2 — Chronological timeline** (place after the section “What each stage of the program actually does”)
- File: `career-counselling-program-chronological-each-stage-program-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: A sequence is only useful if each stage genuinely depends on the one before it.
- On-image text (about 25-40 words, shortened from the page; no new claims): Discovery and assessment / Aptitude and interest mapping / Options exploration / Decision-narrowing / Action-planning
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What each stage of the program actually does”: Discovery and assessment; Aptitude and interest mapping; Options exploration
- Title attribute: What each stage of the program actually does
- Caption (and keep the same point in HTML text): A sequence is only useful if each stage genuinely depends on the one before it.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “What a real sequence changes versus a rushed verdict”)
- File: `career-counselling-program-asymmetrical-real-sequence-changes-versus.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not every provider walks through every stage before handing over an answer.
- On-image text (about 25-40 words, shortened from the page; no new claims): Not every provider walks through every stage before handing over an answer. / This is the difference that matters once a decision has to hold up past the… / Others Shift Future Career School Others A price list with no process behind it…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What a real sequence changes versus a rushed…”: Not every provider walks through…; This is the difference that……
- Title attribute: What a real sequence changes versus a rushed verdict
- Caption (and keep the same point in HTML text): Not every provider walks through every stage before handing over an answer.
**V4 — Chronological timeline** (place after the section “Who actually needs the full six-stage sequence”)
- File: `career-counselling-program-chronological-who-actually-needs-full.webp` · 1600×1000 WebP under 200 KB
- Teaches: The full sequence tends to fit if More than one option is still genuinely open, a stream, a course, or a…
- On-image text (about 25-40 words, shortened from the page; no new claims): The full sequence tends to fit if / A shorter path through the stages tends to fit if / More than one option is still genuinely open, a stream, a course, or a skill path, and… / Family, financial, or timing pressure makes the decision expensive to get wrong. / You want the plan revisited later through the follow-up stage, not settled once and left… / The mapping and exploration work is already largely done, and one specific choice needs… / A single focused 1-on-1 session can move through discovery, mapping, and narrowing in one…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “Who actually needs the full six-stage sequence”: The full sequence tends to fit if; A shorter path through the stages…; More than…
- Title attribute: Who actually needs the full six-stage sequence
- Caption (and keep the same point in HTML text): The full sequence tends to fit if More than one option is still genuinely open, a stream, a course, or a skill path, and none of them has…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-service/

**H1:** Career counselling service built around what you get, not just who you talk to  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
7. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-service-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School runs a career counselling service for students, freshers, and working professionals who…
- On-image text (about 25-40 words, shortened from the page; no new claims): How the career counselling service works, start to finish / What is included in the career counselling service / How this career counselling service compares to generic options / What separates a credible provider from a risky one / How the service fits where you are right now
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling service built…”: How the career counselling…; What is included in the career…; How…
- Title attribute: At a glance: Career counselling service built around what you get…
- Caption (and keep the same point in HTML text): Future Career School runs a career counselling service for students, freshers, and working professionals who want to know exactly what a…
**V2 — Self-assessment checklist** (place after the section “What is included in the career counselling service”)
- File: `career-counselling-service-self-included-career-counselling-service.webp` · 1600×1000 WebP under 200 KB
- Teaches: Before you pay for any career counselling service, know exactly what you are getting.
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity and mapping included in every session / Skill and path direction included in the plan / Growth support included beyond the first conversation / Profile, strengths, and work-style mapping before any recommendation is made / A clear decision frame in place of open-ended conversation / Direction weighed against fit, market reality, and risk, not a one-size checklist / A shortlist of high-value skill directions matched to your profile
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “What is included in the career counselling service”: Clarity and mapping included in…; Skill and path direction included……
- Title attribute: What is included in the career counselling service
- Caption (and keep the same point in HTML text): Before you pay for any career counselling service, know exactly what you are getting.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “How this career counselling service compares to generic options”)
- File: `career-counselling-service-asymmetrical-career-counselling-service-compares.webp` · 1600×1000 WebP under 200 KB
- Teaches: The difference is not the label.
- On-image text (about 25-40 words, shortened from the page; no new claims): The difference is not the label. / It is whether the service gives you higher-value skill direction, proof of… / Others Shift Future Career School Others A service defined only by who you talk…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this career counselling service compares to…”: The difference is not the label.; It is whether the service…
- Title attribute: How this career counselling service compares to generic options
- Caption (and keep the same point in HTML text): The difference is not the label.
**V4 — Self-assessment checklist** (place after the section “Questions people ask before booking this career counselling service”)
- File: `career-counselling-service-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 What exactly is included in this career counselling service?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 What exactly is included in this career counselling service? / The service starts with profile and work-style mapping, moves into… / Students who continue past the first session move into ongoing small-group…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before booking this career…”: 01 What exactly is included in…; The service starts with profile…; Students…
- Title attribute: Questions people ask before booking this career counselling service
- Caption (and keep the same point in HTML text): 01 What exactly is included in this career counselling service?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-subscription/

**H1:** Career counselling subscription: is there one, and what actually replaces it  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-pricing-value.webp` has no title attribute and no caption.
7. Context visual reuse: `context-pricing-value.webp` appears on 5 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 95% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-pricing-value.webp` | 96% | lazy | A pricing visual showing clarity, a skill plan… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-subscription-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: There is no career counselling subscription here in the recurring-billing sense of the word — no monthly card…
- On-image text (about 25-40 words, shortened from the page; no new claims): What people usually mean by a "subscription" model / Does Future Career School sell career counselling as a subscription / Subscription model vs a one-time package: the honest trade-off / What the continuous-guidance package is actually built to deliver / How the continuous-guidance package mirrors ongoing support without…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling subscription: is…”: What people usually mean by a…; Does Future Career School…
- Title attribute: At a glance: Career counselling subscription: is there one, and what…
- Caption (and keep the same point in HTML text): There is no career counselling subscription here in the recurring-billing sense of the word — no monthly card charge that keeps renewing…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Subscription model vs a one-time package: the honest trade-off”)
- File: `career-counselling-subscription-asymmetrical-subscription-model-one-time.webp` · 1600×1000 WebP under 200 KB
- Teaches: Neither model is universally better.
- On-image text (about 25-40 words, shortened from the page; no new claims): Where a real subscription model wins / Where the continuous-guidance package wins / Lower cost to try something for just a month. / Easy to walk away without a year-long commitment. / Fits well when the need is light, ongoing access rather than a structured plan. / No recurring charge running in the background to remember to cancel. / The full year of support is already paid for once you commit — nothing lapses if a month…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Asymmetrical pros-and-cons comparison for “Subscription model vs a one-time package: the…”: Where a real subscription model…; Where the continuous-guidance……
- Title attribute: Subscription model vs a one-time package: the honest trade-off
- Caption (and keep the same point in HTML text): Neither model is universally better.
**V3 — Chronological timeline** (place after the section “What the continuous-guidance package is actually built to deliver”)
- File: `career-counselling-subscription-chronological-continuous-guidance-package-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not every provider puts the same thing behind ongoing support.
- On-image text (about 25-40 words, shortened from the page; no new claims): Not every provider puts the same thing behind ongoing support. / This is what changes when the year-long relationship is structured rather than… / Others Shift Future Career School Others A recurring plan that auto-renews…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Chronological timeline for “What the continuous-guidance package is actually…”: Not every provider puts the same…; This is what changes when the…; Others Shift…
- Title attribute: What the continuous-guidance package is actually built to deliver
- Caption (and keep the same point in HTML text): Not every provider puts the same thing behind ongoing support.
**V4 — Linear process chain or roadmap** (place after the section “How to decide, without a hard sell”)
- File: `career-counselling-subscription-linear-decide-without-hard-sell.webp` · 1600×1000 WebP under 200 KB
- Teaches: A single 1-on-1 session probably fits if There is one specific decision that needs resolving now.
- On-image text (about 25-40 words, shortened from the page; no new claims): A single 1-on-1 session probably fits if / The continuous-guidance package probably fits if / There is one specific decision that needs resolving now. / You are not looking for a standing relationship across the year. / You want the plan revisited as things change over the year, not just once. / The decision is part of a longer skill-building direction, not a single fork. / You would rather pay once than track a recurring charge.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Linear process chain or roadmap for “How to decide, without a hard sell”: A single 1-on-1 session probably…; The continuous-guidance package…; There is one…
- Title attribute: How to decide, without a hard sell
- Caption (and keep the same point in HTML text): A single 1-on-1 session probably fits if There is one specific decision that needs resolving now.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-workshop/

**H1:** Career counselling workshop built as structured guidance, not a one-off talk  
**Type:** bofu · **Search priority:** P3 (0 clicks, 7 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-career-plan.webp`.
7. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
8. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-holistic-framework.webp` | 98% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-workshop-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career counselling workshop should leave you with more than notes from a talk.
- On-image text (about 25-40 words, shortened from the page; no new claims): What a career counselling workshop should actually mean / What a structured career counselling workshop should help you decide / How the structured session should move the decision forward / How a structured career counselling workshop fits where you are right… / If a career talk, webinar, or seminar already left you unclear
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling workshop built as…”: What a career counselling…; What a structured career…; How the…
- Title attribute: At a glance: Career counselling workshop built as structured guidance…
- Caption (and keep the same point in HTML text): A career counselling workshop should leave you with more than notes from a talk.
**V2 — Decision tree** (place after the section “What a career counselling workshop should actually mean”)
- File: `career-counselling-workshop-decision-career-counselling-workshop-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The word 'workshop' should signal a working session, not a passive talk.
- On-image text (about 25-40 words, shortened from the page; no new claims): A structured process, not a one-time talk / Guided, hands-on, and specific to you / Built to continue, not end after one session / Practical output, not just discussion
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a career counselling workshop should…”: A structured process, not a…; Guided, hands-on, and specific to…; Built to continue, not end…
- Title attribute: What a career counselling workshop should actually mean
- Caption (and keep the same point in HTML text): The word 'workshop' should signal a working session, not a passive talk.
**V3 — Decision tree by situation** (place after the section “If a career talk, webinar, or seminar already left you unclear”)
- File: `career-counselling-workshop-decision-career-talk-webinar-seminar.webp` · 1600×1000 WebP under 200 KB
- Teaches: A 'workshop' label means little if the session never actually works through your decision.
- On-image text (about 25-40 words, shortened from the page; no new claims): Isn’t a "workshop" just a talk with slides? / What if I already sat through a career talk or webinar and still feel… / The session works through your real shortlist, not a generic list of careers. / You leave with a narrower set of options and a specific next step. / Skill direction and proof of work are part of the output, not an afterthought. / For students, the structured format continues across the year instead of stopping after… / A broad talk can inform you without ever touching your specific decision.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “If a career talk, webinar, or seminar already…”: Isn’t a "workshop" just a talk…; What if I already sat through a…; The session…
- Title attribute: If a career talk, webinar, or seminar already left you unclear
- Caption (and keep the same point in HTML text): A 'workshop' label means little if the session never actually works through your decision.
**V4 — Linear process chain or roadmap** (place after the section “What the structured process should actually cover”)
- File: `career-counselling-workshop-linear-structured-process-should-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: Beyond the first session, the work should go further: fit, high-leverage decisions, high-value skill…
- On-image text (about 25-40 words, shortened from the page; no new claims): The shift should feel clear before it feels big / Then the work should connect like a roadmap / Beyond the first session, the work should go further: fit, high-leverage… / First the situation gets clearer.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “What the structured process should actually cover”: The shift should feel clear…; Then the work should connect like……
- Title attribute: What the structured process should actually cover
- Caption (and keep the same point in HTML text): Beyond the first session, the work should go further: fit, high-leverage decisions, high-value skill direction, proof of work, and a…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-expert-online/

**H1:** Career guidance expert online whose process you can actually check  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-online-session.webp`.
7. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
8. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-expert-online-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School gives you a career guidance expert online whose recommendations come from a structured…
- On-image text (about 25-40 words, shortened from the page; no new claims): What "expert" should actually mean when guidance is delivered online / How to verify a career guidance expert online before you pay / What separates a genuine online expert from a confident guess / What a career guidance expert online actually walks you through / Why verifying the expertise matters wherever you are right now
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance expert online whose…”: What "expert" should actually…; How to verify a career…
- Title attribute: At a glance: Career guidance expert online whose process you can…
- Caption (and keep the same point in HTML text): Future Career School gives you a career guidance expert online whose recommendations come from a structured, assessment-backed process, not…
**V2 — Chronological timeline** (place after the section “What "expert" should actually mean when guidance is delivered online”)
- File: `career-guidance-expert-online-chronological-expert-should-actually-mean.webp` · 1600×1000 WebP under 200 KB
- Teaches: Anyone can add the word to a profile.
- On-image text (about 25-40 words, shortened from the page; no new claims): Not a title, a process you can see / Verifiable reasoning, not just a confident tone / The same process online as it would be in person / Backed by a structured process, not a title
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What "expert" should actually mean when guidance…”: Not a title, a process you can see; Verifiable reasoning, not just a…; The same…
- Title attribute: What "expert" should actually mean when guidance is delivered online
- Caption (and keep the same point in HTML text): Anyone can add the word to a profile.
**V3 — Linear process chain or roadmap** (place after the section “How to verify a career guidance expert online before you pay”)
- File: `career-guidance-expert-online-linear-verify-career-guidance-expert.webp` · 1600×1000 WebP under 200 KB
- Teaches: A screen removes some of the normal trust signals, like body language, an office, or word of mouth.
- On-image text (about 25-40 words, shortened from the page; no new claims): Check whether they can explain their own reasoning / Check whether what you share is actually used again / Check whether the process stays the same across sessions / Check whether skill direction and proof of work get real attention
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “How to verify a career guidance expert online…”: Check whether they can explain…; Check whether what you share is…; Check…
- Title attribute: How to verify a career guidance expert online before you pay
- Caption (and keep the same point in HTML text): A screen removes some of the normal trust signals, like body language, an office, or word of mouth.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Doubts worth resolving before trusting any expert online”)
- File: `career-guidance-expert-online-asymmetrical-doubts-worth-resolving-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are the questions worth asking before you hand an important decision to someone you have only met on a…
- On-image text (about 25-40 words, shortened from the page; no new claims): "Expert" sounds like a title anyone can add online. What actually… / Is trusting an online expert riskier than choosing someone I can meet… / How do I know the expert is not just reading from a script? / Does "expert" mean a specific certification or degree?
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Doubts worth resolving before trusting any expert…”: "Expert" sounds like a title…; Is trusting an online expert……
- Title attribute: Doubts worth resolving before trusting any expert online
- Caption (and keep the same point in HTML text): These are the questions worth asking before you hand an important decision to someone you have only met on a screen.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-service/

**H1:** Career guidance service built around what you actually get  
**Type:** bofu · **Search priority:** P3 (0 clicks, 5 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
7. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-service-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers a career guidance service for students, freshers, and working professionals who…
- On-image text (about 25-40 words, shortened from the page; no new claims): What this career guidance service actually includes / How to evaluate a career guidance service before you pay for it / Why this career guidance service is worth paying for / How this career guidance service works, step by step / Who this career guidance service is built for right now
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance service built around…”: What this career guidance service…; How to evaluate a career…
- Title attribute: At a glance: Career guidance service built around what you actually…
- Caption (and keep the same point in HTML text): Future Career School offers a career guidance service for students, freshers, and working professionals who want to see the structure, the…
**V2 — Self-assessment checklist** (place after the section “What this career guidance service actually includes”)
- File: `career-guidance-service-self-career-guidance-service-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: A service worth paying for should show its structure upfront.
- On-image text (about 25-40 words, shortened from the page; no new claims): Before you pay anything / What happens inside the 1-on-1 / Where the service moves you next / The exact 1-on-1 price for your track — student or working professional / Whether you are booking a single session or stepping into continuous guidance / Profile, preferences, strengths, and work-style mapping / High-leverage decision support around path, skill, and risk
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “What this career guidance service actually…”: Before you pay anything; What happens inside the 1-on-1; Where the service moves…
- Title attribute: What this career guidance service actually includes
- Caption (and keep the same point in HTML text): A service worth paying for should show its structure upfront.
**V3 — Linear process chain or roadmap** (place after the section “How to evaluate a career guidance service before you pay for it”)
- File: `career-guidance-service-linear-evaluate-career-guidance-service.webp` · 1600×1000 WebP under 200 KB
- Teaches: Good service structure should be easy to check before you commit — not something you discover after paying.
- On-image text (about 25-40 words, shortened from the page; no new claims): Check whether the deliverables are named, not vague / Check whether pricing is clear before you book / Check whether the guidance stays specific to you / Check whether the service leads toward skills, not only a report
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “How to evaluate a career guidance service before…”: Check whether the deliverables…; Check whether pricing is clear……
- Title attribute: How to evaluate a career guidance service before you pay for it
- Caption (and keep the same point in HTML text): Good service structure should be easy to check before you commit — not something you discover after paying.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Why this career guidance service is worth paying for”)
- File: `career-guidance-service-asymmetrical-career-guidance-service-worth.webp` · 1600×1000 WebP under 200 KB
- Teaches: Plenty of services in the market look similar on the surface.
- On-image text (about 25-40 words, shortened from the page; no new claims): Plenty of services in the market look similar on the surface. / The real difference is in what the process actually delivers. / Others Shift Future Career School Others A service described in slogans Future…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Why this career guidance service is worth paying…”: Plenty of services in the market…; The real difference is in…
- Title attribute: Why this career guidance service is worth paying for
- Caption (and keep the same point in HTML text): Plenty of services in the market look similar on the surface.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-mentoring-program/

**H1:** Career mentoring program built around a relationship that continues, not a single call  
**Type:** bofu · **Search priority:** P3 (0 clicks, 7 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-career-plan.webp` has no title attribute and no caption.
7. Context visual reuse: `context-career-plan.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-career-plan.webp` | 98% | lazy | A career plan visual showing now, next, proof… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-mentoring-program-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A career mentoring program with Future Career School starts with a 1-on-1 session and keeps going through…
- On-image text (about 25-40 words, shortened from the page; no new claims): What makes a career mentoring program different from a single session / Start the relationship when the plan you have now already needs more… / Why an ongoing relationship helps when circumstances keep changing / What a career mentoring relationship actually looks like across a year / A career counselling session vs a career mentoring program
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career mentoring program built…”: What makes a career mentoring…; Start the relationship when the……
- Title attribute: At a glance: Career mentoring program built around a relationship…
- Caption (and keep the same point in HTML text): A career mentoring program with Future Career School starts with a 1-on-1 session and keeps going through continuous small-group sessions…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “What makes a career mentoring program different from a single session”)
- File: `career-mentoring-program-asymmetrical-makes-career-mentoring-program.webp` · 1600×1000 WebP under 200 KB
- Teaches: The format matters because a high-value skill portfolio and a route toward earlier financial freedom usually…
- On-image text (about 25-40 words, shortened from the page; no new claims): One relationship across the year, not a single verdict / Built for a direction that keeps needing revisiting / A career mentor online who already knows your context
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What makes a career mentoring program different…”: One relationship across the year…; Built for a direction that…
- Title attribute: What makes a career mentoring program different from a single session
- Caption (and keep the same point in HTML text): The format matters because a high-value skill portfolio and a route toward earlier financial freedom usually need revisiting more than…
**V3 — Chronological timeline** (place after the section “What a career mentoring relationship actually looks like across a year”)
- File: `career-mentoring-program-chronological-career-mentoring-relationship-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: It starts the same way a career counselling session does.
- On-image text (about 25-40 words, shortened from the page; no new claims): The 1-on-1 that starts the relationship / Up to 24 small-group sessions that keep the plan current / Maps strengths, work style, and the decision under the most pressure. / Sets an initial direction for skill choices and next steps. / Becomes the shared context every later session builds on. / Each session checks the plan against what has actually changed since the last one. / Skill direction, proof of work, and positioning get revisited, not just set once.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What a career mentoring relationship actually…”: The 1-on-1 that starts the…; Up to 24 small-group sessions…; Maps strengths, work…
- Title attribute: What a career mentoring relationship actually looks like across a year
- Caption (and keep the same point in HTML text): It starts the same way a career counselling session does.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “A career counselling session vs a career mentoring program”)
- File: `career-mentoring-program-asymmetrical-career-counselling-session-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: Both use the same first conversation.
- On-image text (about 25-40 words, shortened from the page; no new claims): A session answers one question / A mentoring relationship answers the next question too / Accountability is built into the return visits
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “A career counselling session vs a career…”: A session answers one question; A mentoring relationship answers……
- Title attribute: A career counselling session vs a career mentoring program
- Caption (and keep the same point in HTML text): Both use the same first conversation.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-planning-session-online/

**H1:** Career planning session online built for years ahead, not one decision  
**Type:** bofu · **Search priority:** P3 (0 clicks, 1 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-career-plan.webp` has no title attribute and no caption.
7. Context visual reuse: `context-career-plan.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-career-plan.webp` | 98% | lazy | A career plan visual showing now, next, proof… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-planning-session-online-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School's career planning session online maps where you stand today into a structured…
- On-image text (about 25-40 words, shortened from the page; no new claims): What makes a career planning session different from a single… / What a career planning session online should actually build / Building the plan, then keeping it current / How the career planning session online moves from today to your… / What to bring to your career planning session
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career planning session online built…”: What makes a career planning…; What a career planning…
- Title attribute: At a glance: Career planning session online built for years ahead…
- Caption (and keep the same point in HTML text): Future Career School's career planning session online maps where you stand today into a structured, multi-year plan with real milestones.
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “What makes a career planning session different from a single…”)
- File: `career-planning-session-online-asymmetrical-makes-career-planning-session.webp` · 1600×1000 WebP under 200 KB
- Teaches: A plan spans years.
- On-image text (about 25-40 words, shortened from the page; no new claims): A plan across years, not a verdict on one decision / Milestones you can check yourself against / A plan that expects to be revisited online
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What makes a career planning session different…”: A plan across years, not a…; Milestones you can check yourself…; A…
- Title attribute: What makes a career planning session different from a single…
- Caption (and keep the same point in HTML text): A plan spans years.
**V3 — Linear process chain or roadmap** (place after the section “What a career planning session online should actually build”)
- File: `career-planning-session-online-linear-career-planning-session-online.webp` · 1600×1000 WebP under 200 KB
- Teaches: The session is not meant to end with a single answer.
- On-image text (about 25-40 words, shortened from the page; no new claims): Where you stand today, mapped honestly / A skill portfolio sequenced over time, not one skill decision / Milestones tied to income and market positioning / A built-in point to revisit and adjust the plan
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “What a career planning session online should…”: Where you stand today, mapped…; A skill portfolio sequenced over……
- Title attribute: What a career planning session online should actually build
- Caption (and keep the same point in HTML text): The session is not meant to end with a single answer.
**V4 — Linear process chain or roadmap** (place after the section “Building the plan, then keeping it current”)
- File: `career-planning-session-online-linear-building-plan-then-keeping.webp` · 1600×1000 WebP under 200 KB
- Teaches: A multi-year plan is not useful if it is built once and never revisited.
- On-image text (about 25-40 words, shortened from the page; no new claims): The first career planning session / Ongoing plan check-ins for students / Starts from your real profile, not a generic roadmap template. / Produces milestones you can track, not just a direction to feel good about. / Delivered fully online, so it fits around school, college, or work. / Built for a plan that spans years, not a single semester. / Keeps skill sequencing and milestones on track as circumstances shift.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Building the plan, then keeping it current”: The first career planning session; Ongoing plan check-ins for…; Starts from…
- Title attribute: Building the plan, then keeping it current
- Caption (and keep the same point in HTML text): A multi-year plan is not useful if it is built once and never revisited.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/counselling-for-career-planning/

**H1:** Counselling for career planning: what it can actually give you, and where it stops  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 95% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-career-plan.webp` has no title attribute and no caption.
7. Context visual reuse: `context-career-plan.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 91% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 92% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 94% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 95% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-career-plan.webp` | 96% | lazy | A career plan visual showing now, next, proof… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `counselling-for-career-planning-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Counselling for career planning usually means one thing to most people and something narrower in practice: a…
- On-image text (about 25-40 words, shortened from the page; no new claims): What a counselling conversation actually gives you toward career… / What matters more than which label the session uses / How counselling and career planning are handled here, named… / What counselling-style and planning-style sessions cost here
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Counselling for career planning…”: What a counselling conversation…; What matters more than which……
- Title attribute: At a glance: Counselling for career planning: what it can actually…
- Caption (and keep the same point in HTML text): Counselling for career planning usually means one thing to most people and something narrower in practice: a single, assessment-driven…
**V2 — Linear process chain or roadmap** (place after the section “What a counselling conversation actually gives you toward career…”)
- File: `counselling-for-career-planning-linear-counselling-conversation-actually-gives.webp` · 1600×1000 WebP under 200 KB
- Teaches: Counselling, in the sense most people search for it, centres on assessment and one decision: aptitude…
- On-image text (about 25-40 words, shortened from the page; no new claims): What a good counselling session covers / What it usually does not cover on its own / An honest read of your actual profile, not a generic template answer. / A structured recommendation on the one decision in front of you right now. / Assessment-backed reasoning you can explain to yourself or your family. / A natural starting point that a longer plan can be built on top of afterward. / Milestones across the next several years, sequenced and checkable.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “What a counselling conversation actually gives…”: What a good counselling session…; What it usually does not cover on…; An…
- Title attribute: What a counselling conversation actually gives you toward career…
- Caption (and keep the same point in HTML text): Counselling, in the sense most people search for it, centres on assessment and one decision: aptitude, interest, and work-style signals…
**V3 — Linear process chain or roadmap** (place after the section “How counselling and career planning are handled here, named…”)
- File: `counselling-for-career-planning-linear-counselling-career-planning-handled.webp` · 1600×1000 WebP under 200 KB
- Teaches: Rather than selling "counselling" and quietly stretching it to cover a multi-year plan, the two are kept as…
- On-image text (about 25-40 words, shortened from the page; no new claims): Rather than selling "counselling" and quietly stretching it to cover a… / The 1-on-1 session does the counselling-style work: it works through your… / When the real need is broader than one decision, a dedicated career planning…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “How counselling and career planning are handled…”: Rather than selling "counselling"…; The 1-on-1 session does the…; When…
- Title attribute: How counselling and career planning are handled here, named…
- Caption (and keep the same point in HTML text): Rather than selling "counselling" and quietly stretching it to cover a multi-year plan, the two are kept as distinct, clearly named options.
**V4 — Comparison table** (place after the section “What counselling-style and planning-style sessions cost here”)
- File: `counselling-for-career-planning-comparison-counselling-style-planning-style.webp` · 1600×1000 WebP under 200 KB
- Teaches: Pricing for either path is shown upfront rather than revealed after a call.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session… | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time… / Row: Working-professional… | Rs 3000 (limited-time…
- Numbers: Plan Price Student 1-on-1 session (counselling-style or planning-style) Rs 250 (limited-time price, down from Rs 3000) Student continuous guidance (keeps a plan current across the year, includes the 1-on-1 plus up to 24 small-group sessions) Rs 12000 (limited-
- Alt: Comparison table for “What counselling-style and planning-style…”: Plan | Price; Student 1-on-1 session… | Rs 250…; Student continuous… | Rs 12000…
- Title attribute: What counselling-style and planning-style sessions cost here
- Caption (and keep the same point in HTML text): Pricing for either path is shown upfront rather than revealed after a call.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/free-career-counselling-session/

**H1:** Free career counselling session — here’s exactly what’s free, and what isn’t  
**Type:** bofu · **Search priority:** P3 (0 clicks, 8 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-career-plan.webp` has no title attribute and no caption.
7. Context visual reuse: `context-career-plan.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-career-plan.webp` | 97% | lazy | A career plan visual showing now, next, proof… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `free-career-counselling-session-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: If you searched for a free career counselling session or a trial career counselling session, here is the…
- On-image text (about 25-40 words, shortened from the page; no new claims): What's actually free, and what's a real paid session / Why there's no free 1-on-1 session, and why that's actually better… / What a real career counselling session should help you resolve / What the paid 1-on-1 session actually covers / Why the low-cost first session makes sense for you right now
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Free career counselling session —…”: What's actually free, and what's…; Why there's no free 1-on-1……
- Title attribute: At a glance: Free career counselling session — here’s exactly what’s…
- Caption (and keep the same point in HTML text): If you searched for a free career counselling session or a trial career counselling session, here is the honest answer: the career…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Why there's no free 1-on-1 session, and why that's actually better…”)
- File: `free-career-counselling-session-asymmetrical-there-free-session-actually.webp` · 1600×1000 WebP under 200 KB
- Teaches: A lot of what gets advertised online as a free career counselling session is a short sales call.
- On-image text (about 25-40 words, shortened from the page; no new claims): A lot of "free career counselling session" offers online are sales… / A real session needs a counsellor’s real time / The price is kept low on purpose, not padded and then "discounted"
- Numbers: 03 The price is kept low on purpose, not padded and then "discounted" Rs 250 for a student first session and Rs 3000 for a working professional session are the current limited-time prices - low enough to be a genuinely low-risk way to test the guidance before 
- Alt: Asymmetrical pros-and-cons comparison for “Why there's no free 1-on-1 session, and why…”: A lot of "free career counselling…; A real session needs a…; The…
- Title attribute: Why there's no free 1-on-1 session, and why that's actually better…
- Caption (and keep the same point in HTML text): A lot of what gets advertised online as a free career counselling session is a short sales call.
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the section “Why the low-cost first session makes sense for you right now”)
- File: `free-career-counselling-session-stat-low-cost-first-session.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students & Freshers Testing the guidance before committing to more A Rs 250 first session is a low-risk way…
- On-image text (about 25-40 words, shortened from the page; no new claims): Testing the guidance before committing to more / A low-cost way to check a pivot before you act on it / Students & Freshers Testing the guidance before committing to more A Rs 250… / Working Professionals A low-cost way to check a pivot before you act on it At… / useful when stagnation, AI pressure, or a career change already feels urgent.
- Numbers: Students & Freshers Testing the guidance before committing to more A Rs 250 first session is a low-risk way to see whether the direction actually helps before choosing between one session and continuous guidance for the year - useful when a stream, course, or  | Working Professionals A low-cost way to check a pivot before you act on it At Rs 3000, one session is a small cost against the risk of a bad pivot, a stalled negotiation, or another year in a low-ceiling role ?
- Alt: Stat panel or bar chart (only the numbers listed) for “Why the low-cost first session makes sense for…”: Testing the guidance before…; A low-cost way to check…
- Title attribute: Why the low-cost first session makes sense for you right now
- Caption (and keep the same point in HTML text): Students & Freshers Testing the guidance before committing to more A Rs 250 first session is a low-risk way to see whether the direction…
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Why the paid session is worth more than a free generic call”)
- File: `free-career-counselling-session-asymmetrical-paid-session-worth-more.webp` · 1600×1000 WebP under 200 KB
- Teaches: A free call that stays generic will not move your decision forward.
- On-image text (about 25-40 words, shortened from the page; no new claims): A free call that stays generic will not move your decision forward. / A low-cost real session should. / Others Shift Future Career School Others A free call that turns into a package…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Why the paid session is worth more than a free…”: A free call that stays generic…; A low-cost real session should.…
- Title attribute: Why the paid session is worth more than a free generic call
- Caption (and keep the same point in HTML text): A free call that stays generic will not move your decision forward.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/group-career-counselling-session/

**H1:** Group career counselling session that keeps a full year of skill decisions on track  
**Type:** bofu · **Search priority:** P3 (0 clicks, 2 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-career-plan.webp` has no title attribute and no caption.
7. Context visual reuse: `context-career-plan.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-career-plan.webp` | 97% | lazy | A career plan visual showing now, next, proof… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `group-career-counselling-session-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A group career counselling session with Future Career School is small-group career guidance, usually 10 or…
- On-image text (about 25-40 words, shortened from the page; no new claims): What actually makes a session a group career counselling session / Why the small-group format exists inside continuous guidance / Group career counselling session or one-on-one: what each format is… / How the group career counselling session fits into a full year of… / What group career counselling sessions should actually cover across…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Group career counselling session…”: What actually makes a session a…; Why the small-group format…
- Title attribute: At a glance: Group career counselling session that keeps a full year…
- Caption (and keep the same point in HTML text): A group career counselling session with Future Career School is small-group career guidance, usually 10 or fewer students, built to keep…
**V2 — Self-assessment checklist** (place after the section “Group career counselling session or one-on-one: what each format is…”)
- File: `group-career-counselling-session-self-group-career-counselling-session.webp` · 1600×1000 WebP under 200 KB
- Teaches: Both exist inside the same practical service.
- On-image text (about 25-40 words, shortened from the page; no new claims): One-on-one career counselling session / Group career counselling session / Best for a first serious decision or one sharp question. / Every minute is about your specific situation. / The natural starting point before continuing into group sessions. / Stays at 10 or fewer students so it still feels specific. / Keeps skill choices, proof of work, and financial-freedom planning on track over time.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Group career counselling session or one-on-one…”: One-on-one career counselling…; Group career counselling session; Best for a…
- Title attribute: Group career counselling session or one-on-one: what each format is…
- Caption (and keep the same point in HTML text): Both exist inside the same practical service.
**V3 — Chronological timeline** (place after the section “How the group career counselling session fits into a full year of…”)
- File: `group-career-counselling-session-chronological-group-career-counselling-session.webp` · 1600×1000 WebP under 200 KB
- Teaches: The format moves from one focused conversation into consistent, small-group support, not straight into a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Start with your one-on-one session / Join a small group of 10 or fewer students / Keep decisions on track across the year
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “How the group career counselling session fits…”: Start with your one-on-one session; Join a small group of 10 or fewer…; Keep…
- Title attribute: How the group career counselling session fits into a full year of…
- Caption (and keep the same point in HTML text): The format moves from one focused conversation into consistent, small-group support, not straight into a large recurring call.
**V4 — Chronological timeline** (place after the section “What group career counselling sessions should actually cover across…”)
- File: `group-career-counselling-session-chronological-group-career-counselling-sessions.webp` · 1600×1000 WebP under 200 KB
- Teaches: Each small-group session is still one focused conversation, but the thinking across the year should move…
- On-image text (about 25-40 words, shortened from the page; no new claims): The shift should feel clear before it feels big / Then the work should connect like a roadmap / Each small-group session is still one focused conversation, but the thinking… / First the situation gets clearer.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What group career counselling sessions should…”: The shift should feel clear…; Then the work should connect like…; Each small-group…
- Title attribute: What group career counselling sessions should actually cover across…
- Caption (and keep the same point in HTML text): Each small-group session is still one focused conversation, but the thinking across the year should move through fit, high-leverage…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/hire-a-career-coach/

**H1:** Hire a career coach the way you would evaluate any real hire  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-entrepreneur-path.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-holistic-framework.webp`.
7. Context visual `context-entrepreneur-path.webp` has no title attribute and no caption.
8. Context visual reuse: `context-entrepreneur-path.webp` appears on 2 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-entrepreneur-path.webp` | 97% | lazy | An entrepreneurship visual showing problem… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `hire-a-career-coach-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: When you decide to hire a career coach, you are not just booking a chat.
- On-image text (about 25-40 words, shortened from the page; no new claims): What to look for before you hire a career coach / What actually happens once you hire / What you are really hiring: generic advice or structured decision… / What you get once you hire a career coach here / How practical career guidance should work
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Hire a career coach the way you…”: What to look for before you hire…; What actually happens once you……
- Title attribute: At a glance: Hire a career coach the way you would evaluate any real…
- Caption (and keep the same point in HTML text): When you decide to hire a career coach, you are not just booking a chat.
**V2 — Self-assessment checklist** (place after the section “What you get once you hire a career coach here”)
- File: `hire-a-career-coach-self-get-once-hire-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: The value of hiring the right coach is not the hour itself.
- On-image text (about 25-40 words, shortened from the page; no new claims): Clarity from session one / A specific plan, not a generic script / Leverage that continues after the first session / Initial psychometric assessment and career counselling / Profile and stage mapping before any recommendation / Direction based on fit, market reality, and risk / A practical next step instead of a generic pep talk
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “What you get once you hire a career coach here”: Clarity from session one; A specific plan, not a generic…; Leverage that…
- Title attribute: What you get once you hire a career coach here
- Caption (and keep the same point in HTML text): The value of hiring the right coach is not the hour itself.
**V3 — Decision tree by situation** (place after the section “Who should actually hire a career coach right now”)
- File: `hire-a-career-coach-decision-who-should-actually-hire.webp` · 1600×1000 WebP under 200 KB
- Teaches: Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream…
- On-image text (about 25-40 words, shortened from the page; no new claims): For school, college, fresher, and early-direction decisions / For stagnation, AI pressure, and salary-ceiling decisions / Student or Early-Career For school, college, fresher, and early-direction… / Working Professional For stagnation, AI pressure, and salary-ceiling decisions… / A clearer route toward achieving earlier financial freedom through stronger…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “Who should actually hire a career coach right now”: For school, college, fresher, and…; For stagnation, AI pressure, and……
- Title attribute: Who should actually hire a career coach right now
- Caption (and keep the same point in HTML text): Student or Early-Career For school, college, fresher, and early-direction decisions Useful when stream choices, course choices, skill…
**V4 — Linear process chain or roadmap** (place after the section “Hire a Career Coach: Plans and Pricing”)
- File: `hire-a-career-coach-linear-hire-career-coach-plans.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Coaching Practical student career coaching before the wrong path wastes…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Coaching / Working Professional Career Coaching / Students Student path Student Career Coaching Practical student career coaching… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Linear process chain or roadmap for “Hire a Career Coach: Plans and Pricing”: Student Career Coaching; Working Professional Career…; Students Student path…
- Title attribute: Hire a Career Coach: Plans and Pricing
- Caption (and keep the same point in HTML text): Students Student path Student Career Coaching Practical student career coaching before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/one-on-one-career-coaching-session/

**H1:** One-on-one career coaching session built for execution, not just a decision  
**Type:** bofu · **Search priority:** P3 (0 clicks, 7 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` was chosen by the regex in `BofuContextVisual.astro`; a cleaner match for this keyword is `context-career-plan.webp`.
7. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
8. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `one-on-one-career-coaching-session-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School's one-on-one career coaching session is a private, individual conversation, not a shared…
- On-image text (about 25-40 words, shortened from the page; no new claims): What one-on-one actually guarantees in this session / A coaching session and a counselling consultation solve different… / How a private coaching session fits where you are right now / What a one-on-one career coaching session should actually cover / Why a coaching session has to be more useful than a motivational call
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: One-on-one career coaching session…”: What one-on-one actually…; A coaching session and a…; How a…
- Title attribute: At a glance: One-on-one career coaching session built for execution…
- Caption (and keep the same point in HTML text): Future Career School's one-on-one career coaching session is a private, individual conversation, not a shared webinar or group program.
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “A coaching session and a counselling consultation solve different…”)
- File: `one-on-one-career-coaching-session-asymmetrical-coaching-session-counselling-consultation.webp` · 1600×1000 WebP under 200 KB
- Teaches: Both are one-on-one and both stay inside the same practical service family.
- On-image text (about 25-40 words, shortened from the page; no new claims): One-on-one career coaching session / Career counselling session / Best when you know roughly where you want to go and need a plan, not another opinion. / Ongoing, goal-execution focused: the plan, the skill moves, and the follow-through. / Ends with a specific next action and a follow-through point, not just a summary. / Best when the real question is still which path deserves your effort. / Assessment-driven and decision-focused, often a single sharper consultation.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “A coaching session and a counselling consultation…”: One-on-one career coaching session; Career counselling session…
- Title attribute: A coaching session and a counselling consultation solve different…
- Caption (and keep the same point in HTML text): Both are one-on-one and both stay inside the same practical service family.
**V3 — Decision tree** (place after the section “What a one-on-one career coaching session should actually cover”)
- File: `one-on-one-career-coaching-session-decision-one-one-career-coaching.webp` · 1600×1000 WebP under 200 KB
- Teaches: The conversation stays private and personal, but the thinking behind it should go further than motivation…
- On-image text (about 25-40 words, shortened from the page; no new claims): The shift should feel clear before it feels big / Then the work should connect like a roadmap / The conversation stays private and personal, but the thinking behind it should… / First the situation gets clearer.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a one-on-one career coaching session should…”: The shift should feel clear…; Then the work should connect like…; The conversation stays…
- Title attribute: What a one-on-one career coaching session should actually cover
- Caption (and keep the same point in HTML text): The conversation stays private and personal, but the thinking behind it should go further than motivation: fit, high-leverage decisions, a…
**V4 — Self-assessment checklist** (place after the section “Questions people ask before booking a one-on-one career coaching…”)
- File: `one-on-one-career-coaching-session-self-questions-people-ask-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Is a one-on-one career coaching session really private, not a group call?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 Is a one-on-one career coaching session really private, not a group call? / Yes. / The session is booked and run for you alone.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Questions people ask before booking a one-on-one…”: 01 Is a one-on-one career…; Yes.; The session is booked and run for…
- Title attribute: Questions people ask before booking a one-on-one career coaching…
- Caption (and keep the same point in HTML text): 01 Is a one-on-one career coaching session really private, not a group call?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/online-career-counselling-services/

**H1:** Online career counseling services built around what you actually get, delivered over video  
**Type:** bofu · **Search priority:** P3 (0 clicks, 19 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 96% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-online-session.webp` has no title attribute and no caption.
7. Context visual reuse: `context-online-session.webp` appears on 6 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 93% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 94% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 95% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 96% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-online-session.webp` | 97% | lazy | An online guidance visual showing live… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `online-career-counselling-services-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School runs online career counseling services for students, freshers, and working professionals…
- On-image text (about 25-40 words, shortened from the page; no new claims): What is included when you book online career counseling services / How online career counseling services run, start to finish / What separates a real online counselor from a video call with no real… / How this compares to a generic video call dressed up as counseling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Online career counseling services…”: What is included when you book…; How online career counseling……
- Title attribute: At a glance: Online career counseling services built around what you…
- Caption (and keep the same point in HTML text): Future Career School runs online career counseling services for students, freshers, and working professionals who want to know exactly what…
**V2 — Chronological timeline** (place after the section “What is included when you book online career counseling services”)
- File: `online-career-counselling-services-chronological-included-book-online-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: An online session is still a paid service.
- On-image text (about 25-40 words, shortened from the page; no new claims): What a session actually includes online / What gets shared with you digitally / What continues after the first online session / Profile, strengths, and work-style mapping done over video, not a static form you fill… / A live conversation about your real decision, not a pre-recorded module or generic slide… / A clear next step you leave with, sent to you in writing after the call so it does not… / Assessment results and any notes are shared through a link or document, not left inside…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “What is included when you book online career…”: What a session actually includes…; What gets shared with you…; What continues after…
- Title attribute: What is included when you book online career counseling services
- Caption (and keep the same point in HTML text): An online session is still a paid service.
**V3 — Linear process chain or roadmap** (place after the section “What separates a real online counselor from a video call with no real…”)
- File: `online-career-counselling-services-linear-separates-real-online-counselor.webp` · 1600×1000 WebP under 200 KB
- Teaches: You cannot walk into an office to judge a provider before an online booking.
- On-image text (about 25-40 words, shortened from the page; no new claims): Check how the session is actually delivered before you pay / Check what happens to your assessment data and notes / Check whether pricing and continuation terms are visible before… / Check whether you can still reach the same counselor for a follow-up
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “What separates a real online counselor from a…”: Check how the session is actually…; Check what happens to your…; Check…
- Title attribute: What separates a real online counselor from a video call with no real…
- Caption (and keep the same point in HTML text): You cannot walk into an office to judge a provider before an online booking.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “How this compares to a generic video call dressed up as counseling”)
- File: `online-career-counselling-services-asymmetrical-compares-generic-video-call.webp` · 1600×1000 WebP under 200 KB
- Teaches: Plenty of services can put a counselor on a video call.
- On-image text (about 25-40 words, shortened from the page; no new claims): Plenty of services can put a counselor on a video call. / The difference is whether the process behind that call gives you higher-value… / Others Shift Future Career School Others Not knowing what an online session…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this compares to a generic video call dressed…”: Plenty of services can put a…; The difference is whether the……
- Title attribute: How this compares to a generic video call dressed up as counseling
- Caption (and keep the same point in HTML text): Plenty of services can put a counselor on a video call.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/trial-career-counselling-session/

**H1:** Trial career counselling session — test the guidance before you commit to more  
**Type:** bofu · **Search priority:** P3 (0 clicks, 1 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-career-plan.webp` has no title attribute and no caption.
7. Context visual reuse: `context-career-plan.webp` appears on 8 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 93% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 94% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-career-plan.webp` | 97% | lazy | A career plan visual showing now, next, proof… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `trial-career-counselling-session-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A trial career counselling session lets you experience Future Career School's guidance on your own path…
- On-image text (about 25-40 words, shortened from the page; no new claims): What a trial career counselling session should actually let you test / Why testing the guidance first is safer than committing to a package… / Why testing the direction first makes sense for you right now / What actually happens inside the trial session / What the trial should prove, compared with generic advice
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Trial career counselling session —…”: What a trial career counselling…; Why testing the guidance first…
- Title attribute: At a glance: Trial career counselling session — test the guidance…
- Caption (and keep the same point in HTML text): A trial career counselling session lets you experience Future Career School's guidance on your own path, skill direction, and constraints…
**V2 — Chronological timeline** (place after the section “Why testing the guidance first is safer than committing to a package…”)
- File: `trial-career-counselling-session-chronological-testing-guidance-first-safer.webp` · 1600×1000 WebP under 200 KB
- Teaches: Choosing a career guidance provider is itself a decision with real cost if it goes wrong.
- On-image text (about 25-40 words, shortened from the page; no new claims): Paying for a full package before you know if the guidance is any good / One real 1-on-1 session, priced low on purpose, before any bigger… / Choosing a career guidance provider is itself a decision with real cost if it… / The trial exists to lower that risk before the bigger one. / 01 Committing sight-unseen Paying for a full package before you know if the…
- Numbers: 02 Testing before committing One real 1-on-1 session, priced low on purpose, before any bigger decision The trial career counselling session at Future Career School is one full 1-on-1 session — currently Rs 250 for students and Rs 3000 for working professional
- Alt: Chronological timeline for “Why testing the guidance first is safer than…”: Paying for a full package before…; One real 1-on-1 session, priced…; Choosing a…
- Title attribute: Why testing the guidance first is safer than committing to a package…
- Caption (and keep the same point in HTML text): Choosing a career guidance provider is itself a decision with real cost if it goes wrong.
**V3 — Decision tree** (place after the section “Why testing the direction first makes sense for you right now”)
- File: `trial-career-counselling-session-decision-testing-direction-first-makes.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students & Freshers A low-risk way to test the direction before a year-long commitment A Rs 250 trial session…
- On-image text (about 25-40 words, shortened from the page; no new claims): A low-risk way to test the direction before a year-long commitment / A small cost to test a pivot before you act on it for real / Students & Freshers A low-risk way to test the direction before a year-long… / Working Professionals A small cost to test a pivot before you act on it for…
- Numbers: Students & Freshers A low-risk way to test the direction before a year-long commitment A Rs 250 trial session lets you see whether the stream, course, or skill direction actually holds up before deciding between one session and a full year of continuous guidan | Working Professionals A small cost to test a pivot before you act on it for real At Rs 3000, the trial session is a small cost against the risk of acting on a bad pivot, a stalled negotiation, or another year in a role that is not building toward earlier finan
- Alt: Decision tree for “Why testing the direction first makes sense for…”: A low-risk way to test the…; A small cost to test a pivot…; Students & Freshers A…
- Title attribute: Why testing the direction first makes sense for you right now
- Caption (and keep the same point in HTML text): Students & Freshers A low-risk way to test the direction before a year-long commitment A Rs 250 trial session lets you see whether the…
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “What the trial should prove, compared with generic advice”)
- File: `trial-career-counselling-session-asymmetrical-trial-should-prove-compared.webp` · 1600×1000 WebP under 200 KB
- Teaches: Use these as the real test of whether a trial session is worth your time — with any provider, not only this…
- On-image text (about 25-40 words, shortened from the page; no new claims): Use these as the real test of whether a trial session is worth your time — with… / Others Shift Future Career School Others A free trial that is really a sales…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What the trial should prove, compared with…”: Use these as the real test of…; Others Shift Future Career School…
- Title attribute: What the trial should prove, compared with generic advice
- Caption (and keep the same point in HTML text): Use these as the real test of whether a trial session is worth your time — with any provider, not only this one.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/virtual-career-counselling/

**H1:** Virtual career counselling that feels like sitting across the table, over video, from anywhere  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-online-session.webp` is shared by 26 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-online-session.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-online-session.webp` has no title attribute and no caption.
7. Context visual reuse: `context-online-session.webp` appears on 6 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-online-session.webp` | 97% | eager/high | A one-on-one online career counselling session on… | NO | NO |
| `bofu/context-online-session.webp` | 97% | lazy | An online guidance visual showing live… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-online-session.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `virtual-career-counselling-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School's virtual career counselling puts you face-to-face with a real counsellor over video…
- On-image text (about 25-40 words, shortened from the page; no new claims): What a virtual career counselling session should actually cover / What makes a session genuinely virtual, not just remote / Why a virtual session still has to be more useful than generic advice / How a virtual career counselling session actually runs / If you are still unsure a video call can replace an in-person meeting
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Virtual career counselling that…”: What a virtual career counselling…; What makes a session…
- Title attribute: At a glance: Virtual career counselling that feels like sitting…
- Caption (and keep the same point in HTML text): Future Career School's virtual career counselling puts you face-to-face with a real counsellor over video call, screen-sharing your…
**V2 — Decision tree** (place after the section “What a virtual career counselling session should actually cover”)
- File: `virtual-career-counselling-decision-virtual-career-counselling-session.webp` · 1600×1000 WebP under 200 KB
- Teaches: The right skill portfolio leads to stronger income opportunities, and stronger income opportunities lead to…
- On-image text (about 25-40 words, shortened from the page; no new claims): The shift should feel clear before it feels big / Then the work should connect like a roadmap / The right skill portfolio leads to stronger income opportunities, and stronger… / A virtual session should keep that chain visible, not just fill an hour on…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What a virtual career counselling session should…”: The shift should feel clear…; Then the work should connect like…; The right skill…
- Title attribute: What a virtual career counselling session should actually cover
- Caption (and keep the same point in HTML text): The right skill portfolio leads to stronger income opportunities, and stronger income opportunities lead to earlier financial freedom.
**V3 — Decision tree by situation** (place after the section “If you are still unsure a video call can replace an in-person meeting”)
- File: `virtual-career-counselling-decision-still-unsure-video-call.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is the most common hesitation before booking a virtual session, and it is a fair one to work through…
- On-image text (about 25-40 words, shortened from the page; no new claims): Worried a screen cannot replace sitting across a table / Not sure a virtual session fits a serious, personal decision / You can see reactions, body language, and tone, not just hear a voice. / Screen-sharing means you are both looking at the same assessment data at the same time. / You can ask follow-up questions immediately instead of emailing later and waiting for a… / The session still ends with a specific next step, the same as a good in-person meeting… / A rushed in-person meeting can be just as generic as a bad phone call.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “If you are still unsure a video call can replace…”: Worried a screen cannot replace…; Not sure a virtual session fits a…; You…
- Title attribute: If you are still unsure a video call can replace an in-person meeting
- Caption (and keep the same point in HTML text): This is the most common hesitation before booking a virtual session, and it is a fair one to work through before you decide.
**V4 — Linear process chain or roadmap** (place after the section “Virtual Career Counselling: Plans and Pricing”)
- File: `virtual-career-counselling-linear-virtual-career-counselling-plans.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Working Professional Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year. | Limited-time professional offer ₹5000 ₹3000 for one 1-on-1 session Book one sharp 1-on-1 before stagnation, weak positioning, or a bad pivot gets more expensive.
- Alt: Linear process chain or roadmap for “Virtual Career Counselling: Plans and Pricing”: Student Career Counselling; Working Professional Career…; Students Student…
- Title attribute: Virtual Career Counselling: Plans and Pricing
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
