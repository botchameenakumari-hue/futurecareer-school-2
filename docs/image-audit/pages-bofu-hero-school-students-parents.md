# Image audit — service/other pages: bofu-hero-school-students-parents

13 pages, ordered by search priority. Submit one page section at a time with `docs/image-audit/00-READ-FIRST.md`.

### /services/career-counselling-and-career-guidance/student-career-guidance/

**H1:** Student career guidance before the wrong turn gets expensive  
**Type:** bofu · **Search priority:** P2 (0 clicks, 66 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
7. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 97% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. CREATE a distinct hero for this page (it ranks, and `hero-school-students-parents.webp` is shared by 13 pages): documentary photograph, natural light. Top-down desk view with hands in frame of a Class 12 or first-year medical aspirant, a home study corner with natural window light. Props: stethoscope, NEET/NCERT books, a fee sheet, a notebook. File `student-career-guidance-hero.webp` 1600×900, eager + fetchpriority high; alt/title/caption specific to “Student career guidance before the wrong turn gets expensive”.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `student-career-guidance-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers student career guidance for school students, college students, freshers, recent…
- On-image text (about 25-40 words, shortened from the page; no new claims): When student career guidance becomes useful / Make the student decision clearer before the next stream, course, or… / How student career guidance changes across each stage / What strong student career guidance actually improves / Generic career advice versus guidance built around skill direction
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Student career guidance before the…”: When student career guidance…; Make the student decision…
- Title attribute: At a glance: Student career guidance before the wrong turn gets…
- Caption (and keep the same point in HTML text): Future Career School offers student career guidance for school students, college students, freshers, recent graduates, and postgraduates…
**V2 — Chronological timeline** (place after the section “When student career guidance becomes useful”)
- File: `student-career-guidance-chronological-student-career-guidance-becomes.webp` · 1600×1000 WebP under 200 KB
- Teaches: This becomes useful when the next decision feels important, expensive, hard to reverse, or already delayed by…
- On-image text (about 25-40 words, shortened from the page; no new claims): School students / College students / Freshers, recent graduates, and postgraduates / Parents who want clearer decisions
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When student career guidance becomes useful”: School students; College students; Freshers, recent graduates, and…
- Title attribute: When student career guidance becomes useful
- Caption (and keep the same point in HTML text): This becomes useful when the next decision feels important, expensive, hard to reverse, or already delayed by confusion.
**V3 — Chronological timeline** (place after the section “How student career guidance changes across each stage”)
- File: `student-career-guidance-chronological-student-career-guidance-changes.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is built for ongoing direction, not one isolated conversation — the focus shifts as the stage and the…
- On-image text (about 25-40 words, shortened from the page; no new claims): School / College / Fresher or recent graduate / Postgraduate and beyond
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “How student career guidance changes across each…”: School; College; Fresher or recent graduate
- Title attribute: How student career guidance changes across each stage
- Caption (and keep the same point in HTML text): This is built for ongoing direction, not one isolated conversation — the focus shifts as the stage and the decision in front of you shift.
**V4 — Asymmetrical pros-and-cons comparison** (place after the section “Generic career advice versus guidance built around skill direction”)
- File: `student-career-guidance-asymmetrical-generic-career-advice-versus.webp` · 1600×1000 WebP under 200 KB
- Teaches: The difference shows up over years, not one conversation — in whether the path keeps building toward stronger…
- On-image text (about 25-40 words, shortened from the page; no new claims): The difference shows up over years, not one conversation — in whether the path… / Others Shift Future Career School Others A stream or course picked in a hurry…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “Generic career advice versus guidance built…”: The difference shows up over…; Others Shift Future Career School…
- Title attribute: Generic career advice versus guidance built around skill direction
- Caption (and keep the same point in HTML text): The difference shows up over years, not one conversation — in whether the path keeps building toward stronger income opportunities or just…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-after-10th/

**H1:** Career counselling after 10th before the admission window forces a guess  
**Type:** bofu · **Search priority:** P3 (0 clicks, 7 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 97% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-student-parent-map.webp` | 97% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-school-students-parents.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-after-10th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career counselling after 10th for students and parents who now have the result in…
- On-image text (about 25-40 words, shortened from the page; no new claims): What the after-10th decision actually involves / How this differs from career counselling for Class 10 students / Why this decision needs sharper reasoning than a result-based guess / What career counselling after 10th should actually clarify / What to check before paying for career counselling after 10th
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling after 10th before…”: What the after-10th decision…; How this differs from career……
- Title attribute: At a glance: Career counselling after 10th before the admission…
- Caption (and keep the same point in HTML text): Future Career School offers career counselling after 10th for students and parents who now have the result in hand and have to decide fast…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “How this differs from career counselling for Class 10 students”)
- File: `career-counselling-after-10th-asymmetrical-differs-career-counselling-class.webp` · 1600×1000 WebP under 200 KB
- Teaches: Both sit around the same life stage, but they are not the same conversation.
- On-image text (about 25-40 words, shortened from the page; no new claims): This is not only the stream question / The result itself changes the options and the pressure / Some doors are still open, others start narrowing today / Parents and students are both deciding under time pressure
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this differs from career counselling for…”: This is not only the stream…; The result itself changes the…; Some…
- Title attribute: How this differs from career counselling for Class 10 students
- Caption (and keep the same point in HTML text): Both sit around the same life stage, but they are not the same conversation.
**V3 — Decision tree** (place after the section “What career counselling after 10th should actually clarify”)
- File: `career-counselling-after-10th-decision-career-counselling-after-10th.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Separate the result reaction from the actual fit question A surprising result — good or bad — should not…
- On-image text (about 25-40 words, shortened from the page; no new claims): Separate the result reaction from the actual fit question / Give diploma and ITI a fair, honest look, not a default-by-panic slot / Pressure-test "11th keeps every door open" / Connect whichever path is chosen to a skill-building answer
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career counselling after 10th should…”: Separate the result reaction from…; Give diploma and ITI a fair…; Pressure-test "11th keeps…
- Title attribute: What career counselling after 10th should actually clarify
- Caption (and keep the same point in HTML text): 01 Separate the result reaction from the actual fit question A surprising result — good or bad — should not be the deciding factor on its…
**V4 — Decision tree** (place after the section “Decide 11th, diploma, or ITI with real reasoning before the window…”)
- File: `career-counselling-after-10th-decision-decide-11th-diploma-iti.webp` · 1600×1000 WebP under 200 KB
- Teaches: Use career counselling after 10th if the result is in and 11th, diploma, and ITI all feel like open questions…
- On-image text (about 25-40 words, shortened from the page; no new claims): Use career counselling after 10th if the result is in and 11th, diploma, and… / The right path, chosen for fit, is what starts the skill portfolio that leads… / Get Career Counselling After 10th for Students ❓ FAQ
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “Decide 11th, diploma, or ITI with real reasoning…”: Use career counselling after 10th…; The right path, chosen for fit…; Get Career…
- Title attribute: Decide 11th, diploma, or ITI with real reasoning before the window…
- Caption (and keep the same point in HTML text): Use career counselling after 10th if the result is in and 11th, diploma, and ITI all feel like open questions right now.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-benefits-for-students/

**H1:** Career counselling benefits for students: stream, college, and timeline decisions before a wrong turn gets expensive  
**Type:** bofu · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 96% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 92% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 94% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 95% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 96% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-student-parent-map.webp` | 97% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-school-students-parents.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-benefits-for-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: For a student, the real career counselling benefit is not a general sense of clarity — it is a narrower…
- On-image text (about 25-40 words, shortened from the page; no new claims): What makes a student's decision different from a general "is… / What the evidence shows for students specifically / What actually changes in a student's decision when the support behind… / What it costs for a student, so the trade-off is concrete / How a student and parent can decide together, without a hard sell
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling benefits for…”: What makes a student's decision…; What the evidence shows for……
- Title attribute: At a glance: Career counselling benefits for students: stream…
- Caption (and keep the same point in HTML text): For a student, the real career counselling benefit is not a general sense of clarity — it is a narrower, evidence-checked shortlist for one…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “What makes a student's decision different from a general "is…”)
- File: `career-counselling-benefits-for-students-asymmetrical-makes-student-decision-different.webp` · 1600×1000 WebP under 200 KB
- Teaches: Most career counselling benefits content is written for anyone — students and working professionals together…
- On-image text (about 25-40 words, shortened from the page; no new claims): The decision runs on someone else's clock / A parent is usually part of the decision, not a bystander / A wrong turn compounds in cost the longer it runs
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “What makes a student's decision different from a…”: The decision runs on someone…; A parent is usually part of the……
- Title attribute: What makes a student's decision different from a general "is…
- Caption (and keep the same point in HTML text): Most career counselling benefits content is written for anyone — students and working professionals together — and lists the same general…
**V3 — Comparison table** (place after the section “What the evidence shows for students specifically”)
- File: `career-counselling-benefits-for-students-comparison-evidence-shows-students-specifically.webp` · 1600×1000 WebP under 200 KB
- Teaches: The strongest available research on career counselling was not run only on students, but several parts of it…
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: What was measured | What it actually found / Row: 2024 meta-analysis, 35… | Individual career… / Row: Research on career… | Students receiving… / Row: Indian survey coverage… | Over 80% of students who…
- Numbers: Indian survey coverage (2025 reports) Over 80% of students who received structured counselling reported real benefit, while around 40% of Indian students have never spoken to a career counsellor at all before making a stream or college decision.
- Alt: Comparison table for “What the evidence shows for students specifically”: What was measured | What it…; 2024 meta-analysis, 35… |…; Research on career… |…
- Title attribute: What the evidence shows for students specifically
- Caption (and keep the same point in HTML text): The strongest available research on career counselling was not run only on students, but several parts of it speak directly to a student's…
**V4 — Comparison table** (place after the section “What it costs for a student, so the trade-off is concrete”)
- File: `career-counselling-benefits-for-students-comparison-costs-student-trade-off.webp` · 1600×1000 WebP under 200 KB
- Teaches: The numbers here are scoped to the student plan, since that is the decision at hand.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time…
- Numbers: Plan Price Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Student continuous guidance (year, includes the 1-on-1 plus up to 24 small-group sessions) Rs 12000 (limited-time price, down from Rs 29000) Weighed against a year of fees for a m
- Alt: Comparison table for “What it costs for a student, so the trade-off is…”: Plan | Price; Student 1-on-1 session | Rs 250…; Student continuous… | Rs 12000…
- Title attribute: What it costs for a student, so the trade-off is concrete
- Caption (and keep the same point in HTML text): The numbers here are scoped to the student plan, since that is the decision at hand.
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-benefits/

**H1:** Career counselling benefits: what actually holds up, and when you may not need to pay yet  
**Type:** bofu · **Search priority:** P3 (0 clicks, 3 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 96% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-holistic-framework.webp` has no title attribute and no caption.
7. Context visual reuse: `context-holistic-framework.webp` appears on 24 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 93% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 94% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 95% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 96% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-holistic-framework.webp` | 97% | lazy | A holistic career decision framework covering… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-school-students-parents.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-benefits-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: The real career counselling benefits are less career regret, stronger academic motivation once a goal has a…
- On-image text (about 25-40 words, shortened from the page; no new claims): What the research actually measures, not just testimonials / The core benefits that actually hold up, in the order they tend to… / What career counselling does not do, said plainly / What actually changes when the support behind the decision is stronger / What it actually costs here, so the trade-off is concrete
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling benefits: what…”: What the research actually…; The core benefits that actually……
- Title attribute: At a glance: Career counselling benefits: what actually holds up, and…
- Caption (and keep the same point in HTML text): The real career counselling benefits are less career regret, stronger academic motivation once a goal has a reason attached, better…
**V2 — Comparison table** (place after the section “What the research actually measures, not just testimonials”)
- File: `career-counselling-benefits-comparison-research-actually-measures-just.webp` · 1600×1000 WebP under 200 KB
- Teaches: Most "benefits of counselling" lists online cite each other, not a study.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Study or data source | What it actually found / Row: 2024 meta-analysis, 35… | Individual career… / Row: One-year follow-up study… | Participants showed… / Row: Research on career… | Students receiving… / Row: Indian survey coverage… | Over 80% of students who… / The strongest available evidence
- Numbers: Indian survey coverage (2025 reports) Over 80% of students who received career counselling reported real benefit, while around 40% of Indian students have never interacted with a career counsellor at all.
- Alt: Comparison table for “What the research actually measures, not just…”: Study or data source | What it…; 2024 meta-analysis, 35… |…; One-year follow-up study… |…
- Title attribute: What the research actually measures, not just testimonials
- Caption (and keep the same point in HTML text): Most "benefits of counselling" lists online cite each other, not a study.
**V3 — Self-assessment checklist** (place after the section “What career counselling does not do, said plainly”)
- File: `career-counselling-benefits-self-career-counselling-said-plainly.webp` · 1600×1000 WebP under 200 KB
- Teaches: A page built on honest evidence has to name the limits too, or it is not a fair comparison.
- On-image text (about 25-40 words, shortened from the page; no new claims): What it genuinely delivers / What it cannot promise / A wider, more accurate map of real options instead of the handful you already knew. / A structured way to compare fit, cost, and demand instead of guessing. / Measurable reduction in indecision and decision-related psychological distress. / A documented direction a parent can actually evaluate, not just a feeling. / A single guaranteed "correct" career — no ethical provider claims that.
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “What career counselling does not do, said plainly”: What it genuinely delivers; What it cannot promise; A wider, more accurate…
- Title attribute: What career counselling does not do, said plainly
- Caption (and keep the same point in HTML text): A page built on honest evidence has to name the limits too, or it is not a fair comparison.
**V4 — Comparison table** (place after the section “What it actually costs here, so the trade-off is concrete”)
- File: `career-counselling-benefits-comparison-actually-costs-here-trade.webp` · 1600×1000 WebP under 200 KB
- Teaches: Cost is a fair part of this decision, so here are the real numbers rather than a vague "contact us for…
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: Plan | Price / Row: Student 1-on-1 session | Rs 250 (limited-time… / Row: Student continuous… | Rs 12000 (limited-time… / Row: Working-professional… | Rs 3000 (limited-time…
- Numbers: Cost is a fair part of this decision, so here are the real numbers rather than a vague "contact us for pricing." Plan Price Student 1-on-1 session Rs 250 (limited-time price, down from Rs 3000) Student continuous guidance (year, includes the 1-on-1 plus up to 
- Alt: Comparison table for “What it actually costs here, so the trade-off is…”: Plan | Price; Student 1-on-1 session | Rs 250…; Student continuous… | Rs 12000…
- Title attribute: What it actually costs here, so the trade-off is concrete
- Caption (and keep the same point in HTML text): Cost is a fair part of this decision, so here are the real numbers rather than a vague "contact us for pricing." Plan Price Student 1-on-1…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-class-10-students/

**H1:** Career counselling for Class 10 students before a rushed stream choice costs you years  
**Type:** bofu · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 97% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-student-parent-map.webp` | 97% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-school-students-parents.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-class-10-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career counselling for Class 10 students who are choosing between Science…
- On-image text (about 25-40 words, shortened from the page; no new claims): What the Class 10 stream decision actually involves / How this is different from career guidance after 12th / Why the stream decision needs sharper reasoning than a marks-based… / What career counselling for Class 10 students should actually clarify / What to check before paying for Class 10 career counselling
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for Class 10…”: What the Class 10 stream decision…; How this is different from…
- Title attribute: At a glance: Career counselling for Class 10 students before a rushed…
- Caption (and keep the same point in HTML text): Future Career School offers career counselling for Class 10 students who are choosing between Science, Commerce, and Arts before 11th.
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “How this is different from career guidance after 12th”)
- File: `career-counselling-for-class-10-students-asymmetrical-different-career-guidance-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: Class 10 and Class 12 look like similar decision points from the outside.
- On-image text (about 25-40 words, shortened from the page; no new claims): After 12th, the decision is a course or college / At Class 10, the decision is a subject direction, not a career / Class 10 board marks are a weak proxy for stream fit / Parents carry more of the decision weight at this stage
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this is different from career guidance after…”: After 12th, the decision is a…; At Class 10, the decision is a……
- Title attribute: How this is different from career guidance after 12th
- Caption (and keep the same point in HTML text): Class 10 and Class 12 look like similar decision points from the outside.
**V3 — Decision tree** (place after the section “What career counselling for Class 10 students should actually clarify”)
- File: `career-counselling-for-class-10-students-decision-career-counselling-class-students.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Separate genuine strength from exam performance A student can score well in a subject and still be a weak…
- On-image text (about 25-40 words, shortened from the page; no new claims): Separate genuine strength from exam performance / Pressure-test the "Science keeps all doors open" argument / Give the stream decision a skill-building answer, not just a subject… / Make the reasoning something both student and parent can defend
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career counselling for Class 10 students…”: Separate genuine strength from…; Pressure-test the "Science keeps…; Give the stream…
- Title attribute: What career counselling for Class 10 students should actually clarify
- Caption (and keep the same point in HTML text): 01 Separate genuine strength from exam performance A student can score well in a subject and still be a weak long-term fit for the stream…
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for Class 10 Students”)
- File: `career-counselling-for-class-10-students-linear-career-counselling-plans-class.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for Class 10 Students”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for Class 10 Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-parents/

**H1:** Career counselling for parents who want their child on the right skill path early  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 97% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-student-parent-map.webp` | 97% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-school-students-parents.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-parents-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career counselling for parents who are ready to book but still weighing the…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career counselling for parents becomes the right move / How this works when a parent is the one booking / Why this needs more than a reassuring conversation / What to check before paying for career counselling for your child / What parents actually want to know before booking
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for parents who…”: When career counselling for…; How this works when a parent is……
- Title attribute: At a glance: Career counselling for parents who want their child on…
- Caption (and keep the same point in HTML text): Future Career School offers career counselling for parents who are ready to book but still weighing the questions that matter most from…
**V2 — Chronological timeline** (place after the section “When career counselling for parents becomes the right move”)
- File: `career-counselling-for-parents-chronological-career-counselling-parents-becomes.webp` · 1600×1000 WebP under 200 KB
- Teaches: This usually matters most when you are the one carrying the decision - researching, comparing, and deciding…
- On-image text (about 25-40 words, shortened from the page; no new claims): You are the one researching, not your child / You and your child see the decision differently / A one-off session already happened and did not stick / You need to be able to explain this to your spouse or family
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career counselling for parents becomes the…”: You are the one researching, not…; You and your child see the…; A one-off…
- Title attribute: When career counselling for parents becomes the right move
- Caption (and keep the same point in HTML text): This usually matters most when you are the one carrying the decision - researching, comparing, and deciding when to act - while your child…
**V3 — Chronological timeline** (place after the section “How this works when a parent is the one booking”)
- File: `career-counselling-for-parents-chronological-works-parent-one-booking.webp` · 1600×1000 WebP under 200 KB
- Teaches: The session is for your child, but you are not left out of the process or guessing what happened in the room.
- On-image text (about 25-40 words, shortened from the page; no new claims): The first 1-on-1 is with your child / You get a next step you can both explain / Ongoing guidance keeps the decision from drifting again
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “How this works when a parent is the one booking”: The first 1-on-1 is with your…; You get a next step you can both…; Ongoing…
- Title attribute: How this works when a parent is the one booking
- Caption (and keep the same point in HTML text): The session is for your child, but you are not left out of the process or guessing what happened in the room.
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for Your Child”)
- File: `career-counselling-for-parents-linear-career-counselling-plans-child.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for Your Child”: Student Career Counselling; Students Student path Student…; Limited-time student…
- Title attribute: Career Counselling Plans for Your Child
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-school-students/

**H1:** Career counselling for school students that starts by naming the real decision, not the grade alone  
**Type:** bofu · **Search priority:** P3 (0 clicks, 9 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 97% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-student-parent-map.webp` | 97% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-school-students-parents.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-school-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career counselling for school students from class 8 through 12 — whether the…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career counselling for school students is the right starting… / Name the real school-stage decision before it turns into rushed… / What career counselling for school students should actually give you / What to check before booking career counselling for a school student / Why a grade-matched session beats a one-size-fits-all school-years…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for school…”: When career counselling for…; Name the real school-stage…; What…
- Title attribute: At a glance: Career counselling for school students that starts by…
- Caption (and keep the same point in HTML text): Future Career School offers career counselling for school students from class 8 through 12 — whether the pressure is early stream anxiety…
**V2 — Chronological timeline** (place after the section “When career counselling for school students is the right starting…”)
- File: `career-counselling-for-school-students-chronological-career-counselling-school-students.webp` · 1600×1000 WebP under 200 KB
- Teaches: This fits best when the pressure is real but has not yet been sorted into one specific grade-level decision —…
- On-image text (about 25-40 words, shortened from the page; no new claims): The pressure has not been named yet / Two children, two grades, one household / The school counsellor is stretched across every grade / A first conversation before a specific decision hardens
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career counselling for school students is…”: The pressure has not been named…; Two children, two grades, one…; The school…
- Title attribute: When career counselling for school students is the right starting…
- Caption (and keep the same point in HTML text): This fits best when the pressure is real but has not yet been sorted into one specific grade-level decision — early enough that the right…
**V3 — Decision tree** (place after the section “What career counselling for school students should actually give you”)
- File: `career-counselling-for-school-students-decision-career-counselling-school-students.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 The real decision named correctly The session starts by identifying which school-stage decision this…
- On-image text (about 25-40 words, shortened from the page; no new claims): The real decision named correctly / A skill floor started early, not delayed / Reasoning both the student and parent can hold onto / A clear next move, sized to the grade
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career counselling for school students…”: The real decision named correctly; A skill floor started early, not…; Reasoning both the…
- Title attribute: What career counselling for school students should actually give you
- Caption (and keep the same point in HTML text): 01 The real decision named correctly The session starts by identifying which school-stage decision this actually is — early direction…
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for School Students”)
- File: `career-counselling-for-school-students-linear-career-counselling-plans-school.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for School Students”: Student Career Counselling; Students Student path Student…; Limited-time…
- Title attribute: Career Counselling Plans for School Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-for-students/

**H1:** Career counselling for students built to resolve one decision, not just discuss direction  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 93% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 94% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 95% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 97% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-student-parent-map.webp` | 97% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-school-students-parents.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-for-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career counselling for students who already know the exact choice they are stuck…
- On-image text (about 25-40 words, shortened from the page; no new claims): When career counselling for students is exactly what you need / What career counselling for students should actually give you / What to check before booking career counselling for students / Generic career advice versus counselling built to resolve your… / Career Counselling Plans for Students
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling for students…”: When career counselling for…; What career counselling for…; What to…
- Title attribute: At a glance: Career counselling for students built to resolve one…
- Caption (and keep the same point in HTML text): Future Career School offers career counselling for students who already know the exact choice they are stuck on — Science or Commerce, two…
**V2 — Chronological timeline** (place after the section “When career counselling for students is exactly what you need”)
- File: `career-counselling-for-students-chronological-career-counselling-students-exactly.webp` · 1600×1000 WebP under 200 KB
- Teaches: This is built for a specific decision already in front of you — not a general check-in about the future.
- On-image text (about 25-40 words, shortened from the page; no new claims): Stuck between two specific streams / Torn between similar-sounding courses / Parents and you want different specific answers / A deadline is already forcing the issue
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Chronological timeline for “When career counselling for students is exactly…”: Stuck between two specific streams; Torn between similar-sounding…; Parents and…
- Title attribute: When career counselling for students is exactly what you need
- Caption (and keep the same point in HTML text): This is built for a specific decision already in front of you — not a general check-in about the future.
**V3 — Decision tree by situation** (place after the section “What career counselling for students should actually give you”)
- File: `career-counselling-for-students-decision-career-counselling-students-should.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 A specific recommendation, not more options The session should narrow your actual two or three choices…
- On-image text (about 25-40 words, shortened from the page; no new claims): A specific recommendation, not more options / Reasoning you can repeat to your parents / A skill plan attached to the choice, not just a label / A next step, not homework
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree by situation for “What career counselling for students should…”: A specific recommendation, not…; Reasoning you can repeat to your…; A skill plan…
- Title attribute: What career counselling for students should actually give you
- Caption (and keep the same point in HTML text): 01 A specific recommendation, not more options The session should narrow your actual two or three choices down to one clear direction with…
**V4 — Linear process chain or roadmap** (place after the section “Career Counselling Plans for Students”)
- File: `career-counselling-for-students-linear-career-counselling-plans-students.webp` · 1600×1000 WebP under 200 KB
- Teaches: Students Student path Student Career Counselling Practical student career counselling before the wrong path…
- On-image text (about 25-40 words, shortened from the page; no new claims): Student Career Counselling / Students Student path Student Career Counselling Practical student career… / Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A… / Book 1-on-1 Online across India Avoid Wrong streams, outdated degrees, and…
- Numbers: Limited-time student offer ₹3000 ₹250 for the first 1-on-1 session A low-friction first step before the wrong path costs more time and money. | Continuous career guidance Limited-time annual price ₹29000 ₹12000 Includes the 1-on-1 and up to 24 small-group sessions across the year.
- Alt: Linear process chain or roadmap for “Career Counselling Plans for Students”: Student Career Counselling; Students Student path Student…; Limited-time student…
- Title attribute: Career Counselling Plans for Students
- Caption (and keep the same point in HTML text): Students Student path Student Career Counselling Practical student career counselling before the wrong path wastes years, money, and future…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-in-delhi-after-10th/

**H1:** Career counselling in Delhi after 10th before the coaching batch fills up for you  
**Type:** bofu · **Search priority:** P3 (0 clicks, 6 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 97% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-student-parent-map.webp` | 97% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-school-students-parents.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-delhi-after-10th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career counselling in Delhi after 10th for students and parents who now have the…
- On-image text (about 25-40 words, shortened from the page; no new claims): What the after-10th decision actually involves in Delhi / How this differs from the national after-10th page and Delhi's own… / Why this decision needs sharper reasoning than Delhi's own default / What career counselling in Delhi after 10th should actually clarify / What to check before paying for career counselling in Delhi after 10th
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Delhi after…”: What the after-10th decision…; How this differs from the…; Why…
- Title attribute: At a glance: Career counselling in Delhi after 10th before the…
- Caption (and keep the same point in HTML text): Future Career School offers career counselling in Delhi after 10th for students and parents who now have the result in hand and have to…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “How this differs from the national after-10th page and Delhi's own…”)
- File: `career-counselling-in-delhi-after-10th-asymmetrical-differs-national-after-10th.webp` · 1600×1000 WebP under 200 KB
- Teaches: This decision sits at the intersection of two other pages on this site, but it is not quite the same…
- On-image text (about 25-40 words, shortened from the page; no new claims): This is not the same conversation as the national after-10th page / It is also not the same as Delhi's own broader counselling page / Delhi University's cutoff culture reaches down to this decision early / Parents and students are both deciding under Delhi-specific time…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this differs from the national after-10th…”: This is not the same conversation…; It is also not the same as……
- Title attribute: How this differs from the national after-10th page and Delhi's own…
- Caption (and keep the same point in HTML text): This decision sits at the intersection of two other pages on this site, but it is not quite the same conversation as either.
**V3 — Decision tree** (place after the section “What career counselling in Delhi after 10th should actually clarify”)
- File: `career-counselling-in-delhi-after-10th-decision-career-counselling-delhi-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Separate genuine fit from the local coaching-culture default A surprising board result or a friend already…
- On-image text (about 25-40 words, shortened from the page; no new claims): Separate genuine fit from the local coaching-culture default / Pressure-test the "keep the DU door open" instinct / Give diploma and vocational routes a fair, non-default hearing / Connect whichever path is chosen to a skill-building answer
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career counselling in Delhi after 10th…”: Separate genuine fit from the…; Pressure-test the "keep the DU…; Give diploma and vocational…
- Title attribute: What career counselling in Delhi after 10th should actually clarify
- Caption (and keep the same point in HTML text): 01 Separate genuine fit from the local coaching-culture default A surprising board result or a friend already enrolled in a coaching batch…
**V4 — Linear process chain or roadmap** (place after the section “Decide 11th, coaching, or a vocational route with real reasoning…”)
- File: `career-counselling-in-delhi-after-10th-linear-decide-11th-coaching-vocational.webp` · 1600×1000 WebP under 200 KB
- Teaches: Use career counselling in Delhi after 10th if the result is in and 11th, an early coaching commitment, and a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Use career counselling in Delhi after 10th if the result is in and 11th, an… / The right path, chosen for fit, is what starts the skill portfolio that leads… / Get Career Counselling After 10th for Students ❓ FAQ
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Decide 11th, coaching, or a vocational route with…”: Use career counselling in Delhi…; The right path, chosen for fit……
- Title attribute: Decide 11th, coaching, or a vocational route with real reasoning…
- Caption (and keep the same point in HTML text): Use career counselling in Delhi after 10th if the result is in and 11th, an early coaching commitment, and a vocational route all feel like…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-counselling-in-mumbai-after-10th/

**H1:** Career counselling in Mumbai after 10th before the FYJC round decides for you  
**Type:** bofu · **Search priority:** P3 (0 clicks, 4 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 97% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-student-parent-map.webp` | 97% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-school-students-parents.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-counselling-in-mumbai-after-10th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career counselling in Mumbai after 10th for students and parents who now have the…
- On-image text (about 25-40 words, shortened from the page; no new claims): What the after-10th decision actually involves in Mumbai / How this differs from the national after-10th page and Mumbai's own… / Why this decision needs sharper reasoning than Mumbai's own default / What career counselling in Mumbai after 10th should actually clarify / What to check before paying for career counselling in Mumbai after…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career counselling in Mumbai after…”: What the after-10th decision…; How this differs from the…; Why…
- Title attribute: At a glance: Career counselling in Mumbai after 10th before the FYJC…
- Caption (and keep the same point in HTML text): Future Career School offers career counselling in Mumbai after 10th for students and parents who now have the result in hand and have to…
**V2 — Asymmetrical pros-and-cons comparison** (place after the section “How this differs from the national after-10th page and Mumbai's own…”)
- File: `career-counselling-in-mumbai-after-10th-asymmetrical-differs-national-after-10th.webp` · 1600×1000 WebP under 200 KB
- Teaches: This decision sits at the intersection of two other pages on this site, but it is not quite the same…
- On-image text (about 25-40 words, shortened from the page; no new claims): This is not the same conversation as the national after-10th page / It is also not the same as Mumbai's own broader counselling page / FYJC's round-wise cutoffs reach down to this decision early / Parents and students are both deciding under Mumbai-specific time…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Asymmetrical pros-and-cons comparison for “How this differs from the national after-10th…”: This is not the same conversation…; It is also not the same as……
- Title attribute: How this differs from the national after-10th page and Mumbai's own…
- Caption (and keep the same point in HTML text): This decision sits at the intersection of two other pages on this site, but it is not quite the same conversation as either.
**V3 — Decision tree** (place after the section “What career counselling in Mumbai after 10th should actually clarify”)
- File: `career-counselling-in-mumbai-after-10th-decision-career-counselling-mumbai-after.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 Separate genuine fit from chasing whichever FYJC cutoff clears first A cutoff that happens to clear in an…
- On-image text (about 25-40 words, shortened from the page; no new claims): Separate genuine fit from chasing whichever FYJC cutoff clears first / Pressure-test the "chase the best-ranked FYJC college" instinct / Give diploma and vocational routes a fair, non-default hearing / Connect whichever path is chosen to a skill-building answer
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Decision tree for “What career counselling in Mumbai after 10th…”: Separate genuine fit from chasing…; Pressure-test the "chase the…; Give diploma and…
- Title attribute: What career counselling in Mumbai after 10th should actually clarify
- Caption (and keep the same point in HTML text): 01 Separate genuine fit from chasing whichever FYJC cutoff clears first A cutoff that happens to clear in an early round should not be the…
**V4 — Linear process chain or roadmap** (place after the section “Decide 11th, coaching, or a vocational route with real reasoning…”)
- File: `career-counselling-in-mumbai-after-10th-linear-decide-11th-coaching-vocational.webp` · 1600×1000 WebP under 200 KB
- Teaches: Use career counselling in Mumbai after 10th if the result is in and 11th, an early coaching commitment, and a…
- On-image text (about 25-40 words, shortened from the page; no new claims): Use career counselling in Mumbai after 10th if the result is in and 11th, an… / The right path, chosen for fit, is what starts the skill portfolio that leads… / Get Career Counselling After 10th for Students ❓ FAQ
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Decide 11th, coaching, or a vocational route with…”: Use career counselling in Mumbai…; The right path, chosen for fit……
- Title attribute: Decide 11th, coaching, or a vocational route with real reasoning…
- Caption (and keep the same point in HTML text): Use career counselling in Mumbai after 10th if the result is in and 11th, an early coaching commitment, and a vocational route all feel…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-after-10th/

**H1:** Career guidance after 10th that starts from the work you want, not the stream form  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 98% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 96% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 96% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 97% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 98% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-student-parent-map.webp` | 98% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-school-students-parents.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-after-10th-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career guidance after 10th for students and parents who want a direction they can…
- On-image text (about 25-40 words, shortened from the page; no new claims): The questions Class 10 households actually ask / Six beliefs to check before any form is filled / How career guidance after 10th moves from confusion to a route / What a Class 10 result looks like in numbers / What each route hands over, and what comes next
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance after 10th that…”: The questions Class 10 households…; Six beliefs to check before…
- Title attribute: At a glance: Career guidance after 10th that starts from the work you…
- Caption (and keep the same point in HTML text): Future Career School offers career guidance after 10th for students and parents who want a direction they can defend, not just a Science…
**V2 — Comparison table** (place after the section “Six beliefs to check before any form is filled”)
- File: `career-guidance-after-10th-comparison-six-beliefs-check-before.webp` · 1600×1000 WebP under 200 KB
- Teaches: Each of these is repeated in family chats and coaching pitches.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: What you hear | What holds up | Check this first / Row: Science keeps every door… | It keeps engineering… | Test honest interest in… / Row: Basic Maths in Class 10… | CBSE has relaxed this… | Ask the school for the… / Row: Foundation coaching from… | The Ministry of… | Check the school… / Row: Diploma and ITI are for… | They are structured… | Compare the branch or… / Row: The stream decides your… | Skills move faster than… | Ask which skills you will…
- Numbers: CBSE's August 2025 circular says a minimum of 75% attendance is mandatory for board exams, and students absent without proper leave records can be treated as non-attending ("dummy") candidates and barred. | The World Economic Forum's Future of Jobs 2025 report expects about two-fifths (39%) of existing skill sets to be transformed or become outdated between 2025 and 2030, with AI and big data, technology literacy, creative thinking and resilience among the fastes
- Alt: Comparison table for “Six beliefs to check before any form is filled”: What you hear | What holds up |…; Science keeps every door… | It…; Basic Maths in Class…
- Title attribute: Six beliefs to check before any form is filled
- Caption (and keep the same point in HTML text): Each of these is repeated in family chats and coaching pitches.
**V3 — Comparison table** (place after the section “What a Class 10 result looks like in numbers”)
- File: `career-guidance-after-10th-comparison-class-result-looks-like.webp` · 1600×1000 WebP under 200 KB
- Teaches: Four figures from 2026 that put a score and a route in proportion before the skill direction is chosen.
- On-image text (about 25-40 words, shortened from the page; no new claims): Columns: The figure | The arithmetic | What to do with it / Row: CBSE Class 10, 2026… | 24,71,777 minus 23,16,008… | A result is a checkpoint.… / Row: Over 2.20 lakh scored… | 2,20,000 divided by… | Roughly nine in ten… / Row: AP POLYCET 2026, as… | 1,63,008 divided by… | Polytechnic admission… / Row: DGT homepage: 13,888 ITIs… | Institutions and… | ITI and apprenticeship…
- Numbers: The figure The arithmetic What to do with it CBSE Class 10, 2026: 24,71,777 appeared and 23,16,008 passed (93.70%) 24,71,777 minus 23,16,008 = 1,55,769 students, about 6.3%, who did not clear the first exam. | Over 2.20 lakh scored above 90%; over 55,000 scored above 95% 2,20,000 divided by 23,16,008 is about 9.5% of passers. | 55,000 divided by 23,16,008 is about 2.4%.
- Alt: Comparison table for “What a Class 10 result looks like in numbers”: The figure | The arithmetic |…; CBSE Class 10, 2026… | 24,71,777…; Over 2.20 lakh scored……
- Title attribute: What a Class 10 result looks like in numbers
- Caption (and keep the same point in HTML text): Four figures from 2026 that put a score and a route in proportion before the skill direction is chosen.
**V4 — Linear process chain or roadmap** (place after the section “What a Class 10 student can build alongside any stream”)
- File: `career-guidance-after-10th-linear-class-student-build-alongside.webp` · 1600×1000 WebP under 200 KB
- Teaches: Skills change faster than streams: the World Economic Forum expects about two-fifths of existing skill sets…
- On-image text (about 25-40 words, shortened from the page; no new claims): Typing, documents, slides, spreadsheets, safe AI use / Short, regular practice beats occasional long bursts / A small project, completed and shown / One conversation with someone who does the work / Proof: one spreadsheet chart on a topic they care about, with two lines on what it shows / Proof: a one-minute voice note explaining a school project simply / Proof: something another person can open, read or watch
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “What a Class 10 student can build alongside any…”: Typing, documents, slides…; Short, regular practice beats…; A small…
- Title attribute: What a Class 10 student can build alongside any stream
- Caption (and keep the same point in HTML text): Skills change faster than streams: the World Economic Forum expects about two-fifths of existing skill sets to be transformed or outdated…
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-for-confused-students/

**H1:** Career guidance for confused students and one clear next step toward earlier financial freedom  
**Type:** bofu · **Search priority:** P3 (0 clicks, 11 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-student-parent-map.webp` has no title attribute and no caption.
7. Context visual reuse: `context-student-parent-map.webp` appears on 15 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 97% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-student-parent-map.webp` | 97% | lazy | A student and parent career decision map from… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-school-students-parents.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-for-confused-students-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: Future Career School offers career guidance for confused students who are stuck between too many options…
- On-image text (about 25-40 words, shortened from the page; no new claims): What being 'confused' about your career actually looks like / This kind of confusion shows up at more than one point - not only… / Why option overload needs a decision process, not just more input / The doubts that keep confused students stuck longer than they need to… / What to check before paying for guidance when you're this confused
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance for confused…”: What being 'confused' about your…; This kind of confusion shows up……
- Title attribute: At a glance: Career guidance for confused students and one clear next…
- Caption (and keep the same point in HTML text): Future Career School offers career guidance for confused students who are stuck between too many options, conflicting advice from parents…
**V2 — Framework cards** (place after the section “What being 'confused' about your career actually looks like”)
- File: `career-guidance-for-confused-students-framework-being-confused-about-career.webp` · 1600×1000 WebP under 200 KB
- Teaches: Confusion rarely means having no options - it usually means having too many, with no reliable way to filter…
- On-image text (about 25-40 words, shortened from the page; no new claims): Too many options colliding at once / Advice that contradicts itself / Fear of picking the "wrong" one / No track record yet to trust your own judgment
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Framework cards for “What being 'confused' about your career actually…”: Too many options colliding at once; Advice that contradicts itself; Fear of picking…
- Title attribute: What being 'confused' about your career actually looks like
- Caption (and keep the same point in HTML text): Confusion rarely means having no options - it usually means having too many, with no reliable way to filter them.
**V3 — Linear process chain or roadmap** (place after the section “Why option overload needs a decision process, not just more input”)
- File: `career-guidance-for-confused-students-linear-option-overload-needs-decision.webp` · 1600×1000 WebP under 200 KB
- Teaches: Adding another opinion rarely helps once the real problem is too many opinions already.
- On-image text (about 25-40 words, shortened from the page; no new claims): Adding another opinion rarely helps once the real problem is too many opinions… / These are the contrast points that matter once a decision actually has to get… / Others Shift Future Career School Others Too many options and no way to rank…
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Why option overload needs a decision process, not…”: Adding another opinion rarely…; These are the contrast points……
- Title attribute: Why option overload needs a decision process, not just more input
- Caption (and keep the same point in HTML text): Adding another opinion rarely helps once the real problem is too many opinions already.
**V4 — Self-assessment checklist** (place after the section “Common questions before starting”)
- File: `career-guidance-for-confused-students-self-common-questions-before-starting.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 What does career guidance for confused students actually help with?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 What does career guidance for confused students actually help with? / It helps you separate the real decision from the noise around it - too many… / 02 I'm not sure if I'm actually confused or just avoiding the decision - how do…
- Numbers: 04 What if I get guidance and I am still not 100% sure afterward?
- Alt: Self-assessment checklist for “Common questions before starting”: 01 What does career guidance for…; It helps you separate the real…; 02 I'm not sure if I'm…
- Title attribute: Common questions before starting
- Caption (and keep the same point in HTML text): 01 What does career guidance for confused students actually help with?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---

### /services/career-counselling-and-career-guidance/career-guidance-for-low-board-scores/

**H1:** Career guidance for a low board score and a clearer route to earlier financial freedom  
**Type:** bofu · **Search priority:** P3 (0 clicks, 0 impressions) · **Rendered images:** 5 (3 generic category, 1 hero, 1 context, 0 SVG)
**Status: RED**

**Findings**
1. BROKEN IMAGE: `/images/blog/category/career-counselling-and-career-guidance-at-a-glance.webp` does not exist in `public/` (HTTP 404). The page renders a broken image.
2. 3 generic blog-category images are injected on this service page: `career-guidance-editorial-cover.webp`, `career-guidance-editorial-support.webp`, `career-counselling-and-career-guidance-at-a-glance.webp`. They are the same three files on every service and assessment page (alt “Career decision notes and realistic options arranged on a desk”, caption “Good career guidance makes trade-offs visible…”). They are not about this keyword.
3. Hero `hero-school-students-parents.webp` is shared by 13 pages. Fine as a fallback, but it is excessive reuse for a page that has its own keyword.
4. Hero `hero-school-students-parents.webp` has no title attribute and no caption.
5. Hero is `fetchpriority=high` but is rendered at 97% of the raw HTML (after the content); it is moved by JavaScript.
6. Context visual `context-exam-pressure.webp` has no title attribute and no caption.
7. Context visual reuse: `context-exam-pressure.webp` appears on 2 pages.
8. All service images are appended after the page content and moved into `<main>` by an inline script in `BaseLayout.astro`; without JavaScript (crawlers, link previews) they stay at the bottom.

**Current images**
| File | Position | Loading | Alt | Title | Caption |
|---|---|---|---|---|---|
| `blog/category/career-guidance-editorial-cover.webp` | 94% | lazy | Career decision notes and realistic options… | yes | yes |
| `blog/category/career-guidance-editorial-support.webp` | 95% | lazy | Compass surrounded by career decision cards for… | yes | yes |
| `blog/category/career-counselling-and-career-guidance-at-a-glance.webp` | 96% | lazy | At a glance: Career decision notes and realistic… | yes | yes |
| `bofu/hero-school-students-parents.webp` | 97% | eager/high | A Class 10 student and a parent comparing stream… | NO | NO |
| `bofu/context-exam-pressure.webp` | 97% | lazy | A career setback visual showing attempts, time… | NO | NO |

**Required actions**
1. REMOVE the three generic images and stop `BlogFallbackVisual` rendering on `/services/` routes.
2. KEEP hero `hero-school-students-parents.webp`; add title attribute and caption.
3. CREATE 4 explanatory visuals from this page's own content (no new claims):
**V1 — At-a-glance summary card for this page** (directly under the hero, before the first section)
- File: `career-guidance-for-low-board-scores-at-a-glance-summary.webp` · 1600×1000 WebP under 200 KB
- Teaches: A low board score closes a few specific doors - it does not close the door to further study, a stable role…
- On-image text (about 25-40 words, shortened from the page; no new claims): What a low board score actually blocks - and what it does not / Three real routes, depending on your exact result / Why this needs sharper guidance than a general pep talk / Having the family conversation without it turning into a bigger fight / Mistakes that make a low score cost more than it should
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: At-a-glance summary card for this page for “At a glance: Career guidance for a low board…”: What a low board score actually…; Three real routes, depending on……
- Title attribute: At a glance: Career guidance for a low board score and a clearer…
- Caption (and keep the same point in HTML text): A low board score closes a few specific doors - it does not close the door to further study, a stable role, or achieving earlier financial…
**V2 — Linear process chain or roadmap** (place after the section “Three real routes, depending on your exact result”)
- File: `career-guidance-for-low-board-scores-linear-three-real-routes-depending.webp` · 1600×1000 WebP under 200 KB
- Teaches: Whether you failed one subject, several, or passed with a percentage that feels too low - a specific route…
- On-image text (about 25-40 words, shortened from the page; no new claims): Fix the result directly / Reroute forward without a redo / Build a skill lane in parallel
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Linear process chain or roadmap for “Three real routes, depending on your exact result”: Fix the result directly; Reroute forward without a redo; Build a skill…
- Title attribute: Three real routes, depending on your exact result
- Caption (and keep the same point in HTML text): Whether you failed one subject, several, or passed with a percentage that feels too low - a specific route exists.
**V3 — Mistakes versus smarter move panel** (place after the section “Mistakes that make a low score cost more than it should”)
- File: `career-guidance-for-low-board-scores-mistakes-mistakes-make-low-score.webp` · 1600×1000 WebP under 200 KB
- Teaches: Most of the real damage after a low result does not come from the marks themselves - it comes from decisions…
- On-image text (about 25-40 words, shortened from the page; no new claims): Treating a compartment or repeat year as a wasted year / Ruling out a path without checking the real eligibility line / Locking into an expensive decision out of panic
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that make a low score cost more than it…”: Treating a compartment or repeat…; Ruling out a path without……
- Title attribute: Mistakes that make a low score cost more than it should
- Caption (and keep the same point in HTML text): Most of the real damage after a low result does not come from the marks themselves - it comes from decisions made in the days right after…
**V4 — Self-assessment checklist** (place after the section “Common questions before starting”)
- File: `career-guidance-for-low-board-scores-self-common-questions-before-starting.webp` · 1600×1000 WebP under 200 KB
- Teaches: 01 What should career guidance for a low board score actually help with?
- On-image text (about 25-40 words, shortened from the page; no new claims): 01 What should career guidance for a low board score actually help with? / It should help you separate the specific, narrow effect of the result from the… / 02 Does a low board score close off strong career options?
- Numbers: none in this section, so do not put any number, price, percentage or claim on the image
- Alt: Self-assessment checklist for “Common questions before starting”: 01 What should career guidance…; It should help you separate the…; 02 Does a low board score…
- Title attribute: Common questions before starting
- Caption (and keep the same point in HTML text): 01 What should career guidance for a low board score actually help with?
4. FIX attributes on every kept image: descriptive alt (what is visible and why), title attribute, figcaption where it teaches, exact width/height, lazy loading below the fold, one eager hero only.
5. Mobile check at 390px: no horizontal overflow, readable image text, captions wrap.

---
