# Image audit — blog category: portfolio-proof-of-work

1 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/portfolio-proof-of-work/portfolio-building-for-freshers-india/

**H1:** Portfolio building for freshers India: what actually belongs in it  
**Category:** portfolio-proof-of-work · **Words:** 3061 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 1 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 1 other articles, with identical alt text and captions, so they say nothing specific about “Portfolio building for freshers India: what actually…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/portfolio-proof-of-work/portfolio-building-for-freshers-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “What a portfolio…”, “What to show, by field”, “Building real pieces…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 86%, 87%, 88%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `portfolio-proof-of-work-editorial-cover.webp`, `portfolio-proof-of-work-context.webp`, `portfolio-proof-brief.webp`, `portfolio-proof-building.webp`, `portfolio-proof-sequence.webp`, `portfolio-proof-present.webp`, `portfolio-proof-of-work-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `portfolio-building-for-freshers-india.webp`, `portfolio-building-for-freshers-india-detail.webp`, `portfolio-building-for-freshers-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `portfolio-building-for-freshers-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `portfolio-building-for-freshers-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a recent graduate preparing job applications, a modest office desk after hours. Props that belong to “Portfolio building for freshers India: what actually belongs in it”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Portfolio building for freshers India: what actually belongs in it
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `portfolio-building-for-freshers-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Portfolio building for freshers India: what to include by field, how to build genuine pieces from coursework…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on portfolio building for freshers in India / What a portfolio actually needs to prove / What to show, by field / Building real pieces when you have no job yet / How to write up each piece so it reads as real work
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Portfolio building for freshers India: what actually belongs in it”
- Title attribute: At a glance: Portfolio building for freshers India: what actually…
- Caption (also keep the key point in the HTML text): Portfolio building for freshers India: what to include by field, how to build genuine pieces from coursework, where to host them, and the mistakes…
**V2 — Comparison table** (place after the H2 “What to show, by field” #by-field)
- File: `portfolio-building-for-freshers-india-comparison-show-field.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The exact shape of a strong portfolio changes by field, because reviewers in each field are trained to look…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Field | What belongs in the… / Row: Software / web development | Deployed projects with a… / Row: UI/UX and product design | 2-3 full case studies… / Row: Content and copywriting | Published or… / Row: Data and business… | End-to-end case studies… / Row: Marketing / social /… | Campaigns or content you…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “What to show, by field”: Field | What belongs in the…; Software / web development | Deployed…; UI/UX and product design | 2-3 full…
- Title attribute: What to show, by field
- Caption (also keep the key point in the HTML text): The exact shape of a strong portfolio changes by field, because reviewers in each field are trained to look for different things.
**V3 — Comparison table** (place after the H2 “Building real pieces when you have no job yet” #no-job-yet)
- File: `portfolio-building-for-freshers-india-comparison-building-real-pieces-have.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The most common reason freshers avoid starting a portfolio is a belief that it needs client work or a paid…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: What you already have | How to turn it into a… / Row: A final-year or capstone… | Rebuild the weakest part… / Row: A college assignment or… | Strip out anything… / Row: A self-initiated project… | Pick a real, specific… / Row: Unpaid work for a friend… | Treat it with the same… / A tutorial clone submitted with the same brief and the same solution as hundreds of other… / A group assignment shown with no note on which parts were yours.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Building real pieces when you have no job yet”: What you already have | How to turn…; A final-year or capstone… | Rebuild…; A college…
- Title attribute: Building real pieces when you have no job yet
- Caption (also keep the key point in the HTML text): The most common reason freshers avoid starting a portfolio is a belief that it needs client work or a paid role first.
**V4 — Linear process chain or roadmap** (place after the H2 “How to write up each piece so it reads as real work” #writing-up-a-piece)
- File: `portfolio-building-for-freshers-india-linear-write-each-piece-reads.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The write-up is often more important than the piece itself, because it is what turns "I made this" into "here…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): State the problem in one line. Not "a machine learning project," but "a system to flag… / Name your specific role. If it was solo work, say so. If it was a group project, name… / Show one real decision, not just the final output. What you tried first, why it did not… / End with a result or a clear takeaway. A number if you honestly have one, a specific…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “How to write up each piece so it reads as real work”: State the problem in one line. Not "a…; Name your specific role. If it…
- Title attribute: How to write up each piece so it reads as real work
- Caption (also keep the key point in the HTML text): The write-up is often more important than the piece itself, because it is what turns "I made this" into "here is what I can do for you." Keep it…
**V5 — Skill map** (place after the H2 “Where to host and present a portfolio” #where-to-host)
- File: `portfolio-building-for-freshers-india-skill-where-host-present-portfolio.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Where you host a portfolio matters less than what is in it, but it still needs to sit somewhere your field's…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Developers: GitHub for code, a live deployed link where relevant, and sometimes a simple… / Designers: Behance or a personal site built with a no-code tool, structured as case… / Writers: A simple personal site, a dedicated writing-portfolio platform, or a… / Analysts: GitHub for code and notebooks, paired with a short write-up site or document… / A LinkedIn "Featured" section, so anyone reviewing your profile can find your best work…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Skill map for “Where to host and present a portfolio”: Developers: GitHub for code, a live…; Designers: Behance or a personal site…; Writers: A simple personal…
- Title attribute: Where to host and present a portfolio
- Caption (also keep the key point in the HTML text): Where you host a portfolio matters less than what is in it, but it still needs to sit somewhere your field's reviewers actually check.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
