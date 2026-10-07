# Image audit — blog category: parents

5 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/parents/how-much-to-spend-on-child-education-india/

**H1:** How much to spend on child education in India: a stage-by-stage budget map  
**Category:** parents · **Words:** 4590 · **H2 sections:** 11 · **Search priority:** P1 (1 clicks, 232 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 5 other articles, with identical alt text and captions, so they say nothing specific about “How much to spend on child education in India: a…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/parents/how-much-to-spend-on-child-education-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The 4-Stage Education…”, “Source-backed reality…”, “TOTAL COST / RUNWAY”, “FAMILY DECISION”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `parents-editorial-cover.webp`, `parents-context.webp`, `parents-listen.webp`, `parents-conversation.webp`, `parents-framework.webp`, `parents-compare.webp`, `parents-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `how-much-to-spend-on-child-education-india.webp`, `how-much-to-spend-on-child-education-india-detail.webp`, `how-much-to-spend-on-child-education-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `how-much-to-spend-on-child-education-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `how-much-to-spend-on-child-education-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a parent and teenager at the family dining table, a counselling room with a plain wooden table. Props that belong to “How much to spend on child education in India: a stage-by-stage budget map”: course brochures, a budget notebook, tea cups. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How much to spend on child education in India: a stage-by-stage…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-much-to-spend-on-child-education-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How much to spend on child education in India is not one number.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "how much should I spend" is the wrong first question / The 4-Stage Education Budget Map / Real costs at each stage, so the map is not abstract / Why fees can outrun your income if you do not plan around inflation / How much of household income is actually reasonable to allocate
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How much to spend on child education in India: a stage-by-stage…”
- Title attribute: At a glance: How much to spend on child education in India: a…
- Caption (also keep the key point in the HTML text): How much to spend on child education in India is not one number.
**V2 — Chronological timeline** (place after the H2 “The 4-Stage Education Budget Map”)
- File: `how-much-to-spend-on-child-education-india-chronological-stage-education-budget-map.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Instead of one number, use The 4-Stage Education Budget Map to think about spending across your child's whole…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Stage 1 — Foundation years (preschool through primary school). The job here is building… / Stage 2 — Growth years (middle school through class 10). The job shifts to building… / Stage 3 — Decision years (classes 11-12, entrance-exam preparation). The job is preparing… / Stage 4 — Launch years (undergraduate college, professional course, or skill-first…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “The 4-Stage Education Budget Map”: Stage 1 — Foundation years (preschool…; Stage 2 — Growth years (middle school…; Stage 3 — Decision…
- Title attribute: The 4-Stage Education Budget Map
- Caption (also keep the key point in the HTML text): Instead of one number, use The 4-Stage Education Budget Map to think about spending across your child's whole educational journey.
**V3 — Comparison table** (place after the H2 “Real costs at each stage, so the map is not abstract”)
- File: `how-much-to-spend-on-child-education-india-comparison-real-costs-each-stage.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: These are commonly reported ranges from education-cost research and industry surveys, not fixed prices — your…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Stage | Typical annual range | What drives the cost / Row: Stage 1: Preschool | Rs 5,000 - 50,000/year | Curriculum type, city… / Row: Stage 1-2: Primary and… | Rs 20,000 - 3 lakh/year | Board type (state board… / Row: Stage 3: Classes 11-12… | Rs 1 - 3.5 lakh/year | Whether coaching is… / Row: Stage 4: Private… | Rs 2 - 5+ lakh/year | College tier and brand… / Row: Stage 4: Private medical… | Rs 6 - 25 lakh/year | Government-quota vs…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Stage Typical annual range What drives the cost Stage 1: Preschool Rs 5,000 - 50,000/year Curriculum type, city tier, and whether it is a standalone play school or an attached primary wing Stage 1-2: Primary and middle school Rs 20,000 - 3 lakh/year Board type | Honest take Government survey data on where the money actually goes backs up the stage-shift pattern directly: at the pre-primary level, roughly 72% of education spending goes to school fees and about 28% to tuition/coaching. | By classes 11-12, spending on tuition and coaching has risen to nearly equal formal schooling costs — 43% and 46.6% of total education spend in national survey data.
- Alt: Comparison table for “Real costs at each stage, so the map is not abstract”: Stage | Typical annual range | What…; Stage 1: Preschool | Rs 5,000 …; Stage 1-2…
- Title attribute: Real costs at each stage, so the map is not abstract
- Caption (also keep the key point in the HTML text): These are commonly reported ranges from education-cost research and industry surveys, not fixed prices — your child's actual city, school choice, and…
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “How much of household income is actually reasonable to allocate”)
- File: `how-much-to-spend-on-child-education-india-stat-much-household-income-actually.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no single official percentage every family should hit, and any article that hands you one specific…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What surveys report / Where a fixed percentage breaks down / Some industry and financial-planning surveys report urban, middle-income Indian families… / Among households that use private coaching specifically, that coaching cost alone has… / HSBC's global Value of Education research found a large share of parents fund education… / A flat percentage does not account for stage — the same 20% of income that comfortably… / Two families with identical income can have very different reasonable numbers depending…
- Numbers: use ONLY these facts from the article (exact values, no new ones): What surveys report Some industry and financial-planning surveys report urban, middle-income Indian families spending in the range of 20-30% of household income on education broadly across fees, tuition, and related costs. | Among households that use private coaching specifically, that coaching cost alone has been reported at roughly 16.5% of household per-capita spending in national survey data. | Where a fixed percentage breaks down A flat percentage does not account for stage — the same 20% of income that comfortably covers Stage 1 school fees may not stretch to cover a Stage 4 professional-college year.
- Alt: Stat panel or bar chart (only the numbers listed) for “How much of household income is actually reasonable to…”: What surveys report; Where a fixed percentage…
- Title attribute: How much of household income is actually reasonable to allocate
- Caption (also keep the key point in the HTML text): There is no single official percentage every family should hit, and any article that hands you one specific number without knowing your income, city…
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “A priority filter for families with a tight budget”)
- File: `how-much-to-spend-on-child-education-india-stat-priority-filter-families-tight.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: When the ideal amount and the available amount do not match — which is common, not a failure — use this…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A quick sanity-check for any single big spend: the 10% heuristic / Whatever keeps your child in a stable, consistent school through the Growth years —… / A realistic Stage 3 and Stage 4 reserve, even a modest one started early — these are the… / One genuine skill-building investment alongside formal education, even a modest one — not… / The most expensive available option at any single stage, chosen by default rather than by… / Stacking multiple paid tuitions or coaching add-ons at the same time without evidence…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A quick sanity-check for any single big spend: the 10% heuristic Before committing to one expensive option at any stage — a premium international school, a management-quota medical seat, an out-of-state private engineering college — add up your realistic total | Some financial planners use a conservative rule of thumb here: keep any one Stage 4 choice under roughly 10% of the total projected education budget, unless there is a specific, checkable reason to go higher. | If a specific college or program costs meaningfully more than that 10% line, the honest follow-up question is not "can we afford it," it is "what does the extra spend actually buy." Reasonable answers include mandatory accreditation or licensing for the profes
- Alt: Stat panel or bar chart (only the numbers listed) for “A priority filter for families with a tight budget”: A quick sanity-check for any single…; Whatever keeps…
- Title attribute: A priority filter for families with a tight budget
- Caption (also keep the key point in the HTML text): When the ideal amount and the available amount do not match — which is common, not a failure — use this filter to decide where the limited budget…
**V6 — Mistakes versus smarter move panel** (place after the H2 “Common mistakes that quietly break an education budget”)
- File: `how-much-to-spend-on-child-education-india-mistakes-common-mistakes-quietly-break.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: These four show up repeatedly in family financial planning, and each one is avoidable once you see it named.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Planning for this year only. Budgeting fee-by-fee, year-by-year, without ever mapping the… / Using today's fee for a future year. Treating a college fee that is five years away as if… / Mixing the education fund with everything else. Keeping education savings blended into… / Ignoring your own retirement to fund every stage generously. A parent who depletes their…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Common mistakes that quietly break an education budget”: Planning for this year only.…; Using today's fee for a future…
- Title attribute: Common mistakes that quietly break an education budget
- Caption (also keep the key point in the HTML text): These four show up repeatedly in family financial planning, and each one is avoidable once you see it named.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/parents/expensive-coaching-vs-skill-building-which-is-better-for-child/

**H1:** Expensive coaching vs skill building: which is better for your child?  
**Category:** parents · **Words:** 3969 · **H2 sections:** 11 · **Search priority:** P2 (0 clicks, 43 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 5 other articles, with identical alt text and captions, so they say nothing specific about “Expensive coaching vs skill building: which is better for…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/parents/expensive-coaching-vs-skill-building-which-is-better-for-child*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Expensive Coaching”, “Skill Building Which Is…”, “Why this is not really…”, “The hidden cost…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `parents-editorial-cover.webp`, `parents-context.webp`, `parents-listen.webp`, `parents-conversation.webp`, `parents-framework.webp`, `parents-compare.webp`, `parents-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `expensive-coaching-vs-skill-building-which-is-better-for-child.webp`, `expensive-coaching-vs-skill-building-which-is-better-for-child-detail.webp`, `expensive-coaching-vs-skill-building-which-is-better-for-child-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `expensive-coaching-vs-skill-building-which-is-better-for-child-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `expensive-coaching-vs-skill-building-which-is-better-for-child-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a learner at a laptop with a small project, a school or college corridor bench. Props that belong to “Expensive coaching vs skill building: which is better for your child?”: stacked exam books, a timetable, previous-year question papers. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Expensive coaching vs skill building: which is better for your child?
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `expensive-coaching-vs-skill-building-which-is-better-for-child-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Expensive coaching vs skill building which is better for child comes down to one honest question most…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why this is not really an either-or question / What expensive coaching actually costs — the real numbers / What the fee is actually buying: the real odds behind JEE and NEET… / What skill building actually costs, and what it actually buys / The hidden cost coaching brochures never mention
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Expensive coaching vs skill building: which is better for your child?”
- Title attribute: At a glance: Expensive coaching vs skill building: which is better…
- Caption (also keep the key point in the HTML text): Expensive coaching vs skill building which is better for child comes down to one honest question most families skip: what is the money actually…
**V2 — Comparison table** (place after the H2 “What expensive coaching actually costs — the real numbers”)
- File: `expensive-coaching-vs-skill-building-which-is-better-for-child-comparison-expensive-coaching-actually-costs.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "Expensive" is doing a lot of work in this keyword, and most families underestimate by how much until they…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Cost item | Typical annual range | What this actually… / Row: JEE/NEET coaching tuition… | Rs 75,000 - 1.8 lakh/year | Classroom instruction… / Row: NEET 2-year package… | Rs 2.5 - 3.5 lakh total | Full program across two… / Row: Hostel + food + travel… | Rs 1 - 2 lakh/year | Living costs on top of… / Row: Repeat "dropper" year (if… | Rs 1.3 - 1.7 lakh/year… | A second full cost cycle… / Row: Serious skill certificate… | Rs 20,000 - 1 lakh… | A practical, portable…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Top Kota institutes like Allen and Resonance charge roughly Rs 75,000 to Rs 1.8 lakh a year in tuition for JEE or NEET programs, with two-year NEET packages running Rs 2.5-3.5 lakh total. | Add hostel (Rs 4,500-12,000 a month), food, and travel for an out-of-town student, and the real annual spend climbs to roughly Rs 2-3.5 lakh a year — sometimes more, depending on the city and hostel tier. | Cost item Typical annual range What this actually buys JEE/NEET coaching tuition (top institute) Rs 75,000 - 1.8 lakh/year Classroom instruction, test series, study material for one specific exam NEET 2-year package (total) Rs 2.5 - 3.5 lakh total Full program
- Alt: Comparison table for “What expensive coaching actually costs — the real…”: Cost item | Typical annual range |…; JEE/NEET coaching tuition… | Rs…; NEET 2-year…
- Title attribute: What expensive coaching actually costs — the real numbers
- Caption (also keep the key point in the HTML text): "Expensive" is doing a lot of work in this keyword, and most families underestimate by how much until they see the full annual number written out…
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “What the fee is actually buying: the real odds behind JEE and NEET coaching”)
- File: `expensive-coaching-vs-skill-building-which-is-better-for-child-stat-fee-actually-buying-real.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before deciding coaching is "worth it," look at what a family is actually purchasing a chance at — not a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): JEE: the funnel gets narrow fast / NEET: qualifying the exam is not the same as getting the seat / Before deciding coaching is "worth it," look at what a family is actually… / That 30% is measured only among students who already cleared JEE Main, itself a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): JEE: the funnel gets narrow fast JEE Advanced 2025 saw about 1.8 lakh candidates appear, with roughly 54,000 qualifying — near a 30% qualifying rate at that final stage. | That 30% is measured only among students who already cleared JEE Main, itself a filter that removes the large majority of all JEE aspirants nationally before Advanced is even attempted. | NEET: qualifying the exam is not the same as getting the seat NEET 2025 had roughly 1.2 million qualifiers out of about 2.3 million test-takers nationally.
- Alt: Stat panel or bar chart (only the numbers listed) for “What the fee is actually buying: the real odds behind…”: JEE: the funnel gets narrow fast; NEET: qualifying…
- Title attribute: What the fee is actually buying: the real odds behind JEE and NEET…
- Caption (also keep the key point in the HTML text): Before deciding coaching is "worth it," look at what a family is actually purchasing a chance at — not a guarantee.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “What skill building actually costs, and what it actually buys”)
- File: `expensive-coaching-vs-skill-building-which-is-better-for-child-stat-skill-building-actually-costs.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Skill building is the quieter, less glamorous option in this comparison, which is part of why it gets…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What the market is actually rewarding / Where skill building actually fails families / 82% of Indian employers report difficulty finding candidates with the right practical… / India's graduate employability rose to 56.35% in the latest India Skills Report, up from… / LinkedIn and other hiring-platform research shows a clear, continuing shift toward… / The WEF Future of Jobs Report 2025 projects 39% of core job skills will change globally… / Free MOOCs and self-paced courses average only 5-15% completion — a free course with no…
- Numbers: use ONLY these facts from the article (exact values, no new ones): What the market is actually rewarding 82% of Indian employers report difficulty finding candidates with the right practical skill sets — a real, unmet gap, not a hypothetical one. | India's graduate employability rose to 56.35% in the latest India Skills Report, up from 54.81% the year before, but Computer Science and IT graduates sit near 78-80% employability against roughly 58% for pure science graduates — the skill layer on top of a de | The WEF Future of Jobs Report 2025 projects 39% of core job skills will change globally by 2030 — a static exam-rank credential ages faster than a skill that keeps compounding.
- Alt: Stat panel or bar chart (only the numbers listed) for “What skill building actually costs, and what it…”: What the market is actually rewarding; Where skill…
- Title attribute: What skill building actually costs, and what it actually buys
- Caption (also keep the key point in the HTML text): Skill building is the quieter, less glamorous option in this comparison, which is part of why it gets underweighted at home — there is no banner, no…
**V5 — Chronological timeline** (place after the H2 “A family decision filter: when coaching earns its cost, and when it does not”)
- File: `expensive-coaching-vs-skill-building-which-is-better-for-child-chronological-family-decision-filter-coaching.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Instead of treating this as one universal verdict, run your specific situation through this filter before…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The goal is genuinely exam-gated — medicine through NEET, a specific licensed profession… / Your child has already shown real interest and some aptitude in the subject, not just… / The family can afford the fee without cutting into money needed for basic security, and… / There is a specific, honestly-discussed backup plan if the first attempt does not land. / The goal is general — "a good career," "financial stability," "something in tech or…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “A family decision filter: when coaching earns its…”: The goal is genuinely exam-gated —…; Your child has already shown real…; The family…
- Title attribute: A family decision filter: when coaching earns its cost, and when it…
- Caption (also keep the key point in the HTML text): Instead of treating this as one universal verdict, run your specific situation through this filter before committing the family budget.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/parents/how-to-guide-child-in-career-selection-india/

**H1:** How to guide child in career selection India: a process, not a pitch  
**Category:** parents · **Words:** 3570 · **H2 sections:** 11 · **Search priority:** P2 (1 clicks, 33 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 5 other articles, with identical alt text and captions, so they say nothing specific about “How to guide child in career selection India: a process…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/parents/how-to-guide-child-in-career-selection-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“How do I guide my child\”, “A simple family process…”, “Real family situations…”, “Source-backed reality…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `parents-editorial-cover.webp`, `parents-context.webp`, `parents-listen.webp`, `parents-conversation.webp`, `parents-framework.webp`, `parents-compare.webp`, `parents-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `how-to-guide-child-in-career-selection-india.webp`, `how-to-guide-child-in-career-selection-india-detail.webp`, `how-to-guide-child-in-career-selection-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `how-to-guide-child-in-career-selection-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `how-to-guide-child-in-career-selection-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a parent and teenager at the family dining table, a counselling room with a plain wooden table. Props that belong to “How to guide child in career selection India: a process, not a pitch”: course brochures, a budget notebook, tea cups. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How to guide child in career selection India: a process, not a pitch
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-to-guide-child-in-career-selection-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to guide a child in career selection in India comes down to five moves, done in order.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "guiding" and "deciding for" your child are not the same thing / Move 1: Start the career conversation earlier than you think you need… / Move 2: Ask open questions instead of announcing conclusions / Move 3: Use tests and assessments as one input, never the final word / Move 4: Check real market demand together instead of relying on…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to guide child in career selection India: a process, not a pitch”
- Title attribute: At a glance: How to guide child in career selection India: a process…
- Caption (also keep the key point in the HTML text): How to guide a child in career selection in India comes down to five moves, done in order.
**V2 — Self-assessment checklist** (place after the H2 “Move 2: Ask open questions instead of announcing conclusions”)
- File: `how-to-guide-child-in-career-selection-india-self-move-ask-open-questions.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the single most repeated finding across parenting and career-guidance research: how you talk matters…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Conclusion-first language (avoid) / Question-first language (use instead) / "In our family, everyone does X." / "Your cousin chose this and settled down well — you should too." / "I've already decided this is the right course for you." / "Don't waste time on that, it doesn't pay well." / "What does a normal day in that field actually look like, based on what you've read?"
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Move 2: Ask open questions instead of announcing…”: Conclusion-first language (avoid); Question-first language (use instead); "In our…
- Title attribute: Move 2: Ask open questions instead of announcing conclusions
- Caption (also keep the key point in the HTML text): This is the single most repeated finding across parenting and career-guidance research: how you talk matters as much as what you say.
**V3 — Decision tree** (place after the H2 “Move 3: Use tests and assessments as one input, never the final word”)
- File: `how-to-guide-child-in-career-selection-india-decision-move-use-tests-assessments.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Psychometric tests, aptitude tests, and interest inventories come up in nearly every Indian parent's search…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What a good assessment can genuinely do / What research says a test cannot do / Surface interest and work-style patterns your child has not put into words yet. / Give the family a neutral third input, which reduces pure opinion-based arguments. / Narrow an overwhelming list to a manageable shortlist worth researching further. / Guarantee job performance or long-term satisfaction — predictive strength varies a lot by… / Stay perfectly stable — mood, coaching, and how a question is phrased can shift the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree for “Move 3: Use tests and assessments as one input, never…”: What a good assessment can genuinely…; What research says a test cannot do; Surface…
- Title attribute: Move 3: Use tests and assessments as one input, never the final word
- Caption (also keep the key point in the HTML text): Psychometric tests, aptitude tests, and interest inventories come up in nearly every Indian parent's search on this topic — and for good reason, when…
**V4 — Comparison table** (place after the H2 “Move 4: Check real market demand together instead of relying on family opinion”)
- File: `how-to-guide-child-in-career-selection-india-comparison-move-check-real-market.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A huge share of Indian family career conversations run entirely on outdated mental maps — the job market…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Market signal | What it actually shows | How to use it in the… / Row: Graduate employability | 56.35% overall, up from… | Ask which field your… / Row: CS/IT employability | Near 78-80%, driven by… | Tech-adjacent lanes exist… / Row: Core skills changing by… | ~39% globally, per WEF… | Ask what part of the… / Row: Internship demand | 92.8% of students want… | A field with no…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A huge share of Indian family career conversations run entirely on outdated mental maps — the job market relatives remember from 15-20 years ago, not the one your child is actually about to enter. | The India Skills Report 2026 puts national graduate employability at 56.35%, up from 54.81% the year before — encouraging on average, but the report also shows a sharp split by field. | Roughly 92.8% of students in the same report say they want internships or hands-on exposure before committing — a strong signal that "does this field give me a chance to prove myself early" is now a fair question to ask of any option.
- Alt: Comparison table for “Move 4: Check real market demand together instead of…”: Market signal | What it actually…; Graduate employability | 56.35%…; CS/IT…
- Title attribute: Move 4: Check real market demand together instead of relying on…
- Caption (also keep the key point in the HTML text): A huge share of Indian family career conversations run entirely on outdated mental maps — the job market relatives remember from 15-20 years ago, not…
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Move 5: Insist on one small proof step before big money or years get committed”)
- File: `how-to-guide-child-in-career-selection-india-stat-move-insist-one-small.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Guiding your child does not end at "we picked a direction." The real skill-portfolio logic that protects a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What a real skill portfolio includes / Questions to ask before signing an education loan / One core skill matched to the target field, built with enough depth to be usable, not… / One multiplier skill on top — communication, basic digital or AI-tool fluency, or… / Visible proof of work a stranger could see: a small project, a portfolio piece, or a… / An honest check of market positioning — does this specific skill combination actually get…
- Numbers: use ONLY these facts from the article (exact values, no new ones): It is about checking that the interest survives contact with the actual, unglamorous version of the work — the paperwork, the waiting, the boring 80% that every field has underneath the exciting 20%.
- Alt: Stat panel or bar chart (only the numbers listed) for “Move 5: Insist on one small proof step before big…”: What a real skill portfolio includes; Questions to ask…
- Title attribute: Move 5: Insist on one small proof step before big money or years get…
- Caption (also keep the key point in the HTML text): Guiding your child does not end at "we picked a direction." The real skill-portfolio logic that protects a family from an expensive wrong turn is…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/parents/how-to-support-child-during-career-confusion/

**H1:** How to support child during career confusion: the support ladder  
**Category:** parents · **Words:** 4008 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 15 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 5 other articles, with identical alt text and captions, so they say nothing specific about “How to support child during career confusion: the support…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/parents/how-to-support-child-during-career-confusion*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Real family situations…”, “Source-backed reality…”, “FAMILY DECISION”, “CLARITY / QUESTIONS”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `parents-editorial-cover.webp`, `parents-context.webp`, `parents-listen.webp`, `parents-conversation.webp`, `parents-framework.webp`, `parents-compare.webp`, `parents-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `how-to-support-child-during-career-confusion.webp`, `how-to-support-child-during-career-confusion-detail.webp`, `how-to-support-child-during-career-confusion-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `how-to-support-child-during-career-confusion-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `how-to-support-child-during-career-confusion-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a parent and teenager at the family dining table, a counselling room with a plain wooden table. Props that belong to “How to support child during career confusion: the support ladder”: course brochures, a budget notebook, tea cups. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How to support child during career confusion: the support ladder
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-to-support-child-during-career-confusion-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to support a child during career confusion starts with a mindset shift.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why career confusion needs support, not a solution / Rung 1: Notice what is actually going on before you respond to it / Rung 2: Name the feeling before you respond to the content / Rung 3: Normalize the stage instead of treating it as a crisis to fix… / Rung 4: Navigate options together, at a pace your child can actually…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to support child during career confusion: the support ladder”
- Title attribute: At a glance: How to support child during career confusion: the…
- Caption (also keep the key point in the HTML text): How to support a child during career confusion starts with a mindset shift.
**V2 — Self-assessment checklist** (place after the H2 “Rung 1: Notice what is actually going on before you respond to it”)
- File: `how-to-support-child-during-career-confusion-self-rung-notice-actually-going.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most parents react to the surface behavior — the snapping, the silence, the hours on the phone instead of…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Ordinary signs of career-confusion stress / Signs that go beyond confusion — consult a professional / Avoiding the topic, changing the subject quickly, or giving one-word answers about the… / Comparing themselves unfavorably to friends who "already know what they're doing." / Irritability specifically around exam results, forms, deadlines, or family gatherings. / Swinging between overconfidence in one option and total doubt about it within the same… / Low mood, flatness, or loss of interest in things they used to enjoy, lasting more than…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Rung 1: Notice what is actually going on before you…”: Ordinary signs of career-confusion…; Signs that go beyond confusion —……
- Title attribute: Rung 1: Notice what is actually going on before you respond to it
- Caption (also keep the key point in the HTML text): Most parents react to the surface behavior — the snapping, the silence, the hours on the phone instead of "doing something productive." The more…
**V3 — Self-assessment checklist** (place after the H2 “Rung 2: Name the feeling before you respond to the content”)
- File: `how-to-support-child-during-career-confusion-self-rung-name-feeling-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the single biggest lever available to you, and it costs nothing except a different order of…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Content-first language (skips the feeling) / Feeling-first language (name it, then respond) / "Just pick something, you're overthinking it." / "Your cousin was confused too and it worked out fine." / "We don't have time for you to 'find yourself,' decide now." / "Everyone your age knows what they want except you." / "That sounds exhausting — not knowing and feeling like everyone's watching."
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Rung 2: Name the feeling before you respond to the…”: Content-first language (skips the…; Feeling-first language (name it, then……
- Title attribute: Rung 2: Name the feeling before you respond to the content
- Caption (also keep the key point in the HTML text): This is the single biggest lever available to you, and it costs nothing except a different order of operations.
**V4 — Comparison table** (place after the H2 “Rung 4: Navigate options together, at a pace your child can actually handle”)
- File: `how-to-support-child-during-career-confusion-comparison-rung-navigate-options-together.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Once the emotional temperature has genuinely come down — not before — you can move to structure.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: If your child is here | What actually helps… | What to avoid at this… / Row: Still avoiding the topic… | Stay present, ask small… | Forcing a sit-down… / Row: Talking but visibly… | Name the feeling… | Jumping straight to a… / Row: Calmer, asking what to do… | Offer a free assessment… | Treating the assessment… / Row: Ready to commit to a… | Agree on one small proof… | Rushing past proof…
- Numbers: use ONLY these facts from the article (exact values, no new ones): If your child is here What actually helps right now What to avoid at this point Still avoiding the topic entirely Stay present, ask small low-stakes questions, let silence sit without filling it with your opinion Forcing a sit-down "serious talk" before they h
- Alt: Comparison table for “Rung 4: Navigate options together, at a pace your…”: If your child is here | What actually…; Still avoiding the topic… | Stay…; Talking but…
- Title attribute: Rung 4: Navigate options together, at a pace your child can actually…
- Caption (also keep the key point in the HTML text): Once the emotional temperature has genuinely come down — not before — you can move to structure.
**V5 — Linear process chain or roadmap** (place after the H2 “What "stepping back" actually means, and where it goes too far”)
- File: `how-to-support-child-during-career-confusion-linear-stepping-back-actually-means.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Some parents read all of this and swing hard the other way — going quiet entirely, deciding that any…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Stepping back looks like / Stepping back does not mean / Letting your child lead the pace of the conversation, even if it is slower than you'd… / Asking before offering advice: "Do you want my thoughts, or do you want to think out loud… / Letting a "wrong" small choice happen so they build their own decision muscle on… / Going silent on real deadlines, costs, or risks that genuinely need to be flagged. / Withdrawing emotionally because the topic feels frustrating for you too.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “What "stepping back" actually means, and where it goes…”: Stepping back looks like; Stepping back does not mean; Letting your…
- Title attribute: What "stepping back" actually means, and where it goes too far
- Caption (also keep the key point in the HTML text): Some parents read all of this and swing hard the other way — going quiet entirely, deciding that any involvement is pressure.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/parents/signs-of-career-confusion-in-teenager-india/

**H1:** Signs of career confusion in teenager India: the 4-signal recognition check  
**Category:** parents · **Words:** 4142 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 13 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 5 other articles, with identical alt text and captions, so they say nothing specific about “Signs of career confusion in teenager India: the 4-signal…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/parents/signs-of-career-confusion-in-teenager-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Source-backed reality…”, “FAMILY DECISION”, “CLARITY / QUESTIONS”, “LISTEN”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `parents-editorial-cover.webp`, `parents-context.webp`, `parents-listen.webp`, `parents-conversation.webp`, `parents-framework.webp`, `parents-compare.webp`, `parents-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `signs-of-career-confusion-in-teenager-india.webp`, `signs-of-career-confusion-in-teenager-india-detail.webp`, `signs-of-career-confusion-in-teenager-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `signs-of-career-confusion-in-teenager-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `signs-of-career-confusion-in-teenager-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a parent and teenager at the family dining table, a living-room sofa with notebooks on a low table. Props that belong to “Signs of career confusion in teenager India: the 4-signal recognition check”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Signs of career confusion in teenager India: the 4-signal recognition…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `signs-of-career-confusion-in-teenager-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The real signs of career confusion in a teenager in India are not "they don't have an answer yet." Every…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "no career answer yet" is not the same as career confusion / Signal 1: Avoidance — when the topic gets dodged, not just delayed / Signal 2: Reversal — when the answer keeps flipping with no new… / Signal 3: Stress spikes — physical symptoms tied specifically to… / Signal 4: Copying — a choice borrowed from someone else, unexplained
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Signs of career confusion in teenager India: the 4-signal recognition…”
- Title attribute: At a glance: Signs of career confusion in teenager India: the…
- Caption (also keep the key point in the HTML text): The real signs of career confusion in a teenager in India are not "they don't have an answer yet." Every teenager starts there.
**V2 — Mistakes versus smarter move panel** (place after the H2 “Signal 1: Avoidance — when the topic gets dodged, not just delayed”)
- File: `signs-of-career-confusion-in-teenager-india-mistakes-signal-avoidance-topic-gets.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every teenager delays a hard decision sometimes.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What ordinary delay looks like / What avoidance-as-a-signal looks like / "I haven't thought about it much yet" — said once or twice, without tension in the voice. / Genuine engagement when you bring up a specific field or option, even if the answer is… / Occasional deflection during a busy exam week, that eases once the pressure passes. / Changing the subject every single time, across weeks, regardless of how gently it comes… / Visible tension, irritability, or leaving the room specifically when career talk starts.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Signal 1: Avoidance — when the topic gets dodged, not…”: What ordinary delay looks like; What avoidance-as-a-signal looks…
- Title attribute: Signal 1: Avoidance — when the topic gets dodged, not just delayed
- Caption (also keep the key point in the HTML text): Every teenager delays a hard decision sometimes.
**V3 — Chronological timeline** (place after the H2 “Signal 2: Reversal — when the answer keeps flipping with no new information”)
- File: `signs-of-career-confusion-in-teenager-india-chronological-signal-reversal-answer-keeps.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Changing direction once or twice is not a red flag.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Reflective (healthy) exploration / Ruminative (signal) exploration / Changing direction once or twice is not a red flag. / A teenager who hears about a new field, talks to someone doing that work, or… / The signal worth watching for is reversal without new input — going back and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “Signal 2: Reversal — when the answer keeps flipping…”: Reflective (healthy) exploration; Ruminative (signal) exploration; Changing…
- Title attribute: Signal 2: Reversal — when the answer keeps flipping with no new…
- Caption (also keep the key point in the HTML text): Changing direction once or twice is not a red flag.
**V4 — Self-assessment checklist** (place after the H2 “Signal 3: Stress spikes — physical symptoms tied specifically to career triggers”)
- File: `signs-of-career-confusion-in-teenager-india-self-signal-stress-spikes-physical.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the signal that most reliably separates ordinary uncertainty from something worth addressing…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Signals that point to career-specific stress / When it has moved beyond career stress — get professional support / Stomachaches, headaches, or trouble sleeping specifically the night before a form… / Sudden irritability the moment a relative asks "so what's the plan?" at a gathering. / Reluctance to open messages or notifications related to school, counsellors, or… / Low mood or loss of interest in things they used to enjoy, lasting more than two weeks… / Major, sustained changes in sleep or appetite that do not track to one event.
- Numbers: use ONLY these facts from the article (exact values, no new ones): India's National Crime Records Bureau recorded a record 13,892 student suicides in 2023, a rise of nearly 65% over the past decade, with academic and exam pressure repeatedly named as a contributing factor — a hard number that exists precisely so families take
- Alt: Self-assessment checklist for “Signal 3: Stress spikes — physical symptoms tied…”: Signals that point to career-specific…; When it has moved beyond career……
- Title attribute: Signal 3: Stress spikes — physical symptoms tied specifically to…
- Caption (also keep the key point in the HTML text): This is the signal that most reliably separates ordinary uncertainty from something worth addressing directly, because it moves the conversation from…
**V5 — Comparison table** (place after the H2 “The recognition checklist: how many signals is too many?”)
- File: `signs-of-career-confusion-in-teenager-india-comparison-recognition-checklist-many-signals.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: None of these four signals need to reach a clinical threshold to be worth acting on.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Signals present | What it likely means | What to do next / Row: 0-1 signal, mild | Ordinary teenage… | Keep exposure casual; no… / Row: 2 signals, holding for a… | Early confusion worth a… | Start with one open… / Row: 3-4 signals, persistent | Real confusion, likely… | Lead with emotional… / Row: Any signal plus warning… | Beyond career confusion —… | Involve a counsellor or…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “The recognition checklist: how many signals is too…”: Signals present | What it likely…; 0-1 signal, mild | Ordinary teenage……; 2 signals…
- Title attribute: The recognition checklist: how many signals is too many?
- Caption (also keep the key point in the HTML text): None of these four signals need to reach a clinical threshold to be worth acting on.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
