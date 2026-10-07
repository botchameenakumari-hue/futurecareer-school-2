# Image audit — blog category: career-change

14 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/career-change/career-change-after-5-years-india/

**H1:** Career change after 5 years India: the inflection point nobody warns you about  
**Category:** career-change · **Words:** 3420 · **H2 sections:** 9 · **Search priority:** P2 (2 clicks, 66 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/career-change/career-change-after-5-years-india/career-change-after-5-years-india-cover-social.jpg

**Findings**
1. 5 authored images on the page (hero + 4 supporting).
2. The hero (cover-social) is a cropped fragment of an infographic showing part of two lanes, not a natural hero. Replace.
3. Supporting infographics are strong and readable.
4. 5 of 5 images have no title attribute.
5. 1 images have width/height attributes that do not match the real file ratio (e.g. `career-change-after-5-years-india-cover-social.jpg` attr 1122x1402 vs file 1200x675); this reserves the wrong space and can cause layout shift.
6. 1 images are over 250 KB: `career-change-golden-handcuffs.webp` (261 KB)

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-change/career-change-after-5-years-india/career-change-after-5-years-india-cover-social.jpg` | 1200x675 | 1122x1402 | eager | 18% | width/height attributes do not match the file; no title attr |
| `career-change/career-change-after-5-years-india/career-change-year-5-trap.webp` | 1122x1402 | 1122x1402 | lazy | 33% | no title attr |
| `career-change/career-change-after-5-years-india/career-change-golden-handcuffs.webp` | 1122x1402 | 1122x1402 | lazy | 38% | no title attr; 261 KB |
| `career-change/career-change-after-5-years-india/career-change-job-hopping-reset.webp` | 1122x1402 | 1122x1402 | lazy | 44% | no title attr |
| `career-change/career-change-after-5-years-india/career-change-three-signal-reset.webp` | 1200x675 | 1200x675 | lazy | 54% | no title attr |

**Required actions**
1. CREATE hero:
- Reason: current hero is cropped or missing
- File: `career-change-after-5-years-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `career-change-after-5-years-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a working professional after office hours, a home desk near a window in the evening. Props that belong to “Career change after 5 years India: the inflection point nobody warns you about”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Career change after 5 years India: the inflection point nobody warns…
- Caption: one sentence tying the scene to the article's decision.
2. CREATE 1 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `career-change-after-5-years-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Career change after 5 years India hits a real structural moment — too senior for entry roles, not senior…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why year 5 is a real inflection point, not just a feeling / The "too senior for fresher roles, not senior enough to lead" trap / The golden handcuffs effect: when the money is the only reason to stay / When a lateral move stops being "job-hopping" and becomes a reset / The 3-Signal Reset Check before you commit
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Career change after 5 years India: the inflection point nobody warns…”
- Title attribute: At a glance: Career change after 5 years India: the inflection point…
- Caption (also keep the key point in the HTML text): Career change after 5 years India hits a real structural moment — too senior for entry roles, not senior enough to lead.
3. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
4. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/career-switch-from-it-to-management-india/

**H1:** Career switch from IT to management India: the real map, not the MBA-only pitch  
**Category:** career-change · **Words:** 5333 · **H2 sections:** 13 · **Search priority:** P2 (1 clicks, 29 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Career switch from IT to management India: the real map…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-change/career-switch-from-it-to-management-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Why this switch is on…”, “Your…”, “Does age change the…”, “Mistakes that waste a…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. 6 authored images on the page (hero + 5 supporting).
6. Five supporting images are the same flat-lay of paper cards with single labels (lanes, MBA/proof/context, protocol, skill stack, internal pitch).
7. Convert to text-led visuals: IT-to-management route comparison, MBA vs internal move table, skill-stack ladder, internal pitch checklist.
8. Supporting visuals are mostly scenes/flat-lays with one-word labels. They do not meet “non-hero visuals must primarily explain”.
9. 6 images have width/height attributes that do not match the real file ratio (e.g. `career-switch-from-it-to-management-india-cover.webp` attr 1600x1000 vs file 1600x800); this reserves the wrong space and can cause layout shift.
10. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `career-switch-from-it-to-management-india-protocol.webp`: 220. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-change/career-switch-from-it-to-management-india/career-switch-from-it-to-management-india-cover.webp` | 1600x800 | 1600x1000 | eager | 14% | width/height attributes do not match the file |
| `career-change/career-switch-from-it-to-management-india/career-switch-from-it-to-management-india-lanes.webp` | 1536x1024 | 1600x1000 | lazy | 22% | width/height attributes do not match the file |
| `career-change/career-switch-from-it-to-management-india/career-switch-from-it-to-management-india-mba-choice.webp` | 1536x1024 | 1600x1000 | lazy | 33% | width/height attributes do not match the file |
| `career-change/career-switch-from-it-to-management-india/career-switch-from-it-to-management-india-protocol.webp` | 1536x1024 | 1600x1000 | lazy | 38% | width/height attributes do not match the file |
| `career-change/career-switch-from-it-to-management-india/career-switch-from-it-to-management-india-skill-stack.webp` | 1536x1024 | 1600x1000 | lazy | 42% | width/height attributes do not match the file |
| `career-change/career-switch-from-it-to-management-india/career-switch-from-it-to-management-india-internal-pitch.webp` | 1536x1024 | 1600x1000 | lazy | 51% | width/height attributes do not match the file |

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 92%, 92%, 93%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-change-editorial-cover.webp`, `career-change-context.webp`, `career-change-bridge.webp`, `career-change-mapping.webp`, `career-change-sequence.webp`, `career-change-experiment.webp`, `career-change-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `career-switch-from-it-to-management-india.webp`, `career-switch-from-it-to-management-india-detail.webp`, `career-switch-from-it-to-management-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE 4 supporting visuals (1 to reach the target + 3 to replace low-information images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `career-switch-from-it-to-management-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A career switch from IT to management in India rarely means one clean jump.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why this switch is on so many minds right now / The 4 real lanes from IT to management (not one blurry "switch") / Do you actually need an MBA to switch from IT to management? / The 4-Checkpoint Protocol: run this before you switch anything / The skill stack that actually gets you hired as a manager (not just…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Career switch from IT to management India: the real map, not the…”
- Title attribute: At a glance: Career switch from IT to management India: the real map…
- Caption (also keep the key point in the HTML text): A career switch from IT to management in India rarely means one clean jump.
**V2 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “The money and family conversation nobody prepares you for”)
- File: `career-switch-from-it-to-management-india-stat-money-family-conversation-nobody.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most articles skip this part, and it is usually the real reason a switch stalls: the first 6-18 months of a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Run the runway math before you commit / Bring a plan to the family conversation, not just conviction / Build or confirm an emergency fund covering 3-6 months of full household expenses before… / If you are financing a certification or MBA with a loan, write down the actual monthly… / Separate "I am switching lanes" from "I am also taking on new debt" — doing both at once… / Name the actual target lane and role, not a vague "I want to move into management." / Show the honest timeline: most internal switches take 6-18 months of visible ownership…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Most articles skip this part, and it is usually the real reason a switch stalls: the first 6-18 months of a lane change can mean flat pay, a lateral move, or even a temporary step down, before the new lane starts paying more than the old one did. | Run the runway math before you commit Build or confirm an emergency fund covering 3-6 months of full household expenses before you take a pay cut or an unpaid course/MBA break. | Bring a plan to the family conversation, not just conviction Name the actual target lane and role, not a vague "I want to move into management." Show the honest timeline: most internal switches take 6-18 months of visible ownership before the title or pay actu
- Alt: Stat panel or bar chart (only the numbers listed) for “The money and family conversation nobody prepares you…”: Run the runway math before you commit; Bring a plan…
- Title attribute: The money and family conversation nobody prepares you for
- Caption (also keep the key point in the HTML text): Most articles skip this part, and it is usually the real reason a switch stalls: the first 6-18 months of a lane change can mean flat pay, a lateral…
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Does age change the plan (25 vs 30 vs 35+)?”)
- File: `career-switch-from-it-to-management-india-asymmetrical-age-change-plan.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Yes, meaningfully.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 25-29: cheapest window to test / 30-38: the internal-move window / 39+: still possible, but the pitch has to be sharper / Fewer dependents usually means you can absorb a lateral move or a flat-pay internal… / A CSM, CSPO, or business-analyst move is a low-cost way to test the management-adjacent… / Mistakes here are the cheapest they will ever be — use that window deliberately. / You are often already close to a real management decision at your current employer — this…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Run the money math explicitly: emergency fund of 3-6 months of expenses, plus a clear view of loan repayment against a realistic post-switch salary, before committing fee money.
- Alt: Asymmetrical pros-and-cons comparison for “Does age change the plan (25 vs 30 vs 35+)?”: 25-29: cheapest window to test; 30-38: the internal-move window; 39+: still…
- Title attribute: Does age change the plan (25 vs 30 vs 35+)?
- Caption (also keep the key point in the HTML text): Yes, meaningfully.
**V4 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that waste a year and a lot of money”)
- File: `career-switch-from-it-to-management-india-mistakes-mistakes-waste-year-lot.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Expensive, common mistakes Enrolling in a full-time or expensive executive MBA before testing whether you…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Expensive, common mistakes / What to do instead / Enrolling in a full-time or expensive executive MBA before testing whether you actually… / Collecting PMP, CSM, and CSPO certifications all at once instead of picking the one lane… / Chasing the "Manager" title purely for family or social approval, then discovering you… / Assuming national average product-manager salaries apply to your city, company type, and… / Waiting for a formal promotion instead of building visible proof of leadership now…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that waste a year and a lot of money”: Expensive, common mistakes; What to do instead; Enrolling in a full-time or…
- Title attribute: Mistakes that waste a year and a lot of money
- Caption (also keep the key point in the HTML text): Expensive, common mistakes Enrolling in a full-time or expensive executive MBA before testing whether you actually enjoy people and stakeholder work.
5. Images to replace/remove (lowest information): `career-switch-from-it-to-management-india-lanes.webp`, `career-switch-from-it-to-management-india-mba-choice.webp`, `career-switch-from-it-to-management-india-protocol.webp`.
6. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
7. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/how-to-switch-from-service-company-to-product-company/

**H1:** How to switch from service company to product company: the real roadmap  
**Category:** career-change · **Words:** 3923 · **H2 sections:** 15 · **Search priority:** P2 (0 clicks, 50 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “How to switch from service company to product company: the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-change/how-to-switch-from-service-company-to-product-company*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Why the switch is…”, “The real skill gap, not…”, “When to switch by…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-change-editorial-cover.webp`, `career-change-context.webp`, `career-change-bridge.webp`, `career-change-mapping.webp`, `career-change-sequence.webp`, `career-change-experiment.webp`, `career-change-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `how-to-switch-from-service-company-to-product-company.webp`, `how-to-switch-from-service-company-to-product-company-detail.webp`, `how-to-switch-from-service-company-to-product-company-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `how-to-switch-from-service-company-to-product-company-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `how-to-switch-from-service-company-to-product-company-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a working professional after office hours, a neighbourhood cafe table. Props that belong to “How to switch from service company to product company: the real roadmap”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How to switch from service company to product company: the real…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-to-switch-from-service-company-to-product-company-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to switch from service company to product company: the DSA and system design gap, resume rewrite, timing…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to "how to switch from service company to product… / Why the switch is genuinely harder than it looks from outside / The real skill gap, not the resume gap / When to switch, by experience level / Use The 4-Checkpoint Protocol before you commit months to this switch
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to switch from service company to product company: the real…”
- Title attribute: At a glance: How to switch from service company to product company…
- Caption (also keep the key point in the HTML text): How to switch from service company to product company: the DSA and system design gap, resume rewrite, timing by experience level, and a proof plan…
**V2 — Comparison table** (place after the H2 “The real skill gap, not the resume gap” #gap)
- File: `how-to-switch-from-service-company-to-product-company-comparison-real-skill-gap-resume.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Fix the resume last, not first.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: What matters | Typical… | What product… / Row: Depth of problem-solving | Ticket-based work: fix… | Own a feature end to end… / Row: Data structures &… | Used lightly if at all… | Tested directly in… / Row: System design | Usually absent from daily… | Expected from 2-3 years… / Row: Ownership signal on a… | "Worked on client project… | "Built a service handling… / Row: Code review and… | Client SLAs and process… | Strong review culture…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Expected from 2-3 years experience onward; even freshers may face basic low-level design questions.
- Alt: Comparison table for “The real skill gap, not the resume gap”: What matters | Typical… | What…; Depth of problem-solving |…; Data structures &… | Used lightly if…
- Title attribute: The real skill gap, not the resume gap
- Caption (also keep the key point in the HTML text): Fix the resume last, not first.
**V3 — Comparison table** (place after the H2 “When to switch, by experience level” #timing)
- File: `how-to-switch-from-service-company-to-product-company-comparison-switch-experience-level.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Timing changes the strategy more than most guides admit.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Experience stage | What is actually true… / Row: Fresher, under 6 months in | The easiest window to… / Row: 6 months to 1.5 years | Still a favourable… / Row: 1.5 to 4 years | The hardest stretch.… / Row: 4-10 years | A different door opens…
- Numbers: use ONLY these facts from the article (exact values, no new ones): What works at 6 months does not work the same way at 3 years. | Experience stage What is actually true for you Fresher, under 6 months in The easiest window to move. | 6 months to 1.5 years Still a favourable window.
- Alt: Comparison table for “When to switch, by experience level”: Experience stage | What is actually…; Fresher, under 6 months in | The…; 6 months to 1.5 years | Still a…
- Title attribute: When to switch, by experience level
- Caption (also keep the key point in the HTML text): Timing changes the strategy more than most guides admit.
**V4 — Chronological timeline** (place after the H2 “Use The 4-Checkpoint Protocol before you commit months to this switch” #checkpoint)
- File: `how-to-switch-from-service-company-to-product-company-chronological-use-checkpoint-protocol-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A single salary comparison cannot tell you whether this switch fits your actual life right now.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A single salary comparison cannot tell you whether this switch fits your actual… / The 4-Checkpoint Protocol narrows the decision to what genuinely matters for… / 01 Biology Product-company interview loops run 4-7 rounds across DSA, system…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 02 Context A serious switch usually needs 3-6 months of consistent DSA and system-design preparation on top of a full-time job. | 03 Market The demand is real: India's GCCs alone are projected to cross 5 lakh new jobs in 2026, and product-focused hiring keeps growing even while some services firms trim headcount.
- Alt: Chronological timeline for “Use The 4-Checkpoint Protocol before you commit months…”: A single salary comparison cannot…; The 4-Checkpoint Protocol narrows the…; 01…
- Title attribute: Use The 4-Checkpoint Protocol before you commit months to this switch
- Caption (also keep the key point in the HTML text): A single salary comparison cannot tell you whether this switch fits your actual life right now.
**V5 — Linear process chain or roadmap** (place after the H2 “The preparation plan that actually works” #prep-plan)
- File: `how-to-switch-from-service-company-to-product-company-linear-preparation-plan-actually-works.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most people over-index on volume and under-index on pattern recognition and consistency.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 1 Map the 15-20 core DSA patterns first , then solve 2-3 problems a day tied to a… / 2 Add basic system design early , not after you feel "ready." Even some fresher and… / 3 Ship one real project or open-source contribution that mirrors a production problem… / 4 Rebuild your resume around outcomes , not tasks. Replace vague client-project language… / 5 Use referrals and LinkedIn outreach deliberately , not a blind application flood. A…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A working, deployed, documented project with a clear README explaining the problem and your decisions counts as real proof of work, especially if 70% or more of it reflects your own thinking.
- Alt: Linear process chain or roadmap for “The preparation plan that actually works”: 1 Map the 15-20 core DSA patterns…; 2 Add basic system design early , not…; 3 Ship…
- Title attribute: The preparation plan that actually works
- Caption (also keep the key point in the HTML text): Most people over-index on volume and under-index on pattern recognition and consistency.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/it-to-non-it-career-switch-india/

**H1:** IT to non-IT career switch India: 6 real doors, and what each one actually costs you  
**Category:** career-change · **Words:** 4989 · **H2 sections:** 11 · **Search priority:** P2 (1 clicks, 101 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “IT to non-IT career switch India: 6 real doors, and what…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-change/it-to-non-it-career-switch-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Your…”, “Does age change the…”, “Mistakes that waste a…”, “Source-backed reality…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 92%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-change-editorial-cover.webp`, `career-change-context.webp`, `career-change-bridge.webp`, `career-change-mapping.webp`, `career-change-sequence.webp`, `career-change-experiment.webp`, `career-change-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `it-to-non-it-career-switch-india.webp`, `it-to-non-it-career-switch-india-detail.webp`, `it-to-non-it-career-switch-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `it-to-non-it-career-switch-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `it-to-non-it-career-switch-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a working professional after office hours, a modest office desk after hours. Props that belong to “IT to non-IT career switch India: 6 real doors, and what each one actually…”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: IT to non-IT career switch India: 6 real doors, and what each one…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `it-to-non-it-career-switch-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: An IT to non-IT career switch in India means leaving the tech industry itself, not just moving from coding…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why so many IT professionals are searching this right now / The 6 real doors out of IT (not one blurry "quit and figure it out") / Which IT skills actually transfer to a non-IT career, and which do not / The 4-Checkpoint Protocol: run this before you pick a door / The pay reset: what each door really costs in year one
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “IT to non-IT career switch India: 6 real doors, and what each one…”
- Title attribute: At a glance: IT to non-IT career switch India: 6 real doors, and what…
- Caption (also keep the key point in the HTML text): An IT to non-IT career switch in India means leaving the tech industry itself, not just moving from coding into a tech-adjacent management title.
**V2 — Comparison table** (place after the H2 “Why so many IT professionals are searching this right now”)
- File: `it-to-non-it-career-switch-india-comparison-many-professionals-searching-right.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If you are searching for an IT to non-IT career switch in India, the pressure behind that search is well…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Signal | What it means for… / Row: ~68% of Indian IT… | The exhaustion driving… / Row: 58% of Indian… | Wanting out is common.… / Row: 400,000-500,000… | Waiting indefinitely for… / Row: UPSC CSE 2025: ~958… | Government-exam doors are… / What the data is actually telling you before you decide
- Numbers: use ONLY these facts from the article (exact values, no new ones): A 2025 NASSCOM-Deloitte workforce study found that roughly 68% of IT professionals show at least two clinical burnout indicators — emotional exhaustion, depersonalization, or reduced sense of accomplishment. | Separate industry surveys of verified IT professionals in 2025 found around 72% routinely exceed the legal 48-hour working week, and a similar share feel obliged to answer work messages outside office hours. | What the data is actually telling you before you decide Signal What it means for your decision ~68% of Indian IT professionals show 2+ clinical burnout indicators (NASSCOM-Deloitte, 2025) The exhaustion driving this search is a real, shared industry pattern, n
- Alt: Comparison table for “Why so many IT professionals are searching this right…”: Signal | What it means for…; ~68% of Indian IT… | The exhaustion…; 58% of Indian… |…
- Title attribute: Why so many IT professionals are searching this right now
- Caption (also keep the key point in the HTML text): If you are searching for an IT to non-IT career switch in India, the pressure behind that search is well documented, not imagined.
**V3 — Comparison table** (place after the H2 “The pay reset: what each door really costs in year one”)
- File: `it-to-non-it-career-switch-india-comparison-pay-reset-each-door.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the part most advice skips.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Door | Typical year-one… | What improves it… / Row: Teaching / corporate… | Often a step down… | A relevant master's… / Row: Government exams (banking… | Fixed entry pay scale… | Targeting the specific… / Row: HR & L&D | A modest reset or a… | A documented mentoring… / Row: Consulting | Wide range; entry-level… | A specific, provable… / Row: Entrepreneurship /… | Near-zero or highly… | Starting with one real…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Roughly 58% of Indian professionals aged 35 and above have considered a mid-career change in the last two years, but only about 12% actually make the leap — and an unclear pay reset is one of the most common reasons the rest stay stuck. | Door Typical year-one reality (India) What improves it faster Teaching / corporate training Often a step down initially at a college or coaching institute; corporate trainer and instructional-design roles can be closer to IT pay if you already have delivery ex
- Alt: Comparison table for “The pay reset: what each door really costs in year one”: Door | Typical year-one… | What…; Teaching / corporate… | Often a step…; Government…
- Title attribute: The pay reset: what each door really costs in year one
- Caption (also keep the key point in the HTML text): This is the part most advice skips.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “The money and family conversation nobody prepares you for”)
- File: `it-to-non-it-career-switch-india-stat-money-family-conversation-nobody.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most articles skip this part, and it is usually the real reason a full exit from IT stalls: the first several…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Run the runway math before you commit / Bring a plan to the family conversation, not just conviction / Build or confirm an emergency fund covering at least 6-12 months of full household… / If you are financing a course or exam-prep coaching with savings or a loan, write the… / Separate "I am changing fields" from "I am also taking on new financial risk" — doing… / Name the actual target door and role, not a vague "I want to do something else." / Show the honest timeline and the honest pay reset for that specific door, using real…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Run the runway math before you commit Build or confirm an emergency fund covering at least 6-12 months of full household expenses before you resign for a door with an unpredictable early income (entrepreneurship, freelancing, exam prep with no fallback job).
- Alt: Stat panel or bar chart (only the numbers listed) for “The money and family conversation nobody prepares you…”: Run the runway math before you commit; Bring a plan…
- Title attribute: The money and family conversation nobody prepares you for
- Caption (also keep the key point in the HTML text): Most articles skip this part, and it is usually the real reason a full exit from IT stalls: the first several months to a year of a non-IT door can…
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “Does age change the plan (25 vs 30 vs 35+)?”)
- File: `it-to-non-it-career-switch-india-asymmetrical-age-change-plan.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Yes, meaningfully, and government exams are the clearest example: UPSC's general-category upper age limit is…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 25-29: the cheapest window to test / 30-38: the proof-first window / 39+: still possible, but the pitch has to be sharper / Fewer dependents usually means you can absorb a lean freelance start, a full… / Age limits for most competitive government exams are still comfortably open in this… / Mistakes here are the cheapest they will ever be — use that window deliberately rather… / Doors like consulting, HR/L&D, and teaching respond well here if you can show a specific…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Run the money math explicitly: a 6-12 month emergency fund plus a clear view of any loan repayment against a realistic post-switch income, before committing fee money.
- Alt: Asymmetrical pros-and-cons comparison for “Does age change the plan (25 vs 30 vs 35+)?”: 25-29: the cheapest window to test; 30-38: the proof-first window; 39+…
- Title attribute: Does age change the plan (25 vs 30 vs 35+)?
- Caption (also keep the key point in the HTML text): Yes, meaningfully, and government exams are the clearest example: UPSC's general-category upper age limit is 32, with relaxations for reserved…
**V6 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that waste a year and a lot of money”)
- File: `it-to-non-it-career-switch-india-mistakes-mistakes-waste-year-lot.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Expensive, common mistakes Resigning first and figuring out the door second, with no tested income plan…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Expensive, common mistakes / What to do instead / Resigning first and figuring out the door second, with no tested income plan behind the… / Treating one government exam as the only fallback, without a realistic view of the… / Chasing "teaching" or "consulting" purely because they sound calmer, without testing… / Starting a business or freelance practice with no first client already lined up before… / Collecting certifications for three different doors at once instead of testing one door…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Treating one government exam as the only fallback, without a realistic view of the roughly 0.1-0.2% success rate at the top of that ladder.
- Alt: Mistakes versus smarter move panel for “Mistakes that waste a year and a lot of money”: Expensive, common mistakes; What to do instead; Resigning first and figuring…
- Title attribute: Mistakes that waste a year and a lot of money
- Caption (also keep the key point in the HTML text): Expensive, common mistakes Resigning first and figuring out the door second, with no tested income plan behind the exit.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/sales-to-marketing-career-switch-india/

**H1:** Sales to marketing career switch India: the 4 real lanes, and what each one costs you  
**Category:** career-change · **Words:** 4470 · **H2 sections:** 11 · **Search priority:** P2 (1 clicks, 25 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Sales to marketing career switch India: the 4 real lanes…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-change/sales-to-marketing-career-switch-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Why this switch is so…”, “What sales already…”, “The skill stack to…”, “Pitching it internally…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-change-editorial-cover.webp`, `career-change-context.webp`, `career-change-bridge.webp`, `career-change-mapping.webp`, `career-change-sequence.webp`, `career-change-experiment.webp`, `career-change-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `sales-to-marketing-career-switch-india.webp`, `sales-to-marketing-career-switch-india-detail.webp`, `sales-to-marketing-career-switch-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `sales-to-marketing-career-switch-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `sales-to-marketing-career-switch-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a working professional after office hours, a modest office desk after hours. Props that belong to “Sales to marketing career switch India: the 4 real lanes, and what each one…”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Sales to marketing career switch India: the 4 real lanes, and what…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `sales-to-marketing-career-switch-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A sales to marketing career switch in India is not one door — it is four separate lanes: sales enablement…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why this switch is so common in India right now / The 4 real marketing lanes from sales (not one blurry "switch") / What sales already gives you (the real overlap) / What marketing actually needs that sales doesn't teach / The skill stack to build before you apply
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Sales to marketing career switch India: the 4 real lanes, and what…”
- Title attribute: At a glance: Sales to marketing career switch India: the 4 real lanes…
- Caption (also keep the key point in the HTML text): A sales to marketing career switch in India is not one door — it is four separate lanes: sales enablement, customer marketing, product marketing, and…
**V2 — Comparison table** (place after the H2 “The 4 real marketing lanes from sales (not one blurry "switch")”)
- File: `sales-to-marketing-career-switch-india-comparison-real-marketing-lanes-sales.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "Sales to marketing" gets treated online like one door.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Lane | Typical range (India) | What moves it up / Row: Sales enablement… | Roughly Rs 13-18 LPA… | SaaS or tech-company… / Row: Customer marketing | Broadly comparable to a… | A documented library of… / Row: Product marketing manager | Roughly Rs 11-16 LPA at… | A strong… / Row: Growth / demand marketing | Performance-marketing-heav… | A documented campaign… / Sales enablement / Customer marketing
- Numbers: use ONLY these facts from the article (exact values, no new ones): Most data-heavy Longest ramp-up What each lane actually pays in India right now Lane Typical range (India) What moves it up Sales enablement (specialist to manager) Roughly Rs 13-18 LPA entry-to-mid, Rs 17-24 LPA at manager level, Rs 25-31+ LPA senior SaaS or 
- Alt: Comparison table for “The 4 real marketing lanes from sales (not one blurry…”: Lane | Typical range (India) | What…; Sales enablement… | Roughly Rs 13-18…; Customer…
- Title attribute: The 4 real marketing lanes from sales (not one blurry "switch")
- Caption (also keep the key point in the HTML text): "Sales to marketing" gets treated online like one door.
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Pitching it internally vs externally”)
- File: `sales-to-marketing-career-switch-india-asymmetrical-pitching-internally-externally.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The pitch changes depending on whether you are asking your current employer for a move, or applying somewhere…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Internal pitch: lead with a real assignment, not a preference / External pitch: lead with proof a stranger can evaluate fast / Start by doing one small piece of marketing-adjacent work inside your current role: write… / Connect the ask to what your manager already cares about — pipeline quality, deal… / Ask for a specific, bounded next step: a trial project, a shadow arrangement with the… / Your existing relationships and track record are your biggest asset here — you do not… / Build a small portfolio: 2-3 pieces (a case study, a campaign concept, a positioning…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Pitching it internally vs externally”: Internal pitch: lead with a real…; External pitch: lead with proof a…; Start by…
- Title attribute: Pitching it internally vs externally
- Caption (also keep the key point in the HTML text): The pitch changes depending on whether you are asking your current employer for a move, or applying somewhere new.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “The pay and incentive-structure reality”)
- File: `sales-to-marketing-career-switch-india-stat-pay-incentive-structure-reality.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most people compare sales-to-marketing pay by looking at the base salary line alone, and that comparison is…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What actually changes / Run the numbers before you decide / Sales pay is commonly split between a fixed base and uncapped or high-ceiling variable… / This means your best sales months (with strong commission) may out-earn a marketing role… / Compare your realistic average annual earning across a normal year in sales — not your… / Write down your last 12 months of actual total earnings (base plus commission), not your… / Compare that number, not your base salary alone, against the marketing role's total…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Run the numbers before you decide Write down your last 12 months of actual total earnings (base plus commission), not your on-paper CTC.
- Alt: Stat panel or bar chart (only the numbers listed) for “The pay and incentive-structure reality”: What actually changes; Run the numbers before you decide; Sales pay…
- Title attribute: The pay and incentive-structure reality
- Caption (also keep the key point in the HTML text): Most people compare sales-to-marketing pay by looking at the base salary line alone, and that comparison is usually misleading.
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that waste months”)
- File: `sales-to-marketing-career-switch-india-mistakes-mistakes-waste-months.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Expensive, common mistakes Applying to marketing roles with a resume still written entirely in sales-quota…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Expensive, common mistakes / What to do instead / Applying to marketing roles with a resume still written entirely in sales-quota language… / Enrolling in a long, expensive marketing course before writing a single real content… / Targeting "marketing" broadly instead of picking one lane that matches your actual sales… / Comparing your best sales-commission month to a marketing base salary and concluding the… / Waiting for a formal internal opening instead of starting visible marketing-adjacent work…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that waste months”: Expensive, common mistakes; What to do instead; Applying to marketing roles with a…
- Title attribute: Mistakes that waste months
- Caption (also keep the key point in the HTML text): Expensive, common mistakes Applying to marketing roles with a resume still written entirely in sales-quota language, with no marketing-relevant…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/career-change-at-30-india/

**H1:** Career change at 30 India: the real math on EMI, family timing, and the 3 real paths  
**Category:** career-change · **Words:** 4204 · **H2 sections:** 11 · **Search priority:** P3 (0 clicks, 13 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/career-change/career-change-at-30-india/career-change-at-30-india-cover-social.jpg

**Findings**
1. 6 authored images on the page (hero + 5 supporting).
2. EMI and take-home panel says "40% of gross can feel like 55-60% of take-home". The sentence is confusing and probably wrong; fix wording and verify against the article.
3. Runway ranges (3-6, 6-9, 12 months) need a source or the article text.
4. 6 of 6 images have no title attribute.
5. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `career-change-at-30-emi-runway.webp`: 100. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-change/career-change-at-30-india/career-change-at-30-india-cover-social.jpg` | 1200x675 | 1200x675 | eager | 15% | no title attr |
| `career-change/career-change-at-30-india/career-change-at-30-four-checkpoints.webp` | 1122x1402 | 1122x1402 | lazy | 30% | no title attr |
| `career-change/career-change-at-30-india/career-change-at-30-fresher-vs-constraints.webp` | 1122x1402 | 1122x1402 | lazy | 36% | no title attr |
| `career-change/career-change-at-30-india/career-change-at-30-emi-runway.webp` | 1122x1402 | 1122x1402 | lazy | 40% | no title attr |
| `career-change/career-change-at-30-india/career-change-at-30-three-paths.webp` | 1200x675 | 1200x675 | lazy | 46% | no title attr |
| `career-change/career-change-at-30-india/career-change-at-30-test-before-leap.webp` | 1122x1402 | 1122x1402 | lazy | 61% | no title attr |

**Required actions**
1. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
2. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/career-plateau-how-to-break-through-india/

**H1:** Career plateau: how to break through in India — the 3-Layer Plateau Check  
**Category:** career-change · **Words:** 3806 · **H2 sections:** 9 · **Search priority:** P3 (0 clicks, 2 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Career plateau: how to break through in India — the 3-Layer…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-change/career-plateau-how-to-break-through-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“FAQs”, “Your next step”, “REALITY”, “SKILL GAP”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 88%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-change-editorial-cover.webp`, `career-change-context.webp`, `career-change-bridge.webp`, `career-change-mapping.webp`, `career-change-sequence.webp`, `career-change-experiment.webp`, `career-change-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `career-plateau-how-to-break-through-india.webp`, `career-plateau-how-to-break-through-india-detail.webp`, `career-plateau-how-to-break-through-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `career-plateau-how-to-break-through-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `career-plateau-how-to-break-through-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a working professional after office hours, a neighbourhood cafe table. Props that belong to “Career plateau: how to break through in India — the 3-Layer Plateau Check”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Career plateau: how to break through in India — the 3-Layer Plateau…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `career-plateau-how-to-break-through-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Career plateau how to break through in India: run the 3-Layer Plateau Check to find out if it's you, your…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Career plateau or just a slow phase? Here is the real difference / The 3-Layer Plateau Check: is it you, your manager, or the company? / How to run a skip-level conversation that actually moves something / Internal mobility: the lateral move most people never ask for / When to conclude the company itself has a real ceiling
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Career plateau: how to break through in India — the 3-Layer Plateau…”
- Title attribute: At a glance: Career plateau: how to break through in India — the…
- Caption (also keep the key point in the HTML text): Career plateau how to break through in India: run the 3-Layer Plateau Check to find out if it's you, your manager, or the company, then fix the right…
**V2 — Comparison table** (place after the H2 “The 3-Layer Plateau Check: is it you, your manager, or the company?” #three-layer-check)
- File: `career-plateau-how-to-break-through-india-comparison-layer-plateau-check-manager.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Career development research has long separated stagnation into distinct types — a content plateau, where the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Layer | Real fix | Realistic signal it's… / Row: You (content plateau) | Pick one new skill or… | A concrete new capability… / Row: Manager (advocacy plateau) | A direct conversation… | Your manager can name a… / Row: Company (structural… | Apply for a genuine… | Real, open internal… / Layer 1 in detail: signals it is genuinely a content plateau / Layer 2 in detail: signals it is genuinely a manager-advocacy plateau / Layer 3 in detail: signals it is genuinely a structural plateau
- Numbers: use ONLY these facts from the article (exact values, no new ones): Have you actually built a new, provable skill or taken on new scope in the last 12 months — or has the job just repeated itself while you got better at the same tasks? | Is there an actual role, budget line, or promotion slot above you in the next 12-18 months, anywhere in the organisation?
- Alt: Comparison table for “The 3-Layer Plateau Check: is it you, your manager, or…”: Layer | Real fix | Realistic signal…; You (content plateau) | Pick one new…; Manager…
- Title attribute: The 3-Layer Plateau Check: is it you, your manager, or the company?
- Caption (also keep the key point in the HTML text): Career development research has long separated stagnation into distinct types — a content plateau, where the job itself stopped teaching you anything…
**V3 — Linear process chain or roadmap** (place after the H2 “How to run a skip-level conversation that actually moves something” #skip-level)
- File: `career-plateau-how-to-break-through-india-linear-run-skip-level-conversation.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A skip-level meeting — a direct, structured conversation with your manager's manager — is one of the most…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Step 1 — Set up the meeting through the normal channel. Ask your manager first, framed as… / Step 2 — Bring one clear ask, not a list of grievances. A useful frame: "Based on what… / Step 3 — Let them talk more than you do. The value of a skip-level is what a more senior… / Step 4 — Follow up in writing within a few days. A short note referencing what was… / Step 5 — Give it one full review cycle, then reassess. If nothing has moved by the next…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “How to run a skip-level conversation that actually…”: Step 1 — Set up the meeting through…; Step 2 — Bring one clear ask, not…
- Title attribute: How to run a skip-level conversation that actually moves something
- Caption (also keep the key point in the HTML text): A skip-level meeting — a direct, structured conversation with your manager's manager — is one of the most underused tools available inside most…
**V4 — Chronological timeline** (place after the H2 “Using an external offer as leverage, without actually needing to leave” #external-offer-leverage)
- File: `career-plateau-how-to-break-through-india-chronological-using-external-offer-leverage.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A genuine external offer is one of the fastest ways to get a stalled internal conversation moving — but only…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Get the market read even if you are not sure you want to leave. Two or three real… / Bring the offer to your manager as information, not an ultimatum. "I've had this offer… / Be genuinely willing to take the offer. A counter-offer accepted without real internal… / Watch for a counter-offer that fixes pay but not scope. If the raise arrives but the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “Using an external offer as leverage, without actually…”: Get the market read even if you are…; Bring the offer to your manager as…; Be…
- Title attribute: Using an external offer as leverage, without actually needing to leave
- Caption (also keep the key point in the HTML text): A genuine external offer is one of the fastest ways to get a stalled internal conversation moving — but only when it is used honestly.
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that stretch a plateau out longer than it needs to be” #mistakes)
- File: `career-plateau-how-to-break-through-india-mistakes-mistakes-stretch-plateau-out.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Assuming it's the company before checking Layer 1 and 2.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Assuming it's the company before checking Layer 1 and 2. Jumping straight to "this place… / Assuming it's you when it's actually the company. Blaming yourself for a genuinely flat… / Quiet quitting instead of diagnosing. Doing the bare minimum feels like protection, but… / Treating a skip-level as a one-time fix. One conversation rarely changes headcount… / Waiting indefinitely for "next year." If the same promise has repeated across two review…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that stretch a plateau out longer than it…”: Assuming it's the company before…; Assuming it's you when it's…
- Title attribute: Mistakes that stretch a plateau out longer than it needs to be
- Caption (also keep the key point in the HTML text): Assuming it's the company before checking Layer 1 and 2.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/career-switch-tips-for-it-professionals-india/

**H1:** Career switch tips for IT professionals India: check the bond, the counter-offer, and the interview gap first  
**Category:** career-change · **Words:** 3999 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 15 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Career switch tips for IT professionals India: check the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-change/career-switch-tips-for-it-professionals-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Which switch are you…”, “Interview prep matched…”, “Switching industries…”, “Money, runway, and…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-change-editorial-cover.webp`, `career-change-context.webp`, `career-change-bridge.webp`, `career-change-mapping.webp`, `career-change-sequence.webp`, `career-change-experiment.webp`, `career-change-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `career-switch-tips-for-it-professionals-india.webp`, `career-switch-tips-for-it-professionals-india-detail.webp`, `career-switch-tips-for-it-professionals-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `career-switch-tips-for-it-professionals-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `career-switch-tips-for-it-professionals-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a working professional after office hours, a neighbourhood cafe table. Props that belong to “Career switch tips for IT professionals India: check the bond, the…”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Career switch tips for IT professionals India: check the bond, the…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `career-switch-tips-for-it-professionals-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Real career switch tips for IT professionals in India start before the resignation letter: read your exact…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Which switch are you actually making? / Audit your notice period and bond clause before you touch anything… / The counter-offer: decide your answer before your manager asks the… / Interview prep matched to your switch type / Switching tech stack or domain inside IT: the honest map
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Career switch tips for IT professionals India: check the bond, the…”
- Title attribute: At a glance: Career switch tips for IT professionals India: check the…
- Caption (also keep the key point in the HTML text): Real career switch tips for IT professionals in India start before the resignation letter: read your exact notice period and bond clause, decide in…
**V2 — Comparison table** (place after the H2 “Which switch are you actually making?”)
- File: `career-switch-tips-for-it-professionals-india-comparison-switch-actually-making.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "I want to switch" is not one decision for an IT professional.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Switch type | What actually changes | Where to get the… / Row: Same role, new company | Pay, culture, team… | This guide covers it… / Row: Same company or domain… | Tools and daily tasks… | This guide covers it… / Row: New technical domain (for… | Problem type and required… | This guide covers it… / Row: New industry, still… | Domain knowledge and… | This guide covers it… / Row: Moving into management | The daily work changes… | See Career switch from IT… / The five switch types, compared
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Which switch are you actually making?”: Switch type | What actually changes |…; Same role, new company | Pay…; Same company or domain… | Tools…
- Title attribute: Which switch are you actually making?
- Caption (also keep the key point in the HTML text): "I want to switch" is not one decision for an IT professional.
**V3 — Comparison table** (place after the H2 “Audit your notice period and bond clause before you touch anything else”)
- File: `career-switch-tips-for-it-professionals-india-comparison-audit-notice-period-bond.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the step almost everyone skips, and it is the one that turns a clean switch into a messy one.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Employer type | Typical notice period | Buyout reality / Row: Large IT services firms… | Commonly 60-90 days for… | Often treated as… / Row: Product companies and GCCs | Often 30-60 days | More commonly allowed… / Row: Startups and smaller… | Frequently 15-45 days | Usually flexible if… / What the notice period landscape actually looks like in Indian IT / Read the exact shortfall or buyout formula / Check whether you are still inside a training or service bond
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Audit your notice period and bond clause before you…”: Employer type | Typical notice period…; Large IT services firms… | Commonly…; Product…
- Title attribute: Audit your notice period and bond clause before you touch anything…
- Caption (also keep the key point in the HTML text): This is the step almost everyone skips, and it is the one that turns a clean switch into a messy one.
**V4 — Decision tree** (place after the H2 “The counter-offer: decide your answer before your manager asks the question”)
- File: `career-switch-tips-for-it-professionals-india-decision-counter-offer-decide-answer.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Somewhere between your resignation and your last working day, a counter-offer is a real possibility…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why companies counter-offer at all / Why accepting one so often backfires / Replacing a mid-to-senior professional in India typically costs the company somewhere… / A counter-offer buys the company time to plan a transition on its own schedule instead of… / It rarely reflects a sudden realisation of your value; it reflects the cost and… / A large share of professionals who accept a counter-offer end up actively job-hunting… / Indian companies rarely re-extend a declined external offer, so staying on a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Why companies counter-offer at all Replacing a mid-to-senior professional in India typically costs the company somewhere between 50-150% of that person's annual salary once recruitment, onboarding, and lost productivity are counted — a counter-offer is often c
- Alt: Decision tree for “The counter-offer: decide your answer before your…”: Why companies counter-offer at all; Why accepting one so often backfires; Replacing a…
- Title attribute: The counter-offer: decide your answer before your manager asks the…
- Caption (also keep the key point in the HTML text): Somewhere between your resignation and your last working day, a counter-offer is a real possibility, especially if you are senior, mid-career, or…
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that cost people the most”)
- File: `career-switch-tips-for-it-professionals-india-mistakes-mistakes-cost-people-most.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Expensive, common mistakes Resigning before checking the actual notice-period shortfall or bond cost, then…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Expensive, common mistakes / What to do instead / Resigning before checking the actual notice-period shortfall or bond cost, then getting… / Accepting a counter-offer purely to avoid an awkward conversation, without asking what… / Preparing for a lateral interview the same way regardless of whether it is a same-role… / Treating "IT to non-IT" or "IT to management" content as generic career-change advice… / Applying to hundreds of roles across every switch type at once instead of picking one…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that cost people the most”: Expensive, common mistakes; What to do instead; Resigning before checking the actual…
- Title attribute: Mistakes that cost people the most
- Caption (also keep the key point in the HTML text): Expensive, common mistakes Resigning before checking the actual notice-period shortfall or bond cost, then getting an unpleasant surprise in the…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/mid-career-strategies-india/

**H1:** Mid-career strategies in India: the 5 decisions that shape your next decade  
**Category:** career-change · **Words:** 3629 · **H2 sections:** 12 · **Search priority:** P3 (0 clicks, 6 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Mid-career strategies in India: the 5 decisions that shape…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-change/mid-career-strategies-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“FAQs”, “Your next step”, “REALITY”, “SKILL GAP”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-change-editorial-cover.webp`, `career-change-context.webp`, `career-change-bridge.webp`, `career-change-mapping.webp`, `career-change-sequence.webp`, `career-change-experiment.webp`, `career-change-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `mid-career-strategies-india.webp`, `mid-career-strategies-india-detail.webp`, `mid-career-strategies-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `mid-career-strategies-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `mid-career-strategies-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a working professional after office hours, a quiet corner of a library. Props that belong to “Mid-career strategies in India: the 5 decisions that shape your next decade”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Mid-career strategies in India: the 5 decisions that shape your next…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `mid-career-strategies-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Mid-career strategies in India: specialize or diversify, build visibility, pick a track, time a sabbatical…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why mid-career decisions carry more weight than early-career ones / The 5 Mid-Career Levers: a working framework for this stage / Lever 1: specialize deeper, or diversify into a T-shaped role / Lever 2: personal branding and visibility, done without it feeling… / Lever 3: individual contributor track or leadership track
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Mid-career strategies in India: the 5 decisions that shape your next…”
- Title attribute: At a glance: Mid-career strategies in India: the 5 decisions that…
- Caption (also keep the key point in the HTML text): Mid-career strategies in India: specialize or diversify, build visibility, pick a track, time a sabbatical, and get the money math right — one clear…
**V2 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Lever 2: personal branding and visibility, done without it feeling fake” #visibility)
- File: `mid-career-strategies-india-stat-lever-personal-branding-visibility.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Visibility at this stage is not about becoming an influencer.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Visibility at this stage is not about becoming an influencer. / It is about making sure the work you have already done is legible to people who… / Recruiter behaviour on LinkedIn backs this up directly: recruiters…
- Numbers: use ONLY these facts from the article (exact values, no new ones): In India specifically, the platform reach is large enough that this is not a niche channel — LinkedIn's Indian user base now runs well past 150 million professionals, which means the absence of a visible track record is increasingly conspicuous, not neutral.
- Alt: Stat panel or bar chart (only the numbers listed) for “Lever 2: personal branding and visibility, done…”: Visibility at this stage is not about…; It is about making…
- Title attribute: Lever 2: personal branding and visibility, done without it feeling…
- Caption (also keep the key point in the HTML text): Visibility at this stage is not about becoming an influencer.
**V3 — Comparison table** (place after the H2 “Lever 3: individual contributor track or leadership track” #ic-vs-leadership)
- File: `mid-career-strategies-india-comparison-lever-individual-contributor-track.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This decision used to come with a hidden trap in India: for a long time, moving into people management was…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Signal | Individual… | Leadership track fits / Row: What energizes you | Solving the hardest… | Unblocking others and… / Row: What you already do… | People bring you the… | People already come to… / Row: How you feel about… | Uneasy when your success… | Comfortable, even… / Row: Company support | A real parallel technical… | A structured path into…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Lever 3: individual contributor track or leadership…”: Signal | Individual… | Leadership…; What energizes you | Solving the…; What you already…
- Title attribute: Lever 3: individual contributor track or leadership track
- Caption (also keep the key point in the HTML text): This decision used to come with a hidden trap in India: for a long time, moving into people management was the only visible way to earn more money…
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Lever 4: when a sabbatical is actually worth considering” #sabbatical)
- File: `mid-career-strategies-india-asymmetrical-lever-sabbatical-actually-worth.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Sabbaticals are becoming a more normal part of mid-career planning in India, not a fringe choice.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Sabbaticals are becoming a more normal part of mid-career planning in India… / Some large employers — several established IT and consulting firms among them —… / Even where no formal policy exists, extended unpaid leave negotiated directly…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Lever 4: when a sabbatical is actually worth…”: Sabbaticals are becoming a more…; Some large employers — several…; Even…
- Title attribute: Lever 4: when a sabbatical is actually worth considering
- Caption (also keep the key point in the HTML text): Sabbaticals are becoming a more normal part of mid-career planning in India, not a fringe choice.
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that quietly cost mid-career professionals their momentum” #mistakes)
- File: `mid-career-strategies-india-mistakes-mistakes-quietly-cost-mid.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Diversifying into unrelated skills instead of adjacent ones.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Diversifying into unrelated skills instead of adjacent ones. A pile of unconnected… / Treating leadership as the only path to more pay. Where a real individual contributor… / Posting instead of proving. Visibility built on frequency of posting without a… / Taking a break with no defined purpose or return date. An open-ended "I need time off" is… / Running the money math after deciding, not before. Committing to a pivot, a break, or an…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that quietly cost mid-career professionals…”: Diversifying into unrelated skills…; Treating leadership as the only…
- Title attribute: Mistakes that quietly cost mid-career professionals their momentum
- Caption (also keep the key point in the HTML text): Diversifying into unrelated skills instead of adjacent ones.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/rebuild-career-after-layoff-india/

**H1:** Rebuild career after layoff India: the real restart plan, not the pep talk  
**Category:** career-change · **Words:** 4306 · **H2 sections:** 14 · **Search priority:** P3 (0 clicks, 5 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Rebuild career after layoff India: the real restart plan…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-change/rebuild-career-after-layoff-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “The emotional shock is…”, “Skill gap audit: what…”, “The 4-Checkpoint…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-change-editorial-cover.webp`, `career-change-context.webp`, `career-change-bridge.webp`, `career-change-mapping.webp`, `career-change-sequence.webp`, `career-change-experiment.webp`, `career-change-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `rebuild-career-after-layoff-india.webp`, `rebuild-career-after-layoff-india-detail.webp`, `rebuild-career-after-layoff-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `rebuild-career-after-layoff-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `rebuild-career-after-layoff-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a working professional after office hours, a neighbourhood cafe table. Props that belong to “Rebuild career after layoff India: the real restart plan, not the pep talk”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Rebuild career after layoff India: the real restart plan, not the pep…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `rebuild-career-after-layoff-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Rebuild career after layoff India: the money math, resume gap answer, and same-field-vs-pivot decision before…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to "how do I rebuild my career after a layoff in… / Why this is happening to so many people right now / The first days: financial triage before job search / The emotional shock is real, and it is not weakness / Skill gap audit: what actually got you cut
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Rebuild career after layoff India: the real restart plan, not the pep…”
- Title attribute: At a glance: Rebuild career after layoff India: the real restart plan…
- Caption (also keep the key point in the HTML text): Rebuild career after layoff India: the money math, resume gap answer, and same-field-vs-pivot decision before you touch a job board or send one…
**V2 — Linear process chain or roadmap** (place after the H2 “The short answer to "how do I rebuild my career after a layoff in India"” #short-answer)
- File: `rebuild-career-after-layoff-india-linear-short-answer-rebuild-career.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Sequence matters more than speed.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Sequence matters more than speed. / Financial triage first, decision second, applications third, networking running… / Most people reverse this order under panic: they start applying to anything…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “The short answer to "how do I rebuild my career after…”: Sequence matters more than speed.; Financial triage first, decision……
- Title attribute: The short answer to "how do I rebuild my career after a layoff in…
- Caption (also keep the key point in the HTML text): Sequence matters more than speed.
**V3 — Comparison table** (place after the H2 “The first days: financial triage before job search” #week-one)
- File: `rebuild-career-after-layoff-india-comparison-first-days-financial-triage.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before you rewrite a single resume bullet, get a clear, factual picture of your money situation.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Do this | Why it comes before… / Row: Calculate your real runway | Add up cash, liquid… / Row: Claim everything owed to… | Full and final… / Row: Pause, do not panic-stop… | A SIP running on zero… / Row: Talk to lenders before… | Banks and NBFCs…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “The first days: financial triage before job search”: Do this | Why it comes before…; Calculate your real runway | Add up…; Claim everything…
- Title attribute: The first days: financial triage before job search
- Caption (also keep the key point in the HTML text): Before you rewrite a single resume bullet, get a clear, factual picture of your money situation.
**V4 — Self-assessment checklist** (place after the H2 “Explaining the gap on your resume and in interviews” #resume-gap)
- File: `rebuild-career-after-layoff-india-self-explaining-gap-resume-interviews.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most people spend far more energy worrying about the gap than it actually costs them in a real interview.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Vague dates or a resume that quietly stretches the last role's end date. / Visibly bitter or critical language about the previous employer. / A long, over-explained story that sounds rehearsed and defensive. / "My role was eliminated during a restructuring round. I used the time to sharpen… / Neutral, professional framing about the previous employer, even if the exit was…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Explaining the gap on your resume and in interviews”: Vague dates or a resume that quietly…; Visibly bitter or critical language…; A…
- Title attribute: Explaining the gap on your resume and in interviews
- Caption (also keep the key point in the HTML text): Most people spend far more energy worrying about the gap than it actually costs them in a real interview.
**V5 — Linear process chain or roadmap** (place after the H2 “The restart plan, step by step” #restart-plan)
- File: `rebuild-career-after-layoff-india-linear-restart-plan-step-step.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Move through these steps at whatever pace your runway and energy genuinely allow.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 1 Do the money math and claim your dues. Runway calculation, full and final settlement… / 2 Run the skill gap audit and the 4-Checkpoint Protocol. Decide, on paper, whether you… / 3 Rebuild your resume and one clean explanation of the gap. Rewrite your resume around… / 4 Reactivate your network before you touch job portals. Message five to ten people you… / 5 Run both channels in parallel: referrals and direct applications. Referral-led…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “The restart plan, step by step”: 1 Do the money math and claim your…; 2 Run the skill gap audit and the…; 3 Rebuild your resume…
- Title attribute: The restart plan, step by step
- Caption (also keep the key point in the HTML text): Move through these steps at whatever pace your runway and energy genuinely allow.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/second-career-at-40-india/

**H1:** Second career at 40 India: the real playbook for building something new without starting from zero  
**Category:** career-change · **Words:** 4369 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 9 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Second career at 40 India: the real playbook for building…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-change/second-career-at-40-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“What each lane actually…”, “The money math before…”, “Your…”, “Mistakes that waste a…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-change-editorial-cover.webp`, `career-change-context.webp`, `career-change-bridge.webp`, `career-change-mapping.webp`, `career-change-sequence.webp`, `career-change-experiment.webp`, `career-change-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `second-career-at-40-india.webp`, `second-career-at-40-india-detail.webp`, `second-career-at-40-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `second-career-at-40-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `second-career-at-40-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of an Indian student or adult at a home desk, a quiet public library table. Props that belong to “Second career at 40 India: the real playbook for building something new without…”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Second career at 40 India: the real playbook for building something…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `second-career-at-40-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A second career at 40 in India rarely means throwing out 15-18 years of expertise and beginning again as a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why a second career at 40 is a different decision than at 30 / The 5 real lanes for a second career at 40 (not one blurry "start… / What each lane actually pays and costs to enter / The age-bias reality in Indian hiring, and how to work around it / The money math before you leap
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Second career at 40 India: the real playbook for building something…”
- Title attribute: At a glance: Second career at 40 India: the real playbook for…
- Caption (also keep the key point in the HTML text): A second career at 40 in India rarely means throwing out 15-18 years of expertise and beginning again as a fresher.
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Why a second career at 40 is a different decision than at 30”)
- File: `second-career-at-40-india-asymmetrical-second-career-different-decision.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most "career change" advice online is written for someone in their late 20s or early 30s: fewer dependents, a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The weekly reality most guides skip / Most "career change" advice online is written for someone in their late 20s or… / A second career at 40 in India starts from a different set of facts, and… / By 40, most professionals carry 15-18 years of depth in one domain — deep…
- Numbers: use ONLY these facts from the article (exact values, no new ones): By 40, most professionals carry 15-18 years of depth in one domain — deep enough to be genuinely valuable to someone, even if your current employer has stopped rewarding it.
- Alt: Asymmetrical pros-and-cons comparison for “Why a second career at 40 is a different decision than…”: The weekly reality most guides skip; Most "career change"…
- Title attribute: Why a second career at 40 is a different decision than at 30
- Caption (also keep the key point in the HTML text): Most "career change" advice online is written for someone in their late 20s or early 30s: fewer dependents, a shorter runway needed, more tolerance…
**V3 — Chronological timeline** (place after the H2 “The age-bias reality in Indian hiring, and how to work around it”)
- File: `second-career-at-40-india-chronological-age-bias-reality-indian.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This part gets skipped in most "reinvent yourself" articles, and it is often the real reason a second career…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Where age bias hits hardest / Entry points that route around it / Cold applications through job boards and generic recruiter pipelines, where a resume is… / Roles explicitly framed around a "young, dynamic" team culture, where age signals (not… / Any process where your only proof is a resume, and nobody in the room already knows your… / Network-led introductions: a warm referral from someone who already trusts your work… / Consulting or advisory framing: positioning yourself as "the person hired to solve X"…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A review of Indian job advertisements found that 61% of respondents reported job ads carrying some form of age bias — either explicit age limits or experience bands narrow enough to quietly exclude older candidates, along with "young and dynamic team" language
- Alt: Chronological timeline for “The age-bias reality in Indian hiring, and how to work…”: Where age bias hits hardest; Entry points that route around it; Cold…
- Title attribute: The age-bias reality in Indian hiring, and how to work around it
- Caption (also keep the key point in the HTML text): This part gets skipped in most "reinvent yourself" articles, and it is often the real reason a second career at 40 fails to launch through…
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “The money math before you leap”)
- File: `second-career-at-40-india-stat-money-math-before-leap.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most second-career regret at 40 is not "I chose the wrong lane." It is "I did not run the numbers before I…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Run the runway math before you commit / Most second-career regret at 40 is not "I chose the wrong lane." It is "I did… / EPF / EPS continuity You generally need 10 years of eligible service under the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Run the runway math before you commit Emergency fund Financial planners generally recommend an accessible fund covering 6-12 months of full household expenses before you take a pay cut or leave stable income, since early consulting, business, or freelance inco | EPF / EPS continuity You generally need 10 years of eligible service under the Employees' Pension Scheme to draw a monthly pension later, and withdrawing your EPF before 5 years of continuous service can attract tax deducted at source.
- Alt: Stat panel or bar chart (only the numbers listed) for “The money math before you leap”: Run the runway math before you commit; Most second-career regret at 40 is……
- Title attribute: The money math before you leap
- Caption (also keep the key point in the HTML text): Most second-career regret at 40 is not "I chose the wrong lane." It is "I did not run the numbers before I committed." Run these four checks honestly…
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that waste a year and your savings”)
- File: `second-career-at-40-india-mistakes-mistakes-waste-year-savings.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Expensive, common mistakes Resigning first and figuring out the second career afterward, instead of testing…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Expensive, common mistakes / What to do instead / Resigning first and figuring out the second career afterward, instead of testing it… / Withdrawing your full EPF balance without checking the 5-year TDS rule and the 10-year… / Applying to generic job-board listings that already show signs of age-biased language… / Spending on a certification or new degree before confirming any real market demand for… / Treating a passion-driven pivot as a plan you fund fully on day one, instead of a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that waste a year and your savings”: Expensive, common mistakes; What to do instead; Resigning first and figuring…
- Title attribute: Mistakes that waste a year and your savings
- Caption (also keep the key point in the HTML text): Expensive, common mistakes Resigning first and figuring out the second career afterward, instead of testing it alongside your current income.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/skills-needed-for-career-change-india/

**H1:** Skills needed for career change India: the 3-Gap Audit before you commit  
**Category:** career-change · **Words:** 3313 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 2 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Skills needed for career change India: the 3-Gap Audit…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-change/skills-needed-for-career-change-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The skill gaps people…”, “FAQs”, “Your next step”, “SKILL / PROJECT PROOF”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-change-editorial-cover.webp`, `career-change-context.webp`, `career-change-bridge.webp`, `career-change-mapping.webp`, `career-change-sequence.webp`, `career-change-experiment.webp`, `career-change-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `skills-needed-for-career-change-india.webp`, `skills-needed-for-career-change-india-detail.webp`, `skills-needed-for-career-change-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `skills-needed-for-career-change-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `skills-needed-for-career-change-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a learner at a laptop with a small project, a family dining table in the evening. Props that belong to “Skills needed for career change India: the 3-Gap Audit before you commit”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Skills needed for career change India: the 3-Gap Audit before you…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `skills-needed-for-career-change-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Skills needed for career change India: how to separate transferable from role-specific skills, audit yourself…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Transferable skills vs role-specific skills: the split that decides… / The 3-Gap Skill Audit: what a self-assessment usually misses / How to audit your skills against a target role's job descriptions / The skill gaps people underestimate most / Certifications vs portfolio proof: how Indian employers actually…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Skills needed for career change India: the 3-Gap Audit before you…”
- Title attribute: At a glance: Skills needed for career change India: the 3-Gap Audit…
- Caption (also keep the key point in the HTML text): Skills needed for career change India: how to separate transferable from role-specific skills, audit yourself against real job descriptions, and…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Transferable skills vs role-specific skills: the split that decides your plan” #transferable-vs-role-specific)
- File: `skills-needed-for-career-change-india-asymmetrical-transferable-skills-role-specific.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every skill you own falls into one of two buckets when you are changing fields, and confusing the two is the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Every skill you own falls into one of two buckets when you are changing fields… / Transferable skills are portable across roles and industries — communication… / Role-specific skills are tied to the target field itself — the specific…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Transferable skills vs role-specific skills: the split…”: Every skill you own falls into one of…; Transferable skills are…
- Title attribute: Transferable skills vs role-specific skills: the split that decides…
- Caption (also keep the key point in the HTML text): Every skill you own falls into one of two buckets when you are changing fields, and confusing the two is the single biggest reason people either…
**V3 — Linear process chain or roadmap** (place after the H2 “How to audit your skills against a target role's job descriptions” #audit-against-jds)
- File: `skills-needed-for-career-change-india-linear-audit-skills-against-target.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A skills gap analysis only means something when it is run against real evidence, not your own guess about…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Step 1 — Collect 15 to 20 real job descriptions for the exact role and level you are… / Step 2 — Extract every skill, tool, and qualification mentioned and count how often each… / Step 3 — Sort each recurring item into transferable or role-specific using the split… / Step 4 — Talk to two or three people already doing the job. Job descriptions describe… / Step 5 — Rank your gap list by frequency and difficulty , and start with the skills that…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “How to audit your skills against a target role's job…”: Step 1 — Collect 15 to 20 real job…; Step 2 — Extract every skill…
- Title attribute: How to audit your skills against a target role's job descriptions
- Caption (also keep the key point in the HTML text): A skills gap analysis only means something when it is run against real evidence, not your own guess about what the new field probably needs.
**V4 — Comparison table** (place after the H2 “The skill gaps people underestimate most” #underestimated-gaps)
- File: `skills-needed-for-career-change-india-comparison-skill-gaps-people-underestimate.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Three specific gaps trip up career changers far more often than the obvious "I don't know this tool yet" gap…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Gap | Why it gets missed | How to actually close… / Row: Domain knowledge | It is invisible until you… | Informational… / Row: Tools and software | People confuse knowing… | Hands-on practice inside… / Row: Certification vs real… | A completed course feels… | Pair every certification…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “The skill gaps people underestimate most”: Gap | Why it gets missed | How to…; Domain knowledge | It is invisible…; Tools and software |…
- Title attribute: The skill gaps people underestimate most
- Caption (also keep the key point in the HTML text): Three specific gaps trip up career changers far more often than the obvious "I don't know this tool yet" gap, and each one hides in a different place.
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that stretch out a skill-based career change” #mistakes)
- File: `skills-needed-for-career-change-india-mistakes-mistakes-stretch-out-skill.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Building a course library instead of a proof library.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Building a course library instead of a proof library. Certificates without applied work… / Skipping the domain gap entirely. Learning the tool without learning the field's… / Auditing against a generic "top skills" article instead of real job descriptions. Generic… / Treating every skill as new. Ignoring genuinely transferable skills you already have… / Waiting for total readiness before showing any proof. Interviews reward visible…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that stretch out a skill-based career change”: Building a course library instead of…; Skipping the domain gap…
- Title attribute: Mistakes that stretch out a skill-based career change
- Caption (also keep the key point in the HTML text): Building a course library instead of a proof library.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/switch-to-remote-work-career-india/

**H1:** How to switch to a remote-work career in India: the skills, scams, and paperwork nobody explains  
**Category:** career-change · **Words:** 3614 · **H2 sections:** 11 · **Search priority:** P3 (0 clicks, 19 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “How to switch to a remote-work career in India: the skills…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-change/switch-to-remote-work-career-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The…”, “Where legitimate remote…”, “Mistakes that slow down…”, “FAQs”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-change-editorial-cover.webp`, `career-change-context.webp`, `career-change-bridge.webp`, `career-change-mapping.webp`, `career-change-sequence.webp`, `career-change-experiment.webp`, `career-change-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `switch-to-remote-work-career-india.webp`, `switch-to-remote-work-career-india-detail.webp`, `switch-to-remote-work-career-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `switch-to-remote-work-career-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `switch-to-remote-work-career-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a working professional after office hours, a shared neighbourhood workspace. Props that belong to “How to switch to a remote-work career in India: the skills, scams, and…”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How to switch to a remote-work career in India: the skills, scams…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `switch-to-remote-work-career-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to switch to a remote-work career in India: which skills convert fastest, how to spot fake job posts, and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why remote hiring in India is a real opening, not just a pandemic… / Which skills convert to remote work fastest — and which don't / The freelance-to-remote-employee pathway / Where legitimate remote roles actually live / How to spot a remote job scam before it costs you money
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to switch to a remote-work career in India: the skills, scams…”
- Title attribute: At a glance: How to switch to a remote-work career in India: the…
- Caption (also keep the key point in the HTML text): How to switch to a remote-work career in India: which skills convert fastest, how to spot fake job posts, and the tax and payment rules nobody…
**V2 — Comparison table** (place after the H2 “How to spot a remote job scam before it costs you money” #scam-red-flags)
- File: `switch-to-remote-work-career-india-comparison-spot-remote-job-scam.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Remote job fraud in India has a specific, repeatable pattern, and once you have seen it named clearly, it…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Signal | What a real employer… | What a scam does / Row: Payment direction | Pays you. Never asks you… | Asks for any upfront fee… / Row: Communication channel | Uses a company email… | Contacts you only through… / Row: Interview process | Has a real interview… | Skips the interview… / Row: Pay level | Offers pay roughly in… | Offers pay well above…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “How to spot a remote job scam before it costs you money”: Signal | What a real employer… | What…; Payment direction | Pays you. Never……
- Title attribute: How to spot a remote job scam before it costs you money
- Caption (also keep the key point in the HTML text): Remote job fraud in India has a specific, repeatable pattern, and once you have seen it named clearly, it becomes easy to spot.
**V3 — Comparison table** (place after the H2 “Time zones, payment, and tax: what actually changes with an international…” #international-considerations)
- File: `switch-to-remote-work-career-india-comparison-time-zones-payment-tax.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Working remotely for a company outside India is not fundamentally different from working remotely for one…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Consideration | What to know / Row: Time zone overlap | India (IST) overlaps… / Row: Getting paid | Payments from a foreign… / Row: Income tax | If you are a tax resident… / Row: GST, if freelancing | Freelance services billed… / Row: Employment structure | Some foreign companies…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Time zones, payment, and tax: what actually changes…”: Consideration | What to know; Time zone overlap | India (IST)…; Getting paid | Payments…
- Title attribute: Time zones, payment, and tax: what actually changes with an…
- Caption (also keep the key point in the HTML text): Working remotely for a company outside India is not fundamentally different from working remotely for one inside India — except for three practical…
**V4 — Linear process chain or roadmap** (place after the H2 “How to position an in-office resume for remote-first hiring” #resume-positioning)
- File: `switch-to-remote-work-career-india-linear-position-office-resume-remote.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A resume built for in-office roles reads as neutral to a remote hiring manager — it neither helps nor hurts…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): State your intent clearly. Add a short line near the top making it clear you are… / Rewrite duties as outcomes. "Managed vendor communication" becomes "Coordinated with 3… / Surface any existing distributed-work proof. If you have ever worked with a team in… / Name your async tools. Slack, Notion, Trello, Google Workspace, Zoom — list the ones you… / Keep the format simple. Skip heavy graphics, columns, and decorative templates. Most…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “How to position an in-office resume for remote-first…”: State your intent clearly. Add a…; Rewrite duties as outcomes.…
- Title attribute: How to position an in-office resume for remote-first hiring
- Caption (also keep the key point in the HTML text): A resume built for in-office roles reads as neutral to a remote hiring manager — it neither helps nor hurts on its own.
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that slow down or derail the switch” #mistakes)
- File: `switch-to-remote-work-career-india-mistakes-mistakes-slow-down-derail.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Applying with a generic "remote work" pitch.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Applying with a generic "remote work" pitch. Employers hire a specific skill delivered… / Skipping the scam check because a listing looked professional. Scam listings copy real… / Ignoring the tax conversation until money has already arrived. Structuring income… / Quitting the current job before testing the new format. A freelance stretch or a side… / Underselling distributed-work experience that already exists. Most working professionals…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that slow down or derail the switch”: Applying with a generic "remote work"…; Skipping the scam check because a……
- Title attribute: Mistakes that slow down or derail the switch
- Caption (also keep the key point in the HTML text): Applying with a generic "remote work" pitch.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-change/upskilling-for-career-change-india/

**H1:** Upskilling for career change in India: the execution plan, not the skill list  
**Category:** career-change · **Words:** 3667 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 10 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 12 other articles, with identical alt text and captions, so they say nothing specific about “Upskilling for career change in India: the execution plan…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-change/upskilling-for-career-change-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“FAQs”, “Your next step”, “SKILL / PROJECT PROOF”, “REALITY”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-change-editorial-cover.webp`, `career-change-context.webp`, `career-change-bridge.webp`, `career-change-mapping.webp`, `career-change-sequence.webp`, `career-change-experiment.webp`, `career-change-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `upskilling-for-career-change-india.webp`, `upskilling-for-career-change-india-detail.webp`, `upskilling-for-career-change-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `upskilling-for-career-change-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `upskilling-for-career-change-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a learner at a laptop with a small project, a quiet public library table. Props that belong to “Upskilling for career change in India: the execution plan, not the skill list”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Upskilling for career change in India: the execution plan, not the…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `upskilling-for-career-change-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Upskilling for a career change in India comes down to execution: pick the right learning format, study while…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "just pick a skill" advice stops working once you have a job / The four real upskilling formats, and what each one actually buys you / India's online learning landscape for working professionals / How to structure a self-study plan that survives a 9-to-6 job / Free vs paid: how to evaluate a learning resource before you commit…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Upskilling for career change in India: the execution plan, not the…”
- Title attribute: At a glance: Upskilling for career change in India: the execution…
- Caption (also keep the key point in the HTML text): Upskilling for a career change in India comes down to execution: pick the right learning format, study while employed without burning out, and turn…
**V2 — Skill map** (place after the H2 “Why "just pick a skill" advice stops working once you have a job” #why-execution-fails)
- File: `upskilling-for-career-change-india-skill-just-pick-skill-advice.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every career-change article tells you to build a high-value skill.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Every career-change article tells you to build a high-value skill. / Almost none of them tell you what happens the day after you decide, when you… / That gap between "decide to upskill" and "actually finish upskilling" is where…
- Numbers: use ONLY these facts from the article (exact values, no new ones): One widely cited workplace-learning analysis found that the average employee has well under 1% of a working week available for genuinely focused, undistracted learning - a window closer to 20-25 minutes inside a 40-hour week. | And separately, free, self-paced online courses see completion rates of only 5-15%, against 60% for paid structured courses and roughly 72% for cohort-based or employer-sponsored programs.
- Alt: Skill map for “Why "just pick a skill" advice stops working once you…”: Every career-change article tells you…; Almost none of them tell you what…; That gap between…
- Title attribute: Why "just pick a skill" advice stops working once you have a job
- Caption (also keep the key point in the HTML text): Every career-change article tells you to build a high-value skill.
**V3 — Comparison table** (place after the H2 “The four real upskilling formats, and what each one actually buys you” #formats)
- File: `upskilling-for-career-change-india-comparison-four-real-upskilling-formats.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "Take a course" is not a plan.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Format | Best for | Typical time and cost | Watch-out / Row: Self-study (free content… | Testing genuine interest… | Fully flexible; free or… | No external structure or… / Row: Structured online course… | A clearly defined skill… | Weeks to several months… | The certificate alone… / Row: Bootcamp (cohort-based… | Portfolio-first fields… | 8-24 weeks, typically… | Hardest to sustain fully… / Row: Part-time degree or PG… | Fields where a credential… | 1-2 years; the highest… | Slowest route and the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Format Best for Typical time and cost Watch-out Self-study (free content, NPTEL, documentation, YouTube) Testing genuine interest before spending money; skills with strong free resources like programming, data tools, writing Fully flexible; free or near-free, 
- Alt: Comparison table for “The four real upskilling formats, and what each one…”: Format | Best for | Typical time and…; Self-study (free content… | Testing…; Structured…
- Title attribute: The four real upskilling formats, and what each one actually buys you
- Caption (also keep the key point in the HTML text): "Take a course" is not a plan.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “India's online learning landscape for working professionals” #platforms)
- File: `upskilling-for-career-change-india-stat-india-online-learning-landscape.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: India now has one of the largest online-learning bases in the world, and the platform mix has matured well…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): India now has one of the largest online-learning bases in the world, and the… / Here is what each major option is actually built for, so you are not choosing… / NPTEL / SWAYAM A joint initiative of the IITs and IISc offering thousands of…
- Numbers: use ONLY these facts from the article (exact values, no new ones): The course content is free; an optional in-person proctored exam (around Rs 1,000) gets you a certificate carrying an IIT/IISc name.
- Alt: Stat panel or bar chart (only the numbers listed) for “India's online learning landscape for working…”: India now has one of the largest…; Here is what each major…
- Title attribute: India's online learning landscape for working professionals
- Caption (also keep the key point in the HTML text): India now has one of the largest online-learning bases in the world, and the platform mix has matured well beyond generic MOOCs.
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that waste your time and money on the way to a real skill switch” #mistakes)
- File: `upskilling-for-career-change-india-mistakes-mistakes-waste-time-money.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Enrolling in three courses at once.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Enrolling in three courses at once. Splitting your limited weekly hours across multiple… / Buying the most expensive option to force commitment. A high price tag does not… / Collecting certificates instead of building proof. A LinkedIn profile with five… / Copying someone else's study schedule. A friend's 2-hour daily routine assumes their job… / Treating the first stumble as proof it won't work. A missed week is normal and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that waste your time and money on the way to…”: Enrolling in three courses at once.…; Buying the most expensive…
- Title attribute: Mistakes that waste your time and money on the way to a real skill…
- Caption (also keep the key point in the HTML text): Enrolling in three courses at once.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
