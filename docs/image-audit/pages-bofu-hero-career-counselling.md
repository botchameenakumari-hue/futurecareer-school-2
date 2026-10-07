# Image audit — service/other pages: bofu-hero-career-counselling

1 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/career-counselling/

**H1:** Career counselling for practical clarity, not generic advice  
**Type:** bofu · **Search priority:** P3 (0 clicks, 14 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-career-counselling.webp` is shared by 1 page(s); acceptable reuse.
4. Hero `hero-career-counselling.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
7. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-career-counselling.webp` | 98% | eager/high | A career counsellor and a client reviewing a… | NO | NO |
| `bofu/context-holistic-framework.webp` | 98% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-career-counselling.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career counselling should help you get clear before you make a bigger wrong turn.
- On-image text (about 25-40 words, shortened from the page; no new claims): What career counselling should actually help you do / Why this is more useful than generic career advice / Where career counselling helps most right now / What strong career counselling should give you / How practical career guidance should work
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for practical…”: What career counselling should…; Why this is more useful than……
- Title attribute: At a glance: Career counselling for practical clarity, not generic…
- Caption (and keep the same point in HTML text): Career counselling should help you get clear before you make a bigger wrong turn.
**V2 — Decision tree** (place after the section “What strong career counselling should give you”)
- File: `career-counselling-decision-strong-career-counselling-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The stronger value is not generic advice in a calmer tone.
- On-image text (about 25-40 words, shortened from the page; no new claims): Practical clarity and profile mapping / Practical path design / Proof of work and income-growth direction / Initial Psychometric Assessment and Career Counseling / Profile and stage mapping before major decisions / Direction clarity based on fit, market reality, and risk / A practical next step instead of generic advice
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What strong career counselling should give you”: Practical clarity and profile…; Practical path design; Proof of work and income-growth…
- Title attribute: What strong career counselling should give you
- Caption (and keep the same point in HTML text): The stronger value is not generic advice in a calmer tone.
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “What better career counselling should change after the first clarity…”)
- File: `career-counselling-asymmetrical-better-career-counselling-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The useful question is not whether someone talked to you.
- On-image text (about 25-40 words, shortened from the page; no new claims): A clearer decision frame / A smaller shortlist of serious directions / A practical next step you can act on / A stronger growth path
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What better career counselling should change…”: A clearer decision frame; A smaller shortlist of serious…; A…
- Title attribute: What better career counselling should change after the first clarity…
- Caption (and keep the same point in HTML text): The useful question is not whether someone talked to you.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “What better counselling should improve after the first clarity layer”)
- File: `career-counselling-asymmetrical-better-counselling-should-improve.webp` · 1600×1000 WebP under 200 KB
- Teaches: Clearer direction is only the start.
- On-image text (about 25-40 words, shortened from the page; no new claims): Decision quality should improve / Growth direction should improve / You should see clearer trade-offs before spending more on the wrong course, degree, or… / You should know which options are genuinely worth serious effort and which ones only look… / You should have a practical next move instead of staying stuck in broad internet advice. / You should see which wrong turns are too expensive to keep repeating. / You should see which high-value skill direction fits your strengths and market reality…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What better counselling should improve after the…”: Decision quality should improve; Growth direction should…
- Title attribute: What better counselling should improve after the first clarity layer
- Caption (and keep the same point in HTML text): Clearer direction is only the start.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
