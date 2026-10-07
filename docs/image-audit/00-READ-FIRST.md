# Visual system audit — read this first

Audit date: 2026-10-07. Method: every blog route and every service/other route was rendered (`pnpm build`), every `<img>` was extracted with its attributes and real file, every image file was checked for size, duplicates and missing files, **all 63 blog pages that carry hand-made images were viewed one by one**, and the article text of every page was parsed to plan new visuals.

## How to use this folder

1. Give ChatGPT `ORIGINAL-BRIEF.md` (the owner's brief) and `01-SITEWIDE-CODE-FIXES.md` first. Do the site-wide fixes before page work, because they change how images are rendered.
2. Then submit **one page section at a time** from the category files below (copy from the `###` heading to the next `---`). Each section has: current images, findings, and **Required actions** with the exact file name, scene brief, on-image text, allowed numbers, alt, title and caption for every image to create.
3. After each batch run `pnpm build && node scripts/audit-images.mjs --scope=blog` (or `--scope=services`). The goal state is in `02-ACCEPTANCE-CHECKS.md`.
4. Work in priority order: pages marked **P1** have the most search impressions/clicks (blog: 82 P1 pages, 152 P2 pages).

Files:
- `blog-<category>.md` — 383 blog pages, one file per category, pages sorted P1 first. `blog-summary.csv` has one row per page.
- `pages-*.md` — 308 service and other pages (assessments, audience, session, cost, evaluation, locations, hubs, career resources, blog hubs, compass, home, about). `pages-summary.csv` has one row per page.

## Bottom line: the implementation does not meet the brief

| Brief requirement | What exists |
|---|---|
| Natural hero for every eligible blog page | **323 of 383 blog pages have no article-specific hero.** 63 pages have hand-made images; of those, 28 have a natural human hero, 30 a graphic/flat-lay/illustration hero, 2 a cropped fragment and 3 none. The other 320 pages show a category-level stock image shared with up to 202 other articles. |
| 5-7 explanatory supporting visuals | Only about 55 pages have 5 or more supporting images. 317 pages have none that explain anything: they get 3 auto-generated "page-card" images (headings in boxes, scrambled/truncated text) plus 7 shared category images. |
| Non-hero visuals must explain, not decorate | Of the 63 authored pages, 36 are mostly text-led infographics (good), 10 are mixed and 14 are mostly paper-prop scenes with one-word labels (decorative), 3 are cropped/broken. |
| No excessive category-level reuse | **One set of 7 images is repeated on 202 career-options articles**, other sets on 34 college-degrees, 14 ai-future, 13 career-guidance pages and so on. The same 3 generic images appear on 215 service pages. |
| Alt, title, caption on every image | 205 hand-made images have no title attribute; all hero/context service images have no title or caption; 11 images have no caption. |
| Correct width/height | 400 image tags have width/height attributes whose ratio differs from the real file (e.g. attr 1600×1000, file 1600×900). |
| No broken references | **215 service pages render a broken image**: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` (167 pages) and `/images/blog/category/assessments-at-a-glance.webp` (48 pages) do not exist. On the blog, `/images/blog/ai-future/artificial-intelligence-career-paths/visual-7.webp` is missing. |
| Search and social previews | 342 blog pages use `/og-image.svg` as og:image/twitter:image (SVG is not displayed by most social platforms) instead of their own hero. |
| Wired into the page, responsive | Images are not placed in the page markup. They are appended at the end of `<body>` and **moved by an inline script** in `BaseLayout.astro`; the generic group is `display:none` until that script runs. Without JavaScript (crawlers, unfurlers) the images are absent or at the bottom. |
| Service pages: contextual + explanatory visuals | Every service/assessment page gets the same 3 generic blog-category images, one shared hero, one shared context image, and (assessments) two shared SVGs. Nothing is specific to the keyword or the page content. 90 pages have no images at all (career resources 43, blog hubs 26, home, about, compass, contact). |
| Preserve existing working service assets | Done: hero/city/context WebPs and the two SVGs are kept. |

## Other defects found while auditing

- **Fixed already (commit in this branch):** `src/components/bofu/BofuContextVisual.astro` was missing its opening `---`, so on every `/services/` page the component's JavaScript was printed as visible text and its image never rendered (broken since commit 711280e on 6 Oct). The fence is restored; the context images now render.
- 3 pages carry centre-cropped tall infographics named `visual-N.webp` (steps and titles cut off): `artificial-intelligence-career-paths`, `best-freelance-skills-in-demand-india`, `how-to-start-freelancing`.
- Two pairs of pages share identical image files: `best-career-options-with-high-salary` ≡ `best-skills-for-high-salary-in-india` (6 images), `career-options-after-12th-commerce` borrows 5 images from `career-after-bcom-in-india`.
- The "4-Checkpoint Protocol + 3 Gates" infographic is repeated on about 25 articles, including topics where it does not fit (resume checklist).
- 42+ authored images exceed 250 KB; 297 image tags in total are over 250 KB.
- 1,149 generated page-card files (58 MB) and 144 category files (21 MB) exist only to feed the placeholder system.
- Many infographics contain statistics (salary bands, seats, odds). The page reports flag numbers read from the images that do not appear in the article; every figure still needs a source check before publication (brief: never invent statistics).
- The same model/background is used on every image of some articles (`interview-preparation-for-freshers-india`, `is-dentistry-a-good-career-in-india`), and many articles use the same desk-with-plants flat-lay: repetition the brief asks to avoid.

## Totals of work still required (from the page reports)

- Blog pages needing work: 383 (RED 323, AMBER 60).
- Natural heroes to create: **326** (326 blog pages; 57 already have an acceptable hero).
- Explanatory supporting visuals to create for blogs: **1902** (target 5-7 per article, more for long ones).
- Service/other pages: every one needs the generic images removed and keyword-specific explanatory visuals; the per-page lists give 3-4 each.
- Realistic plan: do P1 pages first (82 blog pages plus the P1 service pages), then P2, then P3. Do not attempt all in one pass.

Service/other page counts: bofu 119, assessment 55, location 47, resource 43, blog-hub 26, compass 6, about 3, other 3, home 1, assessment-hub 1, resource-hub 1, services-hub 1, bofu-hub 1, locations-hub 1.

## Coverage (double-checked)

- **Blog:** all 383 routes are in the reports (`blog-summary.csv` has 383 rows). 38 of them are on the owner's earlier exclusion list (from the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1); they are analysed too, but each section is marked "ON THE OWNER'S EXCLUSION LIST" so ChatGPT does not touch them without confirmation. 3 of the excluded routes (`cybersecurity-roadmap-india`, `banking-sector-career-india`, `career-options-after-10th`) have no content images at all, which is probably unintended.
- **Service and other pages:** all 324 rendered non-blog routes were extracted; 308 are in the reports. The 16 left out are internal tools (dashboards, design demos, topics index, landing prototype), which are not part of the visual brief.
- **Browser check:** all 690 real (non-redirect) routes, including all 383 blog pages, were loaded in headless Chromium at 390 px wide: 0 pages have horizontal overflow, and 0 failed to load. 84 pages render a broken image after JavaScript runs (mostly the two missing `*-at-a-glance.webp` files, plus 3 hero social JPGs referenced with absolute URLs).
- **Images viewed by eye:** every image on the 63 hand-made blog pages; the 3 pages' heroes; all 49 service WebPs and the 4 SVGs; contact sheets of 96 of the 144 generic category images (the other 48 are the same templates for the remaining categories); and page-card samples.
- **Text and numbers:** OCR was run on every hand-made blog image (399 files) to read in-image text and statistics. OCR is noisy; flagged numbers are leads.

## Additional defects found in the double-check

- The home page hot-links 14 Unsplash photos (`https://images.unsplash.com/...`), including portraits of real people. They are not owned assets, are not recorded with a licence, and one fails to load in my check. They are listed in `pages-home.md`.
- `how-to-choose-a-career-after-12th` uses two hand-made SVGs (`/blog/*-career-lane-map.svg`, `*-decision-scorecard.svg`) in addition to the WebPs; these are fine as diagrams but need alt/title/caption review.
- The 3 cropped sets: the heroes of `artificial-intelligence-career-paths` (and the supporting images) are also centre-cropped infographics, so that page has no real hero.
- Alt text on the hand-made images is generally fine (only 2 over 160 characters, none under 40). Captions exist on 381 of 394; titles are missing on most. These are not the main problem.

## What this audit did not verify

Whether each infographic statistic matches an outside source (the reports list the numbers to check); the visual quality of the 48 category images I did not view (they follow the same templates); a real screenshot comparison of each page's rendered layout (only measurable layout rules were checked). The visual briefs in each page report are generated from that page's own headings, lists, tables and number-bearing sentences, so they never add claims, but ChatGPT or a human must still choose final wording, check the format fits the content, and fix any awkward section selection before producing the image.
