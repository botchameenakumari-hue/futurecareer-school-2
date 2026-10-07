# Site-wide code fixes (do these before the page-by-page work)

These are structural problems found in the code. Page reports assume they are done. Change only what is listed; do not touch unrelated code. Explain each change in the commit message.

## C1. Printed component code on service pages — FIXED
`src/components/bofu/BofuContextVisual.astro` had no opening `---`, so its script was printed as text on every `/services/` page and its `<img src={...}>` rendered as a broken literal. The fence is restored in this branch. Keep a regression check: `node scripts/audit-images.mjs` fails if rendered text contains `Astro.url` or `{`/images`.

## C2. Remove the DOM-relocation hack in `src/layouts/BaseLayout.astro`
Lines about 247-285: `<BlogFallbackVisual />`, `<BofuImage />` and `<BofuContextVisual />` are appended to the end of `<body>`, then inline scripts move them into `#blog-post .post-body`, `main article`, or `<main>`. Problems: the markup is in the wrong place for crawlers and link unfurlers, the fallback group is `display:none` until the script runs, images pop in and shift the layout, and a selector change silently breaks everything.
Fix: place images in the markup where they belong.
- Blog: each article gets its hero at the top of the article and each explanatory figure after the section it explains, inside the article markup (or via one shared `<ArticleFigure>` component that takes `src, alt, title, width, height, caption`).
- Services: add `<BofuImage />` directly after the hero section of each page (or inside the shared hero component), not at the end of `<body>`.
- Delete the two inline scripts and the three conditional renders from `BaseLayout.astro`.

## C3. Retire the placeholder image system
- Stop rendering `src/components/BlogFallbackVisual.astro` on any route (it currently also renders on every `/services/` page using the `career-guidance` category copy).
- Delete the data and generators that feed it once each route has real visuals: `src/data/blog-page-context.json`, `src/data/blog-page-explainers.json`, `scripts/generate-blog-page-cards.cjs`, `scripts/generate-blog-at-a-glance-cards.cjs`.
- Delete the files that are generic or auto-generated: `public/images/blog/category/*` (144 files, 21 MB) and `public/images/blog/page-cards/*` (1,149 files, 58 MB, e.g. `public/images/blog/page-cards/ai-future/how-to-use-ai-at-work-effectively-india.webp`). Do this per category only after every route in that category has its own images, so no page loses its only visual.
- Reuse counts to keep in mind: the 7 `career-options-*` category images are on 202 articles; `college-degrees-*` on 34; `ai-future-*` on 14; `career-guidance-*` on 13 blog pages plus every service page.

## C4. Social previews (og:image / twitter:image)
`BaseLayout.astro` defaults `ogImage` to `/og-image.svg`. 342 blog articles and all service pages therefore advertise an SVG, which most platforms do not render.
- Export a 1200×630 JPG (or PNG) next to every article hero (`<slug>-social.jpg`) and pass it as `ogImage` from the article (the layout already accepts `ogImage`, `ogImageWidth`, `ogImageHeight`; 45 articles already set it).
- Replace the site default with a PNG/JPG (`public/og-image.png`, 1200×630). Keep the SVG only if needed elsewhere.

## C5. Image attributes
- Add a `title` attribute to every content image (205 hand-made blog images lack it; service hero/context images lack it).
- `width`/`height` must equal the real pixel size. Many templates hard-code 1600×1000 while the files are 1600×900, 1600×800, 800×1000 and so on (400 mismatches). Prefer an `<ArticleFigure>` component that reads the size, or generate it with a small script.
- Every explanatory image needs a `<figcaption>`; hero is the only image with `loading="eager"` and `fetchpriority="high"`.
- Keep `width:100%; height:auto` and add `max-width:100%` to figure containers; check there is no horizontal overflow at 390 px.

## C6. File hygiene
- Rename `visual-N.webp` (+ `visual-N-social.jpg`) in `ai-future/artificial-intelligence-career-paths`, `freelancing-business/best-freelance-skills-in-demand-india`, `freelancing-business/how-to-start-freelancing` to meaningful names.
- `ai-future/artificial-intelligence-career-paths` references `visual-7.webp`, which does not exist. Create it or remove the reference.
- Export images at their native aspect ratio. The three `visual-N` sets are centre-cropped from tall infographics to 16:9, cutting off steps and titles.
- Compress: 42 authored images are over 250 KB (target under 200 KB; 150 KB for heroes).
- Two pairs share identical files; give each article its own: `best-career-options-with-high-salary` vs `best-skills-for-high-salary-in-india`; `career-after-bcom-in-india` vs `career-options-after-12th-commerce`.

## C7. Service media components
- `src/components/bofu/BofuImage.astro`: chooses the hero from `src/config/bofuImages.ts`. Keep, but render it inside the page hero and give it `alt` (exists), `title`, and `figcaption`.
- `src/components/bofu/BofuContextVisual.astro`: keyword → image choice is a long regex chain. 19 pages get a different image than a clean keyword mapping would give (listed in the page reports). Move the mapping into `src/config/bofuImages.ts` as an explicit slug → image table, add title and caption.
- Preserve `session-flow.svg` and `skill-portfolio-chain.svg` (currently shown on 52 assessment pages and the `career-guidance` page); add title and caption.

## C8. Brand-framework image repetition
The "4-Checkpoint Protocol + 3 Gates" infographic appears on about 25 articles (checkpoint/gates files). Keep it only where the article actually uses the framework; elsewhere replace it with an article-specific visual (the resume page, for example).

## C9. Guard rails
- `node scripts/audit-images.mjs --strict` (added in this branch) should pass at the end of the work. Add it to `pnpm verify` once it passes.
- Add to `scripts/check-public-copy.mjs`: fail if rendered text contains `Astro.url`, `const path =` or a literal `{` followed by a backtick.
