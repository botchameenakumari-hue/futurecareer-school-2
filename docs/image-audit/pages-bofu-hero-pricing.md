# Image audit — service/other pages: bofu-hero-pricing

3 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/career-counselling-fees/

**H1:** Career counselling fees: what it actually costs, and what a package covers  
**Type:** bofu · **Search priority:** P2 (1 clicks, 105 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-pricing.webp` is shared by 3 page(s); acceptable reuse.
4. Hero `hero-pricing.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 96% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-pricing-value.webp` has no title attribute and no caption.
7. Context visual reuse: `context-pricing-value.webp` appears on 5 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 93% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 94% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 95% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-pricing.webp` | 96% | eager/high | Simple plan cards and a notebook showing career… | NO | NO |
| `bofu/context-pricing-value.webp` | 97% | lazy | A pricing visual showing clarity, a skill plan… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-pricing.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-fees-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling fees here run from Rs 250 for a first student 1-on-1 session up to Rs 12000 for a full…
- On-image text (about 25-40 words, shortened from the page; no new claims): Career counselling fees, broken down exactly / Is career counselling affordable, or is the fee a stretch for what… / What actually counts as a career counselling package here / Is career counselling sold as a subscription / What the fee is actually paying for
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling fees: what it…”: Career counselling fees, broken…; Is career counselling…
- Title attribute: At a glance: Career counselling fees: what it actually costs, and…
- Caption (and keep the same point in HTML text): Career counselling fees here run from Rs 250 for a first student 1-on-1 session up to Rs 12000 for a full year of continuous guidance.
**V2 — Comparison table** (place after the section “Career counselling fees, broken down exactly”)
- File: `career-counselling-fees-comparison-career-counselling-fees-broken.webp` · 1600×1000 WebP under 200 KB
- Teaches: Vague pricing ("contact us for a quote") is one of the most common frustrations people run into while…
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time… / Row: Working-professional… | Rs 3000 (limited-time…
- Numbers: Plan Price Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Student continuous guidance package (year, includes the 1-on-1 plus up to 24 small-group sessions) Rs 12000 (limited-time price, down from Rs 29000) Working-professional 1-on-1 se (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Comparison table for “Career counselling fees, broken down exactly”: Plan | Price; Student 1-on-1 session | Rs 250…; Student continuous… | Rs 12000…
- Title attribute: Career counselling fees, broken down exactly
- Caption (and keep the same point in HTML text): Vague pricing ("contact us for a quote") is one of the most common frustrations people run into while comparing career counselling fees.
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the section “Is career counselling affordable, or is the fee a stretch for what…”)
- File: `career-counselling-fees-stat-career-counselling-affordable-fee.webp` · 1600×1000 WebP under 200 KB
- Teaches: "Affordable" only means something next to a comparison, so here is the honest one.
- On-image text (about 25-40 words, shortened from the page; no new claims): "Affordable" only means something next to a comparison, so here is the honest… / Many career counselling providers in India charge a large one-time fee, often… / That is where "career counselling is expensive" as a search complaint usually…
- Numbers: Weighed against the cost of a wrong-fit degree, a loan-funded course with a weak return, or a stalled career pivot, a Rs 250 or Rs 3000 session is a small outlay. (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Stat panel or bar chart (only the numbers listed) for “Is career counselling affordable, or is the fee a…”: "Affordable" only means something…; Many career…
- Title attribute: Is career counselling affordable, or is the fee a stretch for what…
- Caption (and keep the same point in HTML text): "Affordable" only means something next to a comparison, so here is the honest one.
**V4 — Chronological timeline** (place after the section “What actually counts as a career counselling package here”)
- File: `career-counselling-fees-chronological-actually-counts-career-counselling.webp` · 1600×1000 WebP under 200 KB
- Teaches: "Package" gets used loosely across the market to mean anything from a single session to a vague multi-month…
- On-image text (about 25-40 words, shortened from the page; no new claims): 1-on-1 session vs the continuous-guidance package / "Package" gets used loosely across the market to mean anything from a single… / If you have been searching for a career coaching package online, this is the…
- Numbers: Priced at Rs 250 for students and Rs 3000 for working professionals. | The continuous-guidance package The 1-on-1 plus up to 24 small-group sessions spread across the year, at Rs 12000 for students. (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Chronological timeline for “What actually counts as a career counselling…”: 1-on-1 session vs the…; "Package" gets used loosely…; If you have been searching…
- Title attribute: What actually counts as a career counselling package here
- Caption (and keep the same point in HTML text): "Package" gets used loosely across the market to mean anything from a single session to a vague multi-month bundle with unclear contents.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/affordable-career-counselling/

**H1:** Affordable career counselling: what "affordable" should actually buy you  
**Type:** bofu · **Search priority:** P3 (0 clicks, 19 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-pricing.webp` is shared by 3 page(s); acceptable reuse.
4. Hero `hero-pricing.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 96% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-pricing-value.webp` has no title attribute and no caption.
7. Context visual reuse: `context-pricing-value.webp` appears on 5 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 92% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 93% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 95% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-pricing.webp` | 96% | eager/high | Simple plan cards and a notebook showing career… | NO | NO |
| `bofu/context-pricing-value.webp` | 97% | lazy | A pricing visual showing clarity, a skill plan… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-pricing.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `affordable-career-counselling-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Affordable career counselling is real here, but the word only means something next to a comparison.
- On-image text (about 25-40 words, shortened from the page; no new claims): Affordable career counselling, compared to the real alternatives / What the price is actually buying, compared to the alternative / Is a low price the same as low quality / When paying is actually worth it, and when it is not yet / Once you know which side of that comparison you are on
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: At-a-glance summary card for this page for “At a glance: Affordable career counselling: what…”: Affordable career counselling…; What the price is actually…; Is…
- Title attribute: At a glance: Affordable career counselling: what "affordable" should…
- Caption (and keep the same point in HTML text): Affordable career counselling is real here, but the word only means something next to a comparison.
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “Affordable career counselling, compared to the real alternatives”)
- File: `affordable-career-counselling-asymmetrical-affordable-career-counselling-compared.webp` · 1600×1000 WebP under 200 KB
- Teaches: A price only tells you something once you know what it is being measured against.
- On-image text (about 25-40 words, shortened from the page; no new claims): A price only tells you something once you know what it is being measured… / Here are the two things people are usually actually comparing career… / A private coach or consultant Many independent career coaches and consultants…
- Numbers: A first 1-on-1 session runs Rs 250 (limited-time price, down from Rs 3000) for students and Rs 3000 (limited-time price, down from Rs 5000) for working professionals, with nothing added on top. | Weighed against that kind of outcome, a Rs 250 or Rs 3000 session is a small outlay for a decision that is expensive, time-pressured, or hard to reverse. (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Asymmetrical pros-and-cons comparison for “Affordable career counselling, compared to the…”: A price only tells you something…; Here are the two things…
- Title attribute: Affordable career counselling, compared to the real alternatives
- Caption (and keep the same point in HTML text): A price only tells you something once you know what it is being measured against.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “What the price is actually buying, compared to the alternative”)
- File: `affordable-career-counselling-asymmetrical-price-actually-buying-compared.webp` · 1600×1000 WebP under 200 KB
- Teaches: Not every provider adds the same thing behind a similar-looking price.
- On-image text (about 25-40 words, shortened from the page; no new claims): Not every provider adds the same thing behind a similar-looking price. / This is the difference that matters when you are judging whether a session is… / Others Shift Future Career School Others Judging value by the lowest price on…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Asymmetrical pros-and-cons comparison for “What the price is actually buying, compared to…”: Not every provider adds the same…; This is the difference that……
- Title attribute: What the price is actually buying, compared to the alternative
- Caption (and keep the same point in HTML text): Not every provider adds the same thing behind a similar-looking price.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “When paying is actually worth it, and when it is not yet”)
- File: `affordable-career-counselling-asymmetrical-paying-actually-worth-yet.webp` · 1600×1000 WebP under 200 KB
- Teaches: A paid session is worth it now if A wrong choice here (degree, course, pivot) would cost far more than the…
- On-image text (about 25-40 words, shortened from the page; no new claims): A paid session is worth it now if / It is worth waiting on if / A wrong choice here (degree, course, pivot) would cost far more than the session itself. / The decision is time-pressured or hard to reverse once made. / The decision is small, early, or easily reversible. / You are comparing options in the abstract rather than facing an actual choice right now.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Asymmetrical pros-and-cons comparison for “When paying is actually worth it, and when it is…”: A paid session is worth it now if; It is worth waiting on if; A…
- Title attribute: When paying is actually worth it, and when it is not yet
- Caption (and keep the same point in HTML text): A paid session is worth it now if A wrong choice here (degree, course, pivot) would cost far more than the session itself.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-cost/

**H1:** How much does career counselling cost?  
**Type:** bofu · **Search priority:** P3 (0 clicks, 1 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-pricing.webp` is shared by 3 page(s); acceptable reuse.
4. Hero `hero-pricing.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 96% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-pricing-value.webp` has no title attribute and no caption.
7. Context visual reuse: `context-pricing-value.webp` appears on 5 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 93% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 94% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 95% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-pricing.webp` | 96% | eager/high | Simple plan cards and a notebook showing career… | NO | NO |
| `bofu/context-pricing-value.webp` | 97% | lazy | A pricing visual showing clarity, a skill plan… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-pricing.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-cost-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: How much does career counselling cost depends heavily on what is bundled into the price: whether extras are…
- On-image text (about 25-40 words, shortened from the page; no new claims): What career counselling typically costs across the market / What actually drives the price, beyond the headline number / What career counselling costs here, in exact numbers / What the cost is actually paying for / Is the higher end of the market worth paying for
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: At-a-glance summary card for this page for “At a glance: How much does career counselling…”: What career counselling typically…; What actually drives the…
- Title attribute: At a glance: How much does career counselling cost?
- Caption (and keep the same point in HTML text): How much does career counselling cost depends heavily on what is bundled into the price: whether extras are bundled in or billed…
**V2 — Framework cards** (place after the section “What actually drives the price, beyond the headline number”)
- File: `career-counselling-cost-framework-actually-drives-price-beyond.webp` · 1600×1000 WebP under 200 KB
- Teaches: A handful of structural choices explain most of the spread in career counselling cost, more than provider…
- On-image text (about 25-40 words, shortened from the page; no new claims): Extras: bundled in or billed separately / Format: one-off session or ongoing package / Billed separately, often the largest single line item before counselling even starts. / Bundled in or clearly itemised, so the paid portion is the actual guidance conversation. / A single session resolves one specific decision at one price. / An ongoing package spreads a larger total cost across the year, usually for people whose…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Framework cards for “What actually drives the price, beyond the…”: Extras: bundled in or billed…; Format: one-off session or…; Billed separately, often the…
- Title attribute: What actually drives the price, beyond the headline number
- Caption (and keep the same point in HTML text): A handful of structural choices explain most of the spread in career counselling cost, more than provider "quality" does on its own.
**V3 — Comparison table** (place after the section “What career counselling costs here, in exact numbers”)
- File: `career-counselling-cost-comparison-career-counselling-costs-here.webp` · 1600×1000 WebP under 200 KB
- Teaches: Against that market backdrop, here are the real prices, with nothing added on top at checkout and no hidden…
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time… / Row: Working-professional… | Rs 3000 (limited-time…
- Numbers: Plan Price Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Student continuous guidance package (year, includes the 1-on-1 plus up to 24 small-group sessions) Rs 12000 (limited-time price, down from Rs 29000) Working-professional 1-on-1 se (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Comparison table for “What career counselling costs here, in exact…”: Plan | Price; Student 1-on-1 session | Rs 250…; Student continuous… | Rs 12000…
- Title attribute: What career counselling costs here, in exact numbers
- Caption (and keep the same point in HTML text): Against that market backdrop, here are the real prices, with nothing added on top at checkout and no hidden extras inside them.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the section “Common cost objections, answered honestly”)
- File: `career-counselling-cost-stat-common-cost-objections-answered.webp` · 1600×1000 WebP under 200 KB
- Teaches: "It feels expensive for a conversation" Weighed against the cost of a wrong-fit degree, a loan-funded course…
- On-image text (about 25-40 words, shortened from the page; no new claims): "It feels expensive for a conversation" / "Cheaper providers must be worse" / It is still real money, though, so it is worth spending once the decision is…
- Numbers: "It feels expensive for a conversation" Weighed against the cost of a wrong-fit degree, a loan-funded course with a weak return, or a stalled pivot, a Rs 250 or Rs 3000 session is a small outlay. (prices must match src/config/guidancePlans.ts exactly: student 1-on-1 Rs 250 (crossed Rs 3000), professional 1-on-1 Rs 3000 (crossed Rs 5000), student continuous Rs 12000 (crossed Rs 29000))
- Alt: Stat panel or bar chart (only the numbers listed) for “Common cost objections, answered honestly”: "It feels expensive for a…; "Cheaper providers must be…
- Title attribute: Common cost objections, answered honestly
- Caption (and keep the same point in HTML text): "It feels expensive for a conversation" Weighed against the cost of a wrong-fit degree, a loan-funded course with a weak return, or a…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
