# Image audit — blog category: college-degrees

36 pages. Pages are ordered by search priority (P1 first). Submit one page section at a time together with `docs/image-audit/00-READ-FIRST.md`.

### /blog/college-degrees/1-year-mba-india-worth-it/

**H1:** 1-year MBA India worth it? The real trade-off vs the 2-year format  
**Category:** college-degrees · **Words:** 3544 · **H2 sections:** 10 · **Search priority:** P1 (1 clicks, 328 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “1-year MBA India worth it? The real trade-off vs the 2-year…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/1-year-mba-india-worth-it*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Who a 1-year MBA is…”, “The 1-year MBA…”, “What the accelerated…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `1-year-mba-india-worth-it.webp`, `1-year-mba-india-worth-it-detail.webp`, `1-year-mba-india-worth-it-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `1-year-mba-india-worth-it-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `1-year-mba-india-worth-it-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a final-year student or recent graduate, a neighbourhood cafe table. Props that belong to “1-year MBA India worth it? The real trade-off vs the 2-year format”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: 1-year MBA India worth it? The real trade-off vs the 2-year format
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `1-year-mba-india-worth-it-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 1-year MBA India worth it depends on your work experience and money math.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on whether a 1-year MBA in India is worth it / Who a 1-year MBA is actually built for / The 1-year MBA landscape in India / What the accelerated format actually cuts / Fee comparison: 1-year vs 2-year
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “1-year MBA India worth it? The real trade-off vs the 2-year format”
- Title attribute: At a glance: 1-year MBA India worth it? The real trade-off vs the…
- Caption (also keep the key point in the HTML text): 1-year MBA India worth it depends on your work experience and money math.
**V2 — Chronological timeline** (place after the H2 “Who a 1-year MBA is actually built for” #who-its-for)
- File: `1-year-mba-india-worth-it-chronological-who-year-mba-actually.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every major 1-year program in India sets its eligibility, its classroom design, and its placement process…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Every major 1-year program in India sets its eligibility, its classroom design… / ISB's PGP requires a minimum of 24 months of full-time work experience by March… / IIM Ahmedabad's PGPX sets a hard floor of 4 years and averages 8.5-9 years…
- Numbers: use ONLY these facts from the article (exact values, no new ones): ISB's PGP requires a minimum of 24 months of full-time work experience by March 31 of the intake year, but the average admitted student carries 4-5 years, with a competitive range of 3-6 years showing clear impact and leadership growth. | IIM Ahmedabad's PGPX sets a hard floor of 4 years and averages 8.5-9 years among admits — closer to a genuine executive population than a young professional one. | XLRI's PGDM-GM recently lowered its minimum from 60 months to 36 months, still firmly in managerial-experience territory, not entry-level.
- Alt: Chronological timeline for “Who a 1-year MBA is actually built for”: Every major 1-year program in India…; ISB's PGP requires a minimum of 24…; IIM Ahmedabad's PGPX…
- Title attribute: Who a 1-year MBA is actually built for
- Caption (also keep the key point in the HTML text): Every major 1-year program in India sets its eligibility, its classroom design, and its placement process around one profile: a working professional…
**V3 — Comparison table** (place after the H2 “What the accelerated format actually cuts” #format)
- File: `1-year-mba-india-worth-it-comparison-accelerated-format-actually-cuts.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A 1-year MBA is not simply a 2-year MBA played at double speed.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: What a 2-year MBA has | What a 1-year MBA… / Row: A summer break with a… | No summer internship in… / Row: A wide elective spread… | A narrower elective… / Row: Roughly 20-24 months of… | Roughly half that… / Row: A slower academic ramp… | A dense, case-heavy pace…
- Numbers: use ONLY these facts from the article (exact values, no new ones): To fit inside a single academic year, most programs cover roughly 80% of a 2-year curriculum's workload, and something has to give to make that fit. | What a 2-year MBA has What a 1-year MBA usually cuts or compresses A summer break with a 2-month internship in a new function or industry No summer internship in most formats — the compressed academic calendar leaves no gap for one, though some institutes add  | For a 2-year MBA student testing a career pivot, the summer internship is often the single highest-value 8 weeks of the whole degree — it is a real, low-risk test of a new function before committing to it full-time.
- Alt: Comparison table for “What the accelerated format actually cuts”: What a 2-year MBA has | What a 1-year…; A summer break with a… | No summer…; A wide elective…
- Title attribute: What the accelerated format actually cuts
- Caption (also keep the key point in the HTML text): A 1-year MBA is not simply a 2-year MBA played at double speed.
**V4 — Comparison table** (place after the H2 “Fee comparison: 1-year vs 2-year” #fees)
- File: `1-year-mba-india-worth-it-comparison-fee-comparison-year-year.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: On the sticker price alone, 1-year executive-style programs cost more than most 2-year flagship MBAs in…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Format | Total fee | Income given up / Row: 1-year executive-style… | ₹35-42 lakh total, most… | One year of salary… / Row: 2-year flagship IIM MBA… | ₹25-27 lakh total, spread… | Two years of salary and… / Row: 2-year MBA at a strong… | ₹12-16 lakh total in… | Two years of salary — the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): That surprises people who assume "shorter" automatically means "cheaper." Format Total fee Income given up 1-year executive-style MBA (ISB PGP, IIM-A PGPX, IIM-B EPGP) ₹35-42 lakh total, most of it front-loaded into one year One year of salary, bonus, and any  | As a strict planning heuristic, not a universal rule, weigh either fee against roughly 10% of your total education and upskilling budget for the years ahead. | A ₹24-42 lakh 1-year program is well above that line for most working professionals, so treat it as a deliberate, above-heuristic spend that needs course-specific justification — a program you are already eligible for on experience, a verified placement track 
- Alt: Comparison table for “Fee comparison: 1-year vs 2-year”: Format | Total fee | Income given up; 1-year executive-style… | ₹35-42 lakh…; 2-year flagship IIM MBA… |…
- Title attribute: Fee comparison: 1-year vs 2-year
- Caption (also keep the key point in the HTML text): On the sticker price alone, 1-year executive-style programs cost more than most 2-year flagship MBAs in India, not less.
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “The real ROI and opportunity-cost math” #roi-math)
- File: `1-year-mba-india-worth-it-stat-real-roi-opportunity-cost.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The honest way to compare a 1-year and a 2-year MBA is not fee versus fee.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The honest way to compare a 1-year and a 2-year MBA is not fee versus fee. / It is total real cost versus total real cost, where total real cost includes… / Say you are earning ₹18 lakh a year before enrolling.
- Numbers: use ONLY these facts from the article (exact values, no new ones): Say you are earning ₹18 lakh a year before enrolling. | A 2-year MBA at a strong non-IIM institute costing ₹14 lakh in direct fees also costs you roughly ₹36 lakh in foregone salary across two years — a real total closer to ₹50 lakh, even before counting lost bonuses, raises, or vesting equity you would have earned | A 1-year program at ₹40 lakh in fees costs you roughly ₹18 lakh in foregone salary for a single year — a real total closer to ₹58 lakh.
- Alt: Stat panel or bar chart (only the numbers listed) for “The real ROI and opportunity-cost math”: The honest way to compare a 1-year…; It is total real cost versus…
- Title attribute: The real ROI and opportunity-cost math
- Caption (also keep the key point in the HTML text): The honest way to compare a 1-year and a 2-year MBA is not fee versus fee.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/best-courses-after-12th-for-high-salary-india/

**H1:** Best Courses After 12th for High Salary in India: A Degree-by-Degree Ranking  
**Category:** college-degrees · **Words:** 4173 · **H2 sections:** 16 · **Search priority:** P1 (0 clicks, 282 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/college-degrees/best-courses-after-12th-for-high-salary-india/best-courses-after-12th-high-salary-cover.webp

**Findings**
1. 6 authored images on the page (hero + 5 supporting).
2. Verify fee and salary figures in the quick-comparison table (BTech, BA LLB, BCom+CA, BBA, BCA, BHM, Nursing, BArch, BDes).
3. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
4. 6 of 6 images have no title attribute.
5. Numbers read from the images (OCR) that do not appear in the article text, verify or remove: `best-courses-after-12th-high-salary-quick-comparison.webp`: 60k, 50k. OCR can misread, so check by eye.

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `college-degrees/best-courses-after-12th-for-high-salary-india/best-courses-after-12th-high-salary-cover.webp` | 1600x900 | 1600x900 | eager | 13% | no title attr |
| `college-degrees/best-courses-after-12th-for-high-salary-india/best-courses-after-12th-high-salary-quick-comparison.webp` | 1122x1402 | 1122x1402 | lazy | 22% | no title attr |
| `college-degrees/best-courses-after-12th-for-high-salary-india/salary-number-course-comparison.webp` | 1122x1402 | 1122x1402 | lazy | 48% | no title attr |
| `college-degrees/best-courses-after-12th-for-high-salary-india/match-course-to-stream.webp` | 1122x1402 | 1122x1402 | lazy | 53% | no title attr |
| `college-degrees/best-courses-after-12th-for-high-salary-india/four-checkpoint-course-selection.webp` | 1122x1402 | 1122x1402 | lazy | 57% | no title attr |
| `college-degrees/best-courses-after-12th-for-high-salary-india/course-roi-mistakes.webp` | 1122x1402 | 1122x1402 | lazy | 62% | no title attr |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `best-courses-after-12th-for-high-salary-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-courses-after-12th-for-high-salary-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a Class 11-12 student with a parent or sibling nearby, a family dining table in the evening. Props that belong to “Best Courses After 12th for High Salary in India: A Degree-by-Degree Ranking”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best Courses After 12th for High Salary in India: A Degree-by-Degree…
- Caption: one sentence tying the scene to the article's decision.
2. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
3. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/best-courses-after-ba-for-good-salary-india/

**H1:** Best courses after BA for good salary India: 8 paths ranked by real ROI  
**Category:** college-degrees · **Words:** 4768 · **H2 sections:** 16 · **Search priority:** P1 (0 clicks, 252 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Best courses after BA for good salary India: 8 paths ranked…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/best-courses-after-ba-for-good-salary-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The honest answer…”, “Best courses after BA…”, “1. MBA: the institute…”, “2. Law: 3-year LLB…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-courses-after-ba-for-good-salary-india.webp`, `best-courses-after-ba-for-good-salary-india-detail.webp`, `best-courses-after-ba-for-good-salary-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `best-courses-after-ba-for-good-salary-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-courses-after-ba-for-good-salary-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of an Indian student or adult at a home desk, a school or college corridor bench. Props that belong to “Best courses after BA for good salary India: 8 paths ranked by real ROI”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best courses after BA for good salary India: 8 paths ranked by real…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-courses-after-ba-for-good-salary-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Best courses after BA for good salary India, ranked by real cost, time, and pay: MBA, law via CLAT-PG, MA…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The honest answer before the list / Best courses after BA, ranked by real ROI / 1. MBA: the institute decides everything / 2. Law: 3-year LLB, then CLAT-PG for an LLM / 3. MA Economics: the quant-heavy route
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best courses after BA for good salary India: 8 paths ranked by real…”
- Title attribute: At a glance: Best courses after BA for good salary India: 8 paths…
- Caption (also keep the key point in the HTML text): Best courses after BA for good salary India, ranked by real cost, time, and pay: MBA, law via CLAT-PG, MA Economics, public policy, journalism…
**V2 — Comparison table** (place after the H2 “Best courses after BA, ranked by real ROI” #ranking)
- File: `best-courses-after-ba-for-good-salary-india-comparison-best-courses-after-ranked.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Ranked by real cost-to-income math, not brand perception.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Course | Real cost | Time and entry | Realistic salary range / Row: MBA (strong institute… | Rs 17-27 lakh at top… | 2 years full-time, entry… | Rs 22-36 LPA average at… / Row: MBA (weak or unranked… | Rs 3-12 lakh, commonly… | 2 years full-time | Rs 3.5-6 LPA, frequently… / Row: 3-year LLB (litigation or… | Rs 10,000-50,000 a year… | 3 years, entry via CUET… | Rs 4-10 LPA at a… / Row: LLM via CLAT-PG (after… | Rs 3,000-3 lakh depending… | 1 year on top of the… | Rs 6-20 LPA depending on… / Row: MA Economics (DSE… | Rs 10,000-30,000 a year… | 2 years, entry via CUET… | Rs 7-22 LPA at DSE…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Course Real cost Time and entry Realistic salary range MBA (strong institute: IIM, FMS, JBIMS) Rs 17-27 lakh at top IIMs; under Rs 2.5 lakh at FMS Delhi or DSE (government-subsidised) 2 years full-time, entry via CAT/XAT/CMAT Rs 22-36 LPA average at top IIMs;  | Before you shortlist anything on this table, run it against a strict planning check: a common heuristic is to keep any single course's fee within roughly 10% of your total education budget, and only go higher when you can point to specific, verifiable evidence
- Alt: Comparison table for “Best courses after BA, ranked by real ROI”: Course | Real cost | Time and entry |…; MBA (strong institute… | Rs 17-27…; MBA (weak or unranked……
- Title attribute: Best courses after BA, ranked by real ROI
- Caption (also keep the key point in the HTML text): Ranked by real cost-to-income math, not brand perception.
**V3 — Chronological timeline** (place after the H2 “2. Law: 3-year LLB, then CLAT-PG for an LLM” #law)
- File: `best-courses-after-ba-for-good-salary-india-chronological-law-year-llb-then.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Law is the path most guides skip when talking about BA graduates, because CLAT itself is usually associated…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Law is the path most guides skip when talking about BA graduates, because CLAT… / A BA graduate's actual route runs through a 3-year LLB first. / Government law colleges charge roughly Rs 10,000-50,000 a year, and private…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Government law colleges charge roughly Rs 10,000-50,000 a year, and private colleges commonly run Rs 1-5 lakh a year, with entry now largely through CUET PG or a university's own law entrance test. | Corporate law is one of the higher-paying entry fields once qualified: freshers can expect roughly Rs 40,000-80,000 a month at a strong firm, translating to Rs 4-10 LPA depending on the employer and city. | LLM fees at NLUs range roughly Rs 3,000-3 lakh, take about a year, and lead to specialised roles in IP, tax, or corporate and tech law paying Rs 6-20 LPA, a real step up from a generalist law degree alone.
- Alt: Chronological timeline for “2. Law: 3-year LLB, then CLAT-PG for an LLM”: Law is the path most guides skip when…; A BA graduate's actual route runs…; Government law…
- Title attribute: 2. Law: 3-year LLB, then CLAT-PG for an LLM
- Caption (also keep the key point in the HTML text): Law is the path most guides skip when talking about BA graduates, because CLAT itself is usually associated with 5-year integrated courses for…
**V4 — Linear process chain or roadmap** (place after the H2 “3. MA Economics: the quant-heavy route” #economics)
- File: `best-courses-after-ba-for-good-salary-india-linear-economics-quant-heavy-route.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: MA Economics is one of the most polarising options on this list.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): MA Economics is one of the most polarising options on this list. / Done at the right institute, it is a genuinely high-paying route. / Done anywhere else, it plateaus quickly.
- Numbers: use ONLY these facts from the article (exact values, no new ones): Delhi School of Economics reports salary packages between Rs 7-22 LPA with an average around Rs 11 LPA, placing students into business analysis, investment banking, and economic research roles at firms like Goldman Sachs, American Express, and Nomura. | JNU blends the same mathematical training with development-economics and policy work, and its highest reported off-campus placement has touched roughly Rs 33 LPA. | Honest take The same MA Economics degree from a general, lower-ranked university typically starts closer to Rs 4-6 LPA.
- Alt: Linear process chain or roadmap for “3. MA Economics: the quant-heavy route”: MA Economics is one of the most…; Done at the right institute, it is a…; Done anywhere…
- Title attribute: 3. MA Economics: the quant-heavy route
- Caption (also keep the key point in the HTML text): MA Economics is one of the most polarising options on this list.
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “6. Digital marketing certification” #digital-marketing)
- File: `best-courses-after-ba-for-good-salary-india-stat-digital-marketing-certification.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If a multi-year postgraduate degree does not fit your timeline or budget, this is the fastest-moving entry…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): If a multi-year postgraduate degree does not fit your timeline or budget, this… / Job-ready digital marketing certifications cost roughly Rs 40,000-1,00,000 and… / In-house freshers typically start around Rs 3.5-6 LPA, rising to Rs 6-12 LPA…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Job-ready digital marketing certifications cost roughly Rs 40,000-1,00,000 and run 3-8 months, with IIT-affiliated PG certificate programs running up to Rs 2 lakh for a more structured six-month track. | In-house freshers typically start around Rs 3.5-6 LPA, rising to Rs 6-12 LPA within 2-4 years. | Performance-marketing and marketing-analytics specialists command the strongest packages on this route, with some senior roles exceeding Rs 25-30 LPA.
- Alt: Stat panel or bar chart (only the numbers listed) for “6. Digital marketing certification”: If a multi-year postgraduate degree…; Job-ready digital marketing……
- Title attribute: 6. Digital marketing certification
- Caption (also keep the key point in the HTML text): If a multi-year postgraduate degree does not fit your timeline or budget, this is the fastest-moving entry track for a BA graduate right now, and it…
**V6 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “7. Data analytics for non-STEM graduates” #data-analytics)
- File: `best-courses-after-ba-for-good-salary-india-stat-data-analytics-non-stem.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the route BA graduates most often assume is closed to them, and it is not.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): This is the route BA graduates most often assume is closed to them, and it is… / Data analytics certification programs are specifically designed for… / Advanced certificate programs cost roughly Rs 30,000-1,80,000 and run 3-9…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Advanced certificate programs cost roughly Rs 30,000-1,80,000 and run 3-9 months, while a full post-graduate diploma can run up to Rs 6 lakh over 6-12 months. | Entry salaries typically start around Rs 4-6.5 LPA, rising to Rs 8-15 LPA within 3-5 years, and to Rs 20-25 LPA-plus in analytics leadership roles over a longer horizon.
- Alt: Stat panel or bar chart (only the numbers listed) for “7. Data analytics for non-STEM graduates”: This is the route BA graduates most…; Data analytics certification…
- Title attribute: 7. Data analytics for non-STEM graduates
- Caption (also keep the key point in the HTML text): This is the route BA graduates most often assume is closed to them, and it is not.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/best-courses-after-bcom-for-high-salary/

**H1:** Best courses after BCom for high salary: ranked by real cost-to-income math  
**Category:** college-degrees · **Words:** 5138 · **H2 sections:** 14 · **Search priority:** P1 (1 clicks, 316 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Best courses after BCom for high salary: ranked by real…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/best-courses-after-bcom-for-high-salary*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The real answer, not…”, “CA: highest ceiling…”, “CMA and CS: faster…”, “CFA, ACCA, and US CPA…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-courses-after-bcom-for-high-salary.webp`, `best-courses-after-bcom-for-high-salary-detail.webp`, `best-courses-after-bcom-for-high-salary-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `best-courses-after-bcom-for-high-salary-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-courses-after-bcom-for-high-salary-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a final-year student or recent graduate, a home desk near a window in the evening. Props that belong to “Best courses after BCom for high salary: ranked by real cost-to-income math”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best courses after BCom for high salary: ranked by real…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-courses-after-bcom-for-high-salary-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Best courses after BCom for high salary, ranked by real fees, duration, and pay: CA, CMA, CS, MBA, CFA, ACCA…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The real answer, not the placement-cell answer / Best courses after BCom for high salary, ranked by real ROI / CA: highest ceiling, longest, hardest odds / CMA and CS: faster, cheaper, still real credentials / MBA: the institute decides the outcome, not the label
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best courses after BCom for high salary: ranked by real…”
- Title attribute: At a glance: Best courses after BCom for high salary: ranked by real…
- Caption (also keep the key point in the HTML text): Best courses after BCom for high salary, ranked by real fees, duration, and pay: CA, CMA, CS, MBA, CFA, ACCA, US CPA, and analytics certifications…
**V2 — Comparison table** (place after the H2 “Best courses after BCom for high salary, ranked by real ROI” #ranking)
- File: `best-courses-after-bcom-for-high-salary-comparison-best-courses-after-bcom.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Ranked by real cost-to-income math, not brand perception.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Course | Real cost | Time to qualify | Realistic salary range / Row: CA (Chartered Accountancy) | Rs 90,000-1,40,000 in… | 3.5-5 years via direct… | Rs 6-11.5 LPA on… / Row: CMA (Cost and Management… | Rs 48,000-90,000 total… | 2-2.5 years via direct… | Rs 7-10 LPA on… / Row: CS (Company Secretary) | Rs 50,000-70,000 total… | 2-2.5 years via direct… | Rs 6-10 LPA on… / Row: MBA (strong institute… | Rs 17-27.5 lakh at IIMs… | 2 years full-time | Rs 22-35 LPA average at… / Row: MBA (weak or unranked… | Rs 3-12 lakh, often on an… | 2 years full-time | Rs 3.5-6 LPA, frequently…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Course Real cost Time to qualify Realistic salary range CA (Chartered Accountancy) Rs 90,000-1,40,000 in ICAI fees; Rs 3-6 lakh total with coaching 3.5-5 years via direct entry (BCom, 55%+) Rs 6-11.5 LPA on qualifying; Rs 15-30 LPA with 5-10 years CMA (Cost an | top IIMs) Rs 17-27.5 lakh at IIMs; Rs 16-25 lakh at strong private institutes 2 years full-time Rs 22-35 LPA average at top IIMs; Rs 15-22 LPA at strong Tier-2 institutes MBA (weak or unranked institute) Rs 3-12 lakh, often on an education loan 2 years full-ti
- Alt: Comparison table for “Best courses after BCom for high salary, ranked by…”: Course | Real cost | Time to qualify…; CA (Chartered Accountancy) | Rs…; CMA (Cost and…
- Title attribute: Best courses after BCom for high salary, ranked by real ROI
- Caption (also keep the key point in the HTML text): Ranked by real cost-to-income math, not brand perception.
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “CA: highest ceiling, longest, hardest odds” #ca)
- File: `best-courses-after-bcom-for-high-salary-stat-highest-ceiling-longest-hardest.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: CA is the course most BCom graduates hear about first, and understand the odds of least.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): CA is the course most BCom graduates hear about first, and understand the odds… / Under the ICAI Direct Entry Scheme, BCom graduates with 55% aggregate marks or… / Total ICAI fees across Intermediate and Final run roughly Rs 90,000-1,40,000…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Under the ICAI Direct Entry Scheme, BCom graduates with 55% aggregate marks or more skip CA Foundation entirely and register straight for CA Intermediate, saving roughly 8-12 months versus starting from the first level. | Total ICAI fees across Intermediate and Final run roughly Rs 90,000-1,40,000, though most students add coaching that pushes the real total to Rs 3-6 lakh. | ICAI reports the average CA salary through campus placements has risen to roughly Rs 11.5 LPA, with Big Four starting salaries around Rs 6-8 LPA and experienced CAs (5-10 years) earning Rs 15-30 LPA.
- Alt: Stat panel or bar chart (only the numbers listed) for “CA: highest ceiling, longest, hardest odds”: CA is the course most BCom graduates…; Under the ICAI Direct…
- Title attribute: CA: highest ceiling, longest, hardest odds
- Caption (also keep the key point in the HTML text): CA is the course most BCom graduates hear about first, and understand the odds of least.
**V4 — Decision tree** (place after the H2 “MBA: the institute decides the outcome, not the label” #mba)
- File: `best-courses-after-bcom-for-high-salary-decision-mba-institute-decides-outcome.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: No course on this list has a wider outcome gap between its best and worst version than MBA.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Your BCom placement season felt disappointing, so a two-year MBA feels like a safe delay. / You have not identified which specific function, finance, marketing, or operations… / You are comparing institutes on brochure salary numbers instead of the actual placement… / You have a CAT, XAT, or equivalent score that gets you into a genuinely strong institute… / You can fund it without a loan that outruns the realistic starting salary of that…
- Numbers: use ONLY these facts from the article (exact values, no new ones): IIM fees for the 2026-28 batch range from roughly Rs 17.3 lakh (IIM Kashipur) to Rs 27.5 lakh (IIM Ahmedabad). | Average placement packages at the top IIMs run Rs 22-35 LPA, with IIM Ahmedabad and IIM Bangalore averaging in the mid-30s and the highest reported packages touching roughly Rs 1 crore. | Strong Tier-2 private institutes such as SIBM, TAPMI, and Great Lakes charge roughly Rs 16-25 lakh with average placements around Rs 15-22 LPA.
- Alt: Decision tree for “MBA: the institute decides the outcome, not the label”: Your BCom placement season felt…; You have not identified which…; You are comparing…
- Title attribute: MBA: the institute decides the outcome, not the label
- Caption (also keep the key point in the HTML text): No course on this list has a wider outcome gap between its best and worst version than MBA.
**V5 — Linear process chain or roadmap** (place after the H2 “CFA, ACCA, and US CPA: the global-facing routes” #cfa-acca)
- File: `best-courses-after-bcom-for-high-salary-linear-cfa-acca-cpa-global.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If markets, equity research, or global finance interest you more than Indian statutory audit and compliance…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): If markets, equity research, or global finance interest you more than Indian… / CFA covers three levels, taking roughly 2.5-4 years in total, with total… / Charterholders in India average around Rs 9.8 LPA on qualifying, and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): CFA covers three levels, taking roughly 2.5-4 years in total, with total program cost, exam fees plus coaching, running roughly Rs 4.5-7 lakh. | Charterholders in India average around Rs 9.8 LPA on qualifying, and experienced charterholders at global investment firms and banks earn Rs 12-30 LPA or more. | ACCA is considerably cheaper and faster for BCom graduates specifically, because a BCom degree typically earns four paper exemptions, bringing total fees down to roughly Rs 1.6-1.75 lakh and completion time to 2-3 years plus a required 3 years of relevant work
- Alt: Linear process chain or roadmap for “CFA, ACCA, and US CPA: the global-facing routes”: If markets, equity research, or…; CFA covers three levels, taking……
- Title attribute: CFA, ACCA, and US CPA: the global-facing routes
- Caption (also keep the key point in the HTML text): If markets, equity research, or global finance interest you more than Indian statutory audit and compliance, these three international credentials…
**V6 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “MCom: the low-cost, low-ceiling safety option” #mcom)
- File: `best-courses-after-bcom-for-high-salary-stat-mcom-low-cost-low.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: MCom is the course most often chosen by default, not by decision, and that default choice deserves an honest…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): MCom is the course most often chosen by default, not by decision, and that… / MCom costs roughly Rs 10,000-1,50,000 per year depending on the college, and… / On its own, it typically caps out around Rs 4-8 LPA in general accounting…
- Numbers: use ONLY these facts from the article (exact values, no new ones): MCom costs roughly Rs 10,000-1,50,000 per year depending on the college, and takes 2 years. | On its own, it typically caps out around Rs 4-8 LPA in general accounting, banking, or finance roles. | UGC NET, which BCom alone does not qualify you for, opens Assistant Professor roles at Rs 8-15 LPA in government colleges and Rs 12-25 LPA at premier institutes, typically clearable within 6-12 months after MCom.
- Alt: Stat panel or bar chart (only the numbers listed) for “MCom: the low-cost, low-ceiling safety option”: MCom is the course most often chosen…; MCom costs roughly Rs…
- Title attribute: MCom: the low-cost, low-ceiling safety option
- Caption (also keep the key point in the HTML text): MCom is the course most often chosen by default, not by decision, and that default choice deserves an honest look at what it actually produces.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/best-diploma-courses-after-12th/

**H1:** Best diploma courses after 12th: 15 real options, real pay, real trade-offs  
**Category:** college-degrees · **Words:** 5184 · **H2 sections:** 20 · **Search priority:** P1 (3 clicks, 1251 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Best diploma courses after 12th: 15 real options, real pay…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/best-diploma-courses-after-12th*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“What actually counts as…”, “15 best diploma courses…”, “Engineering diplomas…”, “Business, finance, and…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 92%, 93%, 93%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-diploma-courses-after-12th.webp`, `best-diploma-courses-after-12th-detail.webp`, `best-diploma-courses-after-12th-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `best-diploma-courses-after-12th-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-diploma-courses-after-12th-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a Class 11-12 student with a parent or sibling nearby, a living-room sofa with notebooks on a low table. Props that belong to “Best diploma courses after 12th: 15 real options, real pay, real trade-offs”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best diploma courses after 12th: 15 real options, real pay, real…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-diploma-courses-after-12th-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Best diploma courses after 12th span engineering, paramedical, design, and digital tracks.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why "diploma" still sounds like a backup plan / What actually counts as a diploma after 12th / Best diploma courses after 12th: 15 real options compared / Engineering diplomas: the polytechnic route / Paramedical diplomas: DMLT, OT technician, nursing, physiotherapy
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best diploma courses after 12th: 15 real options, real pay, real…”
- Title attribute: At a glance: Best diploma courses after 12th: 15 real options, real…
- Caption (also keep the key point in the HTML text): Best diploma courses after 12th span engineering, paramedical, design, and digital tracks.
**V2 — Linear process chain or roadmap** (place after the H2 “Why "diploma" still sounds like a backup plan” #why)
- File: `best-diploma-courses-after-12th-linear-diploma-still-sounds-like.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most 12th-pass students hear the same script: a degree is the "real" path, and a diploma is what you settle…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): "Just do a degree, a diploma looks weak on a resume." / "Any diploma is basically the same, just pick the cheapest one nearby." / "Diplomas are only for students who could not get into a good degree college." / "Private diploma colleges with '100% placement' banners are automatically a safe bet."
- Numbers: use ONLY these facts from the article (exact values, no new ones): India needs more than 25 million skilled technicians by 2030 according to AICTE and McKinsey estimates, and the India Skills Report 2026 shows overall employability rising to 56.35% as skill-focused, diploma-style education expands. | The usual bad advice "Just do a degree, a diploma looks weak on a resume." "Any diploma is basically the same, just pick the cheapest one nearby." "Diplomas are only for students who could not get into a good degree college." "Private diploma colleges with '10
- Alt: Linear process chain or roadmap for “Why "diploma" still sounds like a backup plan”: "Just do a degree, a diploma looks…; "Any diploma is basically the same……
- Title attribute: Why "diploma" still sounds like a backup plan
- Caption (also keep the key point in the HTML text): Most 12th-pass students hear the same script: a degree is the "real" path, and a diploma is what you settle for if marks or money did not work out.
**V3 — Comparison table** (place after the H2 “Best diploma courses after 12th: 15 real options compared” #list)
- File: `best-diploma-courses-after-12th-comparison-best-diploma-courses-after.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A flat ranked list is not useful here, because "best" depends entirely on your stream, budget, and work style.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Diploma | Best for | Reality check / Row: Diploma in Mechanical… | Students who like… | Wide industry base (auto… / Row: Diploma in Civil… | Students who want… | Steady government demand… / Row: Diploma in Electrical /… | Students who want… | One of the stronger… / Row: Diploma in Computer… | Students who want… | Crowded at entry level.… / Row: DMLT (Medical Laboratory… | Students who want quick… | Genuine demand in…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Diploma in Pharmacy (D.Pharm) Students who want a licensed, registrable healthcare qualification in 2 years. | Entry pay is low in India; the real upside is usually cruise lines, Gulf postings, or a fast climb through operations into management over 5-8 years.
- Alt: Comparison table for “Best diploma courses after 12th: 15 real options…”: Diploma | Best for | Reality check; Diploma in Mechanical… | Students who…; Diploma in…
- Title attribute: Best diploma courses after 12th: 15 real options compared
- Caption (also keep the key point in the HTML text): A flat ranked list is not useful here, because "best" depends entirely on your stream, budget, and work style.
**V4 — Self-assessment checklist** (place after the H2 “Design, fashion, and hospitality diplomas” #creative)
- File: `best-diploma-courses-after-12th-self-design-fashion-hospitality-diplomas.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Hotel management, fashion design, and interior design diplomas share one honest pattern: the certificate…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Hotel management / Fashion and interior design / Entry pay: Roughly Rs 15,000-40,000 a month in India. / Real upside: Cruise lines, Gulf postings, and a 5-8 year climb through operations into… / Watch-out: Shift work and guest-facing pressure are constant from day one. / Entry pay: Roughly Rs 10,000-20,000 a month for fashion; interior design income is almost… / Real upside: A strong, judged portfolio can out-earn a design degree with no visible work.
- Numbers: use ONLY these facts from the article (exact values, no new ones): Hotel management Entry pay: Roughly Rs 15,000-40,000 a month in India. | Real upside: Cruise lines, Gulf postings, and a 5-8 year climb through operations into management, not a fast domestic jump. | Fashion and interior design Entry pay: Roughly Rs 10,000-20,000 a month for fashion; interior design income is almost entirely portfolio and referral-driven.
- Alt: Self-assessment checklist for “Design, fashion, and hospitality diplomas”: Hotel management; Fashion and interior design; Entry pay: Roughly Rs 15,000-40,000 a…
- Title attribute: Design, fashion, and hospitality diplomas
- Caption (also keep the key point in the HTML text): Hotel management, fashion design, and interior design diplomas share one honest pattern: the certificate opens the door, and the portfolio decides…
**V5 — Comparison table** (place after the H2 “Real fees: government vs private diploma colleges” #fees)
- File: `best-diploma-courses-after-12th-comparison-real-fees-government-private.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The single biggest, most controllable cost decision on this list is government seat versus private seat…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: State / example | Approximate… / Row: Tamil Nadu | Approx. Rs… / Row: West Bengal | Approx. Rs 3,000/year or… / Row: Telangana (Hyderabad) | Approx. Rs… / Row: Maharashtra (Mumbai) | Approx. Rs 17,300 total… / Row: National range (govt… | Roughly Rs…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Rs 4,000-6,000/year (about Rs 18,000 for full 3 years) West Bengal Approx. | Rs 3,000/year or less Telangana (Hyderabad) Approx. | Rs 6,000-7,600/year Maharashtra (Mumbai) Approx.
- Alt: Comparison table for “Real fees: government vs private diploma colleges”: State / example | Approximate…; Tamil Nadu | Approx. Rs…; West Bengal | Approx. Rs…
- Title attribute: Real fees: government vs private diploma colleges
- Caption (also keep the key point in the HTML text): The single biggest, most controllable cost decision on this list is government seat versus private seat, because the certificate itself is formally…
**V6 — Self-assessment checklist** (place after the H2 “Lateral entry: the bridge back to a full degree” #lateral-entry)
- File: `best-diploma-courses-after-12th-self-lateral-entry-bridge-back.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If there is any chance you will want a full engineering degree later, check the lateral-entry math before you…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Eligibility and seats / Process and outcome / Minimum marks: At least 45% aggregate across all years of the diploma (40% for SC/ST… / Branch match required: Your target B.Tech branch generally has to match or closely relate… / Dedicated seats: Most states reserve roughly 10-15% of each B.Tech branch's approved… / No real gap-year penalty: There is no upper age limit and no meaningful maximum gap… / Equal final qualification: AICTE treats a lateral-entry B.Tech as on par with a regular…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Eligibility and seats Minimum marks: At least 45% aggregate across all years of the diploma (40% for SC/ST candidates) under current AICTE norms. | Dedicated seats: Most states reserve roughly 10-15% of each B.Tech branch's approved intake specifically for lateral-entry diploma and BSc holders.
- Alt: Self-assessment checklist for “Lateral entry: the bridge back to a full degree”: Eligibility and seats; Process and outcome; Minimum marks: At least 45% aggregate…
- Title attribute: Lateral entry: the bridge back to a full degree
- Caption (also keep the key point in the HTML text): If there is any chance you will want a full engineering degree later, check the lateral-entry math before you enrol, not after.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/best-postgraduate-courses-for-science-students-india/

**H1:** Best postgraduate courses for science students India: the full map by subject  
**Category:** college-degrees · **Words:** 4595 · **H2 sections:** 15 · **Search priority:** P1 (10 clicks, 1354 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Best postgraduate courses for science students India: the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/best-postgraduate-courses-for-science-students-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The honest answer…”, “Every postgraduate…”, “Best routes if you…”, “Best routes if you…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-postgraduate-courses-for-science-students-india.webp`, `best-postgraduate-courses-for-science-students-india-detail.webp`, `best-postgraduate-courses-for-science-students-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `best-postgraduate-courses-for-science-students-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-postgraduate-courses-for-science-students-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a Class 12 or first-year medical aspirant, a home study corner with natural window light. Props that belong to “Best postgraduate courses for science students India: the full map by subject”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best postgraduate courses for science students India: the full map by…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-postgraduate-courses-for-science-students-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Best postgraduate courses for science students India, mapped by Physics, Chemistry, Biology, Maths, and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The honest answer before the list / Every postgraduate route, compared / Best routes if you studied Physics / Best routes if you studied Chemistry / Best routes if you studied Biology or Life Sciences
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best postgraduate courses for science students India: the full map by…”
- Title attribute: At a glance: Best postgraduate courses for science students India…
- Caption (also keep the key point in the HTML text): Best postgraduate courses for science students India, mapped by Physics, Chemistry, Biology, Maths, and Computer Science: MSc, PhD, MBA, GATE…
**V2 — Comparison table** (place after the H2 “Every postgraduate route, compared” #routes)
- File: `best-postgraduate-courses-for-science-students-india-comparison-every-postgraduate-route-compared.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Eight routes, compared on real entry requirements, real time, and real outcomes.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Route | Entry | Time | Realistic outcome / Row: MSc (Physics, Chemistry… | IIT JAM, CUET PG, or… | 2 years | Feeds into CSIR-NET/JRF… / Row: M.Tech in an… | GATE score in the… | 2 years | A narrower option than a… / Row: PhD / Integrated PhD | CSIR-NET JRF, GATE, or… | 4-6 years for a… | Rs 37,000-42,000/month… / Row: MBA | CAT, XAT, CMAT, or GMAT… | 2 years | Institute-dependent.… / Row: Actuarial science (via… | ACET entrance test… | 5-10 years to full… | Rs 6-10 LPA as a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Route Entry Time Realistic outcome MSc (Physics, Chemistry, Life Sciences, Maths, Statistics) IIT JAM, CUET PG, or university-specific test; bachelor's degree in the subject, usually 50%+ aggregate 2 years Feeds into CSIR-NET/JRF, PhD, teaching, or a certifica | M.Tech in an interdisciplinary department (for MSc holders) GATE score in the relevant paper (Physics, Chemistry, Maths, Life Sciences); offered at select IITs in applied physics, instrumentation, nanoscience, or materials science 2 years A narrower option tha | PhD / Integrated PhD CSIR-NET JRF, GATE, or JEST (Physics); Integrated PhD at IISc, TIFR, IISERs after a bachelor's degree 4-6 years for a standalone PhD; 5-6 years for an Integrated PhD after a bachelor's degree Rs 37,000-42,000/month stipend on a CSIR/UGC fe
- Alt: Comparison table for “Every postgraduate route, compared”: Route | Entry | Time | Realistic…; MSc (Physics, Chemistry… | IIT JAM…; M.Tech in an… | GATE score in…
- Title attribute: Every postgraduate route, compared
- Caption (also keep the key point in the HTML text): Eight routes, compared on real entry requirements, real time, and real outcomes.
**V3 — Linear process chain or roadmap** (place after the H2 “Best routes if you studied Physics” #physics)
- File: `best-postgraduate-courses-for-science-students-india-linear-best-routes-studied-physics.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Physics has the clearest fork of any subject on this list: a well-funded research path, or a quantitative…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Physics has the clearest fork of any subject on this list: a well-funded… / If you want research or academia MSc Physics, then CSIR-NET JRF or JEST JEST is… / CSIR-NET JRF does the same for a wider set of universities and comes with a JRF…
- Numbers: use ONLY these facts from the article (exact values, no new ones): CSIR-NET JRF does the same for a wider set of universities and comes with a JRF stipend of Rs 37,000/month, rising to Rs 42,000/month as SRF, plus an annual contingency grant. | JEST eligibility needs a bachelor's degree in Physics or a related field with 55% aggregate (50% for reserved categories), and a qualifying score stays usable until the next JEST cycle's results are announced.
- Alt: Linear process chain or roadmap for “Best routes if you studied Physics”: Physics has the clearest fork of any…; If you want research or academia MSc…; CSIR-NET JRF…
- Title attribute: Best routes if you studied Physics
- Caption (also keep the key point in the HTML text): Physics has the clearest fork of any subject on this list: a well-funded research path, or a quantitative pivot into industry.
**V4 — Linear process chain or roadmap** (place after the H2 “Best routes if you studied Chemistry” #chemistry)
- File: `best-postgraduate-courses-for-science-students-india-linear-best-routes-studied-chemistry.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Chemistry splits similarly to Physics, but the industry side leans harder toward pharma and regulatory work…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Chemistry splits similarly to Physics, but the industry side leans harder… / If you want research MSc Chemistry, then CSIR-NET JRF in Chemical Sciences This… / If you want industry Pharma, regulatory affairs, or clinical research A…
- Numbers: use ONLY these facts from the article (exact values, no new ones): If you want research MSc Chemistry, then CSIR-NET JRF in Chemical Sciences This is the most direct route into a funded PhD at a CSIR lab, an IIT, or a university chemistry department, with the same Rs 37,000-42,000/month JRF/SRF stipend structure as the other  | Honest take Regulatory affairs freshers commonly start around Rs 3-7 LPA and can progress well past Rs 25 LPA with experience, but almost nobody hires on the MSc alone.
- Alt: Linear process chain or roadmap for “Best routes if you studied Chemistry”: Chemistry splits similarly to…; If you want research MSc Chemistry…; If you want…
- Title attribute: Best routes if you studied Chemistry
- Caption (also keep the key point in the HTML text): Chemistry splits similarly to Physics, but the industry side leans harder toward pharma and regulatory work rather than a general quant pivot.
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Best routes if you studied Maths or Statistics” #maths)
- File: `best-postgraduate-courses-for-science-students-india-stat-best-routes-studied-maths.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Maths and Statistics graduates have the strongest, widest set of options on this entire list, because…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Maths and Statistics graduates have the strongest, widest set of options on… / If you want research or teaching MSc Maths or Statistics, then CSIR-NET or NBHM… / If you want the highest realistic ceiling Actuarial science, or a Data Science…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Actuarial science has the steeper qualification path (5-10 years through IAI exams) but also the highest documented ceiling on this entire list: Rs 30-60 LPA once Fellow-qualified, in a field where India has fewer than 500 qualified Fellows against a fast-grow | Actuarial science has one of the steepest documented salary curves of any postgraduate route in this guide, each set of two to three IAI exams cleared adds roughly Rs 3-8 LPA, but it requires years of sustained exam discipline, not a single degree.
- Alt: Stat panel or bar chart (only the numbers listed) for “Best routes if you studied Maths or Statistics”: Maths and Statistics graduates have…; If you want research…
- Title attribute: Best routes if you studied Maths or Statistics
- Caption (also keep the key point in the HTML text): Maths and Statistics graduates have the strongest, widest set of options on this entire list, because quantitative reasoning transfers directly into…
**V6 — Asymmetrical pros-and-cons comparison** (place after the H2 “Certifications worth the money” #certifications)
- File: `best-postgraduate-courses-for-science-students-india-asymmetrical-certifications-worth-money.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Not every strong postgraduate move is a two-year degree.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Not every strong postgraduate move is a two-year degree. / Three certification-led routes show up repeatedly across the subjects above… / Actuarial science Entry runs through the ACET exam, followed by 13-15 IAI exams…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A Maths, Statistics, or Physics base makes the coursework considerably easier and the eventual salary range (commonly Rs 6-15 LPA at entry) considerably more reliable. | Biotech regulatory affairs and clinical research Most programs here run 6-12 months with no entrance exam, built for Life Sciences, Biotechnology, or Pharmacy graduates specifically. | The realistic pay curve moves slowly at entry (Rs 2.4-4.5 LPA) but climbs meaningfully once you are inside a Clinical Research Associate or regulatory role, particularly with added training in FDA, EMA, or ICH-style global standards.
- Alt: Asymmetrical pros-and-cons comparison for “Certifications worth the money”: Not every strong postgraduate move is…; Three certification-led routes show…; Actuarial…
- Title attribute: Certifications worth the money
- Caption (also keep the key point in the HTML text): Not every strong postgraduate move is a two-year degree.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/career-without-degree-after-12th-india/

**H1:** Career without a degree after 12th India: 15 paths across tech, trades, and government exams  
**Category:** college-degrees · **Words:** 4425 · **H2 sections:** 11 · **Search priority:** P1 (31 clicks, 2477 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Career without a degree after 12th India: 15 paths across…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/career-without-degree-after-12th-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The direct answer”, “The reality check…”, “15 real paths without a…”, “Tech and digital skill…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `career-without-degree-after-12th-india.webp`, `career-without-degree-after-12th-india-detail.webp`, `career-without-degree-after-12th-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `career-without-degree-after-12th-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `career-without-degree-after-12th-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a Class 11-12 student with a parent or sibling nearby, a counselling room with a plain wooden table. Props that belong to “Career without a degree after 12th India: 15 paths across tech, trades, and…”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Career without a degree after 12th India: 15 paths across tech…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `career-without-degree-after-12th-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A career without degree after 12th India is realistic in tech, trades, sales, and government roles — if you…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The direct answer to "career without degree after 12th India" / The reality check before you decide / 15 real paths without a degree after 12th / Salary reality across all 15 paths / The degree-only myth vs the degree-optional truth
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Career without a degree after 12th India: 15 paths across tech…”
- Title attribute: At a glance: Career without a degree after 12th India: 15 paths…
- Caption (also keep the key point in the HTML text): A career without degree after 12th India is realistic in tech, trades, sales, and government roles — if you pick proof over hope.
**V2 — Decision tree** (place after the H2 “The reality check before you decide” #reality-check)
- File: `career-without-degree-after-12th-india-decision-reality-check-before-decide.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before the list of paths, two numbers deserve your full attention, because they cut in opposite directions…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The case for skill-first paths / The case for caution / Graduate unemployment in India sits at roughly 11.2%, more than three times the national… / Only about 42.6% of Indian graduates are considered employable, according to the… / 82% of Indian employers say they struggle to find candidates with the right practical… / Employability still varies sharply by field: management graduates show roughly 78%… / Broader research on college dropouts shows they earn less on average and face higher…
- Numbers: use ONLY these facts from the article (exact values, no new ones): The case for skill-first paths Graduate unemployment in India sits at roughly 11.2%, more than three times the national average, and more than a third of graduates in their early twenties are unemployed. | Only about 42.6% of Indian graduates are considered employable, according to the Mercer-Mettl India Graduate Skill Index, drawn from 2,700+ campuses and over a million students. | 82% of Indian employers say they struggle to find candidates with the right practical skills — meaning real, unmet demand exists for people who can prove capability.
- Alt: Decision tree for “The reality check before you decide”: The case for skill-first paths; The case for caution; Graduate unemployment in India sits…
- Title attribute: The reality check before you decide
- Caption (also keep the key point in the HTML text): Before the list of paths, two numbers deserve your full attention, because they cut in opposite directions and both are true at once.
**V3 — Linear process chain or roadmap** (place after the H2 “15 real paths without a degree after 12th” #paths)
- File: `career-without-degree-after-12th-india-linear-real-paths-without-degree.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: These are grouped by category so you can compare within a lane instead of across four unrelated ones.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Tech and digital skill routes / ITI, diploma, and technical trades / Government and defence routes (no degree needed) / Professional courses that start after 12th, not after a degree / Sales, freelancing, and business routes
- Numbers: use ONLY these facts from the article (exact values, no new ones): Tech and digital skill routes Tech Full-stack or front-end web development A 4-9 month bootcamp plus 3-5 deployed projects on GitHub is what gets non-CS candidates hired at ₹4-8 LPA in Indian product companies and startups. | Freshers with 3+ real case studies land ₹4-8 LPA; self-taught designers get hired at the same rate as design-degree holders. | Digital Digital marketing and performance marketing A 4-7 month certificate costing roughly ₹10,000-1,00,000 gets freshers into ₹2.5-5 LPA entry roles; social-media-specific entry roles often start lower, around ₹15,000-25,000 a month.
- Alt: Linear process chain or roadmap for “15 real paths without a degree after 12th”: Tech and digital skill routes; ITI, diploma, and technical trades; Government and…
- Title attribute: 15 real paths without a degree after 12th
- Caption (also keep the key point in the HTML text): These are grouped by category so you can compare within a lane instead of across four unrelated ones.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “The degree-only myth vs the degree-optional truth” #degree-myth)
- File: `career-without-degree-after-12th-india-asymmetrical-degree-only-myth-degree.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Neither extreme view survives contact with the actual data.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Doesn't explain why 11.2% of graduates are unemployed and only 42.6% are considered… / Ignores that 82% of employers say the real gap is practical skill, not credential count. / Treats every degree as equal, when employability swings from roughly 58% to 78% depending… / Ignores that college dropouts, on average, earn less and face higher unemployment than… / Ignores that UPSC civil services, medicine, law practice, and chartered accountancy…
- Numbers: use ONLY these facts from the article (exact values, no new ones): "A degree is the only safe path" Doesn't explain why 11.2% of graduates are unemployed and only 42.6% are considered employable by industry standards. | Ignores that 82% of employers say the real gap is practical skill, not credential count. | Treats every degree as equal, when employability swings from roughly 58% to 78% depending on the field.
- Alt: Asymmetrical pros-and-cons comparison for “The degree-only myth vs the degree-optional truth”: Doesn't explain why 11.2% of…; Ignores that 82% of employers say…
- Title attribute: The degree-only myth vs the degree-optional truth
- Caption (also keep the key point in the HTML text): Neither extreme view survives contact with the actual data.
**V5 — Linear process chain or roadmap** (place after the H2 “How to have this conversation with your parents” #parents)
- File: `career-without-degree-after-12th-india-linear-have-conversation-parents.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: In Indian households, a degree is often read as a stand-in for stability, family reputation, and proof that…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Name the specific path, not "something in skills." "I want to do a full-stack bootcamp… / Bring the real cost and real timeline. Say the actual number and the actual 6-18 month… / Show one piece of current evidence. A live job posting for your target role, a placement… / Name your own backup plan out loud. What happens if this path does not work in 12 months…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Say the actual number and the actual 6-18 month runway before income starts, not an optimistic guess. | What happens if this path does not work in 12 months — a related degree still open, a different skill, or an exam track in parallel.
- Alt: Linear process chain or roadmap for “How to have this conversation with your parents”: Name the specific path, not…; Bring the real cost and real…; Show one piece…
- Title attribute: How to have this conversation with your parents
- Caption (also keep the key point in the HTML text): In Indian households, a degree is often read as a stand-in for stability, family reputation, and proof that the years of school pressure led…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/how-to-read-college-placement-report-india/

**H1:** How to read a college placement report India: the 7-signal decoding framework  
**Category:** college-degrees · **Words:** 4290 · **H2 sections:** 14 · **Search priority:** P1 (2 clicks, 700 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “How to read a college placement report India: the 7-signal…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/how-to-read-college-placement-report-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The direct answer”, “Signal 1: Median vs…”, “Signal 2: The…”, “Signal 3: Package vs…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `how-to-read-college-placement-report-india.webp`, `how-to-read-college-placement-report-india-detail.webp`, `how-to-read-college-placement-report-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `how-to-read-college-placement-report-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `how-to-read-college-placement-report-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a final-year student or recent graduate, a quiet corner of a library. Props that belong to “How to read a college placement report India: the 7-signal decoding framework”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How to read a college placement report India: the 7-signal decoding…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-to-read-college-placement-report-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to read a college placement report India: decode median vs average, spot small-sample tricks, tell CTC…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The direct answer: how to read a college placement report in India / Signal 1: Median vs average vs highest package / Signal 2: The denominator trick behind every "100%" claim / Signal 3: Package vs offer vs joining are three different events / Signal 4: CTC vs in-hand salary — the gap nobody prints on the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to read a college placement report India: the 7-signal decoding…”
- Title attribute: At a glance: How to read a college placement report India: the…
- Caption (also keep the key point in the HTML text): How to read a college placement report India: decode median vs average, spot small-sample tricks, tell CTC from in-hand, and verify claims before you…
**V2 — Linear process chain or roadmap** (place after the H2 “The direct answer: how to read a college placement report in India” #answer)
- File: `how-to-read-college-placement-report-india-linear-direct-answer-read-college.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every placement report is built from the same handful of numbers — highest package, average package, median…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Seeing "Highest package: Rs 42 LPA" and assuming that reflects a typical outcome. / Seeing "98% placement" and assuming it means 98% of the entire graduating batch. / Treating "package" and "in-hand salary" as the same number. / Treating an "offer" and an actual job as the same guaranteed outcome.
- Numbers: use ONLY these facts from the article (exact values, no new ones): The usual reading mistake Seeing "Highest package: Rs 42 LPA" and assuming that reflects a typical outcome. | Seeing "98% placement" and assuming it means 98% of the entire graduating batch.
- Alt: Linear process chain or roadmap for “The direct answer: how to read a college placement…”: Seeing "Highest package: Rs 42 LPA"…; Seeing "98% placement" and…
- Title attribute: The direct answer: how to read a college placement report in India
- Caption (also keep the key point in the HTML text): Every placement report is built from the same handful of numbers — highest package, average package, median package, placement percentage, and…
**V3 — Comparison table** (place after the H2 “Signal 1: Median vs average vs highest package” #signal-1)
- File: `how-to-read-college-placement-report-india-comparison-signal-median-average-highest.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: These three numbers can come from the exact same batch of students and tell three very different stories.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Term | What it actually means | Where it misleads you / Row: Highest package | The single best offer in… | Usually 1-3 students out… / Row: Average (mean) package | Total of all reported… | Skewed upward by a… / Row: Median package | The middle value when… | Half the batch earned…
- Numbers: use ONLY these facts from the article (exact values, no new ones): This is the number closest to "what will probably happen to me." Honest take Picture two colleges that both report an average package of Rs 20 lakh. | College A has a median of Rs 19 lakh — the whole batch earned close to that average. | College B has a median of Rs 13 lakh — a handful of very high offers pulled the average up while most students earned well below it.
- Alt: Comparison table for “Signal 1: Median vs average vs highest package”: Term | What it actually means | Where…; Highest package | The single best…; Average (mean)…
- Title attribute: Signal 1: Median vs average vs highest package
- Caption (also keep the key point in the HTML text): These three numbers can come from the exact same batch of students and tell three very different stories.
**V4 — Comparison table** (place after the H2 “Signal 4: CTC vs in-hand salary — the gap nobody prints on the brochure” #signal-4)
- File: `how-to-read-college-placement-report-india-comparison-signal-ctc-hand-salary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every package figure in a placement report is almost always CTC (Cost to Company), not the amount that…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Factor | CTC (the number in… | In-hand (the number… / Row: What it includes | Basic pay, HRA… | Only the cash that lands… / Row: Typical gap | A reported ₹12 LPA CTC is… | The same ₹12 LPA CTC… / Row: Why colleges report CTC | CTC is the larger, more… | In-hand is rarely…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Factor CTC (the number in the report) In-hand (the number in the bank) What it includes Basic pay, HRA, allowances, employer PF contribution, gratuity, insurance premiums, performance bonus targets, and other employer-side costs Only the cash that lands in the | But if you are building a household budget or comparing two offers, run every CTC figure in a placement report through a quick mental model: basic pay is usually 40-50% of CTC and is fully taxable, employer PF contributions never touch your account directly, a
- Alt: Comparison table for “Signal 4: CTC vs in-hand salary — the gap nobody…”: Factor | CTC (the number in… |…; What it includes | Basic pay, HRA… |…; Typical gap | A…
- Title attribute: Signal 4: CTC vs in-hand salary — the gap nobody prints on the…
- Caption (also keep the key point in the HTML text): Every package figure in a placement report is almost always CTC (Cost to Company), not the amount that reaches a graduate's bank account.
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “Red flags that mean a placement report is not trustworthy” #red-flags)
- File: `how-to-read-college-placement-report-india-asymmetrical-red-flags-mean-placement.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 A headline number with no supporting breakdown If a brochure or website leads with "Highest package: Rs 44…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 01 A headline number with no supporting breakdown If a brochure or website… / A college confident in its typical outcome usually shows the median too. / 02 Recruiter names with no offer count attached A long logo wall of…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 01 A headline number with no supporting breakdown If a brochure or website leads with "Highest package: Rs 44 LPA" in large text and gives no median, no average, and no branch-wise split anywhere near it, treat that as a marketing choice, not a data disclosure | 04 A placement percentage that does not match independent employability data National employability studies for India's graduating population sit meaningfully below 100% even in a strong year. | A specific college claiming 100% placement across every branch, every year, with no exceptions, is claiming an outcome that is unusually rare — worth extra scrutiny, not automatic acceptance.
- Alt: Asymmetrical pros-and-cons comparison for “Red flags that mean a placement report is not…”: 01 A headline number with no…; A college confident in its typical…; 02…
- Title attribute: Red flags that mean a placement report is not trustworthy
- Caption (also keep the key point in the HTML text): 01 A headline number with no supporting breakdown If a brochure or website leads with "Highest package: Rs 44 LPA" in large text and gives no median…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/lateral-entry-mba-india/

**H1:** Lateral entry MBA India: what it actually means, and who it is for  
**Category:** college-degrees · **Words:** 3568 · **H2 sections:** 13 · **Search priority:** P1 (9 clicks, 661 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Lateral entry MBA India: what it actually means, and who it…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/lateral-entry-mba-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Not the BTech diploma…”, “How MBA lateral entry…”, “Who is eligible”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `lateral-entry-mba-india.webp`, `lateral-entry-mba-india-detail.webp`, `lateral-entry-mba-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `lateral-entry-mba-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `lateral-entry-mba-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a final-year student or recent graduate, a quiet corner of a library. Props that belong to “Lateral entry MBA India: what it actually means, and who it is for”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Lateral entry MBA India: what it actually means, and who it is for
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `lateral-entry-mba-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Lateral entry MBA India usually means direct admission into MBA year 2 for PGDM holders or working…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer: a real but narrow route, not the diploma-to-degree… / If you actually meant BTech lateral entry, here is the real version / How MBA lateral entry actually works, when it is genuine / Who is actually eligible / The two versions colleges actually offer, side by side
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Lateral entry MBA India: what it actually means, and who it is for”
- Title attribute: At a glance: Lateral entry MBA India: what it actually means, and who…
- Caption (also keep the key point in the HTML text): Lateral entry MBA India usually means direct admission into MBA year 2 for PGDM holders or working professionals, not the BTech diploma route.
**V2 — Linear process chain or roadmap** (place after the H2 “The short answer: a real but narrow route, not the diploma-to-degree scheme you…” #answer)
- File: `lateral-entry-mba-india-linear-short-answer-real-but.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: In Indian higher education, "lateral entry" almost always means one specific thing first: a diploma holder in…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): In Indian higher education, "lateral entry" almost always means one specific… / That version is standardised nationally by AICTE, applies at practically every… / "Lateral entry MBA" is a different, much smaller concept that borrows the same…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “The short answer: a real but narrow route, not the…”: In Indian higher education, "lateral…; That version is standardised……
- Title attribute: The short answer: a real but narrow route, not the diploma-to-degree…
- Caption (also keep the key point in the HTML text): In Indian higher education, "lateral entry" almost always means one specific thing first: a diploma holder in engineering joining a BTech program…
**V3 — Decision tree by situation** (place after the H2 “If you actually meant BTech lateral entry, here is the real version” #not-btech)
- File: `lateral-entry-mba-india-decision-actually-meant-btech-lateral.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If your search for "lateral entry MBA" was really about entering an engineering degree after a diploma, the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): If your search for "lateral entry MBA" was really about entering an engineering… / Diploma holders in engineering, and in some states BSc graduates, can join a… / This route typically runs about 3 years total instead of the standard 4…
- Numbers: use ONLY these facts from the article (exact values, no new ones): This route typically runs about 3 years total instead of the standard 4, follows a consistent national framework, and results in the exact same BTech degree as a student who completed all four years.
- Alt: Decision tree by situation for “If you actually meant BTech lateral entry, here is the…”: If your search for "lateral entry…; Diploma holders in engineering, and……
- Title attribute: If you actually meant BTech lateral entry, here is the real version
- Caption (also keep the key point in the HTML text): If your search for "lateral entry MBA" was really about entering an engineering degree after a diploma, the term you want is BTech lateral entry…
**V4 — Comparison table** (place after the H2 “The two versions colleges actually offer, side by side” #variants)
- File: `lateral-entry-mba-india-comparison-two-versions-colleges-actually.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Because "lateral entry MBA" is used loosely across the market, it helps to see the real difference between…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: What differs | Lateral entry MBA (as… | Regular 2-year MBA / Row: What actually happens | You join directly in year… | You complete both years… / Row: Who typically qualifies | Candidates who finished… | Any graduate with a… / Row: Entrance exam | Varies widely by… | CAT, XAT, GMAT, CMAT, or… / Row: Typical duration | 1 to 1.5 years at the… | 2 years, matching UGC… / Row: Recognition risk | Real risk exists if the… | Low risk at a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Who typically qualifies Candidates who finished year 1 of a related PGDM/Masters elsewhere, or who hold a 4-year BTech/BBA and meet the institute's own bridge criteria; some programs also weight 2-5 years of work experience. | Any graduate with a recognised bachelor's degree, usually 50%+ marks, who clears an entrance exam. | Typical duration 1 to 1.5 years at the specific institute, sold as a time-saver.
- Alt: Comparison table for “The two versions colleges actually offer, side by side”: What differs | Lateral entry MBA (as……; What actually happens | You join…; Who…
- Title attribute: The two versions colleges actually offer, side by side
- Caption (also keep the key point in the HTML text): Because "lateral entry MBA" is used loosely across the market, it helps to see the real difference between what people usually search for and what…
**V5 — Self-assessment checklist** (place after the H2 “Regular MBA and Executive MBA: the two steadier alternatives” #alternatives)
- File: `lateral-entry-mba-india-self-regular-mba-executive-mba.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before committing to a lateral-entry route, it is worth comparing it honestly against the two paths most…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Best for fresh graduates or professionals with 0-3 years of experience. / Admission through CAT, XAT, GMAT, CMAT, or MAT; work experience helps but is not… / Widest institute choice, including every IIM and most top-ranked B-schools. / Lowest recognition risk when the institute itself is properly accredited. / Built specifically for experienced professionals, typically requiring 2-5 years of work…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Regular 2-year MBA Best for fresh graduates or professionals with 0-3 years of experience. | Executive MBA Built specifically for experienced professionals, typically requiring 2-5 years of work experience, with some premium programs asking for 10+ years. | Treat the fee for any lateral-entry, regular, or Executive MBA as a strict planning check, not just a number on a brochure: a common heuristic is to keep total course fees within roughly 10% of your total education budget unless you can point to specific, prog
- Alt: Self-assessment checklist for “Regular MBA and Executive MBA: the two steadier…”: Best for fresh graduates or…; Admission through CAT, XAT, GMAT…; Widest institute…
- Title attribute: Regular MBA and Executive MBA: the two steadier alternatives
- Caption (also keep the key point in the HTML text): Before committing to a lateral-entry route, it is worth comparing it honestly against the two paths most working professionals and graduates actually…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/mba-finance-vs-marketing-india/

**H1:** MBA finance vs marketing India: the honest head-to-head before you pick  
**Category:** college-degrees · **Words:** 3070 · **H2 sections:** 11 · **Search priority:** P1 (1 clicks, 289 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “MBA finance vs marketing India: the honest head-to-head…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/mba-finance-vs-marketing-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Mba Finance”, “Marketing India”, “The short answer”, “Which one actually fits…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `mba-finance-vs-marketing-india.webp`, `mba-finance-vs-marketing-india-detail.webp`, `mba-finance-vs-marketing-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `mba-finance-vs-marketing-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `mba-finance-vs-marketing-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a final-year student or recent graduate, a neighbourhood cafe table. Props that belong to “MBA finance vs marketing India: the honest head-to-head before you pick”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: MBA finance vs marketing India: the honest head-to-head before you…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `mba-finance-vs-marketing-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: MBA finance vs marketing India compared on real fit, placement packages, recruiter patterns, and career…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on MBA finance vs marketing India / Which one actually fits you / What the work looks like, year one / Placement packages compared / Who actually recruits for each
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “MBA finance vs marketing India: the honest head-to-head before you…”
- Title attribute: At a glance: MBA finance vs marketing India: the honest head-to-head…
- Caption (also keep the key point in the HTML text): MBA finance vs marketing India compared on real fit, placement packages, recruiter patterns, and career ceiling — CFO track vs CMO track — so you…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “Which one actually fits you” #fit-test)
- File: `mba-finance-vs-marketing-india-asymmetrical-one-actually-fits.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Skip the personality quiz and run a more honest self-check instead.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You would rather find the flaw in a spreadsheet than the flaw in a campaign headline. / You are comfortable being the person who says "the numbers do not support this" in a room… / You like rules, frameworks, and a right-or-wrong answer more than an open-ended brief. / Risk makes you cautious and curious at the same time, not anxious. / You notice why one ad stops your scroll and another does not, without being told to look.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Which one actually fits you”: You would rather find the flaw in a…; You are comfortable being the person…; You like…
- Title attribute: Which one actually fits you
- Caption (also keep the key point in the HTML text): Skip the personality quiz and run a more honest self-check instead.
**V3 — Comparison table** (place after the H2 “What the work looks like, year one” #day-to-day)
- File: `mba-finance-vs-marketing-india-comparison-work-looks-like-year.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Salary charts and brochure copy do not show you the actual texture of the job.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Area | Finance | Marketing / Row: A typical Tuesday | Building or auditing a… | Reviewing campaign… / Row: What gets you praised | Catching an error before… | A campaign that moved a… / Row: What gets you in trouble | A model with a broken… | A campaign that looked… / Row: Who you work with most | Controllers, auditors… | Creative and media…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “What the work looks like, year one”: Area | Finance | Marketing; A typical Tuesday | Building or…; What gets you praised | Catching an…
- Title attribute: What the work looks like, year one
- Caption (also keep the key point in the HTML text): Salary charts and brochure copy do not show you the actual texture of the job.
**V4 — Comparison table** (place after the H2 “Placement packages compared” #placement-packages)
- File: `mba-finance-vs-marketing-india-comparison-placement-packages-compared.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Institute tier changes the numbers more than the specialization does, but within each tier the two…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Institute tier | Finance package range | Marketing package… / Row: Top-tier IIMs and ISB | Rs 15-30 LPA typical… | Rs 12-20 LPA typical at… / Row: Mid-tier B-schools | Rs 8-12 LPA typical… | Rs 6-10 LPA typical… / Row: Broad market average | Around Rs 7 LPA average… | Around Rs 7.5 LPA average…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Institute tier Finance package range Marketing package range Top-tier IIMs and ISB Rs 15-30 LPA typical; select investment banking, private equity, and consulting-adjacent finance roles cross Rs 30-60+ LPA. | IIM Ahmedabad has reported finance offers as high as roughly Rs 1.1 crore in a given year, but that is a single outlier role, not the batch median. | Rs 12-20 LPA typical at the top-15 institutes; FMCG and consumer-tech brand management roles can reach Rs 20-25 LPA at the very top of the batch.
- Alt: Comparison table for “Placement packages compared”: Institute tier | Finance package…; Top-tier IIMs and ISB | Rs 15-30 LPA…; Mid-tier B-schools | Rs 8-12 LPA…
- Title attribute: Placement packages compared
- Caption (also keep the key point in the HTML text): Institute tier changes the numbers more than the specialization does, but within each tier the two specializations still land differently.
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “CFO track vs CMO track” #career-ceiling)
- File: `mba-finance-vs-marketing-india-asymmetrical-cfo-track-cmo-track.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Both ceilings sit at genuine C-suite level with strong compensation once you get there.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Financial analyst or management trainee in corporate finance, FP&A, or credit. / Senior analyst or assistant manager, often owning one business unit's numbers. / Finance manager or controller, owning budgeting, forecasting, and reporting for a… / Finance director or VP finance, sitting close to business strategy, not just reporting on… / CFO or group finance head, owning capital allocation, fundraising, and board-level…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “CFO track vs CMO track”: Financial analyst or management…; Senior analyst or assistant manager…; Finance manager or…
- Title attribute: CFO track vs CMO track
- Caption (also keep the key point in the HTML text): Both ceilings sit at genuine C-suite level with strong compensation once you get there.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/mba-salary-growth-over-time-india/

**H1:** MBA Salary Growth Over Time in India: The Real Curve, Tier by Tier  
**Category:** college-degrees · **Words:** 3828 · **H2 sections:** 12 · **Search priority:** P1 (5 clicks, 109 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “MBA Salary Growth Over Time in India: The Real Curve, Tier…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/mba-salary-growth-over-time-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Why one MBA salary…”, “The real curve: 0 to 15…”, “Tier by tier: how the…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `mba-salary-growth-over-time-india.webp`, `mba-salary-growth-over-time-india-detail.webp`, `mba-salary-growth-over-time-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `mba-salary-growth-over-time-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `mba-salary-growth-over-time-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a final-year student or recent graduate, a neighbourhood cafe table. Props that belong to “MBA Salary Growth Over Time in India: The Real Curve, Tier by Tier”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: MBA Salary Growth Over Time in India: The Real Curve, Tier by Tier
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `mba-salary-growth-over-time-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: MBA salary growth over time in India is steep early, then splits hard by tier.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on MBA salary growth over time in India / Why one MBA salary number misleads you / The real curve: 0 to 15 years after an MBA / Tier by tier: how the curve actually splits / Does the MBA salary premium hold up 10-15 years out?
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “MBA Salary Growth Over Time in India: The Real Curve, Tier by Tier”
- Title attribute: At a glance: MBA Salary Growth Over Time in India: The Real Curve…
- Caption (also keep the key point in the HTML text): MBA salary growth over time in India is steep early, then splits hard by tier.
**V2 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “The short answer on MBA salary growth over time in India” #short-answer)
- File: `mba-salary-growth-over-time-india-stat-short-answer-mba-salary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Yes, MBA salaries in India generally grow substantially over 10-15 years — but "generally" is doing a lot of…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Yes, MBA salaries in India generally grow substantially over 10-15 years — but… / The size and shape of that growth depends almost entirely on institute tier… / A graduate from a top-15-20 institute who starts around Rs 22-36 LPA can…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Yes, MBA salaries in India generally grow substantially over 10-15 years — but "generally" is doing a lot of work in that sentence. | A graduate from a top-15-20 institute who starts around Rs 22-36 LPA can realistically see that number compound into Rs 45-80 LPA or more by year 10, particularly in consulting, finance, or product roles. | A graduate from a tier-3 institute starting at Rs 6-12 LPA often sees a much flatter line — Rs 10-18 LPA by year 5 is a commonly reported outcome, and the curve only bends upward again if the person deliberately rebuilds their skill profile.
- Alt: Stat panel or bar chart (only the numbers listed) for “The short answer on MBA salary growth over time in…”: Yes, MBA salaries in India generally…; The size and…
- Title attribute: The short answer on MBA salary growth over time in India
- Caption (also keep the key point in the HTML text): Yes, MBA salaries in India generally grow substantially over 10-15 years — but "generally" is doing a lot of work in that sentence.
**V3 — Comparison table** (place after the H2 “The real curve: 0 to 15 years after an MBA” #the-curve)
- File: `mba-salary-growth-over-time-india-comparison-real-curve-years-after.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before splitting by tier, here is the broad progression pattern reported across recent salary-tracking…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Career stage | Typical salary range / Row: 0-1 year (first job after… | Rs 7-12 LPA average… / Row: 2-3 years | Rs 12-18 LPA, driven… / Row: 4-5 years | Rs 15-25 LPA, the stage… / Row: 6-9 years | Rs 25-40 LPA… / Row: 10+ years | Rs 45-80 LPA and above…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Career stage Typical salary range 0-1 year (first job after MBA) Rs 7-12 LPA average across institutes, before splitting by tier below 2-3 years Rs 12-18 LPA, driven mostly by the first job switch or first promotion cycle 4-5 years Rs 15-25 LPA, the stage wher
- Alt: Comparison table for “The real curve: 0 to 15 years after an MBA”: Career stage | Typical salary range; 0-1 year (first job after… | Rs 7-12…; 2-3 years | Rs 12-18…
- Title attribute: The real curve: 0 to 15 years after an MBA
- Caption (also keep the key point in the HTML text): Before splitting by tier, here is the broad progression pattern reported across recent salary-tracking sources and industry hiring data, blended…
**V4 — Comparison table** (place after the H2 “What a non-MBA trajectory looks like in the same window” #non-mba-comparison)
- File: `mba-salary-growth-over-time-india-comparison-non-mba-trajectory-looks.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: To test whether the MBA premium actually persists, compare it against a real non-MBA trajectory over the same…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Stage | Non-MBA software… | Tier-2/3 MBA holder / Row: Year 0-1 (fresher) | Rs 5-8 LPA at a service… | Rs 6-12 LPA, similar… / Row: Year 3-5, after one or… | Rs 15-25 LPA, especially… | Rs 10-18 LPA, growth… / Row: Year 7-10, senior… | Rs 25-40 LPA+, with… | Rs 30-45 LPA for tier-2… / Top-15-20 institutes, where brand, network, and recruiter access keep compounding on top… / General management, consulting, and finance leadership tracks that are structurally… / Roles where the MBA is a stated eligibility filter for the next promotion band, not just…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Stage Non-MBA software engineer Tier-2/3 MBA holder Year 0-1 (fresher) Rs 5-8 LPA at a service or mid-size product company Rs 6-12 LPA, similar starting band to a weak-tier MBA Year 3-5, after one or two job switches Rs 15-25 LPA, especially after a service-to | First, a service-to-product company switch alone can add 50-100% to a non-MBA engineer's salary — a jump that rivals what a tier-2 MBA adds through the entire degree. | Second, by year 7-10, a disciplined non-MBA engineer who switches roles every 2-3 years can land in a salary band that overlaps with tier-2 MBA outcomes, without the fee and without the two years of lost income while studying.
- Alt: Comparison table for “What a non-MBA trajectory looks like in the same window”: Stage | Non-MBA software… | Tier-2/3…; Year 0-1 (fresher) | Rs 5-8 LPA at a…; Year…
- Title attribute: What a non-MBA trajectory looks like in the same window
- Caption (also keep the key point in the HTML text): To test whether the MBA premium actually persists, compare it against a real non-MBA trajectory over the same 10-year window, using software…
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “What actually drives the growth after year one” #what-drives-growth)
- File: `mba-salary-growth-over-time-india-stat-actually-drives-growth-after.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Across every tier in the data above, the pattern repeats: the biggest single jumps line up with a job switch…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Job switches compound faster than loyalty. A well-timed move can add 30-50% in one step… / Specialization stacking matters more after year 3. Analytics, a functional depth in… / Sector choice shapes the ceiling. Consulting, product management, and finance roles show… / Proof of outcome outweighs tenure. A visible, ownable result — a product shipped, a deal…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A well-timed move can add 30-50% in one step, a jump that would take three to four years of typical annual increments to match.
- Alt: Stat panel or bar chart (only the numbers listed) for “What actually drives the growth after year one”: Job switches compound faster than…; Specialization stacking…
- Title attribute: What actually drives the growth after year one
- Caption (also keep the key point in the HTML text): Across every tier in the data above, the pattern repeats: the biggest single jumps line up with a job switch, a promotion into a new scope, or a…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/mba-without-work-experience-india/

**H1:** MBA without work experience India: who takes freshers, who does not  
**Category:** college-degrees · **Words:** 4164 · **H2 sections:** 13 · **Search priority:** P1 (3 clicks, 586 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “MBA without work experience India: who takes freshers, who…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/mba-without-work-experience-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Which B-schools…”, “Which institutes want…”, “Fresher share at IIMs…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `mba-without-work-experience-india.webp`, `mba-without-work-experience-india-detail.webp`, `mba-without-work-experience-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `mba-without-work-experience-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `mba-without-work-experience-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a final-year student or recent graduate, a shared neighbourhood workspace. Props that belong to “MBA without work experience India: who takes freshers, who does not”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: MBA without work experience India: who takes freshers, who does not
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `mba-without-work-experience-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: MBA without work experience India is normal at IIMs, FMS, and XLRI BM/HRM, but ISB and XLRI GM want 2-3 years…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on MBA without work experience in India / Which B-schools actually accept freshers / Which institutes want work experience first / Fresher share at IIMs: the real numbers / The real trade-offs of a no-experience MBA
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “MBA without work experience India: who takes freshers, who does not”
- Title attribute: At a glance: MBA without work experience India: who takes freshers…
- Caption (also keep the key point in the HTML text): MBA without work experience India is normal at IIMs, FMS, and XLRI BM/HRM, but ISB and XLRI GM want 2-3 years first.
**V2 — Comparison table** (place after the H2 “Which B-schools actually accept freshers” #who-accepts-freshers)
- File: `mba-without-work-experience-india-comparison-schools-actually-accept-freshers.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Here is what "accepts freshers" actually looks like institute by institute, based on published eligibility…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Institute | Stance on freshers | What is actually true / Row: IIM Ahmedabad, IIM… | Fresher-friendly at the… | IIM Ahmedabad regularly… / Row: FMS Delhi | No work experience… | FMS does not mandate any… / Row: XLRI Jamshedpur (PGDM-BM… | No mandatory experience… | XLRI does not set an age… / Row: MDI Gurgaon | No mandatory experience… | MDI does not require… / Row: Newer and fresher-leaning… | Genuinely built for… | IIM Ranchi (average 9…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Institute Stance on freshers What is actually true IIM Ahmedabad, IIM Calcutta, IIM Bangalore Fresher-friendly at the flagship level IIM Ahmedabad regularly admits close to a third of its batch as freshers; IIM Calcutta's 2024 batch had roughly 41% freshers. | IIM Bangalore leans more toward experienced profiles, closer to 15% freshers. | Average work experience in the batch runs around 19-20 months, meaning a healthy mix of freshers and short-experience candidates gets in every year, largely on academics and the entrance test.
- Alt: Comparison table for “Which B-schools actually accept freshers”: Institute | Stance on freshers | What…; IIM Ahmedabad, IIM… |…; FMS Delhi | No work experience… |…
- Title attribute: Which B-schools actually accept freshers
- Caption (also keep the key point in the HTML text): Here is what "accepts freshers" actually looks like institute by institute, based on published eligibility rules and recent batch profiles.
**V3 — Comparison table** (place after the H2 “Which institutes want work experience first” #who-wants-experience)
- File: `mba-without-work-experience-india-comparison-institutes-want-work-experience.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: On the other side, a smaller but important group either mandates experience outright or structures its…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Institute | Stance | What is actually true / Row: ISB Hyderabad | Minimum 2 years required… | ISB's PGP explicitly… / Row: XLRI PGDM-GM (General… | 3+ years of managerial… | This track is built… / Row: Executive MBA and Fellow… | 2-5+ years typically… | Executive MBA formats at… / Row: IIM Bangalore, IIM… | Open to freshers, but… | None of these officially…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Institute Stance What is actually true ISB Hyderabad Minimum 2 years required, no exceptions ISB's PGP explicitly requires a minimum of 24 months of full-time work experience by March 31 of the intake year. | The average admitted student carries around 4 years, with experience ranging from 2 to 17 years. | XLRI PGDM-GM (General Management) 3+ years of managerial experience required This track is built specifically for candidates with at least 3 years of managerial or supervisory experience by the admission cutoff date.
- Alt: Comparison table for “Which institutes want work experience first”: Institute | Stance | What is actually…; ISB Hyderabad | Minimum 2 years…; XLRI PGDM-GM (General……
- Title attribute: Which institutes want work experience first
- Caption (also keep the key point in the HTML text): On the other side, a smaller but important group either mandates experience outright or structures its selection so an experienced applicant has a…
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Fresher share at IIMs: the real numbers” #fresher-data)
- File: `mba-without-work-experience-india-stat-fresher-share-iims-real.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The IIM system alone spans a wide range on this question, and treating "IIM" as one uniform admission…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The IIM system alone spans a wide range on this question, and treating "IIM" as… / IIM Ahmedabad has consistently admitted close to 28-29% freshers into its… / IIM Calcutta's 2024 batch ran even higher, with roughly 41% of the 479 admitted…
- Numbers: use ONLY these facts from the article (exact values, no new ones): IIM Ahmedabad has consistently admitted close to 28-29% freshers into its flagship program in recent cycles, and its selection process is known to weigh future potential fairly heavily, which tends to favour a strong fresher application. | IIM Calcutta's 2024 batch ran even higher, with roughly 41% of the 479 admitted students entering as freshers. | IIM Bangalore sits at the other end among the top-3 institutes, admitting closer to 15% freshers and leaning more on an established professional track record during shortlisting.
- Alt: Stat panel or bar chart (only the numbers listed) for “Fresher share at IIMs: the real numbers”: The IIM system alone spans a wide…; IIM Ahmedabad has…
- Title attribute: Fresher share at IIMs: the real numbers
- Caption (also keep the key point in the HTML text): The IIM system alone spans a wide range on this question, and treating "IIM" as one uniform admission philosophy is one of the most common mistakes…
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes to avoid” #mistakes)
- File: `mba-without-work-experience-india-mistakes-mistakes-avoid.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Assuming "IIM" means one uniform admission policy IIM Ahmedabad admitting close to a third freshers and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 01 Assuming "IIM" means one uniform admission policy IIM Ahmedabad admitting… / Check the specific institute's recent batch profile, not a generic IIM… / 02 Applying to ISB as a fresher ISB's PGP has a hard 24-month work-experience…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 01 Assuming "IIM" means one uniform admission policy IIM Ahmedabad admitting close to a third freshers and IIM Bangalore admitting closer to 15% are both facts about the same brand family with very different practical odds. | 04 Ignoring your own genuine average-experience competition A fresher applying to a program where the average incoming experience is 26-29 months is not competing against other freshers alone — they are competing for a smaller number of seats inside a batch bu
- Alt: Mistakes versus smarter move panel for “Mistakes to avoid”: 01 Assuming "IIM" means one uniform…; Check the specific institute's recent…; 02 Applying to ISB as a…
- Title attribute: Mistakes to avoid
- Caption (also keep the key point in the HTML text): 01 Assuming "IIM" means one uniform admission policy IIM Ahmedabad admitting close to a third freshers and IIM Bangalore admitting closer to 15% are…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/phd-vs-industry-job-india/

**H1:** PhD vs industry job India: the real 5-year money and career math  
**Category:** college-degrees · **Words:** 4307 · **H2 sections:** 12 · **Search priority:** P1 (0 clicks, 166 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “PhD vs industry job India: the real 5-year money and career…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/phd-vs-industry-job-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Phd”, “Industry Job India”, “The short answer”, “The stipend reality…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `phd-vs-industry-job-india.webp`, `phd-vs-industry-job-india-detail.webp`, `phd-vs-industry-job-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `phd-vs-industry-job-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `phd-vs-industry-job-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of an Indian student or adult at a home desk, a family dining table in the evening. Props that belong to “PhD vs industry job India: the real 5-year money and career math”: a printed resume, a job description, a notebook, a phone. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: PhD vs industry job India: the real 5-year money and career math
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `phd-vs-industry-job-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: PhD vs industry job India compared on real CSIR-UGC stipends, faculty job odds, opportunity cost, and which…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to "PhD vs industry job India" / The stipend reality: what a PhD actually pays / The academia job market in India, honestly / PhD vs industry job: side by side / Industry roles that actually value a PhD
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “PhD vs industry job India: the real 5-year money and career math”
- Title attribute: At a glance: PhD vs industry job India: the real 5-year money and…
- Caption (also keep the key point in the HTML text): PhD vs industry job India compared on real CSIR-UGC stipends, faculty job odds, opportunity cost, and which industry roles actually pay for a PhD…
**V2 — Comparison table** (place after the H2 “The stipend reality: what a PhD actually pays” #stipend-reality)
- File: `phd-vs-industry-job-india-comparison-stipend-reality-phd-actually.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The income question is where most PhD decisions get made emotionally instead of numerically.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Fellowship route | Monthly stipend / Row: CSIR-JRF (science… | Rs 37,000/month for years… / Row: UGC-JRF (humanities… | Rs 31,000/month for years… / Row: GATE-qualified… | Broadly similar band to… / Row: No qualifying fellowship… | Often well below Rs…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Fellowship route Monthly stipend CSIR-JRF (science subjects) Rs 37,000/month for years 1-2, upgrading to Rs 42,000/month as SRF, plus an annual contingency grant of Rs 20,000-25,000 UGC-JRF (humanities, social sciences, commerce, management) Rs 31,000/month fo | The gap between a CSIR-SRF stipend of about Rs 42,000/month and even a modest industry salary widens every year you stay in the PhD, before you count the raises and promotions an industry track would have compounded in the same period. | The scholars who struggle most financially during a PhD are usually not the JRF/SRF holders — it is candidates on a self-financed or ad-hoc university stipend well below Rs 20,000 a month, or with no stipend at all.
- Alt: Comparison table for “The stipend reality: what a PhD actually pays”: Fellowship route | Monthly stipend; CSIR-JRF (science… | Rs 37,000/month…; UGC-JRF…
- Title attribute: The stipend reality: what a PhD actually pays
- Caption (also keep the key point in the HTML text): The income question is where most PhD decisions get made emotionally instead of numerically.
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “The academia job market in India, honestly” #academia-job-market)
- File: `phd-vs-industry-job-india-stat-academia-job-market-india.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the section most PhD advice skips.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): This is the section most PhD advice skips. / A PhD is now the mandatory minimum qualification for direct-entry assistant… / That sounds like a guarantee.
- Numbers: use ONLY these facts from the article (exact values, no new ones): India awards close to 40,000 PhD degrees a year, and total PhD enrolment has crossed two lakh scholars at any given time — up from roughly 1.26 lakh admissions in 2015-16 to over 2 lakh by 2019-20. | Honest take Globally, only a small share of PhD holders — commonly cited around 10% — end up in a permanent tenure-track faculty position, and the postdoc population competing for those seats has grown far faster than the seats themselves.
- Alt: Stat panel or bar chart (only the numbers listed) for “The academia job market in India, honestly”: This is the section most PhD advice…; A PhD is now the mandatory…
- Title attribute: The academia job market in India, honestly
- Caption (also keep the key point in the HTML text): This is the section most PhD advice skips.
**V4 — Comparison table** (place after the H2 “PhD vs industry job: side by side” #comparison)
- File: `phd-vs-industry-job-india-comparison-phd-industry-job-side.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Factor PhD Industry job Time commitment Minimum 3 years by UGC rule; most scholars actually finish in 4-6…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Factor | PhD | Industry job / Row: Time commitment | Minimum 3 years by UGC… | Immediate start; first… / Row: Income during the period | CSIR-JRF: roughly Rs… | A fresher role after… / Row: What the years actually… | Deep subject mastery, the… | Applied execution speed… / Row: What happens at the end | A defended thesis and a… | A resume with 4-6 years… / Row: Career reversibility | Moving from a completed… | Moving from industry into…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Factor PhD Industry job Time commitment Minimum 3 years by UGC rule; most scholars actually finish in 4-6 years, longer in humanities and social sciences Immediate start; first meaningful promotion or role change usually inside 2-3 years Income during the peri | UGC-JRF: roughly Rs 31,000/month, then Rs 35,000/month. | A fresher role after MSc/BTech in a decent company typically starts anywhere from Rs 4-12 lakh a year depending on field, with raises and switches compounding from year one What the years actually build Deep subject mastery, the ability to design and defend or
- Alt: Comparison table for “PhD vs industry job: side by side”: Factor | PhD | Industry job; Time commitment | Minimum 3 years by…; Income during the period | CSIR-JRF…
- Title attribute: PhD vs industry job: side by side
- Caption (also keep the key point in the HTML text): Factor PhD Industry job Time commitment Minimum 3 years by UGC rule; most scholars actually finish in 4-6 years, longer in humanities and social…
**V5 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “The opportunity cost math” #opportunity-cost)
- File: `phd-vs-industry-job-india-stat-opportunity-cost-math.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Run the comparison honestly, not on the headline stipend number alone.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Total PhD stipend income (CSIR-SRF band, roughly Rs 40,000/month average across the… / Total plausible industry income over the same 5 years, starting from a modest Rs 5-6 lakh… / The gap is not just the missing salary. It is the missing raises, the missing promotion…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Over a typical 5-year PhD: Total PhD stipend income (CSIR-SRF band, roughly Rs 40,000/month average across the years): approximately Rs 24 lakh before tax, plus a small annual contingency grant. | Total plausible industry income over the same 5 years, starting from a modest Rs 5-6 lakh a year and growing with at least one raise or switch: commonly Rs 35-55 lakh or more, depending on the field and how actively you manage switches.
- Alt: Stat panel or bar chart (only the numbers listed) for “The opportunity cost math”: Total PhD stipend income (CSIR-SRF…; Total plausible industry income over…; The…
- Title attribute: The opportunity cost math
- Caption (also keep the key point in the HTML text): Run the comparison honestly, not on the headline stipend number alone.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/private-college-vs-government-college-career-outcomes-india/

**H1:** Private college vs government college career outcomes India: what the data says  
**Category:** college-degrees · **Words:** 4111 · **H2 sections:** 16 · **Search priority:** P1 (0 clicks, 255 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Private college vs government college career outcomes…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/private-college-vs-government-college-career-outcomes-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Private College”, “Government College…”, “The direct answer”, “Field by field: where…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `private-college-vs-government-college-career-outcomes-india.webp`, `private-college-vs-government-college-career-outcomes-india-detail.webp`, `private-college-vs-government-college-career-outcomes-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `private-college-vs-government-college-career-outcomes-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `private-college-vs-government-college-career-outcomes-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a final-year student or recent graduate, a neighbourhood cafe table. Props that belong to “Private college vs government college career outcomes India: what the data says”: stacked exam books, a timetable, previous-year question papers. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Private college vs government college career outcomes India: what the…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `private-college-vs-government-college-career-outcomes-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Private college vs government college career outcomes in India depend on the field, not the label.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The direct answer: private college vs government college career… / Field by field: where the label actually matters / Engineering: the closest call between the two categories / Medicine: the label barely moves the outcome / Law: institution matters more than category
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Private college vs government college career outcomes India: what the…”
- Title attribute: At a glance: Private college vs government college career outcomes…
- Caption (also keep the key point in the HTML text): Private college vs government college career outcomes in India depend on the field, not the label.
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The direct answer: private college vs government college career outcomes in…” #answer)
- File: `private-college-vs-government-college-career-outcomes-india-asymmetrical-direct-answer-private-college.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: There is no single winner because "government college" and "private college" are not one thing each.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): "Always choose government, it's guaranteed to be better and cheaper." / "Private colleges have better infrastructure, so they must place better too." / "A government degree always gets more respect from employers." / "If a private college charges more, it must be delivering more."
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The direct answer: private college vs government…”: "Always choose government, it's…; "Private colleges have better…; "A…
- Title attribute: The direct answer: private college vs government college career…
- Caption (also keep the key point in the HTML text): There is no single winner because "government college" and "private college" are not one thing each.
**V3 — Comparison table** (place after the H2 “Field by field: where the label actually matters” #field-by-field)
- File: `private-college-vs-government-college-career-outcomes-india-comparison-field-field-where-label.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before comparing any specific colleges, compare the field itself.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Field | Government pathway | Private pathway / Row: Engineering (B.Tech/B.E.) | IITs/NITs: ~85-95%… | Wide spread: ₹6-9.5 LPA… / Row: Medicine (MBBS) | Same NMC-recognised… | Same legal qualification… / Row: Law (5-year integrated) | Top NLUs: 80-96%… | Institution-specific… / Row: Management (MBA) | Old IIMs: ₹28-35 LPA… | Top private (ISB, XLRI…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Field Government pathway Private pathway Engineering (B.Tech/B.E.) IITs/NITs: ~85-95% placement, avg ₹13-26 LPA at top NITs, ₹18-26 LPA+ at IITs Wide spread: ₹6-9.5 LPA average at strong tier-2 private (VIT, Thapar); ₹3-4.5 LPA at weaker tier-3 colleges Medici
- Alt: Comparison table for “Field by field: where the label actually matters”: Field | Government pathway | Private…; Engineering (B.Tech/B.E.) |…; Medicine (MBBS) | Same…
- Title attribute: Field by field: where the label actually matters
- Caption (also keep the key point in the HTML text): Before comparing any specific colleges, compare the field itself.
**V4 — Comparison table** (place after the H2 “Law: institution matters more than category” #law)
- File: `private-college-vs-government-college-career-outcomes-india-comparison-law-institution-matters-more.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Law is the field where the specific institution overrides the government-versus-private label most clearly.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Factor | Top NLUs (government) | Private law schools / Row: Placement rate | 80-96% at leading NLUs… | Wide spread: strong at a… / Row: Average package | ₹14-20 LPA average across… | Jindal Global often beats… / Row: 5-year fee total | ₹14-25 lakh at top NLUs | ₹40-60 lakh at a premium…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Factor Top NLUs (government) Private law schools Placement rate 80-96% at leading NLUs, with deep multi-year recruiter pipelines at NLSIU, NALSAR, NUJS, and NLU Delhi Wide spread: strong at a handful of top names, weak at most mid-tier and newer private law co
- Alt: Comparison table for “Law: institution matters more than category”: Factor | Top NLUs (government) |…; Placement rate | 80-96% at leading…; Average package | ₹14-20…
- Title attribute: Law: institution matters more than category
- Caption (also keep the key point in the HTML text): Law is the field where the specific institution overrides the government-versus-private label most clearly.
**V5 — Linear process chain or roadmap** (place after the H2 “How to verify a specific college before you decide” #verify)
- File: `private-college-vs-government-college-career-outcomes-india-linear-verify-specific-college-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A handful of checks, done before you commit to either category, remove most of the guesswork from this…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Ask for branch-wise, year-wise median salary data in writing , not a single highlighted… / Check the college's NIRF Graduation Outcomes (GO) score specifically, not just its… / Verify recognition directly on the official portal - UGC for general universities, AICTE… / Talk to two or three recent graduates directly , not just students the admission office… / Check faculty vacancy and recruiter visit history for the exact branch or specialisation…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A common planning heuristic is to keep a single course's fee within roughly 10% of your total education budget, and only go materially higher when you can point to specific, verifiable evidence for that exact college — a strong NIRF Graduation Outcomes score, 
- Alt: Linear process chain or roadmap for “How to verify a specific college before you decide”: Ask for branch-wise, year-wise median…; Check the college's NIRF…
- Title attribute: How to verify a specific college before you decide
- Caption (also keep the key point in the HTML text): A handful of checks, done before you commit to either category, remove most of the guesswork from this decision.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/should-i-take-drop-year-after-12th/

**H1:** Should I take drop year after 12th? A clear-headed answer, not a guilt trip  
**Category:** college-degrees · **Words:** 4331 · **H2 sections:** 15 · **Search priority:** P1 (2 clicks, 543 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Should I take drop year after 12th? A clear-headed answer…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/should-i-take-drop-year-after-12th*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The direct answer”, “The only reasons worth…”, “Reasons that sound…”, “What the repeater data…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `should-i-take-drop-year-after-12th.webp`, `should-i-take-drop-year-after-12th-detail.webp`, `should-i-take-drop-year-after-12th-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `should-i-take-drop-year-after-12th-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `should-i-take-drop-year-after-12th-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a Class 11-12 student with a parent or sibling nearby, a counselling room with a plain wooden table. Props that belong to “Should I take drop year after 12th? A clear-headed answer, not a guilt trip”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Should I take drop year after 12th? A clear-headed answer, not a…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `should-i-take-drop-year-after-12th-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Should I take drop year after 12th depends on whether you have a real plan or just fear.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The direct answer to "should I take drop year after 12th" / The only reasons worth a drop year / Reasons that sound valid but usually are not / What the repeater data actually shows / The mental-health side nobody prices into this decision
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Should I take drop year after 12th? A clear-headed answer, not a…”
- Title attribute: At a glance: Should I take drop year after 12th? A clear-headed…
- Caption (also keep the key point in the HTML text): Should I take drop year after 12th depends on whether you have a real plan or just fear.
**V2 — Comparison table** (place after the H2 “What the repeater data actually shows” #data)
- File: `should-i-take-drop-year-after-12th-comparison-repeater-data-actually-shows.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most 12th-pass students overestimate how unusual a drop year is, and underestimate how much a structured one…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Exam | Repeater share | What the… / Row: NEET UG | Roughly 40-50% of… | A structured drop year… / Row: JEE Main / Advanced | Around 30-40% of JEE… | In JEE Advanced 2025, one…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Exam Repeater share What the structured-prep data shows NEET UG Roughly 40-50% of registrations each year are repeat candidates; out of 22+ lakh NEET 2025 registrations, an estimated 8-10 lakh were reappearing. | JEE Main / Advanced Around 30-40% of JEE aspirants each year are repeaters; roughly 3-4 lakh of 10-12 lakh JEE Main registrants are repeat candidates. | In JEE Advanced 2025, one major coaching chain's repeater batch posted a 60.40% qualifying ratio against a 51.02% overall ratio — meaningfully higher, not marginal.
- Alt: Comparison table for “What the repeater data actually shows”: Exam | Repeater share | What the…; NEET UG | Roughly 40-50% of… | A…; JEE Main / Advanced | Around…
- Title attribute: What the repeater data actually shows
- Caption (also keep the key point in the HTML text): Most 12th-pass students overestimate how unusual a drop year is, and underestimate how much a structured one can actually move a score.
**V3 — Comparison table** (place after the H2 “The real cost of a drop year” #money)
- File: `should-i-take-drop-year-after-12th-comparison-real-cost-drop-year.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Families usually plan for the coaching fee.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Cost category | Typical range / Row: Dropper-batch coaching… | Roughly Rs 1.2-1.6 lakh… / Row: Hostel and mess (Kota or… | Roughly Rs 4,500-12,000 a… / Row: Total realistic cost… | Roughly Rs 3-5 lakh for… / Row: Lower-cost alternative… | Meaningfully lower, often…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Cost category Typical range Dropper-batch coaching fee (major Kota institutes) Roughly Rs 1.2-1.6 lakh for the year Hostel and mess (Kota or similar coaching hub) Roughly Rs 4,500-12,000 a month depending on amenities Total realistic cost, coaching hub setup R | If a Kota-style year at Rs 3-5 lakh would eat a large share of what your family has set aside for your entire education (well above a conservative 10 percent-of-budget planning benchmark), that is a signal to default toward the lower-cost home study or online-
- Alt: Comparison table for “The real cost of a drop year”: Cost category | Typical range; Dropper-batch coaching… | Roughly Rs…; Hostel and mess (Kota or… | Roughly…
- Title attribute: The real cost of a drop year
- Caption (also keep the key point in the HTML text): Families usually plan for the coaching fee.
**V4 — Chronological timeline** (place after the H2 “Will a drop year hurt your admission or resume later” #admissions)
- File: `should-i-take-drop-year-after-12th-chronological-will-drop-year-hurt.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the fear that stops many students from even considering a drop year seriously, and it is mostly…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): College admission / Future resume or job search / NTA exams: No upper age limit on NEET, JEE, or CUET, and no attempt-count restriction on… / University of Delhi: Its own UG admission bulletin states a gap year is not a bar to… / Gap certificate: Some universities request one explaining the reason for the gap; check… / Employer read: Surveyed employers largely accept a documented, explained gap; the problem… / What actually matters: A gap year with a certification, project, internship, or exam-prep…
- Numbers: use ONLY these facts from the article (exact values, no new ones): International research backs this up too: Gap Year Association survey data shows 95% of gap-year students said the year prepared them for their next step, and gap-year students who structured their time showed higher subsequent GPAs than peers who skipped stra
- Alt: Chronological timeline for “Will a drop year hurt your admission or resume later”: College admission; Future resume or job search; NTA exams: No upper age limit on…
- Title attribute: Will a drop year hurt your admission or resume later
- Caption (also keep the key point in the HTML text): This is the fear that stops many students from even considering a drop year seriously, and it is mostly overstated.
**V5 — Chronological timeline** (place after the H2 “What to do instead of a blind drop year” #alternatives)
- File: `should-i-take-drop-year-after-12th-chronological-instead-blind-drop-year.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A drop year is not the only way to buy time or fix a weak spot.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Enroll now, keep preparing in parallel / A skill-first bridge year, not a pure exam-repeat year / Join a BSc, B.Com, or a related degree now while continuing exam prep part-time for next… / A degree still has a place here — the real risk is degree-only thinking with no… / Keeps a fallback degree moving instead of betting the entire year on one outcome. / Works best when your score gap was narrow and your energy can genuinely handle both… / Build one visible skill and one piece of proof of work instead of only re-attempting the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “What to do instead of a blind drop year”: Enroll now, keep preparing in parallel; A skill-first bridge year, not a pure…; Join a BSc…
- Title attribute: What to do instead of a blind drop year
- Caption (also keep the key point in the HTML text): A drop year is not the only way to buy time or fix a weak spot.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/best-mba-specializations-india/

**H1:** Best MBA specializations in India: how to actually choose one, not just rank one  
**Category:** college-degrees · **Words:** 4599 · **H2 sections:** 18 · **Search priority:** P2 (0 clicks, 26 impressions)  
**Status: AMBER — AUTHORED** · og:image: /images/blog/college-degrees/mba-specializations-india/best-mba-specializations-india-social.jpg

**Findings**
1. 6 authored images on the page (hero + 5 supporting).
2. Verify CTC ranges (Rs 8-12 LPA finance, 15-30 LPA top IIMs, etc.) and ROI math (Rs 20-25 lakh cost, 2-4 year break-even).
3. Hero is a graphic/flat-lay/illustration rather than a natural human scene. Keep it only if it is clear; otherwise add a natural editorial hero.
4. 5 of 6 images have no title attribute.
5. 1 images have no caption: `best-mba-specializations-india-1440.webp`

**Current images**
| File | Real size | Attr size | Loading | Position | Issues |
|---|---|---|---|---|---|
| `college-degrees/mba-specializations-india/best-mba-specializations-india-1440.webp` | 1440x810 | 1440x811 | eager | 14% | no caption |
| `college-degrees/mba-specializations-india/seven-mba-specializations-compared-1080.webp` | 1080x1350 | 1080x1350 | lazy | 26% | no title attr |
| `college-degrees/mba-specializations-india/mba-specialization-by-undergraduate-background-1080.webp` | 1080x1350 | 1080x1350 | lazy | 46% | no title attr |
| `college-degrees/mba-specializations-india/mba-specialization-roi-math-india-1080.webp` | 1080x1350 | 1080x1350 | lazy | 53% | no title attr |
| `college-degrees/mba-specializations-india/mba-specialization-four-checkpoint-protocol-1080.webp` | 1080x1350 | 1080x1350 | lazy | 59% | no title attr |
| `college-degrees/mba-specializations-india/mba-specialization-three-gates-1080.webp` | 1080x1350 | 1080x1350 | lazy | 65% | no title attr |

**Required actions**
1. HERO: optional upgrade. Keep the current graphic hero if it reads clearly; otherwise add a natural scene hero using the brief below.
- Reason: current hero is a graphic, not a human scene
- File: `best-mba-specializations-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-mba-specializations-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a final-year student or recent graduate, a modest office desk after hours. Props that belong to “Best MBA specializations in India: how to actually choose one, not just rank one”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best MBA specializations in India: how to actually choose one, not…
- Caption: one sentence tying the scene to the article's decision.
2. CREATE 1 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-mba-specializations-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The best MBA specializations in India depend on your background and goals.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer: match the specialization to your background and… / Why "best MBA specialization" depends on who is asking / 7 MBA specializations compared, with real salary data / Finance: the highest ceiling, but only for the right quantitative… / Marketing: strong for communicators, uneven by institute
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best MBA specializations in India: how to actually choose one, not…”
- Title attribute: At a glance: Best MBA specializations in India: how to actually…
- Caption (also keep the key point in the HTML text): The best MBA specializations in India depend on your background and goals.
3. FIX attributes on every kept image: meaningful kebab-case filename; alt that describes what is visible; title attribute; caption (figcaption) for every explanatory image; width/height equal to the real pixel size; `loading="lazy"` below the fold, hero eager with fetchpriority; WebP under 200 KB.
4. Mobile check at 390px: no horizontal overflow, text inside images readable without zoom (body text on the image at least about 16 px when the image is displayed at 360 px wide), captions wrap.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/distance-mba-worth-it-india/

**H1:** Distance MBA India worth it? The honest answer depends on who is asking  
**Category:** college-degrees · **Words:** 4059 · **H2 sections:** 14 · **Search priority:** P2 (1 clicks, 68 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Distance MBA India worth it? The honest answer depends on…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/distance-mba-worth-it-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “What a distance or…”, “UGC-DEB approval: how…”, “Credible universities…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `distance-mba-worth-it-india.webp`, `distance-mba-worth-it-india-detail.webp`, `distance-mba-worth-it-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `distance-mba-worth-it-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `distance-mba-worth-it-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Candid side profile near a window of a final-year student or recent graduate, a neighbourhood cafe table. Props that belong to “Distance MBA India worth it? The honest answer depends on who is asking”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Distance MBA India worth it? The honest answer depends on who is…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `distance-mba-worth-it-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Distance MBA India worth it comes down to one filter: are you already employed, or chasing a first job?
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to "is a distance MBA worth it in India" / What a distance or online MBA actually is / UGC-DEB approval: how to verify before you pay a single rupee / Credible universities offering a distance or online MBA / Distance MBA vs online MBA vs executive MBA vs regular MBA
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Distance MBA India worth it? The honest answer depends on who is…”
- Title attribute: At a glance: Distance MBA India worth it? The honest answer depends…
- Caption (also keep the key point in the HTML text): Distance MBA India worth it comes down to one filter: are you already employed, or chasing a first job?
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to "is a distance MBA worth it in India"” #short-answer)
- File: `distance-mba-worth-it-india-asymmetrical-short-answer-distance-mba.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Yes, but the honest answer splits sharply by who is asking, and most generic articles on this topic skip that…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Yes, but the honest answer splits sharply by who is asking, and most generic… / A distance or online MBA is not a cheaper, slower version of a full-time MBA. / It is a different product solving a different problem: it lets someone who is…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to "is a distance MBA worth it in…”: Yes, but the honest answer splits…; A distance or online MBA is not…
- Title attribute: The short answer to "is a distance MBA worth it in India"
- Caption (also keep the key point in the HTML text): Yes, but the honest answer splits sharply by who is asking, and most generic articles on this topic skip that split entirely.
**V3 — Comparison table** (place after the H2 “Credible universities offering a distance or online MBA” #universities)
- File: `distance-mba-worth-it-india-comparison-credible-universities-offering-distance.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: As of the current academic session, roughly 100 or more universities hold ODL entitlement and around 60 hold…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Tier | Examples | What to expect / Row: Public/central… | IGNOU, Annamalai… | Widest recognition for… / Row: Institute-linked… | Symbiosis Centre for… | Backed by an established… / Row: Online-only private… | Amity University Online… | Live/recorded lecture…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Credible universities offering a distance or online MBA”: Tier | Examples | What to expect; Public/central… | IGNOU, Annamalai… |……
- Title attribute: Credible universities offering a distance or online MBA
- Caption (also keep the key point in the HTML text): As of the current academic session, roughly 100 or more universities hold ODL entitlement and around 60 hold online-mode entitlement in India…
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Distance MBA vs online MBA vs executive MBA vs regular MBA” #vs-others)
- File: `distance-mba-worth-it-india-asymmetrical-distance-mba-online-mba.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "MBA" in India quietly covers four genuinely different products, and mixing them up is where most bad…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): "MBA" in India quietly covers four genuinely different products, and mixing… / A distance MBA and an online MBA both fall under UGC-DEB regulation and share… / The practical difference between the two is mostly delivery style and price —…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Distance MBA vs online MBA vs executive MBA vs regular…”: "MBA" in India quietly covers four…; A distance MBA and an…
- Title attribute: Distance MBA vs online MBA vs executive MBA vs regular MBA
- Caption (also keep the key point in the HTML text): "MBA" in India quietly covers four genuinely different products, and mixing them up is where most bad decisions start.
**V5 — Comparison table** (place after the H2 “Real cost and duration” #cost-duration)
- File: `distance-mba-worth-it-india-comparison-real-cost-duration.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Cost is where a distance MBA's case gets strongest, and where the comparison against a full-time program…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Program | Approximate total fee | Duration / Row: IGNOU MBA (ODL/Online) | Roughly Rs 58,000-66,000… | 2 years, extendable… / Row: Symbiosis SCDL distance… | Roughly Rs 55,000-58,000… | 2 years, registration… / Row: Symbiosis online MBA… | Roughly Rs 3-3.2 lakh… | 2 years / Row: Amity University Online… | Roughly Rs 1.99-2.25 lakh… | 2 years across 4 semesters / Row: Regular full-time MBA at… | Commonly Rs 2-24 lakh… | 2 years, full-time…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Program Approximate total fee Duration IGNOU MBA (ODL/Online) Roughly Rs 58,000-66,000 total for the full 2-year program 2 years, extendable within the registration validity window Symbiosis SCDL distance MBA (PGDBA) Roughly Rs 55,000-58,000 total 2 years, reg | Most distance and online MBA programs run 2 years, with registration typically valid for up to 4 years, which gives genuine flexibility if a work project, family situation, or health issue slows you down for a stretch. | As a strict planning heuristic, not a universal rule, weigh the fee against roughly 10% of your total education and upskilling budget for the years this credential covers.
- Alt: Comparison table for “Real cost and duration”: Program | Approximate total fee |…; IGNOU MBA (ODL/Online) | Roughly Rs…; Symbiosis SCDL distance… | Roughly Rs…
- Title attribute: Real cost and duration
- Caption (also keep the key point in the HTML text): Cost is where a distance MBA's case gets strongest, and where the comparison against a full-time program becomes genuinely lopsided in its favour for…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/education-loan-worth-it-india-private-college/

**H1:** Education loan worth it India private college: the real math before you sign  
**Category:** college-degrees · **Words:** 4058 · **H2 sections:** 14 · **Search priority:** P2 (0 clicks, 38 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Education loan worth it India private college: the real…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/education-loan-worth-it-india-private-college*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The direct answer”, “What the loan actually…”, “Government vs private…”, “The ROI math: loan cost…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `education-loan-worth-it-india-private-college.webp`, `education-loan-worth-it-india-private-college-detail.webp`, `education-loan-worth-it-india-private-college-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `education-loan-worth-it-india-private-college-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `education-loan-worth-it-india-private-college-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Wide three-quarter shot of a final-year student or recent graduate, a shared neighbourhood workspace. Props that belong to “Education loan worth it India private college: the real math before you sign”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Education loan worth it India private college: the real math before…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `education-loan-worth-it-india-private-college-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Education loan worth it India private college depends on placement data, interest cost, and your skill plan …
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The direct answer: is an education loan worth it for a private… / What the loan actually costs you, not just the sticker price / Government vs private college: the real fee gap / The placement number nobody prints on the brochure / The ROI math: loan cost vs likely salary
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Education loan worth it India private college: the real math before…”
- Title attribute: At a glance: Education loan worth it India private college: the real…
- Caption (also keep the key point in the HTML text): Education loan worth it India private college depends on placement data, interest cost, and your skill plan - not the campus brochure.
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The direct answer: is an education loan worth it for a private college in India?” #answer)
- File: `education-loan-worth-it-india-private-college-asymmetrical-direct-answer-education-loan.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Sometimes yes, often no, and the difference almost never comes down to how the campus looks in the prospectus.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): "Just take the loan, a degree always pays for itself eventually." / "This college has 100% placement, it says so on their website." / "Don't worry about the interest, you'll be earning well before repayment starts." / "Every good college is expensive, that's just how it works."
- Numbers: use ONLY these facts from the article (exact values, no new ones): The usual bad advice you will hear "Just take the loan, a degree always pays for itself eventually." "This college has 100% placement, it says so on their website." "Don't worry about the interest, you'll be earning well before repayment starts." "Every good c
- Alt: Asymmetrical pros-and-cons comparison for “The direct answer: is an education loan worth it for a…”: "Just take the loan, a degree always…; "This college has 100%…
- Title attribute: The direct answer: is an education loan worth it for a private…
- Caption (also keep the key point in the HTML text): Sometimes yes, often no, and the difference almost never comes down to how the campus looks in the prospectus.
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “What the loan actually costs you, not just the sticker price” #real-cost)
- File: `education-loan-worth-it-india-private-college-stat-loan-actually-costs-just.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Education loan interest rates in India currently run roughly 8% to 14% depending on the lender, with public…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Education loan interest rates in India currently run roughly 8% to 14%… / ICICI Bank's disclosed range, for example, sits at 9-13% with a mean around… / Female applicants usually get a 0.5% concession at most government banks.
- Numbers: use ONLY these facts from the article (exact values, no new ones): Education loan interest rates in India currently run roughly 8% to 14% depending on the lender, with public sector banks typically offering 7-10% and private banks or NBFCs charging closer to 10-14%. | ICICI Bank's disclosed range, for example, sits at 9-13% with a mean around 10.5%. | Female applicants usually get a 0.5% concession at most government banks.
- Alt: Stat panel or bar chart (only the numbers listed) for “What the loan actually costs you, not just the sticker…”: Education loan interest rates in…; ICICI Bank's…
- Title attribute: What the loan actually costs you, not just the sticker price
- Caption (also keep the key point in the HTML text): Education loan interest rates in India currently run roughly 8% to 14% depending on the lender, with public sector banks typically offering 7-10% and…
**V4 — Comparison table** (place after the H2 “Government vs private college: the real fee gap” #college-cost)
- File: `education-loan-worth-it-india-private-college-comparison-government-private-college-real.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before comparing loan terms, compare what you are actually borrowing for.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Factor | Government college | Private college / Row: Typical 4-year B.Tech cost | ₹6.3 lakh average… | ₹16.8 lakh average… / Row: Fee-hike risk | Regulated, predictable… | Many private colleges… / Row: Placement transparency | Usually published with… | Varies widely; some… / Row: Loan amount usually needed | ₹3-6 lakh (often within… | ₹10-20+ lakh (frequently…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Factor Government college Private college Typical 4-year B.Tech cost ₹6.3 lakh average (IITs/NITs often ₹7.2-9.8 lakh all-in with hostel) ₹16.8 lakh average; premium private/deemed universities ₹15-30+ lakh Fee-hike risk Regulated, predictable, rarely changes  | At the premium end, private or deemed universities like BITS Pilani, VIT, SRM, and Manipal can run ₹15-30+ lakh for the full course.
- Alt: Comparison table for “Government vs private college: the real fee gap”: Factor | Government college | Private…; Typical 4-year B.Tech cost | ₹6.3…; Fee-hike risk |…
- Title attribute: Government vs private college: the real fee gap
- Caption (also keep the key point in the HTML text): Before comparing loan terms, compare what you are actually borrowing for.
**V5 — Mistakes versus smarter move panel** (place after the H2 “Red flags in the college and the loan offer” #red-flags)
- File: `education-loan-worth-it-india-private-college-mistakes-red-flags-college-loan.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A few warning signs are worth treating as hard stops, not minor concerns to work around.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): "100% placement guarantee" with a specific high salary figure and no branch-wise… / No AICTE approval letter or UGC recognition displayed, or approval that cannot be… / Admission offered with no consideration of academic merit or entrance performance at all. / No permanent campus, changing contact numbers, or pressure to pay large sums before… / An interest rate meaningfully above the 8-14% market range with no clear justification.
- Numbers: use ONLY these facts from the article (exact values, no new ones): College red flags "100% placement guarantee" with a specific high salary figure and no branch-wise breakdown behind it. | Loan-offer red flags An interest rate meaningfully above the 8-14% market range with no clear justification.
- Alt: Mistakes versus smarter move panel for “Red flags in the college and the loan offer”: "100% placement guarantee" with a…; No AICTE approval letter or UGC……
- Title attribute: Red flags in the college and the loan offer
- Caption (also keep the key point in the HTML text): A few warning signs are worth treating as hard stops, not minor concerns to work around.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/how-to-compare-colleges-for-career-outcome-india/

**H1:** How to compare colleges for career outcome India: the 8-column scorecard  
**Category:** college-degrees · **Words:** 5245 · **H2 sections:** 18 · **Search priority:** P2 (0 clicks, 68 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “How to compare colleges for career outcome India: the…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/how-to-compare-colleges-for-career-outcome-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The direct answer”, “The 8-Column Scorecard”, “Column 1: 3-year…”, “Column 3…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 92%, 93%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `how-to-compare-colleges-for-career-outcome-india.webp`, `how-to-compare-colleges-for-career-outcome-india-detail.webp`, `how-to-compare-colleges-for-career-outcome-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `how-to-compare-colleges-for-career-outcome-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `how-to-compare-colleges-for-career-outcome-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a final-year student or recent graduate, a neighbourhood cafe table. Props that belong to “How to compare colleges for career outcome India: the 8-column scorecard”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: How to compare colleges for career outcome India: the 8-column…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `how-to-compare-colleges-for-career-outcome-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: How to compare colleges for career outcome India: a real side-by-side scorecard covering placement…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The direct answer: how to compare colleges for career outcome in India / Why a ranked list of colleges is not a comparison / The 8-Column Scorecard / Column 1: 3-year placement consistency / Column 2: Recruiter quality and repeat-recruiter rate
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “How to compare colleges for career outcome India: the 8-column…”
- Title attribute: At a glance: How to compare colleges for career outcome India: the…
- Caption (also keep the key point in the HTML text): How to compare colleges for career outcome India: a real side-by-side scorecard covering placement consistency, recruiter quality, faculty ratio…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The direct answer: how to compare colleges for career outcome in India” #answer)
- File: `how-to-compare-colleges-for-career-outcome-india-asymmetrical-direct-answer-compare-colleges.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Build one table.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Opening five college websites in five tabs and forming a gut impression of "which one… / Trusting whichever brochure has the biggest bold number on the homepage. / Relying on one overall ranking list without checking what actually built that rank. / Asking "which college is better" instead of "which college is better for my branch, my…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The direct answer: how to compare colleges for career…”: Opening five college websites in five…; Trusting whichever…
- Title attribute: The direct answer: how to compare colleges for career outcome in India
- Caption (also keep the key point in the HTML text): Build one table.
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Why a ranked list of colleges is not a comparison” #why-lists-fail)
- File: `how-to-compare-colleges-for-career-outcome-india-asymmetrical-ranked-list-colleges-comparison.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Searching "best colleges in India" gets you a list.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Searching "best colleges in India" gets you a list. / A list is not a comparison — it ranks colleges against each other on criteria… / A rank is one number; your decision needs eight An overall NIRF or media rank…
- Numbers: use ONLY these facts from the article (exact values, no new ones): The overall NIRF score is a weighted blend: Teaching, Learning and Resources (30%), Research and Professional Practice (30%), Graduation Outcomes (20%), Outreach and Inclusivity (10%), and Perception (10%).
- Alt: Asymmetrical pros-and-cons comparison for “Why a ranked list of colleges is not a comparison”: Searching "best colleges in India"…; A list is not a comparison — it…
- Title attribute: Why a ranked list of colleges is not a comparison
- Caption (also keep the key point in the HTML text): Searching "best colleges in India" gets you a list.
**V4 — Comparison table** (place after the H2 “Column 1: 3-year placement consistency” #column-1)
- File: `how-to-compare-colleges-for-career-outcome-india-comparison-column-year-placement-consistency.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A single glowing year tells you almost nothing about what will happen when you graduate three or four years…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: What you're checking | Weak signal | Strong signal / Row: Trend direction | One outstanding year… | Median CTC flat or rising… / Row: Branch specificity | Only a combined… | Your exact branch's… / Row: Sample size | No stated number of… | College states exactly…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Column 1: 3-year placement consistency”: What you're checking | Weak signal |…; Trend direction | One outstanding…; Branch specificity | Only…
- Title attribute: Column 1: 3-year placement consistency
- Caption (also keep the key point in the HTML text): A single glowing year tells you almost nothing about what will happen when you graduate three or four years from now.
**V5 — Comparison table** (place after the H2 “The fee-to-outcome ratio: the column most families skip” #fee-outcome)
- File: `how-to-compare-colleges-for-career-outcome-india-comparison-fee-outcome-ratio-column.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every column above measures quality.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: College type… | Total 4-year fee | Verified median… | Rough fee-to-outcome… / Row: Strong NIT | Under ₹5-6 lakh… | ₹13-18 LPA range at… | Very strong value — fee… / Row: Strong tier-2 private… | ₹5-8 lakh | ₹10-13 LPA median in… | Strong value when the… / Row: Weaker tier-3 private… | ₹15-24 lakh | Often no branch-wise… | High financial risk — a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): College type (illustrative) Total 4-year fee Verified median package Rough fee-to-outcome read Strong NIT Under ₹5-6 lakh (home-state quota) ₹13-18 LPA range at several top NITs Very strong value — fee recoverable inside the first year of work Strong tier-2 pr | A ₹15 lakh loan at typical current interest rates can add several lakh rupees in interest over a five-year repayment period — cost that is invisible in the brochure's "return on investment" claim but very visible in your actual monthly budget after graduation. | As a strict planning heuristic, not a universal rule, test the total fee of your top-scoring college against roughly 10% of your family's total education and upskilling budget across the next several years.
- Alt: Comparison table for “The fee-to-outcome ratio: the column most families skip”: College type… | Total 4-year fee |…; Strong NIT | Under ₹5-6 lakh… |…; Strong tier-2…
- Title attribute: The fee-to-outcome ratio: the column most families skip
- Caption (also keep the key point in the HTML text): Every column above measures quality.
**V6 — Linear process chain or roadmap** (place after the H2 “How to actually build your scorecard” #build-scorecard)
- File: `how-to-compare-colleges-for-career-outcome-india-linear-actually-build-scorecard.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A scorecard only works if you build it the same way for every college, using a simple weighted-scoring method…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): List your real shortlist across the top of a table — three to five colleges you have… / List the eight columns above down the side , plus the fee-to-outcome ratio as a ninth row. / Score each cell on a simple 1-5 scale using the verified data you collected, not a vague… / Weight each row based on what matters most for your field and constraints — a family… / Multiply each score by its weight, total each column, and compare the totals — the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “How to actually build your scorecard”: List your real shortlist across the…; List the eight columns above down the…; Score each…
- Title attribute: How to actually build your scorecard
- Caption (also keep the key point in the HTML text): A scorecard only works if you build it the same way for every college, using a simple weighted-scoring method that has been used for decision-making…

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/is-executive-mba-worth-it-in-india/

**H1:** Is an executive MBA worth it in India? Only for one specific profile  
**Category:** college-degrees · **Words:** 4505 · **H2 sections:** 13 · **Search priority:** P2 (1 clicks, 50 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Is an executive MBA worth it in India? Only for one…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/is-executive-mba-worth-it-in-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “What an executive MBA…”, “EMBA vs regular MBA vs…”, “Who genuinely benefits…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `is-executive-mba-worth-it-in-india.webp`, `is-executive-mba-worth-it-in-india-detail.webp`, `is-executive-mba-worth-it-in-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `is-executive-mba-worth-it-in-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `is-executive-mba-worth-it-in-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a final-year student or recent graduate, a home desk near a window in the evening. Props that belong to “Is an executive MBA worth it in India? Only for one specific profile”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Is an executive MBA worth it in India? Only for one specific profile
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `is-executive-mba-worth-it-in-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Executive MBA worth it India comes down to one filter: are you leading already, or trying to switch fields?
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to "is an executive MBA worth it in India" / What an executive MBA actually is / EMBA vs regular MBA vs distance MBA: the real structural differences / Who genuinely benefits from an executive MBA / Who should skip it and pick a regular MBA instead
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Is an executive MBA worth it in India? Only for one specific profile”
- Title attribute: At a glance: Is an executive MBA worth it in India? Only for one…
- Caption (also keep the key point in the HTML text): Executive MBA worth it India comes down to one filter: are you leading already, or trying to switch fields?
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to "is an executive MBA worth it in India"” #short-answer)
- File: `is-executive-mba-worth-it-in-india-asymmetrical-short-answer-executive-mba.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Yes, but only for a narrow, specific profile — and the honest answer changes completely once you separate…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Yes, but only for a narrow, specific profile — and the honest answer changes… / An executive MBA is not a lighter or slower version of a regular MBA. / It is a different product solving a different problem.
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to "is an executive MBA worth it in…”: Yes, but only for a narrow, specific…; An executive MBA is not a…
- Title attribute: The short answer to "is an executive MBA worth it in India"
- Caption (also keep the key point in the HTML text): Yes, but only for a narrow, specific profile — and the honest answer changes completely once you separate "worth it for who" from a generic yes-or-no.
**V3 — Comparison table** (place after the H2 “EMBA vs regular MBA vs distance MBA: the real structural differences” #emba-vs-others)
- File: `is-executive-mba-worth-it-in-india-comparison-emba-regular-mba-distance.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: "MBA" gets used loosely to describe three genuinely different products in India.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Factor | Regular full-time MBA | Executive MBA / Row: Who it is built for | Fresh graduates or… | Working professionals… / Row: Format and schedule | Full-time, on-campus, 2… | Weekend or modular format… / Row: Cohort composition | Fairly uniform: mostly… | Deliberately mixed… / Row: Career goal it is built… | Career entry or a full… | Accelerating an existing… / Row: Income while studying | Usually zero income for 2… | Full salary continues…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Factor Regular full-time MBA Executive MBA Who it is built for Fresh graduates or professionals with 0-3 years of experience, often with little to no managerial background Working professionals with roughly 5-10+ years of experience, usually already in a manag
- Alt: Comparison table for “EMBA vs regular MBA vs distance MBA: the real…”: Factor | Regular full-time MBA |…; Who it is built for | Fresh graduates…; Format and…
- Title attribute: EMBA vs regular MBA vs distance MBA: the real structural differences
- Caption (also keep the key point in the HTML text): "MBA" gets used loosely to describe three genuinely different products in India.
**V4 — Comparison table** (place after the H2 “Fees and ROI when you already earn well” #fees-roi)
- File: `is-executive-mba-worth-it-in-india-comparison-fees-roi-already-earn.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If you are already earning a strong salary, the ROI question for an EMBA is not "can I afford the fee." It is…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Program type | Approximate fees | Format / Row: IIM-run Executive MBA /… | Roughly Rs 15-33.5 lakh… | 1 year full residential… / Row: ISB Executive MBA (PGPpro… | Roughly Rs 37 lakh… | Modular weekend format… / Row: Other established Indian… | Roughly Rs 20-40 lakh at… | Weekend or modular, 12-24… / Row: International EMBA… | Tuition alone often runs… | Global modular…
- Numbers: use ONLY these facts from the article (exact values, no new ones): If you are already earning a strong salary, the ROI question for an EMBA is not "can I afford the fee." It is "does this fee, layered on top of my current income, actually accelerate my ceiling fast enough to justify the time and the money." Program type Appro | A Rs 25 lakh EMBA fee against two years of continued income is a fundamentally different financial position than a Rs 25 lakh regular MBA fee stacked on top of two years of zero income. | As a strict planning heuristic, not a universal rule, test an EMBA fee against roughly 10% of your total household education and upskilling budget over the next several years, not just against this year's bonus or savings.
- Alt: Comparison table for “Fees and ROI when you already earn well”: Program type | Approximate fees |…; IIM-run Executive MBA /… | Roughly Rs…; ISB Executive MBA…
- Title attribute: Fees and ROI when you already earn well
- Caption (also keep the key point in the HTML text): If you are already earning a strong salary, the ROI question for an EMBA is not "can I afford the fee." It is "does this fee, layered on top of my…
**V5 — Self-assessment checklist** (place after the H2 “Use The 4-Checkpoint Protocol before you apply” #checkpoint)
- File: `is-executive-mba-worth-it-in-india-self-use-checkpoint-protocol-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A strong brand name or an appealing salary-growth statistic cannot tell you whether an EMBA fits your…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A strong brand name or an appealing salary-growth statistic cannot tell you… / The 4-Checkpoint Protocol narrows the decision to what actually matters for you. / 01 Scope Do you already have real leadership scope at work — a team, a budget…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 02 Context Can you fund Rs 15-40 lakh (or more, for a top international program) without derailing a more urgent financial goal, or will your employer meaningfully offset the cost? | 03 Schedule Can you realistically protect weekends or multi-day residencies for 12-18 months straight, on top of a full-time job and whatever else is happening in your life during that stretch?
- Alt: Self-assessment checklist for “Use The 4-Checkpoint Protocol before you apply”: A strong brand name or an appealing…; The 4-Checkpoint Protocol narrows the…; 01…
- Title attribute: Use The 4-Checkpoint Protocol before you apply
- Caption (also keep the key point in the HTML text): A strong brand name or an appealing salary-growth statistic cannot tell you whether an EMBA fits your specific situation.
**V6 — Linear next-step plan** (place after the H2 “What to do next” #next-step)
- File: `is-executive-mba-worth-it-in-india-linear-next.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Do not try to answer "is an executive MBA worth it in India" in the abstract for one more month based on a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): MBA after BCom worth it in India? The real ROI math by tier / Best MBA specialization for engineers / Education loan worth it India private college / Career switch from IT to management India
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear next-step plan for “What to do next”: MBA after BCom worth it in India? The…; Best MBA specialization for engineers; Education loan worth it India private…
- Title attribute: What to do next
- Caption (also keep the key point in the HTML text): Do not try to answer "is an executive MBA worth it in India" in the abstract for one more month based on a colleague's LinkedIn post or a program's…

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/is-iim-worth-the-cost-india/

**H1:** Is IIM worth the cost in India? The real fee-to-placement math  
**Category:** college-degrees · **Words:** 5414 · **H2 sections:** 13 · **Search priority:** P2 (0 clicks, 119 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Is IIM worth the cost in India? The real fee-to-placement…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/is-iim-worth-the-cost-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Why this question is…”, “Fees vs placements, IIM…”, “CAT odds: what you are…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 92%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `is-iim-worth-the-cost-india.webp`, `is-iim-worth-the-cost-india-detail.webp`, `is-iim-worth-the-cost-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `is-iim-worth-the-cost-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `is-iim-worth-the-cost-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of an Indian student or adult at a home desk, a home study corner with natural window light. Props that belong to “Is IIM worth the cost in India? The real fee-to-placement math”: notebooks, a laptop and printed course or job information. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Is IIM worth the cost in India? The real fee-to-placement math
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `is-iim-worth-the-cost-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Is IIM worth the cost in India?
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to "is IIM worth the cost in India" / Why this question is harder than it looks / Fees vs placements, IIM by IIM / The true cost is not the fee — it is the fee plus 2 years / CAT odds: what you are actually up against
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Is IIM worth the cost in India? The real fee-to-placement math”
- Title attribute: At a glance: Is IIM worth the cost in India? The real…
- Caption (also keep the key point in the HTML text): Is IIM worth the cost in India?
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer to "is IIM worth the cost in India"” #short-answer)
- File: `is-iim-worth-the-cost-india-asymmetrical-short-answer-iim-worth.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Yes, at most tiers — but "IIM" is not one product with one ROI.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Yes, at most tiers — but "IIM" is not one product with one ROI. / It is 21 different campuses wearing the same three-letter brand, and the… / At Ahmedabad, Bangalore, and Calcutta, an IIM degree is close to the cleanest…
- Numbers: use ONLY these facts from the article (exact values, no new ones): At Ahmedabad, Bangalore, and Calcutta, an IIM degree is close to the cleanest ROI case in Indian higher education: a two-year, roughly Rs 26-27.5 lakh program that reliably converts into a Rs 34-35.5 LPA role. | At the newer campuses that opened over the last decade — Ranchi, Raipur, Trichy, Udaipur, and similar — the case is still real but noticeably slower, at roughly Rs 17-21 lakh in fees for Rs 18-22 LPA average outcomes. | At the newest "baby IIMs," fees stay in a similar Rs 16-21 lakh band, but average outcomes drop to roughly Rs 12.7-17 LPA, with far less placement track record behind the number.
- Alt: Asymmetrical pros-and-cons comparison for “The short answer to "is IIM worth the cost in India"”: Yes, at most tiers — but "IIM" is not…; It is 21 different…
- Title attribute: The short answer to "is IIM worth the cost in India"
- Caption (also keep the key point in the HTML text): Yes, at most tiers — but "IIM" is not one product with one ROI.
**V3 — Comparison table** (place after the H2 “Fees vs placements, IIM by IIM” #fee-placement-by-tier)
- File: `is-iim-worth-the-cost-india-comparison-fees-placements-iim-iim.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Set the brand aside for a moment.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Tier | Total fees | Average placement | Approximate payback / Row: IIM Ahmedabad, Bangalore… | Rs 26-27.5 lakh total, 2… | Rs 34-35.5 LPA average… | Roughly 9-10 months of… / Row: Other established IIMs… | Rs 17-21 lakh total, 2… | Rs 28-32 LPA average | Around 7-9 months of… / Row: Newer IIMs, roughly a… | Rs 17-21 lakh total, 2… | Roughly Rs 18-22 LPA… | Around 10-14 months of… / Row: "Baby IIMs" (Sirmaur… | Rs 16-21 lakh total, 2… | Roughly Rs 12.7-17 LPA… | Often 14-20 months of…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Here is what total fees, average placement, and approximate payback period actually look like across the real tiers inside "IIM." Tier Total fees Average placement Approximate payback IIM Ahmedabad, Bangalore, Calcutta (the original "big 3") Rs 26-27.5 lakh to | Other established IIMs (Lucknow, Indore, Kozhikode and similar) Rs 17-21 lakh total, 2 years Rs 28-32 LPA average Around 7-9 months of post-MBA salary. | Newer IIMs, roughly a decade old (Ranchi, Raipur, Trichy, Udaipur, Rohtak and similar) Rs 17-21 lakh total, 2 years Roughly Rs 18-22 LPA average Around 10-14 months of post-MBA salary.
- Alt: Comparison table for “Fees vs placements, IIM by IIM”: Tier | Total fees | Average placement…; IIM Ahmedabad, Bangalore… | Rs…; Other established IIMs… | Rs 17-21…
- Title attribute: Fees vs placements, IIM by IIM
- Caption (also keep the key point in the HTML text): Set the brand aside for a moment.
**V4 — Comparison table** (place after the H2 “The true cost is not the fee — it is the fee plus 2 years” #true-cost)
- File: `is-iim-worth-the-cost-india-comparison-true-cost-fee-fee.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Almost every ROI comparison for an IIM stops at "fee versus salary." That misses half the real cost.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Path over 2 years | What actually happens… | Where you stand… / Row: Direct job after… | Earning roughly Rs 4-8… | Roughly Rs 8-16 lakh… / Row: IIM Ahmedabad, Bangalore… | Rs 26-27.5 lakh spent on… | True cost of roughly Rs… / Row: A newer or baby IIM, on… | Rs 16-21 lakh in fees… | True cost of roughly Rs…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Path over 2 years What actually happens financially Where you stand entering year 3 Direct job after graduation (skip the IIM route) Earning roughly Rs 4-8 LPA in a first analyst, associate, or management-trainee role Roughly Rs 8-16 lakh earned, zero debt, 2  | Even at the big 3, the true payback period is closer to 13-15 months of the new salary once foregone income is counted, not the 9-10 months you get from fee alone. | As a strict planning heuristic, not a universal rule, test the total IIM fee against roughly 10% of your family's total education and upskilling budget over the next several years, not just against what a loan approval letter says you can borrow.
- Alt: Comparison table for “The true cost is not the fee — it is the fee plus 2…”: Path over 2 years | What actually…; Direct job after… | Earning roughly…; IIM…
- Title attribute: The true cost is not the fee — it is the fee plus 2 years
- Caption (also keep the key point in the HTML text): Almost every ROI comparison for an IIM stops at "fee versus salary." That misses half the real cost.
**V5 — Linear process chain or roadmap** (place after the H2 “Use The 4-Checkpoint Protocol before you commit to this path” #checkpoint)
- File: `is-iim-worth-the-cost-india-linear-use-checkpoint-protocol-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A single placement number from one campus's report cannot tell you whether an IIM fits your specific…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A single placement number from one campus's report cannot tell you whether an… / The 4-Checkpoint Protocol narrows the decision to what actually matters for you. / 01 Biology Can you sustain 10-14 hour days of case prep, group projects, and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 02 Context Can your family fund Rs 16-27.5 lakh depending on the tier, without that money being needed for something more urgent? | A Rs 20 lakh loan against a Rs 35 LPA starting salary is a completely different risk than the same loan against a Rs 13 LPA starting salary.
- Alt: Linear process chain or roadmap for “Use The 4-Checkpoint Protocol before you commit to…”: A single placement number from one…; The 4-Checkpoint Protocol narrows…
- Title attribute: Use The 4-Checkpoint Protocol before you commit to this path
- Caption (also keep the key point in the HTML text): A single placement number from one campus's report cannot tell you whether an IIM fits your specific situation.
**V6 — Asymmetrical pros-and-cons comparison** (place after the H2 “Mistakes to avoid when deciding whether an IIM is worth the cost” #mistakes)
- File: `is-iim-worth-the-cost-india-asymmetrical-mistakes-avoid-deciding-whether.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Comparing your target campus to the IIM Ahmedabad number you saw online Rs 34-35.5 LPA average packages…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 01 Comparing your target campus to the IIM Ahmedabad number you saw online Rs… / If your target campus is not one of those three, use that campus's own most… / 02 Sizing the loan to the fee instead of the realistic salary A Rs 20 lakh loan…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 01 Comparing your target campus to the IIM Ahmedabad number you saw online Rs 34-35.5 LPA average packages are real, but they describe three specific campuses out of 21 IIMs. | 02 Sizing the loan to the fee instead of the realistic salary A Rs 20 lakh loan is a very different risk against a Rs 35 LPA starting job than against a Rs 13 LPA one. | 03 Ignoring the 2 years of foregone income in the payback math Most people compare fees to salary and stop there.
- Alt: Asymmetrical pros-and-cons comparison for “Mistakes to avoid when deciding whether an IIM is…”: 01 Comparing your target campus to…; If your target campus is not…
- Title attribute: Mistakes to avoid when deciding whether an IIM is worth the cost
- Caption (also keep the key point in the HTML text): 01 Comparing your target campus to the IIM Ahmedabad number you saw online Rs 34-35.5 LPA average packages are real, but they describe three specific…

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/msc-vs-mba-india/

**H1:** MSc vs MBA India: the real fork for science graduates, not two versions of the same choice  
**Category:** college-degrees · **Words:** 3784 · **H2 sections:** 12 · **Search priority:** P2 (0 clicks, 32 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “MSc vs MBA India: the real fork for science graduates, not…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/msc-vs-mba-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Msc”, “Mba India”, “The short answer”, “What an MSc actually…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `msc-vs-mba-india.webp`, `msc-vs-mba-india-detail.webp`, `msc-vs-mba-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `msc-vs-mba-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `msc-vs-mba-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a final-year student or recent graduate, a modest office desk after hours. Props that belong to “MSc vs MBA India: the real fork for science graduates, not two versions of the…”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: MSc vs MBA India: the real fork for science graduates, not two…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `msc-vs-mba-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: MSc vs MBA India is a fork between depth and generalism, not a ranking.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to "MSc vs MBA India" / What an MSc actually leads to, by field / What an MBA actually leads to / MSc vs MBA: side by side / Is your science background wasted in an MBA?
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “MSc vs MBA India: the real fork for science graduates, not two…”
- Title attribute: At a glance: MSc vs MBA India: the real fork for science graduates…
- Caption (also keep the key point in the HTML text): MSc vs MBA India is a fork between depth and generalism, not a ranking.
**V2 — Comparison table** (place after the H2 “What an MSc actually leads to, by field” #what-msc-leads-to)
- File: `msc-vs-mba-india-comparison-msc-actually-leads-field.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: An MSc is a 2-year specialisation degree in a science subject, usually taken right after a related bachelor's…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Field | Where it commonly… / Row: Physics / Chemistry /… | CSIR-NET or… / Row: Biotechnology / Life… | Splits between a… / Row: Data Science / Statistics… | The most directly… / Row: Environmental Science /… | Government agencies…
- Numbers: use ONLY these facts from the article (exact values, no new ones): A CSIR-JRF stipend commonly runs around Rs 37,000 a month for the first two years, upgrading to roughly Rs 42,000 a month as a Senior Research Fellow, plus a modest annual contingency grant.
- Alt: Comparison table for “What an MSc actually leads to, by field”: Field | Where it commonly…; Physics / Chemistry /… | CSIR-NET or…; Biotechnology / Life… | Splits…
- Title attribute: What an MSc actually leads to, by field
- Caption (also keep the key point in the HTML text): An MSc is a 2-year specialisation degree in a science subject, usually taken right after a related bachelor's degree.
**V3 — Comparison table** (place after the H2 “MSc vs MBA: side by side” #comparison)
- File: `msc-vs-mba-india-comparison-msc-mba-side-side.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Factor MSc MBA What the degree actually trains Deep, narrow subject mastery in one scientific field — the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Factor | MSc | MBA / Row: What the degree actually… | Deep, narrow subject… | Broad, cross-functional… / Row: Default next step after… | PhD (if… | A management, business… / Row: Entry requirement and… | Bachelor's degree in a… | CAT, XAT, GMAT, or… / Row: Fee range (India, typical… | Roughly Rs… | Roughly Rs 2-25 lakh… / Row: What the degree signals… | Subject-matter depth and… | General management…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Factor MSc MBA What the degree actually trains Deep, narrow subject mastery in one scientific field — the ability to design experiments, read primary literature, and generate original findings Broad, cross-functional business literacy — finance, marketing, ope
- Alt: Comparison table for “MSc vs MBA: side by side”: Factor | MSc | MBA; What the degree actually… | Deep…; Default next step after… | PhD (if… |…
- Title attribute: MSc vs MBA: side by side
- Caption (also keep the key point in the HTML text): Factor MSc MBA What the degree actually trains Deep, narrow subject mastery in one scientific field — the ability to design experiments, read primary…
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “The salary reality, not the brochure number” #salary-reality)
- File: `msc-vs-mba-india-stat-salary-reality-brochure-number.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Average MSc salaries in India commonly fall in a wide Rs 3-15 lakh range, with most fresh graduates starting…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Average MSc salaries in India commonly fall in a wide Rs 3-15 lakh range, with… / Within that range, data-science and statistics-linked MSc roles tend to sit… / MBA outcomes vary far more by institute tier than MSc outcomes vary by…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Average MSc salaries in India commonly fall in a wide Rs 3-15 lakh range, with most fresh graduates starting closer to Rs 3-8 lakh a year depending on specialisation and location. | Graduates from strong, well-ranked programs commonly move into roles in the Rs 10-25 lakh range, with consulting, analytics, and product-heavy placements running higher and top-tier institutes going well beyond that.
- Alt: Stat panel or bar chart (only the numbers listed) for “The salary reality, not the brochure number”: Average MSc salaries in India…; Within that range, data-science…
- Title attribute: The salary reality, not the brochure number
- Caption (also keep the key point in the HTML text): Average MSc salaries in India commonly fall in a wide Rs 3-15 lakh range, with most fresh graduates starting closer to Rs 3-8 lakh a year depending…
**V5 — Linear process chain or roadmap** (place after the H2 “Who should stay in science with an MSc-first path” #who-stays)
- File: `msc-vs-mba-india-linear-who-should-stay-science.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: You already have a research project, thesis, or publication that genuinely excited you, not one you merely…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You already have a research project, thesis, or publication that genuinely excited you… / You have qualified or are realistically preparing for CSIR-NET, GATE, or an equivalent… / You can financially sustain a JRF-level stipend for several years without derailing a… / Your actual complaint about the MBA idea is "I would be starting over in something I do…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Who should stay in science with an MSc-first path”: You already have a research project…; You have qualified or are…; You can…
- Title attribute: Who should stay in science with an MSc-first path
- Caption (also keep the key point in the HTML text): You already have a research project, thesis, or publication that genuinely excited you, not one you merely finished.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/bba-vs-bcom-india-which-to-choose-after-12th/

**H1:** BBA vs BCom India: Which to Choose After 12th, Decided by Career Direction  
**Category:** college-degrees · **Words:** 4050 · **H2 sections:** 13 · **Search priority:** P3 (0 clicks, 11 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “BBA vs BCom India: Which to Choose After 12th, Decided by…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/bba-vs-bcom-india-which-to-choose-after-12th*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Bba”, “Bcom India Which To…”, “The short answer”, “What a BBA actually…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `bba-vs-bcom-india-which-to-choose-after-12th.webp`, `bba-vs-bcom-india-which-to-choose-after-12th-detail.webp`, `bba-vs-bcom-india-which-to-choose-after-12th-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `bba-vs-bcom-india-which-to-choose-after-12th-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `bba-vs-bcom-india-which-to-choose-after-12th-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a Class 11-12 student with a parent or sibling nearby, a living-room sofa with notebooks on a low table. Props that belong to “BBA vs BCom India: Which to Choose After 12th, Decided by Career Direction”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: BBA vs BCom India: Which to Choose After 12th, Decided by Career…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `bba-vs-bcom-india-which-to-choose-after-12th-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: BBA vs BCom India which to choose after 12th: compare fees, colleges, the CA/CMA/CS funnel, campus…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer to "BBA vs BCom India" / What a BBA actually trains you for / What a BCom actually trains you for / BBA vs BCom: side by side / Cost and ROI: the real math, not the brochure number
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “BBA vs BCom India: Which to Choose After 12th, Decided by Career…”
- Title attribute: At a glance: BBA vs BCom India: Which to Choose After 12th, Decided…
- Caption (also keep the key point in the HTML text): BBA vs BCom India which to choose after 12th: compare fees, colleges, the CA/CMA/CS funnel, campus placements, and MBA-readiness so you pick by…
**V2 — Comparison table** (place after the H2 “BBA vs BCom: side by side” #comparison)
- File: `bba-vs-bcom-india-which-to-choose-after-12th-comparison-bba-bcom-side-side.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Factor BBA BCom What the degree actually trains Broad management literacy — marketing, HR, operations…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Factor | BBA | BCom / Row: What the degree actually… | Broad management literacy… | Accounting, taxation… / Row: Default next step after… | A management trainee or… | CA, CMA, or CS… / Row: Entry requirement and… | Class 12 in any stream… | Class 12, usually with… / Row: Fee range (India, typical… | Government colleges… | Government colleges… / Row: What the degree signals… | Comfort with ambiguity… | Numerical discipline and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): DU's BMS, NMIMS) are far more competitive Class 12, usually with commerce subjects preferred though not always mandatory; admission is largely merit-based on 12th marks or CUET, with far more government college seats available nationally Fee range (India, typi | Private colleges: commonly Rs 50,000-2,00,000 a year, and premium private BBA programs run well beyond that Government colleges: roughly Rs 5,000-20,000 a year, among the cheapest degrees in India. | Private colleges: commonly Rs 20,000-70,000 a year at mid-tier institutes What the degree signals to an employer Comfort with ambiguity, presentation and communication skill, and general business exposure — useful for roles that need someone to coordinate acro
- Alt: Comparison table for “BBA vs BCom: side by side”: Factor | BBA | BCom; What the degree actually… | Broad…; Default next step after… | A…
- Title attribute: BBA vs BCom: side by side
- Caption (also keep the key point in the HTML text): Factor BBA BCom What the degree actually trains Broad management literacy — marketing, HR, operations, finance basics — taught through case studies…
**V3 — Comparison table** (place after the H2 “Cost and ROI: the real math, not the brochure number” #cost-roi)
- File: `bba-vs-bcom-india-which-to-choose-after-12th-comparison-cost-roi-real-math.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Fees are where the two degrees diverge the most, and where a headline salary comparison alone can mislead a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Stage | BBA | BCom / Row: Total 3-year fee (typical… | Rs 90,000 to Rs 6,00,000+… | Rs 15,000 to Rs 2,10,000… / Row: Fresh graduate starting… | Roughly Rs 3-7 lakh a… | Roughly Rs 2-5 lakh a… / Row: Typical next investment | An MBA, which usually… | CA/CMA/CS training, which… / Row: Mid-career outcome if the… | MBA from a strong… | Qualified CA/CMA/CS…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Stage BBA BCom Total 3-year fee (typical range) Rs 90,000 to Rs 6,00,000+ depending on college tier Rs 15,000 to Rs 2,10,000 depending on college tier Fresh graduate starting salary (no add-on qualification) Roughly Rs 3-7 lakh a year in a management-trainee o | A mid-to-premium private BBA (commonly Rs 1.5-6 lakh across three years) often eats that 10 percent by itself, before an MBA is even factored in.
- Alt: Comparison table for “Cost and ROI: the real math, not the brochure number”: Stage | BBA | BCom; Total 3-year fee (typical… | Rs…; Fresh graduate starting… |…
- Title attribute: Cost and ROI: the real math, not the brochure number
- Caption (also keep the key point in the HTML text): Fees are where the two degrees diverge the most, and where a headline salary comparison alone can mislead a 12th-pass family into the wrong decision.
**V4 — Decision tree by situation** (place after the H2 “Who should choose BBA” #who-bba)
- File: `bba-vs-bcom-india-which-to-choose-after-12th-decision-who-should-choose-bba.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: You are energised by presenting, negotiating, and coordinating people more than by number-heavy…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You are energised by presenting, negotiating, and coordinating people more than by… / You are already thinking about an MBA as the real destination, and see BBA mainly as the… / Your family can realistically fund a private BBA and, later, an MBA without derailing… / You want a head start on case studies, presentations, and internships before entering a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree by situation for “Who should choose BBA”: You are energised by presenting…; You are already thinking about an MBA…; Your family can realistically fund…
- Title attribute: Who should choose BBA
- Caption (also keep the key point in the HTML text): You are energised by presenting, negotiating, and coordinating people more than by number-heavy, single-answer problems.
**V5 — Decision tree by situation** (place after the H2 “Who should choose BCom” #who-bcom)
- File: `bba-vs-bcom-india-which-to-choose-after-12th-decision-who-should-choose-bcom.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: You want the CA, CMA, or CS route open from day one, and would rather not lose the natural overlap between…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You want the CA, CMA, or CS route open from day one, and would rather not lose the… / You want a lower-cost, lower-risk undergraduate degree while you are still deciding what… / You are genuinely comfortable with, or good at, accounting, taxation, and structured… / You want access to more government college seats near your city instead of depending on a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree by situation for “Who should choose BCom”: You want the CA, CMA, or CS route…; You want a lower-cost, lower-risk…; You are genuinely comfortable with…
- Title attribute: Who should choose BCom
- Caption (also keep the key point in the HTML text): You want the CA, CMA, or CS route open from day one, and would rather not lose the natural overlap between BCom coursework and their foundation-level…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/best-computer-and-data-science-courses-for-commerce-students/

**H1:** Best computer and data science courses for commerce students  
**Category:** college-degrees · **Words:** 3739 · **H2 sections:** 12 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Best computer and data science courses for commerce students”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/best-computer-and-data-science-courses-for-commerce-students*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Why the order matters”, “Excel and data-analysis…”, “SQL and BI-tool courses”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-computer-and-data-science-courses-for-commerce-students.webp`, `best-computer-and-data-science-courses-for-commerce-students-detail.webp`, `best-computer-and-data-science-courses-for-commerce-students-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `best-computer-and-data-science-courses-for-commerce-students-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-computer-and-data-science-courses-for-commerce-students-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a Class 12 or first-year medical aspirant, a classroom desk after hours. Props that belong to “Best computer and data science courses for commerce students”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best computer and data science courses for commerce students
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-computer-and-data-science-courses-for-commerce-students-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The best computer and data science courses for commerce students: real Excel, SQL, Power BI, and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / Why the order matters more than the course names / Layer 1: Excel and data-analysis courses / Layer 2: SQL and BI-tool courses / Layer 3: Python-for-finance courses
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best computer and data science courses for commerce students”
- Title attribute: At a glance: Best computer and data science courses for commerce…
- Caption (also keep the key point in the HTML text): The best computer and data science courses for commerce students: real Excel, SQL, Power BI, and Python-for-finance courses, ranked in order, with…
**V2 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Layer 1: Excel and data-analysis courses” #excel-courses)
- File: `best-computer-and-data-science-courses-for-commerce-students-stat-layer-excel-data-analysis.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Excel remains the single most-requested tool in commerce hiring, but "I know Excel" on a resume means almost…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Excel remains the single most-requested tool in commerce hiring, but "I know… / The courses below teach the specific, verifiable version of the skill… / Foundation Excel Skills for Business: Advanced Macquarie University, on…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Seven modules on array formulas, data cleaning, financial functions, lookup functions, and building an interactive dashboard, roughly 30 hours over 3 weeks.
- Alt: Stat panel or bar chart (only the numbers listed) for “Layer 1: Excel and data-analysis courses”: Excel remains the single…; The courses below teach the specific……
- Title attribute: Layer 1: Excel and data-analysis courses
- Caption (also keep the key point in the HTML text): Excel remains the single most-requested tool in commerce hiring, but "I know Excel" on a resume means almost nothing to a recruiter anymore.
**V3 — Asymmetrical pros-and-cons comparison** (place after the H2 “Is a data science course realistic for commerce students, specifically?” #data-science-reality)
- File: `best-computer-and-data-science-courses-for-commerce-students-asymmetrical-data-science-course-realistic.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This deserves a direct answer, because most articles either oversell "yes, absolutely" or dismiss it entirely.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Built on Excel, SQL, and a BI tool, which this article already covers in depth. / Commerce background is a genuine advantage here: business context speeds up… / Realistically reachable within months of focused, part-time study plus one real project. / Indian entry-level pay realistically sits in the Rs 3-6 LPA range, moving toward Rs 8-13… / Needs real statistics depth, Python or R fluency, and usually a portfolio of modelling…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Indian entry-level pay realistically sits in the Rs 3-6 LPA range, moving toward Rs 8-13 LPA with proof of work. | Senior data-science pay in India can exceed Rs 20-30 LPA, but that ceiling assumes real depth, not a completed course list.
- Alt: Asymmetrical pros-and-cons comparison for “Is a data science course realistic for commerce…”: Built on Excel, SQL, and a BI tool…; Commerce background is a…
- Title attribute: Is a data science course realistic for commerce students…
- Caption (also keep the key point in the HTML text): This deserves a direct answer, because most articles either oversell "yes, absolutely" or dismiss it entirely.
**V4 — Linear process chain or roadmap** (place after the H2 “The 5-Point Course Filter: how to judge any course before paying” #course-filter)
- File: `best-computer-and-data-science-courses-for-commerce-students-linear-point-course-filter-judge.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: New Coursera specializations and Udemy courses launch every month, so naming specific courses above is only…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 1 Instructor credibility and recency Has the instructor done real, current work in this… / 2 Syllabus depth versus the job posting Open two or three live job postings for your… / 3 A practical output, not just video hours Does the course end in something you built, a… / 4 A verifiable credential where one exists The Power BI PL-300 exam is independently… / 5 A free or cheap way to test it first Almost every course on this page has a free audit…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “The 5-Point Course Filter: how to judge any course…”: 1 Instructor credibility and recency…; 2 Syllabus depth versus the job……
- Title attribute: The 5-Point Course Filter: how to judge any course before paying
- Caption (also keep the key point in the HTML text): New Coursera specializations and Udemy courses launch every month, so naming specific courses above is only half the job.
**V5 — Comparison table** (place after the H2 “Costs and timelines, compared” #costs-table)
- File: `best-computer-and-data-science-courses-for-commerce-students-comparison-costs-timelines-compared.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Course marketing pages round numbers to sound more attractive than they are.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Course | Realistic cost | Realistic timeline | What it actually gets… / Row: Excel Skills for… | Free to audit; roughly Rs… | 3 weeks at 10 hrs/week… | Feeds directly into… / Row: Google Data Analytics… | Roughly Rs 4,000/month… | 6 months at 10 hrs/week… | Google reports about 75%… / Row: Power BI PL-300 official… | Roughly Rs 4,800-5,000… | 6-10 weeks part-time for… | An internationally… / Row: Python for Finance… | Listed near Rs… | 8-10 hours of video… | A working… / Row: No-Code Data Science / ML… | Roughly Rs… | 2-3 months part-time | Tests genuine interest in…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Course Realistic cost Realistic timeline What it actually gets you Excel Skills for Business: Advanced (Macquarie) Free to audit; roughly Rs 3,000-4,000/month on Coursera for the certificate 3 weeks at 10 hrs/week for this course; the full specialization runs  | A simple budgeting heuristic, not a universal rule: as a strict planning guideline, try to keep total paid-course spending on any one layer under roughly 10% of your total annual education budget. | On a Rs 1,00,000 yearly education budget, that is about Rs 10,000, which comfortably covers the Power BI PL-300 exam plus training, or a full Excel specialization, with budget left for the next layer.
- Alt: Comparison table for “Costs and timelines, compared”: Course | Realistic cost | Realistic…; Excel Skills for… | Free to audit…; Google Data Analytics… | Roughly Rs…
- Title attribute: Costs and timelines, compared
- Caption (also keep the key point in the HTML text): Course marketing pages round numbers to sound more attractive than they are.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/best-courses-for-bba-students/

**H1:** Best courses for BBA students: what to add now, what to skip  
**Category:** college-degrees · **Words:** 5551 · **H2 sections:** 18 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Best courses for BBA students: what to add now, what to skip”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/best-courses-for-bba-students*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer for…”, “Best courses for BBA…”, “The tool floor: Excel…”, “Pick the add-on by your…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 92%, 92%, 93%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-courses-for-bba-students.webp`, `best-courses-for-bba-students-detail.webp`, `best-courses-for-bba-students-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `best-courses-for-bba-students-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-courses-for-bba-students-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a Class 12 or first-year medical aspirant, a quiet public library table. Props that belong to “Best courses for BBA students: what to add now, what to skip”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best courses for BBA students: what to add now, what to skip
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-courses-for-bba-students-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Best courses for BBA students in India: Excel, SQL, Power BI, NISM, CS, CMA, CFA and MBA compared on cost…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer for BBA students / Best courses for BBA students, side by side / The tool floor: Excel, SQL and Power BI first / Pick the add-on by your BBA specialisation / What you pay for when the content is free
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best courses for BBA students: what to add now, what to skip”
- Title attribute: At a glance: Best courses for BBA students: what to add now, what to…
- Caption (also keep the key point in the HTML text): Best courses for BBA students in India: Excel, SQL, Power BI, NISM, CS, CMA, CFA and MBA compared on cost, time and pay.
**V2 — Framework cards** (place after the H2 “The short answer for BBA students” #answer)
- File: `best-courses-for-bba-students-framework-short-answer-bba-students.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Ask around and you hear one word: MBA.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Which certification should I do alongside my BBA? / I am in final year of BBA finance. What should I add now? / Can I take a short course along with my degree without hurting my marks? / Is there anything better than an MBA for me?
- Numbers: use ONLY these facts from the article (exact values, no new ones): Salary summaries put most BBA freshers at about Rs 2.5-5 LPA. | Naukri's BBA career guide gives Rs 2.5-4.5 LPA as the usual entry range and up to Rs 6.5 LPA for analyst-type roles.
- Alt: Framework cards for “The short answer for BBA students”: Which certification should I do…; I am in final year of BBA finance.…; Can I take a short course along with…
- Title attribute: The short answer for BBA students
- Caption (also keep the key point in the HTML text): Ask around and you hear one word: MBA.
**V3 — Comparison table** (place after the H2 “Best courses for BBA students, side by side” #map)
- File: `best-courses-for-bba-students-comparison-best-courses-bba-students.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Here is the whole field in one table.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Course | Best time | Real cost | What it unlocks / Row: Excel, SQL and Power BI… | During BBA, from year 1… | Free learning material… | Business analyst, MIS… / Row: Google Data Analytics or… | During BBA, any year | Coursera lists USD 49 a… | A structured path plus a… / Row: NISM certification (for… | During BBA finance track… | Mutual fund distributor… | Entry into distribution… / Row: CS Executive (direct… | After BBA (ICSI lets… | Rs 23,900 in total for… | Company secretary route… / Row: CMA (direct entry to… | After BBA (ICMAI admits… | Direct Intermediate… | Cost and management…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Google Data Analytics or Digital Marketing certificate During BBA, any year Coursera lists USD 49 a month in the US and Canada. | India pricing was reported at Rs 1,699 a month from September 2025, so 3-6 months is about Rs 5,100-10,200; check the live page A structured path plus a finished capstone project to show Good if you finish the project. | NISM certification (for example, mutual fund distributor) During BBA finance track, or right after Mutual fund distributor exam: Rs 1,500 plus payment gateway charges.
- Alt: Comparison table for “Best courses for BBA students, side by side”: Course | Best time | Real cost | What…; Excel, SQL and Power BI… | During…; Google Data…
- Title attribute: Best courses for BBA students, side by side
- Caption (also keep the key point in the HTML text): Here is the whole field in one table.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “What you pay for when the content is free” #paid-value)
- File: `best-courses-for-bba-students-stat-pay-content-free.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most of the information in a BBA add-on course is already free.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The course has a famous brand name or a star rating. / It promises a job or a guaranteed package. / The syllabus was last updated years ago. / You want the certificate more than the skill. / Live feedback on your project from a working professional.
- Numbers: use ONLY these facts from the article (exact values, no new ones): A useful planning check, not a universal rule: keep any single course to roughly 10% of your total education budget, including the cost of your degree. | Above about 20% is a serious caution point that needs course-specific evidence.
- Alt: Stat panel or bar chart (only the numbers listed) for “What you pay for when the content is free”: The course has a famous brand name or…; It promises a job or a…
- Title attribute: What you pay for when the content is free
- Caption (also keep the key point in the HTML text): Most of the information in a BBA add-on course is already free.
**V5 — Comparison table** (place after the H2 “What each official body says about BBA graduates” #rules)
- File: `best-courses-for-bba-students-comparison-each-official-body-says.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Coaching pages often blur these rules.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Body | What the official… | What it leaves open | Your move / Row: ICAI (CA direct entry) | Graduates in Commerce… | It does not say whether a… | Email ICAI with your… / Row: ICSI (CS Executive) | Graduates and… | The FAQ line sets no… | Register for Executive… / Row: ICMAI (CMA) | Graduation in any… | The page does not list… | Confirm the fee on the… / Row: CFA Institute | A bachelor's degree, or a… | No finance degree and no… | A final-year BBA student… / Row: CAT (IIM Indore, 2026) | A bachelor's degree with… | Individual IIMs add their… | Read the official CAT…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Body What the official page says What it leaves open Your move ICAI (CA direct entry) Graduates in Commerce with 55% marks, or graduates in other subjects with 60%, can register for Intermediate for Rs 18,000. | Articleship is 2 years after both groups (ICAI FAQ, updated September 2024). | Email ICAI with your degree name and marks, and plan for the 60% band until it answers.
- Alt: Comparison table for “What each official body says about BBA graduates”: Body | What the official… | What it…; ICAI (CA direct entry) | Graduates in…; ICSI (CS…
- Title attribute: What each official body says about BBA graduates
- Caption (also keep the key point in the HTML text): Coaching pages often blur these rules.
**V6 — Asymmetrical pros-and-cons comparison** (place after the H2 “MBA, CAT and IPM: when the degree is worth it” #mba)
- File: `best-courses-for-bba-students-asymmetrical-mba-cat-ipm-degree.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: An MBA is the most talked-about option and the most expensive one.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): An MBA is the most talked-about option and the most expensive one. / Its value depends almost entirely on the institute. / CAT 2026 is on 29 November 2026, conducted by IIM Indore.
- Numbers: use ONLY these facts from the article (exact values, no new ones): The eligibility is a bachelor's degree with at least 50% marks (45% for reserved categories), and final-year students can apply. | The application fee was Rs 2,700 (Rs 1,350 for SC, ST and PwD candidates), and the deadline of 22 September 2026 was not extended. | If you are still in Class 12 and thinking of a five-year integrated route, IIM Indore's IPM charges Rs 6 lakh per year of course fee in the first three years, and its total academic fee is reported at Rs 38.3 lakh for the 2026-31 batch.
- Alt: Asymmetrical pros-and-cons comparison for “MBA, CAT and IPM: when the degree is worth it”: An MBA is the most talked-about…; Its value depends almost entirely on……
- Title attribute: MBA, CAT and IPM: when the degree is worth it
- Caption (also keep the key point in the HTML text): An MBA is the most talked-about option and the most expensive one.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/best-courses-for-computer-science-cse-students/

**H1:** Best Courses for Computer Science and CSE Students: Degree Path vs Skill Stack  
**Category:** college-degrees · **Words:** 4562 · **H2 sections:** 16 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Best Courses for Computer Science and CSE Students: Degree…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/best-courses-for-computer-science-cse-students*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The two searches hiding…”, “Choosing your…”, “Which degree fits which…”, “Course 1: Data…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `best-courses-for-computer-science-cse-students.webp`, `best-courses-for-computer-science-cse-students-detail.webp`, `best-courses-for-computer-science-cse-students-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `best-courses-for-computer-science-cse-students-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `best-courses-for-computer-science-cse-students-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a Class 12 or first-year medical aspirant, a school or college corridor bench. Props that belong to “Best Courses for Computer Science and CSE Students: Degree Path vs Skill Stack”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Best Courses for Computer Science and CSE Students: Degree Path vs…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `best-courses-for-computer-science-cse-students-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Best courses for computer science and CSE students: which undergraduate path (BTech CSE, BCA, BSc CS) to pick…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The two searches hiding inside this one keyword / Choosing your undergraduate path into CSE / Already doing a CS/CSE degree? This is the real question / Course 1: Data structures and algorithms — the non-negotiable / Course 2: System design — for after your first internship, not before
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Best Courses for Computer Science and CSE Students: Degree Path vs…”
- Title attribute: At a glance: Best Courses for Computer Science and CSE Students…
- Caption (also keep the key point in the HTML text): Best courses for computer science and CSE students: which undergraduate path (BTech CSE, BCA, BSc CS) to pick after 12th, plus the real DSA, system…
**V2 — Comparison table** (place after the H2 “Choosing your undergraduate path into CSE” #degree-path)
- File: `best-courses-for-computer-science-cse-students-comparison-choosing-undergraduate-path-into.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If you're finishing 12th and trying to get into computer science, three degrees compete for your attention…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Path | Duration | How you get in | The real trade-off / Row: B.Tech / B.E. in CSE | 4 years | JEE Main… | The widest, most… / Row: BCA (Bachelor of Computer… | 3 years (a 4-year… | Mostly merit-based on… | Cheaper and faster than… / Row: B.Sc Computer Science /… | 3 years (4-year honours… | Merit-based at most state… | Lighter fee… / Row: 5-year integrated M.Tech… | 5 years, one continuous… | JEE-based or… | Saves a year versus doing… / JEE, state CETs, and CUET: what actually gets you in / Which degree fits which student
- Numbers: use ONLY these facts from the article (exact values, no new ones): in CSE 4 years JEE Main (NITs/IIITs/GFTIs via JoSAA), JEE Advanced (IITs), or a state CET (MHT-CET, WBJEE, KCET, and others) for state colleges; BITSAT for BITS campuses The widest, most recognised route. | BCA (Bachelor of Computer Applications) 3 years (a 4-year BCA(Hons) version exists at some universities) Mostly merit-based on Class 12 marks; a handful of universities run their own computer-aptitude entrance test Cheaper and faster than B.Tech, more applied  | B.Sc Computer Science / B.Sc IT 3 years (4-year honours version at some universities under NEP) Merit-based at most state and private universities; CUET UG for many central universities Lighter fee, science-stream flavour with some pure-math and statistics dep
- Alt: Comparison table for “Choosing your undergraduate path into CSE”: Path | Duration | How you get in |…; B.Tech / B.E. in CSE | 4 years | JEE…; BCA (Bachelor of…
- Title attribute: Choosing your undergraduate path into CSE
- Caption (also keep the key point in the HTML text): If you're finishing 12th and trying to get into computer science, three degrees compete for your attention: B.Tech CSE, BCA, and B.Sc Computer…
**V3 — Decision tree by situation** (place after the H2 “Already doing a CS/CSE degree? This is the real question” #already-enrolled)
- File: `best-courses-for-computer-science-cse-students-decision-already-doing-cse-degree.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If you're already in a B.Tech CSE, BCA, or B.Sc CS programme, the degree decision is behind you.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): If you're already in a B.Tech CSE, BCA, or B.Sc CS programme, the degree… / The question that actually decides your first salary, and your first three… / The chain that matters here: the right skill portfolio unlocks high-income…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree by situation for “Already doing a CS/CSE degree? This is the real…”: If you're already in a B.Tech CSE…; The question that actually decides…; The…
- Title attribute: Already doing a CS/CSE degree? This is the real question
- Caption (also keep the key point in the HTML text): If you're already in a B.Tech CSE, BCA, or B.Sc CS programme, the degree decision is behind you.
**V4 — Chronological timeline** (place after the H2 “Course 4: One language mastered, plus real CS fundamentals” #language-cs-fundamentals)
- File: `best-courses-for-computer-science-cse-students-chronological-course-one-language-mastered.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most CS syllabi teach a language shallowly across many subjects instead of one language deeply.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Most CS syllabi teach a language shallowly across many subjects instead of one… / Reverse that. / Pick Python, Java, or JavaScript, based on the track you're leaning toward, and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “Course 4: One language mastered, plus real CS…”: Most CS syllabi teach a language…; Reverse that.; Pick Python, Java, or JavaScript…
- Title attribute: Course 4: One language mastered, plus real CS fundamentals
- Caption (also keep the key point in the HTML text): Most CS syllabi teach a language shallowly across many subjects instead of one language deeply.
**V5 — Comparison table** (place after the H2 “The full stack at a glance: free route, paid route, and the proof each one needs” #stack-table)
- File: `best-courses-for-computer-science-cse-students-comparison-full-stack-glance-free.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Every skill area above has a free path worth trying first, and a paid path worth considering only once the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Skill area | Try free first | Consider paying for | The proof it needs to… / Row: DSA | Striver's A2Z DSA Sheet… | takeUforward's TUF+ paid… | A public GitHub with your… / Row: System design | ByteByteGo's free… | Grokking the System… | One written design doc… / Row: Cloud | AWS Free Tier plus AWS… | The official exam fee for… | One personal or college… / Row: Core language + CS… | CS50: Introduction to… | Rarely needed here — the… | One project built without… / Row: AI / ML | Google's free "Machine… | Machine Learning… | One small trained model…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “The full stack at a glance: free route, paid route…”: Skill area | Try free first |…; DSA | Striver's A2Z DSA Sheet… |…; System design |…
- Title attribute: The full stack at a glance: free route, paid route, and the proof…
- Caption (also keep the key point in the HTML text): Every skill area above has a free path worth trying first, and a paid path worth considering only once the free version stops being enough on its own.
**V6 — Linear process chain or roadmap** (place after the H2 “How to actually pick a course without wasting money” #how-to-pick)
- File: `best-courses-for-computer-science-cse-students-linear-actually-pick-course-without.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A course is not automatically good because it's expensive, and not automatically bad because it's free.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Check the instructor's actual recent credibility in the specific skill, not just… / Check when the syllabus was last meaningfully updated — a "cloud computing" course last… / Check whether the course demands you build something, not just watch and take a quiz. / Check independent reviews, not the testimonials on the course's own sales page. / Compare the total cost and time against what you would learn from the free version first…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “How to actually pick a course without wasting money”: Check the instructor's actual recent…; Check when the syllabus was last……
- Title attribute: How to actually pick a course without wasting money
- Caption (also keep the key point in the HTML text): A course is not automatically good because it's expensive, and not automatically bad because it's free.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/certificate-courses-for-bcom-students/

**H1:** Certificate Courses for BCom Students: Which Ones Employers Can Verify  
**Category:** college-degrees · **Words:** 5382 · **H2 sections:** 19 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Certificate Courses for BCom Students: Which Ones Employers…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/certificate-courses-for-bcom-students*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “The 4-Rung Certificate…”, “Rung 1: exam-body…”, “Rung 2: software and…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 92%, 92%, 93%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `certificate-courses-for-bcom-students.webp`, `certificate-courses-for-bcom-students-detail.webp`, `certificate-courses-for-bcom-students-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `certificate-courses-for-bcom-students-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `certificate-courses-for-bcom-students-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a Class 12 or first-year medical aspirant, a classroom desk after hours. Props that belong to “Certificate Courses for BCom Students: Which Ones Employers Can Verify”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Certificate Courses for BCom Students: Which Ones Employers Can Verify
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `certificate-courses-for-bcom-students-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Certificate courses for BCom students ranked by what an employer can verify: NISM, Tally, Power BI, SWAYAM…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / The 4-Rung Certificate Ladder / Rung 1: exam-body certificates (NISM and GST practitioner) / Rung 2: software and vendor certificates / Rung 3: SWAYAM and NPTEL, and college credit
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Certificate Courses for BCom Students: Which Ones Employers Can Verify”
- Title attribute: At a glance: Certificate Courses for BCom Students: Which Ones…
- Caption (also keep the key point in the HTML text): Certificate courses for BCom students ranked by what an employer can verify: NISM, Tally, Power BI, SWAYAM credit, the GST practitioner catch, and…
**V2 — Framework cards** (place after the H2 “The short answer” #short-answer)
- File: `certificate-courses-for-bcom-students-framework-short-answer.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: If you are looking for certificate courses for BCom students, do not start with a list of "top 10".
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): "Do any computer course, it looks good on the resume." / "Tally with GST alone gets a job." / "The more certificates, the better." / "Placement guaranteed, so the fee is worth it."
- Numbers: use ONLY these facts from the article (exact values, no new ones): Advertised fees for the same subject vary so much that a student can easily pay several times more for a paper that a Rs 1,500 exam or a maker's own certificate would have beaten. | The Ministry of Education's AISHE 2021-22 survey counts about 4.33 crore students in higher education, 78.9% of them undergraduates, and puts commerce at 13.3% of undergraduates. | That is roughly 45 lakh commerce undergraduates at one time.
- Alt: Framework cards for “The short answer”: "Do any computer course, it looks…; "Tally with GST alone gets a job."; "The more certificates, the better."
- Title attribute: The short answer
- Caption (also keep the key point in the HTML text): If you are looking for certificate courses for BCom students, do not start with a list of "top 10".
**V3 — Comparison table** (place after the H2 “Rung 1: exam-body certificates (NISM and GST practitioner)” #rung-1)
- File: `certificate-courses-for-bcom-students-comparison-rung-exam-body-certificates.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: NISM , the National Institute of Securities Markets, runs certification exams for the securities industry.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Exam | Fee | Format | Useful for / Row: NISM Series V-A: Mutual… | Rs 1,500 plus… | 2 hours, 100 questions… | Wealth and mutual-fund… / Row: NISM Series VIII: Equity… | Rs 1,500 plus… | 2 hours, 100 questions… | Broking, dealing, and… / Row: NISM Series XV: Research… | Rs 1,500 plus… | 2 hours, 100 marks (80… | Equity research and… / Row: SEBI Investor Awareness… | Free | 60 minutes, 50 questions… | A no-cost first try to…
- Numbers: use ONLY these facts from the article (exact values, no new ones): The exams are online and remote-proctored, and the certificates stay valid for 3 years from the exam date. | Exam Fee Format Useful for NISM Series V-A: Mutual Fund Distributors Rs 1,500 plus payment-gateway charges 2 hours, 100 questions, pass mark 50%, no negative marking Wealth and mutual-fund distribution, banking sales, financial-advisory support roles. | NISM Series VIII: Equity Derivatives Rs 1,500 plus payment-gateway charges 2 hours, 100 questions, pass mark 60%, 25% negative marking Broking, dealing, and trading-desk support.
- Alt: Comparison table for “Rung 1: exam-body certificates (NISM and GST…”: Exam | Fee | Format | Useful for; NISM Series V-A: Mutual… | Rs 1,500…; NISM Series VIII…
- Title attribute: Rung 1: exam-body certificates (NISM and GST practitioner)
- Caption (also keep the key point in the HTML text): NISM , the National Institute of Securities Markets, runs certification exams for the securities industry.
**V4 — Mistakes versus smarter move panel** (place after the H2 “Rung 4: institute certificates and the fee trap” #rung-4)
- File: `certificate-courses-for-bcom-students-mistakes-rung-institute-certificates-fee.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Local and online institutes sell courses in Tally with GST, Advanced Excel, Power BI, and SAP FICO.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Local and online institutes sell courses in Tally with GST, Advanced Excel… / These can teach you real skills. / The certificate itself carries the least weight, and the fee range for the same…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Power BI Rs 4,800 to Rs 77,000 across 14 providers Henry Harvin provider comparison, March 2025 About 16 times apart; the middle provider is about Rs 20,400 Tally with GST Rs 5,000 to Rs 10,000 in one guide; Rs 6,000 to Rs 20,000 in another BCIT World, 2023; S | Naukri Campus (January 2025) puts overall BCom fresher starting pay at roughly Rs 2.5 lakh to Rs 5 lakh a year across all industries and roles, not per certificate.
- Alt: Mistakes versus smarter move panel for “Rung 4: institute certificates and the fee trap”: Local and online institutes sell…; These can teach you real skills.; The…
- Title attribute: Rung 4: institute certificates and the fee trap
- Caption (also keep the key point in the HTML text): Local and online institutes sell courses in Tally with GST, Advanced Excel, Power BI, and SAP FICO.
**V5 — Comparison table** (place after the H2 “Certificates compared: cost and what they prove” #compare)
- File: `certificate-courses-for-bcom-students-comparison-certificates-compared-cost-they.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Certificate Issued by Cost What it proves Rung NISM Series exams NISM Rs 1,500 plus gateway charges for the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Certificate | Issued by | Cost | What it proves / Row: NISM Series exams | NISM | Rs 1,500 plus gateway… | You passed a… / Row: GST Practitioner… | NACIN, for enrolment… | Fee set by NACIN.… | Enrolment on the GST… / Row: Tally Bookkeeper… | Tally Education, on… | Listed as free to enrol… | TallyPrime, payables and… / Row: Power BI Data Analyst… | Microsoft | Priced by country.… | Power Query, data… / Row: Google Data Analytics… | Google, on Coursera | Coursera charges USD 49 a… | Spreadsheets, SQL…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Certificate Issued by Cost What it proves Rung NISM Series exams NISM Rs 1,500 plus gateway charges for the common ones; some cost Rs 3,000 You passed a market-regulation exam anyone can verify. | Valid for 3 years from the exam date, then renew before it lapses. | Secondary sources report Rs 500 per attempt at the 2018-19 sittings.
- Alt: Comparison table for “Certificates compared: cost and what they prove”: Certificate | Issued by | Cost | What…; NISM Series exams | NISM | Rs 1,500…; GST…
- Title attribute: Certificates compared: cost and what they prove
- Caption (also keep the key point in the HTML text): Certificate Issued by Cost What it proves Rung NISM Series exams NISM Rs 1,500 plus gateway charges for the common ones; some cost Rs 3,000 You…
**V6 — Chronological timeline** (place after the H2 “When to take each one: the validity clock” #validity)
- File: `certificate-courses-for-bcom-students-chronological-take-each-one-validity.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Some certificates carry an expiry date that starts on the day you pass.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): SWAYAM and NPTEL courses that your college approves. Credit is the goal, and they teach… / Tally certification. Tally Education says it has lifetime validity. / PL-300, once you have two dashboards. It renews every 12 months at no cost through an… / NISM exams. Valid for 3 years from the exam date, so book them in your last two years. / SEBI Investor Awareness Test. Free, but valid for only 2 years.
- Numbers: use ONLY these facts from the article (exact values, no new ones): It renews every 12 months at no cost through an online assessment. | Valid for 3 years from the exam date, so book them in your last two years. | Free, but valid for only 2 years.
- Alt: Chronological timeline for “When to take each one: the validity clock”: SWAYAM and NPTEL courses that your…; Tally certification. Tally Education…; PL-300, once you…
- Title attribute: When to take each one: the validity clock
- Caption (also keep the key point in the HTML text): Some certificates carry an expiry date that starts on the day you pass.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/certificate-courses-for-law-students/

**H1:** Certificate Courses for Law Students: Which Ones Actually Pay Off  
**Category:** college-degrees · **Words:** 3666 · **H2 sections:** 13 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Certificate Courses for Law Students: Which Ones Actually…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/certificate-courses-for-law-students*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Why the LLB alone…”, “Certificate courses by…”, “Private platform…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `certificate-courses-for-law-students.webp`, `certificate-courses-for-law-students-detail.webp`, `certificate-courses-for-law-students-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `certificate-courses-for-law-students-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `certificate-courses-for-law-students-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a Class 12 or first-year medical aspirant, a classroom desk after hours. Props that belong to “Certificate Courses for Law Students: Which Ones Actually Pay Off”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Certificate Courses for Law Students: Which Ones Actually Pay Off
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `certificate-courses-for-law-students-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Certificate courses for law students compared honestly: which NUJS, ILI, NLSIU, and platform courses in IPR…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on certificate courses for law students / Why the LLB alone rarely closes a hiring gap / University-backed certificate and diploma courses worth knowing / Certificate courses by specialization / Private platform courses: LawSikho and the rest
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Certificate Courses for Law Students: Which Ones Actually Pay Off”
- Title attribute: At a glance: Certificate Courses for Law Students: Which Ones…
- Caption (also keep the key point in the HTML text): Certificate courses for law students compared honestly: which NUJS, ILI, NLSIU, and platform courses in IPR, arbitration, corporate law, and legal…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “University-backed certificate and diploma courses worth knowing” #university-courses)
- File: `certificate-courses-for-law-students-asymmetrical-university-backed-certificate-diploma.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: These are real, currently listed programs from Indian law universities and law-focused institutes — verify…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): One-year PG Diplomas in Alternative Dispute Resolution, Corporate Laws & Management… / Shorter online Certificate Courses in Cyber Laws and in IPR / Strong when you want a structured, academically credible year-long grounding, not a quick… / Shorter, focused certificates: Criminal Litigation & Trial Advocacy, Real Estate Laws… / Good for a narrow, specific gap without a full-year time commitment
- Numbers: use ONLY these facts from the article (exact values, no new ones): Indian Law Institute (ILI), New Delhi One-year PG Diplomas in Alternative Dispute Resolution, Corporate Laws & Management, Cyber Law, and Intellectual Property Rights Law Shorter online Certificate Courses in Cyber Laws and in IPR Strong when you want a struct
- Alt: Asymmetrical pros-and-cons comparison for “University-backed certificate and diploma courses…”: One-year PG Diplomas in Alternative…; Shorter online Certificate…
- Title attribute: University-backed certificate and diploma courses worth knowing
- Caption (also keep the key point in the HTML text): These are real, currently listed programs from Indian law universities and law-focused institutes — verify current fees, dates, and eligibility…
**V3 — Comparison table** (place after the H2 “Certificate courses by specialization” #specialization-table)
- File: `certificate-courses-for-law-students-comparison-certificate-courses-specialization.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Use this as a starting map, not a checklist to complete.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Specialization | Course | Provider | Best fit if... / Row: Intellectual Property… | PG Diploma in IPR Law… | Indian Law Institute, New… | You want patent… / Row: Arbitration and ADR | Diploma in Domestic and… | LawSikho | You want hands-on… / Row: Arbitration and ADR | Postgraduate Diploma in… | NLSIU Bangalore (NLS… | You want an NLU-backed… / Row: Arbitration and ADR | IICA Certified… | Indian Institute of… | You are a working… / Row: Corporate and M&A law | PG Diploma in Corporate… | Indian Law Institute, New… | You want a structured…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Arbitration and ADR Postgraduate Diploma in Arbitration Law (PGDAL) NLSIU Bangalore (NLS PACE, distance mode) You want an NLU-backed credential recruiters instantly recognise, at roughly Rs 60,000.
- Alt: Comparison table for “Certificate courses by specialization”: Specialization | Course | Provider |…; Intellectual Property… | PG Diploma…; Arbitration and ADR |…
- Title attribute: Certificate courses by specialization
- Caption (also keep the key point in the HTML text): Use this as a starting map, not a checklist to complete.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Global certificate courses worth the money” #global-courses)
- File: `certificate-courses-for-law-students-asymmetrical-global-certificate-courses-worth.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A smaller number of law students genuinely benefit from an internationally recognised course, especially if…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): HarvardX: Contract Law — From Trust to Promise to Contract (edX) — a genuinely rigorous… / CopyrightX (Harvard Law School, via HarvardX) — a well-regarded, structured course on… / Coursera's legal research, contract, and AI-in-law offerings — quality varies by…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Global certificate courses worth the money”: HarvardX: Contract Law — From Trust…; CopyrightX (Harvard Law School, via……
- Title attribute: Global certificate courses worth the money
- Caption (also keep the key point in the HTML text): A smaller number of law students genuinely benefit from an internationally recognised course, especially if the target is an LLM abroad, an…
**V5 — Mistakes versus smarter move panel** (place after the H2 “Mistakes to avoid” #mistakes)
- File: `certificate-courses-for-law-students-mistakes-mistakes-avoid.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Collecting five certificates instead of finishing one with a work sample A resume with five half-explored…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 01 Collecting five certificates instead of finishing one with a work sample A… / One completed course plus one real contract, notice, or memo you can walk an… / 02 Paying university-diploma money for content that is free on YouTube Basic…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 06 Ignoring cost against your total law-school budget As a strict planning heuristic, test any certificate spend against roughly 10% of your total education and upskilling budget for the year. | A Rs 899 recorded course clears that easily for most students; a Rs 60,000-90,000 diploma needs a clearer, named reason — a specific target role, firm, or practice area — not general "it will help somewhere" thinking.
- Alt: Mistakes versus smarter move panel for “Mistakes to avoid”: 01 Collecting five certificates…; One completed course plus one real…; 02 Paying university-diploma…
- Title attribute: Mistakes to avoid
- Caption (also keep the key point in the HTML text): 01 Collecting five certificates instead of finishing one with a work sample A resume with five half-explored certificate names and zero attached…

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/courses-for-arts-and-humanities-students-after-12th/

**H1:** 12 courses for arts students after 12th, ranked by real fit and pay  
**Category:** college-degrees · **Words:** 3683 · **H2 sections:** 13 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “12 courses for arts students after 12th, ranked by real fit…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/courses-for-arts-and-humanities-students-after-12th*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The direct answer”, “Courses for arts…”, “Choose by work style…”, “Skill courses worth…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 90%, 91%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `courses-for-arts-and-humanities-students-after-12th.webp`, `courses-for-arts-and-humanities-students-after-12th-detail.webp`, `courses-for-arts-and-humanities-students-after-12th-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `courses-for-arts-and-humanities-students-after-12th-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `courses-for-arts-and-humanities-students-after-12th-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a Class 12 or first-year medical aspirant, a classroom desk after hours. Props that belong to “12 courses for arts students after 12th, ranked by real fit and pay”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: 12 courses for arts students after 12th, ranked by real fit and pay
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `courses-for-arts-and-humanities-students-after-12th-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The real courses for arts students after 12th: BA majors, BA LLB, BJMC, BFA, BSW, psychology, hotel…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The direct answer before the list / Courses for arts students after 12th, ranked by real fit / Choose by work style, not by the course name / Skill courses worth stacking on top / Use The 4-Checkpoint Protocol before you pick one course
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “12 courses for arts students after 12th, ranked by real fit and pay”
- Title attribute: At a glance: 12 courses for arts students after 12th, ranked by real…
- Caption (also keep the key point in the HTML text): The real courses for arts students after 12th: BA majors, BA LLB, BJMC, BFA, BSW, psychology, hotel management, animation, and skill certificates…
**V2 — Comparison table** (place after the H2 “Courses for arts students after 12th, ranked by real fit” #routes)
- File: `courses-for-arts-and-humanities-students-after-12th-comparison-courses-arts-students-after.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A random list of degree names does not help much.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Course | Real entry route | Reality check / Row: BA (major in Psychology… | CUET UG for most central… | The most flexible route… / Row: BA LLB (5-year integrated… | CLAT UG for National Law… | A genuinely strong path… / Row: BJMC / BA in Journalism… | CUET UG or the… | Good for writing- and… / Row: BFA (Bachelor of Fine… | Portfolio-based entrance… | Portfolio quality matters… / Row: BSW (Bachelor of Social… | Merit-based or… | A genuine route into NGO…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Courses for arts students after 12th, ranked by real…”: Course | Real entry route | Reality…; BA (major in Psychology… | CUET UG…; BA LLB…
- Title attribute: Courses for arts students after 12th, ranked by real fit
- Caption (also keep the key point in the HTML text): A random list of degree names does not help much.
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “The college and course budget filter for arts students” #budget)
- File: `courses-for-arts-and-humanities-students-after-12th-stat-college-course-budget-filter.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Arts is one of the streams where families can spend heavily on a brand name and still under-build real…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Keep any single course's fee within roughly 10% of the total education budget as a… / Leave the remaining budget for tools, a portfolio, internships, and future upskilling. / Spend materially above 10% only with specific evidence: a verified placement report… / Assuming a college's general reputation guarantees good outcomes for this specific course. / Taking a loan against a course that pays modestly at entry almost everywhere, like BFA…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Better budget logic Keep any single course's fee within roughly 10% of the total education budget as a starting heuristic. | Spend materially above 10% only with specific evidence: a verified placement report, accreditation, or scarce facilities. | This 10% figure is a strict planning heuristic, not a universal law.
- Alt: Stat panel or bar chart (only the numbers listed) for “The college and course budget filter for arts students”: Keep any single course's fee within…; Leave the…
- Title attribute: The college and course budget filter for arts students
- Caption (also keep the key point in the HTML text): Arts is one of the streams where families can spend heavily on a brand name and still under-build real capability.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “Self-learning vs a paid course: what genuinely needs formal admission” #self-learn)
- File: `courses-for-arts-and-humanities-students-after-12th-asymmetrical-self-learning-paid-course.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Not every course on this list needs the same approach to learning.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Writing, content strategy, and basic digital marketing, using free or low-cost courses… / Design fundamentals and UX basics, before committing to a full bootcamp or design degree. / Testing genuine interest in psychology through an audited introductory course before a… / Law: a recognised LLB and bar registration are legally required to practise. / Clinical or counselling psychology: supervised registration after a relevant master's is…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Self-learning vs a paid course: what genuinely needs…”: Writing, content strategy, and basic…; Design fundamentals and UX…
- Title attribute: Self-learning vs a paid course: what genuinely needs formal admission
- Caption (also keep the key point in the HTML text): Not every course on this list needs the same approach to learning.
**V5 — Comparison table** (place after the H2 “Why the combination pays, not the subject alone” #stacking)
- File: `courses-for-arts-and-humanities-students-after-12th-comparison-combination-pays-subject-alone.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The biggest gap in most "courses for arts students" advice is that it treats the decision as pick-one.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Base course | Multiplier skill… | Why the stack matters / Row: BA English or BJMC | Content strategy plus one… | Newsroom hiring alone has… / Row: BA LLB | A specialisation through… | A generalist law degree… / Row: BA / BSc Psychology | Research method training… | A bachelor's in… / Row: BFA or animation diploma | A finished portfolio or… | Hiring managers in design…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “Why the combination pays, not the subject alone”: Base course | Multiplier skill… | Why…; BA English or BJMC | Content strategy…; BA LLB | A…
- Title attribute: Why the combination pays, not the subject alone
- Caption (also keep the key point in the HTML text): The biggest gap in most "courses for arts students" advice is that it treats the decision as pick-one.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/courses-for-commerce-students-after-12th/

**H1:** Courses for Commerce Students After 12th: The Full Decision Map  
**Category:** college-degrees · **Words:** 4364 · **H2 sections:** 13 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Courses for Commerce Students After 12th: The Full Decision…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/courses-for-commerce-students-after-12th*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The real answer, not the”, “Diploma courses for…”, “Certificate courses…”, “Best online courses for…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 91%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `courses-for-commerce-students-after-12th.webp`, `courses-for-commerce-students-after-12th-detail.webp`, `courses-for-commerce-students-after-12th-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `courses-for-commerce-students-after-12th-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `courses-for-commerce-students-after-12th-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a Class 12 or first-year medical aspirant, a quiet public library table. Props that belong to “Courses for Commerce Students After 12th: The Full Decision Map”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Courses for Commerce Students After 12th: The Full Decision Map
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `courses-for-commerce-students-after-12th-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Courses for commerce students after 12th, compared: BCom, BBA, CA/CS/CMA foundation routes, diplomas…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The real answer, not the "top 10 courses" list / Undergraduate degree courses for commerce students / Professional courses for commerce students you can start right after… / Diploma courses for commerce students / Certificate courses for commerce students that actually move a resume
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Courses for Commerce Students After 12th: The Full Decision Map”
- Title attribute: At a glance: Courses for Commerce Students After 12th: The Full…
- Caption (also keep the key point in the HTML text): Courses for commerce students after 12th, compared: BCom, BBA, CA/CS/CMA foundation routes, diplomas, certificates, and online courses, with real…
**V2 — Comparison table** (place after the H2 “Undergraduate degree courses for commerce students” #degrees)
- File: `courses-for-commerce-students-after-12th-comparison-undergraduate-degree-courses-commerce.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A full degree is still the default for most commerce students after 12th, and for good reason: it keeps CA…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Degree | Fee range | Entry route | Reality check / Row: BCom / BCom (Hons) | Rs 10,000-60,000/year… | Merit-based at most… | The default… / Row: BBA | Rs 60,000-3 L/year | Merit-based; some… | Faster into… / Row: BMS (Management Studies) | Rs 30,000-1.5 L/year | Merit-based, mostly at… | A more structured… / Row: BA Economics (Honours) | Rs 15,000-1.2 L/year | CUET or merit-based… | The strongest of the… / Row: BCom + CA / CS / CMA… | Degree fee above, plus Rs… | Register for CA… | The single strongest…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Degree Fee range Entry route Reality check BCom / BCom (Hons) Rs 10,000-60,000/year govt; Rs 40,000-2 L/year private Merit-based at most colleges; CUET for central universities The default, widest-accepted commerce degree. | BBA Rs 60,000-3 L/year Merit-based; some institutes run their own aptitude test Faster into corporate-facing roles than BCom, but has the same generalist gap unless paired with an MBA later or a specific domain skill now. | BMS (Management Studies) Rs 30,000-1.5 L/year Merit-based, mostly at Mumbai University-affiliated colleges A more structured, project-heavy alternative to BBA in some cities.
- Alt: Comparison table for “Undergraduate degree courses for commerce students”: Degree | Fee range | Entry route |…; BCom / BCom (Hons) | Rs…; BBA | Rs 60,000-3 L/year |…
- Title attribute: Undergraduate degree courses for commerce students
- Caption (also keep the key point in the HTML text): A full degree is still the default for most commerce students after 12th, and for good reason: it keeps CA, CS, CMA, an MBA, and government-exam…
**V3 — Comparison table** (place after the H2 “Professional courses for commerce students you can start right after 12th” #professional)
- File: `courses-for-commerce-students-after-12th-comparison-professional-courses-commerce-students.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the part most generic articles get wrong: CA, CS, and CMA are not "after graduation" courses.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Qualification | Fee (approximate) | Time to qualify | Realistic salary on… / Row: CA (Chartered… | Roughly Rs 11,000-12,000… | Minimum about 4.5 years… | Rs 7-12 LPA on… / Row: CS (Company Secretary) —… | ICSI-only fees across… | Roughly 3-4 years… | Rs 6-10 LPA on… / Row: CMA (Cost and Management… | ICMAI Foundation… | Roughly 3.5-4 years… | Rs 6-10 LPA on… / Registration and exam fees across all three are genuinely low, often under Rs 4 lakh… / All three can run in parallel with your BCom degree, so you lose no extra years compared… / CA in particular has one of the strongest fee-to-income ratios of any course on this page.
- Numbers: use ONLY these facts from the article (exact values, no new ones): Qualification Fee (approximate) Time to qualify Realistic salary on qualifying CA (Chartered Accountancy) — Foundation route Roughly Rs 11,000-12,000 at Foundation registration; Rs 3-4 lakh in total ICAI fees across Foundation, Intermediate, Final, and article | Why the ICAI/ICSI/ICMAI route compounds well Registration and exam fees across all three are genuinely low, often under Rs 4 lakh total, against Rs 8-25 lakh for an MBA at a strong institute.
- Alt: Comparison table for “Professional courses for commerce students you can…”: Qualification | Fee (approximate) |…; CA (Chartered… | Roughly Rs…; CS (Company…
- Title attribute: Professional courses for commerce students you can start right after…
- Caption (also keep the key point in the HTML text): This is the part most generic articles get wrong: CA, CS, and CMA are not "after graduation" courses.
**V4 — Framework cards** (place after the H2 “Diploma courses for commerce students” #diploma)
- File: `courses-for-commerce-students-after-12th-framework-diploma-courses-commerce-students.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: A diploma is the right call when you want to start earning faster than a 3-year degree allows, or when you…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Diploma in Business Administration / Retail Management / Diploma in Banking and Finance / Best for: A faster, cheaper on-ramp into corporate or retail operations than a 3-year BBA. / Reality: Works best as a stepping stone into a job plus a later distance BBA, not as a… / Best for: Students targeting private-bank branch or BPO-style financial operations roles. / Reality: Useful for entry-level branch roles; Probationary Officer and specialist roles…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Framework cards for “Diploma courses for commerce students”: Diploma in Business Administration /…; Diploma in Banking and Finance; Best for: A faster, cheaper…
- Title attribute: Diploma courses for commerce students
- Caption (also keep the key point in the HTML text): A diploma is the right call when you want to start earning faster than a 3-year degree allows, or when you want a structured, cheaper stepping stone…
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “Every commerce-course path compared: fee, time, and real pay” #comparison)
- File: `courses-for-commerce-students-after-12th-asymmetrical-every-commerce-course-path.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Put the four lanes side by side instead of judging them one at a time.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Certificate courses (GST, Tally, Excel): weeks to a few months, lowest cost, needs a job… / Diplomas (business administration, banking and finance): 1-2 years, structured entry into… / BCom, BBA, BMS, BA Economics: 3 years, widest general acceptance, weak alone without an… / CA: about 4.5-plus years, strongest fee-to-income ratio on this page once qualified. / CS and CMA: roughly 3-4 years, more specific but genuinely strong demand in compliance…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Diplomas (business administration, banking and finance): 1-2 years, structured entry into a first job. | Standard degree timeline BCom, BBA, BMS, BA Economics: 3 years, widest general acceptance, weak alone without an add-on skill. | CS and CMA: roughly 3-4 years, more specific but genuinely strong demand in compliance and cost-control roles.
- Alt: Asymmetrical pros-and-cons comparison for “Every commerce-course path compared: fee, time, and…”: Certificate courses (GST, Tally…; Diplomas (business…
- Title attribute: Every commerce-course path compared: fee, time, and real pay
- Caption (also keep the key point in the HTML text): Put the four lanes side by side instead of judging them one at a time.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/courses-for-pcb-bipc-biology-students-after-12th-without-neet/

**H1:** Courses for PCB and BiPC Students After 12th Without NEET  
**Category:** college-degrees · **Words:** 4685 · **H2 sections:** 15 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Courses for PCB and BiPC Students After 12th Without NEET”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/courses-for-pcb-bipc-biology-students-after-12th-without-neet*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The real map, not just…”, “Pick your lane first”, “BSc courses for…”, “Which BSc course is…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 92%, 93%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `courses-for-pcb-bipc-biology-students-after-12th-without-neet.webp`, `courses-for-pcb-bipc-biology-students-after-12th-without-neet-detail.webp`, `courses-for-pcb-bipc-biology-students-after-12th-without-neet-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `courses-for-pcb-bipc-biology-students-after-12th-without-neet-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `courses-for-pcb-bipc-biology-students-after-12th-without-neet-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a Class 12 or first-year medical aspirant, a school or college corridor bench. Props that belong to “Courses for PCB and BiPC Students After 12th Without NEET”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Courses for PCB and BiPC Students After 12th Without NEET
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `courses-for-pcb-bipc-biology-students-after-12th-without-neet-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Courses for PCB and BiPC students after 12th without NEET: real BSc, B.Tech, and paramedical options ranked…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The real map for PCB and BiPC students, not just MBBS or bust / Pick your lane first, then pick the course name / BSc courses for PCB and BiPC students: the real list / Which BSc course is best for you, honestly / Bio-Maths: the fourth-subject combination that changes your options
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Courses for PCB and BiPC Students After 12th Without NEET”
- Title attribute: At a glance: Courses for PCB and BiPC Students After 12th Without NEET
- Caption (also keep the key point in the HTML text): Courses for PCB and BiPC students after 12th without NEET: real BSc, B.Tech, and paramedical options ranked by pay, plus Bio-Maths and EAMCET…
**V2 — Framework cards** (place after the H2 “The real map for PCB and BiPC students, not just MBBS or bust” #reality)
- File: `courses-for-pcb-bipc-biology-students-after-12th-without-neet-framework-real-map-pcb-bipc.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most PCB and BiPC students hear one message for two straight years: crack NEET, or your biology stream was…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): "PCB was pointless if you don't become a doctor." / "Just do any BSc — it doesn't matter which one." / "BiPC without EAMCET or NEET means you have almost nothing left." / "A B.Tech needs Maths from day one, so PCB students can't touch it."
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Framework cards for “The real map for PCB and BiPC students, not just MBBS…”: "PCB was pointless if you don't…; "Just do any BSc — it doesn't matter…; "BiPC without…
- Title attribute: The real map for PCB and BiPC students, not just MBBS or bust
- Caption (also keep the key point in the HTML text): Most PCB and BiPC students hear one message for two straight years: crack NEET, or your biology stream was wasted.
**V3 — Comparison table** (place after the H2 “BSc courses for PCB and BiPC students: the real list” #bsc)
- File: `courses-for-pcb-bipc-biology-students-after-12th-without-neet-comparison-bsc-courses-pcb-bipc.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Here is the honest BSc courses list for biology students after 12th, with real fit and pay context, not a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: BSc course | Best for | Realistic starting pay / Row: BSc Biotechnology | Lab-oriented students who… | Roughly ₹3.5L–8L a year… / Row: BSc Microbiology | Students drawn to… | Roughly ₹2L–5L a year at… / Row: BSc Biochemistry | Students who like… | Roughly ₹3.5L–6L a year… / Row: BSc Nursing | Students who want real… | Roughly ₹2.5L–6L a year… / Row: BSc Agriculture (Hons.) | Students who want… | Roughly ₹2L–5L a year at…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Roughly ₹3.5L–8L a year at entry, and it climbs sharply with an MSc plus a specialisation. | Roughly ₹2L–5L a year at entry; food, pharma, and diagnostic labs hire steadily. | Roughly ₹3.5L–6L a year at entry, stronger with an MSc or a pharma QA/QC certification.
- Alt: Comparison table for “BSc courses for PCB and BiPC students: the real list”: BSc course | Best for | Realistic…; BSc Biotechnology | Lab-oriented…; BSc Microbiology…
- Title attribute: BSc courses for PCB and BiPC students: the real list
- Caption (also keep the key point in the HTML text): Here is the honest BSc courses list for biology students after 12th, with real fit and pay context, not a generic rewrite of a college brochure.
**V4 — Comparison table** (place after the H2 “Paramedical and allied-health degrees worth researching by name” #paramedical)
- File: `courses-for-pcb-bipc-biology-students-after-12th-without-neet-comparison-paramedical-allied-health-degrees.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Paramedical courses get dismissed as a fallback, which is a mistake.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Paramedical course | Duration | Realistic monthly pay / Row: BSc Medical Lab… | 3 years | Roughly ₹20,000–60,000 a… / Row: BSc Radiography / Medical… | 3–4 years | Roughly ₹25,000–70,000 a… / Row: BSc Optometry | 3–4 years | Roughly ₹20,000–55,000 a… / Row: Bachelor of Physiotherapy… | 4.5 years including… | Roughly ₹25,000–80,000 a… / Row: BSc Anaesthesia and OT… | 3 years | Roughly ₹20,000–60,000 a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Paramedical course Duration Realistic monthly pay BSc Medical Lab Technology (BMLT) 3 years Roughly ₹20,000–60,000 a month depending on employer and experience. | BSc Radiography / Medical Imaging Technology 3–4 years Roughly ₹25,000–70,000 a month; CT/MRI specialisation pays more. | BSc Optometry 3–4 years Roughly ₹20,000–55,000 a month; a private practice or franchise raises the ceiling considerably.
- Alt: Comparison table for “Paramedical and allied-health degrees worth…”: Paramedical course | Duration |…; BSc Medical Lab… | 3 years | Roughly…; BSc Radiography /…
- Title attribute: Paramedical and allied-health degrees worth researching by name
- Caption (also keep the key point in the HTML text): Paramedical courses get dismissed as a fallback, which is a mistake.
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “Free and paid online courses worth adding to any of these degrees” #online)
- File: `courses-for-pcb-bipc-biology-students-after-12th-without-neet-asymmetrical-free-paid-online-courses.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Whichever course you pick, do not stop learning the day the syllabus stops covering it.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Whichever course you pick, do not stop learning the day the syllabus stops… / A biology degree plus one real digital or quantitative skill on top… / Bioinformatics Sample it free before you commit years to a masters in it Johns…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Free and paid online courses worth adding to any of…”: Whichever course you pick, do not…; A biology degree plus one…
- Title attribute: Free and paid online courses worth adding to any of these degrees
- Caption (also keep the key point in the HTML text): Whichever course you pick, do not stop learning the day the syllabus stops covering it.
**V6 — Asymmetrical pros-and-cons comparison** (place after the H2 “College spend vs skill budget: where the money should actually go” #budget)
- File: `courses-for-pcb-bipc-biology-students-after-12th-without-neet-asymmetrical-college-spend-skill-budget.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: College fees are only one part of the real cost of getting good at something.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): College fees are only one part of the real cost of getting good at something. / Spending everything on the degree and leaving nothing for tools… / The 10% starting rule Treat 10% of your total education budget as the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): The 10% starting rule Treat 10% of your total education budget as the college-fee benchmark If your family has ₹10 lakh set aside for your education, roughly ₹1 lakh is the conservative starting point for the degree itself. | The remaining ₹9 lakh stays for tools, certifications, a masters if the field genuinely needs one, and the runway to your first real income. | When to spend more Only when the college creates a verified advantage Government agricultural universities, top nursing colleges with real clinical rotations, and NIRF-ranked biotechnology departments with genuine lab access and placement records can justify s
- Alt: Asymmetrical pros-and-cons comparison for “College spend vs skill budget: where the money should…”: College fees are only one part of the…; Spending everything on…
- Title attribute: College spend vs skill budget: where the money should actually go
- Caption (also keep the key point in the HTML text): College fees are only one part of the real cost of getting good at something.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/courses-for-pcm-mpc-science-students-after-12th/

**H1:** Degree Courses List for PCM/MPC/Science Students After 12th, Mapped by Exam  
**Category:** college-degrees · **Words:** 4597 · **H2 sections:** 18 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Degree Courses List for PCM/MPC/Science Students After…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/courses-for-pcm-mpc-science-students-after-12th*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Why this list feels…”, “B.Tech branches and the…”, “BSc vs BTech: the…”, “The 4-Checkpoint…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 92%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `courses-for-pcm-mpc-science-students-after-12th.webp`, `courses-for-pcm-mpc-science-students-after-12th-detail.webp`, `courses-for-pcm-mpc-science-students-after-12th-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `courses-for-pcm-mpc-science-students-after-12th-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `courses-for-pcm-mpc-science-students-after-12th-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Close desk-level detail with a partly visible person of a Class 12 or first-year medical aspirant, a classroom desk after hours. Props that belong to “Degree Courses List for PCM/MPC/Science Students After 12th, Mapped by Exam”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Degree Courses List for PCM/MPC/Science Students After 12th, Mapped…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `courses-for-pcm-mpc-science-students-after-12th-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Courses for PCM/MPC/science students after 12th: the full degree list from BTech and BSc to BArch, actuarial…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why the courses list for PCM/MPC students feels shorter than it… / The full degree courses list for PCM/MPC students after 12th / B.Tech branches and the exams that actually open them / BSc Physics, Chemistry, Maths, Computer Science, Statistics, and Data… / BCA and B.Arch: the two most underrated PCM routes
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Degree Courses List for PCM/MPC/Science Students After 12th, Mapped…”
- Title attribute: At a glance: Degree Courses List for PCM/MPC/Science Students After…
- Caption (also keep the key point in the HTML text): Courses for PCM/MPC/science students after 12th: the full degree list from BTech and BSc to BArch, actuarial science, Merchant Navy, and NDA, mapped…
**V2 — Comparison table** (place after the H2 “The full degree courses list for PCM/MPC students after 12th” #full-list)
- File: `courses-for-pcm-mpc-science-students-after-12th-comparison-full-degree-courses-list.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Here is every real course family that a PCM (Physics, Chemistry, Maths) or MPC combination opens, with the…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Course family | Specific courses | Entrance route / Row: Engineering and applied… | BTech / BE (CS, IT, ECE… | JEE Main, JEE Advanced… / Row: Pure and applied sciences | BSc Physics, Chemistry… | CUET, university merit… / Row: Computer applications | BCA (Bachelor of Computer… | CUET or direct… / Row: Design and architecture | BArch, BPlanning, BDes… | NATA, JEE Main Paper 2… / Row: Integrated research… | 5-year BS-MS integrated… | IISER Aptitude Test…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “The full degree courses list for PCM/MPC students…”: Course family | Specific courses |…; Engineering and applied… | BTech / BE…; Pure and…
- Title attribute: The full degree courses list for PCM/MPC students after 12th
- Caption (also keep the key point in the HTML text): Here is every real course family that a PCM (Physics, Chemistry, Maths) or MPC combination opens, with the entrance exam that leads into it.
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “BCA and B.Arch: the two most underrated PCM routes” #bca-barch)
- File: `courses-for-pcm-mpc-science-students-after-12th-stat-bca-arch-two-most.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: These two get skipped in most "PCM courses" lists, even though both are real, fundable degrees with clear…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You want a tech career but do not want, or cannot afford, a 4-year BTech. / You are comfortable building your own project portfolio instead of leaning on a college… / You may want to add an MCA or a specialised certification later for a stronger ceiling. / You combine spatial thinking, design sense, and technical discipline, not just "liking to… / You can commit to a 5-year professional degree, not a 3-4 year one.
- Numbers: use ONLY these facts from the article (exact values, no new ones): B.Arch fits when You combine spatial thinking, design sense, and technical discipline, not just "liking to draw." You can commit to a 5-year professional degree, not a 3-4 year one.
- Alt: Stat panel or bar chart (only the numbers listed) for “BCA and B.Arch: the two most underrated PCM routes”: You want a tech career but do not…; You are comfortable…
- Title attribute: BCA and B.Arch: the two most underrated PCM routes
- Caption (also keep the key point in the HTML text): These two get skipped in most "PCM courses" lists, even though both are real, fundable degrees with clear outcomes.
**V4 — Comparison table** (place after the H2 “Every entrance exam a PCM/MPC student should track” #exams-map)
- File: `courses-for-pcm-mpc-science-students-after-12th-comparison-every-entrance-exam-pcm.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Knowing which exam opens which door early gives you real backups instead of a single point of failure.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Exam | Leads to | What to verify / Row: JEE Main | NITs, IIITs, GFTIs, and… | Two sessions a year… / Row: JEE Advanced | The 23 IITs | Only the top scorers from… / Row: BITSAT | BITS Pilani, Goa, and… | Run by BITS itself, not… / Row: State CETs (MHT-CET… | State government and… | Often the most… / Row: IISER Aptitude Test (IAT) | 5-year BS-MS integrated… | Needs roughly 60%…
- Numbers: use ONLY these facts from the article (exact values, no new ones): IISER Aptitude Test (IAT) 5-year BS-MS integrated science degree at the IISERs Needs roughly 60% aggregate in Class 12 (55% for SC/ST/PwD) across three of Biology, Chemistry, Maths, and Physics. | IMU CET BSc Nautical Science, BTech Marine Engineering, and other Merchant Navy officer-track courses Needs at least 60% in PCM together at Class 12 and 50% in English; age and physical-fitness limits apply, so check the current Indian Maritime University noti
- Alt: Comparison table for “Every entrance exam a PCM/MPC student should track”: Exam | Leads to | What to verify; JEE Main | NITs, IIITs, GFTIs, and… |…; JEE Advanced |…
- Title attribute: Every entrance exam a PCM/MPC student should track
- Caption (also keep the key point in the HTML text): Knowing which exam opens which door early gives you real backups instead of a single point of failure.
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “BSc vs BTech: the honest decision most students skip” #bsc-vs-btech)
- File: `courses-for-pcm-mpc-science-students-after-12th-asymmetrical-bsc-btech-honest-decision.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is one of the most common debates on student forums and career Q&A threads, and the honest answer is…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You want a tech or data career but do not want four years locked into one engineering… / Your family budget genuinely cannot stretch to a 4-year BTech at a college that adds real… / You already know you want a research, teaching, or MSc route after graduation. / You are comfortable building your own proof of work instead of leaning on a college brand. / The specific engineering licence, lab access, or campus placement pipeline genuinely…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “BSc vs BTech: the honest decision most students skip”: You want a tech or data career but do…; Your family budget…
- Title attribute: BSc vs BTech: the honest decision most students skip
- Caption (also keep the key point in the HTML text): This is one of the most common debates on student forums and career Q&A threads, and the honest answer is that neither option is universally better.
**V6 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “How much of your budget a degree should actually eat” #college-filter)
- File: `courses-for-pcm-mpc-science-students-after-12th-stat-much-budget-degree-should.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Whichever course you pick, the college fee is only one part of building an actual career — and treating it as…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): If your family's full education budget is roughly Rs 10 lakh, start by planning around Rs… / The remaining Rs 9 lakh stays available for internet, tools, books, projects… / This is a strict planning heuristic, not a universal rule — treat it as your starting… / The specific course needs an accredited degree by law — Merchant Navy officer ranks… / The institute has verified placement outcomes, lab or clinical access, or faculty and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): What the 10% heuristic actually means If your family's full education budget is roughly Rs 10 lakh, start by planning around Rs 1 lakh for the degree itself. | The remaining Rs 9 lakh stays available for internet, tools, books, projects, certifications, internships, and future upskilling — this is what actually builds a high-income skill portfolio.
- Alt: Stat panel or bar chart (only the numbers listed) for “How much of your budget a degree should actually eat”: If your family's full education…; The remaining Rs 9…
- Title attribute: How much of your budget a degree should actually eat
- Caption (also keep the key point in the HTML text): Whichever course you pick, the college fee is only one part of building an actual career — and treating it as the whole budget is one of the most…

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/cuet-eamcet-courses-for-pcb-bipc-biology-students/

**H1:** CUET and EAMCET courses for PCB/BiPC students: the real admission map  
**Category:** college-degrees · **Words:** 4679 · **H2 sections:** 16 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “CUET and EAMCET courses for PCB/BiPC students: the real…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/cuet-eamcet-courses-for-pcb-bipc-biology-students*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The direct answer”, “What CUET and EAMCET…”, “CUET courses list for…”, “What CUET doesn”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 92%, 93%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `cuet-eamcet-courses-for-pcb-bipc-biology-students.webp`, `cuet-eamcet-courses-for-pcb-bipc-biology-students-detail.webp`, `cuet-eamcet-courses-for-pcb-bipc-biology-students-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `cuet-eamcet-courses-for-pcb-bipc-biology-students-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `cuet-eamcet-courses-for-pcb-bipc-biology-students-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a Class 12 or first-year medical aspirant, a classroom desk after hours. Props that belong to “CUET and EAMCET courses for PCB/BiPC students: the real admission map”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: CUET and EAMCET courses for PCB/BiPC students: the real admission map
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `cuet-eamcet-courses-for-pcb-bipc-biology-students-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: CUET courses for PCB students and EAMCET courses for BiPC students, mapped honestly: which BSc, pharmacy…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): What CUET and EAMCET actually are, for a PCB/BiPC student / CUET courses list for PCB and biology students / What CUET doesn't guarantee for a PCB student / EAMCET courses for BiPC students / Can BiPC students do B.Tech through EAMCET?
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “CUET and EAMCET courses for PCB/BiPC students: the real admission map”
- Title attribute: At a glance: CUET and EAMCET courses for PCB/BiPC students: the real…
- Caption (also keep the key point in the HTML text): CUET courses for PCB students and EAMCET courses for BiPC students, mapped honestly: which BSc, pharmacy, agriculture, and biotech seats you can…
**V2 — Comparison table** (place after the H2 “CUET courses list for PCB and biology students” #cuet-courses)
- File: `cuet-eamcet-courses-for-pcb-bipc-biology-students-comparison-cuet-courses-list-pcb.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: This is the part most generic "PCB career options" advice skips: what a CUET score actually, currently gets a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Course | What it actually… / Row: BSc Life Sciences /… | The most direct CUET… / Row: BSc Biotechnology /… | Runs on a similar… / Row: BSc Nursing (at… | Some universities admit… / Row: BSc Agriculture /… | A subset of state… / Row: General degrees: BA… | Most BA and BCom programs… / How CUET's domain-subject rule actually works
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “CUET courses list for PCB and biology students”: Course | What it actually…; BSc Life Sciences /… | The most…; BSc Biotechnology /… | Runs on…
- Title attribute: CUET courses list for PCB and biology students
- Caption (also keep the key point in the HTML text): This is the part most generic "PCB career options" advice skips: what a CUET score actually, currently gets a biology-stream student into.
**V3 — Comparison table** (place after the H2 “EAMCET courses for BiPC students” #eamcet-courses)
- File: `cuet-eamcet-courses-for-pcb-bipc-biology-students-comparison-eamcet-courses-bipc-students.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Here is the real, current list of course families the BiPC-group paper in AP/TS EAPCET admits you to.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Course | What it actually… / Row: B.Pharm and Pharm.D | The core pharmacy route… / Row: BSc (Hons) Agriculture… | Biology is the… / Row: BSc (Hons) Forestry | A dedicated BiPC-only… / Row: BFSc (Fisheries Science) | Also admitted through the… / Row: B.V.Sc & Animal Husbandry… | Veterinary science seats…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Comparison table for “EAMCET courses for BiPC students”: Course | What it actually…; B.Pharm and Pharm.D | The core…; BSc (Hons) Agriculture… | Biology is…
- Title attribute: EAMCET courses for BiPC students
- Caption (also keep the key point in the HTML text): Here is the real, current list of course families the BiPC-group paper in AP/TS EAPCET admits you to.
**V4 — Asymmetrical pros-and-cons comparison** (place after the H2 “CUET vs EAMCET for a PCB/BiPC student” #cuet-vs-eamcet)
- File: `cuet-eamcet-courses-for-pcb-bipc-biology-students-asymmetrical-cuet-eamcet-pcb-bipc.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Once you know what each exam actually opens, the comparison gets much simpler.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): A state-level exam covering Andhra Pradesh and Telangana colleges mainly. / Opens pharmacy, agriculture, forestry, fisheries, biotechnology, and food technology… / Score converts into a rank used inside state counselling, with reserved-category and… / Most B.Tech engineering branches stay closed to BiPC candidates, with a small… / A national test used by central universities and a large, growing list of state and…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “CUET vs EAMCET for a PCB/BiPC student”: A state-level exam covering Andhra…; Opens pharmacy, agriculture…; Score converts…
- Title attribute: CUET vs EAMCET for a PCB/BiPC student
- Caption (also keep the key point in the HTML text): Once you know what each exam actually opens, the comparison gets much simpler.
**V5 — Linear process chain or roadmap** (place after the H2 “Step-by-step: from registration to an actual admitted seat” #process)
- File: `cuet-eamcet-courses-for-pcb-bipc-biology-students-linear-step-step-registration-actual.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Sitting the exam is the easy part.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Register for CUET-UG on the official NTA portal, and separately for AP/TS EAPCET if you… / Choose your domain subjects (CUET) or confirm your BiPC-group paper (EAPCET) carefully.… / Sit the exam and wait for your score or rank, not a fixed pass mark. CUET reports a… / Register separately for each university's CUET-based admission process, or for EAPCET… / Work through counselling rounds and confirm your seat by each round's deadline. Both…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear process chain or roadmap for “Step-by-step: from registration to an actual admitted…”: Register for CUET-UG on the official…; Choose your domain subjects…
- Title attribute: Step-by-step: from registration to an actual admitted seat
- Caption (also keep the key point in the HTML text): Sitting the exam is the easy part.
**V6 — Decision tree** (place after the H2 “Which exam should you actually sit” #fit)
- File: `cuet-eamcet-courses-for-pcb-bipc-biology-students-decision-exam-should-actually-sit.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: CUET is the stronger fit when You want geographic flexibility and are open to studying outside your home…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): You want geographic flexibility and are open to studying outside your home state. / Your real interest is core life-science, biotechnology, or a general-stream pivot rather… / You value the wide net of many participating universities over a single state's seat pool. / You want pharmacy, agriculture, forestry, fisheries, or biotechnology, and you are… / You want a state-level counselling process with a large, known number of BiPC-linked…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Decision tree for “Which exam should you actually sit”: You want geographic flexibility and…; Your real interest is core…; You value the wide net of many…
- Title attribute: Which exam should you actually sit
- Caption (also keep the key point in the HTML text): CUET is the stronger fit when You want geographic flexibility and are open to studying outside your home state.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/job-oriented-courses-for-ece-students/

**H1:** Job-Oriented Courses for ECE Students: Choose the Track First  
**Category:** college-degrees · **Words:** 5312 · **H2 sections:** 20 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Job-Oriented Courses for ECE Students: Choose the Track…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/job-oriented-courses-for-ece-students*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Why the course comes…”, “The six tracks, led by…”, “Embedded and firmware…”, “VLSI: real pull, narrow…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 92%, 92%, 93%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `job-oriented-courses-for-ece-students.webp`, `job-oriented-courses-for-ece-students-detail.webp`, `job-oriented-courses-for-ece-students-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `job-oriented-courses-for-ece-students-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `job-oriented-courses-for-ece-students-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Top-down desk view with hands in frame of a Class 12 or first-year medical aspirant, a family dining table in the evening. Props that belong to “Job-Oriented Courses for ECE Students: Choose the Track First”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Job-Oriented Courses for ECE Students: Choose the Track First
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `job-oriented-courses-for-ece-students-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Job-oriented courses for ECE students in India: embedded, VLSI, PLC, EV, a software bridge and GATE compared…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Why the course comes second for ECE / The six tracks, led by how far each can scale / Embedded and firmware: the best-balanced bet / VLSI: real pull, narrow door / The software bridge for ECE students
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Job-Oriented Courses for ECE Students: Choose the Track First”
- Title attribute: At a glance: Job-Oriented Courses for ECE Students: Choose the Track…
- Caption (also keep the key point in the HTML text): Job-oriented courses for ECE students in India: embedded, VLSI, PLC, EV, a software bridge and GATE compared on cost, proof and real openings.
**V2 — Comparison table** (place after the H2 “GATE, ISRO and BEL: the government route” #govt-gate)
- File: `job-oriented-courses-for-ece-students-comparison-gate-isro-bel-government.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: ECE is one of the branches that PSUs, defence and space organisations hire for.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Route | What the latest… | What to do / Row: GATE 2027 | Organised by IIT Madras.… | Register on the official… / Row: BEL Trainee Engineer | Reported for the December… | These details come from… / Row: ISRO Scientist/Engineer… | Advertisement… | If you applied, practise…
- Numbers: use ONLY these facts from the article (exact values, no new ones): BEL Trainee Engineer Reported for the December 2025 notice: 119 posts, 65 in Electronics, filled through a walk-in with a written test of 100 marks, 0.25 negative marking and 35% qualifying for general candidates. | Trainee Engineer-I pay was reported at ₹30,000 a month.
- Alt: Comparison table for “GATE, ISRO and BEL: the government route”: Route | What the latest… | What to do; GATE 2027 | Organised by IIT Madras.……; BEL Trainee Engineer…
- Title attribute: GATE, ISRO and BEL: the government route
- Caption (also keep the key point in the HTML text): ECE is one of the branches that PSUs, defence and space organisations hire for.
**V3 — Comparison table** (place after the H2 “GATE ECE by the numbers” #gate-numbers)
- File: `job-oriented-courses-for-ece-students-comparison-gate-ece-numbers.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: IIT Guwahati's GATE 2026 report gives the last full year of Electronics and Communication data.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Measure | Figure | What it means / Row: Registered to appeared | 115,448 registered… | About one in six who paid… / Row: Appeared to qualified | 17,392 qualified (about… | Roughly four in five… / Row: General qualifying mark | 26.4 out of 100 (23.7… | Qualifying is a low bar.… / Row: Qualified per ESE 2027… | 17,392 qualified against… | A scale check, not a…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Measure Figure What it means Registered to appeared 115,448 registered, 95,752 appeared (about 83%) About one in six who paid did not sit the paper. | Appeared to qualified 17,392 qualified (about 18% of those who appeared) Roughly four in five candidates fall below the qualifying mark. | In EE the share was about 21%.
- Alt: Comparison table for “GATE ECE by the numbers”: Measure | Figure | What it means; Registered to appeared | 115,448…; Appeared to qualified | 17,392…
- Title attribute: GATE ECE by the numbers
- Caption (also keep the key point in the HTML text): IIT Guwahati's GATE 2026 report gives the last full year of Electronics and Communication data.
**V4 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “Before you pay a training institute” #institute-test)
- File: `job-oriented-courses-for-ece-students-stat-before-pay-training-institute.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Some paid programmes do add value, especially where a college cannot supply tools or feedback.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Some paid programmes do add value, especially where a college cannot supply… / Many do not. / The information is largely free, so the fee has to buy something else: tools…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 01 Ask for the placement denominator A line like "90% placed" tells you nothing until you know how many joined, how many finished, and how many got a role that uses the skill you paid for. | Treat about 10% of the total education budget as a starting cap for any single paid programme, and keep the rest for boards, tools, travel and the next skill. | Going above roughly 20% needs course-specific evidence, such as verified placement numbers and real tool access.
- Alt: Stat panel or bar chart (only the numbers listed) for “Before you pay a training institute”: Some paid programmes do add value…; Many do not.; The information is…
- Title attribute: Before you pay a training institute
- Caption (also keep the key point in the HTML text): Some paid programmes do add value, especially where a college cannot supply tools or feedback.
**V5 — Chronological timeline** (place after the H2 “What a working week of upskilling looks like” #weekly-reality)
- File: `job-oriented-courses-for-ece-students-chronological-working-week-upskilling-looks.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Third and final-year ECE students have labs, viva prep, assignments and placement tests.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Third and final-year ECE students have labs, viva prep, assignments and… / A plan that ignores that fails within the first few weeks. / Weekdays after classes Short, repeatable blocks Forty-five minutes on one…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “What a working week of upskilling looks like”: Third and final-year ECE students…; A plan that ignores that fails within…; Weekdays…
- Title attribute: What a working week of upskilling looks like
- Caption (also keep the key point in the HTML text): Third and final-year ECE students have labs, viva prep, assignments and placement tests.
**V6 — Decision tree** (place after the H2 “Official pages to check before you decide” #official-pages)
- File: `job-oriented-courses-for-ece-students-decision-official-pages-check-before.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Dates, fees and eligibility change every cycle, so confirm each figure at its source.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): GATE 2027 official site (IIT Madras) for registration, exam and result dates. / Press Information Bureau note on the Chips to Startups programme for the 85,000-engineer… / India Semiconductor Mission for design-tool access and the direction of ISM 2.0. / NPTEL for free IIT and IISc course content and current certification exam details. / ISRO recruitment notice ICRB:03(EMC):2026 for the current Scientist/Engineer 'SC' cycle…
- Numbers: use ONLY these facts from the article (exact values, no new ones): NTA SWAYAM certification fee notice, as summarised by Careers360 for the ₹750 and ₹600 exam fees.
- Alt: Decision tree for “Official pages to check before you decide”: GATE 2027 official site (IIT Madras)…; Press Information Bureau note on the…; India Semiconductor…
- Title attribute: Official pages to check before you decide
- Caption (also keep the key point in the HTML text): Dates, fees and eligibility change every cycle, so confirm each figure at its source.

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/mba-vs-professional-certification-india/

**H1:** MBA vs professional certification India: what actually pays off, tier by tier  
**Category:** college-degrees · **Words:** 3475 · **H2 sections:** 10 · **Search priority:** P3 (0 clicks, 21 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “MBA vs professional certification India: what actually pays…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/mba-vs-professional-certification-india*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“Mba”, “Professional…”, “The short answer”, “What each one actually…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 89%, 90%, 91%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `mba-vs-professional-certification-india.webp`, `mba-vs-professional-certification-india-detail.webp`, `mba-vs-professional-certification-india-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `mba-vs-professional-certification-india-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `mba-vs-professional-certification-india-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a working professional after office hours, a neighbourhood cafe table. Props that belong to “MBA vs professional certification India: what actually pays off, tier by tier”: a ledger, calculator, balance sheet printouts, a laptop. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: MBA vs professional certification India: what actually pays off, tier…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 5 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `mba-vs-professional-certification-india-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: MBA vs professional certification India compared on real cost, time, and employer signal, plus which career…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer on MBA vs professional certification in India / What each one actually signals to employers / Cost and time: the real numbers / When a certification takes you further than an MBA / When only an MBA opens the door
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “MBA vs professional certification India: what actually pays off, tier…”
- Title attribute: At a glance: MBA vs professional certification India: what actually…
- Caption (also keep the key point in the HTML text): MBA vs professional certification India compared on real cost, time, and employer signal, plus which career tracks PMP, CFA, and analytics…
**V2 — Asymmetrical pros-and-cons comparison** (place after the H2 “The short answer on MBA vs professional certification in India” #short-answer)
- File: `mba-vs-professional-certification-india-asymmetrical-short-answer-mba-professional.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Most people frame this as MBA versus certification, as if one is simply the upgraded version of the other.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Most people frame this as MBA versus certification, as if one is simply the… / It is not. / They are built to solve different problems, and treating them as…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “The short answer on MBA vs professional certification…”: Most people frame this as MBA versus…; It is not.; They are…
- Title attribute: The short answer on MBA vs professional certification in India
- Caption (also keep the key point in the HTML text): Most people frame this as MBA versus certification, as if one is simply the upgraded version of the other.
**V3 — Self-assessment checklist** (place after the H2 “What each one actually signals to employers” #what-each-signals)
- File: `mba-vs-professional-certification-india-self-each-one-actually-signals.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Strip away the prestige talk and look at what a resume line actually communicates to the person reading it in…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Broad exposure to strategy, finance, operations, and marketing, not deep mastery of one / A peer network and, at top institutes, a direct campus-recruiting pipeline / A signal of general-management potential, tested through case discussions and group work / An institutional brand that substitutes for track record when switching industries… / Depth in one specific, checkable competency: scheduling, valuation, SQL, ad platforms…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Self-assessment checklist for “What each one actually signals to employers”: Broad exposure to strategy, finance…; A peer network and, at top…; A signal of…
- Title attribute: What each one actually signals to employers
- Caption (also keep the key point in the HTML text): Strip away the prestige talk and look at what a resume line actually communicates to the person reading it in thirty seconds.
**V4 — Comparison table** (place after the H2 “Cost and time: the real numbers” #cost-time)
- File: `mba-vs-professional-certification-india-comparison-cost-time-real-numbers.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: The gap here is larger than most people expect before they price it out properly.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: Path | Typical cost | Typical time | What it actually… / Row: MBA, top-tier (IIM A/B/C… | Roughly Rs 26-40 lakh in… | 1-2 years out of the… | Case-method reasoning, a… / Row: MBA, mid-tier or state… | Roughly Rs 8-16 lakh in… | 2 years out of the… | Broad business… / Row: PMP (Project Management… | Roughly Rs… | A few months of dedicated… | You can run a project… / Row: CFA (Chartered Financial… | Roughly Rs 5-9 lakh total… | 3-4 years part-time… | Deep investment… / Row: Digital marketing… | Roughly Rs… | A few weeks to 6 months… | Tool-level competence in…
- Numbers: use ONLY these facts from the article (exact values, no new ones): Path Typical cost Typical time What it actually proves MBA, top-tier (IIM A/B/C, ISB, FMS-level) Roughly Rs 26-40 lakh in fees, 1-2 years full-time 1-2 years out of the workforce Case-method reasoning, a strong peer network, and campus recruiting access most e | MBA, mid-tier or state university Roughly Rs 8-16 lakh in fees, 2 years 2 years out of the workforce Broad business fundamentals; placement quality depends heavily on the specific campus, not the MBA label. | PMP (Project Management Professional) Roughly Rs 60,000-2,25,000 including exam fee and prep, depending on training route A few months of dedicated prep, while you keep working You can run a project against a recognised standard — scope, schedule, risk, and st
- Alt: Comparison table for “Cost and time: the real numbers”: Path | Typical cost | Typical time |…; MBA, top-tier (IIM A/B/C… | Roughly…; MBA, mid-tier or state… |…
- Title attribute: Cost and time: the real numbers
- Caption (also keep the key point in the HTML text): The gap here is larger than most people expect before they price it out properly.
**V5 — Linear next-step plan** (place after the H2 “What to do next” #next-step)
- File: `mba-vs-professional-certification-india-linear-next.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Do not answer "MBA or certification" in the abstract, based on what one relative, one coaching institute, or…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Is IIM worth the cost in India? The real fee-to-placement math / MBA without work experience India: who takes freshers, who does not / Is an executive MBA worth it in India? Only for one specific profile / MBA salary growth over time in India: the real curve, tier by tier
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Linear next-step plan for “What to do next”: Is IIM worth the cost in India? The…; MBA without work experience India…; Is an executive MBA worth it in…
- Title attribute: What to do next
- Caption (also keep the key point in the HTML text): Do not answer "MBA or certification" in the abstract, based on what one relative, one coaching institute, or one LinkedIn success story told you.

**Done when:** hero + 5 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---

### /blog/college-degrees/online-courses-for-mba-students/

**H1:** Online courses for MBA students: what actually pays off alongside your degree  
**Category:** college-degrees · **Words:** 4928 · **H2 sections:** 17 · **Search priority:** P3 (0 clicks, 0 impressions)  
**Status: RED — GENERIC FALLBACK ONLY** · og:image: generic site SVG (not a hero, SVG is not shown by most social platforms)

**Findings**
1. 7 category-level stock images are injected on this page (`/images/blog/category/…`). The same files are reused on up to 34 other articles, with identical alt text and captions, so they say nothing specific about “Online courses for MBA students: what actually pays off…”.
2. They are rendered by `BlogFallbackVisual` appended at the end of `<body>` and moved into the article by an inline script in `BaseLayout.astro`; the group is `display:none` until that script runs, so crawlers, social unfurlers and no-JS visitors do not see them, and visitors get a layout shift.
3. 3 auto-generated “page-card” images (`/images/blog/page-cards/college-degrees/online-courses-for-mba-students*.webp`) are used as the supporting visuals. They are produced by `scripts/generate-blog-page-cards.cjs` from the H2 headings: the title is re-wrapped incorrectly (words re-ordered), box labels are cut with “…”, labels are only heading fragments (“The short answer”, “Why the MBA alone often…”, “Finance MBA: what to…”, “Marketing MBA: what to…”), and the format words (“checklist”, “matrix”, “roadmap”) are not backed by real content. They teach nothing the heading does not already say. OCR of the image heading reads “”, which does not match the article title.
4. Their alt text/caption are templated (“<title>: <fragment>: primary explainer showing …”, “A checklist explaining … for this article.”), not human-written descriptions.

**Current images**

Generic/template images present: 7 category, 3 page-card, 0 page-context (positions 91%, 92%, 92%… of the page, i.e. after the article).

**Required actions**
1. REMOVE the category images from this route: `college-degrees-editorial-cover.webp`, `college-degrees-context.webp`, `college-degrees-chain.webp`, `college-degrees-compare.webp`, `college-degrees-proof.webp`, `college-degrees-portfolio.webp`, `college-degrees-at-a-glance.webp`.
2. REMOVE the three page-card images and delete the generated files for this route: `online-courses-for-mba-students.webp`, `online-courses-for-mba-students-detail.webp`, `online-courses-for-mba-students-action.webp`.
3. Set og:image and twitter:image to this article's own hero (JPG/WebP 1200×630). Do not use the generic `/og-image.svg`.
4. CREATE hero:
- Reason: no article-specific hero exists (category stock image only)
- File: `online-courses-for-mba-students-hero.webp`, 1600×900, WebP under 150 KB, `loading="eager"` + `fetchpriority="high"`, also export `online-courses-for-mba-students-social.jpg` 1200×630 and set it as og:image/twitter:image
- Scene: documentary photograph, natural light. Over-the-shoulder shot of a Class 12 or first-year medical aspirant, a classroom desk after hours. Props that belong to “Online courses for MBA students: what actually pays off alongside your degree”: stethoscope, NEET/NCERT books, a fee sheet, a notebook. Candid gesture, believable Indian clothing and surroundings, restrained palette (ink blue, forest green, olive, clay, saffron, cream). No readable text unless a very short title treatment genuinely helps. Do not reuse the same desk, pose or person as other articles.
- Alt: describe what is visible and why it fits this article (not generic).
- Title attribute: Online courses for MBA students: what actually pays off alongside…
- Caption: one sentence tying the scene to the article's decision.
5. CREATE 6 supporting visuals (new, because the page has fewer than the 5-7 target):
**V1 — At-a-glance key-takeaways summary card** (after the intro, before the first H2)
- File: `online-courses-for-mba-students-at-a-glance-summary.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Online courses for MBA students, sorted by specialization: which Coursera/edX picks, CFA, PMP, Six Sigma, and…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): The short answer / Why the MBA alone often falls short on specific skills / Run this audit before you enroll in anything / Finance MBA: what to actually add / Marketing MBA: what to actually add
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Summary card listing the key points of “Online courses for MBA students: what actually pays off alongside…”
- Title attribute: At a glance: Online courses for MBA students: what actually pays off…
- Caption (also keep the key point in the HTML text): Online courses for MBA students, sorted by specialization: which Coursera/edX picks, CFA, PMP, Six Sigma, and Google certs are worth your time and…
**V2 — Comparison table** (place after the H2 “Run this audit before you enroll in anything” #audit-first)
- File: `online-courses-for-mba-students-comparison-run-audit-before-enroll.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Before picking any specific course, apply the same discipline you would use vetting any paid learning…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Columns: What to check | Weak signal (slow… | Strong signal (green… / Row: Curriculum currency | Syllabus reads the same… | Named current tools and… / Row: Instructor proof | "Industry veteran" with… | Named faculty or… / Row: Outcome claims | A single "95% got a… | A stated sample size, a… / Row: What you actually build | Only quizzes and… | A capstone project… / Row: Recognition where it… | A credential your target… | A credential that shows…
- Numbers: use ONLY these facts from the article (exact values, no new ones): specific Excel/Power BI functions, a named AI-assisted workflow) and a visible last-updated date Instructor proof "Industry veteran" with no name, no LinkedIn, no independently checkable project history Named faculty or practitioner with a searchable, current 
- Alt: Comparison table for “Run this audit before you enroll in anything”: What to check | Weak signal (slow… |…; Curriculum currency | Syllabus reads…; Instructor proof…
- Title attribute: Run this audit before you enroll in anything
- Caption (also keep the key point in the HTML text): Before picking any specific course, apply the same discipline you would use vetting any paid learning product: check whether the curriculum is…
**V3 — Stat panel or bar chart (only the numbers listed)** (place after the H2 “How much of your MBA budget one course should eat” #budget)
- File: `online-courses-for-mba-students-stat-much-mba-budget-one.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: An MBA is already a significant financial commitment, especially at a top-tier institute where fees can run…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): An MBA is already a significant financial commitment, especially at a top-tier… / As a strict planning heuristic, not a universal rule, cap what you spend on any… / Treat spending materially above that, say past 20%, as a serious caution point…
- Numbers: use ONLY these facts from the article (exact values, no new ones): As a strict planning heuristic, not a universal rule, cap what you spend on any single outside course or certification at roughly 10% of the total budget you have realistically set aside for skill-building and education across your MBA years. | Treat spending materially above that, say past 20%, as a serious caution point that needs specific justification: a genuinely required credential for your target role, verified strong outcomes with real numbers attached, or access to supervised practice you ca
- Alt: Stat panel or bar chart (only the numbers listed) for “How much of your MBA budget one course should eat”: An MBA is already a significant…; As a strict planning…
- Title attribute: How much of your MBA budget one course should eat
- Caption (also keep the key point in the HTML text): An MBA is already a significant financial commitment, especially at a top-tier institute where fees can run into several lakhs of rupees a year…
**V4 — Chronological timeline** (place after the H2 “When to take these: before, during, or after the MBA” #sequencing)
- File: `online-courses-for-mba-students-chronological-take-these-before-during.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Timing matters more than most students plan for.
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 1 Before the MBA or in the first term: fill genuine background gaps If you are coming… / 2 Between terms or over the summer: build the applied project This is the natural window… / 3 In the final term or right after: target the specific interview gap Once you know the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Chronological timeline for “When to take these: before, during, or after the MBA”: 1 Before the MBA or in the first…; 2 Between terms or over the summer…; 3 In the…
- Title attribute: When to take these: before, during, or after the MBA
- Caption (also keep the key point in the HTML text): Timing matters more than most students plan for.
**V5 — Asymmetrical pros-and-cons comparison** (place after the H2 “Free channels and resources worth using before you pay for anything” #youtube)
- File: `online-courses-for-mba-students-asymmetrical-free-channels-resources-worth.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: Try the free route on any narrow skill before committing money, especially for case-solving practice, where…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): Try the free route on any narrow skill before committing money, especially for… / Case and consulting prep Hacking the Case Interview, Management Consulted… / Structuring practice Crafting Cases, RocketBlocks Useful for building issue…
- Numbers: use ONLY these facts from the article (exact values, no new ones): none in this section, so do not put any number, salary, percentage or ranking on the image
- Alt: Asymmetrical pros-and-cons comparison for “Free channels and resources worth using before you pay…”: Try the free route on any narrow…; Case and consulting prep…
- Title attribute: Free channels and resources worth using before you pay for anything
- Caption (also keep the key point in the HTML text): Try the free route on any narrow skill before committing money, especially for case-solving practice, where the best resources are genuinely free and…
**V6 — Mistakes versus smarter move panel** (place after the H2 “Mistakes MBA students make with online courses” #mistakes)
- File: `online-courses-for-mba-students-mistakes-mistakes-mba-students-make.webp` · 1600×1000 landscape WebP (or portrait 1080×1350 if the content needs it), under 200 KB
- Teaches: 01 Collecting five unrelated certificates instead of going deep on one A resume with a CFA Level 1 attempt, a…
- On-image text (keep to about 25-40 words in total; shorten the article wording, never add claims): 01 Collecting five unrelated certificates instead of going deep on one A resume… / 02 Choosing a course by brand name instead of by the specific syllabus A… / The specific instructor, syllabus, and capstone decide the value — not the…
- Numbers: use ONLY these facts from the article (exact values, no new ones): 03 Starting CFA Level 1 without checking the real pass-rate and time cost CFA Level 1 pass rates typically run in the 35-45% range and each level asks for roughly 300 hours of study.
- Alt: Mistakes versus smarter move panel for “Mistakes MBA students make with online courses”: 01 Collecting five unrelated…; 02 Choosing a course by brand name…; The…
- Title attribute: Mistakes MBA students make with online courses
- Caption (also keep the key point in the HTML text): 01 Collecting five unrelated certificates instead of going deep on one A resume with a CFA Level 1 attempt, a random digital marketing badge, a Six…

**Done when:** hero + 6 explanatory visuals are in the article body (spread through the page, not clustered), every image has alt + title (+ caption where it teaches), no generic category/page-card files remain for this route, `pnpm verify` passes, and the page looks right at 390 px and 1280 px.

---
