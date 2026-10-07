# Image audit — service/other pages: bofu-hero-assessment

3 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/best-career-assessment-platform/

**H1:** The best career assessment platform isn't the flashiest quiz — it's the one that holds up on five checks  
**Type:** bofu · **Search priority:** P2 (0 clicks, 41 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-evaluation-checklist.webp` has no title attribute and no caption.
7. Context visual reuse: `context-evaluation-checklist.webp` appears on 11 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 97% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/context-evaluation-checklist.webp` | 98% | lazy | A checklist visual for evaluating real career… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-assessment.webp` is shared by 52 pages): documentary photograph, natural light. Top-down desk view with hands in frame of an Indian student or adult at a home desk, a home study corner with natural window light. Props: notebooks, a laptop and printed course or job information. File `best-career-assessment-platform-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “The best career assessment platform isn't the flashiest quiz — it's…”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `best-career-assessment-platform-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: There is no single "best" career aptitude test for everyone.
- On-image text (about 25-40 words, shortened from the page; no new claims): The five things that actually separate a good career assessment from… / Free vs paid: what you're actually buying with a paid assessment / Red flags worth checking before you trust an assessment's result / Matching the test to your actual stage, not a one-size-fits-all quiz / What actually changes when an assessment approach scores well on…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: The best career assessment platform…”: The five things that actually…; Free vs paid: what you're…; Red…
- Title attribute: At a glance: The best career assessment platform isn't the flashiest…
- Caption (and keep the same point in HTML text): There is no single "best" career aptitude test for everyone.
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Free vs paid: what you're actually buying with a paid assessment”)
- File: `best-career-assessment-platform-asymmetrical-free-paid-actually-buying.webp` · 1600×1000 WebP under 200 KB
- Teaches: "Free" and "paid" get treated as a quality signal when they shouldn't be.
- On-image text (about 25-40 words, shortened from the page; no new claims): What each layer actually contributes / "Free" and "paid" get treated as a quality signal when they shouldn't be. / The real question is what a price tag is buying — because plenty of paid…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Free vs paid: what you're actually buying with a…”: What each layer actually…; "Free" and "paid" get treated as……
- Title attribute: Free vs paid: what you're actually buying with a paid assessment
- Caption (and keep the same point in HTML text): "Free" and "paid" get treated as a quality signal when they shouldn't be.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Red flags worth checking before you trust an assessment's result”)
- File: `best-career-assessment-platform-asymmetrical-red-flags-worth-checking.webp` · 1600×1000 WebP under 200 KB
- Teaches: A fair evaluation has to name what to watch for, not just what to look for.
- On-image text (about 25-40 words, shortened from the page; no new claims): Signs the test is worth trusting / Signs to slow down / Explains, in plain language, what it's actually measuring. / Results change meaningfully based on how you actually answer. / Gives you a next step, not just a type or a label. / Offers a version built for your actual stage — school, college, graduate, or professional. / Is upfront that no test can guarantee a specific career or income outcome.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Red flags worth checking before you trust an…”: Signs the test is worth trusting; Signs to slow down; Explains, in…
- Title attribute: Red flags worth checking before you trust an assessment's result
- Caption (and keep the same point in HTML text): A fair evaluation has to name what to watch for, not just what to look for.
**V4 — Chronological timeline** (place after the section “When a free assessment is enough, and when it needs a plan built on…”)
- File: `best-career-assessment-platform-chronological-free-assessment-enough-needs.webp` · 1600×1000 WebP under 200 KB
- Teaches: A free assessment is probably enough if You're early in exploring and just need to narrow a long list.
- On-image text (about 25-40 words, shortened from the page; no new claims): A free assessment is probably enough if / The result is worth taking further if / You're early in exploring and just need to narrow a long list. / The decision isn't urgent or expensive yet. / You haven't tried a current, stage-specific assessment before. / The decision is expensive, time-pressured, or hard to reverse. / The result leaves you more confused, or conflicts with what you already suspected.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When a free assessment is enough, and when it…”: A free assessment is probably…; The result is worth taking…; You're early in…
- Title attribute: When a free assessment is enough, and when it needs a plan built on…
- Caption (and keep the same point in HTML text): A free assessment is probably enough if You're early in exploring and just need to narrow a long list.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/best-career-aptitude-test/

**H1:** The best career aptitude test measures reasoning and ability — not just what you like or how you behave  
**Type:** bofu · **Search priority:** P3 (0 clicks, 17 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-evaluation-checklist.webp` has no title attribute and no caption.
7. Context visual reuse: `context-evaluation-checklist.webp` appears on 11 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-assessment.webp` | 97% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/context-evaluation-checklist.webp` | 97% | lazy | A checklist visual for evaluating real career… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-assessment.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `best-career-aptitude-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: An aptitude test in the strict sense checks how you reason: numerical, verbal, logical, and spatial ability —…
- On-image text (about 25-40 words, shortened from the page; no new claims): What a career aptitude test actually is, and what it is not / How to tell a credible aptitude test from a gimmicky quiz / Free vs paid, specifically for the aptitude dimension / Matching the aptitude test to your actual stage / What actually changes when an aptitude read is current, not decades…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: The best career aptitude test…”: What a career aptitude test…; How to tell a credible aptitude…; Free…
- Title attribute: At a glance: The best career aptitude test measures reasoning and…
- Caption (and keep the same point in HTML text): An aptitude test in the strict sense checks how you reason: numerical, verbal, logical, and spatial ability — the same territory classic…
**V2 — Linear process chain or roadmap** (place after the section “How to tell a credible aptitude test from a gimmicky quiz”)
- File: `best-career-aptitude-test-linear-tell-credible-aptitude-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is checkable before you trust a score, using the same discipline a school counsellor would apply to a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Signs the aptitude test is credible / Signs it is a gimmick wearing "aptitude" as a label / Names its reasoning categories explicitly — numerical, verbal, logical, spatial, or a… / Gives you a score or a read per category, not one overall "type" or label. / Explains, in plain language, what each category is actually testing. / Results shift meaningfully based on how you actually answer, not a fixed script. / Is upfront that no aptitude score can guarantee a specific stream, course, or career…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “How to tell a credible aptitude test from a…”: Signs the aptitude test is…; Signs it is a gimmick wearing…; Names its…
- Title attribute: How to tell a credible aptitude test from a gimmicky quiz
- Caption (and keep the same point in HTML text): This is checkable before you trust a score, using the same discipline a school counsellor would apply to a DBDA or CII report — the label…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “Free vs paid, specifically for the aptitude dimension”)
- File: `best-career-aptitude-test-asymmetrical-free-paid-specifically-aptitude.webp` · 1600×1000 WebP under 200 KB
- Teaches: Many providers charge a substantial one-time fee for a formal aptitude battery, often positioned as the…
- On-image text (about 25-40 words, shortened from the page; no new claims): What each layer actually contributes on aptitude specifically / Many providers charge a substantial one-time fee for a formal aptitude battery… / That framing deserves a closer look rather than automatic trust.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Free vs paid, specifically for the aptitude…”: What each layer actually…; Many providers charge a…; That framing…
- Title attribute: Free vs paid, specifically for the aptitude dimension
- Caption (and keep the same point in HTML text): Many providers charge a substantial one-time fee for a formal aptitude battery, often positioned as the "real" or "scientific" option…
**V4 — Chronological timeline** (place after the section “When a free aptitude read is enough, and when it needs a plan built…”)
- File: `best-career-aptitude-test-chronological-free-aptitude-read-enough.webp` · 1600×1000 WebP under 200 KB
- Teaches: A free aptitude read is probably enough if You're early in exploring and mainly want a directional signal on…
- On-image text (about 25-40 words, shortened from the page; no new claims): A free aptitude read is probably enough if / The result is worth taking further if / You're early in exploring and mainly want a directional signal on your reasoning… / The decision isn't urgent, expensive, or tied to a formal institutional requirement yet. / You haven't tried a current, stage-specific aptitude read before. / The decision is expensive, time-pressured, or hard to reverse. / The reasoning-category result conflicts with your interests or what you already suspected.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When a free aptitude read is enough, and when it…”: A free aptitude read is probably…; The result is worth taking…; You're early in…
- Title attribute: When a free aptitude read is enough, and when it needs a plan built…
- Caption (and keep the same point in HTML text): A free aptitude read is probably enough if You're early in exploring and mainly want a directional signal on your reasoning strengths.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-psychometric-test/

**H1:** Career counselling psychometric test - the right free assessment for your stage  
**Type:** bofu · **Search priority:** P3 (0 clicks, 12 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-assessment.webp` is shared by 52 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-assessment.webp` has no title attribute and no caption.
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
| `bofu/hero-assessment.webp` | 97% | eager/high | A student taking an online career assessment on a… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-assessment.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-psychometric-test-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A psychometric test is only useful if it actually fits the decision in front of you.
- On-image text (about 25-40 words, shortened from the page; no new claims): Free psychometric-style assessments by audience / Commonly searched psychometric and aptitude test formats / What a career counselling psychometric test should actually clarify / Why this is more useful than picking a random psychometric test / What to check before trusting any psychometric test result
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling psychometric test…”: Free psychometric-style…; Commonly searched psychometric……
- Title attribute: At a glance: Career counselling psychometric test - the right free…
- Caption (and keep the same point in HTML text): A psychometric test is only useful if it actually fits the decision in front of you.
**V2 — Decision tree** (place after the section “Commonly searched psychometric and aptitude test formats”)
- File: `career-counselling-psychometric-test-decision-commonly-searched-psychometric-aptitude.webp` · 1600×1000 WebP under 200 KB
- Teaches: If you were specifically looking for one of these named formats, here they are - alongside the stage-based…
- On-image text (about 25-40 words, shortened from the page; no new claims): If you were specifically looking for one of these named formats, here they are… / Psychometric Test The most direct match for this search - a starting point that… / › Career Aptitude Test Online One of the most commonly searched assessment…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Commonly searched psychometric and aptitude test…”: If you were specifically looking…; Psychometric Test The most direct…; › Career Aptitude…
- Title attribute: Commonly searched psychometric and aptitude test formats
- Caption (and keep the same point in HTML text): If you were specifically looking for one of these named formats, here they are - alongside the stage-based assessments above, which usually…
**V3 — Decision tree** (place after the section “What a career counselling psychometric test should actually clarify”)
- File: `career-counselling-psychometric-test-decision-career-counselling-psychometric-test.webp` · 1600×1000 WebP under 200 KB
- Teaches: A useful psychometric test does more than describe your personality - it should move a real decision forward.
- On-image text (about 25-40 words, shortened from the page; no new claims): Interest and work-style alignment / Where aptitude and preference support each other / A specific next step, not just a description of yourself / The right assessment for your actual stage / 100% free tests and assessments
- Numbers: 100% free tests and assessments Every assessment on this page is free, updated, practical, and AI-powered, with instant results and no sign-up.
- Alt: Decision tree for “What a career counselling psychometric test…”: Interest and work-style alignment; Where aptitude and preference…; A specific next step, not…
- Title attribute: What a career counselling psychometric test should actually clarify
- Caption (and keep the same point in HTML text): A useful psychometric test does more than describe your personality - it should move a real decision forward.
**V4 — Decision tree** (place after the section “Why this is more useful than picking a random psychometric test”)
- File: `career-counselling-psychometric-test-decision-more-useful-than-picking.webp` · 1600×1000 WebP under 200 KB
- Teaches: These are the contrast points that matter most once you are choosing among several assessment options.
- On-image text (about 25-40 words, shortened from the page; no new claims): These are the contrast points that matter most once you are choosing among… / Others Shift Future Career School Others Guessing which of many…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Why this is more useful than picking a random…”: These are the contrast points…; Others Shift Future Career School…
- Title attribute: Why this is more useful than picking a random psychometric test
- Caption (and keep the same point in HTML text): These are the contrast points that matter most once you are choosing among several assessment options.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
