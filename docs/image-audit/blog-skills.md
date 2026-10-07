# Image audit — blog category: skills

13 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/skills/best-skills-for-commerce-students-to-learn/

**H1:** Best skills for commerce students to learn: the stack that actually pays  
**Category:** skills · **Words:** 5543 · **H2 sections:** 18 · **Search priority:** P1 (7 clicks, 862 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 11 other articles, with identical alt text and captions, so they say nothing specific about “Best skills for commerce students to learn: the stack that…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skills/best-skills-for-commerce-students-to-learn*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Why the commerce degree…”, “The 5 skill groups…”, “Excel and financial…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skills-editorial-cover.webp`, `skills-context.webp`, `skills-stack.webp`, `skills-practice.webp`, `skills-roadmap.webp`, `skills-feedback.webp`, `skills-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-skills-for-commerce-students-to-learn.webp`, `best-skills-for-commerce-students-to-learn-detail.webp`, `best-skills-for-commerce-students-to-learn-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `best-skills-for-commerce-students-to-learn-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-skills-for-commerce-students-to-learn-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a Class 12 or first-year medical aspirant, a family dining table in the evening. Props that belong to “Best skills for commerce students to learn: the stack that actually pays”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best skills for commerce students to learn: the stack that actually…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-skills-for-commerce-students-to-learn-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The best skills for commerce students to learn are Excel and financial modelling, GST and accounting…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / Why the commerce degree alone is not enough anymore / The 5 skill groups worth building / Group 1: Excel and financial modelling / Group 2: GST, Tally, and accounting software
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best skills for commerce students to learn: the stack that actually…”
- Title attribute: At a glance: Best skills for commerce students to learn: the stack…
- Caption (also keep the key point in the HTML text): The best skills for commerce students to learn are Excel and financial modelling, GST and accounting software, data analytics, digital marketing, and…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The 5 skill groups worth building” #skill-groups)
- File: `best-skills-for-commerce-students-to-learn-asymmetrical-skill-groups-worth-building.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A long list of tool names is not useful by itself, because tools change every few years while the underlying…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A long list of tool names is not useful by itself, because tools change every… / Start with the skill group, then pick the specific tool that matches it today. / Group 1 Excel and financial modelling The single most requested hard skill in…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The 5 skill groups worth building”: A long list of tool names is not…; Start with the skill group, then pick…; Group 1…
- Title attribute: The 5 skill groups worth building
- Caption (also keep the key point in the HTML text): A long list of tool names is not useful by itself, because tools change every few years while the underlying skill groups stay stable.
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Group 3: Data analytics and Power BI” #data-analytics)
- File: `best-skills-for-commerce-students-to-learn-stat-group-data-analytics-power.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: You do not need a computer science background to become data-literate as a commerce student.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You do not need a computer science background to become data-literate as a… / Most business analyst, operations analyst, and data-analyst roles inside… / The official Microsoft Power BI Data Analyst Associate exam (PL-300) costs…
- Numbers: use ONLY these facts from the article (exact values, no new ones): The official Microsoft Power BI Data Analyst Associate exam (PL-300) costs roughly Rs 4,800-5,000, and a full structured training track, if you want guided learning instead of self-study, typically runs Rs 10,000-25,000. | A data analyst role in India realistically ranges from roughly Rs 3.5 LPA for a fresher to Rs 15-30 LPA at senior or lead level, and certified Power BI professionals report earning roughly 10-15% more than non-certified peers doing similar work.
- Alt: Stat panel or bar chart (only the numbers listed) for “Group 3: Data analytics and Power BI”: You do not need a computer science…; Most business analyst…
- Title attribute: Group 3: Data analytics and Power BI
- Caption (also keep the key point in the HTML text): You do not need a computer science background to become data-literate as a commerce student.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Group 4: Digital marketing” #digital-marketing)
- File: `best-skills-for-commerce-students-to-learn-stat-group-digital-marketing.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Digital marketing is one of the more accessible skill groups for a commerce student to test early, partly…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Digital marketing is one of the more accessible skill groups for a commerce… / The Google Digital Marketing and E-commerce certificate, delivered through… / No stream requirement applies; commerce, science, and arts students are all…
- Numbers: use ONLY these facts from the article (exact values, no new ones): The Google Digital Marketing and E-commerce certificate, delivered through Coursera, costs roughly Rs 1,150-3,500 for the subscription period and can be completed in under 10 hours a week over about five to six months, faster if you push the pace. | Freshers with a real certificate and at least one campaign case study typically start around Rs 3.5-6 LPA, and it is one of the few skills on this list that converts directly into freelance income (running small ad campaigns or social media for local businesse
- Alt: Stat panel or bar chart (only the numbers listed) for “Group 4: Digital marketing”: Digital marketing is one of the more…; The Google Digital Marketing and…; No…
- Title attribute: Group 4: Digital marketing
- Caption (also keep the key point in the HTML text): Digital marketing is one of the more accessible skill groups for a commerce student to test early, partly because concepts like pricing, positioning…
**V5 — Comparison table** (place after the H2 “Real costs and timelines, compared” #costs-table)
- File: `best-skills-for-commerce-students-to-learn-comparison-real-costs-timelines-compared.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Course marketing pages tend to round numbers up or down to sound more attractive.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Skill | Realistic cost | Realistic timeline | What it does to your… / Row: Advanced Excel +… | Free (YouTube, CFI free… | 4-8 weeks for Excel… | Recognised certification… / Row: Tally Prime + GST… | Rs 6,000-12,000 for a… | 1-3 months (30-90 hours… | Near-universal… / Row: Power BI / data analytics | Rs 4,800-5,000 for the… | 6-10 weeks part-time for… | Certified Power BI… / Row: Digital marketing (Google… | Roughly Rs 1,150-3,500… | Under 10 hours a week for… | Freshers with a real… / Row: US CMA (for finance-heavy… | USD 2,000-2,500 total… | 6-12 months depending on… | CMA-qualified…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Skill Realistic cost Realistic timeline What it does to your pay Advanced Excel + financial modelling Free (YouTube, CFI free tier) to Rs 15,000-25,000 for a structured modelling course 4-8 weeks for Excel basics, 3-6 months for real modelling depth Recognised | A simple budgeting heuristic, not a universal rule: as a strict planning guideline, try to keep total paid-course spending on any single skill under roughly 10% of your total annual education budget. | On a Rs 1,00,000 education budget for the year, that is about Rs 10,000, which comfortably covers Tally plus GST, a full Power BI training track, or the Google Digital Marketing certificate, and still leaves the rest of the budget for tuition, exam fees, or a 
- Alt: Comparison table for “Real costs and timelines, compared”: Skill | Realistic cost | Realistic…; Advanced Excel +… | Free (YouTube…; Tally Prime + GST… | Rs…
- Title attribute: Real costs and timelines, compared
- Caption (also keep the key point in the HTML text): Course marketing pages tend to round numbers up or down to sound more attractive.
**V6 — Decision tree** (place after the H2 “The Skill-Stack Scorecard: a holistic way to choose, not just a tool list” #holistic-framework)
- File: `best-skills-for-commerce-students-to-learn-decision-skill-stack-scorecard-holistic.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Picking the "hottest" skill from a listicle is how people end up with a certificate that does not convert…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 1 Right skill mix for you, not the internet's favourite Excel and modelling suit someone… / 2 Proof of work over certificates alone A certificate proves attendance. One real… / 3 Communication skill sitting on top of the technical skill The best Excel model or GST… / 4 Market positioning: what role is actually hiring for this combination Before committing… / 5 Personal fit with your timeline and family situation A student aiming for CA…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree for “The Skill-Stack Scorecard: a holistic way to choose…”: 1 Right skill mix for you, not the…; 2 Proof of work over certificates…; 3 Communication…
- Title attribute: The Skill-Stack Scorecard: a holistic way to choose, not just a tool…
- Caption (also keep the key point in the HTML text): Picking the "hottest" skill from a listicle is how people end up with a certificate that does not convert into an actual job or income.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skills/digital-marketing-vs-data-analytics-career-india/

**H1:** Digital marketing vs data analytics career India: the honest fit-first comparison  
**Category:** skills · **Words:** 5134 · **H2 sections:** 16 · **Search priority:** P1 (1 clicks, 284 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 11 other articles, with identical alt text and captions, so they say nothing specific about “Digital marketing vs data analytics career India: the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skills/digital-marketing-vs-data-analytics-career-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Digital Marketing”, “Data Analytics Career…”, “The short answer”, “What the daily work…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skills-editorial-cover.webp`, `skills-context.webp`, `skills-stack.webp`, `skills-practice.webp`, `skills-roadmap.webp`, `skills-feedback.webp`, `skills-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `digital-marketing-vs-data-analytics-career-india.webp`, `digital-marketing-vs-data-analytics-career-india-detail.webp`, `digital-marketing-vs-data-analytics-career-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `digital-marketing-vs-data-analytics-career-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `digital-marketing-vs-data-analytics-career-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a learner at a laptop with a small project, a school or college corridor bench. Props that belong to “Digital marketing vs data analytics career India: the honest fit-first…”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Digital marketing vs data analytics career India: the honest…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `digital-marketing-vs-data-analytics-career-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Digital marketing vs data analytics career India compared on real daily work, personality fit, entry barrier…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to digital marketing vs data analytics career India / What the daily work actually looks like in each career / Personality and skill fit signals worth taking seriously / Learning curve and entry barrier: the part most comparisons skip / How to start learning each for free, before you spend anything
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Digital marketing vs data analytics career India: the honest…”
- Title attribute: At a glance: Digital marketing vs data analytics career India: the…
- Caption (also keep the key point in the HTML text): Digital marketing vs data analytics career India compared on real daily work, personality fit, entry barrier, salary, and growth ceiling — plus where…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to digital marketing vs data analytics career India” #short-answer)
- File: `digital-marketing-vs-data-analytics-career-india-asymmetrical-short-answer-digital-marketing.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no universal winner, and any article that hands you one has not actually looked at how differently…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): There is no universal winner, and any article that hands you one has not… / Digital marketing wins on reach and independence: it touches almost every… / Data analytics wins on structure and provability: the skill is easier to…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to digital marketing vs data…”: There is no universal winner, and any…; Digital marketing wins on reach…
- Title attribute: The short answer to digital marketing vs data analytics career India
- Caption (also keep the key point in the HTML text): There is no universal winner, and any article that hands you one has not actually looked at how differently these two jobs feel on a Tuesday…
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Personality and skill fit signals worth taking seriously” #fit-signals)
- File: `digital-marketing-vs-data-analytics-career-india-asymmetrical-personality-skill-fit-signals.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A quiz result or a single personality label will not settle this.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A quiz result or a single personality label will not settle this. / These four signals, drawn from how each job actually runs day to day, are more… / Points toward marketing You get energy from audience psychology, not just…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Personality and skill fit signals worth taking…”: A quiz result or a single personality…; These four signals, drawn from…
- Title attribute: Personality and skill fit signals worth taking seriously
- Caption (also keep the key point in the HTML text): A quiz result or a single personality label will not settle this.
**V4 — Linear process chain or roadmap** (place after the H2 “How to start learning each for free, before you spend anything” #free-resources)
- File: `digital-marketing-vs-data-analytics-career-india-linear-start-learning-each-free.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before you pay for a bootcamp or certification in either lane, test your fit on free material first.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Before you pay for a bootcamp or certification in either lane, test your fit on… / Most of the core knowledge in both fields is freely available; a paid course… / Digital marketing Start free, then pay only for structure Google's own…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “How to start learning each for free, before you spend…”: Before you pay for a bootcamp or…; Most of the core knowledge in…
- Title attribute: How to start learning each for free, before you spend anything
- Caption (also keep the key point in the HTML text): Before you pay for a bootcamp or certification in either lane, test your fit on free material first.
**V5 — Comparison table** (place after the H2 “Salary reality: fresher to 5 years, without the marketing numbers” #salary-reality)
- File: `digital-marketing-vs-data-analytics-career-india-comparison-salary-reality-fresher-years.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary comparison pages for this exact keyword tend to quote whichever field's best-case numbers fit their…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Career stage | Digital marketing | Data analytics / Row: Fresher, 0-1 years | Roughly Rs 2.5-6 LPA… | Roughly Rs 3-6 LPA, with… / Row: 2-5 years experience | Roughly Rs 6-12 LPA for… | Roughly Rs 6-15 LPA, with… / Row: 5+ years, senior | Roughly Rs 15 LPA and… | Roughly Rs 14-22 LPA and… / Row: What moves the number most | Proof that a campaign… | Technical range (SQL plus…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Career stage Digital marketing Data analytics Fresher, 0-1 years Roughly Rs 2.5-6 LPA, with the wide range driven by agency vs in-house vs startup, and whether the fresher has any proof of real campaign results. | Roughly Rs 3-6 LPA, with a strong SQL portfolio and one real dashboard project pushing candidates toward the top of that range. | 2-5 years experience Roughly Rs 6-12 LPA for solid mid-level marketers managing budgets and channels directly; performance/growth marketing specialists with a strong ROI track record can land above this band.
- Alt: Comparison table for “Salary reality: fresher to 5 years, without the…”: Career stage | Digital marketing |…; Fresher, 0-1 years | Roughly Rs 2.5-6…; 2-5 years…
- Title attribute: Salary reality: fresher to 5 years, without the marketing numbers
- Caption (also keep the key point in the HTML text): Salary comparison pages for this exact keyword tend to quote whichever field's best-case numbers fit their narrative.
**V6 — Comparison table** (place after the H2 “The real career growth ceiling in each field” #growth-ceiling)
- File: `digital-marketing-vs-data-analytics-career-india-comparison-real-career-growth-ceiling.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The salary table above tells you the first five years.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Growth signal | Digital marketing | Data analytics / Row: Typical promotion ladder | Executive to senior… | Junior analyst to senior… / Row: Ceiling driven by | Your ability to tie… | Technical depth… / Row: India-specific demand… | Industry estimates put… | Industry estimates… / Row: Independent income path | Realistic and common —… | Less common as a solo… / Wider independent-income door: freelance, consulting, or agency ownership are common… / Ceiling rises fastest for people who can tie spend directly to revenue, not vanity…
- Numbers: use ONLY these facts from the article (exact values, no new ones): India-specific demand signal Industry estimates put roughly 2 million professionals currently employed in digital marketing in India, with projections of around 5 million digital marketing jobs by 2027 as more D2C, e-commerce, and SaaS brands build in-house te | Industry estimates project around 11.5 million new data-and-analytics-related jobs in India by 2030, with data analyst openings consistently ranked among the fastest-growing entry-to-mid roles on major job boards.
- Alt: Comparison table for “The real career growth ceiling in each field”: Growth signal | Digital marketing |…; Typical promotion ladder | Executive…; Ceiling driven by…
- Title attribute: The real career growth ceiling in each field
- Caption (also keep the key point in the HTML text): The salary table above tells you the first five years.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skills/high-income-skills-without-a-degree-india/

**H1:** High-income skills without a degree India: 6 lanes that actually pay  
**Category:** skills · **Words:** 4524 · **H2 sections:** 17 · **Search priority:** P1 (2 clicks, 375 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/skills/high-income-skills-without-a-degree-india/high-income-skills-without-a-degree-india-cover.webp

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 6 authored images on the page (hero + 5 supporting).
2. Verify cost/timeline/pay table (Sales Rs 9,975-98,881/mo, Coding Rs 4-8 LPA, UI/UX Rs 2.5-8 LPA etc.).
3. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
4. 6 of 6 images have no title attribute.
5. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `six-high-income-skill-lanes-india.webp`: 30k, 412%, 125K, 34K, 128%, 22%; `proof-of-work-replaces-degree-india.webp`: 100; `high-income-skills-cost-timeline-pay-india.webp`: 30k, 60k. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `skills/high-income-skills-without-a-degree-india/high-income-skills-without-a-degree-india-cover.webp` | 1600x900 | 1600x900 | eager | 13% | no title attr |
| `skills/high-income-skills-without-a-degree-india/six-high-income-skill-lanes-india.webp` | 1122x1402 | 1122x1402 | lazy | 25% | no title attr |
| `skills/high-income-skills-without-a-degree-india/proof-of-work-replaces-degree-india.webp` | 1122x1402 | 1122x1402 | lazy | 49% | no title attr |
| `skills/high-income-skills-without-a-degree-india/high-income-skills-cost-timeline-pay-india.webp` | 1200x675 | 1200x675 | lazy | 57% | no title attr |
| `skills/high-income-skills-without-a-degree-india/four-checkpoint-protocol-skill-choice.webp` | 1122x1402 | 1122x1402 | lazy | 64% | no title attr |
| `skills/high-income-skills-without-a-degree-india/three-gates-job-ready.webp` | 1122x1402 | 1122x1402 | lazy | 68% | no title attr |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `high-income-skills-without-a-degree-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `high-income-skills-without-a-degree-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a learner at a laptop with a small project, a quiet public library table. Props that belong to “High-income skills without a degree India: 6 lanes that actually pay”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: High-income skills without a degree India: 6 lanes that actually pay
- Caption: one sentence tying the scene to the article's decision.
2. CREATE 1 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `high-income-skills-without-a-degree-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: High-income skills without a degree India: sales, bootcamp coding, design, video and content, digital…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / The degree bias is real, not just old-fashioned worry / The 6 skill lanes that actually pay / Lane 1: Sales and business development / Lane 2: Software development via the bootcamp route
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “High-income skills without a degree India: 6 lanes that actually pay”
- Title attribute: At a glance: High-income skills without a degree India: 6 lanes that…
- Caption (also keep the key point in the HTML text): High-income skills without a degree India: sales, bootcamp coding, design, video and content, digital marketing execution, and trades.
3. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
4. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skills/best-skills-for-engineers-who-dont-want-to-code/

**H1:** Best skills for engineers who don't want to code: the real skill map  
**Category:** skills · **Words:** 5147 · **H2 sections:** 20 · **Search priority:** P2 (0 clicks, 43 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 11 other articles, with identical alt text and captions, so they say nothing specific about “Best skills for engineers who don't want to code: the real…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skills/best-skills-for-engineers-who-dont-want-to-code*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “The 4 skill groups that…”, “Product and…”, “Data fluency without…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skills-editorial-cover.webp`, `skills-context.webp`, `skills-stack.webp`, `skills-practice.webp`, `skills-roadmap.webp`, `skills-feedback.webp`, `skills-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-skills-for-engineers-who-dont-want-to-code.webp`, `best-skills-for-engineers-who-dont-want-to-code-detail.webp`, `best-skills-for-engineers-who-dont-want-to-code-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `best-skills-for-engineers-who-dont-want-to-code-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-skills-for-engineers-who-dont-want-to-code-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a learner at a laptop with a small project, a quiet public library table. Props that belong to “Best skills for engineers who don't want to code: the real skill map”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best skills for engineers who don't want to code: the real skill map
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-skills-for-engineers-who-dont-want-to-code-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Best skills for engineers who don't want to code span product thinking, business analysis, technical…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / Why "I don't want to code" feels like a confession / The 4 skill groups that replace coding depth / Group 1: Product and requirements thinking / Group 2: Data fluency without programming
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best skills for engineers who don't want to code: the real skill map”
- Title attribute: At a glance: Best skills for engineers who don't want to code: the…
- Caption (also keep the key point in the HTML text): Best skills for engineers who don't want to code span product thinking, business analysis, technical communication, and client-facing skill stacks.
**V2 — Framework cards** (place after the H2 “Why "I don't want to code" feels like a confession” #why-this-feels-scary)
- File: `best-skills-for-engineers-who-dont-want-to-code-framework-don-want-code-feels.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every engineering campus in India runs on the same script: get the CS-adjacent internship, clear the coding…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Push through it, every engineer hates coding at first, you will grow to like it. / If you don't want to code, your degree was a waste and you should have picked commerce. / Non-coding roles are the "easy way out" and pay much less. / Just do an MBA, it will sort out the direction problem for you.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Framework cards for “Why "I don't want to code" feels like a confession”: Push through it, every engineer hates…; If you don't want to code, your…; Non-coding roles…
- Title attribute: Why "I don't want to code" feels like a confession
- Caption (also keep the key point in the HTML text): Every engineering campus in India runs on the same script: get the CS-adjacent internship, clear the coding rounds, land the "product-based company"…
**V3 — Comparison table** (place after the H2 “Tools worth learning per skill group” #tools-to-learn)
- File: `best-skills-for-engineers-who-dont-want-to-code-comparison-tools-worth-learning-per.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Skip the temptation to learn everything at once.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Skill group | Practical tools to… / Row: Product and requirements… | Jira or Linear for… / Row: Data fluency without… | SQL (start with SELECT… / Row: Technical communication… | Markdown plus a docs tool… / Row: People, process, and… | Jira or Asana for…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Free tiers, official documentation, and short YouTube walkthroughs cover the basics for every tool above; spend money only once you know the skill group is the right fit and need structured practice or a recognised certification, tested against the 10% budget 
- Alt: Comparison table for “Tools worth learning per skill group”: Skill group | Practical tools to…; Product and requirements… | Jira or…; Data fluency without… | SQL…
- Title attribute: Tools worth learning per skill group
- Caption (also keep the key point in the HTML text): Skip the temptation to learn everything at once.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Other non-coding paths worth mapping” #other-paths)
- File: `best-skills-for-engineers-who-dont-want-to-code-asymmetrical-other-non-coding-paths.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The four skill groups above cover most of the non-coding territory, but a few adjacent paths come up often…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The four skill groups above cover most of the non-coding territory, but a few… / Path 5 Engineering management (people leadership) Leading a team of engineers… / This usually starts with an informal tech-lead stretch inside your current…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Other non-coding paths worth mapping”: The four skill groups above cover…; Path 5 Engineering management (people…; This…
- Title attribute: Other non-coding paths worth mapping
- Caption (also keep the key point in the HTML text): The four skill groups above cover most of the non-coding territory, but a few adjacent paths come up often enough that they deserve their own quick…
**V5 — Comparison table** (place after the H2 “Salary reality by skill group, not forum screenshots” #salary-reality)
- File: `best-skills-for-engineers-who-dont-want-to-code-comparison-salary-reality-skill-group.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Non-coding does not mean lower-paid.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Skill signal | Impact on pay | Context / Row: CBAP / PMI-PBA… | Roughly 13-22% higher… | Strongest at senior… / Row: PMP certification… | Roughly 13% higher than… | Fresher PMP holders… / Row: Product company vs… | Often a 1.5-2x gap at the… | Indian product companies… / Row: API-focused… | Roughly 2-3x general… | API technical writers at…
- Numbers: use ONLY these facts from the article (exact values, no new ones): The same "business analyst" title pays Rs 5 LPA at one company and Rs 20 LPA at another, based on certification, domain depth, and proof of work. | Business analysts typically start around Rs 4-7 LPA and move to Rs 13-20 LPA within 4-6 years, especially with a CBAP or PMI-PBA certification, which studies show adds roughly 13-22% over non-certified peers. | Product managers at Indian product companies (the Flipkarts, Swiggys, and Razorpays of the market, not services firms) typically earn Rs 20-35 LPA at the PM level and Rs 40-70 LPA at senior PM level, though technical PMs with an engineering and problem-solving
- Alt: Comparison table for “Salary reality by skill group, not forum screenshots”: Skill signal | Impact on pay | Context; CBAP / PMI-PBA… | Roughly 13-22%…; PMP…
- Title attribute: Salary reality by skill group, not forum screenshots
- Caption (also keep the key point in the HTML text): Non-coding does not mean lower-paid.
**V6 — Linear process chain or roadmap** (place after the H2 “Building proof without a coding portfolio” #proof-plan)
- File: `best-skills-for-engineers-who-dont-want-to-code-linear-building-proof-without-coding.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A coding portfolio has an obvious shape: GitHub, deployed projects, commit history.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A certificate from a course you finished but never applied. / A resume line claiming "strong communication skills" with no example. / Vague interest in "product" or "management" with nothing built. / One requirements document or user story you wrote for a real (even informal) problem at… / One SQL query or dashboard that answered a genuine business question, with the question…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Building proof without a coding portfolio”: A certificate from a course you…; A resume line claiming "strong…; Vague interest…
- Title attribute: Building proof without a coding portfolio
- Caption (also keep the key point in the HTML text): A coding portfolio has an obvious shape: GitHub, deployed projects, commit history.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skills/best-skills-for-high-salary-in-india/

**H1:** Best skills for high salary in India: the ranked list, ranked by proof, not hype  
**Category:** skills · **Words:** 5167 · **H2 sections:** 21 · **Search priority:** P2 (1 clicks, 50 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/skills/best-skills-for-high-salary-in-india/best-skills-for-high-salary-in-india-cover.webp

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 6 authored images on the page (hero + 5 supporting).
2. Identical image set to /blog/career-options/best-career-options-with-high-salary/.
3. Verify Rs LPA bands.
4. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
5. 6 of 6 images have no title attribute.
6. DUPLICATE IMAGES: identical files are also used on `/blog/career-options/best-career-options-with-high-salary/`, `/blog/career-options/best-career-options-with-high-salary/`, `/blog/career-options/best-career-options-with-high-salary/`, `/blog/career-options/best-career-options-with-high-salary/`, `/blog/career-options/best-career-options-with-high-salary/`, `/blog/career-options/best-career-options-with-high-salary/`. Keep one owner page per image and create new visuals for the other.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `skills/best-skills-for-high-salary-in-india/best-skills-for-high-salary-in-india-cover.webp` | 1600x900 | 1600x900 | eager | 12% | no title attr |
| `skills/best-skills-for-high-salary-in-india/high-salary-skills-ranked-india.webp` | 1122x1402 | 1122x1402 | lazy | 23% | no title attr |
| `skills/best-skills-for-high-salary-in-india/high-salary-skills-salary-bands-india.webp` | 1122x1402 | 1122x1402 | lazy | 45% | no title attr |
| `skills/best-skills-for-high-salary-in-india/scarce-vs-oversaturated-skills-india.webp` | 1122x1402 | 1122x1402 | lazy | 59% | no title attr |
| `skills/best-skills-for-high-salary-in-india/high-salary-skills-4-checkpoint-protocol.webp` | 1122x1402 | 1122x1402 | lazy | 61% | no title attr |
| `skills/best-skills-for-high-salary-in-india/high-salary-skills-3-gates.webp` | 1122x1402 | 1122x1402 | lazy | 67% | no title attr |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `best-skills-for-high-salary-in-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-skills-for-high-salary-in-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a learner at a laptop with a small project, a family dining table in the evening. Props that belong to “Best skills for high salary in India: the ranked list, ranked by proof, not hype”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best skills for high salary in India: the ranked list, ranked by…
- Caption: one sentence tying the scene to the article's decision.
2. CREATE 1 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-skills-for-high-salary-in-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The best skills for high salary in India right now are AI/ML literacy, cloud engineering, cybersecurity, data…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / Why a ranked list alone is not enough / The ranked list, by real demand and pay / Rank 1: AI and machine learning literacy / Rank 2: Cloud engineering
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best skills for high salary in India: the ranked list, ranked by…”
- Title attribute: At a glance: Best skills for high salary in India: the ranked list…
- Caption (also keep the key point in the HTML text): The best skills for high salary in India right now are AI/ML literacy, cloud engineering, cybersecurity, data analytics, product management, and…
3. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
4. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skills/python-vs-java-which-to-learn-first-india/

**H1:** Python vs Java: which to learn first in India — the honest verdict by career path  
**Category:** skills · **Words:** 4088 · **H2 sections:** 13 · **Search priority:** P2 (0 clicks, 75 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 11 other articles, with identical alt text and captions, so they say nothing specific about “Python vs Java: which to learn first in India — the honest…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skills/python-vs-java-which-to-learn-first-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Python”, “Java Which To Learn…”, “The short answer”, “Why this is not a…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skills-editorial-cover.webp`, `skills-context.webp`, `skills-stack.webp`, `skills-practice.webp`, `skills-roadmap.webp`, `skills-feedback.webp`, `skills-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `python-vs-java-which-to-learn-first-india.webp`, `python-vs-java-which-to-learn-first-india-detail.webp`, `python-vs-java-which-to-learn-first-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `python-vs-java-which-to-learn-first-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `python-vs-java-which-to-learn-first-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of an Indian student or adult at a home desk, a school or college corridor bench. Props that belong to “Python vs Java: which to learn first in India — the honest verdict by career…”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Python vs Java: which to learn first in India — the honest verdict by…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `python-vs-java-which-to-learn-first-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Python vs Java which to learn first in India depends on your target role: Python wins for AI, data science…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer: match the language to the job, not the hype / Why this is not a popularity contest / Learning curve: syntax side by side / Job market demand in India / Who actually hires for each language
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Python vs Java: which to learn first in India — the honest verdict by…”
- Title attribute: At a glance: Python vs Java: which to learn first in India — the…
- Caption (also keep the key point in the HTML text): Python vs Java which to learn first in India depends on your target role: Python wins for AI, data science, and scripting; Java wins for Android and…
**V2 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Learning curve: syntax side by side” #learning-curve)
- File: `python-vs-java-which-to-learn-first-india-stat-learning-curve-syntax-side.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the part most comparisons get right, at least directionally.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Reads close to plain English; a beginner script is often 3-5 lines for a task that takes… / Dynamically typed: you do not have to declare a variable's type before using it. / No mandatory class or "public static void main" wrapper just to run a simple script. / Errors tend to show up at run time, which is faster to test but can hide mistakes longer. / A first-year student can usually write a working program within the first week.
- Numbers: use ONLY these facts from the article (exact values, no new ones): Most learners need 2-4 weeks longer than Python to feel comfortable writing basic programs.
- Alt: Stat panel or bar chart (only the numbers listed) for “Learning curve: syntax side by side”: Reads close to plain English; a…; Dynamically typed: you do not have…
- Title attribute: Learning curve: syntax side by side
- Caption (also keep the key point in the HTML text): This is the part most comparisons get right, at least directionally.
**V3 — Comparison table** (place after the H2 “Job market demand in India” #job-market)
- File: `python-vs-java-which-to-learn-first-india-comparison-job-market-demand-india.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Learning curve answers "which is easier to start." Job market demand answers the more important question…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Signal | Python | Java / Row: TIOBE Index position… | Ranked #1 globally, with… | Still top-5 globally, but… / Row: Where the roles are… | Product startups… | IT services majors (TCS… / Row: Typical fresher hiring… | Strong and growing… | Very high absolute… / Row: Growth direction… | Growing quickly, pulled… | Stable and enormous, but…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Job market demand in India”: Signal | Python | Java; TIOBE Index position… | Ranked #1…; Where the roles are… | Product…
- Title attribute: Job market demand in India
- Caption (also keep the key point in the HTML text): Learning curve answers "which is easier to start." Job market demand answers the more important question: "which one actually gets you hired." The…
**V4 — Linear process chain or roadmap** (place after the H2 “Career paths each one opens” #career-paths)
- File: `python-vs-java-which-to-learn-first-india-linear-career-paths-each-one.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the part that should drive your decision more than any ranking chart.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Data analysis and data science: pandas, NumPy, and Jupyter notebooks turn raw business… / Machine learning and AI: PyTorch and TensorFlow are Python-first, so almost every ML role… / Automation and scripting: replacing repetitive manual work with a script is one of the… / Backend web development: Django and FastAPI power a large share of Indian product… / Android app development: Java was the original Android language, and a large share of…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Career paths each one opens”: Data analysis and data science…; Machine learning and AI: PyTorch and…; Automation and scripting…
- Title attribute: Career paths each one opens
- Caption (also keep the key point in the HTML text): This is the part that should drive your decision more than any ranking chart.
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Salary reality, not screenshots” #salary)
- File: `python-vs-java-which-to-learn-first-india-stat-salary-reality-screenshots.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary comparisons between languages get thrown around a lot, and they are almost always oversimplified.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Salary comparisons between languages get thrown around a lot, and they are… / Pay depends far more on role, seniority, company type, and city than on the… / Widely reported salary-tracking data (Glassdoor, AmbitionBox, Naukri, and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Fresher Python-adjacent roles commonly start in a rough Rs 3-5 LPA range, moving to roughly Rs 8-15 LPA at mid-level (3-6 years) in data or AI-adjacent work. | Java fresher roles at large service companies commonly start lower, in a rough Rs 2-4.5 LPA range, but the sheer volume of Java-based enterprise and backend roles at every experience level keeps it one of the most consistently hired stacks in the country, with
- Alt: Stat panel or bar chart (only the numbers listed) for “Salary reality, not screenshots”: Salary comparisons between languages…; Pay depends far more on role……
- Title attribute: Salary reality, not screenshots
- Caption (also keep the key point in the HTML text): Salary comparisons between languages get thrown around a lot, and they are almost always oversimplified.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skills/which-programming-language-to-learn-first-india/

**H1:** Which programming language to learn first in India: choose by goal  
**Category:** skills · **Words:** 3333 · **H2 sections:** 10 · **Search priority:** P2 (0 clicks, 44 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 11 other articles, with identical alt text and captions, so they say nothing specific about “Which programming language to learn first in India: choose…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skills/which-programming-language-to-learn-first-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “The hardest/easiest…”, “The Goal-First Language…”, “What actually matters…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skills-editorial-cover.webp`, `skills-context.webp`, `skills-stack.webp`, `skills-practice.webp`, `skills-roadmap.webp`, `skills-feedback.webp`, `skills-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `which-programming-language-to-learn-first-india.webp`, `which-programming-language-to-learn-first-india-detail.webp`, `which-programming-language-to-learn-first-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `which-programming-language-to-learn-first-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `which-programming-language-to-learn-first-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of an Indian student or adult at a home desk, a quiet public library table. Props that belong to “Which programming language to learn first in India: choose by goal”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Which programming language to learn first in India: choose by goal
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `which-programming-language-to-learn-first-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Which programming language to learn first in India depends on your goal: web dev, data/AI, mobile…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer: match the language to the goal / Why "which language" is the wrong first question / The hardest/easiest myth, debunked / The Goal-First Language Map / What actually matters when picking one
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Which programming language to learn first in India: choose by goal”
- Title attribute: At a glance: Which programming language to learn first in India…
- Caption (also keep the key point in the HTML text): Which programming language to learn first in India depends on your goal: web dev, data/AI, mobile, enterprise, or systems.
**V2 — Chronological timeline** (place after the H2 “The short answer: match the language to the goal” #short-answer)
- File: `which-programming-language-to-learn-first-india-chronological-short-answer-match-language.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If you take away one thing from this article, take this: stop asking "which programming language should I…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): If you take away one thing from this article, take this: stop asking "which… / A first-year student who wants to build websites and a first-year student who… / Treating them the same, which is what most generic "best language" lists do, is…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “The short answer: match the language to the goal”: If you take away one thing from this…; A first-year student who wants to…; Treating…
- Title attribute: The short answer: match the language to the goal
- Caption (also keep the key point in the HTML text): If you take away one thing from this article, take this: stop asking "which programming language should I learn first" as if it has a single…
**V3 — Mistakes versus smarter move panel** (place after the H2 “The hardest/easiest myth, debunked” #hardest-easiest-myth)
- File: `which-programming-language-to-learn-first-india-mistakes-hardest-easiest-myth-debunked.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The second trap, right behind chasing popularity, is ranking languages purely by "easiest to learn" versus…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Just start with the "easiest" language, you will figure out the rest later. / Skip Java, it is too hard and old-fashioned for a beginner. / C++ is only for "real" programmers, do not bother unless you are a genius. / Learn whichever language tops this year's popularity index, direction does not matter yet.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “The hardest/easiest myth, debunked”: Just start with the "easiest"…; Skip Java, it is too hard and…; C++ is only for "real"…
- Title attribute: The hardest/easiest myth, debunked
- Caption (also keep the key point in the HTML text): The second trap, right behind chasing popularity, is ranking languages purely by "easiest to learn" versus "hardest to learn." This framing sounds…
**V4 — Comparison table** (place after the H2 “What actually matters when picking one” #selection-criteria)
- File: `which-programming-language-to-learn-first-india-comparison-actually-matters-picking-one.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Once you have a rough goal, run your shortlisted language through a few practical filters before you commit…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: What to check | Why it matters | How to check it… / Row: Community support and… | When you get stuck at… | Search your error message… / Row: Job market demand in India | A language with a huge… | Search live postings on… / Row: Learning resource depth | Free, high-quality… | Look for at least one… / Row: Learning curve for a true… | A gentler curve keeps you… | Try writing and running… / Row: Long-term versatility | Some languages open one… | Ask what else you could…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “What actually matters when picking one”: What to check | Why it matters | How…; Community support and… | When you get…; Job market demand in…
- Title attribute: What actually matters when picking one
- Caption (also keep the key point in the HTML text): Once you have a rough goal, run your shortlisted language through a few practical filters before you commit weeks of study time to it.
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “Already narrowed it down to Python vs Java?” #python-vs-java)
- File: `which-programming-language-to-learn-first-india-asymmetrical-already-narrowed-down-python.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If The Goal-First Language Map above has already pulled you toward two specific contenders, most commonly…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): If The Goal-First Language Map above has already pulled you toward two specific… / You need a direct, detailed comparison of those two specifically. / Read Python vs Java: which to learn first in India for the full…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Already narrowed it down to Python vs Java?”: If The Goal-First Language Map above…; You need a direct, detailed…; Read…
- Title attribute: Already narrowed it down to Python vs Java?
- Caption (also keep the key point in the HTML text): If The Goal-First Language Map above has already pulled you toward two specific contenders, most commonly Python and Java, because your target sits…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skills/best-courses-for-working-professionals-india/

**H1:** Best courses for working professionals India: the ROI checklist before you enroll  
**Category:** skills · **Words:** 5239 · **H2 sections:** 19 · **Search priority:** P3 (0 clicks, 22 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 11 other articles, with identical alt text and captions, so they say nothing specific about “Best courses for working professionals India: the ROI…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skills/best-courses-for-working-professionals-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Try the free route first”, “The 4-Layer Course Audit”, “Layer 1: Curriculum…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skills-editorial-cover.webp`, `skills-context.webp`, `skills-stack.webp`, `skills-practice.webp`, `skills-roadmap.webp`, `skills-feedback.webp`, `skills-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-courses-for-working-professionals-india.webp`, `best-courses-for-working-professionals-india-detail.webp`, `best-courses-for-working-professionals-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `best-courses-for-working-professionals-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-courses-for-working-professionals-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a working professional after office hours, a modest office desk after hours. Props that belong to “Best courses for working professionals India: the ROI checklist before you…”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best courses for working professionals India: the ROI checklist…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-courses-for-working-professionals-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Best courses for working professionals India: how to verify curriculum currency, instructor credibility, and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / Why "which course is best" is the wrong first question / Try the free route first, before you shortlist any paid course / The 4-Layer Course Audit / Layer 1: Curriculum currency
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best courses for working professionals India: the ROI checklist…”
- Title attribute: At a glance: Best courses for working professionals India: the ROI…
- Caption (also keep the key point in the HTML text): Best courses for working professionals India: how to verify curriculum currency, instructor credibility, and placement claims before you enroll.
**V2 — Mistakes versus smarter move panel** (place after the H2 “Why "which course is best" is the wrong first question” #wrong-question)
- File: `best-courses-for-working-professionals-india-mistakes-course-best-wrong-first.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Ranked "best courses" lists are written to be shareable and skimmable, not to match your specific situation.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Just pick the course with the most enrolled students, popularity means quality. / A higher price always means a better outcome. / If the landing page says "95% placement," that is a real, verified number. / Certificates alone are enough, you do not need to build anything alongside the course.
- Numbers: use ONLY these facts from the article (exact values, no new ones): A list built for a fresher deciding between two certifications reads very differently to a working professional with 6 years of experience, a full-time job, EMIs, and 12-15 hours a week to actually study. | If the landing page says "95% placement," that is a real, verified number.
- Alt: Mistakes versus smarter move panel for “Why "which course is best" is the wrong first question”: Just pick the course with the most…; A higher price always means a…
- Title attribute: Why "which course is best" is the wrong first question
- Caption (also keep the key point in the HTML text): Ranked "best courses" lists are written to be shareable and skimmable, not to match your specific situation.
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Layer 4: Cost vs alternatives” #cost-vs-alternatives)
- File: `best-courses-for-working-professionals-india-asymmetrical-layer-cost-alternatives.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Once a course clears curriculum, instructor, and claims checks, the cost question is not "can I afford this"…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Once a course clears curriculum, instructor, and claims checks, the cost… / A course that costs ₹15,000 but requires 150 hours of study effectively costs… / This is also where you weigh a paid, structured course against a free or…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A course that costs ₹15,000 but requires 150 hours of study effectively costs far more once your time is priced in, especially against a free or ₹2,000 alternative that teaches the same core skill less politely but just as effectively.
- Alt: Asymmetrical pros-and-cons comparison for “Layer 4: Cost vs alternatives”: Once a course clears curriculum…; A course that costs ₹15,000 but…; This is also where…
- Title attribute: Layer 4: Cost vs alternatives
- Caption (also keep the key point in the HTML text): Once a course clears curriculum, instructor, and claims checks, the cost question is not "can I afford this" alone, it is "does this beat the…
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “How much of your learning budget one course should actually eat” #course-budget)
- File: `best-courses-for-working-professionals-india-stat-much-learning-budget-one.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: As a strict planning heuristic, not a universal rule, cap what you spend on any single course at roughly 10%…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): As a strict planning heuristic, not a universal rule, cap what you spend on any… / This is not a fact about how education markets work; it is a discipline that… / If a course you are seriously considering costs meaningfully more than that 10%…
- Numbers: use ONLY these facts from the article (exact values, no new ones): As a strict planning heuristic, not a universal rule, cap what you spend on any single course at roughly 10% of the money you have realistically set aside for skill-building and education in a given year. | If a course you are seriously considering costs meaningfully more than that 10% line, do not reject it automatically — justify it with course-specific evidence, not brand prestige. | Every rupee above the 10% line should be able to answer one question in writing: what does this specific course prove or unlock that a cheaper, well-reviewed alternative for the same skill genuinely cannot?
- Alt: Stat panel or bar chart (only the numbers listed) for “How much of your learning budget one course should…”: As a strict planning heuristic, not a…; This is not a…
- Title attribute: How much of your learning budget one course should actually eat
- Caption (also keep the key point in the HTML text): As a strict planning heuristic, not a universal rule, cap what you spend on any single course at roughly 10% of the money you have realistically set…
**V5 — Mistakes versus smarter move panel** (place after the H2 “Red flags in course marketing you should never ignore” #red-flags)
- File: `best-courses-for-working-professionals-india-mistakes-red-flags-course-marketing.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Watch for these on any course landing page A countdown timer that resets after it hits zero, or "only 3 seats…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A countdown timer that resets after it hits zero, or "only 3 seats left" that stays at… / A headline placement percentage with no visible sample size, batch, or year attached… / Testimonials that only exist on the provider's own page, all five stars, none mentioning… / Pricing that "expires tonight," every night, indefinitely. / A refund policy that is vague, hidden, or requires you to dig through a support ticket to…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Watch for these on any course landing page A countdown timer that resets after it hits zero, or "only 3 seats left" that stays at exactly 3 for weeks.
- Alt: Mistakes versus smarter move panel for “Red flags in course marketing you should never ignore”: A countdown timer that resets after…; A headline placement…
- Title attribute: Red flags in course marketing you should never ignore
- Caption (also keep the key point in the HTML text): Watch for these on any course landing page A countdown timer that resets after it hits zero, or "only 3 seats left" that stays at exactly 3 for weeks.
**V6 — Comparison table** (place after the H2 “Weak signal vs strong signal, compared” #signal-table)
- File: `best-courses-for-working-professionals-india-comparison-weak-signal-strong-signal.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A fast reference for the five things most worth checking on any course page before you decide.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: What to check | Weak signal (slow… | Strong signal (green… / Row: Curriculum dates | No visible last-updated… | Module list shows a… / Row: Instructor proof | Bio says "industry… | Named instructor with a… / Row: Placement number | A single headline… | A stated sample size, a… / Row: Reviews | Only testimonials hosted… | Independent reviews on… / Row: Pricing page | A countdown timer that… | A stable, transparent…
- Numbers: use ONLY these facts from the article (exact values, no new ones): What to check Weak signal (slow down) Strong signal (green light) Curriculum dates No visible last-updated date; syllabus PDF looks identical to a 3-year-old version found elsewhere online Module list shows a recent revision date and names current tools, frame
- Alt: Comparison table for “Weak signal vs strong signal, compared”: What to check | Weak signal (slow… |…; Curriculum dates | No visible…; Instructor proof | Bio says…
- Title attribute: Weak signal vs strong signal, compared
- Caption (also keep the key point in the HTML text): A fast reference for the five things most worth checking on any course page before you decide.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skills/business-analyst-vs-data-analyst-career-india/

**H1:** Business analyst vs data analyst career India: the honest fit-first comparison  
**Category:** skills · **Words:** 5232 · **H2 sections:** 15 · **Search priority:** P3 (0 clicks, 17 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 11 other articles, with identical alt text and captions, so they say nothing specific about “Business analyst vs data analyst career India: the honest…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skills/business-analyst-vs-data-analyst-career-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Business Analyst”, “Data Analyst Career…”, “The short answer”, “What the daily work…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skills-editorial-cover.webp`, `skills-context.webp`, `skills-stack.webp`, `skills-practice.webp`, `skills-roadmap.webp`, `skills-feedback.webp`, `skills-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `business-analyst-vs-data-analyst-career-india.webp`, `business-analyst-vs-data-analyst-career-india-detail.webp`, `business-analyst-vs-data-analyst-career-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `business-analyst-vs-data-analyst-career-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `business-analyst-vs-data-analyst-career-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a learner at a laptop with a small project, a home study corner with natural window light. Props that belong to “Business analyst vs data analyst career India: the honest fit-first comparison”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Business analyst vs data analyst career India: the honest fit-first…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `business-analyst-vs-data-analyst-career-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Business analyst vs data analyst career India compared on real daily work, required tools, entry…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to business analyst vs data analyst career India / What the daily work actually looks like in each career / Skills and tools each role actually needs / Entry requirements and common degree backgrounds / Salary reality: fresher to senior, without the marketing numbers
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Business analyst vs data analyst career India: the honest fit-first…”
- Title attribute: At a glance: Business analyst vs data analyst career India: the…
- Caption (also keep the key point in the HTML text): Business analyst vs data analyst career India compared on real daily work, required tools, entry qualifications, salary bands, and which senior roles…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to business analyst vs data analyst career India” #short-answer)
- File: `business-analyst-vs-data-analyst-career-india-asymmetrical-short-answer-business-analyst.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no universal winner, and any article that hands you one has not actually looked at how differently…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): There is no universal winner, and any article that hands you one has not… / Business analysis wins on breadth and leadership access: it touches almost… / Data analytics wins on structure and provability: the skill is easier to…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to business analyst vs data analyst…”: There is no universal winner, and any…; Business analysis wins on…
- Title attribute: The short answer to business analyst vs data analyst career India
- Caption (also keep the key point in the HTML text): There is no universal winner, and any article that hands you one has not actually looked at how differently these two jobs feel on a Tuesday…
**V3 — Comparison table** (place after the H2 “Entry requirements and common degree backgrounds” #entry-requirements)
- File: `business-analyst-vs-data-analyst-career-india-comparison-entry-requirements-common-degree.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "What should I study" is one of the first real questions in this decision, and the honest answer is that…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Entry factor | Business analyst | Data analyst / Row: Common degree backgrounds | Commerce, business… | Engineering, statistics… / Row: Degree dependency for… | Moderate. An MBA or a… | Low. No specific degree… / Row: Certifications that carry… | IIBA's ECBA for… | Tool-specific… / Row: Typical first job titles | Junior business analyst… | Junior data analyst…
- Numbers: use ONLY these facts from the article (exact values, no new ones): If an MBA is on the table specifically to break into business analysis, weigh the fee against the strict 10%-of-total-education-budget planning heuristic before committing: a full-time MBA at a brand-name institute can cost more than your family's entire remai | Only justify spending well above that 10% benchmark with concrete evidence for that specific programme — verified placement outcomes, real recruiter access, and alumni you can actually talk to — not brand prestige alone.
- Alt: Comparison table for “Entry requirements and common degree backgrounds”: Entry factor | Business analyst |…; Common degree backgrounds | Commerce…; Degree…
- Title attribute: Entry requirements and common degree backgrounds
- Caption (also keep the key point in the HTML text): "What should I study" is one of the first real questions in this decision, and the honest answer is that neither field has a hard degree requirement…
**V4 — Comparison table** (place after the H2 “Salary reality: fresher to senior, without the marketing numbers” #salary-reality)
- File: `business-analyst-vs-data-analyst-career-india-comparison-salary-reality-fresher-senior.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary comparison pages for this exact keyword tend to quote whichever field's best-case numbers fit their…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Career stage | Business analyst | Data analyst / Row: Fresher, 0-1 years | Roughly Rs 3-7 LPA, with… | Roughly Rs 3.5-6 LPA… / Row: 2-5 years experience | Roughly Rs 6-12 LPA for… | Roughly Rs 6-15 LPA, with… / Row: 5+ years, senior | Roughly Rs 15-25 LPA for… | Roughly Rs 14-28 LPA and… / Row: What moves the number most | Domain depth in a… | Technical range (SQL plus…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Career stage Business analyst Data analyst Fresher, 0-1 years Roughly Rs 3-7 LPA, with IT services and MBA-entry roles at consulting or fintech firms sitting toward the higher end of that range. | Roughly Rs 3.5-6 LPA, with candidates who show SQL, Python, and a BI-tool portfolio typically landing Rs 1-1.5 LPA above Excel-only candidates. | 2-5 years experience Roughly Rs 6-12 LPA for solid mid-level business analysts handling requirement ownership end to end; those who add domain certifications or a Scrum/Agile credential often move above this band.
- Alt: Comparison table for “Salary reality: fresher to senior, without the…”: Career stage | Business analyst |…; Fresher, 0-1 years | Roughly Rs 3-7…; 2-5 years…
- Title attribute: Salary reality: fresher to senior, without the marketing numbers
- Caption (also keep the key point in the HTML text): Salary comparison pages for this exact keyword tend to quote whichever field's best-case numbers fit their narrative.
**V5 — Linear process chain or roadmap** (place after the H2 “Use The 4-Checkpoint Protocol before you commit to either path” #checkpoint)
- File: `business-analyst-vs-data-analyst-career-india-linear-use-checkpoint-protocol-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A salary chart cannot tell you which one fits your actual life and thinking style.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A salary chart cannot tell you which one fits your actual life and thinking… / The 4-Checkpoint Protocol narrows this decision to what genuinely matters for… / 01 Biology Business analysis rewards people who enjoy sitting in a room with…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 02 Context Can your family runway absorb a fresher-level salary (roughly Rs 3-7 LPA in either lane) for the first 1-2 years while you build real proof?
- Alt: Linear process chain or roadmap for “Use The 4-Checkpoint Protocol before you commit to…”: A salary chart cannot tell you which…; The 4-Checkpoint Protocol…
- Title attribute: Use The 4-Checkpoint Protocol before you commit to either path
- Caption (also keep the key point in the HTML text): A salary chart cannot tell you which one fits your actual life and thinking style.
**V6 — Linear process chain or roadmap** (place after the H2 “Where each path leads at the senior level” #growth-paths)
- File: `business-analyst-vs-data-analyst-career-india-linear-where-each-path-leads.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is usually the most underweighted part of the decision.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Wider door into people leadership: product management, strategy, and eventually general… / Ceiling rises fastest for people who can own a project end to end and defend scope… / Growth is more relationship- and domain-driven than credential-driven, though CBAP does… / Technical depth compounds: added statistics and Python skill open data science and BI…
- Numbers: use ONLY these facts from the article (exact values, no new ones): The transition to product manager usually happens after 4-7 years of BA experience, most often at product companies or fintech firms where the two roles interact closely — product managers in India often start where senior BAs peak, so the move is frequently a | Senior strategy roles (Head of Strategy, strategy consulting partner track) generally need 10-15 years and require building commercial thinking, customer discovery skill, and comfort making high-stakes calls under uncertainty that the BA role alone does not fu
- Alt: Linear process chain or roadmap for “Where each path leads at the senior level”: Wider door into people leadership…; Ceiling rises fastest for people who…; Growth…
- Title attribute: Where each path leads at the senior level
- Caption (also keep the key point in the HTML text): This is usually the most underweighted part of the decision.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skills/career-development-skills/

**H1:** Career development skills: pick the one your career is stuck on  
**Category:** skills · **Words:** 6689 · **H2 sections:** 22 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 11 other articles, with identical alt text and captions, so they say nothing specific about “Career development skills: pick the one your career is…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skills/career-development-skills*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Why a list of ten…”, “The Career Blocker Check”, “Career development…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 92%, 93%, 94%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skills-editorial-cover.webp`, `skills-context.webp`, `skills-stack.webp`, `skills-practice.webp`, `skills-roadmap.webp`, `skills-feedback.webp`, `skills-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `career-development-skills.webp`, `career-development-skills-detail.webp`, `career-development-skills-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `career-development-skills-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `career-development-skills-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a learner at a laptop with a small project, a home study corner with natural window light. Props that belong to “Career development skills: pick the one your career is stuck on”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Career development skills: pick the one your career is stuck on
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `career-development-skills-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Career development skills list and matrix for students and professionals: choose by blocker, check current…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on career development skills / Why a list of ten career development skills does not help / The Career Blocker Check: four blockers, four different skills / Career development skills by career stage / The career development skills list, as a matrix
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Career development skills: pick the one your career is stuck on”
- Title attribute: At a glance: Career development skills: pick the one your career is…
- Caption (also keep the key point in the HTML text): Career development skills list and matrix for students and professionals: choose by blocker, check current India data and course quality, then prove…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The Career Blocker Check: four blockers, four different skills” #blocker-check)
- File: `career-development-skills-asymmetrical-career-blocker-check-four.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The Career Blocker Check is a simple way to choose.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): No shortlists / Interviews, but no offers / Employed, but not growing / Growing, but pay is capped
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The Career Blocker Check: four blockers, four…”: No shortlists; Interviews, but no offers; Employed, but not growing
- Title attribute: The Career Blocker Check: four blockers, four different skills
- Caption (also keep the key point in the HTML text): The Career Blocker Check is a simple way to choose.
**V3 — Comparison table** (place after the H2 “Career development skills for students” #students)
- File: `career-development-skills-comparison-career-development-skills-students.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A student has one thing most professionals do not: several years before the first pay cheque.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Year | Weekly reality | Build | Expensive mistake / Row: First year | New city or hostel, a… | Written English… | Paying for a bundle of… / Row: Second year | Syllabus is heavier.… | One core skill for the… | Starting four skills at… / Row: Third year | Internships, project work… | A multiplier on top of… | Collecting certificates… / Row: Final year and first… | Applications, interviews… | A pitch of thirty seconds… | Sending the same CV…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Government data shows that only 5.0% of people aged 15 to 29 had formal vocational or technical training in 2025, so a finished project already sets you apart. | And UGC told institutions in July 2026 that they may allow up to 40% of a semester's courses to be taken through SWAYAM.
- Alt: Comparison table for “Career development skills for students”: Year | Weekly reality | Build |…; First year | New city or hostel, a… |…; Second year | Syllabus is…
- Title attribute: Career development skills for students
- Caption (also keep the key point in the HTML text): A student has one thing most professionals do not: several years before the first pay cheque.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “What current data says about career development skills, and what it does not” #data)
- File: `career-development-skills-stat-current-data-says-about.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Surveys can help you check direction.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Surveys can help you check direction. / They cannot choose for you. / Here is what five recent sources say, with the limit of each.
- Numbers: use ONLY these facts from the article (exact values, no new ones): Global employer survey The World Economic Forum's Future of Jobs Report 2025 (published January 2025) finds that employers expect about 39% of existing skill sets to be transformed or outdated over 2025 to 2030, down from 44% in the 2023 edition. | It also finds that 63% of employers see skill gaps as a major barrier to their plans, and that about 7 in 10 rate analytical thinking as essential. | India employability test The India Skills Report 2026 (13th edition) puts employability at 56.35%, up from 54.81% the year before.
- Alt: Stat panel or bar chart (only the numbers listed) for “What current data says about career development…”: Surveys can help you check direction.; They cannot choose…
- Title attribute: What current data says about career development skills, and what it…
- Caption (also keep the key point in the HTML text): Surveys can help you check direction.
**V5 — Comparison table** (place after the H2 “Free first: the learning routes worth using” #learning-routes)
- File: `career-development-skills-comparison-free-first-learning-routes.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Much of the information you need is free.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Route | Cost | Best used for | Check before relying… / Row: Skill India Digital Hub | Many courses are listed… | Sampling a skill at no… | Scheme results vary.… / Row: SWAYAM and NPTEL | Course content is free. A… | University-level… | Your own college decides… / Row: AICTE National Internship… | Free to register.… | Verified internships with… | It serves students of… / Row: YouTube, official… | Free | Often more current than a… | No feedback and no… / Row: Paid course, cohort or… | Varies widely. Compare it… | Worth paying for when it… | A certificate alone…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Government data shows only 5.0% of people aged 15 to 29 had formal vocational or technical training in 2025, and independent analysts have questioned placement figures for earlier PMKVY rounds. | In a July 2026 notice, UGC told institutions they may let students take up to 40% of a semester's courses through SWAYAM, so credit is now more realistic.
- Alt: Comparison table for “Free first: the learning routes worth using”: Route | Cost | Best used for | Check…; Skill India Digital Hub | Many…; SWAYAM and NPTEL |…
- Title attribute: Free first: the learning routes worth using
- Caption (also keep the key point in the HTML text): Much of the information you need is free.
**V6 — Asymmetrical pros-and-cons comparison** (place after the H2 “If your question is a little different” #related)
- File: `career-development-skills-asymmetrical-question-little-different.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Want skills ranked by pay?
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Want skills ranked by pay? Best skills for high salary in India compares them. The… / No degree, or a weak one? High-income skills without a degree covers routes when the… / Switching fields? Upskilling for a career change helps you plan the move. / Looking for your first job? Skills needed for a first job in India lists what recruiters… / Want a readiness signal first? Skill assessment and career development assessment tests…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “If your question is a little different”: Want skills ranked by pay? Best…; No degree, or a weak one? High-income……
- Title attribute: If your question is a little different
- Caption (also keep the key point in the HTML text): Want skills ranked by pay?

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skills/content-marketing-vs-seo-career-india/

**H1:** Content marketing vs SEO career India: two jobs hiding under one job title  
**Category:** skills · **Words:** 5873 · **H2 sections:** 17 · **Search priority:** P3 (0 clicks, 7 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 11 other articles, with identical alt text and captions, so they say nothing specific about “Content marketing vs SEO career India: two jobs hiding…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skills/content-marketing-vs-seo-career-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Content Marketing”, “Seo Career India”, “The short answer”, “What the daily work…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 92%, 93%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skills-editorial-cover.webp`, `skills-context.webp`, `skills-stack.webp`, `skills-practice.webp`, `skills-roadmap.webp`, `skills-feedback.webp`, `skills-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `content-marketing-vs-seo-career-india.webp`, `content-marketing-vs-seo-career-india-detail.webp`, `content-marketing-vs-seo-career-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `content-marketing-vs-seo-career-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `content-marketing-vs-seo-career-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of an Indian student or adult at a home desk, a home study corner with natural window light. Props that belong to “Content marketing vs SEO career India: two jobs hiding under one job title”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Content marketing vs SEO career India: two jobs hiding under one job…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `content-marketing-vs-seo-career-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Content marketing vs SEO career India compared on real daily work, personality fit, entry barrier, salary…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to content marketing vs SEO career India / What the daily work actually looks like in each career / Personality and skill fit signals worth taking seriously / Learning curve and entry barrier: the part most comparisons skip / How to start learning each for free, before you spend anything
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Content marketing vs SEO career India: two jobs hiding under one job…”
- Title attribute: At a glance: Content marketing vs SEO career India: two jobs hiding…
- Caption (also keep the key point in the HTML text): Content marketing vs SEO career India compared on real daily work, personality fit, entry barrier, salary, and freelance demand — plus the overlap…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to content marketing vs SEO career India” #short-answer)
- File: `content-marketing-vs-seo-career-india-asymmetrical-short-answer-content-marketing.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no universal winner, and any article that hands you one has not actually sat inside both jobs long…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): There is no universal winner, and any article that hands you one has not… / Content marketing wins on voice and independence: it rewards a genuine point of… / SEO wins on structure and provability: the skill is easier to self-test against…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to content marketing vs SEO career…”: There is no universal winner, and any…; Content marketing wins on…
- Title attribute: The short answer to content marketing vs SEO career India
- Caption (also keep the key point in the HTML text): There is no universal winner, and any article that hands you one has not actually sat inside both jobs long enough to notice how differently they run…
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Personality and skill fit signals worth taking seriously” #fit-signals)
- File: `content-marketing-vs-seo-career-india-asymmetrical-personality-skill-fit-signals.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A quiz result or a single personality label will not settle this.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A quiz result or a single personality label will not settle this. / These four signals, drawn from how each job actually runs day to day, are more… / Points toward content You think in stories, not just structures You naturally…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Points toward SEO You are comfortable with slow, data-driven proof SEO results often take 3 to 6 months to show up clearly, and the proof lives inside a dashboard, not applause.
- Alt: Asymmetrical pros-and-cons comparison for “Personality and skill fit signals worth taking…”: A quiz result or a single personality…; These four signals, drawn from…
- Title attribute: Personality and skill fit signals worth taking seriously
- Caption (also keep the key point in the HTML text): A quiz result or a single personality label will not settle this.
**V4 — Linear process chain or roadmap** (place after the H2 “How to start learning each for free, before you spend anything” #free-resources)
- File: `content-marketing-vs-seo-career-india-linear-start-learning-each-free.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before you pay for a bootcamp or certification in either lane, test your fit on free material first.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Before you pay for a bootcamp or certification in either lane, test your fit on… / Most of the core knowledge in both fields is freely available; a paid course… / Content marketing Write in public before you pay for a course Start a free…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “How to start learning each for free, before you spend…”: Before you pay for a bootcamp or…; Most of the core knowledge in…
- Title attribute: How to start learning each for free, before you spend anything
- Caption (also keep the key point in the HTML text): Before you pay for a bootcamp or certification in either lane, test your fit on free material first.
**V5 — Comparison table** (place after the H2 “Salary reality: fresher to 5 years, without the marketing numbers” #salary-reality)
- File: `content-marketing-vs-seo-career-india-comparison-salary-reality-fresher-years.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary comparison pages for this exact keyword tend to quote whichever field's best-case numbers fit their…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Career stage | Content marketing | SEO / Row: Fresher, 0-1 years | Roughly Rs 2.5-5.5 LPA… | Roughly Rs 2.2-3 LPA for… / Row: 2-5 years experience | Roughly Rs 5.7-14 LPA as… | Roughly Rs 4.5-8.5 LPA… / Row: 5+ years, senior | Roughly Rs 10-25 LPA for… | Roughly Rs 12-25 LPA for… / Row: What moves the number most | Proof that your content… | Technical range (site…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Career stage Content marketing SEO Fresher, 0-1 years Roughly Rs 2.5-5.5 LPA for a content marketing specialist or writer role, with the higher end going to candidates who bring a real portfolio, not just a communications degree. | Roughly Rs 2.2-3 LPA for a pure SEO executive role, rising to Rs 3-5.5 LPA for freshers who can already run technical audits, since that is a narrower and more in-demand entry skill. | 2-5 years experience Roughly Rs 5.7-14 LPA as you move from content specialist into content strategist or marketing manager, with the strongest pay going to people who can also read analytics and tie content to pipeline, not just publish volume.
- Alt: Comparison table for “Salary reality: fresher to 5 years, without the…”: Career stage | Content marketing | SEO; Fresher, 0-1 years | Roughly Rs…; 2-5 years…
- Title attribute: Salary reality: fresher to 5 years, without the marketing numbers
- Caption (also keep the key point in the HTML text): Salary comparison pages for this exact keyword tend to quote whichever field's best-case numbers fit their narrative.
**V6 — Comparison table** (place after the H2 “The real career growth ceiling in each field” #growth-ceiling)
- File: `content-marketing-vs-seo-career-india-comparison-real-career-growth-ceiling.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The salary table above tells you the first five years.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Growth signal | Content marketing | SEO / Row: Typical promotion ladder | Writer to content… | SEO executive to SEO… / Row: Ceiling driven by | Your ability to prove… | Technical depth (site… / Row: India-specific demand… | India's digital content… | SEO hiring has… / Row: Independent income path | Very realistic and common… | Also realistic… / Wider independent-income door: ghostwriting, ongoing brand retainers, or a personal… / Ceiling rises fastest for people who can prove content drives revenue, not just…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “The real career growth ceiling in each field”: Growth signal | Content marketing |…; Typical promotion ladder | Writer to…; Ceiling driven by…
- Title attribute: The real career growth ceiling in each field
- Caption (also keep the key point in the HTML text): The salary table above tells you the first five years.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skills/graphic-design-vs-ui-ux-design-career-india/

**H1:** Graphic design vs UI/UX design career India: the honest fit-first comparison  
**Category:** skills · **Words:** 5501 · **H2 sections:** 16 · **Search priority:** P3 (0 clicks, 13 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 11 other articles, with identical alt text and captions, so they say nothing specific about “Graphic design vs UI/UX design career India: the honest…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skills/graphic-design-vs-ui-ux-design-career-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Graphic Design”, “Ui Ux Design Career…”, “The short answer”, “What the daily work…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 92%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skills-editorial-cover.webp`, `skills-context.webp`, `skills-stack.webp`, `skills-practice.webp`, `skills-roadmap.webp`, `skills-feedback.webp`, `skills-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `graphic-design-vs-ui-ux-design-career-india.webp`, `graphic-design-vs-ui-ux-design-career-india-detail.webp`, `graphic-design-vs-ui-ux-design-career-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `graphic-design-vs-ui-ux-design-career-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `graphic-design-vs-ui-ux-design-career-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of an Indian student or adult at a home desk, a home study corner with natural window light. Props that belong to “Graphic design vs UI/UX design career India: the honest fit-first comparison”: sketchbook, case notes, a camera or design samples. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Graphic design vs UI/UX design career India: the honest fit-first…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `graphic-design-vs-ui-ux-design-career-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Graphic design vs UI/UX design career India compared on real daily work, skill overlap, salary, freelance…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to graphic design vs UI/UX design career India / What the daily work actually looks like in each career / Personality and skill fit signals worth taking seriously / Learning curve and entry barrier: the part most comparisons skip / Salary reality: fresher to senior, without the marketing numbers
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Graphic design vs UI/UX design career India: the honest fit-first…”
- Title attribute: At a glance: Graphic design vs UI/UX design career India: the honest…
- Caption (also keep the key point in the HTML text): Graphic design vs UI/UX design career India compared on real daily work, skill overlap, salary, freelance viability, and growth ceiling — plus how to…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to graphic design vs UI/UX design career India” #short-answer)
- File: `graphic-design-vs-ui-ux-design-career-india-asymmetrical-short-answer-graphic-design.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no universal winner, and any article that hands you one has not actually looked at how differently…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): There is no universal winner, and any article that hands you one has not… / Graphic design wins on reach, speed, and independence: nearly every business… / UI/UX design wins on pay, structure, and long-term corporate growth: the skill…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to graphic design vs UI/UX design…”: There is no universal winner, and any…; Graphic design wins on…
- Title attribute: The short answer to graphic design vs UI/UX design career India
- Caption (also keep the key point in the HTML text): There is no universal winner, and any article that hands you one has not actually looked at how differently these two jobs feel on a Tuesday…
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Personality and skill fit signals worth taking seriously” #fit-signals)
- File: `graphic-design-vs-ui-ux-design-career-india-asymmetrical-personality-skill-fit-signals.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A quiz result or a single personality label will not settle this.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A quiz result or a single personality label will not settle this. / These four signals, drawn from how each job actually runs day to day, are more… / Points toward graphic design You want to see a finished, polished visual object…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Personality and skill fit signals worth taking…”: A quiz result or a single personality…; These four signals, drawn from…
- Title attribute: Personality and skill fit signals worth taking seriously
- Caption (also keep the key point in the HTML text): A quiz result or a single personality label will not settle this.
**V4 — Comparison table** (place after the H2 “Salary reality: fresher to senior, without the marketing numbers” #salary-reality)
- File: `graphic-design-vs-ui-ux-design-career-india-comparison-salary-reality-fresher-senior.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary comparison pages for this exact keyword tend to quote whichever field's best-case numbers fit their…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Career stage | Graphic design | UI/UX design / Row: Fresher, 0-1 years | Roughly Rs 2-4 LPA, with… | Roughly Rs 2.5-7 LPA… / Row: 3-5 years experience | Roughly Rs 5-8 LPA… | Roughly Rs 8-15 LPA, with… / Row: 5+ years, senior | Roughly Rs 8-15 LPA for… | Roughly Rs 18-30+ LPA for… / Row: What moves the number most | A visible, differentiated… | Proof that your design…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Career stage Graphic design UI/UX design Fresher, 0-1 years Roughly Rs 2-4 LPA, with high competition and low specialisation keeping the entry band narrow compared to product design roles. | Roughly Rs 2.5-7 LPA, with a strong case-study portfolio and demonstrated research skill pushing candidates toward the top of that range. | 3-5 years experience Roughly Rs 5-8 LPA, especially for designers who have added digital marketing, motion, or brand-strategy skill on top of core visual craft.
- Alt: Comparison table for “Salary reality: fresher to senior, without the…”: Career stage | Graphic design | UI/UX…; Fresher, 0-1 years | Roughly Rs 2-4…; 3-5 years…
- Title attribute: Salary reality: fresher to senior, without the marketing numbers
- Caption (also keep the key point in the HTML text): Salary comparison pages for this exact keyword tend to quote whichever field's best-case numbers fit their narrative.
**V5 — Comparison table** (place after the H2 “The real career growth ceiling in each field” #growth-ceiling)
- File: `graphic-design-vs-ui-ux-design-career-india-comparison-real-career-growth-ceiling.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The salary table above tells you the first few years.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Growth signal | Graphic design | UI/UX design / Row: Typical promotion ladder | Junior designer to senior… | Junior/associate designer… / Row: Ceiling driven by | Creative reputation… | Ability to tie design… / Row: India-specific demand… | Steady, broad demand —… | Design leaders report… / Row: Independent income path | Well-worn and common —… | Realistic but requires a… / Wider independent-income door: freelance, a small studio, or agency ownership are common… / Ceiling rises fastest for designers who add strategic brand or marketing thinking, not…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Design leaders report demand has increased or held steady across roughly 82% of organisations, with double-digit growth in several sectors, and tens of thousands of active listings across product, SaaS, fintech, and e-commerce companies.
- Alt: Comparison table for “The real career growth ceiling in each field”: Growth signal | Graphic design |…; Typical promotion ladder | Junior…; Ceiling driven by |…
- Title attribute: The real career growth ceiling in each field
- Caption (also keep the key point in the HTML text): The salary table above tells you the first few years.
**V6 — Linear process chain or roadmap** (place after the H2 “Use The 4-Checkpoint Protocol before you commit to either path” #checkpoint)
- File: `graphic-design-vs-ui-ux-design-career-india-linear-use-checkpoint-protocol-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A salary chart cannot tell you which one fits your actual life and thinking style.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A salary chart cannot tell you which one fits your actual life and thinking… / The 4-Checkpoint Protocol narrows this decision to what genuinely matters for… / 01 Biology Graphic design rewards people who want a fast, tangible creative win…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 02 Context Can your family runway absorb a fresher-level salary (Rs 2-4 LPA for graphic design, Rs 2.5-7 LPA for UI/UX) for the first 1-2 years while you build real proof?
- Alt: Linear process chain or roadmap for “Use The 4-Checkpoint Protocol before you commit to…”: A salary chart cannot tell you which…; The 4-Checkpoint Protocol…
- Title attribute: Use The 4-Checkpoint Protocol before you commit to either path
- Caption (also keep the key point in the HTML text): A salary chart cannot tell you which one fits your actual life and thinking style.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/skills/how-long-does-it-take-to-learn-digital-marketing-india/

**H1:** How long does it take to learn digital marketing in India: the honest, channel-by-channel timeline  
**Category:** skills · **Words:** 4361 · **H2 sections:** 16 · **Search priority:** P3 (0 clicks, 23 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 11 other articles, with identical alt text and captions, so they say nothing specific about “How long does it take to learn digital marketing in India…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/skills/how-long-does-it-take-to-learn-digital-marketing-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Timeline by channel…”, “Paid ads: fast to…”, “Email and CRM: the…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `skills-editorial-cover.webp`, `skills-context.webp`, `skills-stack.webp`, `skills-practice.webp`, `skills-roadmap.webp`, `skills-feedback.webp`, `skills-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `how-long-does-it-take-to-learn-digital-marketing-india.webp`, `how-long-does-it-take-to-learn-digital-marketing-india-detail.webp`, `how-long-does-it-take-to-learn-digital-marketing-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `how-long-does-it-take-to-learn-digital-marketing-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `how-long-does-it-take-to-learn-digital-marketing-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a learner at a laptop with a small project, a classroom desk after hours. Props that belong to “How long does it take to learn digital marketing in India: the honest…”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How long does it take to learn digital marketing in India: the…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-long-does-it-take-to-learn-digital-marketing-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How long does it take to learn digital marketing in India depends on which channel you mean — SEO, paid ads…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to how long it takes to learn digital marketing in… / Why "digital marketing" is not one skill / Timeline by channel: basics vs job-ready / SEO: the slowest to prove, not the slowest to learn / Paid ads: fast to start, expensive to test properly
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How long does it take to learn digital marketing in India: the…”
- Title attribute: At a glance: How long does it take to learn digital marketing in…
- Caption (also keep the key point in the HTML text): How long does it take to learn digital marketing in India depends on which channel you mean — SEO, paid ads, social, content, or email.
**V2 — Comparison table** (place after the H2 “Timeline by channel: basics vs job-ready” #channel-timelines)
- File: `how-long-does-it-take-to-learn-digital-marketing-india-comparison-timeline-channel-basics-job.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Here is the honest split for each major channel: how long the basics genuinely take, and how long real…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Channel | Basics timeline | Job-ready timeline | What makes it hard / Row: SEO | A focused stretch of a… | Roughly six months to a… | Search engines control… / Row: Paid ads (Google, Meta) | A short test period to… | A few months of running… | Practicing with play… / Row: Social media marketing | Days to a couple of weeks… | A few months of managing… | Everyone thinks they… / Row: Content marketing /… | A short stretch to learn… | Several months to a year… | Writing that sounds good… / Row: Email marketing and CRM | A focused couple of weeks… | One to two months of… | The tool is easy; writing…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Timeline by channel: basics vs job-ready”: Channel | Basics timeline | Job-ready…; SEO | A focused stretch of a… |…; Paid ads (Google, Meta) |…
- Title attribute: Timeline by channel: basics vs job-ready
- Caption (also keep the key point in the HTML text): Here is the honest split for each major channel: how long the basics genuinely take, and how long real job-readiness tends to take once you count…
**V3 — Linear process chain or roadmap** (place after the H2 “Email and CRM: the fastest real skill to build” #email-crm-timeline)
- File: `how-long-does-it-take-to-learn-digital-marketing-india-linear-email-crm-fastest-real.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Of every channel inside digital marketing, email marketing and CRM automation typically have the shortest…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Of every channel inside digital marketing, email marketing and CRM automation… / A focused couple of weeks is usually enough to learn one platform (Mailchimp… / A further one to two months of building real sequences — welcome flows…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Email and CRM: the fastest real skill to build”: Of every channel inside digital…; A focused couple of weeks is usually…; A…
- Title attribute: Email and CRM: the fastest real skill to build
- Caption (also keep the key point in the HTML text): Of every channel inside digital marketing, email marketing and CRM automation typically have the shortest genuine path to competence.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Course-duration claims vs what job-ready actually needs” #course-vs-real)
- File: `how-long-does-it-take-to-learn-digital-marketing-india-asymmetrical-course-duration-claims-job.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most structured digital marketing courses in India advertise a three to four month duration.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Whether you can open Google Ads Manager, GA4, or a CRM and produce a result without… / A portfolio that states outcomes ("reduced cost per lead from X to Y") rather than only… / A live task or a short paid trial project, increasingly common in place of relying on… / Genuine depth in at least one channel, plus familiarity with the standard tools for that…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A portfolio that states outcomes ("reduced cost per lead from X to Y") rather than only activities ("managed a Rs 50,000/month budget").
- Alt: Asymmetrical pros-and-cons comparison for “Course-duration claims vs what job-ready actually needs”: Whether you can open Google Ads…; A portfolio that states…
- Title attribute: Course-duration claims vs what job-ready actually needs
- Caption (also keep the key point in the HTML text): Most structured digital marketing courses in India advertise a three to four month duration.
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that stretch the timeline for no good reason” #mistakes)
- File: `how-long-does-it-take-to-learn-digital-marketing-india-mistakes-mistakes-stretch-timeline-good.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Treating "digital marketing" as one 3-month finish line A single course completion date does not mean you…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 01 Treating "digital marketing" as one 3-month finish line A single course… / Most people are genuinely job-ready in one or two channels first, not all five… / 02 Confusing course duration with job-readiness A 3 to 4 month course teaches…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 02 Confusing course duration with job-readiness A 3 to 4 month course teaches the vocabulary and the tools. | 03 Practicing only with fake or play-money budgets A simulated ₹0 ad campaign teaches you the platform interface, not the judgment that comes from watching a real budget underperform and having to explain why.
- Alt: Mistakes versus smarter move panel for “Mistakes that stretch the timeline for no good reason”: 01 Treating "digital marketing" as…; Most people are genuinely…
- Title attribute: Mistakes that stretch the timeline for no good reason
- Caption (also keep the key point in the HTML text): 01 Treating "digital marketing" as one 3-month finish line A single course completion date does not mean you are equally ready in SEO, paid ads…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
