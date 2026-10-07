# Image audit — blog category: job-search

9 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/job-search/campus-vs-off-campus-placement-india/

**H1:** Campus vs off-campus placement India: the honest head-to-head before you pick a lane  
**Category:** job-search · **Words:** 4085 · **H2 sections:** 13 · **Search priority:** P1 (0 clicks, 222 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 7 other articles, with identical alt text and captions, so they say nothing specific about “Campus vs off-campus placement India: the honest…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/job-search/campus-vs-off-campus-placement-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Campus”, “Off Campus Placement…”, “The short answer”, “How each process…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `job-search-editorial-cover.webp`, `job-search-context.webp`, `job-search-sequence.webp`, `job-search-research.webp`, `job-search-loop.webp`, `job-search-interview.webp`, `job-search-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `campus-vs-off-campus-placement-india.webp`, `campus-vs-off-campus-placement-india-detail.webp`, `campus-vs-off-campus-placement-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `campus-vs-off-campus-placement-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `campus-vs-off-campus-placement-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of an Indian student or adult at a home desk, a home study corner with natural window light. Props that belong to “Campus vs off-campus placement India: the honest head-to-head before you pick a…”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Campus vs off-campus placement India: the honest head-to-head before…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `campus-vs-off-campus-placement-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Campus vs off-campus placement India compared on real placement-rate data, tier-wise campus quality, and when…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on campus vs off-campus placement in India / What campus and off-campus placement actually mean / How each process actually works, step by step / Campus vs off-campus placement: the head-to-head / Tier-wise campus placement quality: the honest picture
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Campus vs off-campus placement India: the honest head-to-head before…”
- Title attribute: At a glance: Campus vs off-campus placement India: the honest…
- Caption (also keep the key point in the HTML text): Campus vs off-campus placement India compared on real placement-rate data, tier-wise campus quality, and when off-campus is the smarter route even…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer on campus vs off-campus placement in India” #short-answer)
- File: `campus-vs-off-campus-placement-india-asymmetrical-short-answer-campus-off.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Campus placement is a convenience channel: companies come to your college on a fixed calendar, and every…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): It treats campus placement as the "real" placement and off-campus as a consolation prize… / It treats off-campus as something you start only after campus placements disappoint you… / It skips real tier-wise placement data, leaving students to guess whether their college's… / It rarely explains referrals properly, even though referrals fill a large share of…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer on campus vs off-campus placement in…”: It treats campus placement as the…; It treats off-campus as…
- Title attribute: The short answer on campus vs off-campus placement in India
- Caption (also keep the key point in the HTML text): Campus placement is a convenience channel: companies come to your college on a fixed calendar, and every recruiter has already been vetted by the…
**V3 — Linear process chain or roadmap** (place after the H2 “How each process actually works, step by step” #how-it-works)
- File: `campus-vs-off-campus-placement-india-linear-each-process-actually-works.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Knowing the actual steps — not just the labels — is what lets you prepare for the right thing instead of…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The campus placement process / The off-campus placement process / Knowing the actual steps — not just the labels — is what lets you prepare for… / The campus placement process Most campus drives follow a similar sequence: a… / The placement cell schedules all of this, shares eligibility criteria in…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “How each process actually works, step by step”: The campus placement process; The off-campus placement process; Knowing the…
- Title attribute: How each process actually works, step by step
- Caption (also keep the key point in the HTML text): Knowing the actual steps — not just the labels — is what lets you prepare for the right thing instead of guessing.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Campus vs off-campus placement: the head-to-head” #head-to-head)
- File: `campus-vs-off-campus-placement-india-asymmetrical-campus-off-campus-placement.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Put side by side, the trade-offs are specific and worth naming plainly instead of vaguely.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Companies come to you: interviews, tests, and offers happen on campus, on a fixed… / Every recruiter has already been vetted by the placement cell — no fake job postings, no… / Limited to whichever companies choose to visit your specific college that year. / One process, one timeline, often one shot per company under placement-cell rules. / Package and role variety depend entirely on your college's recruiter list, not the wider…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Honest take Companies plan to hire around 40% more freshers in the coming hiring cycle compared to the year before, according to India Skills Report 2026 employer surveys — but campus hiring itself has shifted from bulk recruitment toward more selective, skill
- Alt: Asymmetrical pros-and-cons comparison for “Campus vs off-campus placement: the head-to-head”: Companies come to you: interviews…; Every recruiter has already been……
- Title attribute: Campus vs off-campus placement: the head-to-head
- Caption (also keep the key point in the HTML text): Put side by side, the trade-offs are specific and worth naming plainly instead of vaguely.
**V5 — Comparison table** (place after the H2 “Tier-wise campus placement quality: the honest picture” #tier-reality)
- File: `campus-vs-off-campus-placement-india-comparison-tier-wise-campus-placement.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "My college has X% placement" means very different things depending on which tier that college sits in, and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: College tier | Typical placement rate | Typical package | The honest reality / Row: Tier 1 (IITs, IIMs, top… | 90-100% | Rs 17-26 LPA average… | Recruiter volume and… / Row: Tier 2 (most state and… | 50-70% | Rs 4-8 LPA typical | Only 30-40% of tier 2/3… / Row: Tier 3 (smaller regional… | 30-50% | Rs 2.5-4 LPA typical | Campus drives are often…
- Numbers: use ONLY these facts from the article (exact values, no new ones): College tier Typical placement rate Typical package The honest reality Tier 1 (IITs, IIMs, top NITs, top private engineering colleges) 90-100% Rs 17-26 LPA average; select outliers cross Rs 50 LPA-1 Cr+ Recruiter volume and quality are genuinely high. | Tier 2 (most state and private engineering/commerce colleges) 50-70% Rs 4-8 LPA typical Only 30-40% of tier 2/3 students secure a job through the campus drive itself, per India Skills Report data. | Tier 3 (smaller regional colleges, newer private institutes) 30-50% Rs 2.5-4 LPA typical Campus drives are often limited to a handful of service-sector recruiters, sometimes none in a given year.
- Alt: Comparison table for “Tier-wise campus placement quality: the honest picture”: College tier | Typical placement rate…; Tier 1 (IITs, IIMs, top… | 90-100% |…; Tier 2…
- Title attribute: Tier-wise campus placement quality: the honest picture
- Caption (also keep the key point in the HTML text): "My college has X% placement" means very different things depending on which tier that college sits in, and the gap is large enough that it should…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/job-search/gap-year-after-graduation-india/

**H1:** Gap Year After Graduation India: When It Helps and When It Quietly Costs You  
**Category:** job-search · **Words:** 4234 · **H2 sections:** 13 · **Search priority:** P1 (4 clicks, 1086 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 7 other articles, with identical alt text and captions, so they say nothing specific about “Gap Year After Graduation India: When It Helps and When It…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/job-search/gap-year-after-graduation-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Any job vs a planned…”, “Where a gap year…”, “The 4-Question Gap Year…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `job-search-editorial-cover.webp`, `job-search-context.webp`, `job-search-sequence.webp`, `job-search-research.webp`, `job-search-loop.webp`, `job-search-interview.webp`, `job-search-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `gap-year-after-graduation-india.webp`, `gap-year-after-graduation-india-detail.webp`, `gap-year-after-graduation-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `gap-year-after-graduation-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `gap-year-after-graduation-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a final-year student or recent graduate, a quiet corner of a library. Props that belong to “Gap Year After Graduation India: When It Helps and When It Quietly Costs You”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Gap Year After Graduation India: When It Helps and When It Quietly…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `gap-year-after-graduation-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A gap year after graduation India can be built well or wasted.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / Why this is a different decision than a gap year after 12th / Honest reasons graduates actually take this gap year / How to use the time so it strengthens your resume, not weakens it / Financial planning for a gap year without a salary
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Gap Year After Graduation India: When It Helps and When It Quietly…”
- Title attribute: At a glance: Gap Year After Graduation India: When It Helps and When…
- Caption (also keep the key point in the HTML text): A gap year after graduation India can be built well or wasted.
**V2 — Comparison table** (place after the H2 “How to use the time so it strengthens your resume, not weakens it” #use-it-well)
- File: `gap-year-after-graduation-india-comparison-use-time-strengthens-resume.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A gap year is not automatically productive or automatically wasted - it becomes one or the other based on…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: What to do with the… | Why it helps | Watch out for / Row: A short, focused… | Shows you used the gap to… | Pick one that leads to a… / Row: A structured internship… | Gives you a recent… | A one-line "assisted… / Row: Freelance or volunteer… | Produces something you… | Choose work you can talk… / Row: Travel or family time… | Genuine rest has real… | Give it a fixed window… / Row: Preparing for a specific… | Turns waiting time into… | Keep one visible fallback…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “How to use the time so it strengthens your resume, not…”: What to do with the… | Why it helps |…; A short, focused… | Shows you used…; A…
- Title attribute: How to use the time so it strengthens your resume, not weakens it
- Caption (also keep the key point in the HTML text): A gap year is not automatically productive or automatically wasted - it becomes one or the other based on what you choose to do inside it.
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Any job vs a planned gap year: which one actually serves you” #any-job-vs-gap)
- File: `gap-year-after-graduation-india-asymmetrical-any-job-planned-gap.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A common question graduates ask is whether it is safer to just take any available job rather than risk a gap.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You have no clear plan for the gap and no financial cushion to support it. / The role, even if imperfect, still builds transferable skills or gives you paid… / You need income now, and can keep building a specific skill on the side while working. / You have a genuine, time-bound reason and a way to fund it without debt. / Taking a mismatched job now would likely cost you more time later, through a bad…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Any job vs a planned gap year: which one actually…”: You have no clear plan for the gap…; The role, even if imperfect…
- Title attribute: Any job vs a planned gap year: which one actually serves you
- Caption (also keep the key point in the HTML text): A common question graduates ask is whether it is safer to just take any available job rather than risk a gap.
**V4 — Chronological timeline** (place after the H2 “Where a gap year genuinely hurts you” #where-it-hurts)
- File: `gap-year-after-graduation-india-chronological-where-gap-year-genuinely.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: It would be dishonest to say a gap year never carries risk.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Momentum loss: the discipline built up during final semesters and placement prep fades… / Skill-currency drift: fields that move fast, like tech, analytics, or anything… / Recruiter caution on unexplained silence: a portion of hiring managers still filter out… / A visible activity, even a small one, keeps skills and confidence from going fully stale. / A fixed end date forces the restart to actually happen, instead of sliding indefinitely.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “Where a gap year genuinely hurts you”: Momentum loss: the discipline built…; Skill-currency drift: fields that…; Recruiter caution on…
- Title attribute: Where a gap year genuinely hurts you
- Caption (also keep the key point in the HTML text): It would be dishonest to say a gap year never carries risk.
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that turn a planned gap into a lost year” #mistakes)
- File: `gap-year-after-graduation-india-mistakes-mistakes-turn-planned-gap.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Starting the gap with no plan, expecting clarity to arrive on its own.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Starting the gap with no plan, expecting clarity to arrive on its own. Clarity tends to… / Letting the "short break" quietly become a year with no fixed end. Without a set end… / Avoiding the job market entirely instead of testing it lightly. You do not need to fully… / Treating the gap as a private matter you will explain "if it comes up". Decide your… / Comparing your gap to a friend's straight-through path and panicking. A friend who joined…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that turn a planned gap into a lost year”: Starting the gap with no plan…; Letting the "short break" quietly……
- Title attribute: Mistakes that turn a planned gap into a lost year
- Caption (also keep the key point in the HTML text): Starting the gap with no plan, expecting clarity to arrive on its own.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/job-search/internship-vs-full-time-job-india/

**H1:** Internship vs full-time job India: when the internship is the real offer  
**Category:** job-search · **Words:** 3929 · **H2 sections:** 12 · **Search priority:** P1 (0 clicks, 318 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 7 other articles, with identical alt text and captions, so they say nothing specific about “Internship vs full-time job India: when the internship is…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/job-search/internship-vs-full-time-job-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Internship”, “Full Time Job India”, “The short answer”, “What internship and…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `job-search-editorial-cover.webp`, `job-search-context.webp`, `job-search-sequence.webp`, `job-search-research.webp`, `job-search-loop.webp`, `job-search-interview.webp`, `job-search-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `internship-vs-full-time-job-india.webp`, `internship-vs-full-time-job-india-detail.webp`, `internship-vs-full-time-job-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `internship-vs-full-time-job-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `internship-vs-full-time-job-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of an Indian student or adult at a home desk, a school or college corridor bench. Props that belong to “Internship vs full-time job India: when the internship is the real offer”: a printed resume, a job description, a notebook, a phone. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Internship vs full-time job India: when the internship is the real…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `internship-vs-full-time-job-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Internship vs full-time job India compared on real PPO conversion rates, stipend norms, and how to tell a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on internship vs full-time job in India / What internship and full-time actually mean / Internship vs full-time job: the head-to-head / Paid vs unpaid internships: is unpaid ever worth it? / The PPO conversion math nobody explains upfront
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Internship vs full-time job India: when the internship is the real…”
- Title attribute: At a glance: Internship vs full-time job India: when the internship…
- Caption (also keep the key point in the HTML text): Internship vs full-time job India compared on real PPO conversion rates, stipend norms, and how to tell a skill-building internship apart from an…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer on internship vs full-time job in India” #short-answer)
- File: `internship-vs-full-time-job-india-asymmetrical-short-answer-internship-full.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: An internship is a time-boxed, learning-oriented role, paid or unpaid, that is structured to build a specific…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): It treats "do an internship first" as universal advice, without checking whether the… / It skips the actual PPO conversion math, leaving people to assume an internship is a… / It rarely explains that internships sit largely outside India's formal labour… / It frames a full-time offer as automatically "playing it safe," ignoring cases where the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer on internship vs full-time job in…”: It treats "do an internship first" as…; It skips the actual PPO…
- Title attribute: The short answer on internship vs full-time job in India
- Caption (also keep the key point in the HTML text): An internship is a time-boxed, learning-oriented role, paid or unpaid, that is structured to build a specific skill or evaluate you for a future…
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Internship vs full-time job: the head-to-head” #head-to-head)
- File: `internship-vs-full-time-job-india-asymmetrical-internship-full-time-job.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Put side by side, the trade-offs are specific and worth naming plainly instead of treating one option as the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Lower financial pressure to prove your entire market value on day one — mistakes cost… / Structured for learning: shadowing, mentorship, and smaller-scope tasks are expected, not… / Stipend is usually a fraction of a full-time salary, or in some cases zero. / Time-boxed by design, so the exit is already built in, whether or not a PPO shows up. / A strong internship at a known name can outweigh a mediocre full-time offer at an unknown…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Honest take Typical internship stipends in India run from roughly Rs 5,000 to Rs 15,000 a month at the entry level, and Rs 10,000 to Rs 40,000 a month for technical and engineering-heavy roles, with large well-funded employers paying meaningfully more. | Set against a full-time fresher salary of roughly Rs 2.5-4.5 LPA in many entry-level roles, the income gap during the internship period is real and should be weighed against your actual financial runway, not dismissed as a minor trade-off.
- Alt: Asymmetrical pros-and-cons comparison for “Internship vs full-time job: the head-to-head”: Lower financial pressure to prove…; Structured for learning: shadowing……
- Title attribute: Internship vs full-time job: the head-to-head
- Caption (also keep the key point in the HTML text): Put side by side, the trade-offs are specific and worth naming plainly instead of treating one option as the obviously safe choice.
**V4 — Comparison table** (place after the H2 “The PPO conversion math nobody explains upfront” #ppo-math)
- File: `internship-vs-full-time-job-india-comparison-ppo-conversion-math-nobody.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before you decide anything, look at the actual numbers, because most internship marketing implies conversion…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Program type | Typical PPO… | The honest reality / Row: Average across Indian… | 20-25% | Roughly one in four to… / Row: Weaker programs / smaller… | 10% or lower | Some internship cohorts… / Row: Top-tier tech and product… | 50-60% | Large, well-funded tech…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Program type Typical PPO conversion rate The honest reality Average across Indian internships 20-25% Roughly one in four to one in five interns receive a pre-placement offer. | Weaker programs / smaller teams 10% or lower Some internship cohorts convert only one in ten interns. | Top-tier tech and product employers 50-60% Large, well-funded tech employers running structured summer internship programs report conversion in this range because the internship functions as an extended, paid interview for a role that already has budget.
- Alt: Comparison table for “The PPO conversion math nobody explains upfront”: Program type | Typical PPO… | The…; Average across Indian… | 20-25% |…; Weaker programs /…
- Title attribute: The PPO conversion math nobody explains upfront
- Caption (also keep the key point in the HTML text): Before you decide anything, look at the actual numbers, because most internship marketing implies conversion rates far higher than what typically…
**V5 — Chronological timeline** (place after the H2 “When it is exploitative, not experience” #when-exploitative)
- File: `internship-vs-full-time-job-india-chronological-exploitative-experience.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: On the other side of the same decision, some internships are structured to extract free or near-free labour…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): On the other side of the same decision, some internships are structured to… / India does not have a comprehensive law regulating internships the way it… / That legal gap is exactly why the responsibility to check terms falls on you…
- Numbers: use ONLY these facts from the article (exact values, no new ones): No mentor ever reviews your work A 2017 industry survey found 72% of interns in India reported feeling exploited during their internship — a pattern strongly tied to being handed tasks with no feedback loop, no check-ins, and no one accountable for whether you | A widely cited 2017 industry survey found that 72% of interns in India reported feeling exploited during their internship.
- Alt: Chronological timeline for “When it is exploitative, not experience”: On the other side of the same…; India does not have a comprehensive…; That legal gap is…
- Title attribute: When it is exploitative, not experience
- Caption (also keep the key point in the HTML text): On the other side of the same decision, some internships are structured to extract free or near-free labour rather than to build a career.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/job-search/first-job-after-graduation-india/

**H1:** First Job After Graduation in India: The Real Numbers Behind Where Offers Come From  
**Category:** job-search · **Words:** 5311 · **H2 sections:** 18 · **Search priority:** P2 (1 clicks, 97 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/job-search/first-job-after-graduation-india/first-job-after-graduation-india-cover.webp

**Findings**
1. 7 authored images on the page (hero + 6 supporting).
2. Verify "2-8% interview conversion" and "100+ applications".
3. Corner slogans are decorative.
4. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
5. 7 of 7 images have no title attribute.
6. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `application-to-offer-math-india.webp`: 100. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `job-search/first-job-after-graduation-india/first-job-after-graduation-india-cover.webp` | 1600x900 | 1600x900 | eager | 12% | no title attr |
| `job-search/first-job-after-graduation-india/first-job-search-timeline-india.webp` | 1122x1402 | 1122x1402 | lazy | 24% | no title attr |
| `job-search/first-job-after-graduation-india/four-job-search-channels-india.webp` | 1122x1402 | 1122x1402 | lazy | 28% | no title attr |
| `job-search/first-job-after-graduation-india/three-lane-application-split.webp` | 1122x1402 | 1122x1402 | lazy | 41% | no title attr |
| `job-search/first-job-after-graduation-india/application-to-offer-math-india.webp` | 1122x1402 | 1122x1402 | lazy | 46% | no title attr |
| `job-search/first-job-after-graduation-india/what-gets-you-shortlisted-first-job.webp` | 1122x1402 | 1122x1402 | lazy | 49% | no title attr |
| `job-search/first-job-after-graduation-india/after-the-offer-first-job-money-habits.webp` | 1122x1402 | 1122x1402 | lazy | 60% | no title attr |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `first-job-after-graduation-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `first-job-after-graduation-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a recent graduate preparing job applications, a neighbourhood cafe table. Props that belong to “First Job After Graduation in India: The Real Numbers Behind Where Offers Come…”: a printed resume, a job description, a notebook, a phone. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: First Job After Graduation in India: The Real Numbers Behind Where…
- Caption: one sentence tying the scene to the article's decision.
2. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
3. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/job-search/how-to-get-a-job-without-experience-india/

**H1:** How to Get a Job Without Experience in India: Breaking the Catch-22  
**Category:** job-search · **Words:** 4914 · **H2 sections:** 15 · **Search priority:** P2 (0 clicks, 63 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/job-search/how-to-get-a-job-without-experience-india/how-to-get-a-job-without-experience-india-cover.webp

**Findings**
1. 7 authored images on the page (hero + 6 supporting).
2. Good set. Scheme names (NAPS, PM Internship Scheme, Skill India Digital) must be verified as current.
3. 7 of 7 images have no title attribute.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `job-search/how-to-get-a-job-without-experience-india/how-to-get-a-job-without-experience-india-cover.webp` | 1600x900 | 1600x900 | eager | 13% | no title attr |
| `job-search/how-to-get-a-job-without-experience-india/what-counts-as-experience.webp` | 1122x1402 | 1122x1402 | lazy | 27% | no title attr |
| `job-search/how-to-get-a-job-without-experience-india/rewrite-experience-gap.webp` | 1122x1402 | 1122x1402 | lazy | 31% | no title attr |
| `job-search/how-to-get-a-job-without-experience-india/portfolio-that-proves-experience.webp` | 1122x1402 | 1122x1402 | lazy | 37% | no title attr |
| `job-search/how-to-get-a-job-without-experience-india/where-to-aim-first-no-experience.webp` | 1122x1402 | 1122x1402 | lazy | 42% | no title attr |
| `job-search/how-to-get-a-job-without-experience-india/formal-routes-to-real-experience.webp` | 1122x1402 | 1122x1402 | lazy | 45% | no title attr |
| `job-search/how-to-get-a-job-without-experience-india/be-useful-first-job-search.webp` | 1122x1402 | 1122x1402 | lazy | 51% | no title attr |

**Required actions**
1. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
2. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/job-search/skills-needed-for-first-job-india/

**H1:** Skills Needed for First Job in India — The Foundational Skills Nobody Tests You On  
**Category:** job-search · **Words:** 4314 · **H2 sections:** 16 · **Search priority:** P2 (1 clicks, 70 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 7 other articles, with identical alt text and captions, so they say nothing specific about “Skills Needed for First Job in India — The Foundational…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/job-search/skills-needed-for-first-job-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Technical skills vs…”, “Email and workplace…”, “Basic Excel and…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `job-search-editorial-cover.webp`, `job-search-context.webp`, `job-search-sequence.webp`, `job-search-research.webp`, `job-search-loop.webp`, `job-search-interview.webp`, `job-search-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `skills-needed-for-first-job-india.webp`, `skills-needed-for-first-job-india-detail.webp`, `skills-needed-for-first-job-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `skills-needed-for-first-job-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `skills-needed-for-first-job-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a learner at a laptop with a small project, a school or college corridor bench. Props that belong to “Skills Needed for First Job in India — The Foundational Skills Nobody Tests You…”: a printed resume, a job description, a notebook, a phone. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Skills Needed for First Job in India — The Foundational Skills Nobody…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `skills-needed-for-first-job-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Skills needed for first job in India go beyond your degree: clear communication, email etiquette, basic…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / Why these skills matter more than your degree right now / Technical skills vs foundational skills: what changes by role and… / The 5 foundational skills employers actually check / Communication: the skill every other skill depends on
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Skills Needed for First Job in India — The Foundational Skills Nobody…”
- Title attribute: At a glance: Skills Needed for First Job in India — The Foundational…
- Caption (also keep the key point in the HTML text): Skills needed for first job in India go beyond your degree: clear communication, email etiquette, basic Excel, and time management.
**V2 — Skill map** (place after the H2 “Why these skills matter more than your degree right now” #why-it-matters)
- File: `skills-needed-for-first-job-india-skill-these-skills-matter-more.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Overall graduate employability in India has been rising, reaching around 56% in the India Skills Report 2026…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Overall graduate employability in India has been rising, reaching around 56% in… / That sounds like good news for freshers, and in one sense it is. / But the same report also flags a persistent, specific gap: communication…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Overall graduate employability in India has been rising, reaching around 56% in the India Skills Report 2026, and companies report plans to hire meaningfully more freshers in the coming year than the year before. | Around 80% of companies surveyed said they still struggle to find the right fresher candidates to fill open roles, despite a large pool of graduates.
- Alt: Skill map for “Why these skills matter more than your degree right now”: Overall graduate employability in…; That sounds like good news for…; But the same report…
- Title attribute: Why these skills matter more than your degree right now
- Caption (also keep the key point in the HTML text): Overall graduate employability in India has been rising, reaching around 56% in the India Skills Report 2026, and companies report plans to hire…
**V3 — Comparison table** (place after the H2 “Technical skills vs foundational skills: what changes by role and industry” #skill-split)
- File: `skills-needed-for-first-job-india-comparison-technical-skills-foundational-skills.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The technical skill half of your first job changes a lot by role.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Role type | Core technical skill | Foundational skill… / Row: Software / IT roles | Core programming… | Explaining your code… / Row: Sales and business… | CRM tools, pitch… | Handling rejection… / Row: Marketing | Basic analytics… | Writing clearly, giving… / Row: Finance and accounts | Spreadsheet formulas… | Accuracy under deadline… / Row: Customer support /… | Ticketing tools, process… | Staying calm with a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Technical skills vs foundational skills: what changes…”: Role type | Core technical skill |…; Software / IT roles | Core…; Sales and business……
- Title attribute: Technical skills vs foundational skills: what changes by role and…
- Caption (also keep the key point in the HTML text): The technical skill half of your first job changes a lot by role.
**V4 — Comparison table** (place after the H2 “Build this skill portfolio free, in the right order” #build-portfolio)
- File: `skills-needed-for-first-job-india-comparison-build-skill-portfolio-free.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Building the right skill mix here is not just interview prep — it is how you start building a high-income…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Time before you start… | Focus on this first / Row: You have about 2 weeks | Practise explaining one… / Row: You have about 1 to 2… | Add a daily… / Row: You have 3 months or more | Layer in pivot tables and… / High-quality YouTube channels on workplace communication and Excel basics, watched… / Free modules from established learning platforms, chosen for a specific skill gap rather… / Campus clubs, student committees, or volunteering roles that force you to write emails…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Time before you start applying Focus on this first You have about 2 weeks Practise explaining one project clearly, learn the 5 core Excel actions, and draft two email templates you can adapt quickly. | You have about 1 to 2 months Add a daily urgent-vs-important habit, build one small finished project as proof, and do three mock interview rounds focused on behavioural questions. | You have 3 months or more Layer in pivot tables and a basic chart, get one recommendation lined up, and practise the STAR method until it feels natural instead of scripted.
- Alt: Comparison table for “Build this skill portfolio free, in the right order”: Time before you start… | Focus on…; You have about 2 weeks | Practise…; You have about 1…
- Title attribute: Build this skill portfolio free, in the right order
- Caption (also keep the key point in the HTML text): Building the right skill mix here is not just interview prep — it is how you start building a high-income skill portfolio that unlocks better roles…
**V5 — Self-assessment checklist** (place after the H2 “Check the sources behind these claims” #sources)
- File: `skills-needed-for-first-job-india-self-check-sources-behind-these.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Do not trust any single career article blindly, including this one.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): India Skills Report 2026 employability rate, hiring intent, and the… / Additional coverage of the India Skills Report 2026 findings on hiring struggles and… / Indian workplace communication norms and business etiquette expectations. Indeed India… / Work culture, formality, and communication norms in Indian workplaces. InsourceIndia… / Professional email etiquette practices: subject lines, CC/BCC, and Reply-All conventions.…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Check the sources behind these claims”: India Skills Report 2026…; Additional coverage of the India…; Indian workplace communication…
- Title attribute: Check the sources behind these claims
- Caption (also keep the key point in the HTML text): Do not trust any single career article blindly, including this one.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/job-search/best-companies-for-freshers-to-work-at-india/

**H1:** Best Companies for Freshers to Work at in India: A Filter, Not a List  
**Category:** job-search · **Words:** 4299 · **H2 sections:** 13 · **Search priority:** P3 (0 clicks, 22 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 7 other articles, with identical alt text and captions, so they say nothing specific about “Best Companies for Freshers to Work at in India: A Filter…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/job-search/best-companies-for-freshers-to-work-at-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Why a fixed”, “The 4-Signal Filter for…”, “How to research a…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `job-search-editorial-cover.webp`, `job-search-context.webp`, `job-search-sequence.webp`, `job-search-research.webp`, `job-search-loop.webp`, `job-search-interview.webp`, `job-search-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-companies-for-freshers-to-work-at-india.webp`, `best-companies-for-freshers-to-work-at-india-detail.webp`, `best-companies-for-freshers-to-work-at-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `best-companies-for-freshers-to-work-at-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-companies-for-freshers-to-work-at-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a recent graduate preparing job applications, a shared neighbourhood workspace. Props that belong to “Best Companies for Freshers to Work at in India: A Filter, Not a List”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best Companies for Freshers to Work at in India: A Filter, Not a List
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-companies-for-freshers-to-work-at-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Best companies for freshers to work at in India are not a fixed ranking.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / Why a fixed "best companies" list misleads you / The 4-Signal Filter for judging any employer / Company categories that tend to invest in freshers, and where each… / Government jobs, PSUs, and sector-specific options freshers often skip
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best Companies for Freshers to Work at in India: A Filter, Not a List”
- Title attribute: At a glance: Best Companies for Freshers to Work at in India: A…
- Caption (also keep the key point in the HTML text): Best companies for freshers to work at in India are not a fixed ranking.
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Company categories that tend to invest in freshers, and where each works better” #company-categories)
- File: `best-companies-for-freshers-to-work-at-india-asymmetrical-company-categories-tend-invest.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: It helps to think in categories of employer, not individual company names, since the category shapes the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): It helps to think in categories of employer, not individual company names… / Large IT services Structured, standardised trainee programs Large IT services… / The structure is real and well-documented, but the pace and content are…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Company categories that tend to invest in freshers…”: It helps to think in categories of…; Large IT services Structured……
- Title attribute: Company categories that tend to invest in freshers, and where each…
- Caption (also keep the key point in the HTML text): It helps to think in categories of employer, not individual company names, since the category shapes the default trade-off you are choosing even…
**V3 — Linear process chain or roadmap** (place after the H2 “What the interview process itself tells you” #interview-signal)
- File: `best-companies-for-freshers-to-work-at-india-linear-interview-process-itself-tells.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The interview is not only an evaluation of you — it is your first real sample of how the company operates.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Did interviewers show up on time and prepared, or did the process feel disorganised… / Could the person hiring you clearly describe what your first project or first few weeks… / Did anyone mention who your day-to-day point of contact would be if you got stuck, or was… / Were expectations around hours, deadlines, and review cycles stated plainly, or only…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “What the interview process itself tells you”: Did interviewers show up on time and…; Could the person hiring you clearly…; Did…
- Title attribute: What the interview process itself tells you
- Caption (also keep the key point in the HTML text): The interview is not only an evaluation of you — it is your first real sample of how the company operates.
**V4 — Comparison table** (place after the H2 “Churn-and-burn red flags to watch for” #red-flags)
- File: `best-companies-for-freshers-to-work-at-india-comparison-churn-burn-red-flags.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "Churn and burn" describes a workplace pattern where people are hired fast, pushed hard with little support…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Signal | What it usually means / Row: High turnover… | People are being hired to… / Row: Job posting leans on… | Often a substitute for a… / Row: Interviewer cannot… | If onboarding were real… / Row: Constantly shifting… | A workplace where goals… / Row: Reviews consistently… | Without structured…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Churn-and-burn red flags to watch for”: Signal | What it usually means; High turnover… | People are being…; Job posting leans on… | Often a…
- Title attribute: Churn-and-burn red flags to watch for
- Caption (also keep the key point in the HTML text): "Churn and burn" describes a workplace pattern where people are hired fast, pushed hard with little support, and cycled out just as fast once they…
**V5 — Self-assessment checklist** (place after the H2 “Check the sources behind these claims” #sources)
- File: `best-companies-for-freshers-to-work-at-india-self-check-sources-behind-these.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Do not trust any single career article blindly, including this one.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What structured fresher onboarding and training programs typically include at large… / Why access to experienced mentors matters for early-career skill development. MentorGain… / How review platforms like Glassdoor and AmbitionBox are meant to be used, and their… / What "churn and burn" hiring patterns look like and why they persist. Adaface: Churn and… / Job-posting language and interview-process red flags that can signal a toxic workplace.…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Check the sources behind these claims”: What structured fresher onboarding…; Why access to experienced mentors…; How review platforms…
- Title attribute: Check the sources behind these claims
- Caption (also keep the key point in the HTML text): Do not trust any single career article blindly, including this one.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/job-search/how-to-stand-out-as-a-fresher-india/

**H1:** How to Stand Out as a Fresher in India — Proof Before Polish  
**Category:** job-search · **Words:** 4199 · **H2 sections:** 15 · **Search priority:** P3 (0 clicks, 5 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 7 other articles, with identical alt text and captions, so they say nothing specific about “How to Stand Out as a Fresher in India — Proof Before Polish”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/job-search/how-to-stand-out-as-a-fresher-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Why standing out is…”, “What makes one project…”, “Niche specialization vs…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `job-search-editorial-cover.webp`, `job-search-context.webp`, `job-search-sequence.webp`, `job-search-research.webp`, `job-search-loop.webp`, `job-search-interview.webp`, `job-search-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `how-to-stand-out-as-a-fresher-india.webp`, `how-to-stand-out-as-a-fresher-india-detail.webp`, `how-to-stand-out-as-a-fresher-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `how-to-stand-out-as-a-fresher-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `how-to-stand-out-as-a-fresher-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a recent graduate preparing job applications, a neighbourhood cafe table. Props that belong to “How to Stand Out as a Fresher in India — Proof Before Polish”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How to Stand Out as a Fresher in India — Proof Before Polish
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-to-stand-out-as-a-fresher-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to stand out as a fresher in India: build real proof of skill before you apply, pick one specific story…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / Why standing out is genuinely harder now, not just in your head / What recruiters actually notice vs what freshers think matters / The 3-Proof Ladder: build evidence before you need it / What makes one project count for more than ten
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to Stand Out as a Fresher in India — Proof Before Polish”
- Title attribute: At a glance: How to Stand Out as a Fresher in India — Proof Before…
- Caption (also keep the key point in the HTML text): How to stand out as a fresher in India: build real proof of skill before you apply, pick one specific story instead of a generic pitch, and know what…
**V2 — Comparison table** (place after the H2 “What recruiters actually notice vs what freshers think matters” #what-recruiters-notice)
- File: `how-to-stand-out-as-a-fresher-india-comparison-recruiters-actually-notice-freshers.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Freshers frequently spend effort on the wrong lever, not because they are careless, but because the "safe"…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: What freshers think… | What actually gets… / Row: A longer list of… | One or two things they… / Row: A polished, design-heavy… | A resume that survives a… / Row: A college brand name or… | Whether the specific… / Row: Applying to as many roles… | A small number of… / Row: Sounding confident and… | Whether you can explain a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “What recruiters actually notice vs what freshers think…”: What freshers think… | What actually…; A longer list of… | One or two things…; A…
- Title attribute: What recruiters actually notice vs what freshers think matters
- Caption (also keep the key point in the HTML text): Freshers frequently spend effort on the wrong lever, not because they are careless, but because the "safe" advice they hear most often points at…
**V3 — Comparison table** (place after the H2 “Niche specialization vs staying a generalist” #specialization)
- File: `how-to-stand-out-as-a-fresher-india-comparison-niche-specialization-staying-generalist.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A common fresher instinct is to stay broad on purpose, keeping "options open" by learning a little of…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: The safe-feeling… | What actually… / Row: A broad resume listing… | One clearly demonstrated… / Row: Staying a generalist to… | Picking a specific…
- Numbers: use ONLY these facts from the article (exact values, no new ones): The safe-feeling instinct What actually differentiates A broad resume listing many tools and technologies at a surface level One clearly demonstrated area of depth that matches a real role, plus working familiarity with the surrounding tools Staying a generali
- Alt: Comparison table for “Niche specialization vs staying a generalist”: The safe-feeling… | What actually…; A broad resume listing… | One clearly…; Staying a…
- Title attribute: Niche specialization vs staying a generalist
- Caption (also keep the key point in the HTML text): A common fresher instinct is to stay broad on purpose, keeping "options open" by learning a little of everything and committing to none of it.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Differentiation mistakes that quietly cost freshers interviews” #mistakes)
- File: `how-to-stand-out-as-a-fresher-india-asymmetrical-differentiation-mistakes-quietly-cost.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Collecting certificates instead of finishing projects A stack of course-completion certificates signals…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 01 Collecting certificates instead of finishing projects A stack of… / A finished, explainable project signals that you can execute. / Recruiters increasingly weigh demonstrated skill over credential volume, and a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Differentiation mistakes that quietly cost freshers…”: 01 Collecting certificates instead of…; A finished, explainable…
- Title attribute: Differentiation mistakes that quietly cost freshers interviews
- Caption (also keep the key point in the HTML text): 01 Collecting certificates instead of finishing projects A stack of course-completion certificates signals that you started things.
**V5 — Self-assessment checklist** (place after the H2 “Check the sources behind these claims” #sources)
- File: `how-to-stand-out-as-a-fresher-india-self-check-sources-behind-these.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Do not trust any single career article blindly, including this one.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 2026 employer skill-preference data (AI/ML, data science, cloud, cybersecurity vs. degree… / GitHub 2025 Octoverse report on public contribution volume and first-time contributors.… / Beginner-friendly open-source contribution guidance, including non-code contributions.… / Recruiter resume-scan time and screening behaviour for fresher resumes. GUVI: What… / Project-based proof of work versus certificate volume for early-career candidates.…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Check the sources behind these claims”: 2026 employer skill-preference data…; GitHub 2025 Octoverse report on…; Beginner-friendly…
- Title attribute: Check the sources behind these claims
- Caption (also keep the key point in the HTML text): Do not trust any single career article blindly, including this one.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/job-search/salary-negotiation-for-freshers-india/

**H1:** Salary Negotiation for Freshers India: How Much Room You Actually Have  
**Category:** job-search · **Words:** 4366 · **H2 sections:** 12 · **Search priority:** P3 (0 clicks, 15 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 7 other articles, with identical alt text and captions, so they say nothing specific about “Salary Negotiation for Freshers India: How Much Room You…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/job-search/salary-negotiation-for-freshers-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“How much room do you…”, “Negotiating the full…”, “Find your fair range…”, “The Leverage Check…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `job-search-editorial-cover.webp`, `job-search-context.webp`, `job-search-sequence.webp`, `job-search-research.webp`, `job-search-loop.webp`, `job-search-interview.webp`, `job-search-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `salary-negotiation-for-freshers-india.webp`, `salary-negotiation-for-freshers-india-detail.webp`, `salary-negotiation-for-freshers-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `salary-negotiation-for-freshers-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `salary-negotiation-for-freshers-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a recent graduate preparing job applications, a quiet corner of a library. Props that belong to “Salary Negotiation for Freshers India: How Much Room You Actually Have”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Salary Negotiation for Freshers India: How Much Room You Actually Have
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `salary-negotiation-for-freshers-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary negotiation for freshers India: how much room really exists in an entry-level offer, how to find a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): How much room do you actually have? / Negotiating the full CTC, not just base pay / Find your fair range before you say a number / The Leverage Check: when you can push harder / What to do when you have none of that leverage
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Salary Negotiation for Freshers India: How Much Room You Actually Have”
- Title attribute: At a glance: Salary Negotiation for Freshers India: How Much Room You…
- Caption (also keep the key point in the HTML text): Salary negotiation for freshers India: how much room really exists in an entry-level offer, how to find a fair range, and scripts that do not sound…
**V2 — Comparison table** (place after the H2 “Negotiating the full CTC, not just base pay” #full-ctc)
- File: `salary-negotiation-for-freshers-india-comparison-negotiating-full-ctc-just.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A fresher offer is rarely just one number.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: CTC component | How negotiable it… | What to check / Row: Base salary | Low. Sits inside a fixed… | This is the number every… / Row: Variable or incentive pay | Medium, but often not… | Ask what percentage is… / Row: Joining bonus | Medium-high. A one-time… | Almost always comes with… / Row: ESOPs or stock | Usually fixed by level… | Ask about the vesting… / Row: Relocation or joining… | Medium. Often has more… | Confirm whether it is…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Negotiating the full CTC, not just base pay”: CTC component | How negotiable it… |…; Base salary | Low. Sits inside a…; Variable or incentive…
- Title attribute: Negotiating the full CTC, not just base pay
- Caption (also keep the key point in the HTML text): A fresher offer is rarely just one number.
**V3 — Comparison table** (place after the H2 “Find your fair range before you say a number” #research-range)
- File: `salary-negotiation-for-freshers-india-comparison-find-fair-range-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Naming a figure without checking it first is the most common way a fresher's negotiation goes nowhere.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Source | Best for | Watch out for / Row: AmbitionBox | Company-specific pay… | Sample size can be thin… / Row: Glassdoor India | Larger MNCs and mid-size… | Weaker coverage for… / Row: LinkedIn Salary Insights | City and role-level… | Self-reported, and the… / Row: Naukri JobSpeak and… | Sector-level hiring and… | Reports trends and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Source Best for Watch out for AmbitionBox Company-specific pay ranges reported by employees at that exact employer, useful for matching your ask to what the company itself has actually paid Sample size can be thin for smaller companies or newer roles Glassdoor | Note that the 5-15% cushion and 10-20% ask figures used through this article are typical patterns recruiters and negotiation data report, not a guarantee for your specific offer - your company size, sector, city, and hiring urgency all shift the real number up
- Alt: Comparison table for “Find your fair range before you say a number”: Source | Best for | Watch out for; AmbitionBox | Company-specific pay… |…; Glassdoor India |…
- Title attribute: Find your fair range before you say a number
- Caption (also keep the key point in the HTML text): Naming a figure without checking it first is the most common way a fresher's negotiation goes nowhere.
**V4 — Chronological timeline** (place after the H2 “When to just say yes” #when-to-accept)
- File: `salary-negotiation-for-freshers-india-chronological-just-say-yes.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Negotiating is not always the right move, and knowing when to stop asking matters as much as knowing how to…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The offer already sits at or near the top of the range you researched from more than one… / It is a genuine campus placement with a fixed, published fresher band applied equally to… / It is a role, team, or manager you specifically want, and the gap between the offer and… / The number sits noticeably below what two or more independent sources show for your role… / You have a specific, checkable skill or piece of proof the job description named as…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “When to just say yes”: The offer already sits at or near the…; It is a genuine campus placement with…; It is a role, team, or manager…
- Title attribute: When to just say yes
- Caption (also keep the key point in the HTML text): Negotiating is not always the right move, and knowing when to stop asking matters as much as knowing how to ask.
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Check the sources behind these numbers” #sources)
- File: `salary-negotiation-for-freshers-india-stat-check-sources-behind-these.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Do not trust any single career article blindly, including this one.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Fresher salary negotiation practices and India-specific tools. Naukri Campus: how to… / India-specific negotiation range guidance and non-salary levers. Crescendo Global: how to… / Share of workers who do not negotiate a job offer. HR Dive: 54% of workers didn't… / Employer-side data on willingness to negotiate salary. CareerBuilder: 73% of employers… / Outcomes for candidates who counter-offer after a job offer. CNBC: negotiating a job…
- Numbers: use ONLY these facts from the article (exact values, no new ones): HR Dive: 54% of workers didn't negotiate their most recent job salary Employer-side data on willingness to negotiate salary. | CareerBuilder: 73% of employers would negotiate salary, 55% of workers don't ask Outcomes for candidates who counter-offer after a job offer.
- Alt: Stat panel or bar chart (only the numbers listed) for “Check the sources behind these numbers”: Fresher salary negotiation practices…; India-specific negotiation…
- Title attribute: Check the sources behind these numbers
- Caption (also keep the key point in the HTML text): Do not trust any single career article blindly, including this one.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
