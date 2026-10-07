# Image audit — blog category: study-abroad

15 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/study-abroad/ms-in-computer-science-vs-mba-india/

**H1:** MS in Computer Science vs MBA: Which Should Indian Engineers Actually Pursue?  
**Category:** study-abroad · **Words:** 3420 · **H2 sections:** 11 · **Search priority:** P1 (1 clicks, 217 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “MS in Computer Science vs MBA: Which Should Indian…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/study-abroad/ms-in-computer-science-vs-mba-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Ms In Computer Science”, “Mba India”, “The direct answer”, “Where each path…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `study-abroad-editorial-cover.webp`, `study-abroad-context.webp`, `study-abroad-filters.webp`, `study-abroad-family.webp`, `study-abroad-chain.webp`, `study-abroad-research.webp`, `study-abroad-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `ms-in-computer-science-vs-mba-india.webp`, `ms-in-computer-science-vs-mba-india-detail.webp`, `ms-in-computer-science-vs-mba-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `ms-in-computer-science-vs-mba-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `ms-in-computer-science-vs-mba-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a final-year student or recent graduate, a shared neighbourhood workspace. Props that belong to “MS in Computer Science vs MBA: Which Should Indian Engineers Actually Pursue?”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: MS in Computer Science vs MBA: Which Should Indian Engineers Actually…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `ms-in-computer-science-vs-mba-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: MS in Computer Science vs MBA for Indian engineers: real cost and duration, where each path leads, which…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The direct answer: MS in Computer Science vs MBA / Where each path actually leads / Cost and duration compared / Salary and career trajectory / Which background fits which path
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “MS in Computer Science vs MBA: Which Should Indian Engineers Actually…”
- Title attribute: At a glance: MS in Computer Science vs MBA: Which Should Indian…
- Caption (also keep the key point in the HTML text): MS in Computer Science vs MBA for Indian engineers: real cost and duration, where each path leads, which background fits which, and honest cases for…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The direct answer: MS in Computer Science vs MBA” #answer)
- File: `ms-in-computer-science-vs-mba-india-asymmetrical-direct-answer-computer-science.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: These are not two versions of the same decision.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): "An MBA always pays more than a technical master's." / "MS is only for people who can't get into a good MBA programme." / "You should do whichever one your friends or seniors did." / "Any master's abroad guarantees a strong return."
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The direct answer: MS in Computer Science vs MBA”: "An MBA always pays more than a…; "MS is only for people who can't…
- Title attribute: The direct answer: MS in Computer Science vs MBA
- Caption (also keep the key point in the HTML text): These are not two versions of the same decision.
**V3 — Linear process chain or roadmap** (place after the H2 “Where each path actually leads” #leads-to)
- File: `ms-in-computer-science-vs-mba-india-linear-where-each-path-actually.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before comparing cost or salary, it helps to see what each degree is structurally built to produce, since…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Deeper technical specialization: systems, ML/AI, security, distributed computing, or a… / Roles like software engineer, ML engineer, applied scientist, or platform/infra engineer… / A direct route into US or Canadian tech hiring, since most MSCS programmes are built… / A narrower but deeper resume: the story is "I went deeper into the craft," not "I… / A generalist management track: product management, strategy, consulting, operations, or…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Where each path actually leads”: Deeper technical specialization…; Roles like software engineer, ML…; A direct route into US or…
- Title attribute: Where each path actually leads
- Caption (also keep the key point in the HTML text): Before comparing cost or salary, it helps to see what each degree is structurally built to produce, since that decides whether the ROI numbers even…
**V4 — Comparison table** (place after the H2 “Cost and duration compared” #cost)
- File: `ms-in-computer-science-vs-mba-india-comparison-cost-duration-compared.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The numbers below are the full picture most comparisons skip: not just tuition, but duration, entrance…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Factor | MS in Computer Science | MBA / Row: Typical duration | 1.5-2 years, usually… | 1-2 years, but most… / Row: Total cost (tuition +… | Roughly $40,000-$75,000 a… | A top Indian MBA… / Row: Entrance test | GRE (increasingly… | GMAT or GRE, plus… / Row: Funding reality | Some funded research… | Merit scholarships exist…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Factor MS in Computer Science MBA Typical duration 1.5-2 years, usually taken right after a bachelor's degree or with 0-2 years of work experience 1-2 years, but most competitive programmes expect 2-5 years of work experience before you apply Total cost (tuiti
- Alt: Comparison table for “Cost and duration compared”: Factor | MS in Computer Science | MBA; Typical duration | 1.5-2 years…; Total cost (tuition +… | Roughly…
- Title attribute: Cost and duration compared
- Caption (also keep the key point in the HTML text): The numbers below are the full picture most comparisons skip: not just tuition, but duration, entrance requirements, and how each programme is…
**V5 — Linear process chain or roadmap** (place after the H2 “Which background fits which path” #fit)
- File: `ms-in-computer-science-vs-mba-india-linear-background-fits-path.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Self-assessment beats guesswork here.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You enjoy the actual act of building: writing code, debugging systems, or designing… / You already have a reasonably strong CS or engineering foundation and want to specialize… / You are early in your career (0-2 years experience) or straight out of a bachelor's… / Your target outcome is a technical role at a product company, not a seat at the… / You have already worked for a few years and found the parts of the job you enjoy most are…
- Numbers: use ONLY these facts from the article (exact values, no new ones): You are early in your career (0-2 years experience) or straight out of a bachelor's degree, which fits MSCS admission norms better than most competitive MBA programmes. | You are comfortable that your technical depth will plateau in favour of breadth: you are trading "I can build it" for "I can decide what gets built." You can meet or are close to meeting the 2-5 years of work experience most strong MBA programmes expect from a
- Alt: Linear process chain or roadmap for “Which background fits which path”: You enjoy the actual act of building…; You already have a reasonably strong…; You are early…
- Title attribute: Which background fits which path
- Caption (also keep the key point in the HTML text): Self-assessment beats guesswork here.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/canada-vs-germany-for-masters-india/

**H1:** Canada vs Germany for masters India: the real cost, visa, and job-market math  
**Category:** study-abroad · **Words:** 3189 · **H2 sections:** 10 · **Search priority:** P2 (0 clicks, 131 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/study-abroad/canada-vs-germany-masters/canada-vs-germany-masters-india-social.jpg

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 5 authored images on the page (hero + 4 supporting).
2. Verify costs and rules: CAD 21,100 vs near-zero tuition, living CAD 25,000 vs EUR 11,200, 18-month job-seeker permit, 3-year PGWP.
3. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
4. 1 images have no caption: `canada-vs-germany-masters-india-1440.webp`

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `study-abroad/canada-vs-germany-masters/canada-vs-germany-masters-india-1440.webp` | 1440x810 | 1440x811 | eager | 17% | no caption |
| `study-abroad/canada-vs-germany-masters/masters-cost-canada-vs-germany-1080.webp` | 1080x1350 | 1080x1350 | lazy | 36% | ok |
| `study-abroad/canada-vs-germany-masters/canada-vs-germany-post-study-path-1080.webp` | 1080x1350 | 1080x1350 | lazy | 45% | ok |
| `study-abroad/canada-vs-germany-masters/canada-vs-germany-best-fit-by-field-1080.webp` | 1080x1350 | 1080x1350 | lazy | 59% | ok |
| `study-abroad/canada-vs-germany-masters/canada-vs-germany-decision-filter-1080.webp` | 1080x1350 | 1080x1350 | lazy | 72% | ok |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `canada-vs-germany-for-masters-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `canada-vs-germany-for-masters-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a student and parent comparing study-abroad costs, a family dining table in the evening. Props that belong to “Canada vs Germany for masters India: the real cost, visa, and job-market math”: passport, university brochures, a cost spreadsheet printout. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Canada vs Germany for masters India: the real cost, visa, and…
- Caption: one sentence tying the scene to the article's decision.
2. CREATE 1 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `canada-vs-germany-for-masters-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Canada vs Germany for masters India (or Germany vs Canada, depending on which way you are leaning) comes down…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "which country is better" is the wrong first question / Cost comparison: what a masters actually costs, all-in / Post-study work visa mechanics: PGWP vs the German job-seeker visa / PR pathway clarity: Express Entry vs the Blue Card and settlement… / Job market fit by field: where each country actually hires
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Canada vs Germany for masters India: the real cost, visa, and…”
- Title attribute: At a glance: Canada vs Germany for masters India: the real cost, visa…
- Caption (also keep the key point in the HTML text): Canada vs Germany for masters India (or Germany vs Canada, depending on which way you are leaning) comes down to three honest trade-offs: Canada…
3. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
4. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/foreign-degree-vs-india-degree-value-job-market/

**H1:** Foreign degree vs India degree value in job market: where the premium is real  
**Category:** study-abroad · **Words:** 2952 · **H2 sections:** 8 · **Search priority:** P2 (1 clicks, 71 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Foreign degree vs India degree value in job market: where…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/study-abroad/foreign-degree-vs-india-degree-value-job-market*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Foreign Degree”, “India Degree Value Job…”, “Why this question keeps…”, “Where it barely makes a…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 85%, 86%, 87%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `study-abroad-editorial-cover.webp`, `study-abroad-context.webp`, `study-abroad-filters.webp`, `study-abroad-family.webp`, `study-abroad-chain.webp`, `study-abroad-research.webp`, `study-abroad-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `foreign-degree-vs-india-degree-value-job-market.webp`, `foreign-degree-vs-india-degree-value-job-market-detail.webp`, `foreign-degree-vs-india-degree-value-job-market-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `foreign-degree-vs-india-degree-value-job-market-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `foreign-degree-vs-india-degree-value-job-market-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a final-year student or recent graduate, a neighbourhood cafe table. Props that belong to “Foreign degree vs India degree value in job market: where the premium is real”: a printed resume, a job description, a notebook, a phone. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Foreign degree vs India degree value in job market: where the premium…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `foreign-degree-vs-india-degree-value-job-market-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Foreign degree vs India degree value in job market is not a single yes-or-no answer — it depends entirely on…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why this question keeps coming up / Where a foreign degree genuinely moves the needle / Where it barely makes a difference / The skills-first shift changing the whole calculation / A quick decision filter before you spend on a foreign degree
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Foreign degree vs India degree value in job market: where the premium…”
- Title attribute: At a glance: Foreign degree vs India degree value in job market…
- Caption (also keep the key point in the HTML text): Foreign degree vs India degree value in job market is not a single yes-or-no answer — it depends entirely on the sector, the role, and the specific…
**V2 — Self-assessment checklist** (place after the H2 “Why this question keeps coming up”)
- File: `foreign-degree-vs-india-degree-value-job-market-self-question-keeps-coming.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every admissions season, some version of the same debate plays out in Indian households: does a foreign…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Every admissions season, some version of the same debate plays out in Indian… / The honest answer sits between the two extremes people usually argue. / A foreign degree is not a golden ticket that guarantees a better job.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Why this question keeps coming up”: Every admissions season, some version…; The honest answer sits between the…; A foreign degree is…
- Title attribute: Why this question keeps coming up
- Caption (also keep the key point in the HTML text): Every admissions season, some version of the same debate plays out in Indian households: does a foreign degree actually help you get hired, or is it…
**V3 — Comparison table** (place after the H2 “Where it barely makes a difference”)
- File: `foreign-degree-vs-india-degree-value-job-market-comparison-where-barely-makes-difference.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Outside those specific pockets, most hiring in India runs on a very different logic.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Hiring context | What actually decides… | Foreign-degree effect / Row: IT services and product… | Coding tests, system… | Minimal — skills tests… / Row: Sales, marketing, and… | Track record… | Minimal to none / Row: Government-linked and PSU… | Entrance exam scores… | Neutral to negative if… / Row: Small and mid-size… | Referral trust, immediate… | Minimal, occasionally… / Row: Global consulting… | Target-school pipelines… | Meaningful, tied closely…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Where it barely makes a difference”: Hiring context | What actually…; IT services and product… | Coding…; Sales, marketing, and… | Track…
- Title attribute: Where it barely makes a difference
- Caption (also keep the key point in the HTML text): Outside those specific pockets, most hiring in India runs on a very different logic.
**V4 — Skill map** (place after the H2 “The skills-first shift changing the whole calculation”)
- File: `foreign-degree-vs-india-degree-value-job-market-skill-skills-first-shift-changing.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The bigger story for anyone weighing this decision right now is not foreign versus domestic — it is degree…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What this means in practice / The bigger story for anyone weighing this decision right now is not foreign… / Multiple recent employer surveys point the same direction: a large majority of… / A separate hiring survey conducted between December 2024 and January 2025 found…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Multiple recent employer surveys point the same direction: a large majority of Indian employers, roughly 80% in a widely cited industry survey, now say they weigh skills and demonstrated ability above formal degrees when shortlisting candidates.
- Alt: Skill map for “The skills-first shift changing the whole calculation”: What this means in practice; The bigger story for anyone weighing…; Multiple recent employer…
- Title attribute: The skills-first shift changing the whole calculation
- Caption (also keep the key point in the HTML text): The bigger story for anyone weighing this decision right now is not foreign versus domestic — it is degree versus skill.
**V5 — Comparison table** (place after the H2 “A quick decision filter before you spend on a foreign degree”)
- File: `foreign-degree-vs-india-degree-value-job-market-comparison-quick-decision-filter-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Use this as a starting filter for your own field, then verify the specifics — placement outcomes, alumni…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Your situation | Leans toward / Row: Target field is global… | Foreign degree from a… / Row: Target field is tech… | Skills, portfolio, and… / Row: Shortlisted foreign… | A strong Indian institute… / Row: Target roles are… | Verify equivalence and… / Row: Main reason for going… | Clarify the actual target…
- Numbers: use ONLY these facts from the article (exact values, no new ones): As a strict planning heuristic, most of a family's total education budget is better protected than committed to any single foreign program on perception alone — a common working benchmark is capping any one prestige-driven bet at around 10% of the total educat
- Alt: Comparison table for “A quick decision filter before you spend on a foreign…”: Your situation | Leans toward; Target field is global… | Foreign…; Target field is…
- Title attribute: A quick decision filter before you spend on a foreign degree
- Caption (also keep the key point in the HTML text): Use this as a starting filter for your own field, then verify the specifics — placement outcomes, alumni destinations, and current recruiter…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/is-ms-in-usa-worth-it-india/

**H1:** Is MS in USA worth it for Indian students? The real ROI math  
**Category:** study-abroad · **Words:** 3203 · **H2 sections:** 9 · **Search priority:** P2 (0 clicks, 26 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/study-abroad/ms-usa-roi/ms-in-usa-worth-it-indian-students-social.jpg

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 6 authored images on the page (hero + 5 supporting).
2. Verify H1B selection odds by wage level (15%, 31%, 46%, 61%), OPT 12 vs 36 months, cost bands, USD 70k-98k earnings.
3. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
4. 1 images have no caption: `ms-in-usa-worth-it-indian-students-1440.webp`
5. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `ms-usa-earnings-opt-window-1080.webp`: 70k, 98k, 90k, 120k; `ms-usa-vs-stay-in-india-decision-filter-1080.webp`: 177. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `study-abroad/ms-usa-roi/ms-in-usa-worth-it-indian-students-1440.webp` | 1440x810 | 1440x811 | eager | 17% | no caption |
| `study-abroad/ms-usa-roi/four-checks-before-ms-in-usa-1080.webp` | 1080x1350 | 1080x1350 | lazy | 28% | ok |
| `study-abroad/ms-usa-roi/ms-usa-cost-by-university-tier-1080.webp` | 1080x1350 | 1080x1350 | lazy | 39% | ok |
| `study-abroad/ms-usa-roi/ms-usa-earnings-opt-window-1080.webp` | 1080x1350 | 1080x1350 | lazy | 47% | ok |
| `study-abroad/ms-usa-roi/h1b-selection-odds-by-wage-level-1080.webp` | 1080x1350 | 1080x1350 | lazy | 53% | ok |
| `study-abroad/ms-usa-roi/ms-usa-vs-stay-in-india-decision-filter-1080.webp` | 1080x1350 | 1080x1350 | lazy | 69% | ok |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `is-ms-in-usa-worth-it-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `is-ms-in-usa-worth-it-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a student and parent comparing study-abroad costs, a family dining table in the evening. Props that belong to “Is MS in USA worth it for Indian students? The real ROI math”: passport, university brochures, a cost spreadsheet printout. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Is MS in USA worth it for Indian students? The real ROI math
- Caption: one sentence tying the scene to the article's decision.
2. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
3. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/opt-after-ms-in-usa-for-indian-students/

**H1:** OPT after MS in USA for Indian students: the rules that decide your timeline  
**Category:** study-abroad · **Words:** 3876 · **H2 sections:** 11 · **Search priority:** P2 (2 clicks, 61 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “OPT after MS in USA for Indian students: the rules that…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/study-abroad/opt-after-ms-in-usa-for-indian-students*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“How does OPT connect to…”, “Can I be self-employed…”, “OPT application…”, “The…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `study-abroad-editorial-cover.webp`, `study-abroad-context.webp`, `study-abroad-filters.webp`, `study-abroad-family.webp`, `study-abroad-chain.webp`, `study-abroad-research.webp`, `study-abroad-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `opt-after-ms-in-usa-for-indian-students.webp`, `opt-after-ms-in-usa-for-indian-students-detail.webp`, `opt-after-ms-in-usa-for-indian-students-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `opt-after-ms-in-usa-for-indian-students-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `opt-after-ms-in-usa-for-indian-students-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a Class 12 or first-year medical aspirant, a home study corner with natural window light. Props that belong to “OPT after MS in USA for Indian students: the rules that decide your timeline”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: OPT after MS in USA for Indian students: the rules that decide your…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `opt-after-ms-in-usa-for-indian-students-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: OPT after MS in USA for Indian students runs on a set of fixed mechanics, not a vague "work permit after…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why the mechanics matter more than the headline number / Standard 12-month OPT vs the 24-month STEM OPT extension / OPT application timeline and filing windows / The unemployment-day-limit rule / Employer sponsorship requirements: what changes with STEM OPT
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “OPT after MS in USA for Indian students: the rules that decide your…”
- Title attribute: At a glance: OPT after MS in USA for Indian students: the rules that…
- Caption (also keep the key point in the HTML text): OPT after MS in USA for Indian students runs on a set of fixed mechanics, not a vague "work permit after graduation" idea: a 12-month standard…
**V2 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Why the mechanics matter more than the headline number”)
- File: `opt-after-ms-in-usa-for-indian-students-stat-mechanics-matter-more-than.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most explanations of OPT stop at "12 months, or 36 if you did a STEM degree." That headline hides the parts…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Most explanations of OPT stop at "12 months, or 36 if you did a STEM degree."… / Indian students make up one of the largest groups on OPT in the US, and the… / What follows is the mechanics only: eligibility, timelines, the unemployment…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Most explanations of OPT stop at "12 months, or 36 if you did a STEM degree." That headline hides the parts that actually determine whether you keep your work authorization: exact filing windows, a hard unemployment-day cap, an employer requirement most compan
- Alt: Stat panel or bar chart (only the numbers listed) for “Why the mechanics matter more than the headline number”: Most explanations of OPT stop at "12…; Indian…
- Title attribute: Why the mechanics matter more than the headline number
- Caption (also keep the key point in the HTML text): Most explanations of OPT stop at "12 months, or 36 if you did a STEM degree." That headline hides the parts that actually determine whether you keep…
**V3 — Comparison table** (place after the H2 “Standard 12-month OPT vs the 24-month STEM OPT extension”)
- File: `opt-after-ms-in-usa-for-indian-students-comparison-standard-month-opt-month.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every F-1 student who completes a degree is eligible to apply for standard post-completion Optional Practical…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Requirement | Standard OPT (12… | STEM OPT extension… / Row: Degree eligibility | Any completed degree, any… | Degree must appear on the… / Row: Employer requirement | Job must relate to your… | Employer must be enrolled… / Row: Formal training plan | Not required | Form I-983 training plan… / Row: Unemployment allowance | Up to 90 days | An additional 60 days… / Row: Total possible work… | 12 months | Up to 36 months combined
- Numbers: use ONLY these facts from the article (exact values, no new ones): Every F-1 student who completes a degree is eligible to apply for standard post-completion Optional Practical Training: 12 months of work authorization in a role directly related to your field of study. | This applies regardless of your major — a non-STEM MS graduate gets the same 12 months as a STEM graduate at this stage. | You do not automatically get it just because your MS "sounds technical." Requirement Standard OPT (12 months) STEM OPT extension (+24 months) Degree eligibility Any completed degree, any field Degree must appear on the official STEM Designated Degree Program L
- Alt: Comparison table for “Standard 12-month OPT vs the 24-month STEM OPT…”: Requirement | Standard OPT (12… |…; Degree eligibility | Any completed…; Employer…
- Title attribute: Standard 12-month OPT vs the 24-month STEM OPT extension
- Caption (also keep the key point in the HTML text): Every F-1 student who completes a degree is eligible to apply for standard post-completion Optional Practical Training: 12 months of work…
**V4 — Comparison table** (place after the H2 “OPT application timeline and filing windows”)
- File: `opt-after-ms-in-usa-for-indian-students-comparison-opt-application-timeline-filing.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The filing window is the part students most commonly get wrong, usually by treating "after graduation" as the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Milestone | Rule / Row: Earliest you can file… | 90 days before your… / Row: Latest you can file after… | 60 days after your… / Row: DSO recommendation window | USCIS must receive your… / Row: Typical processing time | Roughly 90-120 days… / Row: Grace period if you miss… | Falling out of the filing…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “OPT application timeline and filing windows”: Milestone | Rule; Earliest you can file… | 90 days…; Latest you can file after… | 60 days…
- Title attribute: OPT application timeline and filing windows
- Caption (also keep the key point in the HTML text): The filing window is the part students most commonly get wrong, usually by treating "after graduation" as the trigger instead of the actual program…
**V5 — Self-assessment checklist** (place after the H2 “Employer sponsorship requirements: what changes with STEM OPT”)
- File: `opt-after-ms-in-usa-for-indian-students-self-employer-sponsorship-requirements-changes.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A standard 12-month OPT hire is administratively simple for an employer — there is no special registration or…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What the employer must do for STEM OPT / Why some employers avoid it / Be actively enrolled in E-Verify and remain in good standing with the program for the… / Complete and sign Form I-983, a structured training plan describing the specific goals… / Report material changes, such as a change in your role, supervisor, or worksite, within… / Conduct periodic self-evaluations with you as part of the I-983 training plan, typically… / Smaller companies and startups sometimes are not enrolled in E-Verify and choose not to…
- Numbers: use ONLY these facts from the article (exact values, no new ones): The STEM OPT extension is a different commitment, and this is exactly why some employers who are happy to hire you for the initial 12 months hesitate, or decline, when the STEM extension conversation comes up.
- Alt: Self-assessment checklist for “Employer sponsorship requirements: what changes with…”: What the employer must do for STEM OPT; Why some employers avoid it; Be…
- Title attribute: Employer sponsorship requirements: what changes with STEM OPT
- Caption (also keep the key point in the HTML text): A standard 12-month OPT hire is administratively simple for an employer — there is no special registration or ongoing compliance obligation tied to…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/return-to-india-after-ms-abroad/

**H1:** Return to India after MS abroad: the practical playbook for timing, jobs, and money  
**Category:** study-abroad · **Words:** 3572 · **H2 sections:** 11 · **Search priority:** P2 (2 clicks, 94 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Return to India after MS abroad: the practical playbook for…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/study-abroad/return-to-india-after-ms-abroad*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The 3-Window Return Plan”, “Timing your move around…”, “Job search strategy…”, “How Indian employers…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `study-abroad-editorial-cover.webp`, `study-abroad-context.webp`, `study-abroad-filters.webp`, `study-abroad-family.webp`, `study-abroad-chain.webp`, `study-abroad-research.webp`, `study-abroad-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `return-to-india-after-ms-abroad.webp`, `return-to-india-after-ms-abroad-detail.webp`, `return-to-india-after-ms-abroad-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `return-to-india-after-ms-abroad-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `return-to-india-after-ms-abroad-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a student and parent comparing study-abroad costs, a counselling room with a plain wooden table. Props that belong to “Return to India after MS abroad: the practical playbook for timing, jobs, and…”: passport, university brochures, a cost spreadsheet printout. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Return to India after MS abroad: the practical playbook for timing…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `return-to-india-after-ms-abroad-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Return to India after MS abroad, done right: time your move around OPT and visa windows, target Indian…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The 3-Window Return Plan / Timing your move around OPT and visa rules / Job search strategy targeting India / How Indian employers actually value a foreign MS / What the salary reset really looks like
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Return to India after MS abroad: the practical playbook for timing…”
- Title attribute: At a glance: Return to India after MS abroad: the practical playbook…
- Caption (also keep the key point in the HTML text): Return to India after MS abroad, done right: time your move around OPT and visa windows, target Indian employers before you land, and set real salary…
**V2 — Linear process chain or roadmap** (place after the H2 “The 3-Window Return Plan” #windows)
- File: `return-to-india-after-ms-abroad-linear-window-return-plan.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most of the stress around returning to India after MS abroad comes from treating it as one giant, vague…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Plan window: 6-12 months out / Transition window: your final 90 days abroad / Landing window: your first 90 days in India
- Numbers: use ONLY these facts from the article (exact values, no new ones): 01 Plan window: 6-12 months out Runs from the point you decide to return through your last full semester.
- Alt: Linear process chain or roadmap for “The 3-Window Return Plan”: Plan window: 6-12 months out; Transition window: your final 90 days…; Landing window: your first 90…
- Title attribute: The 3-Window Return Plan
- Caption (also keep the key point in the HTML text): Most of the stress around returning to India after MS abroad comes from treating it as one giant, vague "sometime in the next year" event instead of…
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Job search strategy targeting India” #job-search)
- File: `return-to-india-after-ms-abroad-stat-job-search-strategy-targeting.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A job search built for US campus recruiting and a job search built for the Indian market are not the same…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): India-specific job boards and referrals, not the US campus portal / India offices of the multinationals you are already interviewing with / Start the India-facing search 3-4 months before your planned landing… / Target sectors with a live demand-supply gap first
- Numbers: use ONLY these facts from the article (exact values, no new ones): Timing Start the India-facing search 3-4 months before your planned landing date Indian hiring cycles do not run on the same calendar as US campus recruiting.
- Alt: Stat panel or bar chart (only the numbers listed) for “Job search strategy targeting India”: India-specific job boards and…; India offices of the multinationals……
- Title attribute: Job search strategy targeting India
- Caption (also keep the key point in the HTML text): A job search built for US campus recruiting and a job search built for the Indian market are not the same search.
**V4 — Comparison table** (place after the H2 “What the salary reset really looks like” #salary-reset)
- File: `return-to-india-after-ms-abroad-comparison-salary-reset-really-looks.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "Salary reset" is the right phrase, but it is easy to picture it as worse than the data actually shows…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Return path | Reported India… / Row: Return immediately after… | Roughly Rs 15-26 lakh per… / Row: Return after 1 year of… | Roughly 30-45% higher… / Row: Return after 2-3 years of… | Roughly Rs 18-25 lakh+…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Return path Reported India landing salary range Return immediately after MS, no work experience abroad Roughly Rs 15-26 lakh per year for a UK MS in IT, engineering, or science roles; figures vary by university tier and specialization. | Return after 1 year of industry experience abroad Roughly 30-45% higher landing salary in India than an immediate return with the same degree, based on reported UK industry-experience data. | Return after 2-3 years of work experience abroad Roughly Rs 18-25 lakh+ reported for candidates with international work experience, against roughly Rs 8-12 lakh for a same-age fresher with no abroad work experience.
- Alt: Comparison table for “What the salary reset really looks like”: Return path | Reported India…; Return immediately after… | Roughly…; Return after 1 year of… |…
- Title attribute: What the salary reset really looks like
- Caption (also keep the key point in the HTML text): "Salary reset" is the right phrase, but it is easy to picture it as worse than the data actually shows, especially if you are only comparing raw…
**V5 — Comparison table** (place after the H2 “The relocation logistics checklist” #relocation)
- File: `return-to-india-after-ms-abroad-comparison-relocation-logistics-checklist.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the part most return-focused advice skips entirely in favor of career talk.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Task | What to actually do / Row: Tax residency status | You become an Indian tax… / Row: NRE/NRO account conversion | Your NRE and NRO accounts… / Row: Foreign currency you are… | An RFC (Resident Foreign… / Row: Shipping your belongings | Sea freight is cheaper… / Row: Customs on personal… | Returning students and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Higher earners with more than roughly Rs 15 lakh of India income can trigger resident-but-not-ordinarily-resident (RNOR) status even sooner. | Shipping your belongings Sea freight is cheaper and takes roughly 6-8 weeks; air freight is faster, roughly 1-2 weeks, at a real cost premium. | Start this checklist 6-12 months before your intended move, not in your final month abroad.
- Alt: Comparison table for “The relocation logistics checklist”: Task | What to actually do; Tax residency status | You become an…; NRE/NRO account conversion | Your NRE…
- Title attribute: The relocation logistics checklist
- Caption (also keep the key point in the HTML text): This is the part most return-focused advice skips entirely in favor of career talk.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/stay-abroad-vs-return-to-india-after-studies/

**H1:** Stay Abroad vs Return to India After Studies: A Real Decision Framework  
**Category:** study-abroad · **Words:** 3305 · **H2 sections:** 11 · **Search priority:** P2 (0 clicks, 32 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Stay Abroad vs Return to India After Studies: A Real…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/study-abroad/stay-abroad-vs-return-to-india-after-studies*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Stay Abroad”, “Return To India After…”, “The five-factor…”, “Career trajectory and…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `study-abroad-editorial-cover.webp`, `study-abroad-context.webp`, `study-abroad-filters.webp`, `study-abroad-family.webp`, `study-abroad-chain.webp`, `study-abroad-research.webp`, `study-abroad-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `stay-abroad-vs-return-to-india-after-studies.webp`, `stay-abroad-vs-return-to-india-after-studies-detail.webp`, `stay-abroad-vs-return-to-india-after-studies-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `stay-abroad-vs-return-to-india-after-studies-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `stay-abroad-vs-return-to-india-after-studies-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a student and parent comparing study-abroad costs, a family dining table in the evening. Props that belong to “Stay Abroad vs Return to India After Studies: A Real Decision Framework”: passport, university brochures, a cost spreadsheet printout. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Stay Abroad vs Return to India After Studies: A Real Decision…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `stay-abroad-vs-return-to-india-after-studies-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Stay abroad vs return to India after studies, weighed honestly: salary and career trajectory, visa…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The five-factor decision framework / Career trajectory and the salary differential / Visa and immigration uncertainty of staying / Family and relationship considerations / Cultural and identity factors
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Stay Abroad vs Return to India After Studies: A Real Decision…”
- Title attribute: At a glance: Stay Abroad vs Return to India After Studies: A Real…
- Caption (also keep the key point in the HTML text): Stay abroad vs return to India after studies, weighed honestly: salary and career trajectory, visa uncertainty, family, identity, and life-stage…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Career trajectory and the salary differential” #career-trajectory)
- File: `stay-abroad-vs-return-to-india-after-studies-asymmetrical-career-trajectory-salary-differential.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The salary and career gap between staying abroad and returning to India is real in many fields, but it is not…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The salary gap is real but field- and city-dependent, not universal / Abroad often means harder problems and denser peer exposure earlier / Leadership pace can move faster in India for the same experience level / Staying preserves optionality; returning gets structurally harder…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Career trajectory and the salary differential”: The salary gap is real but field- and…; Abroad often means harder…
- Title attribute: Career trajectory and the salary differential
- Caption (also keep the key point in the HTML text): The salary and career gap between staying abroad and returning to India is real in many fields, but it is not fixed, and it is rarely as large once…
**V3 — Comparison table** (place after the H2 “Visa and immigration uncertainty of staying” #visa-immigration)
- File: `stay-abroad-vs-return-to-india-after-studies-comparison-visa-immigration-uncertainty-staying.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the factor people most often underweight early and most often regret underweighting later.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Visa route | The current reality / Row: H-1B lottery (US) | Entry is capped and… / Row: Green card backlog for… | Because green card… / Row: OPT / STEM OPT (US) | A temporary post-study… / Row: UK Graduate Route /… | Time-limited post-study…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Visa and immigration uncertainty of staying”: Visa route | The current reality; H-1B lottery (US) | Entry is capped…; Green card backlog for……
- Title attribute: Visa and immigration uncertainty of staying
- Caption (also keep the key point in the HTML text): This is the factor people most often underweight early and most often regret underweighting later.
**V4 — Comparison table** (place after the H2 “Long-term life-stage planning” #life-stage)
- File: `stay-abroad-vs-return-to-india-after-studies-comparison-long-term-life-stage.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The same five factors do not carry equal weight at every life stage.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Life stage | What typically weighs… / Row: Single, early-to-mid… | Career exposure, skill… / Row: Partnered, both building… | Whose visa status anchors… / Row: Young children in the… | Schooling continuity… / Row: Parents in India ageing… | Proximity and caregiving…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Long-term life-stage planning”: Life stage | What typically weighs…; Single, early-to-mid… | Career…; Partnered, both building… | Whose…
- Title attribute: Long-term life-stage planning
- Caption (also keep the key point in the HTML text): The same five factors do not carry equal weight at every life stage.
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “Questions worth answering before you decide” #questions)
- File: `stay-abroad-vs-return-to-india-after-studies-asymmetrical-questions-worth-answering-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A useful decision framework is not a scorecard that spits out an answer.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What does my field actually reward abroad that it does not reward in… / How much of my "stay" plan actually depends on a visa outcome I do… / What does my family situation look like in three years under each… / If I returned tomorrow, what would the honest adjustment period look… / Am I choosing this because it is right for me, or because it is the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Questions worth answering before you decide”: What does my field actually reward…; How much of my "stay" plan actually……
- Title attribute: Questions worth answering before you decide
- Caption (also keep the key point in the HTML text): A useful decision framework is not a scorecard that spits out an answer.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/uk-vs-australia-for-masters-india/

**H1:** UK vs Australia for masters India: the real cost, visa, and job-market trade-off  
**Category:** study-abroad · **Words:** 3470 · **H2 sections:** 10 · **Search priority:** P2 (0 clicks, 36 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “UK vs Australia for masters India: the real cost, visa, and…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/study-abroad/uk-vs-australia-for-masters-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Uk”, “Australia For Masters…”, “Community, culture, and…”, “A quick decision filter…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 86%, 87%, 88%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `study-abroad-editorial-cover.webp`, `study-abroad-context.webp`, `study-abroad-filters.webp`, `study-abroad-family.webp`, `study-abroad-chain.webp`, `study-abroad-research.webp`, `study-abroad-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `uk-vs-australia-for-masters-india.webp`, `uk-vs-australia-for-masters-india-detail.webp`, `uk-vs-australia-for-masters-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `uk-vs-australia-for-masters-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `uk-vs-australia-for-masters-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a student and parent comparing study-abroad costs, a living-room sofa with notebooks on a low table. Props that belong to “UK vs Australia for masters India: the real cost, visa, and job-market trade-off”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: UK vs Australia for masters India: the real cost, visa, and…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `uk-vs-australia-for-masters-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: UK vs Australia for masters India comes down to one core trade-off before anything else: a faster, cheaper…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why the duration difference matters more than most comparisons admit / Cost comparison: what a masters actually costs, all-in / Post-study work visa mechanics: the Graduate Route vs the Subclass… / PR pathway clarity: sponsored settlement vs points-tested PR / Job market fit by field: where each country actually hires
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “UK vs Australia for masters India: the real cost, visa, and…”
- Title attribute: At a glance: UK vs Australia for masters India: the real cost, visa…
- Caption (also keep the key point in the HTML text): UK vs Australia for masters India comes down to one core trade-off before anything else: a faster, cheaper 1-year UK masters with 2 years of…
**V2 — Comparison table** (place after the H2 “Cost comparison: what a masters actually costs, all-in”)
- File: `uk-vs-australia-for-masters-india-comparison-cost-comparison-masters-actually.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Tuition-per-year comparisons are misleading here in a specific way: Australia's annual tuition is not wildly…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Item | UK | Australia / Row: Program length | 1 year (most taught… | 2 years (most coursework… / Row: Tuition | Roughly £10,000-38,000… | Roughly AUD 20,000-45,000… / Row: Living costs | Roughly Rs 10-14 lakh for… | Roughly AUD… / Row: Rough total, full program | Roughly Rs 39-58 lakh | Roughly Rs 57-93 lakh / Row: Where the money actually… | Tuition and one year of… | The second year is the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Item UK Australia Program length 1 year (most taught masters) 2 years (most coursework masters) Tuition Roughly £10,000-38,000 for the full 1-year program (Rs 10.7L-40.7L at current rates) Roughly AUD 20,000-45,000 per year (Rs 14L-33L per year), charged acros
- Alt: Comparison table for “Cost comparison: what a masters actually costs, all-in”: Item | UK | Australia; Program length | 1 year (most taught……; Tuition | Roughly…
- Title attribute: Cost comparison: what a masters actually costs, all-in
- Caption (also keep the key point in the HTML text): Tuition-per-year comparisons are misleading here in a specific way: Australia's annual tuition is not wildly higher than the UK's, but Australia…
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Post-study work visa mechanics: the Graduate Route vs the Subclass 485 visa”)
- File: `uk-vs-australia-for-masters-india-asymmetrical-post-study-work-visa.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is where the two systems diverge the most, and where most agents blur an important distinction: both…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): UK: the Graduate Route / Australia: Subclass 485 Temporary Graduate visa / This is where the two systems diverge the most, and where most agents blur an… / UK: the Graduate Route Masters graduates who apply on or before 31 December… / Graduates finishing their degree and applying from 1 January 2027 onwards will…
- Numbers: use ONLY these facts from the article (exact values, no new ones): UK: the Graduate Route Masters graduates who apply on or before 31 December 2026 get 2 years of unrestricted stay to work or look for work, with no employer sponsorship and no minimum salary threshold required to use it. | Graduates finishing their degree and applying from 1 January 2027 onwards will get 18 months instead (PhD and other doctoral graduates keep the full 3 years). | Australia: Subclass 485 Temporary Graduate visa Masters (coursework or extended) graduates get up to 3 years on the 485 visa, including the extra year Indian passport holders get under the Australia-India Economic Cooperation and Trade Agreement (AI-ECTA).
- Alt: Asymmetrical pros-and-cons comparison for “Post-study work visa mechanics: the Graduate Route vs…”: UK: the Graduate Route; Australia: Subclass 485 Temporary…; This…
- Title attribute: Post-study work visa mechanics: the Graduate Route vs the Subclass…
- Caption (also keep the key point in the HTML text): This is where the two systems diverge the most, and where most agents blur an important distinction: both give you real time to work after…
**V4 — Comparison table** (place after the H2 “PR pathway clarity: sponsored settlement vs points-tested PR”)
- File: `uk-vs-australia-for-masters-india-comparison-pathway-clarity-sponsored-settlement.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If permanent residence is part of why you are going abroad, this is the section to weigh most carefully…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Stage | UK | Australia / Row: Post-study work window | 2 years (18 months from 1… | Up to 3 years for masters… / Row: Route to settlement | Must switch to an… | Points-tested system… / Row: What decides your odds | Finding one employer… | Accumulated points across… / Row: Occupation dependency | Sponsorship is available… | Points-tested PR is tied…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Stage UK Australia Post-study work window 2 years (18 months from 1 January 2027 for masters graduates) Up to 3 years for masters graduates (with AI-ECTA extra year for Indian passport holders) Route to settlement Must switch to an employer-sponsored Skilled W
- Alt: Comparison table for “PR pathway clarity: sponsored settlement vs…”: Stage | UK | Australia; Post-study work window | 2 years (18…; Route to settlement | Must…
- Title attribute: PR pathway clarity: sponsored settlement vs points-tested PR
- Caption (also keep the key point in the HTML text): If permanent residence is part of why you are going abroad, this is the section to weigh most carefully, because the UK and Australia are built on…
**V5 — Comparison table** (place after the H2 “A quick decision filter for UK vs Australia”)
- File: `uk-vs-australia-for-masters-india-comparison-quick-decision-filter-australia.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Use this as a starting filter, then verify current tuition, visa fees, and occupation-list status for your…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Your situation | Leans toward / Row: Field is finance… | UK / Row: Field is engineering… | Australia / Row: Budget is tight and total… | UK / Row: Long-term settlement is a… | Australia / Row: You want to start earning… | UK
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “A quick decision filter for UK vs Australia”: Your situation | Leans toward; Field is finance… | UK; Field is engineering… | Australia
- Title attribute: A quick decision filter for UK vs Australia
- Caption (also keep the key point in the HTML text): Use this as a starting filter, then verify current tuition, visa fees, and occupation-list status for your specific university, field, and intake…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/education-loan-for-study-abroad-india/

**H1:** Education loan for study abroad India: secured vs unsecured, and who actually lends  
**Category:** study-abroad · **Words:** 3300 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 19 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Education loan for study abroad India: secured vs…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/study-abroad/education-loan-for-study-abroad-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“How the moratorium…”, “Source-backed reality…”, “TOTAL COST / RUNWAY”, “MOBILITY / OUTCOME”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 86%, 87%, 88%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `study-abroad-editorial-cover.webp`, `study-abroad-context.webp`, `study-abroad-filters.webp`, `study-abroad-family.webp`, `study-abroad-chain.webp`, `study-abroad-research.webp`, `study-abroad-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `education-loan-for-study-abroad-india.webp`, `education-loan-for-study-abroad-india-detail.webp`, `education-loan-for-study-abroad-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `education-loan-for-study-abroad-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `education-loan-for-study-abroad-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a student and parent comparing study-abroad costs, a counselling room with a plain wooden table. Props that belong to “Education loan for study abroad India: secured vs unsecured, and who actually…”: passport, university brochures, a cost spreadsheet printout. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Education loan for study abroad India: secured vs unsecured, and who…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `education-loan-for-study-abroad-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: An education loan for study abroad India comes in two structurally different forms — secured, where your…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why the lender type matters more than the rate you see first / Secured vs unsecured education loan for study abroad: the real… / Public-sector banks vs NBFCs vs international lenders / How the moratorium period actually works / How your university and course choice decides who lends to you
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Education loan for study abroad India: secured vs unsecured, and who…”
- Title attribute: At a glance: Education loan for study abroad India: secured vs…
- Caption (also keep the key point in the HTML text): An education loan for study abroad India comes in two structurally different forms — secured, where your family pledges property or another asset for…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Secured vs unsecured education loan for study abroad: the real trade-off”)
- File: `education-loan-for-study-abroad-india-asymmetrical-secured-unsecured-education-loan.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A secured education loan requires your family to pledge an asset — usually residential or commercial…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Secured loan / Unsecured loan / Lower interest rate, typically the cheapest option a bank or NBFC offers. / Higher loan ceilings, often covering the full cost of an expensive program. / Requires property, FDs, or another acceptable asset with clear title, plus valuation and… / Processing usually takes longer because of property valuation and mortgage documentation. / Family collateral is legally at risk if the loan defaults.
- Numbers: use ONLY these facts from the article (exact values, no new ones): For loans above Rs 7.5 lakh at public-sector banks, the standard model requires a parent as joint borrower and tangible collateral security regardless of whether the loan is otherwise marketed as reduced-collateral, along with an assignment of the student's fu
- Alt: Asymmetrical pros-and-cons comparison for “Secured vs unsecured education loan for study abroad…”: Secured loan; Unsecured loan; Lower interest rate, typically the…
- Title attribute: Secured vs unsecured education loan for study abroad: the real…
- Caption (also keep the key point in the HTML text): A secured education loan requires your family to pledge an asset — usually residential or commercial property, but sometimes fixed deposits…
**V3 — Comparison table** (place after the H2 “Public-sector banks vs NBFCs vs international lenders”)
- File: `education-loan-for-study-abroad-india-comparison-public-sector-banks-nbfcs.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Three broad lender categories fund study abroad education in India, and each one solves a different problem…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Lender type | Typical rate range | Collateral needed | Processing speed / Row: Public-sector banks (SBI… | Roughly 8.4%-9.4% p.a.… | Required above Rs 7.5… | Slower — property… / Row: Private banks (HDFC… | Roughly 8.9%-10.75% p.a.… | Secured option available… | Faster than public banks… / Row: NBFCs (Avanse and similar) | Roughly 11%-14% p.a. | Unsecured loans up to… | Fast — built around quick… / Row: International lenders… | Generally the highest of… | No collateral and no… | Fast, but limited to a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Lender type Typical rate range Collateral needed Processing speed Public-sector banks (SBI Global Ed-Vantage and similar) Roughly 8.4%-9.4% p.a., generally lowest for secured loans Required above Rs 7.5 lakh in most cases; limited collateral-free tier for prem | depending on secured or unsecured Secured option available for lower rates; unsecured available up to roughly Rs 75-80 lakh for eligible universities Faster than public banks — often 1-2 weeks for sanction NBFCs (Avanse and similar) Roughly 11%-14% p.a. | Unsecured loans up to roughly Rs 1-1.2 crore for eligible institutions and courses Fast — built around quick sanction for visa-stage documentation International lenders (Prodigy Finance, MPOWER Financing) Generally the highest of the four categories No collate
- Alt: Comparison table for “Public-sector banks vs NBFCs vs international lenders”: Lender type | Typical rate range |…; Public-sector banks (SBI… | Roughly…; Private…
- Title attribute: Public-sector banks vs NBFCs vs international lenders
- Caption (also keep the key point in the HTML text): Three broad lender categories fund study abroad education in India, and each one solves a different problem for a different kind of applicant.
**V4 — Comparison table** (place after the H2 “A quick decision filter before you apply for a loan”)
- File: `education-loan-for-study-abroad-india-comparison-quick-decision-filter-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Use this as a starting filter, then verify current rates, eligible-institution lists, and moratorium terms…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Your situation | Leans toward / Row: Family has property or… | Secured loan through a… / Row: No collateral available… | Unsecured NBFC or… / Row: No collateral, no Indian… | International lender such… / Row: Tight visa deadline but… | Take the fastest… / Row: Uncertain your family can… | Prioritise a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “A quick decision filter before you apply for a loan”: Your situation | Leans toward; Family has property or… | Secured…; No collateral…
- Title attribute: A quick decision filter before you apply for a loan
- Caption (also keep the key point in the HTML text): Use this as a starting filter, then verify current rates, eligible-institution lists, and moratorium terms directly with each lender before you…
**V5 — Linear process chain or roadmap** (place after the H2 “Plan the Rest of Your Study Abroad Decision”)
- File: `education-loan-for-study-abroad-india-linear-plan-rest-study-abroad.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Keep reading, or open the next page that helps you move forward.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Keep reading, or open the next page that helps you move forward. / More Study Abroad Guides More outcome-first breakdowns on country choice… / More guides › Is MS in USA Worth It India?
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Plan the Rest of Your Study Abroad Decision”: Keep reading, or open the next page…; More Study Abroad Guides More…; More guides…
- Title attribute: Plan the Rest of Your Study Abroad Decision
- Caption (also keep the key point in the HTML text): Keep reading, or open the next page that helps you move forward.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/gre-vs-gmat-which-to-take-india/

**H1:** GRE vs GMAT which to take India: match the exam to the program, not the other way round  
**Category:** study-abroad · **Words:** 3638 · **H2 sections:** 11 · **Search priority:** P3 (0 clicks, 20 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “GRE vs GMAT which to take India: match the exam to the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/study-abroad/gre-vs-gmat-which-to-take-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Gre”, “Gmat Which To Take India”, “The short answer”, “GRE vs GMAT at a glance”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `study-abroad-editorial-cover.webp`, `study-abroad-context.webp`, `study-abroad-filters.webp`, `study-abroad-family.webp`, `study-abroad-chain.webp`, `study-abroad-research.webp`, `study-abroad-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `gre-vs-gmat-which-to-take-india.webp`, `gre-vs-gmat-which-to-take-india-detail.webp`, `gre-vs-gmat-which-to-take-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `gre-vs-gmat-which-to-take-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `gre-vs-gmat-which-to-take-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of an Indian student or adult at a home desk, a classroom desk after hours. Props that belong to “GRE vs GMAT which to take India: match the exam to the program, not the other…”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: GRE vs GMAT which to take India: match the exam to the program, not…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `gre-vs-gmat-which-to-take-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: GRE vs GMAT which to take India: which programs actually need which exam, how GMAT Focus and the current GRE…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to GRE vs GMAT which to take India / GRE vs GMAT at a glance / Which programs actually require which exam / How the exams are actually built / Verbal-strong vs quant-strong: which exam suits you
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “GRE vs GMAT which to take India: match the exam to the program, not…”
- Title attribute: At a glance: GRE vs GMAT which to take India: match the exam to the…
- Caption (also keep the key point in the HTML text): GRE vs GMAT which to take India: which programs actually need which exam, how GMAT Focus and the current GRE differ, and a fit test for verbal-strong…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to GRE vs GMAT which to take India” #short-answer)
- File: `gre-vs-gmat-which-to-take-india-asymmetrical-short-answer-gre-gmat.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no single correct exam for every applicant.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): There is no single correct exam for every applicant. / The two tests were built for different degree types, and the honest starting… / GRE was built by ETS primarily for graduate school admissions of every kind…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to GRE vs GMAT which to take India”: There is no single correct exam for…; The two tests were built…
- Title attribute: The short answer to GRE vs GMAT which to take India
- Caption (also keep the key point in the HTML text): There is no single correct exam for every applicant.
**V3 — Comparison table** (place after the H2 “GRE vs GMAT at a glance” #at-a-glance)
- File: `gre-vs-gmat-which-to-take-india-comparison-gre-gmat-glance.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before the program-by-program breakdown, here is what actually differs between the two exams as they stand…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Aspect | GRE | GMAT (Focus Edition) / Row: Built primarily for | Graduate school… | Business school… / Row: Sections | Analytical Writing, two… | Verbal Reasoning… / Row: Total duration | About 1 hour 58 minutes. | About 2 hours 15 minutes. / Row: Adaptivity | Section-adaptive: your… | Question-adaptive within… / Row: Score range | 260-340 total (Verbal and… | 205-805 total, each of…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Score validity Reportable for 5 years from the test date. | Reportable for 5 years from the test date.
- Alt: Comparison table for “GRE vs GMAT at a glance”: Aspect | GRE | GMAT (Focus Edition); Built primarily for | Graduate…; Sections | Analytical Writing, two… |…
- Title attribute: GRE vs GMAT at a glance
- Caption (also keep the key point in the HTML text): Before the program-by-program breakdown, here is what actually differs between the two exams as they stand today.
**V4 — Comparison table** (place after the H2 “Which programs actually require which exam” #which-program-needs-which)
- File: `gre-vs-gmat-which-to-take-india-comparison-programs-actually-require-exam.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the part that should decide most of the choice, and it is also the part most comparison guides skim…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Program type | What it actually… / Row: MS/MEng in engineering… | GRE is the default and… / Row: PhD programs (any field… | GRE, where a score is… / Row: Top global MBA programs… | Both accepted and scored… / Row: ISB (Indian School of… | GRE is accepted, but the… / Row: IIM flagship two-year MBA… | Neither GRE nor GMAT is…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Which programs actually require which exam”: Program type | What it actually…; MS/MEng in engineering… | GRE is the…; PhD programs (any field……
- Title attribute: Which programs actually require which exam
- Caption (also keep the key point in the HTML text): This is the part that should decide most of the choice, and it is also the part most comparison guides skim past.
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “Verbal-strong vs quant-strong: which exam suits you” #verbal-vs-quant)
- File: `gre-vs-gmat-which-to-take-india-asymmetrical-verbal-strong-quant-strong.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Once the program requirement question is settled, or if a program genuinely accepts both, this is the honest…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Once the program requirement question is settled, or if a program genuinely… / Lean GRE You read fast and retain vocabulary without much effort If words like… / Text Completion and Sentence Equivalence questions are essentially…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Verbal-strong vs quant-strong: which exam suits you”: Once the program requirement question…; Lean GRE You read fast and…
- Title attribute: Verbal-strong vs quant-strong: which exam suits you
- Caption (also keep the key point in the HTML text): Once the program requirement question is settled, or if a program genuinely accepts both, this is the honest fit test that most comparison articles…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/mba-abroad-vs-mba-in-india/

**H1:** MBA Abroad vs MBA in India: The Real Cost and Visa Math  
**Category:** study-abroad · **Words:** 3859 · **H2 sections:** 12 · **Search priority:** P3 (0 clicks, 13 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “MBA Abroad vs MBA in India: The Real Cost and Visa Math”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/study-abroad/mba-abroad-vs-mba-in-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Mba Abroad”, “Mba In India”, “The direct answer”, “Cost comparison: what…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `study-abroad-editorial-cover.webp`, `study-abroad-context.webp`, `study-abroad-filters.webp`, `study-abroad-family.webp`, `study-abroad-chain.webp`, `study-abroad-research.webp`, `study-abroad-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `mba-abroad-vs-mba-in-india.webp`, `mba-abroad-vs-mba-in-india-detail.webp`, `mba-abroad-vs-mba-in-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `mba-abroad-vs-mba-in-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `mba-abroad-vs-mba-in-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a final-year student or recent graduate, a modest office desk after hours. Props that belong to “MBA Abroad vs MBA in India: The Real Cost and Visa Math”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: MBA Abroad vs MBA in India: The Real Cost and Visa Math
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `mba-abroad-vs-mba-in-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: MBA abroad vs MBA in India compared on real IIM and international fees, break-even time, post-study work visa…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The direct answer: MBA abroad vs MBA in India / Cost comparison: what each path really costs / Break-even and salary reality / Network value: global reach vs India-focused leverage / Visa and work authorization after an MBA abroad
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “MBA Abroad vs MBA in India: The Real Cost and Visa Math”
- Title attribute: At a glance: MBA Abroad vs MBA in India: The Real Cost and Visa Math
- Caption (also keep the key point in the HTML text): MBA abroad vs MBA in India compared on real IIM and international fees, break-even time, post-study work visa reality, and honest cases for each path.
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The direct answer: MBA abroad vs MBA in India” #answer)
- File: `mba-abroad-vs-mba-in-india-asymmetrical-direct-answer-mba-abroad.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no single winner because the two paths are optimized for different outcomes.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): "A foreign MBA is always worth more than an Indian one." / "You'll easily get a visa and settle abroad after an MBA." / "An IIM degree only matters if you're staying in India forever." / "The loan pays for itself no matter where you study."
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The direct answer: MBA abroad vs MBA in India”: "A foreign MBA is always worth more…; "You'll easily get a visa and…
- Title attribute: The direct answer: MBA abroad vs MBA in India
- Caption (also keep the key point in the HTML text): There is no single winner because the two paths are optimized for different outcomes.
**V3 — Comparison table** (place after the H2 “Cost comparison: what each path really costs” #cost)
- File: `mba-abroad-vs-mba-in-india-comparison-cost-comparison-each-path.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before comparing brand names, compare the full financial commitment — not just the headline tuition figure…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Factor | MBA in India | MBA abroad / Row: Total programme cost… | ₹17-27.5 lakh at top IIMs… | ₹80 lakh to ₹2.5 crore… / Row: Programme length | 1 year (ISB) or 2 years… | 1 year (UK, much of… / Row: Typical funding route | Education loan against… | A larger loan principal… / Row: Average reported starting… | ₹28-36 LPA average at… | Often the local…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Factor MBA in India MBA abroad Total programme cost (tuition + living) ₹17-27.5 lakh at top IIMs for the 2026-28 batch; ₹40-45 lakh at ISB for the one-year programme ₹80 lakh to ₹2.5 crore across the US, UK, Canada, and Europe, including tuition, visa, insuran | Compare that to the full IIM range of ₹17-27.5 lakh, and the abroad path is not "somewhat more expensive" — it is typically five to ten times the total commitment for a similarly ranked programme.
- Alt: Comparison table for “Cost comparison: what each path really costs”: Factor | MBA in India | MBA abroad; Total programme cost… | ₹17-27.5 lakh…; Programme length |…
- Title attribute: Cost comparison: what each path really costs
- Caption (also keep the key point in the HTML text): Before comparing brand names, compare the full financial commitment — not just the headline tuition figure most brochures lead with.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Break-even and salary reality” #roi)
- File: `mba-abroad-vs-mba-in-india-stat-break-even-salary-reality.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: India MBA break-even usually lands under two years At a ₹20-27 lakh fee against a ₹28-36 LPA starting…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): India MBA break-even usually lands under two years At a ₹20-27 lakh fee against… / Even at a mid-tier B-school, a ₹10-15 lakh fee against a ₹10-15 LPA offer keeps… / Abroad MBA break-even usually runs three to five years, sometimes longer A ₹1-2…
- Numbers: use ONLY these facts from the article (exact values, no new ones): India MBA break-even usually lands under two years At a ₹20-27 lakh fee against a ₹28-36 LPA starting package, the loan-to-salary ratio at top IIMs is one of the more favorable ratios in Indian higher education. | Even at a mid-tier B-school, a ₹10-15 lakh fee against a ₹10-15 LPA offer keeps the payback period short because both the cost and the salary sit in the same currency and cost-of-living context. | Abroad MBA break-even usually runs three to five years, sometimes longer A ₹1-2 crore programme against even a strong post-tax foreign salary takes longer to recover once you account for loan interest, higher living costs in most MBA hub cities, and the real c
- Alt: Stat panel or bar chart (only the numbers listed) for “Break-even and salary reality”: India MBA break-even usually lands…; Even at a mid-tier B-school, a ₹10-15……
- Title attribute: Break-even and salary reality
- Caption (also keep the key point in the HTML text): India MBA break-even usually lands under two years At a ₹20-27 lakh fee against a ₹28-36 LPA starting package, the loan-to-salary ratio at top IIMs…
**V5 — Comparison table** (place after the H2 “Visa and work authorization after an MBA abroad” #visa)
- File: `mba-abroad-vs-mba-in-india-comparison-visa-work-authorization-after.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the part of the comparison most brochures leave vague, and it is the part that decides whether the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Destination | Post-study work… / Row: United States | Optional Practical… / Row: United Kingdom | The Graduate Route… / Row: Canada | The Post-Graduation Work… / Row: Europe (varies by country) | Job-search and work… / Row: India (no student-to-work… | An MBA earned in India…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Destination Post-study work reality United States Optional Practical Training (OPT) gives 12 months of work authorization after graduation, extendable by 24 months for STEM-designated MBA tracks. | United Kingdom The Graduate Route currently gives 2 years of unrestricted work authorization after a UK master's degree, moving to 18 months for visas issued from January 2027 onward. | Canada The Post-Graduation Work Permit (PGWP) can run up to 3 years depending on programme length, generally the most direct post-study work runway among the major MBA destinations, though permanent residency still requires a separate points-based application.
- Alt: Comparison table for “Visa and work authorization after an MBA abroad”: Destination | Post-study work…; United States | Optional Practical…; United Kingdom | The…
- Title attribute: Visa and work authorization after an MBA abroad
- Caption (also keep the key point in the HTML text): This is the part of the comparison most brochures leave vague, and it is the part that decides whether the ROI math above even applies to you.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/nri-return-to-india-career-challenges/

**H1:** NRI Return to India Career Challenges: The Real Adjustment After Years Abroad  
**Category:** study-abroad · **Words:** 3269 · **H2 sections:** 9 · **Search priority:** P3 (0 clicks, 19 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “NRI Return to India Career Challenges: The Real Adjustment…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/study-abroad/nri-return-to-india-career-challenges*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The professional…”, “Family logistics: your…”, “Financial and tax…”, “How long the adjustment…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `study-abroad-editorial-cover.webp`, `study-abroad-context.webp`, `study-abroad-filters.webp`, `study-abroad-family.webp`, `study-abroad-chain.webp`, `study-abroad-research.webp`, `study-abroad-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `nri-return-to-india-career-challenges.webp`, `nri-return-to-india-career-challenges-detail.webp`, `nri-return-to-india-career-challenges-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `nri-return-to-india-career-challenges-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `nri-return-to-india-career-challenges-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of an Indian student or adult at a home desk, a family dining table in the evening. Props that belong to “NRI Return to India Career Challenges: The Real Adjustment After Years Abroad”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: NRI Return to India Career Challenges: The Real Adjustment After…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `nri-return-to-india-career-challenges-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: NRI return to India career challenges after years abroad: rebuilding a professional network, resetting salary…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why this is a different problem than a fresh-graduate return / The professional re-entry problem / Family logistics: your kids' schooling and your spouse's career / Financial and tax repatriation complexity / How long the adjustment actually takes
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “NRI Return to India Career Challenges: The Real Adjustment After…”
- Title attribute: At a glance: NRI Return to India Career Challenges: The Real…
- Caption (also keep the key point in the HTML text): NRI return to India career challenges after years abroad: rebuilding a professional network, resetting salary expectations, moving kids and a spouse…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Why this is a different problem than a fresh-graduate return” #different-problem)
- File: `nri-return-to-india-career-challenges-asymmetrical-different-problem-than-fresh.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A student returning to India right after finishing an MS abroad is managing one visa clock and one job…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A student returning to India right after finishing an MS abroad is managing one… / Someone returning after several years of working abroad is managing something… / The emotional layer is different too.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Why this is a different problem than a fresh-graduate…”: A student returning to India right…; Someone returning after…
- Title attribute: Why this is a different problem than a fresh-graduate return
- Caption (also keep the key point in the HTML text): A student returning to India right after finishing an MS abroad is managing one visa clock and one job search, with no dependents and a professional…
**V3 — Self-assessment checklist** (place after the H2 “The professional re-entry problem” #professional-reentry)
- File: `nri-return-to-india-career-challenges-self-professional-entry-problem.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Three things quietly work against you at once when you try to restart a career in India after years abroad…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Your professional network back home has gone cold / Your salary and title expectations are anchored to the wrong market / Your industry or function may barely exist in the city you are moving… / Translating your foreign experience so Indian recruiters actually… / Rewrite your resume around outcomes and tools relevant to the India market, not the… / Get current on India-specific tools, regulations, or platforms your function uses locally… / Rebuild your network deliberately: reconnect with 10-15 specific former colleagues and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Lead with a recent, concrete project or result in every conversation and application; "I have 8 years abroad" is weaker than one sentence describing what you actually built or delivered.
- Alt: Self-assessment checklist for “The professional re-entry problem”: Your professional network back home…; Your salary and title expectations…; Your industry or…
- Title attribute: The professional re-entry problem
- Caption (also keep the key point in the HTML text): Three things quietly work against you at once when you try to restart a career in India after years abroad: your network, your salary anchor, and…
**V4 — Comparison table** (place after the H2 “Family logistics: your kids' schooling and your spouse's career” #family-logistics)
- File: `nri-return-to-india-career-challenges-comparison-family-logistics-kids-schooling.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If you are moving back alone, skip ahead.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Factor | What actually matters / Row: Curriculum continuity | If your child has been… / Row: Admission timing | Most Indian schools open… / Row: Equivalency paperwork | A child returning from a… / Row: Peer adjustment | Schools with an existing… / Children's schooling transition / Spouse's career
- Numbers: use ONLY these facts from the article (exact values, no new ones): Admission timing Most Indian schools open formal admissions 6-9 months before the academic year starts, though many international-curriculum schools accept students mid-year.
- Alt: Comparison table for “Family logistics: your kids' schooling and your…”: Factor | What actually matters; Curriculum continuity | If your child…; Admission timing |…
- Title attribute: Family logistics: your kids' schooling and your spouse's career
- Caption (also keep the key point in the HTML text): If you are moving back alone, skip ahead.
**V5 — Comparison table** (place after the H2 “Financial and tax repatriation complexity” #financial-tax)
- File: `nri-return-to-india-career-challenges-comparison-financial-tax-repatriation-complexity.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Money and tax questions are the part of an NRI return to India that people most often defer until "later,"…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Task | What to actually do / Row: NRE/NRO account conversion | Once you become a… / Row: RNOR (Resident but Not… | RNOR is a transitional… / Row: How long RNOR status lasts | RNOR status typically… / Row: Foreign asset and income… | Once you are an ordinary… / Row: Remaining foreign income… | Foreign retirement…
- Numbers: use ONLY these facts from the article (exact values, no new ones): You generally qualify if you were a non-resident in 9 of the preceding 10 financial years, or present in India for 729 days or less across the preceding 7 years.
- Alt: Comparison table for “Financial and tax repatriation complexity”: Task | What to actually do; NRE/NRO account conversion | Once you…; RNOR (Resident but Not… | RNOR…
- Title attribute: Financial and tax repatriation complexity
- Caption (also keep the key point in the HTML text): Money and tax questions are the part of an NRI return to India that people most often defer until "later," and the part most likely to have a hard…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/postgraduate-diploma-courses-in-canada-for-international-students/

**H1:** Postgraduate Diploma Courses in Canada for International Students  
**Category:** study-abroad · **Words:** 4110 · **H2 sections:** 14 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Postgraduate Diploma Courses in Canada for International…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/study-abroad/postgraduate-diploma-courses-in-canada-for-international-students*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “What a PGD actually is…”, “Real cost: tuition…”, “Getting the study…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `study-abroad-editorial-cover.webp`, `study-abroad-context.webp`, `study-abroad-filters.webp`, `study-abroad-family.webp`, `study-abroad-chain.webp`, `study-abroad-research.webp`, `study-abroad-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `postgraduate-diploma-courses-in-canada-for-international-students.webp`, `postgraduate-diploma-courses-in-canada-for-international-students-detail.webp`, `postgraduate-diploma-courses-in-canada-for-international-students-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `postgraduate-diploma-courses-in-canada-for-international-students-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `postgraduate-diploma-courses-in-canada-for-international-students-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a Class 12 or first-year medical aspirant, a quiet public library table. Props that belong to “Postgraduate Diploma Courses in Canada for International Students”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Postgraduate Diploma Courses in Canada for International Students
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `postgraduate-diploma-courses-in-canada-for-international-students-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Postgraduate diploma courses in Canada for international students: real 2026 costs, PGWP eligibility rules…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / What a PGD actually is in Canada / The PGD categories international students actually pick / Real cost: tuition, living, and proof of funds / Getting the study permit in 2026
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Postgraduate Diploma Courses in Canada for International Students”
- Title attribute: At a glance: Postgraduate Diploma Courses in Canada for International…
- Caption (also keep the key point in the HTML text): Postgraduate diploma courses in Canada for international students: real 2026 costs, PGWP eligibility rules, and whether the loan risk is worth it for…
**V2 — Comparison table** (place after the H2 “Real cost: tuition, living, and proof of funds” #real-cost)
- File: `postgraduate-diploma-courses-in-canada-for-international-students-comparison-real-cost-tuition-living.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Course marketing pages tend to lead with the lowest possible tuition figure and leave living costs and the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Cost item | Realistic range / Row: Tuition, 1-year PGD | Roughly CAD 15,000-25,000… / Row: Tuition, 2-year PGD | Roughly CAD 16,000-25,000… / Row: Living costs (per year) | Roughly CAD 15,000-30,000… / Row: Proof-of-funds… | Roughly CAD 22,895… / Row: Rough all-in total… | Roughly Rs 20-38 lakh…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Cost item Realistic range Tuition, 1-year PGD Roughly CAD 15,000-25,000 at public colleges; some business/management diplomas run up to CAD 35,000-40,000 Tuition, 2-year PGD Roughly CAD 16,000-25,000 per year at public colleges, so CAD 32,000-50,000 across two | Honest take A one-year, roughly CAD 20,000-tuition PGD in a mid-size city can genuinely land under Rs 25 lakh all-in, which is a defensible number if the program is PGWP-eligible and field-aligned. | A two-year business diploma at CAD 25,000 a year in Toronto or Vancouver, with living costs at the high end, can just as easily cross Rs 55-65 lakh.
- Alt: Comparison table for “Real cost: tuition, living, and proof of funds”: Cost item | Realistic range; Tuition, 1-year PGD | Roughly CAD…; Tuition, 2-year PGD |…
- Title attribute: Real cost: tuition, living, and proof of funds
- Caption (also keep the key point in the HTML text): Course marketing pages tend to lead with the lowest possible tuition figure and leave living costs and the study-permit financial requirement for…
**V3 — Comparison table** (place after the H2 “PGWP eligibility: the rule most guides get outdated on” #pgwp-rules)
- File: `postgraduate-diploma-courses-in-canada-for-international-students-comparison-pgwp-eligibility-rule-most.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the single most important section in this article, because it is the part where outdated blog posts…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: PGWP requirement | What it means for a… / Row: Minimum program length | At least 8 months at a… / Row: Field-of-study (CIP code)… | Mandatory for non-degree… / Row: Current eligible-fields… | Roughly 1,107 eligible… / Row: Language requirement | CLB 5 (English) or NCLC 5… / Row: Permit length | Generally tied to program…
- Numbers: use ONLY these facts from the article (exact values, no new ones): PGWP requirement What it means for a PGD applicant Minimum program length At least 8 months at a designated learning institution. | Permit length Generally tied to program length, up to a maximum of 3 years; a one-time benefit that cannot be renewed and cannot outlast your passport validity.
- Alt: Comparison table for “PGWP eligibility: the rule most guides get outdated on”: PGWP requirement | What it means for…; Minimum program length | At least 8……
- Title attribute: PGWP eligibility: the rule most guides get outdated on
- Caption (also keep the key point in the HTML text): This is the single most important section in this article, because it is the part where outdated blog posts and agents are actively misleading…
**V4 — Self-assessment checklist** (place after the H2 “Loans, scholarships, and currency risk” #loan-risk)
- File: `postgraduate-diploma-courses-in-canada-for-international-students-self-loans-scholarships-currency-risk.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A large education loan for a postgraduate diploma is a genuinely high-risk commitment, because repayment…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Confirm your exact program's PGWP eligibility (CIP code) in writing, not just verbally. / Get a written repayment schedule and worst-case timeline from the lender, including… / Check whether a scholarship you are counting on is confirmed, and what its renewal… / Build a real fallback plan for what happens if the job search takes 6-12 months longer… / The program sits inside a genuinely shortage-linked, currently eligible field.
- Numbers: use ONLY these facts from the article (exact values, no new ones): On the money-movement side, current rules under India's Liberalised Remittance Scheme apply a 0% Tax Collected at Source (TCS) on education remittances funded through a recognised education loan from an Indian financial institution, while self-funded remittanc | Build a real fallback plan for what happens if the job search takes 6-12 months longer than hoped.
- Alt: Self-assessment checklist for “Loans, scholarships, and currency risk”: Confirm your exact program's PGWP…; Get a written repayment schedule and…; Check whether a…
- Title attribute: Loans, scholarships, and currency risk
- Caption (also keep the key point in the HTML text): A large education loan for a postgraduate diploma is a genuinely high-risk commitment, because repayment usually depends on three things lining up…
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “The debt-light alternative worth comparing” #debt-light-alternative)
- File: `postgraduate-diploma-courses-in-canada-for-international-students-asymmetrical-debt-light-alternative-worth.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before committing Rs 25-65 lakh and a large loan to a PGD, run the honest comparison: can you build the same…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Before committing Rs 25-65 lakh and a large loan to a PGD, run the honest… / For most of the popular PGD categories — data analytics, digital marketing… / A useful starting heuristic: treat total education spending, including a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Before committing Rs 25-65 lakh and a large loan to a PGD, run the honest comparison: can you build the same underlying skill, plus a visible portfolio of real work, from India for a fraction of the cost? | A useful starting heuristic: treat total education spending, including a study-abroad program, as something that should rarely exceed roughly 10-25% of your family's total education and career-building budget, with the rest kept for living security, tools, pro
- Alt: Asymmetrical pros-and-cons comparison for “The debt-light alternative worth comparing”: Before committing Rs 25-65 lakh and a…; For most of the popular PGD…; A…
- Title attribute: The debt-light alternative worth comparing
- Caption (also keep the key point in the HTML text): Before committing Rs 25-65 lakh and a large loan to a PGD, run the honest comparison: can you build the same underlying skill, plus a visible…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/scholarships-for-study-abroad-india/

**H1:** Scholarships for study abroad India: what is realistic, and how to actually compete  
**Category:** study-abroad · **Words:** 3775 · **H2 sections:** 11 · **Search priority:** P3 (0 clicks, 12 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/study-abroad/scholarships-study-abroad/scholarships-for-study-abroad-indian-students-social.jpg

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 5 authored images on the page (hero + 4 supporting).
2. Clean set; verify named schemes (Fulbright-Nehru, Chevening, Commonwealth, DAAD) are current.
3. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
4. 1 images have no caption: `scholarships-for-study-abroad-indian-students-1440.webp`

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `study-abroad/scholarships-study-abroad/scholarships-for-study-abroad-indian-students-1440.webp` | 1440x810 | 1440x811 | eager | 16% | no caption |
| `study-abroad/scholarships-study-abroad/three-study-abroad-scholarship-tiers-1080.webp` | 1080x1350 | 1080x1350 | lazy | 26% | ok |
| `study-abroad/scholarships-study-abroad/build-competitive-scholarship-application-1080.webp` | 1080x1350 | 1080x1350 | lazy | 53% | ok |
| `study-abroad/scholarships-study-abroad/study-abroad-scholarship-scam-check-1080.webp` | 1080x1350 | 1080x1350 | lazy | 60% | ok |
| `study-abroad/scholarships-study-abroad/study-abroad-scholarship-application-timeline-1080.webp` | 1080x1350 | 1080x1350 | lazy | 69% | ok |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `scholarships-for-study-abroad-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `scholarships-for-study-abroad-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a student and parent comparing study-abroad costs, a family dining table in the evening. Props that belong to “Scholarships for study abroad India: what is realistic, and how to actually…”: passport, university brochures, a cost spreadsheet printout. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Scholarships for study abroad India: what is realistic, and how to…
- Caption: one sentence tying the scene to the article's decision.
2. CREATE 1 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `scholarships-for-study-abroad-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Scholarships for study abroad India split into three very different tiers — flagship government-funded awards…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why the scholarship name list is not the real problem / Government-funded scholarships: prestigious, fully funded, and… / University-specific merit scholarships: the tier most students… / Private and external scholarships: the third layer worth stacking / How to actually build a competitive application
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Scholarships for study abroad India: what is realistic, and how to…”
- Title attribute: At a glance: Scholarships for study abroad India: what is realistic…
- Caption (also keep the key point in the HTML text): Scholarships for study abroad India split into three very different tiers — flagship government-funded awards like Fulbright-Nehru, Chevening, and…
3. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
4. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/study-abroad/study-abroad-benefits-india/

**H1:** Study Abroad Benefits India — What You Actually Gain, and What You Don't  
**Category:** study-abroad · **Words:** 3169 · **H2 sections:** 11 · **Search priority:** P3 (0 clicks, 8 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Study Abroad Benefits India — What You Actually Gain, and…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/study-abroad/study-abroad-benefits-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Real benefits vs…”, “Access to what India…”, “Network diversity, not…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 86%, 87%, 88%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `study-abroad-editorial-cover.webp`, `study-abroad-context.webp`, `study-abroad-filters.webp`, `study-abroad-family.webp`, `study-abroad-chain.webp`, `study-abroad-research.webp`, `study-abroad-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `study-abroad-benefits-india.webp`, `study-abroad-benefits-india-detail.webp`, `study-abroad-benefits-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `study-abroad-benefits-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `study-abroad-benefits-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a student and parent comparing study-abroad costs, a living-room sofa with notebooks on a low table. Props that belong to “Study Abroad Benefits India — What You Actually Gain, and What You Don't”: passport, university brochures, a cost spreadsheet printout. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Study Abroad Benefits India — What You Actually Gain, and What You…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `study-abroad-benefits-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Study abroad benefits India, honestly assessed: real gains in exposure, access, and skills, real costs in…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on study abroad benefits India / Real benefits vs assumed benefits / Access to what India genuinely lacks / Network diversity, not just a bigger network / Independence and life skills
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Study Abroad Benefits India — What You Actually Gain, and What You…”
- Title attribute: At a glance: Study Abroad Benefits India — What You Actually Gain…
- Caption (also keep the key point in the HTML text): Study abroad benefits India, honestly assessed: real gains in exposure, access, and skills, real costs in money and distance, and why the outcome…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Real benefits vs assumed benefits” #real-vs-assumed)
- File: `study-abroad-benefits-india-asymmetrical-real-benefits-assumed-benefits.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The clearest way to separate marketing from reality is to sort common claims into two lists: what India can…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A respected degree and a strong academic transcript / Good professors and structured coursework / English-medium instruction / A social network of ambitious peers / Access to online courses, certifications, and remote global teams
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Real benefits vs assumed benefits”: A respected degree and a strong…; Good professors and structured…; English-medium…
- Title attribute: Real benefits vs assumed benefits
- Caption (also keep the key point in the HTML text): The clearest way to separate marketing from reality is to sort common claims into two lists: what India can genuinely offer with effort, and what is…
**V3 — Skill map** (place after the H2 “Independence and life skills” #independence)
- File: `study-abroad-benefits-india-skill-independence-life-skills.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Managing money, food, housing, healthcare, and paperwork in an unfamiliar system, without family nearby to…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Managing money, food, housing, healthcare, and paperwork in an unfamiliar… / Research on international students consistently links study abroad to higher… / This is a genuine benefit, but it is earned, not automatic.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Skill map for “Independence and life skills”: Managing money, food, housing…; Research on international students…; This is a genuine benefit, but it is…
- Title attribute: Independence and life skills
- Caption (also keep the key point in the HTML text): Managing money, food, housing, healthcare, and paperwork in an unfamiliar system, without family nearby to step in, builds a kind of judgment that is…
**V4 — Self-assessment checklist** (place after the H2 “None of this is automatic, so check before you commit” #not-automatic)
- File: `study-abroad-benefits-india-self-none-automatic-check-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Because the benefits depend so heavily on what you actually do once you get there, it helps to run a short…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Because the benefits depend so heavily on what you actually do once you get… / 01 Is the specific access real, or just assumed? / A "better research environment" or "stronger industry exposure" claim only…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “None of this is automatic, so check before you commit”: Because the benefits depend so…; 01 Is the specific access real, or…; A…
- Title attribute: None of this is automatic, so check before you commit
- Caption (also keep the key point in the HTML text): Because the benefits depend so heavily on what you actually do once you get there, it helps to run a short check before treating any of them as a…
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes people make while deciding” #mistakes)
- File: `study-abroad-benefits-india-mistakes-mistakes-people-make-while.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Treating "exposure" as a benefit in itself Exposure to a new country only becomes a career benefit when it…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 01 Treating "exposure" as a benefit in itself Exposure to a new country only… / Two years abroad with none of that converted is a life experience, which has… / 02 Assuming the degree alone unlocks the "better system" A strong university…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes people make while deciding”: 01 Treating "exposure" as a benefit…; Two years abroad with none of that…; 02 Assuming…
- Title attribute: Mistakes people make while deciding
- Caption (also keep the key point in the HTML text): 01 Treating "exposure" as a benefit in itself Exposure to a new country only becomes a career benefit when it is converted into a skill, a…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
