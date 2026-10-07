# Image audit — blog category: ai-future

17 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/ai-future/ai-impact-on-it-jobs-india/

**H1:** AI impact on IT jobs India: what is actually shrinking and what is not  
**Category:** ai-future · **Words:** 3327 · **H2 sections:** 12 · **Search priority:** P1 (5 clicks, 128 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “AI impact on IT jobs India: what is actually shrinking and…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/ai-impact-on-it-jobs-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The real picture, not…”, “Why the IT services…”, “Job categories that are…”, “Job categories that are…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 86%, 87%, 88%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `ai-impact-on-it-jobs-india.webp`, `ai-impact-on-it-jobs-india-detail.webp`, `ai-impact-on-it-jobs-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `ai-impact-on-it-jobs-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `ai-impact-on-it-jobs-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a learner at a laptop with a small project, a school or college corridor bench. Props that belong to “AI impact on IT jobs India: what is actually shrinking and what is not”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: AI impact on IT jobs India: what is actually shrinking and what is not
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `ai-impact-on-it-jobs-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: AI impact on IT jobs India is real but uneven: entry-level testing, L1 support, and routine coding are…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The real picture, not the panic version / Why the Indian IT services pyramid is breaking / IT job categories that are shrinking / IT job categories that are gaining ground / How Indian IT services companies are restructuring hiring
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “AI impact on IT jobs India: what is actually shrinking and what is not”
- Title attribute: At a glance: AI impact on IT jobs India: what is actually shrinking…
- Caption (also keep the key point in the HTML text): AI impact on IT jobs India is real but uneven: entry-level testing, L1 support, and routine coding are shrinking, while AI oversight, systems design…
**V2 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “The numbers behind the shift” #numbers)
- File: `ai-impact-on-it-jobs-india-stat-numbers-behind-shift.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A few concrete, India-specific signals are worth naming directly instead of staying vague.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What is contracting / What is expanding / Fresher hiring across major Indian IT services firms fell sharply after the 2021-22… / TCS reported roughly 607,000 employees in FY2025, a net reduction of around 13,000 from… / Analysts tracking the sector describe 2026 fresher intake at major firms as meaningfully… / AI-linked hiring in India is projected to grow strongly year on year, with machine… / India's AI-related job demand is projected to cross roughly one million roles, even as…
- Numbers: use ONLY these facts from the article (exact values, no new ones): TCS reported roughly 607,000 employees in FY2025, a net reduction of around 13,000 from the prior year; Infosys reported roughly 324,000 employees, down around 15,000 year on year.
- Alt: Stat panel or bar chart (only the numbers listed) for “The numbers behind the shift”: What is contracting; What is expanding; Fresher hiring across major Indian IT…
- Title attribute: The numbers behind the shift
- Caption (also keep the key point in the HTML text): A few concrete, India-specific signals are worth naming directly instead of staying vague.
**V3 — Decision tree by situation** (place after the H2 “If you are already working in IT” #in-it)
- File: `ai-impact-on-it-jobs-india-decision-already-working.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The practical move is the same across almost every role: shift from pure execution toward the judgment layer…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The practical move is the same across almost every role: shift from pure… / If you are in testing or QA Move from manual test execution toward test… / Learn to direct and validate AI testing tools rather than compete with them on…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree by situation for “If you are already working in IT”: The practical move is the same across…; If you are in testing or QA Move from…; Learn to direct…
- Title attribute: If you are already working in IT
- Caption (also keep the key point in the HTML text): The practical move is the same across almost every role: shift from pure execution toward the judgment layer sitting just above it, inside the same…
**V4 — Mistakes versus smarter move panel** (place after the H2 “Mistakes to avoid” #mistakes)
- File: `ai-impact-on-it-jobs-india-mistakes-mistakes-avoid.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Treating "AI will take IT jobs" as one flat statement The honest picture is uneven: routine execution work…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Treating "AI will take IT jobs" as one flat statement / Assuming a CS degree alone still guarantees an IT job / Waiting passively for your company to reskill you / Panicking out of IT entirely without checking your actual lane / Ignoring non-IT-services parts of the tech ecosystem
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes to avoid”: Treating "AI will take IT jobs" as…; Assuming a CS degree alone still…; Waiting passively for your…
- Title attribute: Mistakes to avoid
- Caption (also keep the key point in the HTML text): 01 Treating "AI will take IT jobs" as one flat statement The honest picture is uneven: routine execution work is shrinking while judgment-heavy and…
**V5 — Linear next-step plan** (place after the H2 “What to do next” #next-step)
- File: `ai-impact-on-it-jobs-india-linear-next.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Do not treat this as a one-time decision you make and forget.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Read Is software engineering a good career in India? if your specific question is about… / Read Top careers for the future if you want to compare IT against other rising fields… / Use the Career & Skills Compass if you want a clearer read on your natural strengths… / If you want guided help mapping your specific situation, current role, skills, and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear next-step plan for “What to do next”: Read Is software engineering a good…; Read Top careers for the future if…; Use the Career & Skills Compass if…
- Title attribute: What to do next
- Caption (also keep the key point in the HTML text): Do not treat this as a one-time decision you make and forget.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/best-career-paths-for-the-next-10-years/

**H1:** Best career paths for the next 10 years — what the data actually says  
**Category:** ai-future · **Words:** 7436 · **H2 sections:** 17 · **Search priority:** P1 (21 clicks, 2261 impressions)  
**Status: AMBER — AUTHORED + GENERIC EXTRAS** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “Best career paths for the next 10 years — what the data…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/best-career-paths-for-the-next-10-years*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Why generic lists fail”, “Forces reshaping jobs…”, “8 strongest career paths”, “Growth and salary data”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.
5. 6 authored images on the page (hero + 5 supporting).
6. Five supporting images are photographed paper cards with one-word labels (forces, path map, routine vs judgment, checkpoint, proof stack). They look editorial but teach very little.
7. Replace at least three with text-led infographics (sector-by-sector comparison, decline-vs-pivot table, proof-stack steps).
8. Supporting visuals are mostly scenes/flat-lays with one-word labels. They do not meet “non-hero visuals must primarily explain”.
9. 6 images have width/height attributes that do not match the real file ratio (e.g. `best-career-paths-for-the-next-10-years-cover.webp` attr 1600x1000 vs file 1600x800); this reserves the wrong space and can cause layout shift.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `ai-future/best-career-paths-for-the-next-10-years/best-career-paths-for-the-next-10-years-cover.webp` | 1600x800 | 1600x1000 | eager | 7% | width/height attributes do not match the file |
| `ai-future/best-career-paths-for-the-next-10-years/best-career-paths-for-the-next-10-years-forces.webp` | 1600x800 | 1600x1000 | lazy | 11% | width/height attributes do not match the file |
| `ai-future/best-career-paths-for-the-next-10-years/best-career-paths-for-the-next-10-years-path-map.webp` | 1536x1024 | 1600x1000 | lazy | 14% | width/height attributes do not match the file |
| `ai-future/best-career-paths-for-the-next-10-years/best-career-paths-for-the-next-10-years-decline-pivot.webp` | 1536x1024 | 1600x1000 | lazy | 54% | width/height attributes do not match the file |
| `ai-future/best-career-paths-for-the-next-10-years/best-career-paths-for-the-next-10-years-checkpoint.webp` | 1536x1024 | 1600x1000 | lazy | 64% | width/height attributes do not match the file |
| `ai-future/best-career-paths-for-the-next-10-years/best-career-paths-for-the-next-10-years-proof-stack.webp` | 1536x1024 | 1600x1000 | lazy | 68% | width/height attributes do not match the file |

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 94%, 95%, 95%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-career-paths-for-the-next-10-years.webp`, `best-career-paths-for-the-next-10-years-detail.webp`, `best-career-paths-for-the-next-10-years-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE 5 supporting visuals (2 to reach the target + 3 to replace low-information images):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-career-paths-for-the-next-10-years-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Best career paths for the next 10 years span AI, cybersecurity, healthcare, clean energy, and FinTech.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why most "best career" lists fail you / The 5 forces reshaping the job market by 2030 / The 8 best career paths for the next 10 years — with honest… / Growth and salary data — all 8 paths compared / Specific job titles you can actually search for — by career cluster
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best career paths for the next 10 years — what the data actually says”
- Title attribute: At a glance: Best career paths for the next 10 years — what the data…
- Caption (also keep the key point in the HTML text): Best career paths for the next 10 years span AI, cybersecurity, healthcare, clean energy, and FinTech.
**V2 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “India demand signals — what the numbers say right now”)
- File: `best-career-paths-for-the-next-10-years-stat-india-demand-signals-numbers.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Global projections matter, but the India job market has its own dynamics.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Global projections matter, but the India job market has its own dynamics. / Here is what current data shows across the 6 strongest sectors for Indian… / AI and tech 34% surge in AI job postings in January 2026 alone (Naukri).
- Numbers: use ONLY these facts from the article (exact values, no new ones): AI and tech 34% surge in AI job postings in January 2026 alone (Naukri). | India's AI talent is growing from 4.16 lakh professionals in 2023 to a projected 10 lakh by 2026. | AI engineers command ₹18–40 LPA, with prompt engineering roles showing 100% year-on-year growth.
- Alt: Stat panel or bar chart (only the numbers listed) for “India demand signals — what the numbers say right now”: Global projections matter, but the…; Here is what…
- Title attribute: India demand signals — what the numbers say right now
- Caption (also keep the key point in the HTML text): Global projections matter, but the India job market has its own dynamics.
**V3 — Comparison table** (place after the H2 “How long does it realistically take — entry point and time to income”)
- File: `best-career-paths-for-the-next-10-years-comparison-long-realistically-take-entry.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: One of the most common questions people do not ask clearly enough: how long will it actually take to earn…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Career path | Entry point | Months to first paid… | Time to ₹10 LPA+ in… / Row: AI and ML roles | Python/SQL + 1 real… | 6–12 months | 2–4 years / Row: Cybersecurity | CompTIA Security+ + lab… | 3–8 months | 2–3 years / Row: Software development | Portfolio of 2–3 real… | 4–9 months | 2–4 years / Row: Healthcare — clinical | Degree or diploma… | 36–60+ months | 5+ years / Row: Healthcare — non-clinical | Domain cert + data/ops… | 8–16 months | 3–5 years
- Numbers: use ONLY these facts from the article (exact values, no new ones): The table below gives honest minimum timelines from starting skill-building to first paid role, and the typical time to reach ₹10 LPA+ in India. | Career path Entry point Months to first paid role Time to ₹10 LPA+ in India Notes AI and ML roles Python/SQL + 1 real project 6–12 months 2–4 years Faster with engineering/math background. | Cybersecurity CompTIA Security+ + lab practice 3–8 months 2–3 years Industry certs are standard entry tickets.
- Alt: Comparison table for “How long does it realistically take — entry point and…”: Career path | Entry point | Months to…; AI and ML roles | Python/SQL + 1……
- Title attribute: How long does it realistically take — entry point and time to income
- Caption (also keep the key point in the HTML text): One of the most common questions people do not ask clearly enough: how long will it actually take to earn from this field?
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Degrees vs skills — what actually matters in 2025 and beyond”)
- File: `best-career-paths-for-the-next-10-years-asymmetrical-degrees-skills-actually-matters.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The degrees-vs-skills debate is often framed as an either/or.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): When a degree still matters / When skills and proof beat a degree / Clinical medicine — MBBS, MD, and specialty qualifications are non-negotiable legally and… / Law — an LLB is a regulatory requirement in every major jurisdiction. / Nursing and allied health (licensed) — licensure requires specific degree or diploma… / Civil and structural engineering — large infrastructure projects often require PE… / Academic research — a PhD remains the standard entry ticket in research-only roles.
- Numbers: use ONLY these facts from the article (exact values, no new ones): The degree ROI calculation changes when comparing a ₹3 lakh state college degree to a ₹50 lakh MBA in the same field.
- Alt: Asymmetrical pros-and-cons comparison for “Degrees vs skills — what actually matters in 2025 and…”: When a degree still matters; When skills and proof beat a…
- Title attribute: Degrees vs skills — what actually matters in 2025 and beyond
- Caption (also keep the key point in the HTML text): The degrees-vs-skills debate is often framed as an either/or.
**V5 — Linear next-step plan** (place after the H2 “What to do next — the practical starting point”)
- File: `best-career-paths-for-the-next-10-years-linear-next-practical-starting-point.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: You have read the data.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Related reading / Run the 4-Checkpoint Protocol on the 2–3 paths that interest you most. Score each one… / Identify the specific entry role in your chosen path — not the sector. "AI" is not an… / Take a skills and career assessment before spending money on courses or degrees. A good… / Build Gate 1 proof at your own pace. Choose one real project in your target field.… / If you want a structured path with accountability, consider continuous guidance. A single…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear next-step plan for “What to do next — the practical starting point”: Related reading; Run the 4-Checkpoint Protocol on the…; Identify the specific entry role…
- Title attribute: What to do next — the practical starting point
- Caption (also keep the key point in the HTML text): You have read the data.
5. Images to replace/remove (lowest information): `best-career-paths-for-the-next-10-years-forces.webp`, `best-career-paths-for-the-next-10-years-path-map.webp`, `best-career-paths-for-the-next-10-years-decline-pivot.webp`.
6. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
7. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 7 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/jobs-ai-cannot-replace-india/

**H1:** Jobs AI Cannot Replace in India: 15 Roles With the Strongest Evidence Right Now  
**Category:** ai-future · **Words:** 2226 · **H2 sections:** 9 · **Search priority:** P1 (2 clicks, 196 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “Jobs AI Cannot Replace in India: 15 Roles With the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/jobs-ai-cannot-replace-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Why a named list is…”, “Hands-on healthcare and…”, “Skilled trades”, “Early-years and…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 84%, 85%, 86%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `jobs-ai-cannot-replace-india.webp`, `jobs-ai-cannot-replace-india-detail.webp`, `jobs-ai-cannot-replace-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `jobs-ai-cannot-replace-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `jobs-ai-cannot-replace-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a learner at a laptop with a small project, a classroom desk after hours. Props that belong to “Jobs AI Cannot Replace in India: 15 Roles With the Strongest Evidence Right Now”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Jobs AI Cannot Replace in India: 15 Roles With the Strongest Evidence…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `jobs-ai-cannot-replace-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Jobs AI cannot replace in India, named role by role: nurses, electricians, therapists, early-years teachers…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why a named list, not just a framework, is useful here / Hands-on healthcare and care roles / Skilled trades / Early-years and special-needs education / Licensed accountability and live human-trust roles
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Jobs AI Cannot Replace in India: 15 Roles With the Strongest Evidence…”
- Title attribute: At a glance: Jobs AI Cannot Replace in India: 15 Roles With the…
- Caption (also keep the key point in the HTML text): Jobs AI cannot replace in India, named role by role: nurses, electricians, therapists, early-years teachers, and licensed accountability roles…
**V2 — Skill map** (place after the H2 “Skilled trades” #trades-roles)
- File: `jobs-ai-cannot-replace-india-skill-skilled-trades.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every trade below involves diagnosing a physical problem inside a space that is never quite standard.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Every trade below involves diagnosing a physical problem inside a space that is… / That variability is precisely what current robotics and AI struggle with, even… / Electrician Wiring faults, panel upgrades, and safety checks depend on reading…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Skill map for “Skilled trades”: Every trade below involves diagnosing…; That variability is precisely what…; Electrician Wiring faults, panel…
- Title attribute: Skilled trades
- Caption (also keep the key point in the HTML text): Every trade below involves diagnosing a physical problem inside a space that is never quite standard.
**V3 — Chronological timeline** (place after the H2 “Early-years and special-needs education” #education-roles)
- File: `jobs-ai-cannot-replace-india-chronological-early-years-special-needs.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Two specific teaching roles hold up better than general classroom teaching, because both depend on constant…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Two specific teaching roles hold up better than general classroom teaching… / Preschool and early-years teacher Teaching a 4-year-old to hold a pencil, share… / No screen-based tool can supervise a room of small children or read a child's…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “Early-years and special-needs education”: Two specific teaching roles hold up…; Preschool and early-years teacher…; No screen-based tool…
- Title attribute: Early-years and special-needs education
- Caption (also keep the key point in the HTML text): Two specific teaching roles hold up better than general classroom teaching, because both depend on constant, real-time, person-by-person adjustment…
**V4 — Comparison table** (place after the H2 “Role, reason, and India signal at a glance” #table)
- File: `jobs-ai-cannot-replace-india-comparison-role-reason-india-signal.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Role Core reason it resists AI Current India signal Registered nurse Bedside presence, licensed judgment ~1.9…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Role | Core reason it… | Current India signal / Row: Registered nurse | Bedside presence… | ~1.9 nurses per 1,000… / Row: Electrician / plumber /… | Site-specific physical… | Flagged among trades… / Row: Special educator | Real-time, child-by-child… | Large, persistent gap… / Row: Lawyer (courtroom /… | Personal licence and… | Bar-council… / Row: Chartered accountant… | Named signature carries… | Regulator requires a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Role, reason, and India signal at a glance”: Role | Core reason it… | Current…; Registered nurse | Bedside presence……; Electrician / plumber…
- Title attribute: Role, reason, and India signal at a glance
- Caption (also keep the key point in the HTML text): Role Core reason it resists AI Current India signal Registered nurse Bedside presence, licensed judgment ~1.9 nurses per 1,000 people vs…
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes to avoid when picking from a list like this” #mistakes)
- File: `jobs-ai-cannot-replace-india-mistakes-mistakes-avoid-picking-list.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Picking a title without checking which layer of the role you would enter Every role on this list has a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Picking a title without checking which layer of the role you would… / Assuming "AI cannot replace this today" means the role never changes / Choosing a licensed path purely for AI-safety without checking the… / Treating skilled trades as a last resort instead of a genuine career / Ignoring proof of skill because the field has a shortage
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes to avoid when picking from a list like this”: Picking a title without checking…; Assuming "AI cannot replace this……
- Title attribute: Mistakes to avoid when picking from a list like this
- Caption (also keep the key point in the HTML text): 01 Picking a title without checking which layer of the role you would enter Every role on this list has a routine entry layer and a judgment-carrying…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/ai-and-human-skills-needed-india/

**H1:** AI and Human Skills Needed in India: What's Rising and What's Falling  
**Category:** ai-future · **Words:** 2949 · **H2 sections:** 13 · **Search priority:** P2 (0 clicks, 33 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/ai-future/ai-and-human-skills-needed-india/ai-human-skills-needed-india-cover.webp

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 6 authored images on the page (hero + 5 supporting).
2. Hero is a small illustrated notebook spread, not a natural human scene; acceptable but weakest image on the page.
3. Infographics carry many statistics (24%, 54.81%, 290,000+, 51%, 64%, 60-73%, 84% Maharashtra, 1 million). Each must be traced to a cited source.
4. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
5. 6 of 6 images have no title attribute.
6. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `india-skills-demand-supply-employability.webp`: 94.81%. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `ai-future/ai-and-human-skills-needed-india/ai-human-skills-needed-india-cover.webp` | 1600x900 | 1600x900 | eager | 16% | no title attr |
| `ai-future/ai-and-human-skills-needed-india/skills-demand-shift-snapshot-india.webp` | 1122x1402 | 1122x1402 | lazy | 28% | no title attr |
| `ai-future/ai-and-human-skills-needed-india/rising-skills-global-wef-2030.webp` | 1122x1402 | 1122x1402 | lazy | 36% | no title attr |
| `ai-future/ai-and-human-skills-needed-india/declining-skills-workplace-differentiators.webp` | 1122x1402 | 1122x1402 | lazy | 43% | no title attr |
| `ai-future/ai-and-human-skills-needed-india/india-skills-demand-supply-employability.webp` | 1122x1402 | 1122x1402 | lazy | 48% | no title attr |
| `ai-future/ai-and-human-skills-needed-india/global-vs-india-skills-demand-comparison.webp` | 1122x1402 | 1122x1402 | lazy | 52% | no title attr |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `ai-and-human-skills-needed-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `ai-and-human-skills-needed-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a learner at a laptop with a small project, a family dining table in the evening. Props that belong to “AI and Human Skills Needed in India: What's Rising and What's Falling”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: AI and Human Skills Needed in India: What's Rising and What's Falling
- Caption: one sentence tying the scene to the article's decision.
2. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
3. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/careers-that-will-survive-ai-india/

**H1:** Careers that will survive AI in India: the four kinds of work automation cannot easily take  
**Category:** ai-future · **Words:** 2267 · **H2 sections:** 9 · **Search priority:** P2 (0 clicks, 56 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/ai-future/careers-that-will-survive-ai-india/careers-that-will-survive-ai-cover.webp

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 5 authored images on the page (hero + 4 supporting).
2. Hero is a four-person illustrated collage; acceptable.
3. Verify statistics on the entry-level image (20-25% decline, IT services 7.5-8M to 6M by 2031, customer experience 2-2.5M to 1.8M).
4. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
5. 5 of 5 images have no title attribute.
6. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `careers-stable-but-entry-level-eroding.webp`: 1.80. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `ai-future/careers-that-will-survive-ai-india/careers-that-will-survive-ai-cover.webp` | 1600x900 | 1600x900 | eager | 21% | no title attr |
| `ai-future/careers-that-will-survive-ai-india/four-kinds-of-work-ai-struggles-to-replace.webp` | 1122x1402 | 1122x1402 | lazy | 33% | no title attr |
| `ai-future/careers-that-will-survive-ai-india/careers-stable-but-entry-level-eroding.webp` | 1122x1402 | 1122x1402 | lazy | 46% | no title attr |
| `ai-future/careers-that-will-survive-ai-india/automation-resistant-vs-absorbed-work.webp` | 1122x1402 | 1122x1402 | lazy | 61% | no title attr |
| `ai-future/careers-that-will-survive-ai-india/four-filter-career-check.webp` | 1122x1402 | 1122x1402 | lazy | 66% | no title attr |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `careers-that-will-survive-ai-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `careers-that-will-survive-ai-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a learner at a laptop with a small project, a school or college corridor bench. Props that belong to “Careers that will survive AI in India: the four kinds of work automation cannot…”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Careers that will survive AI in India: the four kinds of work…
- Caption: one sentence tying the scene to the article's decision.
2. CREATE 1 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `careers-that-will-survive-ai-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Careers that will survive AI in India share four traits: physical dexterity, deep human trust, legal…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "which jobs will AI replace" is the wrong question / The four structural patterns that resist automation / What this looks like inside the Indian job market / Careers that look safe today but are quietly eroding / A structural comparison
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Careers that will survive AI in India: the four kinds of work…”
- Title attribute: At a glance: Careers that will survive AI in India: the four kinds of…
- Caption (also keep the key point in the HTML text): Careers that will survive AI in India share four traits: physical dexterity, deep human trust, legal accountability, or genuine creative judgment.
3. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
4. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/data-analyst-vs-ai-engineer-career-india/

**H1:** Data analyst vs AI engineer career India: the real entry-barrier gap  
**Category:** ai-future · **Words:** 4654 · **H2 sections:** 13 · **Search priority:** P2 (0 clicks, 112 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “Data analyst vs AI engineer career India: the real…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/data-analyst-vs-ai-engineer-career-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Data Analyst”, “Ai Engineer Career India”, “The short answer”, “The entry-barrier gap…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `data-analyst-vs-ai-engineer-career-india.webp`, `data-analyst-vs-ai-engineer-career-india-detail.webp`, `data-analyst-vs-ai-engineer-career-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `data-analyst-vs-ai-engineer-career-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `data-analyst-vs-ai-engineer-career-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a learner at a laptop with a small project, a quiet public library table. Props that belong to “Data analyst vs AI engineer career India: the real entry-barrier gap”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Data analyst vs AI engineer career India: the real entry-barrier gap
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `data-analyst-vs-ai-engineer-career-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Data analyst vs AI engineer career India compared on entry barrier, daily work, salary ceiling, and a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to data analyst vs AI engineer career India / The entry-barrier gap, honestly / What the daily work actually looks like in each career / Skills and tools compared / Salary and career ceiling: fresher to senior
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Data analyst vs AI engineer career India: the real entry-barrier gap”
- Title attribute: At a glance: Data analyst vs AI engineer career India: the real…
- Caption (also keep the key point in the HTML text): Data analyst vs AI engineer career India compared on entry barrier, daily work, salary ceiling, and a realistic path from one role into the other.
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to data analyst vs AI engineer career India” #short-answer)
- File: `data-analyst-vs-ai-engineer-career-india-asymmetrical-short-answer-data-analyst.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no universal winner here, and any comparison that hands you one has not actually looked at how…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): There is no universal winner here, and any comparison that hands you one has… / Data analytics wins on entry accessibility: it accepts commerce, economics… / AI engineering wins on long-term pay ceiling and technical leverage: it pays…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to data analyst vs AI engineer career…”: There is no universal winner here…; Data analytics wins on…
- Title attribute: The short answer to data analyst vs AI engineer career India
- Caption (also keep the key point in the HTML text): There is no universal winner here, and any comparison that hands you one has not actually looked at how differently these two roles start out.
**V3 — Comparison table** (place after the H2 “The entry-barrier gap, honestly” #entry-barrier)
- File: `data-analyst-vs-ai-engineer-career-india-comparison-entry-barrier-gap-honestly.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the part most "which career is better" articles skip entirely, and it is the part that should…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Entry factor | Data analyst | AI engineer / Row: What gets you shortlisted… | A working knowledge of… | Python fluency, working… / Row: Typical degree background… | Very wide. Commerce… | Narrower. Computer… / Row: Math and coding depth… | Comfortable spreadsheet… | Working knowledge of… / Row: How long a genuine… | Some data analysts land… | Most genuine beginners… / Row: What one weak project… | A thin project (a… | A thin project (a copied…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Industry job-description trackers currently describe AI engineering demand in India growing at roughly 40% year on year, while the pool of genuinely qualified candidates grows at closer to half that rate.
- Alt: Comparison table for “The entry-barrier gap, honestly”: Entry factor | Data analyst | AI…; What gets you shortlisted… | A…; Typical degree background… | Very…
- Title attribute: The entry-barrier gap, honestly
- Caption (also keep the key point in the HTML text): This is the part most "which career is better" articles skip entirely, and it is the part that should actually shape your first move.
**V4 — Comparison table** (place after the H2 “Salary and career ceiling: fresher to senior” #salary-ceiling)
- File: `data-analyst-vs-ai-engineer-career-india-comparison-salary-career-ceiling-fresher.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary pages for this exact comparison tend to quote whichever role's best-case numbers fit their narrative.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Career stage | Data analyst | AI engineer / Row: Fresher, 0-2 years | Roughly Rs 3.5-6 LPA for… | Roughly Rs 6-12 LPA, with… / Row: 3-6 years, mid-level | Roughly Rs 9-14 LPA at… | Roughly Rs 15-22 LPA… / Row: 6-10 years, senior | Roughly Rs 14-22 LPA on… | Roughly Rs 30-60 LPA at… / Row: What moves the number most | How much of the business… | Real deployment…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Career stage Data analyst AI engineer Fresher, 0-2 years Roughly Rs 3.5-6 LPA for a first role, with strong SQL, Python, and a real portfolio project pushing candidates toward the Rs 6-8 LPA range at better employers. | Roughly Rs 6-12 LPA, with candidates who show a genuinely deployed project (not just a notebook) clearing the higher end at product companies and AI-first startups. | 3-6 years, mid-level Roughly Rs 9-14 LPA at the national average, with data analysts who add SQL depth, storytelling skill, and stakeholder trust moving faster than the average.
- Alt: Comparison table for “Salary and career ceiling: fresher to senior”: Career stage | Data analyst | AI…; Fresher, 0-2 years | Roughly Rs 3.5-6…; 3-6 years, mid-level…
- Title attribute: Salary and career ceiling: fresher to senior
- Caption (also keep the key point in the HTML text): Salary pages for this exact comparison tend to quote whichever role's best-case numbers fit their narrative.
**V5 — Linear process chain or roadmap** (place after the H2 “Use The 4-Checkpoint Protocol before you commit to either path” #checkpoint)
- File: `data-analyst-vs-ai-engineer-career-india-linear-use-checkpoint-protocol-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A salary chart cannot tell you which one fits your actual situation and current skill floor.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A salary chart cannot tell you which one fits your actual situation and current… / The 4-Checkpoint Protocol narrows this decision to what genuinely matters for… / 01 Biology Data analytics rewards people who get real satisfaction from finding…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Use The 4-Checkpoint Protocol before you commit to…”: A salary chart cannot tell you which…; The 4-Checkpoint Protocol…
- Title attribute: Use The 4-Checkpoint Protocol before you commit to either path
- Caption (also keep the key point in the HTML text): A salary chart cannot tell you which one fits your actual situation and current skill floor.
**V6 — Decision tree by situation** (place after the H2 “Who can realistically aim at AI engineering directly” #who-fits-ai)
- File: `data-analyst-vs-ai-engineer-career-india-decision-who-realistically-aim-engineering.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Genuine fit You already code, or you are genuinely willing to close that gap first AI engineering is closer…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Genuine fit You already code, or you are genuinely willing to close that gap… / If writing, testing, and debugging real code already feels natural, or you are… / Genuine fit You want to build systems, not just explain numbers If the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree by situation for “Who can realistically aim at AI engineering directly”: Genuine fit You already code, or you…; If writing, testing, and debugging……
- Title attribute: Who can realistically aim at AI engineering directly
- Caption (also keep the key point in the HTML text): Genuine fit You already code, or you are genuinely willing to close that gap first AI engineering is closer to software engineering than to…

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/machine-learning-vs-data-science-career-path-india/

**H1:** Machine learning vs data science career path India: the honest head-to-head  
**Category:** ai-future · **Words:** 5031 · **H2 sections:** 16 · **Search priority:** P2 (0 clicks, 57 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “Machine learning vs data science career path India: the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/machine-learning-vs-data-science-career-path-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Machine Learning”, “Data Science Career…”, “The short answer”, “What the daily work…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `machine-learning-vs-data-science-career-path-india.webp`, `machine-learning-vs-data-science-career-path-india-detail.webp`, `machine-learning-vs-data-science-career-path-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `machine-learning-vs-data-science-career-path-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `machine-learning-vs-data-science-career-path-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a learner at a laptop with a small project, a school or college corridor bench. Props that belong to “Machine learning vs data science career path India: the honest head-to-head”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Machine learning vs data science career path India: the honest…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `machine-learning-vs-data-science-career-path-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Machine learning vs data science career path India compared on daily work, math and stats depth, tools…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to machine learning vs data science career path India / What the daily work actually looks like in each career / Math and stats depth each role really needs / Tools and skill stack compared / Entry path, degree, and hiring bar
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Machine learning vs data science career path India: the honest…”
- Title attribute: At a glance: Machine learning vs data science career path India: the…
- Caption (also keep the key point in the HTML text): Machine learning vs data science career path India compared on daily work, math and stats depth, tools, salary bands, and career ceiling, plus a fit…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to machine learning vs data science career path India” #short-answer)
- File: `machine-learning-vs-data-science-career-path-india-asymmetrical-short-answer-machine-learning.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no universal winner here, and any comparison that hands you one has not actually looked at how…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): There is no universal winner here, and any comparison that hands you one has… / Machine learning engineering wins on pay ceiling and engineering leverage: it… / Data science wins on breadth of entry and business proximity: the field accepts…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to machine learning vs data science…”: There is no universal winner here…; Machine learning engineering…
- Title attribute: The short answer to machine learning vs data science career path India
- Caption (also keep the key point in the HTML text): There is no universal winner here, and any comparison that hands you one has not actually looked at how differently these two roles feel on a normal…
**V3 — Comparison table** (place after the H2 “What the daily work actually looks like in each career” #daily-work)
- File: `machine-learning-vs-data-science-career-path-india-comparison-daily-work-actually-looks.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most comparisons stop at job titles and salary charts before ever describing what a normal working day feels…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Aspect of the work | Machine learning… | Data scientist / Row: Core daily task | Build and maintain the… | Explore a dataset, form a… / Row: Where the day gets hard | A model that scored well… | The data contradicts… / Row: Main tools | Python, PyTorch or… | Python or R, pandas, SQL… / Row: Who you talk to most | Software engineers… | Business leaders, product… / Row: How your work gets judged | Whether the system stays… | Whether the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “What the daily work actually looks like in each career”: Aspect of the work | Machine…; Core daily task | Build and maintain…; Where the day…
- Title attribute: What the daily work actually looks like in each career
- Caption (also keep the key point in the HTML text): Most comparisons stop at job titles and salary charts before ever describing what a normal working day feels like.
**V4 — Comparison table** (place after the H2 “Salary reality: fresher to senior, without the marketing numbers” #salary-reality)
- File: `machine-learning-vs-data-science-career-path-india-comparison-salary-reality-fresher-senior.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary pages for this exact comparison tend to quote whichever field's best-case numbers fit their narrative.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Career stage | Machine learning… | Data scientist / Row: Fresher, 0-1 years | Roughly Rs 6-18 LPA, with… | Roughly Rs 4-14 LPA, with… / Row: 6-10 years, senior | Roughly Rs 40-70 LPA at… | Roughly Rs 32-55 LPA at… / Row: 10+ years, highly… | Roughly Rs 65-120 LPA at… | Roughly Rs 50-80 LPA… / Row: What moves the number most | Real deployment… | The ability to pair…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Career stage Machine learning engineer Data scientist Fresher, 0-1 years Roughly Rs 6-18 LPA, with candidates who show real PyTorch or deep learning deployment projects clearing the higher end at AI-first startups and product companies; a small slice with stro | Roughly Rs 4-14 LPA, with a large share of freshers landing in the Rs 6-8 LPA band at analytics-first and service companies, and stronger SQL-plus-statistics portfolios pushing toward the top of the range. | 6-10 years, senior Roughly Rs 40-70 LPA at product companies and GCCs, with senior LLM or GenAI specialists at AI-first startups reported in the Rs 40-80 LPA band.
- Alt: Comparison table for “Salary reality: fresher to senior, without the…”: Career stage | Machine learning… |…; Fresher, 0-1 years | Roughly Rs 6-18…; 6-10 years…
- Title attribute: Salary reality: fresher to senior, without the marketing numbers
- Caption (also keep the key point in the HTML text): Salary pages for this exact comparison tend to quote whichever field's best-case numbers fit their narrative.
**V5 — Linear process chain or roadmap** (place after the H2 “Career ceiling: where each path tops out” #ceiling)
- File: `machine-learning-vs-data-science-career-path-india-linear-career-ceiling-where-each.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is usually the most underweighted part of the decision.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): This is usually the most underweighted part of the decision. / Both roles start in a similar place — junior, execution-focused, closely… / 01 Machine learning engineer ceiling: toward staff engineer, ML platform, or…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Career ceiling: where each path tops out”: This is usually the most…; Both roles start in a similar place —…; 01 Machine…
- Title attribute: Career ceiling: where each path tops out
- Caption (also keep the key point in the HTML text): This is usually the most underweighted part of the decision.
**V6 — Linear process chain or roadmap** (place after the H2 “Use The 4-Checkpoint Protocol before you commit to either path” #checkpoint)
- File: `machine-learning-vs-data-science-career-path-india-linear-use-checkpoint-protocol-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A salary chart cannot tell you which one fits your actual thinking style and current strengths.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A salary chart cannot tell you which one fits your actual thinking style and… / The 4-Checkpoint Protocol narrows this decision to what genuinely matters for… / 01 Biology Machine learning engineering rewards people who get satisfaction…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 02 Context Can your family runway absorb a fresher-level salary for the first 1-2 years while you build real proof?
- Alt: Linear process chain or roadmap for “Use The 4-Checkpoint Protocol before you commit to…”: A salary chart cannot tell you which…; The 4-Checkpoint Protocol…
- Title attribute: Use The 4-Checkpoint Protocol before you commit to either path
- Caption (also keep the key point in the HTML text): A salary chart cannot tell you which one fits your actual thinking style and current strengths.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/prompt-engineering-career-india/

**H1:** Prompt engineering career India: is the job title worth chasing in 2026?  
**Category:** ai-future · **Words:** 2851 · **H2 sections:** 10 · **Search priority:** P2 (0 clicks, 28 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “Prompt engineering career India: is the job title worth…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/prompt-engineering-career-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“What prompt engineering…”, “Is it a real job title…”, “Where the work went…”, “What the work actually…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 85%, 86%, 88%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `prompt-engineering-career-india.webp`, `prompt-engineering-career-india-detail.webp`, `prompt-engineering-career-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `prompt-engineering-career-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `prompt-engineering-career-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a final-year student or recent graduate, a neighbourhood cafe table. Props that belong to “Prompt engineering career India: is the job title worth chasing in 2026?”: a circuit board, graph paper, a laptop with CAD or code, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Prompt engineering career India: is the job title worth chasing in…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `prompt-engineering-career-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Prompt engineering career India: the standalone job title is shrinking while the skill spreads into AI…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What prompt engineering actually is / Is "prompt engineer" a durable standalone job title in India? / Where the standalone role went instead / What the work actually looks like day to day / The 4-Layer Skill Stack for genuine prompt engineering competence
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Prompt engineering career India: is the job title worth chasing in…”
- Title attribute: At a glance: Prompt engineering career India: is the job title worth…
- Caption (also keep the key point in the HTML text): Prompt engineering career India: the standalone job title is shrinking while the skill spreads into AI, product, and content roles.
**V2 — Chronological timeline** (place after the H2 “What the work actually looks like day to day” #daily-work)
- File: `prompt-engineering-career-india-chronological-work-actually-looks-like.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Skip the vague version of this role and picture the real tasks, because that is what actually gets tested in…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Typical real tasks / What it is not, in practice / Designing a prompt that extracts specific fields from messy documents with minimal… / Building a test set of real or realistic inputs and scoring outputs for accuracy, tone… / Debugging why a prompt that worked in testing produces inconsistent output at scale. / Writing evaluation rubrics that a non-technical reviewer can also use to judge output… / Adjusting prompts after a model update instead of assuming they still work as-is.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “What the work actually looks like day to day”: Typical real tasks; What it is not, in practice; Designing a prompt that extracts…
- Title attribute: What the work actually looks like day to day
- Caption (also keep the key point in the HTML text): Skip the vague version of this role and picture the real tasks, because that is what actually gets tested in an interview or a trial project.
**V3 — Linear process chain or roadmap** (place after the H2 “Two realistic career paths, not one” #two-paths)
- File: `prompt-engineering-career-india-linear-two-realistic-career-paths.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Given the shrinking-title, growing-skill picture above, there are two genuinely different ways to build a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Path A: A dedicated AI-focused role / Path B: The skill embedded in your existing field / Titles: AI engineer, LLM engineer, applied AI engineer, AI solutions architect… / Fits people building real technical depth: Python, APIs, evaluation tooling, RAG, and… / Usually sits inside an AI-native team, an AI product company, or a tech company's AI… / Higher ceiling if you go deep, but a narrower door if your only asset is prompting alone. / Fits product managers, marketers, content leads, analysts, operations leads, teachers…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Two realistic career paths, not one”: Path A: A dedicated AI-focused role; Path B: The skill embedded in your…; Titles: AI…
- Title attribute: Two realistic career paths, not one
- Caption (also keep the key point in the HTML text): Given the shrinking-title, growing-skill picture above, there are two genuinely different ways to build a career around this, and they suit different…
**V4 — Comparison table** (place after the H2 “Salary reality in India” #salary)
- File: `prompt-engineering-career-india-comparison-salary-reality-india.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary figures for this field vary a lot across sources, because "prompt engineer" gets used loosely to…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Level | Typical profile | Reported range signal / Row: Entry-level /… | Little to no coding… | Lower single-digit lakhs… / Row: Mid-level / technical | Python, API integration… | Noticeably higher, moving… / Row: Senior / applied AI | Owns evaluation systems… | Highest end of the range… / Row: Freelance / global clients | Contract work for… | Can exceed typical India…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Salary reality in India”: Level | Typical profile | Reported…; Entry-level /… | Little to no coding……; Mid-level / technical | Python, API…
- Title attribute: Salary reality in India
- Caption (also keep the key point in the HTML text): Salary figures for this field vary a lot across sources, because "prompt engineer" gets used loosely to describe everything from content-generation…
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes to avoid” #mistakes)
- File: `prompt-engineering-career-india-mistakes-mistakes-avoid.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Learning tricks instead of evaluation Memorising clever prompt formulas without learning how to test…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Learning tricks instead of evaluation / Chasing the exact job title instead of the skill / Skipping Python and API basics entirely / Building certificates instead of a portfolio / Treating a prompt as a one-time fix
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes to avoid”: Learning tricks instead of evaluation; Chasing the exact job title instead…; Skipping Python and API…
- Title attribute: Mistakes to avoid
- Caption (also keep the key point in the HTML text): 01 Learning tricks instead of evaluation Memorising clever prompt formulas without learning how to test whether a prompt actually works reliably is…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/ai-changing-digital-marketing-careers-india/

**H1:** How AI Is Changing Digital Marketing Careers in India  
**Category:** ai-future · **Words:** 3145 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 9 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “How AI Is Changing Digital Marketing Careers in India”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/ai-changing-digital-marketing-careers-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“What AI has already…”, “Skills becoming more…”, “The India data behind…”, “Building a career now…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 86%, 87%, 88%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `ai-changing-digital-marketing-careers-india.webp`, `ai-changing-digital-marketing-careers-india-detail.webp`, `ai-changing-digital-marketing-careers-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `ai-changing-digital-marketing-careers-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `ai-changing-digital-marketing-careers-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a learner at a laptop with a small project, a home study corner with natural window light. Props that belong to “How AI Is Changing Digital Marketing Careers in India”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How AI Is Changing Digital Marketing Careers in India
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `ai-changing-digital-marketing-careers-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How AI is changing digital marketing careers in India: what AI now automates, which skills pay more, and how…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What AI has already automated in digital marketing / Digital marketing skills becoming more valuable because of AI / The India data behind this shift / Building a digital marketing career now vs 5 years ago / If you are entering digital marketing now
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How AI Is Changing Digital Marketing Careers in India”
- Title attribute: At a glance: How AI Is Changing Digital Marketing Careers in India
- Caption (also keep the key point in the HTML text): How AI is changing digital marketing careers in India: what AI now automates, which skills pay more, and how to build a career that AI cannot easily…
**V2 — Decision tree by situation** (place after the H2 “What AI has already automated in digital marketing” #automated)
- File: `ai-changing-digital-marketing-careers-india-decision-has-already-automated-digital.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: These tasks share one trait: the inputs are predictable, and the correct output can be specified clearly…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Blog outlines, product descriptions, social captions, and email drafts / Headline and description variants for paid campaigns / Keyword lists, topic clusters, and on-page checklists / Google Performance Max, Meta Advantage+, and automated bid strategies
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree by situation for “What AI has already automated in digital marketing”: Blog outlines, product descriptions…; Headline and description variants for……
- Title attribute: What AI has already automated in digital marketing
- Caption (also keep the key point in the HTML text): These tasks share one trait: the inputs are predictable, and the correct output can be specified clearly enough for an AI tool, or an ad platform's…
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “The India data behind this shift” #data)
- File: `ai-changing-digital-marketing-careers-india-stat-india-data-behind-shift.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A few concrete signals from Indian hiring data are worth naming directly instead of staying vague.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What the numbers show / What this means in practice / Naukri's 2025 "AI: Friend, Foe or Frenemy" report, based on responses from over 60,000… / The same report found overall median salaries for AI-skilled roles running 53% higher… / Naukri's JobSpeak data for September 2025 recorded the Advertising and Marketing sector… / Marketing is not a shrinking field in India. Hiring is expanding at the same time AI… / The creativity-loss worry among marketing professionals is a more precise fear than…
- Numbers: use ONLY these facts from the article (exact values, no new ones): What the numbers show Naukri's 2025 "AI: Friend, Foe or Frenemy" report, based on responses from over 60,000 jobseekers, found 86% of Indian jobseekers view AI as a career enabler rather than a threat, but 41% of professionals in Advertising and Marketing spec | The same report found overall median salaries for AI-skilled roles running 53% higher than non-AI-skilled roles, with freshers who have AI skills seeing salary premiums up to 56%. | Naukri's JobSpeak data for September 2025 recorded the Advertising and Marketing sector growing 22% year on year, with fresher hiring in the sector up 54% year on year in the same period.
- Alt: Stat panel or bar chart (only the numbers listed) for “The India data behind this shift”: What the numbers show; What this means in practice; Naukri's 2025 "AI…
- Title attribute: The India data behind this shift
- Caption (also keep the key point in the HTML text): A few concrete signals from Indian hiring data are worth naming directly instead of staying vague.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Building a digital marketing career now vs 5 years ago” #then-now)
- File: `ai-changing-digital-marketing-careers-india-asymmetrical-building-digital-marketing-career.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The entry bar has not simply gotten higher.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The entry bar has not simply gotten higher. / It has changed shape. / Then A fresher's early value was often "can write acceptable copy" or "can…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Building a digital marketing career now vs 5 years ago”: The entry bar has not simply gotten…; It has changed shape.…
- Title attribute: Building a digital marketing career now vs 5 years ago
- Caption (also keep the key point in the HTML text): The entry bar has not simply gotten higher.
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes to avoid” #mistakes)
- File: `ai-changing-digital-marketing-careers-india-mistakes-mistakes-avoid.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Treating "AI is taking marketing jobs" as one flat statement The honest picture is uneven: routine…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Treating "AI is taking marketing jobs" as one flat statement / Assuming a digital marketing certificate alone guarantees a job / Using AI output without checking it / Chasing every new AI tool instead of building depth in one channel / Ignoring the data and analytics side of marketing
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes to avoid”: Treating "AI is taking marketing…; Assuming a digital marketing…; Using AI output without checking it
- Title attribute: Mistakes to avoid
- Caption (also keep the key point in the HTML text): 01 Treating "AI is taking marketing jobs" as one flat statement The honest picture is uneven: routine drafting and manual campaign monitoring are…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/ai-tools-for-career-growth-india/

**H1:** AI tools for career growth India: what actually moves the needle  
**Category:** ai-future · **Words:** 2892 · **H2 sections:** 11 · **Search priority:** P3 (0 clicks, 22 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “AI tools for career growth India: what actually moves the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/ai-tools-for-career-growth-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Why category, not brand”, “Resume and interview…”, “Learning acceleration”, “Research and market…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “—_—_—— ee eee Al FUTURE AI tools for career growth the India: what actually moves needle Visual explainer …”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 86%, 87%, 88%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `ai-tools-for-career-growth-india.webp`, `ai-tools-for-career-growth-india-detail.webp`, `ai-tools-for-career-growth-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `ai-tools-for-career-growth-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `ai-tools-for-career-growth-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a learner at a laptop with a small project, a family dining table in the evening. Props that belong to “AI tools for career growth India: what actually moves the needle”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: AI tools for career growth India: what actually moves the needle
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `ai-tools-for-career-growth-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: AI tools for career growth India, by category, not brand hype: resume and interview prep, faster learning…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why to think in categories, not brand names / Resume and interview prep: speed, not substance / Learning acceleration: explain, then check yourself / Research and industry-trend tracking / Writing and communication polish
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “AI tools for career growth India: what actually moves the needle”
- Title attribute: At a glance: AI tools for career growth India: what actually moves…
- Caption (also keep the key point in the HTML text): AI tools for career growth India, by category, not brand hype: resume and interview prep, faster learning, market research, writing polish, and proof…
**V2 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Research and industry-trend tracking” #research)
- File: `ai-tools-for-career-growth-india-stat-research-industry-trend-tracking.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Research and trend tracking Summarising industry reports, comparing role demand, and tracking a sector AI…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Summarising industry reports, comparing role demand, and tracking a… / What current India signals actually say / What that means practically / Around 84% of HR professionals in India ranked AI upskilling as a top 2025 priority… / More than 9 in 10 Indian professionals say they plan to use AI tools in their 2026 job… / A similarly large share of Indian professionals report feeling underprepared for… / Recruiters in India report that finding candidates with both the right technical skills…
- Numbers: use ONLY these facts from the article (exact values, no new ones): What current India signals actually say Around 84% of HR professionals in India ranked AI upskilling as a top 2025 priority, alongside communication and collaboration skills.
- Alt: Stat panel or bar chart (only the numbers listed) for “Research and industry-trend tracking”: Summarising industry reports…; What current India signals actually……
- Title attribute: Research and industry-trend tracking
- Caption (also keep the key point in the HTML text): Research and trend tracking Summarising industry reports, comparing role demand, and tracking a sector AI research assistants that cite sources can…
**V3 — Linear process chain or roadmap** (place after the H2 “Using AI to build proof of work faster” #proof)
- File: `ai-tools-for-career-growth-india-linear-using-build-proof-work.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the category most people skip, and it is often the one with the highest payoff.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Use AI to get past the blank page on a project brief or write-up / Build a small script, workflow, or dashboard to solve a real problem / Generate first-pass visuals, copy variants, or layout options to…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Using AI to build proof of work faster”: Use AI to get past the blank page on…; Build a small script, workflow, or…; Generate…
- Title attribute: Using AI to build proof of work faster
- Caption (also keep the key point in the HTML text): This is the category most people skip, and it is often the one with the highest payoff.
**V4 — Mistakes versus smarter move panel** (place after the H2 “Mistakes to avoid” #mistakes)
- File: `ai-tools-for-career-growth-india-mistakes-mistakes-avoid.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Submitting AI output without editing it Recruiter surveys have found a majority of employers reject…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Submitting AI output without editing it / Trusting AI research as a primary source / Letting AI write your interview answers word for word / Using AI polish to hide a thin skill or thin project / Treating every AI tool as interchangeable
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes to avoid”: Submitting AI output without editing…; Trusting AI research as a primary…; Letting AI write your…
- Title attribute: Mistakes to avoid
- Caption (also keep the key point in the HTML text): 01 Submitting AI output without editing it Recruiter surveys have found a majority of employers reject resumes and applications that read as unedited…
**V5 — Linear next-step plan** (place after the H2 “What to do next” #next-step)
- File: `ai-tools-for-career-growth-india-linear-next.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Do not try to adopt every category at once.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): If your bottleneck is unclear skill direction rather than tool choice, use the Career &… / Read artificial intelligence career paths if your real question is which role or skill… / Read resume tips for freshers India for the structure your resume needs before any AI… / If you want a plan built around your actual skills, budget, and timeline instead of a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear next-step plan for “What to do next”: If your bottleneck is unclear skill…; Read artificial intelligence career…; Read resume tips for freshers India…
- Title attribute: What to do next
- Caption (also keep the key point in the HTML text): Do not try to adopt every category at once.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/artificial-intelligence-career-paths/

**H1:** Artificial intelligence career paths: the real map, not the hype  
**Category:** ai-future · **Words:** 5756 · **H2 sections:** 23 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — CROPPED / BROKEN SET** · og:image: /images/blog/ai-future/artificial-intelligence-career-paths/visual-1-social.jpg

> **ON THE OWNER'S EXCLUSION LIST.** This route was explicitly excluded in the earlier visual brief (38 routes, listed in the deleted `BLOG-VISUAL-AUDIT.md`, commit 26b8e33~1). Do not create or replace images here unless the owner confirms. The findings below are for the owner's decision.

**Findings**
1. 7 authored images on the page (hero + 6 supporting).
2. Files are named visual-1..visual-6 (not meaningful).
3. The hero (visual-1) and every supporting image are tall infographics centre-cropped to 16:9, so titles, step 1 and footers are cut off (checked visual-3: step 1 and the title are missing; the hero shows the middle of the infographic with no title).
4. visual-7.webp is referenced by the page (seventh image) but does not exist (broken image).
5. BROKEN IMAGE: `/images/blog/ai-future/artificial-intelligence-career-paths/visual-7.webp`
6. 7 of 7 images have no title attribute.
7. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `visual-4.webp`: 007. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `ai-future/artificial-intelligence-career-paths/visual-1-social.jpg` | 1200x675 | 1200x675 | eager | 9% | no title attr; non-meaningful filename |
| `ai-future/artificial-intelligence-career-paths/visual-2.webp` | 1200x675 | 1200x675 | lazy | 12% | no title attr; non-meaningful filename |
| `ai-future/artificial-intelligence-career-paths/visual-3.webp` | 1200x675 | 1200x675 | lazy | 12% | no title attr; non-meaningful filename |
| `ai-future/artificial-intelligence-career-paths/visual-4.webp` | 1200x675 | 1200x675 | lazy | 13% | no title attr; non-meaningful filename |
| `ai-future/artificial-intelligence-career-paths/visual-5.webp` | 1200x675 | 1200x675 | lazy | 13% | no title attr; non-meaningful filename |
| `ai-future/artificial-intelligence-career-paths/visual-6.webp` | 1200x675 | 1200x675 | lazy | 14% | no title attr; non-meaningful filename |
| `ai-future/artificial-intelligence-career-paths/visual-7.webp` | MISSING FILE | 1200x675 | lazy | 14% | FILE MISSING; no title attr; non-meaningful filename |

**Required actions**
1. CREATE hero:
- Reason: current hero is cropped or missing
- File: `artificial-intelligence-career-paths-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `artificial-intelligence-career-paths-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a learner at a laptop with a small project, a school or college corridor bench. Props that belong to “Artificial intelligence career paths: the real map, not the hype”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Artificial intelligence career paths: the real map, not the hype
- Caption: one sentence tying the scene to the article's decision.
2. REPLACE all 6 cropped visuals with full, uncropped, properly named files (the uncropped originals are not in the repo, so regenerate them at their native tall ratio, for example 1080×1350 portrait, with the full title, every step and the footer visible; do not centre-crop to 16:9).
3. CREATE 6 supporting visuals (replacing the cropped set):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `artificial-intelligence-career-paths-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Artificial intelligence career paths run from ML engineering to AI product, governance, and non-coding roles.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Artificial intelligence career paths are a map, not a single title / What is actually creating demand for AI roles / Core technical AI career paths / AI engineer vs ML engineer vs data scientist / AI career paths people miss, including non-coding ones
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Artificial intelligence career paths: the real map, not the hype”
- Title attribute: At a glance: Artificial intelligence career paths: the real map, not…
- Caption (also keep the key point in the HTML text): Artificial intelligence career paths run from ML engineering to AI product, governance, and non-coding roles.
**V2 — Linear process chain or roadmap** (place after the H2 “Artificial intelligence career paths are a map, not a single title” #map)
- File: `artificial-intelligence-career-paths-linear-artificial-intelligence-career-paths.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most "AI careers" articles list ten flashy job titles and call it guidance.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Just "get into AI" and the future is solved. / Every AI path means becoming a hardcore coder. / Finish one big course and the jobs appear automatically. / A growing field means easy success for anyone who enters it.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Artificial intelligence career paths are a map, not a…”: Just "get into AI" and the future is…; Every AI path means becoming…
- Title attribute: Artificial intelligence career paths are a map, not a single title
- Caption (also keep the key point in the HTML text): Most "AI careers" articles list ten flashy job titles and call it guidance.
**V3 — Comparison table** (place after the H2 “AI engineer vs ML engineer vs data scientist” #role-clarity)
- File: `artificial-intelligence-career-paths-comparison-engineer-engineer-data-scientist.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: These three titles get mixed up constantly, and picking the wrong one wastes months.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Role | Answers | What you actually do | Demand / Row: Data scientist | "What should we do?" | Runs analysis and… | Steady, research-leaning… / Row: ML engineer | "How do we run this at… | Builds and operates… | High; bridges data… / Row: AI / LLM engineer | "How do we build this… | Wires LLMs, RAG, prompts… | Fastest-growing of the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “AI engineer vs ML engineer vs data scientist”: Role | Answers | What you actually do…; Data scientist | "What should we do?"…; ML engineer |…
- Title attribute: AI engineer vs ML engineer vs data scientist
- Caption (also keep the key point in the HTML text): These three titles get mixed up constantly, and picking the wrong one wastes months.
**V4 — Linear process chain or roadmap** (place after the H2 “Skills that carry across every AI career path” #skills)
- File: `artificial-intelligence-career-paths-linear-skills-carry-across-every.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Titles shift.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Clear thinking and the ability to define a problem before reaching for a tool / Strong communication, including writing and explaining technical ideas simply / Data literacy: reading numbers, distributions, and what a result really means / Comfort using AI tools daily as a thinking and building partner / Python and basic software engineering habits, including version control
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Skills that carry across every AI career path”: Clear thinking and the ability to…; Strong communication, including…; Data…
- Title attribute: Skills that carry across every AI career path
- Caption (also keep the key point in the HTML text): Titles shift.
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “Degree route vs skill-first route” #degree)
- File: `artificial-intelligence-career-paths-asymmetrical-degree-route-skill-first.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the decision that costs people the most money and time.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Assumes the certificate alone proves capability / Often funded by a loan before testing whether the path fits / Curriculum can lag behind fast-moving AI reality / Strongest for research-heavy roles that genuinely require deep study / Treats proof of work as the thing that gets you hired
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Degree route vs skill-first route”: Assumes the certificate alone proves…; Often funded by a loan before testing……
- Title attribute: Degree route vs skill-first route
- Caption (also keep the key point in the HTML text): This is the decision that costs people the most money and time.
**V6 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Market reality and source check” #market)
- File: `artificial-intelligence-career-paths-stat-market-reality-source-check.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Anchor your decision in real demand signals, not in internet mood swings.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Data scientist is among the fastest-growing occupations / Research-scientist demand is rising too / Generative-AI skill demand is surging / AI skills are reshaping the labour market to 2030
- Numbers: use ONLY these facts from the article (exact values, no new ones): Bureau of Labor Statistics projects employment of data scientists to grow about 34% from 2024 to 2034, much faster than the average for all occupations. | BLS Research-scientist demand is rising too Employment of computer and information research scientists is projected to grow about 20% from 2024 to 2034, driven heavily by AI and data work.
- Alt: Stat panel or bar chart (only the numbers listed) for “Market reality and source check”: Data scientist is among the…; Research-scientist demand is rising……
- Title attribute: Market reality and source check
- Caption (also keep the key point in the HTML text): Anchor your decision in real demand signals, not in internet mood swings.
4. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
5. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/generative-ai-career-path-india/

**H1:** Generative AI Career Path India: The Roles This New Field Actually Created  
**Category:** ai-future · **Words:** 4170 · **H2 sections:** 15 · **Search priority:** P3 (0 clicks, 4 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “Generative AI Career Path India: The Roles This New Field…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/generative-ai-career-path-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“What counts as…”, “Generative AI vs…”, “Core generative AI roles”, “Product and business…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `generative-ai-career-path-india.webp`, `generative-ai-career-path-india-detail.webp`, `generative-ai-career-path-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `generative-ai-career-path-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `generative-ai-career-path-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a learner at a laptop with a small project, a school or college corridor bench. Props that belong to “Generative AI Career Path India: The Roles This New Field Actually Created”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Generative AI Career Path India: The Roles This New Field Actually…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `generative-ai-career-path-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A generative AI career path in India means LLM app development, RAG and fine-tuning work, GenAI product…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What actually counts as generative AI work / Generative AI work vs classical ML engineering / Core generative AI roles worth targeting / Product and business roles built around generative AI / Safety and evaluation roles: the newest category
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Generative AI Career Path India: The Roles This New Field Actually…”
- Title attribute: At a glance: Generative AI Career Path India: The Roles This New…
- Caption (also keep the key point in the HTML text): A generative AI career path in India means LLM app development, RAG and fine-tuning work, GenAI product roles, safety evaluation, or creative-AI…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Generative AI work vs classical ML engineering” #vs-ml)
- File: `generative-ai-career-path-india-asymmetrical-generative-work-classical-engineering.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the distinction most guides skip.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Classical ML rewards deep maths and training expertise / Generative AI work is closer to software engineering than research / Retrieval, embeddings, and agents did not exist as job skills a few… / You can start building without a research background
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Generative AI work vs classical ML engineering”: Classical ML rewards deep maths and…; Generative AI work is closer to……
- Title attribute: Generative AI work vs classical ML engineering
- Caption (also keep the key point in the HTML text): This is the distinction most guides skip.
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Tools worth learning by category” #tools)
- File: `generative-ai-career-path-india-asymmetrical-tools-worth-learning-category.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Model access OpenAI / Anthropic / Gemini APIs Open-source models via Hugging Face Local inference for cost…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): OpenAI / Anthropic / Gemini APIs / Open-source models via Hugging Face / Local inference for cost control / LangChain or LlamaIndex / Vector databases (Pinecone, FAISS, Chroma)
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Tools worth learning by category”: OpenAI / Anthropic / Gemini APIs; Open-source models via Hugging Face; Local inference…
- Title attribute: Tools worth learning by category
- Caption (also keep the key point in the HTML text): Model access OpenAI / Anthropic / Gemini APIs Open-source models via Hugging Face Local inference for cost control Retrieval and orchestration…
**V4 — Comparison table** (place after the H2 “What a hireable generative AI portfolio looks like” #portfolio)
- File: `generative-ai-career-path-india-comparison-hireable-generative-portfolio-looks.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Certificates rarely move the needle on their own in this field, because the underlying courses are widely…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Portfolio piece | What it needs to prove | Common weakness to… / Row: Deployed RAG assistant | Grounded, source-cited… | A notebook that only runs… / Row: Evaluation write-up | You can define quality… | No comparison, no metric… / Row: Creative-AI campaign or… | Consistent, on-brief… | Raw, unedited model… / Row: Agent or workflow demo | The system handles at… | Only shows the happy path…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “What a hireable generative AI portfolio looks like”: Portfolio piece | What it needs to…; Deployed RAG assistant | Grounded…; Evaluation…
- Title attribute: What a hireable generative AI portfolio looks like
- Caption (also keep the key point in the HTML text): Certificates rarely move the needle on their own in this field, because the underlying courses are widely available and easy to complete without ever…
**V5 — Comparison table** (place after the H2 “Salary and pay reality for generative AI roles in India” #salary-reality)
- File: `generative-ai-career-path-india-comparison-salary-pay-reality-generative.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Pay for generative AI work varies more by proof of shipped work and company type than by job title alone, but…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Career stage | Typical range | What moves the number… / Row: Entry-level, 0-2 years… | Roughly Rs 6-14 LPA at… | A deployed, demoable… / Row: Mid-level, 3-6 years | Roughly Rs 15-30 LPA… | Ownership of a production… / Row: Senior and specialist… | Roughly Rs 30-60 LPA and… | A track record of systems… / Row: Non-technical lanes… | Broadly in line with… | Domain expertise combined…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Career stage Typical range What moves the number most Entry-level, 0-2 years (LLM app dev, RAG, evaluation) Roughly Rs 6-14 LPA at product companies and AI-native startups; lower at IT services firms building client AI features A deployed, demoable project bea
- Alt: Comparison table for “Salary and pay reality for generative AI roles in India”: Career stage | Typical range | What…; Entry-level, 0-2 years… | Roughly Rs……
- Title attribute: Salary and pay reality for generative AI roles in India
- Caption (also keep the key point in the HTML text): Pay for generative AI work varies more by proof of shipped work and company type than by job title alone, but the broad bands below give a realistic…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/how-to-use-ai-at-work-effectively-india/

**H1:** How to Use AI at Work Effectively in India: Leverage Without the Trap  
**Category:** ai-future · **Words:** 2788 · **H2 sections:** 9 · **Search priority:** P3 (0 clicks, 3 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “How to Use AI at Work Effectively in India: Leverage…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/how-to-use-ai-at-work-effectively-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Where AI genuinely…”, “Using AI without…”, “Telling your manager…”, “The over-trust trap”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “——rea—xXxr«aX<<—e———— Al FUTURE How to Use AI at Work in the Effectively India: Leverage Without Trap Visual…”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 85%, 86%, 87%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `how-to-use-ai-at-work-effectively-india.webp`, `how-to-use-ai-at-work-effectively-india-detail.webp`, `how-to-use-ai-at-work-effectively-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `how-to-use-ai-at-work-effectively-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `how-to-use-ai-at-work-effectively-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a learner at a laptop with a small project, a home study corner with natural window light. Props that belong to “How to Use AI at Work Effectively in India: Leverage Without the Trap”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How to Use AI at Work Effectively in India: Leverage Without the Trap
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-to-use-ai-at-work-effectively-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to use AI at work effectively in India: draft and analyse faster, protect company data, stay transparent…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What effective AI use at work actually looks like in India right now / Where AI genuinely saves time at work / How to use AI without breaking your company's data rules / Telling your manager and team you use AI / The over-trust trap: why AI-assisted work still needs your judgment
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to Use AI at Work Effectively in India: Leverage Without the Trap”
- Title attribute: At a glance: How to Use AI at Work Effectively in India: Leverage…
- Caption (also keep the key point in the HTML text): How to use AI at work effectively in India: draft and analyse faster, protect company data, stay transparent with your manager, and avoid…
**V2 — Linear process chain or roadmap** (place after the H2 “How to use AI without breaking your company's data rules” #data-policy)
- File: `how-to-use-ai-at-work-effectively-india-linear-use-without-breaking-company.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is where "effective" and "risky" start to overlap, and it is the part most people skip reading about…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Check if your company has an approved AI tool list or a written AI policy. If it exists… / Never input client names, contracts, financial figures, source code, health data, or… / Assume anything you type into a free AI tool could be stored, reviewed, or used to train… / Anonymise or strip identifying details before you paste content in, if you are unsure… / When in doubt, ask your manager or IT team directly. A two-line message costs you…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “How to use AI without breaking your company's data…”: Check if your company has an approved…; Never input client names…
- Title attribute: How to use AI without breaking your company's data rules
- Caption (also keep the key point in the HTML text): This is where "effective" and "risky" start to overlap, and it is the part most people skip reading about until something goes wrong.
**V3 — Mistakes versus smarter move panel** (place after the H2 “The over-trust trap: why AI-assisted work still needs your judgment” #over-trust)
- File: `how-to-use-ai-at-work-effectively-india-mistakes-over-trust-trap-assisted.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Honest take The biggest professional risk in using AI at work right now is not using it too little.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Source layer / Logic layer / Consequence layer
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “The over-trust trap: why AI-assisted work still needs…”: Source layer; Logic layer; Consequence layer
- Title attribute: The over-trust trap: why AI-assisted work still needs your judgment
- Caption (also keep the key point in the HTML text): Honest take The biggest professional risk in using AI at work right now is not using it too little.
**V4 — Mistakes versus smarter move panel** (place after the H2 “Mistakes that get people flagged, not fired for using AI” #mistakes)
- File: `how-to-use-ai-at-work-effectively-india-mistakes-mistakes-get-people-flagged.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most companies are not trying to stop AI use.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Pasting client or company data into a public AI tool / Treating AI output as a finished answer / Using AI in secret and getting caught later / Letting AI replace your own thinking, not just your typing / Assuming "the company has no policy" means "anything goes"
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes that get people flagged, not fired for using…”: Pasting client or company data into a…; Treating AI output as a…
- Title attribute: Mistakes that get people flagged, not fired for using AI
- Caption (also keep the key point in the HTML text): Most companies are not trying to stop AI use.
**V5 — Linear process chain or roadmap** (place after the H2 “Building an AI habit that survives scrutiny” #build-habit)
- File: `how-to-use-ai-at-work-effectively-india-linear-building-habit-survives-scrutiny.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: You do not need a perfect system on day one.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Pick one recurring task, not your whole job / Run it for a real stretch before judging it / Keep a visible record of your checks / Compare hours saved against hours spent verifying
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Building an AI habit that survives scrutiny”: Pick one recurring task, not your…; Run it for a real stretch before…; Keep a…
- Title attribute: Building an AI habit that survives scrutiny
- Caption (also keep the key point in the HTML text): You do not need a perfect system on day one.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/skills-to-work-with-ai-instead-of-being-replaced/

**H1:** Skills to work with AI instead of being replaced by it: the 4 layers that actually matter  
**Category:** ai-future · **Words:** 3134 · **H2 sections:** 13 · **Search priority:** P3 (0 clicks, 18 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “Skills to work with AI instead of being replaced by it: the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/skills-to-work-with-ai-instead-of-being-replaced*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The 4-Layer AI-Proof…”, “Layer 1: AI literacy”, “Layer 2: Judgment”, “Layer 3: Domain…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `skills-to-work-with-ai-instead-of-being-replaced.webp`, `skills-to-work-with-ai-instead-of-being-replaced-detail.webp`, `skills-to-work-with-ai-instead-of-being-replaced-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `skills-to-work-with-ai-instead-of-being-replaced-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `skills-to-work-with-ai-instead-of-being-replaced-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a learner at a laptop with a small project, a quiet public library table. Props that belong to “Skills to work with AI instead of being replaced by it: the 4 layers that…”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Skills to work with AI instead of being replaced by it: the 4 layers…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `skills-to-work-with-ai-instead-of-being-replaced-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Skills to work with AI instead of being replaced by it: AI literacy, judgment, domain expertise, and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "just learn AI" advice usually fails / The 4-Layer AI-Proof Skill Stack / Layer 1: AI literacy, without the buzzword / Layer 2: Judgment and critical thinking AI cannot replicate / Layer 3: Domain expertise, the human-in-the-loop layer
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Skills to work with AI instead of being replaced by it: the 4 layers…”
- Title attribute: At a glance: Skills to work with AI instead of being replaced by it…
- Caption (also keep the key point in the HTML text): Skills to work with AI instead of being replaced by it: AI literacy, judgment, domain expertise, and communication are the four layers that keep you…
**V2 — Mistakes versus smarter move panel** (place after the H2 “Why "just learn AI" advice usually fails” #why)
- File: `skills-to-work-with-ai-instead-of-being-replaced-mistakes-just-learn-advice-usually.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most advice about AI and careers stops at one vague line: learn to use AI tools.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Take one prompting course and your career is "AI-proofed." / Pick a job title that sounds hard to automate and stop there. / Avoid AI tools completely so you never depend on them. / Assume AI literacy alone replaces the need for real expertise.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Why "just learn AI" advice usually fails”: Take one prompting course and your…; Pick a job title that sounds hard to…; Avoid…
- Title attribute: Why "just learn AI" advice usually fails
- Caption (also keep the key point in the HTML text): Most advice about AI and careers stops at one vague line: learn to use AI tools.
**V3 — Self-assessment checklist** (place after the H2 “Layer 2: Judgment and critical thinking AI cannot replicate” #layer-2)
- File: `skills-to-work-with-ai-instead-of-being-replaced-self-layer-judgment-critical-thinking.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: AI tools are strong at pattern-matching across huge amounts of information.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What AI tools do well / What still needs a human / Summarise, draft, and reformat large amounts of text or data fast / Spot patterns across huge datasets faster than a person can scan them / Generate options, variations, and first drafts on demand / Answer well-defined questions with clear, available reference material / Deciding which option actually fits this client, this budget, this culture
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “Layer 2: Judgment and critical thinking AI cannot…”: What AI tools do well; What still needs a human; Summarise, draft, and reformat…
- Title attribute: Layer 2: Judgment and critical thinking AI cannot replicate
- Caption (also keep the key point in the HTML text): AI tools are strong at pattern-matching across huge amounts of information.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “India demand: what the data actually says” #india-demand)
- File: `skills-to-work-with-ai-instead-of-being-replaced-stat-india-demand-data-actually.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The gap between AI adoption and AI-ready people in India is large enough to matter for anyone planning a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): AI talent gap / Global skills shift / Government data cited by industry researchers puts AI skill penetration among IT… / Deloitte-NASSCOM research points to a shortage of well over a million AI-ready… / Two in three Indians surveyed by LinkedIn say they plan to learn at least one digital… / The WEF's Future of Jobs Report 2025 projects that 39% of workers will need significant… / LinkedIn's 2025 data shows AI literacy appearing in job postings roughly six times more…
- Numbers: use ONLY these facts from the article (exact values, no new ones): AI talent gap Government data cited by industry researchers puts AI skill penetration among IT professionals in India at only around 16% today. | Global skills shift The WEF's Future of Jobs Report 2025 projects that 39% of workers will need significant reskilling between 2025 and 2030. | McKinsey finds more than 70% of the skills employers want are relevant to both automatable and non-automatable work, while about 12% remain distinctly human for now.
- Alt: Stat panel or bar chart (only the numbers listed) for “India demand: what the data actually says”: AI talent gap; Global skills shift; Government data cited by…
- Title attribute: India demand: what the data actually says
- Caption (also keep the key point in the HTML text): The gap between AI adoption and AI-ready people in India is large enough to matter for anyone planning a skill-building path, not only people in tech…
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Market reality and source check” #market)
- File: `skills-to-work-with-ai-instead-of-being-replaced-stat-market-reality-source-check.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: None of the framework above is guesswork.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Future of Jobs Report 2025 / Skills on the Rise 2025 / Human skills will matter more than ever in the age of AI / Bridging the AI talent gap in India
- Numbers: use ONLY these facts from the article (exact values, no new ones): LinkedIn projects 70% of job skills will change by 2030. | Read the LinkedIn report McKinsey Global Institute Human skills will matter more than ever in the age of AI McKinsey finds more than 70% of the skills employers look for are relevant to both automatable and non-automatable work, while roughly 12% remain distin
- Alt: Stat panel or bar chart (only the numbers listed) for “Market reality and source check”: Future of Jobs Report 2025; Skills on the Rise 2025; Human skills will…
- Title attribute: Market reality and source check
- Caption (also keep the key point in the HTML text): None of the framework above is guesswork.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/software-developer-career-future-with-ai-india/

**H1:** Software developer career future with AI in India: what actually changes at your desk  
**Category:** ai-future · **Words:** 3622 · **H2 sections:** 11 · **Search priority:** P3 (0 clicks, 9 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “Software developer career future with AI in India: what…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/software-developer-career-future-with-ai-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“What changed in a…”, “What AI tools now…”, “What is still entirely…”, “Skills that matter more…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `software-developer-career-future-with-ai-india.webp`, `software-developer-career-future-with-ai-india-detail.webp`, `software-developer-career-future-with-ai-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `software-developer-career-future-with-ai-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `software-developer-career-future-with-ai-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a learner at a laptop with a small project, a classroom desk after hours. Props that belong to “Software developer career future with AI in India: what actually changes at…”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Software developer career future with AI in India: what actually…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `software-developer-career-future-with-ai-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Software developer career future with AI in India: how Copilot-style tools changed daily coding work, which…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What changed in a normal coding day / What AI tools now handle for you / What is still entirely your job / Skills that matter more now / Skills that matter less now
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Software developer career future with AI in India: what actually…”
- Title attribute: At a glance: Software developer career future with AI in India: what…
- Caption (also keep the key point in the HTML text): Software developer career future with AI in India: how Copilot-style tools changed daily coding work, which skills now matter more, and the honest…
**V2 — Chronological timeline** (place after the H2 “What changed in a normal coding day” #day-to-day)
- File: `software-developer-career-future-with-ai-india-chronological-changed-normal-coding-day.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Ask a developer who has been working for five or more years what changed, and most will not describe some…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): ChatGPT and GitHub Copilot are now the two most widely used AI coding tools among… / Developers using AI coding assistants complete comparable tasks noticeably faster than… / The hours saved on routine writing did not disappear from the job. They moved toward…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “What changed in a normal coding day”: ChatGPT and GitHub Copilot are now…; Developers using AI coding assistants…; The hours saved on…
- Title attribute: What changed in a normal coding day
- Caption (also keep the key point in the HTML text): Ask a developer who has been working for five or more years what changed, and most will not describe some dramatic replacement.
**V3 — Comparison table** (place after the H2 “The honest junior developer picture” #junior)
- File: `software-developer-career-future-with-ai-india-comparison-honest-junior-developer-picture.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the part most articles either overstate as a crisis or understate as a non-issue.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: India-specific signal | What it shows / Row: Entry-level IT hiring… | Industry coverage of… / Row: Skills-over-degrees shift | A large majority of… / Row: AI-native skill gap among… | Only a minority of…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “The honest junior developer picture”: India-specific signal | What it shows; Entry-level IT hiring… | Industry…; Skills-over-degrees shift | A…
- Title attribute: The honest junior developer picture
- Caption (also keep the key point in the HTML text): This is the part most articles either overstate as a crisis or understate as a non-issue.
**V4 — Mistakes versus smarter move panel** (place after the H2 “Mistakes to avoid” #mistakes)
- File: `software-developer-career-future-with-ai-india-mistakes-mistakes-avoid.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Treating AI fluency as the whole skill set Knowing how to prompt an assistant well is now a baseline…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Treating AI fluency as the whole skill set / Skipping the practice that builds real debugging instinct / Shipping AI-generated code you cannot explain / Assuming the entry-level door has closed completely / Ignoring communication and domain skill because the job is "technical"
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Mistakes versus smarter move panel for “Mistakes to avoid”: Treating AI fluency as the whole…; Skipping the practice that builds…; Shipping AI-generated code you…
- Title attribute: Mistakes to avoid
- Caption (also keep the key point in the HTML text): 01 Treating AI fluency as the whole skill set Knowing how to prompt an assistant well is now a baseline expectation, similar to knowing Git.
**V5 — Linear next-step plan** (place after the H2 “What to do next” #next-step)
- File: `software-developer-career-future-with-ai-india-linear-next.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: None of this is a one-time decision.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Read AI impact on IT jobs India if you want the wider industry picture across testing… / Read Is software engineering a good career in India? if your real question is whether to… / Use the Career & Skills Compass if you want a clearer read on whether software… / If you want guided help mapping your specific stage, current skills, and next move, use…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear next-step plan for “What to do next”: Read AI impact on IT jobs India if…; Read Is software engineering a good…; Use the Career & Skills Compass if…
- Title attribute: What to do next
- Caption (also keep the key point in the HTML text): None of this is a one-time decision.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/top-careers-for-the-future/

**H1:** Top careers for the future: what is actually rising and why  
**Category:** ai-future · **Words:** 4463 · **H2 sections:** 17 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “Top careers for the future: what is actually rising and why”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/top-careers-for-the-future*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Why future-career lists…”, “What is driving demand”, “Top future career…”, “Missed future-career…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 92%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `top-careers-for-the-future.webp`, `top-careers-for-the-future-detail.webp`, `top-careers-for-the-future-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `top-careers-for-the-future-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `top-careers-for-the-future-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of an Indian student or adult at a home desk, a school or college corridor bench. Props that belong to “Top careers for the future: what is actually rising and why”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Top careers for the future: what is actually rising and why
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `top-careers-for-the-future-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Top careers for the future usually sit where AI, cybersecurity, healthcare, clean energy, and business…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why most future-career lists mislead people / What is driving future-career demand in the real market / Top careers for the future: the real growth clusters / Future-career paths people often miss / India demand: what the numbers actually say
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Top careers for the future: what is actually rising and why”
- Title attribute: At a glance: Top careers for the future: what is actually rising and…
- Caption (also keep the key point in the HTML text): Top careers for the future usually sit where AI, cybersecurity, healthcare, clean energy, and business systems are creating real demand.
**V2 — Linear process chain or roadmap** (place after the H2 “Future-career paths people often miss” #missed-paths)
- File: `top-careers-for-the-future-linear-future-career-paths-people.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The broad clusters above are useful.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): AI workflow builder, automation implementer, or AI-operations support / No-code or low-code builder for websites, apps, and internal tools / High-value sales, technical sales, and revenue-linked communication… / Copywriting, content strategy, brand storytelling, and… / UX research, counseling, training, and explanation-heavy support roles
- Numbers: use ONLY these facts from the article (exact values, no new ones): Career in psychology India: salary and scope Climate tech and sustainability EV systems, carbon accounting, green energy analytics, and sustainability reporting roles India's EV market is projected to reach ₹50,000 crore by 2030.
- Alt: Linear process chain or roadmap for “Future-career paths people often miss”: AI workflow builder, automation…; No-code or low-code builder for…; High-value sales…
- Title attribute: Future-career paths people often miss
- Caption (also keep the key point in the HTML text): The broad clusters above are useful.
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “India demand: what the numbers actually say” #india-demand)
- File: `top-careers-for-the-future-stat-india-demand-numbers-actually.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Global reports matter, but the India picture is specific enough to be worth reading separately.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Technology and AI / Clean energy and physical infrastructure / India's AI market is projected to reach $17 billion by 2027, growing 25–35% annually. / NASSCOM reports AI roles growing 40%+ year on year, with a 51% talent gap — meaning… / India's public cloud market is on track to hit $17.8 billion by 2027 at 23% annual… / WEF's Future of Jobs 2025 report projects that 39% of workers will need significant… / India's National Solar Mission targets 500 GW of renewable energy capacity by 2030 — a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Technology and AI India's AI market is projected to reach $17 billion by 2027, growing 25–35% annually. | NASSCOM reports AI roles growing 40%+ year on year, with a 51% talent gap — meaning demand far outpaces available people. | India's public cloud market is on track to hit $17.8 billion by 2027 at 23% annual growth, creating over 1.4 crore new cloud-linked jobs.
- Alt: Stat panel or bar chart (only the numbers listed) for “India demand: what the numbers actually say”: Technology and AI; Clean energy and physical…; India's AI…
- Title attribute: India demand: what the numbers actually say
- Caption (also keep the key point in the HTML text): Global reports matter, but the India picture is specific enough to be worth reading separately.
**V4 — Linear process chain or roadmap** (place after the H2 “The 4-Checkpoint Protocol for choosing a future-career path” #checkpoint)
- File: `top-careers-for-the-future-linear-checkpoint-protocol-choosing-future.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the most practical filter if several future-facing paths all sound attractive.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Biology / Context / Market / Survival
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “The 4-Checkpoint Protocol for choosing a future-career…”: Biology; Context; Market
- Title attribute: The 4-Checkpoint Protocol for choosing a future-career path
- Caption (also keep the key point in the HTML text): This is the most practical filter if several future-facing paths all sound attractive.
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Market reality and source check” #market)
- File: `top-careers-for-the-future-stat-market-reality-source-check.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Future-career advice should be anchored in real demand signals, not in internet mood swings.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Future of Jobs Report 2025 / Growth is not only in AI / Several future-facing roles show strong projected growth in the 2024… / Energy jobs are growing, but skilled-worker shortages are rising too / The World Economic Forum Future of Jobs Report 2025 says labour markets through 2030 are… / The U.S. Bureau of Labor Statistics projects strong 2024 to 2034 growth for data… / BLS also shows strong projected growth in clean-energy adjacent roles like solar…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Browse the outlook handbook International Energy Agency Energy jobs are growing, but skilled-worker shortages are rising too The IEA World Energy Employment 2025 report says global energy employment reached 76 million in 2024 and highlights major shortages in  | Bureau of Labor Statistics projects strong 2024 to 2034 growth for data scientists at 34%, information security analysts at 29%, software developers at 16%, and medical and health services managers at 23%. | BLS also shows strong projected growth in clean-energy adjacent roles like solar photovoltaic installers at 42% and wind turbine technicians at 50%.
- Alt: Stat panel or bar chart (only the numbers listed) for “Market reality and source check”: Future of Jobs Report 2025; Growth is not only in AI; Several future-facing…
- Title attribute: Market reality and source check
- Caption (also keep the key point in the HTML text): Future-career advice should be anchored in real demand signals, not in internet mood swings.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/ai-future/what-to-do-if-your-job-is-replaced-by-ai-india/

**H1:** What to Do If Your Job Is Replaced by AI in India: The Real Recovery Plan  
**Category:** ai-future · **Words:** 3372 · **H2 sections:** 12 · **Search priority:** P3 (0 clicks, 13 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 14 other articles, with identical alt text and captions, so they say nothing specific about “What to Do If Your Job Is Replaced by AI in India: The Real…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/ai-future/what-to-do-if-your-job-is-replaced-by-ai-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “What to do in week one”, “Financial triage before…”, “The part nobody warns…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 87%, 88%, 89%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `ai-future-editorial-cover.webp`, `ai-future-context.webp`, `ai-future-proof.webp`, `ai-future-assistant.webp`, `ai-future-portfolio.webp`, `ai-future-experiment.webp`, `ai-future-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `what-to-do-if-your-job-is-replaced-by-ai-india.webp`, `what-to-do-if-your-job-is-replaced-by-ai-india-detail.webp`, `what-to-do-if-your-job-is-replaced-by-ai-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `what-to-do-if-your-job-is-replaced-by-ai-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `what-to-do-if-your-job-is-replaced-by-ai-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a learner at a laptop with a small project, a family dining table in the evening. Props that belong to “What to Do If Your Job Is Replaced by AI in India: The Real Recovery Plan”: a laptop with a live project, job description printouts, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: What to Do If Your Job Is Replaced by AI in India: The Real Recovery…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `what-to-do-if-your-job-is-replaced-by-ai-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: What to do if your job is replaced by AI in India: financial triage first, an honest skill audit, then a real…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer, before the detail / What to do in week one / Financial triage before anything else / The part nobody warns you about / The honest skill-gap audit
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “What to Do If Your Job Is Replaced by AI in India: The Real Recovery…”
- Title attribute: At a glance: What to Do If Your Job Is Replaced by AI in India: The…
- Caption (also keep the key point in the HTML text): What to do if your job is replaced by AI in India: financial triage first, an honest skill audit, then a real decision between staying in your field…
**V2 — Chronological timeline** (place after the H2 “What to do in week one” #week-one)
- File: `what-to-do-if-your-job-is-replaced-by-ai-india-chronological-week-one.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The first week sets the tone for everything after it.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Get the paperwork and the number right / Check what you can actually withdraw or claim / Freeze non-essential spending for one week / Tell three people, not thirty
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “What to do in week one”: Get the paperwork and the number right; Check what you can actually withdraw…; Freeze non-essential spending…
- Title attribute: What to do in week one
- Caption (also keep the key point in the HTML text): The first week sets the tone for everything after it.
**V3 — Chronological timeline** (place after the H2 “Financial triage before anything else” #money)
- File: `what-to-do-if-your-job-is-replaced-by-ai-india-chronological-financial-triage-before-anything.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is not optional groundwork you can skip if you are confident.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Work out your real number, not a guess / Rank your debt by damage, not by size / Do not let health cover lapse / Check what you are actually eligible for
- Numbers: use ONLY these facts from the article (exact values, no new ones): Debt triage Rank your debt by damage, not by size A credit card balance compounding at 30%+ a year does more harm per month than a home loan at 9%.
- Alt: Chronological timeline for “Financial triage before anything else”: Work out your real number, not a guess; Rank your debt by damage, not by size; Do not let health…
- Title attribute: Financial triage before anything else
- Caption (also keep the key point in the HTML text): This is not optional groundwork you can skip if you are confident.
**V4 — Linear process chain or roadmap** (place after the H2 “Reskilling pathways that actually exist in India” #reskilling)
- File: `what-to-do-if-your-job-is-replaced-by-ai-india-linear-reskilling-pathways-actually-exist.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: India has more structured reskilling options today than it did a few years ago, spanning free…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): PMKVY and Skill India Digital / FutureSkills PRIME / Large-company internal reskilling programs / Cohort-based courses with mentorship and placement support / Free courses plus a self-built project portfolio / NASSCOM and Deloitte estimate AI talent demand in India growing from roughly… / By August 2025, over 1.85 million learners had registered on the government-backed… / TCS trained roughly 350,000 employees and Wipro roughly 220,000 employees on AI-related…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A few concrete numbers behind the current India picture: NASSCOM and Deloitte estimate AI talent demand in India growing from roughly 600,000-650,000 in 2022 to over 1.25 million by 2027, alongside an existing gap of only around 16% of IT professionals current | By August 2025, over 1.85 million learners had registered on the government-backed FutureSkills PRIME portal, with about 337,000 completing courses, many of them AI-related. | The World Economic Forum's Future of Jobs Report 2025 estimates that 59 out of every 100 workers globally will need reskilling or upskilling by 2030, with 39% of core job skills expected to change or become obsolete in that window.
- Alt: Linear process chain or roadmap for “Reskilling pathways that actually exist in India”: PMKVY and Skill India Digital /…; Large-company internal reskilling……
- Title attribute: Reskilling pathways that actually exist in India
- Caption (also keep the key point in the HTML text): India has more structured reskilling options today than it did a few years ago, spanning free government-backed programs to paid, mentored cohorts.
**V5 — Comparison table** (place after the H2 “Realistic timelines by starting point” #timelines)
- File: `what-to-do-if-your-job-is-replaced-by-ai-india-comparison-realistic-timelines-starting-point.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Timelines for reskilling depend entirely on how far the new direction is from what you already know.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Your starting point | Realistic timeline | Why / Row: Same field, adjacent… | 6 to 10 weeks | Fastest path because… / Row: Same broad field, new… | A few months of… | Needs new technical skill… / Row: Adjacent field… | A few months to half a… | Some prior context helps… / Row: Full field change with no… | Several months to a year… | Realistic outcome data…
- Numbers: use ONLY these facts from the article (exact values, no new ones): support exec learning AI-assisted service tools) 6 to 10 weeks Fastest path because domain knowledge already transfers; only the tool layer is new. | factory floor to data analytics) Several months to a year, sometimes longer Realistic outcome data shows 6 to 12 months from zero technical background to a genuine entry-level offer, not weeks.
- Alt: Comparison table for “Realistic timelines by starting point”: Your starting point | Realistic…; Same field, adjacent… | 6 to 10 weeks…; Same broad field, new… | A…
- Title attribute: Realistic timelines by starting point
- Caption (also keep the key point in the HTML text): Timelines for reskilling depend entirely on how far the new direction is from what you already know.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
