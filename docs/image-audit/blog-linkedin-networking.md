# Image audit — blog category: linkedin-networking

1 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/linkedin-networking/linkedin-profile-tips-for-freshers-india/

**H1:** LinkedIn profile tips for freshers in India: build a profile that gets found, not just finished  
**Category:** linkedin-networking · **Words:** 3436 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 11 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/linkedin-networking/linkedin-profile-tips-for-freshers-india/linkedin-profile-tips-for-freshers-india-cover.webp

**Findings**
1. 7 authored images on the page (hero + 6 supporting).
2. Hero is an illustrated profile with magnifier. Good, readable infographics.
3. Corner slogans are decorative.
4. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
5. 7 of 7 images have no title attribute.
6. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `linkedin-profile-tips-for-freshers-india-headline-formula.webp`: 686; `linkedin-profile-tips-for-freshers-india-about-section.webp`: 900. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `linkedin-networking/linkedin-profile-tips-for-freshers-india/linkedin-profile-tips-for-freshers-india-cover.webp` | 1600x900 | 1600x900 | eager | 16% | no title attr |
| `linkedin-networking/linkedin-profile-tips-for-freshers-india/linkedin-profile-tips-for-freshers-india-profile-problems.webp` | 1122x1402 | 1122x1402 | lazy | 21% | no title attr |
| `linkedin-networking/linkedin-profile-tips-for-freshers-india/linkedin-profile-tips-for-freshers-india-headline-formula.webp` | 1122x1402 | 1122x1402 | lazy | 35% | no title attr |
| `linkedin-networking/linkedin-profile-tips-for-freshers-india/linkedin-profile-tips-for-freshers-india-about-section.webp` | 1122x1402 | 1122x1402 | lazy | 38% | no title attr |
| `linkedin-networking/linkedin-profile-tips-for-freshers-india/linkedin-profile-tips-for-freshers-india-featured-pins.webp` | 1122x1402 | 1122x1402 | lazy | 45% | no title attr |
| `linkedin-networking/linkedin-profile-tips-for-freshers-india/linkedin-profile-tips-for-freshers-india-network-without-spam.webp` | 1122x1402 | 1122x1402 | lazy | 55% | no title attr |
| `linkedin-networking/linkedin-profile-tips-for-freshers-india/linkedin-profile-tips-for-freshers-india-open-to-work.webp` | 1122x1402 | 1122x1402 | lazy | 60% | no title attr |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `linkedin-profile-tips-for-freshers-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `linkedin-profile-tips-for-freshers-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a recent graduate preparing job applications, a shared neighbourhood workspace. Props that belong to “LinkedIn profile tips for freshers in India: build a profile that gets found…”: a printed resume, a job description, a notebook, a phone. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: LinkedIn profile tips for freshers in India: build a profile that…
- Caption: one sentence tying the scene to the article's decision.
2. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
3. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
