# Image audit — blog category: interviews

1 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/interviews/interview-preparation-for-freshers-india/

**H1:** Interview preparation for freshers in India: what to do when you have no work history  
**Category:** interviews · **Words:** 3587 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 4 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/interviews/interview-preparation-for-freshers-india/interview-preparation-for-freshers-india-cover.webp

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 6 authored images on the page (hero + 5 supporting).
2. The same woman and the same sofa/background appear on every image, so the set is repetitive; vary the scene.
3. Corner slogans such as "Same Potential, A Brighter Tomorrow" are decorative filler.
4. 6 of 6 images have no title attribute.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `interviews/interview-preparation-for-freshers-india/interview-preparation-for-freshers-india-cover.webp` | 1600x900 | 1600x900 | eager | 16% | no title attr |
| `interviews/interview-preparation-for-freshers-india/interview-preparation-for-freshers-india-interview-flow.webp` | 1122x1402 | 1122x1402 | lazy | 25% | no title attr |
| `interviews/interview-preparation-for-freshers-india/interview-preparation-for-freshers-india-tell-me-about-yourself.webp` | 1122x1402 | 1122x1402 | lazy | 34% | no title attr |
| `interviews/interview-preparation-for-freshers-india/interview-preparation-for-freshers-india-star-framework.webp` | 1122x1402 | 1122x1402 | lazy | 40% | no title attr |
| `interviews/interview-preparation-for-freshers-india/interview-preparation-for-freshers-india-why-hire-you.webp` | 1122x1402 | 1122x1402 | lazy | 48% | no title attr |
| `interviews/interview-preparation-for-freshers-india/interview-preparation-for-freshers-india-prep-plan.webp` | 1122x1402 | 1122x1402 | lazy | 73% | no title attr |

**Required actions**
1. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
2. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
