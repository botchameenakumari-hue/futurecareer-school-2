# Image audit — blog category: career-guidance

16 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/career-guidance/factors-to-consider-when-choosing-a-career/

**H1:** Which Factor Is Important While Choosing a Career? The 8 That Actually Decide It  
**Category:** career-guidance · **Words:** 3603 · **H2 sections:** 12 · **Search priority:** P1 (2 clicks, 372 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “Which Factor Is Important While Choosing a Career? The 8…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/factors-to-consider-when-choosing-a-career*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Meet the 8-Factor…”, “The Floor: market…”, “The Shape: pay, growth…”, “The Sustain: work-life…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. A page-context image from `src/data/blog-page-context.json` is attached: `factors-to-consider-when-choosing-a-career.webp`. Check it matches the article.
6. 6 authored images on the page (hero + 5 supporting).
7. 8-factor stack infographic uses small body text; the Career Decision Worksheet has very dense tiny text and will be unreadable on mobile.
8. Break the worksheet into two simpler visuals.
9. Supporting visuals are a mix of explanatory graphics and scenes with tiny or dense handwriting; some will not be readable at mobile width.
10. 2 images are over 250 KB: `stack.webp` (268 KB), `weigh.webp` (337 KB)
11. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `cover.webp`: 48%; `weigh.webp`: 124, 122, 140, 122., 119, 116, 118. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/career-factors/cover.webp` | 1600x1000 | 1600x1000 | eager | 14% | ok |
| `career-guidance/career-factors/stack.webp` | 1600x1000 | 1600x1000 | lazy | 23% | 268 KB |
| `career-guidance/career-factors/floor.webp` | 1600x1000 | 1600x1000 | lazy | 30% | ok |
| `career-guidance/career-factors/shape.webp` | 1600x1000 | 1600x1000 | lazy | 34% | ok |
| `career-guidance/career-factors/tradeoffs.webp` | 1600x1000 | 1600x1000 | lazy | 46% | ok |
| `career-guidance/career-factors/weigh.webp` | 1600x1000 | 1600x1000 | lazy | 52% | 337 KB |

Generic/template images present: 7 category, 3 page-card, 1 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `factors-to-consider-when-choosing-a-career.webp`, `factors-to-consider-when-choosing-a-career-detail.webp`, `factors-to-consider-when-choosing-a-career-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE 2 supporting visuals (to replace 2 low-information images; remove those images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `factors-to-consider-when-choosing-a-career-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Which factor is important while choosing a career: compare pay, passion, stability, growth, market demand…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "follow your passion" and "chase the highest pay" both fail / Meet the 8-Factor Career Stack / The Floor: market demand and skill match come first / The Shape: pay, growth ceiling, and stability decide how big this gets / The Sustain: work-life balance and passion decide whether you can…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Which Factor Is Important While Choosing a Career? The 8 That…”
- Title attribute: At a glance: Which Factor Is Important While Choosing a Career? The 8…
- Caption (also keep the key point in the HTML text): Which factor is important while choosing a career: compare pay, passion, stability, growth, market demand, and family pressure honestly, then weigh…
**V2 — Mistakes versus smarter move panel** (place after the H2 “Why "follow your passion" and "chase the highest pay" both fail” #myth)
- File: `factors-to-consider-when-choosing-a-career-mistakes-follow-passion-chase-highest.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Two answers dominate when people search this exact question: "follow your passion" and "chase the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Whether real employers or clients currently pay for that specific combination of interest… / Whether you can tolerate the boring, repetitive part of the work - the 80% that never… / Whether the field has any real room to grow, or caps out at a fixed ceiling within a few… / Whether you can actually build the skill deep enough to reach that number, not just see… / Whether the number holds up against automation, AI, market saturation, or hiring cycles…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Whether you can tolerate the boring, repetitive part of the work - the 80% that never shows up in the daydream version.
- Alt: Mistakes versus smarter move panel for “Why "follow your passion" and "chase the highest pay"…”: Whether real employers or clients…; Whether you can tolerate the…
- Title attribute: Why "follow your passion" and "chase the highest pay" both fail
- Caption (also keep the key point in the HTML text): Two answers dominate when people search this exact question: "follow your passion" and "chase the highest-paying field." Both feel like complete…
5. Images to replace/remove (lowest information): `stack.webp`, `floor.webp`.
6. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
7. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/best-career-for-my-child-after-12th-india/

**H1:** Best career for my child after 12th India: a decision filter, not a job list  
**Category:** career-guidance · **Words:** 3911 · **H2 sections:** 13 · **Search priority:** P2 (0 clicks, 119 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “Best career for my child after 12th India: a decision…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/best-career-for-my-child-after-12th-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“How much should a…”, “The exam math most…”, “The conversation that…”, “A simple execution plan…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. A page-context image from `src/data/blog-page-context.json` is attached: `best-career-for-my-child-after-12th-india.webp`. Check it matches the article.
6. 6 authored images on the page (hero + 5 supporting).
7. Three of five supporting images are family scenes with tiny handwriting; two are explanatory (four-filters, decision-map).
8. Family-budget image shows fee and loan figures; verify against the article.
9. Supporting visuals are a mix of explanatory graphics and scenes with tiny or dense handwriting; some will not be readable at mobile width.
10. 2 images are over 250 KB: `four-filters.webp` (269 KB), `decision-map.webp` (269 KB)
11. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `family-budget.webp`: 6,00,008, 900, 20,000, 70,009, 2,20. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/parent-career-filter/cover.webp` | 1586x992 | 1600x1000 | eager | 19% | ok |
| `career-guidance/parent-career-filter/four-filters.webp` | 1586x992 | 1600x1000 | lazy | 23% | 269 KB |
| `career-guidance/parent-career-filter/job-market.webp` | 1586x992 | 1600x1000 | lazy | 37% | ok |
| `career-guidance/parent-career-filter/family-budget.webp` | 1586x992 | 1600x1000 | lazy | 39% | ok |
| `career-guidance/parent-career-filter/proof-project.webp` | 1586x992 | 1600x1000 | lazy | 43% | ok |
| `career-guidance/parent-career-filter/decision-map.webp` | 1586x992 | 1600x1000 | lazy | 51% | 269 KB |

Generic/template images present: 7 category, 3 page-card, 1 page-context (positions 88%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-career-for-my-child-after-12th-india.webp`, `best-career-for-my-child-after-12th-india-detail.webp`, `best-career-for-my-child-after-12th-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE 2 supporting visuals (to replace 2 low-information images; remove those images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-career-for-my-child-after-12th-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The best career for my child after 12th India is rarely one job title on a list — it is the option that…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "best career for my child" has no single answer / The 4-filter test for the best career for your child after 12th / What the market actually looks like after 12th right now / Why the degree name matters less than the skill portfolio underneath… / The exam math most families never run
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best career for my child after 12th India: a decision filter, not a…”
- Title attribute: At a glance: Best career for my child after 12th India: a decision…
- Caption (also keep the key point in the HTML text): The best career for my child after 12th India is rarely one job title on a list — it is the option that clears four honest filters together: your…
**V2 — Comparison table** (place after the H2 “The 4-filter test for the best career for your child after 12th”)
- File: `best-career-for-my-child-after-12th-india-comparison-filter-test-best-career.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Instead of ranking careers by reputation, run every option your family is seriously considering through these…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Filter | Question to ask… | What a good sign… / Row: Fit | Does the daily work match… | Your child can describe a… / Row: Affordability | Can the family fund this… | The plan survives a… / Row: Demand | Do real employers… | Internships, entry roles… / Row: AI-resistance | Does the role still need… | Your child can name what… / Fit check questions to ask your child / Affordability check questions for the family
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “The 4-filter test for the best career for your child…”: Filter | Question to ask… | What a…; Fit | Does the daily work match… |……
- Title attribute: The 4-filter test for the best career for your child after 12th
- Caption (also keep the key point in the HTML text): Instead of ranking careers by reputation, run every option your family is seriously considering through these four filters, side by side.
5. Images to replace/remove (lowest information): `four-filters.webp`, `job-market.webp`.
6. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
7. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/how-to-choose-a-career-as-a-teenager/

**H1:** How to Choose a Career as a Teenager: The 3-Window Plan Before Any Work History  
**Category:** career-guidance · **Words:** 4420 · **H2 sections:** 12 · **Search priority:** P2 (1 clicks, 69 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “How to Choose a Career as a Teenager: The 3-Window Plan…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/how-to-choose-a-career-as-a-teenager*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Meet the 3-Window Plan”, “Window 1: Explore…”, “Window 2: Narrow, the…”, “Window 3: Test, before…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 89%, 90%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `how-to-choose-a-career-as-a-teenager.webp`, `how-to-choose-a-career-as-a-teenager-detail.webp`, `how-to-choose-a-career-as-a-teenager-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `how-to-choose-a-career-as-a-teenager-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `how-to-choose-a-career-as-a-teenager-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a parent and teenager at the family dining table, a living-room sofa with notebooks on a low table. Props that belong to “How to Choose a Career as a Teenager: The 3-Window Plan Before Any Work History”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How to Choose a Career as a Teenager: The 3-Window Plan Before Any…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-to-choose-a-career-as-a-teenager-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to choose a career as a teenager, without a resume yet: the 3-Window Plan for stream choice, family…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why generic career advice was not built for a teenager / Meet the 3-Window Plan / Window 1: Explore, before anything is locked / Window 2: Narrow, the real stream decision / Window 3: Test, before the big decision arrives
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to Choose a Career as a Teenager: The 3-Window Plan Before Any…”
- Title attribute: At a glance: How to Choose a Career as a Teenager: The 3-Window Plan…
- Caption (also keep the key point in the HTML text): How to choose a career as a teenager, without a resume yet: the 3-Window Plan for stream choice, family permission, peer pressure, and exam-result…
**V2 — Comparison table** (place after the H2 “The proof gap: you do not have a job history yet” #proof-gap)
- File: `how-to-choose-a-career-as-a-teenager-comparison-proof-gap-have-job.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A lot of career-fit advice, including the strongest research-backed frameworks, leans on evidence you simply…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Signal | Why it does not fully… | The teen-stage… / Row: Attention signal | Transfers directly - no… | What do you keep doing… / Row: Feedback signal | The adult version needs… | Ask a teacher, coach… / Row: Market signal | The adult version needs… | Use the closest honest… / Row: Friction signal | Transfers directly, with… | Notice which parts of a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “The proof gap: you do not have a job history yet”: Signal | Why it does not fully… | The…; Attention signal | Transfers directly…; Feedback…
- Title attribute: The proof gap: you do not have a job history yet
- Caption (also keep the key point in the HTML text): A lot of career-fit advice, including the strongest research-backed frameworks, leans on evidence you simply do not have as a teenager: colleagues or…
**V3 — Decision tree** (place after the H2 “Deciding while you are still a dependent” #family)
- File: `how-to-choose-a-career-as-a-teenager-decision-deciding-while-still-dependent.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most career advice quietly assumes you can just decide and act.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Name the smallest test, not the whole plan. Not "I want to become a game designer."… / Name the real cost. Money, time, anything you are asking them to rearrange. A specific… / Name what happens if it does not work. You go back to the current plan with no argument… / Set a date to show them what you built. A specific date to sit down and look at the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree for “Deciding while you are still a dependent”: Name the smallest test, not the whole…; Name the real cost. Money, time…; Name what happens if it does…
- Title attribute: Deciding while you are still a dependent
- Caption (also keep the key point in the HTML text): Most career advice quietly assumes you can just decide and act.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Peer comparison and the social media trap” #peers)
- File: `how-to-choose-a-career-as-a-teenager-asymmetrical-peer-comparison-social-media.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A friend announcing their stream, a topper's admission post, a coaching-batch photo with a caption that…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): That someone else said a decision out loud, which takes far less evidence than actually… / A snapshot from one moment - an admission result, a coaching-batch photo, a topper post … / Often, relief at having an answer to give relatives and classmates, which is a real and… / Whether that person has actually tested the daily work, or only the idea and the social… / Whether you would still want the same option if nobody around you had picked it first.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Peer comparison and the social media trap”: That someone else said a decision out…; A snapshot from one moment - an……
- Title attribute: Peer comparison and the social media trap
- Caption (also keep the key point in the HTML text): A friend announcing their stream, a topper's admission post, a coaching-batch photo with a caption that sounds certain - none of it is evidence about…
**V5 — Self-assessment checklist** (place after the H2 “Check the sources behind these claims” #sources)
- File: `how-to-choose-a-career-as-a-teenager-self-check-sources-behind-these.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Do not trust any single career article blindly, including this one.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): James Marcia's identity status theory, including identity moratorium as a normal… / Laurence Steinberg's dual systems model on adolescent decision-making under peer presence… / Career Decision Self-Efficacy Scale (Betz and Taylor) and the value of specific… / Free interest assessment built on RIASEC research by the US Department of Labor. O*NET… / India Skills Report on student demand for hands-on exposure before committing to a field.…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Check the sources behind these claims”: James Marcia's identity status…; Laurence Steinberg's dual systems…; Career Decision…
- Title attribute: Check the sources behind these claims
- Caption (also keep the key point in the HTML text): Do not trust any single career article blindly, including this one.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/should-you-choose-a-career-for-money/

**H1:** Should People Choose Careers That Are Monetarily Rewarding? The Honest Verdict  
**Category:** career-guidance · **Words:** 2931 · **H2 sections:** 11 · **Search priority:** P2 (1 clicks, 39 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “Should People Choose Careers That Are Monetarily Rewarding?…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/should-you-choose-a-career-for-money*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Why this question keeps…”, “The honest case for…”, “What income-happiness…”, “Survivorship bias in”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. A page-context image from `src/data/blog-page-context.json` is attached: `should-you-choose-a-career-for-money.webp`. Check it matches the article.
6. 6 authored images on the page (hero + 5 supporting).
7. Money-floor, survivorship-bias and decision-map are good; decision-map text is tiny.
8. "Sustainable fit" is a plain portrait with no explanatory content.
9. Supporting visuals are a mix of explanatory graphics and scenes with tiny or dense handwriting; some will not be readable at mobile width.
10. 2 images are over 250 KB: `survivorship-bias.webp` (327 KB), `decision-map.webp` (292 KB)

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/money-career-choice/cover.webp` | 1586x992 | 1600x1000 | eager | 16% | ok |
| `career-guidance/money-career-choice/money-floor.webp` | 1586x992 | 1600x1000 | lazy | 23% | ok |
| `career-guidance/money-career-choice/sustainable-fit.webp` | 1586x992 | 1600x1000 | lazy | 31% | ok |
| `career-guidance/money-career-choice/survivorship-bias.webp` | 1586x992 | 1600x1000 | lazy | 35% | 327 KB |
| `career-guidance/money-career-choice/enough-number.webp` | 1586x992 | 1600x1000 | lazy | 46% | ok |
| `career-guidance/money-career-choice/decision-map.webp` | 1586x992 | 1600x1000 | lazy | 49% | 292 KB |

Generic/template images present: 7 category, 3 page-card, 1 page-context (positions 85%, 86%, 87%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `should-you-choose-a-career-for-money.webp`, `should-you-choose-a-career-for-money-detail.webp`, `should-you-choose-a-career-for-money-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE 2 supporting visuals (to replace 2 low-information images; remove those images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `should-you-choose-a-career-for-money-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Should people choose careers that are monetarily rewarding?
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why this question keeps coming back / The honest case for choosing pay / What income-happiness research actually shows / The hidden cost: burnout when the work is a bad fit / Survivorship bias in "just chase the highest-paying field" advice
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Should People Choose Careers That Are Monetarily Rewarding? The…”
- Title attribute: At a glance: Should People Choose Careers That Are Monetarily…
- Caption (also keep the key point in the HTML text): Should people choose careers that are monetarily rewarding?
**V2 — Self-assessment checklist** (place after the H2 “Check the sources behind these claims” #sources)
- File: `should-you-choose-a-career-for-money-self-check-sources-behind-these.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Do not trust any single career article blindly, including this one.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Killingsworth (2021) on income and experienced well-being above $75,000. PNAS… / Killingsworth, Kahneman, and Mellers (2023) adversarial collaboration reconciling the two… / Mani, Mullainathan, Shafir, and Zhao (2013) on financial scarcity and cognitive… / World Health Organization's official definition of burnout as an occupational phenomenon.… / Gallup's ongoing global research on workplace engagement. Gallup: State of the Global…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Check the sources behind these claims”: Killingsworth (2021) on income and…; Killingsworth, Kahneman, and Mellers…; Mani…
- Title attribute: Check the sources behind these claims
- Caption (also keep the key point in the HTML text): Do not trust any single career article blindly, including this one.
5. Images to replace/remove (lowest information): `money-floor.webp`, `sustainable-fit.webp`.
6. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
7. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/what-is-career-counselling/

**H1:** What Is Career Counselling? A Plain-Language Definition and How It Works  
**Category:** career-guidance · **Words:** 1769 · **H2 sections:** 8 · **Search priority:** P2 (0 clicks, 70 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “What Is Career Counselling? A Plain-Language Definition and…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/what-is-career-counselling*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“A plain-language…”, “What actually happens…”, “Who career counselling…”, “Where career…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. A page-context image from `src/data/blog-page-context.json` is attached: `what-is-career-counselling.webp`. Check it matches the article.
6. 6 authored images on the page (hero + 5 supporting).
7. Self/market map, process and distinctions are paper props with small text.
8. "who" collage is good context imagery.
9. Supporting visuals are mostly scenes/flat-lays with one-word labels. They do not meet “non-hero visuals must primarily explain”.
10. 2 images are over 250 KB: `self-market.webp` (284 KB), `distinctions.webp` (303 KB)

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/what-is-counselling/cover.webp` | 1600x1000 | 1600x1000 | eager | 18% | ok |
| `career-guidance/what-is-counselling/self-market.webp` | 1600x1000 | 1600x1000 | lazy | 22% | 284 KB |
| `career-guidance/what-is-counselling/process.webp` | 1600x1000 | 1600x1000 | lazy | 26% | ok |
| `career-guidance/what-is-counselling/who.webp` | 1600x1000 | 1600x1000 | lazy | 34% | ok |
| `career-guidance/what-is-counselling/distinctions.webp` | 1600x1000 | 1600x1000 | lazy | 37% | 303 KB |
| `career-guidance/what-is-counselling/not.webp` | 1600x1000 | 1600x1000 | lazy | 43% | ok |

Generic/template images present: 7 category, 3 page-card, 1 page-context (positions 83%, 84%, 85%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `what-is-career-counselling.webp`, `what-is-career-counselling-detail.webp`, `what-is-career-counselling-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE 3 supporting visuals (to replace 3 low-information images; remove those images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `what-is-career-counselling-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: What is career counselling?
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A plain-language definition / What actually happens in a session / Who career counselling is actually for / Counselling vs. guidance vs. coaching: the real difference / Where career counselling is actually available
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “What Is Career Counselling? A Plain-Language Definition and How It…”
- Title attribute: At a glance: What Is Career Counselling? A Plain-Language Definition…
- Caption (also keep the key point in the HTML text): What is career counselling?
**V2 — Comparison table** (place after the H2 “What actually happens in a session” #what-happens)
- File: `what-is-career-counselling-comparison-actually-happens-session.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "Career counselling" can sound abstract until you see the actual steps.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Step | What it actually… / Row: 1. Intake and the real… | A short conversation or… / Row: 2. Self-assessment | Structured interest… / Row: 3. Discussion and market… | A counsellor talks… / Row: 4. A specific… | The session closes with a… / Row: 5. A next step | A concrete follow-up…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “What actually happens in a session”: Step | What it actually…; 1. Intake and the real… | A short…; 2. Self-assessment | Structured…
- Title attribute: What actually happens in a session
- Caption (also keep the key point in the HTML text): "Career counselling" can sound abstract until you see the actual steps.
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Counselling vs. guidance vs. coaching: the real difference” #vs-guidance-coaching)
- File: `what-is-career-counselling-asymmetrical-counselling-guidance-coaching-real.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: In everyday use, "career counselling," "career guidance," and "career coaching" are often used to mean…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): In everyday use, "career counselling," "career guidance," and "career coaching"… / Honest take Where a real distinction is drawn, it tends to be about scope and… / Counselling often describes a shorter, decision-focused engagement built to…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Counselling vs. guidance vs. coaching: the real…”: In everyday use, "career…; Honest take Where a real distinction……
- Title attribute: Counselling vs. guidance vs. coaching: the real difference
- Caption (also keep the key point in the HTML text): In everyday use, "career counselling," "career guidance," and "career coaching" are often used to mean roughly the same thing, and that overlap is…
5. Images to replace/remove (lowest information): `self-market.webp`, `process.webp`, `who.webp`.
6. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
7. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/career-counseling-advice/

**H1:** Career Counseling Advice: The 6-Point Filter Before You Trust It  
**Category:** career-guidance · **Words:** 2487 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 2 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “Career Counseling Advice: The 6-Point Filter Before You…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/career-counseling-advice*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Two different things…”, “The 6-Point Advice…”, “Run any piece of advice…”, “Advice patterns worth…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. A page-context image from `src/data/blog-page-context.json` is attached: `career-counseling-advice.webp`. Check it matches the article.
6. 6 authored images on the page (hero + 5 supporting).
7. Supporting images are flat-lays with handwritten notes that are unreadable at mobile size.
8. Add one comparison table and one process chain.
9. Supporting visuals are mostly scenes/flat-lays with one-word labels. They do not meet “non-hero visuals must primarily explain”.
10. 1 images are over 250 KB: `life-stages.webp` (331 KB)
11. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `filter.webp`: 054. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/career-advice/cover.webp` | 1600x1000 | 1600x1000 | eager | 16% | ok |
| `career-guidance/career-advice/filter.webp` | 1600x1000 | 1600x1000 | lazy | 23% | ok |
| `career-guidance/career-advice/good-bad.webp` | 1600x1000 | 1600x1000 | lazy | 25% | ok |
| `career-guidance/career-advice/life-stages.webp` | 1600x1000 | 1600x1000 | lazy | 38% | 331 KB |
| `career-guidance/career-advice/sources.webp` | 1600x1000 | 1600x1000 | lazy | 45% | ok |
| `career-guidance/career-advice/action.webp` | 1600x1000 | 1600x1000 | lazy | 48% | ok |

Generic/template images present: 7 category, 3 page-card, 1 page-context (positions 85%, 86%, 87%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `career-counseling-advice.webp`, `career-counseling-advice-detail.webp`, `career-counseling-advice-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE 3 supporting visuals (to replace 3 low-information images; remove those images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `career-counseling-advice-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Career counseling advice is only useful if it passes 6 checks.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Two different things people mean by this / The 6-Point Advice Filter / Run any piece of advice through the filter / Advice patterns worth ignoring / The advice that actually changes by life stage
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Career Counseling Advice: The 6-Point Filter Before You Trust It”
- Title attribute: At a glance: Career Counseling Advice: The 6-Point Filter Before You…
- Caption (also keep the key point in the HTML text): Career counseling advice is only useful if it passes 6 checks.
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Two different things people mean by this” #two-kinds)
- File: `career-counseling-advice-asymmetrical-two-different-things-people.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before filtering advice, it helps to know which question you are actually asking.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Before filtering advice, it helps to know which question you are actually… / "Career counseling advice" usually means one of two things. / The first is advice from career counseling - the actual recommendations a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Two different things people mean by this”: Before filtering advice, it helps to…; "Career counseling advice" usually……
- Title attribute: Two different things people mean by this
- Caption (also keep the key point in the HTML text): Before filtering advice, it helps to know which question you are actually asking.
**V3 — Comparison table** (place after the H2 “The advice that actually changes by life stage” #by-stage)
- File: `career-counseling-advice-comparison-advice-actually-changes-life.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: People often assume career advice needs to change completely by age or stage.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Stage | What useful advice… / Row: School (class 9-10) | The most useful advice at… / Row: After 12th | Advice that only names a… / Row: Fresher / graduate | The advice that matters… / Row: Working professional | Advice worth trusting…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “The advice that actually changes by life stage”: Stage | What useful advice…; School (class 9-10) | The most useful…; After 12th | Advice that…
- Title attribute: The advice that actually changes by life stage
- Caption (also keep the key point in the HTML text): People often assume career advice needs to change completely by age or stage.
5. Images to replace/remove (lowest information): `filter.webp`, `good-bad.webp`, `life-stages.webp`.
6. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
7. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/cbse-career-counselling/

**H1:** CBSE Career Counselling: What Schools Actually Cover, and Its Real Limits  
**Category:** career-guidance · **Words:** 2381 · **H2 sections:** 9 · **Search priority:** P3 (0 clicks, 20 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “CBSE Career Counselling: What Schools Actually Cover, and…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/cbse-career-counselling*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Are school psychometric…”, “Why this exists at all”, “Related reading on this…”, “FAQs on CBSE career…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 84%, 85%, 86%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `cbse-career-counselling.webp`, `cbse-career-counselling-detail.webp`, `cbse-career-counselling-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `cbse-career-counselling-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `cbse-career-counselling-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of an Indian student or adult at a home desk, a family dining table in the evening. Props that belong to “CBSE Career Counselling: What Schools Actually Cover, and Its Real Limits”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: CBSE Career Counselling: What Schools Actually Cover, and Its Real…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `cbse-career-counselling-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: What CBSE-affiliated schools actually offer as career counselling, why it exists, and the real limits of one…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What the school career-counselling setup usually includes / Why this exists at all / The real scope: one counsellor, hundreds of students / What a school psychometric test can and can't tell you / What the school system was never built to cover: skills alongside the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “CBSE Career Counselling: What Schools Actually Cover, and Its Real…”
- Title attribute: At a glance: CBSE Career Counselling: What Schools Actually Cover…
- Caption (also keep the key point in the HTML text): What CBSE-affiliated schools actually offer as career counselling, why it exists, and the real limits of one counsellor and hundreds of students.
**V2 — Self-assessment checklist** (place after the H2 “What the school career-counselling setup usually includes” #what-it-includes)
- File: `cbse-career-counselling-self-school-career-counselling-setup.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Over the years, CBSE has generally encouraged affiliated schools to build some form of structured guidance…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A guidance-and-counselling cell — usually staffed by a teacher given counselling as an… / Periodic career-guidance sessions , often batch-wise for an entire section or grade… / Psychometric or aptitude-based assessment tools , pushed in various cycles particularly… / Career fairs, exhibitions, or exposure visits , sometimes run in partnership with… / Alumni or industry-interaction sessions , where former students or working professionals…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “What the school career-counselling setup usually…”: A guidance-and-counselling cell —…; Periodic career-guidance sessions ……
- Title attribute: What the school career-counselling setup usually includes
- Caption (also keep the key point in the HTML text): Over the years, CBSE has generally encouraged affiliated schools to build some form of structured guidance activity, typically taking one or more of…
**V3 — Decision tree** (place after the H2 “What a school psychometric test can and can't tell you” #test-limits)
- File: `cbse-career-counselling-decision-school-psychometric-test-tell.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The psychometric or aptitude test most CBSE-affiliated schools use at some point is a genuinely useful…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The psychometric or aptitude test most CBSE-affiliated schools use at some… / It pattern-matches a student's answers against known interest and ability… / What it can't do is the part that actually resolves a decision.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree for “What a school psychometric test can and can't tell you”: The psychometric or aptitude test…; It pattern-matches a student's…; What it can't do is…
- Title attribute: What a school psychometric test can and can't tell you
- Caption (also keep the key point in the HTML text): The psychometric or aptitude test most CBSE-affiliated schools use at some point is a genuinely useful starting signal — it isn't nothing.
**V4 — Self-assessment checklist** (place after the H2 “Where the school layer is enough, and where it usually isn't” #enough-or-not)
- File: `cbse-career-counselling-self-where-school-layer-enough.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The free school layer is usually enough when The student has a fairly clear, low-conflict leaning already…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The free school layer is usually enough when / It usually isn't enough when / The student has a fairly clear, low-conflict leaning already, and mainly needs a… / There's no real disagreement between family expectation and the student's own preference. / The decision at hand is genuinely just stream selection, with no unusual constraint… / Family expectation and personal preference are clearly pulling in different directions. / The student is stuck between two or three specific options and can't narrow them with a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Where the school layer is enough, and where it usually…”: The free school layer is usually…; It usually isn't enough when; The…
- Title attribute: Where the school layer is enough, and where it usually isn't
- Caption (also keep the key point in the HTML text): The free school layer is usually enough when The student has a fairly clear, low-conflict leaning already, and mainly needs a broad-strokes…
**V5 — Framework cards** (place after the H2 “Getting more out of the school system while you have it” #get-more)
- File: `cbse-career-counselling-framework-getting-more-out-school.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A few things make the free layer more useful, whether or not you add anything else on top of it: Take the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Take the session or test even if you think you already know the answer. It's a free data… / Go in with two or three specific questions rather than a vague "help me figure out my… / Write down the report's category label and one thing you disagree with or find confusing… / Don't let a shared group session be the only structured input on a decision this…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Framework cards for “Getting more out of the school system while you have it”: Take the session or test even if you…; Go in with two or three specific…; Write down…
- Title attribute: Getting more out of the school system while you have it
- Caption (also keep the key point in the HTML text): A few things make the free layer more useful, whether or not you add anything else on top of it: Take the session or test even if you think you…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/first-job-vs-higher-studies-india/

**H1:** First job vs higher studies India: the real cost and timing math  
**Category:** career-guidance · **Words:** 3804 · **H2 sections:** 11 · **Search priority:** P3 (0 clicks, 15 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “First job vs higher studies India: the real cost and timing…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/first-job-vs-higher-studies-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“First Job”, “Higher Studies India”, “The opportunity cost…”, “The honest case for…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. A page-context image from `src/data/blog-page-context.json` is attached: `first-job-vs-higher-studies-india.webp`. Check it matches the article.
6. 6 authored images on the page (hero + 5 supporting).
7. Opportunity-cost illustration is good; the other four are desk scenes with one-word labels (credentials, experience, hybrid, filter).
8. Add a job-vs-study-vs-hybrid comparison table with cost, time, risk and earning columns drawn from the article.
9. Supporting visuals are mostly scenes/flat-lays with one-word labels. They do not meet “non-hero visuals must primarily explain”.
10. 1 images are over 250 KB: `opportunity-cost.webp` (377 KB)
11. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `opportunity-cost.webp`: 43l; `filter.webp`: 124. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/job-vs-higher-studies/cover.webp` | 1600x1000 | 1600x1000 | eager | 21% | ok |
| `career-guidance/job-vs-higher-studies/opportunity-cost.webp` | 1600x1000 | 1600x1000 | lazy | 22% | 377 KB |
| `career-guidance/job-vs-higher-studies/credentials.webp` | 1600x1000 | 1600x1000 | lazy | 32% | ok |
| `career-guidance/job-vs-higher-studies/experience.webp` | 1600x1000 | 1600x1000 | lazy | 39% | ok |
| `career-guidance/job-vs-higher-studies/hybrid.webp` | 1600x1000 | 1600x1000 | lazy | 53% | ok |
| `career-guidance/job-vs-higher-studies/filter.webp` | 1600x1000 | 1600x1000 | lazy | 59% | ok |

Generic/template images present: 7 category, 3 page-card, 1 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `first-job-vs-higher-studies-india.webp`, `first-job-vs-higher-studies-india-detail.webp`, `first-job-vs-higher-studies-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE 3 supporting visuals (to replace 3 low-information images; remove those images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `first-job-vs-higher-studies-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: First job vs higher studies India is not a question of which path looks better on a resume — it is a money…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why this decision needs real math, not a gut feeling / The opportunity cost math both sides skip / Degree, certification, or self-taught skills — what actually builds… / Does work experience actually help your later MBA or MS application? / The honest case for taking the job first
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “First job vs higher studies India: the real cost and timing math”
- Title attribute: At a glance: First job vs higher studies India: the real cost and…
- Caption (also keep the key point in the HTML text): First job vs higher studies India is not a question of which path looks better on a resume — it is a money, timing, and fit decision that needs real…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Degree, certification, or self-taught skills — what actually builds your income?”)
- File: `first-job-vs-higher-studies-india-asymmetrical-degree-certification-self-taught.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Neither a job nor a degree builds financial security on its own.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): When self-learning genuinely gets you there / When a formal degree or licence is genuinely non-negotiable / Neither a job nor a degree builds financial security on its own. / What builds it is a high-income skill portfolio: the right skill mix for you… / Whichever path you pick from this article, keep building all six — not just the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): The 10% rule for education spending As a strict planning heuristic — not a universal fact — avoid putting more than roughly 10% of your total realistic education budget into any single course, certification, or short program before you have real evidence it mo
- Alt: Asymmetrical pros-and-cons comparison for “Degree, certification, or self-taught skills — what…”: When self-learning genuinely gets you…; When a formal degree or…
- Title attribute: Degree, certification, or self-taught skills — what actually builds…
- Caption (also keep the key point in the HTML text): Neither a job nor a degree builds financial security on its own.
**V3 — Self-assessment checklist** (place after the H2 “The honest case for higher studies right after graduation”)
- File: `first-job-vs-higher-studies-india-self-honest-case-higher-studies.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is also a real, non-prestige-driven case for going straight into higher studies without a work gap.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Where going straight in makes sense / Where it is a weaker bet / Research or academic paths, where a continuous line from bachelor's to master's to a… / Specialized engineering or science roles where the entry-level job itself requires an… / You have secured funding — a scholarship, family support without strain, or an… / You can name the exact target role and specialization the degree leads to, and have… / Choosing an MBA or MS because you are unsure what else to do after graduation — the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “The honest case for higher studies right after…”: Where going straight in makes sense; Where it is a weaker bet; Research or academic…
- Title attribute: The honest case for higher studies right after graduation
- Caption (also keep the key point in the HTML text): There is also a real, non-prestige-driven case for going straight into higher studies without a work gap.
5. Images to replace/remove (lowest information): `opportunity-cost.webp`, `credentials.webp`, `experience.webp`.
6. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
7. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/how-to-choose-a-career-after-12th/

**H1:** How to choose a career after 12th: real plan  
**Category:** career-guidance · **Words:** 3902 · **H2 sections:** 18 · **Search priority:** P3 (0 clicks, 7 impressions)  
**Status: AMBER — AUTHORED** · og:image: /blog/how-to-choose-a-career-after-12th-decision-scorecard.svg

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 8 authored images on the page (hero + 7 supporting).
2. Desk scenes with small handwriting; "lanes" is the only visual that names real categories.
3. Add a stream-to-career roadmap and a decision tree.
4. Supporting visuals are mostly scenes/flat-lays with one-word labels. They do not meet “non-hero visuals must primarily explain”.
5. 2 of 8 images have no title attribute.
6. 2 images have no caption: `how-to-choose-a-career-after-12th-decision-scorecard.svg`, `how-to-choose-a-career-after-12th-career-lane-map.svg`

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/how-to-choose-after-12th/cover.webp` | 1600x1000 | 1600x1000 | eager | 19% | ok |
| `/blog/how-to-choose-a-career-after-12th-decision-scorecard.svg` | MISSING FILE | 1200x675 | lazy | 20% | no title attr; no caption |
| `career-guidance/how-to-choose-after-12th/lanes.webp` | 1600x1000 | 1600x1000 | lazy | 34% | ok |
| `/blog/how-to-choose-a-career-after-12th-career-lane-map.svg` | MISSING FILE | 1200x675 | lazy | 35% | no title attr; no caption |
| `career-guidance/how-to-choose-after-12th/research.webp` | 1600x1000 | 1600x1000 | lazy | 43% | ok |
| `career-guidance/how-to-choose-after-12th/budget.webp` | 1600x1000 | 1600x1000 | lazy | 47% | ok |
| `career-guidance/how-to-choose-after-12th/portfolio.webp` | 1600x1000 | 1600x1000 | lazy | 55% | ok |
| `career-guidance/how-to-choose-after-12th/scorecard.webp` | 1600x1000 | 1600x1000 | lazy | 67% | ok |

**Required actions**
1. CREATE 3 supporting visuals (to replace 3 low-information images; remove those images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-to-choose-a-career-after-12th-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to choose a career after 12th means picking a path where you can build proof fast, afford it safely…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): If you remember only 5 points, remember these / What most students do wrong after 12th / How to choose a career after 12th without wasting years / Sort careers into 3 lanes before choosing any course / Career options after 12th, by stream
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to choose a career after 12th: real plan”
- Title attribute: At a glance: How to choose a career after 12th: real plan
- Caption (also keep the key point in the HTML text): How to choose a career after 12th means picking a path where you can build proof fast, afford it safely, build a high-income skill portfolio, and…
**V2 — Linear process chain or roadmap** (place after the H2 “How to talk to parents without turning it into a fight”)
- File: `how-to-choose-a-career-after-12th-linear-talk-parents-without-turning.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Many students are not fighting only confusion.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Talk with evidence, not only emotion / A script to open the conversation / Show the role you want, not only the degree name. / Show cost, likely return, and backup plans. / Show a project plan and timeline of milestones. / Show the skills you will build outside the classroom too. / Show that you are not avoiding hard work, only avoiding blind risk.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “How to talk to parents without turning it into a fight”: Talk with evidence, not only emotion; A script to open the…
- Title attribute: How to talk to parents without turning it into a fight
- Caption (also keep the key point in the HTML text): Many students are not fighting only confusion.
**V3 — Mistakes versus smarter move panel** (place after the H2 “What to do if you already chose the wrong path”)
- File: `how-to-choose-a-career-after-12th-mistakes-already-chose-wrong-path.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Many students think one wrong choice ruins everything.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Do this first / Do not do this / List the transferable skills your current course is already giving you. / Add one strong market skill on top. / Build one visible project around that stack. / Do not stay frozen because of sunk cost. / Do not keep paying for a weak path without upgrading your real value.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “What to do if you already chose the wrong path”: Do this first; Do not do this; List the transferable skills your…
- Title attribute: What to do if you already chose the wrong path
- Caption (also keep the key point in the HTML text): Many students think one wrong choice ruins everything.
2. Images to replace/remove (lowest information): `how-to-choose-a-career-after-12th-decision-scorecard.svg`, `lanes.webp`, `how-to-choose-a-career-after-12th-career-lane-map.svg`.
3. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
4. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/how-to-find-the-right-career-for-me-india/

**H1:** How to Find the Right Career for Me: The 4 Fit Signals That Beat a Quiz  
**Category:** career-guidance · **Words:** 5985 · **H2 sections:** 16 · **Search priority:** P3 (0 clicks, 17 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/career-guidance/right-career-fit-signals/how-to-find-the-right-career-4-fit-signals-social.jpg

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 11 authored images on the page (hero + 10 supporting).
2. 11 images but the "4 fit signals" idea appears three times (signals, four-fit-signals, how-to-find-the-right-career-4-fit-signals-1440) plus career-quiz-vs-4-fit-signals-1440. Keep one, remove the duplicates.
3. Good explanatory set otherwise (5-step market check, pattern guide).
4. Supporting visuals are a mix of explanatory graphics and scenes with tiny or dense handwriting; some will not be readable at mobile width.
5. 4 of 11 images have no title attribute.
6. 1 images have no caption: `how-to-find-the-right-career-4-fit-signals-1440.webp`
7. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `career-fit-signal-patterns-decision-guide-1080.webp`: 000. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/right-career-fit-signals/how-to-find-the-right-career-4-fit-signals-1440.webp` | 1440x810 | 1440x811 | eager | 10% | no caption |
| `career-guidance/right-career-fit/cover.webp` | 1600x1000 | 1600x1000 | eager | 12% | ok |
| `career-guidance/right-career-fit-signals/career-quiz-vs-4-fit-signals-1440.webp` | 1440x810 | 1440x811 | lazy | 20% | no title attr |
| `career-guidance/right-career-fit/signals.webp` | 1600x1000 | 1600x1000 | lazy | 24% | ok |
| `career-guidance/right-career-fit-signals/four-fit-signals-career-framework-1080.webp` | 1080x1350 | 1080x1350 | lazy | 29% | no title attr |
| `career-guidance/right-career-fit/attention-feedback.webp` | 1600x1000 | 1600x1000 | lazy | 30% | ok |
| `career-guidance/right-career-fit/friction.webp` | 1600x1000 | 1600x1000 | lazy | 36% | ok |
| `career-guidance/right-career-fit/market.webp` | 1600x1000 | 1600x1000 | lazy | 40% | ok |
| `career-guidance/right-career-fit-signals/five-step-market-signal-career-check-1080.webp` | 1080x1350 | 1080x1350 | lazy | 48% | no title attr |
| `career-guidance/right-career-fit-signals/career-fit-signal-patterns-decision-guide-1080.webp` | 1080x1350 | 1080x1350 | lazy | 53% | no title attr |
| `career-guidance/right-career-fit/experiment.webp` | 1600x1000 | 1600x1000 | lazy | 60% | ok |

**Required actions**
1. CREATE 2 supporting visuals (to replace 2 low-information images; remove those images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-to-find-the-right-career-for-me-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to find the right career for me: use the 4 Fit Signals - attention, feedback, friction, and market proof…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why a quiz or "follow your passion" keeps failing you / The same confusion shows up at every life stage, not just after 12th / Meet the 4 Fit Signals / Signal 1: Attention - what pulls your focus without being asked / Signal 2: Feedback - what people already trust you to do well
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to Find the Right Career for Me: The 4 Fit Signals That Beat a…”
- Title attribute: At a glance: How to Find the Right Career for Me: The 4 Fit Signals…
- Caption (also keep the key point in the HTML text): How to find the right career for me: use the 4 Fit Signals - attention, feedback, friction, and market proof - instead of trusting a one-time…
**V2 — Mistakes versus smarter move panel** (place after the H2 “Why a quiz or "follow your passion" keeps failing you” #myth)
- File: `how-to-find-the-right-career-for-me-india-mistakes-quiz-follow-passion-keeps.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Search "how to find the right career for me" and almost every result funnels you toward one of two things: a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A rough starting label based on how you answered a fixed set of questions on one… / A vocabulary for talking about yourself - useful for conversation, weak as evidence on… / A shortlist of occupations that share a broad theme, not a verdict on which one fits your… / Whether real employers or clients currently pay for that exact combination of skill and… / Whether you can tolerate the boring, repetitive 80% of the work, not just the appealing…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Whether you can tolerate the boring, repetitive 80% of the work, not just the appealing 20% the quiz description highlights.
- Alt: Mistakes versus smarter move panel for “Why a quiz or "follow your passion" keeps failing you”: A rough starting label based on how…; A vocabulary for talking…
- Title attribute: Why a quiz or "follow your passion" keeps failing you
- Caption (also keep the key point in the HTML text): Search "how to find the right career for me" and almost every result funnels you toward one of two things: a short personality quiz, or a…
2. Images to replace/remove (lowest information): `cover.webp`, `career-quiz-vs-4-fit-signals-1440.webp`.
3. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
4. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/how-to-get-promoted-faster-india/

**H1:** How to get promoted faster in India: what actually moves the decision  
**Category:** career-guidance · **Words:** 3457 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 5 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “How to get promoted faster in India: what actually moves…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/how-to-get-promoted-faster-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Why "just do good work"…”, “Build a sponsor, not…”, “Expand your scope…”, “Mistakes that slow the…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 85%, 87%, 88%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `how-to-get-promoted-faster-india.webp`, `how-to-get-promoted-faster-india-detail.webp`, `how-to-get-promoted-faster-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `how-to-get-promoted-faster-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `how-to-get-promoted-faster-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a working professional after office hours, a shared neighbourhood workspace. Props that belong to “How to get promoted faster in India: what actually moves the decision”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How to get promoted faster in India: what actually moves the decision
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-to-get-promoted-faster-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to get promoted faster in India: the sponsor gap, calibration timing, scope expansion, and how to tell if…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "just do good work" is not the whole answer / Build a sponsor, not just a mentor / Time your visible wins to the review cycle, not around it / Expand your scope before you ask, not after / How promotion timelines differ by sector in India
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to get promoted faster in India: what actually moves the decision”
- Title attribute: At a glance: How to get promoted faster in India: what actually moves…
- Caption (also keep the key point in the HTML text): How to get promoted faster in India: the sponsor gap, calibration timing, scope expansion, and how to tell if your promotion is delayed on purpose or…
**V2 — Comparison table** (place after the H2 “Time your visible wins to the review cycle, not around it” #calibration-timing)
- File: `how-to-get-promoted-faster-india-comparison-time-visible-wins-review.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most Indian companies run promotion decisions through some version of an annual calibration cycle, often…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Timing move | Why it matters | What to do instead of… / Row: Land a visible win before… | Recency bias means… | Plan your biggest… / Row: Document as you go | You will not remember… | Keep a running note of… / Row: Ask about budget, not… | Even a strong case can… | Ask your manager directly… / Row: Avoid asking right after… | Decisions are usually… | Ask 2-3 months before the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): SHRM data indicates that recency and central-tendency errors affect close to 40% of annual appraisals, meaning what a manager remembers from the last few weeks before a review often carries more weight than what happened months earlier, even when the earlier w | Timing move Why it matters What to do instead of waiting Land a visible win before calibration Recency bias means recent, documented wins carry more weight than older ones Plan your biggest deliverable to close 4-6 weeks before the review window opens, not rig
- Alt: Comparison table for “Time your visible wins to the review cycle, not around…”: Timing move | Why it matters | What…; Land a visible win before… | Recency……
- Title attribute: Time your visible wins to the review cycle, not around it
- Caption (also keep the key point in the HTML text): Most Indian companies run promotion decisions through some version of an annual calibration cycle, often aligned to the April-to-March financial…
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “How promotion timelines differ by sector in India” #sector-differences)
- File: `how-to-get-promoted-faster-india-asymmetrical-promotion-timelines-differ-sector.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The mechanics above hold everywhere, but the pace and formality change a lot by sector, so calibrate your…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): IT services and product companies usually run structured annual cycles with defined… / BFSI and large corporates often add a formal role or grade evaluation layer, so scope… / Government and PSU roles typically promote on seniority, departmental exams, and fixed… / Startups and smaller companies often have no formal calibration process at all, so a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “How promotion timelines differ by sector in India”: IT services and product companies…; BFSI and large corporates often…
- Title attribute: How promotion timelines differ by sector in India
- Caption (also keep the key point in the HTML text): The mechanics above hold everywhere, but the pace and formality change a lot by sector, so calibrate your expectations to where you actually work…
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “The 3-Signal Delay Check: deliberate delay or genuinely not ready?” #delayed-vs-not-ready)
- File: `how-to-get-promoted-faster-india-asymmetrical-signal-delay-check-deliberate.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the question that eats the most time and energy for people stuck at the same level for two or three…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): This is the question that eats the most time and energy for people stuck at the… / Use The 3-Signal Delay Check to tell the difference before you assume the worst… / Signal 1 — Specificity A genuine gap has a name: a specific skill, a rating…
- Numbers: use ONLY these facts from the article (exact values, no new ones): At that point, the honest options are to escalate the conversation with your sponsor's support, or to test your market value elsewhere — India's average annual increment for existing employees sits around 9.1% for 2026, according to both the Deloitte India Tal
- Alt: Asymmetrical pros-and-cons comparison for “The 3-Signal Delay Check: deliberate delay or…”: This is the question that eats the…; Use The 3-Signal Delay Check to…
- Title attribute: The 3-Signal Delay Check: deliberate delay or genuinely not ready?
- Caption (also keep the key point in the HTML text): This is the question that eats the most time and energy for people stuck at the same level for two or three cycles in a row: is this a real gap, or…
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that slow the promotion down further” #mistakes)
- File: `how-to-get-promoted-faster-india-mistakes-mistakes-slow-promotion-down.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Assuming the work speaks for itself.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Assuming the work speaks for itself. It rarely reaches the calibration room on its own.… / Collecting mentors instead of building a sponsor. Feedback conversations feel productive… / Asking right after calibration has closed. By the time ratings and promotion lists are… / Taking on stretch work without naming the goal. Quietly absorbing more responsibility… / Accepting a vague "not yet" for multiple cycles without asking for specifics. A repeated…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that slow the promotion down further”: Assuming the work speaks for itself.…; Collecting mentors instead of……
- Title attribute: Mistakes that slow the promotion down further
- Caption (also keep the key point in the HTML text): Assuming the work speaks for itself.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/how-to-plan-your-career-path-after-graduation-india/

**H1:** How to Plan Your Career Path After Graduation in India: Direction Over a Fixed Plan  
**Category:** career-guidance · **Words:** 4032 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 18 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “How to Plan Your Career Path After Graduation in India…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/how-to-plan-your-career-path-after-graduation-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“A career path is not…”, “Self-assessment before…”, “Judge your first job by…”, “Test a direction before…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. A page-context image from `src/data/blog-page-context.json` is attached: `how-to-plan-your-career-path-after-graduation-india.webp`. Check it matches the article.
6. 6 authored images on the page (hero + 5 supporting).
7. Desk scenes with one-word labels; path-vs-job illustration is the only conceptual visual.
8. Add a 0-3-6-12 month roadmap and a graduate options comparison.
9. Supporting visuals are mostly scenes/flat-lays with one-word labels. They do not meet “non-hero visuals must primarily explain”.
10. 1 images are over 250 KB: `path-vs-job.webp` (348 KB)

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/plan-after-graduation/cover.webp` | 1600x1000 | 1600x1000 | eager | 13% | ok |
| `career-guidance/plan-after-graduation/path-vs-job.webp` | 1600x1000 | 1600x1000 | lazy | 18% | 348 KB |
| `career-guidance/plan-after-graduation/self-assessment.webp` | 1600x1000 | 1600x1000 | lazy | 21% | ok |
| `career-guidance/plan-after-graduation/direction.webp` | 1600x1000 | 1600x1000 | lazy | 27% | ok |
| `career-guidance/plan-after-graduation/first-job.webp` | 1600x1000 | 1600x1000 | lazy | 33% | ok |
| `career-guidance/plan-after-graduation/test.webp` | 1600x1000 | 1600x1000 | lazy | 44% | ok |

Generic/template images present: 7 category, 3 page-card, 1 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `how-to-plan-your-career-path-after-graduation-india.webp`, `how-to-plan-your-career-path-after-graduation-india-detail.webp`, `how-to-plan-your-career-path-after-graduation-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE 3 supporting visuals (to replace 3 low-information images; remove those images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-to-plan-your-career-path-after-graduation-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to plan your career path after graduation India: honest self-assessment, a flexible 3-5 year direction…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A career path is not the same as a job search / Self-assessment before you plan anything / Setting a 3-5 year direction without over-planning / Judge your first job by what it teaches you / Should you add a further degree or certification before deciding your…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to Plan Your Career Path After Graduation in India: Direction…”
- Title attribute: At a glance: How to Plan Your Career Path After Graduation in India…
- Caption (also keep the key point in the HTML text): How to plan your career path after graduation India: honest self-assessment, a flexible 3-5 year direction, and judging your first job by what it…
**V2 — Linear process chain or roadmap** (place after the H2 “A career path is not the same as a job search” #why-a-plan-is-not-a-job)
- File: `how-to-plan-your-career-path-after-graduation-india-linear-career-path-same-job.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most advice aimed at fresh graduates answers a narrower question than the one they are actually asking.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Most advice aimed at fresh graduates answers a narrower question than the one… / "How do I get hired" is a tactics problem: resumes, portals, referrals… / "How do I plan my career path" is a direction problem: what am I building…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “A career path is not the same as a job search”: Most advice aimed at fresh graduates…; "How do I get hired" is a tactics…; "How…
- Title attribute: A career path is not the same as a job search
- Caption (also keep the key point in the HTML text): Most advice aimed at fresh graduates answers a narrower question than the one they are actually asking.
**V3 — Self-assessment checklist** (place after the H2 “Check the sources behind this” #sources)
- File: `how-to-plan-your-career-path-after-graduation-india-self-check-sources-behind.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Do not take any career article, including this one, on faith.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Self-assessment framework for career planning covering values, interests, and skills.… / John Holland's RIASEC interest-type framework, used by O*NET's official career interest… / John Krumboltz's planned happenstance theory of career decision-making and indecision.… / Research on the changing, non-linear nature of careers and the shift away from fixed… / Randstad's 2025 State of Gen Z workplace research, including India-specific data on…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Check the sources behind this”: Self-assessment framework for career…; John Holland's RIASEC interest-type…; John Krumboltz's planned…
- Title attribute: Check the sources behind this
- Caption (also keep the key point in the HTML text): Do not take any career article, including this one, on faith.
5. Images to replace/remove (lowest information): `path-vs-job.webp`, `self-assessment.webp`, `direction.webp`.
6. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
7. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/purpose-of-career-counseling/

**H1:** The Purpose of Career Counseling: What It Actually Exists to Solve  
**Category:** career-guidance · **Words:** 2867 · **H2 sections:** 13 · **Search priority:** P3 (0 clicks, 6 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “The Purpose of Career Counseling: What It Actually Exists…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/purpose-of-career-counseling*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Where this purpose came…”, “Part 1: an honest…”, “Part 4: a concrete…”, “Why the purpose is…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. A page-context image from `src/data/blog-page-context.json` is attached: `purpose-of-career-counseling.webp`. Check it matches the article.
6. 6 authored images on the page (hero + 5 supporting).
7. Self-map notebook spread is dense, handwritten and unreadable at mobile width.
8. Add a plain three-column "what counselling is / is not" comparison.
9. Supporting visuals are a mix of explanatory graphics and scenes with tiny or dense handwriting; some will not be readable at mobile width.
10. 1 images are over 250 KB: `bridge.webp` (390 KB)
11. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `self-map.webp`: 008. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/purpose-counselling/cover.webp` | 1600x1000 | 1600x1000 | eager | 16% | ok |
| `career-guidance/purpose-counselling/bridge.webp` | 1600x1000 | 1600x1000 | lazy | 21% | 390 KB |
| `career-guidance/purpose-counselling/self-map.webp` | 1600x1000 | 1600x1000 | lazy | 32% | ok |
| `career-guidance/purpose-counselling/market.webp` | 1600x1000 | 1600x1000 | lazy | 35% | ok |
| `career-guidance/purpose-counselling/decision-skill.webp` | 1600x1000 | 1600x1000 | lazy | 39% | ok |
| `career-guidance/purpose-counselling/action.webp` | 1600x1000 | 1600x1000 | lazy | 42% | ok |

Generic/template images present: 7 category, 3 page-card, 1 page-context (positions 85%, 86%, 87%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `purpose-of-career-counseling.webp`, `purpose-of-career-counseling-detail.webp`, `purpose-of-career-counseling-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE 2 supporting visuals (to replace 2 low-information images; remove those images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `purpose-of-career-counseling-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The purpose of career counseling is to close the gap between what you know about yourself and what the job…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The actual problem career counseling exists to solve / Where this purpose came from / The Self-Market Bridge: the 4 things career counseling is built to… / Part 1: an honest, tested self-map / Part 2: a reality check against the actual market
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “The Purpose of Career Counseling: What It Actually Exists to Solve”
- Title attribute: At a glance: The Purpose of Career Counseling: What It Actually…
- Caption (also keep the key point in the HTML text): The purpose of career counseling is to close the gap between what you know about yourself and what the job market actually rewards - not to hand you…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Purpose vs. benefits: why these are different questions” #purpose-vs-benefits)
- File: `purpose-of-career-counseling-asymmetrical-purpose-benefits-these-different.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: It is easy to blur "what is career counseling for" with "what do I get out of it," but they answer different…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): It is easy to blur "what is career counseling for" with "what do I get out of… / Honest take Purpose is structural: it is the specific problem the practice was… / Benefits are personal: they depend on your starting point, how confused or…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Purpose vs. benefits: why these are different questions”: It is easy to blur "what is career…; Honest take Purpose is…
- Title attribute: Purpose vs. benefits: why these are different questions
- Caption (also keep the key point in the HTML text): It is easy to blur "what is career counseling for" with "what do I get out of it," but they answer different things.
5. Images to replace/remove (lowest information): `bridge.webp`, `self-map.webp`.
6. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
7. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/what-career-should-i-choose/

**H1:** What Career Should I Choose? The 5-Step Decision Ladder That Actually Ends the Indecision  
**Category:** career-guidance · **Words:** 3618 · **H2 sections:** 13 · **Search priority:** P3 (0 clicks, 3 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/career-guidance/career-choice-decision-ladder/what-career-should-i-choose-decision-ladder-social.jpg

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 6 authored images on the page (hero + 5 supporting).
2. Hero is a flat-lay graphic of the decision ladder, not a human scene; keep because it is clear, but add a natural hero if desired.
3. All five supporting images are strong text-led infographics.
4. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
5. 5 of 6 images have no title attribute.
6. 1 images have no caption: `what-career-should-i-choose-decision-ladder-1440.webp`

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/career-choice-decision-ladder/what-career-should-i-choose-decision-ladder-1440.webp` | 1440x810 | 1440x811 | eager | 15% | no caption |
| `career-guidance/career-choice-decision-ladder/five-step-career-decision-ladder-1080.webp` | 1080x1350 | 1080x1350 | lazy | 26% | no title attr |
| `career-guidance/career-choice-decision-ladder/hard-constraint-or-fear-career-choice-1080.webp` | 1080x1350 | 1080x1350 | lazy | 40% | no title attr |
| `career-guidance/career-choice-decision-ladder/weighted-career-scorecard-1080.webp` | 1080x1350 | 1080x1350 | lazy | 43% | no title attr |
| `career-guidance/career-choice-decision-ladder/test-the-work-not-the-idea-1080.webp` | 1080x1350 | 1080x1350 | lazy | 52% | no title attr |
| `career-guidance/career-choice-decision-ladder/four-career-choice-traps-1080.webp` | 1080x1350 | 1080x1350 | lazy | 56% | no title attr |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `what-career-should-i-choose-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `what-career-should-i-choose-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of an Indian student or adult at a home desk, a family dining table in the evening. Props that belong to “What Career Should I Choose? The 5-Step Decision Ladder That Actually Ends the…”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: What Career Should I Choose? The 5-Step Decision Ladder That Actually…
- Caption: one sentence tying the scene to the article's decision.
2. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
3. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/what-to-do-after-12th-confused/

**H1:** What to do after 12th if you are confused: break the freeze at your own pace  
**Category:** career-guidance · **Words:** 3576 · **H2 sections:** 12 · **Search priority:** P3 (0 clicks, 3 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “What to do after 12th if you are confused: break the freeze…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/what-to-do-after-12th-confused*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Is it normal to feel…”, “Do I need to know my”, “How fast can I actually…”, “Your unstick plan, step…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. A page-context image from `src/data/blog-page-context.json` is attached: `what-to-do-after-12th-confused.webp`. Check it matches the article.
6. 6 authored images on the page (hero + 5 supporting).
7. "loop" is a good diagram; "exits", "unstick", "gap-year", "proof" are scenes with small handwriting.
8. Supporting visuals are a mix of explanatory graphics and scenes with tiny or dense handwriting; some will not be readable at mobile width.
9. 1 images are over 250 KB: `loop.webp` (261 KB)
10. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `gap-year.webp`: 222. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/after-12th-confused/cover.webp` | 1600x1000 | 1600x1000 | eager | 15% | ok |
| `career-guidance/after-12th-confused/loop.webp` | 1600x1000 | 1600x1000 | lazy | 20% | 261 KB |
| `career-guidance/after-12th-confused/exits.webp` | 1600x1000 | 1600x1000 | lazy | 31% | ok |
| `career-guidance/after-12th-confused/unstick.webp` | 1600x1000 | 1600x1000 | lazy | 36% | ok |
| `career-guidance/after-12th-confused/gap-year.webp` | 1600x1000 | 1600x1000 | lazy | 41% | ok |
| `career-guidance/after-12th-confused/proof.webp` | 1600x1000 | 1600x1000 | lazy | 46% | ok |

Generic/template images present: 7 category, 3 page-card, 1 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `what-to-do-after-12th-confused.webp`, `what-to-do-after-12th-confused-detail.webp`, `what-to-do-after-12th-confused-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE 2 supporting visuals (to replace 2 low-information images; remove those images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `what-to-do-after-12th-confused-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: What to do after 12th confused starts with one honest fact: you do not need the one correct career today, you…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why you are actually confused (it is not a personality flaw) / The Confusion Loop: the exact cycle that keeps you stuck / The 3-Exit Protocol: how to break the loop this week / Your unstick plan, step by step / Should you take a gap year if you are this confused?
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “What to do after 12th if you are confused: break the freeze at your…”
- Title attribute: At a glance: What to do after 12th if you are confused: break the…
- Caption (also keep the key point in the HTML text): What to do after 12th confused starts with one honest fact: you do not need the one correct career today, you need a short, testable direction and…
**V2 — Comparison table** (place after the H2 “Why you are actually confused (it is not a personality flaw)”)
- File: `what-to-do-after-12th-confused-comparison-actually-confused-personality-flaw.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Confusion after 12th feels personal.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Signal | What it shows / Row: ~70% of Indian students… | report feeling confused… / Row: 93%+ of students | can name 10 careers or… / Row: ~1 counsellor per 3,000… | is India's real ratio… / Row: Only ~10% of students | in a large multi-state… / The scale of the problem, in numbers
- Numbers: use ONLY these facts from the article (exact values, no new ones): The scale of the problem, in numbers Signal What it shows ~70% of Indian students and professionals report feeling confused about their career choice at some point. | 93%+ of students can name 10 careers or fewer, out of 250+ that realistically exist. | Only ~10% of students in a large multi-state survey had received real professional career guidance.
- Alt: Comparison table for “Why you are actually confused (it is not a personality…”: Signal | What it shows; ~70% of Indian students… | report…; 93%+ of students | can…
- Title attribute: Why you are actually confused (it is not a personality flaw)
- Caption (also keep the key point in the HTML text): Confusion after 12th feels personal.
5. Images to replace/remove (lowest information): `loop.webp`, `exits.webp`.
6. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
7. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/career-guidance/why-career-counseling-is-important/

**H1:** Why Career Counseling Is Important — What Skipping It Actually Costs You  
**Category:** career-guidance · **Words:** 2772 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 6 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 13 other articles, with identical alt text and captions, so they say nothing specific about “Why Career Counseling Is Important — What Skipping It…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/career-guidance/why-career-counseling-is-important*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The wellbeing cost of…”, “Who is carrying this…”, “What actually lowers…”, “Check the sources…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. A page-context image from `src/data/blog-page-context.json` is attached: `why-career-counseling-is-important.webp`. Check it matches the article.
6. 6 authored images on the page (hero + 5 supporting).
7. Mostly family scenes; the three-questions card is the only explanatory visual.
8. Add a cost-of-guessing comparison and a before/after decision visual.
9. Supporting visuals are mostly scenes/flat-lays with one-word labels. They do not meet “non-hero visuals must primarily explain”.
10. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `blind-cost.webp`: 156. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `career-guidance/counselling-importance/cover.webp` | 1600x1000 | 1600x1000 | eager | 16% | ok |
| `career-guidance/counselling-importance/blind-cost.webp` | 1600x1000 | 1600x1000 | lazy | 21% | ok |
| `career-guidance/counselling-importance/wellbeing.webp` | 1600x1000 | 1600x1000 | lazy | 30% | ok |
| `career-guidance/counselling-importance/three-questions.webp` | 1600x1000 | 1600x1000 | lazy | 38% | ok |
| `career-guidance/counselling-importance/who-risk.webp` | 1600x1000 | 1600x1000 | lazy | 44% | ok |
| `career-guidance/counselling-importance/risk-lower.webp` | 1600x1000 | 1600x1000 | lazy | 48% | ok |

Generic/template images present: 7 category, 3 page-card, 1 page-context (positions 85%, 86%, 87%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `career-guidance-editorial-cover.webp`, `career-guidance-context.webp`, `career-guidance-framework.webp`, `career-guidance-conversation.webp`, `career-guidance-experiment.webp`, `career-guidance-evidence.webp`, `career-guidance-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `why-career-counseling-is-important.webp`, `why-career-counseling-is-important-detail.webp`, `why-career-counseling-is-important-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE 3 supporting visuals (to replace 3 low-information images; remove those images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `why-career-counseling-is-important-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Why career counseling is important: the real cost of skipping it - wasted years, career mismatch, lower…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What actually happens when this decision gets made blind / The economic case: what a mismatch costs beyond one person / The wellbeing cost of staying undecided / How common the blind decision actually is in India / Why the stakes are higher than they were a decade ago
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Why Career Counseling Is Important — What Skipping It Actually Costs…”
- Title attribute: At a glance: Why Career Counseling Is Important — What Skipping It…
- Caption (also keep the key point in the HTML text): Why career counseling is important: the real cost of skipping it - wasted years, career mismatch, lower wellbeing - backed by India-specific data on…
**V2 — Comparison table** (place after the H2 “The economic case: what a mismatch costs beyond one person” #economic-case)
- File: `why-career-counseling-is-important-comparison-economic-case-mismatch-costs.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is where the importance question stops being only personal.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Signal | What the data shows | Why it matters for… / Row: Graduate employability | Industry employability… | A credential without a… / Row: Workplace wellbeing | Gallup's 2024 State of… | A person who lands in the… / Row: Skills mismatch… | The ILO documents that… | This is not only a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Workplace wellbeing Gallup's 2024 State of the Global Workplace found only 14% of employees in India describe themselves as thriving, versus 34% globally.
- Alt: Comparison table for “The economic case: what a mismatch costs beyond one…”: Signal | What the data shows | Why it…; Graduate employability | Industry…; Workplace…
- Title attribute: The economic case: what a mismatch costs beyond one person
- Caption (also keep the key point in the HTML text): This is where the importance question stops being only personal.
**V3 — Self-assessment checklist** (place after the H2 “Check the sources behind these claims” #sources)
- File: `why-career-counseling-is-important-self-check-sources-behind-these.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Do not trust any single career article blindly, including this one.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): UN-linked study on career guidance access across 21,239 Indian students, grades 9-12. ETV… / UNICEF Bharat Career Aspiration Report 2024, nearly 5,000 students across 25 states.… / Graduate employability findings referenced in India Skills Report and NASSCOM industry… / Gallup State of the Global Workplace 2024, India employee wellbeing data. Gallup: State… / Skills mismatch and its economic consequences. International Labour Organization: skills…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Check the sources behind these claims”: UN-linked study on career guidance…; UNICEF Bharat Career Aspiration…; Graduate employability…
- Title attribute: Check the sources behind these claims
- Caption (also keep the key point in the HTML text): Do not trust any single career article blindly, including this one.
5. Images to replace/remove (lowest information): `blind-cost.webp`, `wellbeing.webp`, `three-questions.webp`.
6. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
7. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
