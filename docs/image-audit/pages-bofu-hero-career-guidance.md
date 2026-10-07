# Image audit — service/other pages: bofu-hero-career-guidance

1 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/career-guidance/

**H1:** Career guidance for practical direction, not generic advice  
**Type:** bofu · **Search priority:** P2 (0 clicks, 46 impressions) · **Rendered images:** 7 (3 generic category, 1 hero, 1 context, 2 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-career-guidance.webp` is shared by 1 page(s); acceptable reuse.
4. Hero `hero-career-guidance.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
7. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
8. SVG diagrams present (`session-flow.svg`, `skill-portfolio-chain.svg`): preserve them; add alt/title/caption if missing.
9. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 95% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-career-guidance.webp` | 97% | eager/high | A guidance roadmap from options to a skill-first… | NO | NO |
| `bofu/session-flow.svg` | 97% | lazy | Five-stage career guidance session flow from… | NO | NO |
| `bofu/skill-portfolio-chain.svg` | 98% | lazy | Skill portfolio chain from strengths to financial… | NO | NO |
| `bofu/context-holistic-framework.webp` | 98% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-career-guidance.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career guidance should move you from confusion to a decision you can act on before the next wrong turn gets…
- On-image text (about 25-40 words, shortened from the page; no new claims): What strong career guidance should give you / Why this is more useful than generic career advice / When career guidance becomes useful / What career guidance should actually help you do / How practical career guidance should work
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance for practical…”: What strong career guidance…; Why this is more useful than…; When…
- Title attribute: At a glance: Career guidance for practical direction, not generic…
- Caption (and keep the same point in HTML text): Career guidance should move you from confusion to a decision you can act on before the next wrong turn gets expensive.
**V2 — Chronological timeline** (place after the section “When career guidance becomes useful”)
- File: `career-guidance-chronological-career-guidance-becomes-useful.webp` · 1600×1000 WebP under 200 KB
- Teaches: Career guidance matters when the next move feels important, expensive, delayed by confusion, or no longer…
- On-image text (about 25-40 words, shortened from the page; no new claims): This is for you if / This is not for you if / You are confused about direction and need a practical next step. / You want clearer skill-path and career-path decisions before committing harder. / You want more complete guidance than random browsing, public videos, or generic advice… / Your situation does not fit one narrow label and you need a practical answer that can… / You want a guaranteed job outcome.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career guidance becomes useful”: This is for you if; This is not for you if; You are confused about direction…
- Title attribute: When career guidance becomes useful
- Caption (and keep the same point in HTML text): Career guidance matters when the next move feels important, expensive, delayed by confusion, or no longer solvable through generic internet…
**V3 — Asymmetrical pros-and-cons comparison** (place after the section “What better career guidance should change after the first clarity…”)
- File: `career-guidance-asymmetrical-better-career-guidance-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: The useful question is not whether someone talked to you.
- On-image text (about 25-40 words, shortened from the page; no new claims): A clearer decision frame / A smaller shortlist of serious directions / A practical next step you can act on / A stronger growth path
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What better career guidance should change after…”: A clearer decision frame; A smaller shortlist of serious…; A…
- Title attribute: What better career guidance should change after the first clarity…
- Caption (and keep the same point in HTML text): The useful question is not whether someone talked to you.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “What better guidance should improve after the first clarity layer”)
- File: `career-guidance-asymmetrical-better-guidance-should-improve.webp` · 1600×1000 WebP under 200 KB
- Teaches: Clearer direction is only the start.
- On-image text (about 25-40 words, shortened from the page; no new claims): Decision quality should improve / Growth direction should improve / You should see clearer trade-offs before spending more on the wrong course, degree, or… / You should know which options are genuinely worth serious effort and which ones only look… / You should have a practical next move instead of staying stuck in broad internet advice. / You should see which wrong turns are too expensive to keep repeating. / You should see which high-value skill direction fits your strengths and market reality…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What better guidance should improve after the…”: Decision quality should improve; Growth direction should improve…
- Title attribute: What better guidance should improve after the first clarity layer
- Caption (and keep the same point in HTML text): Clearer direction is only the start.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
